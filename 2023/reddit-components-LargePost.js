// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.228e34d9da06550e7e61.js
// Retrieved at 1/26/2023, 10:10:05 AM by Reddit Dataminer v1.0.0
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
						_ = s(/version\/(\d+(\.\d+)?)/i),
						v = /tablet/i.test(t) && !/tablet pc/i.test(t),
						g = !v && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: _ || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: _ || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: _ || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: _ || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || _
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
						version: _ || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: _ || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? o = {
						name: "Android",
						version: _
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, _ && (o.version = _)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, _ && (o.version = _)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || _
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && _ && (o.version = _)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !a && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : E ? (o.xbox = e, o.osname = "Xbox") : f ? (o.windows = e, o.osname = "Windows") : O && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var j = "";
					o.windows ? j = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? j = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? j = (j = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? j = (j = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? j = s(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? j = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? j = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? j = s(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (j = s(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (o.osversion = j);
					var C = !o.windows && j.split(".")[0];
					return v || d || "ipad" == r || a && (3 == C || C >= 4 && !g) || o.silk ? o.tablet = e : (g || "iphone" == r || "ipod" == r || a || i || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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
			const r = [o.yc, o.ub, o.E, o.U, o.pb, o.Xb],
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
					[o.E]: e => n.fbt._({
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
					[o.E]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
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
						[o.E]: "",
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
				return je
			})), s.d(t, "v", (function() {
				return ke
			})), s.d(t, "o", (function() {
				return Se
			})), s.d(t, "m", (function() {
				return Ne
			})), s.d(t, "b", (function() {
				return Te
			})), s.d(t, "c", (function() {
				return Ae
			})), s.d(t, "s", (function() {
				return Me
			})), s.d(t, "g", (function() {
				return Le
			})), s.d(t, "h", (function() {
				return De
			})), s.d(t, "k", (function() {
				return Fe
			})), s.d(t, "e", (function() {
				return Ue
			})), s.d(t, "d", (function() {
				return Ve
			})), s.d(t, "a", (function() {
				return Ge
			})), s.d(t, "j", (function() {
				return He
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
				_ = s("./src/lib/makeApiRequest/index.ts"),
				v = s("./src/lib/makeGqlRequest/index.ts"),
				g = s("./src/lib/omitHeaders/index.ts"),
				E = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				j = s("./src/reddit/constants/headers.ts"),
				C = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				y = s("./src/reddit/helpers/genericServerError/index.ts"),
				k = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				S = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				P = s("./src/reddit/models/PostCreationForm/index.ts"),
				N = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				w = s("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				T = s("./src/reddit/helpers/graphql/helpers.ts"),
				I = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				R = s("./src/redditGQL/operations/CreateComment.json");
			const A = (e, t, s, n) => {
					let o, r;
					if (n === P.i.MARKDOWN) o = s.text, r = null;
					else {
						o = null;
						let e = null;
						s.rteState && (e = E.a.toRichTextJSON(s.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(v.a)(e, {
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
					return s.commentMode === P.i.MARKDOWN ? o.text = s.text : (o.text = null, o.richtext_json = n), Object(_.a)(Object(g.a)(e, [j.a]), {
						method: x.ob.POST,
						endpoint: Object(C.a)(Object(N.a)(Object(w.a)(`${e.apiUrl}/api/comment.json`))),
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
						error: e.error || Object(y.a)()
					})
				}, L = async (e, t, s, n, o) => {
					const r = n.commentMode === P.i.MARKDOWN,
						a = {
							postId: t || null,
							parentId: s || null,
							content: {
								markdown: r ? n.text : null,
								richText: r ? null : o
							}
						};
					return Object(v.a)(e, {
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
								error: Object(T.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(T.f)(t.errors)
							};
							if (t.ok) return {
								...e,
								body: {
									comment: Object(I.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(y.a)()
						}
					})
				};
			var D = s("./src/redditGQL/operations/UpdateComment.json");
			var F = s("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var B = s("./src/reddit/endpoints/post/index.tsx"),
				U = s("./src/reddit/endpoints/post/convert.ts"),
				z = s("./src/reddit/featureFlags/index.ts"),
				W = s("./src/reddit/helpers/comment/index.ts"),
				K = s("./src/reddit/helpers/correlationIdTracker.ts"),
				V = s("./src/reddit/helpers/dom/index.ts"),
				G = s("./src/reddit/helpers/localStorage/index.ts"),
				H = s("./src/reddit/helpers/sessionStorage/index.ts"),
				q = s("./src/reddit/helpers/trackers/commentsPage.ts"),
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
				experimentName: ne.zb
			}), e => e === ne.Id);
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
				_e = Object(o.a)(ue.K),
				ve = async (e, t, s, n, o) => {
					const r = n.ok && n.body,
						a = r && r.comment && r.comment.id;
					await q.g(e, s, t, o, a)
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
					if (z.d.enableToxicityWarning(r)) {
						if (!(await A(o(), i, d, l))) return void t(Object(c.i)(ge))
					}
					t(je(e))
				}, je = e => async (t, s) => {
					t(Object(c.g)(ge));
					const n = s(),
						o = Object(ie.a)(n),
						r = Object(ie.c)(n);
					if (!n.user.account && o) {
						const s = Object(W.e)(e.formData, n.uploads),
							o = Object(W.d)(e.formData, n.uploads);
						t(Object(c.k)({
							actionSource: c.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(H.d)({
							comment: {
								...e,
								richTextJSONData: s,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(ye(e, !1))
				};

			function Ce(e, t) {
				return e === P.i.MARKDOWN && ae(t)
			}
			const ye = (e, t, s, o) => {
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
							gqlContext: _
						} = O;
						var v;
						const g = h(),
							E = Object($.d)(g, {
								postId: r
							}),
							j = E ? Object(W.b)() : d,
							C = Object(te.f)(g, {
								commentId: j
							}),
							y = Object(le.m)(g);
						if (!y) return;
						if (C && !E) return;
						t || e(fe({
							draftKey: j,
							draft: c,
							commentsPageKey: i,
							optimisticComment: E ? Object(W.c)({
								temporalId: j,
								draft: c,
								post: Object(ce.G)(g, {
									postId: r
								}),
								author: y,
								subredditId: (null === (v = Object(de.e)(g)) || void 0 === v ? void 0 : v.id) || ""
							}) : void 0
						}));
						const k = c.commentMode;
						let S;
						const N = t && s ? s : Object(W.e)(c, g.uploads),
							w = Object(W.f)(N, g.uploads);
						if ((S = Ce(k, g) ? await L(_(), r, null, c, N) : await M(x(), r, c, N)).ok) {
							const s = S.body;
							if (e(Oe({
									...s,
									headCommentId: Object(ee.w)(g, {
										commentsPageKey: i
									}),
									commentsPageKey: i,
									draftKey: j,
									upload: w
								})), t) {
								const e = Object(de.i)(g);
								Object(a.a)(!!e)
							}
							const n = Object(ce.G)(h(), {
								postId: r
							});
							e(Object(m.y)(n, f.a.CommentSubmitted))
						} else {
							if (S.error) {
								const e = t && o ? o : Object(W.d)(c, g.uploads);
								q.f({
									state: g,
									bodyText: e,
									postId: r,
									error: S.error,
									uploadMetadata: null == w ? void 0 : w.metadata
								})
							}
							const s = S.error && S.error.fields && S.error.fields[0] ? S.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(_e({
								draftKey: j,
								error: S.error
							})), E || e(Object(b.f)({
								duration: b.a,
								kind: X.b.Error,
								text: s
							}))
						}
						ve(h(), i, l, S, null == w ? void 0 : w.metadata).then(() => S.ok && l === P.i.RICH_TEXT ? Object(K.b)(K.a.CommentComposer) : void 0), u || Object(p.d)(), t && Object(H.a)()
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
					if (p && (b = p.name), z.d.enableToxicityWarning(u)) {
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
						const s = Object(W.e)(e.formData, n.uploads),
							o = Object(W.d)(e.formData, n.uploads);
						t(Object(c.k)({
							actionSource: c.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(H.d)({
							comment: {
								...e,
								richTextJSONData: s,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(Pe(e, !1))
				}, Pe = (e, t, s, n) => async (o, r, i) => {
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
					} = e, x = r(), _ = Object(te.c)(x, {
						commentId: m
					}), v = _ && Object($.d)(x, {
						postId: _.postId
					}) && Object(se.d)(x), g = _ && Object($.d)(x, {
						postId: _.postId
					}), E = g ? Object(W.b)() : f, j = Object(te.f)(x, {
						commentId: E
					}), C = Object(le.m)(x);
					if (!C) return;
					if (j && !g) return;
					t || o(fe({
						draftKey: E,
						draft: h,
						commentsPageKey: u,
						optimisticComment: g && _ ? Object(W.c)({
							temporalId: E,
							draft: h,
							post: Object(ce.G)(x, {
								postId: _.postId
							}),
							author: C,
							subredditId: (null === (l = Object(de.e)(x)) || void 0 === l ? void 0 : l.id) || "",
							parentId: _.id
						}) : void 0
					})), v || o(Te({
						parentCommentId: m,
						commentsPageKey: u
					}));
					const y = h.commentMode,
						k = t && s ? s : Object(W.e)(h, x.uploads),
						S = Object(W.f)(k, x.uploads);
					let P;
					if ((P = Ce(y, x) ? await L(c(), null, m, h, k) : await M(d(), m, h, k)).ok) {
						if (o(xe({
								...P.body,
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
						if (P.error) {
							if (!_) return;
							const e = t && n ? n : Object(W.d)(h, x.uploads);
							q.f({
								state: x,
								bodyText: e,
								postId: _.postId,
								parentId: m,
								error: P.error,
								uploadMetadata: null == S ? void 0 : S.metadata
							})
						}
						o(_e({
							draftKey: E,
							error: P.error
						}))
					}
					ve(r(), u, O, P, null == S ? void 0 : S.metadata), v || Object(p.d)(), t && Object(H.a)()
				}, Ne = () => async e => {
					const t = Object(H.b)();
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
						i && e(Object(l.skipOnboardingModal)()), o ? await e(ye({
							...t.comment,
							postId: o
						}, !0, r, a)) : n && void 0 !== s && await e(Pe({
							...t.comment,
							parentCommentId: n,
							parentCommentDepth: s
						}, !0, r, a))
					}
				}, we = Object(o.a)(ue.s), Te = Object(o.a)(ue.r), Ie = Object(o.a)(ue.n), Re = (Object(o.a)(ue.i), Object(o.a)(ue.o)), Ae = (Object(o.a)(ue.v), (e, t, s) => async (o, r, a) => {
					let {
						apiContext: i
					} = a;
					const d = e === P.i.RICH_TEXT;
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
						if ((u || m && n) && (Object.keys(m).forEach(s => m[s] && e(Te({
								parentCommentId: s,
								commentsPageKey: t
							}))), u)) return;
						let p = "",
							b = null;
						const f = a.user.prefs.commentMode,
							h = Object(V.d)();
						if (h) {
							const e = h.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (f === P.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
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
							const n = we({
								parentCommentId: s,
								commentsPageKey: t,
								draftKey: l,
								formData: x
							});
							e(Object(i.startChangeUsernameFlow)(n))
						} else e(we({
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
						e(Te({
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
				}, Fe = (e, t) => s => s(Ie({
					draftKey: e,
					formData: t
				})), Be = Object(o.a)(ue.u), Ue = e => {
					let {
						commentId: t,
						commentMode: s,
						commentsPageKey: n,
						draftKey: o,
						text: r
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (q.c(i), e(Be({
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
				}, ze = Object(o.a)(ue.F), We = Object(o.a)(ue.E), Ke = Object(o.a)(ue.G), Ve = Object(o.a)(ue.j), Ge = Object(o.a)(ue.f), He = e => {
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
						e(ze({
							draftKey: n
						})), q.d(c);
						const l = Object(W.e)(o, c.uploads),
							m = o.commentMode;
						let u;
						if ((u = Ce(m, c) ? await (async (e, t, s, n, o) => {
								const r = o === P.i.MARKDOWN,
									a = {
										commentId: t,
										content: {
											markdown: r ? s.text : null,
											richText: r ? null : n
										}
									};
								return Object(v.a)(e, {
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
											error: Object(T.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(T.f)(t.errors)
										};
										if (t.ok) return {
											...e,
											body: {
												comment: {
													...Object(I.c)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(y.a)()
									}
								})
							})(d(), t, o, l, m) : await (async (e, t, s, n, o) => {
								const r = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return o === P.i.MARKDOWN ? r.text = s.text : (r.text = null, r.richtext_json = n), Object(_.a)(Object(g.a)(e, [j.a]), {
									endpoint: Object(C.a)(Object(w.a)(Object(N.a)(`${e.apiUrl}/api/editusertext`))),
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
									error: e.error || Object(y.a)()
								})
							})(i(), t, o, l, m)).ok) {
							const o = u.body;
							e(Ke({
								commentId: t,
								commentsPageKey: s,
								draftKey: n
							})), e(Object(me.j)({
								[t]: {
									...o.comment
								}
							}))
						} else e(We({
							draftKey: n,
							error: u.error
						}))
					}
				}, qe = Object(o.a)(ue.C), Qe = Object(o.a)(ue.B), Ye = Object(o.a)(ue.D), Je = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = n();
					s(qe({
						id: e
					})), q.a(e, a);
					const i = await ((e, t) => Object(_.a)(Object(g.a)(e, [j.a]), {
						endpoint: Object(C.a)(`${e.apiUrl}/api/del`),
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
						error: e.error || Object(y.a)()
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
					})), (await Object(B.p)(o(), e, r)).ok || t(Object(me.j)({
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
						if (s(Object(me.p)(i)), (await ((e, t) => Object(v.a)(e, {
								...F,
								variables: {
									input: t
								}
							}))(a(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(G.pb)(null !== (m = null === (l = null === (c = o().pages) || void 0 === c ? void 0 : c.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== m ? m : [], null === (u = o().user.account) || void 0 === u ? void 0 : u.id);
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
					} else await e(je({
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
				return v
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "f", (function() {
				return E
			})), s.d(t, "a", (function() {
				return j
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "g", (function() {
				return y
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
			const _ = Object(r.a)(x.p),
				v = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					s().features.comments.models[e] && (await Object(m.j)(o(), e)).ok && t((e => async t => {
						t(_({
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
				}, E = Object(r.a)(x.J), j = e => async (t, s, o) => {
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
				}, C = (e, t) => async (s, o, r) => {
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
				}, y = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const a = s().features.comments.models[e];
					if (!a) return;
					const i = a.ignoreReports ? m.k : m.e;
					a.ignoreReports || t(j(e)), t(Object(O.j)({
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
							isAdmin: t === o.J.ADMIN,
							isMod: t === o.J.MODERATOR,
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
							sort: o.w.CONFIDENCE,
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
				return T
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
				_ = s("./src/reddit/actions/modQueue/constants.ts");
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case _.o:
							return t.payload;
						default:
							return e
					}
				},
				g = s("./src/reddit/reducers/pages/modHub/index.ts"),
				E = s("./src/reddit/selectors/modQueue.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				C = s("./src/redditGQL/types.ts");
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
					realtimeUpdateAnimationId: v
				}
			});
			const y = Object(d.a)(_.l),
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
					t(y(d))
				}, S = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					e && t(k(e))
				}, P = Object(d.a)(_.m), N = (e, t) => {
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
				}, w = [C.z.ApproveComment, C.z.ApproveLink, C.z.RemoveComment, C.z.RemoveLink, C.z.SpamComment, C.z.SpamLink], T = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					var r, a;
					const {
						moderatorID: i,
						targetID: d,
						action: c
					} = null === (r = null == e ? void 0 : e.subscribe) || void 0 === r ? void 0 : r.data, l = s(), p = Object(j.k)(l), b = w.includes(c), f = i === p, h = N(l, d);
					if (!b || f || !h) return;
					const O = await Object(u.b)(o(), {
						id: i
					}) || (null === (a = Object(j.Bb)(l, {
						userId: i
					})) || void 0 === a ? void 0 : a.username);
					O && t(Object(m.z)(O)), t(P({
						targetID: d
					}))
				}, I = Object(d.a)(_.p), R = Object(d.a)(_.o), A = e => async (t, s, o) => {
					let {
						gqlContext: i
					} = o;
					var d, m, u, b, O, x;
					const _ = Object(h.a)(e),
						v = s(),
						g = null === (m = null === (d = null == v ? void 0 : v.features) || void 0 === d ? void 0 : d.realtimeModqueue) || void 0 === m ? void 0 : m.toUpdate.includes(e),
						E = N(v, e);
					if (!g || !E) return;
					const j = _ ? () => ((e, t) => Object(n.a)(e, {
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
						C = await j();
					if (C.ok) {
						if (_) {
							const s = null === (b = null === (u = null == C ? void 0 : C.body) || void 0 === u ? void 0 : u.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(l.Q)({
								[e]: Object(f.f)(s)
							}))
						} else {
							const s = null === (x = null === (O = null == C ? void 0 : C.body) || void 0 === O ? void 0 : O.data) || void 0 === x ? void 0 : x.commentById;
							t(Object(c.j)({
								[e]: Object(p.a)(s)
							}))
						}
						t(R(e)), t(I({
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
				return _
			})), s.d(t, "p", (function() {
				return v
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
				_ = "REORDER_COLLECTION_FAILED",
				v = "UPDATE_COLLECTION_LAYOUT_PENDING",
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
			const p = Object(o.a)(u.G),
				b = Object(o.a)(u.p),
				f = Object(o.a)(u.Q),
				h = (e, t, s) => async (o, i, h) => {
					let {
						apiContext: x
					} = h;
					d.m(i(), t);
					const _ = t === c.i.MARKDOWN,
						v = t === c.i.RICH_TEXT,
						g = u.k;
					if (_ && Object(l.H)(s)) return o(f({
						editorKey: e,
						editorMode: c.i.MARKDOWN,
						content: ""
					})), void o(O(t));
					if (v && !s) return o(f({
						editorKey: e,
						editorMode: c.i.RICH_TEXT,
						content: l.i
					})), void o(O(t));
					o(p(g));
					const E = await Object(a.a)(x(), t, _ ? JSON.stringify(s) : s);
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
					const o = Object(i.j)();
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
					})), Object(i.nb)(o + 1)
				}
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
				return _e
			})), s.d(t, "removalReasonMessagePending", (function() {
				return ve
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ge
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Ee
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return je
			})), s.d(t, "submitRemovalReason", (function() {
				return Ce
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return ye
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
			const _ = {};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
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
			var j = function() {
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
				C = Object(r.c)({
					api: x,
					models: v,
					reasonOrder: E,
					removedItemIds: j
				}),
				y = s("./src/lib/constants/index.ts"),
				k = s("./src/lib/makeActionCreator/index.ts"),
				S = s("./src/lib/makeCommentsPageKey/index.ts"),
				P = s("./src/lib/makeDraftKey/index.ts"),
				N = s("./src/reddit/actions/bulkActions/index.ts"),
				w = s("./src/reddit/actions/comment/index.ts"),
				T = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/comment/moderation.ts"),
				R = s("./src/reddit/actions/modal.ts"),
				A = s("./src/reddit/actions/post.ts"),
				M = s("./src/reddit/actions/toaster.ts"),
				L = s("./src/reddit/constants/modals.ts"),
				D = s("./src/lib/makeApiRequest/index.ts"),
				F = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				z = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const W = (e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: y.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				K = (e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(Object(z.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: y.ob.POST,
					type: "json",
					data: t
				});
			var V = s("./src/reddit/helpers/isPost.ts"),
				G = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				H = s("./src/reddit/helpers/routeKey/index.ts"),
				q = s("./src/reddit/models/ModQueue/index.ts"),
				Q = s("./src/reddit/models/PostDraft/index.ts"),
				Y = s("./src/reddit/models/RemovalReason/index.ts"),
				J = s("./src/reddit/models/Toast/index.ts"),
				Z = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: C
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
					const a = await ((e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: y.ob.GET
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
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: y.ob.POST,
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
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: y.ob.PUT,
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
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: y.ob.DELETE
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
				}, Oe = Object(k.a)("REMOVALREASONS__SUBMIT_PENDING"), xe = Object(k.a)("REMOVALREASONS__SUBMIT_SUCCESS"), _e = Object(k.a)("REMOVALREASONS__SUBMIT_FAILED"), ve = Object(k.a)("REMOVALREASONS__MESSAGE_PENDING"), ge = Object(k.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Ee = Object(k.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), je = Object(k.a)("REMOVALREASONS__MESSAGE_FAILED"), Ce = (e, t, s, n, o, r) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object(V.a)(u) ? Y.e.Post : Y.e.Comment,
						b = p === Y.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						f = p === Y.e.Post ? A.Q : w.j;
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
						O = await W(c(), h);
					if (O.ok) {
						if (a(xe()), t) {
							a(ve());
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: r,
									type: n
								},
								i = await K(c(), Object(Y.h)(o, p), p);
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
										let o = s && n && Object(H.a)(n, l, l.posts.models[e.postId]);
										if (o || (o = Object(S.a)(e.postId, null, {
												sort: y.x,
												hasSortParam: !0
											})), p === Y.e.Post) {
											const s = Object(P.a)(Q.c.replyToPost, u);
											a(Object(T.r)({
												...t,
												headCommentId: Object(Z.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: s
											}));
											const n = l.postStickiedComments.data[u];
											a(Object(I.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), n && n !== e.id && a(Object(w.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === Y.e.Comment) {
											const e = Object(P.a)(Q.c.replyToComment, b.id),
												s = Object(Z.j)(l, {
													commentId: u,
													commentsPageKey: o
												});
											a(Object(T.p)({
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
							return a(je(i.error)), !1
						}
					} else a(_e(O.error)), a(f({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, ye = (e, t, s, o, r) => async (a, i, d) => {
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
						b = await W(c(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: q.a.RemovalReason,
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
								r = await K(c(), Object(Y.h)(n, Y.e.Bulk), Y.e.Bulk);
							r.ok ? (a(ge()), a(u)) : a(je(r.error))
						} else a(u)
					} else a(_e(b.error))
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
			const _ = (e, t) => async (s, o, r) => {
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
					buttonAction: _(e, t)
				}))
			};
			var v = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				g = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				E = s("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				j = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				C = s("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				y = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/controls/Dropdown/index.tsx"),
				P = s("./src/reddit/controls/Dropdown/Row.tsx"),
				N = s("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				w = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				T = s("./src/reddit/helpers/path/index.ts"),
				I = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const R = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(I.z)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(I.ub)(r)
				}),
				A = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				M = e => ({
					subreddit: Object(I.lb)(e),
					userSubreddit: Object(I.ub)(e)
				}),
				L = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...M
				});
			var D = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				F = s("./src/reddit/icons/svgs/Info/index.tsx"),
				B = s("./src/reddit/selectors/activeModalId.ts"),
				U = s("./src/reddit/selectors/comments.ts"),
				z = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				W = s("./src/reddit/selectors/moderatorPermissions.ts"),
				K = s("./src/reddit/selectors/posts.ts"),
				V = s("./src/reddit/selectors/tooltip.ts"),
				G = s("./src/reddit/selectors/user.ts"),
				H = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				q = s.n(H),
				Q = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const Y = Object(j.a)(S.a),
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
						className: q.a.HighlightWrapper
					}, r.a.createElement(P.b, {
						className: Object(d.a)(q.a.HighlightPicker, q.a.Row),
						textClassName: q.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${J(o)}`,
						id: t,
						noHover: !0,
						onClick: s
					}), r.a.createElement(D.b, {
						className: q.a.DropdownTriangle,
						onClick: s
					}), r.a.createElement(Y, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(P.b, {
						displayText: J(Q.a.First),
						isSelected: o === Q.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(P.b, {
						displayText: J(Q.a.Last),
						isSelected: o === Q.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(P.b, {
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
				se = Object(j.a)(S.a),
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
					commentSearchPdp: e => Object(z.a)(e),
					contestModeModalIsOpen: Object(B.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(V.b)($),
					highlightIsOpen: Object(V.b)(ee),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(W.m)(e, {
							postId: s
						});
						return !!n && n.posts
					},
					post: K.G,
					postPermalink: K.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(G.x)(e),
							o = !!Object(W.m)(e, {
								postId: s
							}),
							r = Object(K.G)(e, {
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
						onSetSuggestedSort: t => e(_(s, t)),
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
					const {
						changeHighlightSort: e,
						className: t,
						commentId: s,
						commentPermalink: o,
						commentSearchPdp: a,
						contestModeModalIsOpen: i,
						dropdownIsOpen: l,
						elementRef: m,
						hideTooltip: u,
						highlightIsOpen: p,
						hasModeratorPostPermissions: b,
						isOverlay: f,
						location: h,
						pageLayer: O,
						post: x,
						postPermalink: _,
						selectedHighlightSort: j,
						showCommentHighlighter: y,
						sort: k,
						suggestedSort: S,
						showTooltip: I,
						toggleContestModeModal: R
					} = this.props, M = x.contestMode, L = null == s, B = a.bucketed && Object(C.a)(O) && Object(C.b)(x), U = a.bucketed && Object(C.b)(x) && L, z = !h.search.includes(c.w.CONFIDENCE), W = k === c.w.CONFIDENCE && z, K = b && !W, V = c.y[k], G = V ? V() : "", H = S && k === S && !W ? this.addSuggestedLabel(G) : G, Q = M ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), Y = M ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), J = M ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), Z = M && !b, ne = r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: q.a.DropdownContainer
					}, r.a.createElement(P.b, {
						className: Object(d.a)(q.a.SortPicker, q.a.Row),
						textClassName: q.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${H}`,
						id: $,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(D.b, {
						className: q.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(se, {
						isOpen: l,
						tooltipId: $
					}, [c.w.CONFIDENCE, c.w.TOP, c.w.NEW, c.w.CONTROVERSIAL, c.w.OLD, c.w.QA].map(e => {
						const t = o || _,
							s = Object(T.b)(t),
							n = c.y[e],
							a = n ? n() : "";
						return r.a.createElement(E.a, {
							className: q.a.ViewFullLinkOrOverlayLink,
							isOverlay: f,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${s}?sort=${e}`
						}, r.a.createElement(P.b, {
							displayText: a,
							isSelected: k === e,
							skipRoleAttr: !0
						}))
					})));
					return r.a.createElement("div", {
						className: Object(d.a)(t, q.a.container, {
							[q.a.hideCommentSort]: !y && Z,
							[q.a.paddingBottom]: B
						}),
						ref: m
					}, B || U ? r.a.createElement("div", {
						className: q.a.containerRow
					}, !B && r.a.createElement(r.a.Fragment, null, ne, r.a.createElement("span", {
						className: q.a.verticalDivider
					}, "|")), r.a.createElement("div", null, r.a.createElement(N.c, {
						experiment: a,
						commentId: s,
						prevLocation: h,
						postId: this.props.postId
					}))) : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: q.a.containerRow
					}, !Z && ne, K && !Z && (S ? r.a.createElement("button", {
						className: q.a.SortLink,
						onClick: k !== S ? this.setSortOnClick : this.clearSortOnClick
					}, k !== S ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: q.a.SetSort
					}, r.a.createElement("button", {
						className: q.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: te,
						onMouseEnter: I,
						onMouseLeave: u
					}, r.a.createElement(g.c, {
						className: q.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: te
					}), r.a.createElement(F.a, {
						className: q.a.Info
					})))), b && r.a.createElement("button", {
						className: q.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(w.a, {
						className: q.a.ToggleSwitch,
						on: M
					}))), y && r.a.createElement("div", {
						className: q.a.containerRow
					}, r.a.createElement(X, {
						changeHighlightSort: e,
						highlightIsOpen: p,
						id: ee,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: j,
						trackHighlight: A
					})), i && r.a.createElement(v.a, {
						actionText: Y,
						headerText: Q,
						modalText: J,
						onConfirm: this.setContestMode,
						toggleModal: R,
						withOverlay: !0
					})))
				}
			}
			t.b = ne(re(Object(y.c)(ae)))
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
				return C
			})), s.d(t, "a", (function() {
				return y
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
				_ = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/CrosspostBox/index.m.less"),
				g = s.n(v),
				E = s("./src/lib/lessComponent.tsx");

			function j() {
				return (j = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const C = 8,
				y = 1,
				k = E.a.div("Container", g.a),
				S = E.a.div("PostMetaWrapper", g.a),
				P = E.a.wrapped(p.c, "PostTitle", g.a),
				N = E.a.div("FlatList", g.a),
				w = E.a.div("FlatItem", g.a),
				T = E.a.span("FlatListDotSpacer", g.a),
				I = E.a.wrapped(k, "LinkContainer", g.a),
				R = E.a.div("Content", g.a),
				A = E.a.div("ThumbnailContainer", g.a),
				M = Object(d.c)({
					isCurrentUserProfilePost: x.l,
					isTopicPage: e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== h.Sb.TOPIC),
					shouldOpenPostInNewTab: _.lb
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
				return a && !a.media ? r.a.createElement(I, {
					className: c
				}, r.a.createElement(R, null, r.a.createElement(S, null, r.a.createElement(u.a, d)), D(a), a.source && r.a.createElement(b.a, {
					post: a
				}), B(e)), z(e)) : r.a.createElement(k, {
					className: c
				}, r.a.createElement(S, null, r.a.createElement(u.a, d)), D(a), F(e), B(e))
			}));
			const D = e => r.a.createElement(P, {
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
					return r.a.createElement("div", null, r.a.createElement(m.a, j({}, n, {
						className: g.a.mediaContainer,
						scrollerItemRef: t.scrollerItemRef
					})))
				},
				B = e => {
					const {
						post: t
					} = e, {
						score: s
					} = t;
					return r.a.createElement(N, null, r.a.createElement(w, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(T, null), r.a.createElement(w, null, U(e)))
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
				z = e => r.a.createElement(A, null, r.a.createElement(f.b, {
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
					m = Object(a.e)(e => Object(c.V)(e, {
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
				return _
			})), s.d(t, "c", (function() {
				return v
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
			}, _ = (e, t, s) => {
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
			}, v = e => {
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
			s.r(t);
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
				_ = s("./src/reddit/hooks/useTracking.ts"),
				v = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				y = s("./src/reddit/selectors/moderatorPermissions.ts"),
				k = s("./src/reddit/selectors/posts.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				P = s("./src/lib/ads/index.ts"),
				N = s("./src/lib/classNames/index.ts"),
				w = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				T = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				I = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				R = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				A = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				M = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				L = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				D = s("./src/reddit/components/CreatorStats/loader.tsx"),
				F = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				B = s("./src/reddit/components/Flatlist/index.tsx"),
				U = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				z = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				W = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				K = s("./src/reddit/components/ModModeReports/index.tsx"),
				V = s("./src/reddit/components/ModModeReports/helpers.ts"),
				G = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				H = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				q = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				Q = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Y = s("./src/reddit/components/PostContainer/index.tsx"),
				J = s("./src/reddit/components/PostLeftRail/index.tsx"),
				Z = s("./src/reddit/components/PostMedia/index.tsx"),
				X = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				$ = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				ee = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				te = s.n(ee);
			const {
				fbt: se
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ne = () => o.a.createElement("div", {
					className: te.a.container
				}, o.a.createElement($.a, {
					className: te.a.pinnedIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: te.a.metaText
				}, se._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				oe = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				re = s("./src/reddit/components/PostTitle/index.tsx"),
				ae = s("./src/reddit/components/PostTopLine/index.tsx"),
				ie = s("./node_modules/fbt/lib/FbtPublic.js"),
				de = s("./src/reddit/controls/Button/index.tsx"),
				ce = s("./src/reddit/icons/svgs/Close/index.tsx"),
				le = s("./src/lib/prettyPrintNumber/index.ts"),
				me = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				ue = s("./src/reddit/constants/posts.ts"),
				pe = s("./src/reddit/constants/experiments.ts"),
				be = s("./src/config.ts");
			const {
				fbt: fe
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var he = e => {
				let {
					seed: t
				} = e;
				const s = Math.min(3 * (t + 1), 37),
					n = [s, s + 1, s + 2];
				return o.a.createElement("div", {
					"data-testid": "avatar-group"
				}, null == n ? void 0 : n.map((e, t) => o.a.createElement("img", {
					key: e,
					className: "w-[16px] h-[20px] ml-[-4px] first:ml-0",
					src: `${be.a.assetPath}/img/talk/avatars/${e}.png`,
					alt: fe._("Online members", null, {
						hk: "3uJPWb"
					})
				})))
			};
			const Oe = e => {
					let {
						recommendedCommunities: t,
						numberOfVisibleItems: s,
						variant: n = pe.lf.Minimalist
					} = e;
					return o.a.createElement("ul", null, t.map((e, t) => {
						let {
							subredditId: r,
							subredditIconUrl: a,
							subredditName: i,
							subscriberCount: d,
							activeUserCount: c
						} = e;
						if (t >= s) return null;
						const l = ie.fbt._({
							"*": "{Number of subscribers} members",
							_1: "{Number of subscribers} member"
						}, [ie.fbt._param("Number of subscribers", Object(le.b)(d)), ie.fbt._plural(d)], {
							hk: "3fAm5T"
						});
						return o.a.createElement("li", {
							key: r,
							className: "px-[16px] py-[8px] flex items-start"
						}, o.a.createElement("img", {
							className: "block w-[32px] h-[32px] rounded-full",
							src: a,
							alt: ie.fbt._("Subreddit Icon", null, {
								hk: "4jCo8s"
							})
						}), o.a.createElement("div", {
							className: "ml-[8px] min-w-0"
						}, o.a.createElement("p", {
							className: "text-[14px] leading-[16px] font-semibold text-neutral-content-strong truncate"
						}, `r/${i}`), o.a.createElement("div", {
							className: "mt-[4px] text-[12px] leading-[14px] font-normal text-neutral-content-weak truncate"
						}, n === pe.lf.Minimalist && l, (n === pe.lf.HotnessSignals || n === pe.lf.Description) && o.a.createElement("div", {
							className: "flex gap-x-xs justify-start items-center"
						}, o.a.createElement(he, {
							seed: t
						}), o.a.createElement("div", null, `${l} • ${Object(le.b)(c)} ${ie.fbt._("Online",null,{hk:"60QMl"})}`)))), o.a.createElement(me.a, {
							className: "ml-auto mt-[2px]",
							identifier: {
								name: i,
								type: ue.a.SUBREDDIT
							},
							size: de.d.XS
						}))
					}))
				},
				xe = [{
					subredditId: "t5_2qo4s",
					subredditName: "nba",
					subredditDescription: "A subreddit dedicated to NBA news and discussion.",
					subscriberCount: 6116323,
					activeUserCount: 14539,
					subredditIconUrl: "https://styles.redditmedia.com/t5_2qo4s/styles/communityIcon_1podsfdai4301.png"
				}, {
					subredditId: "t5_2qimj",
					subredditName: "formula1",
					subredditDescription: "The best independent Formula 1 community anywhere. News, stories and discussion from and about the world of Formula 1.",
					subscriberCount: 2813767,
					activeUserCount: 5096,
					subredditIconUrl: "https://styles.redditmedia.com/t5_2qimj/styles/communityIcon_dlscy5v6qd1a1.png"
				}, {
					subredditId: "t5_2qi58",
					subredditName: "soccer",
					subredditDescription: "The football subreddit. \n\nNews, results and discussion about the beautiful game.",
					subscriberCount: 3820856,
					activeUserCount: 21649,
					subredditIconUrl: "https://styles.redditmedia.com/t5_2qi58/styles/communityIcon_fihq6rzyq7q91.png"
				}, {
					subredditId: "t5_2qh1i",
					subredditName: "AskReddit",
					subredditDescription: "r/AskReddit is the place to ask and answer thought-provoking questions.",
					subscriberCount: 39396749,
					activeUserCount: 56409,
					subredditIconUrl: "https://styles.redditmedia.com/t5_2qh1i/styles/communityIcon_tijjpyw1qe201.png"
				}],
				_e = e => {
					let {
						subredditDisplayText: t,
						variant: s
					} = e;
					const [r, a] = Object(n.useState)(!1), [i, d] = Object(n.useState)(3), c = Object(n.useCallback)(() => d(e => e + 3), []), l = i < xe.length;
					return r ? null : o.a.createElement("div", {
						className: "bg-[color:var(--newCommunityTheme-body)] mb-[10px]"
					}, o.a.createElement("div", {
						className: "px-[16px] py-[8px] flex items-center"
					}, o.a.createElement("h3", {
						className: "text-[14px] leading-[20px] font-semibold text-neutral-content-strong truncate min-w-0"
					}, ie.fbt._("Similar to {subreddit display text}", [ie.fbt._param("subreddit display text", t)], {
						hk: "2ZdEdB"
					})), o.a.createElement("button", {
						className: "ml-auto w-[16px] h-[16px] inline-block",
						"aria-label": ie.fbt._("Hide Recommended Communities", null, {
							hk: "1D8cvx"
						}),
						onClick: () => a(!0)
					}, o.a.createElement(ce.a, {
						className: "block w-full h-full text-neutral-content-weak",
						fill: "currentColor"
					}))), o.a.createElement(Oe, {
						recommendedCommunities: xe,
						numberOfVisibleItems: i,
						variant: s
					}), l && o.a.createElement("div", {
						className: "flex items-center justify-center py-[8px]"
					}, o.a.createElement(de.a, {
						kind: de.b.Button,
						priority: de.c.Tertiary,
						onClick: c
					}, ie.fbt._("Show more", null, {
						hk: "2kAGl6"
					}))))
				};
			var ve = s("./src/reddit/components/SourceLink/index.tsx"),
				ge = s("./src/reddit/constants/postLayout.ts"),
				Ee = s("./src/reddit/contexts/InsideOverlay.tsx"),
				je = s("./src/reddit/contexts/PageLayer/index.tsx"),
				Ce = s("./src/reddit/contexts/Post/index.tsx"),
				ye = s("./src/reddit/helpers/isCrosspost.ts"),
				ke = s("./src/reddit/helpers/path/index.ts"),
				Se = s("./src/reddit/helpers/postEvent.ts"),
				Pe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				Ne = s.n(Pe),
				we = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				Te = s("./src/reddit/hooks/useClickSourceData.ts"),
				Ie = s("./src/reddit/models/Audio/index.ts"),
				Re = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				Ae = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Me = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				Le = s("./src/reddit/helpers/chooseVariant/index.ts"),
				De = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const Fe = Object(i.a)(k.N, e => e.some(De.c)),
				Be = Object(i.a)(Fe, e => e),
				Ue = (e, t) => Object(Le.c)(e, {
					experimentName: pe.hd,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && Be(e, {
							listingKey: s
						})
					}
				});
			var ze = s("./src/reddit/selectors/experiments/index.ts");

			function We(e) {
				return e === pe.lf.Minimalist || e === pe.lf.Description || e === pe.lf.HotnessSignals
			}
			const Ke = e => {
				const t = Object(Le.c)(e, {
					experimentEligibilitySelector: ze.e,
					experimentName: pe.Ac
				}) || pe.N.Control1;
				return {
					isEnabled: We(t),
					variant: t
				}
			};
			var Ve = s("./src/reddit/selectors/modQueue.ts"),
				Ge = s("./src/reddit/selectors/postFlair.ts"),
				He = s("./src/reddit/selectors/showPromotedCTA.ts"),
				qe = s("./src/reddit/selectors/i18n/index.ts"),
				Qe = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				Ye = s("./src/reddit/components/LargePost/index.m.less"),
				Je = s.n(Ye);

			function Ze() {
				return (Ze = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const Xe = e => {
					let {
						className: t,
						disableVisited: s,
						children: n,
						...r
					} = e;
					return o.a.createElement(T.a, Ze({}, r, {
						className: Object(N.a)(t, Je.a.styledLink, {
							[Je.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				$e = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(k.N)(e, {
						listingKey: s
					}) : void 0
				},
				et = Object(r.b)(() => Object(i.c)({
					autoplayPref: S.d,
					isModQueueDisplayEnabled: e => Object(Ve.b)(e, !0),
					activeModalId: j.a,
					hideNSFWPref: S.H,
					flairStyleTemplate: je.Y,
					isBlurredPreview: Me.b,
					isCurrentUserProfilePost: k.l,
					isLoggedIn: S.S,
					isActive: k.j,
					showPromotedCTA: He.a,
					moderatorPermissions: y.m,
					modModeEnabled: je.W,
					posts: $e,
					postHeightVariant: Ue,
					shouldShowNsfwListingBelow: qe.b,
					showEditFlair: Ge.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(y.i)(e, s.id)
					},
					isOptionalTextEnabled: Re.a,
					showCTAExperimentDesign: C.a,
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
				tt = o.a.memo(e => {
					const {
						handlePostLinkClick: t,
						postPermalink: s,
						disableVisited: n,
						shouldOpenPostInNewTab: r,
						shouldStylePostAfterVisitLink: a,
						children: i
					} = e;
					return a ? o.a.createElement(Xe, {
						"data-click-id": "body",
						target: r ? "_blank" : void 0,
						disableVisited: n,
						to: s,
						onClick: t
					}, e.children) : o.a.createElement(o.a.Fragment, null, i)
				}),
				st = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: i,
						currentUser: p,
						eventFactory: E,
						flairStyleTemplate: j,
						forceLoadMedia: C,
						hideNSFWPref: y,
						hostPostData: k,
						imageGalleryCurrentItem: T,
						inSubredditOrProfile: $ = !1,
						isBlurredPreview: ee,
						isCommentsPage: te,
						isCurrentUserProfilePost: se,
						isFrontpage: ie,
						isGalleryTileLayoutDefault: de,
						isModWithUserNotesPermissions: ce,
						isLoggedIn: le,
						isOverlay: me,
						isTopicPage: ue,
						isCommentCountAnimationEnabled: be,
						isVoteCountAnimationEnabled: fe,
						isCountAnimShadowTestEnabled: he,
						listingIndex: Oe,
						listingKey: xe,
						moderatorPermissions: Ee,
						modModeEnabled: je,
						onClickPost: Ce,
						onIgnoreReports: Pe,
						onOpenReportsDropdown: Re,
						post: Me,
						postHeightVariant: Le,
						scrollerItemRef: De,
						shouldShowGalleryTileOption: Fe,
						shouldShowInsightsButton: Be,
						shouldShowNsfwListingBelow: Ue,
						showEditFlair: ze,
						showPromotedCTA: We,
						subredditOrProfile: Ve,
						userIsOp: Ge,
						postId: He,
						postIds: qe,
						onceInViewport: Ye,
						isOptionalTextEnabled: Ze,
						showCTAExperimentDesign: Xe,
						isModQueueDisplayEnabled: $e,
						showRealtimeUpdateAnimation: et,
						isUpdatedContent: st,
						isNightMode: nt
					} = e, ot = Object(_.a)(), rt = !!e.redditStyle || !!e["data-redditstyle"], at = rt ? void 0 : j, it = Object(l.a)(Ee), dt = je && it, ct = Object(d.a)(Ee), lt = Object(c.a)(Ee), mt = Object(V.c)(Me), ut = Object(W.a)(Me), pt = !!Me.media && Me.media.type === v.o.RTJSON, bt = Ge && pt, ft = s ? s - J.a : void 0, ht = !!Me.recommendationContext, Ot = !(ie && le || ue) || ht && le, xt = (e => e === pe.bf.OnlyTitles)(Le) && !Object(ye.a)(Me), _t = (e => e === pe.bf.MediumHeight)(Le) && !Object(ye.a)(Me), vt = (e => {
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
					})(e), gt = Object(r.d)(), Et = Object(r.e)(Ae.b), jt = Object(r.e)(Ae.c), Ct = Object(r.e)(S.lb), yt = Object(Te.a)(), kt = Me.permalink, St = e.isCommentPermalink ? Object(ke.b)(kt) : Object(w.a)(kt, void 0, yt), Pt = !!(null == k ? void 0 : k.shouldShowLinkedPosts), Nt = (!$ || Pt || Ue) && !Me.isSponsored, wt = Object(P.t)(Me, T), {
						source: Tt
					} = wt, It = Object(n.useRef)(null), Rt = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Ye || Ye(Oe))
						})
					}, [Ye, Oe]);
					Object(x.a)(It, Rt);
					const [At, Mt] = Object(n.useState)(!1), Lt = Object(n.useCallback)(() => {
						Mt(!At), ot(Object(we.d)(He))
					}, [At, ot, He]), Dt = !!(ee && (null == Ve ? void 0 : Ve.isNSFW)), Ft = Object(n.useRef)({
						renderingObjectInfo: Me
					}), Bt = Object(n.useCallback)(e => {
						(Et || jt) && (e.preventDefault(), gt(Object(u.Z)(Object(ke.b)(Me.permalink), Me.id)))
					}, [gt, Et, jt, Me.id, Me.permalink]), Ut = Me && Me.media && (Me.media.type === v.o.TEXT || Me.media.type === v.o.RTJSON), zt = Object(g.r)(Me), {
						isEnabled: Wt,
						variant: Kt
					} = Object(r.e)(Ke), [Vt, Gt] = Object(n.useState)(!1);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Y.b, {
						className: Object(N.a)(Je.a.container, i, Ne.a.largeAndMediumPostStyles, Ne.a.largeAndMediumActiveStyles, Object(m.a)(e), {
							[Ne.a.mUseRedditTheme]: rt,
							[Je.a.topCompactPost]: vt && vt.hasTopCompactPostStyles,
							[Je.a.bottomCompactPost]: vt && vt.hasBottomCompactPostStyles,
							[Je.a.shouldShowOverflow]: Be,
							[Je.a.realtimeAnimation]: et,
							[Je.a.realtimeUpdated]: st,
							[Je.a.isNightMode]: nt
						}),
						isOverlay: me,
						style: $e && (et || st) ? nt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(m.b)(e.flairStyleTemplate),
						post: Me,
						onClick: Ce,
						eventFactory: E
					}, o.a.createElement("div", {
						ref: It
					}), o.a.createElement(oe.a, {
						model: Me,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: he,
						isVoteCountAnimation: fe,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: at,
						redditStyle: rt,
						postId: He
					}), o.a.createElement(Q.a, {
						className: Object(N.a)(Je.a.backgroundWrapper, {
							[Je.a.isEvent]: Object(Se.a)(Me),
							[Je.a.shouldUseRoundedBorder]: Be,
							[Je.a.realtimeAnimation]: et,
							[Je.a.realtimeUpdated]: st,
							[Je.a.isNightMode]: nt
						}),
						"data-click-id": "background",
						flairStyleTemplate: at,
						post: Me,
						redditStyle: rt,
						overrideBackgroundColor: $e && (et || st) ? nt ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, o.a.createElement(F.a, {
						post: Me
					}), vt && vt.showPinnnedHeader && o.a.createElement(ne, null), Object(a.c)(Me) && o.a.createElement(o.a.Fragment, null, o.a.createElement(h.a, {
						post: Me
					}), o.a.createElement(f.a, {
						post: Me
					})), !Object(a.c)(Me) && o.a.createElement(o.a.Fragment, null, zt && o.a.createElement(q.a, {
						content: Me.recommendationContext.content,
						layout: ge.g.Large,
						post: Me
					}), o.a.createElement(ae.a, {
						className: Je.a.postTopLine,
						hideNSFWPref: y,
						hostPostData: k,
						iconClassName: Je.a.postTopLineIcon,
						inSubredditOrProfile: $,
						isCommentsPage: !!te,
						isCompactPinnedPost: !!vt,
						isCurrentUserProfilePost: se,
						isModWithUserNotesPermissions: ce,
						isOverlay: !!me,
						isTopicPage: !!ue,
						listingKey: xe,
						post: Me,
						shouldShowSubscribeButton: Ot,
						showSubreddit: Nt,
						showSubredditIcon: !0,
						subredditOrProfile: Ve,
						onSubscribed: () => Gt(!0)
					}), o.a.createElement(re.c, {
						className: Je.a.postTitle,
						post: Me,
						redditStyle: rt,
						size: re.b.Large,
						titleColor: at && at.postTitleColor,
						isOverlay: me
					}), o.a.createElement(A.a, {
						className: Je.a.adSupplementaryText,
						post: Me,
						size: re.b.Large
					}), Me.source && !Me.isSponsored && !Dt && o.a.createElement(o.a.Fragment, null, o.a.createElement(ve.a, {
						className: Je.a.sourceLink,
						post: Me
					}), Ze && Me.media && Me.media.type !== v.o.TEXT && Me.media.type !== v.o.IMAGE && Me.media.richtextContent && o.a.createElement(O.a, {
						content: Me.media.richtextContent,
						rtJsonElementProps: Ft.current
					}))), o.a.createElement("div", {
						className: Je.a.postMediaWrapper
					}, !vt && o.a.createElement(tt, {
						handlePostLinkClick: Bt,
						postPermalink: St,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: Ct,
						shouldStylePostAfterVisitLink: Ut
					}, o.a.createElement(Z.a, {
						isGalleryTileLayoutDefault: de,
						isListing: !0,
						isMediumHeight: _t,
						isNotCardView: !!me,
						isTitleOnly: xt,
						showCentered: !0,
						flairStyleTemplate: at,
						post: Me,
						availableWidth: ft,
						shouldLoad: C,
						scrollerItemRef: De,
						autoplayPref: t,
						shouldShowGalleryTileOption: Fe,
						showPromotedCTA: We
					}))), We && Tt && Tt.url && !Me.isSurveyAd && o.a.createElement(I.a, {
						className: Je.a.adLinkWrapper,
						ctaExperimentDesign: Xe && "card"
					}, o.a.createElement(R.a, {
						post: Me,
						adLinkContent: wt,
						ctaExperimentDesign: Xe && "card"
					})), je && it && ut && !$e && o.a.createElement("div", {
						className: Je.a.modModeBannerWrapper
					}, o.a.createElement(z.a, {
						thing: Me
					})), je && it && mt && !$e && o.a.createElement("div", {
						className: Je.a.modModeBannerWrapper
					}, o.a.createElement(K.a, {
						onIgnoreReports: Pe,
						reportable: Me
					})), Object(Ie.c)(Me) && o.a.createElement(b.a, {
						post: Me
					}), o.a.createElement(U.d, null), $e && o.a.createElement(H.a, {
						post: Me
					}), Me.discussionType === g.b.Chat && o.a.createElement(Qe.a, {
						postId: Me.id,
						className: Je.a.liveLabel
					}), o.a.createElement("div", {
						className: Je.a.flatListContainer
					}, o.a.createElement(L.a, {
						className: Je.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: at,
						model: Me,
						onVoteClick: e.handleVote
					}), !Me.isSurveyAd && ($e ? o.a.createElement(G.a, {
						content: Me,
						listingKey: xe,
						hostPostData: k
					}) : o.a.createElement(B.c, {
						currentUser: p,
						hasModFlairPerms: ct,
						hasModFullPerms: lt,
						hasModPostPerms: it,
						hostPostData: k,
						isCommentCountAnimation: be,
						isCountAnimShadowTestEnabled: he,
						isLargePost: !0,
						isOverlay: !!me,
						listingKey: xe,
						modModeEnabled: je,
						onClickInsightsButton: Lt,
						onIgnoreReports: Pe,
						onOpenReportsDropdown: Re,
						post: Me,
						shouldShowInsightsButton: Be,
						showEditPost: bt,
						showEditFlair: ze,
						useFlatlistBreakpoints: Object(X.b)({
							editPost: !1,
							save: !dt,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))), Ve && At && o.a.createElement(D.a, {
						className: Je.a.creatorStatsContainer,
						post: Me,
						subreddit: Ve,
						isOwnProfileStats: !0
					})), ie && o.a.createElement(M.a, {
						post: Me,
						postIds: null != qe ? qe : [],
						subredditId: null == Ve ? void 0 : Ve.id
					})), ie && zt && Wt && Vt && Ve && o.a.createElement(_e, {
						subredditId: Ve.id,
						subredditDisplayText: Ve.displayText,
						variant: Kt
					}))
				});
			st.displayName = "LargePostMemoized";
			t.default = Object(Ce.b)(et(Object(Ee.b)(st)))
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
				return _
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
			const _ = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(h.e)(e => Object(O.a)(e, t));
				return Object(h.e)(x.e) ? a.a.createElement(f, {
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
				snoozabledButton: "_3Rixx0Z51qJ71wGmQ8UtQj",
				userIconWrapper: "_3vnCHVExwDbhdlwSh9BV9k",
				userIcon: "_1O-L18qAEJqcxeYP7bE4mK",
				snoozableDropdown: "_3L6lZrroGMf7wnI2DFJDJx",
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT",
				caretButton: "_1iROd0ZxfCEcEidNiygaYB",
				caretIcon: "-vF-jMhpa_XhPJ_ntG1Hv",
				userlink: "_2iRjlf0DdO9rVaTZpfwvHA"
			}
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
				return Le
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/modQueue/realtime.ts"),
				l = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				m = s("./src/reddit/components/ReportFlow/new.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				b = s("./src/reddit/helpers/isPost.ts"),
				f = s("./src/reddit/helpers/trackers/modTools.ts"),
				h = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				x = s("./src/reddit/hooks/useTracking.ts"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/models/Post/index.ts"),
				g = s("./src/reddit/actions/comment/moderation.ts"),
				E = s("./src/reddit/actions/modal.ts"),
				j = s("./src/reddit/actions/post.ts"),
				C = s("./src/reddit/actions/postFlair.ts"),
				y = s("./src/reddit/actions/removalReasons/index.ts"),
				k = s("./src/reddit/selectors/activeModal.ts"),
				S = s("./src/reddit/selectors/moderatorPermissions.ts"),
				P = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {}));
			const N = e => e.isRemoved && (!e.bannedBy || e.bannedBy === d.m) || !e.isRemoved && Object(P.a)(e) ? n.FILTERED : e.isRemoved || Object(b.b)(e) && [v.g.AntiEvilOps, v.g.CommunityOps, v.g.ContentTakedown, v.g.CopyrightTakedown, v.g.Reddit].indexOf(e.removedByCategory) > -1 ? n.REMOVED : e.isSpam ? n.SPAM : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : n.UNMODERATED;
			var w = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				T = s.n(w),
				I = s("./src/lib/classNames/index.ts"),
				R = s("./src/lib/constants/icons.ts"),
				A = s("./src/reddit/actions/gold/modals.ts"),
				M = s("./src/reddit/actions/reportFlow/index.ts"),
				L = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				D = s("./src/reddit/components/OverflowMenu/index.tsx"),
				F = s("./src/reddit/constants/modals.ts"),
				B = s("./src/reddit/controls/Dropdown/Row.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				z = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				W = s("./src/reddit/helpers/trackers/gild.ts"),
				K = s("./src/reddit/selectors/comments.ts"),
				V = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				G = s("./src/reddit/selectors/user.ts");
			const H = (e, t) => Object(f.c)(t, e),
				q = (e, t) => e ? t ? o.fbt._("Unlock Comments", null, {
					hk: "zGuti"
				}) : o.fbt._("Lock Comments", null, {
					hk: "1QO9cp"
				}) : t ? o.fbt._("Unlock thread", null, {
					hk: "SqzQU"
				}) : o.fbt._("Lock thread", null, {
					hk: "3drB04"
				});
			var Q = e => {
					let {
						content: t,
						hostPostData: s,
						listingKey: n,
						moderatorPermissions: c
					} = e;
					var l, m;
					const u = Object(x.a)(),
						p = Object(i.d)(),
						O = Object(b.b)(t),
						v = Object(i.e)(G.k),
						C = Object(i.e)(G.P),
						y = Object(i.e)(V.b),
						k = Object(z.a)(c),
						S = O ? h.k : H,
						P = t.authorId === v,
						N = C && P,
						w = (null === (l = t.distinguishType) || void 0 === l ? void 0 : l.toLowerCase()) === d.J.ADMIN,
						Q = (null === (m = t.distinguishType) || void 0 === m ? void 0 : m.toLowerCase()) === d.J.MODERATOR,
						Y = Object(r.useCallback)(() => {
							const e = O ? j.D : g.c;
							p(e(t.id));
							const s = t.isLocked ? "unlock" : "lock";
							u(O ? S(t.id, s) : Object(f.j)(t.id, s, "mod_menu"))
						}, [S, u, p, t, O]),
						J = Object(r.useCallback)(e => {
							u(Object(h.k)(t.id, e, "post", n, s, void 0))
						}, [u, n, s, t]),
						Z = Object(r.useCallback)(() => {
							var e;
							const s = t.isStickied ? "unsticky" : "sticky";
							O ? (p(Object(j.gb)(t.id)), u(Object(f.n)(s, t.id))) : (p(Object(g.b)(t.id, (null === (e = t.distinguishType) || void 0 === e ? void 0 : e.toLowerCase()) || "", !t.isStickied)), u(Object(f.j)(t.id, s, "mod_menu")))
						}, [u, p, t, O]),
						X = Object(r.useCallback)(() => {
							O && (p(Object(j.I)(t.id)), u(Object(f.n)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [u, p, t, O]),
						$ = Object(r.useCallback)(() => {
							O && (p(Object(j.F)(t.id)), Object(f.n)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [p, t, O]),
						ee = Object(r.useCallback)(() => {
							O && (p(Object(E.i)(F.a.CROWD_CONTROL)), p(Object(j.t)(t.id)))
						}, [p, t, O]),
						te = Object(i.e)(e => Object(K.m)(e, {
							commentId: t.id
						})),
						se = Object(r.useCallback)(() => {
							const e = O ? t.permalink : te;
							e && (p(Object(j.C)(e)), O ? J("copy") : u(Object(f.j)(t.id, "share", "mod_menu")))
						}, [J, p, t, O, te, u]),
						ne = Object(r.useCallback)(async () => {
							if (!O) return;
							const e = Object(U.d)(U.a.GildingFlow, !0);
							p(Object(A.d)({
								awardId: null == y ? void 0 : y.id,
								correlationId: e,
								thingId: t.id
							})), u(Object(W.clickGildEvent)(t.id))
						}, [u, p, t, y, O]),
						oe = Object(r.useCallback)(() => {
							p(Object(M.c)(t.id)), O ? J("report") : u(Object(f.j)(t.id, "report", "mod_menu"))
						}, [J, p, t, O, u]),
						re = Object(r.useCallback)(() => {
							var e;
							O && (p(Object(j.db)(t.id, !t.hidden, !1, !0)), J((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [J, p, t, O]),
						ae = Object(r.useCallback)(() => {
							const e = O ? j.S : g.e;
							p(e(t.id, !0)), u(O ? Object(f.n)("spam", t.id) : Object(f.j)(t.id, "remove_as_spam", "mod_menu"))
						}, [u, p, t, O]),
						ie = Object(r.useCallback)(e => {
							const s = O ? j.u : g.b;
							p(s(t.id, e));
							const n = e === d.J.ADMIN ? "distinguish_as_admin" : e === d.J.MODERATOR ? "distinguish_as_mod" : "undistinguish";
							u(Object(f.j)(t.id, n, "mod_menu"))
						}, [p, t, O, u]);
					return a.a.createElement(D.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: T.a.overflowButton,
						icon: a.a.createElement(_.a, {
							name: R.a.overflow_horizontal,
							isFilled: !0
						})
					}, a.a.createElement("h6", {
						className: Object(I.a)("text-neutral-content-weak", T.a.overflowHeading)
					}, o.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && a.a.createElement(a.a.Fragment, null, a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						displayText: o.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ae
					}, a.a.createElement(_.a, {
						name: R.a.spam
					})), O && a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : o.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: Z
					}, a.a.createElement(_.a, {
						name: t.isStickied ? R.a.unpin : R.a.pin
					}))), a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						onClick: Y,
						displayText: q(O, !!(null == t ? void 0 : t.isLocked))
					}, a.a.createElement(_.a, {
						name: R.a.lock,
						isFilled: null == t ? void 0 : t.isLocked
					})), P && a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						displayText: Q ? o.fbt._("Undistinguish as a mod", null, {
							hk: "2Nmjxw"
						}) : o.fbt._("Distinguish as a mod", null, {
							hk: "35wmCr"
						}),
						onClick: () => ie(Q ? "" : d.J.MODERATOR)
					}, a.a.createElement(_.a, {
						name: Q ? R.a.distinguish_fill : R.a.distinguish
					})), N && a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						displayText: w ? o.fbt._("Undistinguish as an admin", null, {
							hk: "BHAJd"
						}) : o.fbt._("Distinguish as an admin", null, {
							hk: "3gaPvB"
						}),
						onClick: () => ie(w ? "" : d.J.ADMIN)
					}, a.a.createElement(_.a, {
						name: w ? R.a.distinguish_fill : R.a.distinguish
					})), !O && (w || Q) && P && a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky the comment", null, {
							hk: "18TByd"
						}) : o.fbt._("Sticky the comment", null, {
							hk: "3roZIi"
						}),
						onClick: Z
					}, a.a.createElement(_.a, {
						name: t.isStickied ? R.a.unpin : R.a.pin
					})), O && !t.crosspostParentId && a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						onClick: X,
						displayText: t.isOriginalContent ? o.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : o.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, a.a.createElement(_.a, {
						name: R.a.original
					})), O && a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						onClick: $,
						displayText: t.isNSFW ? o.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : o.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, a.a.createElement(_.a, {
						name: R.a.nsfw
					})), O && k && "subreddit" === t.belongsTo.type && a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						displayText: o.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: ee
					}, a.a.createElement(_.a, {
						name: R.a.crowd_control
					})), a.a.createElement("h6", {
						className: Object(I.a)("text-neutral-content-weak", T.a.overflowHeading)
					}, o.fbt._("Other", null, {
						hk: "2543kN"
					})), a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						displayText: o.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: se
					}, a.a.createElement(_.a, {
						name: R.a.share
					})), O && a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						onClick: ne,
						displayText: o.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, a.a.createElement(_.a, {
						name: R.a.award
					}), a.a.createElement(L.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						displayText: o.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: oe
					}, a.a.createElement(_.a, {
						name: R.a.report
					})), O && a.a.createElement(B.b, {
						className: T.a.dropdownRow,
						onClick: re,
						displayText: t.hidden ? o.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : o.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, a.a.createElement(_.a, {
						name: R.a.hide
					})))
				},
				Y = s("./src/reddit/helpers/trackers/modListing.ts"),
				J = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				Z = s("./src/config.ts"),
				X = s("./src/reddit/components/UserIcon/index.tsx"),
				$ = s("./src/reddit/helpers/name/index.ts"),
				ee = s("./src/reddit/constants/intlSupport.ts"),
				te = s("./src/reddit/helpers/graphql/helpers.ts"),
				se = s("./src/reddit/hooks/useLocale.ts");

			function ne(e) {
				return new Date(Date.now()).getFullYear() === e.getFullYear()
			}
			var oe = function(e) {
					let {
						date: t,
						...s
					} = e;
					const n = Object(se.a)(),
						r = "string" == typeof t ? Object(te.g)(t) / d.Xb : t,
						i = new Date(r * d.Xb);
					if (!ee.a) return a.a.createElement(a.a.Fragment, null, i.toLocaleString());
					const c = new Intl.DateTimeFormat(n, {
							month: "short",
							day: "numeric",
							year: ne(i) ? void 0 : "numeric"
						}),
						l = new Intl.DateTimeFormat(n, {
							minute: "numeric",
							hour: "numeric"
						}),
						m = function(e) {
							const t = new Date(Date.now());
							return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
						}(i) ? o.fbt._("Today", null, {
							hk: "1sZpnp"
						}) : c.format(i),
						u = l.format(i);
					return o.fbt._("{date} at {time}", [o.fbt._param("date", m), o.fbt._param("time", u)], {
						hk: "Ot5zO"
					})
				},
				re = s("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts"),
				ae = s("./src/reddit/components/CCM/ModPreviousActions/index.m.less"),
				ie = s.n(ae);
			var de = e => {
				let {
					className: t,
					modAction: s,
					postOrCommentId: n
				} = e;
				var o, r, i, d, c;
				const l = (null === (o = s.moderatorInfo) || void 0 === o ? void 0 : o.displayName) || "",
					m = (null === (i = null === (r = s.moderatorInfo) || void 0 === r ? void 0 : r.icon) || void 0 === i ? void 0 : i.url) || "",
					u = !!(null === (c = null === (d = s.moderatorInfo) || void 0 === d ? void 0 : d.profile) || void 0 === c ? void 0 : c.isNsfw),
					p = Object(b.a)(n);
				return a.a.createElement("div", {
					className: Object(I.a)(t, ie.a.row)
				}, a.a.createElement("div", {
					className: ie.a.userIconWrapper
				}, a.a.createElement(X.a, {
					className: ie.a.userIcon,
					iconUrl: m,
					userName: l,
					isNSFW: u
				})), a.a.createElement("div", {
					className: ie.a.details
				}, a.a.createElement("h3", {
					className: ie.a.title
				}, Object(re.a)(s.action, p ? "SubredditPost" : "")), a.a.createElement("p", {
					className: ie.a.meta
				}, a.a.createElement("a", {
					className: ie.a.userlink,
					href: `${Z.a.redditUrl}/user/${l}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(l)))), a.a.createElement("span", {
					className: ie.a.time
				}, a.a.createElement(oe, {
					date: s.createdAt
				})))
			};
			var ce = e => {
				let {
					className: t,
					reportAction: s
				} = e;
				return a.a.createElement("div", {
					className: Object(I.a)(t, ie.a.row)
				}, a.a.createElement(_.a, {
					isFilled: !0,
					name: "report_fill",
					className: ie.a.icon
				}), a.a.createElement("div", {
					className: ie.a.details
				}, a.a.createElement("h3", {
					className: ie.a.title
				}, o.fbt._("Reported for", null, {
					hk: "pm0ot"
				})), !!s.reason && a.a.createElement("p", {
					className: ie.a.meta
				}, s.reason)), a.a.createElement("span", {
					className: ie.a.time
				}, a.a.createElement(oe, {
					date: s.createdAt
				})))
			};
			var le = e => {
					const t = Object(i.e)(t => {
						var s, n;
						const o = null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[e.postOrCommentId];
						if (o && o.length) return o.map(e => {
							var s, n;
							return null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.models[e]
						})
					});
					return t ? a.a.createElement("div", {
						className: Object(I.a)(e.className, ie.a.wrapper)
					}, a.a.createElement("h2", {
						className: ie.a.wrapperTitle
					}, o.fbt._("Recent actions", null, {
						hk: "PAtYM"
					})), t.map(t => "ModAction" === (null == t ? void 0 : t.__typename) ? a.a.createElement(de, {
						modAction: t,
						key: t.id,
						postOrCommentId: e.postOrCommentId
					}) : "ReportAction" === (null == t ? void 0 : t.__typename) ? a.a.createElement(ce, {
						reportAction: t,
						key: t.id
					}) : null)) : null
				},
				me = s("./src/reddit/components/HumanDate/index.tsx"),
				ue = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				pe = s.n(ue);
			const be = e => {
				let {
					content: t
				} = e;
				var s;
				const n = (null == t ? void 0 : t.approvedBy) || "",
					r = Object(i.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(G.Cb)(e, {
						userName: n
					}) : null),
					d = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
					className: pe.a.userIconWrapper
				}, a.a.createElement(X.a, {
					className: Object(I.a)(pe.a.userIcon),
					iconUrl: null == r ? void 0 : r.accountIcon,
					userName: n,
					isNSFW: !!(null == r ? void 0 : r.isNSFW)
				})), a.a.createElement("div", {
					className: pe.a.statusText
				}, a.a.createElement("p", {
					className: pe.a.status
				}, o.fbt._("Approved", null, {
					hk: "4d15LY"
				})), a.a.createElement("p", null, a.a.createElement("a", {
					className: pe.a.userlink,
					href: `${Z.a.redditUrl}/user/${n}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(n)), d && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(me.d, {
					seconds: d
				})))))
			};
			var fe = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const he = e => {
				let {
					content: t
				} = e;
				const s = Object(r.useMemo)(() => {
					var e;
					const s = [];
					(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== d.m || s.push({
						icon: "bot_fill",
						heading: o.fbt._("Blocked by AutoMod", null, {
							hk: "XZuzM"
						})
					});
					for (const n of t.modQueueTriggers || []) switch (n.type) {
						case fe.a.AUTOMOD:
							s.push({
								icon: "bot_fill",
								heading: o.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								}),
								reason: n.message
							});
							break;
						case fe.a.SHADOWBANNED_SUBMITTER:
							s.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "47ub6E"
								}),
								reason: n.message
							});
							break;
						case fe.a.HATEFUL_CONTENT:
							s.push({
								icon: "mod_mode_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "42FKya"
								}),
								reason: n.message
							});
							break;
						case fe.a.CROWD_CONTROL:
							s.push({
								icon: "crowd_control",
								heading: o.fbt._("Blocked by crowd control", null, {
									hk: "iFsfG"
								}),
								reason: n.message
							});
							break;
						case fe.a.BAN_EVASION:
							s.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "1Olxtp"
								}),
								reason: n.message
							})
					}
					return s
				}, [t.modQueueTriggers, t.bannedBy]);
				return a.a.createElement("div", {
					className: pe.a.filteredWrapper
				}, s.map((e, t) => {
					let {
						heading: s,
						reason: n,
						icon: o
					} = e;
					return a.a.createElement("div", {
						key: `${s}-${n}-${t}`,
						className: pe.a.filteredRow
					}, a.a.createElement(_.a, {
						isFilled: !0,
						name: o,
						className: Object(I.a)(pe.a.coloredIcon, pe.a.icon)
					}), a.a.createElement("div", {
						className: pe.a.statusText
					}, a.a.createElement("p", {
						className: pe.a.status
					}, s), n && a.a.createElement("p", null, n)))
				}))
			};
			var Oe = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				xe = s("./src/reddit/selectors/subreddit.ts");
			const _e = e => {
				let {
					content: t
				} = e;
				var s;
				const n = Object(i.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(G.Cb)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					r = Object(b.b)(t),
					d = Object(i.e)(e => Object(xe.X)(e, {
						subredditId: r ? t.belongsTo.id : t.subredditId
					})),
					c = r && t.removedByCategory ? t.removedByCategory : null,
					l = c ? Object(Oe.b)(c) : "clear_fill",
					m = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null;
				return a.a.createElement(a.a.Fragment, null, n ? a.a.createElement("div", {
					className: pe.a.userIconWrapper
				}, a.a.createElement(X.a, {
					className: Object(I.a)(pe.a.userIcon),
					iconUrl: null == n ? void 0 : n.accountIcon,
					userName: null == n ? void 0 : n.username,
					isNSFW: null == n ? void 0 : n.isNSFW
				})) : a.a.createElement(_.a, {
					isFilled: !0,
					name: l,
					className: Object(I.a)(pe.a.coloredIcon, pe.a.icon)
				}), a.a.createElement("div", {
					className: pe.a.statusText
				}, a.a.createElement("p", {
					className: pe.a.status
				}, o.fbt._("Removed{spam}{reason}", [o.fbt._param("spam", t.isSpam ? " as spam" : ""), o.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), a.a.createElement("p", null, (null == n ? void 0 : n.username) ? a.a.createElement(a.a.Fragment, null, a.a.createElement("a", {
					className: pe.a.userlink,
					href: `${Z.a.redditUrl}/user/${n.username}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(n.username)), m && a.a.createElement(a.a.Fragment, null, " ", a.a.createElement(me.d, {
					seconds: m
				}))) : c && Object(Oe.e)(c, (null == n ? void 0 : n.username) || null, d.name))))
			};
			var ve = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				ge = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				je = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var Ce = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx");
			s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx");
			s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx");
			var ye = s("./src/reddit/icons/fonts/Op/index.m.less"),
				ke = s.n(ye),
				Se = s("./src/lib/lessComponent.tsx");
			Se.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(je.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, a.a.createElement(je.a, null, e.desc)), "OpIcon", ke.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var Pe = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				Ne = s.n(Pe);
			Se.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(je.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", Ne.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var we = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Te = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				Ie = s.n(Te);
			Se.a.wrapped(e => a.a.createElement("i", {
				className: `${Object(je.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", Ie.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const Re = e => {
					let {
						content: t
					} = e;
					const s = Object(Ee.b)(),
						n = Object(i.d)(),
						d = Object(r.useCallback)(() => {
							const e = Object(b.a)(t.id),
								o = e ? j.eb : g.g,
								r = t.ignoreReports ? "restore_reports" : "ignore_reports",
								a = e ? Object(f.l)(r, t.id) : Object(f.k)(r, t.id);
							n(o(t.id)), s(a)
						}, [t.id, t.ignoreReports, s, n]),
						c = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return a.a.createElement(a.a.Fragment, null, a.a.createElement(_.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(I.a)(pe.a.coloredIcon, pe.a.icon)
					}), a.a.createElement("div", {
						className: pe.a.reportedWrapper
					}, !!t.modReports.length && a.a.createElement("div", {
						className: pe.a.statusText
					}, a.a.createElement("p", {
						className: pe.a.status
					}, o.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [o.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return a.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object($.e)(n), ": ", s)
					})), !!t.userReports.length && a.a.createElement("div", {
						className: pe.a.statusText
					}, a.a.createElement("div", {
						className: pe.a.reportMeta
					}, a.a.createElement("p", {
						className: pe.a.status
					}, o.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [o.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !c && a.a.createElement(ge.c, {
						className: pe.a.ignoreButton,
						onClick: d,
						text: t.ignoreReports ? o.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : o.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? a.a.createElement(we.a, {
						className: pe.a.ignoreButtonIcon
					}) : a.a.createElement(Ce.a, {
						className: pe.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, o, r, i] = e;
						return n ? void 0 !== r && i ? a.a.createElement(ve.a, {
							key: `user-${n}`,
							reason: n,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: r,
							useNewFormat: !0,
							className: pe.a.snoozabledButton,
							dropdownClassName: pe.a.snoozableDropdown,
							iconClassName: pe.a.snoozeIcon
						}) : a.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", o, ")") : null
					}))))
				},
				Ae = e => {
					let {
						content: t
					} = e;
					const s = N(t),
						o = Object(r.useMemo)(() => {
							switch (s) {
								case n.APPROVED:
									return a.a.createElement(be, {
										content: t
									});
								case n.REMOVED:
								case n.SPAM:
									return a.a.createElement(_e, {
										content: t
									});
								case n.FILTERED:
									return a.a.createElement(he, {
										content: t
									});
								case n.REPORTED:
									return a.a.createElement(Re, {
										content: t
									});
								default:
									return a.a.createElement(r.Fragment, null)
							}
						}, [s, t]),
						[d, c] = Object(r.useState)(!1),
						l = Object(x.a)(),
						m = Object(r.useCallback)(e => {
							var n;
							e.stopPropagation(), c(!d), l(Object(Y.e)((null === (n = t.belongsTo) || void 0 === n ? void 0 : n.id) || t.subredditId, s, Object(b.a)(t.id), !d))
						}, [l, t, d, c, s]),
						u = Object(i.e)(e => Object(J.a)(e)),
						p = Object(i.e)(e => {
							var s, n;
							return !!(null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[t.id])
						});
					if (s === n.UNMODERATED) return null;
					const f = u && p;
					return a.a.createElement(a.a.Fragment, null, a.a.createElement("div", {
						className: Object(I.a)(pe.a.wrapper, {
							[pe.a.approved]: s === n.APPROVED,
							[pe.a.reported]: s === n.REPORTED,
							[pe.a.opened]: d,
							[pe.a.openable]: f
						}),
						onClick: f ? m : void 0
					}, o, f && a.a.createElement("button", {
						className: pe.a.caretButton
					}, a.a.createElement(_.a, {
						name: d ? R.a.caret_up : R.a.caret_down,
						className: pe.a.caretIcon
					}))), u && p && d && a.a.createElement(le, {
						className: pe.a.previousActions,
						postOrCommentId: t.id
					}))
				},
				Me = (e, t) => Object(f.c)(t, e),
				Le = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: f
					} = e;
					const P = Object(x.a)(),
						w = Object(i.d)(),
						I = N(t),
						R = Object(i.e)(k.b),
						A = Object(b.b)(t),
						M = Object(i.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						L = Object(i.e)(e => Object(S.m)(e, {
							postId: t.id
						})),
						D = Object(p.a)(L),
						[F, B] = Object(r.useState)(!1),
						U = Object(i.e)(e => {
							var s, n;
							return null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === n ? void 0 : n.toUpdate.includes(t.id)
						}),
						z = Object(r.useRef)(null),
						W = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t,
									intersectionRatio: s
								} = e;
								s >= .5 ? B(!0) : t || B(!1)
							})
						}, []);
					F && U && w(Object(c.b)(t.id));
					const K = Object(r.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(O.a)(z, W, K);
					const V = [n.REPORTED, n.FILTERED, n.UNMODERATED].includes(I),
						G = [n.APPROVED, n.UNMODERATED, n.REPORTED].includes(I),
						H = A && D,
						q = I === n.REMOVED && Object(b.b)(t) && t.removedByCategory === v.g.Reddit && !t.isRemoved && !t.isApproved,
						Y = I === n.FILTERED || q,
						J = I === n.REMOVED && !t.modRemovalReason && !Y,
						Z = [n.REMOVED, n.SPAM].indexOf(I) > -1,
						X = A ? h.k : Me,
						$ = Object(r.useCallback)(() => {
							const e = A ? j.r : g.a;
							w(e(t.id)), P(X(t.id, "approve"))
						}, [P, w, t, A, X]),
						ee = Object(r.useCallback)(() => {
							const e = A ? j.S : g.e;
							w(e(t.id, !1)), t.isRemoved && t.bannedBy === d.m ? P(X(t.id, "confirm_remove")) : P(X(t.id, "remove"))
						}, [P, w, t, A, X]),
						te = Object(r.useCallback)(() => {
							w(Object(y.fetchReasonsAndOpenModal)(A ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, A, w]),
						se = Object(r.useCallback)(() => {
							w(Object(E.i)(Object(l.b)(t.id, !1))), P(Object(h.k)(t.id, "post_flair_picker"))
						}, [P, w, t]),
						ne = Object(r.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							A && w(Object(C.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [w, A, t]);
					return a.a.createElement("div", {
						className: T.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: z
					}, a.a.createElement(Ae, {
						content: t
					}), a.a.createElement("div", {
						className: T.a.actionBar
					}, V && a.a.createElement(u.t, {
						className: [T.a.button, T.a.approve].join(" "),
						Icon: Object(_.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: T.a.icon,
						onClick: $,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), G && a.a.createElement(u.t, {
						className: T.a.button,
						Icon: Object(_.b)("close"),
						iconPosition: u.h.L,
						iconClassName: T.a.icon,
						onClick: ee,
						text: o.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), J && a.a.createElement(u.t, {
						className: T.a.button,
						onClick: te,
						text: o.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), Y && a.a.createElement(u.t, {
						className: T.a.button,
						Icon: Object(_.b)("close"),
						iconPosition: u.h.L,
						iconClassName: T.a.icon,
						onClick: ee,
						text: o.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), Z && a.a.createElement(u.t, {
						className: T.a.button,
						Icon: Object(_.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: T.a.icon,
						onClick: $,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), H && a.a.createElement(u.t, {
						className: T.a.button,
						Icon: Object(_.b)("tag"),
						priority: u.c.Plain,
						iconPosition: u.h.L,
						iconClassName: T.a.icon,
						onClick: se,
						text: o.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), A && R === Object(l.b)(t.id, !1) && a.a.createElement(l.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(l.b)(t.id, !1),
						onFlairChanged: ne
					}), a.a.createElement(Q, {
						content: t,
						hostPostData: f,
						listingKey: s,
						moderatorPermissions: L
					}), M && a.a.createElement(m.a, {
						withOverlay: !0,
						postId: A ? t.id : void 0,
						commentId: A ? void 0 : t.id
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
					case o.z.AddNote:
						return n.fbt._("Added mod note", null, {
							hk: "4EQdI3"
						});
					case o.z.AddRemovalReason:
						return n.fbt._("Added removal reason", null, {
							hk: "3sDuRA"
						});
					case o.z.AdjustPostCrowdControlLevel:
						return n.fbt._("Adjusted post crowd control level", null, {
							hk: "3Ru27s"
						});
					case o.z.EnablePostCrowdControlFilter:
						return n.fbt._("Enabled post crowd control level", null, {
							hk: "bnrbt"
						});
					case o.z.DisablePostCrowdControlFilter:
						return n.fbt._("Disabled post crowd control level", null, {
							hk: "3Pn8Cm"
						});
					case o.z.ApproveComment:
						return n.fbt._("Approved comment", null, {
							hk: "15N4AH"
						});
					case o.z.ApproveLink:
						return n.fbt._("Approved post", null, {
							hk: "2pHeO6"
						});
					case o.z.BanUser:
						return n.fbt._("Banned user", null, {
							hk: "30ZUto"
						});
					case o.z.Collections:
						return n.fbt._("Collections", null, {
							hk: "4DLN5q"
						});
					case o.z.DeleteNote:
						return n.fbt._("Deleted mod note", null, {
							hk: "24mUGI"
						});
					case o.z.Distinguish:
						return "SubredditPost" === t ? n.fbt._("Post distinguished", null, {
							hk: "1EzjPd"
						}) : n.fbt._("Comment distinguished", null, {
							hk: "3TNqQa"
						});
					case o.z.EditFlair:
						return "SubredditPost" === t ? n.fbt._("Post flair edited", null, {
							hk: "2oj67i"
						}) : n.fbt._("User flair edited", null, {
							hk: "2WAVS8"
						});
					case o.z.IgnoreReports:
						return "SubredditPost" === t ? n.fbt._("Post reports ignored", null, {
							hk: "1HbgCS"
						}) : n.fbt._("Comment reports ignored", null, {
							hk: "3eLRwL"
						});
					case o.z.Lock:
						return "SubredditPost" === t ? n.fbt._("Post locked", null, {
							hk: "45Huvj"
						}) : n.fbt._("Comment locked", null, {
							hk: "2HzroI"
						});
					case o.z.MarkNsfw:
						return n.fbt._("Toggled post NSFW", null, {
							hk: "eAiVp"
						});
					case o.z.MarkOriginalContent:
						return n.fbt._("Toggled post Original Content", null, {
							hk: "46B0Bk"
						});
					case o.z.MuteUser:
						return n.fbt._("Muted user", null, {
							hk: "31YWRG"
						});
					case o.z.RemoveComment:
						return n.fbt._("Removed comment", null, {
							hk: "2qfmzC"
						});
					case o.z.RemoveLink:
						return n.fbt._("Removed post", null, {
							hk: "2leMij"
						});
					case o.z.SetContestMode:
						return n.fbt._("Set post contest mode", null, {
							hk: "2iE074"
						});
					case o.z.SetSuggestedsort:
						return n.fbt._("Set post suggested sort", null, {
							hk: "3zw33Q"
						});
					case o.z.ShowComment:
						return n.fbt._("Showed comment", null, {
							hk: "1xvaXS"
						});
					case o.z.SpamComment:
						return n.fbt._("Marked comment as spam", null, {
							hk: "E6CLe"
						});
					case o.z.SpamLink:
						return n.fbt._("Removed post as spam", null, {
							hk: "1Al2xz"
						});
					case o.z.Spoiler:
						return n.fbt._("Added spoiler tag", null, {
							hk: "254Axx"
						});
					case o.z.Sticky:
						return "SubredditPost" === t ? n.fbt._("Post stickied", null, {
							hk: "4m9DRx"
						}) : n.fbt._("Comment stickied", null, {
							hk: "1JIPzu"
						});
					case o.z.UnbanUser:
						return n.fbt._("Unbanned user", null, {
							hk: "3U4olT"
						});
					case o.z.Unlock:
						return "SubredditPost" === t ? n.fbt._("Post unlocked", null, {
							hk: "3IXrG"
						}) : n.fbt._("Comment unlocked", null, {
							hk: "4v2jmJ"
						});
					case o.z.UnmuteUser:
						return n.fbt._("Unmuted user", null, {
							hk: "2aB30x"
						});
					case o.z.UnsetContestMode:
						return n.fbt._("Unset post contest mode", null, {
							hk: "W4Yjf"
						});
					case o.z.UnsnoozeReports:
						return "SubredditPost" === t ? n.fbt._("Post unsnoozed", null, {
							hk: "3jp8zr"
						}) : n.fbt._("Comment unsnoozed", null, {
							hk: "2x01Eq"
						});
					case o.z.Unspoiler:
						return n.fbt._("Removed spoiler tag", null, {
							hk: "2GvhDn"
						});
					case o.z.Unsticky:
						return "SubredditPost" === t ? n.fbt._("Post unstickied", null, {
							hk: "KXoHl"
						}) : n.fbt._("Comment unstickied", null, {
							hk: "dpEKC"
						});
					case o.z.UpdateRemovalReason:
					case o.z.WikiBanned:
					case o.z.WikiContributor:
					case o.z.WikiPageListed:
					case o.z.WikiPermLevel:
					case o.z.WikiRevise:
					case o.z.WikiUnbanned:
					case o.z.AcceptModeratorInvite:
					case o.z.AddCommunityTopics:
					case o.z.AddContributor:
					case o.z.AddModerator:
					case o.z.CreateAward:
					case o.z.CreateScheduledPost:
					case o.z.CreateRemovalReason:
					case o.z.CommunityStyling:
					case o.z.CommunityWidgets:
					case o.z.CreateRule:
					case o.z.DeleteAward:
					case o.z.DeleteRule:
					case o.z.DeleteScheduledPost:
					case o.z.DeleteOverriddenClassification:
					case o.z.DeleteRemovalReason:
					case o.z.DisableAward:
					case o.z.EditPostRequirements:
					case o.z.EditRule:
					case o.z.EditScheduledPost:
					case o.z.EditSettings:
					case o.z.EnableAward:
					case o.z.Events:
					case o.z.HiddenAward:
					case o.z.InviteModerator:
					case o.z.InviteSubscriber:
					case o.z.ModAwardGiven:
					case o.z.ModmailEnrollment:
					case o.z.OverrideClassification:
					case o.z.RemoveCommunityTopics:
					case o.z.RemoveContributor:
					case o.z.RemoveModerator:
					case o.z.RemoveWikiContributor:
					case o.z.ReorderModerators:
					case o.z.ReorderRules:
					case o.z.SetPermissions:
					case o.z.SnoozeReports:
					case o.z.SubmitContentRatingSurvey:
					case o.z.SubmitScheduledPost:
					case o.z.UnignoreReports:
					case o.z.UninviteModerator:
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
				experimentName: m.sc
			}), e => e === m.Id);
			var f = s("./node_modules/fbt/lib/FbtPublic.js"),
				h = s("./src/lib/classNames/index.ts"),
				O = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				x = s("./src/reddit/components/SubredditIcon/index.tsx"),
				_ = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				g = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				E = s.n(g);
			const j = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(d.e)(e => Object(_.G)(e, {
						postId: t
					})),
					r = Object(d.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(v.X)(e, {
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
			var C = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				y = s("./src/reddit/connectors/PostViewable/index.ts"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/contexts/Post/index.tsx"),
				P = s("./src/reddit/helpers/path/index.ts"),
				N = s("./src/reddit/hooks/useClickSourceData.ts"),
				w = s("./src/reddit/hooks/useIsOverlay.ts"),
				T = s("./src/reddit/hooks/usePageLayer.ts"),
				I = s("./src/lib/prettyPrintNumber/index.ts"),
				R = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				A = s.n(R);
			const M = e => {
				let {
					post: t
				} = e;
				const s = `${Object(I.b)(t.score)} ${f.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(I.b)(t.numComments)} ${f.fbt._("comments",null,{hk:"30aUyh"})}`;
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
				F = s("./src/reddit/components/Thumbnail/index.tsx"),
				B = s("./src/reddit/components/UserIcon/index.tsx"),
				U = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				z = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				W = s("./src/reddit/selectors/profile.ts"),
				K = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				V = s.n(K);
			const G = e => {
				let {
					post: t
				} = e;
				var s, r, a, i;
				const c = Object(d.d)(),
					l = Object(d.e)(Object(W.l)(t.author)),
					m = Object(n.useMemo)(() => Object(F.c)({
						post: t
					}), [t]),
					u = Object(n.useMemo)(() => Object(L.a)(m), [m]);
				Object(n.useEffect)(() => {
					u || c(Object(D.d)(t.author))
				}, [c, t.author, u]);
				const p = !u && Object(z.a)(null === (s = null == l ? void 0 : l.icon) || void 0 === s ? void 0 : s.url),
					b = Object(U.c)(null === (r = null == l ? void 0 : l.icon) || void 0 === r ? void 0 : r.url);
				return o.a.createElement("div", {
					className: V.a.media
				}, u ? o.a.createElement(F.b, {
					post: t,
					url: m,
					className: V.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: V.a.mediaThumbnailContainer
				}) : null, !u && (null === (a = null == l ? void 0 : l.icon) || void 0 === a ? void 0 : a.url) && o.a.createElement("div", {
					className: V.a.userIconContainer
				}, o.a.createElement(B.a, {
					className: Object(h.a)({
						[V.a.snoovatarUserIcon]: p,
						[V.a.defaultUserIcon]: b
					}, V.a.userIcon),
					iconUrl: null === (i = null == l ? void 0 : l.icon) || void 0 === i ? void 0 : i.url,
					userName: l.name,
					wrapperClassName: V.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var H = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				q = s.n(H);
			const Q = Object(y.a)(null);
			var Y = Object(S.b)(Q(e => {
					let {
						post: t
					} = e;
					const s = Object(T.a)(),
						n = Object(w.a)(),
						r = Object(N.a)(),
						a = Object(k.x)(s) && !n;
					return o.a.createElement(O.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(P.b)(t.permalink) : Object(C.a)(t.permalink, !1, r)
					}, o.a.createElement("div", {
						className: q.a.container
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
				}), o.a.createElement(j, {
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
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				v = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/models/Subreddit/index.ts"),
				E = s("./src/reddit/components/PostMeta/index.m.less"),
				j = s.n(E);
			t.a = e => {
				const {
					flairStyleTemplate: t,
					hideGildCta: s,
					inSubredditOrProfile: n,
					isCurrentUserProfilePost: E,
					isOverlay: C,
					isTopicPage: y,
					post: k,
					shouldShowSubscribeButton: S,
					subredditOrProfile: P,
					tooltipType: N
				} = e, w = !!y, T = Object(v.a)(), I = Object(r.e)(e => !!P && Object(a.i)(e, P.id));
				return o.a.createElement("div", {
					className: j.a.metaContainer
				}, !n && !k.isSponsored && P && o.a.createElement(c.a, {
					postId: k.id,
					subredditName: P.name
				}, o.a.createElement(b.a, {
					className: j.a.subredditName,
					"data-click-id": "subreddit",
					to: {
						pathname: P.url,
						state: T
					}
				}, P.displayText)), P && P.isQuarantined && o.a.createElement(p.a, null), !n && !k.isSponsored && P && S && !E && o.a.createElement(f.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(_.k)(k.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: P.name,
						type: Object(g.i)(P) ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: k.id,
					size: O.d.XXS,
					small: !0
				}), !n && !k.isSponsored && o.a.createElement(x.b, null), !n && !k.isSponsored && o.a.createElement(l.h, {
					type: k.belongsTo.type,
					id: k.belongsTo.id
				}), o.a.createElement(u.g, {
					className: j.a.postTopMeta,
					flairStyleTemplate: t,
					post: k,
					tooltipType: N,
					isModWithUserNotesPermissions: I
				}), o.a.createElement(m.a, {
					displayText: P ? P.displayText : null,
					inSubredditOrProfile: !!n,
					post: k,
					tooltipType: N
				}), !w && o.a.createElement(i.a, {
					hideCta: s,
					thing: k,
					tooltipType: C ? u.f.Lightbox : void 0
				}), I && o.a.createElement(d.a, {
					postOrComment: k,
					className: j.a.addModNote
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
					postId: _,
					shouldShowUpvoteRatioOnHover: v
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
					postId: _,
					scoreClassName: Object(r.a)(u.a.score, {
						[u.a.allowPointerEvents]: v
					}),
					shouldShowUpvoteRatioOnHover: v
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
				_ = s("./src/reddit/helpers/path/index.ts"),
				v = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				E = s("./src/reddit/hooks/usePostContext.ts"),
				j = s("./src/reddit/hooks/useTheme.ts"),
				C = s("./src/reddit/icons/fonts/index.tsx"),
				y = s("./src/reddit/models/Flair/index.ts"),
				k = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Post/index.ts"),
				P = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				N = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = s("./src/lib/getShortenedLink.ts"),
				T = s("./src/reddit/components/FlairWrapper/index.tsx"),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				R = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				M = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				L = s.n(M);
			const D = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var F, B = Object(i.b)(D)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(g.a)() ? null : a.a.createElement("div", {
						className: Object(m.a)(e.className, L.a.proposalMetaData)
					}, a.a.createElement("span", null, I.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [I.fbt._param("count", Object(R.a)(n)), I.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(A.a, {
						className: L.a.proposalExpiry,
						poll: t
					}))
				})),
				U = s("./src/reddit/components/SEOTitle/index.tsx"),
				z = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				W = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				K = s("./src/reddit/selectors/user.ts"),
				V = s("./src/telemetry/models/Outbound.ts"),
				G = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				H = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				q = s("./src/reddit/components/PostTitle/index.m.less"),
				Q = s.n(q);

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
			}(F || (F = {}));
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
					const l = Object(j.a)();
					let u = "";
					switch (t) {
						case F.ExtraLarge:
							u = Q.a.ExtraLarge;
							break;
						case F.Large:
							u = Q.a.Large;
							break;
						case F.Medium:
							u = Q.a.Medium;
							break;
						case F.Small:
							u = Q.a.Small;
							break;
						case F.ExtraSmall:
							u = Q.a.ExtraSmall;
							break;
						case F.Metadata:
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
					isNsfwBlurSubreddit: W.e,
					shouldOpenPostInNewTab: K.lb
				}),
				ee = e => {
					const {
						post: t
					} = e, {
						isSponsored: s
					} = t, n = Object(i.d)(), o = Object(v.a)(), r = Object(i.e)(z.b), d = Object(i.e)(z.c), c = e => {
						(r || d) && (e.preventDefault(), n(Object(O.Z)(Object(_.b)(t.permalink), t.id))), t.isSponsored && Object(S.A)(t) && n(Object(O.y)(t, x.a.Click))
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
							r = e.isCommentPermalink ? Object(_.b)(n) : Object(h.a)(n, void 0, o);
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
					}, t && a.a.createElement(T.a, {
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
					} = n, r = e.isCommentsPage ? V.SourceElement.PostLink : V.SourceElement.ListingPostLink;
					if (Object(g.a)()) return null;
					if (s && n.isNSFW) return null;
					const i = !t && !e.isCrosspost && e.size !== F.Large && !n.isSponsored && (n.source || n.media && (n.media.type === k.o.GIFVIDEO || n.media.type === k.o.IMAGE || n.media.type === k.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return a.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(k.E)(n),
							isSponsored: o,
							postId: n.id,
							source: n.source,
							sourceElement: r
						}, Object(w.a)(n), !n.isSponsored && a.a.createElement(C.a, {
							name: "external_link",
							className: Q.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== F.Large && e.size !== F.ExtraLarge) return a.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: o,
						postId: n.id,
						source: n.source,
						sourceElement: r
					}, Object(w.a)(n), !n.isSponsored && a.a.createElement(C.a, {
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
					} = this.props, p = s === y.b.Left, b = Object(T.b)(d), {
						leftFlair: f,
						rightFlair: h
					} = Object(G.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: l
					}), O = !r && !o && !t, x = O && f && f.length > 0, _ = O && h && h.length > 0;
					return a.a.createElement("div", {
						className: Object(m.a)(Q.a.Component, e, d.id),
						ref: this.props.innerRef,
						"data-adclicklocation": H.a.TITLE,
						onClick: u
					}, !c && x && a.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: d,
						sendEvent: this.props.sendEvent
					}), !Object(P.b)(d) && a.a.createElement(ee, Y({}, this.props, {
						leftFlair: c ? f : void 0
					})), i && a.a.createElement(B, {
						className: Q.a.pollMeta,
						pollId: i.id
					}), a.a.createElement(se, this.props), _ && a.a.createElement(T.a, {
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
				const t = Object(p.gb)(),
					s = Object(p.x)(t),
					n = Object(E.a)(),
					o = Object(i.e)(o => $(o, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					r = Object(j.a)(),
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
				_ = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				g = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				k = s("./src/reddit/components/PostTopLine/index.m.less"),
				S = s.n(k);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: o,
					hideNSFWPref: k,
					hostPostData: P,
					iconClassName: N,
					inSubredditOrProfile: w,
					isCommentsPage: T,
					isCompactPinnedPost: I,
					isCurrentUserProfilePost: R,
					isModQueuePage: A,
					isModWithUserNotesPermissions: M,
					isOverlay: L,
					isTopicPage: D,
					listingKey: F,
					post: B,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: z,
					showSubreddit: W,
					showSubredditIcon: K,
					subredditOrProfile: V,
					isFollowed: G,
					shouldShowFollowButton: H,
					onFollowPostClick: q,
					onSubscribed: Q
				} = e;
				const Y = D,
					J = V && Object(j.i)(V),
					Z = Object(a.e)(e => {
						if (!J) return !0;
						const t = Object(y.Ib)(e, B.author || "");
						return !t || t.enableFollowers
					}),
					X = Object(a.e)(C.a);
				return r.a.createElement("div", {
					className: Object(i.a)(S.a.container, t)
				}, W && V && r.a.createElement("div", {
					className: S.a.subredditIconWrapper
				}, r.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, K && r.a.createElement(b.b, {
					className: Object(i.a)(S.a.subredditIcon, N),
					shouldHideNsfwIcon: k,
					subredditOrProfile: V
				}))), r.a.createElement("div", {
					className: S.a.everythingElseWrapper
				}, W && r.a.createElement(l.h, {
					type: B.belongsTo.type,
					id: B.belongsTo.id
				}), r.a.createElement(p.g, {
					className: S.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: M,
					tooltipType: L ? p.f.Lightbox : void 0,
					post: B,
					showSub: W,
					subredditOrProfile: V
				}), r.a.createElement(u.a, {
					className: S.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: I,
					post: B,
					tooltipType: L ? p.f.Lightbox : void 0
				}), !Y && r.a.createElement(d.a, {
					isPostDetail: T,
					thing: B,
					tooltipType: L ? p.f.Lightbox : void 0
				}), M && r.a.createElement(c.a, {
					postOrComment: B,
					className: S.a.addModNote
				})), V && Z && W && U && !R && r.a.createElement(h.a, {
					className: S.a.SubscribeButton,
					getEventFactory: e => (Q && !e && Q(), Object(v.k)(B.id, e ? "unsubscribe" : "subscribe", "post", F, P)),
					identifier: {
						name: V.name,
						type: J ? O.a.PROFILE : O.a.SUBREDDIT
					},
					postId: B.id,
					size: x.d.XS,
					priority: X ? x.c.Secondary : void 0,
					isShredditParityEnabled: X
				}), z && r.a.createElement(_.b, {
					isSponsored: B.isSponsored,
					postId: B.id,
					href: Object(E.E)(B),
					source: B.source
				}, r.a.createElement(g.a, {
					className: S.a.outboundLinkIcon
				})), H && Z && r.a.createElement(m.a, {
					isFilled: !!G,
					onClick: q,
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
				_ = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				g = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				C = s.n(j);
			const {
				fbt: y
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = (e, t) => `SnoozableReport--${t}--${e}`, S = Object(r.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(E.b)(k(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(m.h)({
					tooltipId: k(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(h.a)(t.reportedThingId) ? e(Object(c.h)(t.reportedThingId, t.reason, s)) : e(Object(l.fb)(t.reportedThingId, t.reason, s))
				}
			})), P = Object(u.a)(b.a);
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
						className: Object(i.a)(C.a.DropdownLabelContainer, c),
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: u,
						className: C.a.DropdownLabel
					}, a ? y._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : d ? `${e} (${t})` : `${t}: ${e}`, r ? o.a.createElement(_.a, null) : o.a.createElement(x.a, null))), o.a.createElement(P, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: Object(i.a)(C.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: C.a.SnoozeButtonContent
					}, a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(g.a, {
						className: m
					}), y._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(v.a, {
						className: m
					}), y._("Snooze reports from this user for 7 days", null, {
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
				return P
			})), s.d(t, "b", (function() {
				return N
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "c", (function() {
				return R
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
				_ = s("./src/reddit/helpers/search/SearchTelemetrySource.ts"),
				v = s("./src/reddit/helpers/trackers/searchResults.ts"),
				g = s("./src/reddit/hooks/usePageLayer.ts"),
				E = s("./src/reddit/hooks/useTracking.ts"),
				j = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/selectors/platform.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				k = s("./src/reddit/controls/Search/CommentSearch/index.m.less"),
				S = s.n(k);
			const P = "comment_search-bar",
				N = "comment-search-button",
				w = "search-bar-dismiss-button",
				T = "COMMENT_SEARCH_BAR_TEST_ID";

			function I(e) {
				let {
					searchValue: t,
					post: s,
					subreddit: n
				} = e;
				return {
					[b.x]: t,
					[b.K]: [l.ic.Comments],
					...(null == n ? void 0 : n.isNSFW) ? {
						[b.H]: "1"
					} : {},
					...(null == s ? void 0 : s.isNSFW) ? {
						[b.m]: "1"
					} : {}
				}
			}

			function R(e) {
				const {
					expanded: t,
					bucketed: s,
					collapsed: l
				} = e.experiment, b = Object(g.a)(), k = Object(E.a)(), R = (null == b ? void 0 : b.queryParams.q) || "", [A, M] = Object(o.useState)(R), [L, D] = Object(o.useState)(t), F = Object(a.d)(), B = Object(o.useRef)(null), U = Object(a.e)(e => Object(f.h)(e, {
					pageLayer: b
				})), z = Object(a.e)(e => Object(f.s)(e, {
					pageLayer: b
				})), W = Object(a.e)(e => Object(C.i)(e));
				var K, V, G;

				function H() {
					var t;
					if (!A.trim() || !U) return;
					const s = new URL(U.permalink).pathname,
						n = I({
							searchValue: A,
							post: U,
							subreddit: z
						});
					O.a.set(y.a.CommentSearchBar), k(Object(v.p)(v.a.FULL_SEARCH_BUTTON, n, _.a.PdpCommentSearch, b || void 0));
					const o = Object(m.b)(U.id, void 0, n);
					F(Object(u.d)({
						key: o,
						options: n,
						subredditName: null == z ? void 0 : z.name,
						postId: U.id
					}));
					const r = Object(d.a)(s, n);
					F(Object(i.b)(Object(h.b)(r), {
						...null === (t = e.prevLocation) || void 0 === t ? void 0 : t.state,
						isOverlay: W,
						scrollOnLoad: !0
					}))
				}
				return K = B, V = D, G = l, Object(o.useEffect)(() => {
					if (G) return document.addEventListener("mousedown", e), () => {
						document.removeEventListener("mousedown", e)
					};

					function e(e) {
						K.current && !K.current.contains(e.target) && V(!1)
					}
				}, [K]), s ? r.a.createElement("div", {
					className: S.a.flex
				}, A || L ? r.a.createElement("div", {
					"data-testid": P
				}, r.a.createElement("label", {
					className: Object(c.a)(S.a.flex, S.a.relative)
				}, r.a.createElement("div", {
					className: S.a.absolute,
					role: "submit",
					onClick: H
				}, r.a.createElement(j.a, {
					className: Object(c.a)(S.a.postIcon, S.a.paddingIcon),
					name: "search"
				})), r.a.createElement("input", {
					className: Object(c.a)(S.a.metadataFont, S.a.input),
					"data-testid": T,
					id: P,
					type: "search",
					onChange: e => {
						x.a.update(_.a.PdpCommentSearchBar), M(e.target.value)
					},
					onFocus: function() {
						x.a.update(_.a.PdpCommentSearchBar), O.a.set(y.a.CommentSearchBar), k(Object(v.p)(v.a.SEARCH_BAR, I({
							searchValue: A,
							post: U,
							subreddit: z
						}), _.a.PdpCommentSearchBar, b || void 0))
					},
					onKeyPress: function(e) {
						e.key === p.b.Enter && H()
					},
					placeholder: n.fbt._("Search comments", null, {
						hk: "2ObH7B"
					}),
					ref: B,
					value: A
				}), A && r.a.createElement("button", {
					"aria-label": n.fbt._("Remove search bar text", null, {
						hk: "4twCsS"
					}),
					id: w,
					className: S.a.dismissButton,
					"data-testid": w,
					onClick: () => {
						M("")
					}
				}, r.a.createElement(j.a, {
					className: S.a.dismissIcon,
					name: "clear"
				})))) : r.a.createElement("button", {
					className: S.a.linkTextColor,
					"data-testid": N,
					id: N,
					onClick: () => {
						Promise.resolve(D(!0)).then(() => {
							var e;
							return null === (e = B.current) || void 0 === e ? void 0 : e.focus()
						})
					}
				}, r.a.createElement(j.a, {
					className: Object(c.a)(S.a.searchIcon, S.a.paddingIcon),
					name: "search"
				}), r.a.createElement("span", {
					className: S.a.actionFont
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
				type: o.L.SERVER_ERROR,
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
					isDeleted: e.author === n.H,
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
				l = e => e.author !== n.H ? null : e.body === n.I ? d.c.User : e.body === n.Qb ? d.c.Moderator : null
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
							case n.L.NO_STRIPE_SUBSCRIPTION:
							case n.L.USER_DOESNT_EXIST:
							case n.L.USER_REQUIRED_ERROR:
							case n.L.VALIDATION_ERROR:
								return e;
							case n.L.NO_USER:
							case n.L.NO_TEXT:
							case n.L.NO_URL:
								return n.L.VALIDATION_ERROR;
							case n.L.CREDIT_CARD_FAILURE:
							case n.L.CREDIT_CARD_FAILURE_GENERIC:
								return n.L.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.L.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.L.VALIDATION_ERROR
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
				return _
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "k", (function() {
				return g
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "l", (function() {
				return C
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
						...Object(c.o)(e),
						screen: Object(c.cb)(e),
						subreddit: Object(c.lb)(e),
						post: t ? Object(c.K)(e, t) : null,
						profile: Object(c.T)(e),
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
						comment: r ? Object(c.h)({
							state: e,
							commentId: r,
							contentType: p
						}) : null,
						listing: Object(c.z)(e, void 0, {
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
						c = r.type === n.Pb ? "karma_rate_limit" : r.fields && r.fields.length > 0 ? r.fields[0].msg : void 0,
						p = i ? "image" : function(e) {
							return e.includes(`"id":"${m.c}`)
						}("string" == typeof s ? s : JSON.stringify(s)) ? "giphy" : void 0;
					return Object(l.a)({
						...d,
						source: r.type === n.Pb ? "backend" : "comment_composer",
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
					...Object(c.o)(t),
					screen: Object(c.cb)(t),
					subreddit: Object(c.lb)(t),
					post: Object(c.K)(t, e)
				}), x = e => Object(l.a)({
					noun: "edit",
					...u(e)
				}), _ = e => Object(l.a)({
					noun: "save_edit",
					...u(e)
				}), v = (e, t) => s => {
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
				}), j = () => e => ({
					...u(e),
					action: "select",
					noun: "gif_tooltip_result"
				}), C = () => e => ({
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
					...Object(r.o)(s),
					action: o.c.VIEW,
					noun: "aggregate_stats",
					source: "creator_stats",
					subreddit: Object(r.lb)(s),
					post: Object(r.K)(s, e),
					userSubreddit: Object(r.ub)(s),
					actionInfo: Object(r.d)(s, {
						reason: a(t)
					})
				}),
				d = (e, t) => s => ({
					...Object(r.o)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.K)(s, t),
					subreddit: Object(r.lb)(s),
					userSubreddit: Object(r.ub)(s)
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
					...Object(r.o)(t),
					action: o.c.CLICK,
					noun: "post_stats",
					source: "post",
					actionInfo: Object(r.d)(t, {
						pageType: "profile"
					}),
					post: Object(r.K)(t, e, void 0, 0),
					profile: Object(r.T)(t)
				}),
				m = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						reason: c(t)
					}),
					post: Object(r.K)(n, e, void 0, s)
				}),
				u = (e, t, s, n, a, i) => d => ({
					...Object(r.o)(d),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(d, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.K)(d, e, void 0, i),
					subreddit: Object(r.lb)(d),
					outbound: {
						postId: s,
						url: t,
						subredditId: n,
						subredditName: a
					}
				}),
				p = (e, t, s) => n => ({
					...Object(r.o)(n),
					action: o.c.CLICK,
					noun: "share",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						pageType: "post_stats",
						reason: c(t)
					}),
					post: Object(r.K)(n, e, void 0, s),
					subreddit: Object(r.lb)(n)
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
					...Object(n.o)(s),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: e ? "general_queue" : "community"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.nb)(s, t)
					}
				}),
				d = (e, t, s) => o => ({
					source: "moderator",
					action: "click",
					noun: "subreddit_filter",
					...Object(n.o)(o),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "activity_card" : "queue_filters",
						reason: e ? "active" : "inactive"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.nb)(o, t)
					}
				}),
				c = (e, t, s, o) => r => ({
					source: "moderator",
					action: "click",
					noun: o ? "expand_previous_actions" : "collapse_previous_actions",
					...Object(n.o)(r),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "post" : "comment",
						reason: t
					},
					subreddit: Object(n.mb)(r, e)
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
				return _
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "g", (function() {
				return E
			})), s.d(t, "l", (function() {
				return j
			})), s.d(t, "t", (function() {
				return C
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "x", (function() {
				return S
			})), s.d(t, "u", (function() {
				return P
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "s", (function() {
				return w
			})), s.d(t, "v", (function() {
				return T
			})), s.d(t, "w", (function() {
				return I
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.o(e),
					screen: o.cb(e),
					subreddit: o.lb(e),
					userSubreddit: o.ub(e)
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
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				v = e => t => ({
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
				j = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				C = (e, t, s) => a => ({
					source: "post",
					action: "click",
					noun: Object(n.m)(e),
					...r(a),
					actionInfo: o.d(a, {
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
				w = () => (e, t) => ({
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
				I = () => (e, t) => {
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
				return _
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "j", (function() {
				return g
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "n", (function() {
				return j
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "m", (function() {
				return y
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
				_ = e => f[b[e]],
				v = e => b[f[e]],
				g = e => h[f[e]];
			var E;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(E || (E = {}));
			const j = e => {
					switch (e) {
						case E.Hourly:
						case E.Daily:
						case E.Weekly:
						case E.Monthly:
							return !0
					}
					return !1
				},
				C = "custom",
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
		"./src/reddit/reducers/user/experiments/shredditPDPExperimentHeader/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/sentry/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts");
			var r;
			Object(o.a)("SHREDDIT_PDP_EXPERIMENT_HEADER_ACTION");
			! function(e) {
				e[e.Treatment = 0] = "Treatment", e[e.Control = 1] = "Control", e[e.Off = 2] = "Off"
			}(r || (r = {}));
			const a = r.Off;
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "SHREDDIT_PDP_EXPERIMENT_HEADER_ACTION":
						return n.c.captureException("PDP Experiment Header should only be set on the server."), e;
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/reselect/es/index.js");
			const o = e => !(e.chat.isInited || e.chat.unread.api.pending),
				r = e => e.chat.liveChatTooltipShowState,
				a = Object(n.a)((e, t) => t, e => e.chat.activeUserCountByLiveChatId, (e, t) => t[e])
		},
		"./src/reddit/selectors/experiments/cnc/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.hc
					});
					return !(!t || Object(n.gg)(t))
				},
				a = e => {
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.Ub
					});
					return !(!t || Object(n.gg)(t))
				}
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
				experimentName: n.ob
			}), e => ({
				bucketed: e === n.Rc.ExpandedSearch || e === n.Rc.CollapsedSearch,
				collapsed: e === n.Rc.CollapsedSearch,
				expanded: e === n.Rc.ExpandedSearch
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
					return !!t && d(e, t) === o.Q.SkipOnboarding
				},
				u = e => {
					const t = c(e);
					return !!t && d(e, t) === o.Q.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/reducers/user/experiments/shredditPDPExperimentHeader/index.ts"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/selectors/user.ts");
			const d = Object(a.a)(i.S, e => !e),
				c = Object(a.a)(e => Object(o.c)(e, {
					experimentEligibilitySelector: d,
					experimentName: n.sf
				}), e => e === n.Id),
				l = Object(a.a)(c, e => e.user.experiments.shredditPDPExperimentHeader, (e, t) => e ? t : r.a.Off),
				m = Object(a.a)(l, e => e === r.a.Treatment),
				u = (e, t) => {
					const s = l(t());
					d(t()) && s !== r.a.Off && e.block(e => {
						if ((e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname))
							if (s === r.a.Control) Object(o.d)(t(), n.tf, n.N.Control1);
							else if (s === r.a.Treatment) return window.location.href = e.pathname, !1
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
					experimentName: o.Tf,
					experimentEligibilitySelector: r.a
				}), e => e),
				i = Object(n.a)(a, e => e === o.Nf)
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
					return Boolean(t) && !Object(o.gg)(t)
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
			e.exports = JSON.parse('{"id":"f474c490e3e9"}')
		},
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummaryByID.json": function(e) {
			e.exports = JSON.parse('{"id":"d968e053a7b8"}')
		},
		"./src/redditGQL/operations/SingleCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"f151b4667f32"}')
		},
		"./src/redditGQL/operations/SinglePostInfoById.json": function(e) {
			e.exports = JSON.parse('{"id":"b8368f5028bb"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.228e34d9da06550e7e61.js.map