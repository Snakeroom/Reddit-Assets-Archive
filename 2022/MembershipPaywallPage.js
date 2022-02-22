// https://www.redditstatic.com/desktop2x/MembershipPaywallPage.abfef4baed25d1cd5782.js
// Retrieved at 2/22/2022, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MembershipPaywallPage"], {
		"./node_modules/lodash/flattenDeep.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseFlatten.js"),
				r = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? a(e, r) : []
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var a = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return a(e) + t
			}
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./src/lib/currency/cleanNumber/index.ts");

			function r(e, t) {
				const s = Object(a.a)(e),
					r = parseInt(s) / 100;
				return Math.floor(r) !== r || t ? r.toFixed(2) : String(r)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, s) {
			"use strict";

			function a(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			s.d(t, "a", (function() {
				return a
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "e", (function() {
				return d
			}));
			var a, r = s("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(a || (a = {}));
			const n = "USD",
				o = "ETH",
				i = "COINS",
				c = [o, "BTC"],
				m = [i, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				d = {
					COINS: () => r.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => r.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => r.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return d
			}));
			var a = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				r = s("./src/lib/currency/centsToDollars/index.ts"),
				n = s("./src/lib/currency/currencies.ts"),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./src/reddit/helpers/governance/tokens.ts"),
				c = s("./src/reddit/constants/intlSupport.ts");
			const m = (e, {
					locale: t = a.DEFAULT_LOCALE,
					pretty: s,
					formatOptions: r
				} = {}) => {
					const n = Number(e);
					return Object(c.c)() ? s ? Object(o.b)(n) : new Intl.NumberFormat(t, r).format(n) : l(n, s, t)
				},
				d = (e, t = {}) => {
					const {
						locale: s = a.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: m,
						displayConversion: d,
						forceDecimals: h,
						currency: b = t.currency || (t.type ? u(t.type) : n.c),
						type: g = t.type || (t.currency ? p(t.currency) : n.b.Real)
					} = t, f = Number(e), _ = String(e);
					switch (g) {
						case n.b.Reddit: {
							const e = n.e[b],
								t = e ? e() : b;
							return Object(c.c)() ? new Intl.NumberFormat(s, {
								currencyDisplay: "symbol",
								...m
							}).format(f) + " " + t : l(f, o, s, t)
						}
						case n.b.Crypto: {
							if (o) {
								return Object(i.c)(_, d) + " " + b
							}
							const e = Number(Object(i.b)(_, d));
							return Object(c.c)() ? new Intl.NumberFormat(s, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...m
							}).format(e) : l(e, o, s, b)
						}
						case n.b.Real:
						default: {
							const e = Number(Object(r.a)(_, h));
							return Object(c.c)() ? new Intl.NumberFormat(s, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...m
							}).format(e) : l(e, o, s, b)
						}
					}
				},
				l = (e, t, s, a) => {
					return (t ? Object(o.b)(e) : e.toLocaleString(s)) + (a ? " " + a : "")
				},
				p = e => n.g.includes(e.toUpperCase()) ? n.b.Reddit : n.f.includes(e.toUpperCase()) ? n.b.Crypto : n.b.Real,
				u = e => {
					switch (e) {
						case n.b.Crypto:
							return n.d;
						case n.b.Reddit:
							return n.a;
						case n.b.Real:
						default:
							return n.c
					}
				}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				m = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				l = s.n(d);
			const p = e => e.preventDefault();
			t.a = Object(o.a)(e => n.a.createElement(i.e, null, n.a.createElement(i.i, null, n.a.createElement(m.a, null, n.a.createElement(i.q, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), n.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, n.a.createElement(i.b, null)))), n.a.createElement(i.l, null, n.a.createElement(i.p, {
				className: l.a.ModalText
			}, e.modalText)), n.a.createElement(i.g, null, !e.hideCancelButton && n.a.createElement(i.a, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), n.a.createElement(i.u, {
				className: l.a.buttonWidth,
				onMouseDown: p,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			const {
				fbt: n
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function o({
				className: e
			}) {
				return r.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: e
				}, n._("Previews Terms of Use", null, {
					hk: "2eTczn"
				}))
			}
		},
		"./src/reddit/components/Economics/Confetti/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_22MTLJBZK8cANpC_Qc0W8s",
				piece: "_3RfPsEAbZKkVHvjLqOq0mZ"
			}
		},
		"./src/reddit/components/Economics/Price/index.m.less": function(e, t, s) {
			e.exports = {
				price: "_2ZOGQHalmPN89FqiioxqoW",
				token: "_2PNHBi0pHlP4y_f4W9yfPw"
			}
		},
		"./src/reddit/components/Economics/Price/index.tsx": function(e, t, s) {
			"use strict";
			var a, r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/localizeCurrency/index.ts"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/components/Governance/Token/index.tsx"),
				l = s("./src/reddit/helpers/governance/tokens.ts"),
				p = s("./src/reddit/hooks/useLocale.ts"),
				u = s("./src/reddit/selectors/crypto/points.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(a || (a = {}));
			const b = (e, t) => {
					if (e) switch (t) {
						case a.Monthly:
							return h.fbt._("{price}/mo", [h.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				g = (e, t) => {
					if (e) switch (t) {
						case a.Monthly:
							return h.fbt._("{price} / month", [h.fbt._param("price", e)], {
								hk: "4ugXuk"
							});
						default:
							return e
					}
				};
			var f = s("./src/reddit/components/Economics/Price/index.m.less"),
				_ = s.n(f);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), y = ({
				subredditId: e,
				pointPrice: t
			}) => n.a.createElement(n.a.Fragment, null, n.a.createElement(d.a, {
				className: _.a.token,
				subredditId: e
			}), t);
			t.a = e => {
				const {
					className: t,
					hideTokenName: s,
					monthly: r,
					subredditId: d
				} = e, h = Object(p.a)(), f = Object(o.e)(e => Object(u.b)(e, d)), v = e.dollarPrice && Object(c.b)(e.dollarPrice, {
					locale: h,
					forceDecimals: !0
				}), E = e.tokenPrice && f && Object(m.a)(Object(l.b)(e.tokenPrice, null == f ? void 0 : f.displayConversion)) + (s ? "" : " " + f.name);
				if (!v && !E) return null;
				const w = r ? a.Monthly : a.Once;
				return n.a.createElement("span", {
					className: Object(i.a)(t, _.a.price)
				}, v && E ? x._("{dollar-price} or {point-price}", [x._param("dollar-price", b(v, w)), x._param("point-price", n.a.createElement(y, {
					subredditId: d,
					pointPrice: b(E, w)
				}))], {
					hk: "2Gif0l"
				}) : v ? g(v, w) : E ? n.a.createElement(y, {
					subredditId: d,
					pointPrice: g(E, w)
				}) : null)
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less": function(e, t, s) {
			e.exports = {
				button: "_10ESw5cXwHBLWInQHjwYH2",
				container: "_1sfIwxqWpDotVXLjKV_2jO",
				loading: "_18AJBQlrwo3obCZczqf9Is",
				loadingIcon: "_3A8u5o0uPgpbYt-dE4XZiC",
				submitting: "_167697f4GfaciFsGrMXP-w"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/governance/errorToast.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/ApiContext.tsx"),
				d = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = s("./src/reddit/endpoints/governance/products/badges.ts"),
				p = s("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				u = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less"),
				b = s.n(h);
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
						Object(p.a)({
							apiContext: e,
							config: {
								type: "purchase"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: s => Object(l.d)(e, {
								nonce: s,
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
								}), this.props.sendEvent(e => ({
									source: "meta",
									action: "click",
									noun: "badge_gallery_paypal_purchase",
									correlationId: this.props.correlationId,
									...u.o(e),
									subreddit: u.jb(e)
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
			t.a = Object(m.b)(Object(n.b)(void 0, (e, {
				subreddit: t
			}) => ({
				onError: t => Object(i.a)(e, t)
			}))(Object(c.c)(f)))
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/higherOrderComponents/makeAsync.tsx");
			const r = Object(a.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumBlockchainCheckoutModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.tsx")).then(e => e.default)
			});
			t.a = r
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Cart/index.m.less": function(e, t, s) {
			e.exports = {
				container: "i0lchXJA5Dup_Op8k_UvG",
				description: "RyMUILAlWHIP5yHrsIRUK",
				rhs: "_2Byh-FeUhk5NLLqInuciri",
				monthlyText: "_1UJ2XLb7zAyZJm2IG70b8O"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Footer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "yQcP2nhhN4KlRXQL7Yyat",
				link: "JFz_onNhRvDkA39DMDGLr",
				linkLast: "_2tWZsJd91sgL5Q3C1vHdWm"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Header/index.m.less": function(e, t, s) {
			e.exports = {
				close: "_36KvgN4Tgsg1mjKKUnMkcE",
				container: "_19sRWT77cnRhheoNPG1ZE6",
				text: "z7BZWyDlEY5SQkMiUwNSS"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/PurchaseButton/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Products/index.m.less": function(e, t, s) {
			e.exports = {
				badgeImage: "_24nb1Wn-HQrlcIMVXggPWP",
				crown: "_1C6OFdtgaIgK_TyogeJOgp"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/CheckoutModal/index.m.less": function(e, t, s) {
			e.exports = {
				cart: "PxUAb5u5curFoJmkN43pD",
				container: "_1rguiWal__5IcFoZwSe0rS",
				content: "_1bK-Mw7EE5ZnMei8Kub2Kk",
				footer: "_3GBKrS5u4-TjVoWpDmlXC-",
				payment: "wW8kQRKEVGkGiLaRVyxmA"
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts": function(e, t, s) {
			"use strict";
			var a, r, n, o;

			function i(e) {
				const {
					platform: t,
					playerType: s,
					region: a,
					style: r
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${r}/${a}_${t}_${s}_${r}.svg`
			}
			s.d(t, "a", (function() {
					return a
				})), s.d(t, "b", (function() {
					return r
				})), s.d(t, "c", (function() {
					return n
				})), s.d(t, "d", (function() {
					return i
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(a || (a = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(r || (r = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(n || (n = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(o || (o = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/fastdom/index.ts"),
				i = s("./src/reddit/components/Economics/Confetti/index.m.less"),
				c = s.n(i);
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
							s = e.offsetHeight;
						for (let a = 0; a < d; a++) this.createPiece(t, s);
						for (let a = 0; a < m - d; a++) window.setTimeout(() => this.createPiece(t, s), 1e4 * a / (m - d))
					}, this.createPiece = (e, t) => {
						o.a.write(() => {
							if (!this.el) return;
							const s = document.createElement("div"),
								a = (6 * Math.random() + 4) * t / 1e3;
							s.className = c.a.piece, s.style.width = 4 * Math.random() + 3 + "px", s.style.height = 6 * Math.random() + 3 + "px", s.style.transform = `rotate(${360*Math.random()}deg)`, this.el.appendChild(s), this.restartPiece(s, a, t, e), this.numPieces++
						})
					}, this.restartPiece = (e, t, s, a) => {
						if (this.el) {
							if (!this.props.letItRain) return e.parentNode.removeChild(e), this.numPieces--, void(this.numPieces || this.el.classList.remove(c.a.container));
							o.a.write(() => {
								e.style.transition = "", e.style.top = "0", e.style.left = Math.random() * a + "px", e.offsetHeight, e.style.transition = `top ${t}s ease-out, left ${t}s ease-out`
							}), setTimeout(() => {
								o.a.write(() => {
									e.style.top = s + "px", e.style.left = parseInt(e.style.left) + (400 * Math.random() - 200) + "px"
								})
							}, 0), setTimeout(() => this.restartPiece(e, t, s, a), 1e3 * t)
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
			var p = s("./src/reddit/featureFlags/component.tsx"),
				u = s("./src/reddit/hooks/useSafeState.ts"),
				h = s("./src/reddit/selectors/economics.ts");
			t.a = Object(p.a)("spSpecialMemberships", (function(e) {
				const t = Object(a.useRef)(!0),
					[s, o] = Object(u.a)(!1, t),
					i = Object(n.e)(t => Object(h.x)(t, e.subredditId)),
					c = Object(a.useRef)(i);
				return Object(a.useEffect)(() => () => {
					t.current = !1
				}, []), Object(a.useEffect)(() => {
					c.current === h.a.NotSubscribed && i === h.a.Subscribed && (o(!0), setTimeout(() => {
						o(!1)
					}, 1e4)), c.current = i
				}, [i]), i === h.a.Subscribed ? r.a.createElement(l, {
					letItRain: s
				}) : null
			}))
		},
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Bling/index.tsx"),
				i = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				c = s("./src/reddit/icons/svgs/Crown/index.tsx"),
				m = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				d = s("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less"),
				l = s.n(d);
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
					s = p[e.size || "regular"],
					a = e.subreddit && e.subreddit.primaryColor;
				return r.a.createElement("div", {
					className: Object(n.a)(s.container, e.className)
				}, e.subreddit ? r.a.createElement("img", {
					className: s.crownImg,
					src: m.a
				}) : r.a.createElement(c.a, {
					className: s.crown
				}), r.a.createElement(o.a, {
					className: s.bling1
				}), r.a.createElement(o.a, {
					className: s.bling2
				}), r.a.createElement(o.a, {
					className: s.bling3
				}), t ? r.a.createElement("img", {
					className: s.icon,
					src: t,
					style: {
						backgroundColor: a
					}
				}) : r.a.createElement(i.a, {
					className: s.defaultIcon,
					style: {
						backgroundColor: a
					}
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./src/config.ts"),
				r = s("./node_modules/lodash/flattenDeep.js"),
				n = s.n(r),
				o = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const i = `${a.a.assetPath}/img/memberships/paywall/crown.gif`,
				c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				m = new Set(n()(Object.keys(o.a).map(e => Object.keys(o.b).map(t => Object.keys(o.c).map(s => `${s}_${e}_${t}_badge`)))))
		},
		"./src/reddit/components/FocusableContent/index.m.less": function(e, t, s) {
			e.exports = {
				FocusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				focusableContent: "_3MknXZVbkWU8JL9XGlzASi",
				isFocused: "_3F2J0fSnCI3ZvF_tBSaV0s",
				noBorder: "_1CpUVAt2tGEwaaBV3nZNJs"
			}
		},
		"./src/reddit/components/FocusableContent/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(i);
			t.a = o.a.wrapped(e => r.a.createElement("div", {
				className: Object(n.a)(e.className, {
					[c.a.isFocused]: e.isFocused,
					[c.a.noBorder]: e.noBorder
				})
			}, e.children), "FocusableContent", c.a)
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, s) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/selectors/crypto/points.ts"),
				d = s("./src/reddit/components/Governance/Token/index.m.less"),
				l = s.n(d);
			const p = Object(o.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(m.b)(e, t)
			});
			t.a = Object(n.b)(p)((function(e) {
				var t;
				const s = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!s) return null;
				const a = e.grey ? s.greyVector || s.grey : s.filledVector || s.filled,
					n = `${i.a.assetPath}/${a}`;
				if (e.grey && n.endsWith(".svg")) {
					const t = `url(${n}) center/cover`;
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
					src: n
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/async.ts": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(a.a)({
				resolved: {},
				chunkName: () => "reddit-components-Governance-TransactionModals-SubscriptionModal",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e(0), s.e("vendors~reddit-components-Governance-TransactionModals-SubscriptionModal"), s.e("reddit-components-Governance-TransactionModals-BurnPointsModal~reddit-components-Governance-Transact~8f11de67"), s.e("reddit-components-Governance-TransactionModals-SubscriptionModal")]).then(s.bind(null, "./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Governance/TransactionModals/SubscriptionModal/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = r
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return y
			})), s.d(t, "a", (function() {
				return v
			}));
			var a = s("./node_modules/lodash/debounce.js"),
				r = s.n(a),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/usernameAvailable.ts"),
				l = s("./src/reddit/constants/colors.ts"),
				p = s("./src/reddit/controls/FormFields/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				b = s("./src/reddit/icons/svgs/Info/index.tsx"),
				g = s("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				f = s("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				_ = s.n(f),
				x = s("./node_modules/fbt/lib/FbtPublic.js");
			const y = 2,
				v = 20;
			var E;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(E || (E = {}));
			class w extends o.a.PureComponent {
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
									return E.Invalid;
								case d.b.Error:
									return E.Error;
								case d.b.Unavailable:
									return E.Valid;
								default:
									return E.Searching
							}
						}
						return E.Empty
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
						this.props.onChange(e, this.usernameValidity(e) === E.Valid)
					}
				}
				render() {
					const e = this.usernameValidity(this.state.username);
					return o.a.createElement("div", {
						className: Object(m.a)(_.a.container, this.props.className)
					}, o.a.createElement(p.c, {
						redditStyle: !0,
						className: _.a.input,
						label: x.fbt._("username", null, {
							hk: "2f1L4u"
						}),
						max: v,
						style: {
							borderColor: C(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case E.Error:
								return o.a.createElement(b.a, {
									className: _.a.icon,
									style: {
										fill: l.a.notice
									}
								});
							case E.Invalid:
								return o.a.createElement(g.a, {
									className: _.a.icon,
									style: {
										fill: l.a.warning
									}
								});
							case E.Searching:
								return o.a.createElement(u.a, {
									className: _.a.loadingIcon,
									sizePx: 8
								});
							case E.Valid:
								return o.a.createElement(h.a, {
									className: _.a.icon
								});
							default:
								return null
						}
					}(e), o.a.createElement("div", {
						className: _.a.message,
						style: {
							color: C(e)
						}
					}, function(e) {
						switch (e) {
							case E.Error:
								return x.fbt._("Could not check that username. Are you sure it's correct?", null, {
									hk: "1sNHpI"
								});
							case E.Invalid:
								return x.fbt._("Cannot find this username.", null, {
									hk: "Imvaj"
								});
							default:
								return ""
						}
					}(e)))
				}
			}

			function C(e) {
				switch (e) {
					case E.Error:
						return l.a.notice;
					case E.Invalid:
						return l.a.warning
				}
			}
			const k = Object(c.c)({
				usernameAvailability: e => e.users.nameAvailable
			});
			t.c = Object(i.b)(k, e => ({
				onCheckUsername: r()(t => e(Object(d.f)({
					username: t
				})), 250)
			}))(w)
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_5K5Dse4tVw0RLIpFAoxVY",
				icon: "S4tWlXsmJThb2dkEK0a-e",
				input: "_3TjvTVtT0SSXGCca-2hLNM",
				loadingIcon: "_1096A0iAp25FzCsAQtWIIZ",
				message: "_16fPUwJjUXr_SaDDXYoAuJ"
			}
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/selectors/tooltip.ts"),
				g = s("./src/reddit/components/OverflowMenu/index.m.less"),
				f = s.n(g);
			const _ = m.a.wrapped(p.a, "_Dropdown", f.a),
				x = Object(l.a)(_),
				y = m.a.button("MenuButton", f.a),
				v = m.a.wrapped(u.b, "DropdownRow", f.a),
				E = Object(i.c)({
					dropdownIsOpen: (e, {
						dropdownId: t
					}) => Object(b.b)(t)(e)
				}),
				w = Object(o.b)(E, (e, {
					dropdownId: t
				}) => ({
					toggleDropdown: () => e(Object(d.h)({
						tooltipId: t
					}))
				})),
				C = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = w(e => n.a.createElement(y, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": a.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: C(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : n.a.createElement(h.a, {
				name: "overflow_horizontal",
				className: f.a.MenuIcon
			}), n.a.createElement(x, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less": function(e, t, s) {
			e.exports = {
				tooltip: "_1JSANMHgGMP6_AEag7vq9O",
				header: "_1DAEUoftIympbgPi2umo-0",
				headerWithTitleLine: "_2d5Y14DbQhaeFQexgn_8Nr",
				titleLine: "_3POjQe5s4pakf6mUEhOGNP",
				searchLine: "_1aZZB23bAFb9VFM7USCLpW",
				title: "_1IzUvkOygcCyb3m9fdOEc2",
				searchBox: "_2cff2GfGaP3QtjxGdlpv_z",
				closeIcon: "_3VwbhXXLp1dcUFkxf8wMsc",
				body: "_2qdvF-IdzElbEEbTBTqXLE",
				results: "_3NbyQMXVxyVAMWNcjMkFvi",
				disabled: "_1q61sXN5YBwD15WuBXBYk5",
				gifResult: "_26ADnJjpUFVQyc9EaxOU1n",
				gifResultImage: "FdCn2CuFBj91lgTaeY2bA",
				loadingSpinner: "_2t2HXTe1t9BdNxOjV-5WUX",
				whiteScrim: "_2pFa7VPAwUqzCAZMKMhkl9"
			}
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/lodash/memoize.js"),
				o = s.n(n),
				i = s("./node_modules/lodash/throttle.js"),
				c = s.n(i),
				m = s("./node_modules/react/index.js"),
				d = s.n(m),
				l = s("./node_modules/react-redux/es/index.js"),
				p = s("./node_modules/reselect/es/index.js"),
				u = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				g = s("./src/config.ts"),
				f = s("./src/lib/addQueryParams/index.ts");
			const _ = "pg";

			function x(e) {
				return e.json().then(e => {
					if (200 !== e.meta.status) throw new Error(`${e.meta.status} ${e.meta.msg}`);
					return e
				})
			}
			var y = s("./src/reddit/icons/svgs/Close/index.tsx"),
				v = s("./src/reddit/models/Toast/index.ts"),
				E = s("./src/reddit/selectors/economics.ts"),
				w = s("./src/reddit/selectors/telemetry.ts"),
				C = s("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				k = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			let N;

			function j() {
				N || (N = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var O = s("./node_modules/lodash/debounce.js"),
				P = s.n(O),
				I = s("./src/reddit/icons/svgs/Search/index.tsx"),
				M = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				T = s.n(S);
			const L = 400;
			class B extends d.a.Component {
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
					} = this.state, s = `powered-by-giphy-${e?"dark":"light"}.png`;
					return d.a.createElement("div", {
						className: Object(r.a)(T.a.searchBox, this.props.className)
					}, d.a.createElement("button", {
						className: T.a.searchIconButton,
						onClick: this.focusOnInput
					}, d.a.createElement(I.a, {
						className: T.a.searchIcon
					})), d.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: T.a.searchInput,
						placeholder: a.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && d.a.createElement("div", {
						className: T.a.poweredByGiphy,
						style: {
							backgroundImage: `url(${g.a.assetPath}/img/memberships/${s}`
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const A = Object(p.c)({
				isNightMode: M.bb
			});
			var R = Object(l.b)(A)(B),
				F = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				z = s.n(F);
			const D = 4,
				G = o()((function() {
					const e = Object(f.a)("https://api.giphy.com/v1/gifs/trending", {
						api_key: g.a.giphyApiKey,
						rating: _
					});
					return fetch(e).then(x)
				}));
			class H extends d.a.Component {
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
						this.props.sendEvent(t => ({
							source: "meta",
							action: "change",
							noun: "gif_tooltip_search",
							correlationId: this.props.correlationId,
							subreddit: this.props.subreddit.id ? w.kb(t, this.props.subreddit.id) : void 0,
							post: w.k(t),
							search: {
								query: e
							},
							...w.o(t)
						})), this.setState({
							loading: !1,
							columns: [
								[],
								[]
							],
							columnHeights: [0, 0],
							query: e,
							nextOffset: 0
						}, () => this.loadMoreResults())
					}, this.onScroll = e => this.maybeLoadMoreResults(e.target), this.maybeLoadMoreResults = c()(e => {
						e.scrollHeight - e.scrollTop === e.clientHeight && this.loadMoreResults()
					}, 300), this.onResultClick = e => {
						this.props.sendEvent(e => {
							const t = w.o(e);
							return {
								...t,
								source: "meta",
								action: "select",
								noun: "gif_tooltip_result",
								correlationId: this.props.correlationId,
								subreddit: this.props.subreddit.id ? w.kb(e, this.props.subreddit.id) : void 0,
								post: w.k(e),
								actionInfo: {
									...t.actionInfo,
									reason: this.props.hasGifProduct ? "has-gif-product" : "gif-train"
								}
							}
						});
						const t = this.props.editorState,
							s = Object(k.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), C.a.after);
						this.props.onChange(s), this.props.onClose()
					}
				}
				componentDidMount() {
					this.mounted = !0, !this.state.query && this.state.loading && this.loadTrendingGifs(), j()
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				loadTrendingGifs() {
					G().then(e => {
						this.state.query || this.addGiphyResults(e)
					})
				}
				async loadMoreResults() {
					const {
						loading: e,
						nextOffset: t,
						query: s
					} = this.state;
					!e && s && null !== t && (await
						function(e) {
							return j(), N.then(t => {
								return !!e.split(" ").concat(e).find(e => -1 !== t.indexOf(e.toLowerCase()))
							}).catch(() => !1)
						}(s) || (this.setState({
							loading: !0
						}), function(e) {
							const t = Object(f.a)("https://api.giphy.com/v1/gifs/search", {
								api_key: g.a.giphyApiKey,
								q: e.query,
								offset: e.offset || 0,
								rating: e.rating || _
							});
							return fetch(t).then(x)
						}({
							query: s,
							offset: t
						}).then(e => {
							this.addGiphyResults(e)
						}).catch(() => {
							this.mounted && (this.props.showErrorToast(a.fbt._("There was an error loading your GIF results. Please try again later.", null, {
								hk: "2OpI4a"
							})), this.setState({
								loading: !1
							}))
						})))
				}
				addGiphyResults(e) {
					if (!this.mounted) return;
					const t = [...this.state.columns],
						s = [...this.state.columnHeights];
					e.data.forEach(e => {
						if ("gif" !== e.type || "r" === e.rating || "pg-13" === e.rating) return;
						const a = this.getSimplifiedResult(e),
							r = s.reduce((e, t, a) => t < s[e] ? a : e, 0);
						t[r].push(a), s[r] += a.fixedWidthHeight + D
					});
					const a = e.pagination.offset + e.pagination.count;
					this.setState({
						columns: t,
						columnHeights: s,
						loading: !1,
						nextOffset: a < e.pagination.total_count ? a : null
					})
				}
				getSimplifiedResult(e) {
					const t = parseInt(e.images.fixed_width.height),
						s = e.images.downsized && e.images.downsized.url.indexOf("giphy-downsized.gif") > 0,
						a = s ? e.images.downsized : e.images.fixed_height;
					return {
						id: e.id,
						url: a.url,
						hasDownsizedImage: s,
						width: parseInt(a.width),
						height: parseInt(a.height),
						fixedWidthHeight: t
					}
				}
				render() {
					const {
						columns: e,
						loading: t
					} = this.state;
					return d.a.createElement("div", {
						className: z.a.tooltip
					}, d.a.createElement("div", {
						className: Object(r.a)(z.a.header, {
							[z.a.headerWithTitleLine]: !!this.props.title
						})
					}, this.props.title && d.a.createElement("div", {
						className: z.a.titleLine
					}, d.a.createElement("span", {
						className: z.a.title
					}, this.props.title), d.a.createElement(y.a, {
						className: z.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					})), d.a.createElement("div", {
						className: z.a.searchLine
					}, d.a.createElement(R, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: z.a.searchBox
					}), !this.props.title && d.a.createElement(y.a, {
						className: z.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					}))), d.a.createElement("div", {
						className: z.a.body,
						onScroll: this.onScroll
					}, d.a.createElement("div", {
						className: Object(r.a)(z.a.results, {
							[z.a.disabled]: this.props.disabled
						})
					}, e.map((e, t) => d.a.createElement("div", {
						className: z.a.column,
						key: t
					}, e.map(e => d.a.createElement("button", {
						className: z.a.gifResult,
						key: e.url,
						onClick: () => this.onResultClick(e),
						style: {
							height: `${e.fixedWidthHeight}px`
						},
						disabled: this.props.disabled
					}, d.a.createElement("img", {
						className: z.a.gifResultImage,
						src: e.url
					})))))), t && d.a.createElement("div", {
						className: z.a.loadingSpinner
					}, d.a.createElement(b.a, {
						sizePx: 20,
						center: !0
					})), this.props.children, d.a.createElement("div", {
						className: z.a.whiteScrim
					})))
				}
			}
			const Z = Object(p.c)({
				hasGifProduct: (e, {
					subreddit: t
				}) => Object(E.w)(e, t.id)
			});
			t.a = Object(h.c)(Object(l.b)(Z, e => ({
				showErrorToast: t => e(Object(u.f)({
					text: t,
					kind: v.b.Error,
					duration: 5e3
				}))
			}))(H))
		},
		"./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less": function(e, t, s) {
			e.exports = {
				searchBox: "_-2nyH4l01LGXG6tNoKG8G",
				searchIconButton: "yQXSQNUp_yRjNBBUQPSFc",
				searchIcon: "_2gnFB-wGJHoP0-cUWBWnU5",
				searchInput: "_3MrGxIAeUWB6Fc14Qw0jb2",
				poweredByGiphy: "_3zbeeNQTcpxZMmdsMopEux"
			}
		},
		"./src/reddit/components/ScrollAnimation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/lodash/clamp.js"),
				r = s.n(a),
				n = s("./node_modules/lodash/throttle.js"),
				o = s.n(n),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				m = s("./src/lib/fastdom/index.ts"),
				d = s("./src/reddit/components/Scroller/getDocumentTop.ts"),
				l = s("./src/reddit/components/Scroller/Simple.tsx");
			const p = (() => {
					const e = new Map,
						t = {
							get: t => e.get(t) || [],
							add: (s, a) => {
								const r = t.get(s);
								return e.set(s, r.concat(a)), t
							},
							remove: (s, a) => {
								const r = t.get(s);
								return e.set(s, r.filter(e => e !== a)), t
							}
						};
					return t
				})(),
				u = (() => {
					const e = e => o()(() => {
							m.a.read(() => {
								const t = (e => Object(l.a)(e) ? Object(d.a)() : e.scrollTop)(e);
								p.get(e).forEach(e => e(t))
							})
						}, 16),
						t = new Map;
					return {
						on: (s, a) => {
							if (!p.get(s).length) {
								const a = e(s);
								t.set(s, a), s.addEventListener("scroll", a)
							}
							p.add(s, a)
						},
						off: (e, s) => {
							if (p.remove(e, s), !p.get(e).length) {
								const s = t.get(e);
								s && e.removeEventListener("scroll", s)
							}
						}
					}
				})();
			class h extends c.a.Component {
				constructor(e) {
					super(e), this.getContainer = () => this.props.containerRef || document.getElementById("overlayScrollContainer") || document, this.updateScrollPosition = e => this.setState(t => {
						const s = this.props.scrollRange[0],
							a = this.props.scrollRange[1],
							n = r()(e, s, a),
							o = Math.min(Math.floor((n - s) / (a - s) * 1e3), 999);
						return {
							...t,
							styles: {
								...t.styles,
								animationDelay: `-${o}s`
							}
						}
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
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			})), s.d(t, "c", (function() {
				return v
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/uniqueId.js"),
				n = s.n(r),
				o = s("./node_modules/raf/index.js"),
				i = s.n(o),
				c = s("./node_modules/react/index.js"),
				m = s.n(c),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/higherOrderComponents/asModal/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = s.n(h);
			var g = Object(l.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return m.a.createElement("div", {
						className: b.a.wrapper
					}, m.a.createElement(u.a, {
						className: b.a.titleRow
					}, s), m.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), m.a.createElement(u.a, {
						className: b.a.buttonRow
					}, m.a.createElement(p.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, a.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = s("./src/reddit/controls/ErrorText/index.m.less"),
				_ = s.n(f);
			class x extends m.a.Component {
				constructor(e) {
					super(e), this.spanRef = m.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${n()()}`,
						isModalOpen: !1
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
						className: t,
						errorModalBody: s,
						errorModalTitle: r = a.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: n = a.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: i
					} = this.state;
					return m.a.createElement("div", {
						className: Object(d.a)(_.a.wrapper, t)
					}, m.a.createElement("span", {
						className: _.a.description,
						ref: this.spanRef
					}, e), o && m.a.createElement("span", {
						className: _.a.moreText,
						onClick: this.toggleModal
					}, n), i && m.a.createElement(g, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const y = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: a,
						fallbackMessage: r,
						messages: n = []
					} = e, o = n.length ? n : r ? [r] : [];
					return o.length ? m.a.createElement("div", {
						className: t
					}, o.map((e, t) => m.a.createElement(x, {
						className: s,
						errorModalTitle: a,
						key: t
					}, e))) : null
				},
				v = e => m.a.createElement(y, {
					fallbackMessage: a.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = x
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, s) {
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
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/ErrorText/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = s("./src/reddit/controls/FormFields/index.m.less"),
				l = s.n(d);

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const u = o.a.input("input", l.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					const {
						label: t,
						children: s,
						inputRef: a,
						className: o,
						...i
					} = e, c = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(n.a)(l.a.inputWrapper, o, {
							[l.a.mIsInvalid]: e.isInvalid
						}),
						onClick: h
					}, r.a.createElement(u, p({
						"aria-invalid": e.isInvalid,
						innerRef: a
					}, i)), e.label && r.a.createElement("label", {
						className: Object(n.a)(l.a.label, {
							[l.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				g = e => {
					const {
						label: t,
						children: s,
						inputRef: a,
						isInvalid: o,
						className: i,
						redditStyle: c,
						...m
					} = e, d = void 0 !== e.value && "" !== e.value;
					return r.a.createElement("div", {
						className: Object(n.a)(l.a.inputMovingLabelWrapper, i, {
							[l.a.mIsInvalid]: o,
							[l.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, r.a.createElement(u, p({
						innerRef: a
					}, m)), e.label && r.a.createElement("label", {
						className: Object(n.a)(l.a.label, {
							[l.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				f = e => r.a.createElement("div", {
					className: Object(n.a)(l.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", r.a.createElement(c.a, {
					className: l.a.plus
				}));
			var _;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(_ || (_ = {}));
			class x extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: _.ADD
						})
					}, this.updateValue = (e, t) => {
						const s = this.props.values.slice();
						s[t] = e.target.value, this.props.onChange(s)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							s = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: _.REMOVE,
							value: s,
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
						label: s,
						placeholder: a,
						errors: n = []
					} = this.props;
					return e.map((e, o) => r.a.createElement(b, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!n[o],
						disabled: t,
						type: "text",
						label: s,
						onChange: e => this.updateValue(e, o),
						placeholder: a,
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
						values: s,
						maxLength: a,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!a && s.length >= a) && !i;
					return r.a.createElement("div", {
						className: Object(n.a)(l.a.multiInputWrapper, e)
					}, t && c && r.a.createElement(f, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && r.a.createElement(f, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/helpers/economics/setupSubredditPremiumButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./src/lib/currency/centsToDollars/index.ts"),
				r = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				n = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function o({
				apiContext: e,
				config: t,
				elementId: s,
				price: o,
				purchaseFn: i,
				username: c,
				onCancel: m,
				onClientLoad: d,
				onError: l,
				onSubmitting: p,
				onSuccess: u
			}) {
				const h = (e, t) => {
					if (!l) return;
					let s = e.toString ? e.toString() : "";
					s.toLowerCase().includes("object object") && (s = JSON.stringify(e)), l(e, s, t)
				};
				try {
					const [l] = await Promise.all([Object(r.b)(e, {
						username: c
					}), Object(n.b)()]);
					if (!l.ok) return void h(l.error, "/ps/me/braintree-client-tokens");
					const b = await braintree.client.create({
							authorization: l.body.clientToken
						}),
						g = await new Promise((e, t) => {
							braintree.paypalCheckout.create({
								client: b
							}, (s, a) => s ? t(s) : e(a))
						});
					d && d(), await paypal.Buttons({
						createBillingAgreement: "subscription" === t.type ? () => (p && p(), g.createPayment({
							amount: Object(a.a)(o(), !0),
							billingAgreementDescription: t.billingAgreement,
							currency: "USD",
							flow: "vault"
						})) : void 0,
						createOrder: "purchase" === t.type ? () => (p && p(), g.createPayment({
							amount: Object(a.a)(o(), !0),
							currency: "USD",
							flow: "checkout",
							intent: "capture"
						})) : void 0,
						style: {
							height: 32
						},
						onApprove: async e => {
							g.tokenizePayment(e).then(({
								nonce: e
							}) => i(e)).then(e => {
								e.ok ? u && u() : h(e.error, "/orders")
							})
						},
						onCancel: () => m && m(),
						onError: e => h(e, "paypalError")
					}).render(`#${s}`)
				} catch (b) {
					h(b, "paypalError")
				}
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			var a = s("./node_modules/bignumber.js/bignumber.js"),
				r = s("./src/lib/prettyPrintNumber/index.ts");

			function n(e, t) {
				const s = new a.BigNumber(e),
					r = new a.BigNumber(t || 1);
				return s.dividedToIntegerBy(r).toString()
			}

			function o(e, t) {
				return Object(r.b)(parseInt(n(e, t), 10))
			}

			function i(e, t) {
				const s = new a.BigNumber(e),
					r = new a.BigNumber(t || 1);
				return s.multipliedBy(r).toFixed(0)
			}
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./node_modules/react/index.js");

			function r(e, t) {
				const [s, r] = Object(a.useState)(e);
				return [s, e => {
					t.current && r(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

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
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
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
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

			function n() {
				return (n = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", n({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), r.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

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
		"./src/reddit/icons/svgs/FormattingBold/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1329vPT9OSGZyEvo6Fqss"
			}
		},
		"./src/reddit/icons/svgs/FormattingBold/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingBold/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M12.44,9.72v0a3.07,3.07,0,0,0,2.67-3.22c0-2.84-2.42-3.46-5-3.46H4.51V17H10.4c2.61,0,5.09-1,5.09-3.86C15.49,10.91,14.14,10,12.44,9.72ZM7.54,5.38H9.85c1.65,0,2.31.61,2.31,1.7s-.74,1.68-2.35,1.68H7.54ZM10,14.65H7.54V10.95H9.89c1.7,0,2.59.61,2.59,1.83S11.72,14.65,10,14.65Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2-0pxD6-cM6bWeb73TNNhJ"
			}
		},
		"./src/reddit/icons/svgs/FormattingHyperlink/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), r.a.createElement("path", {
				d: "M10.4,8.19a1,1,0,0,0,0,1.41,4.39,4.39,0,1,1-4.92-.83,7.41,7.41,0,0,1-.14-1.44c0-.23,0-.46,0-.68a6.33,6.33,0,1,0,6.44,1.54A1,1,0,0,0,10.4,8.19Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_32WqBD1jOzjyQPJdFZ8Rrt"
			}
		},
		"./src/reddit/icons/svgs/FormattingItalics/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingItalics/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("polygon", {
				points: "7.24 17 10.3 17 12.1 6.85 9.05 6.85 7.24 17"
			}), r.a.createElement("polygon", {
				points: "9.7 3 9.28 5.46 12.34 5.46 12.76 3 9.7 3"
			}))
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1cI-FoGkiT7RNcT2BsWaRU"
			}
		},
		"./src/reddit/icons/svgs/FormattingMonospace/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingMonospace/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M18.8,9.4l-3-4a1,1,0,1,0-1.6,1.2L16.75,10,14.2,13.4a1,1,0,1,0,1.6,1.2l3-4A1,1,0,0,0,18.8,9.4Z"
			}), r.a.createElement("path", {
				d: "M5.6,5.2a1,1,0,0,0-1.4.2l-3,4a1,1,0,0,0,0,1.2l3,4a1,1,0,0,0,1.6-1.2L3.25,10,5.8,6.6A1,1,0,0,0,5.6,5.2Z"
			}), r.a.createElement("path", {
				d: "M12.24,1A1,1,0,0,0,11,1.76l-4,16A1,1,0,1,0,9,18.24l4-16A1,1,0,0,0,12.24,1Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1fQOXfyxB1SmgMOi7sihQV"
			}
		},
		"./src/reddit/icons/svgs/FormattingOrderedList/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), r.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), r.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), r.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), r.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), r.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1KIFUYxvtUxuRVhS-FGTns"
			}
		},
		"./src/reddit/icons/svgs/FormattingSpoiler/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingSpoiler/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M10,1.5A8.5,8.5,0,1,0,18.5,10,8.51,8.51,0,0,0,10,1.5Zm.71,13-.15.12-.18.1-.18.05a.73.73,0,0,1-.2,0,1,1,0,0,1-.71-.29,1,1,0,0,1-.21-.32A1,1,0,0,1,9,13.83a1,1,0,0,1,.08-.38,1,1,0,0,1,.21-.32,1,1,0,0,1,.91-.28l.18.06.18.09.15.13a1,1,0,0,1,.29.7A1,1,0,0,1,10.71,14.54Zm-.22-3.6a.5.5,0,0,1-1,0l-1-4.67A.5.5,0,0,1,9,5.67h2a.5.5,0,0,1,.49.6Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3C1w798INaJPgFxfklr4an"
			}
		},
		"./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M11.86,12a1.36,1.36,0,0,1,.7,1.19c0,1.07-1,1.59-2.42,1.59a4.12,4.12,0,0,1-3.75-2.36L4.08,13.79A6.21,6.21,0,0,0,10,17.2c3.86,0,5.55-2,5.55-4.22a4,4,0,0,0-.12-1Z"
			}), r.a.createElement("path", {
				d: "M17,9H11.61l-1.09-.31c-1.82-.51-2.85-.9-2.85-2,0-.82.71-1.39,2-1.39a4.13,4.13,0,0,1,3.41,2L15.2,5.65A6.23,6.23,0,0,0,9.69,2.8c-3,0-5,1.56-5,4.14A3.31,3.31,0,0,0,5.31,9H3a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1DvEfZosXHE4A0gHsGOjEU"
			}
		},
		"./src/reddit/icons/svgs/FormattingSuperscript/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingSuperscript/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M6.94,3,2,17H4.83L5.9,13.89h4.75l1,3.11h3.11L9.86,3Zm-.28,8.67L8.29,6.92h0l1.6,4.75Z"
			}), r.a.createElement("path", {
				d: "M16.06,3H14.92L13,8.49h1.11l.42-1.22h1.86l.41,1.22H18ZM14.81,6.4l.64-1.86h0l.63,1.86Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingTable/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_12fGjUaA4qUfdUrX7rnmTK"
			}
		},
		"./src/reddit/icons/svgs/FormattingTable/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingTable/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M17,2H3A1,1,0,0,0,2,3V17a1,1,0,0,0,1,1H17a1,1,0,0,0,1-1V3A1,1,0,0,0,17,2ZM4,6H9V9.8H4Zm7,0h5V9.8H11ZM4,11.8H9V16H4ZM11,16V11.8h5V16Z"
			}))
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "LfxAZX1Sm9aiJZiizUSZO"
			}
		},
		"./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less"),
				i = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: Object(n.a)(i.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), r.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), r.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}), r.a.createElement("path", {
				d: "M4.88,9.43a1.29,1.29,0,0,0-.13-.26,2.17,2.17,0,0,0-.19-.23,1.55,1.55,0,0,0-2.12,0,2.16,2.16,0,0,0-.19.23,2.2,2.2,0,0,0-.14.26A2.3,2.3,0,0,0,2,9.71,1.32,1.32,0,0,0,2,10a1.5,1.5,0,0,0,1.5,1.5,1.55,1.55,0,0,0,.57-.11A1.52,1.52,0,0,0,5,10a1.32,1.32,0,0,0,0-.29A1.27,1.27,0,0,0,4.88,9.43Z"
			}), r.a.createElement("path", {
				d: "M4.33,14.75l-.26-.14-.28-.08a1.42,1.42,0,0,0-.58,0l-.28.08-.26.14a2.16,2.16,0,0,0-.23.19A1.52,1.52,0,0,0,2,16a1.47,1.47,0,0,0,.44,1.06,1.52,1.52,0,0,0,.49.33,1.53,1.53,0,0,0,1.14,0,1.61,1.61,0,0,0,.49-.33A1.52,1.52,0,0,0,5,16a1.5,1.5,0,0,0-.44-1.06A2.06,2.06,0,0,0,4.33,14.75Z"
			}), r.a.createElement("path", {
				d: "M2.44,2.94A1.52,1.52,0,0,0,2,4a1.47,1.47,0,0,0,.44,1.06,1.59,1.59,0,0,0,.48.33,1.65,1.65,0,0,0,.58.11,1.55,1.55,0,0,0,.57-.11,1.5,1.5,0,0,0,.49-.33,1.5,1.5,0,0,0,0-2.12A1.55,1.55,0,0,0,2.44,2.94Z"
			}))
		},
		"./src/reddit/icons/svgs/Gif/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
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
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
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
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
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
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
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
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

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
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/GifsInComments/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/PremiumEmojis/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Section/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/StyleBadges/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/EmoteTooltip/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/GifTooltip/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3LOD-WBOJ9TpEyuc_B0ryn",
				triangle: "_1-MWtksm2FqJxQc5lgUR37"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/Benefits/index.m.less": function(e, t, s) {
			e.exports = {
				badges: "_3dLCMB5QHPH0h_IKJlzts6",
				container: "_350NODM4qoI4IWEdgYX72M",
				section: "_31RNbxj_vN1iFg9OmOca54",
				title: "_2cQgklnR9ee890dlKP9sU0"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/FAQ/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/Footer/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/Intro/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/PurchaseButton/index.m.less": function(e, t, s) {
			e.exports = {
				checkout: "_1YeF_-_BCIWSRSq7VcHfwX",
				price: "Xwc8CCPKWIdJKDB52171W",
				recipient: "_2df1mhtxpVh7VAaPhgWqWV",
				shimmer: "_1TKQ0NVUKMLkw2AFMm8njV",
				imageShimmer: "_1TyiUrWpQj0F35lkM5SBLh"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/Thanks/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/components/ScrollAnimation/index.tsx"),
				i = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				c = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less"),
				m = s.n(c);
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
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Header/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Tip/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/Testimonials/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2hnZpsw-lejHnH3Cy9SmME"
			}
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var a = s("./src/config.ts");
			const r = (e, t) => `${a.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
		},
		"./src/reddit/pages/meta/MembershipPaywallPage/index.m.less": function(e, t, s) {
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
		"./src/reddit/pages/meta/MembershipPaywallPage/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/react-router/esm/react-router.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/uuid/v4.js"),
				m = s.n(c);
			var d, l = s("./src/lib/classNames/index.ts"),
				p = s("./src/lib/extractQueryParams/index.ts"),
				u = s("./node_modules/react-dom/index.js"),
				h = s("./src/reddit/components/TrackingHelper/index.tsx");
			! function(e) {
				e[e.Visible = 0] = "Visible", e[e.NotVisible = 1] = "NotVisible"
			}(d || (d = {}));
			var b = Object(h.c)(class extends r.a.Component {
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
				g = s("./src/reddit/featureFlags/subredditPoints.ts"),
				f = s("./src/reddit/selectors/platform.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				x = s("./src/reddit/selectors/telemetry.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				v = s("./node_modules/fbt/lib/FbtPublic.js"),
				E = s("./src/config.ts"),
				w = s("./src/reddit/models/Badge/index.ts");
			const C = {
					achievementBadges: !1,
					animations: !1,
					canCancel: !1,
					canGift: !1,
					communityThanks: !1,
					emotes: !1,
					gifs: !0,
					loyaltyBadges: !0,
					styleBadges: !0,
					testimonials: !1
				},
				k = {
					achievementBadges: !0,
					animations: !0,
					canCancel: !0,
					canGift: !0,
					communityThanks: !0,
					emotes: !0,
					testimonials: !0
				},
				N = {
					t5_3oeyf: k,
					t5_2j7xd9: k
				};
			var j = function(e) {
					return {
						...C,
						...N[e] || {}
					}
				},
				O = s("./src/reddit/selectors/economics.ts"),
				P = s("./src/reddit/components/RichTextEditor/index.tsx"),
				I = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				M = s("./src/reddit/components/ScrollAnimation/index.tsx"),
				S = s("./src/reddit/helpers/richTextEditor/index.ts"),
				T = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				L = s("./src/reddit/icons/svgs/FormattingBold/index.tsx"),
				B = s("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				A = s("./src/reddit/icons/svgs/FormattingItalics/index.tsx"),
				R = s("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"),
				F = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				z = s("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"),
				D = s("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"),
				G = s("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"),
				H = s("./src/reddit/icons/svgs/FormattingTable/index.tsx"),
				Z = s("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"),
				W = s("./src/reddit/icons/svgs/Gif/index.tsx"),
				V = s("./src/reddit/icons/svgs/Smile/index.tsx"),
				U = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/addOverlayEvents.tsx")),
				q = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				X = s("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				Y = s("./src/reddit/icons/svgs/Close/index.tsx"),
				K = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/EmoteTooltip/index.m.less"),
				J = s.n(K);

			function Q(e) {
				const t = e.emojiPack.emotes,
					s = Object.keys(t).map(e => t[e]).sort((e, t) => e.id.localeCompare(t.id));
				return r.a.createElement("div", {
					className: Object(l.a)(J.a.container, e.className),
					style: e.style
				}, r.a.createElement("div", {
					className: J.a.header
				}, v.fbt._("Add r/{communityName} emote", [v.fbt._param("communityName", e.subreddit.name)], {
					hk: "O2Vj2"
				}), r.a.createElement(Y.a, {
					className: J.a.close,
					onClick: e.onClose
				})), r.a.createElement("div", {
					className: J.a.emojis
				}, r.a.createElement("div", {
					className: J.a.emojisTitle
				}, e.emojiPack.title), r.a.createElement("div", {
					className: J.a.emojisList
				}, s.map(t => r.a.createElement("button", {
					className: J.a.emoji,
					onClick: () => e.onSelectEmoji(Object(X.g)(t, e.editorState)),
					key: t.id
				}, r.a.createElement("img", {
					className: J.a.emojiImage,
					src: t.emoji.path
				}))))), r.a.createElement("div", {
					className: J.a.triangle
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
				ee = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx"),
				te = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/GifTooltip/index.m.less"),
				se = s.n(te);
			var ae = Object(q.a)((function(e) {
					return r.a.createElement("div", {
						className: Object(l.a)(se.a.container, e.className),
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
						className: se.a.triangle
					}))
				}), [U.a.Click, U.a.Keydown]),
				re = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/index.m.less"),
				ne = s.n(re);
			class oe extends r.a.Component {
				constructor(e) {
					super(e), this.state = {
						emotesOpen: "emoji" === e.type,
						gifsOpen: "gif" === e.type
					}
				}
				render() {
					const e = "emoji" === this.props.type ? `membership-paywall-emote-${this.props.subreddit.id}` : void 0,
						t = "gif" === this.props.type ? `membership-paywall-gif-${this.props.subreddit.id}` : void 0;
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
					}, r.a.createElement(V.a, {
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
					}, r.a.createElement(W.a, {
						className: Object(l.a)(ne.a.gifIcon)
					})), r.a.createElement("div", {
						className: ne.a.divider
					}), r.a.createElement(L.a, {
						className: ne.a.icon
					}), r.a.createElement(A.a, {
						className: ne.a.icon
					}), r.a.createElement(B.a, {
						className: ne.a.icon
					}), r.a.createElement(D.a, {
						className: ne.a.icon
					}), r.a.createElement(R.a, {
						className: ne.a.icon
					}), r.a.createElement(G.a, {
						className: ne.a.icon
					}), r.a.createElement(z.a, {
						className: ne.a.icon
					}), r.a.createElement("div", {
						className: ne.a.divider
					}), r.a.createElement(H.a, {
						className: ne.a.icon
					}), r.a.createElement(Z.a, {
						className: ne.a.icon
					}), r.a.createElement(F.a, {
						className: ne.a.icon
					})), r.a.createElement("button", {
						disabled: !0,
						className: ne.a.reply
					}, v.fbt._("reply", null, {
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
					}), this.state.gifsOpen && r.a.createElement(ae, {
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
			var ie = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/GifsInComments/index.m.less"),
				ce = s.n(ie);

			function me() {
				return (me = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
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
						subreddit: s
					} = this.props, a = de.map(e => e + (t ? 500 : 0)), n = j(s.id).animations;
					return r.a.createElement("div", {
						className: Object(l.a)(ce.a.container, e)
					}, n && r.a.createElement("header", {
						className: ce.a.header
					}, r.a.createElement("a", {
						href: "https://www.reddit.com/r/FortNiteBR/comments/9067f2/i_have_been_playing_50v50_a_little_differently/",
						target: "_blank"
					}, r.a.createElement("img", {
						className: ce.a.rescuerLegs,
						src: Object(T.a)(s, "rescuer_legs@2x.png")
					}), r.a.createElement(M.a, {
						scrollRange: a
					}, e => r.a.createElement("img", {
						className: ce.a.rescuerArm,
						src: Object(T.a)(s, "rescuer_arm@2x.png"),
						style: e
					})), r.a.createElement(M.a, {
						scrollRange: a
					}, e => r.a.createElement("img", {
						className: ce.a.rescuerTorso,
						src: Object(T.a)(s, "rescuer_torso@2x.png"),
						style: e
					})), r.a.createElement("img", {
						className: ce.a.woundedBody,
						src: Object(T.a)(s, "wounded_body@2x.png")
					}), r.a.createElement(M.a, {
						scrollRange: a
					}, e => r.a.createElement("img", {
						className: ce.a.woundedHead,
						src: Object(T.a)(s, "wounded_head@2x.png"),
						style: e
					})))), r.a.createElement("article", {
						className: Object(l.a)(ce.a.content, {
							[ce.a.contentWithAnimations]: n
						})
					}, r.a.createElement("div", {
						className: ce.a.title
					}, v.fbt._("GIFs in Comments", null, {
						hk: "4iMCW4"
					})), r.a.createElement("div", {
						className: ce.a.description
					}, v.fbt._("Put GIFs directly in your comments.", null, {
						hk: "2yUWCA"
					})), r.a.createElement("div", {
						className: ce.a.description
					}, v.fbt._("Search a vast library to find the perfect one.", null, {
						hk: "1hZivq"
					})), r.a.createElement(P.a, {
						className: ce.a.editor,
						editorType: S.a.Comment,
						placeholderText: v.fbt._("Try adding a GIF", null, {
							hk: "tHtDe"
						}),
						readOnly: !1,
						renderToolbar: e => r.a.createElement(oe, me({
							key: String(t),
							subreddit: s,
							type: "gif"
						}, e)),
						rteState: I.a.createInitial(),
						toolbarPosition: "bottom",
						trackToolbarClick: (...e) => {},
						onChange: (...e) => {},
						onSubmit: (...e) => {}
					}), r.a.createElement("div", {
						className: ce.a.try
					}, v.fbt._("Try it out! Search for a GIF and put it in your comment.", null, {
						hk: "309j9G"
					}))))
				}
			}
			const pe = Object(i.c)({
				cosmeticBadges: (e, {
					subreddit: t
				}) => Object(O.d)(e, t.id)
			});
			var ue = Object(n.b)(pe)(le),
				he = s("./node_modules/lodash/last.js"),
				be = s.n(he),
				ge = s("./node_modules/lodash/shuffle.js"),
				fe = s.n(ge),
				_e = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/PremiumEmojis/index.m.less"),
				xe = s.n(_e);

			function ye() {
				return (ye = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}

			function ve(e) {
				return e.reduce((e, t) => {
					const s = be()(e);
					return s && s.length < 12 ? s.push(t) : e.push([t]), e
				}, [
					[]
				])
			}
			const Ee = fe()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/bush.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/chug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/clappy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/cuddle.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dab.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dance.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_love.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/megaphone.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/respect.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/soon.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/unfortunately.gif"]),
				we = fe()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_1/competitive.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_2/goat.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_3/noob.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_4/bot.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_5/potato.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_6/casual.gif"]),
				Ce = fe()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/confused.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/disappointed.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/grinning.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/laughing.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/like.gif"]),
				ke = fe()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/angry.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/astonished.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/blush.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/cheeky.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/cry.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/disapproval.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/dizzy_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/downvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/facepalm.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/feels_bad_man.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/feels_good_man.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/flip_out.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/flushed.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/give_upvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/give_upvote_rainbow.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/grimacing.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/grin.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/heart_eyes.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/heart_eyes_rainbow.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/hug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/joy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/kissing_heart.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/money_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/neutral_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/no_mouth.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/poop.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/put_back.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/rage.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/scream.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/shrug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sleep.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/slightly_smiling.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/smile.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/snoo.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sob.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/stuck_out_tongue.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sunglasses.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/surprise.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sweat.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sweat_smile.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/table.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/table_flip.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thinking_face_hmm.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thumbs_down.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thumbs_up.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/trollface.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/upvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/wink.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/yummy.gif"]);
			class Ne extends r.a.Component {
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
					}, v.fbt._("Premium Animated Emotes", null, {
						hk: "24mmlb"
					})), r.a.createElement("div", {
						className: xe.a.description
					}, v.fbt._("Say more than text. Bring color and animation to your comments.", null, {
						hk: "2MjrRF"
					})), r.a.createElement(P.a, {
						className: xe.a.editor,
						editorType: S.a.Comment,
						placeholderText: v.fbt._("Try adding an emote", null, {
							hk: "3H8jm8"
						}),
						readOnly: !1,
						renderToolbar: e => r.a.createElement(oe, ye({
							subreddit: t,
							type: "emoji"
						}, e)),
						rteState: I.a.createInitial(),
						toolbarPosition: "bottom",
						trackToolbarClick: (...e) => {},
						onChange: (...e) => {},
						onSubmit: (...e) => {}
					}), r.a.createElement("div", {
						className: xe.a.try
					}, v.fbt._("Try it out! Add an emoji by clicking on it.", null, {
						hk: "2LKfXS"
					})), r.a.createElement("div", {
						className: xe.a.description
					}, v.fbt._("Use more than 100 emotes, including custom art just for r/{communityName}.", [v.fbt._param("communityName", t.name)], {
						hk: "31Kq8t"
					})), r.a.createElement("footer", {
						className: Object(l.a)(xe.a.allEmojis, {
							[xe.a.notExpanded]: !this.state.expanded
						})
					}, r.a.createElement("div", {
						className: xe.a.label
					}, v.fbt._("special members", null, {
						hk: "2W17Tt"
					})), r.a.createElement("div", {
						className: xe.a.grid
					}, ve(Ee).map((e, t) => r.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => r.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), r.a.createElement("div", {
						className: xe.a.label
					}, v.fbt._("snoomojis", null, {
						hk: "2hsGar"
					})), r.a.createElement("div", {
						className: xe.a.grid
					}, ve(ke).map((e, t) => r.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => r.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), r.a.createElement("div", {
						className: xe.a.label
					}, v.fbt._("dogesy", null, {
						hk: "2FheYm"
					})), r.a.createElement("div", {
						className: xe.a.grid
					}, ve(Ce).map((e, t) => r.a.createElement("div", {
						className: xe.a.gridRow,
						key: t
					}, e.map(e => r.a.createElement("img", {
						className: xe.a.emoji,
						key: e,
						src: e
					}))))), r.a.createElement("div", {
						className: xe.a.label
					}, v.fbt._("player style", null, {
						hk: "1XkSYc"
					})), r.a.createElement("div", {
						className: xe.a.grid
					}, ve(we).map((e, t) => r.a.createElement("div", {
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
					}, v.fbt._("show all", null, {
						hk: "2MP4Ce"
					})))
				}
			}
			var je = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Section/index.m.less"),
				Oe = s.n(je);

			function Pe(e) {
				const t = e.showProgressBar ? 1 / 0 : 6,
					s = e.items.reduce((e, s) => {
						const a = be()(e);
						return a && a.length < t ? a.push(s) : e.push([s]), e
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
				})), s.map((e, t) => r.a.createElement("div", {
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
			var Ie = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/StyleBadges/index.m.less"),
				Me = s.n(Ie);
			const Se = 1e3,
				Te = 66;
			class Le extends r.a.Component {
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
						username: s
					} = this.props, a = e[this.state.currentBadgeIdx];
					return r.a.createElement("article", {
						className: Object(l.a)(t, Me.a.container)
					}, r.a.createElement("header", {
						className: Me.a.title
					}, v.fbt._("Style Badges", null, {
						hk: "3ioHSL"
					})), r.a.createElement("div", {
						className: Me.a.description
					}, v.fbt._("Stand out with 4 new badges a month", null, {
						hk: "3Pd0bd"
					})), r.a.createElement("div", {
						className: Me.a.description
					}, v.fbt._("and a special color for your {username}", [v.fbt._param("username", r.a.createElement("div", {
						className: Me.a.username,
						style: {
							color: a.color
						}
					}, r.a.createElement("img", {
						className: Me.a.userBadge,
						src: a.url
					}), s))], {
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
			const Be = Object(i.c)({
				styleBadges: (e, {
					subredditId: t
				}) => {
					return Object(O.d)(e, t).filter(e => !(e.collections && e.collections.custom)).map(e => ({
						url: Object(w.d)(64, 64, e).url2x,
						color: e.extra && e.extra.style && e.extra.style.color || ""
					})).filter(e => e.color)
				},
				username: e => e.user.account && `u/${e.user.account.displayText}` || "u/username"
			});
			var Ae = Object(n.b)(Be)(Le),
				Re = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/index.m.less"),
				Fe = s.n(Re);
			const ze = [{
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
				icon: `${E.a.assetPath}/img/memberships/paywall/fortnitebr/newbie.png`,
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
			class De extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						emojisExpanded: !1
					}
				}
				render() {
					const {
						achievementBadges: e = ze,
						className: t,
						correlationId: s,
						loyaltyBadges: a,
						meta: n,
						subreddit: o
					} = this.props;
					return r.a.createElement("article", {
						className: Object(l.a)(t, Fe.a.container)
					}, r.a.createElement("header", {
						className: Fe.a.title
					}, v.fbt._("{member} Benefits", [v.fbt._param("member", n.member)], {
						hk: "xstxK"
					})), j(o.id).loyaltyBadges && a && !!a.length && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_4_loyalty_badges",
							correlationId: s,
							...x.o(e),
							subreddit: x.jb(e)
						})
					}, r.a.createElement(Pe, {
						showProgressBar: !0,
						className: Fe.a.section,
						title: v.fbt._("Loyalty Badges", null, {
							hk: "agXF2"
						}),
						description: v.fbt._("Show how long you’ve been supporting the subreddit.", null, {
							hk: "1r4ZKB"
						}),
						items: a
					})), j(o.id).achievementBadges && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_5_achievement_badges",
							correlationId: s,
							...x.o(e),
							subreddit: x.jb(e)
						})
					}, r.a.createElement(Pe, {
						className: Fe.a.section,
						title: v.fbt._("Achievement Badges", null, {
							hk: "4asfWh"
						}),
						description: v.fbt._("Get rewarded for reaching subreddit milestones. Available to the community at large, thanks to your support.", null, {
							hk: "3sEG2W"
						}),
						items: e
					})), j(o.id).styleBadges && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_6_style_badges",
							correlationId: s,
							...x.o(e),
							subreddit: x.jb(e)
						})
					}, r.a.createElement(Ae, {
						className: Fe.a.badges,
						subredditId: o.id
					})), j(o.id).emotes && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_7_premium_emojis",
							correlationId: s,
							...x.o(e),
							subreddit: x.jb(e)
						})
					}, r.a.createElement(Ne, {
						subreddit: o,
						onExpand: () => this.setState({
							emojisExpanded: !0
						})
					})), j(o.id).gifs && r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_8_gifs_in_comments",
							correlationId: s,
							...x.o(e),
							subreddit: x.jb(e)
						})
					}, r.a.createElement(ue, {
						emojisExpanded: this.state.emojisExpanded,
						subreddit: o
					})))
				}
			}
			const Ge = Object(i.c)({
				loyaltyBadges: (e, {
					subreddit: t
				}) => {
					return Object(O.e)(e, t.id).map(e => ({
						icon: Object(w.d)(64, 64, e).url2x,
						text: e.title
					}))
				},
				meta: (e, {
					subreddit: t
				}) => Object(O.r)(e, t.id)
			});
			var He = Object(n.b)(Ge)(De),
				Ze = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				We = s("./src/reddit/pages/meta/MembershipPaywallPage/FAQ/index.m.less"),
				Ve = s.n(We);
			class Ue extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						open: {}
					}, this.toggleQuestion = e => this.setState(t => ({
						...t,
						open: {
							...t.open,
							[e]: !t.open[e]
						}
					}))
				}
				render() {
					const {
						className: e,
						meta: t,
						subreddit: s
					} = this.props, a = function(e, t) {
						const {
							membershipAlt: s,
							memberAltPlural: a
						} = t, r = [{
							Q: v.fbt._("What is a {membershipAlt}?", [v.fbt._param("membershipAlt", s)], {
								hk: "1rUCQD"
							}),
							A: v.fbt._("The {membershipAlt} is a set of exclusive features available to users who purchase a premium subscription to the subreddit.", [v.fbt._param("membershipAlt", s)], {
								hk: "14RJNQ"
							})
						}, {
							Q: v.fbt._("Are {membershipAlt} features available on mobile apps?", [v.fbt._param("membershipAlt", s)], {
								hk: "3qaJjE"
							}),
							A: v.fbt._("The features are supported on the iOS and Android apps, as well as web.", null, {
								hk: "4FXbda"
							})
						}];
						return e.canGift && r.push({
							Q: v.fbt._("Can I gift a {membershipAlt} to other users?", [v.fbt._param("membershipAlt", s)], {
								hk: "1K5FbF"
							}),
							A: v.fbt._("Yes! If you'd like to gift a {membershipAlt}, send a PM to admin u/jarins.", [v.fbt._param("membershipAlt", s)], {
								hk: "895QP"
							})
						}), e.dedicatedSupport && r.push({
							Q: v.fbt._("What are the {membershipAlt} fees used for?", [v.fbt._param("membershipAlt", s)], {
								hk: "3TLe8q"
							}),
							A: v.fbt._("{memberAltPlural} support a unique project by Reddit to develop new features for this community.", [v.fbt._param("memberAltPlural", a)], {
								hk: "3GXXxI"
							})
						}), e.canCancel && r.push({
							Q: v.fbt._("How do I cancel my {membershipAlt}?", [v.fbt._param("membershipAlt", s)], {
								hk: "1w2Ob7"
							}),
							A: v.fbt._("You can cancel your membership at any time from the User Settings page. Look for the {membershipAlt} tab.", [v.fbt._param("membershipAlt", s)], {
								hk: "2HGeHZ"
							})
						}), r
					}(j(s.id), t);
					return r.a.createElement("div", {
						className: Object(l.a)(e, Ve.a.container)
					}, r.a.createElement("div", {
						className: Ve.a.title
					}, v.fbt._("{membershipAlt} FAQ", [v.fbt._param("membershipAlt", t.membershipAlt)], {
						hk: "4tP0lw"
					})), a.map(({
						Q: e,
						A: t
					}) => r.a.createElement("div", {
						className: Ve.a.section,
						key: e,
						onClick: () => this.toggleQuestion(e)
					}, r.a.createElement("div", {
						className: Ve.a.row
					}, r.a.createElement("div", {
						className: Ve.a.question
					}, e), r.a.createElement(Ze.a, {
						className: Object(l.a)(Ve.a.arrow, {
							[Ve.a.arrowClose]: !this.state.open[e]
						})
					})), !!this.state.open[e] && r.a.createElement("div", {
						className: Ve.a.answer
					}, t))))
				}
			}
			const qe = Object(i.c)({
				meta: (e, {
					subreddit: t
				}) => Object(O.r)(e, t.id)
			});
			var Xe = Object(n.b)(qe)(Ue),
				Ye = s("./src/reddit/pages/meta/MembershipPaywallPage/Footer/index.m.less"),
				Ke = s.n(Ye);
			const Je = [7900, 8240];

			function Qe(e) {
				return r.a.createElement("footer", {
					className: Object(l.a)(Ke.a.container, e.className)
				}, r.a.createElement("div", {
					className: Ke.a.twoCol
				}, r.a.createElement("div", {
					className: Ke.a.copyright
				}, v.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1hv6BJ"
				}))), j(e.subreddit.id).animations && r.a.createElement("a", {
					className: Ke.a.link,
					href: "https://www.reddit.com/r/FortNiteBR/comments/a8mhn8/24_players_plays_all_i_want_for_christmas_is_you/",
					target: "_blank"
				}, r.a.createElement("img", {
					className: Ke.a.pianoKeyboard,
					src: Object(T.a)(e.subreddit, "piano_keyboard@2x.png")
				}), r.a.createElement(M.a, {
					scrollRange: Je
				}, t => r.a.createElement("img", {
					className: Ke.a.pianoCrowdBottom,
					src: Object(T.a)(e.subreddit, "piano_crowd_bottom@2x.png"),
					style: t
				})), r.a.createElement(M.a, {
					scrollRange: Je
				}, t => r.a.createElement("img", {
					className: Ke.a.pianoCrowdTop,
					src: Object(T.a)(e.subreddit, "piano_crowd_top@2x.png"),
					style: t
				})), r.a.createElement(M.a, {
					scrollRange: Je
				}, t => r.a.createElement("img", {
					className: Ke.a.pianoFlier,
					src: Object(T.a)(e.subreddit, "piano_flier@2x.png"),
					style: t
				}))))
			}
			var $e = s("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				et = s("./src/reddit/icons/svgs/Twinkle/index.tsx"),
				tt = s("./src/reddit/actions/login.ts"),
				st = s("./src/reddit/components/Economics/Price/index.tsx"),
				at = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				rt = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				nt = s("./src/higherOrderComponents/asModal/index.tsx"),
				ot = s("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/async.ts"),
				it = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ct = s("./src/reddit/featureFlags/component.tsx"),
				mt = s("./src/reddit/selectors/crypto/points.ts"),
				dt = s("./src/reddit/selectors/gov.ts"),
				lt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Cart/index.m.less"),
				pt = s.n(lt);
			const {
				fbt: ut
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function ht(e) {
				const {
					className: t,
					description: s,
					dollarPrice: a,
					monthly: n,
					subredditId: o,
					tokenPrice: i
				} = e;
				return r.a.createElement("article", {
					className: Object(l.a)(pt.a.container, t)
				}, r.a.createElement("div", {
					className: pt.a.description
				}, s), r.a.createElement("div", {
					className: pt.a.rhs
				}, r.a.createElement("div", {
					className: pt.a.price
				}, r.a.createElement(st.a, {
					dollarPrice: a,
					tokenPrice: i,
					monthly: n,
					subredditId: o
				})), n && r.a.createElement("div", {
					className: pt.a.monthlyText
				}, ut._("Paid monthly, cancel anytime", null, {
					hk: "1hG3H3"
				}))))
			}
			var bt = s("./src/lib/currency/currencies.ts"),
				gt = s("./src/lib/localizeCurrency/index.ts"),
				ft = s("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				_t = s("./src/reddit/hooks/useLocale.ts"),
				xt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Footer/index.m.less"),
				yt = s.n(xt);
			const vt = () => v.fbt._("{=Reddit User Agreement}, {=Privacy Policy} and {Previews Terms of Service}.", [v.fbt._param("=Reddit User Agreement", r.a.createElement("a", {
				className: yt.a.link,
				href: "https://www.redditinc.com/policies/user-agreement",
				target: "_blank",
				rel: "noopener noreferrer"
			}, v.fbt._("Reddit User Agreement", null, {
				hk: "4yY7NE"
			}))), v.fbt._param("=Privacy Policy", r.a.createElement("a", {
				className: yt.a.link,
				href: "https://www.redditinc.com/policies/privacy-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, v.fbt._("Privacy Policy", null, {
				hk: "2clnUk"
			}))), v.fbt._param("Previews Terms of Service", r.a.createElement(ft.a, {
				className: yt.a.linkLast
			}))], {
				hk: "3Jmx1D"
			});
			const Et = Object(i.c)({
				meta: (e, {
					subredditId: t
				}) => Object(O.r)(e, t)
			});
			var wt = Object(n.b)(Et)((function(e) {
					const t = Object(_t.a)();
					if (e.purchaseType !== ts.Subscription) return r.a.createElement("footer", {
						className: Object(l.a)(e.className, yt.a.container)
					}, v.fbt._("By purchasing, you agree to", null, {
						hk: "37Xh4k"
					}), " ", r.a.createElement(vt, null));
					const s = e.dollarPrice && Object(gt.b)(e.dollarPrice, {
							locale: t,
							forceDecimals: !0
						}),
						a = e.tokenPrice && Object(gt.b)(e.tokenPrice, {
							locale: t,
							type: bt.b.Crypto,
							displayConversion: e.tokenDisplayConversion
						}),
						n = s && a ? v.fbt._("{dollarPrice} or {tokenPrice}", [v.fbt._param("dollarPrice", s), v.fbt._param("tokenPrice", a)], {
							hk: "1uXVRd"
						}) : s || (a || "");
					return r.a.createElement("footer", {
						className: Object(l.a)(e.className, yt.a.container)
					}, v.fbt._("{membershipName} auto-renews for {price} a month. Cancel anytime in the Special Memberships section of your User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds. By continuing, you agree to", [v.fbt._param("membershipName", e.meta.membershipAlt), v.fbt._param("price", n)], {
						hk: "AMyMx"
					}), " ", r.a.createElement(vt, null))
				})),
				Ct = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Header/index.m.less"),
				kt = s.n(Ct);
			const {
				fbt: Nt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const jt = Object(i.c)({
				meta: (e, {
					subredditId: t
				}) => Object(O.r)(e, t)
			});
			var Ot = Object(n.b)(jt)((function(e) {
					const {
						className: t,
						meta: s,
						purchaseType: a
					} = e;
					return r.a.createElement("header", {
						className: Object(l.a)(t, kt.a.container)
					}, r.a.createElement("div", {
						className: kt.a.text
					}, a === ts.Badge && Nt._("Buy a badge", null, {
						hk: "1X4jZc"
					}), a === ts.Subscription && Nt._("Buy {membership-name}", [Nt._param("membership-name", s.membershipAlt)], {
						hk: "ObrN"
					})), r.a.createElement(Y.a, {
						className: kt.a.close,
						onClick: e.onClose
					}))
				})),
				Pt = s("./node_modules/bignumber.js/bignumber.js"),
				It = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx"),
				Mt = s("./src/reddit/controls/Button/index.tsx"),
				St = s("./node_modules/react-router-redux/es/index.js"),
				Tt = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Lt = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				Bt = s("./src/reddit/actions/governance/errorToast.ts"),
				At = s("./src/reddit/actions/shortcuts/close.ts"),
				Rt = s("./src/reddit/contexts/ApiContext.tsx"),
				Ft = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				zt = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				Dt = s("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				Gt = s("./src/reddit/models/Badge/managementPage.ts"),
				Ht = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/PurchaseButton/index.m.less"),
				Zt = s.n(Ht);
			const Wt = "subreddit-premium-purchase-braintree",
				Vt = (e, t, s) => v.fbt._("{communityName} {membershipAlt}. {price}/month, automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months.", [v.fbt._param("communityName", e.displayText), v.fbt._param("membershipAlt", s.membershipAlt), v.fbt._param("price", Object(gt.b)(t, {
					forceDecimals: !0
				}))], {
					hk: "3yzefL"
				});
			class Ut extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						loading: !0,
						submitting: !1
					}, this._isMounted = !1, this.alreadyPurchased = () => this.props.userIsPremiumSubscriber === O.a.Subscribed, this.getId = () => Wt + (this.props.uniqueId || "")
				}
				componentDidMount() {
					if (this._isMounted = !0, !this.alreadyPurchased()) {
						const e = this.props.membershipProducts.find(e => "usd" === e.currency);
						Object(Dt.a)({
							apiContext: this.props.apiContext(),
							config: {
								billingAgreement: Vt(this.props.subreddit, this.props.price, this.props.meta),
								type: "subscription"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: t => Object(zt.d)(this.props.apiContext(), {
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
							onError: (e, t, s) => {
								this._isMounted && (this.setState({
									submitting: !1
								}), this.props.onError(e), this.props.sendEvent(e => {
									return {
										source: "meta",
										action: "fail",
										noun: "subscription_paypal_purchase",
										...x.o(e),
										actionInfo: {
											reason: t,
											paneName: s
										},
										correlationId: this.props.correlationId,
										subreddit: x.jb(e)
									}
								}))
							},
							onSubmitting: () => {
								this.setState({
									submitting: !0
								}), this.props.sendEvent(e => ({
									source: "meta",
									action: "click",
									noun: "subscription_paypal_purchase",
									correlationId: this.props.correlationId,
									...x.o(e),
									subreddit: x.jb(e)
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
						className: Object(l.a)(this.props.className, Zt.a.container)
					}, this.alreadyPurchased() ? r.a.createElement("div", {
						className: Zt.a.alreadyPurchased
					}, v.fbt._("Already Purchased", null, {
						hk: "2h3Eug"
					})) : r.a.createElement(a.Fragment, null, r.a.createElement("div", {
						className: Object(l.a)(Zt.a.button, {
							[Zt.a.buttonWithoutCards]: !this.props.showCards,
							[Zt.a.loading]: this.state.loading,
							[Zt.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && r.a.createElement(Ft.a, {
						className: Zt.a.loadingIcon,
						sizePx: 24
					})))
				}
			}
			const qt = Object(i.c)({
				isLoggedIn: y.O,
				membershipProducts: (e, {
					subreddit: t
				}) => Object(O.k)(e, t.id),
				meta: (e, {
					subreddit: t
				}) => Object(O.r)(e, t.id),
				userIsPremiumSubscriber: (e, {
					subreddit: t
				}) => Object(O.x)(e, t.id)
			});
			var Xt = Object(Rt.b)(Object(n.b)(qt, (e, {
					subreddit: t,
					onComplete: s
				}) => ({
					onError: t => Object(Bt.a)(e, t),
					onPaymentSuccessful: a => {
						a ? e(Object(Lt.g)(t.id, !0)).then(() => e(Object(At.a)(() => {}))).then(() => s && s()).then(() => e(Object(Tt.c)({
							subredditId: t.id,
							initialView: Gt.c.MyBadges
						}))) : e(Object(St.b)(t.url))
					}
				}))(Object(h.c)(Ut))),
				Yt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/index.m.less"),
				Kt = s.n(Yt);
			const {
				fbt: Jt
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Qt(e) {
				return r.a.createElement("div", {
					className: Kt.a.dollarPurchase
				}, e.target.type === ts.Badge && e.target.product.price && r.a.createElement(It.a, {
					correlationId: e.correlationId,
					key: "checkout-purchase-button",
					price: e.target.product.price,
					productId: e.target.product.id,
					subreddit: e.subreddit,
					onPaymentSuccessful: e.onPaymentComplete
				}), e.target.type === ts.Subscription && e.target.dollarPrice && r.a.createElement(Xt, {
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

			function $t(e) {
				return !e.wallet || new Pt.BigNumber(e.wallet.amount).isLessThan(new Pt.BigNumber(e.tokenPrice)) ? r.a.createElement(Mt.l, {
					className: Kt.a.notEnoughTokens,
					disabled: !0
				}, Jt._("Not enough {token-name}", [Jt._param("token-name", e.tokenName)], {
					hk: "4urJTo"
				})) : r.a.createElement("div", {
					className: Kt.a.tokenPurchase
				}, r.a.createElement(Mt.l, {
					onClick: e.onPayWithTokens,
					className: Kt.a.tokenPurchaseButton
				}, Jt._("Pay with {token-name}", [Jt._param("token-name", e.tokenName)], {
					hk: "7b9oh"
				})), r.a.createElement("div", {
					className: Kt.a.requiresMobile
				}, Jt._("Requires Reddit Vault on mobile", null, {
					hk: "4oRRlp"
				})))
			}

			function es(e) {
				const {
					dollarPrice: t,
					monthly: s,
					subreddit: a,
					tokenPrice: n
				} = e;
				return r.a.createElement("div", {
					className: e.className
				}, t && n && r.a.createElement("div", {
					className: Kt.a.selectPaymentBox
				}, r.a.createElement("div", {
					className: Kt.a.selectPaymentTitleBox
				}, r.a.createElement("span", {
					className: Kt.a.selectPaymentTitle
				}, Jt._("Select Payment Method", null, {
					hk: "15rwcx"
				}))), r.a.createElement("div", {
					className: Kt.a.paymentContainer
				}, r.a.createElement("div", {
					className: Kt.a.paymentAmount
				}, r.a.createElement(st.a, {
					tokenPrice: n,
					monthly: s,
					subredditId: a.id,
					hideTokenName: !0
				})), r.a.createElement($t, e)), r.a.createElement("div", {
					className: Kt.a.paymentContainer
				}, r.a.createElement("div", {
					className: Kt.a.paymentAmount
				}, r.a.createElement(st.a, {
					dollarPrice: t,
					monthly: s,
					subredditId: a.id,
					hideTokenName: !0
				})), r.a.createElement(Qt, e))), t && !n && r.a.createElement(Qt, e), n && !t && r.a.createElement($t, e))
			}
			var ts, ss = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/index.m.less"),
				as = s.n(ss);
			! function(e) {
				e[e.Badge = 0] = "Badge", e[e.Subscription = 1] = "Subscription"
			}(ts || (ts = {}));
			class rs extends r.a.Component {
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
						subreddit: s,
						username: a,
						onClose: n,
						onPaymentComplete: o,
						pointsDetails: i,
						wallet: c
					} = this.props;
					if (!s) return null;
					const m = t.type === ts.Badge ? t.product.price : t.dollarPrice,
						d = t.type === ts.Badge ? void 0 : t.tokenPrice;
					if (this.state.showTokenTransactionModal && d) return r.a.createElement(ot.a, {
						correlationId: e,
						onClose: n,
						onPaymentComplete: o,
						price: d,
						subredditId: s.id
					});
					const l = t.type === ts.Subscription,
						p = (null == i ? void 0 : i.name) || "";
					return r.a.createElement("div", {
						className: as.a.container
					}, r.a.createElement(Ot, {
						purchaseType: t.type,
						subredditId: s.id,
						onClose: n
					}), r.a.createElement("div", {
						className: as.a.content
					}, r.a.createElement(ht, {
						className: as.a.cart,
						description: t.description(s),
						dollarPrice: m,
						monthly: l,
						subredditId: s.id,
						tokenPrice: d
					}), r.a.createElement(es, {
						className: as.a.payment,
						correlationId: e,
						dollarPrice: m,
						monthly: l,
						onPayWithTokens: () => this.setState({
							showTokenTransactionModal: !0
						}),
						onPaymentComplete: o,
						subreddit: s,
						target: t,
						tokenName: p,
						tokenPrice: d,
						trial: t.type === ts.Subscription && t.trial,
						username: a,
						wallet: c
					}), r.a.createElement(wt, {
						className: as.a.footer,
						dollarPrice: m,
						purchaseType: t.type,
						subredditId: s.id,
						tokenDisplayConversion: null == i ? void 0 : i.displayConversion,
						tokenName: p,
						tokenPrice: d
					})))
				}
			}
			const ns = Object(i.c)({
					pointsDetails: (e, t) => Object(mt.b)(e, t.subredditId),
					subreddit: (e, t) => t.subreddit,
					wallet: dt.d
				}),
				os = Object(n.b)((e, t) => {
					const s = Object(it.r)(e, t);
					return ns(e, {
						...t,
						subreddit: s,
						subredditId: (null == s ? void 0 : s.id) || void 0
					})
				}),
				is = Object(it.u)(),
				cs = Object(h.c)(rs);
			var ms = Object(ct.a)("spSpecialMemberships", Object(nt.a)(is(os(cs)))),
				ds = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Products/index.m.less"),
				ls = s.n(ds);

			function ps() {
				return (ps = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}

			function us(e) {
				const {
					dollarPrice: t,
					tokenPrice: s,
					trial: n,
					...o
				} = e;
				return r.a.createElement(ms, ps({}, o, {
					target: {
						dollarPrice: t,
						tokenPrice: s,
						trial: n,
						description(e) {
							const t = e && e.displayText || "",
								s = v.fbt._("{communityName} Subreddit Supporter", [v.fbt._param("communityName", t)], {
									hk: "3VL2SS"
								});
							return r.a.createElement(a.Fragment, null, r.a.createElement("img", {
								className: ls.a.crown,
								src: rt.a
							}), s)
						},
						type: ts.Subscription
					},
					viewEvent: t => ({
						source: "meta",
						action: "view",
						noun: "subscription_checkout_modal",
						correlationId: e.correlationId,
						...x.o(t),
						subreddit: x.jb(t)
					}),
					onPaymentComplete: e.onClose
				}))
			}
			var hs = s("./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx"),
				bs = s("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				gs = s("./src/reddit/featureFlags/index.ts"),
				fs = s("./src/reddit/pages/meta/MembershipPaywallPage/PurchaseButton/index.m.less"),
				_s = s.n(fs);
			const {
				fbt: xs
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class ys extends r.a.Component {
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
						meta: s,
						subredditId: a,
						userIsLoggedIn: n
					} = this.props, {
						canGift: o
					} = j(a), i = s.prices, c = i.usd, m = i.points, d = this.props.userIsPremiumSubscriber === O.a.Subscribed;
					return r.a.createElement(r.a.Fragment, null, !n && o && r.a.createElement(bs.c, {
						className: _s.a.recipient,
						onChange: this.handleUserNameChange
					}), r.a.createElement("button", {
						className: _s.a.checkout,
						disabled: d || o && !n && !this.state.usernameIsValid,
						onClick: n ? this.openCheckout : this.props.openLoginModal
					}, r.a.createElement("div", {
						className: _s.a.shimmer
					}), d ? xs._("Already a {supporter-term}", [xs._param("supporter-term", s.member)], {
						hk: "30uNOq"
					}) : xs._("Become a {supporter-term}", [xs._param("supporter-term", s.member)], {
						hk: "3TcAfC"
					})), r.a.createElement(st.a, {
						className: _s.a.price,
						dollarPrice: c,
						tokenPrice: m,
						monthly: !0,
						subredditId: a
					}), this.state.checkoutOpen ? t ? r.a.createElement(at.a, {
						withOverlay: !0,
						correlationId: e,
						subredditId: a,
						onClose: this.closeCheckout
					}) : r.a.createElement(us, {
						withOverlay: !0,
						correlationId: e,
						dollarPrice: c,
						tokenPrice: m,
						username: !n && this.state.usernameIsValid ? this.state.username : void 0,
						onClose: this.closeCheckout
					}) : null, r.a.createElement(hs.a, {
						subredditId: a
					}))
				}
			}
			const vs = Object(i.c)({
				meta: (e, {
					subredditId: t
				}) => Object(O.r)(e, t),
				customCrypto: gs.d.spCustomCrypto,
				userIsLoggedIn: e => !!e.user.account,
				userIsPremiumSubscriber: (e, {
					subredditId: t
				}) => Object(O.x)(e, t)
			});
			var Es = Object(n.b)(vs, e => ({
					openLoginModal: () => e(Object(tt.i)())
				}))(ys),
				ws = s("./src/reddit/pages/meta/MembershipPaywallPage/Intro/index.m.less"),
				Cs = s.n(ws);
			const ks = Object(i.c)({
				meta: (e, {
					subreddit: t
				}) => Object(O.r)(e, t.id)
			});
			var Ns, js, Os = Object(n.b)(ks)((function(e) {
					const {
						className: t,
						correlationId: s,
						meta: a,
						subreddit: n
					} = e;
					return r.a.createElement("div", {
						className: Object(l.a)(t, Cs.a.container)
					}, r.a.createElement("div", {
						className: Cs.a.logo
					}, r.a.createElement(et.a, {
						className: Cs.a.radialHighlightInner
					}), r.a.createElement(et.a, {
						className: Cs.a.radialHighlightOuter
					}), r.a.createElement($e.a, {
						size: "large",
						subreddit: n
					})), r.a.createElement("header", {
						className: Cs.a.subscriptionName
					}, "r/", n.name, " ", a.memberAltPlural), r.a.createElement("article", {
						className: Cs.a.description
					}, v.fbt._("Support r/{communityName}. Get exclusive features in the community.", [v.fbt._param("communityName", n.name)], {
						hk: "13ofnK"
					})), r.a.createElement(Es, {
						checkoutOnLogin: !0,
						correlationId: s,
						subredditId: n.id
					}))
				})),
				Ps = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Is = s("./node_modules/react-motion/lib/react-motion.js"),
				Ms = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/Testimonials/index.m.less"),
				Ss = s.n(Ms);
			! function(e) {
				e[e.Right = 110] = "Right", e[e.Center = 50] = "Center", e[e.Left = -110] = "Left"
			}(Ns || (Ns = {})),
			function(e) {
				e[e.Right = 0] = "Right", e[e.Center = -310] = "Center", e[e.Left = -620] = "Left"
			}(js || (js = {}));
			const Ts = fe()([{
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
				Ls = 1e4;
			class Bs extends r.a.Component {
				constructor() {
					super(...arguments), this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.props.testimonies.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, Ls)
					}
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, Ls)
				}
				componentWillUnmount() {
					this.timeoutRef && clearInterval(this.timeoutRef)
				}
				render() {
					const {
						className: e,
						flatDisplay: t,
						testimonies: s
					} = this.props, {
						currentSlideIdx: n
					} = this.state;
					return r.a.createElement("div", {
						className: Object(l.a)(e, Ss.a.container)
					}, r.a.createElement(Is.TransitionMotion, {
						defaultStyles: [{
							key: "slide-0",
							data: {
								index: 0
							},
							style: {
								left: Ns.Center,
								marginLeft: js.Center,
								opacity: 1
							}
						}],
						styles: [{
							key: `slide-${n}`,
							data: {
								index: n
							},
							style: {
								left: Object(Is.spring)(Ns.Center),
								marginLeft: Object(Is.spring)(js.Center),
								opacity: Object(Is.spring)(1)
							}
						}],
						willEnter: () => ({
							left: Ns.Right,
							marginLeft: js.Right,
							opacity: 0
						}),
						willLeave: () => ({
							left: Object(Is.spring)(Ns.Left),
							marginLeft: Object(Is.spring)(js.Left),
							opacity: Object(Is.spring)(0)
						})
					}, e => r.a.createElement(a.Fragment, null, e.map(e => {
						const n = s[e.data.index],
							o = n.badges.map(e => {
								const {
									url2x: t
								} = Object(w.d)(20, 20, e);
								return t
							}),
							i = be()(n.badges),
							c = i && i.extra && i.extra.style && i.extra.style.color;
						return r.a.createElement(a.Fragment, null, r.a.createElement("div", {
							className: Ss.a.testimony,
							key: e.key,
							style: {
								left: `${e.style.left}%`,
								marginLeft: `${e.style.marginLeft}px`
							},
							onClick: this.gotoNextSlide
						}, r.a.createElement("svg", {
							className: Object(l.a)(Ss.a.testimonyOutline, {
								[Ss.a.testimonyOutlineFlat]: !!t
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
							className: Ss.a.testimonyText
						}, n.text)), r.a.createElement("div", {
							className: Ss.a.user,
							key: `user-${e.key}`,
							style: {
								opacity: e.style.opacity
							}
						}, o.map(e => r.a.createElement("img", {
							className: Ss.a.badge,
							src: e
						})), r.a.createElement("div", {
							className: Ss.a.username,
							style: {
								color: c
							}
						}, `u/${n.username}`)))
					}))), r.a.createElement("div", {
						className: Ss.a.indicators
					}, s.map((e, t) => r.a.createElement("div", {
						className: Object(l.a)(Ss.a.indicator, {
							[Ss.a.indicatorSelected]: t === n
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))
				}
			}
			Bs.defaultProps = {
				testimonies: Ts
			};
			var As = s("./src/reddit/pages/meta/MembershipPaywallPage/Thanks/index.m.less"),
				Rs = s.n(As);
			const Fs = Object(i.c)({
				meta: (e, {
					subreddit: t
				}) => Object(O.r)(e, t.id)
			});
			var zs = Object(n.b)(Fs)((function(e) {
					const {
						className: t,
						correlationId: s,
						meta: a,
						subreddit: n
					} = e, o = j(n.id);
					return r.a.createElement("article", {
						className: Object(l.a)(Rs.a.container, t)
					}, o.communityThanks && r.a.createElement("header", {
						className: Rs.a.title
					}, v.fbt._("The Community Thanks You", null, {
						hk: "28CsBt"
					})), o.testimonials && r.a.createElement(Bs, {
						flatDisplay: !0
					}), o.testimonials && r.a.createElement("div", {
						className: Rs.a.divider
					}), r.a.createElement("footer", {
						className: Rs.a.footer
					}, r.a.createElement($e.a, {
						className: Rs.a.brand,
						size: "large",
						subreddit: n
					}), r.a.createElement("div", {
						className: Rs.a.cta
					}, r.a.createElement("div", {
						className: Rs.a.description
					}, v.fbt._("Support r/{communityName} with a {membership}", [v.fbt._param("communityName", n.name), v.fbt._param("membership", a.membership)], {
						hk: "3M1a22"
					})), r.a.createElement("div", {
						className: Rs.a.benefits
					}, o.styleBadges && r.a.createElement("div", {
						className: Rs.a.benefit
					}, r.a.createElement(Ps.a, {
						className: Rs.a.check
					}), "Add a badge and color to your username"), o.emotes && r.a.createElement("div", {
						className: Rs.a.benefit
					}, r.a.createElement(Ps.a, {
						className: Rs.a.check
					}), "Get access to premium animated emotes"), o.gifs && r.a.createElement("div", {
						className: Rs.a.benefit
					}, r.a.createElement(Ps.a, {
						className: Rs.a.check
					}), "Add GIFs to your comments")), r.a.createElement(Es, {
						subredditId: n.id,
						correlationId: s
					}))))
				})),
				Ds = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/index.m.less"),
				Gs = s.n(Ds),
				Hs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx"),
				Zs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Header/index.m.less"),
				Ws = s.n(Zs);
			const Vs = [800, 1200];

			function Us(e) {
				const {
					className: t,
					subreddit: s
				} = e;
				return r.a.createElement("header", {
					className: Object(l.a)(Ws.a.container, t)
				}, r.a.createElement("div", {
					className: Ws.a.tag
				}, v.fbt._("benefits", null, {
					hk: "3HAYfG"
				})), r.a.createElement("div", {
					className: Ws.a.title
				}, v.fbt._("What do you get?", null, {
					hk: "3PyKKB"
				})), j(s.id).animations && r.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/a1hxn4/the_moment_my_son_discovered_that_his_skin/",
					target: "_blank"
				}, r.a.createElement(M.a, {
					scrollRange: Vs
				}, e => r.a.createElement("img", {
					className: Ws.a.chickenRightArm,
					src: Object(T.a)(s, "chicken_right_arm@2x.png"),
					style: e
				})), r.a.createElement("img", {
					className: Ws.a.chickenTorso,
					src: Object(T.a)(s, "chicken_torso@2x.png")
				}), r.a.createElement(M.a, {
					scrollRange: Vs
				}, e => r.a.createElement("img", {
					className: Ws.a.chickenLeftArm,
					src: Object(T.a)(s, "chicken_left_arm@2x.png"),
					style: e
				})), r.a.createElement("img", {
					className: Ws.a.chickenLeftShoulder,
					src: Object(T.a)(s, "chicken_left_shoulder@2x.png")
				}), r.a.createElement("img", {
					className: Ws.a.chickenHead,
					src: Object(T.a)(s, "chicken_head@2x.png")
				})))
			}
			var qs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Tip/index.m.less"),
				Xs = s.n(qs);

			function Ys(e) {
				return r.a.createElement("div", {
					className: Object(l.a)(e.className, Xs.a.container)
				}, r.a.createElement("div", {
					className: Xs.a.circle
				}, e.index), r.a.createElement("div", {
					className: Xs.a.circleShimmer
				}), r.a.createElement("div", {
					className: Xs.a.tooltipWrapper
				}, r.a.createElement("svg", {
					className: Xs.a.tooltip,
					viewBox: "0 0 140 60",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M8 0C3.58172 0 0 3.58172 0 8V42C0 46.4183 3.58172 50 8 50H60.3934L69.6066 59.2132L78.8198 50H132C136.418 50 140 46.4183 140 42V8C140 3.58172 136.418 0 132 0H8Z"
				})), r.a.createElement("div", {
					className: Xs.a.tooltipText
				}, e.text)))
			}
			var Ks = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/index.m.less"),
				Js = s.n(Ks);

			function Qs(e) {
				const t = Object(T.a)(e.subreddit, "what-do-you-get.png");
				return r.a.createElement("article", {
					className: Object(l.a)(Js.a.container, e.className)
				}, r.a.createElement(Us, {
					subreddit: e.subreddit
				}), r.a.createElement("div", {
					className: Js.a.content
				}, r.a.createElement("img", {
					className: Js.a.img,
					src: t
				}), r.a.createElement("img", {
					className: Js.a.emoji,
					src: "https://meta.redditmedia.com/img/fortnitebr/emotes/oof-2x.gif"
				}), r.a.createElement("img", {
					className: Js.a.gif,
					src: "http://giphygifs.s3.amazonaws.com/media/HX3lSnGXZnaWk/giphy.gif"
				}), r.a.createElement(Ys, {
					className: Js.a.tip1,
					index: 1,
					text: v.fbt._("Get up to 3 badges", null, {
						hk: "2ftguA"
					})
				}), r.a.createElement(Ys, {
					className: Js.a.tip2,
					index: 2,
					text: v.fbt._("Use animated emojis in comments", null, {
						hk: "1teakj"
					})
				}), r.a.createElement(Ys, {
					className: Js.a.tip3,
					index: 3,
					text: v.fbt._("Embed GIF directly in your comments", null, {
						hk: "1fLSUy"
					})
				})), j(e.subreddit.id).animations && r.a.createElement(Hs.a, {
					className: Js.a.footer,
					subreddit: e.subreddit
				}))
			}

			function $s(e) {
				const t = j(e.subreddit.id),
					s = t.styleBadges && t.emotes && t.gifs;
				return r.a.createElement("article", {
					className: Object(l.a)(e.className, Gs.a.container)
				}, t.testimonials && r.a.createElement(b, {
					fireOnce: !0,
					onEnter: t => ({
						source: "meta",
						action: "view",
						noun: "landing_page_2_testimonials",
						correlationId: e.correlationId,
						...x.o(t),
						subreddit: x.jb(t)
					})
				}, r.a.createElement(Bs, null)), s && r.a.createElement(b, {
					fireOnce: !0,
					onEnter: t => ({
						source: "meta",
						action: "view",
						noun: "landing_page_3_what_do_you_get",
						correlationId: e.correlationId,
						...x.o(t),
						subreddit: x.jb(t)
					})
				}, r.a.createElement(Qs, {
					subreddit: e.subreddit
				})))
			}
			var ea = s("./src/reddit/pages/meta/MembershipPaywallPage/index.m.less"),
				ta = s.n(ea);
			class sa extends r.a.Component {
				constructor(e) {
					super(e);
					const t = Object(p.a)(location.search);
					this.correlationId = t && t.get("corr") || m()()
				}
				componentDidMount() {
					this.props.sendEvent(e => ({
						source: "meta",
						action: "view",
						noun: "subscription_learn_more_page",
						correlationId: this.correlationId,
						...x.o(e),
						subreddit: x.jb(e)
					}))
				}
				render() {
					const {
						isOverlay: e,
						subreddit: t
					} = this.props;
					return t ? g.b.has(t.name.toLowerCase()) ? r.a.createElement("div", {
						className: Object(l.a)(ta.a.container, {
							[ta.a.notOverlay]: !e,
							[ta.a.overlay]: e
						})
					}, r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_1_intro",
							correlationId: this.correlationId,
							...x.o(e),
							subreddit: x.jb(e)
						})
					}, r.a.createElement(Os, {
						correlationId: this.correlationId,
						subreddit: t
					})), r.a.createElement($s, {
						className: ta.a.whatDoYouGet,
						correlationId: this.correlationId,
						subreddit: t
					}), r.a.createElement(He, {
						className: ta.a.benefits,
						correlationId: this.correlationId,
						subreddit: t
					}), r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_10_community_thanks",
							correlationId: this.correlationId,
							...x.o(e),
							subreddit: x.jb(e)
						})
					}, r.a.createElement(zs, {
						className: ta.a.thanks,
						correlationId: this.correlationId,
						subreddit: t
					})), r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_11_faq",
							correlationId: this.correlationId,
							...x.o(e),
							subreddit: x.jb(e)
						})
					}, r.a.createElement(Xe, {
						className: ta.a.faq,
						subreddit: t
					})), r.a.createElement(b, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_12_footer",
							correlationId: this.correlationId,
							...x.o(e),
							subreddit: x.jb(e)
						})
					}, r.a.createElement(Qe, {
						className: ta.a.footer,
						subreddit: t
					}))) : r.a.createElement(o.c, {
						to: `/r/${t.name}`
					}) : null
				}
			}
			const aa = Object(i.c)({
				currentUser: y.k,
				isOverlay: f.i,
				subreddit: (e, {
					match: t
				}) => {
					const s = t.params.subredditName;
					if (s) return Object(_.x)(e, {
						subredditName: s
					})
				}
			});
			var ra;
			t.default = Object(h.c)(Object(n.b)(aa)((ra = sa, class extends a.Component {
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
					return this.state.mounted ? r.a.createElement(ra, this.props) : null
				}
			})))
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "f", (function() {
				return p
			}));
			var a = s("./src/reddit/contexts/PageLayer/index.tsx");
			const r = [],
				n = {},
				o = (e, t) => {
					const s = u(e, t);
					if (s) return s.mainHeader
				},
				i = (e, t) => {
					const s = u(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				c = (e, t) => {
					const s = u(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : n
				},
				m = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				d = (e, t) => {
					const s = m(e, t),
						a = s && s.publicAddress;
					if (!a) throw new Error("No wallet address found");
					return a
				},
				l = (e, t) => {
					const s = m(e, t);
					return s && s.amount || "0"
				},
				p = (e, t) => {
					const s = Object(a.n)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || r
				},
				u = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MembershipPaywallPage.abfef4baed25d1cd5782.js.map