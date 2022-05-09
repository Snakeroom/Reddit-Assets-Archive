// https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.9f7caf0dcc669b7001d1.js
// Retrieved at 5/9/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditMentionWithIcon"], {
		"./src/reddit/actions/subredditMention/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return o
			}));
			const n = "SUBREDDIT_MENTION_LOADED",
				r = "SUBREDDIT__MODEL_SUCCEEDED",
				i = "SUBREDDIT__MODEL_PENDING",
				o = "SUBREDDIT__MODEL_FAILED"
		},
		"./src/reddit/actions/subredditTopContent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "d", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/preferences.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				o = s("./src/redditGQL/operations/SubredditTopContent.json"),
				a = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const c = "SUBREDDIT_TOP_CONTENT__PENDING",
				d = "SUBREDDIT_TOP_CONTENT__LOADED",
				l = "SUBREDDIT_TOP_CONTENT__FAILED",
				u = Object(n.a)(c),
				b = Object(n.a)(d),
				m = Object(n.a)(l),
				p = e => async (t, s, n) => {
					const c = e.toLowerCase(),
						d = s(),
						{
							api: l,
							topContent: p
						} = d.subreddits;
					if (l.topContent.pending[c] || p[c]) return;
					t(u({
						subredditName: c
					})), t(Object(r.A)());
					const h = await ((e, t) => Object(i.a)(e, {
						...o,
						variables: t
					}))(n.gqlContext(), {
						subredditName: c
					});
					if (h.ok) {
						const e = h.body.data.subreddit;
						if (e) {
							const s = Object(a.c)(e);
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
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
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
				E = e => {
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
				x = Object(d.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: r,
						caretColor: o,
						onClick: a,
						hideCaret: d
					} = e;
					return i.a.createElement("div", {
						onClick: a,
						className: Object(c.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === r,
							[h.a.caretOnLeft]: "left" === r,
							[h.a.caretOnRight]: "right" === r,
							[h.a.caretOnBottom]: "bottom" === r,
							[h.a.hideCaret]: d
						}),
						style: {
							...n,
							"--contentTooltip-caretColor": o && o[r] ? o[r] : Object(b.a)(e).body
						}
					}, t)
				}),
				_ = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(m.b)(s)(e)
					}
				}),
				S = Object(u.a)(x, [n.a.Click, n.a.Keydown]),
				C = Object(o.b)(_);
			class v extends i.a.Component {
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
							let r = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									r = window.innerHeight - n.bottom > t.height;
									break;
								case "left":
									r = n.left > t.width;
									break;
								case "right":
									r = n.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									r = n.top > t.height
							}
							this.setState({
								position: r ? this.props.defaultTooltipPosition : E(this.props.defaultTooltipPosition)
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
					return i.a.createElement(S, f({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = C(v)
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
				r = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/MetaData/index.tsx"),
				O = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				E = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				S = s.n(_);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = Object(a.c)({
				subreddit: x.U,
				subredditAboutInfo: x.w
			}), y = Object(i.b)(v);
			class I extends r.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						const {
							subreddit: e,
							subredditAboutInfo: t,
							listingKey: s,
							subredditId: n,
							position: r,
							sendEvent: i
						} = this.props;
						e && t && !this.hasFiredViewEvent && (i(Object(O.l)(s, n, r)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: r
						} = this.props;
						s(t ? Object(E.c)(n) : Object(O.h)(e, n, r))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: r
						} = this.props;
						return e ? s ? Object(E.e)(n) : Object(O.k)(t, n, r) : s ? Object(E.d)(n) : Object(O.j)(t, n, r)
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
						subredditAboutInfo: i
					} = this.props;
					if (!n || !i) return null;
					const a = i.publicDescription || "",
						l = n.subscribers,
						p = Object(d.b)(l),
						O = Object(d.b)(i.accountsActive);
					return r.a.createElement("div", {
						className: Object(c.a)(S.a.subredditContainer, {
							[S.a.hideBottomBorder]: e
						})
					}, r.a.createElement("div", {
						className: S.a.subredditContent
					}, r.a.createElement("div", null, r.a.createElement(o.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, r.a.createElement(u.b, {
						subredditOrProfile: n,
						className: S.a.iconContainer
					}))), r.a.createElement("div", {
						className: S.a.subredditBodyWrapper
					}, r.a.createElement("div", {
						className: S.a.subredditBody,
						"data-click-id": "body"
					}, r.a.createElement(b.a, {
						className: S.a.subredditTitle,
						to: n.url,
						onClick: this.onSubredditClick
					}, n.displayText), r.a.createElement("div", null, r.a.createElement(m.a, {
						identifier: {
							name: n.name,
							type: h.a.SUBREDDIT
						},
						postId: n.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					}))), r.a.createElement("div", {
						className: S.a.subredditMeta
					}, C._({
						"*": "{number} members",
						_1: "1 member"
					}, [C._plural(l, "number", p)], {
						hk: "4yqFU9"
					})), s && r.a.createElement("div", {
						className: S.a.subredditMeta
					}, r.a.createElement(f.c, null), C._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [C._plural(i.accountsActive, "number", O)], {
						hk: "1oCA5j"
					})), t && a && r.a.createElement(o.a, {
						className: S.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, a))))
				}
			}
			t.a = y(Object(p.c)(I))
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				o = s("./src/reddit/constants/elementIds.ts"),
				a = s("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e, t) {
				const s = Object(i.a)(e, t);
				class n extends r.a.PureComponent {
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
						return r.a.createElement(s, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(n)
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
				r = s.n(n),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/makeListingKey/index.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeActionCreator/index.ts")),
				p = s("./src/reddit/actions/subredditMention/constants.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				f = s("./src/redditGQL/operations/SubredditsWithAboutInfo.json"),
				O = s("./src/reddit/featureFlags/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = s("./src/reddit/models/Subreddit/index.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/subredditMention.ts");
			const v = Object(m.a)(p.d),
				y = Object(m.a)(p.c),
				I = Object(m.a)(p.b),
				g = Object(m.a)(p.a),
				N = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					const i = s(),
						o = Object(C.c)(i, {
							subredditName: e
						}),
						a = !!Object(S.z)(i, {
							subredditName: e
						}) && !!Object(S.w)(i, {
							subredditName: e
						}) || !!Object(S.db)(i, {
							subredditName: e
						}),
						c = Object(C.d)(i, {
							subredditName: e
						}),
						d = O.d.subredditMentionD2xExperiment(i);
					if (o || a && !c || !d) return;
					let l = !1;
					t(I({
						subredditName: e
					}));
					try {
						const s = await ((e, t) => Object(h.a)(e, {
							...f,
							variables: t
						}))(r(), {
							subredditNames: [e]
						});
						if (s.ok && s.body) {
							const {
								data: n
							} = s.body, r = n.subredditsInfoByNames[0];
							if (Object(_.k)(r)) {
								const e = Object(x.f)(r);
								t(v({
									subreddits: {},
									subredditAboutInfo: {},
									unavailableSubreddits: {
										[e.id]: e
									}
								}))
							} else if (r && Object.keys(r).length > 0) {
								const e = Object(x.a)(r),
									s = Object(E.a)(r);
								t(v({
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
					l || t(g({
						subredditName: e,
						error: {
							type: "Subreddit mention experiment GQL API failed or caught by try and catch!!"
						}
					}))
				};
			var j = s("./src/reddit/actions/subredditTopContent.ts"),
				T = s("./src/reddit/actions/tooltip.ts"),
				k = s("./src/reddit/components/ContentTooltip/index.tsx"),
				P = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				D = s("./src/lib/classNames/index.ts"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				w = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				R = s("./src/reddit/helpers/overlay/index.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				A = s("./src/reddit/components/SubredditMention/MiniPost/index.m.less"),
				U = s.n(A);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = Object(c.a)(e => e, B.G, B.d, (e, t, s) => {
				return {
					crosspost: s,
					post: t,
					subredditOrProfile: Object(S.M)(e, {
						identifier: t.belongsTo
					})
				}
			});
			class q extends o.a.PureComponent {
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
						className: Object(D.a)(U.a.container, e),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: U.a.postDetails
					}, o.a.createElement("p", {
						className: U.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && o.a.createElement(w.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), o.a.createElement("div", null, o.a.createElement("span", {
						className: U.a.meta
					}, F._({
						"*": "{number of comments} comments",
						_1: "1 comment"
					}, [F._plural(t.numComments, "number of comments", Object(L.b)(t.numComments))], {
						hk: "Wq9Sy"
					})))), o.a.createElement("div", {
						className: U.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(M.a, {
						post: t
					})))
				}
			}
			var W = Object(a.b)(H, (e, t) => ({
					openLightbox: t => e(Object(R.a)(t.permalink))
				}))(q),
				K = s("./src/reddit/contexts/PageLayer/index.tsx"),
				V = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				G = s("./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less"),
				Q = s.n(G);
			const z = Object(K.u)(),
				J = Object(c.c)({
					isFakeSubreddit: K.z
				});
			var Y = z(Object(a.b)(J)(e => {
					let {
						className: t,
						showSubreddit: s,
						...n
					} = e;
					const r = Object(V.a)(n);
					return o.a.createElement("div", {
						className: Object(D.a)(U.a.container, t)
					}, o.a.createElement("div", {
						className: Q.a.mainBody
					}, o.a.createElement("div", {
						className: Q.a.content
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: Object(D.a)(Q.a.title, r)
					}), s && o.a.createElement("div", {
						className: Object(D.a)(Q.a.meta, r)
					})), o.a.createElement("div", {
						className: Q.a.flatlist
					}, o.a.createElement("div", {
						className: Object(D.a)(Q.a.flatlistExpando, r)
					}), o.a.createElement("div", {
						className: Q.a.flatlistSeparator
					}), o.a.createElement("div", {
						className: Object(D.a)(Q.a.flatlistItemOne, r)
					}), o.a.createElement("div", {
						className: Object(D.a)(Q.a.flatlistItemTwo, r)
					}))), o.a.createElement("div", {
						className: Q.a.thumbnailContainer
					}, o.a.createElement("div", {
						className: Object(D.a)(Q.a.thumbnail, r)
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
				fbt: re
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ie = e => `subreddit-mention-${e}`, oe = Object(c.c)({
				haveError: C.d,
				hideNSFWPref: te.F,
				isEmployee: te.M,
				isPending: C.c,
				postIds: C.f,
				subreddit: S.a,
				subredditAboutInfo: S.w
			}), ae = Object(a.b)(oe, (e, t) => {
				let {
					subredditName: s,
					isHoverable: n
				} = t;
				return {
					subredditDataRequested: t => e(N(t)),
					showTooltip: t => {
						e(Object(T.f)({
							tooltipId: t
						})), e(Object(j.d)(s))
					},
					onHideTooltip: () => e(Object(T.i)())
				}
			}), ce = 600;
			class de extends o.a.Component {
				constructor(e) {
					super(e), this.isRequestedOnceAlready = !1, this.onShowTooltip = () => {
						const e = ie(this.state.uniqueId);
						this.props.showTooltip(e), this.props.sendEvent(Object($.f)(this.props.subredditName)), this.props.postIds.map(e => this.props.sendEvent(Object($.g)(this.props.subredditName, e)))
					}, this.onClickPost = e => {
						this.props.sendEvent(Object($.b)(this.props.subredditName, e))
					}, this.handleScroll = r()(() => this.loadSubredditData && this.loadSubredditData(), u.K), this.loadSubredditData = () => {
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
						onHideTooltip: r,
						subreddit: i,
						subredditAboutInfo: a,
						subredditName: c
					} = this.props;
					if (!i || !a || Object(_.l)(i)) return this.renderDefault();
					const {
						uniqueId: d
					} = this.state, l = Object(b.a)(this.props.subredditName, u.W.TOP), m = i.isNSFW && e || i.type === _.g.EmployeesOnly && !t || i.type === _.g.Private && !a.userIsSubscriber, p = m || i.isQuarantined || i.isNSFW;
					return o.a.createElement("span", {
						className: ne.a.subredditMentionContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: r,
						id: ie(d),
						onClick: this.handleOnClick,
						ref: this.subredditMentionElement
					}, o.a.createElement(X.a, {
						href: `/r/${c}/`
					}, o.a.createElement("span", {
						className: ne.a.subredditIconContainer
					}, o.a.createElement(X.b, {
						subredditOrProfile: m ? void 0 : i
					})), `r/${c}`), s && !p && o.a.createElement(k.a, {
						defaultTooltipPosition: "right",
						tooltipId: ie(d),
						tooltipSizeEstimate: {
							height: 290,
							width: 364
						}
					}, o.a.createElement("div", {
						className: ne.a.hovercardStyle
					}, o.a.createElement(P.a, {
						subredditId: i.id,
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
					}), re._("Top posts of the last week", null, {
						hk: "37poFw"
					})), n.length > 0 ? n.map(e => o.a.createElement(W, {
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
			t.default = ae(Object(Z.c)(de))
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
				r = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				i = s.n(r);
			const o = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", i.a);
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
				r = s.n(n),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = s.n(d);

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
			class m extends r.a.Component {
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
							postId: i,
							sendEvent: o,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: m,
							onSubscriptionsRequested: p,
							...h
						} = this.props, f = this.state.isHovered, O = Object(c.a)({
							type: t.type,
							key: f ? "unsubscribe" : "subscribed"
						});
						return r.a.createElement(a.t, u({
							className: e,
							priority: h.shouldReverseColor ? a.c.Primary : a.c.Secondary,
							text: O,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: a.d.XSP
						}, h))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: i,
							sendEvent: o,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: m,
							onSubscriptionsRequested: p,
							...h
						} = this.props, f = Object(c.a)({
							type: t.type,
							key: "subscribe"
						});
						return r.a.createElement(a.t, u({
							className: e,
							priority: h.shouldReverseColor ? a.c.Secondary : a.c.Primary,
							size: a.d.XSP,
							text: f,
							onClick: this.onClick
						}, h, {
							id: `subscribe-button-${i}`,
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
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : r.a.createElement(b, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(o.a)(Object(i.c)(m))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				i = {
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
					return i[r({
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
				return P
			}));
			var n = s("./src/lib/isUrl/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				l = s("./src/reddit/components/ImageWithFallback/index.tsx"),
				u = s("./src/reddit/controls/ContentType/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				p = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Theme/index.ts"),
				f = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				O = s("./src/telemetry/models/Outbound.ts"),
				E = s("./src/reddit/components/Thumbnail/index.m.less"),
				x = s.n(E);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => e.placeholderImage || Object(f.a)(e).placeholderImage,
				C = e => e.placeholderImage ? "cover" : Object(f.a)(e).placeholderImagePosition,
				v = c.a.span("LinkText", x.a),
				y = e => {
					let {
						className: t,
						onClick: s,
						children: n
					} = e;
					return i.a.createElement("div", {
						onClick: s,
						className: Object(o.a)(x.a.linkIcon, t)
					}, n)
				},
				I = e => i.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(x.a.hiddenImage, e.className)
				}),
				g = e => {
					const t = i.a.createRef(),
						{
							src: s,
							errorSrc: n
						} = e;
					return s && n && Object(l.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${n})`)
					}), i.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(o.a)(x.a.thumbnail, x.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(f.a)(e).button : Object(f.a)(e).line
						}
					}, e.isOutbound && i.a.createElement(y, {
						className: e.linkIconClassName
					}, i.a.createElement(m.a, {
						className: Object(o.a)(x.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && i.a.createElement(v, {
						className: e.linkTextClassName
					}, e.text)), i.a.createElement(I, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				N = e => e.isOutbound ? Object(f.a)(e).button : e.placeholderImage ? "transparent" : Object(f.a)(e).line,
				j = e => {
					const t = S(e),
						s = t && {
							background: Object(h.g)(Object(f.a)(e).placeholder, t, C(e))
						};
					return i.a.createElement("div", {
						className: Object(o.a)(x.a.thumbnail, x.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: N(e)
						}
					}, (!e.placeholderImage || e.showContentType) && i.a.createElement(u.a, {
						className: Object(o.a)(e.contentTypeClassName, x.a.contentType, {
							[x.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && i.a.createElement(y, {
						className: e.linkIconClassName
					}, i.a.createElement(m.a, {
						className: Object(o.a)(x.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && i.a.createElement(v, {
						className: e.linkTextClassName
					}, e.text)))
				},
				T = e => i.a.createElement(g, _({}, e, {
					className: Object(o.a)(x.a.blurredThumbnail, e.className)
				})),
				k = Object(a.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: r,
						crosspost: a,
						forceShowNSFW: c,
						isCommentsPage: d,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: m,
						outboundLinkIconClassName: h,
						post: f,
						redditStyle: E,
						removeLink: _,
						showContentType: C,
						templatePlaceholderImage: v,
						text: y,
						theme: I,
						usePreview: g
					} = e, N = !I.subredditContext.shouldShowNSFWContent && (f.isNSFW || !(!a || !a.isNSFW)) && !c, j = S({
						placeholderImage: v,
						redditStyle: E,
						theme: I
					}), T = P(e), k = d ? O.SourceElement.PostImage : O.SourceElement.ListingPostImage, D = L(f, t, j, N, y, I, T, l, C, _, E, u, m, h, r), w = Object(p.D)(f);
					return Object(n.a)(w) && !_ && w.indexOf("redditmedia") < 0 ? i.a.createElement("div", {
						className: Object(o.a)(x.a.container, g ? x.a.usePreview : "", s)
					}, i.a.createElement(b.b, {
						href: Object(p.D)(f),
						isSponsored: f.isSponsored,
						postId: f.id,
						source: f.source,
						sourceElement: k
					}, D)) : i.a.createElement("div", {
						className: Object(o.a)(x.a.container, g ? x.a.usePreview : "", s)
					}, D)
				}),
				P = e => {
					let {
						crosspost: t,
						post: s,
						url: n,
						usePreview: r
					} = e;
					if (n) return n;
					const {
						preview: i,
						media: o,
						thumbnail: a
					} = t || s;
					return r && i ? i.url : s.isSponsored && i && "default" === a.url ? i.url : D(o) ? o.scrubberThumbSource : a.url
				},
				D = e => !!e && e.type === p.o.LIVEVIDEO,
				L = (e, t, s, r, a, c, l, u, b, m, p, h, f, O, E) => {
					const S = (e => e.source && !e.isSponsored || !1)(e);
					if (Object(n.a)(l)) {
						const s = D(e.media),
							n = s ? {
								errorSrc: d.U
							} : {},
							u = Object(o.a)(t, {
								[x.a.verticallyCenterThumbnail]: s
							});
						return r ? i.a.createElement(T, _({
							"data-click-id": "image",
							src: l
						}, n, {
							className: u,
							isOutbound: S && !m,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: O,
							redditStyle: p,
							text: a,
							theme: c
						})) : i.a.createElement(g, _({
							alt: e.title,
							className: u,
							src: l
						}, n, {
							isOutbound: S && !m,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: O,
							redditStyle: p,
							text: a,
							theme: c
						}))
					}
					return i.a.createElement(j, {
						className: t,
						contentTypeClassName: E,
						placeholderImage: s,
						isMeta: u,
						isOutbound: S && !m,
						linkIconClassName: h,
						linkTextClassName: f,
						outboundLinkIconClassName: O,
						redditStyle: p,
						showContentType: b,
						text: a,
						theme: c,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = k
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(r.c)({
				userIsSubscriber: o.gb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(i.d([s], !0)),
					onSubscriptionsRequested: () => e(i.f()),
					onUnsubscribe: () => e(i.d([s], !1))
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
				r = s.n(n),
				i = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/constants/icons.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/constants/elementClassNames.ts"),
				d = s("./src/reddit/controls/ContentType/index.m.less"),
				l = s.n(d);
			const u = e => Object(i.a)(l.a.contentTypeIcon, e.className),
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
				return r.a.createElement(a.a, {
					name: s,
					className: Object(i.a)({
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
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(c);
			const l = o.a.span("metaText", d.a),
				u = e => i.a.createElement(l, e, " · "),
				b = e => {
					let {
						isScoreHidden: t,
						score: s,
						useUpvotes: r,
						...o
					} = e;
					const c = Object(a.b)(s),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(s, "number", c)], {
							hk: "2L3T21"
						}),
						u = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : r ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(s, "number", c)], {
							hk: "gf67v"
						});
					return i.a.createElement(l, o, u)
				},
				m = e => i.a.createElement(l, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(a.b)(e))], {
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
				return a
			}));
			var n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				i = s.n(r);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(n.a)(i.a.loadingBackground, {
						[i.a["m-loading"]]: t
					})
				},
				a = e => Object(n.a)(i.a.loadingBar, o(e))
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "u", (function() {
				return N
			})), s.d(t, "v", (function() {
				return j
			})), s.d(t, "A", (function() {
				return D
			})), s.d(t, "s", (function() {
				return L
			})), s.d(t, "t", (function() {
				return w
			})), s.d(t, "c", (function() {
				return M
			})), s.d(t, "p", (function() {
				return R
			})), s.d(t, "q", (function() {
				return B
			})), s.d(t, "z", (function() {
				return A
			})), s.d(t, "y", (function() {
				return U
			})), s.d(t, "x", (function() {
				return F
			})), s.d(t, "o", (function() {
				return H
			})), s.d(t, "r", (function() {
				return q
			})), s.d(t, "m", (function() {
				return G
			})), s.d(t, "g", (function() {
				return Q
			})), s.d(t, "l", (function() {
				return z
			})), s.d(t, "e", (function() {
				return J
			})), s.d(t, "f", (function() {
				return Y
			})), s.d(t, "h", (function() {
				return X
			})), s.d(t, "j", (function() {
				return Z
			})), s.d(t, "k", (function() {
				return $
			})), s.d(t, "i", (function() {
				return ee
			})), s.d(t, "d", (function() {
				return te
			})), s.d(t, "n", (function() {
				return se
			})), s.d(t, "w", (function() {
				return ne
			}));
			var n, r = s("./src/lib/stringInterpolate/index.ts"),
				i = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				a = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				c = s("./src/reddit/helpers/trackers/searchResults.ts"),
				d = (s("./src/reddit/helpers/widgets/index.tsx"), s("./src/reddit/models/DiscoveryUnit/index.ts")),
				l = s("./src/reddit/models/Search/index.ts"),
				u = s("./src/reddit/selectors/experiments/serpSIIDs.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				m = s("./src/reddit/selectors/telemetry.ts"),
				p = s("./src/reddit/selectors/trending.ts"),
				h = s("./src/reddit/selectors/widgets.ts"),
				f = s("./src/telemetry/index.ts"),
				O = s("./src/reddit/helpers/search/searchImpressionId.ts");
			! function(e) {
				e.HEADER_SUBREDDIT = "header_subreddit", e.ITEM_POST = "item_post", e.ITEM_POST_SUBREDDIT = "item_post_subreddit", e.ITEM_SUBREDDIT = "item_subreddit", e.ITEM_SUBREDDIT_HIDE = "item_subreddit_hide", e.ITEM_SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.ITEM_SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe", e.TRENDING = "trending"
			}(n || (n = {}));
			const E = "discovery_unit",
				x = (e, t, s) => ({
					...m.n(e),
					source: E,
					screen: m.Y(e),
					discoveryUnit: {
						id: t.id,
						type: t.unitType,
						title: t.title && s ? Object(r.a)(t.title, {
							subredditName: s.name
						}) : t.title,
						name: t.unitName
					}
				}),
				_ = (e, t, s) => ({
					...x(e, t, s),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				S = (e, t) => {
					Object(f.a)(C(t)(e))
				},
				C = (e, t) => s => _(s, e, t),
				v = (e, t, s, n) => "unitName" in t ? x(e, t, n) : ((e, t, s) => ({
					...m.n(e),
					source: "search",
					screen: m.Y(e),
					search: s ? {
						...m.Z(e, s, a.a.SERP),
						structureType: m.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, s),
				y = (e, t, s, r, i) => ({
					...v(e, t, r, i),
					action: "view",
					noun: n.ITEM_POST,
					post: m.H(e, s)
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
						structureType: t && t.isSponsored ? m.c.PromotedTrend : m.c.Trending
					}
				};
			var g;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(g || (g = {}));
			const N = e => {
					Object(f.a)(P({
						...e,
						action: o.c.CLICK
					}))
				},
				j = e => {
					Object(f.a)(P({
						...e,
						action: o.c.VIEW
					}))
				},
				T = {
					[a.a.Popular]: g.POPULAR_CAROUSEL,
					[a.a.Typeahead]: g.SEARCH_DROPDOWN
				},
				k = {
					[a.a.Popular]: l.d.tile,
					[a.a.Typeahead]: l.d.dropdown
				},
				P = e => {
					let {
						action: t,
						offset: s = 0,
						state: r,
						telemetrySource: i,
						trendingSearch: o
					} = e;
					const a = T[i],
						c = k[i],
						l = Object(p.a)(r, c).filter(e => !e.post || !(e.post.isSponsored && e.post.isBlank)).findIndex(e => e.id === o.id) + s;
					return {
						...m.n(r),
						source: "search",
						action: t,
						noun: n.TRENDING,
						metaSearch: I(o),
						discoveryUnit: a === g.POPULAR_CAROUSEL ? {
							name: d.k,
							id: d.k,
							title: d.k,
							type: "query"
						} : void 0,
						actionInfo: m.d(r, {
							paneName: a,
							position: l
						}),
						search: {
							originElement: a === g.SEARCH_DROPDOWN ? "search_dropdown" : void 0,
							originPageType: r.platform.currentPage ? m.u(r.platform.currentPage) : void 0,
							query: o.rawQuery,
							structureType: m.c.Trending,
							impressionId: Object(u.a)(r) ? O.a.get(i) : void 0,
							queryId: m.ab(r, i)
						}
					}
				},
				D = (e, t, s, n, r, i, a) => {
					Object(f.a)({
						...m.n(e),
						...Object(c.l)({
							state: e,
							postId: s,
							searchOptions: n,
							pageLayer: r,
							key: i,
							discoveryUnit: t
						}),
						action: o.c.VIEW,
						noun: a ? "ad" : "post"
					})
				},
				L = (e, t, s, n) => {
					Object(f.a)(y(e, t, s, n))
				},
				w = (e, t, s, n) => r => y(r, e, t, s, n),
				M = (e, t) => {
					Object(f.a)({
						...x(e, t),
						source: E,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				R = (e, t, s, n) => {
					Object(f.a)(B(t, s, n)(e))
				},
				B = (e, t, s, r) => i => {
					return {
						...v(i, e, s, r),
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_POST,
						post: m.H(i, t)
					}
				},
				A = function() {
					for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
					return e => Object(c.r)(e, ...t)
				},
				U = (e, t, s, n) => r => i => Object(c.j)({
					action: o.c.CLICK,
					state: i,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: s,
					postId: r,
					discoveryUnit: n
				}),
				F = function() {
					for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
					return e => s => ({
						...A(...t)(e)(s),
						noun: "ad"
					})
				},
				H = (e, t) => s => r => ({
					...e ? x(r, e, t) : {},
					source: E,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: m.H(r, s)
				}),
				q = (e, t, s, n) => {
					Object(f.a)(W(t, s, n)(e))
				},
				W = (e, t, s, n) => r => {
					const i = Object(b.c)(r, {
							postId: t
						}),
						a = i ? Object(h.b)(r, i) : void 0;
					return {
						...v(r, e, s, n),
						...a,
						source: E,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: m.H(r, t)
					}
				},
				K = () => ({
					id: "xd_focus_verticals",
					unitType: d.e.Listing,
					experiment: "",
					title: i.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.c.Large,
					surface: d.d.Frontpage,
					url: "gql.reddit.com"
				}),
				V = (e, t, s) => m.d(e, {
					position: s
				}),
				G = (e, t, s) => {
					const n = K();
					return e => ({
						..._(e, n),
						actionInfo: V(e, 0, s),
						subreddit: m.hb(e, t)
					})
				},
				Q = (e, t, s) => {
					const n = K();
					return e => ({
						...y(e, n, t),
						actionInfo: V(e, 0, s)
					})
				},
				z = (e, t, s) => {
					const r = K();
					return e => ({
						...x(e, r),
						actionInfo: V(e, 0, s),
						subreddit: m.hb(e, t) || null,
						source: E,
						action: o.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				J = (e, t, s) => {
					const r = K();
					return e => ({
						...x(e, r),
						actionInfo: V(e, 0, s),
						post: m.H(e, t) || null,
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_POST
					})
				},
				Y = (e, t, s, r) => {
					const i = K();
					return e => ({
						...x(e, i),
						actionInfo: V(e, 0, r),
						subreddit: m.hb(e, s) || null,
						post: m.H(e, t) || null,
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_POST_SUBREDDIT
					})
				},
				X = (e, t, s) => {
					const r = K();
					return e => ({
						...x(e, r),
						actionInfo: V(e, 0, s),
						subreddit: m.hb(e, t) || null,
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				Z = (e, t, s, r) => {
					const i = K();
					return e => ({
						...x(e, i),
						actionInfo: V(e, 0, s),
						subreddit: m.hb(e, t) || null,
						post: r ? m.H(e, r) : null,
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				$ = (e, t, s, r) => {
					const i = K();
					return e => ({
						...x(e, i),
						actionInfo: V(e, 0, s),
						subreddit: m.hb(e, t) || null,
						post: r ? m.H(e, r) : null,
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				ee = (e, t, s) => {
					const r = K();
					return e => ({
						...x(e, r),
						actionInfo: V(e, 0, s),
						subreddit: m.hb(e, t) || null,
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_HIDE
					})
				},
				te = (e, t, s) => {
					const r = K();
					return e => ({
						...x(e, r),
						actionInfo: V(e, 0, s),
						subreddit: m.hb(e, t) || null,
						source: E,
						action: o.c.CLICK,
						noun: n.HEADER_SUBREDDIT
					})
				},
				se = (e, t) => s => ({
					...x(s, e),
					...t && Object(h.b)(s, t),
					source: E,
					action: o.c.CLICK,
					noun: "item"
				}),
				ne = e => t => ({
					...x(t, e),
					source: E,
					action: o.c.CLICK,
					noun: "see_all"
				})
		},
		"./src/reddit/icons/fonts/OutboundLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(i.b)("external_link",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/selectors/trending.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			const n = e => Object.keys(e.trending.models).reduce((t, s) => [...t, ...e.trending.models[s]], []),
				r = (e, t) => e.trending.models[t] || []
		},
		"./src/redditGQL/operations/SubredditTopContent.json": function(e) {
			e.exports = JSON.parse('{"id":"d5f4502401d3"}')
		},
		"./src/redditGQL/operations/SubredditsWithAboutInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"c00c334e43d3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.9f7caf0dcc669b7001d1.js.map