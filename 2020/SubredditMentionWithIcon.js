// https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.ea8da784bbefe06382b4.js
// Retrieved at 10/26/2020, 11:00:17 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditMentionWithIcon"], {
		"./src/graphql/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"7f4b3a58cc5e"}')
		},
		"./src/graphql/operations/SubredditsWithAboutInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"208de0847dac"}')
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
				return d
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/preferences.ts"),
				r = s("./src/graphql/operations/SubredditTopContent.json"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				c = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const a = "SUBREDDIT_TOP_CONTENT__PENDING",
				d = "SUBREDDIT_TOP_CONTENT__LOADED",
				u = "SUBREDDIT_TOP_CONTENT__FAILED",
				l = Object(n.a)(a),
				b = Object(n.a)(d),
				p = Object(n.a)(u),
				m = e => async (t, s, n) => {
					const a = e.toLowerCase(),
						d = s(),
						{
							api: u,
							topContent: m
						} = d.subreddits;
					if (u.topContent.pending[a] || m[a]) return;
					t(l({
						subredditName: a
					})), t(Object(i.z)());
					const h = await ((e, t) => Object(o.a)(e, Object.assign(Object.assign({}, r), {
						variables: t
					})))(n.gqlContext(), {
						subredditName: a
					});
					if (h.ok) {
						const e = h.body.data.subreddit;
						if (e) {
							const s = Object(c.c)(e);
							s && t(b(Object.assign(Object.assign({}, s), {
								subredditName: a
							})))
						}
					} else t(p({
						subredditName: a,
						error: h.error
					}))
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
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/fastdom/index.ts"),
				b = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				m = s("./src/reddit/components/ContentTooltip/index.m.less"),
				h = s.n(m);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			const j = {
					height: 200,
					width: 200
				},
				g = e => {
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
				E = Object(u.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: i,
						caretColor: o
					} = e, c = f(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return r.a.createElement("div", O({
						className: Object(d.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === i,
							[h.a.caretOnLeft]: "left" === i,
							[h.a.caretOnRight]: "right" === i,
							[h.a.caretOnBottom]: "bottom" === i
						}),
						style: Object.assign(Object.assign({}, n), {
							"--contentTooltip-caretColor": o && o[i] ? o[i] : Object(b.a)(e).body
						})
					}, c), t)
				}),
				v = Object(c.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				S = Object(a.a)(E, [n.a.Click, n.a.Keydown]),
				y = Object(o.b)(v);
			class _ extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = j
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
								position: i ? this.props.defaultTooltipPosition : g(this.props.defaultTooltipPosition)
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
					return r.a.createElement(S, O({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = y(_)
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
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				l = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				O = s("./src/reddit/controls/MetaData/index.tsx"),
				f = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				j = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				v = s.n(E);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = Object(c.c)({
				subreddit: g.T,
				subredditAboutInfo: g.y
			}), _ = Object(r.b)(y);
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
						e && t && !this.hasFiredViewEvent && (r(Object(f.r)(s, n, i)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: i
						} = this.props;
						s(t ? Object(j.c)(n) : Object(f.n)(e, n, i))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: i
						} = this.props;
						return e ? s ? Object(j.e)(n) : Object(f.q)(t, n, i) : s ? Object(j.d)(n) : Object(f.p)(t, n, i)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(u.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(u.b, this.trackViewEvent)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(u.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(u.b, this.trackViewEvent)
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
						u = n.subscribers,
						m = Object(d.b)(u),
						f = Object(d.b)(r.accountsActive);
					return i.a.createElement("div", {
						className: Object(a.a)(v.a.subredditContainer, {
							[v.a.hideBottomBorder]: e
						})
					}, i.a.createElement("div", {
						className: v.a.subredditContent
					}, i.a.createElement("div", null, i.a.createElement(o.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, i.a.createElement(l.b, {
						subredditOrProfile: n,
						className: v.a.iconContainer
					}))), i.a.createElement("div", {
						className: v.a.subredditBodyWrapper
					}, i.a.createElement("div", {
						className: v.a.subredditBody,
						"data-click-id": "body"
					}, i.a.createElement(b.a, {
						className: v.a.subredditTitle,
						to: n.url,
						onClick: this.onSubredditClick
					}, n.displayText), i.a.createElement("div", null, i.a.createElement(p.a, {
						identifier: {
							name: n.name,
							type: h.a.SUBREDDIT
						},
						postId: n.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					}))), i.a.createElement("div", {
						className: v.a.subredditMeta
					}, S._({
						"*": "{number} members",
						_1: "1 member"
					}, [S._plural(u, "number", m)], {
						hk: "4yqFU9"
					})), s && i.a.createElement("div", {
						className: v.a.subredditMeta
					}, i.a.createElement(O.c, null), S._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [S._plural(r.accountsActive, "number", f)], {
						hk: "1oCA5j"
					})), t && c && i.a.createElement(o.a, {
						className: v.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, c))))
				}
			}
			t.a = _(Object(m.c)(C))
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
				a = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/uuid/v4.js"),
				u = s.n(d),
				l = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/makeListingKey/index.ts"),
				p = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeActionCreator/index.ts")),
				m = s("./src/reddit/actions/subredditMention/constants.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				O = s("./src/graphql/operations/SubredditsWithAboutInfo.json"),
				f = s("./src/reddit/featureFlags/index.ts"),
				j = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				g = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/subredditMention.ts");
			const y = Object(p.a)(m.d),
				_ = Object(p.a)(m.c),
				C = Object(p.a)(m.b),
				I = Object(p.a)(m.a),
				x = e => async (t, s, n) => {
					let {
						gqlContext: i
					} = n;
					const r = s(),
						o = Object(S.c)(r, {
							subredditName: e
						}),
						c = !!Object(v.B)(r, {
							subredditName: e
						}) && !!Object(v.y)(r, {
							subredditName: e
						}) || !!Object(v.db)(r, {
							subredditName: e
						}),
						a = Object(S.d)(r, {
							subredditName: e
						}),
						d = f.d.subredditMentionD2xExperiment(r);
					if (o || c && !a || !d) return;
					let u = !1;
					t(C({
						subredditName: e
					}));
					try {
						const s = await ((e, t) => Object(h.a)(e, Object.assign(Object.assign({}, O), {
							variables: t
						})))(i(), {
							subredditNames: [e]
						});
						if (s.ok && s.body) {
							const {
								data: n
							} = s.body, i = n.subredditsInfoByNames[0];
							if (Object(E.h)(i)) {
								const e = Object(g.f)(i);
								t(y({
									subreddits: {},
									subredditAboutInfo: {},
									unavailableSubreddits: {
										[e.id]: e
									}
								}))
							} else if (i && Object.keys(i).length > 0) {
								const e = Object(g.a)(i),
									s = Object(j.a)(i);
								t(y({
									subreddits: {
										[e.id]: e
									},
									subredditAboutInfo: s,
									unavailableSubreddits: {}
								}))
							}
							t(_({
								subredditName: e
							})), u = !0
						}
					} catch (l) {
						u = !1
					}
					u || t(I({
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
				L = s("./src/lib/classNames/index.ts"),
				w = s("./src/lib/prettyPrintNumber/index.ts"),
				D = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				B = s("./src/reddit/components/Thumbnail/index.tsx"),
				M = s("./src/reddit/helpers/overlay/index.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/components/SubredditMention/MiniPost/index.m.less"),
				A = s.n(U);
			const {
				fbt: q
			} = s("./node_modules/fbt/lib/FbtPublic.js"), F = Object(a.a)(e => e, R.O, R.d, (e, t, s) => {
				return {
					crosspost: s,
					post: t,
					subredditOrProfile: Object(v.M)(e, {
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
						className: Object(L.a)(A.a.container, e),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: A.a.postDetails
					}, o.a.createElement("p", {
						className: A.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && o.a.createElement(D.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), o.a.createElement("div", null, o.a.createElement("span", {
						className: A.a.meta
					}, q._({
						"*": "{number of comments} comments",
						_1: "1 comment"
					}, [q._plural(t.numComments, "number of comments", Object(w.b)(t.numComments))], {
						hk: "Wq9Sy"
					})))), o.a.createElement("div", {
						className: A.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(B.a, {
						post: t
					})))
				}
			}
			var K = Object(c.b)(F, (e, t) => ({
					openLightbox: t => e(Object(M.a)(t.permalink))
				}))(H),
				V = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/contexts/PageLayer/index.tsx")),
				z = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				G = s("./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less"),
				Q = s.n(G),
				W = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				};
			const J = Object(V.t)(),
				Y = Object(a.c)({
					isFakeSubreddit: V.x
				});
			var Z = J(Object(c.b)(Y)(e => {
					var {
						className: t,
						showSubreddit: s
					} = e, n = W(e, ["className", "showSubreddit"]);
					const i = Object(z.a)(n);
					return o.a.createElement("div", {
						className: Object(L.a)(A.a.container, t)
					}, o.a.createElement("div", {
						className: Q.a.mainBody
					}, o.a.createElement("div", {
						className: Q.a.content
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: Object(L.a)(Q.a.title, i)
					}), s && o.a.createElement("div", {
						className: Object(L.a)(Q.a.meta, i)
					})), o.a.createElement("div", {
						className: Q.a.flatlist
					}, o.a.createElement("div", {
						className: Object(L.a)(Q.a.flatlistExpando, i)
					}), o.a.createElement("div", {
						className: Q.a.flatlistSeparator
					}), o.a.createElement("div", {
						className: Object(L.a)(Q.a.flatlistItemOne, i)
					}), o.a.createElement("div", {
						className: Object(L.a)(Q.a.flatlistItemTwo, i)
					}))), o.a.createElement("div", {
						className: Q.a.thumbnailContainer
					}, o.a.createElement("div", {
						className: Object(L.a)(Q.a.thumbnail, i)
					}))))
				})),
				X = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				$ = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ee = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				te = s("./src/reddit/icons/svgs/Top/index.tsx"),
				se = s("./src/reddit/selectors/user.ts"),
				ne = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				ie = s.n(ne);
			const {
				fbt: re
			} = s("./node_modules/fbt/lib/FbtPublic.js"), oe = e => "".concat("subreddit-mention", "-").concat(e), ce = Object(a.c)({
				haveError: S.d,
				hideNSFWPref: se.A,
				isEmployee: se.F,
				isPending: S.c,
				postIds: S.f,
				subreddit: v.a,
				subredditAboutInfo: v.y
			}), ae = Object(c.b)(ce, (e, t) => {
				let {
					subredditName: s,
					isHoverable: n
				} = t;
				return {
					subredditDataRequested: t => e(x(t)),
					showTooltip: t => {
						e(Object(N.f)({
							tooltipId: t
						})), e(Object(T.d)(s))
					},
					onHideTooltip: () => e(Object(N.i)())
				}
			}), de = 600;
			class ue extends o.a.Component {
				constructor(e) {
					super(e), this.isRequestedOnceAlready = !1, this.onShowTooltip = () => {
						const e = oe(this.state.uniqueId);
						this.props.showTooltip(e), this.props.sendEvent(Object(ee.f)(this.props.subredditName)), this.props.postIds.map(e => this.props.sendEvent(Object(ee.g)(this.props.subredditName, e)))
					}, this.onClickPost = e => {
						this.props.sendEvent(Object(ee.b)(this.props.subredditName, e))
					}, this.handleScroll = i()(() => this.loadSubredditData && this.loadSubredditData(), l.G), this.loadSubredditData = () => {
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
						e(Object(ee.a)(Object.assign(Object.assign({}, t), {
							subredditName: s
						})))
					}, this.subredditMentionElement = o.a.createRef(), this.state = {
						uniqueId: "",
						isHoverable: !!this.props.isHoverable
					}
				}
				componentDidMount() {
					this.loadSubredditData(), this.setState({
						uniqueId: u()()
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
						className: ie.a.subredditMentionContainer,
						ref: this.subredditMentionElement,
						onClick: this.handleOnClick
					}, o.a.createElement(X.a, {
						href: "/r/".concat(e, "/")
					}, o.a.createElement("span", {
						className: ie.a.subredditIconContainer
					}, o.a.createElement(X.b, {
						subredditOrProfile: void 0
					})), "r/".concat(e)))
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
						subredditName: a
					} = this.props;
					if (!r || !c || Object(E.i)(r)) return this.renderDefault();
					const {
						uniqueId: d
					} = this.state, u = Object(b.a)(this.props.subredditName, l.O.TOP), p = r.isNSFW && e || r.type === E.e.EmployeesOnly && !t || r.type === E.e.Private && !c.userIsSubscriber, m = p || r.isQuarantined || r.isNSFW;
					return o.a.createElement("span", {
						className: ie.a.subredditMentionContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i,
						id: oe(d),
						onClick: this.handleOnClick,
						ref: this.subredditMentionElement
					}, o.a.createElement(X.a, {
						href: "/r/".concat(a, "/")
					}, o.a.createElement("span", {
						className: ie.a.subredditIconContainer
					}, o.a.createElement(X.b, {
						subredditOrProfile: p ? void 0 : r
					})), "r/".concat(a)), s && !m && o.a.createElement(k.a, {
						defaultTooltipPosition: "right",
						tooltipId: oe(d),
						tooltipSizeEstimate: {
							height: 290,
							width: 364
						}
					}, o.a.createElement("div", {
						className: ie.a.hovercardStyle
					}, o.a.createElement(P.a, {
						subredditId: r.id,
						subredditName: a,
						shouldHideBottomBorder: !0,
						shouldShowActiveUsers: !0,
						shouldShowDescription: !1,
						shouldUseSubredditMentionEvents: !0,
						listingKey: u,
						position: 0
					}), o.a.createElement("div", {
						className: ie.a.topPostsTitle
					}, o.a.createElement(te.a, {
						className: ie.a.top
					}), re._("Top posts of the last week", null, {
						hk: "37poFw"
					})), n.length > 0 ? n.map(e => o.a.createElement(K, {
						containerOnClick: this.onClickPost,
						key: e,
						postId: e,
						thumbnailOnClick: this.onClickPost
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(Z, {
						isLoading: !0
					}), o.a.createElement(Z, {
						isLoading: !0
					}), o.a.createElement(Z, {
						isLoading: !0
					})))))
				}
			}
			t.default = ae(Object($.c)(ue))
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
				SubscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				subscribeInternalButton: "QvUHhznbRVbKaK8dZGZVV",
				UnsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				unsubscribeButton: "_3gteUGkVlyl5VuSsNQJaz1",
				isLarge: "_2jGEuWB6HWtIbTjMG68OXY",
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA",
				unsubscribeButtonHoverStyles: "_1tZ_edPYFuF6jhuTr_iPEE",
				joinCleanupContent: "_3GS035a5A47X7LR9VSQYy6"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/reddit/components/SearchResultsContent/searchResultsPageTreatment/searchIgnoreClickContext.ts"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/contexts/Buttons2020.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				b = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				p = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				m = s.n(p),
				h = s("./src/lib/classNames/index.ts"),
				O = s("./src/lib/lessComponent.tsx");

			function f() {
				return (f = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			const g = O.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = j(e, ["small", "shouldReverseColor"]);
					const o = Object(r.b)(),
						c = s ? d.l : d.i;
					return i.a.createElement(c, f({}, n, {
						className: Object(h.a)(n.className, {
							[m.a.isLarge]: !t
						}),
						"data-ignore-click": !!o
					}))
				}, "SubscribeInternalButton", m.a),
				E = O.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, o = j(e, ["small", "belongsToType", "shouldReverseColor"]);
					const c = Object(r.b)(),
						a = n ? d.i : d.l;
					return i.a.createElement(a, f({}, o, {
						className: Object(h.a)(o.className, {
							[m.a.isLarge]: !t
						}),
						"data-ignore-click": !!c
					}))
				}, "UnsubscribeButton", m.a),
				v = O.a.wrapped(u.a, "Checkmark", m.a),
				S = O.a.wrapped(l.a, "Plus", m.a),
				y = O.a.div("ButtonSpacer", m.a);
			class _ extends i.a.Component {
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
					}, this.renderUnsubscribeButton = e => {
						const t = this.props,
							{
								className: s,
								identifier: n,
								onSubscribe: r,
								onUnsubscribe: o,
								postId: c,
								sendEvent: a,
								small: u = !1,
								size: l,
								userIsSubscriber: p,
								doNotHideOtherSubscribeButtons: O,
								getEventFactory: g,
								onSubscriptionsRequested: S
							} = t,
							y = j(t, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "size", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
							_ = this.state.isHovered,
							C = Object(b.a)({
								type: n.type,
								key: _ ? "unsubscribe" : "subscribed"
							});
						return e ? i.a.createElement(d.q, f({
							className: Object(h.a)(s, m.a.Button2020),
							priority: y.shouldReverseColor ? d.b.Primary : d.b.Secondary,
							Icon: u || !u && !_ ? v : void 0,
							text: !u && C,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: l || (u ? d.c.XS : d.c.S)
						}, y)) : i.a.createElement(E, f({
							className: Object(h.a)(s, {
								[m.a.isLarge]: !u,
								[m.a.unsubscribeButtonHoverStyles]: !u
							}),
							onClick: this.onClick,
							small: u,
							belongsToType: n.type,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}, y), u && i.a.createElement(v, null), !u && !_ && i.a.createElement(v, null), !u && C)
					}, this.renderSubscribeButton = e => {
						const t = this.props,
							{
								className: s,
								identifier: n,
								onSubscribe: r,
								onUnsubscribe: o,
								postId: c,
								sendEvent: a,
								small: u = !1,
								size: l,
								userIsSubscriber: p,
								doNotHideOtherSubscribeButtons: O,
								getEventFactory: E,
								onSubscriptionsRequested: v
							} = t,
							y = j(t, ["className", "identifier", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "size", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
							_ = Object(b.a)({
								type: n.type,
								key: "subscribe"
							});
						return e ? i.a.createElement(d.q, f({
							className: s,
							priority: y.shouldReverseColor ? d.b.Secondary : d.b.Primary,
							Icon: S,
							size: l || (u ? d.c.XS : d.c.S),
							text: !u && _,
							onClick: this.onClick
						}, y, {
							id: "subscribe-button-".concat(c),
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						})) : i.a.createElement(g, f({
							className: Object(h.a)(s, {
								[m.a.isLarge]: !u
							}),
							onClick: this.onClick,
							small: u
						}, y, {
							id: "subscribe-button-".concat(c),
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}), i.a.createElement(S, null), !u && _)
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
					return t ? this.state.hasJustSubscribed || s ? i.a.createElement(a.a.Consumer, null, this.renderUnsubscribeButton) : e ? null : i.a.createElement(y, null) : i.a.createElement(a.a.Consumer, null, this.renderSubscribeButton)
				}
			}
			t.a = Object(c.a)(Object(o.c)(_))
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
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(i.c)({
				userIsSubscriber: o.gb
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
				return b
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				a = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(a),
				u = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				};
			const l = o.a.span("metaText", d.a),
				b = e => r.a.createElement(l, e, " · "),
				p = e => {
					var {
						isScoreHidden: t,
						score: s,
						useUpvotes: i
					} = e, o = u(e, ["isScoreHidden", "score", "useUpvotes"]);
					const a = Object(c.b)(s),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(s, "number", a)], {
							hk: "2L3T21"
						}),
						b = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : i ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(s, "number", a)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, o, b)
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
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				c = e => Object(n.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return j
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "E", (function() {
				return _
			})), s.d(t, "F", (function() {
				return C
			})), s.d(t, "M", (function() {
				return x
			})), s.d(t, "B", (function() {
				return T
			})), s.d(t, "C", (function() {
				return N
			})), s.d(t, "D", (function() {
				return k
			})), s.d(t, "i", (function() {
				return P
			})), s.d(t, "w", (function() {
				return L
			})), s.d(t, "x", (function() {
				return w
			})), s.d(t, "L", (function() {
				return D
			})), s.d(t, "K", (function() {
				return B
			})), s.d(t, "I", (function() {
				return M
			})), s.d(t, "v", (function() {
				return R
			})), s.d(t, "y", (function() {
				return U
			})), s.d(t, "z", (function() {
				return A
			})), s.d(t, "A", (function() {
				return q
			})), s.d(t, "N", (function() {
				return F
			})), s.d(t, "J", (function() {
				return H
			})), s.d(t, "t", (function() {
				return K
			})), s.d(t, "H", (function() {
				return V
			})), s.d(t, "d", (function() {
				return z
			})), s.d(t, "c", (function() {
				return G
			})), s.d(t, "b", (function() {
				return Q
			})), s.d(t, "f", (function() {
				return W
			})), s.d(t, "e", (function() {
				return J
			})), s.d(t, "s", (function() {
				return X
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
				return ae
			})), s.d(t, "G", (function() {
				return de
			}));
			var n, i = s("./src/lib/stringInterpolate/index.ts"),
				r = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/helpers/trackers/searchResults.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				u = s("./src/reddit/models/Widgets/index.ts"),
				l = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				p = s("./src/reddit/selectors/widgets.ts"),
				m = s("./src/telemetry/index.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const h = "discovery_unit",
				O = (e, t, s) => Object.assign(Object.assign({}, b.defaults(e)), {
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
				f = (e, t, s) => Object.assign(Object.assign({}, O(e, t, s)), {
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				j = (e, t) => {
					Object(m.a)(g(t)(e))
				},
				g = (e, t) => s => f(s, e, t),
				E = (e, t, s, n) => "unitName" in t ? O(e, t, n) : ((e, t, s) => Object.assign(Object.assign({}, b.defaults(e)), {
					source: "search",
					screen: b.screen(e),
					search: s ? Object.assign(Object.assign({}, b.search(e, s)), {
						structureType: b.StructureType.Trending
					}) : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, s),
				v = (e, t, s, i, r) => Object.assign(Object.assign({}, E(e, t, i, r)), {
					action: "view",
					noun: n.ITEM_POST,
					post: b.post(e, s)
				}),
				S = e => {
					let {
						post: t,
						rawQuery: s,
						searchQuery: n
					} = e;
					return {
						displayQuery: decodeURIComponent(n),
						rawQuery: s ? decodeURIComponent(s) : void 0,
						structureType: t && t.isSponsored ? b.StructureType.PromotedTrend : b.StructureType.Trending
					}
				};
			var y;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(y || (y = {}));
			const _ = (e, t, s) => {
					Object(m.a)(I(e, t, s, o.c.CLICK))
				},
				C = (e, t, s) => {
					Object(m.a)(I(e, t, s, o.c.VIEW))
				},
				I = (e, t, s, n) => {
					const i = e.trending.models.filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + 1;
					return Object.assign(Object.assign({}, b.defaults(e)), {
						source: "search",
						action: n,
						noun: "trending",
						metaSearch: S(t),
						discoveryUnit: s === y.POPULAR_CAROUSEL ? {
							name: d.l,
							id: d.l,
							title: d.l,
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
					})
				},
				x = (e, t, s, n, i, r, c) => {
					Object(m.a)(Object.assign(Object.assign(Object.assign({}, b.defaults(e)), Object(a.e)(e, s, n, i, r, t)), {
						action: o.c.VIEW,
						noun: c ? "ad" : "post"
					}))
				},
				T = (e, t, s, n) => {
					Object(m.a)(v(e, t, s, n))
				},
				N = (e, t, s, n) => i => v(i, e, t, s, n),
				k = (e, t, s, i) => {
					const r = E(e, t, i);
					Object(m.a)(Object.assign(Object.assign(Object.assign({}, r), Object(p.b)(e, s)), {
						action: "view",
						noun: n.ITEM_SUBREDDIT
					}))
				},
				P = (e, t) => {
					Object(m.a)(Object.assign(Object.assign({}, O(e, t)), {
						source: h,
						action: o.c.CLICK,
						noun: "show_less_often"
					}))
				},
				L = (e, t, s, n) => {
					Object(m.a)(w(t, s, n)(e))
				},
				w = (e, t, s, i) => r => {
					const c = E(r, e, s, i);
					return Object.assign(Object.assign({}, c), {
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_POST,
						post: b.post(r, t)
					})
				},
				D = (e, t, s, n) => i => r => Object(a.e)(r, i, e, t, s, n),
				B = (e, t, s, n) => i => r => Object(a.d)(r, e, t, void 0, s, i, n),
				M = (e, t, s, n) => i => r => Object.assign(Object.assign({}, Object(a.e)(r, i, e, t, s, n)), {
					noun: "ad"
				}),
				R = (e, t) => s => i => Object.assign(Object.assign({}, e ? O(i, e, t) : {}), {
					source: h,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: b.post(i, s)
				}),
				U = (e, t, s, n) => {
					Object(m.a)(A(t, s, n)(e))
				},
				A = (e, t, s, n) => i => {
					const r = Object(l.c)(i, {
							postId: t
						}),
						c = r ? Object(p.b)(i, r) : void 0,
						a = E(i, e, s, n);
					return Object.assign(Object.assign(Object.assign({}, a), c), {
						source: h,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: b.post(i, t)
					})
				},
				q = (e, t, s) => n => i => {
					const r = Object(l.c)(i, {
							postId: t
						}),
						c = r ? Object(p.b)(i, r) : void 0,
						a = E(i, e, void 0, s);
					return Object.assign(Object.assign(Object.assign({}, a), c), {
						source: h,
						action: o.c.CLICK,
						noun: n ? "item_post_subreddit_unsubscribe" : "item_post_subreddit_subscribe",
						post: b.post(i, t)
					})
				},
				F = (e, t, s) => {
					const n = E(e, t);
					Object(m.a)(Object.assign(Object.assign(Object.assign({}, n), Object(p.b)(e, s)), {
						source: "search",
						action: o.c.CLICK,
						noun: "search_result_discovery_unit_subreddit"
					}))
				},
				H = (e, t, s, n, i, r) => {
					Object(m.a)(Object.assign(Object.assign({}, b.defaults(e)), Object(a.d)(e, t, s, n, i, void 0, r)))
				},
				K = (e, t, s) => {
					const n = E(e, t);
					Object(m.a)(Object.assign(Object.assign(Object.assign({}, n), Object(p.b)(e, s)), {
						source: h,
						action: o.c.CLICK,
						noun: "footer_subreddit"
					}))
				},
				V = (e, t) => s => {
					const n = Object(u.j)(t);
					return Object.assign(Object.assign(Object.assign({}, O(s, e, t)), Object(p.b)(s, n)), {
						source: h,
						action: o.c.CLICK,
						noun: "title_subreddit"
					})
				},
				z = (e, t) => s => Object.assign(Object.assign({}, O(s, e, t)), {
					action: "status",
					actionInfo: b.actionInfo(s, {
						success: !0
					}),
					noun: "loading"
				}),
				G = (e, t, s) => n => Object.assign(Object.assign({}, O(n, e, s)), {
					action: "status",
					actionInfo: b.actionInfo(n, {
						reason: t,
						success: !1
					}),
					noun: "loading"
				}),
				Q = (e, t) => s => Object.assign(Object.assign({}, O(s, e, t)), {
					action: "click",
					noun: "close"
				}),
				W = (e, t, s) => n => Object.assign(Object.assign({}, E(n, e, t, s)), {
					action: "click",
					noun: "scroll"
				}),
				J = (e, t) => s => Object.assign(Object.assign({}, O(s, e, t)), {
					action: "click",
					noun: "overflow_menu"
				}),
				Y = () => ({
					id: "xd_focus_verticals",
					unitType: d.f.Listing,
					experiment: "",
					title: r.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.d.Large,
					surface: d.e.Frontpage,
					url: "gql.reddit.com"
				}),
				Z = (e, t, s) => b.actionInfo(e, {
					position: s
				}),
				X = (e, t, s) => {
					const n = Y();
					return e => Object.assign(Object.assign({}, f(e, n)), {
						actionInfo: Z(e, 0, s),
						subreddit: b.subredditById(e, t)
					})
				},
				$ = (e, t, s) => {
					const n = Y();
					return e => Object.assign(Object.assign({}, v(e, n, t)), {
						actionInfo: Z(e, 0, s)
					})
				},
				ee = (e, t, s) => {
					const i = Y();
					return e => Object.assign(Object.assign({}, O(e, i)), {
						actionInfo: Z(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						source: h,
						action: o.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				te = (e, t, s) => {
					const i = Y();
					return e => Object.assign(Object.assign({}, O(e, i)), {
						actionInfo: Z(e, 0, s),
						post: b.post(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_POST
					})
				},
				se = (e, t, s, i) => {
					const r = Y();
					return e => Object.assign(Object.assign({}, O(e, r)), {
						actionInfo: Z(e, 0, i),
						subreddit: b.subredditById(e, s) || null,
						post: b.post(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_POST_SUBREDDIT
					})
				},
				ne = (e, t, s) => {
					const i = Y();
					return e => Object.assign(Object.assign({}, O(e, i)), {
						actionInfo: Z(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				ie = (e, t, s, i) => {
					const r = Y();
					return e => Object.assign(Object.assign({}, O(e, r)), {
						actionInfo: Z(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						post: i ? b.post(e, i) : null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				re = (e, t, s, i) => {
					const r = Y();
					return e => Object.assign(Object.assign({}, O(e, r)), {
						actionInfo: Z(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						post: i ? b.post(e, i) : null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				oe = (e, t, s) => {
					const i = Y();
					return e => Object.assign(Object.assign({}, O(e, i)), {
						actionInfo: Z(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_HIDE
					})
				},
				ce = (e, t, s) => {
					const i = Y();
					return e => Object.assign(Object.assign({}, O(e, i)), {
						actionInfo: Z(e, 0, s),
						subreddit: b.subredditById(e, t) || null,
						source: h,
						action: o.c.CLICK,
						noun: n.HEADER_SUBREDDIT
					})
				},
				ae = (e, t) => s => Object.assign(Object.assign(Object.assign({}, O(s, e)), t && Object(p.b)(s, t)), {
					source: h,
					action: o.c.CLICK,
					noun: "item"
				}),
				de = e => t => Object.assign(Object.assign({}, O(t, e)), {
					source: h,
					action: o.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.ea8da784bbefe06382b4.js.map