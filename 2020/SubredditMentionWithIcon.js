// https://www.redditstatic.com/desktop2x/SubredditMentionWithIcon.5b406e1a0e81d7115108.js
// Retrieved at 5/6/2020, 4:40:04 PM by Reddit Dataminer v1.0.0
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
			var O = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
				}
				return s
			};
			const v = {
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
					return r.a.createElement("div", f({
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
				j = Object(a.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(m.b)(s)(e)
					}
				}),
				S = Object(c.a)(g, [n.a.Click, n.a.Keydown]),
				y = Object(o.b)(j);
			class E extends r.a.Component {
				constructor(e) {
					super(e), this.checkAndSetPosition = () => {
						const {
							tooltipId: e,
							tooltipSizeEstimate: t = v
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
					return r.a.createElement(S, f({}, this.props, {
						caretPosition: n,
						targetPosition: t,
						tooltipPosition: s
					}))
				}
			}
			t.a = y(E)
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
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				u = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/makeListingKey/index.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/lib/makeActionCreator/index.ts")),
				p = s("./src/reddit/actions/subredditMention/constants.ts"),
				h = s("./src/lib/makeGqlRequest/index.ts"),
				f = s("./src/graphql/operations/SubredditsWithAboutInfo.json"),
				O = s("./src/reddit/featureFlags/index.ts"),
				v = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				x = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/subredditMention.ts");
			const y = Object(m.a)(p.d),
				E = Object(m.a)(p.c),
				C = Object(m.a)(p.b),
				N = Object(m.a)(p.a),
				_ = e => async (t, s, n) => {
					let {
						gqlContext: i
					} = n;
					const r = s(),
						o = Object(S.c)(r, {
							subredditName: e
						}),
						a = !!Object(j.y)(r, {
							subredditName: e
						}) && !!Object(j.v)(r, {
							subredditName: e
						}) || !!Object(j.Y)(r, {
							subredditName: e
						}),
						c = Object(S.d)(r, {
							subredditName: e
						}),
						d = O.d.subredditMentionD2xExperiment(r);
					if (o || a && !c || !d) return;
					let l = !1;
					t(C({
						subredditName: e
					}));
					try {
						const s = await ((e, t) => Object(h.a)(e, Object.assign({}, f, {
							variables: t
						})))(i(), {
							subredditNames: [e]
						});
						if (s.ok && s.body) {
							const {
								data: n
							} = s.body, i = n.subredditsInfoByNames[0];
							if (Object(g.f)(i)) {
								const e = Object(x.d)(i);
								t(y({
									subreddits: {},
									subredditAboutInfo: {},
									unavailableSubreddits: {
										[e.id]: e
									}
								}))
							} else if (i && Object.keys(i).length > 0) {
								const e = Object(x.a)(i),
									s = Object(v.a)(i);
								t(y({
									subreddits: {
										[e.id]: e
									},
									subredditAboutInfo: s,
									unavailableSubreddits: {}
								}))
							}
							t(E({
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
			var P = s("./src/reddit/actions/subredditTopContent.ts"),
				k = s("./src/reddit/actions/tooltip.ts"),
				w = s("./src/reddit/components/ContentTooltip/index.tsx"),
				T = s("./src/lib/classNames/index.ts"),
				I = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				M = s("./src/reddit/components/Thumbnail/index.tsx"),
				B = s("./src/reddit/helpers/overlay/index.ts"),
				A = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/SubredditMention/MiniPost/index.m.less"),
				q = s.n(H);
			const {
				fbt: F
			} = s("./node_modules/fbt/lib/FbtPublic.js"), R = Object(c.a)(e => e, A.N, A.d, D.P, (e, t, s, n) => {
				return {
					crosspost: s,
					language: n,
					post: t,
					subredditOrProfile: Object(j.J)(e, {
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
						className: Object(T.a)(q.a.container, e),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: q.a.postDetails
					}, o.a.createElement("p", {
						className: q.a.title,
						title: t.title
					}, t.title), s && n && n.displayText && o.a.createElement(L.a, {
						to: n.url,
						onClick: this.onClickSubreddit
					}, n.displayText), o.a.createElement("div", null, o.a.createElement("span", {
						className: q.a.meta
					}, F._({
						"*": "{number of comments} comments",
						_1: "1 comment"
					}, [F._plural(t.numComments, "number of comments", Object(I.b)(t.numComments))], {
						hk: "Wq9Sy"
					})))), o.a.createElement("div", {
						className: q.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(M.a, {
						post: t
					})))
				}
			}
			var z = Object(a.b)(R, (e, t) => ({
					openLightbox: t => e(Object(B.a)(t.permalink))
				}))(V),
				K = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./src/reddit/contexts/PageLayer/index.tsx")),
				U = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				W = s("./src/reddit/components/SubredditMention/MiniPost/Placeholder.m.less"),
				Y = s.n(W),
				G = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				};
			const Q = Object(K.t)(),
				J = Object(c.c)({
					isFakeSubreddit: K.x
				});
			var Z = Q(Object(a.b)(J)(e => {
					var {
						className: t,
						showSubreddit: s
					} = e, n = G(e, ["className", "showSubreddit"]);
					const i = Object(U.a)(n);
					return o.a.createElement("div", {
						className: Object(T.a)(q.a.container, t)
					}, o.a.createElement("div", {
						className: Y.a.mainBody
					}, o.a.createElement("div", {
						className: Y.a.content
					}, o.a.createElement("div", null, o.a.createElement("div", {
						className: Object(T.a)(Y.a.title, i)
					}), s && o.a.createElement("div", {
						className: Object(T.a)(Y.a.meta, i)
					})), o.a.createElement("div", {
						className: Y.a.flatlist
					}, o.a.createElement("div", {
						className: Object(T.a)(Y.a.flatlistExpando, i)
					}), o.a.createElement("div", {
						className: Y.a.flatlistSeparator
					}), o.a.createElement("div", {
						className: Object(T.a)(Y.a.flatlistItemOne, i)
					}), o.a.createElement("div", {
						className: Object(T.a)(Y.a.flatlistItemTwo, i)
					}))), o.a.createElement("div", {
						className: Y.a.thumbnailContainer
					}, o.a.createElement("div", {
						className: Object(T.a)(Y.a.thumbnail, i)
					}))))
				})),
				X = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				$ = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ee = s("./src/reddit/components/SubredditIcon/index.tsx"),
				te = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				se = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ne = s("./src/reddit/constants/posts.ts"),
				ie = s("./src/reddit/controls/MetaData/index.tsx"),
				re = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				oe = s("./src/reddit/i18n/components.tsx"),
				ae = s("./src/reddit/components/SubredditMention/SubredditItem/index.m.less"),
				ce = s.n(ae);
			const de = Object(c.c)({
				subreddit: j.P,
				subredditAboutInfo: j.v
			});
			class le extends o.a.Component {
				constructor() {
					super(...arguments), this.onSubredditClick = () => {
						this.props.sendEvent(Object(re.c)(this.props.subredditId))
					}, this.getSubscribeEventFactory = e => {
						const t = this.props.subredditId;
						return e ? Object(re.e)(t) : Object(re.d)(t)
					}
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
						a = n.subscribers,
						c = Object(I.b)(a),
						d = Object(I.b)(i.accountsActive);
					return o.a.createElement("div", {
						className: Object(T.a)(ce.a.subredditContainer, {
							[ce.a.hideBottomBorder]: e
						})
					}, o.a.createElement("div", {
						className: ce.a.subredditContent
					}, o.a.createElement("div", null, o.a.createElement($.a, {
						to: n.url,
						onClick: this.onSubredditClick
					}, o.a.createElement(ee.b, {
						subredditOrProfile: n,
						className: ce.a.iconContainer
					}))), o.a.createElement("div", {
						className: ce.a.subredditBodyWrapper
					}, o.a.createElement("div", {
						className: ce.a.subredditBody,
						"data-click-id": "body"
					}, o.a.createElement(L.a, {
						className: ce.a.subredditTitle,
						to: n.url,
						onClick: this.onSubredditClick
					}, n.displayText), o.a.createElement("div", null, o.a.createElement(te.a, {
						identifier: {
							name: n.name,
							type: ne.a.SUBREDDIT
						},
						postId: n.id,
						shouldReverseColor: !0,
						getEventFactory: this.getSubscribeEventFactory
					}))), o.a.createElement("div", {
						className: ce.a.subredditMeta
					}, o.a.createElement(oe.a, null, "".concat(c, " member").concat(a > 1 ? "s" : ""))), s && o.a.createElement("div", {
						className: ce.a.subredditMeta
					}, o.a.createElement(ie.c, null), o.a.createElement(oe.a, null, "".concat(d, " online"))), t && r && o.a.createElement($.a, {
						className: ce.a.subredditDescriptionContainer,
						to: n.url,
						onClick: this.onSubredditClick,
						style: {
							WebkitBoxOrient: "vertical"
						}
					}, r))))
				}
			}
			var ue = Object(a.b)(de)(Object(se.c)(le)),
				be = s("./src/reddit/icons/svgs/Top/index.tsx"),
				me = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				pe = s.n(me);
			const {
				fbt: he
			} = s("./node_modules/fbt/lib/FbtPublic.js"), fe = e => "".concat("subreddit-mention", "-").concat(e), Oe = Object(c.c)({
				haveError: S.d,
				hideNSFWPref: D.z,
				isEmployee: D.E,
				isPending: S.c,
				postIds: S.f,
				subreddit: j.a,
				subredditAboutInfo: j.v
			}), ve = Object(a.b)(Oe, (e, t) => {
				let {
					subredditName: s,
					isHoverable: n
				} = t;
				return {
					subredditDataRequested: t => e(_(t)),
					showTooltip: t => {
						e(Object(k.f)({
							tooltipId: t
						})), e(Object(P.d)(s))
					},
					onHideTooltip: () => e(Object(k.i)())
				}
			}), xe = 600;
			class ge extends o.a.Component {
				constructor(e) {
					super(e), this.isRequestedOnceAlready = !1, this.onShowTooltip = () => {
						const e = fe(this.state.uniqueId);
						this.props.showTooltip(e), this.props.sendEvent(Object(re.f)(this.props.subredditName)), this.props.postIds.map(e => this.props.sendEvent(Object(re.g)(this.props.subredditName, e)))
					}, this.onClickPost = e => {
						this.props.sendEvent(Object(re.b)(this.props.subredditName, e))
					}, this.handleScroll = i()(() => this.loadSubredditData && this.loadSubredditData(), u.E), this.loadSubredditData = () => {
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
							(n < s ? s - n : n - t) < xe && (this.isRequestedOnceAlready = !0, this.props.subredditDataRequested(this.props.subredditName))
						}
					}, this.handleOnClick = () => {
						const {
							sendEvent: e,
							rtJsonElementProps: t,
							subredditName: s
						} = this.props;
						e(Object(re.a)(Object.assign({}, t, {
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
						className: pe.a.subredditMentionContainer,
						ref: this.subredditMentionElement,
						onClick: this.handleOnClick
					}, o.a.createElement(X.a, {
						href: "/r/".concat(e, "/")
					}, o.a.createElement("span", {
						className: pe.a.subredditIconContainer
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
						subredditAboutInfo: a,
						subredditName: c
					} = this.props;
					if (!r || !a || Object(g.g)(r)) return this.renderDefault();
					const {
						uniqueId: d
					} = this.state, l = Object(b.a)(this.props.subredditName, u.M.TOP), m = r.isNSFW && e || r.type === g.c.EmployeesOnly && !t || r.type === g.c.Private && !a.userIsSubscriber, p = m || r.isQuarantined || r.isNSFW;
					return o.a.createElement("span", {
						className: pe.a.subredditMentionContainer,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: i,
						id: fe(d),
						onClick: this.handleOnClick,
						ref: this.subredditMentionElement
					}, o.a.createElement(X.a, {
						href: "/r/".concat(c, "/")
					}, o.a.createElement("span", {
						className: pe.a.subredditIconContainer
					}, o.a.createElement(X.b, {
						subredditOrProfile: m ? void 0 : r
					})), "r/".concat(c)), s && !p && o.a.createElement(w.a, {
						defaultTooltipPosition: "right",
						tooltipId: fe(d),
						tooltipSizeEstimate: {
							height: 290,
							width: 364
						}
					}, o.a.createElement("div", {
						className: pe.a.hovercardStyle
					}, o.a.createElement(ue, {
						subredditId: r.id,
						subredditName: c,
						shouldHideBottomBorder: !0,
						shouldShowActiveUsers: !0,
						shouldShowDescription: !1,
						listingKey: l,
						position: 0
					}), o.a.createElement("div", {
						className: pe.a.topPostsTitle
					}, o.a.createElement(be.a, {
						className: pe.a.top
					}), he._("Top posts of the last week", null, {
						hk: "37poFw"
					})), n.length > 0 ? n.map(e => o.a.createElement(z, {
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
			t.default = ve(Object(se.c)(ge))
		},
		"./src/reddit/components/SubredditMention/SubredditItem/index.m.less": function(e, t, s) {
			e.exports = {
				subredditTitle: "_2MYl3DfwvOnEOayXK2AMmj",
				subredditContent: "_1clPzu_tHL1LetprZ8aHPl",
				subredditBody: "_17clUj2PVpZTh_yoqPxuLV",
				subredditMeta: "_3wr8vj9n3eufkABUfNsPD3",
				subredditContainer: "_24YICVMS7PK-rjBYjqVvLV",
				hideBottomBorder: "W0rC0ISEZdC6M45l9gbbH",
				subredditBodyWrapper: "_2lzxfNZ7qJNyjlXAiRnTHx",
				thumbnailOverride: "_2y3Jv26l2hKKNxXelAppC9",
				iconContainer: "_1uKrOZmfKnqWanjDK7hJj2",
				subredditDescriptionContainer: "ZBpF_uanKPbreztSSFhtU"
			}
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
				m = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/lessComponent.tsx");

			function h() {
				return (h = Object.assign || function(e) {
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
			const O = p.a.wrapped(e => {
					var {
						small: t,
						shouldReverseColor: s
					} = e, n = f(e, ["small", "shouldReverseColor"]);
					const r = s ? a.i : a.f;
					return i.a.createElement(r, h({}, n, {
						className: Object(m.a)(n.className, {
							[b.a.isLarge]: !t
						})
					}))
				}, "SubscribeInternalButton", b.a),
				v = p.a.wrapped(e => {
					var {
						small: t,
						belongsToType: s,
						shouldReverseColor: n
					} = e, r = f(e, ["small", "belongsToType", "shouldReverseColor"]);
					const o = n ? a.f : a.i;
					return i.a.createElement(o, h({}, r, {
						className: Object(m.a)(r.className, {
							[b.a.isLarge]: !t
						})
					}))
				}, "UnsubscribeButton", b.a),
				x = p.a.wrapped(c.a, "Checkmark", b.a),
				g = p.a.wrapped(d.a, "Plus", b.a),
				j = p.a.div("ButtonSpacer", b.a);
			class S extends i.a.Component {
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
							doNotHideOtherSubscribeButtons: p,
							getEventFactory: S,
							onSubscriptionsRequested: y
						} = e,
						E = f(e, ["className", "identifier", "language", "onSubscribe", "onUnsubscribe", "postId", "sendEvent", "small", "userIsSubscriber", "doNotHideOtherSubscribeButtons", "getEventFactory", "onSubscriptionsRequested"]),
						C = this.state.isHovered;
					let N = u ? "subscribed" : "subscribe";
					u && C && (N = "unsubscribe");
					const _ = Object(l.a)({
						type: s.type,
						key: N
					});
					return u ? this.state.hasJustSubscribed || p ? i.a.createElement(v, h({
						className: Object(m.a)(t, {
							[b.a.isLarge]: !d,
							[b.a.unsubscribeButtonHoverStyles]: !d
						}),
						onClick: this.onClick,
						small: d,
						belongsToType: s.type,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, E), d && i.a.createElement(x, null), !d && !C && i.a.createElement(x, null), !d && _) : d ? null : i.a.createElement(j, null) : i.a.createElement(i.a.Fragment, null, i.a.createElement(O, h({
						className: Object(m.a)(t, {
							[b.a.isLarge]: !d
						}),
						onClick: this.onClick,
						small: d
					}, E, {
						id: "subscribe-button-".concat(a),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}), i.a.createElement(g, null), !d && _))
				}
			}
			t.a = Object(o.a)(Object(r.c)(S))
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
				language: a.P,
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
				return u
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./node_modules/react/index.js"),
				r = s.n(i),
				o = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(c),
				l = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (n = Object.getOwnPropertySymbols(e); i < n.length; i++) t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (s[n[i]] = e[n[i]])
					}
					return s
				};
			const u = o.a.span("metaText", d.a),
				b = e => r.a.createElement(u, e, " · "),
				m = e => {
					var {
						isScoreHidden: t,
						language: s,
						score: i,
						useUpvotes: o
					} = e, c = l(e, ["isScoreHidden", "language", "score", "useUpvotes"]);
					const d = Object(a.b)(i),
						b = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(i, "number", d)], {
							hk: "2L3T21"
						}),
						m = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? b : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(i, "number", d)], {
							hk: "gf67v"
						});
					return r.a.createElement(u, c, m)
				},
				p = (e, t) => r.a.createElement(u, null, n.fbt._({
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
//# sourceMappingURL=SubredditMentionWithIcon.5b406e1a0e81d7115108.js.map