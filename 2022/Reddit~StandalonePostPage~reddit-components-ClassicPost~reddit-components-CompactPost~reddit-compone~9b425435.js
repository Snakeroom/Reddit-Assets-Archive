// https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.2bba40d46e61228a614a.js
// Retrieved at 1/5/2022, 11:30:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435"], {
		"./src/lib/hooks/usePrevious.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js");

			function o(e) {
				const t = Object(n.useRef)();
				return Object(n.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				o = r("./node_modules/react/index.js"),
				s = r("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(n.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, r] = Object(o.useState)(null), [a, c] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), f = Object(o.useCallback)(() => m(!1), []), b = Object(o.useCallback)(() => m(!u), [u]), v = Object(o.useMemo)(() => {
					const t = i(e);
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
				} = Object(s.a)(t, a, v);
				return Object(o.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: g.arrow,
						...h.arrow
					},
					hide: f,
					popperProps: {
						ref: c,
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
				}), [l, h, c, f, p, g, t, r, b, u, O])
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/lodash/every.js"),
				o = r.n(n);

			function s(e) {
				let t = null,
					r = null;
				return (...n) => (null !== t && n.length === t.length && o()(n, (e, r) => e === t[r]) || (t = n, r = e(...n)), r)
			}
		},
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return o
			}));
			const n = "CREATOR_STATS_PENDING",
				o = "CREATOR_STATS_LOADED"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return c
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
			const o = e => () => r.e("CommunityAwards").then(r.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				s = Object(n.a)(o("awardSheetInfoRequested")),
				a = Object(n.a)(o("manageableAwardsRequested")),
				i = Object(n.a)(o("createCommunityAward")),
				c = Object(n.a)(o("createGlobalAward")),
				d = Object(n.a)(o("createModAward")),
				l = Object(n.a)(o("createAwardFailed")),
				u = Object(n.a)(o("createAwardSuccessful")),
				m = Object(n.a)(o("removeCommunityAward")),
				p = Object(n.a)(o("disableAwardinCommunity")),
				f = Object(n.a)(o("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return v
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "a", (function() {
				return w
			})), r.d(t, "f", (function() {
				return y
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/postParentMessage/index.ts"),
				s = r("./src/reddit/helpers/isPost.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/selectors/gild.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
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
					e(h()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: o
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(o()(n))
				}, O = Object(n.a)(b.K), j = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (n, o) => {
					const i = o(),
						c = e ? Object(u.a)(i, e) : void 0;
					n(O({
						award: c && c.isEnabled ? c : void 0,
						thingId: r,
						correlationId: t
					})), n(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const f = Object(p.H)(i, {
						thingId: r
					});
					let b = null;
					if (f) b = f.id;
					else if (Object(s.a)(r)) {
						const e = Object(m.H)(i, {
							postId: r
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, r)
				}, x = Object(n.a)(b.e), _ = Object(n.a)(b.J), w = () => async (e, t) => {
					const n = t(),
						s = Object(i.d)(n);
					if (Object(i.g)(n)) {
						const e = "close.gild";
						Object(o.a)({
							type: e
						})
					}
					e(x()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(s)(n)), Object(c.b)(c.a.GildingFlow)
				}, y = () => async () => {
					Object(o.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "e", (function() {
				return g
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "d", (function() {
				return j
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/config.ts"),
				i = r("./src/lib/constants/index.ts"),
				c = r("./src/lib/makeApiRequest/index.ts"),
				d = r("./src/lib/omitHeaders/index.ts"),
				l = r("./src/reddit/constants/headers.ts");
			var u = r("./src/reddit/reducers/features/avatar/index.ts"),
				m = r("./src/reddit/selectors/avatar.ts"),
				p = r("./src/reddit/actions/users.ts");
			Object(n.a)({
				features: {
					avatar: u.a
				}
			});
			const f = "SET_AVATAR_USER",
				b = Object(o.a)(f),
				v = "RANDOM_AVATAR_LOADED",
				h = Object(o.a)(v),
				g = (e, t, r) => async (n, o, {
					apiContext: s
				}) => {
					var u, f, b, v;
					const h = Object(m.b)(o()),
						g = await (async (e, t, r, n, o) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatar`,
							method: i.jb.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: r,
								...n
							}
						}))(s(), e, t, r, h);
					if (!g.ok) throw new Error("User avatar failed to save");
					return n(Object(p.A)(g.body)), {
						accountIcon: null === (f = null === (u = g.body) || void 0 === u ? void 0 : u.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (v = null === (b = g.body) || void 0 === b ? void 0 : b.avatar) || void 0 === v ? void 0 : v.image_url
					}
				}, O = () => async (e, t, {
					apiContext: r
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/account`,
							method: i.jb.GET
						}))(r());
						t.ok && e(b(t.body))
					} catch (n) {
						s.c.captureException(n)
					}
				}, j = () => async (e, t, {
					apiContext: r
				}) => {
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${a.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: i.jb.GET
						}))(r());
						t.ok && e(h(t.body))
					} catch (n) {
						s.c.captureException(n)
					}
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
				o = r("./src/reddit/actions/modal.ts"),
				s = r("./src/reddit/actions/users.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = r("./src/reddit/selectors/user.ts"),
				d = r("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const r = t();
				Object(d.a)(Object(i.j)(r)), e(Object(s.t)({
					forceFetch: !0
				})), await e(Object(o.g)(a.a.SNOOVATAR_MODAL))
			};

			function u(e = {}) {
				return async (t, r) => {
					const {
						clickSource: s,
						share: l,
						source: u
					} = e, m = r();
					s && Object(d.a)(Object(i.e)(s)(m)), Object(c.K)(m) ? await t(Object(o.h)(a.a.SNOOVATAR_MODAL, {
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
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/hooks/usePrevious.ts"),
				a = r("./src/realtime/GQLSubscription/async.tsx"),
				i = r("./src/reddit/hooks/useIntersectionObserver.ts");
			const c = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var d = r("./src/reddit/components/CountAnimation/index.m.less"),
				l = r.n(d);
			var u;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(u || (u = {}));
			const m = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: r,
					incrementDelta: d,
					initialDelay: u,
					initialDisplayCount: p,
					isLoadTestOnly: f,
					onDataCB: b,
					postId: v,
					queryKey: h,
					queryVariables: g,
					shouldDisjointAnimation: O,
					subsequentRecurringDelay: j
				} = e, [x, _] = Object(n.useState)(!1), [w, y] = Object(n.useState)(!0), [C, k] = Object(n.useState)([]), [I, S] = Object(n.useState)(c(p).reverse()), A = Object(n.useRef)(!1), P = Object(n.useRef)(null), E = Object(n.useRef)(e => {}), T = Object(n.useRef)();
				E.current = Object(n.useCallback)(e => {
					let r = e || d();
					const n = [...I].reverse().join("");
					let o = parseInt(n) + r;
					o > t && (r = t - parseInt(n), o = t);
					const s = c(o).reverse();
					_(!1), k(I), S(s), y(!1), T.current = setTimeout(() => {
						_(!0)
					}, 0)
				}, [t, d, I]);
				const N = Object(n.useRef)(() => {}),
					M = Object(n.useRef)(),
					R = Object(n.useRef)();
				N.current = Object(n.useCallback)(() => {
					R.current = setTimeout(() => {
						E.current();
						const e = [...C].reverse().join("");
						parseInt(e) < t && N.current()
					}, j())
				}, [t, j, C]);
				const F = Object(n.useRef)(0),
					D = Object(n.useRef)(!1),
					G = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: r
							} = e, n = 1 !== r;
							t ? (D.current = !0, A.current || (A.current = !0, M.current = setTimeout(() => {
								E.current(), N.current()
							}, u())), F.current > 0 && (E.current(F.current), F.current = 0)) : n && (D.current = !1)
						})
					}, []);
				Object(i.a)(P, G);
				const [B, L] = Object(n.useState)(!1), U = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: r
						} = e, n = 1 !== r;
						t ? L(!0) : n && L(!1)
					})
				}, []), V = Object(n.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(i.a)(P, U, V.current);
				const q = Object(s.a)(t);
				Object(n.useEffect)(() => {
					if (void 0 !== q && q !== t) {
						const e = t - q;
						D.current ? E.current(e) : F.current += e
					}
					return () => {
						clearTimeout(M.current), clearTimeout(R.current), clearTimeout(T.current)
					}
				}, [t]);
				const H = Object(n.useCallback)(() => y(!0), [y]),
					K = 0 === C.length,
					z = w || K,
					W = Object(n.useRef)(((e, t) => `${t}_${e}_count_anim`)(v, r));
				return o.a.createElement(o.a.Fragment, null, !f && o.a.createElement("div", {
					className: l.a.countAnimation
				}, I.map((e, t) => {
					const r = ((e, t) => {
						let r = Math.abs(e);
						const n = Math.abs(t),
							o = [r];
						if (r === n) return o;
						let s = !0;
						for (; s;) ++r > 9 && (r = 0), o.push(r), r === n && (s = !1);
						return o
					})(C[t] || 0, e);
					return o.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: H,
						style: x && C.length > 0 && !w ? {
							transform: `translateY(-${O&&r.length>1?100:100*(r.length-1)}%)`,
							transitionDuration: `${(O?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, z ? o.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : r.map((e, t) => {
						const n = 0 === t || t === r.length - 1;
						if (!O || O && n) return o.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), o.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...I].reverse().join(""))), o.a.createElement("span", {
					ref: P
				}), B && o.a.createElement(a.a, {
					variables: g,
					onData: f ? m : b,
					queryKey: h,
					uniqueKey: W.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/redditGQL/types.ts");
			const o = 16327836e5;
			var s;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available"
			}(s || (s = {}));
			const a = e => e > o,
				i = (e, t) => {
					if (!a(e.created)) return s.NotAvailable;
					if (!t) return s.NotAvailableYet;
					const {
						viewCountTotals: r,
						shareCountTotals: o
					} = t;
					return (null == r ? void 0 : r.status) === n.c.Unavailable && (null == o ? void 0 : o.status) === n.c.Unavailable ? s.NotAvailableYet : !(null == r ? void 0 : r.totalCount) || r.totalCount < 10 ? s.NotAvailableYet : s.Available
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
				o = r.n(n),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/controls/TextButton/index.tsx"),
				d = r("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = r.n(d);
			t.a = e => a.a.createElement(i.i, {
				className: l.a.modalHeader
			}, a.a.createElement(i.q, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || o.a
			}, a.a.createElement(i.b, null)))
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
				o = r("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				s = r.n(o);
			const a = n.a.div("Wrapper", s.a);
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
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/Flair/index.tsx"),
				c = r("./src/reddit/components/FlairPreview/index.m.less"),
				d = r.n(c);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(i.b, "FlairComponent", d.a);
			t.a = e => e.flair ? s.a.createElement(u, null, s.a.createElement(l, null, n.fbt._("{placeholder}", [n.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), s.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : s.a.createElement(u, null, n.fbt._("No flair selected", null, {
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
				o = r.n(n),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./src/higherOrderComponents/makeAsync.tsx"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/lib/loadWithRetries/index.ts"),
				u = r("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = r.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				f = o()((e = p) => Object(i.a)({
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
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
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
				j = r("./src/reddit/icons/svgs/Search/index.tsx"),
				x = r("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				_ = r.n(x);
			class w extends s.a.Component {
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
						searchQuery: o
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(o)), i = !!r && a.some(e => e.id === r);
					return s.a.createElement("div", {
						className: _.a.container
					}, s.a.createElement("div", {
						className: _.a.searchBoxWrapper
					}, s.a.createElement("input", {
						className: _.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: n.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: o
					}), s.a.createElement(j.a, {
						className: _.a.searchIcon
					})), s.a.createElement(h.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: r
					}, a.map((e, t) => {
						const n = Object(u.c)(e),
							o = r === e.id || !i && 0 === t;
						return s.a.createElement(g.a, {
							className: _.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: o ? 0 : -1,
							value: e.id
						}, s.a.createElement(v.b, {
							className: _.a.flairComponent,
							flair: n,
							forceSmallEmojis: !0
						}), e.textEditable && s.a.createElement(O.a, {
							className: _.a.pencil
						}))
					})))
				}
			}
			var y = r("./src/reddit/components/FlairSearch/index.m.less"),
				C = r.n(y);
			const k = Object(d.a)(e => e && Object(u.c)(e)),
				I = Object(i.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: f.g
				}),
				S = Object(a.b)(I);
			t.a = S(e => {
				const {
					flairTemplateType: t,
					flair: r,
					className: o,
					onChange: a,
					subredditId: i,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: f,
					isModerator: v
				} = e, h = Object(p.a)(), g = d && r && r.templateId && d[r.templateId] || void 0, O = Object(b.a)(), j = r || k(g);
				return s.a.createElement("div", {
					className: Object(c.a)(o, C.a.container)
				}, d && l && s.a.createElement(w, {
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
				}), j && g && (v || g.textEditable) && s.a.createElement("div", {
					className: C.a.flairEditSection
				}, s.a.createElement("div", {
					className: C.a.editLabel
				}, n.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), f && s.a.createElement("div", {
					className: C.a.restrictionHintText
				}, Object(u.k)(g)), s.a.createElement(O, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: j,
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
					subredditId: i
				})))
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				i = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = o.a.memo((function({
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
				}, [e]), e ? o.a.createElement("div", c({
					className: Object(s.a)(i.a.tooltip, t.className, {
						[i.a.visible]: r
					})
				}, t.popperProps), t.children, r && o.a.createElement("div", c({
					className: i.a.arrow
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
		"./src/reddit/components/ModalStyledComponents/index.m.less": function(e, t, r) {
			e.exports = {
				CloseIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				closeIcon: "_3XSQHPxjCTSWWZh_u-d0Xf",
				ModalBody: "_2R3RlhymCOkPrz9TusvcPq",
				modalBody: "_2R3RlhymCOkPrz9TusvcPq",
				ModalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				modalPostPreview: "HydQQ-TD4TUsVnxkYk_5F",
				ModalText: "mFTHPdbEAklUs8yhT4Xm7",
				modalText: "mFTHPdbEAklUs8yhT4Xm7",
				ModalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				modalSmallText: "_3cwQrg-XvocnoG0U22wT8t",
				ModalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				modalDescriptionText: "_12g_PUGHD-w7T1w4Q3oTsq",
				ModalMetaText: "_27eskYssCs-urVW1uHI4YI",
				modalMetaText: "_27eskYssCs-urVW1uHI4YI",
				ModalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				modalFormItem: "_3xiY8nTCVp16qSb6CGW2Kv",
				ModalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				modalInput: "_20ZSV7ktyDYzPcd1UMQWZT",
				ModalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				modalInputLabel: "HVADn-LHFLaS8r6IBJWeq",
				ModalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				modalFooter: "_-0i7atRJ5NBsrRM5wuPpX",
				ModalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				modalHeader: "_1Fa5Xv7f16v5IC2Tq1m2Fy",
				ModalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				modalTitle: "eLnlHLGCDxjFf3jfGTcZu",
				ModalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				modalMain: "_1uaasV6RaxBfRyVgQJdiKs",
				ModalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				modalAnnotation: "gLlWG7Oj89Ost4_twUu8w",
				TextArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				textArea: "_2h8O7PjrCXfaJJWKrAxJPL",
				WarningButton: "_17UyTSs2atqnKg9dIq5ERg",
				warningButton: "_17UyTSs2atqnKg9dIq5ERg",
				PrimaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				primaryButton: "_2X1FFYUx3jzlnbcegBC_Sr",
				CancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				cancelButton: "_1QUX9-zZuGtifS6jJBUyh-",
				RemoveButton: "_2ulRgczjI5SWCMgSA1CNLj",
				removeButton: "_2ulRgczjI5SWCMgSA1CNLj",
				ConfirmButton: "JZC61-VzVuaiHdWuRUiSC",
				confirmButton: "JZC61-VzVuaiHdWuRUiSC"
			}
		},
		"./src/reddit/components/ModalStyledComponents/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "n", (function() {
				return b
			})), r.d(t, "p", (function() {
				return v
			})), r.d(t, "o", (function() {
				return h
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "m", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "j", (function() {
				return x
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "i", (function() {
				return y
			})), r.d(t, "q", (function() {
				return C
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "t", (function() {
				return S
			})), r.d(t, "u", (function() {
				return A
			})), r.d(t, "r", (function() {
				return P
			})), r.d(t, "a", (function() {
				return E
			})), r.d(t, "s", (function() {
				return T
			})), r.d(t, "c", (function() {
				return N
			}));
			var n = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/lessComponent.tsx"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				i = r("./src/reddit/controls/Button/index.tsx"),
				c = r("./src/reddit/controls/Input/ModalInput.tsx"),
				d = r("./src/reddit/icons/svgs/Close/index.tsx"),
				l = r("./src/reddit/components/ModalStyledComponents/index.m.less"),
				u = r.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = o.a.wrapped(d.a, "CloseIcon", u.a),
				f = o.a.section("ModalBody", u.a),
				b = o.a.section("ModalPostPreview", u.a),
				v = o.a.p("ModalText", u.a),
				h = o.a.div("ModalSmallText", u.a),
				g = o.a.div("ModalDescriptionText", u.a),
				O = o.a.div("ModalMetaText", u.a),
				j = o.a.label("ModalFormItem", u.a),
				x = o.a.wrapped(c.a, "ModalInput", u.a),
				_ = o.a.label("ModalInputLabel", u.a),
				w = o.a.footer("ModalFooter", u.a),
				y = o.a.header("ModalHeader", u.a),
				C = o.a.div("ModalTitle", u.a),
				k = o.a.div("ModalAnnotation", u.a),
				I = o.a.div("ModalMain", u.a),
				S = o.a.textarea("TextArea", u.a),
				A = o.a.wrapped(i.l, "WarningButton", u.a),
				P = o.a.wrapped(i.l, "PrimaryButton", u.a),
				E = o.a.wrapped(i.o, "CancelButton", u.a),
				T = o.a.wrapped(i.r, "RemoveButton", u.a),
				N = ({
					className: e,
					...t
				}) => a.a.createElement(i.t, m({
					kind: i.b.Button,
					priority: i.c.Primary,
					className: Object(n.a)(u.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/prettyPrintNumber/index.ts"),
				d = r("./src/reddit/components/CreatorStats/helpers.ts"),
				l = r("./src/reddit/selectors/creatorStats.ts"),
				u = r("./src/reddit/selectors/experiments/creatorStats.ts"),
				m = r("./src/reddit/components/PostContent/viewCount.m.less"),
				p = r.n(m);
			t.a = ({
				className: e,
				post: t,
				showViewCount: r
			}) => {
				const {
					upvotePercentString: o,
					viewCountString: m
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						r = Object(c.b)(e.viewCount);
					return {
						upvotePercentString: n.fbt._("{percent upvoted}% Upvoted", [n.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: n.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [n.fbt._plural(e.viewCount, "number of views", r)], {
							hk: "rP01m"
						})
					}
				})(t), f = r && !!t.viewCount, b = Object(a.e)(e => Object(u.a)(e, t.id)), v = Object(a.e)(e => Object(l.a)(e, t.id)), h = Object(a.e)(e => Object(l.b)(e, t.id)), g = Object(d.c)(t, h), O = b && v && g === d.b.Available;
				return s.a.createElement("div", {
					className: Object(i.a)(p.a.viewCounts, e)
				}, f && s.a.createElement("span", null, m), f && !!t.upvoteRatio && s.a.createElement("span", {
					className: p.a.dotSpacer
				}), !!t.upvoteRatio && !O && s.a.createElement("span", null, o))
			}
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, r) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./node_modules/lodash/isEqual.js"),
				o = r.n(n),
				s = r("./src/reddit/constants/flair.ts"),
				a = r("./src/reddit/helpers/flair.ts"),
				i = r("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === i.f.Text || e.type === i.f.Image || e.type === i.f.Richtext);
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
				const i = Object(a.g)(t).length;
				return 0 === i ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : i > s.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(n) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : o()(r, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, r) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = r("./src/reddit/components/SubredditNameLink/index.m.less"),
				s = r.n(o);
			const a = r("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", s.a);
			t.a = a
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const o = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				s = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = ({
					type: e,
					key: t
				}) => s[o({
					type: e
				})][t]()
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
				o = r("./node_modules/react/index.js"),
				s = r.n(o),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
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
			const O = Object(i.c)({
					isNightMode: v.X,
					isAnimatingUpvotePostId: b.k
				}),
				j = Object(a.b)(O),
				x = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				_ = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class w extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: f.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(f.a.upvoted), this.setState({
							voted: e !== f.a.upvoted ? f.a.upvoted : f.a.notVoted
						})
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
							isNightMode: o,
							isAnimatingUpvotePostId: a,
							isReadingIndicatorsExperimentEnabled: i,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: b,
							containerRef: v,
							model: h,
							postId: O
						} = e,
						j = x(e),
						w = _(e),
						y = h.voteState,
						C = a === O;
					return s.a.createElement("div", {
						className: Object(c.a)(g.a.votesContainer, e.className),
						id: `vote-arrows-${h.id}`,
						ref: v
					}, j ? s.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": y === f.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: y
					}) : s.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": y === f.a.upvoted,
						className: Object(c.a)(l.n, b, {
							[g.a.bounceUp]: C
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, s.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: y
					})), !e.compact && p && s.a.createElement(u.a, {
						className: Object(c.a)(g.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: y,
						isReadingIndicatorsExperimentEnabled: i,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!r,
						postId: O
					}), w ? s.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": y === f.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: y
					}) : s.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": y === f.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, s.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: y
					})))
				}
			}
			const y = Object(d.a)(j(w));
			t.a = y
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/actions/subscription/index.ts"),
				a = r("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				userIsSubscriber: a.db
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(s.d([t], !0)),
				onSubscriptionsRequested: () => e(s.e()),
				onUnsubscribe: () => e(s.d([t], !1))
			}))
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return s
			}));
			const n = "reddit",
				o = "reddit.ready",
				s = "reddit.urlChanged"
		},
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				c = r("./src/reddit/constants/keycodes.ts"),
				d = r("./src/reddit/controls/Input/index.m.less"),
				l = r.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === c.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...r
					} = this.props;
					return o.a.createElement("input", u({
						className: Object(a.a)(l.a.input, e),
						onKeyDown: this.handleKeyDown
					}, r))
				}
			}
			t.a = Object(s.b)(null, {
				closeModal: i.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
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
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/constants/keycodes.ts"),
				i = r("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = r("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = r("./src/reddit/layout/row/Inline/index.tsx"),
				l = r("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = r.n(l);
			class m extends o.a.Component {
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
					return e.hidden ? null : o.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(s.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? o.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : o.a.createElement(i.a, {
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
				o = r.n(n),
				s = r("./src/reddit/constants/keycodes.ts");
			class a extends o.a.Component {
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
						return o.a.Children.forEach(this.props.children, t => {
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
						const o = e.key === s.b.ArrowUp,
							a = e.key === s.b.ArrowDown;
						if (o || a) {
							const t = this.getValues();
							if (!t.length) return;
							const s = n ? t.indexOf(n) : 0,
								a = t[((o ? s - 1 : s + 1) + t.length) % t.length];
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
					return o.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, o.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), o.a.Children.map(e.children, (r, n) => {
						const s = 0 === n,
							a = r.props.value === t,
							i = null !== t ? a ? 0 : -1 : s ? 0 : -1;
						return o.a.cloneElement(r, {
							disabled: e.disabled,
							onClick: e => this.handleClick(r.props.value),
							selected: a,
							tabIndex: i
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, r) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu",
				viewCount: "_3bAGP2FKe97ijgBAGQOYsk"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./src/lib/classNames/index.ts"),
				s = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./node_modules/react/index.js"),
				c = r.n(i),
				d = r("./node_modules/react-redux/es/index.js"),
				l = r("./src/reddit/actions/post.ts"),
				u = r("./src/reddit/components/CountAnimation/index.tsx"),
				m = r("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = r("./src/reddit/components/PostContent/ViewCount.tsx"),
				f = r("./src/reddit/constants/colors.ts"),
				b = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				v = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = r("./src/reddit/hooks/useInfoTextTooltip.ts"),
				g = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = r("./src/reddit/models/Vote/index.ts"),
				j = r("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				x = r("./src/reddit/selectors/meta.ts"),
				_ = r("./src/reddit/selectors/posts.ts"),
				w = r("./node_modules/reselect/es/index.js"),
				y = r("./src/reddit/controls/Score/index.m.less"),
				C = r.n(y);
			const k = {
					placement: "right"
				},
				I = e => e.voteState === O.a.downvoted ? Object(g.a)(e).voteText.downvote : e.voteState === O.a.upvoted ? Object(g.a)(e).voteText.upvote : Object(v.a)(Object(b.a)(e)),
				S = Object(w.c)({
					locale: e => Object(x.i)(e),
					post: (e, {
						isReadingIndicatorsExperimentEnabled: t,
						postId: r
					}) => {
						if (t && r) return Object(_.H)(e, {
							postId: r
						})
					}
				}),
				A = () => 0,
				P = Object(d.b)(S),
				E = Object(s.a)(e => {
					const t = {
							color: e.light ? f.a.lightboxHeaderText : I(e)
						},
						{
							score: r,
							postId: s = "",
							locale: b,
							isVoteCountAnimation: v,
							isCountAnimShadowTestEnabled: g,
							isReadingIndicatorsExperimentEnabled: O,
							post: x
						} = e,
						_ = Object(d.d)(),
						w = null == b ? void 0 : b.startsWith("en"),
						y = e.isScoreHidden ? w ? n.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: C.a.dot
						}, "•") : Object(a.b)(r),
						S = Object(i.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && _(Object(l.I)({
								postId: s,
								delta: t
							}))
						}, [_, s]),
						P = Object(i.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: s
								}
							}
						}),
						E = !e.isScoreHidden && v && r < j.a,
						T = Object(h.a)(k);
					return c.a.createElement("div", {
						className: Object(o.a)(C.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t,
						onMouseEnter: O ? T.show : void 0,
						onMouseLeave: O ? T.hide : void 0,
						ref: O ? T.target.ref : void 0
					}, (E || g) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: r,
						countToUpperBound: r,
						initialDelay: A,
						subsequentRecurringDelay: A,
						incrementDelta: A,
						shouldDisjointAnimation: !0,
						postId: s,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: P.current,
						onDataCB: S,
						isLoadTestOnly: g && !E
					})), !E && y, O && x && c.a.createElement(m.a, T, c.a.createElement(p.a, {
						className: C.a.viewCount,
						post: x,
						showViewCount: !1
					})))
				});
			t.a = P(E)
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
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
				o = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/trackers/gild.ts");
			const i = e => ({
					...o.o(e),
					screen: o.ab(e),
					subreddit: o.ib(e),
					userSubreddit: o.rb(e)
				}),
				c = e => ({
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
					...i(e),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...i(t),
					source: "awards",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, n) => o => ({
					...i(o),
					source: "create_award",
					action: "upload",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
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
					...i(n),
					source: "create_award",
					action: "click",
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
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
					goldPurchase: r ? c(r) : null
				}),
				f = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(s.c)(s.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? c(r) : null
				}),
				b = (e, t, r) => n => ({
					...i(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: c(e),
					profile: o.S(n, t),
					subreddit: o.jb(n, t)
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
				return j
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return x
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return _
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return w
			})), r.d(t, "clickReportAward", (function() {
				return y
			})), r.d(t, "clickCancelReportAward", (function() {
				return C
			})), r.d(t, "clickConfirmReportAward", (function() {
				return k
			})), r.d(t, "viewGildModalEvent", (function() {
				return I
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return S
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return A
			})), r.d(t, "clickMessageInputEvent", (function() {
				return P
			})), r.d(t, "typeMessageInputEvent", (function() {
				return E
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return T
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return N
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return M
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return R
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return F
			})), r.d(t, "clickNextButtonEvent", (function() {
				return D
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return G
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return B
			})), r.d(t, "clickFilterEvent", (function() {
				return L
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return U
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return V
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				o = r("./src/reddit/selectors/telemetry.ts"),
				s = r("./src/telemetry/models/GoldPurchase.ts"),
				a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/helpers/isComment.ts"),
				c = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? s.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? s.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? s.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? s.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? s.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? s.GoldPurchaseType.GidGlobal : s.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...o.o(e),
					comment: t ? o.j(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(a.e)(a.a.GildingFlow, !1),
					post: t ? o.I(e, t) : void 0,
					screen: o.ab(e),
					subreddit: o.ib(e),
					userSubreddit: o.rb(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold",
					feed: o.r(t)
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				f = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award",
					feed: o.r(t)
				}),
				b = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				v = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, r) => n => ({
					...u(n, r),
					source: Object(i.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				O = g("award_hovercard_report"),
				j = g("cancel_award_hovercard_report"),
				x = g("flag_award"),
				_ = g("cancel_flag_award"),
				w = g("confirm_flag_award"),
				y = g("report_community_award"),
				C = g("cancel_report_community_award"),
				k = g("confirm_report_community_award"),
				I = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				S = (e, t, r) => n => ({
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
				E = e => t => ({
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
				M = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				F = e => t => ({
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
				B = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: r,
					numberCoins: n,
					thingId: o
				}) => s => ({
					...u(s, o),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(i.a)(o) ? "comment" : "post",
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
				U = () => e => ({
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
				return j
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "i", (function() {
				return w
			}));
			var n = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/models/Gold/ProductOffer.ts"),
				s = r("./src/reddit/selectors/gold/giveAwards.ts"),
				a = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = r("./src/reddit/selectors/telemetry.ts"),
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
					} = t, b = !!r, v = s.b(e), h = v ? Object(u.getAwardTypeFromAward)(v) : null, g = b ? h : i.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, O = r ? Object(p.a)(r) ? "comment" : "post" : void 0, j = l || i.t(e), x = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === j)[0], _ = t.offerContext || (v && 0 === v.coinPrice ? o.a.StorefrontFreeAward : Object(o.d)(x, b)), w = x ? Math.round(1e4 * (x.baselinePennies - x.pennies) / x.baselinePennies) / 100 : 0, y = x ? Math.round(1e4 * (x.coins - x.baselineCoins) / x.coins) / 100 : 0, C = x ? x.baselinePennies !== x.pennies ? `${w}_percent_price` : x.baselineCoins !== x.coins ? `${y}_percent_bonus` : void 0 : void 0, k = g === d.GoldPurchaseType.Premium ? n.yb : x ? x.pennies : void 0;
					return {
						...c.o(e),
						comment: r ? c.j(e, r) : null,
						correlationId: i.r(e) || Object(m.e)(m.a.GoldPayment, !1),
						post: r ? c.I(e, r) : null,
						screen: c.ab(e),
						subreddit: r ? c.ib(e) : null,
						goldPurchase: {
							...v ? Object(f.a)(v) : null,
							type: g,
							gildedContent: b,
							contentType: O,
							numberCoins: x ? x.coins : void 0,
							offerContext: _,
							offerType: C
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: k
						},
						purchase: {
							priceMicros: k
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
				j = (e, t) => r => ({
					...b(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				x = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				_ = (e, t, r) => n => {
					const o = b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...o,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...o.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...o.goldPurchase,
							source: e ? d.GiveGold : i.o(n) ? d.PremiumMarketing : d.CoinsMarketing
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
				o = r("./src/telemetry/index.ts"),
				s = r("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = r("./src/reddit/selectors/platform.ts"),
				i = r("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: i.R(e),
					screen: i.ab(e),
					subreddit: i.ib(e)
				}),
				d = (e, t, r) => n => ({
					source: Object(a.i)(n) || r ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(n),
					post: i.I(n, e)
				}),
				l = (e, t, r, n) => o => {
					const a = r ? i.j(o, r) : null,
						{
							sortToUse: c
						} = Object(s.a)(o, e);
					return {
						...d(e, t, n)(o),
						comment: a,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => r => {
					const n = i.k(r);
					return n ? d(n.id, e, t)(r) : {
						source: Object(a.i)(r) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(r)
					}
				},
				m = (e, t) => r => Object(o.a)({
					...d(e, t)(r),
					...i.o(r)
				}),
				p = e => t => ({
					source: "id_card",
					action: n.c.CLICK,
					noun: e,
					...c(t),
					post: i.k(t),
					userSubreddit: i.rb(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return a
			})), r.d(t, "j", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
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
				o = r("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: Object(o.ab)(e),
					profile: Object(o.R)(e),
					subreddit: Object(o.ib)(e),
					userSubreddit: Object(o.rb)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...s(t)
				}),
				i = (e, t) => r => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.I)(r, t),
					...s(r)
				}),
				c = (e, t) => r => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(o.I)(r, t),
					comment: Object(o.j)(r, t),
					...s(r)
				}),
				d = (e, t) => r => ({
					source: "comment",
					action: n.c.UNDO,
					noun: e,
					post: Object(o.I)(r, t),
					comment: Object(o.j)(r, t),
					...s(r)
				}),
				l = (e, t) => r => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(o.I)(r, t),
					comment: Object(o.j)(r, t),
					...s(r)
				}),
				u = (e, t) => r => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(o.I)(r, t),
					comment: Object(o.j)(r, t),
					...s(r)
				}),
				m = (e, t) => r => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(o.I)(r, t),
					comment: Object(o.j)(r, t),
					...s(r)
				}),
				p = (e, t) => r => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(o.j)(r, t),
					post: Object(o.I)(r, t),
					...s(r)
				}),
				f = (e, t) => r => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(o.I)(r, t),
					...s(r)
				}),
				b = (e, t) => r => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(o.I)(r, t),
					subreddit: Object(o.lb)(r, t)
				}),
				v = (e, t) => r => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(o.j)(r, t),
					post: Object(o.I)(r, t),
					subreddit: Object(o.lb)(r, t)
				}),
				h = (e, t, r, n) => s => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(o.I)(s, r),
					subreddit: Object(o.lb)(s, r),
					actionInfo: {
						reason: n
					},
					...e && {
						comment: Object(o.j)(s, r)
					}
				})
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "p", (function() {
				return u
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "l", (function() {
				return p
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "d", (function() {
				return v
			})), r.d(t, "i", (function() {
				return h
			})), r.d(t, "k", (function() {
				return O
			})), r.d(t, "h", (function() {
				return j
			})), r.d(t, "b", (function() {
				return x
			})), r.d(t, "n", (function() {
				return w
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "a", (function() {
				return k
			})), r.d(t, "m", (function() {
				return I
			}));
			var n = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/selectors/avatarMarketing.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: n.a.AvatarNewGear
					}
				},
				c = e => t => {
					const r = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...s.o(t)
					};
					return Object(o.a)(t) && Object.assign(r, i), r
				},
				d = (e, t) => r => {
					const {
						id: n
					} = Object(a.nb)(r, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...s.o(r),
						snoovatar: {
							userGenerated: n
						}
					}
				},
				l = e => ({
					...s.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: s.gb(e)
				}),
				u = e => ({
					...s.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: s.gb(e)
				}),
				m = e => ({
					...s.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: s.gb(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...s.o(e),
					...i
				}),
				f = e => t => r => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...s.o(r),
					snoovatar: s.gb(r),
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
					...s.o(n),
					snoovatar: s.gb(n)
				}),
				O = g("anniversary_achievement", "view", "anniversary_achievement"),
				j = g("anniversary_achievement", "click", "close"),
				x = g("anniversary_achievement", "click", "equip"),
				_ = e => () => t => ({
					...s.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				w = _("view"),
				y = _("click"),
				C = (e, t, r) => n => ({
					source: e,
					action: t,
					noun: r,
					...s.o(n),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: s.gb(n)
				}),
				k = e => C("onboarding", "click", e),
				I = () => C("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			}));
			var n = r("./src/reddit/helpers/flair.ts"),
				o = r("./src/reddit/selectors/gold/powerups/index.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const a = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...s.o(e)
				}),
				i = e => t => {
					const r = s.ib(t),
						a = Object(o.x)(t, {
							subredditId: null == r ? void 0 : r.id
						}),
						{
							userFlair: i,
							achievementFlair: c,
							supporterFlair: d
						} = e,
						l = c || d;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...s.o(t),
						subreddit: r,
						userFlair: {
							id: null == i ? void 0 : i.id,
							title: i ? Object(n.g)(i) : void 0,
							isActive: !!i || void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == d ? void 0 : d.type,
							supporterFlairTitle: null == d ? void 0 : d.name,
							isSupporter: a
						}
					}
				},
				c = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...s.o(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: s.ib(t),
					...s.o(t)
				})
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/icepick/icepick.js"),
				o = r("./node_modules/react/index.js"),
				s = r("./src/lib/hooks/useTooltip.ts");
			const a = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function i(e) {
				const t = Object(o.useMemo)(() => {
					const t = Object(s.a)(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, a))
				}, [e]);
				return Object(s.b)(t)
			}
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = r.n(a);
			const c = r("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(s.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a)
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), o.a.createElement("g", null, o.a.createElement("path", {
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
				o = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = r.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", c({}, e, {
				className: Object(s.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);

			function s() {
				return (s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", s({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
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
				o = r("./src/reddit/layout/row/Inline/index.m.less"),
				s = r.n(o);
			t.a = n.a.div("inlineRow", s.a)
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.m.less": function(e, t, r) {
			e.exports = {
				left: "_5gAwSCo7K8G413IoE78Ml",
				right: "_2ghjBMFIsORwdO3oh2Kq6g",
				exapndLeftContainer: "_1zTJo0Ndih4fp__5DjbClN"
			}
		},
		"./src/reddit/layout/twoCol/ExpandLeft/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				o = r.n(n),
				s = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				c = r.n(i);
			t.a = Object(s.a)(e => o.a.createElement("div", {
				className: Object(a.a)(c.a.exapndLeftContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.left
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "d", (function() {
				return c
			}));
			var n, o = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(n || (n = {}));
			const s = {
				[n.Powerups]: () => o.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[n.Premium]: () => o.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var a, i;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(a || (a = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(i || (i = {}));
			const c = (e, t) => {
				const r = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === r,
					o = "new_purchaser" === r,
					s = "repeat_purchaser" === r;
				return t ? i.GildFlow : n ? i.LowCoinBalance : o ? i.NewUserTargetedOffer : s ? i.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, r) {
			"use strict";
			var n, o, s = r("./node_modules/redux/es/redux.js"),
				a = r("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(n || (n = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const i = {
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
			var c = (e = i, t) => {
				switch (t.type) {
					case a.b:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const d = {
					marketingEvent: {
						active: !1,
						assetUrls: null
					},
					quickCreateV1: {
						id: "-1",
						active: !1,
						text: "",
						min_days_on_reddit: 0,
						should_have_avatar: !1,
						max_event_views: 0,
						min_days_since_last_event_interaction: 0,
						webAssetUrls: []
					}
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = "avatar_promo_archived",
				p = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
							const r = e.split(":");
							if (!r.length && r.length < 3) return null;
							try {
								t[r[1]] = JSON.parse(r[2])
							} catch {
								t[r[1]] = r[2]
							}
						}
					}), t
				};
			var f = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				b = r("./src/reddit/actions/modal.ts"),
				v = r("./src/reddit/constants/modals.ts");
			var h = (e = null, t) => {
				var r;
				switch (t.type) {
					case f.o:
						const {
							avatarMarketingEvents: n
						} = t.payload;
						return n ? function(e) {
							if (!e) return d;
							const t = d;
							return e.forEach(e => {
								const {
									startsAt: r,
									endsAt: n,
									webAssetUrls: o,
									tags: s
								} = e, a = r && new Date(r) <= new Date, i = !!n && new Date(n) < new Date, c = !!a && !i, d = s.includes(m);
								if (s && s.includes(l) && !d) {
									const {
										text: r,
										id: n
									} = e, a = o || null, i = p(s);
									t && (t.quickCreateV1 = {
										...i,
										id: n,
										text: r,
										active: c && !!a,
										webAssetUrls: a
									})
								}
								if (s && s.includes(u) && !d) {
									const e = o || null;
									t && (t.marketingEvent = {
										active: c && !!e,
										assetUrls: e
									})
								}
							}), t
						}(n) : d;
					case b.c:
						return (null === (r = t.payload) || void 0 === r ? void 0 : r.id) === v.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var g = (e = null, t) => {
				switch (t.type) {
					case a.a: {
						const {
							image: e,
							accessory_ids: r
						} = t.payload;
						return {
							image: e,
							accessoryIds: r
						}
					}
					default:
						return e
				}
			};
			t.a = Object(s.c)({
				marketing: h,
				avatarUser: c,
				randomAvatar: g
			})
		},
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				o = r("./src/reddit/actions/creatorStats/constants.ts");
			const s = {};
			var a = (e = s, t) => {
				switch (t.type) {
					case o.a:
						const {
							postStats: r
						} = t.payload;
						return {
							...e, ...r
						};
					default:
						return e
				}
			};
			const i = {};
			var c = (e = i, t) => {
				switch (t.type) {
					case o.a:
						const {
							subredditKarma: r
						} = t.payload;
						return {
							...e, ...r
						};
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				postStats: a,
				subredditKarma: c
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return s
			}));
			const n = (e, {
					post: t
				}) => {
					const r = t.belongsTo.id;
					if (!r) return null;
					const n = e.authorFlair.models[r];
					if (!n) return null;
					const o = t.author;
					return o && n[o] || null
				},
				o = (e, {
					subredditId: t
				}) => {
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!t) return null;
					const n = e.authorFlair.models[t];
					return n ? n[r] : null
				},
				s = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/avatar/index.ts");
			Object(n.a)({
				features: {
					avatar: o.a
				}
			});
			const s = e => {
					var t, r;
					return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.avatarUser
				},
				a = e => {
					var t, r;
					return null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.avatarUser.csrf_token
				},
				i = e => {
					var t, r;
					return (null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/avatar/index.ts"),
				a = r("./src/reddit/selectors/experiments/econ/index.ts");
			Object(o.a)({
				features: {
					avatar: s.a
				}
			});
			const i = e => {
					var t, r;
					return !!(null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing)
				},
				c = Object(n.a)(a.d, e => {
					var t, r, n;
					const o = null === (n = null === (r = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === r ? void 0 : r.marketing) || void 0 === n ? void 0 : n.marketingEvent;
					return (null == o ? void 0 : o.active) ? (null == o ? void 0 : o.assetUrls) && (null == o ? void 0 : o.assetUrls[0]) : null
				}, (e, t) => e ? t : null)
		},
		"./src/reddit/selectors/creatorStats.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/creatorStats/index.ts"),
				s = r("./src/reddit/selectors/moderatorPermissions.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				i = r("./src/reddit/selectors/user.ts");
			Object(n.a)({
				features: {
					creatorStats: o.a
				}
			});
			const c = (e, t) => {
					var r, n;
					return null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.creatorStats) || void 0 === n ? void 0 : n.postStats[t]
				},
				d = (e, t) => {
					var r, n, o;
					const s = null === (o = null === (n = null === (r = e.features) || void 0 === r ? void 0 : r.creatorStats) || void 0 === n ? void 0 : n.subredditKarma[t]) || void 0 === o ? void 0 : o.karma;
					if (!s) return;
					const {
						fromComments: a,
						fromPosts: i
					} = s;
					return {
						fromComments: a,
						fromPosts: i
					}
				},
				l = (e, t) => {
					const r = Object(a.H)(e, {
						postId: t
					});
					return !(!r || r.isSponsored) && (Object(i.qb)(e, {
						postId: t
					}) || !!Object(s.l)(e, {
						postId: t
					}))
				}
		},
		"./src/reddit/selectors/experiments/creatorStats.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				s = r("./src/reddit/selectors/moderatorPermissions.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const i = (e, t) => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: e => ((e, t) => Object(a.qb)(e, {
						postId: t
					}) || !!Object(s.l)(e, {
						postId: t
					}) || Object(a.H)(e))(e, t),
					experimentName: n.Q
				}) === n.Uc
			}
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "g", (function() {
				return m
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "c", (function() {
				return f
			})), r.d(t, "e", (function() {
				return b
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts"),
				s = r("./src/reddit/selectors/experiments/index.ts"),
				a = r("./src/reddit/selectors/experiments/presence.ts"),
				i = r("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.p
					});
					return t === n.v.VoteCountOnly || t === n.v.CommentCountOnly || t === n.v.VoteAndCommentCount
				},
				l = e => {
					if (Object(i.c)(e) || Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.p
					});
					return t === n.v.VoteCountOnly || t === n.v.VoteAndCommentCount
				},
				u = e => {
					if (Object(i.c)(e) || Object(a.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.p
					});
					return t === n.v.CommentCountOnly || t === n.v.VoteAndCommentCount
				},
				m = (e, {
					post: t
				}) => p(e, {
					postId: t.id
				}),
				p = (e, {
					postId: t
				}) => {
					const r = e.posts.models[t];
					if (Object(i.c)(e) || !r || r.isSponsored || r.isScoreHidden || r.score >= c || Object(a.a)(e)) return !1;
					const o = Object(s.d)(e, {
							experimentName: n.p
						}),
						d = null == o ? void 0 : o.variant;
					return d === n.v.VoteCountOnly || d === n.v.VoteAndCommentCount
				},
				f = (e, {
					postId: t
				}) => {
					const r = e.posts.models[t];
					if (Object(i.c)(e) || !r || r.isSponsored || r.numComments >= c || Object(a.a)(e)) return !1;
					const o = Object(s.d)(e, {
							experimentName: n.p
						}),
						d = null == o ? void 0 : o.variant;
					return d === n.v.CommentCountOnly || d === n.v.VoteAndCommentCount
				},
				b = e => {
					if (Object(a.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.Ib
					}) === n.Yb.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				o = r("./src/reddit/helpers/chooseVariant/index.ts");
			const s = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.ge
				}) === n.Uc
			}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "f", (function() {
				return s
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				o = e => e.gild.correlationId || void 0,
				s = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				i = e => e.gild.message,
				c = e => e.gild.api.pending,
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
				o = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/commentSelector.ts"),
				a = r("./src/reddit/selectors/gold/giveAwards.ts"),
				i = r("./src/reddit/selectors/posts.ts"),
				c = r("./src/reddit/selectors/user.ts"),
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
				}) => e.awardSubType === o.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => {
					let o = e;
					if ((null == n ? void 0 : n.awardCountsById) && n.awardCountsById[e.id] && e.tiers) {
						const t = n.awardCountsById[e.id];
						o = e.tiers.reduce((e, r) => t >= r.awardingsRequired ? r : e)
					}
					return u(o, r, t)
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
					const o = Object(d.c)(e),
						a = l.find(e => e >= r),
						c = n ? Object(i.H)(e, {
							postId: n
						}) || Object(s.b)(e, {
							commentId: n
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: a,
						prefersReducedMotion: o,
						postOrComment: c
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
					const n = Object(c.nb)(e, {
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
				return o
			}));
			const n = e => e.gild.selectedAward,
				o = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return a
			})), r.d(t, "s", (function() {
				return i
			})), r.d(t, "r", (function() {
				return c
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
				return j
			})), r.d(t, "v", (function() {
				return x
			})), r.d(t, "y", (function() {
				return _
			})), r.d(t, "f", (function() {
				return w
			})), r.d(t, "g", (function() {
				return y
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "j", (function() {
				return I
			})), r.d(t, "m", (function() {
				return S
			})), r.d(t, "e", (function() {
				return A
			})), r.d(t, "d", (function() {
				return P
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(o.a)({
				features: {
					goldPurchase: s.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(n.l)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				v = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				g = e => e.features.goldPurchase.payment.postalCode,
				O = e => e.features.goldPurchase.payment.savedCardsPending,
				j = e => e.features.goldPurchase.payment.savedCards,
				x = e => e.features.goldPurchase.payment.rememberCard,
				_ = e => e.features.goldPurchase.payment.useSavedCard,
				w = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				y = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				C = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				k = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				I = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				S = e => e.features.goldPurchase.payment.stripeToken.pending,
				A = e => e.features.goldPurchase.payment.paypal.passthrough,
				P = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			}));
			var n = r("./src/lib/constants/index.ts");
			const o = e => !s(e) && !!e.user.prefs.subscriptionsPinned,
				s = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.Mb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				o = r("./src/lib/fastdom/index.ts"),
				s = r("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				i = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = r("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${i}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(s.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === i && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(a, `${n.a.redditUrl}${c}`, e))
					} catch (r) {
						return void console.error(a, `${n.a.redditUrl}${c}`, r)
					}
					this.store.then(e => {
						e.dispatch(s.b(t || "")), this.fireEventsQueue()
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
					o.a.read(() => {
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Reddit~StandalonePostPage~reddit-components-ClassicPost~reddit-components-CompactPost~reddit-compone~9b425435.2bba40d46e61228a614a.js.map