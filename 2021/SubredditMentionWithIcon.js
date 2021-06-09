// https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.9193a90a5d73facf1ab7.js
// Retrieved at 6/9/2021, 9:40:19 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditMentionWithIcon"], {
		"./src/graphql/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"0290a261578c"}')
		},
		"./src/graphql/operations/SubredditsWithAboutInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"208de0847dac"}')
		},
		"./src/graphql/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"84f02d14f38a"}')
		},
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
				return d
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "d", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/preferences.ts"),
				r = s("./src/graphql/operations/SubredditTopContent.json"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const d = "SUBREDDIT_TOP_CONTENT__PENDING",
				a = "SUBREDDIT_TOP_CONTENT__LOADED",
				l = "SUBREDDIT_TOP_CONTENT__FAILED",
				u = Object(n.a)(d),
				b = Object(n.a)(a),
				m = Object(n.a)(l),
				p = e => async (t, s, n) => {
					const d = e.toLowerCase(),
						a = s(),
						{
							api: l,
							topContent: p
						} = a.subreddits;
					if (l.topContent.pending[d] || p[d]) return;
					t(u({
						subredditName: d
					})), t(Object(i.x)());
					const h = await ((e, t) => Object(o.a)(e, {
						...r,
						variables: t
					}))(n.gqlContext(), {
						subredditName: d
					});
					if (h.ok) {
						const e = h.body.data.subreddit;
						if (e) {
							const s = Object(c.c)(e);
							s && t(b({
								...s,
								subredditName: d
							}))
						}
					} else t(m({
						subredditName: d,
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
				return c
			})), s.d(t, "g", (function() {
				return d
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
				c = "SUBSCRIPTION__SUBSCIPTION_TOGGLE_FAILED",
				d = "SUBSCRIPTION__ORDER_LOADED",
				a = "SUBSCRIPTION__SUBREDDIT_FAVORITE_TOGGLED",
				l = "SUBSCRIPTION__MULTI_FAVORITE_TOGGLED",
				u = "SUBSCRIPTION__MULTI_FOLLOW_TOGGLED"
		},
		"./src/reddit/actions/subscription/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return L
			})), s.d(t, "d", (function() {
				return B
			})), s.d(t, "c", (function() {
				return U
			})), s.d(t, "a", (function() {
				return F
			})), s.d(t, "b", (function() {
				return H
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/linkMatchers/customLinks.ts"),
				c = s("./src/reddit/actions/gold/powerups.ts"),
				d = s("./src/reddit/actions/login.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/subscription/constants.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				b = s("./src/reddit/constants/posts.ts"),
				m = s("./src/lib/makeApiRequest/index.ts"),
				p = s("./src/lib/omitHeaders/index.ts"),
				h = s("./src/reddit/constants/headers.ts");
			var f = s("./src/graphql/operations/SubscribedSubreddits.json"),
				O = s("./src/lib/makeGqlRequest/index.ts"),
				_ = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			var S = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				I = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				E = s("./src/reddit/models/GqlTopLevelField.ts"),
				x = s("./src/reddit/models/User/index.ts");

			function j(e) {
				const t = [],
					s = [],
					n = {},
					i = {},
					{
						followedRedditorsInfo: r
					} = e.identity;
				for (const c of r.edges) {
					if (c.node.__typename !== x.c.AvailableRedditor) continue;
					const e = Object(S.a)(c.node.profile);
					n[e.id] = e;
					const {
						isFavorite: s
					} = c.node.profile;
					s && t.push(e.id)
				}
				const {
					subscribedSubreddits: o
				} = e.identity;
				for (const c of o.edges) {
					if (c.node.__typename !== E.a.Subreddit) continue;
					const e = Object(I.a)(c.node);
					i[e.id] = e;
					const {
						isFavorite: t
					} = c.node;
					t && s.push(e.id)
				}
				return {
					favoriteProfileIds: t,
					favoriteSubredditIds: s,
					profiles: n,
					subreddits: i
				}
			}
			var C = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/reddit/selectors/profile.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/selectors/subscriptions.ts"),
				T = s("./src/reddit/selectors/user.ts");
			const N = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				k = Object(r.a)(l.c),
				P = Object(r.a)(l.b),
				D = Object(r.a)(l.a),
				w = Object(r.a)(l.h),
				L = (Object(r.a)(l.i), Object(r.a)(l.g), () => async (e, t, {
					gqlContext: s
				}) => {
					const n = t();
					if (!n.user.account || n.subscriptions.api.fetched) return;
					e(P());
					const i = await (e => Object(O.a)(e, f))(s());
					if (i.ok) {
						const t = j(i.body.data);
						e(k(t))
					} else e(D({
						error: i.error
					}))
				}),
				M = (e, t) => t.type === b.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				B = (e, t, s) => async (r, l, {
					apiContext: f
				}) => {
					let O = e.map(e => e.type === b.a.SUBREDDIT ? {
						id: Object(v.F)(l(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(y.m)(l(), e.name),
						name: `${i.cc}${e.name}`,
						type: e.type
					});
					if (!Object(T.K)(l())) return r(Object(a.k)({
						actionSource: a.a.Subscribe
					})), void r(Object(d.j)());
					const S = Object(T.j)(l());
					if (S) {
						const t = O.length,
							s = e.length;
						if (O = O.filter(e => !M(S, e)), (e = e.filter(e => !M(S, e))).length !== s || O.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							r(Object(u.f)(Object(u.e)(e, C.b.Error)))
						}
						if (!e.length && !O.length) return
					}
					if (r(w({
							identifiers: O,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(g.b)(l()),
							userIsSubscriber: t,
							widgetId: s
						})), (await ((e, {
							subredditIds: t,
							subredditNames: s,
							subscribe: n
						}) => Object(m.a)(Object(p.a)(e, [h.a]), {
							method: i.gb.POST,
							endpoint: Object(_.a)(`${e.apiUrl}/api/subscribe`),
							data: {
								action: n ? "sub" : "unsub",
								sr: t && t.join(",") || void 0,
								sr_name: s && s.join(",") || void 0,
								api_type: "json"
							}
						}))(f(), {
							subredditNames: O.map(({
								name: e
							}) => e),
							subscribe: t
						})).ok) {
						O.filter(e => e.type === b.a.SUBREDDIT).forEach(({
							id: e
						}) => r(Object(c.i)(e, {
							forceLoad: !0,
							fullData: !1
						})));
						const s = 1 === e.length ? `${"subreddit"===e[0].type?o.d.subreddit:o.d.profile}${e[0].name}` : `${n.fbt.plural("community",e.length,{many:"communities",name:"communities",showCount:"yes"})}`;
						r(Object(u.f)({
							text: 1 === e.length && "profile" === e[0].type ? n.fbt._("Sucсessfully {verb} {communityname}", [n.fbt._param("verb", t ? "followed" : "unfollowed"), n.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							}) : n.fbt._("Sucсessfully {verb} {communityname}", [n.fbt._param("verb", t ? "joined" : "left"), n.fbt._param("communityname", s)], {
								hk: "1hY5KX"
							})
						}))
					} else {
						r(w({
							identifiers: O,
							nameIdentifiers: e,
							profileModels: l().profiles.models,
							subredditModels: l().subreddits.models,
							subscriptionsCount: Object(g.b)(l()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const i = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						r(Object(u.f)(Object(u.e)(i, C.b.Error)))
					}
				}, R = Object(r.a)(l.f), U = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s(),
						o = Object(v.M)(r, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const c = e.type === b.a.SUBREDDIT ? o.name : `u_${o.name}`,
						d = r.subscriptions.favoriteSubredditOrder || [],
						a = r.subscriptions.favoriteProfileOrder || [],
						l = d.indexOf(e.id),
						f = a.indexOf(e.id),
						O = -1 === l && -1 === f,
						_ = r.subreddits.models,
						S = r.profiles.models;
					t(R({
						makeFavorite: O,
						identifier: e,
						subredditModels: _,
						profileModels: S
					}));
					const I = {
							type: e.type,
							name: o.name
						},
						E = () => Object(v.hb)(s(), {
							identifier: I
						});
					(E() || (await t(B([I], !0)), E())) && ((await ((e, t, s) => Object(m.a)(Object(p.a)(e, [h.a]), {
						method: i.gb.POST,
						endpoint: `${e.apiUrl}/api/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							sr_name: t,
							api_type: "json"
						}
					}))(n(), c, O)).ok || (t(R({
						makeFavorite: !O,
						identifier: e,
						subredditModels: _,
						profileModels: S
					})), t(Object(u.f)({
						text: N(),
						kind: C.b.Error
					}))))
				}, A = Object(r.a)(l.d), F = e => async (t, s, {
					apiContext: n
				}) => {
					const r = s().multireddits.models,
						o = () => {
							t(Object(u.f)({
								text: N(),
								kind: C.b.Error
							}))
						},
						c = r[e];
					if (!c) return void o();
					const d = !c.isFavorited;
					t(A({
						makeFavorite: d,
						multiredditPath: e,
						multiredditsModelsState: r
					})), (await ((e, t, s) => Object(m.a)(Object(p.a)(e, [h.a]), {
						method: i.gb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(n(), e, d)).ok || (t(A({
						makeFavorite: !d,
						multiredditPath: e,
						multiredditsModelsState: r
					})), o())
				}, q = Object(r.a)(l.e), H = e => async (t, s, {
					apiContext: r
				}) => {
					const o = s(),
						c = o.multireddits.models;
					if (!Object(T.K)(o)) return;
					const d = (e = !0) => {
							t(Object(u.f)({
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
						a = c[e];
					if (!a) return void d();
					const l = !a.isFollowed;
					t(q({
						follow: l,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, s) => Object(m.a)(Object(p.a)(e, [h.a]), {
						method: i.gb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(r(), e, l)).ok || (t(q({
						follow: !l,
						multiredditPath: e,
						multiredditsModelsState: c
					})), d(l))
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
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asTooltip.tsx"),
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
						onClick: c,
						...d
					} = e;
					return r.a.createElement("div", f({
						onClick: c,
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
					}, d), t)
				}),
				I = Object(c.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				E = Object(d.a)(S, [n.a.Click, n.a.Keydown]),
				x = Object(o.b)(I);
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
					return r.a.createElement(E, f({}, this.props, {
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
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
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
				I = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				E = s.n(I);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(c.c)({
				subreddit: S.U,
				subredditAboutInfo: S.x
			}), C = Object(r.b)(j);
			class y extends i.a.Component {
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
						e && t && !this.hasFiredViewEvent && (r(Object(O.r)(s, n, i)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: i
						} = this.props;
						s(t ? Object(_.c)(n) : Object(O.n)(e, n, i))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: i
						} = this.props;
						return e ? s ? Object(_.e)(n) : Object(O.q)(t, n, i) : s ? Object(_.d)(n) : Object(O.p)(t, n, i)
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
					const c = r.publicDescription || "",
						l = n.subscribers,
						p = Object(a.b)(l),
						O = Object(a.b)(r.accountsActive);
					return i.a.createElement("div", {
						className: Object(d.a)(E.a.subredditContainer, {
							[E.a.hideBottomBorder]: e
						})
					}, i.a.createElement("div", {
						className: E.a.subredditContent
					}, i.a.createElement("div", null, i.a.createElement(o.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, i.a.createElement(u.b, {
						subredditOrProfile: n,
						className: E.a.iconContainer
					}))), i.a.createElement("div", {
						className: E.a.subredditBodyWrapper
					}, i.a.createElement("div", {
						className: E.a.subredditBody,
						"data-click-id": "body"
					}, i.a.createElement(b.a, {
						className: E.a.subredditTitle,
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
						className: E.a.subredditMeta
					}, x._({
						"*": "{number} members",
						_1: "1 member"
					}, [x._plural(l, "number", p)], {
						hk: "4yqFU9"
					})), s && i.a.createElement("div", {
						className: E.a.subredditMeta
					}, i.a.createElement(f.c, null), x._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [x._plural(r.accountsActive, "number", O)], {
						hk: "1oCA5j"
					})), t && c && i.a.createElement(o.a, {
						className: E.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, c))))
				}
			}
			t.a = C(Object(p.c)(y))
		},
		"./src/reddit/components/ImageWithFallback/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/react/index.js");
			const n = e => new Promise((t, s) => {
				const n = new Image;
				n.onload = () => t(n), n.onerror = s, n.src = e
			})
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
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				a = s("./node_modules/uuid/v4.js"),
				l = s.n(a),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/makeListingKey/index.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeActionCreator/index.ts")),
				p = s("./src/reddit/actions/subredditMention/constants.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				f = s("./src/graphql/operations/SubredditsWithAboutInfo.json"),
				O = s("./src/reddit/featureFlags/index.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				I = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/subredditMention.ts");
			const j = Object(m.a)(p.d),
				C = Object(m.a)(p.c),
				y = Object(m.a)(p.b),
				v = Object(m.a)(p.a),
				g = e => async (t, s, {
					gqlContext: n
				}) => {
					const i = s(),
						r = Object(x.c)(i, {
							subredditName: e
						}),
						o = !!Object(E.A)(i, {
							subredditName: e
						}) && !!Object(E.x)(i, {
							subredditName: e
						}) || !!Object(E.eb)(i, {
							subredditName: e
						}),
						c = Object(x.d)(i, {
							subredditName: e
						}),
						d = O.d.subredditMentionD2xExperiment(i);
					if (r || o && !c || !d) return;
					let a = !1;
					t(y({
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
							if (Object(I.i)(i)) {
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
							t(C({
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
			var T = s("./src/reddit/actions/subredditTopContent.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/components/ContentTooltip/index.tsx"),
				P = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				D = s("./src/lib/classNames/index.ts"),
				w = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				B = s("./src/reddit/helpers/overlay/index.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/components/SubredditMention/MiniPost/index.m.less"),
				A = s.n(U);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = Object(d.a)(e => e, R.F, R.d, (e, t, s) => {
				return {
					crosspost: s,
					post: t,
					subredditOrProfile: Object(E.M)(e, {
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
					}, t.title), s && n && n.displayText && o.a.createElement(L.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), o.a.createElement("div", null, o.a.createElement("span", {
						className: A.a.meta
					}, F._({
						"*": "{number of comments} comments",
						_1: "1 comment"
					}, [F._plural(t.numComments, "number of comments", Object(w.b)(t.numComments))], {
						hk: "Wq9Sy"
					})))), o.a.createElement("div", {
						className: A.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(M.a, {
						post: t
					})))
				}
			}
			var K = Object(c.b)(q, (e, t) => ({
					openLightbox: t => e(Object(B.a)(t.permalink))
				}))(H),
				G = s("./src/reddit/contexts/PageLayer/index.tsx"),
				W = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				V = s("./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less"),
				z = s.n(V);
			const Q = Object(G.t)(),
				Y = Object(d.c)({
					isFakeSubreddit: G.x
				});
			var J = Q(Object(c.b)(Y)(({
					className: e,
					showSubreddit: t,
					...s
				}) => {
					const n = Object(W.a)(s);
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), re = e => `subreddit-mention-${e}`, oe = Object(d.c)({
				haveError: x.d,
				hideNSFWPref: te.C,
				isEmployee: te.H,
				isPending: x.c,
				postIds: x.f,
				subreddit: E.a,
				subredditAboutInfo: E.x
			}), ce = Object(c.b)(oe, (e, {
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
			})), de = 600;
			class ae extends o.a.Component {
				constructor(e) {
					super(e), this.isRequestedOnceAlready = !1, this.onShowTooltip = () => {
						const e = re(this.state.uniqueId);
						this.props.showTooltip(e), this.props.sendEvent(Object($.f)(this.props.subredditName)), this.props.postIds.map(e => this.props.sendEvent(Object($.g)(this.props.subredditName, e)))
					}, this.onClickPost = e => {
						this.props.sendEvent(Object($.b)(this.props.subredditName, e))
					}, this.handleScroll = i()(() => this.loadSubredditData && this.loadSubredditData(), u.H), this.loadSubredditData = () => {
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
							(n < s ? s - n : n - t) < de && (this.isRequestedOnceAlready = !0, this.props.subredditDataRequested(this.props.subredditName))
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
						subredditAboutInfo: c,
						subredditName: d
					} = this.props;
					if (!r || !c || Object(I.j)(r)) return this.renderDefault();
					const {
						uniqueId: a
					} = this.state, l = Object(b.a)(this.props.subredditName, u.T.TOP), m = r.isNSFW && e || r.type === I.f.EmployeesOnly && !t || r.type === I.f.Private && !c.userIsSubscriber, p = m || r.isQuarantined || r.isNSFW;
					return o.a.createElement("span", {
						className: ne.a.subredditMentionContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i,
						id: re(a),
						onClick: this.handleOnClick,
						ref: this.subredditMentionElement
					}, o.a.createElement(X.a, {
						href: `/r/${d}/`
					}, o.a.createElement("span", {
						className: ne.a.subredditIconContainer
					}, o.a.createElement(X.b, {
						subredditOrProfile: m ? void 0 : r
					})), `r/${d}`), s && !p && o.a.createElement(k.a, {
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
						subredditName: d,
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
					})), n.length > 0 ? n.map(e => o.a.createElement(K, {
						containerOnClick: this.onClickPost,
						key: e,
						postId: e,
						thumbnailOnClick: this.onClickPost
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(J, {
						isLoading: !0
					}), o.a.createElement(J, {
						isLoading: !0
					}), o.a.createElement(J, {
						isLoading: !0
					})))))
				}
			}
			t.default = ce(Object(Z.c)(ae))
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
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
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
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: o,
							small: l = !1,
							size: u,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: p,
							getEventFactory: h,
							onSubscriptionsRequested: f,
							...O
						} = this.props, _ = this.state.isHovered, S = Object(a.a)({
							type: t.type,
							key: _ ? "unsubscribe" : "subscribed"
						});
						return i.a.createElement(c.q, b({
							className: e,
							priority: O.shouldReverseColor ? c.b.Primary : c.b.Secondary,
							Icon: l || !l && !_ ? Object(d.b)("checkmark") : void 0,
							text: !l && S,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: u || (l ? c.c.XS : c.c.S)
						}, O))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: o,
							small: l = !1,
							size: u,
							userIsSubscriber: m,
							doNotHideOtherSubscribeButtons: p,
							getEventFactory: h,
							onSubscriptionsRequested: f,
							...O
						} = this.props, _ = Object(a.a)({
							type: t.type,
							key: "subscribe"
						});
						return i.a.createElement(c.q, b({
							className: e,
							priority: O.shouldReverseColor ? c.b.Secondary : c.b.Primary,
							Icon: Object(d.b)("add"),
							size: u || (l ? c.c.XS : c.c.S),
							text: !l && _,
							onClick: this.onClick
						}, O, {
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
				return R
			}));
			var n = s("./src/lib/isUrl/index.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
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
					video: u.a.video_post
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
				I = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/Theme/index.ts"),
				j = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/components/Thumbnail/index.m.less"),
				y = s.n(C);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const g = e => e.placeholderImage || Object(j.a)(e).placeholderImage,
				T = e => e.placeholderImage ? "cover" : Object(j.a)(e).placeholderImagePosition,
				N = d.a.span("LinkText", y.a),
				k = ({
					className: e,
					onClick: t,
					children: s
				}) => r.a.createElement("div", {
					onClick: t,
					className: Object(o.a)(y.a.linkIcon, e)
				}, s),
				P = e => r.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(y.a.hiddenImage, e.className)
				}),
				D = e => {
					const t = r.a.createRef(),
						{
							src: s,
							errorSrc: n
						} = e;
					return s && n && Object(l.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${n})`)
					}), r.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(o.a)(y.a.thumbnail, y.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(j.a)(e).button : Object(j.a)(e).line
						}
					}, e.isOutbound && r.a.createElement(k, {
						className: e.linkIconClassName
					}, r.a.createElement(I.a, {
						className: Object(o.a)(y.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && r.a.createElement(N, {
						className: e.linkTextClassName
					}, e.text)), r.a.createElement(P, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				w = e => e.isOutbound ? Object(j.a)(e).button : e.placeholderImage ? "transparent" : Object(j.a)(e).line,
				L = e => {
					const t = g(e),
						s = t && {
							background: Object(x.g)(Object(j.a)(e).placeholder, t, T(e))
						};
					return r.a.createElement("div", {
						className: Object(o.a)(y.a.thumbnail, y.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: w(e)
						}
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(_, {
						className: Object(o.a)(e.contentTypeClassName, y.a.contentType, {
							[y.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && r.a.createElement(k, {
						className: e.linkIconClassName
					}, r.a.createElement(I.a, {
						className: Object(o.a)(y.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && r.a.createElement(N, {
						className: e.linkTextClassName
					}, e.text)))
				},
				M = e => r.a.createElement(D, v({}, e, {
					className: Object(o.a)(y.a.blurredThumbnail, e.className)
				})),
				B = Object(c.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: i,
						crosspost: c,
						forceShowNSFW: d,
						isMeta: a,
						linkIconClassName: l,
						linkTextClassName: u,
						outboundLinkIconClassName: b,
						post: m,
						redditStyle: p,
						removeLink: h,
						showContentType: f,
						templatePlaceholderImage: O,
						text: _,
						theme: I,
						usePreview: x
					} = e, j = !I.subredditContext.shouldShowNSFWContent && (m.isNSFW || !(!c || !c.isNSFW)) && !d, C = g({
						placeholderImage: O,
						redditStyle: p,
						theme: I
					}), v = R(e), T = A(m, t, C, j, _, I, v, a, f, h, p, l, u, b, i), N = Object(E.D)(m);
					return Object(n.a)(N) && !h && N.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(o.a)(y.a.container, x ? y.a.usePreview : "", s)
					}, r.a.createElement(S.b, {
						href: Object(E.D)(m),
						isSponsored: m.isSponsored,
						postId: m.id,
						source: m.source
					}, T)) : r.a.createElement("div", {
						className: Object(o.a)(y.a.container, x ? y.a.usePreview : "", s)
					}, T)
				}),
				R = ({
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
					return n && i ? i.url : t.isSponsored && i && "default" === o.url ? i.url : U(r) ? r.scrubberThumbSource : o.url
				},
				U = e => !!e && e.type === E.o.LIVEVIDEO,
				A = (e, t, s, i, c, d, l, u, b, m, p, h, f, O, _) => {
					const S = e.source && !e.isSponsored || !1;
					if (Object(n.a)(l)) {
						const s = U(e.media),
							n = s ? {
								errorSrc: a.U
							} : {},
							u = Object(o.a)(t, {
								[y.a.verticallyCenterThumbnail]: s
							});
						return i ? r.a.createElement(M, v({
							"data-click-id": "image",
							src: l
						}, n, {
							className: u,
							isOutbound: S && !m,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: O,
							redditStyle: p,
							text: c,
							theme: d
						})) : r.a.createElement(D, v({
							alt: e.title,
							className: u,
							src: l
						}, n, {
							isOutbound: S && !m,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: O,
							redditStyle: p,
							text: c,
							theme: d
						}))
					}
					return r.a.createElement(L, {
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
						text: c,
						theme: d,
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
				userIsSubscriber: o.hb
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
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				a = s.n(d);
			const l = o.a.span("metaText", a.a),
				u = e => r.a.createElement(l, e, " · "),
				b = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: s,
					...i
				}) => {
					const o = Object(c.b)(t),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "2L3T21"
						}),
						a = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? d : n.fbt._({
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
				}, [n.fbt._plural(e, "number", Object(c.b)(e))], {
					hk: "3bVMk9"
				}))
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
				return c
			}));
			var n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(i);
			const o = ({
					isLoading: e
				}) => Object(n.a)(r.a.loadingBackground, {
					[r.a["m-loading"]]: e
				}),
				c = e => Object(n.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return _
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "E", (function() {
				return C
			})), s.d(t, "F", (function() {
				return y
			})), s.d(t, "M", (function() {
				return g
			})), s.d(t, "B", (function() {
				return T
			})), s.d(t, "C", (function() {
				return N
			})), s.d(t, "D", (function() {
				return k
			})), s.d(t, "i", (function() {
				return P
			})), s.d(t, "w", (function() {
				return D
			})), s.d(t, "x", (function() {
				return w
			})), s.d(t, "L", (function() {
				return L
			})), s.d(t, "K", (function() {
				return M
			})), s.d(t, "I", (function() {
				return B
			})), s.d(t, "v", (function() {
				return R
			})), s.d(t, "y", (function() {
				return U
			})), s.d(t, "z", (function() {
				return A
			})), s.d(t, "A", (function() {
				return F
			})), s.d(t, "N", (function() {
				return q
			})), s.d(t, "J", (function() {
				return H
			})), s.d(t, "t", (function() {
				return K
			})), s.d(t, "H", (function() {
				return G
			})), s.d(t, "d", (function() {
				return W
			})), s.d(t, "c", (function() {
				return V
			})), s.d(t, "b", (function() {
				return z
			})), s.d(t, "f", (function() {
				return Q
			})), s.d(t, "e", (function() {
				return Y
			})), s.d(t, "s", (function() {
				return Z
			})), s.d(t, "m", (function() {
				return $
			})), s.d(t, "r", (function() {
				return ee
			})), s.d(t, "k", (function() {
				return te
			})), s.d(t, "l", (function() {
				return se
			})), s.d(t, "n", (function() {
				return ne
			})), s.d(t, "p", (function() {
				return ie
			})), s.d(t, "q", (function() {
				return re
			})), s.d(t, "o", (function() {
				return oe
			})), s.d(t, "j", (function() {
				return ce
			})), s.d(t, "u", (function() {
				return de
			})), s.d(t, "G", (function() {
				return ae
			}));
			var n, i = s("./src/lib/stringInterpolate/index.ts"),
				r = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = s("./src/reddit/helpers/trackers/searchResults.ts"),
				a = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/models/Widgets/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/reddit/selectors/widgets.ts"),
				p = s("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const h = "discovery_unit",
				f = (e, t, s) => ({
					...b.defaults(e),
					source: h,
					screen: b.screen(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && s ? Object(i.a)(t.title, {
							subredditName: s.name
						}) : t.title,
						name: t.unitName
					}
				}),
				O = (e, t, s) => ({
					...f(e, t, s),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				_ = (e, t) => {
					Object(p.a)(S(t)(e))
				},
				S = (e, t) => s => O(s, e, t),
				I = (e, t, s, n) => "unitName" in t ? f(e, t, n) : ((e, t, s) => ({
					...b.defaults(e),
					source: "search",
					screen: b.screen(e),
					search: s ? {
						...b.search(e, s),
						structureType: b.StructureType.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, s),
				E = (e, t, s, i, r) => ({
					...I(e, t, i, r),
					action: "view",
					noun: n.ITEM_POST,
					post: b.post(e, s)
				}),
				x = ({
					post: e,
					rawQuery: t,
					searchQuery: s
				}) => ({
					displayQuery: decodeURIComponent(s),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? b.StructureType.PromotedTrend : b.StructureType.Trending
				});
			var j;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(j || (j = {}));
			const C = (e, t, s) => {
					Object(p.a)(v(e, t, s, o.c.CLICK))
				},
				y = (e, t, s) => {
					Object(p.a)(v(e, t, s, o.c.VIEW))
				},
				v = (e, t, s, n) => {
					const i = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return {
						...b.defaults(e),
						source: "search",
						action: n,
						noun: "trending",
						metaSearch: x(t),
						discoveryUnit: s === j.POPULAR_CAROUSEL ? {
							name: a.l,
							id: a.l,
							title: a.l,
							type: "query"
						} : void 0,
						actionInfo: b.actionInfo(e, {
							paneName: s,
							position: i
						}),
						search: {
							originPageType: e.platform.currentPage ? b.getPageTypeFromCurrentPage(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: b.StructureType.Trending,
							queryId: n === o.c.CLICK ? Object(c.c)(c.a.SearchResults) : void 0
						}
					}
				},
				g = (e, t, s, n, i, r, c) => {
					Object(p.a)({
						...b.defaults(e),
						...Object(d.e)(e, s, n, i, r, t),
						action: o.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				T = (e, t, s, n) => {
					Object(p.a)(E(e, t, s, n))
				},
				N = (e, t, s, n) => i => E(i, e, t, s, n),
				k = (e, t, s, i) => {
					const r = I(e, t, i);
					Object(p.a)({
						...r,
						...Object(m.b)(e, s),
						action: "view",
						noun: n.ITEM_SUBREDDIT
					})
				},
				P = (e, t) => {
					Object(p.a)({
						...f(e, t),
						source: h,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				D = (e, t, s, n) => {
					Object(p.a)(w(t, s, n)(e))
				},
				w = (e, t, s, i) => r => {
					return {
						...I(r, e, s, i),
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_POST,
						post: b.post(r, t)
					}
				},
				L = (e, t, s, n) => i => r => Object(d.e)(r, i, e, t, s, n),
				M = (e, t, s, n) => i => r => Object(d.d)(r, e, t, void 0, s, i, n),
				B = (e, t, s, n) => i => r => ({
					...Object(d.e)(r, i, e, t, s, n),
					noun: "ad"
				}),
				R = (e, t) => s => i => ({
					...e ? f(i, e, t) : {},
					source: h,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: b.post(i, s)
				}),
				U = (e, t, s, n) => {
					Object(p.a)(A(t, s, n)(e))
				},
				A = (e, t, s, n) => i => {
					const r = Object(u.c)(i, {
							postId: t
						}),
						c = r ? Object(m.b)(i, r) : void 0;
					return {
						...I(i, e, s, n),
						...c,
						source: h,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: b.post(i, t)
					}
				},
				F = (e, t, s) => n => i => {
					const r = Object(u.c)(i, {
							postId: t
						}),
						c = r ? Object(m.b)(i, r) : void 0;
					return {
						...I(i, e, void 0, s),
						...c,
						source: h,
						action: o.c.CLICK,
						noun: n ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: b.post(i, t)
					}
				},
				q = (e, t, s) => {
					const n = I(e, t);
					Object(p.a)({
						...n,
						...Object(m.b)(e, s),
						source: "search",
						action: o.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					})
				},
				H = (e, t, s, n, i, r) => {
					Object(p.a)({
						...b.defaults(e),
						...Object(d.d)(e, t, s, n, i, void 0, r)
					})
				},
				K = (e, t, s) => {
					const n = I(e, t);
					Object(p.a)({
						...n,
						...Object(m.b)(e, s),
						source: h,
						action: o.c.CLICK,
						noun: "footer_subreddit"
					})
				},
				G = (e, t) => s => {
					const n = Object(l.j)(t);
					return {
						...f(s, e, t),
						...Object(m.b)(s, n),
						source: h,
						action: o.c.CLICK,
						noun: "title_subreddit"
					}
				},
				W = (e, t) => s => ({
					...f(s, e, t),
					action: "status",
					actionInfo: b.actionInfo(s, {
						success: !0
					}),
					noun: "loading"
				}),
				V = (e, t, s) => n => ({
					...f(n, e, s),
					action: "status",
					actionInfo: b.actionInfo(n, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				z = (e, t) => s => ({
					...f(s, e, t),
					action: "click",
					noun: "close"
				}),
				Q = (e, t, s) => n => ({
					...I(n, e, t, s),
					action: "click",
					noun: "scroll"
				}),
				Y = (e, t) => s => ({
					...f(s, e, t),
					action: "click",
					noun: "overflow_menu"
				}),
				J = () => ({
					id: "xd_focus_verticals",
					unitType: a.f.Listing,
					experiment: "",
					title: r.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: a.d.Large,
					surface: a.e.Frontpage,
					url: "gql.reddit.com"
				}),
				X = (e, t, s) => b.actionInfo(e, {
					position: s
				}),
				Z = (e, t, s) => {
					const n = J();
					return e => ({
						...O(e, n),
						actionInfo: X(e, 0, s),
						subreddit: b.subredditById(e, t)
					})
				},
				$ = (e, t, s) => {
					const n = J();
					return e => ({
						...E(e, n, t),
						actionInfo: X(e, 0, s)
					})
				},
				ee = (e, t, s) => {
					const i = J();
					return e => ({
						...f(e, i),
						actionInfo: X(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						source: h,
						action: o.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				te = (e, t, s) => {
					const i = J();
					return e => ({
						...f(e, i),
						actionInfo: X(e, 0, s),
						post: b.post(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_POST
					})
				},
				se = (e, t, s, i) => {
					const r = J();
					return e => ({
						...f(e, r),
						actionInfo: X(e, 0, i),
						subreddit: b.subredditById(e, s) || null,
						post: b.post(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_POST_SUBREDDIT
					})
				},
				ne = (e, t, s) => {
					const i = J();
					return e => ({
						...f(e, i),
						actionInfo: X(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				ie = (e, t, s, i) => {
					const r = J();
					return e => ({
						...f(e, r),
						actionInfo: X(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						post: i ? b.post(e, i) : null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				re = (e, t, s, i) => {
					const r = J();
					return e => ({
						...f(e, r),
						actionInfo: X(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						post: i ? b.post(e, i) : null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				oe = (e, t, s) => {
					const i = J();
					return e => ({
						...f(e, i),
						actionInfo: X(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_HIDE
					})
				},
				ce = (e, t, s) => {
					const i = J();
					return e => ({
						...f(e, i),
						actionInfo: X(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.HEADER_SUBREDDIT
					})
				},
				de = (e, t) => s => ({
					...f(s, e),
					...t && Object(m.b)(s, t),
					source: h,
					action: o.c.CLICK,
					noun: "item"
				}),
				ae = e => t => ({
					...f(t, e),
					source: h,
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.9193a90a5d73facf1ab7.js.map