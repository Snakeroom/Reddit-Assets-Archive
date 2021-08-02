// https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.a39d8ddb5e90ae3f6b66.js
// Retrieved at 8/2/2021, 12:10:08 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-ClassicPost", "Reddit~StandalonePostPage~reddit-components-MediumPost"], {
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
						h = !o && !l && /macintosh/i.test(t),
						_ = !a && !u && !m && !p && /linux/i.test(t),
						E = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						x = !O && /[^-]mobi/i.test(t),
						S = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: v || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: v || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, E ? (r.msedge = e, r.version = E) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: E
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || v
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
						version: v || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? r = {
						name: "Android",
						version: v
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, v && (r.version = v)) : o ? (r = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, v && (r.version = v)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && v && (r.version = v)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : h ? (r.mac = e, r.osname = "macOS") : S ? (r.xbox = e, r.osname = "Xbox") : f ? (r.windows = e, r.osname = "Windows") : _ && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var g = "";
					r.windows ? g = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? g = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? g = (g = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? g = (g = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? g = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? g = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? g = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? g = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (g = s(/tizen[\/\s](\d+(\.\d+)*)/i)), g && (r.osversion = g);
					var C = !r.windows && g.split(".")[0];
					return O || c || "ipad" == o || a && (3 == C || C >= 4 && !x) || r.silk ? r.tablet = e : (x || "iphone" == o || "ipod" == o || a || i || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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

				function a(e, n, r) {
					var a = s;
					"string" == typeof n && (r = n, n = void 0), void 0 === n && (n = !1), r && (a = t(r));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([i, e[c]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = o, s.check = function(e, t, s) {
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
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				a = s("./node_modules/lodash/_baseReduce.js"),
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = i(e) ? n : a,
					d = arguments.length < 3;
				return c(e, o(t, 4), s, d, r)
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
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/TrackingHelper/index.tsx"),
				a = s("./src/reddit/selectors/telemetry.ts");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, s) => (n = (() => {})) => r => {
				const o = m(r.target, r.currentTarget),
					i = p(r.target, r.currentTarget);
				o && s && t && (u(r.target, r.currentTarget, l.anchors) ? s(t(e, o, i)) : s(s => {
					const n = t(e, o, i)(s);
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
						actionInfo: Object(a.previousPageActionInfo)(s, r)
					}
				})), u(r.target, r.currentTarget, l.anchorsAndButtons) && n(r)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: o,
						clickTrackingId: a,
						...d
					} = t, l = Object(n.useCallback)(c(a, o, s), [a, o, s]);
					return r.a.createElement(e, i({}, d, {
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
		"./src/lib/combineRefs/index.tsx": function(e, t, s) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/models/Media/index.ts"),
				r = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = s.n(r);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: s,
					domainOverride: r
				} = e;
				let a = "";
				if (s) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					a = r || Object(n.D)(e)
				} else a = Object(n.D)(e);
				const i = o.a.parse(a),
					c = i.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (i.hostname ? i.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				r = s("./node_modules/react/index.js"),
				o = s("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(n.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, s] = Object(r.useState)(null), [a, c] = Object(r.useState)(null), [d, l] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), p = Object(r.useCallback)(async () => m(!0), []), b = Object(r.useCallback)(() => m(!1), []), f = Object(r.useCallback)(() => m(!u), [u]), h = Object(r.useMemo)(() => {
					const t = i(e);
					return d ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: _,
					styles: E,
					update: v
				} = Object(o.a)(t, a, h);
				return Object(r.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: E.arrow,
						..._.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: E.popper,
						..._.popper
					},
					show: p,
					target: {
						element: t,
						ref: s
					},
					toggle: f,
					visible: u,
					update: v
				}), [l, _, c, b, p, E, t, s, f, u, v])
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/lodash/every.js"),
				r = s.n(n);

			function o(e) {
				let t = null,
					s = null;
				return (...n) => (null !== t && n.length === t.length && r()(n, (e, s) => e === t[s]) || (t = n, s = e(...n)), s)
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = [r.kc, r.nb, r.z, r.O, r.ib, r.Nb],
				a = {
					[r.Nb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.ib]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.O]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.z]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.nb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.kc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[r.Nb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.ib]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.O]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.z]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.nb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.kc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.nb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.kc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, s = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.kc]: "",
						[r.nb]: "",
						[r.z]: "",
						[r.O]: "",
						[r.ib]: "",
						[r.Nb]: ""
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
				return t || s ? m : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
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
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
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
			const n = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
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
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				i = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "i", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "j", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "h", (function() {
				return b
			}));
			var n = s("./src/lib/loadableAction/index.ts");
			const r = e => () => s.e("CommunityAwards").then(s.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(n.a)(r("awardSheetInfoRequested")),
				a = Object(n.a)(r("manageableAwardsRequested")),
				i = Object(n.a)(r("createCommunityAward")),
				c = Object(n.a)(r("createGlobalAward")),
				d = Object(n.a)(r("createModAward")),
				l = Object(n.a)(r("createAwardFailed")),
				u = Object(n.a)(r("createAwardSuccessful")),
				m = Object(n.a)(r("removeCommunityAward")),
				p = Object(n.a)(r("disableAwardinCommunity")),
				b = Object(n.a)(r("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return h
			})), s.d(t, "b", (function() {
				return E
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "f", (function() {
				return C
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/postParentMessage/index.ts"),
				o = s("./src/reddit/helpers/isPost.ts"),
				a = s("./src/reddit/constants/modals.ts"),
				i = s("./src/reddit/selectors/gild.ts"),
				c = s("./src/reddit/helpers/correlationIdTracker.ts"),
				d = s("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/selectors/communityAwards.ts"),
				m = s("./src/reddit/selectors/posts.ts"),
				p = s("./src/reddit/selectors/subreddit.ts"),
				b = s("./src/telemetry/index.ts"),
				f = s("./src/reddit/actions/gold/constants.ts");
			const h = Object(n.a)(f.L),
				_ = Object(n.a)(f.f),
				E = () => async (e, t) => {
					const n = t();
					e(_()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: r
					} = await s.e("givePremiumTrackers").then(s.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(r()(n))
				}, v = Object(n.a)(f.K), O = ({
					awardId: e,
					correlationId: t,
					thingId: s
				}) => async (n, r) => {
					const i = r(),
						c = e ? Object(u.a)(i, e) : void 0;
					n(v({
						award: c && c.isEnabled ? c : void 0,
						thingId: s,
						correlationId: t
					})), n(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const b = Object(p.I)(i, {
						thingId: s
					});
					let f = null;
					if (b) f = b.id;
					else if (Object(o.a)(s)) {
						const e = Object(m.F)(i, {
							postId: s
						});
						e && (f = e.belongsTo.id)
					}
					f && Object(d.a)(f, s)
				}, x = Object(n.a)(f.e), S = Object(n.a)(f.J), g = () => async (e, t) => {
					const n = t(),
						o = Object(i.d)(n);
					if (Object(i.g)(n)) {
						const e = "close.gild";
						Object(r.a)({
							type: e
						})
					}
					e(x()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(o)(n)), Object(c.b)(c.a.GildingFlow)
				}, C = () => async () => {
					Object(r.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return n
			})), s.d(t, "g", (function() {
				return r
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "l", (function() {
				return a
			})), s.d(t, "k", (function() {
				return i
			})), s.d(t, "j", (function() {
				return c
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			}));
			const n = "SUBREDDIT__FLAIRED_USERS_PENDING",
				r = "SUBREDDIT__FLAIRED_USERS_LOADED",
				o = "SUBREDDIT__FLAIRED_USERS_FAILED",
				a = "SUBREDDIT__FLAIRED_USERS_SEARCH_PENDING",
				i = "SUBREDDIT__FLAIRED_USERS_SEARCH_LOADED",
				c = "SUBREDDIT__FLAIRED_USERS_SEARCH_FAILED",
				d = "SUBREDDIT__FLAIRED_USERS_OWNFLAIR_CHANGED",
				l = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_ADDED",
				u = "SUBREDDIT__FLAIRED_USERS_AUTHORFLAIR_CHANGED",
				m = "SUBREDDIT__FLAIRED_USERS_DELETE_PENDING",
				p = "SUBREDDIT__FLAIRED_USERS_DELETE_COMPLETED",
				b = "SUBREDDIT__FLAIRED_USERS_DELETE_FAILED"
		},
		"./src/reddit/actions/pages/avatar.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/actions/users.ts"),
				r = s("./src/reddit/selectors/user.ts"),
				o = s("./src/reddit/actions/login.ts");
			t.a = () => async (e, t) => {
				await e(Object(n.r)()), Object(r.J)(t()) || e(Object(o.h)())
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
				return _
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "h", (function() {
				return v
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "q", (function() {
				return x
			})), s.d(t, "o", (function() {
				return S
			}));
			const n = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
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
				_ = "REORDER_COLLECTION_PENDING",
				E = "REORDER_COLLECTION_SUCCESS",
				v = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				x = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				S = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return b
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "f", (function() {
				return S
			})), s.d(t, "b", (function() {
				return y
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "d", (function() {
				return P
			})), s.d(t, "l", (function() {
				return D
			})), s.d(t, "k", (function() {
				return L
			})), s.d(t, "j", (function() {
				return F
			})), s.d(t, "g", (function() {
				return M
			})), s.d(t, "i", (function() {
				return U
			})), s.d(t, "h", (function() {
				return G
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/postFlairStyleTemplate.ts"),
				i = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/flair/index.ts"),
				d = s("./src/reddit/helpers/flair.ts"),
				l = s("./src/reddit/models/Flair/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/selectors/postFlair.ts"),
				p = s("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				h = Object(r.a)(b),
				_ = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				E = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				v = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				O = Object(r.a)(E),
				x = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				g = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				C = Object(r.a)(S),
				j = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				y = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				T = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				I = Object(r.a)(y),
				w = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				k = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				P = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				A = Object(r.a)(k),
				N = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				R = Object(r.a)(P),
				D = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const o = n(),
						a = Object(p.S)(o, {
							subredditId: e
						}).name;
					s(f());
					const i = await Object(c.k)(r(), a, t);
					if (i.ok) {
						s(h({
							subredditId: e,
							isEnabled: t
						}))
					} else s(_());
					return i.ok
				}, L = (e, t) => async (s, n, {
					apiContext: r
				}) => {
					const o = n(),
						a = Object(p.S)(o, {
							subredditId: e
						}).name;
					s(v());
					const i = await Object(c.j)(r(), t, l.d.LinkFlair, a);
					if (i.ok) {
						s(O({
							subredditId: e,
							canAssignOwn: t
						}))
					} else s(x());
					return i.ok
				}, F = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const d = r(),
						m = Object(p.S)(d, {
							subredditId: t
						}).name;
					s(g());
					const b = await Object(c.f)(o(), e, m, l.d.LinkFlair);
					let f = b.ok && !(b.body && !1 === b.body.success);
					if (f) {
						const n = b.body;
						if (s(C({
								subredditId: t,
								template: n
							})), n.id) {
							const r = e.styleTemplate,
								o = d.structuredStyles.flairTemplate.models[n.id];
							r ? f = await s(Object(a.d)(t, n.id, r)) : o && (f = await s(Object(a.c)(t, n.id)))
						}
					}
					if (f) {
						const e = Object(i.e)(n.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						s(Object(i.f)(e))
					} else {
						s(j());
						const r = Object(i.e)(n.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						s(Object(i.f)(r))
					}
					return f
				}, M = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const a = r(),
						d = Object(p.S)(a, {
							subredditId: t
						}).name;
					if (s(T()), (await Object(c.b)(o(), e, d)).ok) {
						s(I({
							subredditId: t,
							templateId: e
						}));
						const r = Object(i.e)(n.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						s(Object(i.f)(r))
					} else {
						s(w());
						const r = Object(i.e)(n.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						s(Object(i.f)(r))
					}
				}, U = (e, t) => async (s, r, {
					apiContext: o
				}) => {
					const a = r(),
						d = Object(m.d)(a, {
							subredditId: t
						}).templateIds,
						b = Object(p.S)(a, {
							subredditId: t
						}).name;
					if (s(A({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), b, l.d.LinkFlair, e)).ok) {
						s(N());
						const e = Object(i.e)(n.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						s(Object(i.f)(e))
					} else {
						s(R({
							subredditId: t,
							templateIds: d
						}));
						const r = Object(i.e)(n.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, n.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						s(Object(i.f)(r))
					}
				}, G = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: s
				}) => async (n, r, {
					apiContext: a
				}) => {
					const i = e.flair.filter(e => !Object(d.q)(e.type));
					if (t && i.unshift(t), n(Object(o.P)({
							[e.id]: {
								flair: i
							}
						})), t) {
						const n = Object(d.g)(t);
						Object(c.h)(a(), e.id, s, n)
					} else Object(c.h)(a(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return x
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "a", (function() {
				return C
			})), s.d(t, "c", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/forEach.js"),
				r = s.n(n),
				o = s("./node_modules/lodash/isEqual.js"),
				a = s.n(o),
				i = s("./node_modules/lodash/values.js"),
				c = s.n(i),
				d = s("./src/lib/makeActionCreator/index.ts"),
				l = s("./src/reddit/actions/imageUploads.ts"),
				u = s("./src/reddit/helpers/media/index.ts"),
				m = s("./src/lib/constants/index.ts"),
				p = s("./src/lib/makeApiRequest/index.ts"),
				b = s("./src/lib/omitHeaders/index.ts"),
				f = s("./src/reddit/constants/headers.ts");
			var h = s("./src/reddit/helpers/trackers/blade.ts"),
				_ = s("./src/reddit/models/Image/index.tsx"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				v = s("./src/telemetry/index.ts");
			const O = ({
				subredditId: e,
				flairId: t,
				imageKey: s,
				imageData: n
			}) => async (r, o, a) => {
				const i = o(),
					c = Object(E.S)(i, {
						subredditId: e
					});
				if (!c) return !1;
				r(Object(l.k)(n));
				const d = await (async (e, t, s, n, r, o) => Object(p.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${s}`,
					method: m.hb.POST,
					data: {
						filepath: n,
						imagetype: r,
						mimetype: o
					}
				}))(a.apiContext(), c.name, t, n.file.name, s, await Object(u.g)(n.file));
				let h = !1;
				try {
					const e = await Object(l.g)(o(), d, n, _.a.FlairTemplates);
					e && r(Object(l.j)(e)), h = !0
				} catch (v) {
					if (v instanceof Error) throw v;
					r(Object(l.i)(v))
				}
				return h
			}, x = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", S = Object(d.a)(x), g = (e, t, s) => async (n, o, i) => {
				const {
					apiContext: d
				} = i;
				let u = o();
				const {
					pendingImages: x,
					...g
				} = s;
				let C = g;
				const j = Object(E.S)(u, {
					subredditId: e
				});
				if (!j) return !1;
				const y = u.structuredStyles.flairTemplate.models[t];
				if (y && a()(y, C)) return !0;
				if (x) {
					const s = [];
					if (r()(x, (r, o) => {
							r && s.push(n(O({
								flairId: t,
								imageData: Object(_.m)(r),
								imageKey: o,
								subredditId: e
							})))
						}), !(await Promise.all(s)).every(e => e)) return !1;
					C = ((e, t, s) => {
						const n = {
							...e
						};
						return r()(t, (e, t) => {
							const r = e && s.imageUploads[e.id];
							r && r.kind === _.b.TempUploaded && (n[t] = r.url)
						}), n
					})(C, x, o())
				}
				u = o();
				let T = null,
					I = null;
				const w = [];
				try {
					(T = await Object(l.f)(u, _.a.FlairTemplates)) && (I = Object(l.m)(T)(n, o, i), w.push(...c()(T.imagesByKey)))
				} catch (N) {
					return !1
				}
				const k = await (async (e, t, s, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: m.hb.PUT,
						data: n
					}))(d(), j.name, t, C),
					P = y ? "edit_post_flair_template" : "save_post_flair_template",
					A = Object(h.e)(u, P);
				if (k.ok) {
					let e;
					if (I) try {
						await I, e = ((e, t, s) => {
							const n = {
								...e
							};
							return t.forEach(e => {
								const t = s.imageUploads[e.id];
								t && t.kind === _.b.Uploaded && (e.url === n.postBackgroundImage ? n.postBackgroundImage = t.url : e.url === n.postPlaceholderImage && (n.postPlaceholderImage = t.url))
							}), n
						})(C, w, o())
					} catch (N) {
						e = null
					} else e = C;
					n(S({
						flairId: t,
						template: e || C
					}))
				} else T && T.websocket.close();
				return Object(v.a)({
					...A,
					actionInfo: {
						...A.actionInfo,
						success: k.ok
					}
				}), k.ok
			}, C = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", j = Object(d.a)(C), y = (e, t) => async (s, n, {
				apiContext: r
			}) => {
				const o = n(),
					a = Object(E.S)(o, {
						subredditId: e
					});
				if (!a) return !1;
				const i = await (async (e, t, s) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${s}`,
						method: m.hb.DELETE
					}))(r(), a.name, t),
					c = Object(h.e)(o, "delete_flair_template");
				return i.ok && s(j({
					flairId: t
				})), Object(v.a)({
					...c,
					actionInfo: {
						...c.actionInfo,
						success: i.ok
					}
				}), i.ok
			}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "r", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "i", (function() {
				return o
			})), s.d(t, "j", (function() {
				return a
			})), s.d(t, "h", (function() {
				return i
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "p", (function() {
				return u
			})), s.d(t, "q", (function() {
				return m
			})), s.d(t, "o", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return f
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "m", (function() {
				return _
			})), s.d(t, "n", (function() {
				return E
			})), s.d(t, "l", (function() {
				return v
			})), s.d(t, "k", (function() {
				return O
			}));
			const n = "USER_FLAIR_DATA__MUTATED",
				r = "AUTHOR_FLAIR_DATA__MUTATED",
				o = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_PENDING",
				a = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_SUCCESS",
				i = "STRUCTURED_STYLES__USERFLAIR_ENABLED_SETTING_FAILED",
				c = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING",
				d = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				l = "STRUCTURED_STYLES__USERFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED",
				u = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_PENDING",
				m = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_SUCCESS",
				p = "STRUCTURED_STYLES__USERFLAIR_SAVETEMPLATE_FAILED",
				b = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_PENDING",
				f = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_SUCCESS",
				h = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				_ = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				v = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				O = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				r = s.n(n);
			const o = s("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = o
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				i = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: r
				} = e, {
					source: c,
					callToAction: l,
					caption: u
				} = t;
				if (!c || !c.url) return null;
				let m = c.displayText;
				return c.displayText.length >= 40 && (m = c.displayText.slice(0, 40 - "...".length) + "..."), o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: d.a.leftSideContent
				}, u && !r && o.a.createElement("span", {
					className: d.a.caption,
					title: u
				}, u), o.a.createElement(i.a, {
					href: c.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c,
					className: d.a.displayUrl
				}, m)), l && o.a.createElement(a.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				Icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				icon: "_2W1YFyYH_CTGX4_5OEBs2Q",
				isLeft: "p8bIdnQ5pQUQRETAyCoa5",
				isRight: "_36ucS75syCWwJ_ee7IieXZ",
				active: "NPw0Z_HL-yJPXnZ3mpWEA",
				redditStyle: "OGOshepc50ul-kJHrocIO",
				mNotCardView: "_33VrFkg3gJpkL8AlPfcHUE"
			}
		},
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				i = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => r.a.createElement(a.a, d({
				className: Object(o.a)(e, c.a.CallToActionButton, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/ClassicPost/Thumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/Thumbnail/index.tsx"),
				i = s("./src/reddit/components/ClassicPost/index.m.less"),
				c = s.n(i);
			t.a = ({
				className: e,
				classNameInnerThumbnail: t,
				crosspost: s,
				forceShowNSFW: n,
				isMeta: i,
				post: d,
				redditStyle: l,
				removeLink: u,
				templatePlaceholderImage: m,
				thumbnailContainerClassName: p,
				url: b,
				usePreview: f
			}) => r.a.createElement("div", {
				className: Object(o.a)(c.a.thumbnailContainer, e)
			}, r.a.createElement(a.a, {
				className: Object(o.a)(c.a.thumbnail, t),
				containerClassName: p,
				crosspost: s,
				forceShowNSFW: n,
				isMeta: i,
				post: d,
				redditStyle: l,
				removeLink: u,
				templatePlaceholderImage: m,
				url: u ? void 0 : b,
				usePreview: f
			}))
		},
		"./src/reddit/components/ClassicPost/index.m.less": function(e, t, s) {
			e.exports = {
				adLinkWrapper: "_2c-0jMA2BuDIlKjWFiOUOt",
				classicThumbnail: "nL7Q54U2LLg9rkVdSxxLe",
				content: "_1Y6dfr4zLlrygH-FLmr8x-",
				showBulkActionCheckbox: "W-Z7cDkcZIo1dPic9COiN",
				flatlistContainer: "_36kpXQ-z7Hr61j8878uRkP",
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
				chain: "sfueWOUNVDpNGfP_Ow2yN",
				postContainer: "D3IyhBGwXo9jPwz-Ka0Ve",
				promotedMainBody: "_1LAkIKOirJP5Hor0NamqyY",
				mFirst: "_23tSz_ar8phNRBBW1afkYr"
			}
		},
		"./src/reddit/components/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "SearchResultsClassicPost", (function() {
				return Y
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/ads/index.ts"),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				c = s("./src/lib/getShortenedLink.ts"),
				d = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				l = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				u = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				p = s("./src/reddit/components/ExpandoButton/index.tsx"),
				b = s("./src/reddit/components/Flatlist/index.tsx"),
				f = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/ModModeReports/index.tsx"),
				_ = s("./src/reddit/components/ModModeReports/helpers.ts"),
				E = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				v = s("./src/reddit/components/PostContainer/index.tsx"),
				O = s("./src/reddit/components/PostMeta/index.tsx"),
				x = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				S = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				g = s("./src/reddit/components/PostTitle/index.tsx"),
				C = s("./src/reddit/components/PostTopMeta/index.tsx"),
				j = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				y = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				T = s("./src/reddit/models/Media/index.ts"),
				I = s("./src/reddit/components/ClassicPost/Thumbnail.tsx"),
				w = s("./src/reddit/connectors/ClassicPost/index.tsx"),
				k = s("./src/reddit/connectors/ClassicPost/searchResults.tsx"),
				P = s("./src/reddit/contexts/Post/index.tsx"),
				A = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				N = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				R = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				D = s("./src/reddit/helpers/search/renderMedia.tsx"),
				L = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				F = s("./src/reddit/hooks/usePrevious.ts"),
				M = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				U = s.n(M),
				G = s("./src/reddit/components/ClassicPost/index.m.less"),
				B = s.n(G);

			function V() {
				return (V = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const W = Object(i.a)(e => {
					const {
						className: t,
						crosspost: s,
						currentUser: i,
						handleVote: w,
						isExpanded: k,
						inSubredditOrProfile: P,
						eventFactory: M,
						first: G,
						flairStyleTemplate: W,
						formatTitle: Y,
						hostPostData: H,
						isCheckboxSelected: q,
						isCurrentUserProfilePost: z,
						isFrontpage: Q,
						isGalleryTileLayoutDefault: K,
						isLoggedIn: X,
						isOverlay: Z,
						imageGalleryCurrentItem: J,
						moderatorPermissions: $,
						modModeEnabled: ee,
						onClickPost: te,
						onIgnoreReports: se,
						onOpenReportsDropdown: ne,
						onSizeChanged: re,
						poll: oe,
						post: ae,
						postId: ie,
						redditStyle: ce,
						scrollerItemRef: de,
						showBulkActionCheckbox: le,
						showEditFlair: ue,
						showMedia: me,
						subredditOrProfile: pe,
						toggleCheckbox: be,
						userIsOp: fe,
						shouldShowGalleryTileOption: he,
						showPromotedCTA: _e
					} = e, Ee = Object(F.a)(k);
					Object(n.useEffect)(() => {
						re && Ee !== k && re(ae.id)
					}, [k, re, ae.id, Ee]);
					const ve = ce ? void 0 : W,
						Oe = s || void 0,
						xe = Object(R.a)($),
						Se = Object(A.a)($),
						ge = Object(N.a)($),
						Ce = ee && R.a,
						je = !!ae.media && ae.media.type === T.o.RTJSON,
						ye = fe && je,
						Te = P && !me,
						Ie = !!ae.media && Object(T.G)(ae.media),
						we = {
							flairStyleTemplate: ve,
							post: ae,
							inSubredditOrProfile: P,
							isCurrentUserProfilePost: z,
							isOverlay: Z,
							shouldShowSubscribeButton: !(Q && X),
							subredditOrProfile: pe
						},
						ke = Object(o.t)(ae, J),
						{
							source: Pe
						} = ke,
						Ae = r.a.createElement(v.a, {
							className: Object(a.a)(U.a.classicPostStyles, B.a.postContainer, Object(L.a)(e), G ? B.a.mFirst : void 0, t),
							isOverlay: Z,
							style: {
								...Object(L.d)(e),
								...Object(L.b)(ve)
							},
							post: ae,
							onClick: te,
							eventFactory: M
						}, r.a.createElement(S.a, {
							model: ae,
							handleVote: w,
							showBulkActionCheckbox: le,
							isCheckboxSelected: q,
							toggleCheckbox: be,
							flairStyleTemplate: ve,
							redditStyle: ce,
							postId: ie
						}), r.a.createElement(E.a, {
							"data-click-id": "background",
							flairStyleTemplate: ve
						}, r.a.createElement(m.a, {
							className: B.a.eventMeta,
							post: ae
						}), r.a.createElement("div", {
							className: B.a.mainBody
						}, r.a.createElement("div", {
							className: Te ? B.a.expandoContainer : B.a.thumbnailContainer
						}, !Te && r.a.createElement(I.a, {
							className: B.a.classicThumbnail,
							crosspost: Oe && ae,
							isMeta: ae.isMeta,
							post: Oe || ae,
							redditStyle: ce,
							templatePlaceholderImage: ve && ve.postPlaceholderImage,
							removeLink: Ie
						}), r.a.createElement(p.a, {
							crosspost: Oe,
							className: B.a.rightExpando,
							isExpanded: !!k,
							post: ae,
							useMediaIcons: !1
						})), r.a.createElement("div", {
							className: Object(a.a)(B.a.content, {
								[B.a.showBulkActionCheckbox]: le
							}),
							"data-click-id": "body"
						}, r.a.createElement(g.c, {
							className: oe ? B.a.titleWithPoll : void 0,
							format: Y,
							poll: oe,
							post: ae,
							redditStyle: ce,
							size: g.b.Medium,
							titleColor: ve && ve.postTitleColor,
							isOverlay: Z
						}, ae.source && !Oe && r.a.createElement(y.a, {
							href: ae.source.url,
							isSponsored: ae.isSponsored,
							postId: ae.id,
							source: ae.source
						}, Object(c.a)(ae))), r.a.createElement(O.a, V({
							key: "PostMeta"
						}, we)), ee && xe && Object(_.c)(ae) && r.a.createElement(h.a, {
							onIgnoreReports: se,
							reportable: ae
						}), _e && Pe && Pe.url && r.a.createElement(d.a, {
							className: B.a.adLinkWrapper
						}, r.a.createElement(l.a, {
							post: ae,
							adLinkContent: ke
						})), r.a.createElement("div", {
							className: B.a.flatlistContainer
						}, r.a.createElement(p.a, {
							className: B.a.leftExpando,
							crosspost: Oe,
							isExpanded: !!k,
							post: ae,
							useMediaIcons: !1
						}), r.a.createElement(u.a, {
							className: B.a.horizontalVotes,
							compact: !1,
							flairStyleTemplate: ve,
							model: ae,
							onVoteClick: w
						}), r.a.createElement(b.a, {
							className: B.a.flatlistSeparator
						}), r.a.createElement(b.c, {
							className: B.a.flatlist,
							currentUser: i,
							hasModFlairPerms: Se,
							hasModPostPerms: xe,
							hasModFullPerms: ge,
							hostPostData: H,
							isOverlay: !!Z,
							modModeEnabled: ee,
							onIgnoreReports: se,
							onOpenReportsDropdown: ne,
							post: ae,
							showEditPost: ye,
							showEditFlair: ue,
							tooltipType: Z ? C.c.Lightbox : void 0,
							useFlatlistBreakpoints: Object(x.b)({
								editPost: !Ce,
								hide: !Ce,
								report: !Ce
							})
						})), r.a.createElement(f.d, null))), Object(D.a)(ae, B.a, de, k, he, K)));
					return r.a.createElement(j.b, null, Ae)
				}),
				Y = Object(P.b)(Object(k.a)(W));
			t.default = Object(w.a)(W)
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
			const u = Object(a.a)(({
				className: e,
				...t
			}) => r.a.createElement(i.a, l({}, t, {
				className: Object(o.a)(d.a.horizontalVotes, e),
				scoreClassName: Object(o.a)(d.a.customScoreStyles, t.scoreClassName),
				downvoteClassName: Object(i.b)(t) ? d.a.customDownvoteStyles : void 0
			})));
			t.a = u
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, s) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			var i = Object(o.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~RealtimeGQLSubscriptionAsync"), s.e("RealtimeGQLSubscriptionAsync")]).then(s.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
				}),
				c = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				d = s("./src/reddit/hooks/usePrevious.ts");
			const l = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var u = s("./src/reddit/components/CountAnimation/index.m.less"),
				m = s.n(u);
			var p;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(p || (p = {}));
			const b = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: s,
					incrementDelta: o,
					initialDelay: a,
					initialDisplayCount: u,
					inViewPortAnimatingCallbackOnce: p,
					isLoadTestOnly: f,
					onDataCB: h,
					postId: _,
					queryKey: E,
					queryVariables: v,
					shouldDisjointAnimation: O,
					subsequentRecurringDelay: x
				} = e, [S, g] = Object(n.useState)(!1), [C, j] = Object(n.useState)(!0), [y, T] = Object(n.useState)([]), [I, w] = Object(n.useState)(l(u).reverse()), k = Object(n.useRef)(!1), P = Object(n.useRef)(null), A = Object(n.useRef)(e => {}), N = Object(n.useRef)();
				A.current = Object(n.useCallback)(e => {
					let s = e || o();
					const n = [...I].reverse().join("");
					let r = parseInt(n) + s;
					r > t && (s = t - parseInt(n), r = t);
					const a = l(r).reverse();
					g(!1), T(I), w(a), j(!1), N.current = setTimeout(() => {
						g(!0)
					}, 0)
				}, [t, o, I]);
				const R = Object(n.useRef)(() => {}),
					D = Object(n.useRef)(),
					L = Object(n.useRef)();
				R.current = Object(n.useCallback)(() => {
					L.current = setTimeout(() => {
						A.current();
						const e = [...y].reverse().join("");
						parseInt(e) < t && R.current()
					}, x())
				}, [t, x, y]);
				const F = Object(n.useRef)(0),
					M = Object(n.useRef)(!1),
					U = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: s
							} = e, n = 1 !== s;
							t ? (M.current = !0, k.current || (k.current = !0, D.current = setTimeout(() => {
								A.current(), R.current()
							}, a())), F.current > 0 && (A.current(F.current), F.current = 0)) : n && (M.current = !1)
						})
					}, []);
				Object(c.a)(P, U);
				const [G, B] = Object(n.useState)(!1), V = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: s
						} = e, n = 1 !== s;
						t ? B(!0) : n && B(!1)
					})
				}, []), W = Object(n.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(c.a)(P, V, W.current);
				const Y = Object(d.a)(t);
				Object(n.useEffect)(() => {
					if (void 0 !== Y && Y !== t) {
						const e = t - Y;
						M.current ? (A.current(e), p && p()) : F.current += e
					}
					return () => {
						clearTimeout(D.current), clearTimeout(L.current), clearTimeout(N.current)
					}
				}, [t]);
				const H = Object(n.useCallback)(() => j(!0), [j]),
					q = 0 === y.length,
					z = C || q,
					Q = Object(n.useRef)(((e, t) => `${t}_${e}_count_anim`)(_, s));
				return r.a.createElement(r.a.Fragment, null, !f && r.a.createElement("div", {
					className: m.a.countAnimation
				}, I.map((e, t) => {
					const s = ((e, t) => {
						let s = Math.abs(e);
						const n = Math.abs(t),
							r = [s];
						if (s === n) return r;
						let o = !0;
						for (; o;) ++s > 9 && (s = 0), r.push(s), s === n && (o = !1);
						return r
					})(y[t] || 0, e);
					return r.a.createElement("span", {
						"aria-hidden": !0,
						className: m.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: H,
						style: S && y.length > 0 && !C ? {
							transform: `translateY(-${O&&s.length>1?100:100*(s.length-1)}%)`,
							transitionDuration: `${(O?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, z ? r.a.createElement("span", {
						className: m.a.digitDelta
					}, e) : s.map((e, t) => {
						const n = 0 === t || t === s.length - 1;
						if (!O || O && n) return r.a.createElement("span", {
							className: m.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), r.a.createElement("span", {
					className: m.a.srOnly,
					role: "screen-reader"
				}, [...I].reverse().join(""))), r.a.createElement("span", {
					ref: P
				}), G && r.a.createElement(i, {
					variables: v,
					onData: f ? b : h,
					queryKey: E,
					uniqueKey: Q.current
				}))
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/eventTools/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const b = i.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: s
			}) => {
				if (!Object(u.a)(s)) return null;
				const n = s && s.eventInfo,
					i = Object(l.a)(s),
					m = n && Object(a.c)(n.eventStart, n.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, r.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: s
				}), !i && m && r.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: s,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, s) {
			e.exports = {
				PostEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				postEventFutureText: "_3rtq7SfSLd-e5fAEgn373L",
				PostEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				postEventPastText: "_1j5EnaNrX7PuyCnmpT-8o0",
				PostEventNowText: "BGfronFwr_0rXxOJmxp10",
				postEventNowText: "BGfronFwr_0rXxOJmxp10",
				Container: "_3NIcD2Vr2xrSAq08U14kCy",
				container: "_3NIcD2Vr2xrSAq08U14kCy",
				CalendarIcon: "LEz3F0HfvMpdo96occzKU",
				calendarIcon: "LEz3F0HfvMpdo96occzKU",
				LiveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				liveIcon: "_3ArSA7Spw15WyF9ld4p6ZJ",
				LoadingState: "_27_KVVxYHZ7v44CE2vg8bT",
				loadingState: "_27_KVVxYHZ7v44CE2vg8bT"
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/humanizeEventTime/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/icons/fonts/helpers.tsx"),
				l = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				u = s.n(l);
			var m = e => r.a.createElement("i", {
				className: Object(c.a)(Object(d.b)("scheduled", e.isFilled), u.a.calendarIcon, e.className)
			});
			var p = e => r.a.createElement("i", {
					className: Object(c.a)(Object(d.b)("live", e.isFilled), u.a.liveIcon, e.className)
				}),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				f = s.n(b),
				h = s("./src/lib/lessComponent.tsx");
			const _ = h.a.span("PostEventFutureText", f.a),
				E = h.a.span("PostEventPastText", f.a),
				v = h.a.span("PostEventNowText", f.a),
				O = h.a.span("Container", f.a),
				x = h.a.wrapped(m, "CalendarIcon", f.a),
				S = h.a.wrapped(p, "LiveIcon", f.a),
				g = h.a.div("LoadingState", f.a);
			class C extends n.Component {
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
					const {
						className: e,
						post: t
					} = this.props, {
						eventInfo: s
					} = t;
					if (!s) return null;
					const {
						eventEnd: n,
						eventIsLive: c,
						eventStart: d
					} = s, l = Object(o.e)(d, n);
					let u, m;
					if (this.state.mounted || l === o.a.Live) u = Object(a.a)(d, n, c);
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						u = r.a.createElement(g, {
							className: e
						})
					}
					if (c) m = r.a.createElement(v, null, r.a.createElement(S, null), u);
					else if (l === o.a.Future) m = r.a.createElement(_, null, r.a.createElement(x, null), u);
					else {
						if (l !== o.a.Past) return null;
						m = r.a.createElement(E, null, r.a.createElement(x, null), u)
					}
					return r.a.createElement(O, {
						className: e
					}, m)
				}
			}
			t.a = C
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
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/controls/OutboundLink/index.tsx"),
				m = s("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = s("./src/reddit/icons/fonts/index.tsx"),
				b = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/telemetry/models/Outbound.ts"),
				h = s("./src/reddit/components/ExpandoButton/index.m.less"),
				_ = s.n(h);
			const E = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.v)({
						postId: t.post.id
					}))
				})),
				v = (e, t = !1, s) => {
					const n = Object(c.a)(_.a.icon, _.a.hideOnHover);
					if (t) return o.a.createElement(p.a, {
						name: "crosspost",
						className: n
					});
					if (s.pollData) return o.a.createElement(p.a, {
						name: "poll_post",
						className: n
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return o.a.createElement(p.a, {
								name: "gif_post",
								className: n
							});
						case b.o.IMAGE:
							return o.a.createElement(p.a, {
								name: "image_post",
								className: n
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return o.a.createElement(p.a, {
								name: "text_post",
								className: n
							});
						case b.o.VIDEO:
							return o.a.createElement(p.a, {
								name: "video_post",
								className: n
							});
						case b.o.GALLERY:
							return o.a.createElement(p.a, {
								name: "media_gallery",
								className: n
							});
						case b.o.EMBED:
						default:
							return o.a.createElement(p.a, {
								name: "embed",
								className: n
							})
					}
				};
			t.a = E(e => {
				const {
					className: t,
					crosspost: s,
					enableCrosspostIcon: r,
					isCommentsPage: a,
					isExpanded: l,
					post: b,
					toggle: h,
					useMediaIcons: E
				} = e, O = s || b, x = r && !!s;
				return O.media && !(("rtjson" === O.media.type || "text" === O.media.type) && !Object(m.a)(O)) || !!b.pollData ? o.a.createElement("button", {
					"aria-expanded": !!l,
					"aria-haspopup": !0,
					"aria-label": n.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, _.a.outer),
					"data-click-id": l ? "expando_close" : "expando_open",
					onClick: h
				}, l ? o.a.createElement(p.a, {
					name: "collapse",
					className: _.a.icon
				}) : E ? o.a.createElement(o.a.Fragment, null, v(O.media && O.media.type, x, b), o.a.createElement(p.a, {
					name: "expand",
					className: Object(c.a)(_.a.icon, _.a.showOnHover)
				})) : o.a.createElement(p.a, {
					name: "expand",
					className: _.a.icon
				})) : O.source && O.source.url ? o.a.createElement(u.b, {
					"aria-label": n.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					href: O.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: a ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage,
					target: "_blank"
				}, o.a.createElement(p.a, {
					name: "external_link",
					className: Object(c.a)(_.a.icon, _.a.outboundLinkIcon)
				})) : o.a.createElement(i.a, {
					"aria-label": n.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, _.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(O.permalink),
					rel: "nofollow"
				}, o.a.createElement(p.a, {
					name: "text_post",
					className: _.a.icon
				}))
			})
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, s) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/noop.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = s.n(d);
			t.a = e => a.a.createElement(i.h, {
				className: l.a.modalHeader
			}, a.a.createElement(i.p, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || r.a
			}, a.a.createElement(i.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				o = s.n(r);
			const a = n.a.div("Wrapper", o.a);
			t.a = a
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, s) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Flair/index.tsx"),
				c = s("./src/reddit/components/FlairPreview/index.m.less"),
				d = s.n(c);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(i.b, "FlairComponent", d.a);
			t.a = e => e.flair ? o.a.createElement(u, null, o.a.createElement(l, null, n.fbt._("{placeholder}", [n.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), o.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : o.a.createElement(u, null, n.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, s) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/lodash/once.js"),
				r = s.n(n),
				o = s("./node_modules/react/index.js"),
				a = s.n(o),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				u = s("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = s.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = r()((e = p) => Object(i.a)({
					getComponent: () => Object(l.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("FlairEdit")]).then(s.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1bdAduczElF9-gLoCvHz-p",
				flairComponent: "_2leID3tMN8hpvVd4XhEqTl",
				radioOption: "FJIE5E2gciCA8q3Jzvcyg",
				pencil: "_3H_wwe03-Fkrm6oWGakXI8",
				searchBoxWrapper: "_18cuM8Uu7RcIFu1bCT0r4t",
				searchIcon: "_2bECVWL_WJ9RGBx7-RnzfO",
				searchInput: "_1nQbRaoAvb6Uy0oI-OfDtZ"
			}
		},
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				l = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/helpers/trackers/userFlair.ts"),
				p = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				h = s("./src/reddit/components/Flair/index.tsx"),
				_ = s("./src/reddit/controls/RadioInput/index.tsx"),
				E = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				v = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				O = s("./src/reddit/icons/svgs/Search/index.tsx"),
				x = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				S = s.n(x);
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: s
					} = this.props, {
						searchQuery: r
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(r)), i = !!s && a.some(e => e.id === s);
					return o.a.createElement("div", {
						className: S.a.container
					}, o.a.createElement("div", {
						className: S.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: S.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: n.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: r
					}), o.a.createElement(O.a, {
						className: S.a.searchIcon
					})), o.a.createElement(_.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: s
					}, a.map((e, t) => {
						const n = Object(u.c)(e),
							r = s === e.id || !i && 0 === t;
						return o.a.createElement(E.a, {
							className: S.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: r ? 0 : -1,
							value: e.id
						}, o.a.createElement(h.b, {
							className: S.a.flairComponent,
							flair: n,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(v.a, {
							className: S.a.pencil
						}))
					})))
				}
			}
			var C = s("./src/reddit/components/FlairSearch/index.m.less"),
				j = s.n(C);
			const y = Object(d.a)(e => e && Object(u.c)(e)),
				T = Object(i.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				I = Object(a.b)(T);
			t.a = I(e => {
				const {
					flairTemplateType: t,
					flair: s,
					className: r,
					onChange: a,
					subredditId: i,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: h
				} = e, _ = Object(p.a)(), E = d && s && s.templateId && d[s.templateId] || void 0, v = Object(f.a)(), O = s || y(E);
				return o.a.createElement("div", {
					className: Object(c.a)(r, j.a.container)
				}, d && l && o.a.createElement(g, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								s = Object(u.c)(t);
							_(Object(m.b)({
								userFlair: t
							})), a(s)
						}
					},
					selectedTemplateId: E ? E.id : "",
					templateIds: l,
					templates: d
				}), O && E && (h || E.textEditable) && o.a.createElement("div", {
					className: j.a.flairEditSection
				}, o.a.createElement("div", {
					className: j.a.editLabel
				}, n.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && o.a.createElement("div", {
					className: j.a.restrictionHintText
				}, Object(u.k)(E)), o.a.createElement(v, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: O,
					flairTemplate: E,
					flairTemplateType: t,
					isFlairModOnly: E.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let s = e;
						t && (s = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), a(s)
					},
					subredditId: i
				})))
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				i = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = r.a.memo((function({
				visible: e,
				...t
			}) {
				const [s, a] = Object(n.useState)(e);
				return Object(n.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, a(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), a(!1)
					}
				}, [e]), e ? r.a.createElement("div", c({
					className: Object(o.a)(i.a.tooltip, {
						[i.a.visible]: s
					})
				}, t.popperProps), t.children, s && r.a.createElement("div", c({
					className: i.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, s) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, s) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/ModModeReports/index.m.less"),
				c = s.n(i);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.div("Text", c.a), u = a.a.div("Placeholder", c.a), m = () => o.a.createElement(u, null, o.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(n.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModerationDropdowns").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeReports/_ModModeReports.tsx"
				}
			}, {
				fallback: o.a.createElement(m, null),
				ssr: !1
			});
			t.a = p
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/timeAgo/index.ts"),
				o = s("./src/lib/timeUntil/index.ts"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a);

			function c(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? n.fbt._("Voting closed {timeAgo}", [n.fbt._param("timeAgo", Object(r.d)(e.poll.endsAt / 1e3))], {
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
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
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
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(i.c)(n, e),
					onClick: a
				}, p), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/ads/index.ts"),
				i = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						o = Object(n.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: n
								} = t;
								n >= .5 && s(c.d(e.postId))
							})
						}, [s, e.postId]),
						a = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, a), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/telemetry.ts"),
				_ = s("./src/lib/classNames/index.ts"),
				E = s("./src/lib/objectSelector/index.ts"),
				v = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.m.less"),
				x = s.n(O);
			const S = Object(p.a)(() => Object(o.c)({
					basePixelMetadata: Object(E.a)((e, {
						post: t
					}) => Object(f.b)(e, t.id)),
					clickTrackingId: (e, {
						post: t
					}) => t.id,
					imageGalleryCurrentItem: (e, {
						post: t
					}) => Object(f.i)(e, {
						postId: t.id
					}),
					pageType: e => Object(h.actionInfo)(e).pageType
				})),
				g = e => {
					const t = Object(v.d)(e.target, e.currentTarget),
						s = Object(v.b)(e.target, e.currentTarget, v.a.buttons);
					return "subreddit" !== t && s
				};
			class C extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: m,
						onPostContentClick: p,
						pageType: f,
						sendEvent: h,
						style: E,
						ref: v,
						shouldAddGalleryViewability: O = !0
					} = this.props, S = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: E,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && (e(() => m && m(s, l, t, o, f))(s), p && g(s) && p(s, l)), l.id && o) {
								const {
									source: e
								} = Object(a.t)(l, o);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(_.a)(x.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), C = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || C ? r.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, S) : l.media && Object(b.E)(l.media) && O ? r.a.createElement(u, {
						postId: l.id
					}, S) : S
				}
			}
			t.a = S(Object(v.c)(Object(m.c)(C)))
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var n = s("./node_modules/lodash/isEqual.js"),
				r = s.n(n),
				o = s("./src/reddit/constants/flair.ts"),
				a = s("./src/reddit/helpers/flair.ts"),
				i = s("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === i.f.Text || e.type === i.f.Image || e.type === i.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, s) => {
				if (s && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const n = e && t.templateId ? e[t.templateId] : void 0;
				if (!n) return {
					canSave: !1,
					reason: d.InvalidTemplate
				};
				const i = Object(a.g)(t).length;
				return 0 === i ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : i > o.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(a.n)(t) && !Object(a.r)(n) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : r()(s, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, s) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(m);
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: r
						} = this.props, o = !!n;
						r(e ? Object(u.o)({
							postId: s,
							isFollowed: o
						}) : Object(u.g)({
							postId: s,
							isFollowed: o
						})), t && t()
					}, this.onMouseEnter = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						const e = this.props.post;
						e && e.isFollowed && this.setState({
							isHovered: !1
						})
					}, this.state = {
						isHovered: !1
					}
				}
				render() {
					const {
						className: e,
						isEventFollow: t,
						post: s
					} = this.props, r = this.state.isHovered, a = s.isFollowed;
					let i = a ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return a && r && (i = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, i)
				}
			}
			const f = Object(a.b)(() => Object(i.c)({}), (e, {
				post: t
			}) => ({
				onFollow: () => e(Object(d.y)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx");

			function i(e) {
				const {
					post: t
				} = e;
				return t.crosspostRootId ? r.a.createElement(o.a, {
					postId: t.crosspostRootId,
					mediaProps: {
						...e,
						crosspost: t,
						primaryContent: !1
					}
				}) : r.a.createElement(a.a, {
					...e,
					primaryContent: !!e.showFull
				})
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/PostLeftRail/index.tsx"),
				a = s("./src/reddit/components/VerticalVotes/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.tsx"),
				c = s("./src/reddit/helpers/isPost.ts"),
				d = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				l = s("./src/reddit/components/PostRailAndVotes/index.m.less"),
				u = s.n(l);
			t.a = e => {
				const {
					model: t,
					handleVote: s,
					showBulkActionCheckbox: n = !1,
					isCheckboxSelected: l = !1,
					isCountAnimShadowTestEnabled: m,
					toggleCheckbox: p = (() => {}),
					flairStyleTemplate: b,
					redditStyle: f,
					isOverlay: h,
					isVoteCountAnimation: _,
					postId: E
				} = e, v = `upvote-button-${t.id}${h?"-overlay":""}`;
				return r.a.createElement(o.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(d.a)(t),
					isSponsored: !!Object(c.b)(t) && t.isSponsored,
					redditStyle: f
				}, n && r.a.createElement(i.a, {
					className: u.a.checkbox,
					isCheckboxSelected: l,
					toggleCheckbox: p
				}), r.a.createElement(a.a, {
					flairStyleTemplate: b,
					model: t,
					onVoteClick: s,
					redditStyle: f,
					upvoteTooltipId: v,
					isVoteCountAnimation: _,
					isCountAnimShadowTestEnabled: m,
					postId: E,
					scoreClassName: u.a.score
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return A
			})), s.d(t, "a", (function() {
				return H
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/constants/experiments.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				_ = s("./src/reddit/helpers/flair.ts"),
				E = s("./src/reddit/helpers/path/index.ts"),
				v = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				x = s("./src/reddit/models/Flair/index.ts"),
				S = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				C = s("./src/lib/getShortenedLink.ts"),
				j = s("./src/reddit/components/FlairWrapper/index.tsx"),
				y = s("./node_modules/fbt/lib/FbtPublic.js"),
				T = s("./src/lib/prettyPrintNumber/index.ts"),
				I = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				w = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				k = s.n(w);
			const P = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var A, N = Object(a.b)(P)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(l.a)(e.className, k.a.proposalMetaData)
					}, o.a.createElement("span", null, y.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [y.fbt._param("count", Object(T.a)(n)), y.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(I.a, {
						className: k.a.proposalExpiry,
						poll: t
					}))
				})),
				R = s("./src/reddit/components/SEOTitle/index.tsx"),
				D = s("./src/reddit/selectors/user.ts"),
				L = s("./src/reddit/components/PostTitle/index.m.less"),
				F = s.n(L),
				M = s("./src/config.ts"),
				U = s("./src/reddit/hooks/useClickSourceData.ts"),
				G = s("./src/reddit/hooks/useExperimentVariant.ts"),
				B = s("./src/reddit/hooks/usePostContext.ts"),
				V = s("./src/reddit/hooks/useTheme.ts"),
				W = s("./src/telemetry/models/Outbound.ts");

			function Y() {
				return (Y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(A || (A = {}));
			const H = ({
					size: e,
					titleColor: t,
					titleType: s,
					nowrap: n,
					children: r,
					className: a,
					redditStyle: i
				}) => {
					const c = Object(V.a)();
					let d = "";
					switch (e) {
						case A.ExtraLarge:
							d = F.a.ExtraLarge;
							break;
						case A.Large:
							d = F.a.Large;
							break;
						case A.Medium:
							d = F.a.Medium;
							break;
						case A.Small:
							d = F.a.Small;
							break;
						case A.ExtraSmall:
							d = F.a.ExtraSmall
					}
					return o.a.createElement("div", {
						className: Object(l.a)(F.a.Title, a, d, {
							[F.a.isNoWrap]: n
						}),
						style: {
							"--posttitletextcolor": t || Object(g.a)({
								redditStyle: i,
								theme: c
							}).titleText
						}
					}, s ? o.a.createElement(R.b, {
						type: s
					}, r) : r)
				},
				q = ({
					className: e,
					disableVisited: t,
					titleColor: s,
					children: n,
					...r
				}) => o.a.createElement(i.a, Y({}, r, {
					className: Object(l.a)(e, F.a.styledLink, {
						[F.a.isVisitedEnabled]: !t
					})
				}), n),
				z = ({
					disableVisited: e,
					nowrap: t,
					className: s,
					children: n
				}) => o.a.createElement("div", {
					className: Object(l.a)(F.a.titleContainer, s, {
						[F.a.isNoWrap]: t,
						[F.a.isVisitedEnabled]: !e
					})
				}, n),
				Q = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.p)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: D.bb
				}),
				K = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, r = Object(U.a)(), a = Object(G.a)(m.mc) === m.qc.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(z, {
						nowrap: e.nowrap
					}, o.a.createElement(X, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, o.a.createElement(X, e)); {
						const i = t.media && Object(S.G)(t.media) ? Object(v.c)(t.id, s.name) : t.permalink,
							c = e.isCommentPermalink ? Object(E.b)(i) : a ? Object(h.a)(i, void 0, r) : Object(h.a)(i);
						return o.a.createElement(z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return s ? o.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, o.a.createElement(X, t)) : o.a.createElement(X, t)
						})(t, e) : o.a.createElement(q, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: c
						}, o.a.createElement(X, e)))
					}
				},
				X = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let r = e.format ? e.format(n) : n.title;
					s && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const a = e.isCommentsPage ? R.a.PostComments : R.a.PostItem;
					return o.a.createElement(H, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && o.a.createElement(j.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), r)
				},
				Z = e => {
					const {
						hideSourceLink: t,
						post: s
					} = e, {
						isSponsored: n
					} = s, r = e.isCommentsPage ? W.SourceElement.PostLink : W.SourceElement.ListingPostLink, a = !t && !e.isCrosspost && e.size !== A.Large && !s.isSponsored && !(s.media && Object(S.G)(s.media)) && (s.source || s.media && (s.media.type === S.o.GIFVIDEO || s.media.type === S.o.IMAGE || s.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return o.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(S.D)(s),
							isSponsored: n,
							postId: s.id,
							source: s.source,
							sourceElement: r
						}, Object(C.a)(s), !s.isSponsored && o.a.createElement(O.a, {
							name: "external_link",
							className: F.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== A.Large && e.size !== A.ExtraLarge) return o.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: n,
						postId: s.id,
						source: s.source,
						sourceElement: r
					}, Object(C.a)(s), !s.isSponsored && o.a.createElement(O.a, {
						name: "external_link",
						className: F.a.outboundLinkIcon
					}));
					return null
				};
			class J extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${F.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(g.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(g.a)(this.props).titleText,Object(g.a)(this.props).body)};\n        }\n      `
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
						poll: a,
						post: i,
						showNSFWSpoilerFlairsOnly: c
					} = this.props, d = s === x.b.Left, u = Object(j.b)(i), m = c ? u.filter(e => e.type === x.f.Nsfw || e.type === x.f.Spoiler) : d ? u.filter(e => Object(_.q)(e.type)) : [], p = c ? [] : d ? u.filter(e => !Object(_.q)(e.type)) : u, b = !r && !n, f = !t && m && m.length > 0 && b, h = !t && p && p.length > 0 && b;
					return o.a.createElement("div", {
						className: Object(l.a)(F.a.Component, e, i.id)
					}, !c && f && o.a.createElement(j.a, {
						isFlairFilter: !0,
						titleFlair: m,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement(K, Y({}, this.props, {
						leftFlair: c ? m : void 0
					})), a && o.a.createElement(N, {
						className: F.a.pollMeta,
						pollId: a.id
					}), o.a.createElement(Z, this.props), h && o.a.createElement(j.a, {
						isFlairFilter: !0,
						titleFlair: p,
						nowrap: !0,
						post: i,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement("div", {
						className: F.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${M.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(p.bb)(),
					s = Object(p.v)(t),
					n = Object(B.a)(),
					r = Object(a.e)(r => Q(r, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					i = Object(V.a)(),
					c = Object(u.b)();
				return o.a.createElement(J, Y({
					pageLayer: t,
					isCommentPermalink: s
				}, n, r, e, {
					theme: i,
					sendEvent: c
				}))
			}))
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, s) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return x
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/controls/Score/index.tsx"),
				m = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				h = s("./src/reddit/components/VerticalVotes/index.m.less"),
				_ = s.n(h);
			const E = Object(i.c)({
					isNightMode: f.V
				}),
				v = Object(a.b)(E),
				O = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				x = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: b.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.upvoted), this.setState({
							voted: e !== b.a.upvoted ? b.a.upvoted : b.a.notVoted
						})
					}, this.onDownvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t
						} = this.props;
						t(b.a.downvoted), this.setState({
							voted: e !== b.a.downvoted ? b.a.downvoted : b.a.notVoted
						})
					}
				}
				render() {
					const e = this.props,
						{
							downvoteButtonClassName: t,
							isCountAnimShadowTestEnabled: s,
							isNightMode: r,
							isVoteCountAnimation: a,
							shouldShowScore: i = !0,
							upvoteButtonClassName: d,
							containerRef: p,
							model: f,
							postId: h
						} = e,
						E = O(e),
						v = x(e),
						S = f.voteState;
					return o.a.createElement("div", {
						className: Object(c.a)(_.a.votesContainer, e.className),
						id: `vote-arrows-${f.id}`,
						ref: p
					}, E ? o.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": S === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: r,
						onClick: this.onUpvote,
						voteState: S
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": S === b.a.upvoted,
						className: Object(c.a)(l.n, d),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: S
					})), !e.compact && i && o.a.createElement(u.a, {
						className: Object(c.a)(_.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: S,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!a,
						isCountAnimShadowTestEnabled: !!s,
						postId: h
					}), v ? o.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": S === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: r,
						onClick: this.onDownvote,
						voteState: S
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": S === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: S
					})))
				}
			}
			const g = Object(d.a)(v(S));
			t.a = g
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, s) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return k
			})), s.d(t, "b", (function() {
				return P
			})), s.d(t, "c", (function() {
				return A
			})), s.d(t, "d", (function() {
				return N
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, s) => n => {
				const r = e(n),
					a = t(n),
					i = !r && a;
				return Object(o.a)(s.baseClassName, n.className, {
					[s.mIsInteractive]: a,
					[s.mIsActive]: r,
					[s.mIsVoteable]: i
				})
			};
			var c = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = s("./src/reddit/models/Vote/index.ts"),
				l = s("./src/reddit/controls/Downvote/index.m.less"),
				u = s.n(l);
			const m = {
					...u.a,
					baseClassName: u.a.Downvote
				},
				p = ({
					voteState: e
				}) => e === d.a.downvoted,
				b = i(p, ({
					interactive: e
				}) => !1 !== e, m);
			var f = e => r.a.createElement(c.a, {
					className: b(e),
					compact: e.compact,
					isFilled: p(e)
				}),
				h = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				_ = s("./src/reddit/controls/Upvote/index.m.less"),
				E = s.n(_);
			const v = {
					...E.a,
					baseClassName: E.a.Upvote
				},
				O = ({
					voteState: e
				}) => e === d.a.upvoted,
				x = i(O, ({
					interactive: e
				}) => !1 !== e, v);
			var S = e => r.a.createElement(h.a, {
					className: x(e),
					compact: e.compact,
					isFilled: O(e)
				}),
				g = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				C = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				j = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = s("./src/reddit/components/VerticalVotes/votes.m.less"),
				T = s.n(y);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => Object(o.a)({
					[T.a.compact]: e.compact,
					[T.a.dark]: Object(C.b)(Object(g.a)(e)),
					[T.a.nightmode]: e.isNightMode
				}),
				k = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(j.a)(e), s = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: n,
						...a
					} = e;
					return r.a.createElement("button", I({}, a, {
						className: Object(o.a)(T.a.customDownvote, w(e), {
							[T.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: s
					}))
				}),
				P = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(j.a)(e), s = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: n,
						...a
					} = e;
					return r.a.createElement("button", I({}, a, {
						className: Object(o.a)(T.a.customUpvote, w(e), {
							[T.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: s
					}))
				}),
				A = f,
				N = S
		},
		"./src/reddit/connectors/ClassicPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return E
			})), s.d(t, "b", (function() {
				return v
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/post.ts"),
				a = s("./src/reddit/actions/tooltip.ts"),
				i = s("./src/reddit/models/Vote/index.ts"),
				c = s("./src/reddit/contexts/InsideOverlay.tsx"),
				d = s("./src/reddit/contexts/PageLayer/index.tsx"),
				l = s("./src/reddit/contexts/Post/index.tsx"),
				u = s("./src/reddit/selectors/activeModalId.ts"),
				m = s("./src/reddit/selectors/chatPost.ts"),
				p = s("./src/reddit/selectors/moderatorPermissions.ts"),
				b = s("./src/reddit/selectors/postFlair.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/showPromotedCTA.ts"),
				_ = s("./src/reddit/selectors/user.ts");
			const E = {
					autoplayPref: _.b,
					activeModalId: u.a,
					crosspost: f.d,
					isActive: f.j,
					isChatPost: m.d,
					isCurrentUserProfilePost: f.k,
					isExpanded: f.l,
					isLoggedIn: _.J,
					showPromotedCTA: h.a,
					moderatorPermissions: p.k,
					modModeEnabled: d.R,
					poll: (e, t) => {
						const s = e.posts.metaMap[t.postId];
						return s ? e.polls.models[s] : null
					},
					showEditFlair: b.a,
					showMedia: d.r,
					flairStyleTemplate: d.T
				},
				v = (e, {
					postId: t
				}) => ({
					handleVote: s => {
						const n = s === i.a.upvoted ? Object(o.bb)(t) : Object(o.u)(t);
						e(n)
					},
					onIgnoreReports: () => e(Object(o.X)(t)),
					onOpenReportsDropdown: t => e(Object(a.h)({
						tooltipId: t
					}))
				}),
				O = Object(n.b)(() => Object(r.c)(E), v, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: e => e.title
				}));
			t.a = e => Object(l.b)(O(Object(c.b)(e)))
		},
		"./src/reddit/connectors/ClassicPost/searchResults.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/contexts/PageLayer/index.tsx"),
				c = s("./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx"),
				d = s("./src/reddit/connectors/ClassicPost/index.tsx");
			const l = Object(i.t)({
					searchQuery: i.X
				}),
				u = Object(o.b)(() => Object(a.c)(d.c), d.b, (e, t, s) => ({
					...e,
					...t,
					...s,
					formatTitle: Object(c.a)(s.searchQuery || "", e => r.a.createElement("em", {
						style: {
							fontWeight: 700
						}
					}, e), e => r.a.createElement("span", {
						style: {
							fontWeight: "normal"
						}
					}, e))
				}));
			t.a = e => l(u(e))
		},
		"./src/reddit/connectors/SearchPost/searchSyntaxHighlight.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/lib/LRUCache/index.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r);
			const a = new n.a(250),
				i = (e, t, s) => {
					const n = e.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
					return e => {
						const r = `${e.id}-${n}`;
						let i = a.get(r);
						if (void 0 === i) {
							const c = new RegExp(`(\\b${n}\\b)`, "gi"),
								d = e.title.split(c);
							i = s(o.a.createElement(o.a.Fragment, null, o.a.Children.toArray(d.map((e, s) => s % 2 != 0 ? t(e) : e)))), a.set(r, i)
						}
						return i
					}
				}
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			}));
			const n = "reddit",
				r = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, s) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(i);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, s) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/constants/keycodes.ts"),
				i = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = s("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				l = s("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = s.n(l);
			class m extends r.a.Component {
				constructor() {
					super(...arguments), this.ref = null, this.onKeyPress = e => {
						const {
							props: t
						} = this;
						t.disabled || e.key !== a.b.Enter && e.key !== a.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
					}
				}
				componentDidUpdate(e) {
					this.props.selected && !e.selected && this.ref && this.ref.focus()
				}
				render() {
					const {
						props: e
					} = this;
					return e.hidden ? null : r.a.createElement(d.a, {
						"aria-checked": e.selected,
						className: Object(o.a)(e.className, u.a.radioOption),
						innerRef: e => this.ref = e,
						onClick: e.disabled ? void 0 : e.onClick,
						onKeyPress: this.onKeyPress,
						role: "radio",
						tabIndex: e.tabIndex
					}, e.showButton && (e.selected ? r.a.createElement(c.a, {
						className: u.a.radioOn,
						role: "presentation"
					}) : r.a.createElement(i.a, {
						className: u.a.radioOff,
						role: "presentation"
					})), e.children)
				}
			}
			t.a = m
		},
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/constants/keycodes.ts");
			class a extends r.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props;
						t || this.state.value !== e && (s(e), this.setState({
							value: e
						}))
					}, this.getValues = () => {
						const e = [];
						return r.a.Children.forEach(this.props.children, t => {
							t.props.hidden || t.props.disabled || e.push(t.props.value)
						}), e
					}, this.onKeyDown = e => {
						const {
							disabled: t,
							onChange: s
						} = this.props, {
							value: n
						} = this.state;
						if (t) return;
						const r = e.key === o.b.ArrowUp,
							a = e.key === o.b.ArrowDown;
						if (r || a) {
							const t = this.getValues();
							if (!t.length) return;
							const o = n ? t.indexOf(n) : 0,
								a = t[((r ? o - 1 : o + 1) + t.length) % t.length];
							s(a), this.setState({
								value: a
							}), e.preventDefault()
						}
					}, this.state = {
						value: e.value || null
					}
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.value !== this.props.value && this.setState({
						value: e.value || null
					})
				}
				render() {
					const {
						props: e
					} = this, {
						value: t
					} = this.state;
					return r.a.createElement("div", {
						"aria-label": e.name,
						className: e.className,
						role: "radiogroup",
						onKeyDown: this.onKeyDown
					}, r.a.createElement("input", {
						disabled: e.disabled,
						type: "hidden",
						value: t || ""
					}), r.a.Children.map(e.children, (s, n) => {
						const o = 0 === n,
							a = s.props.value === t,
							i = null !== t ? a ? 0 : -1 : o ? 0 : -1;
						return r.a.cloneElement(s, {
							disabled: e.disabled,
							onClick: e => this.handleClick(s.props.value),
							selected: a,
							tabIndex: i
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/lib/prettyPrintNumber/index.ts"),
				i = s("./node_modules/react/index.js"),
				c = s.n(i),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CountAnimation/index.tsx"),
				m = s("./src/reddit/constants/colors.ts"),
				p = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/hooks/useTracking.ts"),
				_ = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				v = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				O = s("./src/reddit/selectors/meta.ts"),
				x = s("./src/reddit/controls/Score/index.m.less"),
				S = s.n(x);
			const g = e => e.voteState === E.a.downvoted ? Object(_.a)(e).voteText.downvote : e.voteState === E.a.upvoted ? Object(_.a)(e).voteText.upvote : Object(b.a)(Object(p.a)(e)),
				C = () => 0,
				j = Object(d.b)(e => ({
					locale: Object(O.i)(e)
				})),
				y = Object(o.a)(e => {
					const t = {
							color: e.light ? m.b.lightboxHeaderText : g(e)
						},
						{
							score: s,
							postId: o = "",
							locale: p,
							isVoteCountAnimation: b,
							isCountAnimShadowTestEnabled: _
						} = e,
						E = Object(d.d)(),
						O = null == p ? void 0 : p.startsWith("en"),
						x = e.isScoreHidden ? O ? n.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: S.a.dot
						}, "•") : Object(a.b)(s),
						j = Object(i.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && E(Object(l.G)({
								postId: o,
								delta: t
							}))
						}, [E, o]),
						y = Object(i.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: o
								}
							}
						}),
						T = Object(h.a)(),
						I = Object(i.useCallback)(() => {
							T(Object(f.m)(o))
						}, [T, o]),
						w = !e.isScoreHidden && b && s < v.a;
					return c.a.createElement("div", {
						className: Object(r.a)(S.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, (w || _) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: s,
						countToUpperBound: s,
						initialDelay: C,
						subsequentRecurringDelay: C,
						incrementDelta: C,
						shouldDisjointAnimation: !0,
						inViewPortAnimatingCallbackOnce: I,
						postId: o,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: y.current,
						onDataCB: j,
						isLoadTestOnly: _ && !w
					})), !w && x)
				});
			t.a = j(y)
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(o.b)(n)(e => {
					const {
						featureEnabled: n,
						...o
					} = e, a = o;
					return n ? r.a.createElement(t, a) : void 0 !== s ? r.a.createElement(s, a) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, s) {
			"use strict";

			function n(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: s,
					memo: n,
					cta: r
				} = e;
				return t && s && n && r ? {
					subreddit: t,
					amount: s,
					memo: n,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
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
			const r = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: s
					} of e) t.push(Object(n.e)(s));
				return t
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case n.G.NO_STRIPE_SUBSCRIPTION:
							case n.G.USER_DOESNT_EXIST:
							case n.G.USER_REQUIRED_ERROR:
							case n.G.VALIDATION_ERROR:
								return e;
							case n.G.NO_USER:
							case n.G.NO_TEXT:
							case n.G.NO_URL:
								return n.G.VALIDATION_ERROR;
							case n.G.CREDIT_CARD_FAILURE:
							case n.G.CREDIT_CARD_FAILURE_GENERIC:
								return n.G.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.G.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.G.VALIDATION_ERROR
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
				a = e => {
					const t = e.body;
					return !e.ok && t && t.json && t.json.errors ? {
						...e,
						error: o(e)
					} : e
				};
			t.a = o
		},
		"./src/reddit/helpers/search/renderMedia.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/components/PostMedia/index.tsx");
			const a = (e, t, s, n, o, a) => n ? e.crosspostRootId ? r.a.createElement("div", {
					className: t.crosspostMediaWrapper
				}, i(e, s, o, a)) : i(e, s, o, a) : null,
				i = (e, t, s, n) => r.a.createElement(o.a, {
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
				return _
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
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
				b = e => Object(n.l)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				_ = e => {
					const t = Object(o.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "d", (function() {
				return b
			})), s.d(t, "h", (function() {
				return h
			})), s.d(t, "i", (function() {
				return _
			}));
			var n = s("./src/reddit/models/Gold/Award.ts"),
				r = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/reddit/helpers/correlationIdTracker.ts"),
				a = s("./src/reddit/helpers/trackers/gild.ts");
			const i = e => ({
					...r.defaults(e),
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
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
				u = (e, t, s) => n => ({
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: s
				}),
				m = (e, t, s, n) => r => ({
					...i(r),
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
						uploadDuration: s,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, s) => n => ({
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
					goldPurchase: s ? c(s) : null
				}),
				b = (e, t, s) => n => ({
					...i(n),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: s ? c(s) : null
				}),
				f = (e, t, s) => n => ({
					...i(n),
					source: "awards",
					action: "click",
					noun: s,
					goldPurchase: c(e),
					profile: r.profileById(n, t),
					subreddit: r.subredditById(n, t)
				}),
				h = (e, t) => f(e, t, "disable_in_community"),
				_ = (e, t) => f(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), s.d(t, "clickGildEvent", (function() {
				return m
			})), s.d(t, "clickRpanGiveAward", (function() {
				return p
			})), s.d(t, "clickAddAward", (function() {
				return b
			})), s.d(t, "clickHideAward", (function() {
				return f
			})), s.d(t, "clickConfirmHideAward", (function() {
				return h
			})), s.d(t, "clickCancelHideAward", (function() {
				return _
			})), s.d(t, "clickAwardReportFlow", (function() {
				return v
			})), s.d(t, "clickCancelAwardReportFlow", (function() {
				return O
			})), s.d(t, "clickFlagAwardUsage", (function() {
				return x
			})), s.d(t, "clickCancelFlagAwardUsage", (function() {
				return S
			})), s.d(t, "clickConfirmFlagAwardUsage", (function() {
				return g
			})), s.d(t, "clickReportAward", (function() {
				return C
			})), s.d(t, "clickCancelReportAward", (function() {
				return j
			})), s.d(t, "clickConfirmReportAward", (function() {
				return y
			})), s.d(t, "viewGildModalEvent", (function() {
				return T
			})), s.d(t, "clickSelectAwardEvent", (function() {
				return I
			})), s.d(t, "triggerAnonymousEvent", (function() {
				return w
			})), s.d(t, "clickMessageInputEvent", (function() {
				return k
			})), s.d(t, "typeMessageInputEvent", (function() {
				return P
			})), s.d(t, "clickLearnMoreLinkEvent", (function() {
				return A
			})), s.d(t, "clickQuestionMarkEvent", (function() {
				return N
			})), s.d(t, "clickConfirmAwardEvent", (function() {
				return R
			})), s.d(t, "clickGetPremiumEvent", (function() {
				return D
			})), s.d(t, "clickAddCoinsButtonEvent", (function() {
				return L
			})), s.d(t, "clickNextButtonEvent", (function() {
				return F
			})), s.d(t, "clickCloseGildModalEvent", (function() {
				return M
			})), s.d(t, "viewKarmaSuccessEvent", (function() {
				return U
			})), s.d(t, "clickFilterEvent", (function() {
				return G
			})), s.d(t, "clickNextFiltersEvent", (function() {
				return B
			})), s.d(t, "clickPreviousFiltersEvent", (function() {
				return V
			}));
			var n = s("./src/reddit/models/Gold/Award.ts"),
				r = s("./src/reddit/selectors/telemetry.ts"),
				o = s("./src/telemetry/models/GoldPurchase.ts"),
				a = s("./src/reddit/helpers/correlationIdTracker.ts"),
				i = s("./src/reddit/helpers/isComment.ts"),
				c = s("./src/reddit/selectors/gild.ts");
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
					...r.defaults(e),
					comment: t ? r.comment(e, t) : void 0,
					correlationId: Object(c.b)(e) || Object(a.d)(a.a.GildingFlow, !1),
					post: t ? r.post(e, t) : void 0,
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
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
				b = e => t => ({
					...u(t, e),
					source: Object(i.a)(e) ? "comment" : "post",
					action: "click",
					noun: "add_award"
				}),
				f = (e, t) => s => ({
					...u(s, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => s => ({
					...u(s, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				_ = (e, t) => s => ({
					...u(s, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				E = e => (t, s) => n => ({
					...u(n, s),
					source: Object(i.a)(s) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				v = E("award_hovercard_report"),
				O = E("cancel_award_hovercard_report"),
				x = E("flag_award"),
				S = E("cancel_flag_award"),
				g = E("confirm_flag_award"),
				C = E("report_community_award"),
				j = E("cancel_report_community_award"),
				y = E("confirm_report_community_award"),
				T = (e, t, s) => n => ({
					...u(n, s),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				I = (e, t, s) => n => ({
					...u(n, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, s)
				}),
				w = (e, t) => s => ({
					...u(s, t),
					source: "give_gold",
					action: e,
					noun: "anonymous"
				}),
				k = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "message_input"
				}),
				P = e => t => ({
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
				N = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "question"
				}),
				R = (e, t) => s => ({
					...u(s, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				D = (e, t) => s => ({
					...u(s, e),
					source: "give_gold",
					action: "click",
					noun: "get_premium",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				L = e => t => ({
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
				M = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "click",
					noun: "close"
				}),
				U = ({
					award: e,
					awardeeKarmaEarned: t,
					awarderKarmaEarned: s,
					numberCoins: n,
					thingId: r
				}) => o => ({
					...u(o, r),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(i.a)(r) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: s,
						numberCoins: n,
						...l(e)
					}
				}),
				G = e => t => ({
					...u(t),
					source: "give_gold",
					action: "click",
					noun: "filter",
					goldPurchase: {
						filterId: e.tag,
						filterName: e.content.markdown
					}
				}),
				B = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "next_filters"
				}),
				V = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return f
			})), s.d(t, "b", (function() {
				return h
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "i", (function() {
				return g
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/models/Gold/ProductOffer.ts"),
				o = s("./src/reddit/selectors/gold/giveAwards.ts"),
				a = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = s("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = s("./src/reddit/selectors/telemetry.ts"),
				d = s("./src/telemetry/models/GoldPurchase.ts"),
				l = s("./src/telemetry/models/Payment.ts"),
				u = s("./src/reddit/helpers/trackers/gild.ts"),
				m = s("./src/reddit/helpers/correlationIdTracker.ts"),
				p = s("./src/reddit/helpers/isComment.ts"),
				b = s("./src/reddit/helpers/trackers/communityAwards.ts");
			const f = (e, t) => {
					const {
						thingId: s,
						packageId: l
					} = t, f = !!s, h = o.b(e), _ = h ? Object(u.getAwardTypeFromAward)(h) : null, E = f ? _ : i.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, v = s ? Object(p.a)(s) ? "comment" : "post" : void 0, O = l || i.t(e), x = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === O)[0], S = t.offerContext || (h && 0 === h.coinPrice ? r.a.StorefrontFreeAward : Object(r.d)(x, f)), g = x ? Math.round(1e4 * (x.baselinePennies - x.pennies) / x.baselinePennies) / 100 : 0, C = x ? Math.round(1e4 * (x.coins - x.baselineCoins) / x.coins) / 100 : 0, j = x ? x.baselinePennies !== x.pennies ? `${g}_percent_price` : x.baselineCoins !== x.coins ? `${C}_percent_bonus` : void 0 : void 0, y = E === d.GoldPurchaseType.Premium ? n.vb : x ? x.pennies : void 0;
					return {
						...c.defaults(e),
						comment: s ? c.comment(e, s) : null,
						correlationId: i.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: s ? c.post(e, s) : null,
						screen: c.screen(e),
						subreddit: s ? c.subreddit(e) : null,
						goldPurchase: {
							...h ? Object(b.a)(h) : null,
							type: E,
							gildedContent: f,
							contentType: v,
							numberCoins: x ? x.coins : void 0,
							offerContext: S,
							offerType: j
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: y
						},
						purchase: {
							priceMicros: y
						}
					}
				},
				h = (e, t, s) => n => ({
					...f(n, {
						packageId: t,
						thingId: e,
						offerContext: s
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				_ = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "paypal"
				}),
				E = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "credit_card"
				}),
				v = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "click",
					noun: "complete_credit_card"
				}),
				O = (e, t) => s => ({
					...f(s, {
						packageId: e,
						offerContext: t
					}),
					source: "gold_payment",
					action: "click",
					noun: "confirm"
				}),
				x = e => t => ({
					...f(t, {
						thingId: e
					}),
					source: "gold_payment",
					action: "display",
					noun: "error"
				}),
				S = (e, t, s) => n => {
					const r = f(n, {
						packageId: t,
						thingId: e,
						offerContext: s
					});
					return {
						...r,
						source: "gold_payment",
						action: "view",
						noun: "page",
						payment: {
							...r.payment,
							defaultOption: l.PaymentMethod.Paypal
						},
						goldPurchase: {
							...r.goldPurchase,
							source: e ? d.GiveGold : i.o(n) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				g = e => t => {
					const s = f(t, {
						thingId: e
					});
					return {
						...s,
						source: "gold_payment",
						action: "view",
						noun: "success",
						payment: {
							...s.payment,
							method: t.platform.currentPage.queryParams.thanks ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/telemetry/index.ts"),
				o = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = s("./src/reddit/selectors/platform.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: i.profile(e),
					screen: i.screen(e),
					subreddit: i.subreddit(e)
				}),
				d = (e, t, s) => n => ({
					source: Object(a.h)(n) || s ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(n),
					post: i.post(n, e)
				}),
				l = (e, t, s, n) => r => {
					const a = s ? i.comment(r, s) : null,
						{
							sortToUse: c
						} = Object(o.a)(r, e);
					return {
						...d(e, t, n)(r),
						comment: a,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => s => {
					const n = i.currentPost(s);
					return n ? d(n.id, e, t)(s) : {
						source: Object(a.h)(s) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(s)
					}
				},
				m = (e, t) => s => Object(r.a)({
					...d(e, t)(s),
					...i.defaults(s)
				}),
				p = e => t => ({
					source: "id_card",
					action: n.c.CLICK,
					noun: e,
					...c(t),
					post: i.currentPost(t),
					userSubreddit: i.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
			})), s.d(t, "j", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "k", (function() {
				return b
			})), s.d(t, "h", (function() {
				return f
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "l", (function() {
				return _
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(r.screen)(e),
					profile: Object(r.profile)(e),
					subreddit: Object(r.subreddit)(e),
					userSubreddit: Object(r.userSubreddit)(e)
				}),
				a = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				i = (e, t) => s => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					...o(s)
				}),
				c = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...o(s)
				}),
				d = (e, t) => s => ({
					source: "comment",
					action: n.c.UNDO,
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...o(s)
				}),
				l = (e, t) => s => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...o(s)
				}),
				u = (e, t) => s => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...o(s)
				}),
				m = (e, t) => s => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					comment: Object(r.comment)(s, t),
					...o(s)
				}),
				p = (e, t) => s => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(r.comment)(s, t),
					post: Object(r.post)(s, t),
					...o(s)
				}),
				b = (e, t) => s => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					...o(s)
				}),
				f = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(r.post)(s, t),
					subreddit: Object(r.subredditByPostOrCommentId)(s, t)
				}),
				h = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(r.comment)(s, t),
					post: Object(r.post)(s, t),
					subreddit: Object(r.subredditByPostOrCommentId)(s, t)
				}),
				_ = (e, t, s, n) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(r.post)(o, s),
					subreddit: Object(r.subredditByPostOrCommentId)(o, s),
					actionInfo: {
						reason: n
					},
					...e && {
						comment: Object(r.comment)(o, s)
					}
				})
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			}));
			var n = s("./src/reddit/models/Gold/ProductOffer.ts"),
				r = s("./src/reddit/selectors/avatarMarketing.ts"),
				o = s("./src/reddit/selectors/telemetry.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: n.a.AvatarNewGear
					}
				},
				c = e => t => {
					const s = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.defaults(t)
					};
					return Object(r.a)(t) && Object.assign(s, i), s
				},
				d = (e, t) => s => {
					const {
						id: n
					} = Object(a.mb)(s, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...o.defaults(s),
						snoovatar: {
							userGenerated: n
						}
					}
				},
				l = e => ({
					...o.defaults(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				u = e => ({
					...o.defaults(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				m = e => ({
					...o.defaults(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: o.snoovatarActiveForBuilderEvent(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...o.defaults(e),
					...i
				})
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			}));
			var n = s("./src/reddit/helpers/flair.ts"),
				r = s("./src/reddit/selectors/comments.ts"),
				o = s("./src/reddit/selectors/gold/powerups/achievements.ts"),
				a = s("./src/reddit/selectors/telemetry.ts"),
				i = s("./src/reddit/selectors/user.ts"),
				c = s("./src/reddit/selectors/userFlair.ts");

			function d(e) {
				const t = a.subreddit(e),
					s = null == t ? void 0 : t.id;
				if (!s) return;
				const r = Object(c.c)(e, {
						subredditId: s
					}),
					d = Object(i.h)(e),
					l = d ? Object(o.c)(e, {
						subredditId: s,
						userId: d
					}) : void 0,
					u = {
						achievementFlairId: null == l ? void 0 : l.type,
						achievementFlairTitle: null == l ? void 0 : l.name
					};
				if (!(null == r ? void 0 : r.displaySettings.isUserEnabled) || !(null == r ? void 0 : r.applied)) return {
					isActive: !1,
					...u
				};
				const m = r.applied.templateId,
					p = Object(n.g)(r.applied);
				return p ? {
					id: m,
					title: p,
					isActive: !0,
					...u
				} : {
					isActive: !1,
					...u
				}
			}
			const l = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...a.defaults(e)
				}),
				u = e => t => {
					const {
						userFlair: s,
						achievementFlair: r
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...a.defaults(t),
						userFlair: {
							id: null == s ? void 0 : s.id,
							title: s && Object(n.g)(s),
							isActive: s && !!s,
							achievementFlairId: null == r ? void 0 : r.type,
							achievementFlairTitle: null == r ? void 0 : r.name,
							isLocked: null == r ? void 0 : r.isLocked
						}
					}
				},
				m = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...a.defaults(e)
				}),
				p = (e, t, s) => i => {
					const c = Object(r.e)(i, {
							commentId: e
						}),
						d = Object(o.c)(i, {
							subredditId: t,
							userId: s
						});
					return {
						source: "meta",
						action: "hover",
						noun: "achieve_flair",
						...a.defaults(i),
						subreddit: {
							id: t
						},
						userFlair: {
							id: null == c ? void 0 : c.templateId,
							title: c ? Object(n.g)(c) : void 0,
							achievementFlairId: null == d ? void 0 : d.type,
							achievementFlairTitle: null == d ? void 0 : d.name
						}
					}
				}
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");

			function o(e, t = r.a) {
				return Object(n.e)(s => Object(r.c)(s, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				r = s("./node_modules/react/index.js"),
				o = s("./src/lib/hooks/useTooltip.ts");
			const a = Object(n.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function i(e) {
				const t = Object(r.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, a))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js");

			function r(e) {
				const t = Object(n.useRef)();
				return Object(n.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("downvote", e.isFilled), c.a.downvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? r.a.createElement("span", d({}, s, {
				className: Object(o.a)(c.a.compactDownvoteWrapper, s.className)
			}), r.a.createElement(l, {
				className: c.a.compactDownvote,
				isFilled: t
			})) : r.a.createElement("span", d({}, s, {
				className: Object(o.a)(c.a.downvoteWrapper, s.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, s) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, s) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = s.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const l = e => r.a.createElement("i", {
				className: Object(o.a)(Object(a.b)("upvote", e.isFilled), c.a.upvote, e.className)
			});
			t.a = ({
				compact: e,
				isFilled: t,
				...s
			}) => e ? r.a.createElement("span", d({}, s, {
				className: Object(o.a)(c.a.compactUpvoteWrapper, s.className)
			}), r.a.createElement(l, {
				className: c.a.compactUpvote,
				isFilled: t
			})) : r.a.createElement("span", d({}, s, {
				className: Object(o.a)(c.a.upvoteWrapper, s.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, r.a.createElement("g", null, r.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
		},
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("title", {
				id: `${e.title}-title`
			}, e.title), r.a.createElement("g", null, r.a.createElement("path", {
				fill: "inherit",
				d: "M15.75,7.834625 L12,4.084625 L12.808,3.276625 C13.8435,2.241125 15.5225,2.241125 16.558,3.276625 C17.5935,4.312125 17.5935,5.991125 16.558,7.026625 L15.75,7.834625 Z M11.366,5 L15.116,8.75 L7.25,16.616 L3.5,12.866 L11.366,5 Z M2.5035,13.5 L6.1125,17.109 L1,18.6125 L2.5035,13.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = s.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", c({}, e, {
				className: Object(o.a)(i.a.icon, e.className),
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement("svg", o({}, e, {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}), r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667 Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
			})))
		},
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, s) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/layout/row/Inline/index.m.less"),
				o = s.n(r);
			t.a = n.a.div("inlineRow", o.a)
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			}));
			var n, r, o = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(r || (r = {}));
			const a = {
					[n.Loyalty]: o.a.First,
					[n.Achievement]: o.a.Second,
					[n.Cosmetic]: void 0
				},
				i = e => e === o.a.First ? n.Loyalty : e === o.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "e", (function() {
				return o
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "d", (function() {
				return c
			}));
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(n || (n = {}));
			const o = {
				[n.Powerups]: () => r.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[n.Premium]: () => r.fbt._("Reddit - Buy Premium", null, {
					hk: "19EtMU"
				})
			};
			var a, i;
			! function(e) {
				e.Month = "MONTH", e.Year = "YEAR"
			}(a || (a = {})),
			function(e) {
				e.GildFlow = "gild_flow", e.LowCoinBalance = "low_coin_balance", e.NewUserTargetedOffer = "new_user_targeted_offer", e.RepeatUserTargetedOffer = "repeat_user_targeted_offer", e.StorefrontFreeAward = "storefront_free_award", e.CoinSale = "coin_sale", e.AvatarNewGear = "avatar_new_gear"
			}(i || (i = {}));
			const c = (e, t) => {
				const s = e && e.dealInfo && e.dealInfo.type,
					n = "low_coin_upsell" === s,
					r = "new_purchaser" === s,
					o = "repeat_purchaser" === s;
				return t ? i.GildFlow : n ? i.LowCoinBalance : r ? i.NewUserTargetedOffer : o ? i.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "r", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "n", (function() {
				return u
			})), s.d(t, "o", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "q", (function() {
				return _
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "j", (function() {
				return v
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "m", (function() {
				return g
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "l", (function() {
				return j
			})), s.d(t, "p", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				r = s("./src/reddit/models/GqlTopLevelField.ts"),
				o = s("./src/reddit/models/User/index.ts");
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
				u = e => e.__typename === o.c.AvailableRedditor,
				m = e => e.__typename === r.a.Subreddit;
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
			const _ = e => b[h[e]],
				E = e => h[b[e]],
				v = e => f[b[e]],
				O = e => b[f[e]],
				x = e => h[f[e]];
			var S;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(S || (S = {}));
			const g = e => {
					switch (e) {
						case S.Hourly:
						case S.Daily:
						case S.Weekly:
						case S.Monthly:
							return !0
					}
					return !1
				},
				C = "custom",
				j = e => {
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
				y = e => "frequency" in e && !!e.frequency
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
			t.b = (e = o, t) => {
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

			function u(e, t, s, n) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(r => {
						let o;
						(o = e.placement ? e.placement === i.a.First ? n[c.a.Loyalty][r] : n[c.a.Achievement][r] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][r] : n[c.a.Cosmetic][c.c.Gallery][r]) && (l(e) ? s.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const s = parseInt(e.price || "0"),
						n = parseInt(t.price || "0");
					return s === n ? Object(a.b)(e, t) : s - n
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(m).sort((e, s) => {
					const n = t[e.id],
						r = t[s.id];
					return Object(a.b)(n, r)
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
						r = {
							description: n.description,
							highlight: n.extra && n.extra.style && n.extra.style.color,
							id: n.id,
							locked: [],
							title: n.title,
							unlocked: []
						};
					t[c.a.Loyalty][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][s] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][s] = {
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
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				r = s("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				a = s("./src/reddit/constants/modals.ts");
			const i = {
				active: !1,
				assetUrls: null
			};
			var c = (e = null, t) => {
				var s;
				switch (t.type) {
					case r.o:
						const {
							avatarMarketingEvent: n
						} = t.payload;
						return n ? function(e) {
							const {
								startsAt: t,
								endsAt: s,
								webAssetUrls: n
							} = e, r = t && new Date(t) <= new Date, o = !!s && new Date(s) < new Date, a = n || null;
							return {
								active: !!r && !o && !!a,
								assetUrls: a
							}
						}(n) : i;
					case o.c:
						return (null === (s = t.payload) || void 0 === s ? void 0 : s.id) === a.a.SNOOVATAR_MODAL ? i : e;
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				marketing: c
			})
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/lodash/omit.js"),
				r = s.n(n),
				o = s("./src/reddit/actions/grantUserFlair/constants.ts"),
				a = s("./src/reddit/actions/modQueue/constants.ts"),
				i = s("./src/reddit/actions/pages/constants.ts"),
				c = s("./src/reddit/actions/pages/postCreation.ts"),
				d = s("./src/reddit/actions/pages/postDraft.ts"),
				l = s("./src/reddit/actions/pages/subreddit.ts"),
				u = s("./src/reddit/actions/userFlair/constants.ts");
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
							response: s
						} = t.payload, {
							userFlair: n
						} = s, r = {
							...e
						};
						return Object.keys(n).forEach(e => {
							r[e] || (r[e] = n[e])
						}), r
					}
					case u.r: {
						const {
							subredditId: s,
							applied: n,
							displaySettings: r
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								applied: n,
								displaySettings: r
							}
						}
					}
					case o.h: {
						const {
							subredditId: s,
							applied: n
						} = t.payload;
						return {
							...e,
							[s]: {
								...e[s],
								applied: n
							}
						}
					}
					case u.j: {
						const {
							subredditId: s,
							isEnabled: n
						} = t.payload, r = {
							...e[s].displaySettings,
							isEnabled: n
						};
						return {
							...e,
							[s]: {
								...e[s],
								displaySettings: r
							}
						}
					}
					case u.d: {
						const {
							subredditId: s,
							canAssignOwn: n
						} = t.payload, r = {
							...e[s].permissions,
							canAssignOwn: n
						};
						return {
							...e,
							[s]: {
								...e[s],
								permissions: r
							}
						}
					}
					case u.q: {
						const s = t.payload,
							n = e[s.subredditId],
							r = e[s.subredditId].templates,
							o = e[s.subredditId].templateIds,
							a = {
								...r,
								[s.template.id]: s.template
							},
							i = [...o];
						return i.includes(s.template.id) || i.push(s.template.id), {
							...e,
							[s.subredditId]: {
								...n,
								templates: a,
								templateIds: i
							}
						}
					}
					case u.g: {
						const s = t.payload,
							n = e[s.subredditId],
							o = e[s.subredditId].templates,
							a = e[s.subredditId].templateIds,
							i = r()(o, s.templateId),
							c = a.filter(e => e !== s.templateId);
						return {
							...e,
							[s.subredditId]: {
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
						const s = t.payload,
							n = e[s.subredditId];
						return {
							...e,
							[s.subredditId]: {
								...n,
								templateIds: s.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/routes/avatar/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/actions/pages/avatar.ts");
			const a = "/avatar",
				i = [a, `${a}/:username`, `${a}/:username/:avatarId`],
				c = {
					action: o.a,
					chunk: r.q.AVATAR,
					component: Object(n.a)({
						resolved: {},
						chunkName: () => "Avatar",
						isReady(e) {
							const t = this.resolve(e);
							return !1 !== this.resolved[t] && !!s.m[t]
						},
						importAsync: () => s.e("Avatar").then(s.bind(null, "./src/reddit/pages/Avatar/index.tsx")),
						requireAsync(e) {
							const t = this.resolve(e);
							return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
						},
						requireSync(e) {
							const t = this.resolve(e);
							return s(t)
						},
						resolve() {
							return "./src/reddit/pages/Avatar/index.tsx"
						}
					}),
					exact: !0,
					meta: {
						name: r.Jb.AVATAR
					},
					path: i
				};
			t.b = c
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return o
			}));
			const n = (e, {
					post: t
				}) => {
					const s = t.belongsTo.id;
					if (!s) return null;
					const n = e.authorFlair.models[s];
					if (!n) return null;
					const r = t.author;
					return r && n[r] || null
				},
				r = (e, {
					subredditId: t
				}) => {
					const s = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!s) return null;
					if (!t) return null;
					const n = e.authorFlair.models[t];
					return n ? n[s] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/avatar/index.ts"),
				a = s("./src/reddit/selectors/experiments/econ/index.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const i = e => {
					var t, s;
					return !!(null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.marketing)
				},
				c = Object(n.a)(a.c, e => {
					var t, s;
					const n = null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.marketing;
					return (null == n ? void 0 : n.active) ? n.assetUrls && n.assetUrls[0] : null
				}, (e, t) => e ? t : null)
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "g", (function() {
				return u
			})), s.d(t, "f", (function() {
				return m
			})), s.d(t, "c", (function() {
				return p
			})), s.d(t, "e", (function() {
				return b
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				a = s("./src/reddit/selectors/userPrefs.ts");
			const i = 1e4,
				c = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.l
					});
					return t === n.q.VoteCountOnly || t === n.q.CommentCountOnly || t === n.q.VoteAndCommentCount
				},
				d = e => {
					if (Object(a.c)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.l
					});
					return t === n.q.VoteCountOnly || t === n.q.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.c)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.l
					});
					return t === n.q.CommentCountOnly || t === n.q.VoteAndCommentCount
				},
				u = (e, {
					post: t
				}) => m(e, {
					postId: t.id
				}),
				m = (e, {
					postId: t
				}) => {
					const s = e.posts.models[t];
					if (Object(a.c)(e) || !s || s.isSponsored || s.isScoreHidden || s.score >= i) return !1;
					const r = Object(o.d)(e, {
							experimentName: n.l
						}),
						c = null == r ? void 0 : r.variant;
					return c === n.q.VoteCountOnly || c === n.q.VoteAndCommentCount
				},
				p = (e, {
					postId: t
				}) => {
					const s = e.posts.models[t];
					if (Object(a.c)(e) || !s || s.isSponsored || s.numComments >= i) return !1;
					const r = Object(o.d)(e, {
							experimentName: n.l
						}),
						c = null == r ? void 0 : r.variant;
					return c === n.q.CommentCountOnly || c === n.q.VoteAndCommentCount
				},
				b = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.fb
					}) === n.rb.Enabled
				}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "f", (function() {
				return o
			})), s.d(t, "g", (function() {
				return a
			})), s.d(t, "c", (function() {
				return i
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			const n = e => e.gild.gildModalThingId,
				r = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				i = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return m
			})), s.d(t, "b", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "e", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/models/Gold/Award.ts"),
				o = s("./src/reddit/selectors/commentSelector.ts"),
				a = s("./src/reddit/selectors/gold/giveAwards.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, s) => {
					const n = t ? e[`staticIcon${s}`] : e[`icon${s}`];
					return (null == n ? void 0 : n.url) ? n.url : t ? e.staticIcon.url : e.icon.url
				},
				m = ({
					award: e,
					size: t,
					prefersReducedMotion: s,
					postOrComment: n
				}) => e.awardSubType === r.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: s,
					postOrComment: n
				}) => {
					let r = e;
					if ((null == n ? void 0 : n.awardCountsById) && n.awardCountsById[e.id] && e.tiers) {
						const t = n.awardCountsById[e.id];
						r = e.tiers.reduce((e, s) => t >= s.awardingsRequired ? s : e)
					}
					return u(r, s, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: s,
					postOrComment: n
				}) : u(e, s, t),
				p = Object(n.a)((e, {
					awards: t,
					minSize: s,
					postOrCommentId: n
				}) => {
					const r = Object(d.c)(e),
						a = l.find(e => e >= s),
						c = n ? Object(i.F)(e, {
							postId: n
						}) || Object(o.a)(e, {
							commentId: n
						}) : void 0;
					return t.reduce((e, t) => (t && (e[t.id] = m({
						award: t,
						size: a,
						prefersReducedMotion: r,
						postOrComment: c
					})), e), {})
				}),
				b = (e, {
					award: t,
					minSize: s,
					postOrCommentId: n
				}) => t ? p(e, {
					awards: [t],
					minSize: s,
					postOrCommentId: n
				})[t.id] : void 0,
				f = (e, {
					minSize: t,
					userName: s
				}) => {
					const n = Object(c.mb)(e, {
						userName: s
					});
					if (n && n.awardedLastMonth && n.awardedLastMonth.topAward) return b(e, {
						award: n.awardedLastMonth.topAward,
						minSize: t
					})
				},
				h = e => {
					const t = Object(a.b)(e),
						s = Object(a.a)(e);
					return b(e, {
						award: t,
						postOrCommentId: s || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = e => e.gild.selectedAward,
				r = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, s) {
			"use strict";
			s.d(t, "q", (function() {
				return a
			})), s.d(t, "s", (function() {
				return i
			})), s.d(t, "r", (function() {
				return c
			})), s.d(t, "u", (function() {
				return d
			})), s.d(t, "t", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			})), s.d(t, "p", (function() {
				return m
			})), s.d(t, "a", (function() {
				return p
			})), s.d(t, "n", (function() {
				return b
			})), s.d(t, "o", (function() {
				return f
			})), s.d(t, "c", (function() {
				return h
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "l", (function() {
				return E
			})), s.d(t, "w", (function() {
				return v
			})), s.d(t, "x", (function() {
				return O
			})), s.d(t, "v", (function() {
				return x
			})), s.d(t, "y", (function() {
				return S
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "g", (function() {
				return C
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "k", (function() {
				return y
			})), s.d(t, "j", (function() {
				return T
			})), s.d(t, "m", (function() {
				return I
			})), s.d(t, "e", (function() {
				return w
			})), s.d(t, "d", (function() {
				return k
			}));
			var n = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/goldPurchase/index.ts");
			Object(r.a)({
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
						s = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && s && t.find(e => e.mobileId === s) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				h = e => e.features.goldPurchase.payment.paymentMethod,
				_ = e => e.features.goldPurchase.payment.cardName,
				E = e => e.features.goldPurchase.payment.postalCode,
				v = e => e.features.goldPurchase.payment.savedCardsPending,
				O = e => e.features.goldPurchase.payment.savedCards,
				x = e => e.features.goldPurchase.payment.rememberCard,
				S = e => e.features.goldPurchase.payment.useSavedCard,
				g = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				C = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				j = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				y = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				T = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				I = e => e.features.goldPurchase.payment.stripeToken.pending,
				w = e => e.features.goldPurchase.payment.paypal.passthrough,
				k = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/posts.ts");
			const i = Object(n.a)(e => Object(o.c)(e, {
				experimentName: r.cd,
				experimentEligibilitySelector: o.a
			}), a.F, (e, t) => e === r.md.Enabled && (null == t ? void 0 : t.isCreatedFromAdsUi) || (null == t ? void 0 : t.isSponsored))
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/models/Flair/index.ts"),
				o = s("./src/reddit/selectors/moderatorPermissions.ts"),
				a = s("./src/lib/initializeClient/installReducer.ts"),
				i = s("./src/reddit/reducers/features/userFlair/index.ts");
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
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : r.b.Right,
				u = Object(n.a)((e, {
					subredditId: t
				}) => {
					const s = c(e, {
						subredditId: t
					});
					if (s) return {
						type: r.d.UserFlair,
						displaySettings: s.displaySettings,
						permissions: s.permissions
					}
				}),
				m = (e, {
					subredditId: t
				}) => {
					const s = d(e, {
							subredditId: t
						}),
						n = u(e, {
							subredditId: t
						}),
						r = c(e, {
							subredditId: t
						});
					if (!s || !n || !r) return !1;
					if (r.applied) return !0;
					const a = Object(o.g)(e, {
							subredditId: t
						}),
						{
							canUserChange: i
						} = n.permissions;
					return !!r.templateIds.find(e => {
						return !r.templates[e].modOnly || a
					}) && i
				}
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts");
			const r = e => !o(e) && !!e.user.prefs.subscriptionsPinned,
				o = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.Jb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./src/lib/fastdom/index.ts"),
				o = s("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				i = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = s("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${i}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === i && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(a, `${n.a.redditUrl}${c}`, e))
					} catch (s) {
						return void console.error(a, `${n.a.redditUrl}${c}`, s)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, s) {
					const n = {
						name: e,
						props: t,
						element: s
					};
					this.queue.push(n), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(n)
				}
				fireEvent(e) {
					e.element.dispatchEvent(new CustomEvent(e.name, {
						detail: e.props
					}))
				}
				fireEventsQueue() {
					r.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-ClassicPost.a39d8ddb5e90ae3f6b66.js.map