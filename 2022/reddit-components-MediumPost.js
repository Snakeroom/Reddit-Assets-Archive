// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.2040cec2e600dae6f212.js
// Retrieved at 7/25/2022, 6:10:04 PM by Reddit Dataminer v1.0.0
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
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						f = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						h = !o && !l && /macintosh/i.test(t),
						x = !i && !u && !m && !p && /linux/i.test(t),
						v = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						_ = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						E = !O && /[^-]mobi/i.test(t),
						S = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: _ || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || _
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: _ || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: _ || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: _ || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, v ? (r.msedge = e, r.version = v) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
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
						version: v
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || _
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
						version: _ || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: _ || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || _
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || _
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || _
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: _
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, _ && (r.version = _)) : o ? (r = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, _ && (r.version = _)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || _
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && _ && (r.version = _)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : h ? (r.mac = e, r.osname = "macOS") : S ? (r.xbox = e, r.osname = "Xbox") : f ? (r.windows = e, r.osname = "Windows") : x && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? g = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? g = (g = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? g = (g = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? g = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? g = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? g = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? g = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (g = s(/tizen[\/\s](\d+(\.\d+)*)/i)), g && (r.osversion = g);
					var C = !r.windows && g.split(".")[0];
					return O || c || "ipad" == o || i && (3 == C || C >= 4 && !E) || r.silk ? r.tablet = e : (E || "iphone" == o || "ipod" == o || i || a || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([a, e[c]]) < 0
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
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				r = s("./node_modules/lodash/_baseEach.js"),
				o = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? n : i,
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
			s.d(t, "a", (function() {
				return d
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
			const c = (e, t, s) => (function() {
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
							actionInfo: Object(i.Q)(s, r)
						}
					})), u(r.target, r.currentTarget, l.anchorsAndButtons) && n(r)
				}
			});

			function d(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: o,
						clickTrackingId: i,
						...d
					} = t, l = Object(n.useCallback)(c(i, o, s), [i, o, s]);
					return r.a.createElement(e, a({}, d, {
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
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
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
				let c = "";
				if (r) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					c = i || Object(n.D)(e)
				} else c = Object(n.D)(e);
				const d = o.a.parse(c),
					l = d.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, s) {
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
		"./src/lib/hooks/useTooltip.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/icepick/icepick.js"),
				r = s("./node_modules/react/index.js"),
				o = s("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(n.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, s] = Object(r.useState)(null), [i, c] = Object(r.useState)(null), [d, l] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), p = Object(r.useCallback)(async () => m(!0), []), b = Object(r.useCallback)(() => m(!1), []), f = Object(r.useCallback)(() => m(!u), [u]), h = Object(r.useMemo)(() => {
					const t = a(e);
					return d ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: x,
					styles: v,
					update: _
				} = Object(o.a)(t, i, h);
				return Object(r.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: v.arrow,
						...x.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: v.popper,
						...x.popper
					},
					show: p,
					target: {
						element: t,
						ref: s
					},
					toggle: f,
					visible: u,
					update: _
				}), [l, x, c, b, p, v, t, s, f, u, _])
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
				return function() {
					for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
					return null !== t && o.length === t.length && r()(o, (e, s) => e === t[s]) || (t = o, s = e(...o)), s
				}
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts");
			const o = [r.sc, r.pb, r.B, r.Q, r.kb, r.Sb],
				i = {
					[r.Sb]: e => n.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [n.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.kb]: e => n.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [n.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.Q]: e => n.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [n.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.B]: e => n.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [n.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.pb]: e => n.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [n.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.sc]: e => n.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [n.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[r.Sb]: e => n.fbt._("{amount}s", [n.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.kb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.Q]: e => n.fbt._("{amount}h", [n.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.B]: e => n.fbt._("{amount}d", [n.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.sc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.pb]: e => n.fbt._("{amount}m", [n.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.sc]: e => n.fbt._("{amount}y", [n.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.sc]: "",
						[r.pb]: "",
						[r.B]: "",
						[r.Q]: "",
						[r.kb]: "",
						[r.Sb]: ""
					};
				let u = d - c;
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
		"./src/reddit/actions/creatorStats/constants.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
			}));
			const n = "CREATOR_STATS_PENDING",
				r = "CREATOR_STATS_LOADED"
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
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
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
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
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
				return v
			})), s.d(t, "h", (function() {
				return _
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "q", (function() {
				return E
			})), s.d(t, "o", (function() {
				return S
			}));
			const n = "CREATE_COLLECTION_PENDING",
				r = "CREATE_COLLECTION_SUCCESS",
				o = "CREATE_COLLECTION_FAILED",
				i = "GET_SUBREDDIT_COLLECTION_SUCCESS",
				a = "REMOVE_POST_FROM_COLLECTION_SUCCESS",
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
				v = "REORDER_COLLECTION_SUCCESS",
				_ = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				E = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				S = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, s) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				ctaExperiment: "_3JgLF82C_0NM3uN8pOyJTu",
				borders: "_3LUqJuEsn44ivYFDMegLQG",
				borderTop: "_2n1stnecLcYB2e1RjBwSq_",
				borderBottom: "_2EVJbBkxJortsXpkuVWaPA"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
				a = s.n(i);

			function c(e) {
				const {
					className: t,
					ctaExperimentDesign: s,
					children: n
				} = e, i = Object(o.a)(a.a.adLinkWrapper, t, {
					[a.a.ctaExperiment]: !!s,
					[a.a.borders]: "classic" === s,
					[a.a.borderTop]: "compact" === s || "conversation" === s,
					[a.a.borderBottom]: "card" === s
				});
				return r.a.createElement("div", {
					className: i
				}, n)
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, s) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				ctaExperimentLink: "a3FqJA6bjuoLKqPBEp52R",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				ctaExperimentNoPadding: "_2pWpf_lwFeF9qkMKAgnF1j",
				ctaExperimentPadded: "_3xECPPLU5gHGEwtMV_um7R",
				productTitle: "_3IN2NbpghDp3ddkK_5fJX8",
				subcaption: "_20wkPJgadrJIAZtTeFXQXU",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				u = s.n(l);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: r
				} = e, {
					source: l,
					callToAction: m,
					caption: p
				} = t, b = Object(d.s)(s);
				if (!l || !l.url) return null;
				let f = l.displayText;
				l.displayText.length >= 40 && (f = l.displayText.slice(0, 40 - "...".length) + "...");
				const h = Object(i.a)(u.a.leftSideContent, {
						[u.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[u.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					x = Object(i.a)(u.a.displayUrl, {
						[u.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: h
				}, p && !r && o.a.createElement("span", {
					className: u.a.caption,
					title: p
				}, p), !b && o.a.createElement(c.a, {
					href: l.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: l,
					className: x
				}, f), b && o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
					className: u.a.productTitle
				}, f), o.a.createElement("span", {
					className: u.a.subcaption
				}, s.subcaption))), m && o.a.createElement(a.a, {
					className: u.a.callToAction,
					href: l.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: l,
					showCTAExperiment: !!e.ctaExperimentDesign
				}, m))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, s) {
			e.exports = {
				CallToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				callToActionButton: "_2pjSQOdNtYd1I2W0Z1Im8I",
				ctaExperiment: "O3tUaKrd54EXILNilEqF_",
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
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/reddit/components/CallToActionButton/index.m.less"),
				c = s.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: s,
					...n
				} = e;
				return r.a.createElement(i.b, d({
					className: Object(o.a)(c.a.CallToActionButton, t, {
						[c.a.mNotCardView]: n.isNotCardView,
						[c.a.ctaExperiment]: !!s
					})
				}, n))
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, c = Object(o.e)(e => e.subreddits.questions), d = Object(o.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let r = 0, o = -999; r <= l; r += 1) {
					const e = s[r],
						t = d[e].belongsTo.id;
					p(e) && r - o >= a && !u.has(t) && (o = r, u.add(t), r === l && (m = !0))
				}
				return m ? r.a.createElement(i.a, {
					subredditId: n,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = c[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
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
			const u = Object(i.a)(e => {
				let {
					className: t,
					...s
				} = e;
				return r.a.createElement(a.a, l({}, s, {
					className: Object(o.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(o.a)(d.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(a.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
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
				return u
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/lib/hooks/usePrevious.ts"),
				i = s("./src/realtime/GQLSubscription/async.tsx"),
				a = s("./src/reddit/hooks/useIntersectionObserver.ts");
			const c = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var d = s("./src/reddit/components/CountAnimation/index.m.less"),
				l = s.n(d);
			var u;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(u || (u = {}));
			const m = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: s,
					incrementDelta: d,
					initialDelay: u,
					initialDisplayCount: p,
					isLoadTestOnly: b,
					onDataCB: f,
					postId: h,
					queryKey: x,
					queryVariables: v,
					shouldDisjointAnimation: _,
					subsequentRecurringDelay: O
				} = e, [E, S] = Object(n.useState)(!1), [g, C] = Object(n.useState)(!0), [y, j] = Object(n.useState)([]), [T, k] = Object(n.useState)(c(p).reverse()), N = Object(n.useRef)(!1), w = Object(n.useRef)(null), P = Object(n.useRef)(e => {}), I = Object(n.useRef)();
				P.current = Object(n.useCallback)(e => {
					let s = e || d();
					const n = [...T].reverse().join("");
					let r = parseInt(n) + s;
					r > t && (s = t - parseInt(n), r = t);
					const o = c(r).reverse();
					S(!1), j(T), k(o), C(!1), I.current = setTimeout(() => {
						S(!0)
					}, 0)
				}, [t, d, T]);
				const A = Object(n.useRef)(() => {}),
					M = Object(n.useRef)(),
					F = Object(n.useRef)();
				A.current = Object(n.useCallback)(() => {
					F.current = setTimeout(() => {
						P.current();
						const e = [...y].reverse().join("");
						parseInt(e) < t && A.current()
					}, O())
				}, [t, O, y]);
				const D = Object(n.useRef)(0),
					R = Object(n.useRef)(!1),
					L = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: s
							} = e, n = 1 !== s;
							t ? (R.current = !0, N.current || (N.current = !0, M.current = setTimeout(() => {
								P.current(), A.current()
							}, u())), D.current > 0 && (P.current(D.current), D.current = 0)) : n && (R.current = !1)
						})
					}, []);
				Object(a.a)(w, L);
				const [B, U] = Object(n.useState)(!1), V = Object(n.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: s
						} = e, n = 1 !== s;
						t ? U(!0) : n && U(!1)
					})
				}, []), W = Object(n.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(a.a)(w, V, W.current);
				const q = Object(o.a)(t);
				Object(n.useEffect)(() => {
					if (void 0 !== q && q !== t) {
						const e = t - q;
						R.current ? P.current(e) : D.current += e
					}
					return () => {
						clearTimeout(M.current), clearTimeout(F.current), clearTimeout(I.current)
					}
				}, [t]);
				const Y = Object(n.useCallback)(() => C(!0), [C]),
					H = 0 === y.length,
					G = g || H,
					z = Object(n.useRef)(((e, t) => `${t}_${e}_count_anim`)(h, s));
				return r.a.createElement(r.a.Fragment, null, !b && r.a.createElement("div", {
					className: l.a.countAnimation
				}, T.map((e, t) => {
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
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: Y,
						style: E && y.length > 0 && !g ? {
							transform: `translateY(-${_&&s.length>1?100:100*(s.length-1)}%)`,
							transitionDuration: `${(_?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, G ? r.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : s.map((e, t) => {
						const n = 0 === t || t === s.length - 1;
						if (!_ || _ && n) return r.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), r.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...T].reverse().join(""))), r.a.createElement("span", {
					ref: w
				}), B && r.a.createElement(i.a, {
					variables: v,
					onData: b ? m : f,
					queryKey: x,
					uniqueKey: z.current
				}))
			}
		},
		"./src/reddit/components/CreatorStats/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
			})), s.d(t, "d", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts");
			const r = 16374492e5,
				o = 45 * n.B;
			var i;
			! function(e) {
				e.NotAvailableYet = "NotAvailableYet", e.NotAvailable = "NotAvailable", e.Available = "Available", e.Expired = "Expired", e.Quarantined = "Quarantined"
			}(i || (i = {}));
			const a = e => {
					return e < Date.now() - o
				},
				c = e => e > r,
				d = (e, t, s, n) => {
					if (!s && !c(e.created)) return i.NotAvailable;
					if (s && !c(e.created) || a(e.created)) return i.Expired;
					if (s && n) return i.Quarantined;
					if (!t) return i.NotAvailableYet;
					const {
						shareAllCountTotals: r,
						shareCopyCountTotals: o,
						viewCountTotals: d,
						viewCountTrends: l
					} = t;
					return (null == r ? void 0 : r.availability.isAvailable) && (null == o ? void 0 : o.availability.isAvailable) && (null == d ? void 0 : d.availability.isAvailable) && (null == l ? void 0 : l.availability.isAvailable) && l.data && 0 !== l.data.length ? !(null == d ? void 0 : d.totalCount) || d.totalCount < 10 ? i.NotAvailableYet : i.Available : i.NotAvailableYet
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
				i = s("./src/lib/eventTools/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = s("./src/reddit/components/PostFollow/index.tsx"),
				l = s("./src/reddit/helpers/postCollection.ts"),
				u = s("./src/reddit/helpers/postEvent.ts"),
				m = s("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = s.n(m);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: s,
					post: n
				} = e;
				if (!Object(u.a)(n)) return null;
				const a = n && n.eventInfo,
					m = Object(l.a)(n),
					f = a && Object(i.c)(a.eventStart, a.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, r.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: n
				}), !m && f && r.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: n,
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
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/icons/fonts/helpers.tsx"),
				d = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = s.n(d);
			var u = e => r.a.createElement("i", {
				className: Object(a.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var m = e => r.a.createElement("i", {
					className: Object(a.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = s("./src/reddit/components/HumanDate/index.tsx"),
				b = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				f = s.n(b),
				h = s("./src/lib/lessComponent.tsx");
			const x = h.a.span("PostEventFutureText", f.a),
				v = h.a.span("PostEventPastText", f.a),
				_ = h.a.span("PostEventNowText", f.a),
				O = h.a.span("Container", f.a),
				E = h.a.wrapped(u, "CalendarIcon", f.a),
				S = h.a.wrapped(m, "LiveIcon", f.a),
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
						eventIsLive: a,
						eventStart: c
					} = s, d = Object(o.e)(c, n);
					let l, u;
					if (this.state.mounted || d === o.a.Live) l = r.a.createElement(p.c, {
						startTime: c,
						endTime: n,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						l = r.a.createElement(g, {
							className: e
						})
					}
					if (a) u = r.a.createElement(_, null, r.a.createElement(S, null), l);
					else if (d === o.a.Future) u = r.a.createElement(x, null, r.a.createElement(E, null), l);
					else {
						if (d !== o.a.Past) return null;
						u = r.a.createElement(v, null, r.a.createElement(E, null), l)
					}
					return r.a.createElement(O, {
						className: e
					}, u)
				}
			}
			t.a = C
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
				i = s.n(o),
				a = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				d = s("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = s.n(d);
			t.a = e => i.a.createElement(a.i, {
				className: l.a.modalHeader
			}, i.a.createElement(a.q, null, e.title), i.a.createElement(c.a, {
				onClick: e.onClosePressed || r.a
			}, i.a.createElement(a.b, null)))
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
			const i = n.a.div("Wrapper", o.a);
			t.a = i
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
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Flair/index.tsx"),
				c = s("./src/reddit/components/FlairPreview/index.m.less"),
				d = s.n(c);
			const l = i.a.span("Placeholder", d.a),
				u = i.a.div("SelectedFlair", d.a),
				m = i.a.wrapped(a.b, "FlairComponent", d.a);
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
				i = s.n(o),
				a = s("./src/higherOrderComponents/makeAsync.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				u = s("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = s.n(u);
			const p = d.a.wrapped(e => i.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = r()((function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p;
					return Object(a.a)({
						getComponent: () => Object(l.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("FlairEdit")]).then(s.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
						ErrorComponent: e,
						LoadingComponent: e
					})
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/memoizeByReference/index.ts"),
				l = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/helpers/flair.ts"),
				m = s("./src/reddit/helpers/trackers/userFlair.ts"),
				p = s("./src/reddit/hooks/useTracking.ts"),
				b = s("./src/reddit/selectors/moderatorPermissions.ts"),
				f = s("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				h = s("./src/reddit/components/Flair/index.tsx"),
				x = s("./src/reddit/components/TrackingHelper/index.tsx"),
				v = s("./src/reddit/controls/RadioInput/index.tsx"),
				_ = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				O = s("./src/reddit/helpers/trackers/postComposer.ts"),
				E = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				S = s("./src/reddit/icons/svgs/Search/index.tsx"),
				g = s("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				C = s.n(g);
			class y extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						searchQuery: ""
					}, this.onSearchChange = e => {
						this.setState({
							searchQuery: e.target.value
						})
					}, this.onSearchClick = () => {
						this.props.sendEvent(Object(O.n)())
					}
				}
				render() {
					const {
						templates: e,
						templateIds: t,
						selectedTemplateId: s
					} = this.props, {
						searchQuery: r
					} = this.state, i = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(r)), a = !!s && i.some(e => e.id === s);
					return o.a.createElement("div", {
						className: C.a.container
					}, o.a.createElement("div", {
						className: C.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: C.a.searchInput,
						onChange: this.onSearchChange,
						onClick: this.onSearchClick,
						type: "text",
						placeholder: n.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: r
					}), o.a.createElement(S.a, {
						className: C.a.searchIcon
					})), o.a.createElement(v.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: s
					}, i.map((e, t) => {
						const n = Object(u.c)(e),
							r = s === e.id || !a && 0 === t;
						return o.a.createElement(_.a, {
							className: C.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: r ? 0 : -1,
							value: e.id
						}, o.a.createElement(h.b, {
							className: C.a.flairComponent,
							flair: n,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(E.a, {
							className: C.a.pencil
						}))
					})))
				}
			}
			var j = Object(x.c)(y),
				T = s("./src/reddit/components/FlairSearch/index.m.less"),
				k = s.n(T);
			const N = Object(d.a)(e => e && Object(u.c)(e)),
				w = Object(a.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				P = Object(i.b)(w);
			t.a = P(e => {
				const {
					flairTemplateType: t,
					flair: s,
					className: r,
					onChange: i,
					subredditId: a,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: h
				} = e, x = Object(p.a)(), v = d && s && s.templateId && d[s.templateId] || void 0, _ = Object(f.a)(), O = s || N(v);
				return o.a.createElement("div", {
					className: Object(c.a)(r, k.a.container)
				}, d && l && o.a.createElement(j, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								s = Object(u.c)(t);
							x(Object(m.b)({
								userFlair: t
							})), i(s)
						}
					},
					selectedTemplateId: v ? v.id : "",
					templateIds: l,
					templates: d
				}), O && v && (h || v.textEditable) && o.a.createElement("div", {
					className: k.a.flairEditSection
				}, o.a.createElement("div", {
					className: k.a.editLabel
				}, n.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && o.a.createElement("div", {
					className: k.a.restrictionHintText
				}, Object(u.k)(v)), o.a.createElement(_, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: O,
					flairTemplate: v,
					flairTemplateType: t,
					isFlairModOnly: v.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let s = e;
						t && (s = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), i(s)
					},
					subredditId: a
				})))
			})
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
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/fbt/lib/FbtPublic.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/NotificationButton/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				d = s("./src/reddit/components/Thumbnail/index.tsx"),
				l = s("./src/reddit/constants/posts.ts"),
				u = s("./src/reddit/helpers/trackers/post.ts"),
				m = s("./src/reddit/hooks/useIsClient.ts"),
				p = s("./src/reddit/models/Subreddit/index.ts"),
				b = s("./src/reddit/components/MediumPost/index.m.less"),
				f = s.n(b);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: n,
					redditStyle: b,
					shouldShowSubscribeButton: h,
					subredditOrProfile: x,
					templatePlaceholderImage: v,
					shouldShowFollowButton: _,
					isFollowed: O,
					isCommentsPage: E,
					onFollowPostClick: S
				} = e;
				return Object(m.a)() ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(i.a)(f.a.thumbnailContainer, {
						[f.a.mShowingButtonOrOverflow]: _ || h
					})
				}, r.a.createElement("div", {
					className: f.a.thumbnailContainerRow
				}, _ && r.a.createElement(a.a, {
					isFilled: !!O,
					onClick: S,
					hasTooltip: !0,
					tooltipText: o.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), h && x && r.a.createElement(c.a, {
					className: f.a.subscribeButton,
					getEventFactory: e => Object(u.k)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: x.name,
						type: Object(p.h)(x) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: s.id,
					small: !0
				})), r.a.createElement(d.a, {
					crosspost: t,
					isCommentsPage: E,
					post: s,
					redditStyle: b,
					forceShowNSFW: n,
					templatePlaceholderImage: v
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
				modModeBannerWrapper: "_1wpVciZItCVMc_3pYSceM5"
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
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				b = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				f = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				h = s("./src/reddit/components/FlairWrapper/index.tsx"),
				x = s("./src/reddit/components/Flatlist/index.tsx"),
				v = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				_ = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				E = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				S = s("./src/reddit/components/ModModeReports/index.tsx"),
				g = s("./src/reddit/components/ModModeReports/helpers.ts"),
				C = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				y = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				j = s("./src/reddit/components/PostContainer/index.tsx"),
				T = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				k = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				N = s("./src/reddit/components/PostTitle/index.tsx"),
				w = s("./src/reddit/components/PostTopLine/index.tsx"),
				P = s("./src/reddit/components/PostTopMeta/index.tsx"),
				I = s("./src/reddit/components/SourceLink/index.tsx"),
				A = s("./src/reddit/constants/postLayout.ts"),
				M = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				D = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				R = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				L = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				B = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				U = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				V = s.n(U),
				W = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				q = s("./src/reddit/hooks/useIsOverlay.ts"),
				Y = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				H = s("./src/reddit/hooks/useUserContext.ts"),
				G = s("./src/reddit/models/Media/index.ts"),
				z = s("./src/reddit/models/Vote/index.ts"),
				Q = s("./src/reddit/contexts/Post/index.tsx"),
				J = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				Z = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				K = s("./src/reddit/selectors/i18n/index.ts"),
				X = s("./src/reddit/selectors/moderatorPermissions.ts"),
				$ = s("./src/reddit/selectors/postFlair.ts"),
				ee = s("./src/reddit/selectors/posts.ts"),
				te = s("./src/reddit/selectors/showPromotedCTA.ts"),
				se = s("./src/reddit/selectors/user.ts"),
				ne = s("./src/reddit/components/MediumPost/index.m.less"),
				re = s.n(ne),
				oe = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx");

			function ie() {
				return (ie = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ae = () => Object(i.c)({
					crosspost: ee.d,
					flairStyleTemplate: M.W,
					isActive: ee.j,
					isBlurredPreview: Z.b,
					isCurrentUserProfilePost: ee.l,
					isRecommendationPost: (e, t) => !!t.post.recommendationContext && Object(se.Q)(e),
					showPromotedCTA: te.a,
					moderatorPermissions: X.m,
					shouldShowNsfwListingBelow: K.b,
					showEditFlair: $.a,
					showMedia: M.s,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(X.i)(e, s.id)
					},
					isOptionalTextEnabled: J.a
				}),
				ce = e => {
					const {
						className: t,
						crosspost: s,
						currentUser: i,
						eventFactory: M,
						flairStyleTemplate: U,
						hideNSFWPref: W,
						hostPostData: q,
						inSubredditOrProfile: H = !1,
						isBlurredPreview: Q,
						isCheckboxSelected: J,
						isCommentsPage: Z,
						isCurrentUserProfilePost: K,
						isFrontpage: X,
						isModWithUserNotesPermissions: $,
						isOverlay: ee,
						isRecommendationPost: te,
						isTopicPage: se,
						isCommentCountAnimationEnabled: ne,
						isVoteCountAnimationEnabled: ie,
						isCountAnimShadowTestEnabled: ae,
						imageGalleryCurrentItem: ce,
						listingKey: de,
						moderatorPermissions: le,
						modModeEnabled: ue,
						onClickPost: me,
						post: pe,
						postId: be,
						postIds: fe,
						redditStyle: he,
						shouldHideFlair: xe,
						shouldShowNsfwListingBelow: ve,
						showBulkActionCheckbox: _e,
						showEditFlair: Oe,
						showMedia: Ee,
						showPromotedCTA: Se,
						sendEvent: ge,
						subredditOrProfile: Ce,
						toggleCheckbox: ye,
						isAvatarPostEnabled: je,
						isOptionalTextEnabled: Te
					} = e, ke = Object(o.d)(), Ne = e => e === z.a.upvoted ? ke(Object(d.kb)(be)) : ke(Object(d.w)(be)), we = () => ke(Object(d.gb)(be)), Pe = he ? void 0 : U, Ie = Object(L.a)(le), Ae = ue && Ie, Me = Object(D.a)(le), Fe = Object(R.a)(le), De = Object(E.a)(pe), Re = Object(g.c)(pe), Le = !!(null == q ? void 0 : q.shouldShowLinkedPosts), Be = ve, Ue = !Object(Y.a)() && Object(F.a)(pe), Ve = H && !Ee && !Le && !Be || je, We = Ve && !!pe.source && !s, qe = !(X && !!i || se) && !K && (!H || Le || Be) || te, Ye = (!H || Le || Be) && !pe.isSponsored, He = Object(a.t)(pe, ce), {
						source: Ge
					} = He, ze = !!(Q && (null == Ce ? void 0 : Ce.isNSFW)), Qe = Object(n.useRef)({
						renderingObjectInfo: pe
					});
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(j.a, {
						className: Object(c.a)(re.a.container, t, V.a.largeAndMediumPostStyles, V.a.largeAndMediumActiveStyles, Object(B.a)(e), {
							[V.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: ee,
						style: Object(B.b)(e.flairStyleTemplate),
						post: pe,
						onClick: me,
						eventFactory: M
					}, r.a.createElement(k.a, {
						model: pe,
						handleVote: Ne,
						showBulkActionCheckbox: _e,
						isCheckboxSelected: J,
						toggleCheckbox: ye,
						flairStyleTemplate: Pe,
						redditStyle: he,
						isVoteCountAnimation: ie,
						isCountAnimShadowTestEnabled: ae,
						postId: be
					}), r.a.createElement(y.a, {
						className: re.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: Pe,
						post: pe,
						redditStyle: he
					}, r.a.createElement(f.a, {
						post: pe
					}), r.a.createElement("article", {
						className: re.a.mainBody
					}, r.a.createElement("div", {
						className: re.a.content,
						"data-click-id": "body"
					}, !!pe.recommendationContext && r.a.createElement(C.a, {
						content: pe.recommendationContext.content,
						layout: A.g.Large,
						post: pe
					}), r.a.createElement(w.a, {
						className: re.a.postTopLine,
						hideNSFWPref: W,
						hostPostData: q,
						iconClassName: re.a.postTopLineIcon,
						inSubredditOrProfile: H,
						isCommentsPage: Z,
						isCurrentUserProfilePost: K,
						isModWithUserNotesPermissions: $,
						isOverlay: !!ee,
						isTopicPage: !!se,
						listingKey: de,
						post: pe,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: We,
						showSubreddit: Ye,
						showSubredditIcon: !0,
						subredditOrProfile: Ce
					}), r.a.createElement(N.c, {
						className: re.a.postTitle,
						post: pe,
						redditStyle: he,
						size: N.b.Large,
						titleColor: Pe && Pe.postTitleColor,
						isOverlay: ee
					}), Z && !xe && pe.flair && pe.flair.length > 0 && r.a.createElement(h.a, {
						className: Object(c.a)(Z && re.a.leftPadding),
						disableFlair: !Z,
						post: pe,
						sendEvent: ge
					}), pe.source && !pe.isSponsored && !s && !ze && r.a.createElement(r.a.Fragment, null, r.a.createElement(I.a, {
						className: re.a.sourceLink,
						isCommentsPage: Z,
						post: pe
					}), Te && pe.media && pe.media.type !== G.o.TEXT && pe.media.type !== G.o.IMAGE && pe.media.richtextContent && r.a.createElement(v.a, {
						content: pe.media.richtextContent,
						rtJsonElementProps: Qe.current
					}))), !Ve && Ue && r.a.createElement(oe.a, {
						crosspost: s ? pe : void 0,
						hasModPostPerms: Ie,
						isCommentsPage: Z,
						isOverlay: ee,
						modModeEnabled: ue,
						post: s || pe,
						redditStyle: he,
						shouldShowSubscribeButton: qe,
						subredditOrProfile: Ce,
						templatePlaceholderImage: Pe && Pe.postPlaceholderImage
					})), Se && Ge && Ge.url && !pe.isSurveyAd && r.a.createElement(u.a, {
						className: re.a.adLinkWrapper
					}, r.a.createElement(m.a, {
						post: pe,
						adLinkContent: He
					})), ue && Ie && De && r.a.createElement("div", {
						className: re.a.modModeBannerWrapper
					}, r.a.createElement(O.a, {
						thing: pe
					})), ue && Ie && Re && r.a.createElement("div", {
						className: re.a.modModeBannerWrapper
					}, r.a.createElement(S.a, {
						onIgnoreReports: we,
						reportable: pe
					})), r.a.createElement(_.d, null), r.a.createElement("div", {
						className: re.a.flatlistContainer
					}, r.a.createElement(b.a, {
						className: re.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Pe,
						redditStyle: he,
						model: pe,
						onVoteClick: Ne
					}), !pe.isSurveyAd && r.a.createElement(x.c, {
						currentUser: i,
						hasModFlairPerms: Me,
						hasModFullPerms: Fe,
						hasModPostPerms: Ie,
						hostPostData: q,
						isCommentCountAnimation: ne,
						isCountAnimShadowTestEnabled: ae,
						isOverlay: !!ee,
						listingKey: de,
						modModeEnabled: ue,
						onIgnoreReports: we,
						onOpenReportsDropdown: e => ke(Object(l.h)({
							tooltipId: e
						})),
						post: pe,
						showEditFlair: Oe,
						tooltipType: ee ? P.c.Lightbox : void 0,
						useFlatlistBreakpoints: Object(T.b)({
							editPost: !Ae,
							save: !Ae,
							hide: !1,
							report: !1
						})
					}))), X && r.a.createElement(p.a, {
						post: pe,
						postIds: null != fe ? fe : [],
						subredditId: null == Ce ? void 0 : Ce.id
					})))
				};
			t.default = Object(Q.b)(r.a.memo((function(e) {
				const t = Object(n.useMemo)(() => ae(), []),
					s = Object(o.e)(s => t(s, e), o.c),
					i = Object(W.a)(e.post),
					a = Object(H.a)();
				return r.a.createElement(ce, ie({}, e, s, {
					modModeEnabled: a.modModeEnabled,
					hideNSFWPref: a.prefs.hideNSFW,
					isOverlay: Object(q.a)(),
					isAvatarPostEnabled: i
				}))
			})))
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const r = e => (e => !e.isApproved && !!Object(n.b)(e, n.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx"
				}
			}, {
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(r.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(n.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ModModeBanners").then(s.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
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
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.m.less": function(e, t, s) {
			e.exports = {
				Row: "_3h6zBMaGJuwN_qOmhUyv7E",
				row: "_3h6zBMaGJuwN_qOmhUyv7E"
			}
		},
		"./src/reddit/components/ModQueueList/PostSortDropdown.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var n, r = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/addQueryParams/index.ts"),
				l = s("./src/lib/filterQueryParams/index.ts"),
				u = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/selectors/meta.ts"),
				f = s("./src/reddit/components/ModQueueList/PostSortDropdown.m.less"),
				h = s.n(f);
			! function(e) {
				e.NewestFirst = "newest", e.OldestFirst = "oldest", e.MostReportedFirst = "most_reported"
			}(n || (n = {}));
			const x = u.a.wrapped(m.b, "Row", h.a),
				v = Object(c.c)({
					currentPage: e => e.platform.currentPage,
					origin: b.k
				}),
				_ = Object(a.b)(v);
			t.b = _(e => i.a.createElement("div", {
				className: e.className
			}, i.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_newest"),
				to: Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page", "sort"])
			}, i.a.createElement(x, {
				displayText: r.fbt._("Newest first", null, {
					hk: "4buqk8"
				}),
				isSelected: !e.postSort
			})), i.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_oldest"),
				to: Object(d.a)(Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: n.OldestFirst
				})
			}, i.a.createElement(x, {
				displayText: r.fbt._("Oldest first", null, {
					hk: "1x9Jdr"
				}),
				isSelected: e.postSort === n.OldestFirst
			})), i.a.createElement(p.default, {
				onClick: e.sendEventWithName("modqueue_sort_most_reports"),
				to: Object(d.a)(Object(l.a)(`${e.origin}${e.currentPage.url}`, ["after", "before", "page"]), {
					sort: n.MostReportedFirst
				})
			}, i.a.createElement(x, {
				displayText: r.fbt._("Most reported first", null, {
					hk: "2ac4Mt"
				}),
				isSelected: e.postSort === n.MostReportedFirst
			}))))
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
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: s,
						onClick: n,
						hasTooltip: d,
						tooltipText: u,
						className: m
					} = e;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("button", {
					className: Object(o.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, r.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": u
				})), d && r.a.createElement(i.a, {
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
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
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
				return Object(d.a)().hideRecommendationContext ? null : r.a.createElement(a.b, {
					className: Object(o.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: s === c.g.Classic,
						[u.a.compactLayout]: s === c.g.Compact,
						[u.a.largeLayout]: s === c.g.Large
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
				return d
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/components/HumanDate/index.tsx"),
				o = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(r.d, {
					seconds: e.poll.endsAt / n.Sb
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
			t.a = Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: i
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
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
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
						i = Object(n.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, i), r.a.createElement("div", {
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
				x = s("./src/lib/classNames/index.ts"),
				v = s("./src/lib/objectSelector/index.ts"),
				_ = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = s("./src/reddit/components/PostContainer/index.m.less"),
				E = s.n(O);
			const S = Object(p.a)(() => Object(o.c)({
					basePixelMetadata: Object(v.a)((e, t) => {
						let {
							post: s
						} = t;
						return Object(f.b)(e, s.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: s
						} = t;
						return s.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: s
						} = t;
						return Object(f.i)(e, {
							postId: s.id
						})
					},
					pageType: e => Object(h.d)(e).pageType
				})),
				g = "post-container";
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
						pageType: p,
						sendEvent: f,
						style: h,
						ref: v,
						shouldAddGalleryViewability: _ = !0
					} = this.props, O = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: v,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, l, t, o, p))(s), l.id && o) {
								const {
									source: e
								} = Object(i.t)(l, o);
								e && e.outboundUrl && f(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(E.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": g,
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, s), S = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.E)(l.media) && _ ? r.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || S ? r.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(O))
				}
			}
			t.a = S(Object(_.a)(Object(m.c)(C)))
		},
		"./src/reddit/components/PostContent/ViewCount.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/components/CreatorStats/helpers.ts"),
				l = s("./src/reddit/selectors/creatorStats.ts"),
				u = s("./src/reddit/components/PostContent/viewCount.m.less"),
				m = s.n(u);
			t.a = e => {
				let {
					className: t,
					post: s,
					showViewCount: r
				} = e;
				const {
					upvotePercentString: u,
					viewCountString: p
				} = (e => {
					const t = e.upvoteRatio ? Math.round(100 * e.upvoteRatio).toString() : "",
						s = Object(c.b)(e.viewCount);
					return {
						upvotePercentString: n.fbt._("{percent upvoted}% Upvoted", [n.fbt._param("percent upvoted", t)], {
							hk: "432tjJ"
						}),
						viewCountString: n.fbt._({
							"*": "{number of views} Views",
							_1: "1 View"
						}, [n.fbt._plural(e.viewCount, "number of views", s)], {
							hk: "rP01m"
						})
					}
				})(s), b = r && !!s.viewCount, f = Object(i.e)(e => Object(l.a)(e, s.id)), h = Object(i.e)(e => Object(l.c)(e, s.id)), x = Object(d.c)(s, h), v = f && x === d.b.Available;
				return o.a.createElement("div", {
					className: Object(a.a)(m.a.viewCounts, t)
				}, b && o.a.createElement("span", null, p), b && !!s.upvoteRatio && o.a.createElement("span", {
					className: m.a.dotSpacer
				}), !!s.upvoteRatio && !v && o.a.createElement("span", null, u))
			}
		},
		"./src/reddit/components/PostContent/viewCount.m.less": function(e, t, s) {
			e.exports = {
				dotSpacer: "_3g_cwSqBe5o5mAuhfMeGu5",
				viewCounts: "t4Hq30BDzTeJ85vREX7_M"
			}
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
				i = s("./src/reddit/helpers/flair.ts"),
				a = s("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === a.f.Text || e.type === a.f.Image || e.type === a.f.Richtext);
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
				const a = Object(i.g)(t).length;
				return 0 === a ? {
					canSave: !1,
					reason: d.TextIsEmpty
				} : a > o.g ? {
					canSave: !1,
					reason: d.TextIsTooLong
				} : Object(i.n)(t) && !Object(i.r)(n) ? {
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
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
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
					} = this.props, r = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && r && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!s.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const f = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: s
				} = t;
				return {
					onFollow: () => e(Object(d.A)(s.isSponsored ? s.postId : s.id))
				}
			})(Object(l.c)(b))
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
				c = s("./src/reddit/controls/Checkbox/index.tsx"),
				d = s("./src/reddit/helpers/isPost.ts"),
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
					flairStyleTemplate: f,
					redditStyle: h,
					isOverlay: x,
					isVoteCountAnimation: v,
					postId: _,
					shouldShowUpvoteRatioOnHover: O
				} = e, E = `upvote-button-${t.id}${x?"-overlay":""}`;
				return r.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, n && r.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), r.a.createElement(a.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: E,
					isVoteCountAnimation: v,
					isCountAnimShadowTestEnabled: p,
					postId: _,
					scoreClassName: Object(o.a)(m.a.score, {
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
				isVisitedEnabled: "_2INHSNB8V5eaWp4P0rY_mE",
				Title: "_2SdHzo12ISmrC8H86TgSCp",
				title: "_2SdHzo12ISmrC8H86TgSCp",
				titleContainer: "y8HYJ-y_lTUHkQIc1mdCq",
				isNoWrap: "_2_QBmCTk6VD4M3dvKqXD23",
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
				return M
			})), s.d(t, "a", (function() {
				return Q
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/ads/index.ts"),
				l = s("./src/lib/classNames/index.ts"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/OutboundLink/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/helpers/flair.ts"),
				v = s("./src/reddit/helpers/path/index.ts"),
				_ = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/models/Flair/index.ts"),
				S = s("./src/reddit/models/Media/index.ts"),
				g = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = s("./src/lib/getShortenedLink.ts"),
				j = s("./src/reddit/components/FlairWrapper/index.tsx"),
				T = s("./node_modules/fbt/lib/FbtPublic.js"),
				k = s("./src/lib/prettyPrintNumber/index.ts"),
				N = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				w = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				P = s.n(w),
				I = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const A = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var M, F = Object(i.b)(A)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(I.a)() ? null : o.a.createElement("div", {
						className: Object(l.a)(e.className, P.a.proposalMetaData)
					}, o.a.createElement("span", null, T.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [T.fbt._param("count", Object(k.a)(n)), T.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(N.a, {
						className: P.a.proposalExpiry,
						poll: t
					}))
				})),
				D = s("./src/reddit/components/SEOTitle/index.tsx"),
				R = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				L = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				B = s("./src/reddit/selectors/user.ts"),
				U = s("./src/reddit/components/PostTitle/index.m.less"),
				V = s.n(U),
				W = s("./src/config.ts"),
				q = s("./src/reddit/hooks/useClickSourceData.ts"),
				Y = s("./src/reddit/hooks/usePostContext.ts"),
				H = s("./src/reddit/hooks/useTheme.ts"),
				G = s("./src/telemetry/models/Outbound.ts");

			function z() {
				return (z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(M || (M = {}));
			const Q = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: r,
						children: i,
						className: a,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const u = Object(H.a)();
					let m = "";
					switch (t) {
						case M.ExtraLarge:
							m = V.a.ExtraLarge;
							break;
						case M.Large:
							m = V.a.Large;
							break;
						case M.Medium:
							m = V.a.Medium;
							break;
						case M.Small:
							m = V.a.Small;
							break;
						case M.ExtraSmall:
							m = V.a.ExtraSmall;
							break;
						case M.Metadata:
							m = V.a.Metadata
					}
					return o.a.createElement("div", {
						className: Object(l.a)(V.a.Title, a, m, {
							[V.a.isNoWrap]: r,
							[V.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": s || Object(C.a)({
								redditStyle: c,
								theme: u
							}).titleText
						}
					}, n ? o.a.createElement(D.b, {
						type: n
					}, i) : i)
				},
				J = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: r,
						...i
					} = e;
					return o.a.createElement(a.a, z({}, i, {
						className: Object(l.a)(t, V.a.styledLink, {
							[V.a.isVisitedEnabled]: !s
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
					return o.a.createElement("div", {
						className: Object(l.a)(V.a.titleContainer, n, {
							[V.a.isNoWrap]: s,
							[V.a.isVisitedEnabled]: !t
						})
					}, r)
				},
				K = Object(c.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(m.q)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: L.e,
					shouldOpenPostInNewTab: B.jb
				}),
				X = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, r = Object(i.d)(), a = Object(q.a)(), c = Object(i.e)(R.b), l = Object(i.e)(R.c), u = e => {
						!c && !l || t.media && Object(S.H)(t.media) || (e.preventDefault(), r(Object(h.bb)(Object(v.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(Z, {
						nowrap: e.nowrap
					}, o.a.createElement($, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(p.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, o.a.createElement($, e)); {
						const r = t.media && Object(S.H)(t.media) ? Object(_.c)(t.id, s.name) : t.permalink,
							i = e.isCommentPermalink ? Object(v.b)(r) : Object(f.a)(r, void 0, a);
						return o.a.createElement(Z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return s ? o.a.createElement(p.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, o.a.createElement($, t)) : o.a.createElement($, t)
						})(t, e) : o.a.createElement(J, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: i,
							onClick: u
						}, o.a.createElement($, e)))
					}
				},
				$ = e => {
					const {
						leftFlair: t,
						isCommentsPageAd: s,
						post: n
					} = e;
					let r = e.format ? e.format(n) : n.title;
					s && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const i = e.isCommentsPage ? D.a.PostComments : D.a.PostItem,
						a = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return o.a.createElement(Q, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: a,
						size: e.size,
						titleColor: e.titleColor,
						titleType: i
					}, t && o.a.createElement(j.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), r)
				},
				ee = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: n
					} = e, {
						isSponsored: r
					} = n, i = e.isCommentsPage ? G.SourceElement.PostLink : G.SourceElement.ListingPostLink;
					if (Object(I.a)()) return null;
					if (s && n.isNSFW) return null;
					const a = !t && !e.isCrosspost && e.size !== M.Large && !n.isSponsored && !(n.media && Object(S.H)(n.media)) && (n.source || n.media && (n.media.type === S.o.GIFVIDEO || n.media.type === S.o.IMAGE || n.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return o.a.createElement(b.a, {
							className: e.outboundLinkClassName,
							href: Object(S.D)(n),
							isSponsored: r,
							postId: n.id,
							source: n.source,
							sourceElement: i
						}, Object(y.a)(n), !n.isSponsored && o.a.createElement(O.a, {
							name: "external_link",
							className: V.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== M.Large && e.size !== M.ExtraLarge) return o.a.createElement(b.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: r,
						postId: n.id,
						source: n.source,
						sourceElement: i
					}, Object(y.a)(n), !n.isSponsored && o.a.createElement(O.a, {
						name: "external_link",
						className: V.a.outboundLinkIcon
					}));
					return null
				};
			class te extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${V.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(n.c)(.45,Object(C.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(n.c)(.45,this.props.titleColor||Object(C.a)(this.props).titleText,Object(C.a)(this.props).body)};\n        }\n      `
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
						post: a,
						showNSFWSpoilerFlairsOnly: c,
						hideNSFWSpoilerFlair: d
					} = this.props, u = s === E.b.Left, m = Object(j.b)(a), p = [], b = [], f = [], h = [];
					for (const o of m) o.type === E.f.Nsfw || o.type === E.f.Spoiler ? (p.push(o), h.push(o)) : Object(x.q)(o.type) ? (f.push(o), b.push(o)) : (h.push(o), b.push(o));
					const v = c ? p : u ? f : [];
					let _ = m;
					c ? _ = [] : d ? _ = b : u && (_ = h);
					const O = !r && !n && !t,
						S = O && v && v.length > 0,
						C = O && _ && _.length > 0;
					return o.a.createElement("div", {
						className: Object(l.a)(V.a.Component, e, a.id),
						ref: this.props.innerRef
					}, !c && S && o.a.createElement(j.a, {
						isFlairFilter: !0,
						titleFlair: v,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent
					}), !Object(g.b)(a) && o.a.createElement(X, z({}, this.props, {
						leftFlair: c ? v : void 0
					})), i && o.a.createElement(F, {
						className: V.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(ee, this.props), C && o.a.createElement(j.a, {
						isFlairFilter: !0,
						titleFlair: _,
						nowrap: !0,
						post: a,
						sendEvent: this.props.sendEvent
					}), o.a.createElement("div", {
						className: V.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${W.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(m.fb)(),
					s = Object(m.w)(t),
					n = Object(Y.a)(),
					r = Object(i.e)(r => K(r, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					a = Object(H.a)(),
					c = Object(u.b)();
				return n ? o.a.createElement(te, z({
					pageLayer: t,
					isCommentPermalink: s
				}, n, r, e, {
					theme: a,
					sendEvent: c
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
				subscribeButton: "_35dG7dsi4xKTT-_2MB74qq"
			}
		},
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = s("./src/reddit/components/NotificationButton/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				f = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				h = s("./src/reddit/constants/posts.ts"),
				x = s("./src/reddit/controls/Button/index.tsx"),
				v = s("./src/reddit/controls/OutboundLink/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/post.ts"),
				O = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = s("./src/reddit/models/Media/index.ts"),
				S = s("./src/reddit/models/Subreddit/index.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/PostTopLine/index.m.less"),
				y = s.n(C);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: r,
					hideNSFWPref: C,
					hostPostData: j,
					iconClassName: T,
					inSubredditOrProfile: k,
					isCommentsPage: N,
					isCompactPinnedPost: w,
					isCurrentUserProfilePost: P,
					isModWithUserNotesPermissions: I,
					isOverlay: A,
					isTopicPage: M,
					listingKey: F,
					post: D,
					shouldShowSubscribeButton: R,
					showCornerOutboundLink: L,
					showSubreddit: B,
					showSubredditIcon: U,
					subredditOrProfile: V,
					isFollowed: W,
					shouldShowFollowButton: q,
					onFollowPostClick: Y
				} = e;
				const H = M,
					G = V && Object(S.h)(V),
					z = Object(i.e)(e => {
						if (!G) return !0;
						const t = Object(g.Gb)(e, D.author || "");
						return !t || t.enableFollowers
					});
				return o.a.createElement("div", {
					className: Object(a.a)(y.a.container, t)
				}, B && V && o.a.createElement("div", {
					className: y.a.subredditIconWrapper
				}, o.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, U && o.a.createElement(p.b, {
					className: Object(a.a)(y.a.subredditIcon, T),
					shouldHideNsfwIcon: C,
					subredditOrProfile: V
				}))), o.a.createElement("div", {
					className: y.a.everythingElseWrapper
				}, B && o.a.createElement(d.h, {
					type: D.belongsTo.type,
					id: D.belongsTo.id
				}), o.a.createElement(m.d, {
					className: y.a.postTopMeta,
					forceOpenInNewTab: r,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: I,
					tooltipType: A ? m.c.Lightbox : void 0,
					post: D,
					showSub: B,
					subredditOrProfile: V
				}), o.a.createElement(u.a, {
					className: y.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: k,
					isCompactPinnedPost: w,
					post: D,
					tooltipType: A ? m.c.Lightbox : void 0
				}), !H && o.a.createElement(c.a, {
					isPostDetail: N,
					thing: D,
					tooltipType: A ? m.c.Lightbox : void 0
				})), V && z && B && R && !P && o.a.createElement(f.a, {
					className: y.a.SubscribeButton,
					getEventFactory: e => Object(_.k)(D.id, e ? "unsubscribe" : "subscribe", "post", F, j),
					identifier: {
						name: V.name,
						type: G ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: D.id,
					size: x.d.XS
				}), L && o.a.createElement(v.b, {
					isSponsored: D.isSponsored,
					postId: D.id,
					href: Object(E.D)(D),
					source: D.source
				}, o.a.createElement(O.a, {
					className: y.a.outboundLinkIcon
				})), q && z && o.a.createElement(l.a, {
					isFilled: !!W,
					onClick: Y,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const r = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				o = {
					subredditActions: {
						subscribe: () => n.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => n.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => n.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => n.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => n.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => n.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				i = e => {
					let {
						type: t,
						key: s
					} = e;
					return o[r({
						type: t
					})][s]()
				}
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
				return S
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				o = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/constants/elementClassNames.ts"),
				u = s("./src/reddit/controls/Score/index.tsx"),
				m = s("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = s("./src/reddit/models/Vote/index.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/VerticalVotes/index.m.less"),
				v = s.n(x);
			const _ = Object(a.c)({
					isNightMode: h.db,
					isAnimatingUpvotePostId: f.k
				}),
				O = Object(i.b)(_),
				E = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				S = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class g extends o.a.Component {
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
							isAnimatingUpvotePostId: i,
							shouldShowUpvoteRatioOnHover: a,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: h,
							model: x,
							postId: _
						} = e,
						O = E(e),
						g = S(e),
						C = x.voteState,
						y = i === _;
					return o.a.createElement("div", {
						className: Object(c.a)(v.a.votesContainer, e.className),
						id: `vote-arrows-${x.id}`,
						ref: h
					}, O ? o.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": C === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: r,
						onClick: this.onUpvote,
						voteState: C
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": C === b.a.upvoted,
						className: Object(c.a)(l.n, f, {
							[v.a.bounceUp]: y
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: C
					})), !e.compact && p && o.a.createElement(u.a, {
						className: Object(c.a)(v.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: C,
						shouldShowUpvoteRatioOnHover: a,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!s,
						postId: _
					}), g ? o.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": C === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: r,
						onClick: this.onDownvote,
						voteState: C
					}) : o.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": C === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: C
					})))
				}
			}
			const C = Object(d.a)(O(g));
			t.a = C
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/actions/emailVerificationTooltip.ts"),
				i = s("./src/reddit/actions/subscription/index.ts"),
				a = s("./src/reddit/selectors/experiments/emailEnablement.ts"),
				c = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(r.c)({
				userIsSubscriber: c.gb,
				emailEnablementJoinFollowVoteVariant: a.a
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(i.d([s], !0)),
					onSubscriptionsRequested: () => e(i.e()),
					onUnsubscribe: () => e(i.d([s], !1)),
					toggleEmailVerificationTooltip: () => e(Object(o.c)("user_follow"))
				}
			})
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
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(a);
			t.a = e => r.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, r.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(o.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
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
				i = s("./src/reddit/constants/keycodes.ts"),
				a = s("./src/reddit/icons/svgs/RadioOff/index.tsx"),
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
						t.disabled || e.key !== i.b.Enter && e.key !== i.b.Space || (t.onClick && t.onClick(t.value), e.preventDefault())
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
					}) : r.a.createElement(a.a, {
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
				return i
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./src/reddit/constants/keycodes.ts");
			class i extends r.a.Component {
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
							i = e.key === o.b.ArrowDown;
						if (r || i) {
							const t = this.getValues();
							if (!t.length) return;
							const o = n ? t.indexOf(n) : 0,
								i = t[((r ? o - 1 : o + 1) + t.length) % t.length];
							s(i), this.setState({
								value: i
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
							i = s.props.value === t,
							a = null !== t ? i ? 0 : -1 : o ? 0 : -1;
						return r.a.cloneElement(s, {
							disabled: e.disabled,
							onClick: e => this.handleClick(s.props.value),
							selected: i,
							tabIndex: a
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, s) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu",
				viewCount: "_3bAGP2FKe97ijgBAGQOYsk"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = s("./src/lib/prettyPrintNumber/index.ts"),
				a = s("./node_modules/react/index.js"),
				c = s.n(a),
				d = s("./node_modules/react-redux/es/index.js"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/components/CountAnimation/index.tsx"),
				m = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				p = s("./src/reddit/components/PostContent/ViewCount.tsx"),
				b = s("./src/reddit/constants/colors.ts"),
				f = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				h = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				x = s("./src/reddit/hooks/useInfoTextTooltip.ts"),
				v = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				_ = s("./src/reddit/models/Vote/index.ts"),
				O = s("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				E = s("./src/reddit/selectors/meta.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				g = s("./node_modules/reselect/es/index.js"),
				C = s("./src/reddit/controls/Score/index.m.less"),
				y = s.n(C);
			const j = {
					placement: "right"
				},
				T = e => e.voteState === _.a.downvoted ? Object(v.a)(e).voteText.downvote : e.voteState === _.a.upvoted ? Object(v.a)(e).voteText.upvote : Object(h.a)(Object(f.a)(e)),
				k = Object(g.c)({
					locale: e => Object(E.j)(e),
					post: (e, t) => {
						let {
							shouldShowUpvoteRatioOnHover: s,
							postId: n
						} = t;
						if (s && n) return Object(S.G)(e, {
							postId: n
						})
					}
				}),
				N = () => 0,
				w = Object(d.b)(k),
				P = Object(o.a)(e => {
					const t = {
							color: e.light ? b.a.lightboxHeaderText : T(e)
						},
						{
							score: s,
							postId: o = "",
							locale: f,
							isVoteCountAnimation: h,
							isCountAnimShadowTestEnabled: v,
							shouldShowUpvoteRatioOnHover: _,
							post: E
						} = e,
						S = Object(d.d)(),
						g = null == f ? void 0 : f.startsWith("en"),
						C = e.isScoreHidden ? g ? n.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: y.a.dot
						}, "•") : Object(i.b)(s),
						k = Object(a.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && S(Object(l.I)({
								postId: o,
								delta: t
							}))
						}, [S, o]),
						w = Object(a.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: o
								}
							}
						}),
						P = !e.isScoreHidden && h && s < O.a,
						I = Object(x.a)(j),
						A = s < 0 ? 0 : s;
					return c.a.createElement("div", {
						className: Object(r.a)(y.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t,
						onMouseEnter: _ ? I.show : void 0,
						onMouseLeave: _ ? I.hide : void 0,
						ref: _ ? I.target.ref : void 0
					}, (P || v) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: A,
						countToUpperBound: A,
						initialDelay: N,
						subsequentRecurringDelay: N,
						incrementDelta: N,
						shouldDisjointAnimation: !0,
						postId: o,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: w.current,
						onDataCB: k,
						isLoadTestOnly: v && !P
					})), !P && C, _ && E && c.a.createElement(m.a, I, c.a.createElement(p.a, {
						className: y.a.viewCount,
						post: E,
						showViewCount: !1
					})))
				});
			t.a = w(P)
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				r = s.n(n),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(o.b)(n)(e => {
					const {
						featureEnabled: n,
						...o
					} = e, i = o;
					return n ? r.a.createElement(t, i) : void 0 !== s ? r.a.createElement(s, i) : null
				})
			}
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/thumbnails.ts"),
				r = s("./src/reddit/models/Media/index.ts");

			function o(e, t) {
				return !(e.removedByCategory || !e.thumbnail || !e.thumbnail.url || e.thumbnail.url === n.a.SELF || e.thumbnail.url === n.a.NSFW || e.media && Object(r.E)(e.media) || t)
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
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/makeModQueueListingKey/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/ModQueueList/PostSortDropdown.tsx");
			t.a = e => {
				const {
					profile: t,
					subreddit: s
				} = e;
				let r = s && `r/${s}` || t && `u/${t}` || "all";
				return "comments" !== e.onlyOfType && "links" !== e.onlyOfType && "chat_comments" !== e.onlyOfType || (r += `--[${e.onlyOfType}]`), e.sort !== n.a.NewestFirst && (r += `--[${e.sort}]`), r
			}
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
							case n.I.NO_STRIPE_SUBSCRIPTION:
							case n.I.USER_DOESNT_EXIST:
							case n.I.USER_REQUIRED_ERROR:
							case n.I.VALIDATION_ERROR:
								return e;
							case n.I.NO_USER:
							case n.I.NO_TEXT:
							case n.I.NO_URL:
								return n.I.VALIDATION_ERROR;
							case n.I.CREDIT_CARD_FAILURE:
							case n.I.CREDIT_CARD_FAILURE_GENERIC:
								return n.I.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return n.I.SUBMIT_VALIDATION_ERROR
						}
					}
					return n.I.VALIDATION_ERROR
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
				return f
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "d", (function() {
				return x
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = s("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = s("./src/reddit/models/Theme/index.ts"),
				c = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = s.n(d);
			const u = {},
				m = e => Object(a.g)(Object(c.a)(e).post, Object(c.a)(e).backgroundImage, Object(c.a)(e).backgroundImagePosition),
				p = (e, t) => {
					if (e) {
						if (e.postBackgroundImage) return {
							background: Object(a.g)(e.postBackgroundColor || Object(c.a)(t).post, e.postBackgroundImage, Object(c.a)(t).backgroundImagePosition)
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
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
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
				return c
			})), s.d(t, "c", (function() {
				return d
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
					gallery: i.r(e, t, s),
					post: i.I(e, t),
					...i.n(e)
				}),
				c = (e, t) => s => ({
					...a(s, e, t),
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.B(s, e)
				}),
				d = (e, t) => s => {
					const c = Object(r.a)(t),
						d = Object(o.d)(s, e) + 1;
					return {
						...a(s, e, d),
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.B(s, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
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
				i = s("./src/reddit/selectors/platform.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: a.R(e),
					screen: a.Z(e),
					subreddit: a.hb(e)
				}),
				d = (e, t, s) => n => ({
					source: Object(i.i)(n) || s ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(n),
					post: a.I(n, e)
				}),
				l = (e, t, s, n) => r => {
					const i = s ? a.h(r, s) : null,
						{
							sortToUse: c
						} = Object(o.a)(r, e);
					return {
						...d(e, t, n)(r),
						comment: i,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => s => {
					const n = a.j(s);
					return n ? d(n.id, e, t)(s) : {
						source: Object(i.i)(s) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(s)
					}
				},
				m = (e, t) => s => Object(r.a)({
					...d(e, t)(s),
					...a.n(s)
				}),
				p = e => t => ({
					source: "id_card",
					action: n.c.CLICK,
					noun: e,
					...c(t),
					post: a.j(t),
					userSubreddit: a.rb(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return i
			})), s.d(t, "l", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "c", (function() {
				return m
			})), s.d(t, "d", (function() {
				return p
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "m", (function() {
				return f
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "i", (function() {
				return x
			})), s.d(t, "n", (function() {
				return v
			})), s.d(t, "h", (function() {
				return _
			}));
			var n = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					screen: Object(r.Z)(e),
					profile: Object(r.R)(e),
					subreddit: Object(r.hb)(e),
					userSubreddit: Object(r.rb)(e)
				}),
				i = e => t => ({
					source: "nav",
					action: "click",
					noun: e ? "mod_mode_on" : "mod_mode_off",
					...o(t)
				}),
				a = (e, t) => s => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.I)(s, t),
					...o(s)
				}),
				c = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(r.I)(s, t),
					comment: Object(r.h)(s, t),
					...o(s)
				}),
				d = (e, t) => s => ({
					source: "comment",
					action: n.c.CLICK,
					noun: e,
					post: Object(r.I)(s, t),
					comment: Object(r.h)(s, t),
					actionInfo: {
						pageType: "chat_live_post"
					},
					...o(s)
				}),
				l = (e, t) => s => ({
					source: "comment",
					action: n.c.UNDO,
					noun: e,
					post: Object(r.I)(s, t),
					comment: Object(r.h)(s, t),
					...o(s)
				}),
				u = (e, t) => s => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(r.I)(s, t),
					comment: Object(r.h)(s, t),
					...o(s)
				}),
				m = (e, t) => s => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(r.I)(s, t),
					comment: Object(r.h)(s, t),
					...o(s)
				}),
				p = (e, t) => s => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.I)(s, t),
					comment: Object(r.h)(s, t),
					...o(s)
				}),
				b = (e, t) => s => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(r.h)(s, t),
					post: Object(r.I)(s, t),
					...o(s)
				}),
				f = (e, t) => s => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(r.I)(s, t),
					...o(s)
				}),
				h = (e, t) => s => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(r.I)(s, t),
					subreddit: Object(r.kb)(s, t)
				}),
				x = (e, t) => s => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(r.h)(s, t),
					post: Object(r.I)(s, t),
					subreddit: Object(r.kb)(s, t)
				}),
				v = (e, t, s, n) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(r.I)(o, s),
					subreddit: Object(r.kb)(o, s),
					actionInfo: {
						reason: n
					},
					...e && {
						comment: Object(r.h)(o, s)
					}
				}),
				_ = () => e => ({
					...o(e),
					source: "modqueue",
					noun: "content_type_live_post",
					action: "view",
					actionInfo: {
						pageType: "chat_live_post"
					}
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "i", (function() {
				return a
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
				return v
			})), s.d(t, "n", (function() {
				return _
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "l", (function() {
				return g
			})), s.d(t, "t", (function() {
				return C
			})), s.d(t, "j", (function() {
				return y
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "x", (function() {
				return T
			})), s.d(t, "u", (function() {
				return k
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "s", (function() {
				return w
			})), s.d(t, "v", (function() {
				return P
			})), s.d(t, "w", (function() {
				return I
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...r.n(e),
					screen: r.Z(e),
					subreddit: r.hb(e),
					userSubreddit: r.rb(e)
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
				c = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "schedule_post_composer",
					...o(e)
				}),
				d = () => e => ({
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
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(t),
					scheduledPost: i(e)
				}),
				h = () => e => ({
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
				v = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...o(e)
				}),
				O = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...o(t),
					actionInfo: r.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				E = {
					[n.d.Hourly]: "hourly_frequency",
					[n.d.Daily]: "daily_frequency",
					[n.d.Weekly]: "weekly_frequency",
					[n.d.Monthly]: "monthly_frequency",
					[n.b]: "custom_frequency"
				},
				S = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : E[e],
					...o(t)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				C = (e, t, s) => i => ({
					source: "post",
					action: "click",
					noun: Object(n.m)(e),
					...o(i),
					actionInfo: r.d(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				y = () => e => ({
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
				T = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				k = () => (e, t) => ({
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
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: i(t)
				}),
				P = () => e => ({
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
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			}));
			var n = s("./src/reddit/helpers/flair.ts"),
				r = s("./src/reddit/selectors/gold/powerups/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const i = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...o.n(e)
				}),
				a = e => t => {
					const s = o.hb(t),
						i = Object(r.t)(t, {
							subredditId: null == s ? void 0 : s.id
						}),
						{
							userFlair: a,
							achievementFlair: c,
							supporterFlair: d
						} = e,
						l = c || d;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...o.n(t),
						subreddit: s,
						userFlair: {
							id: null == a ? void 0 : a.id,
							title: a ? Object(n.g)(a) : void 0,
							isActive: !!a || void 0,
							achievementFlairId: null == c ? void 0 : c.type,
							achievementFlairTitle: null == c ? void 0 : c.name,
							isLocked: null == l ? void 0 : l.isLocked,
							supporterFlairId: null == d ? void 0 : d.type,
							supporterFlairTitle: null == d ? void 0 : d.name,
							isSupporter: i
						}
					}
				},
				c = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...o.n(e)
				}),
				d = e => t => ({
					source: "user_flair_picker",
					action: "click",
					noun: "enable_powerups_flair",
					setting: {
						value: e ? "0" : "1",
						oldValue: e ? "1" : "0"
					},
					subreddit: o.hb(t),
					...o.n(t)
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
				i = s("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				a = s.n(i);

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
				className: Object(o.a)(a.a.icon, e.className),
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
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function r(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return r
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(n || (n = {}))
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "s", (function() {
				return i
			})), s.d(t, "e", (function() {
				return a
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
				return v
			})), s.d(t, "k", (function() {
				return _
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "n", (function() {
				return g
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "m", (function() {
				return y
			})), s.d(t, "q", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				r = s("./src/reddit/models/GqlTopLevelField.ts"),
				o = s("./src/reddit/models/User/index.ts");
			const i = "scheduledposts";
			var a, c, d;
			! function(e) {
				e.LINK = "LINK", e.POLL = "POLL", e.SELF = "SELF"
			}(a || (a = {})),
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
			const x = e => b[h[e]],
				v = e => h[b[e]],
				_ = e => f[b[e]],
				O = e => b[f[e]],
				E = e => h[f[e]];
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
						(o = e.placement ? e.placement === a.a.First ? n[c.a.Loyalty][r] : n[c.a.Achievement][r] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][r] : n[c.a.Cosmetic][c.c.Gallery][r]) && (l(e) ? s.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
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
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
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
		"./src/reddit/reducers/features/creatorStats/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/redux/es/redux.js"),
				r = s("./src/reddit/actions/creatorStats/constants.ts");
			const o = {};
			var i = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						const {
							postOtherDiscussions: s
						} = t.payload;
						return {
							...e, ...s
						};
					default:
						return e
				}
			};
			const a = {};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						const {
							postStats: s
						} = t.payload;
						return {
							...e, ...s
						};
					default:
						return e
				}
			};
			const d = {};
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a:
						const {
							subredditKarma: s
						} = t.payload;
						return {
							...e, ...s
						};
					default:
						return e
				}
			};
			t.a = Object(n.c)({
				postOtherDiscussions: i,
				postStats: c,
				subredditKarma: l
			})
		},
		"./src/reddit/selectors/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/creatorStats/index.ts"),
				o = s("./src/reddit/selectors/moderatorPermissions.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				a = s("./src/reddit/selectors/user.ts");
			Object(n.a)({
				features: {
					creatorStats: r.a
				}
			});
			const c = (e, t) => {
					var s, n;
					return null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === n ? void 0 : n.postOtherDiscussions[t]
				},
				d = (e, t) => {
					var s, n;
					return null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === n ? void 0 : n.postStats[t]
				},
				l = (e, t) => {
					var s, n, r;
					const o = null === (r = null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.creatorStats) || void 0 === n ? void 0 : n.subredditKarma[t]) || void 0 === r ? void 0 : r.karma;
					if (!o) return;
					const {
						fromComments: i,
						fromPosts: a
					} = o;
					return {
						fromComments: i,
						fromPosts: a
					}
				},
				u = (e, t, s) => {
					const n = Object(i.G)(e, {
						postId: t
					});
					if (!n || n.isSponsored || n.removedByCategory) return !1;
					const r = Object(i.V)(e, {
						postId: t
					});
					if (r && r.isQuarantined) return !1;
					const c = !s && !!Object(o.m)(e, {
						postId: t
					});
					return Object(a.Db)(e, {
						postId: t
					}) || c
				}
		},
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/helpers/isCrosspost.ts"),
				i = s("./src/reddit/selectors/modQueue.ts"),
				a = s("./src/reddit/selectors/platform.ts");
			const c = (e, t) => {
				let {
					post: s
				} = t;
				if (Object(i.b)(e)) return !0;
				const c = Object(a.f)(e),
					d = Object(o.a)(s);
				return !(!c || d) && (e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.Ub
					}) === n.yd
				})(e)
			}
		},
		"./src/reddit/selectors/experiments/loggedOutOneFeed.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return u
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/countrySites.ts"),
				a = s("./src/reddit/selectors/experiments/index.ts"),
				c = s("./src/reddit/selectors/experiments/utils.ts");
			const d = Object(n.a)(a.f, i.f, (e, t) => e && !t),
				l = e => Object(o.c)(e, {
					experimentEligibilitySelector: d,
					experimentName: r.ec
				}),
				u = e => !!Object(c.a)(l(e))
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "d", (function() {
				return u
			})), s.d(t, "g", (function() {
				return m
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "e", (function() {
				return f
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				o = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts"),
				a = s("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.s
					});
					return t === n.x.VoteCountOnly || t === n.x.CommentCountOnly || t === n.x.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.c)(e) || Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.s
					});
					return t === n.x.VoteCountOnly || t === n.x.VoteAndCommentCount
				},
				u = e => {
					if (Object(a.c)(e) || Object(i.a)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.s
					});
					return t === n.x.CommentCountOnly || t === n.x.VoteAndCommentCount
				},
				m = (e, t) => {
					let {
						post: s
					} = t;
					return p(e, {
						postId: s.id
					})
				},
				p = (e, t) => {
					let {
						postId: s
					} = t;
					const r = e.posts.models[s];
					if (Object(a.c)(e) || !r || r.isSponsored || r.isScoreHidden || r.score >= c || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: n.s
						}),
						l = null == d ? void 0 : d.variant;
					return l === n.x.VoteCountOnly || l === n.x.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: s
					} = t;
					const r = e.posts.models[s];
					if (Object(a.c)(e) || !r || r.isSponsored || r.numComments >= c || Object(i.a)(e)) return !1;
					const d = Object(o.d)(e, {
							experimentName: n.s
						}),
						l = null == d ? void 0 : d.variant;
					return l === n.x.CommentCountOnly || l === n.x.VoteAndCommentCount
				},
				f = e => {
					if (Object(i.a)(e)) return !1;
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: n.sc
					}) === n.Kc.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const o = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: n.Je
				}) === n.yd
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(r.Sf)(t)
				},
				c = Object(n.a)(a, o.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/modQueue.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "e", (function() {
				return m
			})), s.d(t, "g", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "b", (function() {
				return h
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/helpers/makeModQueueListingKey/index.ts"),
				o = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/lib/initializeClient/installReducer.ts"),
				a = s("./src/reddit/reducers/features/comments/index.ts"),
				c = s("./src/reddit/reducers/pages/modHub/index.ts");
			Object(i.a)({
				features: {
					comments: a.a
				},
				pages: {
					modHub: c.a
				}
			});
			const d = (e, t) => Object(r.a)({
					onlyOfType: t.queryParams.only,
					profile: t.profileName,
					sort: t.queryParams.sort,
					subreddit: t.subredditName
				}),
				l = Object(o.a)((e, t) => {
					var s, n, r;
					const {
						pageName: o,
						page: i
					} = t, a = d(0, t);
					if (!(null === (r = null === (n = null === (s = e.pages.modHub.modQueue[o]) || void 0 === s ? void 0 : s.itemOrder) || void 0 === n ? void 0 : n[a]) || void 0 === r ? void 0 : r[i])) return;
					const c = e.pages.modHub.modQueue[o].itemOrder[a][i];
					return c ? c.map(t => e.posts.models[t] || e.features.comments.models[t]) : []
				}),
				u = (e, t) => {
					var s;
					const {
						pageName: n
					} = t;
					return null === (s = e.pages.modHub.modQueue[n]) || void 0 === s || !s.api || e.pages.modHub.modQueue[n].api.pending
				},
				m = (e, t) => {
					var s;
					const n = d(0, t);
					return null === (s = e.pages.modHub.modQueue[t.pageName]) || void 0 === s ? void 0 : s.loadMore[n]
				},
				p = e => Object.keys(e.pages.modHub.modQueue.bulkAction.selectedItems),
				b = e => e.pages.modHub.modQueue.bulkAction.api.pending,
				f = e => e.pages.modHub.modQueue.moderatedCommunitiesOrder.data,
				h = e => {
					const t = e.platform && e.platform.currentPage;
					return t && t.meta && (t.meta.name === n.Nb.MODERATION_PAGES || t.meta.name === n.Nb.MODQUEUE_PAGES)
				}
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
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = new Set([c.g.AntiEvilOps, c.g.AutomodFiltered, c.g.CommunityOps, c.g.ContentTakedown, c.g.CopyrightTakedown, c.g.Moderator, c.g.Reddit]),
				u = new Set([c.g.Author, c.g.AuthorDeleted]),
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
				f = Object(r.a)(d.k, o.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				h = Object(r.a)(o.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/posts.ts");
			const a = e => Object(o.c)(e, {
					experimentName: r.Me,
					experimentEligibilitySelector: o.a
				}),
				c = (e, t) => t === r.Ue.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(n.a)(i.G, a, (e, t) => c(e, t));
			Object(n.a)((e, t) => t, a, (e, t) => c(e, t))
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			}));
			var n = s("./src/lib/constants/index.ts"),
				r = s("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const o = e => {
					if (i(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(r.a)(e)) || !!t
				},
				i = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.Nb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				r = s("./src/lib/fastdom/index.ts"),
				o = s("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = s("./src/reddit/constants/jsapiEvents.ts");
			const l = 100;
			const u = new class {
				constructor() {
					if (this.queue = [], this.active = !1, "undefined" == typeof document) return;
					let e;
					this.store = new Promise(t => e = t), this.attachStore = t => e(t);
					const t = document.querySelectorAll(`meta[name="${a}"]`);
					t.length && (t.forEach(e => {
						const t = e.content;
						this.store.then(e => e.dispatch(o.b(t)))
					}), this.store.then(() => this.fireEventsQueue())), document.addEventListener(d.b, e => this.onReadyEvent(e), !0)
				}
				onReadyEvent(e) {
					let t;
					if (this.active = !0, e.target && e.target instanceof HTMLMetaElement && e.target.name === a && (t = e.target.content), !t) try {
						e.detail && (t = e.detail.name, console.warn(i, `${n.a.redditUrl}${c}`, e))
					} catch (s) {
						return void console.error(i, `${n.a.redditUrl}${c}`, s)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.2040cec2e600dae6f212.js.map