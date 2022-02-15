// https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.c007d83d707d43c72edf.js
// Retrieved at 2/15/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
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
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "d", (function() {
				return p
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/preferences.ts"),
				r = s("./src/lib/makeGqlRequest/index.ts"),
				o = s("./src/redditGQL/operations/SubredditTopContent.json"),
				c = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const a = "SUBREDDIT_TOP_CONTENT__PENDING",
				d = "SUBREDDIT_TOP_CONTENT__LOADED",
				l = "SUBREDDIT_TOP_CONTENT__FAILED",
				u = Object(n.a)(a),
				b = Object(n.a)(d),
				m = Object(n.a)(l),
				p = e => async (t, s, n) => {
					const a = e.toLowerCase(),
						d = s(),
						{
							api: l,
							topContent: p
						} = d.subreddits;
					if (l.topContent.pending[a] || p[a]) return;
					t(u({
						subredditName: a
					})), t(Object(i.A)());
					const h = await ((e, t) => Object(r.a)(e, {
						...o,
						variables: t
					}))(n.gqlContext(), {
						subredditName: a
					});
					if (h.ok) {
						const e = h.body.data.subreddit;
						if (e) {
							const s = Object(c.c)(e);
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
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
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
				S = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: i,
						caretColor: o,
						onClick: c,
						...a
					} = e;
					return r.a.createElement("div", f({
						onClick: c,
						className: Object(d.a)(s, h.a.StyledTooltipContainer, {
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
				_ = Object(c.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(m.b)(t)(e)
				}),
				x = Object(a.a)(S, [n.a.Click, n.a.Keydown]),
				C = Object(o.b)(_);
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
								position: i ? this.props.defaultTooltipPosition : E(this.props.defaultTooltipPosition)
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
			t.a = C(I)
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
				l = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/controls/MetaData/index.tsx"),
				O = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				E = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				x = s.n(_);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), I = Object(c.c)({
				subreddit: S.R,
				subredditAboutInfo: S.t
			}), v = Object(r.b)(I);
			class N extends i.a.Component {
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
						s(t ? Object(E.c)(n) : Object(O.i)(e, n, i))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: i
						} = this.props;
						return e ? s ? Object(E.e)(n) : Object(O.l)(t, n, i) : s ? Object(E.d)(n) : Object(O.k)(t, n, i)
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
						p = Object(d.b)(l),
						O = Object(d.b)(r.accountsActive);
					return i.a.createElement("div", {
						className: Object(a.a)(x.a.subredditContainer, {
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
					}, C._({
						"*": "{number} members",
						_1: "1 member"
					}, [C._plural(l, "number", p)], {
						hk: "4yqFU9"
					})), s && i.a.createElement("div", {
						className: x.a.subredditMeta
					}, i.a.createElement(f.c, null), C._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [C._plural(r.accountsActive, "number", O)], {
						hk: "1oCA5j"
					})), t && c && i.a.createElement(o.a, {
						className: x.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, c))))
				}
			}
			t.a = v(Object(p.c)(N))
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
				l = s.n(d),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/makeListingKey/index.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeActionCreator/index.ts")),
				p = s("./src/reddit/actions/subredditMention/constants.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				f = s("./src/redditGQL/operations/SubredditsWithAboutInfo.json"),
				O = s("./src/reddit/featureFlags/index.ts"),
				E = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				_ = s("./src/reddit/models/Subreddit/index.ts"),
				x = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/selectors/subredditMention.ts");
			const I = Object(m.a)(p.d),
				v = Object(m.a)(p.c),
				N = Object(m.a)(p.b),
				y = Object(m.a)(p.a),
				j = e => async (t, s, {
					gqlContext: n
				}) => {
					const i = s(),
						r = Object(C.c)(i, {
							subredditName: e
						}),
						o = !!Object(x.w)(i, {
							subredditName: e
						}) && !!Object(x.t)(i, {
							subredditName: e
						}) || !!Object(x.ab)(i, {
							subredditName: e
						}),
						c = Object(C.d)(i, {
							subredditName: e
						}),
						a = O.d.subredditMentionD2xExperiment(i);
					if (r || o && !c || !a) return;
					let d = !1;
					t(N({
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
							if (Object(_.j)(i)) {
								const e = Object(S.f)(i);
								t(I({
									subreddits: {},
									subredditAboutInfo: {},
									unavailableSubreddits: {
										[e.id]: e
									}
								}))
							} else if (i && Object.keys(i).length > 0) {
								const e = Object(S.a)(i),
									s = Object(E.a)(i);
								t(I({
									subreddits: {
										[e.id]: e
									},
									subredditAboutInfo: s,
									unavailableSubreddits: {}
								}))
							}
							t(v({
								subredditName: e
							})), d = !0
						}
					} catch (l) {
						d = !1
					}
					d || t(y({
						subredditName: e,
						error: {
							type: "Subreddit mention experiment GQL API failed or caught by try and catch!!"
						}
					}))
				};
			var T = s("./src/reddit/actions/subredditTopContent.ts"),
				k = s("./src/reddit/actions/tooltip.ts"),
				g = s("./src/reddit/components/ContentTooltip/index.tsx"),
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), H = Object(a.a)(e => e, B.G, B.d, (e, t, s) => {
				return {
					crosspost: s,
					post: t,
					subredditOrProfile: Object(x.J)(e, {
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
			var W = Object(c.b)(H, (e, t) => ({
					openLightbox: t => e(Object(R.a)(t.permalink))
				}))(q),
				K = s("./src/reddit/contexts/PageLayer/index.tsx"),
				V = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				G = s("./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less"),
				J = s.n(G);
			const Q = Object(K.u)(),
				z = Object(a.c)({
					isFakeSubreddit: K.z
				});
			var Y = Q(Object(c.b)(z)(({
					className: e,
					showSubreddit: t,
					...s
				}) => {
					const n = Object(V.a)(s);
					return o.a.createElement("div", {
						className: Object(D.a)(A.a.container, e)
					}, o.a.createElement("div", {
						className: J.a.mainBody
					}, o.a.createElement("div", {
						className: J.a.content
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: Object(D.a)(J.a.title, n)
					}), t && o.a.createElement("div", {
						className: Object(D.a)(J.a.meta, n)
					})), o.a.createElement("div", {
						className: J.a.flatlist
					}, o.a.createElement("div", {
						className: Object(D.a)(J.a.flatlistExpando, n)
					}), o.a.createElement("div", {
						className: J.a.flatlistSeparator
					}), o.a.createElement("div", {
						className: Object(D.a)(J.a.flatlistItemOne, n)
					}), o.a.createElement("div", {
						className: Object(D.a)(J.a.flatlistItemTwo, n)
					}))), o.a.createElement("div", {
						className: J.a.thumbnailContainer
					}, o.a.createElement("div", {
						className: Object(D.a)(J.a.thumbnail, n)
					}))))
				})),
				Z = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				X = s("./src/reddit/components/TrackingHelper/index.tsx"),
				$ = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				ee = s("./src/reddit/icons/svgs/Top/index.tsx"),
				te = s("./src/reddit/selectors/user.ts"),
				se = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				ne = s.n(se);
			const {
				fbt: ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), re = e => `subreddit-mention-${e}`, oe = Object(a.c)({
				haveError: C.d,
				hideNSFWPref: te.C,
				isEmployee: te.H,
				isPending: C.c,
				postIds: C.f,
				subreddit: x.a,
				subredditAboutInfo: x.t
			}), ce = Object(c.b)(oe, (e, {
				subredditName: t,
				isHoverable: s
			}) => ({
				subredditDataRequested: t => e(j(t)),
				showTooltip: s => {
					e(Object(k.f)({
						tooltipId: s
					})), e(Object(T.d)(t))
				},
				onHideTooltip: () => e(Object(k.i)())
			})), ae = 600;
			class de extends o.a.Component {
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
					}, o.a.createElement(Z.a, {
						href: `/r/${e}/`
					}, o.a.createElement("span", {
						className: ne.a.subredditIconContainer
					}, o.a.createElement(Z.b, {
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
						subredditName: a
					} = this.props;
					if (!r || !c || Object(_.k)(r)) return this.renderDefault();
					const {
						uniqueId: d
					} = this.state, l = Object(b.a)(this.props.subredditName, u.W.TOP), m = r.isNSFW && e || r.type === _.f.EmployeesOnly && !t || r.type === _.f.Private && !c.userIsSubscriber, p = m || r.isQuarantined || r.isNSFW;
					return o.a.createElement("span", {
						className: ne.a.subredditMentionContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i,
						id: re(d),
						onClick: this.handleOnClick,
						ref: this.subredditMentionElement
					}, o.a.createElement(Z.a, {
						href: `/r/${a}/`
					}, o.a.createElement("span", {
						className: ne.a.subredditIconContainer
					}, o.a.createElement(Z.b, {
						subredditOrProfile: m ? void 0 : r
					})), `r/${a}`), s && !p && o.a.createElement(g.a, {
						defaultTooltipPosition: "right",
						tooltipId: re(d),
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
			t.default = ce(Object(X.c)(de))
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
				a = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
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
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: m,
							onSubscriptionsRequested: p,
							...h
						} = this.props, f = this.state.isHovered, O = Object(a.a)({
							type: t.type,
							key: f ? "unsubscribe" : "subscribed"
						});
						return i.a.createElement(c.t, u({
							className: e,
							priority: h.shouldReverseColor ? c.c.Primary : c.c.Secondary,
							text: O,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: c.d.XSP
						}, h))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: o,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: m,
							onSubscriptionsRequested: p,
							...h
						} = this.props, f = Object(a.a)({
							type: t.type,
							key: "subscribe"
						});
						return i.a.createElement(c.t, u({
							className: e,
							priority: h.shouldReverseColor ? c.c.Secondary : c.c.Primary,
							size: c.d.XSP,
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
				return P
			})), s.d(t, "c", (function() {
				return L
			}));
			var n = s("./src/lib/isUrl/index.ts"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
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
				S = s.n(E);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = e => e.placeholderImage || Object(f.a)(e).placeholderImage,
				C = e => e.placeholderImage ? "cover" : Object(f.a)(e).placeholderImagePosition,
				I = a.a.span("LinkText", S.a),
				v = ({
					className: e,
					onClick: t,
					children: s
				}) => r.a.createElement("div", {
					onClick: t,
					className: Object(o.a)(S.a.linkIcon, e)
				}, s),
				N = e => r.a.createElement("img", {
					alt: e.alt,
					className: Object(o.a)(S.a.hiddenImage, e.className)
				}),
				y = e => {
					const t = r.a.createRef(),
						{
							src: s,
							errorSrc: n
						} = e;
					return s && n && Object(l.a)(s).catch(() => {
						t.current && (t.current.style.backgroundImage = `url(${n})`)
					}), r.a.createElement("div", {
						"aria-label": e.alt,
						className: Object(o.a)(S.a.thumbnail, S.a.imageThumbnail, e.className),
						"data-click-id": "image",
						ref: t,
						role: "img",
						style: {
							backgroundImage: `url(${e.src})`,
							borderColor: e.isOutbound ? Object(f.a)(e).button : Object(f.a)(e).line
						}
					}, e.isOutbound && r.a.createElement(v, {
						className: e.linkIconClassName
					}, r.a.createElement(m.a, {
						className: Object(o.a)(S.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && r.a.createElement(I, {
						className: e.linkTextClassName
					}, e.text)), r.a.createElement(N, {
						alt: e.alt,
						className: "hiddenImg"
					}))
				},
				j = e => e.isOutbound ? Object(f.a)(e).button : e.placeholderImage ? "transparent" : Object(f.a)(e).line,
				T = e => {
					const t = x(e),
						s = t && {
							background: Object(h.g)(Object(f.a)(e).placeholder, t, C(e))
						};
					return r.a.createElement("div", {
						className: Object(o.a)(S.a.thumbnail, S.a.placeholderThumbnail, e.className),
						"data-click-id": "image",
						style: {
							...s,
							borderColor: j(e)
						}
					}, (!e.placeholderImage || e.showContentType) && r.a.createElement(u.a, {
						className: Object(o.a)(e.contentTypeClassName, S.a.contentType, {
							[S.a.hasType]: e.type && !e.isOutbound
						}),
						type: e.isMeta || e.isPoll ? "meta" : e.type
					}), e.isOutbound && r.a.createElement(v, {
						className: e.linkIconClassName
					}, r.a.createElement(m.a, {
						className: Object(o.a)(S.a.outboundLinkIcon, e.outboundLinkIconClassName),
						isFilled: !0
					}), e.text && r.a.createElement(I, {
						className: e.linkTextClassName
					}, e.text)))
				},
				k = e => r.a.createElement(y, _({}, e, {
					className: Object(o.a)(S.a.blurredThumbnail, e.className)
				})),
				g = Object(c.a)(e => {
					const {
						className: t,
						containerClassName: s,
						contentTypeClassName: i,
						crosspost: c,
						forceShowNSFW: a,
						isCommentsPage: d,
						isMeta: l,
						linkIconClassName: u,
						linkTextClassName: m,
						outboundLinkIconClassName: h,
						post: f,
						redditStyle: E,
						removeLink: _,
						showContentType: C,
						templatePlaceholderImage: I,
						text: v,
						theme: N,
						usePreview: y
					} = e, j = !N.subredditContext.shouldShowNSFWContent && (f.isNSFW || !(!c || !c.isNSFW)) && !a, T = x({
						placeholderImage: I,
						redditStyle: E,
						theme: N
					}), k = P(e), g = d ? O.SourceElement.PostImage : O.SourceElement.ListingPostImage, D = w(f, t, T, j, v, N, k, l, C, _, E, u, m, h, i), L = Object(p.D)(f);
					return Object(n.a)(L) && !_ && L.indexOf("redditmedia") < 0 ? r.a.createElement("div", {
						className: Object(o.a)(S.a.container, y ? S.a.usePreview : "", s)
					}, r.a.createElement(b.b, {
						href: Object(p.D)(f),
						isSponsored: f.isSponsored,
						postId: f.id,
						source: f.source,
						sourceElement: g
					}, D)) : r.a.createElement("div", {
						className: Object(o.a)(S.a.container, y ? S.a.usePreview : "", s)
					}, D)
				}),
				P = ({
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
					return n && i ? i.url : t.isSponsored && i && "default" === o.url ? i.url : D(r) ? r.scrubberThumbSource : o.url
				},
				D = e => !!e && e.type === p.o.LIVEVIDEO,
				L = e => e.source && !e.isSponsored || !1,
				w = (e, t, s, i, c, a, l, u, b, m, p, h, f, O, E) => {
					const x = L(e);
					if (Object(n.a)(l)) {
						const s = D(e.media),
							n = s ? {
								errorSrc: d.U
							} : {},
							u = Object(o.a)(t, {
								[S.a.verticallyCenterThumbnail]: s
							});
						return i ? r.a.createElement(k, _({
							"data-click-id": "image",
							src: l
						}, n, {
							className: u,
							isOutbound: x && !m,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: O,
							redditStyle: p,
							text: c,
							theme: a
						})) : r.a.createElement(y, _({
							alt: e.title,
							className: u,
							src: l
						}, n, {
							isOutbound: x && !m,
							linkIconClassName: h,
							linkTextClassName: f,
							outboundLinkIconClassName: O,
							redditStyle: p,
							text: c,
							theme: a
						}))
					}
					return r.a.createElement(T, {
						className: t,
						contentTypeClassName: E,
						placeholderImage: s,
						isMeta: u,
						isOutbound: x && !m,
						linkIconClassName: h,
						linkTextClassName: f,
						outboundLinkIconClassName: O,
						redditStyle: p,
						showContentType: b,
						text: c,
						theme: a,
						type: e.media ? e.media.type : null,
						isPoll: !!e.pollData
					})
				};
			t.a = g
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
		"./src/reddit/controls/ContentType/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/constants/icons.ts"),
				c = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/constants/elementClassNames.ts"),
				d = s("./src/reddit/controls/ContentType/index.m.less"),
				l = s.n(d);
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
				return i.a.createElement(c.a, {
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
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				a = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(a);
			const l = o.a.span("metaText", d.a),
				u = e => r.a.createElement(l, e, " · "),
				b = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: s,
					...i
				}) => {
					const o = Object(c.b)(t),
						a = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "2L3T21"
						}),
						d = e ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : s ? a : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(t, "number", o)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, i, d)
				},
				m = e => r.a.createElement(l, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(c.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/trackers/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return C
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "v", (function() {
				return j
			})), s.d(t, "w", (function() {
				return T
			})), s.d(t, "B", (function() {
				return g
			})), s.d(t, "t", (function() {
				return P
			})), s.d(t, "u", (function() {
				return D
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "q", (function() {
				return w
			})), s.d(t, "r", (function() {
				return M
			})), s.d(t, "A", (function() {
				return R
			})), s.d(t, "z", (function() {
				return B
			})), s.d(t, "y", (function() {
				return U
			})), s.d(t, "p", (function() {
				return A
			})), s.d(t, "s", (function() {
				return F
			})), s.d(t, "n", (function() {
				return K
			})), s.d(t, "h", (function() {
				return V
			})), s.d(t, "m", (function() {
				return G
			})), s.d(t, "f", (function() {
				return J
			})), s.d(t, "g", (function() {
				return Q
			})), s.d(t, "i", (function() {
				return z
			})), s.d(t, "k", (function() {
				return Y
			})), s.d(t, "l", (function() {
				return Z
			})), s.d(t, "j", (function() {
				return X
			})), s.d(t, "e", (function() {
				return $
			})), s.d(t, "o", (function() {
				return ee
			})), s.d(t, "x", (function() {
				return te
			}));
			var n, i = s("./src/lib/stringInterpolate/index.ts"),
				r = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				o = (s("./src/reddit/constants/categories.tsx"), s("./src/reddit/constants/tracking.ts")),
				c = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				a = s("./src/reddit/helpers/trackers/searchResults.ts"),
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
				S = (e, t, s) => ({
					...m.o(e),
					source: E,
					screen: m.bb(e),
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
					...S(e, t, s),
					source: "global",
					action: "view",
					noun: "discovery_unit"
				}),
				x = (e, t) => {
					Object(f.a)(C(t)(e))
				},
				C = (e, t) => s => _(s, e, t),
				I = (e, t, s, n) => "unitName" in t ? S(e, t, n) : ((e, t, s) => ({
					...m.o(e),
					source: "search",
					screen: m.bb(e),
					search: s ? {
						...m.cb(e, s, c.a.SERP),
						structureType: m.c.Trending
					} : null,
					discoveryUnit: {
						id: t.name,
						type: "listing",
						title: t.layout.title,
						name: t.name
					}
				}))(e, t, s),
				v = (e, t, s, i, r) => ({
					...I(e, t, i, r),
					action: "view",
					noun: n.ITEM_POST,
					post: m.J(e, s)
				}),
				N = ({
					post: e,
					rawQuery: t,
					searchQuery: s
				}) => ({
					displayQuery: decodeURIComponent(s),
					rawQuery: t ? decodeURIComponent(t) : void 0,
					structureType: e && e.isSponsored ? m.c.PromotedTrend : m.c.Trending
				});
			var y;
			! function(e) {
				e.POPULAR_CAROUSEL = "popular_carousel", e.SEARCH_DROPDOWN = "search_dropdown"
			}(y || (y = {}));
			const j = (e, t, s, n, i = 0) => {
					Object(f.a)(k(e, t, s, o.c.CLICK, i, n))
				},
				T = (e, t, s, n, i = 0) => {
					Object(f.a)(k(e, t, s, o.c.VIEW, i, n))
				},
				k = (e, t, s, i, r, o) => {
					const a = Object(p.a)(e, o).filter(e => !e.post || !e.post.isSponsored).findIndex(e => e.id === t.id) + r;
					return {
						...m.o(e),
						source: "search",
						action: i,
						noun: n.TRENDING,
						metaSearch: N(t),
						discoveryUnit: s === y.POPULAR_CAROUSEL ? {
							name: d.k,
							id: d.k,
							title: d.k,
							type: "query"
						} : void 0,
						actionInfo: m.d(e, {
							paneName: s,
							position: a
						}),
						search: {
							originPageType: e.platform.currentPage ? m.w(e.platform.currentPage) : void 0,
							query: t.rawQuery,
							structureType: m.c.Trending,
							impressionId: Object(u.a)(e) ? O.a.get(c.a.Typeahead) : void 0,
							queryId: m.db(e, o === l.d.dropdown ? c.a.Typeahead : c.a.SERP)
						}
					}
				},
				g = (e, t, s, n, i, r, c) => {
					Object(f.a)({
						...m.o(e),
						...Object(a.j)(e, s, n, i, r, t),
						action: o.c.VIEW,
						noun: c ? "ad" : "post"
					})
				},
				P = (e, t, s, n) => {
					Object(f.a)(v(e, t, s, n))
				},
				D = (e, t, s, n) => i => v(i, e, t, s, n),
				L = (e, t) => {
					Object(f.a)({
						...S(e, t),
						source: E,
						action: o.c.CLICK,
						noun: "show_less_often"
					})
				},
				w = (e, t, s, n) => {
					Object(f.a)(M(t, s, n)(e))
				},
				M = (e, t, s, i) => r => {
					return {
						...I(r, e, s, i),
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_POST,
						post: m.J(r, t)
					}
				},
				R = (e, t, s, n) => i => r => Object(a.j)(r, i, e, t, s, n),
				B = (e, t, s, n) => i => r => Object(a.h)({
					action: o.c.CLICK,
					state: r,
					searchOptions: e,
					pageLayer: t,
					subredditOrProfileIdentifier: void 0,
					key: s,
					postId: i,
					discoveryUnit: n
				}),
				U = (e, t, s, n) => i => r => ({
					...Object(a.j)(r, i, e, t, s, n),
					noun: "ad"
				}),
				A = (e, t) => s => i => ({
					...e ? S(i, e, t) : {},
					source: E,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: m.J(i, s)
				}),
				F = (e, t, s, n) => {
					Object(f.a)(H(t, s, n)(e))
				},
				H = (e, t, s, n) => i => {
					const r = Object(b.c)(i, {
							postId: t
						}),
						c = r ? Object(h.b)(i, r) : void 0;
					return {
						...I(i, e, s, n),
						...c,
						source: E,
						action: o.c.CLICK,
						noun: "item_post_subreddit",
						post: m.J(i, t)
					}
				},
				q = () => ({
					id: "xd_focus_verticals",
					unitType: d.e.Listing,
					experiment: "",
					title: r.a,
					unitName: "focused_vertical_suggestion",
					enabled: !1,
					layout: d.c.Large,
					surface: d.d.Frontpage,
					url: "gql.reddit.com"
				}),
				W = (e, t, s) => m.d(e, {
					position: s
				}),
				K = (e, t, s) => {
					const n = q();
					return e => ({
						..._(e, n),
						actionInfo: W(e, 0, s),
						subreddit: m.kb(e, t)
					})
				},
				V = (e, t, s) => {
					const n = q();
					return e => ({
						...v(e, n, t),
						actionInfo: W(e, 0, s)
					})
				},
				G = (e, t, s) => {
					const i = q();
					return e => ({
						...S(e, i),
						actionInfo: W(e, 0, s),
						subreddit: m.kb(e, t) || null,
						source: E,
						action: o.c.VIEW,
						noun: n.ITEM_SUBREDDIT
					})
				},
				J = (e, t, s) => {
					const i = q();
					return e => ({
						...S(e, i),
						actionInfo: W(e, 0, s),
						post: m.J(e, t) || null,
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_POST
					})
				},
				Q = (e, t, s, i) => {
					const r = q();
					return e => ({
						...S(e, r),
						actionInfo: W(e, 0, i),
						subreddit: m.kb(e, s) || null,
						post: m.J(e, t) || null,
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_POST_SUBREDDIT
					})
				},
				z = (e, t, s) => {
					const i = q();
					return e => ({
						...S(e, i),
						actionInfo: W(e, 0, s),
						subreddit: m.kb(e, t) || null,
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT
					})
				},
				Y = (e, t, s, i) => {
					const r = q();
					return e => ({
						...S(e, r),
						actionInfo: W(e, 0, s),
						subreddit: m.kb(e, t) || null,
						post: i ? m.J(e, i) : null,
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_SUBSCRIBE
					})
				},
				Z = (e, t, s, i) => {
					const r = q();
					return e => ({
						...S(e, r),
						actionInfo: W(e, 0, s),
						subreddit: m.kb(e, t) || null,
						post: i ? m.J(e, i) : null,
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_UNSUBSCRIBE
					})
				},
				X = (e, t, s) => {
					const i = q();
					return e => ({
						...S(e, i),
						actionInfo: W(e, 0, s),
						subreddit: m.kb(e, t) || null,
						source: E,
						action: o.c.CLICK,
						noun: n.ITEM_SUBREDDIT_HIDE
					})
				},
				$ = (e, t, s) => {
					const i = q();
					return e => ({
						...S(e, i),
						actionInfo: W(e, 0, s),
						subreddit: m.kb(e, t) || null,
						source: E,
						action: o.c.CLICK,
						noun: n.HEADER_SUBREDDIT
					})
				},
				ee = (e, t) => s => ({
					...S(s, e),
					...t && Object(h.b)(s, t),
					source: E,
					action: o.c.CLICK,
					noun: "item"
				}),
				te = e => t => ({
					...S(t, e),
					source: E,
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
			e.exports = JSON.parse('{"id":"fa475bbf7616"}')
		},
		"./src/redditGQL/operations/SubredditsWithAboutInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"9abcb34d531c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.c007d83d707d43c72edf.js.map