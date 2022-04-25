// https://www.redditstatic.com/desktop2x/MembershipPaywallPage.f2cc290c8031c297b184.js
// Retrieved at 4/25/2022, 12:50:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MembershipPaywallPage"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var i;
			i = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function i(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var n, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						o = /nexus\s*[0-6]\s*/i.test(t),
						c = !o && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						g = !r && !l && /macintosh/i.test(t),
						f = !a && !m && !u && !p && /linux/i.test(t),
						_ = i(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						x = s(/version\/(\d+(\.\d+)?)/i),
						v = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !v && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
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
					} : h ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, _ ? (n.msedge = e, n.version = _) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
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
						version: _
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || x
					} : m ? n = {
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
					} : u ? n = {
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
					} : a ? n = {
						name: "Android",
						version: x
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, x && (n.version = x)) : r ? (n = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, x && (n.version = x)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || x
					} : {
						name: s(/^(.*)\/(.*) /),
						version: i(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && x && (n.version = x)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !a && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : g ? (n.mac = e, n.osname = "macOS") : w ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : f && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var C = "";
					n.windows ? C = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? C = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? C = (C = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? C = (C = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? C = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? C = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? C = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? C = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (C = s(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (n.osversion = C);
					var E = !n.windows && C.split(".")[0];
					return v || c || "ipad" == r || a && (3 == E || E >= 4 && !y) || n.silk ? n.tablet = e : (y || "iphone" == r || "ipod" == r || a || o || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function i(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, i = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) i.push(t(e[s]));
					return i
				}

				function r(e) {
					for (var t = Math.max(i(e[0]), i(e[1])), s = n(e, (function(e) {
							var s = t - i(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, i, n) {
					var a = s;
					"string" == typeof i && (n = i, i = void 0), void 0 === i && (i = !1), n && (a = t(n));
					var o = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([o, e[c]]) < 0
						} return i
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var i = e[t];
						if ("string" == typeof i && i in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = r, s.check = function(e, t, s) {
					return !a(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = i() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", i)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, i, n) {
				return n(e, (function(e, n, r) {
					s = i ? (i = !1, e) : t(s, e, n, r)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var i = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), i(n(e), t, s)
			}
		},
		"./node_modules/lodash/flattenDeep.js": function(e, t, s) {
			var i = s("./node_modules/lodash/_baseFlatten.js"),
				n = 1 / 0;
			e.exports = function(e) {
				return (null == e ? 0 : e.length) ? i(e, n) : []
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var i = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return i(e) + t
			}
		},
		"./node_modules/shallowequal/index.js": function(e, t) {
			e.exports = function(e, t, s, i) {
				var n = s ? s.call(i, e, t) : void 0;
				if (void 0 !== n) return !!n;
				if (e === t) return !0;
				if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
				var r = Object.keys(e),
					a = Object.keys(t);
				if (r.length !== a.length) return !1;
				for (var o = Object.prototype.hasOwnProperty.bind(t), c = 0; c < r.length; c++) {
					var d = r[c];
					if (!o(d)) return !1;
					var l = e[d],
						m = t[d];
					if (!1 === (n = s ? s.call(i, l, m, d) : void 0) || void 0 === n && l !== m) return !1
				}
				return !0
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
			var i = s("./src/lib/currency/cleanNumber/index.ts");

			function n(e, t) {
				const s = Object(i.a)(e),
					n = parseInt(s) / 100;
				return Math.floor(n) !== n || t ? n.toFixed(2) : String(n)
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, s) {
			"use strict";

			function i(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			s.d(t, "a", (function() {
				return i
			}))
		},
		"./src/lib/currency/currencies.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			}));
			var i, n = s("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.Real = "real", e.Crypto = "crypto", e.Reddit = "reddit"
			}(i || (i = {}));
			const r = "USD",
				a = "ETH",
				o = "COINS",
				c = [a, "BTC"],
				d = [o, "SUBREDDIT_POINTS", "GAME_TOKENS"],
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
			var i = s("./node_modules/@reddit/i18n-tools/runtime/helpers/locale/constants.js"),
				n = s("./src/lib/currency/centsToDollars/index.ts"),
				r = s("./src/lib/currency/currencies.ts"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				o = s("./src/reddit/helpers/governance/tokens.ts"),
				c = s("./src/reddit/constants/intlSupport.ts");
			const d = function(e) {
					let {
						locale: t = i.DEFAULT_LOCALE,
						pretty: s,
						formatOptions: n
					} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const r = Number(e);
					return Object(c.c)() ? s ? Object(a.b)(r) : new Intl.NumberFormat(t, n).format(r) : m(r, s, t)
				},
				l = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
					const {
						locale: s = i.DEFAULT_LOCALE,
						pretty: a,
						formatOptions: d,
						displayConversion: l,
						forceDecimals: h,
						currency: b = t.currency || (t.type ? p(t.type) : r.c),
						type: g = t.type || (t.currency ? u(t.currency) : r.b.Real)
					} = t, f = Number(e), _ = String(e);
					switch (g) {
						case r.b.Reddit: {
							const e = r.e[b],
								t = e ? e() : b;
							return Object(c.c)() ? new Intl.NumberFormat(s, {
								currencyDisplay: "symbol",
								...d
							}).format(f) + " " + t : m(f, a, s, t)
						}
						case r.b.Crypto: {
							if (a) {
								return Object(o.c)(_, l) + " " + b
							}
							const e = Number(Object(o.b)(_, l));
							return Object(c.c)() ? new Intl.NumberFormat(s, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								minimumFractionDigits: 0,
								maximumFractionDigits: 0,
								...d
							}).format(e) : m(e, a, s, b)
						}
						case r.b.Real:
						default: {
							const e = Number(Object(n.a)(_, h));
							return Object(c.c)() ? new Intl.NumberFormat(s, {
								style: "currency",
								currency: b,
								currencyDisplay: "symbol",
								notation: a ? "compact" : "standard",
								...d
							}).format(e) : m(e, a, s, b)
						}
					}
				},
				m = (e, t, s, i) => {
					return (t ? Object(a.b)(e) : e.toLocaleString(s)) + (i ? " " + i : "")
				},
				u = e => r.g.includes(e.toUpperCase()) ? r.b.Reddit : r.f.includes(e.toUpperCase()) ? r.b.Crypto : r.b.Real,
				p = e => {
					switch (e) {
						case r.b.Crypto:
							return r.d;
						case r.b.Reddit:
							return r.a;
						case r.b.Real:
						default:
							return r.c
					}
				}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return n
			}));
			const i = e => {
					let t = 0,
						s = 0;
					const i = [0];
					for (const n of e) t++, s += n.length, i[t] = s;
					return i
				},
				n = e => {
					let t = 0,
						s = 0;
					const i = [];
					for (const n of e) {
						for (let e = 0; e < n.length; e++) i[s] = t, s++;
						t++
					}
					return i[s] = t, i
				}
		},
		"./src/reddit/actions/economics/subredditPremium/actionCreators.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "i", (function() {
				return b
			})), s.d(t, "j", (function() {
				return g
			}));
			var i = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/modal.ts"),
				r = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/actions/economics/subredditPremium/constants.ts");
			const o = Object(i.a)(a.a),
				c = Object(i.a)(a.b),
				d = Object(i.a)(a.c),
				l = Object(i.a)(a.d),
				m = Object(i.a)(a.e),
				u = Object(i.a)(a.f),
				p = Object(i.a)(a.g),
				h = Object(i.a)(a.h),
				b = Object(i.a)(a.i),
				g = e => Object(n.h)(r.a.SUBREDDIT_PREMIUM_UPLOAD_MODAL, {
					uploadAssetType: e
				})
		},
		"./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			const {
				fbt: r
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function a(e) {
				let {
					className: t
				} = e;
				return n.a.createElement("a", {
					href: "https://www.redditinc.com/policies/previews-terms",
					target: "_blank",
					rel: "noopener noreferrer",
					className: t
				}, r._("Previews Terms of Use", null, {
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
			var i, n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/localizeCurrency/index.ts"),
				d = s("./src/lib/prettyPrintNumber/index.ts"),
				l = s("./src/reddit/components/Governance/Token/index.tsx"),
				m = s("./src/reddit/helpers/governance/tokens.ts"),
				u = s("./src/reddit/hooks/useLocale.ts"),
				p = s("./src/reddit/selectors/crypto/points.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e[e.Monthly = 0] = "Monthly", e[e.Once = 1] = "Once"
			}(i || (i = {}));
			const b = (e, t) => {
					if (e) switch (t) {
						case i.Monthly:
							return h.fbt._("{price}/mo", [h.fbt._param("price", e)], {
								hk: "3npGvZ"
							});
						default:
							return e
					}
				},
				g = (e, t) => {
					if (e) switch (t) {
						case i.Monthly:
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
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = e => {
				let {
					subredditId: t,
					pointPrice: s
				} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(l.a, {
					className: _.a.token,
					subredditId: t
				}), s)
			};
			t.a = e => {
				const {
					className: t,
					hideTokenName: s,
					monthly: n,
					subredditId: l
				} = e, h = Object(u.a)(), f = Object(a.e)(e => Object(p.b)(e, l)), y = e.dollarPrice && Object(c.b)(e.dollarPrice, {
					locale: h,
					forceDecimals: !0
				}), w = e.tokenPrice && f && Object(d.a)(Object(m.b)(e.tokenPrice, null == f ? void 0 : f.displayConversion)) + (s ? "" : " " + f.name);
				if (!y && !w) return null;
				const C = n ? i.Monthly : i.Once;
				return r.a.createElement("span", {
					className: Object(o.a)(t, _.a.price)
				}, y && w ? x._("{dollar-price} or {point-price}", [x._param("dollar-price", b(y, C)), x._param("point-price", r.a.createElement(v, {
					subredditId: l,
					pointPrice: b(w, C)
				}))], {
					hk: "2Gif0l"
				}) : y ? g(y, C) : w ? r.a.createElement(v, {
					subredditId: l,
					pointPrice: g(w, C)
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				o = s("./src/reddit/actions/governance/errorToast.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/contexts/ApiContext.tsx"),
				l = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				m = s("./src/reddit/endpoints/governance/products/badges.ts"),
				u = s("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				h = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.m.less"),
				b = s.n(h);
			const g = "subreddit-premium-purchase-braintree";
			class f extends n.a.Component {
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
							purchaseFn: s => Object(m.d)(e, {
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
									...p.n(e),
									subreddit: p.gb(e)
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
					return n.a.createElement("div", {
						className: Object(a.a)(this.props.className, b.a.container)
					}, n.a.createElement("div", {
						className: Object(a.a)(b.a.button, {
							[b.a.loading]: this.state.loading,
							[b.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && n.a.createElement(l.a, {
						className: b.a.loadingIcon,
						sizePx: 16
					}))
				}
			}
			t.a = Object(d.b)(Object(r.b)(void 0, (e, t) => {
				let {
					subreddit: s
				} = t;
				return {
					onError: t => Object(o.a)(e, t)
				}
			})(Object(c.c)(f)))
		},
		"./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx": function(e, t, s) {
			"use strict";
			var i = s("./src/higherOrderComponents/makeAsync.tsx");
			const n = Object(i.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => s.e("SubredditPremiumBlockchainCheckoutModal").then(s.bind(null, "./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/index.tsx")).then(e => e.default)
			});
			t.a = n
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
			var i, n, r, a;

			function o(e) {
				const {
					platform: t,
					playerType: s,
					region: i,
					style: n
				} = e;
				return `https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/badges/lfg/lfg_badges_${n}/${i}_${t}_${s}_${n}.svg`
			}
			s.d(t, "a", (function() {
					return i
				})), s.d(t, "b", (function() {
					return n
				})), s.d(t, "c", (function() {
					return r
				})), s.d(t, "d", (function() {
					return o
				})),
				function(e) {
					e.pc = "PC", e.phone = "Phone", e.ps = "PlayStation", e.switch = "Switch", e.xbox = "XBox"
				}(i || (i = {})),
				function(e) {
					e.bot = "Bot", e.casual = "Casual", e.competitive = "Competitive", e.goat = "G.O.A.T", e.noob = "Noob"
				}(n || (n = {})),
				function(e) {
					e.asia = "Asia", e.brasil = "Brazil", e.europe = "Europe", e.me = "Middle East", e.nae = "North America East", e.naw = "North America West", e.oceania = "Oceania"
				}(r || (r = {})),
				function(e) {
					e.bw = "bw", e.color = "color"
				}(a || (a = {}))
		},
		"./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/fastdom/index.ts"),
				o = s("./src/reddit/components/Economics/Confetti/index.m.less"),
				c = s.n(o);
			const d = 250,
				l = 100;
			class m extends n.a.Component {
				constructor() {
					super(...arguments), this.el = void 0, this.numPieces = 0, this.setEl = e => {
						this.el = e, this.props.letItRain && this.renderConfetti()
					}, this.renderConfetti = () => {
						const e = this.el;
						if (!e) return;
						e.classList.add(c.a.container);
						const t = e.offsetWidth,
							s = e.offsetHeight;
						for (let i = 0; i < l; i++) this.createPiece(t, s);
						for (let i = 0; i < d - l; i++) window.setTimeout(() => this.createPiece(t, s), 1e4 * i / (d - l))
					}, this.createPiece = (e, t) => {
						a.a.write(() => {
							if (!this.el) return;
							const s = document.createElement("div"),
								i = (6 * Math.random() + 4) * t / 1e3;
							s.className = c.a.piece, s.style.width = 4 * Math.random() + 3 + "px", s.style.height = 6 * Math.random() + 3 + "px", s.style.transform = `rotate(${360*Math.random()}deg)`, this.el.appendChild(s), this.restartPiece(s, i, t, e), this.numPieces++
						})
					}, this.restartPiece = (e, t, s, i) => {
						if (this.el) {
							if (!this.props.letItRain) return e.parentNode.removeChild(e), this.numPieces--, void(this.numPieces || this.el.classList.remove(c.a.container));
							a.a.write(() => {
								e.style.transition = "", e.style.top = "0", e.style.left = Math.random() * i + "px", e.offsetHeight, e.style.transition = `top ${t}s ease-out, left ${t}s ease-out`
							}), setTimeout(() => {
								a.a.write(() => {
									e.style.top = s + "px", e.style.left = parseInt(e.style.left) + (400 * Math.random() - 200) + "px"
								})
							}, 0), setTimeout(() => this.restartPiece(e, t, s, i), 1e3 * t)
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
					return n.a.createElement("div", {
						ref: e => this.setEl(e),
						"aria-hidden": "true"
					})
				}
			}
			var u = s("./src/reddit/featureFlags/component.tsx"),
				p = s("./src/reddit/hooks/useSafeState.ts"),
				h = s("./src/reddit/selectors/economics.ts");
			t.a = Object(u.a)("spSpecialMemberships", (function(e) {
				const t = Object(i.useRef)(!0),
					[s, a] = Object(p.a)(!1, t),
					o = Object(r.e)(t => Object(h.x)(t, e.subredditId)),
					c = Object(i.useRef)(o);
				return Object(i.useEffect)(() => () => {
					t.current = !1
				}, []), Object(i.useEffect)(() => {
					c.current === h.a.NotSubscribed && o === h.a.Subscribed && (a(!0), setTimeout(() => {
						a(!1)
					}, 1e4)), c.current = o
				}, [o]), o === h.a.Subscribed ? n.a.createElement(m, {
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
				return p
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Bling/index.tsx"),
				o = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				c = s("./src/reddit/icons/svgs/Crown/index.tsx"),
				d = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				l = s("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.m.less"),
				m = s.n(l);
			const u = {
				regular: {
					bling1: m.a.bling1,
					bling2: m.a.bling2,
					bling3: m.a.bling3,
					container: m.a.container,
					crown: m.a.crown,
					crownImg: m.a.crownImg,
					defaultIcon: m.a.defaultIcon,
					icon: m.a.icon
				},
				large: {
					bling1: m.a.largeBling1,
					bling2: m.a.largeBling2,
					bling3: m.a.largeBling3,
					container: m.a.largeContainer,
					crown: m.a.largeCrown,
					crownImg: m.a.largeCrownImg,
					defaultIcon: m.a.largeDefaultIcon,
					icon: m.a.largeIcon
				}
			};

			function p(e) {
				const t = e.subreddit && (e.subreddit.communityIcon || e.subreddit.icon.url),
					s = u[e.size || "regular"],
					i = e.subreddit && e.subreddit.primaryColor;
				return n.a.createElement("div", {
					className: Object(r.a)(s.container, e.className)
				}, e.subreddit ? n.a.createElement("img", {
					className: s.crownImg,
					src: d.a
				}) : n.a.createElement(c.a, {
					className: s.crown
				}), n.a.createElement(a.a, {
					className: s.bling1
				}), n.a.createElement(a.a, {
					className: s.bling2
				}), n.a.createElement(a.a, {
					className: s.bling3
				}), t ? n.a.createElement("img", {
					className: s.icon,
					src: t,
					style: {
						backgroundColor: i
					}
				}) : n.a.createElement(o.a, {
					className: s.defaultIcon,
					style: {
						backgroundColor: i
					}
				}))
			}
		},
		"./src/reddit/components/Economics/SubredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./src/config.ts"),
				n = s("./node_modules/lodash/flattenDeep.js"),
				r = s.n(n),
				a = s("./src/reddit/components/Economics/SubredditPremium/LFGBanner/models.ts");
			const o = `${i.a.assetPath}/img/memberships/paywall/crown.gif`,
				c = {
					karma_10k_badge: 1e4,
					karma_20k_badge: 2e4,
					karma_50k_badge: 5e4,
					karma_100k_badge: 1e5,
					karma_150k_badge: 15e4,
					karma_200k_badge: 2e5
				},
				d = new Set(r()(Object.keys(a.a).map(e => Object.keys(a.b).map(t => Object.keys(a.c).map(s => `${s}_${e}_${t}_badge`)))))
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/FocusableContent/index.m.less"),
				c = s.n(o);
			t.a = a.a.wrapped(e => n.a.createElement("div", {
				className: Object(r.a)(e.className, {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/config.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/selectors/crypto/points.ts"),
				l = s("./src/reddit/components/Governance/Token/index.m.less"),
				m = s.n(l);
			const u = Object(a.c)({
				pointsDetails: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(d.b)(e, s)
				}
			});
			t.a = Object(r.b)(u)((function(e) {
				var t;
				const s = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!s) return null;
				const i = e.grey ? s.greyVector || s.grey : s.filledVector || s.filled,
					r = `${o.a.assetPath}/${i}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return n.a.createElement("div", {
						className: Object(c.a)(m.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return n.a.createElement("img", {
					className: e.className,
					src: r
				})
			}))
		},
		"./src/reddit/components/Governance/TransactionModals/SubscriptionModal/async.ts": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(i.a)({
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
			t.a = n
		},
		"./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return v
			})), s.d(t, "a", (function() {
				return y
			}));
			var i = s("./node_modules/lodash/debounce.js"),
				n = s.n(i),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/reddit/actions/usernameAvailable.ts"),
				m = s("./src/reddit/constants/colors.ts"),
				u = s("./src/reddit/controls/FormFields/index.tsx"),
				p = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				b = s("./src/reddit/icons/svgs/Info/index.tsx"),
				g = s("./src/reddit/icons/svgs/Nsfw/index.tsx"),
				f = s("./src/reddit/components/Governance/TransferPointsModal/Recipient/index.m.less"),
				_ = s.n(f),
				x = s("./node_modules/fbt/lib/FbtPublic.js");
			const v = 2,
				y = 20;
			var w;
			! function(e) {
				e[e.Empty = 0] = "Empty", e[e.Error = 1] = "Error", e[e.Invalid = 2] = "Invalid", e[e.Searching = 3] = "Searching", e[e.Valid = 4] = "Valid"
			}(w || (w = {}));
			class C extends a.a.PureComponent {
				constructor(e) {
					super(e), this.handleInputChange = e => {
						const t = e.currentTarget.value;
						t.length > v && this.props.onCheckUsername(t), this.setState({
							username: t
						})
					}, this.usernameValidity = e => {
						if (e && e.length > v) {
							switch (this.props.usernameAvailability[e]) {
								case l.b.Available:
									return w.Invalid;
								case l.b.Error:
									return w.Error;
								case l.b.Unavailable:
									return w.Valid;
								default:
									return w.Searching
							}
						}
						return w.Empty
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
						this.props.onChange(e, this.usernameValidity(e) === w.Valid)
					}
				}
				render() {
					const e = this.usernameValidity(this.state.username);
					return a.a.createElement("div", {
						className: Object(d.a)(_.a.container, this.props.className)
					}, a.a.createElement(u.c, {
						redditStyle: !0,
						className: _.a.input,
						label: x.fbt._("username", null, {
							hk: "2f1L4u"
						}),
						max: y,
						style: {
							borderColor: E(e)
						},
						tabIndex: this.props.tabIndex,
						type: "text",
						value: this.state.username,
						onChange: this.handleInputChange
					}), function(e) {
						switch (e) {
							case w.Error:
								return a.a.createElement(b.a, {
									className: _.a.icon,
									style: {
										fill: m.a.notice
									}
								});
							case w.Invalid:
								return a.a.createElement(g.a, {
									className: _.a.icon,
									style: {
										fill: m.a.warning
									}
								});
							case w.Searching:
								return a.a.createElement(p.a, {
									className: _.a.loadingIcon,
									sizePx: 8
								});
							case w.Valid:
								return a.a.createElement(h.a, {
									className: _.a.icon
								});
							default:
								return null
						}
					}(e), a.a.createElement("div", {
						className: _.a.message,
						style: {
							color: E(e)
						}
					}, function(e) {
						switch (e) {
							case w.Error:
								return x.fbt._("Could not check that username. Are you sure it's correct?", null, {
									hk: "1sNHpI"
								});
							case w.Invalid:
								return x.fbt._("Cannot find this username.", null, {
									hk: "Imvaj"
								});
							default:
								return ""
						}
					}(e)))
				}
			}

			function E(e) {
				switch (e) {
					case w.Error:
						return m.a.notice;
					case w.Invalid:
						return m.a.warning
				}
			}
			const k = Object(c.c)({
				usernameAvailability: e => e.users.nameAvailable
			});
			t.c = Object(o.b)(k, e => ({
				onCheckUsername: n()(t => e(Object(l.f)({
					username: t
				})), 250)
			}))(C)
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
				return y
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/selectors/tooltip.ts"),
				g = s("./src/reddit/components/OverflowMenu/index.m.less"),
				f = s.n(g);
			const _ = d.a.wrapped(u.a, "_Dropdown", f.a),
				x = Object(m.a)(_),
				v = d.a.button("MenuButton", f.a),
				y = d.a.wrapped(p.b, "DropdownRow", f.a),
				w = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(b.b)(s)(e)
					}
				}),
				C = Object(a.b)(w, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				E = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = C(e => r.a.createElement(v, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": i.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : r.a.createElement(h.a, {
				name: "overflow_horizontal",
				className: f.a.MenuIcon
			}), r.a.createElement(x, {
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
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/lodash/memoize.js"),
				a = s.n(r),
				o = s("./node_modules/lodash/throttle.js"),
				c = s.n(o),
				d = s("./node_modules/react/index.js"),
				l = s.n(d),
				m = s("./node_modules/react-redux/es/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/reddit/actions/toaster.ts"),
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
			var v = s("./src/reddit/icons/svgs/Close/index.tsx"),
				y = s("./src/reddit/models/Toast/index.ts"),
				w = s("./src/reddit/selectors/economics.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/components/RichTextEditor/helpers/common.ts"),
				k = s("./src/reddit/components/RichTextEditor/media/helpers.ts");
			let j;

			function N() {
				j || (j = fetch("https://meta.redditmedia.com/public/fortnitebr/giphy_blacklist.json").then(e => e.json()))
			}
			var I = s("./node_modules/lodash/debounce.js"),
				O = s.n(I),
				P = s("./src/reddit/icons/svgs/Search/index.tsx"),
				S = s("./src/reddit/selectors/user.ts"),
				M = s("./src/reddit/components/RichTextEditor/media/GifTooltip/SearchBox/index.m.less"),
				T = s.n(M);
			const R = 400;
			class L extends l.a.Component {
				constructor() {
					super(...arguments), this.elementRef = null, this.state = {
						query: ""
					}, this.onQueryChange = e => {
						this.setState({
							query: e.target.value
						}, this.dispatchOnChange)
					}, this.dispatchOnChange = O()(() => {
						this.props.onChange(this.state.query)
					}, R), this.focusOnInput = () => {
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
					return l.a.createElement("div", {
						className: Object(n.a)(T.a.searchBox, this.props.className)
					}, l.a.createElement("button", {
						className: T.a.searchIconButton,
						onClick: this.focusOnInput
					}, l.a.createElement(P.a, {
						className: T.a.searchIcon
					})), l.a.createElement("input", {
						ref: e => this.elementRef = e,
						type: "text",
						className: T.a.searchInput,
						placeholder: i.fbt._("Search GIFs", null, {
							hk: "3upjCv"
						}),
						value: t,
						onChange: this.onQueryChange
					}), t.length < 25 && l.a.createElement("div", {
						className: T.a.poweredByGiphy,
						style: {
							backgroundImage: `url(${g.a.assetPath}/img/memberships/${s}`
						},
						onClick: this.focusOnInput
					}))
				}
			}
			const B = Object(u.c)({
				isNightMode: S.eb
			});
			var F = Object(m.b)(B)(L),
				A = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.m.less"),
				z = s.n(A);
			const H = 4,
				V = a()((function() {
					const e = Object(f.a)("https://api.giphy.com/v1/gifs/trending", {
						api_key: g.a.giphyApiKey,
						rating: _
					});
					return fetch(e).then(x)
				}));
			class W extends l.a.Component {
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
							subreddit: this.props.subreddit.id ? C.hb(t, this.props.subreddit.id) : void 0,
							post: C.j(t),
							search: {
								query: e
							},
							...C.n(t)
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
							const t = C.n(e);
							return {
								...t,
								source: "meta",
								action: "select",
								noun: "gif_tooltip_result",
								correlationId: this.props.correlationId,
								subreddit: this.props.subreddit.id ? C.hb(e, this.props.subreddit.id) : void 0,
								post: C.j(e),
								actionInfo: {
									...t.actionInfo,
									reason: this.props.hasGifProduct ? "has-gif-product" : "gif-train"
								}
							}
						});
						const t = this.props.editorState,
							s = Object(k.k)(t, e.id, e.url, e.hasDownsizedImage, e.width, e.height, t.getSelection().getEndKey(), E.a.after);
						this.props.onChange(s), this.props.onClose()
					}
				}
				componentDidMount() {
					this.mounted = !0, !this.state.query && this.state.loading && this.loadTrendingGifs(), N()
				}
				componentWillUnmount() {
					this.mounted = !1
				}
				loadTrendingGifs() {
					V().then(e => {
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
							return N(), j.then(t => {
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
							this.mounted && (this.props.showErrorToast(i.fbt._("There was an error loading your GIF results. Please try again later.", null, {
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
						const i = this.getSimplifiedResult(e),
							n = s.reduce((e, t, i) => t < s[e] ? i : e, 0);
						t[n].push(i), s[n] += i.fixedWidthHeight + H
					});
					const i = e.pagination.offset + e.pagination.count;
					this.setState({
						columns: t,
						columnHeights: s,
						loading: !1,
						nextOffset: i < e.pagination.total_count ? i : null
					})
				}
				getSimplifiedResult(e) {
					const t = parseInt(e.images.fixed_width.height),
						s = e.images.downsized && e.images.downsized.url.indexOf("giphy-downsized.gif") > 0,
						i = s ? e.images.downsized : e.images.fixed_height;
					return {
						id: e.id,
						url: i.url,
						hasDownsizedImage: s,
						width: parseInt(i.width),
						height: parseInt(i.height),
						fixedWidthHeight: t
					}
				}
				render() {
					const {
						columns: e,
						loading: t
					} = this.state;
					return l.a.createElement("div", {
						className: z.a.tooltip
					}, l.a.createElement("div", {
						className: Object(n.a)(z.a.header, {
							[z.a.headerWithTitleLine]: !!this.props.title
						})
					}, this.props.title && l.a.createElement("div", {
						className: z.a.titleLine
					}, l.a.createElement("span", {
						className: z.a.title
					}, this.props.title), l.a.createElement(v.a, {
						className: z.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					})), l.a.createElement("div", {
						className: z.a.searchLine
					}, l.a.createElement(F, {
						autofocus: this.props.autofocus,
						onChange: this.onQueryChange,
						className: z.a.searchBox
					}), !this.props.title && l.a.createElement(v.a, {
						className: z.a.closeIcon,
						onClick: () => this.props.onClose(!0)
					}))), l.a.createElement("div", {
						className: z.a.body,
						onScroll: this.onScroll
					}, l.a.createElement("div", {
						className: Object(n.a)(z.a.results, {
							[z.a.disabled]: this.props.disabled
						})
					}, e.map((e, t) => l.a.createElement("div", {
						className: z.a.column,
						key: t
					}, e.map(e => l.a.createElement("button", {
						className: z.a.gifResult,
						key: e.url,
						onClick: () => this.onResultClick(e),
						style: {
							height: `${e.fixedWidthHeight}px`
						},
						disabled: this.props.disabled
					}, l.a.createElement("img", {
						className: z.a.gifResultImage,
						src: e.url
					})))))), t && l.a.createElement("div", {
						className: z.a.loadingSpinner
					}, l.a.createElement(b.a, {
						sizePx: 20,
						center: !0
					})), this.props.children, l.a.createElement("div", {
						className: z.a.whiteScrim
					})))
				}
			}
			const D = Object(u.c)({
				hasGifProduct: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(w.w)(e, s.id)
				}
			});
			t.a = Object(h.c)(Object(m.b)(D, e => ({
				showErrorToast: t => e(Object(p.f)({
					text: t,
					kind: y.b.Error,
					duration: 5e3
				}))
			}))(W))
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
			var i = s("./node_modules/lodash/clamp.js"),
				n = s.n(i),
				r = s("./node_modules/lodash/throttle.js"),
				a = s.n(r),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				d = s("./src/lib/fastdom/index.ts"),
				l = s("./src/reddit/components/Scroller/getDocumentTop.ts"),
				m = s("./src/reddit/components/Scroller/Simple.tsx");
			const u = (() => {
					const e = new Map,
						t = {
							get: t => e.get(t) || [],
							add: (s, i) => {
								const n = t.get(s);
								return e.set(s, n.concat(i)), t
							},
							remove: (s, i) => {
								const n = t.get(s);
								return e.set(s, n.filter(e => e !== i)), t
							}
						};
					return t
				})(),
				p = (() => {
					const e = e => a()(() => {
							d.a.read(() => {
								const t = (e => Object(m.a)(e) ? Object(l.a)() : e.scrollTop)(e);
								u.get(e).forEach(e => e(t))
							})
						}, 16),
						t = new Map;
					return {
						on: (s, i) => {
							if (!u.get(s).length) {
								const i = e(s);
								t.set(s, i), s.addEventListener("scroll", i)
							}
							u.add(s, i)
						},
						off: (e, s) => {
							if (u.remove(e, s), !u.get(e).length) {
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
							i = this.props.scrollRange[1],
							r = n()(e, s, i),
							a = Math.min(Math.floor((r - s) / (i - s) * 1e3), 999);
						return {
							...t,
							styles: {
								...t.styles,
								animationDelay: `-${a}s`
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
		"./src/reddit/components/Scroller/Simple.m.less": function(e, t, s) {
			e.exports = {
				Hidden: "wwHbgRV0ZXGp5CHHlpo5u",
				hidden: "wwHbgRV0ZXGp5CHHlpo5u"
			}
		},
		"./src/reddit/components/Scroller/Simple.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return X
			}));
			var i = s("./node_modules/lodash/debounce.js"),
				n = s.n(i),
				r = s("./node_modules/lodash/isNil.js"),
				a = s.n(r),
				o = s("./node_modules/react/index.js"),
				c = s.n(o),
				d = s("./node_modules/react-dom/index.js"),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./node_modules/request-idle-callback/index.js"),
				u = s("./node_modules/reselect/es/index.js"),
				p = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/fastdom/index.ts"),
				b = s("./node_modules/lodash/throttle.js"),
				g = s.n(b);
			const f = 500,
				_ = 1e3,
				x = 40;
			var v;
			! function(e) {
				e.Max10 = "0-10", e.Max20 = "11-20", e.Max30 = "21-30", e.Max40 = "31-40", e.Max50 = "41-50", e.Max60 = "51-60"
			}(v || (v = {}));
			const y = () => ({
					[v.Max10]: 0,
					[v.Max20]: 0,
					[v.Max30]: 0,
					[v.Max40]: 0,
					[v.Max50]: 0,
					[v.Max60]: 0
				}),
				w = [v.Max10, v.Max20, v.Max30, v.Max40, v.Max50, v.Max60],
				C = e => ({
					eventHandler: e
				});

			function E(e) {
				let {
					fn: t,
					subscriber: s,
					timeout: i
				} = e;
				const n = [];
				let r, a, o;
				const c = () => {
						if (n.length < x) return;
						const e = y(),
							t = Math.min(_, n.length),
							i = n.splice(0, t);
						n.splice(0, n.length);
						const r = i[t - 1] - i[0];
						for (let s = i.shift(); i.length > 0; s = i.shift()) {
							const t = i[0] - s,
								n = Math.min(60, Math.ceil(1e3 / t));
							e[n <= 10 ? v.Max10 : 60 === n ? v.Max60 : w[Math.ceil(n / 10) - 1]] += t
						}
						const a = y();
						for (const s in e) a[s] = e[s] / r;
						s(a)
					},
					d = () => {
						void 0 !== o && (window.clearTimeout(o), o = void 0)
					},
					l = () => {
						void 0 !== r && (cancelAnimationFrame(r), r = void 0), void 0 !== a && (window.clearInterval(a), a = void 0), d(), c()
					},
					m = () => {
						r = requestAnimationFrame(() => {
							n.push(performance.now()), m()
						})
					},
					u = g()(() => {
						d(), o = window.setTimeout(l, i)
					}, p.L);
				return {
					cleanup: l,
					eventHandler: e => {
						void 0 === a ? (m(), u(), a = window.setInterval(c, f)) : u(), t(e)
					}
				}
			}
			var k = s("./src/lib/scheduler/index.ts"),
				j = s("./src/lib/domUtils/index.ts"),
				N = s("./src/lib/LinkedListMap/index.ts");
			const I = (e, t) => e < 0 ? t + e : e % t;
			class O {
				constructor(e) {
					this.head = 0, this.size = 0, this.maxSize = e, this.items = new Array(e)
				}
				push(e) {
					return this.items[this.head] = e, this.head = I(this.head + 1, this.maxSize), this.size < this.maxSize && this.size++, this
				}
				pop() {
					if (this.size > 0) {
						const e = I(this.head - 1, this.maxSize),
							t = this.items[e];
						return this.items[e] = void 0, this.head = e, this.size--, t
					}
				}
				forEach(e) {
					let t = this.size < this.maxSize ? I(this.head - this.size, this.maxSize) : this.head;
					for (let s = 0; s < this.size; s++) e(this.items[t], s, this.size), t = (t + 1) % this.maxSize
				}
				map(e) {
					const t = new Array(this.size);
					return this.forEach((s, i, n) => {
						t[i] = e(s, i, n)
					}), t
				}
				getEntries() {
					const e = new Array(this.size);
					return this.forEach((t, s) => {
						e[s] = t
					}), e
				}
				clear() {
					const e = this.size;
					for (let t = 0; t < e; t++) this.pop()
				}
			}
			var P = s("./src/reddit/components/Scroller/getDocumentTop.ts");
			class S {
				constructor(e) {
					let {
						top: t,
						height: s,
						heightWithSuffix: i
					} = e;
					this.height = s, this.heightWithSuffix = i, this.top = t, this.bottom = this.top + this.height
				}
				contains(e) {
					return !(e.top <= this.top || e.bottom >= this.bottom)
				}
				intersects(e) {
					return !(e.bottom <= this.top || e.top >= this.bottom)
				}
				intersectsBorder(e) {
					return e.top <= this.top && e.bottom >= this.top || e.bottom >= this.bottom && e.top <= this.bottom
				}
				containsTop(e) {
					return !(e.top < this.top || e.top > this.bottom)
				}
				isAbove(e) {
					return e.top > this.bottom
				}
				isBelow(e) {
					return e.bottom < this.top
				}
			}
			const M = function() {
				let {
					buffer: e,
					container: t
				} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				const s = a()(e) ? 1e3 : e;
				if ("undefined" != typeof window && t) {
					const e = t === document ? Object(P.a)() : t.scrollTop;
					return new S({
						top: e,
						height: window.innerHeight
					})
				}
				return new S({
					top: 0,
					height: s
				})
			};
			var T = s("./src/reddit/components/ResizeSensor/index.tsx"),
				R = s("./src/reddit/constants/componentSizes.ts"),
				L = s("./src/reddit/constants/elementClassNames.ts"),
				B = s("./src/reddit/contexts/InsideOverlay.tsx"),
				F = s("./src/reddit/selectors/platform.ts"),
				A = s("./src/telemetry/helpers/sendEvent.ts"),
				z = s("./src/telemetry/helpers/sendTiming.ts"),
				H = s("./src/reddit/components/Scroller/Simple.m.less"),
				V = s.n(H);
			const W = R.g,
				D = 5 * p.L,
				G = 3,
				U = Object(u.c)({
					isOverlayOpen: F.i
				}),
				Z = Object(l.b)(U),
				q = {};

			function X(e) {
				return e === document
			}

			function K(e) {
				let t = 0;
				do {
					t += e.offsetTop || 0, e = e.offsetParent
				} while (e);
				return t
			}
			const Y = 10,
				J = .9,
				Q = .9,
				$ = 1.8,
				ee = 5,
				te = 1500,
				se = 2 * p.L,
				ie = 400,
				ne = 8,
				re = 5 * p.L,
				ae = 30,
				oe = "object" == typeof performance && "function" == typeof performance.now,
				ce = () => oe ? performance.now() : Date.now();

			function de(e, t) {
				return N.a.fromArray(e.children.map((e, s) => {
					const i = t && t.get(e.id);
					return i ? (i.isFocusable = !!e.isFocusable, i.trackOnEnteredViewport = e.trackOnEnteredViewport, i.trackOnExitedViewport = e.trackOnExitedViewport, i) : {
						el: null,
						id: e.id,
						index: s,
						isFocusable: !!e.isFocusable,
						itemRef: void 0,
						focused: !1,
						loaded: !t && s < ee,
						rectangle: void 0,
						trackOnEnteredViewport: e.trackOnEnteredViewport,
						trackOnExitedViewport: e.trackOnExitedViewport
					}
				}), "id")
			}
			class le extends c.a.Component {
				constructor(e) {
					var t;
					super(e), t = this, this.lastRenderPosition = 0, this.lastScrollTime = -1, this.resetCanFocusTimer = -1, this.unmountItemsIdleId = null, this.scrollingQuickly = !1, this.visibleChildrenCount = 0, this.isRenderableChildrenStateChangePending = !1, this.parentOffsetTop = void 0, this.containerOffsetTop = void 0, this.distanceToTop = void 0, this.measurementsInvalid = !1, this.viewport = void 0, this.mountableViewport = void 0, this.needsToPauseViewportItems = !0, this.updateRenderableChildrenWhenIdleHandle = null, this.requestUpdateWhenIdleCallbackHandle = null, this.pendingScollHandlerRead = null, this.pendingResizeHandlerRead = null, this.renderableViewport = void 0, this.sendFPSData = e => {
						const t = {
							name: this.props.trackingName
						};
						A.b.enqueue(new k.a({
							args: [e, t],
							cb: (e, t) => Object(z.a)(p.n.Redesign, {
								data: e,
								meta: t,
								type: "scrollfps"
							})
						}))
					}, this.getVisibleChildren = () => {
						let e = 0;
						const t = te + (this.props.viewportTopPadding ? this.props.viewportTopPadding : 0),
							s = [];
						let i = this.nextVisibleChildrenIndex;
						for (; e < t && i < this.props.children.length;) {
							const t = this.props.children[i];
							s.push(t), e += t.estHeight, i++
						}
						return this.visibleChildrenCount = s.length, s
					}, this.setRenderableChildrenIndexIncrement = () => {
						if (this.props.children[0]) {
							const e = this.props.children[0].estHeight;
							this.renderableChildrenIndexIncrement = Math.min(Math.ceil(ie / e), ne)
						} else this.renderableChildrenIndexIncrement = ne
					}, this.updateRenderableChildrenWhenIdle = () => {
						this.cancelPopulateRenderableChildrenWhenIdle(), this.hasScrolledWithinThreshold() || (this.timeoutForUpdateIdleCallback = re, Object(m.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle), this.requestUpdateWhenIdleCallbackHandle = Object(m.requestIdleCallback)(() => {
							const e = Math.ceil(this.renderableChildrenIndexIncrement / 2);
							this.populateRenderableChildrenFromProps(!1, e)
						})), this.state.renderableChildren.length < this.props.children.length && this.schedulePopulateRenderableChildrenWhenIdle()
					}, this.hasScrolledWithinThreshold = () => !!this.lastScrollTime && ce() - this.lastScrollTime < se, this.populateRenderableChildrenFromProps = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
							s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.renderableChildrenIndexIncrement,
							i = arguments.length > 2 ? arguments[2] : void 0;
						const n = i || t.props.children;
						if (t.state.renderableChildren.length < n.length || e)
							if (t.hasScrolledWithinThreshold()) h.a.read(() => {
								clearTimeout(t.updateRenderableChildrenHandle), t.updateRenderableChildrenHandle = setTimeout(() => {
									t.populateRenderableChildrenFromProps(e, t.renderableChildrenIndexIncrement, i ? n : void 0)
								}, se)
							});
							else {
								t.nextVisibleChildrenIndex + s <= n.length ? t.nextVisibleChildrenIndex += s : t.nextVisibleChildrenIndex = n.length;
								const e = n.slice(0, t.nextVisibleChildrenIndex);
								e.length && (t.lastVisibleElId = e[e.length - 1].id), h.a.write(() => {
									t.setState({
										renderableChildren: e
									})
								}), t.isRenderableChildrenStateChangePending = !0
							}
					}, this.lastElementIsAboutToBeVisible = () => {
						if (this.lastVisibleEl) {
							if (this.lastVisibleEl.getBoundingClientRect().top < window.innerHeight + ie) return !0
						}
						return !1
					}, this.getRenderableChildrenIndexIncrement = function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ae,
							s = 0,
							i = t.state.renderableChildren.length;
						for (; s < e && i < t.props.children.length;) s += t.props.children[i].estHeight, i++;
						const n = i - t.state.renderableChildren.length;
						return Math.max(t.renderableChildrenIndexIncrement, n)
					}, this.schedulePopulateRenderableChildrenWhenIdle = () => {
						!this.props.isOverlayOpen || this.props.isOverlay ? this.updateRenderableChildrenWhenIdleHandle = setTimeout(() => {
							this.updateRenderableChildrenWhenIdle()
						}, this.timeoutForUpdateIdleCallback) : this.cancelPopulateRenderableChildrenWhenIdle()
					}, this.cancelPopulateRenderableChildrenWhenIdle = () => {
						clearTimeout(this.updateRenderableChildrenWhenIdleHandle), Object(m.cancelIdleCallback)(this.requestUpdateWhenIdleCallbackHandle)
					}, this.callOnScrollForItemsChanged = n()(() => {
						this.handleScroll()
					}, p.L), this.pauseAllElements = () => {
						const e = this.getItemsInViewportWithFilter(this.loadedChildRefFilter),
							t = [];
						e.forEach(e => {
							const {
								itemRef: s
							} = e;
							s && (e.focused = !1, t.push(s.pauseContent))
						}), h.a.write(() => {
							t.forEach(e => e())
						})
					}, this.elementIsVisible = e => !!this.viewport && this.viewport.intersects(e), this.getItemsInViewportWithFilter = e => {
						this.updateViewportInfo();
						const t = new N.a("id");
						return this.state.renderableChildren.forEach(s => {
							const i = this.childMap.get(s.id);
							i && e(i) && t.push(i)
						}), t
					}, this.visibleChildRefFilter = e => {
						const t = this.getChildRectangle(e);
						return t && this.elementIsVisible(t) || !1
					}, this.loadedChildRefFilter = e => e.loaded, this.resetScrollFramerateAndFocus = () => {
						this.scrollContainer && (this.pixelsPerMSRing.clear(), this.lastScrollTime = -1, this.needsToPauseViewportItems = !0, null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle)), setTimeout(this.handleScroll, p.L))
					}, this.setContainerRef = e => {
						this.containerRef = e, this.props.innerRef && this.props.innerRef(e)
					}, this.getChildRectangle = e => {
						const {
							el: t
						} = e;
						if (!t) return;
						if (e.rectangle && !this.measurementsInvalid) return e.rectangle;
						if (void 0 === this.parentOffsetTop) {
							const e = t.offsetParent;
							this.parentOffsetTop = (null == e ? void 0 : e.offsetTop) || 0;
							const s = (null == e ? void 0 : e.getBoundingClientRect().top) || 0;
							this.distanceToTop = s + this.getScrollTop()
						}
						const s = t.offsetTop + this.parentOffsetTop,
							i = t.getBoundingClientRect().height,
							n = new S({
								top: s,
								height: i,
								heightWithSuffix: `${i}px`
							});
						return e.rectangle = n, n
					}, this.handleResize = e => {
						this.fpsMeter && this.fpsMeter.eventHandler(e);
						for (const t in this.hiddenChildren) this.remeasureWhenShown[t] = !0;
						this.measurementsInvalid = !0, this.callOnScrollForItemsChanged()
					}, this.getTotalOffsetTop = () => this.containerRef ? K(this.containerRef) : 0, this.handleContentContainerResize = n()(() => {
						this.pendingResizeHandlerRead || (this.pendingResizeHandlerRead = h.a.read(() => {
							const e = this.getTotalOffsetTop();
							e !== this.containerOffsetTop && (this.containerOffsetTop = e, this.handleResize()), this.pendingResizeHandlerRead = null
						}))
					}, p.L), this.handleScroll = () => {
						this.pendingScollHandlerRead || (this.pendingScollHandlerRead = h.a.read(() => {
							if (clearTimeout(this.resetCanFocusTimer), this.cancelPopulateRenderableChildrenWhenIdle(), Object(j.b)() || !this.scrollContainer) return void(this.pendingScollHandlerRead = null);
							this.updateScrollMetrics();
							const e = this.getAveragePixelsPerMilliSecond(),
								t = e < J,
								s = e < Q,
								i = e < $;
							if (this.scrollContainer && !this.loadMoreFired && this.props.onLoadMore) {
								let e = !1;
								if (void 0 !== this.props.loadMoreToken && void 0 !== this.viewport && this.nextVisibleChildrenIndex >= this.props.children.length) {
									const t = this.getTotalOffsetTop();
									e = !!this.containerRef && this.containerRef.offsetHeight + t - this.viewport.bottom <= this.viewport.height
								}
								if (e) {
									const {
										onLoadMore: e
									} = this.props;
									setTimeout(e), this.loadMoreFired = !0
								}
							}
							this.populateRenderableChildrenIfLastChildIsVisible();
							const n = new N.a("id");
							let r, a;
							const o = [];
							this.state.renderableChildren.forEach(e => {
								const c = this.childMap.get(e.id);
								let d;
								if (c && c.el) {
									if (!(d = this.getChildRectangle(c))) return;
									const {
										id: e
									} = c;
									this.elementIsHideable(d) ? void 0 === this.hiddenChildren[e] && (this.childrenToHide[e] = d.heightWithSuffix) : void 0 !== this.hiddenChildren[e] && (this.childrenToShow[e] = !0)
								}
								if (!c || !c.el || !c.rectangle) return void(this.measurementsInvalid && c && this.getChildRectangle(c));
								const {
									id: l,
									itemRef: m,
									trackOnEnteredViewport: u
								} = c, p = !!this.itemsInViewport.get(l);
								if (this.elementIsUnmountable(d)) m && p && c.loaded && c.isFocusable && o.push(m.pauseContent);
								else if (m && this.loadItemIfPossible(c, m, t, s, i, o), this.elementIsVisible(d)) {
									n.push(c), !p && u && A.b.enqueue(new k.a({
										cb: u,
										args: void 0
									}));
									const e = this.elementIsFocused(d);
									e && !a && (a = c.id), t && c.isFocusable && !r && e ? (r = c.id, c.focused || (c.focused = !0, m && o.push(m.focusContent))) : c.loaded && c.isFocusable && (c.focused || this.needsToPauseViewportItems) && (c.focused = !1, m && o.push(m.pauseContent))
								} else p && c.loaded && c.isFocusable && (c.focused = !1, m && o.push(m.stopContent))
							}), h.a.write(() => {
								o.forEach(e => e()), this.props.enableElementHiding && this.hideOrShowChildren()
							}), this.itemsInViewport.forEach(e => {
								let {
									id: t,
									trackOnExitedViewport: s
								} = e;
								s && !n.has(t) && A.b.enqueue(new k.a({
									cb: s,
									args: [!1]
								}))
							}), this.itemsInViewport = n, this.canFocusItems = t, this.focusedChild = r, this.primaryChild = a, this.measurementsInvalid = !1, this.needsToPauseViewportItems = !1, t ? null === this.unmountItemsIdleId && (this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle)) : (this.resetCanFocusTimer = setTimeout(this.resetScrollFramerateAndFocus, D), null !== this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)), this.props.onScroll && this.props.onScroll({
								getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
								primaryChild: this.primaryChild ? this.childMap.get(this.primaryChild) : void 0
							}), this.timeoutForUpdateIdleCallback = 4 * re, this.schedulePopulateRenderableChildrenWhenIdle(), this.pendingScollHandlerRead = null
						}))
					}, this.unmountItemsWhileIdle = e => {
						if (!this.scrollContainer) return;
						const t = [];
						if (this.state.renderableChildren.forEach(e => {
								const s = this.childMap.get(e.id);
								if (!s || !s.el || !s.itemRef) return;
								const i = this.getChildRectangle(s);
								i && this.elementIsUnmountable(i) && s.loaded && t.push(s)
							}), !t.length) return;
						const s = Math.min(Math.ceil(e.timeRemaining() / G), t.length),
							i = [];
						for (let n = 0; n < s; n++) {
							const e = t[n];
							i.push(e.itemRef.unmountContent), e.loaded = !1, e.focused = !1
						}
						Object(d.unstable_batchedUpdates)(() => {
							this.scrollContainer && i.forEach(e => e())
						}), s < t.length ? this.unmountItemsIdleId = Object(m.requestIdleCallback)(this.unmountItemsWhileIdle) : this.unmountItemsIdleId = null
					}, this.hideOrShowChildren = n()(() => {
						for (const e in this.childrenToHide) {
							const t = this.childrenToHide[e];
							void 0 !== t && (this.hideChild(e, t), this.childrenToHide[e] = void 0)
						}
						for (const e in this.childrenToShow) void 0 !== this.childrenToShow[e] && (this.showChild(e), this.childrenToShow[e] = void 0)
					}, p.L), this.hideChild = (e, t) => {
						const s = this.childMap.get(e);
						if (!s || !s.el) return;
						const i = s.el.firstChild;
						i && (t !== s.el.style.height && (s.el.style.height = t), i.classList.add(V.a.Hidden), this.hiddenChildren[e] = t, s.loaded && h.a.write(() => {
							s.itemRef && (s.loaded = !1, s.focused = !1, s.itemRef.unmountContent())
						}))
					}, this.showChild = e => {
						const t = this.childMap.get(e);
						if (!t || !t.el) return;
						const s = t.el.firstChild;
						s && (this.remeasureWhenShown[t.id] && (this.measurementsInvalid = !0, this.remeasureWhenShown[t.id] = void 0), t.el.style.height = "", s.classList.remove(V.a.Hidden), void 0 !== this.hiddenChildren[e] && (this.hiddenChildren[e] = void 0))
					}, this.getStylesForOuterWrapper = e => {
						if (void 0 !== this.hiddenChildren[e]) return {
							height: this.hiddenChildren[e]
						}
					}, this.remeasureChild = e => {
						this.measurementsInvalid = !0
					}, this.scrollToChild = (e, t) => {
						this.measurementsInvalid = !0, h.a.read(() => {
							const s = this.childMap.get(e);
							if (s && s.el && this.scrollContainer) {
								if (s.rectangle = void 0, t && this.isScrollChildTopVisible(e)) return;
								const i = this.getScrollTop() + s.el.getBoundingClientRect().top - (this.props.scrollToChildPadding || 0) - (this.props.viewportTopPadding || 0);
								setTimeout(() => {
									this.scrollContainer && (Object(j.c)(this.scrollContainer, i), this.callOnScrollForItemsChanged())
								}, p.L)
							}
						})
					}, this.isScrollChildTopVisible = e => {
						const t = this.childMap.get(e);
						if (t && t.el && this.scrollContainer) {
							const {
								scrollToChildPadding: e = 0,
								viewportTopPadding: s = 0
							} = this.props, i = window.innerHeight - s, {
								top: n
							} = t.el.getBoundingClientRect();
							return n >= s + e && n < i
						}
						return !1
					}, this.childMap = de(e), this.containerRef = null, this.itemsInViewport = new N.a("id"), this.loadMoreFired = !1, this.pixelsPerMSRing = new O(Y), this.wrapperRefFNs = {}, this.childRefFns = {}, this.childrenToHide = {}, this.childrenToShow = {}, this.canFocusItems = !0, this.focusedChild = void 0, this.hiddenChildren = {}, this.nextVisibleChildrenIndex = 0, this.lastVisibleEl = null, this.lastVisibleElId = null, this.remeasureWhenShown = {}, this.timeoutForUpdateIdleCallback = re;
					const s = this.getVisibleChildren();
					s.length && (this.lastVisibleElId = s[s.length - 1].id), this.nextVisibleChildrenIndex = s.length, this.updateRenderableChildrenHandle = null, this.state = {
						renderableChildren: s
					}, this.setRenderableChildrenIndexIncrement(), this.validateScrollPreservationProps(e), this.validateLoadMoreProps(e)
				}
				hasRenderedAllChildren() {
					return !(this.state.renderableChildren.length < this.props.children.length) && (this.props.onAllChildrenRendered && this.props.onAllChildrenRendered(), !0)
				}
				populateRenderableChildrenIfLastChildIsVisible() {
					this.isRenderableChildrenStateChangePending || this.hasRenderedAllChildren() || h.a.read(() => {
						if (!this.isRenderableChildrenStateChangePending && this.lastElementIsAboutToBeVisible()) {
							const e = this.getRenderableChildrenIndexIncrement();
							this.populateRenderableChildrenFromProps(!1, e)
						}
					})
				}
				setupScrollHandler() {
					this.fpsMeter = this.props.trackingName ? E({
						fn: this.handleScroll,
						subscriber: this.sendFPSData,
						timeout: D
					}) : C(this.handleScroll), this.scrollContainer && this.scrollContainer.addEventListener("scroll", this.fpsMeter.eventHandler), window.addEventListener("resize", this.handleResize)
				}
				cleanupScrollHandler() {
					this.fpsMeter && ("function" == typeof this.fpsMeter.cleanup && this.fpsMeter.cleanup(), this.scrollContainer && this.scrollContainer.removeEventListener("scroll", this.fpsMeter.eventHandler), window.removeEventListener("resize", this.handleResize), this.pendingScollHandlerRead && (h.a.clear(this.pendingScollHandlerRead), this.pendingScollHandlerRead = null), this.pendingResizeHandlerRead && (h.a.clear(this.pendingResizeHandlerRead), this.pendingResizeHandlerRead = null))
				}
				componentDidMount() {
					this.props.getContainer ? this.scrollContainer = this.props.getContainer() || document : this.scrollContainer = document, this.props.onScroll && this.props.onScroll({
						getVisibleItemsInViewport: () => this.getItemsInViewportWithFilter(this.visibleChildRefFilter),
						primaryChild: void 0
					}), this.props.disableScrollCache && !this.props.preventScrollOnMount && Object(j.c)(this.scrollContainer, 0), this.setupScrollHandler(), h.a.write(() => {
						if (!this.props.disableScrollCache) {
							const e = this.getCacheKey(),
								t = q[e];
							a()(t) || (q[e] = void 0, this.scrollContainer && Object(j.c)(this.scrollContainer, t))
						}
						this.callOnScrollForItemsChanged(), this.props.onLastVisibleChildRendered && this.props.onLastVisibleChildRendered()
					}), h.a.read(() => {
						this.containerOffsetTop = this.getTotalOffsetTop()
					}), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentDidUpdate(e) {
					if (this.isRenderableChildrenStateChangePending = !1, this.measurementsInvalid = !0, this.scrollTargetId && (this.scrollToChild(this.scrollTargetId, !1), this.scrollTargetId = void 0), this.didLayoutAloneChange(e, this.props)) {
						this.callExitedViewportForUnmount(), this.focusedChild = void 0, this.childrenToShow = {}, this.childrenToHide = {}, this.hiddenChildren = {}, this.childMap.forEach(e => {
							e.loaded = !1, e.focused = !1
						}), this.setRenderableChildrenIndexIncrement(), this.populateRenderableChildrenFromProps(!0), this.callOnScrollForItemsChanged();
						const e = this.getVisibleChildren();
						this.visibleChildrenCount = e.length, this.schedulePopulateRenderableChildrenWhenIdle()
					}
					this.populateRenderableChildrenIfLastChildIsVisible(), e.trackingName !== this.props.trackingName && (this.cleanupScrollHandler(), this.setupScrollHandler())
				}
				shouldComponentUpdate(e) {
					return e.isOverlayOpen === this.props.isOverlayOpen
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.validateScrollPreservationProps(e) && this.validateLoadMoreProps(e) && this.didLayoutAloneChange(this.props, e) && this.hasBeenScrolled() && this.handleScroll(), e.loadMoreToken !== this.props.loadMoreToken && (this.loadMoreFired = !1, this.loadMoreEl = null), e.isOverlayOpen !== this.props.isOverlayOpen && e.isOverlayOpen && !this.props.isOverlay && h.a.read(this.pauseAllElements), e.isOverlayOpen === this.props.isOverlayOpen || e.isOverlayOpen || this.props.isOverlay || this.resetScrollFramerateAndFocus(), this.childMap = de(e, this.childMap);
					const t = e.children.length < this.props.children.length,
						s = e.children.length === this.props.children.length && e.children.some((e, t) => e.id !== this.props.children[t].id);
					this.populateRenderableChildrenFromProps(t || s, this.renderableChildrenIndexIncrement, e.children), this.schedulePopulateRenderableChildrenWhenIdle()
				}
				componentWillUnmount() {
					if (this.callExitedViewportForUnmount(), this.cleanupScrollHandler(), clearTimeout(this.updateRenderableChildrenHandle), this.cancelPopulateRenderableChildrenWhenIdle(), this.scrollContainer && !this.props.disableScrollCache) {
						const e = this.getCacheKey();
						q[e] = this.lastRenderPosition
					}
					this.childMap = new N.a("id"), this.itemsInViewport = new N.a("id"), this.wrapperRefFNs = {}, this.childRefFns = {}, this.containerRef = null, this.loadMoreEl = void 0, this.scrollContainer = void 0, this.unmountItemsIdleId && (Object(m.cancelIdleCallback)(this.unmountItemsIdleId), this.unmountItemsIdleId = null)
				}
				didLayoutAloneChange(e, t) {
					return "string" == typeof e.layoutKey && "string" == typeof t.layoutKey && e.layoutKey !== t.layoutKey && "string" == typeof e.dataKey && "string" == typeof t.layoutKey && e.dataKey === t.dataKey
				}
				elementIsFocused(e) {
					if (!this.viewport) return !1;
					const t = this.distanceToTop ? this.distanceToTop : 0,
						s = this.parentOffsetTop ? this.parentOffsetTop : 0,
						i = e.bottom + t - s,
						n = e.top + t - s,
						r = Math.min(this.viewport.bottom, i) - Math.max(this.viewport.top, n),
						a = r / e.height,
						o = r / this.viewport.height;
					return a > .75 || o > .9
				}
				getFirstItemInViewport() {
					for (const {
							id: e
						} of this.props.children) {
						const t = this.childMap.get(e);
						if (t) {
							const e = this.getChildRectangle(t);
							if (e && this.elementIsVisible(e)) return t
						}
					}
				}
				elementIsUnmountable(e) {
					return !!this.mountableViewport && !this.mountableViewport.intersects(e)
				}
				elementIsHideable(e) {
					return !!this.renderableViewport && !this.renderableViewport.intersects(e)
				}
				getCacheKey() {
					return this.props.children.map(e => e.id).join("-")
				}
				getScrollTop() {
					return this.scrollContainer ? X(this.scrollContainer) ? Object(P.a)() : this.scrollContainer.scrollTop : 0
				}
				updateViewportInfo() {
					if (this.scrollContainer) {
						this.viewport = M({
							buffer: 0,
							container: this.scrollContainer
						});
						const {
							viewportTopPadding: e = 0
						} = this.props, t = window.innerHeight - e, s = 2 * t;
						this.mountableViewport = new S({
							top: this.viewport.top - s,
							height: this.viewport.height + 2 * s
						});
						const i = 4 * t;
						this.renderableViewport = new S({
							top: this.viewport.top - i,
							height: this.viewport.height + 2 * i
						})
					}
				}
				updateScrollMetrics() {
					this.updateViewportInfo();
					const e = ce(),
						t = this.getScrollTop(),
						s = Math.abs(this.lastRenderPosition - t),
						i = e - this.lastScrollTime,
						n = this.lastScrollTime > -1;
					this.lastScrollTime = e, this.lastRenderPosition = t, n ? this.pixelsPerMSRing.push(s / i) : this.lastScrollTime = e
				}
				getAveragePixelsPerMilliSecond() {
					if (this.pixelsPerMSRing.size > 1) {
						let e = 0;
						return this.pixelsPerMSRing.forEach(t => e += t), e / this.pixelsPerMSRing.size
					}
					return 0
				}
				_wrapperRefFN(e, t) {
					const s = this.childMap.get(e);
					s && (s.el = t), this.lastVisibleElId === e && (this.lastVisibleEl = t)
				}
				getWrapperRefFN(e) {
					let t = this.wrapperRefFNs[e];
					return t || (t = t => {
						this._wrapperRefFN(e, t)
					}, this.wrapperRefFNs[e] = t), t
				}
				_childRefFn(e, t, s) {
					const i = this.childMap.get(e);
					i && (i.itemRef = t, i.loaded = !!t && (void 0 !== s ? s : i.loaded), this.callOnScrollForItemsChanged())
				}
				getChildRefFn(e) {
					let t = this.childRefFns[e];
					return t || (t = (t, s) => {
						this._childRefFn(e, t, s)
					}, this.childRefFns[e] = t), t
				}
				loadItemIfPossible(e, t, s, i, n, r) {
					if (t.contentIsHeavyToMount() ? i : n) {
						const i = !e.isFocusable || s;
						!e.loaded && i && (e.loaded = !0, r.push(t.loadContent))
					}
				}
				callExitedViewportForUnmount() {
					this.itemsInViewport.forEach(e => {
						let {
							id: t,
							trackOnExitedViewport: s
						} = e;
						s && A.b.enqueue(new k.a({
							cb: s,
							args: [!0]
						}))
					})
				}
				hasBeenScrolled() {
					if (!this.containerRef) return !1;
					const {
						viewportTopPadding: e = 0
					} = this.props, t = K(this.containerRef);
					return this.getScrollTop() + e - t > 0
				}
				render() {
					const {
						contentContainerRef: e
					} = this.props;
					return c.a.createElement("div", {
						className: this.props.className,
						ref: this.setContainerRef
					}, this.state.renderableChildren.map((e, t) => c.a.createElement("div", {
						key: `scroller-${e.id}`,
						ref: this.getWrapperRefFN(e.id),
						style: this.getStylesForOuterWrapper(e.id)
					}, c.a.createElement("div", {
						className: this.hiddenChildren[e.id] ? V.a.Hidden : void 0
					}, e.render({
						className: L.k,
						height: e.estHeight,
						placeholderRecommended: !1,
						remeasure: this.remeasureChild,
						scrollToAndRemeasure: this.scrollToChild,
						setScrollerChildRef: this.getChildRefFn(e.id),
						shouldLoadInitially: t < ee,
						width: W
					})))), !!e && c.a.createElement(T.a, {
						containerRef: e,
						onResize: this.handleContentContainerResize
					}))
				}
				validateScrollPreservationProps(e) {
					return "string" != typeof e.layoutKey || void 0 !== e.dataKey
				}
				validateLoadMoreProps(e) {
					return void 0 === e.onLoadMore || "loadMoreToken" in e
				}
			}
			t.b = Z(Object(B.b)(le))
		},
		"./src/reddit/components/Scroller/getDocumentTop.ts": function(e, t, s) {
			"use strict";
			t.a = () => document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0
		},
		"./src/reddit/components/TrackEnterExitViewport/index.tsx": function(e, t, s) {
			"use strict";
			var i, n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-dom/index.js"),
				o = s("./src/reddit/components/TrackingHelper/index.tsx");
			! function(e) {
				e[e.Visible = 0] = "Visible", e[e.NotVisible = 1] = "NotVisible"
			}(i || (i = {})), t.a = Object(o.c)(class extends r.a.Component {
				constructor() {
					super(...arguments), this.visibilityState = i.NotVisible, this.enterFired = !1, this.exitFired = !1
				}
				componentDidMount() {
					if (this.props.children) {
						const e = Object(a.findDOMNode)(this);
						e && "string" != typeof e && (this.observer = new IntersectionObserver(e => {
							e.forEach(e => {
								if (e.isIntersecting && this.visibilityState === i.NotVisible) {
									if (this.visibilityState = i.Visible, this.props.fireOnce && this.enterFired) return;
									this.props.onEnter && (this.props.sendEvent(this.props.onEnter), this.enterFired = !0), this.props.onEnterHandler && this.props.onEnterHandler(e)
								}
								if (!e.isIntersecting && this.visibilityState === i.Visible) {
									if (this.visibilityState = i.NotVisible, this.props.fireOnce && this.exitFired) return;
									this.props.onExit && (this.props.sendEvent(this.props.onExit), this.exitFired = !0)
								}
							})
						}, {
							threshold: this.props.threshold || .25,
							root: this.props.viewportRoot || null,
							rootMargin: this.props.rootMargin || "0px"
						}), this.observer.observe(e))
					}
				}
				componentWillUnmount() {
					this.observer && this.observer.disconnect()
				}
				render() {
					return this.props.children
				}
			})
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
				return v
			})), s.d(t, "c", (function() {
				return y
			}));
			var i = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/lodash/uniqueId.js"),
				r = s.n(n),
				a = s("./node_modules/raf/index.js"),
				o = s.n(a),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/higherOrderComponents/asModal/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/layout/row/Inline/index.tsx"),
				h = s("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				b = s.n(h);
			var g = Object(m.a)(e => {
					const {
						children: t,
						title: s
					} = e;
					return d.a.createElement("div", {
						className: b.a.wrapper
					}, d.a.createElement(p.a, {
						className: b.a.titleRow
					}, s), d.a.createElement("div", {
						className: b.a.detailsContainer
					}, t), d.a.createElement(p.a, {
						className: b.a.buttonRow
					}, d.a.createElement(u.l, {
						className: b.a.confirmButton,
						onClick: e.onConfirmed
					}, i.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				f = s("./src/reddit/controls/ErrorText/index.m.less"),
				_ = s.n(f);
			class x extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.setState({
							isModalOpen: !this.state.isModalOpen
						})
					}, this.state = {
						textHasOverflowed: !1,
						modalId: `ErrorTextModal--${r()()}`,
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
					o()(() => {
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
						errorModalTitle: n = i.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: r = i.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						textHasOverflowed: a,
						isModalOpen: o
					} = this.state;
					return d.a.createElement("div", {
						className: Object(l.a)(_.a.wrapper, t)
					}, d.a.createElement("span", {
						className: _.a.description,
						ref: this.spanRef
					}, e), a && d.a.createElement("span", {
						className: _.a.moreText,
						onClick: this.toggleModal
					}, r), o && d.a.createElement(g, {
						onConfirmed: this.toggleModal,
						title: n
					}, s || e))
				}
			}
			const v = e => {
					const {
						className: t,
						errorClassName: s,
						errorModalTitle: i,
						fallbackMessage: n,
						messages: r = []
					} = e, a = r.length ? r : n ? [n] : [];
					return a.length ? d.a.createElement("div", {
						className: t
					}, a.map((e, t) => d.a.createElement(x, {
						className: s,
						errorModalTitle: i,
						key: t
					}, e))) : null
				},
				y = e => d.a.createElement(v, {
					fallbackMessage: i.fbt._("Something went wrong", null, {
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
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "d", (function() {
				return x
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/ErrorText/index.tsx"),
				c = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = s("./src/reddit/controls/FormFields/index.m.less"),
				m = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const p = a.a.input("input", m.a),
				h = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				b = e => {
					let {
						label: t,
						children: s,
						inputRef: i,
						className: a,
						isInvalid: o,
						...c
					} = e;
					const d = void 0 !== c.value && "" !== c.value;
					return n.a.createElement("div", {
						className: Object(r.a)(m.a.inputWrapper, a, {
							[m.a.mIsInvalid]: o
						}),
						onClick: h
					}, n.a.createElement(p, u({
						"aria-invalid": o,
						innerRef: i
					}, c)), t && n.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: d
						})
					}, t), s)
				},
				g = e => {
					let {
						label: t,
						children: s,
						inputRef: i,
						isInvalid: a,
						className: o,
						redditStyle: c,
						...d
					} = e;
					const l = void 0 !== d.value && "" !== d.value;
					return n.a.createElement("div", {
						className: Object(r.a)(m.a.inputMovingLabelWrapper, o, {
							[m.a.mIsInvalid]: a,
							[m.a.mIsRedditStyle]: c
						}),
						onClick: h
					}, n.a.createElement(p, u({
						innerRef: i
					}, d)), t && n.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: l
						})
					}, t), s)
				},
				f = e => n.a.createElement("div", {
					className: Object(r.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", n.a.createElement(c.a, {
					className: m.a.plus
				}));
			var _;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(_ || (_ = {}));
			class x extends n.a.Component {
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
						placeholder: i,
						errors: r = []
					} = this.props;
					return e.map((e, a) => n.a.createElement(b, {
						inputRef: e => this.setInputRef(e, a),
						isInvalid: !!r[a],
						disabled: t,
						type: "text",
						label: s,
						onChange: e => this.updateValue(e, a),
						placeholder: i,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, n.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(a)
					}, n.a.createElement(d.b, {
						className: m.a.trash
					})), !!r[a] && n.a.createElement(o.b, {
						className: m.a.errorText
					}, r[a])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: s,
						maxLength: i,
						addValueText: a,
						disabled: o
					} = this.props;
					this.focusedInput = null;
					const c = !(!!i && s.length >= i) && !o;
					return n.a.createElement("div", {
						className: Object(r.a)(m.a.multiInputWrapper, e)
					}, t && c && n.a.createElement(f, {
						onClick: this.addValue,
						text: a
					}), this.renderFields(), !t && c && n.a.createElement(f, {
						onClick: this.addValue,
						text: a
					}))
				}
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const i = Object(a.c)({
					featureEnabled: t => o.d[e](t)
				});
				return Object(r.b)(i)(e => {
					const {
						featureEnabled: i,
						...r
					} = e, a = r;
					return i ? n.a.createElement(t, a) : void 0 !== s ? n.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/economics/setupSubredditPremiumButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./src/lib/currency/centsToDollars/index.ts"),
				n = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				r = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			async function a(e) {
				let {
					apiContext: t,
					config: s,
					elementId: a,
					price: o,
					purchaseFn: c,
					username: d,
					onCancel: l,
					onClientLoad: m,
					onError: u,
					onSubmitting: p,
					onSuccess: h
				} = e;
				const b = (e, t) => {
					if (!u) return;
					let s = e.toString ? e.toString() : "";
					s.toLowerCase().includes("object object") && (s = JSON.stringify(e)), u(e, s, t)
				};
				try {
					const [e] = await Promise.all([Object(n.b)(t, {
						username: d
					}), Object(r.b)()]);
					if (!e.ok) return void b(e.error, "/ps/me/braintree-client-tokens");
					const u = await braintree.client.create({
							authorization: e.body.clientToken
						}),
						g = await new Promise((e, t) => {
							braintree.paypalCheckout.create({
								client: u
							}, (s, i) => s ? t(s) : e(i))
						});
					m && m(), await paypal.Buttons({
						createBillingAgreement: "subscription" === s.type ? () => (p && p(), g.createPayment({
							amount: Object(i.a)(o(), !0),
							billingAgreementDescription: s.billingAgreement,
							currency: "USD",
							flow: "vault"
						})) : void 0,
						createOrder: "purchase" === s.type ? () => (p && p(), g.createPayment({
							amount: Object(i.a)(o(), !0),
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
						onCancel: () => l && l(),
						onError: e => b(e, "paypalError")
					}).render(`#${a}`)
				} catch (g) {
					b(g, "paypalError")
				}
			}
		},
		"./src/reddit/helpers/governance/tokens.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return o
			}));
			var i = s("./node_modules/bignumber.js/bignumber.js"),
				n = s("./src/lib/prettyPrintNumber/index.ts");

			function r(e, t) {
				const s = new i.BigNumber(e),
					n = new i.BigNumber(t || 1);
				return s.dividedToIntegerBy(n).toString()
			}

			function a(e, t) {
				return Object(n.b)(parseInt(r(e, t), 10))
			}

			function o(e, t) {
				const s = new i.BigNumber(e),
					n = new i.BigNumber(t || 1);
				return s.multipliedBy(n).toFixed(0)
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.m.less": function(e, t, s) {
			e.exports = {
				loadingBackground: "fzTkuBRFT8iIn1XnJX_Yn",
				"m-loading": "_34yMY7-6MNnz3utfjExvIq",
				mLoading: "_34yMY7-6MNnz3utfjExvIq",
				gradientAnimation: "vnt666wwqSK5qL63sBn9P",
				loadingBar: "_3giTODNeZ-Po90u8Ghs4aI",
				loadingContainer: "VRC9QT7CgUxvhK0ceQSrn"
			}
		},
		"./src/reddit/helpers/styles/mixins/loading.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			}));
			var i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/helpers/styles/mixins/loading.m.less"),
				r = s.n(n);
			const a = e => {
					let {
						isLoading: t
					} = e;
					return Object(i.a)(r.a.loadingBackground, {
						[r.a["m-loading"]]: t
					})
				},
				o = e => Object(i.a)(r.a.loadingBar, a(e))
		},
		"./src/reddit/hooks/useSafeState.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var i = s("./node_modules/react/index.js");

			function n(e, t) {
				const [s, n] = Object(i.useState)(e);
				return [s, e => {
					t.current && n(e)
				}]
			}
		},
		"./src/reddit/icons/svgs/Bling/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 7 7"
				}, n.a.createElement("path", {
					d: "M3.49903 2.93517V0C2.81615 1.56205 1.56162 2.81693 0 3.5C1.56165 4.18307 2.81618 5.43795 3.49906 7L3.49904 4.06483H3.50096L3.50094 7C4.18382 5.43795 5.43835 4.18307 7 3.5C5.43838 2.81693 4.18385 1.56205 3.50097 0V2.93517H3.49903Z"
				}))
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/CircledPlanet/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement("svg", r({
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, e), n.a.createElement("path", {
				d: "M15.8286,15.8998 C15.3466,16.3788 12.6326,15.5598 8.5516,11.4798 C4.4706,7.3968 3.6486,4.6858 4.1316,4.2038 C4.3566,3.9788 4.9286,3.9208 5.9126,4.3518 C5.6166,4.5678 5.3306,4.8008 5.0666,5.0658 C5.0536,5.0798 5.0416,5.0948 5.0266,5.1098 C5.5756,6.4268 6.8946,8.4088 9.2596,10.7728 C11.6206,13.1338 13.6046,14.4538 14.9246,15.0028 C14.9376,14.9898 14.9526,14.9778 14.9666,14.9638 C15.2316,14.6988 15.4646,14.4128 15.6786,14.1178 C16.1096,15.1028 16.0526,15.6748 15.8286,15.8998 M16.7526,11.8998 C17.4066,9.5458 16.8136,6.9138 14.9666,5.0658 C13.6436,3.7438 11.8866,3.0148 10.0166,3.0148 C9.3686,3.0148 8.7356,3.1078 8.1286,3.2768 C5.7306,1.7598 3.9176,1.5898 2.7176,2.7898 C1.4036,4.1028 2.0736,6.1918 3.2866,8.1688 C2.6446,10.5128 3.2276,13.1258 5.0666,14.9638 C6.3886,16.2868 8.1456,17.0148 10.0166,17.0148 C10.6536,17.0148 11.2746,16.9178 11.8736,16.7518 C13.0856,17.4938 14.3406,18.0318 15.4316,18.0318 C16.1156,18.0318 16.7366,17.8198 17.2426,17.3138 C18.4416,16.1138 18.2706,14.2988 16.7526,11.8998"
			}))
		},
		"./src/reddit/icons/svgs/Crown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 29 26"
				}, n.a.createElement("path", {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingBold/index.m.less"),
				o = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingHyperlink/index.m.less"),
				o = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17.15,2.86a6.33,6.33,0,1,0-9,9A1,1,0,0,0,9.6,10.4a4.39,4.39,0,1,1,4.92.83,7.41,7.41,0,0,1,.14,1.44c0,.23,0,.46,0,.68a6.33,6.33,0,0,0,2.51-10.5Z"
			}), n.a.createElement("path", {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingItalics/index.m.less"),
				o = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("polygon", {
				points: "7.24 17 10.3 17 12.1 6.85 9.05 6.85 7.24 17"
			}), n.a.createElement("polygon", {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingMonospace/index.m.less"),
				o = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M18.8,9.4l-3-4a1,1,0,1,0-1.6,1.2L16.75,10,14.2,13.4a1,1,0,1,0,1.6,1.2l3-4A1,1,0,0,0,18.8,9.4Z"
			}), n.a.createElement("path", {
				d: "M5.6,5.2a1,1,0,0,0-1.4.2l-3,4a1,1,0,0,0,0,1.2l3,4a1,1,0,0,0,1.6-1.2L3.25,10,5.8,6.6A1,1,0,0,0,5.6,5.2Z"
			}), n.a.createElement("path", {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingOrderedList/index.m.less"),
				o = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M4.78,5.15H4.15V2H3.09a1,1,0,0,1-.73.25V3a1.84,1.84,0,0,0,.7-.17V5.15H2.35V6H4.78Z"
			}), n.a.createElement("path", {
				d: "M3.62,8.88c.25,0,.39.12.39.35s-.17.41-.77.78c-1,.63-1.15,1.21-1.15,1.78V12H5v-.85H3.31c.06-.16.22-.35.72-.64.81-.43,1-.87,1-1.32C5,8.47,4.58,8,3.65,8A1.76,1.76,0,0,0,2.08,9l.72.52A1.07,1.07,0,0,1,3.62,8.88Z"
			}), n.a.createElement("path", {
				d: "M4.43,15.87A.82.82,0,0,0,5,15.05C5,14.4,4.53,14,3.65,14a2.15,2.15,0,0,0-1.51.61l.55.64a1.24,1.24,0,0,1,.88-.39c.27,0,.41.12.41.32s-.15.38-.67.38H3v.72h.31c.53,0,.76.13.76.46s-.15.42-.57.42a1.05,1.05,0,0,1-.85-.5L2,17.21A1.83,1.83,0,0,0,3.57,18c.94,0,1.55-.43,1.55-1.24A.87.87,0,0,0,4.43,15.87Z"
			}), n.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), n.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), n.a.createElement("path", {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingSpoiler/index.m.less"),
				o = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingStrikethrough/index.m.less"),
				o = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M11.86,12a1.36,1.36,0,0,1,.7,1.19c0,1.07-1,1.59-2.42,1.59a4.12,4.12,0,0,1-3.75-2.36L4.08,13.79A6.21,6.21,0,0,0,10,17.2c3.86,0,5.55-2,5.55-4.22a4,4,0,0,0-.12-1Z"
			}), n.a.createElement("path", {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingSuperscript/index.m.less"),
				o = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M6.94,3,2,17H4.83L5.9,13.89h4.75l1,3.11h3.11L9.86,3Zm-.28,8.67L8.29,6.92h0l1.6,4.75Z"
			}), n.a.createElement("path", {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingTable/index.m.less"),
				o = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/FormattingUnorderedList/index.m.less"),
				o = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17,9H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), n.a.createElement("path", {
				d: "M17,15H8a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Z"
			}), n.a.createElement("path", {
				d: "M8,5h9a1,1,0,0,0,0-2H8A1,1,0,0,0,8,5Z"
			}), n.a.createElement("path", {
				d: "M4.88,9.43a1.29,1.29,0,0,0-.13-.26,2.17,2.17,0,0,0-.19-.23,1.55,1.55,0,0,0-2.12,0,2.16,2.16,0,0,0-.19.23,2.2,2.2,0,0,0-.14.26A2.3,2.3,0,0,0,2,9.71,1.32,1.32,0,0,0,2,10a1.5,1.5,0,0,0,1.5,1.5,1.55,1.55,0,0,0,.57-.11A1.52,1.52,0,0,0,5,10a1.32,1.32,0,0,0,0-.29A1.27,1.27,0,0,0,4.88,9.43Z"
			}), n.a.createElement("path", {
				d: "M4.33,14.75l-.26-.14-.28-.08a1.42,1.42,0,0,0-.58,0l-.28.08-.26.14a2.16,2.16,0,0,0-.23.19A1.52,1.52,0,0,0,2,16a1.47,1.47,0,0,0,.44,1.06,1.52,1.52,0,0,0,.49.33,1.53,1.53,0,0,0,1.14,0,1.61,1.61,0,0,0,.49-.33A1.52,1.52,0,0,0,5,16a1.5,1.5,0,0,0-.44-1.06A2.06,2.06,0,0,0,4.33,14.75Z"
			}), n.a.createElement("path", {
				d: "M2.44,2.94A1.52,1.52,0,0,0,2,4a1.47,1.47,0,0,0,.44,1.06,1.59,1.59,0,0,0,.48.33,1.65,1.65,0,0,0,.58.11,1.55,1.55,0,0,0,.57-.11,1.5,1.5,0,0,0,.49-.33,1.5,1.5,0,0,0,0-2.12A1.55,1.55,0,0,0,2.44,2.94Z"
			}))
		},
		"./src/reddit/icons/svgs/Gif/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M3.78413 14.5651C4.76663 14.6972 6.07763 14.7 8 14.7C9.92237 14.7 11.2334 14.6972 12.2159 14.5651C13.161 14.4381 13.6052 14.2132 13.9092 13.9092C14.2132 13.6052 14.4381 13.161 14.5651 12.2159C14.6972 11.2334 14.7 9.92237 14.7 8C14.7 6.07763 14.6972 4.76663 14.5651 3.78413C14.4381 2.83903 14.2132 2.3948 13.9092 2.09081C13.6052 1.78682 13.161 1.56192 12.2159 1.43485C11.2334 1.30276 9.92237 1.3 8 1.3C6.07763 1.3 4.76663 1.30276 3.78413 1.43485C2.83903 1.56192 2.3948 1.78682 2.09081 2.09081C1.78682 2.3948 1.56192 2.83903 1.43485 3.78413C1.30276 4.76663 1.3 6.07763 1.3 8C1.3 9.92237 1.30276 11.2334 1.43485 12.2159C1.56192 13.161 1.78682 13.6052 2.09081 13.9092C2.3948 14.2132 2.83903 14.4381 3.78413 14.5651ZM1.17157 1.17157C0 2.34315 0 4.22876 0 8C0 11.7712 0 13.6569 1.17157 14.8284C2.34315 16 4.22876 16 8 16C11.7712 16 13.6569 16 14.8284 14.8284C16 13.6569 16 11.7712 16 8C16 4.22876 16 2.34315 14.8284 1.17157C13.6569 0 11.7712 0 8 0C4.22876 0 2.34315 0 1.17157 1.17157Z"
			}), n.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M6.76197 6.36433L6.03894 7.11365C5.7183 6.79814 5.32849 6.7127 5.03299 6.7127C4.31625 6.7127 3.851 7.15966 3.851 8.06015C3.851 8.65172 4.1465 9.38132 5.03299 9.38132C5.26562 9.38132 5.63028 9.33531 5.88177 9.1447V8.55313H4.76893V7.53432H6.91915V9.57851C6.64252 10.1635 5.87548 10.479 5.02671 10.479C3.28515 10.479 2.625 9.26301 2.625 8.06015C2.625 6.8573 3.37946 5.62158 5.03299 5.62158C5.64285 5.62158 6.18355 5.75304 6.76197 6.36433ZM9.02735 10.3541H7.78877V5.75304H9.02735V10.3541ZM11.3179 10.3541H10.0856V5.75304H13.4618V6.84415H11.3179V7.70521H13.3298V8.77004H11.3179V10.3541Z"
			}))
		},
		"./src/reddit/icons/svgs/Nsfw/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && n.a.createElement("title", null, e.title), n.a.createElement("g", null, n.a.createElement("path", {
				fill: "inherit",
				d: "M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
			})))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
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
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, s) {
			"use strict";
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		},
		"./src/reddit/icons/svgs/Twinkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i);

			function r(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 48 48",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M24.75 0L23.25 0L23.25 22.188L7.56083 6.49881L6.50017 7.55947L22.1907 23.25L0 23.25L0 24.75L22.1895 24.75L6.49882 40.4406L7.55948 41.5013L23.25 25.8108L23.25 48H24.75L24.75 25.8093L40.4413 41.5006L41.502 40.4399L25.812 24.75L48 24.75V23.25L25.8108 23.25L41.5006 7.56017L40.4399 6.49951L24.75 22.1895L24.75 0Z"
				}))
			}
		},
		"./src/reddit/models/Payments/index.ts": function(e, t, s) {
			"use strict";
			var i, n, r, a;
			s.d(t, "b", (function() {
					return n
				})), s.d(t, "a", (function() {
					return r
				})),
				function(e) {
					e.PayPal = "paypal", e.Stripe = "stripe"
				}(i || (i = {})),
				function(e) {
					e.PayPal = "PAYPAL", e.Stripe = "STRIPE"
				}(n || (n = {})),
				function(e) {
					e.NewPayPal = "new-paypal", e.NewStripe = "new-stripe", e.SavedPayPal = "saved-paypal", e.SavedStripe = "saved-stripe"
				}(r || (r = {})),
				function(e) {
					e.Comment = "comment", e.Post = "post", e.Profile = "profile", e.Subreddit = "subreddit"
				}(a || (a = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, s) {
			"use strict";
			var i;

			function n(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			s.d(t, "a", (function() {
					return i
				})), s.d(t, "b", (function() {
					return n
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(i || (i = {}))
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
				return m
			}));
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/ScrollAnimation/index.tsx"),
				o = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				c = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.m.less"),
				d = s.n(c);
			const l = [1700, 2400];

			function m(e) {
				const t = e.scrollRange || l;
				return n.a.createElement("footer", {
					className: Object(r.a)(d.a.container, e.className)
				}, n.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/8fvy7o/these_items_are_cosmetic_only_and_grant_no/",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.a.createElement(a.a, {
					scrollRange: t
				}, t => n.a.createElement("img", {
					className: d.a.jumperBullet,
					src: Object(o.a)(e.subreddit, "jumper_bullet@2x.png"),
					style: t
				})), n.a.createElement(a.a, {
					scrollRange: t
				}, t => n.a.createElement("img", {
					className: d.a.jumperArmLeft,
					src: Object(o.a)(e.subreddit, "jumper_arm_left@2x.png"),
					style: t
				})), n.a.createElement(a.a, {
					scrollRange: t
				}, t => n.a.createElement("img", {
					className: d.a.jumperLegLeft,
					src: Object(o.a)(e.subreddit, "jumper_leg_left@2x.png"),
					style: t
				})), n.a.createElement(a.a, {
					scrollRange: t
				}, t => n.a.createElement("img", {
					className: d.a.jumperLegRight,
					src: Object(o.a)(e.subreddit, "jumper_leg_right@2x.png"),
					style: t
				})), n.a.createElement("img", {
					className: d.a.jumperTorso,
					src: Object(o.a)(e.subreddit, "jumper_torso@2x.png")
				}), n.a.createElement(a.a, {
					scrollRange: t
				}, t => n.a.createElement("img", {
					className: d.a.jumperArmRight,
					src: Object(o.a)(e.subreddit, "jumper_arm_right@2x.png"),
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
				return n
			}));
			var i = s("./src/config.ts");
			const n = (e, t) => `${i.a.assetPath}/img/memberships/paywall/${e.name.toLowerCase()}/${t}`
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
			var i = s("./node_modules/react/index.js"),
				n = s.n(i),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/uuid/v4.js"),
				d = s.n(c);
			var l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/extractQueryParams/index.ts"),
				u = s("./src/reddit/components/TrackEnterExitViewport/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/featureFlags/subredditPoints.ts"),
				b = s("./src/reddit/selectors/platform.ts"),
				g = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				x = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./src/config.ts"),
				y = s("./src/reddit/models/Badge/index.ts");
			const w = {
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
				C = {
					achievementBadges: !0,
					animations: !0,
					canCancel: !0,
					canGift: !0,
					communityThanks: !0,
					emotes: !0,
					testimonials: !0
				},
				E = {
					t5_3oeyf: C,
					t5_2j7xd9: C
				};
			var k = function(e) {
					return {
						...w,
						...E[e] || {}
					}
				},
				j = s("./src/reddit/selectors/economics.ts"),
				N = s("./src/reddit/components/RichTextEditor/index.tsx"),
				I = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				O = s("./src/reddit/components/ScrollAnimation/index.tsx"),
				P = s("./src/reddit/helpers/richTextEditor/index.ts"),
				S = s("./src/reddit/pages/meta/MembershipPaywallPage/getSrc.ts"),
				M = s("./src/reddit/icons/svgs/FormattingBold/index.tsx"),
				T = s("./src/reddit/icons/svgs/FormattingHyperlink/index.tsx"),
				R = s("./src/reddit/icons/svgs/FormattingItalics/index.tsx"),
				L = s("./src/reddit/icons/svgs/FormattingMonospace/index.tsx"),
				B = s("./src/reddit/icons/svgs/FormattingOrderedList/index.tsx"),
				F = s("./src/reddit/icons/svgs/FormattingSpoiler/index.tsx"),
				A = s("./src/reddit/icons/svgs/FormattingStrikethrough/index.tsx"),
				z = s("./src/reddit/icons/svgs/FormattingSuperscript/index.tsx"),
				H = s("./src/reddit/icons/svgs/FormattingTable/index.tsx"),
				V = s("./src/reddit/icons/svgs/FormattingUnorderedList/index.tsx"),
				W = s("./src/reddit/icons/svgs/Gif/index.tsx"),
				D = s("./src/reddit/icons/svgs/Smile/index.tsx"),
				G = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/higherOrderComponents/addOverlayEvents.tsx")),
				U = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				Z = s("./src/reddit/components/RichTextEditor/emotes/helpers.ts"),
				q = s("./src/reddit/icons/svgs/Close/index.tsx"),
				X = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/EmoteTooltip/index.m.less"),
				K = s.n(X);

			function Y(e) {
				const t = e.emojiPack.emotes,
					s = Object.keys(t).map(e => t[e]).sort((e, t) => e.id.localeCompare(t.id));
				return n.a.createElement("div", {
					className: Object(l.a)(K.a.container, e.className),
					style: e.style
				}, n.a.createElement("div", {
					className: K.a.header
				}, x.fbt._("Add r/{communityName} emote", [x.fbt._param("communityName", e.subreddit.name)], {
					hk: "O2Vj2"
				}), n.a.createElement(q.a, {
					className: K.a.close,
					onClick: e.onClose
				})), n.a.createElement("div", {
					className: K.a.emojis
				}, n.a.createElement("div", {
					className: K.a.emojisTitle
				}, e.emojiPack.title), n.a.createElement("div", {
					className: K.a.emojisList
				}, s.map(t => n.a.createElement("button", {
					className: K.a.emoji,
					onClick: () => e.onSelectEmoji(Object(Z.g)(t, e.editorState)),
					key: t.id
				}, n.a.createElement("img", {
					className: K.a.emojiImage,
					src: t.emoji.path
				}))))), n.a.createElement("div", {
					className: K.a.triangle
				}))
			}
			Y.defaultProps = {
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
			var J = Object(U.a)(Y, [G.a.Click, G.a.Keydown]),
				Q = s("./src/reddit/components/RichTextEditor/media/GifTooltip/GifTooltipBody.tsx"),
				$ = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/GifTooltip/index.m.less"),
				ee = s.n($);
			var te = Object(U.a)((function(e) {
					return n.a.createElement("div", {
						className: Object(l.a)(ee.a.container, e.className),
						style: e.style
					}, n.a.createElement(Q.a, {
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
					}), n.a.createElement("div", {
						className: ee.a.triangle
					}))
				}), [G.a.Click, G.a.Keydown]),
				se = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Toolbar/index.m.less"),
				ie = s.n(se);
			class ne extends n.a.Component {
				constructor(e) {
					super(e), this.state = {
						emotesOpen: "emoji" === e.type,
						gifsOpen: "gif" === e.type
					}
				}
				render() {
					const e = "emoji" === this.props.type ? `membership-paywall-emote-${this.props.subreddit.id}` : void 0,
						t = "gif" === this.props.type ? `membership-paywall-gif-${this.props.subreddit.id}` : void 0;
					return n.a.createElement("div", {
						className: Object(l.a)(this.props.className, ie.a.container)
					}, n.a.createElement("div", {
						className: ie.a.content
					}, n.a.createElement("div", {
						className: Object(l.a)(ie.a.iconWrapper, {
							[ie.a.clickable]: "emoji" === this.props.type,
							[ie.a.open]: this.state.emotesOpen
						}),
						id: e,
						onClick: "emoji" === this.props.type ? () => this.setState(e => ({
							emotesOpen: !e.emotesOpen
						})) : void 0
					}, n.a.createElement(D.a, {
						className: Object(l.a)(ie.a.emoteIcon)
					})), n.a.createElement("div", {
						className: Object(l.a)(ie.a.iconWrapper, {
							[ie.a.clickable]: "gif" === this.props.type,
							[ie.a.open]: this.state.gifsOpen
						}),
						id: t,
						onClick: "gif" === this.props.type ? () => this.setState(e => ({
							gifsOpen: !e.gifsOpen
						})) : void 0
					}, n.a.createElement(W.a, {
						className: Object(l.a)(ie.a.gifIcon)
					})), n.a.createElement("div", {
						className: ie.a.divider
					}), n.a.createElement(M.a, {
						className: ie.a.icon
					}), n.a.createElement(R.a, {
						className: ie.a.icon
					}), n.a.createElement(T.a, {
						className: ie.a.icon
					}), n.a.createElement(A.a, {
						className: ie.a.icon
					}), n.a.createElement(L.a, {
						className: ie.a.icon
					}), n.a.createElement(z.a, {
						className: ie.a.icon
					}), n.a.createElement(F.a, {
						className: ie.a.icon
					}), n.a.createElement("div", {
						className: ie.a.divider
					}), n.a.createElement(H.a, {
						className: ie.a.icon
					}), n.a.createElement(V.a, {
						className: ie.a.icon
					}), n.a.createElement(B.a, {
						className: ie.a.icon
					})), n.a.createElement("button", {
						disabled: !0,
						className: ie.a.reply
					}, x.fbt._("reply", null, {
						hk: "RzR8c"
					})), this.state.emotesOpen && n.a.createElement(J, {
						isOpen: !0,
						className: ie.a.emoteTooltip,
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
					}), this.state.gifsOpen && n.a.createElement(te, {
						isOpen: !0,
						className: ie.a.gifTooltip,
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
			var re = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/GifsInComments/index.m.less"),
				ae = s.n(re);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}
			const ce = [5e3, 5300];
			class de extends n.a.PureComponent {
				render() {
					const {
						className: e,
						emojisExpanded: t,
						subreddit: s
					} = this.props, i = ce.map(e => e + (t ? 500 : 0)), r = k(s.id).animations;
					return n.a.createElement("div", {
						className: Object(l.a)(ae.a.container, e)
					}, r && n.a.createElement("header", {
						className: ae.a.header
					}, n.a.createElement("a", {
						href: "https://www.reddit.com/r/FortNiteBR/comments/9067f2/i_have_been_playing_50v50_a_little_differently/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, n.a.createElement("img", {
						className: ae.a.rescuerLegs,
						src: Object(S.a)(s, "rescuer_legs@2x.png")
					}), n.a.createElement(O.a, {
						scrollRange: i
					}, e => n.a.createElement("img", {
						className: ae.a.rescuerArm,
						src: Object(S.a)(s, "rescuer_arm@2x.png"),
						style: e
					})), n.a.createElement(O.a, {
						scrollRange: i
					}, e => n.a.createElement("img", {
						className: ae.a.rescuerTorso,
						src: Object(S.a)(s, "rescuer_torso@2x.png"),
						style: e
					})), n.a.createElement("img", {
						className: ae.a.woundedBody,
						src: Object(S.a)(s, "wounded_body@2x.png")
					}), n.a.createElement(O.a, {
						scrollRange: i
					}, e => n.a.createElement("img", {
						className: ae.a.woundedHead,
						src: Object(S.a)(s, "wounded_head@2x.png"),
						style: e
					})))), n.a.createElement("article", {
						className: Object(l.a)(ae.a.content, {
							[ae.a.contentWithAnimations]: r
						})
					}, n.a.createElement("div", {
						className: ae.a.title
					}, x.fbt._("GIFs in Comments", null, {
						hk: "4iMCW4"
					})), n.a.createElement("div", {
						className: ae.a.description
					}, x.fbt._("Put GIFs directly in your comments.", null, {
						hk: "2yUWCA"
					})), n.a.createElement("div", {
						className: ae.a.description
					}, x.fbt._("Search a vast library to find the perfect one.", null, {
						hk: "1hZivq"
					})), n.a.createElement(N.a, {
						className: ae.a.editor,
						editorType: P.a.Comment,
						placeholderText: x.fbt._("Try adding a GIF", null, {
							hk: "tHtDe"
						}),
						readOnly: !1,
						renderToolbar: e => n.a.createElement(ne, oe({
							key: String(t),
							subreddit: s,
							type: "gif"
						}, e)),
						rteState: I.a.createInitial(),
						toolbarPosition: "bottom",
						trackToolbarClick: function() {},
						onChange: function() {},
						onSubmit: function() {}
					}), n.a.createElement("div", {
						className: ae.a.try
					}, x.fbt._("Try it out! Search for a GIF and put it in your comment.", null, {
						hk: "309j9G"
					}))))
				}
			}
			const le = Object(o.c)({
				cosmeticBadges: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(j.d)(e, s.id)
				}
			});
			var me = Object(r.b)(le)(de),
				ue = s("./node_modules/lodash/last.js"),
				pe = s.n(ue),
				he = s("./node_modules/lodash/shuffle.js"),
				be = s.n(he),
				ge = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/PremiumEmojis/index.m.less"),
				fe = s.n(ge);

			function _e() {
				return (_e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}

			function xe(e) {
				return e.reduce((e, t) => {
					const s = pe()(e);
					return s && s.length < 12 ? s.push(t) : e.push([t]), e
				}, [
					[]
				])
			}
			const ve = be()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/bush.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/chug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/clappy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/cuddle.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dab.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/dance.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_destroy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/mech_love.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/megaphone.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/respect.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/soon.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/premium_emotes/emo_pack_1/unfortunately.gif"]),
				ye = be()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_1/competitive.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_2/goat.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_3/noob.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_4/bot.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_5/potato.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/player_style_emotes/emo_pack_free_6/casual.gif"]),
				we = be()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/confused.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/disappointed.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/grinning.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/laughing.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/dogesy_emotes/free_dog_emotes_pack/like.gif"]),
				Ce = be()(["https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/angry.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/astonished.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/blush.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/cheeky.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/cry.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/disapproval.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/dizzy_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/downvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/facepalm.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/feels_bad_man.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/feels_good_man.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/flip_out.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/flushed.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/give_upvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/give_upvote_rainbow.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/grimacing.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/grin.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/heart_eyes.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/heart_eyes_rainbow.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/hug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/joy.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/kissing_heart.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/money_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/neutral_face.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/no_mouth.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/poop.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/put_back.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/rage.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/scream.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/shrug.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sleep.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/slightly_smiling.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/smile.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/snoo.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sob.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/stuck_out_tongue.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sunglasses.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/surprise.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sweat.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/sweat_smile.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/table.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/table_flip.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thinking_face_hmm.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thumbs_down.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/thumbs_up.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/trollface.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/upvote.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/wink.gif", "https://reddit-meta-production.s3.amazonaws.com/public/fortnitebr/emotes/snoomoji_emotes/free_emotes_pack/yummy.gif"]);
			class Ee extends n.a.Component {
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
					return n.a.createElement("div", {
						className: Object(l.a)(e, fe.a.container)
					}, n.a.createElement("header", {
						className: fe.a.title
					}, x.fbt._("Premium Animated Emotes", null, {
						hk: "24mmlb"
					})), n.a.createElement("div", {
						className: fe.a.description
					}, x.fbt._("Say more than text. Bring color and animation to your comments.", null, {
						hk: "2MjrRF"
					})), n.a.createElement(N.a, {
						className: fe.a.editor,
						editorType: P.a.Comment,
						placeholderText: x.fbt._("Try adding an emote", null, {
							hk: "3H8jm8"
						}),
						readOnly: !1,
						renderToolbar: e => n.a.createElement(ne, _e({
							subreddit: t,
							type: "emoji"
						}, e)),
						rteState: I.a.createInitial(),
						toolbarPosition: "bottom",
						trackToolbarClick: function() {},
						onChange: function() {},
						onSubmit: function() {}
					}), n.a.createElement("div", {
						className: fe.a.try
					}, x.fbt._("Try it out! Add an emoji by clicking on it.", null, {
						hk: "2LKfXS"
					})), n.a.createElement("div", {
						className: fe.a.description
					}, x.fbt._("Use more than 100 emotes, including custom art just for r/{communityName}.", [x.fbt._param("communityName", t.name)], {
						hk: "31Kq8t"
					})), n.a.createElement("footer", {
						className: Object(l.a)(fe.a.allEmojis, {
							[fe.a.notExpanded]: !this.state.expanded
						})
					}, n.a.createElement("div", {
						className: fe.a.label
					}, x.fbt._("special members", null, {
						hk: "2W17Tt"
					})), n.a.createElement("div", {
						className: fe.a.grid
					}, xe(ve).map((e, t) => n.a.createElement("div", {
						className: fe.a.gridRow,
						key: t
					}, e.map(e => n.a.createElement("img", {
						className: fe.a.emoji,
						key: e,
						src: e
					}))))), n.a.createElement("div", {
						className: fe.a.label
					}, x.fbt._("snoomojis", null, {
						hk: "2hsGar"
					})), n.a.createElement("div", {
						className: fe.a.grid
					}, xe(Ce).map((e, t) => n.a.createElement("div", {
						className: fe.a.gridRow,
						key: t
					}, e.map(e => n.a.createElement("img", {
						className: fe.a.emoji,
						key: e,
						src: e
					}))))), n.a.createElement("div", {
						className: fe.a.label
					}, x.fbt._("dogesy", null, {
						hk: "2FheYm"
					})), n.a.createElement("div", {
						className: fe.a.grid
					}, xe(we).map((e, t) => n.a.createElement("div", {
						className: fe.a.gridRow,
						key: t
					}, e.map(e => n.a.createElement("img", {
						className: fe.a.emoji,
						key: e,
						src: e
					}))))), n.a.createElement("div", {
						className: fe.a.label
					}, x.fbt._("player style", null, {
						hk: "1XkSYc"
					})), n.a.createElement("div", {
						className: fe.a.grid
					}, xe(ye).map((e, t) => n.a.createElement("div", {
						className: fe.a.gridRow,
						key: t
					}, e.map(e => n.a.createElement("img", {
						className: fe.a.emoji,
						key: e,
						src: e
					}))))), !this.state.expanded && n.a.createElement("div", {
						className: fe.a.gradient
					})), !this.state.expanded && n.a.createElement("button", {
						className: fe.a.showAll,
						onClick: () => {
							this.setState({
								expanded: !0
							}), this.props.onExpand && this.props.onExpand()
						}
					}, x.fbt._("show all", null, {
						hk: "2MP4Ce"
					})))
				}
			}
			var ke = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/Section/index.m.less"),
				je = s.n(ke);

			function Ne(e) {
				const t = e.showProgressBar ? 1 / 0 : 6,
					s = e.items.reduce((e, s) => {
						const i = pe()(e);
						return i && i.length < t ? i.push(s) : e.push([s]), e
					}, [
						[]
					]);
				return n.a.createElement("section", {
					className: Object(l.a)(je.a.container, e.className)
				}, n.a.createElement("header", {
					className: je.a.title
				}, e.title), n.a.createElement("article", {
					className: je.a.description
				}, e.description), n.a.createElement("footer", {
					className: je.a.footer
				}, e.showProgressBar && n.a.createElement("div", {
					className: je.a.progressBar
				}, n.a.createElement("div", {
					className: je.a.progressThumb
				})), s.map((e, t) => n.a.createElement("div", {
					className: je.a.row,
					key: t
				}, e.map(e => n.a.createElement("div", {
					className: je.a.item,
					key: e.text
				}, n.a.createElement("img", {
					className: je.a.itemIcon,
					src: e.icon
				}), n.a.createElement("div", {
					className: je.a.itemText
				}, e.text)))))))
			}
			var Ie = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/StyleBadges/index.m.less"),
				Oe = s.n(Ie);
			const Pe = 1e3,
				Se = 66;
			class Me extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						currentBadgeIdx: 0
					}, this.timer = null, this.badges = null
				}
				componentDidUpdate() {
					!this.badges && this.props.styleBadges.length && (this.badges = be()(this.props.styleBadges).slice(0, Se), this.timer = window.setInterval(() => {
						this.setState(e => ({
							currentBadgeIdx: (e.currentBadgeIdx + 1) % this.badges.length
						}))
					}, Pe))
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
					} = this.props, i = e[this.state.currentBadgeIdx];
					return n.a.createElement("article", {
						className: Object(l.a)(t, Oe.a.container)
					}, n.a.createElement("header", {
						className: Oe.a.title
					}, x.fbt._("Style Badges", null, {
						hk: "3ioHSL"
					})), n.a.createElement("div", {
						className: Oe.a.description
					}, x.fbt._("Stand out with 4 new badges a month", null, {
						hk: "3Pd0bd"
					})), n.a.createElement("div", {
						className: Oe.a.description
					}, x.fbt._("and a special color for your {username}", [x.fbt._param("username", n.a.createElement("div", {
						className: Oe.a.username,
						style: {
							color: i.color
						}
					}, n.a.createElement("img", {
						className: Oe.a.userBadge,
						src: i.url
					}), s))], {
						hk: "1HJQkU"
					})), n.a.createElement("div", {
						className: Object(l.a)(Oe.a.badges, {
							[Oe.a.smallCollection]: e.length <= 24
						})
					}, e.map(e => n.a.createElement("img", {
						className: Oe.a.badge,
						src: e.url,
						key: e.url
					}))))
				}
			}
			const Te = Object(o.c)({
				styleBadges: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(j.d)(e, s).filter(e => !(e.collections && e.collections.custom)).map(e => ({
						url: Object(y.d)(64, 64, e).url2x,
						color: e.extra && e.extra.style && e.extra.style.color || ""
					})).filter(e => e.color)
				},
				username: e => e.user.account && `u/${e.user.account.displayText}` || "u/username"
			});
			var Re = Object(r.b)(Te)(Me),
				Le = s("./src/reddit/pages/meta/MembershipPaywallPage/Benefits/index.m.less"),
				Be = s.n(Le);
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
				icon: `${v.a.assetPath}/img/memberships/paywall/fortnitebr/newbie.png`,
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
			class Ae extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						emojisExpanded: !1
					}
				}
				render() {
					const {
						achievementBadges: e = Fe,
						className: t,
						correlationId: s,
						loyaltyBadges: i,
						meta: r,
						subreddit: a
					} = this.props;
					return n.a.createElement("article", {
						className: Object(l.a)(t, Be.a.container)
					}, n.a.createElement("header", {
						className: Be.a.title
					}, x.fbt._("{member} Benefits", [x.fbt._param("member", r.member)], {
						hk: "xstxK"
					})), k(a.id).loyaltyBadges && i && !!i.length && n.a.createElement(u.a, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_4_loyalty_badges",
							correlationId: s,
							...f.n(e),
							subreddit: f.gb(e)
						})
					}, n.a.createElement(Ne, {
						showProgressBar: !0,
						className: Be.a.section,
						title: x.fbt._("Loyalty Badges", null, {
							hk: "agXF2"
						}),
						description: x.fbt._("Show how long you’ve been supporting the subreddit.", null, {
							hk: "1r4ZKB"
						}),
						items: i
					})), k(a.id).achievementBadges && n.a.createElement(u.a, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_5_achievement_badges",
							correlationId: s,
							...f.n(e),
							subreddit: f.gb(e)
						})
					}, n.a.createElement(Ne, {
						className: Be.a.section,
						title: x.fbt._("Achievement Badges", null, {
							hk: "4asfWh"
						}),
						description: x.fbt._("Get rewarded for reaching subreddit milestones. Available to the community at large, thanks to your support.", null, {
							hk: "3sEG2W"
						}),
						items: e
					})), k(a.id).styleBadges && n.a.createElement(u.a, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_6_style_badges",
							correlationId: s,
							...f.n(e),
							subreddit: f.gb(e)
						})
					}, n.a.createElement(Re, {
						className: Be.a.badges,
						subredditId: a.id
					})), k(a.id).emotes && n.a.createElement(u.a, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_7_premium_emojis",
							correlationId: s,
							...f.n(e),
							subreddit: f.gb(e)
						})
					}, n.a.createElement(Ee, {
						subreddit: a,
						onExpand: () => this.setState({
							emojisExpanded: !0
						})
					})), k(a.id).gifs && n.a.createElement(u.a, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_8_gifs_in_comments",
							correlationId: s,
							...f.n(e),
							subreddit: f.gb(e)
						})
					}, n.a.createElement(me, {
						emojisExpanded: this.state.emojisExpanded,
						subreddit: a
					})))
				}
			}
			const ze = Object(o.c)({
				loyaltyBadges: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(j.e)(e, s.id).map(e => ({
						icon: Object(y.d)(64, 64, e).url2x,
						text: e.title
					}))
				},
				meta: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(j.r)(e, s.id)
				}
			});
			var He = Object(r.b)(ze)(Ae),
				Ve = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				We = s("./src/reddit/pages/meta/MembershipPaywallPage/FAQ/index.m.less"),
				De = s.n(We);
			class Ge extends n.a.Component {
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
					} = this.props, i = function(e, t) {
						const {
							membershipAlt: s,
							memberAltPlural: i
						} = t, n = [{
							Q: x.fbt._("What is a {membershipAlt}?", [x.fbt._param("membershipAlt", s)], {
								hk: "1rUCQD"
							}),
							A: x.fbt._("The {membershipAlt} is a set of exclusive features available to users who purchase a premium subscription to the subreddit.", [x.fbt._param("membershipAlt", s)], {
								hk: "14RJNQ"
							})
						}, {
							Q: x.fbt._("Are {membershipAlt} features available on mobile apps?", [x.fbt._param("membershipAlt", s)], {
								hk: "3qaJjE"
							}),
							A: x.fbt._("The features are supported on the iOS and Android apps, as well as web.", null, {
								hk: "4FXbda"
							})
						}];
						return e.canGift && n.push({
							Q: x.fbt._("Can I gift a {membershipAlt} to other users?", [x.fbt._param("membershipAlt", s)], {
								hk: "1K5FbF"
							}),
							A: x.fbt._("Yes! If you'd like to gift a {membershipAlt}, send a PM to admin u/jarins.", [x.fbt._param("membershipAlt", s)], {
								hk: "895QP"
							})
						}), e.dedicatedSupport && n.push({
							Q: x.fbt._("What are the {membershipAlt} fees used for?", [x.fbt._param("membershipAlt", s)], {
								hk: "3TLe8q"
							}),
							A: x.fbt._("{memberAltPlural} support a unique project by Reddit to develop new features for this community.", [x.fbt._param("memberAltPlural", i)], {
								hk: "3GXXxI"
							})
						}), e.canCancel && n.push({
							Q: x.fbt._("How do I cancel my {membershipAlt}?", [x.fbt._param("membershipAlt", s)], {
								hk: "1w2Ob7"
							}),
							A: x.fbt._("You can cancel your membership at any time from the User Settings page. Look for the {membershipAlt} tab.", [x.fbt._param("membershipAlt", s)], {
								hk: "2HGeHZ"
							})
						}), n
					}(k(s.id), t);
					return n.a.createElement("div", {
						className: Object(l.a)(e, De.a.container)
					}, n.a.createElement("div", {
						className: De.a.title
					}, x.fbt._("{membershipAlt} FAQ", [x.fbt._param("membershipAlt", t.membershipAlt)], {
						hk: "4tP0lw"
					})), i.map(e => {
						let {
							Q: t,
							A: s
						} = e;
						return n.a.createElement("div", {
							className: De.a.section,
							key: t,
							onClick: () => this.toggleQuestion(t)
						}, n.a.createElement("div", {
							className: De.a.row
						}, n.a.createElement("div", {
							className: De.a.question
						}, t), n.a.createElement(Ve.a, {
							className: Object(l.a)(De.a.arrow, {
								[De.a.arrowClose]: !this.state.open[t]
							})
						})), !!this.state.open[t] && n.a.createElement("div", {
							className: De.a.answer
						}, s))
					}))
				}
			}
			const Ue = Object(o.c)({
				meta: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(j.r)(e, s.id)
				}
			});
			var Ze = Object(r.b)(Ue)(Ge),
				qe = s("./src/reddit/pages/meta/MembershipPaywallPage/Footer/index.m.less"),
				Xe = s.n(qe);
			const Ke = [7900, 8240];

			function Ye(e) {
				return n.a.createElement("footer", {
					className: Object(l.a)(Xe.a.container, e.className)
				}, n.a.createElement("div", {
					className: Xe.a.twoCol
				}, n.a.createElement("div", {
					className: Xe.a.copyright
				}, x.fbt._("© 2019 Reddit, Inc. All rights reserved", null, {
					hk: "1hv6BJ"
				}))), k(e.subreddit.id).animations && n.a.createElement("a", {
					className: Xe.a.link,
					href: "https://www.reddit.com/r/FortNiteBR/comments/a8mhn8/24_players_plays_all_i_want_for_christmas_is_you/",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.a.createElement("img", {
					className: Xe.a.pianoKeyboard,
					src: Object(S.a)(e.subreddit, "piano_keyboard@2x.png")
				}), n.a.createElement(O.a, {
					scrollRange: Ke
				}, t => n.a.createElement("img", {
					className: Xe.a.pianoCrowdBottom,
					src: Object(S.a)(e.subreddit, "piano_crowd_bottom@2x.png"),
					style: t
				})), n.a.createElement(O.a, {
					scrollRange: Ke
				}, t => n.a.createElement("img", {
					className: Xe.a.pianoCrowdTop,
					src: Object(S.a)(e.subreddit, "piano_crowd_top@2x.png"),
					style: t
				})), n.a.createElement(O.a, {
					scrollRange: Ke
				}, t => n.a.createElement("img", {
					className: Xe.a.pianoFlier,
					src: Object(S.a)(e.subreddit, "piano_flier@2x.png"),
					style: t
				}))))
			}
			var Je = s("./src/reddit/components/Economics/SubredditPremium/SubredditBrand/index.tsx"),
				Qe = s("./src/reddit/icons/svgs/Twinkle/index.tsx"),
				$e = s("./src/reddit/actions/login.ts"),
				et = s("./src/reddit/components/Economics/Price/index.tsx"),
				tt = s("./src/reddit/components/Economics/SubredditPremium/BlockchainCheckoutModal/async.tsx"),
				st = s("./src/reddit/components/Economics/SubredditPremium/constants.ts"),
				it = s("./src/higherOrderComponents/asModal/index.tsx"),
				nt = s("./src/reddit/components/Governance/TransactionModals/SubscriptionModal/async.ts"),
				rt = s("./src/reddit/contexts/PageLayer/index.tsx"),
				at = s("./src/reddit/featureFlags/component.tsx"),
				ot = s("./src/reddit/selectors/crypto/points.ts"),
				ct = s("./src/reddit/selectors/gov.ts"),
				dt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Cart/index.m.less"),
				lt = s.n(dt);
			const {
				fbt: mt
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function ut(e) {
				const {
					className: t,
					description: s,
					dollarPrice: i,
					monthly: r,
					subredditId: a,
					tokenPrice: o
				} = e;
				return n.a.createElement("article", {
					className: Object(l.a)(lt.a.container, t)
				}, n.a.createElement("div", {
					className: lt.a.description
				}, s), n.a.createElement("div", {
					className: lt.a.rhs
				}, n.a.createElement("div", {
					className: lt.a.price
				}, n.a.createElement(et.a, {
					dollarPrice: i,
					tokenPrice: o,
					monthly: r,
					subredditId: a
				})), r && n.a.createElement("div", {
					className: lt.a.monthlyText
				}, mt._("Paid monthly, cancel anytime", null, {
					hk: "1hG3H3"
				}))))
			}
			var pt = s("./src/lib/currency/currencies.ts"),
				ht = s("./src/lib/localizeCurrency/index.ts"),
				bt = s("./src/reddit/components/Econ/PreviewsTermsOfUseLink/index.tsx"),
				gt = s("./src/reddit/hooks/useLocale.ts"),
				ft = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Footer/index.m.less"),
				_t = s.n(ft);
			const xt = () => x.fbt._("{=Reddit User Agreement}, {=Privacy Policy} and {Previews Terms of Service}.", [x.fbt._param("=Reddit User Agreement", n.a.createElement("a", {
				className: _t.a.link,
				href: "https://www.redditinc.com/policies/user-agreement",
				target: "_blank",
				rel: "noopener noreferrer"
			}, x.fbt._("Reddit User Agreement", null, {
				hk: "4yY7NE"
			}))), x.fbt._param("=Privacy Policy", n.a.createElement("a", {
				className: _t.a.link,
				href: "https://www.redditinc.com/policies/privacy-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, x.fbt._("Privacy Policy", null, {
				hk: "2clnUk"
			}))), x.fbt._param("Previews Terms of Service", n.a.createElement(bt.a, {
				className: _t.a.linkLast
			}))], {
				hk: "3Jmx1D"
			});
			const vt = Object(o.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(j.r)(e, s)
				}
			});
			var yt = Object(r.b)(vt)((function(e) {
					const t = Object(gt.a)();
					if (e.purchaseType !== $t.Subscription) return n.a.createElement("footer", {
						className: Object(l.a)(e.className, _t.a.container)
					}, x.fbt._("By purchasing, you agree to", null, {
						hk: "37Xh4k"
					}), " ", n.a.createElement(xt, null));
					const s = e.dollarPrice && Object(ht.b)(e.dollarPrice, {
							locale: t,
							forceDecimals: !0
						}),
						i = e.tokenPrice && Object(ht.b)(e.tokenPrice, {
							locale: t,
							type: pt.b.Crypto,
							displayConversion: e.tokenDisplayConversion
						}),
						r = s && i ? x.fbt._("{dollarPrice} or {tokenPrice}", [x.fbt._param("dollarPrice", s), x.fbt._param("tokenPrice", i)], {
							hk: "1uXVRd"
						}) : s || (i || "");
					return n.a.createElement("footer", {
						className: Object(l.a)(e.className, _t.a.container)
					}, x.fbt._("{membershipName} auto-renews for {price} a month. Cancel anytime in the Special Memberships section of your User Settings. Cancel at least 24 hours before your subscription ends to avoid getting charged for the next month. No partial refunds. By continuing, you agree to", [x.fbt._param("membershipName", e.meta.membershipAlt), x.fbt._param("price", r)], {
						hk: "AMyMx"
					}), " ", n.a.createElement(xt, null))
				})),
				wt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Header/index.m.less"),
				Ct = s.n(wt);
			const {
				fbt: Et
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			const kt = Object(o.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(j.r)(e, s)
				}
			});
			var jt = Object(r.b)(kt)((function(e) {
					const {
						className: t,
						meta: s,
						purchaseType: i
					} = e;
					return n.a.createElement("header", {
						className: Object(l.a)(t, Ct.a.container)
					}, n.a.createElement("div", {
						className: Ct.a.text
					}, i === $t.Badge && Et._("Buy a badge", null, {
						hk: "1X4jZc"
					}), i === $t.Subscription && Et._("Buy {membership-name}", [Et._param("membership-name", s.membershipAlt)], {
						hk: "ObrN"
					})), n.a.createElement(q.a, {
						className: Ct.a.close,
						onClick: e.onClose
					}))
				})),
				Nt = s("./node_modules/bignumber.js/bignumber.js"),
				It = s("./src/reddit/components/Economics/SubredditPremium/Badges/ManagementModal/Preview/BadgeCard/CosmeticFooter/PurchaseButton/index.tsx"),
				Ot = s("./src/reddit/controls/Button/index.tsx"),
				Pt = s("./node_modules/react-router-redux/es/index.js"),
				St = s("./src/reddit/actions/economics/subredditPremium/actionCreators.ts"),
				Mt = s("./src/reddit/actions/economics/subredditPremium/thunkedActions.ts"),
				Tt = s("./src/reddit/actions/governance/errorToast.ts"),
				Rt = s("./src/reddit/actions/shortcuts/close.ts"),
				Lt = s("./src/reddit/contexts/ApiContext.tsx"),
				Bt = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				Ft = s("./src/reddit/endpoints/economics/specialMembership.ts"),
				At = s("./src/reddit/helpers/economics/setupSubredditPremiumButton.ts"),
				zt = s("./src/reddit/models/Badge/managementPage.ts"),
				Ht = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/PurchaseButton/index.m.less"),
				Vt = s.n(Ht);
			const Wt = "subreddit-premium-purchase-braintree",
				Dt = (e, t, s) => x.fbt._("{communityName} {membershipAlt}. {price}/month, automatically renews on a monthly basis. Cancel anytime. There are no refunds for partial months.", [x.fbt._param("communityName", e.displayText), x.fbt._param("membershipAlt", s.membershipAlt), x.fbt._param("price", Object(ht.b)(t, {
					forceDecimals: !0
				}))], {
					hk: "3yzefL"
				});
			class Gt extends n.a.Component {
				constructor() {
					super(...arguments), this.state = {
						loading: !0,
						submitting: !1
					}, this._isMounted = !1, this.alreadyPurchased = () => this.props.userIsPremiumSubscriber === j.a.Subscribed, this.getId = () => Wt + (this.props.uniqueId || "")
				}
				componentDidMount() {
					if (this._isMounted = !0, !this.alreadyPurchased()) {
						const e = this.props.membershipProducts.find(e => "usd" === e.currency);
						Object(At.a)({
							apiContext: this.props.apiContext(),
							config: {
								billingAgreement: Dt(this.props.subreddit, this.props.price, this.props.meta),
								type: "subscription"
							},
							elementId: this.getId(),
							price: () => this.props.price,
							purchaseFn: t => Object(Ft.d)(this.props.apiContext(), {
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
										...f.n(e),
										actionInfo: {
											reason: t,
											paneName: s
										},
										correlationId: this.props.correlationId,
										subreddit: f.gb(e)
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
									...f.n(e),
									subreddit: f.gb(e)
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
					return n.a.createElement("div", {
						className: Object(l.a)(this.props.className, Vt.a.container)
					}, this.alreadyPurchased() ? n.a.createElement("div", {
						className: Vt.a.alreadyPurchased
					}, x.fbt._("Already Purchased", null, {
						hk: "2h3Eug"
					})) : n.a.createElement(i.Fragment, null, n.a.createElement("div", {
						className: Object(l.a)(Vt.a.button, {
							[Vt.a.buttonWithoutCards]: !this.props.showCards,
							[Vt.a.loading]: this.state.loading,
							[Vt.a.submitting]: this.state.submitting
						}),
						id: this.getId()
					}), this.state.submitting && n.a.createElement(Bt.a, {
						className: Vt.a.loadingIcon,
						sizePx: 24
					})))
				}
			}
			const Ut = Object(o.c)({
				isLoggedIn: _.R,
				membershipProducts: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(j.k)(e, s.id)
				},
				meta: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(j.r)(e, s.id)
				},
				userIsPremiumSubscriber: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(j.x)(e, s.id)
				}
			});
			var Zt = Object(Lt.b)(Object(r.b)(Ut, (e, t) => {
					let {
						subreddit: s,
						onComplete: i
					} = t;
					return {
						onError: t => Object(Tt.a)(e, t),
						onPaymentSuccessful: t => {
							t ? e(Object(Mt.g)(s.id, !0)).then(() => e(Object(Rt.a)(() => {}))).then(() => i && i()).then(() => e(Object(St.c)({
								subredditId: s.id,
								initialView: zt.c.MyBadges
							}))) : e(Object(Pt.b)(s.url))
						}
					}
				})(Object(p.c)(Gt))),
				qt = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Payment/index.m.less"),
				Xt = s.n(qt);
			const {
				fbt: Kt
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Yt(e) {
				return n.a.createElement("div", {
					className: Xt.a.dollarPurchase
				}, e.target.type === $t.Badge && e.target.product.price && n.a.createElement(It.a, {
					correlationId: e.correlationId,
					key: "checkout-purchase-button",
					price: e.target.product.price,
					productId: e.target.product.id,
					subreddit: e.subreddit,
					onPaymentSuccessful: e.onPaymentComplete
				}), e.target.type === $t.Subscription && e.target.dollarPrice && n.a.createElement(Zt, {
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

			function Jt(e) {
				return !e.wallet || new Nt.BigNumber(e.wallet.amount).isLessThan(new Nt.BigNumber(e.tokenPrice)) ? n.a.createElement(Ot.l, {
					className: Xt.a.notEnoughTokens,
					disabled: !0
				}, Kt._("Not enough {token-name}", [Kt._param("token-name", e.tokenName)], {
					hk: "4urJTo"
				})) : n.a.createElement("div", {
					className: Xt.a.tokenPurchase
				}, n.a.createElement(Ot.l, {
					onClick: e.onPayWithTokens,
					className: Xt.a.tokenPurchaseButton
				}, Kt._("Pay with {token-name}", [Kt._param("token-name", e.tokenName)], {
					hk: "7b9oh"
				})), n.a.createElement("div", {
					className: Xt.a.requiresMobile
				}, Kt._("Requires Reddit Vault on mobile", null, {
					hk: "4oRRlp"
				})))
			}

			function Qt(e) {
				const {
					dollarPrice: t,
					monthly: s,
					subreddit: i,
					tokenPrice: r
				} = e;
				return n.a.createElement("div", {
					className: e.className
				}, t && r && n.a.createElement("div", {
					className: Xt.a.selectPaymentBox
				}, n.a.createElement("div", {
					className: Xt.a.selectPaymentTitleBox
				}, n.a.createElement("span", {
					className: Xt.a.selectPaymentTitle
				}, Kt._("Select Payment Method", null, {
					hk: "15rwcx"
				}))), n.a.createElement("div", {
					className: Xt.a.paymentContainer
				}, n.a.createElement("div", {
					className: Xt.a.paymentAmount
				}, n.a.createElement(et.a, {
					tokenPrice: r,
					monthly: s,
					subredditId: i.id,
					hideTokenName: !0
				})), n.a.createElement(Jt, e)), n.a.createElement("div", {
					className: Xt.a.paymentContainer
				}, n.a.createElement("div", {
					className: Xt.a.paymentAmount
				}, n.a.createElement(et.a, {
					dollarPrice: t,
					monthly: s,
					subredditId: i.id,
					hideTokenName: !0
				})), n.a.createElement(Yt, e))), t && !r && n.a.createElement(Yt, e), r && !t && n.a.createElement(Jt, e))
			}
			var $t, es = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/index.m.less"),
				ts = s.n(es);
			! function(e) {
				e[e.Badge = 0] = "Badge", e[e.Subscription = 1] = "Subscription"
			}($t || ($t = {}));
			class ss extends n.a.Component {
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
						username: i,
						onClose: r,
						onPaymentComplete: a,
						pointsDetails: o,
						wallet: c
					} = this.props;
					if (!s) return null;
					const d = t.type === $t.Badge ? t.product.price : t.dollarPrice,
						l = t.type === $t.Badge ? void 0 : t.tokenPrice;
					if (this.state.showTokenTransactionModal && l) return n.a.createElement(nt.a, {
						correlationId: e,
						onClose: r,
						onPaymentComplete: a,
						price: l,
						subredditId: s.id
					});
					const m = t.type === $t.Subscription,
						u = (null == o ? void 0 : o.name) || "";
					return n.a.createElement("div", {
						className: ts.a.container
					}, n.a.createElement(jt, {
						purchaseType: t.type,
						subredditId: s.id,
						onClose: r
					}), n.a.createElement("div", {
						className: ts.a.content
					}, n.a.createElement(ut, {
						className: ts.a.cart,
						description: t.description(s),
						dollarPrice: d,
						monthly: m,
						subredditId: s.id,
						tokenPrice: l
					}), n.a.createElement(Qt, {
						className: ts.a.payment,
						correlationId: e,
						dollarPrice: d,
						monthly: m,
						onPayWithTokens: () => this.setState({
							showTokenTransactionModal: !0
						}),
						onPaymentComplete: a,
						subreddit: s,
						target: t,
						tokenName: u,
						tokenPrice: l,
						trial: t.type === $t.Subscription && t.trial,
						username: i,
						wallet: c
					}), n.a.createElement(yt, {
						className: ts.a.footer,
						dollarPrice: d,
						purchaseType: t.type,
						subredditId: s.id,
						tokenDisplayConversion: null == o ? void 0 : o.displayConversion,
						tokenName: u,
						tokenPrice: l
					})))
				}
			}
			const is = Object(o.c)({
					pointsDetails: (e, t) => Object(ot.b)(e, t.subredditId),
					subreddit: (e, t) => t.subreddit,
					wallet: ct.d
				}),
				ns = Object(r.b)((e, t) => {
					const s = Object(rt.r)(e, t);
					return is(e, {
						...t,
						subreddit: s,
						subredditId: (null == s ? void 0 : s.id) || void 0
					})
				}),
				rs = Object(rt.u)(),
				as = Object(p.c)(ss);
			var os = Object(at.a)("spSpecialMemberships", Object(it.a)(rs(ns(as)))),
				cs = s("./src/reddit/components/Economics/SubredditPremium/CheckoutModal/Products/index.m.less"),
				ds = s.n(cs);

			function ls() {
				return (ls = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var i in s) Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
					}
					return e
				}).apply(this, arguments)
			}

			function ms(e) {
				const {
					dollarPrice: t,
					tokenPrice: s,
					trial: r,
					...a
				} = e;
				return n.a.createElement(os, ls({}, a, {
					target: {
						dollarPrice: t,
						tokenPrice: s,
						trial: r,
						description(e) {
							const t = e && e.displayText || "",
								s = x.fbt._("{communityName} Subreddit Supporter", [x.fbt._param("communityName", t)], {
									hk: "3VL2SS"
								});
							return n.a.createElement(i.Fragment, null, n.a.createElement("img", {
								className: ds.a.crown,
								src: st.a
							}), s)
						},
						type: $t.Subscription
					},
					viewEvent: t => ({
						source: "meta",
						action: "view",
						noun: "subscription_checkout_modal",
						correlationId: e.correlationId,
						...f.n(t),
						subreddit: f.gb(t)
					}),
					onPaymentComplete: e.onClose
				}))
			}
			var us = s("./src/reddit/components/Economics/SubredditPremium/PurchaseSuccessConfetti/index.tsx"),
				ps = s("./src/reddit/components/Governance/TransferPointsModal/Recipient/UsernameRecipient.tsx"),
				hs = s("./src/reddit/featureFlags/index.ts"),
				bs = s("./src/reddit/pages/meta/MembershipPaywallPage/PurchaseButton/index.m.less"),
				gs = s.n(bs);
			const {
				fbt: fs
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			class _s extends n.a.Component {
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
						subredditId: i,
						userIsLoggedIn: r
					} = this.props, {
						canGift: a
					} = k(i), o = s.prices, c = o.usd, d = o.points, l = this.props.userIsPremiumSubscriber === j.a.Subscribed;
					return n.a.createElement(n.a.Fragment, null, !r && a && n.a.createElement(ps.c, {
						className: gs.a.recipient,
						onChange: this.handleUserNameChange
					}), n.a.createElement("button", {
						className: gs.a.checkout,
						disabled: l || a && !r && !this.state.usernameIsValid,
						onClick: r ? this.openCheckout : this.props.openLoginModal
					}, n.a.createElement("div", {
						className: gs.a.shimmer
					}), l ? fs._("Already a {supporter-term}", [fs._param("supporter-term", s.member)], {
						hk: "30uNOq"
					}) : fs._("Become a {supporter-term}", [fs._param("supporter-term", s.member)], {
						hk: "3TcAfC"
					})), n.a.createElement(et.a, {
						className: gs.a.price,
						dollarPrice: c,
						tokenPrice: d,
						monthly: !0,
						subredditId: i
					}), this.state.checkoutOpen ? t ? n.a.createElement(tt.a, {
						withOverlay: !0,
						correlationId: e,
						subredditId: i,
						onClose: this.closeCheckout
					}) : n.a.createElement(ms, {
						withOverlay: !0,
						correlationId: e,
						dollarPrice: c,
						tokenPrice: d,
						username: !r && this.state.usernameIsValid ? this.state.username : void 0,
						onClose: this.closeCheckout
					}) : null, n.a.createElement(us.a, {
						subredditId: i
					}))
				}
			}
			const xs = Object(o.c)({
				meta: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(j.r)(e, s)
				},
				customCrypto: hs.d.spCustomCrypto,
				userIsLoggedIn: e => !!e.user.account,
				userIsPremiumSubscriber: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(j.x)(e, s)
				}
			});
			var vs = Object(r.b)(xs, e => ({
					openLoginModal: () => e(Object($e.i)())
				}))(_s),
				ys = s("./src/reddit/pages/meta/MembershipPaywallPage/Intro/index.m.less"),
				ws = s.n(ys);
			const Cs = Object(o.c)({
				meta: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(j.r)(e, s.id)
				}
			});
			var Es, ks, js = Object(r.b)(Cs)((function(e) {
					const {
						className: t,
						correlationId: s,
						meta: i,
						subreddit: r
					} = e;
					return n.a.createElement("div", {
						className: Object(l.a)(t, ws.a.container)
					}, n.a.createElement("div", {
						className: ws.a.logo
					}, n.a.createElement(Qe.a, {
						className: ws.a.radialHighlightInner
					}), n.a.createElement(Qe.a, {
						className: ws.a.radialHighlightOuter
					}), n.a.createElement(Je.a, {
						size: "large",
						subreddit: r
					})), n.a.createElement("header", {
						className: ws.a.subscriptionName
					}, "r/", r.name, " ", i.memberAltPlural), n.a.createElement("article", {
						className: ws.a.description
					}, x.fbt._("Support r/{communityName}. Get exclusive features in the community.", [x.fbt._param("communityName", r.name)], {
						hk: "13ofnK"
					})), n.a.createElement(vs, {
						checkoutOnLogin: !0,
						correlationId: s,
						subredditId: r.id
					}))
				})),
				Ns = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Is = s("./node_modules/react-motion/lib/react-motion.js"),
				Os = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/Testimonials/index.m.less"),
				Ps = s.n(Os);
			! function(e) {
				e[e.Right = 110] = "Right", e[e.Center = 50] = "Center", e[e.Left = -110] = "Left"
			}(Es || (Es = {})),
			function(e) {
				e[e.Right = 0] = "Right", e[e.Center = -310] = "Center", e[e.Left = -620] = "Left"
			}(ks || (ks = {}));
			const Ss = be()([{
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
				Ms = 1e4;
			class Ts extends n.a.Component {
				constructor() {
					super(...arguments), this.timeoutRef = null, this.state = {
						currentSlideIdx: 0
					}, this.gotoNextSlide = () => {
						this.timeoutRef && clearInterval(this.timeoutRef), this.setState({
							currentSlideIdx: (this.state.currentSlideIdx + 1) % this.props.testimonies.length
						}), this.timeoutRef = window.setTimeout(this.gotoNextSlide, Ms)
					}
				}
				componentDidMount() {
					this.timeoutRef = window.setTimeout(this.gotoNextSlide, Ms)
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
						currentSlideIdx: r
					} = this.state;
					return n.a.createElement("div", {
						className: Object(l.a)(e, Ps.a.container)
					}, n.a.createElement(Is.TransitionMotion, {
						defaultStyles: [{
							key: "slide-0",
							data: {
								index: 0
							},
							style: {
								left: Es.Center,
								marginLeft: ks.Center,
								opacity: 1
							}
						}],
						styles: [{
							key: `slide-${r}`,
							data: {
								index: r
							},
							style: {
								left: Object(Is.spring)(Es.Center),
								marginLeft: Object(Is.spring)(ks.Center),
								opacity: Object(Is.spring)(1)
							}
						}],
						willEnter: () => ({
							left: Es.Right,
							marginLeft: ks.Right,
							opacity: 0
						}),
						willLeave: () => ({
							left: Object(Is.spring)(Es.Left),
							marginLeft: Object(Is.spring)(ks.Left),
							opacity: Object(Is.spring)(0)
						})
					}, e => n.a.createElement(i.Fragment, null, e.map(e => {
						const r = s[e.data.index],
							a = r.badges.map(e => {
								const {
									url2x: t
								} = Object(y.d)(20, 20, e);
								return t
							}),
							o = pe()(r.badges),
							c = o && o.extra && o.extra.style && o.extra.style.color;
						return n.a.createElement(i.Fragment, null, n.a.createElement("div", {
							className: Ps.a.testimony,
							key: e.key,
							style: {
								left: `${e.style.left}%`,
								marginLeft: `${e.style.marginLeft}px`
							},
							onClick: this.gotoNextSlide
						}, n.a.createElement("svg", {
							className: Object(l.a)(Ps.a.testimonyOutline, {
								[Ps.a.testimonyOutlineFlat]: !!t
							}),
							viewBox: " 0 0 619 243",
							xmlns: "http://www.w3.org/2000/svg"
						}, n.a.createElement("path", {
							d: "M78.9989 58.4826C70.5322 59.7119 62.7479 63.9147 58.4403 71.3066C53.9012 79.0958 49 90.4192 49 103.001C49 116.034 51.9394 127.873 54.5482 135.813C56.7437 142.495 62.1609 147.369 68.9713 149.128C85.4673 153.389 123.116 160.96 193.436 165.111C196.937 168.49 198.713 173.771 198.713 181.427C198.713 181.427 201.841 181.739 207 174.001C208.968 171.049 209.995 168.285 210.517 166.018C214.102 166.188 217.762 166.349 221.5 166.501C325.757 170.721 486.315 161.046 533.817 157.928C542.454 157.361 550.345 152.8 554.249 145.074C559.465 134.75 566.176 118.719 568.5 101.001C570.389 86.6005 567.819 74.8754 564.58 66.5092C560.681 56.4386 550.794 50.9089 540.11 49.3352C504.988 44.1618 415.934 33.7517 297.5 39.5005C179.641 45.2214 106.881 54.4345 78.9989 58.4826Z"
						}), n.a.createElement("path", {
							d: "M58.4403 71.3066L57.5763 70.8031L58.4403 71.3066ZM78.9989 58.4826L79.1425 59.4723L78.9989 58.4826ZM54.5482 135.813L55.4982 135.501L54.5482 135.813ZM68.9713 149.128L69.2213 148.16L68.9713 149.128ZM193.436 165.111L194.13 164.392L193.864 164.135L193.495 164.113L193.436 165.111ZM198.713 181.427H197.713V182.332L198.614 182.422L198.713 181.427ZM207 174.001L207.832 174.555L207 174.001ZM210.517 166.018L210.564 165.02L209.73 164.98L209.542 165.794L210.517 166.018ZM221.5 166.501L221.46 167.5L221.5 166.501ZM533.817 157.928L533.882 158.926L533.817 157.928ZM554.249 145.074L555.141 145.525L554.249 145.074ZM568.5 101.001L567.508 100.87L568.5 101.001ZM564.58 66.5092L565.512 66.1482L564.58 66.5092ZM540.11 49.3352L539.964 50.3245L540.11 49.3352ZM297.5 39.5005L297.548 40.4993L297.5 39.5005ZM59.3043 71.8101C63.4213 64.7452 70.8961 60.6695 79.1425 59.4723L78.8552 57.493C70.1682 58.7542 62.0745 63.0841 57.5763 70.8031L59.3043 71.8101ZM50 103.001C50 90.6676 54.8096 79.523 59.3043 71.8101L57.5763 70.8031C52.9927 78.6685 48 90.1709 48 103.001H50ZM55.4982 135.501C52.9092 127.621 50 115.892 50 103.001H48C48 116.176 50.9697 128.125 53.5981 136.125L55.4982 135.501ZM69.2213 148.16C62.7244 146.482 57.5822 141.844 55.4982 135.501L53.5981 136.125C55.9052 143.147 61.5974 148.257 68.7212 150.096L69.2213 148.16ZM193.495 164.113C123.223 159.964 85.6407 152.401 69.2213 148.16L68.7212 150.096C85.2939 154.377 123.009 161.955 193.377 166.11L193.495 164.113ZM199.713 181.427C199.713 173.637 197.907 168.036 194.13 164.392L192.742 165.831C195.967 168.943 197.713 173.906 197.713 181.427H199.713ZM206.168 173.446C203.639 177.239 201.662 178.976 200.393 179.767C199.761 180.161 199.306 180.319 199.044 180.384C198.913 180.416 198.827 180.425 198.789 180.428C198.77 180.429 198.762 180.429 198.766 180.429C198.768 180.429 198.773 180.429 198.781 180.429C198.784 180.43 198.789 180.43 198.794 180.43C198.797 180.431 198.8 180.431 198.803 180.431C198.804 180.431 198.806 180.431 198.808 180.431C198.808 180.432 198.81 180.432 198.81 180.432C198.811 180.432 198.812 180.432 198.713 181.427C198.614 182.422 198.615 182.422 198.617 182.422C198.617 182.422 198.618 182.422 198.619 182.423C198.621 182.423 198.623 182.423 198.625 182.423C198.628 182.423 198.632 182.424 198.637 182.424C198.645 182.425 198.654 182.425 198.664 182.426C198.684 182.427 198.707 182.428 198.733 182.428C198.785 182.429 198.85 182.428 198.926 182.423C199.079 182.412 199.278 182.385 199.521 182.326C200.006 182.207 200.656 181.96 201.451 181.464C203.035 180.477 205.202 178.5 207.832 174.555L206.168 173.446ZM209.542 165.794C209.045 167.952 208.063 170.603 206.168 173.446L207.832 174.555C209.872 171.495 210.944 168.618 211.491 166.243L209.542 165.794ZM221.54 165.501C217.805 165.35 214.147 165.189 210.564 165.02L210.47 167.017C214.057 167.187 217.72 167.348 221.46 167.5L221.54 165.501ZM533.751 156.93C486.241 160.048 325.736 169.72 221.54 165.501L221.46 167.5C325.779 171.723 486.388 162.043 533.882 158.926L533.751 156.93ZM553.356 144.623C549.634 151.989 542.087 156.383 533.751 156.93L533.882 158.926C542.82 158.339 551.056 153.611 555.141 145.525L553.356 144.623ZM567.508 100.87C565.205 118.433 558.547 134.351 553.356 144.623L555.141 145.525C560.384 135.149 567.147 119.004 569.492 101.131L567.508 100.87ZM563.647 66.8703C566.836 75.1069 569.372 86.6627 567.508 100.87L569.492 101.131C571.405 86.5382 568.802 74.6438 565.512 66.1482L563.647 66.8703ZM539.964 50.3245C550.439 51.8675 559.924 57.2547 563.647 66.8703L565.512 66.1482C561.437 55.6226 551.148 49.9503 540.256 48.3459L539.964 50.3245ZM297.548 40.4993C415.903 34.7544 504.889 45.1581 539.964 50.3245L540.256 48.3459C505.086 43.1655 415.966 32.749 297.452 38.5017L297.548 40.4993ZM79.1425 59.4723C106.993 55.4287 179.721 46.2187 297.548 40.4993L297.452 38.5017C179.56 44.2242 106.769 53.4403 78.8552 57.493L79.1425 59.4723Z",
							fill: "#9F68D4",
							"fill-opacity": "0.1"
						})), n.a.createElement("div", {
							className: Ps.a.testimonyText
						}, r.text)), n.a.createElement("div", {
							className: Ps.a.user,
							key: `user-${e.key}`,
							style: {
								opacity: e.style.opacity
							}
						}, a.map(e => n.a.createElement("img", {
							className: Ps.a.badge,
							src: e
						})), n.a.createElement("div", {
							className: Ps.a.username,
							style: {
								color: c
							}
						}, `u/${r.username}`)))
					}))), n.a.createElement("div", {
						className: Ps.a.indicators
					}, s.map((e, t) => n.a.createElement("div", {
						className: Object(l.a)(Ps.a.indicator, {
							[Ps.a.indicatorSelected]: t === r
						}),
						key: t,
						onClick: () => this.setState({
							currentSlideIdx: t
						})
					}))))
				}
			}
			Ts.defaultProps = {
				testimonies: Ss
			};
			var Rs = s("./src/reddit/pages/meta/MembershipPaywallPage/Thanks/index.m.less"),
				Ls = s.n(Rs);
			const Bs = Object(o.c)({
				meta: (e, t) => {
					let {
						subreddit: s
					} = t;
					return Object(j.r)(e, s.id)
				}
			});
			var Fs = Object(r.b)(Bs)((function(e) {
					const {
						className: t,
						correlationId: s,
						meta: i,
						subreddit: r
					} = e, a = k(r.id);
					return n.a.createElement("article", {
						className: Object(l.a)(Ls.a.container, t)
					}, a.communityThanks && n.a.createElement("header", {
						className: Ls.a.title
					}, x.fbt._("The Community Thanks You", null, {
						hk: "28CsBt"
					})), a.testimonials && n.a.createElement(Ts, {
						flatDisplay: !0
					}), a.testimonials && n.a.createElement("div", {
						className: Ls.a.divider
					}), n.a.createElement("footer", {
						className: Ls.a.footer
					}, n.a.createElement(Je.a, {
						className: Ls.a.brand,
						size: "large",
						subreddit: r
					}), n.a.createElement("div", {
						className: Ls.a.cta
					}, n.a.createElement("div", {
						className: Ls.a.description
					}, x.fbt._("Support r/{communityName} with a {membership}", [x.fbt._param("communityName", r.name), x.fbt._param("membership", i.membership)], {
						hk: "3M1a22"
					})), n.a.createElement("div", {
						className: Ls.a.benefits
					}, a.styleBadges && n.a.createElement("div", {
						className: Ls.a.benefit
					}, n.a.createElement(Ns.a, {
						className: Ls.a.check
					}), "Add a badge and color to your username"), a.emotes && n.a.createElement("div", {
						className: Ls.a.benefit
					}, n.a.createElement(Ns.a, {
						className: Ls.a.check
					}), "Get access to premium animated emotes"), a.gifs && n.a.createElement("div", {
						className: Ls.a.benefit
					}, n.a.createElement(Ns.a, {
						className: Ls.a.check
					}), "Add GIFs to your comments")), n.a.createElement(vs, {
						subredditId: r.id,
						correlationId: s
					}))))
				})),
				As = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/index.m.less"),
				zs = s.n(As),
				Hs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Footer/index.tsx"),
				Vs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Header/index.m.less"),
				Ws = s.n(Vs);
			const Ds = [800, 1200];

			function Gs(e) {
				const {
					className: t,
					subreddit: s
				} = e;
				return n.a.createElement("header", {
					className: Object(l.a)(Ws.a.container, t)
				}, n.a.createElement("div", {
					className: Ws.a.tag
				}, x.fbt._("benefits", null, {
					hk: "3HAYfG"
				})), n.a.createElement("div", {
					className: Ws.a.title
				}, x.fbt._("What do you get?", null, {
					hk: "3PyKKB"
				})), k(s.id).animations && n.a.createElement("a", {
					href: "https://www.reddit.com/r/FortNiteBR/comments/a1hxn4/the_moment_my_son_discovered_that_his_skin/",
					target: "_blank",
					rel: "noopener noreferrer"
				}, n.a.createElement(O.a, {
					scrollRange: Ds
				}, e => n.a.createElement("img", {
					className: Ws.a.chickenRightArm,
					src: Object(S.a)(s, "chicken_right_arm@2x.png"),
					style: e
				})), n.a.createElement("img", {
					className: Ws.a.chickenTorso,
					src: Object(S.a)(s, "chicken_torso@2x.png")
				}), n.a.createElement(O.a, {
					scrollRange: Ds
				}, e => n.a.createElement("img", {
					className: Ws.a.chickenLeftArm,
					src: Object(S.a)(s, "chicken_left_arm@2x.png"),
					style: e
				})), n.a.createElement("img", {
					className: Ws.a.chickenLeftShoulder,
					src: Object(S.a)(s, "chicken_left_shoulder@2x.png")
				}), n.a.createElement("img", {
					className: Ws.a.chickenHead,
					src: Object(S.a)(s, "chicken_head@2x.png")
				})))
			}
			var Us = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/Tip/index.m.less"),
				Zs = s.n(Us);

			function qs(e) {
				return n.a.createElement("div", {
					className: Object(l.a)(e.className, Zs.a.container)
				}, n.a.createElement("div", {
					className: Zs.a.circle
				}, e.index), n.a.createElement("div", {
					className: Zs.a.circleShimmer
				}), n.a.createElement("div", {
					className: Zs.a.tooltipWrapper
				}, n.a.createElement("svg", {
					className: Zs.a.tooltip,
					viewBox: "0 0 140 60",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M8 0C3.58172 0 0 3.58172 0 8V42C0 46.4183 3.58172 50 8 50H60.3934L69.6066 59.2132L78.8198 50H132C136.418 50 140 46.4183 140 42V8C140 3.58172 136.418 0 132 0H8Z"
				})), n.a.createElement("div", {
					className: Zs.a.tooltipText
				}, e.text)))
			}
			var Xs = s("./src/reddit/pages/meta/MembershipPaywallPage/WhatDoYouGet/CommentThread/index.m.less"),
				Ks = s.n(Xs);

			function Ys(e) {
				const t = Object(S.a)(e.subreddit, "what-do-you-get.png");
				return n.a.createElement("article", {
					className: Object(l.a)(Ks.a.container, e.className)
				}, n.a.createElement(Gs, {
					subreddit: e.subreddit
				}), n.a.createElement("div", {
					className: Ks.a.content
				}, n.a.createElement("img", {
					className: Ks.a.img,
					src: t
				}), n.a.createElement("img", {
					className: Ks.a.emoji,
					src: "https://meta.redditmedia.com/img/fortnitebr/emotes/oof-2x.gif"
				}), n.a.createElement("img", {
					className: Ks.a.gif,
					src: "http://giphygifs.s3.amazonaws.com/media/HX3lSnGXZnaWk/giphy.gif"
				}), n.a.createElement(qs, {
					className: Ks.a.tip1,
					index: 1,
					text: x.fbt._("Get up to 3 badges", null, {
						hk: "2ftguA"
					})
				}), n.a.createElement(qs, {
					className: Ks.a.tip2,
					index: 2,
					text: x.fbt._("Use animated emojis in comments", null, {
						hk: "1teakj"
					})
				}), n.a.createElement(qs, {
					className: Ks.a.tip3,
					index: 3,
					text: x.fbt._("Embed GIF directly in your comments", null, {
						hk: "1fLSUy"
					})
				})), k(e.subreddit.id).animations && n.a.createElement(Hs.a, {
					className: Ks.a.footer,
					subreddit: e.subreddit
				}))
			}

			function Js(e) {
				const t = k(e.subreddit.id),
					s = t.styleBadges && t.emotes && t.gifs;
				return n.a.createElement("article", {
					className: Object(l.a)(e.className, zs.a.container)
				}, t.testimonials && n.a.createElement(u.a, {
					fireOnce: !0,
					onEnter: t => ({
						source: "meta",
						action: "view",
						noun: "landing_page_2_testimonials",
						correlationId: e.correlationId,
						...f.n(t),
						subreddit: f.gb(t)
					})
				}, n.a.createElement(Ts, null)), s && n.a.createElement(u.a, {
					fireOnce: !0,
					onEnter: t => ({
						source: "meta",
						action: "view",
						noun: "landing_page_3_what_do_you_get",
						correlationId: e.correlationId,
						...f.n(t),
						subreddit: f.gb(t)
					})
				}, n.a.createElement(Ys, {
					subreddit: e.subreddit
				})))
			}
			var Qs = s("./src/reddit/pages/meta/MembershipPaywallPage/index.m.less"),
				$s = s.n(Qs);
			class ei extends n.a.Component {
				constructor(e) {
					super(e);
					const t = Object(m.a)(location.search);
					this.correlationId = t && t.get("corr") || d()()
				}
				componentDidMount() {
					this.props.sendEvent(e => ({
						source: "meta",
						action: "view",
						noun: "subscription_learn_more_page",
						correlationId: this.correlationId,
						...f.n(e),
						subreddit: f.gb(e)
					}))
				}
				render() {
					const {
						isOverlay: e,
						subreddit: t
					} = this.props;
					return t ? h.b.has(t.name.toLowerCase()) ? n.a.createElement("div", {
						className: Object(l.a)($s.a.container, {
							[$s.a.notOverlay]: !e,
							[$s.a.overlay]: e
						})
					}, n.a.createElement(u.a, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_1_intro",
							correlationId: this.correlationId,
							...f.n(e),
							subreddit: f.gb(e)
						})
					}, n.a.createElement(js, {
						correlationId: this.correlationId,
						subreddit: t
					})), n.a.createElement(Js, {
						className: $s.a.whatDoYouGet,
						correlationId: this.correlationId,
						subreddit: t
					}), n.a.createElement(He, {
						className: $s.a.benefits,
						correlationId: this.correlationId,
						subreddit: t
					}), n.a.createElement(u.a, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_10_community_thanks",
							correlationId: this.correlationId,
							...f.n(e),
							subreddit: f.gb(e)
						})
					}, n.a.createElement(Fs, {
						className: $s.a.thanks,
						correlationId: this.correlationId,
						subreddit: t
					})), n.a.createElement(u.a, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_11_faq",
							correlationId: this.correlationId,
							...f.n(e),
							subreddit: f.gb(e)
						})
					}, n.a.createElement(Ze, {
						className: $s.a.faq,
						subreddit: t
					})), n.a.createElement(u.a, {
						fireOnce: !0,
						onEnter: e => ({
							source: "meta",
							action: "view",
							noun: "landing_page_12_footer",
							correlationId: this.correlationId,
							...f.n(e),
							subreddit: f.gb(e)
						})
					}, n.a.createElement(Ye, {
						className: $s.a.footer,
						subreddit: t
					}))) : n.a.createElement(a.c, {
						to: `/r/${t.name}`
					}) : null
				}
			}
			const ti = Object(o.c)({
				currentUser: _.l,
				isOverlay: b.i,
				subreddit: (e, t) => {
					let {
						match: s
					} = t;
					const i = s.params.subredditName;
					if (i) return Object(g.z)(e, {
						subredditName: i
					})
				}
			});
			var si;
			t.default = Object(p.c)(Object(r.b)(ti)((si = ei, class extends i.Component {
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
					return this.state.mounted ? n.a.createElement(si, this.props) : null
				}
			})))
		},
		"./src/reddit/selectors/economics.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return g
			})), s.d(t, "o", (function() {
				return f
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "x", (function() {
				return x
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "q", (function() {
				return w
			})), s.d(t, "h", (function() {
				return C
			})), s.d(t, "z", (function() {
				return E
			})), s.d(t, "l", (function() {
				return k
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "e", (function() {
				return N
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "p", (function() {
				return P
			})), s.d(t, "k", (function() {
				return T
			})), s.d(t, "r", (function() {
				return L
			})), s.d(t, "y", (function() {
				return B
			})), s.d(t, "u", (function() {
				return F
			})), s.d(t, "v", (function() {
				return A
			})), s.d(t, "b", (function() {
				return z
			})), s.d(t, "w", (function() {
				return H
			})), s.d(t, "s", (function() {
				return V
			})), s.d(t, "t", (function() {
				return W
			})), s.d(t, "g", (function() {
				return D
			})), s.d(t, "m", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var i = s("./src/reddit/featureFlags/index.ts"),
				n = s("./src/reddit/helpers/economics/sortBadges.ts"),
				r = s("./src/reddit/helpers/richTextJson/index.ts"),
				a = s("./src/reddit/models/Badge/index.ts"),
				o = s("./src/reddit/models/Badge/managementPage.ts"),
				c = s("./src/reddit/models/Payments/index.ts"),
				d = s("./src/reddit/models/Product/index.ts"),
				l = s("./src/reddit/reducers/economics/paymentSystems/index.ts"),
				m = s("./src/reddit/reducers/economics/subredditPremium/index.ts"),
				u = s("./src/reddit/selectors/commentSelector.ts"),
				p = s("./src/reddit/selectors/gold/powerups/index.ts"),
				h = s("./src/reddit/selectors/gold/powerups/benefitSettings.ts");
			const b = [],
				g = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const e = s.data.subscription,
							t = e && e.active;
						if (t) {
							let e = Object.keys(t);
							return e.length > 1 && (e = e.filter(e => "provisional_membership" !== e)), t[e[0]] || null
						}
					}
					return null
				},
				f = (e, t) => {
					const s = g(e, t);
					return s && s.endsAt || null
				};
			var _;
			! function(e) {
				e[e.DontKnow = 0] = "DontKnow", e[e.NotSubscribed = 1] = "NotSubscribed", e[e.Subscribed = 2] = "Subscribed"
			}(_ || (_ = {}));
			const x = (e, t) => {
					const s = e.economics.subredditPremium[t];
					if (s && s.status === m.a.Fetched) {
						const s = f(e, t),
							i = Date.now();
						return s && i < s ? _.Subscribed : _.NotSubscribed
					}
					return _.DontKnow
				},
				v = (e, t) => {
					const s = e.user.account,
						i = e.economics.subredditPremium[t];
					if (s && i && i.status === m.a.Fetched) {
						const i = ((e.users.appliedBadges[s.id] || {})[t] || b).map(t => e.badges.models[t]).filter(Boolean);
						if (i) return {
							[o.a.Loyalty]: i.find(e => e.placement === a.a.First),
							[o.a.Achievement]: i.find(e => e.placement === a.a.Second),
							[o.a.Cosmetic]: i.find(e => !e.placement)
						}
					}
					return {
						[o.a.Loyalty]: void 0,
						[o.a.Achievement]: void 0,
						[o.a.Cosmetic]: void 0
					}
				};

			function y(e, t) {
				return (null == e ? void 0 : e.length) ? Object(n.a)(e.map(e => t[e]).filter(Boolean)) : b
			}
			const w = (e, t, s) => {
					var n;
					if (!i.d.spBadges(e)) return b;
					return y(null === (n = e.users.appliedBadges[s]) || void 0 === n ? void 0 : n[t], e.badges.models)
				},
				C = (e, t) => {
					const s = e.economics.subredditPremium[t.subredditId];
					if (s && s.status === m.a.Fetched) {
						const e = s.raw.collections[t.collectionId];
						if (e) return {
							highlight: e.extra && e.extra.style && e.extra.style.color,
							title: e.title
						}
					}
				};

			function E(e, t) {
				const s = (e.economics.me.data.specialMemberships || {})[t];
				return !!(s && s.settings && s.settings.optOut)
			}

			function k(e, t) {
				const {
					badge: s,
					subredditId: i
				} = t, n = e.user.account ? e.user.account.id : void 0;
				if (Object(a.e)(s) && s.userId === n) return s;
				const r = e.badges.models,
					o = e.user.ownedBadges[i] || {},
					c = Object(a.e)(s) ? s.type : s.id;
				return Object.keys(o).map(e => r[e]).find(e => e && e.type === c)
			}

			function j(e, t, s, i) {
				const n = e.economics.subredditPremium[t];
				if (n && n.status === m.a.Fetched) {
					if (s === o.a.Loyalty || s === o.a.Achievement) return n.data.collections[s];
					if (s === o.a.Cosmetic && i) return n.data.collections[s][i]
				}
				return b
			}

			function N(e, t) {
				const s = j(e, t, o.a.Loyalty).find(e => "membership" === e.id);
				return s ? [].concat(s.locked, s.unlocked).filter(e => e.position).sort((e, t) => e.position - t.position) : b
			}

			function I(e, t) {
				const s = e.economics.subredditPremium[t];
				if (s && s.status === m.a.Fetched) {
					const e = s.data.collections[o.a.Cosmetic];
					return Object.values(e).reduce((e, t) => e.concat(t), []).reduce((e, t) => e.concat(t.locked, t.unlocked), []).filter(a.f)
				}
				return b
			}

			function O(e, t) {
				return j(e, t, o.a.Cosmetic, o.c.Gallery).some(e => e.locked.some(e => Object(a.f)(e) || !!e.price))
			}
			const P = e => {
				const t = [],
					s = e.economics.paymentSystems;
				if (s.status === l.a.Fetched && s.data.stripe && s.data.stripe.sources) {
					const e = s.data.stripe.sources;
					for (const s in e) {
						const i = e[s];
						t.push({
							display: `${i.brand} •••• ${i.last4}`,
							id: s,
							type: c.a.SavedStripe
						})
					}
				}
				if (s.status === l.a.Fetched && s.data.braintree && s.data.braintree.sources) {
					const e = s.data.braintree.sources;
					for (const s in e) {
						const i = e[s];
						"PayPal" === i.brand && t.push({
							display: "PayPal",
							id: i.id,
							type: c.a.SavedPayPal
						})
					}
				}
				return t
			};
			var S;
			! function(e) {
				e[e.Fetched = 0] = "Fetched", e[e.Fetching = 1] = "Fetching", e[e.NotFetched = 2] = "NotFetched"
			}(S || (S = {}));
			const M = {
					prices: {},
					member: "Supporter",
					memberPlural: "Supporters",
					memberAlt: "Subreddit Supporter",
					memberAltPlural: "Subreddit Supporters",
					membership: "Membership",
					membershipAlt: "Supporter Membership"
				},
				T = (e, t) => Object.values(e.products.models).filter(e => e.type === d.a.Membership && t && e.subredditId === t),
				R = (e, t) => {
					if (!t) return {};
					const s = M.prices;
					T(e, t).forEach(e => {
						e.price && e.currency && (s[e.currency] = e.price)
					});
					const i = g(e, t);
					return i && i.price && i.currency && (s[i.currency] = i.price), s
				},
				L = (e, t) => {
					var s, i, n, r;
					const a = (null === (r = null === (n = null === (i = null === (s = e.features) || void 0 === s ? void 0 : s.crypto) || void 0 === i ? void 0 : i.points) || void 0 === n ? void 0 : n[t || ""]) || void 0 === r ? void 0 : r.nomenclature) || M;
					return {
						prices: R(e, t),
						member: a.member || M.member,
						memberPlural: a.memberPlural || M.memberPlural,
						memberAlt: a.memberAlt || M.memberAlt,
						memberAltPlural: a.memberAltPlural || M.memberAltPlural,
						membership: a.membership || M.membership,
						membershipAlt: a.membershipAlt || M.membershipAlt
					}
				},
				B = e => {
					const t = e.economics.paymentSystems;
					return !!(t.status === l.a.Fetched && t.data && t.data.tips && t.data.tips.usdr && t.data.tips.usdr.allowed)
				},
				F = (e, t) => {
					const s = e.user.ownedBadges[t] || {};
					return !!Object.keys(s).length
				},
				A = e => {
					const t = e.economics.paymentSystems;
					return t.status === l.a.Fetched && !!t.data && !!t.data.stripe && !!t.data.stripe.stripeAccountId
				},
				z = (e, t) => {
					let {
						subredditId: s
					} = t;
					if (!s) return;
					return e.economics.emotes[s]
				},
				H = (e, t) => {
					const s = t && e.economics.gifs[t];
					return !!s && s.hasGifProduct
				},
				V = (e, t, s) => {
					if (Object(p.r)(e, {
							subredditId: t
						})) return !0;
					const i = "replyToPost" !== s && Object(u.b)(e, {
						commentId: s
					});
					return !(!i || !Object(r.a)(i))
				},
				W = (e, t, s) => {
					if (!Object(h.b)(e, {
							subredditId: t
						})) return !1;
					if (Object(p.s)(e, {
							subredditId: t
						})) return !0;
					const n = "replyToPost" !== s && Object(u.b)(e, {
						commentId: s
					});
					if (n && Object(r.b)(n)) return !0;
					const a = i.d.spGiphy(e),
						o = H(e, t);
					return !(!a || !o) || a && o
				},
				D = (e, t, s) => {
					if (t) {
						const i = e.economics.banners.dismissedBanners[t];
						if (i && i.data) return !!i.data[s]
					}
				},
				G = e => e.economics.pointsCopy.data
		},
		"./src/reddit/selectors/gov.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			}));
			var i = s("./src/reddit/contexts/PageLayer/index.tsx");
			const n = [],
				r = {},
				a = (e, t) => {
					const s = p(e, t);
					if (s) return s.mainHeader
				},
				o = (e, t) => {
					const s = p(e, t);
					return s && s.mainHeader ? s.mainHeader.price : "0"
				},
				c = (e, t) => {
					const s = p(e, t);
					return s && s.mainHeader ? {
						owner: s.mainHeader.owner,
						ownerId: s.mainHeader.ownerId
					} : r
				},
				d = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const s = d(e, t),
						i = s && s.publicAddress;
					if (!i) throw new Error("No wallet address found");
					return i
				},
				m = (e, t) => {
					const s = d(e, t);
					return s && s.amount || "0"
				},
				u = (e, t) => {
					const s = Object(i.n)(e, t);
					return s && e.subreddits.gov.releaseNotes[s] || n
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/MembershipPaywallPage.f2cc290c8031c297b184.js.map