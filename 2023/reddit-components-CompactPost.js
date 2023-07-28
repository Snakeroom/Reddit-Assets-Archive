// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.91361dd045e53fff40b0.js
// Retrieved at 7/28/2023, 1:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var n;
			n = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function n(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var o, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						_ = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !r && !l && /macintosh/i.test(t),
						x = !a && !m && !u && !p && /linux/i.test(t),
						h = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						C = !O && /[^-]mobi/i.test(t),
						v = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: E || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || E
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: E || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: E || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: E || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? o = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? o = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? o = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? o = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? o = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? o = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, h ? (o.msedge = e, o.version = h) : (o.msie = e, o.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: h
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || E
					} : m ? o = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? o = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (o = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : l ? o = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? o = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? o = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: E || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: E || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || E
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || E
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || E
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? o = {
						name: "Android",
						version: E
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, E && (o.version = E)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, E && (o.version = E)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || E
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && E && (o.version = E)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !a && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : f ? (o.mac = e, o.osname = "macOS") : v ? (o.xbox = e, o.osname = "Xbox") : _ ? (o.windows = e, o.osname = "Windows") : x && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var S = "";
					o.windows ? S = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? S = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? S = (S = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? S = (S = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? S = s(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? S = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? S = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? S = s(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (S = s(/tizen[\/\s](\d+(\.\d+)*)/i)), S && (o.osversion = S);
					var y = !o.windows && S.split(".")[0];
					return O || c || "ipad" == r || a && (3 == y || y >= 4 && !C) || o.silk ? o.tablet = e : (C || "iphone" == r || "ipod" == r || a || i || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var s, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) n.push(t(e[s]));
					return n
				}

				function r(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), s = o(e, (function(e) {
							var s = t - n(e);
							return o((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, n, o) {
					var a = s;
					"string" == typeof n && (o = n, n = void 0), void 0 === n && (n = !1), o && (a = t(o));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([i, e[c]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = r, s.check = function(e, t, s) {
					return !a(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, o) {
				return o(e, (function(e, o, r) {
					s = n ? (n = !1, e) : t(s, e, o, r)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				o = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = o(s)) == s ? s : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), n(o(e), t, s)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				o = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? n : a,
					d = arguments.length < 3;
				return c(e, r(t, 4), s, d, o)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
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
				return n
			}));
			const n = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Media/index.ts"),
				o = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = s.n(o);
			t.a = function(e) {
				var t;
				const {
					source: s,
					isSponsored: o,
					domainOverride: a,
					callToAction: i
				} = e;
				let c = "";
				if (o) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == i ? void 0 : i.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					c = a || Object(n.E)(e)
				} else c = Object(n.E)(e);
				const d = r.a.parse(c),
					l = d.path || "",
					m = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + m
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");
			const r = [o.yc, o.ub, o.D, o.U, o.pb, o.Xb],
				a = {
					[o.Xb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.pb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.U]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.D]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.ub]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.yc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[o.Xb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.U]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.D]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.ub]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.yc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.ub]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.yc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.yc]: "",
						[o.ub]: "",
						[o.D]: "",
						[o.U]: "",
						[o.pb]: "",
						[o.Xb]: ""
					};
				let m = d - c;
				if (m <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of r) {
					const e = Math.floor(m / n);
					e && (l[n] = (t ? i : a)[n](e).toString()), m -= e * n
				}
				const u = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? u : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", u)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
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
				return m
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				m = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				i = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
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
				return m
			})), s.d(t, "s", (function() {
				return u
			})), s.d(t, "n", (function() {
				return p
			})), s.d(t, "l", (function() {
				return b
			})), s.d(t, "m", (function() {
				return _
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "q", (function() {
				return C
			})), s.d(t, "o", (function() {
				return v
			}));
			const n = "CREATE_COLLECTION_PENDING",
				o = "CREATE_COLLECTION_SUCCESS",
				r = "CREATE_COLLECTION_FAILED",
				a = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				i = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				c = "ADD_POST_TO_COLLECTION_SUCCESS",
				d = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				m = "UPDATE_COLLECTION_PENDING",
				u = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				_ = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				x = "REORDER_COLLECTION_PENDING",
				h = "REORDER_COLLECTION_SUCCESS",
				E = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				C = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				v = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/matchRoute/index.ts"),
				o = s("./src/lib/opener/index.ts"),
				r = s("./node_modules/react-router-redux/es/index.js");
			const a = function(e) {
				let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
				return async (s, a, i) => {
					let {
						routes: c
					} = i;
					const d = a();
					Object(n.a)(e, c, d) ? s(Object(r.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
				}
			}
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				c = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = s.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = Object(a.a)(e => {
				let {
					className: t,
					...s
				} = e;
				return o.a.createElement(i.a, l({}, s, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(d.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(i.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = m
		},
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, s) {
			e.exports = {
				hideAboveSmallTablet: "FX_aWE8xMirpzniJDh7I9",
				responsiveExpandoButton: "_3gazhzxd2iBGYb2k67_HTw",
				mHideAboveSmallTablets: "_2zV_ARVPrYN10xmbbb_4Lu",
				responsiveMeta: "_1xomvNxK4aHGoGa-YDw1Mc",
				verticalVotes: "WAapGmF_gr09J509Af-gC",
				commentsLink: "Nz0lkWnnj2V_4iBKE0WL7",
				hideBelowSmallTablet: "z_7pbLL4hZp6ikYkq0prE",
				horizontalVotes: "_37nbKm3ee5NGx6e-LXErLD",
				postTopMeta: "_1ghZRP5m5xDLh0up1rFt0e",
				mHideBelowSmallTablets: "_3x_hdVQw5uJh6xeAGoZock",
				adLinkWrapper: "_4Dt8djtbHlJ5uCZDX_SeV",
				ctaExperiment: "_3xMykgG1y_Ln8tQs4ciV4i",
				content: "_1B7SUGHK0QDoHimxX2a9D0",
				leftRail: "_2r9FABr2qYEUDyZoenhn6N",
				bulkActionCheckbox: "_44ehKZ_pl1NGGaaTYouZR",
				subredditIcon: "_1kWbgdOrvSeXIZZRIw4uBS",
				topLine: "_2ZjElFi3ORaU3VPrwmdoCp",
				postBadges: "_126a2ACB41algqMEwA34TF",
				flatList: "_3jwri54NGT-SRatPIZYiMo",
				expandedContentWrapper: "_12wy0ZFFaS3a49145uXWXt",
				crosspostMediaWrapper: "_2fCIreZsKBNS3esgsKKksM",
				compactWrapper: "YA9IzN0YR-G5_oD5EUydl",
				compactPostRow: "WnMeTcero48dKo501T-19",
				leftRailWrapper: "_3YgWdffoKyCp7UaGAEQpoo",
				proposalMetaData: "_1_B8IWlNlt5jJVg4cKy7nL",
				isEvent: "_1csviRG5jI9xOrcsmpbfwt",
				modToolsFlatlist: "_20p7Nh6bZU7MOqYuB2uJcy",
				postContainer: "_2bHVWuR_l_wVivC3FKfLFf",
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe",
				modModeBannerWrapper: "_1_voPxd0-GKljAjvO7ZcgJ"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "renderSubredditIcon", (function() {
				return Ae
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/postLayout.ts"),
				b = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				_ = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/models/Media/index.ts"),
				h = s("./src/reddit/models/Post/index.ts"),
				E = s("./src/reddit/models/User/index.ts"),
				O = s("./src/reddit/models/Vote/index.ts"),
				C = s("./src/reddit/actions/post.ts"),
				v = s("./src/reddit/actions/postFlair.ts"),
				S = s("./src/reddit/actions/tooltip.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				g = s("./src/reddit/selectors/moderatorPermissions.ts"),
				P = s("./src/reddit/selectors/postFlair.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				T = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				N = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				j = s("./src/reddit/components/AwardBadges/index.tsx"),
				I = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				L = s("./src/reddit/components/CommentsLink/index.tsx"),
				w = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				D = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = s("./src/reddit/components/ExpandoButton/index.tsx"),
				M = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				F = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				U = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				B = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				W = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				Y = s("./src/reddit/components/ModModeReports/index.tsx"),
				V = s("./src/reddit/components/ModModeReports/helpers.ts"),
				G = s("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				H = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				z = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				q = s("./src/reddit/components/PostBadges/index.tsx"),
				Z = s("./src/reddit/components/PostContainer/index.tsx"),
				K = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				X = s("./src/reddit/components/PostLeftRail/index.tsx"),
				J = s("./src/reddit/components/PostMedia/index.tsx"),
				Q = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				$ = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ee = s("./src/reddit/components/PostTitle/index.tsx"),
				te = s("./src/reddit/components/PostTopMeta/index.tsx"),
				se = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ne = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				oe = s("./src/reddit/components/SubredditIcon/index.tsx"),
				re = s("./src/reddit/components/VerticalVotes/index.tsx"),
				ae = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = s("./src/reddit/contexts/Post/index.tsx"),
				de = s("./src/reddit/controls/Checkbox/index.tsx"),
				le = s("./src/reddit/controls/MetaData/index.tsx"),
				me = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				ue = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				pe = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				be = s("./src/reddit/helpers/postEvent.ts"),
				_e = s("./src/reddit/hooks/useIsOverlay.ts"),
				fe = s("./src/reddit/hooks/useTheme.ts"),
				xe = s("./src/reddit/hooks/useUserContext.ts"),
				he = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				Ee = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Oe = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				Ce = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ve = s.n(Ce),
				Se = s("./src/reddit/selectors/experiments/chat.ts"),
				ye = s("./src/redditGQL/types.ts"),
				ge = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				Pe = s("./src/reddit/components/CompactPost/index.m.less"),
				ke = s.n(Pe);

			function Te() {
				return (Te = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ne = e => {
					let {
						isCompact: t,
						...s
					} = e;
					return r.a.createElement(A.a, Te({
						className: Object(l.a)(ke.a.responsiveExpandoButton, {
							[ke.a.mHideAboveSmallTablets]: !!t,
							[ke.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				je = () => Object(c.c)({
					activeModalId: y.a,
					crosspost: k.d,
					flairStyleTemplate: ie.Y,
					isActive: k.j,
					isExpanded: k.m,
					layout: ie.U,
					moderatorPermissions: g.m,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					showEditFlair: P.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(g.i)(e, s.id)
					},
					showCTAExperimentDesign: Oe.a,
					isLiveChatUserCountEnabled: Se.f
				}),
				Ie = (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: o
							} = t;
							return e(Object(v.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: o
							}))
						},
						handleVote: t => {
							const n = t === O.a.upvoted ? Object(C.ib)(s) : Object(C.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(C.eb)(s)),
						onOpenReportsDropdown: t => e(Object(S.h)({
							tooltipId: t
						}))
					}
				};
			class Le extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: s,
						crosspost: n,
						currentUser: o,
						eventFactory: a,
						flairStyleTemplate: i,
						handleVote: c,
						imageGalleryCurrentItem: m,
						isCheckboxSelected: u = !1,
						isCommentsPage: O,
						isCommentPermalink: C,
						isExpanded: v,
						isGalleryTileLayoutDefault: S,
						isModWithUserNotesPermissions: y,
						isOverlay: g,
						isProfilePostListing: P,
						inSubredditOrProfile: k = !1,
						layout: A,
						moderatorPermissions: J,
						modModeEnabled: ne,
						onClickPost: oe,
						onFlairChanged: ie,
						onIgnoreReports: ce,
						poll: le,
						post: _e,
						subredditOrProfile: fe,
						userIsOp: xe,
						hideModTools: Oe,
						scrollerItemRef: Ce,
						showBulkActionCheckbox: Se,
						showEditFlair: Pe,
						toggleCheckbox: Te,
						tooltipType: je,
						sendEvent: Ie,
						shouldShowGalleryTileOption: Le,
						showCTAExperimentDesign: De,
						isLiveChatUserCountEnabled: Ae
					} = this.props, Re = !!_e.media && _e.media.type === x.o.RTJSON, Fe = xe && Re, Ue = Object(K.b)(_e.id, g), Be = Object(pe.a)(J), We = Object(me.a)(J), Ye = Object(ue.a)(J), Ve = `-mod-actions-menu-${_e.id}`, Ge = `voting-arrows-${_e.id}`, He = !!o && Object(E.e)(o) === _e.author, ze = Object(W.a)(_e), qe = Object(V.c)(_e), Ze = Object(R.a)("View--Reports", _e.id, je), Ke = Object(V.a)(_e), Xe = !(g || O || C), Je = e => Ie(Object(f.n)(_e.id, e)), Qe = Object(d.t)(_e, m), $e = Object(h.r)(_e);
					return r.a.createElement(Z.b, {
						className: Object(l.a)(ve.a.compactPostStyles, ke.a.postContainer, Object(_.a)(this.props), t),
						isOverlay: g,
						style: {
							...Object(_.d)(this.props),
							...Object(_.b)(this.props.flairStyleTemplate)
						},
						post: _e,
						onClick: oe,
						eventFactory: a
					}, r.a.createElement("div", {
						className: ke.a.compactWrapper
					}, r.a.createElement("div", {
						className: ke.a.leftRailWrapper
					}, r.a.createElement("div", {
						className: ke.a.leftRail,
						style: {
							borderColor: Object(X.c)({
								isRemoved: !!_e.bannedBy,
								isReported: Object(b.a)(_e),
								isSponsored: _e.isSponsored,
								theme: this.props.theme
							})
						}
					}, Se && r.a.createElement(de.a, {
						className: ke.a.bulkActionCheckbox,
						isCheckboxSelected: u,
						toggleCheckbox: Te
					}), r.a.createElement(re.a, {
						className: ke.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: _e,
						onVoteClick: c
					}), r.a.createElement(w.a, {
						className: ke.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: _e,
						onVoteClick: c,
						upvoteTooltipId: Ge
					}))), r.a.createElement(z.a, {
						className: Object(l.a)(ke.a.content, {
							[ke.a.isEvent]: Object(be.a)(_e)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, r.a.createElement(D.a, {
						isCompactMode: !0,
						post: _e
					}), r.a.createElement("div", {
						className: ke.a.compactPostRow
					}, !Oe && r.a.createElement(Ne, {
						crosspost: n,
						isCommentsPage: O,
						isCompact: !1,
						isExpanded: v,
						post: _e,
						useMediaIcons: !0
					}), !k && !_e.isSponsored && r.a.createElement(F.h, {
						type: _e.belongsTo.type,
						id: _e.belongsTo.id
					}), r.a.createElement("div", {
						className: ke.a.topLine,
						"data-click-id": "body"
					}, $e && r.a.createElement(H.a, {
						content: _e.recommendationContext.content,
						layout: p.g.Compact,
						post: _e
					}), r.a.createElement(ee.c, {
						post: _e,
						poll: le,
						size: ee.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Me(_e, fe), r.a.createElement(te.g, {
						className: ke.a.postTopMeta,
						flairStyleTemplate: i,
						isModWithUserNotesPermissions: y,
						post: _e,
						showSub: !!fe && !k && !_e.isSponsored,
						subredditOrProfile: fe
					}), r.a.createElement(q.a, {
						className: ke.a.postBadges,
						displayText: fe ? fe.displayText : null,
						inSubredditOrProfile: k,
						post: _e
					}), r.a.createElement(j.a, {
						thing: _e,
						tooltipType: g ? te.f.Lightbox : void 0
					}), _e.discussionType === ye.o.Chat && r.a.createElement(ge.a, {
						postId: _e.id
					})), Xe && !Ae && r.a.createElement("div", null, r.a.createElement(I.a, {
						className: ke.a.liveDiscussionIcon,
						postId: _e.postId
					})), !_e.isSurveyAd && r.a.createElement("div", {
						className: ke.a.flatList
					}, r.a.createElement(L.a, {
						className: ke.a.commentsLink,
						hasModPostPerms: Be,
						isCommentsPage: O,
						isCommentPermalink: C,
						isOverlay: g,
						postId: _e.id,
						modModeEnabled: ne,
						numComments: _e.numComments,
						type: p.g.Compact,
						impressionId: _e.impressionId,
						isSponsored: _e.isSponsored
					}), r.a.createElement(G.a, {
						className: ke.a.modToolsFlatlist,
						isOverlay: !1,
						layout: A,
						modModeEnabled: ne,
						post: _e,
						sendEvent: Ie,
						showIconsOnly: !0
					}), Be && r.a.createElement(U.a, {
						dropdownId: Ve,
						onClick: () => Je("post_mod_action_menu")
					}, r.a.createElement(M.b, null), r.a.createElement(Q.a, {
						canEditFlair: We && Pe,
						hasModPostPerms: Be,
						hasModFullPerms: Ye,
						isOverlay: !1,
						isPostAuthor: He,
						modModeEnabled: ne,
						post: _e,
						tooltipId: Ve
					})), Be && qe && !ne && r.a.createElement(se.c, {
						text: `${Ke}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(Ze), Je("post_report_menu")
						},
						id: Ze
					}, r.a.createElement(ae.a, {
						model: _e,
						onIgnoreReports: () => {
							ce(), Je(_e.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Ze
					}), _e.ignoreReports ? r.a.createElement(he.a, null) : r.a.createElement(Ee.a, null)), r.a.createElement($.a, {
						currentProfileName: s,
						isCommentsPage: O,
						isOverlay: !1,
						isProfilePostListing: P,
						isRecommendationPost: !!_e.recommendationContext,
						layout: A,
						permalink: _e.permalink,
						sendEvent: Ie,
						showEditPost: Fe,
						showEditFlair: Pe,
						dropdownId: `${_e.id}-overflow-menu`,
						useFlatlistBreakpoints: Object($.b)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1,
							mute: !1,
							promotePost: !1
						})
					}), !Oe && r.a.createElement(Ne, {
						crosspost: n,
						isCommentsPage: O,
						isCompact: !0,
						isExpanded: v,
						post: _e,
						useMediaIcons: !0
					}))), Object(d.v)(_e, m) && r.a.createElement(T.a, {
						className: Object(l.a)(ke.a.adLinkWrapper, {
							[ke.a.ctaExperiment]: De
						}),
						ctaExperimentDesign: De && "compact"
					}, r.a.createElement(N.a, {
						post: _e,
						adLinkContent: Qe,
						isCompact: !0,
						ctaExperimentDesign: De && "compact"
					})), ne && Be && ze && r.a.createElement("div", {
						className: ke.a.modModeBannerWrapper
					}, r.a.createElement(B.a, {
						thing: _e
					})), ne && Be && qe && r.a.createElement("div", {
						className: ke.a.modModeBannerWrapper
					}, r.a.createElement(Y.a, {
						onIgnoreReports: ce,
						reportable: _e
					})), r.a.createElement(F.d, null))), v && r.a.createElement(we, {
						post: _e,
						scrollerItemRef: Ce,
						flairStyleTemplate: i,
						shouldShowGalleryTileOption: Le,
						isGalleryTileLayoutDefault: S
					}), e === Ue && r.a.createElement(K.a, {
						flairs: _e.flair,
						subredditId: _e.belongsTo.id,
						modalId: Ue,
						onFlairChanged: ie
					}))
				}
			}
			const we = e => r.a.createElement(z.a, {
					className: Object(l.a)(e.className, ke.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? r.a.createElement("div", {
					className: ke.a.crosspostMediaWrapper
				}, De(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : De(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				De = (e, t, s, n) => r.a.createElement(J.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: n,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: s,
					showCentered: !0,
					showFull: !0
				}),
				Ae = e => r.a.createElement(i.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, r.a.createElement(oe.b, {
					className: ke.a.subredditIcon,
					subredditOrProfile: e
				})),
				Me = (e, t) => r.a.createElement("div", {
					className: ke.a.responsiveMeta
				}, r.a.createElement(le.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), r.a.createElement(le.c, null), Object(le.d)(e.numComments), r.a.createElement(le.c, null), t && r.a.createElement("a", {
					href: t.url
				}, r.a.createElement(le.a, null, t.displayText)), e.isSponsored && [r.a.createElement(ne.a, {
					key: "label",
					isSurveyAd: e.isSurveyAd
				}), r.a.createElement(le.c, {
					key: "separator"
				})], !e.isSponsored && r.a.createElement(le.a, null, " ", n.fbt._("Posted by", null, {
					hk: "UqFDR"
				}), " "), r.a.createElement(te.d, {
					post: e,
					isDeleted: e.author === m.G
				}));
			t.default = Object(ce.b)(r.a.memo((function(e) {
				const t = Object(xe.a)(),
					s = Object(o.useMemo)(() => je(), []),
					n = Object(a.e)(n => s(n, {
						...e,
						...t
					})),
					i = Object(a.d)(),
					c = Ie(i, {
						...e,
						...t
					});
				return r.a.createElement(Le, Te({}, e, t, n, c, {
					onFlairChanged: t => {
						let {
							previewFlair: s,
							selectedTemplateId: n
						} = t;
						return c.dispatchFlairChanged({
							post: e.post,
							previewFlair: s,
							selectedTemplateId: n
						})
					},
					sendEvent: Object(u.b)(),
					isOverlay: Object(_e.a)(),
					theme: Object(fe.a)()
				}))
			})))
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
				return y
			})), s.d(t, "a", (function() {
				return g
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				_ = s("./src/reddit/components/Thumbnail/index.tsx"),
				f = s("./src/lib/constants/index.ts"),
				x = s("./src/reddit/contexts/Post/index.tsx"),
				h = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/components/CrosspostBox/index.m.less"),
				C = s.n(O),
				v = s("./src/lib/lessComponent.tsx");

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const y = 8,
				g = 1,
				P = v.a.div("Container", C.a),
				k = v.a.div("PostMetaWrapper", C.a),
				T = v.a.wrapped(p.c, "PostTitle", C.a),
				N = v.a.div("FlatList", C.a),
				j = v.a.div("FlatItem", C.a),
				I = v.a.span("FlatListDotSpacer", C.a),
				L = v.a.wrapped(P, "LinkContainer", C.a),
				w = v.a.div("Content", C.a),
				D = v.a.div("ThumbnailContainer", C.a),
				A = Object(c.c)({
					isCurrentUserProfilePost: h.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== f.Tb.TOPIC),
					shouldOpenPostInNewTab: E.lb
				}),
				M = Object(a.b)(A);
			t.c = Object(x.b)(M(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					d = t;
				return a && !a.media ? r.a.createElement(L, {
					className: d
				}, r.a.createElement(w, null, r.a.createElement(k, null, r.a.createElement(u.a, c)), R(a), a.source && r.a.createElement(b.a, {
					post: a
				}), U(e)), W(e)) : r.a.createElement(P, {
					className: d
				}, r.a.createElement(k, null, r.a.createElement(u.a, c)), R(a), F(e), U(e))
			}));
			const R = e => r.a.createElement(T, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				F = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, S({}, n, {
						className: C.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				U = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(N, null, r.a.createElement(j, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(I, null), r.a.createElement(j, null, B(e)))
				},
				B = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(d.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				W = e => r.a.createElement(D, null, r.a.createElement(_.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/DevvitCustomPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/models/Media/index.ts"),
				i = s("./src/reddit/icons/fonts/OutboundLink/index.tsx");
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const {
					post: t
				} = e, s = t.permalink.replace("/comments/", "/post-viewer/");
				return Object(a.G)(t) ? o.a.createElement("div", {
					className: "flex items-center justify-center m-xs bg-neutral-background-weak border-sm border-neutral-border border-solid rounded-[0.5rem] w-[490px]"
				}, o.a.createElement("div", {
					className: "flex flex-col text-center py-[48px]"
				}, o.a.createElement("div", {
					className: "max-w-[294px] my-md leading-5 text-neutral-content"
				}, o.a.createElement("p", {
					className: "text-[14px]"
				}, c._("We're launching a new type of custom post. For now, it must be opened in a new window.", null, {
					hk: "v8S8Z"
				})), o.a.createElement("p", {
					className: "text-[14px]"
				}, c._("It's us, not you.", null, {
					hk: "4wyEYD"
				}))), o.a.createElement(r.a, {
					className: "m-auto mt-sm",
					kind: r.b.ExternalLink,
					href: s,
					target: "_blank",
					priority: r.c.Primary,
					rplStyle: !0
				}, o.a.createElement(o.a.Fragment, null, o.a.createElement(i.a, {
					className: "ml-0 m-xs"
				}), c._("Open", null, {
					hk: "1yvDSH"
				}))))) : null
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/controls/OutboundLink/index.tsx"),
				u = s("./src/reddit/helpers/path/index.ts"),
				p = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				_ = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				h = s("./src/telemetry/models/Outbound.ts"),
				E = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = s("./src/reddit/components/ExpandoButton/index.m.less"),
				C = s.n(O);
			const v = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.w)({
						postId: t.post.id
					})),
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(u.b)(t.permalink), t.id))
				})),
				S = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const n = Object(c.a)(C.a.icon, C.a.hideOnHover);
					if (t) return r.a.createElement(b.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return r.a.createElement(b.a, {
						name: "poll_post",
						className: n
					});
					if (s.audioRoom) return r.a.createElement(b.a, {
						name: "audio",
						className: n
					});
					switch (e) {
						case _.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: n
							});
						case _.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: n
							});
						case _.o.TEXT:
						case _.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: n
							});
						case _.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: n
							});
						case _.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: n
							});
						case _.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = v(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: o,
					isCommentsPage: l,
					isExpanded: u,
					post: _,
					toggle: O,
					useMediaIcons: v
				} = e, y = s || _, g = Object(a.e)(x.b), P = Object(a.e)(x.c), k = t => {
					(g || P) && (t.preventDefault(), e.showModalOnPostLinkClick(y))
				}, T = y.media, N = Object(f.q)(_), j = o && !!s;
				return T && !N && !(("rtjson" === T.type || "text" === T.type || "liveaudio" === T.type) && !Object(p.a)(y)) || !!_.pollData ? r.a.createElement("button", {
					"aria-expanded": !!u,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, C.a.outer),
					"data-click-id": u ? "expando_close" : "expando_open",
					"data-adclicklocation": E.a.MEDIA,
					onClick: O
				}, u ? r.a.createElement(b.a, {
					name: "collapse",
					className: C.a.icon
				}) : v ? r.a.createElement(r.a.Fragment, null, S(y.media && y.media.type, j, _), r.a.createElement(b.a, {
					name: "expand",
					className: Object(c.a)(C.a.icon, C.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: C.a.icon
				})) : y.source && y.source.url ? r.a.createElement(m.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					href: y.source.url,
					isSponsored: _.isSponsored,
					postId: _.id,
					source: _.source,
					sourceElement: l ? h.SourceElement.PostImage : h.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(c.a)(C.a.icon, C.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(y.permalink),
					rel: "nofollow",
					onClick: k
				}, r.a.createElement(b.a, {
					name: "text_post",
					className: C.a.icon
				}))
			})
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return E
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
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
				}, t > 1 ? o.fbt._("{userCount} here now", [o.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : o.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				m = s.n(l);
			const u = () => a.a.createElement("span", {
				className: m.a.LiveLabel
			}, o.fbt._("LIVE", null, {
				hk: "1N5y3d"
			}));
			var p = s("./src/lib/LiveChatActiveUsersWithLiveLabel/index.m.less"),
				b = s.n(p);
			const _ = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return a.a.createElement("div", {
					className: Object(n.a)(b.a.liveParticipation, s)
				}, a.a.createElement(u, null), a.a.createElement(d, {
					userCount: t
				}))
			};
			var f = s("./node_modules/react-redux/es/index.js"),
				x = s("./src/reddit/selectors/chat.ts"),
				h = s("./src/reddit/selectors/experiments/chat.ts");
			const E = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(f.e)(e => Object(x.a)(e, t));
				return Object(f.e)(h.f) ? a.a.createElement(_, {
					userCount: n,
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				m = s.n(l);
			const u = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(i.b, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === c.g.Classic,
						[m.a.compactLayout]: s === c.g.Compact,
						[m.a.largeLayout]: s === c.g.Large
					}),
					content: t,
					rtJsonElementProps: u(n),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/components/HumanDate/index.tsx"),
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
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(o.d, {
					seconds: e.poll.endsAt / n.Xb
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				m = s.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: c,
					redditStyle: l,
					theme: p,
					overrideBackgroundColor: b,
					..._
				} = e;
				return o.a.createElement("div", u({
					className: Object(r.a)(m.a.backgroundWrapper, s),
					style: b || Object(i.c)(n, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, _), t)
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return oe
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx"),
				i = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/components/DevvitCustomPost/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/constants/experiments.ts"),
				b = s("./src/reddit/helpers/chooseVariant/index.ts"),
				_ = s("./node_modules/reselect/es/index.js");
			const f = Object(_.a)(e => Object(b.c)(e, {
				experimentEligibilitySelector: b.a,
				experimentName: p.Fc
			}), e => e === p.Zd);
			var x = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/classNames/index.ts"),
				E = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				O = s("./src/reddit/components/SubredditIcon/index.tsx"),
				C = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				y = s.n(S);
			const g = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(l.e)(e => Object(C.F)(e, {
						postId: t
					})),
					r = Object(l.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(v.X)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return r ? o.a.createElement(E.a, {
					className: Object(h.a)(y.a.link, s),
					to: r.url
				}, x.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), o.a.createElement(O.b, {
					className: y.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), o.a.createElement("span", {
					className: y.a.subredditName
				}, r.displayText)) : null
			};
			var P = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				k = s("./src/reddit/connectors/PostViewable/index.ts"),
				T = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/contexts/Post/index.tsx"),
				j = s("./src/reddit/helpers/path/index.ts"),
				I = s("./src/reddit/hooks/useClickSourceData.ts"),
				L = s("./src/reddit/hooks/useIsOverlay.ts"),
				w = s("./src/reddit/hooks/usePageLayer.ts"),
				D = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				M = s.n(A);
			const R = e => {
				let {
					post: t
				} = e;
				const s = `${Object(D.b)(t.score)} ${x.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(D.b)(t.numComments)} ${x.fbt._("comments",null,{hk:"30aUyh"})}`;
				return o.a.createElement("div", {
					className: M.a.postInformation
				}, o.a.createElement("h5", {
					className: M.a.title
				}, t.title), o.a.createElement("div", {
					className: M.a.interactions
				}, o.a.createElement("p", null, s), o.a.createElement("p", null, n)))
			};
			var F = s("./src/lib/isUrl/index.ts"),
				U = s("./src/reddit/actions/profile/index.ts"),
				B = s("./src/reddit/components/Thumbnail/index.tsx"),
				W = s("./src/reddit/components/UserIcon/index.tsx"),
				Y = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				V = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				G = s("./src/reddit/selectors/profile.ts"),
				H = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				z = s.n(H);
			const q = e => {
				let {
					post: t
				} = e;
				var s, r, a, i;
				const c = Object(l.d)(),
					d = Object(l.e)(Object(G.l)(t.author)),
					m = Object(n.useMemo)(() => Object(B.c)({
						post: t
					}), [t]),
					u = Object(n.useMemo)(() => Object(F.a)(m), [m]);
				Object(n.useEffect)(() => {
					u || c(Object(U.d)(t.author))
				}, [c, t.author, u]);
				const p = !u && Object(V.a)(null === (s = null == d ? void 0 : d.icon) || void 0 === s ? void 0 : s.url),
					b = Object(Y.c)(null === (r = null == d ? void 0 : d.icon) || void 0 === r ? void 0 : r.url);
				return o.a.createElement("div", {
					className: z.a.media
				}, u ? o.a.createElement(B.b, {
					post: t,
					url: m,
					className: z.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: z.a.mediaThumbnailContainer
				}) : null, !u && (null === (a = null == d ? void 0 : d.icon) || void 0 === a ? void 0 : a.url) && o.a.createElement("div", {
					className: z.a.userIconContainer
				}, o.a.createElement(W.a, {
					className: Object(h.a)({
						[z.a.snoovatarUserIcon]: p,
						[z.a.defaultUserIcon]: b
					}, z.a.userIcon),
					iconUrl: null === (i = null == d ? void 0 : d.icon) || void 0 === i ? void 0 : i.url,
					userName: d.name,
					wrapperClassName: z.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var Z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				K = s.n(Z);
			const X = Object(k.a)(null);
			var J = Object(N.b)(X(e => {
					let {
						post: t
					} = e;
					const s = Object(w.a)(),
						n = Object(L.a)(),
						r = Object(I.a)(),
						a = Object(T.x)(s) && !n;
					return o.a.createElement(E.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(j.b)(t.permalink) : Object(P.a)(t.permalink, !1, r)
					}, o.a.createElement("div", {
						className: K.a.container
					}, o.a.createElement(R, {
						post: t
					}), o.a.createElement(q, {
						post: t
					})))
				})),
				Q = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				$ = s.n(Q);
			const ee = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => o.a.createElement(J, {
					postId: e,
					key: e
				}));
				return o.a.createElement("div", {
					className: $.a.container
				}, s)
			};
			var te = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				se = s.n(te);
			const ne = e => {
				let {
					post: t
				} = e;
				const s = Object(l.d)();
				if (!Object(l.e)(f) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return o.a.createElement("div", {
					className: se.a.container,
					onClick: () => s(Object(m.y)(t, u.a.Click))
				}, o.a.createElement(ee, {
					postIds: t.adPromotedUserPostIds
				}), o.a.createElement(g, {
					postId: n,
					className: se.a.communityLink
				}))
			};

			function oe(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? o.a.createElement(r.c, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						availableWidth: e.availableWidth ? e.availableWidth - 2 * r.b - 2 * r.a : void 0,
						crosspost: t,
						primaryContent: !1
					}
				}) : Object(c.B)(t) && Object(c.A)(t) ? o.a.createElement(ne, {
					post: t
				}) : Object(i.G)(t) ? o.a.createElement(d.a, {
					post: t
				}) : o.a.createElement(a.a, {
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				_ = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				C = s("./src/reddit/models/Subreddit/index.ts"),
				v = s("./src/reddit/components/PostMeta/index.m.less"),
				S = s.n(v);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: v,
					isOverlay: y,
					isTopicPage: g,
					post: P,
					shouldShowSubscribeButton: k,
					subredditOrProfile: T,
					tooltipType: N
				} = e, j = !!g, I = Object(O.a)(), L = Object(r.e)(e => !!T && Object(a.i)(e, T.id)), w = !(!T || !Object(C.i)(T));
				return o.a.createElement("div", {
					className: S.a.metaContainer
				}, !n && !P.isSponsored && T && o.a.createElement(d.a, {
					postId: P.id,
					subredditName: T.name,
					isProfile: w
				}, o.a.createElement(b.a, {
					className: S.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: T.url,
						state: I
					}
				}, T.displayText)), T && T.isQuarantined && o.a.createElement(p.a, null), !n && !P.isSponsored && T && k && !v && o.a.createElement(_.a, {
					className: S.a.SubscribeButton,
					getEventFactory: e => Object(E.n)(P.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: T.name,
						type: Object(C.i)(T) ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: P.id,
					size: x.d.XXS,
					small: !0
				}), !n && !P.isSponsored && o.a.createElement(h.b, null), !n && !P.isSponsored && o.a.createElement(l.h, {
					type: P.belongsTo.type,
					id: P.belongsTo.id
				}), o.a.createElement(u.g, {
					className: S.a.postTopMeta,
					flairStyleTemplate: t,
					post: P,
					tooltipType: N,
					isModWithUserNotesPermissions: L
				}), o.a.createElement(m.a, {
					displayText: T ? T.displayText : null,
					inSubredditOrProfile: !!n,
					post: P,
					tooltipType: N
				}), !j && o.a.createElement(i.a, {
					hideCta: s,
					thing: P,
					tooltipType: y ? u.f.Lightbox : void 0
				}), L && o.a.createElement(c.a, {
					postOrComment: P,
					className: S.a.addModNote
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
				return F
			})), s.d(t, "a", (function() {
				return X
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/constants/adEvents.ts"),
				E = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				C = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				v = s("./src/reddit/hooks/usePostContext.ts"),
				S = s("./src/reddit/hooks/useTheme.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				g = s("./src/reddit/models/Flair/index.ts"),
				P = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/models/Post/index.ts"),
				T = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				N = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = s("./src/lib/getShortenedLink.ts"),
				I = s("./src/reddit/components/FlairWrapper/index.tsx"),
				L = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./src/lib/prettyPrintNumber/index.ts"),
				D = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				A = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				M = s.n(A);
			const R = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var F, U = Object(i.b)(R)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(C.a)() ? null : a.a.createElement("div", {
						className: Object(m.a)(e.className, M.a.proposalMetaData)
					}, a.a.createElement("span", null, L.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [L.fbt._param("count", Object(w.a)(n)), L.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(D.a, {
						className: M.a.proposalExpiry,
						poll: t
					}))
				})),
				B = s("./src/reddit/components/SEOTitle/index.tsx"),
				W = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Y = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				G = s("./src/telemetry/models/Outbound.ts"),
				H = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				z = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				q = s("./src/reddit/components/PostTitle/index.m.less"),
				Z = s.n(q);

			function K() {
				return (K = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(F || (F = {}));
			const X = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: o,
						children: r,
						className: i,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(S.a)();
					let u = "";
					switch (t) {
						case F.ExtraLarge:
							u = Z.a.ExtraLarge;
							break;
						case F.Large:
							u = Z.a.Large;
							break;
						case F.Medium:
							u = Z.a.Medium;
							break;
						case F.Small:
							u = Z.a.Small;
							break;
						case F.ExtraSmall:
							u = Z.a.ExtraSmall;
							break;
						case F.Metadata:
							u = Z.a.Metadata
					}
					return a.a.createElement("div", {
						className: Object(m.a)(Z.a.Title, i, u, {
							[Z.a.isNoWrap]: o,
							[Z.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": s || Object(N.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, n ? a.a.createElement(B.b, {
						type: n
					}, r) : r)
				},
				J = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: o,
						...r
					} = e;
					return a.a.createElement(c.a, K({}, r, {
						className: Object(m.a)(t, Z.a.styledLink, {
							[Z.a.isVisitedEnabled]: !s
						})
					}), o)
				},
				Q = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: o
					} = e;
					return a.a.createElement("div", {
						className: Object(m.a)(Z.a.titleContainer, n, {
							[Z.a.isNoWrap]: s,
							[Z.a.isVisitedEnabled]: !t
						})
					}, o)
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
					isNsfwBlurSubreddit: Y.e,
					shouldOpenPostInNewTab: V.lb
				}),
				ee = e => {
					const {
						post: t
					} = e, {
						isSponsored: s
					} = t, n = Object(i.d)(), o = Object(O.a)(), r = Object(i.e)(W.b), c = Object(i.e)(W.c), d = e => {
						(r || c) && (e.preventDefault(), n(Object(x.Z)(Object(E.b)(t.permalink), t.id))), t.isSponsored && Object(k.A)(t) && n(Object(x.y)(t, h.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return a.a.createElement(Q, {
						nowrap: e.nowrap
					}, a.a.createElement(te, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return a.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, a.a.createElement(te, e)); {
						const n = t.permalink,
							r = e.isCommentPermalink ? Object(E.b)(n) : Object(f.a)(n, void 0, o);
						return a.a.createElement(Q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s && !Object(k.A)(t) ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? a.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, a.a.createElement(te, t)) : a.a.createElement(te, t)
						})(t, e) : a.a.createElement(J, {
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
						post: n
					} = e;
					let o = e.format ? e.format(n) : n.title;
					s && "string" == typeof o && (o = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(o));
					const r = e.isCommentsPage ? B.a.PostComments : B.a.PostItem,
						i = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return a.a.createElement(X, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: i,
						size: e.size,
						titleColor: e.titleColor,
						titleType: r
					}, t && a.a.createElement(I.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), o)
				},
				se = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: n
					} = e, {
						isSponsored: o
					} = n, r = e.isCommentsPage ? G.SourceElement.PostLink : G.SourceElement.ListingPostLink;
					if (Object(C.a)()) return null;
					if (s && n.isNSFW) return null;
					const i = !t && !e.isCrosspost && e.size !== F.Large && !n.isSponsored && (n.source || n.media && (n.media.type === P.o.GIFVIDEO || n.media.type === P.o.IMAGE || n.media.type === P.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return a.a.createElement(_.a, {
							className: e.outboundLinkClassName,
							href: Object(P.E)(n),
							isSponsored: o,
							postId: n.id,
							source: n.source,
							sourceElement: r
						}, Object(j.a)(n), !n.isSponsored && a.a.createElement(y.a, {
							name: "external_link",
							className: Z.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== F.Large && e.size !== F.ExtraLarge) return a.a.createElement(_.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: o,
						postId: n.id,
						source: n.source,
						sourceElement: r
					}, Object(j.a)(n), !n.isSponsored && a.a.createElement(y.a, {
						name: "external_link",
						className: Z.a.outboundLinkIcon
					}));
					return null
				};
			class ne extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${Z.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(o.c)(.45,Object(N.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(o.c)(.45,this.props.titleColor||Object(N.a)(this.props).titleText,Object(N.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(o.c)(.45,Object(N.a)(this.props).bodyText,Object(N.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: o,
						isOverlay: r,
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: u
					} = this.props, p = s === g.b.Left, b = Object(I.b)(c), {
						leftFlair: _,
						rightFlair: f
					} = Object(H.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), x = !r && !o && !t, h = x && _ && _.length > 0, E = x && f && f.length > 0;
					return a.a.createElement("div", {
						className: Object(m.a)(Z.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": z.a.TITLE,
						onClick: u
					}, !d && h && a.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: _,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(T.b)(c) && a.a.createElement(ee, K({}, this.props, {
						leftFlair: d ? _ : void 0
					})), i && a.a.createElement(U, {
						className: Z.a.pollMeta,
						pollId: i.id
					}), a.a.createElement(se, this.props), E && a.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), a.a.createElement("div", {
						className: Z.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(p.ib)(),
					s = Object(p.x)(t),
					n = Object(v.a)(),
					o = Object(i.e)(o => $(o, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					r = Object(S.a)(),
					c = Object(u.b)();
				return n ? a.a.createElement(ne, K({
					pageLayer: t,
					isCommentPermalink: s
				}, n, o, e, {
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
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(u);
			const b = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				_ = c.a.wrapped(e => {
					const t = Object(l.a)();
					return r.a.createElement("div", {
						className: e.className,
						dangerouslySetInnerHTML: {
							__html: e.html
						},
						onClick: s => {
							((e, t, s, n, o) => {
								if (!e.ctrlKey && !e.metaKey && 1 !== e.button && "A" === e.target.tagName) {
									e.preventDefault();
									const s = e.target.getAttribute("href");
									o && n(s, o), t(s)
								}
								e.target.classList && e.target.classList.contains("md-spoiler-text") && (e.target.dataset.revealed = !0), s && s(e)
							})(s, e.onNavigate, e.onClick, t, e.sourceElement)
						},
						style: {
							...e.style,
							"--RawHTMLDisplay-tr-even": Object(n.f)(Object(m.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.f)(Object(m.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(i.a)(_))
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, s) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return p
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(c);
			const l = a.a.span("metaText", d.a),
				m = e => r.a.createElement(l, e, " · "),
				u = e => {
					let {
						isScoreHidden: t,
						score: s,
						useUpvotes: o,
						...a
					} = e;
					const c = Object(i.b)(s),
						d = n.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [n.fbt._plural(s, "number", c)], {
							hk: "2L3T21"
						}),
						m = t ? n.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : o ? d : n.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [n.fbt._plural(s, "number", c)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, a, m)
				},
				p = e => r.a.createElement(l, null, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, s) {
			"use strict";

			function n(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let s = 0;
				return e.placement && t.placement && (s = e.placement.localeCompare(t.placement)), 0 === s && e.position && t.position && (s = e.position - t.position), 0 === s && (s = e.title.localeCompare(t.title)), s
			}

			function o(e) {
				return [...e].sort(n)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: o
					} of t) s.push(Object(n.f)(o));
				return s
			}
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.K.NO_STRIPE_SUBSCRIPTION:
							case n.K.USER_DOESNT_EXIST:
							case n.K.USER_REQUIRED_ERROR:
							case n.K.VALIDATION_ERROR:
								return e;
							case n.K.NO_USER:
							case n.K.NO_TEXT:
							case n.K.NO_URL:
								return n.K.VALIDATION_ERROR;
							case n.K.CREDIT_CARD_FAILURE:
							case n.K.CREDIT_CARD_FAILURE_GENERIC:
								return n.K.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.K.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.K.VALIDATION_ERROR
				},
				r = e => {
					const t = e.body;
					return {
						type: o(t.json.errors),
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "d", (function() {
				return x
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const m = {},
				u = e => Object(i.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
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
						background: u(t)
					}
				},
				b = e => Object(n.k)(.2, e),
				_ = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(r.a)(Object(o.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
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
				return m
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "o", (function() {
				return b
			})), s.d(t, "r", (function() {
				return _
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "n", (function() {
				return E
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "l", (function() {
				return S
			})), s.d(t, "t", (function() {
				return y
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "x", (function() {
				return k
			})), s.d(t, "u", (function() {
				return T
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "s", (function() {
				return j
			})), s.d(t, "v", (function() {
				return I
			})), s.d(t, "w", (function() {
				return L
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.p(e),
					screen: o.db(e),
					subreddit: o.mb(e),
					userSubreddit: o.vb(e)
				}),
				a = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.q)(e)
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
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...r(e)
				}),
				u = () => e => ({
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
				_ = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: a(e)
				}),
				f = () => e => ({
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
				h = () => e => ({
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
					actionInfo: o.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				C = {
					[n.d.Hourly]: "hourly_frequency",
					[n.d.Daily]: "daily_frequency",
					[n.d.Weekly]: "weekly_frequency",
					[n.d.Monthly]: "monthly_frequency",
					[n.b]: "custom_frequency"
				},
				v = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : C[e],
					...r(t)
				}),
				S = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				y = (e, t, s) => a => ({
					source: "post",
					action: "click",
					noun: Object(n.m)(e),
					...r(a),
					actionInfo: o.d(a, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				g = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				P = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				k = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				T = () => (e, t) => ({
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
				j = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: a(t)
				}),
				I = () => e => ({
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
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./src/reddit/selectors/removedPosts.ts");
			const r = () => Object(n.e)(e => Object(o.d)(e))
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s("./src/lib/CSSVariableProvider/index.tsx");

			function r() {
				return Object(n.useContext)(o.b)
			}
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			var n, o, r = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const a = {
					[n.Loyalty]: r.a.First,
					[n.Achievement]: r.a.Second,
					[n.Cosmetic]: void 0
				},
				i = e => e === r.a.First ? n.Loyalty : e === r.a.Second ? n.Achievement : n.Cosmetic
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
				return m
			})), s.d(t, "p", (function() {
				return u
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "r", (function() {
				return x
			})), s.d(t, "l", (function() {
				return h
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "n", (function() {
				return S
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "m", (function() {
				return g
			})), s.d(t, "q", (function() {
				return P
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				o = s("./src/reddit/models/GqlTopLevelField.ts"),
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
				m = e => e.__typename === r.c.AvailableRedditor,
				u = e => e.__typename === o.a.Subreddit;
			var p, b, _, f;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(_ || (_ = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(f || (f = {}));
			const x = e => b[f[e]],
				h = e => f[b[e]],
				E = e => _[b[e]],
				O = e => b[_[e]],
				C = e => f[_[e]];
			var v;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(v || (v = {}));
			const S = e => {
					switch (e) {
						case v.Hourly:
						case v.Daily:
						case v.Weekly:
						case v.Monthly:
							return !0
					}
					return !1
				},
				y = "custom",
				g = e => {
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
							return Object(n.a)(e)
					}
				},
				P = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, o = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const r = {
				status: n.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const s = t.payload.cardId,
								{
									[s]: n,
									...o
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: o
									}
								}
							}
						}
						return e;
					case o.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const s = t.payload.sourceId,
								{
									[s]: n,
									...o
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: o
									}
								}
							}
						}
						return e;
					case o.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case o.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case o.d:
						return {
							status: n.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, o = s("./src/lib/constants/specialMembership.ts"),
				r = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = s("./src/reddit/helpers/economics/sortBadges.ts"),
				i = s("./src/reddit/models/Badge/index.ts"),
				c = s("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function m(e, t, s, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === i.a.First ? n[c.a.Loyalty][o] : n[c.a.Achievement][o] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][o] : n[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? s.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function u(e) {
				const t = (e, t) => {
					const s = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return s === n ? Object(a.b)(e, t) : s - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(u).sort((e, s) => {
					const n = t[e.id],
						o = t[s.id];
					return Object(a.b)(n, o)
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
					const n = e.collections[s],
						o = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[c.a.Loyalty][s] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][s] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][s] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][s] = {
						...o,
						locked: [],
						unlocked: []
					}
				});
				const s = new Set;
				e.userOwnedBadges.forEach(t => {
					const n = e.badges[t];
					n && s.add(n.type)
				});
				const n = new Set(e.userOwnedBadges);
				return m(Object.keys(e.badges).map(t => e.badges[t]), s, n, t), m(Object.keys(e.products).map(t => e.products[t]), s, n, t), {
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
						} = t.payload, o = e[s];
						return o && o.status === n.Fetched ? {
							...e,
							[s]: {
								...o,
								data: {
									...o.data
								},
								raw: {
									...o.raw
								}
							}
						} : e
					}
					case r.h: {
						const {
							subredditId: s
						} = t.payload, o = e[s];
						return o && o.status === n.Fetched ? {
							...e,
							[s]: {
								...o,
								data: {
									...o.data,
									subscription: {
										...o.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...o.raw,
									subscription: {
										...o.raw.subscription || {},
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
								status: n.Fetched
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
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(n.a)(e => Object(r.c)(e, {
					experimentName: o.vg,
					experimentEligibilitySelector: r.a
				}), e => e),
				i = Object(n.a)(a, e => e === o.pg)
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "d", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				a = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				i = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = new Set([c.g.AntiEvilOps, c.g.AutomodFiltered, c.g.CommunityOps, c.g.ContentTakedown, c.g.CopyrightTakedown, c.g.Moderator, c.g.Reddit]),
				m = new Set([c.g.Author, c.g.AuthorDeleted]),
				u = Object(o.a)(r.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return l.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = n.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let o = Object(a.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				p = Object(o.a)(r.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return m.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = n.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let o = Object(a.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				b = Object(o.a)(r.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return m.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				_ = Object(o.a)(d.m, r.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				f = Object(o.a)(r.a, e => !(!e || !1 !== e.isRobotIndexable))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.91361dd045e53fff40b0.js.map