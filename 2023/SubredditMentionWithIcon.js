// https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.12f5fa4f34731875c321.js
// Retrieved at 6/7/2023, 12:10:03 AM by Reddit Dataminer v1.0.0
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
					e.UNKNOWN = "unknown", e.TITLE = "title", e.TOP_BAR = "top_bar", e.MEDIA = "media", e.BODY = "body", e.BACKGROUND = "background", e.CTA_URL = "cta_url", e.CTA_BUTTON = "cta_button", e.CTA_WHITESPACE = "cta_whitespace", e.CTA_CAPTION = "cta_caption", e.SUBREDDIT = "subreddit", e.TIMESTAMP = "timestamp", e.USER = "user"
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
				return w
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
			var y = s("./src/reddit/models/Toast/index.ts"),
				j = s("./src/reddit/selectors/profile.ts"),
				I = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/subscriptions.ts"),
				g = s("./src/reddit/selectors/user.ts");
			const C = () => n.fbt._("Sorry, failed to update favorites.", null, {
					hk: "40XHkp"
				}),
				v = Object(o.a)(c.c),
				T = Object(o.a)(c.b),
				N = Object(o.a)(c.a),
				k = Object(o.a)(c.h),
				w = (Object(o.a)(c.i), Object(o.a)(c.g), () => async (e, t, s) => {
					let {
						gqlContext: n
					} = s;
					const i = t();
					if (!i.user.account || i.subscriptions.api.fetched) return;
					e(T());
					const r = await Object(h.a)(n());
					if (r.ok) {
						const t = E(r.body.data);
						e(v(t))
					} else e(N({
						error: r.error
					}))
				}),
				P = (e, t) => t.type === u.a.PROFILE && e.displayText === t.name.replace("u_", ""),
				L = (e, t, s) => async (o, c, b) => {
					let {
						apiContext: m
					} = b, p = e.map(e => e.type === u.a.SUBREDDIT ? {
						id: Object(I.I)(c(), e.name),
						name: e.name,
						type: e.type
					} : {
						id: Object(j.o)(c(), e.name),
						name: `${i.pc}${e.name}`,
						type: e.type
					});
					if (!Object(g.S)(c())) return o(Object(a.k)({
						actionSource: a.a.Subscribe
					})), void o(Object(d.openRegisterModal)());
					const f = Object(g.m)(c());
					if (f) {
						const t = p.length,
							s = e.length;
						if (p = p.filter(e => !P(f, e)), (e = e.filter(e => !P(f, e))).length !== s || p.length !== t) {
							const e = n.fbt._("You cannot follow yourself!", null, {
								hk: "3tfSaq"
							});
							o(Object(l.f)(Object(l.e)(e, y.b.Error)))
						}
						if (!e.length && !p.length) return
					}
					o(k({
						identifiers: p,
						nameIdentifiers: e,
						profileModels: c().profiles.models,
						subredditModels: c().subreddits.models,
						subscriptionsCount: Object(x.b)(c()),
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
							a = n.fbt._("Successfully joined {communityname}", [n.fbt._param("communityname", s)], {
								hk: "1W9UY3"
							}),
							c = n.fbt._("Successfully left {communityname}", [n.fbt._param("communityname", s)], {
								hk: "1saMW"
							});
						o(Object(l.f)({
							text: 1 === e.length && "profile" === e[0].type ? t ? i : d : t ? a : c
						}))
					} else {
						o(k({
							identifiers: p,
							nameIdentifiers: e,
							profileModels: c().profiles.models,
							subredditModels: c().subreddits.models,
							subscriptionsCount: Object(x.b)(c()),
							userIsSubscriber: !t,
							widgetId: s
						}));
						const i = n.fbt._("Something went wrong. Please try again!", null, {
							hk: "1zlDeq"
						});
						o(Object(l.f)(Object(l.e)(i, y.b.Error)))
					}
					return O.ok
				}, D = Object(o.a)(c.f), M = e => async (t, s, n) => {
					let {
						apiContext: i
					} = n;
					const r = s(),
						o = Object(I.Q)(r, {
							identifier: e
						});
					if (!o) throw new Error(`actions.subscription -- No subreddit or profile found with id ${e.id}`);
					const d = e.type === u.a.SUBREDDIT ? o.name : `u_${o.name}`,
						a = r.subscriptions.favoriteSubredditOrder || [],
						c = r.subscriptions.favoriteProfileOrder || [],
						b = a.indexOf(e.id),
						m = c.indexOf(e.id),
						p = -1 === b && -1 === m,
						f = r.subreddits.models,
						O = r.profiles.models,
						_ = {
							type: e.type,
							name: o.name
						},
						S = () => Object(I.jb)(s(), {
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
						text: C(),
						kind: y.b.Error
					}))))
				}, R = Object(o.a)(c.d), A = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const o = s().multireddits.models,
						d = () => {
							t(Object(l.f)({
								text: C(),
								kind: y.b.Error
							}))
						},
						a = o[e];
					if (!a) return void d();
					const c = !a.isFavorited;
					t(R({
						makeFavorite: c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), (await ((e, t, s) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: i.ob.POST,
						endpoint: `${e.apiUrl}/api/multi/favorite`,
						data: {
							make_favorite: s ? "true" : "false",
							multipath: t,
							api_type: "json"
						}
					}))(r(), e, c)).ok || (t(R({
						makeFavorite: !c,
						multiredditPath: e,
						multiredditsModelsState: o
					})), d())
				}, U = Object(o.a)(c.e), B = e => async (t, s, r) => {
					let {
						apiContext: o
					} = r;
					const d = s(),
						a = d.multireddits.models;
					if (!Object(g.S)(d)) return;
					const c = function() {
							let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
							t(Object(l.f)({
								text: n.fbt._("Sorry, failed to {followAction}", [n.fbt._param("followAction", e ? n.fbt._("follow", null, {
									hk: "3YMYJK"
								}) : n.fbt._("unfollow", null, {
									hk: "24IYxj"
								}))], {
									hk: "1ufRSl"
								}),
								kind: y.b.Error
							}))
						},
						u = a[e];
					if (!u) return void c();
					const h = !u.isFollowed;
					t(U({
						follow: h,
						multiredditPath: e,
						multiredditsModelsState: a
					})), (await ((e, t, s) => Object(b.a)(Object(m.a)(e, [p.a]), {
						method: i.ob.POST,
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
						multiredditsModelsState: a
					})), c(h))
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
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
				S = Object(c.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: i,
						caretColor: o,
						onClick: d,
						hideCaret: c
					} = e;
					return r.a.createElement("div", {
						onClick: d,
						className: Object(a.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === i,
							[h.a.caretOnLeft]: "left" === i,
							[h.a.caretOnRight]: "right" === i,
							[h.a.caretOnBottom]: "bottom" === i,
							[h.a.hideCaret]: c
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
				y = Object(u.a)(S, [n.a.Click, n.a.Keydown]),
				j = Object(o.b)(E);
			class I extends r.a.Component {
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
					return r.a.createElement(y, f({}, this.props, {
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
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/reddit/constants/elementIds.ts"),
				d = s("./src/reddit/contexts/InsideOverlay.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e, t) {
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
						return i.a.createElement(s, a({}, this.props, {
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
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/makeListingKey/index.ts"),
				b = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeActionCreator/index.ts")),
				m = s("./src/reddit/actions/subredditMention/constants.ts"),
				p = s("./src/lib/makeGqlRequest/index.ts"),
				h = s("./src/redditGQL/operations/SubredditsWithAboutInfo.json"),
				f = s("./src/reddit/featureFlags/index.ts"),
				O = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				_ = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				S = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/subredditMention.ts");
			const j = Object(b.a)(m.d),
				I = Object(b.a)(m.c),
				x = Object(b.a)(m.b),
				g = Object(b.a)(m.a),
				C = e => async (t, s, n) => {
					let {
						gqlContext: i
					} = n;
					const r = s(),
						o = Object(y.c)(r, {
							subredditName: e
						}),
						d = !!Object(E.C)(r, {
							subredditName: e
						}) && !!Object(E.z)(r, {
							subredditName: e
						}) || !!Object(E.gb)(r, {
							subredditName: e
						}),
						a = Object(y.d)(r, {
							subredditName: e
						}),
						c = f.d.subredditMentionD2xExperiment(r);
					if (o || d && !a || !c) return;
					let l = !1;
					t(x({
						subredditName: e
					}));
					try {
						const s = await ((e, t) => Object(p.a)(e, {
							...h,
							variables: t
						}))(i(), {
							subredditNames: [e]
						});
						if (s.ok && s.body) {
							const {
								data: n
							} = s.body, i = n.subredditsInfoByNames[0];
							if (Object(S.k)(i)) {
								const e = Object(_.f)(i);
								t(j({
									subreddits: {},
									subredditAboutInfo: {},
									unavailableSubreddits: {
										[e.id]: e
									}
								}))
							} else if (i && Object.keys(i).length > 0) {
								const e = Object(_.a)(i),
									s = Object(O.a)(i);
								t(j({
									subreddits: {
										[e.id]: e
									},
									subredditAboutInfo: s,
									unavailableSubreddits: {}
								}))
							}
							t(I({
								subredditName: e
							})), l = !0
						}
					} catch (u) {
						l = !1
					}
					l || t(g({
						subredditName: e,
						error: {
							type: "Subreddit mention experiment GQL API failed or caught by try and catch!!"
						}
					}))
				};
			var v = s("./src/reddit/actions/subredditTopContent.ts"),
				T = s("./src/reddit/actions/tooltip.ts"),
				N = s("./src/reddit/components/ContentTooltip/index.tsx"),
				k = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = s("./src/lib/classNames/index.ts"),
				P = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				D = s("./src/reddit/components/SubredditIcon/index.tsx"),
				M = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				R = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				A = s("./src/reddit/components/TrackingHelper/index.tsx"),
				U = s("./src/reddit/constants/posts.ts"),
				B = s("./src/reddit/controls/MetaData/index.tsx"),
				F = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				q = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				H = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				G = s.n(H);
			const {
				fbt: W
			} = s("./node_modules/fbt/lib/FbtPublic.js"), K = Object(a.c)({
				subreddit: E.X,
				subredditAboutInfo: E.z
			});
			class V extends o.a.Component {
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
						e && t && !this.hasFiredViewEvent && (r(Object(F.g)(s, n, i)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: i
						} = this.props;
						s(t ? Object(q.c)(n) : Object(F.d)(e, n, i))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: i
						} = this.props;
						return e ? s ? Object(q.e)(n) : Object(F.f)(t, n, i) : s ? Object(q.d)(n) : Object(F.e)(t, n, i)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(L.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(L.b, this.trackViewEvent)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(L.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(L.b, this.trackViewEvent)
				}
				render() {
					const {
						shouldHideBottomBorder: e,
						shouldShowDescription: t,
						shouldShowActiveUsers: s,
						subreddit: n,
						subredditAboutInfo: i
					} = this.props;
					if (!n || !i) return null;
					const r = i.publicDescription || "",
						d = n.subscribers,
						a = Object(P.b)(d),
						c = Object(P.b)(i.accountsActive);
					return o.a.createElement("div", {
						className: Object(w.a)(G.a.subredditContainer, {
							[G.a.hideBottomBorder]: e
						})
					}, o.a.createElement("div", {
						className: G.a.subredditContent
					}, o.a.createElement("div", null, o.a.createElement(k.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, o.a.createElement(D.b, {
						subredditOrProfile: n,
						className: G.a.iconContainer
					}))), o.a.createElement("div", {
						className: G.a.subredditBodyWrapper
					}, o.a.createElement("div", {
						className: G.a.subredditBody,
						"data-click-id": "body"
					}, o.a.createElement(M.a, {
						className: G.a.subredditTitle,
						to: n.url,
						onClick: this.onSubredditClick
					}, n.displayText), o.a.createElement("div", null, o.a.createElement(R.a, {
						identifier: {
							name: n.name,
							type: U.a.SUBREDDIT
						},
						postId: n.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					}))), o.a.createElement("div", {
						className: G.a.subredditMeta
					}, W._({
						"*": "{number} members",
						_1: "1 member"
					}, [W._plural(d, "number", a)], {
						hk: "4yqFU9"
					})), s && o.a.createElement("div", {
						className: G.a.subredditMeta
					}, o.a.createElement(B.c, null), W._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [W._plural(i.accountsActive, "number", c)], {
						hk: "1oCA5j"
					})), t && r && o.a.createElement(k.a, {
						className: G.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, r))))
				}
			}
			var z = Object(d.b)(K)(Object(A.c)(V)),
				Q = s("./src/reddit/components/Thumbnail/index.tsx"),
				Y = s("./src/reddit/helpers/overlay/index.ts"),
				J = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/components/SubredditMention/MiniPost/index.m.less"),
				Z = s.n(X);
			const {
				fbt: $
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ee = Object(a.a)(e => e, J.F, J.d, (e, t, s) => {
				return {
					crosspost: s,
					post: t,
					subredditOrProfile: Object(E.Q)(e, {
						identifier: t.belongsTo
					})
				}
			});
			class te extends o.a.PureComponent {
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
						className: Object(w.a)(Z.a.container, e),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: Z.a.postDetails
					}, o.a.createElement("p", {
						className: Z.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && o.a.createElement(M.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), o.a.createElement("div", null, o.a.createElement("span", {
						className: Z.a.meta
					}, $._({
						"*": "{number of comments} comments",
						_1: "1 comment"
					}, [$._plural(t.numComments, "number of comments", Object(P.b)(t.numComments))], {
						hk: "Wq9Sy"
					})))), o.a.createElement("div", {
						className: Z.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(Q.b, {
						post: t
					})))
				}
			}
			var se = Object(d.b)(ee, (e, t) => ({
					openLightbox: t => e(Object(Y.a)(t.permalink))
				}))(te),
				ne = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				re = s("./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less"),
				oe = s.n(re);
			const de = Object(ne.v)(),
				ae = Object(a.c)({
					isFakeSubreddit: ne.A
				});
			var ce = de(Object(d.b)(ae)(e => {
					let {
						className: t,
						showSubreddit: s,
						...n
					} = e;
					const i = Object(ie.a)(n);
					return o.a.createElement("div", {
						className: Object(w.a)(Z.a.container, t)
					}, o.a.createElement("div", {
						className: oe.a.mainBody
					}, o.a.createElement("div", {
						className: oe.a.content
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: Object(w.a)(oe.a.title, i)
					}), s && o.a.createElement("div", {
						className: Object(w.a)(oe.a.meta, i)
					})), o.a.createElement("div", {
						className: oe.a.flatlist
					}, o.a.createElement("div", {
						className: Object(w.a)(oe.a.flatlistExpando, i)
					}), o.a.createElement("div", {
						className: oe.a.flatlistSeparator
					}), o.a.createElement("div", {
						className: Object(w.a)(oe.a.flatlistItemOne, i)
					}), o.a.createElement("div", {
						className: Object(w.a)(oe.a.flatlistItemTwo, i)
					}))), o.a.createElement("div", {
						className: oe.a.thumbnailContainer
					}, o.a.createElement("div", {
						className: Object(w.a)(oe.a.thumbnail, i)
					}))))
				})),
				le = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				ue = s("./src/reddit/icons/svgs/Top/index.tsx"),
				be = s("./src/reddit/selectors/user.ts"),
				me = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				pe = s.n(me);
			const {
				fbt: he
			} = s("./node_modules/fbt/lib/FbtPublic.js"), fe = e => `subreddit-mention-${e}`, Oe = Object(a.c)({
				haveError: y.d,
				hideNSFWPref: be.H,
				isEmployee: be.P,
				isPending: y.c,
				postIds: y.f,
				subreddit: E.a,
				subredditAboutInfo: E.z
			}), _e = Object(d.b)(Oe, (e, t) => {
				let {
					subredditName: s,
					isHoverable: n
				} = t;
				return {
					subredditDataRequested: t => e(C(t)),
					showTooltip: t => {
						e(Object(T.f)({
							tooltipId: t
						})), e(Object(v.d)(s))
					},
					onHideTooltip: () => e(Object(T.i)())
				}
			}), Se = 600;
			class Ee extends o.a.Component {
				constructor(e) {
					super(e), this.isRequestedOnceAlready = !1, this.onShowTooltip = () => {
						const e = fe(this.state.uniqueId);
						this.props.showTooltip(e), this.props.sendEvent(Object(q.f)(this.props.subredditName)), this.props.postIds.map(e => this.props.sendEvent(Object(q.g)(this.props.subredditName, e)))
					}, this.onClickPost = e => {
						this.props.sendEvent(Object(q.b)(this.props.subredditName, e))
					}, this.handleScroll = i()(() => this.loadSubredditData && this.loadSubredditData(), l.M), this.loadSubredditData = () => {
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
							(n < s ? s - n : n - t) < Se && (this.isRequestedOnceAlready = !0, this.props.subredditDataRequested(this.props.subredditName))
						}
					}, this.handleOnClick = () => {
						const {
							sendEvent: e,
							rtJsonElementProps: t,
							subredditName: s
						} = this.props;
						e(Object(q.a)({
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
						uniqueId: Object(c.a)()
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
						className: pe.a.subredditMentionContainer,
						ref: this.subredditMentionElement,
						onClick: this.handleOnClick
					}, o.a.createElement(le.a, {
						href: `/r/${e}/`
					}, o.a.createElement("span", {
						className: pe.a.subredditIconContainer
					}, o.a.createElement(le.b, {
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
					if (!r || !d || Object(S.l)(r)) return this.renderDefault();
					const {
						uniqueId: c
					} = this.state, b = Object(u.a)(this.props.subredditName, l.bb.TOP), m = r.isNSFW && e || r.type === S.g.EmployeesOnly && !t || r.type === S.g.Private && !d.userIsSubscriber, p = m || r.isQuarantined || r.isNSFW;
					return o.a.createElement("span", {
						className: pe.a.subredditMentionContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i,
						id: fe(c),
						onClick: this.handleOnClick,
						ref: this.subredditMentionElement
					}, o.a.createElement(le.a, {
						href: `/r/${a}/`
					}, o.a.createElement("span", {
						className: pe.a.subredditIconContainer
					}, o.a.createElement(le.b, {
						subredditOrProfile: m ? void 0 : r
					})), `r/${a}`), s && !p && o.a.createElement(N.a, {
						defaultTooltipPosition: "right",
						tooltipId: fe(c),
						tooltipSizeEstimate: {
							height: 290,
							width: 364
						}
					}, o.a.createElement("div", {
						className: pe.a.hovercardStyle
					}, o.a.createElement(z, {
						subredditId: r.id,
						subredditName: a,
						shouldHideBottomBorder: !0,
						shouldShowActiveUsers: !0,
						shouldShowDescription: !1,
						shouldUseSubredditMentionEvents: !0,
						listingKey: b,
						position: 0
					}), o.a.createElement("div", {
						className: pe.a.topPostsTitle
					}, o.a.createElement(ue.a, {
						className: pe.a.top
					}), he._("Top posts of the last week", null, {
						hk: "37poFw"
					})), n.length > 0 ? n.map(e => o.a.createElement(se, {
						containerOnClick: this.onClickPost,
						key: e,
						postId: e,
						thumbnailOnClick: this.onClickPost
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(ce, {
						isLoading: !0
					}), o.a.createElement(ce, {
						isLoading: !0
					}), o.a.createElement(ce, {
						isLoading: !0
					})))))
				}
			}
			t.default = _e(Object(A.c)(Ee))
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
							priority: h,
							isShredditParityEnabled: f,
							...O
						} = this.props, _ = this.state.isHovered, S = Object(a.a)({
							type: t.type,
							key: _ ? "unsubscribe" : "subscribed"
						}), E = O.shouldReverseColor ? d.c.Secondary : d.c.Primary;
						return i.a.createElement(d.t, u({
							className: e,
							priority: h || E,
							rplStyle: f,
							text: S,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: d.d.XSP
						}, O))
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
							priority: h,
							isShredditParityEnabled: f,
							...O
						} = this.props, _ = Object(a.a)({
							type: t.type,
							key: "subscribe"
						}), S = O.shouldReverseColor ? d.c.Secondary : d.c.Primary;
						return i.a.createElement(d.t, u({
							className: e,
							priority: h || S,
							size: d.d.XSP,
							rplStyle: f,
							text: _,
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
			s.d(t, "a", (function() {
				return C
			})), s.d(t, "c", (function() {
				return w
			}));
			var n = s("./src/lib/isUrl/index.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				l = s("./src/reddit/controls/ContentType/index.tsx"),
				u = s("./src/reddit/controls/OutboundLink/index.tsx"),
				b = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				m = s("./src/reddit/models/Media/index.ts"),
				p = s("./src/reddit/models/Theme/index.ts"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				f = s("./src/telemetry/models/Outbound.ts"),
				O = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				_ = s("./src/reddit/components/Thumbnail/index.m.less"),
				S = s.n(_);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = e => e.placeholderImage || Object(h.a)(e).placeholderImage,
				j = e => e.placeholderImage ? "cover" : Object(h.a)(e).placeholderImagePosition,
				I = a.a.span("LinkText", S.a),
				x = e => {
					let {
						className: t,
						onClick: s,
						children: n
					} = e;
					return r.a.createElement("div", {
						onClick: s,
						className: Object(o.a)(S.a.linkIcon, t)
					}, n)
				},
				g = e => r.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(S.a.hiddenImage, e.className)
				}),
				C = e => {
					const t = r.a.createRef(),
						{
							src: s,
							errorSrc: n
						} = e;
					return s && n && Object(c.b)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${n})`)
					}), r.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(o.a)(S.a.thumbnail, S.a.imageThumbnail, e.className),
						"data-click-id": "image",
						"data-adclicklocation": O.a.MEDIA,
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(h.a)(e).button : Object(h.a)(e).line
						}
					}, e.isOutbound && r.a.createElement(x, {
						className: e.linkIconClassName
					}, r.a.createElement(b.a, {
						className: Object(o.a)(S.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && r.a.createElement(I, {
						className: e.linkTextClassName
					}, e.text)), r.a.createElement(g, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				v = e => e.isOutbound ? Object(h.a)(e).button : e.placeholderImage ? "transparent" : Object(h.a)(e).line,
				T = e => {
					const t = y(e),
						s = t && {
							background: Object(p.g)(Object(h.a)(e).placeholder, t, j(e))
						};
					return r.a.createElement("div", {
						className: Object(o.a)(S.a.thumbnail, S.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: v(e)
						}
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(l.a, {
						className: Object(o.a)(e.contentTypeClassName, S.a.contentType, {
							[S.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && r.a.createElement(x, {
						className: e.linkIconClassName
					}, r.a.createElement(b.a, {
						className: Object(o.a)(S.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && r.a.createElement(I, {
						className: e.linkTextClassName
					}, e.text)))
				},
				N = e => r.a.createElement(C, E({}, e, {
					className: Object(o.a)(S.a.blurredThumbnail, e.className)
				})),
				k = Object(d.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: i,
						crosspost: d,
						forceShowNSFW: a,
						isCommentsPage: c,
						isMeta: l,
						linkIconClassName: b,
						linkTextClassName: p,
						outboundLinkIconClassName: h,
						post: O,
						redditStyle: _,
						removeLink: E,
						showContentType: j,
						templatePlaceholderImage: I,
						text: x,
						theme: g,
						usePreview: C
					} = e, v = !g.subredditContext.shouldShowNSFWContent && (O.isNSFW || !(!d || !d.isNSFW)) && !a, T = y({
						placeholderImage: I,
						redditStyle: _,
						theme: g
					}), N = w(e), k = c ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage, L = P(O, t, T, v, x, g, N, l, j, E, _, b, p, h, i), D = Object(m.E)(O);
					return Object(n.a)(D) && !E && D.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(o.a)(S.a.container, C ? S.a.usePreview : "", s)
					}, r.a.createElement(u.b, {
						href: Object(m.E)(O),
						isSponsored: O.isSponsored,
						postId: O.id,
						source: O.source,
						sourceElement: k
					}, L)) : r.a.createElement("div", {
						className: Object(o.a)(S.a.container, C ? S.a.usePreview : "", s)
					}, L)
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
						thumbnail: o
					} = t || s;
					return i && r ? r.url : s.isSponsored && r && "default" === o.url ? r.url : o.url
				},
				P = (e, t, s, i, d, a, c, l, u, b, m, p, h, f, O) => {
					const _ = (e => e.source && !e.isSponsored || !1)(e);
					if (Object(n.a)(c)) {
						const s = Object(o.a)(t);
						return i ? r.a.createElement(N, {
							"data-click-id": "image",
							src: c,
							className: s,
							isOutbound: _ && !b,
							linkIconClassName: p,
							linkTextClassName: h,
							outboundLinkIconClassName: f,
							redditStyle: m,
							text: d,
							theme: a
						}) : r.a.createElement(C, {
							alt: e.title,
							className: s,
							src: c,
							isOutbound: _ && !b,
							linkIconClassName: p,
							linkTextClassName: h,
							outboundLinkIconClassName: f,
							redditStyle: m,
							text: d,
							theme: a
						})
					}
					return r.a.createElement(T, {
						className: t,
						contentTypeClassName: O,
						placeholderImage: s,
						isMeta: l,
						isOutbound: _ && !b,
						linkIconClassName: p,
						linkTextClassName: h,
						outboundLinkIconClassName: f,
						redditStyle: m,
						showContentType: u,
						text: d,
						theme: a,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.b = k
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(i.c)({
				userIsSubscriber: o.jb
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
				a = s("./src/reddit/constants/elementClassNames.ts"),
				c = s("./src/reddit/controls/ContentType/index.m.less"),
				l = s.n(c);
			const u = e => Object(r.a)(l.a.contentTypeIcon, e.className),
				b = {
					embed: o.a.embed,
					gallery: o.a.media_gallery,
					gifvideo: o.a.gif_post,
					image: o.a.image_post,
					meta: o.a.poll_post,
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
						[a.a]: s === o.a.link_post
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
				a = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				c = s.n(a);
			const l = o.a.span("metaText", c.a),
				u = e => r.a.createElement(l, e, " · "),
				b = e => {
					let {
						isScoreHidden: t,
						score: s,
						useUpvotes: i,
						...o
					} = e;
					const a = Object(d.b)(s),
						c = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(s, "number", a)], {
							hk: "2L3T21"
						}),
						u = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : i ? c : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(s, "number", a)], {
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
				a = s("./src/reddit/constants/headers.ts"),
				c = s("./src/reddit/helpers/addRedesignIdentifier/index.ts");
			t.a = e => Object(o.a)(e, n);
			const l = (e, t) => {
					let {
						subredditIds: s,
						subredditNames: n,
						subscribe: o
					} = t;
					return Object(r.a)(Object(d.a)(e, [a.a]), {
						method: i.ob.POST,
						endpoint: Object(c.a)(`${e.apiUrl}/api/subscribe`),
						data: {
							action: o ? "sub" : "unsub",
							sr: s && s.join(",") || void 0,
							sr_name: n && n.join(",") || void 0,
							api_type: "json"
						}
					})
				},
				u = (e, t, s) => Object(r.a)(Object(d.a)(e, [a.a]), {
					method: i.ob.POST,
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
				return S
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "o", (function() {
				return g
			})), s.d(t, "p", (function() {
				return C
			})), s.d(t, "u", (function() {
				return k
			})), s.d(t, "m", (function() {
				return w
			})), s.d(t, "n", (function() {
				return P
			})), s.d(t, "c", (function() {
				return L
			})), s.d(t, "j", (function() {
				return D
			})), s.d(t, "k", (function() {
				return M
			})), s.d(t, "t", (function() {
				return R
			})), s.d(t, "s", (function() {
				return A
			})), s.d(t, "r", (function() {
				return U
			})), s.d(t, "i", (function() {
				return B
			})), s.d(t, "l", (function() {
				return F
			})), s.d(t, "g", (function() {
				return W
			})), s.d(t, "d", (function() {
				return K
			})), s.d(t, "e", (function() {
				return V
			})), s.d(t, "f", (function() {
				return z
			})), s.d(t, "h", (function() {
				return Q
			})), s.d(t, "q", (function() {
				return Y
			}));
			var n, i = s("./src/lib/stringInterpolate/index.ts"),
				r = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				d = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				a = s("./src/reddit/helpers/trackers/searchResults.ts"),
				c = (s("./src/reddit/helpers/widgets/index.tsx"), s("./src/reddit/models/DiscoveryUnit/index.ts")),
				l = s("./src/reddit/models/Search/index.ts"),
				u = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				m = s("./src/reddit/selectors/trending.ts"),
				p = s("./src/reddit/selectors/widgets.ts"),
				h = s("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(n || (n = {}));
			const f = "discovery_unit",
				O = (e, t, s) => ({
					...b.o(e),
					source: f,
					screen: b.cb(e),
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
				y = (e, t, s, n) => "unitName" in t ? O(e, t, n) : ((e, t, s) => ({
					...b.o(e),
					source: "search",
					screen: b.cb(e),
					search: s ? {
						...b.db(e, s, d.a.SERP),
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
					...y(e, t, i, r),
					action: "view",
					noun: n.ITEM_POST,
					post: b.K(e, s)
				}),
				I = e => {
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
			var x;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(x || (x = {}));
			const g = e => {
					Object(h.a)(N({
						...e,
						action: o.c.CLICK
					}))
				},
				C = e => {
					Object(h.a)(N({
						...e,
						action: o.c.VIEW
					}))
				},
				v = {
					[d.a.Popular]: x.POPULAR_CAROUSEL,
					[d.a.Typeahead]: x.SEARCH_DROPDOWN
				},
				T = {
					[d.a.Popular]: l.d.tile,
					[d.a.Typeahead]: l.d.dropdown
				},
				N = e => {
					let {
						action: t,
						offset: s = 0,
						state: i,
						telemetrySource: r,
						trendingSearch: o
					} = e;
					const d = v[r],
						a = T[r],
						l = Object(m.a)(i, a).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === o.id) + s;
					return {
						...b.o(i),
						source: "search",
						action: t,
						noun: n.TRENDING,
						metaSearch: I(o),
						discoveryUnit: d === x.POPULAR_CAROUSEL ? {
							name: c.k,
							id: c.k,
							title: c.k,
							type: "query"
						} : void 0,
						actionInfo: b.d(i, {
							paneName: d,
							position: l
						}),
						search: b.eb(i, {
							searchQuery: o.rawQuery,
							structureType: b.c.Trending,
							originElement: d === x.SEARCH_DROPDOWN ? b.a.SearchDropdown : void 0,
							telemetrySource: r
						})
					}
				},
				k = (e, t, s, n, i, r, d) => {
					Object(h.a)({
						...b.o(e),
						...Object(a.l)({
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
				P = (e, t, s, n) => i => j(i, e, t, s, n),
				L = (e, t) => {
					Object(h.a)({
						...O(e, t),
						source: f,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				D = (e, t, s, n) => {
					Object(h.a)(M(t, s, n)(e))
				},
				M = (e, t, s, i) => r => {
					return {
						...y(r, e, s, i),
						source: f,
						action: o.c.CLICK,
						noun: n.ITEM_POST,
						post: b.K(r, t)
					}
				},
				R = function() {
					for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
					return e => Object(a.r)(e, ...t)
				},
				A = (e, t, s, n) => i => r => Object(a.j)({
					action: o.c.CLICK,
					state: r,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: s,
					postId: i,
					discoveryUnit: n
				}),
				U = function() {
					for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
					return e => s => ({
						...R(...t)(e)(s),
						noun: "ad"
					})
				},
				B = (e, t) => s => i => ({
					...e ? O(i, e, t) : {},
					source: f,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: b.K(i, s)
				}),
				F = (e, t, s, n) => {
					Object(h.a)(q(t, s, n)(e))
				},
				q = (e, t, s, n) => i => {
					const r = Object(u.c)(i, {
							postId: t
						}),
						d = r ? Object(p.b)(i, r) : void 0;
					return {
						...y(i, e, s, n),
						...d,
						source: f,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: b.K(i, t)
					}
				},
				H = () => ({
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
				G = (e, t, s) => b.d(e, {
					position: s
				}),
				W = (e, t, s) => {
					const i = H();
					return e => ({
						...O(e, i),
						actionInfo: G(e, 0, s),
						subreddit: b.mb(e, t) || null,
						source: f,
						action: o.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				K = (e, t, s) => {
					const i = H();
					return e => ({
						...O(e, i),
						actionInfo: G(e, 0, s),
						subreddit: b.mb(e, t) || null,
						source: f,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				V = (e, t, s, i) => {
					const r = H();
					return e => ({
						...O(e, r),
						actionInfo: G(e, 0, s),
						subreddit: b.mb(e, t) || null,
						post: i ? b.K(e, i) : null,
						source: f,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				z = (e, t, s, i) => {
					const r = H();
					return e => ({
						...O(e, r),
						actionInfo: G(e, 0, s),
						subreddit: b.mb(e, t) || null,
						post: i ? b.K(e, i) : null,
						source: f,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				Q = (e, t) => s => ({
					...O(s, e),
					...t && Object(p.b)(s, t),
					source: f,
					action: o.c.CLICK,
					noun: "item"
				}),
				Y = e => t => ({
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
				a = s("./src/reddit/selectors/subreddit.ts");
			const c = [],
				l = e => e.widgets.models,
				u = Object(n.a)((e, t) => Object(o.l)(t) ? e.widgets.models[t.widgetId] : Object(o.f)(t.widgetKind)),
				b = (e, t) => e.widgets.idCardIds[t.subredditId],
				m = (e, t) => {
					let s = t.subredditId;
					if (!s && t.subredditName && (s = Object(a.I)(e, t.subredditName)), s) {
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
					}, []) : c
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
								name: Object(r.i)(s.name)
							}
						} : {}
					}
					const s = Object(a.C)(e, {
							subredditName: t.name
						}),
						n = Object(a.z)(e, {
							subredditName: t.name
						});
					return {
						subreddit: {
							categoryName: n ? n.contentCategory : null,
							id: s.id,
							name: Object(r.i)(s.name)
						}
					}
				})
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"c80367dee46a"}')
		},
		"./src/redditGQL/operations/SubredditsWithAboutInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"b00857778f9c"}')
		},
		"./src/redditGQL/operations/SubscribedSubreddits.json": function(e) {
			e.exports = JSON.parse('{"id":"ca83defc2e15"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.12f5fa4f34731875c321.js.map