// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.13f144899285740f63d5.js
// Retrieved at 12/19/2022, 4:10:03 PM by Reddit Dataminer v1.0.0
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
						v = /tablet/i.test(t) && !/tablet pc/i.test(t),
						O = !v && /[^-]mobi/i.test(t),
						g = /xbox/i.test(t);
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
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && E && (r.version = E)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : f ? (r.mac = e, r.osname = "macOS") : g ? (r.xbox = e, r.osname = "Xbox") : h ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
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
					var k = !r.windows && y.split(".")[0];
					return v || d || "ipad" == o || i && (3 == k || k >= 4 && !O) || r.silk ? r.tablet = e : (O || "iphone" == o || "ipod" == o || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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
			const o = [r.yc, r.ub, r.E, r.U, r.pb, r.Xb],
				i = {
					[r.Xb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.pb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.U]: e => n.fbt._({
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
					[r.ub]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.yc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[r.Xb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.U]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.E]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.ub]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.yc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.ub]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.yc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function d(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const d = Date.now(),
					c = new Date(e).getTime(),
					l = {
						[r.yc]: "",
						[r.ub]: "",
						[r.E]: "",
						[r.U]: "",
						[r.pb]: "",
						[r.Xb]: ""
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
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(n.a)(r.c),
				i = Object(n.a)(r.b),
				a = Object(n.a)(r.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return v
			})), s.d(t, "c", (function() {
				return O
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "b", (function() {
				return j
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
				v = e => async (t, s, n) => {
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
				}, g = Object(o.a)(_.J), y = e => async (t, s, r) => {
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
				}, k = (e, t) => async (s, r, o) => {
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
				}, S = (e, t, s) => async (o, i, a) => {
					let {
						gqlContext: d
					} = a;
					const l = Object(h.c)(i(), {
						commentId: e
					});
					if (!l) return;
					const u = s === r.kc.Snoozed,
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
				}, j = (e, t, s) => async (n, o, a) => {
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
					(s || !s && e === b) && _.push(f), (await Promise.all(_)).every(e => e.ok) ? s && n(g({
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
		"./src/reddit/actions/modQueue/realtime.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			})), s.d(t, "c", (function() {
				return R
			})), s.d(t, "b", (function() {
				return A
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				r = (s("./src/redditGQL/operations/LastModActionInSubreddit.json"), s("./src/redditGQL/operations/ModActivitySummaryByID.json")),
				o = s("./src/redditGQL/operations/SingleCommentById.json"),
				i = s("./src/redditGQL/operations/SinglePostInfoById.json");
			var a = s("./src/lib/initializeClient/installReducer.ts"),
				d = s("./src/lib/makeActionCreator/index.ts"),
				c = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/users.ts"),
				m = s("./src/reddit/endpoints/redditor/index.ts"),
				p = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				b = s("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				h = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				f = s("./src/reddit/helpers/isPost.ts"),
				x = s("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				_ = s("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				E = s("./src/reddit/actions/modQueue/constants.ts");
			var v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.o:
							return t.payload;
						default:
							return e
					}
				},
				O = s("./src/reddit/reducers/pages/modHub/index.ts"),
				g = s("./src/reddit/selectors/modQueue.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				k = s("./src/redditGQL/types.ts");
			Object(a.a)({
				pages: {
					modHub: O.a
				}
			}), Object(a.a)({
				features: {
					modActivitySummaries: x.a
				}
			}), Object(a.a)({
				features: {
					realtimeModqueue: _.a
				}
			}), Object(a.a)({
				features: {
					realtimeUpdateAnimationId: v
				}
			});
			const C = Object(d.a)(E.l),
				S = e => async (t, s, o) => {
					let {
						gqlContext: i
					} = o;
					const a = await ((e, t) => Object(n.a)(e, {
							...r,
							variables: t
						}))(i(), {
							id: e
						}),
						d = Object(b.a)(a.body.data.subredditInfoById);
					t(C(d))
				}, j = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					e && t(S(e))
				}, w = Object(d.a)(E.m), N = (e, t) => {
					const s = (e => {
							var t, s;
							const {
								subredditName: n,
								pageName: r
							} = (null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || {}, o = (null === (s = e.platform.currentPage) || void 0 === s ? void 0 : s.queryParams) || {};
							return {
								page: (null == o ? void 0 : o.page) || "1",
								pageName: r,
								subredditName: n || (null == o ? void 0 : o.subreddit),
								queryParams: o
							}
						})(e),
						n = Object(g.d)(e, s);
					return null == n ? void 0 : n.includes(t)
				}, T = [k.y.ApproveComment, k.y.ApproveLink, k.y.RemoveComment, k.y.RemoveLink, k.y.SpamComment, k.y.SpamLink], R = e => async (t, s, n) => {
					let {
						gqlContext: r
					} = n;
					var o, i;
					const {
						moderatorID: a,
						targetID: d,
						action: c
					} = null === (o = null == e ? void 0 : e.subscribe) || void 0 === o ? void 0 : o.data, l = s(), p = Object(y.k)(l), b = T.includes(c), h = a === p, f = N(l, d);
					if (!b || h || !f) return;
					const x = await Object(m.b)(r(), {
						id: a
					}) || (null === (i = Object(y.Bb)(l, {
						userId: a
					})) || void 0 === i ? void 0 : i.username);
					x && t(Object(u.z)(x)), t(w({
						targetID: d
					}))
				}, I = Object(d.a)(E.p), P = Object(d.a)(E.o), A = e => async (t, s, r) => {
					let {
						gqlContext: a
					} = r;
					var d, u, m, b, x, _;
					const E = Object(f.a)(e),
						v = s(),
						O = null === (u = null === (d = null == v ? void 0 : v.features) || void 0 === d ? void 0 : d.realtimeModqueue) || void 0 === u ? void 0 : u.toUpdate.includes(e),
						g = N(v, e);
					if (!O || !g) return;
					const y = E ? () => ((e, t) => Object(n.a)(e, {
							...i,
							variables: t
						}))(a(), {
							id: e
						}) : () => ((e, t) => Object(n.a)(e, {
							...o,
							variables: t
						}))(a(), {
							id: e
						}),
						k = await y();
					if (k.ok) {
						if (E) {
							const s = null === (b = null === (m = null == k ? void 0 : k.body) || void 0 === m ? void 0 : m.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(l.Q)({
								[e]: Object(h.f)(s)
							}))
						} else {
							const s = null === (_ = null === (x = null == k ? void 0 : k.body) || void 0 === x ? void 0 : x.data) || void 0 === _ ? void 0 : _.commentById;
							t(Object(c.j)({
								[e]: Object(p.a)(s)
							}))
						}
						t(P(e)), t(I({
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
				return v
			})), s.d(t, "q", (function() {
				return O
			})), s.d(t, "o", (function() {
				return g
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
				v = "UPDATE_COLLECTION_LAYOUT_PENDING",
				O = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				g = "UPDATE_COLLECTION_LAYOUT_FAILED"
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
				return re
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return oe
			})), s.d(t, "addRemovalReason", (function() {
				return ie
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ae
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return de
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), s.d(t, "editRemovalReason", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return pe
			})), s.d(t, "deleteRemovalReason", (function() {
				return be
			})), s.d(t, "removedItemsSelected", (function() {
				return he
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return xe
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return _e
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return Ee
			})), s.d(t, "removalReasonMessagePending", (function() {
				return ve
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Oe
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ge
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return ye
			})), s.d(t, "submitRemovalReason", (function() {
				return ke
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Ce
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./node_modules/redux/es/redux.js");
			const i = "REMOVALREASONS__LOAD_SUCCESS",
				a = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				c = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				u = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var f = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case i:
					case a:
					case d:
					case l:
					case u:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case c:
					case m:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var x = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case a:
						case l:
						case p:
							return !0;
						case i:
						case "REMOVALREASONS__LOAD_FAILED":
						case d:
						case c:
						case u:
						case m:
						case b:
						case h:
							return !1;
						default:
							return e
					}
				},
				_ = Object(o.c)({
					error: f,
					pending: x
				});
			const E = {};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
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
					case u: {
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
							...r
						} = e;
						return r
					}
					default:
						return e
				}
			};
			const O = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
						const {
							subredditId: s,
							response: n
						} = t.payload, {
							order: r
						} = n;
						return {
							...e,
							[s]: r
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
						} = t.payload, r = [...e[s]].filter(e => e !== n);
						return {
							...e,
							[s]: r
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
				k = Object(o.c)({
					api: _,
					models: v,
					reasonOrder: g,
					removedItemIds: y
				}),
				C = s("./src/lib/constants/index.ts"),
				S = s("./src/lib/makeActionCreator/index.ts"),
				j = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				N = s("./src/reddit/actions/bulkActions/index.ts"),
				T = s("./src/reddit/actions/comment/index.ts"),
				R = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/comment/moderation.ts"),
				P = s("./src/reddit/actions/modal.ts"),
				A = s("./src/reddit/actions/post.ts"),
				M = s("./src/reddit/actions/toaster.ts"),
				L = s("./src/reddit/constants/modals.ts"),
				D = s("./src/lib/makeApiRequest/index.ts"),
				B = s("./src/lib/omitHeaders/index.ts"),
				F = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				V = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
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
				W = (e, t, s) => Object(D.a)(Object(B.a)(e, [F.a]), {
					endpoint: Object(U.a)(Object(V.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: C.ob.POST,
					type: "json",
					data: t
				});
			var G = s("./src/reddit/helpers/isPost.ts"),
				z = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				Y = s("./src/reddit/helpers/routeKey/index.ts"),
				q = s("./src/reddit/models/ModQueue/index.ts"),
				J = s("./src/reddit/models/PostDraft/index.ts"),
				Q = s("./src/reddit/models/RemovalReason/index.ts"),
				K = s("./src/reddit/models/Toast/index.ts"),
				Z = s("./src/reddit/selectors/comments.ts"),
				X = s("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: k
				}
			});
			const $ = Object(S.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(S.a)(i),
				te = Object(S.a)("REMOVALREASONS__LOAD_FAILED"),
				se = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const o = s().subreddits.models[e].name;
					t($());
					const i = await ((e, t) => Object(D.a)(Object(B.a)(e, [F.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: C.ob.GET
					}))(r(), o);
					i.ok ? t(ee({
						subredditId: e,
						response: i.body
					})) : t(te(i.error))
				}, ne = Object(S.a)(a), re = Object(S.a)(d), oe = Object(S.a)(c), ie = (e, t) => async (s, r, o) => {
					let {
						apiContext: i
					} = o;
					const a = r().subreddits.models[e].name;
					s(ne());
					const d = await ((e, t, s) => Object(D.a)(Object(B.a)(e, [F.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: C.ob.POST,
						data: s
					}))(i(), a, t);
					if (d.ok) {
						const {
							id: r
						} = d.body, o = {
							...t,
							id: r
						};
						s(re({
							subredditId: e,
							reason: o
						})), s(Object(M.f)({
							kind: K.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(oe(d.error))
				}, ae = Object(S.a)(l), de = Object(S.a)(u), ce = Object(S.a)(m), le = (e, t) => async (s, r, o) => {
					let {
						apiContext: i
					} = o;
					const a = r().subreddits.models[e].name;
					s(ae());
					const d = await ((e, t, s) => Object(D.a)(Object(B.a)(e, [F.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: C.ob.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(i(), a, t);
					d.ok ? (s(de({
						subredditId: e,
						reason: t
					})), s(Object(M.f)({
						kind: K.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ce(d.error))
				}, ue = Object(S.a)(p), me = Object(S.a)(b), pe = Object(S.a)(h), be = (e, t) => async (s, r, o) => {
					let {
						apiContext: i
					} = o;
					const a = r().subreddits.models[e].name;
					s(ue());
					const d = await ((e, t, s) => Object(D.a)(Object(B.a)(e, [F.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: C.ob.DELETE
					}))(i(), a, t);
					d.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(M.f)({
						kind: K.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(pe(d.error))
				}, he = Object(S.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (s, n, r) => {
					let {
						apiContext: o
					} = r;
					const i = n();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(he({
						subredditId: e,
						itemIds: t
					})), s(Object(P.i)(L.a.ADD_REMOVAL_REASON))
				}, xe = Object(S.a)("REMOVALREASONS__SUBMIT_PENDING"), _e = Object(S.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Ee = Object(S.a)("REMOVALREASONS__SUBMIT_FAILED"), ve = Object(S.a)("REMOVALREASONS__MESSAGE_PENDING"), Oe = Object(S.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ge = Object(S.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ye = Object(S.a)("REMOVALREASONS__MESSAGE_FAILED"), ke = (e, t, s, n, r, o) => async (i, a, d) => {
					let {
						apiContext: c
					} = d;
					const l = a(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						p = Object(G.a)(m) ? Q.e.Post : Q.e.Comment,
						b = p === Q.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						h = p === Q.e.Post ? A.Q : T.j;
					if (!b || !u) return !1;
					i(xe()), i(h({
						[m]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const f = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						x = await H(c(), f);
					if (x.ok) {
						if (i(_e()), t) {
							i(ve());
							const r = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: o,
									type: n
								},
								a = await W(c(), Object(Q.h)(r, p), p);
							if (a.ok) {
								if ([Q.f.Public, Q.f.PublicAsSubreddit].includes(n)) {
									if (i(ge()), a.body) {
										const e = Object(z.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(X.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let r = s && n && Object(Y.a)(n, l, l.posts.models[e.postId]);
										if (r || (r = Object(j.a)(e.postId, null, {
												sort: C.x,
												hasSortParam: !0
											})), p === Q.e.Post) {
											const s = Object(w.a)(J.c.replyToPost, m);
											i(Object(R.r)({
												...t,
												headCommentId: Object(Z.w)(l, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: s
											}));
											const n = l.postStickiedComments.data[m];
											i(Object(I.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), n && n !== e.id && i(Object(T.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === Q.e.Comment) {
											const e = Object(w.a)(J.c.replyToComment, b.id),
												s = Object(Z.j)(l, {
													commentId: m,
													commentsPageKey: r
												});
											i(Object(R.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else i(Oe());
								return !0
							}
							return i(ye(a.error)), !1
						}
					} else i(Ee(x.error)), i(h({
						[m]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, s, r, o) => async (i, a, d) => {
					let {
						apiContext: c
					} = d;
					const l = a(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					i(xe());
					const m = Object(M.f)({
							kind: K.b.SuccessMod,
							text: n.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [n.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						b = await H(c(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: q.a.RemovalReason,
							username: u,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (i(Object(N.b)(n)), t) {
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: r
								},
								o = await W(c(), Object(Q.h)(n, Q.e.Bulk), Q.e.Bulk);
							o.ok ? (i(Oe()), i(m)) : i(ye(o.error))
						} else i(m)
					} else i(Ee(b.error))
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
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "c", (function() {
				return v
			}));
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				a = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				d = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				u = s.n(l);
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let t;
				switch (e) {
					case c.g.AntiEvilOps:
					case c.g.AutomodFiltered:
					case c.g.CommunityOps:
					case c.g.ContentTakedown:
					case c.g.CopyrightTakedown:
					case c.g.Reddit:
						t = i.a;
						break;
					case c.g.AuthorDeleted:
					case c.g.Author:
						t = d.b;
						break;
					case c.g.Moderator:
						t = a.a;
						break;
					default:
						t = i.a
				}
				return o.a.createElement(t, {
					className: u.a.icon
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
			}, h = () => m._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", o.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "3MHgRl"
			}))), m._param("=Content Policy", o.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), f = () => m._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", o.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "yMHtU"
			}))), m._param("=Content Policy", o.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			}), x = (e, t) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return m._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "2ZqyRT"
						});
					case c.g.Author:
						return m._("Sorry, this post was removed by the person who originally posted it.", null, {
							hk: "4IRCN"
						});
					case c.g.AuthorDeleted:
						return m._("Sorry, this post was deleted by the person who originally posted it.", null, {
							hk: "4emmIp"
						});
					case c.g.AutomodFiltered:
						return m._("Post is awaiting moderator approval.", null, {
							hk: "wdGOr"
						});
					case c.g.CommunityOps:
						return m._("Sorry, this post was removed by Reddit's Community team.", null, {
							hk: "3fs5lF"
						});
					case c.g.ContentTakedown:
						return m._("Sorry, this post was removed by Reddit.", null, {
							hk: "3XSuKc"
						});
					case c.g.CopyrightTakedown:
						return m._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
							hk: "1TbEDT"
						});
					case c.g.Moderator:
						return m._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [m._param("subredditName", t)], {
							hk: "12NWKq"
						});
					case c.g.Reddit:
						return m._("Sorry, this post was removed by Reddit's spam filters.", null, {
							hk: "10ItEu"
						});
					default:
						return m._("Sorry, this post has been removed", null, {
							hk: "11sG9V"
						})
				}
			}, _ = (e, t) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return o.a.createElement(h, null);
					case c.g.AuthorDeleted:
					case c.g.Author:
						return m._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case c.g.AutomodFiltered:
						return m._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [m._param("=[subreddit name]", o.a.createElement("a", {
							className: u.a.link,
							href: `${n.a.redditUrl}/r/${t}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, m._("{subreddit name}", [m._param("subreddit name", `r/${t}`)], {
							hk: "2o22vl"
						})))], {
							hk: "3dxuEW"
						});
					case c.g.CommunityOps:
						return m._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
							hk: "uPiHS"
						});
					case c.g.ContentTakedown:
						return o.a.createElement(f, null);
					case c.g.CopyrightTakedown:
						return m._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "2e8fhi"
						});
					case c.g.Moderator:
						return m._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
							hk: "QXZPk"
						});
					case c.g.Reddit:
					default:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3vUmEz"
						})
				}
			}, E = (e, t, s) => {
				switch (e) {
					case c.g.AntiEvilOps:
						return m._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "3a8CyR"
						});
					case c.g.Author:
						return m._("This post was removed by the person who originally posted it.", null, {
							hk: "2lyUgL"
						});
					case c.g.AuthorDeleted:
						return m._("This post was deleted by the person who originally posted it.", null, {
							hk: "16LeiH"
						});
					case c.g.AutomodFiltered:
						return m._("This post was reported by automod, and is waiting for your review.", null, {
							hk: "2E46dR"
						});
					case c.g.CommunityOps:
						return m._("This post was removed by Reddit admin, u/{username}.", [m._param("username", t)], {
							hk: "34nHWu"
						});
					case c.g.ContentTakedown:
						return m._("This post was removed by Reddit.", null, {
							hk: "3uR3iw"
						});
					case c.g.CopyrightTakedown:
						return m._("This post was removed by Reddit's Legal Operations team.", null, {
							hk: "Ukfj"
						});
					case c.g.Moderator:
						return m._("This post was removed by r/{subredditName} moderator, u/{username}.", [m._param("subredditName", s), m._param("username", t)], {
							hk: "270bcn"
						});
					case c.g.Reddit:
						return m._("This post was removed by Reddit's spam filters.", null, {
							hk: "1k3lsh"
						});
					default:
						return m._("This post was removed by Reddit's spam filters.", null, {
							hk: "3oxS8r"
						})
				}
			}, v = e => {
				switch (e) {
					case c.g.AntiEvilOps:
						return o.a.createElement(h, null);
					case c.g.AuthorDeleted:
					case c.g.Author:
						return m._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
							hk: "2KZLgT"
						});
					case c.g.AutomodFiltered:
						return m._("It won’t show up in your community feed until you or another moderator approve it.", null, {
							hk: "2X5ECb"
						});
					case c.g.CommunityOps:
						return m._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [m._param("=just ask", o.a.createElement("a", {
							className: u.a.link,
							href: `${n.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, m._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case c.g.ContentTakedown:
						return o.a.createElement(f, null);
					case c.g.CopyrightTakedown:
						return m._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "7jiV"
						});
					case c.g.Moderator:
						return m._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
							hk: "22qJOB"
						});
					case c.g.Reddit:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3S3oDL"
						});
					default:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
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
				return T
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
				v = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/selectors/posts.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/constants/tracking.ts"),
				S = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				j = s("./src/reddit/components/Media/ImageBox/index.m.less"),
				w = s.n(j);

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = e => e > 2 * O.d,
				R = e => o.a.createElement("img", {
					alt: e.altText || n.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(c.a)(e.className, {
						[w.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				I = e => {
					const t = Object(c.a)(w.a.image, f.g, e.className, {
							[w.a.mShowCentered]: e.showCentered,
							[w.a.mShowBlurred]: e.shouldBlur
						}),
						s = {};
					e.showFull || e.isTall || (s.maxHeight = `${O.j}px`), e.isListing || e.isTall && T(e.height) || (s.maxHeight = `${e.maxHeight||O.d}px`), e.isExpando && e.maxHeight && (s.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (s.maxWidth = `${e.maxWidth}px`);
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
					Object(v.a)(i, l, u.current);
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
					}, a && o.a.createElement(R, N({}, e, {
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
				P = e => {
					const t = {};
					return (!e.showFull && Object(O.M)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${O.j}px`, e.shouldBlur && (t.maxWidth = Object(O.M)(e.height, e.width) ? `${O.A}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), o.a.createElement("div", {
						className: Object(c.a)(w.a.container, e.className, {
							[w.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				A = Object(i.b)(() => Object(d.a)(g.F, k.lb, (e, t) => {
					let {
						isSponsored: s,
						postId: n
					} = t;
					return s && n ? Object(g.b)(e, n) : null
				}, y.d, g.G, (e, t, s, n, r) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: s,
					pageType: n.pageType,
					post: r
				})));
			t.a = A(e => {
				const t = Object(E.a)();
				return e.outboundUrl && !e.shouldBlur ? o.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": S.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(x.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, h.a.Click), Object(_.a)(e.post, e.pageType))
					}
				}, L(e)) : e.isListing && e.postPermalink ? o.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, L(e)) : L(e)
			});
			const M = (e, t) => o.a.createElement(I, {
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
				L = e => {
					let {
						onClick: t,
						...s
					} = e;
					const r = Object(O.M)(s.height, s.width),
						i = T(s.height) && r;
					return o.a.createElement(P, N({}, s, {
						className: `${r?`${C.a} `:""}${s.className||""}`
					}), s.isListing ? o.a.createElement("div", {
						className: s.contentImageClassName
					}, M(r, s)) : o.a.createElement("a", {
						href: s.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: w.a.imageLink
					}, M(r, s), s.shouldBlur && !s.isVideoThumbnail && !s.isNsfwBlockingModalEligible && o.a.createElement(p.a, {
						isNSFW: !!s.isNSFW,
						isSpoiler: !!s.isSpoiler
					})), s.isListing && !s.showFull && s.height > O.j && Object(O.M)(s.height, s.width) && o.a.createElement("div", {
						className: w.a.seeMore
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
					d = Object(a.C)(e.height, e.width, e.forceAspectRatio);
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
						paddingBottom: `${d}%`
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

			function v() {
				return (v = Object.assign || function(e) {
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

				function g(e) {
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
					if (g(!d && (t || n)), h.current && r) return b.current = function(e, t) {
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
					O !== d && g(!d && (t || n))
				}, [O, d, t, n]), i.a.createElement("video", v({}, p, {
					ref: e => h.current = e,
					muted: !0,
					onClick: m
				}), i.a.createElement("source", {
					src: Object(_.a)(u || "")
				}))
			}
			var g = s("./src/reddit/components/Media/VideoBox/index.m.less"),
				y = s.n(g);
			const k = Object(d.c)({
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
				} = Object(a.e)(t => k(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: x,
					isNotCardView: _,
					showFull: E,
					shouldPause: v,
					width: g,
					isListing: C,
					className: S,
					showCentered: j,
					originalSource: w,
					isPromoted: N,
					renderSmallMedia: T,
					onClick: R
				} = e, I = t && !(N && Object(c.hasAcceptableAds)()), P = Object(a.d)();

				function A(e) {
					P(e ? Object(u.s)(b) : Object(u.Q)(b))
				}

				function M() {
					return P(Object(u.L)({
						postId: b
					}))
				}
				const L = r()(e => {
					if (s) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && P(Object(u.D)(b))
				}, 200);

				function D(e) {
					e.persist(), L(e)
				}

				function B(e) {
					var t;
					(o || U(e), d) || (t = e.timeStamp, P(Object(u.M)(b, t)))
				}

				function F(e) {
					P(Object(u.r)(b, e.timeStamp))
				}

				function U(e) {
					! function(e) {
						P(Object(u.P)({
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

				function V(e) {
					n || B(e), o || U(e), P(Object(u.O)(b))
				}

				function H() {
					const e = {};
					return j && (e.margin = "0 auto"), C || (e.maxHeight = `${p.d}px`), i.a.createElement(O, {
						autoplay: I,
						className: Object(l.a)(m.a, y.a.styledVideo, {
							[y.a.renderSmallMedia]: T
						}),
						height: T ? void 0 : x,
						isListing: C,
						isNotCardView: _,
						key: b,
						loop: !0,
						onBufferingChange: A,
						onClick: R,
						onLoadStart: F,
						onLoadedData: B,
						onLoadedMetadata: U,
						onPause: M,
						onPlaying: V,
						onTimeUpdate: D,
						shouldLoad: h,
						shouldPause: v,
						showCentered: j,
						showFull: E,
						source: f,
						style: T ? void 0 : e,
						width: T ? void 0 : g
					})
				}
				return C ? H() : i.a.createElement("div", {
					className: Object(l.a)(y.a.container, S, {
						[y.a.centered]: j
					})
				}, i.a.createElement("a", {
					href: w,
					target: "_blank",
					rel: "noopener noreferrer"
				}, H()))
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
					subredditOrProfile: v,
					templatePlaceholderImage: O,
					shouldShowFollowButton: g,
					isFollowed: y,
					isCommentsPage: k,
					onFollowPostClick: C
				} = e;
				const S = Object(b.a)(),
					j = Object(i.e)(f.a);
				return S ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(a.a)(_.a.thumbnailContainer, {
						[_.a.mShowingButtonOrOverflow]: g || E
					})
				}, o.a.createElement("div", {
					className: _.a.thumbnailContainerRow
				}, g && o.a.createElement(d.a, {
					isFilled: !!y,
					onClick: C,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), E && v && o.a.createElement(c.a, {
					className: _.a.subscribeButton,
					getEventFactory: e => Object(p.k)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: v.name,
						type: Object(h.i)(v) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: s.id,
					small: !0,
					priority: j ? m.c.Secondary : void 0,
					isShredditParityEnabled: j
				})), o.a.createElement(l.b, {
					crosspost: t,
					isCommentsPage: k,
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
				v = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				O = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				g = s("./src/reddit/components/ModModeReports/index.tsx"),
				y = s("./src/reddit/components/ModModeReports/helpers.ts"),
				k = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				C = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				S = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				j = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				w = s("./src/reddit/components/PostContainer/index.tsx"),
				N = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				T = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				R = s("./src/reddit/components/PostTitle/index.tsx"),
				I = s("./src/reddit/components/PostTopLine/index.tsx"),
				P = s("./src/reddit/components/PostTopMeta/index.tsx"),
				A = s("./src/reddit/components/SourceLink/index.tsx"),
				M = s("./src/reddit/constants/postLayout.ts"),
				L = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				B = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				F = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				U = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				V = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				H = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				W = s.n(H),
				G = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				z = s("./src/reddit/hooks/useIsOverlay.ts"),
				Y = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				q = s("./src/reddit/hooks/useUserContext.ts"),
				J = s("./src/reddit/models/Media/index.ts"),
				Q = s("./src/reddit/models/Post/index.ts"),
				K = s("./src/reddit/models/Vote/index.ts"),
				Z = s("./src/reddit/contexts/Post/index.tsx"),
				X = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
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
					flairStyleTemplate: L.Y,
					isActive: re.j,
					isBlurredPreview: $.b,
					isCurrentUserProfilePost: re.l,
					isRecommendationPost: (e, t) => !!t.post.recommendationContext && Object(ie.S)(e),
					showPromotedCTA: oe.a,
					moderatorPermissions: te.m,
					shouldShowNsfwListingBelow: ee.b,
					showEditFlair: ne.a,
					showMedia: L.t,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(te.i)(e, s.id)
					},
					isOptionalTextEnabled: X.a,
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
						eventFactory: L,
						flairStyleTemplate: H,
						hideNSFWPref: G,
						hostPostData: z,
						inSubredditOrProfile: q = !1,
						isBlurredPreview: Z,
						isCheckboxSelected: X,
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
						shouldHideFlair: ve,
						shouldShowNsfwListingBelow: Oe,
						showBulkActionCheckbox: ge,
						showEditFlair: ye,
						showMedia: ke,
						showPromotedCTA: Ce,
						sendEvent: Se,
						subredditOrProfile: je,
						toggleCheckbox: we,
						isAvatarPostEnabled: Ne,
						isOptionalTextEnabled: Te,
						isModQueueDisplayEnabled: Re,
						showRealtimeUpdateAnimation: Ie,
						isUpdatedContent: Pe,
						isNightMode: Ae
					} = e, Me = Object(o.d)(), Le = e => e === K.a.upvoted ? Me(Object(c.ib)(xe)) : Me(Object(c.v)(xe)), De = () => Me(Object(c.eb)(xe)), Be = Ee ? void 0 : H, Fe = Object(U.a)(pe), Ue = be && Fe, Ve = Object(B.a)(pe), He = Object(F.a)(pe), We = Object(O.a)(fe), Ge = Object(y.c)(fe), ze = !!(null == z ? void 0 : z.shouldShowLinkedPosts), Ye = Oe, qe = !Object(Y.a)() && Object(D.a)(fe), Je = q && !ke && !ze && !Ye || Ne, Qe = Je && !!fe.source && !s, Ke = !(te && !!i || oe) && !ee && (!q || ze || Ye) || re, Ze = (!q || ze || Ye) && !fe.isSponsored, Xe = Object(a.t)(fe, ue), {
						source: $e
					} = Xe, et = !!(Z && (null == je ? void 0 : je.isNSFW)), tt = Object(n.useRef)({
						renderingObjectInfo: fe
					}), st = Object(Q.r)(fe);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(w.b, {
						className: Object(d.a)(de.a.container, t, W.a.largeAndMediumPostStyles, W.a.largeAndMediumActiveStyles, Object(V.a)(e), {
							[W.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"],
							[de.a.realtimeAnimation]: Ie,
							[de.a.realtimeUpdated]: Pe,
							[de.a.isNightMode]: Ae
						}),
						isOverlay: ne,
						style: Re && (Ie || Pe) ? Ae ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(V.b)(e.flairStyleTemplate),
						post: fe,
						onClick: he,
						eventFactory: L
					}, r.a.createElement(T.a, {
						model: fe,
						handleVote: Le,
						showBulkActionCheckbox: ge,
						isCheckboxSelected: X,
						toggleCheckbox: we,
						flairStyleTemplate: Be,
						redditStyle: Ee,
						isVoteCountAnimation: ae,
						isCountAnimShadowTestEnabled: le,
						postId: xe
					}), r.a.createElement(j.a, {
						className: Object(d.a)(de.a.backgroundWrapper, {
							[de.a.realtimeAnimation]: Ie,
							[de.a.realtimeUpdated]: Pe,
							[de.a.isNightMode]: Ae
						}),
						"data-click-id": "background",
						flairStyleTemplate: Be,
						post: fe,
						redditStyle: Ee,
						overrideBackgroundColor: Re && (Ie || Pe) ? Ae ? {
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
					}, st && r.a.createElement(S.a, {
						content: fe.recommendationContext.content,
						layout: M.g.Large,
						post: fe
					}), r.a.createElement(I.a, {
						className: de.a.postTopLine,
						hideNSFWPref: G,
						hostPostData: z,
						iconClassName: de.a.postTopLineIcon,
						inSubredditOrProfile: q,
						isCommentsPage: $,
						isCurrentUserProfilePost: ee,
						isModWithUserNotesPermissions: se,
						isOverlay: !!ne,
						isTopicPage: !!oe,
						listingKey: me,
						post: fe,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Qe,
						showSubreddit: Ze,
						showSubredditIcon: !0,
						subredditOrProfile: je
					}), r.a.createElement(R.c, {
						className: de.a.postTitle,
						post: fe,
						redditStyle: Ee,
						size: R.b.Large,
						titleColor: Be && Be.postTitleColor,
						isOverlay: ne
					}), $ && !ve && fe.flair && fe.flair.length > 0 && r.a.createElement(f.a, {
						className: Object(d.a)($ && de.a.leftPadding),
						disableFlair: !$,
						post: fe,
						sendEvent: Se
					}), fe.source && !fe.isSponsored && !s && !et && r.a.createElement(r.a.Fragment, null, r.a.createElement(A.a, {
						className: de.a.sourceLink,
						isCommentsPage: $,
						post: fe
					}), Te && fe.media && fe.media.type !== J.o.TEXT && fe.media.type !== J.o.IMAGE && fe.media.richtextContent && r.a.createElement(_.a, {
						content: fe.media.richtextContent,
						rtJsonElementProps: tt.current
					}))), !Je && qe && r.a.createElement(ce.a, {
						crosspost: s ? fe : void 0,
						hasModPostPerms: Fe,
						isCommentsPage: $,
						isOverlay: ne,
						modModeEnabled: be,
						post: s || fe,
						redditStyle: Ee,
						shouldShowSubscribeButton: Ke,
						subredditOrProfile: je,
						templatePlaceholderImage: Be && Be.postPlaceholderImage
					})), Ce && $e && $e.url && !fe.isSurveyAd && r.a.createElement(u.a, {
						className: de.a.adLinkWrapper
					}, r.a.createElement(m.a, {
						post: fe,
						adLinkContent: Xe
					})), be && Fe && We && !Re && r.a.createElement("div", {
						className: de.a.modModeBannerWrapper
					}, r.a.createElement(v.a, {
						thing: fe
					})), be && Fe && Ge && !Re && r.a.createElement("div", {
						className: de.a.modModeBannerWrapper
					}, r.a.createElement(g.a, {
						onIgnoreReports: De,
						reportable: fe
					})), r.a.createElement(E.d, null), Re && r.a.createElement(C.a, {
						post: fe
					}), r.a.createElement("div", {
						className: de.a.flatlistContainer
					}, r.a.createElement(b.a, {
						className: de.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Be,
						redditStyle: Ee,
						model: fe,
						onVoteClick: Le
					}), !fe.isSurveyAd && (Re ? r.a.createElement(k.a, {
						content: fe,
						listingKey: me,
						hostPostData: z
					}) : r.a.createElement(x.c, {
						currentUser: i,
						hasModFlairPerms: Ve,
						hasModFullPerms: He,
						hasModPostPerms: Fe,
						hostPostData: z,
						isCommentCountAnimation: ie,
						isCountAnimShadowTestEnabled: le,
						isOverlay: !!ne,
						listingKey: me,
						modModeEnabled: be,
						onIgnoreReports: De,
						onOpenReportsDropdown: e => Me(Object(l.h)({
							tooltipId: e
						})),
						post: fe,
						showEditFlair: ye,
						tooltipType: ne ? P.f.Lightbox : void 0,
						useFlatlistBreakpoints: Object(N.b)({
							editPost: !Ue,
							save: !Ue,
							hide: !1,
							report: !1,
							mute: !1
						})
					})))), te && r.a.createElement(p.a, {
						post: fe,
						postIds: null != _e ? _e : [],
						subredditId: null == je ? void 0 : je.id
					})))
				};
			t.default = Object(Z.b)(r.a.memo((function(e) {
				const t = Object(n.useMemo)(() => ue(), []),
					s = Object(o.e)(s => t(s, e), o.c),
					i = Object(G.a)(e.post),
					a = Object(q.a)();
				return r.a.createElement(me, le({}, e, s, {
					modModeEnabled: a.modModeEnabled,
					hideNSFWPref: a.prefs.hideNSFW,
					isOverlay: Object(z.a)(),
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
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/modQueue/realtime.ts"),
				l = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				u = s("./src/reddit/components/ReportFlow/new.tsx"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				b = s("./src/reddit/helpers/isPost.ts"),
				h = s("./src/reddit/helpers/trackers/modTools.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				_ = s("./src/reddit/hooks/useTracking.ts"),
				E = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/actions/comment/moderation.ts"),
				g = s("./src/reddit/actions/modal.ts"),
				y = s("./src/reddit/actions/post.ts"),
				k = s("./src/reddit/actions/postFlair.ts"),
				C = s("./src/reddit/actions/removalReasons/index.ts"),
				S = s("./src/reddit/selectors/activeModal.ts"),
				j = s("./src/reddit/selectors/moderatorPermissions.ts"),
				w = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {}));
			const N = e => {
				var t;
				return e.isRemoved && e.bannedBy !== d.m && (!Object(w.a)(e) || Object(b.b)(e) && [v.g.AntiEvilOps, v.g.CommunityOps, v.g.ContentTakedown, v.g.CopyrightTakedown, v.g.Reddit].indexOf(e.removedByCategory) > -1) ? n.REMOVED : e.isSpam ? n.SPAM : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : (null === (t = e.modQueueTriggers) || void 0 === t ? void 0 : t.length) || e.bannedBy === d.m ? n.FILTERED : n.UNMODERATED
			};
			var T = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				R = s.n(T),
				I = s("./src/lib/classNames/index.ts"),
				P = s("./src/lib/constants/icons.ts"),
				A = s("./src/reddit/actions/gold/modals.ts"),
				M = s("./src/reddit/actions/reportFlow/index.ts"),
				L = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				D = s("./src/reddit/components/OverflowMenu/index.tsx"),
				B = s("./src/reddit/constants/modals.ts"),
				F = s("./src/reddit/controls/Dropdown/Row.tsx"),
				U = s("./src/reddit/helpers/correlationIdTracker.ts"),
				V = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				H = s("./src/reddit/helpers/trackers/gild.ts"),
				W = s("./src/reddit/selectors/comments.ts"),
				G = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				z = s("./src/reddit/selectors/user.ts");
			const Y = (e, t) => Object(h.c)(t, e),
				q = (e, t) => e ? t ? r.fbt._("Unlock Comments", null, {
					hk: "zGuti"
				}) : r.fbt._("Lock Comments", null, {
					hk: "1QO9cp"
				}) : t ? r.fbt._("Unlock thread", null, {
					hk: "SqzQU"
				}) : r.fbt._("Lock thread", null, {
					hk: "3drB04"
				});
			var J = e => {
					let {
						content: t,
						hostPostData: s,
						listingKey: n,
						moderatorPermissions: c
					} = e;
					var l, u;
					const m = Object(_.a)(),
						p = Object(a.d)(),
						x = Object(b.b)(t),
						v = Object(a.e)(z.k),
						k = Object(a.e)(z.P),
						C = Object(a.e)(G.b),
						S = Object(V.a)(c),
						j = x ? f.k : Y,
						w = t.authorId === v,
						N = k && w,
						T = (null === (l = t.distinguishType) || void 0 === l ? void 0 : l.toLowerCase()) === d.J.ADMIN,
						J = (null === (u = t.distinguishType) || void 0 === u ? void 0 : u.toLowerCase()) === d.J.MODERATOR,
						Q = Object(o.useCallback)(() => {
							const e = x ? y.D : O.c;
							p(e(t.id));
							const s = t.isLocked ? "unlock" : "lock";
							m(x ? j(t.id, s) : Object(h.j)(t.id, s, "mod_menu"))
						}, [j, m, p, t, x]),
						K = Object(o.useCallback)(e => {
							m(Object(f.k)(t.id, e, "post", n, s, void 0))
						}, [m, n, s, t]),
						Z = Object(o.useCallback)(() => {
							var e;
							const s = t.isStickied ? "unsticky" : "sticky";
							x ? (p(Object(y.gb)(t.id)), m(Object(h.n)(s, t.id))) : (p(Object(O.b)(t.id, (null === (e = t.distinguishType) || void 0 === e ? void 0 : e.toLowerCase()) || "", !t.isStickied)), m(Object(h.j)(t.id, s, "mod_menu")))
						}, [m, p, t, x]),
						X = Object(o.useCallback)(() => {
							x && (p(Object(y.I)(t.id)), m(Object(h.n)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [m, p, t, x]),
						$ = Object(o.useCallback)(() => {
							x && (p(Object(y.F)(t.id)), Object(h.n)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [p, t, x]),
						ee = Object(o.useCallback)(() => {
							x && (p(Object(g.i)(B.a.CROWD_CONTROL)), p(Object(y.t)(t.id)))
						}, [p, t, x]),
						te = Object(a.e)(e => Object(W.m)(e, {
							commentId: t.id
						})),
						se = Object(o.useCallback)(() => {
							const e = x ? t.permalink : te;
							e && (p(Object(y.C)(e)), x ? K("copy") : m(Object(h.j)(t.id, "share", "mod_menu")))
						}, [K, p, t, x, te, m]),
						ne = Object(o.useCallback)(async () => {
							if (!x) return;
							const e = Object(U.d)(U.a.GildingFlow, !0);
							p(Object(A.d)({
								awardId: null == C ? void 0 : C.id,
								correlationId: e,
								thingId: t.id
							})), m(Object(H.clickGildEvent)(t.id))
						}, [m, p, t, C, x]),
						re = Object(o.useCallback)(() => {
							p(Object(M.c)(t.id)), x ? K("report") : m(Object(h.j)(t.id, "report", "mod_menu"))
						}, [K, p, t, x, m]),
						oe = Object(o.useCallback)(() => {
							var e;
							x && (p(Object(y.db)(t.id, !t.hidden, !1, !0)), K((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [K, p, t, x]),
						ie = Object(o.useCallback)(() => {
							const e = x ? y.S : O.e;
							p(e(t.id, !0)), m(x ? Object(h.n)("spam", t.id) : Object(h.j)(t.id, "remove_as_spam", "mod_menu"))
						}, [m, p, t, x]),
						ae = Object(o.useCallback)(e => {
							const s = x ? y.u : O.b;
							p(s(t.id, e));
							const n = e === d.J.ADMIN ? "distinguish_as_admin" : e === d.J.MODERATOR ? "distinguish_as_mod" : "undistinguish";
							m(Object(h.j)(t.id, n, "mod_menu"))
						}, [p, t, x, m]);
					return i.a.createElement(D.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: R.a.overflowButton,
						icon: i.a.createElement(E.a, {
							name: P.a.overflow_horizontal,
							isFilled: !0
						})
					}, i.a.createElement("h6", {
						className: Object(I.a)("text-neutral-content-weak", R.a.overflowHeading)
					}, r.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && i.a.createElement(i.a.Fragment, null, i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						displayText: r.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ie
					}, i.a.createElement(E.a, {
						name: P.a.spam
					})), x && i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						displayText: t.isStickied ? r.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : r.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: Z
					}, i.a.createElement(E.a, {
						name: t.isStickied ? P.a.unpin : P.a.pin
					}))), i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						onClick: Q,
						displayText: q(x, !!(null == t ? void 0 : t.isLocked))
					}, i.a.createElement(E.a, {
						name: P.a.lock,
						isFilled: null == t ? void 0 : t.isLocked
					})), w && i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						displayText: J ? r.fbt._("Undistinguish as a mod", null, {
							hk: "2Nmjxw"
						}) : r.fbt._("Distinguish as a mod", null, {
							hk: "35wmCr"
						}),
						onClick: () => ae(J ? "" : d.J.MODERATOR)
					}, i.a.createElement(E.a, {
						name: J ? P.a.distinguish_fill : P.a.distinguish
					})), N && i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						displayText: T ? r.fbt._("Undistinguish as an admin", null, {
							hk: "BHAJd"
						}) : r.fbt._("Distinguish as an admin", null, {
							hk: "3gaPvB"
						}),
						onClick: () => ae(T ? "" : d.J.ADMIN)
					}, i.a.createElement(E.a, {
						name: T ? P.a.distinguish_fill : P.a.distinguish
					})), !x && (T || J) && w && i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						displayText: t.isStickied ? r.fbt._("Unsticky the comment", null, {
							hk: "18TByd"
						}) : r.fbt._("Sticky the comment", null, {
							hk: "3roZIi"
						}),
						onClick: Z
					}, i.a.createElement(E.a, {
						name: t.isStickied ? P.a.unpin : P.a.pin
					})), x && !t.crosspostParentId && i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						onClick: X,
						displayText: t.isOriginalContent ? r.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : r.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, i.a.createElement(E.a, {
						name: P.a.original
					})), x && i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						onClick: $,
						displayText: t.isNSFW ? r.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : r.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, i.a.createElement(E.a, {
						name: P.a.nsfw
					})), x && S && "subreddit" === t.belongsTo.type && i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						displayText: r.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: ee
					}, i.a.createElement(E.a, {
						name: P.a.crowd_control
					})), i.a.createElement("h6", {
						className: Object(I.a)("text-neutral-content-weak", R.a.overflowHeading)
					}, r.fbt._("Other", null, {
						hk: "2543kN"
					})), i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						displayText: r.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: se
					}, i.a.createElement(E.a, {
						name: P.a.share
					})), x && i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						onClick: ne,
						displayText: r.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, i.a.createElement(E.a, {
						name: P.a.award
					}), i.a.createElement(L.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						displayText: r.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: re
					}, i.a.createElement(E.a, {
						name: P.a.report
					})), x && i.a.createElement(F.b, {
						className: R.a.dropdownRow,
						onClick: oe,
						displayText: t.hidden ? r.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : r.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, i.a.createElement(E.a, {
						name: P.a.hide
					})))
				},
				Q = s("./src/reddit/helpers/trackers/modListing.ts"),
				K = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				Z = s("./src/config.ts"),
				X = s("./src/reddit/components/UserIcon/index.tsx"),
				$ = s("./src/reddit/helpers/name/index.ts"),
				ee = s("./src/reddit/constants/intlSupport.ts"),
				te = s("./src/reddit/helpers/graphql/helpers.ts"),
				se = s("./src/reddit/hooks/useLocale.ts");

			function ne(e) {
				return new Date(Date.now()).getFullYear() === e.getFullYear()
			}
			var re = function(e) {
					let {
						date: t,
						...s
					} = e;
					const n = Object(se.a)(),
						o = "string" == typeof t ? Object(te.g)(t) / d.Xb : t,
						a = new Date(o * d.Xb);
					if (!ee.a) return i.a.createElement(i.a.Fragment, null, a.toLocaleString());
					const c = new Intl.DateTimeFormat(n, {
							month: "short",
							day: "numeric",
							year: ne(a) ? void 0 : "numeric"
						}),
						l = new Intl.DateTimeFormat(n, {
							minute: "numeric",
							hour: "numeric"
						}),
						u = function(e) {
							const t = new Date(Date.now());
							return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
						}(a) ? r.fbt._("Today", null, {
							hk: "1sZpnp"
						}) : c.format(a),
						m = l.format(a);
					return r.fbt._("{date} at {time}", [r.fbt._param("date", u), r.fbt._param("time", m)], {
						hk: "Ot5zO"
					})
				},
				oe = s("./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts"),
				ie = s("./src/reddit/components/CCM/ModPreviousActions/index.m.less"),
				ae = s.n(ie);
			var de = e => {
				let {
					className: t,
					modAction: s,
					postOrCommentId: n
				} = e;
				var r, o, a, d, c;
				const l = (null === (r = s.moderatorInfo) || void 0 === r ? void 0 : r.displayName) || "",
					u = (null === (a = null === (o = s.moderatorInfo) || void 0 === o ? void 0 : o.icon) || void 0 === a ? void 0 : a.url) || "",
					m = !!(null === (c = null === (d = s.moderatorInfo) || void 0 === d ? void 0 : d.profile) || void 0 === c ? void 0 : c.isNsfw),
					p = Object(b.a)(n);
				return i.a.createElement("div", {
					className: Object(I.a)(t, ae.a.row)
				}, i.a.createElement("div", {
					className: ae.a.userIconWrapper
				}, i.a.createElement(X.a, {
					className: ae.a.userIcon,
					iconUrl: u,
					userName: l,
					isNSFW: m
				})), i.a.createElement("div", {
					className: ae.a.details
				}, i.a.createElement("h3", {
					className: ae.a.title
				}, Object(oe.a)(s.action, p ? "SubredditPost" : "")), i.a.createElement("p", {
					className: ae.a.meta
				}, i.a.createElement("a", {
					className: ae.a.userlink,
					href: `${Z.a.redditUrl}/user/${l}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(l)))), i.a.createElement("span", {
					className: ae.a.time
				}, i.a.createElement(re, {
					date: s.createdAt
				})))
			};
			var ce = e => {
				let {
					className: t,
					reportAction: s
				} = e;
				return i.a.createElement("div", {
					className: Object(I.a)(t, ae.a.row)
				}, i.a.createElement(E.a, {
					isFilled: !0,
					name: "report_fill",
					className: ae.a.icon
				}), i.a.createElement("div", {
					className: ae.a.details
				}, i.a.createElement("h3", {
					className: ae.a.title
				}, r.fbt._("Reported for", null, {
					hk: "pm0ot"
				})), !!s.reason && i.a.createElement("p", {
					className: ae.a.meta
				}, s.reason)), i.a.createElement("span", {
					className: ae.a.time
				}, i.a.createElement(re, {
					date: s.createdAt
				})))
			};
			var le = e => {
					const t = Object(a.e)(t => {
						var s, n;
						const r = null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[e.postOrCommentId];
						if (r && r.length) return r.map(e => {
							var s, n;
							return null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.models[e]
						})
					});
					return t ? i.a.createElement("div", {
						className: Object(I.a)(e.className, ae.a.wrapper)
					}, i.a.createElement("h2", {
						className: ae.a.wrapperTitle
					}, r.fbt._("Recent actions", null, {
						hk: "PAtYM"
					})), t.map(t => "ModAction" === (null == t ? void 0 : t.__typename) ? i.a.createElement(de, {
						modAction: t,
						key: t.id,
						postOrCommentId: e.postOrCommentId
					}) : "ReportAction" === (null == t ? void 0 : t.__typename) ? i.a.createElement(ce, {
						reportAction: t,
						key: t.id
					}) : null)) : null
				},
				ue = s("./src/reddit/components/HumanDate/index.tsx"),
				me = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				pe = s.n(me);
			const be = e => {
				let {
					content: t
				} = e;
				var s;
				const n = (null == t ? void 0 : t.approvedBy) || "",
					o = Object(a.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(z.Cb)(e, {
						userName: n
					}) : null),
					d = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: pe.a.userIconWrapper
				}, i.a.createElement(X.a, {
					className: Object(I.a)(pe.a.userIcon),
					iconUrl: null == o ? void 0 : o.accountIcon,
					userName: n,
					isNSFW: !!(null == o ? void 0 : o.isNSFW)
				})), i.a.createElement("div", {
					className: pe.a.statusText
				}, i.a.createElement("p", {
					className: pe.a.status
				}, r.fbt._("Approved", null, {
					hk: "4d15LY"
				})), i.a.createElement("p", null, i.a.createElement("a", {
					className: pe.a.userlink,
					href: `${Z.a.redditUrl}/user/${n}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(n)), d && i.a.createElement(i.a.Fragment, null, " ", i.a.createElement(ue.d, {
					seconds: d
				})))))
			};
			var he = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const fe = e => {
				let {
					content: t
				} = e;
				const s = Object(o.useMemo)(() => {
					var e;
					const s = [];
					(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== d.m || s.push({
						icon: "bot_fill",
						heading: r.fbt._("Blocked by AutoMod", null, {
							hk: "XZuzM"
						})
					});
					for (const n of t.modQueueTriggers || []) switch (n.type) {
						case he.a.AUTOMOD:
							s.push({
								icon: "bot_fill",
								heading: r.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								}),
								reason: n.message
							});
							break;
						case he.a.SHADOWBANNED_SUBMITTER:
							s.push({
								icon: "ban_fill",
								heading: r.fbt._("Blocked by automatic filter", null, {
									hk: "47ub6E"
								}),
								reason: n.message
							});
							break;
						case he.a.HATEFUL_CONTENT:
							s.push({
								icon: "mod_mode_fill",
								heading: r.fbt._("Blocked by automatic filter", null, {
									hk: "42FKya"
								}),
								reason: n.message
							});
							break;
						case he.a.CROWD_CONTROL:
							s.push({
								icon: "crowd_control",
								heading: r.fbt._("Blocked by crowd control", null, {
									hk: "iFsfG"
								}),
								reason: n.message
							});
							break;
						case he.a.BAN_EVASION:
							s.push({
								icon: "ban_fill",
								heading: r.fbt._("Blocked by automatic filter", null, {
									hk: "1Olxtp"
								}),
								reason: n.message
							})
					}
					return s
				}, [t.modQueueTriggers, t.bannedBy]);
				return i.a.createElement("div", {
					className: pe.a.filteredWrapper
				}, s.map((e, t) => {
					let {
						heading: s,
						reason: n,
						icon: r
					} = e;
					return i.a.createElement("div", {
						key: `${s}-${n}-${t}`,
						className: pe.a.filteredRow
					}, i.a.createElement(E.a, {
						isFilled: !0,
						name: r,
						className: Object(I.a)(pe.a.coloredIcon, pe.a.icon)
					}), i.a.createElement("div", {
						className: pe.a.statusText
					}, i.a.createElement("p", {
						className: pe.a.status
					}, s), n && i.a.createElement("p", null, n)))
				}))
			};
			var xe = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				_e = s("./src/reddit/selectors/subreddit.ts");
			const Ee = e => {
				let {
					content: t
				} = e;
				var s;
				const n = Object(a.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(z.Cb)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					o = Object(b.b)(t),
					d = Object(a.e)(e => Object(_e.Y)(e, {
						subredditId: o ? t.belongsTo.id : t.subredditId
					})),
					c = o && t.removedByCategory ? t.removedByCategory : null,
					l = c ? Object(xe.b)(c) : "clear_fill",
					u = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null;
				return i.a.createElement(i.a.Fragment, null, n ? i.a.createElement("div", {
					className: pe.a.userIconWrapper
				}, i.a.createElement(X.a, {
					className: Object(I.a)(pe.a.userIcon),
					iconUrl: null == n ? void 0 : n.accountIcon,
					userName: null == n ? void 0 : n.username,
					isNSFW: null == n ? void 0 : n.isNSFW
				})) : i.a.createElement(E.a, {
					isFilled: !0,
					name: l,
					className: Object(I.a)(pe.a.coloredIcon, pe.a.icon)
				}), i.a.createElement("div", {
					className: pe.a.statusText
				}, i.a.createElement("p", {
					className: pe.a.status
				}, r.fbt._("Removed{spam}{reason}", [r.fbt._param("spam", t.isSpam ? " as spam" : ""), r.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), i.a.createElement("p", null, (null == n ? void 0 : n.username) ? i.a.createElement(i.a.Fragment, null, i.a.createElement("a", {
					className: pe.a.userlink,
					href: `${Z.a.redditUrl}/user/${n.username}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(n.username)), u && i.a.createElement(i.a.Fragment, null, " ", i.a.createElement(ue.d, {
					seconds: u
				}))) : c && Object(xe.e)(c, (null == n ? void 0 : n.username) || null, d.name))))
			};
			var ve = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				Oe = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ge = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ye = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var ke = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx");
			s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx");
			s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx");
			var Ce = s("./src/reddit/icons/fonts/Op/index.m.less"),
				Se = s.n(Ce),
				je = s("./src/lib/lessComponent.tsx");
			je.a.wrapped(e => i.a.createElement("i", {
				className: `${Object(ye.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, i.a.createElement(ye.a, null, e.desc)), "OpIcon", Se.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var we = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				Ne = s.n(we);
			je.a.wrapped(e => i.a.createElement("i", {
				className: `${Object(ye.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", Ne.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var Te = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Re = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				Ie = s.n(Re);
			je.a.wrapped(e => i.a.createElement("i", {
				className: `${Object(ye.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", Ie.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const Pe = e => {
					let {
						content: t
					} = e;
					const s = Object(ge.b)(),
						n = Object(a.d)(),
						d = Object(o.useCallback)(() => {
							const e = Object(b.a)(t.id),
								r = e ? y.eb : O.g,
								o = t.ignoreReports ? "restore_reports" : "ignore_reports",
								i = e ? Object(h.l)(o, t.id) : Object(h.k)(o, t.id);
							n(r(t.id)), s(i)
						}, [t.id, t.ignoreReports, s, n]),
						c = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(E.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(I.a)(pe.a.coloredIcon, pe.a.icon)
					}), i.a.createElement("div", {
						className: pe.a.reportedWrapper
					}, !!t.modReports.length && i.a.createElement("div", {
						className: pe.a.statusText
					}, i.a.createElement("p", {
						className: pe.a.status
					}, r.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [r.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return i.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object($.e)(n), ": ", s)
					})), !!t.userReports.length && i.a.createElement("div", {
						className: pe.a.statusText
					}, i.a.createElement("div", {
						className: pe.a.reportMeta
					}, i.a.createElement("p", {
						className: pe.a.status
					}, r.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [r.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !c && i.a.createElement(Oe.c, {
						className: pe.a.ignoreButton,
						onClick: d,
						text: t.ignoreReports ? r.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : r.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? i.a.createElement(Te.a, {
						className: pe.a.ignoreButtonIcon
					}) : i.a.createElement(ke.a, {
						className: pe.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, r, o, a] = e;
						return n ? void 0 !== o && a ? i.a.createElement(ve.a, {
							key: `user-${n}`,
							reason: n,
							amount: r,
							reportedThingId: t.id,
							isSnoozed: o,
							useNewFormat: !0,
							className: pe.a.snoozabledButton,
							dropdownClassName: pe.a.snoozableDropdown,
							iconClassName: pe.a.snoozeIcon
						}) : i.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", r, ")") : null
					}))))
				},
				Ae = e => {
					let {
						content: t
					} = e;
					const s = N(t),
						r = Object(o.useMemo)(() => {
							switch (s) {
								case n.APPROVED:
									return i.a.createElement(be, {
										content: t
									});
								case n.REMOVED:
								case n.SPAM:
									return i.a.createElement(Ee, {
										content: t
									});
								case n.FILTERED:
									return i.a.createElement(fe, {
										content: t
									});
								case n.REPORTED:
									return i.a.createElement(Pe, {
										content: t
									});
								default:
									return i.a.createElement(o.Fragment, null)
							}
						}, [s, t]),
						[d, c] = Object(o.useState)(!1),
						l = Object(_.a)(),
						u = Object(o.useCallback)(e => {
							var n;
							e.stopPropagation(), c(!d), l(Object(Q.e)((null === (n = t.belongsTo) || void 0 === n ? void 0 : n.id) || t.subredditId, s, Object(b.a)(t.id), !d))
						}, [l, t, d, c, s]),
						m = Object(a.e)(e => Object(K.d)(e)),
						p = Object(a.e)(e => {
							var s, n;
							return !!(null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[t.id])
						});
					if (s === n.UNMODERATED) return null;
					const h = m && p;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: Object(I.a)(pe.a.wrapper, {
							[pe.a.approved]: s === n.APPROVED,
							[pe.a.reported]: s === n.REPORTED,
							[pe.a.opened]: d,
							[pe.a.openable]: h
						}),
						onClick: h ? u : void 0
					}, r, h && i.a.createElement("button", {
						className: pe.a.caretButton
					}, i.a.createElement(E.a, {
						name: d ? P.a.caret_up : P.a.caret_down,
						className: pe.a.caretIcon
					}))), m && p && d && i.a.createElement(le, {
						className: pe.a.previousActions,
						postOrCommentId: t.id
					}))
				},
				Me = (e, t) => Object(h.c)(t, e),
				Le = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: h
					} = e;
					const w = Object(_.a)(),
						T = Object(a.d)(),
						I = N(t),
						P = Object(a.e)(S.b),
						A = Object(b.b)(t),
						M = Object(a.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						L = Object(a.e)(e => Object(j.m)(e, {
							postId: t.id
						})),
						D = Object(p.a)(L),
						[B, F] = Object(o.useState)(!1),
						U = Object(a.e)(e => {
							var s, n;
							return null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === n ? void 0 : n.toUpdate.includes(t.id)
						}),
						V = Object(o.useRef)(null),
						H = Object(o.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t,
									intersectionRatio: s
								} = e;
								s >= .5 ? F(!0) : t || F(!1)
							})
						}, []);
					B && U && T(Object(c.b)(t.id));
					const W = Object(o.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(x.a)(V, H, W);
					const G = [n.REPORTED, n.FILTERED, n.UNMODERATED].includes(I),
						z = [n.APPROVED, n.UNMODERATED, n.REPORTED].includes(I),
						Y = A && D,
						q = I === n.REMOVED && Object(b.b)(t) && t.removedByCategory === v.g.Reddit && !t.isRemoved && !t.isApproved,
						Q = I === n.FILTERED || q,
						K = I === n.REMOVED && !t.modRemovalReason && !Q,
						Z = [n.REMOVED, n.SPAM].indexOf(I) > -1,
						X = A ? f.k : Me,
						$ = Object(o.useCallback)(() => {
							const e = A ? y.r : O.a;
							T(e(t.id)), w(X(t.id, "approve"))
						}, [w, T, t, A, X]),
						ee = Object(o.useCallback)(() => {
							const e = A ? y.S : O.e;
							T(e(t.id, !1)), t.isRemoved && t.bannedBy === d.m ? w(X(t.id, "confirm_remove")) : w(X(t.id, "remove"))
						}, [w, T, t, A, X]),
						te = Object(o.useCallback)(() => {
							T(Object(C.fetchReasonsAndOpenModal)(A ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, A, T]),
						se = Object(o.useCallback)(() => {
							T(Object(g.i)(Object(l.b)(t.id, !1))), w(Object(f.k)(t.id, "post_flair_picker"))
						}, [w, T, t]),
						ne = Object(o.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							A && T(Object(k.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [T, A, t]);
					return i.a.createElement("div", {
						className: R.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: V
					}, i.a.createElement(Ae, {
						content: t
					}), i.a.createElement("div", {
						className: R.a.actionBar
					}, G && i.a.createElement(m.t, {
						className: [R.a.button, R.a.approve].join(" "),
						Icon: Object(E.b)("checkmark"),
						iconPosition: m.h.L,
						iconClassName: R.a.icon,
						onClick: $,
						text: r.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), z && i.a.createElement(m.t, {
						className: R.a.button,
						Icon: Object(E.b)("close"),
						iconPosition: m.h.L,
						iconClassName: R.a.icon,
						onClick: ee,
						text: r.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), K && i.a.createElement(m.t, {
						className: R.a.button,
						onClick: te,
						text: r.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), Q && i.a.createElement(m.t, {
						className: R.a.button,
						Icon: Object(E.b)("close"),
						iconPosition: m.h.L,
						iconClassName: R.a.icon,
						onClick: ee,
						text: r.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), Z && i.a.createElement(m.t, {
						className: R.a.button,
						Icon: Object(E.b)("checkmark"),
						iconPosition: m.h.L,
						iconClassName: R.a.icon,
						onClick: $,
						text: r.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), Y && i.a.createElement(m.t, {
						className: R.a.button,
						Icon: Object(E.b)("tag"),
						priority: m.c.Plain,
						iconPosition: m.h.L,
						iconClassName: R.a.icon,
						onClick: se,
						text: r.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), A && P === Object(l.b)(t.id, !1) && i.a.createElement(l.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(l.b)(t.id, !1),
						onFlairChanged: ne
					}), i.a.createElement(J, {
						content: t,
						hostPostData: h,
						listingKey: s,
						moderatorPermissions: L
					}), M && i.a.createElement(u.a, {
						withOverlay: !0,
						postId: A ? t.id : void 0,
						commentId: A ? void 0 : t.id
					})))
				}
		},
		"./src/reddit/components/ModQueueActivitySummaryCards/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/redditGQL/types.ts");
			const o = (e, t) => {
				switch (e) {
					case r.y.AddNote:
						return n.fbt._("Added mod note", null, {
							hk: "4EQdI3"
						});
					case r.y.AddRemovalReason:
						return n.fbt._("Added removal reason", null, {
							hk: "3sDuRA"
						});
					case r.y.AdjustPostCrowdControlLevel:
						return n.fbt._("Adjusted post crowd control level", null, {
							hk: "3Ru27s"
						});
					case r.y.EnablePostCrowdControlFilter:
						return n.fbt._("Enabled post crowd control level", null, {
							hk: "bnrbt"
						});
					case r.y.DisablePostCrowdControlFilter:
						return n.fbt._("Disabled post crowd control level", null, {
							hk: "3Pn8Cm"
						});
					case r.y.ApproveComment:
						return n.fbt._("Approved comment", null, {
							hk: "15N4AH"
						});
					case r.y.ApproveLink:
						return n.fbt._("Approved post", null, {
							hk: "2pHeO6"
						});
					case r.y.BanUser:
						return n.fbt._("Banned user", null, {
							hk: "30ZUto"
						});
					case r.y.Collections:
						return n.fbt._("Collections", null, {
							hk: "4DLN5q"
						});
					case r.y.DeleteNote:
						return n.fbt._("Deleted mod note", null, {
							hk: "24mUGI"
						});
					case r.y.Distinguish:
						return "SubredditPost" === t ? n.fbt._("Post distinguished", null, {
							hk: "1EzjPd"
						}) : n.fbt._("Comment distinguished", null, {
							hk: "3TNqQa"
						});
					case r.y.EditFlair:
						return "SubredditPost" === t ? n.fbt._("Post flair edited", null, {
							hk: "2oj67i"
						}) : n.fbt._("User flair edited", null, {
							hk: "2WAVS8"
						});
					case r.y.IgnoreReports:
						return "SubredditPost" === t ? n.fbt._("Post reports ignored", null, {
							hk: "1HbgCS"
						}) : n.fbt._("Comment reports ignored", null, {
							hk: "3eLRwL"
						});
					case r.y.Lock:
						return "SubredditPost" === t ? n.fbt._("Post locked", null, {
							hk: "45Huvj"
						}) : n.fbt._("Comment locked", null, {
							hk: "2HzroI"
						});
					case r.y.MarkNsfw:
						return n.fbt._("Toggled post NSFW", null, {
							hk: "eAiVp"
						});
					case r.y.MarkOriginalContent:
						return n.fbt._("Toggled post Original Content", null, {
							hk: "46B0Bk"
						});
					case r.y.MuteUser:
						return n.fbt._("Muted user", null, {
							hk: "31YWRG"
						});
					case r.y.RemoveComment:
						return n.fbt._("Removed comment", null, {
							hk: "2qfmzC"
						});
					case r.y.RemoveLink:
						return n.fbt._("Removed post", null, {
							hk: "2leMij"
						});
					case r.y.SetContestMode:
						return n.fbt._("Set post contest mode", null, {
							hk: "2iE074"
						});
					case r.y.SetSuggestedsort:
						return n.fbt._("Set post suggested sort", null, {
							hk: "3zw33Q"
						});
					case r.y.ShowComment:
						return n.fbt._("Showed comment", null, {
							hk: "1xvaXS"
						});
					case r.y.SpamComment:
						return n.fbt._("Marked comment as spam", null, {
							hk: "E6CLe"
						});
					case r.y.SpamLink:
						return n.fbt._("Removed post as spam", null, {
							hk: "1Al2xz"
						});
					case r.y.Spoiler:
						return n.fbt._("Added spoiler tag", null, {
							hk: "254Axx"
						});
					case r.y.Sticky:
						return "SubredditPost" === t ? n.fbt._("Post stickied", null, {
							hk: "4m9DRx"
						}) : n.fbt._("Comment stickied", null, {
							hk: "1JIPzu"
						});
					case r.y.UnbanUser:
						return n.fbt._("Unbanned user", null, {
							hk: "3U4olT"
						});
					case r.y.Unlock:
						return "SubredditPost" === t ? n.fbt._("Post unlocked", null, {
							hk: "3IXrG"
						}) : n.fbt._("Comment unlocked", null, {
							hk: "4v2jmJ"
						});
					case r.y.UnmuteUser:
						return n.fbt._("Unmuted user", null, {
							hk: "2aB30x"
						});
					case r.y.UnsetContestMode:
						return n.fbt._("Unset post contest mode", null, {
							hk: "W4Yjf"
						});
					case r.y.UnsnoozeReports:
						return "SubredditPost" === t ? n.fbt._("Post unsnoozed", null, {
							hk: "3jp8zr"
						}) : n.fbt._("Comment unsnoozed", null, {
							hk: "2x01Eq"
						});
					case r.y.Unspoiler:
						return n.fbt._("Removed spoiler tag", null, {
							hk: "2GvhDn"
						});
					case r.y.Unsticky:
						return "SubredditPost" === t ? n.fbt._("Post unstickied", null, {
							hk: "KXoHl"
						}) : n.fbt._("Comment unstickied", null, {
							hk: "dpEKC"
						});
					case r.y.UpdateRemovalReason:
					case r.y.WikiBanned:
					case r.y.WikiContributor:
					case r.y.WikiPageListed:
					case r.y.WikiPermLevel:
					case r.y.WikiRevise:
					case r.y.WikiUnbanned:
					case r.y.AcceptModeratorInvite:
					case r.y.AddCommunityTopics:
					case r.y.AddContributor:
					case r.y.AddModerator:
					case r.y.CreateAward:
					case r.y.CreateScheduledPost:
					case r.y.CreateRemovalReason:
					case r.y.CommunityStyling:
					case r.y.CommunityWidgets:
					case r.y.CreateRule:
					case r.y.DeleteAward:
					case r.y.DeleteRule:
					case r.y.DeleteScheduledPost:
					case r.y.DeleteOverriddenClassification:
					case r.y.DeleteRemovalReason:
					case r.y.DisableAward:
					case r.y.EditPostRequirements:
					case r.y.EditRule:
					case r.y.EditScheduledPost:
					case r.y.EditSettings:
					case r.y.EnableAward:
					case r.y.Events:
					case r.y.HiddenAward:
					case r.y.InviteModerator:
					case r.y.InviteSubscriber:
					case r.y.ModAwardGiven:
					case r.y.ModmailEnrollment:
					case r.y.OverrideClassification:
					case r.y.RemoveCommunityTopics:
					case r.y.RemoveContributor:
					case r.y.RemoveModerator:
					case r.y.RemoveWikiContributor:
					case r.y.ReorderModerators:
					case r.y.ReorderRules:
					case r.y.SetPermissions:
					case r.y.SnoozeReports:
					case r.y.SubmitContentRatingSurvey:
					case r.y.SubmitScheduledPost:
					case r.y.UnignoreReports:
					case r.y.UninviteModerator:
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
					seconds: e.poll.endsAt / n.Xb
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				d = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				l = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				m = s.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: f,
					isOverlay: x,
					isVoteCountAnimation: _,
					postId: E,
					shouldShowUpvoteRatioOnHover: v
				} = e, O = `upvote-button-${t.id}${x?"-overlay":""}`;
				return r.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: f
				}, n && r.a.createElement(d.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), r.a.createElement(a.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: s,
					redditStyle: f,
					upvoteTooltipId: O,
					isVoteCountAnimation: _,
					isCountAnimShadowTestEnabled: p,
					postId: E,
					scoreClassName: Object(o.a)(m.a.score, {
						[m.a.allowPointerEvents]: v
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
				return B
			})), s.d(t, "a", (function() {
				return K
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
				v = s("./src/reddit/hooks/useClickSourceData.ts"),
				O = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				g = s("./src/reddit/hooks/usePostContext.ts"),
				y = s("./src/reddit/hooks/useTheme.ts"),
				k = s("./src/reddit/icons/fonts/index.tsx"),
				C = s("./src/reddit/models/Flair/index.ts"),
				S = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				N = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = s("./src/lib/getShortenedLink.ts"),
				R = s("./src/reddit/components/FlairWrapper/index.tsx"),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				P = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				M = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				L = s.n(M);
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
						className: Object(u.a)(e.className, L.a.proposalMetaData)
					}, i.a.createElement("span", null, I.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [I.fbt._param("count", Object(P.a)(n)), I.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(A.a, {
						className: L.a.proposalExpiry,
						poll: t
					}))
				})),
				U = s("./src/reddit/components/SEOTitle/index.tsx"),
				V = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				H = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				G = s("./src/telemetry/models/Outbound.ts"),
				z = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				Y = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				q = s("./src/reddit/components/PostTitle/index.m.less"),
				J = s.n(q);

			function Q() {
				return (Q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(B || (B = {}));
			const K = e => {
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
							m = J.a.ExtraLarge;
							break;
						case B.Large:
							m = J.a.Large;
							break;
						case B.Medium:
							m = J.a.Medium;
							break;
						case B.Small:
							m = J.a.Small;
							break;
						case B.ExtraSmall:
							m = J.a.ExtraSmall;
							break;
						case B.Metadata:
							m = J.a.Metadata
					}
					return i.a.createElement("div", {
						className: Object(u.a)(J.a.Title, a, m, {
							[J.a.isNoWrap]: r,
							[J.a.blur]: c
						}),
						style: {
							"--posttitletextcolor": s || Object(N.a)({
								redditStyle: d,
								theme: l
							}).titleText
						}
					}, n ? i.a.createElement(U.b, {
						type: n
					}, o) : o)
				},
				Z = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: r,
						...o
					} = e;
					return i.a.createElement(d.a, Q({}, o, {
						className: Object(u.a)(t, J.a.styledLink, {
							[J.a.isVisitedEnabled]: !s
						})
					}), r)
				},
				X = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: r
					} = e;
					return i.a.createElement("div", {
						className: Object(u.a)(J.a.titleContainer, n, {
							[J.a.isNoWrap]: s,
							[J.a.isVisitedEnabled]: !t
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
					isNsfwBlurSubreddit: H.e,
					shouldOpenPostInNewTab: W.lb
				}),
				ee = e => {
					const {
						post: t
					} = e, {
						isSponsored: s
					} = t, n = Object(a.d)(), r = Object(v.a)(), o = Object(a.e)(V.b), d = Object(a.e)(V.c), c = e => {
						(o || d) && (e.preventDefault(), n(Object(x.Z)(Object(E.b)(t.permalink), t.id))), t.isSponsored && Object(j.A)(t) && n(Object(x.y)(t, _.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(X, {
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
						return i.a.createElement(X, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s && !Object(j.A)(t) ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? i.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, i.a.createElement(te, t)) : i.a.createElement(te, t)
						})(t, e) : i.a.createElement(Z, {
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
					return i.a.createElement(K, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: a,
						size: e.size,
						titleColor: e.titleColor,
						titleType: o
					}, t && i.a.createElement(R.a, {
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
					} = n, o = e.isCommentsPage ? G.SourceElement.PostLink : G.SourceElement.ListingPostLink;
					if (Object(O.a)()) return null;
					if (s && n.isNSFW) return null;
					const a = !t && !e.isCrosspost && e.size !== B.Large && !n.isSponsored && (n.source || n.media && (n.media.type === S.o.GIFVIDEO || n.media.type === S.o.IMAGE || n.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return i.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(S.E)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source,
							sourceElement: o
						}, Object(T.a)(n), !n.isSponsored && i.a.createElement(k.a, {
							name: "external_link",
							className: J.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== B.Large && e.size !== B.ExtraLarge) return i.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source,
						sourceElement: o
					}, Object(T.a)(n), !n.isSponsored && i.a.createElement(k.a, {
						name: "external_link",
						className: J.a.outboundLinkIcon
					}));
					return null
				};
			class ne extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${J.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(r.c)(.45,Object(N.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(r.c)(.45,this.props.titleColor||Object(N.a)(this.props).titleText,Object(N.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(r.c)(.45,Object(N.a)(this.props).bodyText,Object(N.a)(this.props).body)};\n        }\n      `
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
					} = this.props, p = s === C.b.Left, b = Object(R.b)(d), {
						leftFlair: h,
						rightFlair: f
					} = Object(z.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: l
					}), x = !o && !r && !t, _ = x && h && h.length > 0, E = x && f && f.length > 0;
					return i.a.createElement("div", {
						className: Object(u.a)(J.a.Component, e, d.id),
						ref: this.props.innerRef,
						"data-adclicklocation": Y.a.TITLE,
						onClick: m
					}, !c && _ && i.a.createElement(R.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: d,
						sendEvent: this.props.sendEvent
					}), !Object(w.b)(d) && i.a.createElement(ee, Q({}, this.props, {
						leftFlair: c ? h : void 0
					})), a && i.a.createElement(F, {
						className: J.a.pollMeta,
						pollId: a.id
					}), i.a.createElement(se, this.props), E && i.a.createElement(R.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: d,
						sendEvent: this.props.sendEvent
					}), i.a.createElement("div", {
						className: J.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = i.a.memo((function(e) {
				const t = Object(p.gb)(),
					s = Object(p.x)(t),
					n = Object(g.a)(),
					r = Object(a.e)(r => $(r, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					o = Object(y.a)(),
					d = Object(m.b)();
				return n ? i.a.createElement(ne, Q({
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
				v = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				k = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/PostTopLine/index.m.less"),
				j = s.n(S);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideNSFWPref: S,
					hostPostData: w,
					iconClassName: N,
					inSubredditOrProfile: T,
					isCommentsPage: R,
					isCompactPinnedPost: I,
					isCurrentUserProfilePost: P,
					isModQueuePage: A,
					isModWithUserNotesPermissions: M,
					isOverlay: L,
					isTopicPage: D,
					listingKey: B,
					post: F,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: V,
					showSubreddit: H,
					showSubredditIcon: W,
					subredditOrProfile: G,
					isFollowed: z,
					shouldShowFollowButton: Y,
					onFollowPostClick: q
				} = e;
				const J = D,
					Q = G && Object(y.i)(G),
					K = Object(i.e)(e => {
						if (!Q) return !0;
						const t = Object(C.Ib)(e, F.author || "");
						return !t || t.enableFollowers
					}),
					Z = Object(i.e)(k.a);
				return o.a.createElement("div", {
					className: Object(a.a)(j.a.container, t)
				}, H && G && o.a.createElement("div", {
					className: j.a.subredditIconWrapper
				}, o.a.createElement(h.a, {
					"data-click-id": "subreddit",
					to: G.url
				}, W && o.a.createElement(b.b, {
					className: Object(a.a)(j.a.subredditIcon, N),
					shouldHideNsfwIcon: S,
					subredditOrProfile: G
				}))), o.a.createElement("div", {
					className: j.a.everythingElseWrapper
				}, H && o.a.createElement(l.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), o.a.createElement(p.g, {
					className: j.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: M,
					tooltipType: L ? p.f.Lightbox : void 0,
					post: F,
					showSub: H,
					subredditOrProfile: G
				}), o.a.createElement(m.a, {
					className: j.a.postBadges,
					displayText: G ? G.displayText : null,
					inSubredditOrProfile: T,
					isCompactPinnedPost: I,
					post: F,
					tooltipType: L ? p.f.Lightbox : void 0
				}), !J && o.a.createElement(d.a, {
					isPostDetail: R,
					thing: F,
					tooltipType: L ? p.f.Lightbox : void 0
				}), M && o.a.createElement(c.a, {
					postOrComment: F,
					className: j.a.addModNote
				})), G && K && H && U && !P && o.a.createElement(f.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => Object(v.k)(F.id, e ? "unsubscribe" : "subscribe", "post", B, w),
					identifier: {
						name: G.name,
						type: Q ? x.a.PROFILE : x.a.SUBREDDIT
					},
					postId: F.id,
					size: _.d.XS,
					priority: Z ? _.c.Secondary : void 0,
					isShredditParityEnabled: Z
				}), V && o.a.createElement(E.b, {
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(g.E)(F),
					source: F.source
				}, o.a.createElement(O.a, {
					className: j.a.outboundLinkIcon
				})), Y && K && o.a.createElement(u.a, {
					isFilled: !!z,
					onClick: q,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
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
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				f = s("./src/reddit/helpers/isComment.ts"),
				x = s("./src/reddit/helpers/trackers/modTools.ts"),
				_ = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				E = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				v = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				O = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				g = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				k = s.n(y);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = (e, t) => `SnoozableReport--${t}--${e}`, j = Object(o.b)(() => Object(i.c)({
				isDropdownOpen: (e, t) => Object(g.b)(S(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(u.h)({
					tooltipId: S(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(f.a)(t.reportedThingId) ? e(Object(c.h)(t.reportedThingId, t.reason, s)) : e(Object(l.fb)(t.reportedThingId, t.reason, s))
				}
			})), w = Object(m.a)(b.a);
			class N extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? d.kc.None : d.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(x.p)(Object(f.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: s,
						openDropdown: n,
						isDropdownOpen: o,
						isSnoozed: i,
						useNewFormat: d,
						className: c,
						dropdownClassName: l,
						iconClassName: u
					} = this.props, m = S(e, s);
					return r.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, r.a.createElement(h.b, {
						id: m,
						className: Object(a.a)(k.a.DropdownLabelContainer, c),
						onClick: n
					}, r.a.createElement("label", {
						htmlFor: m,
						className: k.a.DropdownLabel
					}, i ? C._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : d ? `${e} (${t})` : `${t}: ${e}`, o ? r.a.createElement(E.a, null) : r.a.createElement(_.a, null))), r.a.createElement(w, {
						isOpen: o,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, r.a.createElement("button", {
						className: Object(a.a)(k.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, r.a.createElement("div", {
						className: k.a.SnoozeButtonContent
					}, i ? r.a.createElement(r.a.Fragment, null, r.a.createElement(O.a, {
						className: u
					}), C._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : r.a.createElement(r.a.Fragment, null, r.a.createElement(v.a, {
						className: u
					}), C._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = j(Object(p.c)(N))
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
				v = Object(c.a)(m.a.wrapped(d.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
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
					}), o.a.createElement(v, {
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
				return v
			})), s.d(t, "u", (function() {
				return O
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "n", (function() {
				return C
			})), s.d(t, "t", (function() {
				return S
			})), s.d(t, "p", (function() {
				return j
			})), s.d(t, "o", (function() {
				return w
			})), s.d(t, "q", (function() {
				return N
			})), s.d(t, "s", (function() {
				return T
			})), s.d(t, "r", (function() {
				return R
			})), s.d(t, "a", (function() {
				return I
			})), s.d(t, "w", (function() {
				return P
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
				v = d.a.em("I", a.a),
				O = d.a.span("U", a.a),
				g = e => r.a.createElement("del", e),
				y = d.a.sub("Sub", a.a),
				k = d.a.sup("Sup", a.a),
				C = d.a.table("Table", a.a),
				S = d.a.tr("Tr", a.a),
				j = d.a.td("Tdl", a.a),
				w = d.a.td("Tdc", a.a),
				N = d.a.td("Tdr", a.a),
				T = d.a.th("Thl", a.a),
				R = d.a.th("Thc", a.a),
				I = (d.a.th("Thr", a.a), d.a.wrapped(e => r.a.createElement(o.b, e), "A", a.a)),
				P = d.a.wrapped(c.a, "A", a.a)
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
				return g
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "b", (function() {
				return k
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
				v = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.v || !!e.c && !e.c.every(e => e.e === p.B && !e.t),
				O = e => o()(e, v),
				g = e => null == e ? void 0 : e.findIndex(v),
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
						renderMediaAsLinks: v,
						rtJsonElementProps: y,
						useExplicitTextColor: k,
						shouldBlur: C,
						onClickRevealSpoilerText: S,
						mediaProps: j
					} = e, w = n.document, N = [], T = e.mediaMetadata || null, R = g(w), I = O(w);
					if (C && !r && !i) return a.a.createElement(_, {
						className: Object(d.a)(m.j, s)
					}, a.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!o, !!c))));
					if (-1 !== R)
						for (let a = R; a <= I; a++) {
							const e = w[a];
							switch (e.e) {
								case p.k:
									N.push(h.c(e, y, a));
									break;
								case p.l:
									N.push(h.d(a));
									break;
								case p.b:
									N.push(h.a(e, T, y, a));
									break;
								case p.c:
									N.push(h.b(e, a));
									break;
								case p.p:
									N.push(h.f(e, T, y, a, S));
									break;
								case p.A:
									N.push(h.h(e, T, y, a, S));
									break;
								case p.v:
									N.push(h.g(e, T, y, a, S, j));
									break;
								case p.h:
									N.push(Object(b.a)(e, a));
									break;
								case p.m:
								case p.a:
								case p.E:
									N.push(...Object(b.b)({
										node: e,
										key: a,
										rtJsonElementProps: y,
										mediaMetadata: T,
										renderMediaAsLinks: v,
										postId: f,
										altText: t,
										mediaProps: j
									}))
							}
						}
					return k ? a.a.createElement(_, {
						className: Object(d.a)(m.j, s)
					}, N) : a.a.createElement(E, {
						className: Object(d.a)(m.j, s),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, N)
				};
			class k extends a.a.Component {
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
				v = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				O = s("./src/reddit/hooks/useMounted.ts");
			var g = e => o.a.createElement("svg", {
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
				k = s.n(y);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var S = e => {
					let {
						id: t,
						mp4Url: s,
						className: n,
						externalLink: i,
						onClick: a
					} = e;
					const d = i || Object(b.h)(t),
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
									const s = Object(b.g)(e);
									t((await Object(E.a)(s)).data.user)
								}(t, e => {
									h.current && p(e)
								}))
							})
						}), [u, t, l, h]);
					Object(v.a)(c, f);
					const x = (null == m ? void 0 : m.display_name) || (null == m ? void 0 : m.username);
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement(_.a, {
						href: d,
						target: "_blank",
						className: k.a.anchor
					}, s ? o.a.createElement("video", {
						className: k.a.giphy,
						loop: !0,
						autoPlay: !0,
						muted: !0,
						onClick: a,
						ref: c
					}, o.a.createElement("source", {
						src: s
					})) : d), o.a.createElement("div", {
						className: k.a.attributionRow
					}, o.a.createElement(g, {
						className: k.a.giphyLogo
					}), o.a.createElement("span", {
						className: k.a.attributionText
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
				j = s("./src/reddit/components/RichTextJson/media.m.less"),
				w = s.n(j),
				N = s("./src/lib/lessComponent.tsx"),
				T = s("./src/reddit/helpers/media/index.ts");

			function R() {
				return (R = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const I = /\/(\w+)\/asset\/(\w+)\//,
				P = N.a.wrapped(_.a, "A", w.a),
				A = N.a.wrapped(l.a, "ImageBox", w.a),
				M = N.a.wrapped(e => o.a.createElement("p", e), "Caption", w.a),
				L = N.a.div("Placeholder", w.a),
				D = N.a.wrapped(e => {
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
					}), o.a.createElement(L, R({
						className: Object(i.a)(t, {
							[w.a.renderSmallMedia]: a,
							[w.a.reload]: !!d
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, c), !!d && u && o.a.createElement(p.t, {
						priority: p.c.Plain,
						className: w.a.ModalTopicsErrorButton,
						Icon: Object(h.b)("refresh"),
						text: n.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: d
					}))
				}, "Placeholder", w.a),
				B = (e, t) => {
					let {
						c: s,
						x: n,
						y: r
					} = e;
					return o.a.createElement("div", {
						className: w.a.MediaWrapper
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
						const t = I.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(s.dashUrl))), r ? o.a.createElement(P, {
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
						return m && (b = Object(T.i)(240, 20, d, c)), o.a.createElement("div", {
							className: Object(i.a)(w.a.MediaWrapper, {
								[w.a.mHasCaption]: s,
								[w.a.hasSmallMedia]: m
							})
						}, o.a.createElement(u.a, {
							height: b.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: b.x
						}, o.a.createElement(A, {
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
						return Object(b.i)(a) ? o.a.createElement(S, {
							key: t,
							id: a,
							mp4Url: c.mp4,
							className: w.a.CommentGiphyWrapper,
							externalLink: d,
							onClick: null == r ? void 0 : r.onClick
						}) : o.a.createElement("div", {
							className: Object(i.a)(w.a.MediaWrapper, {
								[w.a.mHasCaption]: s,
								[w.a.hasSmallMedia]: null == r ? void 0 : r.renderSmallMedia
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
							className: Object(i.a)(w.a.MediaWrapper, {
								[w.a.mHasCaption]: s
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
					})(h, s, !!t.c, c)), t.c && _.push(((e, t) => o.a.createElement(M, {
						key: t
					}, e))(t.c, `caption${s}`)), _
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return R
			})), s.d(t, "d", (function() {
				return I
			})), s.d(t, "a", (function() {
				return P
			})), s.d(t, "b", (function() {
				return A
			})), s.d(t, "f", (function() {
				return M
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
			var v;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(v || (v = {}));
			class O extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = v.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = v.Inside, setTimeout(() => {
							this.mouseLocation === v.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, _)
					}, this.onMouseOut = () => {
						this.mouseLocation = v.Outside, setTimeout(() => {
							this.mouseLocation !== v.Inside && this.setState({
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
			var g = Object(l.c)(O),
				y = s("./src/reddit/components/RichTextJson/media.tsx"),
				k = s("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				C = s("./src/reddit/components/SubredditMention/index.tsx"),
				S = s("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				j = s("./src/reddit/helpers/isComment.ts"),
				w = s("./src/reddit/helpers/isPost.ts"),
				N = s("./src/reddit/helpers/richTextJson/index.ts"),
				T = s("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const R = (e, t, s) => {
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
				I = e => a.a.createElement(d.e, {
					key: e
				}),
				P = (e, t, s, n, r) => {
					const o = e.c;
					if (!o) return;
					const i = o.length,
						c = [];
					for (let a = 0; a < i; a++) c.push(L(o[a], t, s, a, r));
					return a.a.createElement(d.c, {
						key: n
					}, c)
				},
				A = (e, t) => {
					const s = e.c;
					return a.a.createElement(d.k, {
						key: t
					}, a.a.createElement(d.h, null, s.reduce((e, t, s, n) => e += t.t + (s < n.length ? "\n" : ""), "")))
				},
				M = (e, t, s, n, r) => {
					const o = e.c,
						i = [],
						c = o.length;
					for (let u = 0; u < c; u++) {
						const e = o[u].c;
						e && e.length && i.push(a.a.createElement(d.g, {
							key: u
						}, e.map((e, n) => L(e, t, s, n, r))))
					}
					const l = e.o ? d.i : d.v;
					return a.a.createElement(l, {
						key: n
					}, i)
				},
				L = (e, t, s, n, r) => {
					switch (e.e) {
						case m.b:
							return P(e, t, s, n, r);
						case m.c:
							return A(e, n);
						case m.k:
							return R(e, s, n);
						case m.l:
							return I(n);
						case m.p:
							return M(e, t, s, n, r);
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
							} = G(e.a),
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
					return i.e !== m.m && i.e !== m.a || !Object(N.i)(i.id) ? a.a.createElement(d.j, {
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
						if (o.e === m.B) r.push(V(o, i));
						else if (o.e === m.y) r.push(a.a.createElement(k.a, {
							key: i,
							onClickReveal: n
						}, F(o.c, t, s, n)));
						else if (o.e === m.n) r.push(a.a.createElement("br", {
							key: i
						}));
						else if (o.e === m.m || o.e === m.a) {
							if (o.id.startsWith("emote|")) {
								const e = m.F(t, o.id);
								e && r.push(a.a.createElement(g, {
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
							const n = V({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(S.b)(e.u)) return a.a.createElement(d.w, {
								to: e.u,
								key: s,
								title: e.a
							}, n);
							let r, o;
							const i = Object(T.a)(t),
								c = t.renderingObjectInfo;
							return c && Object(w.b)(c) && (r = c.postId), c && Object(j.b)(c) && (o = c.id, r = c.postId), a.a.createElement(d.a, {
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
				V = (e, t) => {
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
				H = {
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
					return n = o()(H, (t, n, r) => e & parseInt(r, 10) ? a.a.createElement(n, {
						key: s
					}, t) : t, n)
				},
				G = e => {
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
				return g
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
				v = Object(i.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				O = Object(o.b)(v),
				g = e => {
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
						case h.Qf.SmIcon:
							return r.a.createElement(p, {
								subredditName: n,
								rtJsonElementProps: i
							});
						case h.Qf.SmIconHc:
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
			t.b = O(g)
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
		"./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			const r = e => {
				const {
					moderation: t,
					...s
				} = e, {
					lastModAction: r,
					activeModerators: o
				} = (null == t ? void 0 : t.modActivitySummary) || {}, i = [], a = {};
				null == o || o.edges.map(e => {
					if (!(null == e ? void 0 : e.node)) return;
					const {
						lastModAction: t,
						moderator: s
					} = e.node;
					if (!s) return;
					const n = null == s ? void 0 : s.id;
					n && (i.push(n), a[n] || (a[n] = {
						info: {},
						lastModAction: {}
					}), a[n].info = s, a[n].lastModAction = {
						...t
					})
				});
				const d = {
					lastModAction: r,
					activeMods: i
				};
				return {
					subreddit: Object(n.a)(s),
					summary: {
						sub: d,
						mods: a
					}
				}
			}
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
				l = e => e.author !== n.H ? null : e.body === n.I ? d.c.User : e.body === n.Qb ? d.c.Moderator : null
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
		"./src/reddit/helpers/trackers/modListing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return r
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			}));
			var n = s("./src/reddit/selectors/telemetry.ts");
			const r = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "hide_subreddit"
				}),
				o = () => e => ({
					source: "r_mod",
					action: "click",
					noun: "unhide_subreddit"
				}),
				i = e => t => ({
					source: "r_mod",
					action: "click",
					noun: e ? "unfiltered_subreddits" : "filtered_subreddits"
				}),
				a = (e, t) => s => ({
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
				d = (e, t, s) => r => ({
					source: "moderator",
					action: "click",
					noun: "subreddit_filter",
					...Object(n.o)(r),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "activity_card" : "queue_filters",
						reason: e ? "active" : "inactive"
					},
					subreddit: {
						name: t.toLowerCase(),
						...Object(n.nb)(r, t)
					}
				}),
				c = (e, t, s, r) => o => ({
					source: "moderator",
					action: "click",
					noun: r ? "expand_previous_actions" : "collapse_previous_actions",
					...Object(n.o)(o),
					actionInfo: {
						pageType: "moderation_pages_modqueue",
						paneName: s ? "post" : "comment",
						reason: t
					},
					subreddit: Object(n.mb)(o, e)
				})
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
				return v
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "t", (function() {
				return k
			})), s.d(t, "j", (function() {
				return C
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "x", (function() {
				return j
			})), s.d(t, "u", (function() {
				return w
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "s", (function() {
				return T
			})), s.d(t, "v", (function() {
				return R
			})), s.d(t, "w", (function() {
				return I
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
				v = e => t => ({
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
				g = e => t => ({
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
				k = (e, t, s) => i => ({
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
				S = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...o(e)
				}),
				j = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: i(t)
				}),
				N = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				T = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: i(t)
				}),
				R = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				I = () => (e, t) => {
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
				return v
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "e", (function() {
				return g
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
				v = e => t => ({
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
				g = e => t => ({
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
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("history", e.isFilled), e.className)
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
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("expand", e.isFilled), e.className)
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
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", a.a);
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
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = s.n(i);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: `${Object(o.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = d
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
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("info",e.isFilled)} ${e.className}`
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				d = s.n(a);
			t.a = e => r.a.createElement("i", {
				className: Object(o.a)(d.a.ModSettings, Object(i.b)("mod", e.isFilled), e.className)
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
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("edit",e.isFilled)} ${e.className}`
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
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				onMouseUp: e.onMouseUp,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 40 40"
			}, r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				a = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.clock, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 11 11"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M5 3.75C5 3.47388 5.22363 3.25 5.5 3.25C5.77637 3.25 6 3.47388 6 3.75V5.53735L7.81689 6.58643C8.05615 6.72449 8.13818 7.03027 8 7.26941C7.86182 7.50861 7.55615 7.59052 7.31689 7.45245L5.25049 6.25934C5.07861 6.16028 4.98779 5.97504 5.00146 5.78992L5 5.75V3.75Z",
				fill: "inherit"
			}), r.a.createElement("path", {
				fillRule: "evenodd",
				clipRule: "evenodd",
				d: "M11 5.5C11 8.53754 8.5376 11 5.5 11C2.4624 11 0 8.53754 0 5.5C0 2.46246 2.4624 0 5.5 0C8.5376 0 11 2.46246 11 5.5ZM10 5.5C10 7.98529 7.98535 10 5.5 10C3.01465 10 1 7.98529 1 5.5C1 3.01471 3.01465 1 5.5 1C7.98535 1 10 3.01471 10 5.5Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const d = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), r.a.createElement("path", {
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
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				a = s.n(i);
			t.a = e => r.a.createElement("svg", {
				className: Object(o.a)(a.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
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
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			}));
			var n = s("./src/reddit/helpers/isPost.ts");
			const r = 50,
				o = 50,
				i = 1e4,
				a = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(n.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				u = (e, t) => {
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
				return v
			})), s.d(t, "j", (function() {
				return O
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "n", (function() {
				return y
			})), s.d(t, "b", (function() {
				return k
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "q", (function() {
				return S
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
				v = e => b[h[e]],
				O = e => f[h[e]];
			var g;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(g || (g = {}));
			const y = e => {
					switch (e) {
						case g.Hourly:
						case g.Daily:
						case g.Weekly:
						case g.Monthly:
							return !0
					}
					return !1
				},
				k = "custom",
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
				S = e => "frequency" in e && !!e.frequency
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
				r = s("./src/reddit/actions/modQueue/constants.ts");
			var o = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case r.m: {
							const {
								targetID: s
							} = t.payload;
							return e.includes(s) ? e : [...e, s]
						}
						case r.p: {
							const {
								targetID: s
							} = t.payload, n = e.indexOf(s);
							return n > -1 && e.splice(n, 1), e
						}
						default:
							return e
					}
				},
				i = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/actions/comment/constants.ts")),
				a = s("./src/reddit/actions/platform.ts"),
				d = s("./src/reddit/actions/post.ts");
			const c = ["isApproved", "isRemoved", "isSpam"];
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.q:
					case d.k: {
						const s = t.payload;
						return Object.keys(s).map(t => {
							const n = Object.keys(s[t]);
							let r = !1;
							n.map(e => {
								c.includes(e) && (r = !0)
							}), !e.includes(t) && r && (e = [...e, t])
						}), e
					}
					case r.p: {
						const {
							targetID: s
						} = t.payload;
						return e.includes(s) ? e : [...e, s]
					}
					case a.f:
						return [];
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				toUpdate: o,
				updated: l
			})
		},
		"./src/reddit/reducers/user/experiments/shredditPDPExperimentHeader/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/lib/sentry/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts");
			var o;
			Object(r.a)("SHREDDIT_PDP_EXPERIMENT_HEADER_ACTION");
			! function(e) {
				e[e.Treatment = 0] = "Treatment", e[e.Control = 1] = "Control", e[e.Off = 2] = "Off"
			}(o || (o = {}));
			const i = o.Off;
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "SHREDDIT_PDP_EXPERIMENT_HEADER_ACTION":
						return n.c.captureException("PDP Experiment Header should only be set on the server."), e;
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
				experimentName: n.sb
			}), e => ({
				bucketed: e === n.Yc.ExpandedSearch || e === n.Yc.CollapsedSearch,
				collapsed: e === n.Yc.CollapsedSearch,
				expanded: e === n.Yc.ExpandedSearch
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
						experimentName: n.Nb
					}) === n.Qd
				})(e)
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
					return Boolean(t) && !Object(r.qg)(t)
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
						experimentName: n.Kf
					}) || ""
				},
				c = e => {
					const t = d(e);
					return t === n.Qf.SmIcon || t === n.Qf.SmIconHc
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
					const n = Object(i.cb)(e, {
						subredditName: s
					});
					return (n && n.postIds || []).slice(0, 2)
				}
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
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.13f144899285740f63d5.js.map