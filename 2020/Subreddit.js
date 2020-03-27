// https://www.redditstatic.com/desktop2x/Subreddit.02ac9861f9974b0b5912.js
// Retrieved at 3/26/2020, 8:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["Subreddit", "Frontpage~SubredditWiki"], {
		"./node_modules/lodash/flatMap.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFlatten.js"),
				r = s("./node_modules/lodash/map.js");
			e.exports = function(e, t) {
				return n(r(e, t), 1)
			}
		},
		"./node_modules/lodash/orderBy.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseOrderBy.js"),
				r = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s, a) {
				return null == e ? [] : (r(t) || (t = null == t ? [] : [t]), r(s = a ? void 0 : s) || (s = null == s ? [] : [s]), n(e, t, s))
			}
		},
		"./node_modules/lodash/random.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseRandom.js"),
				r = s("./node_modules/lodash/_isIterateeCall.js"),
				a = s("./node_modules/lodash/toFinite.js"),
				o = parseFloat,
				i = Math.min,
				d = Math.random;
			e.exports = function(e, t, s) {
				if (s && "boolean" != typeof s && r(e, t, s) && (t = s = void 0), void 0 === s && ("boolean" == typeof t ? (s = t, t = void 0) : "boolean" == typeof e && (s = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = a(e), void 0 === t ? (t = e, e = 0) : t = a(t)), e > t) {
					var c = e;
					e = t, t = c
				}
				if (s || e % 1 || t % 1) {
					var l = d();
					return i(e + l * (t - e + o("1e-" + ((l + "").length - 1))), t)
				}
				return n(e, t)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				r = s("./node_modules/lodash/_castFunction.js"),
				a = s("./node_modules/lodash/toInteger.js"),
				o = 9007199254740991,
				i = 4294967295,
				d = Math.min;
			e.exports = function(e, t) {
				if ((e = a(e)) < 1 || e > o) return [];
				var s = i,
					c = d(e, i);
				t = r(t), e -= i;
				for (var l = n(c, t); ++s < e;) t(s);
				return l
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/i18n/utils.ts");
			const r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				o = (e, t) => t ? e.getUTCDate() : e.getDate(),
				i = (e, t, s) => {
					const o = t ? e.getUTCMonth() : e.getMonth(),
						i = s ? a : r;
					return Object(n.c)(i[o])
				},
				d = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function c(e, t, s, n) {
				const r = new Date(1e3 * e),
					a = i(r, s, n),
					c = t ? o(r, s) + ", " : "";
				return "".concat(a, " ").concat(c).concat(d(r, s))
			}
		},
		"./src/reddit/actions/subreddit/inlineEditing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return v
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/structuredStyles/index.ts"),
				o = s("./src/reddit/actions/subreddit/constants.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				d = s("./src/reddit/constants/blade.ts"),
				c = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				l = s("./src/reddit/models/Image/index.tsx"),
				m = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/selectors/structuredStyles.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts");
			const h = Object(r.a)(o.p),
				g = Object(r.a)(o.q),
				x = Object(r.a)(o.o),
				y = (e, t, s) => async (n, r, a) => {
					const o = Object(p.y)(r(), {
						subredditName: e
					});
					if (o) return v(o, t, s)(n, r, a)
				}, f = () => n.fbt._("Error uploading image, please try again later", null, {
					hk: "7ZIYs"
				}), v = (e, t, s) => async (r, o, p) => {
					const y = await Object(l.e)(t);
					r(h());
					const v = o();
					try {
						await Object(a.g)("communityIcon", y, e.id)(r, o, p)
					} catch (C) {
						return Object(b.a)(Object(c.c)(v, "something went wrong with the uploading the image")), r(Object(i.e)({
							kind: m.b.Error,
							text: f()
						})), void r(x())
					}
					const O = Object(u.d)(o(), {
						name: "communityIcon"
					});
					if (!O) return Object(b.a)(Object(c.c)(v, "image is null")), r(Object(i.e)({
						kind: m.b.Error,
						text: f()
					})), void r(x());
					await Object(a.k)(e.id, {
						communityIcon: O
					}, d.b.idCard, s)(r, o, p), r(Object(i.e)({
						kind: m.b.SuccessCommunity,
						text: n.fbt._("Successfully updated Community Icon!", null, {
							hk: "29LGdg"
						})
					})), r(g())
				}
		},
		"./src/reddit/components/BannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1rmObrmUCfC5t42SbwkzYC",
				container: "_1rmObrmUCfC5t42SbwkzYC",
				LoadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2",
				loadingHitbox: "_1n3f5S4VH-64I6tr3YDSy2"
			}
		},
		"./src/reddit/components/BannerAd/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/doubleclickForPublishers/index.ts"),
				l = s("./src/lib/intersectionObserver/index.ts"),
				m = s("./src/lib/objectSelector/index.ts"),
				u = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/components/BannerAd/index.m.less"),
				x = s.n(g),
				y = s("./src/lib/lessComponent.tsx");
			const f = y.a.div("Container", x.a),
				v = y.a.div("LoadingHitbox", x.a),
				O = e => setTimeout(() => {
					throw e
				}, 0);
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.frame = null, this.loader = null, this.refreshedAt = 1 / 0, this.isWithinLoadingDistance = !1
				}
				componentDidCatch(e) {
					O(e)
				}
				defineSlot() {
					const {
						id: e,
						slot: t,
						properties: s,
						sizes: n = []
					} = this.props;
					try {
						return this.frame && c.a(this.frame, {
							id: e,
							slot: t,
							properties: s,
							sizes: n
						})
					} catch (r) {
						O(r)
					}
				}
				destroySlot() {
					try {
						this.frame && c.b(this.frame)
					} catch (e) {
						O(e)
					}
				}
				async componentDidMount() {
					this.props.sendEvent(Object(h.a)());
					try {
						await this.defineSlot()
					} catch (e) {
						O(e)
					}
					this.loader && l.a(this.loader, e => {
						this.frame && c.e(this.frame, {
							viewable: e.intersectionRatio > .5
						}), this.isWithinLoadingDistance = !0, this.refresh(this.props), this.loader && l.b(this.loader)
					})
				}
				componentWillUnmount() {
					this.loader && l.b(this.loader), this.destroySlot()
				}
				refresh(e) {
					this.isWithinLoadingDistance && (this.refreshedAt = Date.now(), this.frame && c.d(this.frame, {
						id: e.id,
						slot: e.slot,
						properties: e.properties,
						sizes: e.sizes
					}))
				}
				componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						id: e,
						slot: t,
						className: s
					} = this.props;
					return t ? r.a.createElement(f, {
						"data-slot": t
					}, r.a.createElement(v, {
						key: "".concat(e, "-loadinghitbox"),
						innerRef: e => {
							this.loader = e
						}
					}), r.a.createElement("div", {
						"data-before-content": this.props.dataBeforeContent,
						key: "".concat(e, "-div"),
						className: s,
						ref: e => {
							this.frame = e
						},
						id: e
					})) : r.a.createElement("div", {
						className: s
					})
				}
			}
			C.defaultProps = {
				sizes: [d.e]
			};
			t.a = Object(a.b)(() => Object(o.c)({
				properties: Object(m.a)((e, t) => {
					const s = e.platform.currentPage;
					if (!s) return {};
					const n = "".concat(e.meta.protocol, "://").concat(e.meta.domain);
					return Object(u.b)(t.placement, e.user, Object(i.a)("".concat(n).concat(s.url), s.queryParams), Object(p.y)(e, {
						subredditName: t.listingName
					}), t.position)
				}),
				slot: (e, t) => {
					const s = e.platform.currentPage;
					return s && s.meta ? c.c(t.listingName, s.meta.name) : ""
				}
			}))(Object(b.c)(C))
		},
		"./src/reddit/components/CommunityIdTopBar/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3JDs8KEQIXSMn1bTF2ZqJ_",
				subredditMetaContainer: "QscnL9OySMkHhGudEvEya",
				icon: "_2OMsln4_sqrfHjufgGCeio",
				SubredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				subredditIcon: "Mh_Wl6YioFfBc9O1SQ4Jp",
				editableIcon: "_24UN_-gCO5bzA8_5-4ceCZ",
				emptyEditableIcon: "_2Or9OYtuMXbhgcWS_kdx0Q",
				Planet: "ixfotyd9YXZz0LNAtJ25N",
				planet: "ixfotyd9YXZz0LNAtJ25N",
				textContainer: "_3I4Wpl_rl6oTm02aWPZayD",
				text: "_3TG57N4WQtubLLo8SbAXVF",
				title: "_2yYPPW47QxD4lFQTKpfpLQ",
				description: "_33aRtz9JtW0dIrBNKFAl0y",
				subscribeButtonContainer: "_1Q_zPN5YtTLQVG72WhRuf3",
				subscribeButton: "_2Oxv8udy0lsocAGXEQxb8x",
				subredditNavContainer: "_15Pk_bZ2XZNa9zBvnxq6HX"
			}
		},
		"./src/reddit/components/CommunityIdTopBar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx"),
				m = s("./src/reddit/components/SubredditNav/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/constants/posts.ts"),
				h = s("./src/reddit/featureFlags/index.ts"),
				g = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				x = s("./src/reddit/constants/tracking.ts"),
				y = s("./src/reddit/selectors/telemetry.ts");
			var f = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				v = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				O = s("./src/reddit/selectors/widgets.ts"),
				C = s("./src/reddit/components/CommunityIdTopBar/index.m.less"),
				E = s.n(C);
			const _ = c.a.wrapped(f.a, "Planet", E.a),
				j = c.a.img("SubredditIcon", E.a),
				N = Object(o.c)({
					spPollsEnabled: h.d.spPolls,
					subredditInlineEditingEnabled: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(v.a)(e, {
							subredditId: s
						})
					},
					widget: O.f
				});
			t.a = Object(a.b)(N)(Object(d.a)(e => {
				const t = e.subreddit ? e.subreddit.id : e.subredditId,
					s = e.subreddit ? e.subreddit.name : e.subredditName,
					n = e.subreddit ? e.subreddit.url : e.subredditUrl,
					a = e.subreddit ? e.subreddit.title : "",
					o = e.subreddit && Object(g.a)(e),
					d = !(!e.theme || !o),
					c = s.charAt(0).toUpperCase() + s.slice(1),
					h = !!e.subreddit && e.subredditInlineEditingEnabled,
					f = Object(i.a)(E.a.SubredditIcon, E.a.editableIcon, {
						[E.a.emptyEditableIcon]: !o
					}),
					v = r.a.createElement(l.a, {
						className: f,
						subreddit: e.subreddit,
						iconUrl: o || void 0,
						inTopBar: !0
					}),
					O = d ? r.a.createElement(j, {
						src: o || void 0
					}) : r.a.createElement(_, null),
					C = e.spPollsEnabled || e.widget && (e.widget.showWiki || e.widget.data.length > 0);
				return r.a.createElement("div", {
					className: E.a.container,
					style: {
						maxWidth: e.layout === p.g.Large ? "".concat(984, "px") : "100%"
					}
				}, r.a.createElement("div", {
					className: E.a.subredditMetaContainer
				}, h ? v : O, r.a.createElement("div", {
					className: Object(i.a)(E.a.textContainer, {
						[E.a.textContainerNoIcon]: !d
					})
				}, r.a.createElement("div", {
					className: E.a.text
				}, r.a.createElement("h1", {
					className: E.a.title
				}, a || c), !!a && r.a.createElement("h2", {
					className: E.a.description
				}, "r/", s)), r.a.createElement("div", {
					className: E.a.subscribeButtonContainer
				}, r.a.createElement(u.a, {
					className: E.a.subscribeButton,
					getEventFactory: e => {
						return (e => t => Object.assign({}, y.defaults(t), {
							source: "id_banner",
							action: x.c.CLICK,
							noun: e,
							subreddit: y.subreddit(t)
						}))(e ? "unsubscribe" : "subscribe")
					},
					identifier: {
						name: s,
						type: b.a.SUBREDDIT
					},
					small: !0
				})))), C && r.a.createElement(m.a, {
					disableFullscreen: !0,
					isTopBannerVariant: !0,
					homeUrl: n,
					subredditId: t,
					subredditNavContainerClassName: E.a.subredditNavContainer
				}))
			}))
		},
		"./src/reddit/components/CreatePostBanner/index.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_1BIJI1DdDH_4emkRdSgYtS",
				titleFontH2: "_23v2sEqtCPdekfIaLfBZp0",
				titleFontH3: "_3IPxgawQfrpK8awcnvf2tu",
				titleFontH4: "ZuN5dJ8fJ4v1pojDMILP0",
				titleFontH5: "_2ztaAHYqZbZbLYMI-lEtHX",
				titleFontH6: "FJTuq_jN8uqei2Q4GA66j",
				metadataFont: "_1cBJStdY8xmiR_5jS9gSeH",
				flairFont: "_1fMm1d_nUYPU1bZGhGW2bC",
				labelsFont: "_2_UCOjEBwHnvHk6zBrjPsR",
				actionFont: "_2yyPZbzMoNrAUtQO_SktBd",
				smallButtonFont: "_2_b2a8o6wkToROG8VNRtMR",
				largeButtonFont: "_3Ls4y5dDOPfsU8368YWswn",
				tabFont: "_2TXH3iCv_qoKnRDI_q5ehB",
				strongTextFont: "_1VYMlogcTatyZdJyEPfw1t",
				extraSmallFont: "A_BVHp4etEzRQfPWIVxb2",
				bodyFontH1: "_2ZqUm_Cp2QP_j0eqf4TOLu",
				bodyFontH2: "_3CcMb_6AI06xq5ar12VdGR",
				bodyFontH3: "_2rQURI6yWXPMKy8zTsJVhS",
				bodyFontH4: "_20eyEQiTe3oMfPFHKZsVTk",
				bodyFontH5: "_1LGkFCI_sPLVchg392lGmP",
				bodyFontH6: "NneW2LW2rvek7WBZYLULA",
				bodyFont: "_1WbHqicmob5scrxcNoRM6z",
				bodyFontSmall: "_1JhbrLSCwywCqsws4jUAzS",
				bodyFontMono: "_1DXzqFfRPHDAA7hSJMbTxi",
				banner: "_2bVJFy1zdpBBF6tNX6MsZt",
				button: "_3dn2kMjL3eThyGPEb1oAf-",
				buttonWrapper: "_2MsQ2gmnKXnwElZFA1jCbV",
				close: "_1MiKBKJCDaPRJ7r-vSQ8xU",
				closeContainer: "_3Amqa4WXRxq65XAjmjQw8E",
				heading: "aVXYLWktPH4YxXbOJbfEg",
				postIcon: "_2cBHGzAvbCcbR3bvPSt_Y1",
				text: "_3VcroXmJS3StZ2nIi8JODq"
			}
		},
		"./src/reddit/components/CreatePostBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/localStorageAvailable/index.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx");
			! function(e) {
				e.STYLES_ENTRY_BANNER = "styles_entry_banner", e.CREATE_POST_BANNER = "create_post_banner"
			}(n || (n = {}));
			var m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				b = e => o.a.createElement("svg", {
					viewBox: "0 0 56 56",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, o.a.createElement("g", {
					transform: "translate(1 1)",
					fill: "inherit",
					stroke: "inherit",
					fillRule: "evenodd"
				}, o.a.createElement("rect", {
					x: "16",
					y: "35",
					width: "22.4",
					height: "2.8",
					rx: "1.4",
					stroke: "none"
				}), o.a.createElement("path", {
					d: "M20.4 34.08h3.96c.372 0 .727-.147.99-.41l11.32-11.32a1.398 1.398 0 0 0 0-1.98l-3.96-3.96a1.398 1.398 0 0 0-1.98 0L19.41 27.73c-.263.263-.41.618-.41.99v3.96a1.4 1.4 0 0 0 1.4 1.4"
				}), o.a.createElement("circle", {
					strokeWidth: "2",
					fill: "none",
					cx: "27",
					cy: "27",
					r: "27"
				}))),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/components/CreatePostBanner/index.m.less"),
				y = s.n(x);
			const f = Object(i.b)(null, e => ({
				showToast: () => {
					e(Object(c.e)({
						kind: g.b.SuccessCommunity,
						text: r.fbt._("Dismissed", null, {
							hk: "3YBtnR"
						})
					}))
				}
			}));
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.closeBanner = () => {
						Object(u.E)(n.CREATE_POST_BANNER, !0, this.props.subreddit.id), this.setState({
							visible: !1
						}), this.props.showToast(), this.props.sendEvent(Object(p.b)())
					}, this.createPost = () => {
						this.props.sendEvent(Object(p.a)())
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						subreddit: e
					} = this.props, t = Object(d.a)() && !Object(u.e)(n.CREATE_POST_BANNER, e.id);
					t !== this.state.visible && (this.props.sendEvent(Object(p.c)()), this.setState({
						visible: t
					}))
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return this.state.visible ? o.a.createElement("div", {
						className: y.a.banner
					}, o.a.createElement("button", {
						className: y.a.closeContainer,
						onClick: this.closeBanner
					}, o.a.createElement(h.a, {
						className: y.a.close
					})), o.a.createElement(b, {
						className: y.a.postIcon
					}), o.a.createElement("div", {
						className: y.a.heading
					}, r.fbt._("Create the ideal {subredditDisplayText} post", [r.fbt._param("subredditDisplayText", " ".concat(e.displayText, " "))], {
						hk: "3ZioIj"
					})), o.a.createElement("div", {
						className: y.a.text
					}, r.fbt._("Content is an important part of any new community.", null, {
						hk: "4nsVy"
					}), o.a.createElement("br", null), r.fbt._("Try creating your own post now!", null, {
						hk: "1KCWqr"
					})), o.a.createElement("div", {
						className: y.a.buttonWrapper
					}, o.a.createElement(m.g, {
						className: y.a.button,
						target: "_blank",
						href: "/".concat(e.displayText, "/submit"),
						onClick: this.createPost
					}, r.fbt._("Create Post", null, {
						hk: "sSUAI"
					})))) : null
				}
			}
			t.a = f(Object(l.c)(v))
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3lILa1kmfAauhn7UzHzjLJ",
				heroContainer: "_2xvhS-vDti9NRsRHMeqFmX",
				smallContainer: "_11h2c3EwgJFkGto36dozz7",
				oldContainer: "_24S-GP9dX3BODxJwehVvRx",
				header: "_3UiOKr6dA-zB_4O4l14Icx",
				bodyHidePadding: "M4vA4bj3WWpggduxPTpBA",
				body: "_1l2RfnlEvwmRPfDwe46NRR"
			}
		},
		"./src/reddit/components/DiscoveryUnit/Layout/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/DiscoveryUnit/Layout/index.m.less"),
				i = s.n(o);
			class d extends r.a.Component {
				render() {
					return r.a.createElement("div", {
						className: Object(a.a)(i.a.heroContainer, this.props.className)
					}, r.a.createElement("div", {
						className: Object(a.a)(i.a.header, this.props.headerClassName)
					}, this.props.header), r.a.createElement("div", {
						className: Object(a.a)(this.props.hidePadding ? i.a.bodyHidePadding : i.a.body, this.props.bodyClassName)
					}, this.props.children))
				}
			}
			t.a = d
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.m.less": function(e, t, s) {
			e.exports = {
				loading: "_3gWqsGamiiRTC2h_yOIcgS"
			}
		},
		"./src/reddit/components/Economics/CommunityTipJar/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/featureFlags/component.tsx"),
				d = s("./src/reddit/components/Economics/CommunityTipJar/async.m.less"),
				c = s.n(d);
			const l = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t
					} = e;
					return r.a.createElement("div", {
						className: Object(o.a)(t, c.a.loading)
					})
				},
				getComponent: () => Promise.all([s.e("vendors~CoinsPurchaseModal~EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~Ec~e8822216"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~ad08f508"), s.e("EconomicsCommunityTipJar~EconomicsEntryPointsCommentFlatlistSupportCTA~EconomicsEntryPointsPostFlatl~c734f0e1"), s.e("EconomicsCommunityTipJar")]).then(s.bind(null, "./src/reddit/components/Economics/CommunityTipJar/index.tsx")).then(e => e.default)
			});
			t.a = Object(i.a)("spCommunityTipJar", l)
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Economics-SubredditPremium-LFGBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Economics-SubredditPremium-LFGBanner").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Economics/SubredditPremium/LFGBanner/index.tsx"
				}
			})
		},
		"./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const a = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumNewUserWelcome").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/index.tsx")).then(e => e.default)
			});
			t.a = Object(r.a)("spPremium", a)
		},
		"./src/reddit/components/EmptySubreddit.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				primaryText: "_11KlaBYJq9fbo0p9We9Q-X",
				SecondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				secondaryText: "_1mDuZKKi5R1yARCN4kbfb8",
				MainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				mainContentWrapper: "_3rhMc0U_KMJO_5-yIKPke3",
				MainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				mainContent: "_3Tl09Mc2pqGPdIu3beZW4b",
				BackgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				backgroundPlaceholder: "_3-P94khWh-8LNZgpznmZm5",
				SubmitLink: "_2lrHxBsyZpA36hEKC_alta",
				submitLink: "_2lrHxBsyZpA36hEKC_alta",
				SnooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				snooImg: "_3-gJfiulV3xKAI7pwX0Cq-",
				EmptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				emptyHomepage: "_2wub0HHCdPisuKZKnVh2Kg",
				Component: "_2_C857z2MF49YnHj6VQteT",
				component: "_2_C857z2MF49YnHj6VQteT"
			}
		},
		"./src/reddit/components/EmptySubreddit.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/upperFirst.js"),
				a = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				d = s("./src/config.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/components/PostList/Placeholder.tsx"),
				b = s("./src/reddit/components/EmptySubreddit.m.less"),
				h = s.n(b),
				g = s("./src/lib/lessComponent.tsx");
			const x = g.a.div("PrimaryText", h.a),
				y = g.a.div("SecondaryText", h.a),
				f = g.a.div("MainContentWrapper", h.a),
				v = g.a.div("MainContent", h.a),
				O = g.a.wrapped(p.a, "BackgroundPlaceholder", h.a),
				C = g.a.wrapped(u.h, "SubmitLink", h.a),
				E = g.a.img("SnooImg", h.a),
				_ = g.a.div("EmptyHomepage", h.a),
				j = e => {
					switch (e) {
						case c.O.RISING:
							return n.fbt._("Create a new post and take all the glory", null, {
								hk: "1NhXUe"
							});
						case c.O.TOP:
						case c.O.CONTROVERSIAL:
							return null;
						default:
							return n.fbt._("Be the first to till this fertile land.", null, {
								hk: "VYQD0"
							})
					}
				},
				N = e => {
					let {
						listingName: t,
						sort: s
					} = e;
					const r = j(s);
					return i.a.createElement(v, null, i.a.createElement(x, null, (e => {
						switch (e) {
							case c.O.RISING:
								return n.fbt._("Looks like nothing is rising fast enough in this subreddit", null, {
									hk: "kJ3Te"
								});
							case c.O.TOP:
							case c.O.CONTROVERSIAL:
								return n.fbt._("No posts were found using the {listing sort option} sort. Try changing the sort.", [n.fbt._param("listing sort option", a()(e))], {
									hk: "48BeCW"
								});
							default:
								return n.fbt._("There are no posts in this subreddit", null, {
									hk: "5mVkT"
								})
						}
					})(s)), t && !Object(l.a)(t) && !!r && i.a.createElement(i.a.Fragment, null, i.a.createElement(y, null, j(s)), i.a.createElement(C, {
						to: "/r/".concat(t, "/submit")
					}, n.fbt._("Add a post", null, {
						hk: "1vnCSW"
					}))))
				},
				S = () => i.a.createElement(v, null, i.a.createElement(E, {
					src: "".concat(d.a.assetPath, "/img/snoo_discovery@1x.png")
				}), i.a.createElement(x, null, n.fbt._("Reddit gets better when you join communities, so find some that you’ll love!", null, {
					hk: "7B6oq"
				})), i.a.createElement(C, {
					to: "/r/popular"
				}, n.fbt._("Browse Popular Posts", null, {
					hk: "2zfgXv"
				})));
			t.a = g.a.wrapped(e => i.a.createElement(_, null, i.a.createElement(O, {
				isLoading: !1,
				layout: m.g.Classic
			}), i.a.createElement(f, null, e.subreddit ? i.a.createElement(N, e) : i.a.createElement(S, null))), "Component", h.a)
		},
		"./src/reddit/components/FakeBannerAd/index.m.less": function(e, t, s) {
			e.exports = {
				BannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				bannerContainer: "_4ELfhcLRELWhYrOp6R4se",
				FakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_",
				fakeBannerAdImage: "_3q7Cs0j3hSEoS6omo8egL_"
			}
		},
		"./src/reddit/components/FakeBannerAd/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var n = s("./src/app/strings/index.ts"),
				r = s("./src/config.ts"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/reddit/components/FakeBannerAd/index.m.less"),
				d = s.n(i),
				c = s("./src/lib/lessComponent.tsx");
			const l = c.a.div("BannerContainer", d.a),
				m = c.a.wrapped(e => o.a.createElement("img", {
					className: e.className,
					src: e.src
				}), "FakeBannerAdImage", d.a),
				u = "GoogleAd HomeAds InArticleAd LeftAd SidebarAd ad-300-250 ad-banner adbar adbox1 ads-area adsense-ad box_ad googad";
			class p extends o.a.PureComponent {
				render() {
					const {
						href: e,
						img: t
					} = this.props;
					return o.a.createElement(l, {
						className: u,
						"data-before-content": Object(n.a)("en", "sidebar.sponsored")
					}, o.a.createElement("a", {
						href: r.a.redditUrl + e,
						target: "_blank"
					}, o.a.createElement(m, {
						src: r.a.assetPath + t
					})))
				}
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asTooltip.tsx"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/i18n/utils.ts"),
				f = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				v = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				O = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				_ = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				j = s.n(_);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = "view--layout--FUE",
				w = "LayoutSwitch--picker",
				P = Object(i.a)(g.a),
				k = {
					[p.d.Card]: O.a,
					[p.d.Classic]: f.a,
					[p.d.Compact]: v.a
				},
				I = {
					[p.d.Card]: Object(y.c)("card"),
					[p.d.Classic]: Object(y.c)("classic"),
					[p.d.Compact]: Object(y.c)("compact")
				},
				T = Object(b.t)(),
				L = Object(o.c)({
					dropdownIsOpen: Object(E.b)(w),
					postLayout: b.L,
					redditStyle: b.A
				}),
				B = Object(a.b)(L, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					openDropdown: () => e(Object(m.h)({
						tooltipId: w
					}))
				}));
			class F extends r.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: r
						} = this.props;
						t ? t(e) : (s(e, r), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(C.screen)(t),
							subreddit: Object(C.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: a
						} = this.props, o = s || p.e[a], i = e === o, c = k[e];
						return r.a.createElement(x.b, N({}, t, {
							className: Object(d.a)(j.a.LayoutItem, {
								[j.a.selected]: i
							}),
							"data-layout": e,
							displayText: I[e],
							iconWrapperClassName: j.a.LayoutItemIconWrapper,
							isSelected: i,
							noHover: i,
							onClick: i ? void 0 : () => this.changeLayout(e),
							textClassName: j.a.LayoutItemTextClassName
						}), r.a.createElement(c, {
							className: j.a.LayoutIcon,
							onClick: i ? void 0 : n
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return r.a.createElement(P, N({}, e, {
							className: j.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: j.a.DropdownRow,
							rowIconClassName: j.a.DropdownRowIcon,
							rowSelectedClassName: j.a.DropdownRowSelected,
							tooltipId: w
						}), this.renderItem(p.d.Card), this.renderItem(p.d.Classic), this.renderItem(p.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, a = t || p.e[n];
					return r.a.createElement("div", {
						className: Object(d.a)(j.a.Container, e),
						id: S
					}, r.a.createElement("div", {
						className: j.a.DropdownContainer,
						onClick: s
					}, this.renderItem(a, {
						id: w,
						showDropdownTriangle: !0
					}), r.a.createElement(h.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = T(B(Object(u.c)(Object(c.a)(F))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				CountrySort: "VatfkH4hd3AcIOCT15Zai",
				countrySort: "VatfkH4hd3AcIOCT15Zai",
				StateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				stateSort: "Eh7eF0Eki8fFfZXVYJd1y",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				DropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				dropdownSortWrapper: "_2DTQGxtlm0AKr7OUepCaGY",
				Dropdown: "Sgi9lgQUrox4tW9Q75iif",
				dropdown: "Sgi9lgQUrox4tW9Q75iif",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/actions/preferences.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				u = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				p = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				b = s("./src/lib/addQueryParams/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/components/CountrySort/index.tsx"),
				x = s("./src/reddit/components/ListingSort/index.tsx"),
				y = s("./src/reddit/components/TimeSort/index.tsx"),
				f = s("./src/reddit/constants/listings.ts"),
				v = s("./src/reddit/constants/listingSorts.ts"),
				O = s("./src/reddit/controls/InternalLink/index.tsx"),
				C = s("./src/reddit/helpers/path/index.ts"),
				E = s("./src/reddit/helpers/trackers/navigation.ts"),
				_ = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				j = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				N = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				w = s.n(S);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = new Set([h.O.CONTROVERSIAL, h.O.TOP]),
				I = new Set([h.O.CONTROVERSIAL, h.O.RISING]),
				T = "ListingSort--Overflow",
				L = Object(l.t)({
					isFrontpage: l.y,
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				B = Object(p.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, j.a, N.i, l.C, (e, t, s, n, r) => {
					if (e) return {
						isPopularPage: r,
						sortOptions: e
					};
					const a = [h.O.HOT, h.O.NEW, h.O.TOP, h.O.RISING];
					return (t && (n || s) || r && s) && a.unshift(h.O.BEST), {
						isPopularPage: r,
						sortOptions: a
					}
				});
			class F extends r.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(E.a)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(b.a)(t, {
							sort: e
						}) : Object(C.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							disabled: t,
							geopopularSort: s,
							isPopularPage: n,
							sort: a
						} = this.props, i = n && !!s && e === h.O.HOT && a === h.O.HOT;
						return r.a.createElement(r.a.Fragment, {
							key: e
						}, r.a.createElement(O.a, {
							className: Object(o.a)(w.a.SortLink, e === a && w.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, r.a.createElement(x.a, {
							className: w.a.SortIcon,
							sort: e
						}), r.a.createElement("div", {
							className: w.a.SortLabel
						}, Object(v.a)(e))), i && r.a.createElement(g.a, {
							baseUrl: f.c[f.b.Popular],
							buttonClassName: w.a.DropdownButton,
							className: w.a.CountrySort,
							disabled: t,
							dropdownClassName: w.a.Dropdown,
							rowClassName: w.a.DropdownRow,
							rowSelectedClassName: w.a.DropdownRowSelected,
							wrapperClassName: w.a.DropdownSortWrapper,
							showStateAbbreviations: !0,
							sort: s,
							stateSortClassName: w.a.StateSort
						}))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: a,
						timeSort: i
					} = this.props, d = !t && k.has(n), c = I.has(n), l = a.filter(e => !I.has(e)), m = a.filter(e => I.has(e) && e !== n);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(x.d, P({}, this.props, {
						buttonClassName: w.a.DropdownButton,
						className: Object(o.a)(w.a.SortDropdown, e),
						rowClassName: w.a.DropdownRow,
						rowIconClassName: w.a.DropdownRowIcon,
						rowSelectedClassName: w.a.DropdownRowSelected,
						showTitle: !1
					})), r.a.createElement("div", {
						className: Object(o.a)(w.a.SortButtons, e)
					}, l.map(this.renderSort)), c && this.renderSort(n), d && r.a.createElement(y.a, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: w.a.DropdownButton,
						className: w.a.TimeSort,
						dropdownClassName: w.a.Dropdown,
						listingSort: n,
						onChange: s,
						rowClassName: w.a.DropdownRow,
						rowSelectedClassName: w.a.DropdownRowSelected,
						timeSort: i || h.Sb,
						wrapperClassName: w.a.DropdownSortWrapper
					}), m.length > 0 && r.a.createElement(x.d, P({}, this.props, {
						className: Object(o.a)(w.a.SortOverflow, e),
						dropdownClassName: w.a.Dropdown,
						dropdownId: T,
						rowClassName: w.a.DropdownRow,
						rowIconClassName: w.a.DropdownRowIcon,
						rowSelectedClassName: w.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), r.a.createElement("button", {
						className: w.a.SortOverflowButton,
						id: T
					}, r.a.createElement(_.a, null))))
				}
			}
			var A = L(Object(a.b)(B)(Object(c.c)(F))),
				D = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				W = s.n(D);
			const R = Object(l.t)({
					isProfilePage: l.G,
					pageLayer: e => e
				}),
				M = Object(a.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const r = Object(i.c)({
									sort: t,
									timeSort: n
								});
								e(Object(d.G)(s, r))
							}
						}
					}
				});
			class U extends r.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: n = !1,
						isProfilePage: a,
						sort: i,
						sortOptions: d,
						subredditId: c,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return r.a.createElement("div", {
						className: Object(o.a)(W.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, r.a.createElement(A, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: i,
						sortOptions: d,
						timeSort: l
					}), !a && r.a.createElement(u.a, {
						className: W.a.LayoutSwitch,
						subredditId: c
					}))
				}
			}
			t.a = R(M(Object(c.c)(U)))
		},
		"./src/reddit/components/Governance/ClaimPointsBanner/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-ClaimPointsBanner",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-ClaimPointsBanner").then(s.bind(null, "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/ClaimPointsBanner/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = Object(r.a)("spClaimablePoints", a)
		},
		"./src/reddit/components/Governance/CommunityCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-CommunityCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-CommunityCard").then(s.bind(null, "./src/reddit/components/Governance/CommunityCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/CommunityCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/Governance/Leaderboard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-Leaderboard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-Governance-Leaderboard").then(s.bind(null, "./src/reddit/components/Governance/Leaderboard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/Leaderboard/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/Governance/VotingBanner/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/higherOrderComponents/makeAsync.tsx");
			const r = Object(n.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceVotingBanner").then(s.bind(null, "./src/reddit/components/Governance/VotingBanner/index.tsx")).then(e => e.default)
			});
			t.a = r
		},
		"./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/reddit/featureFlags/index.ts");
			const c = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistration").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/Banner/index.tsx")).then(e => e.default)
			});
			const l = Object(o.c)({
				featureEnabled: d.d.spWalletRegistrationBanner
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(c, e)
			}))
		},
		"./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/reddit/featureFlags/index.ts");
			const c = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("GovernanceWalletRegistrationStellarBanner").then(s.bind(null, "./src/reddit/components/Governance/WalletRegistration/StellarBanner/index.tsx")).then(e => e.default)
			});
			const l = Object(o.c)({
				featureEnabled: d.d.spStellarWalletRegistration
			});
			t.a = Object(a.b)(l)((function(e) {
				return r.a.createElement(c, e)
			}))
		},
		"./src/reddit/components/HeaderImage/index.m.less": function(e, t, s) {
			e.exports = {
				Planet: "xAmHTHwvPxxv5jpbb68XN",
				planet: "xAmHTHwvPxxv5jpbb68XN",
				SubredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				subredditIcon: "_3rnV85Ep3gNSeNzlSEJ0eC",
				HeaderText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				headerText: "_2wzi-W7JiZ7A6U6aFvfvSR",
				HeaderUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				headerUrl: "_36MHhLdcmnzdWt0OMdNlwd",
				Container: "_2L5G9B5yaoqW3IegiYN-FL",
				container: "_2L5G9B5yaoqW3IegiYN-FL",
				HeaderContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				headerContainer: "_2RkQc9Gtsq3cPQNZLYv4zc",
				fullScreenDisabled: "_1yF58T8cn1Lb1f5no79sl8",
				useOverlay: "_1lDljcXh3IMpCeypDtnDAr",
				HeaderContent: "_2ejRlONMr5WoDRgyd4GRyM",
				headerContent: "_2ejRlONMr5WoDRgyd4GRyM",
				hoverHeaderContent: "wyBqMGsbezX5QI0xVtegK",
				PositionedImage: "_26j3FxU4jTfjqi8m96HMmI",
				positionedImage: "_114maV-96nVPek5oReA0kO",
				hoverPositionedImage: "_2L0wcm3McgWbJBT9_UHWyU"
			}
		},
		"./src/reddit/components/HeaderImage/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/constants/screenWidths.ts"),
				l = s("./src/reddit/helpers/getSubredditIcon/index.ts"),
				m = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				u = s("./src/reddit/models/Theme/index.ts"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/components/HeaderImage/index.m.less"),
				h = s.n(b);
			const g = d.a.wrapped(m.a, "Planet", h.a),
				x = d.a.div("SubredditIcon", h.a),
				y = d.a.div("PositionedImage", h.a),
				f = d.a.div("HeaderContent", h.a),
				v = d.a.div("HeaderContainer", h.a),
				O = d.a.span("HeaderText", h.a),
				C = d.a.wrapped(a.a, "HeaderUrl", h.a),
				E = d.a.span("Container", h.a),
				_ = Object(i.a)(e => {
					const t = Object(u.e)(e.headerText, e.prefixedHeaderText, Object(p.a)(e).banner.communityNameFormat || ""),
						s = Object(l.a)(e),
						n = Object(p.a)(e).banner.positionedImageAlignment,
						a = Object(p.a)(e).banner.positionedImage,
						i = Object(p.a)(e).banner.secondaryBannerPositionedImage;
					let d;
					switch (n) {
						case "right":
							d = {
								right: "-8px"
							};
							break;
						case "centered":
							d = {
								left: "50%",
								transform: "translate(-50%, -50%)"
							};
							break;
						default:
							d = {
								left: "-8px"
							}
					}
					const m = !!a && !!i && "left" === n,
						b = Object(u.g)(Object(p.a)(e).banner.backgroundColor, Object(p.a)(e).banner.backgroundImage, Object(p.a)(e).banner.backgroundImagePosition),
						_ = parseInt(Object(p.a)(e).banner.iconDimensions.customSize, 10),
						j = "".concat(4 + _, "px");
					return r.a.createElement(E, {
						style: {
							background: b,
							backgroundPosition: "center top",
							height: "".concat(Object(p.a)(e).banner.height, "px")
						}
					}, r.a.createElement(C, {
						className: e.className,
						to: e.url
					}, r.a.createElement(v, {
						className: Object(o.a)({
							[h.a.fullScreenDisabled]: !e.disableFullscreen,
							[h.a.useOverlay]: !!Object(p.a)(e).navBar.useOverlay
						}),
						style: {
							maxWidth: e.disableFullscreen ? "".concat(e.maxWidth || c.a, "px") : "100%"
						}
					}, !e.isTopBannerVariant && r.a.createElement(f, {
						className: Object(o.a)({
							[h.a.hoverHeaderContent]: m
						})
					}, e.theme && Object(p.a)(e).banner.showCommunityIcon && (s ? r.a.createElement(x, {
						style: {
							backgroundImage: "url(".concat(s, ")"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					}) : r.a.createElement(g, {
						style: {
							padding: "".concat(Object(p.a)(e).banner.iconDimensions.padding, "px"),
							borderRadius: "".concat(Object(p.a)(e).banner.iconDimensions.borderRadius, "px"),
							height: j,
							width: j
						}
					})), r.a.createElement(O, {
						style: {
							paddingTop: 32 === _ ? "4px" : "14px"
						}
					}, t)), r.a.createElement(y, {
						className: Object(o.a)(h.a.PositionedImage, {
							[h.a.positionedImage]: !!a,
							[h.a.hoverPositionedImage]: !!a && !!i
						}),
						style: Object.assign({}, d, {
							height: "".concat(Object(p.a)(e).banner.positionedImageHeight, "px")
						})
					}))))
				});
			t.a = _
		},
		"./src/reddit/components/IdCard/Banner.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/components/IdCard/index.m.less"),
				o = s.n(a);
			const i = r.a.memo(e => {
				const {
					bannerBackgroundImage: t
				} = e;
				return r.a.createElement("div", {
					className: o.a.Banner,
					style: t && t.length ? {
						backgroundImage: "url(".concat(t, ")")
					} : void 0
				})
			})
		},
		"./src/reddit/components/IdCard/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "IdCard",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("IdCard").then(s.bind(null, "./src/reddit/components/IdCard/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/IdCard/index.tsx"
				}
			})
		},
		"./src/reddit/components/IdCard/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./src/app/strings/index.ts"),
				r = s("./src/config.ts"),
				a = s("./src/reddit/constants/listings.ts"),
				o = s("./src/reddit/constants/page.ts");
			const i = e => e && e.toLowerCase() === a.b.Popular,
				d = e => e && e.toLowerCase() === a.b.All,
				c = e => e && e === o.b,
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 40,
						s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 68;
					return {
						height: s,
						image: e,
						width: t
					}
				},
				m = e => {
					let t, s, o, m, u, {
						language: p,
						listingName: b,
						subreddit: h,
						idCardWidget: g
					} = e;
					const x = g && g.subscribersText || Object(n.a)(p, "structuredStyles.widgets.id-card.subscribersText"),
						y = g && g.currentlyViewingText || Object(n.a)(p, "structuredStyles.widgets.id-card.currentlyViewingText");
					let f, v;
					if (c(b)) {
						t = "".concat(r.a.assetPath, "/img/id-cards/home-banner@2x.png"), o = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), u = a.c[a.b.Home]; {
							s = Object(n.a)(p, "listings.home.longDescription");
							const e = Object(n.a)(p, "listings.home.title");
							m = e.charAt(0).toUpperCase() + e.slice(1)
						}
					} else d(b) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), s = Object(n.a)(p, "listings.all.longDescription"), o = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = "r/all", u = a.c[a.b.All]) : i(b) ? (t = "".concat(r.a.assetPath, "/img/id-cards/banner@2x.png"), s = Object(n.a)(p, "listings.popular.longDescription"), o = l("url('".concat(r.a.assetPath, "/img/id-cards/snoo-home@2x.png')")), m = "r/popular", u = a.c[a.b.Popular]) : b && (s = g && g.description, o = l(""), m = h.displayText, u = h.url, v = g && g.subscribersCount, f = g && g.currentlyViewingCount);
					return Object.assign({
						snooBackground: o,
						description: s,
						titleText: m,
						url: u,
						subscribersCount: v,
						subscribersText: x,
						currentlyViewingText: y,
						currentlyViewingCount: f
					}, t ? {
						bannerBackgroundImage: t
					} : {})
				}
		},
		"./src/reddit/components/IdCard/index.m.less": function(e, t, s) {
			e.exports = {
				categoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				icon: "_2XJvPvYIEYtcS4ORsDXwa3",
				subredditIcon: "_2Vkdik1Q8k0lBEhhA_lRKE",
				largeSubredditIcon: "eGjjbHtkgFc-SYka3LM3M",
				metaTextContainer: "j9k2MUR13FjoBBeLo1C1m",
				metaText: "_3Evl5aOozId3QVjs7iry2c",
				memberIcon: "_1qhTBEK-QmJbvMP4ckhAbh",
				headerButtonsContainer: "_3nzVPnRRnrls4DOXO_I0fn",
				overflowButton: "_1LAmcxBaaqShJsi8RNT-Vp",
				communityCoinCount: "_2bWoGvMqVhMWwhp4Pgt4LP",
				coinIcon: "tWeTbHFf02PguTEonwJD0",
				coinsTooltipContent: "_2AbGMsrZJPHrLm9e-oyW1E",
				helpIcon: "_1cB7-TWJtfCxXAqqeyVb2q",
				Banner: "hpxKmfWP2ZiwdKaWpefMn",
				banner: "hpxKmfWP2ZiwdKaWpefMn",
				Title: "_20Kb6TX_CdnePoT8iEsls6",
				title: "_20Kb6TX_CdnePoT8iEsls6",
				TitleShifted: "t9oUK2WY0d28lhLAh3N5q",
				titleShifted: "t9oUK2WY0d28lhLAh3N5q",
				AdorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				adorableSnoo: "_2KqgQ5WzoQRJqjjoznu22o",
				TitleLink: "_2D7eYuDY6cYGtybECmsxvE",
				titleLink: "_2D7eYuDY6cYGtybECmsxvE",
				TitleText: "_19bCWnxeTjqzBElWZfIlJb",
				titleText: "_19bCWnxeTjqzBElWZfIlJb",
				TitleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				titleTextShiftedContainer: "_2TC7AdkcuxFIFKRO_VWis8",
				TitleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				titleTextWithSecondaryTitle: "_35WVFxUni5zeFkPk7O4iiB",
				UserCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				userCounts: "_7kAMkb9SAVF8xJ3L53gcW",
				SubscriberCount: "nEdqRRzLEN43xauwtgTmj",
				subscriberCount: "nEdqRRzLEN43xauwtgTmj",
				Online: "_3_HlHJ56dAfStT19Jgl1bF",
				online: "_3_HlHJ56dAfStT19Jgl1bF",
				CakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeDay: "_2QZ7T4uAFMs_N83BZcN-Em",
				cakeIcon: "_19sQCxYe2NApNbYNX5P5-L",
				Count: "_3XFx6CfPlg-4Usgxm0gK8R",
				count: "_3XFx6CfPlg-4Usgxm0gK8R",
				CountMetaText: "_34InTQ51PAhJivuc_InKjJ",
				countMetaText: "_34InTQ51PAhJivuc_InKjJ",
				UserType: "_29_mu5qI8E1fq6Uq5koje8",
				userType: "_29_mu5qI8E1fq6Uq5koje8",
				WidgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				widgetHeader: "_2BY2-wxSbNFYqAy98jWyTC",
				Description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				description: "_3sGbDVmLJd_8OV8Kfl7dVv",
				Buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				buttons: "_1qiHDKK74j6hUNxM0p9ZIp",
				SubscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				subscribeButton: "_1eMniuqQCoYf3kOpyx83Jj",
				CreatePostButton: "_326PJFFRv8chYfOlaEYmGt",
				createPostButton: "_326PJFFRv8chYfOlaEYmGt",
				CreateCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				createCommunityButton: "Jy6FIGP1NvWbVjQZN7FHA",
				VisitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				visitCommunityButton: "_1cDoUuVvel5B1n5wa3K507",
				ModSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				modSettings: "_2_w8DCFR-DCxgxlP1SGNq5",
				ModToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				modToolsLink: "_1aS-wQ7rpbcxKT0d5kjrbh",
				CategoryContainer: "_2cn386lOe1A_DTmBUA-qSM",
				titleTextContainer: "_2Zdkj7cQEO3zSGHGK2XnZv",
				editIconText: "wzFxUZxKK8HkWiEhs0tyE",
				iconFilePicker: "_3R24jLERJTaoRbM_vYd9v0",
				HorizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				horizontalLine: "_38lwnrIpIyqxDfAF1iwhcV",
				subredditTitle: "yobE-ux_T1smVDcFMMKFv",
				CommunityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityTypeContainer: "_2DVpJZAGplELzFy4mB0epQ",
				communityType: "x1f6lYW8eQcUFu0VIPZzb",
				communityTypeIcon: "LTiNLdCS1ZPRx9wBlY2rD",
				communityTypeText: "_18e78ihYD3tNypPhtYISq3"
			}
		},
		"./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/IdCard/index.m.less"),
				i = s.n(o);
			const d = e => {
				let {
					snooBackground: t
				} = e;
				return r.a.createElement("div", {
					className: i.a.AdorableSnoo,
					style: {
						background: t.image,
						backgroundSize: "".concat(t.width, "px ").concat(t.height, "px"),
						height: t.height,
						width: t.width
					}
				})
			};
			t.a = e => {
				let {
					titleText: t,
					snooBackground: s
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(i.a.Title, i.a.TitleShifted)
				}, r.a.createElement(d, {
					snooBackground: s
				}), r.a.createElement("div", {
					className: i.a.TitleTextShiftedContainer
				}, r.a.createElement("span", {
					className: i.a.TitleText
				}, t)))
			}
		},
		"./src/reddit/components/InFeedPostCreation/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-InFeedPostCreation",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-InFeedPostCreation").then(s.bind(null, "./src/reddit/components/InFeedPostCreation/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/InFeedPostCreation/index.tsx"
				}
			})
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.m.less": function(e, t, s) {
			e.exports = {
				IconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				iconWrapper: "_2p07tPrx9WpxDTQJ5cmVNe",
				TextWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				textWrapper: "_2jpm-rNr0Hniw6BX3NWMVe",
				leftSideRectangle: "_3TLlMYjrPH9Kl9522LpSxb",
				wrapper: "_1DUKbp8va6vxOv9zemBDBi",
				subtitle: "_2J85dtk0HKQBLk8HTSWduv",
				title: "Nt8TnDvJ2BsL8KWcFQKy5"
			}
		},
		"./src/reddit/components/InfoBanners/BannerBase/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/InfoBanners/BannerBase/index.m.less"),
				i = s.n(o),
				d = s("./src/lib/lessComponent.tsx");
			const c = d.a.div("IconWrapper", i.a),
				l = d.a.div("TextWrapper", i.a);
			t.a = e => {
				const {
					className: t,
					color: s,
					icon: n,
					subtitle: o,
					title: d
				} = e;
				return r.a.createElement("div", {
					className: Object(a.a)(t, i.a.wrapper),
					style: s && {
						borderColor: s
					} || {}
				}, r.a.createElement("div", {
					className: i.a.leftSideRectangle,
					style: s && {
						backgroundColor: s
					} || {}
				}), n ? r.a.createElement(c, null, n) : r.a.createElement(c, null), r.a.createElement(l, null, r.a.createElement("div", {
					className: i.a.title
				}, d), o && r.a.createElement("div", {
					className: i.a.subtitle
				}, o)))
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3UJGTKmHd4TVKyOdhiMAJ1",
				rawHtmlDisplay: "s2P-f2c3l2Irco5Ru0S5J",
				link: "_1eRb8-B7kEgkwxWFSWuVUk",
				icon: "WCZvfrkaO-Zq7vsDKOAdS"
			}
		},
		"./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/app/strings/index.ts"),
				d = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				c = s("./src/reddit/constants/colors.ts"),
				l = s("./src/reddit/controls/InternalLink/index.tsx"),
				m = s("./src/reddit/i18n/components.tsx"),
				u = s("./src/reddit/i18n/utils.ts"),
				p = s("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				b = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				g = s("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				x = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.m.less"),
				y = s.n(x);
			const f = r.a.createElement(p.a, {
					className: y.a.icon
				}),
				v = Object(o.c)({
					language: h.O,
					subreddit: b.y,
					subredditAboutInfo: b.v
				}),
				O = Object(a.b)(v);
			t.a = O(e => {
				const {
					subreddit: t,
					subredditAboutInfo: s,
					language: n
				} = e;
				if (!(t && t.isQuarantined)) return null;
				const a = s && s.quarantineMessageHtml,
					o = s && s.quarantineMessage || Object(i.a)(n, "contentGate.quarantinedSubreddit.quarantineMsg");
				return r.a.createElement(g.a, {
					className: y.a.container,
					color: c.a.quarantine,
					icon: f,
					subtitle: r.a.createElement("span", null, r.a.createElement(m.c, null, "This community is"), " ", r.a.createElement("a", {
						className: y.a.link,
						href: "https://www.reddithelp.com/en/categories/reddit-101/rules-reporting/account-and-community-restrictions/quarantined-subreddits",
						target: "_blank"
					}, r.a.createElement(m.c, null, "quarantined")), ": ", a ? r.a.createElement(d.a, {
						className: y.a.rawHtmlDisplay,
						html: a
					}) : o, " ", r.a.createElement(l.a, {
						className: y.a.link,
						to: "/"
					}, r.a.createElement(m.c, null, "Click to return home."))),
					title: Object(u.c)("Community Quarantined")
				})
			})
		},
		"./src/reddit/components/JSAPIContainers/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/lodash/isNil.js")),
				d = s.n(i),
				c = s("./src/reddit/constants/jsapiEvents.ts");
			var l = s("./src/reddit/singleton/EventSystem.ts"),
				m = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const u = Object(o.c)({
				consumers: e => e.jsApi
			});
			class p extends n.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.fireEvent = e => {
						const t = this.props,
							{
								className: s,
								consumers: n
							} = t,
							r = m(t, ["className", "consumers"]);
						l.a.publish(c.a, r, e)
					}, this.setRef = e => this.el = e
				}
				componentDidMount() {
					d()(this.el) || this.fireEvent(this.el)
				}
				componentDidUpdate() {
					d()(this.el) || this.fireEvent(this.el)
				}
				render() {
					const {
						props: e
					} = this;
					return e.consumers.length ? r.a.createElement("span", {
						className: this.props.className,
						ref: this.setRef
					}, e.consumers.map(e => e && r.a.createElement("span", {
						"data-name": e,
						key: e
					}))) : null
				}
			}
			var b = Object(a.b)(u, {})(p),
				h = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/subreddit.ts");
			const x = (e, t) => {
				const s = Object(h.n)(e, t),
					n = Object(g.G)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var y = Object(a.b)(() => Object(o.a)(x, h.j, (e, t) => Object.assign({}, e, {
				depth: t
			})))(e => r.a.createElement(b, {
				type: "comment",
				data: {
					author: e.comment.author,
					approvedAtUTC: e.comment.approvedAtUTC,
					approvedBy: e.comment.approvedBy,
					bannedAtUTC: e.comment.bannedAtUTC,
					body: e.comment.body,
					created: e.comment.created,
					distinguishType: e.comment.distinguishType,
					id: e.comment.id,
					isApproved: e.comment.isApproved,
					isRemoved: e.comment.isRemoved,
					isSpam: e.comment.isSpam,
					isStickied: e.comment.isStickied,
					isTopLevel: 0 === e.depth,
					post: {
						id: e.comment.postId
					},
					removedBy: e.comment.bannedBy,
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			const f = (e, t) => {
				const s = Object(h.n)(e, t),
					n = Object(g.G)(e, t);
				return {
					comment: s,
					isModerator: !(!n || !n.name) && !!e.moderatingSubreddits[n.name],
					subredditOrProfile: n
				}
			};
			var v = Object(a.b)(() => Object(o.a)(f, e => e))(e => r.a.createElement(b, {
				type: "commentAuthor",
				data: {
					author: e.comment.author,
					comment: {
						id: e.commentId
					},
					isModerator: e.isModerator,
					post: {
						id: e.comment.postId
					},
					subreddit: {
						id: e.subredditOrProfile ? e.subredditOrProfile.id : "",
						name: e.subredditOrProfile ? e.subredditOrProfile.name : "",
						type: e.subredditOrProfile ? e.subredditOrProfile.type : ""
					}
				}
			}));
			var O = Object(a.b)(() => Object(o.c)({
					subreddit: g.P
				}))(e => r.a.createElement(b, {
					className: e.className,
					type: "communityTools",
					data: {
						sectionName: e.sectionName,
						subreddit: e.subreddit ? {
							id: e.subreddit.id,
							name: e.subreddit.name,
							type: e.subreddit.type
						} : {}
					}
				})),
				C = s("./src/reddit/selectors/posts.ts");
			var E = Object(a.b)(() => Object(o.c)({
				post: C.M,
				subredditOrProfile: C.Y,
				isModerator: (e, t) => {
					const s = Object(C.Y)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "post",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					created: e.post.created,
					numComments: e.post.numComments,
					distinguishType: e.post.distinguishType,
					domain: e.post.source && e.post.source.displayText,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					sourceUrl: e.post.source && e.post.source.url,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var _ = Object(a.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(C.Y)(e, {
					postId: t.post.id
				}),
				isModerator: (e, t) => {
					const s = Object(C.Y)(e, {
						postId: t.post.id
					});
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "postAuthor",
				data: {
					author: e.post.author,
					isModerator: e.isModerator,
					post: {
						id: e.post.id
					},
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {}
				}
			}));
			var j = Object(a.b)(() => Object(o.c)({
				post: C.M,
				subredditOrProfile: C.Y,
				isModerator: (e, t) => {
					const s = Object(C.Y)(e, t);
					return s && !!e.moderatingSubreddits[s.name] || !1
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "postModTools",
				data: {
					author: e.post.author,
					approvedAtUTC: e.post.approvedAtUTC,
					approvedBy: e.post.approvedBy,
					bannedAtUTC: e.post.bannedAtUTC,
					distinguishType: e.post.distinguishType,
					flair: e.post.flair,
					id: e.post.id,
					isApproved: e.post.isApproved,
					isRemoved: e.post.isRemoved,
					isSpam: e.post.isSpam,
					media: e.post.media,
					numComments: e.post.numComments,
					permalink: e.post.permalink,
					removedBy: e.post.bannedBy,
					subreddit: e.subredditOrProfile ? {
						id: e.subredditOrProfile.id,
						name: e.subredditOrProfile.name,
						type: e.subredditOrProfile.type
					} : {},
					title: e.post.title,
					voteState: e.post.voteState
				}
			}));
			var N = Object(a.b)(() => Object(o.c)({
				subreddit: g.P
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "sidebar",
				data: {
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			var S = Object(a.b)(() => Object(o.c)({
				subredditOrProfile: (e, t) => Object(g.J)(e, {
					identifier: t
				})
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "subreddit",
				data: {
					id: e.subredditOrProfile.id,
					displayText: e.subredditOrProfile.displayText,
					name: e.subredditOrProfile.name,
					title: e.subredditOrProfile.title,
					url: e.subredditOrProfile.title
				}
			}));
			var w = Object(a.b)(() => Object(o.c)({
				subreddit: (e, t) => {
					let {
						subredditId: s
					} = t;
					return s ? Object(g.P)(e, {
						subredditId: s
					}) : null
				}
			}))(e => r.a.createElement(b, {
				className: e.className,
				type: "userHovercard",
				data: {
					user: e.user,
					contextId: e.contextId,
					subreddit: e.subreddit ? {
						id: e.subreddit.id,
						name: e.subreddit.name,
						type: e.subreddit.type
					} : {}
				}
			}));
			s.d(t, "a", (function() {
				return y
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "f", (function() {
				return j
			})), s.d(t, "g", (function() {
				return N
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "i", (function() {
				return w
			}))
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				c = s.n(d);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			t.a = Object(o.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: o,
					post: d,
					redditStyle: u,
					theme: p
				} = e, b = m(e, ["children", "className", "flairStyleTemplate", "onClick", "post", "redditStyle", "theme"]);
				return r.a.createElement("div", l({
					className: Object(a.a)(c.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: o
				}, b), t)
			})
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/LRUCache/index.ts"),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/ClassicPost/Placeholder.tsx"),
				c = s("./src/reddit/components/CompactPost/Placeholder/index.tsx"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				p = s.n(u),
				b = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less"),
				h = s.n(b);
			const {
				fbt: g
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("div", {
					className: Object(i.a)(t, h.a.container, h.a.placeholder, h.a.large, p.a.largeAndMediumPostStyles)
				}, r.a.createElement(l.a, {
					className: h.a.backgroundWrapper
				}, r.a.createElement("div", {
					className: h.a.titleAndDescriptionContainer
				}, r.a.createElement("h3", {
					className: h.a.title
				}, g._("Top broadcast right now", null, {
					hk: "2hS1kb"
				}))), r.a.createElement("div", {
					className: h.a.body
				}, r.a.createElement("div", {
					className: h.a.previewContainer
				}, r.a.createElement("div", {
					className: Object(i.a)(h.a.thumbnail, h.a.noise)
				})))))
			};
			var y = e => {
				let {
					className: t,
					layout: s
				} = e;
				return s === m.g.Classic ? r.a.createElement(d.b, {
					className: Object(i.a)(t, h.a.classicPostPlaceholder),
					isLoading: !0
				}) : s === m.g.Compact ? r.a.createElement(c.a, {
					className: Object(i.a)(t, h.a.compactPostPlaceholder),
					isLoading: !0
				}) : r.a.createElement(x, {
					className: t
				})
			};
			const f = Object(o.a)({
				ErrorComponent: () => null,
				LoadingComponent: e => {
					let {
						className: t,
						layout: s
					} = e;
					return r.a.createElement(y, {
						className: t,
						layout: s
					})
				},
				getComponent: () => Promise.all([s.e("vendors~LiveVideoPlayer~PublicAccessNetwork~RpanListingUnit"), s.e("CollectionCommentsPage~CommentsPage~ModerationPages~Poll~PostDraft~ProfileComments~ProfileOverview~P~0040a89a"), s.e("Poll~ProfileComments~ProfilePrivate~RpanListingUnit~SearchResults~reddit-components-ClassicPost~redd~f8abff80"), s.e("RpanListingUnit")]).then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/ListingUnit/index.tsx")).then(e => e.default)
			});
			var v = e => r.a.createElement(f, e),
				O = s("./src/reddit/helpers/trackers/rpan.ts");
			const C = e => e === m.g.Classic ? 88 : e === m.g.Compact ? 42 : 340;
			s.d(t, "a", (function() {
				return _
			}));
			const E = new a.a(20),
				_ = e => {
					const t = "rpan-".concat(e.layout, "-").concat(e.listingKey),
						s = E.get(t);
					if (s) return s;
					const n = j(e.desiredIndex, e.children),
						a = {
							child: {
								id: t,
								estHeight: C(e.layout),
								trackOnEnteredViewport: () => e.sendEvent(Object(O.m)()),
								render: t => {
									let {
										className: s
									} = t;
									return r.a.createElement(v, {
										className: s,
										layout: e.layout,
										listingName: e.listingName
									})
								}
							},
							idx: n
						};
					return E.set(t, a), a
				},
				j = (e, t) => {
					const s = new Set(Object.keys(t).map(e => parseInt(e, 10)));
					for (; s.has(e);) e++;
					return e
				}
		},
		"./src/reddit/components/PublicAccessNetwork/ListingUnit/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1EG7_Cm18ANvUvJ4rJdRgQ",
				leftRail: "_2GllO2Gk7c6od_GL_uNYcO",
				backgroundWrapper: "_3qQRMrsougg399HF8ZDsfl",
				header: "_25K6Ujp7eqOAHEdYuHm3pY",
				titleAndDescriptionContainer: "lQm93MTLO_P-uDIe2PRl3",
				title: "_1eNkAwmWuXZFmNLfie958",
				description: "fTm7r0gvPYKH7pWZpQbgm",
				overflowMenu: "_1g1tKbaVucAvOc7c2mO--M",
				overflowItemIconWrapper: "yw5ALrlWcD8wfh7tIB4Jl",
				overflowItemText: "fxp6qlPWJ76riedygoUS7",
				hideIcon: "_1YoM6AZ3m3ETysTwNLrh3N",
				flatListContainer: "_2psTIDB-4cySf4KyON03mz",
				flatlistSeparator: "_1q8ZrSYLuE8Stn2AL2N4mJ",
				expandoButton: "_2OUloQpdxYXyrn8kPE4iAu",
				videoIcon: "_1uKWYPTIE0QxbdTkW9En19",
				expandoIcon: "_2m0hG8zpYJ2W34yfcu_PGL",
				bigExpando: "qecjZnTfgEjCTlYKgqrl0",
				bigExpandoIcon: "_8ViGpsDZkJ4aNM6aVyan0",
				previewContainer: "_1N144m-88joWY3ZwzWRjrl",
				thumbnail: "A8CAQWacAEq_Pwee5F5IZ",
				placeholder: "_3XAxDMGyfQtOCP0nwHqdLt",
				gradientAnimation: "_3Jz-b55_o5VWDQ42wh1-rr",
				glimmer: "_1HSyAH-KtED8iH51buUWfa",
				noise: "_4AhQxTHsKbDr8Z4UeVFvR",
				infoContainer: "_2aNPePbQCJ2-xyqF693-oh",
				watchingCount: "VT9OiuLNsb6RZcYm86q9G",
				liveStatus: "_1YeXsBJft9g02XQNAzcPWD",
				titlePlaceholder: "_3DC7-C7eSLDyl1gxOp5IFX",
				large: "hrQ5rXDbyl6t3TIXxENXB",
				body: "_1jrhjWiRPpBMVjEPmkDP26",
				previewLink: "_2ZFeLyTw6PIP6lE1S9c4Js",
				classic: "_3Rb0d4ST3qYLtk7GE1D2Ku",
				thumbnailContainer: "_1UGYtZeEoz8fDy4G-b4pqk",
				main: "_12iec8OZ9gJJtQR8nSC2se",
				compact: "_2mQGWgGIa1tOb-9mH8lvcG",
				verticalVotes: "_3Q8HLP8Cv_uongOZe_uVp2",
				score: "_1c8HaTqXDAT7pYLrFLAWFt",
				horizontalVotes: "_3dLEcgpoUWjqaG1vVXlfYR",
				compactPostPlaceholder: "jw9TfhViHYwiaSOWfhKRa",
				classicPostPlaceholder: "_2lnslGhr0-HKZXmHDCzAU7"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less": function(e, t, s) {
			e.exports = {
				header: "_3ioMyxiI-wWgZFqBDVBh6r"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.m.less"),
				a = s.n(r);
			t.a = n.a.div("header", a.a)
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less": function(e, t, s) {
			e.exports = {
				bodyWrapper: "TRQWddBXkEbkcG_ubUuna",
				mediaWrapper: "_1Gl3uwbMHh5VhlU0JATHu0",
				textWrapper: "YH565aQWcKKY53qc9qHsm",
				meta: "_363wpVC6QeLO7Vq0SwQcOg",
				metaWrapper: "_232eNhzD3iKHOssx14WnYG",
				thumbnail: "_3ot5Uav1x5Oa8hH19Mlogk",
				trendingPost: "_3GfG_jvS9X-90Q_8zU4uCu",
				"m-background": "_3Y1KnhioRYkYGb93uAKhBZ",
				mBackground: "_3Y1KnhioRYkYGb93uAKhBZ",
				flatlist: "_2i5CgtwVkYOwV-M92BNHuo",
				title: "_10WwrR6QeKoqfxT3UBj0Qq",
				titleNoDescription: "_2RETtzv0N74uYf3vCRgQsj",
				spacer: "dnGYcjdXDdH17kki2-FYy",
				description: "_2Jjv0TAohMSydVpAgyhjhA",
				flexSpacer: "_2X1uOOj7bjYyM2hV3o5Eou",
				flair: "_1efPRBcLSuPJJM0TacTA5c",
				backgroundWrapper: "_3HD3Y7jXWPyFxKKnIJCHq3",
				innerContainer: "_UTUAdpYopauDszuTA48r",
				relatedSubredditMetaData: "_2JhihdjWU24No-68VLJ7D-",
				subredditIcon: "_2Gqx0g4kdUGTdMQSR1fSfC",
				promoted: "_24W4uRK86b7o0CPxNTzhIW"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/polished/dist/polished.es.js"),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/FlairWrapper/index.tsx"),
				p = s("./src/reddit/components/TrendingSearches/TrendingItemViewability.tsx"),
				b = s("./src/reddit/connectors/miniCardPost.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/InternalLink/index.tsx"),
				x = s("./src/reddit/controls/Search/RelatedSubredditMetaData.tsx"),
				y = s("./src/reddit/helpers/name/index.ts"),
				f = s("./src/reddit/models/Flair/index.ts"),
				v = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/reddit/components/MiniCardPost/index.m.less"),
				E = s.n(C),
				_ = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.m.less"),
				j = s.n(_);
			const N = e => e.type === f.f.Spoiler,
				S = Object(h.t)();
			t.a = S(Object(b.a)(Object(c.a)(e => {
				const {
					backgroundWrapperClassName: t,
					descriptionClassName: s,
					innerContainerClassName: c,
					onPostClick: b,
					trendingPost: h,
					trendingSearch: f,
					shouldOpenPost: C,
					showSubredditMeta: _ = !0,
					showSubredditName: S,
					subredditOrProfile: w,
					trackPostView: P
				} = e;
				Object(a.useEffect)(() => {
					P && P(f)
				}, [P, f]);
				const k = h && h.preview && h.preview.url || void 0,
					I = h && h.isSponsored ? "promoted_trend" : "trending",
					T = h && Object(l.a)(h.permalink) || "",
					L = C && T || f && Object(i.a)("/search", {
						q: f.rawQuery,
						source: I
					}) || T,
					B = f ? f.subredditInfo && f.subredditInfo.icon : w && w.icon.url,
					F = f ? f.subredditInfo && f.subredditInfo.displayText : w && (w.displayText || w.name),
					A = h ? h.flair.filter(N) : [],
					D = h ? h.score : 0,
					W = h ? h.numComments : 0,
					R = h && h.isSponsored,
					M = Object(O.a)(e).body,
					U = "linear-gradient(\n      ".concat(Object(r.j)(M, .2), ",\n      ").concat(Object(r.j)(M, .3), ",\n      ").concat(Object(r.j)(M, .4), ",\n      ").concat(Object(r.j)(M, .6), ",\n      ").concat(Object(r.j)(M, .8), ",\n      ").concat(M, "\n    )"),
					H = o.a.createElement("div", {
						className: Object(d.a)(j.a.trendingPost, {
							[j.a["m-background"]]: !!k
						})
					}, o.a.createElement(g.a, {
						to: L
					}, o.a.createElement("div", {
						className: Object(d.a)(j.a.backgroundWrapper, E.a.backgroundWrapper, t),
						style: {
							background: Object(v.g)(Object(O.a)(e).body, k || Object(O.a)(e).banner.backgroundImage, "cover"),
							"--SearchDiscoveryUnits-TrendingPosts-Post-background": U
						}
					}, R && o.a.createElement("div", {
						className: j.a.promoted
					}, n.fbt._("promoted", null, {
						hk: "1mLJfa"
					})), o.a.createElement("div", {
						className: Object(d.a)(j.a.innerContainer, E.a.innerContainer, c),
						onClick: b,
						title: h ? h.title : ""
					}, o.a.createElement("h2", {
						className: h ? j.a.title : j.a.titleNoDescription
					}, e.title), h ? o.a.createElement("div", {
						className: Object(d.a)(j.a.description, s)
					}, A.length > 0 && o.a.createElement(u.a, {
						className: j.a.flair,
						titleFlair: A,
						nowrap: !0,
						post: h,
						showCategoryTag: !1
					}), h.title) : o.a.createElement("div", {
						className: j.a.spacer
					}), _ && B && F && o.a.createElement(x.a, {
						className: j.a.relatedSubredditMetaData,
						iconClassName: j.a.subredditIcon,
						iconUrl: B || void 0,
						suffix: n.fbt._("{subredditName} and more", [n.fbt._param("subredditName", F)], {
							hk: "2YTyJf"
						})
					}), !_ && h && o.a.createElement("div", {
						className: j.a.metaLine
					}, S && F && o.a.createElement("span", {
						className: j.a.meta
					}, Object(y.b)(F)), o.a.createElement("span", {
						className: j.a.meta
					}, n.fbt._({
						"*": "{number} points",
						_1: "1 point"
					}, [n.fbt._plural(D, "number", Object(m.b)(D))], {
						hk: "1Jm6il"
					})), o.a.createElement("span", {
						className: j.a.meta
					}, n.fbt._({
						"*": "{number} comments",
						_1: "1 comment"
					}, [n.fbt._plural(W, "number", Object(m.b)(W))], {
						hk: "311aXY"
					})))))));
				return R ? o.a.createElement(p.a, {
					post: h
				}, H) : H
			})))
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1Pcih1cgtQusjyfxp7YPbP",
				"m-card": "Ab_CG1GZxb0mjtooTcgRC",
				mCard: "Ab_CG1GZxb0mjtooTcgRC",
				layout: "_2kSyv4gtHy2zfKKHU-4g7F",
				layoutBody: "_2OOX0Ul2XYOdHT0ojyBOUD",
				layoutHeader: "lUMtC2iyxpeA0-GrN-P2x"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/DiscoveryUnit/Layout/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.m.less"),
				d = s.n(i);
			t.a = e => {
				const {
					className: t,
					layoutBodyClassName: s,
					showCardView: n
				} = e, i = {
					[d.a["m-card"]]: n
				};
				return r.a.createElement("div", {
					className: Object(a.a)(d.a.container, i, t)
				}, r.a.createElement(o.a, {
					className: d.a.layout,
					bodyClassName: Object(a.a)(d.a.layoutBody, i, s),
					header: e.header,
					headerClassName: Object(a.a)(d.a.layoutHeader, i)
				}, e.children))
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3_c5cqV3WsdQo95Ql4El73",
				cardViewContainer: "_3SRia4h16KBodhRWPhm8Yn",
				desc: "_3R8QK7DFEcDSPoSj255qHJ",
				one: "fLTQnOxtJpKvmnJh5ATHh",
				two: "_2c6Ke7Z35QpkUQA7b_RdMX",
				icon: "_1WvWGBpNLkD_JVC5Fdzz6n",
				name: "_3_bgt7LjReM2xalPiPzPhR",
				post: "_1K3CRPtfEoi_X2HCsP1PDn",
				layoutBody: "_1Hi56fRSBr7dTnQbwYoiBi"
			}
		},
		"./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				i = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Container/index.tsx"),
				d = s("./src/reddit/components/Translated/index.tsx"),
				c = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				l = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.m.less"),
				m = s.n(l);
			const u = r.a.createElement(o.a, {
					className: m.a.duHeader
				}, r.a.createElement(d.a, {
					msgId: "discoveryUnits.trendingToday"
				})),
				p = Object(c.a)({
					isLoading: !0
				});
			t.a = e => r.a.createElement(i.a, {
				className: e.className,
				header: u,
				layoutBodyClassName: m.a.layoutBody,
				showCardView: e.showCardView
			}, Array.from({
				length: e.numberOfItems || 6
			}).map((e, t) => r.a.createElement("div", {
				className: m.a.post,
				key: "placeholder-post-".concat(t)
			}, r.a.createElement("div", {
				className: Object(a.a)(m.a.desc, m.a.one, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(m.a.desc, m.a.two, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(m.a.icon, p)
			}), r.a.createElement("div", {
				className: Object(a.a)(m.a.name, p)
			}))))
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less": function(e, t, s) {
			e.exports = {
				sideBarStyle: "wYQbYt3FNY5w9oBiYrHzv",
				BannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				bannerAd: "_2UMQXLQOtNVy_JO9ghou6",
				ThemedWidget: "avKlJzxZU3brq4nAX0_i1",
				themedWidget: "avKlJzxZU3brq4nAX0_i1",
				SidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9",
				sidebarAdPlaceholder: "NqMdak8MgbuSVZAABdAw9"
			}
		},
		"./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/lodash/random.js"),
				a = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/app/strings/index.ts"),
				m = s("./src/reddit/components/BannerAd/index.tsx"),
				u = s("./src/reddit/components/FakeBannerAd/index.tsx"),
				p = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				b = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				h = s("./src/reddit/helpers/adCount/index.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.m.less"),
				y = s.n(x),
				f = s("./src/lib/lessComponent.tsx");
			const v = Object(n.a)({
					resolved: {},
					chunkName: () => "reddit-components-SidebarNativeAd",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~MembershipPaywallPage~3149a115"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("reddit-components-SidebarNativeAd")]).then(s.bind(null, "./src/reddit/components/SidebarNativeAd/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SidebarNativeAd/index.tsx"
					}
				}),
				O = Object(c.c)({
					post: (e, t) => {
						const {
							placement: s,
							placementIndex: n
						} = t, r = !!t.isOverlay;
						return e.sidebarPromotedPosts.models[Object(h.a)(s, r, n)]
					},
					pending: e => !e.sidebarPromotedPosts.firstFetch
				}),
				C = Object(d.b)(O),
				E = f.a.wrapped(m.a, "BannerAd", y.a),
				_ = f.a.wrapped(b.a, "ThemedWidget", y.a),
				j = f.a.div("SidebarAdPlaceholder", y.a),
				N = (e, t, s) => {
					let n = "";
					return t && (n += "overlay-"), n += "sidebar-".concat(e), null != s && (n += "-".concat(s)), n
				},
				S = e => !(!e || e.isBlank) && (!e.isMediaOnly || !!(e.media && Object(g.B)(e.media) && e.media.content)),
				w = e => !!e && e.isBlank,
				P = [{
					img: "/img/house-ads/old_recipes.png",
					href: "/r/old_recipes"
				}, {
					img: "/img/house-ads/eatcheapandhealthy.png",
					href: "/r/eatcheapandhealthy"
				}, {
					img: "/img/house-ads/streetwear.png",
					href: "/r/streetwear"
				}, {
					img: "/img/house-ads/castiron.png",
					href: "/r/castiron"
				}];
			class k extends i.a.Component {
				shouldComponentUpdate(e, t) {
					const {
						className: s,
						redditStyle: n
					} = this.props;
					return s !== e.className || n !== e.redditStyle
				}
				render() {
					const e = a()(0, P.length - 1),
						{
							img: t,
							href: s
						} = P[e],
						{
							className: n,
							redditStyle: r
						} = this.props;
					return i.a.createElement(p.a, null, i.a.createElement(_, {
						className: n,
						contentOnly: !0,
						redditStyle: r
					}, i.a.createElement(u.a, {
						img: t,
						href: s
					})))
				}
			}
			class I extends i.a.Component {
				render() {
					const {
						className: e,
						pending: t,
						post: s,
						isOverlay: n,
						placementIndex: r,
						refreshKey: a,
						listingName: o,
						placement: d,
						sizes: c,
						position: m,
						redditStyle: u,
						forcePlaceholder: b,
						forceHouseAd: h,
						waitForProgrammatic: g
					} = this.props;
					return b || t || !S(s) && g ? i.a.createElement(p.a, null, i.a.createElement(_, {
						className: e,
						contentOnly: !0,
						redditStyle: u
					}, i.a.createElement(j, {
						"data-before-content": Object(l.a)("en", "sidebar.sponsored")
					}))) : h ? i.a.createElement(k, {
						className: e,
						redditStyle: u
					}) : S(s) ? i.a.createElement(p.a, null, i.a.createElement(v, {
						post: s,
						refreshKey: a,
						listingName: o,
						placement: d,
						placementIndex: r
					})) : i.a.createElement(p.a, null, i.a.createElement(_, {
						className: this.props.className,
						contentOnly: !0,
						redditStyle: u
					}, w(s) && i.a.createElement(v, {
						post: s,
						refreshKey: a,
						listingName: o,
						placement: d,
						placementIndex: r
					}), i.a.createElement(E, {
						id: N(d, n, r),
						sizes: c,
						placement: d,
						listingName: o,
						refreshKey: a,
						position: m,
						dataBeforeContent: Object(l.a)("en", "sidebar.sponsored")
					})))
				}
			}
			t.a = C(I)
		},
		"./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/contexts/PageLayer/index.tsx"),
				i = s("./src/reddit/selectors/brandSafety.ts"),
				d = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/components/SidebarAd/BaseSidebarAdDoNotUseOrYoureFired.tsx");

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const u = Object(o.t)();
			t.a = u(Object(a.b)((e, t) => {
				let {
					listingName: s,
					pageLayer: n
				} = t;
				const r = Object(i.b)(e, {
						listingName: s,
						pageLayer: n
					}),
					a = Object(d.x)(e),
					o = Object(i.e)(e);
				return {
					canShowAd: r && !a,
					forcePlaceholder: !Object(i.c)(e),
					isAdsDisabled: a,
					viewIsUnsafe: o
				}
			})(e => {
				var {
					canShowAd: t,
					isAdsDisabled: s,
					viewIsUnsafe: n,
					pageLayer: a
				} = e, o = m(e, ["canShowAd", "isAdsDisabled", "viewIsUnsafe", "pageLayer"]);
				return !s && t && a ? r.a.createElement(c.a, l({
					forceHouseAd: n
				}, o)) : null
			}))
		},
		"./src/reddit/components/SidebarPostList/SmallPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2Wmv4UCfYcoQRIQ7DR-8e0",
				title: "_1ZcONreWbFJQojnbZ7ZkiL",
				redditStyle: "_1ggvQDlV2MNRE0-n1WzILz",
				mainLine: "_3cuOT24TIop8Fh5DSts5E",
				thumbnailContainer: "_3fpi7LgBdg5MRE8fUA1fUO",
				titleSingle: "_3fZTKIoM8CcO5vNlGhJhcO",
				flair: "_1Cs6tR96P3hmYwreAY1R50",
				metaLine: "_1DGZ9-YDQE3YM0S99RbxE-",
				meta: "_2LPptzmLnsGYCvTOkdxjs-"
			}
		},
		"./src/reddit/components/SidebarPostList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2K-Su893lCn5wiAfwsyN_l",
				largePostBackgroundWrapper: "_34WXoo5OYSyzgryGEzGK7K",
				largePostDescription: "_2m8gRHpmUg1pl7zoge-EZr",
				largePostInnerContainer: "_1dMiuQc05SF7vBB-4UrKVJ",
				smallPost: "v6T3Dl7XBqOqskg3JfuUz",
				SeeMore: "_5LqPadYZq-K1Mqq5FXV0",
				seeMore: "_5LqPadYZq-K1Mqq5FXV0"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx");
			t.a = a.a.div("Component", r.a)
		},
		"./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				dropdown: "_3VOrfAzLOyNOXBiysYAOia",
				Pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				pencil: "_31XiNpAoyLdAGh4ftDMWyt",
				DropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				dropdownRow: "_1LEks0EGX8JP8wFUs2r1Gd",
				OverflowMenu: "KZF0GvnWopJYsNtVGODBn",
				overflowMenu: "KZF0GvnWopJYsNtVGODBn"
			}
		},
		"./src/reddit/components/SidebarSubredditChannels/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2sEbIFP3ssTnt1Fo23m26r",
				wrapper: "_2sEbIFP3ssTnt1Fo23m26r"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less": function(e, t, s) {
			e.exports = {
				BladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				bladeContainer: "_1PH-hjTIYFk3bzQxse2VdL",
				Container: "_2lnfWQQ2rf3LByOAo0AIxK",
				container: "_2lnfWQQ2rf3LByOAo0AIxK",
				isSubscriptionPinned: "_3VGAuEF6xANTry3OLdIkY-",
				CloseIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				closeIcon: "_1EMP4yQCIbCfJxoP0mzVJj",
				LoadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loadingTitleContainer: "_1RpN3Nafg2vwgowMWy9NWJ",
				loading: "ZKk731y0xKgZOe9Tjjniq",
				gradientAnimation: "U7_QESggl5iLUzCuBiLcO",
				LoadingTitle: "XP9o26f6xTYlWRW8E4xg",
				loadingTitle: "XP9o26f6xTYlWRW8E4xg",
				LoadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				loadingNavContainer: "_1-eo_nxzRLW0qdLtGlf7Og",
				LoadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				loadingNav: "d_FNVnkwlJQP-PeAkIXj_",
				ShortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				shortLoadingNav: "_237lkQ2Y2seTfge8gEh5db",
				ThemedChevron: "_3yekFtL72Ta99kZASWWCIh",
				themedChevron: "_3yekFtL72Ta99kZASWWCIh"
			}
		},
		"./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/values.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/loadWithRetries/index.ts"),
				p = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				b = s("./src/reddit/icons/svgs/Chevron/index.tsx"),
				h = s("./src/reddit/icons/svgs/Close/index.tsx"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				y = s("./src/reddit/selectors/userPrefs.ts"),
				f = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.m.less"),
				v = s.n(f),
				O = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), E = m.a.div("BladeContainer", v.a), _ = m.a.wrapped(h.a, "CloseIcon", v.a), j = m.a.div("LoadingTitleContainer", v.a), N = m.a.div("LoadingNavContainer", v.a), S = m.a.div("ShortLoadingNav", v.a), w = m.a.wrapped(b.a, "ThemedChevron", v.a), P = e => {
				var t = O(e, []);
				return o.a.createElement(E, null, o.a.createElement(_, null), o.a.createElement(p.k, null, o.a.createElement(p.p, null, C._("Back to mod tools", null, {
					hk: "1YCI0W"
				})), o.a.createElement(p.o, null, o.a.createElement(j, null, o.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingTitle, t.isLoading && v.a.loading)
				})), o.a.createElement(N, null, o.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), o.a.createElement(w, null)), o.a.createElement(N, null, o.a.createElement(S, null), o.a.createElement(w, null)), o.a.createElement(N, null, o.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), o.a.createElement(w, null)), o.a.createElement(N, null, o.a.createElement(S, null), o.a.createElement(w, null)), o.a.createElement(N, null, o.a.createElement("div", {
					className: Object(l.a)(v.a.LoadingNav, t.isLoading && v.a.loading)
				}), o.a.createElement(w, null)))))
			}, k = Object(c.a)({
				getComponent: () => Object(u.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~CryptoHarbergerTaxManageModal~HarbergerTaxManageModal~ModerationPages~PainterModalLoader~Pos~1d90e236"), s.e("StructuredStyles")]).then(s.bind(null, "./src/reddit/components/StructuredStyles/BladeDrawer/index.tsx"))).then(e => e.default),
				ErrorComponent: () => o.a.createElement(P, {
					gradientType: "posts",
					isLoading: !1
				}),
				LoadingComponent: () => o.a.createElement(P, {
					gradientType: "posts",
					isLoading: !0
				})
			}), I = Object(d.c)({
				isEditing: x.j,
				isSubscriptionsPinned: y.b,
				moderatorPermissions: g.j
			});
			t.a = Object(i.b)(I)(e => {
				const t = e.moderatorPermissions && r()(e.moderatorPermissions).some(e => e);
				return e.moderatorPermissions && t && e.isEditing ? o.a.createElement("div", {
					className: Object(l.a)(v.a.Container, e.isSubscriptionsPinned && v.a.isSubscriptionPinned)
				}, e.children, o.a.createElement(k, {
					subredditId: e.subredditId
				})) : o.a.createElement(a.Fragment, null, e.children)
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return o
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return d
			})), s.d(t, "o", (function() {
				return c
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "j", (function() {
				return O
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				a = s.n(r);
			const o = n.a.section("FormPage", a.a),
				i = n.a.h1("HomePageTitle", a.a),
				d = n.a.button("HomePageBreadcrumb", a.a),
				c = n.a.div("HomePageGroup", a.a),
				l = n.a.h1("FormPageTitle", a.a),
				m = n.a.div("FormPageSection", a.a),
				u = n.a.div("FormGroup", a.a),
				p = n.a.h2("FormGroupTitle", a.a),
				b = n.a.div("FormElement", a.a),
				h = n.a.div("FormGroupDescription", a.a),
				g = n.a.div("FormItem", a.a),
				x = n.a.h3("FormElementTitle", a.a),
				y = n.a.div("FormElementDescription", a.a),
				f = n.a.div("FormElementError", a.a),
				v = n.a.div("FormElementSubGroup", a.a),
				O = n.a.li("FormListItem", a.a)
		},
		"./src/reddit/components/SubredditChannelList/index.m.less": function(e, t, s) {
			e.exports = {
				PrimaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				primaryButton: "_2SQdMfMJ1IxoRvGABv8KIW",
				ModalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				modalFormItem: "_3VL0Z7lc7WMcxBi_k8DFLt",
				ModalText: "_3HL4gEFxPNzkrPu94hblvT",
				modalText: "_3HL4gEFxPNzkrPu94hblvT",
				ItemLink: "vByM_anguY6xuCJEcusmJ",
				itemLink: "vByM_anguY6xuCJEcusmJ",
				Detail: "_1hkd6aDOGqeroDz5-yntAS",
				detail: "_1hkd6aDOGqeroDz5-yntAS",
				DescText: "_2Kwn1xR6xMSka95C9d72vF",
				descText: "_2Kwn1xR6xMSka95C9d72vF",
				Title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				title: "_3r7vM0VIJ8sgIql8p8NsGZ",
				Header: "tLKlMoU4-CQkARSxZg_yj",
				header: "tLKlMoU4-CQkARSxZg_yj",
				ChatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				chatIcon: "_3zozwyUkzLhtvWwTH4sxVi",
				PlanetIcon: "hsKCEb94KysCjbHbmbhzx",
				planetIcon: "hsKCEb94KysCjbHbmbhzx",
				Pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				pencil: "_2Uq7jh8m-TWBTcUN8Le4gU",
				Group: "dfN8kolCvNCsNzzf9W39l",
				group: "dfN8kolCvNCsNzzf9W39l",
				Key: "_2fgNZYjyiPjn_UlFwxeaVr",
				key: "_2fgNZYjyiPjn_UlFwxeaVr",
				SubredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				subredditIcon: "_3kc91yHNQO9d-soAKaUMVN",
				EditButton: "_21mAHvYUh9NgVPMyp45QZJ",
				editButton: "_21mAHvYUh9NgVPMyp45QZJ",
				ShowAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				showAllLink: "_1TLrrKY1IX2TvZXwmF3pXy",
				ChannelName: "KIQLM-ci4WJOXrwjTsEzx",
				channelName: "KIQLM-ci4WJOXrwjTsEzx",
				HeaderText: "_3n6CTc1D2t_MfB0tNSgiAj",
				headerText: "_3n6CTc1D2t_MfB0tNSgiAj"
			}
		},
		"./src/reddit/components/SubredditChannelList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/orderBy.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/opener/index.ts"),
				m = s("./src/app/strings/index.ts"),
				u = s("./src/chat/helpers/urls/index.ts"),
				p = s("./src/reddit/actions/chat/subredditChannel.ts"),
				b = s("./src/reddit/actions/chat/toggle.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				g = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = s("./src/reddit/components/SubredditIcon/index.tsx"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				f = s("./src/reddit/constants/modals.ts"),
				v = s("./src/reddit/controls/Button/index.tsx"),
				O = s("./src/reddit/helpers/trackers/chat.ts"),
				C = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				E = s("./src/reddit/icons/svgs/Chat/index.tsx"),
				_ = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				j = s("./src/reddit/models/SubredditChannel/index.ts"),
				N = s("./src/reddit/selectors/chat.ts"),
				S = s("./src/reddit/selectors/subreddit.ts"),
				w = s("./src/reddit/selectors/subredditChannel.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/SubredditChannelList/index.m.less"),
				I = s.n(k);
			s.d(t, "a", (function() {
				return Z
			}));
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js"), L = c.a.wrapped(g.f, "ModalFormItem", I.a), B = c.a.wrapped(v.f, "PrimaryButton", I.a), F = c.a.wrapped(g.m, "ModalText", I.a), A = c.a.a("ItemLink", I.a), D = c.a.p("Detail", I.a), W = c.a.p("DescText", I.a), R = c.a.div("Title", I.a), M = c.a.div("Header", I.a), U = c.a.wrapped(E.a, "ChatIcon", I.a), H = c.a.wrapped(_.a, "PlanetIcon", I.a), V = c.a.wrapped(C.a, "Pencil", I.a), G = c.a.wrapped(e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", {
					transform: "translate(-26.000000, -37.000000)"
				}, o.a.createElement("path", {
					d: "M30.7205152,44.3911599 L31.8223802,44.3911599 C32.9364596,44.3911599 33.8428946,45.2673804 33.8428946,46.3443238 C33.8428946,46.6873548 33.5548926,46.9657568 33.2000329,46.9657568 L29.3428625,46.9657568 C28.9880028,46.9657568 28.7000008,46.6873548 28.7000008,46.3443238 C28.7000008,45.2673804 29.6064358,44.3911599 30.7205152,44.3911599 Z M32.7044508,42.3845527 C32.7044508,43.1482939 32.0615891,43.7697269 31.271512,43.7697269 C30.4814349,43.7697269 29.8385732,43.1482939 29.8385732,42.3845527 C29.8385732,41.6208116 30.4814349,41 31.271512,41 C32.0615891,41 32.7044508,41.6208116 32.7044508,42.3845527 Z M35.8634091,47.1254029 L36.9652741,47.1254029 C38.0793535,47.1254029 38.9857885,48.0016234 38.9857885,49.0785668 C38.9857885,49.4215978 38.6977865,49.6999998 38.3429268,49.6999998 L34.4857564,49.6999998 C34.1308967,49.6999998 33.8428946,49.4215978 33.8428946,49.0785668 C33.8428946,48.0016234 34.7493297,47.1254029 35.8634091,47.1254029 Z M37.8473447,45.1187958 C37.8473447,45.8825369 37.2044829,46.5039699 36.4144059,46.5039699 C35.6243288,46.5039699 34.9814671,45.8825369 34.9814671,45.1187958 C34.9814671,44.3550546 35.6243288,43.734243 36.4144059,43.734243 C37.2044829,43.734243 37.8473447,44.3550546 37.8473447,45.1187958 Z"
				})))
			}, "Group", I.a), K = c.a.wrapped(e => {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					viewBox: "0 0 16 16",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M10.224 7.109c-.623.623-1.709.623-2.332 0a1.652 1.652 0 0 1 0-2.332 1.64 1.64 0 0 1 1.166-.483c.44 0 .855.172 1.166.483a1.652 1.652 0 0 1 0 2.332m.915-3.247A2.923 2.923 0 0 0 9.06 3c-.787 0-1.525.306-2.082.862a2.946 2.946 0 0 0-.403 3.65l-1.76 1.761-.812.811v.001L4 10.087l-.81.81a.646.646 0 0 0 0 .915l.81.811h.001l.27.27a.643.643 0 0 0 .916 0 .648.648 0 0 0 0-.914l-.271-.27a.502.502 0 0 1 0-.708.512.512 0 0 1 .709 0l.27.27a.648.648 0 0 0 .915-.915l-.624-.625L7.49 8.427a2.924 2.924 0 0 0 3.65-.403 2.945 2.945 0 0 0 0-4.162"
				}))
			}, "Key", I.a), J = c.a.wrapped(x.b, "SubredditIcon", I.a), q = c.a.button("EditButton", I.a), Y = c.a.button("ShowAllLink", I.a), z = c.a.span("ChannelName", I.a), Q = c.a.div("HeaderText", I.a);
			var Z;
			! function(e) {
				e[e.Modal = 0] = "Modal", e[e.Widget = 1] = "Widget"
			}(Z || (Z = {}));
			const X = Object(d.c)({
					isCollectionReady: w.e,
					isModerator: N.e,
					language: P.O,
					selectedSubreddit: S.P,
					shouldRequestCollection: w.f,
					subredditChannels: w.a
				}),
				$ = Object(i.b)(X, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						toggleModal: () => e(Object(h.i)(f.a.MANAGE_SUBREDDIT_CHAT)),
						toggleCreateModal: () => e(Object(h.i)(f.a.CREATE_SUBREDDIT_CHAT)),
						toggleEditModal: () => e(Object(h.i)(f.a.EDIT_SUBREDDIT_CHAT)),
						fetchSubredditChannels: t => e(Object(p.l)(t)),
						onChatLinkClick: (t, s) => e(Object(b.b)(t, s)),
						onSelectChannel: t => e(Object(p.m)({
							channelId: t
						}))
					}
				});
			class ee extends o.a.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					this.fetchChannelList()
				}
				fetchChannelList() {
					this.props.shouldRequestCollection && this.props.fetchSubredditChannels(this.props.selectedSubreddit.id)
				}
				getDisplayChannelList() {
					return this.props.subredditChannels && this.props.maxChannels ? this.props.subredditChannels.slice(0, this.props.maxChannels) : this.props.subredditChannels || []
				}
				displayShowAllLink() {
					return !!(this.props.maxChannels && this.props.subredditChannels && this.props.maxChannels < this.props.subredditChannels.length)
				}
				displayChannelsList() {
					const {
						props: {
							maxChannels: e,
							subredditChannels: t
						}
					} = this;
					if (t) {
						const s = r()(t, ["name"]);
						return e ? s.slice(0, e) : s
					}
					return []
				}
				onItemClick(e) {
					const {
						channelId: t
					} = e, {
						selectedSubreddit: s,
						onChatLinkClick: n
					} = this.props;
					n(t, s.name), this.trackItemClick(e)
				}
				trackItemClick(e) {
					const {
						Joined: t
					} = j.a, {
						channelId: s,
						channelState: n
					} = e, {
						Widget: r,
						Modal: a
					} = Z, {
						parentContext: o,
						sendEvent: i
					} = this.props;
					return o === r && n === t ? i(Object(O.c)(s)) : o === r ? i(Object(O.e)(s)) : o === a && n === t ? i(Object(O.a)(s)) : o === a ? i(Object(O.b)(s)) : void 0
				}
				onShowAllClick() {
					const {
						sendEvent: e,
						toggleModal: t
					} = this.props;
					t && (t(), e(Object(O.d)()))
				}
				getLinkURL(e) {
					const {
						selectedSubreddit: t
					} = this.props;
					return Object(u.channelUrl)(e.channelId, t.name)
				}
				render() {
					const {
						props: {
							className: e,
							isCollectionReady: t,
							isModerator: s,
							language: n,
							onAddChannel: r,
							toggleEditModal: a,
							selectedSubreddit: i,
							onSelectChannel: d,
							toggleCreateModal: c
						}
					} = this;
					if (!t) return null;
					const u = this.displayChannelsList();
					return o.a.createElement("div", {
						className: e
					}, u.length ? o.a.createElement(L, null, u.map((e, t) => o.a.createElement(A, {
						key: "item-link-".concat(t),
						href: this.getLinkURL(e),
						target: l.c.BLANK,
						rel: l.b,
						onClick: t => {
							this.onItemClick(e), t.stopPropagation(), t.preventDefault()
						}
					}, o.a.createElement(R, {
						key: "item-link-title-".concat(t)
					}, o.a.createElement(U, {
						key: "item-link-icon-".concat(t)
					}), i.icon.url ? o.a.createElement(J, {
						key: "subreddit-icon-".concat(t),
						iconUrl: i.icon.url
					}) : o.a.createElement(H, {
						key: "planet-".concat(t),
						isSmall: !0
					}), o.a.createElement(M, {
						key: "item-header-".concat(t)
					}, o.a.createElement(Q, {
						key: "item-header-text-".concat(t)
					}, o.a.createElement(D, {
						key: "item-detail-".concat(t)
					}, i.name, Object(m.b)(n, "listings.channelMembers", e.membersCount)), o.a.createElement(z, {
						key: "channel-name-".concat(t)
					}, e.type === j.c.Public ? o.a.createElement(G, null) : o.a.createElement(K, null), e.name)), s && o.a.createElement(q, {
						key: "button-".concat(t),
						onClick: t => {
							d(e.channelId), a(), t.stopPropagation(), t.preventDefault(), this.props.sendEvent(Object(O.l)())
						}
					}, o.a.createElement(V, null)))), e.description && o.a.createElement(W, {
						key: "desc-text-".concat(t)
					}, e.description))), this.displayShowAllLink() && o.a.createElement(Y, {
						type: "button",
						onClick: () => this.onShowAllClick()
					}, T._("See more", null, {
						hk: "lhTm0"
					}))) : s ? o.a.createElement(L, null, o.a.createElement(F, null, T._("Create your first room and get your community chatting in real time.", null, {
						hk: "2zKL0L"
					})), o.a.createElement(B, {
						onClick: r || c
					}, T._("+ Add room", null, {
						hk: "2vBAvZ"
					}))) : o.a.createElement(L, null, o.a.createElement(F, null, T._("There are no joined chatrooms yet", null, {
						hk: "3n65KN"
					}))))
				}
			}
			t.b = $(Object(y.c)(ee))
		},
		"./src/reddit/components/SubredditIcon/EditableSubredditIcon.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/subreddit/inlineEditing.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/controls/ImageInput/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				p = s("./src/reddit/helpers/getSubredditOrProfileIconData/index.tsx"),
				b = s("./src/reddit/helpers/trackers/inlineSubredditEditing.ts"),
				h = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				x = e => a.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 16 17",
					version: "1.1"
				}, a.a.createElement("path", {
					d: "M8.566 5.835l2.4 2.4a.8.8 0 0 1-1.132 1.131L8.8 8.332V13.6a.8.8 0 1 1-1.6 0V8.332L6.166 9.366a.8.8 0 0 1-1.132-1.131l2.4-2.4a.803.803 0 0 1 1.132 0zm3.091-2.292A3.547 3.547 0 0 1 15.2 7.085a.8.8 0 0 1-1.6 0 1.945 1.945 0 0 0-2.318-1.904.802.802 0 0 1-.869-.43A4.206 4.206 0 0 0 6.628 2.4 4.233 4.233 0 0 0 2.4 6.629a.8.8 0 0 1-1.6 0A5.835 5.835 0 0 1 6.628.799a5.788 5.788 0 0 1 4.941 2.745l.088-.001z",
					id: "a"
				})),
				y = s("./src/reddit/models/ApiRequestState/index.ts"),
				f = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				v = s("./src/reddit/components/SubredditIcon/index.m.less"),
				O = s.n(v);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var E = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			class _ extends a.a.Component {
				constructor(e) {
					super(e)
				}
				render() {
					const e = this.props,
						{
							subredditId: t,
							className: s,
							inTopBar: n
						} = e,
						r = E(e, ["subredditId", "className", "inTopBar"]),
						o = [s, O.a.inTopBar, O.a.iconContainer];
					return n ? o.push(O.a.emptyEditableIconInTopBar) : o.push(O.a.editableIcon, O.a.emptyEditableIcon), a.a.createElement("span", C({}, r, {
						className: Object(d.a)(...o)
					}), n ? a.a.createElement(x, {
						className: O.a.emptyUploadButton
					}) : a.a.createElement(g.a, {
						className: O.a.emptyPlusButton
					}), this.props.children)
				}
			}
			const j = e => {
					const {
						iconColor: t,
						className: s,
						alt: n,
						role: r,
						onClick: o,
						inTopBar: i,
						src: c
					} = e;
					return a.a.createElement("span", {
						className: O.a.iconContainer
					}, a.a.createElement("img", {
						alt: n,
						onClick: o,
						role: r,
						src: c,
						className: Object(d.a)(s, {
							[O.a.editableIcon]: !i
						}),
						style: {
							backgroundColor: t || ""
						}
					}), e.children)
				},
				N = Object(i.c)({
					isLoading: f.b
				});
			class S extends a.a.PureComponent {
				constructor(e) {
					super(e), this.inputRef = null, this.openImageUpload = () => {
						this.inputRef && this.inputRef.click(), this.props.sendEvent(b.b)
					}, this.setInputRef = e => this.inputRef = e, this.renderImageUploader = () => a.a.createElement(m.a, {
						className: O.a.imageUploader,
						inputRef: this.setInputRef,
						multiple: !1,
						onChange: e => {
							const t = Object(y.b)();
							this.setState({
								apiRequestId: t
							}), this.props.onFileSelected(e, t)
						}
					}), this.state = {
						apiRequestId: null
					}
				}
				renderEditButton() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					});
					return this.props.inTopBar ? a.a.createElement("span", {
						className: O.a.clickableUploadText,
						onClick: this.openImageUpload
					}, e ? a.a.createElement(h.c, null, "Update icon") : a.a.createElement(h.c, null, "Add icon")) : null
				}
				getSharedProps() {
					return {
						onClick: this.openImageUpload,
						role: "presentation",
						className: this.props.className
					}
				}
				renderEditableIcon() {
					const {
						url: e,
						color: t
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), s = a.a.createElement(a.a.Fragment, null, a.a.createElement(j, C({
						alt: n.fbt._("Subreddit icon", null, {
							hk: "1oOA0s"
						}),
						src: e,
						iconColor: t,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader());
					return this.props.linkTo ? a.a.createElement("a", {
						href: this.props.linkTo
					}, s) : s
				}
				renderEmptyState() {
					return this.props.linkTo ? a.a.createElement("a", {
						href: this.props.linkTo
					}, a.a.createElement(_, C({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader()) : a.a.createElement(a.a.Fragment, null, a.a.createElement(_, C({
						subredditId: this.props.subreddit.id,
						inTopBar: this.props.inTopBar
					}, this.getSharedProps()), this.renderSpinner()), this.renderImageUploader())
				}
				renderSpinner() {
					if (this.props.isLoading) {
						const e = [O.a.loadingIcon];
						let t = 22;
						return this.props.inTopBar && (e.push(O.a.loadingIconInTopBar), t = 32), a.a.createElement(u.a, {
							className: Object(d.a)(...e),
							sizePx: t
						})
					}
					return null
				}
				render() {
					const {
						url: e
					} = Object(p.a)({
						shouldHideNsfwIcon: !1,
						subredditOrProfile: this.props.subreddit
					}), t = e ? this.renderEditableIcon() : this.renderEmptyState(), s = this.renderEditButton();
					return s ? a.a.createElement("div", {
						className: O.a.flexContainer
					}, t, s) : t
				}
			}
			t.a = Object(o.b)(N, (e, t) => ({
				onFileSelected: (s, n) => {
					e(Object(c.a)(t.subreddit, s, n))
				}
			}))(Object(l.c)(S))
		},
		"./src/reddit/components/SubredditNav/index.m.less": function(e, t, s) {
			e.exports = {
				metaNavLink: "_3K8jBMDp0QPnKaJK8FVP6a",
				navLinkStyles: "_2NJL-agPg8YnfLMLdMbED5",
				subNavTitle: "_2wtKbmW1aPrT3MyHoaupQh",
				navLink: "_1O30sSXmfkKMRZqSaESf0S",
				topBannerVariant: "uGdFXCHH-nwVp4gU3UaTw",
				mActive: "_1YpJV_aDQqujwuofx9-eAX",
				navDropdownIcon: "_3u_CcXw7slod9vNJKIlYvx",
				subNavLink: "_1p4TpHzWWRAkGYYw9_jU-B",
				subNavContainer: "hcJJEc0gVBKH5pWCFgdET",
				subNavList: "_1T423RClx-mTPxfuiCw4UN",
				mIsOpen: "_2azsE3I8rle1m5FBqLLHpN",
				outerContainer: "_1gVVmSnHZpkUgVShsn7-ua",
				innerContainer: "_1_TJAX-8zAT3vVN1Iz7cys"
			}
		},
		"./src/reddit/components/SubredditNav/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/featureFlags/component.tsx"),
				l = s("./src/reddit/selectors/user.ts"),
				m = s("./src/reddit/selectors/widgets.ts"),
				u = s("./src/reddit/actions/subreddit.ts"),
				p = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/react-router-dom/esm/react-router-dom.js")),
				b = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				g = s("./src/reddit/components/SubredditNav/index.m.less"),
				x = s.n(g);

			function y() {
				return (y = Object.assign || function(e) {
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const v = (e, t, s) => Object(b.a)(e, {
					[x.a.mActive]: t
				}, {
					[x.a.topBannerVariant]: s
				}),
				O = e => {
					var {
						children: t,
						isActive: s,
						isTopBannerVariant: n
					} = e, a = f(e, ["children", "isActive", "isTopBannerVariant"]);
					return r.a.createElement("div", y({
						className: v(x.a.subNavTitle, s, n)
					}, a), r.a.createElement("span", null, t), r.a.createElement(h.b, {
						className: x.a.navDropdownIcon
					}))
				},
				C = e => {
					var {
						className: t,
						isActive: s,
						to: n,
						isTopBannerVariant: a
					} = e, o = f(e, ["className", "isActive", "to", "isTopBannerVariant"]);
					const i = v(x.a.navLink, s, a);
					return n ? r.a.createElement(p.a, y({
						className: i,
						to: n
					}, o)) : r.a.createElement("a", y({
						className: i
					}, o))
				},
				E = e => {
					var {
						className: t,
						isActive: s
					} = e, n = f(e, ["className", "isActive"]);
					return r.a.createElement(p.a, y({
						className: v(x.a.navLink, s)
					}, n))
				},
				_ = e => {
					var {
						className: t,
						isActive: s
					} = e, n = f(e, ["className", "isActive"]);
					return r.a.createElement("a", y({
						className: v(x.a.subNavLink, s)
					}, n))
				},
				j = e => {
					var {
						className: t
					} = e, s = f(e, ["className"]);
					return r.a.createElement("div", y({
						className: Object(b.a)(x.a.subNavContainer, t)
					}, s))
				},
				N = e => {
					var {
						className: t,
						isOpen: s
					} = e, n = f(e, ["className", "isOpen"]);
					return r.a.createElement("div", y({
						className: Object(b.a)(x.a.subNavList, t, {
							[x.a.mIsOpen]: s
						})
					}, n))
				},
				{
					fbt: S
				} = s("./node_modules/fbt/lib/FbtPublic.js");
			const w = Object(o.c)({
				isActive: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
				subreddit: (e, t) => e.subreddits.models[t.subredditId]
			});
			var P = Object(d.t)()(Object(a.b)(w, (e, t) => ({
					onTurnOnMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !0
					}))
				}))((function(e) {
					const {
						pageLayer: t,
						subreddit: s
					} = e;
					return s ? r.a.createElement(E, {
						className: x.a.metaNavLink,
						to: s.url,
						isActive: e.isActive,
						onClick: s => {
							Object(d.E)(t) && s.preventDefault(), e.onTurnOnMetaFilter()
						}
					}, S._("Polls", null, {
						hk: "1vWsZx"
					})) : null
				}))),
				k = s("./src/lib/linkMatchers/index.ts");
			class I extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						isOpen: !1
					}, this.handleOpen = e => this.setState(() => ({
						isOpen: !0
					})), this.handleClose = e => this.setState(() => ({
						isOpen: !1
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(j, {
						onClick: this.handleOpen,
						onMouseLeave: this.handleClose
					}, r.a.createElement(O, {
						isActive: e.isActive,
						isTopBannerVariant: e.isTopBannerVariant
					}, e.label), r.a.createElement(N, {
						isOpen: t.isOpen,
						"aria-hidden": !t.isOpen,
						role: "list"
					}, e.children))
				}
			}
			var T = I;
			const L = e => {
				const t = e.url && Object(k.g)(k.e, e.url);
				return t ? t.url : e.url
			};
			var B = e => e.menuItem.url ? r.a.createElement(C, {
					href: L(e.menuItem),
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant
				}, e.menuItem.text) : r.a.createElement(T, {
					isActive: !!e.isActive,
					isTopBannerVariant: e.isTopBannerVariant,
					label: e.menuItem.text
				}, e.menuItem.children && e.menuItem.children.map(e => r.a.createElement(_, {
					key: "".concat(e.text, "-").concat(L(e)),
					role: "listitem",
					href: L(e),
					target: "_blank",
					rel: "noopener"
				}, e.text))),
				F = s("./src/lib/constants/index.ts"),
				A = s("./src/reddit/i18n/components.tsx");
			const D = Object(d.t)(),
				W = [F.Ab.SUBREDDIT, F.Ab.COMMENTS, F.Ab.COLLECTION_COMMENTS],
				R = Object(o.c)({
					isMetaFilterEnabled: (e, t) => !!e.subreddits.appliedFilters.meta[t.subredditId],
					isPostsRoute: (e, t) => !!t.pageLayer && !!t.pageLayer.meta && W.indexOf(t.pageLayer.meta.name) > -1
				});
			var M = D(Object(a.b)(R, (e, t) => ({
					onTurnOffMetaFilter: () => e(Object(u.p)({
						subredditId: t.subredditId,
						forceState: !1
					}))
				}))((function(e) {
					const {
						homeUrl: t,
						isMetaFilterEnabled: s,
						isPostsRoute: n,
						isTopBannerVariant: a,
						onTurnOffMetaFilter: o
					} = e, i = n && !s;
					return r.a.createElement(C, {
						to: t,
						isActive: i,
						isTopBannerVariant: a,
						onClick: e => {
							s && (e.preventDefault(), o())
						}
					}, r.a.createElement(A.c, null, "Posts"))
				}))),
				U = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				H = s("./src/higherOrderComponents/makeAsync.tsx");
			var V = Object(H.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("HarbergerTaxBannerPurchaseCTA").then(s.bind(null, "./src/reddit/components/Governance/HarbergerTax/BannerPurchaseCTA/index.tsx")).then(e => e.default)
				}),
				G = s("./src/reddit/constants/postLayout.ts"),
				K = s("./src/reddit/constants/screenWidths.ts"),
				J = s("./src/reddit/models/Theme/index.ts"),
				q = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				Y = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const z = Object(U.a)(e => {
				var {
					className: t,
					children: s,
					isTopBannerVariant: n
				} = e, a = Y(e, ["className", "children", "isTopBannerVariant"]);
				const o = Object(q.a)(a);
				return r.a.createElement("div", {
					className: Object(b.a)(x.a.outerContainer, t),
					style: {
						position: o.navBar.useOverlay && !n ? "absolute" : "static",
						background: n ? "inherit" : Object(J.g)(o.navBar.backgroundColor, o.navBar.backgroundImage, "tiled")
					}
				}, s)
			});
			var Q = e => r.a.createElement(z, {
					className: e.className,
					isTopBannerVariant: e.isTopBannerVariant
				}, r.a.createElement("div", {
					className: x.a.innerContainer,
					style: {
						maxWidth: e.disableFullscreen || e.layout === G.g.Large ? "".concat(e.maxWidth || K.a, "px") : "100%"
					}
				}, r.a.createElement("div", null, e.children), r.a.createElement(V, null))),
				Z = s("./src/reddit/components/Translated/index.tsx"),
				X = s("./src/reddit/constants/wiki.ts"),
				$ = s("./src/reddit/helpers/trackers/subredditWiki.ts");
			var ee = e => {
				const {
					homeUrl: t,
					isTopBannerVariant: s,
					pageLayer: n
				} = e, a = !!n && !!n.meta && n.meta.name === F.Ab.SUBREDDIT_WIKI, o = "wiki/".concat(X.i), i = t.endsWith("/") ? t + o : "".concat(t, "/").concat(o);
				return r.a.createElement(C, {
					isActive: a,
					isTopBannerVariant: s,
					to: i,
					onClick: () => e.sendEvent(Object($.g)())
				}, r.a.createElement(Z.a, {
					msgId: "structuredStyles.forms.menuLinks.wikiHomeLinkLabel"
				}))
			};
			const te = Object(c.a)("spPolls", P),
				se = Object(d.t)(),
				ne = Object(o.c)({
					language: l.O,
					layout: d.L,
					widget: m.f
				}),
				re = Object(a.b)(ne);
			t.a = se(re(Object(i.c)(e => r.a.createElement(Q, {
				className: e.subredditNavContainerClassName,
				isTopBannerVariant: e.isTopBannerVariant,
				layout: e.layout,
				disableFullscreen: e.disableFullscreen,
				maxWidth: e.maxWidth
			}, e.subredditId && r.a.createElement(r.a.Fragment, null, r.a.createElement(M, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				subredditId: e.subredditId
			}), r.a.createElement(te, {
				subredditId: e.subredditId
			})), e.widget && r.a.createElement(r.a.Fragment, null, e.widget.showWiki && r.a.createElement(ee, {
				homeUrl: e.homeUrl,
				isTopBannerVariant: e.isTopBannerVariant,
				pageLayer: e.pageLayer,
				sendEvent: e.sendEvent
			}), !!e.widget.data.length && e.widget.data.map((t, s) => r.a.createElement(B, {
				isActive: !1,
				isTopBannerVariant: e.isTopBannerVariant,
				key: s,
				menuItem: t
			})))))))
		},
		"./src/reddit/components/SubredditSidebar/index.m.less": function(e, t, s) {
			e.exports = {
				card: "_3vSqxw1Wwy_x8wRt_oGTh3",
				inFeedAd: "_3GFX6ArnoTLL_9fE1ptGiO"
			}
		},
		"./src/reddit/components/SubredditSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Economics/CommunityTipJar/async.tsx"),
				u = s("./src/higherOrderComponents/makeAsync.tsx"),
				p = s("./src/reddit/featureFlags/component.tsx");
			const b = Object(u.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Promise.all([s.e("EconomicsSubredditPremiumSidebarCards~SubredditPremiumBadgeHovercardTooltip"), s.e("EconomicsSubredditPremiumSidebarCards")]).then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/SidebarCards/index.tsx")).then(e => e.default)
			});
			var h = Object(p.a)("spPremium", b),
				g = s("./src/reddit/components/Governance/CommunityCard/async.tsx"),
				x = s("./src/reddit/components/Governance/Leaderboard/async.tsx"),
				y = s("./src/reddit/components/IdCard/async.tsx"),
				f = s("./src/lib/isFakeSubreddit/index.ts"),
				v = s("./src/reddit/components/IdCard/helpers.ts"),
				O = e => !Object(f.a)(e) || Object(v.c)(e) || Object(v.d)(e) || Object(v.e)(e),
				C = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				E = s("./src/reddit/components/SidebarAd/ListingPageSidebarAd.tsx"),
				_ = s("./src/reddit/components/SidebarContainer/index.tsx"),
				j = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				N = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				S = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/lib/classNames/index.ts"),
				P = s("./src/higherOrderComponents/asTooltip.tsx"),
				k = s("./src/reddit/actions/tooltip.ts"),
				I = s("./src/reddit/i18n/utils.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				L = s("./src/reddit/constants/modals.ts"),
				B = s("./src/reddit/controls/Dropdown/index.tsx"),
				F = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				A = s("./src/reddit/icons/fonts/Pencil/index.tsx"),
				D = s("./src/reddit/selectors/moderatorPermissions.ts"),
				W = s("./src/reddit/selectors/tooltip.ts"),
				R = s("./src/reddit/components/SidebarSubredditChannels/Dropdown.m.less"),
				M = s.n(R);
			const U = l.a.wrapped(B.a, "_Dropdown", M.a),
				H = l.a.wrapped(A.a, "Pencil", M.a),
				V = l.a.a("DropdownRow", M.a),
				G = Object(P.a)(U),
				K = e => "SubredditChannels--Menu--".concat(e),
				J = Object(d.c)({
					isModerator: D.g,
					isDropdownOpen: (e, t) => Object(W.b)(K(t.subredditId))(e)
				}),
				q = l.a.wrapped(e => {
					const {
						className: t,
						isModerator: s,
						onOpenDropdown: n,
						isDropdownOpen: r,
						toggleModal: a
					} = e, i = K(e.subredditId);
					return o.a.createElement("button", {
						"aria-expanded": r,
						"aria-haspopup": !0,
						"aria-label": Object(I.c)("Chat menu"),
						className: Object(w.a)(M.a.top, t),
						id: i,
						onClick: () => n(i)
					}, o.a.createElement(F.a, null), o.a.createElement(G, {
						isOpen: r,
						tooltipId: i,
						targetPosition: ["right", "bottom"],
						tooltipPosition: ["right", "top"]
					}, o.a.createElement(V, {
						onClick: a
					}, s ? S.fbt._("Manage chatrooms", null, {
						hk: "2hIiuc"
					}) : S.fbt._("View rooms", null, {
						hk: "2XOg3o"
					}), o.a.createElement(H, null))))
				}, "OverflowMenu", M.a);
			var Y = Object(i.b)(J, e => ({
					onOpenDropdown: t => e(Object(k.h)({
						tooltipId: t
					})),
					toggleModal: () => e(Object(T.i)(L.a.MANAGE_SUBREDDIT_CHAT))
				}))(q),
				z = s("./src/reddit/components/SubredditChannelList/index.tsx"),
				Q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Z = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				X = s("./src/reddit/helpers/trackers/chat.ts"),
				$ = s("./src/reddit/selectors/subreddit.ts"),
				ee = s("./src/reddit/selectors/subredditChannel.ts"),
				te = s("./src/reddit/components/SidebarSubredditChannels/index.m.less"),
				se = s.n(te);
			const ne = l.a.div("Wrapper", se.a),
				re = Object(d.c)({
					isCollectionReady: ee.e,
					isModerator: D.g,
					isWhitelistedSubreddit: $.e,
					shouldRequestCollection: ee.f,
					subredditChannels: ee.a
				});
			let ae;
			class oe extends o.a.Component {
				constructor(e) {
					super(e)
				}
				shouldComponentUpdate(e, t) {
					return this.props.isCollectionReady !== e.isCollectionReady || this.props.isModerator !== e.isModerator || this.props.isWhitelistedSubreddit !== e.isWhitelistedSubreddit || this.props.shouldRequestCollection !== e.shouldRequestCollection || this.props.subredditChannels !== e.subredditChannels
				}
				componentDidMount() {
					this.trackViewEvent()
				}
				trackViewEvent() {
					this.props.subredditId !== ae && (ae = this.props.subredditId, this.props.sendEvent(Object(X.m)()))
				}
				isEnabled() {
					const {
						isModerator: e,
						isCollectionReady: t,
						isWhitelistedSubreddit: s,
						subredditChannels: n
					} = this.props, r = n && n.length;
					return !(!t || !s || !r && !e)
				}
				render() {
					const {
						subredditId: e,
						shouldRequestCollection: t
					} = this.props, s = o.a.createElement(z.b, {
						maxChannels: 3,
						parentContext: z.a.Widget,
						subredditId: e
					});
					return t ? s : this.isEnabled() ? o.a.createElement(j.a, null, o.a.createElement(Z.a, {
						className: this.props.className,
						title: S.fbt._("Chat rooms", null, {
							hk: "4vn07S"
						}),
						headerButton: o.a.createElement(Y, {
							subredditId: e
						})
					}, o.a.createElement(ne, null, s))) : null
				}
			}
			var ie = Object(i.b)(re)(Object(Q.c)(oe)),
				de = s("./src/lib/makeListingKey/index.ts"),
				ce = s("./src/reddit/actions/subreddit.ts"),
				le = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPosts/Post/index.tsx"),
				me = s("./src/reddit/controls/Button/index.tsx"),
				ue = s("./src/reddit/helpers/name/index.ts"),
				pe = s("./src/reddit/helpers/overlay/index.ts"),
				be = s("./src/reddit/selectors/experiments/topPosts.ts"),
				he = s("./src/reddit/selectors/posts.ts"),
				ge = s("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			const xe = .99;
			class ye extends o.a.Component {
				constructor() {
					super(...arguments), this.onVisibilityChange = e => {
						const {
							onPostVisible: t,
							postId: s
						} = this.props;
						t && e.isIntersecting && e.intersectionRatio >= xe && t(s)
					}
				}
				render() {
					return o.a.createElement(ge.a, {
						threshold: xe,
						rootMargin: "0px 0px 0px 0px",
						onChange: this.onVisibilityChange
					}, this.props.children)
				}
			}
			var fe = ye,
				ve = s("./src/lib/isUrl/index.ts"),
				Oe = s("./src/lib/prettyPrintNumber/index.ts"),
				Ce = s("./src/reddit/components/FlairWrapper/index.tsx"),
				Ee = s("./src/reddit/components/Thumbnail/index.tsx"),
				_e = s("./src/reddit/models/Flair/index.ts"),
				je = s("./src/reddit/models/Subreddit/index.ts"),
				Ne = s("./src/reddit/selectors/user.ts"),
				Se = s("./src/reddit/components/SidebarPostList/SmallPost/index.m.less"),
				we = s.n(Se);
			const {
				fbt: Pe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ke = e => e.type === _e.f.Nsfw || e.type === _e.f.Spoiler, Ie = Object(d.c)({
				language: Ne.O,
				post: he.M,
				subredditOrProfile: he.Y
			});
			class Te extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onClickContainer = () => {
						const {
							openLightbox: e,
							post: t,
							containerOnClick: s
						} = this.props;
						e(t), s && s(t.id)
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
						redditStyle: s,
						showSubredditName: n,
						subredditOrProfile: r
					} = this.props, a = {
						post: t
					}, i = Object(ve.a)(Object(Ee.b)(a)), d = t.flair.filter(ke);
					return o.a.createElement("div", {
						className: Object(w.a)(we.a.container, e, {
							[we.a.redditStyle]: s
						}),
						onClick: this.onClickContainer
					}, o.a.createElement("div", {
						className: we.a.mainLine
					}, i && o.a.createElement("div", {
						className: we.a.thumbnailContainer,
						onClick: this.onClickThumbnail
					}, o.a.createElement(Ee.a, a)), o.a.createElement("div", {
						className: Object(w.a)(we.a.title, !i && we.a.titleSingle),
						title: t.title
					}, d.length > 0 && o.a.createElement(Ce.a, {
						className: we.a.flair,
						titleFlair: d,
						nowrap: !0,
						post: t,
						showCategoryTag: !1
					}), t.title)), o.a.createElement("div", {
						className: we.a.metaLine
					}, n && !!r && o.a.createElement("span", {
						className: we.a.meta
					}, Object(je.e)(r) ? Object(ue.c)(r.displayText || r.name) : Object(ue.b)(r.displayText || r.name)), o.a.createElement("span", {
						className: we.a.meta
					}, Pe._({
						"*": "{score} points",
						_1: "1 point"
					}, [Pe._plural(t.score, "score", Object(Oe.b)(t.score))], {
						hk: "1JZ0qm"
					})), o.a.createElement("span", {
						className: we.a.meta
					}, Pe._({
						"*": "{numComments} comments",
						_1: "1 comment"
					}, [Pe._plural(t.numComments, "numComments", Object(Oe.b)(t.numComments))], {
						hk: "2UbjdS"
					}))))
				}
			}
			var Le = Object(i.b)(Ie, e => ({
					openLightbox: t => e(Object(pe.a)(t.permalink))
				}), null, {
					forwardRef: !0
				})(Te),
				Be = s("./src/reddit/components/SidebarPostList/index.m.less"),
				Fe = s.n(Be);
			const {
				fbt: Ae
			} = s("./node_modules/fbt/lib/FbtPublic.js"), De = 10, We = 2, Re = Object(d.a)(he.S, e => e.filter(e => !e.isSponsored)), Me = Object(d.c)({
				posts: Re
			});
			class Ue extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						chunkIdx: 0
					}, this.openLargePost = () => {
						const {
							onPostClick: e,
							openPost: t,
							posts: s
						} = this.props, [n] = s;
						n && (t(n), e && e(n.id))
					}, this.getVisiblePostsCounts = () => this.props.visiblePostsCount || De, this.showMorePosts = () => {
						let e;
						const t = this.getVisiblePostsCounts();
						this.setState((s, n) => (e = Math.ceil(n.posts.length / t), {
							chunkIdx: s.chunkIdx < e - 1 ? s.chunkIdx + 1 : 0
						}), () => {
							this.props.onShowMoreClick && this.props.onShowMoreClick(this.state.chunkIdx, e)
						})
					}, this.renderSmallPost = e => {
						const {
							listingName: t,
							onPostClick: s,
							onPostVisible: n,
							redditStyle: r,
							smallPostClassName: a
						} = this.props;
						return o.a.createElement(fe, {
							key: e.id,
							onPostVisible: n,
							postId: e.id
						}, o.a.createElement(Le, {
							className: Object(w.a)(Fe.a.smallPost, a),
							containerOnClick: s,
							postId: e.id,
							redditStyle: r,
							showSubredditName: Object(f.a)(Object(ue.f)(t)),
							thumbnailOnClick: s
						}))
					}
				}
				render() {
					const {
						children: e,
						className: t,
						listingName: s,
						moreButtonText: n,
						onPostVisible: r,
						posts: a,
						redditStyle: i,
						showMoreButton: d,
						topPostsVariant: c
					} = this.props, {
						chunkIdx: l
					} = this.state;
					if (0 === a.length) return null;
					const m = this.getVisiblePostsCounts(),
						u = Object(be.a)(c),
						p = Object(be.b)(c),
						b = u || p,
						h = a.slice(l * m, (l + 1) * m),
						[g, ...x] = h,
						y = b ? h.slice(0, We) : x.slice(0, We),
						v = b ? h.slice(We) : x.slice(We);
					return o.a.createElement("div", {
						className: Object(w.a)(Fe.a.container, t, {
							[Fe.a.redditStyle]: i
						})
					}, !b && o.a.createElement(fe, {
						onPostVisible: r,
						postId: g.id
					}, o.a.createElement(le.a, {
						backgroundWrapperClassName: Fe.a.largePostBackgroundWrapper,
						descriptionClassName: Fe.a.largePostDescription,
						innerContainerClassName: Fe.a.largePostInnerContainer,
						"data-redditstyle": i,
						onPostClick: this.openLargePost,
						postId: g.id,
						showSubredditMeta: !1,
						showSubredditName: Object(f.a)(Object(ue.f)(s)),
						trendingPost: g
					})), y.map(this.renderSmallPost), e, v.map(this.renderSmallPost), d && o.a.createElement(me.n, {
						className: Fe.a.SeeMore,
						onClick: this.showMorePosts
					}, n || Ae._("See More", null, {
						hk: "Dh2zQ"
					})))
				}
			}
			var He = Object(i.b)(Me, e => ({
					openPost: t => e(Object(pe.a)(t.permalink))
				}))(Ue),
				Ve = s("./src/reddit/helpers/trackers/discoveryUnit.ts"),
				Ge = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				Ke = s("./src/reddit/selectors/discoveryUnit.ts"),
				Je = s("./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less"),
				qe = s.n(Je);
			const Ye = 10,
				ze = Object(d.a)((e, t) => t.subredditName, e => Object(de.a)(e, c.O.TOP, {
					t: c.Rb.WEEK
				})),
				Qe = Object(d.c)({
					discoveryUnit: e => Object(Ke.c)(e, {
						unitName: Ge.j
					}),
					listingKey: ze,
					posts: (e, t) => {
						const s = ze(e, t);
						return Object(he.S)(e, {
							listingKey: s
						})
					},
					subreddit: $.y
				});
			class Ze extends o.a.Component {
				constructor() {
					super(...arguments), this.trackViewed = () => {
						const {
							discoveryUnit: e,
							subreddit: t
						} = this.props;
						e && this.props.sendEvent(Object(Ve.g)(e, t))
					}, this.trackPostClicked = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(Ve.m)(t, e, void 0, s))
					}, this.trackPostViewed = e => {
						const {
							discoveryUnit: t,
							subreddit: s
						} = this.props;
						t && this.props.sendEvent(Object(Ve.r)(t, e, void 0, s))
					}
				}
				componentDidMount() {
					this.trackViewed()
				}
				render() {
					const {
						children: e,
						className: t,
						listingKey: s,
						loadMorePosts: n,
						posts: r,
						subredditName: a,
						topPostsVariant: i
					} = this.props;
					if (0 === r.length) return null;
					const d = a,
						c = r.length > Ye;
					return o.a.createElement(Z.a, {
						className: t,
						contentOnly: !0,
						redditStyle: !0,
						title: Object(I.c)("Top posts this week")
					}, o.a.createElement(He, {
						listingKey: s,
						listingName: d,
						onShowMoreClick: n,
						onPostClick: this.trackPostClicked,
						onPostVisible: this.trackPostViewed,
						smallPostClassName: qe.a.smallPost,
						showMoreButton: c,
						topPostsVariant: i
					}, o.a.createElement("div", null, e)))
				}
			}
			var Xe = Object(i.b)(Qe, (e, t) => {
					let {
						subredditName: s
					} = t;
					return {
						loadMorePosts: () => e(Object(ce.r)({
							sort: c.O.TOP,
							subredditName: s,
							t: c.Rb.WEEK
						}))
					}
				})(Object(Q.c)(Ze)),
				$e = s("./src/config.ts"),
				et = s("./src/lib/localStorageAvailable/index.ts"),
				tt = s("./src/higherOrderComponents/asModal/index.tsx"),
				st = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				nt = s("./src/reddit/components/Translated/index.tsx"),
				rt = s("./src/reddit/controls/TextButton/index.tsx"),
				at = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx");
			class ot extends o.a.Component {
				render() {
					const {
						props: e
					} = this;
					return o.a.createElement(st.c, null, o.a.createElement(st.g, null, o.a.createElement(at.a, null, o.a.createElement(st.n, null, o.a.createElement(nt.a, {
						msgId: "sidebar.moderatorOnboarding.modal.title"
					})), o.a.createElement(rt.a, {
						onClick: e.toggleModal
					}, o.a.createElement(st.b, null)))), o.a.createElement(st.j, null, o.a.createElement(st.m, null, o.a.createElement(nt.a, {
						msgId: "sidebar.moderatorOnboarding.modal.text"
					}))), o.a.createElement(st.e, null, o.a.createElement(st.a, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, o.a.createElement(nt.a, {
						msgId: "sidebar.moderatorOnboarding.modal.cancel"
					})), o.a.createElement(st.o, {
						onClick: e.onCloseModOnboarding,
						"data-redditstyle": !0
					}, o.a.createElement(nt.a, {
						msgId: "sidebar.moderatorOnboarding.modal.confirm"
					}))))
				}
			}
			var it = Object(tt.a)(ot),
				dt = s("./src/reddit/components/IdCard/Banner.tsx"),
				ct = s("./src/reddit/components/IdCard/renderFakeSubredditTitle.tsx"),
				lt = s("./src/reddit/constants/blade.ts"),
				mt = s("./src/reddit/controls/InternalLink/index.tsx"),
				ut = s("./src/reddit/helpers/localStorage/index.ts"),
				pt = s("./src/reddit/helpers/trackers/modOnboarding.ts"),
				bt = s("./src/reddit/icons/svgs/CircleCheck/index.tsx"),
				ht = s("./src/reddit/icons/svgs/Close/index.tsx"),
				gt = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				xt = s("./src/reddit/selectors/activeModalId.ts"),
				yt = s("./src/reddit/selectors/structuredStyles.ts"),
				ft = s("./src/reddit/components/IdCard/index.m.less"),
				vt = s.n(ft),
				Ot = s("./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less"),
				Ct = s.n(Ot);
			const {
				fbt: Et
			} = s("./node_modules/fbt/lib/FbtPublic.js"), _t = "mod_onboarding_modal", jt = "mod_onboarding_widget", Nt = Object(d.a)(xt.a, (e, t) => Object(D.a)(gt.c.config)(e, {
				subredditId: t.subredditId
			}), (e, t) => Object(yt.l)(e, {
				subredditId: t.subredditId
			}), (e, t, s) => ({
				activeModalId: e,
				hasModeratorPermissions: t,
				modHasEditedBanner: !s || !!(s.bannerBackgroundImage || s.bannerHeight || s.bannerPositionedImage || s.bannerBackgroundColor),
				modHasEditedColors: !s || !!(s.primaryColor || s.highlightColor || s.backgroundColor || s.backgroundImage),
				modHasEditedIcon: !s || (!!s.communityIcon || !!s.bannerShowCommunityIcon)
			}));
			class St extends o.a.Component {
				constructor(e) {
					super(e), this.confirmCloseModOnboarding = () => {
						this.props.toggleCloseMenuModal(), this.setState({
							visible: !1
						}), Object(ut.Q)(jt, !0, this.props.subredditId), this.props.sendEvent(Object(pt.d)("close"))
					}, this.customizeThemeColors = () => {
						this.props.sendEvent(Object(pt.d)("theme_colors_link"))
					}, this.customizeIcon = () => {
						this.props.sendEvent(Object(pt.d)("icon_link"))
					}, this.customizeBannerImage = () => {
						this.props.sendEvent(Object(pt.d)("banner_image_link"))
					}, this.customizeAppearance = () => {
						this.props.sendEvent(Object(pt.d)("styling_generic_link"))
					}, this.state = {
						visible: !1
					}
				}
				componentDidMount() {
					this.onUpdate()
				}
				componentDidUpdate() {
					this.onUpdate()
				}
				onUpdate() {
					const {
						hasModeratorPermissions: e,
						modHasEditedBanner: t,
						modHasEditedColors: s,
						modHasEditedIcon: n,
						subredditId: r
					} = this.props, a = e && !(t && s && n) && (!Object(et.a)() || !Object(ut.q)(jt, r));
					a !== this.state.visible && (this.setState({
						visible: a
					}), a && this.props.sendEvent(Object(pt.e)("mod_edu_banner")))
				}
				render() {
					const {
						activeModalId: e,
						modHasEditedBanner: t,
						modHasEditedColors: s,
						modHasEditedIcon: n,
						subredditName: r,
						toggleCloseMenuModal: a
					} = this.props;
					return this.state.visible ? o.a.createElement(Z.a, {
						className: Object(w.a)(Ct.a.container, this.props.className)
					}, o.a.createElement(dt.a, {
						bannerBackgroundImage: "".concat($e.a.assetPath, "/img/id-cards/mod-onboarding@2x.png")
					}), o.a.createElement(ht.a, {
						className: Ct.a.closeIcon,
						onClick: a
					}), Object(ct.a)({
						titleText: o.a.createElement(nt.a, {
							msgId: "sidebar.moderatorOnboarding.title"
						}),
						snooBackground: Object(v.b)("url('".concat($e.a.assetPath, "/img/id-cards/snoo-artist@2x.png')"))
					}), o.a.createElement("div", {
						className: Object(w.a)(vt.a.Description, Ct.a.description)
					}, Et._("Styling your community helps attract members. For assistance, take a look at the {=Customize Appearance Overview} . Here are some great ways to get started.", [Et._param("=Customize Appearance Overview", o.a.createElement("a", {
						href: lt.e.exportImport,
						className: Ct.a.modHelpLink,
						target: "_blank"
					}, Et._("Customize Appearance Overview", null, {
						hk: "11UFaE"
					})))], {
						hk: "32CnPm"
					})), o.a.createElement(mt.a, {
						to: "/r/".concat(r, "?styling=true&route=").concat(lt.c.NameAndIcon),
						className: Ct.a.link,
						onClick: this.customizeIcon
					}, n ? o.a.createElement(bt.a, {
						className: Ct.a.checked
					}) : o.a.createElement(bt.a, {
						className: Ct.a.unchecked
					}), o.a.createElement(nt.a, {
						msgId: "sidebar.moderatorOnboarding.addCommunityIcon"
					})), o.a.createElement(mt.a, {
						to: "/r/".concat(r, "?styling=true&route=").concat(lt.c.Banner),
						className: Ct.a.link,
						onClick: this.customizeBannerImage
					}, t ? o.a.createElement(bt.a, {
						className: Ct.a.checked
					}) : o.a.createElement(bt.a, {
						className: Ct.a.unchecked
					}), o.a.createElement(nt.a, {
						msgId: "sidebar.moderatorOnboarding.customizeHeader"
					})), o.a.createElement(mt.a, {
						to: "/r/".concat(r, "?styling=true&route=").concat(lt.c.Global),
						className: Ct.a.link,
						onClick: this.customizeThemeColors
					}, s ? o.a.createElement(bt.a, {
						className: Ct.a.checked
					}) : o.a.createElement(bt.a, {
						className: Ct.a.unchecked
					}), o.a.createElement(nt.a, {
						msgId: "sidebar.moderatorOnboarding.customizeColors"
					})), o.a.createElement(me.k, {
						to: "/r/".concat(r, "?styling=true"),
						className: Ct.a.button,
						onClick: this.customizeAppearance
					}, o.a.createElement(nt.a, {
						msgId: "sidebar.moderatorOnboarding.customizeAppearance"
					})), o.a.createElement("div", {
						className: Ct.a.subtext
					}, o.a.createElement(nt.a, {
						msgId: "sidebar.moderatorOnboarding.onlyModerators"
					})), e === _t && o.a.createElement(it, {
						withOverlay: !0,
						toggleModal: a,
						onCloseModOnboarding: this.confirmCloseModOnboarding
					})) : null
				}
			}
			var wt = Object(i.b)(Nt, (e, t) => {
					let {
						subredditId: s,
						subredditName: n
					} = t;
					return {
						toggleCloseMenuModal: () => e(Object(T.i)(_t))
					}
				})(Object(Q.c)(St)),
				Pt = s("./src/reddit/components/Widgets/Widget/index.tsx"),
				kt = s("./src/reddit/featureFlags/index.ts"),
				It = s("./src/reddit/helpers/createBannerProperties/index.ts"),
				Tt = s("./src/reddit/models/Widgets/index.ts"),
				Lt = s("./src/reddit/selectors/communityFlairs.ts"),
				Bt = s("./src/reddit/selectors/listings.ts"),
				Ft = s("./src/reddit/components/SubredditSidebar/index.m.less"),
				At = s.n(Ft);
			const Dt = 250,
				Wt = 270,
				Rt = l.a.wrapped(_.a, "SidebarContainer", At.a),
				Mt = Object(d.c)({
					apiError: Bt.c,
					apiPending: Bt.d,
					communityFlairModels: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(Lt.b)(e, s)
					},
					communityFlairSortedKeys: (e, t) => {
						let {
							subredditId: s
						} = t;
						return Object(Lt.c)(e, s)
					},
					language: Ne.O,
					showGovernance: kt.d.spPoints,
					showLeaderboard: kt.d.spLeaderboard,
					widgets: $.r
				}),
				Ut = Object(i.b)(Mt);
			class Ht extends a.Component {
				constructor(e) {
					super(e), this.getCommunityWidgets = () => this.props.widgets.filter(e => "post-flair" !== e.kind), this.getPostFlairWidget = () => this.props.widgets.find(e => "post-flair" === e.kind), this.getRelatedCommunitiesWidgetData = () => {
						const {
							widgets: e
						} = this.props, t = e.find(e => "community-list" === e.kind);
						if (t && "community-list" === t.kind) return t.data
					}, this.makeRelatedCommunitiesWidget = (e, t) => {
						if (!e && !t) return;
						const s = this.getRelatedCommunitiesWidgetData();
						return s ? {
							id: "related-communities-widget",
							kind: "community-list",
							shortName: Object(I.c)("Related Communities"),
							data: s
						} : void 0
					}, this.makeFlairFilterWidget = () => {
						if (this.props.communityFlairSortedKeys) return Object.assign({}, this.getPostFlairWidget(), {
							id: "post-flair-widget",
							kind: "post-flair",
							order: this.props.communityFlairSortedKeys,
							display: Tt.d.Cloud,
							shortName: Object(I.c)("Filter by flair"),
							templates: this.props.communityFlairModels
						})
					}, this.state = {
						isMounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						isMounted: !0
					})
				}
				shouldComponentUpdate(e) {
					const {
						communityFlairSortedKeys: t
					} = this.props, s = (t && t.length) !== (e.communityFlairSortedKeys && e.communityFlairSortedKeys.length);
					return this.props.subredditName !== e.subredditName || !r()(this.props.widgets, e.widgets) || s
				}
				render() {
					const {
						className: e,
						language: t,
						listingName: s,
						showGovernance: n,
						showLeaderboard: r,
						subredditId: a,
						subredditName: i,
						topPostsVariant: d
					} = this.props;
					let l = 0;
					const u = Object(be.a)(d),
						p = Object(be.b)(d),
						b = Object(be.c)(d),
						f = u || p,
						v = this.getCommunityWidgets(),
						_ = this.makeFlairFilterWidget(),
						S = this.makeRelatedCommunitiesWidget(u, p),
						w = !u,
						P = p,
						k = o.a.createElement(E.a, {
							placement: c.c.ABOVE_THE_FOLD,
							listingName: s,
							placementIndex: l++,
							position: It.a.FIRST,
							sizes: c.i
						});
					return o.a.createElement(Rt, {
						className: e
					}, O(s) && o.a.createElement(y.a, {
						listingName: s
					}), o.a.createElement(h, {
						cardClassName: At.a.card,
						subredditId: a
					}), f && o.a.createElement(j.a, null, o.a.createElement(Xe, {
						subredditName: i,
						topPostsVariant: d
					}, o.a.createElement("div", {
						className: At.a.inFeedAd
					}, k))), f && S && o.a.createElement(j.a, null, o.a.createElement(Pt.a, {
						subredditName: i,
						truncateThreshold: Wt,
						widget: S
					})), P && v.map((e, t) => {
						if ("moderators" !== e.kind && "subreddit-rules" !== e.kind && "community-list" !== e.kind) return o.a.createElement(j.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Pt.a, {
							subredditName: i,
							truncateThreshold: Dt,
							widget: e
						}))
					}), o.a.createElement(m.a, {
						className: At.a.card,
						subredditId: a
					}), o.a.createElement(wt, {
						language: t,
						subredditId: a,
						subredditName: i
					}), n && o.a.createElement(g.a, {
						className: At.a.card,
						subredditId: a
					}), _ && o.a.createElement(j.a, null, o.a.createElement(Pt.a, {
						subredditName: i,
						widget: _
					})), r && o.a.createElement(x.a, {
						className: At.a.card,
						subredditId: a,
						uniqueId: a
					}), o.a.createElement(C.g, {
						subredditId: a
					}), !f && k, w && !P && v.map((e, t) => {
						const s = "community-list" === e.kind;
						return o.a.createElement(j.a, {
							key: "widgetSpacer".concat(t)
						}, o.a.createElement(Pt.a, {
							subredditName: i,
							truncateThreshold: b && s ? Wt : b ? Dt : void 0,
							widget: e
						}))
					}), o.a.createElement(ie, {
						subredditId: a
					}), o.a.createElement(N.a, {
						adComponent: o.a.createElement(E.a, {
							placement: c.c.BELOW_THE_FOLD,
							listingName: s,
							placementIndex: l++,
							position: It.a.BOTTOM,
							sizes: c.n
						})
					}))
				}
			}
			t.a = Ut(Ht)
		},
		"./src/reddit/components/TabBadger/Loader.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(n.a)({
				resolved: {},
				chunkName: () => "reddit-components-TabBadger-Component",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("reddit-components-TabBadger-Component").then(s.bind(null, "./src/reddit/components/TabBadger/Component.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/TabBadger/Component.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/TabBadger/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/TabBadger/Loader.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/selectors/experiments/badging.ts"),
				l = s("./src/reddit/selectors/platform.ts"),
				m = s("./src/reddit/selectors/posts.ts");
			const u = Object(o.c)({
					postCount: m.R,
					previousPageIsOverlay: l.o,
					tabBadged: e => e.tabBadged,
					variant: e => Object(c.d)(e)
				}),
				p = Object(a.b)(u);
			t.a = p(Object(d.c)(e => 0 !== e.postCount && e.variant ? r.a.createElement(i.a, {
				handlePillClick: e.handlePillClick,
				previousPageIsOverlay: e.previousPageIsOverlay,
				sendEvent: e.sendEvent,
				shortTimer: e.shortTimer,
				subredditName: e.subredditName,
				subscriberCount: e.subscriberCount,
				tabBadged: e.tabBadged,
				variant: e.variant
			}) : null))
		},
		"./src/reddit/components/TopPostsWidgets/TopWeekPosts/index.m.less": function(e, t, s) {
			e.exports = {
				smallPost: "_2yeUqQdjZPSDOFi2YOZwg4"
			}
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SEOTitle/index.tsx"),
				i = s("./src/reddit/components/Widgets/Base/index.m.less"),
				d = s.n(i),
				c = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};
			const l = a.a.div("WidgetBackground", d.a),
				m = a.a.wrapped(e => {
					var {
						children: t
					} = e, s = c(e, ["children"]);
					return r.a.createElement("div", s, r.a.createElement(o.b, {
						type: o.a.Widget
					}, t))
				}, "WidgetHeader", d.a);
			t.b = e => r.a.createElement("div", {
				className: e.className
			}, r.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/Button/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				rawHtmlDisplay: "_3ZOXjQGKlSNE3Pk7JFNRS_",
				imageButton: "_1dcH2atgEZb6EIz1hPypif",
				textButton: "_3VvVLJHakguGRWc5JxUX40",
				textButtonHoverText: "_1csPJVJm94zTUzhy65Kbxo",
				vanishingTextButtonText: "_2rUZkzEG2dvopABpvgI8Zx"
			}
		},
		"./src/reddit/components/Widgets/Calendar/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				rawHtmlDisplay: "_7Td52eDF6kOI7wbyoOGJV",
				EventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				eventContainer: "_1HzK-HxwbuIwNX-GXaBGDW",
				EventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				eventTitle: "cCvnKc1bpNZv2J-DkHYuZ",
				EventDate: "_2VXwUwmJin6h1Pov4foGGE",
				eventDate: "_2VXwUwmJin6h1Pov4foGGE",
				EventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				eventLocation: "_3GYOq7iFgxtdLjpjVzjwko",
				EventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				eventDescription: "_2ZLwdDhx3dBm-ZVn7MXBYA",
				ToggleDescription: "J6pcR7wS5Fc3tWloQuCxS",
				toggleDescription: "J6pcR7wS5Fc3tWloQuCxS"
			}
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				p = s("./src/reddit/actions/subscription/index.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(i.c)({
				language: b.O
			});
			var g = Object(a.b)(h, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(p.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(p.e()),
						onUnsubscribe: () => e(p.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				x = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				y = s("./src/reddit/constants/componentSizes.ts"),
				f = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = s("./src/reddit/i18n/utils.ts"),
				C = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				E = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				_ = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				N = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				S = s.n(N);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return P
			})), s.d(t, "a", (function() {
				return I
			}));
			const P = e => r.a.createElement(x.a, {
					className: Object(c.a)(S.a.Container, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, r.a.createElement("div", {
					className: S.a.container
				}, e.isLoading ? r.a.createElement(v.a, {
					className: S.a.loadingIcon,
					sizePx: 32
				}) : r.a.createElement(r.a.Fragment, null, e.isError ? r.a.createElement("p", {
					className: S.a.errorMsg
				}, e.errorMsg || Object(O.c)("Something went wrong.")) : r.a.createElement(r.a.Fragment, null, e.communities.map(t => r.a.createElement(I, w({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && r.a.createElement(f.n, {
					className: S.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				k = Object(i.c)({
					hideNSFWPref: b.y,
					language: b.O
				}),
				I = Object(a.b)(k)(e => r.a.createElement("div", {
					className: S.a.communityItemContainer
				}, r.a.createElement(E.a, {
					widthRight: y.t
				}, r.a.createElement("div", {
					className: S.a.iconContainer
				}, e.communityIcon || e.iconUrl ? r.a.createElement("img", {
					className: S.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : r.a.createElement(C.a, {
					className: S.a.planetIcon,
					"data-redditstyle": !0
				})), r.a.createElement("div", {
					className: S.a.communityDescriptionContainer
				}, r.a.createElement(o.a, {
					className: S.a.communityName,
					to: Object(j.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(j.b)(e.name, e.type)), r.a.createElement("div", {
					className: S.a.communityInfoContainer
				}, !!e.subscribers && r.a.createElement("p", {
					className: S.a.subscriberCount
				}, Object(d.b)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && r.a.createElement(m.b, {
					flair: {
						type: _.f.Nsfw,
						text: "nsfw"
					}
				}))), e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? r.a.createElement(v.a, {
					className: Object(c.a)(S.a.communityCta, S.a.smallLoadingIcon),
					sizePx: 12
				}) : r.a.createElement(f.n, {
					className: Object(c.a)(S.a.communityCta, {
						[S.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? r.a.createElement(g, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : r.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					small: !0
				})), !!e.description && r.a.createElement("p", {
					title: e.description,
					className: S.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				r = s("./src/reddit/helpers/name/index.ts");

			function a(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function o(e, t) {
				return t === n.a.PROFILE ? Object(r.c)(e) : Object(r.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6"
			}
		},
		"./src/reddit/components/Widgets/Image/ImageFrame.m.less": function(e, t, s) {
			e.exports = {
				ImageFrame: "_3NeWg805wFgqPuE_-LZKN4",
				imageFrame: "_3NeWg805wFgqPuE_-LZKN4"
			}
		},
		"./src/reddit/components/Widgets/Image/StyledImage.m.less": function(e, t, s) {
			e.exports = {
				StyledImage: "_3WqRAmto46uhALFWnn8-Pa",
				styledImage: "_3WqRAmto46uhALFWnn8-Pa"
			}
		},
		"./src/reddit/components/Widgets/Moderator/index.m.less": function(e, t, s) {
			e.exports = {
				ModeratorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				moderatorListItem: "_1Y_VNBcV1dWk6Y7xcJHQyQ",
				Username: "ULWj94BYSOqoJDetxgcnU",
				username: "ULWj94BYSOqoJDetxgcnU",
				MessageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				messageModsLink: "_3qzNYRLcf8lEELXhDHff5z",
				FlairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				flairComponent: "_1vh4u-B3eHXE3-ko0huS20",
				InternalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				internalLink: "_2GrMpxDnqcoKtPHot56EWQ",
				LinkContainer: "_2pf-KRzaHwj_TjBcOIDrWG",
				linkContainer: "_2pf-KRzaHwj_TjBcOIDrWG"
			}
		},
		"./src/reddit/components/Widgets/ModeratorOnboarding/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2e42jHFUxTCKhK9ZV7rkYM",
				unchecked: "KghweVAiFiX0RI_syl89Q",
				checked: "g4y6sLtk5FcL7BGU4ySVF",
				checkedFadeIn: "_3iW8CR-_Svhfa-LJLVcw2F",
				subtext: "_1STduBQ65V-3ECZ3WRoEKV",
				section: "_23svPjrTufAABoINCKRN_7",
				container: "_2YGvHlE11080fRAzC4onab",
				button: "_2F46jVXxeuK0SKM9TO-8pY",
				closeIcon: "_3mATOvmc_Q9pFcfcBXjFol",
				description: "_3js_prVH0h73q85Oa9P7lN"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				widgetContent: "_2NAcQAOfOGlsoihoqpSHTh",
				TertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				tertiaryButton: "_1nkSNshm5FPoOguxeVwxcD",
				StyledFlair: "ij57zT3Rtmsew_4V8vYmY",
				styledFlair: "ij57zT3Rtmsew_4V8vYmY",
				cloudDisplay: "l8B49A4v1dhWGGEwM7vYA",
				flairFilter: "_1Dpo5nORF-CHLCeoDHpZuR",
				Flair: "_3b9QdopIknN9AuNvj2kI9X",
				flair: "_3b9QdopIknN9AuNvj2kI9X",
				"m-selected": "XUSGYTFEMdkVpqVqn1ZsC",
				mSelected: "XUSGYTFEMdkVpqVqn1ZsC",
				flairFilterContainer: "qHKWh5t-0ZHqZ00w567bU",
				flairFilterButton: "_1Uh_u9ypgpntBJ_2RC1Ge3"
			}
		},
		"./src/reddit/components/Widgets/PostFlair/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/fastdom/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				b = s("./src/reddit/constants/parameters.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				g = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/helpers/correlationIdTracker.ts"),
				y = s("./src/reddit/helpers/flair.ts"),
				f = s("./src/reddit/helpers/trackers/postFlair.ts"),
				v = s("./src/reddit/models/Widgets/index.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/Widgets/PostFlair/index.m.less"),
				E = s.n(C);

			function _() {
				return (_ = Object.assign || function(e) {
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
					var r = 0;
					for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
				}
				return s
			};
			const N = 129,
				S = Object(h.t)({
					filterName: e => Object(h.Q)(e)[b.f],
					url: e => Object(h.V)(e)
				}),
				w = Object(i.c)({
					subredditId: (e, t) => Object(O.D)(e, t.subredditName)
				}),
				P = Object(o.b)(w),
				k = l.a.div("WidgetContent", E.a),
				I = e => {
					var {
						display: t,
						isFlairFilter: s,
						onMouseDown: n
					} = e, r = j(e, ["display", "isFlairFilter", "onMouseDown"]);
					return a.a.createElement("li", {
						className: Object(d.a)(E.a.StyledFlair, t === v.d.Cloud && E.a.cloudDisplay, {
							[E.a.flairFilter]: s,
							[E.a["m-selected"]]: r.isSelected
						}),
						onMouseDown: n
					}, a.a.createElement(m.b, _({}, r, {
						className: E.a.Flair,
						isFlairFilter: s,
						forceSmallEmojis: !0
					})))
				};
			class T extends a.a.Component {
				constructor(e) {
					super(e), this.flairListRef = a.a.createRef(), this.trackFlairWidgetClick = e => {
						this.props.sendEvent(Object(f.f)(e))
					}, this.trackFlairWidgetClear = e => this.props.sendEvent(Object(f.c)(e)), this.trackFlairOverflowClick = () => {
						this.props.sendEvent(Object(f.d)())
					}, this.onClick = e => {
						const t = {
							id: this.props.subredditId,
							eventType: "subreddit",
							originElement: "post_flair_widget",
							postFlairName: e
						};
						Object(x.d)(x.a.SearchResults), this.props.sendEvent(Object(f.b)(t))
					}, this.onToggleCollapse = () => this.setState(e => ({
						isCollapsed: !e.isCollapsed
					})), this.handleCloseClick = (e, t) => this.trackFlairWidgetClear(t), this.getSelectedFlair = e => e.find(e => Object(y.j)(e) === this.props.filterName), this.getFlairsFromIds = e => e.map(e => this.props.widget.templates[e] && Object(y.c)(this.props.widget.templates[e])), this.state = {
						isCollapsed: !0
					}
				}
				componentDidMount() {
					c.a.read(() => {
						const e = this.flairListRef.current && this.flairListRef.current.offsetHeight;
						e && e > N && this.setState({
							hasOverflow: !0
						})
					})
				}
				renderButton() {
					return a.a.createElement(g.n, {
						className: E.a.flairFilterButton,
						onMouseDown: this.trackFlairOverflowClick,
						onClick: this.onToggleCollapse
					}, this.state.isCollapsed ? n.fbt._("See more", null, {
						hk: "2fWFes"
					}) : n.fbt._("See less", null, {
						hk: "3oxSZ9"
					}))
				}
				renderFlairs(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return a.a.createElement("ul", {
						ref: this.flairListRef
					}, e.map(e => a.a.createElement(I, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						large: !0,
						onMouseDown: () => this.trackFlairWidgetClick(e),
						subredditName: t,
						to: Object(y.e)(this.props.url, Object(y.j)(e))
					})))
				}
				renderFlairFilters(e) {
					const {
						isCollapsed: t
					} = this.state, s = t ? N : this.flairListRef.current && this.flairListRef.current.offsetHeight || "none";
					return a.a.createElement("div", {
						className: E.a.flairFilterContainer,
						style: {
							maxHeight: s
						}
					}, this.renderFlairs(e))
				}
				renderSelectedFlairFilter(e) {
					const {
						subredditName: t,
						widget: s
					} = this.props;
					return a.a.createElement("ul", null, a.a.createElement(I, {
						key: e.templateId,
						display: s.display,
						flair: e,
						isFlairFilter: !0,
						isSelected: !0,
						large: !0,
						onCloseClick: t => this.handleCloseClick(t, e),
						subredditName: t,
						to: Object(y.e)(this.props.url, Object(y.j)(e))
					}))
				}
				render() {
					const {
						filterName: e,
						widget: t
					} = this.props, {
						hasOverflow: s
					} = this.state, n = t.order, r = this.getFlairsFromIds(n), o = e && this.getSelectedFlair(r) || void 0, i = t.order.length > n.length || s && !o;
					return a.a.createElement(p.a, {
						styles: t.styles,
						title: t.shortName,
						truncateThreshold: this.props.truncateThreshold,
						widgetKind: t.kind
					}, a.a.createElement(k, null, o && this.renderSelectedFlairFilter(o), !o && this.renderFlairFilters(r), i && this.renderButton()))
				}
			}
			t.a = S(P(Object(u.c)(T)))
		},
		"./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less": function(e, t, s) {
			e.exports = {
				RawHTMLDisplay: "_2vztYwRKSDZV2ISjSixByA",
				rawHtmlDisplay: "_2vztYwRKSDZV2ISjSixByA",
				Chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				chevron: "_2U-LBUvfr1W6MEMTGXgzmh",
				RuleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				ruleShortName: "_8ZLJI1-ZiP7pHJ_yO1L4Z",
				pointerCursor: "_3osxlOKfiylmgqNqsW7erB",
				RuleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				ruleIndex: "_36D5hmBSZbFxkFMkiWg6cY",
				RuleTitle: "tbIApBd2DM_drfZQJjIum",
				ruleTitle: "tbIApBd2DM_drfZQJjIum",
				RuleDescription: "_2QhEclR_DjIrTv_oNU5MMN",
				ruleDescription: "_2QhEclR_DjIrTv_oNU5MMN"
			}
		},
		"./src/reddit/components/Widgets/SubredditRules/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/app/strings/index.ts"),
				o = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				i = s("./src/reddit/connectors/connectToLanguage.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				m = s("./src/reddit/components/RichTextJson/index.tsx"),
				u = s("./src/reddit/helpers/dom/index.ts"),
				p = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				b = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				h = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/components/Widgets/SubredditRules/Rule/index.m.less"),
				y = s.n(x);
			const f = c.a.div("RuleShortName", y.a),
				v = c.a.div("RuleIndex", y.a),
				O = c.a.div("RuleTitle", y.a),
				C = c.a.div("RuleDescription", y.a),
				E = c.a.wrapped(l.a, "RawHTMLDisplay", y.a),
				_ = {};
			class j extends r.a.Component {
				constructor(e) {
					super(e), this.onClick = () => {
						Object(u.f)() || this.setState({
							isVisible: !this.state.isVisible
						})
					}, this.state = {
						isVisible: this.shouldShowFullDisplay(e)
					}
				}
				shouldShowFullDisplay(e) {
					return e.display === g.e.FULL
				}
				render() {
					const {
						props: e,
						state: t,
						onClick: s,
						shouldShowFullDisplay: n
					} = this, a = !!(e.rule.descriptionRichText || e.rule.descriptionHtml || e.rule.description), o = !n(e) && !!a;
					return r.a.createElement(f, {
						className: Object(d.a)({
							[y.a.pointerCursor]: o
						}),
						onClick: n(e) || !a ? void 0 : s
					}, r.a.createElement(h.a, null, r.a.createElement(v, null, "".concat(e.humanIndex, ".")), r.a.createElement(O, null, "".concat(e.rule.shortName)), r.a.createElement("div", null, !n(e) && a && (t.isVisible ? r.a.createElement(b.a, {
						className: y.a.Chevron
					}) : r.a.createElement(p.a, {
						className: y.a.Chevron
					})))), t.isVisible && r.a.createElement(C, null, e.rule.descriptionRichText ? r.a.createElement(m.a, {
						content: JSON.parse(e.rule.descriptionRichText),
						useExplicitTextColor: !0,
						rtJsonElementProps: _
					}) : e.rule.descriptionHtml ? r.a.createElement(E, {
						html: e.rule.descriptionHtml
					}) : e.rule.description))
				}
			}
			s.d(t, "a", (function() {
				return N
			}));
			const N = Object(i.a)(e => e.rules.length > 0 ? r.a.createElement(o.a, {
				className: e.className,
				styles: e.styles,
				title: Object(a.a)(e.language, "structuredStyles.widgets.subreddit-rules.subredditRules", {
					subreddit: e.subredditName
				}),
				redditStyle: e.redditStyle
			}, e.rules.map((function(t, s) {
				return r.a.createElement(j, {
					key: "rule".concat(t.shortName).concat(t.createdUtc),
					rule: t,
					display: e.display,
					humanIndex: s + 1
				})
			}))) : null);
			t.b = e => r.a.createElement(N, {
				rules: e.widget.data || [],
				subredditName: e.subredditName,
				display: e.widget.display,
				redditStyle: e.redditStyle,
				styles: e.widget.styles
			})
		},
		"./src/reddit/components/Widgets/TextArea/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				widgetContent: "_1UXMWx5AOkqbZJ00ctnRu",
				RawHTMLDisplay: "_1-yyC7m50efEvz4Q5I7jn5",
				rawHtmlDisplay: "_1-yyC7m50efEvz4Q5I7jn5"
			}
		},
		"./src/reddit/components/Widgets/Widget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				d = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = s("./src/lib/lessComponent.tsx"),
				p = s("./src/lib/linkMatchers/index.ts"),
				b = s("./src/reddit/models/Image/index.tsx"),
				h = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				g = s("./src/reddit/models/Widgets/index.ts"),
				x = s("./src/reddit/selectors/structuredStyles.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/Widgets/Button/index.m.less"),
				v = s.n(f);
			const O = (e, t, s) => {
					let n = {},
						r = {};
					n = e.kind === g.f.Image ? {
						"--widget-button-background-image": "url('".concat(e.url, "')")
					} : ((e, t, s) => {
						let {
							color: n,
							fillColor: r,
							textColor: a
						} = e;
						return t && (n = a = s, r = "transparent"), {
							"--widget-button-background-color": "".concat(r || "transparent"),
							"--widget-button-border": "1px solid ".concat(n),
							"--widget-button-color": "".concat(a || n)
						}
					})(e, t, s);
					const a = e.hoverState || e;
					if (a.kind === g.f.Image) r = {
						"--widget-button-hover-background-image": "url('".concat(a.url, "')"),
						"--widget-button-hover-border": "none"
					};
					else {
						let {
							color: e,
							fillColor: n,
							textColor: o
						} = a;
						t && (e = o = s, n = "transparent"), r = {
							"--widget-button-hover-background-color": "".concat(n || "transparent"),
							"--widget-button-hover-background-image": "none",
							"--widget-button-hover-border": "1px solid ".concat(e),
							"--widget-button-hover-color": "".concat(o || e)
						}
					}
					return Object.assign({}, n, r)
				},
				C = e => e.kind === g.f.Image ? v.a.imageButton : v.a.textButton,
				E = e => {
					const t = Object(g.n)(e),
						s = Object(p.g)(p.e, t);
					return s ? s.url : e.url
				},
				_ = Object(m.a)(e => {
					const {
						button: t,
						overrideColors: s
					} = e, n = Object(h.a)(e).button;
					return r.a.createElement(c.i, {
						className: C(t),
						style: O(t, s, n)
					}, t.kind === g.f.Text && r.a.createElement("span", {
						className: t.hoverState ? v.a.vanishingTextButtonText : void 0
					}, t.text), t.hoverState && t.hoverState.kind === g.f.Text && r.a.createElement("span", {
						className: v.a.textButtonHoverText
					}, t.hoverState.text))
				}),
				j = e => r.a.createElement(l.a, {
					href: E(e.button),
					isSponsored: !1,
					source: null
				}, r.a.createElement(_, e)),
				N = u.a.wrapped(i.a, "RawHTMLDisplay", v.a);
			var S = Object(a.b)(() => Object(o.c)({
					forceRedditStyle: x.m,
					isNightmodeOn: y.Q
				}))(e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.descriptionHtml && r.a.createElement(N, {
					html: e.widget.descriptionHtml
				}), e.widget.buttons.filter(e => (e.kind !== g.f.Image || e.url !== b.c) && (!e.hoverState || e.hoverState.kind !== g.f.Image || e.hoverState.url !== b.c)).map(t => r.a.createElement(j, {
					key: "".concat(t.text, "-").concat(t.url),
					button: t,
					overrideColors: e.forceRedditStyle || e.isNightmodeOn
				})))),
				w = s("./src/lib/humanizeDate/index.ts"),
				P = s("./src/reddit/controls/TextButton/index.tsx"),
				k = s("./src/reddit/i18n/utils.ts"),
				I = s("./src/reddit/components/Widgets/Calendar/index.m.less"),
				T = s.n(I);
			const L = 100,
				B = {
					isExpanded: !1
				},
				F = u.a.wrapped(i.a, "RawHTMLDisplay", T.a),
				A = u.a.div("EventContainer", T.a),
				D = u.a.div("EventTitle", T.a),
				W = u.a.div("EventDate", T.a),
				R = u.a.div("EventLocation", T.a),
				M = u.a.div("EventDescription", T.a),
				U = u.a.wrapped(P.a, "ToggleDescription", T.a);
			class H extends r.a.Component {
				constructor(e) {
					super(e), this.toggleDescriptionView = () => {
						this.setState({
							isExpanded: !this.state.isExpanded
						})
					}, this.state = B
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return e.text.length > L ? r.a.createElement(M, null, t.isExpanded ? e.text : e.text.slice(0, L), r.a.createElement(U, {
						onClick: this.toggleDescriptionView
					}, t.isExpanded ? Object(k.c)("read less") : Object(k.c)("...read more"))) : r.a.createElement(M, null, e.text)
				}
			}
			const V = Object(o.c)({
				language: y.O
			});
			var G = Object(a.b)(V)(e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, e.widget.data.map((t, s) => r.a.createElement(A, {
					key: "".concat(s, "-").concat(t.title)
				}, r.a.createElement(D, null, t.titleHtml ? r.a.createElement(F, {
					html: t.titleHtml
				}) : t.title), e.widget.configuration.showDate && t.startTime && r.a.createElement(W, null, Object(w.a)(t.startTime, !0), !t.allDay && e.widget.configuration.showTime && r.a.createElement("span", null, " • ", (e => {
					const t = new Date(1e3 * e),
						s = t.getHours(),
						n = t.getMinutes();
					return n < 10 ? "".concat(s, ":0").concat(n) : "".concat(s, ":").concat(n)
				})(t.startTime), " ")), t.location && e.widget.configuration.showLocation && r.a.createElement(R, null, t.locationHtml ? r.a.createElement(F, {
					html: t.locationHtml
				}) : t.location), t.description && e.widget.configuration.showDescription && r.a.createElement(H, {
					language: e.language,
					text: t.description
				}))))),
				K = s("./src/reddit/components/TrackingHelper/index.tsx"),
				J = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx");
			var q = Object(K.c)(e => r.a.createElement(J.b, {
				className: e.className,
				communities: e.widget.data,
				sendEvent: e.sendEvent,
				title: e.widget.shortName,
				truncateThreshold: e.truncateThreshold,
				widget: e.widget
			}));
			const Y = Object(o.c)({
					stylesheet: e => e.stylesheets
				}),
				z = Object(a.b)(Y),
				Q = (e, t, s) => '<head>\n  <link rel="stylesheet" href="'.concat(e, '">\n  <link rel="stylesheet" href="').concat(t, '">\n  <base target="_blank">\n</head>\n<body>').concat(s, "</body>");
			class Z extends r.a.Component {
				constructor() {
					super(...arguments), this.storeRef = e => {
						this.iframe = e
					}
				}
				shouldComponentUpdate(e) {
					return (e.widget.stylesheetUrl !== this.props.widget.stylesheetUrl || e.widget.textHtml && e.widget.textHtml !== this.props.widget.textHtml) && (this.renderIframeContent(e), this.writeIFrameDocument()), e.widget.height !== this.props.widget.height
				}
				writeIFrameDocument() {
					this.iframe && this.iframe.contentWindow && void 0 !== this.iframeContent && (this.iframe.contentWindow.document.open(), this.iframe.contentWindow.document.write(this.iframeContent), this.iframe.contentWindow.document.close())
				}
				componentWillMount() {
					this.renderIframeContent(this.props)
				}
				componentDidMount() {
					this.iframe && this.iframe.contentWindow && this.iframeContent && (this.iframe.contentWindow.document.body && this.iframe.contentWindow.document.body.childNodes.length || this.writeIFrameDocument())
				}
				renderIframeContent(e) {
					e.widget.stylesheetUrl && e.widget.textHtml && (this.iframeContent = Q(e.stylesheet, e.widget.stylesheetUrl, e.widget.textHtml))
				}
				render() {
					const {
						props: e
					} = this;
					return r.a.createElement(d.a, {
						contentOnly: !0,
						truncateThreshold: e.truncateThreshold,
						widgetKind: e.widget.kind
					}, r.a.createElement("iframe", {
						ref: this.storeRef,
						width: "100%",
						height: e.widget.height || 300,
						srcDoc: this.iframeContent
					}))
				}
			}
			var X = z(Z),
				$ = s("./node_modules/fbt/lib/FbtPublic.js"),
				ee = s("./src/reddit/components/Widgets/Image/ImageFrame.m.less"),
				te = s.n(ee);
			var se = u.a.div("ImageFrame", te.a),
				ne = s("./src/reddit/components/Widgets/Image/StyledImage.m.less"),
				re = s.n(ne);
			var ae = u.a.img("StyledImage", re.a);
			class oe extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						imageIndex: this.getRandomIndex(e)
					}
				}
				getRandomIndex(e) {
					if (!e.widget.data.length) return -1;
					let t = Math.floor(Math.random() * e.widget.data.length);
					if (e.widget.data[t].url === b.c) {
						t = -1;
						for (let t = 0; t < e.widget.data.length; t++)
							if (e.widget.data[t].url !== b.c) return t
					}
					return t
				}
				UNSAFE_componentWillReceiveProps(e) {
					const {
						props: t,
						state: s
					} = this;
					e.subredditName === t.subredditName && e.widget.data[s.imageIndex] && e.widget.data[s.imageIndex] === t.widget.data[s.imageIndex] || this.setState(t => ({
						imageIndex: this.getRandomIndex(e)
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (t.imageIndex < 0) return null;
					const s = e.widget.data[t.imageIndex],
						n = r.a.createElement(se, null, r.a.createElement(ae, {
							alt: $.fbt._("Widget image", null, {
								hk: "2H4O05"
							}),
							src: s.url
						}));
					return s.linkUrl ? r.a.createElement(l.a, {
						href: s.linkUrl,
						isSponsored: !1,
						source: null
					}, n) : n
				}
			}
			var ie = oe,
				de = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				ce = s("./src/reddit/components/Flair/index.tsx"),
				le = s("./src/reddit/controls/InternalLink/index.tsx"),
				me = s("./src/reddit/icons/fonts/Envelope/index.tsx"),
				ue = s("./src/reddit/models/Flair/index.ts"),
				pe = s("./src/reddit/components/Widgets/Moderator/index.m.less"),
				be = s.n(pe);
			const he = u.a.div("ModeratorListItem", be.a),
				ge = u.a.div("Username", be.a),
				xe = u.a.a("MessageModsLink", be.a),
				ye = u.a.wrapped(ce.b, "FlairComponent", be.a),
				fe = e => e.authorFlairType === ue.f.Richtext ? {
					backgroundColor: e.authorFlairBackgroundColor,
					richtext: e.authorFlairRichText,
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				} : {
					backgroundColor: e.authorFlairBackgroundColor,
					text: e.authorFlairText || "",
					textColor: e.authorFlairTextColor,
					type: e.authorFlairType
				},
				ve = e => r.a.createElement(ge, null, "u/".concat(e)),
				Oe = u.a.wrapped(le.a, "InternalLink", be.a),
				Ce = u.a.div("LinkContainer", be.a);
			var Ee = e => {
					const {
						subredditName: t,
						widget: s
					} = e;
					return r.a.createElement(d.a, {
						styles: s.styles,
						title: $.fbt._("Moderators", null, {
							hk: "3AMICc"
						}),
						headerButton: r.a.createElement(xe, {
							href: "https://reddit.com/message/compose?to=/r/".concat(t),
							target: "_blank"
						}, r.a.createElement(me.a, null))
					}, s.mods.map(e => r.a.createElement(he, {
						key: e.name
					}, (e => r.a.createElement(de.a, {
						to: "/user/".concat(e.name, "/")
					}, ve(e.name)))(e), r.a.createElement(ye, {
						flair: fe(e),
						forceSmallEmojis: !0
					}))), r.a.createElement(Ce, null, r.a.createElement(Oe, {
						to: "/r/".concat(t, "/about/moderators/")
					}, $.fbt._("View All Moderators", null, {
						hk: "2DIeXE"
					}))))
				},
				_e = s("./src/reddit/components/Widgets/PostFlair/index.tsx"),
				je = s("./src/reddit/components/Widgets/SubredditRules/index.tsx"),
				Ne = s("./src/reddit/components/Widgets/TextArea/index.m.less"),
				Se = s.n(Ne);
			const we = u.a.div("WidgetContent", Se.a),
				Pe = u.a.wrapped(i.a, "RawHTMLDisplay", Se.a);
			var ke = e => r.a.createElement(d.a, {
					styles: e.widget.styles,
					title: e.widget.shortName,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget.kind
				}, r.a.createElement(we, null, r.a.createElement(Pe, {
					html: e.widget.textHtml || ""
				}))),
				Ie = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Te = e => r.a.createElement(Ie.b, null, "This widget hasn't been implemented yet!");
			t.a = e => {
				const t = function(e) {
					switch (e.kind) {
						case "moderators":
							return Ee;
						case "textarea":
							return ke;
						case "button":
							return S;
						case "subreddit-rules":
							return je.b;
						case "community-list":
							return q;
						case "calendar":
							return G;
						case "image":
							return ie;
						case "custom":
							return X;
						case "post-flair":
							return _e.a;
						default:
							return Te
					}
				}(e.widget);
				return r.a.createElement(t, {
					widget: e.widget,
					subredditName: e.subredditName,
					truncateThreshold: e.truncateThreshold
				})
			}
		},
		"./src/reddit/connectors/miniCardPost.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/post.ts"),
				o = s("./src/reddit/actions/postFlair.ts"),
				i = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/moderatorPermissions.ts"),
				u = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const h = Object(n.b)(() => Object(r.c)({
				activeModalId: l.a,
				autoplayPref: b.b,
				crosspostRoot: p.c,
				crosspostSubredditOrProfile: p.d,
				currentUser: b.i,
				flairStyleTemplate: c.P,
				hideNSFWPref: b.y,
				isActive: p.h,
				language: b.O,
				moderatorPermissions: m.i,
				modModeEnabled: c.N,
				post: p.M,
				showEditFlair: u.a,
				subredditOrProfile: p.Y,
				userIsOp: b.eb
			}), (e, t) => {
				let {
					postId: s
				} = t;
				return {
					dispatchFlairChanged: t => {
						let {
							post: s,
							previewFlair: n,
							selectedTemplateId: r
						} = t;
						return e(Object(o.h)({
							post: s,
							previewFlair: n,
							selectedTemplateId: r
						}))
					},
					handleVote: t => {
						const n = t === d.a.upvoted ? Object(a.cb)(s) : Object(a.x)(s);
						e(n)
					},
					onIgnoreReports: () => e(Object(a.ab)(s)),
					onOpenReportsDropdown: t => e(Object(i.h)({
						tooltipId: t
					}))
				}
			}, (e, t, s) => Object.assign({}, s, e, t, {
				onFlairChanged: s => {
					let {
						previewFlair: n,
						selectedTemplateId: r
					} = s;
					return t.dispatchFlairChanged({
						post: e.post,
						previewFlair: n,
						selectedTemplateId: r
					})
				}
			}), {
				forwardRef: !0
			});
			t.a = h
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			class a extends r.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							s = this.props.multiple ? [...t] : t[0];
						this.props.onChange(s), this.setState(() => ({
							value: s
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || ""
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this, s = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, a = s || n;
					return r.a.createElement("div", {
						className: e.className
					}, s && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: s,
						tabIndex: e.tabIndex
					}), !a && r.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts"),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (n = Object.getOwnPropertySymbols(e); r < n.length; r++) t.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[r]) && (s[n[r]] = e[n[r]])
					}
					return s
				};

			function c(e, t, s) {
				const n = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(n)(e => {
					const {
						featureEnabled: n
					} = e, a = d(e, ["featureEnabled"]);
					return n ? r.a.createElement(t, a) : void 0 !== s ? r.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/createBannerProperties/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/isFakeSubreddit/index.ts"),
				r = s("./src/reddit/constants/postLayout.ts");
			const a = Math.floor(100 * Math.random());
			var o;
			! function(e) {
				e.FIRST = "first", e.MIDDLE = "middle", e.BOTTOM = "bottom"
			}(o || (o = {}));
			t.b = (e, t, s, o, i) => {
				const d = {
					subreddit_screen: !1,
					logged_in: !!t.account,
					placement: e,
					platform: "redesign",
					full_url: s,
					layout: r.b[t.prefs.layout]
				};
				return o && !Object(n.a)(o.name) && (d.subreddit = o.name, d.subreddit_screen = !0), d.wls = 6, d.whitelist_status = "all_ads", d.percentage = d.random_number = a, i && (d.position = i), d
			}
		},
		"./src/reddit/helpers/getSubredditIcon/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			t.a = e => e.theme && Object(n.a)(e).banner.iconImage ? String(Object(n.a)(e).banner.iconImage) : e.subredditOrProfile ? e.subredditOrProfile.communityIcon || e.subredditOrProfile.icon.url : e.subreddit ? e.subreddit.communityIcon || e.subreddit.icon.url : void 0
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				a = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				o = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				u = e => Object(i.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: u(t)
					}
				},
				b = e => Object(n.o)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				g = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(a.a)(Object(r.a)(e), o.a.actionIcon, o.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/modOnboarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "e", (function() {
				return i
			}));
			const n = () => e => ({
					source: "mod_edu",
					action: "view",
					noun: "banner_post"
				}),
				r = () => e => ({
					source: "mod_edu_banner",
					action: "click",
					noun: "close"
				}),
				a = () => e => ({
					source: "mod_edu",
					action: "click",
					noun: "create_post_link"
				}),
				o = e => t => ({
					source: "mod_edu_widget",
					action: "click",
					noun: e
				}),
				i = e => e => ({
					source: "mod_edu",
					action: "view",
					noun: "widget"
				})
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "k", (function() {
				return l
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "h", (function() {
				return f
			}));
			var n = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = (e, t) => {
					if (t) {
						const s = r.media(e, t.post.id);
						if (s) {
							s.streamPublicId = t.stream.stream_id;
							const r = Object(n.h)(e, {
								streamIdFromPath: t.post.id
							});
							r === n.a.LIVE ? s.type = "stream_live" : r === n.a.VOD ? s.type = "stream_vod" : r === n.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: r.post(e, t.post.id),
							media: s,
							subreddit: r.subreddit(e)
						}
					}
					return {
						subreddit: r.subreddit(e)
					}
				},
				o = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				i = () => e => Object.assign({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}, a(e)),
				d = () => e => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}, a(e)),
				c = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "rpan",
					actionInfo: {
						position: t || 0
					}
				}, a(s, e)),
				l = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, o(t), e && Object.assign({}, a(t, e))),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, o(t), a(t, e)),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, o(t), a(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, o(t), a(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, o(t), a(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, o(t), a(t, e)),
				g = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, o(t), a(t, e)),
				x = e => t => {
					const s = Object(n.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, a(t, s))
				},
				y = e => t => {
					const s = Object(n.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, a(t, s))
				},
				f = (e, t) => s => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				}, a(s, t))
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return o
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "m", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "r", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "i", (function() {
				return f
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "l", (function() {
				return C
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "o", (function() {
				return j
			}));
			var n = s("./src/reddit/models/SubredditWikiPage/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => Object.assign({}, r.defaults(e), {
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				o = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, a(e)),
				i = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, a(e)),
				d = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, a(t)),
				c = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return d(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = d("compare_wiki_pages"),
				m = d("revert_wiki_page"),
				u = d("view_wiki_page"),
				p = d("view_source"),
				b = d("add_wiki_page_contributor"),
				h = d("remove_wiki_page_contributor"),
				g = d("save_wiki_page_settings"),
				x = d("copy_url"),
				y = d("add_wiki_subreddit_contributor"),
				f = d("remove_wiki_subreddit_contributor"),
				v = d("ban_wiki_contributor"),
				O = d("unban_wiki_contributor"),
				C = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				E = {
					[n.a.Inherit]: "subreddit_wiki_perms",
					[n.a.Contributors]: "only_wiki_contributors",
					[n.a.Mods]: "only_mods"
				},
				_ = e => t => Object.assign({}, a(t), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: r.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				j = e => t => Object.assign({}, a(t), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: r.actionInfo(t, {
						settingValue: E[e]
					})
				})
		},
		"./src/reddit/icons/fonts/Envelope/index.m.less": function(e, t, s) {
			e.exports = {
				Envelope: "gsQG-L1wCCIUe8dJEOA6C",
				envelope: "gsQG-L1wCCIUe8dJEOA6C"
			}
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Envelope/index.m.less"),
				i = s.n(o);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("envelope"), " ").concat(e.className)
			}), "Envelope", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Pencil/index.m.less": function(e, t, s) {
			e.exports = {
				PencilIcon: "fKeLCuOy1oZ3UGfRARX6w",
				pencilIcon: "fKeLCuOy1oZ3UGfRARX6w"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/Pencil/index.m.less"),
				i = s.n(o);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(a.b)("pencil"), " ").concat(e.className)
			}), "PencilIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Chevron/index.m.less": function(e, t, s) {
			e.exports = {
				chevron: "_1c_YBKkiW4FhhLJPkq9c1v"
			}
		},
		"./src/reddit/icons/svgs/Chevron/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Chevron/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(a.a)(i.a.chevron, e.className),
				viewBox: "0 0 9 14",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				transform: "translate(-6.000000, -3.000000)"
			}, r.a.createElement("polygon", {
				fill: "none",
				points: "0 20 20 20 20 0 0 0"
			}), r.a.createElement("polygon", {
				fill: "inherit",
				points: "7.47566213 3 14.4756621 10 7.47566213 17 6 15.5239203 11.5239203 10 6 4.47566213"
			})))
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircleCheck/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 21 21",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5ZM9.35975 14.8725L15.2398 8.71852L15.2418 8.72352C15.5868 8.36252 15.5868 7.77752 15.2418 7.41752C14.8968 7.05752 14.3388 7.05752 13.9938 7.41752L8.73675 12.9175L7.00675 11.1075C6.66175 10.7475 6.10375 10.7465 5.75875 11.1075C5.41375 11.4685 5.41375 12.0535 5.75875 12.4135L8.11175 14.8735C8.28475 15.0535 8.50975 15.1435 8.73675 15.1435C8.85356 15.143 8.96904 15.1187 9.07615 15.0721C9.18326 15.0256 9.27975 14.9576 9.35975 14.8725Z",
				fill: "inherit"
			}))
		},
		"./src/reddit/icons/svgs/QuarantineWarning/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => {
				let {
					className: t
				} = e;
				return r.a.createElement("svg", {
					className: t,
					viewBox: "0 0 12 12",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("g", {
					fillRule: "evenodd"
				}, r.a.createElement("path", {
					d: "M0 12h12V0H0z",
					fill: "none"
				}), r.a.createElement("path", {
					d: "M6.367 6.704a.376.376 0 0 1-.734 0l-.75-3.5a.376.376 0 0 1 .367-.454h1.5a.376.376 0 0 1 .367.454l-.75 3.5zm.166 2.701A.756.756 0 0 1 6 9.622a.74.74 0 0 1-.75-.75c0-.097.023-.195.06-.285a.74.74 0 0 1 .158-.24.778.778 0 0 1 1.065 0 .74.74 0 0 1 .157.24.76.76 0 0 1 .06.285c0 .203-.083.39-.217.533zm5.284-.373l-4.5-8.25a1.5 1.5 0 0 0-2.634 0l-4.5 8.25A1.501 1.501 0 0 0 1.5 11.25h9a1.5 1.5 0 0 0 1.317-2.218z",
					fill: "inherit"
				})))
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				d = s.n(i);
			t.a = Object(a.a)(e => r.a.createElement("div", {
				className: Object(o.a)(d.a.expandedCenterContainer, e.className)
			}, r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), r.a.createElement("div", {
				className: d.a.center
			}, Array.isArray(e.children) && e.children[1]), r.a.createElement("div", {
				className: d.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/models/SubredditWikiPage/index.ts": function(e, t, s) {
			"use strict";
			var n, r;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.MayNotView = "MAY_NOT_VIEW", e.PageNotCreated = "PAGE_NOT_CREATED", e.PageNotFound = "PAGE_NOT_FOUND", e.RestrictedPage = "RESTRICTED_PAGE", e.Unknown = "UNKNOWN", e.Valid = "VALID", e.WikiDisabled = "WIKI_DISABLED"
				}(n || (n = {})),
				function(e) {
					e.Inherit = "INHERIT_SUBREDDIT_PERMS", e.Contributors = "CONTRIBUTORS", e.Mods = "MODS"
				}(r || (r = {}))
		},
		"./src/reddit/pages/Subreddit/index.m.less": function(e, t, s) {
			e.exports = {
				duHeader: "otZ2uDhYTr1YmgF32ArRm",
				cardChild: "_3HLyjC36ED_cOkMhS77Ts1",
				classicChild: "_2YjutkjJwMliy9kOCltIuA",
				compactChild: "m6QmcOHa4tObaem8JhVz8",
				newbieBanner: "_2yjtWm1t0hFL9JDdG1EXR5",
				sidebar: "_3ZmEUUvrdj4LXpXC9XZdN7",
				subredditPremiumUpsell: "_3s2ygGulpjIr920Ws4sGpx",
				af: "GWC1a5vux4ivxu9auf82p",
				nightmode: "_1ZO35z-bGcHeJayxwyFIw_",
				daymode: "WFCrDi8IEKUJOYWPX_hqq"
			}
		},
		"./src/reddit/pages/Subreddit/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/core-js/modules/es6.regexp.match.js"),
				r = s.n(n),
				a = s("./node_modules/core-js/modules/es6.array.sort.js"),
				o = s.n(a),
				i = s("./node_modules/core-js/modules/es6.regexp.search.js"),
				d = s.n(i),
				c = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				l = s("./node_modules/lodash/fromPairs.js"),
				m = s.n(l),
				u = s("./node_modules/react/index.js"),
				p = s.n(u),
				b = s("./node_modules/react-redux/es/index.js"),
				h = s("./src/reddit/i18n/components.tsx"),
				g = s("./node_modules/reselect/es/index.js"),
				x = s("./src/config.ts"),
				y = s("./src/lib/classNames/index.ts"),
				f = s("./src/lib/extractQueryParams/index.ts"),
				v = s("./src/lib/isAdHocMultireddit/index.ts"),
				O = s("./src/lib/isFakeSubreddit/index.ts"),
				C = s("./src/lib/listingSort/index.ts"),
				E = s("./src/lib/makeListingKey/index.ts"),
				_ = s("./src/lib/objectSelector/index.ts"),
				j = s("./src/lib/constants/index.ts"),
				N = s("./src/lib/fastdom/index.ts"),
				S = s("./src/lib/performanceTimings/index.tsx"),
				w = s("./src/reddit/actions/pages/subreddit.ts"),
				P = s("./src/reddit/actions/preferences.ts"),
				k = s("./src/reddit/actions/search.ts"),
				I = s("./src/reddit/actions/subreddit.ts"),
				T = s("./src/reddit/components/CommunityIdTopBar/index.tsx"),
				L = s("./src/reddit/components/ContentGate/index.tsx"),
				B = s("./src/reddit/components/CreatePostBanner/index.tsx"),
				F = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/async.tsx"),
				A = s("./src/reddit/components/Economics/SubredditPremium/NewUserWelcome/async.tsx"),
				D = s("./src/reddit/components/EmptySubreddit.tsx"),
				W = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				R = s("./src/reddit/components/Governance/ClaimPointsBanner/async.ts"),
				M = s("./src/reddit/components/Governance/VotingBanner/async.tsx"),
				U = s("./src/reddit/components/Governance/WalletRegistration/Banner/async.tsx"),
				H = s("./src/reddit/components/Governance/WalletRegistration/StellarBanner/async.tsx"),
				V = s("./src/reddit/components/HeaderImage/index.tsx"),
				G = s("./src/reddit/components/InFeedPostCreation/async.tsx"),
				K = s("./src/reddit/components/InfoBanners/QuarantinedSubredditBanner/index.tsx"),
				J = s("./src/reddit/components/JumpToContent/index.tsx"),
				q = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				Y = s("./src/reddit/components/ListingPostList/index.tsx"),
				z = s("./src/reddit/components/PublicAccessNetwork/ListingUnit/RpanScrollChild.tsx"),
				Q = s("./src/reddit/components/SearchDiscoveryUnits/DiscoveryUnitHeader/index.tsx"),
				Z = s("./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/Placeholder/index.tsx"),
				X = s("./src/reddit/components/StructuredStyles/BladeDrawerController/index.tsx"),
				$ = s("./src/reddit/components/SubredditSidebar/index.tsx"),
				ee = s("./src/reddit/components/TabBadger/index.tsx"),
				te = s("./src/reddit/components/TrackingHelper/index.tsx"),
				se = s("./src/reddit/constants/gremlins.ts"),
				ne = s("./src/reddit/constants/page.ts"),
				re = s("./src/reddit/constants/parameters.ts"),
				ae = s("./src/reddit/constants/postLayout.ts"),
				oe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ie = s("./src/reddit/featureFlags/index.ts"),
				de = s("./src/reddit/helpers/getSubredditErrorProps/index.ts"),
				ce = s("./src/reddit/helpers/trackers/screenview.ts"),
				le = s("./src/reddit/layout/page/Listing/index.tsx"),
				me = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				ue = s("./src/reddit/models/ModeratingSubreddits/index.ts"),
				pe = s("./src/reddit/selectors/discoveryUnit.ts"),
				be = s("./src/reddit/selectors/experiments/bestSortPopular.ts"),
				he = s("./src/reddit/selectors/experiments/gremlins.ts"),
				ge = s("./src/reddit/selectors/experiments/topPosts.ts"),
				xe = s("./src/reddit/selectors/experiments/trending.ts"),
				ye = s("./src/reddit/selectors/listings.ts"),
				fe = s("./src/reddit/selectors/meta.ts"),
				ve = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Oe = s("./src/reddit/selectors/posts.ts"),
				Ce = s("./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts"),
				Ee = s("./src/reddit/selectors/subreddit.ts"),
				_e = s("./src/reddit/selectors/theme.ts"),
				je = s("./src/reddit/selectors/user.ts"),
				Ne = s("./src/reddit/pages/Subreddit/index.m.less"),
				Se = s.n(Ne);

			function we() {
				return (we = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Pe = Object(c.a)({
					resolved: {},
					chunkName: () => "reddit-components-AdHocMultiredditSidebar",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-AdHocMultiredditSidebar").then(s.bind(null, "./src/reddit/components/AdHocMultiredditSidebar/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/AdHocMultiredditSidebar/index.tsx"
					}
				}),
				ke = Object(c.a)({
					resolved: {},
					chunkName: () => "reddit-components-LayersEmbed",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("reddit-components-LayersEmbed").then(s.bind(null, "./src/reddit/components/LayersEmbed/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/LayersEmbed/index.tsx"
					}
				}),
				Ie = 5,
				Te = 3,
				Le = Object(oe.t)(),
				Be = Object(c.a)({
					resolved: {},
					chunkName: () => "SubredditTopContent",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("SubredditTopContent")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/DiscoveryUnit/SubredditTopContentDiscoveryUnit/index.tsx"
					}
				}),
				Fe = Object(_.a)(Object(g.a)((e, t) => {
					let {
						location: s
					} = t;
					return s.search
				}, e => m()([...Object(f.a)(e)]))),
				Ae = Object(g.a)((e, t) => {
					let {
						match: s
					} = t;
					return s.params.subredditName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort
				}, Fe, je.T, be.a, (e, t, s, n, r) => {
					let a = t;
					a || (e === ne.f && r ? a = j.O.BEST : Object(O.a)(e) && (a = j.O.HOT));
					const o = Object(w.g)(s, n);
					return Object(w.h)(e, a, s, o)
				}),
				De = Object(g.c)({
					isTopContentDismissed: je.L
				}),
				We = Object(g.c)({
					subreddit: (e, t) => Object(Ee.y)(e, {
						subredditName: t.match.params.subredditName
					})
				}),
				Re = Object(g.c)({
					countryMeta: fe.b,
					geopopular: je.m
				}),
				Me = Object(g.c)({
					isLoggedIn: je.G
				}),
				Ue = Object(_.a)((e, t) => {
					const {
						subreddit: s
					} = We(e, t), {
						subredditName: n
					} = t.match.params;
					if (s) {
						const r = Ae(e, t),
							a = Object(ve.a)(ue.c.config)(e, {
								subredditId: s.id
							}),
							o = Object(Oe.I)(e, r, n, !0),
							i = !Object(ye.d)(e, {
								listingKey: r
							});
						if (a && i && o.length <= 1) return !0
					}
					return !1
				}),
				He = Object(g.c)({
					isPopular: oe.C,
					isInTrendingEntrypointExperiment: xe.a
				}),
				Ve = e => {
					const t = re.t in e && e[re.t].toUpperCase();
					if ("string" == typeof t && t in j.Rb) return j.Rb[t]
				},
				Ge = Object(_.a)((e, t) => {
					const {
						sort: s,
						subredditName: n
					} = t.match.params, r = Fe(e, t);
					if (s) return Object(C.b)({
						sort: s,
						timeSort: Ve(r)
					});
					if (Object(O.a)(n)) return n === ne.f && Object(be.a)(e) ? Object(C.b)({
						sort: j.O.BEST
					}) : Object(C.b)({
						sort: j.O.HOT
					});
					const a = Ae(e, t),
						o = e.listings.postOrder.listingSort[a];
					if (o && !o.hasChanged) return Object(C.d)(o.sort);
					const {
						subreddit: i
					} = We(e, t);
					if (i) {
						const t = Object(Ee.B)(e, {
							subredditId: i.id
						});
						return Object(C.d)(t)
					}
					return Object(C.d)(e.user.prefs.sort)
				}),
				Ke = Object(_.a)((e, t) => {
					const {
						subredditName: s
					} = t.match.params;
					return Object(Ee.T)(e, {
						subredditName: s
					})
				}),
				Je = Object(g.c)({
					claimablePointsEnabled: ie.d.spClaimablePoints,
					isBlacklistedTopContentPage: pe.f,
					layersEmbedEnabledOnSubreddit: ie.d.layersEmbed,
					listingKey: Ae,
					sortParams: Ge,
					subredditPremiumEnabled: ie.d.spPremiumUpsells,
					stellarRegistrationBannerEnabled: ie.d.spStellarWalletRegistration,
					topContent: Ke,
					topContentDiscoveryUnit: e => Object(pe.c)(e, {
						unitName: me.a
					}),
					topPostsVariant: ge.d,
					walletRegistrationBannerEnabled: ie.d.spWalletRegistrationBanner
				}),
				qe = Object(g.c)({
					showCreatePostBanner: Ue,
					contentGateInfo: (e, t) => Object(je.f)(e, t.match.params.subredditName),
					layout: oe.L,
					isRpanDuVisible: (e, t) => {
						let {
							match: s
						} = t;
						return Object(Ce.a)(e, {
							listingName: "r/".concat(s.params.subredditName)
						})
					},
					rpanInjectionIndex: (e, t) => {
						let {
							match: s
						} = t;
						return Object(Ce.b)(e, {
							listingName: "r/".concat(s.params.subredditName)
						})
					},
					isImposterEmbedEnabled: he.a,
					isNightmode: _e.a
				}),
				Ye = () => Object(g.a)(je.T, Re, Fe, De, We, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Ee.v)(e, {
						subredditName: s.params.subredditName
					})
				}, Me, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.subredditName
				}, He, Je, qe, (e, t, s, n, r, a, o, i, d, c, l) => {
					let {
						countryMeta: m,
						geopopular: u
					} = t, {
						isTopContentDismissed: p
					} = n, {
						subreddit: b
					} = r, {
						isLoggedIn: h
					} = o, {
						isInTrendingEntrypointExperiment: g,
						isPopular: x
					} = d, {
						claimablePointsEnabled: y,
						subredditPremiumEnabled: f,
						layersEmbedEnabledOnSubreddit: v,
						listingKey: O,
						sortParams: {
							sort: C,
							timeSort: E
						},
						stellarRegistrationBannerEnabled: _,
						topContent: N,
						topContentDiscoveryUnit: S,
						topPostsVariant: w,
						isBlacklistedTopContentPage: P,
						walletRegistrationBannerEnabled: k
					} = c;
					const I = m || j.w.Everywhere,
						T = u || I,
						L = s && re.g in s ? s[re.g].toUpperCase() : T,
						B = !!s.hasOwnProperty("f");
					return Object.assign({
						countrySort: L,
						claimablePointsEnabled: y,
						subredditPremiumEnabled: f,
						isLoggedIn: h,
						isInTrendingEntrypointExperiment: g,
						isPopular: x,
						layersEmbedEnabledOnSubreddit: v,
						listingKey: O,
						renderNSFWContentGate: b && b.isNSFW && !e,
						isTopContentDismissed: p,
						sort: C,
						stellarRegistrationBannerEnabled: _,
						subreddit: b,
						subredditAboutInfo: a,
						subredditName: i,
						timeSort: E,
						topContent: N,
						topContentDiscoveryUnit: S,
						topPostsVariant: w,
						isBlacklistedTopContentPage: P,
						isFlairFilter: B,
						walletRegistrationBannerEnabled: k
					}, l)
				}),
				ze = (e, t) => ({
					onLoadMorePosts: () => e(I.r({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					})),
					onLoadMoreSearchResults: () => e(Object(k.g)([j.Mb.Posts])),
					refreshFeed: () => e(I.s({
						sort: t.match.params.sort,
						subredditName: t.match.params.subredditName
					})),
					setTopContentDismissalPref: () => e(Object(P.D)())
				}),
				Qe = Object(b.b)(Ye, ze),
				Ze = Object(c.a)({
					resolved: {},
					chunkName: () => "Trending",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Trending").then(s.bind(null, "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/SearchDiscoveryUnits/TrendingPostsDiscoveryUnit/index.tsx"
					}
				}, {
					ssr: !1
				}),
				Xe = e => p.a.createElement(Ze, we({}, e, {
					fallback: p.a.createElement(Z.a, {
						className: e.className,
						showCardView: !!e.showCardView
					})
				})),
				$e = Object(c.a)({
					resolved: {},
					chunkName: () => "FrontpageSidebar",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("FrontpageSidebar").then(s.bind(null, "./src/reddit/components/FrontpageSidebar/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/FrontpageSidebar/index.tsx"
					}
				}),
				et = Object(c.a)({
					resolved: {},
					chunkName: () => "TopWeekPostsDiscoveryUnit",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChaining~ModerationPages~Poll~~089203bf"), s.e("InFeedChaining~SubredditTopContent~TopWeekPostsDiscoveryUnit"), s.e("TopWeekPostsDiscoveryUnit")]).then(s.bind(null, "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/DiscoveryUnit/TopWeekPosts/index.tsx"
					}
				});

			function tt(e) {
				const {
					isImposterEmbedEnabled: t,
					subreddit: s
				} = e;
				return !!s && t && !!s.name && s.name.toLowerCase() === se.a
			}
			class st extends p.a.Component {
				constructor() {
					super(...arguments), this.onTopContentDismissed = () => {
						this.props.setTopContentDismissalPref()
					}
				}
				componentDidMount() {
					N.a.read(() => {
						Object(S.d)(S.c.Subreddit, this.props.isLoggedIn)
					})
				}
				render() {
					const {
						claimablePointsEnabled: e,
						contentGateInfo: t,
						countrySort: s,
						isInTrendingEntrypointExperiment: n,
						isPopular: r,
						isLoggedIn: a,
						layersEmbedEnabledOnSubreddit: o,
						layout: i,
						listingKey: d,
						match: c,
						renderNSFWContentGate: l,
						showCreatePostBanner: m,
						sort: u,
						subredditPremiumEnabled: b,
						isTopContentDismissed: g,
						stellarRegistrationBannerEnabled: f,
						sendEvent: C,
						subreddit: _,
						subredditAboutInfo: N,
						subredditName: S,
						timeSort: w,
						topContent: P,
						topContentDiscoveryUnit: k,
						topPostsVariant: I,
						isBlacklistedTopContentPage: Z,
						isRpanDuVisible: te,
						rpanInjectionIndex: se,
						isFlairFilter: ne,
						walletRegistrationBannerEnabled: re
					} = this.props, oe = Object(O.a)(S), ie = S.toLowerCase(), me = "/r/".concat(S, "/"), ue = {
						listingKey: d,
						listingName: ie
					}, pe = Object(ge.a)(I), be = Object(ge.b)(I), he = Object(ge.c)(I);
					let xe;
					oe ? xe = Object(v.a)(S) ? p.a.createElement(Pe, ue) : p.a.createElement($e, ue) : _ && (xe = p.a.createElement($.a, we({}, ue, {
						className: Se.a.sidebar,
						subredditId: _.id,
						subredditName: S,
						topPostsVariant: I
					})));
					const ye = Object(de.a)(t, l, S);
					if (ye) return p.a.createElement(L.a, ye);
					const fe = i === ae.g.Large,
						ve = r && n,
						Oe = _ ? _.id : void 0,
						Ce = !c.params.sort && P && !P.isSubscribed && P.postIds && P.postIds.length >= Ie && !g && !Z && !pe && !be,
						Ee = {},
						_e = i === ae.g.Classic ? Se.a.classicChild : i === ae.g.Compact ? Se.a.compactChild : Se.a.cardChild;
					if (b && _ && i === ae.g.Large && (Ee[0] = {
							estHeight: 487,
							id: "newbie-banner-".concat(i, "-").concat(d),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(A.a, {
									className: Object(y.a)(t, Se.a.newbieBanner)
								})
							}
						}, Ee[3] = {
							estHeight: 256,
							id: "lfg-banner-".concat(i, "-").concat(d),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(F.a, {
									className: Object(y.a)(t, Se.a.childLayoutClass),
									subredditId: _.id
								})
							}
						}), re && _ && (Ee[1] = {
							estHeight: 384,
							id: "wallet-registration-".concat(i, "-").concat(d),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(U.a, {
									className: Object(y.a)(t, _e),
									subredditId: _.id
								})
							}
						}), f && _ && (Ee[2] = {
							estHeight: 200,
							id: "stellar-registration-".concat(i, "-").concat(d),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(H.a, {
									className: Object(y.a)(t, _e),
									subredditId: _.id
								})
							}
						}), e && _ && (Ee[2] = {
							estHeight: 268,
							id: "claim-points-".concat(i, "-").concat(d),
							render: e => {
								let {
									className: t
								} = e;
								return p.a.createElement(R.a, {
									className: Object(y.a)(t, _e),
									subredditId: _.id
								})
							}
						}), !r && he && w !== j.Rb.WEEK && i === ae.g.Large) {
						const e = Object(E.a)(S, j.O.TOP, {
							t: j.Rb.WEEK
						});
						Ee[Te] = {
							estHeight: 0,
							id: "top-week-posts-".concat(i, "-").concat(d),
							render: t => {
								let {
									className: s
								} = t;
								return p.a.createElement(et, {
									className: s,
									listingKey: e,
									subredditName: S
								})
							}
						}
					}
					if (te) {
						const {
							child: e,
							idx: t
						} = Object(z.a)({
							children: Ee,
							desiredIndex: se,
							layout: i,
							listingKey: d,
							listingName: "r/".concat(S),
							sendEvent: C
						});
						Ee[t] = e
					}
					const je = !oe || !a,
						Ne = {
							baseUrl: me,
							countrySort: s,
							sort: u,
							subredditId: Oe,
							timeSort: w
						},
						Le = ne ? this.props.onLoadMoreSearchResults : this.props.onLoadMorePosts,
						Fe = _ && o && p.a.createElement(ke, {
							subredditId: _.id,
							subredditName: S
						}),
						Ae = _ && _.subscribers;
					let De;
					if (tt(this.props)) {
						const e = new(0, window.URL)(x.a.gremlinsUrl + "/embed");
						e.searchParams.set("platform", "desktop"), this.props.isNightmode && e.searchParams.set("nightmode", "1");
						const t = this.props.isNightmode ? "nightmode" : "daymode";
						De = p.a.createElement("iframe", {
							className: Object(y.a)(Se.a.af, Se.a[t]),
							src: e.href
						})
					} else ve && (De = p.a.createElement(Xe, {
						showCardView: this.props.layout === ae.g.Large
					}));
					return p.a.createElement(X.a, {
						subredditId: Oe
					}, p.a.createElement(le.a, {
						subredditId: Oe,
						className: Object(y.a)(Se.a.Container, this.props.className),
						fitPageToContent: !0,
						navBar: !oe && p.a.Children.toArray([p.a.createElement(V.a, {
							headerText: _ ? _.name : S,
							disableFullscreen: fe,
							isTopBannerVariant: !0,
							key: "headerimage",
							subredditOrProfile: _,
							url: me
						}), p.a.createElement(T.a, {
							layout: i,
							key: "idtopbar",
							subreddit: _ || void 0,
							subredditId: Oe,
							subredditName: S,
							subredditUrl: me
						})]),
						trendingUnit: De,
						contentNavBar: p.a.createElement(p.a.Fragment, null, !je && p.a.createElement(q.a, Ne)),
						content: p.a.createElement(p.a.Fragment, null, _ && _.isQuarantined && p.a.createElement(K.a, {
							subredditName: S
						}), _ && m && p.a.createElement(B.a, {
							subreddit: _,
							listingKey: d,
							listingName: ie
						}), ve && p.a.createElement(Q.a, {
							className: Se.a.duHeader
						}, p.a.createElement(h.c, null, "Popular posts")), Ce && p.a.createElement(Be, {
							discoveryUnit: k,
							subredditName: _ ? _.name : S,
							topContent: P,
							onCloseClick: this.onTopContentDismissed
						}), !oe && a && !(N && N.userIsBanned) && p.a.createElement(G.a, {
							subredditName: S
						}), je && p.a.createElement(W.a, Ne), p.a.createElement(J.a, null), p.a.createElement(ee.a, {
							handlePillClick: this.props.refreshFeed,
							listingKey: d,
							subredditName: S,
							subscriberCount: Ae
						}), p.a.createElement(Y.a, {
							injectChildren: Ee,
							listingKey: d,
							listingName: ie,
							listingViewed: (e, t) => Object(ce.d)(d, u, t, e, w),
							noPostsComponent: () => p.a.createElement(D.a, {
								listingName: ie,
								sort: u,
								subreddit: _ || void 0
							}),
							onLoadMore: Le,
							inSubredditOrProfile: !oe
						}), p.a.createElement(M.a, null)),
						sidebar: xe,
						layerEmbed: Fe
					}))
				}
			}
			t.default = Le(Qe(Object(te.c)(st)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/discoveryUnit.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/subreddit.ts"),
				i = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const l = Object(n.a)(d.a, d.b, (e, t) => {
					let {
						listingName: s
					} = t;
					const n = Object(i.gb)(e);
					if (!n) return !1;
					let d;
					if (-1 === [a.P, "r/popular"].indexOf(s)) {
						const t = s.replace(/^r\//, ""),
							r = Object(o.D)(e, t),
							a = n.subreddit[r];
						if (!a) return !1;
						d = a
					} else d = n;
					if (!d.rpanDuDismissalTime) return !1;
					return new Date(d.rpanDuDismissalTime).getTime() > Date.now() - 30 * r.x
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(c.n)(e, {
						subreddit: s
					})
				}, c.l, (e, t, s, n, r, o) => {
					if (!e) return !1;
					if (o.isPermanentlyCanceled) return !1;
					if (s) return !1;
					if (t) return !!r && r.show_discovery_unit;
					if (!o.global.viewer_enabled) return !1;
					return [a.P, "r/popular"].indexOf(n) > -1
				}),
				m = Object(n.a)(d.b, (e, t) => {
					let {
						listingName: s
					} = t;
					return s
				}, (e, t) => {
					let {
						listingName: s
					} = t;
					return Object(c.n)(e, {
						subreddit: s
					})
				}, c.m, (e, t, s, n) => {
					if (!e) {
						const e = "home" === t ? n.home_feed_discovery_unit_index : "r/popular" === t ? n.popular_feed_discovery_unit_index : a.i;
						return "number" == typeof e ? e : a.i
					}
					return s ? s.discovery_unit_index : a.i
				})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				i = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				p = s.n(m)()(e => Object(r.a)(Object(n.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var b = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			s.d(t, "k", (function() {
				return E
			})), s.d(t, "l", (function() {
				return N
			})), s.d(t, "m", (function() {
				return S
			})), s.d(t, "g", (function() {
				return k
			})), s.d(t, "c", (function() {
				return B
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "j", (function() {
				return A
			})), s.d(t, "i", (function() {
				return D
			})), s.d(t, "e", (function() {
				return W
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "h", (function() {
				return H
			})), s.d(t, "b", (function() {
				return V
			})), s.d(t, "d", (function() {
				return G
			}));
			const h = e => e.publicAccessNetwork.reports.reported,
				g = e => e.publicAccessNetwork.history,
				x = e => e.publicAccessNetwork.history.cursor,
				y = e => e.publicAccessNetwork.history.visitOrder,
				f = e => e.publicAccessNetwork.hlsStreams,
				v = Object(n.a)(f, e => e.ended),
				O = Object(n.a)(f, e => e.removed),
				C = Object(n.a)(e => e.publicAccessNetwork.models, v, O, (e, t, s) => {
					const n = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = R(n, i.b.ENDED) ? i.b.ENDED : n,
							a = s.stream.vod_accessible;
						return r === n && !0 === a ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: r,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const n = s.stream.state,
							r = R(n, i.b.ENDED) ? i.b.ENDED : n,
							a = s.stream.vod_accessible;
						return r === n && !1 === a ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: r,
									vod_accessible: !1
								})
							})
						})
					}, n)
				}),
				E = (e, t) => {
					return C(e)[Object(o.g)(t)]
				},
				_ = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => p(t.listingName)(e, t), C, h, d.g, c.b, (e, t, s, n, r, d) => {
					if (d) {
						const a = [];
						if (e) {
							const t = Object(o.g)(e);
							s[t] && a.push(t)
						}
						const d = a.concat(t),
							c = [...new Set(d)],
							l = new Set([...n, ...r]);
						return c.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== i.b.KILLED && t.stream.state !== i.b.PURGED
						})
					}
					const c = new Set([...n, ...r]);
					return Object.keys(s).filter(e => !c.has(e)).map(e => s[e]).filter(e => e.rank !== a.m).filter(e => !e.post.isHidden).filter(e => e.stream.state !== i.b.KILLED && e.stream.state !== i.b.PURGED).map(e => e.post.id)
				}),
				j = Object(n.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, C, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: n
					} = t;
					return _(e, {
						listingName: s,
						streamIdFromPath: n
					})
				}, (e, t, s) => {
					const n = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				N = Object(n.a)(C, j, (e, t) => {
					const s = t.find(t => {
						const s = e[t];
						return !!s && s.stream.state === i.b.IS_LIVE
					});
					if (s) return e[s]
				}),
				S = Object(n.a)(C, j, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === i.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				w = Object(n.a)(y, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return j(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const s = new Set(e),
						n = t.filter(e => !s.has(e));
					if (n.length) return n[0]
				}),
				P = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, C, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return j(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, g, (e, t, s, n) => {
					if (!s.length) return;
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = r.find(e => e.stream.state === i.b.IS_LIVE);
					if (a) return a.post.id;
					const o = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				k = Object(r.a)(Object(n.a)(P, C, (e, t) => e ? t[e] : void 0)),
				I = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(o.g)(s) : void 0
				}, P, h, d.g, (e, t) => {
					let {
						related: s,
						streamIdFromPath: n,
						subreddit: r
					} = t;
					return j(e, {
						listingName: s || r,
						streamIdFromPath: n
					})
				}, (e, t, s, n, r) => !e || s.includes(e) || n.includes(e) ? t || r[0] : e),
				T = Object(n.a)(x, y, w, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				L = Object(n.a)(x, y, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				B = Object(r.a)(Object(n.a)(I, C, (e, t) => e ? t[e] : void 0)),
				F = Object(r.a)(Object(n.a)(T, C, (e, t) => e ? t[e] : void 0)),
				A = Object(r.a)(Object(n.a)(L, C, (e, t) => e ? t[e] : void 0)),
				D = (Object(r.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, C, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))), Object(n.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				W = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? E(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function R(e, t) {
				const s = {
					[i.b.NOT_STARTED]: 0,
					[i.b.PUBLISHED]: 1,
					[i.b.IS_LIVE]: 2,
					[i.b.DISCONNECTED]: 2,
					[i.b.ENDED]: 3,
					[i.b.KILLED]: 4,
					[i.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const M = Object(n.a)(I, g, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const H = Object(n.a)(I, C, b.b, (e, t, s) => {
					if (s) return U.INTRO;
					const n = e && t[e];
					if (!n) return U.UNAVAILABLE;
					const r = n.stream.state;
					return r === i.b.IS_LIVE || r === i.b.DISCONNECTED ? U.LIVE : r === i.b.ENDED && n.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				V = Object(n.a)(B, H, b.b, l.c, l.p, (e, t, s, n, r) => s ? n : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : r : void 0),
				G = Object(n.a)(B, H, M, (e, t, s) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(n.a)(o, a.o, (e, t) => t && !e.isIntroFinished),
				d = Object(n.a)(o, e => e.lastChatActivityUtcTs),
				c = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/gremlins.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = e => n.eb.Enabled === Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.cb
			})
		}
	}
]);
//# sourceMappingURL=Subreddit.02ac9861f9974b0b5912.js.map