// https://www.redditstatic.com/desktop2x/MembershipPaywallPage.d387bd6e899b38560420.js
// Retrieved at 7/14/2020, 3:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MembershipPaywallPage"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var s = a("./src/lib/currency/cleanNumber/index.ts");

			function o(e, t) {
				const a = Object(s.a)(e),
					o = parseInt(a) / 100;
				return Math.floor(o) !== o || t ? o.toFixed(2) : String(o)
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "b", (function() {
				return o
			}));
			const s = e => {
					let t = 0,
						a = 0;
					const s = [0];
					for (const o of e) t++, a += o.length, s[t] = a;
					return s
				},
				o = e => {
					let t = 0,
						a = 0;
					const s = [];
					for (const o of e) {
						for (let e = 0; e < o.length; e++) s[a] = t, a++;
						t++
					}
					return s[a] = t, s
				}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, a) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/react/index.js"),
				r = a.n(o),
				i = a("./src/higherOrderComponents/asModal/index.tsx"),
				n = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = a("./src/reddit/controls/TextButton/index.tsx"),
				m = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = a("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				l = a.n(d);
			const p = e => e.preventDefault();
			t.a = Object(i.a)(e => r.a.createElement(n.d, null, r.a.createElement(n.h, null, r.a.createElement(m.a, null, r.a.createElement(n.p, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), r.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, r.a.createElement(n.b, null)))), r.a.createElement(n.k, null, r.a.createElement(n.o, {
				className: l.a.ModalText
			}, e.modalText)), r.a.createElement(n.f, null, r.a.createElement(n.a, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !0
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), r.a.createElement(n.t, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !0
			}, e.actionText))))
		},
		"./src/reddit/components/Economics/Price/index.m.less": function(e, t, a) {
			e.exports = {
				price: "_2ZOGQHalmPN89FqiioxqoW",
				token: "_2PNHBi0pHlP4y_f4W9yfPw"
			}
		},
		"./src/reddit/components/Economics/Price/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				o = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				i = a("./node_modules/reselect/es/index.js"),
				n = a("./src/lib/classNames/index.ts"),
				c = a("./src/lib/currency/centsToDollars/index.ts"),
				m = a("./src/lib/prettyPrintNumber/index.ts"),
				d = a("./src/reddit/components/Governance/Token/index.tsx"),
				l = a("./src/reddit/helpers/governance/tokens.ts"),
				p = a("./src/reddit/selectors/gov.ts"),
				u = a("./src/reddit/components/Economics/Price/strings.ts"),
				b = a("./src/reddit/components/Economics/Price/index.m.less"),
				h = a.n(b);
			const {
				fbt: g
			} = a("./node_modules/fbt/lib/FbtPublic.js"), f = e => {
				let {
					subredditId: t,
					pointPrice: a
				} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement(d.a, {
					className: h.a.token,
					subredditId: t
				}), a)
			}, _ = Object(i.c)({
				tokenDisplayConversion: p.o,
				tokenName: p.p
			});
			t.a = Object(r.b)(_)(e => {
				const {
					className: t,
					monthly: a,
					subredditId: s,
					tokenDisplayConversion: r,
					tokenName: i
				} = e, d = e.dollarPrice && "$".concat(Object(c.a)(e.dollarPrice, !0)), p = e.tokenPrice && Object(m.a)(Object(l.b)(e.tokenPrice, r)) + " " + i;
				if (!d && !p) return null;
				const b = a ? u.a.Monthly : u.a.Once;
				return o.a.createElement("span", {
					className: Object(n.a)(t, h.a.price)
				}, d && p ? g._("{dollar-price} or {point-price}", [g._param("dollar-price", Object(u.c)(d, b)), g._param("point-price", o.a.createElement(f, {
					subredditId: s,
					pointPrice: Object(u.c)(p, b)
				}))], {
					hk: "2Gif0l"
				}) : d ? Object(u.b)(d, b) : p ? Object(u.b)(p, b) : null)
			})
		},
		"./src/reddit/components/Economics/Price/strings.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "c", (function() {
				return r
			})), a.d(t, "b", (function() {
				return i
			}));
			var s, o = a("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(s || (s = {}));
			const r = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return o.fbt._("{price} /mo", [o.fbt._param("price", e)], {
								hk: "4CwhpC"
							});
						default:
							return e
					}
				},
				i = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return o.fbt._("{price} / month", [o.fbt._param("price", e)], {
								hk: "4ugXuk"
							});
						default:
							return e
					}
				}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less": function(e, t, a) {
			e.exports = {
				button: "_10ESw5cXwHBLWInQHjwYH2",
				container: "_1sfIwxqWpDotVXLjKV_2jO",
				loading: "_18AJBQlrwo3obCZczqf9Is",
				loadingIcon: "_3A8u5o0uPgpbYt-dE4XZiC",
				submitting: "_167697f4GfaciFsGrMXP-w"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				o = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				i = a("./src/lib/classNames/index.ts"),
				n = a("./src/reddit/actions/governance/errorToast.ts"),
				c = a("./src/reddit/components/TrackingHelper/index.tsx"),
				m = a("./src/reddit/contexts/ApiContext.tsx"),
				d = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = a("./src/reddit/endpoints/governance/products/badges.ts"),
				p = a("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				u = a("./src/reddit/selectors/telemetry.ts"),
				b = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less"),
				h = a.n(b);
			const g = "subreddit-premium-purchase-braintree";
			class f extends o.a.Component {
				constructor() {
					super(...arguments), this.mounted = !1, this.state = {
						loading: !0,
						submitting: !1
					}, this.getId = () => g + this.props.productId
				}
				componentDidMount() {
					if (this.mounted = !0, this.props.subreddit) {
						const e = this.props.apiContext(),
							t = this.props.subreddit.id;
						Object(p.a)({
							apiContext: e,
							config: {
								type: "purchase"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: a => Object(l.d)(e, {
								nonce: a,
								subredditId: t,
								price: this.props.price,
								products: [{
									productId: this.props.productId,
									quantity: "1"
								}]
							}),
							onCancel: () => this.mounted && this.setState({
								submitting: !1
							}),
							onClientLoad: () => this.mounted && this.setState({
								loading: !1
							}),
							onError: e => {
								this.mounted && (this.setState({
									submitting: !1
								}), this.props.onError(e), console.error(e))
							},
							onSubmitting: () => {
								this.mounted && this.setState({
									submitting: !0
								}), this.props.sendEvent(e => Object.assign({
									source: "meta",
									action: "click",
									noun: "badge_gallery_paypal_purchase",
									correlationId: this.props.correlationId
								}, u.defaults(e), {
									subreddit: u.subreddit(e)
								}))
							},
							onSuccess: () => this.props.onPaymentSuccessful()
						})
					}
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				render() {
					return o.a.createElement("div", {
						className: Object(i.a)(this.props.className, h.a.container)
					}, o.a.createElement("div", {
						className: Object(i.a)(h.a.button, {
							[h.a.loading]: this.state.loading,
							[h.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && o.a.createElement(d.a, {
						className: h.a.loadingIcon,
						sizePx: 16
					}))
				}
			}
			t.a = Object(m.b)(Object(r.b)(void 0, (e, t) => {
				let {
					subreddit: a
				} = t;
				return {
					onError: t => Object(n.a)(e, t)
				}
			})(Object(c.c)(f)))
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/higherOrderComponents/makeAsync.tsx");
			const o = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => a.e("SubredditPremiumBlockchainCheckoutModal").then(a.bind(null, "./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.tsx")).then(e => e.default)
			});
			t.a = o
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Cart/index.m.less": function(e, t, a) {
			e.exports = {
				container: "i0lchXJA5Dup_Op8k_UvG",
				description: "RyMUILAlWHIP5yHrsIRUK",
				rhs: "_2Byh-FeUhk5NLLqInuciri",
				monthlyText: "_1UJ2XLb7zAyZJm2IG70b8O"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Footer/index.m.less": function(e, t, a) {
			e.exports = {
				container: "yQcP2nhhN4KlRXQL7Yyat",
				link: "JFz_onNhRvDkA39DMDGLr",
				linkLast: "_2tWZsJd91sgL5Q3C1vHdWm"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Header/index.m.less": function(e, t, a) {
			e.exports = {
				close: "_36KvgN4Tgsg1mjKKUnMkcE",
				container: "_19sRWT77cnRhheoNPG1ZE6",
				text: "z7BZWyDlEY5SQkMiUwNSS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/index.m.less": function(e, t, a) {
			e.exports = {
				requiresMobile: "_1W-SUlHSYUhCTSrV3ZsOeJ",
				selectPaymentBox: "_1NpPjn9SLo_z__HXuYSQYf",
				selectPaymentTitleBox: "g_agLLmnc-Z1voaKrEx_n",
				selectPaymentTitle: "_3PrvKB6dbwtJlsf2wNE6X",
				paymentContainer: "_2C6O-Mg9CPpXYZJkAlmkYO",
				paymentAmount: "_2i5oESQxrhg5L2yj6yUeuO",
				tokenPurchase: "_2-2nbzwdCx50Yxx3AXJUCY",
				token: "_3IsFHSaHpAk_G3z-ncqt9G",
				tokenPurchaseButton: "tTJPkeFQiDABhAoE46jBQ",
				dollarPurchase: "_10je0H39zRuRzLWsSeGecr"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Products/index.m.less": function(e, t, a) {
			e.exports = {
				badgeImage: "_24nb1Wn-HQrlcIMVXggPWP",
				crown: "_1C6OFdtgaIgK_TyogeJOgp"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/index.m.less": function(e, t, a) {
			e.exports = {
				cart: "PxUAb5u5curFoJmkN43pD",
				container: "_1rguiWal__5IcFoZwSe0rS",
				content: "_1bK-Mw7EE5ZnMei8Kub2Kk",
				footer: "_3GBKrS5u4-TjVoWpDmlXC-",
				payment: "wW8kQRKEVGkGiLaRVyxmA"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Footer/PurchaseButton/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Footer/PurchaseButton/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/react/index.js"),
				r = a.n(o),
				i = a("./node_modules/react-redux/es/index.js"),
				n = a("./node_modules/react-router-redux/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				m = a("./src/lib/currency/centsToDollars/index.ts"),
				d = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				l = a("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				p = a("./src/reddit/actions/governance/errorToast.ts"),
				u = a("./src/reddit/actions/shortcuts/close.ts"),
				b = a("./src/reddit/components/TrackingHelper/index.tsx"),
				h = a("./src/reddit/contexts/ApiContext.tsx"),
				g = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				f = a("./src/reddit/endpoints/economics/specialMembership.ts"),
				_ = a("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				y = a("./src/reddit/models/Badge/managementPage.ts"),
				x = a("./src/reddit/selectors/economics.ts"),
				k = a("./src/reddit/selectors/telemetry.ts"),
				E = a("./src/reddit/selectors/user.ts"),
				w = a("./node_modules/reselect/es/index.js"),
				j = a("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Footer/PurchaseButton/index.m.less"),
				v = a.n(j);
			const C = "subreddit-premium-purchase-braintree",
				N = (e, t, a) => s.fbt._("{communityName} {membershipAlt}. ${price}/month, automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months.", [s.fbt._param("communityName", e.displayText), s.fbt._param("membershipAlt", a.membershipAlt), s.fbt._param("price", Object(m.a)(t, !0))], {
					hk: "3q2JqJ"
				});
			class P extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						loading: !0,
						submitting: !1
					}, this.alreadyPurchased = () => this.props.userIsPremiumSubscriber === x.a.Subscribed, this.getId = () => C + (this.props.uniqueId || "")
				}
				componentDidMount() {
					if (!this.alreadyPurchased()) {
						const e = this.props.membershipProducts.find(e => "usd" === e.currency);
						Object(_.a)({
							apiContext: this.props.apiContext(),
							config: {
								billingAgreement: N(this.props.subreddit, this.props.price, this.props.meta),
								type: "subscription"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: t => Object(f.c)(this.props.apiContext(), {
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
							onClientLoad: () => this.setState({
								loading: !1
							}),
							onError: (e, t, a) => {
								this.setState({
									submitting: !1
								}), this.props.onError(e), this.props.sendEvent(e => {
									const s = k.defaults(e);
									return Object.assign({
										source: "meta",
										action: "fail",
										noun: "subscription_paypal_purchase"
									}, s, {
										actionInfo: {
											reason: t,
											paneName: a
										},
										correlationId: this.props.correlationId,
										subreddit: k.subreddit(e)
									})
								})
							},
							onSubmitting: () => {
								this.setState({
									submitting: !0
								}), this.props.sendEvent(e => Object.assign({
									source: "meta",
									action: "click",
									noun: "subscription_paypal_purchase",
									correlationId: this.props.correlationId
								}, k.defaults(e), {
									subreddit: k.subreddit(e)
								}))
							},
							onSuccess: () => this.props.onPaymentSuccessful(this.props.isLoggedIn)
						})
					}
				}
				render() {
					return r.a.createElement("div", {
						className: Object(c.a)(this.props.className, v.a.container)
					}, this.alreadyPurchased() ? r.a.createElement("div", {
						className: v.a.alreadyPurchased
					}, s.fbt._("Already Purchased", null, {
						hk: "2h3Eug"
					})) : r.a.createElement(o.Fragment, null, r.a.createElement("div", {
						className: Object(c.a)(v.a.button, {
							[v.a.buttonWithoutCards]: !this.props.showCards,
							[v.a.loading]: this.state.loading,
							[v.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && r.a.createElement(g.a, {
						className: v.a.loadingIcon,
						sizePx: 24
					})))
				}
			}
			const O = Object(w.c)({
				isLoggedIn: E.H,
				membershipProducts: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(x.l)(e, a.id)
				},
				meta: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(x.s)(e, a.id)
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(x.x)(e, a.id)
				}
			});
			t.a = Object(h.b)(Object(i.b)(O, (e, t) => {
				let {
					subreddit: a,
					onComplete: s
				} = t;
				return {
					onError: t => Object(p.a)(e, t),
					onPaymentSuccessful: t => {
						t ? e(Object(l.f)(a.id, !0)).then(() => e(Object(u.a)(() => {}))).then(() => s && s()).then(() => e(Object(d.c)({
							subredditId: a.id,
							initialView: y.c.MyBadges
						}))) : e(Object(n.b)(a.url))
					}
				}
			})(Object(b.c)(P)))
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return u
			}));
			var s = a("./node_modules/react/index.js"),
				o = a.n(s),
				r = a("./src/lib/classNames/index.ts");

			function i(e) {
				return o.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, o.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
			var n = a("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				c = a("./src/reddit/icons/svgs/Crown/index.tsx"),
				m = a("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				d = a("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less"),
				l = a.n(d);
			const p = {
				regular: {
					bling1: l.a.bling1,
					bling2: l.a.bling2,
					bling3: l.a.bling3,
					container: l.a.container,
					crown: l.a.crown,
					crownImg: l.a.crownImg,
					defaultIcon: l.a.defaultIcon,
					icon: l.a.icon
				},
				large: {
					bling1: l.a.largeBling1,
					bling2: l.a.largeBling2,
					bling3: l.a.largeBling3,
					container: l.a.largeContainer,
					crown: l.a.largeCrown,
					crownImg: l.a.largeCrownImg,
					defaultIcon: l.a.largeDefaultIcon,
					icon: l.a.largeIcon
				}
			};

			function u(e) {
				const t = e.subreddit && (e.subreddit.communityIcon || e.subreddit.icon.url),
					a = p[e.size || "regular"],
					s = e.subreddit && e.subreddit.primaryColor;
				return o.a.createElement("div", {
					className: Object(r.a)(a.container, e.className)
				}, e.subreddit ? o.a.createElement("img", {
					className: a.crownImg,
					src: Object(m.a)(e.subreddit, "Crown.gif")
				}) : o.a.createElement(c.a, {
					className: a.crown
				}), o.a.createElement(i, {
					className: a.bling1
				}), o.a.createElement(i, {
					className: a.bling2
				}), o.a.createElement(i, {
					className: a.bling3
				}), t ? o.a.createElement("img", {
					className: a.icon,
					src: t,
					style: {
						backgroundColor: s
					}
				}) : o.a.createElement(n.a, {
					className: a.defaultIcon,
					style: {
						backgroundColor: s
					}
				}))
			}
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, a) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				o = a.n(s),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/lessComponent.tsx"),
				n = a("./src/reddit/components/FocusableContent/index.m.less"),
				c = a.n(n);
			t.a = i.a.wrapped(e => o.a.createElement("div", {
				className: Object(r.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/async.ts": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-SubscriptionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!a.m[t]
				},
				importAsync: () => Promise.all([a.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~851e9c33"), a.e("reddit-components-Governance-TransactionModals-SubscriptionModal")]).then(a.bind(null, "./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return a(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = o
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less": function(e, t, a) {
			e.exports = {
				tooltip: "_1JSANMHgGMP6_AEag7vq9O",
				header: "_1DAEUoftIympbgPi2umo-0",
				searchBox: "_2cff2GfGaP3QtjxGdlpv_z",
				closeIcon: "_3VwbhXXLp1dcUFkxf8wMsc",
				body: "_2qdvF-IdzElbEEbTBTqXLE",
				results: "_3NbyQMXVxyVAMWNcjMkFvi",
				gifResult: "_26ADnJjpUFVQyc9EaxOU1n",
				gifResultImage: "FdCn2CuFBj91lgTaeY2bA",
				loadingSpinner: "_2t2HXTe1t9BdNxOjV-5WUX",
				whiteScrim: "_2pFa7VPAwUqzCAZMKMhkl9"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				o = a("./node_modules/lodash/memoize.js"),
				r = a.n(o),
				i = a("./node_modules/lodash/throttle.js"),
				n = a.n(i),
				c = a("./node_modules/react/index.js"),
				m = a.n(c),
				d = a("./node_modules/react-redux/es/index.js"),
				l = a("./node_modules/reselect/es/index.js"),
				p = a("./src/reddit/actions/toaster.ts"),
				u = a("./src/reddit/components/TrackingHelper/index.tsx"),
				b = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = a("./src/config.ts"),
				g = a("./src/lib/addQueryParams/index.ts");
			const f = "pg";

			function _(e) {
				return e.json().then(e => {
					if (200 !== e.meta.status) throw new Error("".concat(e.meta.status, " ").concat(e.meta.msg));
					return e
				})
			}
			var y = a("./src/reddit/icons/svgs/Close/index.tsx"),
				x = a("./src/reddit/models/Toast/index.ts"),
				k = a("./src/reddit/selectors/economics.ts"),
				E = a("./src/reddit/selectors/telemetry.ts"),
				w = a("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				j = a("./src/reddit/components/RichTextEditor/media/helpers.ts");
			a("./node_modules/core-js/modules/es6.regexp.split.js");
			let v;

			function C() {
				v || (v = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var N = a("./node_modules/lodash/debounce.js"),
				P = a.n(N),
				O = a("./src/lib/classNames/index.ts"),
				I = a("./src/reddit/icons/svgs/Search/index.tsx"),
				S = a("./src/reddit/selectors/user.ts"),
				M = a("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				T = a.n(M);
			const L = 400;
			class B extends m.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = P()(() => {
						this.props.onChange(this.state.query)
					}, L), this.focusOnInput = () => {
						this.elementRef && !1 !== this.props.autofocus && this.elementRef.focus()
					}
				}
				componentDidMount() {
					this.elementRef && !1 !== this.props.autofocus && this.elementRef.focus()
				}
				render() {
					const {
						isNightMode: e
					} = this.props, {
						query: t
					} = this.state, a = "powered-by-giphy-".concat(e ? "dark" : "light", ".png");
					return m.a.createElement("div", {
						className: Object(O.a)(T.a.searchBox, this.props.className)
					}, m.a.createElement("button", {
						className: T.a.searchIconButton,
						onClick: this.focusOnInput
					}, m.a.createElement(I.a, {
						className: T.a.searchIcon
					})), m.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: T.a.searchInput,
						placeholder: s.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && m.a.createElement("div", {
						className: T.a.poweredByGiphy,
						style: {
							backgroundImage: "url(".concat(h.a.assetPath, "/img/memberships/").concat(a)
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const A = Object(l.c)({
				isNightMode: S.S
			});
			var z = Object(d.b)(A)(B),
				R = a("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				F = a.n(R);
			const G = 4,
				D = r()((function() {
					const e = Object(g.a)("https://api.giphy.com/v1/gifs/trending", {
						api_key: h.a.giphyApiKey,
						rating: f
					});
					return fetch(e).then(_)
				}));
			class W extends m.a.Component {
				constructor() {
					super(...arguments), this.state = {
						columns: [
							[],
							[]
						],
						columnHeights: [0, 0],
						loading: !0,
						nextOffset: null,
						query: ""
					}, this.onQueryChange = e => {
						this.props.sendEvent(t => Object.assign({
							source: "meta",
							action: "change",
							noun: "gif_tooltip_search",
							correlationId: this.props.correlationId,
							subreddit: this.props.subreddit.id ? E.subredditById(t, this.props.subreddit.id) : void 0,
							post: E.currentPost(t),
							search: {
								query: e
							}
						}, E.defaults(t))), this.setState({
							loading: !1,
							columns: [
								[],
								[]
							],
							columnHeights: [0, 0],
							query: e,
							nextOffset: 0
						}, () => this.loadMoreResults())
					}, this.onScroll = e => this.maybeLoadMoreResults(e.target), this.maybeLoadMoreResults = n()(e => {
						e.scrollHeight - e.scrollTop === e.clientHeight && this.loadMoreResults()
					}, 300), this.onResultClick = e => {
						this.props.sendEvent(e => {
							const t = E.defaults(e);
							return Object.assign({}, t, {
								source: "meta",
								action: "select",
								noun: "gif_tooltip_result",
								correlationId: this.props.correlationId,
								subreddit: this.props.subreddit.id ? E.subredditById(e, this.props.subreddit.id) : void 0,
								post: E.currentPost(e),
								actionInfo: Object.assign({}, t.actionInfo, {
									reason: this.props.hasGifProduct ? "has-gif-product" : "gif-train"
								})
							})
						});
						const t = this.props.editorState,
							a = Object(j.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), w.a.after);
						this.props.onChange(a), this.props.onClose()
					}
				}
				componentDidMount() {
					!this.state.query && this.state.loading && this.loadTrendingGifs(), C()
				}
				loadTrendingGifs() {
					D().then(e => {
						this.state.query || this.addGiphyResults(e)
					})
				}
				async loadMoreResults() {
					const {
						loading: e,
						nextOffset: t,
						query: a
					} = this.state;
					!e && a && null !== t && (await
						function(e) {
							return C(), v.then(t => {
								return !!e.split(" ").concat(e).find(e => -1 !== t.indexOf(e.toLowerCase()))
							}).catch(() => !1)
						}(a) || (this.setState({
							loading: !0
						}), function(e) {
							const t = Object(g.a)("https://api.giphy.com/v1/gifs/search", {
								api_key: h.a.giphyApiKey,
								q: e.query,
								offset: e.offset || 0,
								rating: e.rating || f
							});
							return fetch(t).then(_)
						}({
							query: a,
							offset: t
						}).then(e => {
							this.addGiphyResults(e)
						}).catch(() => {
							this.props.showErrorToast(s.fbt._("There was an error loading your GIF results. Please try again later.", null, {
								hk: "2OpI4a"
							})), this.setState({
								loading: !1
							})
						})))
				}
				addGiphyResults(e) {
					const t = [...this.state.columns],
						a = [...this.state.columnHeights];
					e.data.forEach(e => {
						if ("gif" !== e.type || "r" === e.rating || "pg-13" === e.rating) return;
						const s = this.getSimplifiedResult(e),
							o = a.reduce((e, t, s) => t < a[e] ? s : e, 0);
						t[o].push(s), a[o] += s.fixedWidthHeight + G
					});
					const s = e.pagination.offset + e.pagination.count;
					this.setState({
						columns: t,
						columnHeights: a,
						loading: !1,
						nextOffset: s < e.pagination.total_count ? s : null
					})
				}
				getSimplifiedResult(e) {
					const t = parseInt(e.images.fixed_width.height),
						a = e.images.downsized && e.images.downsized.url.indexOf("giphy-downsized.gif") > 0,
						s = a ? e.images.downsized : e.images.fixed_height;
					return {
						id: e.id,
						url: s.url,
						hasDownsizedImage: a,
						width: parseInt(s.width),
						height: parseInt(s.height),
						fixedWidthHeight: t
					}
				}
				render() {
					const {
						columns: e,
						loading: t
					} = this.state;
					return m.a.createElement("div", {
						className: F.a.tooltip
					}, m.a.createElement("div", {
						className: F.a.header
					}, m.a.createElement(z, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: F.a.searchBox
					}), m.a.createElement(y.a, {
						className: F.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					})), m.a.createElement("div", {
						className: F.a.body,
						onScroll: this.onScroll
					}, m.a.createElement("div", {
						className: F.a.results
					}, e.map((e, t) => m.a.createElement("div", {
						className: F.a.column,
						key: t
					}, e.map(e => m.a.createElement("button", {
						className: F.a.gifResult,
						key: e.url,
						onClick: () => this.onResultClick(e),
						style: {
							height: "".concat(e.fixedWidthHeight, "px")
						}
					}, m.a.createElement("img", {
						className: F.a.gifResultImage,
						src: e.url
					})))))), t && m.a.createElement("div", {
						className: F.a.loadingSpinner
					}, m.a.createElement(b.a, {
						sizePx: 20,
						center: !0
					})), m.a.createElement("div", {
						className: F.a.whiteScrim
					})))
				}
			}
			const H = Object(l.c)({
				hasGifProduct: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(k.w)(e, a.id)
				}
			});
			t.a = Object(u.c)(Object(d.b)(H, e => ({
				showErrorToast: t => e(Object(p.e)({
					text: t,
					kind: x.b.Error,
					duration: 5e3
				}))
			}))(W))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less": function(e, t, a) {
			e.exports = {
				searchBox: "_-2nyH4l01LGXG6tNoKG8G",
				searchIconButton: "yQXSQNUp_yRjNBBUQPSFc",
				searchIcon: "_2gnFB-wGJHoP0-cUWBWnU5",
				searchInput: "_3MrGxIAeUWB6Fc14Qw0jb2",
				poweredByGiphy: "_3zbeeNQTcpxZMmdsMopEux"
			}
		},
		"./src/reddit/components/ScrollAnimation/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return b
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/lodash/clamp.js"),
				o = a.n(s),
				r = a("./node_modules/lodash/throttle.js"),
				i = a.n(r),
				n = a("./node_modules/react/index.js"),
				c = a.n(n),
				m = a("./src/lib/fastdom/index.ts"),
				d = a("./src/reddit/components/Scroller/getDocumentTop.ts"),
				l = a("./src/reddit/components/Scroller/Simple.tsx");
			const p = (() => {
					const e = new Map,
						t = {
							get: t => e.get(t) || [],
							add: (a, s) => {
								const o = t.get(a);
								return e.set(a, o.concat(s)), t
							},
							remove: (a, s) => {
								const o = t.get(a);
								return e.set(a, o.filter(e => e !== s)), t
							}
						};
					return t
				})(),
				u = (() => {
					const e = e => i()(() => {
							m.a.read(() => {
								const t = (e => Object(l.a)(e) ? Object(d.a)() : e.scrollTop)(e);
								p.get(e).forEach(e => e(t))
							})
						}, 16),
						t = new Map;
					return {
						on: (a, s) => {
							if (!p.get(a).length) {
								const s = e(a);
								t.set(a, s), a.addEventListener("scroll", s)
							}
							p.add(a, s)
						},
						off: (e, a) => {
							if (p.remove(e, a), !p.get(e).length) {
								const a = t.get(e);
								a && e.removeEventListener("scroll", a)
							}
						}
					}
				})();
			class b extends c.a.Component {
				constructor(e) {
					super(e), this.getContainer = () => this.props.containerRef || document.getElementById("overlayScrollContainer") || document, this.updateScrollPosition = e => this.setState(t => {
						const a = this.props.scrollRange[0],
							s = this.props.scrollRange[1],
							r = o()(e, a, s),
							i = Math.min(Math.floor((r - a) / (s - a) * 1e3), 999);
						return Object.assign({}, t, {
							styles: Object.assign({}, t.styles, {
								animationDelay: "-".concat(i, "s")
							})
						})
					}), this.state = {
						styles: {
							animationDelay: "0s",
							animationDuration: "1000s",
							animationPlayState: "paused",
							backfaceVisibility: "hidden"
						}
					}
				}
				shouldComponentUpdate(e, t) {
					return this.state.styles.animationDelay !== t.styles.animationDelay
				}
				componentDidMount() {
					u.on(this.getContainer(), this.updateScrollPosition)
				}
				componentWillUnmount() {
					u.off(this.getContainer(), this.updateScrollPosition)
				}
				render() {
					return this.props.children(this.state.styles)
				}
			}
		},
		"./src/reddit/constants/disclaimers.ts": function(e, t, a) {
			"use strict";
			var s;
			a.d(t, "b", (function() {
					return s
				})), a.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.ORIGINAL_CONTENT_DISCLAIMER = "original_content_disclaimer"
				}(s || (s = {}));
			const o = "https://www.redditinc.com/policies/beta-terms-of-service"
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/lib/lessComponent.tsx"),
				o = a("./src/reddit/controls/Input/index.m.less"),
				r = a.n(o);
			t.a = s.a.input("input", r.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return m
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var s = a("./node_modules/react/index.js"),
				o = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				i = a("./node_modules/reselect/es/index.js"),
				n = a("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var a = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (a[s[o]] = e[s[o]])
					}
					return a
				};

			function m(e, t, a) {
				const s = Object(i.c)({
					featureEnabled: t => n.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s
					} = e, r = c(e, ["featureEnabled"]);
					return s ? o.a.createElement(t, r) : void 0 !== a ? o.a.createElement(a, r) : null
				})
			}
		},
		"./src/reddit/helpers/economics/setupSubredditPremiumButton.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return i
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = a("./src/lib/currency/centsToDollars/index.ts"),
				o = a("./src/reddit/endpoints/economics/specialMembership.ts"),
				r = a("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function i(e) {
				let {
					apiContext: t,
					config: a,
					elementId: i,
					price: n,
					purchaseFn: c,
					username: m,
					onCancel: d,
					onClientLoad: l,
					onError: p,
					onSubmitting: u,
					onSuccess: b
				} = e;
				const h = (e, t) => {
					if (!p) return;
					let a = e.toString ? e.toString() : "";
					a.toLowerCase().includes("object object") && (a = JSON.stringify(e)), p(e, a, t)
				};
				try {
					const [e] = await Promise.all([Object(o.b)(t, {
						username: m
					}), Object(r.b)()]);
					if (!e.ok) return void h(e.error, "/ps/me/braintree-client-tokens");
					const p = await braintree.client.create({
							authorization: e.body.clientToken
						}),
						g = await new Promise((e, t) => {
							braintree.paypalCheckout.create({
								client: p
							}, (a, s) => a ? t(a) : e(s))
						});
					l && l(), await paypal.Buttons({
						createBillingAgreement: "subscription" === a.type ? () => (u && u(), g.createPayment({
							amount: Object(s.a)(n(), !0),
							billingAgreementDescription: a.billingAgreement,
							currency: "USD",
							flow: "vault"
						})) : void 0,
						createOrder: "purchase" === a.type ? () => (u && u(), g.createPayment({
							amount: Object(s.a)(n(), !0),
							currency: "USD",
							flow: "checkout",
							intent: "capture"
						})) : void 0,
						style: {
							height: 32
						},
						onApprove: async e => {
							g.tokenizePayment(e).then(e => {
								let {
									nonce: t
								} = e;
								return c(t)
							}).then(e => {
								e.ok ? b && b() : h(e.error, "/orders")
							})
						},
						onCancel: () => d && d(),
						onError: e => h(e, "paypalError")
					}).render("#".concat(i))
				} catch (g) {
					h(g, "paypalError")
				}
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				o = a.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./node_modules/react/index.js"),
				o = a.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, o.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Gif/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				o = a.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.78413 14.5651C4.76663 14.6972 6.07763 14.7 8 14.7C9.92237 14.7 11.2334 14.6972 12.2159 14.5651C13.161 14.4381 13.6052 14.2132 13.9092 13.9092C14.2132 13.6052 14.4381 13.161 14.5651 12.2159C14.6972 11.2334 14.7 9.92237 14.7 8C14.7 6.07763 14.6972 4.76663 14.5651 3.78413C14.4381 2.83903 14.2132 2.3948 13.9092 2.09081C13.6052 1.78682 13.161 1.56192 12.2159 1.43485C11.2334 1.30276 9.92237 1.3 8 1.3C6.07763 1.3 4.76663 1.30276 3.78413 1.43485C2.83903 1.56192 2.3948 1.78682 2.09081 2.09081C1.78682 2.3948 1.56192 2.83903 1.43485 3.78413C1.30276 4.76663 1.3 6.07763 1.3 8C1.3 9.92237 1.30276 11.2334 1.43485 12.2159C1.56192 13.161 1.78682 13.6052 2.09081 13.9092C2.3948 14.2132 2.83903 14.4381 3.78413 14.5651ZM1.17157 1.17157C0 2.34315 0 4.22876 0 8C0 11.7712 0 13.6569 1.17157 14.8284C2.34315 16 4.22876 16 8 16C11.7712 16 13.6569 16 14.8284 14.8284C16 13.6569 16 11.7712 16 8C16 4.22876 16 2.34315 14.8284 1.17157C13.6569 0 11.7712 0 8 0C4.22876 0 2.34315 0 1.17157 1.17157Z"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M6.76197 6.36433L6.03894 7.11365C5.7183 6.79814 5.32849 6.7127 5.03299 6.7127C4.31625 6.7127 3.851 7.15966 3.851 8.06015C3.851 8.65172 4.1465 9.38132 5.03299 9.38132C5.26562 9.38132 5.63028 9.33531 5.88177 9.1447V8.55313H4.76893V7.53432H6.91915V9.57851C6.64252 10.1635 5.87548 10.479 5.02671 10.479C3.28515 10.479 2.625 9.26301 2.625 8.06015C2.625 6.8573 3.37946 5.62158 5.03299 5.62158C5.64285 5.62158 6.18355 5.75304 6.76197 6.36433ZM9.02735 10.3541H7.78877V5.75304H9.02735V10.3541ZM11.3179 10.3541H10.0856V5.75304H13.4618V6.84415H11.3179V7.70521H13.3298V8.77004H11.3179V10.3541Z"
			}))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				o = a.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		},
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./node_modules/react/index.js"),
				o = a.n(s);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 48 48",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M24.75 0L23.25 0L23.25 22.188L7.56083 6.49881L6.50017 7.55947L22.1907 23.25L0 23.25L0 24.75L22.1895 24.75L6.49882 40.4406L7.55948 41.5013L23.25 25.8108L23.25 48H24.75L24.75 25.8093L40.4413 41.5006L41.502 40.4399L25.812 24.75L48 24.75V23.25L25.8108 23.25L41.5006 7.56017L40.4399 6.49951L24.75 22.1895L24.75 0Z"
				}))
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/GifsInComments/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2-l6ribaRonbtSW75Gasf0",
				content: "_1srXRbc3nZWtSzBgnpnL_i",
				contentWithAnimations: "_21xriDWSn5JufF5Ekd1gSc",
				description: "hyrd27wCOJAubXZdIlL32",
				editor: "_3I0PTRXDvcBpNb8jWuUyUG",
				header: "_2C94P12gq8mJVaX0TcU7dL",
				placeholder: "_2d56cUgtXAGXFex1uty3cI",
				rescuerArm: "_1ZEtFYO1X6aWZdPcCe2ttO",
				rescuerArmAnim: "_2-P9VRynrNI62N9mCe1u4d",
				rescuerLegs: "_2HraV_m_H-QwWhbQnD9Cz6",
				rescuerTorso: "_2c2f1ooqNUBpLo1uIWW6tH",
				rescuerTorsoAnim: "vxBZ9o4bMSIgMqp3fseuE",
				title: "_3secE0kPGmuLrOVyxVx1GA",
				try: "_1ADbqtvk_G65FSX32JzrcL",
				woundedBody: "_2Si7gMwaA06iDQ_kRarDqY",
				woundedHead: "_3DDo4KqBgySMOC_Ww-1qdG",
				woundedHeadAnim: "_1N5LrnEH9GrlA-GpoezYhW"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/PremiumEmojis/index.m.less": function(e, t, a) {
			e.exports = {
				allEmojis: "HG4dDjMfFuWUSYTGVXhMU",
				container: "RC2xHmTH_JNAkCq6WHC9h",
				description: "_1ppYpsFus4teqxajezMsMh",
				editor: "CGHRb1ni7ssn9emGnp91k",
				emoji: "_3IhZf0fX3bLjxp2dTgB-Ra",
				grid: "pvztHne0yQOObYrBKLY69",
				gridRow: "_3TnUGDi_f-XCYmowBOJU2s",
				label: "_2FNQpv7k818wfbBh8VQL2-",
				notExpanded: "_4RMAFwSRMekhv09HXXakA",
				showAll: "_2eZueoS--NXBSyBJOIfgcr",
				title: "_1bpLacIFGWJ8JkkGxrnrGT",
				try: "_1f_K9FCPGCYC70UIP2jl2d"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Section/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2LSDJwqkgAC_kQQasHOjPk",
				description: "_2YClVh2zG7h7CsqutaXLDp",
				footer: "_2ZVIecJ7nJjliaBCCnkY-V",
				item: "_2Y0GV0pc08he0bt-mi1gBw",
				itemIcon: "_1jZozMikgXQl3J5ZR9Bowc",
				itemText: "_3m1z1cy4WLpG9x-c7ZKDRg",
				progressBar: "_2Bm3-gyqaRXODIyupyiR9p",
				progressThumb: "_252EINQq4NecY9FXde1_BL",
				thumbAnim: "_28vMO4XWazB3x_FtmRmI16",
				row: "_2TlTmUR7lwqJ8NdZ44nc0s",
				title: "_1jXGFjJzrxDrx2uEQ7DVGF"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/StyleBadges/index.m.less": function(e, t, a) {
			e.exports = {
				badges: "_2EuRRmMUWWyy7ogKc7Uk04",
				smallCollection: "YFanJRu2wCTOQnSbFeFNP",
				badge: "_1StKp1mVYflPieZ-i8t7hm",
				container: "_5ebhVgUCgAnviJ3yM5f5P",
				description: "_3boBqqaewJ06LTZzbndHOP",
				title: "_1qsPjy39LQmn3Zi1AJNHVw",
				userBadge: "_1rAadAD8jFTPpPYGE4O2KV",
				username: "ZHvw3R0mA0Z_POQA7C-fH"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/EmoteTooltip/index.m.less": function(e, t, a) {
			e.exports = {
				close: "_1bD6JH8044LKrlz_zdTgI3",
				container: "_2FOZEUas3_NcjRCr3pGJaS",
				emojis: "_1KMwjC2r2sDXYeRjPLIi10",
				emojisList: "-kODe_q_ldi5_iTr9YTt6",
				emojisTitle: "_18QLrz0EuHzN8WoKNxxNQZ",
				emoji: "_1gTq0B8KGAeQgQblpgpMeo",
				emojiImage: "_1IqEytrE4EZ9iWb4c2mbOy",
				header: "_2jLyIa4O4D4lFe611izptl",
				triangle: "q28fzf8zZ2we3AYEI4sQ9"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/GifTooltip/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3LOD-WBOJ9TpEyuc_B0ryn",
				triangle: "_1-MWtksm2FqJxQc5lgUR37"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/index.m.less": function(e, t, a) {
			e.exports = {
				clickable: "_1cIOwGYV7I6vRxR6VmcewC",
				container: "_1x-TPX4TlndlrlqtojxI_H",
				content: "_2jv3EecOzF1wGDs4vJOriM",
				divider: "_3Ex0jTlV_A1JodZqIMsW5p",
				emoteIcon: "pwYYQmeZ8lTJMnSoQo0p1",
				emoteTooltip: "_3akhTTOuCVBcrEqolKvRls",
				gifTooltip: "_3s2CuSDpWDyvPJ6Gt6Nj4G",
				icon: "_2uk7le_A4DDUujQsq5R9p7",
				iconWrapper: "_3feJdn9uZdxTH6Pv28CrZ",
				gifIcon: "_2HXCGD6es_ViR4WvLnbc8j",
				open: "_1Rdtpma2YsPYyx-U9wRqqm",
				reply: "_1X_DcLaCboOSh3oT5QufeS"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/index.m.less": function(e, t, a) {
			e.exports = {
				badges: "_3dLCMB5QHPH0h_IKJlzts6",
				container: "_350NODM4qoI4IWEdgYX72M",
				section: "_31RNbxj_vN1iFg9OmOca54",
				title: "_2cQgklnR9ee890dlKP9sU0"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/FAQ/index.m.less": function(e, t, a) {
			e.exports = {
				arrow: "_3abXs_nHum1aZplxsmmWzb",
				arrowClose: "tHOmoRSJOtYUm0uVRXgwl",
				answer: "_34hVWdyAQOxWX6BtNCcH8T",
				container: "_Vx2QRz8UfHjBWVoj_Se9",
				question: "_1wjtRGwmsLRNQTLlMQzpmb",
				row: "_2YVdCJXV4SjN6MUB5Rx_74",
				section: "_25TwHcxz9B42W4GN7kq74J",
				title: "_3dgNvvjG7x_Kdt683SlDdq"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Footer/index.m.less": function(e, t, a) {
			e.exports = {
				copyright: "hHWq9R1kIKuwnmc-c5_nk",
				container: "yoxsTxUwnTIle9hv_5263",
				link: "QZ5kdeF0RpMihWpwGlwcY",
				pianoCrowdBottom: "_60ASzFhqU01fDD4qtUcm_",
				pianoCrowdBottomAnim: "_3yD0KGwT271BI6NStk_RWB",
				pianoCrowdTop: "_2s-R5ZEfjQcJelam9p4iM0",
				pianoCrowdTopAnim: "PdK2oK6NIHwAGk1c7oRdu",
				pianoFlier: "__DEPnJK2lFSwsgi-pMVd",
				pianoFlierAnim: "_1lHRA-kn6n4ztvvD2Eodn0",
				pianoKeyboard: "_3sZ5OukRkPEltd5Z7q_qFa",
				twoCol: "_1lkCEde-Tj5sw9fJ5jrTMQ"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Intro/index.m.less": function(e, t, a) {
			e.exports = {
				container: "jqZKJLgYB2mddEx5Lx_Td",
				description: "_2cJn3yPQq4OXma6qLydghV",
				logo: "qctFKbJQXhfktlUhf0uUW",
				radialHighlight: "_19cOm1T7aKMGtb4_WimwFn",
				radialHighlightOuter: "_1gMg7MP9wN6WZiDvF_maaT",
				rotatesun: "_2-q1z92uhl1L2pD2Vru4Bx",
				radialHighlightInner: "_29R8bdUcgPhwh4s8kxRfVt",
				subscriptionName: "_2Ua7tyUWT9LNuVuwmVCXFr"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/PurchaseButton/index.m.less": function(e, t, a) {
			e.exports = {
				checkout: "_1YeF_-_BCIWSRSq7VcHfwX",
				price: "Xwc8CCPKWIdJKDB52171W",
				recipient: "_2df1mhtxpVh7VAaPhgWqWV",
				shimmer: "_1TKQ0NVUKMLkw2AFMm8njV",
				imageShimmer: "_1TyiUrWpQj0F35lkM5SBLh"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Thanks/index.m.less": function(e, t, a) {
			e.exports = {
				benefits: "_2-ycDF-Psu2x9TTqnG7neu",
				benefit: "_1I-l4KPF_Ub1c46n512i2d",
				check: "_1xHbWZ-qc6mzs2ulMrwErn",
				checkout: "_2xEZp5E9jHfd7ErfC7aOtg",
				container: "_2M8d10IbaaRCGbtCN0famA",
				cta: "_2CzDr42j0wzna45CuYbifD",
				description: "o2NHAMcQ55KS3ogS8RIEs",
				divider: "UIOXdEofaxr4Rtf85Bemh",
				footer: "b-R74uJRDdaA3pe4r1Hmk",
				price: "_1LMyPkWZzWKwuXJks5-JBs",
				recipient: "sWx_snHBtmp85PuUyG3bp",
				shimmer: "_3dcca0wIWlXzcOki_eDLG1",
				imageShimmer: "_1v4WbFTprwAtGFR3bi4c4I",
				title: "_2a81dkpP6gwOOBjHvQFxJ2"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1sFzjkbzwgDZbCfUC2r1wE",
				jumperArmLeft: "_3PiaT85fC3TrQD2HdeOafZ",
				jumperArmLeftAnim: "zKNYt858N0bjlljDDG6NZ",
				jumperArmRight: "_3Lx79UhomruM1Y5BCTzG8Y",
				jumperArmRightAnim: "_1i7rn3wI2iwaDt20BD4cwA",
				jumperBullet: "_3VgQEpiX3x4ms2DPXbU3Vv",
				jumperBulletAnim: "_2SOHU1xXIOc8DnKL4Eh_NA",
				jumperLegLeft: "_2tBrC3MWjEDn2rUr1uHBSU",
				jumperLegLeftAnim: "_33YZcOsjLAJqX7_PWF0XMy",
				jumperLegRight: "_21kcQmC_D0HKtBiZB44xj_",
				jumperLegRightAnim: "_2N7iCqOyBuKxb1Gi5WqG2h",
				jumperTorso: "_1ftz2Us7dNaqGSxapletsm"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return l
			}));
			var s = a("./node_modules/react/index.js"),
				o = a.n(s),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/components/ScrollAnimation/index.tsx"),
				n = a("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				c = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less"),
				m = a.n(c);
			const d = [1700, 2400];

			function l(e) {
				const t = e.scrollRange || d;
				return o.a.createElement("footer", {
					className: Object(r.a)(m.a.container, e.className)
				}, o.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/8fvy7o/these_items_are_cosmetic_only_and_grant_no/",
					target: "_blank"
				}, o.a.createElement(i.a, {
					scrollRange: t
				}, t => o.a.createElement("img", {
					className: m.a.jumperBullet,
					src: Object(n.a)(e.subreddit, "jumper_bullet@2x.png"),
					style: t
				})), o.a.createElement(i.a, {
					scrollRange: t
				}, t => o.a.createElement("img", {
					className: m.a.jumperArmLeft,
					src: Object(n.a)(e.subreddit, "jumper_arm_left@2x.png"),
					style: t
				})), o.a.createElement(i.a, {
					scrollRange: t
				}, t => o.a.createElement("img", {
					className: m.a.jumperLegLeft,
					src: Object(n.a)(e.subreddit, "jumper_leg_left@2x.png"),
					style: t
				})), o.a.createElement(i.a, {
					scrollRange: t
				}, t => o.a.createElement("img", {
					className: m.a.jumperLegRight,
					src: Object(n.a)(e.subreddit, "jumper_leg_right@2x.png"),
					style: t
				})), o.a.createElement("img", {
					className: m.a.jumperTorso,
					src: Object(n.a)(e.subreddit, "jumper_torso@2x.png")
				}), o.a.createElement(i.a, {
					scrollRange: t
				}, t => o.a.createElement("img", {
					className: m.a.jumperArmRight,
					src: Object(n.a)(e.subreddit, "jumper_arm_right@2x.png"),
					style: t
				}))))
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Header/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2cp0MDUeXSx8jZsMgV8nWB",
				chickenHead: "_281rYD23XhZWOllS1iE5ZM",
				chickenLeftArm: "_3zGGQ5NHOnnPrvPv5CQyzu",
				chickenLeftArmAnim: "vdXFK8wMu43GyLQjSTZ21",
				chickenLeftShoulder: "_3_cSYmJ-k5q6IVWpSet8Bk",
				chickenRightArm: "_1e-Asqvlz83W2VpbMd5I_l",
				chickenRightArmAnim: "NGDCS-gml3Cj1pxPJfcK3",
				chickenTorso: "_1uG_Ba-yNpZZeH4Nkz8wFP",
				tag: "_3iccCG1g-ESmJU7p48I13e",
				title: "_1InVBG-Y3405FaCkoW1WNf"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Tip/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_3kBZNmkRcsR68Z_GWsAvdv",
				circle: "_1HuZZe6mAGdTK51o8wy0Ty",
				circleShimmer: "_23xoEOLTQbxhEP4sxGL0RG",
				shimmer: "_3gC9nZJNk_cqriNWiwo3sL",
				tooltipWrapper: "_15rembukPlDtuyNZ-Xu8Gd",
				tooltip: "_3gbci1E3nOkYl1keIxZgEc",
				tooltipText: "_3vgPOtiKCF9O8BoKrNf2c_"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/index.m.less": function(e, t, a) {
			e.exports = {
				content: "_3L2DdYdHLzDAxcOMaqeOf1",
				emoji: "_3yZMeRF4jPT9wh3-g7vxbu",
				footer: "_3kIx2dGZXOuy45W3zPk4gl",
				gif: "_1APrv4hs14TjxWjtyAKZQk",
				img: "_1hq1t1hFoeW4IuNSR4an3l",
				tip1: "_2HqJNg4XmS-YimRbE_c25",
				tip2: "_1PkCmm6eY1yC_5Y3nHl65O",
				tip3: "_3y21jRn1hKKWw-61iRveJg"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/Testimonials/index.m.less": function(e, t, a) {
			e.exports = {
				badge: "_3YsbiXvTALeWs8bjNgE6JT",
				container: "_1Oe0GooWFg_aCcljtSE7vI",
				indicators: "iufgL-Gtpn3JEsYP_bS4_",
				indicator: "JWWSGV-zlRjfOKDYtNHYx",
				indicatorSelected: "qvbO8Zi8eNC7Y4LN00QNY",
				testimony: "hSsZVS-lHTYFPdUtAmJMf",
				testimonyOutline: "_11maSTrG2UfudtIJUErrmw",
				testimonyOutlineFlat: "_29ldSSgxb2gTiHhFj0K8n5",
				testimonyText: "qoAm0k1N1jikF7JjntlqB",
				user: "_3BpxvMM8vR85TXu0iDzLGt",
				username: "_2mis8CZQLskwVQZHo1oDfb"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_2hnZpsw-lejHnH3Cy9SmME"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var s = a("./src/config.ts");
			const o = (e, t) => "".concat(s.a.assetPath, "/img/memberships/paywall/").concat(e.name.toLowerCase(), "/").concat(t)
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/index.m.less": function(e, t, a) {
			e.exports = {
				benefits: "_2dAtohyay5fb_xPAvhaICV",
				container: "_9lKNL6GIsEpAVwKUJl6Z2",
				faq: "_1Bh5DUjq67K1m6oBfOWOKR",
				footer: "m0A3m_EfmfuToWfIg2cOb",
				notOverlay: "_3TrMVaPbr5ZbxAJQFKGMRr",
				overlay: "_1wLDBHVt_LHrdsKWcc9PMN",
				thanks: "_1NPXJMMFRxA9uYU0mUnF78",
				whatDoYouGet: "_35dHVuK72zhOhzVd6XQB6o"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			a("./node_modules/core-js/modules/es6.regexp.search.js");
			var s = a("./node_modules/react/index.js"),
				o = a.n(s),
				r = a("./node_modules/react-redux/es/index.js"),
				i = a("./node_modules/react-router/esm/react-router.js"),
				n = a("./node_modules/reselect/es/index.js"),
				c = a("./node_modules/uuid/v4.js"),
				m = a.n(c);
			var d, l = a("./src/lib/classNames/index.ts"),
				p = a("./src/lib/extractQueryParams/index.ts"),
				u = a("./node_modules/react-dom/index.js"),
				b = a("./src/reddit/components/TrackingHelper/index.tsx");
			! function(e) {
				e[e.Visible = 0] = "Visible", e[e.NotVisible = 1] = "NotVisible"
			}(d || (d = {}));
			var h = Object(b.c)(class extends o.a.Component {
					constructor() {
						super(...arguments), this.visibilityState = d.NotVisible, this.enterFired = !1, this.exitFired = !1
					}
					componentDidMount() {
						if (this.props.children) {
							const e = Object(u.findDOMNode)(this);
							e && "string" != typeof e && (this.observer = new IntersectionObserver(e => {
								e.forEach(e => {
									if (e.isIntersecting && this.visibilityState === d.NotVisible) {
										if (this.visibilityState = d.Visible, this.props.fireOnce && this.enterFired) return;
										this.props.onEnter && (this.props.sendEvent(this.props.onEnter), this.enterFired = !0)
									}
									if (!e.isIntersecting && this.visibilityState === d.Visible) {
										if (this.visibilityState = d.NotVisible, this.props.fireOnce && this.exitFired) return;
										this.props.onExit && (this.props.sendEvent(this.props.onExit), this.exitFired = !0)
									}
								})
							}, {
								threshold: .25
							}), this.observer.observe(e))
						}
					}
					componentWillUnmount() {
						this.observer && this.observer.disconnect()
					}
					render() {
						return this.props.children
					}
				}),
				g = a("./src/reddit/featureFlags/subredditPoints.ts"),
				f = a("./src/reddit/selectors/platform.ts"),
				_ = a("./src/reddit/selectors/subreddit.ts"),
				y = a("./src/reddit/selectors/telemetry.ts"),
				x = a("./src/reddit/selectors/user.ts"),
				k = a("./node_modules/fbt/lib/FbtPublic.js"),
				E = a("./src/config.ts"),
				w = a("./src/reddit/models/Badge/index.ts");
			const j = {
					achievementBadges: !0,
					animations: !0,
					canCancel: !0,
					canGift: !0,
					communityThanks: !0,
					emotes: !0,
					gifs: !0,
					loyaltyBadges: !0,
					styleBadges: !0,
					testimonials: !0
				},
				v = {
					achievementBadges: !1,
					animations: !1,
					canCancel: !1,
					canGift: !1,
					communityThanks: !1,
					emotes: !1,
					testimonials: !1
				},
				C = {
					t5_2wlj3: v,
					t5_2l3wpx: v,
					t5_vsb5g: v,
					t5_37jgj: v,
					t5_2t9ha: v,
					t5_2a3y8x: v
				};
			var N = function(e) {
					return Object.assign({}, j, C[e] || {})
				},
				P = a("./src/reddit/selectors/economics.ts"),
				O = a("./src/reddit/components/RichTextEditor/index.tsx"),
				I = a("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				S = a("./src/reddit/components/ScrollAnimation/index.tsx"),
				M = a("./src/reddit/helpers/richTextEditor/index.ts"),
				T = a("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				L = a("./src/reddit/icons/svgs/FormattingBold/index.tsx"),
				B = a("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				A = a("./src/reddit/icons/svgs/FormattingItalics/index.tsx"),
				z = a("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"),
				R = a("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				F = a("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"),
				G = a("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"),
				D = a("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"),
				W = a("./src/reddit/icons/svgs/FormattingTable/index.tsx"),
				H = a("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"),
				Z = a("./src/reddit/icons/svgs/Gif/index.tsx"),
				U = a("./src/reddit/icons/svgs/Smile/index.tsx"),
				V = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.array.sort.js"), a("./src/higherOrderComponents/addOverlayEvents.tsx")),
				q = a("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				K = a("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				J = a("./src/reddit/icons/svgs/Close/index.tsx"),
				X = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/EmoteTooltip/index.m.less"),
				Q = a.n(X);

			function Y(e) {
				const t = e.emojiPack.emotes,
					a = Object.keys(t).map(e => t[e]).sort((e, t) => e.id.localeCompare(t.id));
				return o.a.createElement("div", {
					className: Object(l.a)(Q.a.container, e.className),
					style: e.style
				}, o.a.createElement("div", {
					className: Q.a.header
				}, k.fbt._("Add r/{communityName} emote", [k.fbt._param("communityName", e.subreddit.name)], {
					hk: "O2Vj2"
				}), o.a.createElement(J.a, {
					className: Q.a.close,
					onClick: e.onClose
				})), o.a.createElement("div", {
					className: Q.a.emojis
				}, o.a.createElement("div", {
					className: Q.a.emojisTitle
				}, e.emojiPack.title), o.a.createElement("div", {
					className: Q.a.emojisList
				}, a.map(t => o.a.createElement("button", {
					className: Q.a.emoji,
					onClick: () => e.onSelectEmoji(Object(K.g)(t, e.editorState)),
					key: t.id
				}, o.a.createElement("img", {
					className: Q.a.emojiImage,
					src: t.emoji.path
				}))))), o.a.createElement("div", {
					className: Q.a.triangle
				}))
			}
			Y.defaultProps = {
				emojiPack: {
					emotes: {
						bush: {
							id: "bush",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/bush.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|bush",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/bush.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						chug: {
							id: "chug",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/chug.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|chug",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/chug.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						clappy: {
							id: "clappy",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/clappy.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|clappy",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/clappy.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						confused: {
							id: "confused",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/confused.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|confused",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/confused.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						cuddle: {
							id: "cuddle",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/cuddle.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|cuddle",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/cuddle.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						dab: {
							id: "dab",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dab.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|dab",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dab.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						dance: {
							id: "dance",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dance.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|dance",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dance.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						mech_destroy: {
							id: "mech_destroy",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|mech_destroy",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						mech_love: {
							id: "mech_love",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_love.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|mech_love",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_love.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						megaphone: {
							id: "megaphone",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/megaphone.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|megaphone",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/megaphone.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						respect: {
							id: "respect",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/respect.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|respect",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/respect.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						soon: {
							id: "soon",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/soon.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|soon",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/soon.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						},
						uNfOrTuNaTeLy: {
							id: "uNfOrTuNaTeLy",
							emoji: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/unfortunately.gif",
								type: "image/gif",
								x: 20,
								y: 20
							},
							fullId: "emote|emo_pack_1|uNfOrTuNaTeLy",
							imageType: "image/gif",
							sticker: {
								path: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/unfortunately.gif",
								type: "image/gif",
								x: 60,
								y: 60
							}
						}
					},
					title: "Special Membership"
				}
			};
			var $ = Object(q.a)(Y, [V.a.Click, V.a.Keydown]),
				ee = a("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx"),
				te = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/GifTooltip/index.m.less"),
				ae = a.n(te);
			var se = Object(q.a)((function(e) {
					return o.a.createElement("div", {
						className: Object(l.a)(ae.a.container, e.className),
						style: e.style
					}, o.a.createElement(ee.a, {
						autofocus: !1,
						correlationId: "",
						editorState: e.editorState,
						onChange: e.onSelectGif,
						onClose: e.onClose,
						subreddit: {
							id: e.subreddit.id,
							isProfile: !1,
							name: e.subreddit.name
						}
					}), o.a.createElement("div", {
						className: ae.a.triangle
					}))
				}), [V.a.Click, V.a.Keydown]),
				oe = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/index.m.less"),
				re = a.n(oe);
			class ie extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						emotesOpen: "emoji" === e.type,
						gifsOpen: "gif" === e.type
					}
				}
				render() {
					const e = "emoji" === this.props.type ? "membership-paywall-emote-".concat(this.props.subreddit.id) : void 0,
						t = "gif" === this.props.type ? "membership-paywall-gif-".concat(this.props.subreddit.id) : void 0;
					return o.a.createElement("div", {
						className: Object(l.a)(this.props.className, re.a.container)
					}, o.a.createElement("div", {
						className: re.a.content
					}, o.a.createElement("div", {
						className: Object(l.a)(re.a.iconWrapper, {
							[re.a.clickable]: "emoji" === this.props.type,
							[re.a.open]: this.state.emotesOpen
						}),
						id: e,
						onClick: "emoji" === this.props.type ? () => this.setState(e => ({
							emotesOpen: !e.emotesOpen
						})) : void 0
					}, o.a.createElement(U.a, {
						className: Object(l.a)(re.a.emoteIcon)
					})), o.a.createElement("div", {
						className: Object(l.a)(re.a.iconWrapper, {
							[re.a.clickable]: "gif" === this.props.type,
							[re.a.open]: this.state.gifsOpen
						}),
						id: t,
						onClick: "gif" === this.props.type ? () => this.setState(e => ({
							gifsOpen: !e.gifsOpen
						})) : void 0
					}, o.a.createElement(Z.a, {
						className: Object(l.a)(re.a.gifIcon)
					})), o.a.createElement("div", {
						className: re.a.divider
					}), o.a.createElement(L.a, {
						className: re.a.icon
					}), o.a.createElement(A.a, {
						className: re.a.icon
					}), o.a.createElement(B.a, {
						className: re.a.icon
					}), o.a.createElement(G.a, {
						className: re.a.icon
					}), o.a.createElement(z.a, {
						className: re.a.icon
					}), o.a.createElement(D.a, {
						className: re.a.icon
					}), o.a.createElement(F.a, {
						className: re.a.icon
					}), o.a.createElement("div", {
						className: re.a.divider
					}), o.a.createElement(W.a, {
						className: re.a.icon
					}), o.a.createElement(H.a, {
						className: re.a.icon
					}), o.a.createElement(R.a, {
						className: re.a.icon
					})), o.a.createElement("button", {
						disabled: !0,
						className: re.a.reply
					}, k.fbt._("reply", null, {
						hk: "RzR8c"
					})), this.state.emotesOpen && o.a.createElement($, {
						isOpen: !0,
						className: re.a.emoteTooltip,
						editorState: this.props.editorState,
						subreddit: this.props.subreddit,
						targetPosition: ["left", "top"],
						tooltipId: e,
						tooltipPosition: ["left", "bottom"],
						onClose: () => this.setState({
							emotesOpen: !1
						}),
						onSelectEmoji: e => {
							this.props.onChange(e), this.setState({
								emotesOpen: !1
							})
						}
					}), this.state.gifsOpen && o.a.createElement(se, {
						isOpen: !0,
						className: re.a.gifTooltip,
						editorState: this.props.editorState,
						subreddit: this.props.subreddit,
						targetPosition: ["left", "top"],
						tooltipId: t,
						tooltipPosition: ["left", "bottom"],
						onClose: () => this.setState({
							gifsOpen: !1
						}),
						onSelectGif: e => {
							this.props.onChange(e), this.setState({
								gifsOpen: !1
							})
						}
					}))
				}
			}
			var ne = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/GifsInComments/index.m.less"),
				ce = a.n(ne);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			const de = [5e3, 5300];
			class le extends o.a.PureComponent {
				render() {
					const {
						className: e,
						emojisExpanded: t,
						subreddit: a
					} = this.props, s = de.map(e => e + (t ? 500 : 0)), r = N(a.id).animations;
					return o.a.createElement("div", {
						className: Object(l.a)(ce.a.container, e)
					}, r && o.a.createElement("header", {
						className: ce.a.header
					}, o.a.createElement("a", {
						href: "https://www.reddit.com/r/FortNiteBR/comments/9067f2/i_have_been_playing_50v50_a_little_differently/",
						target: "_blank"
					}, o.a.createElement("img", {
						className: ce.a.rescuerLegs,
						src: Object(T.a)(a, "rescuer_legs@2x.png")
					}), o.a.createElement(S.a, {
						scrollRange: s
					}, e => o.a.createElement("img", {
						className: ce.a.rescuerArm,
						src: Object(T.a)(a, "rescuer_arm@2x.png"),
						style: e
					})), o.a.createElement(S.a, {
						scrollRange: s
					}, e => o.a.createElement("img", {
						className: ce.a.rescuerTorso,
						src: Object(T.a)(a, "rescuer_torso@2x.png"),
						style: e
					})), o.a.createElement("img", {
						className: ce.a.woundedBody,
						src: Object(T.a)(a, "wounded_body@2x.png")
					}), o.a.createElement(S.a, {
						scrollRange: s
					}, e => o.a.createElement("img", {
						className: ce.a.woundedHead,
						src: Object(T.a)(a, "wounded_head@2x.png"),
						style: e
					})))), o.a.createElement("article", {
						className: Object(l.a)(ce.a.content, {
							[ce.a.contentWithAnimations]: r
						})
					}, o.a.createElement("div", {
						className: ce.a.title
					}, k.fbt._("GIFs in Comments", null, {
						hk: "4iMCW4"
					})), o.a.createElement("div", {
						className: ce.a.description
					}, k.fbt._("Put GIFs directly in your comments.", null, {
						hk: "2yUWCA"
					})), o.a.createElement("div", {
						className: ce.a.description
					}, k.fbt._("Search a vast library to find the perfect one.", null, {
						hk: "1hZivq"
					})), o.a.createElement(O.a, {
						className: ce.a.editor,
						editorType: M.a.Comment,
						placeholderText: k.fbt._("Try adding a GIF", null, {
							hk: "tHtDe"
						}),
						readOnly: !1,
						renderToolbar: e => o.a.createElement(ie, me({
							key: String(t),
							subreddit: a,
							type: "gif"
						}, e)),
						rteState: I.a.createInitial(),
						toolbarPosition: "bottom",
						trackToolbarClick: function() {},
						onChange: function() {},
						onSubmit: function() {}
					}), o.a.createElement("div", {
						className: ce.a.try
					}, k.fbt._("Try it out! Search for a GIF and put it in your comment.", null, {
						hk: "309j9G"
					}))))
				}
			}
			const pe = Object(n.c)({
				cosmeticBadges: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(P.d)(e, a.id)
				}
			});
			var ue = Object(r.b)(pe)(le),
				be = a("./node_modules/lodash/last.js"),
				he = a.n(be),
				ge = a("./node_modules/lodash/shuffle.js"),
				fe = a.n(ge),
				_e = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/PremiumEmojis/index.m.less"),
				ye = a.n(_e);

			function xe() {
				return (xe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}

			function ke(e) {
				return e.reduce((e, t) => {
					const a = he()(e);
					return a && a.length < 12 ? a.push(t) : e.push([t]), e
				}, [
					[]
				])
			}
			const Ee = fe()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/bush.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/chug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/clappy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/cuddle.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dab.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dance.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_love.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/megaphone.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/respect.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/soon.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/unfortunately.gif"]),
				we = fe()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_1/competitive.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_2/goat.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_3/noob.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_4/bot.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_5/potato.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_6/casual.gif"]),
				je = fe()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/confused.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/disappointed.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/grinning.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/laughing.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/like.gif"]),
				ve = fe()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/angry.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/astonished.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/blush.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/cheeky.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/cry.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/disapproval.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/dizzy_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/downvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/facepalm.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/feels_bad_man.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/feels_good_man.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/flip_out.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/flushed.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/give_upvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/give_upvote_rainbow.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/grimacing.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/grin.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/heart_eyes.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/heart_eyes_rainbow.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/hug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/joy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/kissing_heart.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/money_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/neutral_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/no_mouth.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/poop.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/put_back.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/rage.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/scream.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/shrug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sleep.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/slightly_smiling.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/smile.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/snoo.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sob.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/stuck_out_tongue.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sunglasses.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/surprise.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sweat.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sweat_smile.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/table.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/table_flip.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thinking_face_hmm.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thumbs_down.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thumbs_up.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/trollface.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/upvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/wink.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/yummy.gif"]);
			class Ce extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}
				}
				render() {
					const {
						className: e,
						subreddit: t
					} = this.props;
					return o.a.createElement("div", {
						className: Object(l.a)(e, ye.a.container)
					}, o.a.createElement("header", {
						className: ye.a.title
					}, k.fbt._("Premium Animated Emotes", null, {
						hk: "24mmlb"
					})), o.a.createElement("div", {
						className: ye.a.description
					}, k.fbt._("Say more than text. Bring color and animation to your comments.", null, {
						hk: "2MjrRF"
					})), o.a.createElement(O.a, {
						className: ye.a.editor,
						editorType: M.a.Comment,
						placeholderText: k.fbt._("Try adding an emote", null, {
							hk: "3H8jm8"
						}),
						readOnly: !1,
						renderToolbar: e => o.a.createElement(ie, xe({
							subreddit: t,
							type: "emoji"
						}, e)),
						rteState: I.a.createInitial(),
						toolbarPosition: "bottom",
						trackToolbarClick: function() {},
						onChange: function() {},
						onSubmit: function() {}
					}), o.a.createElement("div", {
						className: ye.a.try
					}, k.fbt._("Try it out! Add an emoji by clicking on it.", null, {
						hk: "2LKfXS"
					})), o.a.createElement("div", {
						className: ye.a.description
					}, k.fbt._("Use more than 100 emotes, including custom art just for r/{communityName}.", [k.fbt._param("communityName", t.name)], {
						hk: "31Kq8t"
					})), o.a.createElement("footer", {
						className: Object(l.a)(ye.a.allEmojis, {
							[ye.a.notExpanded]: !this.state.expanded
						})
					}, o.a.createElement("div", {
						className: ye.a.label
					}, k.fbt._("special members", null, {
						hk: "2W17Tt"
					})), o.a.createElement("div", {
						className: ye.a.grid
					}, ke(Ee).map((e, t) => o.a.createElement("div", {
						className: ye.a.gridRow,
						key: t
					}, e.map(e => o.a.createElement("img", {
						className: ye.a.emoji,
						key: e,
						src: e
					}))))), o.a.createElement("div", {
						className: ye.a.label
					}, k.fbt._("snoomojis", null, {
						hk: "2hsGar"
					})), o.a.createElement("div", {
						className: ye.a.grid
					}, ke(ve).map((e, t) => o.a.createElement("div", {
						className: ye.a.gridRow,
						key: t
					}, e.map(e => o.a.createElement("img", {
						className: ye.a.emoji,
						key: e,
						src: e
					}))))), o.a.createElement("div", {
						className: ye.a.label
					}, k.fbt._("dogesy", null, {
						hk: "2FheYm"
					})), o.a.createElement("div", {
						className: ye.a.grid
					}, ke(je).map((e, t) => o.a.createElement("div", {
						className: ye.a.gridRow,
						key: t
					}, e.map(e => o.a.createElement("img", {
						className: ye.a.emoji,
						key: e,
						src: e
					}))))), o.a.createElement("div", {
						className: ye.a.label
					}, k.fbt._("player style", null, {
						hk: "1XkSYc"
					})), o.a.createElement("div", {
						className: ye.a.grid
					}, ke(we).map((e, t) => o.a.createElement("div", {
						className: ye.a.gridRow,
						key: t
					}, e.map(e => o.a.createElement("img", {
						className: ye.a.emoji,
						key: e,
						src: e
					}))))), !this.state.expanded && o.a.createElement("div", {
						className: ye.a.gradient
					})), !this.state.expanded && o.a.createElement("button", {
						className: ye.a.showAll,
						onClick: () => {
							this.setState({
								expanded: !0
							}), this.props.onExpand && this.props.onExpand()
						}
					}, k.fbt._("show all", null, {
						hk: "2MP4Ce"
					})))
				}
			}
			var Ne = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Section/index.m.less"),
				Pe = a.n(Ne);

			function Oe(e) {
				const t = e.showProgressBar ? 1 / 0 : 6,
					a = e.items.reduce((e, a) => {
						const s = he()(e);
						return s && s.length < t ? s.push(a) : e.push([a]), e
					}, [
						[]
					]);
				return o.a.createElement("section", {
					className: Object(l.a)(Pe.a.container, e.className)
				}, o.a.createElement("header", {
					className: Pe.a.title
				}, e.title), o.a.createElement("article", {
					className: Pe.a.description
				}, e.description), o.a.createElement("footer", {
					className: Pe.a.footer
				}, e.showProgressBar && o.a.createElement("div", {
					className: Pe.a.progressBar
				}, o.a.createElement("div", {
					className: Pe.a.progressThumb
				})), a.map((e, t) => o.a.createElement("div", {
					className: Pe.a.row,
					key: t
				}, e.map(e => o.a.createElement("div", {
					className: Pe.a.item,
					key: e.text
				}, o.a.createElement("img", {
					className: Pe.a.itemIcon,
					src: e.icon
				}), o.a.createElement("div", {
					className: Pe.a.itemText
				}, e.text)))))))
			}
			var Ie = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/StyleBadges/index.m.less"),
				Se = a.n(Ie);
			const Me = 1e3,
				Te = 66;
			class Le extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						currentBadgeIdx: 0
					}, this.timer = null, this.badges = null
				}
				componentDidUpdate() {
					!this.badges && this.props.styleBadges.length && (this.badges = fe()(this.props.styleBadges).slice(0, Te), this.timer = window.setInterval(() => {
						this.setState(e => ({
							currentBadgeIdx: (e.currentBadgeIdx + 1) % this.badges.length
						}))
					}, Me))
				}
				componentWillUnmount() {
					this.timer && clearInterval(this.timer)
				}
				render() {
					const e = this.badges;
					if (!e) return null;
					const {
						className: t,
						username: a
					} = this.props, s = e[this.state.currentBadgeIdx];
					return o.a.createElement("article", {
						className: Object(l.a)(t, Se.a.container)
					}, o.a.createElement("header", {
						className: Se.a.title
					}, k.fbt._("Style Badges", null, {
						hk: "3ioHSL"
					})), o.a.createElement("div", {
						className: Se.a.description
					}, k.fbt._("Stand out with 8 new badges a month", null, {
						hk: "kAJmf"
					})), o.a.createElement("div", {
						className: Se.a.description
					}, k.fbt._("and a special color for your {username}", [k.fbt._param("username", o.a.createElement("div", {
						className: Se.a.username,
						style: {
							color: s.color
						}
					}, o.a.createElement("img", {
						className: Se.a.userBadge,
						src: s.url
					}), a))], {
						hk: "1HJQkU"
					})), o.a.createElement("div", {
						className: Object(l.a)(Se.a.badges, {
							[Se.a.smallCollection]: e.length <= 24
						})
					}, e.map(e => o.a.createElement("img", {
						className: Se.a.badge,
						src: e.url,
						key: e.url
					}))))
				}
			}
			const Be = Object(n.c)({
				styleBadges: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(P.d)(e, a).filter(e => !(e.collections && e.collections.custom)).map(e => ({
						url: Object(w.b)(64, 64, e).url2x,
						color: e.extra && e.extra.style && e.extra.style.color || ""
					})).filter(e => e.color)
				},
				username: e => e.user.account && "u/".concat(e.user.account.displayText) || "u/username"
			});
			var Ae = Object(r.b)(Be)(Le),
				ze = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/index.m.less"),
				Re = a.n(ze);
			const Fe = [{
				icon: "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/frontpager_60@2x.png",
				text: "Frontpager"
			}, {
				icon: "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/Creator_60@2x.png",
				text: "Creator"
			}, {
				icon: "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/best_commenter_60@2x.png",
				text: "Top Commenter\nof the Post"
			}, {
				icon: "https://meta.redditmedia.com/img/fortnitebr/badges/rainbow_smash_60@2x.png",
				text: "Mod"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/achievement/subreddit_cake_week_120x120.png",
				text: "Subreddit\nCake Day"
			}, {
				icon: "".concat(E.a.assetPath, "/img/memberships/paywall/fortnitebr/newbie.png"),
				text: "Newbie"
			}, {
				icon: "".concat(E.a.assetPath, "/img/memberships/paywall/fortnitebr/karma10k.png"),
				text: "Subreddit\nKarma 10k"
			}, {
				icon: "".concat(E.a.assetPath, "/img/memberships/paywall/fortnitebr/karma20k.png"),
				text: "Subreddit\nKarma 20k"
			}, {
				icon: "".concat(E.a.assetPath, "/img/memberships/paywall/fortnitebr/karma50k.png"),
				text: "Subreddit\nKarma 50k"
			}, {
				icon: "".concat(E.a.assetPath, "/img/memberships/paywall/fortnitebr/karma100k.png"),
				text: "Subreddit\nKarma 100k"
			}, {
				icon: "".concat(E.a.assetPath, "/img/memberships/paywall/fortnitebr/karma150k.png"),
				text: "Subreddit\nKarma 150k"
			}, {
				icon: "".concat(E.a.assetPath, "/img/memberships/paywall/fortnitebr/karma200k.png"),
				text: "Subreddit\nKarma 200k"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_1_week_120x120.png",
				text: "Most Karma\n(Week)"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_10_week_120x120.png",
				text: "Top 10 Karma\n(Week)"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_1_month_120x120.png",
				text: "Most Karma\n(Month)"
			}, {
				icon: "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_10_month_120x120.png",
				text: "Top 10 Karma\n(Month)"
			}];
			class Ge extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						emojisExpanded: !1
					}
				}
				render() {
					const {
						achievementBadges: e = Fe,
						className: t,
						correlationId: a,
						loyaltyBadges: s,
						meta: r,
						subreddit: i
					} = this.props;
					return o.a.createElement("article", {
						className: Object(l.a)(t, Re.a.container)
					}, o.a.createElement("header", {
						className: Re.a.title
					}, k.fbt._("{member} Benefits", [k.fbt._param("member", r.member)], {
						hk: "xstxK"
					})), N(i.id).loyaltyBadges && s && !!s.length && o.a.createElement(h, {
						fireOnce: !0,
						onEnter: e => Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_4_loyalty_badges",
							correlationId: a
						}, y.defaults(e), {
							subreddit: y.subreddit(e)
						})
					}, o.a.createElement(Oe, {
						showProgressBar: !0,
						className: Re.a.section,
						title: k.fbt._("Loyalty Badges", null, {
							hk: "agXF2"
						}),
						description: k.fbt._("Show how long you’ve been supporting the subreddit.", null, {
							hk: "1r4ZKB"
						}),
						items: s
					})), N(i.id).achievementBadges && o.a.createElement(h, {
						fireOnce: !0,
						onEnter: e => Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_5_achievement_badges",
							correlationId: a
						}, y.defaults(e), {
							subreddit: y.subreddit(e)
						})
					}, o.a.createElement(Oe, {
						className: Re.a.section,
						title: k.fbt._("Achievement Badges", null, {
							hk: "4asfWh"
						}),
						description: k.fbt._("Get rewarded for reaching subreddit milestones. Available to the community at large, thanks to your support.", null, {
							hk: "3sEG2W"
						}),
						items: e
					})), N(i.id).styleBadges && o.a.createElement(h, {
						fireOnce: !0,
						onEnter: e => Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_6_style_badges",
							correlationId: a
						}, y.defaults(e), {
							subreddit: y.subreddit(e)
						})
					}, o.a.createElement(Ae, {
						className: Re.a.badges,
						subredditId: i.id
					})), N(i.id).emotes && o.a.createElement(h, {
						fireOnce: !0,
						onEnter: e => Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_7_premium_emojis",
							correlationId: a
						}, y.defaults(e), {
							subreddit: y.subreddit(e)
						})
					}, o.a.createElement(Ce, {
						subreddit: i,
						onExpand: () => this.setState({
							emojisExpanded: !0
						})
					})), N(i.id).gifs && o.a.createElement(h, {
						fireOnce: !0,
						onEnter: e => Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_8_gifs_in_comments",
							correlationId: a
						}, y.defaults(e), {
							subreddit: y.subreddit(e)
						})
					}, o.a.createElement(ue, {
						emojisExpanded: this.state.emojisExpanded,
						subreddit: i
					})))
				}
			}
			const De = Object(n.c)({
				loyaltyBadges: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(P.e)(e, a.id).map(e => ({
						icon: Object(w.b)(64, 64, e).url2x,
						text: e.title
					}))
				},
				meta: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(P.s)(e, a.id)
				}
			});
			var We = Object(r.b)(De)(Ge),
				He = a("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				Ze = a("./src/reddit/pages/meta/MembershipPaywallPage/FAQ/index.m.less"),
				Ue = a.n(Ze);
			class Ve extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						open: {}
					}, this.toggleQuestion = e => this.setState(t => Object.assign({}, t, {
						open: Object.assign({}, t.open, {
							[e]: !t.open[e]
						})
					}))
				}
				render() {
					const {
						className: e,
						meta: t,
						subreddit: a
					} = this.props, s = function(e, t) {
						const {
							membershipAlt: a,
							memberAltPlural: s
						} = t, o = [{
							Q: k.fbt._("What is a {membershipAlt}?", [k.fbt._param("membershipAlt", a)], {
								hk: "1rUCQD"
							}),
							A: k.fbt._("The {membershipAlt} is a set of exclusive features available to users who purchase a premium subscription to the subreddit.", [k.fbt._param("membershipAlt", a)], {
								hk: "14RJNQ"
							})
						}, {
							Q: k.fbt._("Are {membershipAlt} features available on mobile apps?", [k.fbt._param("membershipAlt", a)], {
								hk: "3qaJjE"
							}),
							A: k.fbt._("The features will be supported on the iOS and Android apps, as well as web. However, new features may appear on web before mobile, depending on development circumstances.", null, {
								hk: "2h0SNv"
							})
						}];
						return e.canGift && o.push({
							Q: k.fbt._("Can I gift a {membershipAlt} to other users?", [k.fbt._param("membershipAlt", a)], {
								hk: "1K5FbF"
							}),
							A: k.fbt._("Yes! If you'd like to gift a {membershipAlt}, send a PM to admin u/jarins.", [k.fbt._param("membershipAlt", a)], {
								hk: "895QP"
							})
						}), e.dedicatedSupport && o.push({
							Q: k.fbt._("What are the {membershipAlt} fees used for?", [k.fbt._param("membershipAlt", a)], {
								hk: "3TLe8q"
							}),
							A: k.fbt._("{memberAltPlural} support a unique project by Reddit to develop new features for this community.", [k.fbt._param("memberAltPlural", s)], {
								hk: "3GXXxI"
							})
						}), e.canCancel && o.push({
							Q: k.fbt._("How do I cancel my {membershipAlt}?", [k.fbt._param("membershipAlt", a)], {
								hk: "1w2Ob7"
							}),
							A: k.fbt._("You can cancel your membership at any time from the User Settings page. Look for the {membershipAlt} tab.", [k.fbt._param("membershipAlt", a)], {
								hk: "2HGeHZ"
							})
						}), o
					}(N(a.id), t);
					return o.a.createElement("div", {
						className: Object(l.a)(e, Ue.a.container)
					}, o.a.createElement("div", {
						className: Ue.a.title
					}, k.fbt._("{membershipAlt} FAQ", [k.fbt._param("membershipAlt", t.membershipAlt)], {
						hk: "4tP0lw"
					})), s.map(e => {
						let {
							Q: t,
							A: a
						} = e;
						return o.a.createElement("div", {
							className: Ue.a.section,
							key: t,
							onClick: () => this.toggleQuestion(t)
						}, o.a.createElement("div", {
							className: Ue.a.row
						}, o.a.createElement("div", {
							className: Ue.a.question
						}, t), o.a.createElement(He.a, {
							className: Object(l.a)(Ue.a.arrow, {
								[Ue.a.arrowClose]: !this.state.open[t]
							})
						})), !!this.state.open[t] && o.a.createElement("div", {
							className: Ue.a.answer
						}, a))
					}))
				}
			}
			const qe = Object(n.c)({
				meta: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(P.s)(e, a.id)
				}
			});
			var Ke = Object(r.b)(qe)(Ve),
				Je = a("./src/reddit/pages/meta/MembershipPaywallPage/Footer/index.m.less"),
				Xe = a.n(Je);
			const Qe = [7900, 8240];

			function Ye(e) {
				return o.a.createElement("footer", {
					className: Object(l.a)(Xe.a.container, e.className)
				}, o.a.createElement("div", {
					className: Xe.a.twoCol
				}, o.a.createElement("div", {
					className: Xe.a.copyright
				}, k.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1hv6BJ"
				}))), N(e.subreddit.id).animations && o.a.createElement("a", {
					className: Xe.a.link,
					href: "https://www.reddit.com/r/FortNiteBR/comments/a8mhn8/24_players_plays_all_i_want_for_christmas_is_you/",
					target: "_blank"
				}, o.a.createElement("img", {
					className: Xe.a.pianoKeyboard,
					src: Object(T.a)(e.subreddit, "piano_keyboard@2x.png")
				}), o.a.createElement(S.a, {
					scrollRange: Qe
				}, t => o.a.createElement("img", {
					className: Xe.a.pianoCrowdBottom,
					src: Object(T.a)(e.subreddit, "piano_crowd_bottom@2x.png"),
					style: t
				})), o.a.createElement(S.a, {
					scrollRange: Qe
				}, t => o.a.createElement("img", {
					className: Xe.a.pianoCrowdTop,
					src: Object(T.a)(e.subreddit, "piano_crowd_top@2x.png"),
					style: t
				})), o.a.createElement(S.a, {
					scrollRange: Qe
				}, t => o.a.createElement("img", {
					className: Xe.a.pianoFlier,
					src: Object(T.a)(e.subreddit, "piano_flier@2x.png"),
					style: t
				}))))
			}
			var $e = a("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				et = a("./src/reddit/icons/svgs/Twinkle/index.tsx"),
				tt = a("./src/reddit/actions/login.ts"),
				at = a("./src/reddit/components/Economics/Price/index.tsx"),
				st = a("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				ot = (a("./node_modules/core-js/modules/es6.symbol.js"), a("./src/higherOrderComponents/asModal/index.tsx")),
				rt = a("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/async.ts"),
				it = a("./src/reddit/contexts/PageLayer/index.tsx"),
				nt = a("./src/reddit/featureFlags/component.tsx"),
				ct = a("./src/reddit/selectors/gov.ts"),
				mt = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Cart/index.m.less"),
				dt = a.n(mt);
			const {
				fbt: lt
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function pt(e) {
				const {
					className: t,
					description: a,
					dollarPrice: s,
					monthly: r,
					subredditId: i,
					tokenPrice: n
				} = e;
				return o.a.createElement("article", {
					className: Object(l.a)(dt.a.container, t)
				}, o.a.createElement("div", {
					className: dt.a.description
				}, a), o.a.createElement("div", {
					className: dt.a.rhs
				}, o.a.createElement("div", {
					className: dt.a.price
				}, o.a.createElement(at.a, {
					dollarPrice: s,
					tokenPrice: n,
					monthly: r,
					subredditId: i
				})), r && o.a.createElement("div", {
					className: dt.a.monthlyText
				}, lt._("Paid monthly, cancel anytime", null, {
					hk: "1hG3H3"
				}))))
			}
			var ut = a("./src/lib/currency/centsToDollars/index.ts"),
				bt = a("./src/lib/prettyPrintNumber/index.ts"),
				ht = a("./src/reddit/constants/disclaimers.ts"),
				gt = a("./src/reddit/helpers/governance/tokens.ts"),
				ft = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Footer/index.m.less"),
				_t = a.n(ft);
			const yt = () => k.fbt._("{=Reddit User Agreement} , {=Privacy Policy} and {=Beta Terms of Service} .", [k.fbt._param("=Reddit User Agreement", o.a.createElement("a", {
				className: _t.a.link,
				href: "https://www.redditinc.com/policies/user-agreement",
				target: "_blank"
			}, k.fbt._("Reddit User Agreement", null, {
				hk: "2ImivI"
			}))), k.fbt._param("=Privacy Policy", o.a.createElement("a", {
				className: _t.a.link,
				href: "https://www.redditinc.com/policies/privacy-policy",
				target: "_blank"
			}, k.fbt._("Privacy Policy", null, {
				hk: "3tplT8"
			}))), k.fbt._param("=Beta Terms of Service", o.a.createElement("a", {
				className: _t.a.linkLast,
				href: ht.a,
				target: "_blank"
			}, k.fbt._("Beta Terms of Service", null, {
				hk: "11It1D"
			})))], {
				hk: "4xIdNd"
			});
			const xt = Object(n.c)({
				meta: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(P.s)(e, a)
				}
			});
			var kt = Object(r.b)(xt)((function(e) {
					if (e.purchaseType !== Rt.Subscription) return o.a.createElement("footer", {
						className: Object(l.a)(e.className, _t.a.container)
					}, k.fbt._("By purchasing, you agree to", null, {
						hk: "37Xh4k"
					}), o.a.createElement(yt, null));
					const t = e.dollarPrice && "$".concat(Object(ut.a)(e.dollarPrice, !0)),
						a = e.tokenPrice && Object(bt.a)(Object(gt.b)(e.tokenPrice, e.tokenDisplayConversion)) + " " + e.tokenName,
						s = t && a ? k.fbt._("{dollarPrice} or {tokenPrice}", [k.fbt._param("dollarPrice", t), k.fbt._param("tokenPrice", a)], {
							hk: "1uXVRd"
						}) : t || (a || "");
					return o.a.createElement("footer", {
						className: Object(l.a)(e.className, _t.a.container)
					}, k.fbt._("{membershipName} auto-renews for {price} a month. Cancel anytime in the Special Memberships section of your User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds. By continuing, you agree to", [k.fbt._param("membershipName", e.meta.membershipAlt), k.fbt._param("price", s)], {
						hk: "AMyMx"
					}), o.a.createElement(yt, null))
				})),
				Et = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Header/index.m.less"),
				wt = a.n(Et);
			const {
				fbt: jt
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const vt = Object(n.c)({
				meta: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(P.s)(e, a)
				}
			});
			var Ct = Object(r.b)(vt)((function(e) {
					const {
						className: t,
						meta: a,
						purchaseType: s
					} = e;
					return o.a.createElement("header", {
						className: Object(l.a)(t, wt.a.container)
					}, o.a.createElement("div", {
						className: wt.a.text
					}, s === Rt.Badge && jt._("Buy a badge", null, {
						hk: "1X4jZc"
					}), s === Rt.Subscription && jt._("Buy {membership-name}", [jt._param("membership-name", a.membershipAlt)], {
						hk: "ObrN"
					})), o.a.createElement(J.a, {
						className: wt.a.close,
						onClick: e.onClose
					}))
				})),
				Nt = a("./src/reddit/components/Economics/Price/strings.ts"),
				Pt = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx"),
				Ot = a("./src/reddit/components/Economics/SubredditPremium/PurchaseModal/Footer/PurchaseButton/index.tsx"),
				It = a("./src/reddit/components/Governance/Token/index.tsx"),
				St = a("./src/reddit/controls/Button/index.tsx"),
				Mt = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/index.m.less"),
				Tt = a.n(Mt);
			const {
				fbt: Lt
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function Bt(e) {
				return o.a.createElement("div", {
					className: Tt.a.dollarPurchase
				}, e.target.type === Rt.Badge && e.target.product.price && o.a.createElement(Pt.a, {
					correlationId: e.correlationId,
					key: "checkout-purchase-button",
					price: e.target.product.price,
					productId: e.target.product.id,
					subreddit: e.subreddit,
					onPaymentSuccessful: e.onPaymentComplete
				}), e.target.type === Rt.Subscription && e.target.dollarPrice && o.a.createElement(Ot.a, {
					showCards: !0,
					correlationId: e.correlationId,
					key: "checkout-purchase-button",
					price: e.target.dollarPrice,
					subreddit: e.subreddit,
					trial: e.trial,
					uniqueId: "checkout",
					username: e.username,
					onComplete: e.onPaymentComplete
				}))
			}

			function At(e) {
				return o.a.createElement("div", {
					className: Tt.a.tokenPurchase
				}, o.a.createElement(St.f, {
					onClick: e.onPayWithTokens,
					className: Tt.a.tokenPurchaseButton
				}, Lt._("Pay with {token-name}", [Lt._param("token-name", e.tokenName)], {
					hk: "7b9oh"
				})), o.a.createElement("div", {
					className: Tt.a.requiresMobile
				}, Lt._("Requires Reddit Vault on mobile", null, {
					hk: "4oRRlp"
				})))
			}

			function zt(e) {
				const {
					dollarPrice: t,
					monthly: a,
					subreddit: s,
					tokenDisplayConversion: r,
					tokenPrice: i
				} = e, n = a ? Nt.a.Monthly : Nt.a.Once;
				return o.a.createElement("div", {
					className: e.className
				}, t && i && o.a.createElement("div", {
					className: Tt.a.selectPaymentBox
				}, o.a.createElement("div", {
					className: Tt.a.selectPaymentTitleBox
				}, o.a.createElement("span", {
					className: Tt.a.selectPaymentTitle
				}, Lt._("Select Payment Method", null, {
					hk: "15rwcx"
				}))), o.a.createElement("div", {
					className: Tt.a.paymentContainer
				}, o.a.createElement("div", {
					className: Tt.a.paymentAmount
				}, o.a.createElement(It.a, {
					className: Tt.a.token,
					subredditId: s.id
				}), o.a.createElement("span", null, Object(Nt.c)(Object(gt.b)(i, r), n))), o.a.createElement(At, e)), o.a.createElement("div", {
					className: Tt.a.paymentContainer
				}, o.a.createElement("div", {
					className: Tt.a.paymentAmount
				}, Object(Nt.c)("$".concat(Object(ut.a)(t, !0)), n)), o.a.createElement(Bt, e))), t && !i && o.a.createElement(Bt, e), i && !t && o.a.createElement(At, e))
			}
			var Rt, Ft = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/index.m.less"),
				Gt = a.n(Ft);
			! function(e) {
				e[e.Badge = 0] = "Badge", e[e.Subscription = 1] = "Subscription"
			}(Rt || (Rt = {}));
			class Dt extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showTokenTransactionModal: !1
					}
				}
				componentDidMount() {
					this.props.viewEvent && this.props.sendEvent(this.props.viewEvent)
				}
				render() {
					const {
						correlationId: e,
						target: t,
						subreddit: a,
						username: s,
						onClose: r,
						onPaymentComplete: i,
						tokenDisplayConversion: n,
						tokenName: c
					} = this.props;
					if (!a) return null;
					const m = t.type === Rt.Badge ? t.product.price : t.dollarPrice,
						d = t.type === Rt.Badge ? void 0 : t.tokenPrice;
					if (this.state.showTokenTransactionModal && d) return o.a.createElement(rt.a, {
						correlationId: e,
						onClose: r,
						price: d,
						subredditId: a.id
					});
					const l = t.type === Rt.Subscription;
					return o.a.createElement("div", {
						className: Gt.a.container
					}, o.a.createElement(Ct, {
						purchaseType: t.type,
						subredditId: a.id,
						onClose: r
					}), o.a.createElement("div", {
						className: Gt.a.content
					}, o.a.createElement(pt, {
						className: Gt.a.cart,
						description: t.description(a),
						dollarPrice: m,
						monthly: l,
						subredditId: a.id,
						tokenPrice: d
					}), o.a.createElement(zt, {
						className: Gt.a.payment,
						correlationId: e,
						dollarPrice: m,
						monthly: l,
						onPayWithTokens: () => this.setState({
							showTokenTransactionModal: !0
						}),
						onPaymentComplete: i,
						subreddit: a,
						target: t,
						tokenDisplayConversion: n,
						tokenName: c,
						tokenPrice: d,
						trial: t.type === Rt.Subscription && t.trial,
						username: s
					}), o.a.createElement(kt, {
						className: Gt.a.footer,
						dollarPrice: m,
						purchaseType: t.type,
						subredditId: a.id,
						tokenDisplayConversion: n,
						tokenName: c,
						tokenPrice: d
					})))
				}
			}
			const Wt = Object(n.c)({
					subreddit: it.q,
					tokenDisplayConversion: (e, t) => {
						const a = Object(it.q)(e, t);
						return a ? Object(ct.o)(e, {
							subredditId: a.id
						}) : ""
					},
					tokenName: (e, t) => {
						const a = Object(it.q)(e, t);
						return a ? Object(ct.p)(e, {
							subredditId: a.id
						}) : ""
					}
				}),
				Ht = Object(r.b)(Wt),
				Zt = Object(it.t)(),
				Ut = Object(b.c)(Dt);
			var Vt = Object(nt.a)("spPremium", Object(ot.a)(Zt(Ht(Ut)))),
				qt = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Products/index.m.less"),
				Kt = a.n(qt);

			function Jt() {
				return (Jt = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var Xt = function(e, t) {
				var a = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (a[s[o]] = e[s[o]])
				}
				return a
			};

			function Qt(e) {
				const {
					dollarPrice: t,
					tokenPrice: a,
					trial: r
				} = e, i = Xt(e, ["dollarPrice", "tokenPrice", "trial"]);
				return o.a.createElement(Vt, Jt({}, i, {
					target: {
						dollarPrice: t,
						tokenPrice: a,
						trial: r,
						description: e => {
							const t = e && e.displayText || "",
								a = k.fbt._("{communityName} Subreddit Supporter", [k.fbt._param("communityName", t)], {
									hk: "3VL2SS"
								});
							return o.a.createElement(s.Fragment, null, o.a.createElement("img", {
								className: Kt.a.crown,
								src: "".concat(E.a.assetPath, "/img/memberships/paywall/fortnitebr/Crown.gif")
							}), a)
						},
						type: Rt.Subscription
					},
					viewEvent: t => Object.assign({
						source: "meta",
						action: "view",
						noun: "subscription_checkout_modal",
						correlationId: e.correlationId
					}, y.defaults(t), {
						subreddit: y.subreddit(t)
					}),
					onPaymentComplete: e.onClose
				}))
			}
			var Yt = a("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.tsx"),
				$t = a("./src/reddit/featureFlags/index.ts"),
				ea = a("./src/reddit/pages/meta/MembershipPaywallPage/PurchaseButton/index.m.less"),
				ta = a.n(ea);
			const {
				fbt: aa
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class sa extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						checkoutOpen: !1,
						username: void 0,
						usernameIsValid: !1
					}, this.handleUserNameChange = (e, t) => {
						this.setState({
							username: e,
							usernameIsValid: t
						})
					}, this.openCheckout = () => this.setState({
						checkoutOpen: !0
					}), this.closeCheckout = () => this.setState({
						checkoutOpen: !1
					})
				}
				componentDidUpdate(e) {
					this.props.checkoutOnLogin && !e.userIsLoggedIn && this.props.userIsLoggedIn && this.setState({
						checkoutOpen: !0
					})
				}
				render() {
					const {
						correlationId: e,
						customCrypto: t,
						meta: a,
						subredditId: s,
						userIsLoggedIn: r
					} = this.props, {
						canGift: i
					} = N(s), n = a.prices, c = n.usd, m = n.points;
					return o.a.createElement(o.a.Fragment, null, !r && i && o.a.createElement(Yt.a, {
						className: ta.a.recipient,
						onChange: this.handleUserNameChange
					}), o.a.createElement("button", {
						className: ta.a.checkout,
						disabled: i && !r && !this.state.usernameIsValid,
						onClick: r ? this.openCheckout : this.props.openLoginModal
					}, o.a.createElement("div", {
						className: ta.a.shimmer
					}), aa._("Become a {supporter-term}", [aa._param("supporter-term", a.member)], {
						hk: "3TcAfC"
					})), o.a.createElement(at.a, {
						className: ta.a.price,
						dollarPrice: c,
						tokenPrice: m,
						monthly: !0,
						subredditId: s
					}), this.state.checkoutOpen ? t ? o.a.createElement(st.a, {
						withOverlay: !0,
						correlationId: e,
						subredditId: s,
						onClose: this.closeCheckout
					}) : o.a.createElement(Qt, {
						withOverlay: !0,
						correlationId: e,
						dollarPrice: c,
						tokenPrice: m,
						username: !r && this.state.usernameIsValid ? this.state.username : void 0,
						onClose: this.closeCheckout
					}) : null)
				}
			}
			const oa = Object(n.c)({
				meta: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(P.s)(e, a)
				},
				customCrypto: $t.d.spCustomCrypto,
				userIsLoggedIn: e => !!e.user.account
			});
			var ra = Object(r.b)(oa, e => ({
					openLoginModal: () => e(Object(tt.h)())
				}))(sa),
				ia = a("./src/reddit/pages/meta/MembershipPaywallPage/Intro/index.m.less"),
				na = a.n(ia);
			const ca = Object(n.c)({
				meta: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(P.s)(e, a.id)
				}
			});
			var ma, da, la = Object(r.b)(ca)((function(e) {
					const {
						className: t,
						correlationId: a,
						meta: s,
						subreddit: r
					} = e;
					return o.a.createElement("div", {
						className: Object(l.a)(t, na.a.container)
					}, o.a.createElement("div", {
						className: na.a.logo
					}, o.a.createElement(et.a, {
						className: na.a.radialHighlightInner
					}), o.a.createElement(et.a, {
						className: na.a.radialHighlightOuter
					}), o.a.createElement($e.a, {
						size: "large",
						subreddit: r
					})), o.a.createElement("header", {
						className: na.a.subscriptionName
					}, "r/", r.name, " ", s.memberAltPlural), o.a.createElement("article", {
						className: na.a.description
					}, k.fbt._("Support r/{communityName}. Get exclusive features in the community.", [k.fbt._param("communityName", r.name)], {
						hk: "13ofnK"
					})), o.a.createElement(ra, {
						checkoutOnLogin: !0,
						correlationId: a,
						subredditId: r.id
					}))
				})),
				pa = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				ua = a("./node_modules/react-motion/lib/react-motion.js"),
				ba = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/Testimonials/index.m.less"),
				ha = a.n(ba);
			! function(e) {
				e[e.Right = 110] = "Right", e[e.Center = 50] = "Center", e[e.Left = -110] = "Left"
			}(ma || (ma = {})),
			function(e) {
				e[e.Right = 0] = "Right", e[e.Center = -310] = "Center", e[e.Left = -620] = "Left"
			}(da || (da = {}));
			const ga = fe()([{
					badges: [{
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/jumping_crystal_40.png"
							}
						}
					}, {
						extra: {
							style: {
								color: "rgb(168, 132, 100)"
							}
						},
						media: {
							0: {
								"40x40": "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/custom/brother_bear_40x40.png"
							}
						}
					}],
					text: "This subreddit gives back to its community through giveaways and to give my share to make it happen is amazing. The badges and emotes that come with it are just the cherry on top.",
					username: "thebrotherbear"
				}, {
					badges: [{
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/jumping_crystal_40.png"
							}
						}
					}, {
						extra: {},
						media: {
							0: {
								"40x40": "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/top_karma_earners/points_top_1_week_40x40.png"
							}
						}
					}],
					text: "It feels nice to be able to give back to the community that I enjoy",
					username: "Ikcatcher"
				}, {
					badges: [{
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/Creator_40.png"
							}
						}
					}, {
						extra: {
							style: {
								color: "rgb(110, 108, 148)"
							}
						},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/21_rocket_40.png"
							}
						}
					}],
					text: "I love how r/FortNiteBR is such a positive, creative and supportive community!",
					username: "enzait"
				}, {
					badges: [{
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/Creator_40.png"
							}
						}
					}, {
						extra: {},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/achievement/frontpager_60.png"
							}
						}
					}, {
						extra: {
							style: {
								color: "rgb(187, 100, 204)"
							}
						},
						media: {
							0: {
								"40x40": "https://meta.redditmedia.com/img/fortnitebr/badges/14_dancefloor_40.png"
							}
						}
					}],
					text: "You'll always find the best of the best content on here, and you know it'll be from the original creator.",
					username: "Jachael123_"
				}]).slice(0, 3),
				fa = 1e4;
			class _a extends o.a.Component {
				constructor() {
					super(...arguments), this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.props.testimonies.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, fa)
					}
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, fa)
				}
				componentWillUnmount() {
					this.timeoutRef && clearInterval(this.timeoutRef)
				}
				render() {
					const {
						className: e,
						flatDisplay: t,
						testimonies: a
					} = this.props, {
						currentSlideIdx: r
					} = this.state;
					return o.a.createElement("div", {
						className: Object(l.a)(e, ha.a.container)
					}, o.a.createElement(ua.TransitionMotion, {
						defaultStyles: [{
							key: "slide-0",
							data: {
								index: 0
							},
							style: {
								left: ma.Center,
								marginLeft: da.Center,
								opacity: 1
							}
						}],
						styles: [{
							key: "slide-".concat(r),
							data: {
								index: r
							},
							style: {
								left: Object(ua.spring)(ma.Center),
								marginLeft: Object(ua.spring)(da.Center),
								opacity: Object(ua.spring)(1)
							}
						}],
						willEnter: () => ({
							left: ma.Right,
							marginLeft: da.Right,
							opacity: 0
						}),
						willLeave: () => ({
							left: Object(ua.spring)(ma.Left),
							marginLeft: Object(ua.spring)(da.Left),
							opacity: Object(ua.spring)(0)
						})
					}, e => o.a.createElement(s.Fragment, null, e.map(e => {
						const r = a[e.data.index],
							i = r.badges.map(e => {
								const {
									url2x: t
								} = Object(w.b)(20, 20, e);
								return t
							}),
							n = he()(r.badges),
							c = n && n.extra && n.extra.style && n.extra.style.color;
						return o.a.createElement(s.Fragment, null, o.a.createElement("div", {
							className: ha.a.testimony,
							key: e.key,
							style: {
								left: "".concat(e.style.left, "%"),
								marginLeft: "".concat(e.style.marginLeft, "px")
							},
							onClick: this.gotoNextSlide
						}, o.a.createElement("svg", {
							className: Object(l.a)(ha.a.testimonyOutline, {
								[ha.a.testimonyOutlineFlat]: !!t
							}),
							viewBox: " 0 0 619 243",
							xmlns: "http://www.w3.org/2000/svg"
						}, o.a.createElement("path", {
							d: "M78.9989 58.4826C70.5322 59.7119 62.7479 63.9147 58.4403 71.3066C53.9012 79.0958 49 90.4192 49 103.001C49 116.034 51.9394 127.873 54.5482 135.813C56.7437 142.495 62.1609 147.369 68.9713 149.128C85.4673 153.389 123.116 160.96 193.436 165.111C196.937 168.49 198.713 173.771 198.713 181.427C198.713 181.427 201.841 181.739 207 174.001C208.968 171.049 209.995 168.285 210.517 166.018C214.102 166.188 217.762 166.349 221.5 166.501C325.757 170.721 486.315 161.046 533.817 157.928C542.454 157.361 550.345 152.8 554.249 145.074C559.465 134.75 566.176 118.719 568.5 101.001C570.389 86.6005 567.819 74.8754 564.58 66.5092C560.681 56.4386 550.794 50.9089 540.11 49.3352C504.988 44.1618 415.934 33.7517 297.5 39.5005C179.641 45.2214 106.881 54.4345 78.9989 58.4826Z"
						}), o.a.createElement("path", {
							d: "M58.4403 71.3066L57.5763 70.8031L58.4403 71.3066ZM78.9989 58.4826L79.1425 59.4723L78.9989 58.4826ZM54.5482 135.813L55.4982 135.501L54.5482 135.813ZM68.9713 149.128L69.2213 148.16L68.9713 149.128ZM193.436 165.111L194.13 164.392L193.864 164.135L193.495 164.113L193.436 165.111ZM198.713 181.427H197.713V182.332L198.614 182.422L198.713 181.427ZM207 174.001L207.832 174.555L207 174.001ZM210.517 166.018L210.564 165.02L209.73 164.98L209.542 165.794L210.517 166.018ZM221.5 166.501L221.46 167.5L221.5 166.501ZM533.817 157.928L533.882 158.926L533.817 157.928ZM554.249 145.074L555.141 145.525L554.249 145.074ZM568.5 101.001L567.508 100.87L568.5 101.001ZM564.58 66.5092L565.512 66.1482L564.58 66.5092ZM540.11 49.3352L539.964 50.3245L540.11 49.3352ZM297.5 39.5005L297.548 40.4993L297.5 39.5005ZM59.3043 71.8101C63.4213 64.7452 70.8961 60.6695 79.1425 59.4723L78.8552 57.493C70.1682 58.7542 62.0745 63.0841 57.5763 70.8031L59.3043 71.8101ZM50 103.001C50 90.6676 54.8096 79.523 59.3043 71.8101L57.5763 70.8031C52.9927 78.6685 48 90.1709 48 103.001H50ZM55.4982 135.501C52.9092 127.621 50 115.892 50 103.001H48C48 116.176 50.9697 128.125 53.5981 136.125L55.4982 135.501ZM69.2213 148.16C62.7244 146.482 57.5822 141.844 55.4982 135.501L53.5981 136.125C55.9052 143.147 61.5974 148.257 68.7212 150.096L69.2213 148.16ZM193.495 164.113C123.223 159.964 85.6407 152.401 69.2213 148.16L68.7212 150.096C85.2939 154.377 123.009 161.955 193.377 166.11L193.495 164.113ZM199.713 181.427C199.713 173.637 197.907 168.036 194.13 164.392L192.742 165.831C195.967 168.943 197.713 173.906 197.713 181.427H199.713ZM206.168 173.446C203.639 177.239 201.662 178.976 200.393 179.767C199.761 180.161 199.306 180.319 199.044 180.384C198.913 180.416 198.827 180.425 198.789 180.428C198.77 180.429 198.762 180.429 198.766 180.429C198.768 180.429 198.773 180.429 198.781 180.429C198.784 180.43 198.789 180.43 198.794 180.43C198.797 180.431 198.8 180.431 198.803 180.431C198.804 180.431 198.806 180.431 198.808 180.431C198.808 180.432 198.81 180.432 198.81 180.432C198.811 180.432 198.812 180.432 198.713 181.427C198.614 182.422 198.615 182.422 198.617 182.422C198.617 182.422 198.618 182.422 198.619 182.423C198.621 182.423 198.623 182.423 198.625 182.423C198.628 182.423 198.632 182.424 198.637 182.424C198.645 182.425 198.654 182.425 198.664 182.426C198.684 182.427 198.707 182.428 198.733 182.428C198.785 182.429 198.85 182.428 198.926 182.423C199.079 182.412 199.278 182.385 199.521 182.326C200.006 182.207 200.656 181.96 201.451 181.464C203.035 180.477 205.202 178.5 207.832 174.555L206.168 173.446ZM209.542 165.794C209.045 167.952 208.063 170.603 206.168 173.446L207.832 174.555C209.872 171.495 210.944 168.618 211.491 166.243L209.542 165.794ZM221.54 165.501C217.805 165.35 214.147 165.189 210.564 165.02L210.47 167.017C214.057 167.187 217.72 167.348 221.46 167.5L221.54 165.501ZM533.751 156.93C486.241 160.048 325.736 169.72 221.54 165.501L221.46 167.5C325.779 171.723 486.388 162.043 533.882 158.926L533.751 156.93ZM553.356 144.623C549.634 151.989 542.087 156.383 533.751 156.93L533.882 158.926C542.82 158.339 551.056 153.611 555.141 145.525L553.356 144.623ZM567.508 100.87C565.205 118.433 558.547 134.351 553.356 144.623L555.141 145.525C560.384 135.149 567.147 119.004 569.492 101.131L567.508 100.87ZM563.647 66.8703C566.836 75.1069 569.372 86.6627 567.508 100.87L569.492 101.131C571.405 86.5382 568.802 74.6438 565.512 66.1482L563.647 66.8703ZM539.964 50.3245C550.439 51.8675 559.924 57.2547 563.647 66.8703L565.512 66.1482C561.437 55.6226 551.148 49.9503 540.256 48.3459L539.964 50.3245ZM297.548 40.4993C415.903 34.7544 504.889 45.1581 539.964 50.3245L540.256 48.3459C505.086 43.1655 415.966 32.749 297.452 38.5017L297.548 40.4993ZM79.1425 59.4723C106.993 55.4287 179.721 46.2187 297.548 40.4993L297.452 38.5017C179.56 44.2242 106.769 53.4403 78.8552 57.493L79.1425 59.4723Z",
							fill: "#9F68D4",
							"fill-opacity": "0.1"
						})), o.a.createElement("div", {
							className: ha.a.testimonyText
						}, r.text)), o.a.createElement("div", {
							className: ha.a.user,
							key: "user-".concat(e.key),
							style: {
								opacity: e.style.opacity
							}
						}, i.map(e => o.a.createElement("img", {
							className: ha.a.badge,
							src: e
						})), o.a.createElement("div", {
							className: ha.a.username,
							style: {
								color: c
							}
						}, "u/".concat(r.username))))
					}))), o.a.createElement("div", {
						className: ha.a.indicators
					}, a.map((e, t) => o.a.createElement("div", {
						className: Object(l.a)(ha.a.indicator, {
							[ha.a.indicatorSelected]: t === r
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))
				}
			}
			_a.defaultProps = {
				testimonies: ga
			};
			var ya = a("./src/reddit/pages/meta/MembershipPaywallPage/Thanks/index.m.less"),
				xa = a.n(ya);
			const ka = Object(n.c)({
				meta: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(P.s)(e, a.id)
				}
			});
			var Ea = Object(r.b)(ka)((function(e) {
					const {
						className: t,
						correlationId: a,
						meta: s,
						subreddit: r
					} = e, i = N(r.id);
					return o.a.createElement("article", {
						className: Object(l.a)(xa.a.container, t)
					}, i.communityThanks && o.a.createElement("header", {
						className: xa.a.title
					}, k.fbt._("The Community Thanks You", null, {
						hk: "28CsBt"
					})), i.testimonials && o.a.createElement(_a, {
						flatDisplay: !0
					}), i.testimonials && o.a.createElement("div", {
						className: xa.a.divider
					}), o.a.createElement("footer", {
						className: xa.a.footer
					}, o.a.createElement($e.a, {
						className: xa.a.brand,
						size: "large",
						subreddit: r
					}), o.a.createElement("div", {
						className: xa.a.cta
					}, o.a.createElement("div", {
						className: xa.a.description
					}, k.fbt._("Support r/{communityName} with a {membership}", [k.fbt._param("communityName", r.name), k.fbt._param("membership", s.membership)], {
						hk: "3M1a22"
					})), o.a.createElement("div", {
						className: xa.a.benefits
					}, i.styleBadges && o.a.createElement("div", {
						className: xa.a.benefit
					}, o.a.createElement(pa.a, {
						className: xa.a.check
					}), "Add a badge and color to your username"), i.emotes && o.a.createElement("div", {
						className: xa.a.benefit
					}, o.a.createElement(pa.a, {
						className: xa.a.check
					}), "Get access to premium animated emotes"), i.gifs && o.a.createElement("div", {
						className: xa.a.benefit
					}, o.a.createElement(pa.a, {
						className: xa.a.check
					}), "Add GIFs to your comments")), o.a.createElement(ra, {
						subredditId: r.id,
						correlationId: a
					}))))
				})),
				wa = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/index.m.less"),
				ja = a.n(wa),
				va = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx"),
				Ca = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Header/index.m.less"),
				Na = a.n(Ca);
			const Pa = [800, 1200];

			function Oa(e) {
				const {
					className: t,
					subreddit: a
				} = e;
				return o.a.createElement("header", {
					className: Object(l.a)(Na.a.container, t)
				}, o.a.createElement("div", {
					className: Na.a.tag
				}, k.fbt._("benefits", null, {
					hk: "3HAYfG"
				})), o.a.createElement("div", {
					className: Na.a.title
				}, k.fbt._("What do you get?", null, {
					hk: "3PyKKB"
				})), N(a.id).animations && o.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/a1hxn4/the_moment_my_son_discovered_that_his_skin/",
					target: "_blank"
				}, o.a.createElement(S.a, {
					scrollRange: Pa
				}, e => o.a.createElement("img", {
					className: Na.a.chickenRightArm,
					src: Object(T.a)(a, "chicken_right_arm@2x.png"),
					style: e
				})), o.a.createElement("img", {
					className: Na.a.chickenTorso,
					src: Object(T.a)(a, "chicken_torso@2x.png")
				}), o.a.createElement(S.a, {
					scrollRange: Pa
				}, e => o.a.createElement("img", {
					className: Na.a.chickenLeftArm,
					src: Object(T.a)(a, "chicken_left_arm@2x.png"),
					style: e
				})), o.a.createElement("img", {
					className: Na.a.chickenLeftShoulder,
					src: Object(T.a)(a, "chicken_left_shoulder@2x.png")
				}), o.a.createElement("img", {
					className: Na.a.chickenHead,
					src: Object(T.a)(a, "chicken_head@2x.png")
				})))
			}
			var Ia = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Tip/index.m.less"),
				Sa = a.n(Ia);

			function Ma(e) {
				return o.a.createElement("div", {
					className: Object(l.a)(e.className, Sa.a.container)
				}, o.a.createElement("div", {
					className: Sa.a.circle
				}, e.index), o.a.createElement("div", {
					className: Sa.a.circleShimmer
				}), o.a.createElement("div", {
					className: Sa.a.tooltipWrapper
				}, o.a.createElement("svg", {
					className: Sa.a.tooltip,
					viewBox: "0 0 140 60",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M8 0C3.58172 0 0 3.58172 0 8V42C0 46.4183 3.58172 50 8 50H60.3934L69.6066 59.2132L78.8198 50H132C136.418 50 140 46.4183 140 42V8C140 3.58172 136.418 0 132 0H8Z"
				})), o.a.createElement("div", {
					className: Sa.a.tooltipText
				}, e.text)))
			}
			var Ta = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/index.m.less"),
				La = a.n(Ta);

			function Ba(e) {
				const t = Object(T.a)(e.subreddit, "what-do-you-get.png");
				return o.a.createElement("article", {
					className: Object(l.a)(La.a.container, e.className)
				}, o.a.createElement(Oa, {
					subreddit: e.subreddit
				}), o.a.createElement("div", {
					className: La.a.content
				}, o.a.createElement("img", {
					className: La.a.img,
					src: t
				}), o.a.createElement("img", {
					className: La.a.emoji,
					src: "https://meta.redditmedia.com/img/fortnitebr/emotes/oof-2x.gif"
				}), o.a.createElement("img", {
					className: La.a.gif,
					src: "http://giphygifs.s3.amazonaws.com/media/HX3lSnGXZnaWk/giphy.gif"
				}), o.a.createElement(Ma, {
					className: La.a.tip1,
					index: 1,
					text: k.fbt._("Get up to 3 badges", null, {
						hk: "2ftguA"
					})
				}), o.a.createElement(Ma, {
					className: La.a.tip2,
					index: 2,
					text: k.fbt._("Use animated emojis in comments", null, {
						hk: "1teakj"
					})
				}), o.a.createElement(Ma, {
					className: La.a.tip3,
					index: 3,
					text: k.fbt._("Embed GIF directly in your comments", null, {
						hk: "1fLSUy"
					})
				})), N(e.subreddit.id).animations && o.a.createElement(va.a, {
					className: La.a.footer,
					subreddit: e.subreddit
				}))
			}

			function Aa(e) {
				const t = N(e.subreddit.id),
					a = t.styleBadges && t.emotes && t.gifs;
				return o.a.createElement("article", {
					className: Object(l.a)(e.className, ja.a.container)
				}, t.testimonials && o.a.createElement(h, {
					fireOnce: !0,
					onEnter: t => Object.assign({
						source: "meta",
						action: "view",
						noun: "landing_page_2_testimonials",
						correlationId: e.correlationId
					}, y.defaults(t), {
						subreddit: y.subreddit(t)
					})
				}, o.a.createElement(_a, null)), a && o.a.createElement(h, {
					fireOnce: !0,
					onEnter: t => Object.assign({
						source: "meta",
						action: "view",
						noun: "landing_page_3_what_do_you_get",
						correlationId: e.correlationId
					}, y.defaults(t), {
						subreddit: y.subreddit(t)
					})
				}, o.a.createElement(Ba, {
					subreddit: e.subreddit
				})))
			}
			var za = a("./src/reddit/pages/meta/MembershipPaywallPage/index.m.less"),
				Ra = a.n(za);
			class Fa extends o.a.Component {
				constructor(e) {
					super(e);
					const t = Object(p.a)(location.search);
					this.correlationId = t && t.get("corr") || m()()
				}
				componentDidMount() {
					this.props.sendEvent(e => Object.assign({
						source: "meta",
						action: "view",
						noun: "subscription_learn_more_page",
						correlationId: this.correlationId
					}, y.defaults(e), {
						subreddit: y.subreddit(e)
					}))
				}
				render() {
					const {
						isOverlay: e,
						subreddit: t
					} = this.props;
					return t ? g.a.has(t.name.toLowerCase()) ? o.a.createElement("div", {
						className: Object(l.a)(Ra.a.container, {
							[Ra.a.notOverlay]: !e,
							[Ra.a.overlay]: e
						})
					}, o.a.createElement(h, {
						fireOnce: !0,
						onEnter: e => Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_1_intro",
							correlationId: this.correlationId
						}, y.defaults(e), {
							subreddit: y.subreddit(e)
						})
					}, o.a.createElement(la, {
						correlationId: this.correlationId,
						subreddit: t
					})), o.a.createElement(Aa, {
						className: Ra.a.whatDoYouGet,
						correlationId: this.correlationId,
						subreddit: t
					}), o.a.createElement(We, {
						className: Ra.a.benefits,
						correlationId: this.correlationId,
						subreddit: t
					}), o.a.createElement(h, {
						fireOnce: !0,
						onEnter: e => Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_10_community_thanks",
							correlationId: this.correlationId
						}, y.defaults(e), {
							subreddit: y.subreddit(e)
						})
					}, o.a.createElement(Ea, {
						className: Ra.a.thanks,
						correlationId: this.correlationId,
						subreddit: t
					})), o.a.createElement(h, {
						fireOnce: !0,
						onEnter: e => Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_11_faq",
							correlationId: this.correlationId
						}, y.defaults(e), {
							subreddit: y.subreddit(e)
						})
					}, o.a.createElement(Ke, {
						className: Ra.a.faq,
						subreddit: t
					})), o.a.createElement(h, {
						fireOnce: !0,
						onEnter: e => Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_12_footer",
							correlationId: this.correlationId
						}, y.defaults(e), {
							subreddit: y.subreddit(e)
						})
					}, o.a.createElement(Ye, {
						className: Ra.a.footer,
						subreddit: t
					}))) : o.a.createElement(i.c, {
						to: "/r/".concat(t.name)
					}) : null
				}
			}
			const Ga = Object(n.c)({
				currentUser: x.i,
				isOverlay: f.i,
				subreddit: (e, t) => {
					let {
						match: a
					} = t;
					const s = a.params.subredditName;
					if (s) return Object(_.A)(e, {
						subredditName: s
					})
				}
			});
			var Da;
			t.default = Object(b.c)(Object(r.b)(Ga)((Da = Fa, class extends s.Component {
				constructor(e) {
					super(e), this.state = {
						mounted: !1
					}
				}
				componentDidMount() {
					this.setState({
						mounted: !0
					})
				}
				render() {
					return this.state.mounted ? o.a.createElement(Da, this.props) : null
				}
			})))
		}
	}
]);
//# sourceMappingURL=MembershipPaywallPage.d387bd6e899b38560420.js.map