// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.2081adc0922645158549.js
// Retrieved at 1/5/2022, 11:30:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild~GildModal", "gildActions"], {
		"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js": function(e, t, n) {
			! function(e, t) {
				"use strict";
				t = t && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
				var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

				function r() {}

				function s() {}
				s.resetWarningCache = r;
				var a = function(e, t) {
					return e(t = {
						exports: {}
					}, t.exports), t.exports
				}((function(e) {
					e.exports = function() {
						function e(e, t, r, s, a, o) {
							if (o !== n) {
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
							resetWarningCache: r
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

				function i(e, t, n) {
					return t in e ? Object.defineProperty(e, t, {
						value: n,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = n, e
				}

				function c(e, t) {
					var n = Object.keys(e);
					if (Object.getOwnPropertySymbols) {
						var r = Object.getOwnPropertySymbols(e);
						t && (r = r.filter((function(t) {
							return Object.getOwnPropertyDescriptor(e, t).enumerable
						}))), n.push.apply(n, r)
					}
					return n
				}

				function d(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = null != arguments[t] ? arguments[t] : {};
						t % 2 ? c(Object(n), !0).forEach((function(t) {
							i(e, t, n[t])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
							Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
						}))
					}
					return e
				}

				function l(e, t) {
					return function(e) {
						if (Array.isArray(e)) return e
					}(e) || function(e, t) {
						if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
							var n = [],
								r = !0,
								s = !1,
								a = void 0;
							try {
								for (var o, i = e[Symbol.iterator](); !(r = (o = i.next()).done) && (n.push(o.value), !t || n.length !== t); r = !0);
							} catch (c) {
								s = !0, a = c
							} finally {
								try {
									r || null == i.return || i.return()
								} finally {
									if (s) throw a
								}
							}
							return n
						}
					}(e, t) || function(e, t) {
						if (e) {
							if ("string" == typeof e) return u(e, t);
							var n = Object.prototype.toString.call(e).slice(8, -1);
							return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
						}
					}(e, t) || function() {
						throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
					}()
				}

				function u(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
					return r
				}
				var m = function(e) {
						var n = t.useRef(e);
						return t.useEffect((function() {
							n.current = e
						}), [e]), n.current
					},
					p = function(e) {
						return null !== e && "object" === o(e)
					},
					b = function(e, t, n) {
						return p(e) ? Object.keys(e).reduce((function(r, s) {
							var a = !p(t) || ! function e(t, n) {
								if (!p(t) || !p(n)) return t === n;
								var r = Array.isArray(t);
								if (r !== Array.isArray(n)) return !1;
								var s = "[object Object]" === Object.prototype.toString.call(t);
								if (s !== ("[object Object]" === Object.prototype.toString.call(n))) return !1;
								if (!s && !r) return !1;
								var a = Object.keys(t),
									o = Object.keys(n);
								if (a.length !== o.length) return !1;
								for (var i = {}, c = 0; c < a.length; c += 1) i[a[c]] = !0;
								for (var d = 0; d < o.length; d += 1) i[o[d]] = !0;
								var l = Object.keys(i);
								if (l.length !== a.length) return !1;
								var u = t,
									m = n;
								return l.every((function(t) {
									return e(u[t], m[t])
								}))
							}(e[s], t[s]);
							return n.includes(s) ? (a && console.warn("Unsupported prop change: options.".concat(s, " is not a mutable property.")), r) : a ? d(d({}, r || {}), {}, i({}, s, e[s])) : r
						}), null) : null
					},
					h = function(e) {
						if (null === e || p(t = e) && "function" == typeof t.elements && "function" == typeof t.createToken && "function" == typeof t.createPaymentMethod && "function" == typeof t.confirmCardPayment) return e;
						var t;
						throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")
					},
					f = function(e) {
						if (function(e) {
								return p(e) && "function" == typeof e.then
							}(e)) return {
							tag: "async",
							stripePromise: Promise.resolve(e).then(h)
						};
						var t = h(e);
						return null === t ? {
							tag: "empty"
						} : {
							tag: "sync",
							stripe: t
						}
					},
					g = t.createContext(null);
				g.displayName = "ElementsContext";
				var w = function(e) {
					var n = e.stripe,
						r = e.options,
						s = e.children,
						a = t.useRef(!1),
						o = t.useRef(!0),
						i = t.useMemo((function() {
							return f(n)
						}), [n]),
						c = l(t.useState((function() {
							return {
								stripe: null,
								elements: null
							}
						})), 2),
						d = c[0],
						u = c[1],
						p = m(n);
					null !== p && p !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."), a.current || ("sync" === i.tag && (a.current = !0, u({
						stripe: i.stripe,
						elements: i.stripe.elements(r)
					})), "async" === i.tag && (a.current = !0, i.stripePromise.then((function(e) {
						e && o.current && u({
							stripe: e,
							elements: e.elements(r)
						})
					}))));
					var h = m(r);
					return t.useEffect((function() {
						if (d.elements) {
							var e = b(r, h, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [r, h, d.elements]), t.useEffect((function() {
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
					}), [d.stripe]), t.createElement(g.Provider, {
						value: d
					}, s)
				};
				w.propTypes = {
					stripe: a.any,
					options: a.object
				};
				var x = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(g), e)
					},
					O = function(e) {
						return (0, e.children)(x("mounts <ElementsConsumer>"))
					};
				O.propTypes = {
					children: a.func.isRequired
				};
				var v = function(e) {
						var n = t.useRef(e);
						return t.useEffect((function() {
								n.current = e
							}), [e]),
							function() {
								n.current && n.current.apply(n, arguments)
							}
					},
					y = function() {},
					j = function(e, n) {
						var r, s = "".concat((r = e).charAt(0).toUpperCase() + r.slice(1), "Element"),
							o = n ? function(e) {
								x("mounts <".concat(s, ">"));
								var n = e.id,
									r = e.className;
								return t.createElement("div", {
									id: n,
									className: r
								})
							} : function(n) {
								var r = n.id,
									a = n.className,
									o = n.options,
									i = void 0 === o ? {} : o,
									c = n.onBlur,
									d = void 0 === c ? y : c,
									l = n.onFocus,
									u = void 0 === l ? y : l,
									p = n.onReady,
									h = void 0 === p ? y : p,
									f = n.onChange,
									g = void 0 === f ? y : f,
									w = n.onEscape,
									O = void 0 === w ? y : w,
									j = n.onClick,
									E = void 0 === j ? y : j,
									_ = x("mounts <".concat(s, ">")).elements,
									I = t.useRef(null),
									C = t.useRef(null),
									k = v(h),
									P = v(d),
									N = v(u),
									S = v(E),
									A = v(g),
									T = v(O);
								t.useLayoutEffect((function() {
									if (null == I.current && _ && null != C.current) {
										var t = _.create(e, i);
										I.current = t, t.mount(C.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", A), t.on("blur", P), t.on("focus", N), t.on("escape", T), t.on("click", S)
									}
								}));
								var L = m(i);
								return t.useEffect((function() {
									if (I.current) {
										var e = b(i, L, ["paymentRequest"]);
										e && I.current.update(e)
									}
								}), [i, L]), t.useLayoutEffect((function() {
									return function() {
										I.current && I.current.destroy()
									}
								}), []), t.createElement("div", {
									id: r,
									className: a,
									ref: C
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
					_ = j("auBankAccount", E),
					I = j("card", E),
					C = j("cardNumber", E),
					k = j("cardExpiry", E),
					P = j("cardCvc", E),
					N = j("fpxBank", E),
					S = j("iban", E),
					A = j("idealBank", E),
					T = j("p24Bank", E),
					L = j("epsBank", E),
					M = j("payment", E),
					B = j("paymentRequestButton", E),
					R = j("linkAuthentication", E),
					D = j("shippingAddress", E),
					G = j("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = G, e.AuBankAccountElement = _, e.CardCvcElement = P, e.CardElement = I, e.CardExpiryElement = k, e.CardNumberElement = C, e.Elements = w, e.ElementsConsumer = O, e.EpsBankElement = L, e.FpxBankElement = N, e.IbanElement = S, e.IdealBankElement = A, e.LinkAuthenticationElement = R, e.P24BankElement = T, e.PaymentElement = M, e.PaymentRequestButtonElement = B, e.ShippingAddressElement = D, e.useElements = function() {
					return x("calls useElements()").elements
				}, e.useStripe = function() {
					return x("calls useStripe()").stripe
				}, Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}(t, n("./node_modules/react/index.js"))
		},
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var r;
			r = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function r(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var s, a = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						o = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !a && !l && /macintosh/i.test(t),
						g = !o && !u && !m && !p && /linux/i.test(t),
						w = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = n(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						v = !O && /[^-]mobi/i.test(t),
						y = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: x || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: x || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? s = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? s = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? s = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? s = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? s = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? s = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, w ? (s.msedge = e, s.version = w) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? s = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? s = {
						name: "Microsoft Edge",
						msedge: e,
						version: w
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || x
					} : u ? s = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? s = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (s = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (s.firefoxos = e, s.osname = "Firefox OS")) : l ? s = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? s = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? s = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? s = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: x || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? s = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, x && (s.version = x)) : a ? (s = {
						name: "iphone" == a ? "iPhone" : "ipad" == a ? "iPad" : "iPod"
					}, x && (s.version = x)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: n(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: n(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && x && (s.version = x)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || n(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !o && !s.silk ? !s.windowsphone && a ? (s[a] = e, s.ios = e, s.osname = "iOS") : f ? (s.mac = e, s.osname = "macOS") : y ? (s.xbox = e, s.osname = "Xbox") : h ? (s.windows = e, s.osname = "Windows") : g && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var j = "";
					s.windows ? j = function(e) {
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : a ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (s.osversion = j);
					var E = !s.windows && j.split(".")[0];
					return O || c || "ipad" == a || o && (3 == E || E >= 4 && !v) || s.silk ? s.tablet = e : (v || "iphone" == a || "ipod" == a || o || i || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function s(e, t) {
					var n, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) r.push(t(e[n]));
					return r
				}

				function a(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), n = s(e, (function(e) {
							var n = t - r(e);
							return s((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function o(e, r, s) {
					var o = n;
					"string" == typeof r && (s = r, r = void 0), void 0 === r && (r = !1), s && (o = t(s));
					var i = "" + o.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && o[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return a([i, e[c]]) < 0
						} return r
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = o, n.compareVersions = a, n.check = function(e, t, n) {
					return !o(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = r() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, r, s) {
				return s(e, (function(e, s, a) {
					n = r ? (r = !1, e) : t(n, e, s, a)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_baseClamp.js"),
				s = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = s(n)) == n ? n : 0), void 0 !== t && (t = (t = s(t)) == t ? t : 0), r(s(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var r = n("./node_modules/lodash/_arrayReduce.js"),
				s = n("./node_modules/lodash/_baseEach.js"),
				a = n("./node_modules/lodash/_baseIteratee.js"),
				o = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? r : o,
					d = arguments.length < 3;
				return c(e, a(t, 4), n, d, s)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var r = n("./src/lib/currency/cleanNumber/index.ts");

			function s(e, t) {
				const n = Object(r.a)(e),
					s = parseInt(n) / 100;
				return Math.floor(s) !== s || t ? s.toFixed(2) : String(s)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";

			function r(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			}));
			var r, s = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(r || (r = {}));
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
		"./src/lib/localizeCurrency/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var r = n("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				s = n("./src/lib/currency/centsToDollars/index.ts"),
				a = n("./src/lib/currency/currencies.ts"),
				o = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./src/reddit/helpers/governance/tokens.ts"),
				c = n("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = r.DEFAULT_LOCALE,
					pretty: n,
					formatOptions: s
				} = {}) => {
					const a = Number(e);
					return Object(c.c)() ? n ? Object(o.b)(a) : new Intl.NumberFormat(t, s).format(a) : u(a, n, t)
				},
				l = (e, t = {}) => {
					const {
						locale: n = r.DEFAULT_LOCALE,
						pretty: o,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: b,
						currency: h = t.currency || (t.type ? p(t.type) : a.c),
						type: f = t.type || (t.currency ? m(t.currency) : a.b.Real)
					} = t, g = Number(e), w = String(e);
					switch (f) {
						case a.b.Reddit: {
							const e = a.e[h],
								t = e ? e() : h;
							return Object(c.c)() ? new Intl.NumberFormat(n, {
								currencyDisplay: "symbol",
								...d
							}).format(g) + " " + t : u(g, o, n, t)
						}
						case a.b.Crypto: {
							if (o) {
								return Object(i.c)(w, l) + " " + h
							}
							const e = Number(Object(i.b)(w, l));
							return Object(c.c)() ? new Intl.NumberFormat(n, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, o, n, h)
						}
						case a.b.Real:
						default: {
							const e = Number(Object(s.a)(w, b));
							return Object(c.c)() ? new Intl.NumberFormat(n, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...d
							}).format(e) : u(e, o, n, h)
						}
					}
				},
				u = (e, t, n, r) => {
					return (t ? Object(o.b)(e) : e.toLocaleString(n)) + (r ? " " + r : "")
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
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			}));
			const r = e => {
					let t = 0,
						n = 0;
					const r = [0];
					for (const s of e) t++, n += s.length, r[t] = n;
					return r
				},
				s = e => {
					let t = 0,
						n = 0;
					const r = [];
					for (const s of e) {
						for (let e = 0; e < s.length; e++) r[n] = t, n++;
						t++
					}
					return r[n] = t, r
				}
		},
		"./src/reddit/actions/gold/econPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/econPurchase/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/makeGqlRequest/index.ts"),
				i = n("./src/redditGQL/operations/SubredditCoins.json");
			var c = n("./src/reddit/featureFlags/subredditPoints.ts"),
				d = n("./src/reddit/actions/gold/constants.ts");
			Object(r.a)({
				features: {
					econPurchase: s.a
				}
			});
			const l = Object(a.a)(d.nb),
				u = (e, t, n) => async (r, s, {
					gqlContext: a
				}) => {
					var d, u;
					if (!c.a.has(t.toLowerCase())) return;
					if (void 0 !== s().features.econPurchase.subredditLockedCoins[e] && !(null == n ? void 0 : n.force)) return;
					const m = await ((e, t) => Object(o.a)(e, {
						...i,
						variables: {
							subreddit: t
						}
					}))(a(), e);
					if (m.ok) {
						const t = m.body;
						r(l({
							subredditId: e,
							amount: (null === (u = null === (d = t.data.subredditInfoById) || void 0 === d ? void 0 : d.userCoinsInSubreddit) || void 0 === u ? void 0 : u.amount) || 0
						}))
					}
				}
		},
		"./src/reddit/actions/gold/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "setIsAnonymous", (function() {
				return K
			})), n.d(t, "updateMessage", (function() {
				return Y
			})), n.d(t, "gildGqlRequested", (function() {
				return X
			})), n.d(t, "triggerLoader", (function() {
				return Q
			})), n.d(t, "gildPending", (function() {
				return $
			})), n.d(t, "gildFailed", (function() {
				return te
			})), n.d(t, "gildSuccessful", (function() {
				return se
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/makeActionCreator/index.ts"),
				a = n("./src/lib/postParentMessage/index.ts"),
				o = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				c = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/toaster.ts"),
				u = n("./node_modules/react/index.js"),
				m = n.n(u),
				p = n("./src/reddit/models/Gold/Award.ts"),
				b = n("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				h = n.n(b);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), g = e => f._("Sent! You earned {=awarder karma}", [f._param("=awarder karma", m.a.createElement("a", {
				className: h.a.karmaLink,
				href: p.a,
				target: "_blank",
				rel: "noopener noreferrer"
			}, f._({
				"*": "{awarder karma} awarder karma",
				_1: "1 awarder karma"
			}, [f._plural(e.awarderKarmaReceived, "awarder karma")], {
				hk: "2Llmz0"
			})))], {
				hk: "3ItXUT"
			});
			var w = n("./src/reddit/constants/modals.ts"),
				x = n("./src/reddit/models/Gold/Coins/index.ts"),
				O = n("./src/reddit/models/Post/index.ts"),
				v = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/models/User/index.ts"),
				j = n("./src/reddit/selectors/commentSelector.ts"),
				E = n("./src/reddit/selectors/communityAwards.ts"),
				_ = n("./src/reddit/selectors/gild.ts"),
				I = n("./src/reddit/selectors/gold/awardIcon.ts"),
				C = n("./src/reddit/selectors/gold/econPurchase.ts"),
				k = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = n("./src/reddit/selectors/posts.ts"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				S = n("./src/reddit/selectors/user.ts"),
				A = n("./src/lib/makeGqlRequest/index.ts"),
				T = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				L = n("./src/redditGQL/operations/GildComment.json"),
				M = n("./src/redditGQL/operations/GildPost.json");
			const B = (e, t, n) => Object(A.a)(e, {
					...M,
					variables: t
				}, {
					query: n ? {} : Object(T.b)()
				}),
				R = (e, t, n) => Object(A.a)(e, {
					...L,
					variables: t
				}, {
					query: n ? {} : Object(T.b)()
				});
			var D = n("./src/reddit/helpers/awards/getAwardItemId.ts"),
				G = n("./src/reddit/helpers/awards/message.ts"),
				F = n("./src/reddit/helpers/correlationIdTracker.ts"),
				U = n("./src/reddit/helpers/isPost.ts"),
				H = n("./src/reddit/helpers/trackers/gild.ts"),
				W = n("./src/telemetry/index.ts"),
				V = n("./src/reddit/endpoints/profile/info.ts"),
				q = n("./src/reddit/actions/gold/awardKarma.ts"),
				z = n("./src/reddit/actions/gold/constants.ts"),
				J = n("./src/reddit/actions/gold/econPurchase.ts");
			const K = Object(s.a)(z.r),
				Y = Object(s.a)(z.v),
				X = (e, t) => async (n, s, {
					gqlContext: a
				}) => {
					const o = s().gild,
						{
							isOldReddit: i,
							isLivestream: c
						} = t;
					n($());
					try {
						const t = {
								gildingTypeId: o.selectedAward.id,
								isAnonymous: o.isAnonymous,
								isGildFunded: !1,
								message: Object(G.d)(o.message, o.selectedAward, c),
								nodeId: e
							},
							s = Object(U.a)(e) ? B : R,
							d = await s(a(), {
								input: t
							}, i);
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
									gild: r
								} = t.data,
								s = Object(U.a)(e) ? d.body.data.gild.postInfo : d.body.data.gild.comment,
								{
									awardings: a,
									treatmentTags: i
								} = s;
							await n(se({
								awardId: o.selectedAward.id,
								awardings: a,
								awardKarmaReceived: r.awardKarmaReceived,
								coins: r.coins,
								id: e,
								subredditCoins: r.subredditCoins,
								treatmentTags: i
							}))
						} else {
							const e = u && u[0] && u[0].message,
								t = m && m[0] && m[0].message,
								s = e || t || r.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await n(te(s))
						}
					} catch (d) {
						const e = d,
							t = e && e.message || r.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await n(te(t))
					} finally {
						Object(F.b)(F.a.GildingFlow)
					}
				}, Q = Object(s.a)(z.u), Z = Object(s.a)(z.q), $ = () => async (e, t) => {
					e(Z()), window.setTimeout(() => {
						t().gild.api.pending && e(Q())
					}, 2e3)
				}, ee = Object(s.a)(z.p), te = e => async (t, n) => {
					await t(ee(e)), t(Object(l.f)({
						kind: v.b.Error,
						duration: l.a,
						text: e
					}))
				}, ne = Object(s.a)(z.s), re = (e, t) => {
					const {
						id: n
					} = t, r = Object(U.a)(n) ? Object(P.H)(e, {
						postId: n
					}) : Object(j.b)(e, {
						commentId: n
					}), s = Object(S.k)(e), a = e.gild, {
						isAnonymous: o
					} = a, i = !o && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, c = r ? r.author : void 0, d = Object(N.H)(e, {
						thingId: n
					});
					return ne({
						...t,
						gilder: i,
						gildee: c,
						subredditId: d && d.id
					})
				}, se = e => async (t, n) => {
					const s = n(),
						{
							awardId: u,
							id: m
						} = e,
						b = Object(E.a)(s, u),
						h = e.awardKarmaReceived,
						f = Object(S.k)(s),
						j = Object(_.b)(s) || Object(F.e)(F.a.GildingFlow, !1);
					if (Object(_.g)(s)) {
						const e = "success.gild",
							t = {},
							n = Object(I.a)(s, {
								award: b,
								minSize: 32,
								postOrCommentId: m
							});
						t.awardId = u, t.awardIcon = n, t.awardName = b.name, Object(a.a)({
							type: e,
							data: t
						})
					}
					if (b.awardType === p.f.Moderator && void 0 === e.subredditCoins) {
						const t = Object(N.H)(s, {
								thingId: m
							}),
							n = t && Object(N.z)(s, {
								subredditName: t.name
							});
						n && (e.subredditCoins = n - b.coinPrice)
					}
					if (t(re(s, e)), f) {
						const e = {
								...V.a,
								...f.karma
							},
							n = e.fromAwardsReceived + h,
							r = Object(y.e)(f);
						t(Object(q.a)({
							userName: r,
							karma: {
								...e,
								fromAwardsReceived: n
							}
						}))
					}(s.posts.instances[m] || []).forEach(n => {
						t(re(s, {
							...e,
							id: n
						}))
					});
					const A = Object(U.a)(m) ? r.fbt._("Success! You have given this post the {awardName} Award", [r.fbt._param("awardName", b.name)], {
							hk: "1Ndi4Z"
						}) : r.fbt._("Success! You have given this comment the {awardName} Award", [r.fbt._param("awardName", b.name)], {
							hk: "2sIK9Y"
						}),
						T = b.coinPrice;
					Object(W.a)(Object(H.viewKarmaSuccessEvent)({
						award: b,
						awarderKarmaEarned: h,
						awardeeKarmaEarned: 0,
						numberCoins: T,
						thingId: m
					})(s)), t(Object(d.g)(w.a.GOLD_GILD_MODAL));
					const L = Object(I.a)(s, {
						award: b,
						minSize: 64,
						postOrCommentId: m
					});
					t(Object(l.f)({
						customIconAsset: L,
						kind: v.b.SuccessAward,
						text: h > 0 ? g({
							awarderKarmaReceived: h
						}) : A
					})), setTimeout(() => {
						const e = Object(D.a)(u, m),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const M = Date.now();
					await t(Object(c.b)(j));
					const B = Date.now() - M;
					if (T > 0) {
						const e = Object(k.f)(n()).filter(e => x.a.has(e.dealInfo.type));
						if (e.length) {
							const n = Math.max(900 - B, 10),
								r = Math.max(300 - B, 10),
								a = Object(U.a)(m) && Object(O.p)(Object(P.H)(s, {
									postId: m
								}));
							setTimeout(() => t(Object(i.e)({
								correlationId: j,
								packageId: e[0].mobileId
							})), a ? n : r)
						}
					}
					const R = Object(N.H)(s, {
						thingId: m
					});
					if (R && Object(C.a)(s, {
							subredditId: R.id
						}) && t(Object(J.a)(R.id, R.name, {
							force: !0
						})), 0 === T && R) {
						t(Object(o.a)(R.id, m, void 0, !0));
						const e = 399,
							r = Object(k.d)(n()).reduce((t, n) => {
								const r = Math.abs(n.pennies - e);
								return (!t || r < t.priceDelta) && (t = {
									packageId: n.mobileId,
									priceDelta: r
								}), t
							}, null);
						r && t(Object(i.b)({
							correlationId: j,
							packageId: r.packageId
						}))
					}
				}
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return d
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/modal.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				o = n("./src/reddit/actions/gold/constants.ts");
			const i = Object(r.a)(o.mb),
				c = Object(r.a)(o.t),
				d = e => async t => {
					await t(c({
						id: e
					})), t(Object(s.h)(a.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return E
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "d", (function() {
				return N
			})), n.d(t, "j", (function() {
				return S
			})), n.d(t, "i", (function() {
				return A
			})), n.d(t, "f", (function() {
				return T
			})), n.d(t, "g", (function() {
				return L
			})), n.d(t, "h", (function() {
				return M
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/formatApiError/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				c = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = n("./src/reddit/endpoints/gold/purchase.ts"),
				b = n("./src/reddit/helpers/correlationIdTracker.ts"),
				h = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				f = n("./src/reddit/models/Gold/Award.ts"),
				g = n("./src/reddit/models/Gold/ProductOffer.ts"),
				w = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				O = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				v = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const y = Object(a.a)(v.q),
				j = Object(a.a)(v.c),
				E = e => async (t, n) => {
					t(y(e)), t(Object(l.h)(i.a.ECON_COIN_PURCHASE))
				}, _ = () => async (e, t) => {
					e(j()), e(Object(l.g)(i.a.ECON_COIN_PURCHASE))
				}, I = Object(a.a)(v.u), C = ({
					correlationId: e,
					packageId: t
				}) => async (n, r) => {
					const s = r();
					Object(x.e)(s, t) ? (n(I({
						correlationId: e,
						packageId: t
					})), n(Object(l.i)(i.a.GOLD_TARGETED_OFFER_MODAL))) : o.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, k = Object(a.a)(v.p), P = ({
					correlationId: e,
					packageId: t
				}) => async (n, r) => {
					Object(x.c)(r(), t) ? (n(k({
						correlationId: e,
						packageId: t
					})), n(Object(l.i)(i.a.ECON_COIN_PACKAGE_OFFER))) : o.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, N = (e, t, n) => async (s, a) => {
					await s(Object(d.c)(e, n));
					const o = a(),
						i = Object(x.q)(o);
					if (0 !== i.length) s(E({
						correlationId: n,
						packageId: i[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(x.n)(o),
							t = r.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						s(Object(u.f)({
							kind: w.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, S = (e, t, n) => async (a, o, {
					apiContext: i
				}) => {
					const d = o(),
						{
							coins: l,
							pennies: u
						} = n,
						m = Object(O.r)(d) || Object(b.e)(b.a.GoldPayment, !1);
					let h, f;
					a(Object(c.stripeTokenPending)());
					const w = Object(O.y)(d);
					if (w || (h = await a(Object(c.validateAndCreateStripeToken)(e, t)), f = Object(O.v)(d), h)) try {
						const e = await Object(p.f)({
							coins: l,
							context: i(),
							correlationId: m,
							offerContext: Object(g.d)(n, !1),
							pennies: u,
							rememberCard: f,
							savedCardId: w || void 0,
							token: h
						});
						if (e.error) {
							const t = Object(s.a)(e.error, e.status);
							return void a(Object(c.stripeApiError)(t))
						}
						return a(Object(c.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (x) {
						const e = Object(s.a)(x);
						a(Object(c.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						a(Object(c.stripeApiError)(e))
					}
				}, A = (e, t, a, o) => async (i, d, {
					apiContext: l
				}) => {
					const u = d(),
						{
							coins: m,
							pennies: w
						} = a,
						x = Object(O.r)(u) || Object(b.e)(b.a.GoldPayment, !1);
					let v, y;
					i(Object(c.stripeTokenPending)());
					const j = Object(O.y)(u);
					if (j || (v = await i(Object(c.validateAndCreateStripeToken)(e, t)), y = Object(O.v)(u), v)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: d,
							selectedAward: O
						} = u.gild;
						if (!e || !O.id) {
							const e = r.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void i(Object(c.stripeApiError)(e))
						}
						const E = O.id,
							I = {
								gildType: E,
								isAnonymous: t,
								message: d
							},
							C = await Object(p.e)({
								coins: m,
								context: l(),
								correlationId: x,
								gildParams: I,
								isOldReddit: o,
								offerContext: Object(g.d)(a, !0),
								pennies: w,
								rememberCard: y,
								savedCardId: j || void 0,
								thingId: e,
								token: v
							});
						if (C.error) {
							const e = Object(s.a)(C.error, C.status);
							return void i(Object(c.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							i(_()), i(Object(c.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: r,
								all_awardings: s,
								coins: a,
								treatment_tags: o
							} = C.body;
							return i(t({
								awardKarmaReceived: r || 0,
								awardId: E,
								awardings: s && s.length ? Object(h.a)(s).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: o
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (E) {
						const e = Object(s.a)(E);
						i(Object(c.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						i(Object(c.stripeApiError)(e))
					}
				}, T = e => async (t, n, {
					apiContext: r
				}) => {
					const a = Object(b.c)(b.a.GoldPayment),
						{
							coins: i,
							pennies: d
						} = e;
					try {
						const e = await Object(m.a)({
							context: r(),
							coins: i,
							pennies: d,
							correlationId: a
						});
						if (e.error) {
							const n = Object(s.a)(e.error);
							return void t(Object(c.paypalApiError)(n))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						o.c.captureException(l);
						const e = Object(s.a)(l);
						t(Object(c.paypalApiError)(e))
					}
				}, L = (e, t) => async (n, r, {
					apiContext: a
				}) => {
					const i = r(),
						d = Object(O.r)(i) || Object(b.e)(b.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const r = await Object(m.c)({
							context: a(),
							offerContext: Object(g.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
						});
						if (r.error) {
							const e = Object(s.a)(r.error);
							return void n(Object(c.paypalApiError)(e))
						} {
							const {
								coins: e
							} = r.body;
							n(Object(c.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (p) {
						o.c.captureException(p);
						const e = Object(s.a)(p);
						n(Object(c.paypalApiError)(e))
					}
				}, M = (e, t) => async (a, i, {
					apiContext: d
				}) => {
					const l = i(),
						u = Object(O.r)(l) || Object(b.e)(b.a.GoldPayment, !1),
						{
							coins: p,
							pennies: w
						} = t;
					try {
						const {
							gildModalThingId: o,
							isAnonymous: i,
							message: x,
							selectedAward: O
						} = l.gild;
						if (!o || !O) return void a(Object(c.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const v = O.id,
							y = await Object(m.d)({
								context: d(),
								offerContext: Object(g.d)(t, !0),
								orderId: e,
								coins: p,
								pennies: w,
								thingId: o,
								awardId: v,
								message: x || "",
								isAnonymous: i,
								correlationId: u
							});
						if (y.error) {
							const e = Object(s.a)(y.error);
							a(Object(c.paypalApiError)(e))
						} else {
							a(_());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: r,
								subreddit_coins: s,
								treatment_tags: i
							} = y.body;
							a(Object(c.paymentCompleted)({
								coins: r,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(d({
								awardId: v,
								awardKarmaReceived: t || 0,
								awardings: Object(h.a)(e).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})),
								coins: r,
								id: o,
								subredditCoins: s,
								treatmentTags: i
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (x) {
						o.c.captureException(x);
						const e = Object(s.a)(x);
						a(Object(c.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return l
			})), n.d(t, "paymentCompleted", (function() {
				return u
			})), n.d(t, "cardNameInput", (function() {
				return m
			})), n.d(t, "postalCodeInput", (function() {
				return p
			})), n.d(t, "cardNameEmpty", (function() {
				return b
			})), n.d(t, "cardNumberChange", (function() {
				return h
			})), n.d(t, "cardExpiryChange", (function() {
				return f
			})), n.d(t, "cardCvcChange", (function() {
				return g
			})), n.d(t, "stripeTokenPending", (function() {
				return w
			})), n.d(t, "stripeTokenError", (function() {
				return x
			})), n.d(t, "stripeApiError", (function() {
				return O
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return v
			})), n.d(t, "paypalApiError", (function() {
				return y
			})), n.d(t, "toggleRememberCard", (function() {
				return j
			})), n.d(t, "selectSavedCard", (function() {
				return E
			})), n.d(t, "_deleteSavedCard", (function() {
				return _
			})), n.d(t, "deleteSavedCard", (function() {
				return I
			})), n.d(t, "savedCardsPending", (function() {
				return C
			})), n.d(t, "savedCardsSuccess", (function() {
				return k
			})), n.d(t, "loadSavedCards", (function() {
				return P
			}));
			var r = n("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				i = n("./src/reddit/endpoints/gold/purchase.ts"),
				c = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				d = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const l = Object(a.a)(d.B),
				u = Object(a.a)(d.w),
				m = Object(a.a)(d.b),
				p = Object(a.a)(d.y),
				b = Object(a.a)(d.a),
				h = Object(a.a)(d.G),
				f = Object(a.a)(d.F),
				g = Object(a.a)(d.E),
				w = Object(a.a)(d.I),
				x = Object(a.a)(d.H),
				O = Object(a.a)(d.D),
				v = (e, t) => async (n, a) => {
					const o = a(),
						i = Object(c.h)(o),
						d = Object(c.l)(o),
						l = t.getElement(r.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: m
					} = await e.createToken(l, {
						name: i,
						address_zip: d
					});
					if (i.trim()) {
						if (!m && u) return u;
						n(x(m || void 0))
					} else {
						const e = s.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						n(b({
							message: e
						}))
					}
				}, y = Object(a.a)(d.x), j = Object(a.a)(d.J), E = Object(a.a)(d.C), _ = Object(a.a)(d.g), I = e => async (t, n, {
					apiContext: r
				}) => {
					t(_(e));
					try {
						const t = await Object(i.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (s) {
						o.c.captureException(s)
					}
				}, C = Object(a.a)(d.z), k = Object(a.a)(d.A), P = () => async (e, t, {
					apiContext: n
				}) => {
					e(C());
					try {
						const t = await Object(i.b)(n());
						if (t.error) throw new Error(t.error.type);
						const r = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(k(r)), r[0] && e(E(r[0].cardId))
					} catch (r) {
						o.c.captureException(r), e(k([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return w
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return v
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/formatApiError/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				c = n("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				d = n("./src/reddit/endpoints/gold/purchase.ts"),
				l = n("./src/reddit/helpers/correlationIdTracker.ts"),
				u = n("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				m = n("./src/reddit/models/Gold/Award.ts"),
				p = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(a.a)(b.r),
				f = Object(a.a)(b.d),
				g = Object(a.a)(b.s),
				w = (e, t, n) => async e => {
					e(g({
						thingId: t
					})), e(h({
						correlationId: n
					}))
				}, x = (e, t, a) => async (o, c, {
					apiContext: b
				}) => {
					const h = c(),
						g = Object(l.c)(l.a.GoldPayment);
					let w, x;
					o(Object(i.stripeTokenPending)());
					const O = Object(p.y)(h);
					if (O || (w = await o(Object(i.validateAndCreateStripeToken)(e, t)), x = Object(p.v)(h), w)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: c,
							selectedAward: l
						} = h.gild;
						if (!e || !l.id) return void o(Object(i.stripeApiError)(r.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const p = l.id,
							v = l.pennyPrice;
						if (!v) return void o(Object(i.stripeApiError)(r.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const y = {
								gildType: p,
								isAnonymous: t,
								message: c
							},
							j = await Object(d.g)({
								context: b(),
								correlationId: g,
								gildParams: y,
								isOldReddit: a,
								pennies: v,
								rememberCard: x,
								savedCardId: O || void 0,
								thingId: e,
								token: w
							});
						if (j.error) {
							const e = Object(s.a)(j.error, j.status);
							return void o(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(f()), o(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: r,
								awarder_karma_received: s,
								coins: a,
								treatment_tags: c
							} = j.body;
							return void o(t({
								awardKarmaReceived: s || 0,
								awardId: p,
								awardings: r && r.length ? Object(u.a)(r).map(e => ({
									award: Object(m.h)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: c
							}))
						}
					} catch (v) {
						const e = Object(s.a)(v);
						o(Object(i.stripeApiError)(e))
					} else o(Object(i.stripeApiError)(r.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, O = (e, t, n) => async (r, a, {
					apiContext: d
				}) => {
					const u = Object(l.c)(l.a.GoldPayment);
					try {
						const a = await Object(c.b)({
							context: d(),
							awardId: e,
							pennies: t,
							thingId: n,
							correlationId: u
						});
						if (a.error) {
							const e = Object(s.a)(a.error);
							return void r(Object(i.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = a.body;
							return e
						}
					} catch (m) {
						o.c.captureException(m);
						const e = Object(s.a)(m);
						r(Object(i.paypalApiError)(e))
					}
				}, v = e => async (t, a, {
					apiContext: d
				}) => {
					const p = a(),
						b = Object(l.c)(l.a.GoldPayment);
					try {
						const {
							gildModalThingId: a,
							isAnonymous: o,
							message: l,
							selectedAward: h
						} = p.gild;
						if (!a || !h) return void t(Object(i.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const g = h.id,
							w = await Object(c.e)({
								awardId: g,
								context: d(),
								orderId: e,
								thingId: a,
								message: l || "",
								isAnonymous: o,
								correlationId: b
							});
						if (w.error) {
							const e = Object(s.a)(w.error);
							t(Object(i.paypalApiError)(e))
						} else {
							t(f());
							const {
								all_awardings: e,
								awarder_karma_received: r,
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
							} = await n.e("gildActions").then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(d({
								awardKarmaReceived: r || 0,
								awardId: g,
								awardings: Object(u.a)(e).map(e => ({
									award: Object(m.h)(e),
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
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/env/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				i = n("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/models/Toast/index.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(a.a)(m.j),
				b = Object(a.a)(m.k),
				h = Object(a.a)(m.i),
				f = e => async (t, n, {
					apiContext: a
				}) => {
					t(p());
					const d = n(),
						l = Object(c.K)(d);
					try {
						const n = !l,
							r = await Object(i.b)({
								context: a(),
								correlationId: e,
								shouldUseCurrentOrigin: n
							});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const s = r.body;
						t(b(s))
					} catch (u) {
						Object(s.b)() || console.error(u), o.c.captureException(u);
						const e = r.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(h(e))
					}
				}, g = Object(a.a)(m.m), w = Object(a.a)(m.n), x = Object(a.a)(m.l), O = (e, t) => async (n, a, {
					apiContext: c
				}) => {
					n(g());
					try {
						const r = await Object(i.c)({
							awardId: e,
							context: c(),
							correlationId: t
						});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const s = r.body;
						if (!s.coinPackages || !s.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						n(w(s))
					} catch (d) {
						Object(s.b)() || console.error(d), o.c.captureException(d);
						const e = r.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						n(x(e))
					}
				}, v = Object(a.a)(m.h), y = () => async (e, t, {
					gqlContext: n
				}) => {
					var a, c;
					try {
						const t = await Object(i.a)(n());
						if (t.ok) {
							const n = t.body.data.claimAwardOffer;
							if (null === (a = n.errors) || void 0 === a ? void 0 : a.length) throw new Error(n.errors.map(e => e.message).join(" | "));
							if (!(null === (c = n.awards) || void 0 === c ? void 0 : c.length)) throw new Error("Got empty award list on free award offer claim");
							if (!n.ok) throw new Error("Got not ok response on free award offer claim");
							await e(v({
								awards: n.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(s.b)() || console.error(m), e(Object(d.f)({
							kind: l.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), o.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/Econ/CoinsModalHeader/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/GildModalContent/index.m.less": function(e, t, n) {
			e.exports = {
				gildModalContent: "_13s1q9tBn7qddM-UPVtpnC",
				modalMainContent: "_1-n44O8_Kquo1Wl43y39VQ"
			}
		},
		"./src/reddit/components/GildModalContent/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./node_modules/fbt/lib/FbtPublic.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/opener/index.ts"),
				l = n("./src/reddit/helpers/isPost.ts");
			var u = (e, t) => {
					return Object(l.a)(t.id) ? e.filter(e => !(e => e.some(e => e.startsWith("econ:transferable:econ:render:")))(e.award.tags || [])) : e
				},
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/localStorage/index.ts"),
				b = n("./src/reddit/helpers/trackers/gild.ts"),
				h = n("./src/reddit/models/Gold/Award.ts"),
				f = n("./src/reddit/models/Subreddit/index.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
				w = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				x = n("./src/reddit/actions/gold/econPurchase.ts"),
				O = n("./src/reddit/actions/gold/gild.ts"),
				v = n("./src/reddit/actions/gold/giveAward.ts"),
				y = n("./src/reddit/actions/gold/modals.ts"),
				j = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				E = n("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				_ = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				I = n("./src/reddit/actions/subreddit.ts"),
				C = n("./src/reddit/actions/toaster.ts"),
				k = n("./src/reddit/selectors/commentSelector.ts"),
				P = n("./src/reddit/selectors/communityAwards.ts"),
				N = n("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				S = n("./src/reddit/selectors/gild.ts"),
				A = n("./src/reddit/selectors/gold/awardIcon.ts"),
				T = n("./src/reddit/selectors/gold/econPurchase.ts"),
				L = n("./src/reddit/selectors/gold/giveAwards.ts"),
				M = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				B = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				R = n("./src/reddit/selectors/posts.ts"),
				D = n("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				G = n("./src/reddit/selectors/subreddit.ts"),
				F = n("./src/reddit/selectors/user.ts"),
				U = n("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				H = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/higherOrderComponents/makeAsync.tsx")),
				W = n("./src/lib/loadWithRetries/index.ts"),
				V = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const q = () => Object(W.a)(() => Promise.all([n.e("PennyPurchaseModal").then(n.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(V.d)().catch(() => {})])).then(e => e[0].default);
			var z = Object(H.a)({
					getComponent: q,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				J = n("./src/reddit/components/TrackingHelper/index.tsx"),
				K = n("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				Y = n.n(K),
				X = n("./src/reddit/helpers/awards/message.ts"),
				Q = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Z = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				$ = n("./src/reddit/icons/svgs/Eye/index.tsx"),
				ee = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				te = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				ne = n("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				re = n("./src/reddit/icons/fonts/Coin/index.tsx");
			const se = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return s.a.createElement(s.a.Fragment, null, e.map((e, t) => 0 === t ? e : s.a.createElement(s.a.Fragment, {
						key: t + e
					}, s.a.createElement(re.a, null), e)))
				}
				return null
			};
			class ae extends s.a.PureComponent {
				render() {
					const {
						award: e,
						awardIcon: t,
						className: n
					} = this.props, r = !!e.pennyPrice;
					return s.a.createElement("div", {
						className: Object(c.a)(n, Y.a.awardDescriptionContainer)
					}, s.a.createElement("div", {
						className: Y.a.iconContainer
					}, s.a.createElement("img", {
						className: Y.a.icon,
						src: t
					})), s.a.createElement("div", {
						className: Y.a.awardName
					}, i.fbt._("{awardName} Award", [i.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), s.a.createElement("div", {
						className: Y.a.benefits
					}, s.a.createElement(se, {
						award: e
					})), s.a.createElement("div", {
						className: Y.a.price
					}, r ? i.fbt._("Purchase for ${dollarPrice}", [i.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : e.coinPrice > 0 ? s.a.createElement(s.a.Fragment, null, s.a.createElement(te.a, {
						className: Y.a.coinIcon
					}), i.fbt._("{coinPrice}", [i.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "3MZDc4"
					})) : i.fbt._("Free", null, {
						hk: "EW8V2"
					})), e.endsAt && s.a.createElement(ne.a, {
						className: Y.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var oe = ae,
				ie = n("./src/reddit/controls/Button/index.tsx"),
				ce = n("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: de
			} = n("./node_modules/fbt/lib/FbtPublic.js"), le = 10;
			class ue extends s.a.PureComponent {
				renderButtonText() {
					const {
						needPayment: e,
						needPremium: t,
						selectedAward: n
					} = this.props, r = n.awardType === h.f.Moderator;
					return t ? de._("Get Premium", null, {
						hk: "3VB1S9"
					}) : !e || r ? de._("Give", null, {
						hk: "30MOda"
					}) : de._("Next", null, {
						hk: "zG5NI"
					})
				}
				render() {
					const {
						needPayment: e,
						needPremium: t,
						onGetPremium: n,
						onGild: r,
						onNeedPayment: a,
						pending: o,
						selectedAward: i
					} = this.props, d = i.awardType === h.f.Moderator;
					return s.a.createElement(ie.l, {
						className: Object(c.a)(Y.a.gildButton, {
							[Y.a.premiumButton]: t
						}),
						"data-redditstyle": !0,
						disabled: o || d && e,
						onClick: t ? n : e ? a : r
					}, o ? s.a.createElement(ce.a, {
						className: Y.a.loadingIcon,
						sizePx: le
					}) : this.renderButtonText())
				}
			}
			var me = ue;

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
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
							thingId: n,
							toggleIsAnonymous: r
						} = this.props;
						t(Object(b.triggerAnonymousEvent)(e ? "uncheck" : "check", n)), r()
					}
				}
				renderPrivacyToggle() {
					const {
						forcePublic: e,
						isAnonymous: t
					} = this.props;
					return e ? null : s.a.createElement(Z.a, {
						className: Y.a.giver,
						isSelected: t,
						text: i.fbt._("Make my gift anonymous", null, {
							hk: "2XfgGX"
						}),
						onClick: this.handleToggleAnonymous
					})
				}
				renderTextArea() {
					const {
						isLivestream: e,
						selectedAward: t,
						message: n
					} = this.props, r = {
						disabled: !1,
						maxLength: Object(X.c)(t, e),
						placeholder: i.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === r.maxLength ? (r.disabled = !0, r.placeholder = i.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : r.placeholder = i.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const a = !e || r.maxLength > 0,
						o = a && n.length > r.maxLength;
					return s.a.createElement("div", {
						className: Object(c.a)(Y.a.textAreaWrapper, {
							[Y.a.messageTooLong]: o
						})
					}, s.a.createElement(Q.t, pe({
						className: Y.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: a ? n : ""
					}, r)), a && s.a.createElement("div", {
						className: Y.a.characterCountdown
					}, r.maxLength - n.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? s.a.createElement("div", {
						className: Y.a.publicIndicator
					}, s.a.createElement($.a, {
						className: Y.a.eyeIcon
					}), i.fbt._("Shows my username", null, {
						hk: "1HsXbA"
					})) : null
				}
				renderGildButton() {
					return s.a.createElement("div", {
						className: Y.a.gildButtonWrapper
					}, s.a.createElement(me, this.props.gildButtonProps))
				}
				renderCommunityCoinBalance() {
					if (this.props.selectedAward.awardType !== h.f.Moderator) return null;
					const {
						subredditName: e,
						subredditCoins: t
					} = this.props, n = i.fbt._("r/{subredditName} balance: {coinBalance}", [i.fbt._param("subredditName", e), i.fbt._param("coinBalance", t ? t.toLocaleString() : "0")], {
						hk: "1G3rBQ"
					});
					return s.a.createElement("div", {
						className: Y.a.subredditCoinBalance
					}, n)
				}
				render() {
					const {
						className: e,
						selectedAward: t,
						selectedAwardIcon: n,
						hideTextArea: r
					} = this.props;
					return s.a.createElement("div", {
						className: Object(c.a)(e, Y.a.awardDetailsPane)
					}, s.a.createElement("div", {
						className: Y.a.awardDescriptionWrapper
					}, s.a.createElement("div", {
						className: Y.a.spacerTop
					}), s.a.createElement(oe, {
						award: t,
						awardIcon: n
					}), s.a.createElement("div", {
						className: Y.a.spacerBottom
					}), t.awardType === h.f.Moderator ? s.a.createElement("span", {
						className: Y.a.giver
					}, s.a.createElement(ee.a, {
						className: Y.a.modIcon
					}), i.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), !r && this.renderTextArea(), this.renderPublicIndicator(), this.renderCommunityCoinBalance()), this.renderGildButton())
				}
			}
			var he = be,
				fe = n("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				ge = n.n(fe);
			const we = s.a.memo((function(e) {
				let t = "",
					n = "";
				return e.post && e.post.isRPANBroadcast && e.post.isFeedTheMeterEnabled && (t = i.fbt._("Give your favorite broadcasts more airtime with awards!", null, {
					hk: "1bDI3E"
				}), n = ge.a.rpanBanner), t ? s.a.createElement("div", {
					className: Object(c.a)(ge.a.banner, n)
				}, t) : null
			}));
			var xe = Object(a.b)((e, t) => {
					if (Object(l.a)(t.thingId)) {
						const n = Object(R.H)(e, {
							postId: t.thingId
						});
						if (!n) return {};
						const r = !!n.media && "rpan" === n.media.type,
							s = r && Object(N.g)(e, t.thingId, D.l);
						return {
							post: {
								...n,
								isRPANBroadcast: r,
								isFeedTheMeterEnabled: s
							}
						}
					}
					return {}
				})(we),
				Oe = n("./src/reddit/components/RichTextJson/index.tsx"),
				ve = n("./src/reddit/icons/svgs/Advance/index.tsx");
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
					let n = this.state.horizontalOffset + t;
					if (n > 0) return void this.setState({
						horizontalOffset: 0,
						rightScrollVisible: !0
					});
					for (const s of e.childNodes) {
						const e = s;
						if (e.offsetLeft + n + e.scrollWidth > 0) {
							n = -1 * e.offsetLeft;
							break
						}
					}
					const r = e.scrollWidth > n + t;
					this.setState({
						horizontalOffset: n,
						rightScrollVisible: r
					})
				}
				scrollRight() {
					this.props.sendEvent(Object(b.clickNextFiltersEvent)());
					const e = this.optionsRef.current,
						t = this.carouselRef.current.clientWidth;
					let n = null;
					for (const s of e.childNodes) {
						const r = s,
							a = r.offsetLeft + e.offsetLeft,
							o = a + r.scrollWidth;
						if (a >= t || a < t && o > t) {
							n = r;
							break
						}
					}
					if (!n) return;
					const r = e.scrollWidth > n.offsetLeft + t;
					this.setState({
						horizontalOffset: -1 * n.offsetLeft,
						rightScrollVisible: r
					})
				}
				scrollSnap(e) {
					const t = this.optionsRef.current,
						n = this.carouselRef.current.clientWidth,
						r = t.childNodes[e],
						s = r.offsetLeft + t.offsetLeft,
						a = s + r.scrollWidth;
					if (s < 40 || a > n - 40) {
						const s = e ? -1 * r.offsetLeft + 40 : 0,
							a = t.scrollWidth + s > n;
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
						className: ge.a.filterCarousel,
						ref: this.carouselRef
					}, this.state.horizontalOffset < 0 && s.a.createElement("div", {
						className: Object(c.a)(ge.a.carouselButtonWrapper, ge.a.carouselButtonWrapperLeft)
					}, s.a.createElement("button", {
						className: ge.a.carouselButton,
						onClick: () => this.scrollLeft()
					}, s.a.createElement("div", {
						className: ge.a.carouselButtonIcon,
						tabIndex: -1
					}, s.a.createElement(ve.a, {
						className: ge.a.advanceLeft
					})))), s.a.createElement("div", {
						className: ge.a.pillOptionsContainer,
						ref: this.optionsRef,
						style: {
							left: this.state.horizontalOffset
						}
					}, e.map((e, n) => s.a.createElement("button", {
						key: e.tag,
						className: ge.a.pillOptionWrapper,
						onClick: () => this.handleTagClick(e.tag, n)
					}, s.a.createElement("div", {
						className: ge.a.focusElement,
						tabIndex: -1
					}, s.a.createElement(Oe.a, {
						className: Object(c.a)(ge.a.pillOption, {
							[ge.a.selectedPillOption]: t === e.tag
						}),
						content: e.content.richtext,
						rtJsonElementProps: {},
						useExplicitTextColor: !0
					}))))), this.state.rightScrollVisible && s.a.createElement("div", {
						className: Object(c.a)(ge.a.carouselButtonWrapper, ge.a.carouselButtonWrapperRight)
					}, s.a.createElement("button", {
						className: ge.a.carouselButton,
						onClick: () => this.scrollRight()
					}, s.a.createElement("div", {
						className: ge.a.carouselButtonIcon,
						tabIndex: -1
					}, s.a.createElement(ve.a, null)))))
				}
			}
			var je = ye,
				Ee = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				_e = n("./src/reddit/icons/svgs/New/index.tsx"),
				Ie = n("./src/reddit/icons/svgs/Premium/index.tsx");
			var Ce = e => s.a.createElement("svg", {
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
			const ke = s.a.memo(e => {
				let t, n;
				const r = !!e.award.tags && e.award.tags.some(e => e.includes("econ:render:lottie:"));
				if (e.award.awardSubType === h.d.Moderator) t = ee.a, n = ge.a.moderatorIcon;
				else if (e.award.awardSubType === h.d.Premium) t = e.premiumUser ? Ie.a : Ee.a, n = e.premiumUser ? ge.a.premiumIcon : ge.a.lockIcon;
				else if (r) t = Ce, n = ge.a.transferableIcon;
				else {
					if (!e.award.isNew) return null;
					t = _e.a, n = ge.a.newIcon
				}
				return s.a.createElement("div", {
					className: Object(c.a)(ge.a.iconBadgeContainer, n)
				}, s.a.createElement(t, {
					className: ge.a.iconBadge
				}))
			});
			var Pe = s.a.memo(e => {
				const {
					award: t,
					awardIcon: n,
					isSelected: r,
					premiumUser: a,
					onSelect: o
				} = e;
				return s.a.createElement("button", {
					className: Object(c.a)(ge.a.selectableAward, {
						[ge.a.selected]: r
					}),
					onClick: () => o(t)
				}, s.a.createElement("div", {
					className: ge.a.buttonContent,
					tabIndex: -1
				}, s.a.createElement("div", {
					className: ge.a.iconContainer
				}, s.a.createElement("img", {
					className: ge.a.icon,
					src: n
				}), s.a.createElement("div", {
					className: ge.a.badgeContainer
				}, s.a.createElement(ke, {
					award: t,
					premiumUser: a
				}))), s.a.createElement("div", {
					className: Object(c.a)(ge.a.metaText, {
						[ge.a.metaTextBold]: !t.pennyPrice && 0 === t.coinPrice
					})
				}, t.pennyPrice ? i.fbt._("${cost}", [i.fbt._param("cost", (t.pennyPrice / 100).toLocaleString())], {
					hk: "P4xjQ"
				}) : t.coinPrice > 0 ? t.coinPrice.toLocaleString() : i.fbt._("Free", null, {
					hk: "4exiMW"
				}))))
			});
			const Ne = {
					colWidth: 60,
					colGutter: 8,
					rowWidth: 86,
					rowGutter: 4
				},
				Se = {
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
			var Te = s.a.memo(e => {
					const {
						awardIcons: t,
						awardTotals: n,
						awardsPending: a,
						onSelect: o,
						premiumUser: i,
						selectedAward: d,
						sendEvent: l,
						tags: u,
						thingId: m
					} = e, [p, h] = Object(r.useState)({}), [f, g] = Object(r.useState)(Ae(Se)), [w, x] = Object(r.useState)(Se.tag);
					Object(r.useEffect)(() => {
						const e = {},
							t = Ae(Se);
						n.forEach(n => {
							e[n.award.id] = n, t[Se.tag].push(n.award.id);
							const r = n.award.tags;
							r && r.forEach(e => {
								void 0 === t[e] && (t[e] = []), t[e].push(n.award.id)
							})
						}), h(e), g(t)
					}, [n]);
					const O = [Se, ...u.filter(e => f[e.tag])],
						v = f[w],
						[y, j] = Object(r.useState)(!1),
						[E, _] = Object(r.useState)(1),
						I = Object(r.useCallback)(e => {
							if (null !== e) {
								const t = e.clientWidth,
									{
										colWidth: n,
										colGutter: r
									} = Ne,
									s = t > (n + r) * (v.length - 1) + n + n + r;
								if (j(s), s) _(v.length);
								else {
									const e = Math.floor((t - n) / (n + r) + 1);
									_(e)
								}
							}
						}, [v]);
					if (a || !n.length) return s.a.createElement("div", {
						className: ge.a.awardSelectorPane
					});
					const C = e => {
						o(e);
						const t = O.find(e => e.tag === w) || Se,
							n = v.findIndex(t => t === e.id),
							r = Math.floor(n / E),
							s = n - r * E;
						l(Object(b.clickSelectAwardEvent)(e, m, {
							awardColPosition: s + 1,
							awardRowPosition: r + 1,
							filterId: w,
							filterName: t.content.markdown
						}))
					};
					return s.a.createElement("div", {
						className: ge.a.awardSelectorPane
					}, s.a.createElement(xe, {
						thingId: e.thingId
					}), s.a.createElement(je, {
						tags: O,
						selectedTag: w,
						sendEvent: l,
						onSelectTag: x
					}), s.a.createElement("div", {
						className: ge.a.awardSectionScrollWrapper
					}, s.a.createElement("div", {
						className: ge.a.awardSectionContainer
					}, s.a.createElement("div", {
						className: Object(c.a)(ge.a.awardSection, {
							[ge.a.singleRowGrid]: y
						}),
						ref: I
					}, v.map(e => {
						const n = p[e].award,
							r = e === d.id,
							a = t[e];
						return s.a.createElement(Pe, {
							award: n,
							awardIcon: a,
							awardCount: p[e].total,
							isSelected: r,
							key: n.id,
							premiumUser: i,
							onSelect: C,
							thingId: m
						})
					})))))
				}),
				Le = n("./src/lib/localizeCurrency/index.ts"),
				Me = n("./src/reddit/components/Econ/CoinsModalHeader/index.m.less"),
				Be = n.n(Me),
				Re = n("./src/reddit/icons/svgs/Plus/index.tsx");
			const {
				fbt: De
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Ge({
				onButtonClick: e,
				onCancel: t,
				title: n,
				buttonText: r
			}) {
				return s.a.createElement("div", {
					className: Be.a.gildHeader
				}, s.a.createElement("button", {
					className: Be.a.closeBtn,
					onClick: t
				}, s.a.createElement(Q.b, {
					className: Be.a.closeBtnIcon
				})), s.a.createElement("div", {
					className: Be.a.headerText
				}, n), s.a.createElement("button", {
					className: Be.a.coinButton,
					onClick: e
				}, s.a.createElement("div", {
					className: Be.a.coinBalanceIndicator,
					tabIndex: -1
				}, s.a.createElement(te.a, {
					className: Be.a.coinIcon
				}), s.a.createElement("div", {
					className: Be.a.coinBalance
				}, r)), s.a.createElement("div", {
					className: Be.a.addCoins,
					tabIndex: -1
				}, s.a.createElement(Re.a, {
					className: Be.a.plusIcon
				}))))
			}
			var Fe = n("./src/reddit/hooks/useLocale.ts"),
				Ue = n("./src/reddit/selectors/experiments/econ/index.ts");
			const {
				fbt: He
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var We = ({
				onCancel: e,
				thingId: t,
				userCoins: n
			}) => {
				const r = Object(Fe.a)(),
					o = Object(J.b)(),
					i = Object(a.e)(e => !n && Boolean(Object(M.h)(e)) && Object(Ue.u)(e)),
					c = i ? He._("Get free Coins with Premium", null, {
						hk: "3fzsqq"
					}) : Object(Le.a)(n || 0, {
						locale: r
					});
				return s.a.createElement(Ge, {
					onCancel: e,
					onButtonClick: () => {
						o(Object(b.clickAddCoinsButtonEvent)(t));
						const e = i ? "/premium" : "/coins";
						window.open(e, "_blank")
					},
					title: He._("Awards", null, {
						hk: "3w1C6X"
					}),
					buttonText: c
				})
			};
			const Ve = (e, t) => e.length > h.l.length && !e.find(e => e.award.id === t.id);
			var qe = n("./src/reddit/components/GildModalContent/index.m.less"),
				ze = n.n(qe);
			const Je = (e, {
					thingId: t,
					subredditId: n
				}) => {
					let r = n;
					if (!n) {
						const n = Object(G.H)(e, {
							thingId: t
						});
						r = n && n.id
					}
					if (!r && Object(l.a)(t)) {
						const n = Object(R.H)(e, {
							postId: t
						});
						r = n && n.belongsTo.id
					}
					return r
				},
				Ke = Object(o.a)(Object(o.c)({
					awardings: (e, {
						thingId: t,
						subredditId: n
					}) => {
						const r = Je(e, {
							thingId: t,
							subredditId: n
						});
						return r ? Object(P.h)(e, {
							subredditId: r,
							thingId: t
						}) : []
					},
					awardIcons: (e, {
						thingId: t,
						subredditId: n
					}) => {
						const r = Je(e, {
								thingId: t,
								subredditId: n
							}),
							s = (r ? Object(P.h)(e, {
								subredditId: r,
								thingId: t
							}) : []).map(e => e.award);
						return Object(A.b)(e, {
							awards: s,
							minSize: 128,
							postOrCommentId: t
						})
					},
					awardingsPending: (e, {
						thingId: t,
						subredditId: n
					}) => {
						let r = n;
						if (!n) {
							const n = Object(G.H)(e, {
								thingId: t
							});
							if (!n) return !1;
							r = n.id
						}
						return Object(P.g)(e, {
							subredditId: r,
							thingId: t
						})
					},
					correlationId: e => Object(S.b)(e) || Object(m.e)(m.a.GildingFlow, !1),
					currentUser: F.k,
					errorMessage: S.a,
					isAnonymous: S.f,
					iFramed: S.g,
					isGildPending: S.e,
					isEmployee: F.H,
					isRecommendedCoinPackagePending: M.p,
					message: S.c,
					postOrComment: (e, {
						thingId: t
					}) => Object(l.a)(t) ? Object(R.H)(e, {
						postId: t
					}) : Object(k.b)(e, {
						commentId: t
					}),
					isChatDisabled: (e, {
						thingId: t
					}) => !!Object(l.a)(t) && Object(D.f)(e, {
						streamIdFromPath: t
					}),
					purchaseCatalogPending: M.o,
					showPurchaseModal: B.u,
					selectedAward: L.b,
					subreddit: G.H,
					subredditCoins: (e, {
						thingId: t,
						subredditId: n
					}) => {
						const r = Object(G.H)(e, {
								thingId: t
							}),
							s = r ? r.id : n;
						return Object(G.y)(e, {
							subredditId: s
						})
					},
					tags: (e, {
						thingId: t,
						subredditId: n
					}) => {
						let r = n;
						if (!n) {
							const n = Object(G.H)(e, {
								thingId: t
							});
							r = n && n.id
						}
						if (!r && Object(l.a)(t)) {
							const n = Object(R.H)(e, {
								postId: t
							});
							r = n && n.belongsTo.id
						}
						return r ? Object(P.i)(e, {
							subredditId: r
						}) : []
					},
					userCoins: (e, t) => {
						const n = Object(F.e)(e),
							r = Je(e, t);
						return n + Object(T.a)(e, {
							subredditId: r
						})
					},
					inViewerFeedTheMeter: (e, {
						thingId: t
					}) => Object(N.g)(e, t, D.l)
				}), e => {
					const {
						awardings: t,
						isEmployee: n,
						postOrComment: r,
						selectedAward: s,
						subredditCoins: a,
						userCoins: o,
						isChatDisabled: i
					} = e, {
						awardType: c,
						coinPrice: d,
						pennyPrice: l
					} = s, m = c === h.f.Moderator, p = !!l || ((m ? a : o) || 0) < d && !(n && !m), b = r && r.media && "rpan" === r.media.type, f = r ? u(t, r) : t;
					return {
						...e,
						awardings: f,
						needPayment: p,
						cost: l || d,
						isRpanPost: !!b,
						isChatDisabled: !!b && i
					}
				});
			class Ye extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showPurchaseModalInThisInstance: !1
					}, this.handleEscapeKey = e => {
						const {
							closeGildModal: t,
							showPurchaseModal: n
						} = this.props;
						if (27 === e.keyCode && !n) return t()
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
							needPaymentRequested: n,
							selectedAward: r,
							sendEvent: s,
							thingId: a
						} = this.props;
						s(Object(b.clickNextButtonEvent)(a)), n({
							awardId: r.id,
							correlationId: t,
							cost: e,
							isPennyPurchase: !!r.pennyPrice,
							thingId: a
						}), this.setState({
							showPurchaseModalInThisInstance: !0
						})
					}, this.onGetPremium = () => {
						const {
							selectedAward: e,
							sendEvent: t,
							thingId: n
						} = this.props;
						t(Object(b.clickGetPremiumEvent)(n, e)), window.open("/premium", d.d.BLANK, d.c)
					}, this.onGildRequested = () => {
						const {
							gildRequested: e,
							iFramed: t,
							isLivestream: n,
							selectedAward: r,
							sendEvent: s,
							thingId: a
						} = this.props;
						return s(Object(b.clickConfirmAwardEvent)(a, r)), e(t, !!n)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey);
					const {
						isAnonymous: e
					} = this.props;
					Object(p.ub)(e)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						awardings: e,
						awardsAndTagsRequested: t,
						correlationId: n,
						isAnonymous: r,
						isRpanPost: s,
						needPayment: a,
						postOrComment: o,
						purchaseCatalogPending: i,
						purchaseCatalogRequested: c,
						selectAward: d,
						selectedAward: l,
						sendEvent: u,
						setIsAnonymous: g,
						subreddit: w,
						subredditAboutRequested: x,
						subredditId: O,
						subredditLockedCoinsRequested: v,
						subredditName: y,
						thingId: j,
						displayUnusableAwardError: E
					} = this.props;
					n || Object(m.e)(m.a.GildingFlow, !1), u(Object(b.viewGildModalEvent)(l.id, r, j)), g(!s && Object(p.q)());
					const _ = w ? w.id : O || (o && o.belongsTo ? o.belongsTo.id : void 0);
					if (_ && t(_), Ve(e, l) && (E(), d(h.n)), w || y) {
						x(w ? w.name : y)
					}
					w && w.type !== f.f.User && v(w.id, w.name), a && (l.pennyPrice ? q() : Object(U.a)(), i || c(n))
				}
				componentDidUpdate(e) {
					e.awardingsPending && !this.props.awardingsPending && Ve(this.props.awardings, this.props.selectedAward) && (this.props.displayUnusableAwardError(), this.props.selectAward(h.n))
				}
				render() {
					const {
						awardings: e,
						awardIcons: t,
						awardingsPending: n,
						className: r,
						closeGildModal: a,
						currentUser: o,
						isAnonymous: i,
						iFramed: d,
						isGildPending: l,
						isRecommendedCoinPackagePending: u,
						isRpanPost: m,
						message: p,
						needPayment: b,
						selectedAward: f,
						sendEvent: g,
						showPurchaseModal: w,
						subreddit: x,
						subredditCoins: O,
						subredditName: v,
						tags: y,
						thingId: j,
						userCoins: E,
						isChatDisabled: _
					} = this.props, {
						showPurchaseModalInThisInstance: I
					} = this.state, C = w && I, k = C && !f.pennyPrice, P = C && !!f.pennyPrice, N = (k || P) && !d;
					if (k && N) return null;
					if (P && N) return s.a.createElement(z, null);
					const S = x ? x.name : v,
						A = !(!o || !o.isGold),
						T = {
							needPayment: b,
							needPremium: !A && f.awardSubType === h.d.Premium,
							onNeedPayment: this.onNeedPayment,
							onGetPremium: this.onGetPremium,
							onGild: this.onGildRequested,
							pending: l || u,
							selectedAward: f,
							thingId: j
						};
					return s.a.createElement("div", {
						className: Object(c.a)(r, ze.a.gildModalContent)
					}, s.a.createElement(We, {
						onCancel: a,
						thingId: j,
						userCoins: E
					}), s.a.createElement("div", {
						className: ze.a.modalMainContent
					}, s.a.createElement(Te, {
						awardIcons: t,
						awardTotals: e,
						awardsPending: n,
						premiumUser: A,
						onSelect: this.props.selectAward,
						selectedAward: f,
						sendEvent: g,
						tags: y,
						thingId: j
					}), s.a.createElement(he, {
						forcePublic: m,
						isAnonymous: i,
						isLivestream: m,
						hideTextArea: _,
						message: p,
						selectedAward: f,
						selectedAwardIcon: t[f.id],
						sendEvent: g,
						thingId: j,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						gildButtonProps: T,
						subredditName: S,
						subredditCoins: O
					})), P && s.a.createElement(z, null))
				}
			}
			t.a = Object(a.b)(Ke, (e, {
				author: t,
				profileId: n,
				thingId: r
			}) => ({
				awardsAndTagsRequested: s => e(Object(w.a)(s, r, n && t)),
				closeGildModal: () => e(Object(y.a)()),
				gildRequested: (t, n) => e(Object(O.gildGqlRequested)(r, {
					isOldReddit: t,
					isLivestream: n
				})),
				needPaymentRequested: ({
					awardId: t,
					correlationId: n,
					cost: r,
					isPennyPurchase: s,
					thingId: a
				}) => {
					e(s ? Object(E.b)(r, a, n) : Object(j.d)(t, a, n))
				},
				purchaseCatalogRequested: t => e(Object(_.b)(t)),
				selectAward: t => e(Object(v.a)(t)),
				displayUnusableAwardError: () => e(Object(C.f)({
					kind: g.b.Error,
					duration: C.a,
					text: i.fbt._("This award is not available on this content.", null, {
						hk: "13VV1D"
					})
				})),
				setIsAnonymous: t => {
					e(Object(O.setIsAnonymous)(t)), Object(p.ub)(t)
				},
				subredditAboutRequested: t => e(Object(I.u)(t)),
				subredditLockedCoinsRequested: (t, n) => e(Object(x.a)(t, n)),
				updateMessage: t => e(Object(O.updateMessage)(t))
			}))(Object(J.c)(Ye))
		},
		"./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less": function(e, t, n) {
			e.exports = {
				karmaLink: "_33-F8KNeBDS4RS9mUMQdxH"
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			var r = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = n("./src/reddit/featureFlags/component.tsx");
			const a = Object(r.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(s.a)("spBurnLinks", Object(r.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/reddit/components/Media/index.m.less"),
				i = n.n(o);
			const c = (e, t) => e && t ? r.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? r.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? r.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = ({
					isNSFW: e,
					isSpoiler: t
				}) => a.a.createElement("div", {
					className: i.a.unblurButtonContainer
				}, a.a.createElement("button", {
					className: i.a.unblurButton
				}, c(e, t)))
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(a.b)(() => Object(o.c)({
					isNightmodeOn: m.X
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(i.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					r = {
						overflow: "hidden"
					};
				return r.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (r.margin = "0 auto"), e.isListing || (r.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (r.maxHeight = e.maxHeight || void 0), s.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: r,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return k
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				b = n("./src/reddit/components/PlayButton/index.tsx"),
				h = n("./src/reddit/constants/elementClassNames.ts"),
				f = n("./src/reddit/controls/OutboundLink/index.tsx"),
				g = n("./src/reddit/helpers/trackers/ads.ts"),
				w = n("./src/reddit/hooks/useClickSourceData.ts"),
				x = n("./src/reddit/models/Media/index.ts"),
				O = n("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				v = n("./src/reddit/selectors/posts.ts"),
				y = n("./src/reddit/selectors/telemetry.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				E = n("./src/reddit/constants/tracking.ts"),
				_ = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				I = n.n(_);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => e > 2 * x.e,
				P = e => {
					const t = Object(d.a)(I.a.image, h.g, e.className, {
							[I.a.mShowCentered]: e.showCentered,
							[I.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					return e.showFull || e.isTall || (n.maxHeight = `${x.j}px`), e.isListing || e.isTall && k(e.height) || (n.maxHeight = `${x.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`), a.a.createElement("img", {
						alt: e.altText || r.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				N = e => {
					const t = {};
					return (!e.showFull && Object(x.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${x.j}px`, e.shouldBlur && (t.maxWidth = Object(x.L)(e.height, e.width) ? `${x.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), a.a.createElement("div", {
						className: Object(d.a)(I.a.container, e.className),
						style: t
					}, e.children)
				},
				S = Object(o.b)(() => Object(c.a)(v.G, j.db, (e, {
					isSponsored: t,
					postId: n
				}) => t && n ? Object(v.b)(e, n) : null, O.a, y.d, v.H, (e, t, n, r, s, a) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					sendGoodVisitEvent: r,
					pageType: s.pageType,
					post: a
				})));
			t.a = S(e => {
				const t = e.sendGoodVisitEvent ? Object(w.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? a.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(f.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(g.a)(e.post, e.pageType)
					}
				}, T(e)) : e.isListing && e.postPermalink ? a.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink),
					onClick: e.onPostMediaClick
				}, T(e)) : T(e)
			});
			const A = (e, t) => a.a.createElement(P, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[E.a]: !e
					}),
					height: t.height,
					isExpando: !!t.isExpando,
					isListing: t.isListing,
					isTall: e,
					maxHeight: t.maxHeight,
					maxWidth: t.maxWidth,
					shouldBlur: t.shouldBlur,
					showCentered: t.showCentered,
					showFull: t.showFull,
					src: Object(l.a)(t.source),
					width: t.width
				}),
				T = ({
					onClick: e,
					...t
				}) => {
					const n = Object(x.L)(t.height, t.width),
						s = k(t.height) && n;
					return a.a.createElement(N, C({}, t, {
						className: `${n?`${E.a} `:""}${t.className||""}`
					}), t.isListing ? a.a.createElement("div", {
						className: t.contentImageClassName
					}, A(n, t)) : a.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: s ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: I.a.imageLink
					}, A(n, t), t.shouldBlur && !t.isVideoThumbnail && a.a.createElement(p.a, {
						isNSFW: !!t.isNSFW,
						isSpoiler: !!t.isSpoiler
					})), t.isListing && !t.showFull && t.height > x.j && Object(x.L)(t.height, t.width) && a.a.createElement("div", {
						className: I.a.seeMore
					}, r.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && a.a.createElement(b.a, {
						onClick: e
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
			e.exports = {
				blur: "_2iaYXFpGyyEGq1rp02cl5w",
				container: "m3aNC6yp8RrNM_-a0rrfa",
				isGalleryTileLayout: "_1fptM9wVD8i598KW_RjLWO",
				video: "_3PIKVMCKdveCEcyiKr43sU",
				spacer: "_3gBRFDB5C34UWyxEe_U6mD",
				wrapper: "_3JgI-GOrkmyIeDeyzXdyUD",
				mColoredBackground: "_2CSlKHjH7lsjx0IpjORx14"
			}
		},
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/forceHttps/index.ts"),
				i = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < i.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
						...t ? {
							maxHeight: `${t}px`
						} : {},
						...e.showFull && !e.showCentered ? {
							maxWidth: `${e.width}px`
						} : {},
						...e.blurSrc ? {
							overflow: "hidden"
						} : {}
					},
					r = e.blurSrc ? s.a.createElement("img", {
						className: d.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					c = Object(i.B)(e.height, e.width, e.forceAspectRatio);
				return s.a.createElement("div", {
					className: Object(a.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, r, !e.isGalleryTileLayout && s.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), s.a.createElement("div", {
					className: Object(a.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends s.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return s.a.Children.only(this.props.children) || s.a.createElement("div", null)
					}
					return s.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return E
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/video.ts"),
				u = n("./src/reddit/constants/tracking.ts"),
				m = n("./src/reddit/models/Media/index.ts"),
				p = n("./src/reddit/selectors/user.ts"),
				b = n("./src/reddit/selectors/video.ts");
			const h = 100,
				f = h / 2 / 1e3;
			var g = n("./src/lib/forceHttps/index.ts"),
				w = n("./src/lib/hooks/usePrevious.ts");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function O({
				autoplay: e,
				isListing: t,
				isNotCardView: n,
				onBufferingChange: r,
				shouldLoad: s,
				shouldPause: i,
				showCentered: c,
				showFull: d,
				source: l,
				...u
			}) {
				const m = Object(a.useRef)(),
					p = Object(a.useRef)(),
					b = Object(w.a)(i);

				function O(e) {
					if (e) {
						const e = null === (t = null == p ? void 0 : p.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == p ? void 0 : p.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(a.useEffect)(() => {
					if (O(!i && (e || n)), p.current && r) return m.current = function(e, t) {
						let n = !1,
							r = !1;
						const s = () => n = !0,
							a = () => r = !0;
						e.addEventListener("loadeddata", s), e.addEventListener("play", a), e.addEventListener("playing", a);
						let o = !1,
							i = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, r) return r = !1, void(i = c);
							if (e.paused || e.seeking || !n) return void(i = c);
							const s = o;
							4 === e.readyState ? o = !1 : !o && c >= i && c < i + f ? o = !0 : o && c >= i && c > i + f && (o = !1), i = c, s !== o && t(o)
						}, h);
						return () => {
							clearInterval(d), e.removeEventListener("playing", a), e.removeEventListener("play", a), e.removeEventListener("loadeddata", s)
						}
					}(p.current, r), () => {
						m.current && m.current()
					}
				}, []), Object(a.useEffect)(() => {
					b !== i && O(!i && (e || n))
				}, [b, i, e, n]), o.a.createElement("video", x({}, u, {
					ref: e => p.current = e,
					muted: !0
				}), o.a.createElement("source", {
					src: Object(g.a)(l || "")
				}))
			}
			var v = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				y = n.n(v);
			const j = Object(c.c)({
				autoplayPref: p.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function E(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: r,
					metadata: a,
					started: c
				} = Object(i.e)(t => j(t, e)), {
					postId: p,
					shouldLoad: b,
					source: h,
					height: f,
					isNotCardView: g,
					showFull: w,
					shouldPause: x,
					width: v,
					isListing: E,
					className: _,
					showCentered: I,
					originalSource: C
				} = e, k = Object(i.d)();

				function P(e) {
					k(e ? Object(l.r)(p) : Object(l.E)(p))
				}

				function N() {
					return k(Object(l.z)({
						postId: p
					}))
				}
				const S = s()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && k(Object(l.s)(p))
				}, 200);

				function A(e) {
					e.persist(), S(e)
				}

				function T(e) {
					var t;
					(a || M(e), c) || (t = e.timeStamp, k(Object(l.A)(p, t)))
				}

				function L(e) {
					k(Object(l.q)(p, e.timeStamp))
				}

				function M(e) {
					! function(e) {
						k(Object(l.D)({
							metadata: e,
							postId: p
						}))
					}({
						id: p,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function B(e) {
					r || T(e), a || M(e), k(Object(l.C)(p))
				}

				function R() {
					const e = {};
					return I && (e.margin = "0 auto"), E || (e.maxHeight = `${m.e}px`), o.a.createElement(O, {
						autoplay: t,
						className: Object(d.a)(u.a, y.a.styledVideo),
						height: f,
						isListing: E,
						isNotCardView: g,
						key: p,
						loop: !0,
						onBufferingChange: P,
						onLoadStart: L,
						onLoadedData: T,
						onLoadedMetadata: M,
						onPause: N,
						onPlaying: B,
						onTimeUpdate: A,
						shouldLoad: b,
						shouldPause: x,
						showCentered: I,
						showFull: w,
						source: h,
						style: e,
						width: v
					})
				}
				return E ? R() : o.a.createElement("div", {
					className: Object(d.a)(y.a.container, _, {
						[y.a.centered]: I
					})
				}, o.a.createElement("a", {
					href: C,
					target: "_blank",
					rel: "noopener noreferrer"
				}, R()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
			e.exports = {
				hiddenLink: "_3dhFVFchWAAFXfLFTa94n9",
				visibilityWrapper: "_1NSbknF8ucHV2abfCZw2Z1",
				displayNone: "_1Q2mF3u7v9hBVu_4bkC7R4",
				galleryMediaContainer: "_3ozFpM1W8BRdrzkr_ssGxZ",
				miniCardVideo: "_18_METUBD2i2iqGBz4ofw1",
				unblurButtonContainer: "_3jrT7JqZwfGWyxKf4SYuRj",
				unblurButton: "_2bcjL-4RRFQN5OUQMrcioo"
			}
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
			e.exports = {
				InnerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				innerSpan: "_3mIYu0jAt23sIWGr4pFcI",
				TooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				tooltipTarget: "_2XOXS9oLSigrX7LIefjqhe",
				SpoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				spoilerWrapper: "_2v4IIjPhKL0PDaWaWtjJ1E",
				isOpen: "_15VS32zBYFUDI5ssldQhEK",
				Component: "_3CBmNG6xIaLHHh1ts_10tN",
				component: "_3CBmNG6xIaLHHh1ts_10tN"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				g = m.a.span("TooltipTarget", u.a),
				w = m.a.span("SpoilerWrapper", u.a),
				x = m.a.wrapped(({
					className: e,
					isOpen: t,
					...n
				}) => a.a.createElement(w, p({}, n, {
					className: Object(o.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				O = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class v extends a.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}))
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.state.isOpen || this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						isOpen: !1,
						showTooltip: !1
					}
				}
				render() {
					const {
						isOpen: e,
						showTooltip: t
					} = this.state;
					return a.a.createElement(x, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, a.a.createElement(f, null, a.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), a.a.createElement(O, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: r.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = v
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
			e.exports = {
				H1: "_7T4UafM1PdBGycd5na9nF",
				h1: "_7T4UafM1PdBGycd5na9nF",
				H2: "_1WODZhR-x-fbMu3MOL9cH1",
				h2: "_1WODZhR-x-fbMu3MOL9cH1",
				H3: "WFFrvt6_3z5B7MBcYKr8U",
				h3: "WFFrvt6_3z5B7MBcYKr8U",
				H4: "_2UlSUuiYR4BRv_FiLxCcu9",
				h4: "_2UlSUuiYR4BRv_FiLxCcu9",
				H5: "hnYPKCNkyo9X6QpCXHj1I",
				h5: "hnYPKCNkyo9X6QpCXHj1I",
				H6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				h6: "_1ceLNhXCFZ1_Lj9Th4go_C",
				Hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				hr: "_2ACwpV3Y0LKhHHKbsxNmmY",
				M: "_34q3PgLsx9zIU5BiSOjFoM",
				m: "_34q3PgLsx9zIU5BiSOjFoM",
				Pre: "_3GnarIQX9tD_qsgXkfSDz1",
				pre: "_3GnarIQX9tD_qsgXkfSDz1",
				Blockquote: "_28lDeogZhLGXvE95QRPeDL",
				blockquote: "_28lDeogZhLGXvE95QRPeDL",
				P: "_1qeIAgB0cPwnLhDF9XSiJM",
				p: "_1qeIAgB0cPwnLhDF9XSiJM",
				Li: "_3gqTEjt4x9UIIpWiro7YXz",
				li: "_3gqTEjt4x9UIIpWiro7YXz",
				Ul: "_33MEMislY0GAlB78wL1_CR",
				ul: "_33MEMislY0GAlB78wL1_CR",
				Ol: "_1eJr7K139jnMstd4HajqYP",
				ol: "_1eJr7K139jnMstd4HajqYP",
				B: "_12FoOEddL7j_RgMQN0SNeU",
				b: "_12FoOEddL7j_RgMQN0SNeU",
				I: "_7s4syPYtk5hfUIjySXcRE",
				i: "_7s4syPYtk5hfUIjySXcRE",
				U: "HoWuCifWxDx-PnwllGmZd",
				u: "HoWuCifWxDx-PnwllGmZd",
				Sub: "_2aQztsTwdz2uTN4arsyBD6",
				sub: "_2aQztsTwdz2uTN4arsyBD6",
				Sup: "_1jsgSPRO0cMQfs1UZrSovE",
				sup: "_1jsgSPRO0cMQfs1UZrSovE",
				Table: "MRH-njmSb5ZTkfb1o4dqv",
				table: "MRH-njmSb5ZTkfb1o4dqv",
				Tr: "s6JZe6869f81l9E_5G7Q9",
				tr: "s6JZe6869f81l9E_5G7Q9",
				Tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				tdl: "_3DYfYn_cczg1wj_a3hhyV6",
				Tdc: "_1LHijgw3WoeCUe8AUewfUB",
				tdc: "_1LHijgw3WoeCUe8AUewfUB",
				Tdr: "_3DqGFKR55y45L5IxBTgsFz",
				tdr: "_3DqGFKR55y45L5IxBTgsFz",
				Thl: "_4uv59XIILEFm6V3BmtSuR",
				thl: "_4uv59XIILEFm6V3BmtSuR",
				Thc: "_3TNkDptlyGOiWXvdX_acOB",
				thc: "_3TNkDptlyGOiWXvdX_acOB",
				Thr: "_1AUCpXmm3maPuEbUSe90Y8",
				thr: "_1AUCpXmm3maPuEbUSe90Y8",
				A: "_3t5uN8xUmg0TOwRCOGQEcU",
				a: "_3t5uN8xUmg0TOwRCOGQEcU"
			}
		},
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return g
			})), n.d(t, "i", (function() {
				return w
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "u", (function() {
				return v
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "t", (function() {
				return I
			})), n.d(t, "p", (function() {
				return C
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "r", (function() {
				return S
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "w", (function() {
				return T
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				o = n("./src/reddit/components/RichTextJson/elements.m.less"),
				i = n.n(o),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", i.a), c.a.div("H2", i.a), c.a.div("H3", i.a), c.a.div("H4", i.a), c.a.div("H5", i.a), c.a.div("H6", i.a)],
				u = c.a.hr("Hr", i.a),
				m = c.a.code("M", i.a),
				p = c.a.pre("Pre", i.a),
				b = c.a.blockquote("Blockquote", i.a),
				h = c.a.p("P", i.a),
				f = c.a.li("Li", i.a),
				g = c.a.ul("Ul", i.a),
				w = c.a.ol("Ol", i.a),
				x = c.a.strong("B", i.a),
				O = c.a.em("I", i.a),
				v = c.a.span("U", i.a),
				y = e => s.a.createElement("del", e),
				j = c.a.sub("Sub", i.a),
				E = c.a.sup("Sup", i.a),
				_ = c.a.table("Table", i.a),
				I = c.a.tr("Tr", i.a),
				C = c.a.td("Tdl", i.a),
				k = c.a.td("Tdc", i.a),
				P = c.a.td("Tdr", i.a),
				N = c.a.th("Thl", i.a),
				S = c.a.th("Thc", i.a),
				A = (c.a.th("Thr", i.a), c.a.wrapped(e => s.a.createElement(a.b, e), "A", i.a)),
				T = c.a.wrapped(d.a, "A", i.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return j
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "a", (function() {
				return I
			}));
			var r = n("./node_modules/lodash/findLastIndex.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = n("./src/lib/sentry/index.ts"),
				l = n("./src/reddit/components/Media/BlurredContent.tsx"),
				u = n("./src/reddit/constants/elementClassNames.ts"),
				m = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/media.tsx"),
				f = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = n("./src/reddit/components/RichTextJson/index.m.less"),
				w = n.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = n("./src/lib/lessComponent.tsx").a.div("Container", w.a),
				v = Object(c.a)(({
					flairStyleTemplate: e,
					theme: t,
					...n
				}) => o.a.createElement(O, x({}, n, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...n
						}))
					}
				}))),
				y = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				j = e => s()(e, y),
				E = e => e.findIndex(y),
				_ = e => {
					const {
						altText: t,
						className: n,
						content: r,
						isListing: s,
						isNSFW: a,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: g,
						useExplicitTextColor: x,
						shouldBlur: y
					} = e, _ = r.document, I = [], C = e.mediaMetadata || null, k = E(_), P = j(_);
					if (y && !s) return o.a.createElement(O, {
						className: Object(i.a)(u.j, n)
					}, o.a.createElement("div", {
						className: w.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: w.a.unblurButton,
						onClick: d
					}, Object(l.b)(!!a, !!c))));
					if (-1 !== k)
						for (let o = k; o <= P; o++) {
							const e = _[o];
							switch (e.e) {
								case b.k:
									I.push(f.c(e, g, o));
									break;
								case b.l:
									I.push(f.d(o));
									break;
								case b.b:
									I.push(f.a(e, C, g, o));
									break;
								case b.c:
									I.push(f.b(e, o));
									break;
								case b.p:
									I.push(f.f(e, C, g, o));
									break;
								case b.z:
									I.push(f.h(e, C, g, o));
									break;
								case b.u:
									I.push(f.g(e, C, g, o));
									break;
								case b.h:
									I.push(Object(h.a)(e, o));
									break;
								case b.m:
								case b.a:
								case b.D:
									I.push(...Object(h.b)(e, o, C, p, m, t))
							}
						}
					return x ? o.a.createElement(O, {
						className: Object(i.a)(u.j, n)
					}, I) : o.a.createElement(v, {
						className: Object(i.a)(u.j, n),
						flairStyleTemplate: e.flairStyleTemplate
					}, I)
				};
			class I extends o.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => "Something went wrong while trying to render this"
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					d.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), d.c.captureException(e)
					})
				}
				render() {
					const {
						renderFallback: e = this.renderDefaultFallback,
						...t
					} = this.props;
					if (this.hasError || this.state.hasError) return e();
					try {
						return _(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return I
			})), n.d(t, "b", (function() {
				return k
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				a = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				i = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/helpers/richTextJson/index.ts"),
				b = n("./src/reddit/models/RichTextJson/index.ts"),
				h = n("./src/reddit/components/RichTextJson/elements.tsx"),
				f = n("./src/reddit/components/RichTextJson/media.m.less"),
				g = n.n(f),
				w = n("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = /\/(\w+)\/asset\/(\w+)\//,
				v = w.a.wrapped(h.a, "A", g.a),
				y = w.a.wrapped(l.a, "ImageBox", g.a),
				j = w.a.wrapped(e => a.a.createElement("p", e), "Caption", g.a),
				E = w.a.div("Placeholder", g.a),
				_ = w.a.wrapped(({
					className: e,
					e: t,
					...n
				}) => {
					const s = t === b.D ? r.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : r.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return a.a.createElement(E, x({
						className: e,
						style: {
							"--placeholder-content-text": `'${s}'`
						}
					}, n))
				}, "Placeholder", g.a),
				I = ({
					c: e,
					x: t,
					y: n
				}, r) => a.a.createElement("div", {
					className: g.a.MediaWrapper
				}, a.a.createElement(u.a, {
					height: n,
					isListing: !1,
					key: r,
					showCentered: !0,
					showFull: !0,
					width: t
				}, a.a.createElement(d.a, {
					isListing: !1,
					source: e,
					height: n,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				C = (e, t, n) => {
					const r = e.c;
					let s = "";
					return n && (n.e === b.s ? s = n.s.u : n.e === b.r ? s = n.s.gif : n.e === b.t && (s = (e => {
						const t = O.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), s ? a.a.createElement(v, {
						href: s,
						key: t,
						title: r
					}, r || s) : null
				},
				k = (e, t, n, r, s, i) => {
					const d = b.E(n, e.id);
					if (r) return [C(e, t, d)];
					const l = [];
					return d ? d.e === b.s ? l.push((({
						id: e,
						s: t
					}, n, r, s) => a.a.createElement("div", {
						className: Object(o.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: r
						})
					}, a.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: n,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, a.a.createElement(y, {
						altText: s,
						originalSource: t.u,
						postId: e,
						source: t.u,
						height: t.y,
						width: t.x,
						shouldBlur: !1,
						showCentered: !0,
						showFull: !0,
						isListing: !1
					}))))(d, t, !!e.c, i)) : d.e === b.r ? l.push((({
						id: e,
						ext: t,
						s: n
					}, r, s) => {
						if (Object(p.g)(e)) {
							const i = t || Object(p.f)(e);
							return a.a.createElement("div", {
								className: Object(o.a)(g.a.MediaWrapper, {
									[g.a.mHasCaption]: s
								})
							}, a.a.createElement(v, {
								href: i,
								key: r,
								target: "_blank"
							}, n.mp4 ? a.a.createElement("video", {
								className: g.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, a.a.createElement("source", {
								src: n.mp4
							})) : {
								originalSource: i
							}))
						}
						return a.a.createElement("div", {
							className: Object(o.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: s
							})
						}, a.a.createElement(u.a, {
							height: n.y,
							isListing: !1,
							key: r,
							showCentered: !0,
							showFull: !0,
							width: n.x
						}, a.a.createElement(m.a, {
							height: n.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: n.mp4,
							width: n.x,
							postId: e,
							source: n.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: n,
						y: r,
						isGif: s
					}, i, d, l) => a.a.createElement("div", {
						className: Object(o.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: d
						})
					}, a.a.createElement(u.a, {
						height: r,
						isListing: !1,
						isVideo: !0,
						key: i,
						showCentered: !0,
						showFull: !0,
						width: n
					}, a.a.createElement(c.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: s,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: s
					}))))(d, t, !!e.c, s)) : l.push(((e, t) => a.a.createElement(_, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => a.a.createElement(j, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return A
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "a", (function() {
				return L
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "h", (function() {
				return D
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "e", (function() {
				return U
			}));
			var r = n("./src/lib/unicodeUtils/index.ts"),
				s = n("./node_modules/lodash/reduce.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/v4.js"),
				l = n.n(d),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/models/Product/index.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				w = n.n(g);
			const x = 1e3,
				O = 1e3;
			var v;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(v || (v = {}));
			class y extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = v.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = v.Inside, setTimeout(() => {
							this.mouseLocation === v.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, x)
					}, this.onMouseOut = () => {
						this.mouseLocation = v.Outside, setTimeout(() => {
							this.mouseLocation !== v.Inside && this.setState({
								tooltipOpen: !1
							})
						}, O)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = b.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.ib(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, r, s;
					t.e === p.s ? (n = t.s.x, r = t.s.y, s = t.s.u) : t.e === p.r && (n = t.s.x, r = t.s.y, s = t.s.gif);
					const a = this.state.tooltipOpen ? l()() : void 0;
					return s ? i.a.createElement("div", {
						className: w.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: a,
						src: s,
						width: n,
						height: r,
						title: `:${Object(m.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(f, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: a,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var j = Object(u.c)(y),
				E = n("./src/reddit/components/RichTextJson/media.tsx"),
				_ = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				I = n("./src/reddit/components/SubredditMention/index.tsx"),
				C = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				k = n("./src/reddit/helpers/isComment.ts"),
				P = n("./src/reddit/helpers/isPost.ts"),
				N = n("./src/reddit/helpers/richTextJson/index.ts"),
				S = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const A = (e, t, n) => {
					const r = e.c || [],
						s = e.l,
						a = [],
						o = r.length;
					for (let i = 0; i < o; i++) {
						const e = r[i];
						a.push(e.e === p.w ? e.t : U(e, t, i))
					}
					const d = c.x[s - 1];
					return i.a.createElement(d, {
						key: n
					}, a)
				},
				T = e => i.a.createElement(c.e, {
					key: e
				}),
				L = (e, t, n, r) => {
					const s = e.c;
					if (!s) return;
					const a = s.length,
						o = [];
					for (let i = 0; i < a; i++) o.push(R(s[i], t, n, i));
					return i.a.createElement(c.c, {
						key: r
					}, o)
				},
				M = (e, t) => {
					const n = e.c;
					return i.a.createElement(c.k, {
						key: t
					}, i.a.createElement(c.h, null, n.reduce((e, t, n, r) => e += t.t + (n < r.length ? "\n" : ""), "")))
				},
				B = (e, t, n, r) => {
					const s = e.c,
						a = [],
						o = s.length;
					for (let l = 0; l < o; l++) {
						const e = s[l].c;
						e && e.length && a.push(i.a.createElement(c.g, {
							key: l
						}, e.map((e, r) => R(e, t, n, r))))
					}
					const d = e.o ? c.i : c.v;
					return i.a.createElement(d, {
						key: r
					}, a)
				},
				R = (e, t, n, r) => {
					switch (e.e) {
						case p.b:
							return L(e, t, n, r);
						case p.c:
							return M(e, r);
						case p.k:
							return A(e, n, r);
						case p.l:
							return T(r);
						case p.p:
							return B(e, t, n, r);
						case p.u:
							return G(e, t, n, r);
						case p.z:
							return D(e, t, n, r)
					}
				},
				D = (e, t, n, r) => {
					const s = e.c,
						a = e.h,
						o = s.length,
						d = a.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = a[c],
							{
								H: r,
								D: s
							} = q(e.a),
							{
								c: o = []
							} = e;
						l.push(i.a.createElement(r, {
							key: c
						}, F(o, t, n))), m[c] = s
					}
					for (let p = 0; p < o; p++) {
						const e = s[p],
							r = e.length,
							a = [];
						for (let s = 0; s < r; s++) {
							const r = m[s],
								{
									c: o = []
								} = e[s];
							a.push(i.a.createElement(r, {
								key: s
							}, F(o, t, n)))
						}
						u.push(i.a.createElement(c.t, {
							key: p
						}, a))
					}
					return i.a.createElement(c.n, {
						key: r
					}, i.a.createElement("thead", null, i.a.createElement(c.t, null, l)), i.a.createElement("tbody", null, u))
				},
				G = (e, t, n, r) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(c.j, {
						key: e
					}, i.a.createElement("br", null)))(r);
					const s = e.c[0];
					return s.e !== p.m && s.e !== p.a || !Object(N.g)(s.id) ? i.a.createElement(c.j, {
						key: r
					}, F(e.c, t, n)) : Object(E.b)(s, r, t)
				},
				F = (e, t, n) => {
					const r = [],
						s = e.length;
					for (let a = 0; a < s; a++) {
						const s = e[a];
						if (s.e === p.A) r.push(H(s, a));
						else if (s.e === p.x) r.push(i.a.createElement(_.a, {
							key: a
						}, F(s.c, t, n)));
						else if (s.e === p.n) r.push(i.a.createElement("br", {
							key: a
						}));
						else if (s.e === p.m || s.e === p.a) {
							if (s.id.startsWith("emote|")) {
								const e = p.E(t, s.id);
								e && r.push(i.a.createElement(j, {
									key: a,
									node: s,
									media: e
								}))
							}
						} else r.push(U(s, n, a))
					}
					return r
				},
				U = (e, t, n) => {
					switch (e.e) {
						case p.o:
							const r = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(C.b)(e.u)) return i.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, r);
							let s, a;
							const o = Object(S.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(P.b)(d) && (s = d.postId), d && Object(k.b)(d) && (a = d.id, s = d.postId), i.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: o,
								postId: s,
								commentId: a
							}, r);
						case p.y:
							return i.a.createElement(I.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return i.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return i.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: n,
						t: s
					} = e, a = [];
					if (!n) return V(0, s, t);
					const o = Object(r.a)(s);
					let i = 0,
						c = 0;
					const d = n.length;
					for (; i < d; i++) {
						const [e, t, r] = n[i], d = t + r, l = o[t], u = o[d] - l;
						l > c && a.push(V(0, s.substr(c, l - c), `between${i}`)), a.push(V(e, s.substr(l, u), i)), c = l + u
					}
					return c < s.length && a.push(V(0, s.substr(c), `remaining${i}`)), a
				},
				W = {
					[p.j.monospace]: c.h,
					[p.j.bold]: c.b,
					[p.j.italic]: c.f,
					[p.j.underline]: c.u,
					[p.j.strikethrough]: c.d,
					[p.j.subscript]: c.l,
					[p.j.superscript]: c.m
				},
				V = (e, t, n) => {
					let r = t;
					return r = a()(W, (t, r, s) => e & parseInt(s, 10) ? i.a.createElement(r, {
						key: n
					}, t) : t, r)
				},
				q = e => {
					switch (e) {
						case p.f:
							return {
								H: c.r, D: c.q
							};
						case p.d:
							return {
								H: c.r, D: c.o
							};
						case p.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/components/SubredditIcon/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);
			const l = a.a.wrapped(o.b, "SubredditIcon", d.a),
				u = a.a.wrapped(e => s.a.createElement(i.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => s.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, s.a.createElement(l.a, {
						href: `/r/${e}/`
					}, s.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, s.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = n("./src/reddit/selectors/subredditMention.ts");
			class w extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return s.a.createElement(i.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const x = Object(b.c)(w),
				O = Object(o.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				v = Object(a.b)(O),
				y = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: n,
					userVariant: r,
					rtJsonElementProps: a
				}) => {
					if (!t || !e) return s.a.createElement(x, {
						subredditName: n,
						rtJsonElementProps: a
					});
					switch (r) {
						case h.Pe.SmIcon:
							return s.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: a
							});
						case h.Pe.SmIconHc:
							return s.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return s.a.createElement(x, {
								subredditName: n,
								rtJsonElementProps: a
							})
					}
				};
			t.b = v(y)
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/TimeLeft/index.m.less"),
				o = n.n(a),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/timeAgo/index.ts"),
				d = n("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: n
				} = e, r = Math.floor(n.getTime() / 1e3), a = Object(c.b)(r);
				return s.a.createElement("div", {
					className: Object(i.a)(t)
				}, s.a.createElement(d.a, {
					className: o.a.clockIcon
				}), s.a.createElement("span", {
					className: o.a.timeLeft
				}, a))
			}
		},
		"./src/reddit/components/TimeLeft/index.m.less": function(e, t, n) {
			e.exports = {
				clockIcon: "_1DDlcC1o7n-afkLICCzCK9",
				timeLeft: "UN0qnXla79aOGiH-PaULH"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = n.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			}));
			var r = n("./src/lib/constants/index.ts"),
				s = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts"),
				i = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = n("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: n
			}) => {
				const d = {
						button_id: e,
						correlation_id: n
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(i.a)(l);
				return Object(s.a)(Object(a.a)(t, [o.a]), {
					method: r.jb.POST,
					endpoint: u,
					data: d
				}).then(c.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: n,
				correlationId: i
			}) => {
				const d = {
					coins: t,
					pennies: n,
					correlation_id: i
				};
				return Object(s.a)(Object(a.a)(e, [o.a]), {
					method: r.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(c.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: n,
				thingId: i,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: n,
					thing_id: i
				};
				return Object(s.a)(Object(a.a)(e, [o.a]), {
					method: r.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(c.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: n,
				coins: i,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: n,
					coins: i,
					pennies: d,
					correlation_id: l
				};
				return Object(s.a)(Object(a.a)(e, [o.a]), {
					method: r.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(c.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: n,
				correlationId: i,
				isAnonymous: d,
				message: l,
				offerContext: u,
				orderId: m,
				pennies: p,
				thingId: b
			}) => {
				const h = {
					award_id: e,
					coins: n,
					correlation_id: i,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(s.a)(Object(a.a)(t, [o.a]), {
					method: r.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(c.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: n,
				isAnonymous: i,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: n,
					is_anonymous: i,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(s.a)(Object(a.a)(t, [o.a]), {
					method: r.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(c.c)
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const r = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(r)(e => {
					const {
						featureEnabled: r,
						...a
					} = e, o = a;
					return r ? s.a.createElement(t, o) : void 0 !== n ? s.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => `awardItem__${t}-${e}`
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			}));
			const r = 500,
				s = 1800,
				a = (e, t = !1) => t ? e.coinPrice < r ? 0 : e.coinPrice < s ? 50 : 100 : 2048,
				o = (e, t, n = !1) => {
					const r = a(t, n);
					return e.slice(0, r)
				}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/bignumber.js/bignumber.js"),
				s = n("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.dividedToIntegerBy(s).toString()
			}

			function o(e, t) {
				return Object(s.b)(parseInt(a(e, t), 10))
			}

			function i(e, t) {
				const n = new r.BigNumber(e),
					s = new r.BigNumber(t || 1);
				return n.multipliedBy(s).toFixed(0)
			}
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				o = n("./src/telemetry/models/Outbound.ts");
			const i = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(s.b)(e) || Object(a.b)(e))) return Object(s.b)(e) ? o.SourceElement.Comment : Object(r.x)(t) ? o.SourceElement.PostDetail : Object(r.G)(t) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "g", (function() {
				return w
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "e", (function() {
				return y
			}));
			var r, s, a = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/isComment.ts"),
				i = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(s || (s = {}));
			const m = e => ({
					...u.o(e),
					source: s.LINK,
					action: a.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: s,
					screen: u.ab(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: r
					} = t;
					if (!n || !Object(i.b)(n) && !Object(o.b)(n)) return {
						outbound: void 0
					};
					const s = Object(i.b)(n) ? "postId" : "commentId",
						a = {
							url: `/r/${r}/`,
							sourceElement: Object(c.a)(t),
							subredditName: r,
							[s]: n.id
						},
						d = Object(l.w)(e, {
							subredditName: r
						});
					return d ? {
						outbound: {
							...a,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...a
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(i.b)(n) && !Object(o.b)(n)) return {};
					const r = Object(i.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.I(e, n.id),
						subreddit: u.jb(e, r),
						...b(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...h(t, e)
				}),
				g = e => t => ({
					...p(t),
					source: "global",
					action: a.c.VIEW,
					noun: r.SUBREDDIT_HOVERCARD,
					subreddit: u.kb(t, e),
					screen: u.ab(t)
				}),
				w = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: a.c.VIEW,
					noun: r.ITEM_POST,
					post: u.I(n, t),
					subreddit: u.kb(n, e),
					screen: u.ab(n)
				}),
				x = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.ITEM_POST,
					post: u.I(n, t),
					subreddit: u.kb(n, e),
					screen: u.ab(n)
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.jb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.jb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.jb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/svgs/Advance/index.m.less": function(e, t, n) {
			e.exports = {
				default: "_8j1c5tda8wyYwjTEGlw7C"
			}
		},
		"./src/reddit/icons/svgs/Advance/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Advance/index.m.less"),
				i = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(i.a.default, e.className),
				viewBox: "0 0 13 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M6.707 6.707a.997.997 0 000-1.414l-5-5A.999.999 0 10.293 1.707L4.586 6 .293 10.293a.999.999 0 101.414 1.414l5-5zm6 0a.997.997 0 000-1.414l-5-5a.999.999 0 10-1.414 1.414L10.586 6l-4.293 4.293a.999.999 0 101.414 1.414l5-5z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, n) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = n.n(o);
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
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, n) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				i = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				className: Object(a.a)(i.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), s.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), s.a.createElement("path", {
				className: Object(a.a)(i.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), s.a.createElement("path", {
				className: Object(a.a)(i.a.shadow, e.shadowClassName),
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
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);

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
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/constants/colors.ts");
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
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "b", (function() {
				return o
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/fbt/lib/FbtPublic.js");
			const s = new Set(["low_coin_upsell"]),
				a = new Set(["new_purchaser", "repeat_purchaser"]),
				o = [{
					prompt: () => r.fbt._("What are coins?", null, {
						hk: "bD2cQ"
					}),
					answer: () => r.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your coins in the future.", null, {
						hk: "2RS7Fb"
					})
				}, {
					prompt: () => r.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => r.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => r.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => r.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 coins and gives the recipient a week of Reddit Premium membership and 100 coins. Finally, the ultra rare Platinum Award costs 1800 coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 coins for that month.", null, {
						hk: "Mvg07"
					})
				}, {
					prompt: () => r.fbt._("I bought coins, how can I tell how many I have?", null, {
						hk: "4a4pGf"
					}),
					answer: () => r.fbt._("If you buy coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "2VWZ2s"
					})
				}, {
					prompt: () => r.fbt._("Can I transfer coins between Reddit accounts?", null, {
						hk: "1jLVez"
					}),
					answer: () => r.fbt._("You cannot transfer your Reddit coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 coins.", null, {
						hk: "435l4g"
					})
				}, {
					prompt: () => r.fbt._("Can I get coins for free?", null, {
						hk: "1fhxmd"
					}),
					answer: () => r.fbt._("We may give away coins on special occasions. Stay tuned!", null, {
						hk: "3qKa11"
					})
				}, {
					prompt: () => r.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => r.fbt._("Yes, Creddits are simply called \"coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3bz9Wy"
					})
				}, {
					prompt: () => r.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => r.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "coins".', null, {
						hk: "aFpGc"
					})
				}]
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var r;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return r
				})), n.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, n) {
			"use strict";
			var r;
			n.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(r || (r = {}))
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/gold/constants.ts");
			const a = {};
			var o = (e = a, t) => {
				switch (t.type) {
					case s.nb: {
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: n.amount
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				subredditLockedCoins: o
			})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, n) {
			"use strict";
			n.d(t, "l", (function() {
				return y
			})), n.d(t, "m", (function() {
				return _
			})), n.d(t, "i", (function() {
				return k
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "h", (function() {
				return T
			})), n.d(t, "k", (function() {
				return L
			})), n.d(t, "c", (function() {
				return M
			})), n.d(t, "f", (function() {
				return B
			})), n.d(t, "a", (function() {
				return G
			})), n.d(t, "j", (function() {
				return F
			})), n.d(t, "b", (function() {
				return U
			})), n.d(t, "e", (function() {
				return H
			})), n.d(t, "g", (function() {
				return W
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = n("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = n("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = n.n(d)()(e => Object(s.a)(Object(r.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = n("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				w = e => e.publicAccessNetwork.hlsStreams,
				x = Object(r.a)(w, e => e.ended),
				O = Object(r.a)(w, e => e.removed),
				v = Object(r.a)(p, x, O, (e, t, n) => {
					const r = t.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const r = n.stream.state,
							s = R(r, o.a.ENDED) ? o.a.ENDED : r,
							a = n.stream.vod_accessible;
						return s === r && !0 === a ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: s,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return n.reduce((e, t) => {
						const n = e[t];
						if (!n) return e;
						const r = n.stream.state,
							s = R(r, o.a.ENDED) ? o.a.ENDED : r,
							a = n.stream.vod_accessible;
						return s === r && !1 === a ? e : {
							...e,
							[t]: {
								...n,
								stream: {
									...n.stream,
									state: s,
									vod_accessible: !1
								}
							}
						}
					}, r)
				}),
				y = (e, t) => {
					return v(e)[Object(a.g)(t)]
				},
				j = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), v, b, i.h, (e, t, n, r, s) => {
					const i = [];
					if (e) {
						const t = Object(a.g)(e);
						n[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						l = new Set([...r, ...s]);
					return d.filter(e => {
						const t = n[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
					})
				}),
				E = Object(r.a)((e, {
					count: t
				}) => t, v, (e, {
					listingName: t,
					streamIdFromPath: n
				}) => j(e, {
					listingName: t,
					streamIdFromPath: n
				}), (e, t, n) => {
					const r = n.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				_ = Object(r.a)(v, E, (e, t) => {
					const n = t[0];
					if (n) return e[n]
				}),
				I = Object(r.a)(g, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: r
				}) => E(e, {
					listingName: t || r,
					streamIdFromPath: n
				}), (e, t) => {
					const n = new Set(e),
						r = t.filter(e => !n.has(e));
					if (r.length) return r[0]
				}),
				C = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, v, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: r
				}) => E(e, {
					listingName: t || r,
					streamIdFromPath: n
				}), h, (e, t, n, r) => {
					if (!n.length) return;
					const s = n.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = s.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const i = s.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				k = Object(s.a)(Object(r.a)(C, v, (e, t) => e ? t[e] : void 0)),
				P = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(a.g)(t) : void 0, C, b, i.h, (e, {
					related: t,
					streamIdFromPath: n,
					subreddit: r
				}) => E(e, {
					listingName: t || r,
					streamIdFromPath: n
				}), (e, t, n, r, s) => !e || n.includes(e) || r.includes(e) ? t || s[0] : e),
				N = Object(r.a)(f, g, I, (e, t, n) => e < t.length - 1 ? t[e + 1] : n),
				S = Object(r.a)(f, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				A = Object(s.a)(Object(r.a)(P, v, (e, t) => e ? t[e] : void 0)),
				T = Object(s.a)(Object(r.a)(N, v, (e, t) => e ? t[e] : void 0)),
				L = Object(s.a)(Object(r.a)(S, v, (e, t) => e ? t[e] : void 0)),
				M = (Object(s.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, v, (e, t) => Object.keys(e).filter(e => !!t[e]).map(n => ({
					...t[n],
					preloadedPreviewUrl: e[n]
				})))), Object(r.a)(P, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				B = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? y(e, t) : void 0, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function R(e, t) {
				const n = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return n[t] >= n[e]
			}
			const D = Object(r.a)(P, h, (e, t) => e && t.timestamps[e] || 0);
			var G;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(G || (G = {}));
			const F = Object(r.a)(P, v, m.b, (e, t, n) => {
					if (n) return G.INTRO;
					const r = e && t[e];
					if (!r) return G.UNAVAILABLE;
					const s = r.stream.state;
					return s === o.a.IS_LIVE || s === o.a.DISCONNECTED ? G.LIVE : s === o.a.ENDED && r.stream.vod_accessible ? G.VOD : G.UNAVAILABLE
				}),
				U = Object(r.a)(A, F, m.b, c.b, c.o, (e, t, n, r, s) => n ? r : e ? t === G.LIVE || t === G.VOD ? e.stream.hls_url : s : void 0),
				H = Object(r.a)(A, F, D, (e, t, n) => e ? t === G.LIVE ? e.broadcast_time : t === G.VOD && n < e.broadcast_time ? n : 0 : 0),
				W = (e, t) => {
					const n = p(e);
					return !!n && n[t] && n[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = n("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(o, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + s.a > Date.now()
		},
		"./src/reddit/selectors/gold/econPurchase.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./src/lib/initializeClient/installReducer.ts"),
				s = n("./src/reddit/reducers/features/econPurchase/index.ts");
			Object(r.a)({
				features: {
					econPurchase: s.a
				}
			});
			const a = (e, {
				subredditId: t
			}) => t && e.features.econPurchase.subredditLockedCoins[t] || 0
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/featureFlags/index.ts"),
				a = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/subreddit.ts");
			const i = e => s.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: r.Je
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === r.Pe.SmIcon || t === r.Pe.SmIconHc
				},
				l = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.pending[t]
				},
				u = (e, {
					subredditName: t
				}) => {
					return !!e.subreddits.api.models.error[t]
				},
				m = (e, {
					subredditName: t
				}) => {
					const n = Object(o.V)(e, {
						subredditName: t
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		},
		"./src/redditGQL/operations/GildComment.json": function(e) {
			e.exports = JSON.parse('{"id":"c25f21e6351f"}')
		},
		"./src/redditGQL/operations/GildPost.json": function(e) {
			e.exports = JSON.parse('{"id":"496275fd4bb6"}')
		},
		"./src/redditGQL/operations/SubredditCoins.json": function(e) {
			e.exports = JSON.parse('{"id":"a82ef253ed10"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedGild~GildModal.2081adc0922645158549.js.map