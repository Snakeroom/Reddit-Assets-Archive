// https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.ccc5b3fabe6a7532d98d.js
// Retrieved at 4/27/2021, 5:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-SidebarNativeAd"], {
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
					var s, o = r(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						f = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !f && /windows/i.test(t)),
						h = !o && !l && /macintosh/i.test(t),
						_ = !a && !u && !m && !p && /linux/i.test(t),
						g = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = r(/version\/(\d+(\.\d+)?)/i),
						y = /tablet/i.test(t) && !/tablet pc/i.test(t),
						v = !y && /[^-]mobi/i.test(t),
						w = /xbox/i.test(t);
					/opera/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: E || r(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? s = {
						name: "Opera",
						opera: e,
						version: r(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || E
					} : /SamsungBrowser/i.test(t) ? s = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: E || r(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? s = {
						name: "Opera Coast",
						coast: e,
						version: E || r(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? s = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: E || r(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : f ? (s = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, g ? (s.msedge = e, s.version = g) : (s.msie = e, s.version = r(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? s = {
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
						version: g
					} : /vivaldi/i.test(t) ? s = {
						name: "Vivaldi",
						vivaldi: e,
						version: r(/vivaldi\/(\d+(\.\d+)?)/i) || E
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
						version: E || r(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (s = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: E || r(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (s.touchpad = e)) : /bada/i.test(t) ? s = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: r(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? s = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: r(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || E
					} : /qupzilla/i.test(t) ? s = {
						name: "QupZilla",
						qupzilla: e,
						version: r(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || E
					} : /chromium/i.test(t) ? s = {
						name: "Chromium",
						chromium: e,
						version: r(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || E
					} : /chrome|crios|crmo/i.test(t) ? s = {
						name: "Chrome",
						chrome: e,
						version: r(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? s = {
						name: "Android",
						version: E
					} : /safari|applewebkit/i.test(t) ? (s = {
						name: "Safari",
						safari: e
					}, E && (s.version = E)) : o ? (s = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, E && (s.version = E)) : s = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: r(/googlebot\/(\d+(\.\d+))/i) || E
					} : {
						name: r(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !s.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (s.name = s.name || "Blink", s.blink = e) : (s.name = s.name || "Webkit", s.webkit = e), !s.version && E && (s.version = E)) : !s.opera && /gecko\//i.test(t) && (s.name = s.name || "Gecko", s.gecko = e, s.version = s.version || r(/gecko\/(\d+(\.\d+)?)/i)), s.windowsphone || !a && !s.silk ? !s.windowsphone && o ? (s[o] = e, s.ios = e, s.osname = "iOS") : h ? (s.mac = e, s.osname = "macOS") : w ? (s.xbox = e, s.osname = "Xbox") : b ? (s.windows = e, s.osname = "Windows") : _ && (s.linux = e, s.osname = "Linux") : (s.android = e, s.osname = "Android");
					var S = "";
					s.windows ? S = function(e) {
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
					}(r(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : s.windowsphone ? S = r(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : s.mac ? S = (S = r(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? S = (S = r(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? S = r(/android[ \/-](\d+(\.\d+)*)/i) : s.webos ? S = r(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : s.blackberry ? S = r(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : s.bada ? S = r(/bada\/(\d+(\.\d+)*)/i) : s.tizen && (S = r(/tizen[\/\s](\d+(\.\d+)*)/i)), S && (s.osversion = S);
					var O = !s.windows && S.split(".")[0];
					return y || c || "ipad" == o || a && (3 == O || O >= 4 && !v) || s.silk ? s.tablet = e : (v || "iphone" == o || "ipod" == o || a || i || s.blackberry || s.webos || s.bada) && (s.mobile = e), s.msedge || s.msie && s.version >= 10 || s.yandexbrowser && s.version >= 15 || s.vivaldi && s.version >= 1 || s.chrome && s.version >= 20 || s.samsungBrowser && s.version >= 4 || s.firefox && s.version >= 20 || s.safari && s.version >= 6 || s.opera && s.version >= 10 || s.ios && s.osversion && s.osversion.split(".")[0] >= 6 || s.blackberry && s.version >= 10.1 || s.chromium && s.version >= 20 ? s.a = e : s.msie && s.version < 10 || s.chrome && s.version < 20 || s.firefox && s.version < 20 || s.safari && s.version < 6 || s.opera && s.version < 10 || s.ios && s.osversion && s.osversion.split(".")[0] < 6 || s.chromium && s.version < 20 ? s.c = e : s.x = e, s
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

				function o(e) {
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

				function a(e, n, s) {
					var a = r;
					"string" == typeof n && (s = n, n = void 0), void 0 === n && (n = !1), s && (a = t(s));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([i, e[c]]) < 0
						} return n
				}
				return r.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in r) return !0
					}
					return !1
				}, r.isUnsupportedBrowser = a, r.compareVersions = o, r.check = function(e, t, r) {
					return !a(e, t, r)
				}, r._detect = t, r.detect = t, r
			}, e.exports ? e.exports = n() : r("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, r, n, s) {
				return s(e, (function(e, s, o) {
					r = n ? (n = !1, e) : t(r, e, s, o)
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
				o = r("./node_modules/lodash/_baseIteratee.js"),
				a = r("./node_modules/lodash/_baseReduce.js"),
				i = r("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, r) {
				var c = i(e) ? n : a,
					d = arguments.length < 3;
				return c(e, o(t, 4), r, d, s)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "a", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "d", (function() {
				return m
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/components/TrackingHelper/index.tsx"),
				a = r("./src/reddit/selectors/telemetry.ts");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, r) => (n = (() => {})) => s => {
				const o = m(s.target, s.currentTarget),
					i = p(s.target, s.currentTarget);
				o && r && t && (u(s.target, s.currentTarget, l.anchors) ? r(t(e, o, i)) : r(r => {
					const n = t(e, o, i)(r);
					let s;
					if (n && n.actionInfo) {
						const {
							pageType: e,
							...t
						} = n.actionInfo;
						s = t
					}
					return {
						...n,
						actionInfo: Object(a.previousPageActionInfo)(r, s)
					}
				})), u(s.target, s.currentTarget, l.anchorsAndButtons) && n(s)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: r,
						eventFactory: o,
						clickTrackingId: a,
						...d
					} = t, l = Object(n.useCallback)(c(a, o, r), [a, o, r]);
					return s.a.createElement(e, i({}, d, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(o.c)(t)
			}
			const l = {
					anchorsAndButtons: ["A", "BUTTON"],
					buttons: ["BUTTON"],
					anchors: ["A"]
				},
				u = (e, t, r) => !r.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, r)),
				m = (e, t) => {
					const r = e.dataset.clickId;
					return r || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, r) {
			"use strict";
			var n = r("./src/reddit/models/Media/index.ts"),
				s = r("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = r.n(s);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: r,
					domainOverride: s
				} = e;
				let a = "";
				if (r) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					a = s || Object(n.D)(e)
				} else a = Object(n.D)(e);
				const i = o.a.parse(a),
					c = i.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (i.hostname ? i.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/constants/index.ts");
			const o = [s.fc, s.ib, s.x, s.J, s.db, s.Ib],
				a = {
					[s.Ib]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[s.db]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[s.J]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[s.x]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[s.ib]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[s.fc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[s.Ib]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[s.db]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[s.J]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[s.x]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[s.ib]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.fc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[s.ib]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[s.fc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, r = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[s.fc]: "",
						[s.ib]: "",
						[s.x]: "",
						[s.J]: "",
						[s.db]: "",
						[s.Ib]: ""
					};
				let u = d - c;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of o) {
					const e = Math.floor(u / n);
					e && (l[n] = (t ? i : a)[n](e).toString()), u -= e * n
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || r ? m : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "e", (function() {
				return s
			})), r.d(t, "b", (function() {
				return o
			})), r.d(t, "c", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				s = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			})), r.d(t, "d", (function() {
				return a
			})), r.d(t, "e", (function() {
				return i
			})), r.d(t, "f", (function() {
				return c
			})), r.d(t, "g", (function() {
				return d
			})), r.d(t, "h", (function() {
				return l
			})), r.d(t, "i", (function() {
				return u
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return o
			})), r.d(t, "i", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "f", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "j", (function() {
				return m
			})), r.d(t, "g", (function() {
				return p
			})), r.d(t, "h", (function() {
				return f
			}));
			var n = r("./src/lib/loadableAction/index.ts");
			const s = e => () => r.e("CommunityAwards").then(r.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(n.a)(s("awardSheetInfoRequested")),
				a = Object(n.a)(s("manageableAwardsRequested")),
				i = Object(n.a)(s("createCommunityAward")),
				c = Object(n.a)(s("createGlobalAward")),
				d = Object(n.a)(s("createModAward")),
				l = Object(n.a)(s("createAwardFailed")),
				u = Object(n.a)(s("createAwardSuccessful")),
				m = Object(n.a)(s("removeCommunityAward")),
				p = Object(n.a)(s("disableAwardinCommunity")),
				f = Object(n.a)(s("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "e", (function() {
				return h
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "d", (function() {
				return y
			})), r.d(t, "c", (function() {
				return w
			})), r.d(t, "a", (function() {
				return S
			})), r.d(t, "f", (function() {
				return O
			}));
			var n = r("./src/lib/makeActionCreator/index.ts"),
				s = r("./src/lib/postParentMessage/index.ts"),
				o = r("./src/reddit/helpers/isPost.ts"),
				a = r("./src/reddit/constants/modals.ts"),
				i = r("./src/reddit/selectors/gild.ts"),
				c = r("./src/reddit/helpers/correlationIdTracker.ts"),
				d = r("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = r("./src/reddit/actions/modal.ts"),
				u = r("./src/reddit/selectors/communityAwards.ts"),
				m = r("./src/reddit/selectors/posts.ts"),
				p = r("./src/reddit/selectors/subreddit.ts"),
				f = r("./src/telemetry/index.ts"),
				b = r("./src/reddit/actions/gold/constants.ts");
			const h = Object(n.a)(b.L),
				_ = Object(n.a)(b.g),
				g = () => async (e, t) => {
					const n = t();
					e(_()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: s
					} = await r.e("givePremiumTrackers").then(r.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(f.a)(s()(n))
				}, E = Object(n.a)(b.K), y = ({
					awardId: e,
					correlationId: t,
					thingId: r
				}) => async (n, s) => {
					const i = s(),
						c = e ? Object(u.a)(i, e) : void 0;
					n(E({
						award: c && c.isEnabled ? c : void 0,
						thingId: r,
						correlationId: t
					})), n(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const f = Object(p.J)(i, {
						thingId: r
					});
					let b = null;
					if (f) b = f.id;
					else if (Object(o.a)(r)) {
						const e = Object(m.F)(i, {
							postId: r
						});
						e && (b = e.belongsTo.id)
					}
					b && Object(d.a)(b, r)
				}, v = Object(n.a)(b.f), w = Object(n.a)(b.J), S = () => async (e, t) => {
					const n = t(),
						o = Object(i.d)(n);
					if (Object(i.g)(n)) {
						const e = "close.gild";
						Object(s.a)({
							type: e
						})
					}
					e(v()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(r.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(f.a)(d(o)(n)), Object(c.b)(c.a.GildingFlow)
				}, O = () => async () => {
					Object(s.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, r) {
			"use strict";
			r.d(t, "r", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			})), r.d(t, "i", (function() {
				return o
			})), r.d(t, "j", (function() {
				return a
			})), r.d(t, "h", (function() {
				return i
			})), r.d(t, "c", (function() {
				return c
			})), r.d(t, "d", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "p", (function() {
				return u
			})), r.d(t, "q", (function() {
				return m
			})), r.d(t, "o", (function() {
				return p
			})), r.d(t, "f", (function() {
				return f
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "e", (function() {
				return h
			})), r.d(t, "m", (function() {
				return _
			})), r.d(t, "n", (function() {
				return g
			})), r.d(t, "l", (function() {
				return E
			})), r.d(t, "k", (function() {
				return y
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				s = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				g = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				y = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, r) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./src/higherOrderComponents/asModal/index.tsx"),
				i = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = r("./src/reddit/controls/TextButton/index.tsx"),
				d = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = r("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				u = r.n(l);
			const m = e => e.preventDefault();
			t.a = Object(a.a)(e => o.a.createElement(i.d, null, o.a.createElement(i.h, null, o.a.createElement(d.a, null, o.a.createElement(i.p, null, e.headerText || n.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(i.b, null)))), o.a.createElement(i.k, null, o.a.createElement(i.o, {
				className: u.a.ModalText
			}, e.modalText)), o.a.createElement(i.f, null, !e.hideCancelButton && o.a.createElement(i.a, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || n.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(i.t, {
				className: u.a.buttonWidth,
				onMouseDown: m,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
		},
		"./src/reddit/components/Governance/PostPollMetaData/index.m.less": function(e, t, r) {
			e.exports = {
				proposalMetaData: "_2uZcUQgumllsYgn5TxSizG",
				proposalMetaDataTime: "_1u5ghYiKbGasP3ORCsbasV"
			}
		},
		"./src/reddit/components/NativeBannerAd/index.m.less": function(e, t, r) {
			e.exports = {
				BannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG",
				bannerAdImage: "tk5Gqiw2uQ1xL-VWicKBG"
			}
		},
		"./src/reddit/components/Poll/MetaData/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./src/lib/timeAgo/index.ts"),
				o = r("./src/lib/timeUntil/index.ts"),
				a = r("./node_modules/react/index.js"),
				i = r.n(a);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? n.fbt._("Voting closed {timeAgo}", [n.fbt._param("timeAgo", Object(s.d)(e.poll.endsAt / 1e3))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, r) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./node_modules/reselect/es/index.js"),
				a = r("./src/lib/ads/index.ts"),
				i = r("./src/reddit/components/AdViewability/index.tsx"),
				c = r("./src/reddit/helpers/trackers/gallery.ts"),
				d = r("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = r("./src/reddit/hooks/useTracking.ts");
			var u = s.a.memo(e => {
					const t = Object(n.useRef)(null),
						r = Object(l.a)(),
						o = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && r(c.d(e.postId))
							})
						}, [r, e.postId]),
						a = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, a), s.a.createElement("div", {
						role: "presentation"
					}, s.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = r("./src/reddit/components/TrackingHelper/index.tsx"),
				p = r("./src/reddit/connectors/PostViewable/index.ts"),
				f = r("./src/reddit/models/Media/index.ts"),
				b = r("./src/reddit/selectors/posts.ts"),
				h = r("./src/lib/classNames/index.ts"),
				_ = r("./src/lib/objectSelector/index.ts"),
				g = r("./src/higherOrderComponents/withClickTracking/index.tsx"),
				E = r("./src/reddit/components/PostContainer/index.m.less"),
				y = r.n(E);
			const v = Object(p.a)(() => Object(o.c)({
					basePixelMetadata: Object(_.a)((e, {
						post: t
					}) => Object(b.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(b.i)(e, {
						postId: t.id
					})
				})),
				w = e => {
					const t = Object(g.d)(e.target, e.currentTarget),
						r = Object(g.b)(e.target, e.currentTarget, g.a.buttons);
					return "subreddit" !== t && r
				};
			class S extends s.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: r,
						className: n,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: m,
						onPostContentClick: p,
						sendEvent: b,
						style: _,
						ref: g
					} = this.props, E = s.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: _,
						ref: g,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: r => {
							if (!this.cancelClick && r.button < 2 && (e(() => m && m(r, l, t, o))(r), p && w(r) && p(r, l)), l.id && o) {
								const {
									source: e
								} = Object(a.t)(l, o);
								e && e.outboundUrl && b(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(h.a)(y.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, r), v = !!l.media && l.media.type === f.o.VIDEO;
					return l.isSponsored || v ? s.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, E) : l.media && Object(f.E)(l.media) ? s.a.createElement(u, {
						postId: l.id
					}, E) : E
				}
			}
			t.a = v(Object(g.c)(Object(m.c)(S)))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return i
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/components/CrosspostBox/index.tsx"),
				a = r("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? s.a.createElement(o.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : s.a.createElement(a.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, r) {
			e.exports = {
				outboundLinkIcon: "qgDkGQIoFEpMMeNtfI0BY",
				pollMeta: "FKej75-i0z1XubMqeVh9Q",
				styledLink: "SQnoC3ObvgnGjWt90zD9Z",
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
				postTitleVisibility: "_1hLrLjnE1G_RBCNcN9MVQf",
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
				Component: "_2FCtq-QzlfuN-SwVMUZMM3",
				component: "_2FCtq-QzlfuN-SwVMUZMM3"
			}
		},
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return j
			})), r.d(t, "a", (function() {
				return G
			}));
			var n = r("./node_modules/polished/dist/polished.es.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = r("./node_modules/reselect/es/index.js"),
				d = r("./src/lib/ads/index.ts"),
				l = r("./src/lib/classNames/index.ts"),
				u = r("./src/reddit/components/TrackingHelper/index.tsx"),
				m = r("./src/reddit/contexts/PageLayer/index.tsx"),
				p = r("./src/reddit/controls/OutboundLink/index.tsx"),
				f = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				b = r("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = r("./src/reddit/helpers/flair.ts"),
				_ = r("./src/reddit/helpers/path/index.ts"),
				g = r("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				E = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				y = r("./src/reddit/models/Flair/index.ts"),
				v = r("./src/reddit/models/Media/index.ts"),
				w = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				S = r("./src/lib/getShortenedLink.ts"),
				O = r("./src/reddit/components/FlairWrapper/index.tsx"),
				x = r("./node_modules/fbt/lib/FbtPublic.js"),
				C = r("./src/lib/prettyPrintNumber/index.ts"),
				I = r("./src/reddit/components/Poll/MetaData/index.tsx"),
				k = r("./src/reddit/components/Governance/PostPollMetaData/index.m.less"),
				T = r.n(k);
			const P = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var j, A = Object(a.b)(P)((function(e) {
					const {
						poll: t,
						resultsByVoters: r
					} = e, n = r ? r.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(l.a)(e.className, T.a.proposalMetaData)
					}, o.a.createElement("span", null, x.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [x.fbt._param("count", Object(C.a)(n)), x.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(I.a, {
						className: T.a.proposalMetaDataTime,
						poll: t
					}))
				})),
				M = r("./src/reddit/components/SEOTitle/index.tsx"),
				N = r("./src/reddit/selectors/user.ts"),
				L = r("./src/reddit/components/PostTitle/index.m.less"),
				R = r.n(L),
				F = r("./src/config.ts"),
				D = r("./src/reddit/hooks/usePostContext.ts"),
				U = r("./src/reddit/hooks/useTheme.ts");

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(j || (j = {}));
			const G = ({
					size: e,
					titleColor: t,
					titleType: r,
					nowrap: n,
					children: s,
					className: a,
					redditStyle: i
				}) => {
					const c = Object(U.a)();
					let d = "";
					switch (e) {
						case j.ExtraLarge:
							d = R.a.ExtraLarge;
							break;
						case j.Large:
							d = R.a.Large;
							break;
						case j.Medium:
							d = R.a.Medium;
							break;
						case j.Small:
							d = R.a.Small;
							break;
						case j.ExtraSmall:
							d = R.a.ExtraSmall
					}
					return o.a.createElement("div", {
						className: Object(l.a)(R.a.Title, a, d, {
							[R.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": t || Object(w.a)({
								redditStyle: i,
								theme: c
							}).titleText
						}
					}, r ? o.a.createElement(M.b, {
						type: r
					}, s) : s)
				},
				z = ({
					className: e,
					disableVisited: t,
					titleColor: r,
					children: n,
					...s
				}) => o.a.createElement(i.a, B({}, s, {
					className: Object(l.a)(e, R.a.styledLink, {
						[R.a.isVisitedEnabled]: !t
					})
				}), n),
				V = ({
					disableVisited: e,
					nowrap: t,
					className: r,
					children: n
				}) => o.a.createElement("div", {
					className: Object(l.a)(R.a.titleContainer, r, {
						[R.a.isNoWrap]: t,
						[R.a.isVisitedEnabled]: !e
					})
				}, n),
				W = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(m.p)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: N.bb
				}),
				Y = e => {
					const {
						post: t,
						subreddit: r
					} = e, {
						isSponsored: n
					} = t;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(V, {
						nowrap: e.nowrap
					}, o.a.createElement(q, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(p.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, o.a.createElement(q, e)); {
						const s = t.media && Object(v.G)(t.media) ? Object(g.c)(t.id, r.name) : t.permalink,
							a = e.isCommentPermalink ? Object(_.b)(s) : Object(b.a)(s);
						return o.a.createElement(V, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: r
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return r ? o.a.createElement(p.b, {
								href: r.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: r
							}, o.a.createElement(q, t)) : o.a.createElement(q, t)
						})(t, e) : o.a.createElement(z, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: a
						}, o.a.createElement(q, e)))
					}
				},
				q = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: r,
						post: n
					} = e;
					let s = e.format ? e.format(n) : n.title;
					r && "string" == typeof s && (s = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(s));
					const a = e.isCommentsPage ? M.a.PostComments : M.a.PostItem;
					return o.a.createElement(G, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && o.a.createElement(O.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), s)
				},
				H = e => {
					const {
						hideSourceLink: t,
						post: r
					} = e, {
						isSponsored: n
					} = r, s = !t && !e.isCrosspost && e.size !== j.Large && !r.isSponsored && !(r.media && Object(v.G)(r.media)) && (r.source || r.media && (r.media.type === v.o.GIFVIDEO || r.media.type === v.o.IMAGE || r.media.type === v.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (s) return o.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(v.D)(r),
							isSponsored: n,
							postId: r.id,
							source: r.source
						}, Object(S.a)(r), !r.isSponsored && o.a.createElement(E.a, {
							className: R.a.outboundLinkIcon
						}))
					} else if (r.source && !e.isCrosspost && e.size !== j.Large && e.size !== j.ExtraLarge) return o.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: r.source.url,
						isSponsored: n,
						postId: r.id,
						source: r.source
					}, Object(S.a)(r), !r.isSponsored && o.a.createElement(E.a, {
						className: R.a.outboundLinkIcon
					}));
					return null
				};
			class K extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${R.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(w.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(w.a)(this.props).titleText,Object(w.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: r,
						isCommentsPage: n,
						isOverlay: s,
						poll: a,
						post: i,
						showNSFWSpoilerFlairsOnly: c
					} = this.props, d = r === y.b.Left, u = Object(O.b)(i), m = c ? u.filter(e => e.type === y.f.Nsfw || e.type === y.f.Spoiler) : d ? u.filter(e => Object(h.q)(e.type)) : [], p = c ? [] : d ? u.filter(e => !Object(h.q)(e.type)) : u, f = !s && !n, b = !t && m && m.length > 0 && f, _ = !t && p && p.length > 0 && f;
					return o.a.createElement("div", {
						className: Object(l.a)(R.a.Component, e, i.id)
					}, !c && b && o.a.createElement(O.a, {
						isFlairFilter: !0,
						titleFlair: m,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement(Y, B({}, this.props, {
						leftFlair: c ? m : void 0
					})), a && o.a.createElement(A, {
						className: R.a.pollMeta,
						pollId: a.id
					}), o.a.createElement(H, this.props), _ && o.a.createElement(O.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement("div", {
						className: R.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${F.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(m.Z)(),
					r = Object(m.v)(t),
					n = Object(D.a)(),
					s = Object(a.e)(s => W(s, {
						...n,
						...e,
						isCommentPermalink: r,
						pageLayer: t
					})),
					i = Object(U.a)(),
					c = Object(u.b)();
				return o.a.createElement(K, B({
					pageLayer: t,
					isCommentPermalink: r
				}, n, s, e, {
					theme: i,
					sendEvent: c
				}))
			}))
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.m.less": function(e, t, r) {
			e.exports = {
				removalReasonButton: "_3IEDcFIIs_TeXsZtKZGzUd",
				TextWrapper: "smOzqVIOoNqmSJcyBX2N6",
				textWrapper: "smOzqVIOoNqmSJcyBX2N6",
				Button: "_1rNBkuuOkN2SorEXyRkYjB",
				button: "_1rNBkuuOkN2SorEXyRkYjB",
				ApproveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				approveButton: "_2T9IigN7CfZvuc5KSKs2hx",
				RemoveButton: "_2OvUr_pd3kddsNP_f35S28",
				removeButton: "_2OvUr_pd3kddsNP_f35S28"
			}
		},
		"./src/reddit/components/RestrictedFlatlistButton/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return d
			})), r.d(t, "b", (function() {
				return l
			})), r.d(t, "d", (function() {
				return u
			})), r.d(t, "a", (function() {
				return m
			}));
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/lib/lessComponent.tsx"),
				i = r("./src/reddit/components/RestrictedFlatlistButton/index.m.less"),
				c = r.n(i);
			const d = e => s.a.createElement("button", {
					className: Object(o.a)(c.a.Button, e.className),
					disabled: e.disabled,
					id: e.id,
					onClick: e.disabled ? void 0 : e.onClick
				}, e.children, e.text && s.a.createElement("span", {
					className: c.a.TextWrapper
				}, e.text, " ")),
				l = a.a.wrapped(d, "ApproveButton", c.a),
				u = a.a.wrapped(d, "RemoveButton", c.a),
				m = e => s.a.createElement("button", {
					className: Object(o.a)(c.a.removalReasonButton, e.className),
					onClick: e.onClick
				}, e.text)
		},
		"./src/reddit/components/SidebarNativeAd/index.m.less": function(e, t, r) {
			e.exports = {
				PostTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				postTopMeta: "_3AEXgAHaL2MFPHNuqOhEIE",
				BannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				bannerAdContainer: "_2c-vsdp-tGBM0QBPbMrQFy",
				PromotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				promotedPostContainer: "_3zZKTUxTxtgzF9ilawHBK-",
				OutboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				outboundLinkIcon: "_32E2t93Jat5cKH_mcrBYWl",
				SourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				sourceLinkWrapper: "oh3GXRqFb0Uvz5YUITfaW",
				TopLine: "_1kNrrHG9HK0nS07e9SmLEe",
				topLine: "_1kNrrHG9HK0nS07e9SmLEe",
				PostTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				postTitle: "_1j3PvrSrLpQFwf1wyUgEGj",
				PostMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				postMediaWrapper: "_39qBPkK3qVaXIie5LYoVdo",
				BackgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				backgroundWrapper: "_2c4IeOXoWvRb5OhOoDmy93",
				PostContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf",
				postContainer: "_2UoyU3i2ufwgr3Cy2lz5Jf"
			}
		},
		"./src/reddit/components/SidebarNativeAd/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "SidebarNativeAd", (function() {
				return Z
			}));
			var n = r("./node_modules/fbt/lib/FbtPublic.js"),
				s = r("./node_modules/react/index.js"),
				o = r.n(s),
				a = r("./node_modules/react-redux/es/index.js"),
				i = r("./src/reddit/components/PostMedia/index.tsx"),
				c = r("./src/reddit/components/PostTitle/index.tsx"),
				d = r("./src/reddit/components/PostTopMeta/index.tsx"),
				l = r("./src/lib/CSSVariableProvider/withTheme.tsx"),
				u = r("./src/lib/getShortenedLink.ts"),
				m = r("./src/lib/lessComponent.tsx"),
				p = r("./src/lib/opener/index.ts"),
				f = r("./src/reddit/actions/ads/index.ts"),
				b = r("./src/reddit/actions/post.ts"),
				h = r("./src/reddit/components/PostContainer/index.tsx"),
				_ = r("./src/reddit/constants/adEvents.ts"),
				g = r("./src/reddit/contexts/InsideOverlay.tsx"),
				E = r("./src/reddit/controls/OutboundLink/styled.tsx"),
				y = r("./src/reddit/helpers/adCount/index.ts"),
				v = r("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				w = r("./src/reddit/helpers/styles/smartTextColor.ts"),
				S = r("./src/reddit/helpers/truncateStringWithEllipsis.ts"),
				O = r("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				x = r("./src/reddit/models/NewStructuredStyles/index.ts"),
				C = r("./src/reddit/models/Theme/index.ts"),
				I = r("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				k = r("./src/lib/constants/index.ts"),
				T = r("./src/reddit/models/Media/index.ts"),
				P = r("./src/reddit/components/NativeBannerAd/index.m.less"),
				j = r.n(P);
			const A = m.a.wrapped(e => o.a.createElement("img", {
				className: e.className,
				src: e.src
			}), "BannerAdImage", j.a);
			class M extends o.a.Component {
				render() {
					const {
						post: e
					} = this.props;
					if (!e.media) return null;
					const t = !e.media || Object(T.K)(e.media) || Object(T.G)(e.media) ? "" : e.media.content,
						{
							type: r
						} = e.media;
					if (!t || !r) return null;
					switch (r) {
						case k.jb.IMAGE:
							return o.a.createElement(A, {
								src: t
							});
						default:
							return null
					}
				}
			}
			var N = r("./src/reddit/components/SidebarNativeAd/index.m.less"),
				L = r.n(N);
			const R = m.a.wrapped(d.d, "PostTopMeta", L.a),
				F = m.a.div("BannerAdContainer", L.a),
				D = ({
					children: e
				}) => o.a.createElement("div", null, e),
				U = m.a.div("PromotedPostContainer", L.a),
				B = m.a.wrapped(O.a, "OutboundLinkIcon", L.a),
				G = m.a.div("SourceLinkWrapper", L.a),
				z = m.a.div("TopLine", L.a),
				V = m.a.wrapped(c.c, "PostTitle", L.a),
				W = m.a.div("PostMediaWrapper", L.a),
				Y = m.a.div("BackgroundWrapper", L.a),
				q = m.a.wrapped(h.a, "PostContainer", L.a),
				H = 640,
				K = e => Object(S.a)(e.title, 100),
				X = e => {
					if (e.post.isMediaOnly) return {};
					const t = Object(w.a)(Object(v.a)(e), x.a.actionIcon, x.b.actionIcon);
					return {
						color: t,
						fill: t
					}
				},
				Q = e => ({
					background: Object(C.g)(Object(I.a)(e).body, null, null) || ""
				});
			class Z extends o.a.Component {
				constructor() {
					super(...arguments), this.refreshedAt = 1 / 0, this.onClick = (e, t) => {
						this.props.fireAdPixelsOfType(t, _.a.Click), t.source ? t.source.outboundUrl ? Object(p.d)(t.source.outboundUrl, p.c.BLANK) : Object(p.d)(t.source.url, p.c.BLANK) : Object(p.d)(t.permalink, p.c.BLANK)
					}
				}
				refresh(e) {
					this.refreshedAt = Date.now(), this.props.refreshSidebarPromotedPost()
				}
				componentDidMount() {
					this.refreshedAt = Date.now()
				}
				UNSAFE_componentWillReceiveProps(e) {
					this.props.refreshKey !== e.refreshKey && Date.now() - this.refreshedAt > 6e3 && this.refresh(e)
				}
				render() {
					const {
						post: e,
						className: t,
						eventFactory: r,
						isOverlay: s
					} = this.props;
					let a, l, m = {};
					return e.isBlank ? (a = D, l = null) : e.isMediaOnly ? (a = F, m = {
						"data-before-content": n.fbt._("advertisement", null, {
							hk: "4b2OD7"
						})
					}, l = o.a.createElement(M, {
						post: e
					})) : (a = U, l = o.a.createElement(Y, {
						style: Q(this.props)
					}, o.a.createElement(z, null, o.a.createElement(R, {
						tooltipType: s ? d.c.Lightbox : void 0,
						post: e,
						showTimestamp: !1
					})), o.a.createElement(V, {
						post: e,
						size: c.b.Large,
						format: K
					}), e.source && o.a.createElement(G, null, o.a.createElement(E.a, {
						href: e.source.url,
						isSponsored: !0,
						postId: e.id,
						source: e.source
					}, Object(u.a)(e), o.a.createElement(B, null))), o.a.createElement(W, null, e.media && o.a.createElement(i.a, {
						isListing: !0,
						isNotCardView: !0,
						showCentered: !0,
						post: e,
						availableWidth: H,
						shouldLoad: !0
					})))), o.a.createElement(a, m, o.a.createElement(q, {
						className: t,
						isOverlay: s,
						post: e,
						onClick: this.onClick,
						eventFactory: r,
						style: X(this.props)
					}, l))
				}
			}
			const J = Object(a.b)(null, (e, t) => ({
				fireAdPixelsOfType: (t, r) => {
					e(Object(b.x)(t, r))
				},
				refreshSidebarPromotedPost: () => {
					const {
						placement: r,
						placementIndex: n,
						isOverlay: s
					} = t;
					e(Object(f.c)(Object(y.a)(r, !!s, n)))
				}
			}));
			t.default = J(Object(g.b)(Object(l.a)(Z)))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, r) {
			"use strict";

			function n(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let r = 0;
				return e.placement && t.placement && (r = e.placement.localeCompare(t.placement)), 0 === r && e.position && t.position && (r = e.position - t.position), 0 === r && (r = e.title.localeCompare(t.title)), r
			}

			function s(e) {
				return [...e].sort(n)
			}
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}))
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return a
			}));
			var n = r("./src/lib/constants/index.ts");
			const s = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.E.NO_STRIPE_SUBSCRIPTION:
							case n.E.USER_DOESNT_EXIST:
							case n.E.USER_REQUIRED_ERROR:
							case n.E.VALIDATION_ERROR:
								return e;
							case n.E.NO_USER:
							case n.E.NO_TEXT:
							case n.E.NO_URL:
								return n.E.VALIDATION_ERROR;
							case n.E.CREDIT_CARD_FAILURE:
							case n.E.CREDIT_CARD_FAILURE_GENERIC:
								return n.E.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.E.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.E.VALIDATION_ERROR
				},
				o = e => {
					const t = e.body;
					return {
						type: s(t.json.errors),
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
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return c
			})), r.d(t, "e", (function() {
				return d
			})), r.d(t, "g", (function() {
				return l
			})), r.d(t, "c", (function() {
				return u
			})), r.d(t, "f", (function() {
				return m
			})), r.d(t, "b", (function() {
				return p
			})), r.d(t, "d", (function() {
				return f
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "i", (function() {
				return _
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/reddit/helpers/correlationIdTracker.ts"),
				a = r("./src/reddit/helpers/trackers/gild.ts");
			const i = e => ({
					...s.defaults(e),
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === n.f.Moderator,
					isTemporatyAward: !!e.endsAt,
					numberCoins: e.coinPrice,
					numberMonths: Math.floor((e.daysOfPremium || 0) / 30),
					numberCoinsToRecipient: e.coinReward || 0,
					numberCoinsToCommunity: e.subredditCoinReward || 0,
					type: Object(a.getAwardTypeFromAward)(e)
				}),
				d = () => e => ({
					...i(e),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create"
				}),
				l = e => t => ({
					...i(t),
					source: "awards",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardDeletionFlow),
					noun: "delete",
					goldPurchase: e ? c(e) : null,
					media: e ? {
						url: e.icon.url
					} : null
				}),
				u = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r
				}),
				m = (e, t, r, n) => s => ({
					...i(s),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "image",
					actionInfo: n ? {
						reason: n
					} : {
						success: !0
					},
					media: t ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						uploadDuration: r,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: "click",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "create",
					media: t && e ? {
						fileName: t.file.name,
						height: t.height,
						id: t.id,
						mimetype: t.file.type,
						size: t.file.size,
						type: "image",
						url: e,
						width: t.width
					} : null,
					goldPurchase: r ? c(r) : null
				}),
				f = (e, t, r) => n => ({
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: r ? c(r) : null
				}),
				b = (e, t, r) => n => ({
					...i(n),
					source: "awards",
					action: "click",
					noun: r,
					goldPurchase: c(e),
					profile: s.profileById(n, t),
					subreddit: s.subredditById(n, t)
				}),
				h = (e, t) => b(e, t, "disable_in_community"),
				_ = (e, t) => b(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, r) {
			"use strict";
			r.r(t), r.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), r.d(t, "clickGildEvent", (function() {
				return m
			})), r.d(t, "clickRpanGiveAward", (function() {
				return p
			})), r.d(t, "clickAddAward", (function() {
				return f
			})), r.d(t, "clickHideAward", (function() {
				return b
			})), r.d(t, "clickConfirmHideAward", (function() {
				return h
			})), r.d(t, "clickCancelHideAward", (function() {
				return _
			})), r.d(t, "clickAwardReportFlow", (function() {
				return E
			})), r.d(t, "clickCancelAwardReportFlow", (function() {
				return y
			})), r.d(t, "clickFlagAwardUsage", (function() {
				return v
			})), r.d(t, "clickCancelFlagAwardUsage", (function() {
				return w
			})), r.d(t, "clickConfirmFlagAwardUsage", (function() {
				return S
			})), r.d(t, "clickReportAward", (function() {
				return O
			})), r.d(t, "clickCancelReportAward", (function() {
				return x
			})), r.d(t, "clickConfirmReportAward", (function() {
				return C
			})), r.d(t, "viewGildModalEvent", (function() {
				return I
			})), r.d(t, "clickSelectAwardEvent", (function() {
				return k
			})), r.d(t, "triggerAnonymousEvent", (function() {
				return T
			})), r.d(t, "clickMessageInputEvent", (function() {
				return P
			})), r.d(t, "typeMessageInputEvent", (function() {
				return j
			})), r.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), r.d(t, "clickQuestionMarkEvent", (function() {
				return M
			})), r.d(t, "clickConfirmAwardEvent", (function() {
				return N
			})), r.d(t, "clickGetPremiumEvent", (function() {
				return L
			})), r.d(t, "clickAddCoinsButtonEvent", (function() {
				return R
			})), r.d(t, "clickNextButtonEvent", (function() {
				return F
			})), r.d(t, "clickCloseGildModalEvent", (function() {
				return D
			})), r.d(t, "viewKarmaSuccessEvent", (function() {
				return U
			})), r.d(t, "clickFilterEvent", (function() {
				return B
			})), r.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), r.d(t, "clickPreviousFiltersEvent", (function() {
				return z
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/telemetry.ts"),
				o = r("./src/telemetry/models/GoldPurchase.ts"),
				a = r("./src/reddit/helpers/correlationIdTracker.ts"),
				i = r("./src/reddit/helpers/isComment.ts"),
				c = r("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === n.f.Global && e.awardSubType === n.d.Appreciation ? o.GoldPurchaseType.GidAppreciation : e.awardType === n.f.Global && e.awardSubType === n.d.Premium ? o.GoldPurchaseType.GidPremium : e.awardSubType === n.d.Group ? o.GoldPurchaseType.GidGroup : e.awardType === n.f.Community ? o.GoldPurchaseType.GidCommunity : e.awardType === n.f.Moderator ? o.GoldPurchaseType.GidMod : e.awardType === n.f.Global && e.awardSubType === n.d.Global ? o.GoldPurchaseType.GidGlobal : o.GoldPurchaseType.GidUnknown,
				l = (e, t) => ({
					awardId: e.id,
					awardName: e.name,
					isTemporaryAward: !!e.endsAt,
					numberCoinsToRecipient: e.coinReward,
					type: d(e),
					...t
				}),
				u = (e, t) => ({
					...s.defaults(e),
					comment: t ? s.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(a.d)(a.a.GildingFlow, !1),
					post: t ? s.post(e, t) : void 0,
					screen: s.screen(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				m = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "give_gold"
				}),
				p = e => t => ({
					...u(t, e),
					source: "stream_player",
					action: "click",
					noun: "give_gold"
				}),
				f = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				b = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				_ = (e, t) => r => ({
					...u(r, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				g = e => (t, r) => n => ({
					...u(n, r),
					source: Object(i.a)(r) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				E = g("award_hovercard_report"),
				y = g("cancel_award_hovercard_report"),
				v = g("flag_award"),
				w = g("cancel_flag_award"),
				S = g("confirm_flag_award"),
				O = g("report_community_award"),
				x = g("cancel_report_community_award"),
				C = g("confirm_report_community_award"),
				I = (e, t, r) => n => ({
					...u(n, r),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				k = (e, t, r) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, r)
				}),
				T = (e, t) => r => ({
					...u(r, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				P = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				j = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "learn_more"
				}),
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				N = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				L = (e, t) => r => ({
					...u(r, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				R = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "add_coins"
				}),
				F = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "next"
				}),
				D = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				U = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: r,
					numberCoins: n,
					thingId: s
				}) => o => ({
					...u(o, s),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(i.a)(s) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: r,
						numberCoins: n,
						...l(e)
					}
				}),
				B = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				G = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				z = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, r) {
			"use strict";
			r.d(t, "h", (function() {
				return b
			})), r.d(t, "b", (function() {
				return h
			})), r.d(t, "f", (function() {
				return _
			})), r.d(t, "d", (function() {
				return g
			})), r.d(t, "e", (function() {
				return E
			})), r.d(t, "c", (function() {
				return y
			})), r.d(t, "a", (function() {
				return v
			})), r.d(t, "g", (function() {
				return w
			})), r.d(t, "i", (function() {
				return S
			})), r.d(t, "j", (function() {
				return O
			}));
			var n = r("./src/lib/constants/index.ts"),
				s = r("./src/reddit/models/Gold/ProductOffer.ts"),
				o = r("./src/reddit/selectors/gold/giveAwards.ts"),
				a = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = r("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = r("./src/reddit/selectors/telemetry.ts"),
				d = r("./src/telemetry/models/GoldPurchase.ts"),
				l = r("./src/telemetry/models/Payment.ts"),
				u = r("./src/reddit/helpers/trackers/gild.ts"),
				m = r("./src/reddit/helpers/correlationIdTracker.ts"),
				p = r("./src/reddit/helpers/isComment.ts"),
				f = r("./src/reddit/helpers/trackers/communityAwards.ts");
			const b = (e, t) => {
					const {
						thingId: r,
						packageId: l
					} = t, b = !!r, h = o.b(e), _ = h ? Object(u.getAwardTypeFromAward)(h) : null, g = b ? _ : i.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, E = r ? Object(p.a)(r) ? "comment" : "post" : void 0, y = l || i.t(e), v = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === y)[0], w = t.offerContext || (h && 0 === h.coinPrice ? s.a.StorefrontFreeAward : Object(s.d)(v, b)), S = v ? Math.round(1e4 * (v.baselinePennies - v.pennies) / v.baselinePennies) / 100 : 0, O = v ? Math.round(1e4 * (v.coins - v.baselineCoins) / v.coins) / 100 : 0, x = v ? v.baselinePennies !== v.pennies ? `${S}_percent_price` : v.baselineCoins !== v.coins ? `${O}_percent_bonus` : void 0 : void 0, C = g === d.GoldPurchaseType.Premium ? n.qb : v ? v.pennies : void 0;
					return {
						...c.defaults(e),
						comment: r ? c.comment(e, r) : null,
						correlationId: i.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: r ? c.post(e, r) : null,
						screen: c.screen(e),
						subreddit: r ? c.subreddit(e) : null,
						goldPurchase: {
							...h ? Object(f.a)(h) : null,
							type: g,
							gildedContent: b,
							contentType: E,
							numberCoins: v ? v.coins : void 0,
							offerContext: w,
							offerType: x
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: C
						},
						purchase: {
							priceMicros: C
						}
					}
				},
				h = (e, t, r) => n => ({
					...b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				_ = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				g = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "continue_paypal"
				}),
				E = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				y = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				v = (e, t) => r => ({
					...b(r, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				w = e => t => ({
					...b(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				S = (e, t, r) => n => {
					const s = b(n, {
						packageId: t,
						thingId: e,
						offerContext: r
					});
					return {
						...s,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...s.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...s.goldPurchase,
							source: e ? d.GiveGold : i.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				O = e => t => {
					const r = b(t, {
						thingId: e
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...r.payment,
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/truncateStringWithEllipsis.ts": function(e, t, r) {
			"use strict";
			t.a = (e, t) => e.length > t ? e.slice(0, t - 1).replace(/\s*$/, "") + "…" : e
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			var n = r("./node_modules/react/index.js");

			function s(e) {
				const t = Object(n.useRef)();
				return Object(n.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/icons/fonts/Approve/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = r.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("approve", e.isFilled), c.a.approveIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, r) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/icons/fonts/helpers.tsx"),
				a = r("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = r.n(a);
			const c = r("./src/lib/lessComponent.tsx").a.wrapped(e => s.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Remove/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = r.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("remove", e.isFilled), c.a.removeIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = r.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Spam/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/icons/fonts/helpers.tsx"),
				i = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = r.n(i);
			t.a = e => s.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("spam", e.isFilled), c.a.spamIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement(a.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/lib/classNames/index.ts"),
				a = r("./src/reddit/hooks/useCoreStyleExperiments.ts"),
				i = r("./src/reddit/icons/fonts/helpers.tsx"),
				c = r("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = r.n(c);
			t.a = e => {
				const t = Object(a.a)();
				return s.a.createElement("i", {
					className: Object(o.a)(Object(i.b)(t ? "pin" : "sticky", e.isFilled), d.a.stickyIcon, e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, s.a.createElement(i.a, null, e.desc))
			}
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, r) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/Crosspost/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => s.a.createElement("svg", o({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), s.a.createElement("path", {
				d: "M9.06,8.64c1.12-1.26,2.2-2.45,4.44-2.6V7.5a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74L15.18,1.7a1,1,0,0,0-1.68.74V4c-3.14.17-4.69,1.88-5.93,3.28C6.58,8.42,6,9,5,9H2a1,1,0,0,0,0,2H5C6.93,11,8,9.82,9.06,8.64Z"
			}), s.a.createElement("path", {
				d: "M15.18,11.76a1,1,0,0,0-1.68.74V14c-2.23-.16-3.29-1.32-4.39-2.56-.21-.24-.43-.48-.66-.72a5.63,5.63,0,0,1-1.77,1.06,13.34,13.34,0,0,1,.94,1A7.85,7.85,0,0,0,13.5,16v1.59a1,1,0,0,0,.6.92,1,1,0,0,0,.41.09,1,1,0,0,0,.67-.26l3.16-2.9a.5.5,0,0,0,0-.74Z"
			}))
		},
		"./src/reddit/icons/svgs/Moderate/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n),
				o = r("./src/reddit/constants/colors.ts");
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
				fill: e.isUnread ? o.b.orangered : "none"
			}))
		},
		"./src/reddit/icons/svgs/OutboundLink/index.tsx": function(e, t, r) {
			"use strict";
			var n = r("./node_modules/react/index.js"),
				s = r.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				d: "M16 10.77a1 1 0 0 0-1 1V14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2.23a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-2.23a1 1 0 0 0-1-1z"
			}), s.a.createElement("path", {
				d: "M17.91 2.62A1 1 0 0 0 17 2h-4a1 1 0 0 0 0 2h1.59L9.38 9.19a1 1 0 1 0 1.41 1.41L16 5.41V7a1 1 0 0 0 2 0V3a1 1 0 0 0-.09-.38z"
			}))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "c", (function() {
				return s
			})), r.d(t, "b", (function() {
				return a
			})), r.d(t, "d", (function() {
				return i
			}));
			var n, s, o = r("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(s || (s = {}));
			const a = {
					[n.Loyalty]: o.a.First,
					[n.Achievement]: o.a.Second,
					[n.Cosmetic]: void 0
				},
				i = e => e === o.a.First ? n.Loyalty : e === o.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, r) {
			"use strict";
			var n, s, o;
			r.d(t, "c", (function() {
					return n
				})), r.d(t, "b", (function() {
					return s
				})), r.d(t, "a", (function() {
					return o
				})), r.d(t, "d", (function() {
					return a
				})),
				function(e) {
					e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
				}(n || (n = {})),
				function(e) {
					e.Month = "MONTH", e.Year = "YEAR"
				}(s || (s = {})),
				function(e) {
					e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
				}(o || (o = {}));
			const a = (e, t) => {
				const r = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === r,
					s = "new_purchaser" === r,
					a = "repeat_purchaser" === r;
				return t ? o.GildFlow : n ? o.LowCoinBalance : s ? o.NewUserTargetedOffer : a ? o.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			var n, s = r("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const o = {
				status: n.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case s.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const r = t.payload.cardId,
								{
									[r]: n,
									...s
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: s
									}
								}
							}
						}
						return e;
					case s.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const r = t.payload.sourceId,
								{
									[r]: n,
									...s
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: s
									}
								}
							}
						}
						return e;
					case s.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case s.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case s.d:
						return {
							status: n.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			}));
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n, s = r("./src/lib/constants/specialMembership.ts"),
				o = r("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = r("./src/reddit/helpers/economics/sortBadges.ts"),
				i = r("./src/reddit/models/Badge/index.ts"),
				c = r("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, r, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(s => {
						let o;
						(o = e.placement ? e.placement === i.a.First ? n[c.a.Loyalty][s] : n[c.a.Achievement][s] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][s] : n[c.a.Cosmetic][c.c.Gallery][s]) && (l(e) ? r.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const r = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return r === n ? Object(a.b)(e, t) : r - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === s.a).map(m).sort((e, r) => {
					const n = t[e.id],
						s = t[r.id];
					return Object(a.b)(n, s)
				})
			}

			function f(e) {
				const t = {
					[c.a.Loyalty]: {},
					[c.a.Achievement]: {},
					[c.a.Cosmetic]: {
						[c.c.Gallery]: {},
						[c.c.MyBadges]: {}
					}
				};
				Object.keys(e.collections).forEach(r => {
					const n = e.collections[r],
						s = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[c.a.Loyalty][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][r] = {
						...s,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][r] = {
						...s,
						locked: [],
						unlocked: []
					}
				});
				const r = new Set;
				e.userOwnedBadges.forEach(t => {
					const n = e.badges[t];
					n && r.add(n.type)
				});
				const n = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), r, n, t), u(Object.keys(e.products).map(t => e.products[t]), r, n, t), {
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
			t.b = (e = d, t) => {
				switch (t.type) {
					case o.a: {
						const {
							subredditId: r
						} = t.payload, s = e[r];
						return s && s.status === n.Fetched ? {
							...e,
							[r]: {
								...s,
								data: {
									...s.data
								},
								raw: {
									...s.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: r
						} = t.payload, s = e[r];
						return s && s.status === n.Fetched ? {
							...e,
							[r]: {
								...s,
								data: {
									...s.data,
									subscription: {
										...s.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...s.raw,
									subscription: {
										...s.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
						const r = t.payload;
						return {
							...e,
							[r.subredditId]: {
								raw: r,
								data: f(r),
								status: n.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = r("./node_modules/lodash/omit.js"),
				s = r.n(n),
				o = r("./src/reddit/actions/grantUserFlair/constants.ts"),
				a = r("./src/reddit/actions/modQueue/constants.ts"),
				i = r("./src/reddit/actions/pages/constants.ts"),
				c = r("./src/reddit/actions/pages/postCreation.ts"),
				d = r("./src/reddit/actions/pages/postDraft.ts"),
				l = r("./src/reddit/actions/pages/subreddit.ts"),
				u = r("./src/reddit/actions/userFlair/constants.ts");
			const m = {};
			t.a = (e = m, t) => {
				switch (t.type) {
					case l.SUBREDDIT_LOADED:
					case c.PAGE_LOADED:
					case d.PAGE_LOADED:
					case i.b:
					case i.f:
					case u.k:
						return {
							...e, ...t.payload.userFlair
						};
					case a.i:
					case a.f:
					case a.m:
					case a.p:
					case a.v: {
						const {
							response: r
						} = t.payload, {
							userFlair: n
						} = r, s = {
							...e
						};
						return Object.keys(n).forEach(e => {
							s[e] || (s[e] = n[e])
						}), s
					}
					case u.r: {
						const {
							subredditId: r,
							applied: n,
							displaySettings: s
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: n,
								displaySettings: s
							}
						}
					}
					case o.h: {
						const {
							subredditId: r,
							applied: n
						} = t.payload;
						return {
							...e,
							[r]: {
								...e[r],
								applied: n
							}
						}
					}
					case u.j: {
						const {
							subredditId: r,
							isEnabled: n
						} = t.payload, s = {
							...e[r].displaySettings,
							isEnabled: n
						};
						return {
							...e,
							[r]: {
								...e[r],
								displaySettings: s
							}
						}
					}
					case u.d: {
						const {
							subredditId: r,
							canAssignOwn: n
						} = t.payload, s = {
							...e[r].permissions,
							canAssignOwn: n
						};
						return {
							...e,
							[r]: {
								...e[r],
								permissions: s
							}
						}
					}
					case u.q: {
						const r = t.payload,
							n = e[r.subredditId],
							s = e[r.subredditId].templates,
							o = e[r.subredditId].templateIds,
							a = {
								...s,
								[r.template.id]: r.template
							},
							i = [...o];
						return i.includes(r.template.id) || i.push(r.template.id), {
							...e,
							[r.subredditId]: {
								...n,
								templates: a,
								templateIds: i
							}
						}
					}
					case u.g: {
						const r = t.payload,
							n = e[r.subredditId],
							o = e[r.subredditId].templates,
							a = e[r.subredditId].templateIds,
							i = s()(o, r.templateId),
							c = a.filter(e => e !== r.templateId);
						return {
							...e,
							[r.subredditId]: {
								...n,
								templates: {
									...i
								},
								templateIds: c
							}
						}
					}
					case u.m:
					case u.l: {
						const r = t.payload,
							n = e[r.subredditId];
						return {
							...e,
							[r.subredditId]: {
								...n,
								templateIds: r.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "c", (function() {
				return o
			}));
			const n = (e, {
					post: t
				}) => {
					const r = t.belongsTo.id;
					if (!r) return null;
					const n = e.authorFlair.models[r];
					if (!n) return null;
					const s = t.author;
					return s && n[s] || null
				},
				s = (e, {
					subredditId: t
				}) => {
					const r = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!r) return null;
					if (!t) return null;
					const n = e.authorFlair.models[t];
					return n ? n[r] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/gild.ts": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return n
			})), r.d(t, "b", (function() {
				return s
			})), r.d(t, "f", (function() {
				return o
			})), r.d(t, "g", (function() {
				return a
			})), r.d(t, "c", (function() {
				return i
			})), r.d(t, "e", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				s = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				i = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "e", (function() {
				return f
			})), r.d(t, "d", (function() {
				return b
			}));
			var n = r("./src/reddit/models/Gold/Award.ts"),
				s = r("./src/reddit/selectors/commentSelector.ts"),
				o = r("./src/reddit/selectors/gold/giveAwards.ts"),
				a = r("./src/reddit/selectors/posts.ts"),
				i = r("./src/reddit/selectors/user.ts"),
				c = r("./src/reddit/selectors/userPrefs.ts");
			const d = [32, 48, 64, 128],
				l = (e, t, r) => {
					const n = t ? e[`staticIcon${r}`] : e[`icon${r}`];
					return (null == n ? void 0 : n.url) ? n.url : t ? e.staticIcon.url : e.icon.url
				},
				u = ({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: s
				}) => e.awardSubType === n.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: n
				}) => {
					let s = e;
					if ((null == n ? void 0 : n.awardCountsById) && n.awardCountsById[e.id] && e.tiers) {
						const t = n.awardCountsById[e.id];
						s = e.tiers.reduce((e, r) => t >= r.awardingsRequired ? r : e)
					}
					return l(s, r, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: r,
					postOrComment: s
				}) : l(e, r, t),
				m = (e, {
					awards: t,
					minSize: r,
					postOrCommentId: n
				}) => {
					const o = Object(c.c)(e),
						i = d.find(e => e >= r),
						l = n ? Object(a.F)(e, {
							postId: n
						}) || Object(s.a)(e, {
							commentId: n
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = u({
						award: t,
						size: i,
						prefersReducedMotion: o,
						postOrComment: l
					})), e), {})
				},
				p = (e, {
					award: t,
					minSize: r,
					postOrCommentId: n
				}) => t ? m(e, {
					awards: [t],
					minSize: r,
					postOrCommentId: n
				})[t.id] : void 0,
				f = (e, {
					minSize: t,
					userName: r
				}) => {
					const n = Object(i.mb)(e, {
						userName: r
					});
					if (n && n.awardedLastMonth && n.awardedLastMonth.topAward) return p(e, {
						award: n.awardedLastMonth.topAward,
						minSize: t
					})
				},
				b = e => {
					const t = Object(o.b)(e),
						r = Object(o.a)(e);
					return p(e, {
						award: t,
						postOrCommentId: r || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, r) {
			"use strict";
			r.d(t, "b", (function() {
				return n
			})), r.d(t, "a", (function() {
				return s
			}));
			const n = e => e.gild.selectedAward,
				s = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, r) {
			"use strict";
			r.d(t, "q", (function() {
				return a
			})), r.d(t, "s", (function() {
				return i
			})), r.d(t, "r", (function() {
				return c
			})), r.d(t, "u", (function() {
				return d
			})), r.d(t, "t", (function() {
				return l
			})), r.d(t, "b", (function() {
				return u
			})), r.d(t, "p", (function() {
				return m
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "n", (function() {
				return f
			})), r.d(t, "o", (function() {
				return b
			})), r.d(t, "z", (function() {
				return h
			})), r.d(t, "c", (function() {
				return _
			})), r.d(t, "h", (function() {
				return g
			})), r.d(t, "w", (function() {
				return E
			})), r.d(t, "x", (function() {
				return y
			})), r.d(t, "v", (function() {
				return v
			})), r.d(t, "y", (function() {
				return w
			})), r.d(t, "f", (function() {
				return S
			})), r.d(t, "g", (function() {
				return O
			})), r.d(t, "i", (function() {
				return x
			})), r.d(t, "k", (function() {
				return C
			})), r.d(t, "l", (function() {
				return I
			})), r.d(t, "j", (function() {
				return k
			})), r.d(t, "m", (function() {
				return T
			})), r.d(t, "e", (function() {
				return P
			})), r.d(t, "d", (function() {
				return j
			}));
			var n = r("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				s = r("./src/lib/initializeClient/installReducer.ts"),
				o = r("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(s.a)({
				features: {
					goldPurchase: o.a
				}
			});
			const a = e => e.features.goldPurchase.purchaseModal.activePage,
				i = e => e.features.goldPurchase.purchaseModal.gildThingId || void 0,
				c = e => e.features.goldPurchase.purchaseModal.correlationId || void 0,
				d = e => e.features.goldPurchase.purchaseModal.showModal,
				l = e => e.features.goldPurchase.purchaseModal.packageId,
				u = e => e.features.goldPurchase.packageOfferModal.packageId,
				m = e => e.features.goldPurchase.premiumPurchaseModal.renewInterval,
				p = e => {
					const t = Object(n.i)(e),
						r = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && r && t.find(e => e.mobileId === r) || null
				},
				f = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				b = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.updateCardModal.pending,
				_ = e => e.features.goldPurchase.payment.paymentMethod,
				g = e => e.features.goldPurchase.payment.cardName,
				E = e => e.features.goldPurchase.payment.savedCardsPending,
				y = e => e.features.goldPurchase.payment.savedCards,
				v = e => e.features.goldPurchase.payment.rememberCard,
				w = e => e.features.goldPurchase.payment.useSavedCard,
				S = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				O = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				x = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				C = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				I = e => e.features.goldPurchase.payment.cardValidation.postalCode,
				k = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				T = e => e.features.goldPurchase.payment.stripeToken.pending,
				P = e => e.features.goldPurchase.payment.paypal.passthrough,
				j = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, r) {
			"use strict";
			r.d(t, "c", (function() {
				return c
			})), r.d(t, "a", (function() {
				return d
			})), r.d(t, "d", (function() {
				return l
			})), r.d(t, "e", (function() {
				return u
			})), r.d(t, "b", (function() {
				return m
			}));
			var n = r("./src/lib/objectSelector/index.ts"),
				s = r("./src/reddit/models/Flair/index.ts"),
				o = r("./src/reddit/selectors/moderatorPermissions.ts"),
				a = r("./src/lib/initializeClient/installReducer.ts"),
				i = r("./src/reddit/reducers/features/userFlair/index.ts");
			Object(a.a)({
				features: {
					userFlair: i.a
				}
			});
			const c = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				d = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				l = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : s.b.Right,
				u = Object(n.a)((e, {
					subredditId: t
				}) => {
					const r = c(e, {
						subredditId: t
					});
					if (r) return {
						type: s.d.UserFlair,
						displaySettings: r.displaySettings,
						permissions: r.permissions
					}
				}),
				m = (e, {
					subredditId: t
				}) => {
					const r = d(e, {
							subredditId: t
						}),
						n = u(e, {
							subredditId: t
						}),
						s = c(e, {
							subredditId: t
						});
					if (!r || !n || !s) return !1;
					if (s.applied) return !0;
					const a = Object(o.f)(e, {
							subredditId: t
						}),
						{
							canUserChange: i
						} = n.permissions;
					return !!s.templateIds.find(e => {
						return !s.templates[e].modOnly || a
					}) && i
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-SidebarNativeAd.ccc5b3fabe6a7532d98d.js.map