// https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.0da2132431fcdce7c00e.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditMentionWithIcon"], {
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
			var i = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const v = {
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
				E = Object(c.a)(e => {
					const {
						children: t,
						className: s,
						style: i,
						caretPosition: n,
						caretColor: o,
						onClick: d,
						hideCaret: c
					} = e;
					return r.a.createElement("div", {
						onClick: d,
						className: Object(a.a)(s, h.a.StyledTooltipContainer, {
							[h.a.caretOnTop]: "top" === n,
							[h.a.caretOnLeft]: "left" === n,
							[h.a.caretOnRight]: "right" === n,
							[h.a.caretOnBottom]: "bottom" === n,
							[h.a.hideCaret]: c
						}),
						style: {
							...i,
							"--contentTooltip-caretColor": o && o[n] ? o[n] : Object(b.a)(e).body
						}
					}, t)
				}),
				O = Object(d.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(m.b)(s)(e)
					}
				}),
				x = Object(u.a)(E, [i.a.Click, i.a.Keydown]),
				y = Object(o.b)(O);
			class g extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = v
						} = this.props;
						l.a.read(() => {
							const s = document.getElementById(e);
							if (!s) return;
							const i = s.getBoundingClientRect();
							if (!("undefined" != typeof window)) return void this.setState({
								position: this.props.defaultTooltipPosition
							});
							let n = !0;
							switch (this.props.defaultTooltipPosition) {
								case "bottom":
									n = window.innerHeight - i.bottom > t.height;
									break;
								case "left":
									n = i.left > t.width;
									break;
								case "right":
									n = i.right <= window.innerWidth - t.width;
									break;
								case "top":
								default:
									n = i.top > t.height
							}
							this.setState({
								position: n ? this.props.defaultTooltipPosition : S(this.props.defaultTooltipPosition)
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
						caretPosition: i
					} = this.getPositions(e);
					return r.a.createElement(x, f({}, this.props, {
						caretPosition: i,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = y(g)
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
			var i = s("./node_modules/lodash/debounce.js"),
				n = s.n(i),
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
				v = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				S = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/subredditMention.ts");
			const y = Object(b.a)(m.d),
				g = Object(b.a)(m.c),
				j = Object(b.a)(m.b),
				C = Object(b.a)(m.a),
				_ = e => async (t, s, i) => {
					let {
						gqlContext: n
					} = i;
					const r = s(),
						o = Object(x.c)(r, {
							subredditName: e
						}),
						d = !!Object(O.C)(r, {
							subredditName: e
						}) && !!Object(O.z)(r, {
							subredditName: e
						}) || !!Object(O.gb)(r, {
							subredditName: e
						}),
						a = Object(x.d)(r, {
							subredditName: e
						}),
						c = f.d.subredditMentionD2xExperiment(r);
					if (o || d && !a || !c) return;
					let l = !1;
					t(j({
						subredditName: e
					}));
					try {
						const s = await ((e, t) => Object(p.a)(e, {
							...h,
							variables: t
						}))(n(), {
							subredditNames: [e]
						});
						if (s.ok && s.body) {
							const {
								data: i
							} = s.body, n = i.subredditsInfoByNames[0];
							if (Object(E.k)(n)) {
								const e = Object(S.f)(n);
								t(y({
									subreddits: {},
									subredditAboutInfo: {},
									unavailableSubreddits: {
										[e.id]: e
									}
								}))
							} else if (n && Object.keys(n).length > 0) {
								const e = Object(S.a)(n),
									s = Object(v.a)(n);
								t(y({
									subreddits: {
										[e.id]: e
									},
									subredditAboutInfo: s,
									unavailableSubreddits: {}
								}))
							}
							t(g({
								subredditName: e
							})), l = !0
						}
					} catch (u) {
						l = !1
					}
					l || t(C({
						subredditName: e,
						error: {
							type: "Subreddit mention experiment GQL API failed or caught by try and catch!!"
						}
					}))
				};
			var k = s("./src/reddit/actions/subredditTopContent.ts"),
				N = s("./src/reddit/actions/tooltip.ts"),
				P = s("./src/reddit/components/ContentTooltip/index.tsx"),
				w = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				L = s("./src/lib/classNames/index.ts"),
				I = s("./src/lib/prettyPrintNumber/index.ts"),
				T = s("./src/reddit/actions/focusedVerticals/constants.ts"),
				M = s("./src/reddit/components/SubredditIcon/index.tsx"),
				A = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				B = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				F = s("./src/reddit/constants/posts.ts"),
				q = s("./src/reddit/controls/MetaData/index.tsx"),
				H = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				R = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				U = s("./src/reddit/components/DiscoveryUnit/CommunityCrossPollination/SubredditItem/index.m.less"),
				z = s.n(U);
			const {
				fbt: V
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Q = Object(a.c)({
				subreddit: O.X,
				subredditAboutInfo: O.z
			});
			class W extends o.a.Component {
				constructor() {
					super(...arguments), this.hasFiredViewEvent = !1, this.trackViewEvent = () => {
						const {
							subreddit: e,
							subredditAboutInfo: t,
							listingKey: s,
							subredditId: i,
							position: n,
							sendEvent: r
						} = this.props;
						e && t && !this.hasFiredViewEvent && (r(Object(H.g)(s, i, n)), this.hasFiredViewEvent = !0)
					}, this.onSubredditClick = () => {
						const {
							listingKey: e,
							shouldUseSubredditMentionEvents: t,
							sendEvent: s,
							subredditId: i,
							position: n
						} = this.props;
						s(t ? Object(R.c)(i) : Object(H.d)(e, i, n))
					}, this.getSubscribeEventFactory = e => {
						const {
							listingKey: t,
							shouldUseSubredditMentionEvents: s,
							subredditId: i,
							position: n
						} = this.props;
						return e ? s ? Object(R.e)(i) : Object(H.f)(t, i, n) : s ? Object(R.d)(i) : Object(H.e)(t, i, n)
					}
				}
				componentDidMount() {
					this.props.pubsub && this.props.pubsub.addListeners(T.b, this.trackViewEvent)
				}
				componentWillUnmount() {
					this.props.pubsub && this.props.pubsub.removeListeners(T.b, this.trackViewEvent)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.pubsub !== this.props.pubsub && this.props.pubsub && this.props.pubsub.removeListeners(T.b, this.trackViewEvent), e.pubsub && e.pubsub !== this.props.pubsub && e.pubsub.addListeners(T.b, this.trackViewEvent)
				}
				render() {
					const {
						shouldHideBottomBorder: e,
						shouldShowDescription: t,
						shouldShowActiveUsers: s,
						subreddit: i,
						subredditAboutInfo: n
					} = this.props;
					if (!i || !n) return null;
					const r = n.publicDescription || "",
						d = i.subscribers,
						a = Object(I.b)(d),
						c = Object(I.b)(n.accountsActive);
					return o.a.createElement("div", {
						className: Object(L.a)(z.a.subredditContainer, {
							[z.a.hideBottomBorder]: e
						})
					}, o.a.createElement("div", {
						className: z.a.subredditContent
					}, o.a.createElement("div", null, o.a.createElement(w.a, {
						to: i.url,
						onClick: this.onSubredditClick
					}, o.a.createElement(M.b, {
						subredditOrProfile: i,
						className: z.a.iconContainer
					}))), o.a.createElement("div", {
						className: z.a.subredditBodyWrapper
					}, o.a.createElement("div", {
						className: z.a.subredditBody,
						"data-click-id": "body"
					}, o.a.createElement(A.a, {
						className: z.a.subredditTitle,
						to: i.url,
						onClick: this.onSubredditClick
					}, i.displayText), o.a.createElement("div", null, o.a.createElement(B.a, {
						identifier: {
							name: i.name,
							type: F.a.SUBREDDIT
						},
						postId: i.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					}))), o.a.createElement("div", {
						className: z.a.subredditMeta
					}, V._({
						"*": "{number} members",
						_1: "1 member"
					}, [V._plural(d, "number", a)], {
						hk: "4yqFU9"
					})), s && o.a.createElement("div", {
						className: z.a.subredditMeta
					}, o.a.createElement(q.c, null), V._({
						"*": "{number} onlines",
						_1: "1 online"
					}, [V._plural(n.accountsActive, "number", c)], {
						hk: "1oCA5j"
					})), t && r && o.a.createElement(w.a, {
						className: z.a.subredditDescriptionContainer,
						to: i.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, r))))
				}
			}
			var J = Object(d.b)(Q)(Object(D.c)(W)),
				G = s("./src/reddit/components/Thumbnail/index.tsx"),
				K = s("./src/reddit/helpers/overlay/index.ts"),
				Y = s("./src/reddit/selectors/posts.ts"),
				X = s("./src/reddit/components/SubredditMention/MiniPost/index.m.less"),
				Z = s.n(X);
			const {
				fbt: $
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ee = Object(a.a)(e => e, Y.F, Y.d, (e, t, s) => {
				return {
					crosspost: s,
					post: t,
					subredditOrProfile: Object(O.Q)(e, {
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
						subredditOrProfile: i
					} = this.props;
					return o.a.createElement("div", {
						className: Object(L.a)(Z.a.container, e),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: Z.a.postDetails
					}, o.a.createElement("p", {
						className: Z.a.title,
						title: t.title
					}, t.title), s && i && i.displayText && o.a.createElement(A.a, {
						to: i.url,
						onClick: this.onClickSubreddit
					}, i.displayText), o.a.createElement("div", null, o.a.createElement("span", {
						className: Z.a.meta
					}, $._({
						"*": "{number of comments} comments",
						_1: "1 comment"
					}, [$._plural(t.numComments, "number of comments", Object(I.b)(t.numComments))], {
						hk: "Wq9Sy"
					})))), o.a.createElement("div", {
						className: Z.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(G.b, {
						post: t
					})))
				}
			}
			var se = Object(d.b)(ee, (e, t) => ({
					openLightbox: t => e(Object(K.a)(t.permalink))
				}))(te),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ne = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				re = s("./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less"),
				oe = s.n(re);
			const de = Object(ie.v)(),
				ae = Object(a.c)({
					isFakeSubreddit: ie.A
				});
			var ce = de(Object(d.b)(ae)(e => {
					let {
						className: t,
						showSubreddit: s,
						...i
					} = e;
					const n = Object(ne.a)(i);
					return o.a.createElement("div", {
						className: Object(L.a)(Z.a.container, t)
					}, o.a.createElement("div", {
						className: oe.a.mainBody
					}, o.a.createElement("div", {
						className: oe.a.content
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: Object(L.a)(oe.a.title, n)
					}), s && o.a.createElement("div", {
						className: Object(L.a)(oe.a.meta, n)
					})), o.a.createElement("div", {
						className: oe.a.flatlist
					}, o.a.createElement("div", {
						className: Object(L.a)(oe.a.flatlistExpando, n)
					}), o.a.createElement("div", {
						className: oe.a.flatlistSeparator
					}), o.a.createElement("div", {
						className: Object(L.a)(oe.a.flatlistItemOne, n)
					}), o.a.createElement("div", {
						className: Object(L.a)(oe.a.flatlistItemTwo, n)
					}))), o.a.createElement("div", {
						className: oe.a.thumbnailContainer
					}, o.a.createElement("div", {
						className: Object(L.a)(oe.a.thumbnail, n)
					}))))
				})),
				le = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				ue = s("./src/reddit/icons/svgs/Top/index.tsx"),
				be = s("./src/reddit/selectors/user.ts"),
				me = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				pe = s.n(me);
			const {
				fbt: he
			} = s("./node_modules/fbt/lib/FbtPublic.js"), fe = e => `subreddit-mention-${e}`, ve = Object(a.c)({
				haveError: x.d,
				hideNSFWPref: be.H,
				isEmployee: be.P,
				isPending: x.c,
				postIds: x.f,
				subreddit: O.a,
				subredditAboutInfo: O.z
			}), Se = Object(d.b)(ve, (e, t) => {
				let {
					subredditName: s,
					isHoverable: i
				} = t;
				return {
					subredditDataRequested: t => e(_(t)),
					showTooltip: t => {
						e(Object(N.f)({
							tooltipId: t
						})), e(Object(k.d)(s))
					},
					onHideTooltip: () => e(Object(N.i)())
				}
			}), Ee = 600;
			class Oe extends o.a.Component {
				constructor(e) {
					super(e), this.isRequestedOnceAlready = !1, this.onShowTooltip = () => {
						const e = fe(this.state.uniqueId);
						this.props.showTooltip(e), this.props.sendEvent(Object(R.f)(this.props.subredditName)), this.props.postIds.map(e => this.props.sendEvent(Object(R.g)(this.props.subredditName, e)))
					}, this.onClickPost = e => {
						this.props.sendEvent(Object(R.b)(this.props.subredditName, e))
					}, this.handleScroll = n()(() => this.loadSubredditData && this.loadSubredditData(), l.L), this.loadSubredditData = () => {
						const {
							subreddit: e,
							subredditAboutInfo: t,
							isPending: s,
							haveError: i
						} = this.props;
						if (!(!!e && !!t || i || s || this.isRequestedOnceAlready) && this.subredditMentionElement && this.subredditMentionElement.current) {
							const e = this.subredditMentionElement.current,
								t = window.scrollY + window.innerHeight,
								s = window.scrollY,
								i = e.getBoundingClientRect().top + window.scrollY;
							(i < s ? s - i : i - t) < Ee && (this.isRequestedOnceAlready = !0, this.props.subredditDataRequested(this.props.subredditName))
						}
					}, this.handleOnClick = () => {
						const {
							sendEvent: e,
							rtJsonElementProps: t,
							subredditName: s
						} = this.props;
						e(Object(R.a)({
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
						postIds: i,
						onHideTooltip: n,
						subreddit: r,
						subredditAboutInfo: d,
						subredditName: a
					} = this.props;
					if (!r || !d || Object(E.l)(r)) return this.renderDefault();
					const {
						uniqueId: c
					} = this.state, b = Object(u.a)(this.props.subredditName, l.ab.TOP), m = r.isNSFW && e || r.type === E.g.EmployeesOnly && !t || r.type === E.g.Private && !d.userIsSubscriber, p = m || r.isQuarantined || r.isNSFW;
					return o.a.createElement("span", {
						className: pe.a.subredditMentionContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: n,
						id: fe(c),
						onClick: this.handleOnClick,
						ref: this.subredditMentionElement
					}, o.a.createElement(le.a, {
						href: `/r/${a}/`
					}, o.a.createElement("span", {
						className: pe.a.subredditIconContainer
					}, o.a.createElement(le.b, {
						subredditOrProfile: m ? void 0 : r
					})), `r/${a}`), s && !p && o.a.createElement(P.a, {
						defaultTooltipPosition: "right",
						tooltipId: fe(c),
						tooltipSizeEstimate: {
							height: 290,
							width: 364
						}
					}, o.a.createElement("div", {
						className: pe.a.hovercardStyle
					}, o.a.createElement(J, {
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
					})), i.length > 0 ? i.map(e => o.a.createElement(se, {
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
			t.default = Se(Object(D.c)(Oe))
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				n = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = s.n(n);
			const o = s("./src/lib/lessComponent.tsx").a.wrapped(i.a, "SubredditName", r.a);
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
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
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const b = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class m extends n.a.Component {
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
							onUnsubscribe: i,
							postId: r,
							sendEvent: o,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: m,
							onSubscriptionsRequested: p,
							priority: h,
							isShredditParityEnabled: f,
							...v
						} = this.props, S = this.state.isHovered, E = Object(a.a)({
							type: t.type,
							key: S ? "unsubscribe" : "subscribed"
						}), O = v.shouldReverseColor ? d.c.Secondary : d.c.Primary;
						return n.a.createElement(d.t, u({
							className: e,
							priority: h || O,
							rplStyle: f,
							text: E,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: d.d.XSP
						}, v))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: i,
							postId: r,
							sendEvent: o,
							size: c,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: b,
							getEventFactory: m,
							onSubscriptionsRequested: p,
							priority: h,
							isShredditParityEnabled: f,
							...v
						} = this.props, S = Object(a.a)({
							type: t.type,
							key: "subscribe"
						}), E = v.shouldReverseColor ? d.c.Secondary : d.c.Primary;
						return n.a.createElement(d.t, u({
							className: e,
							priority: h || E,
							size: d.d.XSP,
							rplStyle: f,
							text: S,
							onClick: this.onClick
						}, v, {
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
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : n.a.createElement(b, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(o.a)(Object(r.c)(m))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js");
			const n = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
					subredditActions: {
						subscribe: () => i.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => i.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => i.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => i.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => i.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => i.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				o = e => {
					let {
						type: t,
						key: s
					} = e;
					return r[n({
						type: t
					})][s]()
				}
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(i.b)(() => Object(n.c)({
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
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
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
						useUpvotes: n,
						...o
					} = e;
					const a = Object(d.b)(s),
						c = i.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [i.fbt._plural(s, "number", a)], {
							hk: "2L3T21"
						}),
						u = t ? i.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? c : i.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [i.fbt._plural(s, "number", a)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, o, u)
				},
				m = e => r.a.createElement(l, null, i.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [i.fbt._plural(e, "number", Object(d.b)(e))], {
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
				return d
			}));
			var i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(n);
			const o = e => {
					let {
						isLoading: t
					} = e;
					return Object(i.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				d = e => Object(i.a)(r.a.loadingBar, o(e))
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/redditGQL/operations/SubredditsWithAboutInfo.json": function(e) {
			e.exports = JSON.parse('{"id":"b00857778f9c"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.0da2132431fcdce7c00e.js.map