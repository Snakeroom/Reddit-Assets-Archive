// https://www.redditstatic.com/desktop2x/CoinPurchaseModal.d085796883f6a8d8f7ef.js
// Retrieved at 7/7/2022, 2:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CoinPurchaseModal", "gildActions"], {
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, r) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function n() {}

				function a() {}
				a.resetWarningCache = n;
				var s = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, n, a, s, o) {
							if (o !== r) {
								var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw c.name = "Invariant Violation", c
							}
						}

						function t() {
							return e
						}
						e.isRequired = e;
						var s = {
							array: e,
							bool: e,
							func: e,
							number: e,
							object: e,
							string: e,
							symbol: e,
							any: e,
							arrayOf: t,
							element: e,
							elementType: e,
							instanceOf: t,
							node: e,
							objectOf: t,
							oneOf: t,
							oneOfType: t,
							shape: t,
							exact: t,
							checkPropTypes: a,
							resetWarningCache: n
						};
						return s.PropTypes = s, s
					}()
				}));

				function o(e) {
					return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function c(e, t, r) {
					return t in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function i(e, t) {
					var r = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var n = Object.getOwnPropertySymbols(e);
						t && (n = n.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), r.push.apply(r, n)
					}
					return r
				}

				function d(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = null != arguments[t] ? arguments[t] : {};
						t % 2 ? i(Object(r), !0).forEach((function(t) {
							c(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
						}))
					}
					return e
				}

				function l(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
							var r = [],
								n = !0,
								a = !1,
								s = void 0;
							try {
								for (var o, c = e[Symbol.iterator](); !(n = (o = c.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
							} catch (i) {
								a = !0, s = i
							} finally {
								try {
									n || null == c.return || c.return()
								} finally {
									if (a) throw s
								}
							}
							return r
						}
					}(e, t) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return u(e, t);
							var r = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? u(e, t) : void 0
						}
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function u(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
					return n
				}
				var m = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
							r.current = e
						}), [e]), r.current
					},
					p = function(e) {
						return null !== e && "object" === o(e)
					},
					b = function(e, t, r) {
						return p(e) ? Object.keys(e).reduce((function(n, a) {
							var s = !p(t) || ! function e(t, r) {
								if (!p(t) || !p(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var a = "[object Object]" === Object.prototype.toString.call(t);
								if (a !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!a && !n) return !1;
								var s = Object.keys(t),
									o = Object.keys(r);
								if (s.length !== o.length) return !1;
								for (var c = {}, i = 0; i < s.length; i += 1) c[s[i]] = !0;
								for (var d = 0; d < o.length; d += 1) c[o[d]] = !0;
								var l = Object.keys(c);
								if (l.length !== s.length) return !1;
								var u = t,
									m = r;
								return l.every((function(t) {
									return e(u[t], m[t])
								}))
							}(e[a], t[a]);
							return r.includes(a) ? (s && console.warn("Unsupported prop change: options.".concat(a, " is not a mutable property.")), n) : s ? d(d({}, n || {}), {}, c({}, a, e[a])) : n
						}), null) : null
					},
					f = function(e) {
						if (null === e || p(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					g = function(e) {
						if (function(e) {
								return p(e) && "function" == typeof e.then
							}(e)) return {
							tag: "async",
							stripePromise: Promise.resolve(e).then(f)
						};
						var t = f(e);
						return null === t ? {
							tag: "empty"
						} : {
							tag: "sync",
							stripe: t
						}
					},
					h = t.createContext(null);
				h.displayName = "ElementsContext";
				var y = function(e) {
					var r = e.stripe,
						n = e.options,
						a = e.children,
						s = t.useRef(!1),
						o = t.useRef(!0),
						c = t.useMemo((function() {
							return g(r)
						}), [r]),
						i = l(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = i[0],
						u = i[1],
						p = m(r);
					null !== p && p !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), s.current || ("sync" === c.tag && (s.current = !0, u({
						stripe: c.stripe,
						elements: c.stripe.elements(n)
					})), "async" === c.tag && (s.current = !0, c.stripePromise.then((function(e) {
						e && o.current && u({
							stripe: e,
							elements: e.elements(n)
						})
					}))));
					var f = m(n);
					return t.useEffect((function() {
						if (d.elements) {
							var e = b(n, f, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [n, f, d.elements]), t.useEffect((function() {
						return function() {
							o.current = !1
						}
					}), []), t.useEffect((function() {
						var e = d.stripe;
						e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({
							name: "react-stripe-js",
							version: "1.6.0"
						}), e.registerAppInfo({
							name: "react-stripe-js",
							version: "1.6.0",
							url: "https://stripe.com/docs/stripe-js/react"
						}))
					}), [d.stripe]), t.createElement(h.Provider, {
						value: d
					}, a)
				};
				y.propTypes = {
					stripe: s.any,
					options: s.object
				};
				var j = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(h), e)
					},
					O = function(e) {
						return (0, e.children)(j("mounts <ElementsConsumer>"))
					};
				O.propTypes = {
					children: s.func.isRequired
				};
				var v = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					C = function() {},
					w = function(e, r) {
						var n, a = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							o = r ? function(e) {
								j("mounts <".concat(a, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									s = r.className,
									o = r.options,
									c = void 0 === o ? {} : o,
									i = r.onBlur,
									d = void 0 === i ? C : i,
									l = r.onFocus,
									u = void 0 === l ? C : l,
									p = r.onReady,
									f = void 0 === p ? C : p,
									g = r.onChange,
									h = void 0 === g ? C : g,
									y = r.onEscape,
									O = void 0 === y ? C : y,
									w = r.onClick,
									P = void 0 === w ? C : w,
									x = j("mounts <".concat(a, ">")).elements,
									E = t.useRef(null),
									k = t.useRef(null),
									_ = v(f),
									I = v(d),
									N = v(u),
									S = v(P),
									A = v(h),
									T = v(O);
								t.useLayoutEffect((function() {
									if (null == E.current && x && null != k.current) {
										var t = x.create(e, c);
										E.current = t, t.mount(k.current), t.on("ready", (function() {
											return _(t)
										})), t.on("change", A), t.on("blur", I), t.on("focus", N), t.on("escape", T), t.on("click", S)
									}
								}));
								var M = m(c);
								return t.useEffect((function() {
									if (E.current) {
										var e = b(c, M, ["paymentRequest"]);
										e && E.current.update(e)
									}
								}), [c, M]), t.useLayoutEffect((function() {
									return function() {
										E.current && E.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: s,
									ref: k
								})
							};
						return o.propTypes = {
							id: s.string,
							className: s.string,
							onChange: s.func,
							onBlur: s.func,
							onFocus: s.func,
							onReady: s.func,
							onClick: s.func,
							options: s.object
						}, o.displayName = a, o.__elementType = e, o
					},
					P = "undefined" == typeof window,
					x = w("auBankAccount", P),
					E = w("card", P),
					k = w("cardNumber", P),
					_ = w("cardExpiry", P),
					I = w("cardCvc", P),
					N = w("fpxBank", P),
					S = w("iban", P),
					A = w("idealBank", P),
					T = w("p24Bank", P),
					M = w("epsBank", P),
					R = w("payment", P),
					G = w("paymentRequestButton", P),
					B = w("linkAuthentication", P),
					L = w("shippingAddress", P),
					D = w("afterpayClearpayMessage", P);
				e.AfterpayClearpayMessageElement = D, e.AuBankAccountElement = x, e.CardCvcElement = I, e.CardElement = E, e.CardExpiryElement = _, e.CardNumberElement = k, e.Elements = y, e.ElementsConsumer = O, e.EpsBankElement = M, e.FpxBankElement = N, e.IbanElement = S, e.IdealBankElement = A, e.LinkAuthenticationElement = B, e.P24BankElement = T, e.PaymentElement = R, e.PaymentRequestButtonElement = G, e.ShippingAddressElement = L, e.useElements = function() {
					return j("calls useElements()").elements
				}, e.useStripe = function() {
					return j("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, r("./node_modules/react/index.js"))
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, r) {
			var n = r("./node_modules/lodash/toString.js"),
				a = 0;
			e.exports = function(e) {
				var t = ++a;
				return n(e) + t
			}
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/lib/currency/cleanNumber/index.ts");

			function a(e, t) {
				const r = Object(n.a)(e),
					a = parseInt(r) / 100;
				return Math.floor(a) !== a || t ? a.toFixed(2) : String(a)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, r) {
			"use strict";

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			r.d(t, "a", (function() {
				return n
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			}));
			var n, a = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const s = "USD",
				o = "ETH",
				c = "COINS",
				i = [o, "BTC"],
				d = [c, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => a.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => a.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => a.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/loadRedditAdsPixel.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return s
			}));
			var n = r("./src/lib/sentry/index.ts");

			function a() {
				! function(e, t) {
					if (!e.rdt) {
						var r = e.rdt = function() {
							r.sendEvent ? r.sendEvent.apply(r, arguments) : r.callQueue.push(arguments)
						};
						r.callQueue = [];
						var n = t.createElement("script");
						n.src = "https://www.redditstatic.com/ads/pixel.js", n.async = !0;
						var a = t.getElementsByTagName("script")[0];
						a.parentNode.insertBefore(n, a)
					}
				}(window, document), rdt("init", "t2_2q2gwo2t"), rdt("track", "PageVisit")
			}
			const s = () => {
				try {
					rdt("track", "Purchase")
				} catch (e) {
					n.c.captureMessage('Attempted to fire RedditAds "Purchase" pixel, but global "rdt" object was unavailable')
				}
			}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			}));
			var n = r("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				a = r("./src/lib/currency/centsToDollars/index.ts"),
				s = r("./src/lib/currency/currencies.ts"),
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				c = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: r,
						formatOptions: a
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const s = Number(e);
					return Object(i.c)() ? r ? Object(o.b)(s) : new Intl.NumberFormat(t, a).format(s) : u(s, r, t)
				},
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? p(t.type) : s.c),
						type: g = t.type || (t.currency ? m(t.currency) : s.b.Real)
					} = t, h = Number(e), y = String(e);
					switch (g) {
						case s.b.Reddit: {
							const e = s.e[f],
								t = e ? e() : f;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(h) + " " + t : u(h, o, r, t)
						}
						case s.b.Crypto: {
							if (o) {
								return Object(c.d)(y, l) + " " + f
							}
							const e = Number(Object(c.c)(y, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, o, r, f)
						}
						case s.b.Real:
						default: {
							const e = Number(Object(a.a)(y, b));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...d
							}).format(e) : u(e, o, r, f)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(o.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				m = e => s.g.includes(e.toUpperCase()) ? s.b.Reddit : s.f.includes(e.toUpperCase()) ? s.b.Crypto : s.b.Real,
				p = e => {
					switch (e) {
						case s.b.Crypto:
							return s.d;
						case s.b.Reddit:
							return s.a;
						case s.b.Real:
						default:
							return s.c
					}
				}
		},
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
		},
		"./src/reddit/actions/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/econPurchase/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				c = r("./src/redditGQL/operations/SubredditCoins.json");
			var i = r("./src/reddit/featureFlags/subredditPoints.ts"),
				d = r("./src/reddit/actions/gold/constants.ts");
			Object(n.a)({
				features: {
					econPurchase: a.a
				}
			});
			const l = Object(s.a)(d.lb),
				u = (e, t, r) => async (n, a, s) => {
					let {
						gqlContext: d
					} = s;
					var u, m;
					if (!i.a.has(t.toLowerCase())) return;
					if (void 0 !== a().features.econPurchase.subredditLockedCoins[e] && !(null == r ? void 0 : r.force)) return;
					const p = await ((e, t) => Object(o.a)(e, {
						...c,
						variables: {
							subreddit: t
						}
					}))(d(), e);
					if (p.ok) {
						const t = p.body;
						n(l({
							subredditId: e,
							amount: (null === (m = null === (u = t.data.subredditInfoById) || void 0 === u ? void 0 : u.userCoinsInSubreddit) || void 0 === m ? void 0 : m.amount) || 0
						}))
					}
				}
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setIsAnonymous", (function() {
				return z
			})), r.d(t, "updateMessage", (function() {
				return Y
			})), r.d(t, "gildGqlRequested", (function() {
				return Z
			})), r.d(t, "triggerLoader", (function() {
				return $
			})), r.d(t, "gildPending", (function() {
				return ee
			})), r.d(t, "gildFailed", (function() {
				return re
			})), r.d(t, "gildSuccessful", (function() {
				return se
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/postParentMessage/index.ts"),
				o = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/profile/index.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./node_modules/react/index.js"),
				p = r.n(m),
				b = r("./src/reddit/models/Gold/Award.ts"),
				f = r("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				g = r.n(f);
			const {
				fbt: h
			} = r("./node_modules/fbt/lib/FbtPublic.js"), y = e => h._("Sent! You earned {=awarder karma}", [h._param("=awarder karma", p.a.createElement("a", {
				className: g.a.karmaLink,
				href: b.a,
				target: "_blank",
				rel: "noopener noreferrer"
			}, h._({
				"*": "{awarder karma} awarder karma",
				_1: "1 awarder karma"
			}, [h._plural(e.awarderKarmaReceived, "awarder karma")], {
				hk: "2Llmz0"
			})))], {
				hk: "3ItXUT"
			});
			var j = r("./src/reddit/constants/modals.ts"),
				O = r("./src/reddit/models/Gold/Coins/index.ts"),
				v = r("./src/reddit/models/Post/index.ts"),
				C = r("./src/reddit/models/Toast/index.ts"),
				w = r("./src/reddit/models/User/index.ts"),
				P = r("./src/reddit/selectors/commentSelector.ts"),
				x = r("./src/reddit/selectors/communityAwards.ts"),
				E = r("./src/reddit/selectors/gild.ts"),
				k = r("./src/reddit/selectors/gold/awardIcon.ts"),
				_ = r("./src/reddit/selectors/gold/econPurchase.ts"),
				I = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				N = r("./src/reddit/selectors/posts.ts"),
				S = r("./src/reddit/selectors/subreddit.ts"),
				A = r("./src/reddit/selectors/user.ts"),
				T = r("./src/reddit/endpoints/awards/index.ts"),
				M = r("./src/lib/makeGqlRequest/index.ts"),
				R = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				G = r("./src/redditGQL/operations/GildComment.json"),
				B = r("./src/redditGQL/operations/GildPost.json");
			const L = (e, t, r) => Object(M.a)(e, {
					...B,
					variables: t
				}, {
					query: r ? {} : Object(R.b)()
				}),
				D = (e, t, r) => Object(M.a)(e, {
					...G,
					variables: t
				}, {
					query: r ? {} : Object(R.b)()
				});
			var F = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				q = r("./src/reddit/helpers/awards/message.ts"),
				Q = r("./src/reddit/helpers/correlationIdTracker.ts"),
				U = r("./src/reddit/helpers/isPost.ts"),
				H = r("./src/reddit/helpers/trackers/gild.ts"),
				V = r("./src/telemetry/index.ts"),
				W = r("./src/reddit/endpoints/profile/info.ts"),
				K = r("./src/reddit/actions/gold/constants.ts"),
				J = r("./src/reddit/actions/gold/econPurchase.ts");
			const z = Object(a.a)(K.r),
				Y = Object(a.a)(K.v),
				Z = (e, t) => async (r, a) => {
					const s = a(),
						o = !Object(U.a)(e) && Object(P.d)(s, {
							commentId: e
						});
					r(ee());
					try {
						o ? await r(((e, t) => {
							let {
								isOldReddit: r
							} = t;
							return async (t, n, a) => {
								let {
									gqlContext: s
								} = a;
								const o = n(),
									{
										selectedAward: c,
										message: i,
										isAnonymous: d
									} = o.gild,
									l = Object(E.b)(o) || Object(Q.d)(Q.a.GildingFlow, !1),
									{
										receivedKarma: u
									} = await Object(T.b)(s(), {
										targetId: e,
										awardId: c.id,
										isAnonymous: d,
										nonce: l,
										message: Object(q.d)(i, c)
									}, r),
									m = await Object(T.a)(s(), {
										thingId: e
									}, r);
								await t(se({
									id: e,
									awardId: c.id,
									awardings: m.awardings,
									awardKarmaReceived: u || 0,
									coins: m.coins,
									treatmentTags: m.treatmentTags
								}))
							}
						})(e, t)) : await r(((e, t) => {
							let {
								isOldReddit: r
							} = t;
							return async (t, a, s) => {
								let {
									gqlContext: o
								} = s;
								const c = a(),
									i = c.gild,
									d = Object(N.G)(c, {
										postId: e
									}),
									l = Object(U.a)(e) && !!d && Object(v.q)(d),
									u = {
										gildingTypeId: i.selectedAward.id,
										isAnonymous: i.isAnonymous,
										isGildFunded: !1,
										message: Object(q.d)(i.message, i.selectedAward, l),
										nodeId: e
									},
									m = Object(U.a)(e) ? L : D,
									p = await m(o(), {
										input: u
									}, r);
								let b = !1,
									f = null,
									g = null;
								if (p.ok) {
									const e = p.body;
									b = e.data.gild.ok, f = e.data.gild.fieldErrors, g = e.data.gild.errors
								}
								if (b) {
									const r = p.body,
										{
											gild: n
										} = r.data,
										a = Object(U.a)(e) ? p.body.data.gild.postInfo : p.body.data.gild.comment,
										{
											awardings: s,
											treatmentTags: o
										} = a;
									await t(se({
										awardId: i.selectedAward.id,
										awardings: s,
										awardKarmaReceived: n.awardKarmaReceived,
										coins: n.coins,
										id: e,
										subredditCoins: n.subredditCoins,
										treatmentTags: o
									}))
								} else {
									const e = null == f ? void 0 : f[0].message,
										r = null == g ? void 0 : g[0].message,
										a = e || r || n.fbt._("An unknown error occurred", null, {
											hk: "2oAbwZ"
										});
									await t(re(a))
								}
							}
						})(e, t))
					} catch (c) {
						const e = c,
							t = e && e.message || n.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await r(re(t))
					} finally {
						Object(Q.b)(Q.a.GildingFlow)
					}
				}, $ = Object(a.a)(K.u), X = Object(a.a)(K.q), ee = () => async (e, t) => {
					e(X()), window.setTimeout(() => {
						t().gild.api.pending && e($())
					}, 2e3)
				}, te = Object(a.a)(K.p), re = e => async (t, r) => {
					await t(te(e)), t(Object(u.f)({
						kind: C.b.Error,
						duration: u.a,
						text: e
					}))
				}, ne = Object(a.a)(K.s), ae = (e, t) => {
					const {
						id: r
					} = t, n = Object(U.a)(r) ? Object(N.G)(e, {
						postId: r
					}) : Object(P.b)(e, {
						commentId: r
					}), a = Object(A.k)(e), s = e.gild, {
						isAnonymous: o
					} = s, c = !o && a && (a.username || a.displayText) ? a.username || a.displayText : void 0, i = n ? n.author : void 0, d = Object(S.K)(e, {
						thingId: r
					});
					return ne({
						...t,
						gilder: c,
						gildee: i,
						subredditId: d && d.id
					})
				}, se = e => async (t, r) => {
					const a = r(),
						{
							awardId: m,
							id: p
						} = e,
						f = Object(x.a)(a, m),
						g = e.awardKarmaReceived,
						h = Object(A.k)(a),
						P = Object(E.b)(a) || Object(Q.d)(Q.a.GildingFlow, !1);
					if (Object(E.g)(a)) {
						const e = "success.gild",
							t = {},
							r = Object(k.a)(a, {
								award: f,
								minSize: 32,
								postOrCommentId: p
							});
						t.awardId = m, t.awardIcon = r, t.awardName = f.name, Object(s.a)({
							type: e,
							data: t
						})
					}
					if (f.awardType === b.f.Moderator && void 0 === e.subredditCoins) {
						const t = Object(S.K)(a, {
								thingId: p
							}),
							r = t && Object(S.C)(a, {
								subredditName: t.name
							});
						r && (e.subredditCoins = r - f.coinPrice)
					}
					if (t(ae(a, e)), h) {
						const r = {
								...W.a,
								...h.karma
							},
							n = r.fromAwardsReceived + e.awardKarmaReceived,
							a = Object(w.e)(h);
						t(Object(l.f)({
							coins: e.coins
						})), t(Object(l.h)({
							userName: a,
							karma: {
								...r,
								fromAwardsReceived: n
							}
						}))
					}(a.posts.instances[p] || []).forEach(r => {
						t(ae(a, {
							...e,
							id: r
						}))
					});
					const T = Object(U.a)(p) ? n.fbt._("Success! You have given this post the {awardName} Award", [n.fbt._param("awardName", f.name)], {
							hk: "1Ndi4Z"
						}) : n.fbt._("Success! You have given this comment the {awardName} Award", [n.fbt._param("awardName", f.name)], {
							hk: "2sIK9Y"
						}),
						M = f.coinPrice;
					Object(V.a)(Object(H.viewKarmaSuccessEvent)({
						award: f,
						awarderKarmaEarned: g,
						awardeeKarmaEarned: 0,
						numberCoins: M,
						thingId: p
					})(a)), t(Object(d.g)(j.a.GOLD_GILD_MODAL));
					const R = Object(k.a)(a, {
						award: f,
						minSize: 64,
						postOrCommentId: p
					});
					t(Object(u.f)({
						customIconAsset: R,
						kind: C.b.SuccessAward,
						text: g > 0 ? y({
							awarderKarmaReceived: g
						}) : T
					})), setTimeout(() => {
						const e = Object(F.a)(m, p),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const G = Date.now();
					await t(Object(i.b)({
						correlationId: P,
						forceLoad: !0
					}));
					const B = Date.now() - G;
					if (M > 0) {
						const e = Object(I.f)(r()).filter(e => O.a.has(e.dealInfo.type));
						if (e.length) {
							const r = Math.max(900 - B, 10),
								n = Math.max(300 - B, 10),
								s = Object(U.a)(p) && Object(v.q)(Object(N.G)(a, {
									postId: p
								}));
							setTimeout(() => t(Object(c.e)({
								correlationId: P,
								packageId: e[0].mobileId
							})), s ? r : n)
						}
					}
					const L = Object(S.K)(a, {
						thingId: p
					});
					if (L && Object(_.a)(a, {
							subredditId: L.id
						}) && t(Object(J.a)(L.id, L.name, {
							force: !0
						})), 0 === M && L) {
						t(Object(o.a)(L.id, p, void 0, !0));
						const e = 399,
							n = Object(I.d)(r()).reduce((t, r) => {
								const n = Math.abs(r.pennies - e);
								return (!t || n < t.priceDelta) && (t = {
									packageId: r.mobileId,
									priceDelta: n
								}), t
							}, null);
						n && t(Object(c.b)({
							correlationId: P,
							packageId: n.packageId
						}))
					}
				}
		},
		"./src/reddit/actions/gold/productOfferPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return P
			})), r.d(t, "d", (function() {
				return E
			})), r.d(t, "k", (function() {
				return k
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "g", (function() {
				return I
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "c", (function() {
				return S
			})), r.d(t, "a", (function() {
				return G
			})), r.d(t, "i", (function() {
				return L
			})), r.d(t, "f", (function() {
				return F
			})), r.d(t, "j", (function() {
				return q
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/omit.js"),
				s = r.n(a),
				o = r("./node_modules/uuid/v4.js"),
				c = r.n(o),
				i = r("./src/config.ts"),
				d = r("./src/reddit/constants/modals.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./src/lib/addQueryParams/index.ts"),
				m = r("./src/lib/makeActionCreator/index.ts"),
				p = r("./src/lib/sentry/index.ts"),
				b = r("./src/reddit/models/Toast/index.ts"),
				f = r("./src/reddit/actions/gold/constants.ts"),
				g = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				h = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/selectors/user.ts"),
				j = r("./src/reddit/actions/gold/powerups.ts"),
				O = r("./src/reddit/actions/modal.ts"),
				v = r("./src/reddit/endpoints/gold/productOfferPurchase/index.ts");
			const C = () => n.fbt._("Something went wrong during payment", null, {
					hk: "31kmAa"
				}),
				w = e => e.map(e => e.message).join(" : "),
				P = (e, t, r, a) => async (s, o, i) => {
					let {
						gqlContext: d
					} = i;
					const l = c()(),
						u = await Object(v.f)(d(), l, e, t, r, a);
					if (u.ok) {
						const e = u.body,
							{
								errors: t,
								order: r
							} = e.data.createEconOrder;
						if (t && t.length) throw new Error(w(t));
						if (r) return r.id
					}
					throw new Error((() => n.fbt._("Something went wrong during order creation", null, {
						hk: "19gS4y"
					}))())
				}, x = Object(g.stripeApiError)(n.fbt._("Something went wrong during payment creation", null, {
					hk: "2LgB2E"
				})), E = e => !!e && e.hasOwnProperty("success"), k = e => {
					let {
						stripe: t,
						stripeElements: r,
						productOffer: n,
						pricePackage: a,
						productsCount: s,
						extraParams: o
					} = e;
					return async (e, i, d) => {
						let {
							gqlContext: l
						} = d;
						var u;
						const m = i();
						let b, f, y = "";
						try {
							y = await e(P(n, a, s, o))
						} catch (O) {
							return p.c.captureException(O), void(O.message && e(Object(g.stripeApiError)(O.message)))
						}
						e(Object(g.stripeTokenPending)());
						const j = Object(h.y)(m);
						if (j || (b = await e(Object(g.validateAndCreateStripeToken)(t, r)), f = Object(h.v)(m), b)) try {
							const r = c()(),
								n = j || f ? b && f ? Object(v.h)(l(), r, y, b.id) : j ? Object(v.j)(l(), r, y, j) : null : Object(v.i)(l(), r, y, b.id),
								a = await n;
							if (!(null == a ? void 0 : a.ok)) return void e(x);
							const s = a.body.data.createEconPayment;
							if (null === (u = null == s ? void 0 : s.errors) || void 0 === u ? void 0 : u.length) return void e(Object(g.stripeApiError)(w(s.errors)));
							const {
								ok: o,
								payment: i,
								providerExecution: {
									paymentIntentClientSecret: d
								}
							} = s;
							if (o && i.status === v.a.ActionRequired) {
								const r = await t.confirmCardPayment(d),
									{
										error: n
									} = r;
								if (n) return ((e, t) => {
									var r, n;
									(null === (n = null === (r = e.payment_intent) || void 0 === r ? void 0 : r.last_payment_error) || void 0 === n ? void 0 : n.message) ? t(Object(g.stripeApiError)(e.payment_intent.last_payment_error.message)): e.message ? t(Object(g.stripeApiError)(e.message)) : t(x)
								})(n, e);
								let a;
								if (!(a = j ? await Object(v.e)(l(), c()(), i.id, j) : await Object(v.d)(l(), c()(), i.id, b.id, f)).ok) return void e(x);
								const s = a.body;
								if (!s.data.confirmEconPayment.ok || s.data.confirmEconPayment.payment.status !== v.a.Paid) return void e(x)
							} else if (o && i.status !== v.a.Paid) return void e(x);
							return {
								success: !0
							}
						} catch (O) {
							p.c.captureException(O), e(x)
						}
					}
				}, _ = e => {
					let {
						productOffer: t,
						pricePackage: r,
						productsCount: n,
						extraParams: a,
						overrideModalParams: s
					} = e;
					return async (e, o, d) => {
						let {
							gqlContext: l
						} = d;
						var m;
						let b = "";
						try {
							b = await e(P(t, r, n, a))
						} catch (j) {
							return p.c.captureException(j), j.message && e(Object(g.paypalApiError)(j.message)), null
						}
						const f = i.a.redditUrl,
							h = {
								_o: f,
								o: b,
								pt: t.type,
								...s
							};
						try {
							const t = Object(u.a)(`${f}/framedModal/paypal-finish`, {
									...h,
									s: !0
								}),
								r = Object(u.a)(`${f}/framedModal/paypal-finish`, h),
								n = c()(),
								a = await Object(v.g)(l(), n, b, t, r);
							if (a && a.ok) {
								const t = a.body.data.createEconPayment;
								if (null === (m = null == t ? void 0 : t.errors) || void 0 === m ? void 0 : m.length) return e(Object(g.paypalApiError)(w(t.errors))), null;
								const r = Object(y.k)(o());
								if (t.ok) {
									const {
										status: e
									} = t.payment;
									if (e === v.a.ActionRequired) {
										const e = t.providerExecution;
										if (e.orderApprovalUrl) return {
											paymentId: t.payment.id,
											url: e.orderApprovalUrl
										};
										if (e.billingAgreementToken && e.billingAgreementApprovalUrl) return {
											paymentId: t.payment.id,
											token: e.billingAgreementToken,
											url: e.billingAgreementApprovalUrl
										}
									}
									if ("PAID" === e && r) return {
										success: !0
									}
								}
							}
						} catch (j) {
							p.c.captureException(j)
						}
						return e(Object(g.paypalApiError)(C())), null
					}
				}, I = (e, t) => async (r, n, a) => {
					let {
						gqlContext: s
					} = a;
					var o;
					try {
						const n = c()(),
							a = await Object(v.c)(s(), n, e, t);
						if (a && a.ok) {
							const e = a.body.data.confirmEconPayment;
							if (null === (o = null == e ? void 0 : e.errors) || void 0 === o ? void 0 : o.length) return r(Object(g.paypalApiError)(w(e.errors))), !1;
							if (e.ok && "PAID" === e.payment.status) return !0
						}
					} catch (i) {
						p.c.captureException(i)
					}
					return r(Object(g.paypalApiError)(C())), !1
				}, N = () => async (e, t, r) => {
					let {
						gqlContext: a
					} = r;
					var o;
					e(Object(g.savedCardsPending)());
					try {
						const t = await Object(v.l)(a());
						if (t.error) throw e(Object(g.stripeApiError)(n.fbt._("Something went wrong getting saved cards", null, {
							hk: "3p1Q0C"
						}))), new Error(t.error.type);
						const r = t.body;
						(null === (o = r.errors) || void 0 === o ? void 0 : o.length) && e(Object(g.stripeApiError)(r.errors[0].message));
						const {
							savedStripeCards: c
						} = r.data.identity, i = c.map(e => s()({
							...e,
							cardId: e.id
						}, "id"));
						e(Object(g.savedCardsSuccess)(i)), i[0] && e(Object(g.selectSavedCard)(i[0].cardId))
					} catch (c) {
						p.c.captureException(c), e(Object(g.savedCardsSuccess)([]))
					}
				}, S = e => async (t, r, n) => {
					let {
						gqlContext: a
					} = n;
					t(Object(g.deleteSavedCard)(e));
					try {
						const t = await Object(v.k)(a(), e);
						if (t.error) throw new Error(t.error.type);
						const r = t.body,
							{
								errors: n
							} = r.data.deleteEconPaymentMethod;
						if (n && n.length) throw new Error(w(n))
					} catch (s) {
						p.c.captureException(s)
					}
				}, A = Object(m.a)(f.N), T = Object(m.a)(f.O), M = Object(m.a)(f.P), R = e => async (t, r) => {
					await t(A(e)), t(Object(l.f)({
						kind: b.b.Error,
						duration: l.a,
						text: e
					}))
				}, G = (e, t, r) => async (a, s, o) => {
					let {
						gqlContext: c
					} = o;
					a(T({
						subredditId: t,
						allocatedAt: r
					}));
					try {
						const s = await Object(v.b)(c(), e);
						if (s.ok) {
							const e = s.body,
								{
									errors: n
								} = e.data.cancelEconRecurringPayment;
							if (n && n.length) return void a(R(n[0].message));
							a(M({
								subredditId: t,
								allocatedAt: r
							}))
						} else a(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					} catch (i) {
						p.c.captureException(i), a(R(n.fbt._("Something went wrong", null, {
							hk: "4yuT5m"
						})))
					}
				}, B = Object(m.a)(f.R), L = e => async (t, r) => {
					t(B(e)), t(Object(j.k)(e.subredditId, {
						forceLoad: !0,
						fullData: !1
					})), t(Object(O.g)(d.a.ECON_POWERUPS_PURCHASE)), t(Object(O.h)(d.a.ECON_POWERUPS_SUCCESS))
				}, D = Object(m.a)(f.V), F = e => {
					let {
						user: t
					} = e;
					return async e => {
						await e(Object(j.m)(!0)), e(D({
							user: t
						}))
					}
				}, q = Object(m.a)(f.Z)
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return P
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "e", (function() {
				return k
			})), r.d(t, "b", (function() {
				return I
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "i", (function() {
				return A
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "g", (function() {
				return M
			})), r.d(t, "h", (function() {
				return R
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/formatApiError/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				g = r("./src/reddit/models/Gold/Award.ts"),
				h = r("./src/reddit/models/Gold/ProductOffer.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				O = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				v = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const C = Object(s.a)(v.u),
				w = Object(s.a)(v.c),
				P = e => async (t, r) => {
					t(C(e)), t(Object(l.h)(c.a.ECON_COIN_PURCHASE))
				}, x = () => async (e, t) => {
					e(w()), e(Object(l.g)(c.a.ECON_COIN_PURCHASE))
				}, E = Object(s.a)(v.y), k = e => {
					let {
						correlationId: t,
						packageId: r
					} = e;
					return async (e, n) => {
						const a = n();
						Object(j.e)(a, r) ? (e(E({
							correlationId: t,
							packageId: r
						})), e(Object(l.i)(c.a.GOLD_TARGETED_OFFER_MODAL))) : o.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${r}`)
					}
				}, _ = Object(s.a)(v.t), I = e => {
					let {
						correlationId: t,
						packageId: r
					} = e;
					return async (e, n) => {
						Object(j.c)(n(), r) ? (e(_({
							correlationId: t,
							packageId: r
						})), e(Object(l.i)(c.a.ECON_COIN_PACKAGE_OFFER))) : o.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${r}`)
					}
				}, N = (e, t, r) => async (a, s) => {
					await a(Object(d.c)());
					const o = s(),
						c = Object(j.p)(o, e);
					if (c) a(P({
						correlationId: r,
						packageId: c,
						thingId: t
					}));
					else {
						const e = Object(j.n)(o),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						a(Object(u.f)({
							kind: y.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, S = (e, t, r) => async (s, o, c) => {
					let {
						apiContext: d
					} = c;
					const l = o(),
						{
							coins: u,
							pennies: m
						} = r,
						f = Object(O.r)(l) || Object(b.d)(b.a.GoldPayment, !1);
					let g, y;
					s(Object(i.stripeTokenPending)());
					const j = Object(O.y)(l);
					if (j || (g = await s(Object(i.validateAndCreateStripeToken)(e, t)), y = Object(O.v)(l), g)) try {
						const e = await Object(p.d)({
							coins: u,
							context: d(),
							correlationId: f,
							offerContext: Object(h.d)(r, !1),
							pennies: m,
							rememberCard: y,
							savedCardId: j || void 0,
							token: g
						});
						if (e.error) {
							const t = Object(a.a)(e.error, e.status);
							return void s(Object(i.stripeApiError)(t))
						}
						return s(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (v) {
						const e = Object(a.a)(v);
						s(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						s(Object(i.stripeApiError)(e))
					}
				}, A = (e, t, s, o) => async (c, d, l) => {
					let {
						apiContext: u
					} = l;
					const m = d(),
						{
							coins: y,
							pennies: j
						} = s,
						v = Object(O.r)(m) || Object(b.d)(b.a.GoldPayment, !1);
					let C, w;
					c(Object(i.stripeTokenPending)());
					const P = Object(O.y)(m);
					if (P || (C = await c(Object(i.validateAndCreateStripeToken)(e, t)), w = Object(O.v)(m), C)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: d,
							selectedAward: l
						} = m.gild;
						if (!e || !l.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void c(Object(i.stripeApiError)(e))
						}
						const O = l.id,
							E = {
								gildType: O,
								isAnonymous: t,
								message: d
							},
							k = await Object(p.c)({
								coins: y,
								context: u(),
								correlationId: v,
								gildParams: E,
								isOldReddit: o,
								offerContext: Object(h.d)(s, !0),
								pennies: j,
								rememberCard: w,
								savedCardId: P || void 0,
								thingId: e,
								token: C
							});
						if (k.error) {
							const e = Object(a.a)(k.error, k.status);
							return void c(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(x()), c(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: a,
								coins: s,
								treatment_tags: o
							} = k.body;
							return c(t({
								awardKarmaReceived: n || 0,
								awardId: O,
								awardings: a && a.length ? Object(f.a)(a).map(e => ({
									award: Object(g.j)(e),
									total: e.count
								})) : [],
								coins: s,
								id: e,
								treatmentTags: o
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (E) {
						const e = Object(a.a)(E);
						c(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						c(Object(i.stripeApiError)(e))
					}
				}, T = e => async (t, r, n) => {
					let {
						apiContext: s
					} = n;
					const c = Object(b.c)(b.a.GoldPayment),
						{
							coins: d,
							pennies: l
						} = e;
					try {
						const e = await Object(m.a)({
							context: s(),
							coins: d,
							pennies: l,
							correlationId: c
						});
						if (e.error) {
							const r = Object(a.a)(e.error);
							return void t(Object(i.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (u) {
						o.c.captureException(u);
						const e = Object(a.a)(u);
						t(Object(i.paypalApiError)(e))
					}
				}, M = (e, t) => async (r, n, s) => {
					let {
						apiContext: c
					} = s;
					const d = n(),
						l = Object(O.r)(d) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: u,
							pennies: p
						} = t;
					try {
						const n = await Object(m.c)({
							context: c(),
							offerContext: Object(h.d)(t, !1),
							orderId: e,
							coins: u,
							pennies: p,
							correlationId: l
						});
						if (n.error) {
							const e = Object(a.a)(n.error);
							return void r(Object(i.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							r(Object(i.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (f) {
						o.c.captureException(f);
						const e = Object(a.a)(f);
						r(Object(i.paypalApiError)(e))
					}
				}, R = (e, t) => async (s, c, d) => {
					let {
						apiContext: l
					} = d;
					const u = c(),
						p = Object(O.r)(u) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: y,
							pennies: j
						} = t;
					try {
						const {
							gildModalThingId: o,
							isAnonymous: c,
							message: d,
							selectedAward: O
						} = u.gild;
						if (!o || !O) return void s(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const v = O.id,
							C = await Object(m.d)({
								context: l(),
								offerContext: Object(h.d)(t, !0),
								orderId: e,
								coins: y,
								pennies: j,
								thingId: o,
								awardId: v,
								message: d || "",
								isAnonymous: c,
								correlationId: p
							});
						if (C.error) {
							const e = Object(a.a)(C.error);
							s(Object(i.paypalApiError)(e))
						} else {
							s(x());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: a,
								treatment_tags: c
							} = C.body;
							s(Object(i.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							s(d({
								awardId: v,
								awardKarmaReceived: t || 0,
								awardings: Object(f.a)(e).map(e => ({
									award: Object(g.j)(e),
									total: e.count
								})),
								coins: n,
								id: o,
								subredditCoins: a,
								treatmentTags: c
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (v) {
						o.c.captureException(v);
						const e = Object(a.a)(v);
						s(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return i
			})), r.d(t, "paymentCompleted", (function() {
				return d
			})), r.d(t, "cardNameInput", (function() {
				return l
			})), r.d(t, "postalCodeInput", (function() {
				return u
			})), r.d(t, "cardNameEmpty", (function() {
				return m
			})), r.d(t, "cardNumberChange", (function() {
				return p
			})), r.d(t, "cardExpiryChange", (function() {
				return b
			})), r.d(t, "cardCvcChange", (function() {
				return f
			})), r.d(t, "stripeTokenPending", (function() {
				return g
			})), r.d(t, "stripeTokenError", (function() {
				return h
			})), r.d(t, "stripeApiError", (function() {
				return y
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return j
			})), r.d(t, "paypalApiError", (function() {
				return O
			})), r.d(t, "toggleRememberCard", (function() {
				return v
			})), r.d(t, "selectSavedCard", (function() {
				return C
			})), r.d(t, "deleteSavedCard", (function() {
				return w
			})), r.d(t, "savedCardsPending", (function() {
				return P
			})), r.d(t, "savedCardsSuccess", (function() {
				return x
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const i = Object(s.a)(c.F),
				d = Object(s.a)(c.A),
				l = Object(s.a)(c.b),
				u = Object(s.a)(c.C),
				m = Object(s.a)(c.a),
				p = Object(s.a)(c.K),
				b = Object(s.a)(c.J),
				f = Object(s.a)(c.I),
				g = Object(s.a)(c.M),
				h = Object(s.a)(c.L),
				y = Object(s.a)(c.H),
				j = (e, t) => async (r, s) => {
					const c = s(),
						i = Object(o.h)(c),
						d = Object(o.l)(c),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: p
					} = await e.createToken(l, {
						name: i,
						address_zip: d
					});
					if (i.trim()) {
						if (!p && u) return u;
						r(h(p || void 0))
					} else {
						const e = a.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(m({
							message: e
						}))
					}
				}, O = Object(s.a)(c.B), v = Object(s.a)(c.N), C = Object(s.a)(c.G), w = Object(s.a)(c.g), P = Object(s.a)(c.D), x = Object(s.a)(c.E)
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return y
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "d", (function() {
				return O
			})), r.d(t, "c", (function() {
				return v
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/formatApiError/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				i = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				d = r("./src/reddit/endpoints/gold/purchase.ts"),
				l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				u = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				m = r("./src/reddit/models/Gold/Award.ts"),
				p = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const f = Object(s.a)(b.v),
				g = Object(s.a)(b.d),
				h = Object(s.a)(b.w),
				y = (e, t, r) => async e => {
					e(h({
						thingId: t
					})), e(f({
						correlationId: r
					}))
				}, j = (e, t, s) => async (o, i, b) => {
					let {
						apiContext: f
					} = b;
					const h = i(),
						y = Object(l.c)(l.a.GoldPayment);
					let j, O;
					o(Object(c.stripeTokenPending)());
					const v = Object(p.y)(h);
					if (v || (j = await o(Object(c.validateAndCreateStripeToken)(e, t)), O = Object(p.v)(h), j)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: i,
							selectedAward: l
						} = h.gild;
						if (!e || !l.id) return void o(Object(c.stripeApiError)(n.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const p = l.id,
							b = l.pennyPrice;
						if (!b) return void o(Object(c.stripeApiError)(n.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const C = {
								gildType: p,
								isAnonymous: t,
								message: i
							},
							w = await Object(d.e)({
								context: f(),
								correlationId: y,
								gildParams: C,
								isOldReddit: s,
								pennies: b,
								rememberCard: O,
								savedCardId: v || void 0,
								thingId: e,
								token: j
							});
						if (w.error) {
							const e = Object(a.a)(w.error, w.status);
							return void o(Object(c.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await Promise.resolve().then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(g()), o(Object(c.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: n,
								awarder_karma_received: a,
								coins: s,
								treatment_tags: i
							} = w.body;
							return void o(t({
								awardKarmaReceived: a || 0,
								awardId: p,
								awardings: n && n.length ? Object(u.a)(n).map(e => ({
									award: Object(m.j)(e),
									total: e.count
								})) : [],
								coins: s,
								id: e,
								treatmentTags: i
							}))
						}
					} catch (C) {
						const e = Object(a.a)(C);
						o(Object(c.stripeApiError)(e))
					} else o(Object(c.stripeApiError)(n.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, O = (e, t, r) => async (n, s, d) => {
					let {
						apiContext: u
					} = d;
					const m = Object(l.c)(l.a.GoldPayment);
					try {
						const s = await Object(i.b)({
							context: u(),
							awardId: e,
							pennies: t,
							thingId: r,
							correlationId: m
						});
						if (s.error) {
							const e = Object(a.a)(s.error);
							return void n(Object(c.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = s.body;
							return e
						}
					} catch (p) {
						o.c.captureException(p);
						const e = Object(a.a)(p);
						n(Object(c.paypalApiError)(e))
					}
				}, v = e => async (t, s, d) => {
					let {
						apiContext: p
					} = d;
					const b = s(),
						f = Object(l.c)(l.a.GoldPayment);
					try {
						const {
							gildModalThingId: s,
							isAnonymous: o,
							message: d,
							selectedAward: l
						} = b.gild;
						if (!s || !l) return void t(Object(c.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const h = l.id,
							y = await Object(i.e)({
								awardId: h,
								context: p(),
								orderId: e,
								thingId: s,
								message: d || "",
								isAnonymous: o,
								correlationId: f
							});
						if (y.error) {
							const e = Object(a.a)(y.error);
							t(Object(c.paypalApiError)(e))
						} else {
							t(g());
							const {
								all_awardings: e,
								awarder_karma_received: n,
								coins: a,
								subreddit_coins: o,
								treatment_tags: i
							} = y.body;
							t(Object(c.paymentCompleted)({
								coins: a,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await Promise.resolve().then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(d({
								awardKarmaReceived: n || 0,
								awardId: h,
								awardings: Object(u.a)(e).map(e => ({
									award: Object(m.j)(e),
									total: e.count
								})),
								coins: a,
								id: s,
								subredditCoins: o,
								treatmentTags: i
							}))
						}
					} catch (h) {
						o.c.captureException(h);
						const e = Object(a.a)(h);
						t(Object(c.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return v
			})), r.d(t, "a", (function() {
				return w
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/env/index.ts"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				c = r("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/actions/post.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				m = r("./src/reddit/actions/economics/powerups/helpers.ts"),
				p = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var b = r("./src/reddit/selectors/gold/productOffers.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(s.a)(f.m);
			const g = Object(s.a)(f.o),
				h = Object(s.a)(f.n),
				y = Object(s.a)(f.i),
				j = Object(s.a)(f.j),
				O = e => async (t, r, s) => {
					let {
						gqlContext: c
					} = s;
					const i = r(),
						d = Object(b.a)(i);
					if ((null == e ? void 0 : e.forceLoad) || !d) {
						t(g());
						try {
							const e = await (async e => {
								const t = await Object(u.a)(e, {
									...p
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, r = Object(m.a)(e);
									throw new Error(r || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(c());
							t(y(e.data.coinpacks.offers[0])), t(j(e.data.premium.offers[0]))
						} catch (l) {
							Object(a.b)() || console.error(l), o.c.captureException(l);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(h(e))
						}
					}
				}, v = () => async e => e(O()), C = Object(s.a)(f.h), w = () => async (e, t, r) => {
					let {
						gqlContext: s
					} = r;
					var u, m;
					try {
						const t = await Object(c.a)(s());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (u = r.errors) || void 0 === u ? void 0 : u.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (m = r.awards) || void 0 === m ? void 0 : m.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(C({
								awards: r.awards
							})), e(Object(l.B)())
						}
					} catch (p) {
						Object(a.b)() || console.error(p), e(Object(i.f)({
							kind: d.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), o.c.captureException(p)
					}
				}
		},
		"./src/reddit/components/CheckoutForm/index.m.less": function(e, t, r) {
			e.exports = {
				formCellWide: "_3WoE3ObhsRzGd3NqoVTQ6D",
				formCell: "_1JGAet5jPDcpg7Tru23HMo",
				cardInput: "_1anVEbF9dn-ObJGVmmlFwL",
				cardInputError: "cNiLkxu8bhSFHcvFVbfAM",
				nameOnCard: "yS2Q83Vi28PL7t1XJExTA",
				errorMessage: "oGQBXeEv9yu4mXmkfKI4Y",
				elementPlaceholder: "_1wqbqqyQ0kPt-0QYCJqWdf"
			}
		},
		"./src/reddit/components/CoinBalance/index.m.less": function(e, t, r) {
			e.exports = {
				coinBalance: "_1B-dVN_8RcEpQbDNGHy3Ds"
			}
		},
		"./src/reddit/components/CoinBalance/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				s = r.n(a),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/helpers/createEmojiText/index.tsx"),
				i = r("./src/reddit/icons/fonts/Coin/index.tsx"),
				d = r("./src/reddit/components/CoinBalance/index.m.less"),
				l = r.n(d);
			t.a = e => s.a.createElement("div", {
				className: Object(o.a)(l.a.coinBalance, e.className),
				"data-redditstyle": !0
			}, Object(c.a)(n.fbt._("Coin balance:: {Coin icon placeholder}{coinBalance}", [n.fbt._param("Coin icon placeholder", ":coin:"), n.fbt._param("coinBalance", e.coinBalance.toLocaleString())], {
				hk: "2x0upn"
			}), {
				":coin:": s.a.createElement(i.a, null)
			}), " ", s.a.createElement("a", {
				href: "/coins",
				onClick: e.onWhatAreCoinsLinkClick,
				target: "_blank"
			}, n.fbt._("What are Coins?", null, {
				hk: "3fC6PF"
			})))
		},
		"./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/react/index.js"),
				s = r.n(a),
				o = r("./src/config.ts"),
				c = r("./src/lib/loadRedditAdsPixel.ts"),
				i = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx"),
				d = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = r("./src/reddit/components/TrackingHelper/index.tsx"),
				u = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				m = r("./src/reddit/icons/fonts/Coin/index.tsx"),
				p = r("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				b = r.n(p);
			class f extends s.a.PureComponent {
				componentDidMount() {
					const {
						gildThingId: e,
						sendEvent: t
					} = this.props;
					t(Object(u.j)(e)), Object(c.b)()
				}
				render() {
					const e = this.props,
						t = e.isGild && n.fbt._("The transaction is processing and we will let you know when it's done.", null, {
							hk: "JMSWS"
						});
					return s.a.createElement(s.a.Fragment, null, s.a.createElement("div", {
						className: b.a.paymentCompleteHeader,
						style: {
							backgroundImage: `url("${o.a.assetPath}/img/gold/coins-hero.jpg")`
						}
					}, s.a.createElement(m.a, {
						className: b.a.coinIcon
					}), s.a.createElement("div", {
						className: b.a.paymentCompleteTitleMain
					}, e.isGild ? n.fbt._("Thanks for purchasing an Award, {username}", [n.fbt._param("username", e.userName)], {
						hk: "1VcYkx"
					}) : n.fbt._("Thanks for purchasing Coins, {username}", [n.fbt._param("username", e.userName)], {
						hk: "3m40W1"
					})), s.a.createElement("div", {
						className: b.a.paymentCompleteTitleDescription
					}, t), s.a.createElement("button", {
						className: b.a.closeButton,
						onClick: e.onCloseClick
					}, s.a.createElement(d.b, {
						className: b.a.closeIcon,
						"data-redditstyle": !0
					}))), s.a.createElement(i.a, {
						onCloseClick: e.onCloseClick
					}))
				}
			}
			t.a = Object(l.c)(f)
		},
		"./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return z
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				c = r("./src/reddit/hooks/useStripePromise.ts"),
				i = r("./src/lib/constants/index.ts"),
				d = r("./src/lib/currency/currencies.ts"),
				l = r("./src/lib/localizeCurrency/index.ts"),
				u = r("./node_modules/react-redux/es/index.js"),
				m = r("./src/reddit/components/Econ/ProductOfferPurchaseButton/Stripe.tsx"),
				p = r("./src/reddit/selectors/experiments/econ/index.ts"),
				b = r("./src/lib/classNames/index.ts"),
				f = r("./src/reddit/hooks/useTracking.ts"),
				g = r("./src/reddit/actions/gold/gild.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				y = r("./src/reddit/components/CoinBalance/index.tsx"),
				j = r("./src/reddit/components/Econ/ProductOfferPurchaseButton/Paypal.tsx"),
				O = r("./src/config.ts"),
				v = r("./node_modules/react-dom/index.js"),
				C = r.n(v),
				w = r("./node_modules/reselect/es/index.js"),
				P = r("./src/higherOrderComponents/makeAsync.tsx"),
				x = r("./src/reddit/helpers/loadThirdPartyScript.ts"),
				E = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				k = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				_ = r("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts");
			const I = Object(w.c)({
				isGild: e => !!Object(E.s)(e)
			});
			class N extends o.a.Component {
				constructor() {
					super(...arguments), this.onPayment = () => this.props.createPayment(), this.onAuthorize = e => {
						const {
							orderID: t
						} = e, {
							isGild: r
						} = this.props;
						return this.props.executePayment(r, t)
					}
				}
				render() {
					const {
						className: e
					} = this.props, t = paypalCheckout.Button.driver("react", {
						React: o.a,
						ReactDOM: C.a
					}), r = {
						sandbox: O.a.paypal.apiKey,
						production: O.a.paypal.apiKey
					};
					return o.a.createElement("div", {
						className: e
					}, o.a.createElement(t, {
						env: O.a.paypal.env,
						client: r,
						style: {
							size: "responsive",
							color: "blue",
							shape: "pill",
							label: "paypal",
							tagline: !1
						},
						payment: this.onPayment,
						commit: !0,
						onAuthorize: this.onAuthorize
					}))
				}
			}
			const S = Object(u.b)(I, (e, t) => ({
				createPayment: () => "coinPackage" in t ? e(Object(k.f)(t.coinPackage)) : "awardId" in t ? e(Object(_.d)(t.awardId, t.pennies, t.thingId)) : void 0,
				executePayment: (r, n) => {
					if ("coinPackage" in t) {
						if (r) return void e(Object(k.h)(n, t.coinPackage));
						e(Object(k.g)(n, t.coinPackage))
					} else "awardId" in t && e(Object(_.c)(n))
				}
			}))(N);
			var A = Object(P.a)({
					getComponent: () => Object(x.c)().then(() => S),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				T = r("./src/reddit/controls/Button/index.tsx"),
				M = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				R = r("./src/reddit/selectors/gold/productOffers.ts"),
				G = r("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				B = r.n(G);
			const {
				fbt: L
			} = r("./node_modules/fbt/lib/FbtPublic.js"), D = e => {
				let {
					award: t,
					coinBalance: r,
					gildThingId: n,
					purchasePackage: a,
					savedCardsPending: s,
					selectedPayment: c,
					stripeTokenPending: d,
					onCompletePurchaseClick: l,
					stripe: O,
					stripeElements: v,
					isIframed: C
				} = e;
				const w = Object(f.a)(),
					P = Object(u.d)(),
					x = Object(u.e)(p.g),
					E = Object(u.e)(R.a),
					k = !!n;
				if (k && !x) {
					const e = () => {
						O && v && (w(Object(M.c)(n)), l(O, v, a))
					};
					return o.a.createElement("div", {
						className: B.a.purchaseSelectPaymentFooter
					}, o.a.createElement(y.a, {
						className: B.a.balance,
						coinBalance: r
					}), c === i.Hb && ((null == t ? void 0 : t.pennyPrice) && n ? o.a.createElement(A, {
						awardId: t.id,
						className: Object(b.a)(B.a.purchaseButton, B.a.paypalCheckoutButton),
						pennies: t.pennyPrice,
						thingId: n
					}) : a && o.a.createElement(A, {
						className: Object(b.a)(B.a.purchaseButton, B.a.paypalCheckoutButton),
						coinPackage: a
					})), c === i.Gb && o.a.createElement(T.l, {
						className: B.a.purchaseButton,
						"data-redditstyle": !0,
						disabled: d || s,
						onClick: e
					}, L._("Complete purchase", null, {
						hk: "3d1QJR"
					})))
				}
				const _ = null == E ? void 0 : E.pricePackages.find(e => e.id === (null == a ? void 0 : a.mobileId));
				if (!E || !_ || !a) return null;
				const I = c === i.Hb,
					N = c === i.Gb,
					S = I ? j.a : m.a;
				return o.a.createElement("div", {
					className: B.a.purchaseSelectPaymentFooter
				}, o.a.createElement(y.a, {
					className: B.a.balance,
					coinBalance: r
				}), o.a.createElement(S, {
					className: B.a.purchaseButton,
					productOffer: E,
					pricePackage: _,
					productsCount: _.quantity,
					onButtonClick: () => {
						N && w(Object(M.c)(n)), I && w(Object(M.d)(n))
					},
					onPaymentSuccess: () => {
						P(Object(h.paymentCompleted)({
							coinsDiff: a.coins,
							confirmed: !1
						})), k && x && P(Object(g.gildGqlRequested)(n, {
							isOldReddit: C
						}))
					}
				}))
			};
			var F = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				q = r("./src/reddit/hooks/useLocale.ts"),
				Q = r("./src/reddit/icons/fonts/Coin/index.tsx");
			const {
				fbt: U
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var H = e => {
				var t;
				const r = Object(q.a)();
				return o.a.createElement("div", {
					className: B.a.purchaseHeader,
					style: {
						backgroundImage: `url("${O.a.assetPath}/img/gold/coins-hero.jpg")`
					}
				}, o.a.createElement(Q.a, {
					className: B.a.coinIcon
				}), o.a.createElement("div", {
					className: B.a.titleMain
				}, U._("Buy {amount}!", [U._param("amount", Object(l.b)(e.purchasePackage.coins, {
					locale: r,
					type: d.b.Reddit,
					currency: d.a
				}))], {
					hk: "3VNw69"
				})), o.a.createElement("div", {
					className: B.a.titleDescription
				}, U._("You're purchasing Coins for yourself, {userName}!", [U._param("userName", e.userName)], {
					hk: "ZGCBt"
				})), o.a.createElement("img", {
					className: B.a.goldPackage,
					src: null === (t = e.purchasePackage.images.purchaseSuccess["3x"]) || void 0 === t ? void 0 : t.url
				}), o.a.createElement("button", {
					className: B.a.closeButton,
					onClick: e.onCloseClick
				}, o.a.createElement(F.b, {
					className: B.a.closeIcon,
					"data-redditstyle": !0
				})))
			};
			var V = e => {
					const t = Object(q.a)(),
						r = [];
					if (e.purchasePackage && r.push(a.fbt._("{coinCount} will automatically be spent on this {awardName} Award.", [a.fbt._param("coinCount", Object(l.b)(e.award.coinPrice, {
							locale: t,
							type: d.b.Reddit,
							currency: d.a
						})), a.fbt._param("awardName", e.award.name)], {
							hk: "2ImQA8"
						})), e.award.pennyDonate && r.push(a.fbt._("{dollarsDonate} will be donated.", [a.fbt._param("dollarsDonate", Object(l.b)(e.award.pennyDonate, {
							locale: t
						}))], {
							hk: "3jOvCI"
						})), e.award.giverCoinReward) {
						r.push(a.fbt._("As a thank you, you will receive {giverCoinReward}.", [a.fbt._param("giverCoinReward", Object(l.b)(e.award.giverCoinReward, {
							locale: t,
							type: d.b.Reddit,
							currency: d.a
						}))], {
							hk: "20S8v2"
						}));
						const n = e.coinBalance + (e.purchasePackage ? e.purchasePackage.coins : 0) + e.award.giverCoinReward - (e.award.pennyPrice ? 0 : e.award.coinPrice);
						n > 0 && n !== e.coinBalance && a.fbt._("You’ll have {remainingCoins} remaining.", [a.fbt._param("remainingCoins", Object(l.b)(n, {
							locale: t,
							type: d.b.Reddit,
							currency: d.a
						}))], {
							hk: "DrEWG"
						})
					}
					return o.a.createElement("div", {
						className: B.a.purchaseGildHeader
					}, o.a.createElement("div", {
						className: B.a.awardTitle
					}, a.fbt._("Give the {awardName} Award", [a.fbt._param("awardName", e.award.name)], {
						hk: "28iR3j"
					})), o.a.createElement("div", {
						className: B.a.awardTitleDescription
					}, r.join(" ")), o.a.createElement("img", {
						className: B.a.awardIcon,
						src: e.award.icon.url
					}), o.a.createElement("button", {
						className: B.a.closeButton,
						onClick: e.onCloseClick
					}, o.a.createElement(F.b, {
						className: Object(b.a)(B.a.closeIcon, B.a.awardPurchase),
						"data-redditstyle": !0
					})))
				},
				W = r("./src/reddit/components/PaymentMethodSelector/index.tsx"),
				K = r("./src/reddit/components/StripePaymentForm/index.tsx"),
				J = r("./src/reddit/helpers/createEmojiText/index.tsx");
			const z = e => {
				const t = Object(q.a)(),
					r = Object(c.a)(),
					s = e.purchasePackage ? e.purchasePackage.pennies : e.selectedAward.pennyPrice || 0;
				return o.a.createElement(n.Elements, {
					stripe: r
				}, o.a.createElement(o.a.Fragment, null, e.gildThingId ? o.a.createElement(V, {
					coinBalance: e.coinBalance,
					award: e.selectedAward,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}) : e.purchasePackage && o.a.createElement(H, {
					coinBalance: e.coinBalance,
					purchasePackage: e.purchasePackage,
					userName: e.userName,
					onCloseClick: e.onCloseModal
				}), o.a.createElement("div", {
					className: B.a.purchaseBody
				}, o.a.createElement(W.a, {
					className: B.a.selectPayment,
					gildThingId: e.gildThingId,
					nightmode: e.nightmode,
					selectedPayment: e.selectedPayment,
					onPaymentSelected: e.onPaymentSelected
				}), e.selectedPayment === i.Gb && o.a.createElement(n.ElementsConsumer, null, t => {
					let {
						stripe: r
					} = t;
					return o.a.createElement(K.a, {
						nightmode: e.nightmode,
						stripe: r
					})
				}), o.a.createElement("div", {
					className: B.a.checkoutFooter
				}, o.a.createElement("div", {
					className: B.a.purchaseTotal
				}, a.fbt._("Total: {totalAmount}", [a.fbt._param("totalAmount", Object(l.b)(s, {
					locale: t
				}))], {
					hk: "3dx6W8"
				}))), e.selectedPayment === i.Hb && e.paypalErrorMessage && o.a.createElement("div", {
					className: B.a.errorMessage
				}, e.paypalErrorMessage), e.selectedPayment === i.Gb && e.stripeErrorMessage && o.a.createElement("div", {
					className: B.a.errorMessage
				}, e.stripeErrorMessage), o.a.createElement("div", {
					className: B.a.agreementLink
				}, e.purchasePackage && (e => {
					if (!e.gildThingId || !e.purchasePackage) return null;
					return e.coinBalance + e.purchasePackage.coins - e.selectedAward.coinPrice > 0 ? o.a.createElement(o.a.Fragment, null, a.fbt._("The minimum Coins purchase is {coins}.", [a.fbt._param("coins", Object(l.b)(e.purchasePackage.coins, {
						locale: e.locale,
						type: d.b.Reddit,
						currency: d.a
					}))], {
						hk: "1y9FMB"
					}), o.a.createElement("br", null)) : null
				})({
					...e,
					locale: t
				}), Object(J.a)(a.fbt._("By purchasing Coins and Awards, you agree to the :agreement:.", null, {
					hk: "1eCqza"
				}), {
					":agreement:": o.a.createElement("a", {
						href: "https://www.redditinc.com/policies/user-agreement",
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.fbt._("Reddit User Agreement", null, {
						hk: "11z9fY"
					}))
				}))), o.a.createElement(n.ElementsConsumer, null, t => {
					let {
						stripe: r,
						elements: n
					} = t;
					return o.a.createElement(D, {
						award: e.selectedAward,
						coinBalance: e.coinBalance,
						gildThingId: e.gildThingId,
						onCompletePurchaseClick: e.onCompletePurchaseClick,
						purchasePackage: e.purchasePackage,
						savedCardsPending: e.savedCardsPending,
						selectedPayment: e.selectedPayment,
						stripeTokenPending: e.stripeTokenPending,
						stripe: r,
						stripeElements: n,
						isIframed: e.isIframed
					})
				})))
			}
		},
		"./src/reddit/components/CoinPurchaseModal/index.m.less": function(e, t, r) {
			e.exports = {
				coinPurchaseModal: "_3PdRn_CekW51ny0uOVaHCK",
				purchaseHeader: "g2a3Zv8q9QUPKkvmhD9dL",
				purchaseGildHeader: "QMHZeOFhvSdgNkN2CTp18",
				coinIcon: "_3alReP5WKjkboxwGTN8Lpb",
				titleMain: "_3jPcOJNUfeN7OdCWA1d5VZ",
				titleDescription: "_1Q6p4vuIwLOxdw0XbHUT8w",
				goldPackage: "_1Zs4anwKjSFfYdqzSlkAcM",
				awardTitle: "_1Xjj9WldJRB-1ed1DXvre4",
				awardTitleDescription: "_2vpRJS-JeaGdKGeNQ2Ol8V",
				awardIcon: "_2zDbtSCEwDNAL2vdRkM5a_",
				closeButton: "_19tq6XZNubN99tY6SeeVQS",
				closeIcon: "_39qPvGtn6v2srEyecX-Q4y",
				awardPurchase: "whOANGCvUvMZjOdtnV1bZ",
				purchaseBody: "_3EtBcIxrPxM_DvmbfXFyCX",
				loaderContainer: "_2uPzorlzh0nEEymC1BvQBX",
				selectPayment: "_1kvmUEmQHiHPMWKNupYHMc",
				checkoutFooter: "HJGClx25Yjtzsp_aYfn0t",
				purchaseTotal: "_1Wq99elhkrt-_gxygdKIRE",
				agreementLink: "_4bWCoUTra_tfj3pkGR8fX",
				purchaseSelectPaymentFooter: "PDhzgUep2V87LcZ5msw2j",
				balance: "_3Yby__H8ckQTVIBMfVRI9L",
				purchaseButton: "_1C6JQFckaXQ2JzWIgJKnwA",
				paypalCheckoutButton: "_1Kbe0XzWlb6SJwe3jCy1R3",
				paymentCompleteHeader: "_3Pz3ZE0Flyeud2EZ_rhxs",
				paymentCompleteTitleMain: "OTAmbKrqsrvoZxHWtSAXO",
				paymentCompleteTitleDescription: "_3vjo7IoOcQ9Hv1YmhvnodL",
				errorMessage: "_2ZSesrmixZQhOH6L7Yce5m"
			}
		},
		"./src/reddit/components/CoinPurchaseModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/reddit/actions/gold/modals.ts"),
				d = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				l = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				u = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				p = r("./src/reddit/actions/toaster.ts"),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				f = r("./src/reddit/constants/colors.ts"),
				g = r("./src/reddit/constants/zIndex.ts"),
				h = r("./src/reddit/helpers/correlationIdTracker.ts"),
				y = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/models/User/index.ts"),
				v = r("./src/reddit/selectors/gild.ts"),
				C = r("./src/reddit/selectors/gold/giveAwards.ts"),
				w = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				x = r("./src/reddit/selectors/platform.ts"),
				E = r("./src/reddit/selectors/user.ts"),
				k = r("./src/lib/classNames/index.ts"),
				_ = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				I = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				N = r("./src/reddit/components/CoinPurchaseModal/index.m.less"),
				S = r.n(N);
			const {
				fbt: A
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var T = e => {
					const {
						award: t,
						onClickClose: r
					} = e;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: S.a.purchaseGildHeader
					}, a.a.createElement("div", {
						className: S.a.awardTitle
					}, A._("Give the {award name} Award", [A._param("award name", t.name)], {
						hk: "1nWqWe"
					})), a.a.createElement("img", {
						className: S.a.awardIcon,
						src: t.icon.url
					}), a.a.createElement("button", {
						className: S.a.closeButton,
						onClick: r
					}, a.a.createElement(_.b, {
						className: Object(k.a)(S.a.closeIcon, S.a.awardPurchase),
						"data-redditstyle": !0
					}))), a.a.createElement("div", {
						className: Object(k.a)(S.a.purchaseBody, S.a.loaderContainer)
					}, a.a.createElement(I.a, {
						sizePx: 100
					})))
				},
				M = r("./src/reddit/components/CoinPurchaseModal/PaymentCompletePage.tsx"),
				R = r("./src/reddit/components/CoinPurchaseModal/SelectPaymentPage.tsx");

			function G() {
				return (G = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const B = Object(o.c)({
					activePage: P.q,
					allowNavigationCallback: e => {
						const t = Object(x.a)(e);
						return null === t ? void 0 : t
					},
					coinBalance: E.e,
					coinPackages: w.d,
					correlationId: e => Object(P.r)(e) || Object(h.d)(h.a.GoldPayment, !1),
					dealCoinPackages: w.f,
					gildThingId: P.s,
					isIframed: v.g,
					nightmode: E.db,
					savedCardsPending: P.w,
					selectedAward: C.b,
					selectedPayment: P.c,
					stripeErrorMessage: P.j,
					stripeTokenPending: P.m,
					paypalErrorMessage: P.d,
					purchaseCatalogError: w.n,
					purchaseCatalogPending: w.o,
					purchasePackageId: P.t,
					recommendedPackages: w.r,
					userName: e => {
						const t = Object(E.k)(e);
						return `u/${Object(O.e)(t)}`
					}
				}),
				L = Object(s.b)(B, (e, t) => ({
					closeModal: () => {
						e(Object(l.a)()), e(Object(i.a)())
					},
					loadSavedCards: () => e(Object(d.e)()),
					onFailedToLoadCatalog: t => {
						const r = {
							kind: j.b.Error,
							text: t
						};
						return e(Object(p.f)(r))
					},
					onPaymentSelected: t => e(Object(u.selectPaymentMethod)(t)),
					requestPurchaseCatalog: t => e(Object(m.b)({
						correlationId: t
					})),
					dispatchCompletePurchase: (t, r, n, a, s) => {
						e(a ? Object(l.i)(t, r, n, s) : Object(l.j)(t, r, n))
					}
				}), (e, t, r) => ({
					...e,
					...t,
					...r,
					onCompletePurchaseClick: (r, n, a) => t.dispatchCompletePurchase(r, n, a, !!e.gildThingId, e.isIframed)
				}));
			class D extends a.a.Component {
				constructor(e) {
					super(e), this.handleEscapeKey = e => {
						const {
							onTryCloseModal: t
						} = this.props;
						if (27 === e.keyCode) return t()
					};
					const {
						coinPackages: t,
						correlationId: r,
						loadSavedCards: n,
						purchaseCatalogPending: a,
						requestPurchaseCatalog: s
					} = this.props;
					t.length || a || s(r), n()
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						gildThingId: e,
						sendEvent: t
					} = this.props;
					Object(h.d)(h.a.GoldPayment, !1), t(Object(y.i)(e))
				}
				componentDidUpdate(e) {
					if (this.props.stripeErrorMessage && !e.stripeErrorMessage) {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(y.g)(e))
					}
				}
				render() {
					const {
						activePage: e,
						coinBalance: t,
						coinPackages: r,
						dealCoinPackages: n,
						gildThingId: s,
						nightmode: o,
						onCompletePurchaseClick: c,
						onFailedToLoadCatalog: i,
						onPaymentSelected: d,
						onTryCloseModal: l,
						paypalErrorMessage: u,
						purchaseCatalogError: m,
						purchaseCatalogPending: p,
						purchasePackageId: b,
						recommendedPackages: f,
						savedCardsPending: g,
						selectedAward: h,
						selectedPayment: y,
						stripeErrorMessage: j,
						stripeTokenPending: O,
						userName: v,
						isIframed: C
					} = this.props;
					if (m) return i(m), l(), null;
					const w = !!s,
						P = [...r, ...n, ...f].filter(e => e.mobileId === b)[0];
					return "paymentCompleted" === e ? a.a.createElement("div", null, a.a.createElement(M.a, {
						isGild: w,
						onCloseClick: l,
						userName: v
					})) : p || !P ? a.a.createElement("div", null, a.a.createElement(T, {
						award: h,
						onClickClose: l
					})) : a.a.createElement("div", null, "selectPayment" === e && a.a.createElement(R.a, {
						coinBalance: t,
						gildThingId: s,
						nightmode: o,
						onCloseModal: l,
						onCompletePurchaseClick: c,
						onPaymentSelected: d,
						paypalErrorMessage: u,
						purchasePackage: P,
						savedCardsPending: g,
						selectedAward: h,
						selectedPayment: y,
						stripeErrorMessage: j,
						stripeTokenPending: O,
						userName: v,
						isIframed: C
					}))
				}
			}
			const F = Object(c.a)(D);
			t.default = L(Object(b.c)(class extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.onTryCloseModal = () => {
						const {
							gildThingId: e,
							sendEvent: t
						} = this.props;
						t(Object(y.b)(e)), this.onCloseModal()
					}, this.onCloseModal = () => {
						this.props.closeModal(), this.props.allowNavigationCallback && this.props.allowNavigationCallback(!0)
					}
				}
				render() {
					const e = {
						backgroundColor: f.a.overlayReportFlow,
						...this.props.isIframed ? {
							zIndex: g.a,
							paddingTop: 12,
							paddingBottom: 12
						} : {}
					};
					return a.a.createElement(F, G({}, this.props, {
						className: S.a.coinPurchaseModal,
						onCloseModal: this.onCloseModal,
						onOverlayClick: this.onTryCloseModal,
						onTryCloseModal: this.onTryCloseModal,
						overlayCustomStyles: e,
						withOverlay: !0
					}))
				}
			}))
		},
		"./src/reddit/components/Econ/ProductOfferPurchaseButton/Paypal.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return l
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				o = r("./src/reddit/controls/Button/index.tsx");
			var c = e => {
					let {
						paypalUrl: t,
						finishPaymentCallback: r
					} = e, a = window;
					const s = Object(n.useCallback)(e => {
						const t = o(e);
						"paypal-finish.success.framedmodal" === (null == t ? void 0 : t.type) ? (r(), null == a || a.close()) : "paypal-finish.cancel.framedmodal" === (null == t ? void 0 : t.type) && (null == a || a.close())
					}, [r, a]);
					if (Object(n.useEffect)(() => (window.addEventListener("message", s, !1), () => window.removeEventListener("message", s)), [s]), t) {
						const e = 580,
							r = 740,
							n = Math.max(window.screenX + Math.round((window.outerWidth - e) / 2), 0),
							s = Math.max(window.screenY + Math.round((window.outerHeight - r) / 2), 0);
						a = window.open(`${t}&rnd=${Math.random()}`, "RedditPaypalPayment", `height=${r},width=${e},top=${s},left=${n},modal=yes,alwaysRaised=yes`)
					}
					const o = e => {
						try {
							return "string" == typeof e.data ? JSON.parse(e.data) : e.data
						} catch (t) {
							return
						}
					}
				},
				i = r("./src/reddit/hooks/useThunkDispatch.ts");
			const {
				fbt: d
			} = r("./node_modules/fbt/lib/FbtPublic.js"), l = e => {
				let {
					className: t,
					productsCount: r,
					productOffer: l,
					pricePackage: u,
					extraParams: m,
					onPaymentSuccess: p,
					onButtonClick: b
				} = e;
				const f = Object(i.a)(),
					[g, h] = Object(n.useState)(!1),
					[y, j] = Object(n.useState)(""),
					O = Object(n.useCallback)(() => {
						p()
					}, [p]);
				c({
					paypalUrl: y,
					finishPaymentCallback: O
				});
				return a.a.createElement(o.t, {
					onClick: async () => {
						if (!l) return;
						null == b || b(), h(!0);
						const e = await f(Object(s.h)({
							productOffer: l,
							pricePackage: u,
							productsCount: r,
							extraParams: m || {}
						}));
						e && (Object(s.d)(e) ? e.success && p() : j(e.url)), h(!1)
					},
					className: t,
					disabled: g
				}, d._("Continue to PayPal", null, {
					hk: "1T4BEy"
				}))
			}
		},
		"./src/reddit/components/Econ/ProductOfferPurchaseButton/Stripe.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return m
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				a = r("./node_modules/react/index.js"),
				s = r.n(a),
				o = r("./node_modules/react-redux/es/index.js"),
				c = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				i = r("./src/reddit/controls/Button/index.tsx"),
				d = r("./src/reddit/hooks/useThunkDispatch.ts"),
				l = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const {
				fbt: u
			} = r("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				let {
					className: t,
					productOffer: r,
					pricePackage: a,
					productsCount: m,
					extraParams: p,
					onPaymentSuccess: b,
					onButtonClick: f
				} = e;
				const g = Object(d.a)(),
					h = Object(n.useStripe)(),
					y = Object(n.useElements)(),
					j = Object(o.e)(l.w),
					O = Object(o.e)(l.m) || j;
				return s.a.createElement(i.t, {
					onClick: async () => {
						if (!h || !y || !r) return;
						null == f || f();
						const e = await g(Object(c.k)({
							stripe: h,
							stripeElements: y,
							productOffer: r,
							pricePackage: a,
							productsCount: m,
							extraParams: p || {}
						}));
						Object(c.d)(e) && e.success && b()
					},
					className: t,
					disabled: O || !h
				}, u._("Complete purchase", null, {
					hk: "KaR26"
				}))
			}
		},
		"./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less": function(e, t, r) {
			e.exports = {
				karmaLink: "_33-F8KNeBDS4RS9mUMQdxH"
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less": function(e, t, r) {
			e.exports = {
				purchaseFooter: "_2siiafYfV9NgkupSIDgaht",
				purchaseButton: "_18yTyMH2TYOdGSb9UumZq-"
			}
		},
		"./src/reddit/components/Gold/PaymentCompletePageFooter/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/reddit/controls/Button/index.tsx"),
				o = r("./src/reddit/components/Gold/PaymentCompletePageFooter/index.m.less"),
				c = r.n(o);
			const {
				fbt: i
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					buttonText: t,
					onCloseClick: r
				} = e;
				return a.a.createElement("div", {
					className: c.a.purchaseFooter
				}, a.a.createElement(s.l, {
					className: c.a.purchaseButton,
					"data-redditstyle": !0,
					onClick: r
				}, t || i._("Done", null, {
					hk: "3s1bT9"
				})))
			}
		},
		"./src/reddit/components/PaymentMethodSelector/index.m.less": function(e, t, r) {
			e.exports = {
				paymentOption: "cc9iRBOTxZHHCpcEduRmM",
				paymentOptionContent: "_1EqrH-JzLp3XTA4g36WIrt",
				isNightMode: "_1BbnbPaXpwTwmI3m0OOyzJ",
				paymentMethodIcon: "_3h70jT0m-MFJMB5LtPpDF5"
			}
		},
		"./src/reddit/components/PaymentMethodSelector/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./src/config.ts"),
				a = r("./node_modules/react/index.js"),
				s = r.n(a),
				o = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/components/TrackingHelper/index.tsx"),
				i = r("./src/reddit/helpers/trackers/goldPayment.ts"),
				d = r("./src/reddit/components/PaymentMethodSelector/index.m.less"),
				l = r.n(d);
			const u = e => s.a.createElement("label", {
				className: Object(o.a)(e.className, l.a.paymentOption)
			}, s.a.createElement("input", {
				type: "radio",
				id: e.value,
				name: "payment-option",
				value: e.value,
				checked: e.selectedValue === e.value,
				onChange: e.onChange
			}), s.a.createElement("div", {
				className: Object(o.a)(l.a.paymentOptionContent, {
					[l.a.isNightMode]: e.nightmode
				})
			}, e.children));
			class m extends s.a.Component {
				constructor() {
					super(...arguments), this.onPaymentSelected = e => {
						const t = e.target.value,
							{
								gildThingId: r,
								onPaymentSelected: n,
								sendEvent: a
							} = this.props;
						switch (t) {
							case "creditCard":
								a(Object(i.e)(r));
								break;
							case "paypal":
								a(Object(i.f)(r))
						}
						return n(t)
					}
				}
				render() {
					const {
						className: e,
						nightmode: t,
						selectedPayment: r
					} = this.props;
					return s.a.createElement("form", {
						className: e
					}, s.a.createElement("fieldset", null, s.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "paypal"
					}, s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/paypal.png)`
						}
					})), s.a.createElement(u, {
						nightmode: t,
						selectedValue: r,
						onChange: this.onPaymentSelected,
						value: "creditCard"
					}, s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/visa.png)`
						}
					}), s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/mastercard.png)`
						}
					}), s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/amex.png)`
						}
					}), s.a.createElement("div", {
						className: l.a.paymentMethodIcon,
						style: {
							backgroundImage: `url(${n.a.assetPath}/img/payment-icons/discover.jpg)`
						}
					}))))
				}
			}
			t.a = Object(c.c)(m)
		},
		"./src/reddit/components/StripePaymentForm/index.m.less": function(e, t, r) {
			e.exports = {
				stripePaymentForm: "_3C3Y0w8uwHP67Nd1zwnetc",
				loadingState: "_1s3l8V8wj-crcjY0qsjkQU",
				savedCardState: "_2G3lMKSaxL8NOzpScQZBXf",
				formState: "_3J9W7a4Xz1X7U1aHZnU68_",
				loader: "_22vTMYASXxqNDPunA2LpXa",
				creditCard: "oqvB7OMBlijvKe8ysqodq",
				saveCardCheckbox: "_2uwrJlaChG36r0DkfvHnki",
				poweredByStripeIcon: "_3uwtIFjWV8xl7_GvDbFCMJ",
				savedCardContainer: "_2MPjzw57JoobRxPmlu8OCb",
				cardImageContainer: "_2UfEtRBZKGHh61YQvN-wG5",
				cardImageContainerNightmode: "_28ZdrJfYvnuJaXkQVMVOGq",
				brandImage: "_2mqcWSE8aspsp1q2xC8qBu",
				cardDetails: "_34-t7dxtgTqGxiuyP72aPD",
				unknownCC: "_2tXz9uqxu-ZiBFsHmFWdV6",
				unknownCc: "_2tXz9uqxu-ZiBFsHmFWdV6",
				expiry: "_2Qg2CXB4yQiIH6KZrB9lRT",
				icon: "_1pvlE-J4rOcSVpJdWYQAm-",
				confirmText: "_3_csWXQHhia1pXrA9w9OLK"
			}
		},
		"./src/reddit/components/StripePaymentForm/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				c = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/actions/gold/productOfferPurchase.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				l = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				m = r("./src/reddit/controls/ErrorText/index.tsx");
			const {
				fbt: p
			} = r("./node_modules/fbt/lib/FbtPublic.js"), b = e => {
				let {
					className: t
				} = e;
				return a.a.createElement(m.b, {
					className: t
				}, p._("Error loading Stripe, please refresh the page and try again", null, {
					hk: "2O1NWp"
				}))
			};
			var f = r("./node_modules/fbt/lib/FbtPublic.js"),
				g = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				h = r("./src/config.ts"),
				y = r("./src/reddit/components/CheckoutForm/index.m.less"),
				j = r.n(y);
			const O = Object(o.c)({
				cardCvcValidation: u.f,
				cardExpiryValidation: u.g,
				cardName: u.h,
				cardNumberValidation: u.i,
				nameOnCardValidation: u.k,
				postalCode: u.l
			});
			class v extends a.a.Component {
				constructor() {
					super(...arguments), this.computedStyle = getComputedStyle(document.body), this.state = {
						cardNumberReady: !1,
						cardExpiryReady: !1,
						cardCVCReady: !1
					}, this.onChangeCardName = e => {
						const t = e.currentTarget.value;
						t !== this.props.cardName && this.props.onNameInput(t)
					}, this.onChangePostalCode = e => {
						const t = e.currentTarget.value;
						t !== this.props.postalCode && this.props.onPostalCodeInput(t)
					}, this.onCardNumberReady = () => this.setState({
						cardNumberReady: !0
					}), this.onCardExpiryReady = () => this.setState({
						cardExpiryReady: !0
					}), this.onCardCVCReady = () => this.setState({
						cardCVCReady: !0
					})
				}
				render() {
					const {
						className: e,
						cardCvcValidation: t,
						cardExpiryValidation: r,
						cardName: n,
						cardNumberValidation: s,
						onCardNumberChange: o,
						onCardExpiryChange: i,
						onCardCvcChange: d,
						nameOnCardValidation: l,
						postalCode: u,
						stripe: m
					} = this.props;
					if (!m) return a.a.createElement(b, {
						className: e
					});
					const {
						cardNumberReady: p,
						cardExpiryReady: h,
						cardCVCReady: y
					} = this.state, O = {
						base: {
							lineHeight: "40px",
							color: this.computedStyle.getPropertyValue("--newRedditTheme-bodyText"),
							"::placeholder": {
								color: this.computedStyle.getPropertyValue("--newRedditTheme-metaText")
							}
						}
					};
					return a.a.createElement("div", {
						className: Object(c.a)(j.a.checkoutForm, e)
					}, a.a.createElement("div", {
						className: j.a.formCellWide
					}, a.a.createElement("input", {
						className: Object(c.a)(j.a.cardInput, j.a.nameOnCard, {
							[j.a.cardInputError]: !!l
						}),
						type: "text",
						placeholder: f.fbt._("NAME ON CARD", null, {
							hk: "IgrlQ"
						}).toString(),
						onChange: this.onChangeCardName,
						value: n
					})), a.a.createElement("div", {
						className: j.a.formCell
					}, a.a.createElement(g.CardNumberElement, {
						className: Object(c.a)(j.a.cardInput, {
							[j.a.cardInputError]: !!s
						}),
						onChange: o,
						onReady: this.onCardNumberReady,
						options: {
							placeholder: f.fbt._("CARD NUMBER", null, {
								hk: "3pqMxG"
							}).toString(),
							style: O
						}
					}), !p && a.a.createElement("div", {
						className: j.a.elementPlaceholder
					}, f.fbt._("CARD NUMBER", null, {
						hk: "3pqMxG"
					}))), a.a.createElement("div", {
						className: j.a.formCell
					}, a.a.createElement(g.CardExpiryElement, {
						className: Object(c.a)(j.a.cardInput, {
							[j.a.cardInputError]: !!r
						}),
						onChange: i,
						onReady: this.onCardExpiryReady,
						options: {
							placeholder: f.fbt._("MM/YY", null, {
								hk: "Hou17"
							}).toString(),
							style: O
						}
					}), !h && a.a.createElement("div", {
						className: j.a.elementPlaceholder
					}, f.fbt._("MM/YY", null, {
						hk: "Hou17"
					}))), a.a.createElement("div", {
						className: j.a.formCell
					}, a.a.createElement(g.CardCvcElement, {
						className: Object(c.a)(j.a.cardInput, {
							[j.a.cardInputError]: !!t
						}),
						onChange: d,
						onReady: this.onCardCVCReady,
						options: {
							placeholder: f.fbt._("CCV", null, {
								hk: "dZzZJ"
							}).toString(),
							style: O
						}
					}), !y && a.a.createElement("div", {
						className: j.a.elementPlaceholder
					}, f.fbt._("CCV", null, {
						hk: "dZzZJ"
					}))), a.a.createElement("div", {
						className: j.a.formCell
					}, a.a.createElement("input", {
						className: Object(c.a)(j.a.cardInput, j.a.nameOnCard),
						type: "text",
						onChange: this.onChangePostalCode,
						placeholder: f.fbt._("ZIP CODE", null, {
							hk: "2lJZ4j"
						}).toString(),
						value: u
					})))
				}
			}
			var C = Object(s.b)(O, e => ({
					onCardNumberChange: t => e(Object(d.cardNumberChange)(t)),
					onCardExpiryChange: t => e(Object(d.cardExpiryChange)(t)),
					onCardCvcChange: t => e(Object(d.cardCvcChange)(t)),
					onNameInput: t => e(Object(d.cardNameInput)({
						cardName: t
					})),
					onPostalCodeInput: t => e(Object(d.postalCodeInput)({
						postalCode: t
					}))
				}))(v),
				w = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				P = r("./src/reddit/components/StripePaymentForm/index.m.less"),
				x = r.n(P);
			var E = e => {
					const {
						onToggleRememberCard: t,
						rememberCard: r
					} = e, n = Object(g.useStripe)();
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(C, {
						className: x.a.creditCard,
						stripe: n
					}), a.a.createElement(w.a, {
						className: x.a.saveCardCheckbox,
						isSelected: r,
						onClick: t,
						text: f.fbt._("Remember this card", null, {
							hk: "2arVov"
						})
					}), a.a.createElement("a", {
						href: "https://stripe.com",
						target: "_blank",
						rel: "noopener noreferrer"
					}, a.a.createElement("img", {
						className: x.a.poweredByStripeIcon,
						src: `${h.a.assetPath}/img/payment-icons/powered-by-stripe.png`
					})))
				},
				k = r("./src/reddit/icons/svgs/Trash2/index.tsx");
			const {
				fbt: _
			} = r("./node_modules/fbt/lib/FbtPublic.js"), I = e => 2 === e.length ? e : "0" + e, N = e => {
				switch (e.toLowerCase()) {
					case "visa":
						return `${h.a.assetPath}/img/payment-icons/visa.png`;
					case "mastercard":
						return `${h.a.assetPath}/img/payment-icons/mastercard.png`;
					case "discover":
						return `${h.a.assetPath}/img/payment-icons/discover.jpg`;
					case "american express":
						return `${h.a.assetPath}/img/payment-icons/amex.png`;
					default:
						return null
				}
			};
			class S extends a.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						showConfirmText: !1
					}, this.onTrashCanClick = e => {
						e.preventDefault(), this.setState({
							showConfirmText: !0
						})
					}, this.onConfirmClick = e => {
						e.preventDefault();
						const {
							onDelete: t,
							savedCard: r
						} = this.props;
						t(r.cardId)
					}
				}
				render() {
					const {
						savedCard: e
					} = this.props, t = N(e.brand);
					return a.a.createElement("label", {
						className: x.a.savedCardContainer
					}, a.a.createElement("input", {
						type: "radio",
						name: "use-saved-card",
						checked: !0,
						readOnly: !0
					}), a.a.createElement("div", {
						className: Object(c.a)(x.a.cardImageContainer, {
							[x.a.cardImageContainerNightmode]: this.props.nightmode
						})
					}, t ? a.a.createElement("img", {
						className: x.a.brandImage,
						src: t
					}) : a.a.createElement("span", {
						className: x.a.unknownCC
					}, "CC")), a.a.createElement("div", {
						className: x.a.cardDetails
					}, a.a.createElement("span", null, _._("Card ending in {Credit Card last four digits}", [_._param("Credit Card last four digits", e.last4)], {
						hk: "3dMxMn"
					})), a.a.createElement("span", {
						className: x.a.expiry
					}, _._("Expires {month} / {year}", [_._param("month", I(e.expirationMonth.toString())), _._param("year", e.expirationYear.toString())], {
						hk: "3iXzVI"
					}))), this.state.showConfirmText ? a.a.createElement("button", {
						className: x.a.confirmText,
						onClick: this.onConfirmClick
					}, _._("Confirm", null, {
						hk: "gFhpD"
					})) : a.a.createElement("button", {
						onClick: this.onTrashCanClick
					}, a.a.createElement(k.b, {
						className: x.a.icon
					})))
				}
			}
			var A = S;
			const T = Object(o.c)({
					rememberCard: u.v,
					savedCard: e => Object(u.x)(e)[0],
					stripeInfoLoading: u.w
				}),
				M = Object(s.b)(T, e => ({
					onClickDeleteCard: t => e(Object(i.c)(t)),
					onToggleRememberCard: () => e(Object(d.toggleRememberCard)())
				}));
			class R extends a.a.PureComponent {
				render() {
					const {
						className: e,
						nightmode: t,
						onClickDeleteCard: r,
						onToggleRememberCard: n,
						rememberCard: s,
						savedCard: o,
						stripe: i,
						stripeInfoLoading: d
					} = this.props;
					if (!i) return a.a.createElement(b, {
						className: Object(c.a)(x.a.stripePaymentForm, e)
					});
					const u = d,
						m = !u && o,
						p = !u && !m,
						f = u ? x.a.loadingState : m ? x.a.savedCardState : x.a.formState;
					return a.a.createElement("div", {
						className: Object(c.a)(x.a.stripePaymentForm, f, e)
					}, u && a.a.createElement(l.a, {
						className: x.a.loader,
						sizePx: 60
					}), m && o && a.a.createElement("form", null, a.a.createElement(A, {
						nightmode: t,
						onDelete: r,
						savedCard: o
					})), p && a.a.createElement(E, {
						onToggleRememberCard: n,
						rememberCard: s
					}))
				}
			}
			t.a = M(R)
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, r) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return O
			})), r.d(t, "c", (function() {
				return v
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./node_modules/lodash/uniqueId.js"),
				s = r.n(a),
				o = r("./node_modules/raf/index.js"),
				c = r.n(o),
				i = r("./node_modules/react/index.js"),
				d = r.n(i),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/higherOrderComponents/asModal/index.tsx"),
				m = r("./src/reddit/controls/Button/index.tsx"),
				p = r("./src/reddit/layout/row/Inline/index.tsx"),
				b = r("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				f = r.n(b);
			var g = Object(u.a)(e => {
					const {
						children: t,
						title: r
					} = e;
					return d.a.createElement("div", {
						className: f.a.wrapper
					}, d.a.createElement(p.a, {
						className: f.a.titleRow
					}, r), d.a.createElement("div", {
						className: f.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: f.a.buttonRow
					}, d.a.createElement(m.l, {
						className: f.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				h = r("./src/reddit/controls/ErrorText/index.m.less"),
				y = r.n(h);
			class j extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${s()()}`,
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
					c()(() => {
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
						errorModalBody: r,
						errorModalTitle: a = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: s = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: o,
						isModalOpen: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(y.a.wrapper, t)
					}, d.a.createElement("span", {
						className: y.a.description,
						ref: this.spanRef
					}, e), o && d.a.createElement("span", {
						className: y.a.moreText,
						onClick: this.toggleModal
					}, s), c && d.a.createElement(g, {
						onConfirmed: this.toggleModal,
						title: a
					}, r || e))
				}
			}
			const O = e => {
					const {
						className: t,
						errorClassName: r,
						errorModalTitle: n,
						fallbackMessage: a,
						messages: s = []
					} = e, o = s.length ? s : a ? [a] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(j, {
						className: r,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				v = e => d.a.createElement(O, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = j
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, r) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				c = r.n(o);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return a.a.createElement("div", {
					className: Object(s.a)(c.a.loadingIcon, r, {
						[c.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${n}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/awards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "a", (function() {
				return m
			}));
			var n = r("./src/lib/makeGqlRequest/index.ts"),
				a = r("./src/lib/makeRequest/index.ts"),
				s = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				o = r("./src/reddit/helpers/isPost.ts"),
				c = (r("./src/redditGQL/operations/AvailableAwards.json"), r("./src/redditGQL/operations/AwardSideEffectsDetails.json")),
				i = r("./src/redditGQL/operations/GiveAward.json"),
				d = r("./src/redditGQL/operations/RemoveAward.json");
			const l = async (e, t, r) => {
				var o;
				const c = await Object(n.a)(e, {
					...i,
					variables: {
						input: t
					}
				}, {
					query: r ? {} : Object(s.b)()
				});
				if (!Object(a.c)(c)) throw new Error("An unknown error occurred");
				if (!Object(a.c)(c) || !c.body.data.giveAward.ok) throw c.body.data.giveAward.errors && (null === (o = c.body.data.giveAward.errors) || void 0 === o ? void 0 : o.length) > 0 ? new Error(c.body.data.giveAward.errors[0].message) : new Error("An unknown error occurred");
				return c.body.data.giveAward
			}, u = async (e, t) => {
				var r, s, o;
				const c = await Object(n.a)(e, {
					...d,
					variables: {
						input: t
					}
				});
				if (!Object(a.c)(c)) throw new Error("An unknown error occurred");
				if (!c.body.data.removeAward.ok) {
					const e = null !== (o = null === (s = null === (r = c.body.data.removeAward.errors) || void 0 === r ? void 0 : r[0]) || void 0 === s ? void 0 : s.message) && void 0 !== o ? o : "An unknown error occurred";
					throw new Error(e)
				}
				return c.body.data.removeAward
			}, m = async (e, t, r) => {
				const i = await Object(n.a)(e, {
					...c,
					variables: {
						thingId: t.thingId,
						isPost: Object(o.a)(t.thingId)
					}
				}, {
					query: r ? {} : Object(s.b)()
				});
				if (!Object(a.c)(i)) throw new Error("An unknown error occurred");
				if (i.body.data.postInfoById) {
					const {
						identity: e,
						postInfoById: r
					} = i.body.data;
					return {
						id: t.thingId,
						awardings: r.awardings,
						treatmentTags: r.treatmentTags,
						coins: e.coins
					}
				}
				if (i.body.data.commentById) {
					const {
						identity: e,
						commentById: r
					} = i.body.data;
					return {
						id: t.thingId,
						awardings: r.awardings,
						treatmentTags: r.treatmentTags,
						coins: e.coins
					}
				}
				throw new Error("An unknown error occurred")
			}
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "c", (function() {
				return m
			})), r.d(t, "d", (function() {
				return p
			})), r.d(t, "e", (function() {
				return b
			}));
			var n = r("./src/lib/constants/index.ts"),
				a = r("./src/lib/makeApiRequest/index.ts"),
				s = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				c = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async e => {
				let {
					buttonId: t,
					context: r,
					correlationId: d
				} = e;
				const l = {
						button_id: t,
						correlation_id: d
					},
					u = `${r.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					m = Object(c.a)(u);
				return Object(a.a)(Object(s.a)(r, [o.a]), {
					method: n.jb.POST,
					endpoint: m,
					data: l
				}).then(i.a)
			}, l = async e => {
				let {
					context: t,
					coins: r,
					pennies: c,
					correlationId: d
				} = e;
				const l = {
					coins: r,
					pennies: c,
					correlation_id: d
				};
				return Object(a.a)(Object(s.a)(t, [o.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(i.a)
			}, u = async e => {
				let {
					context: t,
					awardId: r,
					pennies: c,
					thingId: d,
					correlationId: l
				} = e;
				const u = {
					award_id: r,
					correlation_id: l,
					pennies: c,
					thing_id: d
				};
				return Object(a.a)(Object(s.a)(t, [o.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(i.a)
			}, m = async e => {
				let {
					context: t,
					offerContext: r,
					orderId: c,
					coins: d,
					pennies: l,
					correlationId: u
				} = e;
				const m = {
					offer_context: r,
					order_id: c,
					coins: d,
					pennies: l,
					correlation_id: u
				};
				return Object(a.a)(Object(s.a)(t, [o.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: m
				}).then(i.a)
			}, p = async e => {
				let {
					awardId: t,
					context: r,
					coins: c,
					correlationId: d,
					isAnonymous: l,
					message: u,
					offerContext: m,
					orderId: p,
					pennies: b,
					thingId: f
				} = e;
				const g = {
					award_id: t,
					coins: c,
					correlation_id: d,
					is_anonymous: l,
					message: u,
					offer_context: m,
					order_id: p,
					pennies: b,
					thing_id: f
				};
				return Object(a.a)(Object(s.a)(r, [o.a]), {
					method: n.jb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: g
				}).then(i.a)
			}, b = async e => {
				let {
					awardId: t,
					context: r,
					correlationId: c,
					isAnonymous: d,
					message: l,
					orderId: u,
					thingId: m
				} = e;
				const p = {
					award_id: t,
					correlation_id: c,
					is_anonymous: d,
					message: l,
					order_id: u,
					thing_id: m
				};
				return Object(a.a)(Object(s.a)(r, [o.a]), {
					method: n.jb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(i.a)
			}
		},
		"./src/reddit/endpoints/gold/productOfferPurchase/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "f", (function() {
				return h
			})), r.d(t, "a", (function() {
				return y
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "h", (function() {
				return O
			})), r.d(t, "j", (function() {
				return v
			})), r.d(t, "g", (function() {
				return C
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "l", (function() {
				return k
			})), r.d(t, "k", (function() {
				return _
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r.n(n),
				s = r("./src/redditGQL/operations/CancelEconRecurringPayment.json"),
				o = r("./src/redditGQL/operations/ConfirmPaypalPayment.json"),
				c = r("./src/redditGQL/operations/ConfirmStripePaymentNewCard.json"),
				i = r("./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json"),
				d = r("./src/redditGQL/operations/CreateEconOrder.json"),
				l = r("./src/redditGQL/operations/CreatePaypalPayment.json"),
				u = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json"),
				m = r("./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json"),
				p = r("./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json"),
				b = r("./src/redditGQL/operations/DeleteSavedStripeCard.json"),
				f = r("./src/redditGQL/operations/UserSavedStripeCards.json"),
				g = r("./src/lib/makeGqlRequest/index.ts");
			const h = (e, t, r, n, s, o) => {
				const c = new a.a(n.price).multipliedBy(s).toFixed();
				return Object(g.a)(e, {
					...d,
					variables: {
						input: {
							nonce: t,
							productId: r.id,
							productVersion: r.version,
							pricePackageId: n.id,
							currency: n.currency,
							price: c,
							productsCount: s.toString(),
							...o
						}
					}
				})
			};
			var y;
			! function(e) {
				e.New = "NEW", e.ActionRequired = "ACTION_REQUIRED", e.Pending = "PENDING", e.Paid = "PAID", e.Canceled = "CANCELED", e.Rejected = "REJECTED", e.Failed = "FAILED", e.Refunded = "REFUNDED"
			}(y || (y = {}));
			const j = (e, t, r, n) => Object(g.a)(e, {
					...m,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				O = (e, t, r, n) => Object(g.a)(e, {
					...u,
					variables: {
						nonce: t,
						orderId: r,
						token: n
					}
				}),
				v = (e, t, r, n) => Object(g.a)(e, {
					...p,
					variables: {
						nonce: t,
						orderId: r,
						cardId: n
					}
				}),
				C = (e, t, r, n, a) => Object(g.a)(e, {
					...l,
					variables: {
						nonce: t,
						orderId: r,
						successUrl: n,
						cancelUrl: a
					}
				}),
				w = (e, t, r, n) => Object(g.a)(e, {
					...o,
					variables: {
						nonce: t,
						paymentId: r,
						token: n
					}
				}),
				P = (e, t, r, n) => Object(g.a)(e, {
					...i,
					variables: {
						nonce: t,
						paymentId: r,
						cardId: n
					}
				}),
				x = (e, t, r, n, a) => Object(g.a)(e, {
					...c,
					variables: {
						nonce: t,
						paymentId: r,
						token: n,
						saveCard: a
					}
				}),
				E = (e, t) => Object(g.a)(e, {
					...s,
					variables: {
						orderId: t
					}
				}),
				k = e => Object(g.a)(e, {
					...f,
					variables: {}
				}),
				_ = (e, t) => Object(g.a)(e, {
					...b,
					variables: {
						cardId: t
					}
				})
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => `awardItem__${t}-${e}`
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			}));
			const n = 500,
				a = 1800,
				s = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < n ? 0 : e.coinPrice < a ? 50 : 100 : 2048
				},
				o = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const n = s(t, r);
					return e.slice(0, n)
				}
		},
		"./src/reddit/helpers/createEmojiText/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n);

			function s(e, t) {
				const r = e.toString().split(":");
				return r.length % 2 == 0 ? e : r.reduce((e, r, n) => (n % 2 == 0 ? e.push(r) : "" === r ? e.push(":") : `:${r}:` in t ? e.push(t[`:${r}:`]) : e.push(`:${r}:`), e), []).map((e, t) => a.a.createElement(a.a.Fragment, {
					key: t
				}, e))
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return s
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "b", (function() {
				return i
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				a = r("./src/lib/prettyPrintNumber/index.ts");

			function s(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(a).toString()
			}

			function o(e, t) {
				return Object(a.b)(parseInt(s(e, t), 10))
			}

			function c(e, t) {
				const r = new n.BigNumber(e),
					a = new n.BigNumber(t || 1);
				return r.multipliedBy(a).toFixed(0)
			}

			function i(e) {
				const t = new n.BigNumber(e),
					r = new n.BigNumber("1e18");
				return t.dividedBy(r).toString()
			}
		},
		"./src/reddit/hooks/useStripePromise.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			}));
			var n = "https://js.stripe.com/v3",
				a = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
				s = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
				o = null,
				c = function(e) {
					return null !== o ? o : o = new Promise((function(t, r) {
						if ("undefined" != typeof window)
							if (window.Stripe && e && console.warn(s), window.Stripe) t(window.Stripe);
							else try {
								var o = function() {
									for (var e = document.querySelectorAll('script[src^="'.concat(n, '"]')), t = 0; t < e.length; t++) {
										var r = e[t];
										if (a.test(r.src)) return r
									}
									return null
								}();
								o && e ? console.warn(s) : o || (o = function(e) {
									var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
										r = document.createElement("script");
									r.src = "".concat(n).concat(t);
									var a = document.head || document.body;
									if (!a) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
									return a.appendChild(r), r
								}(e)), o.addEventListener("load", (function() {
									window.Stripe ? t(window.Stripe) : r(new Error("Stripe.js not available"))
								})), o.addEventListener("error", (function() {
									r(new Error("Failed to load Stripe.js"))
								}))
							} catch (c) {
								return void r(c)
							} else t(null)
					}))
				},
				i = function(e, t, r) {
					if (null === e) return null;
					var n = e.apply(void 0, t);
					return function(e, t) {
						e && e._registerWrapper && e._registerWrapper({
							name: "stripe-js",
							version: "1.21.1",
							startTime: t
						})
					}(n, r), n
				},
				d = Promise.resolve().then((function() {
					return c(null)
				})),
				l = !1;
			d.catch((function(e) {
				l || console.warn(e)
			}));
			var u = function() {
					for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
					l = !0;
					var n = Date.now();
					return d.then((function(e) {
						return i(e, t, n)
					}))
				},
				m = r("./src/config.ts"),
				p = r("./node_modules/react-redux/es/index.js"),
				b = r("./src/reddit/selectors/experiments/econ/paymentsSandbox.ts");
			let f = null;

			function g() {
				const e = Object(p.e)(b.a);
				return f || (f = u(m.a.stripe.apiKey(e))), f
			}
		},
		"./src/reddit/hooks/useThunkDispatch.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react-redux/es/index.js");

			function a() {
				return Object(n.d)()
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, r) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				a = r.n(n),
				s = r("./src/lib/classNames/index.ts"),
				o = r("./src/reddit/icons/svgs/Trash2/index.m.less"),
				c = r.n(o);
			const i = e => a.a.createElement("svg", {
				className: Object(s.a)(c.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, a.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), a.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = i
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, a, s, o;
			r.d(t, "b", (function() {
					return a
				})), r.d(t, "a", (function() {
					return s
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(a || (a = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(s || (s = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				a = r("./src/reddit/actions/gold/constants.ts");
			const s = {};
			var o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.lb: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: r.amount
						}
					}
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				subredditLockedCoins: o
			})
		},
		"./src/reddit/selectors/experiments/econ/paymentsSandbox.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				a = r("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			const s = Object(a.a)(n.ed)
		},
		"./src/reddit/selectors/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				a = r("./src/reddit/reducers/features/econPurchase/index.ts");
			Object(n.a)({
				features: {
					econPurchase: a.a
				}
			});
			const s = (e, t) => {
				let {
					subredditId: r
				} = t;
				return r && e.features.econPurchase.subredditLockedCoins[r] || 0
			}
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "j", (function() {
				return i
			})), r.d(t, "k", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "c", (function() {
				return p
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "l", (function() {
				return f
			})), r.d(t, "f", (function() {
				return h
			})), r.d(t, "e", (function() {
				return y
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "h", (function() {
				return O
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/makeProductOfferKey/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/models/Payments/index.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					var s, o, c;
					return r ? e.subreddits.productOffers[Object(a.a)(n, r)] : null === (c = null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === c ? void 0 : c[Object(a.a)(n)]
				},
				l = e => {
					const t = d(e, {
						type: s.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, t) => {
					let {
						subredditId: r
					} = t;
					const n = d(e, {
						subredditId: r,
						type: s.c.Powerups
					});
					return null == n ? void 0 : n[0]
				},
				m = Object(n.a)(u, e => null == e ? void 0 : e.pricePackages[0]),
				p = Object(n.a)(m, e => null == e ? void 0 : e.price),
				b = e => {
					const t = d(e, {
						type: s.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				f = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === o.b.PayPal || e[0] === o.b.Stripe)(e.requiredPaymentProviders)) : null,
				g = Object(n.a)(b, c.p, (e, t) => f(e, t) || null),
				h = Object(n.a)(g, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				y = Object(n.a)(g, e => (null == e ? void 0 : e[0].price) || null),
				j = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				O = Object(n.a)(j, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/AvailableAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"4778ed491384"}')
		},
		"./src/redditGQL/operations/AwardSideEffectsDetails.json": function(e) {
			e.exports = JSON.parse('{"id":"e10d7f0411a4"}')
		},
		"./src/redditGQL/operations/CancelEconRecurringPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"ac36f7489268"}')
		},
		"./src/redditGQL/operations/ConfirmPaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"4a9f7376235b"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentNewCard.json": function(e) {
			e.exports = JSON.parse('{"id":"e4d2b27d6d30"}')
		},
		"./src/redditGQL/operations/ConfirmStripePaymentSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"0095edf93db4"}')
		},
		"./src/redditGQL/operations/CreateEconOrder.json": function(e) {
			e.exports = JSON.parse('{"id":"1bf318d40021"}')
		},
		"./src/redditGQL/operations/CreatePaypalPayment.json": function(e) {
			e.exports = JSON.parse('{"id":"91f215ec5196"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"179702814d8f"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithProvidedNonAuthCard.json": function(e) {
			e.exports = JSON.parse('{"id":"6d178a1662ba"}')
		},
		"./src/redditGQL/operations/CreateStripePaymentWithSavedCard.json": function(e) {
			e.exports = JSON.parse('{"id":"9fc54f6de447"}')
		},
		"./src/redditGQL/operations/DeleteSavedStripeCard.json": function(e) {
			e.exports = JSON.parse('{"id":"87230cb9dec2"}')
		},
		"./src/redditGQL/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"c25f21e6351f"}')
		},
		"./src/redditGQL/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"496275fd4bb6"}')
		},
		"./src/redditGQL/operations/GiveAward.json": function(e) {
			e.exports = JSON.parse('{"id":"b8028be05f59"}')
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"098518521d5b"}')
		},
		"./src/redditGQL/operations/RemoveAward.json": function(e) {
			e.exports = JSON.parse('{"id":"f7c06f2127c3"}')
		},
		"./src/redditGQL/operations/SubredditCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"a82ef253ed10"}')
		},
		"./src/redditGQL/operations/UserSavedStripeCards.json": function(e) {
			e.exports = JSON.parse('{"id":"d29c51cfbfe6"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/CoinPurchaseModal.d085796883f6a8d8f7ef.js.map