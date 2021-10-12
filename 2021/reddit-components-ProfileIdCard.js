// https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.68f7c125ef4e96a4a907.js
// Retrieved at 10/12/2021, 11:40:05 AM by Reddit Dataminer v1.0.0
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
				return o
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/constants/intlSupport.ts");

			function o(e, {
				showDay: t,
				useUtc: r,
				shortMonths: o,
				locale: a = n.C
			} = {}) {
				const i = new Date(e * n.Pb);
				return s.a ? new Intl.DateTimeFormat(a, {
					month: o ? "short" : "long",
					day: t ? "numeric" : void 0,
					year: "numeric",
					timeZone: r ? "UTC" : void 0
				}).format(i) : i.toLocaleString()
			}
		},
		"./src/lib/humanizeUTCDate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/lib/constants/index.ts");
			t.a = (e, t = n.C) => {
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
				return u
			})), r.d(t, "d", (function() {
				return m
			})), r.d(t, "f", (function() {
				return p
			})), r.d(t, "h", (function() {
				return f
			})), r.d(t, "g", (function() {
				return x
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
				g = Object(n.a)(u),
				h = Object(n.a)(m),
				x = () => async (e, t, {
					gqlContext: r
				}) => {
					const n = t(),
						s = Object(i.a)(n);
					if (Object(i.b)(n) || s.timestamp && Date.now() - s.timestamp < 36e6) return;
					let o = !1,
						c = "";
					do {
						e(h());
						const t = {
								after: c,
								pageSize: 100
							},
							n = await a(r(), t);
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
								if (e(g(n.map(e => e.node.id))), r) {
									const {
										hasNextPage: e,
										endCursor: t
									} = r;
									o = e, c = t || ""
								}
							} else o = !1
						} else {
							o = !1;
							const t = n.error ? n.error.type : "unknown error";
							e(b({
								message: t
							}))
						}
					} while (o)
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
				return S
			})), r.d(t, "d", (function() {
				return F
			})), r.d(t, "c", (function() {
				return B
			})), r.d(t, "a", (function() {
				return M
			})), r.d(t, "b", (function() {
				return A
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts"),
				o = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/linkMatchers/customLinks.ts"),
				i = r("./src/reddit/actions/login.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/subscription/constants.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/reddit/constants/posts.ts"),
				m = r("./src/lib/makeApiRequest/index.ts"),
				p = r("./src/lib/omitHeaders/index.ts"),
				f = r("./src/reddit/constants/headers.ts");
			var b = r("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				g = r("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				h = r("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				x = r("./src/reddit/models/GqlTopLevelField.ts"),
				v = r("./src/reddit/models/User/index.ts");

			function _(e) {
				const t = [],
					r = [],
					n = {},
					s = {},
					{
						followedRedditorsInfo: o
					} = e.identity;
				for (const i of o.edges) {
					if (i.node.__typename !== v.c.AvailableRedditor || !i.node.profile) continue;
					const e = Object(g.a)(i.node.profile);
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
					if (i.node.__typename !== x.a.Subreddit) continue;
					const e = Object(h.a)(i.node);
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
			var I = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/selectors/profile.ts"),
				C = r("./src/reddit/selectors/subreddit.ts"),
				P = r("./src/reddit/selectors/subscriptions.ts"),
				E = r("./src/reddit/selectors/user.ts");
			const k = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				j = Object(o.a)(d.c),
				N = Object(o.a)(d.b),
				w = Object(o.a)(d.a),
				y = Object(o.a)(d.h),
				S = (Object(o.a)(d.i), Object(o.a)(d.g), () => async (e, t, {
					gqlContext: r
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(N());
					const s = await Object(b.a)(r());
					if (s.ok) {
						const t = _(s.body.data);
						e(j(t))
					} else e(w({
						error: s.error
					}))
				}),
				U = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				F = (e, t, r) => async (o, d, {
					apiContext: m
				}) => {
					let p = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(C.B)(d(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(O.m)(d(), e.name),
						name: `${s.fc}${e.name}`,
						type: e.type
					});
					if (!Object(E.K)(d())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(i.k)());
					const f = Object(E.k)(d());
					if (f) {
						const t = p.length,
							r = e.length;
						if (p = p.filter(e => !U(f, e)), (e = e.filter(e => !U(f, e))).length !== r || p.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, I.b.Error)))
						}
						if (!e.length && !p.length) return
					}
					if (o(y({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(P.b)(d()),
							userIsSubscriber: t,
							widgetId: r
						})), (await Object(b.c)(m(), {
							subredditNames: p.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						const r = 1 === e.length ? `${"subreddit"===e[0].type?a.d.subreddit:a.d.profile}${e[0].name}` : n.fbt._({
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
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? s : i : t ? c : d
						}))
					} else {
						o(y({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: d().profiles.models,
							subredditModels: d().subreddits.models,
							subscriptionsCount: Object(P.b)(d()),
							userIsSubscriber: !t,
							widgetId: r
						}));
						const s = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.f)(Object(l.e)(s, I.b.Error)))
					}
				}, T = Object(o.a)(d.f), B = e => async (t, r, {
					apiContext: n
				}) => {
					const s = r(),
						o = Object(C.I)(s, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const a = e.type === u.a.SUBREDDIT ? o.name : `u_${o.name}`,
						i = s.subscriptions.favoriteSubredditOrder || [],
						c = s.subscriptions.favoriteProfileOrder || [],
						d = i.indexOf(e.id),
						m = c.indexOf(e.id),
						p = -1 === d && -1 === m,
						f = s.subreddits.models,
						g = s.profiles.models;
					t(T({
						makeFavorite: p,
						identifier: e,
						subredditModels: f,
						profileModels: g
					}));
					const h = {
							type: e.type,
							name: o.name
						},
						x = () => Object(C.cb)(r(), {
							identifier: h
						});
					(x() || (await t(F([h], !0)), x())) && ((await Object(b.b)(n(), a, p)).ok || (t(T({
						makeFavorite: !p,
						identifier: e,
						subredditModels: f,
						profileModels: g
					})), t(Object(l.f)({
						text: k(),
						kind: I.b.Error
					}))))
				}, L = Object(o.a)(d.d), M = e => async (t, r, {
					apiContext: n
				}) => {
					const o = r().multireddits.models,
						a = () => {
							t(Object(l.f)({
								text: k(),
								kind: I.b.Error
							}))
						},
						i = o[e];
					if (!i) return void a();
					const c = !i.isFavorited;
					t(L({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, r) => Object(m.a)(Object(p.a)(e, [f.a]), {
						method: s.ib.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: r ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(n(), e, c)).ok || (t(L({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), a())
				}, D = Object(o.a)(d.e), A = e => async (t, r, {
					apiContext: o
				}) => {
					const a = r(),
						i = a.multireddits.models;
					if (!Object(E.K)(a)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "2I4uia"
								}) : n.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: I.b.Error
							}))
						},
						d = i[e];
					if (!d) return void c();
					const u = !d.isFollowed;
					t(D({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: i
					})), (await ((e, t, r) => Object(m.a)(Object(p.a)(e, [f.a]), {
						method: s.ib.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: r ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, u)).ok || (t(D({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: i
					})), c(u))
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
				return g
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "a", (function() {
				return v
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
				g = e => async (t, r, {
					apiContext: s
				}) => {
					if (r().blockUser.api.pending[e]) return;
					t(p({
						username: e
					}));
					const d = await Object(i.a)(s(), e),
						l = `error-block-${e}`;
					if (d.ok) d.body.name && t(f(d.body)), d.body.id && t(Object(o.f)(d.body.id)), t(a.g(l)), t(a.f({
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
						t(b(r)), t(a.f({
							id: l,
							kind: c.b.Error,
							text: n.fbt._("An error has occured. Please try again later", null, {
								hk: "2FpsLy"
							}),
							buttonText: n.fbt._("Retry", null, {
								hk: "36rgQw"
							}),
							buttonAction: g(e)
						}))
					}
				}, h = "USER_UNBLOCK__PENDING", x = "USER_UNBLOCK__SUCCESS", v = "USER_UNBLOCK__FAILED", _ = Object(s.a)(h), I = Object(s.a)(x), O = Object(s.a)(v), C = e => async (t, r, {
					apiContext: s
				}) => {
					const l = r(),
						u = Object(d.k)(l),
						m = u ? u.id : void 0,
						p = l.user.blocked.data.filter(t => t.name === e)[0];
					m && (t(_({
						name: e
					})), (await Object(i.c)(s(), m, e)).ok ? (t(I({
						name: e
					})), p && p.id && t(Object(o.h)(p.id)), t(a.f({
						kind: c.b.SuccessCommunity,
						text: n.fbt._("{username} is now unblocked", [n.fbt._param("username", e)], {
							hk: "4CEi6N"
						})
					}))) : (t(a.f({
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
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/actions/chat/toggle.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				d = r("./src/reddit/controls/Button/index.tsx"),
				l = r("./src/reddit/helpers/trackers/authorHovercard.ts");
			! function(e) {
				e.awardNotification = "AWARD_NOTIFICATION"
			}(n || (n = {}));
			const u = ({
				onStartChat: e,
				text: t,
				className: r,
				sendEvent: s,
				contextId: a,
				priority: i,
				Icon: c,
				redditStyle: u,
				isFullWidth: m,
				eventSource: p,
				onClick: f,
				onAddUserToQuickReplyList: b,
				children: g
			}) => {
				return o.a.createElement(d.s, {
					onClick: t => {
						if (f && f(t), e(), p === n.awardNotification) return b();
						s(Object(l.b)(a))
					},
					className: r,
					text: t,
					priority: i,
					Icon: c,
					redditStyle: u,
					isFullWidth: m
				}, g)
			};
			u.displayName = "ChatButton";
			const m = Object(a.b)(null, (e, {
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
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/controls/ImageInput/index.tsx"),
				i = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/models/ApiRequestState/index.ts"),
				l = r("./src/reddit/components/EditableImage/index.m.less"),
				u = r.n(l);
			const {
				fbt: m
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
						className: Object(o.a)(u.a.Container, r)
					}, s.a.createElement("label", {
						className: u.a.HitBox
					}, s.a.createElement("span", {
						className: u.a.ImageContainer,
						role: "presentation"
					}, l ? s.a.createElement("img", {
						alt: e,
						className: u.a.Image,
						src: l
					}) : t), s.a.createElement(a.a, {
						className: u.a.ImageUploader,
						multiple: !1,
						onChange: this.selectFile
					}), !d && s.a.createElement("div", {
						className: Object(o.a)(u.a.EditButton, n)
					}, s.a.createElement(c.a, {
						name: "add_media",
						className: u.a.EditIcon
					}))), d && s.a.createElement(i.a, {
						className: u.a.LoadingIcon,
						sizePx: p
					}))
				}
			}
		},
		"./src/reddit/components/HumanDate/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return g
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/timeAgo/index.ts"),
				a = r("./src/reddit/hooks/useLocale.ts");
			var i = function({
					seconds: e,
					...t
				}) {
					var r;
					const n = Object(a.a)(),
						i = {
							...t,
							locale: null !== (r = t.locale) && void 0 !== r ? r : n
						};
					return s.a.createElement(s.a.Fragment, null, Object(o.d)(e, i))
				},
				c = r("./src/lib/humanizeDate/index.ts");
			var d = function({
					seconds: e,
					...t
				}) {
					var r;
					const n = Object(a.a)(),
						o = {
							...t,
							locale: null !== (r = t.locale) && void 0 !== r ? r : n
						};
					return s.a.createElement(s.a.Fragment, null, Object(c.a)(e, o))
				},
				l = r("./src/lib/constants/index.ts");
			var u = function({
					seconds: e,
					locale: t
				}) {
					const r = Object(a.a)(),
						n = null != t ? t : r;
					return s.a.createElement(s.a.Fragment, null, function(e, t = l.C) {
						const r = e * l.Pb;
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
					}(e, n))
				},
				m = r("./node_modules/fbt/lib/FbtPublic.js"),
				p = r("./src/lib/eventTools/index.ts");

			function f(e, t = l.C) {
				return e.toLocaleDateString(t, {
					month: "numeric",
					day: "numeric"
				})
			}

			function b(e, t, r = !1, n = l.C) {
				const s = Object(p.e)(e, t),
					o = new Date(e * l.Pb);
				let a;
				if (s === p.a.Live || r) return m.fbt._("Now", null, {
					hk: "Prpcg"
				});
				return s === p.a.Future ? a = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : Object(p.b)(e) >= 5 ? f(o, n) : function(e, t = l.C) {
					return e.toLocaleDateString(t, {
						weekday: "long"
					})
				}(o, n) : s === p.a.Past && (a = Object(p.d)(e) ? m.fbt._("Today", null, {
					hk: "1sZpnp"
				}).toString() : f(o, n)), `${a} @ ${function(e,t=l.C){return e.toLocaleTimeString(t,{hour12:!0,hour:"numeric",minute:"2-digit"}).replace(/ /g,"").toUpperCase()}(o,n)}`
			}
			var g = function({
				startTime: e,
				endTime: t,
				isLive: r,
				locale: n
			}) {
				const o = Object(a.a)(),
					i = null != n ? n : o;
				return s.a.createElement(s.a.Fragment, null, b(e, t, r, i))
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
				return g
			})), r.d(t, "a", (function() {
				return h
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
				g = e => s.a.createElement(f, {
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
				x = Object(a.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(d.b)(t)(e)
				}),
				v = Object(c.a)(h, [i.a.Click, i.a.Keydown]),
				_ = Object(c.a)(g, [i.a.Click, i.a.Keydown]),
				I = Object(o.b)(x);
			t.c = I(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(v, p({}, e, {
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
							const e = document.getElementById(a.d);
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
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/lessComponent.tsx"),
				d = r("./src/lib/prettyPrintNumber/index.ts"),
				l = r("./src/reddit/components/HumanDate/index.tsx"),
				u = r("./src/reddit/contexts/InsideOverlay.tsx"),
				m = r("./src/reddit/endpoints/profile/info.ts"),
				p = r("./src/reddit/helpers/karma.ts"),
				f = r("./src/reddit/helpers/trackers/followers.ts"),
				b = r("./src/reddit/hooks/useTracking.ts"),
				g = r("./src/reddit/icons/fonts/index.tsx"),
				h = r("./src/reddit/selectors/profile.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				v = r("./src/reddit/actions/tooltip.ts"),
				_ = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				I = r("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				O = r.n(I);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = c.a.div("Container", O.a),
				E = c.a.div("Body", O.a),
				k = c.a.h5("Title", O.a),
				j = c.a.span("Label", O.a);
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
					}, o.a.createElement(k, null, r), o.a.createElement(E, null, e, o.a.createElement(j, C({
						key: "label"
					}, i), t)), s && n && o.a.createElement(_.c, {
						caretOnTop: !0,
						tooltipId: s
					}, n))
				}
			}
			var w = Object(a.b)(null, e => ({
					toggleTooltip: t => e(Object(v.h)({
						tooltipId: t
					}))
				}))(Object(u.b)(N)),
				y = r("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				S = r.n(y);
			const U = Object(i.a)(h.j, (e, {
					profileName: t
				}) => Object(x.tb)(e, t), (e, t) => ({
					karma: {
						...m.a,
						...null == t ? void 0 : t.karma,
						total: Object(p.a)(t)
					},
					enableFollowers: !!(null == t ? void 0 : t.enableFollowers),
					profileCreated: t && (t.createdUtc || t.created) || 0,
					subscribers: e && e.subscribers || 0
				})),
				F = c.a.div("Container", S.a);

			function T(e, t) {
				return `profile--id-card--highlight-tooltip-${e?"-overlay":""}-${t}`
			}
			const B = e => {
				const t = Object(b.a)(),
					r = Object(s.useCallback)(() => {
						t(Object(f.b)())
					}, [t]),
					a = e.isOwnProfile ? o.a.createElement(o.a.Fragment, null, Object(d.b)(e.subscribers, {
						displayFull: !0
					}), o.a.createElement(g.a, {
						name: "right",
						className: S.a.iconRight
					})) : Object(d.b)(e.subscribers, {
						displayFull: !0
					}),
					i = o.a.createElement(w, {
						className: e.highlightClassName,
						icon: o.a.createElement(g.a, {
							name: "user",
							isFilled: !0,
							className: S.a.icon,
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
			t.a = Object(a.b)(U)(Object(u.b)(e => {
				const {
					karma: t,
					enableFollowers: r,
					profileCreated: s,
					isOverlay: a,
					subscribers: i,
					className: c,
					highlightClassName: u
				} = e, p = {
					...m.a,
					...t
				}, f = T(a, "karma"), b = T(a, "cakeday"), h = `${n.fbt._({"*":"{number} Post Karma",_1:"1 Post Karma"},[n.fbt._plural(p.fromPosts,"number",Object(d.b)(p.fromPosts,{displayFull:!0}))],{hk:"husfU"})}\n${n.fbt._({"*":"{number} Comment Karma",_1:"1 Comment Karma"},[n.fbt._plural(p.fromComments,"number",Object(d.b)(p.fromComments,{displayFull:!0}))],{hk:"26iPTL"})}\n${n.fbt._({"*":"{number} Awardee Karma",_1:"1 Awardee Karma"},[n.fbt._plural(p.fromAwardsReceived,"number",Object(d.b)(p.fromAwardsReceived,{displayFull:!0}))],{hk:"2Ww5MR"})}\n${n.fbt._({"*":"{number} Awarder Karma",_1:"1 Awarder Karma"},[n.fbt._plural(p.fromAwardsGiven,"number",Object(d.b)(p.fromAwardsGiven,{displayFull:!0}))],{hk:"2F1chz"})}`;
				return o.a.createElement(F, {
					className: c
				}, o.a.createElement(w, {
					className: u,
					icon: o.a.createElement(g.a, {
						name: "karma",
						isFilled: !0,
						className: S.a.icon,
						key: "karma"
					}),
					label: Object(d.b)(p.total, {
						displayFull: !0
					}),
					title: n.fbt._("Karma", null, {
						hk: "RtSgN"
					}),
					tooltipId: f,
					tooltip: h
				}), o.a.createElement(w, {
					className: u,
					icon: o.a.createElement(g.a, {
						name: "cake",
						isFilled: !0,
						className: S.a.icon,
						key: "cakeDay"
					}),
					label: o.a.createElement(l.a, {
						seconds: s,
						showDay: !0
					}),
					title: n.fbt._("Cake day", null, {
						hk: "4x2LB5"
					}),
					tooltipId: b,
					tooltip: o.a.createElement(l.d, {
						seconds: s
					})
				}), r && i > 0 && o.a.createElement(B, {
					highlightClassName: u,
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
				return B
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/Widgets/Base/index.tsx"),
				i = r("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				c = r.n(i),
				d = o.a.div("dynamicTwoCol", c.a),
				l = r("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/Highlights.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				p = r.n(m),
				f = r("./src/config.ts"),
				b = r("./node_modules/fbt/lib/FbtPublic.js"),
				g = r("./src/reddit/controls/InternalLink/index.tsx"),
				h = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				x = r("./src/reddit/controls/OutboundLink/index.tsx"),
				v = r("./src/reddit/icons/fonts/index.tsx"),
				_ = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileIcon/index.tsx"),
				I = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				O = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				C = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				P = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserIcon/index.m.less"),
				E = r.n(P),
				k = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				j = r.n(k);
			var N = ({
					bannerBackgroundImage: e,
					editMode: t,
					isDefaultIcon: r,
					isDeletingBanner: n,
					isDeletingIcon: o,
					isEmployee: a,
					isGold: i,
					isNSFW: c,
					isOwnProfile: d,
					onClickSnoovatar: l,
					onDeleteBanner: u,
					onDeleteIcon: m,
					profileIcon: p,
					title: P,
					userCreated: k,
					username: N,
					url: w
				}) => s.a.createElement(s.a.Fragment, null, s.a.createElement(O.a, {
					bannerBackgroundImage: e,
					editMode: !!t,
					isNSFW: c,
					username: N,
					isDeletingBanner: !!n,
					onDeleteBanner: u
				}), s.a.createElement("div", {
					className: E.a.SnooIconWrapper
				}, d || !p || c ? s.a.createElement(_.a, {
					iconUrl: p,
					isNSFW: c,
					userName: N,
					isProfileIdCard: !0
				}) : s.a.createElement(x.b, {
					href: p
				}, s.a.createElement(_.a, {
					iconUrl: p,
					isNSFW: c,
					userName: N,
					isProfileIdCard: !0
				})), t && !r && (o ? s.a.createElement(h.a, {
					sizePx: 20,
					className: j.a.loadingIcon
				}) : s.a.createElement(v.a, {
					name: "close",
					className: j.a.closeIcon,
					onClick: m
				}))), !t && d && s.a.createElement(g.a, {
					to: "/settings/profile",
					className: E.a.settingsLink
				}, s.a.createElement(v.a, {
					name: "settings",
					className: j.a.settingsIcon
				})), P && s.a.createElement("h4", {
					className: E.a.userTitle
				}, P), s.a.createElement(C.a, {
					className: E.a.userName,
					username: N,
					userCreated: k,
					url: w
				}), a && s.a.createElement(v.a, {
					name: "admin",
					isFilled: !0,
					className: E.a.adminIcon,
					title: b.fbt._("Reddit admin", null, {
						hk: "goUUb"
					})
				}), i && s.a.createElement("a", {
					title: b.fbt._("{username} has Reddit Premium", [b.fbt._param("username", N)], {
						hk: "3Fylv"
					}),
					href: `${f.a.redditUrl}/premium`
				}, s.a.createElement(v.a, {
					name: "premium",
					isFilled: !0,
					className: E.a.premiumIcon
				})), d && s.a.createElement(I.a, {
					currentUserHasSnoovatar: !1,
					isOwnProfile: !0,
					onClick: l
				})),
				w = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.tsx");
			var y = ({
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
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
					prefersReducedAnimations: f,
					profileIcon: b,
					snoovatarUrl: g,
					title: h,
					userCreated: x,
					username: v,
					url: _
				}) => g ? s.a.createElement(w.a, {
					bannerBackgroundImage: e,
					currentUserHasSnoovatar: t,
					editMode: r,
					isDeletingBanner: o,
					isEmployee: i,
					isGold: c,
					isNSFW: d,
					isOwnProfile: l,
					onClickSnoovatar: u,
					onDeleteBanner: m,
					prefersReducedAnimations: f,
					snoovatarUrl: g,
					title: h,
					userCreated: x,
					username: v,
					url: _
				}) : s.a.createElement(N, {
					bannerBackgroundImage: e,
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
					profileIcon: b,
					title: h,
					userCreated: x,
					username: v,
					url: _
				}),
				S = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx");
			const U = o.a.wrapped(a.b, "Widget", p.a),
				F = o.a.div("Description", p.a),
				T = o.a.wrapped(d, "Actions", p.a);
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
						footer: o,
						isEmployee: a,
						isGold: i,
						isNSFW: c,
						isOverlay: d,
						isOwnProfile: l,
						profileIcon: m,
						publicDescription: p,
						snoovatarUrl: f,
						title: b,
						url: g,
						userCreated: h,
						username: x,
						isDefaultIcon: v,
						isDeletingIcon: _,
						isDeletingBanner: I,
						onClickSnoovatar: O,
						onDeleteIcon: C,
						onDeleteBanner: P,
						prefersReducedAnimations: E,
						editMode: k,
						isNftPreview: j
					} = this.props;
					return j ? s.a.createElement(s.a.Fragment, null, s.a.createElement(S.a, {
						bannerBackgroundImage: t,
						currentUserHasSnoovatar: r,
						editMode: k,
						isDeletingBanner: I,
						isEmployee: a,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!l,
						onClickSnoovatar: O,
						onDeleteBanner: P,
						prefersReducedAnimations: E,
						snoovatarUrl: f,
						title: b,
						userCreated: h,
						username: x,
						actions: e,
						url: g,
						footer: o
					})) : s.a.createElement(U, {
						className: n
					}, s.a.createElement(y, {
						bannerBackgroundImage: j ? void 0 : t,
						currentUserHasSnoovatar: r,
						editMode: k,
						isDefaultIcon: v,
						isDeletingBanner: I,
						isDeletingIcon: _,
						isEmployee: a,
						isGold: i,
						isNSFW: c,
						isOwnProfile: !!l,
						onClickSnoovatar: O,
						onDeleteBanner: P,
						onDeleteIcon: C,
						prefersReducedAnimations: E,
						profileIcon: m,
						title: b,
						userCreated: h,
						username: x,
						url: g,
						snoovatarUrl: f
					}), s.a.createElement(F, null, p), s.a.createElement(u.a, {
						isOwnProfile: !!l,
						profileName: x,
						isOverlay: d
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
				icon: "_3Y33QReHCnUZm9ewFAsk8C",
				EditButton: "_2PgeQeeIxIIadT5yPWlaTh",
				editButton: "_2PgeQeeIxIIadT5yPWlaTh"
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
					}, this.updateProfileIcon = async (e, t) => {
						const r = await Object(a.e)(e);
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
						isProfileIdCard: a,
						userName: l
					} = this.props, {
						isUpdating: u
					} = this.state, p = o.a.createElement(c.a, {
						className: m.a.Icon,
						iconUrl: r,
						isNSFW: s,
						userName: l
					});
					return t && Object(d.e)(t) === l ? o.a.createElement(i.a, {
						altText: n.fbt._("{userName} avatar image", [n.fbt._param("userName", l)], {
							hk: "1LJxYE"
						}),
						className: e,
						editButtonClassName: a ? m.a.EditButton : void 0,
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
					hideNSFWPref: a.C
				}),
				c = Object(n.b)(i, e => ({
					imageUpdateRequested: (t, r) => e(Object(o.z)(t, r))
				}));
			t.a = c
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
				g = r.n(b);
			const {
				fbt: h
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(i.i)(({
				isHovercard: e,
				username: t,
				isAvatarPost: r,
				post: i,
				share: b
			}) => {
				const x = Object(l.b)(),
					v = Object(a.d)(),
					_ = i && i.id,
					I = i && i.voteState;
				let O = null;
				_ || (O = e ? "user_hovercard" : "profile_overview");
				const C = Object(s.useCallback)(() => x(Object(m.e)(e ? "user_hovercard" : "profile_overview", t)), [e, x, t]);
				return o.a.createElement(u.s, {
					onClick: () => {
						r ? (x(m.f), _ && I === f.a.notVoted && v(Object(c.db)(_))) : C();
						const e = r ? "postify" : "copy";
						v(Object(d.b)({
							clickSource: O,
							share: b,
							source: e
						}))
					},
					className: Object(n.a)(g.a.snoovatarButton, g.a.snoovatarExtraPadding, g.a.compactButtonLayout, {
						[g.a.avatarPostifyButton]: r
					}),
					isFullWidth: !0
				}, o.a.createElement(p.a, {
					className: Object(n.a)({
						[g.a.shirtIcon]: !r,
						[g.a.avatarPostButtonShirtIcon]: r
					})
				}), h._("Try this Look", null, {
					hk: "dOuPb"
				}), o.a.createElement("div", {
					className: g.a.chevronIcon
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
			t.a = function({
				compact: e,
				currentUserHasSnoovatar: t,
				className: r,
				isOwnProfile: n,
				onClick: d
			}) {
				return s.a.createElement(a.s, {
					onClick: d,
					isFullWidth: !0,
					className: Object(o.a)(l.a.snoovatarButton, {
						[l.a.snoovatarExtraPadding]: !t && n,
						[l.a.compactButtonLayout]: e
					}, r)
				}, t ? s.a.createElement(c.a, {
					className: l.a.shirtIcon
				}) : s.a.createElement("div", {
					className: l.a.shirtIcon
				}), t ? u._("Style Avatar", null, {
					hk: "UEtBO"
				}) : n ? u._("Create Avatar", null, {
					hk: "2pJgje"
				}) : u._("Create Your Own Avatar", null, {
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
				return g
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

			function g(e) {
				return !!e && b.test(e)
			}
			t.a = ({
				isEmployee: e,
				isGold: t,
				isNSFW: r,
				snoovatarUrl: p,
				title: g,
				userCreated: h,
				username: x,
				url: v,
				className: _,
				actions: I,
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
				})(p), [p]), E = Object(o.e)(d.X);
				return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: Object(i.a)(f.a.container, _)
				}, s.a.createElement(c.a, {
					className: f.a.cardAnimation,
					useCanvasRenderer: !0,
					assetUrl: `${a.a.assetPath}/img/snoovatars/nft_card_animation.json`,
					loop: !0
				}), s.a.createElement("div", {
					className: f.a.inner
				}, "testing" !== C && s.a.createElement("img", {
					alt: `${C} NFT`,
					className: f.a.badgeImage,
					src: `${a.a.assetPath}/img/snoovatars/nft_badge_${C}.svg`
				}), s.a.createElement("img", {
					className: f.a.cutout,
					src: `${a.a.assetPath}/img/snoovatars/hole-cutout-${E?"black":"white"}.svg`
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
					src: p,
					alt: "Avatar NFT Image"
				}), s.a.createElement(m.a, {
					isEmployee: e,
					isGold: t,
					isNSFW: r,
					title: g,
					username: x
				}), s.a.createElement(u.a, {
					className: f.a.subUsername,
					shouldDisplaySnoovatar: !0,
					username: x,
					userCreated: h,
					url: v
				}), s.a.createElement(l.a, {
					className: f.a.highlights,
					highlightClassName: f.a.highlight,
					profileName: x,
					isOverlay: !1
				}), s.a.createElement("nav", {
					className: f.a.actions
				}, I))), s.a.createElement("div", {
					className: Object(i.a)(f.a.footer, _)
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
				o = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				a = r("./src/reddit/icons/svgs/Close/index.tsx"),
				i = r("./src/reddit/components/ProfileIdCard/ProfileImage/ProfileBanner/index.tsx"),
				c = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.m.less"),
				d = r.n(c),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserProfile.m.less"),
				u = r.n(l);
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
				}), n && e && (c ? s.a.createElement(o.a, {
					sizePx: 20,
					className: u.a.loadingIcon
				}) : s.a.createElement(a.a, {
					className: u.a.closeIcon,
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
			t.a = function({
				className: e,
				shouldDisplaySnoovatar: t,
				url: r,
				userCreated: n,
				username: c,
				...d
			}) {
				const l = t ? s.a.createElement(s.a.Fragment, null, "u/", c, " · ", s.a.createElement(a.d, {
					seconds: n,
					noPostfix: !0,
					shortenedUnit: !0
				})) : `u/${c}`;
				return r ? s.a.createElement(o.a, i({}, d, {
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
				o = r("./node_modules/react/index.js"),
				a = r.n(o),
				i = r("./src/reddit/icons/svgs/Admin/index.tsx"),
				c = r("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				d = r("./src/reddit/icons/svgs/PremiumCircle/index.tsx"),
				l = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less"),
				u = r.n(l);
			t.a = ({
				title: e,
				username: t,
				isEmployee: r,
				isGold: o,
				isNSFW: l
			}) => a.a.createElement("h1", {
				className: u.a.snoovatarUserTitle
			}, e || t, r && a.a.createElement(i.a, {
				className: u.a.snoovatarAdminIcon,
				title: s.fbt._("Reddit admin", null, {
					hk: "goUUb"
				})
			}), o && a.a.createElement("a", {
				title: s.fbt._("{username} has Reddit Premium", [s.fbt._param("username", t)], {
					hk: "3Fylv"
				}),
				href: `${n.a.redditUrl}/premium`
			}, a.a.createElement(d.a, {
				className: u.a.snoovatarPremiumIcon
			})), l && a.a.createElement(c.a, {
				className: u.a.snoovatarNsfwIcon,
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
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/controls/InternalLink/index.tsx"),
				c = r("./src/reddit/icons/fonts/index.tsx"),
				d = r("./src/reddit/selectors/experiments/econ/index.ts"),
				l = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				m = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserBanner/index.tsx"),
				p = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserName.tsx"),
				f = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/index.m.less")),
				b = r.n(f);
			const g = 25;

			function h(e, t) {
				return Object.keys(t).filter(t => 0 === t.indexOf(e)).map(e => t[e])
			}

			function x(e) {
				return e[Math.floor(Math.random() * e.length)]
			}
			const v = h("particleDelay", b.a),
				_ = h("particleX", b.a),
				I = h("particleFloat", b.a),
				O = () => {
					const e = x(_),
						t = x(I),
						r = x(v);
					return Object(a.a)(b.a.particle, e, t, r)
				};
			class C extends s.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < g; t++) e.push(this.createParticle(t));
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
				k = r.n(E),
				j = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/UserSnoovatar/UserInformation.tsx");
			t.a = ({
				bannerBackgroundImage: e,
				compact: t,
				currentUserHasSnoovatar: r,
				editMode: n,
				isDeletingBanner: f,
				isEmployee: g,
				isGold: h,
				isNSFW: x,
				isOwnProfile: v,
				onClickSnoovatar: _,
				onDeleteBanner: I,
				prefersReducedAnimations: O,
				snoovatarUrl: C,
				title: E,
				userCreated: N,
				username: w,
				url: y,
				isHovercard: S
			}) => {
				const U = Object(o.e)(e => !v && !!C && Object(d.g)(e));
				return s.a.createElement(s.a.Fragment, null, s.a.createElement(m.a, {
					bannerBackgroundImage: e,
					editMode: !!n,
					isNSFW: x,
					username: w,
					isDeletingBanner: !!f,
					onDeleteBanner: I
				}), s.a.createElement("div", {
					className: b.a.snoovatarContainer
				}, h && s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
					className: b.a.topGlow
				}), s.a.createElement("div", {
					className: b.a.bottomGlow
				}), !O && s.a.createElement(P, null)), s.a.createElement("img", {
					className: Object(a.a)(b.a.snoovatar, {
						[b.a.premiumGlow]: h
					}),
					src: C || void 0
				})), !n && v && s.a.createElement(i.a, {
					to: "/settings/profile",
					className: b.a.snoovatarSettingsLink
				}, s.a.createElement(c.a, {
					name: "settings",
					className: k.a.settingsIcon
				})), s.a.createElement(j.a, {
					isEmployee: g,
					isGold: h,
					isNSFW: x,
					title: E,
					username: w
				}), s.a.createElement(p.a, {
					className: b.a.snoovatarUserName,
					shouldDisplaySnoovatar: !0,
					username: w,
					userCreated: N,
					url: y
				}), (v || !r && !!C) && s.a.createElement(l.a, {
					compact: t,
					currentUserHasSnoovatar: r,
					isOwnProfile: v,
					onClick: _
				}), U && s.a.createElement(u.a, {
					username: w,
					isHovercard: !!S,
					share: {
						username: w
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
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/actions/snoovatarModal.ts"),
				c = r("./src/reddit/actions/subscription/index.ts"),
				d = r("./src/reddit/actions/userBlocks.ts"),
				l = r("./src/reddit/components/ChatButton/index.tsx"),
				u = r("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/constants/posts.ts"),
				f = r("./src/reddit/controls/Button/index.tsx"),
				b = r("./src/reddit/helpers/trackers/user.ts"),
				g = r("./src/reddit/selectors/blockedRedditors.ts"),
				h = r("./src/reddit/selectors/gold/awardIcon.ts"),
				x = r("./src/reddit/selectors/platform.ts"),
				v = r("./src/reddit/selectors/profile.ts"),
				_ = r("./src/reddit/selectors/structuredStyles.ts"),
				I = r("./src/reddit/selectors/tooltip.ts"),
				O = r("./src/reddit/selectors/user.ts"),
				C = r("./src/reddit/selectors/userPrefs.ts"),
				P = r("./src/reddit/selectors/experiments/econ/avatarNfts.ts"),
				E = r("./node_modules/fbt/lib/FbtPublic.js"),
				k = r("./node_modules/lodash/compact.js"),
				j = r.n(k),
				N = r("./src/config.ts"),
				w = r("./src/lib/classNames/index.ts"),
				y = r("./src/lib/loadableAction/index.ts"),
				S = r("./src/reddit/actions/gold/modals.ts"),
				U = r("./src/reddit/actions/modal.ts"),
				F = r("./src/reddit/actions/profile/index.ts"),
				T = r("./src/reddit/components/CrisisFlow/index.tsx"),
				B = r("./src/higherOrderComponents/makeAsync.tsx"),
				L = r("./src/lib/loadWithRetries/index.ts");
			var M = Object(B.a)({
					getComponent: () => Object(L.a)(() => r.e("GivePremiumModal").then(r.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				D = r("./src/reddit/constants/modals.ts"),
				A = r("./src/reddit/helpers/correlationIdTracker.ts"),
				R = r("./src/reddit/helpers/styles/mixins/loading.ts"),
				G = r("./src/reddit/models/Gold/Premium/index.ts"),
				W = r("./src/reddit/selectors/experiments/crisisTextLine.ts"),
				H = r("./src/reddit/selectors/premium.ts"),
				K = r("./src/reddit/components/ProfileIdCard/footer.m.less"),
				z = r.n(K);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Z = Object(a.c)({
					areModeratedSubredditsPending: v.a,
					coinsToSpend: O.e,
					givePremiumModalIsOpen: H.c,
					hasFetchedModerators: v.k,
					isEmployee: O.H,
					isLoggedIn: O.K,
					profile: v.j,
					crisisFlowEnabled: W.b
				}),
				V = ({
					isLoading: e,
					...t
				}) => s.a.createElement("div", q({}, t, {
					className: Object(w.a)(z.a.Shimmer, Object(R.b)({
						isLoading: e
					}))
				}));
			class X extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1,
						showCrisisModal: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						e(Object(A.d)(A.a.GiftPremiumFlow));
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
							isLoggedIn: o,
							isModerator: a,
							isOwnProfile: i,
							profileName: c,
							profile: d,
							crisisFlowEnabled: l,
							userAcceptsPms: u,
							onClickBlockUser: m,
							onClickUnblockUser: p,
							isUserBlocked: f
						} = this.props, b = o && Object(G.d)(r, s).length && !i || s, g = j()([(i || a) && n ? {
							text: E.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: `/user/${c}/about/edit/moderation`,
							isInternalLink: !0
						} : void 0, !i && u ? {
							text: E.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: `${N.a.redditUrl}/message/compose/?to=${c}`
						} : void 0, o && !i ? {
							onClick: f ? p : m,
							text: f ? E.fbt._("Unblock User", null, {
								hk: "1onWdM"
							}) : E.fbt._("Block User", null, {
								hk: "4ltcgv"
							})
						} : void 0, !i && t ? {
							text: E.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: `${N.a.redditUrl}/user/${c}/snoo`
						} : void 0, !i && l ? {
							text: E.fbt._("Get Them Help and Support", null, {
								hk: "3FfPTy"
							}),
							onClick: this.onOpenCrisisModal
						} : void 0, !i && d ? {
							text: E.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: `${N.a.redditUrl}/api/report_redirect?reason_code=USER_PROFILE&thing=${d.id}`
						} : void 0, o && d && !d.isQuarantined ? {
							onClick: e,
							text: E.fbt._("Add to Custom Feed", null, {
								hk: "3ZtOdG"
							})
						} : void 0]);
						return b && g.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: E.fbt._("Give Premium", null, {
								hk: "2wyUqF"
							})
						}), g
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
					const n = (t ? r : []).map(e => e.url ? e.isInternalLink ? s.a.createElement(f.s, {
						kind: f.a.InternalLink,
						priority: f.b.Plain,
						size: f.c.XS,
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: z.a.menuItem
					}, e.text) : s.a.createElement(f.s, {
						kind: f.a.ExternalLink,
						priority: f.b.Plain,
						size: f.c.XS,
						key: e.url,
						href: e.url,
						onClick: e.onClick,
						className: z.a.menuItem
					}, e.text) : s.a.createElement(f.s, {
						priority: f.b.Plain,
						size: f.c.XS,
						className: z.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (n.unshift(s.a.createElement("div", {
						className: z.a.menuItem,
						key: "loading-1"
					}, s.a.createElement(V, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), n.unshift(s.a.createElement("div", {
						className: z.a.menuItem,
						key: "loading-2"
					}, s.a.createElement(V, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const o = t ? E.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : E.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return s.a.createElement("div", {
						className: z.a.container
					}, n, s.a.createElement("div", {
						className: z.a.expandContainer
					}, s.a.createElement(f.q, {
						className: z.a.expandButton,
						onClick: this.moreOptionsToggled
					}, o)), e && s.a.createElement(M, null), this.state.showCrisisModal && s.a.createElement(T.b, {
						withOverlay: !0,
						overlayCustomStyles: T.a,
						fromUserProfile: !0,
						username: this.props.profileName,
						onCloseCrisisModal: this.onCloseCrisisModal
					}))
				}
			}
			var Y = Object(o.b)(Z, (e, {
					profileName: t,
					sendEvent: n
				}) => ({
					addToMultiClicked: () => {
						e(Object(y.a)(() => Promise.all([r.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~MembershipPaywa~c24a8af4"), r.e("CollectionCommentsPage~CommentsPage~Frontpage~ModListing~Multireddit~ProfileComments~ProfileOverview~933ffffc"), r.e("Multireddit~reddit-components-AdHocMultiredditSidebar"), r.e("Multireddit")]).then(r.bind(null, "./src/reddit/actions/multireddit/index.ts")).then(e => e.myMultiredditsRequested))(!0, !0)), e(Object(U.h)(D.a.MULTIREDDIT_ADD_SUBREDDIT))
					},
					onClickGivePremium: r => e(Object(S.e)({
						correlationId: r,
						profileName: t
					})),
					onModeratorsRequested: () => e(Object(F.b)(t)),
					onClickBlockUser: () => {
						e(Object(d.h)(t)), n(Object(b.a)(t))
					},
					onClickUnblockUser: () => {
						e(Object(d.g)(t)), n(Object(b.h)(t))
					}
				}))(X),
				Q = r("./src/reddit/components/ProfileIdCard/index.m.less"),
				J = r.n(Q),
				$ = r("./src/reddit/components/ProfileIdCard/UserProfileOverview/NftCard/index.tsx");
			const {
				fbt: ee
			} = r("./node_modules/fbt/lib/FbtPublic.js"), te = Object(a.c)({
				account: O.k,
				activeTooltipId: I.a,
				currentUserHasSubreddit: O.h,
				hideNSFWPref: O.C,
				isModerator: v.f,
				prefersReducedAnimations: C.c,
				profile: v.j,
				profileAboutInfo: v.h,
				topAwardIcon: (e, {
					profileName: t
				}) => Object(h.e)(e, {
					userName: t,
					minSize: 32
				}),
				structuredStyle: (e, t) => Object(_.m)(e, Object(v.m)(e, t.profileName)),
				userHasSubreddit: (e, {
					profileName: t
				}) => Object(O.ob)(e, {
					userName: t
				}),
				user: (e, {
					profileName: t
				}) => Object(O.nb)(e, {
					userName: t
				}),
				page: x.b,
				allowNFTs: P.a,
				isUserBlocked: (e, {
					profileName: t
				}) => Object(g.c)(e, t)
			}), re = ({
				username: e,
				currentUserHasSubreddit: t
			}) => s.a.createElement("div", {
				className: J.a.actionItem
			}, s.a.createElement(f.m, {
				className: J.a.button,
				to: t ? `/user/${e}/submit` : "/submit"
			}, ee._("New Post", null, {
				hk: "2VCZwF"
			}))), ne = ({
				profileName: e,
				toggleFollow: t,
				userIsSubscriber: r,
				isUserBlocked: n,
				onClickUnblockUser: o,
				sendEvent: a
			}) => s.a.createElement("div", {
				className: J.a.actionItem
			}, r && !n ? s.a.createElement(f.n, {
				className: J.a.button,
				onClick: () => t(e, r)
			}, ee._("Unfollow", null, {
				hk: "1nM1SO"
			})) : n ? s.a.createElement(f.k, {
				className: J.a.button,
				onClick: () => {
					o(e), a(Object(b.h)(e))
				}
			}, ee._("Unblock", null, {
				hk: "2d6Cyx"
			})) : s.a.createElement(f.k, {
				className: J.a.button,
				onClick: () => t(e, r)
			}, ee._("Follow", null, {
				hk: "OPQuq"
			}))), se = ({
				userId: e
			}) => s.a.createElement("div", {
				className: J.a.actionItem
			}, s.a.createElement(l.b, {
				contextId: e,
				className: J.a.button,
				userId: e,
				text: ee._("Chat", null, {
					hk: "UKkIW"
				})
			}));
			t.default = Object(o.b)(te, e => ({
				onToggleFollow: (t, r) => e(Object(c.d)([{
					name: t,
					type: p.a.PROFILE
				}], !r)),
				onClickSnoovatar: () => e(Object(i.b)({
					clickSource: "profile_overview"
				})),
				onClickUnblockUser: t => e(Object(d.g)(t))
			}))(Object(m.c)(e => {
				const {
					account: t,
					currentUserHasSubreddit: n,
					hideNSFWPref: o,
					isModerator: a,
					isOverlay: i,
					isSubmissionPage: c,
					onClickSnoovatar: d,
					onToggleFollow: l,
					profile: m,
					profileAboutInfo: p,
					sendEvent: f,
					structuredStyle: b,
					topAwardIcon: g,
					userHasSubreddit: h,
					allowNFTs: x,
					user: v,
					page: _,
					prefersReducedAnimations: I,
					isUserBlocked: O,
					onClickUnblockUser: C
				} = e;
				if (!v) return null;
				const {
					accountIcon: P,
					awardedLastMonth: E,
					created: k,
					enableFollowers: j,
					id: N,
					isEmployee: w,
					isGold: y,
					prefShowSnoovatar: S,
					snoovatarFullBodyAsset: U,
					username: F
				} = v, T = !!t && t.id === N, B = !(!t || !t.snoovatarFullBodyAsset), L = b && b.bannerBackgroundImage, M = !!m && m.isNSFW, D = M && o, A = !(!p || !p.userIsSubscriber), R = `/user/${F}/`, G = _ && _.url === R, W = !p || p.acceptChats, H = !p || p.acceptPms, K = x && Object($.b)(U);
				return s.a.createElement(u.a, {
					isEmployee: w,
					isGold: y,
					isNSFW: M,
					isNftPreview: K,
					isOverlay: i,
					isOwnProfile: T,
					publicDescription: p ? p.publicDescription : void 0,
					title: m ? m.title : void 0,
					url: G ? null : R,
					userCreated: k,
					username: F,
					recentAwardings: E,
					currentUserHasSnoovatar: B,
					prefersReducedAnimations: !!I,
					snoovatarUrl: U,
					topAwardIcon: g,
					actions: s.a.createElement(s.a.Fragment, null, T && !c && re({
						username: F,
						currentUserHasSubreddit: n
					}), !T && h && j && ne({
						profileName: F,
						toggleFollow: async (e, t) => {
							l(e, t);
							const {
								clickProfileFollowButton: n,
								clickProfileUnfollowButton: s
							} = await r.e(3).then(r.bind(null, "./src/reddit/helpers/trackers/profileIdCard.ts"));
							f(t ? s(N) : n(N))
						},
						userIsSubscriber: A,
						isUserBlocked: O,
						onClickUnblockUser: C,
						sendEvent: f
					}), !!t && !T && W && se({
						userId: N
					})),
					footer: s.a.createElement(Y, {
						hasSubreddit: h,
						isModerator: a,
						isOwnProfile: T,
						allowViewSnoovatar: S,
						profileName: F,
						sendEvent: f,
						userAcceptsPms: H,
						isUserBlocked: O
					}),
					onClickSnoovatar: d,
					profileIcon: P,
					bannerBackgroundImage: D ? void 0 : L
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
				o = r("./src/lib/lessComponent.tsx"),
				a = r("./src/reddit/components/SEOTitle/index.tsx"),
				i = r("./src/reddit/components/Widgets/Base/index.m.less"),
				c = r.n(i);
			const d = o.a.div("WidgetBackground", c.a),
				l = o.a.wrapped(({
					children: e,
					...t
				}) => s.a.createElement("div", t, s.a.createElement(a.b, {
					type: a.a.Widget
				}, e)), "WidgetHeader", c.a);
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
					}), (!o || e.multiple) && s.a.createElement("input", {
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
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(o.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
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
				method: s.ib.POST
			}), l = async (e, t, r) => Object(o.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: r,
					container: t,
					type: "enemy"
				},
				endpoint: `${e.apiUrl}/api/unfriend`,
				method: s.ib.POST
			}), u = async (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/add_whitelisted?include_model`,
				method: s.ib.POST
			}), m = async (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
				data: {
					name: t
				},
				endpoint: `${e.apiUrl}/api/remove_whitelisted`,
				method: s.ib.POST
			}), p = async (e, t) => Object(o.a)(Object(a.a)(e, [i.a]), {
				endpoint: Object(c.a)(`${n.a.oauthUrl}/user/${t}/about`),
				method: s.ib.GET,
				data: {
					raw_json: 1
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
			const l = (e, {
					subredditIds: t,
					subredditNames: r,
					subscribe: n
				}) => Object(o.a)(Object(i.a)(e, [c.a]), {
					method: s.ib.POST,
					endpoint: Object(d.a)(`${e.apiUrl}/api/subscribe`),
					data: {
						action: n ? "sub" : "unsub",
						sr: t && t.join(",") || void 0,
						sr_name: r && r.join(",") || void 0,
						api_type: "json"
					}
				}),
				u = (e, t, r) => Object(o.a)(Object(i.a)(e, [c.a]), {
					method: s.ib.POST,
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
			const a = ({
					isLoading: e
				}) => Object(n.a)(o.a.loadingBackground, {
					[o.a["m-loading"]]: e
				}),
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
					...Object(s.defaults)(t),
					action: n.c.CLICK,
					noun: `follower_list_page_${e?"follow":"unfollow"}`,
					source: "profile"
				}),
				a = () => e => ({
					...Object(s.defaults)(e),
					action: n.c.CLICK,
					noun: "follower_list_cta",
					source: "profile"
				})
		},
		"./src/reddit/helpers/trackers/user.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
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
					screen: s.screen(e),
					profile: s.profile(e),
					subreddit: s.subreddit(e)
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
						pageType: t.platform.currentPage ? s.getPageTypeFromCurrentPage(t.platform.currentPage) : void 0,
						settingValue: e ? "online" : "hidden"
					},
					noun: "online_presence_toggle",
					...a(t)
				}),
				d = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "predictions",
					...a(e)
				}),
				l = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "premium",
					correlationId: Object(n.c)(n.a.GoldPayment),
					...a(e)
				}),
				u = () => e => ({
					source: "user_dropdown",
					action: "click",
					noun: "powerups",
					correlationId: Object(n.d)(n.a.PowerupsFlow, !1),
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
						id: Object(o.nb)(t, {
							userName: e
						}).id
					},
					...s.defaults(t)
				}),
				f = e => t => ({
					source: "profile",
					action: "click",
					noun: "unblock_user",
					targetUser: {
						id: Object(o.nb)(t, {
							userName: e
						}).id
					},
					...s.defaults(t)
				})
		},
		"./src/reddit/hooks/useLocale.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/index.js"),
				s = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				o = r("./node_modules/react-redux/es/index.js"),
				a = r("./src/reddit/selectors/meta.ts");
			t.a = "undefined" == typeof document ? function() {
				const e = Object(o.e)(a.i) || s.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			} : function() {
				const e = document.documentElement.lang || s.DEFAULT_LOCALE;
				return Object(n.isPseudoLocale)(e) ? s.DEFAULT_LOCALE : e
			}
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
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/svgs/Admin/index.m.less"),
				i = r.n(a);
			t.a = e => s.a.createElement("svg", {
				className: Object(o.a)(e.className, i.a.admin, {
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
				return o
			})), r.d(t, "e", (function() {
				return a
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
				o = (e, t = !1) => {
					const r = [];
					for (const n in s) {
						const o = s[n];
						(o.priceInCoins <= e || t) && r.push(o)
					}
					return r
				},
				a = e => n.fbt._({
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
				return o
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			}));
			var n = r("./src/reddit/selectors/user.ts");
			const s = e => e.blockedRedditors.api.pending,
				o = e => e.blockedRedditors.list,
				a = (e, t) => {
					const r = (e => {
						const t = o(e);
						return t && t.ids
					})(e);
					return !!r && r.includes(t)
				},
				i = (e, t) => {
					const r = Object(n.nb)(e, {
						userName: t
					});
					return !!r && a(e, r.id)
				}
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
			const a = e => n.c.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: o.K,
					experimentName: n.i
				}),
				i = e => n.e.Enabled === Object(s.c)(e, {
					experimentEligibilitySelector: o.K,
					experimentName: n.l
				})
		},
		"./src/reddit/selectors/experiments/econ/avatarNfts.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => Object(s.c)(e, {
				experimentEligibilitySelector: s.a,
				experimentName: n.r
			}) === n.u.Enabled
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
			e.exports = JSON.parse('{"id":"d0b176d08b19"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ProfileIdCard.68f7c125ef4e96a4a907.js.map