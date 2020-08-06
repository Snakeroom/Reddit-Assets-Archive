// https://www.redditstatic.com/desktop2x/SubredditPremiumPurchaseModal.af08b93d8e95096424e4.js
// Retrieved at 8/6/2020, 5:50:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditPremiumPurchaseModal"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/lib/currency/cleanNumber/index.ts");

			function n(e, t) {
				const r = Object(s.a)(e),
					n = parseInt(r) / 100;
				return Math.floor(n) !== n || t ? n.toFixed(2) : String(n)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./node_modules/core-js/modules/es6.regexp.replace.js");

			function s(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.m.less": function(e, t, r) {
			e.exports = {
				benefit: "sgAzSfJ3cjofmRQShi_EG",
				benefitsTitle: "_3LDMgjJZ0criD5C6vkYGyG",
				benefits: "_3uGt177J_rZ6Xz6VzVrs7Z",
				benefitCircle: "_2jc7SMzkp0naDavfk2O28v",
				brand: "_3l53DizR_kkO_baf0os07b",
				checkmarkWrapper: "NN5iOi2K5sFG4C9YcGUIn",
				checkmark: "ZUu3aY57ejQ1NApIW8_Jq",
				container: "_23Y0-3FxDgPbvd5cJxfyS8",
				joined: "_2QYhI2fIKc9rPD-QKvqcxf",
				joinedText: "_1UqTSeE2qLQTQSMvmNlVYF",
				price: "_3EoQAq_DUikYdJTKGFrJdE",
				subTitle: "_1NWafiCzr-9q28pfaL-tDA",
				title: "_2axdI_1ILk9zDgceVsmJwZ",
				topLine: "ZcAgghBpd1Mtnj5tk5c93"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			}));
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/currency/centsToDollars/index.ts"),
				a = r("./node_modules/react/index.js"),
				c = r.n(a),
				o = r("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/contexts/ApiContext.tsx"),
				m = r("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.m.less"),
				u = r.n(m);
			const b = [() => s.fbt._("Loyalty badge", null, {
					hk: "2xuuHW"
				}), () => s.fbt._("New style badges every month", null, {
					hk: "4figaI"
				}), () => s.fbt._("Distinguished username", null, {
					hk: "2X7IoJ"
				}), () => s.fbt._("Support new feature development", null, {
					hk: "4wnxbi"
				})],
				p = [() => s.fbt._("Emotes in comments", null, {
					hk: "3pBItU"
				}), () => s.fbt._("Achievement badges", null, {
					hk: "BcuB7"
				}), () => s.fbt._("Images & GIFs in comments", null, {
					hk: "4ASFBV"
				}), () => s.fbt._("Members lounge", null, {
					hk: "2iNFqG"
				})];

			function g(e) {
				let {
					benefit: t,
					color: r
				} = e;
				return c.a.createElement("li", {
					className: u.a.benefit
				}, c.a.createElement("div", {
					className: u.a.benefitCircle,
					style: {
						backgroundColor: r
					}
				}), t)
			}
			t.b = Object(l.b)(Object(d.c)((function(e) {
				const {
					className: t,
					price: r,
					subreddit: a
				} = e;
				return c.a.createElement("div", {
					className: Object(n.a)(u.a.container, t)
				}, c.a.createElement("div", {
					className: u.a.topLine
				}, c.a.createElement(o.a, {
					className: u.a.brand,
					subreddit: a
				}), c.a.createElement("div", {
					className: u.a.title
				}, s.fbt._("{community} Supporter Membership", [s.fbt._param("community", a.displayText)], {
					hk: "eZ8PH"
				}))), c.a.createElement("header", {
					className: u.a.subTitle
				}, s.fbt._("Support the {community} community and receive exclusive access to premium features.", [s.fbt._param("community", a.displayText)], {
					hk: "2pm4PV"
				})), c.a.createElement("article", null, c.a.createElement("div", {
					className: u.a.benefitsTitle
				}, s.fbt._("membership benefits", null, {
					hk: "Uqmbk"
				})), c.a.createElement("ul", {
					className: u.a.benefits
				}, b.map(e => c.a.createElement(g, {
					benefit: e(),
					key: e()
				}))), c.a.createElement("div", {
					className: u.a.benefitsTitle
				}, s.fbt._("coming soon (maybe)", null, {
					hk: "1wQhrn"
				})), c.a.createElement("ul", {
					className: u.a.benefits
				}, p.map(e => c.a.createElement(g, {
					benefit: e(),
					key: e()
				})))), c.a.createElement("footer", {
					className: u.a.price
				}, s.fbt._("${price}/month", [s.fbt._param("price", Object(i.a)(r))], {
					hk: "2ykEVh"
				})))
			})))
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Footer/PurchaseButton/index.m.less": function(e, t, r) {
			e.exports = {
				alreadyPurchased: "_1Onbi9kB00e2bzKZeZYBvd",
				button: "_3TrC1pmf-WD_9abVHkXY_9",
				buttonWithoutCards: "_2IqgPBy2Cx7qEqrdNeWbbb",
				container: "JO5YWylcn8UsDpvnEwQBK",
				loading: "_1frqOhAN77AkOzhs5FyT75",
				loadingIcon: "_7VOIEdF4KzO7WDXvXnW5w",
				loginButton: "_1175K73rVEmH983t_ZFaNX",
				loginMessage: "_14Dfwa7jtwg3yLfFvPxRJb",
				submitting: "_1H-RdlrgKtJxiqkfr1eSr3"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Footer/PurchaseButton/index.tsx": function(e, t, r) {
			"use strict";
			var s = r("./node_modules/fbt/lib/FbtPublic.js"),
				n = r("./node_modules/react/index.js"),
				i = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/react-router-redux/es/index.js"),
				o = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/currency/centsToDollars/index.ts"),
				l = r("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				m = r("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				u = r("./src/reddit/actions/governance/errorToast.ts"),
				b = r("./src/reddit/actions/shortcuts/close.ts"),
				p = r("./src/reddit/components/TrackingHelper/index.tsx"),
				g = r("./src/reddit/contexts/ApiContext.tsx"),
				h = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = r("./src/reddit/endpoints/economics/specialMembership.ts"),
				_ = r("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				x = r("./src/reddit/models/Badge/managementPage.ts"),
				y = r("./src/reddit/selectors/economics.ts"),
				E = r("./src/reddit/selectors/telemetry.ts"),
				j = r("./src/reddit/selectors/user.ts"),
				C = r("./node_modules/reselect/es/index.js"),
				O = r("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Footer/PurchaseButton/index.m.less"),
				P = r.n(O);
			const w = "subreddit-premium-purchase-braintree",
				N = (e, t, r) => s.fbt._("{communityName} {membershipAlt}. ${price}/month, automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months.", [s.fbt._param("communityName", e.displayText), s.fbt._param("membershipAlt", r.membershipAlt), s.fbt._param("price", Object(d.a)(t, !0))], {
					hk: "3q2JqJ"
				});
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						loading: !0,
						submitting: !1
					}, this._isMounted = !1, this.alreadyPurchased = () => this.props.userIsPremiumSubscriber === y.a.Subscribed, this.getId = () => w + (this.props.uniqueId || "")
				}
				componentDidMount() {
					if (this._isMounted = !0, !this.alreadyPurchased()) {
						const e = this.props.membershipProducts.find(e => "usd" === e.currency);
						Object(_.a)({
							apiContext: this.props.apiContext(),
							config: {
								billingAgreement: N(this.props.subreddit, this.props.price, this.props.meta),
								type: "subscription"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: t => Object(f.d)(this.props.apiContext(), {
								nonce: t,
								price: this.props.price,
								productId: e && e.id || "membership",
								subredditId: this.props.subreddit.id,
								trial: this.props.trial,
								username: this.props.username
							}),
							username: this.props.username,
							onCancel: () => this.setState({
								submitting: !1
							}),
							onClientLoad: () => {
								this._isMounted && this.setState({
									loading: !1
								})
							},
							onError: (e, t, r) => {
								this._isMounted && (this.setState({
									submitting: !1
								}), this.props.onError(e), this.props.sendEvent(e => {
									const s = E.defaults(e);
									return Object.assign(Object.assign({
										source: "meta",
										action: "fail",
										noun: "subscription_paypal_purchase"
									}, s), {
										actionInfo: {
											reason: t,
											paneName: r
										},
										correlationId: this.props.correlationId,
										subreddit: E.subreddit(e)
									})
								}))
							},
							onSubmitting: () => {
								this.setState({
									submitting: !0
								}), this.props.sendEvent(e => Object.assign(Object.assign({
									source: "meta",
									action: "click",
									noun: "subscription_paypal_purchase",
									correlationId: this.props.correlationId
								}, E.defaults(e)), {
									subreddit: E.subreddit(e)
								}))
							},
							onSuccess: () => this.props.onPaymentSuccessful(this.props.isLoggedIn)
						})
					}
				}
				componentWillUnmount() {
					this._isMounted = !1
				}
				render() {
					return i.a.createElement("div", {
						className: Object(o.a)(this.props.className, P.a.container)
					}, this.alreadyPurchased() ? i.a.createElement("div", {
						className: P.a.alreadyPurchased
					}, s.fbt._("Already Purchased", null, {
						hk: "2h3Eug"
					})) : i.a.createElement(n.Fragment, null, i.a.createElement("div", {
						className: Object(o.a)(P.a.button, {
							[P.a.buttonWithoutCards]: !this.props.showCards,
							[P.a.loading]: this.state.loading,
							[P.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && i.a.createElement(h.a, {
						className: P.a.loadingIcon,
						sizePx: 24
					})))
				}
			}
			const S = Object(C.c)({
				isLoggedIn: j.H,
				membershipProducts: (e, t) => {
					let {
						subreddit: r
					} = t;
					return Object(y.k)(e, r.id)
				},
				meta: (e, t) => {
					let {
						subreddit: r
					} = t;
					return Object(y.s)(e, r.id)
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subreddit: r
					} = t;
					return Object(y.x)(e, r.id)
				}
			});
			t.a = Object(g.b)(Object(a.b)(S, (e, t) => {
				let {
					subreddit: r,
					onComplete: s
				} = t;
				return {
					onError: t => Object(u.a)(e, t),
					onPaymentSuccessful: t => {
						t ? e(Object(m.g)(r.id, !0)).then(() => e(Object(b.a)(() => {}))).then(() => s && s()).then(() => e(Object(l.c)({
							subredditId: r.id,
							initialView: x.c.MyBadges
						}))) : e(Object(c.b)(r.url))
					}
				}
			})(Object(p.c)(v)))
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Footer/index.m.less": function(e, t, r) {
			e.exports = {
				buttonWrapper: "_3VJQTwZe6JRTXJg8cfACLw",
				container: "_1h_NaiRLkQugKOzSOpKZau",
				legalWrapper: "_3cEWf90bMwulwfWjw6TWyi"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				benefits: "_3e3R0S4eFKkMQG5lHGlCOR",
				carousel: "_8DRbUxm2WcVVXy1WMpQ9b",
				close: "hK-ldOcn8jJBPCvdNnblQ",
				container: "_2_mOBtJ0hkVXaDbM9ZT1h_",
				footer: "_1KiCG_mKcVXN-w-MT9PgWl"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "PRICE", (function() {
				return I
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				o = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/components/TrackingHelper/index.tsx"),
				l = r("./src/reddit/contexts/PageLayer/index.tsx"),
				m = r("./src/reddit/featureFlags/component.tsx"),
				u = r("./src/reddit/icons/svgs/Close/index.tsx"),
				b = r("./src/reddit/selectors/telemetry.ts"),
				p = r("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Benefits/index.tsx"),
				g = r("./src/reddit/components/Carousel/index.tsx");
			const h = [{
				img: "img/badges/upsell2/page1.png"
			}, {
				img: "img/badges/upsell2/page2.png",
				extra: [{
					img: "img/memberships/fortnitebr/drake_24@2x.gif",
					style: {
						height: 24,
						left: 210,
						position: "absolute",
						top: 243,
						width: 24
					}
				}]
			}, {
				img: "img/badges/upsell2/page3.png"
			}, {
				img: "img/badges/upsell2/page4.png"
			}, {
				img: "img/badges/upsell2/page5.png"
			}, {
				img: "img/badges/upsell2/page6.png"
			}];
			var f = e => n.a.createElement(g.b, {
					animationType: g.a.Slide,
					className: e.className,
					items: h,
					itemTime: 7e3,
					itemWidth: 384,
					shouldHandleMouseClicks: !0,
					shouldShowIndicators: !0
				}),
				_ = r("./node_modules/fbt/lib/FbtPublic.js"),
				x = r("./src/lib/classNames/index.ts"),
				y = r("./src/reddit/constants/disclaimers.ts"),
				E = r("./src/reddit/selectors/economics.ts"),
				j = r("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Footer/PurchaseButton/index.tsx"),
				C = r("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Footer/index.m.less"),
				O = r.n(C);
			const P = (e, t, r) => {
				const s = '<a href="'.concat(y.a, '" target="_blank">Reddit Beta Terms of Service</a>'),
					i = _.fbt._("{communityName} {membershipAlt} automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months. By purchasing a {communityNameAgain} {membershipAltAgain}, you agree to the {userAgreement} and {beta}", [_.fbt._param("communityName", e.name), _.fbt._param("membershipAlt", r.membershipAlt), _.fbt._param("communityNameAgain", e.name), _.fbt._param("membershipAltAgain", r.membershipAlt), _.fbt._param("userAgreement", '<a href="https://www.redditinc.com/policies/user-agreement" target="_blank">Reddit User Agreement</a>'), _.fbt._param("beta", s)], {
						hk: "1qjeof"
					});
				return n.a.createElement("div", {
					className: O.a.legalWrapper,
					dangerouslySetInnerHTML: {
						__html: i
					},
					style: {
						color: t ? "var(--newRedditTheme-body)" : "var(--newRedditTheme-metaText)"
					}
				})
			};
			const w = Object(a.c)({
				isNightmode: e => e.user.prefs.nightmode,
				meta: (e, t) => {
					let {
						subreddit: r
					} = t;
					return Object(E.s)(e, r.id)
				}
			});
			var N = Object(i.b)(w)((function(e) {
					return n.a.createElement("footer", {
						className: Object(x.a)(e.className, O.a.container),
						style: {
							backgroundColor: e.isNightmode ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)"
						}
					}, n.a.createElement("div", {
						className: O.a.buttonWrapper
					}, n.a.createElement(j.a, {
						price: e.price,
						subreddit: e.subreddit
					})), P(e.subreddit, e.isNightmode, e.meta))
				})),
				v = r("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/index.m.less"),
				S = r.n(v);
			const I = "499";
			class k extends n.a.Component {
				componentDidMount() {
					this.props.sendEvent(e => Object.assign(Object.assign({
						source: "meta",
						action: "view",
						noun: "subscription_learn_more_modal",
						correlationId: this.props.correlationId
					}, b.defaults(e)), {
						subreddit: b.subreddit(e)
					}))
				}
				render() {
					return this.props.subreddit ? n.a.createElement("div", {
						className: S.a.container
					}, n.a.createElement(p.b, {
						correlationId: this.props.correlationId,
						className: S.a.benefits,
						price: I,
						subreddit: this.props.subreddit
					}), n.a.createElement(f, {
						className: S.a.carousel
					}), n.a.createElement(N, {
						className: S.a.footer,
						price: I,
						subreddit: this.props.subreddit
					}), n.a.createElement(u.a, {
						className: S.a.close,
						onClick: this.props.onClose
					})) : null
				}
			}
			const A = Object(a.c)({
					subreddit: l.q
				}),
				M = Object(i.b)(A, e => ({
					onClose: () => e(Object(o.f)())
				})),
				B = Object(l.t)(),
				T = Object(d.c)(k);
			t.default = Object(m.a)("spPremium", Object(c.a)(B(M(T))))
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less": function(e, t, r) {
			e.exports = {
				bling1: "_3bFpAdmzeju5Ql4apA72Mz",
				pulse: "_14AnDN_X0RSUfV9D1Pe9X9",
				bling2: "_-8SkYF0AWUhZMShvTAty8",
				bling3: "_33JifCWcX_crkurifB5pzo",
				container: "_3gI6KjxK9w-BF4adKznqm6",
				crown: "_2UUIJaaZ6FDtWk-CQ_bAJF",
				crownTilt: "m3mBh304aV8eRhpVYDtv",
				crownImg: "_3UjxD8eArSGPOK9ydFdB66",
				crownTiltImg: "_335XoNCIgdnw1NeVMSD3YB",
				defaultIcon: "_1UJ_7ZuaT1wJZzUY6CLslm",
				icon: "_27dkKf4zi-Ny4-FV0XKx0d",
				largeContainer: "_2vtPk3WzODfPV6T2uKOi9x",
				largeBling1: "tQV0dex-2wW9l95VW59ym",
				largeBling2: "_22o1BzEAX778WumBKRfDae",
				largeBling3: "MqH9i4M4OAiAmvS-AdBJx",
				largeCrown: "_30sWCOTB9B8ZfsCDuOoMvQ",
				largeCrownImg: "_1hUveqwJI6eda9EpmMvUJI",
				largeDefaultIcon: "_3_OgvcHTKNX0og_Fw-oHOc",
				largeIcon: "_18B8fdJn2VAl1XHi5AdcVc"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return b
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./src/lib/classNames/index.ts");

			function a(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, n.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
			var c = r("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				o = r("./src/reddit/icons/svgs/Crown/index.tsx"),
				d = r("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				l = r("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less"),
				m = r.n(l);
			const u = {
				regular: {
					bling1: m.a.bling1,
					bling2: m.a.bling2,
					bling3: m.a.bling3,
					container: m.a.container,
					crown: m.a.crown,
					crownImg: m.a.crownImg,
					defaultIcon: m.a.defaultIcon,
					icon: m.a.icon
				},
				large: {
					bling1: m.a.largeBling1,
					bling2: m.a.largeBling2,
					bling3: m.a.largeBling3,
					container: m.a.largeContainer,
					crown: m.a.largeCrown,
					crownImg: m.a.largeCrownImg,
					defaultIcon: m.a.largeDefaultIcon,
					icon: m.a.largeIcon
				}
			};

			function b(e) {
				const t = e.subreddit && (e.subreddit.communityIcon || e.subreddit.icon.url),
					r = u[e.size || "regular"],
					s = e.subreddit && e.subreddit.primaryColor;
				return n.a.createElement("div", {
					className: Object(i.a)(r.container, e.className)
				}, e.subreddit ? n.a.createElement("img", {
					className: r.crownImg,
					src: Object(d.a)(e.subreddit, "Crown.gif")
				}) : n.a.createElement(o.a, {
					className: r.crown
				}), n.a.createElement(a, {
					className: r.bling1
				}), n.a.createElement(a, {
					className: r.bling2
				}), n.a.createElement(a, {
					className: r.bling3
				}), t ? n.a.createElement("img", {
					className: r.icon,
					src: t,
					style: {
						backgroundColor: s
					}
				}) : n.a.createElement(c.a, {
					className: r.defaultIcon,
					style: {
						backgroundColor: s
					}
				}))
			}
		},
		"./src/reddit/constants/disclaimers.ts": function(e, t, r) {
			"use strict";
			var s;
			r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
				}(s || (s = {}));
			const n = "https://www.redditinc.com/policies/beta-terms-of-service"
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var s = r("./node_modules/react/index.js"),
				n = r.n(s),
				i = r("./node_modules/react-redux/es/index.js"),
				a = r("./node_modules/reselect/es/index.js"),
				c = r("./src/reddit/featureFlags/index.ts"),
				o = function(e, t) {
					var r = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (r[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var n = 0;
						for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (r[s[n]] = e[s[n]])
					}
					return r
				};

			function d(e, t, r) {
				const s = Object(a.c)({
					featureEnabled: t => c.d[e](t)
				});
				return Object(i.b)(s)(e => {
					const {
						featureEnabled: s
					} = e, i = o(e, ["featureEnabled"]);
					return s ? n.a.createElement(t, i) : void 0 !== r ? n.a.createElement(r, i) : null
				})
			}
		},
		"./src/reddit/helpers/economics/setupSubredditPremiumButton.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = r("./src/lib/currency/centsToDollars/index.ts"),
				n = r("./src/reddit/endpoints/economics/specialMembership.ts"),
				i = r("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function a(e) {
				let {
					apiContext: t,
					config: r,
					elementId: a,
					price: c,
					purchaseFn: o,
					username: d,
					onCancel: l,
					onClientLoad: m,
					onError: u,
					onSubmitting: b,
					onSuccess: p
				} = e;
				const g = (e, t) => {
					if (!u) return;
					let r = e.toString ? e.toString() : "";
					r.toLowerCase().includes("object object") && (r = JSON.stringify(e)), u(e, r, t)
				};
				try {
					const [e] = await Promise.all([Object(n.b)(t, {
						username: d
					}), Object(i.b)()]);
					if (!e.ok) return void g(e.error, "/ps/me/braintree-client-tokens");
					const u = await braintree.client.create({
							authorization: e.body.clientToken
						}),
						h = await new Promise((e, t) => {
							braintree.paypalCheckout.create({
								client: u
							}, (r, s) => r ? t(r) : e(s))
						});
					m && m(), await paypal.Buttons({
						createBillingAgreement: "subscription" === r.type ? () => (b && b(), h.createPayment({
							amount: Object(s.a)(c(), !0),
							billingAgreementDescription: r.billingAgreement,
							currency: "USD",
							flow: "vault"
						})) : void 0,
						createOrder: "purchase" === r.type ? () => (b && b(), h.createPayment({
							amount: Object(s.a)(c(), !0),
							currency: "USD",
							flow: "checkout",
							intent: "capture"
						})) : void 0,
						style: {
							height: 32
						},
						onApprove: async e => {
							h.tokenizePayment(e).then(e => {
								let {
									nonce: t
								} = e;
								return o(t)
							}).then(e => {
								e.ok ? p && p() : g(e.error, "/orders")
							})
						},
						onCancel: () => l && l(),
						onError: e => g(e, "paypalError")
					}).render("#".concat(a))
				} catch (h) {
					g(h, "paypalError")
				}
			}
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var s = r("./node_modules/react/index.js"),
				n = r.n(s);

			function i(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, n.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var s = r("./src/config.ts");
			const n = (e, t) => "".concat(s.a.assetPath, "/img/memberships/paywall/").concat(e.name.toLowerCase(), "/").concat(t)
		}
	}
]);
//# sourceMappingURL=SubredditPremiumPurchaseModal.af08b93d8e95096424e4.js.map