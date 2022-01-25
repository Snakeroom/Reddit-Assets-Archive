// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.c54dc2cc5f07509242d7.js
// Retrieved at 1/25/2022, 1:40:03 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild~GildModal", "gildActions"], {
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, r) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function n() {}

				function s() {}
				s.resetWarningCache = n;
				var a = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, n, s, a, c) {
							if (c !== r) {
								var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw o.name = "Invariant Violation", o
							}
						}

						function t() {
							return e
						}
						e.isRequired = e;
						var a = {
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
							checkPropTypes: s,
							resetWarningCache: n
						};
						return a.PropTypes = a, a
					}()
				}));

				function c(e) {
					return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function o(e, t, r) {
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
							o(e, t, r[t])
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
								s = !1,
								a = void 0;
							try {
								for (var c, o = e[Symbol.iterator](); !(n = (c = o.next()).done) && (r.push(c.value), !t || r.length !== t); n = !0);
							} catch (i) {
								s = !0, a = i
							} finally {
								try {
									n || null == o.return || o.return()
								} finally {
									if (s) throw a
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
						return null !== e && "object" === c(e)
					},
					b = function(e, t, r) {
						return p(e) ? Object.keys(e).reduce((function(n, s) {
							var a = !p(t) || ! function e(t, r) {
								if (!p(t) || !p(r)) return t === r;
								var n = Array.isArray(t);
								if (n !== Array.isArray(r)) return !1;
								var s = "[object Object]" === Object.prototype.toString.call(t);
								if (s !== ("[object Object]" === Object.prototype.toString.call(r))) return !1;
								if (!s && !n) return !1;
								var a = Object.keys(t),
									c = Object.keys(r);
								if (a.length !== c.length) return !1;
								for (var o = {}, i = 0; i < a.length; i += 1) o[a[i]] = !0;
								for (var d = 0; d < c.length; d += 1) o[c[d]] = !0;
								var l = Object.keys(o);
								if (l.length !== a.length) return !1;
								var u = t,
									m = r;
								return l.every((function(t) {
									return e(u[t], m[t])
								}))
							}(e[s], t[s]);
							return r.includes(s) ? (a && console.warn("Unsupported prop change: options.".concat(s, " is not a mutable property.")), n) : a ? d(d({}, n || {}), {}, o({}, s, e[s])) : n
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
				var O = function(e) {
					var r = e.stripe,
						n = e.options,
						s = e.children,
						a = t.useRef(!1),
						c = t.useRef(!0),
						o = t.useMemo((function() {
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
					null !== p && p !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), a.current || ("sync" === o.tag && (a.current = !0, u({
						stripe: o.stripe,
						elements: o.stripe.elements(n)
					})), "async" === o.tag && (a.current = !0, o.stripePromise.then((function(e) {
						e && c.current && u({
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
							c.current = !1
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
					}, s)
				};
				O.propTypes = {
					stripe: a.any,
					options: a.object
				};
				var j = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(h), e)
					},
					w = function(e) {
						return (0, e.children)(j("mounts <ElementsConsumer>"))
					};
				w.propTypes = {
					children: a.func.isRequired
				};
				var y = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					v = function() {},
					E = function(e, r) {
						var n, s = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							c = r ? function(e) {
								j("mounts <".concat(s, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									a = r.className,
									c = r.options,
									o = void 0 === c ? {} : c,
									i = r.onBlur,
									d = void 0 === i ? v : i,
									l = r.onFocus,
									u = void 0 === l ? v : l,
									p = r.onReady,
									f = void 0 === p ? v : p,
									g = r.onChange,
									h = void 0 === g ? v : g,
									O = r.onEscape,
									w = void 0 === O ? v : O,
									E = r.onClick,
									I = void 0 === E ? v : E,
									x = j("mounts <".concat(s, ">")).elements,
									C = t.useRef(null),
									P = t.useRef(null),
									_ = y(f),
									A = y(d),
									k = y(u),
									N = y(I),
									S = y(h),
									T = y(w);
								t.useLayoutEffect((function() {
									if (null == C.current && x && null != P.current) {
										var t = x.create(e, o);
										C.current = t, t.mount(P.current), t.on("ready", (function() {
											return _(t)
										})), t.on("change", S), t.on("blur", A), t.on("focus", k), t.on("escape", T), t.on("click", N)
									}
								}));
								var L = m(o);
								return t.useEffect((function() {
									if (C.current) {
										var e = b(o, L, ["paymentRequest"]);
										e && C.current.update(e)
									}
								}), [o, L]), t.useLayoutEffect((function() {
									return function() {
										C.current && C.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: a,
									ref: P
								})
							};
						return c.propTypes = {
							id: a.string,
							className: a.string,
							onChange: a.func,
							onBlur: a.func,
							onFocus: a.func,
							onReady: a.func,
							onClick: a.func,
							options: a.object
						}, c.displayName = s, c.__elementType = e, c
					},
					I = "undefined" == typeof window,
					x = E("auBankAccount", I),
					C = E("card", I),
					P = E("cardNumber", I),
					_ = E("cardExpiry", I),
					A = E("cardCvc", I),
					k = E("fpxBank", I),
					N = E("iban", I),
					S = E("idealBank", I),
					T = E("p24Bank", I),
					L = E("epsBank", I),
					M = E("payment", I),
					R = E("paymentRequestButton", I),
					G = E("linkAuthentication", I),
					D = E("shippingAddress", I),
					B = E("afterpayClearpayMessage", I);
				e.AfterpayClearpayMessageElement = B, e.AuBankAccountElement = x, e.CardCvcElement = A, e.CardElement = C, e.CardExpiryElement = _, e.CardNumberElement = P, e.Elements = O, e.ElementsConsumer = w, e.EpsBankElement = L, e.FpxBankElement = k, e.IbanElement = N, e.IdealBankElement = S, e.LinkAuthenticationElement = G, e.P24BankElement = T, e.PaymentElement = M, e.PaymentRequestButtonElement = R, e.ShippingAddressElement = D, e.useElements = function() {
					return j("calls useElements()").elements
				}, e.useStripe = function() {
					return j("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, r("./node_modules/react/index.js"))
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./src/lib/currency/cleanNumber/index.ts");

			function s(e, t) {
				const r = Object(n.a)(e),
					s = parseInt(r) / 100;
				return Math.floor(s) !== s || t ? s.toFixed(2) : String(s)
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
				return a
			})), r.d(t, "d", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			})), r.d(t, "f", (function() {
				return i
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "e", (function() {
				return l
			}));
			var n, s = r("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(n || (n = {}));
			const a = "USD",
				c = "ETH",
				o = "COINS",
				i = [c, "BTC"],
				d = [o, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => s.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => s.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => s.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
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
				s = r("./src/lib/currency/centsToDollars/index.ts"),
				a = r("./src/lib/currency/currencies.ts"),
				c = r("./src/lib/prettyPrintNumber/index.ts"),
				o = r("./src/reddit/helpers/governance/tokens.ts"),
				i = r("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: s
				} = {}) => {
					const a = Number(e);
					return Object(i.c)() ? r ? Object(c.b)(a) : new Intl.NumberFormat(t, s).format(a) : u(a, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: c,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? p(t.type) : a.c),
						type: g = t.type || (t.currency ? m(t.currency) : a.b.Real)
					} = t, h = Number(e), O = String(e);
					switch (g) {
						case a.b.Reddit: {
							const e = a.e[f],
								t = e ? e() : f;
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(h) + " " + t : u(h, c, r, t)
						}
						case a.b.Crypto: {
							if (c) {
								return Object(o.c)(O, l) + " " + f
							}
							const e = Number(Object(o.b)(O, l));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, c, r, f)
						}
						case a.b.Real:
						default: {
							const e = Number(Object(s.a)(O, b));
							return Object(i.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								notation: c ? "compact" : "standard",
								...d
							}).format(e) : u(e, c, r, f)
						}
					}
				},
				u = (e, t, r, n) => {
					return (t ? Object(c.b)(e) : e.toLocaleString(r)) + (n ? " " + n : "")
				},
				m = e => a.g.includes(e.toUpperCase()) ? a.b.Reddit : a.f.includes(e.toUpperCase()) ? a.b.Crypto : a.b.Real,
				p = e => {
					switch (e) {
						case a.b.Crypto:
							return a.d;
						case a.b.Reddit:
							return a.a;
						case a.b.Real:
						default:
							return a.c
					}
				}
		},
		"./src/reddit/actions/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/econPurchase/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/makeGqlRequest/index.ts"),
				o = r("./src/redditGQL/operations/SubredditCoins.json");
			var i = r("./src/reddit/featureFlags/subredditPoints.ts"),
				d = r("./src/reddit/actions/gold/constants.ts");
			Object(n.a)({
				features: {
					econPurchase: s.a
				}
			});
			const l = Object(a.a)(d.nb),
				u = (e, t, r) => async (n, s, {
					gqlContext: a
				}) => {
					var d, u;
					if (!i.a.has(t.toLowerCase())) return;
					if (void 0 !== s().features.econPurchase.subredditLockedCoins[e] && !(null == r ? void 0 : r.force)) return;
					const m = await ((e, t) => Object(c.a)(e, {
						...o,
						variables: {
							subreddit: t
						}
					}))(a(), e);
					if (m.ok) {
						const t = m.body;
						n(l({
							subredditId: e,
							amount: (null === (u = null === (d = t.data.subredditInfoById) || void 0 === d ? void 0 : d.userCoinsInSubreddit) || void 0 === u ? void 0 : u.amount) || 0
						}))
					}
				}
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "setIsAnonymous", (function() {
				return J
			})), r.d(t, "updateMessage", (function() {
				return Q
			})), r.d(t, "gildGqlRequested", (function() {
				return Y
			})), r.d(t, "triggerLoader", (function() {
				return Z
			})), r.d(t, "gildPending", (function() {
				return $
			})), r.d(t, "gildFailed", (function() {
				return te
			})), r.d(t, "gildSuccessful", (function() {
				return se
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/postParentMessage/index.ts"),
				c = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				o = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./node_modules/react/index.js"),
				m = r.n(u),
				p = r("./src/reddit/models/Gold/Award.ts"),
				b = r("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				f = r.n(b);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js"), h = e => g._("Sent! You earned {=awarder karma}", [g._param("=awarder karma", m.a.createElement("a", {
				className: f.a.karmaLink,
				href: p.a,
				target: "_blank",
				rel: "noopener noreferrer"
			}, g._({
				"*": "{awarder karma} awarder karma",
				_1: "1 awarder karma"
			}, [g._plural(e.awarderKarmaReceived, "awarder karma")], {
				hk: "2Llmz0"
			})))], {
				hk: "3ItXUT"
			});
			var O = r("./src/reddit/constants/modals.ts"),
				j = r("./src/reddit/models/Gold/Coins/index.ts"),
				w = r("./src/reddit/models/Post/index.ts"),
				y = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/models/User/index.ts"),
				E = r("./src/reddit/selectors/commentSelector.ts"),
				I = r("./src/reddit/selectors/communityAwards.ts"),
				x = r("./src/reddit/selectors/gild.ts"),
				C = r("./src/reddit/selectors/gold/awardIcon.ts"),
				P = r("./src/reddit/selectors/gold/econPurchase.ts"),
				_ = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				A = r("./src/reddit/selectors/posts.ts"),
				k = r("./src/reddit/selectors/subreddit.ts"),
				N = r("./src/reddit/selectors/user.ts"),
				S = r("./src/lib/makeGqlRequest/index.ts"),
				T = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				L = r("./src/redditGQL/operations/GildComment.json"),
				M = r("./src/redditGQL/operations/GildPost.json");
			const R = (e, t, r) => Object(S.a)(e, {
					...M,
					variables: t
				}, {
					query: r ? {} : Object(T.b)()
				}),
				G = (e, t, r) => Object(S.a)(e, {
					...L,
					variables: t
				}, {
					query: r ? {} : Object(T.b)()
				});
			var D = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				B = r("./src/reddit/helpers/awards/message.ts"),
				F = r("./src/reddit/helpers/correlationIdTracker.ts"),
				U = r("./src/reddit/helpers/isPost.ts"),
				q = r("./src/reddit/helpers/trackers/gild.ts"),
				V = r("./src/telemetry/index.ts"),
				H = r("./src/reddit/endpoints/profile/info.ts"),
				W = r("./src/reddit/actions/gold/awardKarma.ts"),
				z = r("./src/reddit/actions/gold/constants.ts"),
				K = r("./src/reddit/actions/gold/econPurchase.ts");
			const J = Object(s.a)(z.r),
				Q = Object(s.a)(z.v),
				Y = (e, t) => async (r, s, {
					gqlContext: a
				}) => {
					const c = s().gild,
						{
							isOldReddit: o,
							isLivestream: i
						} = t;
					r($());
					try {
						const t = {
								gildingTypeId: c.selectedAward.id,
								isAnonymous: c.isAnonymous,
								isGildFunded: !1,
								message: Object(B.d)(c.message, c.selectedAward, i),
								nodeId: e
							},
							s = Object(U.a)(e) ? R : G,
							d = await s(a(), {
								input: t
							}, o);
						let l = !1,
							u = null,
							m = null;
						if (d.ok) {
							const e = d.body;
							l = e.data.gild.ok, u = e.data.gild.fieldErrors, m = e.data.gild.errors
						}
						if (l) {
							const t = d.body,
								{
									gild: n
								} = t.data,
								s = Object(U.a)(e) ? d.body.data.gild.postInfo : d.body.data.gild.comment,
								{
									awardings: a,
									treatmentTags: o
								} = s;
							await r(se({
								awardId: c.selectedAward.id,
								awardings: a,
								awardKarmaReceived: n.awardKarmaReceived,
								coins: n.coins,
								id: e,
								subredditCoins: n.subredditCoins,
								treatmentTags: o
							}))
						} else {
							const e = u && u[0] && u[0].message,
								t = m && m[0] && m[0].message,
								s = e || t || n.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await r(te(s))
						}
					} catch (d) {
						const e = d,
							t = e && e.message || n.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await r(te(t))
					} finally {
						Object(F.b)(F.a.GildingFlow)
					}
				}, Z = Object(s.a)(z.u), X = Object(s.a)(z.q), $ = () => async (e, t) => {
					e(X()), window.setTimeout(() => {
						t().gild.api.pending && e(Z())
					}, 2e3)
				}, ee = Object(s.a)(z.p), te = e => async (t, r) => {
					await t(ee(e)), t(Object(l.f)({
						kind: y.b.Error,
						duration: l.a,
						text: e
					}))
				}, re = Object(s.a)(z.s), ne = (e, t) => {
					const {
						id: r
					} = t, n = Object(U.a)(r) ? Object(A.H)(e, {
						postId: r
					}) : Object(E.b)(e, {
						commentId: r
					}), s = Object(N.k)(e), a = e.gild, {
						isAnonymous: c
					} = a, o = !c && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, i = n ? n.author : void 0, d = Object(k.H)(e, {
						thingId: r
					});
					return re({
						...t,
						gilder: o,
						gildee: i,
						subredditId: d && d.id
					})
				}, se = e => async (t, r) => {
					const s = r(),
						{
							awardId: u,
							id: m
						} = e,
						b = Object(I.a)(s, u),
						f = e.awardKarmaReceived,
						g = Object(N.k)(s),
						E = Object(x.b)(s) || Object(F.e)(F.a.GildingFlow, !1);
					if (Object(x.g)(s)) {
						const e = "success.gild",
							t = {},
							r = Object(C.a)(s, {
								award: b,
								minSize: 32,
								postOrCommentId: m
							});
						t.awardId = u, t.awardIcon = r, t.awardName = b.name, Object(a.a)({
							type: e,
							data: t
						})
					}
					if (b.awardType === p.f.Moderator && void 0 === e.subredditCoins) {
						const t = Object(k.H)(s, {
								thingId: m
							}),
							r = t && Object(k.z)(s, {
								subredditName: t.name
							});
						r && (e.subredditCoins = r - b.coinPrice)
					}
					if (t(ne(s, e)), g) {
						const e = {
								...H.a,
								...g.karma
							},
							r = e.fromAwardsReceived + f,
							n = Object(v.e)(g);
						t(Object(W.a)({
							userName: n,
							karma: {
								...e,
								fromAwardsReceived: r
							}
						}))
					}(s.posts.instances[m] || []).forEach(r => {
						t(ne(s, {
							...e,
							id: r
						}))
					});
					const S = Object(U.a)(m) ? n.fbt._("Success! You have given this post the {awardName} Award", [n.fbt._param("awardName", b.name)], {
							hk: "1Ndi4Z"
						}) : n.fbt._("Success! You have given this comment the {awardName} Award", [n.fbt._param("awardName", b.name)], {
							hk: "2sIK9Y"
						}),
						T = b.coinPrice;
					Object(V.a)(Object(q.viewKarmaSuccessEvent)({
						award: b,
						awarderKarmaEarned: f,
						awardeeKarmaEarned: 0,
						numberCoins: T,
						thingId: m
					})(s)), t(Object(d.g)(O.a.GOLD_GILD_MODAL));
					const L = Object(C.a)(s, {
						award: b,
						minSize: 64,
						postOrCommentId: m
					});
					t(Object(l.f)({
						customIconAsset: L,
						kind: y.b.SuccessAward,
						text: f > 0 ? h({
							awarderKarmaReceived: f
						}) : S
					})), setTimeout(() => {
						const e = Object(D.a)(u, m),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const M = Date.now();
					await t(Object(i.b)({
						correlationId: E,
						forceLoad: !0
					}));
					const R = Date.now() - M;
					if (T > 0) {
						const e = Object(_.f)(r()).filter(e => j.a.has(e.dealInfo.type));
						if (e.length) {
							const r = Math.max(900 - R, 10),
								n = Math.max(300 - R, 10),
								a = Object(U.a)(m) && Object(w.p)(Object(A.H)(s, {
									postId: m
								}));
							setTimeout(() => t(Object(o.e)({
								correlationId: E,
								packageId: e[0].mobileId
							})), a ? r : n)
						}
					}
					const G = Object(k.H)(s, {
						thingId: m
					});
					if (G && Object(P.a)(s, {
							subredditId: G.id
						}) && t(Object(K.a)(G.id, G.name, {
							force: !0
						})), 0 === T && G) {
						t(Object(c.a)(G.id, m, void 0, !0));
						const e = 399,
							n = Object(_.d)(r()).reduce((t, r) => {
								const n = Math.abs(r.pennies - e);
								return (!t || n < t.priceDelta) && (t = {
									packageId: r.mobileId,
									priceDelta: n
								}), t
							}, null);
						n && t(Object(o.b)({
							correlationId: E,
							packageId: n.packageId
						}))
					}
				}
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/actions/gold/constants.ts");
			const o = Object(n.a)(c.mb),
				i = Object(n.a)(c.t),
				d = e => async t => {
					await t(i({
						id: e
					})), t(Object(s.h)(a.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return I
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "b", (function() {
				return A
			})), r.d(t, "d", (function() {
				return k
			})), r.d(t, "j", (function() {
				return N
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "f", (function() {
				return T
			})), r.d(t, "g", (function() {
				return L
			})), r.d(t, "h", (function() {
				return M
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/formatApiError/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/constants/modals.ts"),
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
				O = r("./src/reddit/models/Toast/index.ts"),
				j = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				w = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const v = Object(a.a)(y.u),
				E = Object(a.a)(y.c),
				I = e => async (t, r) => {
					t(v(e)), t(Object(l.h)(o.a.ECON_COIN_PURCHASE))
				}, x = () => async (e, t) => {
					e(E()), e(Object(l.g)(o.a.ECON_COIN_PURCHASE))
				}, C = Object(a.a)(y.y), P = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					const s = n();
					Object(j.e)(s, t) ? (r(C({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(o.a.GOLD_TARGETED_OFFER_MODAL))) : c.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, _ = Object(a.a)(y.t), A = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					Object(j.c)(n(), t) ? (r(_({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(o.a.ECON_COIN_PACKAGE_OFFER))) : c.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, k = (e, t, r) => async (s, a) => {
					await s(Object(d.c)(e, r));
					const c = a(),
						o = Object(j.p)(c, e);
					if (o) s(I({
						correlationId: r,
						packageId: o,
						thingId: t
					}));
					else {
						const e = Object(j.n)(c),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						s(Object(u.f)({
							kind: O.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, N = (e, t, r) => async (a, c, {
					apiContext: o
				}) => {
					const d = c(),
						{
							coins: l,
							pennies: u
						} = r,
						m = Object(w.r)(d) || Object(b.e)(b.a.GoldPayment, !1);
					let f, g;
					a(Object(i.stripeTokenPending)());
					const O = Object(w.y)(d);
					if (O || (f = await a(Object(i.validateAndCreateStripeToken)(e, t)), g = Object(w.v)(d), f)) try {
						const e = await Object(p.f)({
							coins: l,
							context: o(),
							correlationId: m,
							offerContext: Object(h.d)(r, !1),
							pennies: u,
							rememberCard: g,
							savedCardId: O || void 0,
							token: f
						});
						if (e.error) {
							const t = Object(s.a)(e.error, e.status);
							return void a(Object(i.stripeApiError)(t))
						}
						return a(Object(i.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (j) {
						const e = Object(s.a)(j);
						a(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						a(Object(i.stripeApiError)(e))
					}
				}, S = (e, t, a, c) => async (o, d, {
					apiContext: l
				}) => {
					const u = d(),
						{
							coins: m,
							pennies: O
						} = a,
						j = Object(w.r)(u) || Object(b.e)(b.a.GoldPayment, !1);
					let y, v;
					o(Object(i.stripeTokenPending)());
					const E = Object(w.y)(u);
					if (E || (y = await o(Object(i.validateAndCreateStripeToken)(e, t)), v = Object(w.v)(u), y)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: d,
							selectedAward: w
						} = u.gild;
						if (!e || !w.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void o(Object(i.stripeApiError)(e))
						}
						const I = w.id,
							C = {
								gildType: I,
								isAnonymous: t,
								message: d
							},
							P = await Object(p.e)({
								coins: m,
								context: l(),
								correlationId: j,
								gildParams: C,
								isOldReddit: c,
								offerContext: Object(h.d)(a, !0),
								pennies: O,
								rememberCard: v,
								savedCardId: E || void 0,
								thingId: e,
								token: y
							});
						if (P.error) {
							const e = Object(s.a)(P.error, P.status);
							return void o(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(x()), o(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: s,
								coins: a,
								treatment_tags: c
							} = P.body;
							return o(t({
								awardKarmaReceived: n || 0,
								awardId: I,
								awardings: s && s.length ? Object(f.a)(s).map(e => ({
									award: Object(g.h)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: c
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (I) {
						const e = Object(s.a)(I);
						o(Object(i.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						o(Object(i.stripeApiError)(e))
					}
				}, T = e => async (t, r, {
					apiContext: n
				}) => {
					const a = Object(b.c)(b.a.GoldPayment),
						{
							coins: o,
							pennies: d
						} = e;
					try {
						const e = await Object(m.a)({
							context: n(),
							coins: o,
							pennies: d,
							correlationId: a
						});
						if (e.error) {
							const r = Object(s.a)(e.error);
							return void t(Object(i.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						c.c.captureException(l);
						const e = Object(s.a)(l);
						t(Object(i.paypalApiError)(e))
					}
				}, L = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const o = n(),
						d = Object(w.r)(o) || Object(b.e)(b.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const n = await Object(m.c)({
							context: a(),
							offerContext: Object(h.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
						});
						if (n.error) {
							const e = Object(s.a)(n.error);
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
					} catch (p) {
						c.c.captureException(p);
						const e = Object(s.a)(p);
						r(Object(i.paypalApiError)(e))
					}
				}, M = (e, t) => async (a, o, {
					apiContext: d
				}) => {
					const l = o(),
						u = Object(w.r)(l) || Object(b.e)(b.a.GoldPayment, !1),
						{
							coins: p,
							pennies: O
						} = t;
					try {
						const {
							gildModalThingId: c,
							isAnonymous: o,
							message: j,
							selectedAward: w
						} = l.gild;
						if (!c || !w) return void a(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const y = w.id,
							v = await Object(m.d)({
								context: d(),
								offerContext: Object(h.d)(t, !0),
								orderId: e,
								coins: p,
								pennies: O,
								thingId: c,
								awardId: y,
								message: j || "",
								isAnonymous: o,
								correlationId: u
							});
						if (v.error) {
							const e = Object(s.a)(v.error);
							a(Object(i.paypalApiError)(e))
						} else {
							a(x());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: s,
								treatment_tags: o
							} = v.body;
							a(Object(i.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(d({
								awardId: y,
								awardKarmaReceived: t || 0,
								awardings: Object(f.a)(e).map(e => ({
									award: Object(g.h)(e),
									total: e.count
								})),
								coins: n,
								id: c,
								subredditCoins: s,
								treatmentTags: o
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (j) {
						c.c.captureException(j);
						const e = Object(s.a)(j);
						a(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return l
			})), r.d(t, "paymentCompleted", (function() {
				return u
			})), r.d(t, "cardNameInput", (function() {
				return m
			})), r.d(t, "postalCodeInput", (function() {
				return p
			})), r.d(t, "cardNameEmpty", (function() {
				return b
			})), r.d(t, "cardNumberChange", (function() {
				return f
			})), r.d(t, "cardExpiryChange", (function() {
				return g
			})), r.d(t, "cardCvcChange", (function() {
				return h
			})), r.d(t, "stripeTokenPending", (function() {
				return O
			})), r.d(t, "stripeTokenError", (function() {
				return j
			})), r.d(t, "stripeApiError", (function() {
				return w
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return y
			})), r.d(t, "paypalApiError", (function() {
				return v
			})), r.d(t, "toggleRememberCard", (function() {
				return E
			})), r.d(t, "selectSavedCard", (function() {
				return I
			})), r.d(t, "_deleteSavedCard", (function() {
				return x
			})), r.d(t, "deleteSavedCard", (function() {
				return C
			})), r.d(t, "savedCardsPending", (function() {
				return P
			})), r.d(t, "savedCardsSuccess", (function() {
				return _
			})), r.d(t, "loadSavedCards", (function() {
				return A
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const l = Object(a.a)(d.F),
				u = Object(a.a)(d.A),
				m = Object(a.a)(d.b),
				p = Object(a.a)(d.C),
				b = Object(a.a)(d.a),
				f = Object(a.a)(d.K),
				g = Object(a.a)(d.J),
				h = Object(a.a)(d.I),
				O = Object(a.a)(d.M),
				j = Object(a.a)(d.L),
				w = Object(a.a)(d.H),
				y = (e, t) => async (r, a) => {
					const c = a(),
						o = Object(i.h)(c),
						d = Object(i.l)(c),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: m
					} = await e.createToken(l, {
						name: o,
						address_zip: d
					});
					if (o.trim()) {
						if (!m && u) return u;
						r(j(m || void 0))
					} else {
						const e = s.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(b({
							message: e
						}))
					}
				}, v = Object(a.a)(d.B), E = Object(a.a)(d.N), I = Object(a.a)(d.G), x = Object(a.a)(d.g), C = e => async (t, r, {
					apiContext: n
				}) => {
					t(x(e));
					try {
						const t = await Object(o.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (s) {
						c.c.captureException(s)
					}
				}, P = Object(a.a)(d.D), _ = Object(a.a)(d.E), A = () => async (e, t, {
					apiContext: r
				}) => {
					e(P());
					try {
						const t = await Object(o.b)(r());
						if (t.error) throw new Error(t.error.type);
						const n = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(_(n)), n[0] && e(I(n[0].cardId))
					} catch (n) {
						c.c.captureException(n), e(_([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "e", (function() {
				return j
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "c", (function() {
				return y
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/formatApiError/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				i = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				d = r("./src/reddit/endpoints/gold/purchase.ts"),
				l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				u = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				m = r("./src/reddit/models/Gold/Award.ts"),
				p = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const f = Object(a.a)(b.v),
				g = Object(a.a)(b.d),
				h = Object(a.a)(b.w),
				O = (e, t, r) => async e => {
					e(h({
						thingId: t
					})), e(f({
						correlationId: r
					}))
				}, j = (e, t, a) => async (c, i, {
					apiContext: b
				}) => {
					const f = i(),
						h = Object(l.c)(l.a.GoldPayment);
					let O, j;
					c(Object(o.stripeTokenPending)());
					const w = Object(p.y)(f);
					if (w || (O = await c(Object(o.validateAndCreateStripeToken)(e, t)), j = Object(p.v)(f), O)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: i,
							selectedAward: l
						} = f.gild;
						if (!e || !l.id) return void c(Object(o.stripeApiError)(n.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const p = l.id,
							y = l.pennyPrice;
						if (!y) return void c(Object(o.stripeApiError)(n.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const v = {
								gildType: p,
								isAnonymous: t,
								message: i
							},
							E = await Object(d.g)({
								context: b(),
								correlationId: h,
								gildParams: v,
								isOldReddit: a,
								pennies: y,
								rememberCard: j,
								savedCardId: w || void 0,
								thingId: e,
								token: O
							});
						if (E.error) {
							const e = Object(s.a)(E.error, E.status);
							return void c(Object(o.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							c(g()), c(Object(o.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: n,
								awarder_karma_received: s,
								coins: a,
								treatment_tags: i
							} = E.body;
							return void c(t({
								awardKarmaReceived: s || 0,
								awardId: p,
								awardings: n && n.length ? Object(u.a)(n).map(e => ({
									award: Object(m.h)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: i
							}))
						}
					} catch (y) {
						const e = Object(s.a)(y);
						c(Object(o.stripeApiError)(e))
					} else c(Object(o.stripeApiError)(n.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, w = (e, t, r) => async (n, a, {
					apiContext: d
				}) => {
					const u = Object(l.c)(l.a.GoldPayment);
					try {
						const a = await Object(i.b)({
							context: d(),
							awardId: e,
							pennies: t,
							thingId: r,
							correlationId: u
						});
						if (a.error) {
							const e = Object(s.a)(a.error);
							return void n(Object(o.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = a.body;
							return e
						}
					} catch (m) {
						c.c.captureException(m);
						const e = Object(s.a)(m);
						n(Object(o.paypalApiError)(e))
					}
				}, y = e => async (t, a, {
					apiContext: d
				}) => {
					const p = a(),
						b = Object(l.c)(l.a.GoldPayment);
					try {
						const {
							gildModalThingId: a,
							isAnonymous: c,
							message: l,
							selectedAward: f
						} = p.gild;
						if (!a || !f) return void t(Object(o.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const h = f.id,
							O = await Object(i.e)({
								awardId: h,
								context: d(),
								orderId: e,
								thingId: a,
								message: l || "",
								isAnonymous: c,
								correlationId: b
							});
						if (O.error) {
							const e = Object(s.a)(O.error);
							t(Object(o.paypalApiError)(e))
						} else {
							t(g());
							const {
								all_awardings: e,
								awarder_karma_received: n,
								coins: s,
								subreddit_coins: c,
								treatment_tags: i
							} = O.body;
							t(Object(o.paymentCompleted)({
								coins: s,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(d({
								awardKarmaReceived: n || 0,
								awardId: h,
								awardings: Object(u.a)(e).map(e => ({
									award: Object(m.h)(e),
									total: e.count
								})),
								coins: s,
								id: a,
								subredditCoins: c,
								treatmentTags: i
							}))
						}
					} catch (f) {
						c.c.captureException(f);
						const e = Object(s.a)(f);
						t(Object(o.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return x
			})), r.d(t, "c", (function() {
				return A
			})), r.d(t, "a", (function() {
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/env/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				c = r("./src/lib/sentry/index.ts"),
				o = r("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/lib/makeGqlRequest/index.ts"),
				p = r("./src/reddit/actions/economics/powerups/helpers.ts"),
				b = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var f = r("./src/reddit/selectors/experiments/econ/index.ts"),
				g = r("./src/reddit/selectors/gold/productOffers.ts"),
				h = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const O = Object(a.a)(h.l),
				j = Object(a.a)(h.m),
				w = Object(a.a)(h.k),
				y = Object(a.a)(h.o),
				v = Object(a.a)(h.n),
				E = Object(a.a)(h.i),
				I = Object(a.a)(h.j),
				x = e => async (t, r, {
					gqlContext: a
				}) => {
					const d = r();
					if (!Object(f.i)(d)) return t((e => async (t, r, {
						apiContext: a
					}) => {
						t(O());
						const d = r(),
							l = Object(i.J)(d);
						try {
							const r = !l,
								n = await Object(o.b)({
									context: a(),
									correlationId: e,
									shouldUseCurrentOrigin: r
								});
							if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
							const s = n.body;
							t(j(s))
						} catch (u) {
							Object(s.b)() || console.error(u), c.c.captureException(u);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(w(e))
						}
					})(null == e ? void 0 : e.correlationId));
					const l = Object(g.a)(d);
					if ((null == e ? void 0 : e.forceLoad) || !l) {
						t(y());
						try {
							const e = await (async e => {
								const t = await Object(m.a)(e, {
									...b
								});
								if (!t.ok) {
									const {
										errors: e
									} = t.body, r = Object(p.a)(e);
									throw new Error(r || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(a());
							t(E(e.data.coinpacks.offers[0])), t(I(e.data.premium.offers[0]))
						} catch (u) {
							Object(s.b)() || console.error(u), c.c.captureException(u);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(v(e))
						}
					}
				}, C = Object(a.a)(h.q), P = Object(a.a)(h.r), _ = Object(a.a)(h.p), A = (e, t) => async (r, a, {
					apiContext: i
				}) => {
					const d = a();
					if (Object(f.i)(d)) return await r(x());
					r(C());
					try {
						const n = await Object(o.c)({
							awardId: e,
							context: i(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const s = n.body;
						if (!s.coinPackages || !s.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(P(s))
					} catch (l) {
						Object(s.b)() || console.error(l), c.c.captureException(l);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(_(e))
					}
				}, k = Object(a.a)(h.h), N = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, i;
					try {
						const t = await Object(o.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (i = r.awards) || void 0 === i ? void 0 : i.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(k({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(s.b)() || console.error(m), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), c.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/Econ/CoinsModalHeader/index.m.less": function(e, t, r) {
			e.exports = {
				coinButton: "_2D-JnYPuWU9np1-ycRlU4B",
				addCoins: "_3Q8mNjZ6kXlVXyle3AlgPg",
				coinBalanceIndicator: "_8L3GhmAppBj71I9SA2yAv",
				coinIcon: "_2PQG5IO-LoMyTdh5pHkaVI",
				coinBalance: "IJNEU4MmXrYhw0xUvB2jI",
				plusIcon: "_1yFCLGefJC66-exSRGPxWx",
				closeBtn: "_2eQ0RDYslIQ2AWVCe694Hd",
				closeBtnIcon: "Cqi8E08JLc7am7yAu1zuf",
				gildHeader: "_1xbzKMH-i0xyQAbOKcuuDr",
				headerText: "_1B8sDmFKuUDciAht-FY_me",
				subredditIcon: "qIGsGGDKQfZn_EBSumGVq"
			}
		},
		"./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less": function(e, t, r) {
			e.exports = {
				awardDetailsPane: "_3kvsmRpyGMATPOVdwZT7NB",
				awardDescriptionContainer: "_3q3pzHD6q6zVtVG4TNE7im",
				iconContainer: "_3b5NcSKHOalQQEfFSNiCQX",
				icon: "_2PvjA-cEeom6ZfDceMtNHp",
				awardName: "sadK4Fq7Cy1wo7YWoEAWl",
				price: "_1WoiOSy_qo9S285gNnGevf",
				coinIcon: "o97S7Xos6PjcatPPsV-P2",
				giver: "_2GgPzgt-vZL36vYFyKbbDN",
				modIcon: "_2IlAShkKouN-v5V35IWs47",
				textAreaWrapper: "uJbtvFCFnUiXwhJ2M7rOh",
				textArea: "_2kwFqYX6mikunS0um4uLJ8",
				messageTooLong: "MS5s5QAaxgdOHp-DI58GJ",
				characterCountdown: "_2f01wl-r9Wp_fMxTHtthb",
				benefits: "_-1asi_lAFSc_bekrVlSw6",
				expiresText: "_30TeowkJPm0r4HctIm_NMA",
				publicIndicator: "_2iCTmZfj38gd9FcYQjeZ1",
				subredditCoinBalance: "_2YqHkV_stdqFg8q5D7VYYU",
				eyeIcon: "_3n416iaPD0uJ-VKssuS9AK",
				awardDescriptionWrapper: "_2uO3abqAHUw7fJ5hyl1GzZ",
				spacerTop: "_3EHFq1M-9PkDDm4EJ5TruF",
				spacerBottom: "eCsFJJwyIQ_SsKBiLPNUk",
				gildButtonWrapper: "_2elVnq7-N_K9GG0B2yPeah",
				gildButton: "_3gIWLyKuTjGe6MzbV1c7JT",
				premiumButton: "e7wlp6rD5OkT-AFE1tiam",
				loadingIcon: "_1aqV3pTUux3b9E40y1ocLc"
			}
		},
		"./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less": function(e, t, r) {
			e.exports = {
				awardSelectorPane: "_2WXA0nl6cBwDItweBzw_ti",
				filterCarousel: "_2MOqN0HQqZJrTZOWLm-bzV",
				carouselButtonWrapper: "_3FXB59DHtw_BvLmglyXx2H",
				carouselButtonWrapperLeft: "K3Z8FXq7HIpiQXORE-eae",
				carouselButtonWrapperRight: "_2BNzUl8YQmyoE2BFnjQo5I",
				carouselButton: "_1HhtUkpDhY-kj_lEjqXXUQ",
				carouselButtonIcon: "_25ZC-eqEZUNXEWuJ02hNgL",
				advanceLeft: "_1ZMkffU38djy81-vPtnm-r",
				pillOptionsContainer: "_1qfStcLn4QhEwd2HYTyQNP",
				pillOptionWrapper: "MhZNeWrHRqwfZCIANFEKw",
				focusElement: "_1lyAYlSCbLNlqTf94fNItk",
				pillOption: "_28D6bZJ_JqhfiEutH0OPzA",
				selectedPillOption: "_3MCq_1ka7g94GjidAMfvk3",
				awardSectionScrollWrapper: "_2726PRoNLHdmAJsc-GiVrj",
				awardSectionContainer: "_3NYoLrOG4zXqg1zXIMJkoW",
				awardSection: "_1oscYfN5Pn1j0E5xXJ1MSK",
				singleRowGrid: "_2AYsatNqFzap2NtceES_qp",
				selectableAward: "_10errIUo7wzwfnjkiqXfXP",
				selected: "_2lQtvMp2JZ_WdVme_P3L2Z",
				buttonContent: "_3kHQ1I2tn6294gyzXBCjA",
				iconContainer: "_28Lwrc4mxY4O_sSndFYb5J",
				icon: "_3SgOtgb_CcNWbsKiej-_GG",
				badgeContainer: "_3rOiiCMO2cjJ30zIm2EfQM",
				iconBadgeContainer: "ASkoaxqpNJ3-4QZj1wwrV",
				iconBadge: "kVDZbCkYxulRfYA-ULahK",
				newIcon: "_2uiN7dmDiVWjQeUHnhZ8WG",
				moderatorIcon: "_3KpYoSxd3g7d1milGR03et",
				premiumIcon: "_2dPX5MkVgsrETdoMuwFJxS",
				transferableIcon: "_1h5I8fmj3xAZEFBLpjaTCK",
				lockIcon: "_1fc2LNH1oENBHFSEPNhlCR",
				metaText: "_1fAgvSQNrmCwASgfLrvYpP",
				metaTextBold: "_27m8uRmHyUvu1ZHN9-X1ZO",
				banner: "_2DXf1id0rEhidKxC88jyko",
				rpanBanner: "_293Y-FsWYMzfmsaCuMWeug"
			}
		},
		"./src/reddit/components/GildModalContent/index.m.less": function(e, t, r) {
			e.exports = {
				gildModalContent: "_13s1q9tBn7qddM-UPVtpnC",
				modalMainContent: "_1-n44O8_Kquo1Wl43y39VQ"
			}
		},
		"./src/reddit/components/GildModalContent/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				o = r("./node_modules/fbt/lib/FbtPublic.js"),
				i = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/opener/index.ts"),
				l = r("./src/reddit/helpers/isPost.ts");
			var u = (e, t) => {
					return Object(l.a)(t.id) ? e.filter(e => !(e => e.some(e => e.startsWith("econ:transferable:econ:render:")))(e.award.tags || [])) : e
				},
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/localStorage/index.ts"),
				b = r("./src/reddit/helpers/trackers/gild.ts"),
				f = r("./src/reddit/models/Gold/Award.ts"),
				g = r("./src/reddit/models/Subreddit/index.ts"),
				h = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				j = r("./src/reddit/actions/gold/econPurchase.ts"),
				w = r("./src/reddit/actions/gold/gild.ts"),
				y = r("./src/reddit/actions/gold/giveAward.ts"),
				v = r("./src/reddit/actions/gold/modals.ts"),
				E = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				I = r("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				x = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				C = r("./src/reddit/actions/subreddit.ts"),
				P = r("./src/reddit/actions/toaster.ts"),
				_ = r("./src/reddit/selectors/commentSelector.ts"),
				A = r("./src/reddit/selectors/communityAwards.ts"),
				k = r("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				N = r("./src/reddit/selectors/gild.ts"),
				S = r("./src/reddit/selectors/gold/awardIcon.ts"),
				T = r("./src/reddit/selectors/gold/econPurchase.ts"),
				L = r("./src/reddit/selectors/gold/giveAwards.ts"),
				M = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				R = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				G = r("./src/reddit/selectors/posts.ts"),
				D = r("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				B = r("./src/reddit/selectors/subreddit.ts"),
				F = r("./src/reddit/selectors/user.ts"),
				U = r("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				q = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/higherOrderComponents/makeAsync.tsx")),
				V = r("./src/lib/loadWithRetries/index.ts"),
				H = r("./src/reddit/helpers/loadThirdPartyScript.ts");
			const W = () => Object(V.a)(() => Promise.all([r.e("PennyPurchaseModal").then(r.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(H.d)().catch(() => {})])).then(e => e[0].default);
			var z = Object(q.a)({
					getComponent: W,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				K = r("./src/reddit/components/TrackingHelper/index.tsx"),
				J = r("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				Q = r.n(J),
				Y = r("./src/reddit/helpers/awards/message.ts"),
				Z = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				X = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				$ = r("./src/reddit/icons/svgs/Eye/index.tsx"),
				ee = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				te = r("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				re = r("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				ne = r("./src/reddit/icons/fonts/Coin/index.tsx");
			const se = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return s.a.createElement(s.a.Fragment, null, e.map((e, t) => 0 === t ? e : s.a.createElement(s.a.Fragment, {
						key: t + e
					}, s.a.createElement(ne.a, null), e)))
				}
				return null
			};
			class ae extends s.a.PureComponent {
				render() {
					const {
						award: e,
						awardIcon: t,
						className: r
					} = this.props, n = !!e.pennyPrice;
					return s.a.createElement("div", {
						className: Object(i.a)(r, Q.a.awardDescriptionContainer)
					}, s.a.createElement("div", {
						className: Q.a.iconContainer
					}, s.a.createElement("img", {
						className: Q.a.icon,
						src: t
					})), s.a.createElement("div", {
						className: Q.a.awardName
					}, o.fbt._("{awardName} Award", [o.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), s.a.createElement("div", {
						className: Q.a.benefits
					}, s.a.createElement(se, {
						award: e
					})), s.a.createElement("div", {
						className: Q.a.price
					}, n ? o.fbt._("Purchase for ${dollarPrice}", [o.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : e.coinPrice > 0 ? s.a.createElement(s.a.Fragment, null, s.a.createElement(te.a, {
						className: Q.a.coinIcon
					}), o.fbt._("{coinPrice}", [o.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "3MZDc4"
					})) : o.fbt._("Free", null, {
						hk: "EW8V2"
					})), e.endsAt && s.a.createElement(re.a, {
						className: Q.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var ce = ae,
				oe = r("./src/reddit/controls/Button/index.tsx"),
				ie = r("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: de
			} = r("./node_modules/fbt/lib/FbtPublic.js"), le = 10;
			class ue extends s.a.PureComponent {
				renderButtonText() {
					const {
						needPayment: e,
						needPremium: t,
						selectedAward: r
					} = this.props, n = r.awardType === f.f.Moderator;
					return t ? de._("Get Premium", null, {
						hk: "3VB1S9"
					}) : !e || n ? de._("Give", null, {
						hk: "30MOda"
					}) : de._("Next", null, {
						hk: "zG5NI"
					})
				}
				render() {
					const {
						needPayment: e,
						needPremium: t,
						onGetPremium: r,
						onGild: n,
						onNeedPayment: a,
						pending: c,
						selectedAward: o
					} = this.props, d = o.awardType === f.f.Moderator;
					return s.a.createElement(oe.l, {
						className: Object(i.a)(Q.a.gildButton, {
							[Q.a.premiumButton]: t
						}),
						"data-redditstyle": !0,
						disabled: c || d && e,
						onClick: t ? r : e ? a : n
					}, c ? s.a.createElement(ie.a, {
						className: Q.a.loadingIcon,
						sizePx: le
					}) : this.renderButtonText())
				}
			}
			var me = ue;

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			class be extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						messageTypeEventSent: !1
					}, this.handleClickMessageInput = () => this.props.sendEvent(Object(b.clickMessageInputEvent)(this.props.thingId)), this.handleTypeMessageInput = e => {
						this.setState(this.sendTypeMessageEvent), this.props.handleMessageInput(e)
					}, this.sendTypeMessageEvent = (e, t) => {
						if (!e.messageTypeEventSent) return t.sendEvent(Object(b.typeMessageInputEvent)(t.thingId)), {
							messageTypeEventSent: !0
						}
					}, this.handleToggleAnonymous = () => {
						const {
							isAnonymous: e,
							sendEvent: t,
							thingId: r,
							toggleIsAnonymous: n
						} = this.props;
						t(Object(b.triggerAnonymousEvent)(e ? "uncheck" : "check", r)), n()
					}
				}
				renderPrivacyToggle() {
					const {
						forcePublic: e,
						isAnonymous: t
					} = this.props;
					return e ? null : s.a.createElement(X.a, {
						className: Q.a.giver,
						isSelected: t,
						text: o.fbt._("Make my gift anonymous", null, {
							hk: "2XfgGX"
						}),
						onClick: this.handleToggleAnonymous
					})
				}
				renderTextArea() {
					const {
						isLivestream: e,
						selectedAward: t,
						message: r
					} = this.props, n = {
						disabled: !1,
						maxLength: Object(Y.c)(t, e),
						placeholder: o.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === n.maxLength ? (n.disabled = !0, n.placeholder = o.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : n.placeholder = o.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const a = !e || n.maxLength > 0,
						c = a && r.length > n.maxLength;
					return s.a.createElement("div", {
						className: Object(i.a)(Q.a.textAreaWrapper, {
							[Q.a.messageTooLong]: c
						})
					}, s.a.createElement(Z.t, pe({
						className: Q.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: a ? r : ""
					}, n)), a && s.a.createElement("div", {
						className: Q.a.characterCountdown
					}, n.maxLength - r.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? s.a.createElement("div", {
						className: Q.a.publicIndicator
					}, s.a.createElement($.a, {
						className: Q.a.eyeIcon
					}), o.fbt._("Shows my username", null, {
						hk: "1HsXbA"
					})) : null
				}
				renderGildButton() {
					return s.a.createElement("div", {
						className: Q.a.gildButtonWrapper
					}, s.a.createElement(me, this.props.gildButtonProps))
				}
				renderCommunityCoinBalance() {
					if (this.props.selectedAward.awardType !== f.f.Moderator) return null;
					const {
						subredditName: e,
						subredditCoins: t
					} = this.props, r = o.fbt._("r/{subredditName} balance: {coinBalance}", [o.fbt._param("subredditName", e), o.fbt._param("coinBalance", t ? t.toLocaleString() : "0")], {
						hk: "1G3rBQ"
					});
					return s.a.createElement("div", {
						className: Q.a.subredditCoinBalance
					}, r)
				}
				render() {
					const {
						className: e,
						selectedAward: t,
						selectedAwardIcon: r,
						hideTextArea: n
					} = this.props;
					return s.a.createElement("div", {
						className: Object(i.a)(e, Q.a.awardDetailsPane)
					}, s.a.createElement("div", {
						className: Q.a.awardDescriptionWrapper
					}, s.a.createElement("div", {
						className: Q.a.spacerTop
					}), s.a.createElement(ce, {
						award: t,
						awardIcon: r
					}), s.a.createElement("div", {
						className: Q.a.spacerBottom
					}), t.awardType === f.f.Moderator ? s.a.createElement("span", {
						className: Q.a.giver
					}, s.a.createElement(ee.a, {
						className: Q.a.modIcon
					}), o.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), !n && this.renderTextArea(), this.renderPublicIndicator(), this.renderCommunityCoinBalance()), this.renderGildButton())
				}
			}
			var fe = be,
				ge = r("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				he = r.n(ge);
			const Oe = s.a.memo((function(e) {
				let t = "",
					r = "";
				return e.post && e.post.isRPANBroadcast && e.post.isFeedTheMeterEnabled && (t = o.fbt._("Give your favorite broadcasts more airtime with awards!", null, {
					hk: "1bDI3E"
				}), r = he.a.rpanBanner), t ? s.a.createElement("div", {
					className: Object(i.a)(he.a.banner, r)
				}, t) : null
			}));
			var je = Object(a.b)((e, t) => {
					if (Object(l.a)(t.thingId)) {
						const r = Object(G.H)(e, {
							postId: t.thingId
						});
						if (!r) return {};
						const n = !!r.media && "rpan" === r.media.type,
							s = n && Object(k.g)(e, t.thingId, D.l);
						return {
							post: {
								...r,
								isRPANBroadcast: n,
								isFeedTheMeterEnabled: s
							}
						}
					}
					return {}
				})(Oe),
				we = r("./src/reddit/components/RichTextJson/index.tsx"),
				ye = r("./src/reddit/icons/svgs/Advance/index.tsx");
			class ve extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						horizontalOffset: 0,
						rightScrollVisible: !1
					}, this.carouselRef = s.a.createRef(), this.optionsRef = s.a.createRef()
				}
				scrollLeft() {
					this.props.sendEvent(Object(b.clickPreviousFiltersEvent)());
					const e = this.optionsRef.current,
						t = this.carouselRef.current.clientWidth;
					let r = this.state.horizontalOffset + t;
					if (r > 0) return void this.setState({
						horizontalOffset: 0,
						rightScrollVisible: !0
					});
					for (const s of e.childNodes) {
						const e = s;
						if (e.offsetLeft + r + e.scrollWidth > 0) {
							r = -1 * e.offsetLeft;
							break
						}
					}
					const n = e.scrollWidth > r + t;
					this.setState({
						horizontalOffset: r,
						rightScrollVisible: n
					})
				}
				scrollRight() {
					this.props.sendEvent(Object(b.clickNextFiltersEvent)());
					const e = this.optionsRef.current,
						t = this.carouselRef.current.clientWidth;
					let r = null;
					for (const s of e.childNodes) {
						const n = s,
							a = n.offsetLeft + e.offsetLeft,
							c = a + n.scrollWidth;
						if (a >= t || a < t && c > t) {
							r = n;
							break
						}
					}
					if (!r) return;
					const n = e.scrollWidth > r.offsetLeft + t;
					this.setState({
						horizontalOffset: -1 * r.offsetLeft,
						rightScrollVisible: n
					})
				}
				scrollSnap(e) {
					const t = this.optionsRef.current,
						r = this.carouselRef.current.clientWidth,
						n = t.childNodes[e],
						s = n.offsetLeft + t.offsetLeft,
						a = s + n.scrollWidth;
					if (s < 40 || a > r - 40) {
						const s = e ? -1 * n.offsetLeft + 40 : 0,
							a = t.scrollWidth + s > r;
						this.setState({
							horizontalOffset: s,
							rightScrollVisible: a
						})
					}
				}
				handleTagClick(e, t) {
					this.scrollSnap(t), this.props.onSelectTag(e), this.props.sendEvent(Object(b.clickFilterEvent)(this.props.tags[t]))
				}
				componentDidUpdate(e) {
					if (JSON.stringify(e.tags) !== JSON.stringify(this.props.tags)) {
						const e = this.carouselRef.current && this.optionsRef.current && this.optionsRef.current.scrollWidth > this.optionsRef.current.offsetLeft + this.carouselRef.current.clientWidth;
						this.setState({
							rightScrollVisible: !!e,
							horizontalOffset: 0
						})
					}
				}
				render() {
					const {
						tags: e,
						selectedTag: t
					} = this.props;
					return s.a.createElement("div", {
						className: he.a.filterCarousel,
						ref: this.carouselRef
					}, this.state.horizontalOffset < 0 && s.a.createElement("div", {
						className: Object(i.a)(he.a.carouselButtonWrapper, he.a.carouselButtonWrapperLeft)
					}, s.a.createElement("button", {
						className: he.a.carouselButton,
						onClick: () => this.scrollLeft()
					}, s.a.createElement("div", {
						className: he.a.carouselButtonIcon,
						tabIndex: -1
					}, s.a.createElement(ye.a, {
						className: he.a.advanceLeft
					})))), s.a.createElement("div", {
						className: he.a.pillOptionsContainer,
						ref: this.optionsRef,
						style: {
							left: this.state.horizontalOffset
						}
					}, e.map((e, r) => s.a.createElement("button", {
						key: e.tag,
						className: he.a.pillOptionWrapper,
						onClick: () => this.handleTagClick(e.tag, r)
					}, s.a.createElement("div", {
						className: he.a.focusElement,
						tabIndex: -1
					}, s.a.createElement(we.a, {
						className: Object(i.a)(he.a.pillOption, {
							[he.a.selectedPillOption]: t === e.tag
						}),
						content: e.content.richtext,
						rtJsonElementProps: {},
						useExplicitTextColor: !0
					}))))), this.state.rightScrollVisible && s.a.createElement("div", {
						className: Object(i.a)(he.a.carouselButtonWrapper, he.a.carouselButtonWrapperRight)
					}, s.a.createElement("button", {
						className: he.a.carouselButton,
						onClick: () => this.scrollRight()
					}, s.a.createElement("div", {
						className: he.a.carouselButtonIcon,
						tabIndex: -1
					}, s.a.createElement(ye.a, null)))))
				}
			}
			var Ee = ve,
				Ie = r("./src/reddit/icons/svgs/Lock/index.tsx"),
				xe = r("./src/reddit/icons/svgs/New/index.tsx"),
				Ce = r("./src/reddit/icons/svgs/Premium/index.tsx");
			var Pe = e => s.a.createElement("svg", {
				width: "20",
				height: "20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				x1: "100%",
				y1: "50%",
				x2: "0%",
				y2: "50%",
				id: "a"
			}, s.a.createElement("stop", {
				stopColor: "#FF81ED",
				offset: "0%"
			}), s.a.createElement("stop", {
				stopColor: "#B279FF",
				offset: "32.949%"
			}), s.a.createElement("stop", {
				stopColor: "#7785FF",
				offset: "54.901%"
			}), s.a.createElement("stop", {
				stopColor: "#53B6FF",
				offset: "100%"
			}))), s.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, s.a.createElement("path", {
				d: "M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0z",
				fill: "url(#a)"
			}), s.a.createElement("path", {
				d: "M10 1.861a8.139 8.139 0 110 16.278 8.139 8.139 0 010-16.278z",
				opacity: ".105"
			}), s.a.createElement("path", {
				d: "M12.45 2.32c0 3.97 1.844 7.26 4.256 7.852-2.412.59-4.257 3.88-4.257 7.85v.088a3.248 3.248 0 01-.043-.003v-.086c0-3.97-1.845-7.26-4.256-7.851 2.411-.59 4.256-3.88 4.256-7.85v-.084l.044-.004v.089zM7.312 11.815c0 1.434 1.246 2.62 2.87 2.825-1.624.202-2.87 1.388-2.87 2.822l.001.029-.024-.001.002-.028c0-1.434-1.247-2.62-2.872-2.825 1.625-.201 2.872-1.388 2.872-2.822l-.002-.028h.023v.028zM5.65 4.287c0 1.074.82 1.966 1.894 2.14C6.47 6.6 5.651 7.491 5.651 8.565v.03l-.044-.002.001-.028c0-1.074-.819-1.966-1.894-2.14C4.79 6.253 5.608 5.36 5.608 4.287l-.001-.028.044-.002v.03z",
				fill: "#FFF"
			})));
			const _e = s.a.memo(e => {
				let t, r;
				const n = !!e.award.tags && e.award.tags.some(e => e.includes("econ:render:lottie:"));
				if (e.award.awardSubType === f.d.Moderator) t = ee.a, r = he.a.moderatorIcon;
				else if (e.award.awardSubType === f.d.Premium) t = e.premiumUser ? Ce.a : Ie.a, r = e.premiumUser ? he.a.premiumIcon : he.a.lockIcon;
				else if (n) t = Pe, r = he.a.transferableIcon;
				else {
					if (!e.award.isNew) return null;
					t = xe.a, r = he.a.newIcon
				}
				return s.a.createElement("div", {
					className: Object(i.a)(he.a.iconBadgeContainer, r)
				}, s.a.createElement(t, {
					className: he.a.iconBadge
				}))
			});
			var Ae = s.a.memo(e => {
				const {
					award: t,
					awardIcon: r,
					isSelected: n,
					premiumUser: a,
					onSelect: c
				} = e;
				return s.a.createElement("button", {
					className: Object(i.a)(he.a.selectableAward, {
						[he.a.selected]: n
					}),
					onClick: () => c(t)
				}, s.a.createElement("div", {
					className: he.a.buttonContent,
					tabIndex: -1
				}, s.a.createElement("div", {
					className: he.a.iconContainer
				}, s.a.createElement("img", {
					className: he.a.icon,
					src: r
				}), s.a.createElement("div", {
					className: he.a.badgeContainer
				}, s.a.createElement(_e, {
					award: t,
					premiumUser: a
				}))), s.a.createElement("div", {
					className: Object(i.a)(he.a.metaText, {
						[he.a.metaTextBold]: !t.pennyPrice && 0 === t.coinPrice
					})
				}, t.pennyPrice ? o.fbt._("${cost}", [o.fbt._param("cost", (t.pennyPrice / 100).toLocaleString())], {
					hk: "P4xjQ"
				}) : t.coinPrice > 0 ? t.coinPrice.toLocaleString() : o.fbt._("Free", null, {
					hk: "4exiMW"
				}))))
			});
			const ke = {
					colWidth: 60,
					colGutter: 8,
					rowWidth: 86,
					rowGutter: 4
				},
				Ne = {
					tag: "all",
					content: {
						richtext: {
							document: [{
								c: [{
									e: "text",
									t: "All"
								}],
								e: "par"
							}]
						},
						markdown: "All"
					}
				},
				Se = e => ({
					[e.tag]: []
				});
			var Te = s.a.memo(e => {
					const {
						awardIcons: t,
						awardTotals: r,
						awardsPending: a,
						onSelect: c,
						premiumUser: o,
						selectedAward: d,
						sendEvent: l,
						tags: u,
						thingId: m
					} = e, [p, f] = Object(n.useState)({}), [g, h] = Object(n.useState)(Se(Ne)), [O, j] = Object(n.useState)(Ne.tag);
					Object(n.useEffect)(() => {
						const e = {},
							t = Se(Ne);
						r.forEach(r => {
							e[r.award.id] = r, t[Ne.tag].push(r.award.id);
							const n = r.award.tags;
							n && n.forEach(e => {
								void 0 === t[e] && (t[e] = []), t[e].push(r.award.id)
							})
						}), f(e), h(t)
					}, [r]);
					const w = [Ne, ...u.filter(e => g[e.tag])],
						y = g[O],
						[v, E] = Object(n.useState)(!1),
						[I, x] = Object(n.useState)(1),
						C = Object(n.useCallback)(e => {
							if (null !== e) {
								const t = e.clientWidth,
									{
										colWidth: r,
										colGutter: n
									} = ke,
									s = t > (r + n) * (y.length - 1) + r + r + n;
								if (E(s), s) x(y.length);
								else {
									const e = Math.floor((t - r) / (r + n) + 1);
									x(e)
								}
							}
						}, [y]);
					if (a || !r.length) return s.a.createElement("div", {
						className: he.a.awardSelectorPane
					});
					const P = e => {
						c(e);
						const t = w.find(e => e.tag === O) || Ne,
							r = y.findIndex(t => t === e.id),
							n = Math.floor(r / I),
							s = r - n * I;
						l(Object(b.clickSelectAwardEvent)(e, m, {
							awardColPosition: s + 1,
							awardRowPosition: n + 1,
							filterId: O,
							filterName: t.content.markdown
						}))
					};
					return s.a.createElement("div", {
						className: he.a.awardSelectorPane
					}, s.a.createElement(je, {
						thingId: e.thingId
					}), s.a.createElement(Ee, {
						tags: w,
						selectedTag: O,
						sendEvent: l,
						onSelectTag: j
					}), s.a.createElement("div", {
						className: he.a.awardSectionScrollWrapper
					}, s.a.createElement("div", {
						className: he.a.awardSectionContainer
					}, s.a.createElement("div", {
						className: Object(i.a)(he.a.awardSection, {
							[he.a.singleRowGrid]: v
						}),
						ref: C
					}, y.map(e => {
						const r = p[e].award,
							n = e === d.id,
							a = t[e];
						return s.a.createElement(Ae, {
							award: r,
							awardIcon: a,
							awardCount: p[e].total,
							isSelected: n,
							key: r.id,
							premiumUser: o,
							onSelect: P,
							thingId: m
						})
					})))))
				}),
				Le = r("./src/lib/localizeCurrency/index.ts"),
				Me = r("./src/reddit/components/Econ/CoinsModalHeader/index.m.less"),
				Re = r.n(Me),
				Ge = r("./src/reddit/icons/svgs/Plus/index.tsx");
			const {
				fbt: De
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function Be({
				onButtonClick: e,
				onCancel: t,
				title: r,
				buttonText: n
			}) {
				return s.a.createElement("div", {
					className: Re.a.gildHeader
				}, s.a.createElement("button", {
					className: Re.a.closeBtn,
					onClick: t
				}, s.a.createElement(Z.b, {
					className: Re.a.closeBtnIcon
				})), s.a.createElement("div", {
					className: Re.a.headerText
				}, r), s.a.createElement("button", {
					className: Re.a.coinButton,
					onClick: e
				}, s.a.createElement("div", {
					className: Re.a.coinBalanceIndicator,
					tabIndex: -1
				}, s.a.createElement(te.a, {
					className: Re.a.coinIcon
				}), s.a.createElement("div", {
					className: Re.a.coinBalance
				}, n)), s.a.createElement("div", {
					className: Re.a.addCoins,
					tabIndex: -1
				}, s.a.createElement(Ge.a, {
					className: Re.a.plusIcon
				}))))
			}
			var Fe = r("./src/reddit/hooks/useLocale.ts"),
				Ue = r("./src/reddit/selectors/experiments/econ/index.ts");
			const {
				fbt: qe
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var Ve = ({
				onCancel: e,
				thingId: t,
				userCoins: r
			}) => {
				const n = Object(Fe.a)(),
					c = Object(K.b)(),
					o = Object(a.e)(e => !r && Boolean(Object(M.h)(e)) && Object(Ue.u)(e)),
					i = o ? qe._("Get free Coins with Premium", null, {
						hk: "3fzsqq"
					}) : Object(Le.a)(r || 0, {
						locale: n
					});
				return s.a.createElement(Be, {
					onCancel: e,
					onButtonClick: () => {
						c(Object(b.clickAddCoinsButtonEvent)(t));
						const e = o ? "/premium" : "/coins";
						window.open(e, "_blank")
					},
					title: qe._("Awards", null, {
						hk: "3w1C6X"
					}),
					buttonText: i
				})
			};
			const He = (e, t) => e.length > f.l.length && !e.find(e => e.award.id === t.id);
			var We = r("./src/reddit/components/GildModalContent/index.m.less"),
				ze = r.n(We);
			const Ke = (e, {
					thingId: t,
					subredditId: r
				}) => {
					let n = r;
					if (!r) {
						const r = Object(B.H)(e, {
							thingId: t
						});
						n = r && r.id
					}
					if (!n && Object(l.a)(t)) {
						const r = Object(G.H)(e, {
							postId: t
						});
						n = r && r.belongsTo.id
					}
					return n
				},
				Je = Object(c.a)(Object(c.c)({
					awardings: (e, {
						thingId: t,
						subredditId: r
					}) => {
						const n = Ke(e, {
							thingId: t,
							subredditId: r
						});
						return n ? Object(A.h)(e, {
							subredditId: n,
							thingId: t
						}) : []
					},
					awardIcons: (e, {
						thingId: t,
						subredditId: r
					}) => {
						const n = Ke(e, {
								thingId: t,
								subredditId: r
							}),
							s = (n ? Object(A.h)(e, {
								subredditId: n,
								thingId: t
							}) : []).map(e => e.award);
						return Object(S.b)(e, {
							awards: s,
							minSize: 128,
							postOrCommentId: t
						})
					},
					awardingsPending: (e, {
						thingId: t,
						subredditId: r
					}) => {
						let n = r;
						if (!r) {
							const r = Object(B.H)(e, {
								thingId: t
							});
							if (!r) return !1;
							n = r.id
						}
						return Object(A.g)(e, {
							subredditId: n,
							thingId: t
						})
					},
					correlationId: e => Object(N.b)(e) || Object(m.e)(m.a.GildingFlow, !1),
					currentUser: F.k,
					errorMessage: N.a,
					isAnonymous: N.f,
					iFramed: N.g,
					isGildPending: N.e,
					isEmployee: F.G,
					isRecommendedCoinPackagePending: M.q,
					message: N.c,
					postOrComment: (e, {
						thingId: t
					}) => Object(l.a)(t) ? Object(G.H)(e, {
						postId: t
					}) : Object(_.b)(e, {
						commentId: t
					}),
					isChatDisabled: (e, {
						thingId: t
					}) => !!Object(l.a)(t) && Object(D.f)(e, {
						streamIdFromPath: t
					}),
					purchaseCatalogPending: M.o,
					showPurchaseModal: R.u,
					selectedAward: L.b,
					subreddit: B.H,
					subredditCoins: (e, {
						thingId: t,
						subredditId: r
					}) => {
						const n = Object(B.H)(e, {
								thingId: t
							}),
							s = n ? n.id : r;
						return Object(B.y)(e, {
							subredditId: s
						})
					},
					tags: (e, {
						thingId: t,
						subredditId: r
					}) => {
						let n = r;
						if (!r) {
							const r = Object(B.H)(e, {
								thingId: t
							});
							n = r && r.id
						}
						if (!n && Object(l.a)(t)) {
							const r = Object(G.H)(e, {
								postId: t
							});
							n = r && r.belongsTo.id
						}
						return n ? Object(A.i)(e, {
							subredditId: n
						}) : []
					},
					userCoins: (e, t) => {
						const r = Object(F.e)(e),
							n = Ke(e, t);
						return r + Object(T.a)(e, {
							subredditId: n
						})
					},
					inViewerFeedTheMeter: (e, {
						thingId: t
					}) => Object(k.g)(e, t, D.l)
				}), e => {
					const {
						awardings: t,
						isEmployee: r,
						postOrComment: n,
						selectedAward: s,
						subredditCoins: a,
						userCoins: c,
						isChatDisabled: o
					} = e, {
						awardType: i,
						coinPrice: d,
						pennyPrice: l
					} = s, m = i === f.f.Moderator, p = !!l || ((m ? a : c) || 0) < d && !(r && !m), b = n && n.media && "rpan" === n.media.type, g = n ? u(t, n) : t;
					return {
						...e,
						awardings: g,
						needPayment: p,
						cost: l || d,
						isRpanPost: !!b,
						isChatDisabled: !!b && o
					}
				});
			class Qe extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showPurchaseModalInThisInstance: !1
					}, this.handleEscapeKey = e => {
						const {
							closeGildModal: t,
							showPurchaseModal: r
						} = this.props;
						if (27 === e.keyCode && !r) return t()
					}, this.toggleIsAnonymous = () => {
						const {
							isAnonymous: e,
							setIsAnonymous: t
						} = this.props;
						t(!e)
					}, this.handleMessageInput = e => {
						this.props.updateMessage(e.target.value)
					}, this.onNeedPayment = () => {
						const {
							cost: e,
							correlationId: t,
							needPaymentRequested: r,
							selectedAward: n,
							sendEvent: s,
							thingId: a
						} = this.props;
						s(Object(b.clickNextButtonEvent)(a)), r({
							awardId: n.id,
							correlationId: t,
							cost: e,
							isPennyPurchase: !!n.pennyPrice,
							thingId: a
						}), this.setState({
							showPurchaseModalInThisInstance: !0
						})
					}, this.onGetPremium = () => {
						const {
							selectedAward: e,
							sendEvent: t,
							thingId: r
						} = this.props;
						t(Object(b.clickGetPremiumEvent)(r, e)), window.open("/premium", d.d.BLANK, d.c)
					}, this.onGildRequested = () => {
						const {
							gildRequested: e,
							iFramed: t,
							isLivestream: r,
							selectedAward: n,
							sendEvent: s,
							thingId: a
						} = this.props;
						return s(Object(b.clickConfirmAwardEvent)(a, n)), e(t, !!r)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey);
					const {
						isAnonymous: e
					} = this.props;
					Object(p.vb)(e)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						awardings: e,
						awardsAndTagsRequested: t,
						correlationId: r,
						isAnonymous: n,
						isRpanPost: s,
						needPayment: a,
						postOrComment: c,
						purchaseCatalogPending: o,
						purchaseCatalogRequested: i,
						selectAward: d,
						selectedAward: l,
						sendEvent: u,
						setIsAnonymous: h,
						subreddit: O,
						subredditAboutRequested: j,
						subredditId: w,
						subredditLockedCoinsRequested: y,
						subredditName: v,
						thingId: E,
						displayUnusableAwardError: I
					} = this.props;
					r || Object(m.e)(m.a.GildingFlow, !1), u(Object(b.viewGildModalEvent)(l.id, n, E)), h(!s && Object(p.q)());
					const x = O ? O.id : w || (c && c.belongsTo ? c.belongsTo.id : void 0);
					if (x && t(x), He(e, l) && (I(), d(f.n)), O || v) {
						j(O ? O.name : v)
					}
					O && O.type !== g.f.User && y(O.id, O.name), a && (l.pennyPrice ? W() : Object(U.a)(), o || i(r))
				}
				componentDidUpdate(e) {
					e.awardingsPending && !this.props.awardingsPending && He(this.props.awardings, this.props.selectedAward) && (this.props.displayUnusableAwardError(), this.props.selectAward(f.n))
				}
				render() {
					const {
						awardings: e,
						awardIcons: t,
						awardingsPending: r,
						className: n,
						closeGildModal: a,
						currentUser: c,
						isAnonymous: o,
						iFramed: d,
						isGildPending: l,
						isRecommendedCoinPackagePending: u,
						isRpanPost: m,
						message: p,
						needPayment: b,
						selectedAward: g,
						sendEvent: h,
						showPurchaseModal: O,
						subreddit: j,
						subredditCoins: w,
						subredditName: y,
						tags: v,
						thingId: E,
						userCoins: I,
						isChatDisabled: x
					} = this.props, {
						showPurchaseModalInThisInstance: C
					} = this.state, P = O && C, _ = P && !g.pennyPrice, A = P && !!g.pennyPrice, k = (_ || A) && !d;
					if (_ && k) return null;
					if (A && k) return s.a.createElement(z, null);
					const N = j ? j.name : y,
						S = !(!c || !c.isGold),
						T = {
							needPayment: b,
							needPremium: !S && g.awardSubType === f.d.Premium,
							onNeedPayment: this.onNeedPayment,
							onGetPremium: this.onGetPremium,
							onGild: this.onGildRequested,
							pending: l || u,
							selectedAward: g,
							thingId: E
						};
					return s.a.createElement("div", {
						className: Object(i.a)(n, ze.a.gildModalContent)
					}, s.a.createElement(Ve, {
						onCancel: a,
						thingId: E,
						userCoins: I
					}), s.a.createElement("div", {
						className: ze.a.modalMainContent
					}, s.a.createElement(Te, {
						awardIcons: t,
						awardTotals: e,
						awardsPending: r,
						premiumUser: S,
						onSelect: this.props.selectAward,
						selectedAward: g,
						sendEvent: h,
						tags: v,
						thingId: E
					}), s.a.createElement(fe, {
						forcePublic: m,
						isAnonymous: o,
						isLivestream: m,
						hideTextArea: x,
						message: p,
						selectedAward: g,
						selectedAwardIcon: t[g.id],
						sendEvent: h,
						thingId: E,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						gildButtonProps: T,
						subredditName: N,
						subredditCoins: w
					})), A && s.a.createElement(z, null))
				}
			}
			t.a = Object(a.b)(Je, (e, {
				author: t,
				profileId: r,
				thingId: n
			}) => ({
				awardsAndTagsRequested: s => e(Object(O.a)(s, n, r && t)),
				closeGildModal: () => e(Object(v.a)()),
				gildRequested: (t, r) => e(Object(w.gildGqlRequested)(n, {
					isOldReddit: t,
					isLivestream: r
				})),
				needPaymentRequested: ({
					awardId: t,
					correlationId: r,
					cost: n,
					isPennyPurchase: s,
					thingId: a
				}) => {
					e(s ? Object(I.b)(n, a, r) : Object(E.d)(t, a, r))
				},
				purchaseCatalogRequested: t => e(Object(x.b)({
					correlationId: t
				})),
				selectAward: t => e(Object(y.a)(t)),
				displayUnusableAwardError: () => e(Object(P.f)({
					kind: h.b.Error,
					duration: P.a,
					text: o.fbt._("This award is not available on this content.", null, {
						hk: "13VV1D"
					})
				})),
				setIsAnonymous: t => {
					e(Object(w.setIsAnonymous)(t)), Object(p.vb)(t)
				},
				subredditAboutRequested: t => e(Object(C.u)(t)),
				subredditLockedCoinsRequested: (t, r) => e(Object(j.a)(t, r)),
				updateMessage: t => e(Object(w.updateMessage)(t))
			}))(Object(K.c)(Qe))
		},
		"./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less": function(e, t, r) {
			e.exports = {
				karmaLink: "_33-F8KNeBDS4RS9mUMQdxH"
			}
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/components/TimeLeft/index.m.less"),
				c = r.n(a),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/timeAgo/index.ts"),
				d = r("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: r
				} = e, n = Math.floor(r.getTime() / 1e3), a = Object(i.b)(n);
				return s.a.createElement("div", {
					className: Object(o.a)(t)
				}, s.a.createElement(d.a, {
					className: c.a.clockIcon
				}), s.a.createElement("span", {
					className: c.a.timeLeft
				}, a))
			}
		},
		"./src/reddit/components/TimeLeft/index.m.less": function(e, t, r) {
			e.exports = {
				clockIcon: "_1DDlcC1o7n-afkLICCzCK9",
				timeLeft: "UN0qnXla79aOGiH-PaULH"
			}
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
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = r.n(c);
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${r}px`
				},
				"data-testid": "LoadingIcon"
			})
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
				s = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				c = r("./src/reddit/constants/headers.ts"),
				o = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				i = r("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: r
			}) => {
				const d = {
						button_id: e,
						correlation_id: r
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(o.a)(l);
				return Object(s.a)(Object(a.a)(t, [c.a]), {
					method: n.jb.POST,
					endpoint: u,
					data: d
				}).then(i.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: o
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: o
				};
				return Object(s.a)(Object(a.a)(e, [c.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(i.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: o,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: o
				};
				return Object(s.a)(Object(a.a)(e, [c.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(i.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: o,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: o,
					pennies: d,
					correlation_id: l
				};
				return Object(s.a)(Object(a.a)(e, [c.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(i.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
				correlationId: o,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: m,
				pennies: p,
				thingId: b
			}) => {
				const f = {
					award_id: e,
					coins: r,
					correlation_id: o,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(s.a)(Object(a.a)(t, [c.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(i.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: o,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: r,
					is_anonymous: o,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(s.a)(Object(a.a)(t, [c.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(i.c)
			}
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
				return s
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return c
			}));
			const n = 500,
				s = 1800,
				a = (e, t = !1) => t ? e.coinPrice < n ? 0 : e.coinPrice < s ? 50 : 100 : 2048,
				c = (e, t, r = !1) => {
					const n = a(t, r);
					return e.slice(0, n)
				}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return o
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				s = r("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(s).toString()
			}

			function c(e, t) {
				return Object(s.b)(parseInt(a(e, t), 10))
			}

			function o(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return r.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/icons/svgs/Advance/index.m.less": function(e, t, r) {
			e.exports = {
				default: "_8j1c5tda8wyYwjTEGlw7C"
			}
		},
		"./src/reddit/icons/svgs/Advance/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/svgs/Advance/index.m.less"),
				o = r.n(c);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(o.a.default, e.className),
				viewBox: "0 0 13 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M6.707 6.707a.997.997 0 000-1.414l-5-5A.999.999 0 10.293 1.707L4.586 6 .293 10.293a.999.999 0 101.414 1.414l5-5zm6 0a.997.997 0 000-1.414l-5-5a.999.999 0 10-1.414 1.414L10.586 6l-4.293 4.293a.999.999 0 101.414 1.414l5-5z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, r) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/svgs/Clock/index.m.less"),
				o = r.n(c);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(o.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), s.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, r) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				c = r("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				o = r.n(c);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				className: Object(a.a)(o.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), s.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), s.a.createElement("path", {
				className: Object(a.a)(o.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), s.a.createElement("path", {
				className: Object(a.a)(o.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), s.a.createElement("defs", null, s.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, s.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), s.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), s.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), s.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function a(e) {
				return s.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, s.a.createElement("g", null, s.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/constants/colors.ts");
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && s.a.createElement("desc", null, e.desc), s.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), s.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? a.a.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, r) {
			"use strict";
			var n;
			r.d(t, "a", (function() {
					return n
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(n || (n = {}))
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/gold/constants.ts");
			const a = {};
			var c = (e = a, t) => {
				switch (t.type) {
					case s.nb: {
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
				subredditLockedCoins: c
			})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return v
			})), r.d(t, "m", (function() {
				return x
			})), r.d(t, "i", (function() {
				return _
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "k", (function() {
				return L
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "f", (function() {
				return R
			})), r.d(t, "a", (function() {
				return B
			})), r.d(t, "j", (function() {
				return F
			})), r.d(t, "b", (function() {
				return U
			})), r.d(t, "e", (function() {
				return q
			})), r.d(t, "g", (function() {
				return V
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/objectSelector/index.ts"),
				a = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = r("./src/reddit/models/PublicAccessNetwork/index.ts"),
				o = r("./src/reddit/selectors/posts.ts"),
				i = r("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = r("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = r.n(d)()(e => Object(s.a)(Object(n.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = r("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				f = e => e.publicAccessNetwork.history,
				g = e => e.publicAccessNetwork.history.cursor,
				h = e => e.publicAccessNetwork.history.visitOrder,
				O = e => e.publicAccessNetwork.hlsStreams,
				j = Object(n.a)(O, e => e.ended),
				w = Object(n.a)(O, e => e.removed),
				y = Object(n.a)(p, j, w, (e, t, r) => {
					const n = t.reduce((e, t) => {
						const r = e[t];
						if (!r) return e;
						const n = r.stream.state,
							s = G(n, c.a.ENDED) ? c.a.ENDED : n,
							a = r.stream.vod_accessible;
						return s === n && !0 === a ? e : {
							...e,
							[t]: {
								...r,
								stream: {
									...r.stream,
									state: s,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return r.reduce((e, t) => {
						const r = e[t];
						if (!r) return e;
						const n = r.stream.state,
							s = G(n, c.a.ENDED) ? c.a.ENDED : n,
							a = r.stream.vod_accessible;
						return s === n && !1 === a ? e : {
							...e,
							[t]: {
								...r,
								stream: {
									...r.stream,
									state: s,
									vod_accessible: !1
								}
							}
						}
					}, n)
				}),
				v = (e, t) => {
					return y(e)[Object(a.g)(t)]
				},
				E = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), y, b, o.h, (e, t, r, n, s) => {
					const o = [];
					if (e) {
						const t = Object(a.g)(e);
						r[t] && o.push(t)
					}
					const i = o.concat(t),
						d = [...new Set(i)],
						l = new Set([...n, ...s]);
					return d.filter(e => {
						const t = r[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== c.a.KILLED && t.stream.state !== c.a.PURGED
					})
				}),
				I = Object(n.a)((e, {
					count: t
				}) => t, y, (e, {
					listingName: t,
					streamIdFromPath: r
				}) => E(e, {
					listingName: t,
					streamIdFromPath: r
				}), (e, t, r) => {
					const n = r.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				x = Object(n.a)(y, I, (e, t) => {
					const r = t[0];
					if (r) return e[r]
				}),
				C = Object(n.a)(h, (e, {
					related: t,
					streamIdFromPath: r,
					subreddit: n
				}) => I(e, {
					listingName: t || n,
					streamIdFromPath: r
				}), (e, t) => {
					const r = new Set(e),
						n = t.filter(e => !r.has(e));
					if (n.length) return n[0]
				}),
				P = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t, y, (e, {
					related: t,
					streamIdFromPath: r,
					subreddit: n
				}) => I(e, {
					listingName: t || n,
					streamIdFromPath: r
				}), f, (e, t, r, n) => {
					if (!r.length) return;
					const s = r.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = s.find(e => e.stream.state === c.a.IS_LIVE);
					if (a) return a.post.id;
					const o = s.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return o ? o.post.id : void 0
				}),
				_ = Object(s.a)(Object(n.a)(P, y, (e, t) => e ? t[e] : void 0)),
				A = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(a.g)(t) : void 0, P, b, o.h, (e, {
					related: t,
					streamIdFromPath: r,
					subreddit: n
				}) => I(e, {
					listingName: t || n,
					streamIdFromPath: r
				}), (e, t, r, n, s) => !e || r.includes(e) || n.includes(e) ? t || s[0] : e),
				k = Object(n.a)(g, h, C, (e, t, r) => e < t.length - 1 ? t[e + 1] : r),
				N = Object(n.a)(g, h, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				S = Object(s.a)(Object(n.a)(A, y, (e, t) => e ? t[e] : void 0)),
				T = Object(s.a)(Object(n.a)(k, y, (e, t) => e ? t[e] : void 0)),
				L = Object(s.a)(Object(n.a)(N, y, (e, t) => e ? t[e] : void 0)),
				M = (Object(s.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, y, (e, t) => Object.keys(e).filter(e => !!t[e]).map(r => ({
					...t[r],
					preloadedPreviewUrl: e[r]
				})))), Object(n.a)(A, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				R = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? v(e, t) : void 0, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function G(e, t) {
				const r = {
					[c.a.NOT_STARTED]: 0,
					[c.a.PUBLISHED]: 1,
					[c.a.IS_LIVE]: 2,
					[c.a.DISCONNECTED]: 2,
					[c.a.ENDED]: 3,
					[c.a.KILLED]: 4,
					[c.a.PURGED]: 4
				};
				return r[t] >= r[e]
			}
			const D = Object(n.a)(A, f, (e, t) => e && t.timestamps[e] || 0);
			var B;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(B || (B = {}));
			const F = Object(n.a)(A, y, m.b, (e, t, r) => {
					if (r) return B.INTRO;
					const n = e && t[e];
					if (!n) return B.UNAVAILABLE;
					const s = n.stream.state;
					return s === c.a.IS_LIVE || s === c.a.DISCONNECTED ? B.LIVE : s === c.a.ENDED && n.stream.vod_accessible ? B.VOD : B.UNAVAILABLE
				}),
				U = Object(n.a)(S, F, m.b, i.b, i.o, (e, t, r, n, s) => r ? n : e ? t === B.LIVE || t === B.VOD ? e.stream.hls_url : s : void 0),
				q = Object(n.a)(S, F, D, (e, t, r) => e ? t === B.LIVE ? e.broadcast_time : t === B.VOD && r < e.broadcast_time ? r : 0 : 0),
				V = (e, t) => {
					const r = p(e);
					return !!r && r[t] && r[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = e => e.publicAccessNetwork.theaterSettings,
				o = Object(n.a)(c, a.n, (e, t) => t && !e.isIntroFinished),
				i = Object(n.a)(c, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + s.a > Date.now()
		},
		"./src/reddit/selectors/gold/econPurchase.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			}));
			var n = r("./src/lib/initializeClient/installReducer.ts"),
				s = r("./src/reddit/reducers/features/econPurchase/index.ts");
			Object(n.a)({
				features: {
					econPurchase: s.a
				}
			});
			const a = (e, {
				subredditId: t
			}) => t && e.features.econPurchase.subredditLockedCoins[t] || 0
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
				return O
			})), r.d(t, "i", (function() {
				return j
			})), r.d(t, "h", (function() {
				return w
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/makeProductOfferKey/index.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				c = r("./src/reddit/models/Payments/index.ts"),
				o = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const i = e => e.subreddits.api.productOffers.pending,
				d = (e, {
					subredditId: t,
					type: r
				}) => {
					var n, a, c;
					return t ? e.subreddits.productOffers[Object(s.a)(r, t)] : null === (c = null === (a = null === (n = e.features) || void 0 === n ? void 0 : n.goldPurchase) || void 0 === a ? void 0 : a.productOffers) || void 0 === c ? void 0 : c[Object(s.a)(r)]
				},
				l = e => {
					const t = d(e, {
						type: a.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
						subredditId: t,
						type: a.c.Powerups
					});
					return null == r ? void 0 : r[0]
				},
				m = Object(n.a)(u, e => null == e ? void 0 : e.pricePackages[0]),
				p = Object(n.a)(m, e => null == e ? void 0 : e.price),
				b = e => {
					const t = d(e, {
						type: a.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				f = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === c.b.PayPal || e[0] === c.b.Stripe)(e.requiredPaymentProviders)) : null,
				g = Object(n.a)(b, o.p, (e, t) => f(e, t) || null),
				h = Object(n.a)(g, (e, {
					provider: t
				}) => t, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				O = Object(n.a)(g, e => (null == e ? void 0 : e[0].price) || null),
				j = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				w = Object(n.a)(j, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"c25f21e6351f"}')
		},
		"./src/redditGQL/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"496275fd4bb6"}')
		},
		"./src/redditGQL/operations/PurchaseCatalogProductOffers.json": function(e) {
			e.exports = JSON.parse('{"id":"4783b146aefa"}')
		},
		"./src/redditGQL/operations/SubredditCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"a82ef253ed10"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedGild~GildModal.c54dc2cc5f07509242d7.js.map