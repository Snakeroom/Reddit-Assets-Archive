// https://www.redditstatic.com/desktop2x/Multireddit.4f74c21df0863e23ad3d.js
// Retrieved at 3/11/2021, 2:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Multireddit"], {
		"./src/chat/controls/Svg/index.m.less": function(e, t, n) {
			e.exports = {
				Component: "_2Qq40Mz_DMe0iARkTh8cZn",
				component: "_2Qq40Mz_DMe0iARkTh8cZn",
				disable: "_2xw21QiaL_ouF76MONf7hF",
				active: "_2dOhVJ6aPS9cbx0JfiKCW8",
				hover: "_1eWUKX11coBa2dErvWkP1q"
			}
		},
		"./src/chat/controls/Svg/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				a = n("./src/chat/controls/Svg/index.m.less"),
				c = n.n(a);
			t.a = i.a.wrapped(e => {
				const t = {
						height: e.height || void 0,
						width: e.width || void 0
					},
					{
						disable: n,
						active: s,
						hover: i
					} = e;
				return r.a.createElement("svg", {
					className: Object(o.a)(e.className, {
						[c.a.disable]: n,
						[c.a.active]: s,
						[c.a.hover]: !!i
					}),
					viewBox: e.viewBox,
					style: t
				}, e.children)
			}, "Component", c.a)
		},
		"./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json": function(e) {
			e.exports = JSON.parse('{"id":"34f3ef97014d"}')
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
		"./src/lib/LinkedListMap/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			class s {
				constructor(e) {
					this.value = e, this.next = void 0, this.prev = void 0
				}
			}
			class r {
				constructor(e) {
					this.key = e, this.tail = void 0, this.head = void 0, this.length = 0, this.itemsByKey = {}
				}
				static fromArray(e, t) {
					const n = new r(t);
					return e.forEach(e => n.push(e)), n
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
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.prev = r, n.next = r.next, r.next = n, n.next && (n.next.prev = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
				}
				insertBefore(e, t) {
					const n = t instanceof s ? t : new s(t),
						r = this.getNode(e);
					if (!r) throw new Error(`Cannot find item with key ${e}`);
					n.next = r, n.prev = r.prev, r.prev = n, n.prev && (n.prev.next = n);
					const o = t instanceof s ? t.value[this.key] : t[this.key];
					this.itemsByKey[o] = n, this.length++
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
					const t = e instanceof s ? e : new s(e);
					t.prev = this.head, this.head ? this.head.next = t : this.tail = t, this.head = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
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
					const t = e instanceof s ? e : new s(e);
					t.next = this.tail, this.tail ? this.tail.prev = t : this.head = t, this.tail = t;
					const n = e instanceof s ? t.value[this.key] : e[this.key];
					this.itemsByKey[n] = t, this.length++
				}
			}
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/linkMatchers/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return p
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "g", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "h", (function() {
				return E
			})), n.d(t, "i", (function() {
				return _
			}));
			var s = n("./node_modules/linkify-it/index.js"),
				r = n.n(s),
				o = n("./node_modules/tlds/index.js"),
				i = n.n(o),
				a = n("./src/lib/linkMatchers/customLinks.ts"),
				c = n("./node_modules/lodash/values.js"),
				d = n.n(c);
			const l = e => d()(a.b).includes(e.substring(1)),
				u = ["//", "ftp:", "http:", "https:", "mailto:"],
				m = e => ((e, t) => (t.forEach(t => e.add(t, null)), e))(e, u),
				p = r()().tlds(i.a).set({
					fuzzyIP: !0
				}),
				h = r()().set({
					fuzzyIP: !0,
					fuzzyEmail: !1
				}).add(a.g.mention.prefix, a.g.mention.config),
				b = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config),
				f = m(r()()).set({
					fuzzyLink: !1,
					fuzzyEmail: !1
				}).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config),
				x = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subreddit.config).add(a.g.subredditFull.prefix, a.g.subreddit.config).add(a.g.profile.prefix, a.g.profile.config).add(a.g.profileFull.prefix, a.g.profile.config).add(a.g.mention.prefix, a.g.mention.config),
				g = r()().tlds(i.a).set({
					fuzzyIP: !0
				}).add(a.g.subreddit.prefix, a.g.subredditFullUrl.config).add(a.g.subredditFull.prefix, a.g.subredditFullUrl.config),
				y = p.normalize;
			p.normalize = e => {
				y.call(p, e), !e.schema && e.url.startsWith("http:") && (e.url = `https:${e.url.slice(5)}`)
			};
			const v = (e, t) => {
					return (x.match(e) || []).filter(e => {
						const n = l(e.text);
						return !n || n && t
					})
				},
				w = e => {
					return [...f.match(e) || [], ...h.match(e) || []].map(e => !l(e.text) && e.text.replace(a.a, "")).filter(e => e)
				},
				E = (e, t) => {
					const n = e.match(t);
					if (n && 1 === n.length && 0 === n[0].index && n[0].lastIndex === t.length) return n[0]
				},
				_ = e => {
					const t = p.match(e);
					if (t && 1 === t.length && 0 === t[0].index) {
						const n = t[0];
						return n.lastIndex === e.length ? n : ((e, t) => {
							const n = e.substring(t.lastIndex);
							if (/.*\/\/.*\/.*/.test(t.url) && /^(\?|\!)+$/.test(n)) return t.lastIndex += n.length, t.url += n, t
						})(e, n)
					}
				}
		},
		"./src/lib/loginHref/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/history/esm/history.js");
			t.a = (e, t, n) => {
				const o = Object(r.e)(e),
					i = encodeURIComponent(`${t}${o}`);
				return `${s.a.accountManagerOrigin}${n||"/login"}?dest=${i}`
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const r of e) t++, n += r.length, s[t] = n;
					return s
				},
				r = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/actions/focusedVerticals/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "b", (function() {
				return S
			}));
			var s, r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/performanceTimings/index.tsx"),
				i = n("./src/reddit/actions/focusedVerticals/constants.ts"),
				a = n("./src/lib/makeGqlRequest/index.ts"),
				c = n("./src/graphql/operations/SubredditGeoRecommendationViaFocusVertical.json");
			! function(e) {
				e.LoggedInGeo = "2.1", e.LoggedOutGeo = "2.1"
			}(s || (s = {}));
			var d, l = n("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				u = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			! function(e) {
				e.DEFAULT = "DEFAULT", e.GEO = "GEO"
			}(d || (d = {}));
			var m = n("./src/reddit/selectors/focusedVerticalSuggestion.ts"),
				p = n("./src/reddit/selectors/platform.ts"),
				h = n("./src/reddit/selectors/user.ts");
			const b = Object(r.a)(i.g),
				f = Object(r.a)(i.e),
				x = Object(r.a)(i.h),
				g = Object(r.a)(i.c),
				y = Object(r.a)(i.f),
				v = Object(r.a)(i.j),
				w = Object(r.a)(i.i),
				E = () => async (e, t, {
					gqlContext: n
				}) => {
					const r = t(),
						o = Object(m.e)(r),
						i = Object(m.d)(r),
						d = Object(h.J)(r);
					if (o || !i) return;
					e(x());
					let p = !1;
					try {
						const t = d ? s.LoggedInGeo : s.LoggedOutGeo,
							r = await ((e, t, n) => Object(a.a)(e, {
								...c,
								variables: {
									version: t,
									isNsfwIncluded: !1
								}
							}))(n(), t);
						if (r.ok && r.body) {
							const {
								data: t
							} = r.body;
							if (_(t)) {
								if (O(t)) {
									e(g({
										recommendedSubredditIds: [],
										interactedSubredditIds: [],
										category: "",
										lastLoadedEnv: "client"
									})), p = !0
								} else if (C(t)) {
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
									e(b(m)), p = !0
								}
							} else p = !1
						}
					} catch (y) {
						p = !1
					}
					p || e(f({
						error: {
							type: "Focused vertical experiment GQL API failed or caught by try and catch"
						}
					}))
				}, _ = e => {
					const t = e.focusVerticalSubredditRecommendations;
					return !(!t || !t.focusRecommendations)
				}, O = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations;
					return !(!n || 0 !== n.length)
				}, C = e => {
					const t = e.focusVerticalSubredditRecommendations,
						n = t && t.focusRecommendations,
						s = t && t.type;
					return !!(n && !O(e) && s === d.GEO && n[0] && n[0].recommendedSubreddit && n[0].interactedSubreddit)
				}, S = () => async (e, t, n) => {
					var s, r;
					const i = t(),
						a = Object(m.g)(i);
					if (Object(m.f)(i) || null === a || "client" === a) {
						const n = null === (r = null === (s = Object(p.b)(t())) || void 0 === s ? void 0 : s.routeMatch) || void 0 === r ? void 0 : r.route.chunk,
							a = Object(h.K)(i);
						return Object(o.i)(() => e(E()), {
							name: "getFocusedVerticalsRequested",
							page: n,
							isLoggedIn: a
						})
					}
					if ("server" === a) return e(y({
						lastLoadedEnv: "client"
					}))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "g", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			}));
			const s = "SUBSCRIPTION__FETCH_DATA_PENDING",
				r = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				i = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				a = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return L
			})), n.d(t, "d", (function() {
				return D
			})), n.d(t, "c", (function() {
				return M
			})), n.d(t, "a", (function() {
				return U
			})), n.d(t, "b", (function() {
				return H
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/linkMatchers/customLinks.ts"),
				a = n("./src/reddit/actions/login.ts"),
				c = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/actions/subscription/constants.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./src/reddit/constants/posts.ts"),
				m = n("./src/lib/makeApiRequest/index.ts"),
				p = n("./src/lib/omitHeaders/index.ts"),
				h = n("./src/reddit/constants/headers.ts");
			var b = n("./src/graphql/operations/SubscribedSubreddits.json"),
				f = n("./src/lib/makeGqlRequest/index.ts"),
				x = n("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var g = n("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				y = n("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				v = n("./src/reddit/models/GqlTopLevelField.ts"),
				w = n("./src/reddit/models/User/index.ts");

			function E(e) {
				const t = [],
					n = [],
					s = {},
					r = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const a of o.edges) {
					if (a.node.__typename !== w.c.AvailableRedditor) continue;
					const e = Object(g.a)(a.node.profile);
					s[e.id] = e;
					const {
						isFavorite: n
					} = a.node.profile;
					n && t.push(e.id)
				}
				const {
					subscribedSubreddits: i
				} = e.identity;
				for (const a of i.edges) {
					if (a.node.__typename !== v.a.Subreddit) continue;
					const e = Object(y.a)(a.node);
					r[e.id] = e;
					const {
						isFavorite: t
					} = a.node;
					t && n.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: n,
					profiles: s,
					subreddits: r
				}
			}
			var _ = n("./src/reddit/models/Toast/index.ts"),
				O = n("./src/reddit/selectors/profile.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				S = n("./src/reddit/selectors/subscriptions.ts"),
				k = n("./src/reddit/selectors/user.ts");
			const j = () => s.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				I = Object(o.a)(d.c),
				N = Object(o.a)(d.b),
				T = Object(o.a)(d.a),
				P = Object(o.a)(d.h),
				L = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, {
					gqlContext: n
				}) => {
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(N());
					const r = await (e => Object(f.a)(e, b))(n());
					if (r.ok) {
						const t = E(r.body.data);
						e(I(t))
					} else e(T({
						error: r.error
					}))
				}),
				R = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				D = (e, t, n) => async (o, d, {
					apiContext: b
				}) => {
					let f = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(C.F)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(O.m)(d(), e.name),
						name: `${r.Wb}${e.name}`,
						type: e.type
					});
					if (!Object(k.K)(d())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(a.j)());
					const g = Object(k.j)(d());
					if (g) {
						const t = f.length,
							n = e.length;
						if (f = f.filter(e => !R(g, e)), (e = e.filter(e => !R(g, e))).length !== n || f.length !== t) {
							const e = s.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.e)(Object(l.d)(e, _.b.Error)))
						}
						if (!e.length && !f.length) return
					}
					if (o(P({
							identifiers: f,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(S.b)(d()),
							userIsSubscriber: t,
							widgetId: n
						})), (await ((e, {
							subredditIds: t,
							subredditNames: n,
							subscribe: s
						}) => Object(m.a)(Object(p.a)(e, [h.a]), {
							method: r.cb.POST,
							endpoint: Object(x.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: s ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: n && n.join(",") || void 0,
								api_type: "json"
							}
						}))(b(), {
							subredditNames: f.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const n = 1 === e.length ? `${"subreddit"===e[0].type?i.d.subreddit:i.d.profile}${e[0].name}` : `${s.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						o(Object(l.e)({
							text: 1 === e.length && "profile" === e[0].type ? s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", t ? "followed" : "unfollowed"), s.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							}) : s.fbt._("Sucсessfully {verb} {communityname}", [s.fbt._param("verb", t ? "joined" : "left"), s.fbt._param("communityname", n)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						o(P({
							identifiers: f,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(S.b)(d()),
							userIsSubscriber: !t,
							widgetId: n
						}));
						const r = s.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.e)(Object(l.d)(r, _.b.Error)))
					}
				}, B = Object(o.a)(d.f), M = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n(),
						i = Object(C.L)(o, {
							identifier: e
						});
					if (!i) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === u.a.SUBREDDIT ? i.name : `u_${i.name}`,
						c = o.subscriptions.favoriteSubredditOrder || [],
						d = o.subscriptions.favoriteProfileOrder || [],
						b = c.indexOf(e.id),
						f = d.indexOf(e.id),
						x = -1 === b && -1 === f,
						g = o.subreddits.models,
						y = o.profiles.models;
					t(B({
						makeFavorite: x,
						identifier: e,
						subredditModels: g,
						profileModels: y
					}));
					const v = {
							type: e.type,
							name: i.name
						},
						w = () => Object(C.gb)(n(), {
							identifier: v
						});
					(w() || (await t(D([v], !0)), w())) && ((await ((e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(s(), a, x)).ok || (t(B({
						makeFavorite: !x,
						identifier: e,
						subredditModels: g,
						profileModels: y
					})), t(Object(l.e)({
						text: j(),
						kind: _.b.Error
					}))))
				}, F = Object(o.a)(d.d), U = e => async (t, n, {
					apiContext: s
				}) => {
					const o = n().multireddits.models,
						i = () => {
							t(Object(l.e)({
								text: j(),
								kind: _.b.Error
							}))
						},
						a = o[e];
					if (!a) return void i();
					const c = !a.isFavorited;
					t(F({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: n ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(s(), e, c)).ok || (t(F({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), i())
				}, A = Object(o.a)(d.e), H = e => async (t, n, {
					apiContext: o
				}) => {
					const i = n(),
						a = i.multireddits.models;
					if (!Object(k.K)(i)) return;
					const c = (e = !0) => {
							t(Object(l.e)({
								text: s.fbt._("Sorry, failed to {followAction}", [s.fbt._param("followAction", e ? s.fbt._("follow", null, {
									hk: "2I4uia"
								}) : s.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: _.b.Error
							}))
						},
						d = a[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(A({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, n) => Object(m.a)(Object(p.a)(e, [h.a]), {
						method: r.cb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: n ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, u)).ok || (t(A({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: a
					})), c(u))
				}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/lib/matchRoute/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js");
			const i = (e, t = !0) => async (n, i, {
				routes: a
			}) => {
				const c = i();
				Object(s.a)(e, a, c) ? n(Object(o.b)(e)) : t ? Object(r.d)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, n) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = n("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = n.n(l);
			const m = e => e.preventDefault();
			t.a = Object(i.a)(e => o.a.createElement(a.d, null, o.a.createElement(a.h, null, o.a.createElement(d.a, null, o.a.createElement(a.p, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(a.b, null)))), o.a.createElement(a.k, null, o.a.createElement(a.o, {
				className: u.a.ModalText
			}, e.modalText)), o.a.createElement(a.f, null, !e.hideCancelButton && o.a.createElement(a.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(a.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/ContentGate/index.m.less": function(e, t, n) {
			e.exports = {
				ButtonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				buttonsContainer: "_3-bzOoWOXVn2xJ3cljz9oC",
				Container: "_32zGs4bO3IunZfS9bSJY0_",
				container: "_32zGs4bO3IunZfS9bSJY0_",
				Description: "_3VTI5BOpJO70xoBKSqz3O9",
				description: "_3VTI5BOpJO70xoBKSqz3O9",
				PrivateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				privateSubredditDetails: "vpktIvfG7wrc27Xk4Gk-C",
				PrivateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				privateSubredditDescription: "_2uXliuchCWW0MYUGS_Ks6v",
				PrivateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				privateSubredditName: "_3boUKJ5E--k1_9nH886_Wr",
				Link: "o4oSRcSrppMzf__hxJKxn",
				link: "o4oSRcSrppMzf__hxJKxn",
				LinkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				linkButton: "_1_UhYZsTnAQbBONlhaTTMS",
				LinkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				linkRouterButton: "_2zJbrt0pYl6tbRsmVW0peX",
				SecondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				secondaryLinkRouterButton: "rDOqrXOt4-jCKENSEQG_N",
				SecondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				secondaryLinkButton: "i2sTp1duDdXdwoKi1l8ED",
				GoHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				goHomeLinkButton: "_3goHjUTM8-J0xINP6EoZkZ",
				PrivateKey: "kwHMAzQCDA69TaL3eHZLa",
				privateKey: "kwHMAzQCDA69TaL3eHZLa",
				Image: "_1jefpljVGT-eHObg40F8Dm",
				image: "_1jefpljVGT-eHObg40F8Dm",
				ImagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				imagePlaceholder: "yIkP2FaSTqFA_kLFyyH1d",
				LeftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				leftLinkButton: "_3cs2bzZ9PGS1kcZc2r7vdP",
				LeftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				leftLinkRouterButton: "_2V3wnL5o-KBHbU_hs7cMof",
				SecondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				secondaryLeftLinkButton: "_3t2KyZopmra_0R16z-1xwr",
				SecondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				secondaryLeftLinkRouterButton: "y7s2WWxfdEzMhMm2mjo-G",
				Title: "_2XKLlvmuqdor3RvVbYZfgz",
				title: "_2XKLlvmuqdor3RvVbYZfgz",
				PageBody: "bDDEX4BSkswHAG_45VkFB",
				pageBody: "bDDEX4BSkswHAG_45VkFB",
				QuarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n",
				quarantineMessageWrapper: "_3wi4h3DGgmtUEzxlHDUM0n"
			}
		},
		"./src/reddit/components/ContentGate/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loginHref/index.ts"),
				u = n("./src/reddit/actions/contentGate.ts"),
				m = n("./src/reddit/actions/preferences.ts"),
				p = n("./src/reddit/components/CreateCommunityButton/index.tsx"),
				h = n("./src/reddit/components/Footer/index.m.less"),
				b = n.n(h);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), x = d.a.div("FooterContainer", b.a), g = d.a.div("UserAgreement", b.a), y = d.a.a("UserAgreementLink", b.a), v = d.a.a("PrivacyLink", b.a);
			var w = () => o.a.createElement(x, null, o.a.createElement(g, null, f._("Use of this site constitutes acceptance of our {=User Agreement} and {=Privacy Policy} . ©{year} reddit inc. All rights reserved. REDDIT and the ALIEN Logo are registered trademarks of reddit inc.", [f._param("=User Agreement", o.a.createElement(y, {
					href: `${s.a.redditUrl}/help/useragreement`
				}, f._("User Agreement", null, {
					hk: "2srkM2"
				}))), f._param("=Privacy Policy", o.a.createElement(v, {
					href: `${s.a.redditUrl}/help/privacypolicy`
				}, f._("Privacy Policy", null, {
					hk: "2nBcYA"
				}))), f._param("year", (new Date).getFullYear())], {
					hk: "335pdO"
				}))),
				E = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				_ = n("./src/reddit/components/RichTextJson/index.tsx"),
				O = n("./node_modules/lodash/flatMap.js"),
				C = n.n(O),
				S = n("./src/lib/linkMatchers/index.ts"),
				k = n("./src/lib/linkMatchers/customLinks.ts"),
				j = n("./src/reddit/controls/OutboundLink/index.tsx");
			const I = /\[(.+?)\]\((.+?)\)/g,
				N = e => {
					const t = e.split(I);
					if (1 === t.length) return [e];
					const n = [];
					for (let s = 0; s < t.length; s += 3) {
						const [e, r, o] = t.slice(s, s + 3);
						n.push(e), n.push([o, r])
					}
					return n
				};
			var T = o.a.memo(e => {
					let t = [e.text];
					return e.parseMdLinks && (t = C()(t, N)), e.parseRegularLinks && (t = C()(t, e => Array.isArray(e) ? [e] : (e => {
						const t = S.f.add(k.g.subreddit.prefix, k.g.subreddit.config).match(e);
						if (!t) return [e];
						const n = [];
						let s = null;
						for (const r of t) n.push(e.slice(s ? s.lastIndex : 0, r.index)), s = r, n.push([r.url, r.text]);
						return s && n.push(e.slice(s.lastIndex)), n
					})(e))), o.a.createElement(o.a.Fragment, null, " ", t.map((t, n) => {
						if (Array.isArray(t)) {
							const [s, r] = t;
							return o.a.createElement(j.b, {
								className: e.linkClassName,
								href: s,
								isSponsored: !1,
								key: n,
								source: null
							}, r)
						}
						return o.a.createElement("span", {
							key: n
						}, t)
					}), " ")
				}),
				P = n("./src/reddit/contexts/PageLayer/index.tsx"),
				L = n("./src/reddit/controls/Button/index.tsx"),
				R = n("./src/chat/controls/Svg/index.tsx");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var B = e => o.a.createElement(R.a, D({}, e, {
					viewBox: "-1 -1 21 21"
				}), o.a.createElement("path", {
					d: "M16.64,2.32a4.5,4.5,0,0,0-7,5.57L4.85,12.69,3.59,13.95h0L2.34,15.2a1,1,0,0,0,0,1.41l1.25,1.25h0l.42.42a1,1,0,0,0,1.41-1.41L5,16.46H5a.78.78,0,0,1,0-1.09.79.79,0,0,1,1.09,0h0l.42.42a1,1,0,0,0,1.41-1.41L7.52,14h0L7,13.4l4.1-4.1a4.5,4.5,0,0,0,5.57-7Zm-1.41,5a2.5,2.5,0,1,1,0-3.54A2.5,2.5,0,0,1,15.22,7.27Z"
				})),
				M = n("./src/reddit/models/ContentGate.ts"),
				F = n("./src/reddit/selectors/meta.ts"),
				U = n("./src/reddit/selectors/user.ts"),
				A = n("./src/reddit/components/ContentGate/index.m.less"),
				H = n.n(A);
			const {
				fbt: V
			} = n("./node_modules/fbt/lib/FbtPublic.js"), G = d.a.wrapped(B, "PrivateKey", H.a), W = d.a.div("ButtonsContainer", H.a), z = d.a.div("Container", H.a), K = d.a.div("Description", H.a), q = d.a.div("PrivateSubredditDetails", H.a), J = d.a.div("PrivateSubredditDescription", H.a), Y = d.a.h3("PrivateSubredditName", H.a), Z = d.a.a("Link", H.a), X = d.a.wrapped(L.k, "LinkRouterButton", H.a), Q = d.a.wrapped(L.j, "LinkButton", H.a), $ = d.a.wrapped(L.n, "SecondaryLinkRouterButton", H.a), ee = d.a.wrapped(L.m, "SecondaryLinkButton", H.a), te = d.a.wrapped(X, "GoHomeLinkButton", H.a), ne = d.a.img("Image", H.a), se = d.a.img("ImagePlaceholder", H.a), re = d.a.wrapped(X, "LeftLinkRouterButton", H.a), oe = d.a.wrapped(Q, "LeftLinkButton", H.a), ie = d.a.wrapped(ee, "SecondaryLeftLinkButton", H.a), ae = d.a.wrapped($, "SecondaryLeftLinkRouterButton", H.a), ce = d.a.h3("Title", H.a), de = d.a.div("PageBody", H.a), le = d.a.div("QuarantineMessageWrapper", H.a), ue = Object(c.c)({
				isLoggedIn: U.J,
				origin: F.l,
				user: U.j
			}), me = Object(P.t)(), pe = Object(i.b)(ue, (e, {
				subredditName: t
			}) => ({
				continueToQuarantinedSubreddit: async () => {
					await e(m.C(t)), window.location.reload()
				},
				setNSFWPreference: async () => {
					await e(Object(u.l)())
				}
			})), he = e => {
				const {
					banMessage: t,
					contentGateType: n,
					continueToQuarantinedSubreddit: r,
					isLoggedIn: i,
					location: a,
					origin: c,
					pageLayer: d,
					quarantineRequiresEmail: m,
					quarantineMessage: h,
					quarantineMessageHtml: b,
					quarantineMessageRTJson: f,
					setNSFWPreference: x,
					subredditDescription: g,
					subredditName: y,
					user: v
				} = e, w = async () => {
					i ? await x() : await Object(u.k)(), window.location.reload()
				};
				switch (n) {
					case M.a.GoldSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${s.a.assetPath}/img/gold/premium-crest.png`
						}), o.a.createElement(ce, null, V._("r/{community name} is a Reddit Premium community", [V._param("community name", y)], {
							hk: "2lyDwB"
						})), o.a.createElement(K, null, V._("The moderators in this community have set it to Reddit Premium members only. You must upgrade to a Reddit Premium membership to continue.", null, {
							hk: "mIiOw"
						})), o.a.createElement(W, null, v ? o.a.createElement(ie, {
							href: `${s.a.redditUrl}/premium`
						}, V._("Get Premium", null, {
							hk: "3ChWi4"
						})) : o.a.createElement(oe, {
							href: Object(l.a)(a, c)
						}, V._("Sign Up", null, {
							hk: "rvpjy"
						})), v ? o.a.createElement(X, {
							to: "/"
						}, V._("Go Home", null, {
							hk: "49p4or"
						})) : o.a.createElement(ee, {
							href: Object(l.a)(a, c)
						}, V._("Log In", null, {
							hk: "4Cxw0g"
						}))));
					case M.a.Nsfw:
					case M.a.NsfwCustomFeed:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${s.a.assetPath}/img/content-gate-icons/nsfw.png`
						}), o.a.createElement(ce, null, n === M.a.Nsfw ? V._("You must be 18+ to view this community", null, {
							hk: "IQmEA"
						}) : V._("You must be 18+ to view this Custom Feed", null, {
							hk: "3pmHS2"
						})), o.a.createElement(K, null, V._("You must be at least eighteen years old to view this content. Are you over eighteen and willing to see adult content?", null, {
							hk: "gI12S"
						})), o.a.createElement(W, null, o.a.createElement(re, {
							to: "/"
						}, V._("No", null, {
							hk: "3fMglW"
						})), o.a.createElement(ee, {
							onClick: w
						}, V._("Yes", null, {
							hk: "2hpRkN"
						}))));
					case M.a.PrivateSubreddit:
						return o.a.createElement("div", null, o.a.createElement(G, null), o.a.createElement(ce, null, "r/", y, " ", V._("is a private community", null, {
							hk: "7zZmq"
						})), g && g.length && o.a.createElement(q, null, o.a.createElement(Y, null, "r/", y), o.a.createElement(J, null, o.a.createElement("div", null, g))), o.a.createElement(K, null, V._("The moderators of", null, {
							hk: "3QSrbr"
						}), " ", "r/", y, " ", V._("have set this community as private.", null, {
							hk: "3zhD9F"
						}), o.a.createElement("br", null), V._("Only approved members can view and take part in its discussions.", null, {
							hk: "af0uR"
						})), o.a.createElement(W, null, v ? o.a.createElement(ie, {
							href: `${s.a.redditUrl}/message/compose?to=/r/${y}`
						}, V._("Message Mods", null, {
							hk: "vVe1i"
						})) : o.a.createElement(ie, {
							href: Object(l.a)(a, c)
						}, V._("Sign Up", null, {
							hk: "rvpjy"
						})), o.a.createElement(X, {
							to: "/"
						}, V._("Browse Reddit", null, {
							hk: "1fi8kh"
						}))));
					case M.a.QuarantinedSubreddit:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${s.a.assetPath}/img/content-gate-icons/quarantined.png`
						}), o.a.createElement(ce, null, V._("Are you sure you want to view this community?", null, {
							hk: "2BtxLM"
						})), o.a.createElement(K, null, V._("This community is {=quarantined}", [V._param("=quarantined", o.a.createElement(Z, {
							href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits"
						}, V._("quarantined", null, {
							hk: "2XqfJa"
						})))], {
							hk: "2B9i8y"
						}), o.a.createElement(le, null, f ? o.a.createElement(_.a, {
							content: f,
							rtJsonElementProps: {
								pageLayer: d
							}
						}) : b ? o.a.createElement(E.a, {
							html: b
						}) : h || V._("Quarantined communities are dedicated to shocking or highly offensive content. You must be logged in with a verified email to continue.", null, {
							hk: "3kRIzE"
						})), V._("Are you certain you want to continue?", null, {
							hk: "1gr5Bw"
						})), o.a.createElement(W, null, ((e, t, n) => {
							return !(e && e.hasVerifiedEmail) && n ? o.a.createElement(W, null, o.a.createElement(ae, {
								to: "/"
							}, V._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(Q, {
								href: `${s.a.redditUrl}/prefs/update`
							}, V._("Verify Email", null, {
								hk: "1893cq"
							}))) : o.a.createElement(W, null, o.a.createElement(re, {
								to: "/"
							}, V._("No Thank You", null, {
								hk: "4B26AR"
							})), o.a.createElement(ee, {
								onClick: t
							}, V._("Continue", null, {
								hk: "4nU0mS"
							})))
						})(v, r, m)));
					case M.a.SubredditBanned:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${s.a.assetPath}/img/content-gate-icons/banned.png`
						}), o.a.createElement(ce, null, V._("r/{community name} has been banned from Reddit", [V._param("community name", y)], {
							hk: "2at9Se"
						})), (e => o.a.createElement(K, null, e ? o.a.createElement(T, {
							linkClassName: H.a.Link,
							text: e,
							parseMdLinks: !0,
							parseRegularLinks: !0
						}) : V._("This community has been banned for violating the Reddit rules.", null, {
							hk: "3iUVxA"
						})))(t), o.a.createElement(W, null, o.a.createElement(X, {
							to: "/"
						}, V._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case M.a.SubredditBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ce, null, V._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "4bCnhl"
						})), o.a.createElement(W, null, o.a.createElement(X, {
							to: "/"
						}, V._("Explore Reddit", null, {
							hk: "FrUWU"
						}))));
					case M.a.SubredditDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(se, null), o.a.createElement(ce, null, V._("Sorry, there aren’t any communities on Reddit with that name.", null, {
							hk: "31DRpe"
						})), o.a.createElement(K, null, V._("This community may have been banned or the community name is incorrect.", null, {
							hk: "1lYMG2"
						})), o.a.createElement(W, null, v && o.a.createElement(p.a, {
							eventSource: "content_gate"
						}), o.a.createElement(te, {
							to: "/"
						}, V._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.ProfileDoesNotExist:
					case M.a.ProfileDeleted:
					case M.a.ProfileSuspended:
					case M.a.ProfileBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ce, null, (e => {
							const {
								contentGateType: t
							} = e;
							switch (t) {
								case M.a.ProfileBlockedForLegalReason:
									return V._("This content has been restricted in your country in response to a legal request.", null, {
										hk: "4eeylO"
									});
								case M.a.ProfileDeleted:
									return V._("This user has deleted their account.", null, {
										hk: "2IAF6m"
									});
								case M.a.ProfileSuspended:
									return o.a.createElement(o.a.Fragment, null, V._("This account has been {=suspended} .", [V._param("=suspended", o.a.createElement(Z, {
										href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/suspensions"
									}, V._("suspended", null, {
										hk: "3nHGgi"
									})))], {
										hk: "4cuTBS"
									}));
								case M.a.ProfileDoesNotExist:
									return o.a.createElement(o.a.Fragment, null, o.a.createElement(ce, null, V._("Sorry, nobody on Reddit goes by that name.", null, {
										hk: "3i02av"
									})), o.a.createElement(K, null, V._("The person may have been banned or the username is incorrect.", null, {
										hk: "36ab4J"
									})))
							}
						})(e)), o.a.createElement(W, null, o.a.createElement(te, {
							to: "/"
						}, V._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.CustomFeedDoesNotExist:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ce, null, V._("Sorry, this custom feed is private or does not exist.", null, {
							hk: "2Ml4j9"
						})), o.a.createElement(W, null, o.a.createElement(te, {
							to: "/"
						}, V._("Go Home", null, {
							hk: "49p4or"
						}))));
					case M.a.PostBlockedForLegalReason:
						return o.a.createElement("div", null, o.a.createElement(ne, {
							src: `${s.a.assetPath}/img/snoomoji/snoo_thoughtful.png`
						}), o.a.createElement(ce, null, V._("This content has been restricted in your country in response to a legal request.", null, {
							hk: "1q1rVU"
						})), o.a.createElement(W, null, o.a.createElement(X, {
							to: "/"
						}, V._("Browse Reddit", null, {
							hk: "1XnYmj"
						}))))
				}
			};
			t.default = me(pe(Object(a.i)(e => o.a.createElement(z, null, o.a.createElement("div", null, o.a.createElement(de, null, he(e))), o.a.createElement(w, null)))))
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, n) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.m.less": function(e, t, n) {
			e.exports = {
				StyledTooltip: "FIYolDqalszTnjjNfThfT",
				styledTooltip: "FIYolDqalszTnjjNfThfT"
			}
		},
		"./src/reddit/components/CreateCommunityButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/reddit/actions/tooltip.ts"),
				d = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/overlay/index.ts"),
				p = n("./src/reddit/helpers/trackers/subredditCreation.ts"),
				h = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/components/CreateCommunityButton/index.m.less"),
				f = n.n(b),
				x = n("./src/lib/lessComponent.tsx");
			const g = "create-community-button",
				y = x.a.wrapped(d.c, "StyledTooltip", f.a),
				v = Object(a.c)({
					userDoesNotHaveEnoughExpToCreateCommunity: e => !Object(h.gb)(e),
					userIsSuspended: h.P
				});
			t.a = Object(i.b)(v, (e, {
				eventSource: t
			}) => ({
				openCommunityCreation: n => {
					n(Object(p.b)(t)), e(Object(m.a)("/subreddits/create"))
				},
				onShowTooltip: () => e(Object(c.f)({
					tooltipId: g
				})),
				onHideTooltip: () => e(Object(c.i)())
			}))(Object(l.c)(({
				className: e,
				eventSource: t,
				onShowTooltip: n,
				onHideTooltip: r,
				openCommunityCreation: i,
				sendEvent: a,
				userDoesNotHaveEnoughExpToCreateCommunity: c,
				userIsSuspended: d
			}) => o.a.createElement(u.l, {
				className: e,
				disabled: d || c,
				onClick: () => i(a),
				onMouseEnter: n,
				onMouseLeave: r,
				id: g,
				isFullWidth: !0
			}, s.fbt._("Create Community", null, {
				hk: "RLA8A"
			}), c ? o.a.createElement(y, {
				caretOnTop: !0,
				tooltipId: g,
				text: s.fbt._("To prevent spam, accounts must be at least 30 days old and have enough positive karma to create communities.", null, {
					hk: "2R1OXu"
				})
			}) : d ? o.a.createElement(y, {
				caretOnTop: !0,
				tooltipId: g,
				text: s.fbt._("Accounts banned from the site can not create communities until the ban is lifted.", null, {
					hk: "2xBDEw"
				})
			}) : null)))
		},
		"./src/reddit/components/Footer/index.m.less": function(e, t, n) {
			e.exports = {
				FooterContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				footerContainer: "_3qDK09Tb3ktpZiYXSfeMzE",
				UserAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				userAgreement: "_2qv_r3Tr8ZqOWkU9s1qRfw",
				PrivacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				privacyLink: "_2mk2nvnRu7inPdJY2i-H79",
				UserAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh",
				userAgreementLink: "vzd9DQ5W5uhRFvqy1_xKh"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = n("./src/reddit/actions/preferences.ts"),
				m = n("./src/reddit/actions/tooltip.ts"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/postLayout.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				f = n("./src/reddit/contexts/Tooltip.ts"),
				x = n("./src/reddit/controls/Dropdown/index.tsx"),
				g = n("./src/reddit/controls/Dropdown/Row.tsx"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				w = n("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				E = n("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				_ = n("./src/reddit/selectors/experiments/coreStyles.ts"),
				O = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/reddit/selectors/tooltip.ts"),
				S = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				k = n.n(S);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = "view--layout--FUE",
				N = "LayoutSwitch--picker",
				T = Object(c.a)(x.a),
				P = {
					[h.d.Card]: E.a,
					[h.d.Classic]: v.a,
					[h.d.Compact]: w.a
				},
				L = {
					[h.d.Card]: function(e) {
						return o.a.createElement(y.a, j({}, e, {
							name: "view_card"
						}))
					},
					[h.d.Classic]: function(e) {
						return o.a.createElement(y.a, j({}, e, {
							name: "view_classic"
						}))
					},
					[h.d.Compact]: function(e) {
						return o.a.createElement(y.a, j({}, e, {
							name: "view_compact"
						}))
					}
				},
				R = {
					[h.d.Card]: () => s.fbt._("card", null, {
						hk: "4qOOHu"
					}),
					[h.d.Classic]: () => s.fbt._("classic", null, {
						hk: "1tiTtA"
					}),
					[h.d.Compact]: () => s.fbt._("compact", null, {
						hk: "1N7pcz"
					})
				},
				D = Object(b.t)(),
				B = Object(a.c)({
					dropdownIsOpen: Object(C.b)(N),
					isInIcons2020: _.a,
					postLayout: b.O,
					redditStyle: b.A
				}),
				M = Object(i.b)(B, e => ({
					onListingLayoutChange: (t, n) => e(Object(u.x)(t, n)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: N
					}))
				}));
			class F extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: n,
							sendEvent: s,
							subredditId: r
						} = this.props;
						t ? t(e) : (n(e, r), s(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(O.screen)(t),
							subreddit: Object(O.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							isInIcons2020: n,
							layout: s,
							onLayoutClick: r,
							postLayout: i
						} = this.props, a = s || h.e[i], c = e === a, l = n ? L[e] : P[e], u = R[e];
						return o.a.createElement(g.b, j({}, t, {
							className: Object(d.a)(k.a.LayoutItem, {
								[k.a.selected]: c
							}),
							"data-layout": e,
							displayText: u(),
							iconWrapperClassName: k.a.LayoutItemIconWrapper,
							isSelected: c,
							noHover: c,
							onClick: c ? void 0 : () => this.changeLayout(e),
							textClassName: k.a.LayoutItemTextClassName
						}), o.a.createElement(l, {
							className: k.a.LayoutIcon,
							onClick: c ? void 0 : r,
							isFilled: n && c && (!t || !1 !== t.forceIconFill)
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(T, j({}, e, {
							className: k.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: k.a.DropdownRow,
							rowIconClassName: k.a.DropdownRowIcon,
							rowSelectedClassName: k.a.DropdownRowSelected,
							tooltipId: N
						}), this.renderItem(h.d.Card), this.renderItem(h.d.Classic), this.renderItem(h.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: n,
						postLayout: s
					} = this.props, r = t || h.e[s];
					return o.a.createElement("div", {
						className: Object(d.a)(k.a.Container, e),
						id: I
					}, o.a.createElement("div", {
						className: k.a.DropdownContainer,
						onClick: n
					}, this.renderItem(r, {
						id: N,
						showDropdownTriangle: !0,
						forceIconFill: !1
					}), o.a.createElement(f.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = D(M(Object(p.c)(Object(l.a)(F))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				active: "_2VxDgoEy96XoqXUPsQooJk",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/listingSort/index.ts"),
				c = n("./src/reddit/actions/preferences.ts"),
				d = n("./src/reddit/components/TrackingHelper/index.tsx"),
				l = n("./src/reddit/contexts/PageLayer/index.tsx"),
				u = n("./src/reddit/helpers/isListingFocused/index.tsx"),
				m = n("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./node_modules/reselect/es/index.js")),
				h = n("./src/lib/addQueryParams/index.ts"),
				b = n("./src/lib/constants/index.ts"),
				f = n("./node_modules/react-router-redux/es/index.js"),
				x = n("./src/reddit/actions/tooltip.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./src/higherOrderComponents/asTooltip.tsx"),
				v = n("./src/reddit/constants/listingSorts.ts"),
				w = n("./src/reddit/contexts/Tooltip.ts"),
				E = n("./src/reddit/controls/Dropdown/index.tsx"),
				_ = n("./src/reddit/controls/Dropdown/Row.tsx"),
				O = n("./src/reddit/helpers/path/index.ts"),
				C = n("./src/reddit/helpers/trackers/navigation.ts"),
				S = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				k = n("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				j = n("./src/reddit/selectors/experiments/econLeaderboards.ts"),
				I = n("./src/reddit/selectors/tooltip.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				P = n("./src/reddit/components/ListingSort/index.m.less"),
				L = n.n(P),
				R = n("./src/lib/lessComponent.tsx");

			function D() {
				return (D = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const B = "ListingSort--SortPicker",
				M = Object(y.a)(R.a.wrapped(E.a, "Dropdown", L.a)),
				F = R.a.wrapped(T.a, "ListingSortIcon", L.a),
				U = (R.a.wrapped(S.b, "DropdownTriangle", L.a), R.a.div("Title", L.a)),
				A = R.a.wrapped(e => r.a.createElement(_.b, D({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", L.a),
				H = ({
					disabled: e,
					...t
				}) => r.a.createElement("div", D({}, t, {
					className: Object(i.a)(L.a.SortWrapper, t.className, {
						[L.a.isDisabled]: e
					})
				})),
				V = R.a.div("DropdownRowDisabled", L.a),
				G = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				W = Object(p.c)({
					isAwardListingExperimentEnabled: j.a,
					isBestSortPopularEnabled: k.a,
					user: N.j,
					dropdownIsOpen: (e, t) => Object(I.b)(t.dropdownId || B)(e),
					isPopularPage: l.C
				}),
				z = Object(o.b)(W, (e, {
					dropdownId: t,
					pageLayer: n
				}) => ({
					onOpenDropdown: () => e(Object(x.h)({
						tooltipId: t || B
					}))
				}));
			var K = R.a.wrapped(G(z(Object(d.c)(e => r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, !1 !== e.showTitle && r.a.createElement(U, null, g.fbt._("Sort", null, {
					hk: "2BfINq"
				})), r.a.createElement(H, {
					disabled: e.disabled
				}, e.children || r.a.createElement(A, {
					className: e.buttonClassName,
					displayText: Object(v.a)(e.sort),
					id: e.dropdownId || B,
					showDropdownTriangle: !0
				}, r.a.createElement(F, {
					sort: e.sort
				}))), r.a.createElement(w.a.Consumer, null, t => r.a.createElement(M, D({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: e.dropdownId || B
				}, t, {
					renderContentsHidden: !0
				}), e.disabled ? r.a.createElement(V, null, g.fbt._("Coming soon", null, {
					hk: "taPqm"
				})) : (e.sortOptions || ((e, t, n, s, r) => {
					const o = [b.P.HOT, b.P.NEW, b.P.TOP, b.P.RISING];
					return (e && (n || s) || t && s) && o.unshift(b.P.BEST), t && r && o.splice(3, 0, b.P.AWARDED), o
				})(e.isFrontpage, e.isPopularPage, e.user, e.isBestSortPopularEnabled, e.isAwardListingExperimentEnabled)).map(t => r.a.createElement(_.b, {
					className: Object(i.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(v.a)(t),
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(C.a)(t))
					},
					href: e.isProfilePage ? Object(h.a)(e.baseUrl, {
						sort: t
					}) : Object(O.a)(e.baseUrl, `${t}/`),
					isSelected: e.sort === t,
					key: t
				}, r.a.createElement(F, {
					className: e.rowIconClassName,
					sort: t
				}))))))))), "ListingSort", L.a),
				q = n("./src/reddit/constants/parameters.ts");
			const J = e => {
					const t = Y[e];
					return t && t() || ""
				},
				Y = {
					[b.Rb.AllStates]: () => g.fbt._("All", null, {
						hk: "3mz2P1"
					}),
					[b.Rb.Alaska]: () => g.fbt._("alaska", null, {
						hk: "3PQz70"
					}),
					[b.Rb.Alabama]: () => g.fbt._("alabama", null, {
						hk: "1Ain9C"
					}),
					[b.Rb.Arkansas]: () => g.fbt._("arkansas", null, {
						hk: "3MSLfs"
					}),
					[b.Rb.Arizona]: () => g.fbt._("arizona", null, {
						hk: "PjKyy"
					}),
					[b.Rb.California]: () => g.fbt._("california", null, {
						hk: "4fS2Uy"
					}),
					[b.Rb.Colorado]: () => g.fbt._("colorado", null, {
						hk: "2FU5sm"
					}),
					[b.Rb.Connecticut]: () => g.fbt._("connecticut", null, {
						hk: "3HJ97l"
					}),
					[b.Rb.DistrictOfColumbia]: () => g.fbt._("district of columbia", null, {
						hk: "43sboQ"
					}),
					[b.Rb.Delaware]: () => g.fbt._("delaware", null, {
						hk: "1sMYnC"
					}),
					[b.Rb.Florida]: () => g.fbt._("florida", null, {
						hk: "1ahnDc"
					}),
					[b.Rb.Georgia]: () => g.fbt._("georgia", null, {
						hk: "3O8sgW"
					}),
					[b.Rb.Hawaii]: () => g.fbt._("hawaii", null, {
						hk: "11be3k"
					}),
					[b.Rb.Iowa]: () => g.fbt._("iowa", null, {
						hk: "15vW0A"
					}),
					[b.Rb.Idaho]: () => g.fbt._("idaho", null, {
						hk: "12whY2"
					}),
					[b.Rb.Illinois]: () => g.fbt._("illinois", null, {
						hk: "4F6qqr"
					}),
					[b.Rb.Indiana]: () => g.fbt._("indiana", null, {
						hk: "1Xvs3I"
					}),
					[b.Rb.Kansas]: () => g.fbt._("kansas", null, {
						hk: "4yvtHS"
					}),
					[b.Rb.Kentucky]: () => g.fbt._("kentucky", null, {
						hk: "3iqD7X"
					}),
					[b.Rb.Louisiana]: () => g.fbt._("louisiana", null, {
						hk: "1pM17K"
					}),
					[b.Rb.Massachusetts]: () => g.fbt._("massachusetts", null, {
						hk: "3Hx5EP"
					}),
					[b.Rb.Maryland]: () => g.fbt._("maryland", null, {
						hk: "62JHL"
					}),
					[b.Rb.Maine]: () => g.fbt._("maine", null, {
						hk: "2Sh6yp"
					}),
					[b.Rb.Michigan]: () => g.fbt._("michigan", null, {
						hk: "2fnY28"
					}),
					[b.Rb.Minnesota]: () => g.fbt._("minnesota", null, {
						hk: "4diMsG"
					}),
					[b.Rb.Missouri]: () => g.fbt._("missouri", null, {
						hk: "3QuF4u"
					}),
					[b.Rb.Mississippi]: () => g.fbt._("mississippi", null, {
						hk: "28v1kQ"
					}),
					[b.Rb.Montana]: () => g.fbt._("montana", null, {
						hk: "20sZYn"
					}),
					[b.Rb.NorthCarolina]: () => g.fbt._("north carolina", null, {
						hk: "BUaf7"
					}),
					[b.Rb.NorthDakota]: () => g.fbt._("north dakota", null, {
						hk: "1WRpz0"
					}),
					[b.Rb.Nebraska]: () => g.fbt._("nebraska", null, {
						hk: "XUJCr"
					}),
					[b.Rb.NewHampshire]: () => g.fbt._("new hampshire", null, {
						hk: "ga6kK"
					}),
					[b.Rb.NewJersey]: () => g.fbt._("new jersey", null, {
						hk: "3Sz9QN"
					}),
					[b.Rb.NewMexico]: () => g.fbt._("new mexico", null, {
						hk: "i2870"
					}),
					[b.Rb.Nevada]: () => g.fbt._("nevada", null, {
						hk: "2DsBxU"
					}),
					[b.Rb.NewYork]: () => g.fbt._("new york", null, {
						hk: "2wKULo"
					}),
					[b.Rb.Ohio]: () => g.fbt._("ohio", null, {
						hk: "1KDnKA"
					}),
					[b.Rb.Oklahoma]: () => g.fbt._("oklahoma", null, {
						hk: "2P0Ita"
					}),
					[b.Rb.Oregon]: () => g.fbt._("oregon", null, {
						hk: "3CqdY4"
					}),
					[b.Rb.Pennsylvania]: () => g.fbt._("pennsylvania", null, {
						hk: "2skMK"
					}),
					[b.Rb.RhodeIsland]: () => g.fbt._("rhode island", null, {
						hk: "120MAU"
					}),
					[b.Rb.SouthCarolina]: () => g.fbt._("south carolina", null, {
						hk: "3JyeG9"
					}),
					[b.Rb.SouthDakota]: () => g.fbt._("south dakota", null, {
						hk: "4to42L"
					}),
					[b.Rb.Tennessee]: () => g.fbt._("tennessee", null, {
						hk: "gHo1c"
					}),
					[b.Rb.Texas]: () => g.fbt._("texas", null, {
						hk: "3dgz4M"
					}),
					[b.Rb.Utah]: () => g.fbt._("utah", null, {
						hk: "22zf2i"
					}),
					[b.Rb.Virginia]: () => g.fbt._("virginia", null, {
						hk: "1dvXBl"
					}),
					[b.Rb.Vermont]: () => g.fbt._("vermont", null, {
						hk: "1Cdmbu"
					}),
					[b.Rb.Washington]: () => g.fbt._("washington", null, {
						hk: "hhztG"
					}),
					[b.Rb.Wisconsin]: () => g.fbt._("wisconsin", null, {
						hk: "3SOyMZ"
					}),
					[b.Rb.WestVirginia]: () => g.fbt._("west virginia", null, {
						hk: "1jIKYD"
					}),
					[b.Rb.Wyoming]: () => g.fbt._("wyoming", null, {
						hk: "1QaJzt"
					})
				};
			var Z = n("./src/reddit/components/StateSort/index.m.less"),
				X = n.n(Z);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const $ = R.a.wrapped(E.a, "_Dropdown", X.a),
				ee = Object(y.a)($),
				te = e => {
					return e.indexOf("_") > 0 && se(e) === b.w.UnitedStates
				},
				ne = e => {
					if (te(e)) {
						return e.split("_")[1]
					}
					return b.Rb.AllStates
				},
				se = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				re = e => {
					const t = se(e),
						n = ne(e);
					return te(e) ? `${t}_${n}` : t
				},
				oe = Object(l.t)(),
				ie = Object(p.c)({
					dropdownIsOpen: Object(I.b)("StateSort--StateSortPicker")
				}),
				ae = Object(o.b)(ie, e => ({
					onOpenDropdown: () => e(Object(x.h)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, n) => {
						e(Object(f.b)(t)), e(Object(c.u)(b.w.UnitedStates + "_" + n))
					}
				}));
			var ce = R.a.wrapped(oe(ae(e => {
				const t = `${e.baseUrl}?${q.h}=${b.w.UnitedStates}`;
				return r.a.createElement("div", {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: e.disabled
				}, r.a.createElement(A, {
					className: e.buttonClassName,
					displayText: e.showStateAbbreviations && e.sort ? e.sort : J(e.sort),
					id: "StateSort--StateSortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(w.a.Consumer, null, n => r.a.createElement(ee, Q({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "StateSort--StateSortPicker"
				}, n, {
					renderContentsHidden: !0
				}), Object.keys(b.Rb).map(n => {
					const s = b.Rb[n];
					return r.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === b.Rb.AllStates ? t : `${t}_${e}`)(s), re(s))
					}, r.a.createElement(_.b, {
						className: Object(i.a)(e.rowClassName, e.sort === s ? e.rowSelectedClassName : void 0),
						displayText: J(s),
						isSelected: e.sort === s
					}))
				}))))
			})), "Component", X.a);
			const de = {
				[b.w.Everywhere]: () => g.fbt._("Everywhere", null, {
					hk: "3ysAHX"
				}),
				[b.w.UnitedStates]: () => g.fbt._("United States", null, {
					hk: "qrsat"
				}),
				[b.w.Argentina]: () => g.fbt._("Argentina", null, {
					hk: "1tWd87"
				}),
				[b.w.Australia]: () => g.fbt._("Australia", null, {
					hk: "2c0yTh"
				}),
				[b.w.Bulgaria]: () => g.fbt._("Bulgaria", null, {
					hk: "2mbkzD"
				}),
				[b.w.Canada]: () => g.fbt._("Canada", null, {
					hk: "1bnYIf"
				}),
				[b.w.Chile]: () => g.fbt._("Chile", null, {
					hk: "2eNYaZ"
				}),
				[b.w.Colombia]: () => g.fbt._("Colombia", null, {
					hk: "2sw6kC"
				}),
				[b.w.Croatia]: () => g.fbt._("Croatia", null, {
					hk: "4vRKYu"
				}),
				[b.w.CzechRepublic]: () => g.fbt._("Czech Republic", null, {
					hk: "21xzwE"
				}),
				[b.w.Finland]: () => g.fbt._("Finland", null, {
					hk: "jmDeD"
				}),
				[b.w.France]: () => g.fbt._("France", null, {
					hk: "1fX2Y8"
				}),
				[b.w.Germany]: () => g.fbt._("Germany", null, {
					hk: "2mADuB"
				}),
				[b.w.Greece]: () => g.fbt._("Greece", null, {
					hk: "UUFTD"
				}),
				[b.w.Hungary]: () => g.fbt._("Hungary", null, {
					hk: "4tz4jk"
				}),
				[b.w.Iceland]: () => g.fbt._("Iceland", null, {
					hk: "4mwr9S"
				}),
				[b.w.India]: () => g.fbt._("India", null, {
					hk: "omZ5C"
				}),
				[b.w.Ireland]: () => g.fbt._("Ireland", null, {
					hk: "3rG4DM"
				}),
				[b.w.Italy]: () => g.fbt._("Italy", null, {
					hk: "3EvGjk"
				}),
				[b.w.Japan]: () => g.fbt._("Japan", null, {
					hk: "3EAE8v"
				}),
				[b.w.Malaysia]: () => g.fbt._("Malaysia", null, {
					hk: "MgsVM"
				}),
				[b.w.Mexico]: () => g.fbt._("Mexico", null, {
					hk: "4ibMpW"
				}),
				[b.w.NewZealand]: () => g.fbt._("New Zealand", null, {
					hk: "3LwpKe"
				}),
				[b.w.Philippines]: () => g.fbt._("Philippines", null, {
					hk: "jokzr"
				}),
				[b.w.Poland]: () => g.fbt._("Poland", null, {
					hk: "2v19X3"
				}),
				[b.w.Portugal]: () => g.fbt._("Portugal", null, {
					hk: "2HNYp5"
				}),
				[b.w.PuertoRico]: () => g.fbt._("Puerto Rico", null, {
					hk: "22QgWG"
				}),
				[b.w.Romania]: () => g.fbt._("Romania", null, {
					hk: "5HuLT"
				}),
				[b.w.Serbia]: () => g.fbt._("Serbia", null, {
					hk: "3ly2Z0"
				}),
				[b.w.Singapore]: () => g.fbt._("Singapore", null, {
					hk: "3qEBqp"
				}),
				[b.w.Spain]: () => g.fbt._("Spain", null, {
					hk: "44RpFE"
				}),
				[b.w.Sweden]: () => g.fbt._("Sweden", null, {
					hk: "A5nWO"
				}),
				[b.w.Taiwan]: () => g.fbt._("Taiwan", null, {
					hk: "IHujb"
				}),
				[b.w.Thailand]: () => g.fbt._("Thailand", null, {
					hk: "1c8zJr"
				}),
				[b.w.Turkey]: () => g.fbt._("Turkey", null, {
					hk: "11Xk7x"
				}),
				[b.w.UnitedKingdom]: () => g.fbt._("United Kingdom", null, {
					hk: "rs1fl"
				})
			};
			var le = n("./src/reddit/components/CountrySort/index.m.less"),
				ue = n.n(le);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const pe = "CountrySort--CountrySortPicker",
				he = Object(l.t)(),
				be = Object(p.c)({
					dropdownIsOpen: Object(I.b)(pe)
				});
			var fe = he(Object(o.b)(be, e => ({
					onCloseDropdown: t => e(Object(x.j)({
						tooltipId: t
					})),
					onOpenDropdown: t => e(Object(x.g)({
						tooltipId: t
					})),
					onClickLink: (t, n) => {
						e(Object(f.b)(t)), e(Object(c.u)(n))
					}
				}))(e => {
					const t = se(e.sort),
						n = ne(e.sort),
						s = `${e.baseUrl}?${q.h}=`;
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(i.a)(ue.a.countrySort, e.className),
						onClick: () => e.dropdownIsOpen ? e.onCloseDropdown(pe) : e.onOpenDropdown(pe)
					}, r.a.createElement(H, {
						className: e.wrapperClassName,
						disabled: e.disabled
					}, r.a.createElement(A, {
						className: e.buttonClassName,
						displayText: (() => t in de ? de[t]() : de[b.w.Everywhere]())(),
						id: pe,
						showDropdownTriangle: !0
					})), r.a.createElement(w.a.Consumer, null, n => r.a.createElement(ee, me({
						className: e.dropdownClassName,
						isOpen: e.dropdownIsOpen,
						tooltipId: pe
					}, n, {
						renderContentsHidden: !0
					}), Object.keys(b.w).map(n => {
						const o = b.w[n];
						return r.a.createElement("div", {
							key: o,
							onClick: () => e.onClickLink(`${s}${re(o)}`, o)
						}, r.a.createElement(_.b, {
							className: Object(i.a)(e.rowClassName, t === o ? e.rowSelectedClassName : void 0),
							displayText: de[o](),
							isSelected: t === o
						}))
					})))), t === b.w.UnitedStates && r.a.createElement(ce, {
						baseUrl: e.baseUrl,
						buttonClassName: e.buttonClassName,
						className: e.stateSortClassName,
						disabled: e.disabled,
						dropdownClassName: e.dropdownClassName,
						rowClassName: e.rowClassName,
						rowSelectedClassName: e.rowSelectedClassName,
						showStateAbbreviations: e.showStateAbbreviations,
						sort: n,
						wrapperClassName: e.wrapperClassName
					}))
				})),
				xe = n("./node_modules/path-browserify/index.js"),
				ge = n.n(xe),
				ye = n("./src/reddit/components/TimeSort/index.m.less"),
				ve = n.n(ye);

			function we() {
				return (we = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ee = Object(y.a)(E.a),
				_e = (e, t, n) => {
					let s = e.url;
					return e.urlParams.sort || Object(l.G)(e) || (s = ge.a.join(s, t)), Object(h.a)(s, {
						[q.x]: n
					})
				},
				Oe = R.a.div("ListingSortContainer", ve.a),
				Ce = Object(l.t)(),
				Se = Object(p.c)({
					dropdownIsOpen: Object(I.b)("TimeSort--SortPicker")
				});
			var ke = Ce(Object(o.b)(Se, e => ({
					onOpenDropdown: () => e(Object(x.h)({
						tooltipId: "TimeSort--SortPicker"
					}))
				}))(Object(d.c)(e => r.a.createElement(Oe, {
					className: e.className,
					onClick: e.onOpenDropdown
				}, r.a.createElement(H, {
					className: e.wrapperClassName,
					disabled: !1
				}, r.a.createElement(A, {
					className: e.buttonClassName,
					displayText: Object(v.b)(e.timeSort),
					id: "TimeSort--SortPicker",
					showDropdownTriangle: !0
				})), r.a.createElement(w.a.Consumer, null, t => r.a.createElement(Ee, we({
					className: e.dropdownClassName,
					isOpen: e.dropdownIsOpen,
					tooltipId: "TimeSort--SortPicker"
				}, t), [b.Ub.HOUR, b.Ub.DAY, b.Ub.WEEK, b.Ub.MONTH, b.Ub.YEAR, b.Ub.ALL].map(t => r.a.createElement(_.b, {
					className: Object(i.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
					displayText: Object(v.b)(t),
					href: _e(e.pageLayer, e.listingSort, t),
					isSelected: e.timeSort === t,
					onClick: () => {
						e.onChange(t), e.sendEvent(Object(C.c)(t))
					}
				})))))))),
				je = n("./src/reddit/constants/listings.ts"),
				Ie = n("./src/reddit/contexts/CoreStyleExperiments.ts"),
				Ne = n("./src/reddit/controls/Button/index.tsx"),
				Te = n("./src/reddit/icons/fonts/index.tsx"),
				Pe = n("./src/reddit/icons/fonts/Menu/index.tsx"),
				Le = n("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				Re = n.n(Le);

			function De() {
				return (De = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Be = new Set([b.P.CONTROVERSIAL, b.P.TOP]),
				Me = new Set([b.P.CONTROVERSIAL, b.P.RISING]),
				Fe = "ListingSort--Overflow",
				Ue = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				Ae = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, k.a, N.j, l.C, j.a, (e, t, n, s, r, o) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e
					};
					const i = [b.P.HOT, b.P.NEW, b.P.TOP, b.P.RISING];
					return (t && (s || n) || r && n) && i.unshift(b.P.BEST), r && o && i.splice(3, 0, b.P.AWARDED), {
						isPopularPage: r,
						sortOptions: i
					}
				});
			class He extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(C.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: n
						} = this.props;
						return n ? Object(h.a)(t, {
							sort: e
						}) : Object(O.a)(t, `${e}/`)
					}, this.renderSortButton = e => {
						const {
							sort: t
						} = this.props;
						return r.a.createElement(Ne.q, {
							className: Object(i.a)(Re.a.SortLink, e === t && Re.a.selected),
							kind: Ne.a.InternalLink,
							priority: Ne.b.Plain,
							Icon: n => r.a.createElement(F, De({}, n, {
								sort: e,
								isFilled: e === t
							})),
							text: Object(v.a)(e),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						})
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: n,
							isPopularPage: s,
							sort: o
						} = this.props, i = s && !!n && e === b.P.HOT && o === b.P.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, this.renderSortButton(e), i && r.a.createElement(fe, {
							baseUrl: je.c[je.b.Popular],
							buttonClassName: Re.a.DropdownButton,
							className: Re.a.CountrySort,
							disabled: t,
							dropdownClassName: Re.a.Dropdown,
							rowClassName: Re.a.DropdownRow,
							rowSelectedClassName: Re.a.DropdownRowSelected,
							wrapperClassName: Re.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: n,
							stateSortClassName: Re.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: n,
						sort: s,
						sortOptions: o,
						timeSort: a
					} = this.props, c = !t && Be.has(s), d = Me.has(s), l = o.filter(e => !Me.has(e)), u = o.filter(e => Me.has(e) && e !== s);
					return r.a.createElement(Ie.b.Consumer, null, ({
						icons2020: t
					}) => r.a.createElement(r.a.Fragment, null, r.a.createElement(K, De({}, this.props, {
						buttonClassName: Re.a.DropdownButton,
						className: Object(i.a)(Re.a.SortDropdown, e),
						rowClassName: Re.a.DropdownRow,
						rowIconClassName: Re.a.DropdownRowIcon,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(i.a)(Re.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(s), c && r.a.createElement(ke, {
						baseUrl: this.getSortUrl(s),
						buttonClassName: Re.a.DropdownButton,
						className: Re.a.TimeSort,
						dropdownClassName: Re.a.Dropdown,
						listingSort: s,
						onChange: n,
						rowClassName: Re.a.DropdownRow,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						timeSort: a || b.Vb,
						wrapperClassName: Re.a.DropdownSortWrapper
					}), u.length > 0 && r.a.createElement(K, De({}, this.props, {
						className: Object(i.a)(Re.a.SortOverflow, e),
						dropdownClassName: Re.a.Dropdown,
						dropdownId: Fe,
						rowClassName: Re.a.DropdownRow,
						rowIconClassName: Re.a.DropdownRowIcon,
						rowSelectedClassName: Re.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: u
					}), r.a.createElement("button", {
						className: Re.a.SortOverflowButton,
						id: Fe
					}, t ? r.a.createElement(Te.a, {
						name: "overflow_horizontal"
					}) : r.a.createElement(Pe.a, null)))))
				}
			}
			var Ve = Ue(Object(o.b)(Ae)(Object(d.c)(He))),
				Ge = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				We = n.n(Ge);
			const ze = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				Ke = Object(o.b)(null, (e, {
					subredditId: t
				}) => ({
					updateSortPreference: (n, s) => {
						if (t) {
							const r = Object(a.c)({
								sort: n,
								timeSort: s
							});
							e(Object(c.I)(t, r))
						}
					}
				}));
			class qe extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						u.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: n,
						disabled: s = !1,
						isProfilePage: o,
						sort: a,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: u
					} = this.props;
					return r.a.createElement("div", {
						className: Object(i.a)(We.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(Ve, {
						baseUrl: e,
						disabled: s,
						geopopularSort: n,
						onChange: u,
						onTimeSortChange: this.updateTimeSort,
						sort: a,
						sortOptions: c,
						timeSort: l
					}), !o && r.a.createElement(m.a, {
						className: We.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = ze(Ke(Object(d.c)(qe)))
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./src/reddit/featureFlags/component.tsx");
			const o = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				i = Object(r.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/ListingPostList/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/PostList/index.tsx"),
				r = n("./src/reddit/connectors/PostList/index.ts");
			t.a = Object(r.a)(s.a)
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/icons/fonts/Gift/index.tsx"),
				l = n("./src/reddit/icons/svgs/Best/index.tsx"),
				u = n("./src/reddit/icons/svgs/Controversial/index.tsx"),
				m = n("./src/reddit/icons/svgs/Hot/index.tsx"),
				p = n("./src/reddit/icons/svgs/New/index.tsx"),
				h = n("./src/reddit/icons/svgs/Rising/index.tsx"),
				b = n("./src/reddit/icons/svgs/Top/index.tsx"),
				f = n("./src/reddit/controls/Dropdown/index.m.less"),
				x = n.n(f);
			const g = {
					[i.P.BEST]: l.a,
					[i.P.HOT]: m.a,
					[i.P.NEW]: p.a,
					[i.P.CONTROVERSIAL]: u.a,
					[i.P.TOP]: b.a,
					[i.P.RISING]: h.a,
					[i.P.AWARDED]: d.a
				},
				y = {
					[i.P.BEST]: "best",
					[i.P.HOT]: "hot",
					[i.P.NEW]: "new",
					[i.P.CONTROVERSIAL]: "controversial",
					[i.P.TOP]: "top",
					[i.P.RISING]: "rising",
					[i.P.AWARDED]: "award"
				};

			function v({
				className: e,
				isFilled: t,
				sort: n
			}) {
				if (Object(a.a)() && void 0 !== y[n]) return r.a.createElement(c.a, {
					name: y[n],
					isFilled: t,
					className: Object(o.a)(e, x.a.iconStyles)
				});
				const s = g[n];
				return s ? r.a.createElement(s, {
					className: Object(o.a)(e, x.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, n) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				h = n.n(p);
			const b = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: m.V
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), r.a.createElement("iframe", {
					className: Object(c.a)(l.a, h.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: b,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				unblurButtonContainer: "c1UAj_LbgdGBuJFlKbnrQ",
				unblurButton: "_2Ws3wFSVPzJhnW46FsoxLv"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return O
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/PlayButton/index.tsx"),
				h = n("./src/reddit/constants/elementClassNames.ts"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/models/Media/index.ts"),
				x = n("./src/reddit/selectors/posts.ts"),
				g = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/constants/tracking.ts"),
				v = n("./src/reddit/components/Media/blurredContent.ts"),
				w = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				E = n.n(w);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const O = e => e > 2 * f.e,
				C = e => {
					const t = Object(d.a)(E.a.image, h.g, e.className, {
							[E.a.mShowCentered]: e.showCentered,
							[E.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${f.j}px`), e.isListing || e.isTall && O(e.height) || (n.maxHeight = `${f.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), o.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				S = e => {
					const t = {};
					return (!e.showFull && Object(f.I)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${f.j}px`, e.shouldBlur && (t.maxWidth = Object(f.I)(e.height, e.width) ? `${f.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(d.a)(E.a.container, e.className),
						style: t
					}, e.children)
				},
				k = Object(i.b)(() => Object(c.a)(x.C, g.bb, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(x.b)(e, n) : null, (e, t, n) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n
				})));
			t.a = k(e => e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
				href: e.outboundUrl,
				target: "_blank",
				rel: u.a,
				onMouseDown: t => {
					e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(b.c)(t.currentTarget, e.postId, e.basePixelMetadata)
				}
			}, I(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
				target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
				to: Object(m.a)(e.postPermalink)
			}, I(e)) : I(e));
			const j = (e, t) => o.a.createElement(C, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[y.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				I = ({
					onClick: e,
					...t
				}) => {
					const n = Object(f.I)(t.height, t.width),
						r = O(t.height) && n;
					return o.a.createElement(S, _({}, t, {
						className: `${n?`${y.a} `:""}${t.className||""}`
					}), t.isListing ? o.a.createElement("div", {
						className: t.contentImageClassName
					}, j(n, t)) : o.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: r ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.b
					}, j(n, t)), t.isListing && !t.showFull && t.height > f.j && Object(f.I)(t.height, t.width) && o.a.createElement("div", {
						className: E.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && o.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && o.a.createElement("div", {
						className: E.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: E.a.unblurButton
					}, Object(v.a)(!!t.isNSFW, !!t.isSpoiler))))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					s = e.blurSrc ? r.a.createElement("img", {
						className: d.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					c = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return r.a.createElement("div", {
					className: Object(o.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/throttle.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/selectors/video.ts");
			const b = 100,
				f = b / 2 / 1e3;
			var x = n("./src/lib/forceHttps/index.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			class y extends i.a.Component {
				constructor(e) {
					super(e), this.toggle = e => {
						if (e) {
							const e = this.play();
							e && e.catch && e.catch(() => {})
						} else this.pause()
					}, this.ref = null
				}
				play() {
					if (this.ref && this.ref.play) return this.ref.play()
				}
				pause() {
					if (this.ref && this.ref.pause) return this.ref.pause()
				}
				componentDidMount() {
					this.initEventHandlers(), this.toggle(!this.props.shouldPause && (this.props.autoplay || this.props.isNotCardView))
				}
				componentWillUnmount() {
					this.destroyEventHandlers()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.shouldPause !== e.shouldPause && this.toggle(!e.shouldPause && (e.autoplay || e.isNotCardView))
				}
				destroyEventHandlers() {
					this.ref && this.cancelBufferingDetector && this.cancelBufferingDetector()
				}
				initEventHandlers() {
					this.ref && this.props.onBufferingChange && (this.cancelBufferingDetector = function(e, t) {
						let n = !1,
							s = !1;
						const r = () => n = !0,
							o = () => s = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, s) return s = !1, void(a = c);
							if (e.paused || e.seeking || !n) return void(a = c);
							const r = i;
							4 === e.readyState ? i = !1 : !i && c >= a && c < a + f ? i = !0 : i && c >= a && c > a + f && (i = !1), a = c, r !== i && t(i)
						}, b);
						return () => {
							clearInterval(d), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(this.ref, this.props.onBufferingChange))
				}
				render() {
					const {
						autoplay: e,
						isListing: t,
						isNotCardView: n,
						onBufferingChange: s,
						shouldLoad: r,
						shouldPause: o,
						showCentered: a,
						showFull: c,
						source: d,
						...l
					} = this.props;
					return i.a.createElement("video", g({}, l, {
						ref: e => {
							this.ref = e
						},
						muted: !0
					}), i.a.createElement("source", {
						src: Object(x.a)(this.props.source || "")
					}))
				}
			}
			var v = y,
				w = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				E = n.n(w);
			const _ = Object(c.c)({
					autoplayPref: p.b,
					consumed: h.a,
					loadTimes: h.f,
					metadata: h.h,
					started: h.k
				}),
				O = Object(a.b)(_, (e, {
					postId: t
				}) => ({
					onBufferingChanged: n => {
						e(n ? l.r(t) : l.E(t))
					},
					onLoadStarted: n => e(l.q(t, n)),
					onMetadataReceived: n => e(l.D({
						metadata: n,
						postId: t
					})),
					onPaused: () => e(l.z({
						postId: t
					})),
					onPlayable: n => e(l.A(t, n)),
					onPlaying: () => e(l.C(t)),
					onWatched: () => e(l.s(t)),
					onViewableImpression: () => e(l.x(t)),
					onFullyViewableImpression: () => e(l.u(t)),
					onPlayedWithSound: () => e(l.B(!1, t)),
					onWatchedPercent: n => e(l.N(n, t))
				}));
			class C extends i.a.Component {
				constructor() {
					super(...arguments), this.percentTriggered = 0, this._checkForConsumption = r()(e => {
						if (this.props.consumed) return;
						const {
							target: t
						} = e;
						t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && this.props.onWatched()
					}, 200), this.onTimeUpdate = e => {
						e.persist(), this._checkForConsumption(e)
					}, this.onVideoPlayable = e => {
						this.props.metadata || this.sendTransformedMetadata(e), this.props.started || this.props.onPlayable(e.timeStamp)
					}, this.loadStarted = e => {
						this.props.onLoadStarted(e.timeStamp)
					}, this.sendTransformedMetadata = e => {
						this.props.onMetadataReceived({
							id: this.props.postId,
							length: 1e3 * e.target.duration,
							originalHeight: e.target.videoHeight,
							originalWidth: e.target.videoWidth
						})
					}, this.onPaused = e => {
						this.props.onPaused()
					}, this.onPlaying = e => {
						this.props.loadTimes || this.onVideoPlayable(e), this.props.metadata || this.sendTransformedMetadata(e), this.props.onPlaying()
					}, this.renderVideoPlayer = () => {
						const {
							showCentered: e,
							isListing: t
						} = this.props, n = {};
						return e && (n.margin = "0 auto"), t || (n.maxHeight = `${m.e}px`), i.a.createElement(v, {
							autoplay: this.props.autoplayPref,
							className: Object(d.a)(u.a, E.a.styledVideo),
							height: this.props.height,
							isListing: this.props.isListing,
							isNotCardView: this.props.isNotCardView,
							key: this.props.postId,
							loop: !0,
							onBufferingChange: this.props.onBufferingChanged,
							onLoadStart: this.loadStarted,
							onLoadedData: this.onVideoPlayable,
							onLoadedMetadata: this.sendTransformedMetadata,
							onPause: this.props.onPaused,
							onPlaying: this.onPlaying,
							onTimeUpdate: this.onTimeUpdate,
							shouldLoad: this.props.shouldLoad,
							shouldPause: this.props.shouldPause,
							showCentered: this.props.showCentered,
							showFull: this.props.showFull,
							source: this.props.source,
							style: n,
							width: this.props.width
						})
					}
				}
				render() {
					return this.props.isListing ? this.renderVideoPlayer() : i.a.createElement("div", {
						className: Object(d.a)(E.a.container, this.props.className, {
							[E.a.centered]: this.props.showCentered
						})
					}, i.a.createElement("a", {
						href: this.props.originalSource,
						target: "_blank"
					}, this.renderVideoPlayer()))
				}
			}
			t.a = O(C)
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? s.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? s.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
		},
		"./src/reddit/components/MultiredditTopBar/Button/index.m.less": function(e, t, n) {
			e.exports = {
				textBase: "LcUEFMijsseUG0elP8bNx",
				button: "_14uJB4G3tqOEYET63pRdyA",
				hoverText: "_3GSO2RiUsPx69akefymMHH",
				text: "_2RcDSmyTF8XzvMXlNYdfB3",
				withHover: "_1eiwN-M8gLxB0Wrix2rZI9",
				icon: "nVpAL8k7NeDtiXcPNAmaX"
			}
		},
		"./src/reddit/components/MultiredditTopBar/FollowButton/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_3d7Sfwey7uejnzrmv0eHPD",
				isFollowed: "mmRAVpxPd7_dKF--axI5t"
			}
		},
		"./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				warning: "bX6SqXfzfxpv4GQbuIYVZ",
				button: "_1qiH6rUwyms3uD12BWyHR5"
			}
		},
		"./src/reddit/components/MultiredditTopBar/ShareMenu/index.m.less": function(e, t, n) {
			e.exports = {
				shareMenu: "_3mn7XQLztyLrhr3ZAQyl5y",
				shareIcon: "_373yJBxVgon33agUR-lV0m"
			}
		},
		"./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less": function(e, t, n) {
			e.exports = {
				button: "_1doK8qD1dkYaqBY5YEJaOD",
				pencilIcon: "_3PELp5Muvbc7hRTVQW0VEa",
				dropdownRow: "KXZPPPGdP_LlVeAK0oMa",
				icon: "_3T9KQ0BWvW9jR5SmmqJgVE",
				public: "_1mAvxBXazRTEPbQEYYMhFI",
				private: "_2slZfnU3hwgD9b8dT79p1F"
			}
		},
		"./src/reddit/components/MultiredditTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1f7kdhvpHh0S3ClTn3xFCa",
				layoutContainer: "_2CnZ_NKcI15TLBqdLMIYmu",
				layoutCard: "_1xUCmooih5FTp8z5c-oD6U",
				actions: "_1T_vh62Hnliedh8W_NT8-m",
				icon: "_2xtXouwF6uqK9UUpun6xXY",
				content: "_3zG_bpPw8e9TAPq07QCJya",
				header: "_1-u63wf24mXQJg7YnYaR_O",
				multiredditName: "_3I-SyNPeXukMGT4sLs6sFH",
				flair: "_3OqxkWiGGZGmXF0KTa12_h",
				descriptionContainer: "_2SmhQkTKjbD38r3jy00afr",
				meta: "_9uTR_Kf5w51DX_D_Zzj6b",
				usernameLink: "_3O7szJf96hs9FVHDx2qH9d"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return J
			})), n.d(t, "a", (function() {
				return Z
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/history/esm/history.js"),
				r = n("./node_modules/lodash/debounce.js"),
				o = n.n(r),
				i = n("./node_modules/lodash/last.js"),
				a = n.n(i),
				c = n("./node_modules/lodash/throttle.js"),
				d = n.n(c),
				l = n("./node_modules/react/index.js"),
				u = n.n(l),
				m = n("./src/lib/addQueryParams/index.ts"),
				p = n("./src/lib/ads/index.ts"),
				h = n("./src/lib/classNames/index.ts"),
				b = n("./src/lib/constants/index.ts"),
				f = n("./src/lib/fastdom/index.ts"),
				x = n("./src/lib/lessComponent.tsx"),
				g = n("./src/lib/opener/index.ts"),
				y = n("./src/lib/sentry/index.ts"),
				v = n("./src/reddit/components/PostList/LoadMore.tsx"),
				w = n("./src/reddit/components/PostList/SomethingWrong.tsx"),
				E = n("./src/reddit/components/Scroller/Simple.tsx"),
				_ = n("./src/reddit/constants/adEvents.ts"),
				O = n("./src/reddit/constants/componentSizes.ts"),
				C = n("./src/reddit/constants/postLayout.ts"),
				S = n("./src/reddit/controls/InternalLink/index.tsx"),
				k = n("./src/reddit/controls/OutboundLink/index.tsx"),
				j = n("./src/reddit/helpers/getClickInfo.ts"),
				I = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				N = n("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				T = n("./src/reddit/models/Media/index.ts"),
				P = n("./src/reddit/helpers/brandSafety/index.ts"),
				L = n("./src/lib/LRUCache/index.ts"),
				R = n("./src/telemetry/index.ts"),
				D = n("./src/telemetry/models/Timer.ts"),
				B = n("./src/reddit/components/PostList/index.m.less"),
				M = n.n(B);
			const {
				fbt: F
			} = n("./node_modules/fbt/lib/FbtPublic.js"), U = 500, A = new L.a(U), H = new L.a(U), V = new L.a(U), G = {
				LARGE: 1,
				MEDIUM: 1,
				CLASSIC: 3,
				COMPACT: 5
			}, W = x.a.div("SeeMore", M.a), z = x.a.wrapped(N.a, "ArrowRight", M.a), K = (e, t, n, s, r, o, i, a) => {
				const c = `entered-${e}-${t}-${n?`last-${s}-${r}`:""}-${o}`;
				let d = A.get(c);
				return void 0 === d && (d = () => {
					n && i.onBottomViewed(s, r), i.trackOnPostEnteredViewport(e, t, a)
				}, A.set(c, d)), d
			}, q = (e, t, n, s, r) => {
				const o = `left-${e}-${t}`;
				let i = H.get(o);
				return void 0 === i && (i = o => {
					n.trackOnPostExitedViewport(e, t, o, s, r)
				}, H.set(o, i)), i
			}, J = (e, t) => {
				const n = `click-${e}`;
				let s = V.get(n);
				return void 0 === s && (s = (e, n, s, r) => {
					if (n.isSponsored) {
						t.fireAdPixelsOfType(n, _.a.Click);
						const {
							source: e
						} = Object(p.t)(n, r);
						if (e && e.outboundUrl) {
							let t = e.outboundUrl;
							s && (t = Object(k.a)(n.id, s, t).url), Object(g.d)(t, g.c.BLANK)
						}
					} else t.openPost({
						postOrComment: n,
						clickInfo: Object(j.a)(e)
					})
				}, V.set(n, s)), s
			}, Y = (e, t) => {
				const n = [...e];
				return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
					n.splice(e, 0, t[e])
				}), n
			};
			class Z extends u.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new L.a(U), this.surveyTriggerCounted = !1, this.viewportHeight = null, this.updateScrollerRef = e => {
						this.scrollerRef = e instanceof Element ? e : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e), this.props.isNpsScrollSurveyEnabled && this.props.surveyTriggerScrollCounted && !this.surveyTriggerCounted && this.surveyTriggerListener(e)
					}, this.surveyTriggerListener = d()(({
						primaryChild: e
					}) => {
						this.viewportHeight && e && e.rectangle && e.rectangle.top > this.viewportHeight && (this.props.surveyTriggerScrollCounted && this.props.surveyTriggerScrollCounted(), this.surveyTriggerCounted = !0)
					}, 500), this.dispatchBrandSafety = o()(({
						getVisibleItemsInViewport: e
					}) => {
						const {
							postsById: t,
							subredditsById: n
						} = this.props, s = e(), r = [];
						s.forEach(e => r.push(e.id));
						const o = r.map(e => t[e]).filter(Boolean),
							i = o.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(P.a)(o, i))
					}, b.d, {
						leading: !0
					})
				}
				UNSAFE_componentWillMount() {
					this.timerId && R.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = R.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.viewportHeight = window.innerHeight, this.timerId) {
						const e = R.c.end(this.timerId);
						setTimeout(() => Object(R.b)(b.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				UNSAFE_componentWillUpdate(e) {
					this.timerId && R.c.cancel(this.timerId), e.postIds.length && (this.timerId = R.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					var t, n;
					if (f.a.read(() => this.checkAndSendScreenview()), this.timerId && R.c.has(this.timerId)) {
						const e = R.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(R.b)(b.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
					this.props.listingKey !== e.listingKey && (this.surveyTriggerCounted = !1);
					const s = null === (t = this.props.postIds) || void 0 === t ? void 0 : t[0];
					s && s !== (null === (n = e.postIds) || void 0 === n ? void 0 : n[0]) && this.props.onFirstPostChanged(s)
				}
				componentWillUnmount() {
					this.timerId && R.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: n
					} = this.props;
					return R.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (n || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: n
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const s = R.c.end(e);
					setTimeout(() => {
						n(t(s, D.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: n
					} = this.props;
					return !n && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const {
						postsById: t,
						...n
					} = this.props, {
						postsById: s,
						...r
					} = e, o = Object.keys(n), i = Object.keys(r);
					if (i.length !== o.length) return !0;
					if (i.some(e => n[e] !== r[e])) return !0;
					if (t === s) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: n
						} = this.props;
						return this.props.postIds.some((r, o) => {
							const i = 0 === o;
							return n({
								isFirstPost: i,
								layout: e,
								post: t[r]
							}) !== n({
								isFirstPost: i,
								layout: e,
								post: s[r]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, n, s) {
					const {
						currentProfileName: r,
						hostPostId: o,
						isCommentPermalink: i,
						isCommentsPage: a,
						isFrontpage: c,
						isProfilePostListing: d,
						isTopicPage: l,
						listingKey: m,
						listingName: p,
						pageLayer: h,
						pageReferrer: f,
						postClickEventFactory: x,
						redditStyle: g,
						shouldHideFlair: v,
						isActionBarAnimationEnabled: w,
						postIds: E
					} = this.props, _ = 0 === t, O = `post-${s}-${e}-${t}-${n?"last-index":""}-${p}-${m}-${f}`;
					let S;
					if (void 0 === (S = this.scrollChildCache.get(O))) {
						const {
							inSubredditOrProfile: k,
							postsById: j
						} = this.props, N = j[e], P = N.crosspostRootId && j[N.crosspostRootId] ? j[N.crosspostRootId] : N;
						N.crosspostRootId && !j[N.crosspostRootId] && y.c.withScope(e => {
							e.setExtra("errorType", b.q.API), e.setExtra("description", `Post ${N.id} is crosspost of ${N.crosspostRootId}, but ` + `${N.crosspostRootId} details are missing in the state`), y.c.captureMessage("Crosspost parent details are missing")
						});
						const L = this.props.postComponentForLayout({
								isCrosspost: !!N.crosspostRootId,
								isFirstPost: _,
								layout: s,
								post: P
							}),
							R = `post-list-item-[layout: ${s}]-[postId: ${e}]`,
							D = K(e, s, n, m, p, f, this.props, t),
							B = q(e, s, this.props, t, h),
							M = J(e, this.props),
							F = P.media && P.media.type === T.o.EMBED ? P.media.provider : null;
						S = {
							estHeight: Object(I.c)(N, s),
							id: e,
							isFocusable: !(!P.media || !(s === C.g.Large || s === C.g.Classic && Object(T.G)(P.media))) && (T.d.has(P.media.type) && (!F || !T.s.has(F)) && !P.isSpoiler && !P.isNSFW),
							trackOnEnteredViewport: D,
							trackOnExitedViewport: B,
							render: ({
								className: t,
								height: s,
								width: b,
								remeasure: f,
								setScrollerChildRef: y,
								shouldLoadInitially: O
							}) => u.a.createElement(L, {
								className: t,
								currentProfileName: r,
								key: R,
								availableWidth: b,
								eventFactory: x,
								first: _,
								forceLoadMedia: O,
								hostPostId: o,
								inSubredditOrProfile: k,
								isActionBarAnimationEnabled: w,
								isCommentPermalink: i,
								isCommentsPage: a,
								isFrontpage: c,
								isProfilePostListing: d,
								isTopicPage: l,
								listingKey: m,
								listingName: p,
								pageLayer: h,
								last: n,
								onClickPost: M,
								onSizeChanged: f,
								postId: e,
								postIds: E,
								redditStyle: g,
								sendEvent: this.props.sendEvent,
								scrollerItemRef: y,
								shouldHideFlair: v
							})
						}, this.scrollChildCache.set(O, S)
					}
					return S
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return u.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: n,
						layout: s,
						onTryAgain: r,
						postListPlaceholderComponent: o
					} = this.props;
					if (n) return;
					const i = o;
					return u.a.createElement("div", {
						className: M.a.placeholder
					}, u.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && u.a.createElement(w.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: n,
						layout: s,
						loadMoreClassName: r,
						onLoadMore: o
					} = this.props;
					if (!n) return u.a.createElement("div", {
						className: M.a.placeholder
					}, u.a.createElement(v.a, {
						className: r,
						isLoading: !!t,
						layout: s,
						countOverride: G[s]
					}), !!e && u.a.createElement(w.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: n,
						injectChildren: r,
						isTruncated: o,
						layout: i,
						location: a,
						loadMore: c,
						postIds: d,
						onLoadMore: p
					} = this.props;
					let f = d.map((e, t, n) => {
						const s = t === d.length - 1;
						return this.scrollChildForPost(e, t, s, i)
					});
					r && (f = Y(f, r));
					const x = this.props.measureScrollFPS ? `post-listings-${i}` : void 0,
						g = a ? Object(s.e)(a) : null,
						y = g || o;
					return u.a.createElement(l.Fragment, null, u.a.createElement(E.b, {
						innerRef: this.updateScrollerRef,
						className: y ? M.a.truncatedPostList : Object(h.a)(M.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: n,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: c && c.token ? c.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: p,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: O.f
					}, f), g && u.a.createElement(W, {
						className: M.a.seeMoreButton
					}, u.a.createElement(S.a, {
						className: M.a.seeMorePostsText,
						to: Object(m.a)(g, {
							type: b.Pb.Posts
						})
					}, F._("See More Posts", null, {
						hk: "3o0CqI"
					}), u.a.createElement(z, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			Z.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: u.a.Fragment
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, n) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/actions/urlRequested.ts"),
				l = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = n("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				m = n.n(u);
			const p = Object(i.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				h = c.a.wrapped(e => o.a.createElement("div", {
					className: e.className,
					dangerouslySetInnerHTML: {
						__html: e.html
					},
					onClick: t => {
						((e, t, n) => {
							if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
								e.preventDefault(), t(e.target.getAttribute("href"))
							}
							e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), n && n(e)
						})(t, e.onNavigate, e.onClick)
					},
					style: {
						...e.style,
						"--RawHTMLDisplay-tr-even": Object(s.g)(Object(l.a)(e).body, .8),
						"--RawHTMLDisplay-tr-odd": Object(s.g)(Object(l.a)(e).line, .8)
					}
				}), "StyledRawHTMLDisplay", m.a);
			t.a = p(Object(a.a)(h))
		},
		"./src/reddit/components/ResizeSensor/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/raf/index.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o);
			class a extends i.a.Component {
				constructor(e) {
					super(e), this.isIE = () => /Trident/.test(navigator.userAgent), this.setContainerRef = e => {
						this.containerRef || (this.containerRef = e, this.createSensor())
					}, this.handleResize = () => {
						void 0 !== this.frame && r.a.cancel(this.frame), this.frame = r()(this.props.onResize)
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
					return i.a.createElement("div", {
						ref: this.setContainerRef
					})
				}
			}
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = ["left", "top"],
				b = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				g = m.a.span("SpoilerWrapper", u.a),
				y = m.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => o.a.createElement(g, p({}, n, {
					className: Object(i.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				v = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class w extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return o.a.createElement(y, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(f, null, o.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(v, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: h,
						tooltipPosition: b
					}), this.props.children))
				}
			}
			t.a = w
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "h", (function() {
				return p
			})), n.d(t, "k", (function() {
				return h
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return f
			})), n.d(t, "g", (function() {
				return x
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "i", (function() {
				return y
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "n", (function() {
				return S
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "p", (function() {
				return j
			})), n.d(t, "o", (function() {
				return I
			})), n.d(t, "q", (function() {
				return N
			})), n.d(t, "s", (function() {
				return T
			})), n.d(t, "r", (function() {
				return P
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "w", (function() {
				return R
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const u = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				m = c.a.hr("Hr", a.a),
				p = c.a.code("M", a.a),
				h = c.a.pre("Pre", a.a),
				b = c.a.blockquote("Blockquote", a.a),
				f = c.a.p("P", a.a),
				x = c.a.li("Li", a.a),
				g = c.a.ul("Ul", a.a),
				y = c.a.ol("Ol", a.a),
				v = c.a.strong("B", a.a),
				w = c.a.em("I", a.a),
				E = c.a.span("U", a.a),
				_ = e => r.a.createElement("del", e),
				O = c.a.sub("Sub", a.a),
				C = c.a.sup("Sup", a.a),
				S = c.a.table("Table", a.a),
				k = c.a.tr("Tr", a.a),
				j = c.a.td("Tdl", a.a),
				I = c.a.td("Tdc", a.a),
				N = c.a.td("Tdr", a.a),
				T = c.a.th("Thl", a.a),
				P = c.a.th("Thc", a.a),
				L = (c.a.th("Thr", a.a), c.a.wrapped(e => r.a.createElement(o.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "A", a.a)),
				R = c.a.wrapped(d.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return _
			})), n.d(t, "b", (function() {
				return O
			})), n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/blurredContent.ts"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				x = n("./src/reddit/components/RichTextJson/index.m.less"),
				g = n.n(x);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = n("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				w = Object(c.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => i.a.createElement(v, y({}, n, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				E = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				_ = e => r()(e, E),
				O = e => e.findIndex(E),
				C = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: r,
						isNSFW: o,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: x,
						useExplicitTextColor: y,
						shouldBlur: E
					} = e, C = s.document, S = [], k = e.mediaMetadata || null, j = O(C), I = _(C);
					if (E && !r) return i.a.createElement(v, {
						className: Object(a.a)(u.j, n)
					}, i.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: d
					}, Object(l.a)(!!o, !!c))));
					if (-1 !== j)
						for (let i = j; i <= I; i++) {
							const e = C[i];
							switch (e.e) {
								case h.k:
									S.push(f.c(e, x, i));
									break;
								case h.l:
									S.push(f.d(i));
									break;
								case h.b:
									S.push(f.a(e, k, x, i));
									break;
								case h.c:
									S.push(f.b(e, i));
									break;
								case h.p:
									S.push(f.f(e, k, x, i));
									break;
								case h.z:
									S.push(f.h(e, k, x, i));
									break;
								case h.u:
									S.push(f.g(e, k, x, i));
									break;
								case h.h:
									S.push(Object(b.a)(e, i));
									break;
								case h.m:
								case h.a:
								case h.D:
									S.push(...Object(b.b)(e, i, k, p, m, t))
							}
						}
					return y ? i.a.createElement(v, {
						className: Object(a.a)(u.j, n)
					}, S) : i.a.createElement(w, {
						className: Object(a.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, S)
				};
			class S extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					d.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), d.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return C(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			})), n.d(t, "b", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/elements.tsx"),
				f = n("./src/reddit/components/RichTextJson/media.m.less"),
				x = n.n(f),
				g = n("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const v = /\/(\w+)\/asset\/(\w+)\//,
				w = g.a.wrapped(b.a, "A", x.a),
				E = g.a.wrapped(l.a, "ImageBox", x.a),
				_ = g.a.wrapped(e => o.a.createElement("p", e), "Caption", x.a),
				O = g.a.div("Placeholder", x.a),
				C = g.a.wrapped(({
					className: e,
					e: t,
					...n
				}) => {
					const r = t === h.D ? s.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : s.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return o.a.createElement(O, y({
						className: e,
						style: {
							"--placeholder-content-text": `'${r}'`
						}
					}, n))
				}, "Placeholder", x.a),
				S = ({
					c: e,
					x: t,
					y: n
				}, s) => o.a.createElement("div", {
					className: x.a.MediaWrapper
				}, o.a.createElement(u.a, {
					height: n,
					isListing: !1,
					key: s,
					showCentered: !0,
					showFull: !0,
					width: t
				}, o.a.createElement(d.a, {
					isListing: !1,
					source: e,
					height: n,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				k = (e, t, n) => {
					const s = e.c;
					let r = "";
					return n && (n.e === h.s ? r = n.s.u : n.e === h.r ? r = n.s.gif : n.e === h.t && (r = (e => {
						const t = v.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), r ? o.a.createElement(w, {
						href: r,
						key: t,
						title: s
					}, s || r) : null
				},
				j = (e, t, n, s, r, a) => {
					const d = h.E(n, e.id);
					if (s) return [k(e, t, d)];
					const l = [];
					return d ? d.e === h.s ? l.push((({
						id: e,
						s: t
					}, n, s, r) => o.a.createElement("div", {
						className: Object(i.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: s
						})
					}, o.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: n,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, o.a.createElement(E, {
						altText: r,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(d, t, !!e.c, a)) : d.e === h.r ? l.push((({
						id: e,
						ext: t,
						s: n
					}, s, r) => {
						if (Object(p.f)(e)) {
							const a = t || Object(p.e)(e);
							return o.a.createElement("div", {
								className: Object(i.a)(x.a.MediaWrapper, {
									[x.a.mHasCaption]: r
								})
							}, o.a.createElement(w, {
								href: a,
								key: s,
								target: "_blank"
							}, n.mp4 ? o.a.createElement("video", {
								className: x.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, o.a.createElement("source", {
								src: n.mp4
							})) : {
								originalSource: a
							}))
						}
						return o.a.createElement("div", {
							className: Object(i.a)(x.a.MediaWrapper, {
								[x.a.mHasCaption]: r
							})
						}, o.a.createElement(u.a, {
							height: n.y,
							isListing: !1,
							key: s,
							showCentered: !0,
							showFull: !0,
							width: n.x
						}, o.a.createElement(m.a, {
							height: n.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: n.mp4,
							width: n.x,
							postId: e,
							source: n.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === h.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: n,
						y: s,
						isGif: r
					}, a, d, l) => o.a.createElement("div", {
						className: Object(i.a)(x.a.MediaWrapper, {
							[x.a.mHasCaption]: d
						})
					}, o.a.createElement(u.a, {
						height: s,
						isListing: !1,
						isVideo: !0,
						key: a,
						showCentered: !0,
						showFull: !0,
						width: n
					}, o.a.createElement(c.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: r,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: r
					}))))(d, t, !!e.c, r)) : l.push(((e, t) => o.a.createElement(C, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => o.a.createElement(_, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return I
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "h", (function() {
				return D
			})), n.d(t, "g", (function() {
				return B
			})), n.d(t, "i", (function() {
				return M
			})), n.d(t, "e", (function() {
				return F
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				r = n("./node_modules/lodash/reduce.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/v4.js"),
				l = n.n(d),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				x = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(x);
			const y = 1e3,
				v = 1e3;
			var w;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(w || (w = {}));
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = w.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = w.Inside, setTimeout(() => {
							this.mouseLocation === w.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, y)
					}, this.onMouseOut = () => {
						this.mouseLocation = w.Outside, setTimeout(() => {
							this.mouseLocation !== w.Inside && this.setState({
								tooltipOpen: !1
							})
						}, v)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = h.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: h.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, r;
					t.e === p.s ? (n = t.s.x, s = t.s.y, r = t.s.u) : t.e === p.r && (n = t.s.x, s = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? l()() : void 0;
					return r ? a.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: r,
						width: n,
						height: s,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: o,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var _ = Object(u.c)(E),
				O = n("./src/reddit/components/RichTextJson/media.tsx"),
				C = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				S = n("./src/reddit/components/SubredditMention/index.tsx"),
				k = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				j = n("./src/reddit/helpers/richTextJson/index.ts");
			const I = (e, t, n) => {
					const s = e.c || [],
						r = e.l,
						o = [],
						i = s.length;
					for (let a = 0; a < i; a++) {
						const e = s[a];
						o.push(e.e === p.w ? e.t : F(e, t, a))
					}
					const d = c.x[r - 1];
					return a.a.createElement(d, {
						key: n
					}, o)
				},
				N = e => a.a.createElement(c.e, {
					key: e
				}),
				T = (e, t, n, s) => {
					const r = e.c;
					if (!r) return;
					const o = r.length,
						i = [];
					for (let a = 0; a < o; a++) i.push(R(r[a], t, n, a));
					return a.a.createElement(c.c, {
						key: s
					}, i)
				},
				P = (e, t) => {
					const n = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				L = (e, t, {
					renderingObjectInfo: n
				}, s) => {
					const r = e.c,
						o = [],
						i = r.length;
					for (let l = 0; l < i; l++) {
						const e = r[l].c;
						e && e.length && o.push(a.a.createElement(c.g, {
							key: l
						}, e.map((e, s) => R(e, t, {
							renderingObjectInfo: n
						}, s))))
					}
					const d = e.o ? c.i : c.v;
					return a.a.createElement(d, {
						key: s
					}, o)
				},
				R = (e, t, n, s) => {
					switch (e.e) {
						case p.b:
							return T(e, t, n, s);
						case p.c:
							return P(e, s);
						case p.k:
							return I(e, n, s);
						case p.l:
							return N(s);
						case p.p:
							return L(e, t, n, s);
						case p.u:
							return B(e, t, n, s);
						case p.z:
							return D(e, t, n, s)
					}
				},
				D = (e, t, n, s) => {
					const r = e.c,
						o = e.h,
						i = r.length,
						d = o.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = o[c],
							{
								H: s,
								D: r
							} = V(e.a),
							{
								c: i = []
							} = e;
						l.push(a.a.createElement(s, {
							key: c
						}, M(i, t, n))), m[c] = r
					}
					for (let p = 0; p < i; p++) {
						const e = r[p],
							s = e.length,
							o = [];
						for (let r = 0; r < s; r++) {
							const s = m[r],
								{
									c: i = []
								} = e[r];
							o.push(a.a.createElement(s, {
								key: r
							}, M(i, t, n)))
						}
						u.push(a.a.createElement(c.t, {
							key: p
						}, o))
					}
					return a.a.createElement(c.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, l)), a.a.createElement("tbody", null, u))
				},
				B = (e, t, n, s) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const r = e.c[0];
					return r.e !== p.m && r.e !== p.a || !Object(j.f)(r.id) ? a.a.createElement(c.j, {
						key: s
					}, M(e.c, t, n)) : Object(O.b)(r, s, t)
				},
				M = (e, t, n) => {
					const s = [],
						r = e.length;
					for (let o = 0; o < r; o++) {
						const r = e[o];
						if (r.e === p.A) s.push(U(r, o));
						else if (r.e === p.x) s.push(a.a.createElement(C.a, {
							key: o
						}, M(r.c, t, n)));
						else if (r.e === p.n) s.push(a.a.createElement("br", {
							key: o
						}));
						else if (r.e === p.m || r.e === p.a) {
							if (r.id.startsWith("emote|")) {
								const e = p.E(t, r.id);
								e && s.push(a.a.createElement(_, {
									key: o,
									node: r,
									media: e
								}))
							}
						} else s.push(F(r, n, o))
					}
					return s
				},
				F = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const s = U({
								t: e.t,
								f: e.f
							}, 0);
							return Object(k.b)(e.u) ? a.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s) : a.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a
							}, s);
						case p.y:
							return a.a.createElement(S.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return a.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				U = (e, t) => {
					const {
						f: n,
						t: r
					} = e, o = [];
					if (!n) return H(0, r, t);
					const i = Object(s.a)(r);
					let a = 0,
						c = 0;
					const d = n.length;
					for (; a < d; a++) {
						const [e, t, s] = n[a], d = t + s, l = i[t], u = i[d] - l;
						l > c && o.push(H(0, r.substr(c, l - c), `between${a}`)), o.push(H(e, r.substr(l, u), a)), c = l + u
					}
					return c < r.length && o.push(H(0, r.substr(c), `remaining${a}`)), o
				},
				A = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				H = (e, t, n) => {
					let s = t;
					return s = o()(A, (t, s, r) => e & parseInt(r, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				V = e => {
					switch (e) {
						case p.f:
							return {
								H: c.r, D: c.q
							};
						case p.d:
							return {
								H: c.r, D: c.o
							};
						case p.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/SidebarContainer/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("container", o.a)
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, n) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
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
			const u = o.a.wrapped(i.b, "SubredditIcon", d.a),
				m = o.a.wrapped(e => r.a.createElement(a.b, l({}, e, {
					isSponsored: !1,
					source: null
				})), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => r.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, r.a.createElement(l.a, {
						href: `/r/${e}/`
					}, r.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, r.a.createElement(l.b, null)), `r/${e}`))
				}),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = n("./src/reddit/selectors/subredditMention.ts");
			class g extends r.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const y = Object(h.c)(g),
				v = Object(i.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				w = Object(o.b)(v),
				E = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: n,
					userVariant: s,
					rtJsonElementProps: o
				}) => {
					if (!t || !e) return r.a.createElement(y, {
						subredditName: n,
						rtJsonElementProps: o
					});
					switch (s) {
						case b.dd.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: o
							});
						case b.dd.SmIconHc:
							return r.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return r.a.createElement(y, {
								subredditName: n,
								rtJsonElementProps: o
							})
					}
				};
			t.b = w(E)
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
				return b
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
			const m = ({
					border: e,
					small: t,
					...n
				}) => o.a.createElement(i.q, u({}, n, {
					priority: e ? i.b.Primary : i.b.Plain,
					className: Object(l.a)(n.className, d.a.BaseButton),
					size: t ? i.c.S : i.c.M
				})),
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
				h = ({
					buttonType: e,
					border: t,
					small: n,
					...s
				}) => o.a.createElement(i.q, u({}, s, {
					priority: t ? i.b.Secondary : i.b.Plain,
					className: Object(l.a)(s.className, d.a.BaseButton),
					size: n ? i.c.S : i.c.M,
					text: p(e)
				}));
			class b extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
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
						small: s = !1
					} = this.props, r = {
						border: e,
						className: t,
						onClick: this.onClick,
						small: s
					};
					return this.props.userIsSubscriber ? o.a.createElement(h, u({}, r, {
						buttonType: this.props.identifier.type
					})) : o.a.createElement(m, u({}, r, {
						id: n
					}), this.props.children, Object(a.a)({
						type: this.props.identifier.type,
						key: "subscribe"
					}))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
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
				i = ({
					type: e,
					key: t
				}) => o[r({
					type: e
				})][t]()
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/TrackingHelper/index.tsx"),
				r = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				o = n("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(r.a)(Object(s.c)(o.a))
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, n) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TitleTagManager/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-helmet/es/Helmet.js"),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/pageTitle.ts"),
				d = n("./src/reddit/helpers/tabBadging/index.ts"),
				l = n("./src/reddit/selectors/appBadges.ts");
			const u = Object(a.a)(l.c, e => ({
				badgeCount: e
			}));
			class m extends s.Component {
				constructor() {
					super(...arguments), this.title = Object(c.c)().toString(), this.state = {
						badgeCount: 0
					}
				}
				getTitle() {
					const e = this.props.title.length > 0 ? this.props.title : Object(c.c)().toString(),
						t = this.props.badgeCount >= 100 ? "99+" : this.props.badgeCount;
					return this.props.badgeCount > 0 ? `(${t}) ${this.props.title}` : e
				}
				render() {
					return Object(d.b)(this.props.badgeCount > 0), r.a.createElement(o.a, {
						title: this.getTitle()
					})
				}
			}
			t.a = Object(i.b)(u)(m)
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, n) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return T
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "c", (function() {
				return L
			})), n.d(t, "d", (function() {
				return R
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const a = (e, t, n) => s => {
				const r = e(s),
					i = t(s),
					a = !r && i;
				return Object(o.a)(n.baseClassName, s.className, {
					[n.mIsInteractive]: i,
					[n.mIsActive]: r,
					[n.mIsVoteable]: a
				})
			};
			var c = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				d = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				l = n("./src/reddit/models/Vote/index.ts"),
				u = n("./src/reddit/controls/Downvote/index.m.less"),
				m = n.n(u);
			const p = {
					...m.a,
					baseClassName: m.a.Downvote
				},
				h = ({
					voteState: e
				}) => e === l.a.downvoted,
				b = a(h, ({
					interactive: e
				}) => !1 !== e, p);
			var f = e => {
					const t = Object(c.a)();
					return r.a.createElement(d.b, {
						className: b(e),
						compact: e.compact,
						isFilled: t && h(e)
					})
				},
				x = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				g = n("./src/reddit/controls/Upvote/index.m.less"),
				y = n.n(g);
			const v = {
					...y.a,
					baseClassName: y.a.Upvote
				},
				w = ({
					voteState: e
				}) => e === l.a.upvoted,
				E = a(w, ({
					interactive: e
				}) => !1 !== e, v);
			var _ = e => {
					const t = Object(c.a)();
					return r.a.createElement(x.b, {
						className: E(e),
						compact: e.compact,
						isFilled: t && w(e)
					})
				},
				O = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				C = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				S = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				j = n.n(k);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => Object(o.a)({
					[j.a.compact]: e.compact,
					[j.a.dark]: Object(C.b)(Object(O.a)(e)),
					[j.a.nightmode]: e.isNightmode
				}),
				T = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(S.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						...i
					} = e;
					return r.a.createElement("button", I({}, i, {
						className: Object(o.a)(j.a.customDownvote, N(e), {
							[j.a.voted]: e.voteState === l.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				P = Object(i.a)(e => {
					const {
						voteIcons: t
					} = Object(S.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						...i
					} = e;
					return r.a.createElement("button", I({}, i, {
						className: Object(o.a)(j.a.customUpvote, N(e), {
							[j.a.voted]: e.voteState === l.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				L = f,
				R = _
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			})), n.d(t, "a", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/Flair/index.tsx"),
				u = n("./src/reddit/components/SubscribeButton/index.tsx"),
				m = n("./src/reddit/actions/subscription/index.ts");
			var p = Object(i.b)(null, (e, t) => {
					const n = t.widget.id || void 0;
					return {
						onSubscribe: () => e(m.d([t.identifier], !0, n)),
						onSubscriptionsRequested: () => e(m.e()),
						onUnsubscribe: () => e(m.d([t.identifier], !1, n))
					}
				})(n("./src/reddit/components/SubscribeButton/Base.tsx").a),
				h = n("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = n("./src/reddit/constants/componentSizes.ts"),
				f = n("./src/reddit/controls/Button/index.tsx"),
				x = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				y = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				w = n("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				E = n("./src/reddit/models/Flair/index.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				O = n("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				C = n("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				S = n.n(C);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const j = e => o.a.createElement(h.a, {
					className: Object(d.a)(S.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, o.a.createElement("div", {
					className: S.a.container
				}, e.isLoading ? o.a.createElement(x.a, {
					className: S.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: S.a.errorMsg
				}, e.errorMsg || s.fbt._("Something went wrong.", null, {
					hk: "pHwDP"
				})) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(N, k({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(f.o, {
					className: S.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				I = Object(c.c)({
					hideNSFWPref: _.C,
					nightmode: _.V
				}),
				N = Object(i.b)(I)(e => {
					const t = Object(g.a)();
					return o.a.createElement("div", {
						className: S.a.communityItemContainer
					}, o.a.createElement(w.a, {
						widthRight: b.t
					}, o.a.createElement("div", {
						className: S.a.iconContainer
					}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
						className: S.a.subredditIcon,
						src: e.iconUrl || e.communityIcon
					}) : t ? o.a.createElement(y.a, {
						name: "community",
						isFilled: !e.nightmode,
						className: Object(d.a)(S.a.defaultCommunityIcon, {
							[S.a.mNightmode]: e.nightmode
						})
					}) : o.a.createElement(v.a, {
						className: S.a.planetIcon,
						"data-redditstyle": !0
					})), o.a.createElement("div", {
						className: S.a.communityDescriptionContainer
					}, o.a.createElement(a.a, {
						className: S.a.communityName,
						onClick: e.onCommunityNameClick,
						title: Object(O.b)(e.name, e.type),
						to: Object(O.a)(e.name, e.type)
					}, Object(O.b)(e.name, e.type)), o.a.createElement("div", {
						className: S.a.communityInfoContainer
					}, !!e.subscribers && o.a.createElement("p", {
						className: S.a.subscriberCount
					}, s.fbt._({
						"*": "{number} members",
						_1: "1 member"
					}, [s.fbt._plural(e.subscribers, "number")], {
						hk: "6i1wh"
					})), e.isNSFW && o.a.createElement(l.b, {
						flair: {
							type: E.f.Nsfw,
							text: "nsfw"
						}
					}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(x.a, {
						className: Object(d.a)(S.a.communityCta, S.a.smallLoadingIcon),
						sizePx: 12
					}) : o.a.createElement(f.o, {
						className: Object(d.a)(S.a.communityCta, {
							[S.a.showOnHover]: e.showTertiaryButtonOnHover
						}),
						disabled: e.buttonDisabled,
						onClick: () => e.onTertiaryButtonClick(e)
					}, e.tertiaryButtonText) : e.widget ? o.a.createElement(p, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						sendEvent: e.sendEvent,
						small: !0,
						userIsSubscriber: !!e.isSubscribed,
						widget: e.widget
					}) : o.a.createElement(u.a, {
						disabled: e.buttonDisabled,
						getEventFactory: e.getSubscribeEventFactory,
						identifier: {
							name: e.name,
							type: e.type
						},
						small: !0
					})), !!e.description && o.a.createElement("p", {
						title: e.description,
						className: S.a.communityDescription
					}, e.description))
				})
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/posts.ts"),
				r = n("./src/reddit/helpers/name/index.ts");

			function o(e, t) {
				return (t === s.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === s.a.PROFILE ? Object(r.d)(e) : Object(r.c)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, n) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				defaultCommunityIcon: "_1yiD4Wxo0icHUUftoUrBiM",
				mNightmode: "_1yugRWTZEox55lEcLyzzAo"
			}
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "b", (function() {
				return j
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
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/components/PostList/Placeholder.tsx"),
				x = n("./src/reddit/featureFlags/index.ts"),
				g = n("./src/reddit/selectors/experiments/survey.ts"),
				y = n("./src/reddit/selectors/features/predictions/tournaments/index.ts"),
				v = n("./src/reddit/selectors/listings.ts"),
				w = n("./src/reddit/selectors/posts.ts"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				_ = n("./src/reddit/selectors/tracking.ts");

			function O() {
				return Object(p.t)({
					currentProfileName: p.h,
					isCommentPermalink: p.v,
					isCommentsPage: p.w,
					isFrontpage: p.y,
					isPredictionsPage: p.L,
					isProfilePostListing: p.I,
					isTopicPage: p.N,
					pageLayer: e => e
				})
			}
			const C = O(),
				S = {
					apiError: v.c,
					apiPending: v.d,
					measureScrollFPS: x.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(p.O)(e, t),
					loadMore: (e, t) => t.isPredictionsPage && !Object(y.a)(e, t.listingKey) ? null : Object(v.g)(e, t),
					postsById: (e, t) => Object(w.N)(e, {
						...t
					}),
					postIds: Object(o.a)((e, {
						listingKey: t,
						listingName: n,
						isPredictionsPage: s,
						inSubredditOrProfile: r
					}) => {
						if (s) {
							const s = Object(E.F)(e, n);
							return Object(y.i)(e, {
								subredditId: s,
								listingKey: t
							})
						}
						return Object(w.A)(e, t, n, r)
					}),
					subredditsById: E.ab,
					viewportDataLoaded: _.a,
					pageReferrer: p.R,
					postListPlaceholderComponent: () => f.a,
					isNpsScrollSurveyEnabled: g.d
				},
				k = Object(r.c)(S),
				j = (e, {
					isFrontpage: t
				}) => ({
					onBottomViewed: (t, n) => e(l.c(t, n)),
					onFirstPostChanged: t => e(Object(c.a)(t)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: n => {
						t && e(Object(a.a)({
							lastLoadedEnv: "server"
						})), e(d.E(n))
					},
					fireAdPixelsOfType: (t, n) => {
						e(d.u(t, n))
					},
					trackOnPostEnteredViewport: (t, n, s) => {
						e(d.H(t, s))
					},
					trackOnPostExitedViewport: (t, n, s, r, o) => {
						e(d.I(t, s, r, o))
					},
					surveyTriggerScrollCounted: () => e(Object(u.h)())
				}),
				I = Object(s.b)(k, j, (e, t, n) => ({
					...e,
					...t,
					...n,
					postClickEventFactory: (e, t) => Object(b.f)(e, t, "post", n.listingKey, n.hostPostId, n.listingBelowVariant, void 0, n.listingBelowMonthlyVariant),
					postComponentForLayout: e => Object(h.b)({
						...e
					})
				}));
			t.a = e => Object(m.c)(C(I(e)))
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				userIsSubscriber: i.gb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(o.d([t], !0)),
				onSubscriptionsRequested: () => e(o.e()),
				onUnsubscribe: () => e(o.d([t], !1))
			}))
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = {
					[r.P.BEST]: () => s.fbt._("Best", null, {
						hk: "dpKzI"
					}),
					[r.P.HOT]: () => s.fbt._("Hot", null, {
						hk: "Et75P"
					}),
					[r.P.NEW]: () => s.fbt._("New", null, {
						hk: "CDmNl"
					}),
					[r.P.CONTROVERSIAL]: () => s.fbt._("Controversial", null, {
						hk: "4dqPOJ"
					}),
					[r.P.RISING]: () => s.fbt._("Rising", null, {
						hk: "4gCzg6"
					}),
					[r.P.TOP]: () => s.fbt._("Top", null, {
						hk: "40Uy9p"
					}),
					[r.P.AWARDED]: () => s.fbt._("Awarded", null, {
						hk: "1B7nSa"
					})
				},
				i = e => {
					const t = o[e];
					return t && t() || ""
				},
				a = {
					[r.Ub.HOUR]: () => s.fbt._("Now", null, {
						hk: "ZmhY"
					}),
					[r.Ub.DAY]: () => s.fbt._("Today", null, {
						hk: "40Ugu1"
					}),
					[r.Ub.WEEK]: () => s.fbt._("This Week", null, {
						hk: "14tmoK"
					}),
					[r.Ub.MONTH]: () => s.fbt._("This Month", null, {
						hk: "34dbM3"
					}),
					[r.Ub.YEAR]: () => s.fbt._("This Year", null, {
						hk: "14RJsa"
					}),
					[r.Ub.ALL]: () => s.fbt._("All Time", null, {
						hk: "3qt6Ct"
					})
				},
				c = e => {
					const t = a[e];
					return t && t() || ""
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = r.a.createContext({})
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				a = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n
			}) => r.a.createElement("div", {
				className: Object(o.a)(a.a.loadingIcon, t, {
					[a.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				}
			})
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(s)(e => {
					const {
						featureEnabled: s,
						...o
					} = e, i = o;
					return s ? r.a.createElement(t, i) : void 0 !== n ? r.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/models/WhitelistStatus/index.ts");
			const r = (e, t) => {
				const n = e.some(e => e.isNSFW),
					r = t.some(e => e.wls === s.b.NO_ADS);
				return !n && !r
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
		"./src/reddit/helpers/richTextJson/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "d", (function() {
				return m
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/reddit/models/RichTextJson/index.ts");
			const r = "giphy|",
				o = "|downsized";

			function i(e, t) {
				return r + e + (t ? o : "")
			}

			function a(e) {
				return e && 0 === e.indexOf(r)
			}

			function c(e) {
				const t = e && e.media && e.media.mediaMetadata;
				return !!t && Object.keys(t).some(a)
			}

			function d(e) {
				let t = e.substring(r.length);
				return t.indexOf("|") && (t = t.split("|")[0]), `https://giphy.com/gifs/${t}`
			}

			function l(e, t) {
				return (Array.isArray(e) ? e : e.c && Array.isArray(e.c) ? e.c : []).reduce((e, n) => [...e, ...l(n, t)], !Array.isArray(e) && t(e) ? [e] : [])
			}

			function u(e) {
				return l(e, s.F).map(e => e.id)
			}

			function m(e) {
				return l(e, e => e.e === s.o).map(e => e.u)
			}
		},
		"./src/reddit/helpers/trackers/customFeeds.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "f", (function() {
				return u
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = (e, t) => ({
					...Object(s.defaults)(t),
					customFeed: Object(s.customFeedByPath)(t, e),
					source: "custom_feeds"
				}),
				o = e => t => ({
					...r(e, t),
					action: "click",
					noun: "delete"
				}),
				i = e => t => ({
					...r(e, t),
					action: "click",
					noun: "follow"
				}),
				a = e => t => ({
					...r(e, t),
					action: "click",
					noun: "unfollow"
				}),
				c = e => t => ({
					...r(e, t),
					action: "click",
					noun: "duplicate"
				}),
				d = e => t => ({
					...r(e, t),
					action: "click",
					noun: "share"
				}),
				l = e => t => ({
					...r(e, t),
					action: "click",
					noun: "favorite",
					source: "community_nav"
				}),
				u = e => t => ({
					...r(e, t),
					action: "click",
					noun: "unfavorite",
					source: "community_nav"
				})
		},
		"./src/reddit/helpers/trackers/navigation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			n("./src/reddit/constants/categories.tsx");
			var s = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					screen: s.screen(e),
					profile: s.profile(e),
					subreddit: s.subreddit(e)
				}),
				o = e => t => ({
					source: "nav",
					action: "click",
					noun: e,
					...r(t)
				}),
				i = e => t => ({
					...r(t),
					source: "sort_switch",
					action: "click",
					noun: e
				}),
				a = e => t => ({
					...r(t),
					source: "time_sort_switch",
					action: "click",
					noun: e
				})
		},
		"./src/reddit/helpers/trackers/subredditCreation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./src/reddit/helpers/correlationIdTracker.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					source: e,
					noun: "create_community_button",
					action: "click",
					...r.defaults(t),
					actionInfo: r.actionInfo(t, {
						settingValue: t.user.account && t.user.account.isMod ? "existing_mod" : "new_mod"
					}),
					correlationId: Object(s.d)(s.a.SubredditCreation, !0)
				}),
				i = (e, t, n) => o => ({
					source: "community_form",
					noun: "save_community_button",
					action: "click",
					...r.defaults(o),
					actionInfo: r.actionInfo(o, {
						settingValue: e
					}),
					subreddit: {
						id: n,
						name: t.name,
						publicDescription: t.publicDescription,
						nsfw: t.over18,
						accessType: t.type,
						topicTagContents: t.allTags,
						topicTagPrimaryId: t.primaryTagId
					},
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				a = () => e => ({
					source: "community_form",
					noun: "cancel",
					action: "click",
					...r.defaults(e),
					actionInfo: r.actionInfo(e),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				}),
				c = e => t => ({
					source: "community_form",
					noun: "error_message",
					action: "view",
					...r.defaults(t),
					actionInfo: r.actionInfo(t, {
						reason: e
					}),
					correlationId: Object(s.c)(s.a.SubredditCreation)
				})
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "f", (function() {
				return y
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "e", (function() {
				return O
			}));
			var s, r, o = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx"),
				a = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/helpers/isPost.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts"),
				m = n("./src/telemetry/models/Outbound.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const p = e => ({
					...u.defaults(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				h = e => ({
					...u.defaults(e),
					source: r,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: d.f.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, {
					renderingObjectInfo: t,
					pageLayer: n
				}) => {
					if (t && (Object(a.b)(t) || Object(c.b)(t))) return Object(a.b)(t) ? m.SourceElement.Comment : Object(i.w)(n) ? m.SourceElement.PostDetail : Object(i.E)(n) ? m.SourceElement.ListingPostDetail : void 0
				},
				f = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(c.b)(n) && !Object(a.b)(n)) return {
						outbound: void 0
					};
					const r = Object(c.b)(n) ? "postId" : "commentId",
						o = {
							url: `/r/${s}/`,
							sourceElement: b(0, t),
							subredditName: s,
							[r]: n.id
						},
						i = Object(l.A)(e, {
							subredditName: s
						});
					return i ? {
						outbound: {
							...o,
							url: i.url,
							subredditId: i.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				x = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(c.b)(n) && !Object(a.b)(n)) return {};
					const s = Object(c.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.post(e, n.id),
						subreddit: u.subredditById(e, s),
						...f(e, t)
					}
				},
				g = e => t => ({
					...p(t),
					...x(t, e)
				}),
				y = e => t => ({
					...h(t),
					source: "global",
					action: o.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				v = (e, t) => n => ({
					...h(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				w = (e, t) => n => ({
					...h(n),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.ITEM_POST,
					post: u.post(n, t),
					subreddit: u.subredditByName(n, e),
					screen: u.screen(n)
				}),
				E = e => t => ({
					...h(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				_ = e => t => ({
					...h(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				O = e => t => ({
					...h(t),
					subreddit: u.subredditById(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? r.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.compactDownvoteWrapper, n.className)
			}), r.a.createElement(l, {
				className: c.a.compactDownvote,
				isFilled: t
			})) : r.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.downvoteWrapper, n.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Gift/index.m.less": function(e, t, n) {
			e.exports = {
				GiftIcon: "_12P1l1cITUMF05krI6QUSj",
				giftIcon: "_12P1l1cITUMF05krI6QUSj"
			}
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Gift/index.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/hooks/useCoreStyleExperiments.ts");
			const l = c.a.wrapped(e => {
				const t = Object(d.a)();
				return r.a.createElement("i", {
					className: `${Object(o.b)(t?"award":"gift")} ${e.className}`,
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, r.a.createElement(o.a, null, e.desc))
			}, "GiftIcon", a.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, n) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("menu",e.isFilled)} ${e.className}`
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, n) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Pencil/index.m.less"),
				c = n.n(a);
			const d = n("./src/lib/lessComponent.tsx").a.wrapped(e => {
				const t = Object(o.a)();
				return r.a.createElement("i", {
					className: `${Object(i.b)(t?"edit":"pencil",e.isFilled)} ${e.className}`
				})
			}, "PencilIcon", c.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("plus", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("share", e.isFilled), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.b = ({
				compact: e,
				isFilled: t,
				...n
			}) => e ? r.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.compactUpvoteWrapper, n.className)
			}), r.a.createElement(l, {
				className: c.a.compactUpvote,
				isFilled: t
			})) : r.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.upvoteWrapper, n.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, n) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
			}), r.a.createElement("path", {
				d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
			}))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("title", null, "Hot"), r.a.createElement("path", {
				d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
			}))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), r.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Planet/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("title", null, "Planet"), r.a.createElement("path", {
				d: "M16.74,11.87A7,7,0,0,0,8.13,3.26c-3-2-5.59-2.8-6.63-1.76S1.25,5.15,3.28,8.16a6.95,6.95,0,0,0,8.57,8.57c3,2,5.61,2.82,6.66,1.78S18.76,14.87,16.74,11.87Zm0,4.86c-.53.53-1.77.26-3.33-.61h0a25.48,25.48,0,0,1-5.32-4.19c-.46-.46-.9-.93-1.31-1.39h0c-.41-.46-.79-.92-1.15-1.37h0c-.35-.45-.68-.89-1-1.32h0C4.36,7.41,4.1,7,3.88,6.6,3,5,2.74,3.8,3.27,3.27S5,3,6.6,3.88A6.78,6.78,0,0,0,4.52,5.65a23.14,23.14,0,0,0,4.27,5.56,22.92,22.92,0,0,0,5.56,4.27,6.79,6.79,0,0,0,1.77-2.08C17,15,17.26,16.2,16.73,16.73Z"
			}))
		},
		"./src/reddit/icons/svgs/Rising/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
			})))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, n) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = n.n(a);
			t.a = Object(o.a)(e => r.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/ContentGate.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.CustomFeedDoesNotExist = "CustomFeedDoesNotExist", e.GoldSubreddit = "GoldSubreddit", e.Nsfw = "Nsfw", e.NsfwCustomFeed = "NsfwCustomFeed", e.PrivateSubreddit = "PrivateSubreddit", e.ProfileDoesNotExist = "ProfileDoesNotExist", e.ProfileDeleted = "ProfileDeleted", e.ProfileSuspended = "ProfileSuspended", e.ProfileBlockedForLegalReason = "ProfileBlockedForLegalReason", e.QuarantinedSubreddit = "QuarantinedSubreddit", e.SubredditBanned = "SubredditBanned", e.SubredditBlockedForLegalReason = "SubredditBlockedForLegalReason", e.SubredditDoesNotExist = "SubredditDoesNotExist", e.PostBlockedForLegalReason = "PostBlockedForLegalReason"
				}(s || (s = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function r(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/pages/Multireddit/index.m.less": function(e, t, n) {
			e.exports = {
				sidebar: "_398UHHJSXVL0IJVGTkTa9B",
				planetIcon: "_1r6EMjMnKM7lL8H8H3Vs4t",
				emptyMessageText: "_1rJj6Qsj1uaYq4iwCBZX9_",
				emptyMessage: "_23HF_LA75CXQvFP4nnxWQD"
			}
		},
		"./src/reddit/pages/Multireddit/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/lodash/fromPairs.js"),
				o = n.n(r),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/constants/index.ts"),
				u = n("./src/lib/extractQueryParams/index.ts"),
				m = n("./src/lib/makeListingKey/index.ts"),
				p = n("./src/lib/pageTitle.ts"),
				h = n("./src/reddit/actions/multireddit/index.ts"),
				b = n("./src/reddit/constants/parameters.ts"),
				f = n("./src/reddit/helpers/trackers/screenview.ts"),
				x = n("./src/reddit/components/ContentGate/index.tsx"),
				g = n("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				y = n("./src/reddit/components/JumpToContent/index.tsx"),
				v = n("./src/reddit/components/ListingPostList/index.tsx"),
				w = n("./src/reddit/components/MultiredditSidebar/index.tsx"),
				E = n("./src/lib/classNames/index.ts"),
				_ = n("./src/reddit/components/Flair/index.tsx"),
				O = n("./src/reddit/actions/modal.ts"),
				C = n("./src/reddit/constants/modals.ts"),
				S = n("./src/reddit/icons/fonts/Pencil/index.tsx"),
				k = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				j = n("./src/reddit/icons/svgs/User/index.tsx"),
				I = n("./src/reddit/models/Multireddit/index.ts"),
				N = n("./src/reddit/components/MultiredditTopBar/VisibilitySwitch/index.m.less"),
				T = n.n(N);
			const P = Object(c.b)(null, e => ({
					onEditClicked: () => e(Object(O.h)(C.a.MULTIREDDIT_EDIT))
				})),
				L = {
					[I.e.Public]: {
						icon: a.a.createElement(j.a, {
							className: Object(E.a)(T.a.icon, T.a.public)
						}),
						text: s.fbt._("Public", null, {
							hk: "8ZeHp"
						})
					},
					[I.e.Hidden]: {
						icon: a.a.createElement(j.a, {
							className: Object(E.a)(T.a.icon, T.a.public)
						}),
						text: s.fbt._("Hidden", null, {
							hk: "1qlAJf"
						})
					},
					[I.e.Private]: {
						icon: a.a.createElement(k.a, {
							className: Object(E.a)(T.a.icon, T.a.private)
						}),
						text: s.fbt._("Private", null, {
							hk: "2HVerT"
						})
					}
				};
			var R = P(e => {
					const {
						multireddit: t,
						onEditClicked: n
					} = e;
					return a.a.createElement(a.a.Fragment, null, L[t.visibility].icon, L[t.visibility].text, a.a.createElement("button", {
						className: T.a.button,
						onClick: n
					}, a.a.createElement(S.a, {
						className: T.a.pencilIcon
					})))
				}),
				D = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				B = n("./src/reddit/components/RichTextJson/index.tsx"),
				M = n("./src/reddit/constants/postLayout.ts"),
				F = n("./src/reddit/contexts/PageLayer/index.tsx"),
				U = n("./src/reddit/controls/InternalLink/index.tsx"),
				A = n("./src/reddit/helpers/name/index.ts"),
				H = n("./src/reddit/models/Flair/index.ts"),
				V = n("./src/reddit/selectors/multireddit.ts"),
				G = n("./src/reddit/selectors/user.ts"),
				W = n("./src/reddit/actions/subscription/index.ts"),
				z = n("./src/reddit/components/MultiredditTopBar/Button/index.m.less"),
				K = n.n(z);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var J = a.a.memo(({
					className: e,
					onClick: t,
					children: n,
					hoverText: s,
					text: r,
					icon: o,
					...i
				}) => a.a.createElement("button", q({
					className: Object(E.a)(e, K.a.button, s ? K.a.withHover : null),
					onClick: t
				}, i), a.a.createElement("span", {
					className: K.a.icon
				}, o), r && a.a.createElement("span", {
					className: K.a.text
				}, r), s && a.a.createElement("span", {
					className: K.a.hoverText
				}, s), n)),
				Y = n("./src/reddit/components/TrackingHelper/index.tsx"),
				Z = n("./src/reddit/helpers/trackers/customFeeds.ts"),
				X = n("./src/reddit/icons/fonts/Plus/index.tsx"),
				Q = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				$ = n("./src/reddit/components/MultiredditTopBar/FollowButton/index.m.less"),
				ee = n.n($);
			const te = Object(c.b)(null, (e, t) => ({
				onFollowClick: () => {
					e(Object(W.b)(t.multireddit.url)), t.multireddit.isFollowed ? t.sendEvent(Object(Z.g)(t.multireddit.url)) : t.sendEvent(Object(Z.d)(t.multireddit.url))
				}
			}));
			var ne = Object(Y.c)(te(e => a.a.createElement(J, {
					className: Object(E.a)(ee.a.button, e.multireddit.isFollowed ? ee.a.isFollowed : null),
					hoverText: e.multireddit.isFollowed ? s.fbt._("Unfollow", null, {
						hk: "PezOE"
					}) : void 0,
					icon: e.multireddit.isFollowed ? a.a.createElement(Q.a, null) : a.a.createElement(X.a, null),
					onClick: e.onFollowClick,
					text: e.multireddit.isFollowed ? s.fbt._("Following", null, {
						hk: "1wsu4d"
					}) : s.fbt._("Follow", null, {
						hk: "1DZLve"
					})
				}))),
				se = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				re = n("./src/reddit/components/OverflowMenu/index.tsx"),
				oe = n("./src/reddit/controls/Dropdown/Row.tsx"),
				ie = n("./src/reddit/selectors/activeModalId.ts"),
				ae = n("./src/reddit/components/MultiredditTopBar/OverflowMenu/index.m.less"),
				ce = n.n(ae);
			const de = Object(d.c)({
				isConfirmDeleteOpen: e => "MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION" === Object(ie.a)(e),
				showOwnerButtons: (e, t) => Object(V.c)(e, t.multireddit.url)
			});
			var le = Object(c.b)(de, (e, t) => ({
					deleteConfirmed: () => e(Object(h.deleteRequested)(t.multireddit.url)),
					onDuplicateClicked: () => e(Object(O.h)(C.a.MULTIREDDIT_DUPLICATE)),
					onEdit: () => e(Object(O.h)(C.a.MULTIREDDIT_EDIT)),
					toggleConfirmDelete: () => e(Object(O.i)("MULTIREDDIT_TOP_BAR_DELETE_CONFIRMATION"))
				}))(Object(Y.c)(e => {
					const {
						deleteConfirmed: t,
						isConfirmDeleteOpen: n,
						multireddit: r,
						onDuplicateClicked: o,
						onEdit: i,
						sendEvent: c,
						showOwnerButtons: d,
						toggleConfirmDelete: l
					} = e;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(re.b, {
						className: ce.a.button,
						dropdownId: "MULTIREDDIT_TOP_BAR_OVERFLOW",
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, d && a.a.createElement(oe.b, {
						displayText: s.fbt._("Edit Details", null, {
							hk: "q4B9D"
						}),
						onClick: i
					}), a.a.createElement(oe.b, {
						displayText: s.fbt._("Duplicate", null, {
							hk: "4DZaW1"
						}),
						onClick: o
					}), d && a.a.createElement(oe.b, {
						className: Object(E.a)(ce.a.warning),
						displayText: s.fbt._("Delete Custom Feed", null, {
							hk: "3QSOzN"
						}),
						onClick: l
					})), n && a.a.createElement(se.a, {
						toggleModal: l,
						onConfirm: t,
						actionText: s.fbt._("Delete", null, {
							hk: "3PGKcp"
						}),
						cancelActionText: s.fbt._("Keep", null, {
							hk: "1nkPG8"
						}),
						headerText: s.fbt._("Delete Custom Feed?", null, {
							hk: "szoK6"
						}),
						modalText: s.fbt._("Are you sure you would like to delete this Custom Feed? This will not affect the communities you have added.", null, {
							hk: "2GGkLQ"
						}),
						trackClick: () => {
							c(Object(Z.a)(r.url))
						},
						withOverlay: !0
					}))
				})),
				ue = n("./node_modules/lodash/noop.js"),
				me = n.n(ue),
				pe = n("./src/config.ts"),
				he = n("./src/lib/copyToClipboard/index.ts"),
				be = n("./src/reddit/actions/toaster.ts"),
				fe = n("./src/reddit/actions/tooltip.ts"),
				xe = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				ge = n("./src/reddit/controls/Dropdown/index.tsx"),
				ye = n("./src/reddit/icons/fonts/Share/index.tsx"),
				ve = n("./src/reddit/models/Toast/index.ts"),
				we = n("./src/reddit/selectors/tooltip.ts"),
				Ee = n("./src/reddit/components/MultiredditTopBar/ShareMenu/index.m.less"),
				_e = n.n(Ee);
			const Oe = "MULTIREDDIT_TOP_BAR_SHARE",
				Ce = Object(xe.a)(ge.a),
				Se = Object(d.c)({
					isConfirmPublicOpen: e => "MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION" === Object(ie.a)(e),
					isDropdownOpen: Object(we.b)(Oe),
					isUpdatePending: e => e.multireddits.api.edit.pending
				}),
				ke = Object(c.b)(Se, (e, t) => ({
					copyLink: () => {
						if (Object(he.a)(pe.a.redditUrl + t.multireddit.url)) {
							const t = Object(be.d)(s.fbt._("Copied link!", null, {
								hk: "2IxdQz"
							}), ve.b.SuccessCommunity);
							e(Object(be.e)(t))
						} else {
							const t = Object(be.d)(s.fbt._("Something went wrong", null, {
								hk: "GmeVt"
							}), ve.b.Error);
							e(Object(be.e)(t))
						}
					},
					toggleConfirmPublic: () => e(Object(O.i)("MULTIREDDIT_TOP_BAR_PUBLIC_CONFIRMATION")),
					toggleDropdown: () => {
						e(Object(fe.h)({
							tooltipId: Oe
						})), t.sendEvent(Object(Z.e)(t.multireddit.url))
					},
					updateVisibility: n => e(Object(h.editRequested)({
						multipath: t.multireddit.url,
						visibility: n
					}))
				}));
			class je extends a.a.Component {
				constructor() {
					super(...arguments), this.onShareButtonClick = async () => {
						this.props.multireddit.visibility === I.e.Private ? this.props.toggleConfirmPublic() : this.props.toggleDropdown()
					}, this.onMakePublicConfirm = () => {
						this.props.updateVisibility(I.e.Public)
					}
				}
				render() {
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(J, {
						className: _e.a.shareMenu,
						disabled: this.props.isUpdatePending,
						icon: a.a.createElement(ye.a, {
							className: _e.a.shareIcon
						}),
						id: Oe,
						onClick: this.onShareButtonClick,
						text: s.fbt._("Share", null, {
							hk: "2e7dE3"
						})
					}, a.a.createElement(Ce, {
						isOpen: this.props.isDropdownOpen,
						tooltipId: Oe,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, a.a.createElement(oe.b, {
						displayText: s.fbt._("Copy link", null, {
							hk: "1RMEDS"
						}),
						onClick: this.props.copyLink
					}))), this.props.isConfirmPublicOpen && a.a.createElement(se.a, {
						toggleModal: this.props.toggleConfirmPublic,
						onConfirm: this.onMakePublicConfirm,
						actionText: s.fbt._("Make public", null, {
							hk: "2jdbN"
						}),
						headerText: s.fbt._("Make Custom Feed Public?", null, {
							hk: "3UHhCD"
						}),
						modalText: a.a.createElement(a.a.Fragment, null, s.fbt._("This Custom Feed is currently private.", null, {
							hk: "15Ymz2"
						}), a.a.createElement("br", null), a.a.createElement("br", null), s.fbt._("Would you like to make it public so you can share it with other people?", null, {
							hk: "3IbJao"
						})),
						trackClick: me.a,
						withOverlay: !0
					}))
				}
			}
			var Ie = Object(Y.c)(ke(je)),
				Ne = n("./src/reddit/components/MultiredditTopBar/index.m.less"),
				Te = n.n(Ne);
			const {
				fbt: Pe
			} = n("./node_modules/fbt/lib/FbtPublic.js"), Le = Object(d.c)({
				isLoggedIn: G.K,
				layout: (e, t) => M.e[Object(F.O)(e, t)],
				userIsOwner: (e, t) => Object(V.c)(e, t.multireddit.url)
			}), Re = Object(c.b)(Le), De = Object(F.t)(), Be = {};
			var Me = De(Re(e => a.a.createElement("div", {
					className: Te.a.container
				}, a.a.createElement("div", {
					className: Object(E.a)(Te.a.layoutContainer, e.layout === M.d.Card ? Te.a.layoutCard : null)
				}, a.a.createElement("img", {
					className: Te.a.icon,
					src: e.multireddit.icon
				}), a.a.createElement("div", {
					className: Te.a.content
				}, a.a.createElement("div", {
					className: Te.a.header
				}, a.a.createElement("h1", {
					className: Te.a.multiredditName
				}, e.multireddit.displayText), e.multireddit.isNSFW && a.a.createElement(_.b, {
					className: Te.a.flair,
					flair: {
						type: H.f.Nsfw,
						text: "nsfw"
					}
				})), a.a.createElement("div", {
					className: Te.a.meta
				}, Pe._({
					"*": "{communitiesCount} communities in this custom feed",
					_1: "1 community in this custom feed"
				}, [Pe._plural(e.multireddit.subredditCount, "communitiesCount")], {
					hk: "12Ej7M"
				}), a.a.createElement("span", null, " • "), e.userIsOwner ? a.a.createElement(R, {
					multireddit: e.multireddit
				}) : a.a.createElement(a.a.Fragment, null, Pe._("Curated by {multiredditFeedAuthorLink}", [Pe._param("multiredditFeedAuthorLink", a.a.createElement(U.a, {
					className: Te.a.usernameLink,
					to: `/${Object(A.d)(Object(I.i)(e.multireddit.url))}`
				}, Object(A.d)(Object(I.i)(e.multireddit.url))))], {
					hk: "3AKmgH"
				}))), a.a.createElement("div", {
					className: Te.a.descriptionContainer
				}, e.multireddit.descriptionRtJson ? a.a.createElement(B.a, {
					content: e.multireddit.descriptionRtJson,
					rtJsonElementProps: Be
				}) : a.a.createElement(D.a, {
					html: e.multireddit.descriptionHtml || e.multireddit.description
				}))), a.a.createElement("div", {
					className: Te.a.actions
				}, !e.userIsOwner && e.isLoggedIn && a.a.createElement(ne, {
					multireddit: e.multireddit
				}), a.a.createElement(Ie, {
					multireddit: e.multireddit
				}), e.isLoggedIn && a.a.createElement(le, {
					multireddit: e.multireddit
				})))))),
				Fe = n("./src/reddit/components/TitleTagManager/index.tsx"),
				Ue = n("./src/reddit/icons/svgs/Planet/index.tsx"),
				Ae = n("./src/reddit/layout/page/Listing/index.tsx"),
				He = n("./src/reddit/models/ContentGate.ts"),
				Ve = n("./src/reddit/pages/Multireddit/index.m.less"),
				Ge = n.n(Ve);
			const We = e => a.a.createElement("div", {
					className: Ge.a.emptyMessage
				}, a.a.createElement(Ue.a, {
					className: Ge.a.planetIcon
				}), a.a.createElement("div", {
					className: Ge.a.emptyMessageText
				}, e.multireddit && 0 !== e.multireddit.subredditCount ? s.fbt._("There are no posts in this custom feed", null, {
					hk: "16ubpi"
				}) : s.fbt._("There are 0 communities in this custom feed", null, {
					hk: "tKC2v"
				}))),
				ze = Object(F.t)({
					currentMultireddit: F.c,
					pageLayer: e => e
				}),
				Ke = (e, {
					match: t
				}) => t.params.sort || l.P.HOT,
				qe = (e, {
					location: t
				}) => o()([...Object(u.a)(t.search)]),
				Je = (e, t) => {
					const n = Object(F.d)(e, {
						pageLayer: t.pageLayer
					});
					if (n) return n.url; {
						const {
							currentMultireddit: e
						} = t;
						if (!e) return "";
						const {
							multiredditName: n,
							username: s
						} = e;
						return Object(I.h)(s || "me", n)
					}
				},
				Ye = Object(d.a)(Ke, qe, Je, (e, t, n) => Object(m.a)(n, e, t)),
				Ze = Object(d.a)(qe, e => {
					const t = b.x in e && e[b.x].toUpperCase();
					return "string" == typeof t && t in l.Ub ? l.Ub[t] : l.Vb
				}),
				Xe = Object(d.c)({
					listingKey: Ye,
					listingName: Je,
					multireddit: F.d,
					over18Prefs: G.cb,
					sort: Ke,
					timeSort: Ze,
					pageTitle: (e, t) => {
						if (t.currentMultireddit) {
							const {
								multiredditName: n,
								username: s
							} = t.currentMultireddit;
							return Object(V.f)(e, {
								multiredditName: n,
								username: s || Object(G.i)(e)
							})
						}
						return Object(p.c)().toString()
					}
				});
			class Qe extends a.a.Component {
				constructor() {
					super(...arguments), this.noPosts = () => a.a.createElement(We, {
						multireddit: this.props.multireddit
					})
				}
				renderContent() {
					const {
						listingKey: e,
						listingName: t,
						match: {
							params: {
								username: n
							}
						},
						multireddit: s,
						over18Prefs: r,
						sort: o,
						timeSort: i
					} = this.props;
					return s ? s.isNSFW && !r ? a.a.createElement(x.default, {
						contentGateType: He.a.NsfwCustomFeed
					}) : a.a.createElement(Ae.a, {
						className: this.props.className,
						content: a.a.createElement(a.a.Fragment, null, s && a.a.createElement(g.a, {
							sort: o,
							baseUrl: n ? s.url.replace(/\/$/, "") : `/me/m/${s.name}`,
							timeSort: i
						}), a.a.createElement(y.a, null), a.a.createElement(v.a, {
							listingKey: e,
							listingName: t,
							listingViewed: (t, n) => Object(f.f)(e, o, n, t, i),
							noPostsComponent: this.noPosts,
							onLoadMore: this.props.onLoadMorePosts,
							inSubredditOrProfile: !1
						})),
						contentNavBar: s ? a.a.createElement(a.a.Fragment, null, Object(I.f)(s) && a.a.createElement(Me, {
							multireddit: s
						})) : null,
						fitPageToContent: !0,
						sidebar: s ? a.a.createElement(w.a, {
							className: Ge.a.sidebar,
							listingKey: e,
							listingName: t,
							multireddit: s,
							multiUsername: n
						}) : null
					}) : a.a.createElement(x.default, {
						contentGateType: He.a.CustomFeedDoesNotExist
					})
				}
				render() {
					const {
						pageTitle: e
					} = this.props;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(Fe.a, {
						title: e
					}), this.renderContent())
				}
			}
			const $e = ze(Object(c.b)(Xe, (e, t) => ({
				onLoadMorePosts: () => e(Object(h.moreOfMyMultiRequested)({
					sort: t.match.params.sort,
					multiredditName: t.match.params.multiredditName,
					username: t.match.params.username
				}))
			}))(Qe));
			t.default = e => a.a.createElement($e, e)
		},
		"./src/reddit/selectors/experiments/coreStyles.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => s.bc.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: s.Vb
			})
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
						experimentEligibilitySelector: o.K,
						experimentName: s.tb
					});
					return !(!t || Object(s.wd)(t))
				},
				a = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: o.K,
						experimentName: s.tb
					}) === s.Gb.ListingEnabled
				}
		},
		"./src/reddit/selectors/focusedVerticalSuggestion.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "h", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "d", (function() {
				return v
			}));
			var s = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/selectors/posts.ts"),
				o = n("./src/reddit/selectors/subreddit.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = (e, t) => {
					const n = e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t];
					if (n) {
						const t = Object(o.T)(e, {
							subredditId: n
						});
						return t && t.displayText || ""
					}
					return ""
				},
				c = (e, t) => e.focusedVerticals.interactedSubredditIds && e.focusedVerticals.interactedSubredditIds[t] || "",
				d = e => e.focusedVerticals.components.dismissed,
				l = [],
				u = (e, t) => {
					const n = m(e, t);
					if (!n) return l;
					const s = Object(o.X)(e, {
						subredditName: n.name
					});
					return s && s.postIds && s.postIds.length ? s.postIds : l
				},
				m = (e, t) => {
					const n = e.focusedVerticals.recommendedSubredditIds && e.focusedVerticals.recommendedSubredditIds[t];
					return n ? Object(o.T)(e, {
						subredditId: n
					}) : null
				},
				p = (e, t, n, s, o) => {
					const i = o.find(e => e <= t) || -1,
						a = o.find(e => e > t) || 1 / 0;
					return t !== a && t !== i && (!(i + n > t) && (!(t + n > a) && !((e, t, n) => {
						const s = n[t - 1],
							o = n[t],
							i = o && Object(r.D)(e, {
								postId: s
							}) || null,
							a = o && Object(r.D)(e, {
								postId: o
							}) || null;
						return i && i.isSponsored || a && a.isSponsored
					})(e, t, s)))
				},
				h = [3],
				b = (e, t, {
					listingKey: n
				}) => {
					const s = t.slice().sort();
					let o = -1;
					const i = Object(r.w)(e, {
							listingKey: n
						}),
						a = [];
					return h.forEach(t => {
						let n = o + t;
						if (!(n >= i.length)) {
							for (; n < i.length && !p(e, n, t, i, s);) n += 1;
							n < i.length && (a.push(n), o = n)
						}
					}), a
				},
				f = e => {
					return e.focusedVerticals.api.pending.focusedVerticalGqlPending
				},
				x = e => {
					return e.focusedVerticals.api.error.focusedVerticalGqlError
				},
				g = e => e.focusedVerticals.category,
				y = e => e.focusedVerticals.lastLoadedEnv,
				v = e => {
					const t = Object(i.J)(e),
						n = s.d.geoSubredditRecommendationDULoggedIn(e),
						r = s.d.geoSubredditRecommendationDULoggedOut(e);
					return t && n || !t && r
				}
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.Yc
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === s.dd.SmIcon || t === s.dd.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const n = Object(i.X)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/Multireddit.4f74c21df0863e23ad3d.js.map