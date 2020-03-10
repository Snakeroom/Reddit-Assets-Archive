// https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.3185925e0e23247d0549.js
// Retrieved at 3/10/2020, 5:20:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditMentionWithIcon"], {
		"./src/graphql/operations/SubredditsWithAboutInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"f492118344c7"}')
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
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/fastdom/index.ts"),
				b = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				m = s("./src/reddit/components/ContentTooltip/index.m.less"),
				h = s.n(m);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			const f = {
					height: 200,
					width: 200
				},
				x = e => {
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
				g = Object(l.a)(e => {
					const {
						children: t,
						className: s,
						style: n,
						caretPosition: i,
						caretColor: o
					} = e, a = O(e, ["children", "className", "style", "caretPosition", "caretColor"]);
					return r.a.createElement("div", v({
						className: Object(d.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === i,
							[h.a.caretOnLeft]: "left" === i,
							[h.a.caretOnRight]: "right" === i,
							[h.a.caretOnBottom]: "bottom" === i
						}),
						style: Object.assign({}, n, {
							"--contentTooltip-caretColor": o && o[i] ? o[i] : Object(b.a)(e).body
						})
					}, a), t)
				}),
				y = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				j = Object(c.a)(g, [n.a.Click, n.a.Keydown]),
				E = Object(o.b)(y);
			class S extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = f
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
								position: i ? this.props.defaultTooltipPosition : x(this.props.defaultTooltipPosition)
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
					return r.a.createElement(j, v({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = E(S)
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
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				v = s("./src/reddit/controls/MetaData/index.tsx"),
				O = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				f = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				j = s.n(y);
			const E = Object(a.c)({
					subreddit: g.P,
					subredditAboutInfo: g.v
				}),
				S = Object(r.b)(E);
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
						e && t && !this.hasFiredViewEvent && (r(Object(O.q)(s, n, i)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: n,
							position: i
						} = this.props;
						s(t ? Object(O.m)(e, n, i) : Object(f.c)(n))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: n,
							position: i
						} = this.props;
						return e ? s ? Object(f.e)(n) : Object(O.p)(t, n, i) : s ? Object(f.d)(n) : Object(O.o)(t, n, i)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(l.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(l.b, this.trackViewEvent)
				}
				componentWillReceiveProps(e) {
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
					const a = r.publicDescription || "",
						l = n.subscribers,
						m = Object(d.b)(l),
						O = Object(d.b)(r.accountsActive);
					return i.a.createElement("div", {
						className: Object(c.a)(j.a.subredditContainer, {
							[j.a.hideBottomBorder]: e
						})
					}, i.a.createElement("div", {
						className: j.a.subredditContent
					}, i.a.createElement("div", null, i.a.createElement(o.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, i.a.createElement(u.b, {
						subredditOrProfile: n,
						className: j.a.iconContainer
					}))), i.a.createElement("div", {
						className: j.a.subredditBodyWrapper
					}, i.a.createElement("div", {
						className: j.a.subredditBody,
						"data-click-id": "body"
					}, i.a.createElement(b.a, {
						className: j.a.subredditTitle,
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
						className: j.a.subredditMeta
					}, i.a.createElement(x.c, null, "".concat(m, " member").concat(l > 1 ? "s" : ""))), s && i.a.createElement("div", {
						className: j.a.subredditMeta
					}, i.a.createElement(v.c, null), i.a.createElement(x.c, null, "".concat(O, " online"))), t && a && i.a.createElement(o.a, {
						className: j.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, a))))
				}
			}
			t.a = S(Object(m.b)(C))
		},
		"./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "_1lx-VnyEwPA6T0UuOGngGR",
				content: "kvsTXoIM6XzLx6P8wKYwK",
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
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/makeListingKey/index.ts"),
				p = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeActionCreator/index.ts")),
				m = s("./src/reddit/actions/subredditMention/constants.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				v = s("./src/graphql/operations/SubredditsWithAboutInfo.json"),
				O = s("./src/reddit/featureFlags/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/selectors/subredditMention.ts");
			const E = Object(p.a)(m.d),
				S = Object(p.a)(m.c),
				C = Object(p.a)(m.b),
				N = Object(p.a)(m.a),
				k = e => async (t, s, n) => {
					let {
						gqlContext: i
					} = n;
					const r = s(),
						o = Object(j.c)(r, {
							subredditName: e
						}),
						a = !!Object(y.y)(r, {
							subredditName: e
						}) && !!Object(y.v)(r, {
							subredditName: e
						}) || !!Object(y.Y)(r, {
							subredditName: e
						}),
						c = Object(j.d)(r, {
							subredditName: e
						}),
						d = O.d.subredditMentionD2xExperiment(r);
					if (o || a && !c || !d) return;
					let l = !1;
					t(C({
						subredditName: e
					}));
					try {
						const s = await ((e, t) => Object(h.a)(e, Object.assign({}, v, {
							variables: t
						})))(i(), {
							subredditNames: [e]
						});
						if (s.ok && s.body) {
							const {
								data: n
							} = s.body, i = n.subredditsInfoByNames[0];
							if (Object(g.f)(i)) {
								const e = Object(x.f)(i);
								t(E({
									subreddits: {},
									subredditAboutInfo: {},
									unavailableSubreddits: {
										[e.id]: e
									}
								}))
							} else if (i && Object.keys(i).length > 0) {
								const e = Object(x.a)(i),
									s = Object(f.a)(i);
								t(E({
									subreddits: {
										[e.id]: e
									},
									subredditAboutInfo: s,
									unavailableSubreddits: {}
								}))
							}
							t(S({
								subredditName: e
							})), l = !0
						}
					} catch (u) {
						l = !1
					}
					l || t(N({
						subredditName: e,
						error: {
							type: "Subreddit mention experiment GQL API failed or caught by try and catch!!"
						}
					}))
				};
			var w = s("./src/reddit/actions/subredditTopContent.ts"),
				P = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./src/reddit/components/ContentTooltip/index.tsx"),
				T = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.tsx"),
				I = s("./src/app/strings/index.ts"),
				L = s("./src/lib/classNames/index.ts"),
				M = s("./src/lib/prettyPrintNumber/index.ts"),
				B = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				D = s("./src/reddit/components/Thumbnail/index.tsx"),
				A = s("./src/reddit/helpers/overlay/index.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				R = s("./src/reddit/selectors/user.ts"),
				q = s("./src/reddit/components/SubredditMention/MiniPost/index.m.less"),
				F = s.n(q);
			const U = Object(c.a)(e => e, H.M, H.c, R.O, (e, t, s, n) => {
				return {
					crosspost: s,
					language: n,
					post: t,
					subredditOrProfile: Object(y.J)(e, {
						identifier: t.belongsTo
					})
				}
			});
			class V extends o.a.PureComponent {
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
						className: Object(L.a)(F.a.container, e),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: F.a.postDetails
					}, o.a.createElement("p", {
						className: F.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && o.a.createElement(B.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), o.a.createElement("div", null, o.a.createElement("span", {
						className: F.a.meta
					}, Object(I.b)(this.props.language, "posts.comments.noun", t.numComments, {
						count: Object(M.b)(t.numComments)
					})))), o.a.createElement("div", {
						className: F.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(D.a, {
						post: t
					})))
				}
			}
			var Q = Object(a.b)(U, (e, t) => ({
					openLightbox: t => e(Object(A.a)(t.permalink))
				}))(V),
				G = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/contexts/PageLayer/index.tsx")),
				W = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				z = s("./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less"),
				K = s.n(z),
				J = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				};
			const Y = Object(G.t)(),
				Z = Object(c.c)({
					isFakeSubreddit: G.x
				});
			var X = Y(Object(a.b)(Z)(e => {
					var {
						className: t,
						showSubreddit: s
					} = e, n = J(e, ["className", "showSubreddit"]);
					const i = Object(W.a)(n);
					return o.a.createElement("div", {
						className: Object(L.a)(F.a.container, t)
					}, o.a.createElement("div", {
						className: K.a.mainBody
					}, o.a.createElement("div", {
						className: K.a.content
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: Object(L.a)(K.a.title, i)
					}), s && o.a.createElement("div", {
						className: Object(L.a)(K.a.meta, i)
					})), o.a.createElement("div", {
						className: K.a.flatlist
					}, o.a.createElement("div", {
						className: Object(L.a)(K.a.flatlistExpando, i)
					}), o.a.createElement("div", {
						className: K.a.flatlistSeparator
					}), o.a.createElement("div", {
						className: Object(L.a)(K.a.flatlistItemOne, i)
					}), o.a.createElement("div", {
						className: Object(L.a)(K.a.flatlistItemTwo, i)
					}))), o.a.createElement("div", {
						className: K.a.thumbnailContainer
					}, o.a.createElement("div", {
						className: Object(L.a)(K.a.thumbnail, i)
					}))))
				})),
				$ = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				te = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				se = s("./src/reddit/i18n/components.tsx"),
				ne = s("./src/reddit/icons/svgs/Top/index.tsx"),
				ie = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				re = s.n(ie);
			const oe = e => "".concat("subreddit-mention", "-").concat(e),
				ae = Object(c.c)({
					haveError: j.d,
					hideNSFWPref: R.y,
					isEmployee: R.D,
					isPending: j.c,
					postIds: j.f,
					subreddit: y.a,
					subredditAboutInfo: y.v
				}),
				ce = Object(a.b)(ae, (e, t) => {
					let {
						subredditName: s,
						isHoverable: n
					} = t;
					return {
						subredditDataRequested: t => e(k(t)),
						showTooltip: t => {
							e(Object(P.f)({
								tooltipId: t
							})), e(Object(w.d)(s))
						},
						onHideTooltip: () => e(Object(P.i)())
					}
				}),
				de = 600;
			class le extends o.a.Component {
				constructor(e) {
					super(e), this.isRequestedOnceAlready = !1, this.onShowTooltip = () => {
						const e = oe(this.state.uniqueId);
						this.props.showTooltip(e), this.props.sendEvent(Object(te.f)(this.props.subredditName)), this.props.postIds.map(e => this.props.sendEvent(Object(te.g)(this.props.subredditName, e)))
					}, this.onClickPost = e => {
						this.props.sendEvent(Object(te.b)(this.props.subredditName, e))
					}, this.handleScroll = i()(() => this.loadSubredditData && this.loadSubredditData(), u.G), this.loadSubredditData = () => {
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
						e(Object(te.a)(Object.assign({}, t, {
							subredditName: s
						})))
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
						className: re.a.subredditMentionContainer,
						ref: this.subredditMentionElement,
						onClick: this.handleOnClick
					}, o.a.createElement($.a, {
						href: "/r/".concat(e, "/")
					}, o.a.createElement("span", {
						className: re.a.subredditIconContainer
					}, o.a.createElement($.b, {
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
						subredditAboutInfo: a,
						subredditName: c
					} = this.props;
					if (!r || !a || Object(g.g)(r)) return this.renderDefault();
					const {
						uniqueId: d
					} = this.state, l = Object(b.a)(this.props.subredditName, u.O.TOP), p = r.isNSFW && e || r.type === g.c.EmployeesOnly && !t || r.type === g.c.Private && !a.userIsSubscriber, m = p || r.isQuarantined || r.isNSFW;
					return o.a.createElement("span", {
						className: re.a.subredditMentionContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i,
						id: oe(d),
						onClick: this.handleOnClick,
						ref: this.subredditMentionElement
					}, o.a.createElement($.a, {
						href: "/r/".concat(c, "/")
					}, o.a.createElement("span", {
						className: re.a.subredditIconContainer
					}, o.a.createElement($.b, {
						subredditOrProfile: p ? void 0 : r
					})), "r/".concat(c)), s && !m && o.a.createElement(_.a, {
						defaultTooltipPosition: "right",
						tooltipId: oe(d),
						tooltipSizeEstimate: {
							height: 290,
							width: 364
						}
					}, o.a.createElement("div", {
						className: re.a.hovercardStyle
					}, o.a.createElement(T.a, {
						subredditId: r.id,
						subredditName: c,
						shouldHideBottomBorder: !0,
						shouldShowActiveUsers: !0,
						shouldShowDescription: !1,
						shouldUseSubredditMentionEvents: !0,
						listingKey: l,
						position: 0
					}), o.a.createElement("div", {
						className: re.a.topPostsTitle
					}, o.a.createElement(ne.a, {
						className: re.a.top
					}), o.a.createElement(se.c, null, "Top posts of the last week")), n.length > 0 ? n.map(e => o.a.createElement(Q, {
						containerOnClick: this.onClickPost,
						key: e,
						postId: e,
						thumbnailOnClick: this.onClickPost
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(X, {
						isLoading: !0
					}), o.a.createElement(X, {
						isLoading: !0
					}), o.a.createElement(X, {
						isLoading: !0
					})))))
				}
			}
			t.default = ce(Object(ee.b)(le))
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
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				l = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				u = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				b = s.n(u),
				p = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			const O = m.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = v(e, ["small", "shouldReverseColor"]);
					const r = s ? a.i : a.f;
					return i.a.createElement(r, h({}, n, {
						className: Object(p.a)(n.className, {
							[b.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", b.a),
				f = m.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, r = v(e, ["small", "belongsToType", "shouldReverseColor"]);
					const o = n ? a.f : a.i;
					return i.a.createElement(o, h({}, r, {
						className: Object(p.a)(r.className, {
							[b.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", b.a),
				x = m.a.wrapped(c.a, "Checkmark", b.a),
				g = m.a.wrapped(d.a, "Plus", b.a),
				y = m.a.div("ButtonSpacer", b.a);
			class j extends i.a.Component {
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
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const e = this.props,
						{
							className: t,
							identifier: s,
							language: n,
							onSubscribe: r,
							onUnsubscribe: o,
							postId: a,
							sendEvent: c,
							small: d = !1,
							userIsSubscriber: u,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: j,
							onSubscriptionsRequested: E
						} = e,
						S = v(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						C = this.state.isHovered;
					let N = u ? "subscribed" : "subscribe";
					u && C && (N = "unsubscribe");
					const k = Object(l.a)({
						type: s.type,
						key: N
					});
					return u ? this.state.hasJustSubscribed || m ? i.a.createElement(f, h({
						className: Object(p.a)(t, {
							[b.a.isLarge]: !d,
							[b.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, S), d && i.a.createElement(x, null), !d && !C && i.a.createElement(x, null), !d && k) : d ? null : i.a.createElement(y, null) : i.a.createElement(i.a.Fragment, null, i.a.createElement(O, h({
						className: Object(p.a)(t, {
							[b.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, S, {
						id: "subscribe-button-".concat(a),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), i.a.createElement(g, null), !d && k))
				}
			}
			t.a = Object(o.a)(Object(r.b)(j))
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
				o = s("./src/reddit/selectors/subreddit.ts"),
				a = s("./src/reddit/selectors/user.ts");
			t.a = Object(n.b)(() => Object(i.c)({
				language: a.O,
				userIsSubscriber: o.Z
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
				return b
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "d", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/app/strings/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/i18n/utils.ts")),
				d = s("./src/reddit/controls/MetaData/index.m.less"),
				l = s.n(d),
				u = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				};
			const b = o.a.span("metaText", l.a),
				p = e => i.a.createElement(b, e, " · "),
				m = Object(r.c)("comment.point"),
				h = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: n,
						useUpvotes: r
					} = e, o = u(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(a.b)(n),
						l = Object(c.c)("\n    ".concat(Object(c.b)("score", d), " ").concat(Object(c.a)("upvotes", ["upvote", "upvotes"], n), "\n  ")),
						p = t ? Object(c.c)("Score hidden") : r ? l : m(s, n, {
							count: d
						});
					return i.a.createElement(b, o, p)
				},
				v = (e, t) => {
					const s = Object(r.b)(t, "posts.comments.noun", e, {
						count: Object(a.b)(e)
					});
					return i.a.createElement(b, null, s)
				}
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
				a = e => Object(n.a)(r.a.loadingBar, o(e))
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
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				i = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Top/index.m.less"),
				a = s.n(o);
			t.a = e => i.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("g", null, i.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		}
	}
]);
//# sourceMappingURL=SubredditMentionWithIcon.3185925e0e23247d0549.js.map