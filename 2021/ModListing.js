// https://www.redditstatic.com/desktop2x/ModListing.55fc66a5cbf9335a59d4.js
// Retrieved at 12/1/2021, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ModListing"], {
		"./src/higherOrderComponents/asModal/index.m.less": function(e, t, r) {
			e.exports = {
				overlay: "_1DK52RbaamLOWw5UPaht_S",
				mIsVisible: "_1acwN_tUhJ8w-n7oCp-Aw3",
				modal: "_2Bejocqb-InO8686E2ehf"
			}
		},
		"./src/higherOrderComponents/asModal/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/FocusTrap/index.ts"),
				i = r("./src/lib/portal/index.tsx"),
				d = r("./src/reddit/actions/shortcuts/utils.ts"),
				c = r("./src/reddit/constants/shortcuts.ts"),
				u = r("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				l = r("./src/higherOrderComponents/asModal/index.m.less"),
				m = r.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ({
				className: e,
				isVisible: t,
				...r
			}) => s.a.createElement("div", p({
				className: Object(o.a)(m.a.overlay, e, {
					[m.a.mIsVisible]: t
				})
			}, r));

			function f(e) {
				class t extends n.Component {
					constructor(e) {
						super(e), this.getRef = e => this.ref = e, this.onClick = e => e.stopPropagation(), this.onOverlayClick = e => {
							this.props.onOverlayClick && this.props.onOverlayClick(), e.stopPropagation()
						}, this.state = {
							mounted: !1
						}
					}
					componentDidMount() {
						this.props.ignoreDefaultFocus || this.ref && this.ref.focus(), this.setState({
							mounted: !0
						}), Object(u.a)(), this.ref && (this.focusTrap = new a.b(this.ref), this.focusTrap.activate())
					}
					componentWillUnmount() {
						this.setState({
							mounted: !1
						}), Object(u.b)(), Object(d.d)(), this.focusTrap && this.focusTrap.deactivate()
					}
					render() {
						const {
							props: t
						} = this, {
							className: r,
							ignoreDefaultFocus: n,
							onOverlayClick: a,
							overlayClassName: d,
							overlayCustomStyles: u,
							withOverlay: l,
							...p
						} = t, f = p;
						return s.a.createElement(i.a, {
							container: document.getElementById(c.b)
						}, s.a.createElement(b, {
							className: d,
							isVisible: l,
							onClick: this.onOverlayClick,
							style: u
						}, s.a.createElement("div", {
							"aria-modal": !0,
							className: Object(o.a)(m.a.modal, r),
							onClick: this.onClick,
							ref: this.getRef,
							role: "dialog",
							tabIndex: -1
						}, s.a.createElement(e, f))))
					}
				}
				return t
			}
		},
		"./src/higherOrderComponents/warnOnChildrenCount/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			r("./src/lib/logs/console.ts");
			t.a = function(e, t) {
				return t => s.a.createElement(e, t)
			}
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			class n {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class s {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const r = new s(t);
					return e.forEach(e => r.push(e)), r
				}
				first() {
					if (this.tail) return this.tail.value
				}
				firstNode() {
					if (this.tail) return this.tail
				}
				forEach(e) {
					let t = this.tail;
					for (; t;) e(t.value), t = t.next
				}
				get(e) {
					const t = this.getNode(e);
					if (t) return t.value
				}
				getNode(e) {
					return this.itemsByKey[e]
				}
				has(e) {
					return e in this.itemsByKey
				}
				insertAfter(e, t) {
					const r = t instanceof n ? t : new n(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					r.prev = s, r.next = s.next, s.next = r, r.next && (r.next.prev = r);
					const o = t instanceof n ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = r, this.length++
				}
				insertBefore(e, t) {
					const r = t instanceof n ? t : new n(t),
						s = this.getNode(e);
					if (!s) throw new Error(`Cannot find item with key ${e}`);
					r.next = s, r.prev = s.prev, s.prev = r, r.prev && (r.prev.next = r);
					const o = t instanceof n ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = r, this.length++
				}
				last() {
					if (this.head) return this.head.value
				}
				lastNode() {
					if (this.head) return this.head
				}
				pop() {
					if (!this.head) return;
					return this.removeNode(this.head).value
				}
				push(e) {
					const t = e instanceof n ? e : new n(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const r = e instanceof n ? t.value[this.key] : e[this.key];
					this.itemsByKey[r] = t, this.length++
				}
				remove(e) {
					const t = this.getNode(e);
					if (t) return this.removeNode(t).value
				}
				removeNode(e) {
					return e.prev && (e.prev.next = e.next), e.next && (e.next.prev = e.prev), e === this.tail && (this.tail = e.next), e === this.head && (this.head = e.prev), e.next = void 0, e.prev = void 0, this.itemsByKey[e.value[this.key]] = void 0, this.length--, e
				}
				shift() {
					if (!this.tail) return;
					return this.removeNode(this.tail).value
				}
				toArray() {
					const e = [];
					return this.forEach(t => e.push(t)), e
				}
				unshift(e) {
					const t = e instanceof n ? e : new n(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const r = e instanceof n ? t.value[this.key] : e[this.key];
					this.itemsByKey[r] = t, this.length++
				}
			}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return v
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "b", (function() {
				return E
			}));
			var n, s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/performanceTimings/index.tsx"),
				a = r("./src/reddit/actions/focusedVerticals/constants.ts"),
				i = r("./src/lib/makeGqlRequest/index.ts"),
				d = r("./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(n || (n = {}));
			var c, u = r("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				l = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(c || (c = {}));
			var m = r("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = r("./src/reddit/selectors/platform.ts"),
				b = r("./src/reddit/selectors/user.ts");
			const f = Object(s.a)(a.g),
				h = Object(s.a)(a.e),
				y = Object(s.a)(a.h),
				g = Object(s.a)(a.c),
				v = Object(s.a)(a.f),
				x = Object(s.a)(a.j),
				O = Object(s.a)(a.i),
				_ = () => async (e, t, {
					gqlContext: r
				}) => {
					const s = t(),
						o = Object(m.e)(s),
						a = Object(m.d)(s),
						c = Object(b.J)(s);
					if (o || !a) return;
					e(y());
					let p = !1;
					try {
						const t = c ? n.LoggedInGeo : n.LoggedOutGeo,
							s = await ((e, t, r) => Object(i.a)(e, {
								...d,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(r(), t);
						if (s.ok && s.body) {
							const {
								data: t
							} = s.body;
							if (j(t)) {
								if (C(t)) {
									e(g({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (w(t)) {
									const r = t.focusVerticalSubredditRecommendations,
										{
											recommendedSubreddit: n,
											interactedSubreddit: s,
											category: o
										} = r.focusRecommendations[0],
										a = [n, s],
										i = Object(l.d)(a),
										d = Object(u.b)(a),
										c = Object(l.c)(n),
										m = {
											recommendedSubredditIds: [n.id],
											interactedSubredditIds: [s.id],
											subreddits: i,
											subredditsAboutInfo: d,
											subredditTopContent: c,
											category: o,
											lastLoadedEnv: "client"
										};
									e(f(m)), p = !0
								}
							} else p = !1
						}
					} catch (v) {
						p = !1
					}
					p || e(h({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, j = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						r = t && t.focusRecommendations;
					return !(!r || 0 !== r.length)
				}, w = e => {
					const t = e.focusVerticalSubredditRecommendations,
						r = t && t.focusRecommendations,
						n = t && t.type;
					return !!(r && !C(e) && n === c.GEO && r[0] && r[0].recommendedSubreddit && r[0].interactedSubreddit)
				}, E = () => async (e, t, r) => {
					var n, s;
					const a = t(),
						i = Object(m.g)(a);
					if (Object(m.f)(a) || null === i || "client" === i) {
						const r = null === (s = null === (n = Object(p.b)(t())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === s ? void 0 : s.route.chunk,
							i = Object(b.K)(a);
						return Object(o.i)(() => e(_()), {
							name: "getFocusedVerticalsRequested",
							page: r,
							isLoggedIn: i
						})
					}
					if ("server" === i) return e(v({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/inContextModeration.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			}));
			var n = r("./src/lib/makeActionCreator/index.ts");
			const s = "INCONTEXT__BANNED",
				o = "INCONTEXT__MUTED",
				a = Object(n.a)(s),
				i = Object(n.a)(o)
		},
		"./src/reddit/actions/moderationLog/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = "SUBREDDIT__MODERATION_LOG_LOADED",
				s = "SUBREDDIT__ALL_MODERATORS_LOADED"
		},
		"./src/reddit/actions/pages/modListing/index.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "modListingDataPending", (function() {
				return M
			})), r.d(t, "modListingDataLoaded", (function() {
				return L
			})), r.d(t, "modListingDataFailed", (function() {
				return T
			})), r.d(t, "modListingPageRequested", (function() {
				return F
			})), r.d(t, "morePostsPending", (function() {
				return R
			})), r.d(t, "morePostsLoaded", (function() {
				return A
			})), r.d(t, "morePostsFailed", (function() {
				return D
			})), r.d(t, "moreModListingRequested", (function() {
				return U
			})), r.d(t, "hideSubredditSuccess", (function() {
				return K
			})), r.d(t, "hideSubredditPending", (function() {
				return V
			})), r.d(t, "hideSubredditFailed", (function() {
				return q
			})), r.d(t, "unhideSubredditSuccess", (function() {
				return W
			})), r.d(t, "unhideSubredditPending", (function() {
				return Q
			})), r.d(t, "unhideSubredditFailed", (function() {
				return G
			})), r.d(t, "toggleHiddenSubreddit", (function() {
				return J
			})), r.d(t, "hideSubreddit", (function() {
				return X
			})), r.d(t, "unhideSubreddit", (function() {
				return z
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/pick.js"),
				o = r.n(s),
				a = r("./src/lib/constants/index.ts"),
				i = r("./src/lib/makeActionCreator/index.ts"),
				d = r("./src/lib/makeListingKey/index.ts"),
				c = r("./src/reddit/actions/platform.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/constants/page.ts"),
				m = r("./src/reddit/constants/parameters.ts"),
				p = r("./src/config.ts"),
				b = r("./src/lib/makeApiRequest/index.ts"),
				f = r("./src/lib/omitHeaders/index.ts"),
				h = r("./src/reddit/constants/headers.ts"),
				y = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				g = r("./src/reddit/helpers/name/index.ts"),
				v = r("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				x = (e, t) => Object(b.a)(e, {
					data: t,
					endpoint: Object(y.a)(Object(v.a)(`${p.a.gatewayUrl}/desktopapi/v1/mod`)),
					method: a.jb.GET
				});
			const O = (e, t, r, n) => Object(b.a)(Object(f.a)(e, [h.a]), {
					endpoint: `${e.apiUrl}/api/filter/user/${t}/f/mod/${Object(g.c)(r)}`,
					method: n ? a.jb.PUT : a.jb.DELETE,
					data: {
						model: JSON.stringify({
							name: Object(g.h)(r)
						})
					}
				}),
				_ = (e, t, r) => O(e, t, r, !0),
				j = (e, t, r) => O(e, t, r, !1);
			var C = r("./src/reddit/helpers/getTimeSortForListing/index.ts"),
				w = r("./src/reddit/helpers/pageActionLoginRedirect.ts"),
				E = r("./src/reddit/helpers/timeApiRoute/index.ts"),
				S = r("./src/reddit/helpers/trackers/screenview.ts"),
				I = r("./src/reddit/models/Toast/index.ts"),
				k = r("./src/reddit/routes/modListing/index.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				P = r("./src/reddit/actions/pages/modListing/constants.ts");
			const M = Object(i.a)(P.f),
				L = Object(i.a)(P.e),
				T = Object(i.a)(P.d),
				B = (e, t) => async (r, s, o) => {
					const a = s();
					if (a.listings.postOrder.api.pending[e]) return;
					r(M({
						key: e
					}));
					const i = await Object(E.a)("modListing", () => x(o.apiContext(), t)),
						d = `error-${e}`;
					i.ok ? (r(L({
						key: e,
						meta: a.meta,
						...i.body
					})), r(u.g(d))) : (r(T({
						error: i.error,
						key: e,
						...i.body
					})), 401 === i.status ? Object(w.a)(r, a) : r(u.f({
						id: d,
						kind: I.b.Error,
						text: n.fbt._("Sorry, we couldn't load posts for this page.", null, {
							hk: "CvZvm"
						}),
						buttonText: n.fbt._("Retry", null, {
							hk: "3gV6S0"
						}),
						buttonAction: B(e, t)
					})))
				}, F = (e, t) => async (r, s) => {
					const {
						sort: i = a.X
					} = e.params, u = Object(k.d)(e.path), p = u ? l.f : l.e, b = Object(d.a)(p, i, e.queryParams), f = s(), h = f.listings.postOrder.ids[b], y = f.listings.postOrder.api.error[b];
					if (f.listings.postOrder.api.pending[b] || h && !y && !t) return void(h && r(c.m({
						title: n.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})));
					const g = H(e.queryParams);
					await r(B(b, {
						...o()(e.queryParams, m.l),
						...o()(e.queryParams, m.k),
						filtered: !!u || void 0,
						moderated_srs: !0,
						sort: i,
						t: Object(C.a)(i, g)
					})), r(c.m({
						title: n.fbt._("Subreddits you moderate", null, {
							hk: "3RYtBz"
						})
					})), Object(S.h)(s(), !0)
				}, R = Object(i.a)(P.i), A = Object(i.a)(P.h), D = Object(i.a)(P.g), U = e => async (t, r, {
					apiContext: n
				}) => {
					const s = r(),
						i = s.platform.currentPage;
					if (!i) return;
					const {
						sort: c = a.X
					} = e, u = i.queryParams, p = Object(k.d)(i.url), b = p ? l.f : l.e, f = Object(d.a)(b, c, u), h = s.listings.postOrder.loadMore[f];
					if (!h) return;
					const y = s.listings.postOrder.api.pending[f],
						g = s.listings.postOrder.fetchedTokens,
						v = !(!g[f] || !g[f][h.token]);
					if (y || v) return;
					const O = H(u);
					t(R({
						key: f,
						fetchedToken: h.token
					}));
					const _ = await x(n(), {
							after: h.token,
							dist: h.dist,
							filtered: !!p || void 0,
							sort: c,
							t: Object(C.a)(c, O),
							...o()(u, m.l)
						}),
						j = s.listings.postOrder.ids[f],
						w = {
							..._.body,
							postIds: (_.body.postIds || []).filter(e => !j || !j.includes(e))
						};
					_.ok ? t(A({
						key: f,
						fetchedToken: h.token,
						meta: s.meta,
						...w
					})) : t(D({
						key: f,
						error: _.error,
						fetchedToken: h.token,
						...w
					}))
				};

			function H(e) {
				const t = m.A in e && e[m.A].toUpperCase() || "";
				return t in a.fc && a.fc[t]
			}
			const K = Object(i.a)(P.c),
				V = Object(i.a)(P.b),
				q = Object(i.a)(P.a),
				W = Object(i.a)(P.l),
				Q = Object(i.a)(P.k),
				G = Object(i.a)(P.j),
				J = (e, t) => async (r, n, {
					apiContext: s
				}) => {
					const o = n(),
						a = Object(N.k)(o),
						[i, d, c, u] = t ? [V, K, q, _] : [Q, W, G, j];
					if (!a || !a.displayText) return;
					const {
						currentPage: l
					} = o.platform;
					if (!l || !l.routeMatch) return;
					r(i(e));
					const m = await u(s(), a.displayText, e);
					m.ok ? (await r(F(l.routeMatch.match, !0)), r(d(e))) : r(c(m.body))
				}, X = e => J(e, !0), z = e => J(e, !1)
		},
		"./src/reddit/actions/pages/powerups.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/pageTitle.ts"),
				s = r("./src/reddit/actions/gold/powerups.ts"),
				o = r("./src/reddit/actions/platform.ts"),
				a = r("./src/reddit/actions/subreddit.ts"),
				i = r("./src/reddit/actions/users.ts"),
				d = r("./src/reddit/selectors/moderatorPermissions.ts"),
				c = r("./src/reddit/selectors/user.ts");
			t.a = () => async (e, t) => {
				if (e(Object(o.m)({
						title: Object(n.g)()
					})), await e(Object(i.t)()), !Object(c.K)(t())) return;
				await e(Object(a.q)());
				const r = Object(d.a)(t());
				r && r.length && await e(Object(s.d)(r))
			}
		},
		"./src/reddit/actions/shortcuts/utils.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			})), r.d(t, "d", (function() {
				return c
			}));
			var n = r("./src/reddit/constants/shortcuts.ts"),
				s = r("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				o = r("./src/reddit/helpers/routeKey/index.ts");
			const a = e => {
					const t = e.platform.currentPage;
					if (!t || !t.routeMatch) return;
					const r = t.routeMatch,
						n = Object(s.a)(e);
					return Object(o.b)(r, e, n)
				},
				i = e => {
					const t = document.getElementById(e);
					t && t.focus()
				},
				d = e => {
					const t = document.getElementById(e),
						r = window.scrollX,
						n = window.scrollY;
					t && (t.focus(), window.scrollTo(r, n))
				},
				c = () => {
					d(n.b)
				}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: async () => r.e("CommunityTopicSurvey").then(r.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = s
		},
		"./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return p
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/config.ts"),
				a = r("./src/reddit/components/ContentSurvey/index.m.less"),
				i = r.n(a),
				d = r("./src/reddit/helpers/trackers/contentTag.ts"),
				c = r("./src/reddit/hooks/useTracking.ts"),
				u = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/components/ContentSurvey/SurveyModal.tsx");
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function p({
				survey: e,
				subredditId: t
			}) {
				const [r, a] = Object(n.useState)(!1), p = Object(c.a)();
				return Object(n.useEffect)(() => p(Object(d.h)()), [p]), s.a.createElement("div", {
					className: i.a.feedBanner,
					onClick: function() {
						a(!0), p(Object(d.g)())
					}
				}, s.a.createElement("div", {
					className: i.a.notepadSnoo
				}, s.a.createElement("img", {
					src: `${o.a.assetPath}/img/snoovatar-notepad.png`
				})), s.a.createElement("div", {
					className: i.a.bannerCopy
				}, s.a.createElement("p", {
					className: i.a.copy
				}, m._("Set up this community’s content tag", null, {
					hk: "3ssqQf"
				})), s.a.createElement("p", {
					className: i.a.meta
				}, m._("Take a quick survey to help people know what to expect when they visit this community", null, {
					hk: "3sUbRf"
				}))), s.a.createElement(u.a, {
					name: "caret_right",
					className: i.a.chevron
				}), r && s.a.createElement(l.a, {
					withOverlay: !0,
					subredditId: t,
					survey: e,
					onClose: () => a(!1)
				}))
			}
		},
		"./src/reddit/components/ContentSurvey/SurveyModal.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/higherOrderComponents/asModal/index.tsx");
			const o = Object(n.a)({
					resolved: {},
					chunkName: () => "",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => Promise.all([r.e(0), r.e(1)]).then(r.bind(null, "./src/reddit/components/ContentSurvey/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/ContentSurvey/index.tsx"
					}
				}),
				a = Object(s.a)(o);
			t.a = a
		},
		"./src/reddit/components/ContentSurvey/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, r) {
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
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/upperFirst.js"),
				o = r.n(s),
				a = r("./node_modules/react/index.js"),
				i = r.n(a),
				d = r("./src/config.ts"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/isFakeSubreddit/index.ts"),
				l = r("./src/reddit/constants/postLayout.ts"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/components/PostList/Placeholder.tsx"),
				b = r("./src/reddit/components/EmptySubreddit.m.less"),
				f = r.n(b),
				h = r("./src/lib/classNames/index.ts"),
				y = r("./src/lib/lessComponent.tsx"),
				g = r("./src/reddit/pages/Subreddit/SurveyUnit.tsx");
			const v = y.a.wrapped(p.a, "BackgroundPlaceholder", f.a),
				x = y.a.wrapped(m.n, "SubmitLink", f.a),
				O = e => {
					switch (e) {
						case c.W.RISING:
							return n.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case c.W.TOP:
						case c.W.CONTROVERSIAL:
							return null;
						default:
							return n.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				_ = ({
					listingName: e,
					sort: t
				}) => {
					const r = O(t);
					return i.a.createElement("div", {
						className: f.a.MainContent
					}, i.a.createElement("div", {
						className: f.a.PrimaryText
					}, (e => {
						switch (e) {
							case c.W.RISING:
								return n.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case c.W.TOP:
							case c.W.CONTROVERSIAL:
								return n.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [n.fbt._param("listing sort option", o()(e))], {
									hk: "48BeCW"
								});
							default:
								return n.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(t)), e && !Object(u.a)(e) && !!r && i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: f.a.SecondaryText
					}, O(t)), i.a.createElement(x, {
						to: `/r/${e}/submit`
					}, n.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				j = () => i.a.createElement("div", {
					className: f.a.MainContent
				}, i.a.createElement("img", {
					className: f.a.SnooImg,
					src: `${d.a.assetPath}/img/snoo_discovery@1x.png`
				}), i.a.createElement("div", {
					className: f.a.PrimaryText
				}, n.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), i.a.createElement(x, {
					to: "/r/popular"
				}, n.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = e => i.a.createElement(i.a.Fragment, null, e.subreddit && i.a.createElement(g.a, {
				subredditId: e.subreddit.id
			}), i.a.createElement("div", {
				className: Object(h.a)(f.a.Component, f.a.EmptyHomepage)
			}, i.a.createElement(v, {
				isLoading: !1,
				layout: l.g.Classic
			}), i.a.createElement("div", {
				className: f.a.MainContentWrapper
			}, e.subreddit ? i.a.createElement(_, e) : i.a.createElement(j, null))))
		},
		"./src/reddit/components/JumpToContent/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_3KaTO_3YaHK3SMocnu8jV9",
				rightBorder: "_1Bt_cwKVUG30M9eNB-9rU4",
				rightBorderExp: "d2l2sN1D4PNVkzMmwALA2",
				wrapper: "_32Xa3voy05uAFz3ZnopP_S",
				wrapperExp: "_1C67uwkUf95iJOZ63vDJOZ"
			}
		},
		"./src/reddit/components/JumpToContent/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return b
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "a", (function() {
				return y
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/constants/componentSizes.ts"),
				d = r("./src/reddit/contexts/NavbarExp.ts"),
				c = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/components/JumpToContent/index.m.less"),
				l = r.n(u);
			const m = Object(s.createContext)(null),
				p = Object(s.createContext)(null);
			class b extends o.a.Component {
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
					}, o.a.createElement(p.Provider, {
						value: this.setHandleRef
					}, this.props.children))
				}
			}
			const f = i.f + 10,
				h = o.a.memo(() => {
					const [e, t] = Object(s.useState)("-500px"), r = Object(s.useContext)(d.a);
					return o.a.createElement(m.Consumer, null, s => s && o.a.createElement("div", {
						className: Object(a.a)(l.a.wrapper, {
							[l.a.wrapperExp]: r
						}),
						"data-testid": "jump-to-content"
					}, o.a.createElement(c.t, {
						kind: c.b.Button,
						priority: c.c.Plain,
						className: l.a.button,
						style: {
							marginLeft: e
						},
						onBlur: e => {
							const r = e.currentTarget.clientWidth + 55;
							t(`-${r}px`)
						},
						onFocus: () => {
							t("0")
						},
						onClick: () => {
							s.focus(), s.scrollIntoView(), window.scrollBy(0, -f)
						}
					}, n.fbt._("Jump to content", null, {
						hk: "2zWOmQ"
					})), o.a.createElement("div", {
						className: Object(a.a)(l.a.rightBorder, {
							[l.a.rightBorderExp]: r
						})
					})))
				}),
				y = o.a.memo(() => o.a.createElement(p.Consumer, null, e => o.a.createElement("div", {
					ref: e,
					tabIndex: 0
				})))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/components/PostList/index.tsx"),
				s = r("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(s.a)(n.a)
		},
		"./src/reddit/components/ModHub/Content/NoPermissions.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./src/reddit/contexts/NavbarExp.ts"),
				d = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/ModHub/Content/index.m.less"),
				u = r.n(c);
			t.a = e => {
				const t = Object(o.useContext)(i.a);
				return a.a.createElement("div", {
					className: Object(d.a)(u.a.noPermissions, {
						[u.a.noPermissionsExp]: t
					})
				}, a.a.createElement("img", {
					className: u.a.rememberTheHuman,
					src: `${n.a.assetPath}/img/content-gate-icons/remember-the-human.png`
				}), e.isModerator ? s.fbt._("Sorry, you do not have the moderator permissions needed to view this page", null, {
					hk: "4wUDIF"
				}) : s.fbt._("Sorry, this is a moderator-only page", null, {
					hk: "2BZEIA"
				}), a.a.createElement("div", {
					className: u.a.noPermissionsSmallText
				}, e.isModerator ? s.fbt._("You need to change your mod permissions to view this page", null, {
					hk: "RS9sd"
				}) : e.subredditDisplayText ? s.fbt._("You must be a moderator of {subredditName} to view this page", [s.fbt._param("subredditName", e.subredditDisplayText)], {
					hk: "8eU68"
				}) : s.fbt._("You must be a moderator to view this page", null, {
					hk: "2N7TXH"
				})))
			}
		},
		"./src/reddit/components/ModHub/Content/index.m.less": function(e, t, r) {
			e.exports = {
				titleFontH1: "CgYEK3BSwEitV3N5dS53Y",
				titleFontH2: "WtxSi4x3A6EHSYOlNO6dC",
				titleFontH3: "_1s8gRCw9ZEGeZdDLi4SjEs",
				titleFontH4: "iJgEN-DVO9xH1ING9PGia",
				titleFontH5: "_1Pk2HmstIcHsVCyXL0s7WR",
				titleFontH6: "_27G51xRMOXRk6p8hF2iFF4",
				metadataFont: "_3qFnOmsyfNVU4dOg-nT7AH",
				flairFont: "IHVtmv3d9vjFTy7sOv4nb",
				labelsFont: "_3veeqeCCuB-y_5Uz7aZwNo",
				actionFont: "_2GGs_1qJNsgRTBkJjB3JyV",
				smallButtonFont: "_1wMkSw4TKFwpURuJjoijc8",
				largeButtonFont: "_37n4mei_IKI2b0S9cUN6kj",
				strongTextFont: "_3iiIycx9Jvd-wtbZRRlyrS",
				tabFont: "_2uzD_ZiaRuda1gPntdeFV-",
				buttonFontXS: "X1zM6CuE0STTL567u2KEr",
				buttonFontXs: "X1zM6CuE0STTL567u2KEr",
				buttonFontS: "_35xxostuR-t_KnCQpTxb0F",
				buttonFontM: "_1siVd6fOXNWDs8SbSH_HQ5",
				buttonFontL: "_1mAbhFs88EE9k-jaJMzlbM",
				buttonFontXL: "FxQ8KBPxEROiwB1EG0sLr",
				buttonFontXl: "FxQ8KBPxEROiwB1EG0sLr",
				bodyFontH1: "_18F7ywSczMXfDxvUzIkKou",
				bodyFontH2: "_2gpSS7qXgM9-crN9KgQr_O",
				bodyFontH3: "-JM-6-h-SOMTCi9a5ZG0g",
				bodyFontH4: "_3ZVYgWzZxJjL_cahDG32l",
				bodyFontH5: "_15iJEJUM-il2Ud09a9yqhY",
				bodyFontH6: "_2kFIrTxjdWaprwQ9leev5x",
				bodyFont: "_38q9ZzND20FKMoX8BeB0u8",
				bodyFontSmall: "_1tFfFAHeLftmld2a2M4yIs",
				bodyFontMono: "_1N1SJCd40K_9LeW3MSWULf",
				rememberTheHuman: "_2S6IM2TPtTriI4r_2Op1Od",
				noPermissions: "_3jaCG74Q3u55JqGJy3u664",
				noPermissionsExp: "_30KCF1VJPMgbkHOfEhoE2p",
				noPermissionsSmallText: "_1Kxv5kLQoEOhRatEhltXrQ",
				container: "_3gsyCuYXsGWEEgPSTuX9aw",
				isLargePostLayout: "_1WGjuBpIEjcQC-x3_lE_Nu"
			}
		},
		"./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less": function(e, t, r) {
			e.exports = {
				modalMain: "_3TbrCaPQ_Ciq0W4JtRYgHR",
				modIcon: "_3QZVX2_MD7fnyaRbQVH7LG",
				modalBody: "IdgjnohCE075Y2bzY7kGD",
				modalTitle: "_1uJCbZDn510LJ80M7oIUiM",
				modalDescription: "_2txvYfpiVxk7MM45Ybezvj",
				feedDetailsHeader: "_1oHK5eWnpY1WTbgUlHAPGn",
				feedDetailsTitle: "r07hBWYi9sVEcAGnnrnbt",
				feedDetailsDescription: "_3od74XOi7ZCYUaElRDtJY4",
				loadingBar: "oMm7a2SmYiOmS3c_HeyVY",
				gradientAnimation: "_2TjoHmGKn7BjeBAEpBRL3T"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3w9CCp15Dn8xjuhR8VUE5n",
				hideButton: "_34rIurg3vPxO_tswAxt4wf",
				errorText: "dHzfi1tqA9d2uJEemybvK"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less": function(e, t, r) {
			e.exports = {
				row: "_3iC2jdvm0i0Q7HlrFJVoTC",
				iconStyles: "_9A1gbtA8zl5gRftEuuKPP",
				subredditIcon: "_327j3YarD5xmiCuu19J-XN",
				planetIcon: "_3RdGW7gz6XoGZ6oEgqKAVr",
				label: "_36BB5D1byWMjvVdrjUdv2",
				unhideButton: "iV4R5u2BbUz2dioFJNTAz",
				SubredditIcon: "_327j3YarD5xmiCuu19J-XN"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less": function(e, t, r) {
			e.exports = {
				rows: "_1q1k1QSwlFELkqmvELqzPI",
				noRows: "_2bMntgRcO2XGi6Tfep4QfV"
			}
		},
		"./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_25Nja5fbb_ZBbGBf8Bm2jO",
				hideCommunitiesHeader: "_2UuftU5L-0PE5_qTvLLSuB",
				inputContainer: "_16VxD_GKhjj0Mvr4ayqcAO",
				tertiaryButton: "_3KQk5TlvMCuZJm3Xc1Mk6L"
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
				return b
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "p", (function() {
				return h
			})), r.d(t, "o", (function() {
				return y
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "m", (function() {
				return v
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "j", (function() {
				return O
			})), r.d(t, "k", (function() {
				return _
			})), r.d(t, "g", (function() {
				return j
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "q", (function() {
				return w
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "l", (function() {
				return S
			})), r.d(t, "t", (function() {
				return I
			})), r.d(t, "u", (function() {
				return k
			})), r.d(t, "r", (function() {
				return N
			})), r.d(t, "a", (function() {
				return P
			})), r.d(t, "s", (function() {
				return M
			})), r.d(t, "c", (function() {
				return L
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./src/lib/lessComponent.tsx"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/controls/Input/ModalInput.tsx"),
				c = r("./src/reddit/icons/svgs/Close/index.tsx"),
				u = r("./src/reddit/components/ModalStyledComponents/index.m.less"),
				l = r.n(u);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const p = s.a.wrapped(c.a, "CloseIcon", l.a),
				b = s.a.section("ModalBody", l.a),
				f = s.a.section("ModalPostPreview", l.a),
				h = s.a.p("ModalText", l.a),
				y = s.a.div("ModalSmallText", l.a),
				g = s.a.div("ModalDescriptionText", l.a),
				v = s.a.div("ModalMetaText", l.a),
				x = s.a.label("ModalFormItem", l.a),
				O = s.a.wrapped(d.a, "ModalInput", l.a),
				_ = s.a.label("ModalInputLabel", l.a),
				j = s.a.footer("ModalFooter", l.a),
				C = s.a.header("ModalHeader", l.a),
				w = s.a.div("ModalTitle", l.a),
				E = s.a.div("ModalAnnotation", l.a),
				S = s.a.div("ModalMain", l.a),
				I = s.a.textarea("TextArea", l.a),
				k = s.a.wrapped(i.l, "WarningButton", l.a),
				N = s.a.wrapped(i.l, "PrimaryButton", l.a),
				P = s.a.wrapped(i.o, "CancelButton", l.a),
				M = s.a.wrapped(i.r, "RemoveButton", l.a),
				L = ({
					className: e,
					...t
				}) => a.a.createElement(i.t, m({
					kind: i.b.Button,
					priority: i.c.Primary,
					className: Object(n.a)(l.a.ConfirmButton, e)
				}, t))
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less": function(e, t, r) {
			e.exports = {
				SubredditIcon: "YsExfuojv3MEBi8M0sQGM",
				subredditIcon: "YsExfuojv3MEBi8M0sQGM",
				Label: "-KyE0niKrEy2RqEuYXENt",
				label: "-KyE0niKrEy2RqEuYXENt"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less": function(e, t, r) {
			e.exports = {
				CommunityCount: "_2FGPtEJLumoHbu-QFFxout",
				communityCount: "_2FGPtEJLumoHbu-QFFxout",
				SubredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				subredditsOrProfiles: "cudiOrfzGvVKhNqnO0IQV",
				SidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				sidebarSubreddit: "FiA5buYZ1_VQqBGMe3x-Y",
				ModalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq",
				modalSubreddit: "_1vSC-5fjGLI-J_eqCRICfq"
			}
		},
		"./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return C
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				u = r("./src/reddit/components/SubredditIcon/index.tsx"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				m = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditOrProfileRow.m.less"),
				p = r.n(m),
				b = r("./src/lib/lessComponent.tsx");
			const f = b.a.wrapped(u.b, "SubredditIcon", p.a),
				h = b.a.span("Label", p.a),
				y = Object(c.c)({
					subredditOrProfile: l.I
				});
			var g = Object(d.b)(y)(({
				children: e,
				subredditOrProfile: t
			}) => e(t, o.a.createElement(o.a.Fragment, null, o.a.createElement(f, {
				subredditOrProfile: t
			}), o.a.createElement(h, null, t.displayText))));
			var v = ({
					children: e,
					className: t,
					subredditsOrProfilesIds: r
				}) => {
					const n = r.map(t => o.a.createElement(g, {
						children: e,
						key: t.id,
						identifier: t
					}));
					return o.a.createElement("div", {
						className: t
					}, n)
				},
				x = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.m.less"),
				O = r.n(x);
			const _ = b.a.div("CommunityCount", O.a),
				j = b.a.wrapped(v, "SubredditsOrProfiles", O.a),
				C = b.a.wrapped(a.a, "SidebarSubreddit", O.a),
				w = b.a.wrapped(a.a, "ModalSubreddit", O.a);
			var E;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Sidebar = 1] = "Sidebar"
			}(E || (E = {}));
			t.b = e => {
				const {
					isSidebar: t,
					subredditsOrProfilesIds: r,
					onSeeMoreDetails: s,
					subredditCategory: a = {
						name: n.fbt._("multi", null, {
							hk: "28Z7Rp"
						})
					}
				} = e, d = t ? C : w, c = r.length, u = t && r.length > 4;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(_, null, n.fbt._({
					"*": "There are {number} communities in this {category}",
					_1: "There are 1 community in this {category}"
				}, [n.fbt._plural(c, "number"), n.fbt._param("category", a.name)], {
					hk: "33iWe4"
				})), c > 0 && o.a.createElement(j, {
					subredditsOrProfilesIds: t ? r.slice(0, 4) : r
				}, (t, r) => o.a.createElement(d, {
					key: t.url,
					to: t.url,
					onMouseDown: e.onSubredditClick ? () => e.onSubredditClick(t) : void 0
				}, r)), c > 0 && u && o.a.createElement(i.r, {
					onClick: s
				}, n.fbt._("See more", null, {
					hk: "QYkk2"
				})))
			}
		},
		"./src/reddit/components/PowerupsCncModule/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "PowerupsCncModule",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.resolve().then(r.bind(null, "./src/reddit/components/PowerupsCncModule/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/PowerupsCncModule/index.tsx"
				}
			})
		},
		"./src/reddit/components/PowerupsCncModule/index.m.less": function(e, t, r) {
			e.exports = {
				feedBanner: "_2I3Bfot0_z2fpeo6zu0l2J",
				powerupsLogo: "TQxDD5iDKrkEL8_gkvPUG",
				bolt: "lLsxHGuplL1k0pxt72AKH",
				bannerText: "_3yaV1tcyLQQaYxZ9yj1uPA",
				heading: "_2lL5MmI9e4lUGXlgHCdMMq",
				description: "_2Q6-RCjBdZlxyT48OReije",
				chevron: "_1GgOcxnjXNupiwBONGaA3T"
			}
		},
		"./src/reddit/components/PowerupsCncModule/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "isPowerupsCncModuleHiddenBySpamLimit", (function() {
				return g
			}));
			var n = r("./src/config.ts"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/lib/opener/index.ts"),
				d = r("./src/reddit/constants/localStorage.ts"),
				c = r("./src/reddit/helpers/localStorage/index.ts"),
				u = r("./src/reddit/helpers/trackers/powerups.ts"),
				l = r("./src/reddit/hooks/useTracking.ts"),
				m = r("./src/reddit/icons/fonts/index.tsx"),
				p = r("./src/reddit/routes/powerups/index.ts"),
				b = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/reddit/components/PowerupsCncModule/index.m.less"),
				h = r.n(f);
			const {
				fbt: y
			} = r("./node_modules/fbt/lib/FbtPublic.js"), g = e => {
				return Object(c.j)(d.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, e) > 1
			};
			t.default = ({
				subredditId: e
			}) => {
				const t = Object(l.a)(),
					r = Object(a.e)(t => Object(b.Q)(t, {
						subredditId: e
					})),
					f = !!r;
				return Object(s.useEffect)(() => {
					f && (Object(c.R)(d.b.POWERUPS_CNC_MODULE_VISIBILITY_STORE, e), g(e) || t(Object(u.c)()))
				}, [t, f, e]), f ? o.a.createElement("a", {
					className: h.a.feedBanner,
					onClick: () => {
						t(Object(u.b)())
					},
					href: `${n.a.redditUrl}${p.a}`,
					rel: i.c,
					target: "_blank"
				}, o.a.createElement("div", {
					className: h.a.powerupsLogo
				}, o.a.createElement("img", {
					className: h.a.bolt,
					src: `${n.a.assetPath}/img/powerups/powerups-cnc.svg`,
					alt: y._("powerups lightning bolt", null, {
						hk: "2QR5Up"
					})
				})), o.a.createElement("div", {
					className: h.a.bannerText
				}, o.a.createElement("p", {
					className: h.a.heading
				}, y._("Give {subreddit name} members a way to give back", [y._param("subreddit name", r.displayText)], {
					hk: "4poXz"
				})), o.a.createElement("p", {
					className: h.a.description
				}, y._("Harness the power of your community to unlock special perks and features using Powerups.", null, {
					hk: "fJGis"
				}))), o.a.createElement(m.a, {
					name: "caret_right",
					className: h.a.chevron
				})) : null
			}
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/raf/index.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o);
			class i extends a.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && s.a.cancel(this.frame), this.frame = s()(this.props.onResize)
					}, this.containerRef = e.containerRef
				}
				shouldComponentUpdate() {
					return !1
				}
				componentDidMount() {
					this.createSensor()
				}
				createSensor() {
					if (!this.containerRef || this.sensor) return;
					this.sensor = document.createElement("object"), this.sensor.setAttribute("style", "\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 100%;\n      width: 100%;\n      overflow: hidden;\n      pointer-events: none;\n      z-index: -1;\n    "), this.sensor.setAttribute("tabindex", "-1"), this.sensor.onload = () => {
						this.props.onResize(), this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.addEventListener("resize", this.handleResize)
					}, this.sensor.type = "text/html";
					const e = this.isIE();
					e && this.containerRef.appendChild(this.sensor), this.sensor.data = "about:blank", e || this.containerRef.appendChild(this.sensor), this.props.onResize()
				}
				componentWillUnmount() {
					this.sensor && (this.sensor && this.sensor.contentDocument && this.sensor.contentDocument.defaultView && this.sensor.contentDocument.defaultView.removeEventListener("resize", this.handleResize), this.containerRef && this.containerRef.removeChild(this.sensor))
				}
				render() {
					return a.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/StructuredStyles/BladeManager/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/connectors/connectClickToToggleEditor.ts");
			class a extends s.a.Component {
				constructor() {
					super(...arguments), this.onClickCapture = e => {
						this.props.isEditing && this.props.subredditId && !this.props.isModalOpen && (e.stopPropagation(), e.preventDefault(), this.props.requestCloseBlade())
					}
				}
				render() {
					return s.a.createElement("div", {
						className: this.props.className,
						onClickCapture: this.onClickCapture,
						children: this.props.children
					})
				}
			}
			var i = Object(o.a)(a);
			t.a = e => s.a.createElement(i, e)
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
				return N
			})), r.d(t, "b", (function() {
				return P
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "d", (function() {
				return L
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, r) => n => {
				const s = e(n),
					a = t(n),
					i = !s && a;
				return Object(o.a)(r.baseClassName, n.className, {
					[r.mIsInteractive]: a,
					[r.mIsActive]: s,
					[r.mIsVoteable]: i
				})
			};
			var d = r("./src/reddit/icons/fonts/Downvote/index.tsx"),
				c = r("./src/reddit/models/Vote/index.ts"),
				u = r("./src/reddit/controls/Downvote/index.m.less"),
				l = r.n(u);
			const m = {
					...l.a,
					baseClassName: l.a.Downvote
				},
				p = ({
					voteState: e
				}) => e === c.a.downvoted,
				b = i(p, ({
					interactive: e
				}) => !1 !== e, m);
			var f = e => s.a.createElement(d.a, {
					className: b(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				h = r("./src/reddit/icons/fonts/Upvote/index.tsx"),
				y = r("./src/reddit/controls/Upvote/index.m.less"),
				g = r.n(y);
			const v = {
					...g.a,
					baseClassName: g.a.Upvote
				},
				x = ({
					voteState: e
				}) => e === c.a.upvoted,
				O = i(x, ({
					interactive: e
				}) => !1 !== e, v);
			var _ = e => s.a.createElement(h.a, {
					className: O(e),
					compact: e.compact,
					isFilled: x(e)
				}),
				j = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				C = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				w = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = r("./src/reddit/components/VerticalVotes/votes.m.less"),
				S = r.n(E);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => Object(o.a)({
					[S.a.compact]: e.compact,
					[S.a.dark]: Object(C.b)(Object(j.a)(e)),
					[S.a.nightmode]: e.isNightMode
				}),
				N = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(w.a)(e), r = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: n,
						isNightMode: a,
						voteState: i,
						compact: d,
						...u
					} = e;
					return s.a.createElement("button", I({}, u, {
						className: Object(o.a)(S.a.customDownvote, k(e), {
							[S.a.voted]: e.voteState === c.a.downvoted
						}, e.className),
						style: r
					}))
				}),
				P = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(w.a)(e), r = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: n,
						isNightMode: a,
						voteState: i,
						compact: d,
						...u
					} = e;
					return s.a.createElement("button", I({}, u, {
						className: Object(o.a)(S.a.customUpvote, k(e), {
							[S.a.voted]: e.voteState === c.a.upvoted
						}, e.className),
						style: r
					}))
				}),
				M = f,
				L = _
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return j
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "b", (function() {
				return S
			}));
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				o = r("./src/lib/objectSelector/index.ts"),
				a = r("./src/reddit/actions/ads/index.ts"),
				i = r("./src/reddit/actions/focusedVerticals/index.ts"),
				d = r("./src/reddit/actions/gold/tooltips.ts"),
				c = r("./src/reddit/actions/post.ts"),
				u = r("./src/reddit/actions/postList.ts"),
				l = r("./src/reddit/actions/survey/index.ts"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/contexts/PageLayer/index.tsx"),
				b = r("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				f = r("./src/reddit/helpers/trackers/post.ts"),
				h = r("./src/reddit/components/PostList/Placeholder.tsx"),
				y = r("./src/reddit/featureFlags/index.ts"),
				g = r("./src/reddit/selectors/experiments/survey.ts"),
				v = r("./src/reddit/selectors/listings.ts"),
				x = r("./src/reddit/selectors/posts.ts"),
				O = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/tracking.ts");

			function j() {
				return Object(p.u)({
					currentProfileName: p.i,
					isCommentPermalink: p.w,
					isCommentsPage: p.x,
					isFrontpage: p.z,
					isProfilePostListing: p.K,
					isTopicPage: p.P,
					pageLayer: e => e
				})
			}
			const C = j(),
				w = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: y.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.Q)(e, t),
					loadMore: v.g,
					postsById: x.S,
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: r,
						inSubredditOrProfile: n
					}) => Object(x.E)(e, t, r, n)),
					subredditsById: O.X,
					viewportDataLoaded: _.a,
					pageReferrer: p.T,
					postListPlaceholderComponent: () => h.a,
					isNpsScrollSurveyEnabled: g.e
				},
				E = Object(s.c)(w),
				S = e => ({
					onBottomViewed: (t, r) => e(u.c(t, r)),
					onFirstPostChanged: t => e(Object(d.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(a.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						t.isFrontpage && e(Object(i.a)({
							lastLoadedEnv: "server"
						})), e(c.K(t))
					},
					fireAdPixelsOfType: (t, r) => {
						e(c.z(t, r))
					},
					trackOnPostEnteredViewport: (t, r, n, s) => {
						e(c.N(t, n, s))
					},
					trackOnPostExitedViewport: (t, r, n, s, o) => {
						e(c.O(t, n, s, o))
					},
					surveyTriggerScrollCounted: () => e(Object(l.k)())
				}),
				I = e => Object(b.b)({
					...e
				}),
				k = (e, t, r, n) => {
					const {
						listingKey: s,
						hostPostData: o,
						listingBelowVariant: a
					} = n;
					return Object(f.i)(e, t, "post", s, o, a, void 0)
				},
				N = Object(n.b)(E, S, (e, t, r) => ({
					...e,
					...t,
					...r,
					postComponentForLayout: I,
					postClickEventFactory: k
				}));
			t.a = e => Object(m.c)(C(N(e)))
		},
		"./src/reddit/connectors/connectClickToToggleEditor.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				o = r("./src/reddit/actions/structuredStyles/index.ts"),
				a = r("./src/reddit/selectors/activeModalId.ts"),
				i = r("./src/reddit/selectors/structuredStyles.ts"),
				d = r("./src/reddit/constants/modals.ts");
			const c = Object(s.c)({
				bladeHasUnsavedChanges: i.a,
				isEditing: i.i,
				isBladeEditorDirty: i.h,
				isModalOpen: Object(a.b)(d.a.BLADE_UNSAVED_CHANGES)
			});
			t.a = Object(n.b)(c, (e, {
				subredditId: t
			}) => ({
				requestCloseBlade: () => t && e(Object(o.h)(t))
			}))
		},
		"./src/reddit/constants/componentSizes.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "e", (function() {
				return a
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "i", (function() {
				return c
			})), r.d(t, "h", (function() {
				return u
			})), r.d(t, "j", (function() {
				return l
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "m", (function() {
				return p
			})), r.d(t, "q", (function() {
				return b
			})), r.d(t, "r", (function() {
				return f
			})), r.d(t, "s", (function() {
				return h
			})), r.d(t, "u", (function() {
				return y
			})), r.d(t, "t", (function() {
				return g
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "w", (function() {
				return x
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "b", (function() {
				return _
			})), r.d(t, "n", (function() {
				return j
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "p", (function() {
				return w
			}));
			const n = 284,
				s = 450,
				o = 800,
				a = 284,
				i = 48,
				d = 640,
				c = 1600,
				u = 1280,
				l = 40,
				m = 48,
				p = 24,
				b = 24,
				f = 312,
				h = 40,
				y = 270,
				g = 106,
				v = 5,
				x = 16,
				O = 1250,
				_ = 82,
				j = 48,
				C = 36,
				w = 40
		},
		"./src/reddit/constants/keycodes.ts": function(e, t, r) {
			"use strict";
			var n, s;
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e[e.ArrowDown = 40] = "ArrowDown", e[e.ArrowLeft = 37] = "ArrowLeft", e[e.ArrowRight = 39] = "ArrowRight", e[e.ArrowUp = 38] = "ArrowUp", e[e.Backspace = 8] = "Backspace", e[e.Delete = 46] = "Delete", e[e.Enter = 13] = "Enter", e[e.Escape = 27] = "Escape", e[e.F = 70] = "F", e[e.K = 75] = "K", e[e.Space = 32] = "Space", e[e.Tab = 9] = "Tab", e[e.Comma = 188] = "Comma"
				}(n || (n = {})),
				function(e) {
					e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.Backspace = "Backspace", e.Enter = "Enter", e.Escape = "Escape", e.F = "f", e.Tab = "Tab", e.Space = " ", e.Comma = ","
				}(s || (s = {}))
		},
		"./src/reddit/constants/screenWidths.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			}));
			const n = 480,
				s = 960,
				o = 1200
		},
		"./src/reddit/contexts/ApiContext.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
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
			const a = {
					apiContext: () => {
						throw new Error("Component attempted to make an API request with no ApiContext")
					},
					gqlContext: () => {
						throw new Error("Component attempted to make an API request with no GqlContext")
					}
				},
				i = Object(n.createContext)(a);

			function d(e) {
				const t = t => s.a.createElement(i.Consumer, null, ({
					apiContext: r,
					gqlContext: n
				}) => s.a.createElement(e, o({
					apiContext: r,
					gqlContext: n
				}, t)));
				return t.displayName = `WithApiContext(${e.displayName||e.name})`, t
			}
		},
		"./src/reddit/contexts/NavbarExp.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = s.a.createContext(!1)
		},
		"./src/reddit/controls/Button/index.m.less": function(e, t, r) {
			e.exports = {
				Button: "_2iuoyPiKHN3kfOoeIQalDT",
				button: "_2iuoyPiKHN3kfOoeIQalDT",
				isFullWidth: "_34mIRHpFtnJ0Sk97S2Z3D9",
				xxsmallButtonStyles: "_1h6qKGhVsgNfytYFlo8m3f",
				Icon: "_1mvTX6krm3Q2d1CSyUm28s",
				icon: "_1mvTX6krm3Q2d1CSyUm28s",
				isLeft: "_1HHR_ND8U6x6YrIqKFeXZy",
				isRight: "_3tKmDp5VAtgWvabEmFkJ7T",
				xsmallButtonStyles: "_3uJP0daPEH2plzVEYyTdaH",
				xsmallBigPaddingButtonStyles: "UEPNkU0rd1-nvbkOcBatc",
				smallButtonStyles: "HNozj_dKjQZ59ZsfEegz8",
				mediumButtonStyles: "_3ukcnQySDskQwK_wB2iXYl",
				largeButtonStyles: "_1J4mN6_wNfCtSyMDUNGQqN",
				xlargeButtonStyles: "XpD6n11mOiKNg8ZKtvgVR",
				primary: "_10BQ7pjWbeYP63SAPNS8Ts",
				active: "_39a0Mt5b1i2joAqIaEHOWJ",
				redditStyle: "_2nelDm85zKKmuD94NequP0",
				DangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				dangerButtonColors: "_1t63zWyh9UUgsyQc6acROM",
				GoldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				goldButtonColors: "_10UWrWSil1Xu6pdSaa_3-K",
				PremiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				premiumButtonColors: "q_unSaY23rpdd3lDvGZ-",
				secondary: "_2tU8R9NTqhvBrhoNAXWWcP",
				tertiary: "_4Glnzr5LA7bNBGMWGW4pU",
				plain: "_3zbhtNO0bdck0oYbYRhjMC",
				isIconOnly: "_1tPpYVD73ugqp4k-VMFRki",
				isSquare: "_3ojSE1JW7jxNzUzZK8kt7m",
				ExtraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				extraSmallBaseButton: "_2v8rCfSRT4mr5y4pwEhX41",
				InlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				inlineTextButton: "_3kfXQpuyMJIMeWQCwjZKfw",
				ChatButton: "_13twe55MPRo1LqypxB-LJx",
				chatButton: "_13twe55MPRo1LqypxB-LJx",
				PlainLinkButton: "_2UhHcZFBOYxMULbf2p-skl",
				plainLinkButton: "_2UhHcZFBOYxMULbf2p-skl"
			}
		},
		"./src/reddit/controls/Button/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return l
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "h", (function() {
				return p
			})), r.d(t, "b", (function() {
				return b
			})), r.d(t, "a", (function() {
				return f
			})), r.d(t, "m", (function() {
				return v
			})), r.d(t, "n", (function() {
				return x
			})), r.d(t, "l", (function() {
				return O
			})), r.d(t, "p", (function() {
				return _
			})), r.d(t, "q", (function() {
				return j
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "s", (function() {
				return w
			})), r.d(t, "r", (function() {
				return E
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "i", (function() {
				return P
			})), r.d(t, "j", (function() {
				return M
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/InternalLink/index.tsx"),
				i = r("./src/reddit/controls/Button/index.m.less"),
				d = r.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = {
				role: "button",
				tabIndex: 0
			};
			var l, m, p, b;
			! function(e) {
				e.XXS = "xxsmallButtonStyles", e.XS = "xsmallButtonStyles", e.XSP = "xsmallBigPaddingButtonStyles", e.S = "smallButtonStyles", e.M = "mediumButtonStyles", e.L = "largeButtonStyles", e.XL = "xlargeButtonStyles"
			}(l || (l = {})),
			function(e) {
				e.Primary = "primary", e.Secondary = "secondary", e.Tertiary = "tertiary", e.Plain = "plain", e.PlainLink = "plainLink"
			}(m || (m = {})),
			function(e) {
				e.L = "left", e.R = "right", e.C = "center"
			}(p || (p = {})),
			function(e) {
				e.Button = "button", e.ExternalLink = "external-link", e.InternalLink = "internal-link"
			}(b || (b = {}));
			const f = e => {
					const {
						"data-redditstyle": t,
						Icon: r,
						iconClassName: n,
						iconPosition: a = p.C,
						isFullWidth: i = !1,
						isSquare: f = !1,
						children: v,
						className: x,
						kind: O = b.Button,
						priority: _ = m.Primary,
						redditStyle: j,
						size: C = l.S,
						text: w,
						textClassName: E,
						...S
					} = e, I = (({
						baseClassName: e,
						redditStyle: t,
						dataRedditStyle: r,
						Icon: n,
						isFullWidth: s,
						isSquare: a,
						priority: i,
						size: c,
						text: u
					}) => Object(o.a)(e, d.a.Button, i && d.a[i], c && d.a[c], {
						[d.a.isFullWidth]: s,
						[d.a.isIconOnly]: !!n && !u,
						[d.a.isSquare]: a,
						[d.a.redditStyle]: !(!t && !r)
					}))({
						baseClassName: x,
						children: v,
						dataRedditStyle: t,
						Icon: r,
						isFullWidth: i,
						isSquare: f,
						priority: _,
						redditStyle: j,
						size: C,
						text: w
					}), k = (({
						children: e,
						text: t,
						Icon: r,
						iconClassName: n,
						iconPosition: a,
						priority: i,
						textClassName: c
					}) => !r && t ? s.a.createElement("span", {
						className: c
					}, t) : s.a.createElement(s.a.Fragment, null, r && (a === p.C || a === p.L) && s.a.createElement(r, {
						className: Object(o.a)(d.a.Icon, n, {
							[d.a.isLeft]: a === p.L
						}),
						isFilled: i === m.Primary
					}), t && s.a.createElement("span", {
						className: Object(o.a)(d.a.Text, c)
					}, t), e && e, r && a === p.R && s.a.createElement(r, {
						className: Object(o.a)(d.a.Icon, n, d.a.isRight),
						isFilled: i === m.Primary
					})))({
						children: v,
						text: w,
						Icon: r,
						iconClassName: n,
						iconPosition: a,
						priority: _,
						textClassName: E
					});
					return O === b.InternalLink && (e => "to" in e)(S) ? s.a.createElement(h, c({}, u, S, {
						className: I
					}), k) : O === b.ExternalLink && (e => "href" in e)(S) ? s.a.createElement(y, c({}, u, S, {
						className: I
					}), k) : s.a.createElement(g, c({}, u, S, {
						className: I
					}), k)
				},
				h = e => s.a.createElement(a.a, e),
				y = e => s.a.createElement("a", e),
				g = e => s.a.createElement("button", e),
				v = e => s.a.createElement(f, c({
					kind: b.ExternalLink,
					priority: m.Primary
				}, e)),
				x = e => s.a.createElement(f, c({
					kind: b.InternalLink,
					priority: m.Primary
				}, e)),
				O = e => s.a.createElement(f, c({
					kind: b.Button,
					priority: m.Primary
				}, e)),
				_ = e => s.a.createElement(f, c({
					kind: b.ExternalLink,
					priority: m.Secondary
				}, e)),
				j = e => s.a.createElement(f, c({
					kind: b.InternalLink,
					priority: m.Secondary
				}, e)),
				C = e => s.a.createElement(f, c({
					kind: b.Button,
					priority: m.Secondary
				}, e)),
				w = e => s.a.createElement(f, c({
					kind: b.InternalLink,
					priority: m.Plain
				}, e)),
				E = e => s.a.createElement(f, c({
					kind: b.Button,
					priority: m.Plain
				}, e)),
				S = ({
					className: e,
					...t
				}) => s.a.createElement(f, c({
					kind: b.Button,
					priority: m.Primary,
					className: Object(o.a)(e, d.a.DangerButtonColors)
				}, t)),
				I = ({
					className: e,
					...t
				}) => s.a.createElement(f, c({
					kind: b.Button,
					className: Object(o.a)(e, d.a.GoldButtonColors)
				}, t)),
				k = ({
					className: e,
					...t
				}) => s.a.createElement(f, c({
					kind: b.Button,
					className: Object(o.a)(e, d.a.PremiumButtonColors)
				}, t)),
				N = ({
					className: e,
					...t
				}) => s.a.createElement(f, c({
					kind: b.Button,
					className: Object(o.a)(e, d.a.ChatButton)
				}, t)),
				P = ({
					className: e,
					...t
				}) => s.a.createElement(f, c({
					kind: b.Button,
					className: Object(o.a)(e, d.a.InlineTextButton)
				}, t)),
				M = ({
					className: e,
					...t
				}) => s.a.createElement(f, c({
					kind: b.Button,
					className: Object(o.a)(e, d.a.PlainLinkButton),
					priority: m.PlainLink
				}, t));
			t.t = f
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
		"./src/reddit/controls/Input/ModalInput.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/constants/keycodes.ts"),
				c = r("./src/reddit/controls/Input/index.m.less"),
				u = r.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.handleKeyDown = ({
						keyCode: e
					}) => {
						e === d.a.Escape && this.props.closeModal()
					}
				}
				render() {
					const {
						className: e,
						closeModal: t,
						...r
					} = this.props;
					return s.a.createElement("input", l({
						className: Object(a.a)(u.a.input, e),
						onKeyDown: this.handleKeyDown
					}, r))
				}
			}
			t.a = Object(o.b)(null, {
				closeModal: i.f
			})(m)
		},
		"./src/reddit/controls/Input/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_3eoXtlBWKbkFYoOHUIcIgK"
			}
		},
		"./src/reddit/controls/TextButton/index.m.less": function(e, t, r) {
			e.exports = {
				textButton: "qYzY57HWQ8W424hj3s10-"
			}
		},
		"./src/reddit/controls/TextButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/TextButton/index.m.less"),
				i = r.n(a);
			t.a = e => s.a.createElement("button", {
				children: e.children,
				className: Object(o.a)(i.a.textButton, e.className),
				disabled: e.disabled,
				onClick: e.onClick
			})
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
		"./src/reddit/helpers/isListingFocused/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/brcast/dist/brcast.es.js");
			const s = Object(n.a)({
				isListingFocused: !1
			})
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, r) {
			"use strict";
			t.a = e => {
				const {
					profile: t,
					subreddit: r
				} = e;
				let n = r && `r/${r}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType || (n += `--[${e.onlyOfType}]`), n
			}
		},
		"./src/reddit/helpers/styles/postBackgroundColor.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./node_modules/polished/dist/polished.es.js");
			var n = r("./src/reddit/models/Theme/NewColorSystem/index.ts");

			function s(e) {
				return e.flairStyleTemplate && e.flairStyleTemplate.postBackgroundColor ? e.flairStyleTemplate.postBackgroundColor : Object(n.a)(e).post
			}
		},
		"./src/reddit/helpers/toggleBodyScroll/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "c", (function() {
				return d
			}));
			var n = r("./src/reddit/constants/elementIds.ts");
			let s;
			const o = () => {
					const e = document.body.dataset.previousOverflow;
					if (!e) return;
					document.body.removeAttribute("data-previous-overflow");
					const t = document.getElementById(n.c);
					document.body.style.overflow = e, document.body.style.marginRight = "", t && (t.style.marginRight = "")
				},
				a = () => {
					if (document.body.dataset.previousOverflow) return;
					const e = document.body.style.overflow || "auto";
					document.body.dataset.previousOverflow = e, s || (s = i(document.body)), document.body.style.overflow = "hidden", document.body.style.marginRight = `${s}px`;
					const t = document.getElementById(n.c);
					t && (t.style.marginRight = `${s}px`)
				},
				i = e => {
					const t = e.getBoundingClientRect();
					return window.innerWidth - (t.left + t.right)
				},
				d = e => {
					if (!e || !document.body) return 0;
					const t = i(document.body),
						r = e.offsetWidth - e.scrollWidth;
					return t || r
				}
		},
		"./src/reddit/helpers/trackers/contentTag.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return n
			})), r.d(t, "g", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "l", (function() {
				return a
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "j", (function() {
				return d
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "i", (function() {
				return u
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "n", (function() {
				return m
			})), r.d(t, "m", (function() {
				return p
			})), r.d(t, "k", (function() {
				return b
			})), r.d(t, "o", (function() {
				return f
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "d", (function() {
				return y
			}));
			const n = () => () => ({
					source: "content_tag",
					action: "view",
					noun: "verify_topics_module"
				}),
				s = () => () => ({
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
				a = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "start",
					actionInfo: {
						pageType: "survey_intro"
					}
				}),
				i = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "mature_themes_prompt",
					actionInfo: {
						pageType: "survey_mature_themes"
					}
				}),
				d = e => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: e,
					actionInfo: {
						pageType: e
					}
				}),
				c = e => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "survey_answer",
					actionInfo: {
						pageType: e
					}
				}),
				u = (e, t) => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "next",
					actionInfo: {
						reason: t.join(),
						pageType: e
					}
				}),
				l = e => () => ({
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
				p = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "submit_survey",
					actionInfo: {
						pageType: "survey_rating_summary"
					}
				}),
				b = () => () => ({
					source: "content_tag_survey",
					action: "view",
					noun: "survey_rating_review",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				f = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "take_survey",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				h = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "message_modsupport",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				}),
				y = () => () => ({
					source: "content_tag_survey",
					action: "click",
					noun: "learn_more",
					actionInfo: {
						pageType: "survey_rating_review"
					}
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			}));
			r("./src/reddit/constants/categories.tsx");
			var n = r("./src/reddit/selectors/telemetry.ts");
			const s = e => ({
					screen: n.screen(e),
					profile: n.profile(e),
					subreddit: n.subreddit(e)
				}),
				o = e => t => ({
					action: "click",
					source: "nav",
					noun: e,
					...s(t)
				}),
				a = e => t => ({
					...s(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				i = e => t => ({
					...s(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
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
				i = r("./src/reddit/icons/fonts/Downvote/index.m.less"),
				d = r.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote", e.isFilled), d.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...r
			}) => e ? s.a.createElement("span", c({}, r, {
				className: Object(o.a)(d.a.compactDownvoteWrapper, r.className)
			}), s.a.createElement(u, {
				className: d.a.compactDownvote,
				isFilled: t
			})) : s.a.createElement("span", c({}, r, {
				className: Object(o.a)(d.a.downvoteWrapper, r.className)
			}), s.a.createElement(u, {
				isFilled: t
			}))
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
				i = r("./src/reddit/icons/fonts/Upvote/index.m.less"),
				d = r.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const u = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote", e.isFilled), d.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...r
			}) => e ? s.a.createElement("span", c({}, r, {
				className: Object(o.a)(d.a.compactUpvoteWrapper, r.className)
			}), s.a.createElement(u, {
				className: d.a.compactUpvote,
				isFilled: t
			})) : s.a.createElement("span", c({}, r, {
				className: Object(o.a)(d.a.upvoteWrapper, r.className)
			}), s.a.createElement(u, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, r) {
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
			t.a = e => s.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, r) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = r.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = ({
				className: e,
				isSubreddit: t,
				...r
			}) => s.a.createElement("svg", d({
				className: Object(o.a)(i.a.dropdown, {
					[i.a.mRedditStyle]: !t
				}, e),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r), s.a.createElement("path", {
				d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? o.b.orangered : "none"
			}))
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.m.less": function(e, t, r) {
			e.exports = {
				backgroundContainer: "_2wxsLGNmMLx6sEMLJyn2o9"
			}
		},
		"./src/reddit/layout/page/Listing/BackgroundContainer.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = r("./src/reddit/models/Theme/index.ts"),
				d = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = r("./src/reddit/layout/page/Listing/BackgroundContainer.m.less"),
				u = r.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.a)(e => {
				const {
					backgroundColor: t,
					className: r,
					redditStyle: n,
					theme: a,
					...c
				} = e, m = Object(d.a)(e), p = {
					"--pseudo-before-background": t || Object(i.g)(m.canvas, m.canvasImgUrl, m.canvasImgPosition)
				};
				return s.a.createElement("div", l({
					className: Object(o.a)(u.a.backgroundContainer, r),
					style: p
				}, c))
			})
		},
		"./src/reddit/layout/page/Listing/Content.m.less": function(e, t, r) {
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
		"./src/reddit/layout/page/Listing/Content.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/constants/postLayout.ts"),
				c = r("./src/reddit/contexts/PageLayer/index.tsx"),
				u = r("./src/reddit/selectors/structuredStyles.ts"),
				l = r("./src/reddit/layout/page/Listing/Content.m.less"),
				m = r.n(l);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = Object(c.u)(),
				f = Object(a.c)({
					isEditing: u.i,
					layout: (e, t) => t.forcedLayout || Object(c.Q)(e, t)
				}),
				h = Object(o.b)(f);
			t.a = b(h(({
				className: e,
				hideOnlyChildMargin: t,
				disableFullscreen: r,
				dispatch: n,
				fitPageToContent: o,
				forcedLayout: a,
				isCollectionLayout: u,
				isEditing: l,
				layout: b,
				pageLayer: f,
				...h
			}) => s.a.createElement("div", p({
				className: Object(i.a)(e, m.a.styledContent, {
					[m.a.mLargePostLayout]: b === d.g.Large || Object(c.N)(f),
					[m.a.mDisableFullScreen]: r && !u,
					[m.a.mClassicWidth]: u,
					[m.a.mIsEditing]: !!l,
					[m.a.mCanFlexFullWidth]: !o,
					[m.a.onlyChildMargin]: !t
				})
			}, h))))
		},
		"./src/reddit/layout/page/Listing/index.m.less": function(e, t, r) {
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
		"./src/reddit/layout/page/Listing/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/layout/page/Listing/BackgroundContainer.tsx"),
				a = r("./src/reddit/layout/page/Listing/Content.tsx"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/reddit/constants/componentSizes.ts"),
				c = r("./src/reddit/constants/elementClassNames.ts"),
				u = r("./src/reddit/constants/screenWidths.ts"),
				l = r("./src/reddit/contexts/NavbarExp.ts"),
				m = r("./src/reddit/components/StructuredStyles/BladeManager/index.tsx"),
				p = r("./src/reddit/layout/page/Listing/index.m.less"),
				b = r.n(p);
			t.a = e => {
				const {
					backgroundColor: t,
					className: r,
					containerRef: p,
					content: f,
					contentBanner: h,
					contentClassName: y,
					contentNavBar: g,
					disableFullscreen: v,
					fitPageToContent: x,
					forcedLayout: O,
					hideOnlyChildMargin: _,
					isCollectionLayout: j,
					isPageSwapped: C,
					maxWidth: w,
					navBar: E,
					redditStyle: S,
					sidebar: I,
					sidebars: k,
					trendingUnit: N,
					subredditId: P
				} = e, M = N ? "28px" : "0", L = C ? {
					marginRight: `${d.q}px`,
					marginTop: M
				} : {
					marginLeft: `${d.q}px`,
					marginTop: M
				}, T = I && s.a.createElement("div", {
					className: Object(i.a)(b.a.sidebar, j ? b.a["m-collectionLayout"] : b.a.defaultLayout),
					style: L
				}, I), B = s.a.createElement(a.a, {
					hideOnlyChildMargin: _,
					className: y,
					disableFullscreen: v,
					fitPageToContent: x,
					forcedLayout: O,
					isCollectionLayout: j
				}, h, f);
				let F;
				F = k ? s.a.createElement(s.a.Fragment, null, k[0], B, k[1]) : C ? s.a.createElement(s.a.Fragment, null, T, B) : s.a.createElement(s.a.Fragment, null, B, T);
				const R = v ? `${w||u.a+2*d.m}px` : "100%",
					A = Object(n.useContext)(l.a);
				return s.a.createElement(m.a, {
					subredditId: P
				}, s.a.createElement("div", {
					className: Object(i.a)(b.a.outerContainer, c.i, r, {
						[b.a.outerContainerExp]: A
					}),
					ref: p
				}, s.a.createElement(o.a, {
					className: c.h,
					redditStyle: S,
					backgroundColor: t
				}), s.a.createElement("div", {
					className: b.a.innerContainer
				}, s.a.createElement("div", {
					className: b.a.bannerNavContainer
				}, E), g, (e => e.hero ? s.a.createElement(s.a.Fragment, null, e.hero) : null)(e), s.a.createElement("div", {
					style: {
						maxWidth: R
					}
				}, N), s.a.createElement("div", {
					className: b.a.body,
					style: {
						maxWidth: R
					}
				}, F))))
			}
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
		"./src/reddit/layout/row/InlineButton/index.m.less": function(e, t, r) {
			e.exports = {
				inlineButton: "_10K5i7NW6qcm-UoCtpB3aK"
			}
		},
		"./src/reddit/layout/row/InlineButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/layout/row/InlineButton/index.m.less"),
				o = r.n(s);
			t.a = n.a.button("inlineButton", o.a)
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
				s = r.n(n),
				o = r("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/layout/twoCol/ExpandLeft/index.m.less"),
				d = r.n(i);
			t.a = Object(o.a)(e => s.a.createElement("div", {
				className: Object(a.a)(d.a.exapndLeftContainer, e.className)
			}, s.a.createElement("div", {
				className: d.a.left
			}, Array.isArray(e.children) && e.children[0]), s.a.createElement("div", {
				className: d.a.right,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[1])), 2)
		},
		"./src/reddit/pages/ModListing/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/lodash/fromPairs.js"),
				s = r.n(n),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				d = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/constants/index.ts"),
				u = r("./src/lib/extractQueryParams/index.ts"),
				l = r("./src/lib/makeListingKey/index.ts"),
				m = r("./src/reddit/actions/pages/modListing/index.ts"),
				p = r("./src/reddit/components/EmptySubreddit.tsx"),
				b = r("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				f = r("./src/reddit/components/JumpToContent/index.tsx"),
				h = r("./src/reddit/components/ListingPostList/index.tsx"),
				y = r("./src/reddit/components/ModHub/Content/NoPermissions.tsx"),
				g = r("./node_modules/fbt/lib/FbtPublic.js"),
				v = r("./src/higherOrderComponents/asModal/index.tsx"),
				x = r("./src/reddit/actions/modal.ts"),
				O = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				_ = r("./src/reddit/components/MultiredditInfo/ObsoleteMultiredditInfo/SubredditsOrProfilesList.tsx"),
				j = r("./src/reddit/controls/TextButton/index.tsx"),
				C = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				w = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				E = r("./src/reddit/selectors/activeModalId.ts"),
				S = r("./src/reddit/selectors/modQueue.ts"),
				I = r("./src/reddit/components/ModListingSidebar/FeedDetails/index.m.less"),
				k = r.n(I);
			const {
				fbt: N
			} = r("./node_modules/fbt/lib/FbtPublic.js"), P = Object(v.a)(e => a.a.createElement(O.e, {
				className: k.a.modalBody
			}, a.a.createElement(O.i, null, a.a.createElement(w.a, null, a.a.createElement(O.q, {
				className: k.a.modalTitle
			}, a.a.createElement(C.a, {
				className: k.a.modIcon
			}), N._("r/Mod", null, {
				hk: "2a9ICx"
			})), a.a.createElement(j.a, {
				onClick: e.onCloseModal
			}, a.a.createElement(O.b, null)))), a.a.createElement(O.l, {
				className: k.a.modalMain
			}, a.a.createElement("div", {
				className: k.a.modalDescription
			}, N._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), a.a.createElement(_.b, {
				isSidebar: !1,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			})))), M = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
				className: k.a.feedDetailsTitle
			}, a.a.createElement(C.a, {
				className: k.a.modIcon
			}), N._("r/Mod", null, {
				hk: "2a9ICx"
			})), a.a.createElement("div", {
				className: k.a.feedDetailsDescription
			}, N._("This is a feed for the communities that you moderate.", null, {
				hk: "2XK5kH"
			})), e.moderatedCommunitiesIds.length ? a.a.createElement(_.b, {
				isSidebar: !0,
				onSeeMoreDetails: e.onSeeMoreDetails,
				subredditsOrProfilesIds: e.moderatedCommunitiesIds
			}) : a.a.createElement("div", {
				className: k.a.loadingBar
			})), L = Object(d.c)({
				isModalOpen: Object(E.b)("MOD_LISTING_FEED_DETAILS_MODAL_ID"),
				moderatedCommunitiesIds: S.e
			});
			var T = Object(i.b)(L, (e, {}) => ({
					toggleModal: () => e(Object(x.i)("MOD_LISTING_FEED_DETAILS_MODAL_ID"))
				}))(e => {
					const {
						isModalOpen: t,
						moderatedCommunitiesIds: r,
						toggleModal: n
					} = e;
					return r ? a.a.createElement(a.a.Fragment, null, a.a.createElement(M, {
						moderatedCommunitiesIds: r,
						onSeeMoreDetails: n
					}), t && a.a.createElement(P, {
						moderatedCommunitiesIds: r,
						onCloseModal: n,
						onOverlayClick: n,
						withOverlay: !0
					})) : null
				}),
				B = r("./node_modules/react-router-redux/es/index.js"),
				F = r("./src/reddit/components/TrackingHelper/index.tsx"),
				R = r("./src/reddit/contexts/PageLayer/index.tsx"),
				A = r("./src/reddit/controls/Button/index.tsx");
			const D = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				U = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				H = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				});
			var K = r("./src/reddit/routes/modListing/index.ts");
			const V = e => e.modListingPage.filteredSubreddits.api.pending;
			var q = r("./src/reddit/constants/keycodes.ts"),
				W = r("./src/reddit/layout/row/Inline/index.tsx"),
				Q = r("./src/reddit/components/ModListingSidebar/HideCommunities/HideInput/index.m.less"),
				G = r.n(Q);
			const J = Object(d.c)({
				apiError: e => e.modListingPage.filteredSubreddits.api.error,
				isApiPending: V
			});
			class X extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						subredditInput: ""
					}, this.clearSubredditInput = () => {
						this.setSubredditInput("")
					}, this.setSubredditInput = e => {
						this.setState({
							subredditInput: e
						})
					}, this.submitInput = () => {
						this.canSubmitInput() && (this.props.sendEvent(D()), this.props.hide(this.state.subredditInput), this.clearSubredditInput())
					}, this.onChange = e => {
						this.setSubredditInput(e.target.value)
					}, this.onKeyPress = e => {
						e.key === q.b.Enter && this.submitInput()
					}, this.canSubmitInput = () => this.state.subredditInput && !this.props.isApiPending
				}
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(W.a, null, a.a.createElement("input", {
						className: G.a.input,
						onChange: this.onChange,
						onKeyPress: this.onKeyPress,
						placeholder: g.fbt._("r/community", null, {
							hk: "4ceDB9"
						}),
						value: this.state.subredditInput
					}), a.a.createElement(A.l, {
						"aria-label": g.fbt._("Hide", null, {
							hk: "1BnFmX"
						}),
						className: G.a.hideButton,
						disabled: !this.canSubmitInput(),
						onClick: this.submitInput
					}, g.fbt._("Hide", null, {
						hk: "1BnFmX"
					}))), e.apiError && e.apiError.explanation && a.a.createElement("div", {
						className: G.a.errorText
					}, e.apiError.explanation))
				}
			}
			var z = Object(i.b)(J, e => ({
					hide: t => e(Object(m.hideSubreddit)(t))
				}))(Object(F.c)(X)),
				Y = r("./src/lib/lessComponent.tsx"),
				Z = r("./src/reddit/components/SubredditIcon/index.tsx"),
				$ = r("./src/lib/classNames/index.ts"),
				ee = r("./src/reddit/icons/fonts/helpers.tsx");
			var te = e => a.a.createElement("i", {
					className: Object($.a)(Object(ee.b)("clear", e.isFilled), e.className)
				}),
				re = r("./src/reddit/selectors/profile.ts"),
				ne = r("./src/reddit/selectors/subreddit.ts"),
				se = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/SubredditsListRow/index.m.less"),
				oe = r.n(se);
			const ae = Y.a.wrapped(Z.b, "SubredditIcon", oe.a),
				ie = Object(d.c)({
					isApiPending: V,
					subredditOrProfile: (e, t) => {
						const r = Object(ne.w)(e, {
							subredditName: t.subredditName
						});
						if (!r) {
							const r = (e => e.startsWith(c.hc) ? e.slice(2) : e)(t.subredditName);
							return r && Object(re.j)(e, {
								profileName: r
							}) || null
						}
						return r
					}
				});
			class de extends a.a.Component {
				constructor() {
					super(...arguments), this.onClickUnhideSubreddit = e => {
						e.stopPropagation(), e.preventDefault(), this.props.subredditOrProfile && (this.props.sendEvent(U()), this.props.unhide(this.props.subredditName))
					}
				}
				render() {
					const {
						props: e
					} = this;
					return e.subredditOrProfile ? a.a.createElement(_.a, {
						className: oe.a.row,
						to: e.subredditOrProfile.url
					}, a.a.createElement(ae, {
						subredditOrProfile: e.subredditOrProfile
					}), a.a.createElement("span", {
						className: oe.a.label
					}, e.subredditOrProfile.displayText), !e.isApiPending && a.a.createElement("button", {
						"aria-label": g.fbt._("Unhide", null, {
							hk: "2sCv0O"
						}),
						className: oe.a.unhideButton,
						onClick: this.onClickUnhideSubreddit
					}, a.a.createElement(te, null))) : null
				}
			}
			var ce = Object(i.b)(ie, e => ({
					unhide: t => e(Object(m.unhideSubreddit)(t))
				}))(Object(F.c)(de)),
				ue = r("./src/reddit/components/ModListingSidebar/HideCommunities/SubredditsList/index.m.less"),
				le = r.n(ue);
			const {
				fbt: me
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var pe = ({
					hiddenSubredditsNames: e
				}) => {
					const t = e.map(e => a.a.createElement(ce, {
						key: e,
						subredditName: e
					}));
					return a.a.createElement(a.a.Fragment, null, e.length ? a.a.createElement("div", {
						className: le.a.rows
					}, t) : a.a.createElement("div", {
						className: le.a.noRows
					}, me._("Viewing all communities", null, {
						hk: "4p9SL8"
					})))
				},
				be = r("./src/reddit/components/ModListingSidebar/HideCommunities/index.m.less"),
				fe = r.n(be);
			const {
				fbt: he
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ye = Object(R.u)({
				filtered: e => !!e && Object(K.d)(e.url)
			}), ge = Object(d.c)({
				hiddenSubredditsNames: e => e.modListingPage.filteredSubreddits.names
			});
			class ve extends a.a.Component {
				constructor() {
					super(...arguments), this.onToggleFiltered = () => {
						this.props.sendEvent(H(this.props.filtered)), this.props.toggleFiltered()
					}
				}
				render() {
					const {
						props: e
					} = this;
					return a.a.createElement("div", {
						className: fe.a.container
					}, a.a.createElement("div", {
						className: fe.a.hideCommunitiesHeader
					}, he._("Hide communities", null, {
						hk: "15OtHo"
					})), a.a.createElement(A.r, {
						className: fe.a.tertiaryButton,
						onClick: this.onToggleFiltered
					}, e.filtered ? he._("Go to unfiltered r/Mods", null, {
						hk: "2RGhxF"
					}) : he._("Go to filtered r/Mod", null, {
						hk: "YdVw7"
					})), e.filtered && a.a.createElement("div", {
						className: fe.a.inputContainer
					}, a.a.createElement(z, null), a.a.createElement(pe, {
						hiddenSubredditsNames: e.hiddenSubredditsNames
					})))
				}
			}
			var xe = ye(Object(i.b)(ge, (e, {
					filtered: t
				}) => ({
					toggleFiltered: () => e(Object(B.b)(t ? K.a : K.b))
				}))(Object(F.c)(ve))),
				Oe = r("./src/reddit/components/SidebarContainer/index.tsx"),
				_e = r("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				je = r("./src/reddit/components/Widgets/ThemedWidget/index.tsx");
			var Ce = () => a.a.createElement(Oe.a, null, a.a.createElement(je.a, {
					title: g.fbt._("Feed details", null, {
						hk: "3JlrpB"
					})
				}, a.a.createElement(T, null), a.a.createElement(xe, null)), a.a.createElement(_e.a, null)),
				we = r("./src/reddit/constants/page.ts"),
				Ee = r("./src/reddit/constants/parameters.ts"),
				Se = r("./src/reddit/helpers/trackers/screenview.ts"),
				Ie = r("./src/reddit/layout/page/Listing/index.tsx"),
				ke = r("./src/reddit/selectors/moderatorPermissions.ts");
			const Ne = Object(d.a)((e, {
					location: t
				}) => t.search, (e, {
					match: t
				}) => t.params.sort || c.W.HOT, (e, {
					match: t
				}) => Object(K.d)(t.path), ke.j, ke.d, (e, t, r, n, o) => {
					const a = s()([...Object(u.a)(e)]),
						i = Ee.A in a && a[Ee.A].toUpperCase(),
						d = "string" == typeof i && i in c.fc ? c.fc[i] : c.gc,
						m = r ? we.f : we.e;
					return {
						filtered: r,
						isModerator: n,
						isModeratorWithPostPerms: o,
						listingKey: Object(l.a)(m, t, a),
						listingName: m,
						sort: t,
						timeSort: d
					}
				}),
				Pe = Object(i.b)(Ne, (e, t) => ({
					onLoadMorePosts: () => e(m.moreModListingRequested({
						sort: t.match.params.sort
					}))
				}));
			class Me extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onViewed = (e, t) => Object(Se.f)({
						key: this.props.listingKey,
						sort: this.props.sort,
						timerType: t,
						timerMillis: e
					}), this.renderEmptySubreddit = () => a.a.createElement(p.a, {
						listingName: this.props.listingName,
						sort: this.props.sort
					})
				}
				render() {
					const e = this.props.filtered ? K.b : K.a;
					return a.a.createElement("div", null, this.props.isModeratorWithPostPerms ? a.a.createElement(Ie.a, {
						className: this.props.className,
						fitPageToContent: !0,
						content: a.a.createElement(a.a.Fragment, null, a.a.createElement(b.a, {
							baseUrl: e,
							sort: this.props.sort,
							timeSort: this.props.timeSort
						}), a.a.createElement(f.a, null), a.a.createElement(h.a, {
							listingKey: this.props.listingKey,
							listingName: this.props.listingName,
							listingViewed: this.onViewed,
							noPostsComponent: this.renderEmptySubreddit,
							onLoadMore: this.props.onLoadMorePosts
						})),
						sidebar: a.a.createElement(Ce, null)
					}) : a.a.createElement(y.a, {
						isModerator: this.props.isModerator
					}))
				}
			}
			t.default = Pe(Me)
		},
		"./src/reddit/pages/Subreddit/SurveyUnit.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/components/CommunityTopicSurvey/async.tsx"),
				d = r("./src/reddit/components/ContentSurvey/ContentRatingSurveyBanner.tsx"),
				c = r("./src/reddit/components/PowerupsCncModule/index.tsx"),
				u = r("./src/reddit/components/PowerupsCncModule/async.ts"),
				l = r("./src/reddit/constants/postLayout.ts"),
				m = r("./src/reddit/selectors/gold/powerups/index.ts");
			const p = Object(n.a)({
				resolved: {},
				chunkName: () => "NewCommunityProgress",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e(0), r.e("NewCommunityProgress")]).then(r.bind(null, "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/NewCommunityProgress/NewCommunityProgress.tsx"
				}
			});

			function b({
				postLayout: e,
				subredditId: t
			}) {
				var r;
				const n = Object(a.e)(e => e.subreddits.survey[t]),
					s = Object(a.e)(e => e.subreddits.progressModule[t]),
					b = Object(a.e)(e => Object(m.b)(e, {
						subredditId: t
					}));
				return (null === (r = null == s ? void 0 : s.cards) || void 0 === r ? void 0 : r.length) > 0 ? o.a.createElement(p, {
					closeModuleOnMount: !!e && e !== l.g.Large,
					subredditId: t,
					progressModule: s
				}) : e !== l.g.Large ? null : (null == n ? void 0 : n.isEligible) && !(null == n ? void 0 : n.response) ? o.a.createElement(d.a, {
					subredditId: t,
					survey: n
				}) : b && !Object(c.isPowerupsCncModuleHiddenBySpamLimit)(t) ? o.a.createElement(u.a, {
					subredditId: t
				}) : o.a.createElement(i.a, {
					subredditId: t
				})
			}
		},
		"./src/reddit/reducers/pages/modHub/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/subredditModeration/constants.ts");
			var o = (e = null, t) => {
					switch (t.type) {
						case s.g:
						case s.f:
							return null;
						case s.e:
							return t.payload;
						default:
							return e
					}
				},
				a = r("./src/reddit/models/SubredditModeration/index.ts");
			const i = {};
			var d = (e = i, t) => {
					switch (t.type) {
						case s.g: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(a.d)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case s.f:
						case s.e: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(a.d)(r, n);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				c = Object(n.c)({
					error: o,
					pending: d
				});
			const u = {};
			var l = (e = u, t) => {
				switch (t.type) {
					case s.f: {
						const {
							fetchedToken: r,
							subredditId: n
						} = t.payload, s = Object(a.d)(n, r);
						return {
							...e,
							[s]: !0
						}
					}
					default:
						return e
				}
			};
			const m = {};
			var p = (e = m, t) => {
					switch (t.type) {
						case s.f: {
							const {
								subredditId: e,
								after: r
							} = t.payload;
							return {
								[e]: r
							}
						}
						default:
							return e
					}
				},
				b = r("./node_modules/icepick/icepick.js");
			const f = {};
			var h = (e = f, t) => {
				switch (t.type) {
					case s.d:
					case s.f: {
						const {
							subredditId: r,
							approvedSubmitters: n
						} = t.payload, s = {
							[r]: n
						};
						return Object(b.merge)(e, s)
					}
					case s.k: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(b.unsetIn)(e, [r, n])
					}
					default:
						return e
				}
			};
			var y = (e = null, t) => {
				switch (t.type) {
					case s.j:
					case s.i:
						return null;
					case s.h:
						return t.payload;
					default:
						return e
				}
			};
			var g = (e = !1, t) => {
					switch (t.type) {
						case s.j:
							return !0;
						case s.i:
						case s.h:
							return !1;
						default:
							return e
					}
				},
				v = Object(n.c)({
					error: y,
					pending: g
				});
			var x = (e = null, t) => {
					switch (t.type) {
						case s.j:
							return null;
						case s.i: {
							const e = t.payload.approvedSubmitterIds[0];
							return e ? t.payload.approvedSubmitters[e] : null
						}
						default:
							return e
					}
				},
				O = Object(n.c)({
					api: v,
					result: x
				});
			const _ = {};
			var j = (e = _, t) => {
					switch (t.type) {
						case s.f: {
							const {
								subredditId: r,
								approvedSubmitterIds: n
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...n]
							} : {
								...e,
								[r]: n
							}
						}
						case s.k: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case s.d: {
							const {
								subredditId: r,
								approvedSubmitterIds: n
							} = t.payload, s = n[0];
							return s && e[r] && -1 === e[r].indexOf(s) ? {
								[r]: [s, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				C = Object(n.c)({
					api: c,
					fetchedTokens: l,
					loadMore: p,
					models: h,
					search: O,
					userOrder: j
				}),
				w = r("./src/reddit/actions/grantUserFlair/constants.ts");
			var E = (e = null, t) => {
				switch (t.type) {
					case w.g:
					case w.i:
						return null;
					case w.f:
						return t.payload;
					default:
						return e
				}
			};
			var S = (e = !1, t) => {
					switch (t.type) {
						case w.i:
							return !0;
						case w.g:
						case w.f:
							return !1;
						default:
							return e
					}
				},
				I = Object(n.c)({
					error: E,
					pending: S
				}),
				k = r("./node_modules/lodash/merge.js"),
				N = r.n(k),
				P = r("./node_modules/lodash/omit.js"),
				M = r.n(P);
			const L = {};
			var T = (e = L, t) => {
				switch (t.type) {
					case w.g:
					case w.k: {
						const {
							subredditId: r,
							flairedUsers: n
						} = t.payload;
						return N()({
							...e
						}, {
							[r]: n
						})
					}
					case w.c: {
						const {
							subredditId: r,
							userName: n
						} = t.payload, s = M()(e[r], n);
						return {
							...e,
							[r]: s
						}
					}
					case w.a:
					case w.b:
					case w.h:
						const {
							subredditId: r, userName: n, applied: s
						} = t.payload;
						return s ? {
							...e,
							[r]: {
								...e[r],
								[n]: s
							}
						} : e;
					default:
						return e
				}
			};
			const B = {};
			var F = (e = B, t) => {
				switch (t.type) {
					case w.g: {
						const {
							key: r,
							pageInfo: n
						} = t.payload;
						return {
							...e,
							[r]: n
						}
					}
					default:
						return e
				}
			};
			var R = (e = null, t) => {
				switch (t.type) {
					case w.l:
					case w.k:
						return null;
					case w.j:
						return t.payload;
					default:
						return e
				}
			};
			var A = (e = !1, t) => {
					switch (t.type) {
						case w.l:
							return !0;
						case w.k:
						case w.j:
							return !1;
						default:
							return e
					}
				},
				D = Object(n.c)({
					error: R,
					pending: A
				});
			var U = (e = null, t) => {
					switch (t.type) {
						case w.k: {
							const {
								searchResult: e
							} = t.payload;
							return e
						}
						case w.c: {
							const {
								userName: r
							} = t.payload;
							return e === r ? null : e
						}
						default:
							return e
					}
				},
				H = Object(n.c)({
					api: D,
					result: U
				});
			const K = {};
			var V = (e = K, t) => {
					switch (t.type) {
						case w.g: {
							const {
								key: r,
								userOrder: n
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						case w.a: {
							const {
								key: r,
								userName: n
							} = t.payload;
							if (!r) return e;
							if (!e[r].includes(n)) {
								const t = [...e[r], n];
								return {
									...e,
									[r]: t
								}
							}
							return e
						}
						case w.c: {
							const {
								userName: r
							} = t.payload, n = {};
							for (const t in e) n[t] = e[t].filter(e => e !== r);
							return n
						}
						default:
							return e
					}
				},
				q = Object(n.c)({
					api: I,
					models: T,
					pageInfo: F,
					search: H,
					userOrder: V
				}),
				W = r("./src/reddit/actions/moderationLog/constants.ts");
			const Q = {};
			var G = (e = Q, t) => {
				switch (t.type) {
					case W.b: {
						const {
							actionIds: r,
							key: n,
							subredditId: s
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s] || {},
								[n]: r
							}
						}
					}
					default:
						return e
				}
			};
			const J = {};
			var X = (e = J, t) => {
					switch (t.type) {
						case W.b: {
							const {
								normalizedModerationLog: r,
								subredditId: n
							} = t.payload, s = {};
							r.forEach(e => {
								s[e.id] = e
							});
							const o = {
								[n]: s
							};
							return N()({
								...e
							}, o)
						}
						default:
							return e
					}
				},
				z = Object(n.c)({
					itemOrder: G,
					models: X
				});
			var Y = (e = null, t) => {
				switch (t.type) {
					case W.b: {
						const {
							endCursor: e
						} = t.payload;
						return e
					}
					default:
						return e
				}
			};
			const Z = {};
			var $ = (e = Z, t) => {
				switch (t.type) {
					case W.b: {
						const {
							hasNextPage: r,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const ee = {};
			var te = (e = ee, t) => {
				switch (t.type) {
					case W.b: {
						const {
							hasPreviousPage: r,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			const re = [];
			var ne = (e = re, t) => {
				switch (t.type) {
					case W.a: {
						const {
							normalizedModerators: r,
							subredditId: n
						} = t.payload;
						return {
							...e,
							[n]: r
						}
					}
					default:
						return e
				}
			};
			var se = (e = null, t) => {
					switch (t.type) {
						case W.b: {
							const {
								startCursor: e
							} = t.payload;
							return e
						}
						default:
							return e
					}
				},
				oe = Object(n.c)({
					actions: z,
					endCursor: Y,
					hasNextPage: $,
					hasPreviousPage: te,
					moderators: ne,
					startCursor: se
				});
			const ae = {};
			var ie = (e = ae, t) => {
				switch (t.type) {
					case s.I:
					case s.u: {
						const {
							subredditId: r,
							moderators: n
						} = t.payload.response || t.payload, s = {
							[r]: n
						};
						return Object(b.merge)(e, s)
					}
					case s.y: {
						const {
							subredditId: r,
							userId: n,
							permissions: s
						} = t.payload;
						return Object(b.setIn)(e, [r, n, "modPermissions"], s)
					}
					case s.Y: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(b.unsetIn)(e, [r, n])
					}
					default:
						return e
				}
			};
			const de = {};
			var ce = (e = de, t) => {
				switch (t.type) {
					case s.v:
					case s.u: {
						const {
							key: r,
							subredditId: n
						} = t.payload;
						return n ? {
							...e,
							[r]: null
						} : e
					}
					case s.t: {
						const {
							error: r,
							key: n,
							subredditId: s
						} = t.payload;
						return s ? {
							...e,
							[n]: r
						} : e
					}
					default:
						return e
				}
			};
			const ue = {};
			var le = (e = ue, t) => {
					switch (t.type) {
						case s.t:
						case s.u: {
							const {
								subredditId: r,
								key: n
							} = t.payload;
							return r ? {
								...e,
								[n]: !1
							} : e
						}
						case s.v: {
							const {
								subredditId: r,
								key: n
							} = t.payload;
							return r ? {
								...e,
								[n]: !0
							} : e
						}
						default:
							return e
					}
				},
				me = Object(n.c)({
					error: ce,
					pending: le
				});
			const pe = {};
			var be = (e = pe, t) => {
					switch (t.type) {
						case s.u: {
							const {
								subredditId: r,
								response: n,
								key: s
							} = t.payload;
							return Object(b.setIn)(e, [r, s], n.moderatorIds)
						}
						case s.Y: {
							const {
								subredditId: r,
								userId: n,
								key: s
							} = t.payload, o = e[r][s].filter(e => e !== n);
							return Object(b.setIn)(e, [r, s], o)
						}
						default:
							return e
					}
				},
				fe = Object(n.c)({
					data: be,
					api: me
				});
			var he = (e = null, t) => {
				switch (t.type) {
					case s.B:
					case s.A:
						return null;
					case s.z:
						return t.payload;
					default:
						return e
				}
			};
			var ye = (e = !1, t) => {
					switch (t.type) {
						case s.A:
						case s.z:
							return !1;
						case s.B:
							return !0;
						default:
							return e
					}
				},
				ge = Object(n.c)({
					error: he,
					pending: ye
				});
			const ve = {};
			var xe = (e = ve, t) => {
				switch (t.type) {
					case s.A: {
						const {
							subredditId: r,
							moderators: n
						} = t.payload;
						return Object(b.set)(e, r, n)
					}
					case s.V: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(b.unsetIn)(e, [r, n])
					}
					case s.c: {
						const r = t.payload,
							{
								subredditId: n,
								moderators: s
							} = r,
							o = {
								[n]: s
							};
						return Object(b.merge)(e, o)
					}
					default:
						return e
				}
			};
			const Oe = {};
			var _e = (e = Oe, t) => {
					switch (t.type) {
						case s.A: {
							const {
								subredditId: r,
								moderatorIds: n
							} = t.payload;
							return {
								...e,
								[r]: n
							}
						}
						case s.V: {
							const {
								subredditId: r,
								userId: n
							} = t.payload, s = e[r].filter(e => e !== n);
							return {
								...e,
								[r]: s
							}
						}
						case s.c: {
							const r = t.payload,
								{
									subredditId: n,
									moderatorIds: s
								} = r,
								o = [...e[n] || [], ...s];
							return {
								...e,
								[n]: o
							}
						}
						default:
							return e
					}
				},
				je = Object(n.c)({
					api: ge,
					models: xe,
					userOrder: _e
				});
			const Ce = {};
			var we = (e = Ce, t) => {
				switch (t.type) {
					case s.F: {
						const {
							subredditId: r,
							response: n
						} = t.payload, {
							invitePending: s
						} = n, o = {
							[r]: s
						};
						return Object(b.merge)(e, o)
					}
					case s.C:
					case s.D: {
						const {
							subredditId: r
						} = t.payload;
						return Object(b.unset)(e, r)
					}
					default:
						return e
				}
			};
			const Ee = {};
			var Se = (e = Ee, t) => {
				switch (t.type) {
					case s.u: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Ie = {};
			var ke = (e = Ie, t) => {
				switch (t.type) {
					case s.F: {
						const {
							response: e
						} = t.payload;
						return {
							[e.subredditId]: {
								after: e.after,
								before: e.before
							}
						}
					}
					default:
						return e
				}
			};
			const Ne = {};
			var Pe = (e = Ne, t) => {
				switch (t.type) {
					case s.F: {
						const {
							response: r
						} = t.payload, n = {
							[r.subredditId]: r.moderators
						};
						return Object(b.merge)({
							...e
						}, n)
					}
					case s.y: {
						const r = t.payload,
							{
								subredditId: n,
								userId: s,
								permissions: o
							} = r;
						return e[n] && e[n][s] ? Object(b.setIn)(e, [n, s, "modPermissions"], o) : e
					}
					default:
						return e
				}
			};
			var Me = (e = null, t) => {
				switch (t.type) {
					case s.J:
					case s.I:
						return null;
					case s.H:
						return t.payload;
					default:
						return e
				}
			};
			var Le = (e = !1, t) => {
					switch (t.type) {
						case s.J:
							return !0;
						case s.I:
						case s.H:
							return !1;
						default:
							return e
					}
				},
				Te = Object(n.c)({
					error: Me,
					pending: Le
				}),
				Be = r("./node_modules/lodash/isEqual.js"),
				Fe = r.n(Be);
			var Re = (e = null, t) => {
					switch (t.type) {
						case s.J:
						case s.H:
						case s.Y:
							return null;
						case s.I: {
							const e = t.payload.moderatorIds[0];
							return e ? t.payload.moderators[e] : null
						}
						case s.y: {
							const {
								userId: r,
								permissions: n
							} = t.payload;
							return e && e.id === r && !Fe()(e.modPermissions, n) ? {
								...e,
								modPermissions: n
							} : e
						}
						default:
							return e
					}
				},
				Ae = Object(n.c)({
					api: Te,
					result: Re
				});
			const De = {};
			var Ue = (e = De, t) => {
				switch (t.type) {
					case s.G:
					case s.F: {
						const {
							subredditId: r,
							key: n
						} = t.payload;
						return r ? {
							...e,
							[n]: null
						} : e
					}
					case s.E: {
						const {
							error: r,
							subredditId: n,
							key: s
						} = t.payload;
						return n ? {
							...e,
							[s]: r
						} : e
					}
					default:
						return e
				}
			};
			const He = {};
			var Ke = (e = He, t) => {
					switch (t.type) {
						case s.E:
						case s.F: {
							const {
								subredditId: r,
								key: n
							} = t.payload;
							return r ? {
								...e,
								[n]: !1
							} : e
						}
						case s.G: {
							const {
								subredditId: r,
								key: n
							} = t.payload;
							return r ? {
								...e,
								[n]: !0
							} : e
						}
						default:
							return e
					}
				},
				Ve = Object(n.c)({
					error: Ue,
					pending: Ke
				});
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const qe = {};
			var We = (e = qe, t) => {
					switch (t.type) {
						case s.F: {
							const {
								response: r,
								subredditId: n,
								key: s
							} = t.payload, {
								moderatorIds: o
							} = r;
							return Object(b.merge)(e, {
								[n]: {
									[s]: o
								}
							})
						}
						case s.Y: {
							const {
								subredditId: r,
								userId: n
							} = t.payload, s = {
								...e[r]
							};
							return Object.keys(e[r]).forEach(t => {
								const o = e[r][t].filter(e => e !== n);
								s[t] = o
							}), Object(b.set)(e, r, s)
						}
						default:
							return e
					}
				},
				Qe = Object(n.c)({
					data: We,
					api: Ve
				}),
				Ge = Object(n.c)({
					editableModerators: ie,
					editableUserOrder: fe,
					invitedModerators: je,
					invitePending: we,
					loadMoreModerators: ke,
					loadMoreEditableModerators: Se,
					models: Pe,
					search: Ae,
					userOrder: Qe
				}),
				Je = r("./src/reddit/actions/bulkActions/constants.ts");
			var Xe = (e = null, t) => {
					switch (t.type) {
						case Je.c:
						case Je.b:
							return null;
						case Je.a:
							return t.payload;
						default:
							return e
					}
				},
				ze = r("./src/reddit/actions/modQueue/constants.ts");
			var Ye = (e = !1, t) => {
					switch (t.type) {
						case Je.c:
							return !0;
						case Je.b:
						case Je.a:
						case ze.s:
						case ze.r:
							return !1;
						default:
							return e
					}
				},
				Ze = Object(n.c)({
					error: Xe,
					pending: Ye
				});
			const $e = {};
			var et = (e = $e, t) => {
					switch (t.type) {
						case ze.a: {
							const {
								ids: r
							} = t.payload, n = {};
							return r.forEach(e => n[e] = !0), {
								...e,
								...n
							}
						}
						case ze.d: {
							const {
								ids: r
							} = t.payload;
							return M()(e, r)
						}
						case ze.c: {
							const {
								ids: e
							} = t.payload, r = {};
							return e.forEach(e => r[e] = !0), r
						}
						default:
							return e
					}
				},
				tt = r("./src/reddit/models/ModQueue/index.ts");
			const rt = {};
			var nt = (e = rt, t) => {
					switch (t.type) {
						case Je.b: {
							const {
								operation: e,
								ids: r
							} = t.payload;
							return "approve" === e ? rt : {
								[tt.c[e]]: r
							}
						}
						default:
							return e
					}
				},
				st = Object(n.c)({
					api: Ze,
					selectedItems: et,
					undoLastAction: nt
				});
			var ot = (e = null, t) => {
				switch (t.type) {
					case ze.g:
					case ze.f:
						return null;
					case ze.e:
						return t.payload;
					default:
						return e
				}
			};
			var at = (e = !1, t) => {
					switch (t.type) {
						case ze.g:
							return !0;
						case ze.f:
						case ze.e:
							return !1;
						default:
							return e
					}
				},
				it = Object(n.c)({
					error: ot,
					pending: at
				});
			const dt = {};
			var ct = (e = dt, t) => {
				switch (t.type) {
					case ze.f: {
						const {
							listingKey: r,
							page: n,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[n]: o
							}
						}
					}
					default:
						return e
				}
			};
			const ut = {};
			var lt = (e = ut, t) => {
					switch (t.type) {
						case ze.f: {
							const {
								listingKey: r,
								response: n
							} = t.payload, {
								modqueue: s
							} = n, o = s[s.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				mt = Object(n.c)({
					api: it,
					itemOrder: ct,
					loadMore: lt
				}),
				pt = r("./src/reddit/actions/pages/modListing/constants.ts");
			var bt = (e = null, t) => {
				switch (t.type) {
					case pt.e: {
						const r = t.payload,
							{
								moderatingSubreddits: n
							} = r;
						return n ? null : e
					}
					case ze.i:
					case ze.f:
					case ze.m:
					case ze.p:
					case ze.v: {
						const {
							response: e
						} = t.payload, {
							moderatedAfter: r
						} = e;
						return r
					}
					case ze.k: {
						const e = t.payload,
							{
								moderatedAfter: r
							} = e;
						return r
					}
					default:
						return e
				}
			};
			const ft = [];
			var ht = (e = ft, t) => {
				switch (t.type) {
					case ze.i:
					case ze.f:
					case ze.m:
					case ze.p:
					case ze.v: {
						const {
							response: e
						} = t.payload, {
							listingOrder: r
						} = e;
						return r
					}
					case ze.k: {
						const r = t.payload,
							{
								listingOrder: n
							} = r;
						return [...e, ...n]
					}
					case pt.e: {
						const r = t.payload,
							{
								listingOrder: n
							} = r;
						return n || e
					}
					default:
						return e
				}
			};
			var yt = (e = !1, t) => {
				switch (t.type) {
					case ze.b:
						return !0;
					default:
						return e
				}
			};
			var gt = (e = !1, t) => {
					switch (t.type) {
						case ze.k:
							return !0;
						case ze.b:
							return !1;
						default:
							return e
					}
				},
				vt = Object(n.c)({
					after: bt,
					data: ht,
					loaded: yt,
					pending: gt
				});
			var xt = (e = null, t) => {
				switch (t.type) {
					case ze.j:
					case ze.i:
						return null;
					case ze.h:
						return t.payload;
					default:
						return e
				}
			};
			var Ot = (e = !1, t) => {
					switch (t.type) {
						case ze.j:
							return !0;
						case ze.i:
						case ze.h:
							return !1;
						default:
							return e
					}
				},
				_t = Object(n.c)({
					error: xt,
					pending: Ot
				});
			const jt = {};
			var Ct = (e = jt, t) => {
				switch (t.type) {
					case ze.i: {
						const {
							listingKey: r,
							page: n,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[n]: o
							}
						}
					}
					default:
						return e
				}
			};
			const wt = {};
			var Et = (e = wt, t) => {
					switch (t.type) {
						case ze.i: {
							const {
								listingKey: r,
								response: n
							} = t.payload, {
								modqueue: s
							} = n, o = s[s.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				St = Object(n.c)({
					api: _t,
					itemOrder: Ct,
					loadMore: Et
				});
			var It = (e = null, t) => {
				switch (t.type) {
					case ze.n:
					case ze.m:
						return null;
					case ze.l:
						return t.payload;
					default:
						return e
				}
			};
			var kt = (e = !1, t) => {
					switch (t.type) {
						case ze.n:
							return !0;
						case ze.m:
						case ze.l:
							return !1;
						default:
							return e
					}
				},
				Nt = Object(n.c)({
					error: It,
					pending: kt
				});
			const Pt = {};
			var Mt = (e = Pt, t) => {
				switch (t.type) {
					case ze.m: {
						const {
							listingKey: r,
							page: n,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[n]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Lt = {};
			var Tt = (e = Lt, t) => {
					switch (t.type) {
						case ze.m: {
							const {
								listingKey: r,
								response: n
							} = t.payload, {
								modqueue: s
							} = n, o = s[s.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Bt = Object(n.c)({
					api: Nt,
					itemOrder: Mt,
					loadMore: Tt
				});
			var Ft = (e = null, t) => {
				switch (t.type) {
					case ze.q:
					case ze.p:
						return null;
					case ze.o:
						return t.payload;
					default:
						return e
				}
			};
			var Rt = (e = !1, t) => {
					switch (t.type) {
						case ze.q:
							return !0;
						case ze.p:
						case ze.o:
							return !1;
						default:
							return e
					}
				},
				At = Object(n.c)({
					error: Ft,
					pending: Rt
				});
			const Dt = {};
			var Ut = (e = Dt, t) => {
				switch (t.type) {
					case ze.p: {
						const {
							listingKey: r,
							page: n,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[n]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Ht = {};
			var Kt = (e = Ht, t) => {
					switch (t.type) {
						case ze.p: {
							const {
								listingKey: r,
								response: n
							} = t.payload, {
								modqueue: s
							} = n, o = s[s.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Vt = Object(n.c)({
					api: At,
					itemOrder: Ut,
					loadMore: Kt
				});
			var qt = (e = null, t) => {
				switch (t.type) {
					case ze.w:
					case ze.v:
						return null;
					case ze.u:
						return t.payload;
					default:
						return e
				}
			};
			var Wt = (e = !1, t) => {
					switch (t.type) {
						case ze.w:
							return !0;
						case ze.v:
						case ze.u:
							return !1;
						default:
							return e
					}
				},
				Qt = Object(n.c)({
					error: qt,
					pending: Wt
				});
			const Gt = {};
			var Jt = (e = Gt, t) => {
				switch (t.type) {
					case ze.v: {
						const {
							listingKey: r,
							page: n,
							response: s
						} = t.payload, {
							modqueue: o
						} = s;
						return {
							...e,
							[r]: {
								...e[r] || {},
								[n]: o
							}
						}
					}
					default:
						return e
				}
			};
			const Xt = {};
			var zt = (e = Xt, t) => {
					switch (t.type) {
						case ze.v: {
							const {
								listingKey: r,
								response: n
							} = t.payload, {
								modqueue: s
							} = n, o = s[s.length - 1] || null;
							return {
								...e,
								[r]: o
							}
						}
						default:
							return e
					}
				},
				Yt = Object(n.c)({
					api: Qt,
					itemOrder: Jt,
					loadMore: zt
				}),
				Zt = Object(n.c)({
					bulkAction: st,
					edited: mt,
					moderatedCommunitiesOrder: vt,
					modqueue: St,
					reports: Bt,
					spam: Vt,
					unmoderated: Yt
				});
			var $t = (e = null, t) => {
				switch (t.type) {
					case s.N:
					case s.L:
						return null;
					case s.K:
						return t.payload;
					default:
						return e
				}
			};
			const er = {};
			var tr = (e = er, t) => {
					switch (t.type) {
						case s.N: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(a.d)(r, n);
							return {
								...e,
								[s]: !0
							}
						}
						case s.L:
						case s.K: {
							const {
								subredditId: r,
								fetchedToken: n
							} = t.payload, s = Object(a.d)(r, n);
							return {
								...e,
								[s]: !1
							}
						}
						default:
							return e
					}
				},
				rr = Object(n.c)({
					error: $t,
					pending: tr
				});
			const nr = {};
			var sr = (e = nr, t) => {
					switch (t.type) {
						case s.L: {
							const {
								fetchedToken: r,
								subredditId: n
							} = t.payload, s = Object(a.d)(n, r);
							return {
								...e,
								[s]: !0
							}
						}
						default:
							return e
					}
				},
				or = r("./src/reddit/actions/inContextModeration.ts");
			var ar = (e = null, t) => {
				switch (t.type) {
					case or.b:
						return t.payload;
					default:
						return e
				}
			};
			const ir = {};
			var dr = (e = ir, t) => {
				switch (t.type) {
					case s.L: {
						const {
							subredditId: e,
							after: r
						} = t.payload;
						return {
							[e]: r
						}
					}
					default:
						return e
				}
			};
			const cr = {};
			var ur = (e = cr, t) => {
				switch (t.type) {
					case s.M:
					case s.L: {
						const {
							subredditId: r,
							mutedUsers: n
						} = t.payload, s = {
							[r]: n
						};
						return Object(b.merge)(e, s)
					}
					case s.R: {
						const {
							subredditId: r,
							userId: n
						} = t.payload;
						return Object(b.unsetIn)(e, [r, n])
					}
					default:
						return e
				}
			};
			var lr = (e = null, t) => {
				switch (t.type) {
					case s.Q:
					case s.P:
						return null;
					case s.O:
						return t.payload;
					default:
						return e
				}
			};
			var mr = (e = !1, t) => {
					switch (t.type) {
						case s.Q:
							return !0;
						case s.P:
						case s.O:
							return !1;
						default:
							return e
					}
				},
				pr = Object(n.c)({
					error: lr,
					pending: mr
				});
			var br = (e = null, t) => {
					switch (t.type) {
						case s.Q:
						case s.O:
							return null;
						case s.P: {
							const e = t.payload.mutedUserIds[0];
							return e ? t.payload.mutedUsers[e] : null
						}
						default:
							return e
					}
				},
				fr = Object(n.c)({
					api: pr,
					result: br
				});
			const hr = {};
			var yr = (e = hr, t) => {
					switch (t.type) {
						case s.L: {
							const {
								subredditId: r,
								mutedUserIds: n
							} = t.payload;
							return e[r] ? {
								...e,
								[r]: [...e[r], ...n]
							} : {
								...e,
								[r]: n
							}
						}
						case s.R: {
							const {
								subredditId: r,
								userId: n
							} = t.payload;
							return {
								[r]: e[r].filter(e => e !== n)
							}
						}
						case s.M: {
							const {
								subredditId: r,
								mutedUserIds: n
							} = t.payload, s = n[0];
							return s && e[r] && -1 === e[r].indexOf(s) ? {
								[r]: [s, ...e[r]]
							} : e
						}
						default:
							return e
					}
				},
				gr = Object(n.c)({
					api: rr,
					fetchedTokens: sr,
					inContext: ar,
					loadMore: dr,
					models: ur,
					search: fr,
					userOrder: yr
				});
			t.a = Object(n.c)({
				approvedSubmitters: C,
				flairedUsers: q,
				moderationLog: oe,
				moderators: Ge,
				modQueue: Zt,
				muted: gr
			})
		},
		"./src/reddit/routes/powerups/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/actions/pages/powerups.ts");
			const a = "/powerups",
				i = {
					action: o.a,
					chunk: s.s.POWERUPS,
					component: Object(n.a)({
						resolved: {},
						chunkName: () => "Powerups",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!r.m[t]
						},
						importAsync: () => r.e("Powerups").then(r.bind(null, "./src/reddit/pages/Powerups/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return r(t)
						},
						resolve() {
							return "./src/reddit/pages/Powerups/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: s.Mb.POWERUPS
					},
					path: a
				};
			t.b = i
		},
		"./src/reddit/selectors/experiments/econLeaderboards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const a = e => {
					const t = Object(s.c)(e, {
						experimentEligibilitySelector: o.K,
						experimentName: n.Ac
					});
					return !(!t || Object(n.wf)(t))
				},
				i = e => {
					return Object(s.c)(e, {
						experimentEligibilitySelector: o.K,
						experimentName: n.Ac
					}) === n.ed.ListingEnabled
				}
		},
		"./src/reddit/selectors/experiments/navbarLikeMweb.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(s.c)(e, {
					experimentName: n.Sd,
					experimentEligibilitySelector: s.a
				}) === n.ae.Enabled,
				a = e => Object(s.c)(e, {
					experimentName: n.Td,
					experimentEligibilitySelector: s.a,
					expEventOverride: !1
				}) === n.be.Enabled
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, r) {
			"use strict";
			r.d(t, "i", (function() {
				return d
			})), r.d(t, "h", (function() {
				return c
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "k", (function() {
				return m
			})), r.d(t, "j", (function() {
				return p
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "g", (function() {
				return x
			})), r.d(t, "d", (function() {
				return O
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/featureFlags/index.ts"),
				o = r("./src/reddit/selectors/posts.ts"),
				a = r("./src/reddit/selectors/subreddit.ts"),
				i = r("./src/reddit/selectors/user.ts");
			const d = (e, t) => {
					const r = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (r) {
						const t = Object(a.Q)(e, {
							subredditId: r
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				u = e => e.focusedVerticals.components.dismissed,
				l = [],
				m = Object(n.a)((e, t) => {
					const r = p(e, t);
					if (!r) return l;
					const n = Object(a.U)(e, {
						subredditName: r.name
					});
					return n && n.postIds && n.postIds.length ? n.postIds : l
				}),
				p = (e, t) => {
					const r = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return r ? Object(a.Q)(e, {
						subredditId: r
					}) : null
				},
				b = (e, t, r, n, s) => {
					const a = s.find(e => e <= t) || -1,
						i = s.find(e => e > t) || 1 / 0;
					return t !== i && t !== a && (!(a + r > t) && (!(t + r > i) && !((e, t, r) => {
						const n = r[t - 1],
							s = r[t],
							a = s && Object(o.H)(e, {
								postId: n
							}) || null,
							i = s && Object(o.H)(e, {
								postId: s
							}) || null;
						return a && a.isSponsored || i && i.isSponsored
					})(e, t, n)))
				},
				f = [3],
				h = Object(n.a)((e, {
					existingDUPositions: t,
					listingProps: r
				}) => {
					const n = t.slice().sort();
					let s = -1;
					const a = Object(o.A)(e, {
							listingKey: r.listingKey
						}),
						i = [];
					return f.forEach(t => {
						let r = s + t;
						if (!(r >= a.length)) {
							for (; r < a.length && !b(e, r, t, a, n);) r += 1;
							r < a.length && (i.push(r), s = r)
						}
					}), i
				}),
				y = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				g = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				v = e => e.focusedVerticals.category,
				x = e => e.focusedVerticals.lastLoadedEnv,
				O = e => {
					const t = Object(i.J)(e),
						r = s.d.geoSubredditRecommendationDULoggedIn(e),
						n = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && r || !t && n
				}
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/lib/constants/index.ts");
			var n = r("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				s = r("./src/lib/objectSelector/index.ts"),
				o = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/comments/index.ts"),
				i = r("./src/reddit/reducers/pages/modHub/index.ts");
			Object(o.a)({
				features: {
					comments: a.a
				},
				pages: {
					modHub: i.a
				}
			});
			const d = (e, t) => Object(n.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					subreddit: t.subredditName
				}),
				c = Object(s.a)((e, t) => {
					var r, n, s;
					const {
						pageName: o,
						page: a
					} = t, i = d(0, t);
					if (!(null === (s = null === (n = null === (r = e.pages.modHub.modQueue[o]) || void 0 === r ? void 0 : r.itemOrder) || void 0 === n ? void 0 : n[i]) || void 0 === s ? void 0 : s[a])) return;
					const c = e.pages.modHub.modQueue[o].itemOrder[i][a];
					return c ? c.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				u = (e, t) => {
					var r;
					const {
						pageName: n
					} = t;
					return null === (r = e.pages.modHub.modQueue[n]) || void 0 === r || !r.api || e.pages.modHub.modQueue[n].api.pending
				},
				l = (e, t) => {
					var r;
					const n = d(0, t);
					return null === (r = e.pages.modHub.modQueue[t.pageName]) || void 0 === r ? void 0 : r.loadMore[n]
				},
				m = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				p = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				b = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data
		},
		"./src/redditGQL/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"f8a400eb97dd"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/ModListing.55fc66a5cbf9335a59d4.js.map