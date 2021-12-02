// https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.328b9c7ec79992150124.js
// Retrieved at 12/2/2021, 10:50:04 AM by Reddit Dataminer v1.0.0
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
				return c
			})), s.d(t, "b", (function() {
				return a
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
			const c = "SUBREDDIT_TOP_CONTENT__PENDING",
				a = "SUBREDDIT_TOP_CONTENT__LOADED",
				l = "SUBREDDIT_TOP_CONTENT__FAILED",
				u = Object(n.a)(c),
				b = Object(n.a)(a),
				m = Object(n.a)(l),
				p = e => async (t, s, n) => {
					const c = e.toLowerCase(),
						a = s(),
						{
							api: l,
							topContent: p
						} = a.subreddits;
					if (l.topContent.pending[c] || p[c]) return;
					t(u({
						subredditName: c
					})), t(Object(i.z)());
					const h = await ((e, t) => Object(r.a)(e, {
						...o,
						variables: t
					}))(n.gqlContext(), {
						subredditName: c
					});
					if (h.ok) {
						const e = h.body.data.subreddit;
						if (e) {
							const s = Object(d.c)(e);
							s && t(b({
								...s,
								subredditName: c
							}))
						}
					} else t(m({
						subredditName: c,
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
				return c
			})), s.d(t, "f", (function() {
				return a
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
				c = "SUBSCRIPTION__ORDER_LOADED",
				a = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
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
				return R
			})), s.d(t, "b", (function() {
				return A
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/linkMatchers/customLinks.ts"),
				d = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/actions/subscription/constants.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				u = s("./src/reddit/constants/posts.ts"),
				b = s("./src/lib/makeApiRequest/index.ts"),
				m = s("./src/lib/omitHeaders/index.ts"),
				p = s("./src/reddit/constants/headers.ts");
			var h = s("./src/reddit/endpoints/subreddit/subscriptions.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				S = s("./src/reddit/models/GqlTopLevelField.ts"),
				_ = s("./src/reddit/models/User/index.ts");

			function E(e) {
				const t = [],
					s = [],
					n = {},
					i = {},
					{
						followedRedditorsInfo: r
					} = e.identity;
				for (const d of r.edges) {
					if (d.node.__typename !== _.c.AvailableRedditor || !d.node.profile) continue;
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
					if (d.node.__typename !== S.a.Subreddit) continue;
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
			var x = s("./src/reddit/models/Toast/index.ts"),
				j = s("./src/reddit/selectors/profile.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/subscriptions.ts"),
				C = s("./src/reddit/selectors/user.ts");
			const v = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				g = Object(r.a)(a.c),
				N = Object(r.a)(a.b),
				T = Object(r.a)(a.a),
				k = Object(r.a)(a.h),
				P = (Object(r.a)(a.i), Object(r.a)(a.g), () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(N());
					const i = await Object(h.a)(s());
					if (i.ok) {
						const t = E(i.body.data);
						e(g(t))
					} else e(T({
						error: i.error
					}))
				}),
				D = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				L = (e, t, s) => async (r, a, {
					apiContext: b
				}) => {
					let m = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(I.A)(a(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(j.m)(a(), e.name),
						name: `${i.hc}${e.name}`,
						type: e.type
					});
					if (!Object(C.K)(a())) return r(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void r(Object(d.k)());
					const p = Object(C.k)(a());
					if (p) {
						const t = m.length,
							s = e.length;
						if (m = m.filter(e => !D(p, e)), (e = e.filter(e => !D(p, e))).length !== s || m.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							r(Object(l.f)(Object(l.e)(e, x.b.Error)))
						}
						if (!e.length && !m.length) return
					}
					if (r(k({
							identifiers: m,
							nameIdentifiers: e,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(y.b)(a()),
							userIsSubscriber: t,
							widgetId: s
						})), (await Object(h.c)(b(), {
							subredditNames: m.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
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
							c = n.fbt._("Sucсessfully joined {communityname}", [n.fbt._param("communityname", s)], {
								hk: "3Al8aF"
							}),
							a = n.fbt._("Sucсessfully left {communityname}", [n.fbt._param("communityname", s)], {
								hk: "2w5JFZ"
							});
						r(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? i : d : t ? c : a
						}))
					} else {
						r(k({
							identifiers: m,
							nameIdentifiers: e,
							profileModels: a().profiles.models,
							subredditModels: a().subreddits.models,
							subscriptionsCount: Object(y.b)(a()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const i = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						r(Object(l.f)(Object(l.e)(i, x.b.Error)))
					}
				}, w = Object(r.a)(a.f), M = e => async (t, s, {
					apiContext: n
				}) => {
					const i = s(),
						r = Object(I.H)(i, {
							identifier: e
						});
					if (!r) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const o = e.type === u.a.SUBREDDIT ? r.name : `u_${r.name}`,
						d = i.subscriptions.favoriteSubredditOrder || [],
						c = i.subscriptions.favoriteProfileOrder || [],
						a = d.indexOf(e.id),
						b = c.indexOf(e.id),
						m = -1 === a && -1 === b,
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
						S = () => Object(I.bb)(s(), {
							identifier: O
						});
					(S() || (await t(L([O], !0)), S())) && ((await Object(h.b)(n(), o, m)).ok || (t(w({
						makeFavorite: !m,
						identifier: e,
						subredditModels: p,
						profileModels: f
					})), t(Object(l.f)({
						text: v(),
						kind: x.b.Error
					}))))
				}, B = Object(r.a)(a.d), R = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s().multireddits.models,
						o = () => {
							t(Object(l.f)({
								text: v(),
								kind: x.b.Error
							}))
						},
						d = r[e];
					if (!d) return void o();
					const c = !d.isFavorited;
					t(B({
						makeFavorite: c,
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
					}))(n(), e, c)).ok || (t(B({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: r
					})), o())
				}, U = Object(r.a)(a.e), A = e => async (t, s, {
					apiContext: r
				}) => {
					const o = s(),
						d = o.multireddits.models;
					if (!Object(C.K)(o)) return;
					const c = (e = !0) => {
							t(Object(l.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "2I4uia"
								}) : n.fbt._("unfollow", null, {
									hk: "1ZDqgR"
								}))], {
									hk: "1ufRSl"
								}),
								kind: x.b.Error
							}))
						},
						a = d[e];
					if (!a) return void c();
					const u = !a.isFollowed;
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
					})), c(u))
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
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				a = s("./src/lib/classNames/index.ts"),
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
				S = e => {
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
				_ = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: i,
						caretColor: o,
						onClick: d,
						...c
					} = e;
					return r.a.createElement("div", f({
						onClick: d,
						className: Object(a.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === i,
							[h.a.caretOnLeft]: "left" === i,
							[h.a.caretOnRight]: "right" === i,
							[h.a.caretOnBottom]: "bottom" === i
						}),
						style: {
							...n,
							"--contentTooltip-caretColor": o && o[i] ? o[i] : Object(b.a)(e).body
						}
					}, c), t)
				}),
				E = Object(d.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				x = Object(c.a)(_, [n.a.Click, n.a.Keydown]),
				j = Object(o.b)(E);
			class I extends r.a.Component {
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
								position: i ? this.props.defaultTooltipPosition : S(this.props.defaultTooltipPosition)
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
					return r.a.createElement(x, f({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = j(I)
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
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/MetaData/index.tsx"),
				O = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				S = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				x = s.n(E);
			const {
				fbt: j
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = Object(d.c)({
				subreddit: _.P,
				subredditAboutInfo: _.s
			}), y = Object(r.b)(I);
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
						s(t ? Object(S.c)(n) : Object(O.i)(e, n, i))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: i
						} = this.props;
						return e ? s ? Object(S.e)(n) : Object(O.l)(t, n, i) : s ? Object(S.d)(n) : Object(O.k)(t, n, i)
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
						p = Object(a.b)(l),
						O = Object(a.b)(r.accountsActive);
					return i.a.createElement("div", {
						className: Object(c.a)(x.a.subredditContainer, {
							[x.a.hideBottomBorder]: e
						})
					}, i.a.createElement("div", {
						className: x.a.subredditContent
					}, i.a.createElement("div", null, i.a.createElement(o.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, i.a.createElement(u.b, {
						subredditOrProfile: n,
						className: x.a.iconContainer
					}))), i.a.createElement("div", {
						className: x.a.subredditBodyWrapper
					}, i.a.createElement("div", {
						className: x.a.subredditBody,
						"data-click-id": "body"
					}, i.a.createElement(b.a, {
						className: x.a.subredditTitle,
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
						className: x.a.subredditMeta
					}, j._({
						"*": "{number} members",
						_1: "1 member"
					}, [j._plural(l, "number", p)], {
						hk: "4yqFU9"
					})), s && i.a.createElement("div", {
						className: x.a.subredditMeta
					}, i.a.createElement(f.c, null), j._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [j._plural(r.accountsActive, "number", O)], {
						hk: "1oCA5j"
					})), t && d && i.a.createElement(o.a, {
						className: x.a.subredditDescriptionContainer,
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
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/uuid/v4.js"),
				l = s.n(a),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/makeListingKey/index.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeActionCreator/index.ts")),
				p = s("./src/reddit/actions/subredditMention/constants.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				f = s("./src/redditGQL/operations/SubredditsWithAboutInfo.json"),
				O = s("./src/reddit/featureFlags/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/selectors/subredditMention.ts");
			const I = Object(m.a)(p.d),
				y = Object(m.a)(p.c),
				C = Object(m.a)(p.b),
				v = Object(m.a)(p.a),
				g = e => async (t, s, {
					gqlContext: n
				}) => {
					const i = s(),
						r = Object(j.c)(i, {
							subredditName: e
						}),
						o = !!Object(x.v)(i, {
							subredditName: e
						}) && !!Object(x.s)(i, {
							subredditName: e
						}) || !!Object(x.Y)(i, {
							subredditName: e
						}),
						d = Object(j.d)(i, {
							subredditName: e
						}),
						c = O.d.subredditMentionD2xExperiment(i);
					if (r || o && !d || !c) return;
					let a = !1;
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
								const e = Object(_.f)(i);
								t(I({
									subreddits: {},
									subredditAboutInfo: {},
									unavailableSubreddits: {
										[e.id]: e
									}
								}))
							} else if (i && Object.keys(i).length > 0) {
								const e = Object(_.a)(i),
									s = Object(S.a)(i);
								t(I({
									subreddits: {
										[e.id]: e
									},
									subredditAboutInfo: s,
									unavailableSubreddits: {}
								}))
							}
							t(y({
								subredditName: e
							})), a = !0
						}
					} catch (l) {
						a = !1
					}
					a || t(v({
						subredditName: e,
						error: {
							type: "Subreddit mention experiment GQL API failed or caught by try and catch!!"
						}
					}))
				};
			var N = s("./src/reddit/actions/subredditTopContent.ts"),
				T = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/components/ContentTooltip/index.tsx"),
				P = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				D = s("./src/lib/classNames/index.ts"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				w = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				B = s("./src/reddit/helpers/overlay/index.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/components/SubredditMention/MiniPost/index.m.less"),
				A = s.n(U);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = Object(c.a)(e => e, R.H, R.d, (e, t, s) => {
				return {
					crosspost: s,
					post: t,
					subredditOrProfile: Object(x.H)(e, {
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
					openLightbox: t => e(Object(B.a)(t.permalink))
				}))(H),
				z = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				V = s("./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less"),
				K = s.n(V);
			const Q = Object(z.u)(),
				J = Object(c.c)({
					isFakeSubreddit: z.y
				});
			var Y = Q(Object(d.b)(J)(({
					className: e,
					showSubreddit: t,
					...s
				}) => {
					const n = Object(W.a)(s);
					return o.a.createElement("div", {
						className: Object(D.a)(A.a.container, e)
					}, o.a.createElement("div", {
						className: K.a.mainBody
					}, o.a.createElement("div", {
						className: K.a.content
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: Object(D.a)(K.a.title, n)
					}), t && o.a.createElement("div", {
						className: Object(D.a)(K.a.meta, n)
					})), o.a.createElement("div", {
						className: K.a.flatlist
					}, o.a.createElement("div", {
						className: Object(D.a)(K.a.flatlistExpando, n)
					}), o.a.createElement("div", {
						className: K.a.flatlistSeparator
					}), o.a.createElement("div", {
						className: Object(D.a)(K.a.flatlistItemOne, n)
					}), o.a.createElement("div", {
						className: Object(D.a)(K.a.flatlistItemTwo, n)
					}))), o.a.createElement("div", {
						className: K.a.thumbnailContainer
					}, o.a.createElement("div", {
						className: Object(D.a)(K.a.thumbnail, n)
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), re = e => `subreddit-mention-${e}`, oe = Object(c.c)({
				haveError: j.d,
				hideNSFWPref: te.C,
				isEmployee: te.H,
				isPending: j.c,
				postIds: j.f,
				subreddit: x.a,
				subredditAboutInfo: x.s
			}), de = Object(d.b)(oe, (e, {
				subredditName: t,
				isHoverable: s
			}) => ({
				subredditDataRequested: t => e(g(t)),
				showTooltip: s => {
					e(Object(T.f)({
						tooltipId: s
					})), e(Object(N.d)(t))
				},
				onHideTooltip: () => e(Object(T.i)())
			})), ce = 600;
			class ae extends o.a.Component {
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
							(n < s ? s - n : n - t) < ce && (this.isRequestedOnceAlready = !0, this.props.subredditDataRequested(this.props.subredditName))
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
						subredditName: c
					} = this.props;
					if (!r || !d || Object(E.k)(r)) return this.renderDefault();
					const {
						uniqueId: a
					} = this.state, l = Object(b.a)(this.props.subredditName, u.W.TOP), m = r.isNSFW && e || r.type === E.f.EmployeesOnly && !t || r.type === E.f.Private && !d.userIsSubscriber, p = m || r.isQuarantined || r.isNSFW;
					return o.a.createElement("span", {
						className: ne.a.subredditMentionContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i,
						id: re(a),
						onClick: this.handleOnClick,
						ref: this.subredditMentionElement
					}, o.a.createElement(X.a, {
						href: `/r/${c}/`
					}, o.a.createElement("span", {
						className: ne.a.subredditIconContainer
					}, o.a.createElement(X.b, {
						subredditOrProfile: m ? void 0 : r
					})), `r/${c}`), s && !p && o.a.createElement(k.a, {
						defaultTooltipPosition: "right",
						tooltipId: re(a),
						tooltipSizeEstimate: {
							height: 290,
							width: 364
						}
					}, o.a.createElement("div", {
						className: ne.a.hovercardStyle
					}, o.a.createElement(P.a, {
						subredditId: r.id,
						subredditName: c,
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
			t.default = de(Object(Z.c)(ae))
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
				c = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				l = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				u = s.n(l);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", u.a);
			class p extends i.a.Component {
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
							isInJoinOptimizationsExperiment: s,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: o,
							sendEvent: l,
							small: u = !1,
							size: m,
							userIsSubscriber: p,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: f,
							onSubscriptionsRequested: O,
							...S
						} = this.props, _ = this.state.isHovered, E = Object(a.a)({
							type: t.type,
							key: _ ? "unsubscribe" : "subscribed"
						}), x = s || !u && _ ? void 0 : Object(c.b)("checkmark"), j = s ? d.d.XSP : m || (u ? d.d.XS : d.d.S);
						return i.a.createElement(d.t, b({
							className: e,
							priority: S.shouldReverseColor ? d.c.Primary : d.c.Secondary,
							Icon: x,
							text: s ? E : !u && E,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: j
						}, S))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							isInJoinOptimizationsExperiment: s,
							onSubscribe: n,
							onUnsubscribe: r,
							postId: o,
							sendEvent: l,
							small: u = !1,
							size: m,
							userIsSubscriber: p,
							doNotHideOtherSubscribeButtons: h,
							getEventFactory: f,
							onSubscriptionsRequested: O,
							...S
						} = this.props, _ = Object(a.a)({
							type: t.type,
							key: "subscribe"
						}), E = s ? d.d.XSP : m || (u ? d.d.XS : d.d.S);
						return i.a.createElement(d.t, b({
							className: e,
							priority: S.shouldReverseColor ? d.c.Secondary : d.c.Primary,
							Icon: s ? void 0 : Object(c.b)("add"),
							size: E,
							text: s ? _ : !u && _,
							onClick: this.onClick
						}, S, {
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
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : i.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(o.a)(Object(r.c)(p))
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
				c = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
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

			function S(e) {
				const t = f(e),
					s = e.type && O[e.type] || u.a.link_post;
				return r.a.createElement(b.a, {
					name: s,
					className: Object(o.a)({
						[m.a]: s === u.a.link_post
					}, t)
				})
			}
			var _ = s("./src/reddit/controls/OutboundLink/index.tsx"),
				E = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Theme/index.ts"),
				I = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
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
			const N = e => e.placeholderImage || Object(I.a)(e).placeholderImage,
				T = e => e.placeholderImage ? "cover" : Object(I.a)(e).placeholderImagePosition,
				k = c.a.span("LinkText", v.a),
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
							borderColor: e.isOutbound ? Object(I.a)(e).button : Object(I.a)(e).line
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
				w = e => e.isOutbound ? Object(I.a)(e).button : e.placeholderImage ? "transparent" : Object(I.a)(e).line,
				M = e => {
					const t = N(e),
						s = t && {
							background: Object(j.g)(Object(I.a)(e).placeholder, t, T(e))
						};
					return r.a.createElement("div", {
						className: Object(o.a)(v.a.thumbnail, v.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: w(e)
						}
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(S, {
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
				B = e => r.a.createElement(L, g({}, e, {
					className: Object(o.a)(v.a.blurredThumbnail, e.className)
				})),
				R = Object(d.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: i,
						crosspost: d,
						forceShowNSFW: c,
						isCommentsPage: a,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: b,
						outboundLinkIconClassName: m,
						post: p,
						redditStyle: h,
						removeLink: f,
						showContentType: O,
						templatePlaceholderImage: S,
						text: E,
						theme: j,
						usePreview: I
					} = e, C = !j.subredditContext.shouldShowNSFWContent && (p.isNSFW || !(!d || !d.isNSFW)) && !c, g = N({
						placeholderImage: S,
						redditStyle: h,
						theme: j
					}), T = U(e), k = a ? y.SourceElement.PostImage : y.SourceElement.ListingPostImage, P = F(p, t, g, C, E, j, T, l, O, f, h, u, b, m, i), D = Object(x.D)(p);
					return Object(n.a)(D) && !f && D.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(o.a)(v.a.container, I ? v.a.usePreview : "", s)
					}, r.a.createElement(_.b, {
						href: Object(x.D)(p),
						isSponsored: p.isSponsored,
						postId: p.id,
						source: p.source,
						sourceElement: k
					}, P)) : r.a.createElement("div", {
						className: Object(o.a)(v.a.container, I ? v.a.usePreview : "", s)
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
				A = e => !!e && e.type === x.o.LIVEVIDEO,
				F = (e, t, s, i, d, c, l, u, b, m, p, h, f, O, S) => {
					const _ = e.source && !e.isSponsored || !1;
					if (Object(n.a)(l)) {
						const s = A(e.media),
							n = s ? {
								errorSrc: a.U
							} : {},
							u = Object(o.a)(t, {
								[v.a.verticallyCenterThumbnail]: s
							});
						return i ? r.a.createElement(B, g({
							"data-click-id": "image",
							src: l
						}, n, {
							className: u,
							isOutbound: _ && !m,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: O,
							redditStyle: p,
							text: d,
							theme: c
						})) : r.a.createElement(L, g({
							alt: e.title,
							className: u,
							src: l
						}, n, {
							isOutbound: _ && !m,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: O,
							redditStyle: p,
							text: d,
							theme: c
						}))
					}
					return r.a.createElement(M, {
						className: t,
						contentTypeClassName: S,
						placeholderImage: s,
						isMeta: u,
						isOutbound: _ && !m,
						linkIconClassName: h,
						linkTextClassName: f,
						outboundLinkIconClassName: O,
						redditStyle: p,
						showContentType: b,
						text: d,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = R
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				d = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(i.c)({
				isInJoinOptimizationsExperiment: e => Object(o.a)(e) || Object(o.c)(e) || Object(o.d)(e) || Object(o.g)(e),
				userIsSubscriber: d.bb
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
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				a = s.n(c);
			const l = o.a.span("metaText", a.a),
				u = e => r.a.createElement(l, e, " · "),
				b = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: s,
					...i
				}) => {
					const o = Object(d.b)(t),
						c = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "2L3T21"
						}),
						a = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? c : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, i, a)
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
				c = s("./src/reddit/constants/headers.ts"),
				a = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(o.a)(e, n);
			const l = (e, {
					subredditIds: t,
					subredditNames: s,
					subscribe: n
				}) => Object(r.a)(Object(d.a)(e, [c.a]), {
					method: i.jb.POST,
					endpoint: Object(a.a)(`${e.apiUrl}/api/subscribe`),
					data: {
						action: n ? "sub" : "unsub",
						sr: t && t.join(",") || void 0,
						sr_name: s && s.join(",") || void 0,
						api_type: "json"
					}
				}),
				u = (e, t, s) => Object(r.a)(Object(d.a)(e, [c.a]), {
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
				return O
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "v", (function() {
				return I
			})), s.d(t, "w", (function() {
				return y
			})), s.d(t, "B", (function() {
				return v
			})), s.d(t, "t", (function() {
				return g
			})), s.d(t, "u", (function() {
				return N
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "q", (function() {
				return k
			})), s.d(t, "r", (function() {
				return P
			})), s.d(t, "A", (function() {
				return D
			})), s.d(t, "z", (function() {
				return L
			})), s.d(t, "y", (function() {
				return w
			})), s.d(t, "p", (function() {
				return M
			})), s.d(t, "s", (function() {
				return B
			})), s.d(t, "n", (function() {
				return F
			})), s.d(t, "h", (function() {
				return q
			})), s.d(t, "m", (function() {
				return H
			})), s.d(t, "f", (function() {
				return G
			})), s.d(t, "g", (function() {
				return z
			})), s.d(t, "i", (function() {
				return W
			})), s.d(t, "k", (function() {
				return V
			})), s.d(t, "l", (function() {
				return K
			})), s.d(t, "j", (function() {
				return Q
			})), s.d(t, "e", (function() {
				return J
			})), s.d(t, "o", (function() {
				return Y
			})), s.d(t, "x", (function() {
				return X
			}));
			var n, i = s("./src/lib/stringInterpolate/index.ts"),
				r = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				d = s("./src/reddit/helpers/correlationIdTracker.ts"),
				c = s("./src/reddit/helpers/trackers/searchResults.ts"),
				a = (s("./src/reddit/helpers/widgets/index.tsx"), s("./src/reddit/models/DiscoveryUnit/index.ts")),
				l = s("./src/reddit/selectors/posts.ts"),
				u = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/reddit/selectors/widgets.ts"),
				m = s("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const p = "discovery_unit",
				h = (e, t, s) => ({
					...u.defaults(e),
					source: p,
					screen: u.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && s ? Object(i.a)(t.title, {
							subredditName: s.name
						}) : t.title,
						name: t.unitName
					}
				}),
				f = (e, t, s) => ({
					...h(e, t, s),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				O = (e, t) => {
					Object(m.a)(S(t)(e))
				},
				S = (e, t) => s => f(s, e, t),
				_ = (e, t, s, n) => "unitName" in t ? h(e, t, n) : ((e, t, s) => ({
					...u.defaults(e),
					source: "search",
					screen: u.screen(e),
					search: s ? {
						...u.search(e, s),
						structureType: u.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, s),
				E = (e, t, s, i, r) => ({
					..._(e, t, i, r),
					action: "view",
					noun: n.ITEM_POST,
					post: u.post(e, s)
				}),
				x = ({
					post: e,
					rawQuery: t,
					searchQuery: s
				}) => ({
					displayQuery: decodeURIComponent(s),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? u.StructureType.PromotedTrend : u.StructureType.Trending
				});
			var j;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(j || (j = {}));
			const I = (e, t, s) => {
					Object(m.a)(C(e, t, s, o.c.CLICK))
				},
				y = (e, t, s) => {
					Object(m.a)(C(e, t, s, o.c.VIEW))
				},
				C = (e, t, s, n) => {
					const i = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...u.defaults(e),
						source: "search",
						action: n,
						noun: "trending",
						metaSearch: x(t),
						discoveryUnit: s === j.POPULAR_CAROUSEL ? {
							name: a.k,
							id: a.k,
							title: a.k,
							type: "query"
						} : void 0,
						actionInfo: u.actionInfo(e, {
							paneName: s,
							position: i
						}),
						search: {
							originPageType: e.platform.currentPage ? u.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: u.StructureType.Trending,
							queryId: n === o.c.CLICK ? Object(d.c)(d.a.SearchResults) : void 0
						}
					}
				},
				v = (e, t, s, n, i, r, d) => {
					Object(m.a)({
						...u.defaults(e),
						...Object(c.f)(e, s, n, i, r, t),
						action: o.c.VIEW,
						noun: d ? "ad" : "post"
					})
				},
				g = (e, t, s, n) => {
					Object(m.a)(E(e, t, s, n))
				},
				N = (e, t, s, n) => i => E(i, e, t, s, n),
				T = (e, t) => {
					Object(m.a)({
						...h(e, t),
						source: p,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				k = (e, t, s, n) => {
					Object(m.a)(P(t, s, n)(e))
				},
				P = (e, t, s, i) => r => {
					return {
						..._(r, e, s, i),
						source: p,
						action: o.c.CLICK,
						noun: n.ITEM_POST,
						post: u.post(r, t)
					}
				},
				D = (e, t, s, n) => i => r => Object(c.f)(r, i, e, t, s, n),
				L = (e, t, s, n) => i => r => Object(c.e)(r, e, t, void 0, s, i, n),
				w = (e, t, s, n) => i => r => ({
					...Object(c.f)(r, i, e, t, s, n),
					noun: "ad"
				}),
				M = (e, t) => s => i => ({
					...e ? h(i, e, t) : {},
					source: p,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(i, s)
				}),
				B = (e, t, s, n) => {
					Object(m.a)(R(t, s, n)(e))
				},
				R = (e, t, s, n) => i => {
					const r = Object(l.c)(i, {
							postId: t
						}),
						d = r ? Object(b.b)(i, r) : void 0;
					return {
						..._(i, e, s, n),
						...d,
						source: p,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: u.post(i, t)
					}
				},
				U = () => ({
					id: "xd_focus_verticals",
					unitType: a.e.Listing,
					experiment: "",
					title: r.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: a.c.Large,
					surface: a.d.Frontpage,
					url: "gql.reddit.com"
				}),
				A = (e, t, s) => u.actionInfo(e, {
					position: s
				}),
				F = (e, t, s) => {
					const n = U();
					return e => ({
						...f(e, n),
						actionInfo: A(e, 0, s),
						subreddit: u.subredditById(e, t)
					})
				},
				q = (e, t, s) => {
					const n = U();
					return e => ({
						...E(e, n, t),
						actionInfo: A(e, 0, s)
					})
				},
				H = (e, t, s) => {
					const i = U();
					return e => ({
						...h(e, i),
						actionInfo: A(e, 0, s),
						subreddit: u.subredditById(e, t) || null,
						source: p,
						action: o.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				G = (e, t, s) => {
					const i = U();
					return e => ({
						...h(e, i),
						actionInfo: A(e, 0, s),
						post: u.post(e, t) || null,
						source: p,
						action: o.c.CLICK,
						noun: n.ITEM_POST
					})
				},
				z = (e, t, s, i) => {
					const r = U();
					return e => ({
						...h(e, r),
						actionInfo: A(e, 0, i),
						subreddit: u.subredditById(e, s) || null,
						post: u.post(e, t) || null,
						source: p,
						action: o.c.CLICK,
						noun: n.ITEM_POST_SUBREDDIT
					})
				},
				W = (e, t, s) => {
					const i = U();
					return e => ({
						...h(e, i),
						actionInfo: A(e, 0, s),
						subreddit: u.subredditById(e, t) || null,
						source: p,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				V = (e, t, s, i) => {
					const r = U();
					return e => ({
						...h(e, r),
						actionInfo: A(e, 0, s),
						subreddit: u.subredditById(e, t) || null,
						post: i ? u.post(e, i) : null,
						source: p,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				K = (e, t, s, i) => {
					const r = U();
					return e => ({
						...h(e, r),
						actionInfo: A(e, 0, s),
						subreddit: u.subredditById(e, t) || null,
						post: i ? u.post(e, i) : null,
						source: p,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				Q = (e, t, s) => {
					const i = U();
					return e => ({
						...h(e, i),
						actionInfo: A(e, 0, s),
						subreddit: u.subredditById(e, t) || null,
						source: p,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_HIDE
					})
				},
				J = (e, t, s) => {
					const i = U();
					return e => ({
						...h(e, i),
						actionInfo: A(e, 0, s),
						subreddit: u.subredditById(e, t) || null,
						source: p,
						action: o.c.CLICK,
						noun: n.HEADER_SUBREDDIT
					})
				},
				Y = (e, t) => s => ({
					...h(s, e),
					...t && Object(b.b)(s, t),
					source: p,
					action: o.c.CLICK,
					noun: "item"
				}),
				X = e => t => ({
					...h(t, e),
					source: p,
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
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "e", (function() {
				return b
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts");
			const d = Object(n.a)(e => Object(r.c)(e, {
					experimentName: i.zb,
					experimentEligibilitySelector: o.e
				}), e => e === i.V.Enabled),
				c = Object(n.a)(e => Object(r.c)(e, {
					experimentName: i.Ab,
					experimentEligibilitySelector: o.e
				}), e => e === i.W.Enabled),
				a = Object(n.a)(e => Object(r.c)(e, {
					experimentName: i.Cb,
					experimentEligibilitySelector: o.e
				}), e => e === i.Y.Enabled),
				l = Object(n.a)(e => Object(r.c)(e, {
					experimentName: i.Db,
					experimentEligibilitySelector: o.e
				}), e => e === i.Z.Enabled),
				u = Object(n.a)(e => Object(r.c)(e, {
					experimentName: i.Hb,
					experimentEligibilitySelector: o.e
				}), e => e === i.db.Enabled),
				b = (Object(n.a)(e => Object(r.c)(e, {
					experimentName: i.Bb,
					experimentEligibilitySelector: o.e
				}), e => e === i.X.Enabled), Object(n.a)(e => Object(r.c)(e, {
					experimentName: i.Eb,
					experimentEligibilitySelector: o.e
				}), e => e === i.ab.Enabled)),
				m = Object(n.a)(e => Object(r.c)(e, {
					experimentName: i.Fb,
					experimentEligibilitySelector: o.e
				}), e => e === i.bb.Enabled);
			Object(n.a)(e => Object(r.c)(e, {
				experimentName: i.Ib,
				experimentEligibilitySelector: o.e
			}), e => e === i.eb.Enabled), Object(n.a)(e => Object(r.c)(e, {
				experimentName: i.Gb,
				experimentEligibilitySelector: o.e
			}), e => e === i.cb.Enabled)
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"839d1a7694c8"}')
		},
		"./src/redditGQL/operations/SubredditsWithAboutInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"305b59285ca4"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.328b9c7ec79992150124.js.map