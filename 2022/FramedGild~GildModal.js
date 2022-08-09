// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.7e1e4e75cfe021f7db7c.js
// Retrieved at 8/9/2022, 9:50:08 AM by Reddit Dataminer v1.0.0
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
				var v = function(e) {
					var r = e.stripe,
						n = e.options,
						s = e.children,
						a = t.useRef(!1),
						o = t.useRef(!0),
						i = t.useMemo((function() {
							return f(r)
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
					var h = m(n);
					return t.useEffect((function() {
						if (d.elements) {
							var e = b(n, h, ["clientSecret", "fonts"]);
							e && d.elements.update(e)
						}
					}), [n, h, d.elements]), t.useEffect((function() {
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
				v.propTypes = {
					stripe: a.any,
					options: a.object
				};
				var O = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(g), e)
					},
					j = function(e) {
						return (0, e.children)(O("mounts <ElementsConsumer>"))
					};
				j.propTypes = {
					children: a.func.isRequired
				};
				var w = function(e) {
						var r = t.useRef(e);
						return t.useEffect((function() {
								r.current = e
							}), [e]),
							function() {
								r.current && r.current.apply(r, arguments)
							}
					},
					x = function() {},
					y = function(e, r) {
						var n, s = "".concat((n = e).charAt(0).toUpperCase() + n.slice(1), "Element"),
							o = r ? function(e) {
								O("mounts <".concat(s, ">"));
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
									d = void 0 === c ? x : c,
									l = r.onFocus,
									u = void 0 === l ? x : l,
									p = r.onReady,
									h = void 0 === p ? x : p,
									f = r.onChange,
									g = void 0 === f ? x : f,
									v = r.onEscape,
									j = void 0 === v ? x : v,
									y = r.onClick,
									E = void 0 === y ? x : y,
									I = O("mounts <".concat(s, ">")).elements,
									_ = t.useRef(null),
									C = t.useRef(null),
									k = w(h),
									P = w(d),
									N = w(u),
									S = w(E),
									A = w(g),
									T = w(j);
								t.useLayoutEffect((function() {
									if (null == _.current && I && null != C.current) {
										var t = I.create(e, i);
										_.current = t, t.mount(C.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", A), t.on("blur", P), t.on("focus", N), t.on("escape", T), t.on("click", S)
									}
								}));
								var L = m(i);
								return t.useEffect((function() {
									if (_.current) {
										var e = b(i, L, ["paymentRequest"]);
										e && _.current.update(e)
									}
								}), [i, L]), t.useLayoutEffect((function() {
									return function() {
										_.current && _.current.destroy()
									}
								}), []), t.createElement("div", {
									id: n,
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
					I = y("auBankAccount", E),
					_ = y("card", E),
					C = y("cardNumber", E),
					k = y("cardExpiry", E),
					P = y("cardCvc", E),
					N = y("fpxBank", E),
					S = y("iban", E),
					A = y("idealBank", E),
					T = y("p24Bank", E),
					L = y("epsBank", E),
					M = y("payment", E),
					B = y("paymentRequestButton", E),
					R = y("linkAuthentication", E),
					D = y("shippingAddress", E),
					G = y("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = G, e.AuBankAccountElement = I, e.CardCvcElement = P, e.CardElement = _, e.CardExpiryElement = k, e.CardNumberElement = C, e.Elements = v, e.ElementsConsumer = j, e.EpsBankElement = L, e.FpxBankElement = N, e.IbanElement = S, e.IdealBankElement = A, e.LinkAuthenticationElement = R, e.P24BankElement = T, e.PaymentElement = M, e.PaymentRequestButtonElement = B, e.ShippingAddressElement = D, e.useElements = function() {
					return O("calls useElements()").elements
				}, e.useStripe = function() {
					return O("calls useStripe()").stripe
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
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !a && !l && /macintosh/i.test(t),
						g = !o && !u && !m && !p && /linux/i.test(t),
						v = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						O = r(/version\/(\d+(\.\d+)?)/i),
						j = /tablet/i.test(t) && !/tablet pc/i.test(t),
						w = !j && /[^-]mobi/i.test(t),
						x = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: O || r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || O
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: O || r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: O || r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: O || r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, v ? (s.msedge = e, s.version = v) : (s.msie = e, s.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
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
						version: v
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: r(/vivaldi\/(\d+(\.\d+)?)/i) || O
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
						version: O || r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: O || r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: r(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || O
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || O
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || O
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? s = {
						name: "Android",
						version: O
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, O && (s.version = O)) : a ? (s = {
						name: "iphone" == a ? "iPhone" : "ipad" == a ? "iPad" : "iPod"
					}, O && (s.version = O)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: r(/googlebot\/(\d+(\.\d+))/i) || O
					} : {
						name: r(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && O && (s.version = O)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || r(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !o && !s.silk ? !s.windowsphone && a ? (s[a] = e, s.ios = e, s.osname = "iOS") : f ? (s.mac = e, s.osname = "macOS") : x ? (s.xbox = e, s.osname = "Xbox") : h ? (s.windows = e, s.osname = "Windows") : g && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var y = "";
					s.windows ? y = function(e) {
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
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? y = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? y = (y = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : a ? y = (y = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? y = r(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? y = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? y = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? y = r(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (y = r(/tizen[\/\s](\d+(\.\d+)*)/i)), y && (s.osversion = y);
					var E = !s.windows && y.split(".")[0];
					return j || c || "ipad" == a || o && (3 == E || E >= 4 && !w) || s.silk ? s.tablet = e : (w || "iphone" == a || "ipod" == a || o || i || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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
						currency: h = t.currency || (t.type ? p(t.type) : a.c),
						type: f = t.type || (t.currency ? m(t.currency) : a.b.Real)
					} = t, g = Number(e), v = String(e);
					switch (f) {
						case a.b.Reddit: {
							const e = a.e[h],
								t = e ? e() : h;
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(g) + " " + t : u(g, o, r, t)
						}
						case a.b.Crypto: {
							if (o) {
								return Object(i.d)(v, l) + " " + h
							}
							const e = Number(Object(i.c)(v, l));
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, o, r, h)
						}
						case a.b.Real:
						default: {
							const e = Number(Object(s.a)(v, b));
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...d
							}).format(e) : u(e, o, r, h)
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
		"./src/lib/unicodeUtils/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			}));
			const n = e => {
					let t = 0,
						r = 0;
					const n = [0];
					for (const s of e) t++, r += s.length, n[t] = r;
					return n
				},
				s = e => {
					let t = 0,
						r = 0;
					const n = [];
					for (const s of e) {
						for (let e = 0; e < s.length; e++) n[r] = t, r++;
						t++
					}
					return n[r] = t, n
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
			const l = Object(a.a)(d.kb),
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
				return Y
			})), r.d(t, "updateMessage", (function() {
				return X
			})), r.d(t, "gildGqlRequested", (function() {
				return Q
			})), r.d(t, "triggerLoader", (function() {
				return Z
			})), r.d(t, "gildPending", (function() {
				return ee
			})), r.d(t, "gildFailed", (function() {
				return re
			})), r.d(t, "gildSuccessful", (function() {
				return ae
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/makeActionCreator/index.ts"),
				a = r("./src/lib/postParentMessage/index.ts"),
				o = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/profile/index.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./node_modules/react/index.js"),
				p = r.n(m),
				b = r("./src/reddit/models/Gold/Award.ts"),
				h = r("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				f = r.n(h);
			const {
				fbt: g
			} = r("./node_modules/fbt/lib/FbtPublic.js"), v = e => g._("Sent! You earned {=awarder karma}", [g._param("=awarder karma", p.a.createElement("a", {
				className: f.a.karmaLink,
				href: b.a,
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
				x = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/models/User/index.ts"),
				E = r("./src/reddit/selectors/commentSelector.ts"),
				I = r("./src/reddit/selectors/communityAwards.ts"),
				_ = r("./src/reddit/selectors/gild.ts"),
				C = r("./src/reddit/selectors/gold/awardIcon.ts"),
				k = r("./src/reddit/selectors/gold/econPurchase.ts"),
				P = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				N = r("./src/reddit/selectors/posts.ts"),
				S = r("./src/reddit/selectors/subreddit.ts"),
				A = r("./src/reddit/selectors/user.ts"),
				T = r("./src/reddit/endpoints/awards/index.ts"),
				L = r("./src/lib/makeGqlRequest/index.ts"),
				M = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				B = r("./src/redditGQL/operations/GildComment.json"),
				R = r("./src/redditGQL/operations/GildPost.json");
			const D = (e, t, r) => Object(L.a)(e, {
					...R,
					variables: t
				}, {
					query: r ? {} : Object(M.b)()
				}),
				G = (e, t, r) => Object(L.a)(e, {
					...B,
					variables: t
				}, {
					query: r ? {} : Object(M.b)()
				});
			var F = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				U = r("./src/reddit/helpers/awards/message.ts"),
				H = r("./src/reddit/helpers/correlationIdTracker.ts"),
				W = r("./src/reddit/helpers/isPost.ts"),
				V = r("./src/reddit/helpers/trackers/gild.ts"),
				q = r("./src/telemetry/index.ts"),
				J = r("./src/reddit/endpoints/profile/info.ts"),
				z = r("./src/reddit/actions/gold/constants.ts"),
				K = r("./src/reddit/actions/gold/econPurchase.ts");
			const Y = Object(s.a)(z.r),
				X = Object(s.a)(z.v),
				Q = (e, t) => async (r, s) => {
					const a = s(),
						o = !Object(W.a)(e) && Object(E.f)(a, {
							commentId: e
						});
					r(ee());
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
									l = Object(_.b)(o) || Object(H.d)(H.a.GildingFlow, !1),
									{
										receivedKarma: u
									} = await Object(T.b)(a(), {
										targetId: e,
										awardId: i.id,
										isAnonymous: d,
										nonce: l,
										message: Object(U.d)(c, i)
									}, r),
									m = await Object(T.a)(a(), {
										thingId: e
									}, r);
								await t(ae({
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
								const i = s(),
									c = i.gild,
									d = Object(N.G)(i, {
										postId: e
									}),
									l = Object(W.a)(e) && !!d && Object(w.q)(d),
									u = {
										gildingTypeId: c.selectedAward.id,
										isAnonymous: c.isAnonymous,
										isGildFunded: !1,
										message: Object(U.d)(c.message, c.selectedAward, l),
										nodeId: e
									},
									m = Object(W.a)(e) ? D : G,
									p = await m(o(), {
										input: u
									}, r);
								let b = !1,
									h = null,
									f = null;
								if (p.ok) {
									const e = p.body;
									b = e.data.gild.ok, h = e.data.gild.fieldErrors, f = e.data.gild.errors
								}
								if (b) {
									const r = p.body,
										{
											gild: n
										} = r.data,
										s = Object(W.a)(e) ? p.body.data.gild.postInfo : p.body.data.gild.comment,
										{
											awardings: a,
											treatmentTags: o
										} = s;
									await t(ae({
										awardId: c.selectedAward.id,
										awardings: a,
										awardKarmaReceived: n.awardKarmaReceived,
										coins: n.coins,
										id: e,
										subredditCoins: n.subredditCoins,
										treatmentTags: o
									}))
								} else {
									const e = null == h ? void 0 : h[0].message,
										r = null == f ? void 0 : f[0].message,
										s = e || r || n.fbt._("An unknown error occurred", null, {
											hk: "2oAbwZ"
										});
									await t(re(s))
								}
							}
						})(e, t))
					} catch (i) {
						const e = i,
							t = e && e.message || n.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await r(re(t))
					} finally {
						Object(H.b)(H.a.GildingFlow)
					}
				}, Z = Object(s.a)(z.u), $ = Object(s.a)(z.q), ee = () => async (e, t) => {
					e($()), window.setTimeout(() => {
						t().gild.api.pending && e(Z())
					}, 2e3)
				}, te = Object(s.a)(z.p), re = e => async (t, r) => {
					await t(te(e)), t(Object(u.f)({
						kind: x.b.Error,
						duration: u.a,
						text: e
					}))
				}, ne = Object(s.a)(z.s), se = (e, t) => {
					const {
						id: r
					} = t, n = Object(W.a)(r) ? Object(N.G)(e, {
						postId: r
					}) : Object(E.b)(e, {
						commentId: r
					}), s = Object(A.k)(e), a = e.gild, {
						isAnonymous: o
					} = a, i = !o && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, c = n ? n.author : void 0, d = Object(S.L)(e, {
						thingId: r
					});
					return ne({
						...t,
						gilder: i,
						gildee: c,
						subredditId: d && d.id
					})
				}, ae = e => async (t, r) => {
					const s = r(),
						{
							awardId: m,
							id: p
						} = e,
						h = Object(I.a)(s, m),
						f = e.awardKarmaReceived,
						g = Object(A.k)(s),
						E = Object(_.b)(s) || Object(H.d)(H.a.GildingFlow, !1);
					if (Object(_.g)(s)) {
						const e = "success.gild",
							t = {},
							r = Object(C.a)(s, {
								award: h,
								minSize: 32,
								postOrCommentId: p
							});
						t.awardId = m, t.awardIcon = r, t.awardName = h.name, Object(a.a)({
							type: e,
							data: t
						})
					}
					if (h.awardType === b.f.Moderator && void 0 === e.subredditCoins) {
						const t = Object(S.L)(s, {
								thingId: p
							}),
							r = t && Object(S.D)(s, {
								subredditName: t.name
							});
						r && (e.subredditCoins = r - h.coinPrice)
					}
					if (t(se(s, e)), g) {
						const r = {
								...J.a,
								...g.karma
							},
							n = r.fromAwardsReceived + e.awardKarmaReceived,
							s = Object(y.e)(g);
						t(Object(l.f)({
							coins: e.coins
						})), t(Object(l.h)({
							userName: s,
							karma: {
								...r,
								fromAwardsReceived: n
							}
						}))
					}(s.posts.instances[p] || []).forEach(r => {
						t(se(s, {
							...e,
							id: r
						}))
					});
					const T = Object(W.a)(p) ? n.fbt._("Success! You have given this post the {awardName} Award", [n.fbt._param("awardName", h.name)], {
							hk: "1Ndi4Z"
						}) : n.fbt._("Success! You have given this comment the {awardName} Award", [n.fbt._param("awardName", h.name)], {
							hk: "2sIK9Y"
						}),
						L = h.coinPrice;
					Object(q.a)(Object(V.viewKarmaSuccessEvent)({
						award: h,
						awarderKarmaEarned: f,
						awardeeKarmaEarned: 0,
						numberCoins: L,
						thingId: p
					})(s)), t(Object(d.g)(O.a.GOLD_GILD_MODAL));
					const M = Object(C.a)(s, {
						award: h,
						minSize: 64,
						postOrCommentId: p
					});
					t(Object(u.f)({
						customIconAsset: M,
						kind: x.b.SuccessAward,
						text: f > 0 ? v({
							awarderKarmaReceived: f
						}) : T
					})), setTimeout(() => {
						const e = Object(F.a)(m, p),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const B = Date.now();
					await t(Object(c.b)({
						correlationId: E,
						forceLoad: !0
					}));
					const R = Date.now() - B;
					if (L > 0) {
						const e = Object(P.f)(r()).filter(e => j.a.has(e.dealInfo.type));
						if (e.length) {
							const r = Math.max(900 - R, 10),
								n = Math.max(300 - R, 10),
								a = Object(W.a)(p) && Object(w.q)(Object(N.G)(s, {
									postId: p
								}));
							setTimeout(() => t(Object(i.e)({
								correlationId: E,
								packageId: e[0].mobileId
							})), a ? r : n)
						}
					}
					const D = Object(S.L)(s, {
						thingId: p
					});
					if (D && Object(k.a)(s, {
							subredditId: D.id
						}) && t(Object(K.a)(D.id, D.name, {
							force: !0
						})), 0 === L && D) {
						t(Object(o.a)(D.id, p, void 0, !0));
						const e = 399,
							n = Object(P.d)(r()).reduce((t, r) => {
								const n = Math.abs(r.pennies - e);
								return (!t || n < t.priceDelta) && (t = {
									packageId: r.mobileId,
									priceDelta: n
								}), t
							}, null);
						n && t(Object(i.b)({
							correlationId: E,
							packageId: n.packageId
						}))
					}
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
			const i = Object(n.a)(o.jb),
				c = Object(n.a)(o.t),
				d = e => async t => {
					await t(c({
						id: e
					})), t(Object(s.h)(a.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return E
			})), r.d(t, "a", (function() {
				return I
			})), r.d(t, "e", (function() {
				return C
			})), r.d(t, "b", (function() {
				return P
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "i", (function() {
				return A
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
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/constants/modals.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/actions/toaster.ts"),
				m = r("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = r("./src/reddit/endpoints/gold/purchase.ts"),
				b = r("./src/reddit/helpers/correlationIdTracker.ts"),
				h = r("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				f = r("./src/reddit/models/Gold/Award.ts"),
				g = r("./src/reddit/models/Gold/ProductOffer.ts"),
				v = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				j = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				w = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const x = Object(a.a)(w.u),
				y = Object(a.a)(w.c),
				E = e => async (t, r) => {
					t(x(e)), t(Object(l.h)(i.a.ECON_COIN_PURCHASE))
				}, I = () => async (e, t) => {
					e(y()), e(Object(l.g)(i.a.ECON_COIN_PURCHASE))
				}, _ = Object(a.a)(w.y), C = e => {
					let {
						correlationId: t,
						packageId: r
					} = e;
					return async (e, n) => {
						const s = n();
						Object(O.e)(s, r) ? (e(_({
							correlationId: t,
							packageId: r
						})), e(Object(l.i)(i.a.GOLD_TARGETED_OFFER_MODAL))) : o.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${r}`)
					}
				}, k = Object(a.a)(w.t), P = e => {
					let {
						correlationId: t,
						packageId: r
					} = e;
					return async (e, n) => {
						Object(O.c)(n(), r) ? (e(k({
							correlationId: t,
							packageId: r
						})), e(Object(l.i)(i.a.ECON_COIN_PACKAGE_OFFER))) : o.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${r}`)
					}
				}, N = (e, t, r) => async (s, a) => {
					await s(Object(d.c)());
					const o = a(),
						i = Object(O.p)(o, e);
					if (i) s(E({
						correlationId: r,
						packageId: i,
						thingId: t
					}));
					else {
						const e = Object(O.n)(o),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						s(Object(u.f)({
							kind: v.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, S = (e, t, r) => async (a, o, i) => {
					let {
						apiContext: d
					} = i;
					const l = o(),
						{
							coins: u,
							pennies: m
						} = r,
						h = Object(j.r)(l) || Object(b.d)(b.a.GoldPayment, !1);
					let f, v;
					a(Object(c.stripeTokenPending)());
					const O = Object(j.y)(l);
					if (O || (f = await a(Object(c.validateAndCreateStripeToken)(e, t)), v = Object(j.v)(l), f)) try {
						const e = await Object(p.d)({
							coins: u,
							context: d(),
							correlationId: h,
							offerContext: Object(g.d)(r, !1),
							pennies: m,
							rememberCard: v,
							savedCardId: O || void 0,
							token: f
						});
						if (e.error) {
							const t = Object(s.a)(e.error, e.status);
							return void a(Object(c.stripeApiError)(t))
						}
						return a(Object(c.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (w) {
						const e = Object(s.a)(w);
						a(Object(c.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						a(Object(c.stripeApiError)(e))
					}
				}, A = (e, t, a, o) => async (i, d, l) => {
					let {
						apiContext: u
					} = l;
					const m = d(),
						{
							coins: v,
							pennies: O
						} = a,
						w = Object(j.r)(m) || Object(b.d)(b.a.GoldPayment, !1);
					let x, y;
					i(Object(c.stripeTokenPending)());
					const E = Object(j.y)(m);
					if (E || (x = await i(Object(c.validateAndCreateStripeToken)(e, t)), y = Object(j.v)(m), x)) try {
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
						const j = l.id,
							_ = {
								gildType: j,
								isAnonymous: t,
								message: d
							},
							C = await Object(p.c)({
								coins: v,
								context: u(),
								correlationId: w,
								gildParams: _,
								isOldReddit: o,
								offerContext: Object(g.d)(a, !0),
								pennies: O,
								rememberCard: y,
								savedCardId: E || void 0,
								thingId: e,
								token: x
							});
						if (C.error) {
							const e = Object(s.a)(C.error, C.status);
							return void i(Object(c.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							i(I()), i(Object(c.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: s,
								coins: a,
								treatment_tags: o
							} = C.body;
							return i(t({
								awardKarmaReceived: n || 0,
								awardId: j,
								awardings: s && s.length ? Object(h.a)(s).map(e => ({
									award: Object(f.j)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: o
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (_) {
						const e = Object(s.a)(_);
						i(Object(c.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						i(Object(c.stripeApiError)(e))
					}
				}, T = e => async (t, r, n) => {
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
				}, L = (e, t) => async (r, n, a) => {
					let {
						apiContext: i
					} = a;
					const d = n(),
						l = Object(j.r)(d) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: u,
							pennies: p
						} = t;
					try {
						const n = await Object(m.c)({
							context: i(),
							offerContext: Object(g.d)(t, !1),
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
					} catch (h) {
						o.c.captureException(h);
						const e = Object(s.a)(h);
						r(Object(c.paypalApiError)(e))
					}
				}, M = (e, t) => async (a, i, d) => {
					let {
						apiContext: l
					} = d;
					const u = i(),
						p = Object(j.r)(u) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: v,
							pennies: O
						} = t;
					try {
						const {
							gildModalThingId: o,
							isAnonymous: i,
							message: d,
							selectedAward: j
						} = u.gild;
						if (!o || !j) return void a(Object(c.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const w = j.id,
							x = await Object(m.d)({
								context: l(),
								offerContext: Object(g.d)(t, !0),
								orderId: e,
								coins: v,
								pennies: O,
								thingId: o,
								awardId: w,
								message: d || "",
								isAnonymous: i,
								correlationId: p
							});
						if (x.error) {
							const e = Object(s.a)(x.error);
							a(Object(c.paypalApiError)(e))
						} else {
							a(I());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: s,
								treatment_tags: i
							} = x.body;
							a(Object(c.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(d({
								awardId: w,
								awardKarmaReceived: t || 0,
								awardings: Object(h.a)(e).map(e => ({
									award: Object(f.j)(e),
									total: e.count
								})),
								coins: n,
								id: o,
								subredditCoins: s,
								treatmentTags: i
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (w) {
						o.c.captureException(w);
						const e = Object(s.a)(w);
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
			})), r.d(t, "cardNumberChange", (function() {
				return p
			})), r.d(t, "cardExpiryChange", (function() {
				return b
			})), r.d(t, "cardCvcChange", (function() {
				return h
			})), r.d(t, "stripeTokenPending", (function() {
				return f
			})), r.d(t, "stripeTokenError", (function() {
				return g
			})), r.d(t, "stripeApiError", (function() {
				return v
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return O
			})), r.d(t, "paypalApiError", (function() {
				return j
			})), r.d(t, "toggleRememberCard", (function() {
				return w
			})), r.d(t, "selectSavedCard", (function() {
				return x
			})), r.d(t, "deleteSavedCard", (function() {
				return y
			})), r.d(t, "savedCardsPending", (function() {
				return E
			})), r.d(t, "savedCardsSuccess", (function() {
				return I
			}));
			var n = r("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				s = r("./node_modules/fbt/lib/FbtPublic.js"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const c = Object(a.a)(i.F),
				d = Object(a.a)(i.A),
				l = Object(a.a)(i.b),
				u = Object(a.a)(i.C),
				m = Object(a.a)(i.a),
				p = Object(a.a)(i.K),
				b = Object(a.a)(i.J),
				h = Object(a.a)(i.I),
				f = Object(a.a)(i.M),
				g = Object(a.a)(i.L),
				v = Object(a.a)(i.H),
				O = (e, t) => async (r, a) => {
					const i = a(),
						c = Object(o.h)(i),
						d = Object(o.l)(i),
						l = t.getElement(n.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: p
					} = await e.createToken(l, {
						name: c,
						address_zip: d
					});
					if (c.trim()) {
						if (!p && u) return u;
						r(g(p || void 0))
					} else {
						const e = s.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						r(m({
							message: e
						}))
					}
				}, j = Object(a.a)(i.B), w = Object(a.a)(i.N), x = Object(a.a)(i.G), y = Object(a.a)(i.g), E = Object(a.a)(i.D), I = Object(a.a)(i.E)
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return v
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "c", (function() {
				return w
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
			const h = Object(a.a)(b.v),
				f = Object(a.a)(b.d),
				g = Object(a.a)(b.w),
				v = (e, t, r) => async e => {
					e(g({
						thingId: t
					})), e(h({
						correlationId: r
					}))
				}, O = (e, t, a) => async (o, c, b) => {
					let {
						apiContext: h
					} = b;
					const g = c(),
						v = Object(l.c)(l.a.GoldPayment);
					let O, j;
					o(Object(i.stripeTokenPending)());
					const w = Object(p.y)(g);
					if (w || (O = await o(Object(i.validateAndCreateStripeToken)(e, t)), j = Object(p.v)(g), O)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: c,
							selectedAward: l
						} = g.gild;
						if (!e || !l.id) return void o(Object(i.stripeApiError)(n.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const p = l.id,
							b = l.pennyPrice;
						if (!b) return void o(Object(i.stripeApiError)(n.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const x = {
								gildType: p,
								isAnonymous: t,
								message: c
							},
							y = await Object(d.e)({
								context: h(),
								correlationId: v,
								gildParams: x,
								isOldReddit: a,
								pennies: b,
								rememberCard: j,
								savedCardId: w || void 0,
								thingId: e,
								token: O
							});
						if (y.error) {
							const e = Object(s.a)(y.error, y.status);
							return void o(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await Promise.resolve().then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(f()), o(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: n,
								awarder_karma_received: s,
								coins: a,
								treatment_tags: c
							} = y.body;
							return void o(t({
								awardKarmaReceived: s || 0,
								awardId: p,
								awardings: n && n.length ? Object(u.a)(n).map(e => ({
									award: Object(m.j)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: c
							}))
						}
					} catch (x) {
						const e = Object(s.a)(x);
						o(Object(i.stripeApiError)(e))
					} else o(Object(i.stripeApiError)(n.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, j = (e, t, r) => async (n, a, d) => {
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
				}, w = e => async (t, a, d) => {
					let {
						apiContext: p
					} = d;
					const b = a(),
						h = Object(l.c)(l.a.GoldPayment);
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
						const g = l.id,
							v = await Object(c.e)({
								awardId: g,
								context: p(),
								orderId: e,
								thingId: a,
								message: d || "",
								isAnonymous: o,
								correlationId: h
							});
						if (v.error) {
							const e = Object(s.a)(v.error);
							t(Object(i.paypalApiError)(e))
						} else {
							t(f());
							const {
								all_awardings: e,
								awarder_karma_received: n,
								coins: s,
								subreddit_coins: o,
								treatment_tags: c
							} = v.body;
							t(Object(i.paymentCompleted)({
								coins: s,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await Promise.resolve().then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(d({
								awardKarmaReceived: n || 0,
								awardId: g,
								awardings: Object(u.a)(e).map(e => ({
									award: Object(m.j)(e),
									total: e.count
								})),
								coins: s,
								id: a,
								subredditCoins: o,
								treatmentTags: c
							}))
						}
					} catch (g) {
						o.c.captureException(g);
						const e = Object(s.a)(g);
						t(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return j
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "a", (function() {
				return y
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
				h = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(a.a)(h.m);
			const f = Object(a.a)(h.o),
				g = Object(a.a)(h.n),
				v = Object(a.a)(h.i),
				O = Object(a.a)(h.j),
				j = e => async (t, r, a) => {
					let {
						gqlContext: i
					} = a;
					const c = r(),
						d = Object(b.a)(c);
					if ((null == e ? void 0 : e.forceLoad) || !d) {
						t(f());
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
							t(v(e.data.coinpacks.offers[0])), t(O(e.data.premium.offers[0]))
						} catch (l) {
							Object(s.b)() || console.error(l), o.c.captureException(l);
							const e = n.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(g(e))
						}
					}
				}, w = () => async e => e(j()), x = Object(a.a)(h.h), y = () => async (e, t, r) => {
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
							await e(x({
								awards: r.awards
							})), e(Object(l.B)())
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
				h = r("./src/reddit/models/Gold/Award.ts"),
				f = r("./src/reddit/models/Subreddit/index.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				v = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				O = r("./src/reddit/actions/gold/econPurchase.ts"),
				j = r("./src/reddit/actions/gold/gild.ts"),
				w = r("./src/reddit/actions/gold/giveAward.ts"),
				x = r("./src/reddit/actions/gold/modals.ts"),
				y = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				E = r("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				I = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				_ = r("./src/reddit/actions/subreddit.ts"),
				C = r("./src/reddit/actions/toaster.ts"),
				k = r("./src/reddit/selectors/commentSelector.ts"),
				P = r("./src/reddit/selectors/communityAwards.ts"),
				N = r("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				S = r("./src/reddit/selectors/gild.ts"),
				A = r("./src/reddit/selectors/gold/awardIcon.ts"),
				T = r("./src/reddit/selectors/gold/econPurchase.ts"),
				L = r("./src/reddit/selectors/gold/giveAwards.ts"),
				M = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				B = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				R = r("./src/reddit/selectors/posts.ts"),
				D = r("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				G = r("./src/reddit/selectors/subreddit.ts"),
				F = r("./src/reddit/selectors/user.ts"),
				U = r("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				H = (r("./node_modules/core-js/modules/web.dom.iterable.js"), r("./src/higherOrderComponents/makeAsync.tsx")),
				W = r("./src/lib/loadWithRetries/index.ts"),
				V = r("./src/reddit/helpers/loadThirdPartyScript.ts");
			const q = () => Object(W.a)(() => Promise.all([r.e("PennyPurchaseModal").then(r.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(V.d)().catch(() => {})])).then(e => e[0].default);
			var J = Object(H.a)({
					getComponent: q,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				z = r("./src/reddit/components/TrackingHelper/index.tsx"),
				K = r("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				Y = r.n(K),
				X = r("./src/reddit/helpers/awards/message.ts"),
				Q = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Z = r("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
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
						className: Object(c.a)(r, Y.a.awardDescriptionContainer)
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
					}, n ? i.fbt._("Purchase for ${dollarPrice}", [i.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : e.coinPrice > 0 ? s.a.createElement(s.a.Fragment, null, s.a.createElement(te.a, {
						className: Y.a.coinIcon
					}), i.fbt._("{coinPrice}", [i.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "3MZDc4"
					})) : i.fbt._("Free", null, {
						hk: "EW8V2"
					})), e.endsAt && s.a.createElement(re.a, {
						className: Y.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var oe = ae,
				ie = r("./src/reddit/controls/Button/index.tsx"),
				ce = r("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: de
			} = r("./node_modules/fbt/lib/FbtPublic.js"), le = 10;
			class ue extends s.a.PureComponent {
				renderButtonText() {
					const {
						needPayment: e,
						needPremium: t,
						selectedAward: r
					} = this.props, n = r.awardType === h.f.Moderator;
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
						pending: o,
						selectedAward: i
					} = this.props, d = i.awardType === h.f.Moderator;
					return s.a.createElement(ie.l, {
						className: Object(c.a)(Y.a.gildButton, {
							[Y.a.premiumButton]: t
						}),
						"data-redditstyle": !0,
						disabled: o || d && e,
						onClick: t ? r : e ? a : n
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
						message: r
					} = this.props, n = {
						disabled: !1,
						maxLength: Object(X.c)(t, e),
						placeholder: i.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					};
					e && (0 === n.maxLength ? (n.disabled = !0, n.placeholder = i.fbt._("Upgrade award to add a chat", null, {
						hk: "17vUbn"
					})) : n.placeholder = i.fbt._("Add a chat", null, {
						hk: "2Azj8h"
					}));
					const a = !e || n.maxLength > 0,
						o = a && r.length > n.maxLength;
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
						value: a ? r : ""
					}, n)), a && s.a.createElement("div", {
						className: Y.a.characterCountdown
					}, n.maxLength - r.length))
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
					} = this.props, r = i.fbt._("r/{subredditName} balance: {coinBalance}", [i.fbt._param("subredditName", e), i.fbt._param("coinBalance", t ? t.toLocaleString() : "0")], {
						hk: "1G3rBQ"
					});
					return s.a.createElement("div", {
						className: Y.a.subredditCoinBalance
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
						className: Object(c.a)(e, Y.a.awardDetailsPane)
					}, s.a.createElement("div", {
						className: Y.a.awardDescriptionWrapper
					}, s.a.createElement("div", {
						className: Y.a.spacerTop
					}), s.a.createElement(oe, {
						award: t,
						awardIcon: r
					}), s.a.createElement("div", {
						className: Y.a.spacerBottom
					}), t.awardType === h.f.Moderator ? s.a.createElement("span", {
						className: Y.a.giver
					}, s.a.createElement(ee.a, {
						className: Y.a.modIcon
					}), i.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), !n && this.renderTextArea(), this.renderPublicIndicator(), this.renderCommunityCoinBalance()), this.renderGildButton())
				}
			}
			var he = be,
				fe = r("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				ge = r.n(fe);
			const ve = s.a.memo((function(e) {
				let t = "",
					r = "";
				return e.post && e.post.isRPANBroadcast && e.post.isFeedTheMeterEnabled && (t = i.fbt._("Give your favorite broadcasts more airtime with awards!", null, {
					hk: "1bDI3E"
				}), r = ge.a.rpanBanner), t ? s.a.createElement("div", {
					className: Object(c.a)(ge.a.banner, r)
				}, t) : null
			}));
			var Oe = Object(a.b)((e, t) => {
					if (Object(l.a)(t.thingId)) {
						const r = Object(R.G)(e, {
							postId: t.thingId
						});
						if (!r) return {};
						const n = !!r.media && "rpan" === r.media.type,
							s = n && Object(N.f)(e, t.thingId, D.l);
						return {
							post: {
								...r,
								isRPANBroadcast: n,
								isFeedTheMeterEnabled: s
							}
						}
					}
					return {}
				})(ve),
				je = r("./src/reddit/components/RichTextJson/index.tsx"),
				we = r("./src/reddit/icons/svgs/Advance/index.tsx");
			class xe extends s.a.Component {
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
					}, s.a.createElement(we.a, {
						className: ge.a.advanceLeft
					})))), s.a.createElement("div", {
						className: ge.a.pillOptionsContainer,
						ref: this.optionsRef,
						style: {
							left: this.state.horizontalOffset
						}
					}, e.map((e, r) => s.a.createElement("button", {
						key: e.tag,
						className: ge.a.pillOptionWrapper,
						onClick: () => this.handleTagClick(e.tag, r)
					}, s.a.createElement("div", {
						className: ge.a.focusElement,
						tabIndex: -1
					}, s.a.createElement(je.b, {
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
					}, s.a.createElement(we.a, null)))))
				}
			}
			var ye = xe,
				Ee = r("./src/reddit/icons/svgs/Lock/index.tsx"),
				Ie = r("./src/reddit/icons/svgs/New/index.tsx"),
				_e = r("./src/reddit/icons/svgs/Premium/index.tsx");
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
				let t, r;
				const n = !!e.award.tags && e.award.tags.some(e => e.includes("econ:render:lottie:"));
				if (e.award.awardSubType === h.d.Moderator) t = ee.a, r = ge.a.moderatorIcon;
				else if (e.award.awardSubType === h.d.Premium) t = e.premiumUser ? _e.a : Ee.a, r = e.premiumUser ? ge.a.premiumIcon : ge.a.lockIcon;
				else if (n) t = Ce, r = ge.a.transferableIcon;
				else {
					if (!e.award.isNew) return null;
					t = Ie.a, r = ge.a.newIcon
				}
				return s.a.createElement("div", {
					className: Object(c.a)(ge.a.iconBadgeContainer, r)
				}, s.a.createElement(t, {
					className: ge.a.iconBadge
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
					className: Object(c.a)(ge.a.selectableAward, {
						[ge.a.selected]: n
					}),
					onClick: () => o(t)
				}, s.a.createElement("div", {
					className: ge.a.buttonContent,
					tabIndex: -1
				}, s.a.createElement("div", {
					className: ge.a.iconContainer
				}, s.a.createElement("img", {
					className: ge.a.icon,
					src: r
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
						awardTotals: r,
						awardsPending: a,
						onSelect: o,
						premiumUser: i,
						selectedAward: d,
						sendEvent: l,
						tags: u,
						thingId: m
					} = e, [p, h] = Object(n.useState)({}), [f, g] = Object(n.useState)(Ae(Se)), [v, O] = Object(n.useState)(Se.tag);
					Object(n.useEffect)(() => {
						const e = {},
							t = Ae(Se);
						r.forEach(r => {
							e[r.award.id] = r, t[Se.tag].push(r.award.id);
							const n = r.award.tags;
							n && n.forEach(e => {
								void 0 === t[e] && (t[e] = []), t[e].push(r.award.id)
							})
						}), h(e), g(t)
					}, [r]);
					const j = [Se, ...u.filter(e => f[e.tag])],
						w = f[v],
						[x, y] = Object(n.useState)(!1),
						[E, I] = Object(n.useState)(1),
						_ = Object(n.useCallback)(e => {
							if (null !== e) {
								const t = e.clientWidth,
									{
										colWidth: r,
										colGutter: n
									} = Ne,
									s = t > (r + n) * (w.length - 1) + r + r + n;
								if (y(s), s) I(w.length);
								else {
									const e = Math.floor((t - r) / (r + n) + 1);
									I(e)
								}
							}
						}, [w]);
					if (a || !r.length) return s.a.createElement("div", {
						className: ge.a.awardSelectorPane
					});
					const C = e => {
						o(e);
						const t = j.find(e => e.tag === v) || Se,
							r = w.findIndex(t => t === e.id),
							n = Math.floor(r / E),
							s = r - n * E;
						l(Object(b.clickSelectAwardEvent)(e, m, {
							awardColPosition: s + 1,
							awardRowPosition: n + 1,
							filterId: v,
							filterName: t.content.markdown
						}))
					};
					return s.a.createElement("div", {
						className: ge.a.awardSelectorPane
					}, s.a.createElement(Oe, {
						thingId: e.thingId
					}), s.a.createElement(ye, {
						tags: j,
						selectedTag: v,
						sendEvent: l,
						onSelectTag: O
					}), s.a.createElement("div", {
						className: ge.a.awardSectionScrollWrapper
					}, s.a.createElement("div", {
						className: ge.a.awardSectionContainer
					}, s.a.createElement("div", {
						className: Object(c.a)(ge.a.awardSection, {
							[ge.a.singleRowGrid]: x
						}),
						ref: _
					}, w.map(e => {
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
							onSelect: C,
							thingId: m
						})
					})))))
				}),
				Le = r("./src/lib/localizeCurrency/index.ts"),
				Me = r("./src/reddit/components/Econ/CoinsModalHeader/index.m.less"),
				Be = r.n(Me),
				Re = r("./src/reddit/icons/svgs/Plus/index.tsx");
			const {
				fbt: De
			} = r("./node_modules/fbt/lib/FbtPublic.js");

			function Ge(e) {
				let {
					onButtonClick: t,
					onCancel: r,
					title: n,
					buttonText: a
				} = e;
				return s.a.createElement("div", {
					className: Be.a.gildHeader
				}, s.a.createElement("button", {
					className: Be.a.closeBtn,
					onClick: r
				}, s.a.createElement(Q.b, {
					className: Be.a.closeBtnIcon
				})), s.a.createElement("div", {
					className: Be.a.headerText
				}, n), s.a.createElement("button", {
					className: Be.a.coinButton,
					onClick: t
				}, s.a.createElement("div", {
					className: Be.a.coinBalanceIndicator,
					tabIndex: -1
				}, s.a.createElement(te.a, {
					className: Be.a.coinIcon
				}), s.a.createElement("div", {
					className: Be.a.coinBalance
				}, a)), s.a.createElement("div", {
					className: Be.a.addCoins,
					tabIndex: -1
				}, s.a.createElement(Re.a, {
					className: Be.a.plusIcon
				}))))
			}
			var Fe = r("./src/reddit/hooks/useLocale.ts"),
				Ue = r("./src/reddit/selectors/experiments/econ/index.ts");
			const {
				fbt: He
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			var We = e => {
				let {
					onCancel: t,
					thingId: r,
					userCoins: n
				} = e;
				const o = Object(Fe.a)(),
					i = Object(z.b)(),
					c = Object(a.e)(e => !n && Boolean(Object(M.h)(e)) && Object(Ue.o)(e)),
					d = c ? He._("Get free Coins with Premium", null, {
						hk: "3fzsqq"
					}) : Object(Le.a)(n || 0, {
						locale: o
					});
				return s.a.createElement(Ge, {
					onCancel: t,
					onButtonClick: () => {
						i(Object(b.clickAddCoinsButtonEvent)(r));
						const e = c ? "/premium" : "/coins";
						window.open(e, "_blank")
					},
					title: He._("Awards", null, {
						hk: "3w1C6X"
					}),
					buttonText: d
				})
			};
			const Ve = (e, t) => e.length > h.n.length && !e.find(e => e.award.id === t.id);
			var qe = r("./src/reddit/components/GildModalContent/index.m.less"),
				Je = r.n(qe);
			const ze = (e, t) => {
					let {
						thingId: r,
						subredditId: n
					} = t, s = n;
					if (!n) {
						const t = Object(G.L)(e, {
							thingId: r
						});
						s = t && t.id
					}
					if (!s && Object(l.a)(r)) {
						const t = Object(R.G)(e, {
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
							a = s ? Object(P.h)(e, {
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
							a = (s ? Object(P.h)(e, {
								subredditId: s,
								thingId: r
							}) : []).map(e => e.award);
						return Object(A.b)(e, {
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
							const t = Object(G.L)(e, {
								thingId: r
							});
							if (!t) return !1;
							s = t.id
						}
						return Object(P.g)(e, {
							subredditId: s,
							thingId: r
						})
					},
					correlationId: e => Object(S.b)(e) || Object(m.d)(m.a.GildingFlow, !1),
					currentUser: F.k,
					errorMessage: S.a,
					isAnonymous: S.f,
					iFramed: S.g,
					isGildPending: S.e,
					isEmployee: F.N,
					isRecommendedCoinPackagePending: M.q,
					message: S.c,
					postOrComment: (e, t) => {
						let {
							thingId: r
						} = t;
						return Object(l.a)(r) ? Object(R.G)(e, {
							postId: r
						}) : Object(k.b)(e, {
							commentId: r
						})
					},
					isChatDisabled: (e, t) => {
						let {
							thingId: r
						} = t;
						return !!Object(l.a)(r) && Object(D.f)(e, {
							streamIdFromPath: r
						})
					},
					purchaseCatalogPending: M.o,
					showPurchaseModal: B.u,
					selectedAward: L.b,
					subreddit: G.L,
					subredditCoins: (e, t) => {
						let {
							thingId: r,
							subredditId: n
						} = t;
						const s = Object(G.L)(e, {
								thingId: r
							}),
							a = s ? s.id : n;
						return Object(G.C)(e, {
							subredditId: a
						})
					},
					tags: (e, t) => {
						let {
							thingId: r,
							subredditId: n
						} = t, s = n;
						if (!n) {
							const t = Object(G.L)(e, {
								thingId: r
							});
							s = t && t.id
						}
						if (!s && Object(l.a)(r)) {
							const t = Object(R.G)(e, {
								postId: r
							});
							s = t && t.belongsTo.id
						}
						return s ? Object(P.i)(e, {
							subredditId: s
						}) : []
					},
					userCoins: (e, t) => {
						const r = Object(F.e)(e),
							n = ze(e, t);
						return r + Object(T.a)(e, {
							subredditId: n
						})
					},
					inViewerFeedTheMeter: (e, t) => {
						let {
							thingId: r
						} = t;
						return Object(N.f)(e, r, D.l)
					}
				}), e => {
					const {
						isEmployee: t,
						postOrComment: r,
						selectedAward: n,
						subredditCoins: s,
						userCoins: a,
						isChatDisabled: o
					} = e, {
						awardType: i,
						coinPrice: c,
						pennyPrice: d
					} = n, l = i === h.f.Moderator, u = !!d || ((l ? s : a) || 0) < c && !(t && !l), m = r && r.media && "rpan" === r.media.type;
					return {
						...e,
						needPayment: u,
						cost: d || c,
						isRpanPost: !!m,
						isChatDisabled: !!m && o
					}
				});
			class Ye extends s.a.Component {
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
					Object(p.xb)(e)
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
						postOrComment: o,
						purchaseCatalogPending: i,
						purchaseCatalogRequested: c,
						selectAward: d,
						selectedAward: l,
						sendEvent: u,
						setIsAnonymous: g,
						subreddit: v,
						subredditAboutRequested: O,
						subredditId: j,
						subredditLockedCoinsRequested: w,
						subredditName: x,
						thingId: y,
						displayUnusableAwardError: E
					} = this.props;
					r || Object(m.d)(m.a.GildingFlow, !1), u(Object(b.viewGildModalEvent)(l.id, n, y)), g(!s && Object(p.q)());
					const I = v ? v.id : j || (o && o.belongsTo ? o.belongsTo.id : void 0);
					if (I && t(I), Ve(e, l) && (E(), d(h.p)), v || x) {
						O(v ? v.name : x)
					}
					v && v.type !== f.f.User && w(v.id, v.name), a && (l.pennyPrice ? q() : Object(U.a)(), i || c(r))
				}
				componentDidUpdate(e) {
					e.awardingsPending && !this.props.awardingsPending && Ve(this.props.awardings, this.props.selectedAward) && (this.props.displayUnusableAwardError(), this.props.selectAward(h.p))
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
						isRpanPost: m,
						message: p,
						needPayment: b,
						selectedAward: f,
						sendEvent: g,
						showPurchaseModal: v,
						subreddit: O,
						subredditCoins: j,
						subredditName: w,
						tags: x,
						thingId: y,
						userCoins: E,
						isChatDisabled: I
					} = this.props, {
						showPurchaseModalInThisInstance: _
					} = this.state, C = v && _, k = C && !f.pennyPrice, P = C && !!f.pennyPrice, N = (k || P) && !d;
					if (k && N) return null;
					if (P && N) return s.a.createElement(J, null);
					const S = O ? O.name : w,
						A = !(!o || !o.isGold),
						T = {
							needPayment: b,
							needPremium: !A && f.awardSubType === h.d.Premium,
							onNeedPayment: this.onNeedPayment,
							onGetPremium: this.onGetPremium,
							onGild: this.onGildRequested,
							pending: l || u,
							selectedAward: f,
							thingId: y
						};
					return s.a.createElement("div", {
						className: Object(c.a)(n, Je.a.gildModalContent)
					}, s.a.createElement(We, {
						onCancel: a,
						thingId: y,
						userCoins: E
					}), s.a.createElement("div", {
						className: Je.a.modalMainContent
					}, s.a.createElement(Te, {
						awardIcons: t,
						awardTotals: e,
						awardsPending: r,
						premiumUser: A,
						onSelect: this.props.selectAward,
						selectedAward: f,
						sendEvent: g,
						tags: x,
						thingId: y
					}), s.a.createElement(he, {
						forcePublic: m,
						isAnonymous: i,
						isLivestream: m,
						hideTextArea: I,
						message: p,
						selectedAward: f,
						selectedAwardIcon: t[f.id],
						sendEvent: g,
						thingId: y,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						gildButtonProps: T,
						subredditName: S,
						subredditCoins: j
					})), P && s.a.createElement(J, null))
				}
			}
			t.a = Object(a.b)(Ke, (e, t) => {
				let {
					author: r,
					profileId: n,
					thingId: s
				} = t;
				return {
					awardsAndTagsRequested: t => e(Object(v.a)(t, s, n && r)),
					closeGildModal: () => e(Object(x.a)()),
					gildRequested: t => e(Object(j.gildGqlRequested)(s, {
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
						e(a ? Object(E.b)(s, o, n) : Object(y.d)(r, o, n))
					},
					purchaseCatalogRequested: t => e(Object(I.b)({
						correlationId: t
					})),
					selectAward: t => e(Object(w.a)(t)),
					displayUnusableAwardError: () => e(Object(C.f)({
						kind: g.b.Error,
						duration: C.a,
						text: i.fbt._("This award is not available on this content.", null, {
							hk: "13VV1D"
						})
					})),
					setIsAnonymous: t => {
						e(Object(j.setIsAnonymous)(t)), Object(p.xb)(t)
					},
					subredditAboutRequested: t => e(Object(_.u)(t)),
					subredditLockedCoinsRequested: (t, r) => e(Object(O.a)(t, r)),
					updateMessage: t => e(Object(j.updateMessage)(t))
				}
			})(Object(z.c)(Ye))
		},
		"./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less": function(e, t, r) {
			e.exports = {
				karmaLink: "_33-F8KNeBDS4RS9mUMQdxH"
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			var n = r("./node_modules/@loadable/component/dist/loadable.esm.js"),
				s = r("./src/reddit/featureFlags/component.tsx");
			const a = Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("CryptoVault").then(r.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(s.a)("spBurnLinks", Object(n.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!r.m[t]
					},
					importAsync: () => r.e("CryptoVault").then(r.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return r(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/reddit/components/Media/index.m.less"),
				i = r.n(o);
			const c = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? n.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? n.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: r
					} = e;
					return a.a.createElement("div", {
						className: i.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: i.a.unblurButton
					}, c(t, r)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, r) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/lib/addQueryParams/index.ts"),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/forceHttps/index.ts"),
				l = r("./src/reddit/constants/tracking.ts"),
				u = r("./src/reddit/models/Media/index.ts"),
				m = r("./src/reddit/selectors/user.ts"),
				p = r("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = r.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(a.b)(() => Object(o.c)({
					isNightmodeOn: m.db
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					r = e.isResponsive ? Object(i.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					n = {
						overflow: "hidden"
					};
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), e.isTweet || (n.height = "100%"), s.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: r,
					style: n,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return k
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/lib/forceHttps/index.ts"),
				u = r("./src/lib/opener/index.ts"),
				m = r("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = r("./src/reddit/components/Media/BlurredContent.tsx"),
				b = r("./src/reddit/components/PlayButton/index.tsx"),
				h = r("./src/reddit/constants/elementClassNames.ts"),
				f = r("./src/reddit/controls/OutboundLink/index.tsx"),
				g = r("./src/reddit/helpers/trackers/ads.ts"),
				v = r("./src/reddit/hooks/useClickSourceData.ts"),
				O = r("./src/reddit/models/Media/index.ts"),
				j = r("./src/reddit/selectors/posts.ts"),
				w = r("./src/reddit/selectors/telemetry.ts"),
				x = r("./src/reddit/selectors/user.ts"),
				y = r("./src/reddit/constants/tracking.ts"),
				E = r("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				I = r("./src/reddit/components/Media/ImageBox/index.m.less"),
				_ = r.n(I);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => e > 2 * O.e,
				P = e => {
					const t = Object(d.a)(_.a.image, h.g, e.className, {
							[_.a.mShowCentered]: e.showCentered,
							[_.a.mShowBlurred]: e.shouldBlur
						}),
						r = {};
					return e.showFull || e.isTall || (r.maxHeight = `${O.j}px`), e.isListing || e.isTall && k(e.height) || (r.maxHeight = `${O.e}px`), e.isExpando && e.maxHeight && (r.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (r.maxWidth = `${e.maxWidth}px`), a.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: r
					})
				},
				N = e => {
					const t = {};
					return (!e.showFull && Object(O.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${O.j}px`, e.shouldBlur && (t.maxWidth = Object(O.L)(e.height, e.width) ? `${O.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), a.a.createElement("div", {
						className: Object(d.a)(_.a.container, e.className),
						style: t
					}, e.children)
				},
				S = Object(o.b)(() => Object(c.a)(j.F, x.jb, (e, t) => {
					let {
						isSponsored: r,
						postId: n
					} = t;
					return r && n ? Object(j.b)(e, n) : null
				}, w.d, j.G, (e, t, r, n, s) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: r,
					pageType: n.pageType,
					post: s
				})));
			t.a = S(e => {
				const t = Object(v.a)();
				return e.outboundUrl && !e.shouldBlur ? a.a.createElement("a", {
					"data-adclicklocation": E.a.MEDIA,
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
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, T(e)) : T(e)
			});
			const A = (e, t) => a.a.createElement(P, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[y.a]: !e
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
				T = e => {
					let {
						onClick: t,
						...r
					} = e;
					const s = Object(O.L)(r.height, r.width),
						o = k(r.height) && s;
					return a.a.createElement(N, C({}, r, {
						className: `${s?`${y.a} `:""}${r.className||""}`
					}), r.isListing ? a.a.createElement("div", {
						className: r.contentImageClassName
					}, A(s, r)) : a.a.createElement("a", {
						href: r.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: _.a.imageLink
					}, A(s, r), r.shouldBlur && !r.isVideoThumbnail && !r.isNsfwBlockingModalEligible && a.a.createElement(p.a, {
						isNSFW: !!r.isNSFW,
						isSpoiler: !!r.isSpoiler
					})), r.isListing && !r.showFull && r.height > O.j && Object(O.L)(r.height, r.width) && a.a.createElement("div", {
						className: _.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), r.isVideoThumbnail && a.a.createElement(b.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/classNames/index.ts"),
				o = r("./src/lib/forceHttps/index.ts"),
				i = r("./src/reddit/models/Media/index.ts"),
				c = r("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = r.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < i.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const r = {
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
					n = e.blurSrc ? s.a.createElement("img", {
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
					style: e.isGalleryTileLayout ? void 0 : r
				}, n, !e.isGalleryTileLayout && s.a.createElement("div", {
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
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, r) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return I
			}));
			var n = r("./node_modules/lodash/throttle.js"),
				s = r.n(n),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./node_modules/@reddit/adblock-detection/browser.js"),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/actions/video.ts"),
				m = r("./src/reddit/constants/tracking.ts"),
				p = r("./src/reddit/models/Media/index.ts"),
				b = r("./src/reddit/selectors/user.ts"),
				h = r("./src/reddit/selectors/video.ts");
			const f = 100,
				g = f / 2 / 1e3;
			var v = r("./src/lib/forceHttps/index.ts"),
				O = r("./src/lib/hooks/usePrevious.ts");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function w(e) {
				let {
					autoplay: t,
					isListing: r,
					isNotCardView: n,
					onBufferingChange: s,
					shouldLoad: i,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: u,
					...m
				} = e;
				const p = Object(a.useRef)(),
					b = Object(a.useRef)(),
					h = Object(O.a)(c);

				function w(e) {
					if (e) {
						const e = null === (t = null == b ? void 0 : b.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == b ? void 0 : b.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(a.useEffect)(() => {
					if (w(!c && (t || n)), b.current && s) return p.current = function(e, t) {
						let r = !1,
							n = !1;
						const s = () => r = !0,
							a = () => n = !0;
						e.addEventListener("loadeddata", s), e.addEventListener("play", a), e.addEventListener("playing", a);
						let o = !1,
							i = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, n) return n = !1, void(i = c);
							if (e.paused || e.seeking || !r) return void(i = c);
							const s = o;
							4 === e.readyState ? o = !1 : !o && c >= i && c < i + g ? o = !0 : o && c >= i && c > i + g && (o = !1), i = c, s !== o && t(o)
						}, f);
						return () => {
							clearInterval(d), e.removeEventListener("playing", a), e.removeEventListener("play", a), e.removeEventListener("loadeddata", s)
						}
					}(b.current, s), () => {
						p.current && p.current()
					}
				}, []), Object(a.useEffect)(() => {
					h !== c && w(!c && (t || n))
				}, [h, c, t, n]), o.a.createElement("video", j({}, m, {
					ref: e => b.current = e,
					muted: !0
				}), o.a.createElement("source", {
					src: Object(v.a)(u || "")
				}))
			}
			var x = r("./src/reddit/components/Media/VideoBox/index.m.less"),
				y = r.n(x);
			const E = Object(c.c)({
				autoplayPref: b.b,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function I(e) {
				const {
					autoplayPref: t,
					consumed: r,
					loadTimes: n,
					metadata: a,
					started: c
				} = Object(i.e)(t => E(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: g,
					isNotCardView: v,
					showFull: O,
					shouldPause: j,
					width: x,
					isListing: I,
					className: _,
					showCentered: C,
					originalSource: k,
					isPromoted: P
				} = e, N = t && !(P && Object(d.hasAcceptableAds)()), S = Object(i.d)();

				function A(e) {
					S(e ? Object(u.r)(b) : Object(u.E)(b))
				}

				function T() {
					return S(Object(u.z)({
						postId: b
					}))
				}
				const L = s()(e => {
					if (r) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && S(Object(u.s)(b))
				}, 200);

				function M(e) {
					e.persist(), L(e)
				}

				function B(e) {
					var t;
					(a || D(e), c) || (t = e.timeStamp, S(Object(u.A)(b, t)))
				}

				function R(e) {
					S(Object(u.q)(b, e.timeStamp))
				}

				function D(e) {
					! function(e) {
						S(Object(u.D)({
							metadata: e,
							postId: b
						}))
					}({
						id: b,
						length: 1e3 * e.target.duration,
						originalHeight: e.target.videoHeight,
						originalWidth: e.target.videoWidth
					})
				}

				function G(e) {
					n || B(e), a || D(e), S(Object(u.C)(b))
				}

				function F() {
					const e = {};
					return C && (e.margin = "0 auto"), I || (e.maxHeight = `${p.e}px`), o.a.createElement(w, {
						autoplay: N,
						className: Object(l.a)(m.a, y.a.styledVideo),
						height: g,
						isListing: I,
						isNotCardView: v,
						key: b,
						loop: !0,
						onBufferingChange: A,
						onLoadStart: R,
						onLoadedData: B,
						onLoadedMetadata: D,
						onPause: T,
						onPlaying: G,
						onTimeUpdate: M,
						shouldLoad: h,
						shouldPause: j,
						showCentered: C,
						showFull: O,
						source: f,
						style: e,
						width: x
					})
				}
				return I ? F() : o.a.createElement("div", {
					className: Object(l.a)(y.a.container, _, {
						[y.a.centered]: C
					})
				}, o.a.createElement("a", {
					href: k,
					target: "_blank",
					rel: "noopener noreferrer"
				}, F()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, r) {
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
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, r) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, r) {
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
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = r("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = r("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = r("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = r.n(l),
				m = r("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				g = m.a.span("TooltipTarget", u.a),
				v = m.a.span("SpoilerWrapper", u.a),
				O = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: r,
						...n
					} = e;
					return a.a.createElement(v, p({}, n, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: r
						})
					}))
				}, "SpoilerWrapper", u.a),
				j = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class w extends a.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: r
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == r || r(e))
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
					return a.a.createElement(O, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, a.a.createElement(f, null, a.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), a.a.createElement(j, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: n.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = w
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, r) {
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
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "x", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "h", (function() {
				return m
			})), r.d(t, "k", (function() {
				return p
			})), r.d(t, "c", (function() {
				return b
			})), r.d(t, "j", (function() {
				return h
			})), r.d(t, "g", (function() {
				return f
			})), r.d(t, "v", (function() {
				return g
			})), r.d(t, "i", (function() {
				return v
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "f", (function() {
				return j
			})), r.d(t, "u", (function() {
				return w
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "l", (function() {
				return y
			})), r.d(t, "m", (function() {
				return E
			})), r.d(t, "n", (function() {
				return I
			})), r.d(t, "t", (function() {
				return _
			})), r.d(t, "p", (function() {
				return C
			})), r.d(t, "o", (function() {
				return k
			})), r.d(t, "q", (function() {
				return P
			})), r.d(t, "s", (function() {
				return N
			})), r.d(t, "r", (function() {
				return S
			})), r.d(t, "a", (function() {
				return A
			})), r.d(t, "w", (function() {
				return T
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/reddit/controls/OutboundLink/index.tsx"),
				o = r("./src/reddit/components/RichTextJson/elements.m.less"),
				i = r.n(o),
				c = r("./src/lib/lessComponent.tsx"),
				d = r("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", i.a), c.a.div("H2", i.a), c.a.div("H3", i.a), c.a.div("H4", i.a), c.a.div("H5", i.a), c.a.div("H6", i.a)],
				u = c.a.hr("Hr", i.a),
				m = c.a.code("M", i.a),
				p = c.a.pre("Pre", i.a),
				b = c.a.blockquote("Blockquote", i.a),
				h = c.a.p("P", i.a),
				f = c.a.li("Li", i.a),
				g = c.a.ul("Ul", i.a),
				v = c.a.ol("Ol", i.a),
				O = c.a.strong("B", i.a),
				j = c.a.em("I", i.a),
				w = c.a.span("U", i.a),
				x = e => s.a.createElement("del", e),
				y = c.a.sub("Sub", i.a),
				E = c.a.sup("Sup", i.a),
				I = c.a.table("Table", i.a),
				_ = c.a.tr("Tr", i.a),
				C = c.a.td("Tdl", i.a),
				k = c.a.td("Tdc", i.a),
				P = c.a.td("Tdr", i.a),
				N = c.a.th("Thl", i.a),
				S = c.a.th("Thc", i.a),
				A = (c.a.th("Thr", i.a), c.a.wrapped(e => s.a.createElement(a.b, e), "A", i.a)),
				T = c.a.wrapped(d.a, "A", i.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, r) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return E
			})), r.d(t, "c", (function() {
				return I
			})), r.d(t, "a", (function() {
				return _
			})), r.d(t, "b", (function() {
				return C
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/lodash/findLastIndex.js"),
				a = r.n(s),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				c = r("./src/lib/classNames/index.ts"),
				d = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = r("./src/lib/sentry/index.ts"),
				u = r("./src/reddit/components/Media/BlurredContent.tsx"),
				m = r("./src/reddit/constants/elementClassNames.ts"),
				p = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				h = r("./src/reddit/models/RichTextJson/index.ts"),
				f = r("./src/reddit/components/RichTextJson/media.tsx"),
				g = r("./src/reddit/components/RichTextJson/renderers.tsx"),
				v = r("./src/reddit/components/RichTextJson/index.m.less"),
				O = r.n(v);

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = r("./src/lib/lessComponent.tsx").a.div("Container", O.a),
				x = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: r,
						...n
					} = e;
					return i.a.createElement(w, j({}, n, {
						style: {
							color: Object(b.a)(Object(p.a)({
								flairStyleTemplate: t,
								theme: r,
								...n
							}))
						}
					}))
				}),
				y = e => e.e === h.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== h.u || !!e.c && !e.c.every(e => e.e === h.A && !e.t),
				E = e => a()(e, y),
				I = e => e.findIndex(y),
				_ = e => {
					const {
						altText: t,
						className: r,
						content: n,
						isListing: s,
						isNSFW: a,
						isNsfwBlockingModalEligible: o,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: p,
						renderMediaAsLinks: b,
						rtJsonElementProps: v,
						useExplicitTextColor: j,
						shouldBlur: y,
						onClickRevealSpoilerText: _
					} = e, C = n.document, k = [], P = e.mediaMetadata || null, N = I(C), S = E(C);
					if (y && !s && !o) return i.a.createElement(w, {
						className: Object(c.a)(m.j, r)
					}, i.a.createElement("div", {
						className: O.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: O.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!a, !!d))));
					if (-1 !== N)
						for (let i = N; i <= S; i++) {
							const e = C[i];
							switch (e.e) {
								case h.k:
									k.push(g.c(e, v, i));
									break;
								case h.l:
									k.push(g.d(i));
									break;
								case h.b:
									k.push(g.a(e, P, v, i));
									break;
								case h.c:
									k.push(g.b(e, i));
									break;
								case h.p:
									k.push(g.f(e, P, v, i, _));
									break;
								case h.z:
									k.push(g.h(e, P, v, i, _));
									break;
								case h.u:
									k.push(g.g(e, P, v, i, _));
									break;
								case h.h:
									k.push(Object(f.a)(e, i));
									break;
								case h.m:
								case h.a:
								case h.D:
									k.push(...Object(f.b)(e, i, v, P, b, p, t))
							}
						}
					return j ? i.a.createElement(w, {
						className: Object(c.a)(m.j, r)
					}, k) : i.a.createElement(x, {
						className: Object(c.a)(m.j, r),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, k)
				};
			class C extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => n.fbt._("Something went wrong while trying to render this", null, {
						hk: "2UcBL3"
					})
				}
				componentDidCatch(e) {
					this.setState({
						hasError: !0
					}), this.logError(e)
				}
				logError(e) {
					l.c.withScope(t => {
						t.setExtra("objectInfo", this.props.rtJsonElementProps.renderingObjectInfo), t.setTag("rtjson", "rendering"), l.c.captureException(e)
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
					} catch (r) {
						return this.hasError = !0, this.logError(r), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, r) {
			e.exports = {
				A: "_1PlxnYkerei9iGJsL9JyrP",
				a: "_1PlxnYkerei9iGJsL9JyrP",
				ImageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				imageBox: "_2LjgQiHLCZ9LDbCQx5KaOi",
				MediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mediaWrapper: "_2-UiOdhyj4wHBv7Rc2FeDr",
				mHasCaption: "c1cmiB1jfdq4sxidlPDAx",
				CommentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				commentGifWrapper: "FyBv9YqsilS7j6RNlD9id",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				Giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				giphy: "_3YoP8vEuPSoGYyKJc1eUli",
				GiphyLogo: "_3R8qf79yqt1VjL8vHhrdMt",
				giphyLogo: "_3R8qf79yqt1VjL8vHhrdMt"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return k
			})), r.d(t, "b", (function() {
				return N
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				a = r.n(s),
				o = r("./src/lib/classNames/index.ts"),
				i = r("./src/config.ts"),
				c = r("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = r("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = r("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = r("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = r("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = r("./src/reddit/helpers/isComment.ts"),
				b = r("./src/reddit/helpers/richTextJson/index.ts"),
				h = r("./src/reddit/models/RichTextJson/index.ts");
			var f = e => a.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, a.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), a.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), a.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), a.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), a.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), a.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), a.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				g = r("./src/reddit/components/RichTextJson/elements.tsx"),
				v = r("./src/reddit/components/RichTextJson/media.m.less"),
				O = r.n(v),
				j = r("./src/lib/lessComponent.tsx");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = /\/(\w+)\/asset\/(\w+)\//,
				y = j.a.wrapped(g.a, "A", O.a),
				E = j.a.wrapped(l.a, "ImageBox", O.a),
				I = j.a.wrapped(e => a.a.createElement("p", e), "Caption", O.a),
				_ = j.a.div("Placeholder", O.a),
				C = j.a.wrapped(e => {
					let {
						className: t,
						e: r,
						...s
					} = e;
					const o = r === h.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return a.a.createElement(_, w({
						className: t,
						style: {
							"--placeholder-content-text": `'${o}'`
						}
					}, s))
				}, "Placeholder", O.a),
				k = (e, t) => {
					let {
						c: r,
						x: n,
						y: s
					} = e;
					return a.a.createElement("div", {
						className: O.a.MediaWrapper
					}, a.a.createElement(u.a, {
						height: s,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: n
					}, a.a.createElement(d.a, {
						isListing: !1,
						source: r,
						height: s,
						width: n,
						showCentered: !0,
						showFull: !0
					})))
				},
				P = (e, t, r) => {
					const n = e.c;
					let s = "";
					return r && (r.e === h.s ? s = r.s.u : r.e === h.r ? s = r.s.gif : r.e === h.t && (s = (e => {
						const t = x.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(r.dashUrl))), s ? a.a.createElement(y, {
						href: s,
						key: t,
						title: n
					}, n || s) : null
				},
				N = (e, t, r, n, s, i, d) => {
					const l = h.E(n, e.id);
					if (s) return [P(e, t, l)];
					const g = [];
					return l ? l.e === h.s ? g.push(((e, t, r, n) => {
						let {
							id: s,
							s: i
						} = e;
						return a.a.createElement("div", {
							className: Object(o.a)(O.a.MediaWrapper, {
								[O.a.mHasCaption]: r
							})
						}, a.a.createElement(u.a, {
							height: i.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: i.x
						}, a.a.createElement(E, {
							altText: n,
							originalSource: i.u,
							postId: s,
							source: i.u,
							height: i.y,
							width: i.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1
						})))
					})(l, t, !!e.c, d)) : l.e === h.r ? g.push(((e, t, r, n) => {
						let {
							id: s,
							ext: i,
							s: c
						} = e;
						if (Object(b.g)(s)) {
							const e = n.renderingObjectInfo,
								d = !!e && Object(p.b)(e),
								l = i || Object(b.f)(s);
							return a.a.createElement("div", {
								className: Object(o.a)({
									[O.a.MediaWrapper]: !d,
									[O.a.CommentGifWrapper]: d,
									[O.a.mHasCaption]: r
								})
							}, a.a.createElement(y, {
								href: l,
								key: t,
								target: "_blank"
							}, c.mp4 ? a.a.createElement("video", {
								className: O.a.Giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, a.a.createElement("source", {
								src: c.mp4
							})) : {
								originalSource: l
							}), a.a.createElement(f, {
								className: O.a.GiphyLogo
							}))
						}
						return a.a.createElement("div", {
							className: Object(o.a)(O.a.MediaWrapper, {
								[O.a.mHasCaption]: r
							})
						}, a.a.createElement(u.a, {
							height: c.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c.x
						}, a.a.createElement(m.a, {
							height: c.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: c.mp4,
							width: c.x,
							postId: s,
							source: c.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(l, t, !!e.c, r)) : l.e === h.t && g.push(((e, t, r, n) => {
						let {
							hlsUrl: s,
							dashUrl: i,
							x: d,
							y: l,
							isGif: m
						} = e;
						return a.a.createElement("div", {
							className: Object(o.a)(O.a.MediaWrapper, {
								[O.a.mHasCaption]: r
							})
						}, a.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, a.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: s,
							mpegDashSource: i,
							postId: n,
							isGif: m
						})))
					})(l, t, !!e.c, i)) : g.push(((e, t) => a.a.createElement(C, {
						e,
						key: t
					}))(e.e, t)), e.c && g.push(((e, t) => a.a.createElement(I, {
						key: t
					}, e))(e.c, `caption${t}`)), g
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return A
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "a", (function() {
				return L
			})), r.d(t, "b", (function() {
				return M
			})), r.d(t, "f", (function() {
				return B
			})), r.d(t, "h", (function() {
				return D
			})), r.d(t, "g", (function() {
				return G
			})), r.d(t, "i", (function() {
				return F
			})), r.d(t, "e", (function() {
				return U
			}));
			var n = r("./src/lib/unicodeUtils/index.ts"),
				s = r("./node_modules/lodash/reduce.js"),
				a = r.n(s),
				o = r("./node_modules/react/index.js"),
				i = r.n(o),
				c = r("./src/reddit/components/RichTextJson/elements.tsx"),
				d = r("./node_modules/uuid/v4.js"),
				l = r.n(d),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/models/Product/index.ts"),
				p = r("./src/reddit/models/RichTextJson/index.ts"),
				b = r("./src/reddit/selectors/telemetry.ts"),
				h = r("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => r.e("RichTextJsonEmoteTooltip").then(r.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = r("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				v = r.n(g);
			const O = 1e3,
				j = 1e3;
			var w;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(w || (w = {}));
			class x extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = w.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = w.Inside, setTimeout(() => {
							this.mouseLocation === w.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, O)
					}, this.onMouseOut = () => {
						this.mouseLocation = w.Outside, setTimeout(() => {
							this.mouseLocation !== w.Inside && this.setState({
								tooltipOpen: !1
							})
						}, j)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const r = b.n(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...r,
								actionInfo: {
									...r.actionInfo,
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
					let r, n, s;
					t.e === p.s ? (r = t.s.x, n = t.s.y, s = t.s.u) : t.e === p.r && (r = t.s.x, n = t.s.y, s = t.s.gif);
					const a = this.state.tooltipOpen ? l()() : void 0;
					return s ? i.a.createElement("div", {
						className: v.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: a,
						src: s,
						width: r,
						height: n,
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
			var y = Object(u.c)(x),
				E = r("./src/reddit/components/RichTextJson/media.tsx"),
				I = r("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				_ = r("./src/reddit/components/SubredditMention/index.tsx"),
				C = r("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				k = r("./src/reddit/helpers/isComment.ts"),
				P = r("./src/reddit/helpers/isPost.ts"),
				N = r("./src/reddit/helpers/richTextJson/index.ts"),
				S = r("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const A = (e, t, r) => {
					const n = e.c || [],
						s = e.l,
						a = [],
						o = n.length;
					for (let i = 0; i < o; i++) {
						const e = n[i];
						a.push(e.e === p.w ? e.t : U(e, t, i))
					}
					const d = c.x[s - 1];
					return i.a.createElement(d, {
						key: r
					}, a)
				},
				T = e => i.a.createElement(c.e, {
					key: e
				}),
				L = (e, t, r, n, s) => {
					const a = e.c;
					if (!a) return;
					const o = a.length,
						d = [];
					for (let i = 0; i < o; i++) d.push(R(a[i], t, r, i, s));
					return i.a.createElement(c.c, {
						key: n
					}, d)
				},
				M = (e, t) => {
					const r = e.c;
					return i.a.createElement(c.k, {
						key: t
					}, i.a.createElement(c.h, null, r.reduce((e, t, r, n) => e += t.t + (r < n.length ? "\n" : ""), "")))
				},
				B = (e, t, r, n, s) => {
					const a = e.c,
						o = [],
						d = a.length;
					for (let u = 0; u < d; u++) {
						const e = a[u].c;
						e && e.length && o.push(i.a.createElement(c.g, {
							key: u
						}, e.map((e, n) => R(e, t, r, n, s))))
					}
					const l = e.o ? c.i : c.v;
					return i.a.createElement(l, {
						key: n
					}, o)
				},
				R = (e, t, r, n, s) => {
					switch (e.e) {
						case p.b:
							return L(e, t, r, n, s);
						case p.c:
							return M(e, n);
						case p.k:
							return A(e, r, n);
						case p.l:
							return T(n);
						case p.p:
							return B(e, t, r, n, s);
						case p.u:
							return G(e, t, r, n, s);
						case p.z:
							return D(e, t, r, n, s)
					}
				},
				D = (e, t, r, n, s) => {
					const a = e.c,
						o = e.h,
						d = a.length,
						l = o.length,
						u = [],
						m = [],
						p = [];
					for (let c = 0; c < l; c++) {
						const e = o[c],
							{
								H: n,
								D: a
							} = q(e.a),
							{
								c: d = []
							} = e;
						u.push(i.a.createElement(n, {
							key: c
						}, F(d, t, r, s))), p[c] = a
					}
					for (let b = 0; b < d; b++) {
						const e = a[b],
							n = e.length,
							o = [];
						for (let a = 0; a < n; a++) {
							const n = p[a],
								{
									c = []
								} = e[a];
							o.push(i.a.createElement(n, {
								key: a
							}, F(c, t, r, s)))
						}
						m.push(i.a.createElement(c.t, {
							key: b
						}, o))
					}
					return i.a.createElement(c.n, {
						key: n
					}, i.a.createElement("thead", null, i.a.createElement(c.t, null, u)), i.a.createElement("tbody", null, m))
				},
				G = (e, t, r, n, s) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(c.j, {
						key: e
					}, i.a.createElement("br", null)))(n);
					const a = e.c[0];
					return a.e !== p.m && a.e !== p.a || !Object(N.g)(a.id) ? i.a.createElement(c.j, {
						key: n
					}, F(e.c, t, r, s)) : Object(E.b)(a, n, r, t)
				},
				F = (e, t, r, n) => {
					const s = [],
						a = e.length;
					for (let o = 0; o < a; o++) {
						const a = e[o];
						if (a.e === p.A) s.push(H(a, o));
						else if (a.e === p.x) s.push(i.a.createElement(I.a, {
							key: o,
							onClickReveal: n
						}, F(a.c, t, r, n)));
						else if (a.e === p.n) s.push(i.a.createElement("br", {
							key: o
						}));
						else if (a.e === p.m || a.e === p.a) {
							if (a.id.startsWith("emote|")) {
								const e = p.E(t, a.id);
								e && s.push(i.a.createElement(y, {
									key: o,
									node: a,
									media: e
								}))
							}
						} else s.push(U(a, r, o))
					}
					return s
				},
				U = (e, t, r) => {
					switch (e.e) {
						case p.o:
							const n = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(C.b)(e.u)) return i.a.createElement(c.w, {
								to: e.u,
								key: r,
								title: e.a
							}, n);
							let s, a;
							const o = Object(S.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(P.b)(d) && (s = d.postId), d && Object(k.b)(d) && (a = d.id, s = d.postId), i.a.createElement(c.a, {
								href: e.u,
								key: r,
								title: e.a,
								sourceElement: o,
								postId: s,
								commentId: a
							}, n);
						case p.y:
							return i.a.createElement(_.b, {
								key: r,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return i.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: r
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return i.a.createElement(c.a, {
								href: e.t,
								key: r
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: r,
						t: s
					} = e, a = [];
					if (!r) return V(0, s, t);
					const o = Object(n.a)(s);
					let i = 0,
						c = 0;
					const d = r.length;
					for (; i < d; i++) {
						const [e, t, n] = r[i], d = t + n, l = o[t], u = o[d] - l;
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
				V = (e, t, r) => {
					let n = t;
					return n = a()(W, (t, n, s) => e & parseInt(s, 10) ? i.a.createElement(n, {
						key: r
					}, t) : t, n)
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
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, r) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return l
			})), r.d(t, "a", (function() {
				return u
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/components/SubredditIcon/index.tsx"),
				i = r("./src/reddit/controls/OutboundLink/index.tsx"),
				c = r("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = r.n(c);
			const l = a.a.wrapped(o.b, "SubredditIcon", d.a),
				u = a.a.wrapped(e => s.a.createElement(i.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, r) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return x
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				a = r("./node_modules/react-redux/es/index.js"),
				o = r("./node_modules/reselect/es/index.js"),
				i = r("./src/reddit/components/RichTextJson/elements.tsx"),
				c = r("./src/higherOrderComponents/makeAsync.tsx"),
				d = r("./src/lib/loadWithRetries/index.ts"),
				l = r("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = r("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = r.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => r.e("SubredditMentionWithIcon").then(r.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return s.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, s.a.createElement(l.a, {
							href: `/r/${t}/`
						}, s.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, s.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = r("./src/reddit/selectors/subredditMention.ts");
			class v extends s.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: r
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: r
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
			const O = Object(b.c)(v),
				j = Object(o.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				w = Object(a.b)(j),
				x = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: r,
						subredditName: n,
						userVariant: a,
						rtJsonElementProps: o
					} = e;
					if (!r || !t) return s.a.createElement(O, {
						subredditName: n,
						rtJsonElementProps: o
					});
					switch (a) {
						case h.Hf.SmIcon:
							return s.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: o
							});
						case h.Hf.SmIconHc:
							return s.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return s.a.createElement(O, {
								subredditName: n,
								rtJsonElementProps: o
							})
					}
				};
			t.b = w(x)
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
					method: n.jb.POST,
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
					method: n.jb.POST,
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
					method: n.jb.POST,
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
					method: n.jb.POST,
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
					thingId: h
				} = e;
				const f = {
					award_id: t,
					coins: i,
					correlation_id: d,
					is_anonymous: l,
					message: u,
					offer_context: m,
					order_id: p,
					pennies: b,
					thing_id: h
				};
				return Object(s.a)(Object(a.a)(r, [o.a]), {
					method: n.jb.POST,
					endpoint: `${r.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
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
					method: n.jb.POST,
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
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return o
			}));
			const n = 500,
				s = 1800,
				a = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return t ? e.coinPrice < n ? 0 : e.coinPrice < s ? 50 : 100 : 2048
				},
				o = function(e, t) {
					let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
					const n = a(t, r);
					return e.slice(0, n)
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
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./src/reddit/contexts/PageLayer/index.tsx"),
				s = r("./src/reddit/helpers/isComment.ts"),
				a = r("./src/reddit/helpers/isPost.ts"),
				o = r("./src/telemetry/models/Outbound.ts");
			const i = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: r
				} = e;
				if (t && (Object(s.b)(t) || Object(a.b)(t))) return Object(s.b)(t) ? o.SourceElement.Comment : Object(n.x)(r) ? o.SourceElement.PostDetail : Object(n.H)(r) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "g", (function() {
				return v
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return j
			})), r.d(t, "d", (function() {
				return w
			})), r.d(t, "e", (function() {
				return x
			}));
			var n, s, a = r("./src/reddit/constants/tracking.ts"),
				o = r("./src/reddit/helpers/isComment.ts"),
				i = r("./src/reddit/helpers/isPost.ts"),
				c = r("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = r("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = r("./src/reddit/selectors/subreddit.ts"),
				u = r("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(s || (s = {}));
			const m = e => ({
					...u.n(e),
					source: s.LINK,
					action: a.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...u.n(e),
					source: s,
					screen: u.ab(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: r,
						subredditName: n
					} = t;
					if (!r || !Object(i.b)(r) && !Object(o.b)(r)) return {
						outbound: void 0
					};
					const s = Object(i.b)(r) ? "postId" : "commentId",
						a = {
							url: `/r/${n}/`,
							sourceElement: Object(c.a)(t),
							subredditName: n,
							[s]: r.id
						},
						d = Object(l.A)(e, {
							subredditName: n
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
						renderingObjectInfo: r
					} = t;
					if (!r || !Object(i.b)(r) && !Object(o.b)(r)) return {};
					const n = Object(i.b)(r) ? r.belongsTo.id : r.subredditId;
					return {
						post: u.J(e, r.id),
						subreddit: u.jb(e, n),
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
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.kb(t, e),
					screen: u.ab(t)
				}),
				v = (e, t) => r => ({
					...p(r),
					source: s.DISCOVERY_UNIT,
					action: a.c.VIEW,
					noun: n.ITEM_POST,
					post: u.J(r, t),
					subreddit: u.kb(r, e),
					screen: u.ab(r)
				}),
				O = (e, t) => r => ({
					...p(r),
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: n.ITEM_POST,
					post: u.J(r, t),
					subreddit: u.kb(r, e),
					screen: u.ab(r)
				}),
				j = e => t => ({
					...p(t),
					subreddit: u.jb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				w = e => t => ({
					...p(t),
					subreddit: u.jb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				x = e => t => ({
					...p(t),
					subreddit: u.jb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
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
				o = r("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				i = r.n(o);
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
		"./src/reddit/models/Product/index.ts": function(e, t, r) {
			"use strict";
			var n;

			function s(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			r.d(t, "a", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(n || (n = {}))
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
			var o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.kb: {
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
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return x
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "i", (function() {
				return k
			})), r.d(t, "d", (function() {
				return A
			})), r.d(t, "h", (function() {
				return T
			})), r.d(t, "k", (function() {
				return L
			})), r.d(t, "c", (function() {
				return M
			})), r.d(t, "f", (function() {
				return B
			})), r.d(t, "a", (function() {
				return G
			})), r.d(t, "j", (function() {
				return F
			})), r.d(t, "b", (function() {
				return U
			})), r.d(t, "e", (function() {
				return H
			})), r.d(t, "g", (function() {
				return W
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/lib/objectSelector/index.ts"),
				a = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = r("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = r("./src/reddit/selectors/posts.ts"),
				c = r("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = r("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = r.n(d)()(e => Object(s.a)(Object(n.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = r("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				v = e => e.publicAccessNetwork.hlsStreams,
				O = Object(n.a)(v, e => e.ended),
				j = Object(n.a)(v, e => e.removed),
				w = Object(n.a)(p, O, j, (e, t, r) => {
					const n = t.reduce((e, t) => {
						const r = e[t];
						if (!r) return e;
						const n = r.stream.state,
							s = R(n, o.a.ENDED) ? o.a.ENDED : n,
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
							s = R(n, o.a.ENDED) ? o.a.ENDED : n,
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
				x = (e, t) => {
					return w(e)[Object(a.g)(t)]
				},
				y = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: r
					} = t;
					return r
				}, (e, t) => u(t.listingName)(e, t), w, b, i.h, (e, t, r, n, s) => {
					const i = [];
					if (e) {
						const t = Object(a.g)(e);
						r[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						l = new Set([...n, ...s]);
					return d.filter(e => {
						const t = r[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
					})
				}),
				E = Object(n.a)((e, t) => {
					let {
						count: r
					} = t;
					return r
				}, w, (e, t) => {
					let {
						listingName: r,
						streamIdFromPath: n
					} = t;
					return y(e, {
						listingName: r,
						streamIdFromPath: n
					})
				}, (e, t, r) => {
					const n = r.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				I = Object(n.a)(w, E, (e, t) => {
					const r = t[0];
					if (r) return e[r]
				}),
				_ = Object(n.a)(g, (e, t) => {
					let {
						related: r,
						streamIdFromPath: n,
						subreddit: s
					} = t;
					return E(e, {
						listingName: r || s,
						streamIdFromPath: n
					})
				}, (e, t) => {
					const r = new Set(e),
						n = t.filter(e => !r.has(e));
					if (n.length) return n[0]
				}),
				C = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: r
					} = t;
					return r
				}, w, (e, t) => {
					let {
						related: r,
						streamIdFromPath: n,
						subreddit: s
					} = t;
					return E(e, {
						listingName: r || s,
						streamIdFromPath: n
					})
				}, h, (e, t, r, n) => {
					if (!r.length) return;
					const s = r.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = s.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const i = s.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (n.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				k = Object(s.a)(Object(n.a)(C, w, (e, t) => e ? t[e] : void 0)),
				P = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: r
					} = t;
					return r ? Object(a.g)(r) : void 0
				}, C, b, i.h, (e, t) => {
					let {
						related: r,
						streamIdFromPath: n,
						subreddit: s
					} = t;
					return E(e, {
						listingName: r || s,
						streamIdFromPath: n
					})
				}, (e, t, r, n, s) => !e || r.includes(e) || n.includes(e) ? t || s[0] : e),
				N = Object(n.a)(f, g, _, (e, t, r) => e < t.length - 1 ? t[e + 1] : r),
				S = Object(n.a)(f, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				A = Object(s.a)(Object(n.a)(P, w, (e, t) => e ? t[e] : void 0)),
				T = Object(s.a)(Object(n.a)(N, w, (e, t) => e ? t[e] : void 0)),
				L = Object(s.a)(Object(n.a)(S, w, (e, t) => e ? t[e] : void 0)),
				M = (Object(s.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, w, (e, t) => Object.keys(e).filter(e => !!t[e]).map(r => ({
					...t[r],
					preloadedPreviewUrl: e[r]
				})))), Object(n.a)(P, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				B = Object(n.a)((e, t) => {
					let {
						streamIdFromPath: r
					} = t;
					return r ? x(e, r) : void 0
				}, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function R(e, t) {
				const r = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return r[t] >= r[e]
			}
			const D = Object(n.a)(P, h, (e, t) => e && t.timestamps[e] || 0);
			var G;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(G || (G = {}));
			const F = Object(n.a)(P, w, m.b, (e, t, r) => {
					if (r) return G.INTRO;
					const n = e && t[e];
					if (!n) return G.UNAVAILABLE;
					const s = n.stream.state;
					return s === o.a.IS_LIVE || s === o.a.DISCONNECTED ? G.LIVE : s === o.a.ENDED && n.stream.vod_accessible ? G.VOD : G.UNAVAILABLE
				}),
				U = Object(n.a)(A, F, m.b, c.b, c.o, (e, t, r, n, s) => r ? n : e ? t === G.LIVE || t === G.VOD ? e.stream.hls_url : s : void 0),
				H = Object(n.a)(A, F, D, (e, t, r) => e ? t === G.LIVE ? e.broadcast_time : t === G.VOD && r < e.broadcast_time ? r : 0 : 0),
				W = (e, t) => {
					const r = p(e);
					return !!r && r[t] && r[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			}));
			var n = r("./node_modules/reselect/es/index.js"),
				s = r("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = r("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(n.a)(o, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(n.a)(o, e => e.lastChatActivityUtcTs),
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
				return h
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "e", (function() {
				return g
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
				p = Object(n.a)(u, i.p, (e, t) => m(e, t) || null),
				b = Object(n.a)(p, (e, t) => {
					let {
						provider: r
					} = t;
					return r
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var r;
					return (null === (r = e.requiredPaymentProviders) || void 0 === r ? void 0 : r[0]) === t
				})),
				h = Object(n.a)(p, e => (null == e ? void 0 : e[0].price) || null),
				f = Object(n.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(n.a)(f, e => Boolean(null == e ? void 0 : e.isCanceled))
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return i
			})), r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "c", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			}));
			var n = r("./src/reddit/constants/experiments.ts"),
				s = r("./src/reddit/featureFlags/index.ts"),
				a = r("./src/reddit/helpers/chooseVariant/index.ts"),
				o = r("./src/reddit/selectors/subreddit.ts");
			const i = e => s.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: n.Bf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === n.Hf.SmIcon || t === n.Hf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: r
					} = t;
					return !!e.subreddits.api.models.pending[r]
				},
				u = (e, t) => {
					let {
						subredditName: r
					} = t;
					return !!e.subreddits.api.models.error[r]
				},
				m = (e, t) => {
					let {
						subredditName: r
					} = t;
					const n = Object(o.Z)(e, {
						subredditName: r
					});
					return (n && n.postIds || []).slice(0, 2)
				}
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedGild~GildModal.7e1e4e75cfe021f7db7c.js.map