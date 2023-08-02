// https://www.redditstatic.com/desktop2x/Subreddit.68bf6bdf77273c453476.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "reddit-components-Econ-PredictionLeaderboard-Sidebar"], {
		"./node_modules/lodash/_arraySampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_copyArray.js"),
				o = n("./node_modules/lodash/_shuffleSelf.js");
			e.exports = function(e, t) {
				return o(r(e), s(t, 0, e.length))
			}
		},
		"./node_modules/lodash/_baseRandom.js": function(e, t) {
			var n = Math.floor,
				s = Math.random;
			e.exports = function(e, t) {
				return e + n(s() * (t - e + 1))
			}
		},
		"./node_modules/lodash/_baseSampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/_shuffleSelf.js"),
				o = n("./node_modules/lodash/values.js");
			e.exports = function(e, t) {
				var n = o(e);
				return r(n, s(t, 0, n.length))
			}
		},
		"./node_modules/lodash/_shuffleSelf.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseRandom.js");
			e.exports = function(e, t) {
				var n = -1,
					r = e.length,
					o = r - 1;
				for (t = void 0 === t ? r : t; ++n < t;) {
					var i = s(n, o),
						a = e[i];
					e[i] = e[n], e[n] = a
				}
				return e.length = t, e
			}
		},
		"./node_modules/lodash/sampleSize.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arraySampleSize.js"),
				r = n("./node_modules/lodash/_baseSampleSize.js"),
				o = n("./node_modules/lodash/isArray.js"),
				i = n("./node_modules/lodash/_isIterateeCall.js"),
				a = n("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, n) {
				return t = (n ? i(e, t, n) : void 0 === t) ? 1 : a(t), (o(e) ? s : r)(e, t)
			}
		},
		"./src/higherOrderComponents/withLSWatcher.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/contentGate.ts"),
				a = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userPrefs.ts");
			const l = 3e4;
			let u;

			function m(e) {
				return t => {
					const n = Object(o.f)().getState(),
						m = Object(o.d)(),
						b = Object(d.a)(n),
						p = Object(c.S)(n),
						h = Object(a.c)(n),
						f = () => {
							Object(a.b)() && (m(i.o({
								over18: !1
							})), u && window.clearInterval(u))
						};
					return Object(s.useEffect)(() => (!p && h.isNewDesignVariant && b && (u = window.setInterval(f, l), f()), () => window.clearInterval(u)), [h.isNewDesignVariant, f, p, b]), r.a.createElement(e, t)
				}
			}
		},
		"./src/lib/colors/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			}));
			const s = "#000",
				r = "#FFF",
				o = "#FF4500",
				i = "#0079D3",
				a = "#46D160",
				c = {
					black: s,
					white: r,
					orangered: o,
					alienblue: i,
					tone1: "#1A1A1B",
					tone2: "#6A6D6F",
					tone3: "#878A8C",
					tone4: "#D3D6DA",
					tone5: "#EDEFF1",
					tone6: "#F6F7F8",
					tone7: "#FFFFFF",
					primary: "#24A0ED",
					secondary: "#006CBF",
					upvote: o,
					downvote: "#7193FF",
					positive: a,
					negative: "#EA0027",
					caution: "#FFB000",
					admin: o,
					moderator: "#46D160",
					self: "#0DD3BB",
					coins: "#DDBD37",
					live: o,
					nsfw: "#FF585B",
					spoiler: "#1A1A1B"
				},
				d = {
					...c,
					tone1: "#D7DADC",
					tone2: "#818384",
					tone3: "#565758",
					tone4: "#3A3A3C",
					tone5: "#272729",
					tone6: "#1A1A1B",
					tone7: "#121213",
					primary: "#006CBF",
					secondary: "#24A0ED",
					coins: "#FFE600",
					spoiler: "#D7DADC"
				}
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
			}
		},
		"./src/lib/hooks/useOnClickOutside.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e, t) {
				const n = Object(s.useCallback)(n => {
					if (!t) return;
					const s = document.getElementById(e);
					s && (s.contains(n.target) || t(n))
				}, [e, t]);
				Object(s.useEffect)(() => {
					if (t) return window.addEventListener("click", n), () => {
						window.removeEventListener("click", n)
					}
				}, [t, n])
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(s.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(r.useState)(null), [i, c] = Object(r.useState)(null), [d, l] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), b = Object(r.useCallback)(async () => m(!0), []), p = Object(r.useCallback)(() => m(!1), []), h = Object(r.useCallback)(() => m(!u), [u]), f = Object(r.useMemo)(() => {
					const t = a(e);
					return d ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: g,
					styles: x,
					update: E
				} = Object(o.a)(t, i, f);
				return Object(r.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: x.arrow,
						...g.arrow
					},
					hide: p,
					popperProps: {
						ref: c,
						style: x.popper,
						...g.popper
					},
					show: b,
					target: {
						element: t,
						ref: n
					},
					toggle: h,
					visible: u,
					update: E
				}), [l, g, c, p, b, x, t, n, h, u, E])
			}
		},
		"./src/lib/promo/withShowSignupUpsell.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				return window
			}
			var o = n("./node_modules/lodash/debounce.js"),
				i = n.n(o),
				a = n("./src/reddit/constants/elementIds.ts"),
				c = n("./src/reddit/constants/experiments.ts"),
				d = n("./src/reddit/hooks/usePromoContext.ts"),
				l = n("./src/reddit/constants/promo.ts"),
				u = n("./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts");
			var m = function() {
					const e = Object(u.a)(c.dd.Bottom_cell),
						t = Object(u.a)(c.dd.Bottom_cell_dismissible),
						n = Object(u.a)(c.dd.Bottom_cell_dismissible_immediate_trigger),
						s = Object(u.a)(c.dd.Bottom_cell_signup_upsell_copy),
						r = Object(u.a)(c.dd.Bottom_cell_surprise_install_copy),
						o = Object(u.a)(c.dd.Bottom_sheet);
					return e || s || r ? l.b.SignupUpsellCell : t || n ? l.b.SignupUpsellCellDismissible : o ? l.b.SignupUpsellBottomSheet : null
				},
				b = n("./src/reddit/hooks/promo/useIsPromoShown.ts");
			const p = 250,
				h = 1e3;

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function g(e) {
				const t = e.displayName || e.name || "Component";

				function n(t) {
					const n = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
						const {
							showPromo: t
						} = Object(d.a)(), n = m(), o = Object(b.a)(n), l = Object(u.a)(c.dd.Bottom_cell_dismissible_immediate_trigger);
						return s.useMemo(() => i()(() => {
							if (!o && n) {
								const e = document.getElementById(a.e),
									s = e ? e.scrollTop : r().scrollY,
									o = r().innerHeight,
									i = o / 3,
									c = 2 * o;
								s >= (l ? i : c) && t(n)
							}
						}, e, {
							maxWait: h
						}), [l, o, n, t, e])
					}();
					return s.createElement(e, f({
						showSignupUpsell: n
					}, t))
				}
				return n.displayName = `withShowSignupUpsell(${t})`, n
			}
		},
		"./src/lib/pubsub/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			class s {
				constructor() {
					this.listenerMap = {}
				}
				_resetListenerMap() {
					this.listenerMap = {}
				}
				_resetKey(e) {
					this.listenerMap[e] = []
				}
				reset(e) {
					e ? this._resetKey(e) : this._resetListenerMap()
				}
				addListeners(e) {
					this.listenerMap[e] || (this.listenerMap[e] = []);
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					this.listenerMap[e].push(...n)
				}
				removeListeners(e) {
					for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) n[s - 1] = arguments[s];
					if (!this.listenerMap[e] || !this.listenerMap[e].length) return !1;
					const r = n.length,
						o = this.listenerMap[e].length;
					return this.listenerMap[e] = this.listenerMap[e].filter(e => !n.includes(e)), this.listenerMap[e].length - o === r
				}
				publish(e) {
					return !(!this.listenerMap[e] || !this.listenerMap[e].length) && (this.listenerMap[e].forEach(e => e()), !0)
				}
			}
		},
		"./src/reddit/actions/eligibleUxExperiences/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = "ELIGIBLE_UX_EXPERIENCES__FETCH_UX_EXPERIENCES_SUCCESS",
				r = "ELIGIBLE_UX_EXPERIENCES__UPDATE_UX_EXPERIENCE_VALUE"
		},
		"./src/reddit/actions/eligibleUxExperiences/eligibleUxExperiences.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				i = n("./src/reddit/endpoints/eligibleUXExperiences/eligibleUxExperiences.ts"),
				a = n("./src/reddit/reducers/features/eligibleUXExperiences/index.ts"),
				c = n("./src/reddit/selectors/eligibleUXExperiences.ts"),
				d = n("./src/redditGQL/types.ts"),
				l = n("./src/reddit/actions/eligibleUxExperiences/constants.ts");
			Object(s.a)({
				features: {
					eligibleUXExperiences: a.a
				}
			});
			const u = Object(r.a)(l.b),
				m = Object(r.a)(l.a),
				b = e => {
					let {
						experiences: t,
						clientContext: n
					} = e;
					return async (e, s, r) => {
						let {
							gqlContext: a
						} = r;
						var l, u;
						const b = s(),
							p = Object.keys(t).filter(e => {
								const n = Object(c.a)(b, {
									experience: e
								});
								return (e !== d.db.LanguagePreferenceBottomSheet || null == n || !n.value) && !(t[e].allowCached && (null == n ? void 0 : n.fetched))
							});
						if (!p.length) return;
						const h = await Object(i.a)(a(), p, n);
						if (h.ok) {
							const t = h.body,
								n = (null === (u = null === (l = null == t ? void 0 : t.data) || void 0 === l ? void 0 : l.eligibleUxExperiences) || void 0 === u ? void 0 : u.map(e => null == e ? void 0 : e.experience)) || [],
								s = null == n ? void 0 : n.reduce((e, t) => ({
									...e,
									[t]: !0
								}), {}),
								r = p.reduce((e, t) => s[t] ? e : {
									...e,
									[t]: !1
								}, {});
							e(m({
								experiences: {
									...s,
									...r
								}
							}))
						} else o.c.captureException(h.error)
					}
				},
				p = () => b({
					experiences: {
						[d.db.LiveChatVideoEdu]: {
							allowCached: !0
						},
						[d.db.LiveChatReactionEdu]: {
							allowCached: !0
						}
					}
				}),
				h = e => b({
					experiences: {
						[d.db.LanguagePreferenceBottomSheet]: {
							allowCached: !1
						}
					},
					clientContext: {
						postId: e
					}
				}),
				f = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					Object(i.b)(r(), {
						action: d.a.View,
						eligibleExperience: {
							experience: e
						}
					})
				}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return N
			})), n.d(t, "b", (function() {
				return w
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				i = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/lib/objectSelector/index.ts"),
				b = n("./src/reddit/featureFlags/index.ts"),
				p = n("./src/reddit/selectors/posts.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/selectors/user.ts");
			const g = [],
				x = (Object(m.a)((e, t) => {
					const n = x(e, t);
					if (!n) return g;
					const s = Object(h.bb)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : g
				}), (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(h.X)(e, {
						subredditId: n
					}) : null
				}),
				E = (e, t, n, s, r) => {
					const o = r.find(e => e <= t) || -1,
						i = r.find(e => e > t) || 1 / 0;
					return t !== i && t !== o && (!(o + n > t) && (!(t + n > i) && !((e, t, n) => {
						const s = n[t - 1],
							r = n[t],
							o = r && Object(p.F)(e, {
								postId: s
							}) || null,
							i = r && Object(p.F)(e, {
								postId: r
							}) || null;
						return o && o.isSponsored || i && i.isSponsored
					})(e, t, s)))
				},
				v = [3];
			Object(m.a)((e, t) => {
				let {
					existingDUPositions: n,
					listingProps: s
				} = t;
				const r = n.slice().sort();
				let o = -1;
				const i = Object(p.y)(e, {
						listingKey: s.listingKey
					}),
					a = [];
				return v.forEach(t => {
					let n = o + t;
					if (!(n >= i.length)) {
						for (; n < i.length && !E(e, n, t, i, r);) n += 1;
						n < i.length && (a.push(n), o = n)
					}
				}), a
			});
			var y = n("./src/reddit/selectors/platform.ts");
			const _ = Object(r.a)(i.f),
				j = Object(r.a)(i.d),
				O = Object(r.a)(i.g),
				C = Object(r.a)(i.c),
				N = Object(r.a)(i.e),
				S = (Object(r.a)(i.i), Object(r.a)(i.h), () => async (e, t, n) => {
					let {
						gqlContext: r
					} = n;
					const o = t(),
						i = (e => {
							return e.focusedVerticals.api.pending.focusedVerticalGqlPending
						})(o),
						d = (e => {
							const t = Object(f.R)(e),
								n = b.d.geoSubredditRecommendationDULoggedIn(e),
								s = b.d.geoSubredditRecommendationDULoggedOut(e);
							return t && n || !t && s
						})(o),
						m = Object(f.R)(o);
					if (i || !d) return;
					e(O());
					let p = !1;
					try {
						const t = m ? s.LoggedInGeo : s.LoggedOutGeo,
							n = await ((e, t, n) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (n.ok && n.body) {
							const {
								data: t
							} = n.body;
							if (I(t)) {
								if (P(t)) {
									e(C({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (k(t)) {
									const n = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: s,
											interactedSubreddit: r,
											category: o
										} = n.focusRecommendations[0],
										i = [s, r],
										a = Object(u.d)(i),
										c = Object(l.b)(i),
										d = Object(u.c)(s),
										m = {
											recommendedSubredditIds: [s.id],
											interactedSubredditIds: [r.id],
											subreddits: a,
											subredditsAboutInfo: c,
											subredditTopContent: d,
											category: o,
											lastLoadedEnv: "client"
										};
									e(_(m)), p = !0
								}
							} else p = !1
						}
					} catch (h) {
						p = !1
					}
					p || e(j({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}),
				I = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				},
				P = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				},
				k = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !P(e) && s === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				},
				w = () => async (e, t, n) => {
					var s, r;
					const i = t(),
						a = (e => e.focusedVerticals.lastLoadedEnv)(i);
					if ((e => {
							return e.focusedVerticals.api.error.focusedVerticalGqlError
						})(i) || null === a || "client" === a) {
						const n = null === (r = null === (s = Object(y.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(f.S)(i);
						return Object(o.i)(() => e(S()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(N({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/components/AwardedListingBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "Euf0eewj0MUfCAneI6fj_",
				title: "_3ugv2ujLUVD37KHjuncuRT",
				close: "_3JAHw6m54Wrjm0rnX7GgRZ",
				dismissedContainer: "_1HciFW1Gf3BHBs0dEvE_tk",
				dismissedText: "_1cXKsx4apv5X14RmNQ0794",
				iconCarouselWrapper: "_2BnXKMLxfFWoe-pZcfIiIm",
				awardIcon: "_34m3e-Z2OR_TEdYH0Ih7O6",
				linearAnimation: "_4HAlQmVogiasYQ9srm4z4",
				iconCarouselInnerWrapper0: "_2fP0vb7wP0Afwdaw6cwZpG",
				slide0: "_3GqXepZa1qvL1X0wE8N0e2",
				iconCarouselInnerWrapper1: "_2O70Ew5pvoBSnOqL4T5EGx",
				slide1: "Fo2rMgLePrq248kivE__Q",
				scale: "_1IMFuS4ukJn7lP178Rtiqd",
				fadeInALittle: "_2KMwT7J3kyGA-____-iftE",
				fadeInTheRest: "_2BxmXNxZx082mr62D3k1LQ"
			}
		},
		"./src/reddit/components/AwardedListingBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/banners.ts"),
				a = n("./src/reddit/constants/page.ts"),
				c = n("./src/reddit/helpers/localStorage/index.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/icons/svgs/Close/index.tsx"),
				u = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/react-redux/es/index.js")),
				m = n("./node_modules/reselect/es/index.js"),
				b = n("./node_modules/lodash/sampleSize.js"),
				p = n.n(b),
				h = n("./src/reddit/models/Gold/Award.ts"),
				f = n("./src/reddit/components/AwardedListingBanner/index.m.less"),
				g = n.n(f);
			const x = 11,
				E = 1e3,
				v = 500,
				y = [g.a.iconCarouselInnerWrapper0, g.a.iconCarouselInnerWrapper1];

			function _(e) {
				let {
					asset: t
				} = e;
				return r.a.createElement("div", {
					className: g.a.awardIcon,
					style: {
						backgroundImage: `url('${t}')`
					}
				})
			}
			const j = Object(m.c)({
				awards: e => e.awards.models
			});
			class O extends s.Component {
				constructor(e) {
					super(e), this.state = {
						animationClass: y[0],
						icons: []
					}
				}
				componentDidMount() {
					this.timerId = setInterval(() => this.updateOrdering(), E + v)
				}
				componentWillUnmount() {
					clearInterval(this.timerId)
				}
				updateOrdering() {
					this.setState(e => {
						const t = [...e.icons];
						return t.unshift(t.pop()), {
							icons: t,
							animationClass: e.animationClass === y[0] ? y[1] : y[0]
						}
					})
				}
				shouldComponentUpdate(e, t) {
					return this.state.animationClass !== t.animationClass
				}
				static getDerivedStateFromProps(e, t) {
					if (t.icons.length) return null;
					const n = Object.values(e.awards).filter(e => {
						return e.awardType === h.e.Global && e.isEnabled && !e.isOptional
					});
					return n.length ? {
						icons: p()(n, x).map(e => {
							var t;
							const n = (null === (t = e.staticIcon64) || void 0 === t ? void 0 : t.url) || e.staticIcon.url;
							return r.a.createElement(_, {
								asset: n,
								key: e.id
							})
						})
					} : null
				}
				render() {
					const {
						animationClass: e,
						icons: t
					} = this.state;
					return r.a.createElement("div", {
						className: g.a.iconCarouselWrapper
					}, r.a.createElement("div", {
						className: e
					}, t))
				}
			}
			var C = Object(u.b)(j)(O);
			const {
				fbt: N
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var S;
			! function(e) {
				e.Dismissed = "dismissed", e.Hidden = "hidden", e.Visible = "visible"
			}(S || (S = {}));
			t.a = e => {
				const {
					className: t
				} = e, n = Object(c.g)(i.a.AWARDED_LISTING_BANNER, a.g), [u, m] = Object(s.useState)(n ? S.Hidden : S.Visible);
				if (u === S.Hidden) return null;
				const b = () => {
					m(S.Visible), Object(c.nb)(i.a.AWARDED_LISTING_BANNER, !1, a.g)
				};
				return u === S.Dismissed ? r.a.createElement("div", {
					className: Object(o.a)(g.a.dismissedContainer, t)
				}, r.a.createElement("div", {
					className: g.a.dismissedText
				}, N._("Ok, we won't show you this again.", null, {
					hk: "4z33KK"
				})), r.a.createElement(d.l, {
					onClick: b
				}, N._("undo", null, {
					hk: "1A9z3Y"
				}))) : r.a.createElement("div", {
					className: Object(o.a)(g.a.container, t)
				}, r.a.createElement("h2", {
					className: g.a.title
				}, N._("Explore and react to the top awarded posts on Reddit", null, {
					hk: "3IAtgk"
				})), r.a.createElement(C, null), r.a.createElement(l.a, {
					className: g.a.close,
					onClick: () => {
						m(S.Dismissed), Object(c.nb)(i.a.AWARDED_LISTING_BANNER, !0, a.g)
					}
				}))
			}
		},
		"./src/reddit/components/BackToSubreddit/index.m.less": function(e, t, n) {
			e.exports = {
				backToSubreddit: "_3aAvvioBKBNnlJqKytAVAd",
				innerContainer: "_3aVffPeM6Nkqs7D0RJ5FBs",
				back: "_17MxNCYEMmDof9NnT6ffxl",
				title: "_2VB8YvVdvxx0h0VGYVrpBX",
				subredditIcon: "_2Aw3HO2EUDcP7F481ZxyYl",
				content: "uhMLc-O1VODjzminrp8py"
			}
		},
		"./src/reddit/components/CommunityChat/fallback.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r);

			function i() {
				return o.a.createElement("span", null, s.fbt._("Chat failed to load...", null, {
					hk: "4CZpEq"
				}))
			}
		},
		"./src/reddit/components/CommunityChat/hooks/useAutoJoin.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return d
			}));
			var s, r = n("./src/lib/sentry/index.ts"),
				o = n("./node_modules/matrix-js-sdk/lib/browser-index.js"),
				i = n("./node_modules/react/index.js"),
				a = n("./src/reddit/components/CommunityChat/contexts/MatrixClientContext.tsx");

			function c(e, t) {
				var n;
				return (null === (n = e.getRoom(t)) || void 0 === n ? void 0 : n.getMyMembership()) || s.none
			}

			function d(e) {
				const t = Object(a.b)(),
					[n, d] = Object(i.useState)(s.none);
				return Object(i.useEffect)(() => {
					t && e && (c(t, e) === s.join ? d(s.join) : async function(e, t, n) {
						function i() {
							c(e, t) === s.join && (n(t), e.off(o.ClientEvent.Sync, i))
						}
						e.on(o.ClientEvent.Sync, i);
						try {
							await e.joinRoom(t)
						} catch (a) {
							const t = new Error(`Failed to join room: ${a.message}`);
							r.c.captureException(t), e.off(o.ClientEvent.Sync, i)
						}
					}(t, e, t => {
						t === e && d(s.join)
					}))
				}, [t, e, d]), n
			}! function(e) {
				e.ban = "ban", e.invite = "invite", e.join = "join", e.leave = "leave", e.none = "none"
			}(s || (s = {}))
		},
		"./src/reddit/components/CommunityChat/hooks/useCaptureKeyboardEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/components/CommunityChat/constants.ts");

			function o() {
				const e = Object(s.useCallback)(e => {
					e.stopPropagation()
				}, []);
				Object(s.useEffect)(() => {
					const t = document.getElementById(r.b);
					null == t || t.addEventListener("keypress", e), null == t || t.addEventListener("keyup", e)
				}, [e])
			}
		},
		"./src/reddit/components/CommunityChat/index.m.less": function(e, t, n) {
			e.exports = {
				matrixClient: "_3Kt3F1QUJNmP0qVWKfPkRd",
				communityRoom: "_1w5FGpcEAWfGVEdWnuOrsf"
			}
		},
		"./src/reddit/components/CommunityChat/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/lodash/throttle.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/components/ErrorBoundary/index.tsx"),
				u = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = n("./src/reddit/components/CommunityChat/constants.ts"),
				b = n("./src/reddit/components/CommunityChat/fallback.tsx"),
				p = n("./src/reddit/components/CommunityChat/hooks/useAutoJoin.ts"),
				h = n("./src/reddit/components/CommunityChat/hooks/useCaptureKeyboardEvents.ts"),
				f = n("./src/reddit/components/CommunityChat/index.m.less"),
				g = n.n(f);
			const x = 200,
				E = 15,
				v = Object(s.a)({
					resolved: {},
					chunkName: () => "community-room",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e("vendors~community-room"), n.e("community-room")]).then(n.bind(null, "./src/reddit/components/CommunityChat/CommunityRoom.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/CommunityChat/CommunityRoom.tsx"
					}
				}, {
					ssr: !1,
					fallback: a.a.createElement(u.a, {
						sizePx: 30
					})
				});

			function y() {
				const [e, t] = Object(i.useState)(0);
				return Object(i.useLayoutEffect)(() => {
					const e = document.getElementById("matrix-client-container"),
						n = o()(() => {
							const n = null == e ? void 0 : e.getBoundingClientRect(),
								s = window.innerHeight - ((null == n ? void 0 : n.top) || 0) - E;
							t(Math.max(x, s))
						}, d.L);
					return n(), window.addEventListener("resize", n), () => {
						window.removeEventListener("resize", n)
					}
				}, [t]), Object(i.useMemo)(() => ({
					height: e
				}), [e])
			}

			function _(e) {
				let {
					roomId: t,
					accessToken: n
				} = e;
				const s = y();
				Object(h.a)();
				const r = Object(p.b)(t);
				return a.a.createElement("div", {
					id: m.b,
					style: s,
					className: Object(c.a)(g.a.matrixClient, {
						invisible: 0 === s.height
					})
				}, r === p.a.join ? a.a.createElement(v, {
					roomId: t,
					accessToken: n
				}) : a.a.createElement(u.a, {
					sizePx: 30
				}))
			}

			function j(e) {
				let {
					roomId: t,
					accessToken: n
				} = e;
				return a.a.createElement(l.a, {
					FallbackComponent: b.a
				}, a.a.createElement(_, {
					roomId: t,
					accessToken: n
				}))
			}
			t.a = a.a.memo(j)
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: async () => n.e("CommunityTopicSurvey").then(n.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = r
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/config.ts"),
				i = n("./src/reddit/components/ContentSurvey/index.m.less"),
				a = n.n(i),
				c = n("./src/reddit/helpers/trackers/contentTag.ts"),
				d = n("./src/reddit/hooks/useTracking.ts"),
				l = n("./src/reddit/icons/fonts/index.tsx"),
				u = n("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function b(e) {
				let {
					survey: t,
					subredditId: n
				} = e;
				const [i, b] = Object(s.useState)(!1), p = Object(d.a)();
				return Object(s.useEffect)(() => p(Object(c.h)()), [p]), r.a.createElement("div", {
					className: a.a.feedBanner,
					onClick: function() {
						b(!0), p(Object(c.g)())
					}
				}, r.a.createElement("div", {
					className: a.a.notepadSnoo
				}, r.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), r.a.createElement("div", {
					className: a.a.bannerCopy
				}, r.a.createElement("p", {
					className: a.a.copy
				}, m._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), r.a.createElement("p", {
					className: a.a.meta
				}, m._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), r.a.createElement(l.a, {
					name: "caret_right",
					className: a.a.chevron
				}), i && r.a.createElement(u.a, {
					withOverlay: !0,
					subredditId: n,
					survey: t,
					onClose: () => b(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.all([n.e(0), n.e(5)]).then(n.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				i = Object(r.a)(o);
			t.a = i
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, n) {
			e.exports = {
				feedBanner: "_3oY2sjcQ7EgBYd7agqleJv",
				notepadSnoo: "B0cLCCVs794x74kjJidDO",
				bannerCopy: "_2NfcId0Mtt4-NP4AbrAck5",
				copy: "BcSr5zM39F4cQJ9MQqkRn",
				meta: "r9AkMaLWOPKfC5Swx9XQf",
				chevron: "yFbNzMMxa-u2DgUP3Gz5h",
				header: "wKkshJ3Og8gaDgJmSULiK",
				introCopy: "m3rT-KnA6An7scRNg10UW",
				checkbox: "Y5aDAUsXXQaMbdCe1-qdG",
				result: "_29ewfEVekvKEl_P2hqf4tI",
				heading: "_3yKTUBG4MrGHv9n644t4Ua",
				card: "_18VT-IpGoX6SDdyHHLI_eo",
				pending: "hg80uiMz2ssH44RLsmlhG",
				infoIcon: "_3HgNBpJCFAy2mohcd9VxmZ",
				banner: "_23eBsXSECZlQ3Eh-zXhEbC",
				communityIcon: "_2Z8cRxGvjX2hQUlQK_VEOE",
				communityName: "_1sHP__xe_7iTbSpLKp7FeC",
				ratingImg: "UZWqo3i6ydUcE18iJqx3P",
				ratingAudience: "_1Y5aAemcMRF3uwSgYpqbsT",
				ratingDescription: "_1e5wHYsIyWJlZSjZCHhBKg",
				reasonsHeader: "_1npcgCYHbRcUsU6KOI7ony",
				reason: "_3rlzPcuZsxLsVx6ib3oBjk"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "_1BIJI1DdDH_4emkRdSgYtS",
				titleFontH2: "_23v2sEqtCPdekfIaLfBZp0",
				titleFontH3: "_3IPxgawQfrpK8awcnvf2tu",
				titleFontH4: "ZuN5dJ8fJ4v1pojDMILP0",
				titleFontH5: "_2ztaAHYqZbZbLYMI-lEtHX",
				titleFontH6: "FJTuq_jN8uqei2Q4GA66j",
				metadataFont: "_1cBJStdY8xmiR_5jS9gSeH",
				flairFont: "_1fMm1d_nUYPU1bZGhGW2bC",
				labelsFont: "_2_UCOjEBwHnvHk6zBrjPsR",
				actionFont: "_2yyPZbzMoNrAUtQO_SktBd",
				smallButtonFont: "_2_b2a8o6wkToROG8VNRtMR",
				largeButtonFont: "_3Ls4y5dDOPfsU8368YWswn",
				strongTextFont: "_1VYMlogcTatyZdJyEPfw1t",
				tabFont: "_2TXH3iCv_qoKnRDI_q5ehB",
				buttonFontXS: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontXs: "BKPBSYK3yGS2AhF1fd1an",
				buttonFontS: "_1l-KcydphK1LZ0DY8WNS7-",
				buttonFontM: "_2-Ytw7EJuJ76FU11odY0vH",
				buttonFontL: "_1fMOhvVkzFghuFsd8kzAEz",
				buttonFontXL: "_25jU9LTEsPZrTgo4UTgEvr",
				buttonFontXl: "_25jU9LTEsPZrTgo4UTgEvr",
				bodyFontH1: "_2ZqUm_Cp2QP_j0eqf4TOLu",
				bodyFontH2: "_3CcMb_6AI06xq5ar12VdGR",
				bodyFontH3: "_2rQURI6yWXPMKy8zTsJVhS",
				bodyFontH4: "_20eyEQiTe3oMfPFHKZsVTk",
				bodyFontH5: "_1LGkFCI_sPLVchg392lGmP",
				bodyFontH6: "NneW2LW2rvek7WBZYLULA",
				bodyFontH6Small: "_5_68hlXr857aHgLLCMBWC",
				bodyFont: "_1WbHqicmob5scrxcNoRM6z",
				bodyFontSmall: "_1JhbrLSCwywCqsws4jUAzS",
				bodyFontMono: "_1DXzqFfRPHDAA7hSJMbTxi",
				landingPageTitleFontH1: "_2rhyIzueJnamDCLTVji2bX",
				landingPageTitleFontH2: "IkHneGRWExxPl4q-DTAJA",
				landingPageTitleFontH3: "_2kR4TPEfOPfG6DqStt2Die",
				banner: "_2bVJFy1zdpBBF6tNX6MsZt",
				button: "_3dn2kMjL3eThyGPEb1oAf-",
				buttonWrapper: "_2MsQ2gmnKXnwElZFA1jCbV",
				close: "_1MiKBKJCDaPRJ7r-vSQ8xU",
				closeContainer: "_3Amqa4WXRxq65XAjmjQw8E",
				heading: "aVXYLWktPH4YxXbOJbfEg",
				postIcon: "_2cBHGzAvbCcbR3bvPSt_Y1",
				text: "_3VcroXmJS3StZ2nIi8JODq"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/constants/banners.ts"),
				l = n("./src/reddit/controls/Button/index.tsx"),
				u = n("./src/reddit/helpers/localStorage/index.ts");
			const m = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				b = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				p = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				});
			var h = n("./src/reddit/icons/svgs/CirclePost/index.tsx"),
				f = n("./src/reddit/icons/svgs/Close/index.tsx"),
				g = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/components/CreatePostBanner/index.m.less"),
				E = n.n(x);
			const v = Object(i.b)(null, e => ({
				showToast: () => {
					e(Object(a.f)({
						kind: g.b.SuccessCommunity,
						text: s.fbt._("Dismissed", null, {
							hk: "3YBtnR"
						})
					}))
				}
			}));
			class y extends o.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(u.nb)(d.a.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
							visible: !1
						}), this.props.showToast(), this.props.sendEvent(b())
					}, this.createPost = () => {
						this.props.sendEvent(p())
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						subreddit: e
					} = this.props, t = !Object(u.g)(d.a.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(m()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? o.a.createElement("div", {
						className: E.a.banner
					}, o.a.createElement("button", {
						className: E.a.closeContainer,
						onClick: this.closeBanner
					}, o.a.createElement(f.a, {
						className: E.a.close
					})), o.a.createElement(h.a, {
						className: E.a.postIcon
					}), o.a.createElement("div", {
						className: E.a.heading
					}, s.fbt._("Create the ideal {subredditDisplayText} post", [s.fbt._param("subredditDisplayText", ` ${e.displayText} `)], {
						hk: "3ZioIj"
					})), o.a.createElement("div", {
						className: E.a.text
					}, s.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), o.a.createElement("br", null), s.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), o.a.createElement("div", {
						className: E.a.buttonWrapper
					}, o.a.createElement(l.m, {
						className: E.a.button,
						target: "_blank",
						href: `/${e.displayText}/submit`,
						onClick: this.createPost
					}, s.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = v(Object(c.c)(y))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				a = n.n(i);
			class c extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(o.a)(a.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(o.a)(a.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(o.a)(this.props.hidePadding ? a.a.bodyHidePadding : a.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = c
		},
		"./src/reddit/components/Econ/Prediction/Confetti/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_30UqRfQUvAM856xCCnxuZt",
				left: "NGXhDTfdYyHsV0bMiz8c9",
				right: "_1gN69CDTTgxbquzyeJIRdg"
			}
		},
		"./src/reddit/components/Econ/Prediction/Confetti/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/reddit/components/Econ/Prediction/Confetti/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => {
				let {
					className: t,
					...n
				} = e;
				return a.a.createElement("div", l({
					className: Object(o.a)(d.a.container, t)
				}, n), a.a.createElement("img", {
					className: d.a.left,
					src: `${s.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: r.fbt._("Confetti", null, {
						hk: "3dmR4h"
					})
				}), a.a.createElement("img", {
					className: d.a.right,
					src: `${s.a.assetPath}/img/econ/predictions/confetti-bg.png`,
					alt: r.fbt._("Confetti", null, {
						hk: "3dmR4h"
					})
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/async.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Econ-Prediction-CreatingTournamentBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Econ-Prediction-CreatingTournamentBanner").then(n.bind(null, "./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/EmptyPredictions/index.m.less": function(e, t, n) {
			e.exports = {
				primaryText: "_1bwD7kygv4bVZM8fDgSQv8",
				mainContentWrapper: "_3-p7jwY9LowTxunslKskSz",
				mainContent: "_2ckdQlwH_QZ38t7uWKUMLo",
				backgroundPlaceholder: "s5jLEXcFLaQaE2Ck0qPJV",
				component: "_2fO9Pa6g6JYBjRFkKsbzHI"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/config.ts");
			const {
				fbt: i
			} = n("./node_modules/fbt/lib/FbtPublic.js"), a = `\n  ${o.a.assetPath}/img/econ/predictions/waiting.png,\n  ${o.a.assetPath}/img/econ/predictions/waiting@2x.png 2x,\n  ${o.a.assetPath}/img/econ/predictions/waiting@3x.png 3x,\n`;
			t.a = e => r.a.createElement("img", {
				className: e.className,
				srcSet: a,
				src: `${o.a.assetPath}/img/econ/predictions/waiting@2x.png 2x`,
				alt: i._("Snoos gazing into a crystal ball", null, {
					hk: "1XM1Zp"
				})
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.m.less": function(e, t, n) {
			e.exports = {
				"status-badge": "_2u7bIsw_LdudsW_rSs4GtE",
				statusBadge: "_2u7bIsw_LdudsW_rSs4GtE",
				live: "_2gAzDyByGNwe-USVOIr2v3",
				ended: "DDaz64wxy8rIcPfzwEXfB"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.m.less"),
				d = n.n(c);
			const l = e => {
				let {
					className: t,
					status: n
				} = e;
				const r = [a.a.Live, a.a.LiveInProgress].includes(n),
					c = n === a.a.Closed;
				return o.a.createElement("span", {
					className: Object(i.a)(d.a.statusBadge, t, {
						[d.a.live]: r,
						[d.a.ended]: c
					})
				}, r && s.fbt._("Live", null, {
					hk: "1hUJkn"
				}), c && s.fbt._("Ended", null, {
					hk: "3oH4rs"
				}))
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx"),
				c = n("./src/reddit/selectors/features/predictions/tournaments/index.ts");
			const d = e => {
				let {
					tournamentId: t,
					className: n
				} = e;
				const r = Object(i.e)(e => Object(c.a)(e, t));
				return r && r.tokenIconUrl ? o.a.createElement("img", {
					className: n,
					alt: s.fbt._("Tournament token", null, {
						hk: "3cgDZy"
					}),
					src: r.tokenIconUrl
				}) : o.a.createElement(a.a, {
					className: n
				})
			}
		},
		"./src/reddit/components/Econ/Prediction/UnicornIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/experiments/econ/index.ts");
			const a = e => {
					let {
						className: t
					} = e;
					return r.a.createElement("svg", {
						className: t,
						fill: "none",
						height: "20",
						viewBox: "0 0 20 20",
						width: "20",
						xmlns: "http://www.w3.org/2000/svg"
					}, r.a.createElement("path", {
						d: "m11.8373 7.17254c-.0381-2.14805-1.2066-4.26563-3.12608-5.6611-.7001 1.14224-1.0571 2.46166-1.02847 3.80108.02863 1.33941.44168 2.64237 1.18995 3.75365",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m8.87285 9.06578c-.03047.01981-.17672-.13254-.39609-.43722-.29757-.44864-.53424-.93481-.70383-1.44575-.25319-.76597-.37124-1.57014-.34887-2.37656.0185-.47751.08381-.95205.195-1.4168.12075-.49951.29704-.98393.52559-1.44421.04547-.10166.09632-.20083.15234-.29708l.16453-.28792c.0182-.03202.04253-.06014.07159-.08276.02907-.02261.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03655.00458.07183.01631.10384.03453l.02742.01828c.38016.28079.73681.5921 1.0664.93082.30177.31806.57737.65991.82417 1.02223.4117.60733.7253 1.27566.9293 1.98046.1388.46809.2126.95301.2194 1.44118 0 .34277-.0396.52863-.0731.52863-.0336 0-.0762-.18281-.1402-.50731-.0876-.45579-.214-.90328-.3778-1.33757-.2445-.64356-.5745-1.25128-.9811-1.8068-.2427-.32728-.50846-.63681-.79524-.92625-.31294-.30838-.64797-.59352-1.00242-.85313l.41742-.08226-.15234.2666c-.05268.08874-.10048.18028-.1432.27422-.20887.42313-.37327.8668-.49055 1.32387-.10969.42749-.18107.8639-.21328 1.30406-.04198.75145.02993 1.50493.21328 2.23488.31535 1.25684.78762 1.94696.70078 1.99875z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m15.6001 5.87727c-.8963-.80295-1.9238-1.44605-3.0378-1.90125-.8516-.34734-1.7854-.585-2.69037-.41742-1.00242.18586-1.84945.84246-2.58984 1.55086-.89883.86988-1.70321 1.87383-2.14196 3.04687-.34277.91407-.45703 1.93177-1.02984 2.72697-.44789.6292-1.12582 1.0481-1.73672 1.5234s-1.19894 1.0664-1.32691 1.8281c-.134064.7983.2666 1.5905.76172 2.2349.43629.6039.99546 1.1085 1.64074 1.4808.65104.3698 1.41006.5028 2.14805.3763 1.28273-.2544 2.18918-1.3711 3.33937-2.0018.91406-.4966 1.98046-.6657 2.93876-1.0664 1.7105-.7343 3.0622-2.1139 3.7613-3.8391.6813-1.72672.7474-3.63533.1874-5.40512",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m11.9928 5.88635c-.9902.47227-2.10078.77238-3.13214.36105-.44942-.17824-.91407-.48597-.99633-.96281-.08836-.53777.35648-1.01156.81047-1.31472 1.4823-.98567 3.3333-1.06641 5.0669-.66422 1.7337.40218 3.2663 2.19375 3.4842 3.95941 1.1699.23309 1.6178 1.90582 1.4396 3.08494-.0975.649-.4647 1.2416-.5027 1.8967-.0595 1.042.7175 1.9591.8302 2.9966.0424.4433-.0361.8899-.2271 1.2922-.1909.4024-.4873.7455-.8576.993-.7449.4829-2.1998.8653-2.9661.4174-.5408.5408-1.0664.8531-1.953.5621-.4365-.1597-.8123-.4516-1.075-.835s-.3992-.8392-.3906-1.3039c.0251-.4645.1826-.9122.4539-1.2901.2713-.378.645-.6704 1.0772-.8427-.118-.6928-.0689-1.4038.143-2.0739.212-.6701.5808-1.2799 1.0757-1.7789.4357-.4311.6475-1.2568.8623-1.82809.3184-.84551.0792-1.3589-.7115-1.79461-.7906-.4357-.6322-.91406-1.5356-.93234",
						fill: "#7e53c1"
					}), r.a.createElement("path", {
						d: "m2.93455 11.5232c-.76172.5652-1.73063 2.1861-1.73063 2.1861-.335154.9887-.09293 2.174.67184 2.8839.30469.2803.66879.4814.97347.7617.24375.2209.4479.489.72973.6581.29688.1598.6324.2336.96891.2133 1.02679-.0183 1.96523-.5515 2.83207-1.1014.52711-.3337.74496-.3748 1.08469-.8973.33972-.5226.44179-1.2508.08074-1.7596-.10551-.1489-.24341-.2718-.40332-.3597s-.33766-.1383-.51989-.1476c.14706-.1759.25646-.3801.32145-.5999.06499-.2199.08417-.4507.05637-.6783-.03221-.2274-.1238-.4424-.26556-.6232-.14175-.1808-.32865-.321-.54187-.4066-.21517-.0769-.44922-.0833-.66831-.0184s-.41185.1978-.55044.3795c-.12035-.4571-.26812-.9415-.66117-1.1929-.39304-.2514-.95672-.1706-1.36043.0899s-.73429.2133-1.01156.6094",
						fill: "#ff85c6"
					}), r.a.createElement("g", {
						fill: "#000"
					}, r.a.createElement("path", {
						d: "m12.0369 5.96144c.0076.01828-.0975.08074-.3047.18129-.1051.04875-.2422.09598-.4022.15234-.1874.06167-.3781.11253-.5713.15235l-.1691.03351-.1813.01524-.1904.02133-.2011.00761c-.29982.01193-.59992-.01521-.89273-.08074-.34868-.0711-.67773-.21717-.96434-.42809-.33198-.24583-.57949-.58862-.7084-.98109-.00992-.03112-.01206-.0642-.00622-.09634.00585-.03215.01949-.06236.03974-.088l.18129-.22699.09293-.11578c.03351-.03656.06855-.0716.10359-.10816l.21176-.21633.23613-.20109c.33521-.27221.70445-.49959 1.0984-.67641.86515-.37673 1.79855-.5717 2.74215-.57281.2458 0 .4946.00761.7465.02285.1249.01066.2514.02437.3778.03656l.3885.06703c.5231.11861 1.0247.31749 1.4869.58957.4807.27702.916.62643 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1606.44653.2128.92481.1524 1.39547l-.2225-.32449c.3024.07237.582.21897.8136.42656.2182.19639.3962.43337.524.69773.2368.4925.3602 1.03182.3611 1.57828.0036.26324-.0198.52618-.0701.78458-.0515.2498-.1265.4941-.224.7297-.1751.4479-.3458.8471-.3351 1.231.0236.4021.1338.7945.323 1.1502.1736.3762.3762.748.5149 1.1486.0732.1995.1243.4064.1523.617.025.2054.025.4131 0 .6185-.049.3813-.1783.7479-.3793 1.0756-.1803.2992-.4198.5584-.7038.7617-.2515.1695-.5267.3009-.8166.39-.4515.1462-.9263.2072-1.4.1798-.2998-.0157-.5927-.0952-.8593-.2331-.0441-.0259-.0837-.0472-.1142-.0701l-.0747-.064c-.0381-.035-.0548-.0564-.0487-.064s.0335 0 .0792.0168l.0838.0366c.0335.0137.0746.0259.1203.0426.265.0859.5427.1261.8212.1188.4422-.0126.879-.1002 1.2919-.2589.253-.0934.4915-.2222.7083-.3824.2336-.1832.4283-.4111.5729-.6703.1596-.2843.2582-.5987.2894-.9232.0316-.3501-.0206-.7025-.1523-1.0284-.131-.3519-.3321-.7038-.5256-1.0953-.2303-.4174-.366-.8802-.3976-1.3559-.0049-.2555.0316-.5102.1081-.7541.0701-.2376.1524-.457.2407-.6779.083-.2069.1462-.4211.1889-.6399.0401-.2216.0575-.44666.0518-.67179-.0025-.45984-.1065-.91345-.3046-1.32843-.089-.19841-.2208-.37466-.386-.5161-.1651-.14144-.3595-.24457-.5692-.30199-.0707-.01706-.1324-.05965-.1735-.11957s-.0585-.13291-.049-.20492c.0449-.37936.0001-.76396-.131-1.12278-.1711-.47191-.4347-.90491-.7754-1.27359-.3334-.36724-.7207-.68161-1.1487-.93234-.4116-.24365-.858-.42295-1.3238-.53168l-.3504-.06704-.352-.0396c-.2346-.0193-.4671-.02946-.6977-.03047-.8711-.0115-1.7356.15167-2.5426.47988-.69944.29292-1.31358.75772-1.78547 1.35129l.03199-.18738c.09268.31809.28096.59997.5393.80742.23935.19093.5167.32857.81351.40371.26464.07357.53739.114.81197.12035h.1874l.1798-.00762.1721-.00761.163-.01981c.2118-.01828.3976-.06246.5607-.08988.163-.02742.3046-.06856.4082-.0975.2194-.05942.3398-.08379.3474-.06551z"
					}), r.a.createElement("path", {
						d: "m15.1617 6.80064c.032-.01066.16.18738.2529.60938.0533.25693.0661.52062.0381.78152-.0428.34276-.1325.678-.2666.99633-.159.38683-.3724.749-.6338 1.07553-.2727.3504-.5713.684-.8318 1.0664-.1345.1968-.2591.4001-.3732.6094-.1109.2057-.1964.4241-.2544.6505-.126.4741-.116.9741.0289 1.4427l.0549.1523.0655.1524v.0107c.0153.035.0235.0728.0241.1111s-.0063.0763-.0205.1118c-.0142.0356-.0352.068-.062.0954-.0268.0273-.0587.0491-.094.064l-.0228.0092c-.4112.1591-.7588.4486-.9897.8242s-.3322.8166-.2885 1.2553c.0443.3877.1928.7562.4296 1.0664.21.2635.5015.4499.8288.5301.0736.0194.1484.0342.2239.0442.0792.0102.1564.0183.2316.0244.1384.0097.2774.0097.4159 0 .2139-.0066.4231-.0652.6093-.1706.3047-.1874.4007-.3977.4434-.3702.0167.0076.0091.0655-.029.166-.0649.1473-.1623.2781-.2849.3824-.2014.1636-.4437.2689-.7007.3047-.1541.0256-.31.0389-.4662.0396-.0823 0-.1656 0-.2499 0-.0935-.0045-.1866-.0152-.2787-.032-.4244-.0768-.8101-.2954-1.0939-.62-.3157-.3695-.521-.8204-.5926-1.3011-.0783-.5443.0291-1.0992.3047-1.5752.2866-.522.7517-.9233 1.3101-1.1304l-.1645.4022-.0838-.1858c-.0228-.064-.0487-.1265-.0701-.192-.1795-.573-.1895-1.1856-.0289-1.7641.0739-.272.1819-.5336.3215-.7785.1288-.2228.2697-.4385.4219-.646.2956-.4067.6231-.7464.8943-1.06636.2517-.28403.4648-.60009.6337-.93996.1414-.27918.2488-.57429.32-.87903.0485-.23077.0679-.4667.0579-.7023-.0198-.38695-.0732-.6109-.0305-.62461z"
					}), r.a.createElement("path", {
						d: "m11.7475 15.5359c.0397.0198-.0121.1751-.0487.457-.0497.3816-.0079.7696.1219 1.1319.0832.2572.2266.4908.4181.6816.1916.1907.4258.3331.6833.4153.2964.1041.6157.1251.9232.0609.3275-.0754.6263-.2436.8608-.4844.0439-.0439.1008-.0725.1623-.0816.0614-.009.1242.0019.1789.0313l.0229.0122.131.0716c.3301.1294.6855.1815 1.039.1523.3483-.0224.6927-.0874 1.0252-.1935.2948-.0892.572-.2283.8196-.4113.2096-.1663.3885-.3678.5287-.5957.2115-.3484.3397-.741.3747-1.1471.0275-.2879.0153-.457.0595-.4677.0441-.0107.1233.1523.1675.457.0501.4566-.033.918-.2392 1.3285-.1429.2883-.3393.5468-.5789.7617-.2813.2401-.6046.426-.9536.5484-.3748.137-.7663.2231-1.1639.256-.4489.0469-.9024-.017-1.3209-.1859-.07-.0335-.1371-.0746-.2056-.1112l.3626-.0381c-.3113.3274-.7135.554-1.1548.6505-.409.0775-.8316.0374-1.2188-.1158-.1777-.0673-.3469-.1553-.5042-.262-.1473-.1097-.279-.2388-.3915-.3839-.2342-.2994-.39-.6525-.4534-1.0273-.0633-.3748-.0321-.7595.0908-1.1192.1112-.291.2346-.4083.2635-.3915z"
					}), r.a.createElement("path", {
						d: "m12.5288 4.12384c.0335.12188-.6551.38696-1.2964.98567-.6414.59871-.9766 1.24922-1.0939 1.20504-.0533-.01981-.0411-.2209.0792-.51797.1677-.38261.4134-.72603.7214-1.00828.3079-.28226.6714-.49715 1.0672-.63094.3062-.09902.5073-.08836.5225-.03352z"
					}), r.a.createElement("path", {
						d: "m11.1488 3.92917c.0243.12492-.6734.33058-1.32543.89273s-.98262 1.20199-1.10145 1.15781c-.05332-.0198-.04265-.21937.07922-.51187.171-.37717.42374-.71159.73992-.97903.31619-.26744.68794-.4612 1.08824-.56726.3107-.0716.5088-.04723.5195.00762z"
					}), r.a.createElement("path", {
						d: "m16.3803 10.1901c-.1097-.067.3915-.97041.5347-2.19678s-.1005-2.22269.0229-2.26078c.0533-.01676.1935.2148.3047.63223.0647.24543.1066.49635.1249.74953.0464.62313-.0318 1.24927-.23 1.84183-.0799.24049-.1819.47305-.3047.69469-.2118.37938-.4053.56978-.4525.53928z"
					}), r.a.createElement("path", {
						d: "m18.9885 16.1546c-.064-.0137-.0412-.2773-.1036-.6749-.0645-.5111-.2722-.9936-.5992-1.3918-.327-.3981-.7599-.6957-1.2488-.8583-.3793-.1356-.6413-.163-.6429-.23-.0015-.0671.2697-.1402.7191-.0686.5932.102 1.1302.4135 1.5132.8779.383.4643.5866 1.0507.5739 1.6525-.0167.4555-.1538.7069-.2117.6932z"
					}), r.a.createElement("path", {
						d: "m14.8916 15.5424c0 .0549-.2575.0945-.6475-.0213-.5113-.1635-.9518-.4959-1.2494-.9426-.2976-.4468-.4345-.9814-.3882-1.5162.0426-.4038.1767-.6216.2285-.6094s.0411.2513.0792.6094c.0371.4555.1895.8941.443 1.2745.2535.3803.5996.6898 1.0058.8994.3138.1721.5377.2483.5286.3062z"
					}), r.a.createElement("path", {
						d: "m17.5289 17.9844c.0198.0518-.1813.1919-.5546.3047-.2195.0627-.4453.1005-.6733.1127-.2821.0127-.5646-.0104-.841-.0685-.5039-.1057-.972-.3398-1.3589-.6795-.2879-.2651-.4021-.4799-.3625-.5164.0396-.0366.2376.0883.5454.2681.3936.2324.8213.4016 1.2675.5012.2454.051.4945.082.7449.0929.2078.0059.4158.0008.6231-.0152.358-.029.5896-.0625.6094 0z"
					}), r.a.createElement("path", {
						d: "m2.90817 17.6644c.02743-.0336.16758.0441.422.1447.35517.1372.73285.207 1.11363.2056.2607-.0006.52062-.0286.77543-.0837.29447-.0691.58245-.1634.86074-.2819.6451-.2903 1.25785-.6478 1.82813-1.0664.3184-.2194.63527-.4357.95215-.6337.16005-.1033.32643-.1964.49816-.2788.16632-.0783.33786-.145.5134-.1996.33819-.1066.66119-.1691.94909-.2316.2657-.0562.5281-.1269.7861-.2117.9461-.291 1.3894-.7419 1.4503-.6856.0274.0229-.0411.1783-.2529.39-.3054.2895-.6618.5198-1.0511.6795-.2631.1148-.5339.2111-.8105.2879-.2925.0838-.5957.1615-.8943.2712-.1517.0544-.29977.1185-.44329.1919-.15014.0784-.29562.1654-.43571.2605-.30468.1966-.60937.4114-.92929.6323-.60607.446-1.26645.8131-1.96524 1.0923-.31459.118-.64019.2042-.97195.2574-.29262.0427-.58936.0493-.8836.0198-.42771-.0359-.83949-.1789-1.19742-.4159-.24527-.1751-.33668-.3168-.31383-.3442z"
					}), r.a.createElement("path", {
						d: "m6.225 5.96731c.03504.03047-.11882.24832-.27269.70688-.15387.45855-.32906 1.14257-.64289 1.98046-.35795 1.00905-.94757 1.92005-1.72149 2.65995-.44789.4128-.98261.7419-1.41984 1.1365-.22006.1952-.41046.4216-.5652.6718-.15641.2581-.27396.5379-.34886.8303-.1496.5767-.109 1.1864.11578 1.7382.2033.5106.57035.9393 1.04355 1.2188.43841.246.94.3563 1.44117.3168.4522-.035.89467-.1495 1.30711-.3382.62316-.2632 1.19822-.6282 1.70168-1.0801.36106-.3214.55149-.521.585-.4921.03352.029-.09902.2682-.42351.6521-.46912.5411-1.04342.9812-1.68797 1.2934-.4486.2367-.93728.3881-1.44117.4463-.60087.0697-1.20871-.0451-1.74282-.329-.59015-.3284-1.05149-.8472-1.308628-1.4717-.279975-.664-.334037-1.4015-.153867-2.0993.089401-.3498.231157-.6842.420465-.9917.18513-.296.41307-.563.67641-.7922.24386-.2077.49809-.403.76172-.585.24527-.1767.47683-.3473.68707-.5286.39554-.3476.74199-.7474 1.02984-1.18832.25632-.38967.48001-.79986.66879-1.22636.34278-.78153.57586-1.46707.81199-1.91344.23614-.44637.45551-.63984.47836-.61547z"
					}), r.a.createElement("path", {
						d: "m7.61001 17.0368c-.01371-.0229.07312-.096.22852-.227.21967-.1779.4162-.3826.585-.6094.11178-.1553.19769-.3276.25441-.5103.06503-.2047.08222-.4215.05027-.6338-.0336-.226-.14711-.4325-.31992-.5819-.08594-.0808-.18875-.1414-.30099-.1775-.11225-.0361-.23111-.0467-.34799-.0312-.04085.0077-.08309.0029-.12121-.0136-.03812-.0166-.07037-.0443-.09255-.0795-.02219-.0351-.03328-.0762-.03183-.1177.00144-.0416.01535-.0817.03992-.1153.15099-.206.25783-.4409.31383-.6901.0588-.2522.04721-.5157-.03352-.7617-.06006-.1925-.16964-.3659-.31775-.5028s-.32957-.2325-.52623-.2772c-.18409-.0295-.37273-.0078-.54539.0625-.16009.0641-.29709.1751-.39305.3184v.0076c-.02289.0359-.05711.0632-.09724.0776-.04014.0144-.08391.0149-.12442.0017-.0405-.0133-.07544-.0397-.0993-.075s-.03529-.0776-.03247-.1201c.00897-.1905-.02689-.3804-.10468-.5545s-.19534-.3275-.34321-.4479c-.2408-.1906-.54594-.2806-.85161-.2514-.20637.0174-.40675.0781-.58804.1783-.12797.07-.195.1203-.21176.1035-.01676-.0167.02437-.0914.14168-.2026.17711-.1566.39359-.2619.62613-.3047.16814-.034.3411-.0371.51035-.0091.2035.0334.39676.1126.5652.2316.2034.1439.36838.3356.48046.5582.11209.2226.16786.4693.16243.7184l-.35801-.1097c.1399-.2193.34103-.3927.5785-.4989.23747-.1061.50086-.1403.75756-.0983.27463.053.52991.1791.73901.3648.2091.1858.36429.4245.44927.691.10765.3236.12191.671.04113 1.0024-.07296.3061-.21004.5932-.40219.8425l-.20109-.3306c.17731-.0238.3577-.0071.52763.0488s.32497.1497.45346.2741c.2323.2134.37995.5033.4159.8166.02715.2664-.00994.5354-.10816.7846-.08209.2088-.20017.4017-.34887.5697-.20103.2307-.44204.4232-.71145.5683-.18586.099-.29707.131-.30773.1112z"
					}), r.a.createElement("path", {
						d: "m1.63036 14.9239c-.05028-.0671.02742-.2026.10054-.4037.0973-.242.14496-.501.14016-.7618-.00623-.1382-.03082-.275-.07313-.4067-.02438-.0824-.06591-.1587-.12187-.224-.04305-.0401-.0954-.0689-.15235-.0837-.05179-.0153-.10207-.0122-.13253-.0381-.03047-.0259-.03657-.0899.03503-.1646.05278-.0478.11654-.0819.18564-.0991.06909-.0173.14139-.0173.21046.0001.09781.0283.18881.0762.26741.1409s.14313.1448.18962.2354c.14254.2601.1987.5588.16036.8529-.03833.2941-.16918.5684-.37364.7833-.20414.2026-.39305.23-.4357.1691z"
					}), r.a.createElement("path", {
						d: "m3.30922 14.9463c.00761-.0838.2148-.1218.47836-.2529.15103-.0716.29108-.1645.41589-.2757.14195-.126.25387-.2821.32754-.457.02539-.0616.03666-.1281.033-.1946-.00367-.0666-.02218-.1314-.05417-.1899-.03199-.0584-.07666-.1089-.13073-.1479-.05407-.0389-.11616-.0652-.18173-.077-.24375-.0457-.42504.0685-.48598.0152-.02894-.0243-.02742-.0959.04266-.1889.10853-.1306.26266-.215.43113-.2361.1238-.0188.25029-.0073.36868.0335.13848.0489.26222.1322.35953.2422.10996.1238.18329.2757.21175.4388.02862.1723.0102.3491-.05332.5119-.09984.2397-.25932.45-.4633.6108-.20397.1607-.44567.2667-.70213.3078-.15219.0271-.30857.0187-.45703-.0244-.09445-.035-.1432-.0777-.14015-.1158z"
					})), r.a.createElement("path", {
						d: "m3.53778 4.27334c.35264.00703.70225-.06643 1.02223-.2148.5652-.30469.58653-1.05879.69317-1.70473l-.68707-.57586-.29098-.29097c-.40265-.06883-.81671-.01302-1.18676.15996-.11314.03509-.21026.109-.27422.20871-.04419.13436-.03491.28058.0259.40828.20871.67336.43723 1.34824.69773 2.00941z",
						fill: "#fcff78"
					}), r.a.createElement("path", {
						d: "m6.92588 3.76312-1.45336-1.21875c-.08836.62309-.10817 1.28121-.66879 1.66207-.31535.21481-.73582.28793-1.16848.30469.28754.71505.63298 1.40543 1.03289 2.06426.56368.13254 1.12582.15234 1.6636-.21176.81047-.54691.7084-1.71844.59414-2.60051z",
						fill: "#34e2ac"
					}), r.a.createElement("path", {
						d: "m8.74027 5.59247c-.30468-.5591-.8059-.98262-1.2934-1.39242l-.24832-.20719c.0975.87293.10665 1.89668-.59871 2.47558-.54843.45704-1.14867.49665-1.75804.39.19381.29675.40386.58258.62918.85618.30468.35953.64593.70839 1.0923.8455.39305.12036.81809.06246 1.21875 0 .23991-.04098.4642-.14628.64899-.30468.23423-.14822.41471-.36769.51492-.62614.19905-.67984.12528-1.4105-.20567-2.03683z",
						fill: "#4ab6ff"
					}), r.a.createElement("path", {
						d: "m3.63372 1.50807c-.00915.02133-.07922 0-.20262.01066-.17338.01719-.33517.09486-.45703.21938-.08963.10119-.15545.22118-.19262.35115s-.04475.26662-.02219.3999c.03199.32297.21176.66727.45703 1.05117.47989.78 1.04203 1.71387 1.65903 2.75438l.47226.79828c.14562.26333.3215.50874.52407.73125.09393.10008.20166.18626.31992.25594.12269.06894.2545.12023.39152.15234.29024.05902.59075.04276.87293-.04723.14265-.04381.27929-.10522.40676-.18281.12585-.08503.24364-.18141.35191-.28793.21371-.19425.37641-.43804.47379-.70992.18434-.52102 0-1.09231-.33515-1.52344-.33516-.43113-.79067-.79371-1.1959-1.13648l-1.15782-.94149c-1.42593-1.13953-2.32629-1.82812-2.28515-1.89668.04113-.06855 1.02832.50578 2.52586 1.56914.37324.26661.78.56368 1.20961.89121.42961.32754.91406.67336 1.32082 1.18981.21796.26961.37913.58054.47379.91406.0477.17942.07177.36431.0716.54996-.00338.19142-.03469.38131-.09293.56368-.12117.36293-.33056.6901-.60938.95214-.1406.13226-.29366.25062-.45703.35344-.16878.10363-.34998.18553-.53929.24375-.37848.12012-.78173.13955-1.17001.05637-.19307-.04362-.37883-.11494-.55148-.21176-.16901-.097-.32297-.21811-.45703-.35953-.23145-.25682-.43095-.54072-.59414-.84551l-.45703-.81047c-.5911-1.05574-1.11668-2.01093-1.55086-2.81683-.2209-.40067-.41438-.82266-.42047-1.23551-.0138-.17693.01449-.35461.08254-.51851.06804-.16391.17393-.30937.30898-.4245.08602-.06939.18569-.1199.29251-.14825.10683-.02835.21842-.03389.32753-.01628.15844.03047.21328.09141.20567.10512z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m4.46393 6.19913c-.07008.03961-.40371-.44332-.88664-1.25836-.24223-.40675-.52102-.8973-.82266-1.44574-.07617-.13558-.15234-.27879-.22395-.43722-.07862-.16703-.13841-.34229-.17824-.52254-.04674-.20918-.04674-.4261 0-.63528.05176-.237.17898-.45082.36258-.60937.19251-.15305.43201-.23486.67793-.23156.21542.00414.42722.05618.62004.15234.16671.07743.32497.17188.47226.28184.13711.10359.25747.20261.38086.30468.4875.38848.91407.74496 1.27969 1.05117.71906.60938 1.13801 1.02223 1.09078 1.08622-.04722.06398-.55605-.23157-1.3391-.76172-.39152-.26356-.85008-.58653-1.35586-.95215-.23758-.19065-.49262-.35846-.76172-.50121-.24527-.11426-.53929-.11578-.69164.01676-.08628.07832-.14594.18165-.17062.29554-.02806.12849-.02806.26152 0 .39.07188.29274.18147.5749.32601.83942.2727.55757.51188 1.0664.70535 1.49144.38086.85617.585 1.40766.51493 1.44574z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m3.32259 4.185c.04265-.05027.22089.06856.50425.05637.17023-.01048.33705-.05232.49207-.1234.09475-.04162.18639-.08999.27422-.14473.08767-.05455.16761-.12065.23766-.19652.24239-.29049.364-.66295.33973-1.04051-.00975-.12051-.03484-.23928-.07465-.35343-.02743-.08836-.03809-.15235-.01371-.16454.02437-.01218.07921 0 .15234.07161.11052.10274.19152.23319.23461.37781.06054.21354.072.43801.03351.6566-.04331.27667-.16671.53459-.35496.74191-.09867.10747-.21387.1985-.34125.26965-.11202.0622-.22989.11323-.35191.15235-.21234.07339-.43982.09174-.66117.05332-.1515-.02712-.29151-.09872-.40219-.20567-.07008-.07008-.09445-.12492-.06855-.15082z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m4.604 6.28436c.03047-.00914.0716.05637.13864.15234.03548.05467.08035.10264.13253.14168.06723.04371.1441.07037.22395.0777.05049.00737.10135.01195.15234.01371.05353.00107.10705-.00249.15996-.01067.12363-.02073.24399-.05761.35801-.10968.26973-.11881.50848-.29813.69774-.52407.18908-.22808.32585-.49485.40066-.78152.06123-.2426.09295-.49171.09445-.74191 0-.42047-.15234-.67184-.09445-.7084.02285-.01523.09141.02437.1752.13406.11597.16041.19315.34554.22546.54082.04641.28689.0428.57965-.01066.86531-.06644.35874-.2238.69444-.45703.975-.23468.28133-.54026.49486-.88512.61852-.15255.05626-.31288.08863-.47531.09598-.077.00278-.15408-.00232-.23004-.01524-.06368-.0138-.1263-.03213-.18738-.05484-.12349-.03615-.23401-.10701-.3184-.20414-.05878-.07254-.09904-.15829-.11731-.24985-.02742-.13254-.01066-.20718.01676-.2148z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m14.8962 8.86965c.8394-1.7809.3564-5.85914-2.2502-7.58672-.6194.71264-1.0159 1.59151-1.1402 2.5275s.029 1.88788.441 2.7375",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m11.9471 6.54651c-.0289.01371-.1264-.10816-.2575-.35953-.178-.36602-.3017-.75607-.3671-1.15781-.1063-.61415-.0898-1.24329.0487-1.85098.1786-.77188.5449-1.48774 1.0664-2.08406v-.00762c.0445-.05081.1065-.08307.1736-.090408.0672-.007334.1346.010798.189.050798l.2956.21937c.1024.07061.1991.14905.2894.23461.1902.16824.367.3511.5287.54692.0807.09902.1675.19347.2391.29707l.2103.30469c.0335.05179.07.10207.102.15234l.0884.16148.1691.32602c.099.21633.195.43113.2773.64441l.1081.32145c.0376.10373.0691.20953.0945.31687.2039.74383.2933 1.5144.2651 2.28516-.0097.52011-.106 1.03497-.2849 1.52344-.0465.13373-.1094.26116-.1874.37933-.0518.08227-.0884.11883-.1066.11121-.0183-.00761-.0183-.06246 0-.15234.0182-.08988.0563-.2209.0777-.39609.0863-.48239.117-.97311.0914-1.4625-.0309-.72382-.1548-1.44065-.3687-2.13282-.0269-.09929-.0594-.19695-.0975-.2925l-.1097-.29554c-.0807-.19653-.1737-.39153-.2681-.58957l-.163-.28946-.0823-.15234c-.0289-.04723-.0625-.09293-.0945-.14016l-.1843-.28031c-.0655-.09293-.1523-.17672-.2163-.2666-.1443-.1766-.3017-.34211-.4708-.49512-.0811-.07598-.1682-.14527-.2605-.20718l-.2589-.19957.3762-.05028c-.4697.52458-.8126 1.15003-1.0024 1.82813-.1534.54814-.2101 1.11883-.1676 1.68644.0747.97196.3382 1.52953.2575 1.56305z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m12.4756 10.9713c.6932-.9314.556-2.20692-.3066-2.84893-.8626-.642-2.1238-.40739-2.81708.52403-.69325.93142-.55598 2.2069.30659 2.8489.86259.6421 2.12379.4074 2.81709-.524z",
						fill: "#b8e7ff"
					}), r.a.createElement("path", {
						d: "m12.6477 11.0997c-.3495.475-.8556.8112-1.429.9491-.2925.0698-.596.0806-.8927.032-.3037-.0513-.59239-.1689-.84553-.3443-.256-.1803-.47062-.4131-.62955-.6829s-.25852-.5704-.29213-.8817c-.0368-.31289-.01301-.62995.07008-.93385.16819-.60576.55597-1.12715 1.08773-1.4625.26428-.1668.558-.28159.8653-.33821.308-.05723.6247-.04811.9289.02676s.589.21377.8353.40742c.2408.1922.4364.43511.5728.71145.1316.27014.2083.56376.2254.86379.036.59244-.1401 1.17834-.4966 1.65294zm-.3458-.2575c.1408-.1938.2465-.4109.3123-.6413.0626-.22856.0807-.46699.0533-.70234-.0262-.22746-.1011-.4466-.2197-.64247-.1185-.19586-.278-.36385-.4674-.4925-.1832-.12067-.39-.20124-.6066-.23642s-.4382-.02418-.6502.03228c-.4264.11149-.80187.3653-1.06425.71939s-.39591.7872-.37845 1.22756c.00711.2192.06045.4345.15654.6316.09609.1972.23275.3718.40104.5125.17772.143.38412.2461.60512.3023.2211.0562.4516.0643.6761.0237.2336-.0413.457-.1271.6581-.2529.2016-.1291.379-.2925.5241-.4829z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m11.734 10.3357c.3564-.72954.0761-1.59909-.6262-1.94222-.7023-.34314-1.56058-.02993-1.91701.69958-.35643.7295-.07606 1.59904.62623 1.94214.70228.3432 1.56058.03 1.91698-.6995z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m10.6281 9.66417c.0662-.43647-.2192-.84166-.63736-.90502-.41814-.06335-.81073.23912-.87686.67559s.21923.84166.63738.90506c.41814.0633.81074-.2392.87684-.67563z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m11.5831 11.1074c.3374 0 .6109-.2851.6109-.6368s-.2735-.6368-.6109-.6368-.6109.2851-.6109.6368.2735.6368.6109.6368z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m12.8948 6.65901c-.0594-.02894.0366-.31687.1158-.78304l.0305-.18282.0228-.20109c.0214-.13711.0244-.28793.0366-.44332.0143-.33972.0097-.67997-.0137-1.01918-.0458-.61737-.1478-1.22927-.3047-1.82812-.1204-.45704-.2224-.74801-.1661-.78.0564-.032.2529.2148.4571.67793.2577.60474.4122 1.24843.457 1.90429.0235.35959.0148.72055-.0259 1.0786-.0259.16605-.0427.32449-.0807.46922l-.0503.21023-.061.19043c-.1706.48293-.3732.73277-.4174.70687z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m1.41844 16.2901c.07617-.0472.30469.2834.83789.5652.30658.1598.63944.263.98262.3047.42089.046.8467.0098 1.25379-.1066.88359-.2438 1.57828-.7617 2.06425-1.1639.48598-.4022.7861-.6734.85008-.6201.06399.0534-.12797.4129-.56519.9141-.26033.2951-.55316.5598-.87293.7891-.40061.2889-.84865.5054-1.32387.6399-.48542.1386-.99614.1641-1.49297.0746-.40609-.0764-.78949-.2442-1.12125-.4905-.222-.1628-.40729-.3704-.54387-.6094-.08836-.1676-.10054-.2773-.06855-.2971z",
						fill: "#000"
					}), r.a.createElement("path", {
						d: "m1.2085 15.8394c.70843.486 1.55388.7323 2.4125.703s1.68528-.3328 2.3589-.8661c.23004-.2064.4744-.3963.73125-.5682.12943-.0849.27578-.1405.42889-.1632.15311-.0226.30931-.0116.45775.0322.15254.0661.2835.1737.37801.3105s.14881.2973.15672.4634c.00895.3331-.1037.658-.31688.9141-.21295.2544-.46491.4734-.74648.6489-.83941.5637-1.8525.9933-2.84426.7998-.54082-.1051-1.02984-.3884-1.50515-.6657-.21368-.1179-.41747-.2529-.60938-.4037-.3144-.2606-.5528-.6011-.69012-.9857",
						fill: "#ff85c6"
					}), r.a.createElement("path", {
						d: "m13.3224 5.51322c-.0032.29968-.0637.59597-.1782.87293-.0542.13337-.1411.25098-.2526.34202-.1116.09103-.2442.15259-.3857.179-.3321.03351-.6445-.22242-.7983-.54082-.134-.3332-.1968-.69074-.1844-1.04965-.0259-.98719.061-2.0216.4571-2.92348.1523-.35496.457-1.05422.7845-.45703.2514.45703.3596 1.10754.4479 1.62856.1099.64328.1467 1.29692.1097 1.94847z",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m2.43311 1.8313c.4357-.66727 5.62605 6.34054 5.62605 6.34054l-.4677.41742-1.76566-.26507z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m15.2968 5.96724c1.0832.9293 1.5783 2.68734 1.1944 4.06296 1.4335-1.13034 1.0999 1.88 0 2.9631.2803-.1081.844.2057 1.0222.4479.163.2547.2526.5493.259.8516.0566.6477-.0536 1.2991-.3199 1.8921-.6414 1.4062-2.9829 1.4808-3.6776.972-.1356.5332-.5698.9658-1.3071 1.106.9262.5225 1.7184.4951 2.4253-.3047.8805.2544 2.3628 0 3.1337-.4875s1.2584-1.4579 1.0664-2.3522c-.1341-.6093-.55-1.1197-.7389-1.7154-.227-.7145-.1112-1.4899.0336-2.2257.1447-.7358.3168-1.4884.195-2.22879-.1219-.74039-.6201-1.47622-1.3559-1.62094.0186-.79515-.2157-1.57567-.6691-2.22917-.4533-.6535-1.1024-1.14624-1.8537-1.40728l.5515 2.145",
						fill: "#7e53c1",
						opacity: ".67"
					}), r.a.createElement("path", {
						d: "m14.8307 4.86442c.113 1.0501.0543 2.11159-.1737 3.14285-.2483 1.02375-.7724 1.69559-1.5889 2.96003-1.3666 2.1145-4.16206 4.2123-4.16206 4.2123l-.21024 1.106s3.0012-.914 3.9229-1.5539c.1995-.361.2909-1.2187.3382-1.6316.0895-.7608.3635-1.4883.7982-2.1191.3443-.4997.7298-.8927 1.0375-1.41678.4246-.75116.6314-1.60579.5972-2.46797-.0544-.8398-.2078-1.67024-.457-2.47406",
						fill: "#ffc2dd"
					}), r.a.createElement("path", {
						d: "m13.8086 14.0707c-.0274 0-.0761-.0807-.1173-.2514-.0508-.2446-.058-.4963-.0213-.7434.0512-.3631.1538-.717.3047-1.0512.1823-.399.3931-.7844.6307-1.1532.2422-.387.4677-.7511.6444-1.09233.1603-.2979.29-.61131.387-.93539.1523-.55148.1173-.9232.1858-.93387.0274 0 .0731.08227.1097.25442.0428.24545.0428.49646 0 .74191-.0594.36166-.1686.71336-.3245 1.04508-.1865.39658-.3992.78038-.6368 1.14868-.2422.3854-.457.751-.6368 1.0938-.156.299-.2801.6135-.3702.9385-.1417.5545-.0883.9262-.1554.9384z",
						fill: "#c676ff"
					}), r.a.createElement("path", {
						d: "m14.9072 14.0231c-.0564 0-.1326-.1752-.1524-.4829-.0454-.8133.2322-1.6116.7724-2.2212.2102-.2255.3824-.3199.4235-.2803.0914.0868-.3458.652-.6185 1.4579s-.3047 1.5143-.425 1.5265z",
						fill: "#c676ff"
					}), r.a.createElement("path", {
						d: "m6.19165 7.1707c-.01219-.06246.12949-.13559.32297-.2666.24618-.1607.45882-.36765.62613-.60938.15866-.24732.26783-.52308.32144-.81199.04723-.22852.05942-.38848.12036-.40067.06093-.01218.15234.13407.18738.41133.03174.3671-.06183.73413-.26546 1.04123-.20362.30709-.50528.53614-.85579.64979-.27117.07312-.44637.04266-.45703-.01371z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m4.43023 4.76671c0-.12035.43114-.18434.76172-.50273.33059-.3184.43571-.72821.55758-.72668.05789 0 .11731.1234.10207.33058-.03163.27398-.1599.52771-.36178.71562-.20187.18791-.46413.2977-.73966.30966-.20567 0-.32297-.07313-.31993-.12645z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m3.40812 2.70883c.30037 0 .54387-.2435.54387-.54387s-.2435-.54387-.54387-.54387c-.30036 0-.54386.2435-.54386.54387s.2435.54387.54386.54387z",
						fill: "#fff"
					}), r.a.createElement("path", {
						d: "m16.4716 14.2914c.0168-.0213.0915-.0076.192.0808.1373.1344.2244.3119.2468.5027.0418.2872-.0268.5795-.192.8181-.202.2785-.4875.4856-.815.5911-.5639.1875-1.1772.1593-1.7215-.0792-.4067-.1844-.585-.4037-.5515-.4464.0336-.0427.2682.0625.6521.1523.2215.0538.4484.082.6764.0838.2721.0041.543-.0376.8013-.1234.2476-.0783.4686-.2238.6383-.4204.1276-.1591.2003-.3553.2072-.5591.0152-.3641-.1782-.5515-.1341-.6003z",
						fill: "#c676ff"
					}), r.a.createElement("path", {
						d: "m12.6798 17.3567c-.0442.0365-.1813-.0305-.3199-.2255-.1735-.264-.2528-.5787-.2251-.8933.0276-.3146.1606-.6107.3774-.8404.1691-.1691.3169-.2117.3535-.1691.0365.0427-.0229.1676-.1021.3458-.2153.4435-.2582.9512-.1204 1.4245.0412.1904.0854.3138.0366.358z",
						fill: "#c676ff"
					}), r.a.createElement("path", {
						d: "m12.6432.993331c.0549.001261.1081.019339.1524.051799l.2955.21937c.1024.0706.1992.14904.2895.23461.1902.16823.3669.3511.5286.54692.0807.09902.1676.19347.2392.29707l.2102.30468c.0335.0518.0701.10207.1021.15235l.0883.16148.1311.24223c.1523.0716.3123.15234.457.23613.4808.277.916.62641 1.2903 1.03594.3946.42526.6993.9258.8958 1.47164.1365.37028.2007.76334.1889 1.15781.2065.0822.3969.20031.5622.34887.2183.19639.3963.43337.524.69773.2368.4925.3602 1.03182.3611 1.57829.0037.26323-.0198.52615-.0701.78455-.0515.2498-.1264.4941-.2239.7297-.1752.4479-.3459.8471-.3352 1.231.0236.4022.1338.7945.323 1.1502.1737.3763.3763.748.5149 1.1486.0732.1995.1243.4064.1523.617.0251.2055.0251.4131 0 .6186-.049.3813-.1782.7478-.3793 1.0755-.1265.2034-.2802.3884-.457.55-.032.032-.0625.0655-.096.0959-.2813.2401-.6047.4261-.9537.5485-.3748.1369-.7662.223-1.1639.2559-.096 0-.1935.0107-.2925.0107-.3527.0071-.703-.0598-1.0283-.1965-.2835.2425-.6235.4096-.9887.4859-.1309.0263-.2641.0396-.3976.0396-.1308 0-.2613-.0118-.39-.035-.0691-.0034-.1379-.0121-.2057-.0259-.4243-.0768-.81-.2954-1.0938-.62-.3157-.3695-.5211-.8204-.5926-1.3011-.0692-.4618-.0031-.9338.1904-1.3589-.1661.0625-.3413.1219-.5256.1737-.2925.0838-.5957.1615-.8942.2712-.15177.0544-.29985.1185-.44337.1919-.15013.0784-.29561.1654-.4357.2605-.30469.1966-.60938.4114-.9293.6323-.60606.446-1.26645.8131-1.96523 1.0923-.31459.118-.6402.2042-.97196.2574-.1751.0251-.35174.0378-.52863.0381-.11856.0001-.23704-.006-.35496-.0183-.42771-.0359-.8395-.1789-1.19742-.4159-.24527-.1736-.3382-.3168-.31535-.3427.0035-.0009.00716-.0009.01066 0-.26616-.056-.52276-.1504-.76172-.2803-.59015-.3284-1.05149-.8472-1.308629-1.4717-.285418-.6678-.341666-1.4113-.159961-2.1145.089401-.3499.231157-.6843.42047-.9918.18512-.296.41306-.5629.6764-.7922.24386-.2077.49809-.403.76172-.585.24528-.1767.47684-.3473.68707-.5286.39554-.3476.742-.7473 1.02985-1.18827.25631-.38968.48-.79987.66879-1.22637.09293-.21023.17672-.41133.25593-.60937-.11902-.16844-.22936-.34285-.33058-.52254l-.45703-.81047c-.5911-1.05574-1.11668-2.01094-1.55086-2.81684-.12458-.21556-.23059-.44134-.31688-.67488-.08052-.16829-.14184-.3451-.18281-.52711-.04675-.20918-.04675-.4261 0-.63527.05176-.237.17898-.45082.36258-.60938.19129-.15206.429-.2338.67336-.23156h.00914c.2118.00575.41978.05775.60937.15234.16882.07706.32914.17152.47836.28184.13711.10359.25746.20262.38086.30469.4875.38847.91406.74496 1.27969 1.05117.40066.34125.7084.62004.89273.81047l.41743.30773.04418.03352c.02807-.2051.06723-.40852.1173-.60938.12074-.49951.29704-.98394.52559-1.44422.04547-.10165.09632-.20082.15234-.29707l.16453-.28793c.0182-.03202.04252-.06014.07159-.08275.02907-.02262.06231-.03928.09782-.04904s.0726-.01243.10914-.00785c.03654.00457.07183.01631.10383.03453l.02743.01828c.38016.28079.7368.59209 1.0664.93082.21773.22749.42123.46813.60933.72058.3091-.0716.6226-.12249.9385-.15234.2026-.61813.5268-1.18947.9537-1.68035v-.00762c.0251-.02912.0562-.05248.0911-.06852.035-.01603.073-.024358.1115-.024409zm-7.59736 2.437499c.06405-.15644.10312-.32197.11578-.49055-.02525.16638-.06397.33044-.11578.49055zm-.73125 7.08097.03351-.0076c.02133-.0397.04114-.0808.06094-.1204l-.09293.128zm-.28793.3565c.04937-.0282.10023-.0536.15234-.0762l.02285-.0351c-.03808.0092-.07312.0183-.10664.029l-.07008.0807zm-1.00395 6.8143h-.00761zm9.62049-16.910168c-.0696-.000201-.1385.014672-.2019.043598s-.1197.07122-.1652.123981v.007617c-.4115.478212-.7312 1.028242-.943 1.622462-.2316.02742-.4571.06551-.6902.11426-.1682-.21931-.3483-.42934-.5392-.62918-.33831-.34598-.70412-.6639-1.09388-.95063l-.05027-.03199c-.05671-.03237-.11923-.05323-.18401-.06141-.06478-.00817-.13053-.00349-.1935.01377-.06296.01726-.12191.04677-.17346.08684-.05155.04006-.09469.0899-.12696.14666l-.1691.28336c-.06001.09869-.11492.20038-.16453.30469-.2348.4748-.4152.97461-.53778 1.48992-.02285.08988-.04418.18129-.06246.27726l-.16301-.12187c-.19195-.195-.49359-.4677-.8973-.80438-.36715-.30468-.79981-.66726-1.28578-1.05574l-.09598-.07617c-.08531-.08684-.18586-.15539-.28945-.23918-.15921-.11881-.33023-.22091-.51035-.30469-.22066-.10615-.46202-.162328-.70688-.164529l-.00914.216329v-.223946c-.29523-.003494-.58241.096186-.81199.281836-.21874.18764-.37103.44092-.43418.72211-.0536.24029-.0536.48944 0 .72973.04217.19688.10603.38848.19043.57128.08802.24388.19657.47984.32449.70536.44027.81808.96281 1.76414 1.55238 2.81683l.45704.81199c.0716.12493.16453.28184.27421.44333-.07464.18281-.14168.33972-.20871.48902-.18354.41537-.40112.81486-.65051 1.19437-.2769.42478-.61058.80968-.99175 1.14408-.21328.1844-.44942.358-.67184.518l-.0716.0518c-.24432.1701-.47974.3527-.70535.5469-.27965.2431-.52148.5265-.717541.8409-.201003.3259-.351499.6803-.446367 1.0512-.191573.7431-.132671 1.5287.167578 2.2349.277385.6687.77228 1.2242 1.40461 1.5768.21839.1184.45074.2089.69164.2696.09693.1355.21773.2521.35648.3443.38841.2581.83506.4151 1.2995.457.1255.0132.25161.0198.37781.0198.18655-.0002.37287-.0134.55758-.0396.34488-.0565.68324-.1473 1.01004-.2711.7161-.2867 1.39326-.6624 2.0155-1.1182l.18586-.128c.25594-.1767.49817-.3443.73887-.5012.13372-.0908.27259-.1737.4159-.2483.1356-.0694.27554-.13.41896-.1813.227-.0823.457-.1524.6871-.2118l.1934-.0548.1173-.0351c-.0901.3419-.1088.6987-.0548 1.0481.0765.5219.3 1.0113.6444 1.4107.3166.3609.7463.6037 1.2188.6886.0723.015.1456.0246.2193.029.1379.0242.2775.0364.4175.0366.1478.0002.2952-.0141.4402-.0427.3588-.0709.6965-.2231.9872-.4448.3197.1159.6578.1727.9979.1675.0959 0 .1965 0 .3047-.0106.4164-.0353.8263-.126 1.2187-.2697.375-.1317.7222-.3322 1.0238-.5911.0289-.0259.0533-.0518.0776-.0777l.0244-.0259c.1885-.174.3525-.3729.4875-.5911.2169-.3543.3565-.7504.4098-1.1623.0271-.2227.0271-.4477 0-.6704-.0266-.2257-.0777-.4479-.1523-.6627-.107-.2909-.2312-.5753-.3717-.8516-.0518-.1066-.1036-.2117-.1524-.3184-.176-.3298-.2798-.6933-.3047-1.0664-.0091-.3184.125-.6596.2819-1.0542l.0396-.099c.1028-.2484.1819-.506.2361-.7693.0531-.2709.0776-.54668.0731-.8227-.0008-.5803-.132-1.153-.3839-1.67578-.1406-.28852-.3356-.54716-.5743-.76172-.1482-.13199-.3144-.24227-.4936-.32753-.0056-.36454-.0704-.72574-.192-1.06946-.2059-.57305-.5256-1.09851-.9399-1.54476-.3892-.42647-.8419-.79028-1.3422-1.0786-.1249-.0716-.2589-.14168-.4159-.2148l-.0304-.05789-.0655-.12035-.0884-.16149c-.0228-.03808-.0472-.07465-.0716-.11121l-.0396-.06246-.2118-.31383c-.0548-.07922-.1127-.15234-.1706-.2148l-.0807-.09598c-.139-.17453-.2919-.33755-.4571-.4875l-.0807-.0777c-.0754-.07432-.1569-.14211-.2438-.20261l-.067-.05028-.2437-.176714-.0579-.042657c-.0834-.06156-.1843-.094675-.288-.094453z",
						fill: "#fff"
					}))
				},
				c = e => {
					let {
						className: t
					} = e;
					return Object(o.e)(i.k) ? r.a.createElement(d, {
						className: t
					}) : r.a.createElement(a, {
						className: t
					})
				},
				d = e => {
					let {
						className: t
					} = e;
					return r.a.createElement("svg", {
						className: t,
						fill: "#000",
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 40 40",
						height: "40",
						width: "40"
					}, r.a.createElement("path", {
						fill: "#ffdce2",
						d: "M11.76,15.15c.91-19.36,7.94-9.23,8-.71"
					}), r.a.createElement("path", {
						d: "M19.8,14.44a8.73,8.73,0,0,1-.45-2.07,14,14,0,0,0-.79-2.82,20,20,0,0,0-1.71-3.19,5.07,5.07,0,0,0-1.11-1.18,1.22,1.22,0,0,0-.47-.2c-.11,0-.17,0-.28.11a2.27,2.27,0,0,0-.65.88,8.65,8.65,0,0,0-.53,1.32c-.29.94-.53,1.91-.72,2.85-.4,1.87-.71,3.62-1.06,5a8.26,8.26,0,0,1-.83-4.73A30,30,0,0,1,13,5.56a6.5,6.5,0,0,1,.68-1c.13-.16.32-.3.47-.45a2.23,2.23,0,0,1,.62-.3A1.73,1.73,0,0,1,16,3.89a3.23,3.23,0,0,1,.95.69A10.88,10.88,0,0,1,19.1,8a13.48,13.48,0,0,1,.9,3.33A9.87,9.87,0,0,1,19.8,14.44Z"
					}), r.a.createElement("path", {
						fill: "#ffdce2",
						d: "M31.58,11.79c-3.31-3.6-8.69-4.11-13.65-2.9-5.63,1.4-7.87,6.7-10.6,10.93C5.6,21.92,3.57,23.67,2.11,26c-2.82,4.11.11,10.29,5.22,11.11,4.86.78,6.84-2.16,9.1-2.71,7.74-1.87,14.39-5.19,16-9.73C33.35,20.6,32.16,15.94,31.58,11.79Z"
					}), r.a.createElement("path", {
						d: "M31.59,11.78a19.39,19.39,0,0,1,.6,2.63A45.81,45.81,0,0,1,33,20a18.12,18.12,0,0,1,0,3.29,9.38,9.38,0,0,1-.31,1.67c-.11.26-.21.52-.32.77l-.41.72a14.17,14.17,0,0,1-3.83,3.82,29.56,29.56,0,0,1-6.61,3.36c-1.18.46-2.4.84-3.64,1.2a17.58,17.58,0,0,0-1.72.51,12.05,12.05,0,0,0-1.56.88,11.7,11.7,0,0,1-3.72,1.68,9.47,9.47,0,0,1-4.17,0A8.55,8.55,0,0,1,.63,32.57,8.24,8.24,0,0,1,.06,29a7,7,0,0,1,1.13-3.45,32.4,32.4,0,0,1,4.12-5c.35-.37.69-.75,1-1.12l.21-.25L6.7,19l.4-.64c.54-.86,1.07-1.73,1.6-2.58A22.63,22.63,0,0,1,12.5,11a11.46,11.46,0,0,1,5.28-2.83,20.36,20.36,0,0,1,5.45-.45,14.1,14.1,0,0,1,4.92,1.18,10.62,10.62,0,0,1,3.64,2.74,12.11,12.11,0,0,0-3.94-2.05,15,15,0,0,0-5-.52,22,22,0,0,0-4.59.76,12.15,12.15,0,0,0-3,1.28,12.59,12.59,0,0,0-3.54,3.18,44.59,44.59,0,0,0-2.77,4l-.66,1-.33.51L7.88,20s-.07.11-.12.17l-.11.12c-.54.61-1.1,1.2-1.65,1.76a34.28,34.28,0,0,0-3,3.43,8.73,8.73,0,0,0-.62.92,4.17,4.17,0,0,0-.48.94,5.91,5.91,0,0,0-.44,2,7.32,7.32,0,0,0,4,6.63,7.71,7.71,0,0,0,3.78.76,8.15,8.15,0,0,0,3.59-1,19.91,19.91,0,0,1,3.47-1.83,50.13,50.13,0,0,0,6.86-2.26,24.52,24.52,0,0,0,5.74-3.3A10.83,10.83,0,0,0,31,26.17a4.09,4.09,0,0,0,.4-.62,2.84,2.84,0,0,0,.33-.65l.15-.33a.34.34,0,0,0,0-.12l0-.18c0-.24.11-.48.14-.72C32.79,19.85,31.58,13.09,31.59,11.78Z"
					}), r.a.createElement("path", {
						fill: "#f9a",
						d: "M15,33.5c-.06-.16.39-.71,1.08-1.17a15.64,15.64,0,0,1,2-1c1.64-.84,3.65-1.16,5.09-1.87a12.34,12.34,0,0,0,3.33-2.36,7.84,7.84,0,0,0,2-2.77,2.59,2.59,0,0,1,.44,2,2.84,2.84,0,0,1-.7,1.6,16.44,16.44,0,0,1-6.26,3.36c-1.95.55-3.56,1-4.89,1.48-.31.13-.76.25-1.16.39S15.07,33.45,15,33.5Z"
					}), r.a.createElement("path", {
						fill: "#6a5cff",
						d: "M16.82,8.12c9.76-1.89,17.3,3.72,16.34,8,5,0,8.71,6.76,4.08,11.49,4.43,5.08,1.94,10.32-4.3,11.6-4.37.89-8.32-.76-9.83-4-1.71-3.65,1.08-7.29,5.78-7.42-5.56-5.2,3.42-8.34-.58-16.55"
					}), r.a.createElement("path", {
						d: "M28.32,11.28a2.88,2.88,0,0,1,.36.62,5.92,5.92,0,0,1,.57,1.41A8.27,8.27,0,0,1,29.32,18c-.43,1.8-1.46,3.56-1.82,5.3a4,4,0,0,0,.31,2.41c.09.17.21.33.31.5a5.45,5.45,0,0,0,.57.72l1.22,1.28c-.94.08-1.81.19-2.58.33a6.13,6.13,0,0,0-2.77,1.56,4,4,0,0,0-1.2,2.74,4.69,4.69,0,0,0,1,2.92,6.42,6.42,0,0,0,2.53,2,9.53,9.53,0,0,0,6.62.3c2.16-.61,4.1-2,4.68-3.84a5.58,5.58,0,0,0-1-4.93,9,9,0,0,0-.59-.77l-.47-.6-.23-.3c-.08-.05,0-.1.05-.15l.12-.14L37,26.28a3.29,3.29,0,0,0,.38-.54,5.5,5.5,0,0,0,.87-2.38A5.24,5.24,0,0,0,38,20.88a5.67,5.67,0,0,0-1.29-2.13,5.58,5.58,0,0,0-2-1.35A5.68,5.68,0,0,0,33,17.09L32.32,17l-.17,0a.92.92,0,0,1,0-.16l0-.34a12.4,12.4,0,0,0,.1-1.27,5.77,5.77,0,0,0-2.43-3.86,13.29,13.29,0,0,0-4.27-2.25,19.73,19.73,0,0,0-8.71-.71,16.24,16.24,0,0,1,9.39-.59,13.49,13.49,0,0,1,4.61,2,7.82,7.82,0,0,1,2.62,2.84l.28.58.2.64a5.36,5.36,0,0,1,.2,1.34s-.08.11,0,.11a2.28,2.28,0,0,0,.49.15,7.13,7.13,0,0,1,3.83,2.69,7.49,7.49,0,0,1,1.45,4.22,7.13,7.13,0,0,1-1.18,4.13l-.29.44a3.51,3.51,0,0,1-.3.36l-.19.21-.09.1s.05.07.07.11l.43.57.53.86a7.58,7.58,0,0,1,1,3.88,5.83,5.83,0,0,1-1.44,3.62,8.16,8.16,0,0,1-3,2.2,11.93,11.93,0,0,1-7,.82,8,8,0,0,1-5.53-3.76,5.77,5.77,0,0,1-.81-3.25,5.11,5.11,0,0,1,1.27-3,6.56,6.56,0,0,1,2.58-1.81,6.13,6.13,0,0,1,.72-.25L27,27.5l.15,0a3.27,3.27,0,0,1,.62-.07,4,4,0,0,1-.46-.55l-.18-.28a2.77,2.77,0,0,1-.22-.37l-.29-.82a5.64,5.64,0,0,1,.23-3.18c.64-1.87,2.06-4,2.21-6.23a8.74,8.74,0,0,0-.19-3C28.66,12.2,28.41,11.59,28.32,11.28Z"
					}), r.a.createElement("path", {
						d: "M21.44,26c4.39-2,1-8.4-3.18-5.83C15,22.4,17.62,27.75,21.44,26Z"
					}), r.a.createElement("path", {
						d: "M21.44,26a2.7,2.7,0,0,1-1.81.47A3.26,3.26,0,0,1,18.2,26a4.74,4.74,0,0,1-.94-.83,3.7,3.7,0,0,1-.74-3.43,3.84,3.84,0,0,1,2.65-2.54,3.49,3.49,0,0,1,3.12.51,4.05,4.05,0,0,1,1.58,2.53,3.41,3.41,0,0,1-.58,2.61,3.64,3.64,0,0,1-1.79,1.27,5.15,5.15,0,0,0,1.21-1.71,4.21,4.21,0,0,0,.23-1.55A3.07,3.07,0,0,0,22.4,21a2.89,2.89,0,0,0-1.53-1.1A3.08,3.08,0,0,0,17.68,21,3,3,0,0,0,17.22,24,3.49,3.49,0,0,0,19,25.89a3.7,3.7,0,0,0,1.39.27h.37L21,26.1Z"
					}), r.a.createElement("path", {
						fill: "#f9a",
						d: "M10.33,26.53c-2.77-.86-3.6-1.91-2.94-3.47C.11,25.47.07,33.88,7.18,36.34,13,38.34,17.35,28.69,10.33,26.53Z"
					}), r.a.createElement("path", {
						fill: "#f9a",
						d: "M10.33,26.52a6,6,0,0,1,1.09.35,7.15,7.15,0,0,1,.93.56,6.61,6.61,0,0,1,.93.91A4.92,4.92,0,0,1,14.13,31,7,7,0,0,1,14,32.23c-.11.37-.17.72-.28,1a6.35,6.35,0,0,1-1.83,2.6A4.9,4.9,0,0,1,8.76,37,5.92,5.92,0,0,1,7,36.75c-.51-.22-1-.39-1.54-.66a8.58,8.58,0,0,1-1.39-.92A7.55,7.55,0,0,1,2.94,34a6.86,6.86,0,0,1-1.51-3.62,6.46,6.46,0,0,1,.74-3.72A7.73,7.73,0,0,1,4.53,24a14.66,14.66,0,0,1,1.41-.82l1-.36.58-.22A1.88,1.88,0,0,1,8,22.47a8.28,8.28,0,0,0-.48,1.43,1.39,1.39,0,0,0,.07.59,2.1,2.1,0,0,0,.76.89,8.54,8.54,0,0,0,2,1A6.6,6.6,0,0,1,8,25.7a2.26,2.26,0,0,1-1-1.14,1.91,1.91,0,0,1-.11-.41c0-.11,0-.31,0-.28s0-.06,0-.07-.07.05-.07.06h0L6.41,24c-.34.18-.61.36-.83.46A6.81,6.81,0,0,0,2.8,27.22a5.82,5.82,0,0,0-.57,3.67A6,6,0,0,0,3.86,34a7.78,7.78,0,0,0,2.82,1.87,4.54,4.54,0,0,0,5.47-1.18,5.69,5.69,0,0,0,1.3-2.36,6.17,6.17,0,0,0,.22-1.26,4.91,4.91,0,0,0-.14-1.22,4.13,4.13,0,0,0-1.43-2.31l-.54-.42a3.12,3.12,0,0,0-.53-.29Z"
					}), r.a.createElement("path", {
						d: "M33,34.05c-.07-.07,0-.48.1-.95a3.82,3.82,0,0,0-.05-1.3,4.28,4.28,0,0,0-1.77-2.53,5.16,5.16,0,0,0-2.41-.83,8.67,8.67,0,0,0-2.22.13,2.56,2.56,0,0,1,2-1.06,6.24,6.24,0,0,1,3.93,2,4.58,4.58,0,0,1,.9,1.6,4.07,4.07,0,0,1,.11,1.61A3.53,3.53,0,0,1,33,34.05Z"
					}), r.a.createElement("path", {
						d: "M11.6,31.34a1.52,1.52,0,0,1-.23,1.17,3.33,3.33,0,0,1-.61.73c-.24.18-.45.38-.61.48a7.05,7.05,0,0,1-4.23,1,6.93,6.93,0,0,1-3.47-1.08A4.36,4.36,0,0,1,.63,31.32c.42.19.81.51,1.24.7s.77.38.9.56A5.23,5.23,0,0,0,5,33.78a6.76,6.76,0,0,0,2.3.15,5.93,5.93,0,0,0,3.37-1.35,4.62,4.62,0,0,0,.61-.63C11.43,31.69,11.55,31.43,11.6,31.34Z"
					}), r.a.createElement("path", {
						fill: "#ffdce2",
						d: "M19.92,15.9c.32-15.81,8.82-12.13,9.16-.18"
					}), r.a.createElement("path", {
						d: "M29.07,15.72a6.88,6.88,0,0,1-.46-2.09,13.82,13.82,0,0,0-.76-2.86,14.36,14.36,0,0,0-1.77-3.13c-.71-.94-1.71-1.52-2.28-1.24a3.32,3.32,0,0,0-1.53,1.77,15,15,0,0,0-.95,2.71c-.49,1.85-.78,3.61-1.1,5a7.42,7.42,0,0,1-.89-4.82,16,16,0,0,1,2.33-4.8A3.25,3.25,0,0,1,23.87,5a3.11,3.11,0,0,1,2.25.82,8.85,8.85,0,0,1,2.32,3.38,12.2,12.2,0,0,1,.87,3.39A11.14,11.14,0,0,1,29.07,15.72Z"
					}), r.a.createElement("path", {
						d: "M6.75,30.09a1,1,0,1,0,.06-2C5.64,28.27,5.51,30,6.75,30.09Z"
					}), r.a.createElement("path", {
						d: "M6.75,30.1A.74.74,0,0,1,6.19,30a1,1,0,0,1-.41-.73,1.19,1.19,0,0,1,.36-1,1.24,1.24,0,0,1,1.12-.3,1.08,1.08,0,0,1,.75.67,1.32,1.32,0,0,1,0,.94,1,1,0,0,1-.58.6,1.06,1.06,0,0,1-.68,0,1.6,1.6,0,0,0,.57-.28,1.6,1.6,0,0,0,.28-.36.93.93,0,0,0,0-1.08.85.85,0,0,0-1-.19,1,1,0,0,0-.45,1.45C6.23,29.91,6.65,30.08,6.75,30.1Z"
					}), r.a.createElement("path", {
						d: "M2.09,28.69c1.06-.05,1.47-2.36.39-2C1.59,27.11,1.2,28.85,2.09,28.69Z"
					}), r.a.createElement("path", {
						d: "M2.09,28.69a.32.32,0,0,1-.16,0,.37.37,0,0,1-.3-.17,1.1,1.1,0,0,1-.06-.7A1.82,1.82,0,0,1,1.94,27a1,1,0,0,1,.85-.44.47.47,0,0,1,.37.29.88.88,0,0,1,.08.41,1.92,1.92,0,0,1-.19.73,1.13,1.13,0,0,1-1,.72A1.46,1.46,0,0,0,2.78,28,1.34,1.34,0,0,0,3,27c-.08-.38-.54-.28-.74-.08a1.73,1.73,0,0,0-.62,1.4.37.37,0,0,0,.16.31A.45.45,0,0,0,2.09,28.69Z"
					}), r.a.createElement("circle", {
						fill: "#19f2c8",
						cx: "20.51",
						cy: "23.28",
						r: "2.04"
					}), r.a.createElement("path", {
						fill: "#19f2c8",
						d: "M22.55,23.28a2.72,2.72,0,0,0-.35-1A1.89,1.89,0,0,0,21,21.4a2,2,0,0,0-1.74.49,1.87,1.87,0,0,0-.56,1.69,1.91,1.91,0,0,0,2.25,1.51,2,2,0,0,0,1.56-1.81,1.81,1.81,0,0,1-.23,1.29,1.84,1.84,0,0,1-.94.78,2.22,2.22,0,0,1-2.5-.78,2.14,2.14,0,0,1,1.49-3.43,2.1,2.1,0,0,1,1.7.61,2,2,0,0,1,.47.85A2.09,2.09,0,0,1,22.55,23.28Z"
					}), r.a.createElement("circle", {
						fill: "#fff",
						cx: "18.9",
						cy: "21.87",
						r: "1.31"
					}), r.a.createElement("path", {
						fill: "#fff",
						d: "M20.21,21.87a2.75,2.75,0,0,0-.25-.65,1.17,1.17,0,0,0-.77-.52,1.22,1.22,0,0,0-1.06.32,1.15,1.15,0,0,0-.34,1,1.18,1.18,0,0,0,1.37.92,1.28,1.28,0,0,0,1-1.11,1.05,1.05,0,0,1-.08.87,1.21,1.21,0,0,1-.62.54,1.52,1.52,0,0,1-1.66-.55,1.44,1.44,0,0,1-.13-1.5,1.42,1.42,0,0,1,1.11-.77,1.34,1.34,0,0,1,1.12.41,1.26,1.26,0,0,1,.3.56A1.41,1.41,0,0,1,20.21,21.87Z"
					}), r.a.createElement("path", {
						fill: "#f9a",
						d: "M26,16.18c-1.46,1-4.82.41-5.26-1.56s.44-6.22,1.55-6.74C23.78,7.2,27.18,15.35,26,16.18Z"
					}), r.a.createElement("path", {
						d: "M26,16.17a1.08,1.08,0,0,0,.13-.59A5.5,5.5,0,0,0,26,14.27a13.67,13.67,0,0,0-1-2.63,14.42,14.42,0,0,0-1.87-3,1.41,1.41,0,0,0-.54-.41s0,0-.08,0-.14.14-.21.23a5.79,5.79,0,0,0-.64,1.52A13.35,13.35,0,0,0,21.16,13a6.94,6.94,0,0,0,.05,1.38,1.75,1.75,0,0,0,.51,1,3.86,3.86,0,0,0,2.16.95A3.71,3.71,0,0,0,26,16.06a3,3,0,0,1-2.21.92,3.5,3.5,0,0,1-2.17-.56,3.09,3.09,0,0,1-.94-1.09A3.12,3.12,0,0,1,20.37,14a11.14,11.14,0,0,1,.19-2.35,13.82,13.82,0,0,1,.53-2.13,6.53,6.53,0,0,1,.41-1,2.11,2.11,0,0,1,.72-.84.75.75,0,0,1,.64,0,1.88,1.88,0,0,1,.45.31,4.87,4.87,0,0,1,.65.73,12.72,12.72,0,0,1,.94,1.54,15.23,15.23,0,0,1,1.21,3,6.67,6.67,0,0,1,.26,1.7,2.64,2.64,0,0,1-.08.78A.63.63,0,0,1,26,16.17Z"
					}), r.a.createElement("path", {
						fill: "#94b3ff",
						d: "M33.47,23.09a.89.89,0,0,1-.11-.3l-.06-.26,0-.14,0-.08-.07.05a6.76,6.76,0,0,0-.63.52,6.62,6.62,0,0,0-.72.77l-.13.16-.13-.17a1.25,1.25,0,0,1-.19-1.07l.08-.32,0-.17s0-.18-.06-.16l-.23.15-.26.2a6.3,6.3,0,0,0-.83.72,2.56,2.56,0,0,0-.58.83c-.1.3-.08.46.11.63L29,25a2.77,2.77,0,0,1-.61-2.35,12.57,12.57,0,0,1,1.14-3,14,14,0,0,0,1-2.64,5.72,5.72,0,0,0,0-2.47c-.1-.38-.24-.73-.36-1.08l-.51-.93a8.88,8.88,0,0,1,.82.76,5.83,5.83,0,0,1,.68,1.14,4.33,4.33,0,0,1,.31,1.24,2.53,2.53,0,0,1,0,.94A17.5,17.5,0,0,1,29.71,21,7.05,7.05,0,0,0,29,22.94a2.13,2.13,0,0,0,.48,1.69l-.27.27a1.13,1.13,0,0,1-.35-.66,1.21,1.21,0,0,1,.12-.71,3.69,3.69,0,0,1,.75-1,7.86,7.86,0,0,1,.91-.75,5.41,5.41,0,0,1,.64-.38c.24-.13.45-.21.7-.32.07,0,0,.25.06.34a2.16,2.16,0,0,1,0,.36,4.34,4.34,0,0,1-.2.79.94.94,0,0,0,0,.83h-.39l.17-.19a6.25,6.25,0,0,1,1.49-1.12l.21-.11c0-.05,0,.05,0,.08v.12l0,.43Z"
					}), r.a.createElement("path", {
						fill: "#94b3ff",
						d: "M27.44,35.4a1.55,1.55,0,0,1-.47-.64,3,3,0,0,1-.23-.68,2.52,2.52,0,0,1-.06-.52l0-.25s0-.11,0-.08l-.1.1a1.38,1.38,0,0,0-.26.39,1.3,1.3,0,0,0-.12.4,2.49,2.49,0,0,0-.08.72,2.42,2.42,0,0,0,.44,1.36l-.56.55a3.74,3.74,0,0,1-1.55-2.34,4.67,4.67,0,0,1,2.14-4.55,4,4,0,0,1,4-.37c-.28,0-.59,0-.9.05a4.93,4.93,0,0,0-.94.21,8.29,8.29,0,0,0-1.35.61,4.13,4.13,0,0,0-2.34,3,3,3,0,0,0,1.28,2.95l-.28.28a3,3,0,0,1-.36-2.69,2.88,2.88,0,0,1,.88-1.29l.26-.22.14-.11c.05,0,.1-.08.08,0s0,.13.14.13h.05a3.9,3.9,0,0,0-.16,2.21A3.41,3.41,0,0,0,27.44,35.4Z"
					}), r.a.createElement("path", {
						fill: "#493ac1",
						d: "M28.06,37.14a11.11,11.11,0,0,0,1.27.18,10.21,10.21,0,0,0,1.84-.17,11.56,11.56,0,0,0,2.17-.61,6.25,6.25,0,0,0,1.79-1.22,4.49,4.49,0,0,0,1.16-3,5.57,5.57,0,0,0-.53-2.88,2.17,2.17,0,0,1,1.47,1,2.51,2.51,0,0,1,.52,1.45,7.52,7.52,0,0,1-1,3.29,4.4,4.4,0,0,1-1.05,1.13,9.61,9.61,0,0,1-1.16.8,6.9,6.9,0,0,1-2.43.81A11.52,11.52,0,0,1,29.9,38a3,3,0,0,1-1.16-.31A1.74,1.74,0,0,1,28.06,37.14Z"
					}), r.a.createElement("path", {
						fill: "#493ac1",
						d: "M33.09,26.76c0-.13.41-.15.79-.21a2,2,0,0,0,1-.34,3.49,3.49,0,0,0,.44-.41c.12-.13.21-.31.34-.48a3.58,3.58,0,0,0,.46-1.1,8.75,8.75,0,0,0-.18-3.77c.82,0,1.72.82,1.68,1.24a8.14,8.14,0,0,1-.88,3.8,3.82,3.82,0,0,1-1.05,1.24,2.52,2.52,0,0,1-1.37.44A2.49,2.49,0,0,1,33.09,26.76Z"
					}), r.a.createElement("path", {
						fill: "#fff8b8",
						d: "M2.29.57C0,2,5.89,16.92,8,19.08c2.8,1.55,7.52-.47,7.38-3.83S3.9-2.36,2.29.57Z"
					}), r.a.createElement("path", {
						d: "M2.27.56A.46.46,0,0,1,2.33.4.49.49,0,0,1,2.56.15a1.27,1.27,0,0,1,1.07,0A8.53,8.53,0,0,1,6.2,1.76a48.61,48.61,0,0,1,4.41,4.49,35.05,35.05,0,0,1,4.79,6.5,7.42,7.42,0,0,1,.83,2.15,4.29,4.29,0,0,1-.42,2.51,6,6,0,0,1-3.61,2.86,6.27,6.27,0,0,1-4,0L7.73,20a1.74,1.74,0,0,1-.35-.19l-.27-.3a8.55,8.55,0,0,1-.57-.79c-.33-.51-.6-1-.87-1.53a47.33,47.33,0,0,1-2.5-6A40,40,0,0,1,1.63,5.49a16.66,16.66,0,0,1-.3-2.67,5.66,5.66,0,0,1,.1-1.3A1.65,1.65,0,0,1,2.14.32a1.41,1.41,0,0,0-.31,1.21,6.29,6.29,0,0,0,.26,1.23c.24.84.56,1.72.89,2.57C3.63,7,4.29,8.6,4.52,9.47a46.46,46.46,0,0,0,1.64,5c.31.79.65,1.57,1,2.31.18.37.37.72.57,1.07.1.16.2.34.31.49s.11.16.17.22.06.1.11.13c2.53,1.36,6.38-.38,6.65-3V15.3a1.75,1.75,0,0,0-.07-.44,5.61,5.61,0,0,0-.34-.91,16.41,16.41,0,0,0-.95-1.75C13,11.08,12.2,10,11.46,9,10,7.06,8.48,5.29,7,3.69A32.32,32.32,0,0,0,4.48,1.12,4,4,0,0,0,3.13.3.77.77,0,0,0,2.27.56Z"
					}), r.a.createElement("path", {
						fill: "#ccffef",
						d: "M10.69,11.08a4.78,4.78,0,0,1-5,2.21c.85,2.93,2.21,5.84,3.6,6.41,2,.82,6.16-.77,6.05-4.37-.05-1.53-2.15-4.85-4-6.41a3.06,3.06,0,0,1-1.36,3"
					}), r.a.createElement("path", {
						d: "M10,11.89a4,4,0,0,0,.7-.78,3.28,3.28,0,0,0,.46-2.47c0-.16.22.08.38.21l.5.46c.37.36.54.56.77.82.43.49.79,1,1.06,1.31a13.15,13.15,0,0,1,1.36,2.22A5.79,5.79,0,0,1,15.66,15a3.73,3.73,0,0,1,0,.74,3.55,3.55,0,0,1-.08.73A4.5,4.5,0,0,1,14.15,19a5.93,5.93,0,0,1-2.51,1.3A4.13,4.13,0,0,1,8.71,20a5.88,5.88,0,0,1-1.77-2.14,15.31,15.31,0,0,1-1-2.29c-.14-.38-.26-.75-.37-1.12l-.23-.78-.26-.94c.27.06.53.13.8.17l.39.07a.58.58,0,0,0,.18,0h.1a3.55,3.55,0,0,0,.73,0,4.65,4.65,0,0,0,1.36-.39,5.37,5.37,0,0,0,2-1.6,4.48,4.48,0,0,1-2,2.32A4.31,4.31,0,0,1,7,13.86a2.56,2.56,0,0,1-.39,0H6.36s0,0,0,.08l.11.43c.08.28.16.56.25.83q.27.83.6,1.59a6.17,6.17,0,0,0,1.8,2.54,3.65,3.65,0,0,0,2.83.07,4.85,4.85,0,0,0,2.28-1.55,3.81,3.81,0,0,0,.81-2.38,5.26,5.26,0,0,0-.75-2.28,17.47,17.47,0,0,0-1.26-2c-.22-.3-.45-.6-.68-.88s-.23-.27-.35-.41l-.2-.23-.17-.17-.1-.11s0,0,0,.07a1.84,1.84,0,0,1-.14.64,2.93,2.93,0,0,1-.46.9A2.48,2.48,0,0,1,10,11.89Z"
					}), r.a.createElement("path", {
						fill: "#19f2c8",
						d: "M8.57,5.17c.14,2.42-2.75,3.95-4.8,3.76.61,1.47,1.56,6,3.36,5.89,2.38,0,5.54-1.7,5.25-4.6A17.52,17.52,0,0,0,8.44,5.46"
					}), r.a.createElement("path", {
						d: "M8.45,5.46A6.8,6.8,0,0,1,10.32,7,23.61,23.61,0,0,1,12.46,9.8c.06.1.27.33.23.56a3.26,3.26,0,0,1,0,.54,4,4,0,0,1-.2,1.08,4.35,4.35,0,0,1-1.29,1.84,6.37,6.37,0,0,1-4.11,1.54h.06a3,3,0,0,1-.53,0,3.14,3.14,0,0,1-.46-.18,3.81,3.81,0,0,1-1.27-1.48,11.83,11.83,0,0,1-.68-1.57c-.19-.52-.35-1-.51-1.54L3.5,9.77,3,8.37c.33,0,.68.05,1,0h.45c.18,0,.17,0,.27,0a4.7,4.7,0,0,0,.83-.17A4.79,4.79,0,0,0,7,7.54,3.1,3.1,0,0,0,8.41,5.18a2.4,2.4,0,0,1,.08,1.33A3.33,3.33,0,0,1,7.72,8,4.42,4.42,0,0,1,5.4,9.34c-.15,0-.29.05-.44.06H4.61L4.4,9.37s0,.05,0,.09a1.75,1.75,0,0,0,0,.25l.25.91a17.49,17.49,0,0,0,.54,1.73A6.71,6.71,0,0,0,6,13.84a1.42,1.42,0,0,0,1.12.76h0a5.26,5.26,0,0,0,4.57-2.48A3.1,3.1,0,0,0,12.05,11a2.72,2.72,0,0,0,0-.57c0-.1,0-.12,0-.17L11.9,10c-.4-.67-.83-1.29-1.25-1.87A27.49,27.49,0,0,0,8.45,5.46Z"
					}), r.a.createElement("path", {
						fill: "#fff",
						d: "M3.3,2.08A31.85,31.85,0,0,1,4.72,5.57c.7,1.64,1.36,3.56,2,5.26a47.44,47.44,0,0,0,3.47,7.56A5.89,5.89,0,0,1,7.76,15.9c-1-2.49-1.65-4.65-2.35-6.56s-1.28-3.56-1.69-5A19.92,19.92,0,0,1,3.3,2.08Z"
					}), r.a.createElement("path", {
						fill: "#6a5cff",
						d: "M20.72,8c-12.86-4.26-7.25,10.38.19,7.55-1.23-1.74-.58-5.59-.18-7.17"
					}), r.a.createElement("path", {
						d: "M20.74,8.4a16.52,16.52,0,0,1-.19,2.41,9.2,9.2,0,0,0,.22,3.3,2.47,2.47,0,0,0,.1.29l.06.14a1.76,1.76,0,0,0,.09.21,12.51,12.51,0,0,0,.67,1.1,10.52,10.52,0,0,1-1.3.49c-.11,0-.25.06-.37.09l-.27.06a4,4,0,0,1-.5.06,5.26,5.26,0,0,1-2.08-.2,7,7,0,0,1-3.39-2.27,6.31,6.31,0,0,1-1.55-3.87,3.51,3.51,0,0,1,.66-2.16,3.44,3.44,0,0,1,1.78-1.23,6.69,6.69,0,0,1,3.48,0,12.83,12.83,0,0,1,2.64,1c-.81.11-1.91.07-2.89.14s-1.81.15-2.21.2a2.36,2.36,0,0,0-1.61.62,2.2,2.2,0,0,0-.58,1.62A5.25,5.25,0,0,0,15,13.73a5.46,5.46,0,0,0,2.89,1.7,4.79,4.79,0,0,0,1.55.08,2.29,2.29,0,0,0,.36-.07l.21,0c.1-.06.28-.07.29-.15a2.12,2.12,0,0,1-.12-.2,1.34,1.34,0,0,1-.11-.31,5.39,5.39,0,0,1-.22-1,9.32,9.32,0,0,1,0-1.9A11.43,11.43,0,0,1,20.74,8.4Z"
					}), r.a.createElement("path", {
						fill: "#94b3ff",
						d: "M17.76,12.22c-.08,0-.17-.4-.36-.73,0-.05-.07,0,0-.08s0,.05,0,.07a2.47,2.47,0,0,0-.21.36l-.41.85-.08,0a1.77,1.77,0,0,1-.58-1,2.63,2.63,0,0,1,.05-1.39l.49.51a1.81,1.81,0,0,0-.41.23l0,0a.36.36,0,0,0-.11.1,1,1,0,0,0-.2.27,11.84,11.84,0,0,0-.49,1.4l-.18-.33-.08-.14h0L15,12.27,14.93,12a2.4,2.4,0,0,1-.29-1,1.92,1.92,0,0,1,.06-.62,1.81,1.81,0,0,1,.2-.54,2.45,2.45,0,0,1,.52-.62,3.09,3.09,0,0,1,2.39-.62c-.28.21-.67.4-1,.62s-.55.4-.69.48a1.51,1.51,0,0,0-.57.46c-.08.12-.1.13-.14.2a.77.77,0,0,0-.07.2,1,1,0,0,0,.05.5c0,.07,0,0,0,0l0-.09a1.18,1.18,0,0,1,.11-.19,1.11,1.11,0,0,1,.29-.28,2.53,2.53,0,0,1,.54-.28l.37-.14-.13.39a1.94,1.94,0,0,0-.06.86,1.13,1.13,0,0,0,.08.22.41.41,0,0,0,0,.09s0,0,.06-.07a1.67,1.67,0,0,1,.18-.28.46.46,0,0,1,.11-.12.56.56,0,0,1,.14-.1.32.32,0,0,1,.27,0c.24.21.19.35.23.49A3.65,3.65,0,0,1,17.76,12.22Z"
					}))
				}
		},
		"./src/reddit/components/Econ/Prediction/themes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/config.ts");
			const r = {
				theme_1: `url(${s.a.assetPath}/img/econ/predictions/theme1.png)`,
				theme_2: `url(${s.a.assetPath}/img/econ/predictions/theme2.png)`,
				theme_3: "linear-gradient(104.49deg, #279A63 7.96%, #B6C048 119.75%)",
				theme_4: "linear-gradient(91.64deg, #F5AC1F -10.49%, #FC7519 52.61%)",
				theme_5: `url(${s.a.assetPath}/img/econ/predictions/theme5.png)`,
				theme_6: `url(${s.a.assetPath}/img/econ/predictions/theme6.png)`,
				theme_7: `url(${s.a.assetPath}/img/econ/predictions/theme7.png)`,
				theme_8: `url(${s.a.assetPath}/img/econ/predictions/theme8.png)`
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/UserAvatar/index.m.less": function(e, t, n) {
			e.exports = {
				winnerName: "_2Ld4Maxq0H1scF8CFo0X_a",
				tokenIcon: "_2ng76MX6PYeQXt1a8h8KWo",
				score: "_3JbhxiJWu2gV6JaiTF3uzx",
				avatarContainer: "_2ZwRsHNdUj-VCX3kAEvfuS",
				avatar: "_3ggbcbNUTU_E7CWkdqRASP",
				first: "_3QliOnSLoIQ9q79lsUpz_Q",
				third: "O47yLdXtE3UNQd_PIoMnQ",
				defaultAvatar: "_1MFV0LOIC_eTR8_8Bzy8Er",
				userIcon: "_1jEJK9NfCJT83N0sSzBuB-",
				outerCircle: "_1_TAbf1ftJCbFWt5CPQadV",
				second: "_3uIgvw-EV7gl101AWKSB9L",
				innerCircle: "_2d8KPU9h9fKX2LVxDMGQLO",
				placeBadge: "_3NSoLwFOYouY-1sbz3qMSN"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/index.m.less": function(e, t, n) {
			e.exports = {
				themedWidget: "C0hcQnbAEO0BNApe5yXyY",
				header: "_2ZyHot0tKqfb7CrQCVaZvh",
				winnersContainer: "_3YQnPYKP83Dft0BU-PfJUr",
				user: "_3NUy5pbf5zjIjsWOjHC7Gp",
				first: "_1bnJ73CUCCMLubzxjltNXB",
				second: "_24-h3WwFZZMXYeizPwLvUl",
				seeAllButton: "_1l-LD2VzJO8IA6b1zQ3Kxk"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less": function(e, t, n) {
			e.exports = {
				predictionLeaderboardList: "WnsHpoM6ZTGbLzCSxG1ho",
				topPredictor: "iABJTvK6lrMc3PmeMk2bZ"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				a = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t,
					currentRank: n,
					tokenIcon: s,
					topPredictorsRank: a
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.predictionLeaderboardList, t)
				}, (null == a ? void 0 : a.length) ? a.map(e => {
					let {
						rank: t,
						redditor: o,
						redditorInfo: a,
						score: d
					} = e;
					var l;
					return o || a ? r.a.createElement("div", {
						key: `prediction-leaderboard-${a.id}`,
						className: c.a.topPredictor
					}, r.a.createElement(i.a, {
						isCurrentUser: (null === (l = null == n ? void 0 : n.redditor) || void 0 === l ? void 0 : l.name) === a.displayName,
						rank: t,
						redditor: o,
						redditorInfo: a,
						score: d,
						tokenIcon: s
					})) : null
				}) : d._("No top predictors", null, {
					hk: "1nIqZI"
				}))
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1_C9n5LWcnYHJ78_PhY6M_",
				header: "_29gj_JsULicXdU3UTZKiDI",
				subHeader: "_29O_p8gs7C07rkDh7fqksJ",
				closeButton: "_1Q_qQCWWqlqHQzCU0P83E_",
				listContainer: "_1MiUX_7AddF3lpCZ3nYtMe",
				currentRank: "_39H3viVq70CUv4_7JdBLsx",
				spacer: "_37V-Um9VhBWlh1fA0PP6hv"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/contexts/PageLayer/index.tsx"),
				c = n("./src/reddit/controls/Button/index.tsx"),
				d = n("./src/reddit/icons/fonts/index.tsx"),
				l = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				u = n("./src/reddit/hooks/usePageLayer.ts"),
				m = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				p = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				h = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx"),
				f = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				g = n.n(f);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = Object(i.a)(e => {
				let {
					onClose: t,
					leaderboard: n,
					tournamentId: i,
					tokenIcon: f,
					isPreviousEvent: x = !1,
					isQueried: v = !1
				} = e;
				const y = Object(m.a)(),
					_ = Object(u.a)(),
					{
						currentRank: j,
						topPredictorsRank: O
					} = n,
					C = Object(o.e)(e => i ? Object(b.a)(e, i) : null),
					N = Object(o.e)(e => Object(a.s)(e, {
						pageLayer: _
					}));
				Object(s.useEffect)(() => {
					y(i ? Object(l.g)(i, x, v) : Object(l.e)())
				}, []);
				const S = j && j.rank > 0;
				return r.a.createElement("div", {
					className: g.a.container
				}, r.a.createElement("div", {
					className: g.a.header
				}, r.a.createElement(c.t, {
					className: g.a.closeButton,
					Icon: Object(d.b)("close"),
					priority: c.c.Plain,
					onClick: t
				}), r.a.createElement("h1", null, i ? E._("Tournament Leaderboard", null, {
					hk: "2ZYGPJ"
				}) : E._("All Time Top Predictors", null, {
					hk: "2OsQLm"
				})), r.a.createElement("h2", {
					className: g.a.subHeader
				}, C ? C.name : null == N ? void 0 : N.displayText)), r.a.createElement("div", {
					className: g.a.listContainer
				}, r.a.createElement(p.a, {
					currentRank: j,
					topPredictorsRank: O,
					tokenIcon: f
				}), S && r.a.createElement("div", {
					className: g.a.spacer
				}, " ")), j && j.redditorInfo && S && r.a.createElement(h.a, {
					className: g.a.currentRank,
					isCurrentUser: !0,
					rank: j.rank,
					redditor: j.redditor,
					redditorInfo: j.redditorInfo,
					score: j.score,
					tokenIcon: f
				}))
			}), y = e => r.a.createElement(v, x({
				withOverlay: !0,
				onOverlayClick: e.onClose
			}, e))
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less": function(e, t, n) {
			e.exports = {
				predictor: "ainvGgXQrIMFpP9X4Mrc_",
				userLink: "_34lqpm8WEQ2vCBLoneB-q5",
				userName: "Lm2HlDnjd61FFIUJMsqY1",
				yourProfile: "_3NXCPZBcTL9t1VpyqYkpAi",
				leaderboardIcon: "cr2gm4FK2Pvd3jSNEt1aM",
				rank: "_35mmwlcmeMehfyJXIsaV6P",
				userIcon: "_12PvAVnV9Mni44vSgjcixP",
				avatar: "KajS3NI16AuxmHTMwUM9Y",
				name: "_1XaIj4-_6OJb20sL98YYiD",
				score: "_3ebMVpO-ahVFbOZDTJpx9U",
				icon: "_2Xw8EThjahawQ2bJketixZ",
				rankBadge: "_1oPIwF1dXcLbArFfx2gunM"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				c = n("./src/reddit/components/UserIcon/index.tsx"),
				d = n("./src/reddit/controls/InternalLink/index.tsx"),
				l = n("./src/reddit/helpers/trackers/predictions.ts"),
				u = n("./src/reddit/hooks/useTracking.ts"),
				m = n("./src/reddit/components/Econ/PredictionLeaderboard/Predictor/index.m.less"),
				b = n.n(m);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				let {
					className: t,
					isCurrentUser: n,
					rank: s,
					redditor: m,
					redditorInfo: h,
					score: f,
					tokenIcon: g
				} = e;
				const x = Object(u.a)(),
					{
						icon: E,
						name: v,
						profile: y
					} = m || {},
					_ = null != v ? v : h.displayName;
				return r.a.createElement("div", {
					className: Object(o.a)(b.a.predictor, t)
				}, r.a.createElement("div", {
					className: b.a.rank
				}, s), r.a.createElement(d.default, {
					className: b.a.userLink,
					onClick: () => x(Object(l.f)({
						targetUserId: h.id
					})),
					to: `/user/${_}`,
					disabled: h.displayName === i.G || h.displayName === i.Qb
				}, r.a.createElement("div", {
					className: b.a.leaderboardIcon
				}, r.a.createElement(c.a, {
					className: Object(o.a)(b.a.userIcon, b.a.avatar),
					iconUrl: null == E ? void 0 : E.url,
					isNSFW: !!(null == y ? void 0 : y.isNsfw),
					userName: null != _ ? _ : ""
				}), r.a.createElement(a.a, {
					className: b.a.rankBadge,
					rank: s
				})), r.a.createElement("div", {
					className: b.a.name
				}, r.a.createElement("div", {
					className: b.a.userName
				}, _), n && r.a.createElement("div", {
					className: b.a.yourProfile
				}, p._("Yep, thats you.", null, {
					hk: "3DqdE1"
				})))), r.a.createElement("div", {
					className: b.a.score
				}, r.a.cloneElement(g, {
					className: b.a.icon
				}), f))
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Predictor/index.m.less": function(e, t, n) {
			e.exports = {
				predictor: "_16w_MXnqyc1wG_7ojYbn1W",
				rank: "_31JLAJR9J0PoccMihIbeyx",
				userLink: "_2l47m5ZBEi8xLNq6RSIFbA",
				userName: "Wd3mDBfAqnzvsMdD9m0_8",
				yourProfile: "_3cwE2bEUU5EMjmUjmUkB1r",
				leaderboardIcon: "_3Mmx-E5UguOnjQ6UxOxNNt",
				avatar: "v7H_jS6knu3EL_GoHh7hp"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Stats/index.m.less": function(e, t, n) {
			e.exports = {
				statsList: "_3IT8I6DlfHtXDnF-gs2RpL",
				stat: "TjF7GdpuNmao0k5l4rcny",
				statValue: "w_GdgvUJ7AVXtoC3Sv9Dz",
				long: "_2hR4JXJZlWk-KpRAtz84dB",
				statDescription: "PxTXMQqDB54wd14g-M1Dx"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3sjfBnn2sAWNiul4Nz_Pg7",
				content: "_3jDA0vviEVX8RhAhtOCY_z",
				tournamentInfo: "_36aOJEytqILMykYWpABMrJ",
				seeAllButton: "_1VP0LbK9VUyIB4HE7T12hP",
				tournamentTitle: "UU382dFrrhmKHOT4_f6nB",
				tournamentDate: "_3aIs6cW_8V_yNVi8okT9V8",
				leaderboard: "_1ouATj40OEjkSu07FMhSFS"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/index.m.less": function(e, t, n) {
			e.exports = {
				themedWidget: "zArpLVQY3rXItf4R-k_Ab",
				content: "ihn4kxAce7LSsBs2NTPqT",
				header: "_3kAf9h9Yqca0lw94mWOJQd"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.m.less": function(e, t, n) {
			e.exports = {
				placeBadge: "_1H-3d7_OLmQnVDXXA2ArUr"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.m.less"),
				d = n.n(c);
			const l = `${a.a.assetPath}/img/econ/predictions/leaderboard`,
				u = `${l}/first@2x.png`,
				m = `${l}/second@2x.png`,
				b = `${l}/third@2x.png`,
				p = {
					1: {
						alt: s.fbt._("First place", null, {
							hk: "3uGGfU"
						}),
						src: u,
						srcSet: `\n  ${l}/first.png,\n  ${u} 2x,\n  ${l}/first@3x.png 3x,\n`
					},
					2: {
						alt: s.fbt._("Second place", null, {
							hk: "4AYjyw"
						}),
						src: m,
						srcSet: `\n  ${l}/second.png,\n  ${m} 2x,\n  ${l}/second@3x.png 3x,\n`
					},
					3: {
						alt: s.fbt._("Third place", null, {
							hk: "lyjwD"
						}),
						src: b,
						srcSet: `\n  ${l}/third.png,\n  ${b} 2x,\n  ${l}/third@3x.png 3x,\n`
					}
				},
				h = e => {
					let {
						rank: t,
						className: n
					} = e;
					const s = t && p[t];
					return s ? i.a.createElement("img", {
						alt: s.alt,
						className: Object(r.a)(d.a.placeBadge, n),
						src: s.src,
						srcSet: s.srcSet
					}) : null
				}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				themedWidget: "_3uxjfiwzc4v4BiMEQHtZ3J",
				header: "_2F2J545Bkg5AzZZpmRUV5B",
				openModalButtonContainer: "Phr96vmtPy_VTwey6qWL_",
				openModalButton: "_1wSRscxdBnLN2r_D5XZhbe",
				modal: "PxqE9oFD_60_KiA_nA9CV",
				list: "_3DfAiOLDfE9ufqbW_M8d4G"
			}
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "PredictionLeaderboardSidebar", (function() {
				return v
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				c = n("./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts"),
				d = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				b = n("./src/reddit/hooks/useModalState.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/icons/fonts/Coin/index.tsx"),
				f = n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				x = n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.m.less"),
				E = n.n(x);
			const v = e => {
				let {
					className: t,
					subredditId: n,
					tournamentId: r
				} = e;
				var x;
				const v = Object(p.a)(),
					y = Object(l.ib)(),
					_ = "true" === (null == y ? void 0 : y.queryParams["top-predictors"]),
					[j, O, C] = Object(b.a)(_),
					{
						leaderboard: N,
						error: S
					} = Object(c.a)(n, r),
					I = r ? o.a.createElement(a.a, {
						tournamentId: r
					}) : o.a.createElement(h.a, null);
				if (o.a.useEffect(() => {
						N && v(r ? Object(m.h)(r) : Object(m.f)())
					}, [N, r]), !(null === (x = null == N ? void 0 : N.topPredictorsRank) || void 0 === x ? void 0 : x.length) || S) return null;
				const {
					currentRank: P,
					topPredictorsRank: k
				} = N, w = Boolean(r) ? s.fbt._("Tournament leaderboard", null, {
					hk: "1WFLrI"
				}) : s.fbt._("Top Predictors", null, {
					hk: "3HCYxQ"
				});
				return o.a.createElement(d.a, {
					className: Object(i.a)(E.a.themedWidget, t),
					contentOnly: !0
				}, o.a.createElement("h2", {
					className: E.a.header
				}, w), o.a.createElement(f.a, {
					className: E.a.list,
					currentRank: P,
					topPredictorsRank: k.slice(0, 4),
					tokenIcon: I
				}), o.a.createElement("div", {
					className: E.a.openModalButtonContainer
				}, o.a.createElement(u.a, {
					className: E.a.openModalButton,
					isFullWidth: !0,
					priority: u.c.Primary,
					onClick: () => {
						r && v(Object(m.c)()), O()
					}
				}, s.fbt._("See All", null, {
					hk: "1Ozf02"
				}))), j && o.a.createElement(g.a, {
					className: E.a.modal,
					leaderboard: N,
					tournamentId: r,
					tokenIcon: I,
					onClose: C
				}))
			};
			t.default = v
		},
		"./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/actions/economics/predictions/index.ts"),
				i = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts");

			function a(e, t) {
				const n = Object(r.d)(),
					a = Object(r.e)(n => t ? Object(i.h)(n, {
						tournamentId: t
					}) : Object(i.d)(n, {
						subredditId: e
					})),
					c = Object(r.e)(t => Object(i.c)(t, {
						subredditId: e
					})),
					d = Object(r.e)(t => Object(i.b)(t, {
						subredditId: e
					})),
					l = Object(r.e)(t => Object(i.a)(t, {
						subredditId: e
					}));
				return Object(s.useEffect)(() => {
					d || c || l || n(Object(o.k)(e))
				}, [c, d, l, e, n]), {
					leaderboard: a,
					error: l
				}
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/TournamentBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "joYEg_Eiw7o4Qi0wAP2aB",
				image: "q2Mp_RDxvnC8ol_stVX1T",
				title: "zm9tjKy9uW1OKszNhlp5D",
				subhead: "_1RDleqO8yhcVcIUFTNcRQf",
				confetti: "Y_uA8FA3p1c-n00AzM7Nd"
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/Leaderboard/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3MBNNo6fqxb0uNWyKrI5o4",
				ranks: "uUKoQ8LWuO4EBz06uq6FH",
				user: "_168PZ4dr9lD44TbD01rL8Y",
				"user-name": "_1Jphq41nWXoBjEjW1Ymo5b",
				userName: "_1Jphq41nWXoBjEjW1Ymo5b",
				"user-avatar": "v7it-sHd-KXMUERsL2892",
				userAvatar: "v7it-sHd-KXMUERsL2892",
				icon: "_1tiE0SiSAjC25b5rL9hoDL",
				label: "_35GlMF3eH5-VyQQhEZBWdA",
				rankBadge: "_1p2R5WS3mFFQ2DKgvcxocn"
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3oTYdDXHZkuflfa_Dbps_h",
				"tournament-info": "_1MwmQHjBLiH6XWzzpVBtHF",
				tournamentInfo: "_1MwmQHjBLiH6XWzzpVBtHF",
				"tournament-title": "_140bbDmuxY96fDpSG10nI6",
				tournamentTitle: "_140bbDmuxY96fDpSG10nI6",
				long: "_17m7Cs0WhffLTYHtIMgC_w",
				stats: "_1H91NxLQLk0yC_vRXxCJLx",
				stat: "_2A9JItQmo_iv_nQGpFFRM6",
				simple: "_3QjFRZNg1KYioFwtOXMvT0"
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3lcQbWv2Yp41rPB4Kfza3X"
			}
		},
		"./src/reddit/components/Econ/PredictionsPostList/index.tsx": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/Econ/Prediction/hooks/useTournamentsQuery.ts"),
				a = n("./node_modules/history/esm/history.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				l = n("./src/reddit/actions/economics/predictions/index.ts"),
				u = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts");
			var m = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				b = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.m.less"),
				p = n.n(b);
			const h = e => {
				let {
					subredditId: t,
					queriedTournamentId: n
				} = e;
				const i = Object(o.d)(),
					{
						leaderboard: b,
						error: h
					} = function(e, t) {
						const n = Object(o.d)(),
							r = Object(o.e)(e => Object(u.h)(e, {
								tournamentId: t
							})),
							i = Object(o.e)(e => Object(u.g)(e, {
								tournamentId: t
							})),
							a = Object(o.e)(e => Object(u.f)(e, {
								tournamentId: t
							})),
							c = Object(o.e)(e => Object(u.e)(e, {
								tournamentId: t
							}));
						return Object(s.useEffect)(() => {
							r || a || i || c || n(Object(l.o)(e, t))
						}, [r, i, a, c, e, t, n]), {
							leaderboard: r,
							error: c
						}
					}(t, n);
				return !(null == b ? void 0 : b.topPredictorsRank) || h ? null : r.a.createElement(m.a, {
					className: p.a.modal,
					leaderboard: b,
					tournamentId: n,
					tokenIcon: r.a.createElement(d.a, {
						tournamentId: n
					}),
					onClose: () => {
						const e = new URLSearchParams(location.search);
						e.delete("prediction-tournament-rank"), i(Object(c.b)(Object(a.c)({
							pathname: location.pathname,
							search: e.toString()
						})))
					},
					isQueried: !0
				})
			};
			var f = n("./src/reddit/components/PostList/index.tsx"),
				g = n("./src/reddit/connectors/PostList/index.ts"),
				x = n("./src/reddit/constants/postLayout.ts"),
				E = n("./src/reddit/contexts/PageLayer/index.tsx"),
				v = n("./src/reddit/helpers/predictions/index.ts"),
				y = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/config.ts"),
				O = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./src/reddit/components/Econ/Prediction/Confetti/index.tsx"),
				N = n("./src/reddit/components/Econ/Prediction/TournamentSnoosImage/index.tsx"),
				S = n("./src/reddit/models/Prediction/index.ts"),
				I = n("./src/reddit/selectors/poll/index.ts"),
				P = n("./src/redditGQL/types.ts"),
				k = n("./src/reddit/components/Econ/PredictionsPostList/TournamentBanner/index.m.less"),
				w = n.n(k);
			const L = e => {
					let {
						subredditId: t
					} = e;
					const n = Object(o.e)(e => Object(y.f)(e, {
							subredditId: t
						})),
						s = Object(o.e)(e => n ? Object(I.h)(e, n.tournamentId) : []);
					if (!n) return null;
					if (n.status === P.Q.Closed) return r.a.createElement(B, null);
					const i = s.filter(e => e.predictionStatus === S.b.Open && e.endsAt > Date.now()),
						a = i.length > 0,
						c = i.length && i.some(e => !e.userSelection);
					return a && !c ? r.a.createElement(A, null) : a ? null : r.a.createElement(T, null)
				},
				T = () => r.a.createElement("section", {
					className: w.a.container
				}, r.a.createElement("div", {
					className: w.a.image,
					style: {
						backgroundImage: `url(${j.a.assetPath}/img/econ/predictions/closet.png)`
					}
				}), r.a.createElement("div", null, r.a.createElement("h3", {
					className: w.a.title
				}, O.fbt._("There's nothing to predict right now", null, {
					hk: "29BSNR"
				})), r.a.createElement("p", {
					className: w.a.subhead
				}, O.fbt._("Mods can always add new questions, so check back later!", null, {
					hk: "1HtxKJ"
				})))),
				A = () => r.a.createElement("section", {
					className: w.a.container
				}, r.a.createElement(C.a, {
					className: w.a.confetti
				}), r.a.createElement(N.a, {
					className: w.a.image
				}), r.a.createElement("div", null, r.a.createElement("h3", {
					className: w.a.title
				}, O.fbt._("Your predictions are in!", null, {
					hk: "2hlZz4"
				})), r.a.createElement("p", {
					className: w.a.subhead
				}, O.fbt._("Mods can always add new questions, so check back later!", null, {
					hk: "48ISNI"
				})))),
				B = () => r.a.createElement("section", {
					className: w.a.container
				}, r.a.createElement("div", {
					className: w.a.image,
					style: {
						backgroundImage: `url(${j.a.assetPath}/img/econ/predictions/closet.png)`
					}
				}), r.a.createElement("div", null, r.a.createElement("h3", {
					className: w.a.title
				}, O.fbt._("No prediction tournaments are active right now", null, {
					hk: "4G1oCo"
				})), r.a.createElement("p", {
					className: w.a.subhead
				}, O.fbt._("Check back to see when a tournament is created.", null, {
					hk: "2ldkRW"
				}))));
			var R = n("./src/lib/classNames/index.ts"),
				M = n("./src/lib/prettyPrintNumber/index.ts"),
				D = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				U = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx"),
				F = n("./src/lib/constants/index.ts"),
				V = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				q = n("./src/reddit/components/UserIcon/index.tsx"),
				W = n("./src/reddit/controls/InternalLink/index.tsx"),
				H = n("./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/Leaderboard/index.m.less"),
				G = n.n(H);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js"), z = e => {
				let {
					className: t,
					ranks: n
				} = e;
				return r.a.createElement("div", {
					className: Object(R.a)(G.a.container, t)
				}, r.a.createElement("div", {
					className: G.a.label
				}, K._("Tournament Leaders", null, {
					hk: "2JMRGi"
				})), r.a.createElement("div", {
					className: G.a.ranks
				}, n.map(e => {
					let {
						redditor: t,
						redditorInfo: n,
						rank: s
					} = e;
					var o, i, a, c;
					return r.a.createElement(W.default, {
						key: n.id,
						className: G.a.user,
						to: `/user/${null==t?void 0:t.name}`,
						disabled: n.displayName === F.G || n.displayName === F.Qb
					}, r.a.createElement("div", {
						className: G.a.userAvatar
					}, r.a.createElement(q.a, {
						className: G.a.icon,
						iconUrl: null === (o = null == t ? void 0 : t.icon) || void 0 === o ? void 0 : o.url,
						isNSFW: Boolean(null === (i = null == t ? void 0 : t.profile) || void 0 === i ? void 0 : i.isNsfw),
						userName: null !== (a = null == t ? void 0 : t.name) && void 0 !== a ? a : ""
					}), r.a.createElement(V.a, {
						className: G.a.rankBadge,
						rank: s
					})), r.a.createElement("div", {
						className: G.a.userName
					}, null !== (c = null == t ? void 0 : t.name) && void 0 !== c ? c : n.displayName))
				})))
			};
			var Q = n("./src/reddit/components/Econ/PredictionsPostList/TournamentPoster/index.m.less"),
				Z = n.n(Q);
			const {
				fbt: J
			} = n("./node_modules/fbt/lib/FbtPublic.js"), X = e => {
				let {
					subredditId: t
				} = e;
				var n, s;
				const i = Object(o.e)(e => Object(y.f)(e, {
						subredditId: t
					})),
					a = Object(o.e)(e => i && Object(u.h)(e, {
						tournamentId: i.tournamentId
					}));
				return i ? r.a.createElement("section", {
					className: Z.a.container,
					style: {
						backgroundImage: D.a[i.theme] || D.a.theme_1
					}
				}, r.a.createElement("div", {
					className: Z.a.tournamentInfo
				}, r.a.createElement("p", null, J._("Predictions Tournament", null, {
					hk: "2AxvmU"
				})), r.a.createElement("h1", {
					className: Object(R.a)(Z.a.tournamentTitle, {
						[Z.a.long]: i.name.length > 40
					})
				}, i.name, " ", r.a.createElement(U.a, {
					status: i.status
				}))), r.a.createElement("div", {
					className: Z.a.stats
				}, (null == a ? void 0 : a.topPredictorsRank) && a.topPredictorsRank.length >= 3 && r.a.createElement(z, {
					className: Z.a.stat,
					ranks: a.topPredictorsRank.slice(0, 3)
				}), r.a.createElement("div", {
					className: Object(R.a)(Z.a.stat, Z.a.simple)
				}, r.a.createElement("dt", null, i.totalParticipantsCount ? Object(M.b)(i.totalParticipantsCount) : "--"), r.a.createElement("dd", null, J._("Players", null, {
					hk: "1S5q3e"
				}))), r.a.createElement("div", {
					className: Object(R.a)(Z.a.stat, Z.a.simple)
				}, r.a.createElement("dt", null, i.totalPredictionsCount || "--"), r.a.createElement("dd", null, J._("Predictions", null, {
					hk: "3E8BVX"
				}))), r.a.createElement("div", {
					className: Object(R.a)(Z.a.stat, Z.a.simple)
				}, r.a.createElement("dt", {
					className: Object(R.a)({
						[Z.a.long]: Boolean((null === (n = null == a ? void 0 : a.currentRank) || void 0 === n ? void 0 : n.rank) && a.currentRank.rank >= 1e6)
					})
				}, (null === (s = null == a ? void 0 : a.currentRank) || void 0 === s ? void 0 : s.rank) || "--"), r.a.createElement("dd", null, J._("Your rank", null, {
					hk: "2tS82X"
				}))))) : null
			};
			var Y = n("./src/reddit/components/Econ/PredictionsPostList/index.m.less"),
				$ = n.n(Y);

			function ee() {
				return (ee = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(g.a)(e => {
				const t = Object(E.ib)(),
					n = null == t ? void 0 : t.queryParams["prediction-tournament-rank"],
					s = Object(o.e)(t => Object(_.I)(t, e.listingName)),
					{
						isFetched: a
					} = Object(i.a)(s),
					c = Object(o.e)(e => Object(y.l)(e, {
						subredditId: s
					})),
					d = r.a.useMemo(() => Object.values(c).sort(v.b).map(e => e.id), [Object.keys(c).length]);
				return r.a.createElement("div", {
					className: $.a.container
				}, a && r.a.createElement(r.a.Fragment, null, r.a.createElement(X, {
					subredditId: s
				}), r.a.createElement(L, {
					subredditId: s
				})), a && n && r.a.createElement(h, {
					subredditId: s,
					queriedTournamentId: n
				}), r.a.createElement(f.a, ee({}, e, {
					postsById: c,
					postIds: d,
					loadMore: null,
					layout: x.g.Large
				})))
			})
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/Content.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less"),
				d = n.n(c);
			const l = e => {
				let {
					steps: t,
					withModalStyles: n
				} = e;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: Object(a.a)(d.a.banner, {
						[d.a.withModalStyles]: n
					})
				}, i.a.createElement("div", {
					className: d.a.header
				}, i.a.createElement("h2", null, i.a.createElement("span", {
					className: d.a.subHeader
				}, r.fbt._("Predictions", null, {
					hk: "ACRaq"
				})), r.fbt._("How It Works", null, {
					hk: "3QW4EZ"
				})), i.a.createElement("img", {
					alt: r.fbt._("Snoos gathered around a dark ball", null, {
						hk: "2sN6dD"
					}),
					className: d.a.bannerImage,
					src: `${s.a.assetPath}/img/econ/predictions/predictor_snoos_small.png`
				})), i.a.createElement("div", {
					className: d.a.innerCircle
				}), i.a.createElement("div", {
					className: d.a.middleCircle
				}), i.a.createElement("div", {
					className: d.a.outerCircle
				})), i.a.createElement("div", {
					className: Object(a.a)(d.a.stepsWrapper, {
						[d.a.withModalStyles]: n
					})
				}, t.map((e, n) => {
					let {
						title: s,
						description: r
					} = e;
					return i.a.createElement("div", {
						key: s,
						className: d.a.step
					}, i.a.createElement("div", {
						className: Object(a.a)(d.a.stepCount, {
							[d.a.showConnectingLine]: n !== t.length - 1
						})
					}, i.a.createElement("span", {
						className: d.a.stepNumber
					}, n + 1)), i.a.createElement("div", null, i.a.createElement("h3", {
						className: d.a.stepTitle
					}, s), i.a.createElement("p", {
						className: d.a.stepDescription
					}, r)))
				})))
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less": function(e, t, n) {
			e.exports = {
				widget: "_2skejWRT1rfgG6BplBSilb",
				banner: "_3Vuq-pvkzBHvhhc3OpN8CM",
				bannerImage: "_2GFV0XwSqv5Tr7PgZrRhVJ",
				withModalStyles: "_1RCK5xRisccYHWg1jiIoGb",
				circle: "_2016VIWG6bI8Nj8dsE4ypu",
				innerCircle: "_3j7kvNb-J6NJvKhocXhFpj",
				middleCircle: "_2m_eeq88Ifrg139rZyFFXk",
				outerCircle: "_3Ylo3qve0XxZ8mD9a2f841",
				header: "_2uBF46oc23WTMTLsgZkvHK",
				subHeader: "_2B5e_YXlIHTvceClBKv1h7",
				stepsWrapper: "_1A39M70HpOpbB2VfD7JRbq",
				step: "_1Z2_r-1ZgxI_OPxZQClct5",
				stepCount: "_2HWLDJDxl7OJmP4RsXqD9G",
				showConnectingLine: "_2XjaqnXdYZD-Z3ebpnuijI",
				stepNumber: "_39kWugzptUpQdvLWvfg7p6",
				stepTitle: "_1sgBe74lmm4Ril3sKb2nVU",
				stepDescription: "Utf73H7YpNoys-kCKEC6r",
				learnMoreWrapper: "_2KfRiOpMkVmGl6pasDgDj",
				learnMoreButton: "_3sIJNS0bEKk48Q-RSRYaUB"
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "jdE9Qjw-aDJCVYAdabIzn"
			}
		},
		"./src/reddit/components/Econ/Tournament/Sidebar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return ee
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/Econ/Prediction/TournamentTokenIcon/index.tsx"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/components/Econ/PredictionLeaderboard/RankBadge/index.tsx"),
				u = n("./src/reddit/components/UserIcon/index.tsx"),
				m = n("./src/reddit/controls/InternalLink/index.tsx"),
				b = n("./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/UserAvatar/index.m.less"),
				p = n.n(b);
			const h = e => {
				let {
					className: t,
					user: n,
					tokenIcon: s
				} = e;
				var i, c, b, h;
				const {
					redditor: f,
					redditorInfo: g,
					rank: x,
					score: E
				} = n, v = null !== (i = null == f ? void 0 : f.name) && void 0 !== i ? i : null == g ? void 0 : g.displayName;
				return r.a.createElement(m.default, {
					className: Object(a.a)(t, {
						[p.a.first]: 1 === x,
						[p.a.third]: 3 === x
					}),
					to: `/user/${v}`,
					disabled: (null == g ? void 0 : g.displayName) === d.G || (null == g ? void 0 : g.displayName) === d.Qb
				}, r.a.createElement("div", {
					className: p.a.avatarContainer
				}, r.a.createElement("div", {
					className: p.a.outerCircle
				}, r.a.createElement("div", {
					className: p.a.innerCircle
				})), (null === (c = null == g ? void 0 : g.snoovatarIcon) || void 0 === c ? void 0 : c.url) ? r.a.createElement("img", {
					className: p.a.avatar,
					alt: o.fbt._("User avatar", null, {
						hk: "12gjW8"
					}),
					src: g.snoovatarIcon.url
				}) : r.a.createElement("div", {
					className: p.a.defaultAvatar
				}, r.a.createElement(u.a, {
					className: p.a.userIcon,
					iconUrl: null === (b = null == f ? void 0 : f.icon) || void 0 === b ? void 0 : b.url,
					isNSFW: Boolean(null === (h = null == f ? void 0 : f.profile) || void 0 === h ? void 0 : h.isNsfw),
					userName: v
				})), r.a.createElement(l.a, {
					className: p.a.placeBadge,
					rank: x
				})), r.a.createElement("div", {
					className: p.a.winnerName
				}, v), r.a.createElement("div", {
					className: p.a.score
				}, r.a.cloneElement(s, {
					className: p.a.tokenIcon
				}), " ", E))
			};
			var f = n("./src/reddit/components/Econ/PredictionLeaderboard/Modal/index.tsx"),
				g = n("./src/reddit/components/Econ/PredictionLeaderboard/useLeaderboard.ts"),
				x = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				E = n("./src/reddit/controls/Button/index.tsx"),
				v = n("./src/reddit/helpers/trackers/predictionsLeaderboard.ts"),
				y = n("./src/reddit/hooks/useModalState.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				j = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				O = n("./src/reddit/components/Econ/PredictionLeaderboard/AllTimeLeaderboard/index.m.less"),
				C = n.n(O);
			const N = e => {
				let {
					subredditId: t
				} = e;
				var n;
				const [d, l, u] = Object(y.a)(!1), m = Object(_.a)(), b = Object(i.e)(e => Object(j.f)(e, {
					subredditId: t
				})), {
					leaderboard: p,
					error: O
				} = Object(g.a)(t);
				if (Object(s.useEffect)(() => {
						p && m(Object(v.f)())
					}, [m, p]), O || !(null === (n = null == p ? void 0 : p.topPredictorsRank) || void 0 === n ? void 0 : n.length) || p.topPredictorsRank.length < 3 || !b) return null;
				const N = p.topPredictorsRank.slice(0, 3),
					S = r.a.createElement(c.a, {
						tournamentId: b.tournamentId
					});
				return r.a.createElement(x.a, {
					className: C.a.themedWidget,
					contentOnly: !0
				}, r.a.createElement("h2", {
					className: C.a.header
				}, o.fbt._("All time top predictors", null, {
					hk: "1sZnun"
				})), r.a.createElement("div", {
					className: C.a.winnersContainer
				}, N.map(e => {
					var t;
					return r.a.createElement(h, {
						className: Object(a.a)(C.a.user, {
							[C.a.first]: 1 === e.rank,
							[C.a.second]: 2 === e.rank
						}),
						key: null === (t = e.redditorInfo) || void 0 === t ? void 0 : t.id,
						user: e,
						tokenIcon: S
					})
				})), r.a.createElement(E.a, {
					priority: E.c.Primary,
					className: C.a.seeAllButton,
					onClick: () => {
						m(Object(v.b)()), l()
					},
					isFullWidth: !0
				}, o.fbt._("See all", null, {
					hk: "23jjqI"
				})), d && r.a.createElement(f.a, {
					leaderboard: p,
					tokenIcon: S,
					onClose: u
				}))
			};
			var S = n("./src/reddit/components/Econ/Prediction/themes.ts"),
				I = n("./src/reddit/components/Econ/Prediction/TournamentStatusBadge/index.tsx"),
				P = n("./src/lib/prettyPrintNumber/index.ts"),
				k = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Stats/index.m.less"),
				w = n.n(k);
			const L = e => {
				let {
					tournament: t,
					userRank: n
				} = e;
				return r.a.createElement("dl", {
					className: w.a.statsList
				}, r.a.createElement("div", {
					className: w.a.stat
				}, r.a.createElement("dt", {
					className: w.a.statValue
				}, t.totalParticipantsCount ? Object(P.b)(t.totalParticipantsCount) : "--"), r.a.createElement("dd", {
					className: w.a.statDescription
				}, o.fbt._("Players", null, {
					hk: "QKnjj"
				}))), r.a.createElement("div", {
					className: w.a.stat
				}, r.a.createElement("dt", {
					className: w.a.statValue
				}, t.totalPredictionsCount || "--"), r.a.createElement("dd", {
					className: w.a.statDescription
				}, o.fbt._("Predictions", null, {
					hk: "2MJSk1"
				}))), r.a.createElement("div", {
					className: w.a.stat
				}, r.a.createElement("dt", {
					className: Object(a.a)(w.a.statValue, {
						[w.a.long]: Boolean((null == n ? void 0 : n.rank) && n.rank >= 1e6)
					})
				}, (null == n ? void 0 : n.rank) || "--"), r.a.createElement("dd", {
					className: w.a.statDescription
				}, o.fbt._("Your rank", null, {
					hk: "2aohc3"
				}))))
			};
			var T = n("./src/reddit/components/HumanDate/index.tsx"),
				A = n("./src/reddit/selectors/features/predictions/leaderboards/index.ts"),
				B = n("./src/reddit/helpers/trackers/predictions.ts"),
				R = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/Predictor/index.m.less"),
				M = n.n(R);
			const D = e => {
				let {
					className: t,
					userRank: n
				} = e;
				const s = Object(_.a)(),
					{
						rank: o,
						redditor: i,
						redditorInfo: c
					} = n,
					{
						icon: b,
						name: p,
						profile: h
					} = i || {},
					f = null != p ? p : c.displayName;
				return r.a.createElement("div", {
					className: Object(a.a)(M.a.predictor, t)
				}, r.a.createElement(l.a, {
					className: M.a.rank,
					rank: o
				}), r.a.createElement(m.default, {
					className: M.a.userLink,
					onClick: () => s(Object(B.f)({
						targetUserId: c.id
					})),
					to: `/user/${f}`,
					disabled: c.displayName === d.G || c.displayName === d.Qb
				}, r.a.createElement("div", {
					className: M.a.leaderboardIcon
				}, r.a.createElement(u.a, {
					className: Object(a.a)(M.a.avatar),
					iconUrl: null == b ? void 0 : b.url,
					isNSFW: !!(null == h ? void 0 : h.isNsfw),
					userName: null != f ? f : ""
				})), r.a.createElement("div", {
					className: M.a.userName
				}, f)))
			};
			var U = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/TournamentLeaderboard/index.m.less"),
				F = n.n(U);
			const V = e => {
				let {
					tournamentId: t
				} = e;
				const [n, s, a] = Object(y.a)(!1), d = Object(i.e)(e => Object(j.a)(e, t)), l = Object(i.e)(e => Object(A.h)(e, {
					tournamentId: t
				})), u = Object(_.a)();
				if (!d || !l) return null;
				const m = l.topPredictorsRank.slice(0, 3);
				return r.a.createElement("section", null, r.a.createElement("div", {
					className: F.a.header,
					style: {
						backgroundImage: S.a[d.theme] || S.a.theme_1
					}
				}, r.a.createElement("h3", {
					className: F.a.tournamentTitle
				}, d.name, " ", r.a.createElement(I.a, {
					status: d.status
				})), d.createdAt && d.endedAt && r.a.createElement("div", {
					className: F.a.tournamentDate
				}, r.a.createElement(T.a, {
					seconds: Math.floor(d.createdAt / 1e3),
					showDay: !0,
					shortMonths: !0
				}), " ", "-", " ", r.a.createElement(T.a, {
					seconds: Math.floor(d.endedAt / 1e3),
					showDay: !0,
					shortMonths: !0
				}))), r.a.createElement("div", {
					className: F.a.content
				}, r.a.createElement("div", {
					className: F.a.tournamentInfo
				}, r.a.createElement("div", {
					className: F.a.leaderboard
				}, m.map(e => r.a.createElement(D, {
					key: e.redditorInfo.id,
					userRank: e
				}))), r.a.createElement(L, {
					tournament: d,
					userRank: l.currentRank
				})), r.a.createElement(E.a, {
					className: F.a.seeAllButton,
					onClick: () => {
						s(), u(Object(v.a)())
					},
					isFullWidth: !0
				}, o.fbt._("See all", null, {
					hk: "aMyfi"
				}))), n && r.a.createElement(f.a, {
					isPreviousEvent: !0,
					leaderboard: l,
					tokenIcon: r.a.createElement(c.a, {
						tournamentId: d.tournamentId
					}),
					tournamentId: d.tournamentId,
					onClose: a
				}))
			};
			var q = n("./src/reddit/components/Econ/PredictionLeaderboard/PreviousTournaments/index.m.less"),
				W = n.n(q);
			const H = e => {
				let {
					subredditId: t
				} = e;
				const n = Object(_.a)(),
					s = Object(i.e)(e => Object(j.g)(e, {
						subredditId: t
					}).slice(1, 3).map(e => e.tournamentId));
				return r.a.useEffect(() => {
					s.length && n(Object(v.d)())
				}, [s]), s.length ? r.a.createElement(x.a, {
					className: W.a.themedWidget,
					contentOnly: !0
				}, r.a.createElement("div", {
					className: W.a.content
				}, r.a.createElement("h2", {
					className: W.a.header
				}, o.fbt._("Previous tournaments", null, {
					hk: "2BA4B9"
				})), s.map(e => r.a.createElement(V, {
					key: e,
					tournamentId: e
				})))) : null
			};
			var G = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/Content.tsx"),
				K = n("./src/reddit/components/Econ/Tournament/Sidebar/HowItWorks/index.m.less"),
				z = n.n(K);
			const Q = [{
				title: o.fbt._("Mods create questions", null, {
					hk: "2Ay8LV"
				}),
				description: o.fbt._("A Predictions tournament kicks off once questions are created. More questions can be added as the tournament progresses.", null, {
					hk: "11SFeA"
				})
			}, {
				title: o.fbt._("Users make predictions", null, {
					hk: "4c8bYm"
				}),
				description: o.fbt._("Predict using tokens given to you. Put down more tokens to win bigger rewards (if you’re right).", null, {
					hk: "17d2f"
				})
			}, {
				title: o.fbt._("Track the competition", null, {
					hk: "1ZIdYB"
				}),
				description: o.fbt._("Follow the leaderboard to see who gets the most tokens. When mods close a tournament, final winners are announced!", null, {
					hk: "3o8fok"
				})
			}];
			var Z = () => {
					const e = Object(_.a)();
					return Object(s.useEffect)(() => {
						e(Object(B.o)())
					}, [e]), r.a.createElement(x.a, {
						className: z.a.widget,
						contentOnly: !0
					}, r.a.createElement(G.a, {
						steps: Q
					}))
				},
				J = (n("./src/reddit/components/Econ/PredictionLeaderboard/List/index.tsx"), n("./src/reddit/components/Econ/PredictionLeaderboard/Sidebar/index.tsx"));

			function X(e) {
				let {
					subredditId: t
				} = e;
				const n = Object(i.e)(e => Object(j.f)(e, {
					subredditId: t
				}));
				return n ? r.a.createElement(J.default, {
					subredditId: t,
					tournamentId: n.tournamentId
				}) : null
			}
			var Y = n("./src/reddit/components/Econ/Tournament/Sidebar/index.m.less"),
				$ = n.n(Y);

			function ee(e) {
				let {
					subredditId: t
				} = e;
				return r.a.createElement("div", {
					className: $.a.container
				}, r.a.createElement(N, {
					subredditId: t
				}), r.a.createElement(Z, null), r.a.createElement(X, {
					subredditId: t
				}), r.a.createElement(H, {
					subredditId: t
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Economics-SubredditPremium-LFGBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-Economics-SubredditPremium-LFGBanner").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("SubredditPremiumNewUserWelcome").then(n.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spSpecialMemberships", o)
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, n) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/upperFirst.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/config.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/lib/isFakeSubreddit/index.ts"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/components/PostList/Placeholder.tsx"),
				p = n("./src/reddit/components/EmptySubreddit.m.less"),
				h = n.n(p),
				f = n("./src/lib/classNames/index.ts"),
				g = n("./src/lib/lessComponent.tsx"),
				x = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const E = g.a.wrapped(b.a, "BackgroundPlaceholder", h.a),
				v = g.a.wrapped(m.n, "SubmitLink", h.a),
				y = e => {
					switch (e) {
						case d.ab.RISING:
							return s.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case d.ab.TOP:
						case d.ab.CONTROVERSIAL:
							return null;
						default:
							return s.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				_ = e => {
					let {
						listingName: t,
						sort: n
					} = e;
					const r = y(n);
					return a.a.createElement("div", {
						className: h.a.MainContent
					}, a.a.createElement("div", {
						className: h.a.PrimaryText
					}, (e => {
						switch (e) {
							case d.ab.RISING:
								return s.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case d.ab.TOP:
							case d.ab.CONTROVERSIAL:
								return s.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [s.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return s.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(n)), t && !Object(l.a)(t) && !!r && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: h.a.SecondaryText
					}, y(n)), a.a.createElement(v, {
						to: `/r/${t}/submit`
					}, s.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				j = () => a.a.createElement("div", {
					className: h.a.MainContent
				}, a.a.createElement("img", {
					className: h.a.SnooImg,
					src: `${c.a.assetPath}/img/snoo_discovery@1x.png`
				}), a.a.createElement("div", {
					className: h.a.PrimaryText
				}, s.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), a.a.createElement(v, {
					to: "/r/popular"
				}, s.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => a.a.createElement(a.a.Fragment, null, e.subreddit && a.a.createElement(x.a, {
				subredditId: e.subreddit.id,
				subredditSubscribers: e.subreddit.subscribers
			}), a.a.createElement("div", {
				"data-testid": "empty-subreddit",
				className: Object(f.a)(h.a.Component, h.a.EmptyHomepage)
			}, a.a.createElement(E, {
				isLoading: !1,
				layout: u.g.Classic
			}), a.a.createElement("div", {
				className: h.a.MainContentWrapper
			}, e.subreddit ? a.a.createElement(_, e) : a.a.createElement(j, null))))
		},
		"./src/reddit/components/EmptySubredditPostList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return x
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/constants/postLayout.ts"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/PostList/Placeholder.tsx"),
				l = n("./src/reddit/hooks/useIsClient.ts"),
				u = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				m = n("./src/reddit/components/Econ/Prediction/EmptyPredictions/index.m.less"),
				b = n.n(m);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), h = c.a.wrapped(d.a, "backgroundPlaceholder", b.a);

			function f(e) {
				let {
					subredditId: t
				} = e;
				const n = Object(o.e)(e => !!t && Object(u.k)(e, {
						subredditId: t
					})),
					s = Object(l.a)();
				return r.a.createElement("div", {
					className: Object(a.a)(b.a.component, b.a.emptyHomepage)
				}, r.a.createElement(h, {
					isLoading: n,
					layout: i.g.Classic
				}), s && !n && r.a.createElement("div", {
					className: b.a.mainContentWrapper
				}, r.a.createElement("div", {
					className: b.a.mainContent
				}, r.a.createElement("div", {
					className: b.a.primaryText
				}, p._("No prediction tournament posts", null, {
					hk: "1gqn5x"
				})))))
			}
			var g = n("./src/reddit/components/EmptySubreddit.tsx");

			function x(e) {
				let {
					isPredictionsPage: t,
					listingName: n,
					sort: s,
					subreddit: o
				} = e;
				return t ? r.a.createElement(f, {
					subredditId: null == o ? void 0 : o.id
				}) : r.a.createElement(g.a, {
					listingName: n,
					sort: s,
					subreddit: o || void 0
				})
			}
		},
		"./src/reddit/components/ErrorBoundary/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@sentry/minimal/esm/index.js"),
				r = n("./node_modules/react/index.js");
			class o extends r.Component {
				constructor() {
					super(...arguments), this.state = {
						error: null
					}
				}
				componentDidCatch(e, t) {
					s.l(n => {
						n.setExtra("info", t), s.c(e)
					}), this.setState({
						error: e
					})
				}
				render() {
					const {
						children: e,
						FallbackComponent: t = (() => null)
					} = this.props, {
						error: n
					} = this.state;
					return n ? r.createElement(t, {
						error: n
					}) : e
				}
			}
			t.a = o
		},
		"./src/reddit/components/GarlicBreadEmbed/index.m.less": function(e, t, n) {
			e.exports = {
				container: "e_hUuI8E4_-4joOuOJxiG",
				expanded: "_1wpebj121xvsT_ALlIraAs",
				isSubscriptionsPinned: "_1dKBP8RyDqi98Fm3SZdS-X",
				garlicBreadIcon: "_9_GnEondPnEvAiqhn8bEt",
				iframe: "_3Sf9ucwF90vy8KQgnmYHkY",
				overlay: "_1vTup2Yz1pFxSinanTQR1Q",
				Modal: "_2CYtrYUF2cduotJw5yrWW0",
				modal: "_2CYtrYUF2cduotJw5yrWW0",
				ModalBody: "_3FSzFryLWtxjYtvlH9aX9P",
				modalBody: "_3FSzFryLWtxjYtvlH9aX9P",
				ModalIcon: "_1c2GGlbYfPfRGqt_tLJ9Nl",
				modalIcon: "_1c2GGlbYfPfRGqt_tLJ9Nl",
				ModalHeader: "_1Z74NUKq_RuSFSsTON1I1H",
				modalHeader: "_1Z74NUKq_RuSFSsTON1I1H",
				ModalTitle: "_1i2Ph4U8zkWEs_4bwPgEaq",
				modalTitle: "_1i2Ph4U8zkWEs_4bwPgEaq",
				ModalMain: "_3ltdY4NwF68dAEslxLwaiF",
				modalMain: "_3ltdY4NwF68dAEslxLwaiF",
				ModalFormItem: "_35k9M8YpmfffpGKTShBgua",
				modalFormItem: "_35k9M8YpmfffpGKTShBgua",
				ModalInputLabel: "_2di-Z6s2gCmih7IeBEgGmj",
				modalInputLabel: "_2di-Z6s2gCmih7IeBEgGmj",
				ModalInput: "_2qaxL2friIBM9HFKXDg5fA",
				modalInput: "_2qaxL2friIBM9HFKXDg5fA",
				ModalFooter: "dBWYvynktm-xXVK8C7qvS",
				modalFooter: "dBWYvynktm-xXVK8C7qvS",
				ConfirmButton: "_3VphwVHjUPJ9nE-D4AEdut",
				confirmButton: "_3VphwVHjUPJ9nE-D4AEdut",
				PlainButton: "_3a-uSfmeTUy1lVgKZ62rzG",
				plainButton: "_3a-uSfmeTUy1lVgKZ62rzG"
			}
		},
		"./src/reddit/components/GarlicBreadEmbed/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/header.ts"),
				u = n("./src/reddit/actions/login.ts"),
				m = n("./src/reddit/actions/search.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/actions/tooltip.ts"),
				h = n("./src/reddit/actions/users.ts");
			const f = s.a.garlicBreadUrl;
			var g, x, E;
			! function(e) {
				e.RefreshAuth = "refreshAuth", e.Close = "close", e.SignIn = "signIn", e.SyncCoordinates = "syncCoordinates", e.OpenProfile = "openProfile", e.VerifyAccount = "verifyAccount", e.NavigateToDeeplink = "navigateToDeeplink"
			}(g || (g = {})),
			function(e) {
				e.SetScreenMode = "setScreenMode", e.InjectAuthHeaders = "injectAuthHeaders", e.InjectTelemetryDefaults = "injectTelemetryDefaults"
			}(x || (x = {})),
			function(e) {
				e.Preview = "preview", e.FullScreen = "fullscreen", e.PictureInPicture = "pip"
			}(E || (E = {}));
			var v = class {
				constructor(e, t, n, s, r, o, i, a) {
					this.subscribe = () => {
						null === window || void 0 === window || window.addEventListener("message", this.onMessage)
					}, this.unsubscribe = () => {
						null === window || void 0 === window || window.removeEventListener("message", this.onMessage)
					}, this.onMessage = e => {
						let {
							origin: t,
							data: n
						} = e;
						t === f && (n.type === g.RefreshAuth ? this.sendMessageAuthAndTelemetry() : n.type === g.Close ? this.onMessageClose() : n.type === g.SignIn && n.dest ? this.onMessageSignIn(n.dest) : n.type === g.SyncCoordinates && n.data ? this.onMessageSyncCoordinates(n.data) : n.type === g.OpenProfile && n.data ? this.onMessageOpenProfile(n.data) : n.type === g.VerifyAccount ? this.onMessageVerifyAccount() : n.type === g.NavigateToDeeplink && this.onMessageNavigateToDeeplink(n.data))
					}, this.sendMessageAuthAndTelemetry = () => {
						const {
							expiration: e,
							headers: t,
							telemetryDefaults: n
						} = this.getAuthClientData();
						this.sendMessageInjectAuthHeaders({
							expiration: e,
							headers: t
						}), this.sendMessageInjectTelemetryDefaults({
							telemetryDefaults: n
						})
					}, this.sendMessageScreenMode = e => {
						this.sendMessage({
							type: x.SetScreenMode,
							state: e
						})
					}, this.sendMessageInjectAuthHeaders = e => {
						this.sendMessage({
							type: x.InjectAuthHeaders,
							...e
						})
					}, this.sendMessageInjectTelemetryDefaults = e => {
						this.sendMessage({
							type: x.InjectTelemetryDefaults,
							...e
						})
					}, this.ref = e, this.getAuthClientData = t, this.onMessageClose = n, this.onMessageSignIn = s, this.onMessageSyncCoordinates = r, this.onMessageOpenProfile = o, this.onMessageVerifyAccount = i, this.onMessageNavigateToDeeplink = a
				}
				sendMessage(e) {
					var t, n;
					null === (n = null === (t = this.ref.current) || void 0 === t ? void 0 : t.contentWindow) || void 0 === n || n.postMessage(e, f)
				}
			};
			const y = s.a.garlicBreadUrl,
				_ = new URL(`${y}/embed`),
				j = ["screenmode", "edit", "cx", "cy", "px", "ts", "locale"],
				O = e => {
					var t;
					if ("undefined" == typeof window) return {
						iframeURL: void 0,
						isFullscreen: !1
					};
					C(), _.searchParams.set("locale", e);
					const n = (null === (t = _.searchParams.get("screenmode")) || void 0 === t ? void 0 : t.toLocaleLowerCase()) === E.FullScreen;
					return _.searchParams.set("screenmode", n ? E.FullScreen : E.Preview), {
						iframeURL: _.toString(),
						isFullscreen: n
					}
				},
				C = () => {
					var e;
					const t = window.location.search.toLocaleLowerCase(),
						n = new URLSearchParams(t);
					for (const s of j) {
						const t = null === (e = n.get(s)) || void 0 === e ? void 0 : e.toLocaleLowerCase(),
							r = "string" == typeof t && "false" !== t;
						n.has(s) && r && t && _.searchParams.set(s, t)
					}
				},
				N = () => {
					_.searchParams.set("screenmode", E.Preview)
				};
			var S = n("./src/reddit/components/TrackingHelper/index.tsx"),
				I = n("./src/reddit/constants/keycodes.ts"),
				P = n("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				k = n("./src/reddit/helpers/trackers/garlicBread.ts"),
				w = n("./src/reddit/models/Toast/index.ts"),
				L = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/selectors/telemetry.ts")),
				T = n("./src/telemetry/models/Event.ts");
			const A = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
				return Object.keys(e).reduce((n, s) => {
					const r = e[s];
					return r ? (n[s] = "object" == typeof r && t <= 4 ? A(r, t + 1) : r, n) : n
				}, {})
			};
			var B = n("./src/reddit/selectors/meta.ts"),
				R = n("./src/reddit/selectors/platform.ts"),
				M = n("./src/reddit/selectors/user.ts"),
				D = n("./src/reddit/selectors/userPrefs.ts"),
				U = n("./src/higherOrderComponents/asModal/index.tsx"),
				F = n("./src/reddit/icons/svgs/GarlicBread/index.tsx"),
				V = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				q = n("./src/reddit/controls/Button/index.tsx"),
				W = n("./src/reddit/components/GarlicBreadEmbed/index.m.less"),
				H = n.n(W);
			const {
				fbt: G
			} = n("./node_modules/fbt/lib/FbtPublic.js"), K = e => e.preventDefault(), z = Object(U.a)(e => {
				let {
					title: t,
					modalBody: n,
					primaryButtonText: s,
					isPrimaryAction: r,
					secondaryButtonText: i,
					onPrimaryButtonClick: a,
					onSecondaryButtonClick: c
				} = e;
				return o.a.createElement(V.e, {
					className: H.a.ModalBody
				}, o.a.createElement(V.i, {
					className: H.a.ModalHeader
				}, o.a.createElement(F.a, {
					className: H.a.ModalIcon
				}), o.a.createElement(V.q, {
					className: H.a.ModalTitle
				}, t)), o.a.createElement(V.l, {
					className: H.a.ModalMain
				}, n), o.a.createElement(V.g, {
					className: H.a.ModalFooter
				}, r && o.a.createElement(q.t, {
					kind: q.b.Button,
					priority: q.c.Primary,
					className: H.a.ConfirmButton,
					onClick: a,
					onMouseDown: K
				}, s), !r && o.a.createElement(q.t, {
					to: "/settings/account",
					kind: q.b.InternalLink,
					priority: q.c.Primary,
					className: H.a.ConfirmButton,
					onClick: a,
					onMouseDown: K
				}, s), o.a.createElement(q.t, {
					className: H.a.PlainButton,
					kind: q.b.Button,
					priority: q.c.PlainLink,
					onClick: c,
					onMouseDown: K
				}, i)))
			}), Q = e => {
				let {
					email: t
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: H.a.ModalFormItem
				}, o.a.createElement("div", {
					className: H.a.ModalInputLabel
				}, G._("Email", null, {
					hk: "N93Hq"
				})), o.a.createElement("div", {
					className: H.a.ModalInput
				}, t)), o.a.createElement(q.t, {
					to: "/settings/account",
					className: H.a.PlainButton,
					kind: q.b.InternalLink,
					priority: q.c.PlainLink,
					onMouseDown: K
				}, G._("Update email address", null, {
					hk: "4bgFyL"
				})))
			}, Z = e => {
				let {
					email: t,
					onPrimaryButtonClick: n,
					onSecondaryButtonClick: s
				} = e;
				return o.a.createElement(z, {
					isPrimaryAction: !0,
					className: H.a.Modal,
					withOverlay: !0,
					onOverlayClick: s,
					title: G._("Verify your email to make your mark on the canvas", null, {
						hk: "Lad1Z"
					}),
					modalBody: o.a.createElement(Q, {
						email: t
					}),
					primaryButtonText: G._("Send verification email", null, {
						hk: "1zdmej"
					}),
					onPrimaryButtonClick: n,
					secondaryButtonText: G._("Not now", null, {
						hk: "YkgPb"
					}),
					onSecondaryButtonClick: s
				})
			}, J = e => {
				let {
					onSecondaryButtonClick: t
				} = e;
				return o.a.createElement(z, {
					isPrimaryAction: !1,
					className: H.a.Modal,
					withOverlay: !0,
					onOverlayClick: t,
					title: G._("Add your email to make your mark on the canvas", null, {
						hk: "2PVqer"
					}),
					primaryButtonText: G._("Add an email", null, {
						hk: "3rY2VL"
					}),
					secondaryButtonText: G._("Not now", null, {
						hk: "YkgPb"
					}),
					onSecondaryButtonClick: t
				})
			}, {
				fbt: X
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Y;
			! function(e) {
				e.None = "none", e.VerifyEmail = "verifyEmail", e.AddEmail = "addEmail"
			}(Y || (Y = {}));
			const $ = Object(c.c)({
					session: e => e.user.session,
					telemetryDefaults: e => {
						const t = {
								...Object(L.q)(e),
								...{
									action: T.c.Load,
									source: T.e.Experiment,
									noun: T.d.UserId
								}
							},
							{
								action: n,
								source: s,
								noun: r,
								...o
							} = Object(T.f)(t);
						return A(o)
					},
					isTooltipOpened: e => Boolean(e.tooltip.tooltipId),
					isSearchDropdownOpened: e => e.search.isDropdownOpen,
					isHeaderDropdownOpened: e => e.header.isSubscriptionsDropdownOpen,
					isLoggedIn: M.S,
					queryParams: e => Object(R.q)(e),
					email: M.p,
					isSubscriptionsPinned: D.c,
					locale: B.k
				}),
				ee = Object(i.b)($, e => ({
					closeSearchDropdown: () => e(Object(m.n)()),
					closeHeaderDropdown: () => e(Object(l.f)()),
					closeTooltipModal: () => e(Object(p.j)()),
					openRegisterModal: () => e(Object(u.openRegisterModal)()),
					openProfilePage: t => e(Object(a.b)(`/user/${t}`)),
					openErrorToast: () => e(Object(b.f)({
						duration: b.a,
						kind: w.b.Error,
						text: X._("Something wen't wrong. Please try again later.", null, {
							hk: "4vD48K"
						})
					})),
					resendEmail: () => e(Object(h.v)()),
					navigateToDeeplink: e => {
						window.open(e, "_blank")
					}
				}));
			class te extends o.a.Component {
				constructor(e) {
					super(e), this.iframeRef = Object(r.createRef)(), this.handleEscapeKey = e => {
						e.key === I.b.Escape.toString() && this.toggleFullScreen(!1)
					}, this.toggleFullScreen = e => {
						const t = e ? E.FullScreen : E.Preview;
						this.messenger.sendMessageScreenMode(t), this.updateScreenModeInUrl(t), Object(P.e)(!e), e || N(), this.setState({
							isFullscreen: e
						})
					}, this.getAuthClientData = () => {
						const {
							session: e,
							telemetryDefaults: t
						} = this.props;
						return {
							expiration: e ? new Date(e.expires).getTime() : 0,
							headers: e ? {
								Authorization: `Bearer ${e.accessToken}`
							} : {},
							telemetryDefaults: t
						}
					}, this.onMessageSignIn = () => {
						this.props.openRegisterModal()
					}, this.onMessageClose = () => {
						this.toggleFullScreen(!1)
					}, this.onMessageSyncCoordinates = e => {
						let {
							cx: t,
							cy: n,
							px: s,
							ts: r
						} = e;
						const o = new URL(location.href);
						o.searchParams.set("cx", `${t}`), o.searchParams.set("cy", `${n}`), o.searchParams.set("px", `${s}`), r && o.searchParams.set("ts", `${r}`), history.replaceState({}, "", o.toString())
					}, this.onMessageOpenProfile = e => {
						let {
							profileName: t
						} = e;
						t && "string" == typeof t && this.props.openProfilePage(t)
					}, this.onMessageVerifyAccount = () => {
						this.props.email ? this.setState({
							showModal: Y.VerifyEmail
						}) : this.setState({
							showModal: Y.AddEmail
						})
					}, this.onMessageNavigateToDeeplink = e => {
						let {
							link: t
						} = e;
						t && "string" == typeof t && this.props.navigateToDeeplink(t)
					}, this.onClickVerifyEmail = () => {
						this.setState({
							showModal: Y.None
						}), this.props.resendEmail()
					}, this.onLoad = () => {
						this.setState({
							isLoaded: !0
						});
						const {
							isFullscreen: e
						} = O(this.props.locale);
						this.toggleFullScreen(e)
					}, this.onError = () => {
						this.setState({
							isLoaded: !1
						}), this.props.openErrorToast()
					}, this.onOverlayClick = () => {
						const {
							isFullscreen: e
						} = this.state, t = this.isAnyRedditModalOpened();
						e && t ? this.closeAnyRedditModal() : this.state.isFullscreen || (this.toggleFullScreen(!0), this.props.sendEvent(Object(k.b)()))
					}, this.updateScreenModeInUrl = e => {
						const t = new URL(location.href);
						t.searchParams.set("screenmode", `${e}`), history.replaceState({}, "", t.toString())
					}, this.messenger = new v(this.iframeRef, this.getAuthClientData, this.onMessageClose, this.onMessageSignIn, this.onMessageSyncCoordinates, this.onMessageOpenProfile, this.onMessageVerifyAccount, this.onMessageNavigateToDeeplink);
					const {
						iframeURL: t
					} = O(this.props.locale);
					this.state = {
						iframeURL: t,
						isFullscreen: !1,
						isLoaded: !1,
						showModal: Y.None
					}
				}
				componentDidMount() {
					this.messenger.subscribe(), document.addEventListener("keydown", this.handleEscapeKey)
				}
				componentWillUnmount() {
					C(), this.messenger.unsubscribe(), document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidUpdate(e) {
					let {
						session: t,
						isLoggedIn: n
					} = e;
					this.props.isLoggedIn === n && this.props.session === t || this.messenger.sendMessageAuthAndTelemetry()
				}
				closeAnyRedditModal() {
					const {
						isTooltipOpened: e,
						isHeaderDropdownOpened: t,
						isSearchDropdownOpened: n
					} = this.props;
					e && this.props.closeTooltipModal(), t && this.props.closeHeaderDropdown(), n && this.props.closeSearchDropdown()
				}
				isAnyRedditModalOpened() {
					const {
						isTooltipOpened: e,
						isHeaderDropdownOpened: t,
						isSearchDropdownOpened: n
					} = this.props;
					return e || t || n
				}
				render() {
					const {
						isLoaded: e,
						isFullscreen: t,
						iframeURL: n,
						showModal: r
					} = this.state, i = this.isAnyRedditModalOpened();
					return o.a.createElement("div", {
						className: Object(d.a)(H.a.container, {
							[H.a.expanded]: t,
							[H.a.isSubscriptionsPinned]: this.props.isSubscriptionsPinned
						})
					}, n && o.a.createElement("iframe", {
						ref: this.iframeRef,
						onLoad: this.onLoad,
						onError: this.onError,
						className: H.a.iframe,
						allow: "web-share; clipboard-read; clipboard-write",
						src: n
					}), !e && o.a.createElement("img", {
						className: H.a.garlicBreadIcon,
						src: `${s.a.assetPath}/img/pixel-loader.gif`
					}), e && (!t || i) && o.a.createElement("div", {
						className: H.a.overlay,
						onClick: this.onOverlayClick
					}), r === Y.VerifyEmail && o.a.createElement(Z, {
						email: this.props.email,
						onPrimaryButtonClick: this.onClickVerifyEmail,
						onSecondaryButtonClick: () => this.setState({
							showModal: Y.None
						})
					}), r === Y.AddEmail && o.a.createElement(J, {
						onSecondaryButtonClick: () => this.setState({
							showModal: Y.None
						})
					}))
				}
			}
			t.a = Object(S.c)(ee(te))
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/reddit/featureFlags/index.ts");
			const d = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => n.e("GovernanceWalletRegistration").then(n.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(i.c)({
				featureEnabled: c.d.spWalletRegistrationBanner
			});
			t.a = Object(o.b)(l)((function(e) {
				return r.a.createElement(d, e)
			}))
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "d", (function() {
				return m
			})), n.d(t, "h", (function() {
				return b
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return h
			})), n.d(t, "c", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/config.ts"),
				o = n("./src/lib/pubsub/index.ts"),
				i = n("./src/reddit/constants/listings.ts"),
				a = n("./src/reddit/constants/page.ts");
			const c = e => e && e.toLowerCase() === i.b.Popular,
				d = e => e && e.toLowerCase() === i.b.All,
				l = e => e && e === a.c,
				u = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: n,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, n, o, a, m, {
						listingName: b,
						subreddit: p,
						idCardWidget: h
					} = e;
					const f = h && h.subscribersText || s.fbt._("Members", null, {
							hk: "1dldMb"
						}),
						g = h && h.currentlyViewingText || s.fbt._("Online", null, {
							hk: "36JX70"
						});
					let x, E;
					return l(b) ? (t = `${r.a.assetPath}/img/id-cards/home-banner@2x.png`, o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), m = i.c[i.b.Home], n = s.fbt._("Your personal Reddit frontpage. Come here to check in with your favorite communities.", null, {
						hk: "2MHNRd"
					}), a = s.fbt._("Home", null, {
						hk: "9xVXB"
					})) : d(b) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The most active posts from all of Reddit. Come here to see new posts rising and be a part of the conversation.", null, {
						hk: "1JjI5"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/all", m = i.c[i.b.All]) : c(b) ? (t = `${r.a.assetPath}/img/id-cards/banner@2x.png`, n = s.fbt._("The best posts on Reddit for you, pulled from the most active communities on Reddit. Check here to see the most shared, upvoted, and commented content on the internet.", null, {
						hk: "4dykC2"
					}), o = u(`url('${r.a.assetPath}/img/id-cards/snoo-home@2x.png')`), a = "r/popular", m = i.c[i.b.Popular]) : b && (n = h && h.description, o = u(""), a = p.displayText, m = p.url, E = h && h.subscribersCount, x = h && h.currentlyViewingCount), {
						snooBackground: o,
						description: n,
						titleText: a,
						url: m,
						subscribersCount: E,
						subscribersText: f,
						currentlyViewingText: g,
						currentlyViewingCount: x,
						...t ? {
							bannerBackgroundImage: t
						} : {}
					}
				},
				b = new o.a,
				p = "VISIBLE",
				h = "NOT_VISIBLE",
				f = e => b.publish(e ? p : h)
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-InFeedPostCreation").then(n.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, n) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx");
			const d = c.a.div("IconWrapper", a.a),
				l = c.a.div("TextWrapper", a.a);

			function u(e) {
				const {
					className: t,
					color: n,
					icon: s,
					subtitle: i,
					title: c,
					textWrapperClassName: u
				} = e;
				return r.a.createElement("div", {
					className: Object(o.a)(t, a.a.wrapper),
					style: n && {
						borderColor: n
					} || {}
				}, r.a.createElement("div", {
					className: a.a.leftSideRectangle,
					style: n && {
						backgroundColor: n
					} || {}
				}), s ? r.a.createElement(d, null, s) : r.a.createElement(d, null), r.a.createElement(l, {
					className: u
				}, r.a.createElement("div", {
					className: a.a.title
				}, c), i && r.a.createElement("div", {
					className: a.a.subtitle
				}, i)))
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = n("./src/reddit/constants/colors.ts"),
				l = n("./src/reddit/controls/InternalLink/index.tsx"),
				u = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				p = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				h = n.n(p);
			const f = o.a.createElement(u.a, {
					className: h.a.icon
				}),
				g = Object(a.c)({
					subreddit: m.C,
					subredditAboutInfo: m.z
				}),
				x = Object(i.b)(g);
			t.a = x(e => {
				const {
					subreddit: t,
					subredditAboutInfo: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const r = n && n.quarantineMessageHtml,
					i = n && n.quarantineMessage || s.fbt._("It is dedicated to shocking or highly offensive content.", null, {
						hk: "2QoofC"
					});
				return o.a.createElement(b.a, {
					className: h.a.container,
					color: d.a.quarantine,
					icon: f,
					subtitle: o.a.createElement("span", null, s.fbt._("This community is {=quarantined}", [s.fbt._param("=quarantined", o.a.createElement("a", {
						className: h.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank",
						rel: "noopener noreferrer"
					}, s.fbt._("quarantined", null, {
						hk: "2XqfJa"
					})))], {
						hk: "AG2cS"
					}), ": ", r ? o.a.createElement(c.a, {
						className: h.a.rawHtmlDisplay,
						html: r
					}) : i, " ", o.a.createElement(l.default, {
						className: h.a.link,
						to: "/"
					}, s.fbt._("Click to return home.", null, {
						hk: "3FgSpg"
					}))),
					title: s.fbt._("Community Quarantined", null, {
						hk: "3RKbEl"
					})
				})
			})
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return g
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/componentSizes.ts"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/controls/Button/index.tsx"),
				l = n("./src/reddit/components/JumpToContent/index.m.less"),
				u = n.n(l);
			const m = Object(r.createContext)(null),
				b = Object(r.createContext)(null);
			class p extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						handleRef: null
					}, this.setHandleRef = e => {
						this.state.handleRef !== e && this.setState({
							handleRef: e
						})
					}
				}
				render() {
					return o.a.createElement(m.Provider, {
						value: this.props.isOverlayOpen ? null : this.state.handleRef
					}, o.a.createElement(b.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const h = a.f + 10,
				f = o.a.memo(() => {
					const [e, t] = Object(r.useState)("-500px"), n = Object(r.useContext)(c.a);
					return o.a.createElement(m.Consumer, null, r => r && o.a.createElement("div", {
						className: Object(i.a)(u.a.wrapper, {
							[u.a.wrapperExp]: n
						}),
						"data-testid": "jump-to-content"
					}, o.a.createElement(d.t, {
						kind: d.b.Button,
						priority: d.c.Plain,
						className: u.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const n = e.currentTarget.clientWidth + 55;
							t(`-${n}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							r.focus(), r.scrollIntoView(), window.scrollBy(0, -h)
						}
					}, s.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(i.a)(u.a.rightBorder, {
							[u.a.rightBorderExp]: n
						})
					})))
				}),
				g = o.a.memo(() => o.a.createElement(b.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/PostList/index.tsx"),
				r = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(s.a)
		},
		"./src/reddit/components/NewPostPill/index.m.less": function(e, t, n) {
			e.exports = {
				wrapper: "_369llFshxbL10dgfLlIApJ",
				joinOptimizationsM2: "_3Osc6MFU-m49imecphhHPb",
				caption: "_2TsfnDXso674GKQKeaYyJz",
				wrapperExp: "_1rsB1M-j-PhnVlJxrOyQWm",
				memberIcon: "DnG050aRzI2YZFy5DI13M",
				presenceDotOutlineClass: "_1UJxCy40wXDQVKcZcKkJy7"
			}
		},
		"./src/reddit/components/NewPostPill/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx"),
				c = n("./src/reddit/contexts/NavbarExp.ts"),
				d = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				l = n("./src/reddit/components/NewPostPill/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				const {
					onClick: t,
					subredditName: n
				} = e, l = Object(s.useContext)(c.a), b = Object(o.e)(e => Object(d.a)(e) || Object(d.c)(e));
				return r.a.createElement("div", {
					className: Object(i.a)(u.a.wrapper, {
						[u.a.wrapperExp]: l,
						[u.a.joinOptimizationsM2]: b
					}),
					onClick: t
				}, r.a.createElement(a.a, {
					iconsKey: n,
					shouldShowPresenceDot: !0,
					memberIconClassName: u.a.memberIcon,
					presenceDotOutlineClassName: u.a.presenceDotOutlineClass
				}), r.a.createElement("label", {
					className: u.a.caption
				}, m._("New Posts", null, {
					hk: "3tuby1"
				})))
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPicker.m.less": function(e, t, n) {
			e.exports = {
				InterestListButtons: "_3miLvWoAksppOIKDbHmCpH",
				interestListButtons: "_3miLvWoAksppOIKDbHmCpH",
				InterestButton: "_3oCL2oMbe3H81mue3bR1CQ",
				interestButton: "_3oCL2oMbe3H81mue3bR1CQ",
				sharedButtonStyles: "nGPPVLjaF9xHLhEfs0OCV",
				Selected: "_9bvUa3_8YwoacACdyRw_T",
				selected: "_9bvUa3_8YwoacACdyRw_T",
				Placeholder: "_3lj8QAQ0ABoP56baCrm__e",
				placeholder: "_3lj8QAQ0ABoP56baCrm__e",
				Icon: "_3DtgruA-lLYrQl-qbVEgJm",
				icon: "_3DtgruA-lLYrQl-qbVEgJm",
				isLeft: "_1U2p5JzQnPfAZNB3-974OG",
				isRight: "_3szUhYjG4tA4Hqfi9MD1fa",
				headerBarImproved: "_3WIacLhd307x2JsrQHXeSe",
				InterestPickerPreview: "_3mV_F85IUlHJXj6vglN9dL",
				interestPickerPreview: "_3mV_F85IUlHJXj6vglN9dL",
				Dismissed: "_3RAeTThkWAn32hs_GxGw58",
				dismissed: "_3RAeTThkWAn32hs_GxGw58",
				InterestPickerPreviewTopBorder: "_25lW6DMq80IbK6ieXPoFp_",
				interestPickerPreviewTopBorder: "_25lW6DMq80IbK6ieXPoFp_",
				InterestPickerPreviewHeader: "_3153esXkC4o22mmMb4NEwq",
				interestPickerPreviewHeader: "_3153esXkC4o22mmMb4NEwq",
				InterestListItem: "OuNwEANldIlJWdGdhx4Ah",
				interestListItem: "OuNwEANldIlJWdGdhx4Ah",
				Title: "_3rvplkPXZC8aONpCwbcmBN",
				title: "_3rvplkPXZC8aONpCwbcmBN",
				ChooseMore: "_3_KngAlh-KmD6kGmN3AnAs",
				chooseMore: "_3_KngAlh-KmD6kGmN3AnAs",
				CaretRight: "_1LQqSQrTWMFaG2ofR18jvF",
				caretRight: "_1LQqSQrTWMFaG2ofR18jvF",
				DismissButton: "_1g-0M7zTPIr2nIPPr-AHJh",
				dismissButton: "_1g-0M7zTPIr2nIPPr-AHJh"
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPickerPreview.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return j
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/actions/login.ts"),
				a = n("./src/reddit/components/Onboarding/Interests/InterestPill.tsx"),
				c = n("./src/reddit/components/Scroller/ScrollChild.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/constants/experiments.ts"),
				u = n("./src/reddit/helpers/counters/onboarding.ts"),
				m = n("./src/reddit/helpers/onboarding/reonboarding.ts"),
				b = n("./src/reddit/helpers/trackers/onboarding.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				h = n("./src/reddit/layout/row/InlineButton/index.tsx"),
				f = n("./src/reddit/models/Onboarding/index.ts"),
				g = n("./src/reddit/selectors/experiments/onboarding.ts"),
				x = n("./src/lib/classNames/index.ts"),
				E = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				v = n.n(E);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = e => {
				let {
					interests: t
				} = e;
				const n = Object(o.d)(),
					c = Object(d.b)(),
					E = Object(o.e)(g.j),
					_ = E === l.lb.Feed ? t.topics.slice(0, 5) : t.topics,
					[j, O] = Object(s.useState)(!1),
					[C, N] = Object(s.useState)(),
					S = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
						e ? (N(e), c(Object(b.D)(null == e ? void 0 : e.topic, null == e ? void 0 : e.id))) : c(Object(b.B)()), n(Object(i.openD2xOnboardingModal)({
							type: f.d.REONBOARDING,
							selectedInterests: e ? {
								[e.id]: []
							} : {}
						})), Object(u.b)(f.f.Popover, E)
					},
					I = Object(s.useCallback)(() => {
						Object(m.a)(), c(Object(b.C)()), O(!0)
					}, [c]);
				return Object(m.b)() ? r.a.createElement("div", {
					className: Object(x.a)(v.a.InterestPickerPreview, {
						[v.a.Dismissed]: j
					})
				}, r.a.createElement("div", {
					className: v.a.InterestPickerPreviewTopBorder
				}), r.a.createElement("div", {
					className: v.a.InterestPickerPreviewHeader
				}, r.a.createElement("h3", {
					className: v.a.Title
				}, y._("What do you want to see more of?", null, {
					hk: "35GlAb"
				})), r.a.createElement("button", {
					"aria-label": y._("Dismiss", null, {
						hk: "2x5qvs"
					}),
					onClick: I
				}, r.a.createElement(p.a, {
					name: "close",
					className: v.a.DismissButton
				}))), r.a.createElement("ul", {
					className: v.a.InterestListButtons
				}, _.map((e, t) => {
					const n = e.topic;
					return r.a.createElement("li", {
						className: v.a.InterestListItem,
						key: e.id
					}, r.a.createElement(a.a, {
						colorIndex: t,
						isSelected: e === C,
						onClickHandler: () => S(e),
						topic: n
					}))
				})), r.a.createElement(h.a, {
					className: v.a.ChooseMore,
					onClick: () => S()
				}, y._("Choose more topics", null, {
					hk: "2bFeJ4"
				}), r.a.createElement(p.a, {
					className: v.a.CaretRight,
					name: "caret_right"
				}))) : null
			}, j = e => {
				let {
					children: t,
					desiredIdx: n,
					interests: s,
					sendEvent: o,
					variant: i
				} = e;
				return {
					child: {
						id: "interest-topic-recommendations",
						estHeight: 300,
						trackOnEnteredViewport: () => {
							Object(m.d)(), Object(u.b)(f.f.Feed, i), o(Object(b.E)())
						},
						render: () => r.a.createElement(_, {
							interests: s
						})
					},
					idx: Object(c.a)(n, t)
				}
			}
		},
		"./src/reddit/components/Onboarding/Interests/InterestPill.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/Button/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/polished/dist/polished.es.js"),
				c = n("./src/reddit/components/Onboarding/Interests/InterestPicker.m.less"),
				d = n.n(c);
			const l = (e, t, n) => {
					if (!t && !n) return {};
					let s = u(e);
					return n && !t && (s = Object(a.f)(s, .25)), {
						backgroundColor: s
					}
				},
				u = e => m[e % 7],
				m = ["#c08d41", "#ffa800", "#ff4500", "#ff3881", "#b44ac0", "#6a5cff", "#3690ea"];
			t.a = e => {
				let {
					colorIndex: t = 0,
					isSelected: n = !1,
					isSubtopic: s = !1,
					onClickHandler: a,
					topic: c
				} = e;
				return r.a.createElement(o.t, {
					className: Object(i.a)(d.a.InterestButton, {
						[d.a.Selected]: n
					}),
					kind: o.b.Button,
					onClick: a,
					style: l(t, n, s)
				}, c)
			}
		},
		"./src/reddit/components/PrivateFeedPage/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/userPrefs.ts");
			const c = e => {
				let {
					isLoggedIn: t,
					isNightmodeOn: n
				} = e;
				const r = Object(i.e)(a.c),
					c = t ? n ? `${s.a.assetPath}/img/private-feeds/dark_logged_in.jpg` : `${s.a.assetPath}/img/private-feeds/light_logged_in.jpg` : n ? `${s.a.assetPath}/img/private-feeds/dark_logged_out.jpg` : `${s.a.assetPath}/img/private-feeds/light_logged_out.jpg`,
					d = o.a.createElement("img", {
						className: "absolute",
						src: c,
						style: {
							height: "calc(100vh - 50px)"
						}
					});
				return o.a.createElement("div", {
					className: `absolute w-screen flex ${r?"":"justify-center"}`,
					style: {
						backgroundColor: "var(--newCommunityTheme-canvas)",
						height: "calc(100vh - 50px)"
					}
				}, d)
			}
		},
		"./src/reddit/components/RandomBaseUserIcons/RandomBaseUserIcons.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./node_modules/lodash/sampleSize.js"),
				c = n.n(a),
				d = n("./src/reddit/helpers/getFakeUserIcons.ts"),
				l = n("./src/reddit/hooks/useConstructor.ts"),
				u = n("./src/reddit/components/RandomBaseUserIcons/index.m.less"),
				m = n.n(u);
			const b = Object(s.a)({
					resolved: {},
					chunkName: () => "reddit-components-UserIcon-PresenceDot",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => Promise.resolve().then(n.bind(null, "./src/reddit/components/UserIcon/PresenceDot.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/UserIcon/PresenceDot.tsx"
					}
				}),
				p = 8,
				h = 3,
				f = e => {
					const {
						iconsKey: t,
						memberIconClassName: n,
						numVisibleIcons: s = h,
						presenceDotOutlineClassName: a,
						shouldShowPresenceDot: u,
						wrapperClassName: f
					} = e, g = Object(r.useRef)([]);
					return Object(l.a)(() => {
						const e = Object(d.a)(t, p, !0);
						g.current = c()(e, s)
					}), o.a.createElement("div", {
						className: Object(i.a)(m.a.membersIcons, f)
					}, g.current.map((e, t) => {
						let {
							color: r,
							image: c
						} = e;
						return t === s - 1 && u ? o.a.createElement("div", {
							className: m.a.presenceWrapper,
							key: t
						}, o.a.createElement("img", {
							className: Object(i.a)(m.a.memberIcon, n),
							src: c,
							style: {
								backgroundColor: r
							}
						}), o.a.createElement(b, {
							showPresence: !0,
							outlineClassName: a
						})) : o.a.createElement("img", {
							className: Object(i.a)(m.a.memberIcon, n),
							key: t,
							src: c,
							style: {
								backgroundColor: r
							}
						})
					}))
				};
			t.a = f
		},
		"./src/reddit/components/RandomBaseUserIcons/index.m.less": function(e, t, n) {
			e.exports = {
				membersIcons: "_1W1pLIfaIb8rYU6YeTdAk6",
				memberIcon: "_1H6Meh6ZAemKxOJDOEasfK",
				presenceWrapper: "_30vlMmCcnqKnXP1t-fzm0e"
			}
		},
		"./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return z
			})), n.d(t, "b", (function() {
				return Q
			}));
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/hooks/useTracking.ts"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				l = n("./node_modules/react-redux/es/index.js"),
				u = n("./src/lib/prettyPrintNumber/index.ts"),
				m = n("./src/reddit/components/SubredditIcon/index.tsx"),
				b = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = n("./src/reddit/constants/posts.ts"),
				h = n("./src/reddit/constants/tracking.ts"),
				f = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.CLOSE = "close", e.SHOW_MORE = "show_more", e.TITLE_SUBREDDIT = "title_subreddit", e.RECOMMENDATION_MODULE = "recommendation_module", e.SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(s || (s = {}));
			const g = "related_community_recommendations_v1",
				x = (e, t) => {
					let {
						postId: n,
						subredditId: s,
						variant: r,
						numberItems: o,
						seenItems: i,
						seen: a = !0,
						modelVersion: c = g,
						pageType: d
					} = e;
					return {
						...f.q(t),
						post: n ? f.M(t, n) : void 0,
						source: "cdd_discovery_unit",
						actionInfo: {
							pageType: d,
							reason: s
						},
						discoveryUnit: {
							id: "related_communities_recommendations",
							name: c,
							type: r
						},
						visibility: {
							number_items: o,
							number_seen_items: i.length,
							seen_items: i,
							seen: a
						}
					}
				};
			var E = n("./src/reddit/constants/experiments.ts"),
				v = n("./src/reddit/controls/InternalLink/index.tsx"),
				y = n("./src/lib/initializeClient/installReducer.ts"),
				_ = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/reddit/actions/relatedCommunitiesRecommendations/constants.ts"));
			const j = {
				subreddits: [],
				error: null,
				loaded: !1,
				pending: !1
			};
			var O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.b: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									pending: !0
								}
							}
						}
						case _.c: {
							const {
								subredditId: n,
								subreddits: s = {},
								modelVersion: r
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									modelVersion: r,
									subreddits: Object.keys(s),
									error: null,
									loaded: !0,
									pending: !1
								}
							}
						}
						case _.a: {
							const {
								subredditId: n
							} = t.payload;
							return {
								...e,
								[n]: {
									...e[n],
									error: t.payload,
									loaded: !0,
									pending: !1
								}
							}
						}
						default:
							return e
					}
				},
				C = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./node_modules/reselect/es/index.js");
			Object(y.a)({
				features: {
					relatedCommunitiesRecommendations: O
				}
			});
			const S = Object(N.a)([(e, t) => {
					var n, s, r;
					return null !== (r = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.relatedCommunitiesRecommendations) || void 0 === s ? void 0 : s[t]) && void 0 !== r ? r : j
				}], e => e),
				I = Object(N.a)([(e, t) => S(e, t)], e => {
					var t;
					return null !== (t = null == e ? void 0 : e.subreddits) && void 0 !== t ? t : []
				}),
				P = Object(N.a)([e => e, C.fb], (e, t) => t.map(t => ({
					...t,
					...Object(C.y)(e, {
						subredditId: t.id
					})
				})));
			var k = n("./src/config.ts");
			const {
				fbt: w
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var L, T = e => {
				let {
					seed: t
				} = e;
				const n = Math.min(3 * (t + 1), 37),
					s = [n, n + 1, n + 2];
				return i.a.createElement("div", {
					"data-testid": "avatar-group"
				}, null == s ? void 0 : s.map((e, t) => i.a.createElement("img", {
					key: e,
					className: "w-[16px] h-[20px] ml-[-4px] first:ml-0",
					src: `${k.a.assetPath}/img/talk/avatars/${e}.png`,
					alt: w._("Online members", null, {
						hk: "3uJPWb"
					})
				})))
			};

			function A(e) {
				switch (e) {
					case E.yf.Minimalist:
					case E.wf.Minimalist:
					case E.xf.Minimalist:
						return L.MINIMALIST;
					case E.yf.HotnessSignals:
					case E.wf.SocialSignals:
					case E.xf.SocialSignals:
						return L.SIGNALS;
					case E.yf.Description:
					case E.wf.Description:
					case E.xf.Description:
						return L.DESCRIPTION
				}
				return L.MINIMALIST
			}! function(e) {
				e[e.MINIMALIST = 0] = "MINIMALIST", e[e.SIGNALS = 1] = "SIGNALS", e[e.DESCRIPTION = 2] = "DESCRIPTION"
			}(L || (L = {}));
			const B = e => {
				let {
					recommendedCommunities: t,
					numberOfVisibleItems: n,
					variant: o,
					postId: d,
					originalSubredditId: g,
					pageType: E,
					columnLayout: y = "single",
					dismissCallback: _
				} = e;
				const j = Object(c.a)(),
					O = Object(l.e)(e => P(e, {
						subredditIds: t
					})),
					C = {
						postId: d,
						subredditId: g,
						variant: o,
						numberItems: t.length,
						seenItems: t.slice(0, n),
						pageType: E
					},
					N = A(o);
				return i.a.createElement("ul", {
					className: `pb-[8px] ${"double"===y&&"grid gap-4 grid-cols-2"}`,
					"data-testid": "recommended-community-list"
				}, O.map((e, t) => {
					let {
						id: o,
						subscribers: c,
						accountsActive: d,
						icon: l,
						communityIcon: g,
						name: E,
						url: O,
						displayText: S,
						publicDescription: I
					} = e;
					if (t >= n) return null;
					const P = r.fbt._({
							"*": "{Number of subscribers} members",
							_1: "{Number of subscribers} member"
						}, [r.fbt._param("Number of subscribers", Object(u.b)(c)), r.fbt._plural(c)], {
							hk: "3fAm5T"
						}),
						k = d ? `• ${r.fbt._("{Number of subscribers online} Online",[r.fbt._param("Number of subscribers online",Object(u.b)(d))],{hk:"4s9dx5"})}` : "",
						w = () => {
							_ && _(), j(((e, t, n) => r => ({
								...x(e, r),
								subreddit: f.ob(r, t),
								action: h.c.CLICK,
								noun: s.TITLE_SUBREDDIT,
								actionInfo: {
									...x(e, r).actionInfo,
									position: n
								}
							}))(C, o, t))
						};
					return i.a.createElement("li", {
						key: o,
						className: "px-[16px] py-[8px] flex items-start"
					}, i.a.createElement("div", {
						onClick: w
					}, i.a.createElement(m.b, {
						iconUrl: (null == l ? void 0 : l.url) || g,
						className: "block !w-[32px] !h-[32px] rounded-full !text-[32px] !leading-none",
						linkTo: O || `/${S}`
					})), i.a.createElement("div", {
						className: `${"single"===y&&"truncate"} flex flex-col w-100`
					}, i.a.createElement("div", {
						className: "flex items-start"
					}, i.a.createElement("div", {
						className: "ml-[8px] min-w-0"
					}, i.a.createElement(v.default, {
						className: "text-[14px] leading-[16px] font-semibold text-neutral-content-strong truncate",
						to: O || `/${S}`,
						onClick: w
					}, S, i.a.createElement("div", {
						className: "mt-[4px] text-[12px] leading-[14px] font-normal text-neutral-content-weak truncate"
					}, N === L.MINIMALIST && P, (N === L.SIGNALS || N === L.DESCRIPTION) && i.a.createElement("div", {
						className: "flex gap-x-xs justify-start items-center"
					}, i.a.createElement(T, {
						seed: t
					}), i.a.createElement("div", null, `${P} ${k}`))))), i.a.createElement(b.a, {
						doNotHideOtherSubscribeButtons: !0,
						className: "ml-auto mt-[2px]",
						postId: o,
						identifier: {
							name: E,
							type: p.a.SUBREDDIT
						},
						size: a.d.XS,
						getEventFactory: e => e ? ((e, t, n) => r => ({
							...x(e, r),
							subreddit: f.ob(r, t),
							action: h.c.CLICK,
							noun: s.SUBREDDIT_UNSUBSCRIBE,
							actionInfo: {
								...x(e, r).actionInfo,
								position: n
							}
						}))(C, o, t) : ((e, t, n) => r => ({
							...x(e, r),
							subreddit: f.ob(r, t),
							action: h.c.CLICK,
							noun: s.SUBREDDIT_SUBSCRIBE,
							actionInfo: {
								...x(e, r).actionInfo,
								position: n
							}
						}))(C, o, t)
					})), N === L.DESCRIPTION && i.a.createElement("div", {
						className: `pt-[4px] ml-[8px] pr-sm text-[12px] leading-[14px] font-normal text-neutral-content-weak ${"double"===y?"[-webkit-line-clamp:3] [text-overflow:ellipsis] [display:-webkit-box] [-webkit-box-orient:vertical] max-h-[4.143em] overflow-hidden":"truncate"}`
					}, i.a.createElement(v.default, {
						to: O || `/${S}`,
						onClick: w
					}, I))))
				}))
			};
			var R = n("./src/lib/makeActionCreator/index.ts"),
				M = n("./src/lib/makeGqlRequest/index.ts"),
				D = n("./src/lib/makeRequest/index.ts"),
				U = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				F = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				V = n("./src/redditGQL/operations/GetRelatedCommunityRecommendations.json");
			const q = async (e, t) => {
				const n = await Object(M.a)(e, {
					...V,
					variables: t
				});
				if (!Object(D.c)(n)) throw new Error("Encountered an error while fetching live discovery content");
				return (e => {
					var t, n, s, r;
					const o = {
						modelVersion: null !== (n = null === (t = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === t ? void 0 : t.modelVersion) && void 0 !== n ? n : "related_community_recommendations_v1",
						aboutInfo: {},
						models: {}
					};
					return null === (r = null === (s = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === s ? void 0 : s.recommendations) || void 0 === r ? void 0 : r.reduce((e, t) => e = {
						...e,
						models: {
							...e.models,
							[t.id]: Object(F.a)(t)
						},
						aboutInfo: {
							...e.aboutInfo,
							...Object(U.a)(t)
						}
					}, o)
				})(n.body.data)
			};
			Object(y.a)({
				features: {
					relatedCommunitiesRecommendations: O
				}
			});
			const W = Object(R.a)(_.b),
				H = Object(R.a)(_.c),
				G = Object(R.a)(_.a),
				K = e => async (t, n, s) => {
					let {
						gqlContext: r
					} = s;
					t(W({
						subredditId: e
					}));
					try {
						const n = await q(r(), {
							subredditId: e
						});
						t(H({
							subredditId: e,
							modelVersion: n.modelVersion,
							subreddits: n.models,
							subredditAboutInfo: n.aboutInfo
						}))
					} catch (o) {
						t(G({
							subredditId: e,
							ApiError: o
						}))
					}
				};
			var z;
			! function(e) {
				e.Home = "home", e.Profile = "profile", e.Community = "community"
			}(z || (z = {}));
			const Q = e => {
				let {
					subredditDisplayText: t,
					variant: n,
					postId: u,
					subredditId: m,
					onDismiss: b,
					pageType: p
				} = e;
				const f = A(n),
					g = function(e) {
						let {
							pageType: t,
							activeUIVariant: n
						} = e;
						switch (t) {
							case z.Profile:
							case z.Community:
								return n === L.MINIMALIST ? "double" : "single";
							case z.Home:
							default:
								return "single"
						}
					}({
						pageType: p,
						activeUIVariant: f
					}),
					E = function(e, t) {
						return "double" === t ? e === L.DESCRIPTION ? 2 : 4 : 3
					}(f, g),
					[v, y] = Object(o.useState)(E),
					_ = Object(c.a)(),
					{
						recommendations: j,
						fetchPending: O,
						recommendationsLoaded: C,
						fetchError: N,
						modelVersion: P
					} = function(e) {
						let {
							subredditId: t
						} = e;
						const n = Object(l.d)(),
							s = Object(l.e)(e => I(e, t)),
							{
								pending: r,
								loaded: i,
								error: a,
								modelVersion: c
							} = Object(l.e)(e => S(e, t)),
							d = !i && !r;
						return Object(o.useEffect)(() => {
							d && n(K(t))
						}, [n, t, d]), {
							recommendations: s,
							fetchPending: r,
							recommendationsLoaded: i,
							fetchError: a,
							modelVersion: c
						}
					}({
						subredditId: m
					}),
					k = v < (j.length || 0),
					w = Object(o.useMemo)(() => !C || O ? null : N || j.length <= 0 ? {
						modelVersion: P,
						seen: !1,
						postId: u,
						subredditId: m,
						variant: n,
						numberItems: 0,
						seenItems: [],
						pageType: p
					} : {
						modelVersion: P,
						seen: !0,
						postId: u,
						subredditId: m,
						variant: n,
						numberItems: j.length,
						seenItems: j.slice(0, E),
						pageType: p
					}, [C, O, N, j, P, u, m, n, E, p]);
				if (Object(o.useEffect)(() => {
						_ && w && _((e => t => ({
							...x(e, t),
							action: h.c.VIEW,
							noun: s.RECOMMENDATION_MODULE
						}))(w))
					}, [_, w]), !C || j.length <= 0) return null;
				return i.a.createElement("div", {
					className: "bg-[color:var(--newCommunityTheme-body)] mb-[10px] border border-solid border-[color:var(--newCommunityTheme-postLine)] rounded-[4px]"
				}, i.a.createElement("div", {
					className: "px-[16px] py-[8px] flex items-center"
				}, i.a.createElement("h3", {
					className: "text-[14px] leading-[20px] font-semibold text-neutral-content-strong truncate min-w-0"
				}, r.fbt._("Similar to {subreddit display text}", [r.fbt._param("subreddit display text", t)], {
					hk: "2ZdEdB"
				})), i.a.createElement("button", {
					className: "ml-auto w-[16px] h-[16px] inline-block",
					"aria-label": r.fbt._("Hide Recommended Communities", null, {
						hk: "1D8cvx"
					}),
					onClick: () => {
						b(), w && _((e => t => ({
							...x(e, t),
							action: h.c.CLICK,
							noun: s.CLOSE
						}))({
							...w,
							seenItems: null == j ? void 0 : j.slice(0, v)
						}))
					}
				}, i.a.createElement(d.a, {
					className: "block w-full h-full text-neutral-content-weak",
					fill: "currentColor"
				}))), i.a.createElement(i.a.Fragment, null, i.a.createElement(B, {
					recommendedCommunities: j,
					numberOfVisibleItems: v,
					postId: u,
					originalSubredditId: m,
					variant: n,
					pageType: p,
					columnLayout: g,
					dismissCallback: b
				}), k && i.a.createElement("div", {
					className: "flex items-center justify-center pb-[8px]"
				}, i.a.createElement(a.a, {
					kind: a.b.Button,
					priority: a.c.Tertiary,
					onClick: () => {
						const e = v + E;
						y(e), _((e => t => ({
							...x(e, t),
							action: h.c.CLICK,
							noun: s.SHOW_MORE
						}))({
							...w,
							seenItems: null == j ? void 0 : j.slice(0, e)
						}))
					}
				}, r.fbt._("Show more", null, {
					hk: "2kAGl6"
				})))))
			}
		},
		"./src/reddit/components/RelatedSubredditsCarousel/async.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/selectors/experiments/joinOptimizations.ts");
			const c = Object(s.a)({
					resolved: {},
					chunkName: () => "RelatedSubredditsCarousel",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("RelatedSubredditsCarousel").then(n.bind(null, "./src/reddit/components/RelatedSubredditsCarousel/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/RelatedSubredditsCarousel/index.tsx"
					}
				}),
				d = e => {
					const t = Object(i.e)(a.f),
						n = Object(i.e)(a.a);
					return t || n ? o.a.createElement(c, e) : null
				}
		},
		"./src/reddit/components/Scroller/ScrollChild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			const s = (e, t) => {
				const n = new Set(Object.keys(t).map(e => parseInt(e, 10)));
				for (; n.has(e);) e++;
				return e
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, n) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("header", o.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				c = n.n(a);

			function d(e) {
				const {
					className: t,
					id: n,
					layoutBodyClassName: s,
					showCardView: a
				} = e, d = {
					[c.a["m-card"]]: a
				};
				return r.a.createElement("div", {
					id: n,
					className: Object(o.a)(c.a.container, d, t)
				}, r.a.createElement(i.a, {
					className: c.a.layout,
					bodyClassName: Object(o.a)(c.a.layoutBody, d, s),
					header: e.header,
					headerClassName: Object(o.a)(c.a.layoutHeader, d)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, n) {
			e.exports = {
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				container: "_3_c5cqV3WsdQo95Ql4El73",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				a = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				c = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				l = n.n(d);
			const {
				fbt: u
			} = n("./node_modules/fbt/lib/FbtPublic.js"), m = () => r.a.createElement(i.a, {
				className: l.a.duHeader
			}, u._("Trending today", null, {
				hk: "3rOxuO"
			})), b = Object(c.a)({
				isLoading: !0
			});
			t.a = e => r.a.createElement(a.a, {
				className: e.className,
				header: m(),
				layoutBodyClassName: l.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: l.a.post,
				key: `placeholder-post-${t}`
			}, r.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.one, b)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.desc, l.a.two, b)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.icon, b)
			}), r.a.createElement("div", {
				className: Object(o.a)(l.a.name, b)
			}))))
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, n) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/values.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/higherOrderComponents/makeAsync.tsx"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/lessComponent.tsx"),
				m = n("./src/lib/loadWithRetries/index.ts"),
				b = n("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				p = n("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = n("./src/reddit/icons/svgs/Close/index.tsx"),
				f = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/structuredStyles.ts"),
				x = n("./src/reddit/selectors/userPrefs.ts"),
				E = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				v = n.n(E);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), _ = u.a.div("BladeContainer", v.a), j = u.a.wrapped(h.a, "CloseIcon", v.a), O = u.a.div("LoadingTitleContainer", v.a), C = u.a.div("LoadingNavContainer", v.a), N = u.a.div("ShortLoadingNav", v.a), S = u.a.wrapped(p.a, "ThemedChevron", v.a), I = e => {
				let {
					...t
				} = e;
				return i.a.createElement(_, null, i.a.createElement(j, null), i.a.createElement(b.k, null, i.a.createElement(b.p, null, y._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), i.a.createElement(b.o, null, i.a.createElement(O, null, i.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingTitle, t.isLoading && v.a.loading)
				})), i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), i.a.createElement(S, null)), i.a.createElement(C, null, i.a.createElement(N, null), i.a.createElement(S, null)), i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), i.a.createElement(S, null)), i.a.createElement(C, null, i.a.createElement(N, null), i.a.createElement(S, null)), i.a.createElement(C, null, i.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), i.a.createElement(S, null)))))
			}, P = Object(d.a)({
				getComponent: () => Object(m.a)(() => Promise.all([n.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PostCreation~Settings~~f8934a85"), n.e("StructuredStyles")]).then(n.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => i.a.createElement(I, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => i.a.createElement(I, {
					gradientType: "posts",
					isLoading: !0
				})
			}), k = Object(c.c)({
				isEditing: g.i,
				isSubscriptionsPinned: x.c,
				moderatorPermissions: f.n
			});
			t.a = Object(a.b)(k)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? i.a.createElement("div", {
					className: Object(l.a)(v.a.Container, e.isSubscriptionsPinned && v.a.isSubscriptionPinned)
				}, e.children, i.a.createElement(P, {
					subredditId: e.subredditId
				})) : i.a.createElement(o.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class i extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return r.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var a = Object(o.a)(i);
			t.a = e => r.a.createElement(a, e)
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, n) {
			e.exports = {
				BaseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				baseButton: "_1LHxa-yaHJwrPK8kuyv_Y4",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = n("./src/reddit/components/SubscribeButton/Base.m.less"),
				d = n.n(c),
				l = n("./src/lib/classNames/index.ts");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = (e, t, n) => null != n ? n : t ? e : i.c.Plain,
				b = e => {
					let {
						border: t,
						priority: n,
						small: s,
						...r
					} = e;
					return o.a.createElement(i.t, u({}, r, {
						priority: m(i.c.Primary, t, n),
						className: Object(l.a)(r.className, d.a.BaseButton),
						size: s ? i.d.S : i.d.M
					}))
				},
				p = e => o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: d.a.UnsubscribeButtonDefault
				}, "subreddit" === e ? s.fbt._("Joined", null, {
					hk: "1MTmIz"
				}) : s.fbt._("Following", null, {
					hk: "1wQlVR"
				})), o.a.createElement("span", {
					className: d.a.UnsubscribeButtonHover
				}, "subreddit" === e ? s.fbt._("Leave", null, {
					hk: "2lLnnn"
				}) : s.fbt._("Unfollow", null, {
					hk: "2b5ERD"
				}))),
				h = e => {
					let {
						buttonType: t,
						border: n,
						priority: s,
						small: r,
						...a
					} = e;
					return o.a.createElement(i.t, u({}, a, {
						priority: m(i.c.Secondary, n, s),
						className: Object(l.a)(a.className, d.a.BaseButton),
						size: r ? i.d.S : i.d.M,
						text: p(t)
					}))
				};
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? (this.props.onUnsubscribe(), this.props.afterUnsubscribeAction && this.props.afterUnsubscribeAction()) : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						id: n,
						priority: s,
						small: r = !1,
						isFullWidth: i = !1,
						style: c
					} = this.props, d = {
						border: e,
						className: t,
						onClick: this.onClick,
						priority: s,
						small: r,
						isFullWidth: i,
						style: c
					};
					return this.props.userIsSubscriber ? o.a.createElement(h, u({}, d, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(b, u({}, d, {
						id: n
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: s,
							postId: o,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: b,
							onSubscriptionsRequested: p,
							priority: h,
							isShredditParityEnabled: f,
							...g
						} = this.props, x = this.state.isHovered, E = Object(c.a)({
							type: t.type,
							key: x ? "unsubscribe" : "subscribed"
						}), v = g.shouldReverseColor ? a.c.Secondary : a.c.Primary;
						return r.a.createElement(a.t, u({
							className: e,
							priority: h || v,
							rplStyle: f,
							text: E,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: a.d.XSP
						}, g))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: s,
							postId: o,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: b,
							onSubscriptionsRequested: p,
							priority: h,
							isShredditParityEnabled: f,
							...g
						} = this.props, x = Object(c.a)({
							type: t.type,
							key: "subscribe"
						}), E = g.shouldReverseColor ? a.c.Secondary : a.c.Primary;
						return r.a.createElement(a.t, u({
							className: e,
							priority: h || E,
							size: a.d.XSP,
							rplStyle: f,
							text: x,
							onClick: this.onClick
						}, g, {
							id: `subscribe-button-${o}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: n
					} = this.props;
					return t ? this.state.hasJustSubscribed || n ? this.renderUnsubscribeButton() : e ? null : r.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(o.c)(b))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: n
					} = e;
					return o[r({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(o.a))
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-TabBadger-Component").then(n.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/TabBadger/Loader.ts"),
				c = n("./src/reddit/components/TrackingHelper/index.tsx"),
				d = n("./src/reddit/selectors/platform.ts"),
				l = n("./src/reddit/selectors/posts.ts");
			const u = Object(i.c)({
					postCount: l.L,
					previousPageIsOverlay: d.p,
					tabBadged: e => e.tabBadged
				}),
				m = Object(o.b)(u);
			t.a = m(Object(c.c)(e => 0 === e.postCount ? null : r.a.createElement(a.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged
			})))
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.m.less": function(e, t, n) {
			e.exports = {
				overlay: "_2Gv5G082cUjYdQRyoGXyAo",
				modal: "_1_2jhTQc4DA7TtWS6g9BMN",
				cta: "_2GSkrIFkojWV3L0GzQPQ78",
				container: "g5yPbEIdjTE_wRlUoB82A",
				mainCta: "_2apx5_qKmY03WoZFb8YVu1",
				contentTitle: "_3eTqEK57FN9xurcrP9z4",
				warning: "_3jyZ6ZfaXFxWYcy9cal-xq",
				cancel: "Dkz3nRKFsS5yIm6e4o93l",
				continue: "_2iLUa1DN5bY9-oFqq3UDXm",
				dismiss: "jUfd4Daob69A2WDKby-IL",
				logIn: "_2k4QV3liMMQG8PMmBZdd_g",
				footerWrapper: "_1pjB5spDy43eUJW4x-wgvf",
				qrCodeOuter: "_2d-IWyIU0ITjihi9gW-H",
				qrCodeInner: "_2j_QTfhxnvmU-5PbhFmkfw",
				qrCode: "_2jh657b-F4yvqS49IkMjU8",
				sneakySnoo: "_3ybMuGXl2IGX8TdC6DdPZL",
				copyLine1: "_1SEuCrIhIH261lEivbj87_",
				copyLine2: "_2qkRHAALu7ZMIjqb5wD8uk",
				skippable_buttons: "_1MAcix3j31wLzUvbdrW7Qn",
				skippableButtons: "_1MAcix3j31wLzUvbdrW7Qn",
				skippable_text: "_34buUN_wpZWBk7ZZDKk22N",
				skippableText: "_34buUN_wpZWBk7ZZDKk22N",
				divider: "_1JdIhyGz5k8UXyob0yI3eQ",
				dividerLine: "_2EgPyPNCnTr8g29n_87SnQ",
				dividerText: "_2XFvLCiMiPd0uBLWJYtxVx",
				no_border: "_2Mu2w6atAZCJ-gttdRheE",
				noBorder: "_2Mu2w6atAZCJ-gttdRheE",
				contentDescription: "_2jlY07_8wxFjuu6Ecrk9zV",
				warning__bypassable: "_38T2FKI5k99IDlivrOi6kk",
				warningBypassable: "_38T2FKI5k99IDlivrOi6kk"
			}
		},
		"./src/reddit/components/Upsell/NsfwBlocking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			}));
			var s = n("./src/config.ts"),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				d = n("./src/higherOrderComponents/asModal/helpers.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				m = n("./src/reddit/actions/login.ts"),
				b = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/components/Footer/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				f = n("./src/reddit/constants/experiments.ts"),
				g = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				E = n("./src/reddit/helpers/counters/nsfwBypassableBlocking.ts"),
				v = n("./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts"),
				y = n("./src/reddit/helpers/trackers/nsfwSignupUpsell.ts"),
				_ = n("./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx"),
				j = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				O = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				C = n("./src/reddit/actions/contentGate.ts"),
				N = n("./src/reddit/components/Upsell/NsfwBlocking/index.m.less"),
				S = n.n(N);
			const I = {
					d2x_nsfw_signup_blocking_de_v1: `${s.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`,
					d2x_nsfw_signup_blocking_non_us_v1: `${s.a.assetPath}/img/nsfw-blocking-promo/d2x_nsfw_signup_blocking_de_v1_QR-code.jpeg`
				},
				P = () => r.fbt._("Log In", null, {
					hk: "4BITk"
				}),
				k = () => r.fbt._("I'm not over 18", null, {
					hk: "11UX9Q"
				}),
				w = e => {
					const t = Object(a.d)(),
						n = Object(h.b)(),
						s = Object(a.e)(j.g),
						l = Object(o.useCallback)(() => {
							s === j.a.Blurred && t(Object(b.k)({
								actionSource: b.a.NsfwBlockingModal
							}))
						}, [t, s]),
						u = (e => e ? i.a.createElement("div", {
							className: S.a.cta
						}, r.fbt._("To show mature content,", null, {
							hk: "5xfDy"
						}), i.a.createElement("br", null), r.fbt._("log in to confirm you're over 18", null, {
							hk: "29imoi"
						})) : i.a.createElement("div", {
							className: S.a.cta
						}, r.fbt._("Log in to confirm you're over 18", null, {
							hk: "RUR2Z"
						})))(s === j.a.Blurred);
					return Object(o.useEffect)(() => {
						Object(x.d)(s)
					}, [s]), i.a.createElement("div", {
						className: S.a.mainCta
					}, i.a.createElement(_.b, null), u, i.a.createElement("div", {
						className: S.a.contentTitle
					}, e.contentTitle), i.a.createElement("div", {
						className: S.a.warning
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "3cUxXS"
					}))()), i.a.createElement("div", {
						className: S.a.buttonContainer
					}, i.a.createElement(g.j, {
						className: S.a.logIn,
						onClick: () => {
							n(Object(y.a)()), l(), Object(x.c)(x.a.Login), t(Object(m.openLoginModal)())
						}
					}, P()), i.a.createElement(g.j, {
						className: S.a.cancel,
						onClick: () => {
							Object(d.b)(), n(Object(y.b)()), Object(x.c)(x.a.Dismiss), t(Object(c.b)("/"))
						}
					}, k())))
				},
				L = Object(u.a)(e => {
					const t = `${s.a.assetPath}/img/nsfw-blocking-promo/snoovatar_anonymous_cropped.png`;
					return i.a.createElement("div", {
						className: S.a.qrCodeOuter
					}, i.a.createElement("div", {
						className: S.a.qrCodeInner
					}, i.a.createElement("img", {
						className: S.a.qrCode,
						alt: r.fbt._("QR Code to get the Reddit app", null, {
							hk: "2uYhIL"
						}),
						src: e.qrCodeAsset
					}), i.a.createElement("div", {
						className: S.a.copyLine1
					}, (() => r.fbt._("Download the app to use", null, {
						hk: "4i9ZxV"
					}))()), i.a.createElement("div", {
						className: S.a.copyLine2
					}, (() => r.fbt._("Anonymous Browsing", null, {
						hk: "rTJ9j"
					}))()), i.a.createElement("img", {
						className: S.a.sneakySnoo,
						src: t
					})))
				}),
				T = e => {
					const t = Object(h.b)(),
						{
							contentTitle: n
						} = e,
						s = Object(a.e)(j.i),
						r = Object(a.e)(j.j),
						o = Object(a.e)(j.g),
						c = Object(a.e)(O.c);
					i.a.useEffect(() => {
						c.isNewDesignVariant ? t(Object(v.d)()) : t(Object(y.c)())
					}, [c, t]);
					const d = o === j.a.Blurred ? p.a.White : o === j.a.NoPreview ? p.a.Grey : void 0;
					return i.a.createElement("div", {
						className: S.a.container
					}, c.isNewDesignVariant ? i.a.createElement(A, {
						contentTitle: n
					}) : i.a.createElement(w, {
						contentTitle: n
					}), i.a.createElement("div", {
						className: Object(l.a)(S.a.footerWrapper, {
							[S.a.mIsModal]: o === j.a.Blurred
						})
					}, i.a.createElement(p.b, {
						textColor: d
					})), i.a.createElement(L, {
						qrCodeAsset: (() => s === f.hd.Enabled || r === f.hb.BlurredPreview || r === f.hb.NoPreview ? I.d2x_nsfw_signup_blocking_de_v1 : I.d2x_nsfw_signup_blocking_non_us_v1)()
					}))
				},
				A = e => {
					const t = Object(a.d)(),
						n = Object(h.b)(),
						s = Object(a.e)(j.h);
					return Object(o.useEffect)(() => {
						Object(E.c)(s)
					}, [s]), i.a.createElement("div", {
						className: Object(l.a)(S.a.mainCta, {
							[S.a.skippable_buttons]: s === f.ib.SkippableButtons,
							[S.a.skippable_text]: s === f.ib.SkippableText
						})
					}, i.a.createElement("div", {
						className: S.a.contentDescription
					}, i.a.createElement(_.b, {
						fill: _.a.BLACK
					}), i.a.createElement("span", {
						className: S.a.cta
					}, e.contentTitle), i.a.createElement("span", {
						className: Object(l.a)(S.a.warning, S.a.warning__bypassable)
					}, (() => r.fbt._("This page may contain sensitive or adult content that's not for everyone. To view it, confirm your age.", null, {
						hk: "2Wp5X6"
					}))())), i.a.createElement("div", {
						className: S.a.cta
					}, (() => r.fbt._("To continue, log in or confirm your age.", null, {
						hk: "4sHPuz"
					}))()), i.a.createElement("div", {
						className: S.a.buttonContainer
					}, i.a.createElement(g.j, {
						className: S.a.logIn,
						onClick: () => {
							n(Object(v.a)()), Object(E.b)(E.a.Login), t(Object(m.openLoginModal)())
						}
					}, P()), s === f.ib.SkippableButtons && i.a.createElement("div", {
						className: S.a.divider
					}, i.a.createElement("div", {
						className: S.a.dividerLine
					}), i.a.createElement("div", {
						className: S.a.dividerText
					}, (() => r.fbt._("OR", null, {
						hk: "2sn64l"
					}))()), i.a.createElement("div", {
						className: S.a.dividerLine
					})), i.a.createElement(g.j, {
						className: S.a.continue,
						onClick: async () => {
							n(Object(v.b)()), Object(E.b)(E.a.Continue), Object(C.q)(), Object(O.d)(), window.location.reload()
						}
					}, (() => r.fbt._("I'm over 18", null, {
						hk: "4nUG6S"
					}))()), i.a.createElement(g.j, {
						className: Object(l.a)(S.a.continue, S.a.dismiss, {
							[S.a.no_border]: s === f.ib.SkippableText
						}),
						onClick: () => {
							n(Object(v.c)()), Object(E.b)(E.a.Dismiss), t(Object(c.b)("/"))
						}
					}, s === f.ib.SkippableText ? (() => r.fbt._("Go back to home", null, {
						hk: "4yEgxF"
					}))() : k())))
				}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return C
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "b", (function() {
				return P
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/lib/objectSelector/index.ts"),
				i = n("./src/reddit/actions/ads/index.ts"),
				a = n("./src/reddit/actions/focusedVerticals/index.ts"),
				c = n("./src/reddit/actions/gold/tooltips.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/postList.ts"),
				u = n("./src/reddit/actions/survey/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				h = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/components/PostList/Placeholder.tsx"),
				g = n("./src/reddit/featureFlags/index.ts"),
				x = n("./src/reddit/selectors/experiments/hidePostMitigation.ts"),
				E = n("./src/reddit/selectors/experiments/survey.ts"),
				v = n("./src/reddit/selectors/listings.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/subreddit.ts"),
				j = n("./src/reddit/selectors/tracking.ts"),
				O = n("./src/reddit/selectors/user.ts");

			function C() {
				return Object(b.v)({
					currentProfileName: b.j,
					isCommentPermalink: b.x,
					isCommentsPage: b.y,
					isFrontpage: b.B,
					isProfilePostListing: b.N,
					isTopicPage: b.T,
					pageLayer: e => e
				})
			}
			const N = C(),
				S = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: g.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(b.U)(e, t),
					loadMore: v.g,
					postsById: (e, t) => {
						let {
							listingKey: n
						} = t;
						return Object(y.S)(e, {
							listingKey: n,
							keepHiddenPosts: Object(x.a)(e)
						})
					},
					postIds: Object(o.a)((e, t) => {
						let {
							listingKey: n,
							listingName: s,
							inSubredditOrProfile: r
						} = t;
						return Object(y.C)(e, n, s, r, Object(x.a)(e))
					}),
					subredditsById: _.eb,
					viewportDataLoaded: j.b,
					pageReferrer: b.X,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: E.e,
					isLoggedIn: O.S
				},
				I = Object(r.c)(S),
				P = e => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.K(t))
					},
					fireAdPixelsOfType: (t, n) => {
						e(d.y(t, n))
					},
					trackOnPostEnteredViewport: (t, n, s, r) => {
						e(d.M(t, s, r))
					},
					trackOnPostExitedViewport: (t, n, s, r) => {
						e(d.N(t, s, r))
					},
					showModalOnScroll: () => e(d.ab()),
					surveyTriggerScrollCounted: () => e(Object(u.l)())
				}),
				k = e => Object(p.b)({
					...e
				}),
				w = (e, t, n, s) => {
					const {
						listingKey: r,
						hostPostData: o,
						listingBelowVariant: i
					} = s;
					return Object(h.n)(e, t, "post", r, o, i, void 0)
				},
				L = Object(s.b)(I, P, (e, t, n) => ({
					...e,
					...t,
					...n,
					postComponentForLayout: k,
					postClickEventFactory: w
				}));
			t.a = e => Object(m.c)(N(L(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: i.jb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(o.d([n], !0)),
					onSubscriptionsRequested: () => e(o.e()),
					onUnsubscribe: () => e(o.d([n], !1))
				}
			})
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				i = n("./src/reddit/selectors/activeModalId.ts"),
				a = n("./src/reddit/selectors/structuredStyles.ts"),
				c = n("./src/reddit/constants/modals.ts");
			const d = Object(r.c)({
				bladeHasUnsavedChanges: a.a,
				isEditing: a.i,
				isBladeEditorDirty: a.h,
				isModalOpen: Object(i.b)(c.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(s.b)(d, (e, t) => {
				let {
					subredditId: n
				} = t;
				return {
					requestCloseBlade: () => n && e(Object(o.h)(n))
				}
			})
		},
		"./src/reddit/constants/banners.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner", e.AWARDED_LISTING_BANNER = "awarded_listing_banner", e.AVATAR_LISTING_BANNER = "avatar_listing_banner"
				}(s || (s = {}))
		},
		"./src/reddit/constants/imagePaths.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/config.ts");
			const r = Array.from({
					length: 20
				}).map((e, t) => `${s.a.assetPath}/img/snoovatars/snoovatar_${t+1}.png`),
				o = Array.from({
					length: 8
				}).map((e, t) => `${s.a.processingAvatarImageUrl}/defaults/v2/avatar_default_${t}.png`)
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = "reddit",
				r = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/constants/promo.ts": function(e, t, n) {
			"use strict";
			var s, r;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.SignupUpsellCell = "signupUpsellBottomCell", e.SignupUpsellCellDismissible = "signupUpsellBottomCellDismissible", e.SignupUpsellBottomSheet = "signupUpsellBottomSheet"
				}(s || (s = {})),
				function(e) {
					e.Shown = "shown", e.Dismissed = "dismissed", e.Completed = "completed"
				}(r || (r = {}))
		},
		"./src/reddit/contexts/Promo/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js");
			const i = o.createContext({
				showPromo: r.a,
				dismissPromo: r.a,
				completePromo: r.a,
				promos: new Map
			});
			t.a = i
		},
		"./src/reddit/endpoints/eligibleUXExperiences/eligibleUxExperiences.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			}));
			var s = n("./src/lib/makeGqlRequest/index.ts"),
				r = n("./node_modules/react/index.js"),
				o = n("./src/reddit/hooks/useGqlContext.ts"),
				i = n("./src/redditGQL/operations/FetchEligibleUXExperiences.json"),
				a = n("./src/redditGQL/operations/StoreUxTargetingAction.json");
			const c = (e, t, n) => {
					const r = {
						experienceInputs: t
					};
					return n && (r.clientContext = n), Object(s.a)(e, {
						...i,
						variables: r
					})
				},
				d = (e, t) => Object(s.a)(e, {
					...a,
					variables: {
						input: t
					}
				}),
				l = (e, t, n) => {
					const s = Object(o.a)();
					return Object(r.useCallback)(() => d(s(), {
						action: t,
						eligibleExperience: e,
						source: n
					}), [s, e, t, n])
				}
		},
		"./src/reddit/helpers/counters/nsfwBypassableBlocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			}));
			var s, r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/sample/index.ts"),
				i = n("./src/reddit/helpers/counters/nsfwblocking.ts"),
				a = n("./src/telemetry/helpers/sendCounter.ts");
			! function(e) {
				e.Continue = "continue", e.Dismiss = "dismiss", e.Login = "login", e.View = "view"
			}(s || (s = {}));
			const c = e => {
					Object(i.b)() || Object(a.b)(r.n.Redesign, {
						type: a.a.NsfwBypassableBlocking,
						data: {
							action: e
						}
					})
				},
				d = e => {
					!Object(i.b)() && e && Object(o.b)(10) && Object(a.b)(r.n.Redesign, {
						type: a.a.NsfwBypassableBlocking,
						data: {
							action: s.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/counters/nsfwblocking.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/sample/index.ts"),
				o = n("./src/telemetry/helpers/sendCounter.ts");
			const i = () => !1;
			var a;
			! function(e) {
				e.Dismiss = "dismiss", e.Login = "login", e.Signup = "signup", e.View = "view"
			}(a || (a = {}));
			const c = e => {
					i() || Object(o.b)(s.n.Redesign, {
						type: o.a.NsfwBlocking,
						data: {
							action: e
						}
					})
				},
				d = e => {
					!i() && e && Object(r.b)(10) && Object(o.b)(s.n.Redesign, {
						type: o.a.NsfwBlocking,
						data: {
							action: a.View,
							variant: e
						}
					})
				}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} = e;
				return t && n && s && r ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/datadome.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s, r = n("./src/lib/constants/index.ts");
			! function(e) {
				e.Enabled = "datadome-bot-detection.enabled", e.Disabled = "datadome-bot-detection.disabled"
			}(s || (s = {}));
			const o = () => i() ? s.Enabled : s.Disabled,
				i = () => null !== document.getElementById(r.C)
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			})), n.d(t, "g", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/map.js"),
				r = n.n(s),
				o = n("./src/lib/FocusTrap/index.ts");
			const i = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				a = () => i() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return r()(t, e => e.textContent || "")
				})() : null,
				c = (e, t) => {
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				d = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!c(n, e)) return;
					const {
						startContainer: s,
						startOffset: r,
						endContainer: o,
						endOffset: i
					} = n, a = document.createRange();
					a.selectNode(e);
					let d = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, n) && (a.setStart(s, r), d = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, n) && (a.setEnd(o, i), d = !1), d) return [e];
					const l = document.createElement("div");
					return l.appendChild(a.cloneContents()), [...l.childNodes]
				},
				l = (e, t, n) => {
					let s = e;
					for (; s && (!n || !n(s));) {
						if (s && t(s)) return s;
						s = s.parentElement
					}
				},
				u = e => e && e.parentElement && l(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				m = e => {
					e.querySelectorAll(o.a).forEach(e => {
						e.tabIndex = -1
					})
				},
				b = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/reddit/helpers/getFakeUserIcons.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/memoize.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/categories.tsx"),
				i = n("./src/reddit/constants/imagePaths.ts");
			const a = [];
			t.a = r()((function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
					n = arguments.length > 2 ? arguments[2] : void 0;
				if (!e || !t) return a;
				const s = n ? i.a : i.b,
					r = Array.from(e).reduce((e, t) => e + t.charCodeAt(0), 0);
				return Array.from({
					length: t
				}).map((e, t) => ({
					color: o.a[(r + t) % o.a.length],
					image: s[(r + t) % s.length]
				}))
			}), (function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
				return `${e}_${t}`
			}))
		},
		"./src/reddit/helpers/getSubredditErrorProps/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/ContentGate.ts");
			t.a = (e, t, n) => {
				let r, o, i, a, c, d, l, u, m, b, p, h;
				return e ? e.quarantinedSubreddit ? (i = s.a.QuarantinedSubreddit, c = e.quarantineMessage, d = e.quarantineMessageHtml, l = e.quarantineRequiresEmail) : e.privateSubreddit ? (i = s.a.PrivateSubreddit, a = e.subredditDescription, u = e.isContributorRequestsDisabled, m = e.isContributorRequestTimestamp) : e.goldSubreddit ? i = s.a.GoldSubreddit : e.subredditBanned ? (i = s.a.SubredditBanned, r = e.subredditBanMessage, o = e.subredditBanTitle) : e.subredditDoesNotExist ? i = s.a.SubredditDoesNotExist : e.subredditBlockedForLegalReason ? i = s.a.SubredditBlockedForLegalReason : e.interstitialWarningMessage && (i = s.a.GatedSubreddit, b = e.interstitialWarningMessage, p = e.interstitialWarningMessageHtml, h = e.interstitialWarningMessageRTJson) : t && (i = s.a.Nsfw), i && n ? {
					banMessage: r,
					banTitle: o,
					contentGateType: i,
					isContributorRequestsDisabled: u,
					isContributorRequestTimestamp: m,
					subredditDescription: a,
					subredditName: n,
					quarantineMessage: c,
					quarantineMessageHtml: d,
					quarantineRequiresEmail: l,
					interstitialWarningMessage: b,
					interstitialWarningMessageHtml: p,
					interstitialWarningMessageRTJson: h
				} : void 0
			}
		},
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/brcast/dist/brcast.es.js");
			const r = Object(s.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/predictions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/models/Prediction/index.ts");
			const r = (e, t) => {
					const n = Date.now(),
						r = n <= e.endsAt,
						o = n <= t.endsAt,
						i = e.status === s.b.Cancelled || e.status === s.b.CancelInProgress;
					return i !== (t.status === s.b.Cancelled || t.status === s.b.CancelInProgress) ? i ? 1 : -1 : r !== o ? r ? -1 : 1 : r && e.selectedOptionId !== t.selectedOptionId ? e.selectedOptionId ? 1 : -1 : !e.resolvedOptionId != !t.resolvedOptionId ? e.resolvedOptionId ? 1 : -1 : r || e.selectedOptionId === t.selectedOptionId ? e.createdAt > t.createdAt ? -1 : 1 : e.selectedOptionId ? -1 : 1
				},
				o = (e, t) => r({
					createdAt: e.createdAt,
					endsAt: e.endsAt,
					selectedOptionId: e.userSelection || null,
					resolvedOptionId: e.resolvedOptionId,
					totalVoteCount: e.totalVoteCount,
					status: e.predictionStatus
				}, {
					createdAt: t.createdAt,
					endsAt: t.endsAt,
					selectedOptionId: t.userSelection || null,
					resolvedOptionId: t.resolvedOptionId,
					totalVoteCount: t.totalVoteCount,
					status: t.predictionStatus
				}),
				i = (e, t) => {
					var n, s;
					const {
						pollData: o
					} = e, {
						pollData: i
					} = t;
					return o && i ? r({
						createdAt: e.created,
						endsAt: null == o ? void 0 : o.votingEndTimestamp,
						selectedOptionId: null !== (n = null == o ? void 0 : o.userSelection) && void 0 !== n ? n : null,
						resolvedOptionId: null == o ? void 0 : o.resolvedOptionId,
						totalVoteCount: null == o ? void 0 : o.totalVoteCount,
						status: null == o ? void 0 : o.predictionStatus
					}, {
						createdAt: t.created,
						endsAt: null == i ? void 0 : i.votingEndTimestamp,
						selectedOptionId: null !== (s = null == i ? void 0 : i.userSelection) && void 0 !== s ? s : null,
						resolvedOptionId: null == i ? void 0 : i.resolvedOptionId,
						totalVoteCount: null == i ? void 0 : i.totalVoteCount,
						status: null == i ? void 0 : i.predictionStatus
					}) : 0
				}
		},
		"./src/reddit/helpers/resonatePage/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => {
				window.resonateAnalytics && window.resonateAnalytics.initialize || function() {
					const e = window.resonateAnalytics = window.resonateAnalytics || [];
					if (!e.initialize) {
						if (e.invoked) return;
						e.invoked = !0, e.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on", "profile"], e.factory = function(t) {
							return function() {
								const n = Array.prototype.slice.call(arguments);
								return n.unshift(t), e.push(n), e
							}
						};
						for (let t = 0; t < e.methods.length; t++) {
							const n = e.methods[t];
							e[n] = e.factory(n)
						}
						e.load = function(e) {
							const t = document.createElement("script");
							t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.resonate.com/analytics.js/v1/" + e + "/analytics.min.js";
							const n = document.getElementsByTagName("script")[0];
							n.parentNode.insertBefore(t, n)
						}, e.SNIPPET_VERSION = "1.0.0", e.load("101117480")
					}
				}(), window.resonateAnalytics && window.resonateAnalytics.page && window.resonateAnalytics.page(e)
			}
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, n) {
			"use strict";
			n.d(t, "h", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "l", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "n", (function() {
				return m
			})), n.d(t, "m", (function() {
				return b
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "o", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "d", (function() {
				return g
			}));
			const s = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				r = () => () => ({
					source: "content_tag",
					action: "click",
					noun: "verify_topics_module"
				}),
				o = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_intro",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				i = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				a = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "mature_themes_prompt",
					actionInfo: {
						pageType: "survey_mature_themes"
					}
				}),
				c = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				d = e => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "survey_answer",
					actionInfo: {
						pageType: e
					}
				}),
				l = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				u = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "back",
					actionInfo: {
						pageType: e
					}
				}),
				m = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_summary",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				b = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "submit_survey",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				p = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_review",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				h = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "take_survey",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				g = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/helpers/trackers/garlicBread.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					...Object(r.q)(e),
					action: s.c.CLICK,
					noun: "preview",
					source: "garlic_bread"
				}),
				i = () => e => ({
					...Object(r.q)(e),
					action: s.c.CLICK,
					noun: "garlic_bread",
					source: "nav"
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.eb(e),
					profile: s.V(e),
					subreddit: s.nb(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...r(t)
				}),
				i = (e, t) => n => ({
					action: "click",
					source: "nav",
					noun: e,
					...r(n),
					topicMetadata: {
						displayName: t
					}
				}),
				a = e => t => ({
					...r(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				c = e => t => ({
					...r(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				}),
				d = e => t => ({
					...r(t),
					source: "nav",
					action: "click",
					noun: `lang_${e}`
				})
		},
		"./src/reddit/helpers/trackers/nsfwSignupBypassableUpsell.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = "nsfw_dialog_bypassable",
				o = () => e => ({
					...Object(s.q)(e),
					source: "xpromo",
					action: "view",
					noun: r,
					actionInfo: {
						...Object(s.d)(e)
					}
				}),
				i = () => e => ({
					...Object(s.q)(e),
					source: "xpromo",
					action: "click",
					noun: r,
					actionInfo: {
						...Object(s.d)(e),
						popupButtonText: "login"
					}
				}),
				a = () => e => ({
					...Object(s.q)(e),
					source: "xpromo",
					action: "dismiss",
					noun: r,
					actionInfo: {
						...Object(s.d)(e),
						popupButtonText: "back"
					}
				}),
				c = () => e => ({
					...Object(s.q)(e),
					source: "xpromo",
					action: "click",
					noun: r,
					actionInfo: {
						...Object(s.d)(e),
						popupButtonText: "continue"
					}
				})
		},
		"./src/reddit/helpers/trackers/nsfwSignupUpsell.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = "nsfw_dialog",
				o = () => e => ({
					...Object(s.q)(e),
					source: "xpromo",
					action: "view",
					noun: r,
					actionInfo: {
						...Object(s.d)(e)
					}
				}),
				i = () => e => ({
					...Object(s.q)(e),
					source: "xpromo",
					action: "click",
					noun: r,
					actionInfo: {
						...Object(s.d)(e)
					}
				}),
				a = () => e => ({
					...Object(s.q)(e),
					source: "xpromo",
					action: "dismiss",
					noun: r,
					actionInfo: {
						...Object(s.d)(e)
					}
				})
		},
		"./src/reddit/helpers/trackers/onboarding.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "A", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "v", (function() {
				return b
			})), n.d(t, "l", (function() {
				return p
			})), n.d(t, "z", (function() {
				return h
			})), n.d(t, "p", (function() {
				return f
			})), n.d(t, "u", (function() {
				return g
			})), n.d(t, "j", (function() {
				return x
			})), n.d(t, "y", (function() {
				return E
			})), n.d(t, "o", (function() {
				return v
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "x", (function() {
				return _
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "s", (function() {
				return O
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "w", (function() {
				return N
			})), n.d(t, "k", (function() {
				return S
			})), n.d(t, "E", (function() {
				return I
			})), n.d(t, "B", (function() {
				return P
			})), n.d(t, "D", (function() {
				return k
			})), n.d(t, "C", (function() {
				return w
			})), n.d(t, "r", (function() {
				return L
			})), n.d(t, "m", (function() {
				return T
			})), n.d(t, "a", (function() {
				return B
			})), n.d(t, "b", (function() {
				return R
			})), n.d(t, "c", (function() {
				return M
			})), n.d(t, "f", (function() {
				return D
			})), n.d(t, "e", (function() {
				return U
			})), n.d(t, "J", (function() {
				return F
			})), n.d(t, "I", (function() {
				return V
			})), n.d(t, "L", (function() {
				return q
			})), n.d(t, "K", (function() {
				return W
			})), n.d(t, "M", (function() {
				return H
			})), n.d(t, "H", (function() {
				return G
			})), n.d(t, "G", (function() {
				return K
			})), n.d(t, "F", (function() {
				return z
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = [],
				i = "onboarding";
			var a;
			! function(e) {
				e.CATEGORY = "category", e.CREATE_ACCOUNT_SCREEN_DROPDOWN = "create_account_screen_dropdown", e.EXIT = "exit", e.GENDER = "gender", e.ONBOARDING_COMMUNITY_RECOMMENDATIONS = "onboarding_community_recommendations", e.ONBOARDING_GENDER_COLLECTION = "onboarding_gender_collection", e.ONBOARDING_INTEREST = "onboarding_interest", e.ONBOARDING_LANGUAGE_SELECTION = "onboarding_language_collection", e.SETTINGS_LANGUAGE_COLLECTION = "settings_language_collection", e.SUB_CATEGORY = "sub_category", e.SUBREDDIT = "subreddit", e.TOPIC_PREVIEW = "topic_preview", e.VIEW_MORE = "view_more", e.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN = "google_account_confirmation_screen", e.USERNAME_SECOND_CONFIRMATION_SCREEN = "username_second_confirmation_screen", e.USERNAME_CONFIRMATION_SCREEN = "username_confirmation_screen", e.USERNAME_TOOLTIP = "username_tooltip"
			}(a || (a = {}));
			const c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
					return t => ({
						...Object(r.q)(t),
						action: s.c.CLICK,
						noun: a.EXIT,
						onboarding: {
							processNotes: "exited",
							numberSubredditsSelected: e.length,
							subredditsSelected: e
						},
						source: i
					})
				},
				d = () => e => ({
					...Object(r.q)(e),
					action: s.c.DISMISS,
					noun: a.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: i
				}),
				l = () => e => ({
					...Object(r.q)(e),
					action: s.c.VIEW,
					noun: a.CREATE_ACCOUNT_SCREEN_DROPDOWN,
					source: i
				}),
				u = e => t => ({
					...Object(r.q)(t),
					action: s.c.DISMISS,
					noun: e,
					source: i
				}),
				m = () => e => ({
					...Object(r.q)(e),
					source: i,
					action: s.c.VIEW,
					noun: a.ONBOARDING_GENDER_COLLECTION
				}),
				b = () => e => ({
					...Object(r.q)(e),
					source: i,
					action: s.c.VIEW,
					noun: a.ONBOARDING_INTEREST
				}),
				p = () => e => ({
					...Object(r.q)(e),
					source: i,
					action: s.c.VIEW,
					noun: a.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				h = e => t => ({
					...Object(r.q)(t),
					source: i,
					action: s.c.VIEW,
					noun: a.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				f = () => e => ({
					...Object(r.q)(e),
					source: i,
					action: s.c.SUBMIT,
					noun: a.ONBOARDING_GENDER_COLLECTION
				}),
				g = () => e => ({
					...Object(r.q)(e),
					source: i,
					action: s.c.SUBMIT,
					noun: a.ONBOARDING_INTEREST
				}),
				x = () => e => ({
					...Object(r.q)(e),
					source: i,
					action: s.c.SUBMIT,
					noun: a.ONBOARDING_COMMUNITY_RECOMMENDATIONS
				}),
				E = (e, t) => n => ({
					...Object(r.q)(n),
					source: i,
					action: s.c.SUBMIT,
					noun: a.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(n),
						reason: t,
						type: e
					}
				}),
				v = () => e => ({
					...Object(r.q)(e),
					source: i,
					action: s.c.SKIP,
					noun: a.ONBOARDING_GENDER_COLLECTION
				}),
				y = () => e => ({
					...Object(r.q)(e),
					source: i,
					action: s.c.SKIP,
					noun: a.ONBOARDING_INTEREST
				}),
				_ = e => t => ({
					...Object(r.q)(t),
					source: i,
					action: s.c.SKIP,
					noun: a.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				j = () => e => ({
					...Object(r.q)(e),
					source: i,
					action: s.c.SELECT,
					noun: a.GENDER
				}),
				O = (e, t, n, o, c) => d => ({
					...Object(r.q)(d),
					source: i,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(d),
						reason: c
					},
					noun: t ? a.CATEGORY : a.SUB_CATEGORY,
					onboarding: {
						categoryName: A(n),
						categoryId: o
					}
				}),
				C = (e, t, n, o, c, d) => l => ({
					...Object(r.q)(l),
					source: i,
					action: e ? s.c.SELECT : s.c.DESELECT,
					actionInfo: {
						...Object(r.d)(l),
						reason: d
					},
					noun: a.SUBREDDIT,
					onboarding: {
						categoryName: A(t),
						categoryId: n,
						subredditName: o,
						subredditId: c
					}
				}),
				N = (e, t, n) => o => ({
					...Object(r.q)(o),
					source: i,
					action: n ? s.c.SELECT : s.c.DESELECT,
					noun: a.ONBOARDING_LANGUAGE_SELECTION,
					actionInfo: {
						...Object(r.d)(o),
						reason: t,
						type: e
					}
				}),
				S = (e, t) => n => ({
					...Object(r.q)(n),
					source: i,
					action: s.c.CLICK,
					noun: a.VIEW_MORE,
					onboarding: {
						categoryName: A(e),
						categoryId: t
					}
				}),
				I = () => e => ({
					...Object(r.q)(e),
					source: "topic_chaining_prompt",
					action: s.c.VIEW,
					noun: a.TOPIC_PREVIEW
				}),
				P = () => e => ({
					...Object(r.q)(e),
					source: "topic_chaining_prompt",
					action: s.c.CLICK,
					noun: a.TOPIC_PREVIEW
				}),
				k = (e, t) => n => ({
					...Object(r.q)(n),
					source: "topic_chaining_prompt",
					action: s.c.SELECT,
					noun: a.CATEGORY,
					onboarding: {
						categoryName: A(e),
						categoryId: t
					}
				}),
				w = () => e => ({
					...Object(r.q)(e),
					source: "topic_chaining_prompt",
					action: s.c.DISMISS,
					noun: a.TOPIC_PREVIEW
				}),
				L = (e, t, n, o) => c => ({
					...Object(r.q)(c),
					source: i,
					action: s.c.VIEW,
					noun: e ? a.CATEGORY : a.SUB_CATEGORY,
					actionInfo: {
						...Object(r.d)(c),
						reason: o
					},
					onboarding: {
						categoryName: A(t),
						categoryId: n
					}
				}),
				T = (e, t, n, o, c) => d => ({
					...Object(r.q)(d),
					source: i,
					action: s.c.VIEW,
					actionInfo: {
						...Object(r.d)(d),
						reason: c
					},
					noun: a.SUBREDDIT,
					onboarding: {
						categoryName: A(e),
						categoryId: n,
						subredditName: t,
						subredditId: o
					}
				}),
				A = e => e.toLowerCase().replace(new RegExp("&", "g"), "and").replace(new RegExp(" ", "g"), "_").replace(new RegExp("[^-_a-z0-9]", "g"), "");
			var B, R, M;
			! function(e) {
				e.CONTINUE = "continue", e.LOGIN_ANOTHER_ACCOUNT = "login_another_account"
			}(B || (B = {})),
			function(e) {
				e.CHANGE_USERNAME = "change_username", e.KEEP_USERNAME = "keep_username"
			}(R || (R = {})),
			function(e) {
				e.GO_BACK = "go_back", e.YES_KEEP_USERNAME = "yes_keep_username"
			}(M || (M = {}));
			const D = () => e => ({
					...Object(r.q)(e),
					action: s.c.VIEW,
					noun: a.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: i
				}),
				U = e => t => ({
					...Object(r.q)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: a.GOOGLE_ACCOUNT_CONFIRMATION_SCREEN,
					source: i
				}),
				F = () => e => ({
					...Object(r.q)(e),
					action: s.c.VIEW,
					noun: a.USERNAME_CONFIRMATION_SCREEN,
					source: i
				}),
				V = e => t => ({
					...Object(r.q)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: a.USERNAME_CONFIRMATION_SCREEN,
					source: i
				}),
				q = () => e => ({
					...Object(r.q)(e),
					action: s.c.VIEW,
					noun: a.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: i
				}),
				W = e => t => ({
					...Object(r.q)(t),
					action: s.c.CLICK,
					actionInfo: {
						...Object(r.d)(t),
						reason: e
					},
					noun: a.USERNAME_SECOND_CONFIRMATION_SCREEN,
					source: i
				}),
				H = () => e => ({
					...Object(r.q)(e),
					action: s.c.VIEW,
					noun: a.USERNAME_TOOLTIP,
					source: i
				}),
				G = e => t => ({
					...Object(r.q)(t),
					source: "settings",
					action: s.c.VIEW,
					noun: a.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				K = e => t => ({
					...Object(r.q)(t),
					source: "settings",
					action: s.c.SUBMIT,
					noun: a.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(r.d)(t),
						type: e
					}
				}),
				z = (e, t, n) => o => ({
					...Object(r.q)(o),
					source: "settings",
					action: n ? s.c.SELECT : s.c.DESELECT,
					noun: a.SETTINGS_LANGUAGE_COLLECTION,
					actionInfo: {
						...Object(r.d)(o),
						reason: t,
						type: e
					}
				})
		},
		"./src/reddit/helpers/trackers/predictionsLeaderboard.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...Object(s.q)(e),
					subreddit: Object(s.nb)(e)
				}),
				o = {
					source: "global",
					action: "view",
					noun: "screen"
				},
				i = () => e => ({
					...r(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "all_time_community_predictors"
					}
				}),
				a = () => e => ({
					...r(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "community",
						paneName: "predictions"
					}
				}),
				c = () => e => ({
					...r(e),
					source: "predictions",
					action: "click",
					noun: "leaderboard",
					actionInfo: {
						pageType: "previous_tournament_predictor"
					}
				}),
				d = () => e => ({
					...Object(s.q)(e, {
						isGVSEvent: !0
					}),
					subreddit: Object(s.nb)(e),
					...o,
					actionInfo: {
						pageType: "all_time_community_predictors_preview"
					}
				}),
				l = e => t => ({
					...Object(s.q)(t, {
						isGVSEvent: !0
					}),
					subreddit: Object(s.nb)(t),
					...o,
					actionInfo: {
						pageType: "tournament_leaderboard_preview",
						reason: "predictions_tab"
					},
					predictions: {
						tournamentId: e
					}
				}),
				u = () => e => ({
					...Object(s.q)(e, {
						isGVSEvent: !0
					}),
					subreddit: Object(s.nb)(e),
					...o,
					actionInfo: {
						pageType: "previous_tournaments"
					}
				}),
				m = () => e => ({
					...Object(s.q)(e, {
						isGVSEvent: !0
					}),
					subreddit: Object(s.nb)(e),
					...o,
					actionInfo: {
						pageType: "all_time_community_predictors"
					}
				}),
				b = e => {
					let {
						isPreviousEvent: t,
						isQueried: n
					} = e;
					if (!n) return {
						reason: t ? "previous_tournament" : "predictions_tab"
					}
				},
				p = (e, t, n) => r => ({
					...Object(s.q)(r, {
						isGVSEvent: !0
					}),
					subreddit: Object(s.nb)(r),
					...o,
					actionInfo: {
						pageType: "tournament_leaderboard",
						...b({
							isPreviousEvent: t,
							isQueried: n
						})
					},
					predictions: {
						tournamentId: e
					}
				})
		},
		"./src/reddit/hooks/promo/useIsPromoShown.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/promo.ts"),
				r = n("./src/reddit/hooks/usePromoContext.ts");

			function o(e) {
				const {
					promos: t
				} = Object(r.a)();
				return !!e && t.get(e) === s.a.Shown
			}
		},
		"./src/reddit/hooks/promo/useIsSignupUpsellVariantEligible.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/selectors/experiments/signupUpsellExperiment.ts");

			function o(e) {
				const t = Object(s.e)(r.a) === e,
					n = Object(s.e)(r.c) === e,
					o = Object(s.e)(r.e) === e;
				return t || n || o
			}
		},
		"./src/reddit/hooks/useConstructor.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
				const t = Object(s.useRef)(!1);
				t.current || (e(), t.current = !0)
			}
		},
		"./src/reddit/hooks/useGqlContext.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/ApiContext.tsx");

			function o() {
				const {
					gqlContext: e
				} = Object(s.useContext)(r.a);
				return e
			}
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useModalState.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
				const [t, n] = r.a.useState(e);
				return [t, () => n(!0), () => n(!1)]
			}
		},
		"./src/reddit/hooks/usePromoContext.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/Promo/index.ts");
			t.a = function() {
				return Object(s.useContext)(r.a)
			}
		},
		"./src/reddit/hooks/useWindowEvent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");
			const r = (e, t, n) => {
				Object(s.useEffect)(() => (window.addEventListener(e, t, n), () => window.removeEventListener(e, t)), [e, t, n])
			};
			t.a = r;
			const o = (e, t) => r("keydown", e, t)
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: Object(o.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || i.a.gold
				}
			}), "CoinIcon", d.a);
			t.a = l
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, n) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Chevron/index.m.less"),
				a = n.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/CirclePost/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				viewBox: "0 0 56 56",
				xmlns: "http://www.w3.org/2000/svg",
				className: e.className
			}, r.a.createElement("g", {
				transform: "translate(1 1)",
				fill: "inherit",
				stroke: "inherit",
				fillRule: "evenodd"
			}, r.a.createElement("rect", {
				x: "16",
				y: "35",
				width: "22.4",
				height: "2.8",
				rx: "1.4",
				stroke: "none"
			}), r.a.createElement("path", {
				d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
			}), r.a.createElement("circle", {
				strokeWidth: "2",
				fill: "none",
				cx: "27",
				cy: "27",
				r: "27"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: n,
					...s
				} = e;
				return r.a.createElement("svg", c({
					className: Object(o.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s), r.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/GarlicBread/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 130 130"
			}, r.a.createElement("g", {
				id: "Layer_1-2"
			}, r.a.createElement("polygon", {
				fill: "#ff4500",
				points: "104 26 104 52 104 78 104 104 78 104 52 104 52 130 78 130 104 130 130 130 130 104 130 78 130 52 130 26 104 26"
			}), r.a.createElement("rect", {
				x: "52",
				y: "52",
				width: "26",
				height: "26"
			}), r.a.createElement("polygon", {
				fill: "#ff4500",
				points: "78 0 52 0 26 0 0 0 0 26 0 52 0 78 0 104 0 130 26 130 26 104 26 78 26 52 26 26 52 26 78 26 104 26 104 0 78 0"
			}), r.a.createElement("path", {
				fill: "#ffffff",
				d: "m78,26H26v104h26v-26h52V26h-26Zm0,52h-26v-26h26v26Z"
			})))
		},
		"./src/reddit/icons/svgs/NSFWWarningIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, r = n("./node_modules/react/index.js"),
				o = n.n(r);
			! function(e) {
				e.BLACK = "#0F1A1C", e.DEFAULT = "#FF585B"
			}(s || (s = {}));
			t.b = e => o.a.createElement("svg", {
				className: e.className,
				fill: "none",
				height: "60",
				viewBox: "0 0 60 60",
				xmlns: "http://www.w3.org/2000/svg",
				width: "60"
			}, o.a.createElement("path", {
				d: "M34.87 27.6302C35.4007 27.9589 36.0158 28.1257 36.64 28.1102C37.2902 28.1403 37.9354 27.9841 38.5 27.6602C38.9989 27.4003 39.4148 27.0052 39.7 26.5202C40.004 26.0401 40.1654 25.4835 40.1654 24.9152C40.1654 24.3469 40.004 23.7903 39.7 23.3102C39.4148 22.8252 38.9989 22.4302 38.5 22.1702C37.9681 21.8768 37.3671 21.7318 36.76 21.7502C36.1864 21.7434 35.6198 21.8773 35.11 22.1402C34.6039 22.3874 34.1776 22.7721 33.88 23.2502C33.5564 23.7276 33.3887 24.2936 33.4 24.8702C33.3891 25.429 33.5346 25.9797 33.82 26.4602C34.0597 26.9366 34.4222 27.3405 34.87 27.6302Z",
				fill: e.fill || s.DEFAULT
			}), o.a.createElement("path", {
				d: "M38.68 33.0002C38.0443 32.6933 37.3457 32.5392 36.64 32.5502C35.9438 32.5394 35.255 32.6936 34.63 33.0002C34.05 33.278 33.5609 33.715 33.22 34.2602C32.8649 34.7654 32.6744 35.3678 32.6744 35.9852C32.6744 36.6026 32.8649 37.205 33.22 37.7102C33.5748 38.2212 34.0623 38.6257 34.63 38.8802C35.2562 39.1836 35.9442 39.3376 36.64 39.3302C37.3454 39.3379 38.0432 39.184 38.68 38.8802C39.2591 38.6169 39.7565 38.2023 40.12 37.6802C40.4537 37.1836 40.6313 36.5985 40.63 36.0002C40.6324 35.383 40.4552 34.7784 40.12 34.2602C39.7602 33.7199 39.2632 33.2851 38.68 33.0002Z",
				fill: e.fill || s.DEFAULT
			}), o.a.createElement("path", {
				d: "M54.52 20.1902L39.31 4.9802C38.0246 3.68674 36.4962 2.66024 34.8126 1.95977C33.129 1.25929 31.3235 0.898682 29.5 0.898682C27.6765 0.898682 25.871 1.25929 24.1874 1.95977C22.5038 2.66024 20.9753 3.68674 19.69 4.9802L4.47996 20.1902C3.1865 21.4756 2.16 23.004 1.45952 24.6876C0.75905 26.3712 0.398438 28.1767 0.398438 30.0002C0.398438 31.8237 0.75905 33.6292 1.45952 35.3128C2.16 36.9964 3.1865 38.5249 4.47996 39.8102L19.69 55.0202C20.9753 56.3137 22.5038 57.3402 24.1874 58.0406C25.871 58.7411 27.6765 59.1017 29.5 59.1017C31.3235 59.1017 33.129 58.7411 34.8126 58.0406C36.4962 57.3402 38.0246 56.3137 39.31 55.0202L54.52 39.8102C55.8134 38.5249 56.8399 36.9964 57.5404 35.3128C58.2409 33.6292 58.6015 31.8237 58.6015 30.0002C58.6015 28.1767 58.2409 26.3712 57.5404 24.6876C56.8399 23.004 55.8134 21.4756 54.52 20.1902ZM23.92 43.5002H18.19V24.8402L13.27 27.0002V21.6602L22.27 17.5802H23.95L23.92 43.5002ZM44.92 40.1102C44.0432 41.3133 42.8485 42.2483 41.47 42.8102C39.9566 43.453 38.3292 43.7843 36.685 43.7843C35.0407 43.7843 33.4133 43.453 31.9 42.8102C30.5371 42.2355 29.3552 41.3025 28.48 40.1102C27.651 38.9798 27.2091 37.612 27.22 36.2102C27.2015 34.9552 27.5565 33.723 28.24 32.6702C28.9308 31.5703 29.8778 30.6542 31 30.0002C30.1811 29.3345 29.5237 28.4921 29.0768 27.5361C28.63 26.5801 28.4054 25.5354 28.42 24.4802C28.3942 23.1593 28.7708 21.8619 29.5 20.7602C30.2375 19.6425 31.2781 18.758 32.5 18.2102C33.8234 17.6075 35.2607 17.2956 36.715 17.2956C38.1692 17.2956 39.6065 17.6075 40.93 18.2102C42.1475 18.765 43.1863 19.648 43.93 20.7602C44.6492 21.8441 45.0255 23.1195 45.01 24.4202C45.0008 25.4585 44.7654 26.4823 44.32 27.4202C43.8573 28.3643 43.2034 29.202 42.4 29.8802C43.5275 30.5247 44.4842 31.43 45.19 32.5202C45.8864 33.5797 46.2519 34.8224 46.24 36.0902C46.2595 37.5496 45.7717 38.9705 44.86 40.1102H44.92Z",
				fill: e.fill || s.DEFAULT
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					fillRule: "evenodd"
				}, r.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), r.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, n) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(i.a)(e => {
				const {
					backgroundColor: t,
					className: n,
					redditStyle: s,
					theme: i,
					...d
				} = e, m = Object(c.a)(e), b = {
					"--pseudo-before-background": t || Object(a.f)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return r.a.createElement("div", u({
					className: Object(o.a)(l.a.backgroundContainer, n),
					style: b
				}, d))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, n) {
			e.exports = {
				styledContent: "_1OVBBWLtHoSPfGCRaPzpTf",
				mCanFlexFullWidth: "PaJBYLqPf_Gie2aZntVQ7",
				mLargePostLayout: "_3nSp9cdBpqL13CqjdMr2L_",
				mDisableFullScreen: "_2udhMC-jldHp_EpAuBeSR1",
				mClassicWidth: "_1Tc65kRFm7a8piCXHVL4L4",
				mIsEditing: "_25-JsrYQ-pXWBM8eqpxeN7",
				onlyChildMargin: "_2OVNlZuUd8L9v0yVECZ2iA"
			}
		},
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/contexts/PageLayer/index.tsx"),
				l = n("./src/reddit/selectors/structuredStyles.ts"),
				u = n("./src/reddit/layout/page/Listing/Content.m.less"),
				m = n.n(u);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const p = Object(d.v)(),
				h = Object(i.c)({
					isEditing: l.i,
					layout: (e, t) => t.forcedLayout || Object(d.U)(e, t)
				}),
				f = Object(o.b)(h);
			t.a = p(f(e => {
				let {
					className: t,
					hideOnlyChildMargin: n,
					disableFullscreen: s,
					dispatch: o,
					fitPageToContent: i,
					forcedLayout: l,
					isCollectionLayout: u,
					isEditing: p,
					layout: h,
					pageLayer: f,
					...g
				} = e;
				return r.a.createElement("div", b({
					className: Object(a.a)(t, m.a.styledContent, {
						[m.a.mLargePostLayout]: h === c.g.Large || Object(d.R)(f),
						[m.a.mDisableFullScreen]: s && !u,
						[m.a.mClassicWidth]: u,
						[m.a.mIsEditing]: !!p,
						[m.a.mCanFlexFullWidth]: !i,
						[m.a.onlyChildMargin]: !n
					})
				}, g))
			}))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, n) {
			e.exports = {
				body: "_31N0dvxfpsO6Ur5AKx4O5d",
				sidebar: "_3Kd8DQpBIbsr5E1JcrMFTY",
				defaultLayout: "_1tvThPWQpORoc2taKebHxs",
				"m-collectionLayout": "K1OCXipJxqOt01sOdQXEx",
				mCollectionLayout: "K1OCXipJxqOt01sOdQXEx",
				outerContainer: "qYj03fU5CXf5t2Fc5iSvg",
				outerContainerExp: "_35NDNOyTzBcywfeEavUt6p",
				innerContainer: "_3ozFtOe6WpJEMUtxDOIvtU",
				bannerNavContainer: "q4a8asWOWdfdniAbgNhMh"
			}
		},
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				i = n("./src/reddit/layout/page/Listing/Content.tsx"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/constants/componentSizes.ts"),
				d = n("./src/reddit/constants/elementClassNames.ts"),
				l = n("./src/reddit/constants/screenWidths.ts"),
				u = n("./src/reddit/contexts/NavbarExp.ts"),
				m = n("./node_modules/classnames/index.js"),
				b = n.n(m),
				p = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				h = n("./src/lib/constants/icons.ts"),
				f = n("./src/reddit/components/SubredditIcon/index.tsx"),
				g = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/components/BackToSubreddit/index.m.less"),
				E = n.n(x);
			var v = e => {
					const {
						subredditName: t
					} = e, n = `/${t}`;
					return r.a.createElement(p.a, {
						className: E.a.backToSubreddit,
						to: n
					}, r.a.createElement("div", {
						className: E.a.innerContainer
					}, r.a.createElement(g.a, {
						name: h.a.back,
						className: b()(E.a.content, E.a.back)
					}), r.a.createElement(f.b, {
						className: b()(E.a.content, E.a.subredditIcon)
					}), r.a.createElement("span", {
						className: b()(E.a.content, E.a.title)
					}, t)))
				},
				y = n("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				_ = n("./src/reddit/layout/page/Listing/index.m.less"),
				j = n.n(_);
			t.a = e => {
				const {
					backgroundColor: t,
					backToSubredditName: n,
					className: m,
					containerRef: b,
					content: p,
					contentBanner: h,
					contentClassName: f,
					contentNavBar: g,
					disableFullscreen: x,
					fitPageToContent: E,
					forcedLayout: _,
					hideOnlyChildMargin: O,
					isCollectionLayout: C,
					isPageSwapped: N,
					maxWidth: S,
					navBar: I,
					redditStyle: P,
					sidebar: k,
					sidebars: w,
					trendingUnit: L,
					subredditId: T
				} = e, A = L ? "28px" : "0", B = N ? {
					marginRight: `${c.p}px`,
					marginTop: A
				} : {
					marginLeft: `${c.p}px`,
					marginTop: A
				}, R = k && r.a.createElement("div", {
					className: Object(a.a)(j.a.sidebar, C ? j.a["m-collectionLayout"] : j.a.defaultLayout),
					style: B
				}, k), M = r.a.createElement(i.a, {
					hideOnlyChildMargin: O,
					className: f,
					disableFullscreen: x,
					fitPageToContent: E,
					forcedLayout: _,
					isCollectionLayout: C
				}, h, n && r.a.createElement(v, {
					subredditName: n
				}), p);
				let D;
				D = w ? r.a.createElement(r.a.Fragment, null, w[0], M, w[1]) : N ? r.a.createElement(r.a.Fragment, null, R, M) : r.a.createElement(r.a.Fragment, null, M, R);
				const U = x ? `${S||l.a+2*c.l}px` : "100%",
					F = Object(s.useContext)(u.a);
				return r.a.createElement(y.a, {
					subredditId: T
				}, r.a.createElement("div", {
					className: Object(a.a)(j.a.outerContainer, d.i, m, {
						[j.a.outerContainerExp]: F
					}),
					ref: b
				}, r.a.createElement(o.a, {
					className: d.h,
					redditStyle: P,
					backgroundColor: t
				}), r.a.createElement("div", {
					className: j.a.innerContainer
				}, I, g, (e => e.hero ? r.a.createElement(r.a.Fragment, null, e.hero) : null)(e), r.a.createElement("div", {
					style: {
						maxWidth: U
					}
				}, L), r.a.createElement("div", {
					className: j.a.body,
					style: {
						maxWidth: U
					}
				}, D))))
			}
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.GatedSubreddit = "GatedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				c = n("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				d = n("./src/reddit/constants/experiments.ts"),
				l = n("./src/reddit/constants/postLayout.ts"),
				u = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts");
			const m = Object(s.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e(0), n.e("CollectionCommentsPage~ModProgressModule~NewCommunityProgress"), n.e("NewCommunityProgress")]).then(n.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx"
				}
			});

			function b(e) {
				let {
					postLayout: t,
					subredditId: n,
					subredditSubscribers: s
				} = e;
				var r;
				const b = Object(i.e)(e => e.subreddits.survey[n]),
					p = Object(i.e)(e => e.subreddits.progressModule[n]),
					h = Object(i.e)(u.a),
					f = h !== d.Xe.NewModule;
				return (null === (r = null == p ? void 0 : p.cards) || void 0 === r ? void 0 : r.length) > 0 && f ? o.a.createElement(m, {
					closeModuleOnMount: !!t && t !== l.g.Large,
					subredditId: n,
					progressModule: p
				}) : t !== l.g.Large ? null : (null == b ? void 0 : b.isEligible) && !(null == b ? void 0 : b.response) && (!h || h && s > 100) ? o.a.createElement(c.a, {
					subredditId: n,
					survey: b
				}) : o.a.createElement(a.a, {
					subredditId: n
				})
			}
		},
		"./src/reddit/pages/Subreddit/index.m.less": function(e, t, n) {
			e.exports = {
				duHeader: "otZ2uDhYTr1YmgF32ArRm",
				cardChild: "_3HLyjC36ED_cOkMhS77Ts1",
				classicChild: "_2YjutkjJwMliy9kOCltIuA",
				compactChild: "m6QmcOHa4tObaem8JhVz8",
				sidebar: "_3ZmEUUvrdj4LXpXC9XZdN7",
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx"
			}
		},
		"./src/reddit/pages/Subreddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/lodash/fromPairs.js"),
				o = n.n(r),
				i = n("./node_modules/lodash/memoize.js"),
				a = n.n(i),
				c = n("./node_modules/lodash/throttle.js"),
				d = n.n(c),
				l = n("./node_modules/react/index.js"),
				u = n.n(l),
				m = n("./node_modules/react-redux/es/index.js"),
				b = n("./node_modules/react-router-redux/es/index.js"),
				p = n("./node_modules/reselect/es/index.js"),
				h = n("./node_modules/@reddit/reddit-country-url-redirects/dist/esm/index.js"),
				f = n("./src/config.ts"),
				g = n("./src/lib/classNames/index.ts"),
				x = n("./src/lib/constants/index.ts"),
				E = n("./src/lib/extractQueryParams/index.ts"),
				v = n("./src/lib/isAdHocMultireddit/index.ts"),
				y = n("./src/lib/isFakeSubreddit/index.ts"),
				_ = n("./src/lib/listingSort/index.ts"),
				j = n("./src/lib/makeListingKey/index.ts"),
				O = n("./src/lib/objectSelector/index.ts"),
				C = n("./src/lib/promo/withShowSignupUpsell.tsx"),
				N = n("./src/lib/fastdom/index.ts"),
				S = n("./src/lib/performanceTimings/index.tsx"),
				I = n("./src/reddit/actions/preferences.ts"),
				P = n("./src/reddit/actions/search.ts"),
				k = n("./src/reddit/actions/searchQueryId/index.tsx"),
				w = n("./src/reddit/actions/subreddit.ts"),
				L = n("./src/reddit/components/AwardedListingBanner/index.tsx"),
				T = n("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				A = n("./src/reddit/components/ContentGate/index.tsx"),
				B = n("./src/reddit/components/CreatePostBanner/index.tsx"),
				R = n("./src/reddit/components/Econ/Prediction/CreatingTournamentBanner/async.ts"),
				M = n("./src/reddit/components/Econ/PredictionsPostList/index.tsx"),
				D = n("./src/reddit/components/Econ/Tournament/Sidebar/index.tsx"),
				U = n("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				F = n("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				V = n("./src/reddit/components/EmptySubredditPostList/index.tsx"),
				q = n("./src/reddit/components/GarlicBreadEmbed/index.tsx"),
				W = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				H = n("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				G = n("./src/reddit/components/HeaderImage/index.tsx"),
				K = n("./src/reddit/components/InFeedPostCreation/async.tsx"),
				z = n("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				Q = n("./src/reddit/components/JumpToContent/index.tsx"),
				Z = n("./src/reddit/components/ListingPostList/index.tsx"),
				J = n("./src/reddit/components/NewPostPill/index.tsx"),
				X = n("./src/reddit/components/PrivateFeedPage/index.tsx"),
				Y = n("./src/reddit/components/RelatedSubredditsCarousel/async.tsx"),
				$ = n("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				ee = n("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				te = n("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				ne = n("./src/reddit/components/SubredditSidebar/index.tsx"),
				se = n("./src/reddit/components/TabBadger/index.tsx"),
				re = n("./src/reddit/components/TrackingHelper/index.tsx"),
				oe = n("./src/reddit/components/Upsell/NsfwBlocking/index.tsx"),
				ie = n("./src/reddit/constants/parameters.ts"),
				ae = n("./src/reddit/constants/postLayout.ts"),
				ce = n("./src/reddit/contexts/PageLayer/index.tsx"),
				de = n("./src/higherOrderComponents/withLSWatcher.tsx"),
				le = n("./src/reddit/featureFlags/index.ts"),
				ue = n("./src/reddit/helpers/correlationIdTracker.ts"),
				me = n("./src/reddit/helpers/datadome.ts"),
				be = n("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				pe = n("./src/reddit/helpers/name/index.ts"),
				he = n("./src/reddit/helpers/resonatePage/index.ts"),
				fe = n("./src/reddit/helpers/trackers/postList.ts"),
				ge = n("./src/reddit/helpers/trackers/screenview.ts"),
				xe = n("./src/reddit/hooks/useSessionBlockingModal.tsx"),
				Ee = n("./src/reddit/layout/page/Listing/index.tsx"),
				ve = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				ye = n("./src/reddit/models/ModeratingSubreddits/index.ts"),
				_e = n("./src/reddit/selectors/countrySites.ts"),
				je = n("./src/reddit/selectors/discoveryUnit.ts"),
				Oe = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				Ce = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				Ne = n("./src/reddit/selectors/experiments/garlicBread.ts"),
				Se = n("./src/reddit/selectors/experiments/i18n/hideTrending.ts"),
				Ie = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Pe = n("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				ke = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				we = n("./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts"),
				Le = n("./src/reddit/selectors/experiments/onboarding.ts"),
				Te = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				Ae = n("./src/reddit/selectors/experiments/resonatePilot.ts"),
				Be = n("./src/reddit/selectors/experiments/topPosts.ts"),
				Re = n("./src/reddit/selectors/features/communityChat/index.ts"),
				Me = n("./src/reddit/selectors/listings.ts"),
				De = n("./src/reddit/selectors/meta.ts"),
				Ue = n("./src/reddit/selectors/moderatorPermissions.ts"),
				Fe = n("./src/reddit/selectors/newPostPill.ts"),
				Ve = n("./src/reddit/selectors/posts.ts"),
				qe = n("./src/reddit/selectors/searchQueryId.ts"),
				We = n("./src/reddit/selectors/subreddit.ts"),
				He = n("./src/reddit/selectors/user.ts"),
				Ge = n("./src/reddit/selectors/userPrefs.ts"),
				Ke = n("./src/reddit/selectors/experiments/cnc/index.ts"),
				ze = n("./src/lib/countrySites/index.ts"),
				Qe = n("./src/reddit/components/CommunityChat/contexts/MatrixClientContext.tsx"),
				Ze = n("./src/reddit/components/Onboarding/Interests/InterestPickerPreview.tsx"),
				Je = n("./src/reddit/constants/countrySites.ts"),
				Xe = n("./src/reddit/helpers/search/searchQueryId.ts"),
				Ye = n("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				$e = n("./src/reddit/selectors/experiments/communityChat.ts"),
				et = n("./src/reddit/selectors/onboarding.ts"),
				tt = n("./src/reddit/selectors/platform.ts"),
				nt = n("./src/reddit/components/CommunityChat/index.tsx"),
				st = n("./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx"),
				rt = n("./src/reddit/selectors/experiments/relatedCommunityRecommendationsSubreddit.ts"),
				ot = n("./src/reddit/pages/Subreddit/index.m.less"),
				it = n.n(ot),
				at = n("./src/reddit/pages/Subreddit/SurveyUnit.tsx");

			function ct() {
				return (ct = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: dt
			} = n("./node_modules/fbt/lib/FbtPublic.js"), lt = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-AdHocMultiredditSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), n.e("reddit-components-AdHocMultiredditSidebar")]).then(n.bind(null, "./src/reddit/components/AdHocMultiredditSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/AdHocMultiredditSidebar/index.tsx"
				}
			}), ut = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-LayerEmbed",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("reddit-components-LayerEmbed").then(n.bind(null, "./src/reddit/components/LayerEmbed/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/LayerEmbed/index.tsx"
				}
			}), mt = 5, bt = 3, pt = 6e3, ht = Object(ce.v)(), ft = Object(s.a)({
				resolved: {},
				chunkName: () => "SubredditTopContent",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("SubredditTopContent~TopWeekPostsDiscoveryUnit"), n.e("SubredditTopContent")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx"
				}
			}), gt = Object(O.a)(Object(p.a)((e, t) => {
				let {
					location: n
				} = t;
				return n.search
			}, e => o()([...Object(E.a)(e)]))), xt = e => Object(Me.a)(e) || "", Et = Object(p.c)({
				isTopContentDismissed: He.ab
			}), vt = Object(p.c)({
				subreddit: (e, t) => Object(We.C)(e, {
					subredditName: t.match.params.subredditName
				})
			}), yt = Object(p.c)({
				isLoggedIn: He.S
			}), _t = Object(O.a)((e, t) => {
				const {
					subreddit: n
				} = vt(e, t), {
					subredditName: s
				} = t.match.params;
				if (n) {
					if (e.subreddits.progressModule[n.id]) return !1;
					if (Object(Pe.a)(e)) return !1;
					const t = xt(e),
						r = Object(Ue.b)(ye.c.config)(e, {
							subredditId: n.id
						}),
						o = Object(Ve.C)(e, t, s, !0),
						i = !Object(Me.d)(e, {
							listingKey: t
						});
					if (r && i && o.length <= 1) return !0
				}
				return !1
			}), jt = (e, t) => {
				const n = xt(e),
					s = Object(ce.U)(e, t),
					{
						sort: r
					} = Nt(e, t);
				return Object(Fe.a)(e, {
					layout: s,
					listingKey: n,
					sort: r
				})
			}, Ot = Object(p.c)({
				inAwardListingExperiment: Ce.a,
				isPopular: ce.H
			}), Ct = e => {
				const t = ie.H in e && e[ie.H].toUpperCase();
				if ("string" == typeof t && t in x.nc) return x.nc[t]
			}, Nt = Object(O.a)((e, t) => {
				const {
					sort: n,
					subredditName: s,
					countryCode: r,
					languageCode: o
				} = t.match.params, i = gt(e, t), a = Object(y.a)(s, {
					countryCode: r,
					languageCode: o
				}), c = Object(y.c)(s, {
					countryCode: r,
					languageCode: o
				});
				if (n) return Object(_.b)({
					sort: n,
					timeSort: Ct(i)
				});
				if (a) return c && Object(Oe.a)(e) ? Object(_.b)({
					sort: x.ab.BEST
				}) : Object(_.b)({
					sort: x.ab.HOT
				});
				const d = xt(e),
					l = e.listings.postOrder.listingSort[d];
				if (l && !l.hasChanged) return Object(_.d)(l.sort);
				const {
					subreddit: u
				} = vt(e, t);
				if (u) {
					const t = Object(We.G)(e, {
						subredditId: u.id
					});
					return Object(_.d)(t)
				}
				return Object(_.d)(e.user.prefs.sort)
			}), St = Object(O.a)((e, t) => {
				const {
					subredditName: n
				} = t.match.params;
				return Object(We.bb)(e, {
					subredditName: n
				})
			}), It = Object(p.c)({
				currentPage: tt.b,
				countrySiteSettings: _e.a,
				isBlacklistedTopContentPage: je.e,
				listingKey: xt,
				sortParams: Nt,
				specialMembershipUpsellsEnabled: le.d.spSpecialMembershipUpsells,
				topContent: St,
				topContentDiscoveryUnit: e => Object(je.b)(e, {
					unitName: ve.a
				}),
				topPostsVariant: Be.d,
				walletRegistrationBannerEnabled: le.d.spWalletRegistrationBanner,
				nsfwBlockingExperiment: ke.g,
				isNsfwBlurSubreddit: ke.e,
				isAllNsfwPagesEnabled: ke.f,
				searchResultsServerQueryId: e => Object(qe.a)(e),
				showNewDesignBlocking: we.a,
				accessToken: He.a,
				matrixChatRoomId: (e, t) => {
					let {
						match: n
					} = t;
					var s;
					return Object(Re.b)(e, null !== (s = n.params.channelId) && void 0 !== s ? s : "")
				}
			}), Pt = Object(p.c)({
				showCreatePostBanner: _t,
				contentGateInfo: (e, t) => Object(He.h)(e, t.match.params.subredditName),
				layout: ce.U,
				inResonatePilot: Ae.a,
				newPostPillTriggerIdx: jt,
				isReducedAnimation: Ge.d,
				isCommentCountAnimationEnabled: Te.d,
				isTrendingHiddenEnabled: Se.b,
				isVoteCountAnimationEnabled: Te.h,
				isCountAnimShadowTestEnabled: Te.e,
				isGarlicBreadEmbedEnabled: Ne.c,
				isBlockingInterstitialEnabled: Ie.b,
				isBlockingInterstitialV2Enabled: Ie.c,
				interestTopicRecommendations: et.b,
				reonboardingFlow: Le.j,
				shouldShowCommunityChat: $e.d,
				isPrivateCommunityUXEnabled: Ke.c,
				isNightmodeOn: He.fb
			}), kt = () => Object(p.a)(He.mb, gt, Et, vt, (e, t) => {
				let {
					match: n
				} = t;
				return Object(We.z)(e, {
					subredditName: n.params.subredditName
				})
			}, Ve.F, yt, (e, t) => {
				let {
					match: n
				} = t;
				return n.params.subredditName
			}, De.m, Ot, It, Pt, (e, t, n, s, r, o, i, a, c, d, l, u) => {
				let {
					isTopContentDismissed: m
				} = n, {
					subreddit: b
				} = s, {
					isLoggedIn: p
				} = i, {
					inAwardListingExperiment: h,
					isPopular: f
				} = d, {
					currentPage: g,
					countrySiteSettings: x,
					specialMembershipUpsellsEnabled: E,
					listingKey: v,
					sortParams: {
						sort: y,
						timeSort: _
					},
					topContent: j,
					topContentDiscoveryUnit: O,
					topPostsVariant: C,
					isBlacklistedTopContentPage: N,
					walletRegistrationBannerEnabled: S,
					nsfwBlockingExperiment: I,
					isNsfwBlurSubreddit: P,
					isAllNsfwPagesEnabled: k,
					searchResultsServerQueryId: w,
					showNewDesignBlocking: L,
					accessToken: T,
					matrixChatRoomId: A
				} = l;
				const B = t && ie.l in t ? t[ie.l].toUpperCase() : c,
					R = !!t.hasOwnProperty("f");
				return {
					currentPage: g,
					countrySort: B,
					countrySiteSettings: x,
					specialMembershipUpsellsEnabled: E,
					inAwardListingExperiment: h,
					isLoggedIn: p,
					isPopular: f,
					listingKey: v,
					renderNSFWContentGate: b && b.isNSFW && !e,
					isTopContentDismissed: m,
					post: o,
					queryParams: t,
					sort: y,
					subreddit: b,
					subredditAboutInfo: r,
					subredditName: a,
					timeSort: _,
					topContent: j,
					topContentDiscoveryUnit: O,
					topPostsVariant: C,
					isBlacklistedTopContentPage: N,
					isFlairFilter: R,
					walletRegistrationBannerEnabled: S,
					nsfwBlockingExperiment: I,
					isNsfwBlurSubreddit: P,
					isAllNsfwPagesEnabled: k,
					searchResultsServerQueryId: w,
					showNewDesignBlocking: L,
					accessToken: T,
					matrixChatRoomId: A,
					...u
				}
			}), wt = (e, t) => ({
				onLoadMorePosts: () => {
					e(w.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					}))
				},
				onLoadMoreSearchResults: () => e(Object(P.p)([x.hc.Posts])),
				refreshFeed: () => e(w.s({
					sort: t.match.params.sort,
					subredditName: t.match.params.subredditName
				})),
				setTopContentDismissalPref: () => e(Object(I.E)()),
				redirectToNewSort: () => {
					e(Object(b.b)(`/r/${t.match.params.subredditName}/${x.ab.NEW}/`))
				},
				unsetSearchResultsServerQueryId: () => e(Object(k.c)())
			}), Lt = Object(m.b)(kt, wt), Tt = Object(s.a)({
				resolved: {},
				chunkName: () => "Trending",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("Trending").then(n.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
				}
			}, {
				ssr: !1
			}), At = e => {
				return Object(m.e)(e => Object(Se.a)(e)) ? null : u.a.createElement(Tt, ct({}, e, {
					fallback: u.a.createElement(ee.a, {
						className: e.className,
						showCardView: !!e.showCardView
					})
				}))
			}, Bt = e => {
				const {
					isEnabled: t,
					variant: n
				} = Object(m.e)(rt.a);
				return e.subredditId && t ? u.a.createElement(st.b, ct({}, e, {
					variant: n,
					pageType: st.a.Community
				})) : null
			}, Rt = Object(s.a)({
				resolved: {},
				chunkName: () => "FrontpageSidebar",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("FrontpageSidebar").then(n.bind(null, "./src/reddit/components/FrontpageSidebar/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/FrontpageSidebar/index.tsx"
				}
			}), Mt = Object(s.a)({
				resolved: {},
				chunkName: () => "TopWeekPostsDiscoveryUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => Promise.all([n.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~ModerationPages~PostCreation~Profile~9a5d9fab"), n.e("SubredditTopContent~TopWeekPostsDiscoveryUnit"), n.e("TopWeekPostsDiscoveryUnit")]).then(n.bind(null, "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx"
				}
			});

			function Dt(e) {
				const {
					subreddit: t
				} = e;
				return !!t && !!t.name && "snoovatar" === t.name.toLowerCase()
			}

			function Ut(e) {
				const {
					subreddit: t
				} = e;
				return "youcannesdraw" === (null == t ? void 0 : t.name.toLowerCase())
			}
			class Ft extends u.a.Component {
				constructor(e) {
					if (super(e), this.renderNewPostPill = e => {
							e === this.props.newPostPillTriggerIdx - 1 && (this.state.isNewPostPillRenderedOnce || (this.setState({
								isNewPostPillRenderedOnce: !0,
								shouldShowNewPostPill: !0
							}), this.props.sendEvent(Object(fe.d)(this.props.listingKey)), this.newPostPillTimer = setTimeout(() => {
								this.state.shouldShowNewPostPill && this.setState({
									shouldShowNewPostPill: !1
								})
							}, pt)))
						}, this.setRelatedRecommendedCommunitiesVisible = e => {
							this.setState({
								isRelatedRecommendedCommunitiesVisible: e
							})
						}, this.onNewPostPillClick = () => {
							this.setState({
								shouldShowNewPostPill: !1
							}), this.props.sendEvent(Object(fe.c)(this.props.listingKey)), N.a.write(() => {
								window.addEventListener("scroll", this.handleScroll), window.scrollTo({
									top: 0,
									behavior: this.props.isReducedAnimation ? "auto" : "smooth"
								})
							})
						}, this.handleScroll = d()(() => {
							0 === window.scrollY && (window.removeEventListener("scroll", this.handleScroll), this.props.redirectToNewSort())
						}, x.L), this.onTopContentDismissed = () => {
							this.props.setTopContentDismissalPref()
						}, this.onViewed = (e, t) => {
							const {
								listingKey: n,
								pageLayer: s,
								sort: r,
								timeSort: o
							} = this.props, i = Object(ce.R)(s);
							return Object(ge.e)({
								key: n,
								sort: r,
								timerType: t,
								timerMillis: e,
								timeSort: o,
								isPredictionsPage: i
							})
						}, this.noPostsComponent = () => {
							const {
								pageLayer: e,
								subredditName: t,
								sort: n,
								subreddit: s
							} = this.props, r = t.toLowerCase(), o = Object(ce.R)(e);
							return u.a.createElement(V.a, {
								isPredictionsPage: o,
								listingName: r,
								sort: n,
								subreddit: s
							})
						}, this.memoizedGetInjectChildren = a()(e => {
							let {
								inAwardListingExperiment: t,
								interestTopicRecommendations: n,
								isPopular: s,
								layout: r,
								listingKey: o,
								reonboardingFlow: i,
								sendEvent: a,
								sort: c,
								specialMembershipUpsellsEnabled: d,
								subreddit: l,
								subredditName: m,
								timeSort: b,
								topPostsVariant: p,
								walletRegistrationBannerEnabled: h
							} = e;
							return () => {
								const e = {},
									f = Object(Be.c)(p),
									E = r === ae.g.Classic ? it.a.classicChild : r === ae.g.Compact ? it.a.compactChild : it.a.cardChild;
								if (d && l && (e[0] = {
										estHeight: 487,
										id: `newbie-banner-${r}-${o}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(F.a, {
												className: Object(g.a)(t, E)
											})
										}
									}, e[3] = {
										estHeight: 256,
										id: `lfg-banner-${r}-${o}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(U.a, {
												className: Object(g.a)(t, E),
												subredditId: l.id
											})
										}
									}), l && (e[0] = {
										estHeight: 175,
										id: `community-survey-${r}-${o}`,
										render: () => u.a.createElement(at.a, {
											subredditId: l.id,
											postLayout: r,
											subredditSubscribers: l.subscribers
										})
									}), t && s && c === x.ab.AWARDED && (e[0] = {
										estHeight: 180,
										id: `awardlisting-banner-${r}-${o}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(L.a, {
												className: Object(g.a)(t, E)
											})
										}
									}), h && l && (e[1] = {
										estHeight: 384,
										id: `wallet-registration-${r}-${o}`,
										render(e) {
											let {
												className: t
											} = e;
											return u.a.createElement(H.a, {
												className: Object(g.a)(t, E),
												subredditId: l.id
											})
										}
									}), !s && f && b !== x.nc.WEEK && r === ae.g.Large) {
									const t = Object(j.a)(m, x.ab.TOP, {
										t: x.nc.WEEK
									});
									e[bt] = {
										estHeight: 0,
										id: `top-week-posts-${r}-${o}`,
										render(e) {
											let {
												className: n
											} = e;
											return u.a.createElement(Mt, {
												className: n,
												listingKey: t,
												subredditName: m
											})
										}
									}
								}
								if (n) {
									const {
										interests: t,
										index: s
									} = n, {
										child: r,
										idx: o
									} = Object(Ze.a)({
										children: e,
										desiredIdx: s,
										interests: t,
										sendEvent: a,
										variant: i
									});
									e[o] = r
								}
								return e
							}
						}, e => {
							let {
								sort: t,
								layout: n,
								listingKey: s,
								timeSort: r,
								subreddit: o
							} = e;
							return `s:${t}_l:${n}_lk${s}_ts:${r}_sr:${null==o?void 0:o.id}`
						}), this.state = {
							shouldShowNewPostPill: !1,
							isNewPostPillRenderedOnce: !1,
							isRelatedRecommendedCommunitiesVisible: !1
						}, this.props.searchResultsServerQueryId.searchQueryId) {
						const {
							key: e,
							searchQueryId: t
						} = this.props.searchResultsServerQueryId;
						e && Xe.a.set(Ye.a.SERP, e, t), this.props.unsetSearchResultsServerQueryId()
					}
				}
				componentDidMount() {
					if (N.a.read(() => {
							const e = [Object(me.a)()];
							Object(S.d)(S.c.Subreddit, this.props.isLoggedIn, e)
						}), this.props.inResonatePilot) {
						const e = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						x.Rb.includes(e) && Object(he.a)(e)
					}
				}
				componentDidUpdate(e) {
					if (e.isFlairFilter && !this.props.isFlairFilter && Object(ue.c)(ue.a.SearchResults) && Object(ue.b)(ue.a.SearchResults), this.props.inResonatePilot) {
						const t = this.props.subredditName ? this.props.subredditName.toLowerCase() : "";
						(e.subredditName ? e.subredditName.toLowerCase() : "") !== t && x.Rb.includes(t) && Object(he.a)(t)
					}
					e.subredditName !== this.props.subredditName && (this.newPostPillTimer && clearTimeout(this.newPostPillTimer), this.setState({
						isNewPostPillRenderedOnce: !1,
						shouldShowNewPostPill: !1,
						isRelatedRecommendedCommunitiesVisible: !1
					}))
				}
				componentWillUnmount() {
					this.props.isFlairFilter && Object(ue.c)(ue.a.SearchResults) && Object(ue.b)(ue.a.SearchResults)
				}
				render() {
					const {
						contentGateInfo: e,
						countrySiteSettings: t,
						countrySort: n,
						currentPage: s,
						isAllNsfwPagesEnabled: r,
						isBlacklistedTopContentPage: o,
						isBlockingInterstitialEnabled: i,
						isBlockingInterstitialV2Enabled: a,
						isCommentCountAnimationEnabled: c,
						isCountAnimShadowTestEnabled: d,
						isGarlicBreadEmbedEnabled: l,
						shouldShowCommunityChat: m,
						isFlairFilter: b,
						isLoggedIn: p,
						isNightmodeOn: E,
						isNsfwBlurSubreddit: _,
						isPopular: j,
						isTopContentDismissed: O,
						isTrendingHiddenEnabled: C,
						isVoteCountAnimationEnabled: N,
						layout: S,
						listingKey: I,
						match: P,
						nsfwBlockingExperiment: k,
						pageLayer: w,
						post: L,
						renderNSFWContentGate: U,
						showCreatePostBanner: F,
						showSignupUpsell: V,
						sort: H,
						subreddit: ee,
						subredditAboutInfo: re,
						subredditName: ie,
						timeSort: de,
						topContent: le,
						topContentDiscoveryUnit: ue,
						topPostsVariant: me,
						showNewDesignBlocking: he,
						accessToken: fe,
						matrixChatRoomId: ge,
						isPrivateCommunityUXEnabled: xe
					} = this.props, ve = this.memoizedGetInjectChildren(this.props), ye = Object(_e.b)(s), je = Object(y.a)(ie, {
						countryCode: null == ye ? void 0 : ye.countryCode,
						languageCode: null == ye ? void 0 : ye.languageCode
					}), Oe = ie.toLowerCase(), Ce = ee && ee.url ? ee.url : Object(ze.d)(`/r/${ie}/`, null == ye ? void 0 : ye.countryCode, null == ye ? void 0 : ye.languageCode), Ne = Object(h.a)({
						countryCode: Je.a,
						languageCode: Je.b,
						hardcodedPath: Ce,
						permalink: Ce,
						subredditName: ie
					}, t), Se = {
						listingKey: I,
						listingName: Oe
					}, Ie = Object(Be.a)(me), Pe = Object(Be.b)(me), we = Object(ce.R)(w);
					let Le;
					je ? Le = Object(v.a)(ie) ? u.a.createElement(lt, Se) : u.a.createElement(Rt, Se) : ee && (Le = we ? u.a.createElement(D.a, {
						subredditId: ee.id
					}) : u.a.createElement(ne.a, ct({}, Se, {
						className: it.a.sidebar,
						subredditId: ee.id,
						subredditName: ie,
						topPostsVariant: me
					})));
					const Te = (null == L ? void 0 : L.isNSFW) && r;
					if (((null == ee ? void 0 : ee.isNSFW) || Te) && k === ke.a.NoPreview && he) return u.a.createElement(oe.a, {
						contentTitle: Object(pe.d)(ie)
					});
					const Ae = Object(be.a)(e, U, ie);
					if (Ae && xe && (null == e ? void 0 : e.privateSubreddit)) return u.a.createElement(X.a, {
						isLoggedIn: p,
						isNightmodeOn: E
					});
					if (Ae && !_) return u.a.createElement(A.default, Ae);
					const Re = S === ae.g.Large,
						Me = j,
						De = ee ? ee.id : void 0,
						Ue = !P.params.sort && le && !le.isSubscribed && le.postIds && le.postIds.length >= mt && !O && !o && !Ie && !Pe,
						Fe = {
							baseUrl: Ne,
							countrySort: n,
							sort: H,
							subredditId: De,
							timeSort: de
						},
						Ve = b ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						qe = ee && ee.subscribers;
					let We;
					const He = window.URL;
					if (Dt(this.props)) {
						const e = new He(f.a.snoovatarUrl + "/static/client/");
						e.searchParams.set("platform", "desktop"), We = u.a.createElement("iframe", {
							className: Object(g.a)(it.a.af),
							src: e.href
						})
					} else Me ? We = u.a.createElement(At, {
						showCardView: this.props.layout === ae.g.Large
					}) : Ut(this.props) && this.props.subreddit && (We = u.a.createElement(ut, {
						baseUrl: f.a.layersUrl,
						subredditId: this.props.subreddit.id
					}));
					const Ge = S === ae.g.Large && H !== x.ab.NEW && !we && !je,
						Ke = m && ge,
						Ze = this.state.shouldShowNewPostPill && Ge && !Ke,
						Xe = we ? M.a : Z.a,
						Ye = k === ke.a.Blurred && (null == ee ? void 0 : ee.isNSFW),
						$e = u.a.createElement(Ee.a, {
							subredditId: De,
							className: Object(g.a)(it.a.Container, this.props.className),
							fitPageToContent: !0,
							navBar: !je && u.a.Children.toArray([u.a.createElement(G.a, {
								headerText: ee ? ee.name : ie,
								disableFullscreen: Re,
								isTopBannerVariant: !0,
								key: "headerimage",
								shouldBlurHeaderImage: Ye,
								subredditOrProfile: ee,
								url: Ne
							}), u.a.createElement(T.a, {
								layout: S,
								key: "idtopbar",
								subreddit: ee || void 0,
								subredditId: De,
								subredditName: ie,
								subredditUrl: Ne,
								setRelatedRecommendedCommunitiesVisible: this.setRelatedRecommendedCommunitiesVisible
							}), l && u.a.createElement(q.a, null), De && u.a.createElement(Y.a, {
								key: "related-subreddit-carousel",
								subredditId: De
							})]),
							trendingUnit: We,
							content: u.a.createElement(u.a.Fragment, null, ee && ee.isQuarantined && u.a.createElement(z.a, {
								subredditName: ie
							}), ee && !ee.isNSFW && this.state.isRelatedRecommendedCommunitiesVisible && u.a.createElement(Bt, {
								subredditId: ee.id,
								subredditDisplayText: ee.displayText,
								onDismiss: () => {
									this.setRelatedRecommendedCommunitiesVisible(!1)
								}
							}), ee && F && !Ke && u.a.createElement(B.a, {
								subreddit: ee,
								listingKey: I,
								listingName: Oe
							}), Me && !C && u.a.createElement($.a, {
								className: it.a.duHeader
							}, dt._("Popular posts", null, {
								hk: "Gfyj2"
							})), Ue && !Ke && u.a.createElement(ft, {
								discoveryUnit: ue,
								subredditName: ee ? ee.name : ie,
								topContent: le,
								onCloseClick: this.onTopContentDismissed
							}), !je && p && !Ke && !(re && re.userIsBanned) && !we && u.a.createElement(K.a, {
								subredditName: ie
							}), !we && !Ke && u.a.createElement(W.a, Fe), u.a.createElement(Q.a, null), u.a.createElement(se.a, {
								handlePillClick: this.props.refreshFeed,
								listingKey: I,
								subredditName: ie,
								subscriberCount: qe
							}), we && u.a.createElement(R.a, {
								subreddit: ee
							}), Ze && u.a.createElement(J.a, {
								onClick: this.onNewPostPillClick,
								subredditName: ie
							}), Ke ? u.a.createElement(nt.a, {
								roomId: ge,
								accessToken: fe
							}) : u.a.createElement(Xe, {
								getInjectChildren: we ? void 0 : ve,
								isCommentCountAnimationEnabled: c,
								isVoteCountAnimationEnabled: N,
								isCountAnimShadowTestEnabled: d,
								listingKey: I,
								listingName: Oe,
								listingViewed: this.onViewed,
								triggerNewPostPill: Ge ? this.renderNewPostPill : void 0,
								noPostsComponent: this.noPostsComponent,
								onLoadMore: Ve,
								onScroll: V,
								inSubredditOrProfile: !je,
								disablePlaceholder: j && H === x.ab.AWARDED,
								isBlockingInterstitialEnabled: i || a,
								preventScrollOnMount: m
							})),
							sidebar: Le,
							isPageSwapped: m
						});
					return u.a.createElement(te.a, {
						subredditId: De
					}, m ? u.a.createElement(Qe.a, null, $e) : $e)
				}
			}
			t.default = ht(Lt(Object(de.a)(Object(re.c)(Object(C.a)(Object(xe.d)(Ft))))))
		},
		"./src/reddit/reducers/features/eligibleUXExperiences/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/actions/eligibleUxExperiences/constants.ts");
			const r = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
						experiences: {}
					},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.a: {
						const n = Date.now(),
							{
								experiences: s
							} = t.payload;
						return {
							...e,
							experiences: {
								...e.experiences,
								...Object.keys(s).reduce((e, t) => ({
									...e,
									[t]: {
										value: s[t],
										fetched: n
									}
								}), {})
							}
						}
					}
					case s.b: {
						const {
							experience: n,
							value: s
						} = t.payload;
						return {
							...e,
							experiences: {
								...e.experiences,
								[n]: {
									...e.experiences[n],
									value: s
								}
							}
						}
					}
				}
				return e
			}
		},
		"./src/reddit/selectors/eligibleUXExperiences.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/eligibleUXExperiences/index.ts");
			Object(s.a)({
				features: {
					eligibleUXExperiences: r.a
				}
			});
			const o = (e, t) => {
				var n, s, r;
				return (null === (r = null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.eligibleUXExperiences) || void 0 === s ? void 0 : s.experiences) || void 0 === r ? void 0 : r[t.experience]) || null
			}
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const i = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: o.S,
						experimentName: s.Ad
					});
					return !(!t || Object(s.Eg)(t))
				},
				a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.S,
						experimentName: s.Ad
					}) === s.Vd.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/hidePostMitigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.ne
					}) === s.Rd
				},
				i = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.oe
					}) === s.Rd
				}
		},
		"./src/reddit/selectors/experiments/i18n/hideTrending.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./node_modules/reselect/es/index.js");
			const i = Object(o.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Kb
				}), e => e === s.qe.HideTrending),
				a = Object(o.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.Kb,
					expEventOverride: !1
				}), e => e === s.qe.HideTrending)
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/index.ts");
			const a = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Rb,
					experimentEligibilitySelector: i.e
				}), e => e === r.V.Enabled),
				c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Sb,
					experimentEligibilitySelector: i.e
				}), e => e === r.W.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Tb,
					experimentEligibilitySelector: i.e
				}), e => e === r.X.Enabled),
				l = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Ub,
					experimentEligibilitySelector: i.e
				}), e => e === r.Y.Enabled),
				u = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Wb,
					experimentEligibilitySelector: i.e
				}), e => e === r.ab.Enabled),
				m = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.Vb,
					experimentEligibilitySelector: i.e
				}), e => e === r.Z.Enabled)
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(r.c)(e, {
				experimentName: s.Ne,
				experimentEligibilitySelector: r.a
			}) === s.We.Enabled
		},
		"./src/reddit/selectors/experiments/nsfwBypassableBlockingExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/localStorageAvailable/index.ts"),
				o = n("./src/reddit/constants/experiments.ts"),
				i = n("./src/reddit/constants/localStorage.ts"),
				a = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				c = n("./src/reddit/selectors/userPrefs.ts"),
				d = n("./node_modules/reselect/es/index.js");
			const l = 30 * s.ob,
				u = () => {
					localStorage.setItem(i.b.XpromoConsolidation, (new Date).toString())
				},
				m = () => {
					if (!Object(r.a)()) return !1;
					const e = localStorage.getItem(i.b.XpromoConsolidation);
					if (!e) return !0;
					const t = Date.parse(e);
					return Number.isNaN(t) ? (localStorage.removeItem(i.b.XpromoConsolidation), !0) : Date.now() > t + l
				},
				b = (e, t) => t === a.a.NoPreview && (e === o.ib.SkippableButtons || e === o.ib.SkippableText),
				p = (e, t) => t === a.a.NoPreview && e === o.ib.NoUpsell,
				h = Object(d.a)(a.h, a.g, (e, t) => {
					return {
						isControlVariant: !(!e || !t) && ((e, t) => t === a.a.NoPreview && !b(e, t) && !p(e, t))(e, t),
						isNewDesignVariant: !(!e || !t) && b(e, t),
						isOldDesignVariant: !(!e || !t) && p(e, t),
						variant: e
					}
				}),
				f = Object(d.a)(h, c.a, (e, t) => !e.isOldDesignVariant && (!e.isNewDesignVariant || !t))
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/presence.ts"),
				a = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.h
					});
					return t === s.l.VoteCountOnly || t === s.l.CommentCountOnly || t === s.l.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.h
					});
					return t === s.l.VoteCountOnly || t === s.l.VoteAndCommentCount
				},
				u = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.h
					});
					return t === s.l.CommentCountOnly || t === s.l.VoteAndCommentCount
				},
				m = (e, t) => {
					let {
						post: n
					} = t;
					return b(e, {
						postId: n.id
					})
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const r = e.posts.models[n];
					if (Object(a.d)(e) || !r || r.isSponsored || r.isScoreHidden || r.score >= c || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: s.h
						}),
						l = null == d ? void 0 : d.variant;
					return l === s.l.VoteCountOnly || l === s.l.VoteAndCommentCount
				},
				p = (e, t) => {
					let {
						postId: n
					} = t;
					const r = e.posts.models[n];
					if (Object(a.d)(e) || !r || r.isSponsored || r.numComments >= c || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: s.h
						}),
						l = null == d ? void 0 : d.variant;
					return l === s.l.CommentCountOnly || l === s.l.VoteAndCommentCount
				},
				h = e => {
					if (Object(i.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.Bc
					}) === s.ld.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: s.kf
				}) === s.Rd
			}
		},
		"./src/reddit/selectors/experiments/relatedCommunityRecommendationsSubreddit.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts");

			function i(e) {
				return e === s.xf.Minimalist || e === s.xf.Description || e === s.xf.SocialSignals
			}
			const a = e => {
				const t = Object(r.c)(e, {
					experimentEligibilitySelector: o.e,
					experimentName: s.Ic
				}) || s.R.Control1;
				return {
					isEnabled: i(t),
					variant: t
				}
			}
		},
		"./src/reddit/selectors/experiments/resonatePilot.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/meta.ts");
			const i = e => Object(r.c)(e, {
				experimentEligibilitySelector: e => !Object(o.d)(e) && "US" === Object(o.b)(e),
				experimentName: s.vf
			}) === s.Af.Enabled
		},
		"./src/reddit/selectors/experiments/shredditMigration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "h", (function() {
				return _
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts");
			const i = /^\/?(new|top|hot|controversial|rising|best)?\/?$/,
				a = /^\/r\/all\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				c = /^\/r\/popular\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				d = /^\/r\/[^/]+\/?((controversial|new|about|top)\/?)?$/,
				l = /^\/r\/[^/]+\/w(iki)?\/?([^/]+\/?)?$/,
				u = /^\/u(?:ser)?\/[^/]+(\/[^/]+)?\/?$/,
				m = e => !!e.match(i) || !!e.match(c),
				b = e => !e.match(c) && (!e.match(a) && (!!e.match(d) || !!e.match(l))),
				p = (e, t) => !!m(t) && [s.Zf.Enabled, s.Zf.HardReload].includes(Object(r.c)(e, {
					experimentEligibilitySelector: o.f,
					experimentName: s.If
				})),
				h = (e, t) => !!t.match(a) && [s.Zf.Enabled, s.Zf.HardReload].includes(Object(r.c)(e, {
					experimentEligibilitySelector: o.f,
					experimentName: s.Gf
				})),
				f = (e, t) => !!b(t) && [s.Zf.Enabled, s.Zf.HardReload].includes(Object(r.c)(e, {
					experimentEligibilitySelector: o.f,
					experimentName: s.Hf
				})),
				g = (e, t) => !(!b(t) && !m(t)) && Object(r.c)(e, {
					experimentEligibilitySelector: o.f,
					experimentName: s.pe
				}) === s.Rd,
				x = (e, t) => (e => {
					return /^(?:\/r\/[^\/]+)?\/search\/?$/i.test(e) || /^\/u(?:ser)?\/[^\/]+\/m\/[^\/]+\/search\/?$/i.test(e)
				})(t) && Object(o.f)(e),
				E = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.f,
						experimentName: s.Jf
					})
				},
				v = (e, t) => !!(e => !!e.match(u))(t) && (E(e) === s.Zf.Enabled || E(e) === s.Zf.HardReload),
				y = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.e,
						experimentName: s.Mf
					})
				},
				_ = (e, t) => !!(e => !!e.match(u))(t) && y(e) === s.Zf.Enabled
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/selectors/user.ts"),
				i = n("./src/reddit/selectors/experiments/shredditMigration.ts");
			const a = Object(r.a)(o.S, e => !e),
				c = (e, t) => {
					const n = t();
					e.block(e => {
						let t = !1;
						if (Object(o.S)(n)) {
							Object(i.h)(n, e.pathname) && (t = !0)
						} else {
							const s = (e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname),
								r = Object(i.b)(n, e.pathname),
								o = Object(i.e)(n, e.pathname),
								a = Object(i.c)(n, e.pathname),
								c = Object(i.d)(n, e.pathname),
								d = Object(i.f)(n, e.pathname),
								l = Object(i.g)(n, e.pathname);
							(r || s || o || a || c || d || l) && (t = !0)
						}
						if (t) {
							const t = e.pathname + e.search;
							return Object(s.f)(n), window.location.href = t, !1
						}
					})
				}
		},
		"./src/reddit/selectors/experiments/signupUpsellExperiment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "f", (function() {
				return h
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/meta.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const c = Object(s.a)(i.h, i.d, a.e, (e, t, n) => !e && !t && !n);

			function d(e, t) {
				return n => Object(o.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: c,
					throttledVariants: {
						[r.dd.Bottom_cell_dismissible]: e,
						[r.dd.Bottom_cell_dismissible_immediate_trigger]: e,
						[r.dd.Bottom_sheet]: e
					},
					expEventOverride: t
				})
			}
			const l = d(r.Db, !0),
				u = d(r.Eb, !0),
				m = d(r.Fb, !0),
				b = d(r.Db, !1),
				p = d(r.Eb, !1),
				h = d(r.Fb, !1)
		},
		"./src/reddit/selectors/experiments/uxtsIntegration.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = e => {
					var t;
					return (null === (t = null == e ? void 0 : e.user.experiments.byName[r.Wc]) || void 0 === t ? void 0 : t.variant) === r.Rd
				},
				c = Object(s.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: i.S,
					experimentName: r.Xb
				}), e => e === r.gd.BottomSheet),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: i.S,
					experimentName: r.Xb,
					expEventOverride: !1
				}), e => !!e)
		},
		"./src/reddit/selectors/newPostPill.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/constants/postLayout.ts"),
				o = n("./src/reddit/selectors/posts.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = (e, t) => Object(i.R)(e) && ((e, t) => {
				const {
					layout: n,
					sort: i,
					listingKey: a
				} = t, c = (Object(o.y)(e, {
					listingKey: a
				}) || []).length;
				return n === r.g.Large && i !== s.ab.NEW && c >= 20
			})(e, t) ? 10 : -1
		},
		"./src/reddit/selectors/searchQueryId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = e => e.searchQueryId
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/selectors/user.ts");
			const o = e => {
					const t = Object(r.S)(e);
					if (i(e)) return !1;
					const {
						subscriptionsPinned: n
					} = e.user.prefs;
					return void 0 === n && !t || !!n
				},
				i = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Sb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${a}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${s.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(i, `${s.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const s = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(s), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(s)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					r.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		},
		"./src/redditGQL/operations/FetchEligibleUXExperiences.json": function(e) {
			e.exports = JSON.parse('{"id":"388d61b2a794"}')
		},
		"./src/redditGQL/operations/GetRelatedCommunityRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"1a3f607eabf6"}')
		},
		"./src/redditGQL/operations/StoreUxTargetingAction.json": function(e) {
			e.exports = JSON.parse('{"id":"e734e21836ec"}')
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"be09d1d59e65"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Subreddit.68bf6bdf77273c453476.js.map