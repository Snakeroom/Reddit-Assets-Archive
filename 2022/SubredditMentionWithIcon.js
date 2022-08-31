// https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.4030d86073e8dc759b5a.js
// Retrieved at 8/31/2022, 11:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditMentionWithIcon"], {
		"./src/higherOrderComponents/withAdClickLocation/Locations.ts": function(e, t, s) {
			"use strict";
			var n, i;
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return i
				})),
				function(e) {
					e.UNKNOWN = "unknown", e.TITLE = "title", e.TOP_BAR = "top_bar", e.MEDIA = "media", e.BACKGROUND = "background", e.CTA_URL = "cta_url", e.CTA_BUTTON = "cta_button", e.CTA_WHITESPACE = "cta_whitespace", e.CTA_CAPTION = "cta_caption"
				}(n || (n = {})),
				function(e) {
					e.COMMENTS = "comments", e.FLATLIST_SHARE = "fl_share", e.FLATLIST_AWARD = "fl_award", e.FLATLIST_SAVE = "fl_save", e.FLATLIST_GENERAL = "fl_unknown", e.OVERFLOW_MENU = "overflow_menu", e.UPVOTE = "upvote", e.DOWNVOTE = "downvote"
				}(i || (i = {}))
		},
		"./src/lib/stringInterpolate/index.ts": function(e, t, s) {
			"use strict";

			function n(e, t) {
				return e && t ? e.replace(/%\{(\w+)\}/g, (e, s) => {
					const n = t[s];
					return null == n ? s : String(n)
				}) : e
			}
			s.d(t, "a", (function() {
				return n
			}))
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
					})), t(Object(i.A)());
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
				return A
			})), s.d(t, "b", (function() {
				return B
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/linkMatchers/customLinks.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
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
				g = Object(o.a)(a.c),
				T = Object(o.a)(a.b),
				N = Object(o.a)(a.a),
				k = Object(o.a)(a.h),
				P = (Object(o.a)(a.i), Object(o.a)(a.g), () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const i = t();
					if (!i.user.account || i.subscriptions.api.fetched) return;
					e(T());
					const r = await Object(h.a)(n());
					if (r.ok) {
						const t = E(r.body.data);
						e(g(t))
					} else e(N({
						error: r.error
					}))
				}),
				w = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				L = (e, t, s) => async (o, a, b) => {
					let {
						apiContext: m
					} = b, p = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(j.G)(a(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(x.n)(a(), e.name),
						name: `${i.nc}${e.name}`,
						type: e.type
					});
					if (!Object(C.Q)(a())) return o(Object(c.k)({
						actionSource: c.a.Subscribe
					})), void o(Object(d.openRegisterModal)());
					const f = Object(C.k)(a());
					if (f) {
						const t = p.length,
							s = e.length;
						if (p = p.filter(e => !w(f, e)), (e = e.filter(e => !w(f, e))).length !== s || p.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, I.b.Error)))
						}
						if (!e.length && !p.length) return
					}
					o(k({
						identifiers: p,
						nameIdentifiers: e,
						profileModels: a().profiles.models,
						subredditModels: a().subreddits.models,
						subscriptionsCount: Object(y.b)(a()),
						userIsSubscriber: t,
						widgetId: s
					}));
					const O = await Object(h.c)(m(), {
						subredditNames: p.map(e => {
							let {
								name: t
							} = e;
							return t
						}),
						subscribe: t
					});
					if (O.ok) {
						const s = 1 === e.length ? `${"subreddit"===e[0].type?r.d.subreddit:r.d.profile}${e[0].name}` : n.fbt._({
								"*": "{communities} communities",
								_1: "1 community"
							}, [n.fbt._plural(e.length, "communities")], {
								hk: "IgDzJ"
							}),
							i = n.fbt._("Successfully followed {communityname}", [n.fbt._param("communityname", s)], {
								hk: "23Snyg"
							}),
							d = n.fbt._("Successfully unfollowed {communityname}", [n.fbt._param("communityname", s)], {
								hk: "jfC0S"
							}),
							c = n.fbt._("Successfully joined {communityname}", [n.fbt._param("communityname", s)], {
								hk: "1W9UY3"
							}),
							a = n.fbt._("Successfully left {communityname}", [n.fbt._param("communityname", s)], {
								hk: "1saMW"
							});
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? i : d : t ? c : a
						}))
					} else {
						o(k({
							identifiers: p,
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
						o(Object(l.f)(Object(l.e)(i, I.b.Error)))
					}
					return O.ok
				}, D = Object(o.a)(a.f), M = e => async (t, s, n) => {
					let {
						apiContext: i
					} = n;
					const r = s(),
						o = Object(j.N)(r, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const d = e.type === u.a.SUBREDDIT ? o.name : `u_${o.name}`,
						c = r.subscriptions.favoriteSubredditOrder || [],
						a = r.subscriptions.favoriteProfileOrder || [],
						b = c.indexOf(e.id),
						m = a.indexOf(e.id),
						p = -1 === b && -1 === m,
						f = r.subreddits.models,
						O = r.profiles.models,
						_ = {
							type: e.type,
							name: o.name
						},
						S = () => Object(j.hb)(s(), {
							identifier: _
						});
					(S() || (await t(L([_], !0)), S())) && (t(D({
						makeFavorite: p,
						identifier: e,
						subredditModels: f,
						profileModels: O
					})), (await Object(h.b)(i(), d, p)).ok || (t(D({
						makeFavorite: !p,
						identifier: e,
						subredditModels: f,
						profileModels: O
					})), t(Object(l.f)({
						text: v(),
						kind: I.b.Error
					}))))
				}, R = Object(o.a)(a.d), A = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const o = s().multireddits.models,
						d = () => {
							t(Object(l.f)({
								text: v(),
								kind: I.b.Error
							}))
						},
						c = o[e];
					if (!c) return void d();
					const a = !c.isFavorited;
					t(R({
						makeFavorite: a,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, s) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: i.mb.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(r(), e, a)).ok || (t(R({
						makeFavorite: !a,
						multiredditPath: e,
						multiredditsModelsState: o
					})), d())
				}, U = Object(o.a)(a.e), B = e => async (t, s, r) => {
					let {
						apiContext: o
					} = r;
					const d = s(),
						c = d.multireddits.models;
					if (!Object(C.Q)(d)) return;
					const a = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(l.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : n.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: I.b.Error
							}))
						},
						u = c[e];
					if (!u) return void a();
					const h = !u.isFollowed;
					t(U({
						follow: h,
						multiredditPath: e,
						multiredditsModelsState: c
					})), (await ((e, t, s) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: i.mb.POST,
						endpoint: `${e.apiUrl}/api/multi/subscribe`,
						data: {
							action: s ? "sub" : "unsub",
							path: t,
							api_type: "json"
						},
						type: "json"
					}))(o(), e, h)).ok || (t(U({
						follow: !h,
						multiredditPath: e,
						multiredditsModelsState: c
					})), a(h))
				}
		},
		"./src/reddit/components/ContentTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				StyledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				styledTooltipContainer: "_2uSuNRa3OeptFDJCKQ3vU6",
				fadeIn: "_2bkYZH_kJx5pIHW0Ts5P6e",
				caretOnBottom: "_1rF-A55THyDL-rQ9ZUDQ4_",
				caretOnTop: "_1MHCyMQAMeqRqf5DPWWeq3",
				hideCaret: "dExJJiXRwxVrKsDJRWSQl",
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
				c = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
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
				S = Object(a.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: i,
						caretColor: o,
						onClick: d,
						hideCaret: a
					} = e;
					return r.a.createElement("div", {
						onClick: d,
						className: Object(c.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === i,
							[h.a.caretOnLeft]: "left" === i,
							[h.a.caretOnRight]: "right" === i,
							[h.a.caretOnBottom]: "bottom" === i,
							[h.a.hideCaret]: a
						}),
						style: {
							...n,
							"--contentTooltip-caretColor": o && o[i] ? o[i] : Object(b.a)(e).body
						}
					}, t)
				}),
				E = Object(d.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(m.b)(s)(e)
					}
				}),
				I = Object(u.a)(S, [n.a.Click, n.a.Keydown]),
				x = Object(o.b)(E);
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = O
						} = this.props;
						l.a.read(() => {
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
				_ = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				I = s.n(E);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = Object(d.c)({
				subreddit: S.V,
				subredditAboutInfo: S.x
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
						e && t && !this.hasFiredViewEvent && (r(Object(O.l)(s, n, i)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: i
						} = this.props;
						s(t ? Object(_.c)(n) : Object(O.h)(e, n, i))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: i
						} = this.props;
						return e ? s ? Object(_.e)(n) : Object(O.k)(t, n, i) : s ? Object(_.d)(n) : Object(O.j)(t, n, i)
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
						className: Object(c.a)(I.a.subredditContainer, {
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
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function a(e, t) {
				const s = Object(r.a)(e, t);
				class n extends i.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(o.e);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return i.a.createElement(s, c({}, this.props, {
							container: this.state.container || this.props.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(d.b)(n)
			}
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
				_ = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/subredditMention.ts");
			const j = Object(m.a)(p.d),
				y = Object(m.a)(p.c),
				C = Object(m.a)(p.b),
				v = Object(m.a)(p.a),
				g = e => async (t, s, n) => {
					let {
						gqlContext: i
					} = n;
					const r = s(),
						o = Object(x.c)(r, {
							subredditName: e
						}),
						d = !!Object(I.A)(r, {
							subredditName: e
						}) && !!Object(I.x)(r, {
							subredditName: e
						}) || !!Object(I.eb)(r, {
							subredditName: e
						}),
						c = Object(x.d)(r, {
							subredditName: e
						}),
						a = O.d.subredditMentionD2xExperiment(r);
					if (o || d && !c || !a) return;
					let l = !1;
					t(C({
						subredditName: e
					}));
					try {
						const s = await ((e, t) => Object(h.a)(e, {
							...f,
							variables: t
						}))(i(), {
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
							})), l = !0
						}
					} catch (u) {
						l = !1
					}
					l || t(v({
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
				w = s("./src/lib/classNames/index.ts"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				D = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				R = s("./src/reddit/helpers/overlay/index.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/components/SubredditMention/MiniPost/index.m.less"),
				B = s.n(U);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), q = Object(c.a)(e => e, A.G, A.d, (e, t, s) => {
				return {
					crosspost: s,
					post: t,
					subredditOrProfile: Object(I.N)(e, {
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
						className: Object(w.a)(B.a.container, e),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: B.a.postDetails
					}, o.a.createElement("p", {
						className: B.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && o.a.createElement(D.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), o.a.createElement("div", null, o.a.createElement("span", {
						className: B.a.meta
					}, F._({
						"*": "{number of comments} comments",
						_1: "1 comment"
					}, [F._plural(t.numComments, "number of comments", Object(L.b)(t.numComments))], {
						hk: "Wq9Sy"
					})))), o.a.createElement("div", {
						className: B.a.thumbnailContainer,
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
				V = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				K = s("./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less"),
				J = s.n(K);
			const Q = Object(W.u)(),
				z = Object(c.c)({
					isFakeSubreddit: W.z
				});
			var Y = Q(Object(d.b)(z)(e => {
					let {
						className: t,
						showSubreddit: s,
						...n
					} = e;
					const i = Object(V.a)(n);
					return o.a.createElement("div", {
						className: Object(w.a)(B.a.container, t)
					}, o.a.createElement("div", {
						className: J.a.mainBody
					}, o.a.createElement("div", {
						className: J.a.content
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: Object(w.a)(J.a.title, i)
					}), s && o.a.createElement("div", {
						className: Object(w.a)(J.a.meta, i)
					})), o.a.createElement("div", {
						className: J.a.flatlist
					}, o.a.createElement("div", {
						className: Object(w.a)(J.a.flatlistExpando, i)
					}), o.a.createElement("div", {
						className: J.a.flatlistSeparator
					}), o.a.createElement("div", {
						className: Object(w.a)(J.a.flatlistItemOne, i)
					}), o.a.createElement("div", {
						className: Object(w.a)(J.a.flatlistItemTwo, i)
					}))), o.a.createElement("div", {
						className: J.a.thumbnailContainer
					}, o.a.createElement("div", {
						className: Object(w.a)(J.a.thumbnail, i)
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
				haveError: x.d,
				hideNSFWPref: te.F,
				isEmployee: te.N,
				isPending: x.c,
				postIds: x.f,
				subreddit: I.a,
				subredditAboutInfo: I.x
			}), de = Object(d.b)(oe, (e, t) => {
				let {
					subredditName: s,
					isHoverable: n
				} = t;
				return {
					subredditDataRequested: t => e(g(t)),
					showTooltip: t => {
						e(Object(N.f)({
							tooltipId: t
						})), e(Object(T.d)(s))
					},
					onHideTooltip: () => e(Object(N.i)())
				}
			}), ce = 600;
			class ae extends o.a.Component {
				constructor(e) {
					super(e), this.isRequestedOnceAlready = !1, this.onShowTooltip = () => {
						const e = re(this.state.uniqueId);
						this.props.showTooltip(e), this.props.sendEvent(Object($.f)(this.props.subredditName)), this.props.postIds.map(e => this.props.sendEvent(Object($.g)(this.props.subredditName, e)))
					}, this.onClickPost = e => {
						this.props.sendEvent(Object($.b)(this.props.subredditName, e))
					}, this.handleScroll = i()(() => this.loadSubredditData && this.loadSubredditData(), u.L), this.loadSubredditData = () => {
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
					} = this.state, l = Object(b.a)(this.props.subredditName, u.Z.TOP), m = r.isNSFW && e || r.type === E.f.EmployeesOnly && !t || r.type === E.f.Private && !d.userIsSubscriber, p = m || r.isQuarantined || r.isNSFW;
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
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				a = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = s.n(a);

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
							size: a,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: m,
							onSubscriptionsRequested: p,
							...h
						} = this.props, f = this.state.isHovered, O = Object(c.a)({
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
							size: a,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: m,
							onSubscriptionsRequested: p,
							...h
						} = this.props, f = Object(c.a)({
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
			const i = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
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
				o = e => {
					let {
						type: t,
						key: s
					} = e;
					return r[i({
						type: t
					})][s]()
				}
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
				return w
			}));
			var n = s("./src/lib/isUrl/index.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = s("./src/reddit/controls/ContentType/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				p = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Theme/index.ts"),
				f = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = s("./src/telemetry/models/Outbound.ts"),
				_ = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				S = s("./src/reddit/components/Thumbnail/index.m.less"),
				E = s.n(S);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = e => e.placeholderImage || Object(f.a)(e).placeholderImage,
				j = e => e.placeholderImage ? "cover" : Object(f.a)(e).placeholderImagePosition,
				y = c.a.span("LinkText", E.a),
				C = e => {
					let {
						className: t,
						onClick: s,
						children: n
					} = e;
					return r.a.createElement("div", {
						onClick: s,
						className: Object(o.a)(E.a.linkIcon, t)
					}, n)
				},
				v = e => r.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(E.a.hiddenImage, e.className)
				}),
				g = e => {
					const t = r.a.createRef(),
						{
							src: s,
							errorSrc: n
						} = e;
					return s && n && Object(l.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${n})`)
					}), r.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(o.a)(E.a.thumbnail, E.a.imageThumbnail, e.className),
						"data-click-id": "image",
						"data-adclicklocation": _.a.MEDIA,
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(f.a)(e).button : Object(f.a)(e).line
						}
					}, e.isOutbound && r.a.createElement(C, {
						className: e.linkIconClassName
					}, r.a.createElement(m.a, {
						className: Object(o.a)(E.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && r.a.createElement(y, {
						className: e.linkTextClassName
					}, e.text)), r.a.createElement(v, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				T = e => e.isOutbound ? Object(f.a)(e).button : e.placeholderImage ? "transparent" : Object(f.a)(e).line,
				N = e => {
					const t = x(e),
						s = t && {
							background: Object(h.g)(Object(f.a)(e).placeholder, t, j(e))
						};
					return r.a.createElement("div", {
						className: Object(o.a)(E.a.thumbnail, E.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: T(e)
						}
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(u.a, {
						className: Object(o.a)(e.contentTypeClassName, E.a.contentType, {
							[E.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && r.a.createElement(C, {
						className: e.linkIconClassName
					}, r.a.createElement(m.a, {
						className: Object(o.a)(E.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && r.a.createElement(y, {
						className: e.linkTextClassName
					}, e.text)))
				},
				k = e => r.a.createElement(g, I({}, e, {
					className: Object(o.a)(E.a.blurredThumbnail, e.className)
				})),
				P = Object(d.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: i,
						crosspost: d,
						forceShowNSFW: c,
						isCommentsPage: a,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: m,
						outboundLinkIconClassName: h,
						post: f,
						redditStyle: _,
						removeLink: S,
						showContentType: I,
						templatePlaceholderImage: j,
						text: y,
						theme: C,
						usePreview: v
					} = e, g = !C.subredditContext.shouldShowNSFWContent && (f.isNSFW || !(!d || !d.isNSFW)) && !c, T = x({
						placeholderImage: j,
						redditStyle: _,
						theme: C
					}), N = w(e), k = a ? O.SourceElement.PostImage : O.SourceElement.ListingPostImage, P = D(f, t, T, g, y, C, N, l, I, S, _, u, m, h, i), L = Object(p.D)(f);
					return Object(n.a)(L) && !S && L.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(o.a)(E.a.container, v ? E.a.usePreview : "", s)
					}, r.a.createElement(b.b, {
						href: Object(p.D)(f),
						isSponsored: f.isSponsored,
						postId: f.id,
						source: f.source,
						sourceElement: k
					}, P)) : r.a.createElement("div", {
						className: Object(o.a)(E.a.container, v ? E.a.usePreview : "", s)
					}, P)
				}),
				w = e => {
					let {
						crosspost: t,
						post: s,
						url: n,
						usePreview: i
					} = e;
					if (n) return n;
					const {
						preview: r,
						media: o,
						thumbnail: d
					} = t || s;
					return i && r ? r.url : s.isSponsored && r && "default" === d.url ? r.url : L(o) ? o.scrubberThumbSource : d.url
				},
				L = e => !!e && e.type === p.o.LIVEVIDEO,
				D = (e, t, s, i, d, c, l, u, b, m, p, h, f, O, _) => {
					const S = (e => e.source && !e.isSponsored || !1)(e);
					if (Object(n.a)(l)) {
						const s = L(e.media),
							n = s ? {
								errorSrc: a.U
							} : {},
							u = Object(o.a)(t, {
								[E.a.verticallyCenterThumbnail]: s
							});
						return i ? r.a.createElement(k, I({
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
							theme: c
						})) : r.a.createElement(g, I({
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
							theme: c
						}))
					}
					return r.a.createElement(N, {
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
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = P
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(i.c)({
				userIsSubscriber: o.hb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
		},
		"./src/reddit/controls/ContentType/index.m.less": function(e, t, s) {
			e.exports = {
				contentTypeIcon: "_3CquMWJ6RMh8E9D-_84AtZ"
			}
		},
		"./src/reddit/controls/ContentType/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/constants/icons.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/constants/elementClassNames.ts"),
				a = s("./src/reddit/controls/ContentType/index.m.less"),
				l = s.n(a);
			const u = e => Object(r.a)(l.a.contentTypeIcon, e.className),
				b = {
					embed: o.a.embed,
					gallery: o.a.media_gallery,
					gifvideo: o.a.gif_post,
					image: o.a.image_post,
					meta: o.a.poll_post,
					rpan: o.a.video_live,
					rtjson: o.a.text_post,
					text: o.a.text_post,
					video: o.a.video_post,
					liveaudio: o.a.audio
				};

			function m(e) {
				const t = u(e),
					s = e.type && b[e.type] || o.a.link_post;
				return i.a.createElement(d.a, {
					name: s,
					className: Object(r.a)({
						[c.a]: s === o.a.link_post
					}, t)
				})
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
				b = e => {
					let {
						isScoreHidden: t,
						score: s,
						useUpvotes: i,
						...o
					} = e;
					const c = Object(d.b)(s),
						a = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(s, "number", c)], {
							hk: "2L3T21"
						}),
						u = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : i ? a : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(s, "number", c)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, o, u)
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
			const l = (e, t) => {
					let {
						subredditIds: s,
						subredditNames: n,
						subscribe: o
					} = t;
					return Object(r.a)(Object(d.a)(e, [c.a]), {
						method: i.mb.POST,
						endpoint: Object(a.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: o ? "sub" : "unsub",
							sr: s && s.join(",") || void 0,
							sr_name: n && n.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, s) => Object(r.a)(Object(d.a)(e, [c.a]), {
					method: i.mb.POST,
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
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				d = e => Object(n.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			})), s.d(t, "b", (function() {
				return I
			})), s.d(t, "u", (function() {
				return v
			})), s.d(t, "v", (function() {
				return g
			})), s.d(t, "A", (function() {
				return P
			})), s.d(t, "s", (function() {
				return w
			})), s.d(t, "t", (function() {
				return L
			})), s.d(t, "c", (function() {
				return D
			})), s.d(t, "p", (function() {
				return M
			})), s.d(t, "q", (function() {
				return R
			})), s.d(t, "z", (function() {
				return A
			})), s.d(t, "y", (function() {
				return U
			})), s.d(t, "x", (function() {
				return B
			})), s.d(t, "o", (function() {
				return F
			})), s.d(t, "r", (function() {
				return q
			})), s.d(t, "m", (function() {
				return V
			})), s.d(t, "g", (function() {
				return K
			})), s.d(t, "l", (function() {
				return J
			})), s.d(t, "e", (function() {
				return Q
			})), s.d(t, "f", (function() {
				return z
			})), s.d(t, "h", (function() {
				return Y
			})), s.d(t, "j", (function() {
				return X
			})), s.d(t, "k", (function() {
				return Z
			})), s.d(t, "i", (function() {
				return $
			})), s.d(t, "d", (function() {
				return ee
			})), s.d(t, "n", (function() {
				return te
			})), s.d(t, "w", (function() {
				return se
			}));
			var n, i = s("./src/lib/stringInterpolate/index.ts"),
				r = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				d = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				c = s("./src/reddit/helpers/trackers/searchResults.ts"),
				a = (s("./src/reddit/helpers/widgets/index.tsx"), s("./src/reddit/models/DiscoveryUnit/index.ts")),
				l = s("./src/reddit/models/Search/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/reddit/selectors/trending.ts"),
				p = s("./src/reddit/selectors/widgets.ts"),
				h = s("./src/telemetry/index.ts"),
				f = s("./src/reddit/helpers/search/searchImpressionId.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(n || (n = {}));
			const O = "discovery_unit",
				_ = (e, t, s) => ({
					...b.n(e),
					source: O,
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
				S = (e, t, s) => ({
					..._(e, t, s),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				E = (e, t) => {
					Object(h.a)(I(t)(e))
				},
				I = (e, t) => s => S(s, e, t),
				x = (e, t, s, n) => "unitName" in t ? _(e, t, n) : ((e, t, s) => ({
					...b.n(e),
					source: "search",
					screen: b.ab(e),
					search: s ? {
						...b.bb(e, s, d.a.SERP),
						structureType: b.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, s),
				j = (e, t, s, i, r) => ({
					...x(e, t, i, r),
					action: "view",
					noun: n.ITEM_POST,
					post: b.J(e, s)
				}),
				y = e => {
					let {
						post: t,
						rawQuery: s,
						searchQuery: n
					} = e;
					return {
						displayQuery: decodeURIComponent(n),
						rawQuery: s ? decodeURIComponent(s) : void 0,
						structureType: t && t.isSponsored ? b.c.PromotedTrend : b.c.Trending
					}
				};
			var C;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(C || (C = {}));
			const v = e => {
					Object(h.a)(k({
						...e,
						action: o.c.CLICK
					}))
				},
				g = e => {
					Object(h.a)(k({
						...e,
						action: o.c.VIEW
					}))
				},
				T = {
					[d.a.Popular]: C.POPULAR_CAROUSEL,
					[d.a.Typeahead]: C.SEARCH_DROPDOWN
				},
				N = {
					[d.a.Popular]: l.d.tile,
					[d.a.Typeahead]: l.d.dropdown
				},
				k = e => {
					let {
						action: t,
						offset: s = 0,
						state: i,
						telemetrySource: r,
						trendingSearch: o
					} = e;
					const d = T[r],
						c = N[r],
						l = Object(m.a)(i, c).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === o.id) + s;
					return {
						...b.n(i),
						source: "search",
						action: t,
						noun: n.TRENDING,
						metaSearch: y(o),
						discoveryUnit: d === C.POPULAR_CAROUSEL ? {
							name: a.k,
							id: a.k,
							title: a.k,
							type: "query"
						} : void 0,
						actionInfo: b.d(i, {
							paneName: d,
							position: l
						}),
						search: {
							originElement: d === C.SEARCH_DROPDOWN ? "search_dropdown" : void 0,
							originPageType: i.platform.currentPage ? b.u(i.platform.currentPage) : void 0,
							query: o.rawQuery,
							structureType: b.c.Trending,
							impressionId: f.a.get(r),
							queryId: b.cb(i, r)
						}
					}
				},
				P = (e, t, s, n, i, r, d) => {
					Object(h.a)({
						...b.n(e),
						...Object(c.m)({
							state: e,
							postId: s,
							searchOptions: n,
							pageLayer: i,
							key: r,
							discoveryUnit: t
						}),
						action: o.c.VIEW,
						noun: d ? "ad" : "post"
					})
				},
				w = (e, t, s, n) => {
					Object(h.a)(j(e, t, s, n))
				},
				L = (e, t, s, n) => i => j(i, e, t, s, n),
				D = (e, t) => {
					Object(h.a)({
						..._(e, t),
						source: O,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				M = (e, t, s, n) => {
					Object(h.a)(R(t, s, n)(e))
				},
				R = (e, t, s, i) => r => {
					return {
						...x(r, e, s, i),
						source: O,
						action: o.c.CLICK,
						noun: n.ITEM_POST,
						post: b.J(r, t)
					}
				},
				A = function() {
					for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
					return e => Object(c.s)(e, ...t)
				},
				U = (e, t, s, n) => i => r => Object(c.k)({
					action: o.c.CLICK,
					state: r,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: s,
					postId: i,
					discoveryUnit: n
				}),
				B = function() {
					for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
					return e => s => ({
						...A(...t)(e)(s),
						noun: "ad"
					})
				},
				F = (e, t) => s => i => ({
					...e ? _(i, e, t) : {},
					source: O,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: b.J(i, s)
				}),
				q = (e, t, s, n) => {
					Object(h.a)(H(t, s, n)(e))
				},
				H = (e, t, s, n) => i => {
					const r = Object(u.c)(i, {
							postId: t
						}),
						d = r ? Object(p.b)(i, r) : void 0;
					return {
						...x(i, e, s, n),
						...d,
						source: O,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: b.J(i, t)
					}
				},
				G = () => ({
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
				W = (e, t, s) => b.d(e, {
					position: s
				}),
				V = (e, t, s) => {
					const n = G();
					return e => ({
						...S(e, n),
						actionInfo: W(e, 0, s),
						subreddit: b.jb(e, t)
					})
				},
				K = (e, t, s) => {
					const n = G();
					return e => ({
						...j(e, n, t),
						actionInfo: W(e, 0, s)
					})
				},
				J = (e, t, s) => {
					const i = G();
					return e => ({
						..._(e, i),
						actionInfo: W(e, 0, s),
						subreddit: b.jb(e, t) || null,
						source: O,
						action: o.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				Q = (e, t, s) => {
					const i = G();
					return e => ({
						..._(e, i),
						actionInfo: W(e, 0, s),
						post: b.J(e, t) || null,
						source: O,
						action: o.c.CLICK,
						noun: n.ITEM_POST
					})
				},
				z = (e, t, s, i) => {
					const r = G();
					return e => ({
						..._(e, r),
						actionInfo: W(e, 0, i),
						subreddit: b.jb(e, s) || null,
						post: b.J(e, t) || null,
						source: O,
						action: o.c.CLICK,
						noun: n.ITEM_POST_SUBREDDIT
					})
				},
				Y = (e, t, s) => {
					const i = G();
					return e => ({
						..._(e, i),
						actionInfo: W(e, 0, s),
						subreddit: b.jb(e, t) || null,
						source: O,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				X = (e, t, s, i) => {
					const r = G();
					return e => ({
						..._(e, r),
						actionInfo: W(e, 0, s),
						subreddit: b.jb(e, t) || null,
						post: i ? b.J(e, i) : null,
						source: O,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				Z = (e, t, s, i) => {
					const r = G();
					return e => ({
						..._(e, r),
						actionInfo: W(e, 0, s),
						subreddit: b.jb(e, t) || null,
						post: i ? b.J(e, i) : null,
						source: O,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				$ = (e, t, s) => {
					const i = G();
					return e => ({
						..._(e, i),
						actionInfo: W(e, 0, s),
						subreddit: b.jb(e, t) || null,
						source: O,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_HIDE
					})
				},
				ee = (e, t, s) => {
					const i = G();
					return e => ({
						..._(e, i),
						actionInfo: W(e, 0, s),
						subreddit: b.jb(e, t) || null,
						source: O,
						action: o.c.CLICK,
						noun: n.HEADER_SUBREDDIT
					})
				},
				te = (e, t) => s => ({
					..._(s, e),
					...t && Object(p.b)(s, t),
					source: O,
					action: o.c.CLICK,
					noun: "item"
				}),
				se = e => t => ({
					..._(t, e),
					source: O,
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
		"./src/reddit/selectors/widgets.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "k", (function() {
				return u
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "i", (function() {
				return p
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "b", (function() {
				return E
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts"),
				o = s("./src/reddit/helpers/widgets/index.tsx"),
				d = s("./src/reddit/selectors/profile.ts"),
				c = s("./src/reddit/selectors/subreddit.ts");
			const a = [],
				l = e => e.widgets.models,
				u = Object(n.a)((e, t) => Object(o.l)(t) ? e.widgets.models[t.widgetId] : Object(o.f)(t.widgetKind)),
				b = (e, t) => e.widgets.idCardIds[t.subredditId],
				m = (e, t) => {
					let s = t.subredditId;
					if (!s && t.subredditName && (s = Object(c.G)(e, t.subredditName)), s) {
						const t = b(e, {
							subredditId: s
						});
						if (t) return e.widgets.models[t]
					}
					return null
				},
				p = (e, t) => e.widgets.sidebar[t.subredditId] || [],
				h = (e, t) => e.widgets.menuIds[t.subredditId],
				f = (e, t) => {
					const s = h(e, t);
					return s ? e.widgets.models[s] : null
				},
				O = (e, t) => {
					const s = e.widgets.sidebar[t.subredditId];
					return Array.isArray(s) ? s.reduce((t, s) => {
						const n = e.widgets.models[s];
						return n && t.push(n.kind), t
					}, []) : a
				},
				_ = (e, t) => {
					const s = p(e, t);
					for (const n of s) {
						const t = e.widgets.models[n];
						if ("subreddit-rules" === t.kind) return t
					}
					return null
				},
				S = (e, t) => {
					const s = p(e, t).map(t => e.widgets.models[t]).filter(e => "post-flair" === e.kind);
					return s.length ? s : null
				},
				E = Object(n.a)((e, t) => {
					if (t.type === i.a.PROFILE) {
						const s = Object(d.k)(e, {
							profileName: t.name
						});
						return s ? {
							profile: {
								id: s.id,
								name: Object(r.h)(s.name)
							}
						} : {}
					}
					const s = Object(c.A)(e, {
							subredditName: t.name
						}),
						n = Object(c.x)(e, {
							subredditName: t.name
						});
					return {
						subreddit: {
							categoryName: n ? n.contentCategory : null,
							id: s.id,
							name: Object(r.h)(s.name)
						}
					}
				})
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"6bb3e5fdc9b0"}')
		},
		"./src/redditGQL/operations/SubredditsWithAboutInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"c00c334e43d3"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"13af47cf5fb3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.4030d86073e8dc759b5a.js.map