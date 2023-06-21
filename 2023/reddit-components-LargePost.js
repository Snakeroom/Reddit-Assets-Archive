// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.088bdb9239fd915e3330.js
// Retrieved at 6/21/2023, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-LargePost", "Reddit~RichTextEditor~reddit-components-MediumPost~reddit-components-NotificationUnit-Button~removal~87f825ba"], {
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
						d = !i && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						f = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						O = !a && !m && !u && !p && /linux/i.test(t),
						x = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = s(/version\/(\d+(\.\d+)?)/i),
						_ = /tablet/i.test(t) && !/tablet pc/i.test(t),
						g = !_ && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: v || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: v || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, x ? (o.msedge = e, o.version = x) : (o.msie = e, o.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: x
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || v
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
						version: v || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? o = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, v && (o.version = v)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, v && (o.version = v)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && v && (o.version = v)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !a && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : E ? (o.xbox = e, o.osname = "Xbox") : f ? (o.windows = e, o.osname = "Windows") : O && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var y = "";
					o.windows ? y = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? y = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? y = (y = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? y = (y = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? y = s(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? y = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? y = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? y = s(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (y = s(/tizen[\/\s](\d+(\.\d+)*)/i)), y && (o.osversion = y);
					var j = !o.windows && y.split(".")[0];
					return _ || d || "ipad" == r || a && (3 == j || j >= 4 && !g) || o.silk ? o.tablet = e : (g || "iphone" == r || "ipod" == r || a || i || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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
					for (var d in e)
						if (e.hasOwnProperty(d) && a[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([i, e[d]]) < 0
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
		"./node_modules/lodash/map.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayMap.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				r = s("./node_modules/lodash/_baseMap.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (a(e) ? n : r)(e, o(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				o = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = i(e) ? n : a,
					c = arguments.length < 3;
				return d(e, r(t, 4), s, c, o)
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
				let d = "";
				if (o) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == i ? void 0 : i.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					d = a || Object(n.E)(e)
				} else d = Object(n.E)(e);
				const c = r.a.parse(d),
					l = c.path || "",
					m = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (c.hostname ? c.hostname.replace("www.", "") : "") + m
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/lib/domUtils/index.ts"),
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./src/reddit/components/CommentSort/index.tsx"),
				a = s("./src/reddit/constants/elementIds.ts");
			const i = () => {
					o.a.write(() => {
						const e = document.getElementById(a.e);
						e ? Object(n.c)(e, 0) : Object(n.c)(document, 0)
					})
				},
				d = e => {
					o.a.read(() => {
						const t = e ? document.getElementById(a.e) : window,
							s = document.getElementById(r.a);
						if (t && s) {
							const n = e ? s.offsetTop : s.offsetTop - 50;
							o.a.write(() => t.scrollTo({
								top: n,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
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

			function d(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const d = Date.now(),
					c = new Date(e).getTime(),
					l = {
						[o.yc]: "",
						[o.ub]: "",
						[o.D]: "",
						[o.U]: "",
						[o.pb]: "",
						[o.Xb]: ""
					};
				let m = c - d;
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
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(n.a)(o.c),
				a = Object(n.a)(o.b),
				i = Object(n.a)(o.a)
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return be
			})), s.d(t, "r", (function() {
				return Oe
			})), s.d(t, "p", (function() {
				return xe
			})), s.d(t, "t", (function() {
				return ge
			})), s.d(t, "w", (function() {
				return Ee
			})), s.d(t, "q", (function() {
				return ye
			})), s.d(t, "v", (function() {
				return ke
			})), s.d(t, "o", (function() {
				return Se
			})), s.d(t, "m", (function() {
				return Ne
			})), s.d(t, "b", (function() {
				return Pe
			})), s.d(t, "c", (function() {
				return Ae
			})), s.d(t, "s", (function() {
				return Me
			})), s.d(t, "g", (function() {
				return Le
			})), s.d(t, "h", (function() {
				return De
			})), s.d(t, "k", (function() {
				return Be
			})), s.d(t, "e", (function() {
				return Ue
			})), s.d(t, "d", (function() {
				return Ke
			})), s.d(t, "a", (function() {
				return Ge
			})), s.d(t, "j", (function() {
				return qe
			})), s.d(t, "i", (function() {
				return Je
			})), s.d(t, "l", (function() {
				return Ze
			})), s.d(t, "u", (function() {
				return Xe
			})), s.d(t, "n", (function() {
				return $e
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeDraftKey/index.ts"),
				a = s("./src/lib/scroll/index.ts"),
				i = s("./src/reddit/actions/changeUsername.ts"),
				d = s("./src/reddit/actions/login.ts"),
				c = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/onboarding/index.ts"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/postCreation/editorContent.ts"),
				p = s("./src/reddit/actions/shortcuts/utils.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/reddit/constants/adEvents.ts"),
				h = s("./src/reddit/constants/localStorage.ts"),
				O = s("./src/redditGQL/operations/CommentToxicity.json"),
				x = s("./src/lib/constants/index.ts"),
				v = s("./src/lib/makeApiRequest/index.ts"),
				_ = s("./src/lib/makeGqlRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				E = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				y = s("./src/reddit/constants/headers.ts"),
				j = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				C = s("./src/reddit/helpers/genericServerError/index.ts"),
				k = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				S = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				I = s("./src/reddit/models/PostCreationForm/index.ts"),
				N = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				T = s("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				P = s("./src/reddit/helpers/graphql/helpers.ts"),
				w = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				R = s("./src/redditGQL/operations/CreateComment.json");
			const A = (e, t, s, n) => {
					let o, r;
					if (n === I.i.MARKDOWN) o = s.text, r = null;
					else {
						o = null;
						let e = null;
						s.rteState && (e = E.a.toRichTextJSON(s.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(_.a)(e, {
						...O,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				M = async (e, t, s, n) => {
					const o = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return s.commentMode === I.i.MARKDOWN ? o.text = s.text : (o.text = null, o.richtext_json = n), Object(v.a)(Object(g.a)(e, [y.a]), {
						method: x.ob.POST,
						endpoint: Object(j.a)(Object(N.a)(Object(T.a)(`${e.apiUrl}/api/comment.json`))),
						data: o
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(S.a)(e)
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(k.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(C.a)()
					})
				}, L = async (e, t, s, n, o) => {
					const r = n.commentMode === I.i.MARKDOWN,
						a = {
							postId: t || null,
							parentId: s || null,
							content: {
								markdown: r ? n.text : null,
								richText: r ? null : o
							}
						};
					return Object(_.a)(e, {
						...R,
						variables: {
							input: a
						}
					}).then(e => {
						if (e.ok) {
							const t = e.body.data.createComment;
							if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
								...e,
								ok: !1,
								error: Object(P.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(P.f)(t.errors)
							};
							if (t.ok) return {
								...e,
								body: {
									comment: Object(w.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(C.a)()
						}
					})
				};
			var D = s("./src/redditGQL/operations/UpdateComment.json");
			var B = s("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var F = s("./src/reddit/endpoints/post/index.tsx"),
				U = s("./src/reddit/endpoints/post/convert.ts"),
				W = s("./src/reddit/featureFlags/index.ts"),
				H = s("./src/reddit/helpers/comment/index.ts"),
				V = s("./src/reddit/helpers/correlationIdTracker.ts"),
				K = s("./src/reddit/helpers/dom/index.ts"),
				G = s("./src/reddit/helpers/localStorage/index.ts"),
				q = s("./src/reddit/helpers/sessionStorage/index.ts"),
				z = s("./src/reddit/helpers/trackers/commentsPage.ts"),
				Q = s("./src/reddit/models/Comment/index.ts"),
				Y = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/RichTextJson/index.ts"),
				Z = s("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				X = s("./src/reddit/models/Toast/index.ts"),
				$ = s("./src/reddit/selectors/chatPost.ts"),
				ee = s("./src/reddit/selectors/comments.ts"),
				te = s("./src/reddit/selectors/commentSelector.ts"),
				se = s("./src/reddit/selectors/experiments/chat.ts"),
				ne = s("./src/reddit/constants/experiments.ts"),
				oe = s("./src/reddit/helpers/chooseVariant/index.ts"),
				re = s("./node_modules/reselect/es/index.js");
			const ae = Object(re.a)(e => Object(oe.c)(e, {
				experimentEligibilitySelector: oe.a,
				experimentName: ne.Lb
			}), e => e === ne.Yd);
			var ie = s("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				de = s("./src/reddit/selectors/platform.ts"),
				ce = s("./src/reddit/selectors/posts.ts"),
				le = s("./src/reddit/selectors/user.ts"),
				me = s("./src/reddit/actions/comment/index.ts"),
				ue = s("./src/reddit/actions/comment/constants.ts");
			const pe = Object(o.a)(ue.m),
				be = e => {
					let {
						hasFocus: t,
						draftKey: s
					} = e;
					return async (e, n) => {
						const o = n();
						if (!!o.features.comments.drafts[s])
							if (Object(le.U)(o) && t) {
								const n = pe({
									hasFocus: t,
									draftKey: s
								});
								e(Object(i.startChangeUsernameFlow)(n))
							} else e(pe({
								hasFocus: t,
								draftKey: s
							}))
					}
				},
				fe = Object(o.a)(ue.L),
				he = Object(o.a)(ue.H),
				Oe = Object(o.a)(ue.N),
				xe = Object(o.a)(ue.M),
				ve = Object(o.a)(ue.K),
				_e = async (e, t, s, n, o) => {
					const r = n.ok && n.body,
						a = r && r.comment && r.comment.id;
					await z.g(e, s, t, o, a)
				}, ge = "Toxicity_Warning__Modal", Ee = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					const r = s(),
						a = Object(de.e)(r);
					let i = "";
					a && (i = a.name);
					const {
						formData: d,
						editorMode: l
					} = e;
					if (W.d.enableToxicityWarning(r)) {
						if (!(await A(o(), i, d, l))) return void t(Object(c.i)(ge))
					}
					t(ye(e))
				}, ye = e => async (t, s) => {
					t(Object(c.g)(ge));
					const n = s(),
						o = Object(ie.a)(n),
						r = Object(ie.c)(n);
					if (!n.user.account && o) {
						const s = Object(H.e)(e.formData, n.uploads),
							o = Object(H.d)(e.formData, n.uploads);
						t(Object(c.k)({
							actionSource: c.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(q.d)({
							comment: {
								...e,
								richTextJSONData: s,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(Ce(e, !1))
				};

			function je(e, t) {
				return e === I.i.MARKDOWN && ae(t)
			}
			const Ce = (e, t, s, o) => {
					let {
						postId: r,
						commentsPageKey: i,
						draftKey: d,
						formData: c,
						editorMode: l,
						disableAutofocus: u
					} = e;
					return async (e, h, O) => {
						let {
							apiContext: x,
							gqlContext: v
						} = O;
						var _;
						const g = h(),
							E = Object($.d)(g, {
								postId: r
							}),
							y = E ? Object(H.b)() : d,
							j = Object(te.f)(g, {
								commentId: y
							}),
							C = Object(le.m)(g);
						if (!C) return;
						if (j && !E) return;
						t || e(fe({
							draftKey: y,
							draft: c,
							commentsPageKey: i,
							optimisticComment: E ? Object(H.c)({
								temporalId: y,
								draft: c,
								post: Object(ce.F)(g, {
									postId: r
								}),
								author: C,
								subredditId: (null === (_ = Object(de.e)(g)) || void 0 === _ ? void 0 : _.id) || ""
							}) : void 0
						}));
						const k = c.commentMode;
						let S;
						const N = t && s ? s : Object(H.e)(c, g.uploads),
							T = Object(H.f)(N, g.uploads);
						if ((S = je(k, g) ? await L(v(), r, null, c, N) : await M(x(), r, c, N)).ok) {
							const s = S.body;
							if (e(Oe({
									...s,
									headCommentId: Object(ee.w)(g, {
										commentsPageKey: i
									}),
									commentsPageKey: i,
									draftKey: y,
									upload: T
								})), t) {
								const e = Object(de.i)(g);
								Object(a.a)(!!e)
							}
							const n = Object(ce.F)(h(), {
								postId: r
							});
							e(Object(m.y)(n, f.a.CommentSubmitted))
						} else {
							if (S.error) {
								const e = t && o ? o : Object(H.d)(c, g.uploads);
								z.f({
									state: g,
									bodyText: e,
									postId: r,
									error: S.error,
									uploadMetadata: null == T ? void 0 : T.metadata
								})
							}
							const s = S.error && S.error.fields && S.error.fields[0] ? S.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(ve({
								draftKey: y,
								error: S.error
							})), E || e(Object(b.f)({
								duration: b.a,
								kind: X.b.Error,
								text: s
							}))
						}
						_e(h(), i, l, S, null == T ? void 0 : T.metadata).then(() => S.ok && l === I.i.RICH_TEXT ? Object(V.b)(V.a.CommentComposer) : void 0), u || Object(p.d)(), t && Object(q.a)()
					}
				},
				ke = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					const {
						parentCommentId: r,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: d,
						formData: l,
						editorMode: m
					} = e, u = s(), p = Object(de.e)(u);
					let b = "";
					if (p && (b = p.name), W.d.enableToxicityWarning(u)) {
						if (!(await A(o(), b, l, m))) return void t(Object(c.i)(ge))
					}
					t(Se({
						commentsPageKey: a,
						draftKey: d,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: l,
						editorMode: m
					}))
				}, Se = e => async (t, s) => {
					t(Object(c.g)(ge));
					const n = s(),
						o = Object(ie.a)(n),
						r = Object(ie.c)(n);
					if (!n.user.account && o) {
						const s = Object(H.e)(e.formData, n.uploads),
							o = Object(H.d)(e.formData, n.uploads);
						t(Object(c.k)({
							actionSource: c.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(q.d)({
							comment: {
								...e,
								richTextJSONData: s,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(Ie(e, !1))
				}, Ie = (e, t, s, n) => async (o, r, i) => {
					let {
						apiContext: d,
						gqlContext: c
					} = i;
					var l;
					const {
						parentCommentId: m,
						commentsPageKey: u,
						parentCommentDepth: b,
						draftKey: f,
						formData: h,
						editorMode: O
					} = e, x = r(), v = Object(te.c)(x, {
						commentId: m
					}), _ = v && Object($.d)(x, {
						postId: v.postId
					}) && Object(se.e)(x), g = v && Object($.d)(x, {
						postId: v.postId
					}), E = g ? Object(H.b)() : f, y = Object(te.f)(x, {
						commentId: E
					}), j = Object(le.m)(x);
					if (!j) return;
					if (y && !g) return;
					t || o(fe({
						draftKey: E,
						draft: h,
						commentsPageKey: u,
						optimisticComment: g && v ? Object(H.c)({
							temporalId: E,
							draft: h,
							post: Object(ce.F)(x, {
								postId: v.postId
							}),
							author: j,
							subredditId: (null === (l = Object(de.e)(x)) || void 0 === l ? void 0 : l.id) || "",
							parentId: v.id
						}) : void 0
					})), _ || o(Pe({
						parentCommentId: m,
						commentsPageKey: u
					}));
					const C = h.commentMode,
						k = t && s ? s : Object(H.e)(h, x.uploads),
						S = Object(H.f)(k, x.uploads);
					let I;
					if ((I = je(C, x) ? await L(c(), null, m, h, k) : await M(d(), m, h, k)).ok) {
						if (o(xe({
								...I.body,
								parentCommentId: m,
								commentsPageKey: u,
								draftKey: E,
								depth: b + 1,
								upload: S
							})), t) {
							const e = Object(de.i)(x);
							Object(a.a)(!!e)
						}
					} else {
						if (I.error) {
							if (!v) return;
							const e = t && n ? n : Object(H.d)(h, x.uploads);
							z.f({
								state: x,
								bodyText: e,
								postId: v.postId,
								parentId: m,
								error: I.error,
								uploadMetadata: null == S ? void 0 : S.metadata
							})
						}
						o(ve({
							draftKey: E,
							error: I.error
						}))
					}
					_e(r(), u, O, I, null == S ? void 0 : S.metadata), _ || Object(p.d)(), t && Object(q.a)()
				}, Ne = () => async e => {
					const t = Object(q.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: s,
								parentCommentId: n,
								postId: o,
								richTextJSONData: r,
								commentBodyText: a
							},
							isSkipOnboarding: i
						} = t;
						i && e(Object(l.skipOnboardingModal)()), o ? await e(Ce({
							...t.comment,
							postId: o
						}, !0, r, a)) : n && void 0 !== s && await e(Ie({
							...t.comment,
							parentCommentId: n,
							parentCommentDepth: s
						}, !0, r, a))
					}
				}, Te = Object(o.a)(ue.s), Pe = Object(o.a)(ue.r), we = Object(o.a)(ue.n), Re = (Object(o.a)(ue.i), Object(o.a)(ue.o)), Ae = (Object(o.a)(ue.v), (e, t, s) => async (o, r, a) => {
					let {
						apiContext: i
					} = a;
					const d = e === I.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(J.H)(t)) o(Re({
						editorMode: e,
						draftKey: s,
						content: d ? J.i : ""
					})), o(Object(u.c)(e));
					else {
						o(Object(u.b)(s));
						const r = await Object(U.a)(i(), e, d ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(u.a)(s)), o(Re({
								editorMode: e,
								draftKey: s,
								content: t
							})), o(Object(u.c)(e))
						} else o(Object(u.a)(s)), o(Object(b.f)({
							duration: b.a,
							kind: X.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Me = e => {
					let {
						commentsPageKey: t,
						parentCommentId: s,
						singleOpen: n
					} = e;
					return async (e, o) => {
						const a = o(),
							l = Object(r.a)(Y.c.replyToComment, s);
						if (!Object(le.S)(o()) && !Object(ie.a)(a)) return e(Object(d.openRegisterModal)()), void e(Object(c.k)({
							actionSource: c.a.Reply,
							redirectUrl: Object(ee.m)(o(), {
								commentId: s
							})
						}));
						const m = a.features.comments.replyFormOpen[t],
							u = m && m[s];
						if ((u || m && n) && (Object.keys(m).forEach(s => m[s] && e(Pe({
								parentCommentId: s,
								commentsPageKey: t
							}))), u)) return;
						let p = "",
							b = null;
						const f = a.user.prefs.commentMode,
							h = Object(K.d)();
						if (h) {
							const e = h.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (f === I.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => Z.s(e, null)).map(e => Z.l([e])),
									s = Z.s("", null),
									n = Z.l([s]);
								b = {
									document: [Z.c(t), n]
								}
							}
						}
						const O = a.features.comments.drafts[l];
						let x;
						if (x = h ? {
								commentMode: f,
								draftType: Y.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : O || {
								commentMode: f,
								draftType: Y.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(le.U)(a)) {
							const n = Te({
								parentCommentId: s,
								commentsPageKey: t,
								draftKey: l,
								formData: x
							});
							e(Object(i.startChangeUsernameFlow)(n))
						} else e(Te({
							parentCommentId: s,
							commentsPageKey: t,
							draftKey: l,
							formData: x
						}))
					}
				}, Le = e => async t => {
					t(Object(me.r)(e)), t(Ue(e))
				}, De = e => {
					let {
						parentCommentId: t,
						commentsPageKey: s
					} = e;
					return async e => {
						e(Pe({
							parentCommentId: t,
							commentsPageKey: s
						})), e(Me({
							parentCommentId: t,
							commentsPageKey: s
						})), e(Object(me.r)({
							commentId: t,
							commentsPageKey: s
						}))
					}
				}, Be = (e, t) => s => s(we({
					draftKey: e,
					formData: t
				})), Fe = Object(o.a)(ue.u), Ue = e => {
					let {
						commentId: t,
						commentMode: s,
						commentsPageKey: n,
						draftKey: o,
						text: r
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (z.c(i), e(Fe({
							commentId: t,
							commentsPageKey: n,
							draftKey: o,
							formData: {
								text: r,
								commentMode: s,
								rteState: null,
								draftType: Y.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, We = Object(o.a)(ue.F), He = Object(o.a)(ue.E), Ve = Object(o.a)(ue.G), Ke = Object(o.a)(ue.j), Ge = Object(o.a)(ue.f), qe = e => {
					let {
						id: t,
						commentsPageKey: s,
						draftKey: n,
						formData: o
					} = e;
					return async (e, r, a) => {
						let {
							apiContext: i,
							gqlContext: d
						} = a;
						const c = r();
						if (!c.user.account) return;
						e(We({
							draftKey: n
						})), z.d(c);
						const l = Object(H.e)(o, c.uploads),
							m = o.commentMode;
						let u;
						if ((u = je(m, c) ? await (async (e, t, s, n, o) => {
								const r = o === I.i.MARKDOWN,
									a = {
										commentId: t,
										content: {
											markdown: r ? s.text : null,
											richText: r ? null : n
										}
									};
								return Object(_.a)(e, {
									...D,
									variables: {
										input: a
									}
								}).then(e => {
									if (e.ok) {
										const t = e.body.data.updateComment;
										if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
											...e,
											ok: !1,
											error: Object(P.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(P.f)(t.errors)
										};
										if (t.ok) return {
											...e,
											body: {
												comment: {
													...Object(w.c)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(C.a)()
									}
								})
							})(d(), t, o, l, m) : await (async (e, t, s, n, o) => {
								const r = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return o === I.i.MARKDOWN ? r.text = s.text : (r.text = null, r.richtext_json = n), Object(v.a)(Object(g.a)(e, [y.a]), {
									endpoint: Object(j.a)(Object(T.a)(Object(N.a)(`${e.apiUrl}/api/editusertext`))),
									method: x.ob.POST,
									data: r
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(S.a)(e)
								} : {
									...e,
									body: {
										comment: Object(k.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(k.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(C.a)()
								})
							})(i(), t, o, l, m)).ok) {
							const o = u.body;
							e(Ve({
								commentId: t,
								commentsPageKey: s,
								draftKey: n
							})), e(Object(me.j)({
								[t]: {
									...o.comment
								}
							}))
						} else e(He({
							draftKey: n,
							error: u.error
						}))
					}
				}, ze = Object(o.a)(ue.C), Qe = Object(o.a)(ue.B), Ye = Object(o.a)(ue.D), Je = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = n();
					s(ze({
						id: e
					})), z.a(e, a);
					const i = await ((e, t) => Object(v.a)(Object(g.a)(e, [y.a]), {
						endpoint: Object(j.a)(`${e.apiUrl}/api/del`),
						method: x.ob.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(S.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(C.a)()
					}))(r(), e);
					i.ok ? s(Ye({
						id: e,
						postId: t
					})) : s(Qe({
						id: e,
						error: i.error
					}))
				}, Ze = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const r = !s().features.comments.models[e].sendReplies;
					t(Object(me.j)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(F.p)(o(), e, r)).ok || t(Object(me.j)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, Xe = (e, t) => async (s, o, r) => {
					let {
						gqlContext: a
					} = r;
					var i, d, c, l, m, u;
					s(Object(me.c)());
					const p = e => Object(b.f)(Object(b.e)(e, X.b.Error));
					if (((null === (d = null === (i = o().pages) || void 0 === i ? void 0 : i.comments) || void 0 === d ? void 0 : d.followed) || []).length === h.a) s(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === Q.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (s(Object(me.p)(i)), (await ((e, t) => Object(_.a)(e, {
								...B,
								variables: {
									input: t
								}
							}))(a(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(G.yb)(null !== (m = null === (l = null === (c = o().pages) || void 0 === c ? void 0 : c.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = o().user.account) || void 0 === u ? void 0 : u.id);
							const e = r ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							s(Object(b.f)({
								kind: X.b.SuccessCommunityGreen,
								text: e
							}))
						} else s(Object(me.p)(i)), s(p(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function $e(e) {
				let {
					commentId: t,
					commentsPageKey: s
				} = e;
				return async (e, n) => {
					const o = n(),
						r = Object(te.c)(o, {
							commentId: t
						});
					if (!r) return;
					e(he({
						commentId: t,
						commentsPageKey: s
					}));
					const a = {
						commentMode: r.media.rteMode,
						draftType: r.parentId ? Y.c.replyToComment : Y.c.replyToPost,
						rtJson: r.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (r.parentId) {
						const t = Object(te.c)(o, {
								commentId: r.parentId
							}),
							n = Object(ee.j)(o, {
								commentId: r.parentId,
								commentLink: void 0,
								commentsPageKey: s
							});
						if (!t || null === n) return;
						await e(Se({
							commentsPageKey: s,
							draftKey: r.id,
							parentCommentDepth: n,
							parentCommentId: t.id,
							formData: a,
							editorMode: r.media.rteMode
						}))
					} else await e(ye({
						postId: r.postId,
						commentsPageKey: s,
						draftKey: r.id,
						formData: a,
						editorMode: r.media.rteMode,
						disableAutofocus: !0
					}))
				}
			}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return _
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "b", (function() {
				return S
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makeCommentsPageKey/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/shortcuts/utils.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				u = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/actions/comment/index.ts"),
				x = s("./src/reddit/actions/comment/constants.ts");
			const v = Object(r.a)(x.p),
				_ = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					s().features.comments.models[e] && (await Object(m.j)(o(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, g = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					if (!Object(h.S)(s())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const a = s().features.comments.models[e];
					if (!a) return;
					const d = a.isLocked ? m.l : m.f;
					t(Object(O.j)({
						[e]: {
							isLocked: !a.isLocked
						}
					})), (await d(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: a.isLocked ? n.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : n.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(O.j)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, E = Object(r.a)(x.J), y = e => async (t, s, o) => {
					let {
						apiContext: r,
						gqlContext: a
					} = o;
					const i = s(),
						l = i.features.comments.models[e],
						u = i.user.account ? i.user.account.displayText : null;
					l && u && (t(Object(O.j)({
						[e]: {
							isApproved: !0,
							approvedBy: u,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(a(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: n.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(O.j)({
						[e]: {
							isApproved: l.isApproved,
							approvedBy: null,
							bannedBy: l.bannedBy,
							isRemoved: l.isRemoved,
							isSpam: l.isSpam,
							modNote: l.modNote,
							modReasonBy: l.modReasonBy,
							modRemovalReason: l.modRemovalReason,
							numReports: l.numReports || null
						}
					})), Object(d.d)())
				}, j = (e, t) => async (s, o, r) => {
					let {
						apiContext: a,
						gqlContext: i
					} = r;
					const l = o(),
						u = l.features.comments.models[e],
						p = l.user.account ? l.user.account.displayText : null;
					u && p && (s(Object(O.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(m.h)(i(), e, t)).ok ? s(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? n.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : n.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(O.j)({
						[e]: {
							approvedBy: u.approvedBy,
							bannedBy: u.bannedBy,
							isApproved: u.isApproved,
							isRemoved: u.isRemoved,
							isSpam: u.isSpam,
							numReports: u.numReports
						}
					})), Object(d.d)())
				}, C = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const a = s().features.comments.models[e];
					if (!a) return;
					const i = a.ignoreReports ? m.k : m.e;
					a.ignoreReports || t(y(e)), t(Object(O.j)({
						[e]: {
							ignoreReports: !a.ignoreReports
						}
					})), (await i(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: a.ignoreReports ? n.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : n.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(O.j)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, k = (e, t, s) => async (r, a, i) => {
					let {
						gqlContext: d
					} = i;
					const l = Object(f.c)(a(), {
						commentId: e
					});
					if (!l) return;
					const m = s === o.kc.Snoozed,
						h = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(d(), {
							input: h
						})).ok) r(Object(O.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, m)
						}
					}));
					else {
						const e = Object(c.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, S = (e, t, s) => async (n, r, i) => {
					let {
						apiContext: d,
						gqlContext: c
					} = i;
					const l = r(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					n(Object(O.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.I.ADMIN,
							isMod: t === o.I.MODERATOR,
							isStickied: !!s
						}
					})), s && b && b !== e && n(Object(O.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const f = Object(m.c)(c(), e, t),
						h = Object(m.d)(c(), e, !!s),
						x = [f];
					(s || !s && e === b) && x.push(h), (await Promise.all(x)).every(e => e.ok) ? s && n(E({
						id: e,
						postId: p,
						commentsPageKey: Object(a.a)(p, null, {
							sort: o.v.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (n(Object(O.j)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), n(Object(O.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
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
				return d
			})), s.d(t, "g", (function() {
				return c
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
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
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
				return d
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				i = "START_EVENT_NOW_SUCCESS",
				d = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/modQueue/realtime.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "b", (function() {
				return A
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				o = (s("./src/redditGQL/operations/LastModActionInSubreddit.json"), s("./src/redditGQL/operations/ModActivitySummaryByID.json")),
				r = s("./src/redditGQL/operations/SingleCommentById.json"),
				a = s("./src/redditGQL/operations/SinglePostInfoById.json");
			var i = s("./src/lib/initializeClient/installReducer.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/users.ts"),
				u = s("./src/reddit/endpoints/redditor/index.ts"),
				p = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				b = s("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				h = s("./src/reddit/helpers/isPost.ts"),
				O = s("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				x = s("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				v = s("./src/reddit/actions/modQueue/constants.ts");
			var _ = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case v.o:
							return t.payload;
						default:
							return e
					}
				},
				g = s("./src/reddit/reducers/pages/modHub/index.ts"),
				E = s("./src/reddit/selectors/modQueue.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				j = s("./src/redditGQL/types.ts");
			Object(i.a)({
				pages: {
					modHub: g.a
				}
			}), Object(i.a)({
				features: {
					modActivitySummaries: O.a
				}
			}), Object(i.a)({
				features: {
					realtimeModqueue: x.a
				}
			}), Object(i.a)({
				features: {
					realtimeUpdateAnimationId: _
				}
			});
			const C = Object(d.a)(v.l),
				k = e => async (t, s, r) => {
					let {
						gqlContext: a
					} = r;
					const i = await ((e, t) => Object(n.a)(e, {
							...o,
							variables: t
						}))(a(), {
							id: e
						}),
						d = Object(b.a)(i.body.data.subredditInfoById);
					t(C(d))
				}, S = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					e && t(k(e))
				}, I = Object(d.a)(v.m), N = (e, t) => {
					const s = (e => {
							var t, s;
							const {
								subredditName: n,
								pageName: o
							} = (null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || {}, r = (null === (s = e.platform.currentPage) || void 0 === s ? void 0 : s.queryParams) || {};
							return {
								page: (null == r ? void 0 : r.page) || "1",
								pageName: o,
								subredditName: n || (null == r ? void 0 : r.subreddit),
								queryParams: r
							}
						})(e),
						n = Object(E.d)(e, s);
					return null == n ? void 0 : n.includes(t)
				}, T = [j.y.ApproveComment, j.y.ApproveLink, j.y.RemoveComment, j.y.RemoveLink, j.y.SpamComment, j.y.SpamLink], P = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					var r, a;
					const {
						moderatorID: i,
						targetID: d,
						action: c
					} = null === (r = null == e ? void 0 : e.subscribe) || void 0 === r ? void 0 : r.data, l = s(), p = Object(y.k)(l), b = T.includes(c), f = i === p, h = N(l, d);
					if (!b || f || !h) return;
					const O = await Object(u.b)(o(), {
						id: i
					}) || (null === (a = Object(y.Cb)(l, {
						userId: i
					})) || void 0 === a ? void 0 : a.username);
					O && t(Object(m.z)(O)), t(I({
						targetID: d
					}))
				}, w = Object(d.a)(v.p), R = Object(d.a)(v.o), A = e => async (t, s, o) => {
					let {
						gqlContext: i
					} = o;
					var d, m, u, b, O, x;
					const v = Object(h.a)(e),
						_ = s(),
						g = null === (m = null === (d = null == _ ? void 0 : _.features) || void 0 === d ? void 0 : d.realtimeModqueue) || void 0 === m ? void 0 : m.toUpdate.includes(e),
						E = N(_, e);
					if (!g || !E) return;
					const y = v ? () => ((e, t) => Object(n.a)(e, {
							...a,
							variables: t
						}))(i(), {
							id: e
						}) : () => ((e, t) => Object(n.a)(e, {
							...r,
							variables: t
						}))(i(), {
							id: e
						}),
						j = await y();
					if (j.ok) {
						if (v) {
							const s = null === (b = null === (u = null == j ? void 0 : j.body) || void 0 === u ? void 0 : u.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(l.Q)({
								[e]: Object(f.f)(s)
							}))
						} else {
							const s = null === (x = null === (O = null == j ? void 0 : j.body) || void 0 === O ? void 0 : O.data) || void 0 === x ? void 0 : x.commentById;
							t(Object(c.j)({
								[e]: Object(p.a)(s)
							}))
						}
						t(R(e)), t(w({
							targetID: e
						}))
					}
				}
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
				return d
			})), s.d(t, "t", (function() {
				return c
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
				return f
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "j", (function() {
				return x
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "p", (function() {
				return _
			})), s.d(t, "q", (function() {
				return g
			})), s.d(t, "o", (function() {
				return E
			}));
			const n = "CREATE_COLLECTION_PENDING",
				o = "CREATE_COLLECTION_SUCCESS",
				r = "CREATE_COLLECTION_FAILED",
				a = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				i = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				d = "ADD_POST_TO_COLLECTION_SUCCESS",
				c = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				m = "UPDATE_COLLECTION_PENDING",
				u = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				f = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				h = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				O = "REORDER_COLLECTION_PENDING",
				x = "REORDER_COLLECTION_SUCCESS",
				v = "REORDER_COLLECTION_FAILED",
				_ = "UPDATE_COLLECTION_LAYOUT_PENDING",
				g = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				E = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "c", (function() {
				return O
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/toaster.ts"),
				a = s("./src/reddit/endpoints/post/convert.ts"),
				i = s("./src/reddit/helpers/localStorage/index.ts"),
				d = s("./src/reddit/helpers/trackers/postComposer.ts"),
				c = s("./src/reddit/models/PostCreationForm/index.ts"),
				l = s("./src/reddit/models/RichTextJson/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts"),
				u = s("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(u.H),
				b = Object(o.a)(u.p),
				f = Object(o.a)(u.R),
				h = (e, t, s) => async (o, i, h) => {
					let {
						apiContext: x
					} = h;
					d.m(i(), t);
					const v = t === c.i.MARKDOWN,
						_ = t === c.i.RICH_TEXT,
						g = u.k;
					if (v && Object(l.H)(s)) return o(f({
						editorKey: e,
						editorMode: c.i.MARKDOWN,
						content: ""
					})), void o(O(t));
					if (_ && !s) return o(f({
						editorKey: e,
						editorMode: c.i.RICH_TEXT,
						content: l.i
					})), void o(O(t));
					o(p(g));
					const E = await Object(a.a)(x(), t, v ? JSON.stringify(s) : s);
					E.ok ? (o(b(g)), o(f({
						editorKey: e,
						editorMode: t,
						content: E.body.output
					})), o(O(t))) : (o(b(g)), o(Object(r.f)({
						duration: r.a,
						kind: m.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, O = e => async (t, s) => {
					const o = Object(i.l)();
					if (o >= 3) return;
					const a = s().user.prefs.useMarkdown ? c.i.MARKDOWN : c.i.RICH_TEXT;
					if (e === a) return;
					const d = e === c.i.MARKDOWN ? n.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : n.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: n.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: m.b.SuccessCommunity,
						text: d
					})), Object(i.wb)(o + 1)
				}
		},
		"./src/reddit/actions/relatedCommunitiesRecommendations/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = "RELATED_COMMUNITIES_RECOMMENDATIONS__FETCH_RECOMMENDATIONS_PENDING",
				o = "RELATED_COMMUNITIES_RECOMMENDATIONS__FETCH_RECOMMENDATIONS_SUCCESS",
				r = "RELATED_COMMUNITIES_RECOMMENDATIONS__FETCH_RECOMMENDATIONS_FAILURE"
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return $
			})), s.d(t, "removalReasonsLoaded", (function() {
				return ee
			})), s.d(t, "removalReasonsFailed", (function() {
				return te
			})), s.d(t, "removalReasonsRequested", (function() {
				return se
			})), s.d(t, "removalReasonAddedPending", (function() {
				return ne
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return oe
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return re
			})), s.d(t, "addRemovalReason", (function() {
				return ae
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return de
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), s.d(t, "editRemovalReason", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return me
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return pe
			})), s.d(t, "deleteRemovalReason", (function() {
				return be
			})), s.d(t, "removedItemsSelected", (function() {
				return fe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return Oe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return xe
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return ve
			})), s.d(t, "removalReasonMessagePending", (function() {
				return _e
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ge
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Ee
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return ye
			})), s.d(t, "submitRemovalReason", (function() {
				return je
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Ce
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				c = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				f = "REMOVALREASONS__DELETE_FAILED";
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case a:
					case i:
					case d:
					case l:
					case m:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case c:
					case u:
					case f:
						return t.payload;
					default:
						return e
				}
			};
			var O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case i:
						case l:
						case p:
							return !0;
						case a:
						case "REMOVALREASONS__LOAD_FAILED":
						case d:
						case c:
						case m:
						case u:
						case b:
						case f:
							return !1;
						default:
							return e
					}
				},
				x = Object(r.c)({
					error: h,
					pending: O
				});
			const v = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							response: s
						} = t.payload, {
							data: n
						} = s;
						return {
							...e,
							...n
						}
					}
					case d:
					case m: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case b: {
						const {
							reasonId: s
						} = t.payload, {
							[s]: n,
							...o
						} = e;
						return o
					}
					default:
						return e
				}
			};
			const g = {};
			var E = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							order: o
						} = n;
						return {
							...e,
							[s]: o
						}
					}
					case d: {
						const {
							subredditId: s,
							reason: n
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], n.id]
						}
					}
					case b: {
						const {
							subredditId: s,
							reasonId: n
						} = t.payload, o = [...e[s]].filter(e => e !== n);
						return {
							...e,
							[s]: o
						}
					}
					default:
						return e
				}
			};
			var y = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__REMOVEDITEMS_SELECTED": {
							const {
								subredditId: e,
								itemIds: s
							} = t.payload;
							return {
								itemIds: s,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				j = Object(r.c)({
					api: x,
					models: _,
					reasonOrder: E,
					removedItemIds: y
				}),
				C = s("./src/lib/constants/index.ts"),
				k = s("./src/lib/makeActionCreator/index.ts"),
				S = s("./src/lib/makeCommentsPageKey/index.ts"),
				I = s("./src/lib/makeDraftKey/index.ts"),
				N = s("./src/reddit/actions/bulkActions/index.ts"),
				T = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				w = s("./src/reddit/actions/comment/moderation.ts"),
				R = s("./src/reddit/actions/modal.ts"),
				A = s("./src/reddit/actions/post.ts"),
				M = s("./src/reddit/actions/toaster.ts"),
				L = s("./src/reddit/constants/modals.ts"),
				D = s("./src/lib/makeApiRequest/index.ts"),
				B = s("./src/lib/omitHeaders/index.ts"),
				F = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				W = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const H = (e, t) => Object(D.a)(Object(B.a)(e, [F.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: C.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				V = (e, t, s) => Object(D.a)(Object(B.a)(e, [F.a]), {
					endpoint: Object(U.a)(Object(W.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: C.ob.POST,
					type: "json",
					data: t
				});
			var K = s("./src/reddit/helpers/isPost.ts"),
				G = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = s("./src/reddit/helpers/routeKey/index.ts"),
				z = s("./src/reddit/models/ModQueue/index.ts"),
				Q = s("./src/reddit/models/PostDraft/index.ts"),
				Y = s("./src/reddit/models/RemovalReason/index.ts"),
				J = s("./src/reddit/models/Toast/index.ts"),
				Z = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: j
				}
			});
			const $ = Object(k.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(k.a)(a),
				te = Object(k.a)("REMOVALREASONS__LOAD_FAILED"),
				se = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const r = s().subreddits.models[e].name;
					t($());
					const a = await ((e, t) => Object(D.a)(Object(B.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: C.ob.GET
					}))(o(), r);
					a.ok ? t(ee({
						subredditId: e,
						response: a.body
					})) : t(te(a.error))
				}, ne = Object(k.a)(i), oe = Object(k.a)(d), re = Object(k.a)(c), ae = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(ne());
					const d = await ((e, t, s) => Object(D.a)(Object(B.a)(e, [F.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: C.ob.POST,
						data: s
					}))(a(), i, t);
					if (d.ok) {
						const {
							id: o
						} = d.body, r = {
							...t,
							id: o
						};
						s(oe({
							subredditId: e,
							reason: r
						})), s(Object(M.f)({
							kind: J.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(d.error))
				}, ie = Object(k.a)(l), de = Object(k.a)(m), ce = Object(k.a)(u), le = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(ie());
					const d = await ((e, t, s) => Object(D.a)(Object(B.a)(e, [F.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: C.ob.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(a(), i, t);
					d.ok ? (s(de({
						subredditId: e,
						reason: t
					})), s(Object(M.f)({
						kind: J.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ce(d.error))
				}, me = Object(k.a)(p), ue = Object(k.a)(b), pe = Object(k.a)(f), be = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(me());
					const d = await ((e, t, s) => Object(D.a)(Object(B.a)(e, [F.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: C.ob.DELETE
					}))(a(), i, t);
					d.ok ? (s(ue({
						subredditId: e,
						reasonId: t
					})), s(Object(M.f)({
						kind: J.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(pe(d.error))
				}, fe = Object(k.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = n();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(fe({
						subredditId: e,
						itemIds: t
					})), s(Object(R.i)(L.a.ADD_REMOVAL_REASON))
				}, Oe = Object(k.a)("REMOVALREASONS__SUBMIT_PENDING"), xe = Object(k.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ve = Object(k.a)("REMOVALREASONS__SUBMIT_FAILED"), _e = Object(k.a)("REMOVALREASONS__MESSAGE_PENDING"), ge = Object(k.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Ee = Object(k.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ye = Object(k.a)("REMOVALREASONS__MESSAGE_FAILED"), je = (e, t, s, n, o, r) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object(K.a)(u) ? Y.e.Post : Y.e.Comment,
						b = p === Y.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						f = p === Y.e.Post ? A.Q : T.j;
					if (!b || !m) return !1;
					a(Oe()), a(f({
						[u]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: m
						}
					}));
					const h = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						O = await H(c(), h);
					if (O.ok) {
						if (a(xe()), t) {
							a(_e());
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: r,
									type: n
								},
								i = await V(c(), Object(Y.h)(o, p), p);
							if (i.ok) {
								if ([Y.f.Public, Y.f.PublicAsSubreddit].includes(n)) {
									if (a(Ee()), i.body) {
										const e = Object(G.a)(i.body),
											t = {
												comment: e,
												parentId: u
											},
											s = Object(X.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = s && n && Object(q.a)(n, l, l.posts.models[e.postId]);
										if (o || (o = Object(S.a)(e.postId, null, {
												sort: C.w,
												hasSortParam: !0
											})), p === Y.e.Post) {
											const s = Object(I.a)(Q.c.replyToPost, u);
											a(Object(P.r)({
												...t,
												headCommentId: Object(Z.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: s
											}));
											const n = l.postStickiedComments.data[u];
											a(Object(w.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), n && n !== e.id && a(Object(T.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === Y.e.Comment) {
											const e = Object(I.a)(Q.c.replyToComment, b.id),
												s = Object(Z.j)(l, {
													commentId: u,
													commentsPageKey: o
												});
											a(Object(P.p)({
												...t,
												parentCommentId: u,
												commentsPageKey: o,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else a(ge());
								return !0
							}
							return a(ye(i.error)), !1
						}
					} else a(ve(O.error)), a(f({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, s, o, r) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					a(Oe());
					const u = Object(M.f)({
							kind: J.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await H(c(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: z.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (a(Object(N.b)(n)), t) {
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								r = await V(c(), Object(Y.h)(n, Y.e.Bulk), Y.e.Bulk);
							r.ok ? (a(ge()), a(u)) : a(ye(r.error))
						} else a(u)
					} else a(ve(b.error))
				}
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
						routes: d
					} = i;
					const c = a();
					Object(n.a)(e, d, c) ? s(Object(r.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
				}
			}
		},
		"./src/reddit/components/AdSupplementaryText/index.m.less": function(e, t, s) {
			e.exports = {
				AdSupplementaryText: "_3aY2soNZuUlNJQkpdmox9M",
				adSupplementaryText: "_3aY2soNZuUlNJQkpdmox9M",
				Content: "dND6Q1_345dpzB_NMYBC8",
				content: "dND6Q1_345dpzB_NMYBC8",
				ExtraLarge: "uh_X09jq4S7lMKSY8ZDii",
				extraLarge: "uh_X09jq4S7lMKSY8ZDii",
				Large: "_1l7lMJqbov2T29ncxpJBlP",
				large: "_1l7lMJqbov2T29ncxpJBlP"
			}
		},
		"./src/reddit/components/AdSupplementaryText/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/components/RichTextJson/index.tsx"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/selectors/experiments/supportingLinkAds.ts"),
				u = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/AdSupplementaryText/index.m.less"),
				b = s.n(p);
			const f = e => {
				let t;
				switch (e) {
					case u.b.ExtraLarge:
						t = b.a.ExtraLarge;
						break;
					case u.b.Large:
						t = b.a.Large
				}
				return t
			};
			t.a = e => {
				let {
					post: t,
					size: s,
					className: n
				} = e;
				const u = Object(r.d)();
				if (!Object(r.e)(m.a) || !Object(i.B)(t) || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
				if (0 === t.adSupplementaryText.document.length) return null;
				return o.a.createElement("div", {
					className: Object(a.a)(n, b.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`,
					onClick: e => {
						e.target instanceof HTMLAnchorElement && u(Object(d.y)(t, l.a.Click))
					}
				}, o.a.createElement(c.b, {
					className: Object(a.a)(b.a.Content, f(s)),
					content: t.adSupplementaryText,
					rtJsonElementProps: {
						renderingObjectInfo: void 0
					}
				}))
			}
		},
		"./src/reddit/components/CCM/ModPreviousActions/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2-D4Vessy5Hd1e5HAU1PK3",
				wrapperTitle: "aC6WYpmVvQIF_BZRtMI_W",
				row: "ax8JnexGOa4WYNYKwXlQs",
				icon: "_1fiz4BfaOlncADi00qAx_l",
				userIconWrapper: "_1ChqLpIvObEfBbb4d-hyah",
				userIcon: "_3nEX0mG3UGhbY0hR0Kqaag",
				details: "_3jKisheiLDnZzH5J_qln3x",
				title: "_1-LXaYXcvGUA9hhrrw587d",
				meta: "_3w_F6oDd1-ZDKgp3jo94ew",
				time: "_2820zMw8REXxmaotvSTjqt",
				userlink: "_2622vu9WjymZhKkDq78CfF"
			}
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, s) {
			e.exports = {
				container: "_2ulKn_zs7Y3LWsOqoFLHPo",
				mHasOtherDiscussions: "_3iO3U_i4YUx-2qahK_BTu1",
				HighlightPicker: "_1n6gZPmNQU56UBglU718cx",
				highlightPicker: "_1n6gZPmNQU56UBglU718cx",
				Row: "zW82EsY6Pakxpq4WWvsUG",
				row: "zW82EsY6Pakxpq4WWvsUG",
				SortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				sortPicker: "_1nMYOibX9neGRqvcaCrPDz",
				containerRow: "_1avwNy0RnwlEwVEW-fwKCI",
				DropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				dropdownContainer: "_3N0NZT0gc58Hq7p0XRUjsH",
				ContestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				contestMode: "_3dAMO_XZMVp2K1JSO53ohA",
				SortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				sortOptionDropdownText: "_3LRBCA71BwLLXBNsSlY7HW",
				commentSearchMargin: "_2_QzTCgd5SYB-X8CTqZf9T",
				ToggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				toggleSwitch: "JVPG0c9TNru5TLSq9sdUG",
				DropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				dropdownTriangle: "_2MGxQvIhmM2I5CzPdSJTtM",
				hideCommentSort: "uAIheeoxWlq57lu5ghv43",
				HighlightWrapper: "_201SpO3todaXvcWUHaLymN",
				highlightWrapper: "_201SpO3todaXvcWUHaLymN",
				Info: "_1urK6AxAk9Sl76RgLUHOqh",
				info: "_1urK6AxAk9Sl76RgLUHOqh",
				paddingBottom: "_233thT4kQqtwrHDoMY0Dbv",
				SetSort: "_1Pn7_008tGFVitpaAxNI9b",
				setSort: "_1Pn7_008tGFVitpaAxNI9b",
				SingleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				singleCommentText: "_2iOrDLLjWlyPdmGh4fQMuE",
				SortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				sortLink: "_2C0TYCrsi0B3m8sQW0hmFv",
				Title: "_1MfL8RlT7Bsr76qYvR-nqM",
				title: "_1MfL8RlT7Bsr76qYvR-nqM",
				Tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				tooltip: "_2PA6P-upB6MB4B4I4WgZGA",
				ViewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				viewFullLinkContainer: "_2Cjk95J3a3LyPUHsLEhO37",
				ViewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q",
				verticalDivider: "_3v-KNQB_UvJqSbWcQZmc0U"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return $
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/actions/comment/index.ts"),
				u = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/lib/makeApiRequest/index.ts"),
				h = s("./src/lib/omitHeaders/index.ts"),
				O = s("./src/reddit/constants/headers.ts"),
				x = s("./src/reddit/models/Toast/index.ts");
			const v = (e, t) => async (s, o, r) => {
				let {
					apiContext: a
				} = r;
				const i = await (async (e, t, s) => Object(f.a)(Object(h.a)(e, [O.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: c.ob.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(a(), e, t),
					d = `error-block-${t}`,
					l = `success-block-${t}`;
				if (i.ok) {
					s(Object(p.Q)({
						[e]: {
							suggestedSort: t
						}
					}));
					const o = t ? n.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : n.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					s(b.f({
						id: l,
						kind: x.b.SuccessCommunityGreen,
						text: o
					}))
				} else s(b.f({
					id: d,
					kind: x.b.Error,
					text: n.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: v(e, t)
				}))
			};
			var _ = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				g = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				y = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = s("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				C = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/controls/Dropdown/index.tsx"),
				I = s("./src/reddit/controls/Dropdown/Row.tsx"),
				N = s("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				T = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				P = s("./src/reddit/helpers/path/index.ts"),
				w = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const R = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(w.A)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(w.vb)(r)
				}),
				A = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				M = e => ({
					subreddit: Object(w.mb)(e),
					userSubreddit: Object(w.vb)(e)
				}),
				L = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...M
				});
			var D = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				B = s("./src/reddit/icons/svgs/Info/index.tsx"),
				F = s("./src/reddit/selectors/activeModalId.ts"),
				U = s("./src/reddit/selectors/comments.ts"),
				W = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				H = s("./src/reddit/selectors/moderatorPermissions.ts"),
				V = s("./src/reddit/selectors/posts.ts"),
				K = s("./src/reddit/selectors/tooltip.ts"),
				G = s("./src/reddit/selectors/user.ts"),
				q = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				z = s.n(q),
				Q = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const Y = Object(y.a)(S.a),
				J = e => e === Q.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === Q.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class Z extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== Q.a.None) {
							e(t === Q.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", Q.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", Q.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", Q.a.None)
					}
				}
				componentDidMount() {
					this.track()
				}
				componentDidUpdate(e) {
					e.selectedSort !== this.props.selectedSort && this.track()
				}
				render() {
					const {
						highlightIsOpen: e,
						id: t,
						onOpen: s,
						selectedSort: o
					} = this.props;
					return r.a.createElement("div", {
						className: z.a.HighlightWrapper
					}, r.a.createElement(I.b, {
						className: Object(d.a)(z.a.HighlightPicker, z.a.Row),
						textClassName: z.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${J(o)}`,
						id: t,
						noHover: !0,
						onClick: s
					}), r.a.createElement(D.b, {
						className: z.a.DropdownTriangle,
						onClick: s
					}), r.a.createElement(Y, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(I.b, {
						displayText: J(Q.a.First),
						isSelected: o === Q.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(I.b, {
						displayText: J(Q.a.Last),
						isSelected: o === Q.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(I.b, {
						displayText: J(Q.a.None),
						isSelected: o === Q.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var X = Z;
			const $ = "CommentSort--SortPicker",
				ee = "CommentSort--HighlightPicker",
				te = "CommentSort--Tooltip",
				se = Object(y.a)(S.a),
				ne = Object(k.v)(),
				oe = Object(i.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: s
						} = t;
						return s && Object(U.m)(e, {
							commentId: s
						})
					},
					commentSearchPdp: e => Object(W.a)(e),
					contestModeModalIsOpen: Object(F.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(K.b)($),
					highlightIsOpen: Object(K.b)(ee),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(H.m)(e, {
							postId: s
						});
						return !!n && n.posts
					},
					post: V.F,
					postPermalink: V.E,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(G.x)(e),
							o = !!Object(H.m)(e, {
								postId: s
							}),
							r = Object(V.F)(e, {
								postId: s
							});
						return (o || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: U.p
				}),
				re = Object(a.b)(oe, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						changeHighlightSort: t => e(Object(m.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: $
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: ee
							})), t()
						},
						onSetSuggestedSort: t => e(v(s, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.V)(t, s)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: te
						})),
						toggleContestModeModal: () => e(Object(u.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class ae extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(R(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(A("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(L(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return n.fbt._("{sort name} (suggested)", [n.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					var e;
					const {
						changeHighlightSort: t,
						className: s,
						commentId: o,
						commentPermalink: a,
						commentSearchPdp: i,
						contestModeModalIsOpen: l,
						dropdownIsOpen: m,
						elementRef: u,
						hideTooltip: p,
						highlightIsOpen: b,
						hasModeratorPostPermissions: f,
						isOverlay: h,
						location: O,
						pageLayer: x,
						post: v,
						postPermalink: y,
						selectedHighlightSort: C,
						showCommentHighlighter: k,
						sort: S,
						suggestedSort: w,
						showTooltip: R,
						toggleContestModeModal: M
					} = this.props, L = v.contestMode, F = null == o, U = i.bucketed && Object(j.a)(x) && Object(j.b)(v), W = i.bucketed && Object(j.b)(v) && F, H = !(null === (e = O.search) || void 0 === e ? void 0 : e.includes(c.v.CONFIDENCE)), V = S === c.v.CONFIDENCE && H, K = f && !V, G = c.x[S], q = G ? G() : "", Q = w && S === w && !V ? this.addSuggestedLabel(q) : q, Y = L ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), J = L ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), Z = L ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), ne = L && !f, oe = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: z.a.DropdownContainer
					}, r.a.createElement(I.b, {
						className: Object(d.a)(z.a.SortPicker, z.a.Row),
						textClassName: z.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${Q}`,
						id: $,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(D.b, {
						className: z.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(se, {
						isOpen: m,
						tooltipId: $
					}, [c.v.CONFIDENCE, c.v.TOP, c.v.NEW, c.v.CONTROVERSIAL, c.v.OLD, c.v.QA].map(e => {
						const t = a || y,
							s = Object(P.b)(t),
							n = c.x[e],
							o = n ? n() : "";
						return r.a.createElement(E.a, {
							className: z.a.ViewFullLinkOrOverlayLink,
							isOverlay: h,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${s}?sort=${e}`
						}, r.a.createElement(I.b, {
							displayText: o,
							isSelected: S === e,
							skipRoleAttr: !0
						}))
					})));
					return r.a.createElement("div", {
						className: Object(d.a)(s, z.a.container, {
							[z.a.hideCommentSort]: !k && ne,
							[z.a.paddingBottom]: U
						}),
						ref: u
					}, r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: z.a.containerRow
					}, !ne && !U && oe, K && !ne && !U && (w ? r.a.createElement("button", {
						className: z.a.SortLink,
						onClick: S !== w ? this.setSortOnClick : this.clearSortOnClick
					}, S !== w ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: z.a.SetSort
					}, r.a.createElement("button", {
						className: z.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: te,
						onMouseEnter: R,
						onMouseLeave: p
					}, r.a.createElement(g.c, {
						className: z.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: te
					}), r.a.createElement(B.a, {
						className: z.a.Info
					})))), f && r.a.createElement("button", {
						className: Object(d.a)(z.a.ContestMode, U && z.a.commentSearchMargin),
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(T.a, {
						className: z.a.ToggleSwitch,
						on: L
					})), U || W ? r.a.createElement("div", {
						className: z.a.containerRow
					}, !U && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: z.a.verticalDivider
					}, "|")), r.a.createElement("div", null, r.a.createElement(N.c, {
						experiment: i,
						commentId: o,
						prevLocation: O,
						postId: this.props.postId
					}))) : null), k && r.a.createElement("div", {
						className: z.a.containerRow
					}, r.a.createElement(X, {
						changeHighlightSort: t,
						highlightIsOpen: b,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: C,
						trackHighlight: A
					})), l && r.a.createElement(_.a, {
						actionText: J,
						headerText: Y,
						modalText: Z,
						onConfirm: this.setContestMode,
						toggleModal: M,
						withOverlay: !0
					})))
				}
			}
			t.b = ne(re(Object(C.c)(ae)))
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const i = 5;

			function d(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, d = Object(r.e)(e => e.subreddits.questions), c = Object(r.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const m = new Set;
				let u = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = s[o],
						t = c[e].belongsTo.id;
					p(e) && o - r >= i && !m.has(t) && (r = o, m.add(t), o === l && (u = !0))
				}
				return u ? o.a.createElement(a.a, {
					subredditId: n,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = d[c[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(n.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: async () => s.e("CommunityTopicSurvey").then(s.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = o
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
				d = s("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				c = s.n(d);

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
					className: Object(r.a)(c.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(c.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(i.b)(s) ? c.a.customDownvoteStyles : void 0
				}))
			});
			t.a = m
		},
		"./src/reddit/components/CreatorStats/loader.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
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
				return j
			})), s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Media/index.tsx"),
				u = s("./src/reddit/components/PostMeta/index.tsx"),
				p = s("./src/reddit/components/PostTitle/index.tsx"),
				b = s("./src/reddit/components/SourceLink/index.tsx"),
				f = s("./src/reddit/components/Thumbnail/index.tsx"),
				h = s("./src/lib/constants/index.ts"),
				O = s("./src/reddit/contexts/Post/index.tsx"),
				x = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/CrosspostBox/index.m.less"),
				g = s.n(_),
				E = s("./src/lib/lessComponent.tsx");

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const j = 8,
				C = 1,
				k = E.a.div("Container", g.a),
				S = E.a.div("PostMetaWrapper", g.a),
				I = E.a.wrapped(p.c, "PostTitle", g.a),
				N = E.a.div("FlatList", g.a),
				T = E.a.div("FlatItem", g.a),
				P = E.a.span("FlatListDotSpacer", g.a),
				w = E.a.wrapped(k, "LinkContainer", g.a),
				R = E.a.div("Content", g.a),
				A = E.a.div("ThumbnailContainer", g.a),
				M = Object(d.c)({
					isCurrentUserProfilePost: x.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Tb.TOPIC),
					shouldOpenPostInNewTab: v.lb
				}),
				L = Object(a.b)(M);
			t.c = Object(O.b)(L(e => {
				const {
					className: t,
					isCurrentUserProfilePost: s,
					isTopicPage: n,
					mediaProps: o,
					post: a,
					subredditOrProfile: i
				} = e;
				if (!a) return null;
				const d = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					c = t;
				return a && !a.media ? r.a.createElement(w, {
					className: c
				}, r.a.createElement(R, null, r.a.createElement(S, null, r.a.createElement(u.a, d)), D(a), a.source && r.a.createElement(b.a, {
					post: a
				}), F(e)), W(e)) : r.a.createElement(k, {
					className: c
				}, r.a.createElement(S, null, r.a.createElement(u.a, d)), D(a), B(e), F(e))
			}));
			const D = e => r.a.createElement(I, {
					isCrosspost: !0,
					post: e,
					shouldLinkWrap: !0,
					size: p.b.Small
				}),
				B = e => {
					const {
						mediaProps: t,
						post: s
					} = e, n = {
						...t,
						post: s,
						crosspost: t.post
					};
					return r.a.createElement("div", null, r.a.createElement(m.a, y({}, n, {
						className: g.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				F = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(N, null, r.a.createElement(T, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(P, null), r.a.createElement(T, null, U(e)))
				},
				U = e => {
					const {
						post: t,
						shouldOpenPostInNewTab: s
					} = e, {
						numComments: o
					} = t;
					return r.a.createElement(i.a, {
						"data-click-id": "comments",
						to: Object(c.a)(t.permalink, !0),
						target: s ? "_blank" : void 0
					}, n.fbt._({
						"*": "{comment count} comments",
						_1: "1 comment"
					}, [n.fbt._plural(o, "comment count", Object(l.b)(o))], {
						hk: "xPYWL"
					}))
				},
				W = e => r.a.createElement(A, null, r.a.createElement(f.b, {
					post: e.post
				}))
		},
		"./src/reddit/components/Econ/Audio/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Audio/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Audio/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			t.a = Object(n.a)({
				resolved: {},
				chunkName: () => "index",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("index~reddit-components-Econ-Prediction"), s.e("index")]).then(s.bind(null, "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/Econ/Prediction/TournamentPostBody/index.tsx"
				}
			})
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2y7BouacdnDeKNuREDVkim",
				title: "KaBtU0qanIOVW0UniJKIe",
				label: "VmuxKqetMFPty4Vt4EAOj",
				participants: "_331K_coiMcnNskYgCaneWt",
				badge: "_29aHDAbliwom5yyuyhXsFc",
				live: "_15J6TjGStJy2YuJAIf8TW4",
				ended: "_3K1ErD5uCGRM98kPQaJ_Nv",
				awards: "_3jKFKIS1X6GZ6MOcUdAy08"
			}
		},
		"./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return h
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), u = e => {
				let {
					participantsCount: t
				} = e;
				return m._({
					"*": "· {total participated users} players",
					_1: "· {total participated users} player"
				}, [m._param("total participated users", Object(l.b)(t)), m._plural(t)], {
					hk: "1yrPLH"
				})
			};
			var p = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.m.less"),
				b = s.n(p);
			const {
				fbt: f
			} = s("./node_modules/fbt/lib/FbtPublic.js"), h = e => {
				let {
					post: t
				} = e;
				const s = t.predictionTournament,
					o = s.status === d.a.Live,
					l = s.status === d.a.Closed,
					m = Object(a.e)(e => Object(c.U)(e, {
						postId: t.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == m ? void 0 : m.displayText), o && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, f._("Live", null, {
					hk: "1G2P1W"
				})), l && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, f._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && r.a.createElement(u, {
					participantsCount: s.totalParticipantsCount
				}), r.a.createElement(i.a, {
					className: b.a.awards,
					thing: t
				})), r.a.createElement("h3", {
					className: b.a.title
				}, s.name))
			}
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "c", (function() {
				return _
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				i = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				m = s.n(l);
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let t;
				switch (e) {
					case c.g.AntiEvilOps:
					case c.g.AutomodFiltered:
					case c.g.CommunityOps:
					case c.g.ContentTakedown:
					case c.g.CopyrightTakedown:
					case c.g.Reddit:
						t = a.a;
						break;
					case c.g.AuthorDeleted:
					case c.g.Author:
						t = d.b;
						break;
					case c.g.Moderator:
						t = i.a;
						break;
					default:
						t = a.a
				}
				return r.a.createElement(t, {
					className: m.a.icon
				})
			}, b = e => {
				let t;
				switch (e) {
					case c.g.AntiEvilOps:
					case c.g.AutomodFiltered:
					case c.g.CommunityOps:
					case c.g.ContentTakedown:
					case c.g.CopyrightTakedown:
					case c.g.Reddit:
						t = "clear_fill";
						break;
					case c.g.AuthorDeleted:
					case c.g.Author:
						t = "delete_fill";
						break;
					case c.g.Moderator:
						t = "mod_fill";
						break;
					default:
						t = "clear_fill"
				}
				return t
			}, f = () => u._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [u._param("=User Agreement", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, u._("User Agreement", null, {
				hk: "3MHgRl"
			}))), u._param("=Content Policy", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, u._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), h = () => u._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [u._param("=User Agreement", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, u._("User Agreement", null, {
				hk: "yMHtU"
			}))), u._param("=Content Policy", r.a.createElement("a", {
				className: m.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, u._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			}), O = (e, t) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return u._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "2ZqyRT"
						});
					case c.g.Author:
						return u._("Sorry, this post was removed by the person who originally posted it.", null, {
							hk: "4IRCN"
						});
					case c.g.AuthorDeleted:
						return u._("Sorry, this post was deleted by the person who originally posted it.", null, {
							hk: "4emmIp"
						});
					case c.g.AutomodFiltered:
						return u._("Post is awaiting moderator approval.", null, {
							hk: "wdGOr"
						});
					case c.g.CommunityOps:
						return u._("Sorry, this post was removed by Reddit's Community team.", null, {
							hk: "3fs5lF"
						});
					case c.g.ContentTakedown:
						return u._("Sorry, this post was removed by Reddit.", null, {
							hk: "3XSuKc"
						});
					case c.g.CopyrightTakedown:
						return u._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
							hk: "1TbEDT"
						});
					case c.g.Moderator:
						return u._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [u._param("subredditName", t)], {
							hk: "12NWKq"
						});
					case c.g.Reddit:
						return u._("Sorry, this post was removed by Reddit's spam filters.", null, {
							hk: "10ItEu"
						});
					default:
						return u._("Sorry, this post has been removed", null, {
							hk: "11sG9V"
						})
				}
			}, x = (e, t) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return r.a.createElement(f, null);
					case c.g.AuthorDeleted:
					case c.g.Author:
						return u._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case c.g.AutomodFiltered:
						return u._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [u._param("=[subreddit name]", r.a.createElement("a", {
							className: m.a.link,
							href: `${n.a.redditUrl}/r/${t}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, u._("{subreddit name}", [u._param("subreddit name", `r/${t}`)], {
							hk: "2o22vl"
						})))], {
							hk: "3dxuEW"
						});
					case c.g.CommunityOps:
						return u._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
							hk: "uPiHS"
						});
					case c.g.ContentTakedown:
						return r.a.createElement(h, null);
					case c.g.CopyrightTakedown:
						return u._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "2e8fhi"
						});
					case c.g.Moderator:
						return u._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
							hk: "QXZPk"
						});
					case c.g.Reddit:
					default:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3vUmEz"
						})
				}
			}, v = (e, t, s) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return u._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "3a8CyR"
						});
					case c.g.Author:
						return u._("This post was removed by the person who originally posted it.", null, {
							hk: "2lyUgL"
						});
					case c.g.AuthorDeleted:
						return u._("This post was deleted by the person who originally posted it.", null, {
							hk: "16LeiH"
						});
					case c.g.AutomodFiltered:
						return u._("This post was reported by automod, and is waiting for your review.", null, {
							hk: "2E46dR"
						});
					case c.g.CommunityOps:
						return u._("This post was removed by Reddit admin, u/{username}.", [u._param("username", t)], {
							hk: "34nHWu"
						});
					case c.g.ContentTakedown:
						return u._("This post was removed by Reddit.", null, {
							hk: "3uR3iw"
						});
					case c.g.CopyrightTakedown:
						return u._("This post was removed by Reddit's Legal Operations team.", null, {
							hk: "Ukfj"
						});
					case c.g.Moderator:
						return u._("This post was removed by r/{subredditName} moderator, u/{username}.", [u._param("subredditName", s), u._param("username", t)], {
							hk: "270bcn"
						});
					case c.g.Reddit:
						return u._("This post was removed by Reddit's spam filters.", null, {
							hk: "1k3lsh"
						});
					default:
						return u._("This post was removed by Reddit's spam filters.", null, {
							hk: "3oxS8r"
						})
				}
			}, _ = e => {
				switch (e) {
					case c.g.AntiEvilOps:
						return r.a.createElement(f, null);
					case c.g.AuthorDeleted:
					case c.g.Author:
						return u._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
							hk: "2KZLgT"
						});
					case c.g.AutomodFiltered:
						return u._("It won’t show up in your community feed until you or another moderator approve it.", null, {
							hk: "2X5ECb"
						});
					case c.g.CommunityOps:
						return u._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [u._param("=just ask", r.a.createElement("a", {
							className: m.a.link,
							href: `${n.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, u._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case c.g.ContentTakedown:
						return r.a.createElement(h, null);
					case c.g.CopyrightTakedown:
						return u._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "7jiV"
						});
					case c.g.Moderator:
						return u._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
							hk: "22qJOB"
						});
					case c.g.Reddit:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3S3oDL"
						});
					default:
						return u._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "uKfHK"
						})
				}
			}
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, s) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/LargePost/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RYN-7H8gYctjOQeL8p2Q7",
				topCompactPost: "_34QdMmLlbOcjhKm_jp-r3s",
				bottomCompactPost: "_2IWrSJK7OQ27rTgV_N2Zu4",
				creatorStatsContainer: "_29kkIwCUHX4r6IdznhyYEE",
				shouldShowOverflow: "_24r9i5ZTqf6P77tAstM-O3",
				shouldUseRoundedBorder: "_3LGrZR10DLu8LvoWRwzdHL",
				backgroundWrapper: "_11R7M_VOgKO1RJyRSRErT3",
				isEvent: "_3js7RHbLSHKV13qUFCVIhb",
				flatListContainer: "_1ixsU4oQRnNfZ91jhBU74y",
				noProposal: "_3KYCJ3N4w1YmvpFMo_3zcn",
				postMediaWrapper: "STit0dLageRsa2yR4te_b",
				postTitle: "_3wiKjmhpIpoTE2r5KCm2o6",
				adSupplementaryText: "DUmvFvjh1QvOsvx-YlMOO",
				proposal: "_2dkCPUHQTdBWU2B0dYnkRb",
				mHasNotVoted: "_5iUKicC_Y0zWFXvBBtVQJ",
				mGAPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mGaPoll: "_3vfQznpPCQGyjXV6AB0vmi",
				mPollIsClosed: "_3sj79JhIvASSGVklMeKgTl",
				adLinkWrapper: "_115kZaIAhrTbhLHOXtz01X",
				adsGalleryDisplayLink: "_3g19_IiwClMjxmNOrShwZw",
				horizontalVotes: "uFwpR-OdmueYZxdY_rEDX",
				modModeBannerWrapper: "_2-DmB4WujtcouWxnfbaGXw",
				liveLabel: "_1HHtbJesYWFlnffF_u9U5U",
				realtimeAnimation: "AtOuz7HaZcKodxvKABuOw",
				realtimeFade: "Uuedk2mN8afhHTXUH825B",
				isNightMode: "_1Qs6zz6oqdrQbR7yE_ntfY",
				realtimeFadeNight: "hjNeLkbGFHNdcoj6SGxE0",
				realtimeUpdated: "_2U6P_aTp-ha87x11OgMyff"
			}
		},
		"./src/reddit/components/LargePost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "RelatedCommunitiesRecommendationsUnit", (function() {
				return Ke
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				c = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				m = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				u = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/Econ/Audio/async.ts"),
				f = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				O = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				x = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/hooks/useTracking.ts"),
				_ = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				y = s("./src/reddit/selectors/activeModalId.ts"),
				j = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				C = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				I = s("./src/lib/ads/index.ts"),
				N = s("./src/lib/classNames/index.ts"),
				T = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				P = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				w = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				R = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				A = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				M = s("./src/reddit/components/BoostPost/index.ts"),
				L = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				D = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				B = s("./src/reddit/components/CreatorStats/loader.tsx"),
				F = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				U = s("./src/reddit/components/Flatlist/index.tsx"),
				W = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				H = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				V = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				K = s("./src/reddit/components/ModModeReports/index.tsx"),
				G = s("./src/reddit/components/ModModeReports/helpers.ts"),
				q = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				z = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				Q = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				Y = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				J = s("./src/reddit/components/PostContainer/index.tsx"),
				Z = s("./src/reddit/components/PostLeftRail/index.tsx"),
				X = s("./src/reddit/components/PostMedia/index.tsx"),
				$ = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				ee = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				te = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				se = s.n(te);
			const {
				fbt: ne
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var oe = () => o.a.createElement("div", {
					className: se.a.container
				}, o.a.createElement(ee.a, {
					className: se.a.pinnedIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: se.a.metaText
				}, ne._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				re = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ae = s("./src/reddit/components/PostTitle/index.tsx"),
				ie = s("./src/reddit/components/PostTopLine/index.tsx"),
				de = s("./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx"),
				ce = s("./src/reddit/components/SourceLink/index.tsx"),
				le = s("./src/reddit/constants/postLayout.ts"),
				me = s("./src/reddit/contexts/InsideOverlay.tsx"),
				ue = s("./src/reddit/contexts/PageLayer/index.tsx"),
				pe = s("./src/reddit/contexts/Post/index.tsx"),
				be = s("./src/reddit/helpers/isCrosspost.ts"),
				fe = s("./src/reddit/helpers/path/index.ts"),
				he = s("./src/reddit/helpers/postEvent.ts"),
				Oe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				xe = s.n(Oe),
				ve = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				_e = s("./src/reddit/hooks/useClickSourceData.ts"),
				ge = s("./src/reddit/models/Audio/index.ts"),
				Ee = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				ye = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				je = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Ce = s("./src/reddit/constants/experiments.ts"),
				ke = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Se = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const Ie = Object(i.a)(k.M, e => e.some(Se.c)),
				Ne = Object(i.a)(Ie, e => e),
				Te = (e, t) => Object(ke.c)(e, {
					experimentName: Ce.xd,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && Ne(e, {
							listingKey: s
						})
					}
				});
			var Pe = s("./src/reddit/selectors/experiments/index.ts");

			function we(e) {
				return e === Ce.Df.Minimalist || e === Ce.Df.Description || e === Ce.Df.HotnessSignals
			}
			var Re = s("./src/reddit/selectors/modQueue.ts"),
				Ae = s("./src/reddit/selectors/postFlair.ts"),
				Me = s("./src/reddit/selectors/i18n/index.ts"),
				Le = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				De = s("./src/reddit/components/LargePost/index.m.less"),
				Be = s.n(De);

			function Fe() {
				return (Fe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Ue = e => {
					let {
						className: t,
						disableVisited: s,
						children: n,
						...r
					} = e;
					return o.a.createElement(P.a, Fe({}, r, {
						className: Object(N.a)(t, Be.a.styledLink, {
							[Be.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				We = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(k.M)(e, {
						listingKey: s
					}) : void 0
				},
				He = Object(r.b)(() => Object(i.c)({
					autoplayPref: S.d,
					isModQueueDisplayEnabled: e => Object(Re.b)(e, !0),
					activeModalId: y.a,
					hideNSFWPref: S.H,
					flairStyleTemplate: ue.Y,
					isBlurredPreview: je.b,
					isCurrentUserProfilePost: k.l,
					isLoggedIn: S.S,
					isActive: k.j,
					moderatorPermissions: C.m,
					modModeEnabled: ue.W,
					posts: We,
					postHeightVariant: Te,
					shouldShowNsfwListingBelow: Me.b,
					showEditFlair: Ae.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(C.i)(e, s.id)
					},
					isOptionalTextEnabled: Ee.a,
					showCTAExperimentDesign: j.a,
					isUpdatedContent: (e, t) => {
						let {
							postId: s
						} = t;
						var n, o;
						return !!(null === (o = null === (n = e.features) || void 0 === n ? void 0 : n.realtimeModqueue) || void 0 === o ? void 0 : o.updated.includes(s))
					},
					showRealtimeUpdateAnimation: (e, t) => {
						let {
							postId: s
						} = t;
						var n;
						return (null === (n = e.features) || void 0 === n ? void 0 : n.realtimeUpdateAnimationId) === s
					},
					isNightMode: S.fb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === E.a.upvoted ? Object(u.ib)(s) : Object(u.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(u.eb)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				Ve = o.a.memo(e => {
					const {
						handlePostLinkClick: t,
						postPermalink: s,
						disableVisited: n,
						shouldOpenPostInNewTab: r,
						shouldStylePostAfterVisitLink: a,
						children: i
					} = e;
					return a ? o.a.createElement(Ue, {
						"data-click-id": "body",
						target: r ? "_blank" : void 0,
						disableVisited: n,
						to: s,
						onClick: t
					}, e.children) : o.a.createElement(o.a.Fragment, null, i)
				}),
				Ke = e => {
					const {
						isEnabled: t,
						variant: s
					} = Object(r.e)(e => (e => {
						const t = Object(ke.c)(e, {
							experimentEligibilitySelector: Pe.e,
							experimentName: Ce.Lc
						}) || Ce.V.Control1;
						return {
							isEnabled: we(t),
							variant: t
						}
					})(e), r.c);
					return t ? o.a.createElement(de.b, Fe({}, e, {
						variant: s,
						pageType: de.a.Home
					})) : null
				},
				Ge = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: i,
						currentUser: p,
						eventFactory: E,
						flairStyleTemplate: y,
						forceLoadMedia: j,
						hideNSFWPref: C,
						hostPostData: k,
						imageGalleryCurrentItem: P,
						inSubredditOrProfile: ee = !1,
						isBlurredPreview: te,
						isCommentsPage: se,
						isCurrentUserProfilePost: ne,
						isFrontpage: de,
						isGalleryTileLayoutDefault: me,
						isModWithUserNotesPermissions: pe,
						isLoggedIn: Oe,
						isOverlay: Ee,
						isTopicPage: je,
						isCommentCountAnimationEnabled: ke,
						isVoteCountAnimationEnabled: Se,
						isCountAnimShadowTestEnabled: Ie,
						listingIndex: Ne,
						listingKey: Te,
						moderatorPermissions: Pe,
						modModeEnabled: we,
						onClickPost: Re,
						onIgnoreReports: Ae,
						onOpenReportsDropdown: Me,
						post: De,
						postHeightVariant: Fe,
						scrollerItemRef: Ue,
						shouldShowGalleryTileOption: We,
						shouldShowInsightsButton: He,
						shouldShowNsfwListingBelow: Ge,
						showEditFlair: qe,
						subredditOrProfile: ze,
						userIsOp: Qe,
						postId: Ye,
						postIds: Je,
						onceInViewport: Ze,
						isOptionalTextEnabled: Xe,
						showCTAExperimentDesign: $e,
						isModQueueDisplayEnabled: et,
						showRealtimeUpdateAnimation: tt,
						isUpdatedContent: st,
						isNightMode: nt,
						onSubscribe: ot = (() => {})
					} = e, rt = Object(v.a)(), at = Object(ue.ib)(), it = Object(r.e)(e => Object(ue.G)(e, {
						pageLayer: at
					})), dt = !!e.redditStyle || !!e["data-redditstyle"], ct = dt ? void 0 : y, lt = Object(l.a)(Pe), mt = we && lt, ut = Object(d.a)(Pe), pt = Object(c.a)(Pe), bt = Object(G.c)(De), ft = Object(V.a)(De), ht = !!De.media && De.media.type === _.o.RTJSON, Ot = Qe && ht, xt = s ? s - Z.a : void 0, vt = !!De.recommendationContext, _t = !(de && Oe || je) || vt && Oe, gt = (e => e === Ce.tf.OnlyTitles)(Fe) && !Object(be.a)(De), Et = (e => e === Ce.tf.MediumHeight)(Fe) && !Object(be.a)(De), yt = (e => {
						var t;
						const {
							post: s,
							postIds: n,
							posts: o
						} = e;
						if (!Object(g.v)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = n && 0 === n.indexOf(s.id),
							a = n && 1 === n.indexOf(s.id),
							i = o && o[1] && Object(g.v)(o[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: a,
							showPinnnedHeader: r
						}
					})(e), jt = Object(r.d)(), Ct = Object(r.e)(ye.b), kt = Object(r.e)(ye.c), St = Object(r.e)(S.lb), It = Object(_e.a)(), Nt = De.permalink, Tt = e.isCommentPermalink ? Object(fe.b)(Nt) : Object(T.a)(Nt, void 0, It), Pt = !!(null == k ? void 0 : k.shouldShowLinkedPosts), wt = (!ee || Pt || Ge) && !De.isSponsored, Rt = Object(I.t)(De, P), At = Object(n.useRef)(null), Mt = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Ze || Ze(Ne))
						})
					}, [Ze, Ne]);
					Object(x.a)(At, Mt);
					const [Lt, Dt] = Object(n.useState)(!1), Bt = Object(n.useCallback)(() => {
						Dt(!Lt), rt(Object(ve.d)(Ye))
					}, [Lt, rt, Ye]), Ft = !!(te && (null == ze ? void 0 : ze.isNSFW)), Ut = Object(n.useRef)({
						renderingObjectInfo: De
					}), Wt = Object(n.useCallback)(e => {
						(Ct || kt) && (e.preventDefault(), jt(Object(u.Z)(Object(fe.b)(De.permalink), De.id)))
					}, [jt, Ct, kt, De.id, De.permalink]), Ht = De && De.media && (De.media.type === _.o.TEXT || De.media.type === _.o.RTJSON), Vt = Object(g.r)(De), [Kt, Gt] = Object(n.useState)(!1);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(J.b, {
						className: Object(N.a)(Be.a.container, i, xe.a.largeAndMediumPostStyles, xe.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[xe.a.mUseRedditTheme]: dt,
							[Be.a.topCompactPost]: yt && yt.hasTopCompactPostStyles,
							[Be.a.bottomCompactPost]: yt && yt.hasBottomCompactPostStyles,
							[Be.a.shouldShowOverflow]: He,
							[Be.a.realtimeAnimation]: tt,
							[Be.a.realtimeUpdated]: st,
							[Be.a.isNightMode]: nt
						}),
						isOverlay: Ee,
						style: et && (tt || st) ? nt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(m.b)(e.flairStyleTemplate),
						post: De,
						onClick: Re,
						eventFactory: E
					}, o.a.createElement("div", {
						ref: At
					}), o.a.createElement(re.a, {
						model: De,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: Ie,
						isVoteCountAnimation: Se,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: ct,
						redditStyle: dt,
						postId: Ye
					}), o.a.createElement(Y.a, {
						className: Object(N.a)(Be.a.backgroundWrapper, {
							[Be.a.isEvent]: Object(he.a)(De),
							[Be.a.shouldUseRoundedBorder]: He,
							[Be.a.realtimeAnimation]: tt,
							[Be.a.realtimeUpdated]: st,
							[Be.a.isNightMode]: nt
						}),
						"data-click-id": "background",
						flairStyleTemplate: ct,
						post: De,
						redditStyle: dt,
						overrideBackgroundColor: et && (tt || st) ? nt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, o.a.createElement(F.a, {
						post: De
					}), yt && yt.showPinnnedHeader && o.a.createElement(oe, null), Object(a.c)(De) && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.a, {
						post: De
					}), o.a.createElement(f.a, {
						post: De
					})), !Object(a.c)(De) && o.a.createElement(o.a.Fragment, null, Vt && o.a.createElement(Q.a, {
						content: De.recommendationContext.content,
						layout: le.g.Large,
						post: De
					}), o.a.createElement(ie.a, {
						className: Be.a.postTopLine,
						hideNSFWPref: C,
						hostPostData: k,
						iconClassName: Be.a.postTopLineIcon,
						inSubredditOrProfile: ee,
						isCommentsPage: !!se,
						isCompactPinnedPost: !!yt,
						isCurrentUserProfilePost: ne,
						isModWithUserNotesPermissions: pe,
						isOverlay: !!Ee,
						isTopicPage: !!je,
						listingKey: Te,
						post: De,
						shouldShowSubscribeButton: _t,
						showSubreddit: wt,
						showSubredditIcon: !0,
						subredditOrProfile: ze,
						onSubscribed: () => {
							Gt(!0), ot()
						}
					}), o.a.createElement(ae.c, {
						className: Be.a.postTitle,
						post: De,
						redditStyle: dt,
						size: ae.b.Large,
						titleColor: ct && ct.postTitleColor,
						isOverlay: Ee
					}), o.a.createElement(A.a, {
						className: Be.a.adSupplementaryText,
						post: De,
						size: ae.b.Large
					}), De.source && !De.isSponsored && !Ft && o.a.createElement(o.a.Fragment, null, o.a.createElement(ce.a, {
						className: Be.a.sourceLink,
						post: De
					}), Xe && De.media && De.media.type !== _.o.TEXT && De.media.type !== _.o.IMAGE && De.media.richtextContent && o.a.createElement(O.a, {
						content: De.media.richtextContent,
						rtJsonElementProps: Ut.current
					}))), o.a.createElement("div", {
						className: Be.a.postMediaWrapper
					}, !yt && o.a.createElement(Ve, {
						handlePostLinkClick: Wt,
						postPermalink: Tt,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: St,
						shouldStylePostAfterVisitLink: Ht
					}, o.a.createElement(X.a, {
						isGalleryTileLayoutDefault: me,
						isListing: !0,
						isMediumHeight: Et,
						isNotCardView: !!Ee,
						isTitleOnly: gt,
						showCentered: !0,
						flairStyleTemplate: ct,
						post: De,
						availableWidth: xt,
						shouldLoad: j,
						scrollerItemRef: Ue,
						autoplayPref: t,
						shouldShowGalleryTileOption: We
					}))), Object(I.v)(De, P) && o.a.createElement(w.a, {
						className: Be.a.adLinkWrapper,
						ctaExperimentDesign: $e && "card"
					}, o.a.createElement(R.a, {
						post: De,
						adLinkContent: Rt,
						ctaExperimentDesign: $e && "card"
					})), we && lt && ft && !et && o.a.createElement("div", {
						className: Be.a.modModeBannerWrapper
					}, o.a.createElement(H.a, {
						thing: De
					})), we && lt && bt && !et && o.a.createElement("div", {
						className: Be.a.modModeBannerWrapper
					}, o.a.createElement(K.a, {
						onIgnoreReports: Ae,
						reportable: De
					})), Object(ge.b)(De) && o.a.createElement(b.a, null), o.a.createElement(W.d, null), et && o.a.createElement(z.a, {
						post: De
					}), De.discussionType === g.b.Chat && o.a.createElement(Le.a, {
						postId: De.id,
						className: Be.a.liveLabel
					}), o.a.createElement("div", {
						className: Be.a.flatListContainer
					}, o.a.createElement(D.a, {
						className: Be.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: ct,
						model: De,
						onVoteClick: e.handleVote
					}), !De.isSurveyAd && (et ? o.a.createElement(q.a, {
						content: De,
						listingKey: Te,
						hostPostData: k
					}) : o.a.createElement(U.c, {
						currentUser: p,
						hasModFlairPerms: ut,
						hasModFullPerms: pt,
						hasModPostPerms: lt,
						hostPostData: k,
						isCommentCountAnimation: ke,
						isCountAnimShadowTestEnabled: Ie,
						isLargePost: !0,
						isOverlay: !!Ee,
						listingKey: Te,
						modModeEnabled: we,
						onClickInsightsButton: Bt,
						onIgnoreReports: Ae,
						onOpenReportsDropdown: Me,
						post: De,
						shouldShowInsightsButton: He,
						showEditPost: Ot,
						showEditFlair: qe,
						useFlatlistBreakpoints: Object($.b)({
							editPost: !1,
							save: !mt,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))), ze && Lt && o.a.createElement(B.a, {
						className: Be.a.creatorStatsContainer,
						post: De,
						subreddit: ze,
						isOwnProfileStats: !0
					})), (Object(g.s)(De) || it) && Object(M.e)(De, p) && o.a.createElement(M.a, {
						postId: Ye,
						user: p
					}), de && o.a.createElement(L.a, {
						post: De,
						postIds: null != Je ? Je : [],
						subredditId: null == ze ? void 0 : ze.id
					})), de && Vt && Kt && ze && o.a.createElement(Ke, {
						postId: De.id,
						subredditId: ze.id,
						subredditDisplayText: ze.displayText,
						onDismiss: () => {
							Gt(!1)
						}
					}))
				});
			Ge.displayName = "LargePostMemoized";
			t.default = Object(pe.b)(He(Object(me.b)(Ge)))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = s("./src/reddit/helpers/overlay/index.ts");

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function c(e) {
				const {
					children: t,
					className: s,
					to: n,
					...r
				} = e, c = Object(i.b)(n);
				return o.a.createElement(a.a, d({
					className: s,
					to: c
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...s
				} = e, n = t ? c : r.a;
				return o.a.createElement(n, l({}, s, {
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}), s.children)
			}
		},
		"./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return v
			}));
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/LiveChatActiveUsers/index.m.less"),
				d = s.n(i);
			const c = e => {
				let {
					userCount: t
				} = e;
				return a.a.createElement("span", {
					className: d.a.liveChatActiveUsers
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
			const f = e => {
				let {
					userCount: t = 0,
					className: s
				} = e;
				return a.a.createElement("div", {
					className: Object(n.a)(b.a.liveParticipation, s)
				}, a.a.createElement(u, null), a.a.createElement(c, {
					userCount: t
				}))
			};
			var h = s("./node_modules/react-redux/es/index.js"),
				O = s("./src/reddit/selectors/chat.ts"),
				x = s("./src/reddit/selectors/experiments/chat.ts");
			const v = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(h.e)(e => Object(O.a)(e, t));
				return Object(h.e)(x.f) ? a.a.createElement(f, {
					userCount: n,
					className: s
				}) : null
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less": function(e, t, s) {
			e.exports = {
				postStats: "_1jp_fxyDvcILOETMxKs9aZ"
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				i = s.n(a);
			const d = e => {
				let {
					post: t
				} = e;
				var s;
				return r.a.createElement("p", {
					className: i.a.postStats
				}, n.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [n.fbt._plural(t.numComments, "number")], {
					hk: "wt9T0"
				}), " • ", n.fbt._({
					"*": "{number} awards",
					_1: "1 award"
				}, [n.fbt._plural((null === (s = t.allAwardings) || void 0 === s ? void 0 : s.length) || 0, "number")], {
					hk: "1ldRJO"
				}))
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return U
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/models/ModQueueTrigger/index.ts"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				m = s("./src/reddit/constants/things.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const p = e => t => ({
					source: "moderator",
					action: "click",
					noun: e.isCorrect ? "filter_is_correct" : "filter_is_incorrect",
					...b(e, t)
				}),
				b = (e, t) => {
					const s = e.contentId.startsWith(m.a) ? e.contentId : "",
						n = e.contentId.startsWith(m.b) ? e.contentId : "";
					return {
						comment: s ? Object(u.i)({
							state: t,
							commentId: s
						}) : null,
						post: n ? Object(u.L)(t, n) : null,
						filter: {
							reference: {
								name: e.filterName
							}
						},
						subreddit: Object(u.pb)(t, e.contentId),
						...u.p(t)
					}
				};
			var f = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				h = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/constants/localStorage.ts")),
				O = s("./src/reddit/hooks/useLocalStorage.ts"),
				x = s("./src/reddit/hooks/useUserContext.ts");
			const v = () => {
				var e, t;
				const s = `${null!==(t=null===(e=Object(x.a)().currentUser)||void 0===e?void 0:e.id)&&void 0!==t?t:""}-${h.b.SAFETY_FILTER_FEEDBACK_CONTENT_IDS}`,
					[n, o] = Object(O.a)(s, []);
				return {
					contentIds: new Set(n),
					addContentId: e => {
						const t = [...n, e];
						t.length > 50 && t.shift(), o(t)
					}
				}
			};
			var _ = s("./src/reddit/hooks/useTracking.ts");
			const g = {
				threshold: [.5]
			};
			var E = e => {
					const t = Object(n.useRef)(null),
						s = Object(_.a)(),
						{
							contentIds: r
						} = v(),
						a = Object(n.useCallback)(t => {
							t.forEach(t => {
								let {
									intersectionRatio: n
								} = t;
								n >= .5 && !r.has(e.contentId) && s((e => t => ({
									source: "modqueue",
									action: "view",
									noun: "hitl_filter_feedback",
									...b(e, t)
								}))({
									...e
								}))
							})
						}, [s, e, r]);
					return Object(f.a)(t, a, g), o.a.createElement("div", {
						ref: t
					}, e.children)
				},
				y = s("./src/reddit/constants/experiments.ts"),
				j = s("./src/reddit/hooks/useExperimentVariant.ts"),
				C = s("./src/reddit/hooks/useMounted.ts"),
				k = s("./src/reddit/components/ModQueueActionBar/helpers.ts"),
				S = s("./node_modules/lodash/debounce.js"),
				I = s.n(S),
				N = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				T = s("./src/reddit/hooks/useInfoTextTooltip.ts");
			const P = e => {
				let {
					confidence: t,
					children: s
				} = e;
				const n = Object(T.a)({
						placement: "top-end"
					}),
					i = I()(n.hide, 500);
				return o.a.createElement("div", {
					onMouseEnter: () => {
						n.show(), i.cancel()
					},
					onMouseLeave: i
				}, o.a.createElement("button", {
					onClick: e => {
						e.stopPropagation(), n.toggle()
					},
					className: "text-12 text-neutral-content mr-sm hover:underline",
					ref: n.target.ref
				}, o.a.createElement("span", {
					className: Object(a.a)("inline-block mr-2xs h-xs w-xs rounded-full", {
						"bg-alert-caution": t === c.a.LOW,
						"bg-success-background": t === c.a.HIGH
					})
				}), function(e) {
					switch (e) {
						case c.a.LOW:
							return r.fbt._("Low Confidence", null, {
								hk: "1woV5A"
							});
						case c.a.HIGH:
							return r.fbt._("High Confidence", null, {
								hk: "2UzCkt"
							})
					}
				}(t)), o.a.createElement(N.a, {
					popperProps: n.popperProps,
					arrowProps: n.arrowProps,
					visible: n.visible,
					className: "max-w-[230px] font-semibold text-12"
				}, o.a.createElement("div", {
					className: "py-xs flex gap-x-xs",
					onClick: e => e.stopPropagation()
				}, o.a.createElement(d.a, {
					name: "info_fill"
				}), o.a.createElement("div", null, s))))
			};
			var w = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/SafetyFilterFeedbackPrompt.m.less"),
				A = s.n(R);
			const M = e => {
				let {
					filterName: t,
					contentId: s
				} = e;
				const a = Object(w.b)(),
					{
						addContentId: i
					} = v(),
					[d, c] = Object(n.useState)(!1),
					l = e => t => {
						t.stopPropagation(), i(s), c(!0), a(e)
					};
				return o.a.createElement("div", {
					className: A.a.feedbackPromptContainer
				}, o.a.createElement("p", {
					className: A.a.feedbackPrompt
				}, d ? r.fbt._("Thanks for your feedback!", null, {
					hk: "3ImVsP"
				}) : r.fbt._("Was this accurate?", null, {
					hk: "370juX"
				})), !d && o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					"aria-label": "feedback response yes",
					className: A.a.feedbackPromptButton,
					onClick: l(p({
						isCorrect: !0,
						filterName: t,
						contentId: s
					}))
				}, r.fbt._("Yes", null, {
					hk: "QULVC"
				})), o.a.createElement("span", {
					className: A.a.feedbackButtonMiddot
				}, "·"), o.a.createElement("button", {
					"aria-label": "feedback response no",
					className: A.a.feedbackPromptButton,
					onClick: l(p({
						isCorrect: !1,
						filterName: t,
						contentId: s
					}))
				}, r.fbt._("No", null, {
					hk: "4zGto5"
				}))))
			};
			var L = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				D = s.n(L);
			const B = e => {
					if (e) try {
						return JSON.parse(e)
					} catch {
						return
					}
				},
				F = e => {
					let {
						reasonRichText: t,
						reason: s,
						feedbackPrompt: n
					} = e;
					const a = Object(C.a)();
					if (n) {
						if (!a) return o.a.createElement("p", {
							className: D.a.reasonText
						}, r.fbt._("Loading filter reason…", null, {
							hk: "K3Ipd"
						}));
						if (!n.feedbackSent) return o.a.createElement(E, n, o.a.createElement(M, n))
					}
					return t ? o.a.createElement(l.b, {
						content: t,
						rtJsonElementProps: {}
					}) : s ? o.a.createElement("p", {
						className: D.a.reasonText
					}, s) : null
				},
				U = e => {
					let {
						content: t
					} = e;
					const s = Object(j.a)(y.te) === y.Yd,
						{
							contentIds: m
						} = v(),
						u = Object(n.useMemo)(() => {
							var e, n, o, a, d, l;
							const u = [];
							(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== i.l || u.push({
								icon: "bot_fill",
								heading: r.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								})
							});
							for (const i of t.modQueueTriggers || []) switch (i.type) {
								case c.b.AUTOMOD:
									u.push({
										icon: "bot_fill",
										heading: r.fbt._("Blocked by AutoMod", null, {
											hk: "XZuzM"
										}),
										reason: i.message
									});
									break;
								case c.b.SHADOWBANNED_SUBMITTER:
									u.push({
										icon: "ban_fill",
										heading: r.fbt._("Blocked by Automatic Filter", null, {
											hk: "2iaUCM"
										}),
										reason: i.message
									});
									break;
								case c.b.HATEFUL_CONTENT:
									u.push({
										icon: "mod_mode_fill",
										heading: s ? r.fbt._("Blocked for Harassment", null, {
											hk: "1FQFpi"
										}) : r.fbt._("Blocked by Automatic Filter", null, {
											hk: "4vu7uy"
										}),
										reason: i.message,
										feedbackPrompt: s ? {
											filterName: k.b.HarassingContent,
											feedbackSent: m.has(t.id),
											contentId: t.id
										} : void 0
									});
									break;
								case c.b.CROWD_CONTROL:
									u.push({
										icon: "crowd_control",
										heading: r.fbt._("Blocked by Crowd Control", null, {
											hk: "6LNvT"
										}),
										reason: i.message
									});
									break;
								case c.b.BAN_EVASION:
									u.push({
										icon: "ban_fill",
										heading: r.fbt._("Blocked by Ban Evasion Protection", null, {
											hk: "1unYu9"
										}),
										reason: i.message,
										reasonRichText: B(null === (o = null === (n = i.details) || void 0 === n ? void 0 : n.recencyExplanation) || void 0 === o ? void 0 : o.richtext),
										confidence: null === (a = i.details) || void 0 === a ? void 0 : a.confidence,
										confidenceExplanation: B(null === (l = null === (d = i.details) || void 0 === d ? void 0 : d.confidenceExplanation) || void 0 === l ? void 0 : l.richtext)
									})
							}
							return u
						}, [t.modQueueTriggers, t.bannedBy, t.id, s]);
					return o.a.createElement("div", {
						className: D.a.filteredWrapper
					}, u.map((e, t) => {
						const {
							heading: s,
							reason: n,
							icon: r,
							confidence: i,
							confidenceExplanation: c
						} = e;
						return o.a.createElement("div", {
							key: `${s}-${n}-${t}`,
							className: D.a.filteredRow
						}, o.a.createElement(d.a, {
							isFilled: !0,
							name: r,
							className: Object(a.a)(D.a.coloredIcon, D.a.icon)
						}), o.a.createElement("div", {
							className: D.a.statusText
						}, o.a.createElement("div", {
							className: D.a.statusMeta
						}, o.a.createElement("p", {
							className: D.a.status
						}, s), i && c && o.a.createElement(P, {
							confidence: i
						}, o.a.createElement(l.b, {
							className: D.a.tooltipContent,
							content: c,
							rtJsonElementProps: {}
						}))), o.a.createElement(F, e)))
					}))
				}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/SafetyFilterFeedbackPrompt.m.less": function(e, t, s) {
			e.exports = {
				feedbackPromptContainer: "_3RtSyVCC6P8Sf0jcGpvCf-",
				feedbackPrompt: "_32ku9VINzkoa2aCNXzXAdB",
				feedbackPromptButton: "_3xtpwUZ-CWdFHk89lj-iQD",
				feedbackButtonMiddot: "_2urD2Oe4XFQoyHKHwdlc5y"
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "_2qFtoxD1OfFOBkQIQeIP5N",
				opened: "_3kWeXZJizg6u4Rpq5Bx2k6",
				openable: "_1jr1ZpXLdZNEfWwHwMp3UW",
				filteredWrapper: "_1aoTzKKtmlGCr-UYW5QI5O",
				filteredRow: "_eBNIEsnbYySvkxjmpt2P",
				reportedWrapper: "_1rfFSNr23RcUWm7d90DpDo",
				reportMeta: "_32zOxnfn5FxzpA0vNAYP7J",
				ignoreButton: "_3qPfB3L3JEpdPsa2KJ6I6Y",
				ignoreButtonIcon: "_2xeI0-KXBryv89ds5re0ac",
				reported: "_37f_VPQZEbIxZBhfy_wkzt",
				icon: "OYsuhocczx0FWqSu4etye",
				approved: "_3PA1NUdBncNEoWXl9e53aE",
				statusText: "_3trW-r5LnijGIrjgDF1u2M",
				status: "_3Q6W_eSDsN-BhormvQBcRr",
				statusMeta: "_3Qp7V0IlguVisBYUCEDLwX",
				tooltipContent: "_1SLswtlo8BWHAgKgT5Nsj_",
				reasonText: "_7YNYpwZk3KH6oXU4KhoGd",
				snoozabledButton: "_3Rixx0Z51qJ71wGmQ8UtQj",
				userIconWrapper: "_3vnCHVExwDbhdlwSh9BV9k",
				userIcon: "_1O-L18qAEJqcxeYP7bE4mK",
				filteredExplanationIcon: "a13uMv6sihYo-UyNBZDo8",
				snoozableDropdown: "_3L6lZrroGMf7wnI2DFJDJx",
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT",
				caretButton: "_1iROd0ZxfCEcEidNiygaYB",
				caretIcon: "-vF-jMhpa_XhPJ_ntG1Hv",
				userlink: "_2iRjlf0DdO9rVaTZpfwvHA"
			}
		},
		"./src/reddit/components/ModQueueActionBar/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return c
			}));
			var n, o, r = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {})),
			function(e) {
				e.HarassingContent = "harassing_content"
			}(o || (o = {}));
			const c = e => e.isRemoved && (!e.bannedBy || e.bannedBy === r.l) || !e.isRemoved && Object(d.a)(e) ? n.FILTERED : e.isRemoved || Object(a.b)(e) && [i.g.AntiEvilOps, i.g.CommunityOps, i.g.ContentTakedown, i.g.CopyrightTakedown, i.g.Reddit].indexOf(e.removedByCategory) > -1 ? n.REMOVED : e.isSpam ? n.SPAM : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : n.UNMODERATED
		},
		"./src/reddit/components/ModQueueActionBar/index.m.less": function(e, t, s) {
			e.exports = {
				wrapper: "zF_-R5xzOOncUiSyzLSC9",
				actionBar: "NMY-KfFuIWlYboZZZ8EcY",
				overflowButton: "zctszRbdSXb3WEChmk-o9",
				button: "_3W9WNfkd8zxnn_VGjf4UnY",
				approve: "_3mPdPTYWWZwCYwh4wijZvJ",
				icon: "_1H-LK0KAgKuxT0BkJSN-51",
				overflowHeading: "_2DEP4U6JV7ZNOcbW94l3tb",
				dropdownRow: "_1dFDaRKdCA0DGOYecpQXWF"
			}
		},
		"./src/reddit/components/ModQueueActionBar/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Ae
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/modQueue/realtime.ts"),
				c = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				l = s("./src/reddit/components/ReportFlow/new.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				p = s("./src/reddit/helpers/isPost.ts"),
				b = s("./src/reddit/helpers/trackers/modTools.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = s("./src/reddit/hooks/useTracking.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/models/Post/index.ts"),
				_ = s("./src/reddit/actions/comment/moderation.ts"),
				g = s("./src/reddit/actions/modal.ts"),
				E = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/actions/postFlair.ts"),
				j = s("./src/reddit/actions/removalReasons/index.ts"),
				C = s("./src/reddit/selectors/activeModal.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/components/ModQueueActionBar/helpers.ts"),
				I = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				N = s.n(I),
				T = s("./src/lib/classNames/index.ts"),
				P = s("./src/lib/constants/icons.ts"),
				w = s("./src/reddit/actions/gold/modals.ts"),
				R = s("./src/reddit/actions/reportFlow/index.ts"),
				A = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				M = s("./src/reddit/components/OverflowMenu/index.tsx"),
				L = s("./src/reddit/constants/modals.ts"),
				D = s("./src/reddit/controls/Dropdown/Row.tsx"),
				B = s("./src/reddit/helpers/correlationIdTracker.ts"),
				F = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				U = s("./src/reddit/helpers/trackers/gild.ts"),
				W = s("./src/reddit/selectors/comments.ts"),
				H = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				K = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				G = s("./src/devPlatform/constants.ts");
			const q = (e, t) => Object(b.c)(t, e),
				z = (e, t) => e ? t ? n.fbt._("Unlock Comments", null, {
					hk: "zGuti"
				}) : n.fbt._("Lock Comments", null, {
					hk: "1QO9cp"
				}) : t ? n.fbt._("Unlock thread", null, {
					hk: "SqzQU"
				}) : n.fbt._("Lock thread", null, {
					hk: "3drB04"
				});
			var Q = e => {
					let {
						content: t,
						hostPostData: s,
						listingKey: d,
						moderatorPermissions: c
					} = e;
					var l, m;
					const u = Object(O.a)(),
						h = Object(a.d)(),
						v = Object(p.b)(t),
						y = Object(a.e)(V.k),
						j = Object(a.e)(V.P),
						C = Object(a.e)(H.b),
						k = Object(F.a)(c),
						S = v ? f.n : q,
						I = t.authorId === y,
						Q = j && I,
						Y = (null === (l = t.distinguishType) || void 0 === l ? void 0 : l.toLowerCase()) === i.I.ADMIN,
						J = (null === (m = t.distinguishType) || void 0 === m ? void 0 : m.toLowerCase()) === i.I.MODERATOR,
						Z = Object(o.useCallback)(() => {
							const e = v ? E.D : _.c;
							h(e(t.id));
							const s = t.isLocked ? "unlock" : "lock";
							u(v ? S(t.id, s) : Object(b.j)(t.id, s, "mod_menu"))
						}, [S, u, h, t, v]),
						X = Object(o.useCallback)(e => {
							u(Object(f.n)(t.id, e, "post", d, s, void 0))
						}, [u, d, s, t]),
						$ = Object(o.useCallback)(() => {
							var e;
							const s = t.isStickied ? "unsticky" : "sticky";
							v ? (h(Object(E.gb)(t.id)), u(Object(b.n)(s, t.id))) : (h(Object(_.b)(t.id, (null === (e = t.distinguishType) || void 0 === e ? void 0 : e.toLowerCase()) || "", !t.isStickied)), u(Object(b.j)(t.id, s, "mod_menu")))
						}, [u, h, t, v]),
						ee = Object(o.useCallback)(() => {
							v && (h(Object(E.I)(t.id)), u(Object(b.n)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [u, h, t, v]),
						te = Object(o.useCallback)(() => {
							v && (h(Object(E.F)(t.id)), Object(b.n)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [h, t, v]),
						se = Object(o.useCallback)(() => {
							v && (h(Object(g.i)(L.a.CROWD_CONTROL)), h(Object(E.t)(t.id)))
						}, [h, t, v]),
						ne = Object(a.e)(e => Object(W.m)(e, {
							commentId: t.id
						})),
						oe = Object(o.useCallback)(() => {
							const e = v ? t.permalink : ne;
							e && (h(Object(E.C)(e)), v ? X("copy") : u(Object(b.j)(t.id, "share", "mod_menu")))
						}, [X, h, t, v, ne, u]),
						re = Object(o.useCallback)(async () => {
							if (!v) return;
							const e = Object(B.d)(B.a.GildingFlow, !0);
							h(Object(w.d)({
								awardId: null == C ? void 0 : C.id,
								correlationId: e,
								thingId: t.id
							})), u(Object(U.clickGildEvent)(t.id))
						}, [u, h, t, C, v]),
						ae = Object(o.useCallback)(() => {
							h(Object(R.c)(t.id)), v ? X("report") : u(Object(b.j)(t.id, "report", "mod_menu"))
						}, [X, h, t, v, u]),
						ie = Object(o.useCallback)(() => {
							var e;
							v && (h(Object(E.db)(t.id, !t.hidden, !1, !0)), X((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [X, h, t, v]),
						de = Object(o.useCallback)(() => {
							const e = v ? E.S : _.e;
							h(e(t.id, !0)), u(v ? Object(b.n)("spam", t.id) : Object(b.j)(t.id, "remove_as_spam", "mod_menu"))
						}, [u, h, t, v]),
						ce = Object(o.useCallback)(e => {
							const s = v ? E.u : _.b;
							h(s(t.id, e));
							const n = e === i.I.ADMIN ? "distinguish_as_admin" : e === i.I.MODERATOR ? "distinguish_as_mod" : "undistinguish";
							u(Object(b.j)(t.id, n, "mod_menu"))
						}, [h, t, v, u]);
					return r.a.createElement(M.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: N.a.overflowButton,
						icon: r.a.createElement(x.a, {
							name: P.a.overflow_horizontal,
							isFilled: !0
						})
					}, r.a.createElement("h6", {
						className: Object(T.a)("text-neutral-content-weak", N.a.overflowHeading)
					}, n.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: de
					}, r.a.createElement(x.a, {
						name: P.a.spam
					})), v && r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						displayText: t.isStickied ? n.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : n.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: $
					}, r.a.createElement(x.a, {
						name: t.isStickied ? P.a.unpin : P.a.pin
					}))), r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						onClick: Z,
						displayText: z(v, !!(null == t ? void 0 : t.isLocked))
					}, r.a.createElement(x.a, {
						name: P.a.lock,
						isFilled: null == t ? void 0 : t.isLocked
					})), I && r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						displayText: J ? n.fbt._("Undistinguish as a mod", null, {
							hk: "2Nmjxw"
						}) : n.fbt._("Distinguish as a mod", null, {
							hk: "35wmCr"
						}),
						onClick: () => ce(J ? "" : i.I.MODERATOR)
					}, r.a.createElement(x.a, {
						name: J ? P.a.distinguish_fill : P.a.distinguish
					})), Q && r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						displayText: Y ? n.fbt._("Undistinguish as an admin", null, {
							hk: "BHAJd"
						}) : n.fbt._("Distinguish as an admin", null, {
							hk: "3gaPvB"
						}),
						onClick: () => ce(Y ? "" : i.I.ADMIN)
					}, r.a.createElement(x.a, {
						name: Y ? P.a.distinguish_fill : P.a.distinguish
					})), !v && (Y || J) && I && r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						displayText: t.isStickied ? n.fbt._("Unsticky the comment", null, {
							hk: "18TByd"
						}) : n.fbt._("Sticky the comment", null, {
							hk: "3roZIi"
						}),
						onClick: $
					}, r.a.createElement(x.a, {
						name: t.isStickied ? P.a.unpin : P.a.pin
					})), v && !t.crosspostParentId && r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						onClick: ee,
						displayText: t.isOriginalContent ? n.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : n.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, r.a.createElement(x.a, {
						name: P.a.original
					})), v && r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						onClick: te,
						displayText: t.isNSFW ? n.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : n.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, r.a.createElement(x.a, {
						name: P.a.nsfw
					})), v && k && "subreddit" === t.belongsTo.type && r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: se
					}, r.a.createElement(x.a, {
						name: P.a.crowd_control
					})), r.a.createElement(K.a, {
						contextType: Object(p.a)(t.id) ? G.a.POST : G.a.COMMENT,
						contextData: t,
						moderator: !0,
						isOnModQueueOverflowMenu: !0
					}), r.a.createElement("h6", {
						className: Object(T.a)("text-neutral-content-weak", N.a.overflowHeading)
					}, n.fbt._("Other", null, {
						hk: "2543kN"
					})), r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: oe
					}, r.a.createElement(x.a, {
						name: P.a.share
					})), v && r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						onClick: re,
						displayText: n.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, r.a.createElement(x.a, {
						name: P.a.award
					}), r.a.createElement(A.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: ae
					}, r.a.createElement(x.a, {
						name: P.a.report
					})), v && r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						onClick: ie,
						displayText: t.hidden ? n.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : n.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, r.a.createElement(x.a, {
						name: P.a.hide
					})), r.a.createElement(K.a, {
						contextType: Object(p.a)(t.id) ? G.a.POST : G.a.COMMENT,
						contextData: t,
						moderator: !1,
						isOnModQueueOverflowMenu: !0
					}))
				},
				Y = s("./src/reddit/helpers/trackers/modListing.ts"),
				J = s("./src/config.ts"),
				Z = s("./src/reddit/components/UserIcon/index.tsx"),
				X = s("./src/reddit/helpers/name/index.ts"),
				$ = s("./src/reddit/constants/intlSupport.ts"),
				ee = s("./src/reddit/helpers/graphql/helpers.ts"),
				te = s("./src/reddit/hooks/useLocale.ts");

			function se(e) {
				return new Date(Date.now()).getFullYear() === e.getFullYear()
			}
			var ne = function(e) {
					let {
						date: t,
						...s
					} = e;
					const o = Object(te.a)(),
						a = "string" == typeof t ? Object(ee.g)(t) / i.Xb : t,
						d = new Date(a * i.Xb);
					if (!$.a) return r.a.createElement(r.a.Fragment, null, d.toLocaleString());
					const c = new Intl.DateTimeFormat(o, {
							month: "short",
							day: "numeric",
							year: se(d) ? void 0 : "numeric"
						}),
						l = new Intl.DateTimeFormat(o, {
							minute: "numeric",
							hour: "numeric"
						}),
						m = function(e) {
							const t = new Date(Date.now());
							return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
						}(d) ? n.fbt._("Today", null, {
							hk: "1sZpnp"
						}) : c.format(d),
						u = l.format(d);
					return n.fbt._("{date} at {time}", [n.fbt._param("date", m), n.fbt._param("time", u)], {
						hk: "Ot5zO"
					})
				},
				oe = s("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts"),
				re = s("./src/reddit/components/CCM/ModPreviousActions/index.m.less"),
				ae = s.n(re);
			var ie = e => {
				let {
					className: t,
					modAction: s,
					postOrCommentId: n
				} = e;
				var o, a, i, d, c;
				const l = (null === (o = s.moderatorInfo) || void 0 === o ? void 0 : o.displayName) || "",
					m = (null === (i = null === (a = s.moderatorInfo) || void 0 === a ? void 0 : a.icon) || void 0 === i ? void 0 : i.url) || "",
					u = !!(null === (c = null === (d = s.moderatorInfo) || void 0 === d ? void 0 : d.profile) || void 0 === c ? void 0 : c.isNsfw),
					b = Object(p.a)(n);
				return r.a.createElement("div", {
					className: Object(T.a)(t, ae.a.row)
				}, r.a.createElement("div", {
					className: ae.a.userIconWrapper
				}, r.a.createElement(Z.a, {
					className: ae.a.userIcon,
					iconUrl: m,
					userName: l,
					isNSFW: u
				})), r.a.createElement("div", {
					className: ae.a.details
				}, r.a.createElement("h3", {
					className: ae.a.title
				}, Object(oe.a)(s.action, b ? "SubredditPost" : "")), r.a.createElement("p", {
					className: ae.a.meta
				}, r.a.createElement("a", {
					className: ae.a.userlink,
					href: `${J.a.redditUrl}/user/${l}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(X.e)(l)))), r.a.createElement("span", {
					className: ae.a.time
				}, r.a.createElement(ne, {
					date: s.createdAt
				})))
			};
			var de = e => {
				let {
					className: t,
					reportAction: s
				} = e;
				return r.a.createElement("div", {
					className: Object(T.a)(t, ae.a.row)
				}, r.a.createElement(x.a, {
					isFilled: !0,
					name: "report_fill",
					className: ae.a.icon
				}), r.a.createElement("div", {
					className: ae.a.details
				}, r.a.createElement("h3", {
					className: ae.a.title
				}, n.fbt._("Reported for", null, {
					hk: "pm0ot"
				})), !!s.reason && r.a.createElement("p", {
					className: ae.a.meta
				}, s.reason)), r.a.createElement("span", {
					className: ae.a.time
				}, r.a.createElement(ne, {
					date: s.createdAt
				})))
			};
			var ce = e => {
					const t = Object(a.e)(t => {
						var s, n;
						const o = null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[e.postOrCommentId];
						if (o && o.length) return o.map(e => {
							var s, n;
							return null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.models[e]
						})
					});
					return t ? r.a.createElement("div", {
						className: Object(T.a)(e.className, ae.a.wrapper)
					}, r.a.createElement("h2", {
						className: ae.a.wrapperTitle
					}, n.fbt._("Recent actions", null, {
						hk: "PAtYM"
					})), t.map(t => "ModAction" === (null == t ? void 0 : t.__typename) ? r.a.createElement(ie, {
						modAction: t,
						key: t.id,
						postOrCommentId: e.postOrCommentId
					}) : "ReportAction" === (null == t ? void 0 : t.__typename) ? r.a.createElement(de, {
						reportAction: t,
						key: t.id
					}) : null)) : null
				},
				le = s("./src/reddit/components/HumanDate/index.tsx"),
				me = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				ue = s.n(me);
			const pe = e => {
				let {
					content: t
				} = e;
				var s;
				const o = (null == t ? void 0 : t.approvedBy) || "",
					i = Object(a.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(V.Db)(e, {
						userName: o
					}) : null),
					d = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: ue.a.userIconWrapper
				}, r.a.createElement(Z.a, {
					className: Object(T.a)(ue.a.userIcon),
					iconUrl: null == i ? void 0 : i.accountIcon,
					userName: o,
					isNSFW: !!(null == i ? void 0 : i.isNSFW)
				})), r.a.createElement("div", {
					className: ue.a.statusText
				}, r.a.createElement("p", {
					className: ue.a.status
				}, n.fbt._("Approved", null, {
					hk: "4d15LY"
				})), r.a.createElement("p", null, r.a.createElement("a", {
					className: ue.a.userlink,
					href: `${J.a.redditUrl}/user/${o}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(X.e)(o)), d && r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(le.d, {
					seconds: d
				})))))
			};
			var be = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx"),
				fe = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				he = s("./src/reddit/selectors/subreddit.ts");
			const Oe = e => {
				let {
					content: t
				} = e;
				var s;
				const o = Object(a.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(V.Db)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					i = Object(p.b)(t),
					d = Object(a.e)(e => Object(he.X)(e, {
						subredditId: i ? t.belongsTo.id : t.subredditId
					})),
					c = Object(a.e)(e => {
						var t, s, n, o;
						return (null === (s = null === (t = e.user) || void 0 === t ? void 0 : t.account) || void 0 === s ? void 0 : s.isAdmin) || (null === (o = null === (n = e.user) || void 0 === n ? void 0 : n.account) || void 0 === o ? void 0 : o.isEmployee)
					}),
					l = i && t.removedByCategory ? t.removedByCategory : null,
					m = l ? Object(fe.b)(l) : "clear_fill",
					u = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null,
					b = ![v.g.AntiEvilOps, v.g.CommunityOps, v.g.ContentTakedown, v.g.CopyrightTakedown, v.g.Reddit].includes(l) || c;
				return r.a.createElement(r.a.Fragment, null, o && b ? r.a.createElement("div", {
					className: ue.a.userIconWrapper
				}, r.a.createElement(Z.a, {
					className: Object(T.a)(ue.a.userIcon),
					iconUrl: o.accountIcon,
					userName: o.username,
					isNSFW: o.isNSFW
				})) : r.a.createElement(x.a, {
					isFilled: !0,
					name: m,
					className: Object(T.a)(ue.a.coloredIcon, ue.a.icon)
				}), r.a.createElement("div", {
					className: ue.a.statusText
				}, r.a.createElement("p", {
					className: ue.a.status
				}, n.fbt._("Removed{spam}{reason}", [n.fbt._param("spam", t.isSpam ? " as spam" : ""), n.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), r.a.createElement("p", null, b && (null == o ? void 0 : o.username) ? r.a.createElement(r.a.Fragment, null, r.a.createElement("a", {
					className: ue.a.userlink,
					href: `${J.a.redditUrl}/user/${o.username}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(X.e)(o.username)), u && r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(le.d, {
					seconds: u
				}))) : l && Object(fe.e)(l, (null == o ? void 0 : o.username) || null, d.name))))
			};
			var xe = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				ve = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				_e = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ge = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var Ee = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx");
			s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx");
			s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx");
			var ye = s("./src/reddit/icons/fonts/Op/index.m.less"),
				je = s.n(ye),
				Ce = s("./src/lib/lessComponent.tsx");
			Ce.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(ge.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(ge.a, null, e.desc)), "OpIcon", je.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var ke = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				Se = s.n(ke);
			Ce.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(ge.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", Se.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var Ie = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ne = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				Te = s.n(Ne);
			Ce.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(ge.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", Te.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const Pe = e => {
					let {
						content: t
					} = e;
					const s = Object(_e.b)(),
						i = Object(a.d)(),
						d = Object(o.useCallback)(() => {
							const e = Object(p.a)(t.id),
								n = e ? E.eb : _.g,
								o = t.ignoreReports ? "restore_reports" : "ignore_reports",
								r = e ? Object(b.l)(o, t.id) : Object(b.k)(o, t.id);
							i(n(t.id)), s(r)
						}, [t.id, t.ignoreReports, s, i]),
						c = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(x.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(T.a)(ue.a.coloredIcon, ue.a.icon)
					}), r.a.createElement("div", {
						className: ue.a.reportedWrapper
					}, !!t.modReports.length && r.a.createElement("div", {
						className: ue.a.statusText
					}, r.a.createElement("p", {
						className: ue.a.status
					}, n.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [n.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return r.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object(X.e)(n), ": ", s)
					})), !!t.userReports.length && r.a.createElement("div", {
						className: ue.a.statusText
					}, r.a.createElement("div", {
						className: ue.a.reportMeta
					}, r.a.createElement("p", {
						className: ue.a.status
					}, n.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [n.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !c && r.a.createElement(ve.c, {
						className: ue.a.ignoreButton,
						onClick: d,
						text: t.ignoreReports ? n.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : n.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? r.a.createElement(Ie.a, {
						className: ue.a.ignoreButtonIcon
					}) : r.a.createElement(Ee.a, {
						className: ue.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, o, a, i] = e;
						return n ? void 0 !== a && i ? r.a.createElement(xe.a, {
							key: `user-${n}`,
							reason: n,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: a,
							useNewFormat: !0,
							className: ue.a.snoozabledButton,
							dropdownClassName: ue.a.snoozableDropdown,
							iconClassName: ue.a.snoozeIcon
						}) : r.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", o, ")") : null
					}))))
				},
				we = e => {
					let {
						content: t
					} = e;
					const s = Object(S.c)(t),
						n = Object(o.useMemo)(() => {
							switch (s) {
								case S.a.APPROVED:
									return r.a.createElement(pe, {
										content: t
									});
								case S.a.REMOVED:
								case S.a.SPAM:
									return r.a.createElement(Oe, {
										content: t
									});
								case S.a.FILTERED:
									return r.a.createElement(be.a, {
										content: t
									});
								case S.a.REPORTED:
									return r.a.createElement(Pe, {
										content: t
									});
								default:
									return r.a.createElement(o.Fragment, null)
							}
						}, [s, t]),
						[i, d] = Object(o.useState)(!1),
						c = Object(O.a)(),
						l = Object(o.useCallback)(e => {
							var n;
							e.stopPropagation(), d(!i), c(Object(Y.e)((null === (n = t.belongsTo) || void 0 === n ? void 0 : n.id) || t.subredditId, s, Object(p.a)(t.id), !i))
						}, [c, t, i, d, s]),
						m = Object(a.e)(e => {
							var s, n;
							return !!(null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[t.id])
						});
					return s === S.a.UNMODERATED ? null : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(T.a)(ue.a.wrapper, {
							[ue.a.approved]: s === S.a.APPROVED,
							[ue.a.reported]: s === S.a.REPORTED,
							[ue.a.opened]: i,
							[ue.a.openable]: m
						}),
						onClick: m ? l : void 0
					}, n, m && r.a.createElement("button", {
						className: ue.a.caretButton
					}, r.a.createElement(x.a, {
						name: i ? P.a.caret_up : P.a.caret_down,
						className: ue.a.caretIcon
					}))), m && i && r.a.createElement(ce, {
						className: ue.a.previousActions,
						postOrCommentId: t.id
					}))
				},
				Re = (e, t) => Object(b.c)(t, e),
				Ae = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: b
					} = e;
					const I = Object(O.a)(),
						T = Object(a.d)(),
						P = Object(S.c)(t),
						w = Object(a.e)(C.b),
						R = Object(p.b)(t),
						A = Object(a.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						M = Object(a.e)(e => Object(k.m)(e, {
							postId: t.id
						})),
						L = Object(u.a)(M),
						[D, B] = Object(o.useState)(!1),
						F = Object(a.e)(e => {
							var s, n;
							return null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === n ? void 0 : n.toUpdate.includes(t.id)
						}),
						U = Object(o.useRef)(null),
						W = Object(o.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t,
									intersectionRatio: s
								} = e;
								s >= .5 ? B(!0) : t || B(!1)
							})
						}, []);
					D && F && T(Object(d.b)(t.id));
					const H = Object(o.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(h.a)(U, W, H);
					const V = [S.a.REPORTED, S.a.FILTERED, S.a.UNMODERATED].includes(P),
						K = [S.a.APPROVED, S.a.UNMODERATED, S.a.REPORTED].includes(P),
						G = R && L,
						q = P === S.a.REMOVED && Object(p.b)(t) && t.removedByCategory === v.g.Reddit && !t.isRemoved && !t.isApproved,
						z = P === S.a.FILTERED || q,
						Y = P === S.a.REMOVED && !t.modRemovalReason && !z,
						J = [S.a.REMOVED, S.a.SPAM].indexOf(P) > -1,
						Z = R ? f.n : Re,
						X = Object(o.useCallback)(() => {
							const e = R ? E.r : _.a;
							T(e(t.id)), I(Z(t.id, "approve"))
						}, [I, T, t, R, Z]),
						$ = Object(o.useCallback)(() => {
							const e = R ? E.S : _.e;
							T(e(t.id, !1)), t.isRemoved && t.bannedBy === i.l ? I(Z(t.id, "confirm_remove")) : I(Z(t.id, "remove"))
						}, [I, T, t, R, Z]),
						ee = Object(o.useCallback)(() => {
							T(Object(j.fetchReasonsAndOpenModal)(R ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, R, T]),
						te = Object(o.useCallback)(() => {
							T(Object(g.i)(Object(c.b)(t.id, !1))), I(Object(f.n)(t.id, "post_flair_picker"))
						}, [I, T, t]),
						se = Object(o.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							R && T(Object(y.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [T, R, t]);
					return r.a.createElement("div", {
						className: N.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: U
					}, r.a.createElement(we, {
						content: t
					}), r.a.createElement("div", {
						className: N.a.actionBar
					}, V && r.a.createElement(m.t, {
						className: [N.a.button, N.a.approve].join(" "),
						Icon: Object(x.b)("checkmark"),
						iconPosition: m.h.L,
						iconClassName: N.a.icon,
						onClick: X,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), K && r.a.createElement(m.t, {
						className: N.a.button,
						Icon: Object(x.b)("close"),
						iconPosition: m.h.L,
						iconClassName: N.a.icon,
						onClick: $,
						text: n.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), Y && r.a.createElement(m.t, {
						className: N.a.button,
						onClick: ee,
						text: n.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), z && r.a.createElement(m.t, {
						className: N.a.button,
						Icon: Object(x.b)("close"),
						iconPosition: m.h.L,
						iconClassName: N.a.icon,
						onClick: $,
						text: n.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), J && r.a.createElement(m.t, {
						className: N.a.button,
						Icon: Object(x.b)("checkmark"),
						iconPosition: m.h.L,
						iconClassName: N.a.icon,
						onClick: X,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), G && r.a.createElement(m.t, {
						className: N.a.button,
						Icon: Object(x.b)("tag"),
						priority: m.c.Plain,
						iconPosition: m.h.L,
						iconClassName: N.a.icon,
						onClick: te,
						text: n.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), R && w === Object(c.b)(t.id, !1) && r.a.createElement(c.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(c.b)(t.id, !1),
						onFlairChanged: se
					}), r.a.createElement(Q, {
						content: t,
						hostPostData: b,
						listingKey: s,
						moderatorPermissions: M
					}), A && r.a.createElement(l.a, {
						withOverlay: !0,
						postId: R ? t.id : void 0,
						commentId: R ? void 0 : t.id
					})))
				}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/redditGQL/types.ts");
			const r = (e, t) => {
				switch (e) {
					case o.y.AddNote:
						return n.fbt._("Added mod note", null, {
							hk: "4EQdI3"
						});
					case o.y.AddRemovalReason:
						return n.fbt._("Added removal reason", null, {
							hk: "3sDuRA"
						});
					case o.y.AdjustPostCrowdControlLevel:
						return n.fbt._("Adjusted post crowd control level", null, {
							hk: "3Ru27s"
						});
					case o.y.EnablePostCrowdControlFilter:
						return n.fbt._("Enabled post crowd control level", null, {
							hk: "bnrbt"
						});
					case o.y.DisablePostCrowdControlFilter:
						return n.fbt._("Disabled post crowd control level", null, {
							hk: "3Pn8Cm"
						});
					case o.y.ApproveComment:
						return n.fbt._("Approved comment", null, {
							hk: "15N4AH"
						});
					case o.y.ApproveLink:
						return n.fbt._("Approved post", null, {
							hk: "2pHeO6"
						});
					case o.y.BanUser:
						return n.fbt._("Banned user", null, {
							hk: "30ZUto"
						});
					case o.y.Collections:
						return n.fbt._("Collections", null, {
							hk: "4DLN5q"
						});
					case o.y.DeleteNote:
						return n.fbt._("Deleted mod note", null, {
							hk: "24mUGI"
						});
					case o.y.Distinguish:
						return "SubredditPost" === t ? n.fbt._("Post distinguished", null, {
							hk: "1EzjPd"
						}) : n.fbt._("Comment distinguished", null, {
							hk: "3TNqQa"
						});
					case o.y.EditFlair:
						return "SubredditPost" === t ? n.fbt._("Post flair edited", null, {
							hk: "2oj67i"
						}) : n.fbt._("User flair edited", null, {
							hk: "2WAVS8"
						});
					case o.y.IgnoreReports:
						return "SubredditPost" === t ? n.fbt._("Post reports ignored", null, {
							hk: "1HbgCS"
						}) : n.fbt._("Comment reports ignored", null, {
							hk: "3eLRwL"
						});
					case o.y.Lock:
						return "SubredditPost" === t ? n.fbt._("Post locked", null, {
							hk: "45Huvj"
						}) : n.fbt._("Comment locked", null, {
							hk: "2HzroI"
						});
					case o.y.MarkNsfw:
						return n.fbt._("Toggled post NSFW", null, {
							hk: "eAiVp"
						});
					case o.y.MarkOriginalContent:
						return n.fbt._("Toggled post Original Content", null, {
							hk: "46B0Bk"
						});
					case o.y.MuteUser:
						return n.fbt._("Muted user", null, {
							hk: "31YWRG"
						});
					case o.y.RemoveComment:
						return n.fbt._("Removed comment", null, {
							hk: "2qfmzC"
						});
					case o.y.RemoveLink:
						return n.fbt._("Removed post", null, {
							hk: "2leMij"
						});
					case o.y.SetContestMode:
						return n.fbt._("Set post contest mode", null, {
							hk: "2iE074"
						});
					case o.y.SetSuggestedsort:
						return n.fbt._("Set post suggested sort", null, {
							hk: "3zw33Q"
						});
					case o.y.ShowComment:
						return n.fbt._("Showed comment", null, {
							hk: "1xvaXS"
						});
					case o.y.SpamComment:
						return n.fbt._("Marked comment as spam", null, {
							hk: "E6CLe"
						});
					case o.y.SpamLink:
						return n.fbt._("Removed post as spam", null, {
							hk: "1Al2xz"
						});
					case o.y.Spoiler:
						return n.fbt._("Added spoiler tag", null, {
							hk: "254Axx"
						});
					case o.y.Sticky:
						return "SubredditPost" === t ? n.fbt._("Post stickied", null, {
							hk: "4m9DRx"
						}) : n.fbt._("Comment stickied", null, {
							hk: "1JIPzu"
						});
					case o.y.UnbanUser:
						return n.fbt._("Unbanned user", null, {
							hk: "3U4olT"
						});
					case o.y.Unlock:
						return "SubredditPost" === t ? n.fbt._("Post unlocked", null, {
							hk: "3IXrG"
						}) : n.fbt._("Comment unlocked", null, {
							hk: "4v2jmJ"
						});
					case o.y.UnmuteUser:
						return n.fbt._("Unmuted user", null, {
							hk: "2aB30x"
						});
					case o.y.UnsetContestMode:
						return n.fbt._("Unset post contest mode", null, {
							hk: "W4Yjf"
						});
					case o.y.UnsnoozeReports:
						return "SubredditPost" === t ? n.fbt._("Post unsnoozed", null, {
							hk: "3jp8zr"
						}) : n.fbt._("Comment unsnoozed", null, {
							hk: "2x01Eq"
						});
					case o.y.Unspoiler:
						return n.fbt._("Removed spoiler tag", null, {
							hk: "2GvhDn"
						});
					case o.y.Unsticky:
						return "SubredditPost" === t ? n.fbt._("Post unstickied", null, {
							hk: "KXoHl"
						}) : n.fbt._("Comment unstickied", null, {
							hk: "dpEKC"
						});
					case o.y.UpdateRemovalReason:
					case o.y.WikiBanned:
					case o.y.WikiContributor:
					case o.y.WikiPageListed:
					case o.y.WikiPermLevel:
					case o.y.WikiRevise:
					case o.y.WikiUnbanned:
					case o.y.AcceptModeratorInvite:
					case o.y.AddCommunityTopics:
					case o.y.AddContributor:
					case o.y.AddModerator:
					case o.y.CreateAward:
					case o.y.CreateScheduledPost:
					case o.y.CreateRemovalReason:
					case o.y.CommunityStyling:
					case o.y.CommunityWidgets:
					case o.y.CreateRule:
					case o.y.DeleteAward:
					case o.y.DeleteRule:
					case o.y.DeleteScheduledPost:
					case o.y.DeleteOverriddenClassification:
					case o.y.DeleteRemovalReason:
					case o.y.DisableAward:
					case o.y.EditPostRequirements:
					case o.y.EditRule:
					case o.y.EditScheduledPost:
					case o.y.EditSettings:
					case o.y.EnableAward:
					case o.y.Events:
					case o.y.HiddenAward:
					case o.y.InviteModerator:
					case o.y.InviteSubscriber:
					case o.y.ModAwardGiven:
					case o.y.ModmailEnrollment:
					case o.y.OverrideClassification:
					case o.y.RemoveCommunityTopics:
					case o.y.RemoveContributor:
					case o.y.RemoveModerator:
					case o.y.RemoveWikiContributor:
					case o.y.ReorderModerators:
					case o.y.ReorderRules:
					case o.y.SetPermissions:
					case o.y.SnoozeReports:
					case o.y.SubmitContentRatingSurvey:
					case o.y.SubmitScheduledPost:
					case o.y.UnignoreReports:
					case o.y.UninviteModerator:
					default:
						return n.fbt._("Last mod action", null, {
							hk: "S9AMb"
						})
				}
			}
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, s) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				i = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(i.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: c,
						tooltipText: m,
						className: u
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, u),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, o.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": m
				})), c && o.a.createElement(a.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, m))
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
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
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
				return Object(c.a)().hideRecommendationContext ? null : o.a.createElement(i.b, {
					className: Object(r.a)(m.a.RecommendationContextStyles, {
						[m.a.classicLayout]: s === d.g.Classic,
						[m.a.compactLayout]: s === d.g.Compact,
						[m.a.largeLayout]: s === d.g.Large
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
				return c
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/components/HumanDate/index.tsx"),
				r = s("./src/lib/timeUntil/index.ts"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? d._("Voting closed {timeAgo}", [d._param("timeAgo", i.a.createElement(o.d, {
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
				d = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
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
			t.a = Object(d.a)(Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: d,
					redditStyle: l,
					theme: p,
					overrideBackgroundColor: b,
					...f
				} = e;
				return o.a.createElement("div", u({
					className: Object(r.a)(m.a.backgroundWrapper, s),
					style: b || Object(i.c)(n, e),
					onClick: a,
					"data-adclicklocation": c.a.BACKGROUND
				}, f), t)
			}))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return se
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx"),
				i = s("./src/reddit/models/Post/index.ts"),
				d = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts"),
				p = s("./node_modules/reselect/es/index.js");
			const b = Object(p.a)(e => Object(u.c)(e, {
				experimentEligibilitySelector: u.a,
				experimentName: m.Ec
			}), e => e === m.Yd);
			var f = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/classNames/index.ts"),
				O = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				x = s("./src/reddit/components/SubredditIcon/index.tsx"),
				v = s("./src/reddit/selectors/posts.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				E = s.n(g);
			const y = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(d.e)(e => Object(v.F)(e, {
						postId: t
					})),
					r = Object(d.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(_.X)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return r ? o.a.createElement(O.a, {
					className: Object(h.a)(E.a.link, s),
					to: r.url
				}, f.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), o.a.createElement(x.b, {
					className: E.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), o.a.createElement("span", {
					className: E.a.subredditName
				}, r.displayText)) : null
			};
			var j = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				C = s("./src/reddit/connectors/PostViewable/index.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/contexts/Post/index.tsx"),
				I = s("./src/reddit/helpers/path/index.ts"),
				N = s("./src/reddit/hooks/useClickSourceData.ts"),
				T = s("./src/reddit/hooks/useIsOverlay.ts"),
				P = s("./src/reddit/hooks/usePageLayer.ts"),
				w = s("./src/lib/prettyPrintNumber/index.ts"),
				R = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				A = s.n(R);
			const M = e => {
				let {
					post: t
				} = e;
				const s = `${Object(w.b)(t.score)} ${f.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(w.b)(t.numComments)} ${f.fbt._("comments",null,{hk:"30aUyh"})}`;
				return o.a.createElement("div", {
					className: A.a.postInformation
				}, o.a.createElement("h5", {
					className: A.a.title
				}, t.title), o.a.createElement("div", {
					className: A.a.interactions
				}, o.a.createElement("p", null, s), o.a.createElement("p", null, n)))
			};
			var L = s("./src/lib/isUrl/index.ts"),
				D = s("./src/reddit/actions/profile/index.ts"),
				B = s("./src/reddit/components/Thumbnail/index.tsx"),
				F = s("./src/reddit/components/UserIcon/index.tsx"),
				U = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				W = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				H = s("./src/reddit/selectors/profile.ts"),
				V = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				K = s.n(V);
			const G = e => {
				let {
					post: t
				} = e;
				var s, r, a, i;
				const c = Object(d.d)(),
					l = Object(d.e)(Object(H.l)(t.author)),
					m = Object(n.useMemo)(() => Object(B.c)({
						post: t
					}), [t]),
					u = Object(n.useMemo)(() => Object(L.a)(m), [m]);
				Object(n.useEffect)(() => {
					u || c(Object(D.d)(t.author))
				}, [c, t.author, u]);
				const p = !u && Object(W.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					b = Object(U.c)(null === (r = null == l ? void 0 : l.icon) || void 0 === r ? void 0 : r.url);
				return o.a.createElement("div", {
					className: K.a.media
				}, u ? o.a.createElement(B.b, {
					post: t,
					url: m,
					className: K.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: K.a.mediaThumbnailContainer
				}) : null, !u && (null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url) && o.a.createElement("div", {
					className: K.a.userIconContainer
				}, o.a.createElement(F.a, {
					className: Object(h.a)({
						[K.a.snoovatarUserIcon]: p,
						[K.a.defaultUserIcon]: b
					}, K.a.userIcon),
					iconUrl: null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url,
					userName: l.name,
					wrapperClassName: K.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var q = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				z = s.n(q);
			const Q = Object(C.a)(null);
			var Y = Object(S.b)(Q(e => {
					let {
						post: t
					} = e;
					const s = Object(P.a)(),
						n = Object(T.a)(),
						r = Object(N.a)(),
						a = Object(k.x)(s) && !n;
					return o.a.createElement(O.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(I.b)(t.permalink) : Object(j.a)(t.permalink, !1, r)
					}, o.a.createElement("div", {
						className: z.a.container
					}, o.a.createElement(M, {
						post: t
					}), o.a.createElement(G, {
						post: t
					})))
				})),
				J = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				Z = s.n(J);
			const X = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => o.a.createElement(Y, {
					postId: e,
					key: e
				}));
				return o.a.createElement("div", {
					className: Z.a.container
				}, s)
			};
			var $ = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				ee = s.n($);
			const te = e => {
				let {
					post: t
				} = e;
				const s = Object(d.d)();
				if (!Object(d.e)(b) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return o.a.createElement("div", {
					className: ee.a.container,
					onClick: () => s(Object(c.y)(t, l.a.Click))
				}, o.a.createElement(X, {
					postIds: t.adPromotedUserPostIds
				}), o.a.createElement(y, {
					postId: n,
					className: ee.a.communityLink
				}))
			};

			function se(e) {
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
				}) : Object(i.B)(t) && Object(i.A)(t) ? o.a.createElement(te, {
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
				d = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				c = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				u = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/MetaSeparator/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				_ = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/components/PostMeta/index.m.less"),
				y = s.n(E);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: E,
					isOverlay: j,
					isTopicPage: C,
					post: k,
					shouldShowSubscribeButton: S,
					subredditOrProfile: I,
					tooltipType: N
				} = e, T = !!C, P = Object(_.a)(), w = Object(r.e)(e => !!I && Object(a.i)(e, I.id));
				return o.a.createElement("div", {
					className: y.a.metaContainer
				}, !n && !k.isSponsored && I && o.a.createElement(c.a, {
					postId: k.id,
					subredditName: I.name
				}, o.a.createElement(b.a, {
					className: y.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: I.url,
						state: P
					}
				}, I.displayText)), I && I.isQuarantined && o.a.createElement(p.a, null), !n && !k.isSponsored && I && S && !E && o.a.createElement(f.a, {
					className: y.a.SubscribeButton,
					getEventFactory: e => Object(v.n)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: I.name,
						type: Object(g.i)(I) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: k.id,
					size: O.d.XXS,
					small: !0
				}), !n && !k.isSponsored && o.a.createElement(x.b, null), !n && !k.isSponsored && o.a.createElement(l.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), o.a.createElement(u.g, {
					className: y.a.postTopMeta,
					flairStyleTemplate: t,
					post: k,
					tooltipType: N,
					isModWithUserNotesPermissions: w
				}), o.a.createElement(m.a, {
					displayText: I ? I.displayText : null,
					inSubredditOrProfile: !!n,
					post: k,
					tooltipType: N
				}), !T && o.a.createElement(i.a, {
					hideCta: s,
					thing: k,
					tooltipType: j ? u.f.Lightbox : void 0
				}), w && o.a.createElement(d.a, {
					postOrComment: k,
					className: y.a.addModNote
				}))
			}
		},
		"./src/reddit/components/PostPinnedHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_203iZ8LUuIrz_IJbiOAJDH",
				pinnedIcon: "_2xKvAjjyhpXElWBVqyWyml",
				metaText: "rewiG9XNj_xqkQDcyR88j"
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				m = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(m);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: m = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: f,
					redditStyle: h,
					isOverlay: O,
					isVoteCountAnimation: x,
					postId: v,
					shouldShowUpvoteRatioOnHover: _
				} = e, g = `upvote-button-${t.id}${O?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: h
				}, n && o.a.createElement(d.a, {
					className: u.a.checkbox,
					isCheckboxSelected: m,
					toggleCheckbox: b
				}), o.a.createElement(i.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: g,
					isVoteCountAnimation: x,
					isCountAnimShadowTestEnabled: p,
					postId: v,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: _
					}),
					shouldShowUpvoteRatioOnHover: _
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
				return B
			})), s.d(t, "a", (function() {
				return J
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				m = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				O = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/constants/adEvents.ts"),
				v = s("./src/reddit/helpers/path/index.ts"),
				_ = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				E = s("./src/reddit/hooks/usePostContext.ts"),
				y = s("./src/reddit/hooks/useTheme.ts"),
				j = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/Flair/index.ts"),
				k = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Post/index.ts"),
				I = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				N = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = s("./src/lib/getShortenedLink.ts"),
				P = s("./src/reddit/components/FlairWrapper/index.tsx"),
				w = s("./node_modules/fbt/lib/FbtPublic.js"),
				R = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				M = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				L = s.n(M);
			const D = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var B, F = Object(i.b)(D)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(g.a)() ? null : a.a.createElement("div", {
						className: Object(m.a)(e.className, L.a.proposalMetaData)
					}, a.a.createElement("span", null, w.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [w.fbt._param("count", Object(R.a)(n)), w.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(A.a, {
						className: L.a.proposalExpiry,
						poll: t
					}))
				})),
				U = s("./src/reddit/components/SEOTitle/index.tsx"),
				W = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				H = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				K = s("./src/telemetry/models/Outbound.ts"),
				G = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				q = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				z = s("./src/reddit/components/PostTitle/index.m.less"),
				Q = s.n(z);

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(B || (B = {}));
			const J = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: o,
						children: r,
						className: i,
						redditStyle: d,
						shouldBlurTitle: c
					} = e;
					const l = Object(y.a)();
					let u = "";
					switch (t) {
						case B.ExtraLarge:
							u = Q.a.ExtraLarge;
							break;
						case B.Large:
							u = Q.a.Large;
							break;
						case B.Medium:
							u = Q.a.Medium;
							break;
						case B.Small:
							u = Q.a.Small;
							break;
						case B.ExtraSmall:
							u = Q.a.ExtraSmall;
							break;
						case B.Metadata:
							u = Q.a.Metadata
					}
					return a.a.createElement("div", {
						className: Object(m.a)(Q.a.Title, i, u, {
							[Q.a.isNoWrap]: o,
							[Q.a.blur]: c
						}),
						style: {
							"--posttitletextcolor": s || Object(N.a)({
								redditStyle: d,
								theme: l
							}).titleText
						}
					}, n ? a.a.createElement(U.b, {
						type: n
					}, r) : r)
				},
				Z = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: o,
						...r
					} = e;
					return a.a.createElement(d.a, Y({}, r, {
						className: Object(m.a)(t, Q.a.styledLink, {
							[Q.a.isVisitedEnabled]: !s
						})
					}), o)
				},
				X = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: o
					} = e;
					return a.a.createElement("div", {
						className: Object(m.a)(Q.a.titleContainer, n, {
							[Q.a.isNoWrap]: s,
							[Q.a.isVisitedEnabled]: !t
						})
					}, o)
				},
				$ = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.r)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: H.e,
					shouldOpenPostInNewTab: V.lb
				}),
				ee = e => {
					const {
						post: t
					} = e, {
						isSponsored: s
					} = t, n = Object(i.d)(), o = Object(_.a)(), r = Object(i.e)(W.b), d = Object(i.e)(W.c), c = e => {
						(r || d) && (e.preventDefault(), n(Object(O.Z)(Object(v.b)(t.permalink), t.id))), t.isSponsored && Object(S.A)(t) && n(Object(O.y)(t, x.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return a.a.createElement(X, {
						nowrap: e.nowrap
					}, a.a.createElement(te, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return a.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, a.a.createElement(te, e)); {
						const n = t.permalink,
							r = e.isCommentPermalink ? Object(v.b)(n) : Object(h.a)(n, void 0, o);
						return a.a.createElement(X, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s && !Object(S.A)(t) ? ((e, t) => {
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
							onClick: c
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
					const r = e.isCommentsPage ? U.a.PostComments : U.a.PostItem,
						i = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return a.a.createElement(J, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: i,
						size: e.size,
						titleColor: e.titleColor,
						titleType: r
					}, t && a.a.createElement(P.a, {
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
					} = n, r = e.isCommentsPage ? K.SourceElement.PostLink : K.SourceElement.ListingPostLink;
					if (Object(g.a)()) return null;
					if (s && n.isNSFW) return null;
					const i = !t && !e.isCrosspost && e.size !== B.Large && !n.isSponsored && (n.source || n.media && (n.media.type === k.o.GIFVIDEO || n.media.type === k.o.IMAGE || n.media.type === k.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return a.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(k.E)(n),
							isSponsored: o,
							postId: n.id,
							source: n.source,
							sourceElement: r
						}, Object(T.a)(n), !n.isSponsored && a.a.createElement(j.a, {
							name: "external_link",
							className: Q.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== B.Large && e.size !== B.ExtraLarge) return a.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: o,
						postId: n.id,
						source: n.source,
						sourceElement: r
					}, Object(T.a)(n), !n.isSponsored && a.a.createElement(j.a, {
						name: "external_link",
						className: Q.a.outboundLinkIcon
					}));
					return null
				};
			class ne extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${Q.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(o.c)(.45,Object(N.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(o.c)(.45,this.props.titleColor||Object(N.a)(this.props).titleText,Object(N.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(o.c)(.45,Object(N.a)(this.props).bodyText,Object(N.a)(this.props).body)};\n        }\n      `
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
						post: d,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: l,
						onClick: u
					} = this.props, p = s === C.b.Left, b = Object(P.b)(d), {
						leftFlair: f,
						rightFlair: h
					} = Object(G.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: l
					}), O = !r && !o && !t, x = O && f && f.length > 0, v = O && h && h.length > 0;
					return a.a.createElement("div", {
						className: Object(m.a)(Q.a.Component, e, d.id),
						ref: this.props.innerRef,
						"data-adclicklocation": q.a.TITLE,
						onClick: u
					}, !c && x && a.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: d,
						sendEvent: this.props.sendEvent
					}), !Object(I.b)(d) && a.a.createElement(ee, Y({}, this.props, {
						leftFlair: c ? f : void 0
					})), i && a.a.createElement(F, {
						className: Q.a.pollMeta,
						pollId: i.id
					}), a.a.createElement(se, this.props), v && a.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: d,
						sendEvent: this.props.sendEvent
					}), a.a.createElement("div", {
						className: Q.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(p.ib)(),
					s = Object(p.x)(t),
					n = Object(E.a)(),
					o = Object(i.e)(o => $(o, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					r = Object(y.a)(),
					d = Object(u.b)();
				return n ? a.a.createElement(ne, Y({
					pageLayer: t,
					isCommentPermalink: s
				}, n, o, e, {
					theme: r,
					sendEvent: d
				})) : null
			}))
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, s) {
			e.exports = {
				everythingElseWrapper: "cZPZhMe-UCZ8htPodMyJ5",
				outboundLinkIcon: "_3z6z1xnp828wcarJXfzzjr",
				postBadges: "_2wFk1qX4e1cxk8Pkw1rAHk",
				postTopMeta: "nU4Je7n-eSXStTBAPMYt8",
				subredditIcon: "_1WX5Y5qFVBTdr6hCPpARDB",
				subredditIconWrapper: "_2dr_3pZUCk8KfJ-x0txT_l",
				container: "_14-YvdFiW5iVvfe5wdgmET",
				SubscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq",
				addModNote: "_2ELu43PpvGnJxizg4n_k9E"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				m = s("./src/reddit/components/NotificationButton/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				O = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				j = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/PostTopLine/index.m.less"),
				S = s.n(k);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: o,
					hideNSFWPref: k,
					hostPostData: I,
					iconClassName: N,
					inSubredditOrProfile: T,
					isCommentsPage: P,
					isCompactPinnedPost: w,
					isCurrentUserProfilePost: R,
					isModQueuePage: A,
					isModWithUserNotesPermissions: M,
					isOverlay: L,
					isTopicPage: D,
					listingKey: B,
					post: F,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: W,
					showSubreddit: H,
					showSubredditIcon: V,
					subredditOrProfile: K,
					isFollowed: G,
					shouldShowFollowButton: q,
					onFollowPostClick: z,
					onSubscribed: Q
				} = e;
				const Y = D,
					J = K && Object(y.i)(K),
					Z = Object(a.e)(e => {
						if (!J) return !0;
						const t = Object(C.Jb)(e, F.author || "");
						return !t || t.enableFollowers
					}),
					X = Object(a.e)(j.a);
				return r.a.createElement("div", {
					className: Object(i.a)(S.a.container, t)
				}, H && K && r.a.createElement("div", {
					className: S.a.subredditIconWrapper
				}, r.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: K.url
				}, V && r.a.createElement(b.b, {
					className: Object(i.a)(S.a.subredditIcon, N),
					shouldHideNsfwIcon: k,
					subredditOrProfile: K
				}))), r.a.createElement("div", {
					className: S.a.everythingElseWrapper
				}, H && r.a.createElement(l.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), r.a.createElement(p.g, {
					className: S.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: M,
					tooltipType: L ? p.f.Lightbox : void 0,
					post: F,
					showSub: H,
					subredditOrProfile: K
				}), r.a.createElement(u.a, {
					className: S.a.postBadges,
					displayText: K ? K.displayText : null,
					inSubredditOrProfile: T,
					isCompactPinnedPost: w,
					post: F,
					tooltipType: L ? p.f.Lightbox : void 0
				}), !Y && r.a.createElement(d.a, {
					isPostDetail: P,
					thing: F,
					tooltipType: L ? p.f.Lightbox : void 0
				}), M && r.a.createElement(c.a, {
					postOrComment: F,
					className: S.a.addModNote
				})), K && Z && H && U && !R && r.a.createElement(h.a, {
					className: S.a.SubscribeButton,
					getEventFactory: e => (Q && !e && Q(), Object(_.n)(F.id, e ? "unsubscribe" : "subscribe", "post", B, I)),
					identifier: {
						name: K.name,
						type: J ? O.a.PROFILE : O.a.SUBREDDIT
					},
					postId: F.id,
					size: x.d.XS,
					priority: X ? x.c.Secondary : void 0,
					isShredditParityEnabled: X
				}), W && r.a.createElement(v.b, {
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(E.E)(F),
					source: F.source
				}, r.a.createElement(g.a, {
					className: S.a.outboundLinkIcon
				})), q && Z && r.a.createElement(m.a, {
					isFilled: !!G,
					onClick: z,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
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
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				m = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				u = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(u);
			const b = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(c.a)(t))
				})),
				f = d.a.wrapped(e => {
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
			t.a = b(Object(i.a)(f))
		},
		"./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return z
			})), s.d(t, "b", (function() {
				return Q
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/hooks/useTracking.ts"),
				c = s("./src/reddit/icons/svgs/Close/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				m = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/SubredditIcon/index.tsx"),
				p = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				b = s("./src/reddit/constants/posts.ts"),
				f = s("./src/reddit/constants/tracking.ts"),
				h = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.CLOSE = "close", e.SHOW_MORE = "show_more", e.TITLE_SUBREDDIT = "title_subreddit", e.RECOMMENDATION_MODULE = "recommendation_module", e.SUBREDDIT_SUBSCRIBE = "item_subreddit_subscribe", e.SUBREDDIT_UNSUBSCRIBE = "item_subreddit_unsubscribe"
			}(n || (n = {}));
			const O = "related_community_recommendations_v1",
				x = (e, t) => {
					let {
						postId: s,
						subredditId: n,
						variant: o,
						numberItems: r,
						seenItems: a,
						seen: i = !0,
						modelVersion: d = O,
						pageType: c
					} = e;
					return {
						...h.p(t),
						post: s ? h.L(t, s) : void 0,
						source: "cdd_discovery_unit",
						actionInfo: {
							pageType: c,
							reason: n
						},
						discoveryUnit: {
							id: "related_communities_recommendations",
							name: d,
							type: o
						},
						visibility: {
							number_items: r,
							number_seen_items: a.length,
							seen_items: a,
							seen: i
						}
					}
				};
			var v = s("./src/reddit/constants/experiments.ts"),
				_ = s("./src/reddit/controls/InternalLink/index.tsx"),
				g = s("./src/lib/initializeClient/installReducer.ts"),
				E = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/relatedCommunitiesRecommendations/constants.ts"));
			const y = {
				subreddits: [],
				error: null,
				loaded: !1,
				pending: !1
			};
			var j = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.b: {
							const {
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									pending: !0
								}
							}
						}
						case E.c: {
							const {
								subredditId: s,
								subreddits: n = {},
								modelVersion: o
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									modelVersion: o,
									subreddits: Object.keys(n),
									error: null,
									loaded: !0,
									pending: !1
								}
							}
						}
						case E.a: {
							const {
								subredditId: s
							} = t.payload;
							return {
								...e,
								[s]: {
									...e[s],
									error: t.payload,
									loaded: !0,
									pending: !1
								}
							}
						}
						default:
							return e
					}
				},
				C = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./node_modules/reselect/es/index.js");
			Object(g.a)({
				features: {
					relatedCommunitiesRecommendations: j
				}
			});
			const S = Object(k.a)([(e, t) => {
					var s, n, o;
					return null !== (o = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.relatedCommunitiesRecommendations) || void 0 === n ? void 0 : n[t]) && void 0 !== o ? o : y
				}], e => e),
				I = Object(k.a)([(e, t) => S(e, t)], e => {
					var t;
					return null !== (t = null == e ? void 0 : e.subreddits) && void 0 !== t ? t : []
				}),
				N = Object(k.a)([e => e, C.fb], (e, t) => t.map(t => ({
					...t,
					...Object(C.y)(e, {
						subredditId: t.id
					})
				})));
			var T = s("./src/config.ts");
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var w, R = e => {
				let {
					seed: t
				} = e;
				const s = Math.min(3 * (t + 1), 37),
					n = [s, s + 1, s + 2];
				return a.a.createElement("div", {
					"data-testid": "avatar-group"
				}, null == n ? void 0 : n.map((e, t) => a.a.createElement("img", {
					key: e,
					className: "w-[16px] h-[20px] ml-[-4px] first:ml-0",
					src: `${T.a.assetPath}/img/talk/avatars/${e}.png`,
					alt: P._("Online members", null, {
						hk: "3uJPWb"
					})
				})))
			};

			function A(e) {
				switch (e) {
					case v.Df.Minimalist:
					case v.Bf.Minimalist:
					case v.Cf.Minimalist:
						return w.MINIMALIST;
					case v.Df.HotnessSignals:
					case v.Bf.SocialSignals:
					case v.Cf.SocialSignals:
						return w.SIGNALS;
					case v.Df.Description:
					case v.Bf.Description:
					case v.Cf.Description:
						return w.DESCRIPTION
				}
				return w.MINIMALIST
			}! function(e) {
				e[e.MINIMALIST = 0] = "MINIMALIST", e[e.SIGNALS = 1] = "SIGNALS", e[e.DESCRIPTION = 2] = "DESCRIPTION"
			}(w || (w = {}));
			const M = e => {
				let {
					recommendedCommunities: t,
					numberOfVisibleItems: s,
					variant: r,
					postId: c,
					originalSubredditId: O,
					pageType: v,
					columnLayout: g = "single",
					dismissCallback: E
				} = e;
				const y = Object(d.a)(),
					j = Object(l.e)(e => N(e, {
						subredditIds: t
					})),
					C = {
						postId: c,
						subredditId: O,
						variant: r,
						numberItems: t.length,
						seenItems: t.slice(0, s),
						pageType: v
					},
					k = A(r);
				return a.a.createElement("ul", {
					className: `pb-[8px] ${"double"===g&&"grid gap-4 grid-cols-2"}`,
					"data-testid": "recommended-community-list"
				}, j.map((e, t) => {
					let {
						id: r,
						subscribers: d,
						accountsActive: c,
						icon: l,
						communityIcon: O,
						name: v,
						url: j,
						displayText: S,
						publicDescription: I
					} = e;
					if (t >= s) return null;
					const N = o.fbt._({
							"*": "{Number of subscribers} members",
							_1: "{Number of subscribers} member"
						}, [o.fbt._param("Number of subscribers", Object(m.b)(d)), o.fbt._plural(d)], {
							hk: "3fAm5T"
						}),
						T = c ? `• ${o.fbt._("{Number of subscribers online} Online",[o.fbt._param("Number of subscribers online",Object(m.b)(c))],{hk:"4s9dx5"})}` : "",
						P = () => {
							E && E(), y(((e, t, s) => o => ({
								...x(e, o),
								subreddit: h.nb(o, t),
								action: f.c.CLICK,
								noun: n.TITLE_SUBREDDIT,
								actionInfo: {
									...x(e, o).actionInfo,
									position: s
								}
							}))(C, r, t))
						};
					return a.a.createElement("li", {
						key: r,
						className: "px-[16px] py-[8px] flex items-start"
					}, a.a.createElement("div", {
						onClick: P
					}, a.a.createElement(u.b, {
						iconUrl: (null == l ? void 0 : l.url) || O,
						className: "block !w-[32px] !h-[32px] rounded-full !text-[32px] !leading-none",
						linkTo: j || `/${S}`
					})), a.a.createElement("div", {
						className: `${"single"===g&&"truncate"} flex flex-col w-100`
					}, a.a.createElement("div", {
						className: "flex items-start"
					}, a.a.createElement("div", {
						className: "ml-[8px] min-w-0"
					}, a.a.createElement(_.default, {
						className: "text-[14px] leading-[16px] font-semibold text-neutral-content-strong truncate",
						to: j || `/${S}`,
						onClick: P
					}, S, a.a.createElement("div", {
						className: "mt-[4px] text-[12px] leading-[14px] font-normal text-neutral-content-weak truncate"
					}, k === w.MINIMALIST && N, (k === w.SIGNALS || k === w.DESCRIPTION) && a.a.createElement("div", {
						className: "flex gap-x-xs justify-start items-center"
					}, a.a.createElement(R, {
						seed: t
					}), a.a.createElement("div", null, `${N} ${T}`))))), a.a.createElement(p.a, {
						doNotHideOtherSubscribeButtons: !0,
						className: "ml-auto mt-[2px]",
						postId: r,
						identifier: {
							name: v,
							type: b.a.SUBREDDIT
						},
						size: i.d.XS,
						getEventFactory: e => e ? ((e, t, s) => o => ({
							...x(e, o),
							subreddit: h.nb(o, t),
							action: f.c.CLICK,
							noun: n.SUBREDDIT_UNSUBSCRIBE,
							actionInfo: {
								...x(e, o).actionInfo,
								position: s
							}
						}))(C, r, t) : ((e, t, s) => o => ({
							...x(e, o),
							subreddit: h.nb(o, t),
							action: f.c.CLICK,
							noun: n.SUBREDDIT_SUBSCRIBE,
							actionInfo: {
								...x(e, o).actionInfo,
								position: s
							}
						}))(C, r, t)
					})), k === w.DESCRIPTION && a.a.createElement("div", {
						className: `pt-[4px] ml-[8px] pr-sm text-[12px] leading-[14px] font-normal text-neutral-content-weak ${"double"===g?"[-webkit-line-clamp:3] [text-overflow:ellipsis] [display:-webkit-box] [-webkit-box-orient:vertical] max-h-[4.143em] overflow-hidden":"truncate"}`
					}, a.a.createElement(_.default, {
						to: j || `/${S}`,
						onClick: P
					}, I))))
				}))
			};
			var L = s("./src/lib/makeActionCreator/index.ts"),
				D = s("./src/lib/makeGqlRequest/index.ts"),
				B = s("./src/lib/makeRequest/index.ts"),
				F = s("./src/reddit/helpers/graphql/normalizeSubredditAboutFromGql/index.ts"),
				U = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				W = s("./src/redditGQL/operations/GetRelatedCommunityRecommendations.json");
			const H = async (e, t) => {
				const s = await Object(D.a)(e, {
					...W,
					variables: t
				});
				if (!Object(B.c)(s)) throw new Error("Encountered an error while fetching live discovery content");
				return (e => {
					var t, s, n, o;
					const r = {
						modelVersion: null !== (s = null === (t = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === t ? void 0 : t.modelVersion) && void 0 !== s ? s : "related_community_recommendations_v1",
						aboutInfo: {},
						models: {}
					};
					return null === (o = null === (n = null == e ? void 0 : e.relatedCommunityRecommendations) || void 0 === n ? void 0 : n.recommendations) || void 0 === o ? void 0 : o.reduce((e, t) => e = {
						...e,
						models: {
							...e.models,
							[t.id]: Object(U.a)(t)
						},
						aboutInfo: {
							...e.aboutInfo,
							...Object(F.a)(t)
						}
					}, r)
				})(s.body.data)
			};
			Object(g.a)({
				features: {
					relatedCommunitiesRecommendations: j
				}
			});
			const V = Object(L.a)(E.b),
				K = Object(L.a)(E.c),
				G = Object(L.a)(E.a),
				q = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					t(V({
						subredditId: e
					}));
					try {
						const s = await H(o(), {
							subredditId: e
						});
						t(K({
							subredditId: e,
							modelVersion: s.modelVersion,
							subreddits: s.models,
							subredditAboutInfo: s.aboutInfo
						}))
					} catch (r) {
						t(G({
							subredditId: e,
							ApiError: r
						}))
					}
				};
			var z;
			! function(e) {
				e.Home = "home", e.Profile = "profile", e.Community = "community"
			}(z || (z = {}));
			const Q = e => {
				let {
					subredditDisplayText: t,
					variant: s,
					postId: m,
					subredditId: u,
					onDismiss: p,
					pageType: b
				} = e;
				const h = A(s),
					O = function(e) {
						let {
							pageType: t,
							activeUIVariant: s
						} = e;
						switch (t) {
							case z.Profile:
							case z.Community:
								return s === w.MINIMALIST ? "double" : "single";
							case z.Home:
							default:
								return "single"
						}
					}({
						pageType: b,
						activeUIVariant: h
					}),
					v = function(e, t) {
						return "double" === t ? e === w.DESCRIPTION ? 2 : 4 : 3
					}(h, O),
					[_, g] = Object(r.useState)(v),
					E = Object(d.a)(),
					{
						recommendations: y,
						fetchPending: j,
						recommendationsLoaded: C,
						fetchError: k,
						modelVersion: N
					} = function(e) {
						let {
							subredditId: t
						} = e;
						const s = Object(l.d)(),
							n = Object(l.e)(e => I(e, t)),
							{
								pending: o,
								loaded: a,
								error: i,
								modelVersion: d
							} = Object(l.e)(e => S(e, t)),
							c = !a && !o;
						return Object(r.useEffect)(() => {
							c && s(q(t))
						}, [s, t, c]), {
							recommendations: n,
							fetchPending: o,
							recommendationsLoaded: a,
							fetchError: i,
							modelVersion: d
						}
					}({
						subredditId: u
					}),
					T = _ < (y.length || 0),
					P = Object(r.useMemo)(() => !C || j ? null : k || y.length <= 0 ? {
						modelVersion: N,
						seen: !1,
						postId: m,
						subredditId: u,
						variant: s,
						numberItems: 0,
						seenItems: [],
						pageType: b
					} : {
						modelVersion: N,
						seen: !0,
						postId: m,
						subredditId: u,
						variant: s,
						numberItems: y.length,
						seenItems: y.slice(0, v),
						pageType: b
					}, [C, j, k, y, N, m, u, s, v, b]);
				if (Object(r.useEffect)(() => {
						E && P && E((e => t => ({
							...x(e, t),
							action: f.c.VIEW,
							noun: n.RECOMMENDATION_MODULE
						}))(P))
					}, [E, P]), !C || y.length <= 0) return null;
				return a.a.createElement("div", {
					className: "bg-[color:var(--newCommunityTheme-body)] mb-[10px] border border-solid border-[color:var(--newCommunityTheme-postLine)] rounded-[4px]"
				}, a.a.createElement("div", {
					className: "px-[16px] py-[8px] flex items-center"
				}, a.a.createElement("h3", {
					className: "text-[14px] leading-[20px] font-semibold text-neutral-content-strong truncate min-w-0"
				}, o.fbt._("Similar to {subreddit display text}", [o.fbt._param("subreddit display text", t)], {
					hk: "2ZdEdB"
				})), a.a.createElement("button", {
					className: "ml-auto w-[16px] h-[16px] inline-block",
					"aria-label": o.fbt._("Hide Recommended Communities", null, {
						hk: "1D8cvx"
					}),
					onClick: () => {
						p(), P && E((e => t => ({
							...x(e, t),
							action: f.c.CLICK,
							noun: n.CLOSE
						}))({
							...P,
							seenItems: null == y ? void 0 : y.slice(0, _)
						}))
					}
				}, a.a.createElement(c.a, {
					className: "block w-full h-full text-neutral-content-weak",
					fill: "currentColor"
				}))), a.a.createElement(a.a.Fragment, null, a.a.createElement(M, {
					recommendedCommunities: y,
					numberOfVisibleItems: _,
					postId: m,
					originalSubredditId: u,
					variant: s,
					pageType: b,
					columnLayout: O,
					dismissCallback: p
				}), T && a.a.createElement("div", {
					className: "flex items-center justify-center pb-[8px]"
				}, a.a.createElement(i.a, {
					kind: i.b.Button,
					priority: i.c.Tertiary,
					onClick: () => {
						const e = _ + v;
						g(e), E((e => t => ({
							...x(e, t),
							action: f.c.CLICK,
							noun: n.SHOW_MORE
						}))({
							...P,
							seenItems: null == y ? void 0 : y.slice(0, e)
						}))
					}
				}, o.fbt._("Show more", null, {
					hk: "2kAGl6"
				})))))
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, s) {
			e.exports = {
				ReportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				reportContainer: "rcWKqpRVFFbdiL-fFemgZ",
				DropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				dropdownLabelContainer: "_3rsZ2ZF99dXi8CxIvlUnna",
				DropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				dropdownLabel: "_1NxoOUgmzKH04lLU9O6O6z",
				mActive: "_1mwLBQ-SAEJSG4hvYZzPUO",
				SnoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				snoozeButton: "_1QMSuJL3vFpEsGhWHllIQ5",
				SnoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5",
				snoozeButtonContent: "tGdUIanRrFFgVZrnBwdl5"
			}
		},
		"./src/reddit/components/Reports/SnoozableReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/helpers/isComment.ts"),
				O = s("./src/reddit/helpers/trackers/modTools.ts"),
				x = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				v = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				_ = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				g = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				j = s.n(y);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = (e, t) => `SnoozableReport--${t}--${e}`, S = Object(r.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(E.b)(k(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: k(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(h.a)(t.reportedThingId) ? e(Object(c.h)(t.reportedThingId, t.reason, s)) : e(Object(l.fb)(t.reportedThingId, t.reason, s))
				}
			})), I = Object(u.a)(b.a);
			class N extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? d.kc.None : d.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(O.p)(Object(h.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: n,
						isDropdownOpen: r,
						isSnoozed: a,
						useNewFormat: d,
						className: c,
						dropdownClassName: l,
						iconClassName: m
					} = this.props, u = k(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(f.b, {
						id: u,
						className: Object(i.a)(j.a.DropdownLabelContainer, c),
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: u,
						className: j.a.DropdownLabel
					}, a ? C._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : d ? `${e} (${t})` : `${t}: ${e}`, r ? o.a.createElement(v.a, null) : o.a.createElement(x.a, null))), o.a.createElement(I, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: Object(i.a)(j.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: j.a.SnoozeButtonContent
					}, a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(g.a, {
						className: m
					}), C._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(_.a, {
						className: m
					}), C._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = S(Object(p.c)(N))
		},
		"./src/reddit/controls/Search/CommentSearch/index.m.less": function(e, t, s) {
			e.exports = {
				absolute: "_3JOs2fo7GARfPQK9n9uvyr",
				actionFont: "_2GiazGbWQeG84CupoExWj9",
				dismissButton: "_2lSQO1uFdnaWbYRKtLg3H-",
				metadataFont: "_1Vs6ZQxgSSIBCGCe2dcMoA",
				flex: "_1qRmLv2PYGtqa3xyVEYz_R",
				input: "_2WVAyd_SvtylHMe7sKaua9",
				linkTextColor: "_1zG8KFMibgWr8ahovOZAUB",
				paddingIcon: "_2i3sQHj_1l-LDzGfzQTjHM",
				postIcon: "_1rMy-IddyxrWMGR5hH5O1E",
				relative: "_3AIIvG4My2zfaJh7r8TucE",
				verticalDivider: "_34BFzBLxzKlRZTjBIHtnlh",
				dismissIcon: "_1Z_UNdjZZu53GD24SI5BLG",
				searchIcon: "_380giGvmbbYVTkgLoNx7ZP"
			}
		},
		"./src/reddit/controls/Search/CommentSearch/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return N
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "d", (function() {
				return R
			})), s.d(t, "c", (function() {
				return A
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./src/lib/addQueryParams/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/makeSearchKey/index.ts"),
				u = s("./src/reddit/actions/pages/search/index.ts"),
				p = s("./src/reddit/constants/keycodes.ts"),
				b = s("./src/reddit/constants/parameters.ts"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				h = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/helpers/search/searchClickSearchBarOriginElement.ts"),
				x = s("./src/reddit/helpers/search/searchImpressionId.ts"),
				v = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				_ = s("./src/reddit/helpers/trackers/searchResults.ts"),
				g = s("./src/reddit/hooks/usePageLayer.ts"),
				E = s("./src/reddit/hooks/useTracking.ts"),
				y = s("./src/reddit/icons/fonts/index.tsx"),
				j = s("./src/reddit/selectors/platform.ts"),
				C = s("./src/reddit/selectors/telemetry.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/controls/Search/CommentSearch/index.m.less"),
				I = s.n(S);
			const N = "comment_search-bar",
				T = "comment-search-button",
				P = "search-bar-dismiss-button",
				w = "COMMENT_SEARCH_BAR_TEST_ID";

			function R(e) {
				let {
					searchValue: t,
					post: s,
					subreddit: n
				} = e;
				return {
					[b.w]: t,
					[b.I]: [l.ic.Comments]
				}
			}

			function A(e) {
				const {
					expanded: t,
					bucketed: s,
					collapsed: l
				} = e.experiment, b = Object(g.a)(), S = Object(E.a)(), A = (null == b ? void 0 : b.queryParams.q) || "", [M, L] = Object(o.useState)(A), [D, B] = Object(o.useState)(t), F = Object(a.d)(), U = Object(o.useRef)(null), W = Object(a.e)(e => Object(f.h)(e, {
					pageLayer: b
				})), H = Object(a.e)(e => Object(f.s)(e, {
					pageLayer: b
				})), V = Object(a.e)(e => Object(k.mb)(e)), K = Object(a.e)(e => Object(k.rb)(e)), G = Object(a.e)(e => Object(j.i)(e));
				var q, z, Q;

				function Y() {
					var t;
					if (!M.trim() || !W) return;
					const s = new URL(W.permalink).pathname,
						n = R({
							searchValue: M,
							post: W,
							subreddit: H
						});
					O.a.set(C.a.CommentSearchBar), S(Object(_.o)(_.a.FULL_SEARCH_BUTTON, n, v.a.PdpCommentSearchBar, b || void 0));
					const o = Object(m.b)(W.id, void 0, n, V && K);
					F(Object(u.d)({
						key: o,
						options: n,
						subredditName: null == H ? void 0 : H.name,
						postId: W.id
					}));
					const r = Object(d.a)(s, n);
					F(Object(i.b)(Object(h.b)(r), {
						...null === (t = e.prevLocation) || void 0 === t ? void 0 : t.state,
						isOverlay: G,
						scrollOnLoad: !0
					}))
				}
				return q = U, z = B, Q = l, Object(o.useEffect)(() => {
					if (Q) return document.addEventListener("mousedown", e), () => {
						document.removeEventListener("mousedown", e)
					};

					function e(e) {
						q.current && !q.current.contains(e.target) && z(!1)
					}
				}, [q]), s ? r.a.createElement("div", {
					className: I.a.flex
				}, M || D ? r.a.createElement("div", {
					"data-testid": N
				}, r.a.createElement("label", {
					className: Object(c.a)(I.a.flex, I.a.relative)
				}, r.a.createElement("div", {
					className: I.a.absolute,
					role: "submit",
					onClick: Y
				}, r.a.createElement(y.a, {
					className: Object(c.a)(I.a.postIcon, I.a.paddingIcon),
					name: "search"
				})), r.a.createElement("input", {
					className: Object(c.a)(I.a.metadataFont, I.a.input),
					"data-testid": w,
					id: N,
					type: "search",
					onChange: e => {
						x.a.update(v.a.PdpCommentSearchBar), L(e.target.value)
					},
					onFocus: function() {
						x.a.update(v.a.PdpCommentSearchBar), O.a.set(C.a.CommentSearchBar), S(Object(_.o)(_.a.SEARCH_BAR, R({
							searchValue: M,
							post: W,
							subreddit: H
						}), v.a.PdpCommentSearchBar, b || void 0))
					},
					onKeyPress: function(e) {
						e.key === p.b.Enter && Y()
					},
					placeholder: n.fbt._("Search comments", null, {
						hk: "2ObH7B"
					}),
					ref: U,
					value: M
				}), M && r.a.createElement("button", {
					"aria-label": n.fbt._("Remove search bar text", null, {
						hk: "4twCsS"
					}),
					id: P,
					className: I.a.dismissButton,
					"data-testid": P,
					onClick: () => {
						L("")
					}
				}, r.a.createElement(y.a, {
					className: I.a.dismissIcon,
					name: "clear"
				})))) : r.a.createElement("button", {
					className: I.a.linkTextColor,
					"data-testid": T,
					id: T,
					onClick: () => {
						Promise.resolve(B(!0)).then(() => {
							var e;
							return null === (e = U.current) || void 0 === e ? void 0 : e.focus()
						})
					}
				}, r.a.createElement(y.a, {
					className: Object(c.a)(I.a.searchIcon, I.a.paddingIcon),
					name: "search"
				}), r.a.createElement("span", {
					className: I.a.actionFont
				}, n.fbt._("Search comments", null, {
					hk: "2ObH7B"
				})))) : null
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				toggleDisplay: "_2FKpII1jz0h6xCAw1kQAvS",
				toggleSwitch: "_2e2g485kpErHhJQUiyvvC2",
				redditStyle: "_3kUvbpMbR21zJBboDdBH7D",
				mActive: "_1L5kUnhRYhUJ4TkMbOTKkI",
				mDisabled: "_3clF3xRMqSWmoBQpXv8U5z",
				xs: "_1asGWL2_XadHoBuUlNArOq",
				s: "_1hku5xiXsbqzLmszstPyR3",
				m: "_10hZCcuqkss2sf5UbBMCSD",
				l: "_1fCdbQCDv6tiX242k80-LO",
				xl: "_2Jp5Pv4tgpAsTcnUzTsXgO"
			}
		},
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/controls/ToggleSwitch/index.m.less"),
				d = s.n(i);
			t.a = Object(n.memo)(Object(n.forwardRef)((e, t) => {
				const s = e.size || a.d.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(d.a.toggleSwitch, e.className, {
						[d.a.xs]: s === a.d.XS,
						[d.a.s]: s === a.d.S,
						[d.a.m]: s === a.d.M,
						[d.a.l]: s === a.d.L,
						[d.a.xl]: s === a.d.XL,
						[d.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[d.a.mDisabled]: e.disabled,
						[d.a.redditStyle]: e.redditStyle
					}),
					style: e.on && !e.disabled && e.activeColorOverride ? {
						backgroundColor: e.activeColorOverride
					} : void 0,
					id: e.id,
					role: "switch",
					tabIndex: e.tabIndex,
					type: "button",
					onClick: () => !e.disabled && e.onToggle && e.onToggle(),
					ref: t
				}, o.a.createElement("div", {
					className: d.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/lodash/map.js"),
				o = s.n(n),
				r = s("./src/lib/FocusTrap/index.ts");
			const a = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				i = () => a() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return o()(t, e => e.textContent || "")
				})() : null,
				d = (e, t) => {
					const s = document.createRange();
					return s.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, s) < 0 && e.compareBoundaryPoints(Range.START_TO_END, s) > 0
				},
				c = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const s = t.getRangeAt(0);
					if (!d(s, e)) return;
					const {
						startContainer: n,
						startOffset: o,
						endContainer: r,
						endOffset: a
					} = s, i = document.createRange();
					i.selectNode(e);
					let c = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, s) && (i.setStart(n, o), c = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, s) && (i.setEnd(r, a), c = !1), c) return [e];
					const l = document.createElement("div");
					return l.appendChild(i.cloneContents()), [...l.childNodes]
				},
				l = (e, t, s) => {
					let n = e;
					for (; n && (!s || !s(n));) {
						if (n && t(n)) return n;
						n = n.parentElement
					}
				},
				m = e => e && e.parentElement && l(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				u = e => {
					e.querySelectorAll(r.a).forEach(e => {
						e.tabIndex = -1
					})
				}
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
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.K.SERVER_ERROR,
				fields: [{
					field: "",
					msg: n.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const o = e => {
				const {
					moderation: t,
					...s
				} = e, {
					lastModAction: o,
					activeModerators: r
				} = (null == t ? void 0 : t.modActivitySummary) || {}, a = [], i = {};
				null == r || r.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: s
					} = e.node;
					if (!s) return;
					const n = null == s ? void 0 : s.id;
					n && (a.push(n), i[n] || (i[n] = {
						info: {},
						lastModAction: {}
					}), i[n].info = s, i[n].lastModAction = {
						...t
					})
				});
				const d = {
					lastModAction: o,
					activeMods: a
				};
				return {
					subreddit: Object(n.a)(s),
					summary: {
						sub: d,
						mods: i
					}
				}
			}
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
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/helpers/isComment.ts"),
				r = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				i = e => !0 === e ? a.a.upvoted : !1 === e ? a.a.downvoted : a.a.notVoted,
				d = s("./src/reddit/models/Comment/index.ts");
			t.a = e => {
				const t = {
					approvedAtUTC: e.approved_at_utc,
					approvedBy: e.approved_by,
					author: e.author,
					authorId: e.author_fullname,
					bannedAtUTC: e.banned_at_utc,
					bannedBy: e.banned_by,
					body: e.body_html,
					bodyMD: e.body,
					collapsed: e.collapsed,
					collapsedReason: e.collapsed_reason,
					collapsedReasonCode: e.collapsed_reason_code,
					collapsedBecauseCrowdControl: e.collapsed_because_crowd_control,
					commentType: e.comment_type,
					created: e.created_utc,
					deletedBy: l(e),
					distinguishType: e.distinguished || "",
					editedAt: null,
					id: e.name,
					ignoreReports: e.ignore_reports,
					isAdmin: "admin" === e.distinguished,
					isAuthorPremium: !!e.author_premium,
					isApproved: e.approved,
					isDeleted: e.author === n.G,
					isGildable: e.can_gild,
					isLocked: e.locked,
					isMod: "moderator" === e.distinguished,
					isOp: e.is_submitter,
					isRemoved: e.removed,
					isScoreHidden: e.score_hidden,
					isSpam: e.spam,
					isStickied: e.stickied,
					isSaved: e.isSaved,
					isSystem: !1,
					subredditId: e.subreddit_id,
					markdown: e.body,
					media: {
						mediaMetadata: e.media_metadata,
						type: "rtjson",
						richtextContent: c(e.rtjson),
						rteMode: e.rte_mode
					},
					modReports: e.mod_reports,
					modReportsDismissed: e.mod_reports_dismissed,
					numReports: e.num_reports,
					parentId: Object(o.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: i(e.likes)
				};
				return e.all_awardings && (t.allAwardings = Object(r.a)(e.all_awardings)), e.awarders && (t.awarders = e.awarders), e.associated_award && (t.associatedAwardId = e.associated_award.id, t.associatedAward = Object(r.b)(e.associated_award)), t
			};
			const c = e => "string" == typeof e ? JSON.parse(e) : e,
				l = e => e.author !== n.G ? null : e.body === n.H ? d.c.User : e.body === n.Rb ? d.c.Moderator : null
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
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, s) {
			"use strict";
			var n;
			s.d(t, "d", (function() {
					return r
				})), s.d(t, "b", (function() {
					return a
				})), s.d(t, "a", (function() {
					return i
				})), s.d(t, "c", (function() {
					return d
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(n || (n = {}));
			const o = e => {
					if (window.sessionStorage) {
						const t = window.sessionStorage.getItem(e);
						if (t) return JSON.parse(t)
					}
					return null
				},
				r = e => {
					((e, t) => {
						window.sessionStorage && window.sessionStorage.setItem(e, JSON.stringify(t))
					})(n.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				a = () => o(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				i = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				d = () => {
					return !!o(n.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return O
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const m = {},
				u = e => Object(i.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(i.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
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
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : m,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				O = e => {
					const t = Object(r.a)(Object(o.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "k", (function() {
				return g
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "i", (function() {
				return y
			})), s.d(t, "l", (function() {
				return j
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/models/PostDraft/index.ts"),
				i = s("./src/reddit/selectors/comments.ts"),
				d = s("./src/reddit/selectors/platform.ts"),
				c = s("./src/reddit/selectors/telemetry.ts"),
				l = s("./src/telemetry/index.ts"),
				m = s("./src/reddit/constants/richTextJson.ts");
			const u = e => {
					const t = Object(d.o)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(c.p)(e),
						screen: Object(c.db)(e),
						subreddit: Object(c.mb)(e),
						post: t ? Object(c.L)(e, t) : null,
						profile: Object(c.U)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				p = async (e, t, n, o, r) => {
					const a = {
							commentId: r,
							commentsPageKey: n
						},
						d = r && Object(i.j)(e, a) || 0,
						{
							getFlairData: m
						} = await s.e("getFlairData").then(s.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts")),
						p = o ? "image" : void 0;
					return Object(l.a)({
						noun: "comment",
						...u(e),
						comment: r ? Object(c.i)({
							state: e,
							commentId: r,
							contentType: p
						}) : null,
						listing: Object(c.A)(e, void 0, {
							depth: d
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: m(e),
						media: {
							mimetype: null == o ? void 0 : o.mimetype,
							size: null == o ? void 0 : o.size
						}
					})
				}, b = e => {
					let {
						state: t,
						bodyText: s,
						postId: o,
						error: r,
						parentId: a,
						uploadMetadata: i
					} = e;
					const d = u(t),
						c = r.type === n.Qb ? "karma_rate_limit" : r.fields && r.fields.length > 0 ? r.fields[0].msg : void 0,
						p = i ? "image" : function(e) {
							return e.includes(`"id":"${m.d}`)
						}("string" == typeof s ? s : JSON.stringify(s)) ? "giphy" : void 0;
					return Object(l.a)({
						...d,
						source: r.type === n.Qb ? "backend" : "comment_composer",
						actionInfo: {
							...d.actionInfo,
							reason: c
						},
						action: "error",
						noun: "comment",
						comment: {
							bodyText: s,
							parentId: a,
							postId: o,
							contentType: p
						},
						media: {
							mimetype: null == i ? void 0 : i.mimetype,
							size: null == i ? void 0 : i.size
						}
					})
				}, f = e => Object(l.a)({
					noun: "cancel",
					...u(e)
				}), h = (e, t) => {
					t === a.c.replyToPost && Object(l.a)({
						noun: "input",
						...u(e)
					})
				}, O = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(c.p)(t),
					screen: Object(c.db)(t),
					subreddit: Object(c.mb)(t),
					post: Object(c.L)(t, e)
				}), x = e => Object(l.a)({
					noun: "edit",
					...u(e)
				}), v = e => Object(l.a)({
					noun: "save_edit",
					...u(e)
				}), _ = (e, t) => s => {
					const n = "image_upload" === e || "video_upload" === e;
					return {
						...u(s),
						noun: n ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, g = () => e => ({
					...u(e),
					action: "open",
					noun: "gif_tooltip"
				}), E = e => t => ({
					...u(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), y = () => e => ({
					...u(e),
					action: "select",
					noun: "gif_tooltip_result"
				}), j = () => e => ({
					...u(e),
					source: "comment_composer",
					action: "open",
					noun: "images_tooltip"
				})
		},
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			})), s.d(t, "c", (function() {
				return p
			}));
			var n = s("./src/reddit/components/CreatorStats/helpers.ts"),
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const a = e => {
					switch (e) {
						case n.b.Available:
							return "insights_shown";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
							return "post_too_old";
						case n.b.Expired:
							return "insights_expired";
						default:
							return ""
					}
				},
				i = (e, t) => s => ({
					...Object(r.p)(s),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.mb)(s),
					post: Object(r.L)(s, e),
					userSubreddit: Object(r.vb)(s),
					actionInfo: Object(r.d)(s, {
						reason: a(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.p)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.L)(s, t),
					subreddit: Object(r.mb)(s),
					userSubreddit: Object(r.vb)(s)
				}),
				c = e => {
					switch (e) {
						case n.b.Available:
							return "stats";
						case n.b.NotAvailableYet:
							return "not_enough_views";
						case n.b.NotAvailable:
						case n.b.Expired:
							return "no_data";
						case n.b.Quarantined:
							return "quarantined";
						default:
							return ""
					}
				},
				l = e => t => ({
					...Object(r.p)(t),
					action: o.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.L)(t, e, void 0, 0),
					profile: Object(r.U)(t)
				}),
				m = (e, t, s) => n => ({
					...Object(r.p)(n),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						reason: c(t)
					}),
					post: Object(r.L)(n, e, void 0, s)
				}),
				u = (e, t, s, n, a, i) => d => ({
					...Object(r.p)(d),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.L)(d, e, void 0, i),
					subreddit: Object(r.mb)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: a
					}
				}),
				p = (e, t, s) => n => ({
					...Object(r.p)(n),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.L)(n, e, void 0, s),
					subreddit: Object(r.mb)(n)
				})
		},
		"./src/reddit/helpers/trackers/modListing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return o
			})), s.d(t, "f", (function() {
				return r
			})), s.d(t, "c", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				r = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				a = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				}),
				i = (e, t) => s => ({
					source: "moderator",
					action: "view",
					noun: "activemod_details",
					...Object(n.p)(s),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: e ? "general_queue" : "community"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.ob)(s, t)
					}
				}),
				d = (e, t, s) => o => ({
					source: "moderator",
					action: "click",
					noun: "subreddit_filter",
					...Object(n.p)(o),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "activity_card" : "queue_filters",
						reason: e ? "active" : "inactive"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.ob)(o, t)
					}
				}),
				c = (e, t, s, o) => r => ({
					source: "moderator",
					action: "click",
					noun: o ? "expand_previous_actions" : "collapse_previous_actions",
					...Object(n.p)(r),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "post" : "comment",
						reason: t
					},
					subreddit: Object(n.nb)(r, e)
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return i
			})), s.d(t, "y", (function() {
				return d
			})), s.d(t, "m", (function() {
				return c
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
				return f
			})), s.d(t, "k", (function() {
				return h
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "d", (function() {
				return x
			})), s.d(t, "n", (function() {
				return v
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "t", (function() {
				return j
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "x", (function() {
				return S
			})), s.d(t, "u", (function() {
				return I
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "s", (function() {
				return T
			})), s.d(t, "v", (function() {
				return P
			})), s.d(t, "w", (function() {
				return w
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
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...r(e)
				}),
				c = () => e => ({
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
				O = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...r(e)
				}),
				x = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				v = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				_ = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: o.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				g = {
					[n.d.Hourly]: "hourly_frequency",
					[n.d.Daily]: "daily_frequency",
					[n.d.Weekly]: "weekly_frequency",
					[n.d.Monthly]: "monthly_frequency",
					[n.b]: "custom_frequency"
				},
				E = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : g[e],
					...r(t)
				}),
				y = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				j = (e, t, s) => a => ({
					source: "post",
					action: "click",
					noun: Object(n.m)(e),
					...r(a),
					actionInfo: o.d(a, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				C = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				k = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				S = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				I = () => (e, t) => ({
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
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...r(e),
					scheduledPost: a(t)
				}),
				P = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				w = () => (e, t) => {
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
		"./src/reddit/hooks/useLocalStorage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				o = s("./src/reddit/helpers/localStorage/index.ts");
			const r = {},
				a = (e, t, s) => (r[e] || (r[e] = {
					callbacks: [],
					value: s
				}), r[e].callbacks.push(t), {
					deregister: () => {
						const {
							callbacks: s
						} = r[e], n = s.indexOf(t);
						n > -1 && s.splice(n, 1)
					},
					emit: s => {
						r[e].value !== s && (r[e].value = s, r[e].callbacks.forEach(e => {
							e !== t && e(s)
						}))
					}
				});

			function i(e, t) {
				const s = Object(n.useRef)(null);
				let r;
				r = Object(o.G)(e);
				const [i, d] = Object(n.useState)(null != r ? r : t);
				return Object(n.useEffect)(() => (s.current = a(e, d, t), () => {
					var e;
					return null === (e = s.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(n.useEffect)(() => {
					var e;
					null === (e = s.current) || void 0 === e || e.emit(i)
				}, [i]), [i, function(t) {
					Object(o.Lb)(e, t), d(t)
				}]
			}
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
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, s) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/colors.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = s.n(d);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, s) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, s) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
			t.a = d
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
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, s) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(d.a.ModSettings, Object(a.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, s) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, o.a.createElement("path", {
				d: "M20 2.5C10.3 2.5 2.5 10.3 2.5 20c0 9.7 7.8 17.5 17.5 17.5S37.5 29.7 37.5 20C37.5 10.3 29.7 2.5 20 2.5zM24.2 27.7L20 23.5l-4.2 4.2c-1.1 1.1-2.5 1.1-3.5 0-1.1-1.1-1.1-2.4 0-3.5l4.2-4.2-4.2-4.2c-1.1-1.1-1.1-2.5 0-3.5 1.1-1.1 2.4-1.1 3.5 0l4.2 4.2 4.2-4.2c1.1-1.1 2.5-1.1 3.5 0 1.1 1.1 1.1 2.4 0 3.5L23.5 20l4.2 4.2c1.1 1.1 1.1 2.5 0 3.5C26.7 28.8 25.3 28.8 24.2 27.7z"
			}))
		},
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, s) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), o.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, s) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				i = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = e => {
				let {
					className: t,
					isSubreddit: s,
					...n
				} = e;
				return o.a.createElement("svg", d({
					className: Object(r.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !s
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n), o.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = c
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(a);
			const d = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, s) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				i = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
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
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return m
			}));
			var n = s("./src/reddit/helpers/isPost.ts");
			const o = 50,
				r = 50,
				a = 1e4,
				i = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(n.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				m = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type,
						lock_comment: e.isLocked
					}
				}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "s", (function() {
				return a
			})), s.d(t, "e", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "p", (function() {
				return u
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "r", (function() {
				return O
			})), s.d(t, "l", (function() {
				return x
			})), s.d(t, "k", (function() {
				return v
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "n", (function() {
				return y
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "q", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				o = s("./src/reddit/models/GqlTopLevelField.ts"),
				r = s("./src/reddit/models/User/index.ts");
			const a = "scheduledposts";
			var i, d, c;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(i || (i = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(d || (d = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(c || (c = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				m = e => e.__typename === r.c.AvailableRedditor,
				u = e => e.__typename === o.a.Subreddit;
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
			const O = e => b[h[e]],
				x = e => h[b[e]],
				v = e => f[b[e]],
				_ = e => b[f[e]],
				g = e => h[f[e]];
			var E;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(E || (E = {}));
			const y = e => {
					switch (e) {
						case E.Hourly:
						case E.Daily:
						case E.Weekly:
						case E.Monthly:
							return !0
					}
					return !1
				},
				j = "custom",
				C = e => {
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
				k = e => "frequency" in e && !!e.frequency
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
				d = s("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const c = {};

			function l(e) {
				return "userId" in e
			}

			function m(e, t, s, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === i.a.First ? n[d.a.Loyalty][o] : n[d.a.Achievement][o] : l(e) ? n[d.a.Cosmetic][d.c.MyBadges][o] : n[d.a.Cosmetic][d.c.Gallery][o]) && (l(e) ? s.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
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
					[d.a.Loyalty]: {},
					[d.a.Achievement]: {},
					[d.a.Cosmetic]: {
						[d.c.Gallery]: {},
						[d.c.MyBadges]: {}
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
					t[d.a.Loyalty][s] = {
						...o,
						locked: [],
						unlocked: []
					}, t[d.a.Achievement][s] = {
						...o,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.Gallery][s] = {
						...o,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.MyBadges][s] = {
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
						[d.a.Loyalty]: p(t[d.a.Loyalty], e.collections),
						[d.a.Achievement]: p(t[d.a.Achievement], e.collections),
						[d.a.Cosmetic]: {
							[d.c.Gallery]: p(t[d.a.Cosmetic][d.c.Gallery], e.collections),
							[d.c.MyBadges]: p(t[d.a.Cosmetic][d.c.MyBadges], e.collections)
						}
					},
					subscription: e.subscription,
					userOwnedBadges: e.userOwnedBadges.map(t => e.badges[t]).filter(Boolean)
				}
			}
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
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
		"./src/reddit/reducers/features/modActivitySummaries/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/actions/modQueue/constants.ts");
			t.a = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case n.l: {
						const {
							summary: s,
							subreddit: n
						} = t.payload;
						return {
							...e,
							[n.id]: {
								...e[n.id],
								...s
							}
						}
					}
					case n.i:
					case n.f:
					case n.r:
					case n.u:
					case n.A: {
						const {
							response: s
						} = t.payload;
						return {
							...e,
							...s.modActivitySummaries
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/realtimeModqueue/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				o = s("./src/reddit/actions/modQueue/constants.ts");
			var r = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.m: {
							const {
								targetID: s
							} = t.payload;
							return e.includes(s) ? e : [...e, s]
						}
						case o.p: {
							const {
								targetID: s
							} = t.payload, n = e.indexOf(s);
							return n > -1 && e.splice(n, 1), e
						}
						default:
							return e
					}
				},
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/comment/constants.ts")),
				i = s("./src/reddit/actions/platform.ts"),
				d = s("./src/reddit/actions/post.ts");
			const c = ["isApproved", "isRemoved", "isSpam"];
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.q:
					case d.k: {
						const s = t.payload;
						return Object.keys(s).map(t => {
							const n = Object.keys(s[t]);
							let o = !1;
							n.map(e => {
								c.includes(e) && (o = !0)
							}), !e.includes(t) && o && (e = [...e, t])
						}), e
					}
					case o.p: {
						const {
							targetID: s
						} = t.payload;
						return e.includes(s) ? e : [...e, s]
					}
					case i.g:
						return [];
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				toUpdate: r,
				updated: l
			})
		},
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./node_modules/reselect/es/index.js");
			const a = Object(r.a)(e => Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: n.Ab
			}), e => ({
				bucketed: e === n.gd.ExpandedSearch || e === n.gd.CollapsedSearch,
				collapsed: e === n.gd.CollapsedSearch,
				expanded: e === n.gd.ExpandedSearch
			}))
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/experiments/utils.ts");
			const i = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				d = Object(n.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), a.a),
				c = e => i.find(t => !!Object(a.a)(d(e, t))),
				l = Object(n.a)(c, e => !!e),
				m = e => {
					const t = c(e);
					return !!t && d(e, t) === o.Y.SkipOnboarding
				},
				u = e => {
					const t = c(e);
					return !!t && d(e, t) === o.Y.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/shredditMigration.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "f", (function() {
				return O
			})), s.d(t, "e", (function() {
				return v
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts");
			const a = /^\/?(new|top|hot|controversial|rising|best)?\/?$/,
				i = /^\/r\/popular\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				d = /^\/r\/[^/]+\/?((controversial|new|about|top)\/?)?$/,
				c = /^\/r\/[^/]+\/w(iki)?\/?([^/]+\/?)?$/,
				l = /^\/u(?:ser)?\/[^/]+(\/[^/]+)?$/,
				m = e => !!e.match(a) || !!e.match(i),
				u = e => !e.match(i) && ("/r/all" !== e && !e.startsWith("/r/all/") && (!!e.match(d) || !!e.match(c))),
				p = (e, t) => !!m(t) && [n.cg.Enabled, n.cg.HardReload].includes(Object(o.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: n.Nf
				})),
				b = (e, t) => !!u(t) && [n.cg.Enabled, n.cg.HardReload].includes(Object(o.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: n.Mf
				})),
				f = (e, t) => !(!u(t) && !m(t)) && Object(o.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: n.ue
				}) === n.Yd,
				h = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.f,
						experimentName: n.Lf
					})
				},
				O = (e, t) => !!(e => {
					return /^(?:\/r\/[^\/]+)?\/search\/?$/i.test(e) || /^\/u(?:ser)?\/[^\/]+\/m\/[^\/]+\/search\/?$/i.test(e)
				})(t) && (h(e) === n.cg.Enabled || h(e) === n.cg.HardReload),
				x = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.f,
						experimentName: n.Of
					})
				},
				v = (e, t) => !!(e => !!e.match(l))(t) && (x(e) === n.cg.Enabled || x(e) === n.cg.HardReload)
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/user.ts"),
				a = s("./src/reddit/selectors/experiments/shredditMigration.ts");
			const i = Object(o.a)(r.S, e => !e),
				d = (e, t) => {
					const s = t();
					Object(r.S)(s) || e.block(e => {
						const t = (e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname),
							o = Object(a.b)(s, e.pathname),
							r = Object(a.d)(s, e.pathname),
							i = Object(a.c)(s, e.pathname),
							d = Object(a.f)(s, e.pathname),
							c = Object(a.e)(s, e.pathname);
						if (o || t || r || i || d || c) {
							const t = e.pathname + e.search;
							return Object(n.f)(s), window.location.href = t, !1
						}
					})
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
					experimentName: o.qg,
					experimentEligibilitySelector: r.a
				}), e => e),
				i = Object(n.a)(a, e => e === o.kg)
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(o.Gg)(t)
				},
				d = Object(n.a)(i, r.d, (e, t) => e && !t)
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
				return f
			})), s.d(t, "d", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				a = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				i = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const l = new Set([d.g.AntiEvilOps, d.g.AutomodFiltered, d.g.CommunityOps, d.g.ContentTakedown, d.g.CopyrightTakedown, d.g.Moderator, d.g.Reddit]),
				m = new Set([d.g.Author, d.g.AuthorDeleted]),
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
				f = Object(o.a)(c.m, r.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				h = Object(o.a)(r.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"f0b0ca6701b9"}')
		},
		"./src/redditGQL/operations/GetRelatedCommunityRecommendations.json": function(e) {
			e.exports = JSON.parse('{"id":"1a3f607eabf6"}')
		},
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummaryByID.json": function(e) {
			e.exports = JSON.parse('{"id":"d968e053a7b8"}')
		},
		"./src/redditGQL/operations/SingleCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"7e1a2a69e2d6"}')
		},
		"./src/redditGQL/operations/SinglePostInfoById.json": function(e) {
			e.exports = JSON.parse('{"id":"7226f3bb6e27"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.088bdb9239fd915e3330.js.map