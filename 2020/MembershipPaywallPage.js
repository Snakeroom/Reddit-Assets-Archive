// https://www.redditstatic.com/desktop2x/MembershipPaywallPage.9890ce2ece9ecc09025b.js
// Retrieved at 10/22/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MembershipPaywallPage"], {
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./src/lib/currency/cleanNumber/index.ts");

			function r(e, t) {
				const a = Object(s.a)(e),
					r = parseInt(a) / 100;
				return Math.floor(r) !== r || t ? r.toFixed(2) : String(r)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			}));
			a("./node_modules/core-js/modules/es6.regexp.replace.js");

			function s(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return s
			})), a.d(t, "b", (function() {
				return r
			}));
			const s = e => {
					let t = 0,
						a = 0;
					const s = [0];
					for (const r of e) t++, a += r.length, s[t] = a;
					return s
				},
				r = e => {
					let t = 0,
						a = 0;
					const s = [];
					for (const r of e) {
						for (let e = 0; e < r.length; e++) s[a] = t, a++;
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
				r = a("./node_modules/react/index.js"),
				n = a.n(r),
				o = a("./src/higherOrderComponents/asModal/index.tsx"),
				i = a("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = a("./src/reddit/controls/TextButton/index.tsx"),
				m = a("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = a("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				l = a.n(d);
			const u = e => e.preventDefault();
			t.a = Object(o.a)(e => n.a.createElement(i.d, null, n.a.createElement(i.h, null, n.a.createElement(m.a, null, n.a.createElement(i.p, null, e.headerText || s.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), n.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, n.a.createElement(i.b, null)))), n.a.createElement(i.k, null, n.a.createElement(i.o, {
				className: l.a.ModalText
			}, e.modalText)), n.a.createElement(i.f, null, !e.hideCancelButton && n.a.createElement(i.a, {
				className: l.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || s.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), n.a.createElement(i.t, {
				className: l.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			const {
				fbt: n
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function o(e) {
				let {
					className: t
				} = e;
				return r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: t
				}, n._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/Economics/Confetti/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_22MTLJBZK8cANpC_Qc0W8s",
				piece: "_3RfPsEAbZKkVHvjLqOq0mZ"
			}
		},
		"./src/reddit/components/Economics/Price/index.m.less": function(e, t, a) {
			e.exports = {
				price: "_2ZOGQHalmPN89FqiioxqoW",
				token: "_2PNHBi0pHlP4y_f4W9yfPw"
			}
		},
		"./src/reddit/components/Economics/Price/index.tsx": function(e, t, a) {
			"use strict";
			var s, r = a("./node_modules/react/index.js"),
				n = a.n(r),
				o = a("./node_modules/react-redux/es/index.js"),
				i = a("./node_modules/reselect/es/index.js"),
				c = a("./src/lib/classNames/index.ts"),
				m = a("./src/lib/currency/centsToDollars/index.ts"),
				d = a("./src/lib/prettyPrintNumber/index.ts"),
				l = a("./src/reddit/components/Governance/Token/index.tsx"),
				u = a("./src/reddit/helpers/governance/tokens.ts"),
				p = a("./src/reddit/selectors/gov.ts"),
				h = a("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(s || (s = {}));
			const b = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return h.fbt._("{price}/mo", [h.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				g = (e, t) => {
					if (e) switch (t) {
						case s.Monthly:
							return h.fbt._("{price} / month", [h.fbt._param("price", e)], {
								hk: "4ugXuk"
							});
						default:
							return e
					}
				};
			var f = a("./src/reddit/components/Economics/Price/index.m.less"),
				_ = a.n(f);
			const {
				fbt: x
			} = a("./node_modules/fbt/lib/FbtPublic.js"), y = e => {
				let {
					subredditId: t,
					pointPrice: a
				} = e;
				return n.a.createElement(n.a.Fragment, null, n.a.createElement(l.a, {
					className: _.a.token,
					subredditId: t
				}), a)
			}, E = Object(i.c)({
				tokenDisplayConversion: p.o,
				tokenName: p.p
			});
			t.a = Object(o.b)(E)(e => {
				const {
					className: t,
					hideTokenName: a,
					monthly: r,
					subredditId: o,
					tokenDisplayConversion: i,
					tokenName: l
				} = e, p = e.dollarPrice && "$".concat(Object(m.a)(e.dollarPrice, !0)), h = e.tokenPrice && Object(d.a)(Object(u.b)(e.tokenPrice, i)) + (a ? "" : " " + l);
				if (!p && !h) return null;
				const f = r ? s.Monthly : s.Once;
				return n.a.createElement("span", {
					className: Object(c.a)(t, _.a.price)
				}, p && h ? x._("{dollar-price} or {point-price}", [x._param("dollar-price", b(p, f)), x._param("point-price", n.a.createElement(y, {
					subredditId: o,
					pointPrice: b(h, f)
				}))], {
					hk: "2Gif0l"
				}) : p ? g(p, f) : h ? n.a.createElement(y, {
					subredditId: o,
					pointPrice: g(h, f)
				}) : null)
			})
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
				r = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/governance/errorToast.ts"),
				c = a("./src/reddit/components/TrackingHelper/index.tsx"),
				m = a("./src/reddit/contexts/ApiContext.tsx"),
				d = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = a("./src/reddit/endpoints/governance/products/badges.ts"),
				u = a("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				p = a("./src/reddit/selectors/telemetry.ts"),
				h = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less"),
				b = a.n(h);
			const g = "subreddit-premium-purchase-braintree";
			class f extends r.a.Component {
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
						Object(u.a)({
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
								}), this.props.sendEvent(e => Object.assign(Object.assign({
									source: "meta",
									action: "click",
									noun: "badge_gallery_paypal_purchase",
									correlationId: this.props.correlationId
								}, p.defaults(e)), {
									subreddit: p.subreddit(e)
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
					return r.a.createElement("div", {
						className: Object(o.a)(this.props.className, b.a.container)
					}, r.a.createElement("div", {
						className: Object(o.a)(b.a.button, {
							[b.a.loading]: this.state.loading,
							[b.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && r.a.createElement(d.a, {
						className: b.a.loadingIcon,
						sizePx: 16
					}))
				}
			}
			t.a = Object(m.b)(Object(n.b)(void 0, (e, t) => {
				let {
					subreddit: a
				} = t;
				return {
					onError: t => Object(i.a)(e, t)
				}
			})(Object(c.c)(f)))
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/higherOrderComponents/makeAsync.tsx");
			const r = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => a.e("SubredditPremiumBlockchainCheckoutModal").then(a.bind(null, "./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.tsx")).then(e => e.default)
			});
			t.a = r
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
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/PurchaseButton/index.m.less": function(e, t, a) {
			e.exports = {
				alreadyPurchased: "_3kTN5B6iN8oIgydXPz0rqC",
				button: "MDdpUCHANWQuqaVGoEpVs",
				buttonWithoutCards: "_3VR87fo8ZjKY1XoyNqNTvE",
				container: "_3tReAPan_-M4AovA4DBue1",
				loading: "_2jk-SZSEsufLuRcA5wvyng",
				loadingIcon: "_3pQ_MVZfUDaXtcf576C9k7",
				loginButton: "_3rTymlG8MJZxRgjRsbeSOS",
				loginMessage: "_3CpWRzyK4_woOmAW99eEDr",
				submitting: "_322vbjtCZwKRqc4NzIonTv"
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
				notEnoughTokens: "_3UP0wAWXgMEZmV9oytBfkm",
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
		"./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/fastdom/index.ts"),
				i = a("./src/reddit/components/Economics/Confetti/index.m.less"),
				c = a.n(i);
			const m = 250,
				d = 100;
			class l extends r.a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.numPieces = 0, this.setEl = e => {
						this.el = e, this.props.letItRain && this.renderConfetti()
					}, this.renderConfetti = () => {
						const e = this.el;
						if (!e) return;
						e.classList.add(c.a.container);
						const t = e.offsetWidth,
							a = e.offsetHeight;
						for (let s = 0; s < d; s++) this.createPiece(t, a);
						for (let s = 0; s < m - d; s++) window.setTimeout(() => this.createPiece(t, a), 1e4 * s / (m - d))
					}, this.createPiece = (e, t) => {
						o.a.write(() => {
							if (!this.el) return;
							const a = document.createElement("div"),
								s = (6 * Math.random() + 4) * t / 1e3;
							a.className = c.a.piece, a.style.width = 4 * Math.random() + 3 + "px", a.style.height = 6 * Math.random() + 3 + "px", a.style.transform = "rotate(".concat(360 * Math.random(), "deg)"), this.el.appendChild(a), this.restartPiece(a, s, t, e), this.numPieces++
						})
					}, this.restartPiece = (e, t, a, s) => {
						if (this.el) {
							if (!this.props.letItRain) return e.parentNode.removeChild(e), this.numPieces--, void(this.numPieces || this.el.classList.remove(c.a.container));
							o.a.write(() => {
								e.style.transition = "", e.style.top = "0", e.style.left = Math.random() * s + "px", e.offsetHeight, e.style.transition = "top ".concat(t, "s ease-out, left ").concat(t, "s ease-out")
							}), setTimeout(() => {
								o.a.write(() => {
									e.style.top = a + "px", e.style.left = parseInt(e.style.left) + (400 * Math.random() - 200) + "px"
								})
							}, 0), setTimeout(() => this.restartPiece(e, t, a, s), 1e3 * t)
						}
					}
				}
				shouldComponentUpdate(e) {
					return e.letItRain && !this.props.letItRain && setTimeout(() => this.renderConfetti(), 0), !1
				}
				componentWillUnmount() {
					this.el = void 0
				}
				render() {
					return r.a.createElement("div", {
						ref: e => this.setEl(e),
						"aria-hidden": "true"
					})
				}
			}
			var u = a("./src/reddit/featureFlags/component.tsx"),
				p = a("./src/reddit/hooks/useSafeState.ts"),
				h = a("./src/reddit/selectors/economics.ts");
			t.a = Object(u.a)("spSpecialMemberships", (function(e) {
				const t = Object(s.useRef)(!0),
					[a, o] = Object(p.a)(!1, t),
					i = Object(n.d)(t => Object(h.x)(t, e.subredditId)),
					c = Object(s.useRef)(i);
				return Object(s.useEffect)(() => () => {
					t.current = !1
				}, []), Object(s.useEffect)(() => {
					c.current === h.a.NotSubscribed && i === h.a.Subscribed && (o(!0), setTimeout(() => {
						o(!1)
					}, 1e4)), c.current = i
				}, [i]), i === h.a.Subscribed ? r.a.createElement(l, {
					letItRain: a
				}) : null
			}))
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
				return p
			}));
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Bling/index.tsx"),
				i = a("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				c = a("./src/reddit/icons/svgs/Crown/index.tsx"),
				m = a("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				d = a("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less"),
				l = a.n(d);
			const u = {
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

			function p(e) {
				const t = e.subreddit && (e.subreddit.communityIcon || e.subreddit.icon.url),
					a = u[e.size || "regular"],
					s = e.subreddit && e.subreddit.primaryColor;
				return r.a.createElement("div", {
					className: Object(n.a)(a.container, e.className)
				}, e.subreddit ? r.a.createElement("img", {
					className: a.crownImg,
					src: Object(m.a)(e.subreddit, "Crown.gif")
				}) : r.a.createElement(c.a, {
					className: a.crown
				}), r.a.createElement(o.a, {
					className: a.bling1
				}), r.a.createElement(o.a, {
					className: a.bling2
				}), r.a.createElement(o.a, {
					className: a.bling3
				}), t ? r.a.createElement("img", {
					className: a.icon,
					src: t,
					style: {
						backgroundColor: s
					}
				}) : r.a.createElement(i.a, {
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
				r = a.n(s),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				i = a("./src/reddit/components/FocusableContent/index.m.less"),
				c = a.n(i);
			t.a = o.a.wrapped(e => r.a.createElement("div", {
				className: Object(n.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, a) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				i = a("./src/config.ts"),
				c = a("./src/lib/classNames/index.ts"),
				m = a("./src/reddit/selectors/gov.ts"),
				d = a("./src/reddit/components/Governance/Token/index.m.less"),
				l = a.n(d);
			const u = Object(o.c)({
				tokenSymbol: m.q
			});
			t.a = Object(n.b)(u)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					a = "".concat(i.a.assetPath, "/").concat(t);
				if (e.grey && a.endsWith(".svg")) {
					const t = "url(".concat(a, ") center/cover");
					return r.a.createElement("div", {
						className: Object(c.a)(l.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return r.a.createElement("img", {
					className: e.className,
					src: a
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/async.ts": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(s.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-SubscriptionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!a.m[t]
				},
				importAsync: () => Promise.all([a.e("vendors~CollectionCommentsPage~CommentsPage~Subreddit~SubredditWiki~reddit-components-Governance-Tra~2c7f90aa"), a.e("vendors~CommunityPointsLearnMore~Settings~reddit-components-Governance-TransactionModals-ClaimPoints~e74e7afb"), a.e("vendors~CryptoLibEthers~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-compo~89877e6b"), a.e("vendors~reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-components-Governance~231ed33d"), a.e("vendors~GovernanceTransferPointsModal~reddit-components-Governance-TransactionModals-ClaimPointsModa~b2d0d5d1"), a.e("reddit-components-Governance-TransactionModals-ClaimPointsModal~reddit-components-Governance-Transac~bbc9464a"), a.e("reddit-components-Governance-TransactionModals-SubscriptionModal")]).then(a.bind(null, "./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx")),
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
			t.a = r
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return y
			})), a.d(t, "a", (function() {
				return E
			}));
			var s = a("./node_modules/lodash/debounce.js"),
				r = a.n(s),
				n = a("./node_modules/react/index.js"),
				o = a.n(n),
				i = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				m = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/actions/usernameAvailable.ts"),
				l = a("./src/reddit/constants/colors.ts"),
				u = a("./src/reddit/controls/FormFields/index.tsx"),
				p = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				b = a("./src/reddit/icons/svgs/Info/index.tsx"),
				g = a("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				f = a("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				_ = a.n(f),
				x = a("./node_modules/fbt/lib/FbtPublic.js");
			const y = 2,
				E = 20;
			var v;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(v || (v = {}));
			class k extends o.a.PureComponent {
				constructor(e) {
					super(e), this.handleInputChange = e => {
						const t = e.currentTarget.value;
						t.length > y && this.props.onCheckUsername(t), this.setState({
							username: t
						})
					}, this.usernameValidity = e => {
						if (e && e.length > y) {
							switch (this.props.usernameAvailability[e]) {
								case d.b.Available:
									return v.Invalid;
								case d.b.Error:
									return v.Error;
								case d.b.Unavailable:
									return v.Valid;
								default:
									return v.Searching
							}
						}
						return v.Empty
					}, this.state = {
						username: e.initialRecipient || ""
					}, e.initialRecipient && e.onCheckUsername(e.initialRecipient)
				}
				componentDidMount() {
					this.informParentOfNameChange()
				}
				componentDidUpdate() {
					this.informParentOfNameChange()
				}
				informParentOfNameChange() {
					if (this.props.onChange) {
						const e = this.state.username;
						this.props.onChange(e, this.usernameValidity(e) === v.Valid)
					}
				}
				render() {
					const e = this.usernameValidity(this.state.username);
					return o.a.createElement("div", {
						className: Object(m.a)(_.a.container, this.props.className)
					}, o.a.createElement(u.c, {
						redditStyle: !0,
						className: _.a.input,
						label: x.fbt._("username", null, {
							hk: "2f1L4u"
						}),
						max: E,
						style: {
							borderColor: j(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case v.Error:
								return o.a.createElement(b.a, {
									className: _.a.icon,
									style: {
										fill: l.a.notice
									}
								});
							case v.Invalid:
								return o.a.createElement(g.a, {
									className: _.a.icon,
									style: {
										fill: l.a.warning
									}
								});
							case v.Searching:
								return o.a.createElement(p.a, {
									className: _.a.loadingIcon,
									sizePx: 8
								});
							case v.Valid:
								return o.a.createElement(h.a, {
									className: _.a.icon
								});
							default:
								return null
						}
					}(e), o.a.createElement("div", {
						className: _.a.message,
						style: {
							color: j(e)
						}
					}, function(e) {
						switch (e) {
							case v.Error:
								return x.fbt._("Could not check that username. Are you sure it's correct?", null, {
									hk: "1sNHpI"
								});
							case v.Invalid:
								return x.fbt._("Cannot find this username.", null, {
									hk: "Imvaj"
								});
							default:
								return ""
						}
					}(e)))
				}
			}

			function j(e) {
				switch (e) {
					case v.Error:
						return l.a.notice;
					case v.Invalid:
						return l.a.warning
				}
			}
			const w = Object(c.c)({
				usernameAvailability: e => e.users.nameAvailable
			});
			t.c = Object(i.b)(w, e => ({
				onCheckUsername: r()(t => e(Object(d.f)({
					username: t
				})), 250)
			}))(k)
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_5K5Dse4tVw0RLIpFAoxVY",
				icon: "S4tWlXsmJThb2dkEK0a-e",
				input: "_3TjvTVtT0SSXGCca-2hLNM",
				loadingIcon: "_1096A0iAp25FzCsAQtWIIZ",
				message: "_16fPUwJjUXr_SaDDXYoAuJ"
			}
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
				r = a("./node_modules/lodash/memoize.js"),
				n = a.n(r),
				o = a("./node_modules/lodash/throttle.js"),
				i = a.n(o),
				c = a("./node_modules/react/index.js"),
				m = a.n(c),
				d = a("./node_modules/react-redux/es/index.js"),
				l = a("./node_modules/reselect/es/index.js"),
				u = a("./src/reddit/actions/toaster.ts"),
				p = a("./src/reddit/components/TrackingHelper/index.tsx"),
				h = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				b = a("./src/config.ts"),
				g = a("./src/lib/addQueryParams/index.ts");
			const f = "pg";

			function _(e) {
				return e.json().then(e => {
					if (200 !== e.meta.status) throw new Error("".concat(e.meta.status, " ").concat(e.meta.msg));
					return e
				})
			}
			var x = a("./src/reddit/icons/svgs/Close/index.tsx"),
				y = a("./src/reddit/models/Toast/index.ts"),
				E = a("./src/reddit/selectors/economics.ts"),
				v = a("./src/reddit/selectors/telemetry.ts"),
				k = a("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				j = a("./src/reddit/components/RichTextEditor/media/helpers.ts");
			a("./node_modules/core-js/modules/es6.regexp.split.js");
			let w;

			function C() {
				w || (w = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var N = a("./node_modules/lodash/debounce.js"),
				O = a.n(N),
				P = a("./src/lib/classNames/index.ts"),
				I = a("./src/reddit/icons/svgs/Search/index.tsx"),
				M = a("./src/reddit/selectors/user.ts"),
				S = a("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				T = a.n(S);
			const B = 400;
			class L extends m.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = O()(() => {
						this.props.onChange(this.state.query)
					}, B), this.focusOnInput = () => {
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
						className: Object(P.a)(T.a.searchBox, this.props.className)
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
							backgroundImage: "url(".concat(b.a.assetPath, "/img/memberships/").concat(a)
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const A = Object(l.c)({
				isNightMode: M.T
			});
			var R = Object(d.b)(A)(L),
				z = a("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				F = a.n(z);
			const G = 4,
				D = n()((function() {
					const e = Object(g.a)("https://api.giphy.com/v1/gifs/trending", {
						api_key: b.a.giphyApiKey,
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
					}, this.mounted = !1, this.onQueryChange = e => {
						this.props.sendEvent(t => Object.assign({
							source: "meta",
							action: "change",
							noun: "gif_tooltip_search",
							correlationId: this.props.correlationId,
							subreddit: this.props.subreddit.id ? v.subredditById(t, this.props.subreddit.id) : void 0,
							post: v.currentPost(t),
							search: {
								query: e
							}
						}, v.defaults(t))), this.setState({
							loading: !1,
							columns: [
								[],
								[]
							],
							columnHeights: [0, 0],
							query: e,
							nextOffset: 0
						}, () => this.loadMoreResults())
					}, this.onScroll = e => this.maybeLoadMoreResults(e.target), this.maybeLoadMoreResults = i()(e => {
						e.scrollHeight - e.scrollTop === e.clientHeight && this.loadMoreResults()
					}, 300), this.onResultClick = e => {
						this.props.sendEvent(e => {
							const t = v.defaults(e);
							return Object.assign(Object.assign({}, t), {
								source: "meta",
								action: "select",
								noun: "gif_tooltip_result",
								correlationId: this.props.correlationId,
								subreddit: this.props.subreddit.id ? v.subredditById(e, this.props.subreddit.id) : void 0,
								post: v.currentPost(e),
								actionInfo: Object.assign(Object.assign({}, t.actionInfo), {
									reason: this.props.hasGifProduct ? "has-gif-product" : "gif-train"
								})
							})
						});
						const t = this.props.editorState,
							a = Object(j.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), k.a.after);
						this.props.onChange(a), this.props.onClose()
					}
				}
				componentDidMount() {
					this.mounted = !0, !this.state.query && this.state.loading && this.loadTrendingGifs(), C()
				}
				componentWillUnmount() {
					this.mounted = !1
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
							return C(), w.then(t => {
								return !!e.split(" ").concat(e).find(e => -1 !== t.indexOf(e.toLowerCase()))
							}).catch(() => !1)
						}(a) || (this.setState({
							loading: !0
						}), function(e) {
							const t = Object(g.a)("https://api.giphy.com/v1/gifs/search", {
								api_key: b.a.giphyApiKey,
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
							this.mounted && (this.props.showErrorToast(s.fbt._("There was an error loading your GIF results. Please try again later.", null, {
								hk: "2OpI4a"
							})), this.setState({
								loading: !1
							}))
						})))
				}
				addGiphyResults(e) {
					if (!this.mounted) return;
					const t = [...this.state.columns],
						a = [...this.state.columnHeights];
					e.data.forEach(e => {
						if ("gif" !== e.type || "r" === e.rating || "pg-13" === e.rating) return;
						const s = this.getSimplifiedResult(e),
							r = a.reduce((e, t, s) => t < a[e] ? s : e, 0);
						t[r].push(s), a[r] += s.fixedWidthHeight + G
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
					}, m.a.createElement(R, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: F.a.searchBox
					}), m.a.createElement(x.a, {
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
					}, m.a.createElement(h.a, {
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
					return Object(E.w)(e, a.id)
				}
			});
			t.a = Object(p.c)(Object(d.b)(H, e => ({
				showErrorToast: t => e(Object(u.e)({
					text: t,
					kind: y.b.Error,
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
				return h
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = a("./node_modules/lodash/clamp.js"),
				r = a.n(s),
				n = a("./node_modules/lodash/throttle.js"),
				o = a.n(n),
				i = a("./node_modules/react/index.js"),
				c = a.n(i),
				m = a("./src/lib/fastdom/index.ts"),
				d = a("./src/reddit/components/Scroller/getDocumentTop.ts"),
				l = a("./src/reddit/components/Scroller/Simple.tsx");
			const u = (() => {
					const e = new Map,
						t = {
							get: t => e.get(t) || [],
							add: (a, s) => {
								const r = t.get(a);
								return e.set(a, r.concat(s)), t
							},
							remove: (a, s) => {
								const r = t.get(a);
								return e.set(a, r.filter(e => e !== s)), t
							}
						};
					return t
				})(),
				p = (() => {
					const e = e => o()(() => {
							m.a.read(() => {
								const t = (e => Object(l.a)(e) ? Object(d.a)() : e.scrollTop)(e);
								u.get(e).forEach(e => e(t))
							})
						}, 16),
						t = new Map;
					return {
						on: (a, s) => {
							if (!u.get(a).length) {
								const s = e(a);
								t.set(a, s), a.addEventListener("scroll", s)
							}
							u.add(a, s)
						},
						off: (e, a) => {
							if (u.remove(e, a), !u.get(e).length) {
								const a = t.get(e);
								a && e.removeEventListener("scroll", a)
							}
						}
					}
				})();
			class h extends c.a.Component {
				constructor(e) {
					super(e), this.getContainer = () => this.props.containerRef || document.getElementById("overlayScrollContainer") || document, this.updateScrollPosition = e => this.setState(t => {
						const a = this.props.scrollRange[0],
							s = this.props.scrollRange[1],
							n = r()(e, a, s),
							o = Math.min(Math.floor((n - a) / (s - a) * 1e3), 999);
						return Object.assign(Object.assign({}, t), {
							styles: Object.assign(Object.assign({}, t.styles), {
								animationDelay: "-".concat(o, "s")
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
					p.on(this.getContainer(), this.updateScrollPosition)
				}
				componentWillUnmount() {
					p.off(this.getContainer(), this.updateScrollPosition)
				}
				render() {
					return this.props.children(this.state.styles)
				}
			}
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return C
			})), a.d(t, "c", (function() {
				return N
			}));
			var s = a("./node_modules/fbt/lib/FbtPublic.js"),
				r = a("./node_modules/lodash/uniqueId.js"),
				n = a.n(r),
				o = a("./node_modules/raf/index.js"),
				i = a.n(o),
				c = a("./node_modules/react/index.js"),
				m = a.n(c),
				d = a("./node_modules/react-redux/es/index.js"),
				l = a("./node_modules/reselect/es/index.js"),
				u = a("./src/lib/classNames/index.ts"),
				p = a("./src/reddit/actions/modal.ts"),
				h = a("./src/reddit/selectors/activeModalId.ts"),
				b = a("./src/higherOrderComponents/asModal/index.tsx"),
				g = a("./src/reddit/controls/Button/index.tsx"),
				f = a("./src/reddit/layout/row/Inline/index.tsx"),
				_ = a("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				x = a.n(_);
			var y = Object(b.a)(e => {
					const {
						children: t,
						title: a
					} = e;
					return m.a.createElement("div", {
						className: x.a.wrapper
					}, m.a.createElement(f.a, {
						className: x.a.titleRow
					}, a), m.a.createElement("div", {
						className: x.a.detailsContainer
					}, t), m.a.createElement(f.a, {
						className: x.a.buttonRow
					}, m.a.createElement(g.i, {
						className: x.a.confirmButton,
						onClick: e.onConfirmed
					}, s.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				E = a("./src/reddit/controls/ErrorText/index.m.less"),
				v = a.n(E);
			const k = Object(l.c)({
				activeModalId: h.a
			});
			class j extends m.a.Component {
				constructor(e) {
					super(e), this.spanRef = m.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(n()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: a,
						errorModalBody: r,
						errorModalTitle: n = s.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = s.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return m.a.createElement("div", {
						className: Object(u.a)(v.a.wrapper, a)
					}, m.a.createElement("span", {
						className: v.a.description,
						ref: this.spanRef
					}, e), c && m.a.createElement("span", {
						className: v.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && m.a.createElement(y, {
						onConfirmed: this.toggleModal,
						title: n
					}, r || e))
				}
			}
			const w = Object(d.b)(k, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(j),
				C = e => {
					const {
						className: t,
						errorClassName: a,
						errorModalTitle: s,
						fallbackMessage: r,
						messages: n = []
					} = e, o = n.length ? n : r ? [r] : [];
					return o.length ? m.a.createElement("div", {
						className: t
					}, o.map((e, t) => m.a.createElement(w, {
						className: a,
						errorModalTitle: s,
						key: t
					}, e))) : null
				},
				N = e => m.a.createElement(C, {
					fallbackMessage: s.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = w
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return h
			})), a.d(t, "b", (function() {
				return g
			})), a.d(t, "c", (function() {
				return f
			})), a.d(t, "d", (function() {
				return y
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.symbol.js");
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				i = a("./src/reddit/controls/ErrorText/index.tsx"),
				c = a("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = a("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = a("./src/reddit/controls/FormFields/index.m.less"),
				l = a.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var a = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (a[s[r]] = e[s[r]])
				}
				return a
			};
			const h = o.a.input("input", l.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				g = e => {
					const {
						label: t,
						children: a,
						inputRef: s,
						className: o
					} = e, i = p(e, ["label", "children", "inputRef", "className"]), c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(n.a)(l.a.inputWrapper, o, {
							[l.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, r.a.createElement(h, u({
						"aria-invalid": e.isInvalid,
						innerRef: s
					}, i)), e.label && r.a.createElement("label", {
						className: Object(n.a)(l.a.label, {
							[l.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				f = e => {
					const {
						label: t,
						children: a,
						inputRef: s,
						isInvalid: o,
						className: i,
						redditStyle: c
					} = e, m = p(e, ["label", "children", "inputRef", "isInvalid", "className", "redditStyle"]), d = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(n.a)(l.a.inputMovingLabelWrapper, i, {
							[l.a.mIsInvalid]: o,
							[l.a.mIsRedditStyle]: c
						}),
						onClick: b
					}, r.a.createElement(h, u({
						innerRef: s
					}, m)), e.label && r.a.createElement("label", {
						className: Object(n.a)(l.a.label, {
							[l.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				_ = e => r.a.createElement("div", {
					className: Object(n.a)(l.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(c.a, {
					className: l.a.plus
				}));
			var x;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(x || (x = {}));
			class y extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: x.ADD
						})
					}, this.updateValue = (e, t) => {
						const a = this.props.values.slice();
						a[t] = e.target.value, this.props.onChange(a)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							a = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: x.REMOVE,
							value: a,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: a,
						placeholder: s,
						errors: n = []
					} = this.props;
					return e.map((e, o) => r.a.createElement(g, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!n[o],
						disabled: t,
						type: "text",
						label: a,
						onChange: e => this.updateValue(e, o),
						placeholder: s,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, r.a.createElement("div", {
						className: l.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, r.a.createElement(m.b, {
						className: l.a.trash
					})), !!n[o] && r.a.createElement(i.b, {
						className: l.a.errorText
					}, n[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: a,
						maxLength: s,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!s && a.length >= s) && !i;
					return r.a.createElement("div", {
						className: Object(n.a)(l.a.multiInputWrapper, e)
					}, t && c && r.a.createElement(_, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && r.a.createElement(_, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./src/lib/lessComponent.tsx"),
				r = a("./src/reddit/controls/Input/index.m.less"),
				n = a.n(r);
			t.a = s.a.input("input", n.a)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return m
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				i = a("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var a = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var r = 0;
						for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (a[s[r]] = e[s[r]])
					}
					return a
				};

			function m(e, t, a) {
				const s = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(n.b)(s)(e => {
					const {
						featureEnabled: s
					} = e, n = c(e, ["featureEnabled"]);
					return s ? r.a.createElement(t, n) : void 0 !== a ? r.a.createElement(a, n) : null
				})
			}
		},
		"./src/reddit/helpers/economics/setupSubredditPremiumButton.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = a("./src/lib/currency/centsToDollars/index.ts"),
				r = a("./src/reddit/endpoints/economics/specialMembership.ts"),
				n = a("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function o(e) {
				let {
					apiContext: t,
					config: a,
					elementId: o,
					price: i,
					purchaseFn: c,
					username: m,
					onCancel: d,
					onClientLoad: l,
					onError: u,
					onSubmitting: p,
					onSuccess: h
				} = e;
				const b = (e, t) => {
					if (!u) return;
					let a = e.toString ? e.toString() : "";
					a.toLowerCase().includes("object object") && (a = JSON.stringify(e)), u(e, a, t)
				};
				try {
					const [e] = await Promise.all([Object(r.b)(t, {
						username: m
					}), Object(n.b)()]);
					if (!e.ok) return void b(e.error, "/ps/me/braintree-client-tokens");
					const u = await braintree.client.create({
							authorization: e.body.clientToken
						}),
						g = await new Promise((e, t) => {
							braintree.paypalCheckout.create({
								client: u
							}, (a, s) => a ? t(a) : e(s))
						});
					l && l(), await paypal.Buttons({
						createBillingAgreement: "subscription" === a.type ? () => (p && p(), g.createPayment({
							amount: Object(s.a)(i(), !0),
							billingAgreementDescription: a.billingAgreement,
							currency: "USD",
							flow: "vault"
						})) : void 0,
						createOrder: "purchase" === a.type ? () => (p && p(), g.createPayment({
							amount: Object(s.a)(i(), !0),
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
								e.ok ? h && h() : b(e.error, "/orders")
							})
						},
						onCancel: () => d && d(),
						onError: e => b(e, "paypalError")
					}).render("#".concat(o))
				} catch (g) {
					b(g, "paypalError")
				}
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, a) {
			"use strict";
			a.d(t, "b", (function() {
				return n
			})), a.d(t, "c", (function() {
				return o
			})), a.d(t, "a", (function() {
				return i
			}));
			a("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = a("./node_modules/bignumber.js/bignumber.js"),
				r = a("./src/lib/prettyPrintNumber/index.ts");

			function n(e, t) {
				const a = new s.BigNumber(e),
					r = new s.BigNumber(t);
				return a.dividedToIntegerBy(r).toString()
			}

			function o(e, t) {
				return Object(r.b)(parseInt(n(e, t), 10))
			}

			function i(e, t) {
				const a = new s.BigNumber(e),
					r = new s.BigNumber(t);
				return a.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var s = a("./node_modules/react/index.js");

			function r(e, t) {
				const [a, r] = Object(s.useState)(e);
				return [a, e => {
					t.current && r(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);

			function n(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, r.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
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
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);

			function n(e) {
				return r.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, r.a.createElement("path", {
					d: "M7.20479 3.83183C8.06286 4.23195 9.08283 3.86072 9.48295 3.00265C9.88307 2.14458 9.51184 1.12461 8.65377 0.724488C7.7957 0.324365 6.77573 0.695602 6.37561 1.55367C5.97549 2.41174 6.34672 3.43171 7.20479 3.83183ZM25.8488 12.5257C26.7069 12.9258 27.7269 12.5546 28.127 11.6965C28.5271 10.8384 28.1559 9.81847 27.2978 9.41835C26.4397 9.01823 25.4198 9.38946 25.0197 10.2475C24.6195 11.1056 24.9908 12.1256 25.8488 12.5257ZM15.378 9.52857C15.7675 9.34225 16.2303 9.55803 16.3379 9.9762L17.9407 16.2017C18.0484 16.6199 18.5111 16.8357 18.9007 16.6494L24.6164 13.9155C25.197 13.6378 25.8058 14.2406 25.5338 14.8239L21.1091 24.3126C20.949 24.6559 20.5411 24.8044 20.1978 24.6443L1.55378 15.9505C1.21056 15.7904 1.06206 15.3824 1.22211 15.0392L5.70727 5.42074C5.97924 4.83749 6.83234 4.91635 6.9928 5.53956L8.61872 11.8548C8.72639 12.273 9.18912 12.4888 9.57866 12.3024L15.378 9.52857ZM18.805 7.34958C18.4049 8.20765 17.3849 8.57888 16.5268 8.17876C15.6687 7.77863 15.2975 6.75867 15.6976 5.9006C16.0978 5.04253 17.1177 4.6713 17.9758 5.07142C18.8339 5.47154 19.2051 6.49151 18.805 7.34958Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/Gif/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.78413 14.5651C4.76663 14.6972 6.07763 14.7 8 14.7C9.92237 14.7 11.2334 14.6972 12.2159 14.5651C13.161 14.4381 13.6052 14.2132 13.9092 13.9092C14.2132 13.6052 14.4381 13.161 14.5651 12.2159C14.6972 11.2334 14.7 9.92237 14.7 8C14.7 6.07763 14.6972 4.76663 14.5651 3.78413C14.4381 2.83903 14.2132 2.3948 13.9092 2.09081C13.6052 1.78682 13.161 1.56192 12.2159 1.43485C11.2334 1.30276 9.92237 1.3 8 1.3C6.07763 1.3 4.76663 1.30276 3.78413 1.43485C2.83903 1.56192 2.3948 1.78682 2.09081 2.09081C1.78682 2.3948 1.56192 2.83903 1.43485 3.78413C1.30276 4.76663 1.3 6.07763 1.3 8C1.3 9.92237 1.30276 11.2334 1.43485 12.2159C1.56192 13.161 1.78682 13.6052 2.09081 13.9092C2.3948 14.2132 2.83903 14.4381 3.78413 14.5651ZM1.17157 1.17157C0 2.34315 0 4.22876 0 8C0 11.7712 0 13.6569 1.17157 14.8284C2.34315 16 4.22876 16 8 16C11.7712 16 13.6569 16 14.8284 14.8284C16 13.6569 16 11.7712 16 8C16 4.22876 16 2.34315 14.8284 1.17157C13.6569 0 11.7712 0 8 0C4.22876 0 2.34315 0 1.17157 1.17157Z"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M6.76197 6.36433L6.03894 7.11365C5.7183 6.79814 5.32849 6.7127 5.03299 6.7127C4.31625 6.7127 3.851 7.15966 3.851 8.06015C3.851 8.65172 4.1465 9.38132 5.03299 9.38132C5.26562 9.38132 5.63028 9.33531 5.88177 9.1447V8.55313H4.76893V7.53432H6.91915V9.57851C6.64252 10.1635 5.87548 10.479 5.02671 10.479C3.28515 10.479 2.625 9.26301 2.625 8.06015C2.625 6.8573 3.37946 5.62158 5.03299 5.62158C5.64285 5.62158 6.18355 5.75304 6.76197 6.36433ZM9.02735 10.3541H7.78877V5.75304H9.02735V10.3541ZM11.3179 10.3541H10.0856V5.75304H13.4618V6.84415H11.3179V7.70521H13.3298V8.77004H11.3179V10.3541Z"
			}))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && r.a.createElement("title", null, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, a) {
			"use strict";
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var s = a("./node_modules/react/index.js"),
				r = a.n(s),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = a.n(o);
			const c = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		},
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			var s = a("./node_modules/react/index.js"),
				r = a.n(s);

			function n(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 48 48",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
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
				r = a.n(s),
				n = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/components/ScrollAnimation/index.tsx"),
				i = a("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				c = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less"),
				m = a.n(c);
			const d = [1700, 2400];

			function l(e) {
				const t = e.scrollRange || d;
				return r.a.createElement("footer", {
					className: Object(n.a)(m.a.container, e.className)
				}, r.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/8fvy7o/these_items_are_cosmetic_only_and_grant_no/",
					target: "_blank"
				}, r.a.createElement(o.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: m.a.jumperBullet,
					src: Object(i.a)(e.subreddit, "jumper_bullet@2x.png"),
					style: t
				})), r.a.createElement(o.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: m.a.jumperArmLeft,
					src: Object(i.a)(e.subreddit, "jumper_arm_left@2x.png"),
					style: t
				})), r.a.createElement(o.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: m.a.jumperLegLeft,
					src: Object(i.a)(e.subreddit, "jumper_leg_left@2x.png"),
					style: t
				})), r.a.createElement(o.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: m.a.jumperLegRight,
					src: Object(i.a)(e.subreddit, "jumper_leg_right@2x.png"),
					style: t
				})), r.a.createElement("img", {
					className: m.a.jumperTorso,
					src: Object(i.a)(e.subreddit, "jumper_torso@2x.png")
				}), r.a.createElement(o.a, {
					scrollRange: t
				}, t => r.a.createElement("img", {
					className: m.a.jumperArmRight,
					src: Object(i.a)(e.subreddit, "jumper_arm_right@2x.png"),
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
				return r
			}));
			var s = a("./src/config.ts");
			const r = (e, t) => "".concat(s.a.assetPath, "/img/memberships/paywall/").concat(e.name.toLowerCase(), "/").concat(t)
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
				r = a.n(s),
				n = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/react-router/esm/react-router.js"),
				i = a("./node_modules/reselect/es/index.js"),
				c = a("./node_modules/uuid/v4.js"),
				m = a.n(c);
			var d, l = a("./src/lib/classNames/index.ts"),
				u = a("./src/lib/extractQueryParams/index.ts"),
				p = a("./node_modules/react-dom/index.js"),
				h = a("./src/reddit/components/TrackingHelper/index.tsx");
			! function(e) {
				e[e.Visible = 0] = "Visible", e[e.NotVisible = 1] = "NotVisible"
			}(d || (d = {}));
			var b = Object(h.c)(class extends r.a.Component {
					constructor() {
						super(...arguments), this.visibilityState = d.NotVisible, this.enterFired = !1, this.exitFired = !1
					}
					componentDidMount() {
						if (this.props.children) {
							const e = Object(p.findDOMNode)(this);
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
				x = a("./src/reddit/selectors/telemetry.ts"),
				y = a("./src/reddit/selectors/user.ts"),
				E = a("./node_modules/fbt/lib/FbtPublic.js"),
				v = a("./src/config.ts"),
				k = a("./src/reddit/models/Badge/index.ts");
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
				w = {
					achievementBadges: !1,
					animations: !1,
					canCancel: !1,
					canGift: !1,
					communityThanks: !1,
					emotes: !1,
					testimonials: !1
				},
				C = {
					t5_2wlj3: w,
					t5_2l3wpx: w,
					t5_vsb5g: w,
					t5_37jgj: w,
					t5_2t9ha: w,
					t5_2a3y8x: w
				};
			var N = function(e) {
					return Object.assign(Object.assign({}, j), C[e] || {})
				},
				O = a("./src/reddit/selectors/economics.ts"),
				P = a("./src/reddit/components/RichTextEditor/index.tsx"),
				I = a("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				M = a("./src/reddit/components/ScrollAnimation/index.tsx"),
				S = a("./src/reddit/helpers/richTextEditor/index.ts"),
				T = a("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				B = a("./src/reddit/icons/svgs/FormattingBold/index.tsx"),
				L = a("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				A = a("./src/reddit/icons/svgs/FormattingItalics/index.tsx"),
				R = a("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"),
				z = a("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				F = a("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"),
				G = a("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"),
				D = a("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"),
				W = a("./src/reddit/icons/svgs/FormattingTable/index.tsx"),
				H = a("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"),
				V = a("./src/reddit/icons/svgs/Gif/index.tsx"),
				Z = a("./src/reddit/icons/svgs/Smile/index.tsx"),
				U = (a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.array.sort.js"), a("./src/higherOrderComponents/addOverlayEvents.tsx")),
				q = a("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				X = a("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				J = a("./src/reddit/icons/svgs/Close/index.tsx"),
				Y = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/EmoteTooltip/index.m.less"),
				K = a.n(Y);

			function Q(e) {
				const t = e.emojiPack.emotes,
					a = Object.keys(t).map(e => t[e]).sort((e, t) => e.id.localeCompare(t.id));
				return r.a.createElement("div", {
					className: Object(l.a)(K.a.container, e.className),
					style: e.style
				}, r.a.createElement("div", {
					className: K.a.header
				}, E.fbt._("Add r/{communityName} emote", [E.fbt._param("communityName", e.subreddit.name)], {
					hk: "O2Vj2"
				}), r.a.createElement(J.a, {
					className: K.a.close,
					onClick: e.onClose
				})), r.a.createElement("div", {
					className: K.a.emojis
				}, r.a.createElement("div", {
					className: K.a.emojisTitle
				}, e.emojiPack.title), r.a.createElement("div", {
					className: K.a.emojisList
				}, a.map(t => r.a.createElement("button", {
					className: K.a.emoji,
					onClick: () => e.onSelectEmoji(Object(X.g)(t, e.editorState)),
					key: t.id
				}, r.a.createElement("img", {
					className: K.a.emojiImage,
					src: t.emoji.path
				}))))), r.a.createElement("div", {
					className: K.a.triangle
				}))
			}
			Q.defaultProps = {
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
			var $ = Object(q.a)(Q, [U.a.Click, U.a.Keydown]),
				ee = a("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx"),
				te = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/GifTooltip/index.m.less"),
				ae = a.n(te);
			var se = Object(q.a)((function(e) {
					return r.a.createElement("div", {
						className: Object(l.a)(ae.a.container, e.className),
						style: e.style
					}, r.a.createElement(ee.a, {
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
					}), r.a.createElement("div", {
						className: ae.a.triangle
					}))
				}), [U.a.Click, U.a.Keydown]),
				re = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/index.m.less"),
				ne = a.n(re);
			class oe extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						emotesOpen: "emoji" === e.type,
						gifsOpen: "gif" === e.type
					}
				}
				render() {
					const e = "emoji" === this.props.type ? "membership-paywall-emote-".concat(this.props.subreddit.id) : void 0,
						t = "gif" === this.props.type ? "membership-paywall-gif-".concat(this.props.subreddit.id) : void 0;
					return r.a.createElement("div", {
						className: Object(l.a)(this.props.className, ne.a.container)
					}, r.a.createElement("div", {
						className: ne.a.content
					}, r.a.createElement("div", {
						className: Object(l.a)(ne.a.iconWrapper, {
							[ne.a.clickable]: "emoji" === this.props.type,
							[ne.a.open]: this.state.emotesOpen
						}),
						id: e,
						onClick: "emoji" === this.props.type ? () => this.setState(e => ({
							emotesOpen: !e.emotesOpen
						})) : void 0
					}, r.a.createElement(Z.a, {
						className: Object(l.a)(ne.a.emoteIcon)
					})), r.a.createElement("div", {
						className: Object(l.a)(ne.a.iconWrapper, {
							[ne.a.clickable]: "gif" === this.props.type,
							[ne.a.open]: this.state.gifsOpen
						}),
						id: t,
						onClick: "gif" === this.props.type ? () => this.setState(e => ({
							gifsOpen: !e.gifsOpen
						})) : void 0
					}, r.a.createElement(V.a, {
						className: Object(l.a)(ne.a.gifIcon)
					})), r.a.createElement("div", {
						className: ne.a.divider
					}), r.a.createElement(B.a, {
						className: ne.a.icon
					}), r.a.createElement(A.a, {
						className: ne.a.icon
					}), r.a.createElement(L.a, {
						className: ne.a.icon
					}), r.a.createElement(G.a, {
						className: ne.a.icon
					}), r.a.createElement(R.a, {
						className: ne.a.icon
					}), r.a.createElement(D.a, {
						className: ne.a.icon
					}), r.a.createElement(F.a, {
						className: ne.a.icon
					}), r.a.createElement("div", {
						className: ne.a.divider
					}), r.a.createElement(W.a, {
						className: ne.a.icon
					}), r.a.createElement(H.a, {
						className: ne.a.icon
					}), r.a.createElement(z.a, {
						className: ne.a.icon
					})), r.a.createElement("button", {
						disabled: !0,
						className: ne.a.reply
					}, E.fbt._("reply", null, {
						hk: "RzR8c"
					})), this.state.emotesOpen && r.a.createElement($, {
						isOpen: !0,
						className: ne.a.emoteTooltip,
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
					}), this.state.gifsOpen && r.a.createElement(se, {
						isOpen: !0,
						className: ne.a.gifTooltip,
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
			var ie = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/GifsInComments/index.m.less"),
				ce = a.n(ie);

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
			class le extends r.a.PureComponent {
				render() {
					const {
						className: e,
						emojisExpanded: t,
						subreddit: a
					} = this.props, s = de.map(e => e + (t ? 500 : 0)), n = N(a.id).animations;
					return r.a.createElement("div", {
						className: Object(l.a)(ce.a.container, e)
					}, n && r.a.createElement("header", {
						className: ce.a.header
					}, r.a.createElement("a", {
						href: "https://www.reddit.com/r/FortNiteBR/comments/9067f2/i_have_been_playing_50v50_a_little_differently/",
						target: "_blank"
					}, r.a.createElement("img", {
						className: ce.a.rescuerLegs,
						src: Object(T.a)(a, "rescuer_legs@2x.png")
					}), r.a.createElement(M.a, {
						scrollRange: s
					}, e => r.a.createElement("img", {
						className: ce.a.rescuerArm,
						src: Object(T.a)(a, "rescuer_arm@2x.png"),
						style: e
					})), r.a.createElement(M.a, {
						scrollRange: s
					}, e => r.a.createElement("img", {
						className: ce.a.rescuerTorso,
						src: Object(T.a)(a, "rescuer_torso@2x.png"),
						style: e
					})), r.a.createElement("img", {
						className: ce.a.woundedBody,
						src: Object(T.a)(a, "wounded_body@2x.png")
					}), r.a.createElement(M.a, {
						scrollRange: s
					}, e => r.a.createElement("img", {
						className: ce.a.woundedHead,
						src: Object(T.a)(a, "wounded_head@2x.png"),
						style: e
					})))), r.a.createElement("article", {
						className: Object(l.a)(ce.a.content, {
							[ce.a.contentWithAnimations]: n
						})
					}, r.a.createElement("div", {
						className: ce.a.title
					}, E.fbt._("GIFs in Comments", null, {
						hk: "4iMCW4"
					})), r.a.createElement("div", {
						className: ce.a.description
					}, E.fbt._("Put GIFs directly in your comments.", null, {
						hk: "2yUWCA"
					})), r.a.createElement("div", {
						className: ce.a.description
					}, E.fbt._("Search a vast library to find the perfect one.", null, {
						hk: "1hZivq"
					})), r.a.createElement(P.a, {
						className: ce.a.editor,
						editorType: S.a.Comment,
						placeholderText: E.fbt._("Try adding a GIF", null, {
							hk: "tHtDe"
						}),
						readOnly: !1,
						renderToolbar: e => r.a.createElement(oe, me({
							key: String(t),
							subreddit: a,
							type: "gif"
						}, e)),
						rteState: I.a.createInitial(),
						toolbarPosition: "bottom",
						trackToolbarClick: function() {},
						onChange: function() {},
						onSubmit: function() {}
					}), r.a.createElement("div", {
						className: ce.a.try
					}, E.fbt._("Try it out! Search for a GIF and put it in your comment.", null, {
						hk: "309j9G"
					}))))
				}
			}
			const ue = Object(i.c)({
				cosmeticBadges: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(O.d)(e, a.id)
				}
			});
			var pe = Object(n.b)(ue)(le),
				he = a("./node_modules/lodash/last.js"),
				be = a.n(he),
				ge = a("./node_modules/lodash/shuffle.js"),
				fe = a.n(ge),
				_e = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/PremiumEmojis/index.m.less"),
				xe = a.n(_e);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}

			function Ee(e) {
				return e.reduce((e, t) => {
					const a = be()(e);
					return a && a.length < 12 ? a.push(t) : e.push([t]), e
				}, [
					[]
				])
			}
			const ve = fe()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/bush.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/chug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/clappy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/cuddle.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dab.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dance.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_love.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/megaphone.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/respect.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/soon.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/unfortunately.gif"]),
				ke = fe()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_1/competitive.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_2/goat.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_3/noob.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_4/bot.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_5/potato.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_6/casual.gif"]),
				je = fe()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/confused.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/disappointed.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/grinning.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/laughing.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/like.gif"]),
				we = fe()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/angry.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/astonished.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/blush.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/cheeky.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/cry.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/disapproval.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/dizzy_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/downvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/facepalm.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/feels_bad_man.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/feels_good_man.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/flip_out.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/flushed.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/give_upvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/give_upvote_rainbow.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/grimacing.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/grin.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/heart_eyes.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/heart_eyes_rainbow.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/hug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/joy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/kissing_heart.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/money_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/neutral_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/no_mouth.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/poop.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/put_back.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/rage.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/scream.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/shrug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sleep.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/slightly_smiling.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/smile.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/snoo.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sob.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/stuck_out_tongue.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sunglasses.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/surprise.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sweat.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sweat_smile.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/table.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/table_flip.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thinking_face_hmm.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thumbs_down.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thumbs_up.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/trollface.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/upvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/wink.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/yummy.gif"]);
			class Ce extends r.a.Component {
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
					return r.a.createElement("div", {
						className: Object(l.a)(e, xe.a.container)
					}, r.a.createElement("header", {
						className: xe.a.title
					}, E.fbt._("Premium Animated Emotes", null, {
						hk: "24mmlb"
					})), r.a.createElement("div", {
						className: xe.a.description
					}, E.fbt._("Say more than text. Bring color and animation to your comments.", null, {
						hk: "2MjrRF"
					})), r.a.createElement(P.a, {
						className: xe.a.editor,
						editorType: S.a.Comment,
						placeholderText: E.fbt._("Try adding an emote", null, {
							hk: "3H8jm8"
						}),
						readOnly: !1,
						renderToolbar: e => r.a.createElement(oe, ye({
							subreddit: t,
							type: "emoji"
						}, e)),
						rteState: I.a.createInitial(),
						toolbarPosition: "bottom",
						trackToolbarClick: function() {},
						onChange: function() {},
						onSubmit: function() {}
					}), r.a.createElement("div", {
						className: xe.a.try
					}, E.fbt._("Try it out! Add an emoji by clicking on it.", null, {
						hk: "2LKfXS"
					})), r.a.createElement("div", {
						className: xe.a.description
					}, E.fbt._("Use more than 100 emotes, including custom art just for r/{communityName}.", [E.fbt._param("communityName", t.name)], {
						hk: "31Kq8t"
					})), r.a.createElement("footer", {
						className: Object(l.a)(xe.a.allEmojis, {
							[xe.a.notExpanded]: !this.state.expanded
						})
					}, r.a.createElement("div", {
						className: xe.a.label
					}, E.fbt._("special members", null, {
						hk: "2W17Tt"
					})), r.a.createElement("div", {
						className: xe.a.grid
					}, Ee(ve).map((e, t) => r.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => r.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), r.a.createElement("div", {
						className: xe.a.label
					}, E.fbt._("snoomojis", null, {
						hk: "2hsGar"
					})), r.a.createElement("div", {
						className: xe.a.grid
					}, Ee(we).map((e, t) => r.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => r.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), r.a.createElement("div", {
						className: xe.a.label
					}, E.fbt._("dogesy", null, {
						hk: "2FheYm"
					})), r.a.createElement("div", {
						className: xe.a.grid
					}, Ee(je).map((e, t) => r.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => r.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), r.a.createElement("div", {
						className: xe.a.label
					}, E.fbt._("player style", null, {
						hk: "1XkSYc"
					})), r.a.createElement("div", {
						className: xe.a.grid
					}, Ee(ke).map((e, t) => r.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => r.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), !this.state.expanded && r.a.createElement("div", {
						className: xe.a.gradient
					})), !this.state.expanded && r.a.createElement("button", {
						className: xe.a.showAll,
						onClick: () => {
							this.setState({
								expanded: !0
							}), this.props.onExpand && this.props.onExpand()
						}
					}, E.fbt._("show all", null, {
						hk: "2MP4Ce"
					})))
				}
			}
			var Ne = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Section/index.m.less"),
				Oe = a.n(Ne);

			function Pe(e) {
				const t = e.showProgressBar ? 1 / 0 : 6,
					a = e.items.reduce((e, a) => {
						const s = be()(e);
						return s && s.length < t ? s.push(a) : e.push([a]), e
					}, [
						[]
					]);
				return r.a.createElement("section", {
					className: Object(l.a)(Oe.a.container, e.className)
				}, r.a.createElement("header", {
					className: Oe.a.title
				}, e.title), r.a.createElement("article", {
					className: Oe.a.description
				}, e.description), r.a.createElement("footer", {
					className: Oe.a.footer
				}, e.showProgressBar && r.a.createElement("div", {
					className: Oe.a.progressBar
				}, r.a.createElement("div", {
					className: Oe.a.progressThumb
				})), a.map((e, t) => r.a.createElement("div", {
					className: Oe.a.row,
					key: t
				}, e.map(e => r.a.createElement("div", {
					className: Oe.a.item,
					key: e.text
				}, r.a.createElement("img", {
					className: Oe.a.itemIcon,
					src: e.icon
				}), r.a.createElement("div", {
					className: Oe.a.itemText
				}, e.text)))))))
			}
			var Ie = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/StyleBadges/index.m.less"),
				Me = a.n(Ie);
			const Se = 1e3,
				Te = 66;
			class Be extends r.a.Component {
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
					}, Se))
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
					return r.a.createElement("article", {
						className: Object(l.a)(t, Me.a.container)
					}, r.a.createElement("header", {
						className: Me.a.title
					}, E.fbt._("Style Badges", null, {
						hk: "3ioHSL"
					})), r.a.createElement("div", {
						className: Me.a.description
					}, E.fbt._("Stand out with 8 new badges a month", null, {
						hk: "kAJmf"
					})), r.a.createElement("div", {
						className: Me.a.description
					}, E.fbt._("and a special color for your {username}", [E.fbt._param("username", r.a.createElement("div", {
						className: Me.a.username,
						style: {
							color: s.color
						}
					}, r.a.createElement("img", {
						className: Me.a.userBadge,
						src: s.url
					}), a))], {
						hk: "1HJQkU"
					})), r.a.createElement("div", {
						className: Object(l.a)(Me.a.badges, {
							[Me.a.smallCollection]: e.length <= 24
						})
					}, e.map(e => r.a.createElement("img", {
						className: Me.a.badge,
						src: e.url,
						key: e.url
					}))))
				}
			}
			const Le = Object(i.c)({
				styleBadges: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(O.d)(e, a).filter(e => !(e.collections && e.collections.custom)).map(e => ({
						url: Object(k.b)(64, 64, e).url2x,
						color: e.extra && e.extra.style && e.extra.style.color || ""
					})).filter(e => e.color)
				},
				username: e => e.user.account && "u/".concat(e.user.account.displayText) || "u/username"
			});
			var Ae = Object(n.b)(Le)(Be),
				Re = a("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/index.m.less"),
				ze = a.n(Re);
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
				icon: "".concat(v.a.assetPath, "/img/memberships/paywall/fortnitebr/newbie.png"),
				text: "Newbie"
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
			class Ge extends r.a.Component {
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
						meta: n,
						subreddit: o
					} = this.props;
					return r.a.createElement("article", {
						className: Object(l.a)(t, ze.a.container)
					}, r.a.createElement("header", {
						className: ze.a.title
					}, E.fbt._("{member} Benefits", [E.fbt._param("member", n.member)], {
						hk: "xstxK"
					})), N(o.id).loyaltyBadges && s && !!s.length && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => Object.assign(Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_4_loyalty_badges",
							correlationId: a
						}, x.defaults(e)), {
							subreddit: x.subreddit(e)
						})
					}, r.a.createElement(Pe, {
						showProgressBar: !0,
						className: ze.a.section,
						title: E.fbt._("Loyalty Badges", null, {
							hk: "agXF2"
						}),
						description: E.fbt._("Show how long you’ve been supporting the subreddit.", null, {
							hk: "1r4ZKB"
						}),
						items: s
					})), N(o.id).achievementBadges && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => Object.assign(Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_5_achievement_badges",
							correlationId: a
						}, x.defaults(e)), {
							subreddit: x.subreddit(e)
						})
					}, r.a.createElement(Pe, {
						className: ze.a.section,
						title: E.fbt._("Achievement Badges", null, {
							hk: "4asfWh"
						}),
						description: E.fbt._("Get rewarded for reaching subreddit milestones. Available to the community at large, thanks to your support.", null, {
							hk: "3sEG2W"
						}),
						items: e
					})), N(o.id).styleBadges && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => Object.assign(Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_6_style_badges",
							correlationId: a
						}, x.defaults(e)), {
							subreddit: x.subreddit(e)
						})
					}, r.a.createElement(Ae, {
						className: ze.a.badges,
						subredditId: o.id
					})), N(o.id).emotes && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => Object.assign(Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_7_premium_emojis",
							correlationId: a
						}, x.defaults(e)), {
							subreddit: x.subreddit(e)
						})
					}, r.a.createElement(Ce, {
						subreddit: o,
						onExpand: () => this.setState({
							emojisExpanded: !0
						})
					})), N(o.id).gifs && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => Object.assign(Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_8_gifs_in_comments",
							correlationId: a
						}, x.defaults(e)), {
							subreddit: x.subreddit(e)
						})
					}, r.a.createElement(pe, {
						emojisExpanded: this.state.emojisExpanded,
						subreddit: o
					})))
				}
			}
			const De = Object(i.c)({
				loyaltyBadges: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(O.e)(e, a.id).map(e => ({
						icon: Object(k.b)(64, 64, e).url2x,
						text: e.title
					}))
				},
				meta: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(O.s)(e, a.id)
				}
			});
			var We = Object(n.b)(De)(Ge),
				He = a("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				Ve = a("./src/reddit/pages/meta/MembershipPaywallPage/FAQ/index.m.less"),
				Ze = a.n(Ve);
			class Ue extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						open: {}
					}, this.toggleQuestion = e => this.setState(t => Object.assign(Object.assign({}, t), {
						open: Object.assign(Object.assign({}, t.open), {
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
						} = t, r = [{
							Q: E.fbt._("What is a {membershipAlt}?", [E.fbt._param("membershipAlt", a)], {
								hk: "1rUCQD"
							}),
							A: E.fbt._("The {membershipAlt} is a set of exclusive features available to users who purchase a premium subscription to the subreddit.", [E.fbt._param("membershipAlt", a)], {
								hk: "14RJNQ"
							})
						}, {
							Q: E.fbt._("Are {membershipAlt} features available on mobile apps?", [E.fbt._param("membershipAlt", a)], {
								hk: "3qaJjE"
							}),
							A: E.fbt._("The features will be supported on the iOS and Android apps, as well as web. However, new features may appear on web before mobile, depending on development circumstances.", null, {
								hk: "2h0SNv"
							})
						}];
						return e.canGift && r.push({
							Q: E.fbt._("Can I gift a {membershipAlt} to other users?", [E.fbt._param("membershipAlt", a)], {
								hk: "1K5FbF"
							}),
							A: E.fbt._("Yes! If you'd like to gift a {membershipAlt}, send a PM to admin u/jarins.", [E.fbt._param("membershipAlt", a)], {
								hk: "895QP"
							})
						}), e.dedicatedSupport && r.push({
							Q: E.fbt._("What are the {membershipAlt} fees used for?", [E.fbt._param("membershipAlt", a)], {
								hk: "3TLe8q"
							}),
							A: E.fbt._("{memberAltPlural} support a unique project by Reddit to develop new features for this community.", [E.fbt._param("memberAltPlural", s)], {
								hk: "3GXXxI"
							})
						}), e.canCancel && r.push({
							Q: E.fbt._("How do I cancel my {membershipAlt}?", [E.fbt._param("membershipAlt", a)], {
								hk: "1w2Ob7"
							}),
							A: E.fbt._("You can cancel your membership at any time from the User Settings page. Look for the {membershipAlt} tab.", [E.fbt._param("membershipAlt", a)], {
								hk: "2HGeHZ"
							})
						}), r
					}(N(a.id), t);
					return r.a.createElement("div", {
						className: Object(l.a)(e, Ze.a.container)
					}, r.a.createElement("div", {
						className: Ze.a.title
					}, E.fbt._("{membershipAlt} FAQ", [E.fbt._param("membershipAlt", t.membershipAlt)], {
						hk: "4tP0lw"
					})), s.map(e => {
						let {
							Q: t,
							A: a
						} = e;
						return r.a.createElement("div", {
							className: Ze.a.section,
							key: t,
							onClick: () => this.toggleQuestion(t)
						}, r.a.createElement("div", {
							className: Ze.a.row
						}, r.a.createElement("div", {
							className: Ze.a.question
						}, t), r.a.createElement(He.a, {
							className: Object(l.a)(Ze.a.arrow, {
								[Ze.a.arrowClose]: !this.state.open[t]
							})
						})), !!this.state.open[t] && r.a.createElement("div", {
							className: Ze.a.answer
						}, a))
					}))
				}
			}
			const qe = Object(i.c)({
				meta: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(O.s)(e, a.id)
				}
			});
			var Xe = Object(n.b)(qe)(Ue),
				Je = a("./src/reddit/pages/meta/MembershipPaywallPage/Footer/index.m.less"),
				Ye = a.n(Je);
			const Ke = [7900, 8240];

			function Qe(e) {
				return r.a.createElement("footer", {
					className: Object(l.a)(Ye.a.container, e.className)
				}, r.a.createElement("div", {
					className: Ye.a.twoCol
				}, r.a.createElement("div", {
					className: Ye.a.copyright
				}, E.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1hv6BJ"
				}))), N(e.subreddit.id).animations && r.a.createElement("a", {
					className: Ye.a.link,
					href: "https://www.reddit.com/r/FortNiteBR/comments/a8mhn8/24_players_plays_all_i_want_for_christmas_is_you/",
					target: "_blank"
				}, r.a.createElement("img", {
					className: Ye.a.pianoKeyboard,
					src: Object(T.a)(e.subreddit, "piano_keyboard@2x.png")
				}), r.a.createElement(M.a, {
					scrollRange: Ke
				}, t => r.a.createElement("img", {
					className: Ye.a.pianoCrowdBottom,
					src: Object(T.a)(e.subreddit, "piano_crowd_bottom@2x.png"),
					style: t
				})), r.a.createElement(M.a, {
					scrollRange: Ke
				}, t => r.a.createElement("img", {
					className: Ye.a.pianoCrowdTop,
					src: Object(T.a)(e.subreddit, "piano_crowd_top@2x.png"),
					style: t
				})), r.a.createElement(M.a, {
					scrollRange: Ke
				}, t => r.a.createElement("img", {
					className: Ye.a.pianoFlier,
					src: Object(T.a)(e.subreddit, "piano_flier@2x.png"),
					style: t
				}))))
			}
			var $e = a("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				et = a("./src/reddit/icons/svgs/Twinkle/index.tsx"),
				tt = a("./src/reddit/actions/login.ts"),
				at = a("./src/reddit/components/Economics/Price/index.tsx"),
				st = a("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				rt = (a("./node_modules/core-js/modules/es6.symbol.js"), a("./src/higherOrderComponents/asModal/index.tsx")),
				nt = a("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/async.ts"),
				ot = a("./src/reddit/contexts/PageLayer/index.tsx"),
				it = a("./src/reddit/featureFlags/component.tsx"),
				ct = a("./src/reddit/selectors/gov.ts"),
				mt = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Cart/index.m.less"),
				dt = a.n(mt);
			const {
				fbt: lt
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function ut(e) {
				const {
					className: t,
					description: a,
					dollarPrice: s,
					monthly: n,
					subredditId: o,
					tokenPrice: i
				} = e;
				return r.a.createElement("article", {
					className: Object(l.a)(dt.a.container, t)
				}, r.a.createElement("div", {
					className: dt.a.description
				}, a), r.a.createElement("div", {
					className: dt.a.rhs
				}, r.a.createElement("div", {
					className: dt.a.price
				}, r.a.createElement(at.a, {
					dollarPrice: s,
					tokenPrice: i,
					monthly: n,
					subredditId: o
				})), n && r.a.createElement("div", {
					className: dt.a.monthlyText
				}, lt._("Paid monthly, cancel anytime", null, {
					hk: "1hG3H3"
				}))))
			}
			var pt = a("./src/lib/currency/centsToDollars/index.ts"),
				ht = a("./src/lib/prettyPrintNumber/index.ts"),
				bt = a("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				gt = a("./src/reddit/helpers/governance/tokens.ts"),
				ft = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Footer/index.m.less"),
				_t = a.n(ft);
			const xt = () => E.fbt._("{=Reddit User Agreement}, {=Privacy Policy} and {Previews Terms of Service}.", [E.fbt._param("=Reddit User Agreement", r.a.createElement("a", {
				className: _t.a.link,
				href: "https://www.redditinc.com/policies/user-agreement",
				target: "_blank",
				rel: "noopener noreferrer"
			}, E.fbt._("Reddit User Agreement", null, {
				hk: "4yY7NE"
			}))), E.fbt._param("=Privacy Policy", r.a.createElement("a", {
				className: _t.a.link,
				href: "https://www.redditinc.com/policies/privacy-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, E.fbt._("Privacy Policy", null, {
				hk: "2clnUk"
			}))), E.fbt._param("Previews Terms of Service", r.a.createElement(bt.a, {
				className: _t.a.linkLast
			}))], {
				hk: "3Jmx1D"
			});
			const yt = Object(i.c)({
				meta: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(O.s)(e, a)
				}
			});
			var Et = Object(n.b)(yt)((function(e) {
					if (e.purchaseType !== $t.Subscription) return r.a.createElement("footer", {
						className: Object(l.a)(e.className, _t.a.container)
					}, E.fbt._("By purchasing, you agree to", null, {
						hk: "37Xh4k"
					}), " ", r.a.createElement(xt, null));
					const t = e.dollarPrice && "$".concat(Object(pt.a)(e.dollarPrice, !0)),
						a = e.tokenPrice && Object(ht.a)(Object(gt.b)(e.tokenPrice, e.tokenDisplayConversion)) + " " + e.tokenName,
						s = t && a ? E.fbt._("{dollarPrice} or {tokenPrice}", [E.fbt._param("dollarPrice", t), E.fbt._param("tokenPrice", a)], {
							hk: "1uXVRd"
						}) : t || (a || "");
					return r.a.createElement("footer", {
						className: Object(l.a)(e.className, _t.a.container)
					}, E.fbt._("{membershipName} auto-renews for {price} a month. Cancel anytime in the Special Memberships section of your User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds. By continuing, you agree to", [E.fbt._param("membershipName", e.meta.membershipAlt), E.fbt._param("price", s)], {
						hk: "AMyMx"
					}), " ", r.a.createElement(xt, null))
				})),
				vt = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Header/index.m.less"),
				kt = a.n(vt);
			const {
				fbt: jt
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const wt = Object(i.c)({
				meta: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(O.s)(e, a)
				}
			});
			var Ct = Object(n.b)(wt)((function(e) {
					const {
						className: t,
						meta: a,
						purchaseType: s
					} = e;
					return r.a.createElement("header", {
						className: Object(l.a)(t, kt.a.container)
					}, r.a.createElement("div", {
						className: kt.a.text
					}, s === $t.Badge && jt._("Buy a badge", null, {
						hk: "1X4jZc"
					}), s === $t.Subscription && jt._("Buy {membership-name}", [jt._param("membership-name", a.membershipAlt)], {
						hk: "ObrN"
					})), r.a.createElement(J.a, {
						className: kt.a.close,
						onClick: e.onClose
					}))
				})),
				Nt = a("./node_modules/bignumber.js/bignumber.js"),
				Ot = a("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx"),
				Pt = a("./src/reddit/controls/Button/index.tsx"),
				It = a("./node_modules/react-router-redux/es/index.js"),
				Mt = a("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				St = a("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				Tt = a("./src/reddit/actions/governance/errorToast.ts"),
				Bt = a("./src/reddit/actions/shortcuts/close.ts"),
				Lt = a("./src/reddit/contexts/ApiContext.tsx"),
				At = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				Rt = a("./src/reddit/endpoints/economics/specialMembership.ts"),
				zt = a("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				Ft = a("./src/reddit/models/Badge/managementPage.ts"),
				Gt = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/PurchaseButton/index.m.less"),
				Dt = a.n(Gt);
			const Wt = "subreddit-premium-purchase-braintree",
				Ht = (e, t, a) => E.fbt._("{communityName} {membershipAlt}. ${price}/month, automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months.", [E.fbt._param("communityName", e.displayText), E.fbt._param("membershipAlt", a.membershipAlt), E.fbt._param("price", Object(pt.a)(t, !0))], {
					hk: "3q2JqJ"
				});
			class Vt extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						loading: !0,
						submitting: !1
					}, this._isMounted = !1, this.alreadyPurchased = () => this.props.userIsPremiumSubscriber === O.a.Subscribed, this.getId = () => Wt + (this.props.uniqueId || "")
				}
				componentDidMount() {
					if (this._isMounted = !0, !this.alreadyPurchased()) {
						const e = this.props.membershipProducts.find(e => "usd" === e.currency);
						Object(zt.a)({
							apiContext: this.props.apiContext(),
							config: {
								billingAgreement: Ht(this.props.subreddit, this.props.price, this.props.meta),
								type: "subscription"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: t => Object(Rt.d)(this.props.apiContext(), {
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
							onError: (e, t, a) => {
								this._isMounted && (this.setState({
									submitting: !1
								}), this.props.onError(e), this.props.sendEvent(e => {
									const s = x.defaults(e);
									return Object.assign(Object.assign({
										source: "meta",
										action: "fail",
										noun: "subscription_paypal_purchase"
									}, s), {
										actionInfo: {
											reason: t,
											paneName: a
										},
										correlationId: this.props.correlationId,
										subreddit: x.subreddit(e)
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
								}, x.defaults(e)), {
									subreddit: x.subreddit(e)
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
					return r.a.createElement("div", {
						className: Object(l.a)(this.props.className, Dt.a.container)
					}, this.alreadyPurchased() ? r.a.createElement("div", {
						className: Dt.a.alreadyPurchased
					}, E.fbt._("Already Purchased", null, {
						hk: "2h3Eug"
					})) : r.a.createElement(s.Fragment, null, r.a.createElement("div", {
						className: Object(l.a)(Dt.a.button, {
							[Dt.a.buttonWithoutCards]: !this.props.showCards,
							[Dt.a.loading]: this.state.loading,
							[Dt.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && r.a.createElement(At.a, {
						className: Dt.a.loadingIcon,
						sizePx: 24
					})))
				}
			}
			const Zt = Object(i.c)({
				isLoggedIn: y.I,
				membershipProducts: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(O.k)(e, a.id)
				},
				meta: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(O.s)(e, a.id)
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(O.x)(e, a.id)
				}
			});
			var Ut = Object(Lt.b)(Object(n.b)(Zt, (e, t) => {
					let {
						subreddit: a,
						onComplete: s
					} = t;
					return {
						onError: t => Object(Tt.a)(e, t),
						onPaymentSuccessful: t => {
							t ? e(Object(St.g)(a.id, !0)).then(() => e(Object(Bt.a)(() => {}))).then(() => s && s()).then(() => e(Object(Mt.c)({
								subredditId: a.id,
								initialView: Ft.c.MyBadges
							}))) : e(Object(It.b)(a.url))
						}
					}
				})(Object(h.c)(Vt))),
				qt = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/index.m.less"),
				Xt = a.n(qt);
			const {
				fbt: Jt
			} = a("./node_modules/fbt/lib/FbtPublic.js");

			function Yt(e) {
				return r.a.createElement("div", {
					className: Xt.a.dollarPurchase
				}, e.target.type === $t.Badge && e.target.product.price && r.a.createElement(Ot.a, {
					correlationId: e.correlationId,
					key: "checkout-purchase-button",
					price: e.target.product.price,
					productId: e.target.product.id,
					subreddit: e.subreddit,
					onPaymentSuccessful: e.onPaymentComplete
				}), e.target.type === $t.Subscription && e.target.dollarPrice && r.a.createElement(Ut, {
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

			function Kt(e) {
				return !e.wallet || new Nt.BigNumber(e.wallet.amount).isLessThan(new Nt.BigNumber(e.tokenPrice)) ? r.a.createElement(Pt.i, {
					className: Xt.a.notEnoughTokens,
					disabled: !0
				}, Jt._("Not enough {token-name}", [Jt._param("token-name", e.tokenName)], {
					hk: "4urJTo"
				})) : r.a.createElement("div", {
					className: Xt.a.tokenPurchase
				}, r.a.createElement(Pt.i, {
					onClick: e.onPayWithTokens,
					className: Xt.a.tokenPurchaseButton
				}, Jt._("Pay with {token-name}", [Jt._param("token-name", e.tokenName)], {
					hk: "7b9oh"
				})), r.a.createElement("div", {
					className: Xt.a.requiresMobile
				}, Jt._("Requires Reddit Vault on mobile", null, {
					hk: "4oRRlp"
				})))
			}

			function Qt(e) {
				const {
					dollarPrice: t,
					monthly: a,
					subreddit: s,
					tokenPrice: n
				} = e;
				return r.a.createElement("div", {
					className: e.className
				}, t && n && r.a.createElement("div", {
					className: Xt.a.selectPaymentBox
				}, r.a.createElement("div", {
					className: Xt.a.selectPaymentTitleBox
				}, r.a.createElement("span", {
					className: Xt.a.selectPaymentTitle
				}, Jt._("Select Payment Method", null, {
					hk: "15rwcx"
				}))), r.a.createElement("div", {
					className: Xt.a.paymentContainer
				}, r.a.createElement("div", {
					className: Xt.a.paymentAmount
				}, r.a.createElement(at.a, {
					tokenPrice: n,
					monthly: a,
					subredditId: s.id,
					hideTokenName: !0
				})), r.a.createElement(Kt, e)), r.a.createElement("div", {
					className: Xt.a.paymentContainer
				}, r.a.createElement("div", {
					className: Xt.a.paymentAmount
				}, r.a.createElement(at.a, {
					dollarPrice: t,
					monthly: a,
					subredditId: s.id,
					hideTokenName: !0
				})), r.a.createElement(Yt, e))), t && !n && r.a.createElement(Yt, e), n && !t && r.a.createElement(Kt, e))
			}
			var $t, ea = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/index.m.less"),
				ta = a.n(ea);
			! function(e) {
				e[e.Badge = 0] = "Badge", e[e.Subscription = 1] = "Subscription"
			}($t || ($t = {}));
			class aa extends r.a.Component {
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
						onClose: n,
						onPaymentComplete: o,
						tokenDisplayConversion: i,
						tokenName: c,
						wallet: m
					} = this.props;
					if (!a) return null;
					const d = t.type === $t.Badge ? t.product.price : t.dollarPrice,
						l = t.type === $t.Badge ? void 0 : t.tokenPrice;
					if (this.state.showTokenTransactionModal && l) return r.a.createElement(nt.a, {
						correlationId: e,
						onClose: n,
						onPaymentComplete: o,
						price: l,
						subredditId: a.id
					});
					const u = t.type === $t.Subscription;
					return r.a.createElement("div", {
						className: ta.a.container
					}, r.a.createElement(Ct, {
						purchaseType: t.type,
						subredditId: a.id,
						onClose: n
					}), r.a.createElement("div", {
						className: ta.a.content
					}, r.a.createElement(ut, {
						className: ta.a.cart,
						description: t.description(a),
						dollarPrice: d,
						monthly: u,
						subredditId: a.id,
						tokenPrice: l
					}), r.a.createElement(Qt, {
						className: ta.a.payment,
						correlationId: e,
						dollarPrice: d,
						monthly: u,
						onPayWithTokens: () => this.setState({
							showTokenTransactionModal: !0
						}),
						onPaymentComplete: o,
						subreddit: a,
						target: t,
						tokenName: c,
						tokenPrice: l,
						trial: t.type === $t.Subscription && t.trial,
						username: s,
						wallet: m
					}), r.a.createElement(Et, {
						className: ta.a.footer,
						dollarPrice: d,
						purchaseType: t.type,
						subredditId: a.id,
						tokenDisplayConversion: i,
						tokenName: c,
						tokenPrice: l
					})))
				}
			}
			const sa = Object(i.c)({
					subreddit: (e, t) => t.subreddit,
					tokenDisplayConversion: ct.o,
					tokenName: ct.p,
					wallet: ct.g
				}),
				ra = Object(n.b)((e, t) => {
					const a = Object(ot.q)(e, t);
					return sa(e, Object.assign(Object.assign({}, t), {
						subreddit: a,
						subredditId: a && a.id || void 0
					}))
				}),
				na = Object(ot.t)(),
				oa = Object(h.c)(aa);
			var ia = Object(it.a)("spSpecialMemberships", Object(rt.a)(na(ra(oa)))),
				ca = a("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Products/index.m.less"),
				ma = a.n(ca);

			function da() {
				return (da = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
					}
					return e
				}).apply(this, arguments)
			}
			var la = function(e, t) {
				var a = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (a[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (s = Object.getOwnPropertySymbols(e); r < s.length; r++) t.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (a[s[r]] = e[s[r]])
				}
				return a
			};

			function ua(e) {
				const {
					dollarPrice: t,
					tokenPrice: a,
					trial: n
				} = e, o = la(e, ["dollarPrice", "tokenPrice", "trial"]);
				return r.a.createElement(ia, da({}, o, {
					target: {
						dollarPrice: t,
						tokenPrice: a,
						trial: n,
						description(e) {
							const t = e && e.displayText || "",
								a = E.fbt._("{communityName} Subreddit Supporter", [E.fbt._param("communityName", t)], {
									hk: "3VL2SS"
								});
							return r.a.createElement(s.Fragment, null, r.a.createElement("img", {
								className: ma.a.crown,
								src: "".concat(v.a.assetPath, "/img/memberships/paywall/fortnitebr/Crown.gif")
							}), a)
						},
						type: $t.Subscription
					},
					viewEvent: t => Object.assign(Object.assign({
						source: "meta",
						action: "view",
						noun: "subscription_checkout_modal",
						correlationId: e.correlationId
					}, x.defaults(t)), {
						subreddit: x.subreddit(t)
					}),
					onPaymentComplete: e.onClose
				}))
			}
			var pa = a("./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx"),
				ha = a("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				ba = a("./src/reddit/featureFlags/index.ts"),
				ga = a("./src/reddit/pages/meta/MembershipPaywallPage/PurchaseButton/index.m.less"),
				fa = a.n(ga);
			const {
				fbt: _a
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class xa extends r.a.Component {
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
						userIsLoggedIn: n
					} = this.props, {
						canGift: o
					} = N(s), i = a.prices, c = i.usd, m = i.points, d = this.props.userIsPremiumSubscriber === O.a.Subscribed;
					return r.a.createElement(r.a.Fragment, null, !n && o && r.a.createElement(ha.c, {
						className: fa.a.recipient,
						onChange: this.handleUserNameChange
					}), r.a.createElement("button", {
						className: fa.a.checkout,
						disabled: d || o && !n && !this.state.usernameIsValid,
						onClick: n ? this.openCheckout : this.props.openLoginModal
					}, r.a.createElement("div", {
						className: fa.a.shimmer
					}), d ? _a._("Already a {supporter-term}", [_a._param("supporter-term", a.member)], {
						hk: "30uNOq"
					}) : _a._("Become a {supporter-term}", [_a._param("supporter-term", a.member)], {
						hk: "3TcAfC"
					})), r.a.createElement(at.a, {
						className: fa.a.price,
						dollarPrice: c,
						tokenPrice: m,
						monthly: !0,
						subredditId: s
					}), this.state.checkoutOpen ? t ? r.a.createElement(st.a, {
						withOverlay: !0,
						correlationId: e,
						subredditId: s,
						onClose: this.closeCheckout
					}) : r.a.createElement(ua, {
						withOverlay: !0,
						correlationId: e,
						dollarPrice: c,
						tokenPrice: m,
						username: !n && this.state.usernameIsValid ? this.state.username : void 0,
						onClose: this.closeCheckout
					}) : null, r.a.createElement(pa.a, {
						subredditId: s
					}))
				}
			}
			const ya = Object(i.c)({
				meta: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(O.s)(e, a)
				},
				customCrypto: ba.d.spCustomCrypto,
				userIsLoggedIn: e => !!e.user.account,
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: a
					} = t;
					return Object(O.x)(e, a)
				}
			});
			var Ea = Object(n.b)(ya, e => ({
					openLoginModal: () => e(Object(tt.h)())
				}))(xa),
				va = a("./src/reddit/pages/meta/MembershipPaywallPage/Intro/index.m.less"),
				ka = a.n(va);
			const ja = Object(i.c)({
				meta: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(O.s)(e, a.id)
				}
			});
			var wa, Ca, Na = Object(n.b)(ja)((function(e) {
					const {
						className: t,
						correlationId: a,
						meta: s,
						subreddit: n
					} = e;
					return r.a.createElement("div", {
						className: Object(l.a)(t, ka.a.container)
					}, r.a.createElement("div", {
						className: ka.a.logo
					}, r.a.createElement(et.a, {
						className: ka.a.radialHighlightInner
					}), r.a.createElement(et.a, {
						className: ka.a.radialHighlightOuter
					}), r.a.createElement($e.a, {
						size: "large",
						subreddit: n
					})), r.a.createElement("header", {
						className: ka.a.subscriptionName
					}, "r/", n.name, " ", s.memberAltPlural), r.a.createElement("article", {
						className: ka.a.description
					}, E.fbt._("Support r/{communityName}. Get exclusive features in the community.", [E.fbt._param("communityName", n.name)], {
						hk: "13ofnK"
					})), r.a.createElement(Ea, {
						checkoutOnLogin: !0,
						correlationId: a,
						subredditId: n.id
					}))
				})),
				Oa = a("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Pa = a("./node_modules/react-motion/lib/react-motion.js"),
				Ia = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/Testimonials/index.m.less"),
				Ma = a.n(Ia);
			! function(e) {
				e[e.Right = 110] = "Right", e[e.Center = 50] = "Center", e[e.Left = -110] = "Left"
			}(wa || (wa = {})),
			function(e) {
				e[e.Right = 0] = "Right", e[e.Center = -310] = "Center", e[e.Left = -620] = "Left"
			}(Ca || (Ca = {}));
			const Sa = fe()([{
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
				Ta = 1e4;
			class Ba extends r.a.Component {
				constructor() {
					super(...arguments), this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.props.testimonies.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, Ta)
					}
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, Ta)
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
						currentSlideIdx: n
					} = this.state;
					return r.a.createElement("div", {
						className: Object(l.a)(e, Ma.a.container)
					}, r.a.createElement(Pa.TransitionMotion, {
						defaultStyles: [{
							key: "slide-0",
							data: {
								index: 0
							},
							style: {
								left: wa.Center,
								marginLeft: Ca.Center,
								opacity: 1
							}
						}],
						styles: [{
							key: "slide-".concat(n),
							data: {
								index: n
							},
							style: {
								left: Object(Pa.spring)(wa.Center),
								marginLeft: Object(Pa.spring)(Ca.Center),
								opacity: Object(Pa.spring)(1)
							}
						}],
						willEnter: () => ({
							left: wa.Right,
							marginLeft: Ca.Right,
							opacity: 0
						}),
						willLeave: () => ({
							left: Object(Pa.spring)(wa.Left),
							marginLeft: Object(Pa.spring)(Ca.Left),
							opacity: Object(Pa.spring)(0)
						})
					}, e => r.a.createElement(s.Fragment, null, e.map(e => {
						const n = a[e.data.index],
							o = n.badges.map(e => {
								const {
									url2x: t
								} = Object(k.b)(20, 20, e);
								return t
							}),
							i = be()(n.badges),
							c = i && i.extra && i.extra.style && i.extra.style.color;
						return r.a.createElement(s.Fragment, null, r.a.createElement("div", {
							className: Ma.a.testimony,
							key: e.key,
							style: {
								left: "".concat(e.style.left, "%"),
								marginLeft: "".concat(e.style.marginLeft, "px")
							},
							onClick: this.gotoNextSlide
						}, r.a.createElement("svg", {
							className: Object(l.a)(Ma.a.testimonyOutline, {
								[Ma.a.testimonyOutlineFlat]: !!t
							}),
							viewBox: " 0 0 619 243",
							xmlns: "http://www.w3.org/2000/svg"
						}, r.a.createElement("path", {
							d: "M78.9989 58.4826C70.5322 59.7119 62.7479 63.9147 58.4403 71.3066C53.9012 79.0958 49 90.4192 49 103.001C49 116.034 51.9394 127.873 54.5482 135.813C56.7437 142.495 62.1609 147.369 68.9713 149.128C85.4673 153.389 123.116 160.96 193.436 165.111C196.937 168.49 198.713 173.771 198.713 181.427C198.713 181.427 201.841 181.739 207 174.001C208.968 171.049 209.995 168.285 210.517 166.018C214.102 166.188 217.762 166.349 221.5 166.501C325.757 170.721 486.315 161.046 533.817 157.928C542.454 157.361 550.345 152.8 554.249 145.074C559.465 134.75 566.176 118.719 568.5 101.001C570.389 86.6005 567.819 74.8754 564.58 66.5092C560.681 56.4386 550.794 50.9089 540.11 49.3352C504.988 44.1618 415.934 33.7517 297.5 39.5005C179.641 45.2214 106.881 54.4345 78.9989 58.4826Z"
						}), r.a.createElement("path", {
							d: "M58.4403 71.3066L57.5763 70.8031L58.4403 71.3066ZM78.9989 58.4826L79.1425 59.4723L78.9989 58.4826ZM54.5482 135.813L55.4982 135.501L54.5482 135.813ZM68.9713 149.128L69.2213 148.16L68.9713 149.128ZM193.436 165.111L194.13 164.392L193.864 164.135L193.495 164.113L193.436 165.111ZM198.713 181.427H197.713V182.332L198.614 182.422L198.713 181.427ZM207 174.001L207.832 174.555L207 174.001ZM210.517 166.018L210.564 165.02L209.73 164.98L209.542 165.794L210.517 166.018ZM221.5 166.501L221.46 167.5L221.5 166.501ZM533.817 157.928L533.882 158.926L533.817 157.928ZM554.249 145.074L555.141 145.525L554.249 145.074ZM568.5 101.001L567.508 100.87L568.5 101.001ZM564.58 66.5092L565.512 66.1482L564.58 66.5092ZM540.11 49.3352L539.964 50.3245L540.11 49.3352ZM297.5 39.5005L297.548 40.4993L297.5 39.5005ZM59.3043 71.8101C63.4213 64.7452 70.8961 60.6695 79.1425 59.4723L78.8552 57.493C70.1682 58.7542 62.0745 63.0841 57.5763 70.8031L59.3043 71.8101ZM50 103.001C50 90.6676 54.8096 79.523 59.3043 71.8101L57.5763 70.8031C52.9927 78.6685 48 90.1709 48 103.001H50ZM55.4982 135.501C52.9092 127.621 50 115.892 50 103.001H48C48 116.176 50.9697 128.125 53.5981 136.125L55.4982 135.501ZM69.2213 148.16C62.7244 146.482 57.5822 141.844 55.4982 135.501L53.5981 136.125C55.9052 143.147 61.5974 148.257 68.7212 150.096L69.2213 148.16ZM193.495 164.113C123.223 159.964 85.6407 152.401 69.2213 148.16L68.7212 150.096C85.2939 154.377 123.009 161.955 193.377 166.11L193.495 164.113ZM199.713 181.427C199.713 173.637 197.907 168.036 194.13 164.392L192.742 165.831C195.967 168.943 197.713 173.906 197.713 181.427H199.713ZM206.168 173.446C203.639 177.239 201.662 178.976 200.393 179.767C199.761 180.161 199.306 180.319 199.044 180.384C198.913 180.416 198.827 180.425 198.789 180.428C198.77 180.429 198.762 180.429 198.766 180.429C198.768 180.429 198.773 180.429 198.781 180.429C198.784 180.43 198.789 180.43 198.794 180.43C198.797 180.431 198.8 180.431 198.803 180.431C198.804 180.431 198.806 180.431 198.808 180.431C198.808 180.432 198.81 180.432 198.81 180.432C198.811 180.432 198.812 180.432 198.713 181.427C198.614 182.422 198.615 182.422 198.617 182.422C198.617 182.422 198.618 182.422 198.619 182.423C198.621 182.423 198.623 182.423 198.625 182.423C198.628 182.423 198.632 182.424 198.637 182.424C198.645 182.425 198.654 182.425 198.664 182.426C198.684 182.427 198.707 182.428 198.733 182.428C198.785 182.429 198.85 182.428 198.926 182.423C199.079 182.412 199.278 182.385 199.521 182.326C200.006 182.207 200.656 181.96 201.451 181.464C203.035 180.477 205.202 178.5 207.832 174.555L206.168 173.446ZM209.542 165.794C209.045 167.952 208.063 170.603 206.168 173.446L207.832 174.555C209.872 171.495 210.944 168.618 211.491 166.243L209.542 165.794ZM221.54 165.501C217.805 165.35 214.147 165.189 210.564 165.02L210.47 167.017C214.057 167.187 217.72 167.348 221.46 167.5L221.54 165.501ZM533.751 156.93C486.241 160.048 325.736 169.72 221.54 165.501L221.46 167.5C325.779 171.723 486.388 162.043 533.882 158.926L533.751 156.93ZM553.356 144.623C549.634 151.989 542.087 156.383 533.751 156.93L533.882 158.926C542.82 158.339 551.056 153.611 555.141 145.525L553.356 144.623ZM567.508 100.87C565.205 118.433 558.547 134.351 553.356 144.623L555.141 145.525C560.384 135.149 567.147 119.004 569.492 101.131L567.508 100.87ZM563.647 66.8703C566.836 75.1069 569.372 86.6627 567.508 100.87L569.492 101.131C571.405 86.5382 568.802 74.6438 565.512 66.1482L563.647 66.8703ZM539.964 50.3245C550.439 51.8675 559.924 57.2547 563.647 66.8703L565.512 66.1482C561.437 55.6226 551.148 49.9503 540.256 48.3459L539.964 50.3245ZM297.548 40.4993C415.903 34.7544 504.889 45.1581 539.964 50.3245L540.256 48.3459C505.086 43.1655 415.966 32.749 297.452 38.5017L297.548 40.4993ZM79.1425 59.4723C106.993 55.4287 179.721 46.2187 297.548 40.4993L297.452 38.5017C179.56 44.2242 106.769 53.4403 78.8552 57.493L79.1425 59.4723Z",
							fill: "#9F68D4",
							"fill-opacity": "0.1"
						})), r.a.createElement("div", {
							className: Ma.a.testimonyText
						}, n.text)), r.a.createElement("div", {
							className: Ma.a.user,
							key: "user-".concat(e.key),
							style: {
								opacity: e.style.opacity
							}
						}, o.map(e => r.a.createElement("img", {
							className: Ma.a.badge,
							src: e
						})), r.a.createElement("div", {
							className: Ma.a.username,
							style: {
								color: c
							}
						}, "u/".concat(n.username))))
					}))), r.a.createElement("div", {
						className: Ma.a.indicators
					}, a.map((e, t) => r.a.createElement("div", {
						className: Object(l.a)(Ma.a.indicator, {
							[Ma.a.indicatorSelected]: t === n
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))
				}
			}
			Ba.defaultProps = {
				testimonies: Sa
			};
			var La = a("./src/reddit/pages/meta/MembershipPaywallPage/Thanks/index.m.less"),
				Aa = a.n(La);
			const Ra = Object(i.c)({
				meta: (e, t) => {
					let {
						subreddit: a
					} = t;
					return Object(O.s)(e, a.id)
				}
			});
			var za = Object(n.b)(Ra)((function(e) {
					const {
						className: t,
						correlationId: a,
						meta: s,
						subreddit: n
					} = e, o = N(n.id);
					return r.a.createElement("article", {
						className: Object(l.a)(Aa.a.container, t)
					}, o.communityThanks && r.a.createElement("header", {
						className: Aa.a.title
					}, E.fbt._("The Community Thanks You", null, {
						hk: "28CsBt"
					})), o.testimonials && r.a.createElement(Ba, {
						flatDisplay: !0
					}), o.testimonials && r.a.createElement("div", {
						className: Aa.a.divider
					}), r.a.createElement("footer", {
						className: Aa.a.footer
					}, r.a.createElement($e.a, {
						className: Aa.a.brand,
						size: "large",
						subreddit: n
					}), r.a.createElement("div", {
						className: Aa.a.cta
					}, r.a.createElement("div", {
						className: Aa.a.description
					}, E.fbt._("Support r/{communityName} with a {membership}", [E.fbt._param("communityName", n.name), E.fbt._param("membership", s.membership)], {
						hk: "3M1a22"
					})), r.a.createElement("div", {
						className: Aa.a.benefits
					}, o.styleBadges && r.a.createElement("div", {
						className: Aa.a.benefit
					}, r.a.createElement(Oa.a, {
						className: Aa.a.check
					}), "Add a badge and color to your username"), o.emotes && r.a.createElement("div", {
						className: Aa.a.benefit
					}, r.a.createElement(Oa.a, {
						className: Aa.a.check
					}), "Get access to premium animated emotes"), o.gifs && r.a.createElement("div", {
						className: Aa.a.benefit
					}, r.a.createElement(Oa.a, {
						className: Aa.a.check
					}), "Add GIFs to your comments")), r.a.createElement(Ea, {
						subredditId: n.id,
						correlationId: a
					}))))
				})),
				Fa = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/index.m.less"),
				Ga = a.n(Fa),
				Da = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx"),
				Wa = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Header/index.m.less"),
				Ha = a.n(Wa);
			const Va = [800, 1200];

			function Za(e) {
				const {
					className: t,
					subreddit: a
				} = e;
				return r.a.createElement("header", {
					className: Object(l.a)(Ha.a.container, t)
				}, r.a.createElement("div", {
					className: Ha.a.tag
				}, E.fbt._("benefits", null, {
					hk: "3HAYfG"
				})), r.a.createElement("div", {
					className: Ha.a.title
				}, E.fbt._("What do you get?", null, {
					hk: "3PyKKB"
				})), N(a.id).animations && r.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/a1hxn4/the_moment_my_son_discovered_that_his_skin/",
					target: "_blank"
				}, r.a.createElement(M.a, {
					scrollRange: Va
				}, e => r.a.createElement("img", {
					className: Ha.a.chickenRightArm,
					src: Object(T.a)(a, "chicken_right_arm@2x.png"),
					style: e
				})), r.a.createElement("img", {
					className: Ha.a.chickenTorso,
					src: Object(T.a)(a, "chicken_torso@2x.png")
				}), r.a.createElement(M.a, {
					scrollRange: Va
				}, e => r.a.createElement("img", {
					className: Ha.a.chickenLeftArm,
					src: Object(T.a)(a, "chicken_left_arm@2x.png"),
					style: e
				})), r.a.createElement("img", {
					className: Ha.a.chickenLeftShoulder,
					src: Object(T.a)(a, "chicken_left_shoulder@2x.png")
				}), r.a.createElement("img", {
					className: Ha.a.chickenHead,
					src: Object(T.a)(a, "chicken_head@2x.png")
				})))
			}
			var Ua = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Tip/index.m.less"),
				qa = a.n(Ua);

			function Xa(e) {
				return r.a.createElement("div", {
					className: Object(l.a)(e.className, qa.a.container)
				}, r.a.createElement("div", {
					className: qa.a.circle
				}, e.index), r.a.createElement("div", {
					className: qa.a.circleShimmer
				}), r.a.createElement("div", {
					className: qa.a.tooltipWrapper
				}, r.a.createElement("svg", {
					className: qa.a.tooltip,
					viewBox: "0 0 140 60",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M8 0C3.58172 0 0 3.58172 0 8V42C0 46.4183 3.58172 50 8 50H60.3934L69.6066 59.2132L78.8198 50H132C136.418 50 140 46.4183 140 42V8C140 3.58172 136.418 0 132 0H8Z"
				})), r.a.createElement("div", {
					className: qa.a.tooltipText
				}, e.text)))
			}
			var Ja = a("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/index.m.less"),
				Ya = a.n(Ja);

			function Ka(e) {
				const t = Object(T.a)(e.subreddit, "what-do-you-get.png");
				return r.a.createElement("article", {
					className: Object(l.a)(Ya.a.container, e.className)
				}, r.a.createElement(Za, {
					subreddit: e.subreddit
				}), r.a.createElement("div", {
					className: Ya.a.content
				}, r.a.createElement("img", {
					className: Ya.a.img,
					src: t
				}), r.a.createElement("img", {
					className: Ya.a.emoji,
					src: "https://meta.redditmedia.com/img/fortnitebr/emotes/oof-2x.gif"
				}), r.a.createElement("img", {
					className: Ya.a.gif,
					src: "http://giphygifs.s3.amazonaws.com/media/HX3lSnGXZnaWk/giphy.gif"
				}), r.a.createElement(Xa, {
					className: Ya.a.tip1,
					index: 1,
					text: E.fbt._("Get up to 3 badges", null, {
						hk: "2ftguA"
					})
				}), r.a.createElement(Xa, {
					className: Ya.a.tip2,
					index: 2,
					text: E.fbt._("Use animated emojis in comments", null, {
						hk: "1teakj"
					})
				}), r.a.createElement(Xa, {
					className: Ya.a.tip3,
					index: 3,
					text: E.fbt._("Embed GIF directly in your comments", null, {
						hk: "1fLSUy"
					})
				})), N(e.subreddit.id).animations && r.a.createElement(Da.a, {
					className: Ya.a.footer,
					subreddit: e.subreddit
				}))
			}

			function Qa(e) {
				const t = N(e.subreddit.id),
					a = t.styleBadges && t.emotes && t.gifs;
				return r.a.createElement("article", {
					className: Object(l.a)(e.className, Ga.a.container)
				}, t.testimonials && r.a.createElement(b, {
					fireOnce: !0,
					onEnter: t => Object.assign(Object.assign({
						source: "meta",
						action: "view",
						noun: "landing_page_2_testimonials",
						correlationId: e.correlationId
					}, x.defaults(t)), {
						subreddit: x.subreddit(t)
					})
				}, r.a.createElement(Ba, null)), a && r.a.createElement(b, {
					fireOnce: !0,
					onEnter: t => Object.assign(Object.assign({
						source: "meta",
						action: "view",
						noun: "landing_page_3_what_do_you_get",
						correlationId: e.correlationId
					}, x.defaults(t)), {
						subreddit: x.subreddit(t)
					})
				}, r.a.createElement(Ka, {
					subreddit: e.subreddit
				})))
			}
			var $a = a("./src/reddit/pages/meta/MembershipPaywallPage/index.m.less"),
				es = a.n($a);
			class ts extends r.a.Component {
				constructor(e) {
					super(e);
					const t = Object(u.a)(location.search);
					this.correlationId = t && t.get("corr") || m()()
				}
				componentDidMount() {
					this.props.sendEvent(e => Object.assign(Object.assign({
						source: "meta",
						action: "view",
						noun: "subscription_learn_more_page",
						correlationId: this.correlationId
					}, x.defaults(e)), {
						subreddit: x.subreddit(e)
					}))
				}
				render() {
					const {
						isOverlay: e,
						subreddit: t
					} = this.props;
					return t ? g.b.has(t.name.toLowerCase()) ? r.a.createElement("div", {
						className: Object(l.a)(es.a.container, {
							[es.a.notOverlay]: !e,
							[es.a.overlay]: e
						})
					}, r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => Object.assign(Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_1_intro",
							correlationId: this.correlationId
						}, x.defaults(e)), {
							subreddit: x.subreddit(e)
						})
					}, r.a.createElement(Na, {
						correlationId: this.correlationId,
						subreddit: t
					})), r.a.createElement(Qa, {
						className: es.a.whatDoYouGet,
						correlationId: this.correlationId,
						subreddit: t
					}), r.a.createElement(We, {
						className: es.a.benefits,
						correlationId: this.correlationId,
						subreddit: t
					}), r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => Object.assign(Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_10_community_thanks",
							correlationId: this.correlationId
						}, x.defaults(e)), {
							subreddit: x.subreddit(e)
						})
					}, r.a.createElement(za, {
						className: es.a.thanks,
						correlationId: this.correlationId,
						subreddit: t
					})), r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => Object.assign(Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_11_faq",
							correlationId: this.correlationId
						}, x.defaults(e)), {
							subreddit: x.subreddit(e)
						})
					}, r.a.createElement(Xe, {
						className: es.a.faq,
						subreddit: t
					})), r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => Object.assign(Object.assign({
							source: "meta",
							action: "view",
							noun: "landing_page_12_footer",
							correlationId: this.correlationId
						}, x.defaults(e)), {
							subreddit: x.subreddit(e)
						})
					}, r.a.createElement(Qe, {
						className: es.a.footer,
						subreddit: t
					}))) : r.a.createElement(o.c, {
						to: "/r/".concat(t.name)
					}) : null
				}
			}
			const as = Object(i.c)({
				currentUser: y.i,
				isOverlay: f.i,
				subreddit: (e, t) => {
					let {
						match: a
					} = t;
					const s = a.params.subredditName;
					if (s) return Object(_.B)(e, {
						subredditName: s
					})
				}
			});
			var ss;
			t.default = Object(h.c)(Object(n.b)(as)((ss = ts, class extends s.Component {
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
					return this.state.mounted ? r.a.createElement(ss, this.props) : null
				}
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MembershipPaywallPage.9890ce2ece9ecc09025b.js.map