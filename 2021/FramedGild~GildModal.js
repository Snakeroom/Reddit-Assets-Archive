// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.d5116acc1984b48a713c.js
// Retrieved at 10/12/2021, 11:20:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild~GildModal", "gildActions"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var r;
			r = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function r(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var n, a = s(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						x = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						j = !O && /[^-]mobi/i.test(t),
						v = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: x || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || x
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: x || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: x || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: x || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? n = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? n = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? n = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? n = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? n = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? n = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, w ? (n.msedge = e, n.version = w) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: w
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || x
					} : u ? n = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? n = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (n = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e, n.osname = "Firefox OS")) : l ? n = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? n = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? n = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: x || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: x || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || x
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || x
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || x
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : o ? n = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, x && (n.version = x)) : a ? (n = {
						name: "iphone" == a ? "iPhone" : "ipad" == a ? "iPad" : "iPod"
					}, x && (n.version = x)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: s(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && x && (n.version = x)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !o && !n.silk ? !n.windowsphone && a ? (n[a] = e, n.ios = e, n.osname = "iOS") : f ? (n.mac = e, n.osname = "macOS") : v ? (n.xbox = e, n.osname = "Xbox") : h ? (n.windows = e, n.osname = "Windows") : g && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var y = "";
					n.windows ? y = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? y = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? y = (y = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : a ? y = (y = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? y = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? y = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? y = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? y = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (y = s(/tizen[\/\s](\d+(\.\d+)*)/i)), y && (n.osversion = y);
					var E = !n.windows && y.split(".")[0];
					return O || c || "ipad" == a || o && (3 == E || E >= 4 && !j) || n.silk ? n.tablet = e : (j || "iphone" == a || "ipod" == a || o || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) r.push(t(e[s]));
					return r
				}

				function a(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), s = n(e, (function(e) {
							var s = t - r(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function o(e, r, n) {
					var o = s;
					"string" == typeof r && (n = r, r = void 0), void 0 === r && (r = !1), n && (o = t(n));
					var i = "" + o.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && o[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return a([i, e[c]]) < 0
						} return r
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = o, s.compareVersions = a, s.check = function(e, t, s) {
					return !o(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = r() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, r, n) {
				return n(e, (function(e, n, a) {
					s = r ? (r = !1, e) : t(s, e, n, a)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), r(n(e), t, s)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_arrayReduce.js"),
				n = s("./node_modules/lodash/_baseEach.js"),
				a = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? r : o,
					d = arguments.length < 3;
				return c(e, a(t, 4), s, d, n)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/currency/centsToDollars/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./src/lib/currency/cleanNumber/index.ts");

			function n(e, t) {
				const s = Object(r.a)(e),
					n = parseInt(s) / 100;
				return Math.floor(n) !== n || t ? n.toFixed(2) : String(n)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, s) {
			"use strict";

			function r(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			s.d(t, "a", (function() {
				return r
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			}));
			var r, n = s("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(r || (r = {}));
			const a = "USD",
				o = "ETH",
				i = "COINS",
				c = [o, "BTC"],
				d = [i, "SUBREDDIT_POINTS", "GAME_TOKENS"],
				l = {
					COINS: () => n.fbt._("Coins", null, {
						hk: "1T2Y4p"
					}),
					SUBREDDIT_POINTS: () => n.fbt._("Subreddit points", null, {
						hk: "1ytOO3"
					}),
					GAME_TOKENS: () => n.fbt._("Game tokens", null, {
						hk: "16BUrU"
					})
				}
		},
		"./src/lib/localizeCurrency/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var r = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				n = s("./src/lib/currency/centsToDollars/index.ts"),
				a = s("./src/lib/currency/currencies.ts"),
				o = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./src/reddit/helpers/governance/tokens.ts"),
				c = s("./src/reddit/constants/intlSupport.ts");
			const d = (e, {
					locale: t = r.DEFAULT_LOCALE,
					pretty: s,
					formatOptions: n
				} = {}) => {
					const a = Number(e);
					return Object(c.c)() ? s ? Object(o.b)(a) : new Intl.NumberFormat(t, n).format(a) : u(a, s, t)
				},
				l = (e, t = {}) => {
					const {
						locale: s = r.DEFAULT_LOCALE,
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
							return Object(c.c)() ? new Intl.NumberFormat(s, {
								currencyDisplay: "symbol",
								...d
							}).format(g) + " " + t : u(g, o, s, t)
						}
						case a.b.Crypto: {
							if (o) {
								return Object(i.c)(w, l) + " " + h
							}
							const e = Number(Object(i.b)(w, l));
							return Object(c.c)() ? new Intl.NumberFormat(s, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : u(e, o, s, h)
						}
						case a.b.Real:
						default: {
							const e = Number(Object(n.a)(w, b));
							return Object(c.c)() ? new Intl.NumberFormat(s, {
								style: "currency",
								currency: h,
								currencyDisplay: "symbol",
								notation: o ? "compact" : "standard",
								...d
							}).format(e) : u(e, o, s, h)
						}
					}
				},
				u = (e, t, s, r) => {
					return (t ? Object(o.b)(e) : e.toLocaleString(s)) + (r ? " " + r : "")
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
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			}));
			const r = e => {
					let t = 0,
						s = 0;
					const r = [0];
					for (const n of e) t++, s += n.length, r[t] = s;
					return r
				},
				n = e => {
					let t = 0,
						s = 0;
					const r = [];
					for (const n of e) {
						for (let e = 0; e < n.length; e++) r[s] = t, s++;
						t++
					}
					return r[s] = t, r
				}
		},
		"./src/reddit/actions/gold/econPurchase.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./src/reddit/reducers/features/econPurchase/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/redditGQL/operations/SubredditCoins.json");
			var c = s("./src/reddit/featureFlags/subredditPoints.ts"),
				d = s("./src/reddit/actions/gold/constants.ts");
			Object(r.a)({
				features: {
					econPurchase: n.a
				}
			});
			const l = Object(a.a)(d.nb),
				u = (e, t, s) => async (r, n, {
					gqlContext: a
				}) => {
					var d, u;
					if (!c.a.has(t.toLowerCase())) return;
					if (void 0 !== n().features.econPurchase.subredditLockedCoins[e] && !(null == s ? void 0 : s.force)) return;
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
		"./src/reddit/actions/gold/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "setIsAnonymous", (function() {
				return K
			})), s.d(t, "updateMessage", (function() {
				return Y
			})), s.d(t, "gildGqlRequested", (function() {
				return X
			})), s.d(t, "triggerLoader", (function() {
				return Q
			})), s.d(t, "gildPending", (function() {
				return $
			})), s.d(t, "gildFailed", (function() {
				return te
			})), s.d(t, "gildSuccessful", (function() {
				return ne
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/postParentMessage/index.ts"),
				o = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				i = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				c = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/toaster.ts"),
				u = s("./node_modules/react/index.js"),
				m = s.n(u),
				p = s("./src/reddit/models/Gold/Award.ts"),
				b = s("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				h = s.n(b);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), g = e => f._("Sent! You earned {=awarder karma}", [f._param("=awarder karma", m.a.createElement("a", {
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
			var w = s("./src/reddit/constants/modals.ts"),
				x = s("./src/reddit/models/Gold/Coins/index.ts"),
				O = s("./src/reddit/models/Post/index.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				v = s("./src/reddit/models/User/index.ts"),
				y = s("./src/reddit/selectors/commentSelector.ts"),
				E = s("./src/reddit/selectors/communityAwards.ts"),
				I = s("./src/reddit/selectors/gild.ts"),
				_ = s("./src/reddit/selectors/gold/awardIcon.ts"),
				C = s("./src/reddit/selectors/gold/econPurchase.ts"),
				k = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/selectors/subreddit.ts"),
				A = s("./src/reddit/selectors/user.ts"),
				S = s("./src/lib/makeGqlRequest/index.ts"),
				T = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				L = s("./src/redditGQL/operations/GildComment.json"),
				M = s("./src/redditGQL/operations/GildPost.json");
			const B = (e, t, s) => Object(S.a)(e, {
					...M,
					variables: t
				}, {
					query: s ? {} : Object(T.b)()
				}),
				R = (e, t, s) => Object(S.a)(e, {
					...L,
					variables: t
				}, {
					query: s ? {} : Object(T.b)()
				});
			var D = s("./src/reddit/helpers/awards/getAwardItemId.ts"),
				G = s("./src/reddit/helpers/awards/message.ts"),
				F = s("./src/reddit/helpers/correlationIdTracker.ts"),
				U = s("./src/reddit/helpers/isPost.ts"),
				H = s("./src/reddit/helpers/trackers/gild.ts"),
				W = s("./src/telemetry/index.ts"),
				V = s("./src/reddit/endpoints/profile/info.ts"),
				q = s("./src/reddit/actions/gold/awardKarma.ts"),
				J = s("./src/reddit/actions/gold/constants.ts"),
				z = s("./src/reddit/actions/gold/econPurchase.ts");
			const K = Object(n.a)(J.r),
				Y = Object(n.a)(J.v),
				X = (e, t) => async (s, n, {
					gqlContext: a
				}) => {
					const o = n().gild,
						{
							isOldReddit: i,
							isLivestream: c
						} = t;
					s($());
					try {
						const t = {
								gildingTypeId: o.selectedAward.id,
								isAnonymous: o.isAnonymous,
								isGildFunded: !1,
								message: Object(G.d)(o.message, o.selectedAward, c),
								nodeId: e
							},
							n = Object(U.a)(e) ? B : R,
							d = await n(a(), {
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
								n = Object(U.a)(e) ? d.body.data.gild.postInfo : d.body.data.gild.comment,
								{
									awardings: a,
									treatmentTags: i
								} = n;
							await s(ne({
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
								n = e || t || r.fbt._("An unknown error occurred", null, {
									hk: "2oAbwZ"
								});
							await s(te(n))
						}
					} catch (d) {
						const e = d,
							t = e && e.message || r.fbt._("An unknown error occurred", null, {
								hk: "2oAbwZ"
							});
						await s(te(t))
					} finally {
						Object(F.b)(F.a.GildingFlow)
					}
				}, Q = Object(n.a)(J.u), Z = Object(n.a)(J.q), $ = () => async (e, t) => {
					e(Z()), window.setTimeout(() => {
						t().gild.api.pending && e(Q())
					}, 2e3)
				}, ee = Object(n.a)(J.p), te = e => async (t, s) => {
					await t(ee(e)), t(Object(l.f)({
						kind: j.b.Error,
						duration: l.a,
						text: e
					}))
				}, se = Object(n.a)(J.s), re = (e, t) => {
					const {
						id: s
					} = t, r = Object(U.a)(s) ? Object(P.H)(e, {
						postId: s
					}) : Object(y.b)(e, {
						commentId: s
					}), n = Object(A.k)(e), a = e.gild, {
						isAnonymous: o
					} = a, i = !o && n && (n.username || n.displayText) ? n.username || n.displayText : void 0, c = r ? r.author : void 0, d = Object(N.G)(e, {
						thingId: s
					});
					return se({
						...t,
						gilder: i,
						gildee: c,
						subredditId: d && d.id
					})
				}, ne = e => async (t, s) => {
					const n = s(),
						{
							awardId: u,
							id: m
						} = e,
						b = Object(E.a)(n, u),
						h = e.awardKarmaReceived,
						f = Object(A.k)(n),
						y = Object(I.b)(n) || Object(F.d)(F.a.GildingFlow, !1);
					if (Object(I.g)(n)) {
						const e = "success.gild",
							t = {},
							s = Object(_.a)(n, {
								award: b,
								minSize: 32,
								postOrCommentId: m
							});
						t.awardId = u, t.awardIcon = s, t.awardName = b.name, Object(a.a)({
							type: e,
							data: t
						})
					}
					if (b.awardType === p.f.Moderator && void 0 === e.subredditCoins) {
						const t = Object(N.G)(n, {
								thingId: m
							}),
							s = t && Object(N.y)(n, {
								subredditName: t.name
							});
						s && (e.subredditCoins = s - b.coinPrice)
					}
					if (t(re(n, e)), f) {
						const e = {
								...V.a,
								...f.karma
							},
							s = e.fromAwardsReceived + h,
							r = Object(v.e)(f);
						t(Object(q.a)({
							userName: r,
							karma: {
								...e,
								fromAwardsReceived: s
							}
						}))
					}(n.posts.instances[m] || []).forEach(s => {
						t(re(n, {
							...e,
							id: s
						}))
					});
					const S = Object(U.a)(m) ? r.fbt._("Success! You have given this post the {awardName} Award", [r.fbt._param("awardName", b.name)], {
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
					})(n)), t(Object(d.g)(w.a.GOLD_GILD_MODAL));
					const L = Object(_.a)(n, {
						award: b,
						minSize: 64,
						postOrCommentId: m
					});
					t(Object(l.f)({
						customIconAsset: L,
						kind: j.b.SuccessAward,
						text: h > 0 ? g({
							awarderKarmaReceived: h
						}) : S
					})), setTimeout(() => {
						const e = Object(D.a)(u, m),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const M = Date.now();
					await t(Object(c.b)(y));
					const B = Date.now() - M;
					if (T > 0) {
						const e = Object(k.f)(s()).filter(e => x.a.has(e.dealInfo.type));
						if (e.length) {
							const s = Math.max(900 - B, 10),
								r = Math.max(300 - B, 10),
								a = Object(U.a)(m) && Object(O.o)(Object(P.H)(n, {
									postId: m
								}));
							setTimeout(() => t(Object(i.e)({
								correlationId: y,
								packageId: e[0].mobileId
							})), a ? s : r)
						}
					}
					const R = Object(N.G)(n, {
						thingId: m
					});
					if (R && Object(C.a)(n, {
							subredditId: R.id
						}) && t(Object(z.a)(R.id, R.name, {
							force: !0
						})), 0 === T && R) {
						t(Object(o.a)(R.id, m, void 0, !0));
						const e = 399,
							r = Object(k.d)(s()).reduce((t, s) => {
								const r = Math.abs(s.pennies - e);
								return (!t || r < t.priceDelta) && (t = {
									packageId: s.mobileId,
									priceDelta: r
								}), t
							}, null);
						r && t(Object(i.b)({
							correlationId: y,
							packageId: r.packageId
						}))
					}
				}
		},
		"./src/reddit/actions/gold/giveAward.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				o = s("./src/reddit/actions/gold/constants.ts");
			const i = Object(r.a)(o.mb),
				c = Object(r.a)(o.t),
				d = e => async t => {
					await t(c({
						id: e
					})), t(Object(n.h)(a.a.GOLD_GILD_ANIMATION_OVERLAY))
				}
		},
		"./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "j", (function() {
				return A
			})), s.d(t, "i", (function() {
				return S
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "g", (function() {
				return L
			})), s.d(t, "h", (function() {
				return M
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/formatApiError/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				c = s("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				d = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				m = s("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				p = s("./src/reddit/endpoints/gold/purchase.ts"),
				b = s("./src/reddit/helpers/correlationIdTracker.ts"),
				h = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				f = s("./src/reddit/models/Gold/Award.ts"),
				g = s("./src/reddit/models/Gold/ProductOffer.ts"),
				w = s("./src/reddit/models/Toast/index.ts"),
				x = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				O = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const v = Object(a.a)(j.q),
				y = Object(a.a)(j.c),
				E = e => async (t, s) => {
					t(v(e)), t(Object(l.h)(i.a.ECON_COIN_PURCHASE))
				}, I = () => async (e, t) => {
					e(y()), e(Object(l.g)(i.a.ECON_COIN_PURCHASE))
				}, _ = Object(a.a)(j.u), C = ({
					correlationId: e,
					packageId: t
				}) => async (s, r) => {
					const n = r();
					Object(x.e)(n, t) ? (s(_({
						correlationId: e,
						packageId: t
					})), s(Object(l.i)(i.a.GOLD_TARGETED_OFFER_MODAL))) : o.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, k = Object(a.a)(j.p), P = ({
					correlationId: e,
					packageId: t
				}) => async (s, r) => {
					Object(x.c)(r(), t) ? (s(k({
						correlationId: e,
						packageId: t
					})), s(Object(l.i)(i.a.ECON_COIN_PACKAGE_OFFER))) : o.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, N = (e, t, s) => async (n, a) => {
					await n(Object(d.c)(e, s));
					const o = a(),
						i = Object(x.n)(o);
					if (0 !== i.length) n(E({
						correlationId: s,
						packageId: i[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(x.k)(o),
							t = r.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						n(Object(u.f)({
							kind: w.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, A = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const i = a(),
						{
							coins: d,
							pennies: l
						} = t,
						u = Object(O.r)(i) || Object(b.d)(b.a.GoldPayment, !1);
					let m, h;
					s(Object(c.stripeTokenPending)());
					const f = Object(O.y)(i);
					if (f || (m = await s(Object(c.validateAndCreateStripeToken)(e)), h = Object(O.v)(i), m)) try {
						const e = await Object(p.f)({
							coins: d,
							context: o(),
							correlationId: u,
							offerContext: Object(g.d)(t, !1),
							pennies: l,
							rememberCard: h,
							savedCardId: f || void 0,
							token: m
						});
						if (e.error) {
							const t = Object(n.a)(e.error, e.status);
							return void s(Object(c.stripeApiError)(t))
						}
						return s(Object(c.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (w) {
						const e = Object(n.a)(w);
						s(Object(c.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						s(Object(c.stripeApiError)(e))
					}
				}, S = (e, t, a) => async (o, i, {
					apiContext: d
				}) => {
					const l = i(),
						{
							coins: u,
							pennies: m
						} = t,
						w = Object(O.r)(l) || Object(b.d)(b.a.GoldPayment, !1);
					let x, j;
					o(Object(c.stripeTokenPending)());
					const v = Object(O.y)(l);
					if (v || (x = await o(Object(c.validateAndCreateStripeToken)(e)), j = Object(O.v)(l), x)) try {
						const {
							gildModalThingId: e,
							isAnonymous: i,
							message: O,
							selectedAward: y
						} = l.gild;
						if (!e || !y.id) {
							const e = r.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void o(Object(c.stripeApiError)(e))
						}
						const E = y.id,
							_ = {
								gildType: E,
								isAnonymous: i,
								message: O
							},
							C = await Object(p.e)({
								coins: u,
								context: d(),
								correlationId: w,
								gildParams: _,
								isOldReddit: a,
								offerContext: Object(g.d)(t, !0),
								pennies: m,
								rememberCard: j,
								savedCardId: v || void 0,
								thingId: e,
								token: x
							});
						if (C.error) {
							const e = Object(n.a)(C.error, C.status);
							return void o(Object(c.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await s.e("gildActions").then(s.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(I()), o(Object(c.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: r,
								all_awardings: n,
								coins: a,
								treatment_tags: i
							} = C.body;
							return o(t({
								awardKarmaReceived: r || 0,
								awardId: E,
								awardings: n && n.length ? Object(h.a)(n).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: i
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (y) {
						const e = Object(n.a)(y);
						o(Object(c.stripeApiError)(e))
					} else {
						const e = r.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						o(Object(c.stripeApiError)(e))
					}
				}, T = e => async (t, s, {
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
							const s = Object(n.a)(e.error);
							return void t(Object(c.paypalApiError)(s))
						} {
							const {
								order_id: t
							} = e.body;
							return t
						}
					} catch (l) {
						o.c.captureException(l);
						const e = Object(n.a)(l);
						t(Object(c.paypalApiError)(e))
					}
				}, L = (e, t) => async (s, r, {
					apiContext: a
				}) => {
					const i = r(),
						d = Object(O.r)(i) || Object(b.d)(b.a.GoldPayment, !1),
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
							const e = Object(n.a)(r.error);
							return void s(Object(c.paypalApiError)(e))
						} {
							const {
								coins: e
							} = r.body;
							s(Object(c.paymentCompleted)({
								coins: e,
								confirmed: !0
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (p) {
						o.c.captureException(p);
						const e = Object(n.a)(p);
						s(Object(c.paypalApiError)(e))
					}
				}, M = (e, t) => async (a, i, {
					apiContext: d
				}) => {
					const l = i(),
						u = Object(O.r)(l) || Object(b.d)(b.a.GoldPayment, !1),
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
						const j = O.id,
							v = await Object(m.d)({
								context: d(),
								offerContext: Object(g.d)(t, !0),
								orderId: e,
								coins: p,
								pennies: w,
								thingId: o,
								awardId: j,
								message: x || "",
								isAnonymous: i,
								correlationId: u
							});
						if (v.error) {
							const e = Object(n.a)(v.error);
							a(Object(c.paypalApiError)(e))
						} else {
							a(I());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: r,
								subreddit_coins: n,
								treatment_tags: i
							} = v.body;
							a(Object(c.paymentCompleted)({
								coins: r,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await s.e("gildActions").then(s.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(d({
								awardId: j,
								awardKarmaReceived: t || 0,
								awardings: Object(h.a)(e).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})),
								coins: r,
								id: o,
								subredditCoins: n,
								treatmentTags: i
							})), Object(b.b)(b.a.GoldPayment)
						}
					} catch (x) {
						o.c.captureException(x);
						const e = Object(n.a)(x);
						a(Object(c.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "selectPaymentMethod", (function() {
				return d
			})), s.d(t, "paymentCompleted", (function() {
				return l
			})), s.d(t, "cardNameInput", (function() {
				return u
			})), s.d(t, "postalCodeInput", (function() {
				return m
			})), s.d(t, "cardNameEmpty", (function() {
				return p
			})), s.d(t, "cardElementChange", (function() {
				return b
			})), s.d(t, "stripeTokenPending", (function() {
				return h
			})), s.d(t, "stripeTokenError", (function() {
				return f
			})), s.d(t, "stripeApiError", (function() {
				return g
			})), s.d(t, "validateAndCreateStripeToken", (function() {
				return w
			})), s.d(t, "paypalApiError", (function() {
				return x
			})), s.d(t, "toggleRememberCard", (function() {
				return O
			})), s.d(t, "selectSavedCard", (function() {
				return j
			})), s.d(t, "_deleteSavedCard", (function() {
				return v
			})), s.d(t, "deleteSavedCard", (function() {
				return y
			})), s.d(t, "savedCardsPending", (function() {
				return E
			})), s.d(t, "savedCardsSuccess", (function() {
				return I
			})), s.d(t, "loadSavedCards", (function() {
				return _
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/sentry/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/endpoints/gold/purchase.ts"),
				i = s("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = s("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(a.a)(i.B),
				l = Object(a.a)(i.w),
				u = Object(a.a)(i.b),
				m = Object(a.a)(i.y),
				p = Object(a.a)(i.a),
				b = Object(a.a)(i.E),
				h = Object(a.a)(i.G),
				f = Object(a.a)(i.F),
				g = Object(a.a)(i.D),
				w = e => async (t, s) => {
					const n = s(),
						a = Object(c.h)(n),
						o = Object(c.l)(n),
						{
							token: i,
							error: d
						} = await e.createToken({
							name: a,
							address_zip: o
						});
					if (a.trim()) {
						if (!d && i) return i;
						t(f(d || void 0))
					} else {
						const e = r.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, x = Object(a.a)(i.x), O = Object(a.a)(i.H), j = Object(a.a)(i.C), v = Object(a.a)(i.g), y = e => async (t, s, {
					apiContext: r
				}) => {
					t(v(e));
					try {
						const t = await Object(o.a)(r(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						n.c.captureException(a)
					}
				}, E = Object(a.a)(i.z), I = Object(a.a)(i.A), _ = () => async (e, t, {
					apiContext: s
				}) => {
					e(E());
					try {
						const t = await Object(o.b)(s());
						if (t.error) throw new Error(t.error.type);
						const r = t.body.map(e => ({
							brand: e.brand,
							cardId: e.card_id,
							expirationMonth: e.exp_month,
							expirationYear: e.exp_year,
							last4: e.last4
						}));
						e(I(r)), r[0] && e(j(r[0].cardId))
					} catch (r) {
						n.c.captureException(r), e(I([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "c", (function() {
				return j
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/formatApiError/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				i = s("./src/reddit/actions/goldPurchaseModals/payment.ts"),
				c = s("./src/reddit/endpoints/gold/paypalPurchases.ts"),
				d = s("./src/reddit/endpoints/gold/purchase.ts"),
				l = s("./src/reddit/helpers/correlationIdTracker.ts"),
				u = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				m = s("./src/reddit/models/Gold/Award.ts"),
				p = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				b = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const h = Object(a.a)(b.r),
				f = Object(a.a)(b.d),
				g = Object(a.a)(b.s),
				w = (e, t, s) => async e => {
					e(g({
						thingId: t
					})), e(h({
						correlationId: s
					}))
				}, x = (e, t) => async (a, o, {
					apiContext: c
				}) => {
					const b = o(),
						h = Object(l.c)(l.a.GoldPayment);
					let g, w;
					a(Object(i.stripeTokenPending)());
					const x = Object(p.y)(b);
					if (x || (g = await a(Object(i.validateAndCreateStripeToken)(e)), w = Object(p.v)(b), g)) try {
						const {
							gildModalThingId: e,
							isAnonymous: o,
							message: l,
							selectedAward: p
						} = b.gild;
						if (!e || !p.id) return void a(Object(i.stripeApiError)(r.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const O = p.id,
							j = p.pennyPrice;
						if (!j) return void a(Object(i.stripeApiError)(r.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const v = {
								gildType: O,
								isAnonymous: o,
								message: l
							},
							y = await Object(d.g)({
								context: c(),
								correlationId: h,
								gildParams: v,
								isOldReddit: t,
								pennies: j,
								rememberCard: w,
								savedCardId: x || void 0,
								thingId: e,
								token: g
							});
						if (y.error) {
							const e = Object(n.a)(y.error, y.status);
							return void a(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await s.e("gildActions").then(s.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(f()), a(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: r,
								awarder_karma_received: n,
								coins: o,
								treatment_tags: c
							} = y.body;
							return void a(t({
								awardKarmaReceived: n || 0,
								awardId: O,
								awardings: r && r.length ? Object(u.a)(r).map(e => ({
									award: Object(m.h)(e),
									total: e.count
								})) : [],
								coins: o,
								id: e,
								treatmentTags: c
							}))
						}
					} catch (O) {
						const e = Object(n.a)(O);
						a(Object(i.stripeApiError)(e))
					} else a(Object(i.stripeApiError)(r.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, O = (e, t, s) => async (r, a, {
					apiContext: d
				}) => {
					const u = Object(l.c)(l.a.GoldPayment);
					try {
						const a = await Object(c.b)({
							context: d(),
							awardId: e,
							pennies: t,
							thingId: s,
							correlationId: u
						});
						if (a.error) {
							const e = Object(n.a)(a.error);
							return void r(Object(i.paypalApiError)(e))
						} {
							const {
								order_id: e
							} = a.body;
							return e
						}
					} catch (m) {
						o.c.captureException(m);
						const e = Object(n.a)(m);
						r(Object(i.paypalApiError)(e))
					}
				}, j = e => async (t, a, {
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
							const e = Object(n.a)(w.error);
							t(Object(i.paypalApiError)(e))
						} else {
							t(f());
							const {
								all_awardings: e,
								awarder_karma_received: r,
								coins: n,
								subreddit_coins: o,
								treatment_tags: c
							} = w.body;
							t(Object(i.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await s.e("gildActions").then(s.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(d({
								awardKarmaReceived: r || 0,
								awardId: g,
								awardings: Object(u.a)(e).map(e => ({
									award: Object(m.h)(e),
									total: e.count
								})),
								coins: n,
								id: a,
								subredditCoins: o,
								treatmentTags: c
							}))
						}
					} catch (h) {
						o.c.captureException(h);
						const e = Object(n.a)(h);
						t(Object(i.paypalApiError)(e))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "a", (function() {
				return v
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/env/index.ts"),
				a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/lib/sentry/index.ts"),
				i = s("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(a.a)(m.j),
				b = Object(a.a)(m.k),
				h = Object(a.a)(m.i),
				f = e => async (t, s, {
					apiContext: a
				}) => {
					t(p());
					const d = s(),
						l = Object(c.K)(d);
					try {
						const s = !l,
							r = await Object(i.b)({
								context: a(),
								correlationId: e,
								shouldUseCurrentOrigin: s
							});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const n = r.body;
						t(b(n))
					} catch (u) {
						Object(n.b)() || console.error(u), o.c.captureException(u);
						const e = r.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(h(e))
					}
				}, g = Object(a.a)(m.m), w = Object(a.a)(m.n), x = Object(a.a)(m.l), O = (e, t) => async (s, a, {
					apiContext: c
				}) => {
					s(g());
					try {
						const r = await Object(i.c)({
							awardId: e,
							context: c(),
							correlationId: t
						});
						if (!r.ok) throw new Error(r.error && r.error.type || "Unknown error");
						const n = r.body;
						if (!n.coinPackages || !n.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						s(w(n))
					} catch (d) {
						Object(n.b)() || console.error(d), o.c.captureException(d);
						const e = r.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						s(x(e))
					}
				}, j = Object(a.a)(m.h), v = () => async (e, t, {
					gqlContext: s
				}) => {
					var a, c;
					try {
						const t = await Object(i.a)(s());
						if (t.ok) {
							const s = t.body.data.claimAwardOffer;
							if (null === (a = s.errors) || void 0 === a ? void 0 : a.length) throw new Error(s.errors.map(e => e.message).join(" | "));
							if (!(null === (c = s.awards) || void 0 === c ? void 0 : c.length)) throw new Error("Got empty award list on free award offer claim");
							if (!s.ok) throw new Error("Got not ok response on free award offer claim");
							await e(j({
								awards: s.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(n.b)() || console.error(m), e(Object(d.f)({
							kind: l.b.Error,
							text: r.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), o.c.captureException(m)
					}
				}
		},
		"./src/reddit/components/Econ/CoinsModalHeader/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/GildModalContent/index.m.less": function(e, t, s) {
			e.exports = {
				gildModalContent: "_13s1q9tBn7qddM-UPVtpnC",
				modalMainContent: "_1-n44O8_Kquo1Wl43y39VQ"
			}
		},
		"./src/reddit/components/GildModalContent/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./node_modules/fbt/lib/FbtPublic.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/helpers/isPost.ts");
			var u = (e, t) => {
					return Object(l.a)(t.id) ? e.filter(e => !(e => e.some(e => e.startsWith("econ:transferable:econ:render:")))(e.award.tags || [])) : e
				},
				m = s("./src/reddit/helpers/correlationIdTracker.ts"),
				p = s("./src/reddit/helpers/localStorage/index.ts"),
				b = s("./src/reddit/helpers/trackers/gild.ts"),
				h = s("./src/reddit/models/Gold/Award.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/models/Toast/index.ts"),
				w = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				x = s("./src/reddit/actions/gold/econPurchase.ts"),
				O = s("./src/reddit/actions/gold/gild.ts"),
				j = s("./src/reddit/actions/gold/giveAward.ts"),
				v = s("./src/reddit/actions/gold/modals.ts"),
				y = s("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				E = s("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				I = s("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				_ = s("./src/reddit/actions/subreddit.ts"),
				C = s("./src/reddit/actions/toaster.ts"),
				k = s("./src/reddit/selectors/commentSelector.ts"),
				P = s("./src/reddit/selectors/communityAwards.ts"),
				N = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				A = s("./src/reddit/selectors/gild.ts"),
				S = s("./src/reddit/selectors/gold/awardIcon.ts"),
				T = s("./src/reddit/selectors/gold/econPurchase.ts"),
				L = s("./src/reddit/selectors/gold/giveAwards.ts"),
				M = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				B = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				R = s("./src/reddit/selectors/posts.ts"),
				D = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				G = s("./src/reddit/selectors/subreddit.ts"),
				F = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/CoinPurchaseModal/async.tsx"),
				H = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/makeAsync.tsx")),
				W = s("./src/lib/loadWithRetries/index.ts"),
				V = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const q = () => Object(W.a)(() => Promise.all([Promise.all([s.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal"), s.e("PennyPurchaseModal")]).then(s.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(V.d)().catch(() => {})])).then(e => e[0].default);
			var J = Object(H.a)({
					getComponent: q,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				K = s("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				Y = s.n(K),
				X = s("./src/reddit/helpers/awards/message.ts"),
				Q = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				Z = s("./src/reddit/controls/CheckboxWithLabel/index.tsx"),
				$ = s("./src/reddit/icons/svgs/Eye/index.tsx"),
				ee = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				te = s("./src/reddit/icons/svgs/CoinV2/index.tsx"),
				se = s("./src/reddit/components/TimeLeft/TimeLeft.tsx"),
				re = s("./src/reddit/icons/fonts/Coin/index.tsx");
			const ne = e => {
				const {
					award: t
				} = e;
				if (t.description) {
					const e = t.description.split("%{coin_symbol}");
					return n.a.createElement(n.a.Fragment, null, e.map((e, t) => 0 === t ? e : n.a.createElement(n.a.Fragment, {
						key: t + e
					}, n.a.createElement(re.a, null), e)))
				}
				return null
			};
			class ae extends n.a.PureComponent {
				render() {
					const {
						award: e,
						awardIcon: t,
						className: s
					} = this.props, r = !!e.pennyPrice;
					return n.a.createElement("div", {
						className: Object(c.a)(s, Y.a.awardDescriptionContainer)
					}, n.a.createElement("div", {
						className: Y.a.iconContainer
					}, n.a.createElement("img", {
						className: Y.a.icon,
						src: t
					})), n.a.createElement("div", {
						className: Y.a.awardName
					}, i.fbt._("{awardName} Award", [i.fbt._param("awardName", e.name)], {
						hk: "2pgSo6"
					})), n.a.createElement("div", {
						className: Y.a.benefits
					}, n.a.createElement(ne, {
						award: e
					})), n.a.createElement("div", {
						className: Y.a.price
					}, r ? i.fbt._("Purchase for ${dollarPrice}", [i.fbt._param("dollarPrice", (e.pennyPrice / 100).toLocaleString())], {
						hk: "229G45"
					}) : e.coinPrice > 0 ? n.a.createElement(n.a.Fragment, null, n.a.createElement(te.a, {
						className: Y.a.coinIcon
					}), i.fbt._("{coinPrice}", [i.fbt._param("coinPrice", e.coinPrice.toLocaleString())], {
						hk: "3MZDc4"
					})) : i.fbt._("Free", null, {
						hk: "EW8V2"
					})), e.endsAt && n.a.createElement(se.a, {
						className: Y.a.expiresText,
						expirationDate: new Date(e.endsAt)
					}))
				}
			}
			var oe = ae,
				ie = s("./src/reddit/controls/Button/index.tsx"),
				ce = s("./src/reddit/controls/LoadingIcon/index.tsx");
			const {
				fbt: de
			} = s("./node_modules/fbt/lib/FbtPublic.js"), le = 10;
			class ue extends n.a.PureComponent {
				renderButtonText() {
					const {
						needPayment: e,
						needPremium: t,
						selectedAward: s
					} = this.props, r = s.awardType === h.f.Moderator;
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
						onGetPremium: s,
						onGild: r,
						onNeedPayment: a,
						pending: o,
						selectedAward: i
					} = this.props, d = i.awardType === h.f.Moderator;
					return n.a.createElement(ie.k, {
						className: Object(c.a)(Y.a.gildButton, {
							[Y.a.premiumButton]: t
						}),
						"data-redditstyle": !0,
						disabled: o || d && e,
						onClick: t ? s : e ? a : r
					}, o ? n.a.createElement(ce.a, {
						className: Y.a.loadingIcon,
						sizePx: le
					}) : this.renderButtonText())
				}
			}
			var me = ue;

			function pe() {
				return (pe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			class be extends n.a.PureComponent {
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
							thingId: s,
							toggleIsAnonymous: r
						} = this.props;
						t(Object(b.triggerAnonymousEvent)(e ? "uncheck" : "check", s)), r()
					}
				}
				renderPrivacyToggle() {
					const {
						forcePublic: e,
						isAnonymous: t
					} = this.props;
					return e ? null : n.a.createElement(Z.a, {
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
						message: s
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
						o = a && s.length > r.maxLength;
					return n.a.createElement("div", {
						className: Object(c.a)(Y.a.textAreaWrapper, {
							[Y.a.messageTooLong]: o
						})
					}, n.a.createElement(Q.t, pe({
						className: Y.a.textArea,
						"data-redditstyle": !0,
						name: "message",
						onClick: this.handleClickMessageInput,
						onChange: this.handleTypeMessageInput,
						value: a ? s : ""
					}, r)), a && n.a.createElement("div", {
						className: Y.a.characterCountdown
					}, r.maxLength - s.length))
				}
				renderPublicIndicator() {
					const {
						forcePublic: e
					} = this.props;
					return e ? n.a.createElement("div", {
						className: Y.a.publicIndicator
					}, n.a.createElement($.a, {
						className: Y.a.eyeIcon
					}), i.fbt._("Shows my username", null, {
						hk: "1HsXbA"
					})) : null
				}
				renderGildButton() {
					return n.a.createElement("div", {
						className: Y.a.gildButtonWrapper
					}, n.a.createElement(me, this.props.gildButtonProps))
				}
				renderCommunityCoinBalance() {
					if (this.props.selectedAward.awardType !== h.f.Moderator) return null;
					const {
						subredditName: e,
						subredditCoins: t
					} = this.props, s = i.fbt._("r/{subredditName} balance: {coinBalance}", [i.fbt._param("subredditName", e), i.fbt._param("coinBalance", t ? t.toLocaleString() : "0")], {
						hk: "1G3rBQ"
					});
					return n.a.createElement("div", {
						className: Y.a.subredditCoinBalance
					}, s)
				}
				render() {
					const {
						className: e,
						selectedAward: t,
						selectedAwardIcon: s,
						hideTextArea: r
					} = this.props;
					return n.a.createElement("div", {
						className: Object(c.a)(e, Y.a.awardDetailsPane)
					}, n.a.createElement("div", {
						className: Y.a.awardDescriptionWrapper
					}, n.a.createElement("div", {
						className: Y.a.spacerTop
					}), n.a.createElement(oe, {
						award: t,
						awardIcon: s
					}), n.a.createElement("div", {
						className: Y.a.spacerBottom
					}), t.awardType === h.f.Moderator ? n.a.createElement("span", {
						className: Y.a.giver
					}, n.a.createElement(ee.a, {
						className: Y.a.modIcon
					}), i.fbt._("Given by a Moderator", null, {
						hk: "2k1UCp"
					})) : this.renderPrivacyToggle(), !r && this.renderTextArea(), this.renderPublicIndicator(), this.renderCommunityCoinBalance()), this.renderGildButton())
				}
			}
			var he = be,
				fe = s("./src/reddit/components/GildModalContent/AwardSelectorPane/index.m.less"),
				ge = s.n(fe);
			const we = n.a.memo((function(e) {
				let t = "",
					s = "";
				return e.post && e.post.isRPANBroadcast && e.post.isFeedTheMeterEnabled && (t = i.fbt._("Give your favorite broadcasts more airtime with awards!", null, {
					hk: "1bDI3E"
				}), s = ge.a.rpanBanner), t ? n.a.createElement("div", {
					className: Object(c.a)(ge.a.banner, s)
				}, t) : null
			}));
			var xe = Object(a.b)((e, t) => {
					if (Object(l.a)(t.thingId)) {
						const s = Object(R.H)(e, {
							postId: t.thingId
						});
						if (!s) return {};
						const r = !!s.media && "rpan" === s.media.type,
							n = r && Object(N.g)(e, t.thingId, D.l);
						return {
							post: {
								...s,
								isRPANBroadcast: r,
								isFeedTheMeterEnabled: n
							}
						}
					}
					return {}
				})(we),
				Oe = s("./src/reddit/components/RichTextJson/index.tsx"),
				je = s("./src/reddit/icons/svgs/Advance/index.tsx");
			class ve extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						horizontalOffset: 0,
						rightScrollVisible: !1
					}, this.carouselRef = n.a.createRef(), this.optionsRef = n.a.createRef()
				}
				scrollLeft() {
					this.props.sendEvent(Object(b.clickPreviousFiltersEvent)());
					const e = this.optionsRef.current,
						t = this.carouselRef.current.clientWidth;
					let s = this.state.horizontalOffset + t;
					if (s > 0) return void this.setState({
						horizontalOffset: 0,
						rightScrollVisible: !0
					});
					for (const n of e.childNodes) {
						const e = n;
						if (e.offsetLeft + s + e.scrollWidth > 0) {
							s = -1 * e.offsetLeft;
							break
						}
					}
					const r = e.scrollWidth > s + t;
					this.setState({
						horizontalOffset: s,
						rightScrollVisible: r
					})
				}
				scrollRight() {
					this.props.sendEvent(Object(b.clickNextFiltersEvent)());
					const e = this.optionsRef.current,
						t = this.carouselRef.current.clientWidth;
					let s = null;
					for (const n of e.childNodes) {
						const r = n,
							a = r.offsetLeft + e.offsetLeft,
							o = a + r.scrollWidth;
						if (a >= t || a < t && o > t) {
							s = r;
							break
						}
					}
					if (!s) return;
					const r = e.scrollWidth > s.offsetLeft + t;
					this.setState({
						horizontalOffset: -1 * s.offsetLeft,
						rightScrollVisible: r
					})
				}
				scrollSnap(e) {
					const t = this.optionsRef.current,
						s = this.carouselRef.current.clientWidth,
						r = t.childNodes[e],
						n = r.offsetLeft + t.offsetLeft,
						a = n + r.scrollWidth;
					if (n < 40 || a > s - 40) {
						const n = e ? -1 * r.offsetLeft + 40 : 0,
							a = t.scrollWidth + n > s;
						this.setState({
							horizontalOffset: n,
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
					return n.a.createElement("div", {
						className: ge.a.filterCarousel,
						ref: this.carouselRef
					}, this.state.horizontalOffset < 0 && n.a.createElement("div", {
						className: Object(c.a)(ge.a.carouselButtonWrapper, ge.a.carouselButtonWrapperLeft)
					}, n.a.createElement("button", {
						className: ge.a.carouselButton,
						onClick: () => this.scrollLeft()
					}, n.a.createElement("div", {
						className: ge.a.carouselButtonIcon,
						tabIndex: -1
					}, n.a.createElement(je.a, {
						className: ge.a.advanceLeft
					})))), n.a.createElement("div", {
						className: ge.a.pillOptionsContainer,
						ref: this.optionsRef,
						style: {
							left: this.state.horizontalOffset
						}
					}, e.map((e, s) => n.a.createElement("button", {
						key: e.tag,
						className: ge.a.pillOptionWrapper,
						onClick: () => this.handleTagClick(e.tag, s)
					}, n.a.createElement("div", {
						className: ge.a.focusElement,
						tabIndex: -1
					}, n.a.createElement(Oe.a, {
						className: Object(c.a)(ge.a.pillOption, {
							[ge.a.selectedPillOption]: t === e.tag
						}),
						content: e.content.richtext,
						rtJsonElementProps: {},
						useExplicitTextColor: !0
					}))))), this.state.rightScrollVisible && n.a.createElement("div", {
						className: Object(c.a)(ge.a.carouselButtonWrapper, ge.a.carouselButtonWrapperRight)
					}, n.a.createElement("button", {
						className: ge.a.carouselButton,
						onClick: () => this.scrollRight()
					}, n.a.createElement("div", {
						className: ge.a.carouselButtonIcon,
						tabIndex: -1
					}, n.a.createElement(je.a, null)))))
				}
			}
			var ye = ve,
				Ee = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				Ie = s("./src/reddit/icons/svgs/New/index.tsx"),
				_e = s("./src/reddit/icons/svgs/Premium/index.tsx");
			var Ce = e => n.a.createElement("svg", {
				width: "20",
				height: "20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("defs", null, n.a.createElement("linearGradient", {
				x1: "100%",
				y1: "50%",
				x2: "0%",
				y2: "50%",
				id: "a"
			}, n.a.createElement("stop", {
				stopColor: "#FF81ED",
				offset: "0%"
			}), n.a.createElement("stop", {
				stopColor: "#B279FF",
				offset: "32.949%"
			}), n.a.createElement("stop", {
				stopColor: "#7785FF",
				offset: "54.901%"
			}), n.a.createElement("stop", {
				stopColor: "#53B6FF",
				offset: "100%"
			}))), n.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, n.a.createElement("path", {
				d: "M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0z",
				fill: "url(#a)"
			}), n.a.createElement("path", {
				d: "M10 1.861a8.139 8.139 0 110 16.278 8.139 8.139 0 010-16.278z",
				opacity: ".105"
			}), n.a.createElement("path", {
				d: "M12.45 2.32c0 3.97 1.844 7.26 4.256 7.852-2.412.59-4.257 3.88-4.257 7.85v.088a3.248 3.248 0 01-.043-.003v-.086c0-3.97-1.845-7.26-4.256-7.851 2.411-.59 4.256-3.88 4.256-7.85v-.084l.044-.004v.089zM7.312 11.815c0 1.434 1.246 2.62 2.87 2.825-1.624.202-2.87 1.388-2.87 2.822l.001.029-.024-.001.002-.028c0-1.434-1.247-2.62-2.872-2.825 1.625-.201 2.872-1.388 2.872-2.822l-.002-.028h.023v.028zM5.65 4.287c0 1.074.82 1.966 1.894 2.14C6.47 6.6 5.651 7.491 5.651 8.565v.03l-.044-.002.001-.028c0-1.074-.819-1.966-1.894-2.14C4.79 6.253 5.608 5.36 5.608 4.287l-.001-.028.044-.002v.03z",
				fill: "#FFF"
			})));
			const ke = n.a.memo(e => {
				let t, s;
				const r = !!e.award.tags && e.award.tags.some(e => e.includes("econ:render:lottie:"));
				if (e.award.awardSubType === h.d.Moderator) t = ee.a, s = ge.a.moderatorIcon;
				else if (e.award.awardSubType === h.d.Premium) t = e.premiumUser ? _e.a : Ee.a, s = e.premiumUser ? ge.a.premiumIcon : ge.a.lockIcon;
				else if (r) t = Ce, s = ge.a.transferableIcon;
				else {
					if (!e.award.isNew) return null;
					t = Ie.a, s = ge.a.newIcon
				}
				return n.a.createElement("div", {
					className: Object(c.a)(ge.a.iconBadgeContainer, s)
				}, n.a.createElement(t, {
					className: ge.a.iconBadge
				}))
			});
			var Pe = n.a.memo(e => {
				const {
					award: t,
					awardIcon: s,
					isSelected: r,
					premiumUser: a,
					onSelect: o
				} = e;
				return n.a.createElement("button", {
					className: Object(c.a)(ge.a.selectableAward, {
						[ge.a.selected]: r
					}),
					onClick: () => o(t)
				}, n.a.createElement("div", {
					className: ge.a.buttonContent,
					tabIndex: -1
				}, n.a.createElement("div", {
					className: ge.a.iconContainer
				}, n.a.createElement("img", {
					className: ge.a.icon,
					src: s
				}), n.a.createElement("div", {
					className: ge.a.badgeContainer
				}, n.a.createElement(ke, {
					award: t,
					premiumUser: a
				}))), n.a.createElement("div", {
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
				Ae = {
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
			var Te = n.a.memo(e => {
					const {
						awardIcons: t,
						awardTotals: s,
						awardsPending: a,
						onSelect: o,
						premiumUser: i,
						selectedAward: d,
						sendEvent: l,
						tags: u,
						thingId: m
					} = e, [p, h] = Object(r.useState)({}), [f, g] = Object(r.useState)(Se(Ae)), [w, x] = Object(r.useState)(Ae.tag);
					Object(r.useEffect)(() => {
						const e = {},
							t = Se(Ae);
						s.forEach(s => {
							e[s.award.id] = s, t[Ae.tag].push(s.award.id);
							const r = s.award.tags;
							r && r.forEach(e => {
								void 0 === t[e] && (t[e] = []), t[e].push(s.award.id)
							})
						}), h(e), g(t)
					}, [s]);
					const O = [Ae, ...u.filter(e => f[e.tag])],
						j = f[w],
						[v, y] = Object(r.useState)(!1),
						[E, I] = Object(r.useState)(1),
						_ = Object(r.useCallback)(e => {
							if (null !== e) {
								const t = e.clientWidth,
									{
										colWidth: s,
										colGutter: r
									} = Ne,
									n = t > (s + r) * (j.length - 1) + s + s + r;
								if (y(n), n) I(j.length);
								else {
									const e = Math.floor((t - s) / (s + r) + 1);
									I(e)
								}
							}
						}, [j]);
					if (a || !s.length) return n.a.createElement("div", {
						className: ge.a.awardSelectorPane
					});
					const C = e => {
						o(e);
						const t = O.find(e => e.tag === w) || Ae,
							s = j.findIndex(t => t === e.id),
							r = Math.floor(s / E),
							n = s - r * E;
						l(Object(b.clickSelectAwardEvent)(e, m, {
							awardColPosition: n + 1,
							awardRowPosition: r + 1,
							filterId: w,
							filterName: t.content.markdown
						}))
					};
					return n.a.createElement("div", {
						className: ge.a.awardSelectorPane
					}, n.a.createElement(xe, {
						thingId: e.thingId
					}), n.a.createElement(ye, {
						tags: O,
						selectedTag: w,
						sendEvent: l,
						onSelectTag: x
					}), n.a.createElement("div", {
						className: ge.a.awardSectionScrollWrapper
					}, n.a.createElement("div", {
						className: ge.a.awardSectionContainer
					}, n.a.createElement("div", {
						className: Object(c.a)(ge.a.awardSection, {
							[ge.a.singleRowGrid]: v
						}),
						ref: _
					}, j.map(e => {
						const s = p[e].award,
							r = e === d.id,
							a = t[e];
						return n.a.createElement(Pe, {
							award: s,
							awardIcon: a,
							awardCount: p[e].total,
							isSelected: r,
							key: s.id,
							premiumUser: i,
							onSelect: C,
							thingId: m
						})
					})))))
				}),
				Le = s("./src/lib/localizeCurrency/index.ts"),
				Me = s("./src/reddit/components/Econ/CoinsModalHeader/index.m.less"),
				Be = s.n(Me),
				Re = s("./src/reddit/hooks/useLocale.ts"),
				De = s("./src/reddit/icons/svgs/Plus/index.tsx");
			const {
				fbt: Ge
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Fe({
				onAddCoins: e,
				onCancel: t,
				title: s,
				userCoins: r
			}) {
				const a = Object(Re.a)();
				return n.a.createElement("div", {
					className: Be.a.gildHeader
				}, n.a.createElement("button", {
					className: Be.a.closeBtn,
					onClick: t
				}, n.a.createElement(Q.b, {
					className: Be.a.closeBtnIcon
				})), n.a.createElement("div", {
					className: Be.a.headerText
				}, s), n.a.createElement("button", {
					className: Be.a.coinButton,
					onClick: e
				}, n.a.createElement("div", {
					className: Be.a.coinBalanceIndicator,
					tabIndex: -1
				}, n.a.createElement(te.a, {
					className: Be.a.coinIcon
				}), n.a.createElement("div", {
					className: Be.a.coinBalance
				}, Object(Le.a)(r || 0, {
					locale: a
				}))), n.a.createElement("div", {
					className: Be.a.addCoins,
					tabIndex: -1
				}, n.a.createElement(De.a, {
					className: Be.a.plusIcon
				}))))
			}
			const {
				fbt: Ue
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var He = ({
				onCancel: e,
				onAddCoins: t,
				userCoins: s
			}) => n.a.createElement(Fe, {
				onCancel: e,
				onAddCoins: t,
				title: Ue._("Awards", null, {
					hk: "3w1C6X"
				}),
				userCoins: s
			});
			const We = (e, t) => e.length > h.l.length && !e.find(e => e.award.id === t.id);
			var Ve = s("./src/reddit/components/GildModalContent/index.m.less"),
				qe = s.n(Ve);
			const Je = (e, {
					thingId: t,
					subredditId: s
				}) => {
					let r = s;
					if (!s) {
						const s = Object(G.G)(e, {
							thingId: t
						});
						r = s && s.id
					}
					if (!r && Object(l.a)(t)) {
						const s = Object(R.H)(e, {
							postId: t
						});
						r = s && s.belongsTo.id
					}
					return r
				},
				ze = Object(o.a)(Object(o.c)({
					awardings: (e, {
						thingId: t,
						subredditId: s
					}) => {
						const r = Je(e, {
							thingId: t,
							subredditId: s
						});
						return r ? Object(P.h)(e, {
							subredditId: r,
							thingId: t
						}) : []
					},
					awardIcons: (e, {
						thingId: t,
						subredditId: s
					}) => {
						const r = Je(e, {
								thingId: t,
								subredditId: s
							}),
							n = (r ? Object(P.h)(e, {
								subredditId: r,
								thingId: t
							}) : []).map(e => e.award);
						return Object(S.b)(e, {
							awards: n,
							minSize: 128,
							postOrCommentId: t
						})
					},
					awardingsPending: (e, {
						thingId: t,
						subredditId: s
					}) => {
						let r = s;
						if (!s) {
							const s = Object(G.G)(e, {
								thingId: t
							});
							if (!s) return !1;
							r = s.id
						}
						return Object(P.g)(e, {
							subredditId: r,
							thingId: t
						})
					},
					correlationId: e => Object(A.b)(e) || Object(m.d)(m.a.GildingFlow, !1),
					currentUser: F.k,
					errorMessage: A.a,
					isAnonymous: A.f,
					iFramed: A.g,
					isGildPending: A.e,
					isEmployee: F.H,
					isRecommendedCoinPackagePending: M.m,
					message: A.c,
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
					purchaseCatalogPending: M.l,
					showPurchaseModal: B.u,
					selectedAward: L.b,
					subreddit: G.G,
					subredditCoins: (e, {
						thingId: t,
						subredditId: s
					}) => {
						const r = Object(G.G)(e, {
								thingId: t
							}),
							n = r ? r.id : s;
						return Object(G.x)(e, {
							subredditId: n
						})
					},
					tags: (e, {
						thingId: t,
						subredditId: s
					}) => {
						let r = s;
						if (!s) {
							const s = Object(G.G)(e, {
								thingId: t
							});
							r = s && s.id
						}
						if (!r && Object(l.a)(t)) {
							const s = Object(R.H)(e, {
								postId: t
							});
							r = s && s.belongsTo.id
						}
						return r ? Object(P.i)(e, {
							subredditId: r
						}) : []
					},
					userCoins: (e, t) => {
						const s = Object(F.e)(e),
							r = Je(e, t);
						return s + Object(T.a)(e, {
							subredditId: r
						})
					},
					inViewerFeedTheMeter: (e, {
						thingId: t
					}) => Object(N.g)(e, t, D.l)
				}), e => {
					const {
						awardings: t,
						isEmployee: s,
						postOrComment: r,
						selectedAward: n,
						subredditCoins: a,
						userCoins: o,
						isChatDisabled: i
					} = e, {
						awardType: c,
						coinPrice: d,
						pennyPrice: l
					} = n, m = c === h.f.Moderator, p = !!l || ((m ? a : o) || 0) < d && !(s && !m), b = r && r.media && "rpan" === r.media.type, f = r ? u(t, r) : t;
					return {
						...e,
						awardings: f,
						needPayment: p,
						cost: l || d,
						isRpanPost: !!b,
						isChatDisabled: !!b && i
					}
				});
			class Ke extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						showPurchaseModalInThisInstance: !1
					}, this.handleEscapeKey = e => {
						const {
							closeGildModal: t,
							showPurchaseModal: s
						} = this.props;
						if (27 === e.keyCode && !s) return t()
					}, this.toggleIsAnonymous = () => {
						const {
							isAnonymous: e,
							setIsAnonymous: t
						} = this.props;
						t(!e)
					}, this.handleMessageInput = e => {
						this.props.updateMessage(e.target.value)
					}, this.onClickAddCoins = () => {
						const {
							sendEvent: e,
							thingId: t
						} = this.props;
						e(Object(b.clickAddCoinsButtonEvent)(t)), window.open("/coins", "_blank")
					}, this.onNeedPayment = () => {
						const {
							cost: e,
							correlationId: t,
							needPaymentRequested: s,
							selectedAward: r,
							sendEvent: n,
							thingId: a
						} = this.props;
						n(Object(b.clickNextButtonEvent)(a)), s({
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
							thingId: s
						} = this.props;
						t(Object(b.clickGetPremiumEvent)(s, e)), window.open("/premium", d.d.BLANK, d.c)
					}, this.onGildRequested = () => {
						const {
							gildRequested: e,
							iFramed: t,
							isLivestream: s,
							selectedAward: r,
							sendEvent: n,
							thingId: a
						} = this.props;
						return n(Object(b.clickConfirmAwardEvent)(a, r)), e(t, !!s)
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
						correlationId: s,
						isAnonymous: r,
						isRpanPost: n,
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
						subredditLockedCoinsRequested: j,
						subredditName: v,
						thingId: y,
						displayUnusableAwardError: E
					} = this.props;
					s || Object(m.d)(m.a.GildingFlow, !1), u(Object(b.viewGildModalEvent)(l.id, r, y)), g(!n && Object(p.q)());
					const I = w ? w.id : O || (o && o.belongsTo ? o.belongsTo.id : void 0);
					if (I && t(I), We(e, l) && (E(), d(h.n)), w || v) {
						x(w ? w.name : v)
					}
					w && w.type !== f.f.User && j(w.id, w.name), a && (l.pennyPrice ? q() : Object(U.a)(), i || c(s))
				}
				componentDidUpdate(e) {
					e.awardingsPending && !this.props.awardingsPending && We(this.props.awardings, this.props.selectedAward) && (this.props.displayUnusableAwardError(), this.props.selectAward(h.n))
				}
				render() {
					const {
						awardings: e,
						awardIcons: t,
						awardingsPending: s,
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
						subredditName: j,
						tags: v,
						thingId: y,
						userCoins: E,
						isChatDisabled: I
					} = this.props, {
						showPurchaseModalInThisInstance: _
					} = this.state, C = w && _, k = C && !f.pennyPrice, P = C && !!f.pennyPrice, N = (k || P) && !d;
					if (k && N) return null;
					if (P && N) return n.a.createElement(J, null);
					const A = x ? x.name : j,
						S = !(!o || !o.isGold),
						T = {
							needPayment: b,
							needPremium: !S && f.awardSubType === h.d.Premium,
							onNeedPayment: this.onNeedPayment,
							onGetPremium: this.onGetPremium,
							onGild: this.onGildRequested,
							pending: l || u,
							selectedAward: f,
							thingId: y
						};
					return n.a.createElement("div", {
						className: Object(c.a)(r, qe.a.gildModalContent)
					}, n.a.createElement(He, {
						onCancel: a,
						onAddCoins: this.onClickAddCoins,
						userCoins: E
					}), n.a.createElement("div", {
						className: qe.a.modalMainContent
					}, n.a.createElement(Te, {
						awardIcons: t,
						awardTotals: e,
						awardsPending: s,
						premiumUser: S,
						onSelect: this.props.selectAward,
						selectedAward: f,
						sendEvent: g,
						tags: v,
						thingId: y
					}), n.a.createElement(he, {
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
						subredditName: A,
						subredditCoins: O
					})), P && n.a.createElement(J, null))
				}
			}
			t.a = Object(a.b)(ze, (e, {
				author: t,
				profileId: s,
				thingId: r
			}) => ({
				awardsAndTagsRequested: n => e(Object(w.a)(n, r, s && t)),
				closeGildModal: () => e(Object(v.a)()),
				gildRequested: (t, s) => e(Object(O.gildGqlRequested)(r, {
					isOldReddit: t,
					isLivestream: s
				})),
				needPaymentRequested: ({
					awardId: t,
					correlationId: s,
					cost: r,
					isPennyPurchase: n,
					thingId: a
				}) => {
					e(n ? Object(E.b)(r, a, s) : Object(y.d)(t, a, s))
				},
				purchaseCatalogRequested: t => e(Object(I.b)(t)),
				selectAward: t => e(Object(j.a)(t)),
				displayUnusableAwardError: () => e(Object(C.f)({
					kind: g.b.Error,
					duration: C.a,
					text: i.fbt._("This award is not available on this content.", null, {
						hk: "13VV1D"
					})
				})),
				setIsAnonymous: t => {
					e(Object(O.setIsAnonymous)(t)), Object(p.vb)(t)
				},
				subredditAboutRequested: t => e(Object(_.u)(t)),
				subredditLockedCoinsRequested: (t, s) => e(Object(x.a)(t, s)),
				updateMessage: t => e(Object(O.updateMessage)(t))
			}))(Object(z.c)(Ke))
		},
		"./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less": function(e, t, s) {
			e.exports = {
				karmaLink: "_33-F8KNeBDS4RS9mUMQdxH"
			}
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/featureFlags/component.tsx");
			const a = Object(r.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				o = Object(n.a)("spBurnLinks", Object(r.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("CryptoVault").then(s.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(a.b)(() => Object(o.c)({
					isNightmodeOn: m.X
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					s = e.isResponsive ? Object(i.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					r = {
						overflow: "hidden"
					};
				return r.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (r.margin = "0 auto"), e.isListing || (r.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (r.maxHeight = e.maxHeight || void 0), n.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: s,
					style: r,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3Oa0THmZ3f5iZXAQ0hBJ0k",
				image: "_2_tDEnGMLxpM6uOa2kaDB3",
				mShowCentered: "_1XWObl-3b9tPy64oaG6fax",
				mShowBlurred: "_3oBPn1sFwq76ZAxXgwRhhn",
				seeMore: "_3hUbl08LBz2mbXjy0iYhOS",
				unblurButtonContainer: "c1UAj_LbgdGBuJFlKbnrQ",
				unblurButton: "_2Ws3wFSVPzJhnW46FsoxLv"
			}
		},
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return k
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/PlayButton/index.tsx"),
				b = s("./src/reddit/constants/elementClassNames.ts"),
				h = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/helpers/trackers/ads.ts"),
				g = s("./src/reddit/hooks/useClickSourceData.ts"),
				w = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				O = s("./src/reddit/selectors/posts.ts"),
				j = s("./src/reddit/selectors/telemetry.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/constants/tracking.ts"),
				E = s("./src/reddit/components/Media/blurredContent.ts"),
				I = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				_ = s.n(I);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const k = e => e > 2 * w.e,
				P = e => {
					const t = Object(d.a)(_.a.image, b.g, e.className, {
							[_.a.mShowCentered]: e.showCentered,
							[_.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					return e.showFull || e.isTall || (s.maxHeight = `${w.j}px`), e.isListing || e.isTall && k(e.height) || (s.maxHeight = `${w.e}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`), a.a.createElement("img", {
						alt: e.altText || r.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				N = e => {
					const t = {};
					return (!e.showFull && Object(w.J)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${w.j}px`, e.shouldBlur && (t.maxWidth = Object(w.J)(e.height, e.width) ? `${w.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), a.a.createElement("div", {
						className: Object(d.a)(_.a.container, e.className),
						style: t
					}, e.children)
				},
				A = Object(o.b)(() => Object(c.a)(O.G, v.db, (e, {
					isSponsored: t,
					postId: s
				}) => t && s ? Object(O.b)(e, s) : null, x.a, j.actionInfo, O.H, (e, t, s, r, n, a) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					sendGoodVisitEvent: r,
					pageType: n.pageType,
					post: a
				})));
			t.a = A(e => {
				const t = e.sendGoodVisitEvent ? Object(g.a)() : void 0;
				return e.outboundUrl && !e.shouldBlur ? a.a.createElement("a", {
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(h.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && Object(f.a)(e.post, e.pageType)
					}
				}, T(e)) : e.isListing && e.postPermalink ? a.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink)
				}, T(e)) : T(e)
			});
			const S = (e, t) => a.a.createElement(P, {
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
				T = ({
					onClick: e,
					...t
				}) => {
					const s = Object(w.J)(t.height, t.width),
						n = k(t.height) && s;
					return a.a.createElement(N, C({}, t, {
						className: `${s?`${y.a} `:""}${t.className||""}`
					}), t.isListing ? a.a.createElement("div", {
						className: t.contentImageClassName
					}, S(s, t)) : a.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: n ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c
					}, S(s, t)), t.isListing && !t.showFull && t.height > w.j && Object(w.J)(t.height, t.width) && a.a.createElement("div", {
						className: _.a.seeMore
					}, r.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && a.a.createElement(p.a, {
						onClick: e
					}), t.shouldBlur && !t.isVideoThumbnail && !t.isListing && a.a.createElement("div", {
						className: _.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: _.a.unblurButton
					}, Object(E.a)(!!t.isNSFW, !!t.isSpoiler))))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/forceHttps/index.ts"),
				i = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = s.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < i.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const s = {
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
					r = e.blurSrc ? n.a.createElement("img", {
						className: d.a.blur,
						src: Object(o.a)(e.blurSrc)
					}) : null,
					c = Object(i.B)(e.height, e.width, e.forceAspectRatio);
				return n.a.createElement("div", {
					className: Object(a.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, r, !e.isGalleryTileLayout && n.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), n.a.createElement("div", {
					className: Object(a.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends n.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return n.a.Children.only(this.props.children) || n.a.createElement("div", null)
					}
					return n.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var r = s("./node_modules/lodash/throttle.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/video.ts"),
				u = s("./src/reddit/constants/tracking.ts"),
				m = s("./src/reddit/models/Media/index.ts"),
				p = s("./src/reddit/selectors/user.ts"),
				b = s("./src/reddit/selectors/video.ts");
			const h = 100,
				f = h / 2 / 1e3;
			var g = s("./src/lib/forceHttps/index.ts"),
				w = s("./src/reddit/hooks/usePrevious.ts");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}

			function O({
				autoplay: e,
				isListing: t,
				isNotCardView: s,
				onBufferingChange: r,
				shouldLoad: n,
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
					if (O(!i && (e || s)), p.current && r) return m.current = function(e, t) {
						let s = !1,
							r = !1;
						const n = () => s = !0,
							a = () => r = !0;
						e.addEventListener("loadeddata", n), e.addEventListener("play", a), e.addEventListener("playing", a);
						let o = !1,
							i = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, r) return r = !1, void(i = c);
							if (e.paused || e.seeking || !s) return void(i = c);
							const n = o;
							4 === e.readyState ? o = !1 : !o && c >= i && c < i + f ? o = !0 : o && c >= i && c > i + f && (o = !1), i = c, n !== o && t(o)
						}, h);
						return () => {
							clearInterval(d), e.removeEventListener("playing", a), e.removeEventListener("play", a), e.removeEventListener("loadeddata", n)
						}
					}(p.current, r), () => {
						m.current && m.current()
					}
				}, []), Object(a.useEffect)(() => {
					b !== i && O(!i && (e || s))
				}, [b, i, e, s]), o.a.createElement("video", x({}, u, {
					ref: e => p.current = e,
					muted: !0
				}), o.a.createElement("source", {
					src: Object(g.a)(l || "")
				}))
			}
			var j = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				v = s.n(j);
			const y = Object(c.c)({
				autoplayPref: p.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function E(e) {
				const {
					autoplayPref: t,
					consumed: s,
					loadTimes: r,
					metadata: a,
					started: c
				} = Object(i.e)(t => y(t, e)), {
					postId: p,
					shouldLoad: b,
					source: h,
					height: f,
					isNotCardView: g,
					showFull: w,
					shouldPause: x,
					width: j,
					isListing: E,
					className: I,
					showCentered: _,
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
				const A = n()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && k(Object(l.s)(p))
				}, 200);

				function S(e) {
					e.persist(), A(e)
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
					return _ && (e.margin = "0 auto"), E || (e.maxHeight = `${m.e}px`), o.a.createElement(O, {
						autoplay: t,
						className: Object(d.a)(u.a, v.a.styledVideo),
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
						onTimeUpdate: S,
						shouldLoad: b,
						shouldPause: x,
						showCentered: _,
						showFull: w,
						source: h,
						style: e,
						width: j
					})
				}
				return E ? R() : o.a.createElement("div", {
					className: Object(d.a)(v.a.container, I, {
						[v.a.centered]: _
					})
				}, o.a.createElement("a", {
					href: C,
					target: "_blank",
					rel: "noopener noreferrer"
				}, R()))
			}
		},
		"./src/reddit/components/Media/blurredContent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js");
			const n = (e, t) => e && t ? r.fbt._("Click to see nsfw spoiler", null, {
				hk: "4EdPWu"
			}) : e ? r.fbt._("Click to see nsfw", null, {
				hk: "4CErse"
			}) : t ? r.fbt._("Click to see spoiler", null, {
				hk: "1x3iUE"
			}) : void 0
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, s) {
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
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
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
					...s
				}) => a.a.createElement(w, p({}, s, {
					className: Object(o.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				O = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
			class j extends a.a.Component {
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
			t.a = j
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, s) {
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
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "x", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "h", (function() {
				return m
			})), s.d(t, "k", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "v", (function() {
				return g
			})), s.d(t, "i", (function() {
				return w
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "u", (function() {
				return j
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "m", (function() {
				return E
			})), s.d(t, "n", (function() {
				return I
			})), s.d(t, "t", (function() {
				return _
			})), s.d(t, "p", (function() {
				return C
			})), s.d(t, "o", (function() {
				return k
			})), s.d(t, "q", (function() {
				return P
			})), s.d(t, "s", (function() {
				return N
			})), s.d(t, "r", (function() {
				return A
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "w", (function() {
				return T
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				o = s("./src/reddit/components/RichTextJson/elements.m.less"),
				i = s.n(o),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
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
				j = c.a.span("U", i.a),
				v = e => n.a.createElement("del", e),
				y = c.a.sub("Sub", i.a),
				E = c.a.sup("Sup", i.a),
				I = c.a.table("Table", i.a),
				_ = c.a.tr("Tr", i.a),
				C = c.a.td("Tdl", i.a),
				k = c.a.td("Tdc", i.a),
				P = c.a.td("Tdr", i.a),
				N = c.a.th("Thl", i.a),
				A = c.a.th("Thc", i.a),
				S = (c.a.th("Thr", i.a), c.a.wrapped(e => n.a.createElement(a.b, e), "A", i.a)),
				T = c.a.wrapped(d.a, "A", i.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return y
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "a", (function() {
				return _
			}));
			var r = s("./node_modules/lodash/findLastIndex.js"),
				n = s.n(r),
				a = s("./node_modules/react/index.js"),
				o = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/sentry/index.ts"),
				l = s("./src/reddit/components/Media/blurredContent.ts"),
				u = s("./src/reddit/constants/elementClassNames.ts"),
				m = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/media.tsx"),
				f = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = s("./src/reddit/components/RichTextJson/index.m.less"),
				w = s.n(g);

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = s("./src/lib/lessComponent.tsx").a.div("Container", w.a),
				j = Object(c.a)(({
					flairStyleTemplate: e,
					theme: t,
					...s
				}) => o.a.createElement(O, x({}, s, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...s
						}))
					}
				}))),
				v = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				y = e => n()(e, v),
				E = e => e.findIndex(v),
				I = e => {
					const {
						altText: t,
						className: s,
						content: r,
						isListing: n,
						isNSFW: a,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: g,
						useExplicitTextColor: x,
						shouldBlur: v
					} = e, I = r.document, _ = [], C = e.mediaMetadata || null, k = E(I), P = y(I);
					if (v && !n) return o.a.createElement(O, {
						className: Object(i.a)(u.j, s)
					}, o.a.createElement("div", {
						className: w.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: w.a.unblurButton,
						onClick: d
					}, Object(l.a)(!!a, !!c))));
					if (-1 !== k)
						for (let o = k; o <= P; o++) {
							const e = I[o];
							switch (e.e) {
								case b.k:
									_.push(f.c(e, g, o));
									break;
								case b.l:
									_.push(f.d(o));
									break;
								case b.b:
									_.push(f.a(e, C, g, o));
									break;
								case b.c:
									_.push(f.b(e, o));
									break;
								case b.p:
									_.push(f.f(e, C, g, o));
									break;
								case b.z:
									_.push(f.h(e, C, g, o));
									break;
								case b.u:
									_.push(f.g(e, C, g, o));
									break;
								case b.h:
									_.push(Object(h.a)(e, o));
									break;
								case b.m:
								case b.a:
								case b.D:
									_.push(...Object(h.b)(e, o, C, p, m, t))
							}
						}
					return x ? o.a.createElement(O, {
						className: Object(i.a)(u.j, s)
					}, _) : o.a.createElement(j, {
						className: Object(i.a)(u.j, s),
						flairStyleTemplate: e.flairStyleTemplate
					}, _)
				};
			class _ extends o.a.Component {
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
						return I(t)
					} catch (s) {
						return this.hasError = !0, this.logError(s), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, s) {
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
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			})), s.d(t, "b", (function() {
				return k
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				a = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/config.ts"),
				c = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = s("./src/reddit/helpers/richTextJson/index.ts"),
				b = s("./src/reddit/models/RichTextJson/index.ts"),
				h = s("./src/reddit/components/RichTextJson/elements.tsx"),
				f = s("./src/reddit/components/RichTextJson/media.m.less"),
				g = s.n(f),
				w = s("./src/lib/lessComponent.tsx");

			function x() {
				return (x = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			const O = /\/(\w+)\/asset\/(\w+)\//,
				j = w.a.wrapped(h.a, "A", g.a),
				v = w.a.wrapped(l.a, "ImageBox", g.a),
				y = w.a.wrapped(e => a.a.createElement("p", e), "Caption", g.a),
				E = w.a.div("Placeholder", g.a),
				I = w.a.wrapped(({
					className: e,
					e: t,
					...s
				}) => {
					const n = t === b.D ? r.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : r.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return a.a.createElement(E, x({
						className: e,
						style: {
							"--placeholder-content-text": `'${n}'`
						}
					}, s))
				}, "Placeholder", g.a),
				_ = ({
					c: e,
					x: t,
					y: s
				}, r) => a.a.createElement("div", {
					className: g.a.MediaWrapper
				}, a.a.createElement(u.a, {
					height: s,
					isListing: !1,
					key: r,
					showCentered: !0,
					showFull: !0,
					width: t
				}, a.a.createElement(d.a, {
					isListing: !1,
					source: e,
					height: s,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				C = (e, t, s) => {
					const r = e.c;
					let n = "";
					return s && (s.e === b.s ? n = s.s.u : s.e === b.r ? n = s.s.gif : s.e === b.t && (n = (e => {
						const t = O.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), n ? a.a.createElement(j, {
						href: n,
						key: t,
						title: r
					}, r || n) : null
				},
				k = (e, t, s, r, n, i) => {
					const d = b.E(s, e.id);
					if (r) return [C(e, t, d)];
					const l = [];
					return d ? d.e === b.s ? l.push((({
						id: e,
						s: t
					}, s, r, n) => a.a.createElement("div", {
						className: Object(o.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: r
						})
					}, a.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: s,
						showCentered: !0,
						showFull: !0,
						width: t.x
					}, a.a.createElement(v, {
						altText: n,
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
						s
					}, r, n) => {
						if (Object(p.f)(e)) {
							const i = t || Object(p.e)(e);
							return a.a.createElement("div", {
								className: Object(o.a)(g.a.MediaWrapper, {
									[g.a.mHasCaption]: n
								})
							}, a.a.createElement(j, {
								href: i,
								key: r,
								target: "_blank"
							}, s.mp4 ? a.a.createElement("video", {
								className: g.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, a.a.createElement("source", {
								src: s.mp4
							})) : {
								originalSource: i
							}))
						}
						return a.a.createElement("div", {
							className: Object(o.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: n
							})
						}, a.a.createElement(u.a, {
							height: s.y,
							isListing: !1,
							key: r,
							showCentered: !0,
							showFull: !0,
							width: s.x
						}, a.a.createElement(m.a, {
							height: s.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: s.mp4,
							width: s.x,
							postId: e,
							source: s.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: s,
						y: r,
						isGif: n
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
						width: s
					}, a.a.createElement(c.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: n,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: n
					}))))(d, t, !!e.c, n)) : l.push(((e, t) => a.a.createElement(I, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => a.a.createElement(y, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return S
			})), s.d(t, "d", (function() {
				return T
			})), s.d(t, "a", (function() {
				return L
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "h", (function() {
				return D
			})), s.d(t, "g", (function() {
				return G
			})), s.d(t, "i", (function() {
				return F
			})), s.d(t, "e", (function() {
				return U
			}));
			var r = s("./src/lib/unicodeUtils/index.ts"),
				n = s("./node_modules/lodash/reduce.js"),
				a = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				c = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./node_modules/uuid/v4.js"),
				l = s.n(d),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/models/Product/index.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/higherOrderComponents/makeAsync.tsx");
			var f = Object(h.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				g = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				w = s.n(g);
			const x = 1e3,
				O = 1e3;
			var j;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(j || (j = {}));
			class v extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = j.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = j.Inside, setTimeout(() => {
							this.mouseLocation === j.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, x)
					}, this.onMouseOut = () => {
						this.mouseLocation = j.Outside, setTimeout(() => {
							this.mouseLocation !== j.Inside && this.setState({
								tooltipOpen: !1
							})
						}, O)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = b.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
									reason: this.props.node.id
								},
								subreddit: b.subreddit(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let s, r, n;
					t.e === p.s ? (s = t.s.x, r = t.s.y, n = t.s.u) : t.e === p.r && (s = t.s.x, r = t.s.y, n = t.s.gif);
					const a = this.state.tooltipOpen ? l()() : void 0;
					return n ? i.a.createElement("div", {
						className: w.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, i.a.createElement("img", {
						id: a,
						src: n,
						width: s,
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
			var y = Object(u.c)(v),
				E = s("./src/reddit/components/RichTextJson/media.tsx"),
				I = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				_ = s("./src/reddit/components/SubredditMention/index.tsx"),
				C = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				k = s("./src/reddit/helpers/isComment.ts"),
				P = s("./src/reddit/helpers/isPost.ts"),
				N = s("./src/reddit/helpers/richTextJson/index.ts"),
				A = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const S = (e, t, s) => {
					const r = e.c || [],
						n = e.l,
						a = [],
						o = r.length;
					for (let i = 0; i < o; i++) {
						const e = r[i];
						a.push(e.e === p.w ? e.t : U(e, t, i))
					}
					const d = c.x[n - 1];
					return i.a.createElement(d, {
						key: s
					}, a)
				},
				T = e => i.a.createElement(c.e, {
					key: e
				}),
				L = (e, t, s, r) => {
					const n = e.c;
					if (!n) return;
					const a = n.length,
						o = [];
					for (let i = 0; i < a; i++) o.push(R(n[i], t, s, i));
					return i.a.createElement(c.c, {
						key: r
					}, o)
				},
				M = (e, t) => {
					const s = e.c;
					return i.a.createElement(c.k, {
						key: t
					}, i.a.createElement(c.h, null, s.reduce((e, t, s, r) => e += t.t + (s < r.length ? "\n" : ""), "")))
				},
				B = (e, t, s, r) => {
					const n = e.c,
						a = [],
						o = n.length;
					for (let l = 0; l < o; l++) {
						const e = n[l].c;
						e && e.length && a.push(i.a.createElement(c.g, {
							key: l
						}, e.map((e, r) => R(e, t, s, r))))
					}
					const d = e.o ? c.i : c.v;
					return i.a.createElement(d, {
						key: r
					}, a)
				},
				R = (e, t, s, r) => {
					switch (e.e) {
						case p.b:
							return L(e, t, s, r);
						case p.c:
							return M(e, r);
						case p.k:
							return S(e, s, r);
						case p.l:
							return T(r);
						case p.p:
							return B(e, t, s, r);
						case p.u:
							return G(e, t, s, r);
						case p.z:
							return D(e, t, s, r)
					}
				},
				D = (e, t, s, r) => {
					const n = e.c,
						a = e.h,
						o = n.length,
						d = a.length,
						l = [],
						u = [],
						m = [];
					for (let c = 0; c < d; c++) {
						const e = a[c],
							{
								H: r,
								D: n
							} = q(e.a),
							{
								c: o = []
							} = e;
						l.push(i.a.createElement(r, {
							key: c
						}, F(o, t, s))), m[c] = n
					}
					for (let p = 0; p < o; p++) {
						const e = n[p],
							r = e.length,
							a = [];
						for (let n = 0; n < r; n++) {
							const r = m[n],
								{
									c: o = []
								} = e[n];
							a.push(i.a.createElement(r, {
								key: n
							}, F(o, t, s)))
						}
						u.push(i.a.createElement(c.t, {
							key: p
						}, a))
					}
					return i.a.createElement(c.n, {
						key: r
					}, i.a.createElement("thead", null, i.a.createElement(c.t, null, l)), i.a.createElement("tbody", null, u))
				},
				G = (e, t, s, r) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(c.j, {
						key: e
					}, i.a.createElement("br", null)))(r);
					const n = e.c[0];
					return n.e !== p.m && n.e !== p.a || !Object(N.f)(n.id) ? i.a.createElement(c.j, {
						key: r
					}, F(e.c, t, s)) : Object(E.b)(n, r, t)
				},
				F = (e, t, s) => {
					const r = [],
						n = e.length;
					for (let a = 0; a < n; a++) {
						const n = e[a];
						if (n.e === p.A) r.push(H(n, a));
						else if (n.e === p.x) r.push(i.a.createElement(I.a, {
							key: a
						}, F(n.c, t, s)));
						else if (n.e === p.n) r.push(i.a.createElement("br", {
							key: a
						}));
						else if (n.e === p.m || n.e === p.a) {
							if (n.id.startsWith("emote|")) {
								const e = p.E(t, n.id);
								e && r.push(i.a.createElement(y, {
									key: a,
									node: n,
									media: e
								}))
							}
						} else r.push(U(n, s, a))
					}
					return r
				},
				U = (e, t, s) => {
					switch (e.e) {
						case p.o:
							const r = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(C.b)(e.u)) return i.a.createElement(c.w, {
								to: e.u,
								key: s,
								title: e.a
							}, r);
							let n, a;
							const o = Object(A.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(P.b)(d) && (n = d.postId), d && Object(k.b)(d) && (a = d.id, n = d.postId), i.a.createElement(c.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: o,
								postId: n,
								commentId: a
							}, r);
						case p.y:
							return i.a.createElement(_.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case p.B:
						case p.C:
							return i.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case p.g:
						case p.v:
							return i.a.createElement(c.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: s,
						t: n
					} = e, a = [];
					if (!s) return V(0, n, t);
					const o = Object(r.a)(n);
					let i = 0,
						c = 0;
					const d = s.length;
					for (; i < d; i++) {
						const [e, t, r] = s[i], d = t + r, l = o[t], u = o[d] - l;
						l > c && a.push(V(0, n.substr(c, l - c), `between${i}`)), a.push(V(e, n.substr(l, u), i)), c = l + u
					}
					return c < n.length && a.push(V(0, n.substr(c), `remaining${i}`)), a
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
				V = (e, t, s) => {
					let r = t;
					return r = a()(W, (t, r, n) => e & parseInt(n, 10) ? i.a.createElement(r, {
						key: s
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
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, s) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SubredditIcon/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				c = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = s.n(c);
			const l = a.a.wrapped(o.b, "SubredditIcon", d.a),
				u = a.a.wrapped(e => n.a.createElement(i.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, s) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./src/higherOrderComponents/makeAsync.tsx"),
				d = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent: ({
						subredditName: e
					}) => n.a.createElement("span", {
						className: m.a.subredditMentionContainer
					}, n.a.createElement(l.a, {
						href: `/r/${e}/`
					}, n.a.createElement("span", {
						className: m.a.subredditIconContainer
					}, n.a.createElement(l.b, null)), `r/${e}`))
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = s("./src/reddit/selectors/subredditMention.ts");
			class w extends n.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: s
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: s
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return n.a.createElement(i.a, {
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
				j = Object(a.b)(O),
				v = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: s,
					userVariant: r,
					rtJsonElementProps: a
				}) => {
					if (!t || !e) return n.a.createElement(x, {
						subredditName: s,
						rtJsonElementProps: a
					});
					switch (r) {
						case h.qe.SmIcon:
							return n.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: a
							});
						case h.qe.SmIconHc:
							return n.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return n.a.createElement(x, {
								subredditName: s,
								rtJsonElementProps: a
							})
					}
				};
			t.b = j(v)
		},
		"./src/reddit/components/TimeLeft/TimeLeft.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/components/TimeLeft/index.m.less"),
				o = s.n(a),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/timeAgo/index.ts"),
				d = s("./src/reddit/icons/svgs/Clock/index.tsx");
			t.a = e => {
				const {
					className: t,
					expirationDate: s
				} = e, r = Math.floor(s.getTime() / 1e3), a = Object(c.b)(r);
				return n.a.createElement("div", {
					className: Object(i.a)(t)
				}, n.a.createElement(d.a, {
					className: o.a.clockIcon
				}), n.a.createElement("span", {
					className: o.a.timeLeft
				}, a))
			}
		},
		"./src/reddit/components/TimeLeft/index.m.less": function(e, t, s) {
			e.exports = {
				clockIcon: "_1DDlcC1o7n-afkLICCzCK9",
				timeLeft: "UN0qnXla79aOGiH-PaULH"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, s) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/controls/LoadingIcon/index.m.less"),
				i = s.n(o);
			t.a = ({
				center: e,
				className: t,
				sizePx: s = 10
			}) => n.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${s}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/gold/paypalPurchases.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			}));
			var r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeApiRequest/index.ts"),
				a = s("./src/lib/omitHeaders/index.ts"),
				o = s("./src/reddit/constants/headers.ts"),
				i = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = s("./src/reddit/endpoints/gold/purchase.ts");
			const d = async ({
				buttonId: e,
				context: t,
				correlationId: s
			}) => {
				const d = {
						button_id: e,
						correlation_id: s
					},
					l = `${t.apiUrl}/api/v2/gold/paypal/initiate_premium_payment`,
					u = Object(i.a)(l);
				return Object(n.a)(Object(a.a)(t, [o.a]), {
					method: r.ib.POST,
					endpoint: u,
					data: d
				}).then(c.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: s,
				correlationId: i
			}) => {
				const d = {
					coins: t,
					pennies: s,
					correlation_id: i
				};
				return Object(n.a)(Object(a.a)(e, [o.a]), {
					method: r.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(c.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: s,
				thingId: i,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: s,
					thing_id: i
				};
				return Object(n.a)(Object(a.a)(e, [o.a]), {
					method: r.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(c.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: s,
				coins: i,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: s,
					coins: i,
					pennies: d,
					correlation_id: l
				};
				return Object(n.a)(Object(a.a)(e, [o.a]), {
					method: r.ib.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(c.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: s,
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
					coins: s,
					correlation_id: i,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(n.a)(Object(a.a)(t, [o.a]), {
					method: r.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(c.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: s,
				isAnonymous: i,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: s,
					is_anonymous: i,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(n.a)(Object(a.a)(t, [o.a]), {
					method: r.ib.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(c.c)
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const r = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(a.b)(r)(e => {
					const {
						featureEnabled: r,
						...a
					} = e, o = a;
					return r ? n.a.createElement(t, o) : void 0 !== s ? n.a.createElement(s, o) : null
				})
			}
		},
		"./src/reddit/helpers/awards/getAwardItemId.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			const r = (e, t) => `awardItem__${t}-${e}`
		},
		"./src/reddit/helpers/awards/message.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return o
			}));
			const r = 500,
				n = 1800,
				a = (e, t = !1) => t ? e.coinPrice < r ? 0 : e.coinPrice < n ? 50 : 100 : 2048,
				o = (e, t, s = !1) => {
					const r = a(t, s);
					return e.slice(0, r)
				}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/bignumber.js/bignumber.js"),
				n = s("./src/lib/prettyPrintNumber/index.ts");

			function a(e, t) {
				const s = new r.BigNumber(e),
					n = new r.BigNumber(t || 1);
				return s.dividedToIntegerBy(n).toString()
			}

			function o(e, t) {
				return Object(n.b)(parseInt(a(e, t), 10))
			}

			function i(e, t) {
				const s = new r.BigNumber(e),
					n = new r.BigNumber(t || 1);
				return s.multipliedBy(n).toFixed(0)
			}
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./src/reddit/contexts/PageLayer/index.tsx"),
				n = s("./src/reddit/helpers/isComment.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				o = s("./src/telemetry/models/Outbound.ts");
			const i = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(n.b)(e) || Object(a.b)(e))) return Object(n.b)(e) ? o.SourceElement.Comment : Object(r.x)(t) ? o.SourceElement.PostDetail : Object(r.G)(t) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "g", (function() {
				return w
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return j
			})), s.d(t, "e", (function() {
				return v
			}));
			var r, n, a = s("./src/reddit/constants/tracking.ts"),
				o = s("./src/reddit/helpers/isComment.ts"),
				i = s("./src/reddit/helpers/isPost.ts"),
				c = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(r || (r = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(n || (n = {}));
			const m = e => ({
					...u.defaults(e),
					source: n.LINK,
					action: a.c.CLICK,
					noun: r.INTERNAL_LINK
				}),
				p = e => ({
					...u.defaults(e),
					source: n,
					screen: u.screen(e),
					discoveryUnit: {
						id: "xd_100",
						name: r.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: r.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: r
					} = t;
					if (!s || !Object(i.b)(s) && !Object(o.b)(s)) return {
						outbound: void 0
					};
					const n = Object(i.b)(s) ? "postId" : "commentId",
						a = {
							url: `/r/${r}/`,
							sourceElement: Object(c.a)(t),
							subredditName: r,
							[n]: s.id
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
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(i.b)(s) && !Object(o.b)(s)) return {};
					const r = Object(i.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.post(e, s.id),
						subreddit: u.subredditById(e, r),
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
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				w = (e, t) => s => ({
					...p(s),
					source: n.DISCOVERY_UNIT,
					action: a.c.VIEW,
					noun: r.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				x = (e, t) => s => ({
					...p(s),
					source: n.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.ITEM_POST,
					post: u.post(s, t),
					subreddit: u.subredditByName(s, e),
					screen: u.screen(s)
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.HEADER_SUBREDDIT
				}),
				j = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: n.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: r.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/icons/svgs/Advance/index.m.less": function(e, t, s) {
			e.exports = {
				default: "_8j1c5tda8wyYwjTEGlw7C"
			}
		},
		"./src/reddit/icons/svgs/Advance/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Advance/index.m.less"),
				i = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.default, e.className),
				viewBox: "0 0 13 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M6.707 6.707a.997.997 0 000-1.414l-5-5A.999.999 0 10.293 1.707L4.586 6 .293 10.293a.999.999 0 101.414 1.414l5-5zm6 0a.997.997 0 000-1.414l-5-5a.999.999 0 10-1.414 1.414L10.586 6l-4.293 4.293a.999.999 0 101.414 1.414l5-5z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: Object(a.a)(i.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/CoinV2/index.m.less": function(e, t, s) {
			e.exports = {
				shadow: "_1FZLzx9zXc2B6sAENx2Fl2",
				standardColor: "_1nJ18ao-riTqosaH0xAHuA"
			}
		},
		"./src/reddit/icons/svgs/CoinV2/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/icons/svgs/CoinV2/index.m.less"),
				i = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				className: Object(a.a)(i.a.shadow, e.shadowClassName),
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z"
			}), n.a.createElement("path", {
				d: "M11.1 1.889H8.722v16.219h2.212a5.86 5.86 0 001.951-.274c3.658-1.158 5.837-5.614 4.856-9.933C16.92 4.28 14.134 1.886 11.1 1.89z",
				fill: "url(#shine)",
				fillOpacity: ".3"
			}), n.a.createElement("path", {
				className: Object(a.a)(i.a.standardColor, e.standardColorClassName),
				d: "M6.991 2.166C3.334 3.324 1.155 7.78 2.135 12.1c.98 4.32 4.754 6.891 8.411 5.734 3.658-1.157 5.837-5.613 4.857-9.932-.98-4.32-4.754-6.892-8.412-5.735z"
			}), n.a.createElement("path", {
				className: Object(a.a)(i.a.shadow, e.shadowClassName),
				d: "M7.54 12.335c1.122.765 2.664.277 3.311-1.047.224-.457.718-.613 1.104-.35.387.264.52.847.296 1.304-.54 1.103-1.41 1.892-2.453 2.222-1.043.33-2.13.16-3.065-.476-1.929-1.316-2.592-4.24-1.479-6.517.54-1.104 1.41-1.893 2.453-2.223 1.042-.33 2.13-.16 3.065.477.387.263.52.847.296 1.303-.223.456-.717.612-1.104.35-1.121-.765-2.663-.277-3.31 1.047-.669 1.367-.271 3.121.887 3.91z"
			}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
				id: "shine",
				x1: "11.107",
				y1: "1.889",
				x2: "11.107",
				y2: "18.111",
				gradientUnits: "userSpaceOnUse"
			}, n.a.createElement("stop", {
				offset: ".063",
				stopColor: "#fff",
				stopOpacity: "0"
			}), n.a.createElement("stop", {
				offset: ".302",
				stopColor: "#fff"
			}), n.a.createElement("stop", {
				offset: "0.432",
				stopColor: "#fff"
			}), n.a.createElement("stop", {
				offset: "0.474",
				stopColor: "#fff",
				stopOpacity: "0"
			}))))
		},
		"./src/reddit/icons/svgs/Eye/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);

			function a(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 40 40"
				}, n.a.createElement("g", null, n.a.createElement("path", {
					d: "M20,8C9.1,8,0.5,14,0.5,21.7h4c0-3.6,3.4-6.9,8.2-8.5C11,15,10,17.4,10,20c0,5.5,4.5,10,10,10s10-4.5,10-10c0-2.6-1-5-2.7-6.8c4.8,1.7,8.2,4.9,8.2,8.5h4C39.5,14,30.9,8,20,8z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/reddit/constants/colors.ts");
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.desc && n.a.createElement("desc", null, e.desc), n.a.createElement("path", {
				d: "M1.88,3.32V9a11.53,11.53,0,0,0,8,11L10,20l.08,0a11.53,11.53,0,0,0,8-11V3.32A11.57,11.57,0,0,1,10,0,11.57,11.57,0,0,1,1.88,3.32"
			}), n.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "5",
				fill: e.isUnread ? "white" : "none"
			}), n.a.createElement("circle", {
				cx: "18",
				cy: "3",
				r: "4",
				fill: e.isUnread ? a.b.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/New/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, n.a.createElement("g", {
				stroke: "none"
			}, n.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M13.535 15.785c-1.678.244-2.883.742-3.535 1.071v-5.113a2 2 0 0 0-2-2H4.217c.044-.487.076-1.016.076-1.629 0-1.692-.489-2.968-.884-3.722L4.8 3.001H10v4.742a2 2 0 0 0 2 2h3.783c.06.67.144 1.248.22 1.742.097.632.182 1.177.182 1.745 0 1.045-.829 2.291-2.65 2.555m5.028-12.249l-2.242-2.242a1 1 0 0 0-.707-.293H4.386a1 1 0 0 0-.707.293L1.436 3.536a1 1 0 0 0-.069 1.337c.009.011.926 1.2.926 3.241 0 1.304-.145 2.24-.273 3.065-.106.684-.206 1.33-.206 2.051 0 1.939 1.499 4.119 4.364 4.534 2.086.304 3.254 1.062 3.261 1.065a1.016 1.016 0 0 0 1.117.004c.011-.007 1.18-.765 3.266-1.069 2.864-.415 4.363-2.595 4.363-4.534 0-.721-.099-1.367-.206-2.051-.128-.825-.272-1.761-.272-3.065 0-2.033.893-3.199.926-3.241a.999.999 0 0 0-.07-1.337"
			}))
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/fbt/lib/FbtPublic.js");
			const n = new Set(["low_coin_upsell"]),
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
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var r;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return r
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(r || (r = {}))
		},
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var r;
			s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(r || (r = {}))
		},
		"./src/reddit/reducers/features/econPurchase/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/redux/es/redux.js"),
				n = s("./src/reddit/actions/gold/constants.ts");
			const a = {};
			var o = (e = a, t) => {
				switch (t.type) {
					case n.nb: {
						const s = t.payload;
						return {
							...e,
							[s.subredditId]: s.amount
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
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return v
			})), s.d(t, "m", (function() {
				return I
			})), s.d(t, "i", (function() {
				return k
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "h", (function() {
				return T
			})), s.d(t, "k", (function() {
				return L
			})), s.d(t, "c", (function() {
				return M
			})), s.d(t, "f", (function() {
				return B
			})), s.d(t, "a", (function() {
				return G
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "b", (function() {
				return U
			})), s.d(t, "e", (function() {
				return H
			})), s.d(t, "g", (function() {
				return W
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				o = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				d = s("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				u = s.n(d)()(e => Object(n.a)(Object(r.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var m = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				f = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				w = e => e.publicAccessNetwork.hlsStreams,
				x = Object(r.a)(w, e => e.ended),
				O = Object(r.a)(w, e => e.removed),
				j = Object(r.a)(p, x, O, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = R(r, o.a.ENDED) ? o.a.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !0 === a ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = R(r, o.a.ENDED) ? o.a.ENDED : r,
							a = s.stream.vod_accessible;
						return n === r && !1 === a ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !1
								}
							}
						}
					}, r)
				}),
				v = (e, t) => {
					return j(e)[Object(a.g)(t)]
				},
				y = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), j, b, i.h, (e, t, s, r, n) => {
					const i = [];
					if (e) {
						const t = Object(a.g)(e);
						s[t] && i.push(t)
					}
					const c = i.concat(t),
						d = [...new Set(c)],
						l = new Set([...r, ...n]);
					return d.filter(e => {
						const t = s[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== o.a.KILLED && t.stream.state !== o.a.PURGED
					})
				}),
				E = Object(r.a)((e, {
					count: t
				}) => t, j, (e, {
					listingName: t,
					streamIdFromPath: s
				}) => y(e, {
					listingName: t,
					streamIdFromPath: s
				}), (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				I = Object(r.a)(j, E, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				_ = Object(r.a)(g, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: r
				}) => E(e, {
					listingName: t || r,
					streamIdFromPath: s
				}), (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				C = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t, j, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: r
				}) => E(e, {
					listingName: t || r,
					streamIdFromPath: s
				}), h, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						a = n.find(e => e.stream.state === o.a.IS_LIVE);
					if (a) return a.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				k = Object(n.a)(Object(r.a)(C, j, (e, t) => e ? t[e] : void 0)),
				P = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(a.g)(t) : void 0, C, b, i.h, (e, {
					related: t,
					streamIdFromPath: s,
					subreddit: r
				}) => E(e, {
					listingName: t || r,
					streamIdFromPath: s
				}), (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				N = Object(r.a)(f, g, _, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				A = Object(r.a)(f, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				S = Object(n.a)(Object(r.a)(P, j, (e, t) => e ? t[e] : void 0)),
				T = Object(n.a)(Object(r.a)(N, j, (e, t) => e ? t[e] : void 0)),
				L = Object(n.a)(Object(r.a)(A, j, (e, t) => e ? t[e] : void 0)),
				M = (Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, j, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)(P, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				B = Object(r.a)((e, {
					streamIdFromPath: t
				}) => t ? v(e, t) : void 0, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function R(e, t) {
				const s = {
					[o.a.NOT_STARTED]: 0,
					[o.a.PUBLISHED]: 1,
					[o.a.IS_LIVE]: 2,
					[o.a.DISCONNECTED]: 2,
					[o.a.ENDED]: 3,
					[o.a.KILLED]: 4,
					[o.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const D = Object(r.a)(P, h, (e, t) => e && t.timestamps[e] || 0);
			var G;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(G || (G = {}));
			const F = Object(r.a)(P, j, m.b, (e, t, s) => {
					if (s) return G.INTRO;
					const r = e && t[e];
					if (!r) return G.UNAVAILABLE;
					const n = r.stream.state;
					return n === o.a.IS_LIVE || n === o.a.DISCONNECTED ? G.LIVE : n === o.a.ENDED && r.stream.vod_accessible ? G.VOD : G.UNAVAILABLE
				}),
				U = Object(r.a)(S, F, m.b, c.b, c.o, (e, t, s, r, n) => s ? r : e ? t === G.LIVE || t === G.VOD ? e.stream.hls_url : n : void 0),
				H = Object(r.a)(S, F, D, (e, t, s) => e ? t === G.LIVE ? e.broadcast_time : t === G.VOD && s < e.broadcast_time ? s : 0 : 0),
				W = (e, t) => {
					const s = p(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const o = e => e.publicAccessNetwork.theaterSettings,
				i = Object(r.a)(o, a.n, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(o, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		},
		"./src/reddit/selectors/gold/econPurchase.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var r = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./src/reddit/reducers/features/econPurchase/index.ts");
			Object(r.a)({
				features: {
					econPurchase: n.a
				}
			});
			const a = (e, {
				subredditId: t
			}) => t && e.features.econPurchase.subredditLockedCoins[t] || 0
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/featureFlags/index.ts"),
				a = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/subreddit.ts");
			const i = e => n.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(a.c)(e, {
						experimentEligibilitySelector: i,
						experimentName: r.ke
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === r.qe.SmIcon || t === r.qe.SmIconHc
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
					const s = Object(o.U)(e, {
						subredditName: t
					});
					return (s && s.postIds || []).slice(0, 2)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedGild~GildModal.d5116acc1984b48a713c.js.map