// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.691ab155ca194db1ad9c.js
// Retrieved at 12/15/2022, 8:00:04 PM by Reddit Dataminer v1.0.0
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
				var v = function(e) {
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
				v.propTypes = {
					stripe: a.any,
					options: a.object
				};
				var x = function(e) {
						return function(e, t) {
							if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
							return e
						}(t.useContext(g), e)
					},
					w = function(e) {
						return (0, e.children)(x("mounts <ElementsConsumer>"))
					};
				w.propTypes = {
					children: a.func.isRequired
				};
				var O = function(e) {
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
									v = n.onEscape,
									w = void 0 === v ? y : v,
									j = n.onClick,
									E = void 0 === j ? y : j,
									_ = x("mounts <".concat(s, ">")).elements,
									C = t.useRef(null),
									I = t.useRef(null),
									k = O(h),
									P = O(d),
									S = O(u),
									N = O(E),
									T = O(g),
									A = O(w);
								t.useLayoutEffect((function() {
									if (null == C.current && _ && null != I.current) {
										var t = _.create(e, i);
										C.current = t, t.mount(I.current), t.on("ready", (function() {
											return k(t)
										})), t.on("change", T), t.on("blur", P), t.on("focus", S), t.on("escape", A), t.on("click", N)
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
									id: r,
									className: a,
									ref: I
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
					C = j("card", E),
					I = j("cardNumber", E),
					k = j("cardExpiry", E),
					P = j("cardCvc", E),
					S = j("fpxBank", E),
					N = j("iban", E),
					T = j("idealBank", E),
					A = j("p24Bank", E),
					M = j("epsBank", E),
					L = j("payment", E),
					B = j("paymentRequestButton", E),
					R = j("linkAuthentication", E),
					G = j("shippingAddress", E),
					F = j("afterpayClearpayMessage", E);
				e.AfterpayClearpayMessageElement = F, e.AuBankAccountElement = _, e.CardCvcElement = P, e.CardElement = C, e.CardExpiryElement = k, e.CardNumberElement = I, e.Elements = v, e.ElementsConsumer = w, e.EpsBankElement = M, e.FpxBankElement = S, e.IbanElement = N, e.IdealBankElement = T, e.LinkAuthenticationElement = R, e.P24BankElement = A, e.PaymentElement = L, e.PaymentRequestButtonElement = B, e.ShippingAddressElement = G, e.useElements = function() {
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
						v = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = n(/version\/(\d+(\.\d+)?)/i),
						w = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !w && /[^-]mobi/i.test(t),
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
					}, v ? (s.msedge = e, s.version = v) : (s.msie = e, s.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
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
						version: v
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
					return w || c || "ipad" == a || o && (3 == E || E >= 4 && !O) || s.silk ? s.tablet = e : (O || "iphone" == a || "ipod" == a || o || i || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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
			const d = function(e) {
					let {
						locale: t = r.DEFAULT_LOCALE,
						pretty: n,
						formatOptions: s
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const a = Number(e);
					return Object(c.c)() ? n ? Object(o.b)(a) : new Intl.NumberFormat(t, s).format(a) : u(a, n, t)
				},
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: n = r.DEFAULT_LOCALE,
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
							return Object(c.c)() ? new Intl.NumberFormat(n, {
								currencyDisplay: "symbol",
								...d
							}).format(g) + " " + t : u(g, o, n, t)
						}
						case a.b.Crypto: {
							if (o) {
								return Object(i.d)(v, l) + " " + h
							}
							const e = Number(Object(i.c)(v, l));
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
							const e = Number(Object(s.a)(v, b));
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
		"./src/reddit/actions/economics/powerups/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			const r = e => (null == e ? void 0 : e.map(e => e.message).join(", ")) || ""
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
			const l = Object(a.a)(d.lb),
				u = (e, t, n) => async (r, s, a) => {
					let {
						gqlContext: d
					} = a;
					var u, m;
					if (!c.a.has(t.toLowerCase())) return;
					if (void 0 !== s().features.econPurchase.subredditLockedCoins[e] && !(null == n ? void 0 : n.force)) return;
					const p = await ((e, t) => Object(o.a)(e, {
						...i,
						variables: {
							subreddit: t
						}
					}))(d(), e);
					if (p.ok) {
						const t = p.body;
						r(l({
							subredditId: e,
							amount: (null === (m = null === (u = t.data.subredditInfoById) || void 0 === u ? void 0 : u.userCoinsInSubreddit) || void 0 === m ? void 0 : m.amount) || 0
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
				l = n("./src/reddit/actions/profile/index.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./node_modules/react/index.js"),
				p = n.n(m),
				b = n("./src/reddit/models/Gold/Award.ts"),
				h = n("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				f = n.n(h);
			const {
				fbt: g
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = e => g._("Sent! You earned {=awarder karma}", [g._param("=awarder karma", p.a.createElement("a", {
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
			var x = n("./src/reddit/constants/modals.ts"),
				w = n("./src/reddit/models/Gold/Coins/index.ts"),
				O = n("./src/reddit/models/Toast/index.ts"),
				y = n("./src/reddit/models/User/index.ts"),
				j = n("./src/reddit/selectors/commentSelector.ts"),
				E = n("./src/reddit/selectors/communityAwards.ts"),
				_ = n("./src/reddit/selectors/gild.ts"),
				C = n("./src/reddit/selectors/gold/awardIcon.ts"),
				I = n("./src/reddit/selectors/gold/econPurchase.ts"),
				k = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = n("./src/reddit/selectors/posts.ts"),
				S = n("./src/reddit/selectors/subreddit.ts"),
				N = n("./src/reddit/selectors/user.ts"),
				T = n("./src/reddit/endpoints/awards/index.ts"),
				A = n("./src/lib/makeGqlRequest/index.ts"),
				M = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				L = n("./src/redditGQL/operations/GildComment.json"),
				B = n("./src/redditGQL/operations/GildPost.json");
			const R = (e, t, n) => Object(A.a)(e, {
					...B,
					variables: t
				}, {
					query: n ? {} : Object(M.b)()
				}),
				G = (e, t, n) => Object(A.a)(e, {
					...L,
					variables: t
				}, {
					query: n ? {} : Object(M.b)()
				});
			var F = n("./src/reddit/helpers/awards/getAwardItemId.ts"),
				D = n("./src/reddit/helpers/awards/message.ts"),
				U = n("./src/reddit/helpers/correlationIdTracker.ts"),
				H = n("./src/reddit/helpers/isPost.ts"),
				W = n("./src/reddit/helpers/trackers/gild.ts"),
				q = n("./src/telemetry/index.ts"),
				V = n("./src/reddit/endpoints/profile/info.ts"),
				J = n("./src/reddit/actions/gold/constants.ts"),
				z = n("./src/reddit/actions/gold/econPurchase.ts");
			const K = Object(s.a)(J.r),
				Y = Object(s.a)(J.v),
				X = (e, t) => async (n, s) => {
					const a = s(),
						o = !Object(H.a)(e) && Object(j.g)(a, {
							commentId: e
						});
					n($());
					try {
						o ? await n(((e, t) => {
							let {
								isOldReddit: n
							} = t;
							return async (t, r, s) => {
								let {
									gqlContext: a
								} = s;
								const o = r(),
									{
										selectedAward: i,
										message: c,
										isAnonymous: d
									} = o.gild,
									l = Object(_.b)(o) || Object(U.d)(U.a.GildingFlow, !1),
									{
										receivedKarma: u
									} = await Object(T.b)(a(), {
										targetId: e,
										awardId: i.id,
										isAnonymous: d,
										nonce: l,
										message: Object(D.b)(c)
									}, n),
									m = await Object(T.a)(a(), {
										thingId: e
									}, n);
								await t(se({
									id: e,
									awardId: i.id,
									awardings: m.awardings,
									awardKarmaReceived: u || 0,
									coins: m.coins,
									treatmentTags: m.treatmentTags
								}))
							}
						})(e, t)) : await n(((e, t) => {
							let {
								isOldReddit: n
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
										message: Object(D.b)(i.message),
										nodeId: e
									},
									d = Object(H.a)(e) ? R : G,
									l = await d(o(), {
										input: c
									}, n);
								let u = !1,
									m = null,
									p = null;
								if (l.ok) {
									const e = l.body;
									u = e.data.gild.ok, m = e.data.gild.fieldErrors, p = e.data.gild.errors
								}
								if (u) {
									const n = l.body,
										{
											gild: r
										} = n.data,
										s = Object(H.a)(e) ? l.body.data.gild.postInfo : l.body.data.gild.comment,
										{
											awardings: a,
											treatmentTags: o
										} = s;
									await t(se({
										awardId: i.selectedAward.id,
										awardings: a,
										awardKarmaReceived: r.awardKarmaReceived,
										coins: r.coins,
										id: e,
										subredditCoins: r.subredditCoins,
										treatmentTags: o
									}))
								} else {
									const e = null == m ? void 0 : m[0].message,
										n = null == p ? void 0 : p[0].message,
										s = e || n || r.fbt._("An unknown error occurred", null, {
											hk: "2oAbwZ"
										});
									await t(te(s))
								}
							}
						})(e, t))
					} catch (i) {
						const e = i,
							t = e && e.message || r.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await n(te(t))
					} finally {
						Object(U.b)(U.a.GildingFlow)
					}
				}, Q = Object(s.a)(J.u), Z = Object(s.a)(J.q), $ = () => async (e, t) => {
					e(Z()), window.setTimeout(() => {
						t().gild.api.pending && e(Q())
					}, 2e3)
				}, ee = Object(s.a)(J.p), te = e => async (t, n) => {
					await t(ee(e)), t(Object(u.f)({
						kind: O.b.Error,
						duration: u.a,
						text: e
					}))
				}, ne = Object(s.a)(J.s), re = (e, t) => {
					const {
						id: n
					} = t, r = Object(H.a)(n) ? Object(P.G)(e, {
						postId: n
					}) : Object(j.c)(e, {
						commentId: n
					}), s = Object(N.m)(e), a = e.gild, {
						isAnonymous: o
					} = a, i = !o && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, c = r ? r.author : void 0, d = Object(S.O)(e, {
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
							awardId: m,
							id: p
						} = e,
						h = Object(E.a)(s, m),
						f = e.awardKarmaReceived,
						g = Object(N.m)(s),
						j = Object(_.b)(s) || Object(U.d)(U.a.GildingFlow, !1);
					if (Object(_.g)(s)) {
						const e = "success.gild",
							t = {},
							n = Object(C.a)(s, {
								award: h,
								minSize: 32,
								postOrCommentId: p
							});
						t.awardId = m, t.awardIcon = n, t.awardName = h.name, Object(a.a)({
							type: e,
							data: t
						})
					}
					if (h.awardType === b.e.Moderator && void 0 === e.subredditCoins) {
						const t = Object(S.O)(s, {
								thingId: p
							}),
							n = t && Object(S.F)(s, {
								subredditName: t.name
							});
						n && (e.subredditCoins = n - h.coinPrice)
					}
					if (t(re(s, e)), g) {
						const n = {
								...V.a,
								...g.karma
							},
							r = n.fromAwardsReceived + e.awardKarmaReceived,
							s = Object(y.e)(g);
						t(Object(l.f)({
							coins: e.coins
						})), t(Object(l.h)({
							userName: s,
							karma: {
								...n,
								fromAwardsReceived: r
							}
						}))
					}(s.posts.instances[p] || []).forEach(n => {
						t(re(s, {
							...e,
							id: n
						}))
					});
					const P = Object(H.a)(p) ? r.fbt._("Success! You have given this post the {awardName} Award", [r.fbt._param("awardName", h.name)], {
							hk: "1Ndi4Z"
						}) : r.fbt._("Success! You have given this comment the {awardName} Award", [r.fbt._param("awardName", h.name)], {
							hk: "2sIK9Y"
						}),
						T = h.coinPrice;
					Object(q.a)(Object(W.viewKarmaSuccessEvent)({
						award: h,
						awarderKarmaEarned: f,
						awardeeKarmaEarned: 0,
						numberCoins: T,
						thingId: p
					})(s)), t(Object(d.g)(x.a.GOLD_GILD_MODAL));
					const A = Object(C.a)(s, {
						award: h,
						minSize: 64,
						postOrCommentId: p
					});
					t(Object(u.f)({
						customIconAsset: A,
						kind: O.b.SuccessAward,
						text: f > 0 ? v({
							awarderKarmaReceived: f
						}) : P
					})), setTimeout(() => {
						const e = Object(F.a)(m, p),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const M = Date.now();
					await t(Object(c.b)({
						correlationId: j,
						forceLoad: !0
					}));
					const L = Date.now() - M;
					if (T > 0) {
						const e = Object(k.f)(n()).filter(e => w.a.has(e.dealInfo.type));
						if (e.length) {
							const n = Math.max(300 - L, 10);
							setTimeout(() => t(Object(i.e)({
								correlationId: j,
								packageId: e[0].mobileId
							})), n)
						}
					}
					const B = Object(S.O)(s, {
						thingId: p
					});
					if (B && Object(I.a)(s, {
							subredditId: B.id
						}) && t(Object(z.a)(B.id, B.name, {
							force: !0
						})), 0 === T && B) {
						t(Object(o.a)(B.id, p, void 0, !0));
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
			const i = Object(r.a)(o.eb),
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
				return I
			})), n.d(t, "b", (function() {
				return P
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "j", (function() {
				return N
			})), n.d(t, "i", (function() {
				return T
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "h", (function() {
				return L
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
				v = n("./src/reddit/models/Toast/index.ts"),
				x = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				w = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				O = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const y = Object(a.a)(O.u),
				j = Object(a.a)(O.c),
				E = e => async (t, n) => {
					t(y(e)), t(Object(l.h)(i.a.ECON_COIN_PURCHASE))
				}, _ = () => async (e, t) => {
					e(j()), e(Object(l.g)(i.a.ECON_COIN_PURCHASE))
				}, C = Object(a.a)(O.y), I = e => {
					let {
						correlationId: t,
						packageId: n
					} = e;
					return async (e, r) => {
						const s = r();
						Object(x.e)(s, n) ? (e(C({
							correlationId: t,
							packageId: n
						})), e(Object(l.i)(i.a.GOLD_TARGETED_OFFER_MODAL))) : o.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${n}`)
					}
				}, k = Object(a.a)(O.t), P = e => {
					let {
						correlationId: t,
						packageId: n
					} = e;
					return async (e, r) => {
						Object(x.c)(r(), n) ? (e(k({
							correlationId: t,
							packageId: n
						})), e(Object(l.i)(i.a.ECON_COIN_PACKAGE_OFFER))) : o.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${n}`)
					}
				}, S = (e, t, n) => async (s, a) => {
					await s(Object(d.c)());
					const o = a(),
						i = Object(x.p)(o, e);
					if (i) s(E({
						correlationId: n,
						packageId: i,
						thingId: t
					}));
					else {
						const e = Object(x.n)(o),
							t = r.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						s(Object(u.f)({
							kind: v.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, N = (e, t, n) => async (a, o, i) => {
					let {
						apiContext: d
					} = i;
					const l = o(),
						{
							coins: u,
							pennies: m
						} = n,
						h = Object(w.s)(l) || Object(b.d)(b.a.GoldPayment, !1);
					let f, v;
					a(Object(c.stripeTokenPending)());
					const x = Object(w.z)(l);
					if (x || (f = await a(Object(c.validateAndCreateStripeToken)(e, t)), v = Object(w.w)(l), f)) try {
						const e = await Object(p.d)({
							coins: u,
							context: d(),
							correlationId: h,
							offerContext: Object(g.d)(n, !1),
							pennies: m,
							rememberCard: v,
							savedCardId: x || void 0,
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
					} catch (O) {
						const e = Object(s.a)(O);
						a(Object(c.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						a(Object(c.stripeApiError)(e))
					}
				}, T = (e, t, a, o) => async (i, d, l) => {
					let {
						apiContext: u
					} = l;
					const m = d(),
						{
							coins: v,
							pennies: x
						} = a,
						O = Object(w.s)(m) || Object(b.d)(b.a.GoldPayment, !1);
					let y, j;
					i(Object(c.stripeTokenPending)());
					const E = Object(w.z)(m);
					if (E || (y = await i(Object(c.validateAndCreateStripeToken)(e, t)), j = Object(w.w)(m), y)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: d,
							selectedAward: l
						} = m.gild;
						if (!e || !l.id) {
							const e = r.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void i(Object(c.stripeApiError)(e))
						}
						const w = l.id,
							C = {
								gildType: w,
								isAnonymous: t,
								message: d
							},
							I = await Object(p.c)({
								coins: v,
								context: u(),
								correlationId: O,
								gildParams: C,
								isOldReddit: o,
								offerContext: Object(g.d)(a, !0),
								pennies: x,
								rememberCard: j,
								savedCardId: E || void 0,
								thingId: e,
								token: y
							});
						if (I.error) {
							const e = Object(s.a)(I.error, I.status);
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
							} = I.body;
							return i(t({
								awardKarmaReceived: r || 0,
								awardId: w,
								awardings: s && s.length ? Object(h.a)(s).map(e => ({
									award: Object(f.i)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: o
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (C) {
						const e = Object(s.a)(C);
						i(Object(c.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						i(Object(c.stripeApiError)(e))
					}
				}, A = e => async (t, n, r) => {
					let {
						apiContext: a
					} = r;
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
							const n = Object(s.a)(e.error);
							return void t(Object(c.paypalApiError)(n))
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
				}, M = (e, t) => async (n, r, a) => {
					let {
						apiContext: i
					} = a;
					const d = r(),
						l = Object(w.s)(d) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: u,
							pennies: p
						} = t;
					try {
						const r = await Object(m.c)({
							context: i(),
							offerContext: Object(g.d)(t, !1),
							orderId: e,
							coins: u,
							pennies: p,
							correlationId: l
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
					} catch (h) {
						o.c.captureException(h);
						const e = Object(s.a)(h);
						n(Object(c.paypalApiError)(e))
					}
				}, L = (e, t) => async (a, i, d) => {
					let {
						apiContext: l
					} = d;
					const u = i(),
						p = Object(w.s)(u) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: v,
							pennies: x
						} = t;
					try {
						const {
							gildModalThingId: o,
							isAnonymous: i,
							message: d,
							selectedAward: w
						} = u.gild;
						if (!o || !w) return void a(Object(c.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const O = w.id,
							y = await Object(m.d)({
								context: l(),
								offerContext: Object(g.d)(t, !0),
								orderId: e,
								coins: v,
								pennies: x,
								thingId: o,
								awardId: O,
								message: d || "",
								isAnonymous: i,
								correlationId: p
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
								awardId: O,
								awardKarmaReceived: t || 0,
								awardings: Object(h.a)(e).map(e => ({
									award: Object(f.i)(e),
									total: e.count
								})),
								coins: r,
								id: o,
								subredditCoins: s,
								treatmentTags: i
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (O) {
						o.c.captureException(O);
						const e = Object(s.a)(O);
						a(Object(c.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "selectPaymentMethod", (function() {
				return c
			})), n.d(t, "paymentCompleted", (function() {
				return d
			})), n.d(t, "cardNameInput", (function() {
				return l
			})), n.d(t, "postalCodeInput", (function() {
				return u
			})), n.d(t, "cardNameEmpty", (function() {
				return m
			})), n.d(t, "postalCodeEmpty", (function() {
				return p
			})), n.d(t, "cardNumberChange", (function() {
				return b
			})), n.d(t, "cardExpiryChange", (function() {
				return h
			})), n.d(t, "cardCvcChange", (function() {
				return f
			})), n.d(t, "stripeTokenPending", (function() {
				return g
			})), n.d(t, "stripeTokenError", (function() {
				return v
			})), n.d(t, "stripeApiError", (function() {
				return x
			})), n.d(t, "validateAndCreateStripeToken", (function() {
				return w
			})), n.d(t, "paypalApiError", (function() {
				return O
			})), n.d(t, "toggleRememberCard", (function() {
				return y
			})), n.d(t, "selectSavedCard", (function() {
				return j
			})), n.d(t, "deleteSavedCard", (function() {
				return E
			})), n.d(t, "savedCardsPending", (function() {
				return _
			})), n.d(t, "savedCardsSuccess", (function() {
				return C
			}));
			var r = n("./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js"),
				s = n("./node_modules/fbt/lib/FbtPublic.js"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				i = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const c = Object(a.a)(i.G),
				d = Object(a.a)(i.A),
				l = Object(a.a)(i.b),
				u = Object(a.a)(i.D),
				m = Object(a.a)(i.a),
				p = Object(a.a)(i.C),
				b = Object(a.a)(i.L),
				h = Object(a.a)(i.K),
				f = Object(a.a)(i.J),
				g = Object(a.a)(i.N),
				v = Object(a.a)(i.M),
				x = Object(a.a)(i.I),
				w = (e, t) => async (n, a) => {
					const i = a(),
						c = Object(o.h)(i),
						d = Object(o.l)(i),
						l = t.getElement(r.CardNumberElement);
					if (!l) return;
					const {
						token: u,
						error: b
					} = await e.createToken(l, {
						name: c,
						address_zip: d
					}), h = !d.trim();
					if (h) {
						const e = s.fbt._("Your ZIP code is incomplete", null, {
							hk: "4bttPr"
						});
						n(p({
							message: e
						}))
					}
					b && n(v(b));
					const f = !c.trim();
					if (f) {
						const e = s.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						n(m({
							message: e
						}))
					}
					return h || b || f ? void 0 : u
				}, O = Object(a.a)(i.B), y = Object(a.a)(i.O), j = Object(a.a)(i.H), E = Object(a.a)(i.g), _ = Object(a.a)(i.E), C = Object(a.a)(i.F)
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "e", (function() {
				return x
			})), n.d(t, "d", (function() {
				return w
			})), n.d(t, "c", (function() {
				return O
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
			const h = Object(a.a)(b.v),
				f = Object(a.a)(b.d),
				g = Object(a.a)(b.w),
				v = (e, t, n) => async e => {
					e(g({
						thingId: t
					})), e(h({
						correlationId: n
					}))
				}, x = (e, t, a) => async (o, c, b) => {
					let {
						apiContext: h
					} = b;
					const g = c(),
						v = Object(l.c)(l.a.GoldPayment);
					let x, w;
					o(Object(i.stripeTokenPending)());
					const O = Object(p.z)(g);
					if (O || (x = await o(Object(i.validateAndCreateStripeToken)(e, t)), w = Object(p.w)(g), x)) try {
						const {
							gildModalThingId: e,
							isAnonymous: t,
							message: c,
							selectedAward: l
						} = g.gild;
						if (!e || !l.id) return void o(Object(i.stripeApiError)(r.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const p = l.id,
							b = l.pennyPrice;
						if (!b) return void o(Object(i.stripeApiError)(r.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const y = {
								gildType: p,
								isAnonymous: t,
								message: c
							},
							j = await Object(d.e)({
								context: h(),
								correlationId: v,
								gildParams: y,
								isOldReddit: a,
								pennies: b,
								rememberCard: w,
								savedCardId: O || void 0,
								thingId: e,
								token: x
							});
						if (j.error) {
							const e = Object(s.a)(j.error, j.status);
							return void o(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await Promise.resolve().then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
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
									award: Object(m.i)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: c
							}))
						}
					} catch (y) {
						const e = Object(s.a)(y);
						o(Object(i.stripeApiError)(e))
					} else o(Object(i.stripeApiError)(r.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, w = (e, t, n) => async (r, a, d) => {
					let {
						apiContext: u
					} = d;
					const m = Object(l.c)(l.a.GoldPayment);
					try {
						const a = await Object(c.b)({
							context: u(),
							awardId: e,
							pennies: t,
							thingId: n,
							correlationId: m
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
					} catch (p) {
						o.c.captureException(p);
						const e = Object(s.a)(p);
						r(Object(i.paypalApiError)(e))
					}
				}, O = e => async (t, a, d) => {
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
						if (!a || !l) return void t(Object(i.paypalApiError)(r.fbt._("Gilding unknown post or comment", null, {
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
								awarder_karma_received: r,
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
							} = await Promise.resolve().then(n.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(d({
								awardKarmaReceived: r || 0,
								awardId: g,
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
					} catch (g) {
						o.c.captureException(g);
						const e = Object(s.a)(g);
						t(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return w
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "a", (function() {
				return j
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./src/lib/env/index.ts"),
				a = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/lib/sentry/index.ts"),
				i = n("./src/reddit/endpoints/gold/productCatalog/old.index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				d = n("./src/reddit/models/Toast/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/lib/makeGqlRequest/index.ts"),
				m = n("./src/reddit/actions/economics/powerups/helpers.ts"),
				p = n("./src/redditGQL/operations/PurchaseCatalogProductOffers.json");
			var b = n("./src/reddit/selectors/gold/productOffers.ts"),
				h = n("./src/reddit/actions/goldPurchaseModals/constants.ts");
			Object(a.a)(h.m);
			const f = Object(a.a)(h.o),
				g = Object(a.a)(h.n),
				v = Object(a.a)(h.i),
				x = Object(a.a)(h.j),
				w = e => async (t, n, a) => {
					let {
						gqlContext: i
					} = a;
					const c = n(),
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
									} = t.body, n = Object(m.a)(e);
									throw new Error(n || "Unknown error in requestPurchaseCatalogProductOffers")
								}
								return t.body
							})(i());
							t(v(e.data.coinpacks.offers[0])), t(x(e.data.premium.offers[0]))
						} catch (l) {
							Object(s.b)() || console.error(l), o.c.captureException(l);
							const e = r.fbt._("There was an error fetching available products", null, {
								hk: "1Uvx37"
							});
							t(g(e))
						}
					}
				}, O = () => async e => e(w()), y = Object(a.a)(h.h), j = () => async (e, t, n) => {
					let {
						gqlContext: a
					} = n;
					var u, m;
					try {
						const t = await Object(i.a)(a());
						if (t.ok) {
							const n = t.body.data.claimAwardOffer;
							if (null === (u = n.errors) || void 0 === u ? void 0 : u.length) throw new Error(n.errors.map(e => e.message).join(" | "));
							if (!(null === (m = n.awards) || void 0 === m ? void 0 : m.length)) throw new Error("Got empty award list on free award offer claim");
							if (!n.ok) throw new Error("Got not ok response on free award offer claim");
							await e(y({
								awards: n.awards
							})), e(Object(l.A)())
						}
					} catch (p) {
						Object(s.b)() || console.error(p), e(Object(c.f)({
							kind: d.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), o.c.captureException(p)
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
				banner: "_2DXf1id0rEhidKxC88jyko"
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
					return Object(l.a)(t) ? e.filter(e => !(e => e.some(e => e.startsWith("econ:transferable:econ:render:")))(e.award.tags || [])) : e
				},
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/localStorage/index.ts"),
				b = n("./src/reddit/helpers/trackers/gild.ts"),
				h = n("./src/reddit/models/Gold/Award.ts"),
				f = n("./src/reddit/models/Subreddit/index.ts"),
				g = n("./src/reddit/models/Toast/index.ts"),
				v = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				x = n("./src/reddit/actions/gold/econPurchase.ts"),
				w = n("./src/reddit/actions/gold/gild.ts"),
				O = n("./src/reddit/actions/gold/giveAward.ts"),
				y = n("./src/reddit/actions/gold/modals.ts"),
				j = n("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				E = n("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				_ = n("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				C = n("./src/reddit/actions/subreddit.ts"),
				I = n("./src/reddit/actions/toaster.ts"),
				k = n("./src/reddit/selectors/commentSelector.ts"),
				P = n("./src/reddit/selectors/communityAwards.ts"),
				S = n("./src/reddit/selectors/gild.ts"),
				N = n("./src/reddit/selectors/gold/awardIcon.ts"),
				T = n("./src/reddit/selectors/gold/econPurchase.ts"),
				A = n("./src/reddit/selectors/gold/giveAwards.ts"),
				M = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				L = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				B = n("./src/reddit/selectors/posts.ts"),
				R = n("./src/reddit/selectors/subreddit.ts"),
				G = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				D = (n("./node_modules/core-js/modules/web.dom.iterable.js"), n("./src/higherOrderComponents/makeAsync.tsx")),
				U = n("./src/lib/loadWithRetries/index.ts"),
				H = n("./src/reddit/helpers/loadThirdPartyScript.ts");
			const W = () => Object(U.a)(() => Promise.all([n.e("PennyPurchaseModal").then(n.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(H.d)().catch(() => {})])).then(e => e[0].default);
			var q = Object(D.a)({
					getComponent: W,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				V = n("./src/reddit/components/TrackingHelper/index.tsx"),
				J = n("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				z = n.n(J),
				K = n("./src/reddit/helpers/awards/message.ts"),
				Y = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				X = n("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				Q = n("./src/reddit/icons/svgs/Eye/index.tsx"),
				Z = n("./src/reddit/icons/svgs/Moderate/index.tsx"),
				$ = n("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				ee = n("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				te = n("./src/reddit/icons/fonts/Coin/index.tsx");
			const ne = e => {
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
			class re extends s.a.PureComponent {
				render() {
					const {
						award: e,
						awardIcon: t,
						className: n
					} = this.props, r = !!e.pennyPrice;
					return s.a.createElement("div", {
						className: Object(c.a)(n, z.a.awardDescriptionContainer)
					}, s.a.createElement("div", {
						className: z.a.iconContainer
					}, s.a.createElement("img", {
						className: z.a.icon,
						src: t
					})), s.a.createElement("div", {
						className: z.a.awardName
					}, i.fbt._("{awardName} Award", [i.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), s.a.createElement("div", {
						className: z.a.benefits
					}, s.a.createElement(ne, {
						award: e
					})), s.a.createElement("div", {
						className: z.a.price
					}, r ? i.fbt._("Purchase for ${dollarPrice}", [i.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : e.coinPrice > 0 ? s.a.createElement(s.a.Fragment, null, s.a.createElement($.a, {
						className: z.a.coinIcon
					}), i.fbt._("{coinPrice}", [i.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "3MZDc4"
					})) : i.fbt._("Free", null, {
						hk: "EW8V2"
					})), e.endsAt && s.a.createElement(ee.a, {
						className: z.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var se = re,
				ae = n("./src/reddit/controls/Button/index.tsx"),
				oe = n("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: ie
			} = n("./node_modules/fbt/lib/FbtPublic.js"), ce = 10;
			class de extends s.a.PureComponent {
				renderButtonText() {
					const {
						needPayment: e,
						needPremium: t,
						selectedAward: n
					} = this.props, r = n.awardType === h.e.Moderator;
					return t ? ie._("Get Premium", null, {
						hk: "3VB1S9"
					}) : !e || r ? ie._("Give", null, {
						hk: "30MOda"
					}) : ie._("Next", null, {
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
					} = this.props, d = i.awardType === h.e.Moderator;
					return s.a.createElement(ae.l, {
						className: Object(c.a)(z.a.gildButton, {
							[z.a.premiumButton]: t
						}),
						"data-redditstyle": !0,
						disabled: o || d && e,
						onClick: t ? n : e ? a : r
					}, o ? s.a.createElement(oe.a, {
						className: z.a.loadingIcon,
						sizePx: ce
					}) : this.renderButtonText())
				}
			}
			var le = de;

			function ue() {
				return (ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			class me extends s.a.PureComponent {
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
					return e ? null : s.a.createElement(X.a, {
						className: z.a.giver,
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
						maxLength: Object(K.a)(),
						placeholder: i.fbt._("Optional private message", null, {
							hk: "22UGRj"
						})
					}, n = t.maxLength > 0, r = n && e.length > t.maxLength;
					return s.a.createElement("div", {
						className: Object(c.a)(z.a.textAreaWrapper, {
							[z.a.messageTooLong]: r
						})
					}, s.a.createElement(Y.t, ue({
						className: z.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: n ? e : ""
					}, t)), n && s.a.createElement("div", {
						className: z.a.characterCountdown
					}, t.maxLength - e.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? s.a.createElement("div", {
						className: z.a.publicIndicator
					}, s.a.createElement(Q.a, {
						className: z.a.eyeIcon
					}), i.fbt._("Shows my username", null, {
						hk: "1HsXbA"
					})) : null
				}
				renderGildButton() {
					return s.a.createElement("div", {
						className: z.a.gildButtonWrapper
					}, s.a.createElement(le, this.props.gildButtonProps))
				}
				renderCommunityCoinBalance() {
					if (this.props.selectedAward.awardType !== h.e.Moderator) return null;
					const {
						subredditName: e,
						subredditCoins: t
					} = this.props, n = i.fbt._("r/{subredditName} balance: {coinBalance}", [i.fbt._param("subredditName", e), i.fbt._param("coinBalance", t ? t.toLocaleString() : "0")], {
						hk: "1G3rBQ"
					});
					return s.a.createElement("div", {
						className: z.a.subredditCoinBalance
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
						className: Object(c.a)(e, z.a.awardDetailsPane)
					}, s.a.createElement("div", {
						className: z.a.awardDescriptionWrapper
					}, s.a.createElement("div", {
						className: z.a.spacerTop
					}), s.a.createElement(se, {
						award: t,
						awardIcon: n
					}), s.a.createElement("div", {
						className: z.a.spacerBottom
					}), t.awardType === h.e.Moderator ? s.a.createElement("span", {
						className: z.a.giver
					}, s.a.createElement(Z.a, {
						className: z.a.modIcon
					}), i.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), !r && this.renderTextArea(), this.renderPublicIndicator(), this.renderCommunityCoinBalance()), this.renderGildButton())
				}
			}
			var pe = me,
				be = n("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				he = n.n(be),
				fe = n("./src/reddit/components/RichTextJson/index.tsx"),
				ge = n("./src/reddit/icons/svgs/Advance/index.tsx");
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
					}, s.a.createElement(ge.a, {
						className: he.a.advanceLeft
					})))), s.a.createElement("div", {
						className: he.a.pillOptionsContainer,
						ref: this.optionsRef,
						style: {
							left: this.state.horizontalOffset
						}
					}, e.map((e, n) => s.a.createElement("button", {
						key: e.tag,
						className: he.a.pillOptionWrapper,
						onClick: () => this.handleTagClick(e.tag, n)
					}, s.a.createElement("div", {
						className: he.a.focusElement,
						tabIndex: -1
					}, s.a.createElement(fe.b, {
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
					}, s.a.createElement(ge.a, null)))))
				}
			}
			var xe = ve,
				we = n("./src/reddit/icons/svgs/Lock/index.tsx"),
				Oe = n("./src/reddit/icons/svgs/New/index.tsx"),
				ye = n("./src/reddit/icons/svgs/Premium/index.tsx");
			var je = e => s.a.createElement("svg", {
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
			const Ee = s.a.memo(e => {
				let t, n;
				const r = !!e.award.tags && e.award.tags.some(e => e.includes("econ:render:lottie:"));
				if (e.award.awardSubType === h.d.Moderator) t = Z.a, n = he.a.moderatorIcon;
				else if (e.award.awardSubType === h.d.Premium) t = e.premiumUser ? ye.a : we.a, n = e.premiumUser ? he.a.premiumIcon : he.a.lockIcon;
				else if (r) t = je, n = he.a.transferableIcon;
				else {
					if (!e.award.isNew) return null;
					t = Oe.a, n = he.a.newIcon
				}
				return s.a.createElement("div", {
					className: Object(c.a)(he.a.iconBadgeContainer, n)
				}, s.a.createElement(t, {
					className: he.a.iconBadge
				}))
			});
			var _e = s.a.memo(e => {
				const {
					award: t,
					awardIcon: n,
					isSelected: r,
					premiumUser: a,
					onSelect: o
				} = e;
				return s.a.createElement("button", {
					className: Object(c.a)(he.a.selectableAward, {
						[he.a.selected]: r
					}),
					onClick: () => o(t)
				}, s.a.createElement("div", {
					className: he.a.buttonContent,
					tabIndex: -1
				}, s.a.createElement("div", {
					className: he.a.iconContainer
				}, s.a.createElement("img", {
					className: he.a.icon,
					src: n
				}), s.a.createElement("div", {
					className: he.a.badgeContainer
				}, s.a.createElement(Ee, {
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
			const Ce = {
					colWidth: 60,
					colGutter: 8,
					rowWidth: 86,
					rowGutter: 4
				},
				Ie = {
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
				ke = e => ({
					[e.tag]: []
				});
			var Pe = s.a.memo(e => {
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
					} = e, [p, h] = Object(r.useState)({}), [f, g] = Object(r.useState)(ke(Ie)), [v, x] = Object(r.useState)(Ie.tag);
					Object(r.useEffect)(() => {
						const e = {},
							t = ke(Ie);
						n.forEach(n => {
							e[n.award.id] = n, t[Ie.tag].push(n.award.id);
							const r = n.award.tags;
							r && r.forEach(e => {
								void 0 === t[e] && (t[e] = []), t[e].push(n.award.id)
							})
						}), h(e), g(t)
					}, [n]);
					const w = [Ie, ...u.filter(e => f[e.tag])],
						O = f[v],
						[y, j] = Object(r.useState)(!1),
						[E, _] = Object(r.useState)(1),
						C = Object(r.useCallback)(e => {
							if (null !== e) {
								const t = e.clientWidth,
									{
										colWidth: n,
										colGutter: r
									} = Ce,
									s = t > (n + r) * (O.length - 1) + n + n + r;
								if (j(s), s) _(O.length);
								else {
									const e = Math.floor((t - n) / (n + r) + 1);
									_(e)
								}
							}
						}, [O]);
					if (a || !n.length) return s.a.createElement("div", {
						className: he.a.awardSelectorPane
					});
					const I = e => {
						o(e);
						const t = w.find(e => e.tag === v) || Ie,
							n = O.findIndex(t => t === e.id),
							r = Math.floor(n / E),
							s = n - r * E;
						l(Object(b.clickSelectAwardEvent)(e, m, {
							awardColPosition: s + 1,
							awardRowPosition: r + 1,
							filterId: v,
							filterName: t.content.markdown
						}))
					};
					return s.a.createElement("div", {
						className: he.a.awardSelectorPane
					}, s.a.createElement(xe, {
						tags: w,
						selectedTag: v,
						sendEvent: l,
						onSelectTag: x
					}), s.a.createElement("div", {
						className: he.a.awardSectionScrollWrapper
					}, s.a.createElement("div", {
						className: he.a.awardSectionContainer
					}, s.a.createElement("div", {
						className: Object(c.a)(he.a.awardSection, {
							[he.a.singleRowGrid]: y
						}),
						ref: C
					}, O.map(e => {
						const n = p[e].award,
							r = e === d.id,
							a = t[e];
						return s.a.createElement(_e, {
							award: n,
							awardIcon: a,
							awardCount: p[e].total,
							isSelected: r,
							key: n.id,
							premiumUser: i,
							onSelect: I,
							thingId: m
						})
					})))))
				}),
				Se = n("./src/lib/localizeCurrency/index.ts"),
				Ne = n("./src/reddit/components/Econ/CoinsModalHeader/index.m.less"),
				Te = n.n(Ne),
				Ae = n("./src/reddit/icons/svgs/Plus/index.tsx");
			const {
				fbt: Me
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function Le(e) {
				let {
					onButtonClick: t,
					onCancel: n,
					title: r,
					buttonText: a
				} = e;
				return s.a.createElement("div", {
					className: Te.a.gildHeader
				}, s.a.createElement("button", {
					className: Te.a.closeBtn,
					onClick: n
				}, s.a.createElement(Y.b, {
					className: Te.a.closeBtnIcon
				})), s.a.createElement("div", {
					className: Te.a.headerText
				}, r), s.a.createElement("button", {
					className: Te.a.coinButton,
					onClick: t
				}, s.a.createElement("div", {
					className: Te.a.coinBalanceIndicator,
					tabIndex: -1
				}, s.a.createElement($.a, {
					className: Te.a.coinIcon
				}), s.a.createElement("div", {
					className: Te.a.coinBalance
				}, a)), s.a.createElement("div", {
					className: Te.a.addCoins,
					tabIndex: -1
				}, s.a.createElement(Ae.a, {
					className: Te.a.plusIcon
				}))))
			}
			var Be = n("./src/reddit/hooks/useLocale.ts"),
				Re = n("./src/reddit/selectors/experiments/econ/index.ts");
			const {
				fbt: Ge
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var Fe = e => {
				let {
					onCancel: t,
					thingId: n,
					userCoins: r
				} = e;
				const o = Object(Be.a)(),
					i = Object(V.b)(),
					c = Object(a.e)(e => !r && Boolean(Object(M.h)(e)) && Object(Re.j)(e)),
					d = c ? Ge._("Get free Coins with Premium", null, {
						hk: "3fzsqq"
					}) : Object(Se.a)(r || 0, {
						locale: o
					});
				return s.a.createElement(Le, {
					onCancel: t,
					onButtonClick: () => {
						i(Object(b.clickAddCoinsButtonEvent)(n));
						const e = c ? "/premium" : "/coins";
						window.open(e, "_blank")
					},
					title: Ge._("Awards", null, {
						hk: "3w1C6X"
					}),
					buttonText: d
				})
			};
			const De = (e, t) => e.length > h.m.length && !e.find(e => e.award.id === t.id);
			var Ue = n("./src/reddit/components/GildModalContent/index.m.less"),
				He = n.n(Ue);
			const We = (e, t) => {
					let {
						thingId: n,
						subredditId: r
					} = t, s = r;
					if (!r) {
						const t = Object(R.O)(e, {
							thingId: n
						});
						s = t && t.id
					}
					if (!s && Object(l.a)(n)) {
						const t = Object(B.G)(e, {
							postId: n
						});
						s = t && t.belongsTo.id
					}
					return s
				},
				qe = Object(o.a)(Object(o.c)({
					awardings: (e, t) => {
						let {
							thingId: n,
							subredditId: r
						} = t;
						const s = We(e, {
								thingId: n,
								subredditId: r
							}),
							a = s ? Object(P.h)(e, {
								subredditId: s,
								thingId: n
							}) : [];
						return u(a, n)
					},
					awardIcons: (e, t) => {
						let {
							thingId: n,
							subredditId: r
						} = t;
						const s = We(e, {
								thingId: n,
								subredditId: r
							}),
							a = (s ? Object(P.h)(e, {
								subredditId: s,
								thingId: n
							}) : []).map(e => e.award);
						return Object(N.b)(e, {
							awards: a,
							minSize: 128,
							postOrCommentId: n
						})
					},
					awardingsPending: (e, t) => {
						let {
							thingId: n,
							subredditId: r
						} = t, s = r;
						if (!r) {
							const t = Object(R.O)(e, {
								thingId: n
							});
							if (!t) return !1;
							s = t.id
						}
						return Object(P.g)(e, {
							subredditId: s,
							thingId: n
						})
					},
					correlationId: e => Object(S.b)(e) || Object(m.d)(m.a.GildingFlow, !1),
					currentUser: G.m,
					errorMessage: S.a,
					isAnonymous: S.f,
					iFramed: S.g,
					isGildPending: S.e,
					isEmployee: G.P,
					isRecommendedCoinPackagePending: M.q,
					message: S.c,
					postOrComment: (e, t) => {
						let {
							thingId: n
						} = t;
						return Object(l.a)(n) ? Object(B.G)(e, {
							postId: n
						}) : Object(k.c)(e, {
							commentId: n
						})
					},
					purchaseCatalogPending: M.o,
					showPurchaseModal: L.v,
					selectedAward: A.b,
					subreddit: R.O,
					subredditCoins: (e, t) => {
						let {
							thingId: n,
							subredditId: r
						} = t;
						const s = Object(R.O)(e, {
								thingId: n
							}),
							a = s ? s.id : r;
						return Object(R.E)(e, {
							subredditId: a
						})
					},
					tags: (e, t) => {
						let {
							thingId: n,
							subredditId: r
						} = t, s = r;
						if (!r) {
							const t = Object(R.O)(e, {
								thingId: n
							});
							s = t && t.id
						}
						if (!s && Object(l.a)(n)) {
							const t = Object(B.G)(e, {
								postId: n
							});
							s = t && t.belongsTo.id
						}
						return s ? Object(P.i)(e, {
							subredditId: s
						}) : []
					},
					userCoins: (e, t) => {
						const n = Object(G.g)(e),
							r = We(e, t);
						return n + Object(T.a)(e, {
							subredditId: r
						})
					}
				}), e => {
					const {
						isEmployee: t,
						selectedAward: n,
						subredditCoins: r,
						userCoins: s
					} = e, {
						awardType: a,
						coinPrice: o,
						pennyPrice: i
					} = n, c = a === h.e.Moderator, d = !!i || ((c ? r : s) || 0) < o && !(t && !c);
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
							selectedAward: n,
							sendEvent: r,
							thingId: s
						} = this.props;
						return r(Object(b.clickConfirmAwardEvent)(s, n)), e(t)
					}
				}
				componentWillUnmount() {
					document.removeEventListener("keydown", this.handleEscapeKey);
					const {
						isAnonymous: e
					} = this.props;
					Object(p.rb)(e)
				}
				componentDidMount() {
					document.addEventListener("keydown", this.handleEscapeKey);
					const {
						awardings: e,
						awardsAndTagsRequested: t,
						correlationId: n,
						isAnonymous: r,
						needPayment: s,
						postOrComment: a,
						purchaseCatalogPending: o,
						purchaseCatalogRequested: i,
						selectAward: c,
						selectedAward: d,
						sendEvent: l,
						setIsAnonymous: u,
						subreddit: g,
						subredditAboutRequested: v,
						subredditId: x,
						subredditLockedCoinsRequested: w,
						subredditName: O,
						thingId: y,
						displayUnusableAwardError: j
					} = this.props;
					n || Object(m.d)(m.a.GildingFlow, !1), l(Object(b.viewGildModalEvent)(d.id, r, y)), u(Object(p.o)());
					const E = g ? g.id : x || (a && a.belongsTo ? a.belongsTo.id : void 0);
					if (E && t(E), De(e, d) && (j(), c(h.o)), g || O) {
						v(g ? g.name : O)
					}
					g && g.type !== f.g.User && w(g.id, g.name), s && (d.pennyPrice ? W() : Object(F.a)(), o || i(n))
				}
				componentDidUpdate(e) {
					e.awardingsPending && !this.props.awardingsPending && De(this.props.awardings, this.props.selectedAward) && (this.props.displayUnusableAwardError(), this.props.selectAward(h.o))
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
						message: m,
						needPayment: p,
						selectedAward: b,
						sendEvent: f,
						showPurchaseModal: g,
						subreddit: v,
						subredditCoins: x,
						subredditName: w,
						tags: O,
						thingId: y,
						userCoins: j
					} = this.props, {
						showPurchaseModalInThisInstance: E
					} = this.state, _ = g && E, C = _ && !b.pennyPrice, I = _ && !!b.pennyPrice, k = (C || I) && !d;
					if (C && k) return null;
					if (I && k) return s.a.createElement(q, null);
					const P = v ? v.name : w,
						S = !(!o || !o.isGold),
						N = {
							needPayment: p,
							needPremium: !S && b.awardSubType === h.d.Premium,
							onNeedPayment: this.onNeedPayment,
							onGetPremium: this.onGetPremium,
							onGild: this.onGildRequested,
							pending: l || u,
							selectedAward: b,
							thingId: y
						};
					return s.a.createElement("div", {
						className: Object(c.a)(r, He.a.gildModalContent)
					}, s.a.createElement(Fe, {
						onCancel: a,
						thingId: y,
						userCoins: j
					}), s.a.createElement("div", {
						className: He.a.modalMainContent
					}, s.a.createElement(Pe, {
						awardIcons: t,
						awardTotals: e,
						awardsPending: n,
						premiumUser: S,
						onSelect: this.props.selectAward,
						selectedAward: b,
						sendEvent: f,
						tags: O,
						thingId: y
					}), s.a.createElement(pe, {
						forcePublic: !1,
						isAnonymous: i,
						message: m,
						selectedAward: b,
						selectedAwardIcon: t[b.id],
						sendEvent: f,
						thingId: y,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						gildButtonProps: N,
						subredditName: P,
						subredditCoins: x
					})), I && s.a.createElement(q, null))
				}
			}
			t.a = Object(a.b)(qe, (e, t) => {
				let {
					author: n,
					profileId: r,
					thingId: s
				} = t;
				return {
					awardsAndTagsRequested: t => e(Object(v.a)(t, s, r && n)),
					closeGildModal: () => e(Object(y.a)()),
					gildRequested: t => e(Object(w.gildGqlRequested)(s, {
						isOldReddit: t
					})),
					needPaymentRequested: t => {
						let {
							awardId: n,
							correlationId: r,
							cost: s,
							isPennyPurchase: a,
							thingId: o
						} = t;
						e(a ? Object(E.b)(s, o, r) : Object(j.d)(n, o, r))
					},
					purchaseCatalogRequested: t => e(Object(_.b)({
						correlationId: t
					})),
					selectAward: t => e(Object(O.a)(t)),
					displayUnusableAwardError: () => e(Object(I.f)({
						kind: g.b.Error,
						duration: I.a,
						text: i.fbt._("This award is not available on this content.", null, {
							hk: "13VV1D"
						})
					})),
					setIsAnonymous: t => {
						e(Object(w.setIsAnonymous)(t)), Object(p.rb)(t)
					},
					subredditAboutRequested: t => e(Object(C.u)(t)),
					subredditLockedCoinsRequested: (t, n) => e(Object(x.a)(t, n)),
					updateMessage: t => e(Object(w.updateMessage)(t))
				}
			})(Object(V.c)(Ve))
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
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return a.a.createElement("div", {
						className: i.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: i.a.unblurButton
					}, c(t, n)))
				}
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
					isNightmodeOn: m.fb
				}));
			t.a = f(e => {
				const {
					isResponsive: t,
					source: n
				} = e, r = {
					responsive: "true",
					is_nightmode: e.isNightmodeOn
				}, a = new URL(n), o = t && !a.searchParams.has("s") ? Object(i.a)(Object(d.a)(n), r) : Object(d.a)(n), m = {
					overflow: "hidden"
				};
				return m.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (m.margin = "0 auto"), e.isListing || (m.maxHeight = `${u.d}px`), void 0 !== e.maxHeight && (m.maxHeight = e.maxHeight || void 0), e.isTweet || (m.height = "100%"), s.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: o,
					style: m,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				alignLeft: "WjuR4W-BBrvdtABBeKUMx",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				renderSmallMedia: "vgwLfcw0MneE2ejmdh_l9",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				imageLink: "_3m20hIKOhTTeMgPnfMbVNN"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
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
				h = n("./src/reddit/constants/adEvents.ts"),
				f = n("./src/reddit/constants/elementClassNames.ts"),
				g = n("./src/reddit/controls/OutboundLink/index.tsx"),
				v = n("./src/reddit/helpers/trackers/ads.ts"),
				x = n("./src/reddit/hooks/useClickSourceData.ts"),
				w = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = n("./src/reddit/models/Media/index.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				j = n("./src/reddit/selectors/telemetry.ts"),
				E = n("./src/reddit/selectors/user.ts"),
				_ = n("./src/reddit/constants/tracking.ts"),
				C = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				I = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				k = n.n(I);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const S = e => e > 2 * O.d,
				N = e => a.a.createElement("img", {
					alt: e.altText || r.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(d.a)(e.className, {
						[k.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				T = e => {
					const t = Object(d.a)(k.a.image, f.g, e.className, {
							[k.a.mShowCentered]: e.showCentered,
							[k.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${O.j}px`), e.isListing || e.isTall && S(e.height) || (n.maxHeight = `${O.d}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const o = Object(s.useRef)(null),
						[i, c] = Object(s.useState)(!1),
						l = Object(s.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!i && t && c(!0)
							})
						}, [i]),
						u = Object(s.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(w.a)(o, l, u.current);
					const {
						width: m,
						height: p
					} = e;
					let b = 240;
					if (m / p > 1)
						if (m < 240) b = p;
						else {
							(b = p * (240 / m)) < 20 && (b = 20)
						}
					else b = Math.min(b, p);
					const h = Object(s.useRef)({
						height: b
					});
					return e.renderSmallMedia ? a.a.createElement("div", {
						ref: o,
						style: h.current
					}, i && a.a.createElement(N, P({}, e, {
						className: t
					}))) : a.a.createElement("img", {
						alt: e.altText || r.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				A = e => {
					const t = {};
					return (!e.showFull && Object(O.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${O.j}px`, e.shouldBlur && (t.maxWidth = Object(O.L)(e.height, e.width) ? `${O.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), a.a.createElement("div", {
						className: Object(d.a)(k.a.container, e.className, {
							[k.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				M = Object(o.b)(() => Object(c.a)(y.F, E.lb, (e, t) => {
					let {
						isSponsored: n,
						postId: r
					} = t;
					return n && r ? Object(y.b)(e, r) : null
				}, j.d, y.G, (e, t, n, r, s) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: r.pageType,
					post: s
				})));
			t.a = M(e => {
				const t = Object(x.a)();
				return e.outboundUrl && !e.shouldBlur ? a.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": C.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(g.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, h.a.Click), Object(v.a)(e.post, e.pageType))
					}
				}, B(e)) : e.isListing && e.postPermalink ? a.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, B(e)) : B(e)
			});
			const L = (e, t) => a.a.createElement(T, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[_.a]: !e
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
					width: t.width,
					renderSmallMedia: t.renderSmallMedia
				}),
				B = e => {
					let {
						onClick: t,
						...n
					} = e;
					const s = Object(O.L)(n.height, n.width),
						o = S(n.height) && s;
					return a.a.createElement(A, P({}, n, {
						className: `${s?`${_.a} `:""}${n.className||""}`
					}), n.isListing ? a.a.createElement("div", {
						className: n.contentImageClassName
					}, L(s, n)) : a.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: o ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: k.a.imageLink
					}, L(s, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && a.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > O.j && Object(O.L)(n.height, n.width) && a.a.createElement("div", {
						className: k.a.seeMore
					}, r.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && a.a.createElement(b.a, {
						onClick: t
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
				renderSmallMedia: "_2WxICCKdnGu7x2n4CBv6zE",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var r = n("./node_modules/lodash/throttle.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				i = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				p = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/selectors/video.ts");
			const f = 100,
				g = f / 2 / 1e3;
			var v = n("./src/lib/forceHttps/index.ts"),
				x = n("./src/lib/hooks/usePrevious.ts");

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}

			function O(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: r,
					onBufferingChange: s,
					shouldLoad: i,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: u,
					onClick: m,
					...p
				} = e;
				const b = Object(a.useRef)(),
					h = Object(a.useRef)(),
					O = Object(x.a)(c);

				function y(e) {
					if (e) {
						const e = null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == h ? void 0 : h.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(a.useEffect)(() => {
					if (y(!c && (t || r)), h.current && s) return b.current = function(e, t) {
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
							4 === e.readyState ? o = !1 : !o && c >= i && c < i + g ? o = !0 : o && c >= i && c > i + g && (o = !1), i = c, s !== o && t(o)
						}, f);
						return () => {
							clearInterval(d), e.removeEventListener("playing", a), e.removeEventListener("play", a), e.removeEventListener("loadeddata", s)
						}
					}(h.current, s), () => {
						b.current && b.current()
					}
				}, []), Object(a.useEffect)(() => {
					O !== c && y(!c && (t || r))
				}, [O, c, t, r]), o.a.createElement("video", w({}, p, {
					ref: e => h.current = e,
					muted: !0,
					onClick: m
				}), o.a.createElement("source", {
					src: Object(v.a)(u || "")
				}))
			}
			var y = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				j = n.n(y);
			const E = Object(c.c)({
				autoplayPref: b.d,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function _(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: r,
					metadata: a,
					started: c
				} = Object(i.e)(t => E(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: g,
					isNotCardView: v,
					showFull: x,
					shouldPause: w,
					width: y,
					isListing: _,
					className: C,
					showCentered: I,
					originalSource: k,
					isPromoted: P,
					renderSmallMedia: S,
					onClick: N
				} = e, T = t && !(P && Object(d.hasAcceptableAds)()), A = Object(i.d)();

				function M(e) {
					A(e ? Object(u.s)(b) : Object(u.Q)(b))
				}

				function L() {
					return A(Object(u.L)({
						postId: b
					}))
				}
				const B = s()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && A(Object(u.D)(b))
				}, 200);

				function R(e) {
					e.persist(), B(e)
				}

				function G(e) {
					var t;
					(a || D(e), c) || (t = e.timeStamp, A(Object(u.M)(b, t)))
				}

				function F(e) {
					A(Object(u.r)(b, e.timeStamp))
				}

				function D(e) {
					! function(e) {
						A(Object(u.P)({
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

				function U(e) {
					r || G(e), a || D(e), A(Object(u.O)(b))
				}

				function H() {
					const e = {};
					return I && (e.margin = "0 auto"), _ || (e.maxHeight = `${p.d}px`), o.a.createElement(O, {
						autoplay: T,
						className: Object(l.a)(m.a, j.a.styledVideo, {
							[j.a.renderSmallMedia]: S
						}),
						height: S ? void 0 : g,
						isListing: _,
						isNotCardView: v,
						key: b,
						loop: !0,
						onBufferingChange: M,
						onClick: N,
						onLoadStart: F,
						onLoadedData: G,
						onLoadedMetadata: D,
						onPause: L,
						onPlaying: U,
						onTimeUpdate: R,
						shouldLoad: h,
						shouldPause: w,
						showCentered: I,
						showFull: x,
						source: f,
						style: S ? void 0 : e,
						width: S ? void 0 : y
					})
				}
				return _ ? H() : o.a.createElement("div", {
					className: Object(l.a)(j.a.container, C, {
						[j.a.centered]: I
					})
				}, o.a.createElement("a", {
					href: k,
					target: "_blank",
					rel: "noopener noreferrer"
				}, H()))
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
		"./src/reddit/components/RichTextJson/Giphy.m.less": function(e, t, n) {
			e.exports = {
				anchor: "voEElhHVrm-yKZcIbBmik",
				giphy: "_1gg1MfJZaNkaPmqHpGQHni",
				attributionRow: "U76N5pdhVpwLUkKv0jpDZ",
				giphyLogo: "lhXj5Lw1-62CSn58uodEt",
				attributionText: "WZIEUuvYX30GAtLJofhDk"
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
				v = m.a.span("SpoilerWrapper", u.a),
				x = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...r
					} = e;
					return a.a.createElement(v, p({}, r, {
						className: Object(o.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				w = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class O extends a.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: n
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == n || n(e))
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
					}), a.a.createElement(w, {
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
			t.a = O
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
				return v
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "f", (function() {
				return w
			})), n.d(t, "u", (function() {
				return O
			})), n.d(t, "d", (function() {
				return y
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "p", (function() {
				return I
			})), n.d(t, "o", (function() {
				return k
			})), n.d(t, "q", (function() {
				return P
			})), n.d(t, "s", (function() {
				return S
			})), n.d(t, "r", (function() {
				return N
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "w", (function() {
				return A
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
				v = c.a.ol("Ol", i.a),
				x = c.a.strong("B", i.a),
				w = c.a.em("I", i.a),
				O = c.a.span("U", i.a),
				y = e => s.a.createElement("del", e),
				j = c.a.sub("Sub", i.a),
				E = c.a.sup("Sup", i.a),
				_ = c.a.table("Table", i.a),
				C = c.a.tr("Tr", i.a),
				I = c.a.td("Tdl", i.a),
				k = c.a.td("Tdc", i.a),
				P = c.a.td("Tdr", i.a),
				S = c.a.th("Thl", i.a),
				N = c.a.th("Thc", i.a),
				T = (c.a.th("Thr", i.a), c.a.wrapped(e => s.a.createElement(a.b, e), "A", i.a)),
				A = c.a.wrapped(d.a, "A", i.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return y
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return E
			}));
			var r = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/lodash/findLastIndex.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/media.tsx"),
				h = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = n("./src/reddit/components/RichTextJson/index.m.less"),
				g = n.n(f);
			const v = n("./src/lib/lessComponent.tsx").a.div("Container", g.a),
				x = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...r
					} = e;
					return i.a.createElement(v, r)
				}),
				w = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.v || !!e.c && !e.c.every(e => e.e === p.B && !e.t),
				O = e => a()(e, w),
				y = e => null == e ? void 0 : e.findIndex(w),
				j = e => {
					const {
						altText: t,
						className: n,
						content: r,
						isListing: s,
						isNSFW: a,
						isNsfwBlockingModalEligible: o,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: f,
						renderMediaAsLinks: w,
						rtJsonElementProps: j,
						useExplicitTextColor: E,
						shouldBlur: _,
						onClickRevealSpoilerText: C,
						mediaProps: I
					} = e, k = r.document, P = [], S = e.mediaMetadata || null, N = y(k), T = O(k);
					if (_ && !s && !o) return i.a.createElement(v, {
						className: Object(c.a)(m.j, n)
					}, i.a.createElement("div", {
						className: g.a.unblurButtonContainer
					}, i.a.createElement("button", {
						className: g.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!a, !!d))));
					if (-1 !== N)
						for (let i = N; i <= T; i++) {
							const e = k[i];
							switch (e.e) {
								case p.k:
									P.push(h.c(e, j, i));
									break;
								case p.l:
									P.push(h.d(i));
									break;
								case p.b:
									P.push(h.a(e, S, j, i));
									break;
								case p.c:
									P.push(h.b(e, i));
									break;
								case p.p:
									P.push(h.f(e, S, j, i, C));
									break;
								case p.A:
									P.push(h.h(e, S, j, i, C));
									break;
								case p.v:
									P.push(h.g(e, S, j, i, C, I));
									break;
								case p.h:
									P.push(Object(b.a)(e, i));
									break;
								case p.m:
								case p.a:
								case p.E:
									P.push(...Object(b.b)({
										node: e,
										key: i,
										rtJsonElementProps: j,
										mediaMetadata: S,
										renderMediaAsLinks: w,
										postId: f,
										altText: t,
										mediaProps: I
									}))
							}
						}
					return E ? i.a.createElement(v, {
						className: Object(c.a)(m.j, n)
					}, P) : i.a.createElement(x, {
						className: Object(c.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, P)
				};
			class E extends i.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => r.fbt._("Something went wrong while trying to render this", null, {
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
						return j(t)
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
				hasSmallMedia: "_1yyTGHoIL7vZ6fNJ2-s3dL",
				CommentGiphyWrapper: "_2R6TbsJdSgxwd1OzbbrIjl",
				commentGiphyWrapper: "_2R6TbsJdSgxwd1OzbbrIjl",
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				renderSmallMedia: "_18dflNtNlz_sHfoBK19VZn",
				reload: "_2O6ZaJBTx6OGys4GI6Egy-"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return R
			})), n.d(t, "b", (function() {
				return F
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
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/RichTextJson/index.ts"),
				g = n("./src/reddit/components/RichTextJson/elements.tsx"),
				v = n("./src/reddit/endpoints/giphy/index.ts"),
				x = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				w = n("./src/reddit/hooks/useMounted.ts");
			var O = e => a.a.createElement("svg", {
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
				y = n("./src/reddit/components/RichTextJson/Giphy.m.less"),
				j = n.n(y);
			const {
				fbt: E
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var _ = e => {
					let {
						id: t,
						mp4Url: n,
						className: r,
						externalLink: o,
						onClick: i
					} = e;
					const c = o || Object(b.h)(t),
						d = Object(s.useRef)(null),
						[l, u] = Object(s.useState)(!1),
						[m, p] = Object(s.useState)(null),
						h = Object(w.b)(),
						f = Object(s.useCallback)((async function(e) {
							e.forEach(e => {
								const {
									isIntersecting: n
								} = e;
								!l && n && (u(!0), async function(e, t) {
									const n = Object(b.g)(e);
									t((await Object(v.a)(n)).data.user)
								}(t, e => {
									h.current && p(e)
								}))
							})
						}), [u, t, l, h]);
					Object(x.a)(d, f);
					const y = (null == m ? void 0 : m.display_name) || (null == m ? void 0 : m.username);
					return a.a.createElement("div", {
						className: r
					}, a.a.createElement(g.a, {
						href: c,
						target: "_blank",
						className: j.a.anchor
					}, n ? a.a.createElement("video", {
						className: j.a.giphy,
						loop: !0,
						autoPlay: !0,
						muted: !0,
						onClick: i,
						ref: d
					}, a.a.createElement("source", {
						src: n
					})) : c), a.a.createElement("div", {
						className: j.a.attributionRow
					}, a.a.createElement(O, {
						className: j.a.giphyLogo
					}), a.a.createElement("span", {
						className: j.a.attributionText
					}, (null == m ? void 0 : m.profile_url) && y && a.a.createElement(a.a.Fragment, null, E._("by {=[name]}", [E._param("=[name]", a.a.createElement(g.a, {
						href: m.profile_url,
						target: "_blank"
					}, E._("{name}", [E._param("name", y)], {
						hk: "1jl6v3"
					})))], {
						hk: "3hNtmj"
					})), E._("via GIPHY", null, {
						hk: "4BJhbY"
					}))))
				},
				C = n("./src/reddit/components/RichTextJson/media.m.less"),
				I = n.n(C),
				k = n("./src/lib/lessComponent.tsx"),
				P = n("./src/reddit/helpers/media/index.ts");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
					}
					return e
				}).apply(this, arguments)
			}
			const N = /\/(\w+)\/asset\/(\w+)\//,
				T = k.a.wrapped(g.a, "A", I.a),
				A = k.a.wrapped(l.a, "ImageBox", I.a),
				M = k.a.wrapped(e => a.a.createElement("p", e), "Caption", I.a),
				L = k.a.div("Placeholder", I.a),
				B = k.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: i,
						onReload: c,
						...d
					} = e;
					const l = n === f.E ? r.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : r.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(s.useState)(!1);
					return Object(s.useEffect)(() => {
						c && setTimeout(() => {
							m(!0)
						}, 1500)
					}), a.a.createElement(L, S({
						className: Object(o.a)(t, {
							[I.a.renderSmallMedia]: i,
							[I.a.reload]: !!c
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, d), !!c && u && a.a.createElement(p.t, {
						priority: p.c.Plain,
						className: I.a.ModalTopicsErrorButton,
						Icon: Object(h.b)("refresh"),
						text: r.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: c
					}))
				}, "Placeholder", I.a),
				R = (e, t) => {
					let {
						c: n,
						x: r,
						y: s
					} = e;
					return a.a.createElement("div", {
						className: I.a.MediaWrapper
					}, a.a.createElement(u.a, {
						height: s,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: r
					}, a.a.createElement(d.a, {
						isListing: !1,
						source: n,
						height: s,
						width: r,
						showCentered: !0,
						showFull: !0
					})))
				},
				G = (e, t, n) => {
					const r = e.c;
					let s = "";
					return n && (n.e === f.s ? s = n.s.u : n.e === f.r ? s = n.s.gif : n.e === f.t && (s = (e => {
						const t = N.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), s ? a.a.createElement(T, {
						href: s,
						key: t,
						title: r
					}, r || s) : null
				},
				F = e => {
					let {
						node: t,
						key: n,
						rtJsonElementProps: r,
						mediaMetadata: s,
						renderMediaAsLinks: i,
						postId: d,
						altText: l,
						mediaProps: p
					} = e;
					const h = f.F(s, t.id);
					if (i) return [G(t, n, h)];
					const g = [];
					return !h || h.e === f.s && null === h.s.x && null === h.s.y ? g.push(((e, t, n, r) => a.a.createElement(B, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: r
					}))(t.e, n, null == p ? void 0 : p.renderSmallMedia, null == p ? void 0 : p.onReload)) : h.e === f.s ? g.push(((e, t, n, r, s) => {
						let {
							id: i,
							s: c,
							p: d
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m,
							onClick: p
						} = s || {};
						let b = c;
						return m && (b = Object(P.i)(240, 20, c, d)), a.a.createElement("div", {
							className: Object(o.a)(I.a.MediaWrapper, {
								[I.a.mHasCaption]: n,
								[I.a.hasSmallMedia]: m
							})
						}, a.a.createElement(u.a, {
							height: b.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: b.x
						}, a.a.createElement(A, {
							altText: r,
							originalSource: c.u,
							postId: i,
							source: b.u,
							height: b.y,
							width: b.x,
							shouldBlur: !1,
							showCentered: !0,
							showFull: !0,
							isListing: !1,
							alignLeft: l,
							renderSmallMedia: m,
							onClick: p
						})))
					})(h, n, !!t.c, l, p)) : h.e === f.r ? g.push(((e, t, n, r, s) => {
						let {
							id: i,
							ext: c,
							s: d
						} = e;
						return Object(b.i)(i) ? a.a.createElement(_, {
							key: t,
							id: i,
							mp4Url: d.mp4,
							className: I.a.CommentGiphyWrapper,
							externalLink: c,
							onClick: null == s ? void 0 : s.onClick
						}) : a.a.createElement("div", {
							className: Object(o.a)(I.a.MediaWrapper, {
								[I.a.mHasCaption]: n,
								[I.a.hasSmallMedia]: null == s ? void 0 : s.renderSmallMedia
							})
						}, a.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, a.a.createElement(m.a, {
							height: d.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: d.mp4,
							width: d.x,
							postId: i,
							source: d.mp4,
							shouldPause: !1,
							showCentered: !(null == s ? void 0 : s.renderSmallMedia),
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: null == s ? void 0 : s.renderSmallMedia,
							onClick: null == s ? void 0 : s.onClick
						})))
					})(h, n, !!t.c, 0, p)) : h.e === f.t && g.push(((e, t, n, r) => {
						let {
							hlsUrl: s,
							dashUrl: i,
							x: d,
							y: l,
							isGif: m
						} = e;
						return a.a.createElement("div", {
							className: Object(o.a)(I.a.MediaWrapper, {
								[I.a.mHasCaption]: n
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
							postId: r,
							isGif: m
						})))
					})(h, n, !!t.c, d)), t.c && g.push(((e, t) => a.a.createElement(M, {
						key: t
					}, e))(t.c, `caption${n}`)), g
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return N
			})), n.d(t, "d", (function() {
				return T
			})), n.d(t, "a", (function() {
				return A
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "f", (function() {
				return L
			})), n.d(t, "h", (function() {
				return R
			})), n.d(t, "g", (function() {
				return G
			})), n.d(t, "i", (function() {
				return F
			})), n.d(t, "e", (function() {
				return D
			}));
			var r = n("./src/lib/unicodeUtils/index.ts"),
				s = n("./node_modules/lodash/reduce.js"),
				a = n.n(s),
				o = n("./node_modules/react/index.js"),
				i = n.n(o),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/models/Product/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var h = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				g = n.n(f);
			const v = 1e3,
				x = 1e3;
			var w;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(w || (w = {}));
			class O extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = w.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = w.Inside, setTimeout(() => {
							this.mouseLocation === w.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, v)
					}, this.onMouseOut = () => {
						this.mouseLocation = w.Outside, setTimeout(() => {
							this.mouseLocation !== w.Inside && this.setState({
								tooltipOpen: !1
							})
						}, x)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = p.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.lb(t)
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
					t.e === m.s ? (n = t.s.x, r = t.s.y, s = t.s.u) : t.e === m.r && (n = t.s.x, r = t.s.y, s = t.s.gif);
					const a = this.state.tooltipOpen ? Object(d.a)() : void 0;
					return s ? i.a.createElement("div", {
						className: g.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: a,
						src: s,
						width: n,
						height: r,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && i.a.createElement(h, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${a}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var y = Object(l.c)(O),
				j = n("./src/reddit/components/RichTextJson/media.tsx"),
				E = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				_ = n("./src/reddit/components/SubredditMention/index.tsx"),
				C = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				I = n("./src/reddit/helpers/isComment.ts"),
				k = n("./src/reddit/helpers/isPost.ts"),
				P = n("./src/reddit/helpers/richTextJson/index.ts"),
				S = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const N = (e, t, n) => {
					const r = e.c || [],
						s = e.l,
						a = [],
						o = r.length;
					for (let i = 0; i < o; i++) {
						const e = r[i];
						a.push(e.e === m.x ? e.t : D(e, t, i))
					}
					const d = c.x[s - 1];
					return i.a.createElement(d, {
						key: n
					}, a)
				},
				T = e => i.a.createElement(c.e, {
					key: e
				}),
				A = (e, t, n, r, s) => {
					const a = e.c;
					if (!a) return;
					const o = a.length,
						d = [];
					for (let i = 0; i < o; i++) d.push(B(a[i], t, n, i, s));
					return i.a.createElement(c.c, {
						key: r
					}, d)
				},
				M = (e, t) => {
					const n = e.c;
					return i.a.createElement(c.k, {
						key: t
					}, i.a.createElement(c.h, null, n.reduce((e, t, n, r) => e += t.t + (n < r.length ? "\n" : ""), "")))
				},
				L = (e, t, n, r, s) => {
					const a = e.c,
						o = [],
						d = a.length;
					for (let u = 0; u < d; u++) {
						const e = a[u].c;
						e && e.length && o.push(i.a.createElement(c.g, {
							key: u
						}, e.map((e, r) => B(e, t, n, r, s))))
					}
					const l = e.o ? c.i : c.v;
					return i.a.createElement(l, {
						key: r
					}, o)
				},
				B = (e, t, n, r, s) => {
					switch (e.e) {
						case m.b:
							return A(e, t, n, r, s);
						case m.c:
							return M(e, r);
						case m.k:
							return N(e, n, r);
						case m.l:
							return T(r);
						case m.p:
							return L(e, t, n, r, s);
						case m.v:
							return G(e, t, n, r, s);
						case m.A:
							return R(e, t, n, r, s)
					}
				},
				R = (e, t, n, r, s) => {
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
								H: r,
								D: a
							} = q(e.a),
							{
								c: d = []
							} = e;
						u.push(i.a.createElement(r, {
							key: c
						}, F(d, t, n, s))), p[c] = a
					}
					for (let b = 0; b < d; b++) {
						const e = a[b],
							r = e.length,
							o = [];
						for (let a = 0; a < r; a++) {
							const r = p[a],
								{
									c = []
								} = e[a];
							o.push(i.a.createElement(r, {
								key: a
							}, F(c, t, n, s)))
						}
						m.push(i.a.createElement(c.t, {
							key: b
						}, o))
					}
					return i.a.createElement(c.n, {
						key: r
					}, i.a.createElement("thead", null, i.a.createElement(c.t, null, u)), i.a.createElement("tbody", null, m))
				},
				G = (e, t, n, r, s, a) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(c.j, {
						key: e
					}, i.a.createElement("br", null)))(r);
					const o = e.c[0];
					return o.e !== m.m && o.e !== m.a || !Object(P.i)(o.id) ? i.a.createElement(c.j, {
						key: r
					}, F(e.c, t, n, s)) : Object(j.b)({
						node: o,
						key: r,
						rtJsonElementProps: n,
						mediaMetadata: t,
						mediaProps: a
					})
				},
				F = (e, t, n, r) => {
					const s = [],
						a = e.length;
					for (let o = 0; o < a; o++) {
						const a = e[o];
						if (a.e === m.B) s.push(U(a, o));
						else if (a.e === m.y) s.push(i.a.createElement(E.a, {
							key: o,
							onClickReveal: r
						}, F(a.c, t, n, r)));
						else if (a.e === m.n) s.push(i.a.createElement("br", {
							key: o
						}));
						else if (a.e === m.m || a.e === m.a) {
							if (a.id.startsWith("emote|")) {
								const e = m.F(t, a.id);
								e && s.push(i.a.createElement(y, {
									key: o,
									node: a,
									media: e
								}))
							}
						} else s.push(D(a, n, o))
					}
					return s
				},
				D = (e, t, n) => {
					switch (e.e) {
						case m.o:
							const r = U({
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
							return d && Object(k.b)(d) && (s = d.postId), d && Object(I.b)(d) && (a = d.id, s = d.postId), i.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: o,
								postId: s,
								commentId: a
							}, r);
						case m.z:
							return i.a.createElement(_.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.C:
						case m.D:
							return i.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.w:
							return i.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				U = (e, t) => {
					const {
						f: n,
						t: s
					} = e, a = [];
					if (!n) return W(0, s, t);
					const o = Object(r.a)(s);
					let i = 0,
						c = 0;
					const d = n.length;
					for (; i < d; i++) {
						const [e, t, r] = n[i], d = t + r, l = o[t], u = o[d] - l;
						l > c && a.push(W(0, s.substr(c, l - c), `between${i}`)), a.push(W(e, s.substr(l, u), i)), c = l + u
					}
					return c < s.length && a.push(W(0, s.substr(c), `remaining${i}`)), a
				},
				H = {
					[m.j.monospace]: c.h,
					[m.j.bold]: c.b,
					[m.j.italic]: c.f,
					[m.j.underline]: c.u,
					[m.j.strikethrough]: c.d,
					[m.j.subscript]: c.l,
					[m.j.superscript]: c.m
				},
				W = (e, t, n) => {
					let r = t;
					return r = a()(H, (t, r, s) => e & parseInt(s, 10) ? i.a.createElement(r, {
						key: n
					}, t) : t, r)
				},
				q = e => {
					switch (e) {
						case m.f:
							return {
								H: c.r, D: c.q
							};
						case m.d:
							return {
								H: c.r, D: c.o
							};
						case m.e:
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
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = n("./src/reddit/selectors/subredditMention.ts");
			class v extends s.a.PureComponent {
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
			const x = Object(b.c)(v),
				w = Object(o.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				O = Object(a.b)(w),
				y = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: r,
						userVariant: a,
						rtJsonElementProps: o
					} = e;
					if (!n || !t) return s.a.createElement(x, {
						subredditName: r,
						rtJsonElementProps: o
					});
					switch (a) {
						case h.Qf.SmIcon:
							return s.a.createElement(p, {
								subredditName: r,
								rtJsonElementProps: o
							});
						case h.Qf.SmIconHc:
							return s.a.createElement(p, {
								subredditName: r,
								isHoverable: !0,
								rtJsonElementProps: o
							});
						default:
							return s.a.createElement(x, {
								subredditName: r,
								rtJsonElementProps: o
							})
					}
				};
			t.b = O(y)
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
			t.a = e => {
				let {
					center: t,
					className: n,
					sizePx: r = 10
				} = e;
				return s.a.createElement("div", {
					className: Object(a.a)(i.a.loadingIcon, n, {
						[i.a.mCentered]: t
					}),
					style: {
						"--sizePx": `${r}px`
					},
					"data-testid": "LoadingIcon"
				})
			}
		},
		"./src/reddit/endpoints/awards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "a", (function() {
				return m
			}));
			var r = n("./src/lib/makeGqlRequest/index.ts"),
				s = n("./src/lib/makeRequest/index.ts"),
				a = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				i = (n("./src/redditGQL/operations/AvailableAwards.json"), n("./src/redditGQL/operations/AwardSideEffectsDetails.json")),
				c = n("./src/redditGQL/operations/GiveAward.json"),
				d = n("./src/redditGQL/operations/RemoveAward.json");
			const l = async (e, t, n) => {
				var o;
				const i = await Object(r.a)(e, {
					...c,
					variables: {
						input: t
					}
				}, {
					query: n ? {} : Object(a.b)()
				});
				if (!Object(s.c)(i)) throw new Error("An unknown error occurred");
				if (!Object(s.c)(i) || !i.body.data.giveAward.ok) throw i.body.data.giveAward.errors && (null === (o = i.body.data.giveAward.errors) || void 0 === o ? void 0 : o.length) > 0 ? new Error(i.body.data.giveAward.errors[0].message) : new Error("An unknown error occurred");
				return i.body.data.giveAward
			}, u = async (e, t) => {
				var n, a, o;
				const i = await Object(r.a)(e, {
					...d,
					variables: {
						input: t
					}
				});
				if (!Object(s.c)(i)) throw new Error("An unknown error occurred");
				if (!i.body.data.removeAward.ok) {
					const e = null !== (o = null === (a = null === (n = i.body.data.removeAward.errors) || void 0 === n ? void 0 : n[0]) || void 0 === a ? void 0 : a.message) && void 0 !== o ? o : "An unknown error occurred";
					throw new Error(e)
				}
				return i.body.data.removeAward
			}, m = async (e, t, n) => {
				const c = await Object(r.a)(e, {
					...i,
					variables: {
						thingId: t.thingId,
						isPost: Object(o.a)(t.thingId)
					}
				}, {
					query: n ? {} : Object(a.b)()
				});
				if (!Object(s.c)(c)) throw new Error("An unknown error occurred");
				if (c.body.data.postInfoById) {
					const {
						identity: e,
						postInfoById: n
					} = c.body.data;
					return {
						id: t.thingId,
						awardings: n.awardings,
						treatmentTags: n.treatmentTags,
						coins: e.coins
					}
				}
				if (c.body.data.commentById) {
					const {
						identity: e,
						commentById: n
					} = c.body.data;
					return {
						id: t.thingId,
						awardings: n.awardings,
						treatmentTags: n.treatmentTags,
						coins: e.coins
					}
				}
				throw new Error("An unknown error occurred")
			}
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
			const d = async e => {
				let {
					buttonId: t,
					context: n,
					correlationId: d
				} = e;
				const l = {
						button_id: t,
						correlation_id: d
					},
					u = `${n.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					m = Object(i.a)(u);
				return Object(s.a)(Object(a.a)(n, [o.a]), {
					method: r.ob.POST,
					endpoint: m,
					data: l
				}).then(c.a)
			}, l = async e => {
				let {
					context: t,
					coins: n,
					pennies: i,
					correlationId: d
				} = e;
				const l = {
					coins: n,
					pennies: i,
					correlation_id: d
				};
				return Object(s.a)(Object(a.a)(t, [o.a]), {
					method: r.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: l
				}).then(c.a)
			}, u = async e => {
				let {
					context: t,
					awardId: n,
					pennies: i,
					thingId: d,
					correlationId: l
				} = e;
				const u = {
					award_id: n,
					correlation_id: l,
					pennies: i,
					thing_id: d
				};
				return Object(s.a)(Object(a.a)(t, [o.a]), {
					method: r.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: u
				}).then(c.a)
			}, m = async e => {
				let {
					context: t,
					offerContext: n,
					orderId: i,
					coins: d,
					pennies: l,
					correlationId: u
				} = e;
				const m = {
					offer_context: n,
					order_id: i,
					coins: d,
					pennies: l,
					correlation_id: u
				};
				return Object(s.a)(Object(a.a)(t, [o.a]), {
					method: r.ob.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: m
				}).then(c.a)
			}, p = async e => {
				let {
					awardId: t,
					context: n,
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
				return Object(s.a)(Object(a.a)(n, [o.a]), {
					method: r.ob.POST,
					endpoint: `${n.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: f
				}).then(c.a)
			}, b = async e => {
				let {
					awardId: t,
					context: n,
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
				return Object(s.a)(Object(a.a)(n, [o.a]), {
					method: r.ob.POST,
					endpoint: `${n.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: p
				}).then(c.a)
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
			}));
			const r = () => 2048,
				s = e => {
					const t = r();
					return e.slice(0, t)
				}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
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

			function c(e) {
				const t = new r.BigNumber(e),
					n = new r.BigNumber("1e18");
				return t.dividedBy(n).toString()
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
			const i = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(s.b)(t) || Object(a.b)(t))) return Object(s.b)(t) ? o.SourceElement.Comment : Object(r.y)(n) ? o.SourceElement.PostDetail : Object(r.J)(n) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "g", (function() {
				return v
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return w
			})), n.d(t, "d", (function() {
				return O
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
					screen: u.cb(e),
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
						d = Object(l.C)(e, {
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
						post: u.K(e, n.id),
						subreddit: u.mb(e, r),
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
					subreddit: u.nb(t, e),
					screen: u.cb(t)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: a.c.VIEW,
					noun: r.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.nb(n, e),
					screen: u.cb(n)
				}),
				x = (e, t) => n => ({
					...p(n),
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.nb(n, e),
					screen: u.cb(n)
				}),
				w = e => t => ({
					...p(t),
					subreddit: u.mb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.mb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.mb(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/hooks/useMounted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js");

			function s() {
				const [e, t] = Object(r.useState)(!1);
				return Object(r.useEffect)(() => t(!0), []), e
			}

			function a() {
				const e = Object(r.useRef)(!0);
				return Object(r.useEffect)(() => () => {
					e.current = !1
				}, []), e
			}
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
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
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
		"./src/reddit/models/Payments/index.ts": function(e, t, n) {
			"use strict";
			var r, s, a, o;
			n.d(t, "b", (function() {
					return s
				})), n.d(t, "a", (function() {
					return a
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(r || (r = {})),
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
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/redux/es/redux.js"),
				s = n("./src/reddit/actions/gold/constants.ts");
			const a = {};
			var o = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case s.lb: {
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
			const a = (e, t) => {
				let {
					subredditId: n
				} = t;
				return n && e.features.econPurchase.subredditLockedCoins[n] || 0
			}
		},
		"./src/reddit/selectors/gold/productOffers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "i", (function() {
				return m
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "f", (function() {
				return f
			})), n.d(t, "e", (function() {
				return g
			}));
			var r = n("./node_modules/reselect/es/index.js"),
				s = n("./src/lib/makeProductOfferKey/index.ts"),
				a = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/models/Payments/index.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts");
			const c = e => e.subreddits.api.productOffers.pending,
				d = (e, t) => {
					let {
						subredditId: n,
						type: r
					} = t;
					var a, o, i;
					return n ? e.subreddits.productOffers[Object(s.a)(r, n)] : null === (i = null === (o = null === (a = e.features) || void 0 === a ? void 0 : a.goldPurchase) || void 0 === o ? void 0 : o.productOffers) || void 0 === i ? void 0 : i[Object(s.a)(r)]
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
				p = Object(r.a)(u, i.q, (e, t) => m(e, t) || null),
				b = Object(r.a)(p, (e, t) => {
					let {
						provider: n
					} = t;
					return n
				}, (e, t) => null == e ? void 0 : e.find(e => {
					var n;
					return (null === (n = e.requiredPaymentProviders) || void 0 === n ? void 0 : n[0]) === t
				})),
				h = Object(r.a)(p, e => (null == e ? void 0 : e[0].price) || null),
				f = Object(r.a)(e => {
					var t;
					return null === (t = e.user.productOfferSubscriptions) || void 0 === t ? void 0 : t.subscriptions
				}, e => null == e ? void 0 : e[0]),
				g = Object(r.a)(f, e => Boolean(null == e ? void 0 : e.isCanceled))
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
						experimentName: r.Kf
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === r.Qf.SmIcon || t === r.Qf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const r = Object(o.cb)(e, {
						subredditName: n
					});
					return (r && r.postIds || []).slice(0, 2)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedGild~GildModal.691ab155ca194db1ad9c.js.map