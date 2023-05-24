// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.85ceba4c976ddb94eac1.js
// Retrieved at 5/24/2023, 2:40:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var o;
			o = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function o(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var n, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						f = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						x = !a && !u && !m && !p && /linux/i.test(t),
						_ = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						v = !O && /[^-]mobi/i.test(t),
						C = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: E || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || E
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: E || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: E || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: E || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || E
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
						version: E || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: E || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || E
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || E
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || E
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? n = {
						name: "Android",
						version: E
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, E && (n.version = E)) : r ? (n = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, E && (n.version = E)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || E
					} : {
						name: s(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && E && (n.version = E)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !a && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : h ? (n.mac = e, n.osname = "macOS") : C ? (n.xbox = e, n.osname = "Xbox") : f ? (n.windows = e, n.osname = "Windows") : x && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var g = "";
					n.windows ? g = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? g = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? g = (g = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? g = (g = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? g = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? g = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? g = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? g = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (g = s(/tizen[\/\s](\d+(\.\d+)*)/i)), g && (n.osversion = g);
					var S = !n.windows && g.split(".")[0];
					return O || c || "ipad" == r || a && (3 == S || S >= 4 && !v) || n.silk ? n.tablet = e : (v || "iphone" == r || "ipod" == r || a || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) o.push(t(e[s]));
					return o
				}

				function r(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), s = n(e, (function(e) {
							var s = t - o(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, o, n) {
					var a = s;
					"string" == typeof o && (n = o, o = void 0), void 0 === o && (o = !1), n && (a = t(n));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([i, e[c]]) < 0
						} return o
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = r, s.check = function(e, t, s) {
					return !a(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = o() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", o)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, o, n) {
				return n(e, (function(e, n, r) {
					s = o ? (o = !1, e) : t(s, e, n, r)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), o(n(e), t, s)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_arrayReduce.js"),
				n = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? o : a,
					d = arguments.length < 3;
				return c(e, r(t, 4), s, d, n)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var o = s("./node_modules/lodash/toString.js"),
				n = 0;
			e.exports = function(e) {
				var t = ++n;
				return o(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/LiveChatActiveUsers/index.m.less": function(e, t, s) {
			e.exports = {
				liveChatActiveUsers: "_25wqhmS87KWZppCM1ZHphX"
			}
		},
		"./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				liveParticipation: "_3qjBuOjYOffFET145CIGgi"
			}
		},
		"./src/lib/LiveLabel/index.m.less": function(e, t, s) {
			e.exports = {
				LiveLabel: "_1-nQNZpTU7wWajQDxaSGx8",
				liveLabel: "_1-nQNZpTU7wWajQDxaSGx8"
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			const o = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/reddit/models/Media/index.ts"),
				n = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = s.n(n);
			t.a = function(e) {
				var t;
				const {
					source: s,
					isSponsored: n,
					domainOverride: a,
					callToAction: i
				} = e;
				let c = "";
				if (n) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == i ? void 0 : i.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					c = a || Object(o.E)(e)
				} else c = Object(o.E)(e);
				const d = r.a.parse(c),
					l = d.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts");
			const r = [n.yc, n.vb, n.E, n.V, n.qb, n.Xb],
				a = {
					[n.Xb]: e => o.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [o.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[n.qb]: e => o.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [o.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[n.V]: e => o.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [o.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[n.E]: e => o.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [o.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[n.vb]: e => o.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [o.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[n.yc]: e => o.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [o.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[n.Xb]: e => o.fbt._("{amount}s", [o.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[n.qb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[n.V]: e => o.fbt._("{amount}h", [o.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[n.E]: e => o.fbt._("{amount}d", [o.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[n.vb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.yc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[n.vb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.yc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[n.yc]: "",
						[n.vb]: "",
						[n.E]: "",
						[n.V]: "",
						[n.qb]: "",
						[n.Xb]: ""
					};
				let u = d - c;
				if (u <= 0) return o.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const o of r) {
					const e = Math.floor(u / o);
					e && (l[o] = (t ? i : a)[o](e).toString()), u -= e * o
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? m : o.fbt._("{amount of time left} left", [o.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "e", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			const o = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				n = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			}));
			const o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return n
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			const o = "MOD_PAGE_EVENT_POSTS_LOADED",
				n = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				i = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "g", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "t", (function() {
				return d
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "r", (function() {
				return u
			})), s.d(t, "s", (function() {
				return m
			})), s.d(t, "n", (function() {
				return p
			})), s.d(t, "l", (function() {
				return b
			})), s.d(t, "m", (function() {
				return f
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "j", (function() {
				return _
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "q", (function() {
				return v
			})), s.d(t, "o", (function() {
				return C
			}));
			const o = "CREATE_COLLECTION_PENDING",
				n = "CREATE_COLLECTION_SUCCESS",
				r = "CREATE_COLLECTION_FAILED",
				a = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				i = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				f = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				h = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				x = "REORDER_COLLECTION_PENDING",
				_ = "REORDER_COLLECTION_SUCCESS",
				E = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				v = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				C = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./src/lib/matchRoute/index.ts"),
				n = s("./src/lib/opener/index.ts"),
				r = s("./node_modules/react-router-redux/es/index.js");
			const a = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (s, a, i) => {
					let {
						routes: c
					} = i;
					const d = a();
					Object(o.a)(e, c, d) ? s(Object(r.b)(e)) : t ? Object(n.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/ClassicPost/index.m.less"),
				c = s.n(i);
			t.a = e => {
				let {
					className: t,
					classNameInnerThumbnail: s,
					crosspost: o,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: m,
					templatePlaceholderImage: p,
					thumbnailContainerClassName: b,
					url: f,
					usePreview: h
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(c.a.thumbnailContainer, t)
				}, n.a.createElement(a.b, {
					className: Object(r.a)(c.a.thumbnail, s),
					containerClassName: b,
					crosspost: o,
					forceShowNSFW: i,
					isMeta: d,
					post: l,
					redditStyle: u,
					removeLink: m,
					templatePlaceholderImage: p,
					url: m ? void 0 : f,
					usePreview: h
				}))
			}
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, s) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				ctaExperiment: "_17HI1sHAGvXEekFXNNcehn",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				showBulkActionCheckbox: "W-Z7cDkcZIo1dPic9COiN",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
				creatorStatsContainer: "_2I70Qhfz-GbGzP54PWXR3P",
				crosspostMediaWrapper: "_1qc1-Anfrhr6APGcBKFk8M",
				expandoContainer: "_3r40yytzBnldjGGOrs2mCw",
				flatlist: "ssgs3QQidkqeycI33hlBa",
				flatlistSeparator: "_1wDt70OnYnqsrm0XIsNn8v",
				horizontalVotes: "_3ytybPoFoY12sGn375PMy1",
				leftExpando: "_35zWJjb5RJMIMkexZ2Prus",
				mainBody: "_2XDITKxlj4y3M99thqyCsO",
				rightExpando: "_2Ddj1d6vOe9NlJqkdothNe",
				spacer: "iRkLLvxarfGu_2c7HxhW0",
				titleWithPoll: "_2FcpdQwjwRwk7X_NiZub8x",
				thumbnail: "_2e9Lv1I3dOmICVO9fg3uTG",
				thumbnailContainer: "_38EcSQ9jzVrdtzkXO1cydX",
				eventMeta: "rmPDRyja27ULjwD3rW14H",
				postContainer: "D3IyhBGwXo9jPwz-Ka0Ve",
				shouldShowOverflow: "_3FOlcZoWAvyAWZYSVd8-WD",
				shouldUseRoundedBorder: "_2g8Jz2obQVOELSfntlgVsJ",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY"
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/lib/hooks/usePrevious.ts"),
				l = s("./src/reddit/hooks/useTracking.ts"),
				u = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				b = s("./src/reddit/components/CreatorStats/loader.tsx"),
				f = s("./node_modules/react-redux/es/index.js"),
				h = s("./src/reddit/models/Audio/index.ts"),
				x = s("./src/reddit/selectors/experiments/econ/index.ts"),
				_ = s("./src/reddit/components/Econ/Audio/index.m.less"),
				E = s.n(_),
				O = s("./src/config.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/Econ/Audio/MuteIcon.tsx"),
				g = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx");
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = () => Math.floor(10 * Math.random()) + 1;
			var j = e => {
					let {
						postId: t
					} = e;
					const s = Object(f.e)(v.fb),
						[r, i] = Object(o.useState)(!1),
						[c, d] = Object(o.useState)(k());
					return Object(o.useEffect)(() => {
						let e;
						const t = setInterval(() => {
							i(!0), e = setTimeout(() => i(!1), 3500), d(k())
						}, 6e3);
						return () => {
							clearInterval(t), clearTimeout(e)
						}
					}, []), n.a.createElement("div", {
						className: E.a.classicSpeaker
					}, r && n.a.createElement(g.a, {
						ringId: `${t}`,
						className: Object(a.a)(E.a.speakerRings, {
							[E.a.nightMode]: s
						}),
						ringClassName: "speakerRing",
						isAnimated: !0
					}), n.a.createElement("img", {
						key: `audioPostAvatar--${c}`,
						className: E.a.snoovatar,
						src: `${O.a.assetPath}/img/talk/avatars/${c}.png`,
						alt: S._("Reddit Talk", null, {
							hk: "XNl4V"
						})
					}), !r && n.a.createElement("div", {
						className: E.a.muteContainer
					}, n.a.createElement(C.a, {
						className: E.a.muteIcon
					})))
				},
				y = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx");
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var N = e => {
					let {
						post: t
					} = e;
					const {
						audioRoom: s,
						postId: o,
						author: r
					} = t;
					return Object(f.e)(x.n) && s.roomStatus === h.b.NotStarted ? n.a.createElement(y.a, {
						postId: o,
						author: r,
						roomId: s.roomId,
						isClassicView: !0
					}) : (null == s ? void 0 : s.isLive) ? n.a.createElement("a", {
						href: `https://www.reddit.com/talk/${s.roomId}`,
						target: "_blank",
						rel: "noopener noreferrer",
						className: E.a.liveClassicContainer,
						"data-testid": "audioroom-classic-live"
					}, n.a.createElement(j, {
						postId: o
					})) : n.a.createElement("div", {
						className: E.a.endedClassicContainer
					}, n.a.createElement(C.a, {
						className: E.a.muteIcon
					}))
				},
				I = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				T = s("./src/reddit/components/ExpandoButton/index.tsx"),
				L = s("./src/reddit/components/Flatlist/index.tsx"),
				w = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				A = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				R = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				D = s("./src/reddit/components/ModModeReports/index.tsx"),
				M = s("./src/reddit/components/ModModeReports/helpers.ts"),
				U = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				F = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				B = s("./src/reddit/components/PostContainer/index.tsx"),
				V = s("./src/reddit/components/PostMeta/index.tsx"),
				G = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				W = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				Y = s("./src/reddit/components/PostTitle/index.tsx"),
				H = s("./src/reddit/components/PostTopMeta/index.tsx"),
				z = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				q = s("./src/reddit/models/Media/index.ts"),
				X = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				J = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				Q = s("./src/reddit/constants/postLayout.ts"),
				Z = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				K = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				$ = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				ee = s("./src/reddit/helpers/search/renderMedia.tsx"),
				te = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				se = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				oe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(oe),
				re = s("./src/reddit/models/Post/index.ts"),
				ae = s("./src/redditGQL/types.ts"),
				ie = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				ce = s("./src/reddit/components/ClassicPost/index.m.less"),
				de = s.n(ce);

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = Object(i.a)(e => {
				const {
					className: t,
					crosspost: s,
					currentUser: i,
					handleVote: f,
					isExpanded: x,
					inSubredditOrProfile: _,
					eventFactory: E,
					flairStyleTemplate: O,
					formatTitle: v,
					hostPostData: C,
					isCheckboxSelected: g,
					isCurrentUserProfilePost: S,
					isFrontpage: k,
					isGalleryTileLayoutDefault: j,
					isLoggedIn: y,
					isOverlay: P,
					imageGalleryCurrentItem: J,
					moderatorPermissions: oe,
					modModeEnabled: ce,
					onClickPost: ue,
					onIgnoreReports: me,
					onOpenReportsDropdown: pe,
					onSizeChanged: be,
					poll: fe,
					post: he,
					postId: xe,
					redditStyle: _e,
					scrollerItemRef: Ee,
					showBulkActionCheckbox: Oe,
					showEditFlair: ve,
					showMedia: Ce,
					shouldShowInsightsButton: ge,
					subredditOrProfile: Se,
					toggleCheckbox: ke,
					userIsOp: je,
					shouldShowGalleryTileOption: ye,
					showCTAExperimentDesign: Pe
				} = e, Ne = Object(l.a)(), Ie = Object(d.a)(x);
				Object(o.useEffect)(() => {
					be && Ie !== x && be(he.id)
				}, [x, be, he.id, Ie]);
				const Te = _e ? void 0 : O,
					Le = s || void 0,
					we = Object($.a)(oe),
					Ae = Object(Z.a)(oe),
					Re = Object(K.a)(oe),
					De = ce && $.a,
					Me = Object(R.a)(he),
					Ue = Object(M.c)(he),
					Fe = !!he.media && he.media.type === q.o.RTJSON,
					Be = je && Fe,
					Ve = _ && !Ce,
					Ge = !!he.recommendationContext,
					We = {
						flairStyleTemplate: Te,
						post: he,
						inSubredditOrProfile: _,
						isCurrentUserProfilePost: S,
						isOverlay: P,
						shouldShowSubscribeButton: !(k && y) || Ge && y,
						subredditOrProfile: Se
					},
					Ye = Object(r.t)(he, J),
					[He, ze] = Object(o.useState)(!1),
					qe = Object(o.useCallback)(() => {
						ze(!He), Ne(Object(se.d)(xe))
					}, [He, xe, Ne]);
				let Xe = n.a.createElement(X.a, {
					className: de.a.classicThumbnail,
					crosspost: Le && he,
					isMeta: he.isMeta,
					post: Le || he,
					redditStyle: _e,
					templatePlaceholderImage: Te && Te.postPlaceholderImage
				});
				Object(h.c)(he) && (Xe = n.a.createElement(N, {
					post: he
				}));
				const Je = Object(re.r)(he);
				return n.a.createElement(B.b, {
					className: Object(a.a)(ne.a.classicPostStyles, de.a.postContainer, Object(te.a)(e), {
						[de.a.shouldShowOverflow]: ge
					}, t),
					isOverlay: P,
					style: {
						...Object(te.d)(e),
						...Object(te.b)(Te)
					},
					post: he,
					onClick: ue,
					eventFactory: E
				}, n.a.createElement(W.a, {
					model: he,
					handleVote: f,
					showBulkActionCheckbox: Oe,
					isCheckboxSelected: g,
					toggleCheckbox: ke,
					flairStyleTemplate: Te,
					redditStyle: _e,
					postId: xe
				}), n.a.createElement(F.a, {
					className: ge ? de.a.shouldUseRoundedBorder : void 0,
					"data-click-id": "background",
					flairStyleTemplate: Te
				}, n.a.createElement(I.a, {
					className: de.a.eventMeta,
					post: he
				}), n.a.createElement("div", {
					className: de.a.mainBody
				}, n.a.createElement("div", {
					className: Ve ? de.a.expandoContainer : de.a.thumbnailContainer
				}, !Ve && Xe, n.a.createElement(T.a, {
					crosspost: Le,
					className: de.a.rightExpando,
					isExpanded: !!x,
					post: he,
					useMediaIcons: !1
				})), n.a.createElement("div", {
					className: Object(a.a)(de.a.content, {
						[de.a.showBulkActionCheckbox]: Oe
					}),
					"data-click-id": "body"
				}, Je && n.a.createElement(U.a, {
					content: he.recommendationContext.content,
					layout: Q.g.Classic,
					post: he
				}), n.a.createElement(Y.c, {
					className: fe ? de.a.titleWithPoll : void 0,
					format: v,
					poll: fe,
					post: he,
					redditStyle: _e,
					size: Y.b.Medium,
					titleColor: Te && Te.postTitleColor,
					isOverlay: P
				}, he.source && !Le && !he.isSurveyAd && n.a.createElement(z.a, {
					href: he.source.url,
					isSponsored: he.isSponsored,
					postId: he.id,
					source: he.source
				}, Object(c.a)(he))), n.a.createElement(V.a, le({
					key: "PostMeta"
				}, We)), ce && we && Me && n.a.createElement(A.a, {
					thing: he
				}), ce && we && Ue && n.a.createElement(D.a, {
					onIgnoreReports: me,
					reportable: he
				}), Object(r.v)(he, J) && n.a.createElement(u.a, {
					ctaExperimentDesign: Pe && "classic",
					className: Object(a.a)(de.a.adLinkWrapper, {
						[de.a.ctaExperiment]: Pe
					})
				}, n.a.createElement(m.a, {
					post: he,
					adLinkContent: Ye,
					ctaExperimentDesign: Pe && "classic"
				})), he.discussionType === ae.n.Chat && n.a.createElement(ie.a, {
					postId: he.id
				}), n.a.createElement("div", {
					className: de.a.flatlistContainer
				}, n.a.createElement(T.a, {
					className: de.a.leftExpando,
					crosspost: Le,
					isExpanded: !!x,
					post: he,
					useMediaIcons: !1
				}), n.a.createElement(p.a, {
					className: de.a.horizontalVotes,
					compact: !1,
					flairStyleTemplate: Te,
					model: he,
					onVoteClick: f
				}), n.a.createElement(L.a, {
					className: de.a.flatlistSeparator
				}), !he.isSurveyAd && n.a.createElement(L.c, {
					className: de.a.flatlist,
					currentUser: i,
					hasModFlairPerms: Ae,
					hasModPostPerms: we,
					hasModFullPerms: Re,
					hostPostData: C,
					isOverlay: !!P,
					modModeEnabled: ce,
					onClickInsightsButton: qe,
					onIgnoreReports: me,
					onOpenReportsDropdown: pe,
					post: he,
					shouldShowInsightsButton: ge,
					showEditPost: Be,
					showEditFlair: ve,
					tooltipType: P ? H.f.Lightbox : void 0,
					useFlatlistBreakpoints: Object(G.b)({
						editPost: !De,
						hide: !De,
						report: !De,
						mute: !De,
						save: !De
					})
				})), n.a.createElement(w.d, null))), Object(ee.a)(he, de.a, Ee, x, ye, j), Se && He && n.a.createElement(b.a, {
					className: de.a.creatorStatsContainer,
					post: he,
					subreddit: Se,
					isOwnProfileStats: !0
				})))
			});
			t.default = Object(J.a)(ue)
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const u = Object(a.a)(e => {
				let {
					className: t,
					...s
				} = e;
				return n.a.createElement(i.a, l({}, s, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(d.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(i.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "CreatorStats",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("CreatorStats").then(s.bind(null, "./src/reddit/components/CreatorStats/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CreatorStats/index.tsx"
				}
			})
		},
		"./src/reddit/components/CrosspostBox/index.m.less": function(e, t, s) {
			e.exports = {
				mediaContainer: "P8p9Nku0-ZbYCsaCOSE2t",
				Container: "_2ED-O3JtIcOqp8iIL1G5cg",
				container: "_2ED-O3JtIcOqp8iIL1G5cg",
				PostMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				postMetaWrapper: "_1u_4ufj_H3WJW2TXEZ6a3n",
				PostTitle: "_2akYJO5RtMK_ptA408seyG",
				postTitle: "_2akYJO5RtMK_ptA408seyG",
				FlatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				flatList: "_3Dd3XvAr-WcOJyMTx4y35x",
				FlatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				flatItem: "_2Pkdj4FrQFtK8COeODi_kK",
				FlatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				flatListDotSpacer: "_3w73P89exX_1mpdhQCURo6",
				LinkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				linkContainer: "CsZ0mP84ULF0bBJJa0PFy",
				Content: "_379A_08LTBsR4c8POTldR_",
				content: "_379A_08LTBsR4c8POTldR_",
				ThumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX",
				thumbnailContainer: "_7bo--rwqP4Z7K1s_8dGPX"
			}
		},
		"./src/reddit/components/CrosspostBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return S
			})), s.d(t, "a", (function() {
				return k
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				f = s("./src/reddit/components/Thumbnail/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				_ = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				v = s.n(O),
				C = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const S = 8,
				k = 1,
				j = C.a.div("Container", v.a),
				y = C.a.div("PostMetaWrapper", v.a),
				P = C.a.wrapped(p.c, "PostTitle", v.a),
				N = C.a.div("FlatList", v.a),
				I = C.a.div("FlatItem", v.a),
				T = C.a.span("FlatListDotSpacer", v.a),
				L = C.a.wrapped(j, "LinkContainer", v.a),
				w = C.a.div("Content", v.a),
				A = C.a.div("ThumbnailContainer", v.a),
				R = Object(c.c)({
					isCurrentUserProfilePost: _.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Tb.TOPIC),
					shouldOpenPostInNewTab: E.lb
				}),
				D = Object(a.b)(R);
			t.c = Object(x.b)(D(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: o,
					mediaProps: n,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: o,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${n.isListing}`
					},
					d = t;
				return a && !a.media ? r.a.createElement(L, {
					className: d
				}, r.a.createElement(w, null, r.a.createElement(y, null, r.a.createElement(m.a, c)), M(a), a.source && r.a.createElement(b.a, {
					post: a
				}), F(e)), V(e)) : r.a.createElement(j, {
					className: d
				}, r.a.createElement(y, null, r.a.createElement(m.a, c)), M(a), U(e), F(e))
			}));
			const M = e => r.a.createElement(P, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				U = e => {
					const {
						mediaProps: t,
						post: s
					} = e, o = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(u.a, g({}, o, {
						className: v.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				F = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(N, null, r.a.createElement(I, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(T, null), r.a.createElement(I, null, B(e)))
				},
				B = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: n
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, o.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [o.fbt._plural(n, "comment count", Object(l.b)(n))], {
						hk: "xPYWL"
					}))
				},
				V = e => r.a.createElement(A, null, r.a.createElement(f.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/MuteIcon.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, n.a.createElement("g", {
					id: "icons_flat",
					"data-name": "icons flat"
				}, n.a.createElement("path", {
					d: "M13.5,9.5v-5A3.493,3.493,0,0,0,6.723,3.3l6.724,6.723A3.524,3.524,0,0,0,13.5,9.5Z"
				}), n.a.createElement("path", {
					d: "M15.5,9.5a5.472,5.472,0,0,1-.436,2.144l1.487,1.486A7.428,7.428,0,0,0,17.5,9.5Z"
				}), n.a.createElement("path", {
					d: "M2.341,4.1,6.5,8.258V9.5A3.5,3.5,0,0,0,10,13a3.441,3.441,0,0,0,1.059-.183l1.529,1.529A5.449,5.449,0,0,1,10,15,5.506,5.506,0,0,1,4.5,9.5h-2A7.5,7.5,0,0,0,9,16.925V18H7.581v2h4.838V18H11V16.925a7.388,7.388,0,0,0,3.026-1.141l1.044,1.044,1.414-1.414L3.755,2.686Z"
				})))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "49",
					height: "49",
					viewBox: "0 0 49 49",
					fill: "none"
				}, n.a.createElement("rect", {
					opacity: "0.8",
					x: "1",
					y: "1",
					width: "46",
					height: "46",
					rx: "23",
					stroke: `url(#paint0_linear_284_569805-${s})`,
					strokeWidth: "2"
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: `paint0_linear_284_569805-${s}`,
					x1: "-4.24542",
					y1: "0.154669",
					x2: "55.6993",
					y2: "1.87207",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "56",
					height: "56",
					viewBox: "0 0 56 56",
					fill: "none"
				}, n.a.createElement("rect", {
					opacity: "0.5",
					x: "0.934437",
					y: "1.15466",
					width: "54",
					height: "54",
					rx: "27",
					stroke: `url(#paint0_linear_284_569806-${s})`
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: `paint0_linear_284_569806-${s}`,
					x1: "-5.50082",
					y1: "0.65467",
					x2: "63.1858",
					y2: "2.62253",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => {
				let {
					className: t,
					ringId: s
				} = e;
				return n.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					width: "64",
					height: "64",
					viewBox: "0 0 64 64",
					fill: "none"
				}, n.a.createElement("rect", {
					opacity: "0.3",
					x: "0.684437",
					y: "0.904663",
					width: "62.5",
					height: "62.5",
					rx: "31.25",
					stroke: `url(#paint0_linear_284_569807-${s})`,
					strokeWidth: "0.5"
				}), n.a.createElement("defs", null, n.a.createElement("linearGradient", {
					id: `paint0_linear_284_569807-${s}`,
					x1: "-6.36412",
					y1: "0.654671",
					x2: "72.3133",
					y2: "2.90877",
					gradientUnits: "userSpaceOnUse"
				}, n.a.createElement("stop", {
					stopColor: "#FF538C"
				}), n.a.createElement("stop", {
					offset: "0.989583",
					stopColor: "#FFAB39"
				}))))
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less": function(e, t, s) {
			e.exports = {
				ringsContainer: "_3o_krdWfVVLOac1O-lVvTY",
				animated: "FTiJjjTo1ieOsSlT2EP08",
				fadein: "_2rEznjvY2VtmhBvzQVcKSA",
				reverb: "_4fN6nwGFX9KM3IkyL96J6",
				fadeout: "_2NIaOpVXH7sOwUsZ_g6ncE",
				innerRing: "fHWSRI59TPmnNbWLIicZp",
				middleRing: "_1GWX6vX1xdG3nZrRB4N5Yo",
				outerRing: "_24PG9NuvmXf9LT0ZIIzD8A"
			}
		},
		"./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.m.less"),
				i = s.n(a),
				c = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingInner.tsx"),
				d = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingMiddle.tsx"),
				l = s("./src/reddit/components/Econ/Audio/SpeakerRings/SpeakerRingOuter.tsx");
			t.a = e => {
				let {
					className: t,
					ringClassName: s,
					ringId: o,
					isAnimated: a = !1
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(i.a.ringsContainer, t, a ? i.a.animated : "")
				}, n.a.createElement(c.a, {
					ringId: o,
					className: Object(r.a)(i.a.innerRing, `${s}Inner`)
				}), n.a.createElement(d.a, {
					ringId: o,
					className: Object(r.a)(i.a.middleRing, `${s}Middle`)
				}), n.a.createElement(l.a, {
					ringId: o,
					className: Object(r.a)(i.a.outerRing, `${s}Outer`)
				}))
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less": function(e, t, s) {
			e.exports = {
				upcomingTalkCard: "_1ng4vZrRsv4atm7KiZqzi",
				upcomingTalkContainer: "_2zQOetr4IrprS8H-cDkAyF",
				upcomingTalkInfo: "_1jr6igJaJjdBSf6gQILUHz",
				upcomingTalkLabel: "_24TGrjt1qFqchgJsm9regX",
				upcomingTalkHost: "_37h0RGkgWTCbecBmJVgL4V",
				StartTalkButton: "cw7J5pVSXn74JXDoOYlf",
				startTalkButton: "cw7J5pVSXn74JXDoOYlf",
				isNightMode: "jnzL83t6CY_CK_unbB0gI",
				MicrophoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				microphoneIcon: "_2pbYJFUWfuaX3M5enGW62T",
				hostAvatar: "_3QTjosw2bqonj6JPtDic5U",
				snoovatar: "_3YF-FxrjtGM2LtVtg_R8V_",
				snoovatarHeadshotContainer: "nU336w0rssAqUStSYM_xR",
				isImage: "_3qKfFw1Pvju3jBDzGxH6Wd",
				classicView: "_3BVeVQiYsH7FAegU2VUmV-",
				loadingIcon: "xmKaq8gXHdYMcfRximxGn"
			}
		},
		"./src/reddit/components/Econ/Audio/UpcomingTalk/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/actions/profile/index.ts"),
				c = s("./src/reddit/components/UserIcon/index.tsx"),
				d = s("./src/lib/eventTools/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/selectors/postCreations.ts"),
				m = s("./src/reddit/selectors/telemetry.ts");
			var p = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/components/Econ/Audio/SpeakerRings/index.tsx"),
				h = s("./src/reddit/components/Econ/Audio/UpcomingTalk/index.m.less"),
				x = s.n(h),
				_ = s("./src/config.ts"),
				E = s("./src/reddit/components/TrackingHelper/index.tsx"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				C = s("./src/reddit/hooks/useGqlContext.ts");
			var g = e => n.a.createElement("svg", {
					width: "15",
					height: "19",
					viewBox: "0 0 15 19",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M8.125 15.9701V17.7501H9.925V19.0001H5.08V17.7501H6.88V15.9701C5.18411 15.8688 3.58787 15.1352 2.40663 13.9141C1.22538 12.6931 0.545039 11.0734 0.5 9.3751H1.75C1.80295 10.8493 2.43767 12.2424 3.51528 13.2497C4.59288 14.2571 6.02562 14.7965 7.5 14.7501C8.97438 14.7965 10.4071 14.2571 11.4847 13.2497C12.5623 12.2424 13.197 10.8493 13.25 9.3751H14.5C14.4551 11.0726 13.7754 12.6916 12.5952 13.9125C11.415 15.1334 9.82 15.8676 8.125 15.9701ZM3.5 8.9481V4.0481C3.5 2.98723 3.92143 1.96981 4.67157 1.21967C5.42172 0.469523 6.43913 0.0480957 7.5 0.0480957C8.56087 0.0480957 9.57828 0.469523 10.3284 1.21967C11.0786 1.96981 11.5 2.98723 11.5 4.0481V8.9481C11.5 10.009 11.0786 11.0264 10.3284 11.7765C9.57828 12.5267 8.56087 12.9481 7.5 12.9481C6.43913 12.9481 5.42172 12.5267 4.67157 11.7765C3.92143 11.0264 3.5 10.009 3.5 8.9481ZM4.75 8.9481C4.75 9.67744 5.03973 10.3769 5.55546 10.8926C6.07118 11.4084 6.77065 11.6981 7.5 11.6981C8.22935 11.6981 8.92882 11.4084 9.44454 10.8926C9.96027 10.3769 10.25 9.67744 10.25 8.9481V4.0481C10.25 3.31875 9.96027 2.61928 9.44454 2.10355C8.92882 1.58783 8.22935 1.2981 7.5 1.2981C6.77065 1.2981 6.07118 1.58783 5.55546 2.10355C5.03973 2.61928 4.75 3.31875 4.75 4.0481V8.9481Z"
				})),
				S = s("./src/reddit/endpoints/talk/index.ts"),
				k = s("./src/reddit/actions/toaster.ts"),
				j = s("./src/reddit/models/Toast/index.ts"),
				y = s("./src/redditGQL/types.ts");
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js"), N = () => n.a.createElement("span", {
				className: x.a.MicrophoneIcon
			}, n.a.createElement(g, null));
			var I = e => {
				let {
					roomId: t
				} = e;
				const s = Object(r.e)(b.fb),
					[i, c] = Object(o.useState)(!1),
					d = Object(r.d)(),
					p = Object(E.b)(),
					f = Object(C.a)();
				return n.a.createElement(O.t, {
					"data-testid": "audioroom-upcoming-start-talk",
					Icon: i ? v.a : N,
					iconClassName: i ? x.a.loadingIcon : "",
					className: Object(a.a)(x.a.StartTalkButton, {
						[x.a.isNightMode]: s
					}),
					priority: O.c.Secondary,
					size: O.d.M,
					iconPosition: O.h.L,
					disabled: i,
					text: n.a.createElement("span", {
						className: x.a.StartTalkButtonText
					}, P._("Start talk", null, {
						hk: "46EMgy"
					})),
					onClick: async () => {
						p((() => e => ({
							...m.o(e),
							source: "liveaudio",
							action: l.c.CLICK,
							noun: "go_live",
							subreddit: m.lb(e),
							liveAudioRoom: {
								title: Object(u.xb)(e),
								topicIds: Object(u.wb)(e).topics.map(e => e.id)
							}
						}))()), c(!0);
						const e = await Object(S.f)(f(), {
							input: {
								roomId: t
							}
						});
						if (!e.ok) return d(Object(k.f)({
							kind: j.b.Error,
							text: S.a[y.k.ServiceError]
						})), void c(!1);
						const s = Object(S.d)(e.body);
						if (null == s ? void 0 : s.errorState) return d(Object(k.f)({
							kind: j.b.Error,
							text: S.a[s.errorState.code] || S.a[y.k.ServiceError]
						})), void c(!1);
						(null == s ? void 0 : s.okState) && (window.location.href = `${_.a.redditUrl}/talk/${t}`)
					}
				})
			};
			const {
				fbt: T
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => {
				let {
					author: t,
					postId: s,
					roomId: u,
					isClassicView: h = !1
				} = e;
				const _ = Object(r.d)(),
					E = Object(p.a)(),
					O = Object(r.e)(b.H),
					v = Object(r.e)(b.fb),
					C = Object(r.e)(e => Object(b.Gb)(e, {
						postId: s
					})),
					g = Object(r.e)(e => Object(b.Db)(e, {
						userName: t
					}));
				Object(o.useEffect)(() => {
					s && E && E((e => t => ({
						...m.o(t),
						source: "global",
						action: l.c.VIEW,
						noun: l.b.SCREEN,
						subreddit: m.lb(t),
						post: m.K(t, e),
						postEvent: {
							eventState: d.a.Future
						}
					}))(s))
				}, [E, s]), Object(o.useEffect)(() => {
					g || _(Object(i.d)(t))
				}, [_, t, s, g]);
				const S = () => n.a.createElement("div", {
					"data-testid": "audioroom-avatar-upcoming",
					key: `audioPostAvatar--${t}`,
					className: Object(a.a)(x.a.hostAvatar, {
						[x.a.classicView]: h
					})
				}, n.a.createElement("div", {
					className: x.a.snoovatar
				}, n.a.createElement(c.a, {
					userName: t,
					isNSFW: !O,
					className: x.a.isImage
				})), n.a.createElement(f.a, {
					ringId: `${s}`,
					className: Object(a.a)(x.a.hostRings, {
						[x.a.nightMode]: v
					}),
					ringClassName: "hostRing"
				}));
				return h ? n.a.createElement(S, null) : n.a.createElement("div", {
					className: x.a.upcomingTalkCard,
					"data-testid": "audioroom-card-upcoming"
				}, n.a.createElement("div", {
					className: x.a.upcomingTalkContainer
				}, n.a.createElement(S, null), n.a.createElement("div", {
					className: x.a.upcomingTalkInfo
				}, n.a.createElement("div", {
					className: x.a.upcomingTalkLabel
				}, T._("Upcoming Talk", null, {
					hk: "464Rq3"
				})), n.a.createElement("div", {
					className: x.a.upcomingTalkHost
				}, "u/", t), C && u && n.a.createElement(I, {
					roomId: u
				}))))
			}
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, s) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				_ = s("./src/telemetry/models/Outbound.ts"),
				E = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = s("./src/reddit/components/ExpandoButton/index.m.less"),
				v = s.n(O);
			const C = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(m.b)(t.permalink), t.id))
				})),
				g = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(c.a)(v.a.icon, v.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: o
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: o
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: o
					});
					switch (e) {
						case f.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: o
							});
						case f.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: o
							});
						case f.o.TEXT:
						case f.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: o
							});
						case f.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: o
							});
						case f.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: o
							});
						case f.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = C(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: m,
					post: f,
					toggle: O,
					useMediaIcons: C
				} = e, S = s || f, k = Object(a.e)(x.b), j = Object(a.e)(x.c), y = t => {
					(k || j) && (t.preventDefault(), e.showModalOnPostLinkClick(S))
				}, P = S.media, N = Object(h.q)(f), I = n && !!s;
				return P && !N && !(("rtjson" === P.type || "text" === P.type || "liveaudio" === P.type) && !Object(p.a)(S)) || !!f.pollData ? r.a.createElement("button", {
					"aria-expanded": !!m,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, v.a.outer),
					"data-click-id": m ? "expando_close" : "expando_open",
					"data-adclicklocation": E.a.MEDIA,
					onClick: O
				}, m ? r.a.createElement(b.a, {
					name: "collapse",
					className: v.a.icon
				}) : C ? r.a.createElement(r.a.Fragment, null, g(S.media && S.media.type, I, f), r.a.createElement(b.a, {
					name: "expand",
					className: Object(c.a)(v.a.icon, v.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: v.a.icon
				})) : S.source && S.source.url ? r.a.createElement(u.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, v.a.outer),
					"data-click-id": "expando_open",
					href: S.source.url,
					isSponsored: f.isSponsored,
					postId: f.id,
					source: f.source,
					sourceElement: l ? _.SourceElement.PostImage : _.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(c.a)(v.a.icon, v.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, v.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(S.permalink),
					rel: "nofollow",
					onClick: y
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: v.a.icon
				}))
			})
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var o = s("./src/lib/classNames/index.ts"),
				n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				c = s.n(i);
			const d = e => {
				let {
					userCount: t
				} = e;
				return a.a.createElement("span", {
					className: c.a.liveChatActiveUsers
				}, t > 1 ? n.fbt._("{userCount} here now", [n.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : n.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				u = s.n(l);
			const m = () => a.a.createElement("span", {
				className: u.a.LiveLabel
			}, n.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				b = s.n(p);
			const f = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return a.a.createElement("div", {
					className: Object(o.a)(b.a.liveParticipation, s)
				}, a.a.createElement(m, null), a.a.createElement(d, {
					userCount: t
				}))
			};
			var h = s("./node_modules/react-redux/es/index.js"),
				x = s("./src/reddit/selectors/chat.ts"),
				_ = s("./src/reddit/selectors/experiments/chat.ts");
			const E = e => {
				let {
					postId: t,
					className: s
				} = e;
				const o = Object(h.e)(e => Object(x.a)(e, t));
				return Object(h.e)(_.e) ? a.a.createElement(f, {
					userCount: o,
					className: s
				}) : null
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, s) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				u = s.n(l);
			const m = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: o
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : n.a.createElement(i.b, {
					className: Object(r.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: s === c.g.Classic,
						[u.a.compactLayout]: s === c.g.Compact,
						[u.a.largeLayout]: s === c.g.Large
					}),
					content: t,
					rtJsonElementProps: m(o),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var o = s("./src/lib/constants/index.ts"),
				n = s("./src/reddit/components/HumanDate/index.tsx"),
				r = s("./src/lib/timeUntil/index.ts"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(n.d, {
					seconds: e.poll.endsAt / o.Xb
				}))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, s) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: o,
					onClick: a,
					post: c,
					redditStyle: l,
					theme: p,
					overrideBackgroundColor: b,
					...f
				} = e;
				return n.a.createElement("div", m({
					className: Object(r.a)(u.a.backgroundWrapper, s),
					style: b || Object(i.c)(o, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, f), t)
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return se
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx"),
				i = s("./src/reddit/models/Post/index.ts"),
				c = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				u = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts"),
				p = s("./node_modules/reselect/es/index.js");
			const b = Object(p.a)(e => Object(m.c)(e, {
				experimentEligibilitySelector: m.a,
				experimentName: u.Bc
			}), e => e === u.Ud);
			var f = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/classNames/index.ts"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = s("./src/reddit/components/SubredditIcon/index.tsx"),
				E = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				C = s.n(v);
			const g = e => {
				let {
					postId: t,
					className: s
				} = e;
				const o = Object(c.e)(e => Object(E.F)(e, {
						postId: t
					})),
					r = Object(c.e)(e => "subreddit" === (null == o ? void 0 : o.belongsTo.type) ? Object(O.X)(e, {
						subredditId: o.belongsTo.id
					}) : null);
				return r ? n.a.createElement(x.a, {
					className: Object(h.a)(C.a.link, s),
					to: r.url
				}, f.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), n.a.createElement(_.b, {
					className: C.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), n.a.createElement("span", {
					className: C.a.subredditName
				}, r.displayText)) : null
			};
			var S = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				k = s("./src/reddit/connectors/PostViewable/index.ts"),
				j = s("./src/reddit/contexts/PageLayer/index.tsx"),
				y = s("./src/reddit/contexts/Post/index.tsx"),
				P = s("./src/reddit/helpers/path/index.ts"),
				N = s("./src/reddit/hooks/useClickSourceData.ts"),
				I = s("./src/reddit/hooks/useIsOverlay.ts"),
				T = s("./src/reddit/hooks/usePageLayer.ts"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				w = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				A = s.n(w);
			const R = e => {
				let {
					post: t
				} = e;
				const s = `${Object(L.b)(t.score)} ${f.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					o = `${Object(L.b)(t.numComments)} ${f.fbt._("comments",null,{hk:"30aUyh"})}`;
				return n.a.createElement("div", {
					className: A.a.postInformation
				}, n.a.createElement("h5", {
					className: A.a.title
				}, t.title), n.a.createElement("div", {
					className: A.a.interactions
				}, n.a.createElement("p", null, s), n.a.createElement("p", null, o)))
			};
			var D = s("./src/lib/isUrl/index.ts"),
				M = s("./src/reddit/actions/profile/index.ts"),
				U = s("./src/reddit/components/Thumbnail/index.tsx"),
				F = s("./src/reddit/components/UserIcon/index.tsx"),
				B = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				V = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				G = s("./src/reddit/selectors/profile.ts"),
				W = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				Y = s.n(W);
			const H = e => {
				let {
					post: t
				} = e;
				var s, r, a, i;
				const d = Object(c.d)(),
					l = Object(c.e)(Object(G.l)(t.author)),
					u = Object(o.useMemo)(() => Object(U.c)({
						post: t
					}), [t]),
					m = Object(o.useMemo)(() => Object(D.a)(u), [u]);
				Object(o.useEffect)(() => {
					m || d(Object(M.d)(t.author))
				}, [d, t.author, m]);
				const p = !m && Object(V.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					b = Object(B.c)(null === (r = null == l ? void 0 : l.icon) || void 0 === r ? void 0 : r.url);
				return n.a.createElement("div", {
					className: Y.a.media
				}, m ? n.a.createElement(U.b, {
					post: t,
					url: u,
					className: Y.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: Y.a.mediaThumbnailContainer
				}) : null, !m && (null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url) && n.a.createElement("div", {
					className: Y.a.userIconContainer
				}, n.a.createElement(F.a, {
					className: Object(h.a)({
						[Y.a.snoovatarUserIcon]: p,
						[Y.a.defaultUserIcon]: b
					}, Y.a.userIcon),
					iconUrl: null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url,
					userName: l.name,
					wrapperClassName: Y.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				q = s.n(z);
			const X = Object(k.a)(null);
			var J = Object(y.b)(X(e => {
					let {
						post: t
					} = e;
					const s = Object(T.a)(),
						o = Object(I.a)(),
						r = Object(N.a)(),
						a = Object(j.x)(s) && !o;
					return n.a.createElement(x.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(P.b)(t.permalink) : Object(S.a)(t.permalink, !1, r)
					}, n.a.createElement("div", {
						className: q.a.container
					}, n.a.createElement(R, {
						post: t
					}), n.a.createElement(H, {
						post: t
					})))
				})),
				Q = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				Z = s.n(Q);
			const K = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => n.a.createElement(J, {
					postId: e,
					key: e
				}));
				return n.a.createElement("div", {
					className: Z.a.container
				}, s)
			};
			var $ = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ee = s.n($);
			const te = e => {
				let {
					post: t
				} = e;
				const s = Object(c.d)();
				if (!Object(c.e)(b) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [o] = t.adPromotedUserPostIds;
				return n.a.createElement("div", {
					className: ee.a.container,
					onClick: () => s(Object(d.y)(t, l.a.Click))
				}, n.a.createElement(K, {
					postIds: t.adPromotedUserPostIds
				}), n.a.createElement(g, {
					postId: o,
					className: ee.a.communityLink
				}))
			};

			function se(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? n.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(i.B)(t) && Object(i.A)(t) ? n.a.createElement(te, {
					post: t
				}) : n.a.createElement(a.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostMeta/index.m.less": function(e, t, s) {
			e.exports = {
				metaContainer: "Ywkt6EDfNWINeTr9lP29H",
				postTopMeta: "iaAYGvTNtknkTxuHArCzL",
				subredditName: "_1L0pdcPf58t25Jy6ljHIKR",
				SubscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				subscribeButton: "_2r87gmhJ9n0MsylKHkgDcp",
				addModNote: "CUh9f8Zri7XfZRUI18jS5"
			}
		},
		"./src/reddit/components/PostMeta/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				_ = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				v = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/components/PostMeta/index.m.less"),
				g = s.n(C);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: C,
					isOverlay: S,
					isTopicPage: k,
					post: j,
					shouldShowSubscribeButton: y,
					subredditOrProfile: P,
					tooltipType: N
				} = e, I = !!k, T = Object(O.a)(), L = Object(r.e)(e => !!P && Object(a.i)(e, P.id));
				return n.a.createElement("div", {
					className: g.a.metaContainer
				}, !o && !j.isSponsored && P && n.a.createElement(d.a, {
					postId: j.id,
					subredditName: P.name
				}, n.a.createElement(b.a, {
					className: g.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: P.url,
						state: T
					}
				}, P.displayText)), P && P.isQuarantined && n.a.createElement(p.a, null), !o && !j.isSponsored && P && y && !C && n.a.createElement(f.a, {
					className: g.a.SubscribeButton,
					getEventFactory: e => Object(E.n)(j.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: P.name,
						type: Object(v.i)(P) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: j.id,
					size: x.d.XXS,
					small: !0
				}), !o && !j.isSponsored && n.a.createElement(_.b, null), !o && !j.isSponsored && n.a.createElement(l.h, {
					type: j.belongsTo.type,
					id: j.belongsTo.id
				}), n.a.createElement(m.g, {
					className: g.a.postTopMeta,
					flairStyleTemplate: t,
					post: j,
					tooltipType: N,
					isModWithUserNotesPermissions: L
				}), n.a.createElement(u.a, {
					displayText: P ? P.displayText : null,
					inSubredditOrProfile: !!o,
					post: j,
					tooltipType: N
				}), !I && n.a.createElement(i.a, {
					hideCta: s,
					thing: j,
					tooltipType: S ? m.f.Lightbox : void 0
				}), L && n.a.createElement(c.a, {
					postOrComment: j,
					className: g.a.addModNote
				}))
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				m = s.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: o = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: f,
					redditStyle: h,
					isOverlay: x,
					isVoteCountAnimation: _,
					postId: E,
					shouldShowUpvoteRatioOnHover: O
				} = e, v = `upvote-button-${t.id}${x?"-overlay":""}`;
				return n.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, o && n.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), n.a.createElement(i.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: v,
					isVoteCountAnimation: _,
					isCountAnimShadowTestEnabled: p,
					postId: E,
					scoreClassName: Object(r.a)(m.a.score, {
						[m.a.allowPointerEvents]: O
					}),
					shouldShowUpvoteRatioOnHover: O
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
				blur: "_1Y3R-LNfq0EOkZUcePSt1j",
				ExtraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				extraLarge: "_29WrubtjAcKqzJSPdQqQ4h",
				Large: "_3wqmjmv3tb_k-PROt7qFZe",
				large: "_3wqmjmv3tb_k-PROt7qFZe",
				Medium: "_1zpZYP8cFNLfLDexPY65Y7",
				medium: "_1zpZYP8cFNLfLDexPY65Y7",
				Small: "uWdXen_41bh0iwLrgzFkc",
				small: "uWdXen_41bh0iwLrgzFkc",
				ExtraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				extraSmall: "_1aqE18-N18ZIRlkE1wa7DP",
				Metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				metadata: "_2_YD0sbnnLrJvpCrMxBFaC",
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return U
			})), s.d(t, "a", (function() {
				return Q
			}));
			var o = s("./src/config.ts"),
				n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				E = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				v = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				C = s("./src/reddit/hooks/usePostContext.ts"),
				g = s("./src/reddit/hooks/useTheme.ts"),
				S = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Post/index.ts"),
				P = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				N = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				I = s("./src/lib/getShortenedLink.ts"),
				T = s("./src/reddit/components/FlairWrapper/index.tsx"),
				L = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				R = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				D = s.n(R);
			const M = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var U, F = Object(i.b)(M)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, o = s ? s.totalVotes : "0";
					return Object(v.a)() ? null : a.a.createElement("div", {
						className: Object(u.a)(e.className, D.a.proposalMetaData)
					}, a.a.createElement("span", null, L.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [L.fbt._param("count", Object(w.a)(o)), L.fbt._plural(parseInt(o))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(A.a, {
						className: D.a.proposalExpiry,
						poll: t
					}))
				})),
				B = s("./src/reddit/components/SEOTitle/index.tsx"),
				V = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				G = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				Y = s("./src/telemetry/models/Outbound.ts"),
				H = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				z = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				q = s("./src/reddit/components/PostTitle/index.m.less"),
				X = s.n(q);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(U || (U = {}));
			const Q = e => {
					let {
						size: t,
						titleColor: s,
						titleType: o,
						nowrap: n,
						children: r,
						className: i,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(g.a)();
					let m = "";
					switch (t) {
						case U.ExtraLarge:
							m = X.a.ExtraLarge;
							break;
						case U.Large:
							m = X.a.Large;
							break;
						case U.Medium:
							m = X.a.Medium;
							break;
						case U.Small:
							m = X.a.Small;
							break;
						case U.ExtraSmall:
							m = X.a.ExtraSmall;
							break;
						case U.Metadata:
							m = X.a.Metadata
					}
					return a.a.createElement("div", {
						className: Object(u.a)(X.a.Title, i, m, {
							[X.a.isNoWrap]: n,
							[X.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": s || Object(N.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, o ? a.a.createElement(B.b, {
						type: o
					}, r) : r)
				},
				Z = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: o,
						children: n,
						...r
					} = e;
					return a.a.createElement(c.a, J({}, r, {
						className: Object(u.a)(t, X.a.styledLink, {
							[X.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				K = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: o,
						children: n
					} = e;
					return a.a.createElement("div", {
						className: Object(u.a)(X.a.titleContainer, o, {
							[X.a.isNoWrap]: s,
							[X.a.isVisitedEnabled]: !t
						})
					}, n)
				},
				$ = Object(d.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.r)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: G.e,
					shouldOpenPostInNewTab: W.lb
				}),
				ee = e => {
					const {
						post: t
					} = e, {
						isSponsored: s
					} = t, o = Object(i.d)(), n = Object(O.a)(), r = Object(i.e)(V.b), c = Object(i.e)(V.c), d = e => {
						(r || c) && (e.preventDefault(), o(Object(x.Z)(Object(E.b)(t.permalink), t.id))), t.isSponsored && Object(y.A)(t) && o(Object(x.y)(t, _.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return a.a.createElement(K, {
						nowrap: e.nowrap
					}, a.a.createElement(te, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return a.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, a.a.createElement(te, e)); {
						const o = t.permalink,
							r = e.isCommentPermalink ? Object(E.b)(o) : Object(h.a)(o, void 0, n);
						return a.a.createElement(K, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s && !Object(y.A)(t) ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? a.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, a.a.createElement(te, t)) : a.a.createElement(te, t)
						})(t, e) : a.a.createElement(Z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: r,
							onClick: d
						}, a.a.createElement(te, e)))
					}
				},
				te = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: o
					} = e;
					let n = e.format ? e.format(o) : o.title;
					s && "string" == typeof n && (n = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(n));
					const r = e.isCommentsPage ? B.a.PostComments : B.a.PostItem,
						i = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return a.a.createElement(Q, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: i,
						size: e.size,
						titleColor: e.titleColor,
						titleType: r
					}, t && a.a.createElement(T.a, {
						titleFlair: t,
						nowrap: !0,
						post: o,
						sendEvent: e.sendEvent
					}), n)
				},
				se = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: o
					} = e, {
						isSponsored: n
					} = o, r = e.isCommentsPage ? Y.SourceElement.PostLink : Y.SourceElement.ListingPostLink;
					if (Object(v.a)()) return null;
					if (s && o.isNSFW) return null;
					const i = !t && !e.isCrosspost && e.size !== U.Large && !o.isSponsored && (o.source || o.media && (o.media.type === j.o.GIFVIDEO || o.media.type === j.o.IMAGE || o.media.type === j.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return a.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(j.E)(o),
							isSponsored: n,
							postId: o.id,
							source: o.source,
							sourceElement: r
						}, Object(I.a)(o), !o.isSponsored && a.a.createElement(S.a, {
							name: "external_link",
							className: X.a.outboundLinkIcon
						}))
					} else if (o.source && !e.isCrosspost && e.size !== U.Large && e.size !== U.ExtraLarge) return a.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: o.source.url,
						isSponsored: n,
						postId: o.id,
						source: o.source,
						sourceElement: r
					}, Object(I.a)(o), !o.isSponsored && a.a.createElement(S.a, {
						name: "external_link",
						className: X.a.outboundLinkIcon
					}));
					return null
				};
			class oe extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${X.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(N.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(N.a)(this.props).titleText,Object(N.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(n.c)(.45,Object(N.a)(this.props).bodyText,Object(N.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: n,
						isOverlay: r,
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = s === k.b.Left, b = Object(T.b)(c), {
						leftFlair: f,
						rightFlair: h
					} = Object(H.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), x = !r && !n && !t, _ = x && f && f.length > 0, E = x && h && h.length > 0;
					return a.a.createElement("div", {
						className: Object(u.a)(X.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": z.a.TITLE,
						onClick: m
					}, !d && _ && a.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(P.b)(c) && a.a.createElement(ee, J({}, this.props, {
						leftFlair: d ? f : void 0
					})), i && a.a.createElement(F, {
						className: X.a.pollMeta,
						pollId: i.id
					}), a.a.createElement(se, this.props), E && a.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), a.a.createElement("div", {
						className: X.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${o.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(p.ib)(),
					s = Object(p.x)(t),
					o = Object(C.a)(),
					n = Object(i.e)(n => $(n, {
						...o,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					r = Object(g.a)(),
					c = Object(m.b)();
				return o ? a.a.createElement(oe, J({
					pageLayer: t,
					isCommentPermalink: s
				}, o, n, e, {
					theme: r,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FLO1Nek2YpspMr4ozmJCU"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less": function(e, t, s) {
			e.exports = {
				link: "_2sOYhKsA_6kr-jal5uxghX",
				subredditName: "Y6X1Z6XpPZ42HHxG6iPUg",
				subredditIcon: "_3KW4JGkWWYds_QkhJav3lV"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less": function(e, t, s) {
			e.exports = {
				postInformation: "_1ykNwWxnTMBSi_9FpI1aS9",
				interactions: "_17rAVV4Z_xjSbW2Dnzd6GG",
				title: "_1hY0DyJaLGV23_ZN7lGZLl"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less": function(e, t, s) {
			e.exports = {
				media: "N08zT4c39PJ7xCbcR2dhy",
				mediaThumbnail: "_9U9c34f1Ov1YZrnCNbH_e",
				mediaThumbnailContainer: "OBfGp3Y3pfXQbQtgTek4B",
				userIconContainer: "_1Xl-Y2ofyQhQDptuCNW3gg",
				userIconWrapper: "F_vBi78s0CDuAiX2g82hg",
				userIcon: "_3Ba5v_JdXj-iGcinxrYkz6",
				defaultUserIcon: "_2Jv4FE0k7dgPuiylbWWXJg",
				snoovatarUserIcon: "X3oFujh1WDeA5ZdMgFl_h"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2trYWJQru0_I7CsxK5kt7W"
			}
		},
		"./src/reddit/components/PromotedUserPostsAd/index.m.less": function(e, t, s) {
			e.exports = {
				container: "sMTOozCI4j186nHWW2jp4",
				communityLink: "_1iVqrl2JSOJGHlr6UhojWd"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.m.less": function(e, t, s) {
			e.exports = {
				StyledRawHTMLDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH",
				styledRawHtmlDisplay: "_3ms2Z8z8rPWLXaErcTJ9yH"
			}
		},
		"./src/reddit/components/RawHTMLDisplay/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const b = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				f = c.a.wrapped(e => {
					const t = Object(l.a)();
					return r.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: s => {
							((e, t, s, o, n) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const s = e.target.getAttribute("href");
									n && o(s, n), t(s)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
							})(s, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(o.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(o.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(i.a)(f))
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				u = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/selectors/postFlair.ts"),
				h = s("./src/reddit/selectors/posts.ts"),
				x = s("./src/reddit/selectors/user.ts");
			const _ = {
					autoplayPref: x.d,
					activeModalId: u.a,
					crosspost: h.d,
					isActive: h.j,
					isChatPost: m.d,
					isCurrentUserProfilePost: h.l,
					isExpanded: h.m,
					isLoggedIn: x.S,
					moderatorPermissions: b.m,
					modModeEnabled: d.W,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: f.a,
					showMedia: d.t,
					flairStyleTemplate: d.Y,
					showCTAExperimentDesign: p.a
				},
				E = Object(o.b)(() => Object(n.c)(_), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const o = t === i.a.upvoted ? Object(r.ib)(s) : Object(r.v)(s);
							e(o)
						},
						onIgnoreReports: () => e(Object(r.eb)(s)),
						onOpenReportsDropdown: t => e(Object(a.h)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(E(Object(c.b)(e)))
		},
		"./src/reddit/endpoints/talk/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "f", (function() {
				return h
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = (s("./node_modules/uuid/dist/esm-browser/v4.js"), s("./src/lib/makeGqlRequest/index.ts")),
				r = s("./src/lib/makeRequest/index.ts"),
				a = (s("./src/reddit/models/Subreddit/index.ts"), s("./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json"), s("./src/redditGQL/operations/CreateLiveAudioRoomOrError.json"), s("./src/redditGQL/operations/GetAvailableAudioRoomTopics.json"), s("./src/redditGQL/operations/GetSubredditAllowedPostTypes.json")),
				i = s("./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json"),
				c = (s("./src/redditGQL/operations/PrepareLiveAudioRoom.json"), s("./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json"), s("./src/redditGQL/operations/ReportTalk.json")),
				d = s("./src/redditGQL/operations/StartLiveAudioRoom.json"),
				l = s("./src/redditGQL/types.ts");
			const u = (e, t) => Object(n.a)(e, {
					...c,
					variables: t
				}),
				m = async (e, t) => {
					const s = await Object(n.a)(e, {
						...a,
						variables: t
					});
					return !!Object(r.c)(s) && (s.body.data.subredditInfoById.allowedPostTypes || []).includes(l.O.Talk)
				}, p = async (e, t) => {
					var s, o;
					const a = await Object(n.a)(e, {
						...i,
						variables: t
					});
					return !!Object(r.c)(a) && (null !== (o = null === (s = a.body.data.profileByName) || void 0 === s ? void 0 : s.allowedPostTypes) && void 0 !== o ? o : []).includes(l.O.Talk)
				}, b = e => e.data.createAudioRoomOrError || e.data.createAudioRoomOnProfile || e.data.startAudioRoom, f = {
					[l.k.ServiceError]: o.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
						hk: "3XqPJS"
					}),
					[l.k.UserNotAuthorized]: o.fbt._("You don't have permission to start talks in this community.", null, {
						hk: "1XY1Ss"
					}),
					[l.k.RoomLimitExceeded]: o.fbt._("You can only create three talks at one time. To continue, close a talk you're not using.", null, {
						hk: "3zPx9X"
					}),
					[l.k.ConcurrentRoomLimitExceeded]: o.fbt._("Too many talks are happening right now. Try again later.", null, {
						hk: "2LYXJx"
					}),
					[l.k.SubredditRoomLimitExceeded]: o.fbt._("This community can only host two talks at a time. Try again after one has ended.", null, {
						hk: "2mGf21"
					})
				}, h = (l.Q.ServiceError, o.fbt._("Something's wrong with the talk service right now. Check back later.", null, {
					hk: "3XqPJS"
				}), l.Q.UserNotAuthorized, o.fbt._("You don't have permission to start talks in this community.", null, {
					hk: "1XY1Ss"
				}), (e, t) => Object(n.a)(e, {
					...d,
					variables: t
				}))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, s) {
			"use strict";

			function o(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let s = 0;
				return e.placement && t.placement && (s = e.placement.localeCompare(t.placement)), 0 === s && e.position && t.position && (s = e.position - t.position), 0 === s && (s = e.title.localeCompare(t.title)), s
			}

			function n(e) {
				return [...e].sort(o)
			}
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return n
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: n
					} of t) s.push(Object(o.f)(n));
				return s
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/constants/index.ts");
			const n = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case o.L.NO_STRIPE_SUBSCRIPTION:
							case o.L.USER_DOESNT_EXIST:
							case o.L.USER_REQUIRED_ERROR:
							case o.L.VALIDATION_ERROR:
								return e;
							case o.L.NO_USER:
							case o.L.NO_TEXT:
							case o.L.NO_URL:
								return o.L.VALIDATION_ERROR;
							case o.L.CREDIT_CARD_FAILURE:
							case o.L.CREDIT_CARD_FAILURE_GENERIC:
								return o.L.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.L.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.L.VALIDATION_ERROR
				},
				r = e => {
					const t = e.body;
					return {
						type: n(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: r(e)
					} : e
				};
			t.a = r
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, o, r, a) => o ? e.crosspostRootId ? n.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, r, a)) : i(e, s, r, a) : null,
				i = (e, t, s, o) => n.a.createElement(r.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: o,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				})
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return x
			}));
			var o = s("./node_modules/polished/dist/polished.es.js"),
				n = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(i.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(o.k)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(r.a)(Object(n.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			}));
			var o = s("./src/reddit/components/CreatorStats/helpers.ts"),
				n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case o.b.Available:
							return "insights_shown";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
							return "post_too_old";
						case o.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (e, t) => s => ({
					...Object(r.o)(s),
					action: n.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.lb)(s),
					post: Object(r.K)(s, e),
					userSubreddit: Object(r.ub)(s),
					actionInfo: Object(r.d)(s, {
						reason: a(t)
					})
				}),
				c = (e, t) => s => ({
					...Object(r.o)(s),
					action: n.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.K)(s, t),
					subreddit: Object(r.lb)(s),
					userSubreddit: Object(r.ub)(s)
				}),
				d = e => {
					switch (e) {
						case o.b.Available:
							return "stats";
						case o.b.NotAvailableYet:
							return "not_enough_views";
						case o.b.NotAvailable:
						case o.b.Expired:
							return "no_data";
						case o.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(r.o)(t),
					action: n.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.K)(t, e, void 0, 0),
					profile: Object(r.T)(t)
				}),
				u = (e, t, s) => o => ({
					...Object(r.o)(o),
					action: n.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						reason: d(t)
					}),
					post: Object(r.K)(o, e, void 0, s)
				}),
				m = (e, t, s, o, a, i) => c => ({
					...Object(r.o)(c),
					action: n.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.K)(c, e, void 0, i),
					subreddit: Object(r.lb)(c),
					outbound: {
						postId: s,
						url: t,
						subredditId: o,
						subredditName: a
					}
				}),
				p = (e, t, s) => o => ({
					...Object(r.o)(o),
					action: n.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(o, {
						pageType: "post_stats",
						reason: d(t)
					}),
					post: Object(r.K)(o, e, void 0, s),
					subreddit: Object(r.lb)(o)
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return i
			})), s.d(t, "y", (function() {
				return c
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "p", (function() {
				return l
			})), s.d(t, "q", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "o", (function() {
				return b
			})), s.d(t, "r", (function() {
				return f
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "n", (function() {
				return E
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "l", (function() {
				return g
			})), s.d(t, "t", (function() {
				return S
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "x", (function() {
				return y
			})), s.d(t, "u", (function() {
				return P
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "s", (function() {
				return I
			})), s.d(t, "v", (function() {
				return T
			})), s.d(t, "w", (function() {
				return L
			}));
			var o = s("./src/reddit/models/ScheduledPost/index.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...n.o(e),
					screen: n.cb(e),
					subreddit: n.lb(e),
					userSubreddit: n.ub(e)
				}),
				a = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(o.q)(e)
				}),
				i = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...r(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...r(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...r(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...r(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...r(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...r(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...r(t),
					scheduledPost: a(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: a(e)
				}),
				h = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...r(e)
				}),
				x = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...r(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				O = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: n.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				v = {
					[o.d.Hourly]: "hourly_frequency",
					[o.d.Daily]: "daily_frequency",
					[o.d.Weekly]: "weekly_frequency",
					[o.d.Monthly]: "monthly_frequency",
					[o.b]: "custom_frequency"
				},
				C = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : v[e],
					...r(t)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				S = (e, t, s) => a => ({
					source: "post",
					action: "click",
					noun: Object(o.m)(e),
					...r(a),
					actionInfo: n.d(a, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				k = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				j = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				y = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				P = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: a(t)
				}),
				N = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				I = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: a(t)
				}),
				T = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				L = () => (e, t) => {
					const s = r(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...s,
						actionInfo: {
							...s.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: a(t)
					}
				}
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react-redux/es/index.js"),
				n = s("./src/reddit/selectors/removedPosts.ts");
			const r = () => Object(o.e)(e => Object(n.d)(e))
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s("./src/lib/CSSVariableProvider/index.tsx");

			function r() {
				return Object(o.useContext)(n.b)
			}
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			var o, n, r = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(o || (o = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(n || (n = {}));
			const a = {
					[o.Loyalty]: r.a.First,
					[o.Achievement]: r.a.Second,
					[o.Cosmetic]: void 0
				},
				i = e => e === r.a.First ? o.Loyalty : e === r.a.Second ? o.Achievement : o.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "s", (function() {
				return a
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "o", (function() {
				return u
			})), s.d(t, "p", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "r", (function() {
				return x
			})), s.d(t, "l", (function() {
				return _
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "n", (function() {
				return g
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "q", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./src/lib/assertNever.ts"),
				n = s("./src/reddit/models/GqlTopLevelField.ts"),
				r = s("./src/reddit/models/User/index.ts");
			const a = "scheduledposts";
			var i, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(i || (i = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(c || (c = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(d || (d = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === r.c.AvailableRedditor,
				m = e => e.__typename === n.a.Subreddit;
			var p, b, f, h;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(f || (f = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(h || (h = {}));
			const x = e => b[h[e]],
				_ = e => h[b[e]],
				E = e => f[b[e]],
				O = e => b[f[e]],
				v = e => h[f[e]];
			var C;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(C || (C = {}));
			const g = e => {
					switch (e) {
						case C.Hourly:
						case C.Daily:
						case C.Weekly:
						case C.Monthly:
							return !0
					}
					return !1
				},
				S = "custom",
				k = e => {
					switch (e) {
						case "isNsfw":
							return "mark_as_nsfw";
						case "isOriginalContent":
							return "mark_as_oc";
						case "isSticky":
							return "sticky";
						case "isModDistinguished":
							return "mod_distinguish";
						case "isSpoiler":
							return "mark_as_spoiler";
						case "isContestMode":
							return "mark_as_contest_mode";
						case "isPostAsMetaMod":
							return "post_as_meta_mod";
						default:
							return Object(o.a)(e)
					}
				},
				j = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var o, n = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(o || (o = {}));
			const r = {
				status: o.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.a:
						if (e.status === o.Fetched && e.data.stripe && e.data.stripe.sources) {
							const s = t.payload.cardId,
								{
									[s]: o,
									...n
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: n
									}
								}
							}
						}
						return e;
					case n.e:
						if (e.status === o.Fetched && e.data.braintree && e.data.braintree.sources) {
							const s = t.payload.sourceId,
								{
									[s]: o,
									...n
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: n
									}
								}
							}
						}
						return e;
					case n.b:
						return {
							error: t.payload.error, status: o.Failure
						};
					case n.c:
						return {
							data: t.payload, status: o.Fetched
						};
					case n.d:
						return {
							status: o.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o, n = s("./src/lib/constants/specialMembership.ts"),
				r = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = s("./src/reddit/helpers/economics/sortBadges.ts"),
				i = s("./src/reddit/models/Badge/index.ts"),
				c = s("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(o || (o = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, s, o) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(n => {
						let r;
						(r = e.placement ? e.placement === i.a.First ? o[c.a.Loyalty][n] : o[c.a.Achievement][n] : l(e) ? o[c.a.Cosmetic][c.c.MyBadges][n] : o[c.a.Cosmetic][c.c.Gallery][n]) && (l(e) ? s.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const s = parseInt(e.price || "0"),
						o = parseInt(t.price || "0");
					return s === o ? Object(a.b)(e, t) : s - o
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === n.a).map(m).sort((e, s) => {
					const o = t[e.id],
						n = t[s.id];
					return Object(a.b)(o, n)
				})
			}

			function b(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(s => {
					const o = e.collections[s],
						n = {
							description: o.description,
							highlight: o.extra && o.extra.style && o.extra.style.color,
							id: o.id,
							locked: [],
							title: o.title,
							unlocked: []
						};
					t[c.a.Loyalty][s] = {
						...n,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][s] = {
						...n,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][s] = {
						...n,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][s] = {
						...n,
						locked: [],
						unlocked: []
					}
				});
				const s = new Set;
				e.userOwnedBadges.forEach(t => {
					const o = e.badges[t];
					o && s.add(o.type)
				});
				const o = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), s, o, t), u(Object.keys(e.products).map(t => e.products[t]), s, o, t), {
					collections: {
						[c.a.Loyalty]: p(t[c.a.Loyalty], e.collections),
						[c.a.Achievement]: p(t[c.a.Achievement], e.collections),
						[c.a.Cosmetic]: {
							[c.c.Gallery]: p(t[c.a.Cosmetic][c.c.Gallery], e.collections),
							[c.c.MyBadges]: p(t[c.a.Cosmetic][c.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a: {
						const {
							subredditId: s
						} = t.payload, n = e[s];
						return n && n.status === o.Fetched ? {
							...e,
							[s]: {
								...n,
								data: {
									...n.data
								},
								raw: {
									...n.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: s
						} = t.payload, n = e[s];
						return n && n.status === o.Fetched ? {
							...e,
							[s]: {
								...n,
								data: {
									...n.data,
									subscription: {
										...n.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...n.raw,
									subscription: {
										...n.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case r.i: {
						const s = t.payload;
						return {
							...e,
							[s.subredditId]: {
								raw: s,
								data: b(s),
								status: o.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(o.a)(e => Object(r.c)(e, {
					experimentName: n.jg,
					experimentEligibilitySelector: r.a
				}), e => e),
				i = Object(o.a)(a, e => e === n.dg)
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				a = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				i = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = new Set([c.g.AntiEvilOps, c.g.AutomodFiltered, c.g.CommunityOps, c.g.ContentTakedown, c.g.CopyrightTakedown, c.g.Moderator, c.g.Reddit]),
				u = new Set([c.g.Author, c.g.AuthorDeleted]),
				m = Object(n.a)(r.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return l.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = o.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let n = Object(a.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				p = Object(n.a)(r.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = o.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let n = Object(a.b)(e);
					return n || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (n = e.media.markdownContent), n === s
				}),
				b = Object(n.a)(r.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				f = Object(n.a)(d.m, r.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				h = Object(n.a)(r.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"e35a47c6aa21"}')
		},
		"./src/redditGQL/operations/CreateLiveAudioRoomOrError.json": function(e) {
			e.exports = JSON.parse('{"id":"f1f366237119"}')
		},
		"./src/redditGQL/operations/GetAvailableAudioRoomTopics.json": function(e) {
			e.exports = JSON.parse('{"id":"05271fef4b69"}')
		},
		"./src/redditGQL/operations/GetSubredditAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"f65cf1eba776"}')
		},
		"./src/redditGQL/operations/GetUserProfileAllowedPostTypes.json": function(e) {
			e.exports = JSON.parse('{"id":"34fa0ef8e099"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"a04297924fc8"}')
		},
		"./src/redditGQL/operations/PrepareLiveAudioRoomOnProfile.json": function(e) {
			e.exports = JSON.parse('{"id":"649e9f8bd6d9"}')
		},
		"./src/redditGQL/operations/ReportTalk.json": function(e) {
			e.exports = JSON.parse('{"id":"139ca5b89cf9"}')
		},
		"./src/redditGQL/operations/StartLiveAudioRoom.json": function(e) {
			e.exports = JSON.parse('{"id":"6e7ab4bd4873"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.85ceba4c976ddb94eac1.js.map