// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.6d20992fc8ad9c85140f.js
// Retrieved at 8/31/2022, 11:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ProfileIdCard"], {
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, r = null == e ? 0 : e.length, n = 0, s = []; ++t < r;) {
					var o = e[t];
					o && (s[n++] = o)
				}
				return s
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/reddit/constants/intlSupport.ts");

			function a(e) {
				let {
					showDay: t,
					useUtc: r,
					shortMonths: a,
					locale: i = n.DEFAULT_LOCALE
				} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
				const c = new Date(e * s.Vb);
				return o.a ? new Intl.DateTimeFormat(i, {
					month: a ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: r ? "UTC" : void 0
				}).format(c) : c.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js");
			t.a = function(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.DEFAULT_LOCALE;
				const r = e.toString().length > 10,
					s = new Date(e * (r ? 1 : 1e3));
				return s.toLocaleString(t, {
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
				return u
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "g", (function() {
				return g
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/FetchBlockedRedditorsInfo.json");
			const a = (e, t) => Object(s.a)(e, {
				...o,
				variables: t
			}, {
				traceRequestName: "get_blocked_redditors_info"
			});
			var i = r("./src/reddit/selectors/blockedRedditors.ts");
			const c = "BLOCKED_REDDITORS_LIST__ADD",
				d = "BLOCKED_REDDITORS_LIST__REMOVE",
				l = "BLOCKED_REDDITORS_LIST__FAILED",
				u = "BLOCKED_REDDITORS_LIST__LOADED",
				m = "BLOCKED_REDDITORS_LIST__PENDING",
				p = Object(n.a)(c),
				f = Object(n.a)(d),
				b = Object(n.a)(l),
				h = Object(n.a)(u),
				v = Object(n.a)(m),
				g = () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					const s = t(),
						o = Object(i.a)(s);
					if (Object(i.b)(s) || o.timestamp && Date.now() - o.timestamp < 36e6) return;
					let c = !1,
						d = "";
					do {
						e(v());
						const t = {
								after: d,
								pageSize: 100
							},
							r = await a(n(), t);
						if (r && r.ok) {
							const {
								data: {
									identity: t
								}
							} = r.body;
							if (t && t.blockedRedditorsInfo) {
								const {
									pageInfo: r,
									edges: n
								} = t.blockedRedditorsInfo;
								if (e(h(n.map(e => e.node.id))), r) {
									const {
										hasNextPage: e,
										endCursor: t
									} = r;
									c = e, d = t || ""
								}
							} else c = !1
						} else {
							c = !1;
							const t = r.error ? r.error.type : "unknown error";
							e(b({
								message: t
							}))
						}
					} while (c)
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "h", (function() {
				return a
			})), r.d(t, "i", (function() {
				return i
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			}));
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				s = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				o = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				a = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				i = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				c = "SUBSCRIPTION__ORDER_LOADED",
				d = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return w
			})), r.d(t, "d", (function() {
				return L
			})), r.d(t, "c", (function() {
				return T
			})), r.d(t, "a", (function() {
				return B
			})), r.d(t, "b", (function() {
				return M
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/linkMatchers/customLinks.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				i = r("./src/reddit/actions/login.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/subscription/constants.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/posts.ts"),
				m = r("./src/lib/makeApiRequest/index.ts"),
				p = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts");
			var b = r("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				v = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = r("./src/reddit/models/GqlTopLevelField.ts"),
				x = r("./src/reddit/models/User/index.ts");

			function _(e) {
				const t = [],
					r = [],
					n = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== x.c.AvailableRedditor || !i.node.profile) continue;
					const e = Object(h.a)(i.node.profile);
					n[e.id] = e;
					const {
						isFavorite: r
					} = i.node.profile;
					r && t.push(e.id)
				}
				const {
					subscribedSubreddits: a
				} = e.identity;
				for (const i of a.edges) {
					if (i.node.__typename !== g.a.Subreddit) continue;
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
			var O = r("./src/reddit/models/Toast/index.ts"),
				I = r("./src/reddit/selectors/profile.ts"),
				C = r("./src/reddit/selectors/subreddit.ts"),
				k = r("./src/reddit/selectors/subscriptions.ts"),
				P = r("./src/reddit/selectors/user.ts");
			const j = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				E = Object(a.a)(d.c),
				y = Object(a.a)(d.b),
				N = Object(a.a)(d.a),
				S = Object(a.a)(d.h),
				w = (Object(a.a)(d.i), Object(a.a)(d.g), () => async (e, t, r) => {
					let {
						gqlContext: n
					} = r;
					const s = t();
					if (!s.user.account || s.subscriptions.api.fetched) return;
					e(y());
					const o = await Object(b.a)(n());
					if (o.ok) {
						const t = _(o.body.data);
						e(E(t))
					} else e(N({
						error: o.error
					}))
				}),
				U = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				L = (e, t, r) => async (a, d, m) => {
					let {
						apiContext: p
					} = m, f = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(C.G)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(I.n)(d(), e.name),
						name: `${s.nc}${e.name}`,
						type: e.type
					});
					if (!Object(P.Q)(d())) return a(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void a(Object(i.openRegisterModal)());
					const h = Object(P.k)(d());
					if (h) {
						const t = f.length,
							r = e.length;
						if (f = f.filter(e => !U(h, e)), (e = e.filter(e => !U(h, e))).length !== r || f.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							a(Object(l.f)(Object(l.e)(e, O.b.Error)))
						}
						if (!e.length && !f.length) return
					}
					a(S({
						identifiers: f,
						nameIdentifiers: e,
						profileModels: d().profiles.models,
						subredditModels: d().subreddits.models,
						subscriptionsCount: Object(k.b)(d()),
						userIsSubscriber: t,
						widgetId: r
					}));
					const v = await Object(b.c)(p(), {
						subredditNames: f.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (v.ok) {
						const r = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : n.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [n.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							s = n.fbt._("Successfully followed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "23Snyg"
							}),
							i = n.fbt._("Successfully unfollowed {communityname}", [n.fbt._param("communityname", r)], {
								hk: "jfC0S"
							}),
							c = n.fbt._("Successfully joined {communityname}", [n.fbt._param("communityname", r)], {
								hk: "1W9UY3"
							}),
							d = n.fbt._("Successfully left {communityname}", [n.fbt._param("communityname", r)], {
								hk: "1saMW"
							});
						a(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : i : t ? c : d
						}))
					} else {
						a(S({
							identifiers: f,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(k.b)(d()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const s = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						a(Object(l.f)(Object(l.e)(s, O.b.Error)))
					}
					return v.ok
				}, F = Object(a.a)(d.f), T = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const o = r(),
						a = Object(C.N)(o, {
							identifier: e
						});
					if (!a) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const i = e.type === u.a.SUBREDDIT ? a.name : `u_${a.name}`,
						c = o.subscriptions.favoriteSubredditOrder || [],
						d = o.subscriptions.favoriteProfileOrder || [],
						m = c.indexOf(e.id),
						p = d.indexOf(e.id),
						f = -1 === m && -1 === p,
						h = o.subreddits.models,
						v = o.profiles.models,
						g = {
							type: e.type,
							name: a.name
						},
						x = () => Object(C.hb)(r(), {
							identifier: g
						});
					(x() || (await t(L([g], !0)), x())) && (t(F({
						makeFavorite: f,
						identifier: e,
						subredditModels: h,
						profileModels: v
					})), (await Object(b.b)(s(), i, f)).ok || (t(F({
						makeFavorite: !f,
						identifier: e,
						subredditModels: h,
						profileModels: v
					})), t(Object(l.f)({
						text: j(),
						kind: O.b.Error
					}))))
				}, A = Object(a.a)(d.d), B = e => async (t, r, n) => {
					let {
						apiContext: o
					} = n;
					const a = r().multireddits.models,
						i = () => {
							t(Object(l.f)({
								text: j(),
								kind: O.b.Error
							}))
						},
						c = a[e];
					if (!c) return void i();
					const d = !c.isFavorited;
					t(A({
						makeFavorite: d,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, r) => Object(m.a)(Object(p.a)(e, [f.a]), {
						method: s.mb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(o(), e, d)).ok || (t(A({
						makeFavorite: !d,
						multiredditPath: e,
						multiredditsModelsState: a
					})), i())
				}, D = Object(a.a)(d.e), M = e => async (t, r, o) => {
					let {
						apiContext: a
					} = o;
					const i = r(),
						c = i.multireddits.models;
					if (!Object(P.Q)(i)) return;
					const d = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(l.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : n.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: O.b.Error
							}))
						},
						u = c[e];
					if (!u) return void d();
					const b = !u.isFollowed;
					t(D({
						follow: b,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, r) => Object(m.a)(Object(p.a)(e, [f.a]), {
						method: s.mb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: r ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(a(), e, b)).ok || (t(D({
						follow: !b,
						multiredditPath: e,
						multiredditsModelsState: c
					})), d(b))
				}
		},
		"./src/reddit/actions/userBlocks.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "g", (function() {
				return C
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/actions/blockedRedditors.ts"),
				a = r("./src/reddit/actions/toaster.ts"),
				i = r("./src/reddit/endpoints/accounts/index.ts"),
				c = r("./src/reddit/models/Toast/index.ts"),
				d = r("./src/reddit/selectors/user.ts");
			const l = "USER_BLOCK__PENDING",
				u = "USER_BLOCK__LOADED",
				m = "USER_BLOCK__FAILED",
				p = Object(s.a)(l),
				f = Object(s.a)(u),
				b = Object(s.a)(m),
				h = e => async (t, r, s) => {
					let {
						apiContext: d
					} = s;
					var l;
					if (r().blockUser.api.pending[e]) return;
					t(p({
						username: e
					}));
					const u = await Object(i.a)(d(), e),
						m = `error-block-${e}`;
					if (u.ok) u.body.name && t(f(u.body)), u.body.id && t(Object(o.f)(u.body.id)), t(a.g(m)), t(a.f({
						kind: c.b.SuccessCommunity,
						text: n.fbt._("{username} is now blocked", [n.fbt._param("username", e)], {
							hk: "MI2y8"
						})
					}));
					else {
						const r = {
							type: u.error ? u.error.type : "Unknown error",
							username: e
						};
						t(b(r)), "REBLOCK_RATE_LIMIT" === (null === (l = u.body) || void 0 === l ? void 0 : l.reason) ? t(a.f({
							id: m,
							kind: c.b.Error,
							text: n.fbt._("You can't block u/{username} for 24 hours after unblocking them", [n.fbt._param("username", e)], {
								hk: "W0oUd"
							}),
							buttonAction: h(e)
						})) : t(a.f({
							id: m,
							kind: c.b.Error,
							text: n.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: h(e)
						}))
					}
				}, v = "USER_UNBLOCK__PENDING", g = "USER_UNBLOCK__SUCCESS", x = "USER_UNBLOCK__FAILED", _ = Object(s.a)(v), O = Object(s.a)(g), I = Object(s.a)(x), C = e => async (t, r, s) => {
					let {
						apiContext: l
					} = s;
					const u = r(),
						m = Object(d.k)(u),
						p = m ? m.id : void 0,
						f = u.user.blocked.data.filter(t => t.name === e)[0];
					p && (t(_({
						name: e
					})), (await Object(i.c)(l(), p, e)).ok ? (t(O({
						name: e
					})), f && f.id && t(Object(o.h)(f.id)), t(a.f({
						kind: c.b.SuccessCommunity,
						text: n.fbt._("{username} is now unblocked", [n.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(a.f({
						kind: c.b.Error,
						text: n.fbt._("An error has occured. Please try again later", null, {
							hk: "2FpsLy"
						})
					})), t(I({
						name: e
					}))))
				}
		},
		"./src/reddit/components/Admin/index.m.less": function(e, t, r) {
			e.exports = {
				admin: "_2xNNl6uDn-la14kNSY-HlG",
				adminIcon: "_39nUIeq_tsYlKJUODkYXBu"
			}
		},
		"./src/reddit/components/Admin/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/components/Admin/index.m.less"),
				c = r.n(i),
				d = r("./src/lib/constants/icons.ts"),
				l = r("./src/reddit/icons/fonts/index.tsx"),
				u = r("./src/reddit/constants/experiments.ts"),
				m = r("./src/reddit/helpers/chooseVariant/index.ts");
			const p = e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.a
			});
			t.a = () => {
				return Object(a.e)(p) ? o.a.createElement("span", {
					className: c.a.admin
				}, n.fbt._("Admin", null, {
					hk: "3MyAnD"
				})) : o.a.createElement(l.a, {
					name: d.a.admin,
					isFilled: !0,
					className: c.a.adminIcon,
					title: n.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				})
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/actions/chat/toggle.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const u = e => {
				let {
					onStartChat: t,
					text: r,
					className: s,
					sendEvent: a,
					contextId: i,
					priority: c,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					eventSource: f,
					onClick: b,
					onAddUserToQuickReplyList: h,
					children: v,
					style: g
				} = e;
				return o.a.createElement(d.t, {
					onClick: e => {
						if (b && b(e), t(), f === n.awardNotification) return h();
						a(Object(l.b)(i))
					},
					className: s,
					text: r,
					priority: c,
					Icon: u,
					redditStyle: m,
					isFullWidth: p,
					style: g
				}, v)
			};
			u.displayName = "ChatButton";
			const m = Object(a.b)(null, (e, t) => {
				let {
					contextId: r,
					userId: n
				} = t;
				return {
					onStartChat: () => {
						e(Object(i.b)(n, r))
					},
					onAddUserToQuickReplyList: () => {
						e(Object(i.a)(n))
					}
				}
			});
			t.b = m(Object(c.c)(u))
		},
		"./src/reddit/components/CrisisFlow/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/reddit/constants/colors.ts");
			const o = {
				backgroundColor: s.a.overlayReportFlow
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
		"./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			const s = Object(n.a)({
				resolved: {},
				chunkName: () => "NftProfileUnit",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => Promise.all([r.e(1), r.e("NftProfileUnit")]).then(r.bind(null, "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Marketplace/NftProfileUnit/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = s
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
				profileCard: "eHsnwmpOgtfnBAgrWXQKq",
				EditIcon: "_3X4DuB4IpAlTY0XMdSI5q6",
				editIcon: "_3X4DuB4IpAlTY0XMdSI5q6"
			}
		},
		"./src/reddit/components/EditableImage/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/ImageInput/index.tsx"),
				c = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				d = r("./src/reddit/icons/fonts/index.tsx"),
				l = r("./src/reddit/models/ApiRequestState/index.ts"),
				u = r("./src/reddit/selectors/experiments/profileAvatarChangeFix.ts"),
				m = r("./src/reddit/components/EditableImage/index.m.less"),
				p = r.n(m);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					altText: t,
					children: r,
					className: n,
					isProfileCard: m,
					isLoading: f,
					imageUrl: b,
					onFileSelected: h
				} = e;
				const v = Object(o.e)(u.a);
				return s.a.createElement("div", {
					className: Object(a.a)(p.a.Container, n)
				}, s.a.createElement("label", {
					className: p.a.HitBox
				}, s.a.createElement("span", {
					className: p.a.ImageContainer,
					role: "presentation"
				}, b ? s.a.createElement("img", {
					alt: t,
					className: p.a.Image,
					src: b
				}) : r), s.a.createElement(i.a, {
					className: p.a.ImageUploader,
					multiple: !1,
					onChange: e => {
						const t = Object(l.b)();
						h(e, t)
					},
					isPending: v ? f : void 0
				}), !f && s.a.createElement("div", {
					className: Object(a.a)(p.a.EditButton, {
						[p.a.profileCard]: m
					})
				}, s.a.createElement(d.a, {
					name: "add_media",
					className: p.a.EditIcon
				}))), f && s.a.createElement(c.a, {
					className: p.a.LoadingIcon,
					sizePx: 80
				}))
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return v
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/timeAgo/index.ts"),
				a = r("./src/reddit/hooks/useLocale.ts");
			var i = function(e) {
					let {
						seconds: t,
						...r
					} = e;
					var n;
					const i = Object(a.a)(),
						c = {
							...r,
							locale: null !== (n = r.locale) && void 0 !== n ? n : i
						};
					return s.a.createElement(s.a.Fragment, null, Object(o.d)(t, c))
				},
				c = r("./src/lib/humanizeDate/index.ts");
			var d = function(e) {
					let {
						seconds: t,
						...r
					} = e;
					var n;
					const o = Object(a.a)(),
						i = {
							...r,
							locale: null !== (n = r.locale) && void 0 !== n ? n : o
						};
					return s.a.createElement(s.a.Fragment, null, Object(c.a)(t, i))
				},
				l = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				u = r("./src/lib/constants/index.ts");
			var m = function(e) {
					let {
						seconds: t,
						locale: r
					} = e;
					const n = Object(a.a)(),
						o = null != r ? r : n;
					return s.a.createElement(s.a.Fragment, null, function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
						const r = e * u.Vb;
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
					}(t, o))
				},
				p = r("./node_modules/fbt/lib/FbtPublic.js"),
				f = r("./src/lib/eventTools/index.ts");

			function b(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function h(e, t) {
				let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
					n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.DEFAULT_LOCALE;
				const s = Object(f.e)(e, t),
					o = new Date(e * u.Vb);
				let a;
				if (s === f.a.Live || r) return p.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === f.a.Future ? a = Object(f.d)(e) ? p.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(f.b)(e) >= 5 ? b(o, n) : function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.DEFAULT_LOCALE;
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, n) : s === f.a.Past && (a = Object(f.d)(e) ? p.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : b(o, n)), `${a} @ ${function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.DEFAULT_LOCALE;return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,n)}`
			}
			var v = function(e) {
				let {
					startTime: t,
					endTime: r,
					isLive: n,
					locale: o
				} = e;
				const i = Object(a.a)(),
					c = null != o ? o : i;
				return s.a.createElement(s.a.Fragment, null, h(t, r, n, c))
			};
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
				return h
			})), r.d(t, "a", (function() {
				return v
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = r("./src/reddit/selectors/tooltip.ts"),
				l = r("./src/reddit/components/InfoTextTooltip/index.m.less"),
				u = r.n(l),
				m = r("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const f = m.a.div("Text", u.a),
				b = m.a.div("BottomText", u.a),
				h = e => s.a.createElement(f, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				v = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(b, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				g = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: r
						} = t;
						return Object(d.b)(r)(e)
					}
				}),
				x = Object(c.a)(v, [i.a.Click, i.a.Keydown]),
				_ = Object(c.a)(h, [i.a.Click, i.a.Keydown]),
				O = Object(o.b)(g);
			t.c = O(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(x, p({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(_, p({}, e, {
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
				o = r("./src/higherOrderComponents/asTooltip.tsx"),
				a = r("./src/reddit/constants/elementIds.ts"),
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
				const r = Object(o.a)(e, t);
				class n extends s.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(a.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return s.a.createElement(r, c({}, this.props, {
							container: this.state.container || this.props.container,
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
				o = r("./src/config.ts"),
				a = r("./src/lib/prettyPrintNumber/index.ts"),
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
						href: `${o.a.oldRedditUrl}/user/${r}/gilded`
					}, s.a.createElement("div", {
						className: c.a.iconColumn
					}, s.a.createElement("img", {
						alt: l,
						className: c.a.icon,
						src: e
					}), i > 1 && s.a.createElement("span", {
						className: c.a.count
					}, `+${Object(a.b)(i-1)}`)), s.a.createElement("div", {
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
				iconRight: "_2tFYRyhxfQeK2QFUlYSYz0",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B",
				profileHighlight: "_2g-S5jW8q9bwmI732bPLXz"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/lessComponent.tsx"),
				l = r("./src/lib/prettyPrintNumber/index.ts"),
				u = r("./src/reddit/components/HumanDate/index.tsx"),
				m = r("./src/reddit/contexts/InsideOverlay.tsx"),
				p = r("./src/reddit/endpoints/profile/info.ts"),
				f = r("./src/reddit/helpers/karma.ts"),
				b = r("./src/reddit/helpers/trackers/followers.ts"),
				h = r("./src/reddit/hooks/useTracking.ts"),
				v = r("./src/reddit/icons/fonts/index.tsx"),
				g = r("./src/reddit/selectors/profile.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				_ = r("./src/reddit/actions/tooltip.ts"),
				O = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				I = r("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				C = r.n(I);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = d.a.div("Container", C.a),
				j = d.a.div("Body", C.a),
				E = d.a.h5("Title", C.a),
				y = d.a.span("Label", C.a);
			class N extends o.a.Component {
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
						className: a
					} = this.props, i = s && n ? {
						id: s,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return o.a.createElement(P, {
						className: a
					}, o.a.createElement(E, null, r), o.a.createElement(j, null, e, o.a.createElement(y, k({
						key: "label"
					}, i), t)), s && n && o.a.createElement(O.c, {
						caretOnTop: !0,
						tooltipId: s
					}, n))
				}
			}
			var S = Object(a.b)(null, e => ({
					toggleTooltip: t => e(Object(_.h)({
						tooltipId: t
					}))
				}))(Object(m.b)(N)),
				w = r("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				U = r.n(w);
			const L = Object(i.a)(g.k, (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(x.Gb)(e, r)
				}, (e, t) => ({
					karma: {
						...p.a,
						...null == t ? void 0 : t.karma,
						total: Object(f.a)(t)
					},
					enableFollowers: !!(null == t ? void 0 : t.enableFollowers),
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0
				})),
				F = d.a.div("Container", U.a);

			function T(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			const A = e => {
				const t = Object(h.a)(),
					r = Object(s.useCallback)(() => {
						t(Object(b.b)())
					}, [t]),
					a = e.isOwnProfile ? o.a.createElement(o.a.Fragment, null, Object(l.b)(e.subscribers, {
						displayFull: !0
					}), o.a.createElement(v.a, {
						name: "right",
						className: U.a.iconRight
					})) : Object(l.b)(e.subscribers, {
						displayFull: !0
					}),
					i = o.a.createElement(S, {
						className: Object(c.a)(U.a.profileHighlight, e.highlightClassName),
						icon: o.a.createElement(v.a, {
							name: "user",
							isFilled: !0,
							className: U.a.icon,
							key: "followers"
						}),
						title: n.fbt._("Followers", null, {
							hk: "4ucimK"
						}),
						label: a
					});
				return e.isOwnProfile ? o.a.createElement("a", {
					href: `/user/${e.profileName}/followers`,
					onClick: r
				}, i) : i
			};
			t.a = Object(a.b)(L)(Object(m.b)(e => {
				const {
					karma: t,
					enableFollowers: r,
					profileCreated: s,
					isOverlay: a,
					subscribers: i,
					className: c,
					highlightClassName: d
				} = e, m = {
					...p.a,
					...t
				}, f = T(a, "karma"), b = T(a, "cakeday"), h = `${n.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[n.fbt._plural(m.fromPosts,"number",Object(l.b)(m.fromPosts,{displayFull:!0}))],{hk:"husfU"})}\n${n.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[n.fbt._plural(m.fromComments,"number",Object(l.b)(m.fromComments,{displayFull:!0}))],{hk:"26iPTL"})}\n${n.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[n.fbt._plural(m.fromAwardsReceived,"number",Object(l.b)(m.fromAwardsReceived,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${n.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[n.fbt._plural(m.fromAwardsGiven,"number",Object(l.b)(m.fromAwardsGiven,{displayFull:!0}))],{hk:"2F1chz"})}`;
				return o.a.createElement(F, {
					className: c
				}, o.a.createElement(S, {
					className: d,
					icon: o.a.createElement(v.a, {
						name: "karma",
						isFilled: !0,
						className: U.a.icon,
						key: "karma"
					}),
					label: Object(l.b)(m.total, {
						displayFull: !0
					}),
					title: n.fbt._("Karma", null, {
						hk: "RtSgN"
					}),
					tooltipId: f,
					tooltip: h
				}), o.a.createElement(S, {
					className: d,
					icon: o.a.createElement(v.a, {
						name: "cake",
						isFilled: !0,
						className: U.a.icon,
						key: "cakeDay"
					}),
					label: o.a.createElement(u.a, {
						seconds: s,
						showDay: !0
					}),
					title: n.fbt._("Cake day", null, {
						hk: "4x2LB5"
					}),
					tooltipId: b,
					tooltip: o.a.createElement(u.d, {
						seconds: s
					})
				}), r && i > 0 && o.a.createElement(A, {
					highlightClassName: d,
					isOwnProfile: !!e.isOwnProfile,
					profileName: e.profileName,
					subscribers: i
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
				return A
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/SocialLinks/async.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.tsx"),
				c = r("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				d = r.n(c),
				l = o.a.div("dynamicTwoCol", d.a),
				u = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				f = r.n(p),
				b = r("./src/config.ts"),
				h = r("./node_modules/fbt/lib/FbtPublic.js"),
				v = r("./src/reddit/controls/InternalLink/index.tsx"),
				g = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = r("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = r("./src/reddit/icons/fonts/index.tsx"),
				O = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				I = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				C = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				k = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				P = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				j = r.n(P),
				E = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				y = r.n(E);
			var N = e => {
					let {
						bannerBackgroundImage: t,
						editMode: r,
						isDefaultIcon: n,
						isDeletingBanner: o,
						isDeletingIcon: a,
						isEmployee: i,
						isGold: c,
						isNSFW: d,
						isOwnProfile: l,
						onClickSnoovatar: u,
						onDeleteBanner: m,
						onDeleteIcon: p,
						profileIcon: f,
						title: P,
						userCreated: E,
						username: N,
						url: S
					} = e;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(C.a, {
						bannerBackgroundImage: t,
						editMode: !!r,
						isNSFW: d,
						username: N,
						isDeletingBanner: !!o,
						onDeleteBanner: m
					}), s.a.createElement("div", {
						className: j.a.SnooIconWrapper
					}, l || !f || d ? s.a.createElement(O.a, {
						iconUrl: f,
						isNSFW: d,
						userName: N,
						isProfileIdCard: !0
					}) : s.a.createElement(x.b, {
						href: f
					}, s.a.createElement(O.a, {
						iconUrl: f,
						isNSFW: d,
						userName: N,
						isProfileIdCard: !0
					})), r && !n && (a ? s.a.createElement(g.a, {
						sizePx: 20,
						className: y.a.loadingIcon
					}) : s.a.createElement(_.a, {
						name: "close",
						className: y.a.closeIcon,
						onClick: p
					}))), !r && l && s.a.createElement(v.default, {
						to: "/settings/profile",
						className: j.a.settingsLink
					}, s.a.createElement(_.a, {
						name: "settings",
						className: y.a.settingsIcon
					})), P && s.a.createElement("h4", {
						className: j.a.userTitle
					}, P), s.a.createElement(k.a, {
						className: j.a.userName,
						username: N,
						userCreated: E,
						url: S
					}), i && s.a.createElement(_.a, {
						name: "admin",
						isFilled: !0,
						className: j.a.adminIcon,
						title: h.fbt._("Reddit admin", null, {
							hk: "goUUb"
						})
					}), c && s.a.createElement("a", {
						title: h.fbt._("{username} has Reddit Premium", [h.fbt._param("username", N)], {
							hk: "3Fylv"
						}),
						href: `${b.a.redditUrl}/premium`
					}, s.a.createElement(_.a, {
						name: "premium",
						isFilled: !0,
						className: j.a.premiumIcon
					})), l && s.a.createElement(I.a, {
						currentUserHasSnoovatar: !1,
						isOwnProfile: !0,
						onClick: u
					}))
				},
				S = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var w = e => {
					let {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: n,
						isDefaultIcon: o,
						isDeletingBanner: a,
						isDeletingIcon: i,
						isEmployee: c,
						isGold: d,
						isNSFW: l,
						isOwnProfile: u,
						onClickSnoovatar: m,
						onDeleteBanner: p,
						onDeleteIcon: f,
						prefersReducedAnimations: b,
						profileIcon: h,
						snoovatarUrl: v,
						title: g,
						userCreated: x,
						username: _,
						url: O
					} = e;
					return v ? s.a.createElement(S.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: n,
						isDeletingBanner: a,
						isEmployee: c,
						isGold: d,
						isNSFW: l,
						isOwnProfile: u,
						onClickSnoovatar: m,
						onDeleteBanner: p,
						prefersReducedAnimations: b,
						snoovatarUrl: v,
						title: g,
						userCreated: x,
						username: _,
						url: O
					}) : s.a.createElement(N, {
						bannerBackgroundImage: t,
						editMode: n,
						isDefaultIcon: o,
						isDeletingBanner: a,
						isDeletingIcon: i,
						isEmployee: c,
						isGold: d,
						isNSFW: l,
						isOwnProfile: u,
						onClickSnoovatar: m,
						onDeleteBanner: p,
						onDeleteIcon: f,
						profileIcon: h,
						title: g,
						userCreated: x,
						username: _,
						url: O
					})
				},
				U = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx");
			const L = o.a.wrapped(i.b, "Widget", f.a),
				F = o.a.div("Description", f.a),
				T = o.a.wrapped(l, "Actions", f.a);
			class A extends s.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						topAwardIcon: t,
						username: r
					} = this.props;
					return e ? s.a.createElement(u.a, {
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
						footer: o,
						isEmployee: i,
						isGold: c,
						isNSFW: d,
						isOverlay: l,
						isOwnProfile: u,
						profileIcon: p,
						publicDescription: f,
						shouldShowSocialLinks: b,
						snoovatarUrl: h,
						title: v,
						url: g,
						userCreated: x,
						username: _,
						isDefaultIcon: O,
						isDeletingIcon: I,
						isDeletingBanner: C,
						onClickSnoovatar: k,
						onDeleteIcon: P,
						onDeleteBanner: j,
						prefersReducedAnimations: E,
						editMode: y,
						isNftPreview: N
					} = this.props;
					return N ? s.a.createElement(s.a.Fragment, null, s.a.createElement(U.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: y,
						isDeletingBanner: C,
						isEmployee: i,
						isGold: c,
						isNSFW: d,
						isOwnProfile: !!u,
						onClickSnoovatar: k,
						onDeleteBanner: j,
						prefersReducedAnimations: E,
						snoovatarUrl: h,
						title: v,
						userCreated: x,
						username: _,
						actions: e,
						url: g,
						footer: o
					})) : s.a.createElement(L, {
						className: n
					}, s.a.createElement(w, {
						bannerBackgroundImage: N ? void 0 : t,
						currentUserHasSnoovatar: r,
						editMode: y,
						isDefaultIcon: O,
						isDeletingBanner: C,
						isDeletingIcon: I,
						isEmployee: i,
						isGold: c,
						isNSFW: d,
						isOwnProfile: !!u,
						onClickSnoovatar: k,
						onDeleteBanner: j,
						onDeleteIcon: P,
						prefersReducedAnimations: E,
						profileIcon: p,
						title: v,
						userCreated: x,
						username: _,
						url: g,
						snoovatarUrl: h
					}), s.a.createElement(F, null, f), s.a.createElement(m.a, {
						isOwnProfile: !!u,
						profileName: _,
						isOverlay: l
					}), b && s.a.createElement(a.a, {
						isCreationEnabled: !!u,
						username: _
					}), this.renderAwardedLastMonth(), s.a.createElement(T, null, e), o)
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
				o = r.n(s),
				a = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/models/User/index.ts"),
				d = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.m.less"),
				u = r.n(l);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(a.e)(e);
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
						isNSFW: a,
						userName: d
					} = this.props, {
						isUpdating: l
					} = this.state, m = e ? o.a.createElement("div", {
						className: u.a.Banner,
						style: {
							backgroundImage: `url(${e})`
						}
					}) : null;
					return r && Object(c.e)(r) === d ? o.a.createElement(i.a, {
						altText: n.fbt._("{userName} banner image", [n.fbt._param("userName", d)], {
							hk: "1PcEBS"
						}),
						className: t,
						isLoading: l,
						onFileSelected: this.updateProfileIcon
					}, m) : a && s ? null : m
				}
			}
			t.a = Object(d.a)(m)
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less": function(e, t, r) {
			e.exports = {
				Icon: "_3Y33QReHCnUZm9ewFAsk8C",
				icon: "_3Y33QReHCnUZm9ewFAsk8C"
			}
		},
		"./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./src/reddit/models/Image/index.tsx"),
				i = r("./src/reddit/components/EditableImage/index.tsx"),
				c = r("./src/reddit/components/UserIcon/index.tsx"),
				d = r("./src/reddit/models/User/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/ProfileImage/connector.ts"),
				u = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.m.less"),
				m = r.n(u);
			class p extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isUpdating: !1
					}, this.updateProfileIcon = async e => {
						const t = await Object(a.e)(e);
						this.setState({
							isUpdating: !0
						}, async () => {
							await this.props.imageUpdateRequested(t, "profileIcon"), this.setState({
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
						isProfileIdCard: a,
						userName: l
					} = this.props, {
						isUpdating: u
					} = this.state, p = o.a.createElement(c.a, {
						className: m.a.Icon,
						iconUrl: r,
						isNSFW: s,
						userName: l,
						isProfileIcon: !0
					});
					return t && Object(d.e)(t) === l ? o.a.createElement(i.a, {
						altText: n.fbt._("{userName} avatar image", [n.fbt._param("userName", l)], {
							hk: "1LJxYE"
						}),
						className: e,
						isProfileCard: a,
						isLoading: u,
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
				o = r("./src/reddit/actions/preferences.ts"),
				a = r("./src/reddit/selectors/user.ts");
			const i = Object(s.c)({
					currentUser: a.k,
					hideNSFWPref: a.F
				}),
				c = Object(n.b)(i, e => ({
					imageUpdateRequested: (t, r) => e(Object(o.C)(t, r))
				}));
			t.a = c
		},
		"./src/reddit/components/ProfileIdCard/ProfileNewPostButton/index.m.less": function(e, t, r) {
			e.exports = {
				button: "_2spwuTMFClUpwN0pWeYHnJ"
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router/esm/react-router.js"),
				c = r("./src/reddit/actions/post.ts"),
				d = r("./src/reddit/actions/snoovatarModal.ts"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/controls/Button/index.tsx"),
				m = r("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				f = r("./src/reddit/models/Vote/index.ts"),
				b = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				h = r.n(b);
			const {
				fbt: v
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(e => {
				let {
					isHovercard: t,
					username: r,
					isAvatarPost: i,
					post: b,
					share: g
				} = e;
				const x = Object(l.b)(),
					_ = Object(a.d)(),
					O = b && b.id,
					I = b && b.voteState;
				let C = null;
				O || (C = t ? "user_hovercard" : "profile_overview");
				const k = Object(s.useCallback)(() => x(Object(m.h)(t ? "user_hovercard" : "profile_overview", r)), [t, x, r]);
				return o.a.createElement(u.t, {
					onClick: () => {
						i ? (x(m.i), O && I === f.a.notVoted && _(Object(c.kb)(O))) : k();
						const e = i ? "postify" : "copy";
						_(Object(d.b)({
							clickSource: C,
							share: g,
							source: e
						}))
					},
					className: Object(n.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: i
					}),
					isFullWidth: !0
				}, o.a.createElement(p.a, {
					className: Object(n.a)({
						[h.a.shirtIcon]: !i,
						[h.a.avatarPostButtonShirtIcon]: i
					})
				}), v._("Try this Look", null, {
					hk: "dOuPb"
				}), o.a.createElement("div", {
					className: h.a.chevronIcon
				}))
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
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/Button/index.tsx"),
				i = r("./src/reddit/icons/fonts/index.tsx"),
				c = r("./src/reddit/icons/svgs/Shirt/index.tsx"),
				d = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				l = r.n(d);
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = function(e) {
				let {
					compact: t,
					currentUserHasSnoovatar: r,
					className: n,
					isOwnProfile: d,
					onClick: m
				} = e;
				return s.a.createElement(a.t, {
					onClick: m,
					isFullWidth: !0,
					className: Object(o.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !r && d,
						[l.a.compactButtonLayout]: t
					}, n)
				}, r ? s.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), r ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : d ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
					hk: "22FFcO"
				}), r ? s.a.createElement("div", {
					className: l.a.chevronIcon
				}) : s.a.createElement(i.a, {
					name: "caret_right",
					className: l.a.chevronIcon
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UnblockConfirmationModal/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "ProfileIdCardUnblockConfirmationModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("ProfileIdCardUnblockConfirmationModal").then(r.bind(null, "./src/reddit/components/ProfileIdCard/UnblockConfirmationModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/ProfileIdCard/UnblockConfirmationModal/index.tsx"
				}
			})
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
				return h
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/config.ts"),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/LottieAnimation/index.tsx"),
				d = r("./src/reddit/selectors/user.ts"),
				l = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.m.less"),
				f = r.n(p);
			const b = /(?:\/|-)nft-([a-z0-9]+)-([a-z]+)(?:-headshot)?\.(?:png|svg)/i;

			function h(e) {
				return !!e && b.test(e)
			}
			t.a = e => {
				let {
					isEmployee: t,
					isGold: r,
					isNSFW: p,
					snoovatarUrl: h,
					title: v,
					userCreated: g,
					username: x,
					url: _,
					className: O,
					actions: I,
					footer: C
				} = e;
				const {
					badge: k,
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
				})(h), [h]), j = Object(o.e)(d.db);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(i.a)(f.a.container, O)
				}, s.a.createElement(c.a, {
					className: f.a.cardAnimation,
					useCanvasRenderer: !0,
					assetUrl: `${a.a.assetPath}/img/snoovatars/nft_card_animation.json`,
					loop: !0
				}), s.a.createElement("div", {
					className: f.a.inner
				}, "testing" !== k && s.a.createElement("img", {
					alt: `${k} NFT`,
					className: f.a.badgeImage,
					src: `${a.a.assetPath}/img/snoovatars/nft_badge_${k}.svg`
				}), s.a.createElement("img", {
					className: f.a.cutout,
					src: `${a.a.assetPath}/img/snoovatars/hole-cutout-${j?"black":"white"}.svg`
				}), s.a.createElement("a", {
					href: P,
					target: "_blank",
					className: f.a.nftIcon,
					rel: "noopener noreferrer"
				}, s.a.createElement("img", {
					className: f.a.nftIconImage,
					alt: "View this NFT",
					src: `${a.a.assetPath}/img/snoovatars/nft_icon.svg`
				})), s.a.createElement("img", {
					className: f.a.snoovatarImage,
					src: h,
					alt: "Avatar NFT Image"
				}), s.a.createElement(m.a, {
					isEmployee: t,
					isGold: r,
					isNSFW: p,
					title: v,
					username: x
				}), s.a.createElement(u.a, {
					className: f.a.subUsername,
					shouldDisplaySnoovatar: !0,
					username: x,
					userCreated: g,
					url: _
				}), s.a.createElement(l.a, {
					className: f.a.highlights,
					highlightClassName: f.a.highlight,
					profileName: x,
					isOverlay: !1
				}), s.a.createElement("nav", {
					className: f.a.actions
				}, I))), s.a.createElement("div", {
					className: Object(i.a)(f.a.footer, O)
				}, C))
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
				o = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				a = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = r.n(c),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = r.n(l);
			t.a = function(e) {
				let {
					bannerBackgroundImage: t,
					isNSFW: r,
					username: n,
					editMode: c,
					isDeletingBanner: l,
					onDeleteBanner: m
				} = e;
				return s.a.createElement("div", {
					className: d.a.bannerWrapper
				}, s.a.createElement(i.a, {
					bannerUrl: t,
					isNSFW: r,
					userName: n
				}), c && t && (l ? s.a.createElement(o.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(a.a, {
					className: u.a.closeIcon,
					onClick: m
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
				o = r("./src/reddit/controls/InternalLink/index.tsx"),
				a = r("./src/reddit/components/HumanDate/index.tsx");

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
			t.a = function(e) {
				let {
					className: t,
					shouldDisplaySnoovatar: r,
					url: n,
					userCreated: c,
					username: d,
					...l
				} = e;
				const u = r ? s.a.createElement(s.a.Fragment, null, "u/", d, " · ", s.a.createElement(a.d, {
					seconds: c,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${d}`;
				return n ? s.a.createElement(o.default, i({}, l, {
					className: t,
					to: n
				}), u) : s.a.createElement("span", i({}, l, {
					className: t
				}), u)
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_2DTxp6tzlJMeNlZ-cjXWTs",
				closeIcon: "_2ioQgcdZvYlf34S0OEqBuQ",
				settingsIcon: "A4Iifg_NCOrfabq0ON3mW"
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return C
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/components/Econ/Marketplace/NftProfileUnit/async.ts"),
				d = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				l = r("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = r("./src/reddit/selectors/experiments/econ/marketplace.ts"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				p = r.n(m);
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			const f = 25;

			function b(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function h(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const v = b("particleDelay", p.a),
				g = b("particleX", p.a),
				x = b("particleFloat", p.a),
				_ = () => {
					const e = h(g),
						t = h(x),
						r = h(v);
					return Object(s.a)(p.a.particle, e, t, r)
				};
			class O extends a.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < f; t++) e.push(this.createParticle(t));
					return a.a.createElement("div", {
						role: "presentation",
						className: p.a.particleWrapper
					}, e)
				}
				createParticle(e) {
					return a.a.createElement("div", {
						key: e,
						className: `${_()}`
					})
				}
			}
			var I = O;
			const C = e => {
				let {
					className: t,
					isGold: r,
					snoovatarUrl: o,
					prefersReducedAnimations: m,
					origin: f
				} = e;
				const b = Object(i.e)(u.b),
					h = o && Object(l.d)(o) && b,
					v = f === d.a.Profile,
					g = f === d.a.Hovercard;
				return h ? a.a.createElement("div", {
					className: Object(s.a)({
						[p.a.profileTreatment]: v,
						[p.a.hovercardTreatment]: g
					})
				}, a.a.createElement("div", {
					className: p.a.nftProfileUnitContainer
				}, a.a.createElement(c.a, {
					className: p.a.nftProfileUnit,
					imageUrl: o,
					origin: f
				}))) : a.a.createElement("div", {
					className: Object(s.a)(p.a.snoovatarContainer, t)
				}, r && a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: p.a.topGlow
				}), a.a.createElement("div", {
					className: p.a.bottomGlow
				}), !m && a.a.createElement(I, null)), a.a.createElement("img", {
					className: Object(s.a)(p.a.snoovatar, {
						[p.a.premiumGlow]: r
					}),
					src: o,
					alt: n.fbt._("User Avatar", null, {
						hk: "3aQoRV"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./src/reddit/components/Admin/index.tsx"),
				c = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(l);
			t.a = e => {
				let {
					title: t,
					username: r,
					isEmployee: o,
					isGold: l,
					isNSFW: m
				} = e;
				return a.a.createElement("h1", {
					className: u.a.snoovatarUserTitle
				}, t || r, l && a.a.createElement("a", {
					title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", r)], {
						hk: "3Fylv"
					}),
					href: `${n.a.redditUrl}/premium`
				}, a.a.createElement(d.a, {
					className: u.a.snoovatarPremiumIcon
				})), o && a.a.createElement(i.a, null), m && a.a.createElement(c.a, {
					className: u.a.snoovatarNsfwIcon,
					title: s.fbt._("NSFW - Adult Content", null, {
						hk: "2Iw7mN"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less": function(e, t, r) {
			e.exports = {
				snoovatarContainer: "_34XIqvI8-YT1wukR_W8vj6",
				profileTreatment: "_2xpFvOlDs0HF8bwR0pDmqt",
				hovercardTreatment: "_34eH8NsQ_ay5kowUWt9-6E",
				nftProfileUnitContainer: "OfvB_Czxn5wwXiBN6RVlG",
				nftProfileUnit: "n5OW4wkmX5R3yYizuJXw1",
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
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/controls/InternalLink/index.tsx"),
				i = r("./src/reddit/helpers/trackers/marketplace/claims.ts"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				f = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				b = r.n(f),
				h = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				v = r.n(h),
				g = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/AvatarImage.tsx"),
				x = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = e => {
				let {
					bannerBackgroundImage: t,
					compact: r,
					currentUserHasSnoovatar: n,
					editMode: f,
					isDeletingBanner: h,
					isEmployee: _,
					isGold: O,
					isNSFW: I,
					isOwnProfile: C,
					onClickSnoovatar: k,
					onDeleteBanner: P,
					prefersReducedAnimations: j,
					snoovatarUrl: E,
					title: y,
					userCreated: N,
					username: S,
					url: w,
					isHovercard: U
				} = e;
				const L = Object(o.e)(e => !C && !!E && Object(d.f)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: t,
					editMode: !!f,
					isNSFW: I,
					username: S,
					isDeletingBanner: !!h,
					onDeleteBanner: P
				}), !f && C && s.a.createElement(a.default, {
					to: "/settings/profile",
					className: b.a.snoovatarSettingsLink
				}, s.a.createElement(c.a, {
					name: "settings",
					className: v.a.settingsIcon
				})), s.a.createElement(g.a, {
					isGold: O,
					snoovatarUrl: E,
					prefersReducedAnimations: j,
					origin: U ? i.a.Hovercard : i.a.Profile
				}), s.a.createElement(x.a, {
					isEmployee: _,
					isGold: O,
					isNSFW: I,
					title: y,
					username: S
				}), s.a.createElement(p.a, {
					className: b.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: S,
					userCreated: N,
					url: w
				}), (C || !n && !!E) && s.a.createElement(l.a, {
					compact: r,
					currentUserHasSnoovatar: n,
					isOwnProfile: C,
					onClick: k
				}), L && s.a.createElement(u.a, {
					username: S,
					isHovercard: !!U,
					share: {
						username: S
					}
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
			var n, s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/actions/snoovatarModal.ts"),
				d = r("./src/reddit/actions/subscription/index.ts"),
				l = r("./src/reddit/actions/userBlocks.ts"),
				u = r("./src/reddit/components/ChatButton/index.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/constants/posts.ts"),
				b = r("./src/reddit/controls/Button/index.tsx"),
				h = r("./src/reddit/constants/tracking.ts"),
				v = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.FOLLOW = "follow", e.UNFOLLOW = "unfollow", e.CREATE_POST = "create_post"
			}(n || (n = {}));
			const g = (e, t) => ({
				...Object(v.n)(t),
				profile: Object(v.k)(t),
				subreddit: {
					id: e
				}
			});
			var x = r("./src/reddit/helpers/trackers/user.ts"),
				_ = r("./src/reddit/selectors/gold/awardIcon.ts"),
				O = r("./src/reddit/selectors/platform.ts"),
				I = r("./src/reddit/selectors/profile.ts"),
				C = r("./src/reddit/selectors/structuredStyles.ts"),
				k = r("./src/reddit/selectors/tooltip.ts"),
				P = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/selectors/userPrefs.ts"),
				E = r("./src/reddit/constants/experiments.ts"),
				y = r("./src/reddit/helpers/chooseVariant/index.ts");
			var N = r("./node_modules/fbt/lib/FbtPublic.js"),
				S = r("./node_modules/lodash/compact.js"),
				w = r.n(S),
				U = r("./src/config.ts"),
				L = r("./src/lib/classNames/index.ts"),
				F = r("./src/lib/loadableAction/index.ts"),
				T = r("./src/lib/copyToClipboard/index.ts"),
				A = r("./src/reddit/actions/toaster.ts"),
				B = r("./src/reddit/endpoints/chat/userSettings.ts"),
				D = r("./src/reddit/models/Toast/index.ts");
			var M = r("./src/reddit/actions/gold/modals.ts"),
				R = r("./src/reddit/actions/modal.ts"),
				G = r("./src/reddit/actions/profile/index.ts"),
				W = r("./src/reddit/components/CrisisFlow/index.tsx"),
				H = r("./src/higherOrderComponents/makeAsync.tsx"),
				q = r("./src/lib/loadWithRetries/index.ts");
			var z = Object(H.a)({
					getComponent: () => Object(q.a)(() => r.e("GivePremiumModal").then(r.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				K = r("./src/reddit/constants/modals.ts"),
				Z = r("./src/reddit/helpers/correlationIdTracker.ts"),
				Y = r("./src/reddit/helpers/styles/mixins/loading.ts"),
				Q = r("./src/reddit/models/Gold/Premium/index.ts"),
				V = r("./src/reddit/selectors/experiments/chatInviteLinkSharing.ts"),
				X = r("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				J = r("./src/reddit/selectors/premium.ts"),
				$ = r("./src/reddit/components/ProfileIdCard/footer.m.less"),
				ee = r.n($);

			function te() {
				return (te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const re = Object(i.c)({
					areModeratedSubredditsPending: I.b,
					coinsToSpend: P.e,
					givePremiumModalIsOpen: J.c,
					hasFetchedModerators: I.l,
					isEmployee: P.N,
					isLoggedIn: P.Q,
					profile: I.k,
					crisisFlowEnabled: X.b,
					chatInviteLinkSharing: V.a
				}),
				ne = e => {
					let {
						isLoading: t,
						...r
					} = e;
					return o.a.createElement("div", te({}, r, {
						className: Object(L.a)(ee.a.Shimmer, Object(Y.b)({
							isLoading: t
						}))
					}))
				};
			class se extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1,
						showCrisisModal: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						e(Object(Z.d)(Z.a.GiftPremiumFlow));
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
							chatInviteLinkSharing: r,
							coinsToSpend: n,
							hasSubreddit: s,
							isEmployee: o,
							isLoggedIn: a,
							isModerator: i,
							isOwnProfile: c,
							profileName: d,
							profile: l,
							crisisFlowEnabled: u,
							userAcceptsPms: m,
							onClickBlockUser: p,
							onClickChatInviteLink: f,
							onClickUnblockUser: b,
							isUserBlocked: h
						} = this.props, v = a && Object(Q.d)(n, o).length && !c || o, g = w()([(c || i) && s ? {
							text: N.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: `/user/${d}/about/edit/moderation`,
							isInternalLink: !0
						} : void 0, !c && m ? {
							text: N.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: `${U.a.redditUrl}/message/compose/?to=${d}`
						} : void 0, a && !c ? {
							onClick: h ? b : p,
							text: h ? N.fbt._("Unblock User", null, {
								hk: "1onWdM"
							}) : N.fbt._("Block User", null, {
								hk: "4ltcgv"
							})
						} : void 0, !c && t ? {
							text: N.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: `${U.a.redditUrl}/user/${d}/snoo`
						} : void 0, !c && u ? {
							text: N.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, !c && l ? {
							text: N.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: `${U.a.redditUrl}/api/report_redirect?reason_code=USER_PROFILE&thing=${l.id}`
						} : void 0, a && l && !l.isQuarantined ? {
							onClick: e,
							text: N.fbt._("Add to Custom Feed", null, {
								hk: "3ZtOdG"
							})
						} : void 0, c && a && r ? {
							onClick: f,
							text: N.fbt._("Invite someone to chat", null, {
								hk: "1ndvHF"
							})
						} : void 0]);
						return v && g.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: N.fbt._("Give Premium", null, {
								hk: "2wyUqF"
							})
						}), g
					}, this.moreOptionsToggled = () => {
						!this.state.expanded && this.canLoadMods() && this.props.onModeratorsRequested(), this.setState(e => {
							let {
								expanded: t
							} = e;
							return {
								expanded: !t
							}
						})
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
					const n = (t ? r : []).map(e => e.url ? e.isInternalLink ? o.a.createElement(b.t, {
						kind: b.b.InternalLink,
						priority: b.c.Plain,
						size: b.d.XS,
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: ee.a.menuItem
					}, e.text) : o.a.createElement(b.t, {
						kind: b.b.ExternalLink,
						priority: b.c.Plain,
						size: b.d.XS,
						key: e.url,
						href: e.url,
						onClick: e.onClick,
						className: ee.a.menuItem
					}, e.text) : o.a.createElement(b.t, {
						priority: b.c.Plain,
						size: b.d.XS,
						className: ee.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (n.unshift(o.a.createElement("div", {
						className: ee.a.menuItem,
						key: "loading-1"
					}, o.a.createElement(ne, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), n.unshift(o.a.createElement("div", {
						className: ee.a.menuItem,
						key: "loading-2"
					}, o.a.createElement(ne, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const s = t ? N.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : N.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return o.a.createElement("div", {
						className: ee.a.container
					}, n, o.a.createElement("div", {
						className: ee.a.expandContainer
					}, o.a.createElement(b.r, {
						className: ee.a.expandButton,
						onClick: this.moreOptionsToggled
					}, s)), e && o.a.createElement(z, null), this.state.showCrisisModal && o.a.createElement(W.b, {
						withOverlay: !0,
						overlayCustomStyles: W.a,
						fromUserProfile: !0,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var oe = Object(a.b)(re, (e, t) => {
					let {
						profileName: n,
						sendEvent: s
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(F.a)(() => Promise.all([r.e("CollectionCommentsPage~CommentsPage~CountryPage~FramedGild~GildModal~GovernanceReleaseNotesModal~Mem~c8b748a6"), r.e("CollectionCommentsPage~CommentsPage~CountryPage~Frontpage~GovernanceReleaseNotesModal~ModListing~Mod~e3d63e32"), r.e("CountryPage~Multireddit~reddit-components-AdHocMultiredditSidebar"), r.e("CountryPage~Multireddit"), r.e("Multireddit")]).then(r.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(R.h)(K.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: t => e(Object(M.e)({
							correlationId: t,
							profileName: n
						})),
						onModeratorsRequested: () => e(Object(G.b)(n)),
						onClickBlockUser: () => {
							e(Object(l.h)(n)), s(Object(x.a)(n))
						},
						onClickUnblockUser: () => {
							e(Object(l.g)(n)), s(Object(x.h)(n))
						},
						onClickChatInviteLink: () => e((() => async (e, t, r) => {
							let {
								gqlContext: n
							} = r;
							const s = await Object(B.a)(n());
							if (s.ok) {
								const t = s.body.data.createChatChannelInviteLink.inviteUrl;
								if (t) {
									Object(T.a)(t);
									const r = Object(A.e)(N.fbt._("Copied link!", null, {
										hk: "4a4E1x"
									}), D.b.SuccessCommunity);
									e(Object(A.f)(r))
								}
							} else {
								const t = Object(A.e)(N.fbt._("Something went wrong", null, {
									hk: "22u7ha"
								}), D.b.Error);
								e(Object(A.f)(t))
							}
						})())
					}
				})(se),
				ae = r("./src/reddit/helpers/trackers/postComposer.ts"),
				ie = r("./src/reddit/components/ProfileIdCard/ProfileNewPostButton/index.m.less"),
				ce = r.n(ie);
			const {
				fbt: de
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var le = e => {
					let {
						username: t,
						currentUserHasSubreddit: r
					} = e;
					const n = Object(p.b)(),
						a = Object(s.useCallback)(() => n(Object(ae.x)({
							actionInfoType: "profile"
						})), [n]);
					return o.a.createElement(b.a, {
						className: ce.a.button,
						kind: b.b.InternalLink,
						to: r ? `/user/${t}/submit` : "/submit",
						onClick: a
					}, de._("New Post", null, {
						hk: "2VCZwF"
					}))
				},
				ue = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx"),
				me = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				pe = r.n(me),
				fe = r("./src/reddit/components/ProfileIdCard/UnblockConfirmationModal/async.tsx");
			const {
				fbt: be
			} = r("./node_modules/fbt/lib/FbtPublic.js"), he = Object(i.c)({
				account: P.k,
				activeTooltipId: k.a,
				currentUserHasSubreddit: P.h,
				hideNSFWPref: P.F,
				isModerator: I.g,
				prefersReducedAnimations: j.d,
				profile: I.k,
				profileAboutInfo: I.i,
				topAwardIcon: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(_.e)(e, {
						userName: r,
						minSize: 32
					})
				},
				structuredStyle: (e, t) => Object(C.m)(e, Object(I.n)(e, t.profileName)),
				userHasSubreddit: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(P.Bb)(e, {
						userName: r
					})
				},
				user: (e, t) => {
					let {
						profileName: r
					} = t;
					return Object(P.Ab)(e, {
						userName: r
					})
				},
				page: O.b,
				allowNFTs: e => Object(y.c)(e, {
					experimentEligibilitySelector: y.a,
					experimentName: E.w
				}) === E.y.Enabled,
				isUserBlocked: P.L
			}), ve = e => {
				let {
					username: t,
					currentUserHasSubreddit: r,
					id: n
				} = e;
				return o.a.createElement("div", {
					className: pe.a.actionItem
				}, o.a.createElement(le, {
					username: t,
					currentUserHasSubreddit: r
				}))
			}, ge = e => {
				let {
					profileName: t,
					toggleFollow: r,
					userIsSubscriber: n,
					isUserBlocked: a,
					onClickUnblockUser: i,
					enableFollowers: c
				} = e;
				const [d, l] = Object(s.useState)(!1);
				return a ? o.a.createElement("div", {
					className: pe.a.actionItem
				}, o.a.createElement(b.k, {
					isFullWidth: !0,
					onClick: () => {
						i(t)
					},
					onMouseOver: () => {
						l(!0)
					},
					onMouseOut: () => {
						l(!1)
					}
				}, d ? be._("Unblock", null, {
					hk: "2d6Cyx"
				}) : be._("Blocked", null, {
					hk: "1wiBJY"
				}))) : c ? o.a.createElement("div", {
					className: pe.a.actionItem
				}, n ? o.a.createElement(b.o, {
					className: pe.a.button,
					onClick: () => r(t, n)
				}, be._("Unfollow", null, {
					hk: "1nM1SO"
				})) : o.a.createElement(b.l, {
					className: pe.a.button,
					onClick: () => r(t, n)
				}, be._("Follow", null, {
					hk: "OPQuq"
				}))) : o.a.createElement(o.a.Fragment, null)
			}, xe = e => {
				let {
					userId: t
				} = e;
				return o.a.createElement("div", {
					className: pe.a.actionItem
				}, o.a.createElement(u.b, {
					contextId: t,
					className: pe.a.button,
					userId: t,
					text: be._("Chat", null, {
						hk: "UKkIW"
					})
				}))
			};
			t.default = Object(a.b)(he, e => ({
				onToggleFollow: (t, r) => e(Object(d.d)([{
					name: t,
					type: f.a.PROFILE
				}], !r)),
				onClickSnoovatar: () => e(Object(c.b)({
					clickSource: "profile_overview"
				})),
				onClickUnblockUser: t => e(Object(l.g)(t))
			}))(Object(p.c)(e => {
				const [t, r] = Object(s.useState)(!1), {
					account: a,
					currentUserHasSubreddit: i,
					hideNSFWPref: c,
					isModerator: d,
					isOverlay: l,
					isSubmissionPage: u,
					onClickSnoovatar: p,
					onToggleFollow: f,
					profile: b,
					profileAboutInfo: v,
					sendEvent: _,
					structuredStyle: O,
					topAwardIcon: I,
					userHasSubreddit: C,
					allowNFTs: k,
					user: P,
					page: j,
					prefersReducedAnimations: E,
					isUserBlocked: y,
					onClickUnblockUser: N
				} = e;
				if (!P) return null;
				const {
					accountIcon: S,
					awardedLastMonth: w,
					created: U,
					enableFollowers: L,
					id: F,
					isEmployee: T,
					isGold: A,
					prefShowSnoovatar: B,
					snoovatarFullBodyAsset: D,
					username: M
				} = P, R = !!a && a.id === F, G = !(!a || !a.snoovatarFullBodyAsset), W = O && O.bannerBackgroundImage, H = !!b && b.isNSFW, q = H && c, z = !(!v || !v.userIsSubscriber), K = `/user/${M}/`, Z = j && j.url === K, Y = !v || v.acceptChats, Q = !v || v.acceptPms, V = k && Object(ue.b)(D), X = () => {
					r(e => !e)
				};
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
					isEmployee: T,
					isGold: A,
					isNSFW: H,
					isNftPreview: V,
					isOverlay: l,
					isOwnProfile: R,
					publicDescription: v ? v.publicDescription : void 0,
					title: b ? b.title : void 0,
					url: Z ? null : K,
					userCreated: U,
					username: M,
					recentAwardings: w,
					currentUserHasSnoovatar: G,
					prefersReducedAnimations: !!E,
					shouldShowSocialLinks: !0,
					snoovatarUrl: D,
					topAwardIcon: I,
					actions: o.a.createElement(o.a.Fragment, null, R && !u && ve({
						username: M,
						currentUserHasSubreddit: i,
						id: F
					}), !R && C && o.a.createElement(ge, {
						profileName: M,
						toggleFollow: (e, t) => {
							f(e, t), _(t ? (e => t => ({
								...g(e, t),
								source: "profile",
								action: h.c.CLICK,
								noun: n.UNFOLLOW
							}))(F) : (e => t => ({
								...g(e, t),
								source: "profile",
								action: h.c.CLICK,
								noun: n.FOLLOW
							}))(F))
						},
						userIsSubscriber: z,
						isUserBlocked: y,
						onClickUnblockUser: X,
						enableFollowers: L
					}), !!a && !R && !y && Y && xe({
						userId: F
					})),
					footer: y ? void 0 : o.a.createElement(oe, {
						hasSubreddit: C,
						isModerator: d,
						isOwnProfile: R,
						allowViewSnoovatar: B,
						profileName: M,
						sendEvent: _,
						userAcceptsPms: Q,
						isUserBlocked: y
					}),
					onClickSnoovatar: p,
					profileIcon: S,
					bannerBackgroundImage: q ? void 0 : W
				}), t && o.a.createElement(fe.a, {
					onClose: X,
					onConfirm: e => {
						X(), N(e), _(Object(x.h)(M))
					},
					username: M,
					withOverlay: !0
				}))
			}))
		},
		"./src/reddit/components/SocialLinks/async.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "SocialLinks",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!r.m[t]
				},
				importAsync: () => r.e("SocialLinks").then(r.bind(null, "./src/reddit/components/SocialLinks/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return r(t)
				},
				resolve() {
					return "./src/reddit/components/SocialLinks/index.tsx"
				}
			})
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
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/SEOTitle/index.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.m.less"),
				c = r.n(i);
			const d = o.a.div("WidgetBackground", c.a),
				l = o.a.wrapped(e => {
					let {
						children: t,
						...r
					} = e;
					return s.a.createElement("div", r, s.a.createElement(a.b, {
						type: a.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => s.a.createElement("div", {
				className: e.className
			}, s.a.createElement(d, null, e.children))
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			class o extends s.a.Component {
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
					} = this, r = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, o = r || n;
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
					}), (!o || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
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
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(a);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(i.a.loadingIcon, r, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/accounts/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				i = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			const d = async (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/block_user`,
				method: s.mb.POST
			}), l = async (e, t, r) => Object(o.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.mb.POST
			}), u = async (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.mb.POST
			}), m = async (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.mb.POST
			}), p = async (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
				endpoint: Object(c.a)(`${n.a.oauthUrl}/user/${t}/about`),
				method: s.mb.GET,
				data: {
					raw_json: 1
				}
			})
		},
		"./src/reddit/endpoints/chat/userSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return b
			})), r.d(t, "a", (function() {
				return h
			}));
			var n = r("./src/config.ts"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/redditGQL/operations/UpdateChatMessagesAsRead.json"),
				d = r("./src/reddit/constants/headers.ts"),
				l = r("./src/redditGQL/operations/CreateChatChannelInviteLink.json"),
				u = r("./src/redditGQL/types.ts");
			const m = e => Boolean(e && e.data && (null == e ? void 0 : e.errors)),
				p = e => Object(o.a)(Object(i.a)(e, [d.a]), {
					endpoint: `${n.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.mb.GET
				}),
				f = async (e, t) => Object(o.a)(Object(i.a)(t, [d.a]), {
					endpoint: `${n.a.sendbirdServiceUrl}/api/v1/chat/me/settings`,
					method: s.mb.PUT,
					data: JSON.stringify({
						invite_policy: e
					})
				}), b = (e, t) => {
					const r = {
						channels: t
					};
					return Object(a.a)(e, {
						...c,
						variables: {
							input: r
						}
					})
				}, h = e => Object(a.a)(e, {
					...l,
					variables: {
						input: {
							customType: u.c.Direct
						}
					}
				})
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			}));
			var n = r("./src/redditGQL/operations/SubscribedSubreddits.json"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				d = r("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(a.a)(e, n);
			const l = (e, t) => {
					let {
						subredditIds: r,
						subredditNames: n,
						subscribe: a
					} = t;
					return Object(o.a)(Object(i.a)(e, [c.a]), {
						method: s.mb.POST,
						endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: a ? "sub" : "unsub",
							sr: r && r.join(",") || void 0,
							sr_name: n && n.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, r) => Object(o.a)(Object(i.a)(e, [c.a]), {
					method: s.mb.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: r ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
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
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/lib/classNames/index.ts"),
				s = r("./src/reddit/helpers/styles/mixins/loading.m.less"),
				o = r.n(s);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(o.a.loadingBackground, {
						[o.a["m-loading"]]: t
					})
				},
				i = e => Object(n.a)(o.a.loadingBar, a(e))
		},
		"./src/reddit/helpers/trackers/followers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/tracking.ts"),
				s = r("./src/reddit/selectors/telemetry.ts");
			const o = e => t => ({
					...Object(s.n)(t),
					action: n.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				a = () => e => ({
					...Object(s.n)(e),
					action: n.c.CLICK,
					noun: "follower_list_cta",
					source: "profile"
				})
		},
		"./src/reddit/helpers/trackers/marketplace/claims.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "e", (function() {
				return c
			}));
			var n = r("./src/reddit/selectors/telemetry.ts");
			const s = () => e => ({
					...Object(n.n)(e),
					source: "marketplace",
					action: "view",
					noun: "claim_post_unit"
				}),
				o = () => e => ({
					...Object(n.n)(e),
					source: "marketplace",
					action: "click",
					noun: "claim_post_unit"
				}),
				a = () => e => ({
					...Object(n.n)(e),
					source: "marketplace",
					action: "close",
					noun: "claim_post_unit"
				});
			var i;
			! function(e) {
				e.Profile = "profile", e.Hovercard = "hovercard"
			}(i || (i = {}));
			const c = e => t => {
				const r = Object(n.n)(t);
				return {
					...r,
					source: "marketplace",
					action: "view",
					noun: "product_detail_page",
					actionInfo: {
						...r.actionInfo,
						reason: e,
						pageType: "product_detail_page"
					}
				}
			}
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "h", (function() {
				return f
			}));
			var n = r("./src/reddit/helpers/correlationIdTracker.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const a = e => ({
					screen: s.ab(e),
					profile: s.S(e),
					subreddit: s.ib(e)
				}),
				i = e => t => ({
					source: "user_dropdown",
					action: "click",
					noun: e ? "night_mode_off" : "night_mode_on",
					...a(t)
				}),
				c = e => t => ({
					source: "nav",
					action: "click",
					actionInfo: {
						pageType: t.platform.currentPage ? s.u(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...a(t)
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...a(e)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				u = () => e => ({
					source: "nav",
					action: "click",
					noun: "advertise",
					...a(e)
				}),
				m = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "coins",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...a(e)
				}),
				p = e => t => ({
					source: "profile",
					action: "click",
					noun: "block_user",
					targetUser: {
						id: Object(o.Ab)(t, {
							userName: e
						}).id
					},
					...s.n(t)
				}),
				f = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(o.Ab)(t, {
							userName: e
						}).id
					},
					...s.n(t)
				})
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/selectors/meta.ts");
			const i = "undefined" == typeof document ? function() {
				const e = Object(o.e)(a.j) || s.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			};
			t.a = i;
			const c = () => {
				const e = i(),
					t = Object(o.e)(a.b);
				return t ? e.replace(/([a-z]+-)([A-Z]+)/, `$1${t}`) : e
			}
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
			t.a = function(e) {
				let {
					className: t
				} = e;
				return s.a.createElement("svg", {
					className: t,
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
		"./src/reddit/selectors/blockedRedditors.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			r("./src/reddit/selectors/user.ts");
			const n = e => e.blockedRedditors.api.pending,
				s = e => e.blockedRedditors.list,
				o = (e, t) => {
					const r = (e => {
						const t = s(e);
						return t && t.ids
					})(e);
					return !!r && r.includes(t)
				}
		},
		"./src/reddit/selectors/experiments/chatInviteLinkSharing.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const a = e => Object(s.c)(e, {
				experimentName: n.G,
				experimentEligibilitySelector: () => Object(o.P)(e)
			}) === n.Pd
		},
		"./src/reddit/selectors/experiments/crisisTextLine.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/user.ts");
			const a = e => n.d.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: o.Q,
					experimentName: n.j
				}),
				i = e => n.f.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: o.Q,
					experimentName: n.o
				})
		},
		"./src/reddit/selectors/experiments/econ/marketplace.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
					return !(Object(s.c)(e, {
						experimentEligibilitySelector: s.a,
						experimentName: n.ye
					}) === n.Pd)
				},
				a = e => Object(s.c)(e, {
					experimentEligibilitySelector: s.a,
					experimentName: n.ze
				}) === n.Pd
		},
		"./src/reddit/selectors/premium.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return n
			})), r.d(t, "d", (function() {
				return s
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return a
			}));
			const n = e => !!e.givePremium.givePremiumModalAccountName,
				s = e => e.givePremium.givePremiumModalAccountName,
				o = e => e.givePremium.api.error || "",
				a = e => e.givePremium.api.pending
		},
		"./src/redditGQL/operations/FetchBlockedRedditorsInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"1e9183c00f76"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		},
		"./src/redditGQL/operations/UpdateChatMessagesAsRead.json": function(e) {
			e.exports = JSON.parse('{"id":"bfc6fe51708d"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.6d20992fc8ad9c85140f.js.map