// https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.aeb403bd67b5d613c139.js
// Retrieved at 12/15/2021, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditMentionWithIcon"], {
		"./src/reddit/actions/subredditMention/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = "SUBREDDIT_MENTION_LOADED",
				i = "SUBREDDIT__MODEL_SUCCEEDED",
				r = "SUBREDDIT__MODEL_PENDING",
				o = "SUBREDDIT__MODEL_FAILED"
		},
		"./src/reddit/actions/subredditTopContent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "d", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/preferences.ts"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				o = s("./src/redditGQL/operations/SubredditTopContent.json"),
				d = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const a = "SUBREDDIT_TOP_CONTENT__PENDING",
				c = "SUBREDDIT_TOP_CONTENT__LOADED",
				l = "SUBREDDIT_TOP_CONTENT__FAILED",
				u = Object(n.a)(a),
				b = Object(n.a)(c),
				m = Object(n.a)(l),
				p = e => async (t, s, n) => {
					const a = e.toLowerCase(),
						c = s(),
						{
							api: l,
							topContent: p
						} = c.subreddits;
					if (l.topContent.pending[a] || p[a]) return;
					t(u({
						subredditName: a
					})), t(Object(i.z)());
					const h = await ((e, t) => Object(r.a)(e, {
						...o,
						variables: t
					}))(n.gqlContext(), {
						subredditName: a
					});
					if (h.ok) {
						const e = h.body.data.subreddit;
						if (e) {
							const s = Object(d.c)(e);
							s && t(b({
								...s,
								subredditName: a
							}))
						}
					} else t(m({
						subredditName: a,
						error: h.error
					}))
				}
		},
		"./src/reddit/actions/subscription/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "h", (function() {
				return o
			})), s.d(t, "i", (function() {
				return d
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			}));
			const n = "SUBSCRIPTION__FETCH_DATA_PENDING",
				i = "SUBSCRIPTION__FETCH_DATA_SUCCESS",
				r = "SUBSCRIPTION__FETCH_DATA_FAILURE",
				o = "SUBSCRIPTION__SUBSCRIPTION_TOGGLED",
				d = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				a = "SUBSCRIPTION__ORDER_LOADED",
				c = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return P
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "c", (function() {
				return M
			})), s.d(t, "a", (function() {
				return B
			})), s.d(t, "b", (function() {
				return A
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./src/reddit/actions/login.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/subscription/constants.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var h = s("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = s("./src/reddit/models/GqlTopLevelField.ts"),
				S = s("./src/reddit/models/User/index.ts");

			function E(e) {
				const t = [],
					s = [],
					n = {},
					i = {},
					{
						followedRedditorsInfo: r
					} = e.identity;
				for (const d of r.edges) {
					if (d.node.__typename !== S.c.AvailableRedditor || !d.node.profile) continue;
					const e = Object(f.a)(d.node.profile);
					n[e.id] = e;
					const {
						isFavorite: s
					} = d.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const d of o.edges) {
					if (d.node.__typename !== _.a.Subreddit) continue;
					const e = Object(O.a)(d.node);
					i[e.id] = e;
					const {
						isFavorite: t
					} = d.node;
					t && s.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: s,
					profiles: n,
					subreddits: i
				}
			}
			var I = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/selectors/profile.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/subscriptions.ts"),
				C = s("./src/reddit/selectors/user.ts");
			const v = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				g = Object(r.a)(c.c),
				T = Object(r.a)(c.b),
				N = Object(r.a)(c.a),
				k = Object(r.a)(c.h),
				P = (Object(r.a)(c.i), Object(r.a)(c.g), () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(T());
					const i = await Object(h.a)(s());
					if (i.ok) {
						const t = E(i.body.data);
						e(g(t))
					} else e(N({
						error: i.error
					}))
				}),
				D = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				L = (e, t, s) => async (r, c, {
					apiContext: b
				}) => {
					let m = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(j.C)(c(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(x.m)(c(), e.name),
						name: `${i.hc}${e.name}`,
						type: e.type
					});
					if (!Object(C.K)(c())) return r(Object(a.k)({
						actionSource: a.a.Subscribe
					})), void r(Object(d.k)());
					const p = Object(C.k)(c());
					if (p) {
						const t = m.length,
							s = e.length;
						if (m = m.filter(e => !D(p, e)), (e = e.filter(e => !D(p, e))).length !== s || m.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							r(Object(l.f)(Object(l.e)(e, I.b.Error)))
						}
						if (!e.length && !m.length) return
					}
					r(k({
						identifiers: m,
						nameIdentifiers: e,
						profileModels: c().profiles.models,
						subredditModels: c().subreddits.models,
						subscriptionsCount: Object(y.b)(c()),
						userIsSubscriber: t,
						widgetId: s
					}));
					const f = await Object(h.c)(b(), {
						subredditNames: m.map(({
							name: e
						}) => e),
						subscribe: t
					});
					if (f.ok) {
						const s = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : n.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [n.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							i = n.fbt._("Sucсessfully followed {communityname}", [n.fbt._param("communityname", s)], {
								hk: "1S5AXJ"
							}),
							d = n.fbt._("Sucсessfully unfollowed {communityname}", [n.fbt._param("communityname", s)], {
								hk: "2XWHyB"
							}),
							a = n.fbt._("Sucсessfully joined {communityname}", [n.fbt._param("communityname", s)], {
								hk: "3Al8aF"
							}),
							c = n.fbt._("Sucсessfully left {communityname}", [n.fbt._param("communityname", s)], {
								hk: "2w5JFZ"
							});
						r(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? i : d : t ? a : c
						}))
					} else {
						r(k({
							identifiers: m,
							nameIdentifiers: e,
							profileModels: c().profiles.models,
							subredditModels: c().subreddits.models,
							subscriptionsCount: Object(y.b)(c()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const i = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						r(Object(l.f)(Object(l.e)(i, I.b.Error)))
					}
					return f.ok
				}, w = Object(r.a)(c.f), M = e => async (t, s, {
					apiContext: n
				}) => {
					const i = s(),
						r = Object(j.J)(i, {
							identifier: e
						});
					if (!r) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const o = e.type === u.a.SUBREDDIT ? r.name : `u_${r.name}`,
						d = i.subscriptions.favoriteSubredditOrder || [],
						a = i.subscriptions.favoriteProfileOrder || [],
						c = d.indexOf(e.id),
						b = a.indexOf(e.id),
						m = -1 === c && -1 === b,
						p = i.subreddits.models,
						f = i.profiles.models;
					t(w({
						makeFavorite: m,
						identifier: e,
						subredditModels: p,
						profileModels: f
					}));
					const O = {
							type: e.type,
							name: r.name
						},
						_ = () => Object(j.db)(s(), {
							identifier: O
						});
					(_() || (await t(L([O], !0)), _())) && ((await Object(h.b)(n(), o, m)).ok || (t(w({
						makeFavorite: !m,
						identifier: e,
						subredditModels: p,
						profileModels: f
					})), t(Object(l.f)({
						text: v(),
						kind: I.b.Error
					}))))
				}, R = Object(r.a)(c.d), B = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s().multireddits.models,
						o = () => {
							t(Object(l.f)({
								text: v(),
								kind: I.b.Error
							}))
						},
						d = r[e];
					if (!d) return void o();
					const a = !d.isFavorited;
					t(R({
						makeFavorite: a,
						multiredditPath: e,
						multiredditsModelsState: r
					})), (await ((e, t, s) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: i.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(n(), e, a)).ok || (t(R({
						makeFavorite: !a,
						multiredditPath: e,
						multiredditsModelsState: r
					})), o())
				}, U = Object(r.a)(c.e), A = e => async (t, s, {
					apiContext: r
				}) => {
					const o = s(),
						d = o.multireddits.models;
					if (!Object(C.K)(o)) return;
					const a = (e = !0) => {
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
						c = d[e];
					if (!c) return void a();
					const u = !c.isFollowed;
					t(U({
						follow: u,
						multiredditPath: e,
						multiredditsModelsState: d
					})), (await ((e, t, s) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: i.jb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(r(), e, u)).ok || (t(U({
						follow: !u,
						multiredditPath: e,
						multiredditsModelsState: d
					})), a(u))
				}
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				caretOnLeft: "nVD-oexLbZI_4QjhrkLFz",
				caretOnRight: "KRVDnoE1RIC5qyqQLXxGG"
			}
		},
		"./src/reddit/components/ContentTooltip/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/fastdom/index.ts"),
				b = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/selectors/tooltip.ts"),
				p = s("./src/reddit/components/ContentTooltip/index.m.less"),
				h = s.n(p);

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const O = {
					height: 200,
					width: 200
				},
				_ = e => {
					switch (e) {
						case "top":
							return "bottom";
						case "right":
							return "left";
						case "left":
							return "right";
						case "bottom":
						default:
							return "top"
					}
				},
				S = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: i,
						caretColor: o,
						onClick: d,
						...a
					} = e;
					return r.a.createElement("div", f({
						onClick: d,
						className: Object(c.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === i,
							[h.a.caretOnLeft]: "left" === i,
							[h.a.caretOnRight]: "right" === i,
							[h.a.caretOnBottom]: "bottom" === i
						}),
						style: {
							...n,
							"--contentTooltip-caretColor": o && o[i] ? o[i] : Object(b.a)(e).body
						}
					}, a), t)
				}),
				E = Object(d.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				I = Object(a.a)(S, [n.a.Click, n.a.Keydown]),
				x = Object(o.b)(E);
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = O
						} = this.props;
						u.a.read(() => {
							const s = document.getElementById(e);
							if (!s) return;
							const n = s.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let i = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									i = window.innerHeight - n.bottom > t.height;
									break;
								case "left":
									i = n.left > t.width;
									break;
								case "right":
									i = n.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									i = n.top > t.height
							}
							this.setState({
								position: i ? this.props.defaultTooltipPosition : _(this.props.defaultTooltipPosition)
							})
						})
					}, this.state = {
						position: null
					}
				}
				componentDidUpdate(e) {
					!e.isOpen && this.props.isOpen && this.checkAndSetPosition(), e.isOpen && !this.props.isOpen && this.setState({
						position: null
					})
				}
				getPositions(e) {
					switch (e || this.props.defaultTooltipPosition) {
						case "bottom":
							return {
								tooltipPosition: ["center", "top"], targetPosition: ["center", "bottom"], caretPosition: "top"
							};
						case "left":
							return {
								tooltipPosition: ["right", "center"], targetPosition: ["left", "center"], caretPosition: "right"
							};
						case "right":
							return {
								tooltipPosition: ["left", "center"], targetPosition: ["right", "center"], caretPosition: "left"
							};
						case "top":
						default:
							return {
								tooltipPosition: ["center", "bottom"], targetPosition: ["center", "top"], caretPosition: "bottom"
							}
					}
				}
				render() {
					const {
						position: e
					} = this.state, {
						targetPosition: t,
						tooltipPosition: s,
						caretPosition: n
					} = this.getPositions(e);
					return r.a.createElement(I, f({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = x(j)
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less": function(e, t, s) {
			e.exports = {
				subredditTitle: "_2761hyuG6eerLCkC4Hm6fp",
				subredditContent: "_1yRTv-8W3ocQQRhv7Ah1my",
				subredditBody: "_13sLg8Q6o27ohhPDs1AFHk",
				subredditMeta: "_1gX6BuEOgKVnefuNoaJz6g",
				subredditContainer: "_17Xq6uVgiU_LWy9TZF-Ce6",
				hideBottomBorder: "_2OYNSEwlUAl9-L9Jqc8JQ2",
				subredditBodyWrapper: "_3UfPUGAphIA0o2VTisU4sa",
				thumbnailOverride: "XWNN6HDjsQTetUd60uvL1",
				iconContainer: "_3GwBEEg8fYkZyZev8v3aQb",
				subredditDescriptionContainer: "_39jJr2GgsD9SJcks2BNgoa"
			}
		},
		"./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/MetaData/index.tsx"),
				O = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				_ = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				I = s.n(E);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(d.c)({
				subreddit: S.R,
				subredditAboutInfo: S.t
			}), y = Object(r.b)(j);
			class C extends i.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						const {
							subreddit: e,
							subredditAboutInfo: t,
							listingKey: s,
							subredditId: n,
							position: i,
							sendEvent: r
						} = this.props;
						e && t && !this.hasFiredViewEvent && (r(Object(O.m)(s, n, i)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: i
						} = this.props;
						s(t ? Object(_.c)(n) : Object(O.i)(e, n, i))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: i
						} = this.props;
						return e ? s ? Object(_.e)(n) : Object(O.l)(t, n, i) : s ? Object(_.d)(n) : Object(O.k)(t, n, i)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(l.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(l.b, this.trackViewEvent)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(l.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(l.b, this.trackViewEvent)
				}
				render() {
					const {
						shouldHideBottomBorder: e,
						shouldShowDescription: t,
						shouldShowActiveUsers: s,
						subreddit: n,
						subredditAboutInfo: r
					} = this.props;
					if (!n || !r) return null;
					const d = r.publicDescription || "",
						l = n.subscribers,
						p = Object(c.b)(l),
						O = Object(c.b)(r.accountsActive);
					return i.a.createElement("div", {
						className: Object(a.a)(I.a.subredditContainer, {
							[I.a.hideBottomBorder]: e
						})
					}, i.a.createElement("div", {
						className: I.a.subredditContent
					}, i.a.createElement("div", null, i.a.createElement(o.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, i.a.createElement(u.b, {
						subredditOrProfile: n,
						className: I.a.iconContainer
					}))), i.a.createElement("div", {
						className: I.a.subredditBodyWrapper
					}, i.a.createElement("div", {
						className: I.a.subredditBody,
						"data-click-id": "body"
					}, i.a.createElement(b.a, {
						className: I.a.subredditTitle,
						to: n.url,
						onClick: this.onSubredditClick
					}, n.displayText), i.a.createElement("div", null, i.a.createElement(m.a, {
						identifier: {
							name: n.name,
							type: h.a.SUBREDDIT
						},
						postId: n.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					}))), i.a.createElement("div", {
						className: I.a.subredditMeta
					}, x._({
						"*": "{number} members",
						_1: "1 member"
					}, [x._plural(l, "number", p)], {
						hk: "4yqFU9"
					})), s && i.a.createElement("div", {
						className: I.a.subredditMeta
					}, i.a.createElement(f.c, null), x._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [x._plural(r.accountsActive, "number", O)], {
						hk: "1oCA5j"
					})), t && d && i.a.createElement(o.a, {
						className: I.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, d))))
				}
			}
			t.a = y(Object(p.c)(C))
		},
		"./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				content: "kvsTXoIM6XzLx6P8wKYwK",
				mainBody: "_1lx-VnyEwPA6T0UuOGngGR",
				thumbnailContainer: "_3OqREAp9OE_zJmrpsPoP8-",
				thumbnail: "HkggM0RcKqzxvXlnDs1Hp",
				title: "_31ZvI0YYPQqdCfsFiRCuD6",
				meta: "_1j95b_tunN22YmyIjR6Q41",
				flatlist: "_15Vns6HB5orCZFgiAscLcY",
				flatlistExpando: "_25H3rpML960krz0Mbzl6iF",
				flatlistSeparator: "_3krAdM_66EO_kYkGilOlTV",
				flatlistItemOne: "_3foTXl_McAaS9WeFsRti50",
				flatlistItemTwo: "_2CzmfK4YHPgRLM5WPRsAeQ"
			}
		},
		"./src/reddit/components/SubredditMention/MiniPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_262Sb0L-bDqEXxbgcwzY6n",
				title: "_3kuzB_OWMCt-jT_VuaNYZs",
				thumbnailContainer: "_23Xusgw_T_Ae2cUwtQnN-d",
				postDetails: "_1qtVMIr7syVGCvOYo57Fki",
				meta: "PptFc6VyiGyDlRCKotcQ2"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/lodash/debounce.js"),
				i = s.n(n),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				d = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/uuid/v4.js"),
				l = s.n(c),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/makeListingKey/index.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeActionCreator/index.ts")),
				p = s("./src/reddit/actions/subredditMention/constants.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				f = s("./src/redditGQL/operations/SubredditsWithAboutInfo.json"),
				O = s("./src/reddit/featureFlags/index.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/subredditMention.ts");
			const j = Object(m.a)(p.d),
				y = Object(m.a)(p.c),
				C = Object(m.a)(p.b),
				v = Object(m.a)(p.a),
				g = e => async (t, s, {
					gqlContext: n
				}) => {
					const i = s(),
						r = Object(x.c)(i, {
							subredditName: e
						}),
						o = !!Object(I.w)(i, {
							subredditName: e
						}) && !!Object(I.t)(i, {
							subredditName: e
						}) || !!Object(I.ab)(i, {
							subredditName: e
						}),
						d = Object(x.d)(i, {
							subredditName: e
						}),
						a = O.d.subredditMentionD2xExperiment(i);
					if (r || o && !d || !a) return;
					let c = !1;
					t(C({
						subredditName: e
					}));
					try {
						const s = await ((e, t) => Object(h.a)(e, {
							...f,
							variables: t
						}))(n(), {
							subredditNames: [e]
						});
						if (s.ok && s.body) {
							const {
								data: n
							} = s.body, i = n.subredditsInfoByNames[0];
							if (Object(E.j)(i)) {
								const e = Object(S.f)(i);
								t(j({
									subreddits: {},
									subredditAboutInfo: {},
									unavailableSubreddits: {
										[e.id]: e
									}
								}))
							} else if (i && Object.keys(i).length > 0) {
								const e = Object(S.a)(i),
									s = Object(_.a)(i);
								t(j({
									subreddits: {
										[e.id]: e
									},
									subredditAboutInfo: s,
									unavailableSubreddits: {}
								}))
							}
							t(y({
								subredditName: e
							})), c = !0
						}
					} catch (l) {
						c = !1
					}
					c || t(v({
						subredditName: e,
						error: {
							type: "Subreddit mention experiment GQL API failed or caught by try and catch!!"
						}
					}))
				};
			var T = s("./src/reddit/actions/subredditTopContent.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/components/ContentTooltip/index.tsx"),
				P = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				D = s("./src/lib/classNames/index.ts"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				w = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				R = s("./src/reddit/helpers/overlay/index.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/components/SubredditMention/MiniPost/index.m.less"),
				A = s.n(U);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = Object(a.a)(e => e, B.H, B.d, (e, t, s) => {
				return {
					crosspost: s,
					post: t,
					subredditOrProfile: Object(I.J)(e, {
						identifier: t.belongsTo
					})
				}
			});
			class H extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
					}, this.onClickSubreddit = e => {
						const {
							subredditOnClick: t
						} = this.props;
						e.stopPropagation(), t && t()
					}, this.onClickThumbnail = e => {
						const {
							post: t,
							thumbnailOnClick: s
						} = this.props;
						e.stopPropagation(), s && s(t.id)
					}
				}
				render() {
					const {
						className: e,
						post: t,
						showSubreddit: s = !1,
						subredditOrProfile: n
					} = this.props;
					return o.a.createElement("div", {
						className: Object(D.a)(A.a.container, e),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: A.a.postDetails
					}, o.a.createElement("p", {
						className: A.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && o.a.createElement(w.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), o.a.createElement("div", null, o.a.createElement("span", {
						className: A.a.meta
					}, F._({
						"*": "{number of comments} comments",
						_1: "1 comment"
					}, [F._plural(t.numComments, "number of comments", Object(L.b)(t.numComments))], {
						hk: "Wq9Sy"
					})))), o.a.createElement("div", {
						className: A.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(M.a, {
						post: t
					})))
				}
			}
			var G = Object(d.b)(q, (e, t) => ({
					openLightbox: t => e(Object(R.a)(t.permalink))
				}))(H),
				W = s("./src/reddit/contexts/PageLayer/index.tsx"),
				K = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				V = s("./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less"),
				z = s.n(V);
			const Q = Object(W.u)(),
				J = Object(a.c)({
					isFakeSubreddit: W.y
				});
			var Y = Q(Object(d.b)(J)(({
					className: e,
					showSubreddit: t,
					...s
				}) => {
					const n = Object(K.a)(s);
					return o.a.createElement("div", {
						className: Object(D.a)(A.a.container, e)
					}, o.a.createElement("div", {
						className: z.a.mainBody
					}, o.a.createElement("div", {
						className: z.a.content
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: Object(D.a)(z.a.title, n)
					}), t && o.a.createElement("div", {
						className: Object(D.a)(z.a.meta, n)
					})), o.a.createElement("div", {
						className: z.a.flatlist
					}, o.a.createElement("div", {
						className: Object(D.a)(z.a.flatlistExpando, n)
					}), o.a.createElement("div", {
						className: z.a.flatlistSeparator
					}), o.a.createElement("div", {
						className: Object(D.a)(z.a.flatlistItemOne, n)
					}), o.a.createElement("div", {
						className: Object(D.a)(z.a.flatlistItemTwo, n)
					}))), o.a.createElement("div", {
						className: z.a.thumbnailContainer
					}, o.a.createElement("div", {
						className: Object(D.a)(z.a.thumbnail, n)
					}))))
				})),
				X = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				Z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				$ = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				ee = s("./src/reddit/icons/svgs/Top/index.tsx"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				ne = s.n(se);
			const {
				fbt: ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), re = e => `subreddit-mention-${e}`, oe = Object(a.c)({
				haveError: x.d,
				hideNSFWPref: te.C,
				isEmployee: te.H,
				isPending: x.c,
				postIds: x.f,
				subreddit: I.a,
				subredditAboutInfo: I.t
			}), de = Object(d.b)(oe, (e, {
				subredditName: t,
				isHoverable: s
			}) => ({
				subredditDataRequested: t => e(g(t)),
				showTooltip: s => {
					e(Object(N.f)({
						tooltipId: s
					})), e(Object(T.d)(t))
				},
				onHideTooltip: () => e(Object(N.i)())
			})), ae = 600;
			class ce extends o.a.Component {
				constructor(e) {
					super(e), this.isRequestedOnceAlready = !1, this.onShowTooltip = () => {
						const e = re(this.state.uniqueId);
						this.props.showTooltip(e), this.props.sendEvent(Object($.f)(this.props.subredditName)), this.props.postIds.map(e => this.props.sendEvent(Object($.g)(this.props.subredditName, e)))
					}, this.onClickPost = e => {
						this.props.sendEvent(Object($.b)(this.props.subredditName, e))
					}, this.handleScroll = i()(() => this.loadSubredditData && this.loadSubredditData(), u.K), this.loadSubredditData = () => {
						const {
							subreddit: e,
							subredditAboutInfo: t,
							isPending: s,
							haveError: n
						} = this.props;
						if (!(!!e && !!t || n || s || this.isRequestedOnceAlready) && this.subredditMentionElement && this.subredditMentionElement.current) {
							const e = this.subredditMentionElement.current,
								t = window.scrollY + window.innerHeight,
								s = window.scrollY,
								n = e.getBoundingClientRect().top + window.scrollY;
							(n < s ? s - n : n - t) < ae && (this.isRequestedOnceAlready = !0, this.props.subredditDataRequested(this.props.subredditName))
						}
					}, this.handleOnClick = () => {
						const {
							sendEvent: e,
							rtJsonElementProps: t,
							subredditName: s
						} = this.props;
						e(Object($.a)({
							...t,
							subredditName: s
						}))
					}, this.subredditMentionElement = o.a.createRef(), this.state = {
						uniqueId: "",
						isHoverable: !!this.props.isHoverable
					}
				}
				componentDidMount() {
					this.loadSubredditData(), this.setState({
						uniqueId: l()()
					}), window.addEventListener("scroll", this.handleScroll), window.addEventListener("resize", this.handleScroll)
				}
				componentWillUnmount() {
					window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("resize", this.handleScroll)
				}
				renderDefault() {
					const {
						subredditName: e
					} = this.props;
					return o.a.createElement("span", {
						className: ne.a.subredditMentionContainer,
						ref: this.subredditMentionElement,
						onClick: this.handleOnClick
					}, o.a.createElement(X.a, {
						href: `/r/${e}/`
					}, o.a.createElement("span", {
						className: ne.a.subredditIconContainer
					}, o.a.createElement(X.b, {
						subredditOrProfile: void 0
					})), `r/${e}`))
				}
				render() {
					const {
						hideNSFWPref: e,
						isEmployee: t,
						isHoverable: s,
						postIds: n,
						onHideTooltip: i,
						subreddit: r,
						subredditAboutInfo: d,
						subredditName: a
					} = this.props;
					if (!r || !d || Object(E.k)(r)) return this.renderDefault();
					const {
						uniqueId: c
					} = this.state, l = Object(b.a)(this.props.subredditName, u.W.TOP), m = r.isNSFW && e || r.type === E.f.EmployeesOnly && !t || r.type === E.f.Private && !d.userIsSubscriber, p = m || r.isQuarantined || r.isNSFW;
					return o.a.createElement("span", {
						className: ne.a.subredditMentionContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i,
						id: re(c),
						onClick: this.handleOnClick,
						ref: this.subredditMentionElement
					}, o.a.createElement(X.a, {
						href: `/r/${a}/`
					}, o.a.createElement("span", {
						className: ne.a.subredditIconContainer
					}, o.a.createElement(X.b, {
						subredditOrProfile: m ? void 0 : r
					})), `r/${a}`), s && !p && o.a.createElement(k.a, {
						defaultTooltipPosition: "right",
						tooltipId: re(c),
						tooltipSizeEstimate: {
							height: 290,
							width: 364
						}
					}, o.a.createElement("div", {
						className: ne.a.hovercardStyle
					}, o.a.createElement(P.a, {
						subredditId: r.id,
						subredditName: a,
						shouldHideBottomBorder: !0,
						shouldShowActiveUsers: !0,
						shouldShowDescription: !1,
						shouldUseSubredditMentionEvents: !0,
						listingKey: l,
						position: 0
					}), o.a.createElement("div", {
						className: ne.a.topPostsTitle
					}, o.a.createElement(ee.a, {
						className: ne.a.top
					}), ie._("Top posts of the last week", null, {
						hk: "37poFw"
					})), n.length > 0 ? n.map(e => o.a.createElement(G, {
						containerOnClick: this.onClickPost,
						key: e,
						postId: e,
						thumbnailOnClick: this.onClickPost
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(Y, {
						isLoading: !0
					}), o.a.createElement(Y, {
						isLoading: !0
					}), o.a.createElement(Y, {
						isLoading: !0
					})))))
				}
			}
			t.default = de(Object(Z.c)(ce))
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = s.n(i);
			const o = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", r.a);
			t.a = o
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				c = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = s.n(c);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class m extends i.a.Component {
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
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: o,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: m,
							onSubscriptionsRequested: p,
							...h
						} = this.props, f = this.state.isHovered, O = Object(a.a)({
							type: t.type,
							key: f ? "unsubscribe" : "subscribed"
						});
						return i.a.createElement(d.t, u({
							className: e,
							priority: h.shouldReverseColor ? d.c.Primary : d.c.Secondary,
							text: O,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: d.d.XSP
						}, h))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: o,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: m,
							onSubscriptionsRequested: p,
							...h
						} = this.props, f = Object(a.a)({
							type: t.type,
							key: "subscribe"
						});
						return i.a.createElement(d.t, u({
							className: e,
							priority: h.shouldReverseColor ? d.c.Secondary : d.c.Primary,
							size: d.d.XSP,
							text: f,
							onClick: this.onClick
						}, h, {
							id: `subscribe-button-${r}`,
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
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : i.a.createElement(b, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(o.a)(Object(r.c)(m))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const i = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				r = {
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
				o = ({
					type: e,
					key: t
				}) => r[i({
					type: e
				})][t]()
		},
		"./src/reddit/components/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				blurredThumbnail: "GnWcY6GPzeZ5rzsiQ98fo",
				container: "_2MkcR85HDnYngvlVW2gMMa",
				contentType: "_2hIvPRO2xz4rn9LXAJXYDa",
				hasType: "_10qSZsDWnOBwx4bc7GJ1QF",
				hiddenImage: "_25ZOvQhQdAqwdxPd5z-KFB",
				imageThumbnail: "_33Pa96SGhFVpZeI6a7Y_Pl",
				verticallyCenterThumbnail: "Fq7oYOARH1VVCaLAuAh37",
				linkIcon: "m0n699kowSp8Wfa40lqpF",
				outboundLinkIcon: "_2rOixIHGmpfZB93ihJsw3V",
				placeholderThumbnail: "_2YO2O4rMRYYMeH_t2y8M5w",
				thumbnail: "_2c1ElNxHftd8W_nZtcG9zf",
				usePreview: "_78ohNtfA1urjgUhnN1jLi",
				LinkText: "_3HXDOeeCKnmgu_pIdoLofi",
				linkText: "_3HXDOeeCKnmgu_pIdoLofi"
			}
		},
		"./src/reddit/components/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return U
			}));
			var n = s("./src/lib/isUrl/index.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = s("./src/lib/constants/icons.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				m = s("./src/reddit/constants/elementClassNames.ts"),
				p = s("./src/reddit/controls/ContentType/index.m.less"),
				h = s.n(p);
			const f = e => Object(o.a)(h.a.contentTypeIcon, e.className),
				O = {
					embed: u.a.embed,
					gallery: u.a.media_gallery,
					gifvideo: u.a.gif_post,
					image: u.a.image_post,
					meta: u.a.poll_post,
					rpan: u.a.video_live,
					rtjson: u.a.text_post,
					text: u.a.text_post,
					video: u.a.video_post,
					liveaudio: u.a.audio
				};

			function _(e) {
				const t = f(e),
					s = e.type && O[e.type] || u.a.link_post;
				return r.a.createElement(b.a, {
					name: s,
					className: Object(o.a)({
						[m.a]: s === u.a.link_post
					}, t)
				})
			}
			var S = s("./src/reddit/controls/OutboundLink/index.tsx"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				I = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Theme/index.ts"),
				j = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = s("./src/telemetry/models/Outbound.ts"),
				C = s("./src/reddit/components/Thumbnail/index.m.less"),
				v = s.n(C);

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => e.placeholderImage || Object(j.a)(e).placeholderImage,
				N = e => e.placeholderImage ? "cover" : Object(j.a)(e).placeholderImagePosition,
				k = a.a.span("LinkText", v.a),
				P = ({
					className: e,
					onClick: t,
					children: s
				}) => r.a.createElement("div", {
					onClick: t,
					className: Object(o.a)(v.a.linkIcon, e)
				}, s),
				D = e => r.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(v.a.hiddenImage, e.className)
				}),
				L = e => {
					const t = r.a.createRef(),
						{
							src: s,
							errorSrc: n
						} = e;
					return s && n && Object(l.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${n})`)
					}), r.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(o.a)(v.a.thumbnail, v.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(j.a)(e).button : Object(j.a)(e).line
						}
					}, e.isOutbound && r.a.createElement(P, {
						className: e.linkIconClassName
					}, r.a.createElement(E.a, {
						className: Object(o.a)(v.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && r.a.createElement(k, {
						className: e.linkTextClassName
					}, e.text)), r.a.createElement(D, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				w = e => e.isOutbound ? Object(j.a)(e).button : e.placeholderImage ? "transparent" : Object(j.a)(e).line,
				M = e => {
					const t = T(e),
						s = t && {
							background: Object(x.g)(Object(j.a)(e).placeholder, t, N(e))
						};
					return r.a.createElement("div", {
						className: Object(o.a)(v.a.thumbnail, v.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: w(e)
						}
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(_, {
						className: Object(o.a)(e.contentTypeClassName, v.a.contentType, {
							[v.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && r.a.createElement(P, {
						className: e.linkIconClassName
					}, r.a.createElement(E.a, {
						className: Object(o.a)(v.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && r.a.createElement(k, {
						className: e.linkTextClassName
					}, e.text)))
				},
				R = e => r.a.createElement(L, g({}, e, {
					className: Object(o.a)(v.a.blurredThumbnail, e.className)
				})),
				B = Object(d.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: i,
						crosspost: d,
						forceShowNSFW: a,
						isCommentsPage: c,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: b,
						outboundLinkIconClassName: m,
						post: p,
						redditStyle: h,
						removeLink: f,
						showContentType: O,
						templatePlaceholderImage: _,
						text: E,
						theme: x,
						usePreview: j
					} = e, C = !x.subredditContext.shouldShowNSFWContent && (p.isNSFW || !(!d || !d.isNSFW)) && !a, g = T({
						placeholderImage: _,
						redditStyle: h,
						theme: x
					}), N = U(e), k = c ? y.SourceElement.PostImage : y.SourceElement.ListingPostImage, P = F(p, t, g, C, E, x, N, l, O, f, h, u, b, m, i), D = Object(I.D)(p);
					return Object(n.a)(D) && !f && D.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(o.a)(v.a.container, j ? v.a.usePreview : "", s)
					}, r.a.createElement(S.b, {
						href: Object(I.D)(p),
						isSponsored: p.isSponsored,
						postId: p.id,
						source: p.source,
						sourceElement: k
					}, P)) : r.a.createElement("div", {
						className: Object(o.a)(v.a.container, j ? v.a.usePreview : "", s)
					}, P)
				}),
				U = ({
					crosspost: e,
					post: t,
					url: s,
					usePreview: n
				}) => {
					if (s) return s;
					const {
						preview: i,
						media: r,
						thumbnail: o
					} = e || t;
					return n && i ? i.url : t.isSponsored && i && "default" === o.url ? i.url : A(r) ? r.scrubberThumbSource : o.url
				},
				A = e => !!e && e.type === I.o.LIVEVIDEO,
				F = (e, t, s, i, d, a, l, u, b, m, p, h, f, O, _) => {
					const S = e.source && !e.isSponsored || !1;
					if (Object(n.a)(l)) {
						const s = A(e.media),
							n = s ? {
								errorSrc: c.U
							} : {},
							u = Object(o.a)(t, {
								[v.a.verticallyCenterThumbnail]: s
							});
						return i ? r.a.createElement(R, g({
							"data-click-id": "image",
							src: l
						}, n, {
							className: u,
							isOutbound: S && !m,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: O,
							redditStyle: p,
							text: d,
							theme: a
						})) : r.a.createElement(L, g({
							alt: e.title,
							className: u,
							src: l
						}, n, {
							isOutbound: S && !m,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: O,
							redditStyle: p,
							text: d,
							theme: a
						}))
					}
					return r.a.createElement(M, {
						className: t,
						contentTypeClassName: _,
						placeholderImage: s,
						isMeta: u,
						isOutbound: S && !m,
						linkIconClassName: h,
						linkTextClassName: f,
						outboundLinkIconClassName: O,
						redditStyle: p,
						showContentType: b,
						text: d,
						theme: a,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = B
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(i.c)({
				userIsSubscriber: o.db
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(r.d([t], !0)),
				onSubscriptionsRequested: () => e(r.e()),
				onUnsubscribe: () => e(r.d([t], !1))
			}))
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "d", (function() {
				return m
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/lessComponent.tsx"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				a = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				c = s.n(a);
			const l = o.a.span("metaText", c.a),
				u = e => r.a.createElement(l, e, " · "),
				b = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: s,
					...i
				}) => {
					const o = Object(d.b)(t),
						a = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "2L3T21"
						}),
						c = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? a : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, i, c)
				},
				m = e => r.a.createElement(l, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(d.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/endpoints/subreddit/subscriptions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/redditGQL/operations/SubscribedSubreddits.json"),
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeApiRequest/index.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				a = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(o.a)(e, n);
			const l = (e, {
					subredditIds: t,
					subredditNames: s,
					subscribe: n
				}) => Object(r.a)(Object(d.a)(e, [a.a]), {
					method: i.jb.POST,
					endpoint: Object(c.a)(`${e.apiUrl}/api/subscribe`),
					data: {
						action: n ? "sub" : "unsub",
						sr: t && t.join(",") || void 0,
						sr_name: s && s.join(",") || void 0,
						api_type: "json"
					}
				}),
				u = (e, t, s) => Object(r.a)(Object(d.a)(e, [a.a]), {
					method: i.jb.POST,
					endpoint: `${e.apiUrl}/api/favorite`,
					data: {
						make_favorite: s ? "true" : "false",
						sr_name: t,
						api_type: "json"
					}
				})
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(i);
			const o = ({
					isLoading: e
				}) => Object(n.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				d = e => Object(n.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return S
			})), s.d(t, "c", (function() {
				return E
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "v", (function() {
				return C
			})), s.d(t, "w", (function() {
				return v
			})), s.d(t, "B", (function() {
				return T
			})), s.d(t, "t", (function() {
				return N
			})), s.d(t, "u", (function() {
				return k
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "q", (function() {
				return D
			})), s.d(t, "r", (function() {
				return L
			})), s.d(t, "A", (function() {
				return w
			})), s.d(t, "z", (function() {
				return M
			})), s.d(t, "y", (function() {
				return R
			})), s.d(t, "p", (function() {
				return B
			})), s.d(t, "s", (function() {
				return U
			})), s.d(t, "n", (function() {
				return H
			})), s.d(t, "h", (function() {
				return G
			})), s.d(t, "m", (function() {
				return W
			})), s.d(t, "f", (function() {
				return K
			})), s.d(t, "g", (function() {
				return V
			})), s.d(t, "i", (function() {
				return z
			})), s.d(t, "k", (function() {
				return Q
			})), s.d(t, "l", (function() {
				return J
			})), s.d(t, "j", (function() {
				return Y
			})), s.d(t, "e", (function() {
				return X
			})), s.d(t, "o", (function() {
				return Z
			})), s.d(t, "x", (function() {
				return $
			}));
			var n, i = s("./src/lib/stringInterpolate/index.ts"),
				r = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				d = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/helpers/trackers/searchResults.ts"),
				c = (s("./src/reddit/helpers/widgets/index.tsx"), s("./src/reddit/models/DiscoveryUnit/index.ts")),
				l = s("./src/reddit/models/Search/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/reddit/selectors/trending.ts"),
				p = s("./src/reddit/selectors/widgets.ts"),
				h = s("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const f = "discovery_unit",
				O = (e, t, s) => ({
					...b.o(e),
					source: f,
					screen: b.ab(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && s ? Object(i.a)(t.title, {
							subredditName: s.name
						}) : t.title,
						name: t.unitName
					}
				}),
				_ = (e, t, s) => ({
					...O(e, t, s),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				S = (e, t) => {
					Object(h.a)(E(t)(e))
				},
				E = (e, t) => s => _(s, e, t),
				I = (e, t, s, n) => "unitName" in t ? O(e, t, n) : ((e, t, s) => ({
					...b.o(e),
					source: "search",
					screen: b.ab(e),
					search: s ? {
						...b.bb(e, s),
						structureType: b.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, s),
				x = (e, t, s, i, r) => ({
					...I(e, t, i, r),
					action: "view",
					noun: n.ITEM_POST,
					post: b.I(e, s)
				}),
				j = ({
					post: e,
					rawQuery: t,
					searchQuery: s
				}) => ({
					displayQuery: decodeURIComponent(s),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? b.c.PromotedTrend : b.c.Trending
				});
			var y;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(y || (y = {}));
			const C = (e, t, s) => {
					Object(h.a)(g(e, t, s, o.c.CLICK))
				},
				v = (e, t, s) => {
					Object(h.a)(g(e, t, s, o.c.VIEW))
				},
				g = (e, t, s, n) => {
					const i = Object(m.a)(e, l.d.dropdown).filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...b.o(e),
						source: "search",
						action: n,
						noun: "trending",
						metaSearch: j(t),
						discoveryUnit: s === y.POPULAR_CAROUSEL ? {
							name: c.k,
							id: c.k,
							title: c.k,
							type: "query"
						} : void 0,
						actionInfo: b.d(e, {
							paneName: s,
							position: i
						}),
						search: {
							originPageType: e.platform.currentPage ? b.v(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: b.c.Trending,
							queryId: n === o.c.CLICK ? Object(d.c)(d.a.SearchResults) : void 0
						}
					}
				},
				T = (e, t, s, n, i, r, d) => {
					Object(h.a)({
						...b.o(e),
						...Object(a.f)(e, s, n, i, r, t),
						action: o.c.VIEW,
						noun: d ? "ad" : "post"
					})
				},
				N = (e, t, s, n) => {
					Object(h.a)(x(e, t, s, n))
				},
				k = (e, t, s, n) => i => x(i, e, t, s, n),
				P = (e, t) => {
					Object(h.a)({
						...O(e, t),
						source: f,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				D = (e, t, s, n) => {
					Object(h.a)(L(t, s, n)(e))
				},
				L = (e, t, s, i) => r => {
					return {
						...I(r, e, s, i),
						source: f,
						action: o.c.CLICK,
						noun: n.ITEM_POST,
						post: b.I(r, t)
					}
				},
				w = (e, t, s, n) => i => r => Object(a.f)(r, i, e, t, s, n),
				M = (e, t, s, n) => i => r => Object(a.e)(r, e, t, void 0, s, i, n),
				R = (e, t, s, n) => i => r => ({
					...Object(a.f)(r, i, e, t, s, n),
					noun: "ad"
				}),
				B = (e, t) => s => i => ({
					...e ? O(i, e, t) : {},
					source: f,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: b.I(i, s)
				}),
				U = (e, t, s, n) => {
					Object(h.a)(A(t, s, n)(e))
				},
				A = (e, t, s, n) => i => {
					const r = Object(u.c)(i, {
							postId: t
						}),
						d = r ? Object(p.b)(i, r) : void 0;
					return {
						...I(i, e, s, n),
						...d,
						source: f,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: b.I(i, t)
					}
				},
				F = () => ({
					id: "xd_focus_verticals",
					unitType: c.e.Listing,
					experiment: "",
					title: r.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: c.c.Large,
					surface: c.d.Frontpage,
					url: "gql.reddit.com"
				}),
				q = (e, t, s) => b.d(e, {
					position: s
				}),
				H = (e, t, s) => {
					const n = F();
					return e => ({
						..._(e, n),
						actionInfo: q(e, 0, s),
						subreddit: b.ib(e, t)
					})
				},
				G = (e, t, s) => {
					const n = F();
					return e => ({
						...x(e, n, t),
						actionInfo: q(e, 0, s)
					})
				},
				W = (e, t, s) => {
					const i = F();
					return e => ({
						...O(e, i),
						actionInfo: q(e, 0, s),
						subreddit: b.ib(e, t) || null,
						source: f,
						action: o.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				K = (e, t, s) => {
					const i = F();
					return e => ({
						...O(e, i),
						actionInfo: q(e, 0, s),
						post: b.I(e, t) || null,
						source: f,
						action: o.c.CLICK,
						noun: n.ITEM_POST
					})
				},
				V = (e, t, s, i) => {
					const r = F();
					return e => ({
						...O(e, r),
						actionInfo: q(e, 0, i),
						subreddit: b.ib(e, s) || null,
						post: b.I(e, t) || null,
						source: f,
						action: o.c.CLICK,
						noun: n.ITEM_POST_SUBREDDIT
					})
				},
				z = (e, t, s) => {
					const i = F();
					return e => ({
						...O(e, i),
						actionInfo: q(e, 0, s),
						subreddit: b.ib(e, t) || null,
						source: f,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				Q = (e, t, s, i) => {
					const r = F();
					return e => ({
						...O(e, r),
						actionInfo: q(e, 0, s),
						subreddit: b.ib(e, t) || null,
						post: i ? b.I(e, i) : null,
						source: f,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				J = (e, t, s, i) => {
					const r = F();
					return e => ({
						...O(e, r),
						actionInfo: q(e, 0, s),
						subreddit: b.ib(e, t) || null,
						post: i ? b.I(e, i) : null,
						source: f,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				Y = (e, t, s) => {
					const i = F();
					return e => ({
						...O(e, i),
						actionInfo: q(e, 0, s),
						subreddit: b.ib(e, t) || null,
						source: f,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_HIDE
					})
				},
				X = (e, t, s) => {
					const i = F();
					return e => ({
						...O(e, i),
						actionInfo: q(e, 0, s),
						subreddit: b.ib(e, t) || null,
						source: f,
						action: o.c.CLICK,
						noun: n.HEADER_SUBREDDIT
					})
				},
				Z = (e, t) => s => ({
					...O(s, e),
					...t && Object(p.b)(s, t),
					source: f,
					action: o.c.CLICK,
					noun: "item"
				}),
				$ = e => t => ({
					...O(t, e),
					source: f,
					action: o.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => i.a.createElement("i", {
				className: `${Object(r.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/selectors/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return i
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = e => Object.keys(e.trending.models).reduce((t, s) => [...t, ...e.trending.models[s]], []),
				i = (e, t) => e.trending.models[t] || []
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"eba3db8414d9"}')
		},
		"./src/redditGQL/operations/SubredditsWithAboutInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"305b59285ca4"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.aeb403bd67b5d613c139.js.map