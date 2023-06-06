// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.bece708dea0459e79fe8.js
// Retrieved at 6/6/2023, 5:40:04 PM by Reddit Dataminer v1.0.0
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
						function e(e, t, n, s, a, o) {
							if (o !== r) {
								var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
								throw i.name = "Invariant Violation", i
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

				function o(e) {
					return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					})(e)
				}

				function i(e, t, r) {
					return t in e ? Object.defineProperty(e, t, {
						value: r,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = r, e
				}

				function c(e, t) {
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
						t % 2 ? c(Object(r), !0).forEach((function(t) {
							i(e, t, r[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
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
								for (var o, i = e[Symbol.iterator](); !(n = (o = i.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
							} catch (c) {
								s = !0, a = c
							} finally {
								try {
									n || null == i.return || i.return()
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
						return null !== e && "object" === o(e)
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
									o = Object.keys(r);
								if (a.length !== o.length) return !1;
								for (var i = {}, c = 0; c < a.length; c += 1) i[a[c]] = !0;
								for (var d = 0; d < o.length; d += 1) i[o[d]] = !0;
								var l = Object.keys(i);
								if (l.length !== a.length) return !1;
								var u = t,
									m = r;
								return l.every((function(t) {
									return e(u[t], m[t])
								}))
							}(e[s], t[s]);
							return r.includes(s) ? (a && console.warn("Unsupported prop change: options.".concat(s, " is not a mutable property.")), n) : a ? d(d({}, n || {}), {}, i({}, s, e[s])) : n
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
				var w = function(e) {
					var r = e.stripe,
						n = e.options,
						s = e.children,
						a = t.useRef(!1),
						o = t.useRef(!0),
						i = t.useMemo((function() {
							return g(r)
						}), [r]),
						c = l(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = c[0],
						u = c[1],
						p = m(r);
					null !== p && p !== r && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), a.current || ("sync" === i.tag && (a.current = !0, u({
						stripe: i.stripe,
						elements: i.stripe.elements(n)
					})), "async" === i.tag && (a.current = !0, i.stripePromise.then((function(e) {
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
					}, s)
				};
				w.propTypes = {
					stripe: a.any,
					options: a.object
				};
				var v = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(h), e)
					},
					y = function(e) {
						return (0, e.children)(v("mounts <ElementsConsumer>"))
					};
				y.propTypes = {
					children: a.func.isRequired
				};
				var O = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					j = function() {},
					x = function(e, r) {
						var n, s = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							o = r ? function(e) {
								v("mounts <".concat(s, ">"));
								var r = e.id,
									n = e.className;
								return t.createElement("div", {
									id: r,
									className: n
								})
							} : function(r) {
								var n = r.id,
									a = r.className,
									o = r.options,
									i = void 0 === o ? {} : o,
									c = r.onBlur,
									d = void 0 === c ? j : c,
									l = r.onFocus,
									u = void 0 === l ? j : l,
									p = r.onReady,
									f = void 0 === p ? j : p,
									g = r.onChange,
									h = void 0 === g ? j : g,
									w = r.onEscape,
									y = void 0 === w ? j : w,
									x = r.onClick,
									E = void 0 === x ? j : x,
									I = v("mounts <".concat(s, ">")).elements,
									C = t.useRef(null),
									P = t.useRef(null),
									_ = O(f),
									k = O(d),
									A = O(u),
									N = O(E),
									S = O(h),
									T = O(y);
								t.useLayoutEffect((function() {
									if (null == C.current && I && null != P.current) {
										var t = I.create(e, i);
										C.current = t, t.mount(P.current), t.on("ready", (function() {
											return _(t)
										})), t.on("change", S), t.on("blur", k), t.on("focus", A), t.on("escape", T), t.on("click", N)
									}
								}));
								var M = m(i);
								return t.useEffect((function() {
									if (C.current) {
										var e = b(i, M, ["paymentRequest"]);
										e && C.current.update(e)
									}
								}), [i, M]), t.useLayoutEffect((function() {
									return function() {
										C.current && C.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
									className: a,
									ref: P
								})
							};
						return o.propTypes = {
							id: a.string,
							className: a.string,
							onChange: a.func,
							onBlur: a.func,
							onFocus: a.func,
							onReady: a.func,
							onClick: a.func,
							options: a.object
						}, o.displayName = s, o.__elementType = e, o
					},
					E = "undefined" == typeof window,
					I = x("auBankAccount", E),
					C = x("card", E),
					P = x("cardNumber", E),
					_ = x("cardExpiry", E),
					k = x("cardCvc", E),
					A = x("fpxBank", E),
					N = x("iban", E),
					S = x("idealBank", E),
					T = x("p24Bank", E),
					M = x("epsBank", E),
					L = x("payment", E),
					B = x("paymentRequestButton", E),
					G = x("linkAuthentication", E),
					R = x("shippingAddress", E),
					F = x("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = F, e.AuBankAccountElement = I, e.CardCvcElement = k, e.CardElement = C, e.CardExpiryElement = _, e.CardNumberElement = P, e.Elements = w, e.ElementsConsumer = y, e.EpsBankElement = M, e.FpxBankElement = A, e.IbanElement = N, e.IdealBankElement = S, e.LinkAuthenticationElement = G, e.P24BankElement = T, e.PaymentElement = L, e.PaymentRequestButtonElement = B, e.ShippingAddressElement = R, e.useElements = function() {
					return v("calls useElements()").elements
				}, e.useStripe = function() {
					return v("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, r("./node_modules/react/index.js"))
		},
		"./node_modules/bowser/src/bowser.js": function(e, t, r) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function r(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[1] || ""
					}

					function n(e) {
						var r = t.match(e);
						return r && r.length > 1 && r[2] || ""
					}
					var s, a = r(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						f = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						g = !a && !l && /macintosh/i.test(t),
						h = !o && !u && !m && !p && /linux/i.test(t),
						w = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = r(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !y && /[^-]mobi/i.test(t),
						j = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: v || r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: v || r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? s = {
						name: "UC Browser",
						ucbrowser: e,
						version: r(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? s = {
						name: "Maxthon",
						maxthon: e,
						version: r(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? s = {
						name: "Epiphany",
						epiphany: e,
						version: r(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? s = {
						name: "Puffin",
						puffin: e,
						version: r(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? s = {
						name: "Sleipnir",
						sleipnir: e,
						version: r(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? s = {
						name: "K-Meleon",
						kMeleon: e,
						version: r(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, w ? (s.msedge = e, s.version = w) : (s.msie = e, s.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: r(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: w
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: r(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : u ? s = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: r(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? s = {
						name: "SeaMonkey",
						seamonkey: e,
						version: r(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (s = {
						name: "Firefox",
						firefox: e,
						version: r(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : l ? s = {
						name: "Amazon Silk",
						silk: e,
						version: r(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? s = {
						name: "PhantomJS",
						phantom: e,
						version: r(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? s = {
						name: "SlimerJS",
						slimer: e,
						version: r(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? s = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: v || r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: r(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? s = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, v && (s.version = v)) : a ? (s = {
						name: "iphone" == a ? "iPhone" : "ipad" == a ? "iPad" : "iPod"
					}, v && (s.version = v)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: r(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: r(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && v && (s.version = v)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || r(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !o && !s.silk ? !s.windowsphone && a ? (s[a] = e, s.ios = e, s.osname = "iOS") : g ? (s.mac = e, s.osname = "macOS") : j ? (s.xbox = e, s.osname = "Xbox") : f ? (s.windows = e, s.osname = "Windows") : h && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var x = "";
					s.windows ? x = function(e) {
						switch (e) {
							case "NT":
								return "NT";
							case "XP":
								return "XP";
							case "NT 5.0":
								return "2000";
							case "NT 5.1":
								return "XP";
							case "NT 5.2":
								return "2003";
							case "NT 6.0":
								return "Vista";
							case "NT 6.1":
								return "7";
							case "NT 6.2":
								return "8";
							case "NT 6.3":
								return "8.1";
							case "NT 10.0":
								return "10";
							default:
								return
						}
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? x = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? x = (x = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : a ? x = (x = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? x = r(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? x = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? x = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? x = r(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (x = r(/tizen[\/\s](\d+(\.\d+)*)/i)), x && (s.osversion = x);
					var E = !s.windows && x.split(".")[0];
					return y || c || "ipad" == a || o && (3 == E || E >= 4 && !O) || s.silk ? s.tablet = e : (O || "iphone" == a || "ipod" == a || o || i || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var r = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var r, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (r = 0; r < e.length; r++) n.push(t(e[r]));
					return n
				}

				function a(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), r = s(e, (function(e) {
							var r = t - n(e);
							return s((e += new Array(r + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (r[0][t] > r[1][t]) return 1;
						if (r[0][t] !== r[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function o(e, n, s) {
					var o = r;
					"string" == typeof n && (s = n, n = void 0), void 0 === n && (n = !1), s && (o = t(s));
					var i = "" + o.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && o[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return a([i, e[c]]) < 0
						} return n
				}
				return r.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in r) return !0
					}
					return !1
				}, r.isUnsupportedBrowser = o, r.compareVersions = a, r.check = function(e, t, r) {
					return !o(e, t, r)
				}, r._detect = t, r.detect = t, r
			}, e.exports ? e.exports = n() : r("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, r) {
				return e == e && (void 0 !== r && (e = e <= r ? e : r), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, r, n, s) {
				return s(e, (function(e, s, a) {
					r = n ? (n = !1, e) : t(r, e, s, a)
				})), r
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_baseClamp.js"),
				s = r("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, r) {
				return void 0 === r && (r = t, t = void 0), void 0 !== r && (r = (r = s(r)) == r ? r : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), n(s(e), t, r)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, r) {
			var n = r("./node_modules/lodash/_arrayReduce.js"),
				s = r("./node_modules/lodash/_baseEach.js"),
				a = r("./node_modules/lodash/_baseIteratee.js"),
				o = r("./node_modules/lodash/_baseReduce.js"),
				i = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, r) {
				var c = i(e) ? n : o,
					d = arguments.length < 3;
				return c(e, a(t, 4), r, d, s)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
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
				return o
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "f", (function() {
				return c
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
				o = "ETH",
				i = "COINS",
				c = [o, "BTC"],
				d = [i, "SUBREDDIT_POINTS", "GAME_TOKENS"],
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
				o = r("./src/lib/prettyPrintNumber/index.ts"),
				i = r("./src/reddit/helpers/governance/tokens.ts"),
				c = r("./src/reddit/constants/intlSupport.ts");
			const d = function(e) {
					let {
						locale: t = n.DEFAULT_LOCALE,
						pretty: r,
						formatOptions: s
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const a = Number(e);
					return Object(c.c)() ? r ? Object(o.b)(a) : new Intl.NumberFormat(t, s).format(a) : u(a, r, t)
				},
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: r = n.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: b,
						currency: f = t.currency || (t.type ? p(t.type) : a.c),
						type: g = t.type || (t.currency ? m(t.currency) : a.b.Real)
					} = t, h = Number(e), w = String(e);
					switch (g) {
						case a.b.Reddit: {
							const e = a.e[f],
								t = e ? e() : f;
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(h) + " " + t : u(h, o, r, t)
						}
						case a.b.Crypto: {
							if (o) {
								return Object(i.d)(w, l) + " " + f
							}
							const e = Number(Object(i.c)(w, l));
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: f,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, o, r, f)
						}
						case a.b.Real:
						default: {
							const e = Number(Object(s.a)(w, b));
							return Object(c.c)() ? new Intl.NumberFormat(r, {
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
				s = r("./src/reddit/reducers/features/econPurchase/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/makeGqlRequest/index.ts"),
				i = r("./src/redditGQL/operations/SubredditCoins.json");
			var c = r("./src/reddit/featureFlags/subredditPoints.ts"),
				d = r("./src/reddit/actions/gold/constants.ts");
			Object(n.a)({
				features: {
					econPurchase: s.a
				}
			});
			const l = Object(a.a)(d.lb),
				u = (e, t, r) => async (n, s, a) => {
					let {
						gqlContext: d
					} = a;
					var u, m;
					if (!c.a.has(t.toLowerCase())) return;
					if (void 0 !== s().features.econPurchase.subredditLockedCoins[e] && !(null == r ? void 0 : r.force)) return;
					const p = await ((e, t) => Object(o.a)(e, {
						...i,
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
				return K
			})), r.d(t, "updateMessage", (function() {
				return V
			})), r.d(t, "gildGqlRequested", (function() {
				return H
			})), r.d(t, "triggerLoader", (function() {
				return Q
			})), r.d(t, "gildPending", (function() {
				return X
			})), r.d(t, "gildFailed", (function() {
				return Z
			})), r.d(t, "gildSuccessful", (function() {
				return te
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/postParentMessage/index.ts"),
				o = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				c = r("./src/reddit/actions/modal.ts"),
				d = r("./src/reddit/actions/profile/index.ts"),
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
			var w = r("./src/reddit/constants/modals.ts"),
				v = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/models/User/index.ts"),
				O = r("./src/reddit/selectors/commentSelector.ts"),
				j = r("./src/reddit/selectors/communityAwards.ts"),
				x = r("./src/reddit/selectors/gild.ts"),
				E = r("./src/reddit/selectors/gold/awardIcon.ts"),
				I = r("./src/reddit/selectors/gold/econPurchase.ts"),
				C = r("./src/reddit/selectors/posts.ts"),
				P = r("./src/reddit/selectors/subreddit.ts"),
				_ = r("./src/reddit/selectors/user.ts"),
				k = r("./src/reddit/endpoints/awards/index.ts"),
				A = r("./src/lib/makeGqlRequest/index.ts"),
				N = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				S = r("./src/redditGQL/operations/GildComment.json"),
				T = r("./src/redditGQL/operations/GildPost.json");
			const M = (e, t, r) => Object(A.a)(e, {
					...T,
					variables: t
				}, {
					query: r ? {} : Object(N.b)()
				}),
				L = (e, t, r) => Object(A.a)(e, {
					...S,
					variables: t
				}, {
					query: r ? {} : Object(N.b)()
				});
			var B = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				G = r("./src/reddit/helpers/awards/message.ts"),
				R = r("./src/reddit/helpers/correlationIdTracker.ts"),
				F = r("./src/reddit/helpers/isPost.ts"),
				q = r("./src/reddit/helpers/trackers/gild.ts"),
				D = r("./src/telemetry/index.ts"),
				U = r("./src/reddit/endpoints/profile/info.ts"),
				W = r("./src/reddit/actions/gold/constants.ts"),
				z = r("./src/reddit/actions/gold/econPurchase.ts");
			const K = Object(s.a)(W.r),
				V = Object(s.a)(W.v),
				H = (e, t) => async (r, s) => {
					const a = s(),
						o = !Object(F.a)(e) && Object(O.g)(a, {
							commentId: e
						});
					r(X());
					try {
						o ? await r(((e, t) => {
							let {
								isOldReddit: r
							} = t;
							return async (t, n, s) => {
								let {
									gqlContext: a
								} = s;
								const o = n(),
									{
										selectedAward: i,
										message: c,
										isAnonymous: d
									} = o.gild,
									l = Object(x.b)(o) || Object(R.d)(R.a.GildingFlow, !1),
									{
										receivedKarma: u
									} = await Object(k.b)(a(), {
										targetId: e,
										awardId: i.id,
										isAnonymous: d,
										nonce: l,
										message: Object(G.b)(c)
									}, r),
									m = await Object(k.a)(a(), {
										thingId: e
									}, r);
								await t(te({
									id: e,
									awardId: i.id,
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
							return async (t, s, a) => {
								let {
									gqlContext: o
								} = a;
								const i = s().gild,
									c = {
										gildingTypeId: i.selectedAward.id,
										isAnonymous: i.isAnonymous,
										isGildFunded: !1,
										message: Object(G.b)(i.message),
										nodeId: e
									},
									d = Object(F.a)(e) ? M : L,
									l = await d(o(), {
										input: c
									}, r);
								let u = !1,
									m = null,
									p = null;
								if (l.ok) {
									const e = l.body;
									u = e.data.gild.ok, m = e.data.gild.fieldErrors, p = e.data.gild.errors
								}
								if (u) {
									const r = l.body,
										{
											gild: n
										} = r.data,
										s = Object(F.a)(e) ? l.body.data.gild.postInfo : l.body.data.gild.comment,
										{
											awardings: a,
											treatmentTags: o
										} = s;
									await t(te({
										awardId: i.selectedAward.id,
										awardings: a,
										awardKarmaReceived: n.awardKarmaReceived,
										coins: n.coins,
										id: e,
										subredditCoins: n.subredditCoins,
										treatmentTags: o
									}))
								} else {
									const e = null == m ? void 0 : m[0].message,
										r = null == p ? void 0 : p[0].message,
										s = e || r || n.fbt._("An unknown error occurred", null, {
											hk: "2oAbwZ"
										});
									await t(Z(s))
								}
							}
						})(e, t))
					} catch (i) {
						const e = i,
							t = e && e.message || n.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await r(Z(t))
					} finally {
						Object(R.b)(R.a.GildingFlow)
					}
				}, Q = Object(s.a)(W.u), J = Object(s.a)(W.q), X = () => async (e, t) => {
					e(J()), window.setTimeout(() => {
						t().gild.api.pending && e(Q())
					}, 2e3)
				}, Y = Object(s.a)(W.p), Z = e => async (t, r) => {
					await t(Y(e)), t(Object(l.f)({
						kind: v.b.Error,
						duration: l.a,
						text: e
					}))
				}, $ = Object(s.a)(W.s), ee = (e, t) => {
					const {
						id: r
					} = t, n = Object(F.a)(r) ? Object(C.F)(e, {
						postId: r
					}) : Object(O.c)(e, {
						commentId: r
					}), s = Object(_.m)(e), a = e.gild, {
						isAnonymous: o
					} = a, i = !o && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, c = n ? n.author : void 0, d = Object(P.O)(e, {
						thingId: r
					});
					return $({
						...t,
						gilder: i,
						gildee: c,
						subredditId: d && d.id
					})
				}, te = e => async (t, r) => {
					const s = r(),
						{
							awardId: u,
							id: m
						} = e,
						b = Object(j.a)(s, u),
						f = e.awardKarmaReceived,
						g = Object(_.m)(s),
						O = Object(x.b)(s) || Object(R.d)(R.a.GildingFlow, !1);
					if (Object(x.g)(s)) {
						const e = "success.gild",
							t = {},
							r = Object(E.a)(s, {
								award: b,
								minSize: 32,
								postOrCommentId: m
							});
						t.awardId = u, t.awardIcon = r, t.awardName = b.name, Object(a.a)({
							type: e,
							data: t
						})
					}
					if (b.awardType === p.e.Moderator && void 0 === e.subredditCoins) {
						const t = Object(P.O)(s, {
								thingId: m
							}),
							r = t && Object(P.F)(s, {
								subredditName: t.name
							});
						r && (e.subredditCoins = r - b.coinPrice)
					}
					if (t(ee(s, e)), g) {
						const r = {
								...U.a,
								...g.karma
							},
							n = r.fromAwardsReceived + e.awardKarmaReceived,
							s = Object(y.e)(g);
						t(Object(d.f)({
							coins: e.coins
						})), t(Object(d.h)({
							userName: s,
							karma: {
								...r,
								fromAwardsReceived: n
							}
						}))
					}(s.posts.instances[m] || []).forEach(r => {
						t(ee(s, {
							...e,
							id: r
						}))
					});
					const C = Object(F.a)(m) ? n.fbt._("Success! You have given this post the {awardName} Award", [n.fbt._param("awardName", b.name)], {
							hk: "1Ndi4Z"
						}) : n.fbt._("Success! You have given this comment the {awardName} Award", [n.fbt._param("awardName", b.name)], {
							hk: "2sIK9Y"
						}),
						k = b.coinPrice;
					Object(D.a)(Object(q.viewKarmaSuccessEvent)({
						award: b,
						awarderKarmaEarned: f,
						awardeeKarmaEarned: 0,
						numberCoins: k,
						thingId: m
					})(s)), t(Object(c.g)(w.a.GOLD_GILD_MODAL));
					const A = Object(E.a)(s, {
						award: b,
						minSize: 64,
						postOrCommentId: m
					});
					t(Object(l.f)({
						customIconAsset: A,
						kind: v.b.SuccessAward,
						text: f > 0 ? h({
							awarderKarmaReceived: f
						}) : C
					})), setTimeout(() => {
						const e = Object(B.a)(u, m),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10), await t(Object(i.b)({
						correlationId: O,
						forceLoad: !0
					}));
					const N = Object(P.O)(s, {
						thingId: m
					});
					N && Object(I.a)(s, {
						subredditId: N.id
					}) && t(Object(z.a)(N.id, N.name, {
						force: !0
					})), 0 === k && N && t(Object(o.a)(N.id, m, void 0, !0))
				}
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return d
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/reddit/actions/modal.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				o = r("./src/reddit/actions/gold/constants.ts");
			const i = Object(n.a)(o.eb),
				c = Object(n.a)(o.t),
				d = e => async t => {
					await t(c({
						id: e
					})), t(Object(s.h)(a.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return I
			})), r.d(t, "a", (function() {
				return C
			})), r.d(t, "c", (function() {
				return P
			})), r.d(t, "h", (function() {
				return _
			})), r.d(t, "g", (function() {
				return k
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "e", (function() {
				return N
			})), r.d(t, "f", (function() {
				return S
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/formatApiError/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				f = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				g = r("./src/reddit/models/Gold/Award.ts"),
				h = r("./src/reddit/models/Gold/ProductOffer.ts"),
				w = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/selectors/experiments/econ/index.ts"),
				y = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				O = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const x = Object(a.a)(j.u),
				E = Object(a.a)(j.c),
				I = e => async (t, r) => {
					const n = r();
					Object(v.d)(n) || (t(x(e)), t(Object(l.h)(i.a.ECON_COIN_PURCHASE)))
				}, C = () => async (e, t) => {
					e(E()), e(Object(l.g)(i.a.ECON_COIN_PURCHASE))
				}, P = (e, t, r) => async (s, a) => {
					await s(Object(d.c)());
					const o = a(),
						i = Object(y.m)(o, e);
					if (i) s(I({
						correlationId: r,
						packageId: i,
						thingId: t
					}));
					else {
						const e = Object(y.k)(o),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						s(Object(u.f)({
							kind: w.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, _ = (e, t, r) => async (a, o, i) => {
					let {
						apiContext: d
					} = i;
					const l = o(),
						{
							coins: u,
							pennies: m
						} = r,
						f = Object(O.s)(l) || Object(b.d)(b.a.GoldPayment, !1);
					let g, w;
					a(Object(c.stripeTokenPending)());
					const v = Object(O.z)(l);
					if (v || (g = await a(Object(c.validateAndCreateStripeToken)(e, t)), w = Object(O.w)(l), g)) try {
						const e = await Object(p.d)({
							coins: u,
							context: d(),
							correlationId: f,
							offerContext: Object(h.d)(r, !1),
							pennies: m,
							rememberCard: w,
							savedCardId: v || void 0,
							token: g
						});
						if (e.error) {
							const t = Object(s.a)(e.error, e.status);
							return void a(Object(c.stripeApiError)(t))
						}
						return a(Object(c.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (y) {
						const e = Object(s.a)(y);
						a(Object(c.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						a(Object(c.stripeApiError)(e))
					}
				}, k = (e, t, a, o) => async (i, d, l) => {
					let {
						apiContext: u
					} = l;
					const m = d(),
						{
							coins: w,
							pennies: v
						} = a,
						y = Object(O.s)(m) || Object(b.d)(b.a.GoldPayment, !1);
					let j, x;
					i(Object(c.stripeTokenPending)());
					const E = Object(O.z)(m);
					if (E || (j = await i(Object(c.validateAndCreateStripeToken)(e, t)), x = Object(O.w)(m), j)) try {
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
							return void i(Object(c.stripeApiError)(e))
						}
						const O = l.id,
							I = {
								gildType: O,
								isAnonymous: t,
								message: d
							},
							P = await Object(p.c)({
								coins: w,
								context: u(),
								correlationId: y,
								gildParams: I,
								isOldReddit: o,
								offerContext: Object(h.d)(a, !0),
								pennies: v,
								rememberCard: x,
								savedCardId: E || void 0,
								thingId: e,
								token: j
							});
						if (P.error) {
							const e = Object(s.a)(P.error, P.status);
							return void i(Object(c.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							i(C()), i(Object(c.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: s,
								coins: a,
								treatment_tags: o
							} = P.body;
							return i(t({
								awardKarmaReceived: n || 0,
								awardId: O,
								awardings: s && s.length ? Object(f.a)(s).map(e => ({
									award: Object(g.i)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: o
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (I) {
						const e = Object(s.a)(I);
						i(Object(c.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						i(Object(c.stripeApiError)(e))
					}
				}, A = e => async (t, r, n) => {
					let {
						apiContext: a
					} = n;
					const i = Object(b.c)(b.a.GoldPayment),
						{
							coins: d,
							pennies: l
						} = e;
					try {
						const e = await Object(m.a)({
							context: a(),
							coins: d,
							pennies: l,
							correlationId: i
						});
						if (e.error) {
							const r = Object(s.a)(e.error);
							return void t(Object(c.paypalApiError)(r))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (u) {
						o.c.captureException(u);
						const e = Object(s.a)(u);
						t(Object(c.paypalApiError)(e))
					}
				}, N = (e, t) => async (r, n, a) => {
					let {
						apiContext: i
					} = a;
					const d = n(),
						l = Object(O.s)(d) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: u,
							pennies: p
						} = t;
					try {
						const n = await Object(m.c)({
							context: i(),
							offerContext: Object(h.d)(t, !1),
							orderId: e,
							coins: u,
							pennies: p,
							correlationId: l
						});
						if (n.error) {
							const e = Object(s.a)(n.error);
							return void r(Object(c.paypalApiError)(e))
						} {
							const {
								coins: e
							} = n.body;
							r(Object(c.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (f) {
						o.c.captureException(f);
						const e = Object(s.a)(f);
						r(Object(c.paypalApiError)(e))
					}
				}, S = (e, t) => async (a, i, d) => {
					let {
						apiContext: l
					} = d;
					const u = i(),
						p = Object(O.s)(u) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: w,
							pennies: v
						} = t;
					try {
						const {
							gildModalThingId: o,
							isAnonymous: i,
							message: d,
							selectedAward: y
						} = u.gild;
						if (!o || !y) return void a(Object(c.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const O = y.id,
							j = await Object(m.d)({
								context: l(),
								offerContext: Object(h.d)(t, !0),
								orderId: e,
								coins: w,
								pennies: v,
								thingId: o,
								awardId: O,
								message: d || "",
								isAnonymous: i,
								correlationId: p
							});
						if (j.error) {
							const e = Object(s.a)(j.error);
							a(Object(c.paypalApiError)(e))
						} else {
							a(C());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: s,
								treatment_tags: i
							} = j.body;
							a(Object(c.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(d({
								awardId: O,
								awardKarmaReceived: t || 0,
								awardings: Object(f.a)(e).map(e => ({
									award: Object(g.i)(e),
									total: e.count
								})),
								coins: n,
								id: o,
								subredditCoins: s,
								treatmentTags: i
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (y) {
						o.c.captureException(y);
						const e = Object(s.a)(y);
						a(Object(c.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return c
			})), r.d(t, "paymentCompleted", (function() {
				return d
			})), r.d(t, "cardNameInput", (function() {
				return l
			})), r.d(t, "postalCodeInput", (function() {
				return u
			})), r.d(t, "cardNameEmpty", (function() {
				return m
			})), r.d(t, "postalCodeEmpty", (function() {
				return p
			})), r.d(t, "cardNumberChange", (function() {
				return b
			})), r.d(t, "cardExpiryChange", (function() {
				return f
			})), r.d(t, "cardCvcChange", (function() {
				return g
			})), r.d(t, "stripeTokenPending", (function() {
				return h
			})), r.d(t, "stripeTokenError", (function() {
				return w
			})), r.d(t, "stripeApiError", (function() {
				return v
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return y
			})), r.d(t, "paypalApiError", (function() {
				return O
			})), r.d(t, "toggleRememberCard", (function() {
				return j
			})), r.d(t, "selectSavedCard", (function() {
				return x
			})), r.d(t, "deleteSavedCard", (function() {
				return E
			})), r.d(t, "savedCardsPending", (function() {
				return I
			})), r.d(t, "savedCardsSuccess", (function() {
				return C
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const c = Object(a.a)(i.G),
				d = Object(a.a)(i.A),
				l = Object(a.a)(i.b),
				u = Object(a.a)(i.D),
				m = Object(a.a)(i.a),
				p = Object(a.a)(i.C),
				b = Object(a.a)(i.L),
				f = Object(a.a)(i.K),
				g = Object(a.a)(i.J),
				h = Object(a.a)(i.N),
				w = Object(a.a)(i.M),
				v = Object(a.a)(i.I),
				y = (e, t) => async (r, a) => {
					const i = a(),
						c = Object(o.h)(i),
						d = Object(o.l)(i),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: b
					} = await e.createToken(l, {
						name: c,
						address_zip: d
					}), f = !d.trim();
					if (f) {
						const e = s.fbt._("Your ZIP code is incomplete", null, {
							hk: "4bttPr"
						});
						r(p({
							message: e
						}))
					}
					b && r(w(b));
					const g = !c.trim();
					if (g) {
						const e = s.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(m({
							message: e
						}))
					}
					return f || b || g ? void 0 : u
				}, O = Object(a.a)(i.B), j = Object(a.a)(i.O), x = Object(a.a)(i.H), E = Object(a.a)(i.g), I = Object(a.a)(i.E), C = Object(a.a)(i.F)
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return g
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "e", (function() {
				return v
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "c", (function() {
				return O
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/formatApiError/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				c = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				d = r("./src/reddit/endpoints/gold/purchase.ts"),
				l = r("./src/reddit/helpers/correlationIdTracker.ts"),
				u = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				m = r("./src/reddit/models/Gold/Award.ts"),
				p = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const f = Object(a.a)(b.v),
				g = Object(a.a)(b.d),
				h = Object(a.a)(b.w),
				w = (e, t, r) => async e => {
					e(h({
						thingId: t
					})), e(f({
						correlationId: r
					}))
				}, v = (e, t, a) => async (o, c, b) => {
					let {
						apiContext: f
					} = b;
					const h = c(),
						w = Object(l.c)(l.a.GoldPayment);
					let v, y;
					o(Object(i.stripeTokenPending)());
					const O = Object(p.z)(h);
					if (O || (v = await o(Object(i.validateAndCreateStripeToken)(e, t)), y = Object(p.w)(h), v)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: c,
							selectedAward: l
						} = h.gild;
						if (!e || !l.id) return void o(Object(i.stripeApiError)(n.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const p = l.id,
							b = l.pennyPrice;
						if (!b) return void o(Object(i.stripeApiError)(n.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const j = {
								gildType: p,
								isAnonymous: t,
								message: c
							},
							x = await Object(d.e)({
								context: f(),
								correlationId: w,
								gildParams: j,
								isOldReddit: a,
								pennies: b,
								rememberCard: y,
								savedCardId: O || void 0,
								thingId: e,
								token: v
							});
						if (x.error) {
							const e = Object(s.a)(x.error, x.status);
							return void o(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await Promise.resolve().then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(g()), o(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: n,
								awarder_karma_received: s,
								coins: a,
								treatment_tags: c
							} = x.body;
							return void o(t({
								awardKarmaReceived: s || 0,
								awardId: p,
								awardings: n && n.length ? Object(u.a)(n).map(e => ({
									award: Object(m.i)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: c
							}))
						}
					} catch (j) {
						const e = Object(s.a)(j);
						o(Object(i.stripeApiError)(e))
					} else o(Object(i.stripeApiError)(n.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, y = (e, t, r) => async (n, a, d) => {
					let {
						apiContext: u
					} = d;
					const m = Object(l.c)(l.a.GoldPayment);
					try {
						const a = await Object(c.b)({
							context: u(),
							awardId: e,
							pennies: t,
							thingId: r,
							correlationId: m
						});
						if (a.error) {
							const e = Object(s.a)(a.error);
							return void n(Object(i.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = a.body;
							return e
						}
					} catch (p) {
						o.c.captureException(p);
						const e = Object(s.a)(p);
						n(Object(i.paypalApiError)(e))
					}
				}, O = e => async (t, a, d) => {
					let {
						apiContext: p
					} = d;
					const b = a(),
						f = Object(l.c)(l.a.GoldPayment);
					try {
						const {
							gildModalThingId: a,
							isAnonymous: o,
							message: d,
							selectedAward: l
						} = b.gild;
						if (!a || !l) return void t(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const h = l.id,
							w = await Object(c.e)({
								awardId: h,
								context: p(),
								orderId: e,
								thingId: a,
								message: d || "",
								isAnonymous: o,
								correlationId: f
							});
						if (w.error) {
							const e = Object(s.a)(w.error);
							t(Object(i.paypalApiError)(e))
						} else {
							t(g());
							const {
								all_awardings: e,
								awarder_karma_received: n,
								coins: s,
								subreddit_coins: o,
								treatment_tags: c
							} = w.body;
							t(Object(i.paymentCompleted)({
								coins: s,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await Promise.resolve().then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(d({
								awardKarmaReceived: n || 0,
								awardId: h,
								awardings: Object(u.a)(e).map(e => ({
									award: Object(m.i)(e),
									total: e.count
								})),
								coins: s,
								id: a,
								subredditCoins: o,
								treatmentTags: c
							}))
						}
					} catch (h) {
						o.c.captureException(h);
						const e = Object(s.a)(h);
						t(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return y
			})), r.d(t, "c", (function() {
				return O
			})), r.d(t, "a", (function() {
				return x
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/env/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				c = r("./src/reddit/actions/toaster.ts"),
				d = r("./src/reddit/models/Toast/index.ts"),
				l = r("./src/reddit/actions/post.ts"),
				u = r("./src/lib/makeGqlRequest/index.ts"),
				m = r("./src/reddit/actions/economics/powerups/helpers.ts"),
				p = r("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var b = r("./src/reddit/selectors/gold/productOffers.ts"),
				f = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(a.a)(f.m);
			const g = Object(a.a)(f.o),
				h = Object(a.a)(f.n),
				w = Object(a.a)(f.i),
				v = Object(a.a)(f.j),
				y = e => async (t, r, a) => {
					let {
						gqlContext: i
					} = a;
					const c = r(),
						d = Object(b.a)(c);
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
							})(i());
							t(w(e.data.coinpacks.offers[0])), t(v(e.data.premium.offers[0]))
						} catch (l) {
							Object(s.b)() || console.error(l), o.c.captureException(l);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(h(e))
						}
					}
				}, O = () => async e => e(y()), j = Object(a.a)(f.h), x = () => async (e, t, r) => {
					let {
						gqlContext: a
					} = r;
					var u, m;
					try {
						const t = await Object(i.a)(a());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (u = r.errors) || void 0 === u ? void 0 : u.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (m = r.awards) || void 0 === m ? void 0 : m.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(j({
								awards: r.awards
							})), e(Object(l.A)())
						}
					} catch (p) {
						Object(s.b)() || console.error(p), e(Object(c.f)({
							kind: d.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), o.c.captureException(p)
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
				banner: "_2DXf1id0rEhidKxC88jyko"
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
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./node_modules/fbt/lib/FbtPublic.js"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/opener/index.ts"),
				l = r("./src/reddit/helpers/isPost.ts");
			var u = (e, t) => {
					return Object(l.a)(t) ? e.filter(e => !(e => e.some(e => e.startsWith("econ:transferable:econ:render:")))(e.award.tags || [])) : e
				},
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/localStorage/index.ts"),
				b = r("./src/reddit/helpers/trackers/gild.ts"),
				f = r("./src/reddit/models/Gold/Award.ts"),
				g = r("./src/reddit/models/Subreddit/index.ts"),
				h = r("./src/reddit/models/Toast/index.ts"),
				w = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				v = r("./src/reddit/actions/gold/econPurchase.ts"),
				y = r("./src/reddit/actions/gold/gild.ts"),
				O = r("./src/reddit/actions/gold/giveAward.ts"),
				j = r("./src/reddit/actions/gold/modals.ts"),
				x = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				E = r("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				I = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				C = r("./src/reddit/actions/subreddit.ts"),
				P = r("./src/reddit/actions/toaster.ts"),
				_ = r("./src/reddit/selectors/commentSelector.ts"),
				k = r("./src/reddit/selectors/communityAwards.ts"),
				A = r("./src/reddit/selectors/gild.ts"),
				N = r("./src/reddit/selectors/gold/awardIcon.ts"),
				S = r("./src/reddit/selectors/gold/econPurchase.ts"),
				T = r("./src/reddit/selectors/gold/giveAwards.ts"),
				M = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				L = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				B = r("./src/reddit/selectors/posts.ts"),
				G = r("./src/reddit/selectors/subreddit.ts"),
				R = r("./src/reddit/selectors/user.ts"),
				F = r("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				q = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/higherOrderComponents/makeAsync.tsx")),
				D = r("./src/lib/loadWithRetries/index.ts"),
				U = r("./src/reddit/helpers/loadThirdPartyScript.ts");
			const W = () => Object(D.a)(() => Promise.all([r.e("PennyPurchaseModal").then(r.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(U.d)().catch(() => {})])).then(e => e[0].default);
			var z = Object(q.a)({
					getComponent: W,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				K = r("./src/reddit/components/TrackingHelper/index.tsx"),
				V = r("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				H = r.n(V),
				Q = r("./src/reddit/helpers/awards/message.ts"),
				J = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				X = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				Y = r("./src/reddit/icons/svgs/Eye/index.tsx"),
				Z = r("./src/reddit/icons/svgs/Moderate/index.tsx"),
				$ = r("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				ee = r("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				te = r("./src/reddit/icons/fonts/Coin/index.tsx");
			const re = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return s.a.createElement(s.a.Fragment, null, e.map((e, t) => 0 === t ? e : s.a.createElement(s.a.Fragment, {
						key: t + e
					}, s.a.createElement(te.a, null), e)))
				}
				return null
			};
			class ne extends s.a.PureComponent {
				render() {
					const {
						award: e,
						awardIcon: t,
						className: r
					} = this.props, n = !!e.pennyPrice;
					return s.a.createElement("div", {
						className: Object(c.a)(r, H.a.awardDescriptionContainer)
					}, s.a.createElement("div", {
						className: H.a.iconContainer
					}, s.a.createElement("img", {
						className: H.a.icon,
						src: t
					})), s.a.createElement("div", {
						className: H.a.awardName
					}, i.fbt._("{awardName} Award", [i.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), s.a.createElement("div", {
						className: H.a.benefits
					}, s.a.createElement(re, {
						award: e
					})), s.a.createElement("div", {
						className: H.a.price
					}, n ? i.fbt._("Purchase for ${dollarPrice}", [i.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : e.coinPrice > 0 ? s.a.createElement(s.a.Fragment, null, s.a.createElement($.a, {
						className: H.a.coinIcon
					}), i.fbt._("{coinPrice}", [i.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "3MZDc4"
					})) : i.fbt._("Free", null, {
						hk: "EW8V2"
					})), e.endsAt && s.a.createElement(ee.a, {
						className: H.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var se = ne,
				ae = r("./src/reddit/controls/Button/index.tsx"),
				oe = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				ie = r("./src/reddit/selectors/experiments/econ/index.ts");
			const {
				fbt: ce
			} = r("./node_modules/fbt/lib/FbtPublic.js"), de = 10, le = Object(o.c)({
				isCoinsSunset: ie.d
			});
			class ue extends s.a.PureComponent {
				renderButtonText() {
					const {
						isCoinsSunset: e,
						needPayment: t,
						needPremium: r,
						selectedAward: n
					} = this.props, s = n.awardType === f.e.Moderator;
					return r ? ce._("Get Premium", null, {
						hk: "3VB1S9"
					}) : !t || s || e ? ce._("Give", null, {
						hk: "30MOda"
					}) : ce._("Next", null, {
						hk: "zG5NI"
					})
				}
				render() {
					const {
						isCoinsSunset: e,
						needPayment: t,
						needPremium: r,
						onGetPremium: n,
						onGild: a,
						onNeedPayment: o,
						pending: i,
						selectedAward: d
					} = this.props, l = d.awardType === f.e.Moderator;
					return s.a.createElement(ae.l, {
						className: Object(c.a)(H.a.gildButton, {
							[H.a.premiumButton]: r
						}),
						"data-redditstyle": !0,
						disabled: i || t && (l || e),
						onClick: r ? n : t ? o : a
					}, i ? s.a.createElement(oe.a, {
						className: H.a.loadingIcon,
						sizePx: de
					}) : this.renderButtonText())
				}
			}
			var me = Object(a.b)(le)(ue);

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
					}, this.handleClickMessageInput = () => {
						this.props.sendEvent(Object(b.clickMessageInputEvent)(this.props.thingId))
					}, this.handleTypeMessageInput = e => {
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
						className: H.a.giver,
						isSelected: t,
						text: i.fbt._("Make my gift anonymous", null, {
							hk: "2XfgGX"
						}),
						onClick: this.handleToggleAnonymous
					})
				}
				renderTextArea() {
					const {
						message: e
					} = this.props, t = {
						disabled: !1,
						maxLength: Object(Q.a)(),
						placeholder: i.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					}, r = t.maxLength > 0, n = r && e.length > t.maxLength;
					return s.a.createElement("div", {
						className: Object(c.a)(H.a.textAreaWrapper, {
							[H.a.messageTooLong]: n
						})
					}, s.a.createElement(J.t, pe({
						className: H.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: r ? e : ""
					}, t)), r && s.a.createElement("div", {
						className: H.a.characterCountdown
					}, t.maxLength - e.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? s.a.createElement("div", {
						className: H.a.publicIndicator
					}, s.a.createElement(Y.a, {
						className: H.a.eyeIcon
					}), i.fbt._("Shows my username", null, {
						hk: "1HsXbA"
					})) : null
				}
				renderGildButton() {
					return s.a.createElement("div", {
						className: H.a.gildButtonWrapper
					}, s.a.createElement(me, this.props.gildButtonProps))
				}
				renderCommunityCoinBalance() {
					if (this.props.selectedAward.awardType !== f.e.Moderator) return null;
					const {
						subredditName: e,
						subredditCoins: t
					} = this.props, r = i.fbt._("r/{subredditName} balance: {coinBalance}", [i.fbt._param("subredditName", e), i.fbt._param("coinBalance", t ? t.toLocaleString() : "0")], {
						hk: "1G3rBQ"
					});
					return s.a.createElement("div", {
						className: H.a.subredditCoinBalance
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
						className: Object(c.a)(e, H.a.awardDetailsPane)
					}, s.a.createElement("div", {
						className: H.a.awardDescriptionWrapper
					}, s.a.createElement("div", {
						className: H.a.spacerTop
					}), s.a.createElement(se, {
						award: t,
						awardIcon: r
					}), s.a.createElement("div", {
						className: H.a.spacerBottom
					}), t.awardType === f.e.Moderator ? s.a.createElement("span", {
						className: H.a.giver
					}, s.a.createElement(Z.a, {
						className: H.a.modIcon
					}), i.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), !n && this.renderTextArea(), this.renderPublicIndicator(), this.renderCommunityCoinBalance()), this.renderGildButton())
				}
			}
			var fe = be,
				ge = r("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				he = r.n(ge),
				we = r("./src/reddit/components/RichTextJson/index.tsx"),
				ve = r("./src/reddit/icons/svgs/Advance/index.tsx");
			class ye extends s.a.Component {
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
							o = a + n.scrollWidth;
						if (a >= t || a < t && o > t) {
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
						className: Object(c.a)(he.a.carouselButtonWrapper, he.a.carouselButtonWrapperLeft)
					}, s.a.createElement("button", {
						className: he.a.carouselButton,
						onClick: () => this.scrollLeft()
					}, s.a.createElement("div", {
						className: he.a.carouselButtonIcon,
						tabIndex: -1
					}, s.a.createElement(ve.a, {
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
					}, s.a.createElement(we.b, {
						className: Object(c.a)(he.a.pillOption, {
							[he.a.selectedPillOption]: t === e.tag
						}),
						content: e.content.richtext,
						rtJsonElementProps: {},
						useExplicitTextColor: !0
					}))))), this.state.rightScrollVisible && s.a.createElement("div", {
						className: Object(c.a)(he.a.carouselButtonWrapper, he.a.carouselButtonWrapperRight)
					}, s.a.createElement("button", {
						className: he.a.carouselButton,
						onClick: () => this.scrollRight()
					}, s.a.createElement("div", {
						className: he.a.carouselButtonIcon,
						tabIndex: -1
					}, s.a.createElement(ve.a, null)))))
				}
			}
			var Oe = ye,
				je = r("./src/reddit/icons/svgs/Lock/index.tsx"),
				xe = r("./src/reddit/icons/svgs/New/index.tsx"),
				Ee = r("./src/reddit/icons/svgs/Premium/index.tsx");
			var Ie = e => s.a.createElement("svg", {
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
			const Ce = s.a.memo(e => {
				let t, r;
				const n = !!e.award.tags && e.award.tags.some(e => e.includes("econ:render:lottie:"));
				if (e.award.awardSubType === f.d.Moderator) t = Z.a, r = he.a.moderatorIcon;
				else if (e.award.awardSubType === f.d.Premium) t = e.premiumUser ? Ee.a : je.a, r = e.premiumUser ? he.a.premiumIcon : he.a.lockIcon;
				else if (n) t = Ie, r = he.a.transferableIcon;
				else {
					if (!e.award.isNew) return null;
					t = xe.a, r = he.a.newIcon
				}
				return s.a.createElement("div", {
					className: Object(c.a)(he.a.iconBadgeContainer, r)
				}, s.a.createElement(t, {
					className: he.a.iconBadge
				}))
			});
			var Pe = s.a.memo(e => {
				const {
					award: t,
					awardIcon: r,
					isSelected: n,
					premiumUser: a,
					onSelect: o
				} = e;
				return s.a.createElement("button", {
					className: Object(c.a)(he.a.selectableAward, {
						[he.a.selected]: n
					}),
					onClick: () => o(t)
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
				}, s.a.createElement(Ce, {
					award: t,
					premiumUser: a
				}))), s.a.createElement("div", {
					className: Object(c.a)(he.a.metaText, {
						[he.a.metaTextBold]: !t.pennyPrice && 0 === t.coinPrice
					})
				}, t.pennyPrice ? i.fbt._("${cost}", [i.fbt._param("cost", (t.pennyPrice / 100).toLocaleString())], {
					hk: "P4xjQ"
				}) : t.coinPrice > 0 ? t.coinPrice.toLocaleString() : i.fbt._("Free", null, {
					hk: "4exiMW"
				}))))
			});
			const _e = {
					colWidth: 60,
					colGutter: 8,
					rowWidth: 86,
					rowGutter: 4
				},
				ke = {
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
				Ae = e => ({
					[e.tag]: []
				});
			var Ne = s.a.memo(e => {
					const {
						awardIcons: t,
						awardTotals: r,
						awardsPending: a,
						onSelect: o,
						premiumUser: i,
						selectedAward: d,
						sendEvent: l,
						tags: u,
						thingId: m
					} = e, [p, f] = Object(n.useState)({}), [g, h] = Object(n.useState)(Ae(ke)), [w, v] = Object(n.useState)(ke.tag);
					Object(n.useEffect)(() => {
						const e = {},
							t = Ae(ke);
						r.forEach(r => {
							e[r.award.id] = r, t[ke.tag].push(r.award.id);
							const n = r.award.tags;
							n && n.forEach(e => {
								void 0 === t[e] && (t[e] = []), t[e].push(r.award.id)
							})
						}), f(e), h(t)
					}, [r]);
					const y = [ke, ...u.filter(e => g[e.tag])],
						O = g[w],
						[j, x] = Object(n.useState)(!1),
						[E, I] = Object(n.useState)(1),
						C = Object(n.useCallback)(e => {
							if (null !== e) {
								const t = e.clientWidth,
									{
										colWidth: r,
										colGutter: n
									} = _e,
									s = t > (r + n) * (O.length - 1) + r + r + n;
								if (x(s), s) I(O.length);
								else {
									const e = Math.floor((t - r) / (r + n) + 1);
									I(e)
								}
							}
						}, [O]);
					if (a || !r.length) return s.a.createElement("div", {
						className: he.a.awardSelectorPane
					});
					const P = e => {
						o(e);
						const t = y.find(e => e.tag === w) || ke,
							r = O.findIndex(t => t === e.id),
							n = Math.floor(r / E),
							s = r - n * E;
						l(Object(b.clickSelectAwardEvent)(e, m, {
							awardColPosition: s + 1,
							awardRowPosition: n + 1,
							filterId: w,
							filterName: t.content.markdown
						}))
					};
					return s.a.createElement("div", {
						className: he.a.awardSelectorPane
					}, s.a.createElement(Oe, {
						tags: y,
						selectedTag: w,
						sendEvent: l,
						onSelectTag: v
					}), s.a.createElement("div", {
						className: he.a.awardSectionScrollWrapper
					}, s.a.createElement("div", {
						className: he.a.awardSectionContainer
					}, s.a.createElement("div", {
						className: Object(c.a)(he.a.awardSection, {
							[he.a.singleRowGrid]: j
						}),
						ref: C
					}, O.map(e => {
						const r = p[e].award,
							n = e === d.id,
							a = t[e];
						return s.a.createElement(Pe, {
							award: r,
							awardIcon: a,
							awardCount: p[e].total,
							isSelected: n,
							key: r.id,
							premiumUser: i,
							onSelect: P,
							thingId: m
						})
					})))))
				}),
				Se = r("./src/lib/localizeCurrency/index.ts"),
				Te = r("./src/reddit/components/Econ/CoinsModalHeader/index.m.less"),
				Me = r.n(Te),
				Le = r("./src/reddit/icons/svgs/Plus/index.tsx");
			const {
				fbt: Be
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function Ge(e) {
				let {
					onButtonClick: t,
					onCancel: r,
					title: n,
					buttonText: o
				} = e;
				const i = Object(a.e)(ie.d);
				return s.a.createElement("div", {
					className: Me.a.gildHeader
				}, s.a.createElement("button", {
					className: Me.a.closeBtn,
					onClick: r
				}, s.a.createElement(J.b, {
					className: Me.a.closeBtnIcon
				})), s.a.createElement("div", {
					className: Me.a.headerText
				}, n), s.a.createElement("button", {
					className: Me.a.coinButton,
					onClick: t
				}, s.a.createElement("div", {
					className: Me.a.coinBalanceIndicator,
					tabIndex: -1
				}, s.a.createElement($.a, {
					className: Me.a.coinIcon
				}), s.a.createElement("div", {
					className: Me.a.coinBalance
				}, o)), !i && s.a.createElement("div", {
					className: Me.a.addCoins,
					tabIndex: -1
				}, s.a.createElement(Le.a, {
					className: Me.a.plusIcon
				}))))
			}
			var Re = r("./src/reddit/hooks/useLocale.ts");
			const {
				fbt: Fe
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var qe = e => {
				let {
					onCancel: t,
					thingId: r,
					userCoins: n
				} = e;
				const a = Object(Re.a)(),
					o = Object(K.b)(),
					i = Object(Se.a)(n || 0, {
						locale: a
					});
				return s.a.createElement(Ge, {
					onCancel: t,
					onButtonClick: () => {
						o(Object(b.clickAddCoinsButtonEvent)(r));
						window.open("/coins", "_blank")
					},
					title: Fe._("Awards", null, {
						hk: "3w1C6X"
					}),
					buttonText: i
				})
			};
			const De = (e, t) => e.length > f.m.length && !e.find(e => e.award.id === t.id);
			var Ue = r("./src/reddit/components/GildModalContent/index.m.less"),
				We = r.n(Ue);
			const ze = (e, t) => {
					let {
						thingId: r,
						subredditId: n
					} = t, s = n;
					if (!n) {
						const t = Object(G.O)(e, {
							thingId: r
						});
						s = t && t.id
					}
					if (!s && Object(l.a)(r)) {
						const t = Object(B.F)(e, {
							postId: r
						});
						s = t && t.belongsTo.id
					}
					return s
				},
				Ke = Object(o.a)(Object(o.c)({
					awardings: (e, t) => {
						let {
							thingId: r,
							subredditId: n
						} = t;
						const s = ze(e, {
								thingId: r,
								subredditId: n
							}),
							a = s ? Object(k.h)(e, {
								subredditId: s,
								thingId: r
							}) : [];
						return u(a, r)
					},
					awardIcons: (e, t) => {
						let {
							thingId: r,
							subredditId: n
						} = t;
						const s = ze(e, {
								thingId: r,
								subredditId: n
							}),
							a = (s ? Object(k.h)(e, {
								subredditId: s,
								thingId: r
							}) : []).map(e => e.award);
						return Object(N.b)(e, {
							awards: a,
							minSize: 128,
							postOrCommentId: r
						})
					},
					awardingsPending: (e, t) => {
						let {
							thingId: r,
							subredditId: n
						} = t, s = n;
						if (!n) {
							const t = Object(G.O)(e, {
								thingId: r
							});
							if (!t) return !1;
							s = t.id
						}
						return Object(k.g)(e, {
							subredditId: s,
							thingId: r
						})
					},
					correlationId: e => Object(A.b)(e) || Object(m.d)(m.a.GildingFlow, !1),
					currentUser: R.m,
					errorMessage: A.a,
					isAnonymous: A.f,
					iFramed: A.g,
					isGildPending: A.e,
					isEmployee: R.P,
					isRecommendedCoinPackagePending: M.n,
					message: A.c,
					postOrComment: (e, t) => {
						let {
							thingId: r
						} = t;
						return Object(l.a)(r) ? Object(B.F)(e, {
							postId: r
						}) : Object(_.c)(e, {
							commentId: r
						})
					},
					purchaseCatalogPending: M.l,
					showPurchaseModal: L.v,
					selectedAward: T.b,
					subreddit: G.O,
					subredditCoins: (e, t) => {
						let {
							thingId: r,
							subredditId: n
						} = t;
						const s = Object(G.O)(e, {
								thingId: r
							}),
							a = s ? s.id : n;
						return Object(G.E)(e, {
							subredditId: a
						})
					},
					tags: (e, t) => {
						let {
							thingId: r,
							subredditId: n
						} = t, s = n;
						if (!n) {
							const t = Object(G.O)(e, {
								thingId: r
							});
							s = t && t.id
						}
						if (!s && Object(l.a)(r)) {
							const t = Object(B.F)(e, {
								postId: r
							});
							s = t && t.belongsTo.id
						}
						return s ? Object(k.i)(e, {
							subredditId: s
						}) : []
					},
					userCoins: (e, t) => {
						const r = Object(R.g)(e),
							n = ze(e, t);
						return r + Object(S.a)(e, {
							subredditId: n
						})
					}
				}), e => {
					const {
						isEmployee: t,
						selectedAward: r,
						subredditCoins: n,
						userCoins: s
					} = e, {
						awardType: a,
						coinPrice: o,
						pennyPrice: i
					} = r, c = a === f.e.Moderator, d = !!i || ((c ? n : s) || 0) < o && !(t && !c);
					return {
						...e,
						needPayment: d,
						cost: i || o
					}
				});
			class Ve extends s.a.Component {
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
							selectedAward: r,
							sendEvent: n,
							thingId: s
						} = this.props;
						return n(Object(b.clickConfirmAwardEvent)(s, r)), e(t)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey);
					const {
						isAnonymous: e
					} = this.props;
					Object(p.Ab)(e)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						awardings: e,
						awardsAndTagsRequested: t,
						correlationId: r,
						isAnonymous: n,
						needPayment: s,
						postOrComment: a,
						purchaseCatalogPending: o,
						purchaseCatalogRequested: i,
						selectAward: c,
						selectedAward: d,
						sendEvent: l,
						setIsAnonymous: u,
						subreddit: h,
						subredditAboutRequested: w,
						subredditId: v,
						subredditLockedCoinsRequested: y,
						subredditName: O,
						thingId: j,
						displayUnusableAwardError: x
					} = this.props;
					r || Object(m.d)(m.a.GildingFlow, !1), l(Object(b.viewGildModalEvent)(d.id, n, j)), u(Object(p.q)());
					const E = h ? h.id : v || (a && a.belongsTo ? a.belongsTo.id : void 0);
					if (E && t(E), De(e, d) && (x(), c(f.o)), h || O) {
						w(h ? h.name : O)
					}
					h && h.type !== g.g.User && y(h.id, h.name), s && (d.pennyPrice ? W() : Object(F.a)(), o || i(r))
				}
				componentDidUpdate(e) {
					e.awardingsPending && !this.props.awardingsPending && De(this.props.awardings, this.props.selectedAward) && (this.props.displayUnusableAwardError(), this.props.selectAward(f.o))
				}
				render() {
					const {
						awardings: e,
						awardIcons: t,
						awardingsPending: r,
						className: n,
						closeGildModal: a,
						currentUser: o,
						isAnonymous: i,
						iFramed: d,
						isGildPending: l,
						isRecommendedCoinPackagePending: u,
						message: m,
						needPayment: p,
						selectedAward: b,
						sendEvent: g,
						showPurchaseModal: h,
						subreddit: w,
						subredditCoins: v,
						subredditName: y,
						tags: O,
						thingId: j,
						userCoins: x
					} = this.props, {
						showPurchaseModalInThisInstance: E
					} = this.state, I = h && E, C = I && !b.pennyPrice, P = I && !!b.pennyPrice, _ = (C || P) && !d;
					if (C && _) return null;
					if (P && _) return s.a.createElement(z, null);
					const k = w ? w.name : y,
						A = !(!o || !o.isGold),
						N = {
							needPayment: p,
							needPremium: !A && b.awardSubType === f.d.Premium,
							onNeedPayment: this.onNeedPayment,
							onGetPremium: this.onGetPremium,
							onGild: this.onGildRequested,
							pending: l || u,
							selectedAward: b,
							thingId: j
						};
					return s.a.createElement("div", {
						className: Object(c.a)(n, We.a.gildModalContent)
					}, s.a.createElement(qe, {
						onCancel: a,
						thingId: j,
						userCoins: x
					}), s.a.createElement("div", {
						className: We.a.modalMainContent
					}, s.a.createElement(Ne, {
						awardIcons: t,
						awardTotals: e,
						awardsPending: r,
						premiumUser: A,
						onSelect: this.props.selectAward,
						selectedAward: b,
						sendEvent: g,
						tags: O,
						thingId: j
					}), s.a.createElement(fe, {
						forcePublic: !1,
						isAnonymous: i,
						message: m,
						selectedAward: b,
						selectedAwardIcon: t[b.id],
						sendEvent: g,
						thingId: j,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						gildButtonProps: N,
						subredditName: k,
						subredditCoins: v
					})), P && s.a.createElement(z, null))
				}
			}
			t.a = Object(a.b)(Ke, (e, t) => {
				let {
					author: r,
					profileId: n,
					thingId: s
				} = t;
				return {
					awardsAndTagsRequested: t => e(Object(w.a)(t, s, n && r)),
					closeGildModal: () => e(Object(j.a)()),
					gildRequested: t => e(Object(y.gildGqlRequested)(s, {
						isOldReddit: t
					})),
					needPaymentRequested: t => {
						let {
							awardId: r,
							correlationId: n,
							cost: s,
							isPennyPurchase: a,
							thingId: o
						} = t;
						e(a ? Object(E.b)(s, o, n) : Object(x.c)(r, o, n))
					},
					purchaseCatalogRequested: t => e(Object(I.b)({
						correlationId: t
					})),
					selectAward: t => e(Object(O.a)(t)),
					displayUnusableAwardError: () => e(Object(P.f)({
						kind: h.b.Error,
						duration: P.a,
						text: i.fbt._("This award is not available on this content.", null, {
							hk: "13VV1D"
						})
					})),
					setIsAnonymous: t => {
						e(Object(y.setIsAnonymous)(t)), Object(p.Ab)(t)
					},
					subredditAboutRequested: t => e(Object(C.u)(t)),
					subredditLockedCoinsRequested: (t, r) => e(Object(v.a)(t, r)),
					updateMessage: t => e(Object(y.updateMessage)(t))
				}
			})(Object(K.c)(Ve))
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
				o = r.n(a),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/timeAgo/index.ts"),
				d = r("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: r
				} = e, n = Math.floor(r.getTime() / 1e3), a = Object(c.b)(n);
				return s.a.createElement("div", {
					className: Object(i.a)(t)
				}, s.a.createElement(d.a, {
					className: o.a.clockIcon
				}), s.a.createElement("span", {
					className: o.a.timeLeft
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
				o = r("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = r.n(o);
			t.a = e => {
				let {
					center: t,
					className: r,
					sizePx: n = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(i.a.loadingIcon, r, {
						[i.a.mCentered]: t
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
				s = r("./src/lib/makeRequest/index.ts"),
				a = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				o = r("./src/reddit/helpers/isPost.ts"),
				i = (r("./src/redditGQL/operations/AvailableAwards.json"), r("./src/redditGQL/operations/AwardSideEffectsDetails.json")),
				c = r("./src/redditGQL/operations/GiveAward.json"),
				d = r("./src/redditGQL/operations/RemoveAward.json");
			const l = async (e, t, r) => {
				var o;
				const i = await Object(n.a)(e, {
					...c,
					variables: {
						input: t
					}
				}, {
					query: r ? {} : Object(a.b)()
				});
				if (!Object(s.c)(i)) throw new Error("An unknown error occurred");
				if (!Object(s.c)(i) || !i.body.data.giveAward.ok) throw i.body.data.giveAward.errors && (null === (o = i.body.data.giveAward.errors) || void 0 === o ? void 0 : o.length) > 0 ? new Error(i.body.data.giveAward.errors[0].message) : new Error("An unknown error occurred");
				return i.body.data.giveAward
			}, u = async (e, t) => {
				var r, a, o;
				const i = await Object(n.a)(e, {
					...d,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(i)) throw new Error("An unknown error occurred");
				if (!i.body.data.removeAward.ok) {
					const e = null !== (o = null === (a = null === (r = i.body.data.removeAward.errors) || void 0 === r ? void 0 : r[0]) || void 0 === a ? void 0 : a.message) && void 0 !== o ? o : "An unknown error occurred";
					throw new Error(e)
				}
				return i.body.data.removeAward
			}, m = async (e, t, r) => {
				const c = await Object(n.a)(e, {
					...i,
					variables: {
						thingId: t.thingId,
						isPost: Object(o.a)(t.thingId)
					}
				}, {
					query: r ? {} : Object(a.b)()
				});
				if (!Object(s.c)(c)) throw new Error("An unknown error occurred");
				if (c.body.data.postInfoById) {
					const {
						identity: e,
						postInfoById: r
					} = c.body.data;
					return {
						id: t.thingId,
						awardings: r.awardings,
						treatmentTags: r.treatmentTags,
						coins: e.coins
					}
				}
				if (c.body.data.commentById) {
					const {
						identity: e,
						commentById: r
					} = c.body.data;
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
				s = r("./src/lib/makeApiRequest/index.ts"),
				a = r("./src/lib/omitHeaders/index.ts"),
				o = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts");
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
					m = Object(i.a)(u);
				return Object(s.a)(Object(a.a)(r, [o.a]), {
					method: n.ob.POST,
					endpoint: m,
					data: l
				}).then(c.a)
			}, l = async e => {
				let {
					context: t,
					coins: r,
					pennies: i,
					correlationId: d
				} = e;
				const l = {
					coins: r,
					pennies: i,
					correlation_id: d
				};
				return Object(s.a)(Object(a.a)(t, [o.a]), {
					method: n.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(c.a)
			}, u = async e => {
				let {
					context: t,
					awardId: r,
					pennies: i,
					thingId: d,
					correlationId: l
				} = e;
				const u = {
					award_id: r,
					correlation_id: l,
					pennies: i,
					thing_id: d
				};
				return Object(s.a)(Object(a.a)(t, [o.a]), {
					method: n.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(c.a)
			}, m = async e => {
				let {
					context: t,
					offerContext: r,
					orderId: i,
					coins: d,
					pennies: l,
					correlationId: u
				} = e;
				const m = {
					offer_context: r,
					order_id: i,
					coins: d,
					pennies: l,
					correlation_id: u
				};
				return Object(s.a)(Object(a.a)(t, [o.a]), {
					method: n.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: m
				}).then(c.a)
			}, p = async e => {
				let {
					awardId: t,
					context: r,
					coins: i,
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
					coins: i,
					correlation_id: d,
					is_anonymous: l,
					message: u,
					offer_context: m,
					order_id: p,
					pennies: b,
					thing_id: f
				};
				return Object(s.a)(Object(a.a)(r, [o.a]), {
					method: n.ob.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: g
				}).then(c.a)
			}, b = async e => {
				let {
					awardId: t,
					context: r,
					correlationId: i,
					isAnonymous: d,
					message: l,
					orderId: u,
					thingId: m
				} = e;
				const p = {
					award_id: t,
					correlation_id: i,
					is_anonymous: d,
					message: l,
					order_id: u,
					thing_id: m
				};
				return Object(s.a)(Object(a.a)(r, [o.a]), {
					method: n.ob.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(c.a)
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/featureFlags/index.ts");

			function c(e, t, r) {
				const n = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(n)(e => {
					const {
						featureEnabled: n,
						...a
					} = e, o = a;
					return n ? s.a.createElement(t, o) : void 0 !== r ? s.a.createElement(r, o) : null
				})
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
			}));
			const n = () => 2048,
				s = e => {
					const t = n();
					return e.slice(0, t)
				}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
			})), r.d(t, "b", (function() {
				return c
			}));
			var n = r("./node_modules/bignumber.js/bignumber.js"),
				s = r("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return r.dividedToIntegerBy(s).toString()
			}

			function o(e, t) {
				return Object(s.b)(parseInt(a(e, t), 10))
			}

			function i(e, t) {
				const r = new n.BigNumber(e),
					s = new n.BigNumber(t || 1);
				return r.multipliedBy(s).toFixed(0)
			}

			function c(e) {
				const t = new n.BigNumber(e),
					r = new n.BigNumber("1e18");
				return t.dividedBy(r).toString()
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
				o = r("./src/reddit/icons/svgs/Advance/index.m.less"),
				i = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.default, e.className),
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
				o = r("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = r.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.clock, e.className),
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
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M7.9 18.8h3.8c3.9 0 7.1-3.8 7.1-8.5s-3.2-8.5-7.1-8.5H7.9",
				fill: "#FFD635",
				stroke: "#000",
				strokeMiterlimit: "10",
				strokeWidth: "1.25"
			}), s.a.createElement("path", {
				d: "M8.2 1.8c-3.9 0-7 3.8-7 8.5s3.1 8.5 7 8.5 7-3.8 7-8.5-3.1-8.5-7-8.5z",
				fill: "#FFD635",
				stroke: "#000",
				strokeMiterlimit: "10",
				strokeWidth: "1.25"
			}), s.a.createElement("path", {
				d: "M6.2 14.4c-.6-.4-1.2-1-1.5-1.7-.4-.8-.6-1.6-.6-2.4 0-.8.2-1.7.6-2.4.3-.8.8-1.4 1.5-1.8.6-.4 1.3-.6 2-.6.4 0 .8.1 1.2.2.4.1.8.3 1.1.6l-.7 1.8c-.1-.2-.4-.4-.7-.5-.3-.2-.6-.2-.9-.2-.4 0-.8.1-1.2.3-.4.3-.7.6-.9 1-.2.5-.3 1-.3 1.5s.1 1 .3 1.5c.2.4.5.8.9 1 .4.3.8.4 1.2.4.3 0 .6-.1.9-.2.3-.1.5-.3.7-.5l.6 1.8c-.3.2-.7.4-1.1.6-.3.1-.7.2-1.1.2-.7 0-1.4-.2-2-.6z"
			}), s.a.createElement("path", {
				d: "M11.6 1.1H7.9C3.9 1.4.7 5.3.7 10.2s3.2 8.9 7.2 9.1h3.8c4.3 0 7.7-4.1 7.7-9.1s-3.5-9.1-7.8-9.1zm-9.7 9.1c0-4.3 2.9-7.9 6.4-7.9s6.4 3.5 6.4 7.9-2.9 7.9-6.4 7.9-6.4-3.5-6.4-7.9zm10.2 7.9c2.4-1.9 3.8-4.8 3.8-7.8.1-3.1-1.3-6-3.8-7.9 3.3.3 6 3.7 6 7.8s-2.6 7.6-6 7.9z"
			}), s.a.createElement("path", {
				d: "m10.5 14.2-.6-1.8c-.2.2-.4.4-.7.5-.3.1-.6.2-.9.2-.4 0-.9-.1-1.2-.4-.4-.3-.7-.6-.9-1-.2-.5-.3-1-.3-1.5s.1-1 .3-1.5c.1-.4.4-.7.8-1 .4-.2.8-.4 1.2-.4.3 0 .6.1.9.2.3.1.5.3.7.5l.6-1.8c-.3-.2-.6-.4-1-.5-.4-.1-.8-.2-1.2-.2-.7 0-1.4.2-2 .6-.7.4-1.2 1-1.5 1.7-.4.8-.6 1.6-.6 2.4 0 .8.2 1.7.6 2.4.3.8.8 1.4 1.5 1.8.6.4 1.3.6 2 .6.4 0 .8-.1 1.2-.2.4-.1.8-.3 1.1-.6z"
			}))
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
		"./src/reddit/models/Payments/index.ts": function(e, t, r) {
			"use strict";
			var n, s, a, o;
			r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(n || (n = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(s || (s = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(a || (a = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(o || (o = {}))
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/redux/es/redux.js"),
				s = r("./src/reddit/actions/gold/constants.ts");
			const a = {};
			var o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.lb: {
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
			const a = (e, t) => {
				let {
					subredditId: r
				} = t;
				return r && e.features.econPurchase.subredditLockedCoins[r] || 0
			}
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, r) {
			"use strict";
			r.d(t, "g", (function() {
				return c
			})), r.d(t, "h", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "i", (function() {
				return m
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "b", (function() {
				return f
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "e", (function() {
				return h
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/makeProductOfferKey/index.ts"),
				a = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/models/Payments/index.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: r,
						type: n
					} = t;
					var a, o, i;
					return r ? e.subreddits.productOffers[Object(s.a)(n, r)] : null === (i = null === (o = null === (a = e.features) || void 0 === a ? void 0 : a.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === i ? void 0 : i[Object(s.a)(n)]
				},
				l = e => {
					const t = d(e, {
						type: a.c.Coinpack
					});
					return null == t ? void 0 : t[0]
				},
				u = e => {
					const t = d(e, {
						type: a.c.Premium
					});
					return (null == t ? void 0 : t[0]) || null
				},
				m = (e, t) => (null == e ? void 0 : e.pricePackages) ? null == e ? void 0 : e.pricePackages.filter(e => e.renewInterval === t && e.requiredPaymentProviders && (e => e[0] === o.b.PayPal || e[0] === o.b.Stripe)(e.requiredPaymentProviders)) : null,
				p = Object(n.a)(u, i.q, (e, t) => m(e, t) || null),
				b = Object(n.a)(p, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				f = Object(n.a)(p, e => (null == e ? void 0 : e[0].price) || null),
				g = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				h = Object(n.a)(g, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/redditGQL/operations/AvailableAwards.json": function(e) {
			e.exports = JSON.parse('{"id":"4778ed491384"}')
		},
		"./src/redditGQL/operations/AwardSideEffectsDetails.json": function(e) {
			e.exports = JSON.parse('{"id":"e10d7f0411a4"}')
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedGild~GildModal.bece708dea0459e79fe8.js.map