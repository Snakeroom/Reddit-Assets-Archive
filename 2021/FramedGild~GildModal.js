// https://www.redditstatic.com/desktop2x/FramedGild~GildModal.b3aa6dafb9ce46f64b4f.js
// Retrieved at 12/2/2021, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FramedGild~GildModal", "gildActions"], {
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
						w = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						O = r(/version\/(\d+(\.\d+)?)/i),
						x = /tablet/i.test(t) && !/tablet pc/i.test(t),
						j = !x && /[^-]mobi/i.test(t),
						y = /xbox/i.test(t);
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
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && O && (s.version = O)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || r(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !o && !s.silk ? !s.windowsphone && a ? (s[a] = e, s.ios = e, s.osname = "iOS") : f ? (s.mac = e, s.osname = "macOS") : y ? (s.xbox = e, s.osname = "Xbox") : h ? (s.windows = e, s.osname = "Windows") : g && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var v = "";
					s.windows ? v = function(e) {
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
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? v = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? v = (v = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : a ? v = (v = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : o ? v = r(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? v = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? v = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? v = r(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (v = r(/tizen[\/\s](\d+(\.\d+)*)/i)), v && (s.osversion = v);
					var E = !s.windows && v.split(".")[0];
					return x || c || "ipad" == a || o && (3 == E || E >= 4 && !j) || s.silk ? s.tablet = e : (j || "iphone" == a || "ipod" == a || o || i || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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
			const d = (e, {
					locale: t = n.DEFAULT_LOCALE,
					pretty: r,
					formatOptions: s
				} = {}) => {
					const a = Number(e);
					return Object(c.c)() ? r ? Object(o.b)(a) : new Intl.NumberFormat(t, s).format(a) : u(a, r, t)
				},
				l = (e, t = {}) => {
					const {
						locale: r = n.DEFAULT_LOCALE,
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
							return Object(c.c)() ? new Intl.NumberFormat(r, {
								currencyDisplay: "symbol",
								...d
							}).format(g) + " " + t : u(g, o, r, t)
						}
						case a.b.Crypto: {
							if (o) {
								return Object(i.c)(w, l) + " " + h
							}
							const e = Number(Object(i.b)(w, l));
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
							const e = Number(Object(s.a)(w, b));
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
			const l = Object(a.a)(d.nb),
				u = (e, t, r) => async (n, s, {
					gqlContext: a
				}) => {
					var d, u;
					if (!c.a.has(t.toLowerCase())) return;
					if (void 0 !== s().features.econPurchase.subredditLockedCoins[e] && !(null == r ? void 0 : r.force)) return;
					const m = await ((e, t) => Object(o.a)(e, {
						...i,
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
				return z
			})), r.d(t, "updateMessage", (function() {
				return Y
			})), r.d(t, "gildGqlRequested", (function() {
				return X
			})), r.d(t, "triggerLoader", (function() {
				return Q
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
				o = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				c = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				d = r("./src/reddit/actions/modal.ts"),
				l = r("./src/reddit/actions/toaster.ts"),
				u = r("./node_modules/react/index.js"),
				m = r.n(u),
				p = r("./src/reddit/models/Gold/Award.ts"),
				b = r("./src/reddit/components/Gold/AwardKarmaToastMessage/index.m.less"),
				h = r.n(b);
			const {
				fbt: f
			} = r("./node_modules/fbt/lib/FbtPublic.js"), g = e => f._("Sent! You earned {=awarder karma}", [f._param("=awarder karma", m.a.createElement("a", {
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
			var w = r("./src/reddit/constants/modals.ts"),
				O = r("./src/reddit/models/Gold/Coins/index.ts"),
				x = r("./src/reddit/models/Post/index.ts"),
				j = r("./src/reddit/models/Toast/index.ts"),
				y = r("./src/reddit/models/User/index.ts"),
				v = r("./src/reddit/selectors/commentSelector.ts"),
				E = r("./src/reddit/selectors/communityAwards.ts"),
				I = r("./src/reddit/selectors/gild.ts"),
				_ = r("./src/reddit/selectors/gold/awardIcon.ts"),
				k = r("./src/reddit/selectors/gold/econPurchase.ts"),
				C = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				P = r("./src/reddit/selectors/posts.ts"),
				N = r("./src/reddit/selectors/subreddit.ts"),
				S = r("./src/reddit/selectors/user.ts"),
				T = r("./src/lib/makeGqlRequest/index.ts"),
				A = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				L = r("./src/redditGQL/operations/GildComment.json"),
				M = r("./src/redditGQL/operations/GildPost.json");
			const B = (e, t, r) => Object(T.a)(e, {
					...M,
					variables: t
				}, {
					query: r ? {} : Object(A.b)()
				}),
				R = (e, t, r) => Object(T.a)(e, {
					...L,
					variables: t
				}, {
					query: r ? {} : Object(A.b)()
				});
			var D = r("./src/reddit/helpers/awards/getAwardItemId.ts"),
				G = r("./src/reddit/helpers/awards/message.ts"),
				F = r("./src/reddit/helpers/correlationIdTracker.ts"),
				U = r("./src/reddit/helpers/isPost.ts"),
				H = r("./src/reddit/helpers/trackers/gild.ts"),
				W = r("./src/telemetry/index.ts"),
				V = r("./src/reddit/endpoints/profile/info.ts"),
				q = r("./src/reddit/actions/gold/awardKarma.ts"),
				J = r("./src/reddit/actions/gold/constants.ts"),
				K = r("./src/reddit/actions/gold/econPurchase.ts");
			const z = Object(s.a)(J.r),
				Y = Object(s.a)(J.v),
				X = (e, t) => async (r, s, {
					gqlContext: a
				}) => {
					const o = s().gild,
						{
							isOldReddit: i,
							isLivestream: c
						} = t;
					r($());
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
									gild: n
								} = t.data,
								s = Object(U.a)(e) ? d.body.data.gild.postInfo : d.body.data.gild.comment,
								{
									awardings: a,
									treatmentTags: i
								} = s;
							await r(se({
								awardId: o.selectedAward.id,
								awardings: a,
								awardKarmaReceived: n.awardKarmaReceived,
								coins: n.coins,
								id: e,
								subredditCoins: n.subredditCoins,
								treatmentTags: i
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
				}, Q = Object(s.a)(J.u), Z = Object(s.a)(J.q), $ = () => async (e, t) => {
					e(Z()), window.setTimeout(() => {
						t().gild.api.pending && e(Q())
					}, 2e3)
				}, ee = Object(s.a)(J.p), te = e => async (t, r) => {
					await t(ee(e)), t(Object(l.f)({
						kind: j.b.Error,
						duration: l.a,
						text: e
					}))
				}, re = Object(s.a)(J.s), ne = (e, t) => {
					const {
						id: r
					} = t, n = Object(U.a)(r) ? Object(P.H)(e, {
						postId: r
					}) : Object(v.b)(e, {
						commentId: r
					}), s = Object(S.k)(e), a = e.gild, {
						isAnonymous: o
					} = a, i = !o && s && (s.username || s.displayText) ? s.username || s.displayText : void 0, c = n ? n.author : void 0, d = Object(N.F)(e, {
						thingId: r
					});
					return re({
						...t,
						gilder: i,
						gildee: c,
						subredditId: d && d.id
					})
				}, se = e => async (t, r) => {
					const s = r(),
						{
							awardId: u,
							id: m
						} = e,
						b = Object(E.a)(s, u),
						h = e.awardKarmaReceived,
						f = Object(S.k)(s),
						v = Object(I.b)(s) || Object(F.d)(F.a.GildingFlow, !1);
					if (Object(I.g)(s)) {
						const e = "success.gild",
							t = {},
							r = Object(_.a)(s, {
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
						const t = Object(N.F)(s, {
								thingId: m
							}),
							r = t && Object(N.x)(s, {
								subredditName: t.name
							});
						r && (e.subredditCoins = r - b.coinPrice)
					}
					if (t(ne(s, e)), f) {
						const e = {
								...V.a,
								...f.karma
							},
							r = e.fromAwardsReceived + h,
							n = Object(y.e)(f);
						t(Object(q.a)({
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
					const T = Object(U.a)(m) ? n.fbt._("Success! You have given this post the {awardName} Award", [n.fbt._param("awardName", b.name)], {
							hk: "1Ndi4Z"
						}) : n.fbt._("Success! You have given this comment the {awardName} Award", [n.fbt._param("awardName", b.name)], {
							hk: "2sIK9Y"
						}),
						A = b.coinPrice;
					Object(W.a)(Object(H.viewKarmaSuccessEvent)({
						award: b,
						awarderKarmaEarned: h,
						awardeeKarmaEarned: 0,
						numberCoins: A,
						thingId: m
					})(s)), t(Object(d.g)(w.a.GOLD_GILD_MODAL));
					const L = Object(_.a)(s, {
						award: b,
						minSize: 64,
						postOrCommentId: m
					});
					t(Object(l.f)({
						customIconAsset: L,
						kind: j.b.SuccessAward,
						text: h > 0 ? g({
							awarderKarmaReceived: h
						}) : T
					})), setTimeout(() => {
						const e = Object(D.a)(u, m),
							t = document.getElementById(e);
						t && t.dispatchEvent(new Event("awardAdded"))
					}, 10);
					const M = Date.now();
					await t(Object(c.b)(v));
					const B = Date.now() - M;
					if (A > 0) {
						const e = Object(C.f)(r()).filter(e => O.a.has(e.dealInfo.type));
						if (e.length) {
							const r = Math.max(900 - B, 10),
								n = Math.max(300 - B, 10),
								a = Object(U.a)(m) && Object(x.p)(Object(P.H)(s, {
									postId: m
								}));
							setTimeout(() => t(Object(i.e)({
								correlationId: v,
								packageId: e[0].mobileId
							})), a ? r : n)
						}
					}
					const R = Object(N.F)(s, {
						thingId: m
					});
					if (R && Object(k.a)(s, {
							subredditId: R.id
						}) && t(Object(K.a)(R.id, R.name, {
							force: !0
						})), 0 === A && R) {
						t(Object(o.a)(R.id, m, void 0, !0));
						const e = 399,
							n = Object(C.d)(r()).reduce((t, r) => {
								const n = Math.abs(r.pennies - e);
								return (!t || n < t.priceDelta) && (t = {
									packageId: r.mobileId,
									priceDelta: n
								}), t
							}, null);
						n && t(Object(i.b)({
							correlationId: v,
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
			const i = Object(n.a)(o.mb),
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
				return k
			})), r.d(t, "b", (function() {
				return P
			})), r.d(t, "d", (function() {
				return N
			})), r.d(t, "j", (function() {
				return S
			})), r.d(t, "i", (function() {
				return T
			})), r.d(t, "f", (function() {
				return A
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
				w = r("./src/reddit/models/Toast/index.ts"),
				O = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				x = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				j = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const y = Object(a.a)(j.q),
				v = Object(a.a)(j.c),
				E = e => async (t, r) => {
					t(y(e)), t(Object(l.h)(i.a.ECON_COIN_PURCHASE))
				}, I = () => async (e, t) => {
					e(v()), e(Object(l.g)(i.a.ECON_COIN_PURCHASE))
				}, _ = Object(a.a)(j.u), k = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					const s = n();
					Object(O.e)(s, t) ? (r(_({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(i.a.GOLD_TARGETED_OFFER_MODAL))) : o.c.captureMessage(`Tried to show targeted offer, but could not find package id: ${t}`)
				}, C = Object(a.a)(j.p), P = ({
					correlationId: e,
					packageId: t
				}) => async (r, n) => {
					Object(O.c)(n(), t) ? (r(C({
						correlationId: e,
						packageId: t
					})), r(Object(l.i)(i.a.ECON_COIN_PACKAGE_OFFER))) : o.c.captureMessage(`Tried to show coin package offer, but could not find package id: ${t}`)
				}, N = (e, t, r) => async (s, a) => {
					await s(Object(d.c)(e, r));
					const o = a(),
						i = Object(O.q)(o);
					if (0 !== i.length) s(E({
						correlationId: r,
						packageId: i[0].mobileId,
						thingId: t
					}));
					else {
						const e = Object(O.n)(o),
							t = n.fbt._("Unable to create purchase request.", null, {
								hk: "lgfDj"
							});
						s(Object(u.f)({
							kind: w.b.Error,
							duration: u.a,
							text: e || t
						}))
					}
				}, S = (e, t) => async (r, a, {
					apiContext: o
				}) => {
					const i = a(),
						{
							coins: d,
							pennies: l
						} = t,
						u = Object(x.r)(i) || Object(b.d)(b.a.GoldPayment, !1);
					let m, h;
					r(Object(c.stripeTokenPending)());
					const f = Object(x.y)(i);
					if (f || (m = await r(Object(c.validateAndCreateStripeToken)(e)), h = Object(x.v)(i), m)) try {
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
							const t = Object(s.a)(e.error, e.status);
							return void r(Object(c.stripeApiError)(t))
						}
						return r(Object(c.paymentCompleted)({
							coins: e.body.coins ? e.body.coins : 0,
							confirmed: !1
						})), void Object(b.b)(b.a.GoldPayment)
					} catch (w) {
						const e = Object(s.a)(w);
						r(Object(c.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						r(Object(c.stripeApiError)(e))
					}
				}, T = (e, t, a) => async (o, i, {
					apiContext: d
				}) => {
					const l = i(),
						{
							coins: u,
							pennies: m
						} = t,
						w = Object(x.r)(l) || Object(b.d)(b.a.GoldPayment, !1);
					let O, j;
					o(Object(c.stripeTokenPending)());
					const y = Object(x.y)(l);
					if (y || (O = await o(Object(c.validateAndCreateStripeToken)(e)), j = Object(x.v)(l), O)) try {
						const {
							gildModalThingId: e,
							isAnonymous: i,
							message: x,
							selectedAward: v
						} = l.gild;
						if (!e || !v.id) {
							const e = n.fbt._("Gilding unknown thing", null, {
								hk: "2Jiujp"
							});
							return void o(Object(c.stripeApiError)(e))
						}
						const E = v.id,
							_ = {
								gildType: E,
								isAnonymous: i,
								message: x
							},
							k = await Object(p.e)({
								coins: u,
								context: d(),
								correlationId: w,
								gildParams: _,
								isOldReddit: a,
								offerContext: Object(g.d)(t, !0),
								pennies: m,
								rememberCard: j,
								savedCardId: y || void 0,
								thingId: e,
								token: O
							});
						if (k.error) {
							const e = Object(s.a)(k.error, k.status);
							return void o(Object(c.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							o(I()), o(Object(c.paymentCompleted)({
								confirmed: !1
							}));
							const {
								awarder_karma_received: n,
								all_awardings: s,
								coins: a,
								treatment_tags: i
							} = k.body;
							return o(t({
								awardKarmaReceived: n || 0,
								awardId: E,
								awardings: s && s.length ? Object(h.a)(s).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})) : [],
								coins: a,
								id: e,
								treatmentTags: i
							})), void Object(b.b)(b.a.GoldPayment)
						}
					} catch (v) {
						const e = Object(s.a)(v);
						o(Object(c.stripeApiError)(e))
					} else {
						const e = n.fbt._("Looks like something went wrong validating your credit card.", null, {
							hk: "2OvpVH"
						});
						o(Object(c.stripeApiError)(e))
					}
				}, A = e => async (t, r, {
					apiContext: n
				}) => {
					const a = Object(b.c)(b.a.GoldPayment),
						{
							coins: i,
							pennies: d
						} = e;
					try {
						const e = await Object(m.a)({
							context: n(),
							coins: i,
							pennies: d,
							correlationId: a
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
					} catch (l) {
						o.c.captureException(l);
						const e = Object(s.a)(l);
						t(Object(c.paypalApiError)(e))
					}
				}, L = (e, t) => async (r, n, {
					apiContext: a
				}) => {
					const i = n(),
						d = Object(x.r)(i) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: l,
							pennies: u
						} = t;
					try {
						const n = await Object(m.c)({
							context: a(),
							offerContext: Object(g.d)(t, !1),
							orderId: e,
							coins: l,
							pennies: u,
							correlationId: d
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
					} catch (p) {
						o.c.captureException(p);
						const e = Object(s.a)(p);
						r(Object(c.paypalApiError)(e))
					}
				}, M = (e, t) => async (a, i, {
					apiContext: d
				}) => {
					const l = i(),
						u = Object(x.r)(l) || Object(b.d)(b.a.GoldPayment, !1),
						{
							coins: p,
							pennies: w
						} = t;
					try {
						const {
							gildModalThingId: o,
							isAnonymous: i,
							message: O,
							selectedAward: x
						} = l.gild;
						if (!o || !x) return void a(Object(c.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
							hk: "4DkIS3"
						})));
						const j = x.id,
							y = await Object(m.d)({
								context: d(),
								offerContext: Object(g.d)(t, !0),
								orderId: e,
								coins: p,
								pennies: w,
								thingId: o,
								awardId: j,
								message: O || "",
								isAnonymous: i,
								correlationId: u
							});
						if (y.error) {
							const e = Object(s.a)(y.error);
							a(Object(c.paypalApiError)(e))
						} else {
							a(I());
							const {
								all_awardings: e,
								awarder_karma_received: t,
								coins: n,
								subreddit_coins: s,
								treatment_tags: i
							} = y.body;
							a(Object(c.paymentCompleted)({
								coins: n,
								confirmed: !0
							}));
							const {
								gildSuccessful: d
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(d({
								awardId: j,
								awardKarmaReceived: t || 0,
								awardings: Object(h.a)(e).map(e => ({
									award: Object(f.h)(e),
									total: e.count
								})),
								coins: n,
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
		"./src/reddit/actions/goldPurchaseModals/payment.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "selectPaymentMethod", (function() {
				return d
			})), r.d(t, "paymentCompleted", (function() {
				return l
			})), r.d(t, "cardNameInput", (function() {
				return u
			})), r.d(t, "postalCodeInput", (function() {
				return m
			})), r.d(t, "cardNameEmpty", (function() {
				return p
			})), r.d(t, "cardElementChange", (function() {
				return b
			})), r.d(t, "stripeTokenPending", (function() {
				return h
			})), r.d(t, "stripeTokenError", (function() {
				return f
			})), r.d(t, "stripeApiError", (function() {
				return g
			})), r.d(t, "validateAndCreateStripeToken", (function() {
				return w
			})), r.d(t, "paypalApiError", (function() {
				return O
			})), r.d(t, "toggleRememberCard", (function() {
				return x
			})), r.d(t, "selectSavedCard", (function() {
				return j
			})), r.d(t, "_deleteSavedCard", (function() {
				return y
			})), r.d(t, "deleteSavedCard", (function() {
				return v
			})), r.d(t, "savedCardsPending", (function() {
				return E
			})), r.d(t, "savedCardsSuccess", (function() {
				return I
			})), r.d(t, "loadSavedCards", (function() {
				return _
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/sentry/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/reddit/endpoints/gold/purchase.ts"),
				i = r("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				c = r("./src/reddit/selectors/goldPurchaseModals.ts");
			const d = Object(a.a)(i.B),
				l = Object(a.a)(i.w),
				u = Object(a.a)(i.b),
				m = Object(a.a)(i.y),
				p = Object(a.a)(i.a),
				b = Object(a.a)(i.E),
				h = Object(a.a)(i.G),
				f = Object(a.a)(i.F),
				g = Object(a.a)(i.D),
				w = e => async (t, r) => {
					const s = r(),
						a = Object(c.h)(s),
						o = Object(c.l)(s),
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
						const e = n.fbt._("Your card’s name field is incomplete", null, {
							hk: "VBdRU"
						});
						t(p({
							message: e
						}))
					}
				}, O = Object(a.a)(i.x), x = Object(a.a)(i.H), j = Object(a.a)(i.C), y = Object(a.a)(i.g), v = e => async (t, r, {
					apiContext: n
				}) => {
					t(y(e));
					try {
						const t = await Object(o.a)(n(), e);
						if (t.error) throw new Error(t.error.type)
					} catch (a) {
						s.c.captureException(a)
					}
				}, E = Object(a.a)(i.z), I = Object(a.a)(i.A), _ = () => async (e, t, {
					apiContext: r
				}) => {
					e(E());
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
						e(I(n)), n[0] && e(j(n[0].cardId))
					} catch (n) {
						s.c.captureException(n), e(I([]))
					}
				}
		},
		"./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "b", (function() {
				return w
			})), r.d(t, "e", (function() {
				return O
			})), r.d(t, "d", (function() {
				return x
			})), r.d(t, "c", (function() {
				return j
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
			const h = Object(a.a)(b.r),
				f = Object(a.a)(b.d),
				g = Object(a.a)(b.s),
				w = (e, t, r) => async e => {
					e(g({
						thingId: t
					})), e(h({
						correlationId: r
					}))
				}, O = (e, t) => async (a, o, {
					apiContext: c
				}) => {
					const b = o(),
						h = Object(l.c)(l.a.GoldPayment);
					let g, w;
					a(Object(i.stripeTokenPending)());
					const O = Object(p.y)(b);
					if (O || (g = await a(Object(i.validateAndCreateStripeToken)(e)), w = Object(p.v)(b), g)) try {
						const {
							gildModalThingId: e,
							isAnonymous: o,
							message: l,
							selectedAward: p
						} = b.gild;
						if (!e || !p.id) return void a(Object(i.stripeApiError)(n.fbt._("Gilding unknown thing", null, {
							hk: "Qd6mo"
						})));
						const x = p.id,
							j = p.pennyPrice;
						if (!j) return void a(Object(i.stripeApiError)(n.fbt._("Trying to purchase award with zero price", null, {
							hk: "3FhAjz"
						})));
						const y = {
								gildType: x,
								isAnonymous: o,
								message: l
							},
							v = await Object(d.g)({
								context: c(),
								correlationId: h,
								gildParams: y,
								isOldReddit: t,
								pennies: j,
								rememberCard: w,
								savedCardId: O || void 0,
								thingId: e,
								token: g
							});
						if (v.error) {
							const e = Object(s.a)(v.error, v.status);
							return void a(Object(i.stripeApiError)(e))
						} {
							const {
								gildSuccessful: t
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							a(f()), a(Object(i.paymentCompleted)({
								confirmed: !1
							}));
							const {
								all_awardings: n,
								awarder_karma_received: s,
								coins: o,
								treatment_tags: c
							} = v.body;
							return void a(t({
								awardKarmaReceived: s || 0,
								awardId: x,
								awardings: n && n.length ? Object(u.a)(n).map(e => ({
									award: Object(m.h)(e),
									total: e.count
								})) : [],
								coins: o,
								id: e,
								treatmentTags: c
							}))
						}
					} catch (x) {
						const e = Object(s.a)(x);
						a(Object(i.stripeApiError)(e))
					} else a(Object(i.stripeApiError)(n.fbt._("Looks like something went wrong validating your credit card.", null, {
						hk: "20FruV"
					})))
				}, x = (e, t, r) => async (n, a, {
					apiContext: d
				}) => {
					const u = Object(l.c)(l.a.GoldPayment);
					try {
						const a = await Object(c.b)({
							context: d(),
							awardId: e,
							pennies: t,
							thingId: r,
							correlationId: u
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
					} catch (m) {
						o.c.captureException(m);
						const e = Object(s.a)(m);
						n(Object(i.paypalApiError)(e))
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
						if (!a || !h) return void t(Object(i.paypalApiError)(n.fbt._("Gilding unknown post or comment", null, {
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
							} = await r.e("gildActions").then(r.bind(null, "./src/reddit/actions/gold/gild.ts"));
							t(d({
								awardKarmaReceived: n || 0,
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
		"./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return f
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "a", (function() {
				return y
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/env/index.ts"),
				a = r("./src/lib/makeActionCreator/index.ts"),
				o = r("./src/lib/sentry/index.ts"),
				i = r("./src/reddit/endpoints/gold/productCatalog/index.ts"),
				c = r("./src/reddit/selectors/user.ts"),
				d = r("./src/reddit/actions/toaster.ts"),
				l = r("./src/reddit/models/Toast/index.ts"),
				u = r("./src/reddit/actions/post.ts"),
				m = r("./src/reddit/actions/goldPurchaseModals/constants.ts");
			const p = Object(a.a)(m.j),
				b = Object(a.a)(m.k),
				h = Object(a.a)(m.i),
				f = e => async (t, r, {
					apiContext: a
				}) => {
					t(p());
					const d = r(),
						l = Object(c.K)(d);
					try {
						const r = !l,
							n = await Object(i.b)({
								context: a(),
								correlationId: e,
								shouldUseCurrentOrigin: r
							});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const s = n.body;
						t(b(s))
					} catch (u) {
						Object(s.b)() || console.error(u), o.c.captureException(u);
						const e = n.fbt._("There was an error fetching available products", null, {
							hk: "1Uvx37"
						});
						t(h(e))
					}
				}, g = Object(a.a)(m.m), w = Object(a.a)(m.n), O = Object(a.a)(m.l), x = (e, t) => async (r, a, {
					apiContext: c
				}) => {
					r(g());
					try {
						const n = await Object(i.c)({
							awardId: e,
							context: c(),
							correlationId: t
						});
						if (!n.ok) throw new Error(n.error && n.error.type || "Unknown error");
						const s = n.body;
						if (!s.coinPackages || !s.coinPackages.length) throw new Error(`Recommended coin packages returned empty for award id ${e}`);
						r(w(s))
					} catch (d) {
						Object(s.b)() || console.error(d), o.c.captureException(d);
						const e = n.fbt._("There was an error fetching purchasable coins package", null, {
							hk: "47Fxzt"
						});
						r(O(e))
					}
				}, j = Object(a.a)(m.h), y = () => async (e, t, {
					gqlContext: r
				}) => {
					var a, c;
					try {
						const t = await Object(i.a)(r());
						if (t.ok) {
							const r = t.body.data.claimAwardOffer;
							if (null === (a = r.errors) || void 0 === a ? void 0 : a.length) throw new Error(r.errors.map(e => e.message).join(" | "));
							if (!(null === (c = r.awards) || void 0 === c ? void 0 : c.length)) throw new Error("Got empty award list on free award offer claim");
							if (!r.ok) throw new Error("Got not ok response on free award offer claim");
							await e(j({
								awards: r.awards
							})), e(Object(u.B)())
						}
					} catch (m) {
						Object(s.b)() || console.error(m), e(Object(d.f)({
							kind: l.b.Error,
							text: n.fbt._("Sorry, something went wrong. Try Claiming again.", null, {
								hk: "FWjud"
							})
						})), o.c.captureException(m)
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
					return Object(l.a)(t.id) ? e.filter(e => !(e => e.some(e => e.startsWith("econ:transferable:econ:render:")))(e.award.tags || [])) : e
				},
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/localStorage/index.ts"),
				b = r("./src/reddit/helpers/trackers/gild.ts"),
				h = r("./src/reddit/models/Gold/Award.ts"),
				f = r("./src/reddit/models/Subreddit/index.ts"),
				g = r("./src/reddit/models/Toast/index.ts"),
				w = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				O = r("./src/reddit/actions/gold/econPurchase.ts"),
				x = r("./src/reddit/actions/gold/gild.ts"),
				j = r("./src/reddit/actions/gold/giveAward.ts"),
				y = r("./src/reddit/actions/gold/modals.ts"),
				v = r("./src/reddit/actions/goldPurchaseModals/coinPurchaseModal.ts"),
				E = r("./src/reddit/actions/goldPurchaseModals/pennyPurchaseModal.ts"),
				I = r("./src/reddit/actions/goldPurchaseModals/purchaseCatalog.ts"),
				_ = r("./src/reddit/actions/subreddit.ts"),
				k = r("./src/reddit/actions/toaster.ts"),
				C = r("./src/reddit/selectors/commentSelector.ts"),
				P = r("./src/reddit/selectors/communityAwards.ts"),
				N = r("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				S = r("./src/reddit/selectors/gild.ts"),
				T = r("./src/reddit/selectors/gold/awardIcon.ts"),
				A = r("./src/reddit/selectors/gold/econPurchase.ts"),
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
			const q = () => Object(W.a)(() => Promise.all([Promise.all([r.e("CoinPurchaseModal~EconPowerupsPurchaseModal~PennyPurchaseModal~PremiumPurchaseModal"), r.e("PennyPurchaseModal")]).then(r.bind(null, "./src/reddit/components/PennyPurchaseModal/index.tsx")), Object(V.d)().catch(() => {})])).then(e => e[0].default);
			var J = Object(H.a)({
					getComponent: q,
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				K = r("./src/reddit/components/TrackingHelper/index.tsx"),
				z = r("./src/reddit/components/GildModalContent/AwardDetailsPane/index.m.less"),
				Y = r.n(z),
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
			const we = s.a.memo((function(e) {
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
						const r = Object(R.H)(e, {
							postId: t.thingId
						});
						if (!r) return {};
						const n = !!r.media && "rpan" === r.media.type,
							s = n && Object(N.g)(e, t.thingId, D.l);
						return {
							post: {
								...r,
								isRPANBroadcast: n,
								isFeedTheMeterEnabled: s
							}
						}
					}
					return {}
				})(we),
				xe = r("./src/reddit/components/RichTextJson/index.tsx"),
				je = r("./src/reddit/icons/svgs/Advance/index.tsx");
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
					}, s.a.createElement(je.a, {
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
					}, s.a.createElement(xe.a, {
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
					}, s.a.createElement(je.a, null)))))
				}
			}
			var ve = ye,
				Ee = r("./src/reddit/icons/svgs/Lock/index.tsx"),
				Ie = r("./src/reddit/icons/svgs/New/index.tsx"),
				_e = r("./src/reddit/icons/svgs/Premium/index.tsx");
			var ke = e => s.a.createElement("svg", {
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
				if (e.award.awardSubType === h.d.Moderator) t = ee.a, r = ge.a.moderatorIcon;
				else if (e.award.awardSubType === h.d.Premium) t = e.premiumUser ? _e.a : Ee.a, r = e.premiumUser ? ge.a.premiumIcon : ge.a.lockIcon;
				else if (n) t = ke, r = ge.a.transferableIcon;
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
				}, s.a.createElement(Ce, {
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
				Te = e => ({
					[e.tag]: []
				});
			var Ae = s.a.memo(e => {
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
					} = e, [p, h] = Object(n.useState)({}), [f, g] = Object(n.useState)(Te(Se)), [w, O] = Object(n.useState)(Se.tag);
					Object(n.useEffect)(() => {
						const e = {},
							t = Te(Se);
						r.forEach(r => {
							e[r.award.id] = r, t[Se.tag].push(r.award.id);
							const n = r.award.tags;
							n && n.forEach(e => {
								void 0 === t[e] && (t[e] = []), t[e].push(r.award.id)
							})
						}), h(e), g(t)
					}, [r]);
					const x = [Se, ...u.filter(e => f[e.tag])],
						j = f[w],
						[y, v] = Object(n.useState)(!1),
						[E, I] = Object(n.useState)(1),
						_ = Object(n.useCallback)(e => {
							if (null !== e) {
								const t = e.clientWidth,
									{
										colWidth: r,
										colGutter: n
									} = Ne,
									s = t > (r + n) * (j.length - 1) + r + r + n;
								if (v(s), s) I(j.length);
								else {
									const e = Math.floor((t - r) / (r + n) + 1);
									I(e)
								}
							}
						}, [j]);
					if (a || !r.length) return s.a.createElement("div", {
						className: ge.a.awardSelectorPane
					});
					const k = e => {
						o(e);
						const t = x.find(e => e.tag === w) || Se,
							r = j.findIndex(t => t === e.id),
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
						className: ge.a.awardSelectorPane
					}, s.a.createElement(Oe, {
						thingId: e.thingId
					}), s.a.createElement(ve, {
						tags: x,
						selectedTag: w,
						sendEvent: l,
						onSelectTag: O
					}), s.a.createElement("div", {
						className: ge.a.awardSectionScrollWrapper
					}, s.a.createElement("div", {
						className: ge.a.awardSectionContainer
					}, s.a.createElement("div", {
						className: Object(c.a)(ge.a.awardSection, {
							[ge.a.singleRowGrid]: y
						}),
						ref: _
					}, j.map(e => {
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
							onSelect: k,
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

			function Ge({
				onButtonClick: e,
				onCancel: t,
				title: r,
				buttonText: n
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
				}, r), s.a.createElement("button", {
					className: Be.a.coinButton,
					onClick: e
				}, s.a.createElement("div", {
					className: Be.a.coinBalanceIndicator,
					tabIndex: -1
				}, s.a.createElement(te.a, {
					className: Be.a.coinIcon
				}), s.a.createElement("div", {
					className: Be.a.coinBalance
				}, n)), s.a.createElement("div", {
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
			var We = ({
				onCancel: e,
				thingId: t,
				userCoins: r
			}) => {
				const n = Object(Fe.a)(),
					o = Object(K.b)(),
					i = Object(a.e)(e => !r && Boolean(Object(M.h)(e)) && Object(Ue.z)(e)),
					c = i ? He._("Get free Coins with Premium", null, {
						hk: "3fzsqq"
					}) : Object(Le.a)(r || 0, {
						locale: n
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
			var qe = r("./src/reddit/components/GildModalContent/index.m.less"),
				Je = r.n(qe);
			const Ke = (e, {
					thingId: t,
					subredditId: r
				}) => {
					let n = r;
					if (!r) {
						const r = Object(G.F)(e, {
							thingId: t
						});
						n = r && r.id
					}
					if (!n && Object(l.a)(t)) {
						const r = Object(R.H)(e, {
							postId: t
						});
						n = r && r.belongsTo.id
					}
					return n
				},
				ze = Object(o.a)(Object(o.c)({
					awardings: (e, {
						thingId: t,
						subredditId: r
					}) => {
						const n = Ke(e, {
							thingId: t,
							subredditId: r
						});
						return n ? Object(P.h)(e, {
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
							s = (n ? Object(P.h)(e, {
								subredditId: n,
								thingId: t
							}) : []).map(e => e.award);
						return Object(T.b)(e, {
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
							const r = Object(G.F)(e, {
								thingId: t
							});
							if (!r) return !1;
							n = r.id
						}
						return Object(P.g)(e, {
							subredditId: n,
							thingId: t
						})
					},
					correlationId: e => Object(S.b)(e) || Object(m.d)(m.a.GildingFlow, !1),
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
					}) : Object(C.b)(e, {
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
					subreddit: G.F,
					subredditCoins: (e, {
						thingId: t,
						subredditId: r
					}) => {
						const n = Object(G.F)(e, {
								thingId: t
							}),
							s = n ? n.id : r;
						return Object(G.w)(e, {
							subredditId: s
						})
					},
					tags: (e, {
						thingId: t,
						subredditId: r
					}) => {
						let n = r;
						if (!r) {
							const r = Object(G.F)(e, {
								thingId: t
							});
							n = r && r.id
						}
						if (!n && Object(l.a)(t)) {
							const r = Object(R.H)(e, {
								postId: t
							});
							n = r && r.belongsTo.id
						}
						return n ? Object(P.i)(e, {
							subredditId: n
						}) : []
					},
					userCoins: (e, t) => {
						const r = Object(F.e)(e),
							n = Ke(e, t);
						return r + Object(A.a)(e, {
							subredditId: n
						})
					},
					inViewerFeedTheMeter: (e, {
						thingId: t
					}) => Object(N.g)(e, t, D.l)
				}), e => {
					const {
						awardings: t,
						isEmployee: r,
						postOrComment: n,
						selectedAward: s,
						subredditCoins: a,
						userCoins: o,
						isChatDisabled: i
					} = e, {
						awardType: c,
						coinPrice: d,
						pennyPrice: l
					} = s, m = c === h.f.Moderator, p = !!l || ((m ? a : o) || 0) < d && !(r && !m), b = n && n.media && "rpan" === n.media.type, f = n ? u(t, n) : t;
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
					Object(p.ub)(e)
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
						subreddit: w,
						subredditAboutRequested: O,
						subredditId: x,
						subredditLockedCoinsRequested: j,
						subredditName: y,
						thingId: v,
						displayUnusableAwardError: E
					} = this.props;
					r || Object(m.d)(m.a.GildingFlow, !1), u(Object(b.viewGildModalEvent)(l.id, n, v)), g(!s && Object(p.q)());
					const I = w ? w.id : x || (o && o.belongsTo ? o.belongsTo.id : void 0);
					if (I && t(I), Ve(e, l) && (E(), d(h.n)), w || y) {
						O(w ? w.name : y)
					}
					w && w.type !== f.f.User && j(w.id, w.name), a && (l.pennyPrice ? q() : Object(U.a)(), i || c(r))
				}
				componentDidUpdate(e) {
					e.awardingsPending && !this.props.awardingsPending && Ve(this.props.awardings, this.props.selectedAward) && (this.props.displayUnusableAwardError(), this.props.selectAward(h.n))
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
						showPurchaseModal: w,
						subreddit: O,
						subredditCoins: x,
						subredditName: j,
						tags: y,
						thingId: v,
						userCoins: E,
						isChatDisabled: I
					} = this.props, {
						showPurchaseModalInThisInstance: _
					} = this.state, k = w && _, C = k && !f.pennyPrice, P = k && !!f.pennyPrice, N = (C || P) && !d;
					if (C && N) return null;
					if (P && N) return s.a.createElement(J, null);
					const S = O ? O.name : j,
						T = !(!o || !o.isGold),
						A = {
							needPayment: b,
							needPremium: !T && f.awardSubType === h.d.Premium,
							onNeedPayment: this.onNeedPayment,
							onGetPremium: this.onGetPremium,
							onGild: this.onGildRequested,
							pending: l || u,
							selectedAward: f,
							thingId: v
						};
					return s.a.createElement("div", {
						className: Object(c.a)(n, Je.a.gildModalContent)
					}, s.a.createElement(We, {
						onCancel: a,
						thingId: v,
						userCoins: E
					}), s.a.createElement("div", {
						className: Je.a.modalMainContent
					}, s.a.createElement(Ae, {
						awardIcons: t,
						awardTotals: e,
						awardsPending: r,
						premiumUser: T,
						onSelect: this.props.selectAward,
						selectedAward: f,
						sendEvent: g,
						tags: y,
						thingId: v
					}), s.a.createElement(he, {
						forcePublic: m,
						isAnonymous: i,
						isLivestream: m,
						hideTextArea: I,
						message: p,
						selectedAward: f,
						selectedAwardIcon: t[f.id],
						sendEvent: g,
						thingId: v,
						toggleIsAnonymous: this.toggleIsAnonymous,
						handleMessageInput: this.handleMessageInput,
						gildButtonProps: A,
						subredditName: S,
						subredditCoins: x
					})), P && s.a.createElement(J, null))
				}
			}
			t.a = Object(a.b)(ze, (e, {
				author: t,
				profileId: r,
				thingId: n
			}) => ({
				awardsAndTagsRequested: s => e(Object(w.a)(s, n, r && t)),
				closeGildModal: () => e(Object(y.a)()),
				gildRequested: (t, r) => e(Object(x.gildGqlRequested)(n, {
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
					e(s ? Object(E.b)(n, a, r) : Object(v.d)(t, a, r))
				},
				purchaseCatalogRequested: t => e(Object(I.b)(t)),
				selectAward: t => e(Object(j.a)(t)),
				displayUnusableAwardError: () => e(Object(k.f)({
					kind: g.b.Error,
					duration: k.a,
					text: i.fbt._("This award is not available on this content.", null, {
						hk: "13VV1D"
					})
				})),
				setIsAnonymous: t => {
					e(Object(x.setIsAnonymous)(t)), Object(p.ub)(t)
				},
				subredditAboutRequested: t => e(Object(_.u)(t)),
				subredditLockedCoinsRequested: (t, r) => e(Object(O.a)(t, r)),
				updateMessage: t => e(Object(x.updateMessage)(t))
			}))(Object(K.c)(Ye))
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
				d = ({
					isNSFW: e,
					isSpoiler: t
				}) => a.a.createElement("div", {
					className: i.a.unblurButtonContainer
				}, a.a.createElement("button", {
					className: i.a.unblurButton
				}, c(e, t)))
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
					isNightmodeOn: m.X
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
				return n.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (n.margin = "0 auto"), e.isListing || (n.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (n.maxHeight = e.maxHeight || void 0), s.a.createElement("iframe", {
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
				return C
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
				w = r("./src/reddit/hooks/useClickSourceData.ts"),
				O = r("./src/reddit/models/Media/index.ts"),
				x = r("./src/reddit/selectors/experiments/goodVisitSearchFeed.ts"),
				j = r("./src/reddit/selectors/posts.ts"),
				y = r("./src/reddit/selectors/telemetry.ts"),
				v = r("./src/reddit/selectors/user.ts"),
				E = r("./src/reddit/constants/tracking.ts"),
				I = r("./src/reddit/components/Media/ImageBox/index.m.less"),
				_ = r.n(I);

			function k() {
				return (k = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = e => e > 2 * O.e,
				P = e => {
					const t = Object(d.a)(_.a.image, h.g, e.className, {
							[_.a.mShowCentered]: e.showCentered,
							[_.a.mShowBlurred]: e.shouldBlur
						}),
						r = {};
					return e.showFull || e.isTall || (r.maxHeight = `${O.j}px`), e.isListing || e.isTall && C(e.height) || (r.maxHeight = `${O.e}px`), e.isExpando && e.maxHeight && (r.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (r.maxWidth = `${e.maxWidth}px`), a.a.createElement("img", {
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
					return (!e.showFull && Object(O.K)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${O.j}px`, e.shouldBlur && (t.maxWidth = Object(O.K)(e.height, e.width) ? `${O.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), a.a.createElement("div", {
						className: Object(d.a)(_.a.container, e.className),
						style: t
					}, e.children)
				},
				S = Object(o.b)(() => Object(c.a)(j.G, v.db, (e, {
					isSponsored: t,
					postId: r
				}) => t && r ? Object(j.b)(e, r) : null, x.a, y.actionInfo, j.H, (e, t, r, n, s, a) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: r,
					sendGoodVisitEvent: n,
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
				}, A(e)) : e.isListing && e.postPermalink ? a.a.createElement(i.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: e.sendGoodVisitEvent ? Object(m.a)(e.postPermalink, void 0, t) : Object(m.a)(e.postPermalink)
				}, A(e)) : A(e)
			});
			const T = (e, t) => a.a.createElement(P, {
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
				A = ({
					onClick: e,
					...t
				}) => {
					const r = Object(O.K)(t.height, t.width),
						s = C(t.height) && r;
					return a.a.createElement(N, k({}, t, {
						className: `${r?`${E.a} `:""}${t.className||""}`
					}), t.isListing ? a.a.createElement("div", {
						className: t.contentImageClassName
					}, T(r, t)) : a.a.createElement("a", {
						href: t.originalSource,
						onClick: e,
						style: s ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: _.a.imageLink
					}, T(r, t), t.shouldBlur && !t.isVideoThumbnail && a.a.createElement(p.a, {
						isNSFW: !!t.isNSFW,
						isSpoiler: !!t.isSpoiler
					})), t.isListing && !t.showFull && t.height > O.j && Object(O.K)(t.height, t.width) && a.a.createElement("div", {
						className: _.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), t.isVideoThumbnail && a.a.createElement(b.a, {
						onClick: e
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
				return E
			}));
			var n = r("./node_modules/lodash/throttle.js"),
				s = r.n(n),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./node_modules/react-redux/es/index.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/classNames/index.ts"),
				l = r("./src/reddit/actions/video.ts"),
				u = r("./src/reddit/constants/tracking.ts"),
				m = r("./src/reddit/models/Media/index.ts"),
				p = r("./src/reddit/selectors/user.ts"),
				b = r("./src/reddit/selectors/video.ts");
			const h = 100,
				f = h / 2 / 1e3;
			var g = r("./src/lib/forceHttps/index.ts"),
				w = r("./src/lib/hooks/usePrevious.ts");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}

			function x({
				autoplay: e,
				isListing: t,
				isNotCardView: r,
				onBufferingChange: n,
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

				function x(e) {
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
					if (x(!i && (e || r)), p.current && n) return m.current = function(e, t) {
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
							4 === e.readyState ? o = !1 : !o && c >= i && c < i + f ? o = !0 : o && c >= i && c > i + f && (o = !1), i = c, s !== o && t(o)
						}, h);
						return () => {
							clearInterval(d), e.removeEventListener("playing", a), e.removeEventListener("play", a), e.removeEventListener("loadeddata", s)
						}
					}(p.current, n), () => {
						m.current && m.current()
					}
				}, []), Object(a.useEffect)(() => {
					b !== i && x(!i && (e || r))
				}, [b, i, e, r]), o.a.createElement("video", O({}, u, {
					ref: e => p.current = e,
					muted: !0
				}), o.a.createElement("source", {
					src: Object(g.a)(l || "")
				}))
			}
			var j = r("./src/reddit/components/Media/VideoBox/index.m.less"),
				y = r.n(j);
			const v = Object(c.c)({
				autoplayPref: p.b,
				consumed: b.a,
				loadTimes: b.f,
				metadata: b.h,
				started: b.k
			});

			function E(e) {
				const {
					autoplayPref: t,
					consumed: r,
					loadTimes: n,
					metadata: a,
					started: c
				} = Object(i.e)(t => v(t, e)), {
					postId: p,
					shouldLoad: b,
					source: h,
					height: f,
					isNotCardView: g,
					showFull: w,
					shouldPause: O,
					width: j,
					isListing: E,
					className: I,
					showCentered: _,
					originalSource: k
				} = e, C = Object(i.d)();

				function P(e) {
					C(e ? Object(l.r)(p) : Object(l.E)(p))
				}

				function N() {
					return C(Object(l.z)({
						postId: p
					}))
				}
				const S = s()(e => {
					if (r) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && C(Object(l.s)(p))
				}, 200);

				function T(e) {
					e.persist(), S(e)
				}

				function A(e) {
					var t;
					(a || M(e), c) || (t = e.timeStamp, C(Object(l.A)(p, t)))
				}

				function L(e) {
					C(Object(l.q)(p, e.timeStamp))
				}

				function M(e) {
					! function(e) {
						C(Object(l.D)({
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
					n || A(e), a || M(e), C(Object(l.C)(p))
				}

				function R() {
					const e = {};
					return _ && (e.margin = "0 auto"), E || (e.maxHeight = `${m.e}px`), o.a.createElement(x, {
						autoplay: t,
						className: Object(d.a)(u.a, y.a.styledVideo),
						height: f,
						isListing: E,
						isNotCardView: g,
						key: p,
						loop: !0,
						onBufferingChange: P,
						onLoadStart: L,
						onLoadedData: A,
						onLoadedMetadata: M,
						onPause: N,
						onPlaying: B,
						onTimeUpdate: T,
						shouldLoad: b,
						shouldPause: O,
						showCentered: _,
						showFull: w,
						source: h,
						style: e,
						width: j
					})
				}
				return E ? R() : o.a.createElement("div", {
					className: Object(d.a)(y.a.container, I, {
						[y.a.centered]: _
					})
				}, o.a.createElement("a", {
					href: k,
					target: "_blank",
					rel: "noopener noreferrer"
				}, R()))
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
				w = m.a.span("SpoilerWrapper", u.a),
				O = m.a.wrapped(({
					className: e,
					isOpen: t,
					...r
				}) => a.a.createElement(w, p({}, r, {
					className: Object(o.a)(e, {
						[u.a.isOpen]: t
					})
				})), "SpoilerWrapper", u.a),
				x = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [i.a.Click, i.a.Keydown]);
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
					return a.a.createElement(O, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, a.a.createElement(f, null, a.a.createElement(g, {
						innerRef: this.setTooltipTargetRef
					}), a.a.createElement(x, {
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
			t.a = j
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
				return w
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "f", (function() {
				return x
			})), r.d(t, "u", (function() {
				return j
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "l", (function() {
				return v
			})), r.d(t, "m", (function() {
				return E
			})), r.d(t, "n", (function() {
				return I
			})), r.d(t, "t", (function() {
				return _
			})), r.d(t, "p", (function() {
				return k
			})), r.d(t, "o", (function() {
				return C
			})), r.d(t, "q", (function() {
				return P
			})), r.d(t, "s", (function() {
				return N
			})), r.d(t, "r", (function() {
				return S
			})), r.d(t, "a", (function() {
				return T
			})), r.d(t, "w", (function() {
				return A
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
				w = c.a.ol("Ol", i.a),
				O = c.a.strong("B", i.a),
				x = c.a.em("I", i.a),
				j = c.a.span("U", i.a),
				y = e => s.a.createElement("del", e),
				v = c.a.sub("Sub", i.a),
				E = c.a.sup("Sup", i.a),
				I = c.a.table("Table", i.a),
				_ = c.a.tr("Tr", i.a),
				k = c.a.td("Tdl", i.a),
				C = c.a.td("Tdc", i.a),
				P = c.a.td("Tdr", i.a),
				N = c.a.th("Thl", i.a),
				S = c.a.th("Thc", i.a),
				T = (c.a.th("Thr", i.a), c.a.wrapped(e => s.a.createElement(a.b, e), "A", i.a)),
				A = c.a.wrapped(d.a, "A", i.a)
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
			r.d(t, "c", (function() {
				return v
			})), r.d(t, "b", (function() {
				return E
			})), r.d(t, "a", (function() {
				return _
			}));
			var n = r("./node_modules/lodash/findLastIndex.js"),
				s = r.n(n),
				a = r("./node_modules/react/index.js"),
				o = r.n(a),
				i = r("./src/lib/classNames/index.ts"),
				c = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = r("./src/lib/sentry/index.ts"),
				l = r("./src/reddit/components/Media/BlurredContent.tsx"),
				u = r("./src/reddit/constants/elementClassNames.ts"),
				m = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				p = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				b = r("./src/reddit/models/RichTextJson/index.ts"),
				h = r("./src/reddit/components/RichTextJson/media.tsx"),
				f = r("./src/reddit/components/RichTextJson/renderers.tsx"),
				g = r("./src/reddit/components/RichTextJson/index.m.less"),
				w = r.n(g);

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = r("./src/lib/lessComponent.tsx").a.div("Container", w.a),
				j = Object(c.a)(({
					flairStyleTemplate: e,
					theme: t,
					...r
				}) => o.a.createElement(x, O({}, r, {
					style: {
						color: Object(p.a)(Object(m.a)({
							flairStyleTemplate: e,
							theme: t,
							...r
						}))
					}
				}))),
				y = e => e.e === b.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== b.u || !!e.c && !e.c.every(e => e.e === b.A && !e.t),
				v = e => s()(e, y),
				E = e => e.findIndex(y),
				I = e => {
					const {
						altText: t,
						className: r,
						content: n,
						isListing: s,
						isNSFW: a,
						isSpoiler: c,
						onClickRevealBlurred: d,
						postId: m,
						renderMediaAsLinks: p,
						rtJsonElementProps: g,
						useExplicitTextColor: O,
						shouldBlur: y
					} = e, I = n.document, _ = [], k = e.mediaMetadata || null, C = E(I), P = v(I);
					if (y && !s) return o.a.createElement(x, {
						className: Object(i.a)(u.j, r)
					}, o.a.createElement("div", {
						className: w.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: w.a.unblurButton,
						onClick: d
					}, Object(l.b)(!!a, !!c))));
					if (-1 !== C)
						for (let o = C; o <= P; o++) {
							const e = I[o];
							switch (e.e) {
								case b.k:
									_.push(f.c(e, g, o));
									break;
								case b.l:
									_.push(f.d(o));
									break;
								case b.b:
									_.push(f.a(e, k, g, o));
									break;
								case b.c:
									_.push(f.b(e, o));
									break;
								case b.p:
									_.push(f.f(e, k, g, o));
									break;
								case b.z:
									_.push(f.h(e, k, g, o));
									break;
								case b.u:
									_.push(f.g(e, k, g, o));
									break;
								case b.h:
									_.push(Object(h.a)(e, o));
									break;
								case b.m:
								case b.a:
								case b.D:
									_.push(...Object(h.b)(e, o, k, p, m, t))
							}
						}
					return O ? o.a.createElement(x, {
						className: Object(i.a)(u.j, r)
					}, _) : o.a.createElement(j, {
						className: Object(i.a)(u.j, r),
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
				Caption: "FJNSiirwoPtG58aeGw2Jx",
				caption: "FJNSiirwoPtG58aeGw2Jx",
				Placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				placeholder: "_2-H7KMbqeJxA6VjyAX4GMX",
				giphy: "_3J81Ds3WITP7zlq_PlUmGf"
			}
		},
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return _
			})), r.d(t, "b", (function() {
				return C
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
				p = r("./src/reddit/helpers/richTextJson/index.ts"),
				b = r("./src/reddit/models/RichTextJson/index.ts"),
				h = r("./src/reddit/components/RichTextJson/elements.tsx"),
				f = r("./src/reddit/components/RichTextJson/media.m.less"),
				g = r.n(f),
				w = r("./src/lib/lessComponent.tsx");

			function O() {
				return (O = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const x = /\/(\w+)\/asset\/(\w+)\//,
				j = w.a.wrapped(h.a, "A", g.a),
				y = w.a.wrapped(l.a, "ImageBox", g.a),
				v = w.a.wrapped(e => a.a.createElement("p", e), "Caption", g.a),
				E = w.a.div("Placeholder", g.a),
				I = w.a.wrapped(({
					className: e,
					e: t,
					...r
				}) => {
					const s = t === b.D ? n.fbt._("Processing video...", null, {
						hk: "3SXDRi"
					}) : n.fbt._("Processing image...", null, {
						hk: "1qwmbc"
					});
					return a.a.createElement(E, O({
						className: e,
						style: {
							"--placeholder-content-text": `'${s}'`
						}
					}, r))
				}, "Placeholder", g.a),
				_ = ({
					c: e,
					x: t,
					y: r
				}, n) => a.a.createElement("div", {
					className: g.a.MediaWrapper
				}, a.a.createElement(u.a, {
					height: r,
					isListing: !1,
					key: n,
					showCentered: !0,
					showFull: !0,
					width: t
				}, a.a.createElement(d.a, {
					isListing: !1,
					source: e,
					height: r,
					width: t,
					showCentered: !0,
					showFull: !0
				}))),
				k = (e, t, r) => {
					const n = e.c;
					let s = "";
					return r && (r.e === b.s ? s = r.s.u : r.e === b.r ? s = r.s.gif : r.e === b.t && (s = (e => {
						const t = x.exec(e);
						return t ? `${i.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(r.dashUrl))), s ? a.a.createElement(j, {
						href: s,
						key: t,
						title: n
					}, n || s) : null
				},
				C = (e, t, r, n, s, i) => {
					const d = b.E(r, e.id);
					if (n) return [k(e, t, d)];
					const l = [];
					return d ? d.e === b.s ? l.push((({
						id: e,
						s: t
					}, r, n, s) => a.a.createElement("div", {
						className: Object(o.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: n
						})
					}, a.a.createElement(u.a, {
						height: t.y,
						isListing: !1,
						key: r,
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
						s: r
					}, n, s) => {
						if (Object(p.g)(e)) {
							const i = t || Object(p.f)(e);
							return a.a.createElement("div", {
								className: Object(o.a)(g.a.MediaWrapper, {
									[g.a.mHasCaption]: s
								})
							}, a.a.createElement(j, {
								href: i,
								key: n,
								target: "_blank"
							}, r.mp4 ? a.a.createElement("video", {
								className: g.a.giphy,
								loop: !0,
								autoPlay: !0,
								muted: !0
							}, a.a.createElement("source", {
								src: r.mp4
							})) : {
								originalSource: i
							}))
						}
						return a.a.createElement("div", {
							className: Object(o.a)(g.a.MediaWrapper, {
								[g.a.mHasCaption]: s
							})
						}, a.a.createElement(u.a, {
							height: r.y,
							isListing: !1,
							key: n,
							showCentered: !0,
							showFull: !0,
							width: r.x
						}, a.a.createElement(m.a, {
							height: r.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: r.mp4,
							width: r.x,
							postId: e,
							source: r.mp4,
							shouldPause: !1,
							showCentered: !0,
							shouldLoad: !0,
							showFull: !0
						})))
					})(d, t, !!e.c)) : d.e === b.t && l.push((({
						hlsUrl: e,
						dashUrl: t,
						x: r,
						y: n,
						isGif: s
					}, i, d, l) => a.a.createElement("div", {
						className: Object(o.a)(g.a.MediaWrapper, {
							[g.a.mHasCaption]: d
						})
					}, a.a.createElement(u.a, {
						height: n,
						isListing: !1,
						isVideo: !0,
						key: i,
						showCentered: !0,
						showFull: !0,
						width: r
					}, a.a.createElement(c.b, {
						shouldLoad: !0,
						shouldPause: !0,
						autoPlay: s,
						hlsSource: e,
						mpegDashSource: t,
						postId: l,
						isGif: s
					}))))(d, t, !!e.c, s)) : l.push(((e, t) => a.a.createElement(I, {
						e,
						key: t
					}))(e.e, t)), e.c && l.push(((e, t) => a.a.createElement(v, {
						key: t
					}, e))(e.c, `caption${t}`)), l
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return T
			})), r.d(t, "d", (function() {
				return A
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
				w = r.n(g);
			const O = 1e3,
				x = 1e3;
			var j;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(j || (j = {}));
			class y extends i.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = j.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = j.Inside, setTimeout(() => {
							this.mouseLocation === j.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, O)
					}, this.onMouseOut = () => {
						this.mouseLocation = j.Outside, setTimeout(() => {
							this.mouseLocation !== j.Inside && this.setState({
								tooltipOpen: !1
							})
						}, x)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const r = b.defaults(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...r,
								actionInfo: {
									...r.actionInfo,
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
					let r, n, s;
					t.e === p.s ? (r = t.s.x, n = t.s.y, s = t.s.u) : t.e === p.r && (r = t.s.x, n = t.s.y, s = t.s.gif);
					const a = this.state.tooltipOpen ? l()() : void 0;
					return s ? i.a.createElement("div", {
						className: w.a.container,
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
			var v = Object(u.c)(y),
				E = r("./src/reddit/components/RichTextJson/media.tsx"),
				I = r("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				_ = r("./src/reddit/components/SubredditMention/index.tsx"),
				k = r("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				C = r("./src/reddit/helpers/isComment.ts"),
				P = r("./src/reddit/helpers/isPost.ts"),
				N = r("./src/reddit/helpers/richTextJson/index.ts"),
				S = r("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const T = (e, t, r) => {
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
				A = e => i.a.createElement(c.e, {
					key: e
				}),
				L = (e, t, r, n) => {
					const s = e.c;
					if (!s) return;
					const a = s.length,
						o = [];
					for (let i = 0; i < a; i++) o.push(R(s[i], t, r, i));
					return i.a.createElement(c.c, {
						key: n
					}, o)
				},
				M = (e, t) => {
					const r = e.c;
					return i.a.createElement(c.k, {
						key: t
					}, i.a.createElement(c.h, null, r.reduce((e, t, r, n) => e += t.t + (r < n.length ? "\n" : ""), "")))
				},
				B = (e, t, r, n) => {
					const s = e.c,
						a = [],
						o = s.length;
					for (let l = 0; l < o; l++) {
						const e = s[l].c;
						e && e.length && a.push(i.a.createElement(c.g, {
							key: l
						}, e.map((e, n) => R(e, t, r, n))))
					}
					const d = e.o ? c.i : c.v;
					return i.a.createElement(d, {
						key: n
					}, a)
				},
				R = (e, t, r, n) => {
					switch (e.e) {
						case p.b:
							return L(e, t, r, n);
						case p.c:
							return M(e, n);
						case p.k:
							return T(e, r, n);
						case p.l:
							return A(n);
						case p.p:
							return B(e, t, r, n);
						case p.u:
							return G(e, t, r, n);
						case p.z:
							return D(e, t, r, n)
					}
				},
				D = (e, t, r, n) => {
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
								H: n,
								D: s
							} = q(e.a),
							{
								c: o = []
							} = e;
						l.push(i.a.createElement(n, {
							key: c
						}, F(o, t, r))), m[c] = s
					}
					for (let p = 0; p < o; p++) {
						const e = s[p],
							n = e.length,
							a = [];
						for (let s = 0; s < n; s++) {
							const n = m[s],
								{
									c: o = []
								} = e[s];
							a.push(i.a.createElement(n, {
								key: s
							}, F(o, t, r)))
						}
						u.push(i.a.createElement(c.t, {
							key: p
						}, a))
					}
					return i.a.createElement(c.n, {
						key: n
					}, i.a.createElement("thead", null, i.a.createElement(c.t, null, l)), i.a.createElement("tbody", null, u))
				},
				G = (e, t, r, n) => {
					if (!e.c || !e.c.length) return (e => i.a.createElement(c.j, {
						key: e
					}, i.a.createElement("br", null)))(n);
					const s = e.c[0];
					return s.e !== p.m && s.e !== p.a || !Object(N.g)(s.id) ? i.a.createElement(c.j, {
						key: n
					}, F(e.c, t, r)) : Object(E.b)(s, n, t)
				},
				F = (e, t, r) => {
					const n = [],
						s = e.length;
					for (let a = 0; a < s; a++) {
						const s = e[a];
						if (s.e === p.A) n.push(H(s, a));
						else if (s.e === p.x) n.push(i.a.createElement(I.a, {
							key: a
						}, F(s.c, t, r)));
						else if (s.e === p.n) n.push(i.a.createElement("br", {
							key: a
						}));
						else if (s.e === p.m || s.e === p.a) {
							if (s.id.startsWith("emote|")) {
								const e = p.E(t, s.id);
								e && n.push(i.a.createElement(v, {
									key: a,
									node: s,
									media: e
								}))
							}
						} else n.push(U(s, r, a))
					}
					return n
				},
				U = (e, t, r) => {
					switch (e.e) {
						case p.o:
							const n = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(k.b)(e.u)) return i.a.createElement(c.w, {
								to: e.u,
								key: r,
								title: e.a
							}, n);
							let s, a;
							const o = Object(S.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(P.b)(d) && (s = d.postId), d && Object(C.b)(d) && (a = d.id, s = d.postId), i.a.createElement(c.a, {
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
				return y
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
				b = r("./src/reddit/components/TrackingHelper/index.tsx"),
				h = r("./src/reddit/constants/experiments.ts"),
				f = r("./src/reddit/helpers/trackers/subredditMentions.ts"),
				g = r("./src/reddit/selectors/subredditMention.ts");
			class w extends s.a.PureComponent {
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
			const O = Object(b.c)(w),
				x = Object(o.c)({
					isFeatureFlagEnabled: g.b,
					isUserInTreatment: g.e,
					userVariant: g.a
				}),
				j = Object(a.b)(x),
				y = ({
					isFeatureFlagEnabled: e,
					isUserInTreatment: t,
					subredditName: r,
					userVariant: n,
					rtJsonElementProps: a
				}) => {
					if (!t || !e) return s.a.createElement(O, {
						subredditName: r,
						rtJsonElementProps: a
					});
					switch (n) {
						case h.Ue.SmIcon:
							return s.a.createElement(p, {
								subredditName: r,
								rtJsonElementProps: a
							});
						case h.Ue.SmIconHc:
							return s.a.createElement(p, {
								subredditName: r,
								isHoverable: !0,
								rtJsonElementProps: a
							});
						default:
							return s.a.createElement(O, {
								subredditName: r,
								rtJsonElementProps: a
							})
					}
				};
			t.b = j(y)
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
			t.a = ({
				center: e,
				className: t,
				sizePx: r = 10
			}) => s.a.createElement("div", {
				className: Object(a.a)(i.a.loadingIcon, t, {
					[i.a.mCentered]: e
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
				o = r("./src/reddit/constants/headers.ts"),
				i = r("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				c = r("./src/reddit/endpoints/gold/purchase.ts");
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
					u = Object(i.a)(l);
				return Object(s.a)(Object(a.a)(t, [o.a]), {
					method: n.jb.POST,
					endpoint: u,
					data: d
				}).then(c.c)
			}, l = async ({
				context: e,
				coins: t,
				pennies: r,
				correlationId: i
			}) => {
				const d = {
					coins: t,
					pennies: r,
					correlation_id: i
				};
				return Object(s.a)(Object(a.a)(e, [o.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_coin_purchase_order`,
					data: d
				}).then(c.c)
			}, u = async ({
				context: e,
				awardId: t,
				pennies: r,
				thingId: i,
				correlationId: d
			}) => {
				const l = {
					award_id: t,
					correlation_id: d,
					pennies: r,
					thing_id: i
				};
				return Object(s.a)(Object(a.a)(e, [o.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/create_award_purchase_order`,
					data: l
				}).then(c.c)
			}, m = async ({
				context: e,
				offerContext: t,
				orderId: r,
				coins: i,
				pennies: d,
				correlationId: l
			}) => {
				const u = {
					offer_context: t,
					order_id: r,
					coins: i,
					pennies: d,
					correlation_id: l
				};
				return Object(s.a)(Object(a.a)(e, [o.a]), {
					method: n.jb.POST,
					endpoint: `${e.apiUrl}/api/v2/gold/paypal/execute_coin_order`,
					data: u
				}).then(c.c)
			}, p = async ({
				awardId: e,
				context: t,
				coins: r,
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
					coins: r,
					correlation_id: i,
					is_anonymous: d,
					message: l,
					offer_context: u,
					order_id: m,
					pennies: p,
					thing_id: b
				};
				return Object(s.a)(Object(a.a)(t, [o.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_coin_with_gild_order`,
					data: h
				}).then(c.c)
			}, b = async ({
				awardId: e,
				context: t,
				correlationId: r,
				isAnonymous: i,
				message: d,
				orderId: l,
				thingId: u
			}) => {
				const m = {
					award_id: e,
					correlation_id: r,
					is_anonymous: i,
					message: d,
					order_id: l,
					thing_id: u
				};
				return Object(s.a)(Object(a.a)(t, [o.a]), {
					method: n.jb.POST,
					endpoint: `${t.apiUrl}/api/v2/gold/paypal/execute_award_purchase_order`,
					data: m
				}).then(c.c)
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
				a = (e, t = !1) => t ? e.coinPrice < n ? 0 : e.coinPrice < s ? 50 : 100 : 2048,
				o = (e, t, r = !1) => {
					const n = a(t, r);
					return e.slice(0, n)
				}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "a", (function() {
				return i
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
			const i = ({
				renderingObjectInfo: e,
				pageLayer: t
			}) => {
				if (e && (Object(s.b)(e) || Object(a.b)(e))) return Object(s.b)(e) ? o.SourceElement.Comment : Object(n.x)(t) ? o.SourceElement.PostDetail : Object(n.G)(t) ? o.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return f
			})), r.d(t, "f", (function() {
				return g
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "b", (function() {
				return O
			})), r.d(t, "c", (function() {
				return x
			})), r.d(t, "d", (function() {
				return j
			})), r.d(t, "e", (function() {
				return y
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
					...u.defaults(e),
					source: s.LINK,
					action: a.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...u.defaults(e),
					source: s,
					screen: u.screen(e),
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
						d = Object(l.v)(e, {
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
						post: u.post(e, r.id),
						subreddit: u.subredditById(e, n),
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
					subreddit: u.subredditByName(t, e),
					screen: u.screen(t)
				}),
				w = (e, t) => r => ({
					...p(r),
					source: s.DISCOVERY_UNIT,
					action: a.c.VIEW,
					noun: n.ITEM_POST,
					post: u.post(r, t),
					subreddit: u.subredditByName(r, e),
					screen: u.screen(r)
				}),
				O = (e, t) => r => ({
					...p(r),
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: n.ITEM_POST,
					post: u.post(r, t),
					subreddit: u.subredditByName(r, e),
					screen: u.screen(r)
				}),
				x = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				j = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				y = e => t => ({
					...p(t),
					subreddit: u.subredditById(t, e) || null,
					source: s.DISCOVERY_UNIT,
					action: a.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/models/Gold/Coins/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "b", (function() {
				return o
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/fbt/lib/FbtPublic.js");
			const s = new Set(["low_coin_upsell"]),
				a = new Set(["new_purchaser", "repeat_purchaser"]),
				o = [{
					prompt: () => n.fbt._("What are coins?", null, {
						hk: "bD2cQ"
					}),
					answer: () => n.fbt._("Coins are our virtual good, and you can use them to award exceptional posts or comments, giving them Silver, Gold, or Platinum. We'll be adding cool new ways to spend your coins in the future.", null, {
						hk: "2RS7Fb"
					})
				}, {
					prompt: () => n.fbt._('What is "Give Award"?', null, {
						hk: "Q08fJ"
					}),
					answer: () => n.fbt._('Giving an Award, or "gilding", is a way to show appreciation for an exceptional contribution to Reddit. You can award someone by clicking on "Give Award" below their post or comment. This distinguishes it with an Award for all to see, and some even grant the honoree special bonus benefits.', null, {
						hk: "4fZWQ3"
					})
				}, {
					prompt: () => n.fbt._("What are these new Award types?", null, {
						hk: "2ysK1l"
					}),
					answer: () => n.fbt._("There are now several ways to Give Awards. A Silver Award requires 100 coins, which simply marks a post or comment with a Silver Award icon. A classic Gold Award requires 500 coins and gives the recipient a week of Reddit Premium membership and 100 coins. Finally, the ultra rare Platinum Award costs 1800 coins, and gives the recipient with one month of Reddit Premium membership, which includes 700 coins for that month.", null, {
						hk: "Mvg07"
					})
				}, {
					prompt: () => n.fbt._("I bought coins, how can I tell how many I have?", null, {
						hk: "4a4pGf"
					}),
					answer: () => n.fbt._("If you buy coins you will always have a balance associated with your Reddit account. You can view your balance on the top navigation bar by your username.", null, {
						hk: "2VWZ2s"
					})
				}, {
					prompt: () => n.fbt._("Can I transfer coins between Reddit accounts?", null, {
						hk: "1jLVez"
					}),
					answer: () => n.fbt._("You cannot transfer your Reddit coin balance across usernames, sorry. You can offer a Gold Award to other users which will grant them 100 coins.", null, {
						hk: "435l4g"
					})
				}, {
					prompt: () => n.fbt._("Can I get coins for free?", null, {
						hk: "1fhxmd"
					}),
					answer: () => n.fbt._("We may give away coins on special occasions. Stay tuned!", null, {
						hk: "3qKa11"
					})
				}, {
					prompt: () => n.fbt._("What happened to Creddits? Do those still exist?", null, {
						hk: "qTu5W"
					}),
					answer: () => n.fbt._("Yes, Creddits are simply called \"coins\" now, and we've converted any existing balance at a generous exchange rate of one Creddit to 2000 coins. That's double their original monetary value as a thank you for supporting us early. Use them to award exceptional posts and comments you come across. Thanks again for your contribution to the Reddit community.", null, {
						hk: "3bz9Wy"
					})
				}, {
					prompt: () => n.fbt._("I thought Gold was the name of Reddit's subscription membership?", null, {
						hk: "26YDse"
					}),
					answer: () => n.fbt._('You\'re correct, it used to also be the name of the subscription membership. However, many people confused the subscription "Reddit Gold" membership with a virtual good or coin. To make things easier to understand, we\'ve renamed the membership to "Reddit Premium", while our virtual good is called "coins".', null, {
						hk: "aFpGc"
					})
				}]
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
			var o = (e = a, t) => {
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
				subredditLockedCoins: o
			})
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, r) {
			"use strict";
			r.d(t, "l", (function() {
				return y
			})), r.d(t, "m", (function() {
				return I
			})), r.d(t, "i", (function() {
				return C
			})), r.d(t, "d", (function() {
				return T
			})), r.d(t, "h", (function() {
				return A
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
				w = e => e.publicAccessNetwork.hlsStreams,
				O = Object(n.a)(w, e => e.ended),
				x = Object(n.a)(w, e => e.removed),
				j = Object(n.a)(p, O, x, (e, t, r) => {
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
				y = (e, t) => {
					return j(e)[Object(a.g)(t)]
				},
				v = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t, (e, t) => u(t.listingName)(e, t), j, b, i.h, (e, t, r, n, s) => {
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
				E = Object(n.a)((e, {
					count: t
				}) => t, j, (e, {
					listingName: t,
					streamIdFromPath: r
				}) => v(e, {
					listingName: t,
					streamIdFromPath: r
				}), (e, t, r) => {
					const n = r.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? n.slice(0, e) : n
				}),
				I = Object(n.a)(j, E, (e, t) => {
					const r = t[0];
					if (r) return e[r]
				}),
				_ = Object(n.a)(g, (e, {
					related: t,
					streamIdFromPath: r,
					subreddit: n
				}) => E(e, {
					listingName: t || n,
					streamIdFromPath: r
				}), (e, t) => {
					const r = new Set(e),
						n = t.filter(e => !r.has(e));
					if (n.length) return n[0]
				}),
				k = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t, j, (e, {
					related: t,
					streamIdFromPath: r,
					subreddit: n
				}) => E(e, {
					listingName: t || n,
					streamIdFromPath: r
				}), h, (e, t, r, n) => {
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
				C = Object(s.a)(Object(n.a)(k, j, (e, t) => e ? t[e] : void 0)),
				P = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? Object(a.g)(t) : void 0, k, b, i.h, (e, {
					related: t,
					streamIdFromPath: r,
					subreddit: n
				}) => E(e, {
					listingName: t || n,
					streamIdFromPath: r
				}), (e, t, r, n, s) => !e || r.includes(e) || n.includes(e) ? t || s[0] : e),
				N = Object(n.a)(f, g, _, (e, t, r) => e < t.length - 1 ? t[e + 1] : r),
				S = Object(n.a)(f, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				T = Object(s.a)(Object(n.a)(P, j, (e, t) => e ? t[e] : void 0)),
				A = Object(s.a)(Object(n.a)(N, j, (e, t) => e ? t[e] : void 0)),
				L = Object(s.a)(Object(n.a)(S, j, (e, t) => e ? t[e] : void 0)),
				M = (Object(s.a)(Object(n.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, j, (e, t) => Object.keys(e).filter(e => !!t[e]).map(r => ({
					...t[r],
					preloadedPreviewUrl: e[r]
				})))), Object(n.a)(P, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				B = Object(n.a)((e, {
					streamIdFromPath: t
				}) => t ? y(e, t) : void 0, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

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
			const F = Object(n.a)(P, j, m.b, (e, t, r) => {
					if (r) return G.INTRO;
					const n = e && t[e];
					if (!n) return G.UNAVAILABLE;
					const s = n.stream.state;
					return s === o.a.IS_LIVE || s === o.a.DISCONNECTED ? G.LIVE : s === o.a.ENDED && n.stream.vod_accessible ? G.VOD : G.UNAVAILABLE
				}),
				U = Object(n.a)(T, F, m.b, c.b, c.o, (e, t, r, n, s) => r ? n : e ? t === G.LIVE || t === G.VOD ? e.stream.hls_url : s : void 0),
				H = Object(n.a)(T, F, D, (e, t, r) => e ? t === G.LIVE ? e.broadcast_time : t === G.VOD && r < e.broadcast_time ? r : 0 : 0),
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
			const a = (e, {
				subredditId: t
			}) => t && e.features.econPurchase.subredditLockedCoins[t] || 0
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
						experimentName: n.Ne
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === n.Ue.SmIcon || t === n.Ue.SmIconHc
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
					const r = Object(o.T)(e, {
						subredditName: t
					});
					return (r && r.postIds || []).slice(0, 2)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FramedGild~GildModal.b3aa6dafb9ce46f64b4f.js.map