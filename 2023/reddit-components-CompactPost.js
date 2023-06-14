// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.4236bf6ae556b24cb809.js
// Retrieved at 6/14/2023, 2:50:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost"], {
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
						_ = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !r && !l && /macintosh/i.test(t),
						x = !a && !u && !m && !p && /linux/i.test(t),
						h = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						C = !O && /[^-]mobi/i.test(t),
						v = /xbox/i.test(t);
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
					}, h ? (n.msedge = e, n.version = h) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
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
						version: h
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
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && E && (n.version = E)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !a && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : f ? (n.mac = e, n.osname = "macOS") : v ? (n.xbox = e, n.osname = "Xbox") : _ ? (n.windows = e, n.osname = "Windows") : x && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var S = "";
					n.windows ? S = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? S = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? S = (S = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? S = (S = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? S = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? S = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? S = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? S = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (S = s(/tizen[\/\s](\d+(\.\d+)*)/i)), S && (n.osversion = S);
					var g = !n.windows && S.split(".")[0];
					return O || c || "ipad" == r || a && (3 == g || g >= 4 && !C) || n.silk ? n.tablet = e : (C || "iphone" == r || "ipod" == r || a || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
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
			const r = [n.yc, n.ub, n.D, n.U, n.pb, n.Xb],
				a = {
					[n.Xb]: e => o.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [o.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[n.pb]: e => o.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [o.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[n.U]: e => o.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [o.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[n.D]: e => o.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [o.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[n.ub]: e => o.fbt._({
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
					[n.pb]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[n.U]: e => o.fbt._("{amount}h", [o.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[n.D]: e => o.fbt._("{amount}d", [o.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[n.ub]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[n.yc]: e => o.fbt._("{amount}y", [o.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[n.ub]: e => o.fbt._("{amount}m", [o.fbt._param("amount", String(e))], {
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
						[n.ub]: "",
						[n.D]: "",
						[n.U]: "",
						[n.pb]: "",
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
				g = s("./src/reddit/selectors/activeModalId.ts"),
				y = s("./src/reddit/selectors/moderatorPermissions.ts"),
				P = s("./src/reddit/selectors/postFlair.ts"),
				T = s("./src/reddit/selectors/posts.ts"),
				k = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				j = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				N = s("./src/reddit/components/AwardBadges/index.tsx"),
				I = s("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				L = s("./src/reddit/components/CommentsLink/index.tsx"),
				D = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				w = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				A = s("./src/reddit/components/ExpandoButton/index.tsx"),
				M = s("./src/reddit/components/Flatlist/index.tsx"),
				R = s("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				U = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				F = s("./src/reddit/components/ModActionsMenu/index.tsx"),
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
				oe = s("./src/reddit/components/SponsoredLabel/index.tsx"),
				ne = s("./src/reddit/components/SubredditIcon/index.tsx"),
				re = s("./src/reddit/components/VerticalVotes/index.tsx"),
				ae = s("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ie = s("./src/reddit/contexts/PageLayer/index.tsx"),
				ce = s("./src/reddit/contexts/Post/index.tsx"),
				de = s("./src/reddit/controls/Checkbox/index.tsx"),
				le = s("./src/reddit/controls/MetaData/index.tsx"),
				ue = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				me = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
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
				ge = s("./src/redditGQL/types.ts"),
				ye = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				Pe = s("./src/reddit/components/CompactPost/index.m.less"),
				Te = s.n(Pe);

			function ke() {
				return (ke = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const je = e => {
					let {
						isCompact: t,
						...s
					} = e;
					return r.a.createElement(A.a, ke({
						className: Object(l.a)(Te.a.responsiveExpandoButton, {
							[Te.a.mHideAboveSmallTablets]: !!t,
							[Te.a.mHideBelowSmallTablets]: !t
						})
					}, s))
				},
				Ne = () => Object(c.c)({
					activeModalId: g.a,
					crosspost: T.d,
					flairStyleTemplate: ie.Y,
					isActive: T.j,
					isExpanded: T.m,
					layout: ie.U,
					moderatorPermissions: y.m,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						if (s) return e.polls.models[s]
					},
					showEditFlair: P.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(y.i)(e, s.id)
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
								previewFlair: o,
								selectedTemplateId: n
							} = t;
							return e(Object(v.h)({
								post: s,
								previewFlair: o,
								selectedTemplateId: n
							}))
						},
						handleVote: t => {
							const o = t === O.a.upvoted ? Object(C.ib)(s) : Object(C.v)(s);
							e(o)
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
						crosspost: o,
						currentUser: n,
						eventFactory: a,
						flairStyleTemplate: i,
						handleVote: c,
						imageGalleryCurrentItem: u,
						isCheckboxSelected: m = !1,
						isCommentsPage: O,
						isCommentPermalink: C,
						isExpanded: v,
						isGalleryTileLayoutDefault: S,
						isModWithUserNotesPermissions: g,
						isOverlay: y,
						isProfilePostListing: P,
						inSubredditOrProfile: T = !1,
						layout: A,
						moderatorPermissions: J,
						modModeEnabled: oe,
						onClickPost: ne,
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
						toggleCheckbox: ke,
						tooltipType: Ne,
						sendEvent: Ie,
						shouldShowGalleryTileOption: Le,
						showCTAExperimentDesign: we,
						isLiveChatUserCountEnabled: Ae
					} = this.props, Re = !!_e.media && _e.media.type === x.o.RTJSON, Ue = xe && Re, Fe = Object(K.b)(_e.id, y), Be = Object(pe.a)(J), We = Object(ue.a)(J), Ye = Object(me.a)(J), Ve = `-mod-actions-menu-${_e.id}`, Ge = `voting-arrows-${_e.id}`, He = !!n && Object(E.e)(n) === _e.author, ze = Object(W.a)(_e), qe = Object(V.c)(_e), Ze = Object(R.a)("View--Reports", _e.id, Ne), Ke = Object(V.a)(_e), Xe = !(y || O || C), Je = e => Ie(Object(f.n)(_e.id, e)), Qe = Object(d.t)(_e, u), $e = Object(h.r)(_e);
					return r.a.createElement(Z.b, {
						className: Object(l.a)(ve.a.compactPostStyles, Te.a.postContainer, Object(_.a)(this.props), t),
						isOverlay: y,
						style: {
							...Object(_.d)(this.props),
							...Object(_.b)(this.props.flairStyleTemplate)
						},
						post: _e,
						onClick: ne,
						eventFactory: a
					}, r.a.createElement("div", {
						className: Te.a.compactWrapper
					}, r.a.createElement("div", {
						className: Te.a.leftRailWrapper
					}, r.a.createElement("div", {
						className: Te.a.leftRail,
						style: {
							borderColor: Object(X.c)({
								isRemoved: !!_e.bannedBy,
								isReported: Object(b.a)(_e),
								isSponsored: _e.isSponsored,
								theme: this.props.theme
							})
						}
					}, Se && r.a.createElement(de.a, {
						className: Te.a.bulkActionCheckbox,
						isCheckboxSelected: m,
						toggleCheckbox: ke
					}), r.a.createElement(re.a, {
						className: Te.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: _e,
						onVoteClick: c
					}), r.a.createElement(D.a, {
						className: Te.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: _e,
						onVoteClick: c,
						upvoteTooltipId: Ge
					}))), r.a.createElement(z.a, {
						className: Object(l.a)(Te.a.content, {
							[Te.a.isEvent]: Object(be.a)(_e)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, r.a.createElement(w.a, {
						isCompactMode: !0,
						post: _e
					}), r.a.createElement("div", {
						className: Te.a.compactPostRow
					}, !Oe && r.a.createElement(je, {
						crosspost: o,
						isCommentsPage: O,
						isCompact: !1,
						isExpanded: v,
						post: _e,
						useMediaIcons: !0
					}), !T && !_e.isSponsored && r.a.createElement(U.h, {
						type: _e.belongsTo.type,
						id: _e.belongsTo.id
					}), r.a.createElement("div", {
						className: Te.a.topLine,
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
						className: Te.a.postTopMeta,
						flairStyleTemplate: i,
						isModWithUserNotesPermissions: g,
						post: _e,
						showSub: !!fe && !T && !_e.isSponsored,
						subredditOrProfile: fe
					}), r.a.createElement(q.a, {
						className: Te.a.postBadges,
						displayText: fe ? fe.displayText : null,
						inSubredditOrProfile: T,
						post: _e
					}), r.a.createElement(N.a, {
						thing: _e,
						tooltipType: y ? te.f.Lightbox : void 0
					}), _e.discussionType === ge.n.Chat && r.a.createElement(ye.a, {
						postId: _e.id
					})), Xe && !Ae && r.a.createElement("div", null, r.a.createElement(I.a, {
						className: Te.a.liveDiscussionIcon,
						postId: _e.postId
					})), !_e.isSurveyAd && r.a.createElement("div", {
						className: Te.a.flatList
					}, r.a.createElement(L.a, {
						className: Te.a.commentsLink,
						hasModPostPerms: Be,
						isCommentsPage: O,
						isCommentPermalink: C,
						isOverlay: y,
						postId: _e.id,
						modModeEnabled: oe,
						numComments: _e.numComments,
						type: p.g.Compact,
						impressionId: _e.impressionId,
						isSponsored: _e.isSponsored
					}), r.a.createElement(G.a, {
						className: Te.a.modToolsFlatlist,
						isOverlay: !1,
						layout: A,
						modModeEnabled: oe,
						post: _e,
						sendEvent: Ie,
						showIconsOnly: !0
					}), Be && r.a.createElement(F.a, {
						dropdownId: Ve,
						onClick: () => Je("post_mod_action_menu")
					}, r.a.createElement(M.b, null), r.a.createElement(Q.a, {
						canEditFlair: We && Pe,
						hasModPostPerms: Be,
						hasModFullPerms: Ye,
						isOverlay: !1,
						isPostAuthor: He,
						modModeEnabled: oe,
						post: _e,
						tooltipId: Ve
					})), Be && qe && !oe && r.a.createElement(se.c, {
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
						showEditPost: Ue,
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
					}), !Oe && r.a.createElement(je, {
						crosspost: o,
						isCommentsPage: O,
						isCompact: !0,
						isExpanded: v,
						post: _e,
						useMediaIcons: !0
					}))), Object(d.v)(_e, u) && r.a.createElement(k.a, {
						className: Object(l.a)(Te.a.adLinkWrapper, {
							[Te.a.ctaExperiment]: we
						}),
						ctaExperimentDesign: we && "compact"
					}, r.a.createElement(j.a, {
						post: _e,
						adLinkContent: Qe,
						isCompact: !0,
						ctaExperimentDesign: we && "compact"
					})), oe && Be && ze && r.a.createElement("div", {
						className: Te.a.modModeBannerWrapper
					}, r.a.createElement(B.a, {
						thing: _e
					})), oe && Be && qe && r.a.createElement("div", {
						className: Te.a.modModeBannerWrapper
					}, r.a.createElement(Y.a, {
						onIgnoreReports: ce,
						reportable: _e
					})), r.a.createElement(U.d, null))), v && r.a.createElement(De, {
						post: _e,
						scrollerItemRef: Ce,
						flairStyleTemplate: i,
						shouldShowGalleryTileOption: Le,
						isGalleryTileLayoutDefault: S
					}), e === Fe && r.a.createElement(K.a, {
						flairs: _e.flair,
						subredditId: _e.belongsTo.id,
						modalId: Fe,
						onFlairChanged: ie
					}))
				}
			}
			const De = e => r.a.createElement(z.a, {
					className: Object(l.a)(e.className, Te.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? r.a.createElement("div", {
					className: Te.a.crosspostMediaWrapper
				}, we(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : we(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				we = (e, t, s, o) => r.a.createElement(J.a, {
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
				}),
				Ae = e => r.a.createElement(i.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, r.a.createElement(ne.b, {
					className: Te.a.subredditIcon,
					subredditOrProfile: e
				})),
				Me = (e, t) => r.a.createElement("div", {
					className: Te.a.responsiveMeta
				}, r.a.createElement(le.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), r.a.createElement(le.c, null), Object(le.d)(e.numComments), r.a.createElement(le.c, null), t && r.a.createElement("a", {
					href: t.url
				}, r.a.createElement(le.a, null, t.displayText)), e.isSponsored && [r.a.createElement(oe.a, {
					key: "label",
					isSurveyAd: e.isSurveyAd
				}), r.a.createElement(le.c, {
					key: "separator"
				})], !e.isSponsored && r.a.createElement(le.a, null, " ", o.fbt._("Posted by", null, {
					hk: "UqFDR"
				}), " "), r.a.createElement(te.d, {
					post: e,
					isDeleted: e.author === u.G
				}));
			t.default = Object(ce.b)(r.a.memo((function(e) {
				const t = Object(xe.a)(),
					s = Object(n.useMemo)(() => Ne(), []),
					o = Object(a.e)(o => s(o, {
						...e,
						...t
					})),
					i = Object(a.d)(),
					c = Ie(i, {
						...e,
						...t
					});
				return r.a.createElement(Le, ke({}, e, t, o, c, {
					onFlairChanged: t => {
						let {
							previewFlair: s,
							selectedTemplateId: o
						} = t;
						return c.dispatchFlairChanged({
							post: e.post,
							previewFlair: s,
							selectedTemplateId: o
						})
					},
					sendEvent: Object(m.b)(),
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
				return g
			})), s.d(t, "a", (function() {
				return y
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
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const g = 8,
				y = 1,
				P = v.a.div("Container", C.a),
				T = v.a.div("PostMetaWrapper", C.a),
				k = v.a.wrapped(p.c, "PostTitle", C.a),
				j = v.a.div("FlatList", C.a),
				N = v.a.div("FlatItem", C.a),
				I = v.a.span("FlatListDotSpacer", C.a),
				L = v.a.wrapped(P, "LinkContainer", C.a),
				D = v.a.div("Content", C.a),
				w = v.a.div("ThumbnailContainer", C.a),
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
				}, r.a.createElement(D, null, r.a.createElement(T, null, r.a.createElement(m.a, c)), R(a), a.source && r.a.createElement(b.a, {
					post: a
				}), F(e)), W(e)) : r.a.createElement(P, {
					className: d
				}, r.a.createElement(T, null, r.a.createElement(m.a, c)), R(a), U(e), F(e))
			}));
			const R = e => r.a.createElement(k, {
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
					return r.a.createElement("div", null, r.a.createElement(u.a, S({}, o, {
						className: C.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				F = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(j, null, r.a.createElement(N, null, o.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [o.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(I, null), r.a.createElement(N, null, B(e)))
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
				W = e => r.a.createElement(w, null, r.a.createElement(_.b, {
					post: e.post
				}))
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
					showModalOnPostLinkClick: t => e(Object(l.Z)(Object(m.b)(t.permalink), t.id))
				})),
				S = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
						s = arguments.length > 2 ? arguments[2] : void 0;
					const o = Object(c.a)(C.a.icon, C.a.hideOnHover);
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
						case _.o.GIFVIDEO:
							return r.a.createElement(b.a, {
								name: "gif_post",
								className: o
							});
						case _.o.IMAGE:
							return r.a.createElement(b.a, {
								name: "image_post",
								className: o
							});
						case _.o.TEXT:
						case _.o.RTJSON:
							return r.a.createElement(b.a, {
								name: "text_post",
								className: o
							});
						case _.o.VIDEO:
							return r.a.createElement(b.a, {
								name: "video_post",
								className: o
							});
						case _.o.GALLERY:
							return r.a.createElement(b.a, {
								name: "media_gallery",
								className: o
							});
						case _.o.EMBED:
						default:
							return r.a.createElement(b.a, {
								name: "embed",
								className: o
							})
					}
				};
			t.a = v(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: n,
					isCommentsPage: l,
					isExpanded: m,
					post: _,
					toggle: O,
					useMediaIcons: v
				} = e, g = s || _, y = Object(a.e)(x.b), P = Object(a.e)(x.c), T = t => {
					(y || P) && (t.preventDefault(), e.showModalOnPostLinkClick(g))
				}, k = g.media, j = Object(f.q)(_), N = n && !!s;
				return k && !j && !(("rtjson" === k.type || "text" === k.type || "liveaudio" === k.type) && !Object(p.a)(g)) || !!_.pollData ? r.a.createElement("button", {
					"aria-expanded": !!m,
					"aria-haspopup": !0,
					"aria-label": o.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, C.a.outer),
					"data-click-id": m ? "expando_close" : "expando_open",
					"data-adclicklocation": E.a.MEDIA,
					onClick: O
				}, m ? r.a.createElement(b.a, {
					name: "collapse",
					className: C.a.icon
				}) : v ? r.a.createElement(r.a.Fragment, null, S(g.media && g.media.type, N, _), r.a.createElement(b.a, {
					name: "expand",
					className: Object(c.a)(C.a.icon, C.a.showOnHover)
				})) : r.a.createElement(b.a, {
					name: "expand",
					className: C.a.icon
				})) : g.source && g.source.url ? r.a.createElement(u.b, {
					"aria-label": o.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					href: g.source.url,
					isSponsored: _.isSponsored,
					postId: _.id,
					source: _.source,
					sourceElement: l ? h.SourceElement.PostImage : h.SourceElement.ListingPostImage,
					target: "_blank"
				}, r.a.createElement(b.a, {
					name: "external_link",
					className: Object(c.a)(C.a.icon, C.a.outboundLinkIcon)
				})) : r.a.createElement(i.a, {
					"aria-label": o.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, C.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(g.permalink),
					rel: "nofollow",
					onClick: T
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
			const _ = e => {
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
			var f = s("./node_modules/react-redux/es/index.js"),
				x = s("./src/reddit/selectors/chat.ts"),
				h = s("./src/reddit/selectors/experiments/chat.ts");
			const E = e => {
				let {
					postId: t,
					className: s
				} = e;
				const o = Object(f.e)(e => Object(x.a)(e, t));
				return Object(f.e)(h.f) ? a.a.createElement(_, {
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
					..._
				} = e;
				return n.a.createElement("div", m({
					className: Object(r.a)(u.a.backgroundWrapper, s),
					style: b || Object(i.c)(o, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, _), t)
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
				experimentName: u.Dc
			}), e => e === u.Wd);
			var _ = s("./node_modules/fbt/lib/FbtPublic.js"),
				f = s("./src/lib/classNames/index.ts"),
				x = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				h = s("./src/reddit/components/SubredditIcon/index.tsx"),
				E = s("./src/reddit/selectors/posts.ts"),
				O = s("./src/reddit/selectors/subreddit.ts"),
				C = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				v = s.n(C);
			const S = e => {
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
					className: Object(f.a)(v.a.link, s),
					to: r.url
				}, _.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), n.a.createElement(h.b, {
					className: v.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), n.a.createElement("span", {
					className: v.a.subredditName
				}, r.displayText)) : null
			};
			var g = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				y = s("./src/reddit/connectors/PostViewable/index.ts"),
				P = s("./src/reddit/contexts/PageLayer/index.tsx"),
				T = s("./src/reddit/contexts/Post/index.tsx"),
				k = s("./src/reddit/helpers/path/index.ts"),
				j = s("./src/reddit/hooks/useClickSourceData.ts"),
				N = s("./src/reddit/hooks/useIsOverlay.ts"),
				I = s("./src/reddit/hooks/usePageLayer.ts"),
				L = s("./src/lib/prettyPrintNumber/index.ts"),
				D = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				w = s.n(D);
			const A = e => {
				let {
					post: t
				} = e;
				const s = `${Object(L.b)(t.score)} ${_.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					o = `${Object(L.b)(t.numComments)} ${_.fbt._("comments",null,{hk:"30aUyh"})}`;
				return n.a.createElement("div", {
					className: w.a.postInformation
				}, n.a.createElement("h5", {
					className: w.a.title
				}, t.title), n.a.createElement("div", {
					className: w.a.interactions
				}, n.a.createElement("p", null, s), n.a.createElement("p", null, o)))
			};
			var M = s("./src/lib/isUrl/index.ts"),
				R = s("./src/reddit/actions/profile/index.ts"),
				U = s("./src/reddit/components/Thumbnail/index.tsx"),
				F = s("./src/reddit/components/UserIcon/index.tsx"),
				B = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				W = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				Y = s("./src/reddit/selectors/profile.ts"),
				V = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				G = s.n(V);
			const H = e => {
				let {
					post: t
				} = e;
				var s, r, a, i;
				const d = Object(c.d)(),
					l = Object(c.e)(Object(Y.l)(t.author)),
					u = Object(o.useMemo)(() => Object(U.c)({
						post: t
					}), [t]),
					m = Object(o.useMemo)(() => Object(M.a)(u), [u]);
				Object(o.useEffect)(() => {
					m || d(Object(R.d)(t.author))
				}, [d, t.author, m]);
				const p = !m && Object(W.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					b = Object(B.c)(null === (r = null == l ? void 0 : l.icon) || void 0 === r ? void 0 : r.url);
				return n.a.createElement("div", {
					className: G.a.media
				}, m ? n.a.createElement(U.b, {
					post: t,
					url: u,
					className: G.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: G.a.mediaThumbnailContainer
				}) : null, !m && (null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url) && n.a.createElement("div", {
					className: G.a.userIconContainer
				}, n.a.createElement(F.a, {
					className: Object(f.a)({
						[G.a.snoovatarUserIcon]: p,
						[G.a.defaultUserIcon]: b
					}, G.a.userIcon),
					iconUrl: null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url,
					userName: l.name,
					wrapperClassName: G.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var z = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				q = s.n(z);
			const Z = Object(y.a)(null);
			var K = Object(T.b)(Z(e => {
					let {
						post: t
					} = e;
					const s = Object(I.a)(),
						o = Object(N.a)(),
						r = Object(j.a)(),
						a = Object(P.x)(s) && !o;
					return n.a.createElement(x.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(k.b)(t.permalink) : Object(g.a)(t.permalink, !1, r)
					}, n.a.createElement("div", {
						className: q.a.container
					}, n.a.createElement(A, {
						post: t
					}), n.a.createElement(H, {
						post: t
					})))
				})),
				X = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				J = s.n(X);
			const Q = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => n.a.createElement(K, {
					postId: e,
					key: e
				}));
				return n.a.createElement("div", {
					className: J.a.container
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
				}, n.a.createElement(Q, {
					postIds: t.adPromotedUserPostIds
				}), n.a.createElement(S, {
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
					inSubredditOrProfile: o,
					isCurrentUserProfilePost: v,
					isOverlay: g,
					isTopicPage: y,
					post: P,
					shouldShowSubscribeButton: T,
					subredditOrProfile: k,
					tooltipType: j
				} = e, N = !!y, I = Object(O.a)(), L = Object(r.e)(e => !!k && Object(a.i)(e, k.id));
				return n.a.createElement("div", {
					className: S.a.metaContainer
				}, !o && !P.isSponsored && k && n.a.createElement(d.a, {
					postId: P.id,
					subredditName: k.name
				}, n.a.createElement(b.a, {
					className: S.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: k.url,
						state: I
					}
				}, k.displayText)), k && k.isQuarantined && n.a.createElement(p.a, null), !o && !P.isSponsored && k && T && !v && n.a.createElement(_.a, {
					className: S.a.SubscribeButton,
					getEventFactory: e => Object(E.n)(P.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: k.name,
						type: Object(C.i)(k) ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: P.id,
					size: x.d.XXS,
					small: !0
				}), !o && !P.isSponsored && n.a.createElement(h.b, null), !o && !P.isSponsored && n.a.createElement(l.h, {
					type: P.belongsTo.type,
					id: P.belongsTo.id
				}), n.a.createElement(m.g, {
					className: S.a.postTopMeta,
					flairStyleTemplate: t,
					post: P,
					tooltipType: j,
					isModWithUserNotesPermissions: L
				}), n.a.createElement(u.a, {
					displayText: k ? k.displayText : null,
					inSubredditOrProfile: !!o,
					post: P,
					tooltipType: j
				}), !N && n.a.createElement(i.a, {
					hideCta: s,
					thing: P,
					tooltipType: g ? m.f.Lightbox : void 0
				}), L && n.a.createElement(c.a, {
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
				return U
			})), s.d(t, "a", (function() {
				return X
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
				_ = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/constants/adEvents.ts"),
				E = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				C = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				v = s("./src/reddit/hooks/usePostContext.ts"),
				S = s("./src/reddit/hooks/useTheme.ts"),
				g = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				P = s("./src/reddit/models/Media/index.ts"),
				T = s("./src/reddit/models/Post/index.ts"),
				k = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				j = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = s("./src/lib/getShortenedLink.ts"),
				I = s("./src/reddit/components/FlairWrapper/index.tsx"),
				L = s("./node_modules/fbt/lib/FbtPublic.js"),
				D = s("./src/lib/prettyPrintNumber/index.ts"),
				w = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				A = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				M = s.n(A);
			const R = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var U, F = Object(i.b)(R)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, o = s ? s.totalVotes : "0";
					return Object(C.a)() ? null : a.a.createElement("div", {
						className: Object(u.a)(e.className, M.a.proposalMetaData)
					}, a.a.createElement("span", null, L.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [L.fbt._param("count", Object(D.a)(o)), L.fbt._plural(parseInt(o))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(w.a, {
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
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(U || (U = {}));
			const X = e => {
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
					const l = Object(S.a)();
					let m = "";
					switch (t) {
						case U.ExtraLarge:
							m = Z.a.ExtraLarge;
							break;
						case U.Large:
							m = Z.a.Large;
							break;
						case U.Medium:
							m = Z.a.Medium;
							break;
						case U.Small:
							m = Z.a.Small;
							break;
						case U.ExtraSmall:
							m = Z.a.ExtraSmall;
							break;
						case U.Metadata:
							m = Z.a.Metadata
					}
					return a.a.createElement("div", {
						className: Object(u.a)(Z.a.Title, i, m, {
							[Z.a.isNoWrap]: n,
							[Z.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": s || Object(j.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, o ? a.a.createElement(B.b, {
						type: o
					}, r) : r)
				},
				J = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: o,
						children: n,
						...r
					} = e;
					return a.a.createElement(c.a, K({}, r, {
						className: Object(u.a)(t, Z.a.styledLink, {
							[Z.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				Q = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: o,
						children: n
					} = e;
					return a.a.createElement("div", {
						className: Object(u.a)(Z.a.titleContainer, o, {
							[Z.a.isNoWrap]: s,
							[Z.a.isVisitedEnabled]: !t
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
					isNsfwBlurSubreddit: Y.e,
					shouldOpenPostInNewTab: V.lb
				}),
				ee = e => {
					const {
						post: t
					} = e, {
						isSponsored: s
					} = t, o = Object(i.d)(), n = Object(O.a)(), r = Object(i.e)(W.b), c = Object(i.e)(W.c), d = e => {
						(r || c) && (e.preventDefault(), o(Object(x.Z)(Object(E.b)(t.permalink), t.id))), t.isSponsored && Object(T.A)(t) && o(Object(x.y)(t, h.a.Click))
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
						const o = t.permalink,
							r = e.isCommentPermalink ? Object(E.b)(o) : Object(f.a)(o, void 0, n);
						return a.a.createElement(Q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s && !Object(T.A)(t) ? ((e, t) => {
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
						post: o
					} = e;
					let n = e.format ? e.format(o) : o.title;
					s && "string" == typeof n && (n = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(n));
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
					} = o, r = e.isCommentsPage ? G.SourceElement.PostLink : G.SourceElement.ListingPostLink;
					if (Object(C.a)()) return null;
					if (s && o.isNSFW) return null;
					const i = !t && !e.isCrosspost && e.size !== U.Large && !o.isSponsored && (o.source || o.media && (o.media.type === P.o.GIFVIDEO || o.media.type === P.o.IMAGE || o.media.type === P.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return a.a.createElement(_.a, {
							className: e.outboundLinkClassName,
							href: Object(P.E)(o),
							isSponsored: n,
							postId: o.id,
							source: o.source,
							sourceElement: r
						}, Object(N.a)(o), !o.isSponsored && a.a.createElement(g.a, {
							name: "external_link",
							className: Z.a.outboundLinkIcon
						}))
					} else if (o.source && !e.isCrosspost && e.size !== U.Large && e.size !== U.ExtraLarge) return a.a.createElement(_.a, {
						className: e.outboundLinkClassName,
						href: o.source.url,
						isSponsored: n,
						postId: o.id,
						source: o.source,
						sourceElement: r
					}, Object(N.a)(o), !o.isSponsored && a.a.createElement(g.a, {
						name: "external_link",
						className: Z.a.outboundLinkIcon
					}));
					return null
				};
			class oe extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${Z.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(j.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(j.a)(this.props).titleText,Object(j.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(n.c)(.45,Object(j.a)(this.props).bodyText,Object(j.a)(this.props).body)};\n        }\n      `
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
					} = this.props, p = s === y.b.Left, b = Object(I.b)(c), {
						leftFlair: _,
						rightFlair: f
					} = Object(H.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), x = !r && !n && !t, h = x && _ && _.length > 0, E = x && f && f.length > 0;
					return a.a.createElement("div", {
						className: Object(u.a)(Z.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": z.a.TITLE,
						onClick: m
					}, !d && h && a.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: _,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(k.b)(c) && a.a.createElement(ee, K({}, this.props, {
						leftFlair: d ? _ : void 0
					})), i && a.a.createElement(F, {
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
							__html: `\n              <img alt="" src="${o.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(p.ib)(),
					s = Object(p.x)(t),
					o = Object(v.a)(),
					n = Object(i.e)(n => $(n, {
						...o,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					r = Object(S.a)(),
					c = Object(m.b)();
				return o ? a.a.createElement(oe, K({
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
				_ = c.a.wrapped(e => {
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
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				c = (s("./src/lib/timeAgo/index.ts"), s("./src/reddit/controls/MetaData/index.m.less")),
				d = s.n(c);
			const l = a.a.span("metaText", d.a),
				u = e => r.a.createElement(l, e, " · "),
				m = e => {
					let {
						isScoreHidden: t,
						score: s,
						useUpvotes: n,
						...a
					} = e;
					const c = Object(i.b)(s),
						d = o.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [o.fbt._plural(s, "number", c)], {
							hk: "2L3T21"
						}),
						u = t ? o.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? d : o.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [o.fbt._plural(s, "number", c)], {
							hk: "gf67v"
						});
					return r.a.createElement(l, a, u)
				},
				p = e => r.a.createElement(l, null, o.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [o.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
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
							case o.K.NO_STRIPE_SUBSCRIPTION:
							case o.K.USER_DOESNT_EXIST:
							case o.K.USER_REQUIRED_ERROR:
							case o.K.VALIDATION_ERROR:
								return e;
							case o.K.NO_USER:
							case o.K.NO_TEXT:
							case o.K.NO_URL:
								return o.K.VALIDATION_ERROR;
							case o.K.CREDIT_CARD_FAILURE:
							case o.K.CREDIT_CARD_FAILURE_GENERIC:
								return o.K.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return o.K.SUBMIT_VALIDATION_ERROR
						}
					}
					return o.K.VALIDATION_ERROR
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "a", (function() {
				return f
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
				_ = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(r.a)(Object(n.a)(e), a.a.actionIcon, a.b.actionIcon);
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
				return u
			})), s.d(t, "b", (function() {
				return m
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
				return g
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "e", (function() {
				return P
			})), s.d(t, "x", (function() {
				return T
			})), s.d(t, "u", (function() {
				return k
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "s", (function() {
				return N
			})), s.d(t, "v", (function() {
				return I
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
					actionInfo: n.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				C = {
					[o.d.Hourly]: "hourly_frequency",
					[o.d.Daily]: "daily_frequency",
					[o.d.Weekly]: "weekly_frequency",
					[o.d.Monthly]: "monthly_frequency",
					[o.b]: "custom_frequency"
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
				g = (e, t, s) => a => ({
					source: "post",
					action: "click",
					noun: Object(o.m)(e),
					...r(a),
					actionInfo: n.d(a, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				y = () => e => ({
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
				T = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				k = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: a(t)
				}),
				j = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				N = () => (e, t) => ({
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
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
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
				return g
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "q", (function() {
				return P
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
				g = "custom",
				y = e => {
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
				P = e => "frequency" in e && !!e.frequency
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
					experimentName: n.ng,
					experimentEligibilitySelector: r.a
				}), e => e),
				i = Object(o.a)(a, e => e === n.hg)
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
				return _
			})), s.d(t, "d", (function() {
				return f
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
				_ = Object(n.a)(d.m, r.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				f = Object(n.a)(r.a, e => !(!e || !1 !== e.isRobotIndexable))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.4236bf6ae556b24cb809.js.map