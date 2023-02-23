// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.6ec4962ce1e0dd52a116.js
// Retrieved at 2/23/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
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
					var r, o = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						d = !a && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !o && !l && /macintosh/i.test(t),
						x = !i && !u && !m && !p && /linux/i.test(t),
						_ = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = s(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !g && /[^-]mobi/i.test(t),
						v = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: E || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || E
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: E || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: E || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: E || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? r = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? r = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? r = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? r = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? r = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? r = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, _ ? (r.msedge = e, r.version = _) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: _
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || E
					} : u ? r = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? r = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (r = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : l ? r = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? r = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? r = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? r = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: E || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: E || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || E
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || E
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || E
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: E
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, E && (r.version = E)) : o ? (r = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, E && (r.version = E)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || E
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && E && (r.version = E)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : f ? (r.mac = e, r.osname = "macOS") : v ? (r.xbox = e, r.osname = "Xbox") : h ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var y = "";
					r.windows ? y = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? y = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? y = (y = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? y = (y = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? y = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? y = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? y = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? y = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (y = s(/tizen[\/\s](\d+(\.\d+)*)/i)), y && (r.osversion = y);
					var S = !r.windows && y.split(".")[0];
					return g || d || "ipad" == o || i && (3 == S || S >= 4 && !O) || r.silk ? r.tablet = e : (O || "iphone" == o || "ipod" == o || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function n(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var s, n = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) n.push(t(e[s]));
					return n
				}

				function o(e) {
					for (var t = Math.max(n(e[0]), n(e[1])), s = r(e, (function(e) {
							var s = t - n(e);
							return r((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, n, r) {
					var i = s;
					"string" == typeof n && (r = n, n = void 0), void 0 === n && (n = !1), r && (i = t(r));
					var a = "" + i.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && i[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return o([a, e[d]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = o, s.check = function(e, t, s) {
					return !i(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = n() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", n)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, s, n, r) {
				return r(e, (function(e, r, o) {
					s = n ? (n = !1, e) : t(s, e, r, o)
				})), s
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = r(s)) == s ? s : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), n(r(e), t, s)
			}
		},
		"./node_modules/lodash/map.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayMap.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				o = s("./node_modules/lodash/_baseMap.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? n : o)(e, r(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var d = a(e) ? n : i,
					c = arguments.length < 3;
				return d(e, o(t, 4), s, c, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return n(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const d = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return r => {
					const o = m(r.target, r.currentTarget),
						a = p(r.target, r.currentTarget);
					o && s && t && (u(r.target, r.currentTarget, l.anchors) ? s(t(e, o, a)) : s(s => {
						const n = t(e, o, a)(s);
						let r;
						if (n && n.actionInfo) {
							const {
								pageType: e,
								...t
							} = n.actionInfo;
							r = t
						}
						return {
							...n,
							actionInfo: Object(i.S)(s, r)
						}
					})), u(r.target, r.currentTarget, l.anchorsAndButtons) && n(r)
				}
			});

			function c(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: o,
						clickTrackingId: i,
						...c
					} = t, l = Object(n.useCallback)(d(i, o, s), [i, o, s]);
					return r.a.createElement(e, a({}, c, {
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
				u = (e, t, s) => !s.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, s)),
				m = (e, t) => {
					const s = e.dataset.clickId;
					return s || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
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
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = s.n(r);
			t.a = function(e) {
				var t;
				const {
					source: s,
					isSponsored: r,
					domainOverride: i,
					callToAction: a
				} = e;
				let d = "";
				if (r) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					d = i || Object(n.E)(e)
				} else d = Object(n.E)(e);
				const c = o.a.parse(d),
					l = c.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (c.hostname ? c.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = [r.zc, r.vb, r.E, r.V, r.qb, r.Yb],
				i = {
					[r.Yb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.qb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.V]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.E]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.vb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.zc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[r.Yb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.qb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.V]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.E]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.vb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.zc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.vb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.zc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function d(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const d = Date.now(),
					c = new Date(e).getTime(),
					l = {
						[r.zc]: "",
						[r.vb]: "",
						[r.E]: "",
						[r.V]: "",
						[r.qb]: "",
						[r.Yb]: ""
					};
				let u = c - d;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of o) {
					const e = Math.floor(u / n);
					e && (l[n] = (t ? a : i)[n](e).toString()), u -= e * n
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? m : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return g
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "b", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeCommentsPageKey/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/shortcuts/utils.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				u = s("./src/reddit/endpoints/comment/index.tsx"),
				m = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/selectors/commentSelector.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/actions/comment/index.ts"),
				_ = s("./src/reddit/actions/comment/constants.ts");
			const E = Object(o.a)(_.p),
				g = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					s().features.comments.models[e] && (await Object(u.j)(r(), e)).ok && t((e => async t => {
						t(E({
							commentId: e
						}))
					})(e))
				}, O = e => async (t, s, r) => {
					let {
						apiContext: o
					} = r;
					if (!Object(f.S)(s())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const i = s().features.comments.models[e];
					if (!i) return;
					const d = i.isLocked ? u.l : u.f;
					t(Object(x.j)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await d(o(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? n.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : n.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(x.j)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, v = Object(o.a)(_.J), y = e => async (t, s, r) => {
					let {
						apiContext: o,
						gqlContext: i
					} = r;
					const a = s(),
						l = a.features.comments.models[e],
						m = a.user.account ? a.user.account.displayText : null;
					l && m && (t(Object(x.j)({
						[e]: {
							isApproved: !0,
							approvedBy: m,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(u.a)(i(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: n.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(x.j)({
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
				}, S = (e, t) => async (s, r, o) => {
					let {
						apiContext: i,
						gqlContext: a
					} = o;
					const l = r(),
						m = l.features.comments.models[e],
						p = l.user.account ? l.user.account.displayText : null;
					m && p && (s(Object(x.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(u.h)(a(), e, t)).ok ? s(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? n.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : n.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(x.j)({
						[e]: {
							approvedBy: m.approvedBy,
							bannedBy: m.bannedBy,
							isApproved: m.isApproved,
							isRemoved: m.isRemoved,
							isSpam: m.isSpam,
							numReports: m.numReports
						}
					})), Object(d.d)())
				}, C = e => async (t, s, r) => {
					let {
						apiContext: o
					} = r;
					const i = s().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? u.k : u.e;
					i.ignoreReports || t(y(e)), t(Object(x.j)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await a(o(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? n.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : n.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(x.j)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, j = (e, t, s) => async (o, i, a) => {
					let {
						gqlContext: d
					} = a;
					const l = Object(h.c)(i(), {
						commentId: e
					});
					if (!l) return;
					const u = s === r.lc.Snoozed,
						f = {
							itemId: e,
							reportText: t,
							isSnoozed: u
						};
					if ((await Object(m.a)(d(), {
							input: f
						})).ok) o(Object(x.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, u)
						}
					}));
					else {
						const e = Object(c.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						o(Object(c.f)(e))
					}
				}, k = (e, t, s) => async (n, o, a) => {
					let {
						apiContext: d,
						gqlContext: c
					} = a;
					const l = o(),
						m = l.features.comments.models[e];
					if (!m) return;
					const p = m.postId,
						b = l.postStickiedComments.data[p];
					n(Object(x.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.J.ADMIN,
							isMod: t === r.J.MODERATOR,
							isStickied: !!s
						}
					})), s && b && b !== e && n(Object(x.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const h = Object(u.c)(c(), e, t),
						f = Object(u.d)(c(), e, !!s),
						_ = [h];
					(s || !s && e === b) && _.push(f), (await Promise.all(_)).every(e => e.ok) ? s && n(v({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: r.w.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (n(Object(x.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), n(Object(x.j)({
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
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "i", (function() {
				return u
			}));
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				d = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "t", (function() {
				return c
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
				return h
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "j", (function() {
				return _
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "p", (function() {
				return g
			})), s.d(t, "q", (function() {
				return O
			})), s.d(t, "o", (function() {
				return v
			}));
			const n = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
				d = "ADD_POST_TO_COLLECTION_SUCCESS",
				c = "UPDATE_POST_WITH_COLLECTION_ID",
				l = "DELETE_COLLECTION_SUCCESS",
				u = "UPDATE_COLLECTION_PENDING",
				m = "UPDATE_COLLECTION_SUCCESS",
				p = "UPDATE_COLLECTION_FAILED",
				b = "UPDATE_COLLECTION_DESCRIPTION_PENDING",
				h = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				x = "REORDER_COLLECTION_PENDING",
				_ = "REORDER_COLLECTION_SUCCESS",
				E = "REORDER_COLLECTION_FAILED",
				g = "UPDATE_COLLECTION_LAYOUT_PENDING",
				O = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				v = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/shredditPDPExperiementHeaderAction.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const r = "SHREDDIT_PDP_EXPERIMENT_HEADER_ACTION",
				o = (Object(n.a)(r), "SHREDDIT_PDP_EXPERIMENT_HEADER_ACTION_V2");
			Object(n.a)(o)
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function d(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, d = Object(o.e)(e => e.subreddits.questions), c = Object(o.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = s[r],
						t = c[e].belongsTo.id;
					p(e) && r - o >= a && !u.has(t) && (o = r, u.add(t), r === l && (m = !0))
				}
				return m ? r.a.createElement(i.a, {
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
			const r = Object(n.a)({
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
			t.a = r
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
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
			const u = Object(i.a)(e => {
				let {
					className: t,
					...s
				} = e;
				return r.a.createElement(a.a, l({}, s, {
					className: Object(o.a)(c.a.horizontalVotes, t),
					scoreClassName: Object(o.a)(c.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(a.b)(s) ? c.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/featureFlags/component.tsx");
			const o = Object(n.a)({
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
				i = Object(r.a)("spBurnLinks", Object(n.a)({
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
		"./src/reddit/components/IntuitivePostTypes/OptionalText.m.less": function(e, t, s) {
			e.exports = {
				optionalText: "_1Bdk-WLPvP2xHwSSQ3qsHq"
			}
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/IntuitivePostTypes/OptionalText.m.less"),
				i = s.n(o),
				a = s("./src/reddit/components/RichTextJson/index.tsx");
			t.a = e => {
				let {
					content: t,
					rtJsonElementProps: s
				} = e;
				return r.a.createElement("div", {
					className: i.a.optionalText
				}, r.a.createElement(a.a, {
					content: t,
					rtJsonElementProps: s
				}))
			}
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/Media/index.m.less"),
				a = s.n(i);
			const d = (e, t) => e && t ? n.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? n.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? n.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				c = e => {
					let {
						isNSFW: t,
						isSpoiler: s
					} = e;
					return o.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, o.a.createElement("button", {
						className: a.a.unblurButton
					}, d(t, s)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, s) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/forceHttps/index.ts"),
				l = s("./src/reddit/constants/tracking.ts"),
				u = s("./src/reddit/models/Media/index.ts"),
				m = s("./src/reddit/selectors/user.ts"),
				p = s("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = s.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(o.b)(() => Object(i.c)({
					isNightmodeOn: m.fb
				}));
			t.a = f(e => {
				const {
					isResponsive: t,
					source: s
				} = e, n = {
					responsive: "true",
					is_nightmode: e.isNightmodeOn
				}, o = new URL(s), i = t && !o.searchParams.has("s") ? Object(a.a)(Object(c.a)(s), n) : Object(c.a)(s), m = {
					overflow: "hidden"
				};
				return m.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (m.margin = "0 auto"), e.isListing || (m.maxHeight = `${u.d}px`), void 0 !== e.maxHeight && (m.maxHeight = e.maxHeight || void 0), e.isTweet || (m.height = "100%"), r.a.createElement("iframe", {
					className: Object(d.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: i,
					style: m,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return w
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/forceHttps/index.ts"),
				u = s("./src/lib/opener/index.ts"),
				m = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = s("./src/reddit/components/Media/BlurredContent.tsx"),
				b = s("./src/reddit/components/PlayButton/index.tsx"),
				h = s("./src/reddit/constants/adEvents.ts"),
				f = s("./src/reddit/constants/elementClassNames.ts"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/ads.ts"),
				E = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				v = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/constants/tracking.ts"),
				j = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				k = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				T = s.n(k);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => e > 2 * O.d,
				I = e => o.a.createElement("img", {
					alt: e.altText || n.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(c.a)(e.className, {
						[T.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				N = e => {
					const t = Object(c.a)(T.a.image, f.g, e.className, {
							[T.a.mShowCentered]: e.showCentered,
							[T.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					e.showFull || e.isTall || (s.maxHeight = `${O.j}px`), e.isListing || e.isTall && w(e.height) || (s.maxHeight = `${e.maxHeight||O.d}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`);
					const i = Object(r.useRef)(null),
						[a, d] = Object(r.useState)(!1),
						l = Object(r.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!a && t && d(!0)
							})
						}, [a]),
						u = Object(r.useRef)({
							rootMargin: "750px 0px 750px 0px"
						});
					Object(g.a)(i, l, u.current);
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
					const h = Object(r.useRef)({
						height: b
					});
					return e.renderSmallMedia ? o.a.createElement("div", {
						ref: i,
						style: h.current
					}, a && o.a.createElement(I, P({}, e, {
						className: t
					}))) : o.a.createElement("img", {
						alt: e.altText || n.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: s
					})
				},
				M = e => {
					const t = {};
					return (!e.showFull && Object(O.M)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${O.j}px`, e.shouldBlur && (t.maxWidth = Object(O.M)(e.height, e.width) ? `${O.A}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(c.a)(T.a.container, e.className, {
							[T.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				L = Object(i.b)(() => Object(d.a)(v.F, S.lb, (e, t) => {
					let {
						isSponsored: s,
						postId: n
					} = t;
					return s && n ? Object(v.b)(e, n) : null
				}, y.d, v.G, (e, t, s, n, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					pageType: n.pageType,
					post: r
				})));
			t.a = L(e => {
				const t = Object(E.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": j.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(x.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, h.a.Click), Object(_.a)(e.post, e.pageType))
					}
				}, A(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, A(e)) : A(e)
			});
			const R = (e, t) => o.a.createElement(N, {
					altText: t.altText,
					className: Object(c.a)(t.imageClassName, {
						[C.a]: !e
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
				A = e => {
					let {
						onClick: t,
						...s
					} = e;
					const r = Object(O.M)(s.height, s.width),
						i = w(s.height) && r;
					return o.a.createElement(M, P({}, s, {
						className: `${r?`${C.a} `:""}${s.className||""}`
					}), s.isListing ? o.a.createElement("div", {
						className: s.contentImageClassName
					}, R(r, s)) : o.a.createElement("a", {
						href: s.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: T.a.imageLink
					}, R(r, s), s.shouldBlur && !s.isVideoThumbnail && !s.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!s.isNSFW,
						isSpoiler: !!s.isSpoiler
					})), s.isListing && !s.showFull && s.height > O.j && Object(O.M)(s.height, s.width) && o.a.createElement("div", {
						className: T.a.seeMore
					}, n.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), s.isVideoThumbnail && o.a.createElement(b.a, {
						onClick: t
					}))
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/forceHttps/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/components/Media/MediaContainer/index.m.less"),
				c = s.n(d);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
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
					n = e.blurSrc ? r.a.createElement("img", {
						className: c.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					d = Object(a.C)(e.height, e.width, e.forceAspectRatio),
					l = e.provider === a.v.Spotify ? d + 3 : d;
				return r.a.createElement("div", {
					className: Object(o.a)(c.a.container, e.className, {
						[c.a.video]: e.isVideo,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : s
				}, n, !e.isGalleryTileLayout && r.a.createElement("div", {
					className: c.a.spacer,
					style: {
						paddingBottom: `${l}%`
					}
				}), r.a.createElement("div", {
					className: Object(o.a)(c.a.wrapper, {
						[c.a.mColoredBackground]: !e.blurSrc,
						[c.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends r.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return r.a.Children.only(this.props.children) || r.a.createElement("div", null)
					}
					return r.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				renderSmallMedia: "_2WxICCKdnGu7x2n4CBv6zE",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return C
			}));
			var n = s("./node_modules/lodash/throttle.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./node_modules/@reddit/adblock-detection/browser.js"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/actions/video.ts"),
				m = s("./src/reddit/constants/tracking.ts"),
				p = s("./src/reddit/models/Media/index.ts"),
				b = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/selectors/video.ts");
			const f = 100,
				x = f / 2 / 1e3;
			var _ = s("./src/lib/forceHttps/index.ts"),
				E = s("./src/lib/hooks/usePrevious.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function O(e) {
				let {
					autoplay: t,
					isListing: s,
					isNotCardView: n,
					onBufferingChange: r,
					shouldLoad: a,
					shouldPause: d,
					showCentered: c,
					showFull: l,
					source: u,
					onClick: m,
					...p
				} = e;
				const b = Object(o.useRef)(),
					h = Object(o.useRef)(),
					O = Object(E.a)(d);

				function v(e) {
					if (e) {
						const e = null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == h ? void 0 : h.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(o.useEffect)(() => {
					if (v(!d && (t || n)), h.current && r) return b.current = function(e, t) {
						let s = !1,
							n = !1;
						const r = () => s = !0,
							o = () => n = !0;
						e.addEventListener("loadeddata", r), e.addEventListener("play", o), e.addEventListener("playing", o);
						let i = !1,
							a = 0,
							d = 0;
						const c = window.setInterval(() => {
							if (d = e.currentTime, n) return n = !1, void(a = d);
							if (e.paused || e.seeking || !s) return void(a = d);
							const r = i;
							4 === e.readyState ? i = !1 : !i && d >= a && d < a + x ? i = !0 : i && d >= a && d > a + x && (i = !1), a = d, r !== i && t(i)
						}, f);
						return () => {
							clearInterval(c), e.removeEventListener("playing", o), e.removeEventListener("play", o), e.removeEventListener("loadeddata", r)
						}
					}(h.current, r), () => {
						b.current && b.current()
					}
				}, []), Object(o.useEffect)(() => {
					O !== d && v(!d && (t || n))
				}, [O, d, t, n]), i.a.createElement("video", g({}, p, {
					ref: e => h.current = e,
					muted: !0,
					onClick: m
				}), i.a.createElement("source", {
					src: Object(_.a)(u || "")
				}))
			}
			var v = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				y = s.n(v);
			const S = Object(d.c)({
				autoplayPref: b.d,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function C(e) {
				const {
					autoplayPref: t,
					consumed: s,
					loadTimes: n,
					metadata: o,
					started: d
				} = Object(a.e)(t => S(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: x,
					isNotCardView: _,
					showFull: E,
					shouldPause: g,
					width: v,
					isListing: C,
					className: j,
					showCentered: k,
					originalSource: T,
					isPromoted: P,
					renderSmallMedia: w,
					onClick: I
				} = e, N = t && !(P && Object(c.hasAcceptableAds)()), M = Object(a.d)();

				function L(e) {
					M(e ? Object(u.s)(b) : Object(u.Q)(b))
				}

				function R() {
					return M(Object(u.L)({
						postId: b
					}))
				}
				const A = r()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && M(Object(u.D)(b))
				}, 200);

				function D(e) {
					e.persist(), A(e)
				}

				function B(e) {
					var t;
					(o || U(e), d) || (t = e.timeStamp, M(Object(u.M)(b, t)))
				}

				function F(e) {
					M(Object(u.r)(b, e.timeStamp))
				}

				function U(e) {
					! function(e) {
						M(Object(u.P)({
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

				function H(e) {
					n || B(e), o || U(e), M(Object(u.O)(b))
				}

				function V() {
					const e = {};
					return k && (e.margin = "0 auto"), C || (e.maxHeight = `${p.d}px`), i.a.createElement(O, {
						autoplay: N,
						className: Object(l.a)(m.a, y.a.styledVideo, {
							[y.a.renderSmallMedia]: w
						}),
						height: w ? void 0 : x,
						isListing: C,
						isNotCardView: _,
						key: b,
						loop: !0,
						onBufferingChange: L,
						onClick: I,
						onLoadStart: F,
						onLoadedData: B,
						onLoadedMetadata: U,
						onPause: R,
						onPlaying: H,
						onTimeUpdate: D,
						shouldLoad: h,
						shouldPause: g,
						showCentered: k,
						showFull: E,
						source: f,
						style: w ? void 0 : e,
						width: w ? void 0 : v
					})
				}
				return C ? V() : i.a.createElement("div", {
					className: Object(l.a)(y.a.container, j, {
						[y.a.centered]: k
					})
				}, i.a.createElement("a", {
					href: T,
					target: "_blank",
					rel: "noopener noreferrer"
				}, V()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/NotificationButton/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				l = s("./src/reddit/components/Thumbnail/index.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/hooks/useIsClient.ts"),
				h = s("./src/reddit/models/Subreddit/index.ts"),
				f = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				x = s("./src/reddit/components/MediumPost/index.m.less"),
				_ = s.n(x);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: r,
					redditStyle: x,
					shouldShowSubscribeButton: E,
					subredditOrProfile: g,
					templatePlaceholderImage: O,
					shouldShowFollowButton: v,
					isFollowed: y,
					isCommentsPage: S,
					onFollowPostClick: C
				} = e;
				const j = Object(b.a)(),
					k = Object(i.e)(f.a);
				return j ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(a.a)(_.a.thumbnailContainer, {
						[_.a.mShowingButtonOrOverflow]: v || E
					})
				}, o.a.createElement("div", {
					className: _.a.thumbnailContainerRow
				}, v && o.a.createElement(d.a, {
					isFilled: !!y,
					onClick: C,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), E && g && o.a.createElement(c.a, {
					className: _.a.subscribeButton,
					getEventFactory: e => Object(p.m)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: g.name,
						type: Object(h.i)(g) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: s.id,
					small: !0,
					priority: k ? m.c.Secondary : void 0,
					isShredditParityEnabled: k
				})), o.a.createElement(l.b, {
					crosspost: t,
					isCommentsPage: S,
					post: s,
					redditStyle: x,
					forceShowNSFW: r,
					templatePlaceholderImage: O
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, s) {
			e.exports = {
				mainBody: "yn9v_hQEhjlRNZI0xspbA",
				postTitle: "_2wImphGg_1LcEF5MiErvRx",
				subscribeButton: "_2as7ZiIO6VQmOoNUm62veu",
				thumbnailContainer: "_17nmfaMf1Rq20sVfEmle0O",
				mShowingButtonOrOverflow: "yIt5UPS176eVebNGNRQtf",
				content: "_32pB7ODBwG3OSx1u_17g58",
				horizontalVotes: "_1Lt8O-wG_BSSv9bpz5gmwV",
				flatlistContainer: "XrvmOG7SxKlAJj71Fwi2y",
				backgroundWrapper: "_2uazWzYzM0Qndpz5tFu3EX",
				container: "_3xuFbFM3vrCqdGuKGhhhn0",
				leftPadding: "i7Fs9tR9IvW9lWlOG_yrY",
				thumbnailContainerRow: "ly1p6kYBCM7ZqoRjGeAhw",
				postOverflow: "x4YOGJe9jA6wgzmbyKZK0",
				postSource: "_2BgmOVmNwratQ_mDI9DaHR",
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5",
				realtimeAnimation: "S33xGQRDwuEu0UCuySY-8",
				realtimeFade: "_1I9NB7KmCGwAHbfEpCOf8V",
				isNightMode: "MTt6QTOKMo8xdDlYmv456",
				realtimeFadeNight: "_15WFTB2XFDPefKceV0OM7e",
				realtimeUpdated: "lJOoJ1Pj5PqAnL0NdDYyM"
			}
		},
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/ads/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				b = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				f = s("./src/reddit/components/FlairWrapper/index.tsx"),
				x = s("./src/reddit/components/Flatlist/index.tsx"),
				_ = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				E = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				O = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				v = s("./src/reddit/components/ModModeReports/index.tsx"),
				y = s("./src/reddit/components/ModModeReports/helpers.ts"),
				S = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				C = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				j = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				k = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				T = s("./src/reddit/components/PostContainer/index.tsx"),
				P = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				w = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				I = s("./src/reddit/components/PostTitle/index.tsx"),
				N = s("./src/reddit/components/PostTopLine/index.tsx"),
				M = s("./src/reddit/components/PostTopMeta/index.tsx"),
				L = s("./src/reddit/components/SourceLink/index.tsx"),
				R = s("./src/reddit/constants/postLayout.ts"),
				A = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				B = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				F = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				U = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				H = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				V = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				W = s.n(V),
				Y = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				G = s("./src/reddit/hooks/useIsOverlay.ts"),
				J = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				z = s("./src/reddit/hooks/useUserContext.ts"),
				q = s("./src/reddit/models/Media/index.ts"),
				K = s("./src/reddit/models/Post/index.ts"),
				X = s("./src/reddit/models/Vote/index.ts"),
				Q = s("./src/reddit/contexts/Post/index.tsx"),
				Z = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				$ = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ee = s("./src/reddit/selectors/i18n/index.ts"),
				te = s("./src/reddit/selectors/moderatorPermissions.ts"),
				se = s("./src/reddit/selectors/modQueue.ts"),
				ne = s("./src/reddit/selectors/postFlair.ts"),
				re = s("./src/reddit/selectors/posts.ts"),
				oe = s("./src/reddit/selectors/showPromotedCTA.ts"),
				ie = s("./src/reddit/selectors/user.ts"),
				ae = s("./src/reddit/components/MediumPost/index.m.less"),
				de = s.n(ae),
				ce = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx");

			function le() {
				return (le = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ue = () => Object(i.c)({
					isModQueueDisplayEnabled: e => Object(se.b)(e, !0),
					crosspost: re.d,
					flairStyleTemplate: A.Y,
					isActive: re.j,
					isBlurredPreview: $.b,
					isCurrentUserProfilePost: re.l,
					isRecommendationPost: (e, t) => !!t.post.recommendationContext && Object(ie.S)(e),
					showPromotedCTA: oe.a,
					moderatorPermissions: te.m,
					shouldShowNsfwListingBelow: ee.b,
					showEditFlair: ne.a,
					showMedia: A.t,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(te.i)(e, s.id)
					},
					isOptionalTextEnabled: Z.a,
					isUpdatedContent: (e, t) => {
						let {
							postId: s
						} = t;
						var n, r;
						return !!(null === (r = null === (n = e.features) || void 0 === n ? void 0 : n.realtimeModqueue) || void 0 === r ? void 0 : r.updated.includes(s))
					},
					showRealtimeUpdateAnimation: (e, t) => {
						let {
							postId: s
						} = t;
						var n;
						return (null === (n = e.features) || void 0 === n ? void 0 : n.realtimeUpdateAnimationId) === s
					},
					isNightMode: ie.fb
				}),
				me = e => {
					const {
						className: t,
						crosspost: s,
						currentUser: i,
						eventFactory: A,
						flairStyleTemplate: V,
						hideNSFWPref: Y,
						hostPostData: G,
						inSubredditOrProfile: z = !1,
						isBlurredPreview: Q,
						isCheckboxSelected: Z,
						isCommentsPage: $,
						isCurrentUserProfilePost: ee,
						isFrontpage: te,
						isModWithUserNotesPermissions: se,
						isOverlay: ne,
						isRecommendationPost: re,
						isTopicPage: oe,
						isCommentCountAnimationEnabled: ie,
						isVoteCountAnimationEnabled: ae,
						isCountAnimShadowTestEnabled: le,
						imageGalleryCurrentItem: ue,
						listingKey: me,
						moderatorPermissions: pe,
						modModeEnabled: be,
						onClickPost: he,
						post: fe,
						postId: xe,
						postIds: _e,
						redditStyle: Ee,
						shouldHideFlair: ge,
						shouldShowNsfwListingBelow: Oe,
						showBulkActionCheckbox: ve,
						showEditFlair: ye,
						showMedia: Se,
						showPromotedCTA: Ce,
						sendEvent: je,
						subredditOrProfile: ke,
						toggleCheckbox: Te,
						isAvatarPostEnabled: Pe,
						isOptionalTextEnabled: we,
						isModQueueDisplayEnabled: Ie,
						showRealtimeUpdateAnimation: Ne,
						isUpdatedContent: Me,
						isNightMode: Le
					} = e, Re = Object(o.d)(), Ae = e => e === X.a.upvoted ? Re(Object(c.ib)(xe)) : Re(Object(c.v)(xe)), De = () => Re(Object(c.eb)(xe)), Be = Ee ? void 0 : V, Fe = Object(U.a)(pe), Ue = be && Fe, He = Object(B.a)(pe), Ve = Object(F.a)(pe), We = Object(O.a)(fe), Ye = Object(y.c)(fe), Ge = !!(null == G ? void 0 : G.shouldShowLinkedPosts), Je = Oe, ze = !Object(J.a)() && Object(D.a)(fe), qe = z && !Se && !Ge && !Je || Pe, Ke = qe && !!fe.source && !s, Xe = !(te && !!i || oe) && !ee && (!z || Ge || Je) || re, Qe = (!z || Ge || Je) && !fe.isSponsored, Ze = Object(a.t)(fe, ue), {
						source: $e
					} = Ze, et = !!(Q && (null == ke ? void 0 : ke.isNSFW)), tt = Object(n.useRef)({
						renderingObjectInfo: fe
					}), st = Object(K.r)(fe);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(T.b, {
						className: Object(d.a)(de.a.container, t, W.a.largeAndMediumPostStyles, W.a.largeAndMediumActiveStyles, Object(H.a)(e), {
							[W.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"],
							[de.a.realtimeAnimation]: Ne,
							[de.a.realtimeUpdated]: Me,
							[de.a.isNightMode]: Le
						}),
						isOverlay: ne,
						style: Ie && (Ne || Me) ? Le ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(H.b)(e.flairStyleTemplate),
						post: fe,
						onClick: he,
						eventFactory: A
					}, r.a.createElement(w.a, {
						model: fe,
						handleVote: Ae,
						showBulkActionCheckbox: ve,
						isCheckboxSelected: Z,
						toggleCheckbox: Te,
						flairStyleTemplate: Be,
						redditStyle: Ee,
						isVoteCountAnimation: ae,
						isCountAnimShadowTestEnabled: le,
						postId: xe
					}), r.a.createElement(k.a, {
						className: Object(d.a)(de.a.backgroundWrapper, {
							[de.a.realtimeAnimation]: Ne,
							[de.a.realtimeUpdated]: Me,
							[de.a.isNightMode]: Le
						}),
						"data-click-id": "background",
						flairStyleTemplate: Be,
						post: fe,
						redditStyle: Ee,
						overrideBackgroundColor: Ie && (Ne || Me) ? Le ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, r.a.createElement(h.a, {
						post: fe
					}), r.a.createElement("article", {
						className: de.a.mainBody
					}, r.a.createElement("div", {
						className: de.a.content,
						"data-click-id": "body"
					}, st && r.a.createElement(j.a, {
						content: fe.recommendationContext.content,
						layout: R.g.Large,
						post: fe
					}), r.a.createElement(N.a, {
						className: de.a.postTopLine,
						hideNSFWPref: Y,
						hostPostData: G,
						iconClassName: de.a.postTopLineIcon,
						inSubredditOrProfile: z,
						isCommentsPage: $,
						isCurrentUserProfilePost: ee,
						isModWithUserNotesPermissions: se,
						isOverlay: !!ne,
						isTopicPage: !!oe,
						listingKey: me,
						post: fe,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Ke,
						showSubreddit: Qe,
						showSubredditIcon: !0,
						subredditOrProfile: ke
					}), r.a.createElement(I.c, {
						className: de.a.postTitle,
						post: fe,
						redditStyle: Ee,
						size: I.b.Large,
						titleColor: Be && Be.postTitleColor,
						isOverlay: ne
					}), $ && !ge && fe.flair && fe.flair.length > 0 && r.a.createElement(f.a, {
						className: Object(d.a)($ && de.a.leftPadding),
						disableFlair: !$,
						post: fe,
						sendEvent: je
					}), fe.source && !fe.isSponsored && !s && !et && r.a.createElement(r.a.Fragment, null, r.a.createElement(L.a, {
						className: de.a.sourceLink,
						isCommentsPage: $,
						post: fe
					}), we && fe.media && fe.media.type !== q.o.TEXT && fe.media.type !== q.o.IMAGE && fe.media.richtextContent && r.a.createElement(_.a, {
						content: fe.media.richtextContent,
						rtJsonElementProps: tt.current
					}))), !qe && ze && r.a.createElement(ce.a, {
						crosspost: s ? fe : void 0,
						hasModPostPerms: Fe,
						isCommentsPage: $,
						isOverlay: ne,
						modModeEnabled: be,
						post: s || fe,
						redditStyle: Ee,
						shouldShowSubscribeButton: Xe,
						subredditOrProfile: ke,
						templatePlaceholderImage: Be && Be.postPlaceholderImage
					})), Ce && $e && $e.url && !fe.isSurveyAd && r.a.createElement(u.a, {
						className: de.a.adLinkWrapper
					}, r.a.createElement(m.a, {
						post: fe,
						adLinkContent: Ze
					})), be && Fe && We && !Ie && r.a.createElement("div", {
						className: de.a.modModeBannerWrapper
					}, r.a.createElement(g.a, {
						thing: fe
					})), be && Fe && Ye && !Ie && r.a.createElement("div", {
						className: de.a.modModeBannerWrapper
					}, r.a.createElement(v.a, {
						onIgnoreReports: De,
						reportable: fe
					})), r.a.createElement(E.d, null), Ie && r.a.createElement(C.a, {
						post: fe
					}), r.a.createElement("div", {
						className: de.a.flatlistContainer
					}, r.a.createElement(b.a, {
						className: de.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Be,
						redditStyle: Ee,
						model: fe,
						onVoteClick: Ae
					}), !fe.isSurveyAd && (Ie ? r.a.createElement(S.a, {
						content: fe,
						listingKey: me,
						hostPostData: G
					}) : r.a.createElement(x.c, {
						currentUser: i,
						hasModFlairPerms: He,
						hasModFullPerms: Ve,
						hasModPostPerms: Fe,
						hostPostData: G,
						isCommentCountAnimation: ie,
						isCountAnimShadowTestEnabled: le,
						isOverlay: !!ne,
						listingKey: me,
						modModeEnabled: be,
						onIgnoreReports: De,
						onOpenReportsDropdown: e => Re(Object(l.h)({
							tooltipId: e
						})),
						post: fe,
						showEditFlair: ye,
						tooltipType: ne ? M.f.Lightbox : void 0,
						useFlatlistBreakpoints: Object(P.b)({
							editPost: !Ue,
							save: !Ue,
							hide: !1,
							report: !1,
							mute: !1
						})
					})))), te && r.a.createElement(p.a, {
						post: fe,
						postIds: null != _e ? _e : [],
						subredditId: null == ke ? void 0 : ke.id
					})))
				};
			t.default = Object(Q.b)(r.a.memo((function(e) {
				const t = Object(n.useMemo)(() => ue(), []),
					s = Object(o.e)(s => t(s, e), o.c),
					i = Object(Y.a)(e.post),
					a = Object(z.a)();
				return r.a.createElement(me, le({}, e, s, {
					modModeEnabled: a.modModeEnabled,
					hideNSFWPref: a.prefs.hideNSFW,
					isOverlay: Object(G.a)(),
					isAvatarPostEnabled: i
				}))
			})))
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				a = s.n(i);
			const d = e => {
				let {
					post: t
				} = e;
				var s;
				return o.a.createElement("p", {
					className: a.a.postStats
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				d = s("./src/reddit/icons/fonts/index.tsx"),
				c = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(c);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: c,
						tooltipText: u,
						className: m
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(o.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, r.a.createElement(d.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": u
				})), c && r.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/objectSelector/index.ts"),
				a = s("./src/reddit/components/RichTextJson/index.tsx"),
				d = s("./src/reddit/constants/postLayout.ts"),
				c = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				u = s.n(l);
			const m = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(c.a)().hideRecommendationContext ? null : r.a.createElement(a.b, {
					className: Object(o.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: s === d.g.Classic,
						[u.a.compactLayout]: s === d.g.Compact,
						[u.a.largeLayout]: s === d.g.Large
					}),
					content: t,
					rtJsonElementProps: m(n),
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
				r = s("./src/reddit/components/HumanDate/index.tsx"),
				o = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? d._("Voting closed {timeAgo}", [d._param("timeAgo", a.a.createElement(r.d, {
					seconds: e.poll.endsAt / n.Yb
				}))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				u = s.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(d.a)(Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: d,
					redditStyle: l,
					theme: p,
					overrideBackgroundColor: b,
					...h
				} = e;
				return r.a.createElement("div", m({
					className: Object(o.a)(u.a.backgroundWrapper, s),
					style: b || Object(a.c)(n, e),
					onClick: i,
					"data-adclicklocation": c.a.BACKGROUND
				}, h), t)
			}))
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
				return X
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				h = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = s("./src/reddit/actions/post.ts"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				E = s("./src/reddit/helpers/path/index.ts"),
				g = s("./src/reddit/hooks/useClickSourceData.ts"),
				O = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				v = s("./src/reddit/hooks/usePostContext.ts"),
				y = s("./src/reddit/hooks/useTheme.ts"),
				S = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/Flair/index.ts"),
				j = s("./src/reddit/models/Media/index.ts"),
				k = s("./src/reddit/models/Post/index.ts"),
				T = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				P = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				w = s("./src/lib/getShortenedLink.ts"),
				I = s("./src/reddit/components/FlairWrapper/index.tsx"),
				N = s("./node_modules/fbt/lib/FbtPublic.js"),
				M = s("./src/lib/prettyPrintNumber/index.ts"),
				L = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				R = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				A = s.n(R);
			const D = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var B, F = Object(a.b)(D)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(O.a)() ? null : i.a.createElement("div", {
						className: Object(u.a)(e.className, A.a.proposalMetaData)
					}, i.a.createElement("span", null, N.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [N.fbt._param("count", Object(M.a)(n)), N.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(L.a, {
						className: A.a.proposalExpiry,
						poll: t
					}))
				})),
				U = s("./src/reddit/components/SEOTitle/index.tsx"),
				H = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				V = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				Y = s("./src/telemetry/models/Outbound.ts"),
				G = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				J = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				z = s("./src/reddit/components/PostTitle/index.m.less"),
				q = s.n(z);

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
			}(B || (B = {}));
			const X = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: r,
						children: o,
						className: a,
						redditStyle: d,
						shouldBlurTitle: c
					} = e;
					const l = Object(y.a)();
					let m = "";
					switch (t) {
						case B.ExtraLarge:
							m = q.a.ExtraLarge;
							break;
						case B.Large:
							m = q.a.Large;
							break;
						case B.Medium:
							m = q.a.Medium;
							break;
						case B.Small:
							m = q.a.Small;
							break;
						case B.ExtraSmall:
							m = q.a.ExtraSmall;
							break;
						case B.Metadata:
							m = q.a.Metadata
					}
					return i.a.createElement("div", {
						className: Object(u.a)(q.a.Title, a, m, {
							[q.a.isNoWrap]: r,
							[q.a.blur]: c
						}),
						style: {
							"--posttitletextcolor": s || Object(P.a)({
								redditStyle: d,
								theme: l
							}).titleText
						}
					}, n ? i.a.createElement(U.b, {
						type: n
					}, o) : o)
				},
				Q = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: r,
						...o
					} = e;
					return i.a.createElement(d.a, K({}, o, {
						className: Object(u.a)(t, q.a.styledLink, {
							[q.a.isVisitedEnabled]: !s
						})
					}), r)
				},
				Z = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: r
					} = e;
					return i.a.createElement("div", {
						className: Object(u.a)(q.a.titleContainer, n, {
							[q.a.isNoWrap]: s,
							[q.a.isVisitedEnabled]: !t
						})
					}, r)
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
					isNsfwBlurSubreddit: V.e,
					shouldOpenPostInNewTab: W.lb
				}),
				ee = e => {
					const {
						post: t
					} = e, {
						isSponsored: s
					} = t, n = Object(a.d)(), r = Object(g.a)(), o = Object(a.e)(H.b), d = Object(a.e)(H.c), c = e => {
						(o || d) && (e.preventDefault(), n(Object(x.Z)(Object(E.b)(t.permalink), t.id))), t.isSponsored && Object(k.A)(t) && n(Object(x.y)(t, _.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(Z, {
						nowrap: e.nowrap
					}, i.a.createElement(te, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, i.a.createElement(te, e)); {
						const n = t.permalink,
							o = e.isCommentPermalink ? Object(E.b)(n) : Object(f.a)(n, void 0, r);
						return i.a.createElement(Z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s && !Object(k.A)(t) ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? i.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, i.a.createElement(te, t)) : i.a.createElement(te, t)
						})(t, e) : i.a.createElement(Q, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: o,
							onClick: c
						}, i.a.createElement(te, e)))
					}
				},
				te = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let r = e.format ? e.format(n) : n.title;
					s && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const o = e.isCommentsPage ? U.a.PostComments : U.a.PostItem,
						a = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return i.a.createElement(X, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: a,
						size: e.size,
						titleColor: e.titleColor,
						titleType: o
					}, t && i.a.createElement(I.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), r)
				},
				se = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: n
					} = e, {
						isSponsored: r
					} = n, o = e.isCommentsPage ? Y.SourceElement.PostLink : Y.SourceElement.ListingPostLink;
					if (Object(O.a)()) return null;
					if (s && n.isNSFW) return null;
					const a = !t && !e.isCrosspost && e.size !== B.Large && !n.isSponsored && (n.source || n.media && (n.media.type === j.o.GIFVIDEO || n.media.type === j.o.IMAGE || n.media.type === j.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return i.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(j.E)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source,
							sourceElement: o
						}, Object(w.a)(n), !n.isSponsored && i.a.createElement(S.a, {
							name: "external_link",
							className: q.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== B.Large && e.size !== B.ExtraLarge) return i.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source,
						sourceElement: o
					}, Object(w.a)(n), !n.isSponsored && i.a.createElement(S.a, {
						name: "external_link",
						className: q.a.outboundLinkIcon
					}));
					return null
				};
			class ne extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${q.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(P.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(P.a)(this.props).titleText,Object(P.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(r.c)(.45,Object(P.a)(this.props).bodyText,Object(P.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					const {
						className: e,
						disableFlair: t,
						flairPosition: s,
						isCommentsPage: r,
						isOverlay: o,
						poll: a,
						post: d,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = s === C.b.Left, b = Object(I.b)(d), {
						leftFlair: h,
						rightFlair: f
					} = Object(G.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: l
					}), x = !o && !r && !t, _ = x && h && h.length > 0, E = x && f && f.length > 0;
					return i.a.createElement("div", {
						className: Object(u.a)(q.a.Component, e, d.id),
						ref: this.props.innerRef,
						"data-adclicklocation": J.a.TITLE,
						onClick: m
					}, !c && _ && i.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: d,
						sendEvent: this.props.sendEvent
					}), !Object(T.b)(d) && i.a.createElement(ee, K({}, this.props, {
						leftFlair: c ? h : void 0
					})), a && i.a.createElement(F, {
						className: q.a.pollMeta,
						pollId: a.id
					}), i.a.createElement(se, this.props), E && i.a.createElement(I.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: d,
						sendEvent: this.props.sendEvent
					}), i.a.createElement("div", {
						className: q.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = i.a.memo((function(e) {
				const t = Object(p.ib)(),
					s = Object(p.x)(t),
					n = Object(v.a)(),
					r = Object(a.e)(r => $(r, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					o = Object(y.a)(),
					d = Object(m.b)();
				return n ? i.a.createElement(ne, K({
					pageLayer: t,
					isCommentPermalink: s
				}, n, r, e, {
					theme: o,
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/AwardBadges/index.tsx"),
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				u = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				h = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				x = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/controls/OutboundLink/index.tsx"),
				g = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				v = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				S = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				k = s.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideNSFWPref: j,
					hostPostData: T,
					iconClassName: P,
					inSubredditOrProfile: w,
					isCommentsPage: I,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: M,
					isModQueuePage: L,
					isModWithUserNotesPermissions: R,
					isOverlay: A,
					isTopicPage: D,
					listingKey: B,
					post: F,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: H,
					showSubreddit: V,
					showSubredditIcon: W,
					subredditOrProfile: Y,
					isFollowed: G,
					shouldShowFollowButton: J,
					onFollowPostClick: z,
					onSubscribed: q
				} = e;
				const K = D,
					X = Y && Object(y.i)(Y),
					Q = Object(i.e)(e => {
						if (!X) return !0;
						const t = Object(C.Ib)(e, F.author || "");
						return !t || t.enableFollowers
					}),
					Z = Object(i.e)(S.a);
				return o.a.createElement("div", {
					className: Object(a.a)(k.a.container, t)
				}, V && Y && o.a.createElement("div", {
					className: k.a.subredditIconWrapper
				}, o.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: Y.url
				}, W && o.a.createElement(b.b, {
					className: Object(a.a)(k.a.subredditIcon, P),
					shouldHideNsfwIcon: j,
					subredditOrProfile: Y
				}))), o.a.createElement("div", {
					className: k.a.everythingElseWrapper
				}, V && o.a.createElement(l.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), o.a.createElement(p.g, {
					className: k.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: R,
					tooltipType: A ? p.f.Lightbox : void 0,
					post: F,
					showSub: V,
					subredditOrProfile: Y
				}), o.a.createElement(m.a, {
					className: k.a.postBadges,
					displayText: Y ? Y.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: N,
					post: F,
					tooltipType: A ? p.f.Lightbox : void 0
				}), !K && o.a.createElement(d.a, {
					isPostDetail: I,
					thing: F,
					tooltipType: A ? p.f.Lightbox : void 0
				}), R && o.a.createElement(c.a, {
					postOrComment: F,
					className: k.a.addModNote
				})), Y && Q && V && U && !M && o.a.createElement(f.a, {
					className: k.a.SubscribeButton,
					getEventFactory: e => (q && !e && q(), Object(g.m)(F.id, e ? "unsubscribe" : "subscribe", "post", B, T)),
					identifier: {
						name: Y.name,
						type: X ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: F.id,
					size: _.d.XS,
					priority: Z ? _.c.Secondary : void 0,
					isShredditParityEnabled: Z
				}), H && o.a.createElement(E.b, {
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(v.E)(F),
					source: F.source
				}, o.a.createElement(O.a, {
					className: k.a.outboundLinkIcon
				})), J && Q && o.a.createElement(u.a, {
					isFilled: !!G,
					onClick: z,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, s) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/Giphy.m.less": function(e, t, s) {
			e.exports = {
				anchor: "voEElhHVrm-yKZcIbBmik",
				giphy: "_1gg1MfJZaNkaPmqHpGQHni",
				attributionRow: "U76N5pdhVpwLUkKv0jpDZ",
				giphyLogo: "lhXj5Lw1-62CSn58uodEt",
				attributionText: "WZIEUuvYX30GAtLJofhDk"
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/higherOrderComponents/addOverlayEvents.tsx"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = s("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				_ = m.a.span("SpoilerWrapper", u.a),
				E = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: s,
						...n
					} = e;
					return o.a.createElement(_, p({}, n, {
						className: Object(i.a)(t, {
							[u.a.isOpen]: s
						})
					}))
				}, "SpoilerWrapper", u.a),
				g = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class O extends o.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: s
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == s || s(e))
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
					return o.a.createElement(E, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, o.a.createElement(f, null, o.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), o.a.createElement(g, {
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
			t.a = O
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
				return x
			})), s.d(t, "i", (function() {
				return _
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "u", (function() {
				return O
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "m", (function() {
				return S
			})), s.d(t, "n", (function() {
				return C
			})), s.d(t, "t", (function() {
				return j
			})), s.d(t, "p", (function() {
				return k
			})), s.d(t, "o", (function() {
				return T
			})), s.d(t, "q", (function() {
				return P
			})), s.d(t, "s", (function() {
				return w
			})), s.d(t, "r", (function() {
				return I
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "w", (function() {
				return M
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/controls/OutboundLink/index.tsx"),
				i = s("./src/reddit/components/RichTextJson/elements.m.less"),
				a = s.n(i),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [d.a.div("H1", a.a), d.a.div("H2", a.a), d.a.div("H3", a.a), d.a.div("H4", a.a), d.a.div("H5", a.a), d.a.div("H6", a.a)],
				u = d.a.hr("Hr", a.a),
				m = d.a.code("M", a.a),
				p = d.a.pre("Pre", a.a),
				b = d.a.blockquote("Blockquote", a.a),
				h = d.a.p("P", a.a),
				f = d.a.li("Li", a.a),
				x = d.a.ul("Ul", a.a),
				_ = d.a.ol("Ol", a.a),
				E = d.a.strong("B", a.a),
				g = d.a.em("I", a.a),
				O = d.a.span("U", a.a),
				v = e => r.a.createElement("del", e),
				y = d.a.sub("Sub", a.a),
				S = d.a.sup("Sup", a.a),
				C = d.a.table("Table", a.a),
				j = d.a.tr("Tr", a.a),
				k = d.a.td("Tdl", a.a),
				T = d.a.td("Tdc", a.a),
				P = d.a.td("Tdr", a.a),
				w = d.a.th("Thl", a.a),
				I = d.a.th("Thc", a.a),
				N = (d.a.th("Thr", a.a), d.a.wrapped(e => r.a.createElement(o.b, e), "A", a.a)),
				M = d.a.wrapped(c.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return O
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "b", (function() {
				return S
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/lodash/findLastIndex.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/sentry/index.ts"),
				u = s("./src/reddit/components/Media/BlurredContent.tsx"),
				m = s("./src/reddit/constants/elementClassNames.ts"),
				p = s("./src/reddit/models/RichTextJson/index.ts"),
				b = s("./src/reddit/components/RichTextJson/media.tsx"),
				h = s("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = s("./src/reddit/components/RichTextJson/index.m.less"),
				x = s.n(f);
			const _ = s("./src/lib/lessComponent.tsx").a.div("Container", x.a),
				E = Object(c.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: s,
						...n
					} = e;
					return a.a.createElement(_, n)
				}),
				g = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.v || !!e.c && !e.c.every(e => e.e === p.B && !e.t),
				O = e => o()(e, g),
				v = e => null == e ? void 0 : e.findIndex(g),
				y = e => {
					const {
						altText: t,
						className: s,
						content: n,
						isListing: r,
						isNSFW: o,
						isNsfwBlockingModalEligible: i,
						isSpoiler: c,
						onClickRevealBlurred: l,
						postId: f,
						renderMediaAsLinks: g,
						rtJsonElementProps: y,
						useExplicitTextColor: S,
						shouldBlur: C,
						onClickRevealSpoilerText: j,
						mediaProps: k
					} = e, T = n.document, P = [], w = e.mediaMetadata || null, I = v(T), N = O(T);
					if (C && !r && !i) return a.a.createElement(_, {
						className: Object(d.a)(m.j, s)
					}, a.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!o, !!c))));
					if (-1 !== I)
						for (let a = I; a <= N; a++) {
							const e = T[a];
							switch (e.e) {
								case p.k:
									P.push(h.c(e, y, a));
									break;
								case p.l:
									P.push(h.d(a));
									break;
								case p.b:
									P.push(h.a(e, w, y, a));
									break;
								case p.c:
									P.push(h.b(e, a));
									break;
								case p.p:
									P.push(h.f(e, w, y, a, j));
									break;
								case p.A:
									P.push(h.h(e, w, y, a, j));
									break;
								case p.v:
									P.push(h.g(e, w, y, a, j, k));
									break;
								case p.h:
									P.push(Object(b.a)(e, a));
									break;
								case p.m:
								case p.a:
								case p.E:
									P.push(...Object(b.b)({
										node: e,
										key: a,
										rtJsonElementProps: y,
										mediaMetadata: w,
										renderMediaAsLinks: g,
										postId: f,
										altText: t,
										mediaProps: k
									}))
							}
						}
					return S ? a.a.createElement(_, {
						className: Object(d.a)(m.j, s)
					}, P) : a.a.createElement(E, {
						className: Object(d.a)(m.j, s),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, P)
				};
			class S extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => n.fbt._("Something went wrong while trying to render this", null, {
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
						return y(t)
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
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return B
			})), s.d(t, "b", (function() {
				return U
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/config.ts"),
				d = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				c = s("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = s("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = s("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = s("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/helpers/richTextJson/index.ts"),
				h = s("./src/reddit/icons/fonts/index.tsx"),
				f = s("./src/reddit/models/Media/index.ts"),
				x = s("./src/reddit/models/RichTextJson/index.ts"),
				_ = s("./src/reddit/components/RichTextJson/elements.tsx"),
				E = s("./src/reddit/endpoints/giphy/index.ts"),
				g = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = s("./src/reddit/hooks/useMounted.ts");
			var v = e => o.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, o.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), o.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), o.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), o.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), o.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), o.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), o.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				y = s("./src/reddit/components/RichTextJson/Giphy.m.less"),
				S = s.n(y);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var j = e => {
					let {
						id: t,
						mp4Url: s,
						className: n,
						externalLink: i,
						onClick: a
					} = e;
					const d = i || Object(b.g)(t),
						c = Object(r.useRef)(null),
						[l, u] = Object(r.useState)(!1),
						[m, p] = Object(r.useState)(null),
						h = Object(O.b)(),
						f = Object(r.useCallback)((async function(e) {
							e.forEach(e => {
								const {
									isIntersecting: s
								} = e;
								!l && s && (u(!0), async function(e, t) {
									const s = Object(b.f)(e);
									t((await Object(E.a)(s)).data.user)
								}(t, e => {
									h.current && p(e)
								}))
							})
						}), [u, t, l, h]);
					Object(g.a)(c, f);
					const x = (null == m ? void 0 : m.display_name) || (null == m ? void 0 : m.username);
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement(_.a, {
						href: d,
						target: "_blank",
						className: S.a.anchor
					}, s ? o.a.createElement("video", {
						className: S.a.giphy,
						loop: !0,
						autoPlay: !0,
						muted: !0,
						onClick: a,
						ref: c
					}, o.a.createElement("source", {
						src: s
					})) : d), o.a.createElement("div", {
						className: S.a.attributionRow
					}, o.a.createElement(v, {
						className: S.a.giphyLogo
					}), o.a.createElement("span", {
						className: S.a.attributionText
					}, (null == m ? void 0 : m.profile_url) && x && o.a.createElement(o.a.Fragment, null, C._("by {=[name]}", [C._param("=[name]", o.a.createElement(_.a, {
						href: m.profile_url,
						target: "_blank"
					}, C._("{name}", [C._param("name", x)], {
						hk: "1jl6v3"
					})))], {
						hk: "3hNtmj"
					})), C._("via GIPHY", null, {
						hk: "4BJhbY"
					}))))
				},
				k = s("./src/reddit/components/RichTextJson/media.m.less"),
				T = s.n(k),
				P = s("./src/lib/lessComponent.tsx"),
				w = s("./src/reddit/helpers/media/index.ts");

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const N = /\/(\w+)\/asset\/(\w+)\//,
				M = P.a.wrapped(_.a, "A", T.a),
				L = P.a.wrapped(l.a, "ImageBox", T.a),
				R = P.a.wrapped(e => o.a.createElement("p", e), "Caption", T.a),
				A = P.a.div("Placeholder", T.a),
				D = P.a.wrapped(e => {
					let {
						className: t,
						e: s,
						renderSmallMedia: a,
						onReload: d,
						...c
					} = e;
					const l = s === x.E ? n.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : n.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(r.useState)(!1);
					return Object(r.useEffect)(() => {
						d && setTimeout(() => {
							m(!0)
						}, 1500)
					}), o.a.createElement(A, I({
						className: Object(i.a)(t, {
							[T.a.renderSmallMedia]: a,
							[T.a.reload]: !!d
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, c), !!d && u && o.a.createElement(p.t, {
						priority: p.c.Plain,
						className: T.a.ModalTopicsErrorButton,
						Icon: Object(h.b)("refresh"),
						text: n.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: d
					}))
				}, "Placeholder", T.a),
				B = (e, t) => {
					let {
						c: s,
						x: n,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: T.a.MediaWrapper
					}, o.a.createElement(u.a, {
						height: r,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: n
					}, o.a.createElement(c.a, {
						isListing: !1,
						source: s,
						height: r,
						width: n,
						showCentered: !0,
						showFull: !0
					})))
				},
				F = (e, t, s) => {
					const n = e.c;
					let r = "";
					return s && (s.e === x.s ? r = s.s.u : s.e === x.r ? r = s.s.gif : s.e === x.t && (r = (e => {
						const t = N.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? o.a.createElement(M, {
						href: r,
						key: t,
						title: n
					}, n || r) : null
				},
				U = e => {
					let {
						node: t,
						key: s,
						rtJsonElementProps: n,
						mediaMetadata: r,
						renderMediaAsLinks: a,
						postId: c,
						altText: l,
						mediaProps: p
					} = e;
					const h = x.F(r, t.id);
					if (a) return [F(t, s, h)];
					const _ = [];
					return !h || h.e === x.s && null === h.s.x && null === h.s.y ? _.push(((e, t, s, n) => o.a.createElement(D, {
						e,
						key: t,
						renderSmallMedia: s,
						onReload: n
					}))(t.e, s, null == p ? void 0 : p.renderSmallMedia, null == p ? void 0 : p.onReload)) : h.e === x.s ? _.push(((e, t, s, n, r) => {
						let {
							id: a,
							s: d,
							p: c
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m,
							onClick: p
						} = r || {};
						let b = d;
						return m && (b = Object(w.i)(240, 20, d, c)), o.a.createElement("div", {
							className: Object(i.a)(T.a.MediaWrapper, {
								[T.a.mHasCaption]: s,
								[T.a.hasSmallMedia]: m
							})
						}, o.a.createElement(u.a, {
							height: b.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: b.x
						}, o.a.createElement(L, {
							altText: n,
							originalSource: d.u,
							postId: a,
							source: b.u,
							maxHeight: f.w,
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
					})(h, s, !!t.c, l, p)) : h.e === x.r ? _.push(((e, t, s, n, r) => {
						let {
							id: a,
							ext: d,
							s: c
						} = e;
						return Object(b.h)(a) ? o.a.createElement(j, {
							key: t,
							id: a,
							mp4Url: c.mp4,
							className: T.a.CommentGiphyWrapper,
							externalLink: d,
							onClick: null == r ? void 0 : r.onClick
						}) : o.a.createElement("div", {
							className: Object(i.a)(T.a.MediaWrapper, {
								[T.a.mHasCaption]: s,
								[T.a.hasSmallMedia]: null == r ? void 0 : r.renderSmallMedia
							})
						}, o.a.createElement(u.a, {
							height: c.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c.x
						}, o.a.createElement(m.a, {
							height: c.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: c.mp4,
							width: c.x,
							postId: a,
							source: c.mp4,
							shouldPause: !1,
							showCentered: !(null == r ? void 0 : r.renderSmallMedia),
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: null == r ? void 0 : r.renderSmallMedia,
							onClick: null == r ? void 0 : r.onClick
						})))
					})(h, s, !!t.c, 0, p)) : h.e === x.t && _.push(((e, t, s, n) => {
						let {
							hlsUrl: r,
							dashUrl: a,
							x: c,
							y: l,
							isGif: m
						} = e;
						return o.a.createElement("div", {
							className: Object(i.a)(T.a.MediaWrapper, {
								[T.a.mHasCaption]: s
							})
						}, o.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: c
						}, o.a.createElement(d.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: r,
							mpegDashSource: a,
							postId: n,
							isGif: m
						})))
					})(h, s, !!t.c, c)), t.c && _.push(((e, t) => o.a.createElement(R, {
						key: t
					}, e))(t.c, `caption${s}`)), _
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return I
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "a", (function() {
				return M
			})), s.d(t, "b", (function() {
				return L
			})), s.d(t, "f", (function() {
				return R
			})), s.d(t, "h", (function() {
				return D
			})), s.d(t, "g", (function() {
				return B
			})), s.d(t, "i", (function() {
				return F
			})), s.d(t, "e", (function() {
				return U
			}));
			var n = s("./src/lib/unicodeUtils/index.ts"),
				r = s("./node_modules/lodash/reduce.js"),
				o = s.n(r),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				d = s("./src/reddit/components/RichTextJson/elements.tsx"),
				c = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/models/Product/index.ts"),
				m = s("./src/reddit/models/RichTextJson/index.ts"),
				p = s("./src/reddit/selectors/telemetry.ts"),
				b = s("./src/higherOrderComponents/makeAsync.tsx");
			var h = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => s.e("RichTextJsonEmoteTooltip").then(s.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = s("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = s.n(f);
			const _ = 1e3,
				E = 1e3;
			var g;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(g || (g = {}));
			class O extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = g.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = g.Inside, setTimeout(() => {
							this.mouseLocation === g.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, _)
					}, this.onMouseOut = () => {
						this.mouseLocation = g.Outside, setTimeout(() => {
							this.mouseLocation !== g.Inside && this.setState({
								tooltipOpen: !1
							})
						}, E)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const s = p.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...s,
								actionInfo: {
									...s.actionInfo,
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
					let s, n, r;
					t.e === m.s ? (s = t.s.x, n = t.s.y, r = t.s.u) : t.e === m.r && (s = t.s.x, n = t.s.y, r = t.s.gif);
					const o = this.state.tooltipOpen ? Object(c.a)() : void 0;
					return r ? a.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: o,
						src: r,
						width: s,
						height: n,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(h, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${o}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var v = Object(l.c)(O),
				y = s("./src/reddit/components/RichTextJson/media.tsx"),
				S = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				C = s("./src/reddit/components/SubredditMention/index.tsx"),
				j = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				k = s("./src/reddit/helpers/isComment.ts"),
				T = s("./src/reddit/helpers/isPost.ts"),
				P = s("./src/reddit/helpers/richTextJson/index.ts"),
				w = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const I = (e, t, s) => {
					const n = e.c || [],
						r = e.l,
						o = [],
						i = n.length;
					for (let a = 0; a < i; a++) {
						const e = n[a];
						o.push(e.e === m.x ? e.t : U(e, t, a))
					}
					const c = d.x[r - 1];
					return a.a.createElement(c, {
						key: s
					}, o)
				},
				N = e => a.a.createElement(d.e, {
					key: e
				}),
				M = (e, t, s, n, r) => {
					const o = e.c;
					if (!o) return;
					const i = o.length,
						c = [];
					for (let a = 0; a < i; a++) c.push(A(o[a], t, s, a, r));
					return a.a.createElement(d.c, {
						key: n
					}, c)
				},
				L = (e, t) => {
					const s = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				R = (e, t, s, n, r) => {
					const o = e.c,
						i = [],
						c = o.length;
					for (let u = 0; u < c; u++) {
						const e = o[u].c;
						e && e.length && i.push(a.a.createElement(d.g, {
							key: u
						}, e.map((e, n) => A(e, t, s, n, r))))
					}
					const l = e.o ? d.i : d.v;
					return a.a.createElement(l, {
						key: n
					}, i)
				},
				A = (e, t, s, n, r) => {
					switch (e.e) {
						case m.b:
							return M(e, t, s, n, r);
						case m.c:
							return L(e, n);
						case m.k:
							return I(e, s, n);
						case m.l:
							return N(n);
						case m.p:
							return R(e, t, s, n, r);
						case m.v:
							return B(e, t, s, n, r);
						case m.A:
							return D(e, t, s, n, r)
					}
				},
				D = (e, t, s, n, r) => {
					const o = e.c,
						i = e.h,
						c = o.length,
						l = i.length,
						u = [],
						m = [],
						p = [];
					for (let d = 0; d < l; d++) {
						const e = i[d],
							{
								H: n,
								D: o
							} = Y(e.a),
							{
								c = []
							} = e;
						u.push(a.a.createElement(n, {
							key: d
						}, F(c, t, s, r))), p[d] = o
					}
					for (let b = 0; b < c; b++) {
						const e = o[b],
							n = e.length,
							i = [];
						for (let o = 0; o < n; o++) {
							const n = p[o],
								{
									c: d = []
								} = e[o];
							i.push(a.a.createElement(n, {
								key: o
							}, F(d, t, s, r)))
						}
						m.push(a.a.createElement(d.t, {
							key: b
						}, i))
					}
					return a.a.createElement(d.n, {
						key: n
					}, a.a.createElement("thead", null, a.a.createElement(d.t, null, u)), a.a.createElement("tbody", null, m))
				},
				B = (e, t, s, n, r, o) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(d.j, {
						key: e
					}, a.a.createElement("br", null)))(n);
					const i = e.c[0];
					return i.e !== m.m && i.e !== m.a || !Object(P.h)(i.id) ? a.a.createElement(d.j, {
						key: n
					}, F(e.c, t, s, r)) : Object(y.b)({
						node: i,
						key: n,
						rtJsonElementProps: s,
						mediaMetadata: t,
						mediaProps: o
					})
				},
				F = (e, t, s, n) => {
					const r = [],
						o = e.length;
					for (let i = 0; i < o; i++) {
						const o = e[i];
						if (o.e === m.B) r.push(H(o, i));
						else if (o.e === m.y) r.push(a.a.createElement(S.a, {
							key: i,
							onClickReveal: n
						}, F(o.c, t, s, n)));
						else if (o.e === m.n) r.push(a.a.createElement("br", {
							key: i
						}));
						else if (o.e === m.m || o.e === m.a) {
							if (o.id.startsWith("emote|")) {
								const e = m.F(t, o.id);
								e && r.push(a.a.createElement(v, {
									key: i,
									node: o,
									media: e
								}))
							}
						} else r.push(U(o, s, i))
					}
					return r
				},
				U = (e, t, s) => {
					switch (e.e) {
						case m.o:
							const n = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(j.b)(e.u)) return a.a.createElement(d.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let r, o;
							const i = Object(w.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(T.b)(c) && (r = c.postId), c && Object(k.b)(c) && (o = c.id, r = c.postId), a.a.createElement(d.a, {
								href: e.u,
								key: s,
								title: e.a,
								sourceElement: i,
								postId: r,
								commentId: o
							}, n);
						case m.z:
							return a.a.createElement(C.b, {
								key: s,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.C:
						case m.D:
							return a.a.createElement(d.a, {
								href: `/u/${e.t}/`,
								key: s
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.w:
							return a.a.createElement(d.a, {
								href: e.t,
								key: s
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: s,
						t: r
					} = e, o = [];
					if (!s) return W(0, r, t);
					const i = Object(n.a)(r);
					let a = 0,
						d = 0;
					const c = s.length;
					for (; a < c; a++) {
						const [e, t, n] = s[a], c = t + n, l = i[t], u = i[c] - l;
						l > d && o.push(W(0, r.substr(d, l - d), `between${a}`)), o.push(W(e, r.substr(l, u), a)), d = l + u
					}
					return d < r.length && o.push(W(0, r.substr(d), `remaining${a}`)), o
				},
				V = {
					[m.j.monospace]: d.h,
					[m.j.bold]: d.b,
					[m.j.italic]: d.f,
					[m.j.underline]: d.u,
					[m.j.strikethrough]: d.d,
					[m.j.subscript]: d.l,
					[m.j.superscript]: d.m
				},
				W = (e, t, s) => {
					let n = t;
					return n = o()(V, (t, n, r) => e & parseInt(r, 10) ? a.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				Y = e => {
					switch (e) {
						case m.f:
							return {
								H: d.r, D: d.q
							};
						case m.d:
							return {
								H: d.r, D: d.o
							};
						case m.e:
						default:
							return {
								H: d.r, D: d.p
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SubredditIcon/index.tsx"),
				a = s("./src/reddit/controls/OutboundLink/index.tsx"),
				d = s("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				c = s.n(d);
			const l = o.a.wrapped(i.b, "SubredditIcon", c.a),
				u = o.a.wrapped(e => r.a.createElement(a.b, e), "S", c.a)
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
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/components/RichTextJson/elements.tsx"),
				d = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = s("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = s("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = s.n(u);
			var p = Object(d.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(c.a)(() => s.e("SubredditMentionWithIcon").then(s.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return r.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, r.a.createElement(l.a, {
							href: `/r/${t}/`
						}, r.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, r.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/experiments.ts"),
				f = s("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = s("./src/reddit/selectors/subredditMention.ts");
			class _ extends r.a.PureComponent {
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
					return r.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const E = Object(b.c)(_),
				g = Object(i.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				O = Object(o.b)(g),
				v = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: s,
						subredditName: n,
						userVariant: o,
						rtJsonElementProps: i
					} = e;
					if (!s || !t) return r.a.createElement(E, {
						subredditName: n,
						rtJsonElementProps: i
					});
					switch (o) {
						case h.Pf.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: i
							});
						case h.Pf.SmIconHc:
							return r.a.createElement(p, {
								subredditName: n,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return r.a.createElement(E, {
								subredditName: n,
								rtJsonElementProps: i
							})
					}
				};
			t.b = O(v)
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/thumbnails.ts"),
				r = s("./src/reddit/models/Media/index.ts");

			function o(e, t) {
				return !(e.removedByCategory || !e.thumbnail || !e.thumbnail.url || e.thumbnail.url === n.a.SELF || e.thumbnail.url === n.a.NSFW || e.media && Object(r.G)(e.media) || t)
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

			function r(e) {
				return [...e].sort(n)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: r
					} of t) s.push(Object(n.f)(r));
				return s
			}
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/helpers/isComment.ts"),
				o = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				a = e => !0 === e ? i.a.upvoted : !1 === e ? i.a.downvoted : i.a.notVoted,
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
					parentId: Object(r.a)(e.parent_id) ? e.parent_id : null,
					permalink: e.permalink,
					postAuthor: e.link_author || null,
					postId: e.link_id,
					postTitle: e.link_title || null,
					sendReplies: e.send_replies,
					score: e.score,
					treatmentTags: e.treatment_tags,
					userReports: e.user_reports,
					userReportsDismissed: e.user_reports_dismissed,
					voteState: a(e.likes)
				};
				return e.all_awardings && (t.allAwardings = Object(o.a)(e.all_awardings)), e.awarders && (t.awarders = e.awarders), e.associated_award && (t.associatedAwardId = e.associated_award.id, t.associatedAward = Object(o.b)(e.associated_award)), t
			};
			const c = e => "string" == typeof e ? JSON.parse(e) : e,
				l = e => e.author !== n.H ? null : e.body === n.I ? d.c.User : e.body === n.Rb ? d.c.Moderator : null
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/constants/index.ts");
			const r = e => {
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
				o = e => {
					const t = e.body;
					return {
						type: r(t.json.errors),
						fields: t.json.errors.map(e => ({
							field: e[2] || "",
							msg: e[1]
						}))
					}
				},
				i = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "d", (function() {
				return x
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				d = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				c = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(c);
			const u = {},
				m = e => Object(a.g)(Object(d.a)(e).post, Object(d.a)(e).backgroundImage, Object(d.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(d.a)(t).post, e.postBackgroundImage, Object(d.a)(t).backgroundImagePosition)
						};
						if (e.postBackgroundColor) return {
							background: Object(a.g)(e.postBackgroundColor, null, null)
						}
					}
					return {
						background: m(t)
					}
				},
				b = e => Object(n.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(o.a)(Object(r.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/parseUrl.ts"),
				o = s("./src/reddit/selectors/media.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, s) => ({
					gallery: i.s(e, t, s),
					post: i.K(e, t),
					...i.o(e)
				}),
				d = (e, t) => s => ({
					...a(s, e, t),
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.C(s, e)
				}),
				c = (e, t) => s => {
					const d = Object(r.a)(t),
						c = Object(o.d)(s, e) + 1;
					return {
						...a(s, e, c),
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.C(s, e),
							outboundUrl: t,
							outboundDomain: d ? d.hostname : void 0
						}
					}
				},
				l = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, s) => r => ({
					...a(r, e, s),
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/contexts/PageLayer/index.tsx"),
				r = s("./src/reddit/helpers/isComment.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: s
				} = e;
				if (t && (Object(r.b)(t) || Object(o.b)(t))) return Object(r.b)(t) ? i.SourceElement.Comment : Object(n.y)(s) ? i.SourceElement.PostDetail : Object(n.J)(s) ? i.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "y", (function() {
				return d
			})), s.d(t, "m", (function() {
				return c
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
				return h
			})), s.d(t, "k", (function() {
				return f
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "n", (function() {
				return E
			})), s.d(t, "h", (function() {
				return g
			})), s.d(t, "g", (function() {
				return v
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "t", (function() {
				return S
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "x", (function() {
				return k
			})), s.d(t, "u", (function() {
				return T
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "s", (function() {
				return w
			})), s.d(t, "v", (function() {
				return I
			})), s.d(t, "w", (function() {
				return N
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...r.o(e),
					screen: r.cb(e),
					subreddit: r.lb(e),
					userSubreddit: r.ub(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(n.q)(e)
				}),
				a = () => e => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post",
					...o(e)
				}),
				d = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...o(e)
				}),
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_date",
					...o(e)
				}),
				l = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_time",
					...o(e)
				}),
				u = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "submit_timezone",
					...o(e)
				}),
				m = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "apply",
					...o(e)
				}),
				p = () => e => ({
					source: "scheduled_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				b = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				f = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...o(e)
				}),
				x = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...o(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...o(e)
				}),
				g = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...o(t),
					actionInfo: r.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				O = {
					[n.d.Hourly]: "hourly_frequency",
					[n.d.Daily]: "daily_frequency",
					[n.d.Weekly]: "weekly_frequency",
					[n.d.Monthly]: "monthly_frequency",
					[n.b]: "custom_frequency"
				},
				v = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : O[e],
					...o(t)
				}),
				y = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				S = (e, t, s) => i => ({
					source: "post",
					action: "click",
					noun: Object(n.m)(e),
					...o(i),
					actionInfo: r.d(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				C = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...o(e)
				}),
				j = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(e)
				}),
				k = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: i(t)
				}),
				P = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: i(t)
				}),
				I = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				N = () => (e, t) => {
					const s = o(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...s,
						actionInfo: {
							...s.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "c", (function() {
				return g
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "e", (function() {
				return v
			}));
			var n, r, o = s("./src/reddit/constants/tracking.ts"),
				i = s("./src/reddit/helpers/isComment.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				c = s("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = s("./src/reddit/selectors/subreddit.ts"),
				u = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(n || (n = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(r || (r = {}));
			const m = e => ({
					...u.o(e),
					source: r.LINK,
					action: o.c.CLICK,
					noun: n.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: r,
					screen: u.cb(e),
					discoveryUnit: {
						id: "xd_100",
						name: n.SUBREDDIT_HOVERCARD,
						type: c.e.Listing,
						title: n.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: s,
						subredditName: n
					} = t;
					if (!s || !Object(a.b)(s) && !Object(i.b)(s)) return {
						outbound: void 0
					};
					const r = Object(a.b)(s) ? "postId" : "commentId",
						o = {
							url: `/r/${n}/`,
							sourceElement: Object(d.a)(t),
							subredditName: n,
							[r]: s.id
						},
						c = Object(l.C)(e, {
							subredditName: n
						});
					return c ? {
						outbound: {
							...o,
							url: c.url,
							subredditId: c.id
						}
					} : {
						outbound: {
							...o
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: s
					} = t;
					if (!s || !Object(a.b)(s) && !Object(i.b)(s)) return {};
					const n = Object(a.b)(s) ? s.belongsTo.id : s.subredditId;
					return {
						post: u.K(e, s.id),
						subreddit: u.mb(e, n),
						...b(e, t)
					}
				},
				f = e => t => ({
					...m(t),
					...h(t, e)
				}),
				x = e => t => ({
					...p(t),
					source: "global",
					action: o.c.VIEW,
					noun: n.SUBREDDIT_HOVERCARD,
					subreddit: u.nb(t, e),
					screen: u.cb(t)
				}),
				_ = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.VIEW,
					noun: n.ITEM_POST,
					post: u.K(s, t),
					subreddit: u.nb(s, e),
					screen: u.cb(s)
				}),
				E = (e, t) => s => ({
					...p(s),
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.ITEM_POST,
					post: u.K(s, t),
					subreddit: u.nb(s, e),
					screen: u.cb(s)
				}),
				g = e => t => ({
					...p(t),
					subreddit: u.mb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT
				}),
				O = e => t => ({
					...p(t),
					subreddit: u.mb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				v = e => t => ({
					...p(t),
					subreddit: u.mb(t, e) || null,
					source: r.DISCOVERY_UNIT,
					action: o.c.CLICK,
					noun: n.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/selectors/removedPosts.ts");
			const o = () => Object(n.e)(e => Object(r.d)(e))
		},
		"./src/reddit/hooks/useMounted.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function r() {
				const [e, t] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => t(!0), []), e
			}

			function o() {
				const e = Object(n.useRef)(!0);
				return Object(n.useEffect)(() => () => {
					e.current = !1
				}, []), e
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js"),
				r = s("./src/lib/CSSVariableProvider/index.tsx");

			function o() {
				return Object(n.useContext)(r.b)
			}
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				c = s.n(d);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: Object(o.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || i.a.gold
				}
			}), "CoinIcon", c.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				transform: "translate(6.029200, 6.044700) scale(1, -1) translate(-6.029200, -6.044700)",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			}));
			var n, r, o = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(r || (r = {}));
			const i = {
					[n.Loyalty]: o.a.First,
					[n.Achievement]: o.a.Second,
					[n.Cosmetic]: void 0
				},
				a = e => e === o.a.First ? n.Loyalty : e === o.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "s", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "o", (function() {
				return u
			})), s.d(t, "p", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "r", (function() {
				return x
			})), s.d(t, "l", (function() {
				return _
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "i", (function() {
				return g
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "n", (function() {
				return y
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "q", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				r = s("./src/reddit/models/GqlTopLevelField.ts"),
				o = s("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var a, d, c;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(a || (a = {})),
			function(e) {
				e.RTJSON = "RTJSON", e.TEXT = "TEXT"
			}(d || (d = {})),
			function(e) {
				e.CREATED = "CREATED", e.PROCESSING = "PROCESSING", e.FAILED = "FAILED", e.SUCCESS = "SUCCESS"
			}(c || (c = {}));
			const l = e => {
					return new Set(["links", "text", "polls"]).has(e)
				},
				u = e => e.__typename === o.c.AvailableRedditor,
				m = e => e.__typename === r.a.Subreddit;
			var p, b, h, f;
			! function(e) {
				e.standalonePosts = "standalonePosts", e.recurringPosts = "recurringPosts"
			}(p || (p = {})),
			function(e) {
				e.MONDAY = "MONDAY", e.TUESDAY = "TUESDAY", e.WEDNESDAY = "WEDNESDAY", e.THURSDAY = "THURSDAY", e.FRIDAY = "FRIDAY", e.SATURDAY = "SATURDAY", e.SUNDAY = "SUNDAY"
			}(b || (b = {})),
			function(e) {
				e[e.MONDAY = 0] = "MONDAY", e[e.TUESDAY = 1] = "TUESDAY", e[e.WEDNESDAY = 2] = "WEDNESDAY", e[e.THURSDAY = 3] = "THURSDAY", e[e.FRIDAY = 4] = "FRIDAY", e[e.SATURDAY = 5] = "SATURDAY", e[e.SUNDAY = 6] = "SUNDAY"
			}(h || (h = {})),
			function(e) {
				e[e.SUNDAY = 0] = "SUNDAY", e[e.MONDAY = 1] = "MONDAY", e[e.TUESDAY = 2] = "TUESDAY", e[e.WEDNESDAY = 3] = "WEDNESDAY", e[e.THURSDAY = 4] = "THURSDAY", e[e.FRIDAY = 5] = "FRIDAY", e[e.SATURDAY = 6] = "SATURDAY"
			}(f || (f = {}));
			const x = e => b[f[e]],
				_ = e => f[b[e]],
				E = e => h[b[e]],
				g = e => b[h[e]],
				O = e => f[h[e]];
			var v;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(v || (v = {}));
			const y = e => {
					switch (e) {
						case v.Hourly:
						case v.Daily:
						case v.Weekly:
						case v.Monthly:
							return !0
					}
					return !1
				},
				S = "custom",
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
				j = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(n || (n = {}));
			const o = {
				status: n.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						if (e.status === n.Fetched && e.data.stripe && e.data.stripe.sources) {
							const s = t.payload.cardId,
								{
									[s]: n,
									...r
								} = e.data.stripe.sources;
							return {
								...e,
								data: {
									...e.data,
									stripe: {
										...e.data.stripe,
										sources: r
									}
								}
							}
						}
						return e;
					case r.e:
						if (e.status === n.Fetched && e.data.braintree && e.data.braintree.sources) {
							const s = t.payload.sourceId,
								{
									[s]: n,
									...r
								} = e.data.braintree.sources;
							return {
								...e,
								data: {
									...e.data,
									braintree: {
										...e.data.braintree,
										sources: r
									}
								}
							}
						}
						return e;
					case r.b:
						return {
							error: t.payload.error, status: n.Failure
						};
					case r.c:
						return {
							data: t.payload, status: n.Fetched
						};
					case r.d:
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
			var n, r = s("./src/lib/constants/specialMembership.ts"),
				o = s("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = s("./src/reddit/helpers/economics/sortBadges.ts"),
				a = s("./src/reddit/models/Badge/index.ts"),
				d = s("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(n || (n = {}));
			const c = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, s, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(r => {
						let o;
						(o = e.placement ? e.placement === a.a.First ? n[d.a.Loyalty][r] : n[d.a.Achievement][r] : l(e) ? n[d.a.Cosmetic][d.c.MyBadges][r] : n[d.a.Cosmetic][d.c.Gallery][r]) && (l(e) ? s.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const s = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return s === n ? Object(i.b)(e, t) : s - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(m).sort((e, s) => {
					const n = t[e.id],
						r = t[s.id];
					return Object(i.b)(n, r)
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
						r = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[d.a.Loyalty][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[d.a.Achievement][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.Gallery][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[d.a.Cosmetic][d.c.MyBadges][s] = {
						...r,
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
				return u(Object.keys(e.badges).map(t => e.badges[t]), s, n, t), u(Object.keys(e.products).map(t => e.products[t]), s, n, t), {
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
					case o.a: {
						const {
							subredditId: s
						} = t.payload, r = e[s];
						return r && r.status === n.Fetched ? {
							...e,
							[s]: {
								...r,
								data: {
									...r.data
								},
								raw: {
									...r.raw
								}
							}
						} : e
					}
					case o.h: {
						const {
							subredditId: s
						} = t.payload, r = e[s];
						return r && r.status === n.Fetched ? {
							...e,
							[s]: {
								...r,
								data: {
									...r.data,
									subscription: {
										...r.data.subscription || {},
										settings: {
											renew: !1
										}
									}
								},
								raw: {
									...r.raw,
									subscription: {
										...r.raw.subscription || {},
										settings: {
											renew: !1
										}
									}
								}
							}
						} : e
					}
					case o.i: {
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
		"./src/reddit/reducers/user/experiments/shredditPDPExperimentHeader/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./src/lib/sentry/index.ts"),
				o = s("./src/reddit/actions/shredditPDPExperiementHeaderAction.ts");
			s("./src/reddit/constants/experiments.ts");
			! function(e) {
				e[e.Treatment = 0] = "Treatment", e[e.Control = 1] = "Control", e[e.Off = 2] = "Off"
			}(n || (n = {}));
			const i = n.Off;
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.b:
					case o.a:
						return r.c.captureException("PDP Experiment Header should only be set on the server."), e;
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./node_modules/reselect/es/index.js");
			const i = Object(o.a)(e => Object(r.c)(e, {
				experimentEligibilitySelector: r.a,
				experimentName: n.rb
			}), e => ({
				bucketed: e === n.Xc.ExpandedSearch || e === n.Xc.CollapsedSearch,
				collapsed: e === n.Xc.CollapsedSearch,
				expanded: e === n.Xc.ExpandedSearch
			}))
		},
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/helpers/isCrosspost.ts"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx");
			const a = (e, t) => {
				let {
					post: s,
					pageLayer: a
				} = t;
				if (Object(i.F)(a)) return !0;
				const d = Object(i.y)(a),
					c = Object(o.a)(s);
				return !(!d || c) && (e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.Lb
					}) === n.Od
				})(e)
			}
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return b
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/helpers/trackers/experiments/user.ts"),
				i = s("./src/reddit/reducers/user/experiments/shredditPDPExperimentHeader/index.ts"),
				a = s("./src/reddit/selectors/telemetry.ts"),
				d = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/selectors/user.ts");
			const l = e => e.user.experiments.shredditPDPExperimentInfo,
				u = Object(d.a)(c.S, e => e.user.experiments.shredditPDPExperimentHeader, (e, t) => e ? i.a.Off : t),
				m = Object(d.a)(u, e => e === i.a.Treatment),
				p = Object(d.a)(u, l, (e, t) => e !== i.a.Off && null !== t),
				b = (e, t) => {
					const s = t(),
						d = u(s);
					Object(c.S)(s) || d === i.a.Off || e.block(e => {
						if ((e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname))
							if (d === i.a.Control)((e, t) => {
								if (p(e)) {
									const s = l(e);
									if (null != s) {
										const n = a.f(e),
											r = a.sb(e),
											i = a.ab(e);
										Object(o.a)(n, r, i, {
											id: s.id,
											isOverride: !1,
											name: s.name,
											version: s.version,
											variant: t
										}, {})
									}
								} else Object(r.d)(e, n.Bf, t)
							})(t(), n.Q.Control1);
							else if (d === i.a.Treatment) return window.location.href = e.pathname, !1
					})
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(r.pg)(t)
				},
				d = Object(n.a)(a, o.d, (e, t) => e && !t)
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
				return h
			})), s.d(t, "d", (function() {
				return f
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				d = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/selectors/user.ts");
			const l = new Set([d.g.AntiEvilOps, d.g.AutomodFiltered, d.g.CommunityOps, d.g.ContentTakedown, d.g.CopyrightTakedown, d.g.Moderator, d.g.Reddit]),
				u = new Set([d.g.Author, d.g.AuthorDeleted]),
				m = Object(r.a)(o.a, e => {
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
					let r = Object(i.b)(e);
					return r || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (r = e.media.markdownContent), r === s
				}),
				p = Object(r.a)(o.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = n.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let r = Object(i.b)(e);
					return r || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (r = e.media.markdownContent), r === s
				}),
				b = Object(r.a)(o.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				h = Object(r.a)(c.m, o.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				f = Object(r.a)(o.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/featureFlags/index.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			const a = e => r.d.subredditMentionD2xExperiment(e),
				d = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: n.Jf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === n.Pf.SmIcon || t === n.Pf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.pending[s]
				},
				u = (e, t) => {
					let {
						subredditName: s
					} = t;
					return !!e.subreddits.api.models.error[s]
				},
				m = (e, t) => {
					let {
						subredditName: s
					} = t;
					const n = Object(i.bb)(e, {
						subredditName: s
					});
					return (n && n.postIds || []).slice(0, 2)
				}
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.6ec4962ce1e0dd52a116.js.map