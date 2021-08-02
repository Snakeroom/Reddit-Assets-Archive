// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.defb43db8ad60f2949d6.js
// Retrieved at 8/2/2021, 11:00:07 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ProfileIdCard"], {
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, r = null == e ? 0 : e.length, n = 0, s = []; ++t < r;) {
					var a = e[t];
					a && (s[n++] = a)
				}
				return s
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/constants/index.ts");

			function s(e, {
				showDay: t,
				useUtc: r,
				shortMonths: s,
				locale: a = n.B
			} = {}) {
				const o = new Date(e * n.Nb);
				return new Intl.DateTimeFormat(a, {
					month: s ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: r ? "UTC" : void 0
				}).format(o)
			}
		},
		"./src/lib/humanizeDateTime/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/constants/index.ts");

			function s(e, t = n.B) {
				const r = e * n.Nb;
				return new Date(r).toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "long"
				})
			}
		},
		"./src/lib/humanizeEventTime/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/eventTools/index.ts");

			function o(e, t = s.B) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function i(e, t, r, i = s.B) {
				const c = Object(a.e)(e, t),
					d = new Date(e * s.Nb);
				let l;
				if (c === a.a.Live || r) return n.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return c === a.a.Future ? l = Object(a.d)(e) ? n.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(a.b)(e) >= 5 ? o(d, i) : function(e, t = s.B) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(d, i) : c === a.a.Past && (l = Object(a.d)(e) ? n.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : o(d, i)), `${l} @ ${function(e,t=s.B){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(d,i)}`
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts");
			t.a = (e, t = n.B) => {
				return new Date(1e3 * e).toLocaleString(t, {
					weekday: "short",
					month: "short",
					year: "numeric",
					day: "2-digit",
					hour: "2-digit",
					minute: "2-digit",
					second: "2-digit",
					timeZoneName: "short",
					timeZone: "UTC"
				})
			}
		},
		"./src/reddit/actions/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "g", (function() {
				return g
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const o = (e, t) => Object(s.a)(e, {
				...a,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var i = r("./src/reddit/selectors/blockedRedditors.ts");
			const c = "BLOCKED_REDDITORS_LIST__ADD",
				d = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				m = "BLOCKED_REDDITORS_LIST__LOADED",
				u = "BLOCKED_REDDITORS_LIST__PENDING",
				p = Object(n.a)(c),
				f = Object(n.a)(d),
				b = Object(n.a)(l),
				x = Object(n.a)(m),
				h = Object(n.a)(u),
				g = () => async (e, t, {
					gqlContext: r
				}) => {
					const n = t(),
						s = Object(i.a)(n);
					if (Object(i.b)(n) || s.timestamp && Date.now() - s.timestamp < 36e6) return;
					let a = !1,
						c = "";
					do {
						e(h());
						const t = {
								after: c,
								pageSize: 100
							},
							n = await o(r(), t);
						if (n && n.ok) {
							const {
								data: {
									identity: t
								}
							} = n.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: r,
									edges: n
								} = t.blockedRedditorsInfo;
								if (e(x(n.map(e => e.node.id))), r) {
									const {
										hasNextPage: e,
										endCursor: t
									} = r;
									a = e, c = t || ""
								}
							} else a = !1
						} else {
							a = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(b({
								message: t
							}))
						}
					} while (a)
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/telemetry/index.ts"),
				s = r("./src/reddit/actions/login.ts"),
				a = r("./src/reddit/actions/modal.ts"),
				o = r("./src/reddit/actions/users.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const l = () => async (e, t) => {
				const r = t();
				Object(n.a)(Object(c.d)(r)), e(Object(o.r)({
					forceFetch: !0
				})), await e(Object(a.g)(i.a.SNOOVATAR_MODAL))
			}, m = e => async (t, r) => {
				const o = r();
				Object(n.a)(Object(c.a)(e)(o)), Object(d.J)(o) ? await t(Object(a.h)(i.a.SNOOVATAR_MODAL)) : await t(Object(s.h)())
			}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "h", (function() {
				return o
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return m
			}));
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				a = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				i = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				m = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return F
			})), r.d(t, "d", (function() {
				return B
			})), r.d(t, "c", (function() {
				return D
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "b", (function() {
				return G
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				i = r("./src/reddit/actions/login.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/subscription/constants.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/constants/posts.ts"),
				u = r("./src/lib/makeApiRequest/index.ts"),
				p = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts");
			var b = r("./src/redditGQL/operations/SubscribedSubreddits.json"),
				x = r("./src/lib/makeGqlRequest/index.ts"),
				h = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var g = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				v = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				I = r("./src/reddit/models/GqlTopLevelField.ts"),
				_ = r("./src/reddit/models/User/index.ts");

			function O(e) {
				const t = [],
					r = [],
					n = {},
					s = {},
					{
						followedRedditorsInfo: a
					} = e.identity;
				for (const i of a.edges) {
					if (i.node.__typename !== _.c.AvailableRedditor || !i.node.profile) continue;
					const e = Object(g.a)(i.node.profile);
					n[e.id] = e;
					const {
						isFavorite: r
					} = i.node.profile;
					r && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== I.a.Subreddit) continue;
					const e = Object(v.a)(i.node);
					s[e.id] = e;
					const {
						isFavorite: t
					} = i.node;
					t && r.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: r,
					profiles: n,
					subreddits: s
				}
			}
			var C = r("./src/reddit/models/Toast/index.ts"),
				P = r("./src/reddit/selectors/profile.ts"),
				E = r("./src/reddit/selectors/subreddit.ts"),
				j = r("./src/reddit/selectors/subscriptions.ts"),
				N = r("./src/reddit/selectors/user.ts");
			const k = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				y = Object(a.a)(d.c),
				S = Object(a.a)(d.b),
				w = Object(a.a)(d.a),
				U = Object(a.a)(d.h),
				F = (Object(a.a)(d.i), Object(a.a)(d.g), () => async (e, t, {
					gqlContext: r
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(S());
					const s = await (e => Object(x.a)(e, b))(r());
					if (s.ok) {
						const t = O(s.body.data);
						e(y(t))
					} else e(w({
						error: s.error
					}))
				}),
				T = (e, t) => t.type === m.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				B = (e, t, r) => async (a, d, {
					apiContext: b
				}) => {
					let x = e.map(e => e.type === m.a.SUBREDDIT ? {
						id: Object(E.D)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(P.m)(d(), e.name),
						name: `${s.dc}${e.name}`,
						type: e.type
					});
					if (!Object(N.J)(d())) return a(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void a(Object(i.j)());
					const g = Object(N.j)(d());
					if (g) {
						const t = x.length,
							r = e.length;
						if (x = x.filter(e => !T(g, e)), (e = e.filter(e => !T(g, e))).length !== r || x.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							a(Object(l.f)(Object(l.e)(e, C.b.Error)))
						}
						if (!e.length && !x.length) return
					}
					if (a(U({
							identifiers: x,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(j.b)(d()),
							userIsSubscriber: t,
							widgetId: r
						})), (await ((e, {
							subredditIds: t,
							subredditNames: r,
							subscribe: n
						}) => Object(u.a)(Object(p.a)(e, [f.a]), {
							method: s.hb.POST,
							endpoint: Object(h.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: n ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: r && r.join(",") || void 0,
								api_type: "json"
							}
						}))(b(), {
							subredditNames: x.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const r = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : n.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [n.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = n.fbt._("Sucсessfully followed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "1S5AXJ"
							}),
							i = n.fbt._("Sucсessfully unfollowed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "2XWHyB"
							}),
							c = n.fbt._("Sucсessfully joined {communityname}", [n.fbt._param("communityname", r)], {
								hk: "3Al8aF"
							}),
							d = n.fbt._("Sucсessfully left {communityname}", [n.fbt._param("communityname", r)], {
								hk: "2w5JFZ"
							});
						a(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : i : t ? c : d
						}))
					} else {
						a(U({
							identifiers: x,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(j.b)(d()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const s = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						a(Object(l.f)(Object(l.e)(s, C.b.Error)))
					}
				}, M = Object(a.a)(d.f), D = e => async (t, r, {
					apiContext: n
				}) => {
					const a = r(),
						o = Object(E.K)(a, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === m.a.SUBREDDIT ? o.name : `u_${o.name}`,
						c = a.subscriptions.favoriteSubredditOrder || [],
						d = a.subscriptions.favoriteProfileOrder || [],
						b = c.indexOf(e.id),
						x = d.indexOf(e.id),
						h = -1 === b && -1 === x,
						g = a.subreddits.models,
						v = a.profiles.models;
					t(M({
						makeFavorite: h,
						identifier: e,
						subredditModels: g,
						profileModels: v
					}));
					const I = {
							type: e.type,
							name: o.name
						},
						_ = () => Object(E.eb)(r(), {
							identifier: I
						});
					(_() || (await t(B([I], !0)), _())) && ((await ((e, t, r) => Object(u.a)(Object(p.a)(e, [f.a]), {
						method: s.hb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(n(), i, h)).ok || (t(M({
						makeFavorite: !h,
						identifier: e,
						subredditModels: g,
						profileModels: v
					})), t(Object(l.f)({
						text: k(),
						kind: C.b.Error
					}))))
				}, L = Object(a.a)(d.d), A = e => async (t, r, {
					apiContext: n
				}) => {
					const a = r().multireddits.models,
						o = () => {
							t(Object(l.f)({
								text: k(),
								kind: C.b.Error
							}))
						},
						i = a[e];
					if (!i) return void o();
					const c = !i.isFavorited;
					t(L({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, r) => Object(u.a)(Object(p.a)(e, [f.a]), {
						method: s.hb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(n(), e, c)).ok || (t(L({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: a
					})), o())
				}, R = Object(a.a)(d.e), G = e => async (t, r, {
					apiContext: a
				}) => {
					const o = r(),
						i = o.multireddits.models;
					if (!Object(N.J)(o)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "2I4uia"
								}) : n.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: C.b.Error
							}))
						},
						d = i[e];
					if (!d) return void c();
					const m = !d.isFollowed;
					t(R({
						follow: m,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, r) => Object(u.a)(Object(p.a)(e, [f.a]), {
						method: s.hb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: r ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(a(), e, m)).ok || (t(R({
						follow: !m,
						multiredditPath: e,
						multiredditsModelsState: i
					})), c(m))
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "h", (function() {
				return x
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "g", (function() {
				return C
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/reddit/actions/blockedRedditors.ts"),
				o = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/endpoints/accounts/index.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				m = "USER_BLOCK__LOADED",
				u = "USER_BLOCK__FAILED",
				p = Object(s.a)(l),
				f = Object(s.a)(m),
				b = Object(s.a)(u),
				x = e => async (t, r, {
					apiContext: s
				}) => {
					if (r().blockUser.api.pending[e]) return;
					t(p({
						username: e
					}));
					const d = await Object(i.a)(s(), e),
						l = `error-block-${e}`;
					if (d.ok) d.body.name && t(f(d.body)), d.body.id && t(Object(a.f)(d.body.id)), t(o.g(l)), t(o.f({
						kind: c.b.SuccessCommunity,
						text: n.fbt._("{username} is now blocked", [n.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const r = {
							type: d.error ? d.error.type : "Unknown error",
							username: e
						};
						t(b(r)), t(o.f({
							id: l,
							kind: c.b.Error,
							text: n.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: x(e)
						}))
					}
				}, h = "USER_UNBLOCK__PENDING", g = "USER_UNBLOCK__SUCCESS", v = "USER_UNBLOCK__FAILED", I = Object(s.a)(h), _ = Object(s.a)(g), O = Object(s.a)(v), C = e => async (t, r, {
					apiContext: s
				}) => {
					const l = r(),
						m = Object(d.j)(l),
						u = m ? m.id : void 0,
						p = l.user.blocked.data.filter(t => t.name === e)[0];
					u && (t(I({
						name: e
					})), (await Object(i.c)(s(), u, e)).ok ? (t(_({
						name: e
					})), p && p.id && t(Object(a.h)(p.id)), t(o.f({
						kind: c.b.SuccessCommunity,
						text: n.fbt._("{username} is now unblocked", [n.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(o.f({
						kind: c.b.Error,
						text: n.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(O({
						name: e
					}))))
				}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/actions/chat/toggle.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const m = ({
				onStartChat: e,
				text: t,
				className: r,
				sendEvent: s,
				contextId: o,
				priority: i,
				Icon: c,
				redditStyle: m,
				isFullWidth: u,
				eventSource: p,
				onClick: f,
				onAddUserToQuickReplyList: b,
				children: x
			}) => {
				return a.a.createElement(d.q, {
					onClick: t => {
						if (f && f(t), e(), p === n.awardNotification) return b();
						s(Object(l.b)(o))
					},
					className: r,
					text: t,
					priority: i,
					Icon: c,
					redditStyle: m,
					isFullWidth: u
				}, x)
			};
			m.displayName = "ChatButton";
			const u = Object(o.b)(null, (e, {
				contextId: t,
				userId: r
			}) => ({
				onStartChat: () => {
					e(Object(i.b)(r, t))
				},
				onAddUserToQuickReplyList: () => {
					e(Object(i.a)(r))
				}
			}));
			t.b = u(Object(c.c)(m))
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/reddit/constants/colors.ts");
			const a = {
				backgroundColor: s.b.overlayReportFlow
			};
			t.b = Object(n.a)({
				resolved: {},
				chunkName: () => "CrisisFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("CrisisFlow").then(r.bind(null, "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx")).then(e => e.default),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/CrisisFlow/_CrisisFlow.tsx"
				}
			})
		},
		"./src/reddit/components/EditableImage/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_27zThB3Syksyv8gLdDJqep",
				container: "_27zThB3Syksyv8gLdDJqep",
				HitBox: "_1RlGOQJAoxE66cPOVTH0s",
				hitBox: "_1RlGOQJAoxE66cPOVTH0s",
				Image: "_1te2cn6lvn-YtGSv-hrM7g",
				image: "_1te2cn6lvn-YtGSv-hrM7g",
				ImageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				imageContainer: "_1z4A5-p2XgzMTJUEq3GaXu",
				ImageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				imageUploader: "_3oOZrOdvGjAOYvzKCu-Kjf",
				LoadingIcon: "_3syvcMeczod-NOIewWIb8n",
				loadingIcon: "_3syvcMeczod-NOIewWIb8n",
				EditButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				editButton: "_3A5WTC_rfbijxxWBmIP4Yx",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/ImageInput/index.tsx"),
				i = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/models/ApiRequestState/index.ts"),
				l = r("./src/reddit/components/EditableImage/index.m.less"),
				m = r.n(l);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), p = 80;
			class f extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						apiRequestId: null
					}, this.selectFile = e => {
						const t = Object(d.b)();
						this.setState({
							apiRequestId: t
						}), this.props.onFileSelected(e, t)
					}
				}
				render() {
					const {
						altText: e,
						children: t,
						className: r,
						editButtonClassName: n,
						isLoading: d,
						imageUrl: l
					} = this.props;
					return s.a.createElement("div", {
						className: Object(a.a)(m.a.Container, r)
					}, s.a.createElement("label", {
						className: m.a.HitBox
					}, s.a.createElement("span", {
						className: m.a.ImageContainer,
						role: "presentation"
					}, l ? s.a.createElement("img", {
						alt: e,
						className: m.a.Image,
						src: l
					}) : t), s.a.createElement(o.a, {
						className: m.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !d && s.a.createElement("div", {
						className: Object(a.a)(m.a.EditButton, n)
					}, s.a.createElement(c.a, {
						name: "add_media",
						className: m.a.EditIcon
					}))), d && s.a.createElement(i.a, {
						className: m.a.LoadingIcon,
						sizePx: p
					}))
				}
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			})), r.d(t, "b", (function() {
				return f
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/timeAgo/index.ts"),
				o = r("./src/lib/constants/index.ts"),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/selectors/meta.ts");
			var d = "undefined" == typeof document ? function() {
				return Object(i.e)(c.i) || o.B
			} : function() {
				return document.documentElement.lang || o.B
			};
			var l = function({
				seconds: e,
				...t
			}) {
				var r;
				const n = d(),
					o = {
						...t,
						locale: null !== (r = t.locale) && void 0 !== r ? r : n
					};
				return s.a.createElement(s.a.Fragment, null, Object(a.d)(e, o))
			};
			r("./src/reddit/helpers/dayAgoFormatDate/index.tsx");
			var m = r("./src/lib/humanizeDate/index.ts");
			var u = function({
					seconds: e,
					...t
				}) {
					var r;
					const n = d(),
						a = {
							...t,
							locale: null !== (r = t.locale) && void 0 !== r ? r : n
						};
					return s.a.createElement(s.a.Fragment, null, Object(m.a)(e, a))
				},
				p = r("./src/lib/humanizeDateTime/index.ts");
			var f = function({
				seconds: e,
				locale: t
			}) {
				const r = d(),
					n = null != t ? t : r;
				return s.a.createElement(s.a.Fragment, null, Object(p.a)(e, n))
			};
			r("./src/lib/humanizeEventTime/index.ts");
			r("./src/lib/humanizeUTCDate/index.tsx")
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, r) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return x
			})), r.d(t, "a", (function() {
				return h
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./src/reddit/components/InfoTextTooltip/index.m.less"),
				m = r.n(l),
				u = r("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = u.a.div("Text", m.a),
				b = u.a.div("BottomText", m.a),
				x = e => s.a.createElement(f, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				h = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(b, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				g = Object(o.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				v = Object(c.a)(h, [i.a.Click, i.a.Keydown]),
				I = Object(c.a)(x, [i.a.Click, i.a.Keydown]),
				_ = Object(a.b)(g);
			t.c = _(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(v, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(I, p({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/higherOrderComponents/asTooltip.tsx"),
				o = r("./src/reddit/constants/elementIds.ts"),
				i = r("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const r = Object(a.a)(e, t);
				class n extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(r, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(i.b)(n)
			}
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/config.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				c = r.n(i);
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			class l extends s.a.PureComponent {
				render() {
					const {
						topAwardIcon: e,
						recentAwardings: t,
						username: r
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: i
					} = t, l = n.description ? n.description : n.name;
					return s.a.createElement("a", {
						className: c.a.AwardedLastMonth,
						href: `${a.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: c.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: c.a.count
					}, `+${Object(o.b)(i-1)}`)), s.a.createElement("div", {
						className: c.a.textColumn
					}, d._({
						"*": "Received the {award-name} Award and more in the past 30 days",
						_1: "Received the {award-name} Award in the past 30 days"
					}, [d._param("award-name", n.name), d._plural(i)], {
						hk: "16MJHe"
					})))
				}
			}
			t.a = l
		},
		"./src/reddit/components/ProfileIdCard/Highlight.m.less": function(e, t, r) {
			e.exports = {
				Container: "_2fN55zgax6VM7DyEl9pOmM",
				container: "_2fN55zgax6VM7DyEl9pOmM",
				Body: "_3KNaG9-PoXf4gcuy5_RCVy",
				body: "_3KNaG9-PoXf4gcuy5_RCVy",
				Title: "_26kBTuLE_sSZzRBwU7HLij",
				title: "_26kBTuLE_sSZzRBwU7HLij",
				Label: "_1hNyZSklmcC7R_IfCUcXmZ",
				label: "_1hNyZSklmcC7R_IfCUcXmZ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.m.less": function(e, t, r) {
			e.exports = {
				icon: "_2fopwfsUIdZKFtFUEsud9r",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/lessComponent.tsx"),
				d = r("./src/lib/prettyPrintNumber/index.ts"),
				l = r("./src/reddit/components/HumanDate/index.tsx"),
				m = r("./src/reddit/contexts/InsideOverlay.tsx"),
				u = r("./src/reddit/endpoints/profile/info.ts"),
				p = r("./src/reddit/helpers/karma.ts"),
				f = r("./src/reddit/icons/fonts/index.tsx"),
				b = r("./src/reddit/selectors/profile.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/actions/tooltip.ts"),
				g = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				v = r("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				I = r.n(v);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = c.a.div("Container", I.a),
				C = c.a.div("Body", I.a),
				P = c.a.h5("Title", I.a),
				E = c.a.span("Label", I.a);
			class j extends a.a.Component {
				constructor() {
					super(...arguments), this.toggleTooltip = () => {
						const {
							toggleTooltip: e,
							tooltipId: t
						} = this.props;
						e && t && e(t)
					}
				}
				render() {
					const {
						icon: e,
						label: t,
						title: r,
						tooltip: n,
						tooltipId: s,
						className: o
					} = this.props, i = s && n ? {
						id: s,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return a.a.createElement(O, {
						className: o
					}, a.a.createElement(P, null, r), a.a.createElement(C, null, e, a.a.createElement(E, _({
						key: "label"
					}, i), t)), s && n && a.a.createElement(g.c, {
						caretOnTop: !0,
						tooltipId: s
					}, n))
				}
			}
			var N = Object(o.b)(null, e => ({
					toggleTooltip: t => e(Object(h.h)({
						tooltipId: t
					}))
				}))(Object(m.b)(j)),
				k = r("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				y = r.n(k);
			const S = Object(i.a)(b.j, (e, {
					profileName: t
				}) => Object(x.tb)(e, t), (e, t) => ({
					karma: {
						...u.a,
						...null == t ? void 0 : t.karma,
						total: Object(p.a)(t)
					},
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0
				})),
				w = c.a.div("Container", y.a);

			function U(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			t.a = Object(o.b)(S)(Object(m.b)(e => {
				const {
					karma: t,
					profileCreated: r,
					isOverlay: s,
					subscribers: o,
					className: i,
					highlightClassName: c
				} = e, m = U(s, "karma"), u = U(s, "cakeday"), p = `${n.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[n.fbt._plural(t.fromPosts,"number",Object(d.b)(t.fromPosts,{displayFull:!0}))],{hk:"husfU"})}\n${n.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[n.fbt._plural(t.fromComments,"number",Object(d.b)(t.fromComments,{displayFull:!0}))],{hk:"26iPTL"})}\n${n.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[n.fbt._plural(t.fromAwardsReceived,"number",Object(d.b)(t.fromAwardsReceived,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${n.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[n.fbt._plural(t.fromAwardsGiven,"number",Object(d.b)(t.fromAwardsGiven,{displayFull:!0}))],{hk:"2F1chz"})}`;
				return a.a.createElement(w, {
					className: i
				}, a.a.createElement(N, {
					className: c,
					icon: a.a.createElement(f.a, {
						name: "karma",
						isFilled: !0,
						className: y.a.icon,
						key: "karma"
					}),
					label: Object(d.b)(t.total, {
						displayFull: !0
					}),
					title: n.fbt._("Karma", null, {
						hk: "RtSgN"
					}),
					tooltipId: m,
					tooltip: p
				}), a.a.createElement(N, {
					className: c,
					icon: a.a.createElement(f.a, {
						name: "cake",
						isFilled: !0,
						className: y.a.icon,
						key: "cakeDay"
					}),
					label: a.a.createElement(l.a, {
						seconds: r,
						showDay: !0
					}),
					title: n.fbt._("Cake day", null, {
						hk: "4x2LB5"
					}),
					tooltipId: u,
					tooltip: a.a.createElement(l.c, {
						seconds: r
					})
				}), o > 0 && a.a.createElement(N, {
					className: c,
					icon: a.a.createElement(f.a, {
						name: "user",
						isFilled: !0,
						className: y.a.icon,
						key: "followers"
					}),
					title: n.fbt._("Followers", null, {
						hk: "4ucimK"
					}),
					label: Object(d.b)(o, {
						displayFull: !0
					})
				}))
			}))
		},
		"./src/reddit/components/ProfileIdCard/Preview.m.less": function(e, t, r) {
			e.exports = {
				Widget: "_27SH1SRzjtOk_2NB2YC-FR",
				widget: "_27SH1SRzjtOk_2NB2YC-FR",
				Description: "bVfceI5F_twrnRcVO1328",
				description: "bVfceI5F_twrnRcVO1328",
				Actions: "GQV0F7lQiMOV6EofzopdJ",
				actions: "GQV0F7lQiMOV6EofzopdJ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return B
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/Widgets/Base/index.tsx"),
				i = r("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				c = r.n(i),
				d = a.a.div("dynamicTwoCol", c.a),
				l = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				p = r.n(u),
				f = r("./src/config.ts"),
				b = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./src/reddit/controls/InternalLink/index.tsx"),
				h = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = r("./src/reddit/controls/OutboundLink/index.tsx"),
				v = r("./src/reddit/icons/fonts/index.tsx"),
				I = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				_ = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				O = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				C = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				P = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				E = r.n(P),
				j = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				N = r.n(j);
			var k = ({
					bannerBackgroundImage: e,
					editMode: t,
					isDefaultIcon: r,
					isDeletingBanner: n,
					isDeletingIcon: a,
					isEmployee: o,
					isGold: i,
					isNSFW: c,
					isOwnProfile: d,
					onClickSnoovatar: l,
					onDeleteBanner: m,
					onDeleteIcon: u,
					profileIcon: p,
					title: P,
					userCreated: j,
					username: k,
					url: y
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(O.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: c,
					username: k,
					isDeletingBanner: !!n,
					onDeleteBanner: m
				}), s.a.createElement("div", {
					className: E.a.SnooIconWrapper
				}, d || !p || c ? s.a.createElement(I.a, {
					iconUrl: p,
					isNSFW: c,
					userName: k,
					isProfileIdCard: !0
				}) : s.a.createElement(g.b, {
					href: p
				}, s.a.createElement(I.a, {
					iconUrl: p,
					isNSFW: c,
					userName: k,
					isProfileIdCard: !0
				})), t && !r && (a ? s.a.createElement(h.a, {
					sizePx: 20,
					className: N.a.loadingIcon
				}) : s.a.createElement(v.a, {
					name: "close",
					className: N.a.closeIcon,
					onClick: u
				}))), !t && d && s.a.createElement(x.a, {
					to: "/settings/profile",
					className: E.a.settingsLink
				}, s.a.createElement(v.a, {
					name: "settings",
					className: N.a.settingsIcon
				})), P && s.a.createElement("h4", {
					className: E.a.userTitle
				}, P), s.a.createElement(C.a, {
					className: E.a.userName,
					username: k,
					userCreated: j,
					url: y
				}), o && s.a.createElement(v.a, {
					name: "admin",
					isFilled: !0,
					className: E.a.adminIcon,
					title: b.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), i && s.a.createElement("a", {
					title: b.fbt._("{username} has Reddit Premium", [b.fbt._param("username", k)], {
						hk: "3Fylv"
					}),
					href: `${f.a.redditUrl}/premium`
				}, s.a.createElement(v.a, {
					name: "premium",
					isFilled: !0,
					className: E.a.premiumIcon
				})), d && s.a.createElement(_.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: l
				})),
				y = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var S = ({
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
					editMode: r,
					isDefaultIcon: n,
					isDeletingBanner: a,
					isDeletingIcon: o,
					isEmployee: i,
					isGold: c,
					isNSFW: d,
					isOwnProfile: l,
					onClickSnoovatar: m,
					onDeleteBanner: u,
					onDeleteIcon: p,
					prefersReducedAnimations: f,
					profileIcon: b,
					snoovatarUrl: x,
					title: h,
					userCreated: g,
					username: v,
					url: I
				}) => x ? s.a.createElement(y.a, {
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
					editMode: r,
					isDeletingBanner: a,
					isEmployee: i,
					isGold: c,
					isNSFW: d,
					isOwnProfile: l,
					onClickSnoovatar: m,
					onDeleteBanner: u,
					prefersReducedAnimations: f,
					snoovatarUrl: x,
					title: h,
					userCreated: g,
					username: v,
					url: I
				}) : s.a.createElement(k, {
					bannerBackgroundImage: e,
					editMode: r,
					isDefaultIcon: n,
					isDeletingBanner: a,
					isDeletingIcon: o,
					isEmployee: i,
					isGold: c,
					isNSFW: d,
					isOwnProfile: l,
					onClickSnoovatar: m,
					onDeleteBanner: u,
					onDeleteIcon: p,
					profileIcon: b,
					title: h,
					userCreated: g,
					username: v,
					url: I
				}),
				w = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx");
			const U = a.a.wrapped(o.b, "Widget", p.a),
				F = a.a.div("Description", p.a),
				T = a.a.wrapped(d, "Actions", p.a);
			class B extends s.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: r
					} = this.props;
					return e ? s.a.createElement(l.a, {
						topAwardIcon: t,
						recentAwardings: e,
						username: r
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						className: n,
						footer: a,
						isEmployee: o,
						isGold: i,
						isNSFW: c,
						isOverlay: d,
						isOwnProfile: l,
						profileIcon: u,
						publicDescription: p,
						snoovatarUrl: f,
						title: b,
						url: x,
						userCreated: h,
						username: g,
						isDefaultIcon: v,
						isDeletingIcon: I,
						isDeletingBanner: _,
						onClickSnoovatar: O,
						onDeleteIcon: C,
						onDeleteBanner: P,
						prefersReducedAnimations: E,
						editMode: j,
						isNftPreview: N
					} = this.props;
					return N ? s.a.createElement(s.a.Fragment, null, s.a.createElement(w.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: j,
						isDeletingBanner: _,
						isEmployee: o,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!l,
						onClickSnoovatar: O,
						onDeleteBanner: P,
						prefersReducedAnimations: E,
						snoovatarUrl: f,
						title: b,
						userCreated: h,
						username: g,
						actions: e,
						url: x,
						footer: a
					})) : s.a.createElement(U, {
						className: n
					}, s.a.createElement(S, {
						bannerBackgroundImage: N ? void 0 : t,
						currentUserHasSnoovatar: r,
						editMode: j,
						isDefaultIcon: v,
						isDeletingBanner: _,
						isDeletingIcon: I,
						isEmployee: o,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!l,
						onClickSnoovatar: O,
						onDeleteBanner: P,
						onDeleteIcon: C,
						prefersReducedAnimations: E,
						profileIcon: u,
						title: b,
						userCreated: h,
						username: g,
						url: x,
						snoovatarUrl: f
					}), s.a.createElement(F, null, p), s.a.createElement(m.a, {
						profileName: g,
						isOverlay: d
					}), this.renderAwardedLastMonth(), s.a.createElement(T, null, e), a)
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less": function(e, t, r) {
			e.exports = {
				Banner: "_2ZyL7luKQghNeMnczY3gqW",
				banner: "_2ZyL7luKQghNeMnczY3gqW"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				m = r.n(l);
			class u extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileBanner"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						bannerUrl: e,
						className: t,
						currentUser: r,
						hideNSFWPref: s,
						isNSFW: o,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, u = e ? a.a.createElement("div", {
						className: m.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(c.e)(r) === d ? a.a.createElement(i.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, u) : o && s ? null : u
				}
			}
			t.a = Object(d.a)(u)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less": function(e, t, r) {
			e.exports = {
				Icon: "_3Y33QReHCnUZm9ewFAsk8C",
				icon: "_3Y33QReHCnUZm9ewFAsk8C",
				EditButton: "_2PgeQeeIxIIadT5yPWlaTh",
				editButton: "_2PgeQeeIxIIadT5yPWlaTh"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				m = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				u = r.n(m);
			class p extends a.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(o.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(r, "profileIcon"), this.setState({
								isUpdating: !1
							})
						})
					}
				}
				render() {
					const {
						className: e,
						currentUser: t,
						iconUrl: r,
						isNSFW: s,
						isProfileIdCard: o,
						userName: l
					} = this.props, {
						isUpdating: m
					} = this.state, p = a.a.createElement(c.a, {
						className: u.a.Icon,
						iconUrl: r,
						isNSFW: s,
						userName: l
					});
					return t && Object(d.e)(t) === l ? a.a.createElement(i.a, {
						altText: n.fbt._("{userName} avatar image", [n.fbt._param("userName", l)], {
							hk: "1LJxYE"
						}),
						className: e,
						editButtonClassName: o ? u.a.EditButton : void 0,
						isLoading: m,
						onFileSelected: this.updateProfileIcon
					}, p) : p
				}
			}
			t.a = Object(l.a)(p)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react-redux/es/index.js"),
				s = r("./node_modules/reselect/es/index.js"),
				a = r("./src/reddit/actions/preferences.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: o.j,
					hideNSFWPref: o.B
				}),
				c = Object(n.b)(i, e => ({
					imageUpdateRequested: (t, r) => e(Object(a.z)(t, r))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = r("./node_modules/react-router/esm/react-router.js"),
				d = r("./src/reddit/actions/post.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				u = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				f = r("./src/reddit/models/Vote/index.ts"),
				b = r("./src/reddit/routes/avatar/index.ts"),
				x = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				h = r.n(x);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(c.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: r,
				post: c
			}) => {
				const x = Object(l.b)(),
					v = Object(o.d)(),
					I = c && c.id,
					_ = c && c.voteState,
					O = Object(s.useCallback)(() => x(Object(u.b)(e ? "user_hovercard" : "profile_overview", t)), [e, x, t]);
				return a.a.createElement(i.a, {
					to: `${b.a}/${t}`
				}, a.a.createElement(m.q, {
					onClick: () => {
						r ? I && _ === f.a.notVoted && (x(u.c), v(Object(d.bb)(I))) : O()
					},
					className: Object(n.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: r
					}),
					isFullWidth: !0
				}, a.a.createElement(p.a, {
					className: Object(n.a)({
						[h.a.shirtIcon]: !r,
						[h.a.avatarPostButtonShirtIcon]: r
					})
				}), g._("Try this Look", null, {
					hk: "dOuPb"
				}), a.a.createElement("div", {
					className: h.a.chevronIcon
				})))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(d);
			const {
				fbt: m
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: r,
				isOwnProfile: n,
				onClick: d
			}) {
				return s.a.createElement(o.q, {
					onClick: d,
					isFullWidth: !0,
					className: Object(a.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && n,
						[l.a.compactButtonLayout]: e
					}, r)
				}, t ? s.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? m._("Style Avatar", null, {
					hk: "UEtBO"
				}) : n ? m._("Create Avatar", null, {
					hk: "2pJgje"
				}) : m._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), t ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(i.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_1EcFK4dFoEcSJ97pB5pOOU",
				footer: "_1Kgb3W_zNnEh31kMBVmE8P",
				inner: "_3y5mp8nbvcVpPPsIMMPy7I",
				cardAnimation: "F8BKwLEVngSa9Mnbhrh5O",
				badgeImage: "_1lfIyNaIhBqLPhINtdgyar",
				nftIcon: "_2QX-qTkkdeCQTZc8F_jzSH",
				cutout: "_31NukdfV7zdnSSZAdgi4tH",
				nftIconImage: "_3EGHrS2jJIdFIfFHkrelY9",
				snoovatarImage: "_2eA2Gqtco1MTIW8ciy89hm",
				username: "_1jzwWcdNR0oe0D59lSILCw",
				subUsername: "_1LL19cRuUqTadh1-miEt-t",
				snoovatarButton: "_1BpuPYvrp51NlrYGgxbx9D",
				highlight: "_1IKngTFY9eM7GVrB7cJAYY",
				actions: "_1Xz5f0CORkQlgzeYxV3itr"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return x
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/LottieAnimation/index.tsx"),
				d = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.m.less"),
				f = r.n(p);
			const b = /(?:\/|-)nft-([a-z0-9]+)-([a-z]+)(?:-headshot)?\.(?:png|svg)/i;

			function x(e) {
				return !!e && b.test(e)
			}
			t.a = ({
				isEmployee: e,
				isGold: t,
				isNSFW: r,
				snoovatarUrl: p,
				title: x,
				userCreated: h,
				username: g,
				url: v,
				className: I,
				actions: _,
				footer: O
			}) => {
				const {
					badge: C,
					url: P
				} = Object(n.useMemo)(() => (function(e) {
					const t = b.exec(e) || ["", "", ""],
						r = t[1],
						n = t[2];
					return {
						id: r,
						url: "testing" === n ? "https://nft.reddit.com" : `https://nft.reddit.com/n/${r}`,
						badge: n
					}
				})(p), [p]), E = Object(a.e)(d.V);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(i.a)(f.a.container, I)
				}, s.a.createElement(c.a, {
					className: f.a.cardAnimation,
					useCanvasRenderer: !0,
					assetUrl: `${o.a.assetPath}/img/snoovatars/nft_card_animation.json`,
					loop: !0
				}), s.a.createElement("div", {
					className: f.a.inner
				}, "testing" !== C && s.a.createElement("img", {
					alt: `${C} NFT`,
					className: f.a.badgeImage,
					src: `${o.a.assetPath}/img/snoovatars/nft_badge_${C}.svg`
				}), s.a.createElement("img", {
					className: f.a.cutout,
					src: `${o.a.assetPath}/img/snoovatars/hole-cutout-${E?"black":"white"}.svg`
				}), s.a.createElement("a", {
					href: P,
					target: "_blank",
					className: f.a.nftIcon,
					rel: "noopener noreferrer"
				}, s.a.createElement("img", {
					className: f.a.nftIconImage,
					alt: "View this NFT",
					src: `${o.a.assetPath}/img/snoovatars/nft_icon.svg`
				})), s.a.createElement("img", {
					className: f.a.snoovatarImage,
					src: p,
					alt: "Avatar NFT Image"
				}), s.a.createElement(u.a, {
					isEmployee: e,
					isGold: t,
					isNSFW: r,
					title: x,
					username: g
				}), s.a.createElement(m.a, {
					className: f.a.subUsername,
					shouldDisplaySnoovatar: !0,
					username: g,
					userCreated: h,
					url: v
				}), s.a.createElement(l.a, {
					className: f.a.highlights,
					highlightClassName: f.a.highlight,
					profileName: g,
					isOverlay: !1
				}), s.a.createElement("nav", {
					className: f.a.actions
				}, _))), s.a.createElement("div", {
					className: Object(i.a)(f.a.footer, I)
				}, O))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less": function(e, t, r) {
			e.exports = {
				BannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				bannerWrapper: "_8AZ553JgDTNn5ZUmBdXkR",
				BannerImage: "_1IvROQ79nAJZ87_JkTFsLO",
				bannerImage: "_1IvROQ79nAJZ87_JkTFsLO"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				o = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = r.n(c),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				m = r.n(l);
			t.a = function({
				bannerBackgroundImage: e,
				isNSFW: t,
				username: r,
				editMode: n,
				isDeletingBanner: c,
				onDeleteBanner: l
			}) {
				return s.a.createElement("div", {
					className: d.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: e,
					isNSFW: t,
					userName: r
				}), n && e && (c ? s.a.createElement(a.a, {
					sizePx: 20,
					className: m.a.loadingIcon
				}) : s.a.createElement(o.a, {
					className: m.a.closeIcon,
					onClick: l
				})))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less": function(e, t, r) {
			e.exports = {
				SnooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				snooIconWrapper: "_2TuF8LuTZGoynMOwiccrRC",
				userName: "_1LCAhi_8JjayVo7pJ0KIh0",
				userTitle: "_34MUxmcmBZ5-3ekT3s0UPM",
				settingsLink: "n0u1JMdFWeI5YWXw1QJWF",
				adminIcon: "_2U-fbzStTSISVTxXL1Z3Us",
				premiumIcon: "_1azJKXXMZviwmUJnaAYpfi"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/controls/InternalLink/index.tsx"),
				o = r("./src/reddit/components/HumanDate/index.tsx");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: n,
				username: c,
				...d
			}) {
				const l = t ? s.a.createElement(s.a.Fragment, null, "u/", c, " · ", s.a.createElement(o.c, {
					seconds: n,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return r ? s.a.createElement(a.a, i({}, d, {
					className: e,
					to: r
				}), l) : s.a.createElement("span", i({}, d, {
					className: e
				}), l)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				m = r.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: r,
				isGold: a,
				isNSFW: l
			}) => o.a.createElement("h1", {
				className: m.a.snoovatarUserTitle
			}, e || t, r && o.a.createElement(i.a, {
				className: m.a.snoovatarAdminIcon,
				title: s.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), a && o.a.createElement("a", {
				title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${n.a.redditUrl}/premium`
			}, o.a.createElement(d.a, {
				className: m.a.snoovatarPremiumIcon
			})), l && o.a.createElement(c.a, {
				className: m.a.snoovatarNsfwIcon,
				title: s.fbt._("NSFW - Adult Content", null, {
					hk: "2Iw7mN"
				})
			}))
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				bottomGlow: "_18b8M-cZftX_frkYRy3DN1",
				topGlow: "_1-PwjX8ETMrfCu2hAkAHFd",
				snoovatar: "_2bLCGrtCCJIMNCZgmAMZFM",
				premiumGlow: "_18BjSGkpIVVfS1xJXL1eoW",
				snoovatarUserName: "_28nEhn86_R1ENZ59eAru8S",
				snoovatarUserTitle: "_3LM4tRaExed4x1wBfK1pmg",
				snoovatarSettingsLink: "PNl4tAYE2TRxhOc34iqcY",
				snoovatarAdminIcon: "kOKnXvA8jebkfk2wVIb9R",
				snoovatarNsfwIcon: "Wb4wBt474lETdwG0YpWID",
				snoovatarPremiumIcon: "_3NZUKOdsA_2X9TrZGSNQyP",
				particleWrapper: "_3sckwXGpSWEBLgH7dBHDSI",
				particle: "R8JC02qFTBSKsWVEamnnh",
				particleX0: "_2FHPkirHUUZZ53WuQRt_ku",
				particleX20: "DeM4CXWl9dmFhzxbChV3v",
				particleX40: "_2jQr36LfrhyZudo0c4r5qb",
				particleX60: "_2ThlCGLfserHkMW64od-w_",
				particleX80: "_2PoCUl_D7HnNn8GhlmyNMn",
				particleX100: "_3xLPb9tG5DMGKH5Qmq0lMn",
				particleFloat1: "_2Tlu1OsBOwuxXIF1MLT2k",
				floatUp1: "_1-74-z_0KhbvP-MLUh63RF",
				particleFloat2: "BW4L6Zj7IYZtY4carTDWz",
				floatUp2: "BhXouEsciSb0lIayg329d",
				particleFloat3: "UjQ0lRcZlylUigyKGCSrO",
				floatUp3: "_2cAI3EiKyyG1hMFOLbG7ka",
				particleFloat4: "_2_ke4gf08pfYrY6lP-aPZ_",
				floatUp1Left: "_2D7to5Dk7q0ZyKN3MMQfuJ",
				particleFloat5: "_2wM6_vp4fY0ziLkOrGaobV",
				floatUp2Left: "_3BR2d3YbOQLeA3LmAmwBJL",
				particleFloat6: "_23n0biPU5CQf96pEUSFupJ",
				floatUp3Left: "_3FnzyfIl1wHuAYA54rlkJH",
				particleDelay1: "_3meTYeYw1F3UdYO0v-gAYr",
				particleDelay2: "_3d8_fd8LwWsj0tyZWIeQdt",
				particleDelay3: "_2PLSBdnBk3jcotYknlKud1",
				particleDelay4: "_2pnTv5ZAxpIbkx38PkPJPg",
				particleDelay5: "_3j1NzwW_t2Ufnx4ed9QabN",
				particleDelay6: "_1hddWHnQ8DFnwilLlN9GEO",
				particleDelay7: "_3eRR1I_MwXC19q9sr8mKaR",
				particleDelay8: "_1sCUpg4sdajNDXrcNTP0qW",
				particleDelay9: "_3J5h1MCyY_xUf2QP7PDSHY",
				particleDelay10: "_2RqcLn9onSZQmKQgvKmSF7"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				f = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				b = r.n(f);
			const x = 25;

			function h(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function g(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const v = h("particleDelay", b.a),
				I = h("particleX", b.a),
				_ = h("particleFloat", b.a),
				O = () => {
					const e = g(I),
						t = g(_),
						r = g(v);
					return Object(o.a)(b.a.particle, e, t, r)
				};
			class C extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < x; t++) e.push(this.createParticle(t));
					return s.a.createElement("div", {
						role: "presentation",
						className: b.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return s.a.createElement("div", {
						key: e,
						className: `${O()}`
					})
				}
			}
			var P = C,
				E = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				j = r.n(E),
				N = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: n,
				isDeletingBanner: f,
				isEmployee: x,
				isGold: h,
				isNSFW: g,
				isOwnProfile: v,
				onClickSnoovatar: I,
				onDeleteBanner: _,
				prefersReducedAnimations: O,
				snoovatarUrl: C,
				title: E,
				userCreated: k,
				username: y,
				url: S,
				isHovercard: w
			}) => {
				const U = Object(a.e)(e => !v && !!C && Object(d.e)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(u.a, {
					bannerBackgroundImage: e,
					editMode: !!n,
					isNSFW: g,
					username: y,
					isDeletingBanner: !!f,
					onDeleteBanner: _
				}), s.a.createElement("div", {
					className: b.a.snoovatarContainer
				}, h && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: b.a.topGlow
				}), s.a.createElement("div", {
					className: b.a.bottomGlow
				}), !O && s.a.createElement(P, null)), s.a.createElement("img", {
					className: Object(o.a)(b.a.snoovatar, {
						[b.a.premiumGlow]: h
					}),
					src: C || void 0
				})), !n && v && s.a.createElement(i.a, {
					to: "/settings/profile",
					className: b.a.snoovatarSettingsLink
				}, s.a.createElement(c.a, {
					name: "settings",
					className: j.a.settingsIcon
				})), s.a.createElement(N.a, {
					isEmployee: x,
					isGold: h,
					isNSFW: g,
					title: E,
					username: y
				}), s.a.createElement(p.a, {
					className: b.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: y,
					userCreated: k,
					url: S
				}), (v || !r && !!C) && s.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: v,
					onClick: I
				}), U && s.a.createElement(m.a, {
					username: y,
					isHovercard: !!w
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/footer.m.less": function(e, t, r) {
			e.exports = {
				container: "_2jvbIljd1r6tRUsfoDij_y",
				expandContainer: "_1HKW6ri9nK1INtj09BfFfM",
				expandButton: "_34I-V8v9TxMwIW1R6Rbi3A",
				menuItem: "_2j70PtPj9zrWOU8NshwTg-",
				Shimmer: "_1-2CAwx45SgG4EsI1-GWZh",
				shimmer: "_1-2CAwx45SgG4EsI1-GWZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, r) {
			e.exports = {
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				snoovatarAdminIcon: "_1rf3zLc4sH59mO7_BEXyze",
				snoovatarPremiumIcon: "_3QQFENUs15G6BHI5pjsswJ",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/snoovatar.ts"),
				c = r("./src/reddit/actions/subscription/index.ts"),
				d = r("./src/reddit/actions/userBlocks.ts"),
				l = r("./src/reddit/components/ChatButton/index.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/constants/posts.ts"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/selectors/blockedRedditors.ts"),
				x = r("./src/reddit/selectors/gold/awardIcon.ts"),
				h = r("./src/reddit/selectors/platform.ts"),
				g = r("./src/reddit/selectors/profile.ts"),
				v = r("./src/reddit/selectors/structuredStyles.ts"),
				I = r("./src/reddit/selectors/tooltip.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				O = r("./src/reddit/selectors/userPrefs.ts"),
				C = r("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				P = r("./node_modules/fbt/lib/FbtPublic.js"),
				E = r("./node_modules/lodash/compact.js"),
				j = r.n(E),
				N = r("./src/config.ts"),
				k = r("./src/lib/classNames/index.ts"),
				y = r("./src/lib/loadableAction/index.ts"),
				S = r("./src/reddit/actions/gold/modals.ts"),
				w = r("./src/reddit/actions/modal.ts"),
				U = r("./src/reddit/actions/profile/index.ts"),
				F = r("./src/reddit/components/CrisisFlow/index.tsx"),
				T = r("./src/higherOrderComponents/makeAsync.tsx"),
				B = r("./src/lib/loadWithRetries/index.ts");
			var M = Object(T.a)({
					getComponent: () => Object(B.a)(() => r.e("GivePremiumModal").then(r.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				D = r("./src/reddit/constants/modals.ts"),
				L = r("./src/reddit/helpers/correlationIdTracker.ts"),
				A = r("./src/reddit/helpers/styles/mixins/loading.ts"),
				R = r("./src/reddit/models/Gold/Premium/index.ts"),
				G = r("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				W = r("./src/reddit/selectors/premium.ts"),
				H = r("./src/reddit/components/ProfileIdCard/footer.m.less"),
				z = r.n(H);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const K = Object(o.c)({
					areModeratedSubredditsPending: g.a,
					coinsToSpend: _.d,
					givePremiumModalIsOpen: W.c,
					hasFetchedModerators: g.k,
					isEmployee: _.G,
					isLoggedIn: _.J,
					profile: g.j,
					crisisFlowEnabled: G.b
				}),
				Z = ({
					isLoading: e,
					...t
				}) => s.a.createElement("div", q({}, t, {
					className: Object(k.a)(z.a.Shimmer, Object(A.b)({
						isLoading: e
					}))
				}));
			class V extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1,
						showCrisisModal: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						e(Object(L.d)(L.a.GiftPremiumFlow));
						const {
							clickGivePremiumEvent: n
						} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
						t(n())
					}, this.onOpenCrisisModal = () => {
						this.setState({
							showCrisisModal: !0
						})
					}, this.onCloseCrisisModal = () => {
						this.setState({
							showCrisisModal: !1
						})
					}, this.makeMenuItems = () => {
						const {
							addToMultiClicked: e,
							allowViewSnoovatar: t,
							coinsToSpend: r,
							hasSubreddit: n,
							isEmployee: s,
							isLoggedIn: a,
							isModerator: o,
							isOwnProfile: i,
							profileName: c,
							profile: d,
							crisisFlowEnabled: l,
							userAcceptsPms: m,
							onClickBlockUser: u,
							onClickUnblockUser: p,
							isUserBlocked: f
						} = this.props, b = a && Object(R.d)(r, s).length && !i || s, x = j()([(i || o) && n ? {
							text: P.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: `/user/${c}/about/edit/moderation`,
							isInternalLink: !0
						} : void 0, !i && m ? {
							text: P.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: `${N.a.redditUrl}/message/compose/?to=${c}`
						} : void 0, a && !i ? {
							onClick: f ? p : u,
							text: f ? P.fbt._("Unblock User", null, {
								hk: "1onWdM"
							}) : P.fbt._("Block User", null, {
								hk: "4ltcgv"
							})
						} : void 0, !i && t ? {
							text: P.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: `${N.a.redditUrl}/user/${c}/snoo`
						} : void 0, !i && l ? {
							text: P.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, !i && d ? {
							text: P.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: `${N.a.redditUrl}/api/report_redirect?reason_code=USER_PROFILE&thing=${d.id}`
						} : void 0, a && d && !d.isQuarantined ? {
							onClick: e,
							text: P.fbt._("Add to Custom Feed", null, {
								hk: "3ZtOdG"
							})
						} : void 0]);
						return b && x.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: P.fbt._("Give Premium", null, {
								hk: "2wyUqF"
							})
						}), x
					}, this.moreOptionsToggled = () => {
						!this.state.expanded && this.canLoadMods() && this.props.onModeratorsRequested(), this.setState(({
							expanded: e
						}) => ({
							expanded: !e
						}))
					}
				}
				canLoadMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && !this.props.hasFetchedModerators && !this.props.areModeratedSubredditsPending
				}
				isLoadingMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && (!this.props.hasFetchedModerators || this.props.areModeratedSubredditsPending)
				}
				render() {
					const {
						givePremiumModalIsOpen: e
					} = this.props, {
						expanded: t
					} = this.state, r = this.makeMenuItems();
					if (0 === r.length) return null;
					const n = (t ? r : []).map(e => e.url ? e.isInternalLink ? s.a.createElement(f.q, {
						kind: f.a.InternalLink,
						priority: f.b.Plain,
						size: f.c.XS,
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: z.a.menuItem
					}, e.text) : s.a.createElement(f.q, {
						kind: f.a.ExternalLink,
						priority: f.b.Plain,
						size: f.c.XS,
						key: e.url,
						href: e.url,
						onClick: e.onClick,
						className: z.a.menuItem
					}, e.text) : s.a.createElement(f.q, {
						priority: f.b.Plain,
						size: f.c.XS,
						className: z.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (n.unshift(s.a.createElement("div", {
						className: z.a.menuItem,
						key: "loading-1"
					}, s.a.createElement(Z, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), n.unshift(s.a.createElement("div", {
						className: z.a.menuItem,
						key: "loading-2"
					}, s.a.createElement(Z, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const a = t ? P.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : P.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return s.a.createElement("div", {
						className: z.a.container
					}, n, s.a.createElement("div", {
						className: z.a.expandContainer
					}, s.a.createElement(f.o, {
						className: z.a.expandButton,
						onClick: this.moreOptionsToggled
					}, a)), e && s.a.createElement(M, null), this.state.showCrisisModal && s.a.createElement(F.b, {
						withOverlay: !0,
						overlayCustomStyles: F.a,
						fromUserProfile: !0,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var J = Object(a.b)(K, (e, {
					profileName: t
				}) => ({
					addToMultiClicked: () => {
						e(Object(y.a)(() => Promise.all([r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~b36acd08"), r.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), r.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), r.e("Multireddit")]).then(r.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(w.h)(D.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					onClickGivePremium: r => e(Object(S.e)({
						correlationId: r,
						profileName: t
					})),
					onModeratorsRequested: () => e(Object(U.b)(t)),
					onClickBlockUser: () => e(Object(d.h)(t)),
					onClickUnblockUser: () => e(Object(d.g)(t))
				}))(V),
				X = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				Q = r.n(X),
				Y = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx");
			const {
				fbt: $
			} = r("./node_modules/fbt/lib/FbtPublic.js"), ee = Object(o.c)({
				account: _.j,
				activeTooltipId: I.a,
				currentUserHasSubreddit: _.g,
				hideNSFWPref: _.B,
				isModerator: g.f,
				prefersReducedAnimations: O.c,
				profile: g.j,
				profileAboutInfo: g.h,
				topAwardIcon: (e, {
					profileName: t
				}) => Object(x.e)(e, {
					userName: t,
					minSize: 32
				}),
				structuredStyle: (e, t) => Object(v.m)(e, Object(g.m)(e, t.profileName)),
				userHasSubreddit: (e, {
					profileName: t
				}) => Object(_.nb)(e, {
					userName: t
				}),
				user: (e, {
					profileName: t
				}) => Object(_.mb)(e, {
					userName: t
				}),
				page: h.b,
				allowNFTs: C.a,
				isUserBlocked: (e, {
					profileName: t
				}) => Object(b.c)(e, t)
			}), te = ({
				username: e,
				currentUserHasSubreddit: t
			}) => s.a.createElement("div", {
				className: Q.a.actionItem
			}, s.a.createElement(f.k, {
				className: Q.a.button,
				to: t ? `/user/${e}/submit` : "/submit"
			}, $._("New Post", null, {
				hk: "2VCZwF"
			}))), re = ({
				profileName: e,
				onToggleFollow: t,
				userIsSubscriber: r,
				isUserBlocked: n,
				onClickUnblockUser: a
			}) => s.a.createElement("div", {
				className: Q.a.actionItem
			}, r && !n ? s.a.createElement(f.l, {
				className: Q.a.button,
				onClick: () => t(e, r)
			}, $._("Unfollow", null, {
				hk: "1nM1SO"
			})) : n ? s.a.createElement(f.i, {
				className: Q.a.button,
				onClick: () => a(e)
			}, $._("Unblock", null, {
				hk: "2d6Cyx"
			})) : s.a.createElement(f.i, {
				className: Q.a.button,
				onClick: () => t(e, r)
			}, $._("Follow", null, {
				hk: "OPQuq"
			}))), ne = ({
				userId: e
			}) => s.a.createElement("div", {
				className: Q.a.actionItem
			}, s.a.createElement(l.b, {
				contextId: e,
				className: Q.a.button,
				userId: e,
				text: $._("Chat", null, {
					hk: "UKkIW"
				})
			}));
			t.default = Object(a.b)(ee, e => ({
				onToggleFollow: (t, r) => e(Object(c.d)([{
					name: t,
					type: p.a.PROFILE
				}], !r)),
				onClickSnoovatar: () => e(Object(i.b)("profile_overview")),
				onClickUnblockUser: t => e(Object(d.g)(t))
			}))(Object(u.c)(e => {
				const {
					account: t,
					currentUserHasSubreddit: r,
					hideNSFWPref: n,
					isModerator: a,
					isOverlay: o,
					isSubmissionPage: i,
					onClickSnoovatar: c,
					onToggleFollow: d,
					profile: l,
					profileAboutInfo: u,
					sendEvent: p,
					structuredStyle: f,
					topAwardIcon: b,
					userHasSubreddit: x,
					allowNFTs: h,
					user: g,
					page: v,
					prefersReducedAnimations: I,
					isUserBlocked: _,
					onClickUnblockUser: O
				} = e;
				if (!g) return null;
				const {
					accountIcon: C,
					awardedLastMonth: P,
					created: E,
					id: j,
					isEmployee: N,
					isGold: k,
					prefShowSnoovatar: y,
					snoovatarFullBodyAsset: S,
					username: w
				} = g, U = !!t && t.id === j, F = !(!t || !t.snoovatarFullBodyAsset), T = f && f.bannerBackgroundImage, B = !!l && l.isNSFW, M = B && n, D = !(!u || !u.userIsSubscriber), L = `/user/${w}/`, A = v && v.url === L, R = !u || u.acceptChats, G = !u || u.acceptPms, W = h && Object(Y.b)(S);
				return s.a.createElement(m.a, {
					isEmployee: N,
					isGold: k,
					isNSFW: B,
					isNftPreview: W,
					isOverlay: o,
					isOwnProfile: U,
					publicDescription: u ? u.publicDescription : void 0,
					title: l ? l.title : void 0,
					url: A ? null : L,
					userCreated: E,
					username: w,
					recentAwardings: P,
					currentUserHasSnoovatar: F,
					prefersReducedAnimations: !!I,
					snoovatarUrl: S,
					topAwardIcon: b,
					actions: s.a.createElement(s.a.Fragment, null, U && !i && te({
						username: w,
						currentUserHasSubreddit: r
					}), !U && x && re({
						profileName: w,
						onToggleFollow: d,
						userIsSubscriber: D,
						isUserBlocked: _,
						onClickUnblockUser: O
					}), !!t && !U && R && ne({
						userId: j
					})),
					footer: s.a.createElement(J, {
						hasSubreddit: x,
						isModerator: a,
						isOwnProfile: U,
						allowViewSnoovatar: y,
						profileName: w,
						sendEvent: p,
						userAcceptsPms: G,
						isUserBlocked: _
					}),
					onClickSnoovatar: c,
					profileIcon: C,
					bannerBackgroundImage: M ? void 0 : T
				})
			}))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, r) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/SEOTitle/index.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.m.less"),
				c = r.n(i);
			const d = a.a.div("WidgetBackground", c.a),
				l = a.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(o.b, {
					type: o.a.Widget
				}, e)), "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(d, null, e.children))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			class a extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							r = this.props.multiple ? [...t] : t[0];
						this.props.onChange(r), this.setState(() => ({
							value: r
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, r = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, a = r || n;
					return s.a.createElement("div", {
						className: e.className
					}, r && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: r,
						tabIndex: e.tabIndex
					}), (!a || e.multiple) && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				}
			})
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "e", (function() {
				return m
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "b", (function() {
				return p
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				o = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.hb.POST
			}), l = async (e, t, r) => Object(a.a)(Object(o.a)(e, [i.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.hb.POST
			}), m = async (e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.hb.POST
			}), u = async (e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.hb.POST
			}), p = async (e, t) => Object(a.a)(Object(o.a)(e, [i.a]), {
				endpoint: Object(c.a)(`${n.a.oauthUrl}/user/${t}/about`),
				method: s.hb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/helpers/dayAgoFormatDate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/lib/humanizeUTCDate/index.tsx"),
				a = r("./src/lib/timeAgo/index.ts");
			t.a = (e, t) => {
				const r = (e => e - 8 * n.O / n.Nb)(e);
				return Object(a.c)(r) >= 1 ? Object(s.a)(r, t) : Object(a.d)(r, {
					locale: t
				})
			}
		},
		"./src/reddit/helpers/karma.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = e => {
				if (!e || !e.karma) return 0;
				const {
					total: t,
					...r
				} = e.karma;
				return t || Object.values(r).reduce((e, t) => e + (t || 0), 0)
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, r) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				a = r.n(s);
			const o = ({
					isLoading: e
				}) => Object(n.a)(a.a.loadingBackground, {
					[a.a["m-loading"]]: e
				}),
				i = e => Object(n.a)(a.a.loadingBar, o(e))
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(e.className, i.a.admin, {
					[i.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), s.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && s.a.createElement("title", null, e.title), s.a.createElement("g", null, s.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/PremiumCircle/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("rect", {
				width: "20",
				height: "20",
				rx: "10",
				fill: "url(#gradient)"
			}), s.a.createElement("path", {
				d: "M12.121 13.471c-1.007.146-1.73.445-2.121.643v-3.068a1.2 1.2 0 00-1.2-1.2H6.53c.027-.292.046-.61.046-.978 0-1.015-.294-1.78-.53-2.233l.834-.834H10v2.845a1.2 1.2 0 001.2 1.2h2.27c.036.402.086.749.132 1.045.058.38.109.706.109 1.047 0 .627-.497 1.375-1.59 1.533zm3.017-7.35l-1.345-1.345a.6.6 0 00-.425-.175H6.632a.6.6 0 00-.425.175L4.862 6.122a.6.6 0 00-.042.802c.006.006.556.72.556 1.944 0 .783-.087 1.344-.164 1.84-.064.41-.124.797-.124 1.23 0 1.163.9 2.471 2.619 2.72 1.251.183 1.952.638 1.956.64a.61.61 0 00.67.002c.007-.004.709-.46 1.96-.642 1.719-.249 2.618-1.557 2.618-2.72 0-.433-.06-.82-.124-1.23a11.026 11.026 0 01-.163-1.84c0-1.22.536-1.919.556-1.944a.6.6 0 00-.042-.802z",
				fill: "#fff"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "gradient",
				x1: "0",
				y1: "20",
				x2: "20.021",
				y2: "19.979",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				stopColor: "#EC0623"
			}), s.a.createElement("stop", {
				offset: "1",
				stopColor: "#FF8717"
			}))))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = function({
				className: e
			}) {
				return s.a.createElement("svg", {
					className: e,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, s.a.createElement("g", {
					fill: "inherit"
				}, s.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, r) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				a = (e, t = !1) => {
					const r = [];
					for (const n in s) {
						const a = s[n];
						(a.priceInCoins <= e || t) && r.push(a)
					}
					return r
				},
				o = e => n.fbt._({
					"*": "{number of months} months {number of coins} Coins",
					_1: "1 month {number of coins} Coins"
				}, [n.fbt._plural(e.monthsOfPremium, "number of months"), n.fbt._param("number of coins", e.priceInCoins.toLocaleString())], {
					hk: "2bar0C"
				}),
				i = "com.reddit.premium_1";
			var c;
			! function(e) {
				e.Monthly = "monthly", e.Yearly = "yearly"
			}(c || (c = {}))
		},
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/reddit/selectors/user.ts");
			const s = e => e.blockedRedditors.api.pending,
				a = e => e.blockedRedditors.list,
				o = (e, t) => {
					const r = (e => {
						const t = a(e);
						return t && t.ids
					})(e);
					return !!r && r.includes(t)
				},
				i = (e, t) => {
					const r = Object(n.mb)(e, {
						userName: t
					});
					return !!r && o(e, r.id)
				}
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const o = e => n.b.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.J,
					experimentName: n.g
				}),
				i = e => n.d.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: a.J,
					experimentName: n.j
				})
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: n.o
			}) === n.r.Enabled
		},
		"./src/reddit/selectors/premium.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			const n = e => !!e.givePremium.givePremiumModalAccountName,
				s = e => e.givePremium.givePremiumModalAccountName,
				a = e => e.givePremium.api.error || "",
				o = e => e.givePremium.api.pending
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.defb43db8ad60f2949d6.js.map