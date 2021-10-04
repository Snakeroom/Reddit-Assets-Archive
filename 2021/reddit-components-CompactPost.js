// https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.e6e23941cd6c237fa6a1.js
// Retrieved at 10/4/2021, 10:50:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-CompactPost", "Reddit~StandalonePostPage~reddit-components-MediumPost"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, n) {
			var s;
			s = function() {
				var e = !0;

				function t(t) {
					function n(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[1] || ""
					}

					function s(e) {
						var n = t.match(e);
						return n && n.length > 1 && n[2] || ""
					}
					var r, o = n(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						_ = !o && !l && /macintosh/i.test(t),
						h = !a && !u && !m && !p && /linux/i.test(t),
						E = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = n(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						x = !O && /[^-]mobi/i.test(t),
						S = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: v || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: v || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? r = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? r = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? r = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? r = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? r = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? r = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, E ? (r.msedge = e, r.version = E) : (r.msie = e, r.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: E
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : u ? r = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? r = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (r = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : l ? r = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? r = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? r = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? r = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: v || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
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
						version: n(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && v && (r.version = v)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || n(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && o ? (r[o] = e, r.ios = e, r.osname = "iOS") : _ ? (r.mac = e, r.osname = "macOS") : S ? (r.xbox = e, r.osname = "Xbox") : f ? (r.windows = e, r.osname = "Windows") : h && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? g = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? g = (g = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? g = (g = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? g = n(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? g = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? g = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? g = n(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (g = n(/tizen[\/\s](\d+(\.\d+)*)/i)), g && (r.osversion = g);
					var y = !r.windows && g.split(".")[0];
					return O || c || "ipad" == o || a && (3 == y || y >= 4 && !x) || r.silk ? r.tablet = e : (x || "iphone" == o || "ipod" == o || a || i || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var n, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) s.push(t(e[n]));
					return s
				}

				function o(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), n = r(e, (function(e) {
							var n = t - s(e);
							return r((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, s, r) {
					var a = n;
					"string" == typeof s && (r = s, s = void 0), void 0 === s && (s = !1), r && (a = t(r));
					var i = "" + a.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([i, e[c]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = a, n.compareVersions = o, n.check = function(e, t, n) {
					return !a(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = s() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, r) {
				return r(e, (function(e, r, o) {
					n = s ? (s = !1, e) : t(n, e, r, o)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				r = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = r(n)) == n ? n : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), s(r(e), t, n)
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				r = n("./node_modules/lodash/_baseEach.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				a = n("./node_modules/lodash/_baseReduce.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = i(e) ? s : a,
					d = arguments.length < 3;
				return c(e, o(t, 4), n, d, r)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				r = 0;
			e.exports = function(e) {
				var t = ++r;
				return s(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/TrackingHelper/index.tsx"),
				a = n("./src/reddit/selectors/telemetry.ts");

			function i() {
				return (i = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, n) => (s = (() => {})) => r => {
				const o = m(r.target, r.currentTarget),
					i = p(r.target, r.currentTarget);
				o && n && t && (u(r.target, r.currentTarget, l.anchors) ? n(t(e, o, i)) : n(n => {
					const s = t(e, o, i)(n);
					let r;
					if (s && s.actionInfo) {
						const {
							pageType: e,
							...t
						} = s.actionInfo;
						r = t
					}
					return {
						...s,
						actionInfo: Object(a.previousPageActionInfo)(n, r)
					}
				})), u(r.target, r.currentTarget, l.anchorsAndButtons) && s(r)
			};

			function d(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: o,
						clickTrackingId: a,
						...d
					} = t, l = Object(s.useCallback)(c(a, o, n), [a, o, n]);
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
				u = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, n)),
				m = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = (...e) => t => {
				e.forEach(e => {
					if (e) return "function" == typeof e ? e(t) : void(e.current = t)
				})
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/forceHttps/index.ts": function(e, t, n) {
			"use strict";
			t.a = function(e) {
				return e.startsWith("http") ? e.replace(/^http:\/\//i, "https://") : `https://${e}`
			}
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Media/index.ts"),
				r = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				o = n.n(r);
			t.a = function(e) {
				const {
					source: t,
					isSponsored: n,
					domainOverride: r
				} = e;
				let a = "";
				if (n) {
					if (t && t.displayText) return t.displayText.length > 30 ? t.displayText.substring(0, 30) + "..." : t.displayText;
					a = r || Object(s.D)(e)
				} else a = Object(s.D)(e);
				const i = o.a.parse(a),
					c = i.path || "",
					d = c.length > 7 ? c.substring(0, 7) + "..." : c;
				return (i.hostname ? i.hostname.replace("www.", "") : "") + d
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const a = Object(s.freeze)({
				modifiers: []
			});

			function i(e) {
				let t = "object" == typeof e ? e : a;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", a.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(r.useState)(null), [a, c] = Object(r.useState)(null), [d, l] = Object(r.useState)(null), [u, m] = Object(r.useState)(!1), p = Object(r.useCallback)(async () => m(!0), []), b = Object(r.useCallback)(() => m(!1), []), f = Object(r.useCallback)(() => m(!u), [u]), _ = Object(r.useMemo)(() => {
					const t = i(e);
					return d ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: h,
					styles: E,
					update: v
				} = Object(o.a)(t, a, _);
				return Object(r.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: E.arrow,
						...h.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: E.popper,
						...h.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: f,
					visible: u,
					update: v
				}), [l, h, c, b, p, E, t, n, f, u, v])
			}
		},
		"./src/lib/memoizeByReference/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/lodash/every.js"),
				r = n.n(s);

			function o(e) {
				let t = null,
					n = null;
				return (...s) => (null !== t && s.length === t.length && r()(s, (e, n) => e === t[n]) || (t = s, n = e(...s)), n)
			}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/constants/index.ts");
			const o = [r.mc, r.ob, r.A, r.P, r.jb, r.Pb],
				a = {
					[r.Pb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[r.jb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[r.P]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[r.A]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[r.ob]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[r.mc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				i = {
					[r.Pb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[r.jb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[r.P]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[r.A]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[r.ob]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.mc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[r.ob]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[r.mc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e, t = !1, n = !1) {
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[r.mc]: "",
						[r.ob]: "",
						[r.A]: "",
						[r.P]: "",
						[r.jb]: "",
						[r.Pb]: ""
					};
				let u = d - c;
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of o) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? i : a)[s](e).toString()), u -= e * s
				}
				const m = o.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/realtime/GQLSubscription/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/higherOrderComponents/makeAsync.tsx"),
				r = n("./src/lib/loadWithRetries/index.ts");
			const o = Object(s.a)({
				ErrorComponent: () => null,
				LoadingComponent: () => null,
				getComponent: () => Object(r.a)(() => Promise.all([n.e("vendors~RealtimeGQLSubscriptionAsync"), n.e("RealtimeGQLSubscriptionAsync")]).then(n.bind(null, "./src/realtime/GQLSubscription/index.tsx"))).then(e => e.default)
			});
			t.a = o
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "g", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "i", (function() {
				return u
			}));
			const s = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_APPLIED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
				c = "ECONOMICS__SUBREDDIT_PREMIUM__ORDER_SUCCESS",
				d = "ECONOMICS__SUBREDDIT_PREMIUM__SUBREDDIT_INFO_SUCCESS",
				l = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_CANCEL_SUCCESS",
				u = "ECONOMICS__SUBREDDIT_PREMIUM__SUBSCRIPTION_DATA_SUCCESS"
		},
		"./src/reddit/actions/eventPosts/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				r = "MOD_PAGE_EVENT_POSTS_FAILED",
				o = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				i = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/gold/communityAwards/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "i", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "j", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "h", (function() {
				return b
			}));
			var s = n("./src/lib/loadableAction/index.ts");
			const r = e => () => n.e("CommunityAwards").then(n.bind(null, "./src/reddit/actions/gold/communityAwards/communityAwards.ts")).then(t => t[e]),
				o = Object(s.a)(r("awardSheetInfoRequested")),
				a = Object(s.a)(r("manageableAwardsRequested")),
				i = Object(s.a)(r("createCommunityAward")),
				c = Object(s.a)(r("createGlobalAward")),
				d = Object(s.a)(r("createModAward")),
				l = Object(s.a)(r("createAwardFailed")),
				u = Object(s.a)(r("createAwardSuccessful")),
				m = Object(s.a)(r("removeCommunityAward")),
				p = Object(s.a)(r("disableAwardinCommunity")),
				b = Object(s.a)(r("enableAwardinCommunity"))
		},
		"./src/reddit/actions/gold/modals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return _
			})), n.d(t, "b", (function() {
				return E
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "c", (function() {
				return S
			})), n.d(t, "a", (function() {
				return g
			})), n.d(t, "f", (function() {
				return y
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/postParentMessage/index.ts"),
				o = n("./src/reddit/helpers/isPost.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/selectors/gild.ts"),
				c = n("./src/reddit/helpers/correlationIdTracker.ts"),
				d = n("./src/reddit/actions/gold/communityAwards/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				u = n("./src/reddit/selectors/communityAwards.ts"),
				m = n("./src/reddit/selectors/posts.ts"),
				p = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/telemetry/index.ts"),
				f = n("./src/reddit/actions/gold/constants.ts");
			const _ = Object(s.a)(f.L),
				h = Object(s.a)(f.f),
				E = () => async (e, t) => {
					const s = t();
					e(h()), Object(c.b)(c.a.GiftPremiumFlow);
					const {
						clickCloseModalEvent: r
					} = await n.e("givePremiumTrackers").then(n.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
					Object(b.a)(r()(s))
				}, v = Object(s.a)(f.K), O = ({
					awardId: e,
					correlationId: t,
					thingId: n
				}) => async (s, r) => {
					const i = r(),
						c = e ? Object(u.a)(i, e) : void 0;
					s(v({
						award: c && c.isEnabled ? c : void 0,
						thingId: n,
						correlationId: t
					})), s(Object(l.h)(a.a.GOLD_GILD_MODAL));
					const b = Object(p.G)(i, {
						thingId: n
					});
					let f = null;
					if (b) f = b.id;
					else if (Object(o.a)(n)) {
						const e = Object(m.H)(i, {
							postId: n
						});
						e && (f = e.belongsTo.id)
					}
					f && Object(d.a)(f, n)
				}, x = Object(s.a)(f.e), S = Object(s.a)(f.J), g = () => async (e, t) => {
					const s = t(),
						o = Object(i.d)(s);
					if (Object(i.g)(s)) {
						const e = "close.gild";
						Object(r.a)({
							type: e
						})
					}
					e(x()), e(Object(l.g)(a.a.GOLD_GILD_MODAL));
					const {
						clickCloseGildModalEvent: d
					} = await Promise.resolve().then(n.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
					Object(b.a)(d(o)(s)), Object(c.b)(c.a.GildingFlow)
				}, y = () => async () => {
					Object(r.a)({
						type: "login.gild"
					})
				}
		},
		"./src/reddit/actions/grantUserFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return s
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "l", (function() {
				return a
			})), n.d(t, "k", (function() {
				return i
			})), n.d(t, "j", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			}));
			const s = "SUBREDDIT__FLAIRED_USERS_PENDING",
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
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "t", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "s", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "l", (function() {
				return b
			})), n.d(t, "m", (function() {
				return f
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "i", (function() {
				return h
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "p", (function() {
				return O
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "o", (function() {
				return S
			}));
			const s = "CREATE_COLLECTION_PENDING",
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
				_ = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				h = "REORDER_COLLECTION_PENDING",
				E = "REORDER_COLLECTION_SUCCESS",
				v = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				x = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				S = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return b
			})), n.d(t, "a", (function() {
				return E
			})), n.d(t, "f", (function() {
				return S
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "d", (function() {
				return A
			})), n.d(t, "l", (function() {
				return D
			})), n.d(t, "k", (function() {
				return L
			})), n.d(t, "j", (function() {
				return F
			})), n.d(t, "g", (function() {
				return M
			})), n.d(t, "i", (function() {
				return U
			})), n.d(t, "h", (function() {
				return B
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/post.ts"),
				a = n("./src/reddit/actions/postFlairStyleTemplate.ts"),
				i = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/reddit/endpoints/flair/index.ts"),
				d = n("./src/reddit/helpers/flair.ts"),
				l = n("./src/reddit/models/Flair/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/selectors/postFlair.ts"),
				p = n("./src/reddit/selectors/subreddit.ts");
			const b = "STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_SUCCESS",
				f = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_PENDING"),
				_ = Object(r.a)(b),
				h = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ENABLED_SETTING_FAILED"),
				E = "STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_SUCCESS",
				v = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_PENDING"),
				O = Object(r.a)(E),
				x = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_ALLOW_ASSIGN_OWN_SETTING_FAILED"),
				S = "STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_SUCCESS",
				g = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_PENDING"),
				y = Object(r.a)(S),
				C = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_SAVETEMPLATE_FAILED"),
				j = "STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_SUCCESS",
				T = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_PENDING"),
				I = Object(r.a)(j),
				w = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_DELETETEMPLATE_FAILED"),
				k = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_PENDING",
				A = "STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_FAILED",
				P = Object(r.a)(k),
				N = Object(r.a)("STRUCTURED_STYLES__POSTFLAIR_REORDERTEMPLATES_SUCCESS"),
				R = Object(r.a)(A),
				D = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						a = Object(p.Q)(o, {
							subredditId: e
						}).name;
					n(f());
					const i = await Object(c.k)(r(), a, t);
					if (i.ok) {
						n(_({
							subredditId: e,
							isEnabled: t
						}))
					} else n(h());
					return i.ok
				}, L = (e, t) => async (n, s, {
					apiContext: r
				}) => {
					const o = s(),
						a = Object(p.Q)(o, {
							subredditId: e
						}).name;
					n(v());
					const i = await Object(c.j)(r(), t, l.d.LinkFlair, a);
					if (i.ok) {
						n(O({
							subredditId: e,
							canAssignOwn: t
						}))
					} else n(x());
					return i.ok
				}, F = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const d = r(),
						m = Object(p.Q)(d, {
							subredditId: t
						}).name;
					n(g());
					const b = await Object(c.f)(o(), e, m, l.d.LinkFlair);
					let f = b.ok && !(b.body && !1 === b.body.success);
					if (f) {
						const s = b.body;
						if (n(y({
								subredditId: t,
								template: s
							})), s.id) {
							const r = e.styleTemplate,
								o = d.structuredStyles.flairTemplate.models[s.id];
							r ? f = await n(Object(a.d)(t, s.id, r)) : o && (f = await n(Object(a.c)(t, s.id)))
						}
					}
					if (f) {
						const e = Object(i.e)(s.fbt._("Flair saved!", null, {
							hk: "3MQuUt"
						}), u.b.SuccessMod);
						n(Object(i.f)(e))
					} else {
						n(C());
						const r = Object(i.e)(s.fbt._("Sorry, flair wasn't saved.", null, {
							hk: "1yf1Ne"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), F(e, t));
						n(Object(i.f)(r))
					}
					return f
				}, M = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const a = r(),
						d = Object(p.Q)(a, {
							subredditId: t
						}).name;
					if (n(T()), (await Object(c.b)(o(), e, d)).ok) {
						n(I({
							subredditId: t,
							templateId: e
						}));
						const r = Object(i.e)(s.fbt._("Flair deleted!", null, {
							hk: "44T1il"
						}), u.b.SuccessMod);
						n(Object(i.f)(r))
					} else {
						n(w());
						const r = Object(i.e)(s.fbt._("Sorry, flair wasn't deleted.", null, {
							hk: "1nwT0G"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), M(e, t));
						n(Object(i.f)(r))
					}
				}, U = (e, t) => async (n, r, {
					apiContext: o
				}) => {
					const a = r(),
						d = Object(m.d)(a, {
							subredditId: t
						}).templateIds,
						b = Object(p.Q)(a, {
							subredditId: t
						}).name;
					if (n(P({
							subredditId: t,
							templateIds: e
						})), (await Object(c.e)(o(), b, l.d.LinkFlair, e)).ok) {
						n(N());
						const e = Object(i.e)(s.fbt._("Flair reorder saved.", null, {
							hk: "1Xbuan"
						}), u.b.SuccessMod);
						n(Object(i.f)(e))
					} else {
						n(R({
							subredditId: t,
							templateIds: d
						}));
						const r = Object(i.e)(s.fbt._("Sorry. Flair reorder wasn't saved.", null, {
							hk: "4ohwNd"
						}), u.b.Error, s.fbt._("Retry", null, {
							hk: "1XMjgA"
						}), U(e, t));
						n(Object(i.f)(r))
					}
				}, B = ({
					post: e,
					previewFlair: t,
					selectedTemplateId: n
				}) => async (s, r, {
					apiContext: a
				}) => {
					const i = e.flair.filter(e => !Object(d.q)(e.type));
					if (t && i.unshift(t), s(Object(o.R)({
							[e.id]: {
								flair: i
							}
						})), t) {
						const s = Object(d.g)(t);
						Object(c.h)(a(), e.id, n, s)
					} else Object(c.h)(a(), e.id, "", "")
				}
		},
		"./src/reddit/actions/postFlairStyleTemplate.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return x
			})), n.d(t, "d", (function() {
				return g
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "c", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/forEach.js"),
				r = n.n(s),
				o = n("./node_modules/lodash/isEqual.js"),
				a = n.n(o),
				i = n("./node_modules/lodash/values.js"),
				c = n.n(i),
				d = n("./src/lib/makeActionCreator/index.ts"),
				l = n("./src/reddit/actions/imageUploads.ts"),
				u = n("./src/reddit/helpers/media/index.ts"),
				m = n("./src/lib/constants/index.ts"),
				p = n("./src/lib/makeApiRequest/index.ts"),
				b = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var _ = n("./src/reddit/helpers/trackers/blade.ts"),
				h = n("./src/reddit/models/Image/index.tsx"),
				E = n("./src/reddit/selectors/subreddit.ts"),
				v = n("./src/telemetry/index.ts");
			const O = ({
				subredditId: e,
				flairId: t,
				imageKey: n,
				imageData: s
			}) => async (r, o, a) => {
				const i = o(),
					c = Object(E.Q)(i, {
						subredditId: e
					});
				if (!c) return !1;
				r(Object(l.k)(s));
				const d = await (async (e, t, n, s, r, o) => Object(p.a)(Object(b.a)(e, [f.a]), {
					endpoint: `${e.apiUrl}/api/v1/${t}/flair_style_asset_upload_s3/${n}`,
					method: m.ib.POST,
					data: {
						filepath: s,
						imagetype: r,
						mimetype: o
					}
				}))(a.apiContext(), c.name, t, s.file.name, n, await Object(u.g)(s.file));
				let _ = !1;
				try {
					const e = await Object(l.g)(o(), d, s, h.a.FlairTemplates);
					e && r(Object(l.j)(e)), _ = !0
				} catch (v) {
					if (v instanceof Error) throw v;
					r(Object(l.i)(v))
				}
				return _
			}, x = "POSTFLAIR_STYLETEMPLATE_SAVED_SUCCESS", S = Object(d.a)(x), g = (e, t, n) => async (s, o, i) => {
				const {
					apiContext: d
				} = i;
				let u = o();
				const {
					pendingImages: x,
					...g
				} = n;
				let y = g;
				const C = Object(E.Q)(u, {
					subredditId: e
				});
				if (!C) return !1;
				const j = u.structuredStyles.flairTemplate.models[t];
				if (j && a()(j, y)) return !0;
				if (x) {
					const n = [];
					if (r()(x, (r, o) => {
							r && n.push(s(O({
								flairId: t,
								imageData: Object(h.m)(r),
								imageKey: o,
								subredditId: e
							})))
						}), !(await Promise.all(n)).every(e => e)) return !1;
					y = ((e, t, n) => {
						const s = {
							...e
						};
						return r()(t, (e, t) => {
							const r = e && n.imageUploads[e.id];
							r && r.kind === h.b.TempUploaded && (s[t] = r.url)
						}), s
					})(y, x, o())
				}
				u = o();
				let T = null,
					I = null;
				const w = [];
				try {
					(T = await Object(l.f)(u, h.a.FlairTemplates)) && (I = Object(l.m)(T)(s, o, i), w.push(...c()(T.imagesByKey)))
				} catch (N) {
					return !1
				}
				const k = await (async (e, t, n, s) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.ib.PUT,
						data: s
					}))(d(), C.name, t, y),
					A = j ? "edit_post_flair_template" : "save_post_flair_template",
					P = Object(_.e)(u, A);
				if (k.ok) {
					let e;
					if (I) try {
						await I, e = ((e, t, n) => {
							const s = {
								...e
							};
							return t.forEach(e => {
								const t = n.imageUploads[e.id];
								t && t.kind === h.b.Uploaded && (e.url === s.postBackgroundImage ? s.postBackgroundImage = t.url : e.url === s.postPlaceholderImage && (s.postPlaceholderImage = t.url))
							}), s
						})(y, w, o())
					} catch (N) {
						e = null
					} else e = y;
					s(S({
						flairId: t,
						template: e || y
					}))
				} else T && T.websocket.close();
				return Object(v.a)({
					...P,
					actionInfo: {
						...P.actionInfo,
						success: k.ok
					}
				}), k.ok
			}, y = "POSTFLAIR_STYLETEMPLATE_DELETED_SUCCESS", C = Object(d.a)(y), j = (e, t) => async (n, s, {
				apiContext: r
			}) => {
				const o = s(),
					a = Object(E.Q)(o, {
						subredditId: e
					});
				if (!a) return !1;
				const i = await (async (e, t, n) => Object(p.a)(Object(b.a)(e, [f.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/flair_styles/${n}`,
						method: m.ib.DELETE
					}))(r(), a.name, t),
					c = Object(_.e)(o, "delete_flair_template");
				return i.ok && n(C({
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
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/snoovatar/index.ts"),
				a = n("./src/reddit/reducers/features/avatar/index.ts"),
				i = n("./src/reddit/selectors/avatar.ts");
			Object(s.a)({
				features: {
					avatar: a.a
				}
			});
			const c = "SET_AVATAR_USER",
				d = Object(r.a)(c),
				l = (e, t, n) => async (s, r, {
					apiContext: a
				}) => {
					const c = Object(i.b)(r());
					await Object(o.e)(a(), e, t, n, c)
				}, u = () => async (e, t, {
					apiContext: n
				}) => {
					const s = await Object(o.d)(n());
					s.ok && e(d(s.body))
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			}));
			var s = n("./src/reddit/actions/login.ts"),
				r = n("./src/reddit/actions/modal.ts"),
				o = n("./src/reddit/actions/users.ts"),
				a = n("./src/reddit/constants/modals.ts"),
				i = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(d.a)(Object(i.h)(n)), e(Object(o.s)({
					forceFetch: !0
				})), await e(Object(r.g)(a.a.SNOOVATAR_MODAL))
			};

			function u(e = {}) {
				return async (t, n) => {
					const {
						clickSource: o,
						share: l,
						source: u
					} = e, m = n();
					o && Object(d.a)(Object(i.c)(o)(m)), Object(c.K)(m) ? await t(Object(r.h)(a.a.SNOOVATAR_MODAL, {
						share: l,
						source: u
					})) : await t(Object(s.i)())
				}
			}
		},
		"./src/reddit/actions/urlRequested.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/matchRoute/index.ts"),
				r = n("./src/lib/opener/index.ts"),
				o = n("./node_modules/react-router-redux/es/index.js");
			const a = (e, t = !0) => async (n, a, {
				routes: i
			}) => {
				const c = a();
				Object(s.a)(e, i, c) ? n(Object(o.b)(e)) : t ? Object(r.e)(e, "_blank") : window.location.assign(e)
			}
		},
		"./src/reddit/actions/userFlair/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			})), n.d(t, "i", (function() {
				return o
			})), n.d(t, "j", (function() {
				return a
			})), n.d(t, "h", (function() {
				return i
			})), n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "p", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "o", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "e", (function() {
				return _
			})), n.d(t, "m", (function() {
				return h
			})), n.d(t, "n", (function() {
				return E
			})), n.d(t, "l", (function() {
				return v
			})), n.d(t, "k", (function() {
				return O
			}));
			const s = "USER_FLAIR_DATA__MUTATED",
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
				_ = "STRUCTURED_STYLES__USERFLAIR_DELETETEMPLATE_FAILED",
				h = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_PENDING",
				E = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_SUCCESS",
				v = "STRUCTURED_STYLES__USERFLAIR_REORDERTEMPLATES_FAILED",
				O = "USERFLAIR_FETCH_SUCCESS"
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				r = n.n(s);
			const o = n("./src/lib/lessComponent.tsx").a.div("AdLinkWrapper", r.a);
			t.a = o
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
			e.exports = {
				displayUrl: "Nd1oMnpI7mh5Ewfm9VQxq",
				leftSideContent: "_1oCxYg3Tu1IIcDUUOu9gIA",
				caption: "_2LmxORnqxzKG1lDeTP_w6R"
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/reddit/components/CallToActionButton/index.tsx"),
				i = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				c = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				d = n.n(c);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
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
					href: c.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c,
					className: d.a.displayUrl
				}, m)), l && o.a.createElement(a.a, {
					className: d.a.callToAction,
					href: c.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: c
				}, l))
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/CallToActionButton/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = ({
				className: e,
				...t
			}) => r.a.createElement(a.b, d({
				className: Object(o.a)(c.a.CallToActionButton, e, {
					[c.a.mNotCardView]: t.isNotCardView
				})
			}, t))
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				horizontalVotes: "_2oM1YqCxIwkvwyeZamWwhW",
				customScoreStyles: "_25IkBM0rRUqWX5ZojEMAFQ",
				customDownvoteStyles: "_783RL1AYIib59nxLCXhgv"
			}
		},
		"./src/reddit/components/CompactPost/HorizontalVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/components/CompactPost/HorizontalVotes/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
		"./src/reddit/components/CompactPost/index.m.less": function(e, t, n) {
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
				leftBorderWrapper: "_3ZmFVbkR23TIZ-3nboLYXe"
			}
		},
		"./src/reddit/components/CompactPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "renderSubredditIcon", (function() {
				return Te
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/ads/index.ts"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/constants/postLayout.ts"),
				m = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				p = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = n("./src/reddit/helpers/trackers/post.ts"),
				f = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/models/User/index.ts"),
				h = n("./src/reddit/models/Vote/index.ts"),
				E = n("./src/reddit/actions/post.ts"),
				v = n("./src/reddit/actions/postFlair.ts"),
				O = n("./src/reddit/actions/tooltip.ts"),
				x = n("./src/reddit/selectors/activeModalId.ts"),
				S = n("./src/reddit/selectors/moderatorPermissions.ts"),
				g = n("./src/reddit/selectors/postFlair.ts"),
				y = n("./src/reddit/selectors/posts.ts"),
				C = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				j = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				T = n("./src/reddit/components/AwardBadges/index.tsx"),
				I = n("./src/reddit/components/CommentsChat/LiveIcon/index.tsx"),
				w = n("./src/reddit/components/CommentsLink/index.tsx"),
				k = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				A = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				P = n("./src/reddit/components/ExpandoButton/index.tsx"),
				N = n("./src/reddit/components/Flatlist/index.tsx"),
				R = n("./src/reddit/components/Flatlist/getFlatlistTooltipId.ts"),
				D = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = n("./src/reddit/components/ModActionsMenu/index.tsx"),
				F = n("./src/reddit/components/ModModeReports/index.tsx"),
				M = n("./src/reddit/components/ModModeReports/helpers.ts"),
				U = n("./src/reddit/components/ModToolsFlatlist/index.tsx"),
				B = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				G = n("./src/reddit/components/PostBadges/index.tsx"),
				V = n("./src/reddit/components/PostContainer/index.tsx"),
				Y = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				W = n("./src/reddit/components/PostLeftRail/index.tsx"),
				H = n("./src/reddit/components/PostMedia/index.tsx"),
				z = n("./src/reddit/components/PostModModeDropdown/index.tsx"),
				q = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				Q = n("./src/reddit/components/PostTitle/index.tsx"),
				K = n("./src/reddit/components/PostTopMeta/index.tsx"),
				Z = n("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				X = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				J = n("./src/reddit/components/SponsoredLabel/index.tsx"),
				$ = n("./src/reddit/components/SubredditIcon/index.tsx"),
				ee = n("./src/reddit/components/VerticalVotes/index.tsx"),
				te = n("./src/reddit/components/ViewReportsDropdown/Loader.ts"),
				ne = n("./src/reddit/contexts/PageLayer/index.tsx"),
				se = n("./src/reddit/contexts/Post/index.tsx"),
				re = n("./src/reddit/controls/Checkbox/index.tsx"),
				oe = n("./src/reddit/controls/MetaData/index.tsx"),
				ae = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				ie = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				ce = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				de = n("./src/reddit/helpers/postEvent.ts"),
				le = n("./src/reddit/hooks/useIsOverlay.ts"),
				ue = n("./src/reddit/hooks/useTheme.ts"),
				me = n("./src/reddit/hooks/useUserContext.ts"),
				pe = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				be = n("./src/reddit/icons/fonts/Report/index.tsx"),
				fe = n("./src/reddit/selectors/showPromotedCTA.ts"),
				_e = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				he = n.n(_e),
				Ee = n("./src/reddit/components/CompactPost/index.m.less"),
				ve = n.n(Ee);

			function Oe() {
				return (Oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const xe = ({
					isCompact: e,
					...t
				}) => r.a.createElement(P.a, Oe({
					className: Object(d.a)(ve.a.responsiveExpandoButton, {
						[ve.a.mHideAboveSmallTablets]: !!e,
						[ve.a.mHideBelowSmallTablets]: !e
					})
				}, t)),
				Se = () => Object(i.c)({
					activeModalId: x.a,
					crosspost: y.d,
					flairStyleTemplate: ne.U,
					isActive: y.j,
					isExpanded: y.m,
					showPromotedCTA: fe.b,
					layout: ne.Q,
					moderatorPermissions: S.l,
					poll: (e, t) => {
						const n = e.posts.metaMap[t.postId];
						if (n) return e.polls.models[n]
					},
					showEditFlair: g.a
				}),
				ge = (e, {
					postId: t
				}) => ({
					dispatchFlairChanged: ({
						post: t,
						previewFlair: n,
						selectedTemplateId: s
					}) => e(Object(v.h)({
						post: t,
						previewFlair: n,
						selectedTemplateId: s
					})),
					handleVote: n => {
						const s = n === h.a.upvoted ? Object(E.db)(t) : Object(E.w)(t);
						e(s)
					},
					onIgnoreReports: () => e(Object(E.Z)(t)),
					onOpenReportsDropdown: t => e(Object(O.h)({
						tooltipId: t
					}))
				});
			class ye extends r.a.Component {
				componentDidUpdate(e) {
					this.props.onSizeChanged && e.isExpanded !== this.props.isExpanded && this.props.onSizeChanged(this.props.post.id)
				}
				render() {
					const {
						activeModalId: e,
						className: t,
						currentProfileName: n,
						crosspost: s,
						currentUser: o,
						eventFactory: a,
						flairStyleTemplate: i,
						handleVote: l,
						imageGalleryCurrentItem: h,
						isCheckboxSelected: E = !1,
						isCommentsPage: v,
						isCommentPermalink: O,
						isExpanded: x,
						isGalleryTileLayoutDefault: S,
						isOverlay: g,
						isProfilePostListing: y,
						inSubredditOrProfile: P = !1,
						layout: H,
						moderatorPermissions: J,
						modModeEnabled: $,
						onClickPost: ne,
						onFlairChanged: se,
						onIgnoreReports: oe,
						poll: le,
						post: ue,
						subredditOrProfile: me,
						userIsOp: fe,
						hideModTools: _e,
						scrollerItemRef: Ee,
						showBulkActionCheckbox: Oe,
						showEditFlair: Se,
						toggleCheckbox: ge,
						tooltipType: ye,
						sendEvent: je,
						shouldShowGalleryTileOption: Te,
						showPromotedCTA: we
					} = this.props, ke = !!ue.media && ue.media.type === f.o.RTJSON, Ae = fe && ke, Pe = Object(Y.b)(ue.id, g), Ne = Object(ce.a)(J), Re = Object(ae.a)(J), De = Object(ie.a)(J), Le = `-mod-actions-menu-${ue.id}`, Fe = `voting-arrows-${ue.id}`, Me = !!o && Object(_.e)(o) === ue.author, Ue = Object(M.c)(ue), Be = Object(R.a)("View--Reports", ue.id, ye), Ge = Object(M.a)(ue), Ve = !(g || v || O), Ye = ue.media && ue.media.type === f.o.LIVEVIDEO, We = e => je(Object(b.h)(ue.id, e)), He = Object(c.t)(ue, h), {
						source: ze
					} = He, qe = r.a.createElement(V.a, {
						className: Object(d.a)(he.a.compactPostStyles, ve.a.postContainer, Object(p.a)(this.props), t),
						isOverlay: g,
						style: {
							...Object(p.d)(this.props),
							...Object(p.b)(this.props.flairStyleTemplate)
						},
						post: ue,
						onClick: ne,
						eventFactory: a
					}, r.a.createElement("div", {
						className: ve.a.compactWrapper
					}, r.a.createElement("div", {
						className: ve.a.leftRailWrapper
					}, r.a.createElement("div", {
						className: ve.a.leftRail,
						style: {
							borderColor: Object(W.c)({
								isRemoved: !!ue.bannedBy,
								isReported: Object(m.a)(ue),
								isSponsored: ue.isSponsored,
								theme: this.props.theme
							})
						}
					}, Oe && r.a.createElement(re.a, {
						className: ve.a.bulkActionCheckbox,
						isCheckboxSelected: E,
						toggleCheckbox: ge
					}), r.a.createElement(ee.a, {
						className: ve.a.verticalVotes,
						compact: !0,
						flairStyleTemplate: i,
						model: ue,
						onVoteClick: l
					}), r.a.createElement(k.a, {
						className: ve.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: i,
						model: ue,
						onVoteClick: l,
						upvoteTooltipId: Fe
					}))), r.a.createElement(B.a, {
						className: Object(d.a)(ve.a.content, {
							[ve.a.isEvent]: Object(de.a)(ue)
						}),
						"data-click-id": "background",
						flairStyleTemplate: i
					}, r.a.createElement(A.a, {
						isCompactMode: !0,
						post: ue
					}), r.a.createElement("div", {
						className: ve.a.compactPostRow
					}, !_e && r.a.createElement(xe, {
						crosspost: s,
						isCommentsPage: v,
						isCompact: !1,
						isExpanded: x,
						post: ue,
						useMediaIcons: !0
					}), !P && !ue.isSponsored && r.a.createElement(D.h, {
						type: ue.belongsTo.type,
						id: ue.belongsTo.id
					}), r.a.createElement("div", {
						className: ve.a.topLine,
						"data-click-id": "body"
					}, r.a.createElement(Q.c, {
						post: ue,
						poll: le,
						size: Q.b.Small,
						titleColor: i && i.postTitleColor,
						isOverlay: !1
					}), Ie(ue, me), r.a.createElement(K.d, {
						className: ve.a.postTopMeta,
						flairStyleTemplate: i,
						post: ue,
						showSub: !!me && !P && !ue.isSponsored,
						subredditOrProfile: me
					}), r.a.createElement(G.a, {
						className: ve.a.postBadges,
						displayText: me ? me.displayText : null,
						inSubredditOrProfile: P,
						post: ue
					}), r.a.createElement(T.a, {
						thing: ue,
						tooltipType: g ? K.c.Lightbox : void 0
					})), Ve && !Ye && r.a.createElement("div", null, r.a.createElement(I.a, {
						className: ve.a.liveDiscussionIcon,
						isMod: Ne,
						postId: ue.postId
					})), r.a.createElement("div", {
						className: ve.a.flatList
					}, r.a.createElement(w.a, {
						className: ve.a.commentsLink,
						hasModPostPerms: Ne,
						isCommentsPage: v,
						isCommentPermalink: O,
						isOverlay: g,
						postId: ue.id,
						modModeEnabled: $,
						numComments: ue.numComments,
						type: u.g.Compact
					}), r.a.createElement(U.a, {
						className: ve.a.modToolsFlatlist,
						isOverlay: !1,
						layout: H,
						modModeEnabled: $,
						post: ue,
						sendEvent: je,
						showIconsOnly: !0
					}), Ne && r.a.createElement(L.a, {
						dropdownId: Le,
						onClick: () => We("post_mod_action_menu")
					}, r.a.createElement(N.b, null), r.a.createElement(z.a, {
						canEditFlair: Re && Se,
						hasModPostPerms: Ne,
						hasModFullPerms: De,
						isOverlay: !1,
						isPostAuthor: Me,
						modModeEnabled: $,
						post: ue,
						tooltipId: Le
					})), Ne && Ue && !$ && r.a.createElement(X.c, {
						text: `${Ge}`,
						onClick: () => {
							this.props.onOpenReportsDropdown(Be), We("post_report_menu")
						},
						id: Be
					}, r.a.createElement(te.a, {
						model: ue,
						onIgnoreReports: () => {
							oe(), We(ue.ignoreReports ? "restore_reports" : "ignore_reports")
						},
						tooltipId: Be
					}), ue.ignoreReports ? r.a.createElement(pe.a, null) : r.a.createElement(be.a, null)), r.a.createElement(q.a, {
						currentProfileName: n,
						isCommentsPage: v,
						isOverlay: !1,
						isProfilePostListing: y,
						layout: H,
						permalink: ue.permalink,
						sendEvent: je,
						showEditPost: Ae,
						showEditFlair: Se,
						dropdownId: `${ue.id}-overflow-menu`,
						useFlatlistBreakpoints: Object(q.b)({
							share: !1,
							editPost: !1,
							save: !1,
							gild: !1,
							hide: !1,
							report: !1
						})
					}), !_e && r.a.createElement(xe, {
						crosspost: s,
						isCommentsPage: v,
						isCompact: !0,
						isExpanded: x,
						post: ue,
						useMediaIcons: !0
					}))), we && ze && ze.url && r.a.createElement(C.a, {
						className: ve.a.adLinkWrapper
					}, r.a.createElement(j.a, {
						post: ue,
						adLinkContent: He,
						isCompact: !0
					})), $ && Ne && Ue && r.a.createElement("div", {
						className: ve.a.compactPostRow
					}, r.a.createElement(F.a, {
						onIgnoreReports: oe,
						reportable: ue
					})), r.a.createElement(D.d, null))), x && r.a.createElement(Ce, {
						post: ue,
						scrollerItemRef: Ee,
						flairStyleTemplate: i,
						shouldShowGalleryTileOption: Te,
						isGalleryTileLayoutDefault: S
					}), e === Pe && r.a.createElement(Y.a, {
						flairs: ue.flair,
						subredditId: ue.belongsTo.id,
						modalId: Pe,
						onFlairChanged: se
					}));
					return r.a.createElement(Z.b, null, qe)
				}
			}
			const Ce = e => r.a.createElement(B.a, {
					className: Object(d.a)(e.className, ve.a.expandedContentWrapper),
					flairStyleTemplate: e.flairStyleTemplate
				}, e.post.crosspostRootId ? r.a.createElement("div", {
					className: ve.a.crosspostMediaWrapper
				}, je(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)) : je(e.post, e.scrollerItemRef, e.shouldShowGalleryTileOption, e.isGalleryTileLayoutDefault)),
				je = (e, t, n, s) => r.a.createElement(H.a, {
					isExpando: !0,
					isGalleryTileLayoutDefault: s,
					isListing: !0,
					isNotCardView: !0,
					post: e,
					scrollerItemRef: t,
					shouldLoad: !0,
					shouldPause: !1,
					shouldShowGalleryTileOption: n,
					showCentered: !0,
					showFull: !0,
					showPromotedCTA: !0
				}),
				Te = e => r.a.createElement(a.a, {
					"data-click-id": "subreddit",
					to: e.url
				}, r.a.createElement($.b, {
					className: ve.a.subredditIcon,
					subredditOrProfile: e
				})),
				Ie = (e, t) => r.a.createElement("div", {
					className: ve.a.responsiveMeta
				}, r.a.createElement(oe.b, {
					isScoreHidden: e.scoreHidden,
					score: e.score
				}), r.a.createElement(oe.c, null), Object(oe.d)(e.numComments), r.a.createElement(oe.c, null), t && r.a.createElement("a", {
					href: t.url
				}, r.a.createElement(oe.a, null, t.displayText)), e.isSponsored && [r.a.createElement(J.a, {
					key: "label"
				}), r.a.createElement(oe.c, {
					key: "separator"
				})], !e.isSponsored && r.a.createElement(oe.a, null, " Posted by "), r.a.createElement(K.b, {
					post: e
				}));
			t.default = Object(se.b)(r.a.memo((function(e) {
				const t = Object(me.a)(),
					n = Object(s.useMemo)(() => Se(), []),
					a = Object(o.e)(s => n(s, {
						...e,
						...t
					})),
					i = Object(o.d)(),
					c = ge(i, {
						...e,
						...t
					});
				return r.a.createElement(ye, Oe({}, e, t, a, c, {
					onFlairChanged: ({
						previewFlair: t,
						selectedTemplateId: n
					}) => c.dispatchFlairChanged({
						post: e.post,
						previewFlair: t,
						selectedTemplateId: n
					}),
					sendEvent: Object(l.b)(),
					isOverlay: Object(le.a)(),
					theme: Object(ue.a)()
				}))
			})))
		},
		"./src/reddit/components/CountAnimation/index.m.less": function(e, t, n) {
			e.exports = {
				countAnimation: "_3z5CnRH3l7hQGI8TQYFyqX",
				digitDeltaWrapper: "WBY6J5DJsZFZXSxBqtq0F",
				digitDelta: "_3LT2yD0gRFklddn3Ra9ElD",
				"sr-only": "D6SuXeSnAAagG8dKAb4O4",
				srOnly: "D6SuXeSnAAagG8dKAb4O4"
			}
		},
		"./src/reddit/components/CountAnimation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/realtime/GQLSubscription/async.tsx"),
				a = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				i = n("./src/reddit/hooks/usePrevious.ts");
			const c = e => {
				return Math.abs(e).toString().split("").map(e => parseInt(e))
			};
			var d = n("./src/reddit/components/CountAnimation/index.m.less"),
				l = n.n(d);
			var u;
			! function(e) {
				e.Vote = "vote", e.Comment = "comment"
			}(u || (u = {}));
			const m = () => 0;
			t.b = e => {
				const {
					countToUpperBound: t,
					featureName: n,
					incrementDelta: d,
					initialDelay: u,
					initialDisplayCount: p,
					inViewPortAnimatingCallbackOnce: b,
					isLoadTestOnly: f,
					onDataCB: _,
					postId: h,
					queryKey: E,
					queryVariables: v,
					shouldDisjointAnimation: O,
					subsequentRecurringDelay: x
				} = e, [S, g] = Object(s.useState)(!1), [y, C] = Object(s.useState)(!0), [j, T] = Object(s.useState)([]), [I, w] = Object(s.useState)(c(p).reverse()), k = Object(s.useRef)(!1), A = Object(s.useRef)(null), P = Object(s.useRef)(e => {}), N = Object(s.useRef)();
				P.current = Object(s.useCallback)(e => {
					let n = e || d();
					const s = [...I].reverse().join("");
					let r = parseInt(s) + n;
					r > t && (n = t - parseInt(s), r = t);
					const o = c(r).reverse();
					g(!1), T(I), w(o), C(!1), N.current = setTimeout(() => {
						g(!0)
					}, 0)
				}, [t, d, I]);
				const R = Object(s.useRef)(() => {}),
					D = Object(s.useRef)(),
					L = Object(s.useRef)();
				R.current = Object(s.useCallback)(() => {
					L.current = setTimeout(() => {
						P.current();
						const e = [...j].reverse().join("");
						parseInt(e) < t && R.current()
					}, x())
				}, [t, x, j]);
				const F = Object(s.useRef)(0),
					M = Object(s.useRef)(!1),
					U = Object(s.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t,
								intersectionRatio: n
							} = e, s = 1 !== n;
							t ? (M.current = !0, k.current || (k.current = !0, D.current = setTimeout(() => {
								P.current(), R.current()
							}, u())), F.current > 0 && (P.current(F.current), F.current = 0)) : s && (M.current = !1)
						})
					}, []);
				Object(a.a)(A, U);
				const [B, G] = Object(s.useState)(!1), V = Object(s.useCallback)(e => {
					e.forEach(e => {
						const {
							isIntersecting: t,
							intersectionRatio: n
						} = e, s = 1 !== n;
						t ? G(!0) : s && G(!1)
					})
				}, []), Y = Object(s.useRef)({
					rootMargin: "2000px 0px 2000px 0px"
				});
				Object(a.a)(A, V, Y.current);
				const W = Object(i.a)(t);
				Object(s.useEffect)(() => {
					if (void 0 !== W && W !== t) {
						const e = t - W;
						M.current ? (P.current(e), b && b()) : F.current += e
					}
					return () => {
						clearTimeout(D.current), clearTimeout(L.current), clearTimeout(N.current)
					}
				}, [t]);
				const H = Object(s.useCallback)(() => C(!0), [C]),
					z = 0 === j.length,
					q = y || z,
					Q = Object(s.useRef)(((e, t) => `${t}_${e}_count_anim`)(h, n));
				return r.a.createElement(r.a.Fragment, null, !f && r.a.createElement("div", {
					className: l.a.countAnimation
				}, I.map((e, t) => {
					const n = ((e, t) => {
						let n = Math.abs(e);
						const s = Math.abs(t),
							r = [n];
						if (n === s) return r;
						let o = !0;
						for (; o;) ++n > 9 && (n = 0), r.push(n), n === s && (o = !1);
						return r
					})(j[t] || 0, e);
					return r.a.createElement("span", {
						"aria-hidden": !0,
						className: l.a.digitDeltaWrapper,
						key: t,
						onTransitionEnd: H,
						style: S && j.length > 0 && !y ? {
							transform: `translateY(-${O&&n.length>1?100:100*(n.length-1)}%)`,
							transitionDuration: `${(O?500:750)/1e3}s`
						} : {
							transform: "translateY(0)"
						}
					}, q ? r.a.createElement("span", {
						className: l.a.digitDelta
					}, e) : n.map((e, t) => {
						const s = 0 === t || t === n.length - 1;
						if (!O || O && s) return r.a.createElement("span", {
							className: l.a.digitDelta,
							key: t
						}, e)
					}).filter(e => !!e))
				}), r.a.createElement("span", {
					className: l.a.srOnly,
					role: "screen-reader"
				}, [...I].reverse().join(""))), r.a.createElement("span", {
					ref: A
				}), B && r.a.createElement(o.a, {
					variables: v,
					onData: f ? m : _,
					queryKey: E,
					uniqueKey: Q.current
				}))
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2A1Ng1fBxjU-qYqbEJn_sm",
				EventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventMetaWrapper: "_55hUWVhbF34AzbWr7SAMi",
				eventFollowButton: "_2XCKBYzBTZpjOAFEWv1tSy",
				isCompact: "_2gNxoOe_xKaMk0mmYMQCGs"
			}
		},
		"./src/reddit/components/EventPost/EventMetaHeader/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/eventTools/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				m = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(m);
			const b = i.a.div("EventMetaWrapper", p.a);
			t.a = ({
				className: e,
				isCompactMode: t,
				post: n
			}) => {
				if (!Object(u.a)(n)) return null;
				const s = n && n.eventInfo,
					i = Object(l.a)(n),
					m = s && Object(a.c)(s.eventStart, s.eventEnd);
				return r.a.createElement("div", {
					className: Object(o.a)(p.a.container, e, {
						[p.a.isCompact]: !!t
					})
				}, r.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, r.a.createElement(c.a, {
					post: n
				}), !i && m && r.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: n,
					isEventFollow: !0
				})))
			}
		},
		"./src/reddit/components/EventPost/PostEventMeta/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/EventPost/PostEventMeta/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/eventTools/index.ts"),
				a = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				i = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/icons/fonts/helpers.tsx"),
				d = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				l = n.n(d);
			var u = e => r.a.createElement("i", {
				className: Object(i.a)(Object(c.b)("scheduled", e.isFilled), l.a.calendarIcon, e.className)
			});
			var m = e => r.a.createElement("i", {
					className: Object(i.a)(Object(c.b)("live", e.isFilled), l.a.liveIcon, e.className)
				}),
				p = n("./src/reddit/components/HumanDate/index.tsx"),
				b = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				f = n.n(b),
				_ = n("./src/lib/lessComponent.tsx");
			const h = _.a.span("PostEventFutureText", f.a),
				E = _.a.span("PostEventPastText", f.a),
				v = _.a.span("PostEventNowText", f.a),
				O = _.a.span("Container", f.a),
				x = _.a.wrapped(u, "CalendarIcon", f.a),
				S = _.a.wrapped(m, "LiveIcon", f.a),
				g = _.a.div("LoadingState", f.a);
			class y extends s.Component {
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
						eventInfo: n
					} = t;
					if (!n) return null;
					const {
						eventEnd: s,
						eventIsLive: i,
						eventStart: c
					} = n, d = Object(o.e)(c, s);
					let l, u;
					if (this.state.mounted || d === o.a.Live) l = r.a.createElement(p.c, {
						startTime: c,
						endTime: s,
						isLive: i
					});
					else {
						const e = Object(a.a)({
							isLoading: !0
						});
						l = r.a.createElement(g, {
							className: e
						})
					}
					if (i) u = r.a.createElement(v, null, r.a.createElement(S, null), l);
					else if (d === o.a.Future) u = r.a.createElement(h, null, r.a.createElement(x, null), l);
					else {
						if (d !== o.a.Past) return null;
						u = r.a.createElement(E, null, r.a.createElement(x, null), l)
					}
					return r.a.createElement(O, {
						className: e
					}, u)
				}
			}
			t.a = y
		},
		"./src/reddit/components/ExpandoButton/index.m.less": function(e, t, n) {
			e.exports = {
				outer: "RvLtAcdRtbOQbhFB7MD_T",
				icon: "saNpcHve-34zjaa0cbIxW",
				hideOnHover: "_25HJpaEPiVNq6Ss3Ad7dp9",
				showOnHover: "_2S05CzViTnl3I2ekCABqFo"
			}
		},
		"./src/reddit/components/ExpandoButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/controls/OutboundLink/index.tsx"),
				m = n("./src/reddit/helpers/postHasSelfText/index.ts"),
				p = n("./src/reddit/icons/fonts/index.tsx"),
				b = n("./src/reddit/models/Media/index.ts"),
				f = n("./src/telemetry/models/Outbound.ts"),
				_ = n("./src/reddit/components/ExpandoButton/index.m.less"),
				h = n.n(_);
			const E = Object(a.b)(null, (e, t) => ({
					toggle: () => e(Object(l.x)({
						postId: t.post.id
					}))
				})),
				v = (e, t = !1, n) => {
					const s = Object(c.a)(h.a.icon, h.a.hideOnHover);
					if (t) return o.a.createElement(p.a, {
						name: "crosspost",
						className: s
					});
					if (n.pollData) return o.a.createElement(p.a, {
						name: "poll_post",
						className: s
					});
					switch (e) {
						case b.o.GIFVIDEO:
							return o.a.createElement(p.a, {
								name: "gif_post",
								className: s
							});
						case b.o.IMAGE:
							return o.a.createElement(p.a, {
								name: "image_post",
								className: s
							});
						case b.o.TEXT:
						case b.o.RTJSON:
							return o.a.createElement(p.a, {
								name: "text_post",
								className: s
							});
						case b.o.VIDEO:
							return o.a.createElement(p.a, {
								name: "video_post",
								className: s
							});
						case b.o.GALLERY:
							return o.a.createElement(p.a, {
								name: "media_gallery",
								className: s
							});
						case b.o.EMBED:
						default:
							return o.a.createElement(p.a, {
								name: "embed",
								className: s
							})
					}
				};
			t.a = E(e => {
				const {
					className: t,
					crosspost: n,
					enableCrosspostIcon: r,
					isCommentsPage: a,
					isExpanded: l,
					post: b,
					toggle: _,
					useMediaIcons: E
				} = e, O = n || b, x = r && !!n;
				return O.media && !(("rtjson" === O.media.type || "text" === O.media.type) && !Object(m.a)(O)) || !!b.pollData ? o.a.createElement("button", {
					"aria-expanded": !!l,
					"aria-haspopup": !0,
					"aria-label": s.fbt._("Expand content", null, {
						hk: "1e35IG"
					}),
					className: Object(c.a)(t, h.a.outer),
					"data-click-id": l ? "expando_close" : "expando_open",
					onClick: _
				}, l ? o.a.createElement(p.a, {
					name: "collapse",
					className: h.a.icon
				}) : E ? o.a.createElement(o.a.Fragment, null, v(O.media && O.media.type, x, b), o.a.createElement(p.a, {
					name: "expand",
					className: Object(c.a)(h.a.icon, h.a.showOnHover)
				})) : o.a.createElement(p.a, {
					name: "expand",
					className: h.a.icon
				})) : O.source && O.source.url ? o.a.createElement(u.b, {
					"aria-label": s.fbt._("Open external content", null, {
						hk: "2FfpSI"
					}),
					className: Object(c.a)(t, h.a.outer),
					"data-click-id": "expando_open",
					href: O.source.url,
					isSponsored: b.isSponsored,
					postId: b.id,
					source: b.source,
					sourceElement: a ? f.SourceElement.PostImage : f.SourceElement.ListingPostImage,
					target: "_blank"
				}, o.a.createElement(p.a, {
					name: "external_link",
					className: Object(c.a)(h.a.icon, h.a.outboundLinkIcon)
				})) : o.a.createElement(i.a, {
					"aria-label": s.fbt._("View content", null, {
						hk: "24KLWF"
					}),
					className: Object(c.a)(t, h.a.outer),
					"data-click-id": "expando_open",
					to: Object(d.a)(O.permalink),
					rel: "nofollow"
				}, o.a.createElement(p.a, {
					name: "text_post",
					className: h.a.icon
				}))
			})
		},
		"./src/reddit/components/FlairPickerTitle/index.m.less": function(e, t, n) {
			e.exports = {
				modalHeader: "_26bOTAKvGixX5tMC3vGfTv"
			}
		},
		"./src/reddit/components/FlairPickerTitle/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/lodash/noop.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = n("./src/reddit/controls/TextButton/index.tsx"),
				d = n("./src/reddit/components/FlairPickerTitle/index.m.less"),
				l = n.n(d);
			t.a = e => a.a.createElement(i.i, {
				className: l.a.modalHeader
			}, a.a.createElement(i.q, null, e.title), a.a.createElement(c.a, {
				onClick: e.onClosePressed || r.a
			}, a.a.createElement(i.b, null)))
		},
		"./src/reddit/components/FlairPickerWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				Wrapper: "_3nRJIwLuth2pKYrXnr2jPN",
				wrapper: "_3nRJIwLuth2pKYrXnr2jPN"
			}
		},
		"./src/reddit/components/FlairPickerWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/components/FlairPickerWrapper/index.m.less"),
				o = n.n(r);
			const a = s.a.div("Wrapper", o.a);
			t.a = a
		},
		"./src/reddit/components/FlairPreview/index.m.less": function(e, t, n) {
			e.exports = {
				Placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				placeholder: "_30zvTaAcvBFmwfelq6Bvwg",
				SelectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				selectedFlair: "BzonfS85jX2JTiu_i0Jyd",
				FlairComponent: "vynkb69RQyUY-PA6bCaW0",
				flairComponent: "vynkb69RQyUY-PA6bCaW0"
			}
		},
		"./src/reddit/components/FlairPreview/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/Flair/index.tsx"),
				c = n("./src/reddit/components/FlairPreview/index.m.less"),
				d = n.n(c);
			const l = a.a.span("Placeholder", d.a),
				u = a.a.div("SelectedFlair", d.a),
				m = a.a.wrapped(i.b, "FlairComponent", d.a);
			t.a = e => e.flair ? o.a.createElement(u, null, o.a.createElement(l, null, s.fbt._("{placeholder}", [s.fbt._param("placeholder", e.placeholderText)], {
				hk: "4G6VRy"
			})), o.a.createElement(m, {
				flair: e.flair,
				forceSmallEmojis: !0
			})) : o.a.createElement(u, null, s.fbt._("No flair selected", null, {
				hk: "1XPXbv"
			}))
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.m.less": function(e, t, n) {
			e.exports = {
				FlairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				flairEditStub: "Z7x0t_45z9vZGN2zw6US6",
				isCompact: "_3YjPWOd9tK9O_DN50RI_FN"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/helper.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/once.js"),
				r = n.n(s),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				i = n("./src/higherOrderComponents/makeAsync.tsx"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/lessComponent.tsx"),
				l = n("./src/lib/loadWithRetries/index.ts"),
				u = n("./src/reddit/components/FlairSearch/FlairEdit/helper.m.less"),
				m = n.n(u);
			const p = d.a.wrapped(e => a.a.createElement("div", {
					className: Object(c.a)(e.className, {
						[m.a.isCompact]: e.isCompact
					})
				}), "FlairEditStub", m.a),
				b = r()((e = p) => Object(i.a)({
					getComponent: () => Object(l.a)(() => Promise.all([n.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), n.e("FlairEdit")]).then(n.bind(null, "./src/reddit/components/FlairSearch/FlairEdit/index.tsx")).then(e => e.default)),
					ErrorComponent: e,
					LoadingComponent: e
				}))
		},
		"./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/FlairSearch/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2AKP6aCod0Z6TuXXfc1ZqL",
				buttonsRow: "_3w7b_fPwMuVD17J7epjTXi",
				clearButton: "_3WykjMvdVO5xibqd5xlfTC",
				flairEditSection: "SVd7IxchgiWetdYbftTHx",
				editLabel: "KTa3kg9lzGPUeLuhAHMT_",
				restrictionHintText: "_1fV9kJfKnED9qQ2AF8f3iT"
			}
		},
		"./src/reddit/components/FlairSearch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/memoizeByReference/index.ts"),
				l = n("./src/reddit/featureFlags/index.ts"),
				u = n("./src/reddit/helpers/flair.ts"),
				m = n("./src/reddit/helpers/trackers/userFlair.ts"),
				p = n("./src/reddit/hooks/useTracking.ts"),
				b = n("./src/reddit/selectors/moderatorPermissions.ts"),
				f = n("./src/reddit/components/FlairSearch/FlairEdit/helper.tsx"),
				_ = n("./src/reddit/components/Flair/index.tsx"),
				h = n("./src/reddit/controls/RadioInput/index.tsx"),
				E = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				v = n("./src/reddit/icons/svgs/Pencil/index.tsx"),
				O = n("./src/reddit/icons/svgs/Search/index.tsx"),
				x = n("./src/reddit/components/FlairSearch/FlairTemplateList/index.m.less"),
				S = n.n(x);
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
						selectedTemplateId: n
					} = this.props, {
						searchQuery: r
					} = this.state, a = t.map(t => e[t]).filter(e => e.text.toLowerCase().includes(r)), i = !!n && a.some(e => e.id === n);
					return o.a.createElement("div", {
						className: S.a.container
					}, o.a.createElement("div", {
						className: S.a.searchBoxWrapper
					}, o.a.createElement("input", {
						className: S.a.searchInput,
						onChange: this.onSearchChange,
						type: "text",
						placeholder: s.fbt._("Search for flair", null, {
							hk: "jQdqA"
						}),
						value: r
					}), o.a.createElement(O.a, {
						className: S.a.searchIcon
					})), o.a.createElement(h.a, {
						name: "flair_picker",
						onChange: this.props.onChange,
						value: n
					}, a.map((e, t) => {
						const s = Object(u.c)(e),
							r = n === e.id || !i && 0 === t;
						return o.a.createElement(E.a, {
							className: S.a.radioOption,
							key: e.id,
							showButton: !0,
							tabIndex: r ? 0 : -1,
							value: e.id
						}, o.a.createElement(_.b, {
							className: S.a.flairComponent,
							flair: s,
							forceSmallEmojis: !0
						}), e.textEditable && o.a.createElement(v.a, {
							className: S.a.pencil
						}))
					})))
				}
			}
			var y = n("./src/reddit/components/FlairSearch/index.m.less"),
				C = n.n(y);
			const j = Object(d.a)(e => e && Object(u.c)(e)),
				T = Object(i.c)({
					areFlairRestrictionsEnabled: l.d.flairRestrictions,
					isModerator: b.g
				}),
				I = Object(a.b)(T);
			t.a = I(e => {
				const {
					flairTemplateType: t,
					flair: n,
					className: r,
					onChange: a,
					subredditId: i,
					templates: d,
					templateIds: l,
					areFlairRestrictionsEnabled: b,
					isModerator: _
				} = e, h = Object(p.a)(), E = d && n && n.templateId && d[n.templateId] || void 0, v = Object(f.a)(), O = n || j(E);
				return o.a.createElement("div", {
					className: Object(c.a)(r, C.a.container)
				}, d && l && o.a.createElement(g, {
					flairTemplateType: t,
					onChange: e => {
						if (d) {
							const t = d[e],
								n = Object(u.c)(t);
							h(Object(m.b)({
								userFlair: t
							})), a(n)
						}
					},
					selectedTemplateId: E ? E.id : "",
					templateIds: l,
					templates: d
				}), O && E && (_ || E.textEditable) && o.a.createElement("div", {
					className: C.a.flairEditSection
				}, o.a.createElement("div", {
					className: C.a.editLabel
				}, s.fbt._("Edit flair", null, {
					hk: "1APWWu"
				})), b && o.a.createElement("div", {
					className: C.a.restrictionHintText
				}, Object(u.k)(E)), o.a.createElement(v, {
					autofocus: !0,
					emojiPickerId: "FlairSearch-EmojiPicker-DropdownId",
					flair: O,
					flairTemplate: E,
					flairTemplateType: t,
					isFlairModOnly: E.modOnly,
					onChange: e => {
						const t = d && e.templateId ? d[e.templateId] : void 0;
						let n = e;
						t && (n = Object(u.d)({
							flair: e,
							template: t,
							ignoreTextAllowance: !0
						})), a(n)
					},
					subredditId: i
				})))
			})
		},
		"./src/reddit/components/InfoTextTooltip/Hooked.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/InfoTextTooltip/hooked.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = r.a.memo((function({
				visible: e,
				...t
			}) {
				const [n, a] = Object(s.useState)(e);
				return Object(s.useEffect)(() => {
					let t = window.setTimeout(() => {
						t = void 0, a(e)
					}, 0);
					return () => {
						t && window.clearTimeout(t), a(!1)
					}
				}, [e]), e ? r.a.createElement("div", c({
					className: Object(o.a)(i.a.tooltip, t.className, {
						[i.a.visible]: n
					})
				}, t.popperProps), t.children, n && r.a.createElement("div", c({
					className: i.a.arrow
				}, t.arrowProps))) : null
			}))
		},
		"./src/reddit/components/InfoTextTooltip/hooked.m.less": function(e, t, n) {
			e.exports = {
				arrow: "_1jsc29CjRXZWjd2tr0Ji0Y",
				tooltip: "_2J_zB4R1FH2EjGMkQjedwc",
				visible: "u6HtAZu8_LKL721-EnKuR"
			}
		},
		"./src/reddit/components/ModModeReports/index.m.less": function(e, t, n) {
			e.exports = {
				Text: "_1gNngyeM0l7oKkuGjoSTm",
				text: "_1gNngyeM0l7oKkuGjoSTm",
				Placeholder: "_1oYW-msczpGlYVcXmyEu9j",
				placeholder: "_1oYW-msczpGlYVcXmyEu9j"
			}
		},
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/ModModeReports/index.m.less"),
				c = n.n(i);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = a.a.div("Text", c.a), u = a.a.div("Placeholder", c.a), m = () => o.a.createElement(u, null, o.a.createElement(l, null, d._("Loading reports…", null, {
				hk: "4gwdQw"
			}))), p = Object(s.a)({
				resolved: {},
				chunkName: () => "ModerationDropdowns",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModerationDropdowns").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
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
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/components/HumanDate/index.tsx"),
				o = n("./src/lib/timeUntil/index.ts"),
				a = n("./node_modules/react/index.js"),
				i = n.n(a);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(r.d, {
					seconds: e.poll.endsAt / s.Pb
				}))], {
					hk: "3OERID"
				}) : Object(o.a)(new Date(e.poll.endsAt)))
			}
		},
		"./src/reddit/components/Poll/PostTitleMetaData/index.m.less": function(e, t, n) {
			e.exports = {
				proposalMetaData: "_3yYOHq_rWQcgaR_pinEQU7",
				proposalExpiry: "_1poH87fXNrjNu84jKXBtun"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				backgroundWrapper: "_1poyrkZ7g36PawDueRza-J",
				badge: "_1lLKAbRNH1mm32sVm7yCzQ"
			}
		},
		"./src/reddit/components/PostBackgroundWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				i = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				d = n.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(a.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: a,
					post: c,
					redditStyle: u,
					theme: m,
					...p
				} = e;
				return r.a.createElement("div", l({
					className: Object(o.a)(d.a.backgroundWrapper, n),
					style: Object(i.c)(s, e),
					onClick: a
				}, p), t)
			})
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/ads/index.ts"),
				i = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = r.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(l.a)(),
						o = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						a = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, o, a), r.a.createElement("div", {
						role: "presentation"
					}, r.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/telemetry.ts"),
				h = n("./src/lib/classNames/index.ts"),
				E = n("./src/lib/objectSelector/index.ts"),
				v = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				O = n("./src/reddit/components/PostContainer/index.m.less"),
				x = n.n(O);
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
				pageType: e => Object(_.actionInfo)(e).pageType
			}));
			class g extends r.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: o,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: f,
						style: _,
						ref: E,
						shouldAddGalleryViewability: v = !0
					} = this.props, O = r.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: _,
						ref: E,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => m && m(n, l, t, o, p))(n), l.id && o) {
								const {
									source: e
								} = Object(a.t)(l, o);
								e && e.outboundUrl && f(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(h.a)(x.a.WrappedPost, s, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": "post-container",
						id: d ? d(l.id) : l.id,
						tabIndex: -1
					}, n), S = !!l.media && l.media.type === b.o.VIDEO;
					return l.isSponsored || S ? r.a.createElement(i.a, {
						post: l,
						trackDisplay: !0
					}, O) : l.media && Object(b.E)(l.media) && v ? r.a.createElement(u, {
						postId: l.id
					}, O) : O
				}
			}
			t.a = S(Object(v.a)(Object(m.c)(g)))
		},
		"./src/reddit/components/PostFlairPicker/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			}));
			var s = n("./node_modules/lodash/isEqual.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/flair.ts"),
				a = n("./src/reddit/helpers/flair.ts"),
				i = n("./src/reddit/models/Flair/index.ts");
			const c = e => (e || []).find(e => e.type === i.f.Text || e.type === i.f.Image || e.type === i.f.Richtext);
			var d;
			! function(e) {
				e[e.InvalidTemplate = 0] = "InvalidTemplate", e[e.NoChanges = 1] = "NoChanges", e[e.NotSelected = 2] = "NotSelected", e[e.TextIsNotAllowed = 3] = "TextIsNotAllowed", e[e.TextIsEmpty = 4] = "TextIsEmpty", e[e.TextIsTooLong = 5] = "TextIsTooLong"
			}(d || (d = {}));
			const l = (e, t, n) => {
				if (n && !t) return {
					canSave: !0
				};
				if (!t) return {
					canSave: !1,
					reason: d.NotSelected
				};
				const s = e && t.templateId ? e[t.templateId] : void 0;
				if (!s) return {
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
				} : Object(a.n)(t) && !Object(a.r)(s) ? {
					canSave: !1,
					reason: d.TextIsNotAllowed
				} : r()(n, t) ? {
					canSave: !1,
					reason: d.NoChanges
				} : {
					canSave: !0
				}
			}
		},
		"./src/reddit/components/PostFollow/index.m.less": function(e, t, n) {
			e.exports = {
				collectionFollow: "_1yF34mDRcD_ii0n-Ak0OdI",
				isFollowed: "gBrTiaH_Z7HT5D96vnUfJ",
				isEventFollow: "_1iTFEDTdpF-KFmOZvDuGHH"
			}
		},
		"./src/reddit/components/PostFollow/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				m = n("./src/reddit/components/PostFollow/index.m.less"),
				p = n.n(m);
			class b extends o.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: r
						} = this.props, o = !!s;
						r(e ? Object(u.o)({
							postId: n,
							isFollowed: o
						}) : Object(u.g)({
							postId: n,
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
						post: n
					} = this.props, r = this.state.isHovered, a = n.isFollowed;
					let i = a ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return a && r && (i = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), o.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
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
				onFollow: () => e(Object(d.A)(t.isSponsored ? t.postId : t.id))
			}))(Object(l.c)(b))
		},
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/components/CrosspostBox/index.tsx"),
				a = n("./src/reddit/components/Media/index.tsx");

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
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return P
			})), n.d(t, "a", (function() {
				return z
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/ads/index.ts"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/components/TrackingHelper/index.tsx"),
				m = n("./src/reddit/constants/experiments.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				f = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				_ = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				h = n("./src/reddit/helpers/flair.ts"),
				E = n("./src/reddit/helpers/path/index.ts"),
				v = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				x = n("./src/reddit/models/Flair/index.ts"),
				S = n("./src/reddit/models/Media/index.ts"),
				g = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				y = n("./src/lib/getShortenedLink.ts"),
				C = n("./src/reddit/components/FlairWrapper/index.tsx"),
				j = n("./node_modules/fbt/lib/FbtPublic.js"),
				T = n("./src/lib/prettyPrintNumber/index.ts"),
				I = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				w = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				k = n.n(w);
			const A = Object(c.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var P, N = Object(a.b)(A)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, s = n ? n.totalVotes : "0";
					return o.a.createElement("div", {
						className: Object(l.a)(e.className, k.a.proposalMetaData)
					}, o.a.createElement("span", null, j.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [j.fbt._param("count", Object(T.a)(s)), j.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), t && o.a.createElement(I.a, {
						className: k.a.proposalExpiry,
						poll: t
					}))
				})),
				R = n("./src/reddit/components/SEOTitle/index.tsx"),
				D = n("./src/reddit/selectors/experiments/econ/index.ts"),
				L = n("./src/reddit/selectors/user.ts"),
				F = n("./src/reddit/components/PostTitle/index.m.less"),
				M = n.n(F),
				U = n("./src/config.ts"),
				B = n("./src/reddit/hooks/useClickSourceData.ts"),
				G = n("./src/reddit/hooks/useExperimentVariant.ts"),
				V = n("./src/reddit/hooks/usePostContext.ts"),
				Y = n("./src/reddit/hooks/useTheme.ts"),
				W = n("./src/telemetry/models/Outbound.ts");

			function H() {
				return (H = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall"
			}(P || (P = {}));
			const z = ({
					size: e,
					titleColor: t,
					titleType: n,
					nowrap: s,
					children: r,
					className: a,
					redditStyle: i
				}) => {
					const c = Object(Y.a)();
					let d = "";
					switch (e) {
						case P.ExtraLarge:
							d = M.a.ExtraLarge;
							break;
						case P.Large:
							d = M.a.Large;
							break;
						case P.Medium:
							d = M.a.Medium;
							break;
						case P.Small:
							d = M.a.Small;
							break;
						case P.ExtraSmall:
							d = M.a.ExtraSmall
					}
					return o.a.createElement("div", {
						className: Object(l.a)(M.a.Title, a, d, {
							[M.a.isNoWrap]: s
						}),
						style: {
							"--posttitletextcolor": t || Object(g.a)({
								redditStyle: i,
								theme: c
							}).titleText
						}
					}, n ? o.a.createElement(R.b, {
						type: n
					}, r) : r)
				},
				q = ({
					className: e,
					disableVisited: t,
					titleColor: n,
					children: s,
					...r
				}) => o.a.createElement(i.a, H({}, r, {
					className: Object(l.a)(e, M.a.styledLink, {
						[M.a.isVisitedEnabled]: !t
					})
				}), s),
				Q = ({
					disableVisited: e,
					nowrap: t,
					className: n,
					children: s
				}) => o.a.createElement("div", {
					className: Object(l.a)(M.a.titleContainer, n, {
						[M.a.isNoWrap]: t,
						[M.a.isVisitedEnabled]: !e
					})
				}, s),
				K = Object(c.c)({
					flairPosition: (e, {
						pageLayer: t
					}) => Object(p.q)(e, {
						pageLayer: t
					}),
					shouldOpenPostInNewTab: L.db,
					isTournamentPredictionPostV2: D.w
				}),
				Z = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: s
					} = t, r = Object(B.a)(), a = Object(G.a)(m.Oc) === m.Sc.Enabled;
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return o.a.createElement(Q, {
						nowrap: e.nowrap
					}, o.a.createElement(X, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return o.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, o.a.createElement(X, e)); {
						const i = t.media && Object(S.G)(t.media) ? Object(v.c)(t.id, n.name) : t.permalink,
							c = e.isCommentPermalink ? Object(E.b)(i) : a ? Object(_.a)(i, void 0, r) : Object(_.a)(i);
						return o.a.createElement(Q, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? ((e, t) => {
							const {
								source: n
							} = Object(d.t)(e, t.imageGalleryCurrentItem);
							return n ? o.a.createElement(b.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
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
						isCommentsPageAd: n,
						post: s
					} = e;
					let r = e.format ? e.format(s) : s.title;
					n && "string" == typeof r && (r = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(r));
					const a = e.isCommentsPage ? R.a.PostComments : R.a.PostItem;
					return o.a.createElement(z, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage,
						size: e.size,
						titleColor: e.titleColor,
						titleType: a
					}, t && o.a.createElement(C.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent,
						showCategoryTag: !1
					}), r)
				},
				J = e => {
					const {
						hideSourceLink: t,
						post: n
					} = e, {
						isSponsored: s
					} = n, r = e.isCommentsPage ? W.SourceElement.PostLink : W.SourceElement.ListingPostLink, a = !t && !e.isCrosspost && e.size !== P.Large && !n.isSponsored && !(n.media && Object(S.G)(n.media)) && (n.source || n.media && (n.media.type === S.o.GIFVIDEO || n.media.type === S.o.IMAGE || n.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return o.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(S.D)(n),
							isSponsored: s,
							postId: n.id,
							source: n.source,
							sourceElement: r
						}, Object(y.a)(n), !n.isSponsored && o.a.createElement(O.a, {
							name: "external_link",
							className: M.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== P.Large && e.size !== P.ExtraLarge) return o.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: s,
						postId: n.id,
						source: n.source,
						sourceElement: r
					}, Object(y.a)(n), !n.isSponsored && o.a.createElement(O.a, {
						name: "external_link",
						className: M.a.outboundLinkIcon
					}));
					return null
				};
			class $ extends o.a.Component {
				getDynamicStyleTags() {
					return o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id} .${M.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(s.c)(.45,Object(g.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(s.c)(.45,this.props.titleColor||Object(g.a)(this.props).titleText,Object(g.a)(this.props).body)};\n        }\n      `
						}
					})
				}
				render() {
					var e;
					const {
						className: t,
						disableFlair: n,
						flairPosition: s,
						isCommentsPage: r,
						isOverlay: a,
						poll: i,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						isTournamentPredictionPostV2: u
					} = this.props, m = s === x.b.Left, p = Object(C.b)(c), b = d ? p.filter(e => e.type === x.f.Nsfw || e.type === x.f.Spoiler) : m ? p.filter(e => Object(h.q)(e.type)) : [], f = d ? [] : m ? p.filter(e => !Object(h.q)(e.type)) : p, _ = !a && !r, E = !n && b && b.length > 0 && _, v = !n && f && f.length > 0 && _, O = !(u && (null === (e = c.pollData) || void 0 === e ? void 0 : e.isPrediction));
					return o.a.createElement("div", {
						className: Object(l.a)(M.a.Component, t, c.id)
					}, !d && E && o.a.createElement(C.a, {
						isFlairFilter: !0,
						titleFlair: b,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), O && o.a.createElement(Z, H({}, this.props, {
						leftFlair: d ? b : void 0
					})), i && o.a.createElement(N, {
						className: M.a.pollMeta,
						pollId: i.id
					}), o.a.createElement(J, this.props), v && o.a.createElement(C.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent,
						showCategoryTag: !1
					}), o.a.createElement("div", {
						className: M.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${U.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = o.a.memo((function(e) {
				const t = Object(p.db)(),
					n = Object(p.w)(t),
					s = Object(V.a)(),
					r = Object(a.e)(r => K(r, {
						...s,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					i = Object(Y.a)(),
					c = Object(u.b)();
				return s ? o.a.createElement($, H({
					pageLayer: t,
					isCommentPermalink: n
				}, s, r, e, {
					theme: i,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const r = ({
					type: e
				}) => "subreddit" === e ? "subredditActions" : "profileActions",
				o = {
					subredditActions: {
						subscribe: () => s.fbt._("Join", null, {
							hk: "3Nhj3V"
						}),
						subscribed: () => s.fbt._("Joined", null, {
							hk: "1YGago"
						}),
						unsubscribe: () => s.fbt._("Leave", null, {
							hk: "299znK"
						})
					},
					profileActions: {
						subscribe: () => s.fbt._("Follow", null, {
							hk: "18PRa5"
						}),
						subscribed: () => s.fbt._("Following", null, {
							hk: "sjS3y"
						}),
						unsubscribe: () => s.fbt._("Unfollow", null, {
							hk: "3c0uwF"
						})
					}
				},
				a = ({
					type: e,
					key: t
				}) => o[r({
					type: e
				})][t]()
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return S
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/controls/Score/index.tsx"),
				m = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				f = n("./src/reddit/selectors/posts.ts"),
				_ = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/components/VerticalVotes/index.m.less"),
				E = n.n(h);
			const v = Object(i.c)({
					isNightMode: _.X,
					isAnimatingUpvotePostId: f.k
				}),
				O = Object(a.b)(v),
				x = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				S = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class g extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						voted: b.a.notVoted
					}, this.onUpvote = () => {
						const {
							voteState: e
						} = this.props.model, {
							onVoteClick: t,
							triggerCelebratoryMoment: n
						} = this.props;
						t(b.a.upvoted);
						const s = e !== b.a.upvoted;
						if (this.setState({
								voted: s ? b.a.upvoted : b.a.notVoted
							}), s && n) {
							const {
								postId: e
							} = this.props;
							n(!0, e)
						}
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
							isCountAnimShadowTestEnabled: n,
							isNightMode: r,
							isAnimatingUpvotePostId: a,
							isVoteCountAnimation: i,
							shouldShowScore: d = !0,
							upvoteButtonClassName: p,
							containerRef: f,
							model: _,
							postId: h
						} = e,
						v = x(e),
						O = S(e),
						g = _.voteState,
						y = a === h;
					return o.a.createElement("div", {
						className: Object(c.a)(E.a.votesContainer, e.className),
						id: `vote-arrows-${_.id}`,
						ref: f
					}, v ? o.a.createElement(m.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": g === b.a.upvoted,
						"data-click-id": "upvote",
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: r,
						onClick: this.onUpvote,
						voteState: g
					}) : o.a.createElement("button", {
						"aria-label": s.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": g === b.a.upvoted,
						className: Object(c.a)(l.n, p, {
							[E.a.bounceUp]: y
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						id: e.upvoteTooltipId
					}, o.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: g
					})), !e.compact && d && o.a.createElement(u.a, {
						className: Object(c.a)(E.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: g,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!i,
						isCountAnimShadowTestEnabled: !!n,
						postId: h
					}), O ? o.a.createElement(m.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": g === b.a.downvoted,
						"data-click-id": "downvote",
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: r,
						onClick: this.onDownvote,
						voteState: g
					}) : o.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": g === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote"
					}, o.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: g
					})))
				}
			}
			const y = Object(d.a)(O(g));
			t.a = y
		},
		"./src/reddit/components/VerticalVotes/votes.m.less": function(e, t, n) {
			e.exports = {
				customDownvote: "ceU_3ot04pOVIcrrXH9fY",
				compact: "_3sO1xEnOT_9CQBjRzczQjS",
				voted: "_8dpZTfzgKPKCUTjp9SAn1",
				customUpvote: "_2k73nZrjAYiwAj9hv7K-kq"
			}
		},
		"./src/reddit/components/VerticalVotes/votes.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return k
			})), n.d(t, "b", (function() {
				return A
			})), n.d(t, "c", (function() {
				return P
			})), n.d(t, "d", (function() {
				return N
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/CSSVariableProvider/withTheme.tsx");
			const i = (e, t, n) => s => {
				const r = e(s),
					a = t(s),
					i = !r && a;
				return Object(o.a)(n.baseClassName, s.className, {
					[n.mIsInteractive]: a,
					[n.mIsActive]: r,
					[n.mIsVoteable]: i
				})
			};
			var c = n("./src/reddit/icons/fonts/Downvote/index.tsx"),
				d = n("./src/reddit/models/Vote/index.ts"),
				l = n("./src/reddit/controls/Downvote/index.m.less"),
				u = n.n(l);
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
				_ = n("./src/reddit/icons/fonts/Upvote/index.tsx"),
				h = n("./src/reddit/controls/Upvote/index.m.less"),
				E = n.n(h);
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
			var S = e => r.a.createElement(_.a, {
					className: x(e),
					compact: e.compact,
					isFilled: O(e)
				}),
				g = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				y = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				C = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				j = n("./src/reddit/components/VerticalVotes/votes.m.less"),
				T = n.n(j);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const w = e => Object(o.a)({
					[T.a.compact]: e.compact,
					[T.a.dark]: Object(y.b)(Object(g.a)(e)),
					[T.a.nightmode]: e.isNightMode
				}),
				k = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(C.a)(e), n = {
						"--verticalvotes-customdownvote-active": `url(${t.downvoteActive})`,
						"--verticalvotes-customdownvote-inactive": `url(${t.downvoteInactive})`
					}, {
						theme: s,
						...a
					} = e;
					return r.a.createElement("button", I({}, a, {
						className: Object(o.a)(T.a.customDownvote, w(e), {
							[T.a.voted]: e.voteState === d.a.downvoted
						}, e.className),
						style: n
					}))
				}),
				A = Object(a.a)(e => {
					const {
						voteIcons: t
					} = Object(C.a)(e), n = {
						"--verticalvotes-customupvote-active": `url(${t.upvoteActive})`,
						"--verticalvotes-customupvote-inactive": `url(${t.upvoteInactive})`
					}, {
						theme: s,
						...a
					} = e;
					return r.a.createElement("button", I({}, a, {
						className: Object(o.a)(T.a.customUpvote, w(e), {
							[T.a.voted]: e.voteState === d.a.upvoted
						}, e.className),
						style: n
					}))
				}),
				P = f,
				N = S
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/actions/subscription/index.ts"),
				a = n("./src/reddit/selectors/experiments/joinOptimizations.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(r.c)({
				isInJoinOptimizationsExperiment: e => Object(a.a)(e) || Object(a.b)(e) || Object(a.c)(e) || Object(a.d)(e),
				userIsSubscriber: i.cb
			}), (e, {
				identifier: t
			}) => ({
				onSubscribe: () => e(o.d([t], !0)),
				onSubscriptionsRequested: () => e(o.e()),
				onUnsubscribe: () => e(o.d([t], !1))
			}))
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = "reddit",
				r = "reddit.ready",
				o = "reddit.urlChanged"
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, n) {
			e.exports = {
				CheckboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				checkboxIcon: "WYS1s7GjzJiaX4fu-xZOJ",
				redditStyle: "J_lIqJrnicKj84OhD29vQ",
				disabled: "n0Me225oxRbL3aLt7kQA8"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/index.tsx"),
				i = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(i);
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
		"./src/reddit/controls/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				Downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				downvote: "Q0BxYHtCOJ_rNSPJMU2Y7",
				mIsInteractive: "_2fe-KdD2OM0ciaiux-G1EL",
				mIsActive: "_3emIxnIscWEPB7o5LgU_rn",
				mIsVoteable: "_3yQIOwaIuF6gn8db96Gu7y"
			}
		},
		"./src/reddit/controls/MetaData/index.m.less": function(e, t, n) {
			e.exports = {
				metaText: "_2ETuFsVzMBxiHia6HfJCTQ"
			}
		},
		"./src/reddit/controls/MetaData/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				o = n.n(r),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/lib/prettyPrintNumber/index.ts"),
				c = (n("./src/lib/timeAgo/index.ts"), n("./src/reddit/controls/MetaData/index.m.less")),
				d = n.n(c);
			const l = a.a.span("metaText", d.a),
				u = e => o.a.createElement(l, e, " · "),
				m = ({
					isScoreHidden: e,
					score: t,
					useUpvotes: n,
					...r
				}) => {
					const a = Object(i.b)(t),
						c = s.fbt._({
							"*": "{number} upvotes",
							_1: "1 upvote"
						}, [s.fbt._plural(t, "number", a)], {
							hk: "2L3T21"
						}),
						d = e ? s.fbt._("Score hidden", null, {
							hk: "SDk6B"
						}) : n ? c : s.fbt._({
							"*": "{number} points",
							_1: "1 point"
						}, [s.fbt._plural(t, "number", a)], {
							hk: "gf67v"
						});
					return o.a.createElement(l, r, d)
				},
				p = e => o.a.createElement(l, null, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(e, "number", Object(i.b)(e))], {
					hk: "3bVMk9"
				}))
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.m.less": function(e, t, n) {
			e.exports = {
				radioOption: "_2e6fJknJ4noSygWYov8-F1",
				radioOff: "_1lzSnSABNXX12WerTnwqI3",
				radioOn: "_3PYsg_uRJ6AGptv-hi7kqu"
			}
		},
		"./src/reddit/controls/RadioInput/RadioOption/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/constants/keycodes.ts"),
				i = n("./src/reddit/icons/svgs/RadioOff/index.tsx"),
				c = n("./src/reddit/icons/svgs/RadioOn/index.tsx"),
				d = n("./src/reddit/layout/row/Inline/index.tsx"),
				l = n("./src/reddit/controls/RadioInput/RadioOption/index.m.less"),
				u = n.n(l);
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
		"./src/reddit/controls/RadioInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/constants/keycodes.ts");
			class a extends r.a.Component {
				constructor(e) {
					super(e), this.handleClick = e => {
						const {
							disabled: t,
							onChange: n
						} = this.props;
						t || this.state.value !== e && (n(e), this.setState({
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
							onChange: n
						} = this.props, {
							value: s
						} = this.state;
						if (t) return;
						const r = e.key === o.b.ArrowUp,
							a = e.key === o.b.ArrowDown;
						if (r || a) {
							const t = this.getValues();
							if (!t.length) return;
							const o = s ? t.indexOf(s) : 0,
								a = t[((r ? o - 1 : o + 1) + t.length) % t.length];
							n(a), this.setState({
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
					}), r.a.Children.map(e.children, (n, s) => {
						const o = 0 === s,
							a = n.props.value === t,
							i = null !== t ? a ? 0 : -1 : o ? 0 : -1;
						return r.a.cloneElement(n, {
							disabled: e.disabled,
							onClick: e => this.handleClick(n.props.value),
							selected: a,
							tabIndex: i
						})
					}))
				}
			}
		},
		"./src/reddit/controls/Score/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_1rZYMD_4xY3gRcSS3p8ODO",
				dot: "uFieChpcVxrPI9VvCKqZu"
			}
		},
		"./src/reddit/controls/Score/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/lib/prettyPrintNumber/index.ts"),
				i = n("./node_modules/react/index.js"),
				c = n.n(i),
				d = n("./node_modules/react-redux/es/index.js"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/components/CountAnimation/index.tsx"),
				m = n("./src/reddit/constants/colors.ts"),
				p = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				b = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				f = n("./src/reddit/helpers/trackers/post.ts"),
				_ = n("./src/reddit/hooks/useTracking.ts"),
				h = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				E = n("./src/reddit/models/Vote/index.ts"),
				v = n("./src/reddit/selectors/experiments/postActionBarAnimation.ts"),
				O = n("./src/reddit/selectors/meta.ts"),
				x = n("./src/reddit/controls/Score/index.m.less"),
				S = n.n(x);
			const g = e => e.voteState === E.a.downvoted ? Object(h.a)(e).voteText.downvote : e.voteState === E.a.upvoted ? Object(h.a)(e).voteText.upvote : Object(b.a)(Object(p.a)(e)),
				y = () => 0,
				C = Object(d.b)(e => ({
					locale: Object(O.i)(e)
				})),
				j = Object(o.a)(e => {
					const t = {
							color: e.light ? m.b.lightboxHeaderText : g(e)
						},
						{
							score: n,
							postId: o = "",
							locale: p,
							isVoteCountAnimation: b,
							isCountAnimShadowTestEnabled: h
						} = e,
						E = Object(d.d)(),
						O = null == p ? void 0 : p.startsWith("en"),
						x = e.isScoreHidden ? O ? s.fbt._("Vote", null, {
							hk: "2TMson"
						}) : c.a.createElement("span", {
							className: S.a.dot
						}, "•") : Object(a.b)(n),
						C = Object(i.useCallback)(e => {
							const {
								voteCountChange: t
							} = e.subscribe.data;
							0 !== t && E(Object(l.I)({
								postId: o,
								delta: t
							}))
						}, [E, o]),
						j = Object(i.useRef)({
							input: {
								channel: {
									teamOwner: "CONTENT_AND_COMMUNITIES",
									category: "VOTE_COUNT_UPDATE",
									postID: o
								}
							}
						}),
						T = Object(_.a)(),
						I = Object(i.useCallback)(() => {
							T(Object(f.m)(o))
						}, [T, o]),
						w = !e.isScoreHidden && b && n < v.a;
					return c.a.createElement("div", {
						className: Object(r.a)(S.a.score, e.className),
						style: e.disableInlineColor ? void 0 : t
					}, (w || h) && c.a.createElement(c.a.Fragment, null, c.a.createElement(u.b, {
						initialDisplayCount: n,
						countToUpperBound: n,
						initialDelay: y,
						subsequentRecurringDelay: y,
						incrementDelta: y,
						shouldDisjointAnimation: !0,
						inViewPortAnimatingCallbackOnce: I,
						postId: o,
						featureName: u.a.Vote,
						queryKey: "postVoteCount",
						queryVariables: j.current,
						onDataCB: C,
						isLoadTestOnly: h && !w
					})), !w && x)
				});
			t.a = C(j)
		},
		"./src/reddit/controls/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				Upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				upvote: "_3SUsITjKNQ7Tp0Wi2jGxIM",
				mIsInteractive: "qW0l8Af61EP35WIG6vnGk",
				mIsActive: "Z3lT0VGlALek4Q9j0ZQCr",
				mIsVoteable: "_3edNsMs0PNfyQYofMNVhsG"
			}
		},
		"./src/reddit/endpoints/snoovatar/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./src/config.ts"),
				r = n("./src/lib/constants/index.ts"),
				o = n("./src/lib/makeApiRequest/index.ts"),
				a = n("./src/lib/omitHeaders/index.ts"),
				i = n("./src/reddit/constants/headers.ts");
			const c = async e => Object(o.a)(Object(a.a)(e, [i.a]), {
				endpoint: `${s.a.snoovatarUrl}/api/account`,
				method: r.ib.GET
			}), d = async (e, t, n, c, d) => Object(o.a)(Object(a.a)(e, [i.a]), {
				endpoint: `${s.a.snoovatarUrl}/api/snoovatar`,
				method: r.ib.POST,
				headers: {
					"Content-Type": "application/json ",
					"X-CSRF-Token": d
				},
				data: {
					accessory_ids: t,
					styles: n,
					...c
				}
			}), l = {
				id: "achievement_head_accessory_012",
				section_id: "head_accessories",
				assets: [{
					accessory_id: "achievement_head_accessory_012",
					slot: 80,
					image_url: "https://i.redd.it/snoovatar/accessory_assets/r13ZdtEfXFM_achievement_head_accessory_012.svg"
				}],
				customizable_classes: [],
				capability_required: null,
				state: "ENABLED",
				tags: ["achievement"],
				available_for_closet: !0
			}, u = {
				id: "achievement_body_012",
				section_id: "top_body_tops",
				assets: [{
					accessory_id: "achievement_body_012",
					slot: 40,
					image_url: "https://i.redd.it/snoovatar/snoo_assets/XvgCbVDmabY_achievement_body_012.svg"
				}],
				customizable_classes: ["body"],
				capability_required: null,
				state: "ENABLED",
				tags: ["achievement"],
				available_for_closet: !0
			}, m = {
				id: "achievement_body_bottom_012",
				section_id: "bottom_body_bottoms",
				assets: [{
					accessory_id: "achievement_body_bottom_012",
					slot: 30,
					image_url: "https://i.redd.it/snoovatar/snoo_assets/_Fx-Iq6Aueg_achievement_body_bottom_012.svg"
				}],
				customizable_classes: ["body"],
				capability_required: null,
				state: "ENABLED",
				tags: ["achievement"],
				available_for_closet: !0
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(a.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(o.b)(s)(e => {
					const {
						featureEnabled: s,
						...o
					} = e, a = o;
					return s ? r.a.createElement(t, a) : void 0 !== n ? r.a.createElement(n, a) : null
				})
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function r(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} = e;
				return t && n && s && r ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: r
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/economics/sortBadges.ts": function(e, t, n) {
			"use strict";

			function s(e, t) {
				if (e.placement && !t.placement) return -1;
				if (t.placement && !e.placement) return 1;
				if (e.position && !t.position) return -1;
				if (t.position && !e.position) return 1;
				let n = 0;
				return e.placement && t.placement && (n = e.placement.localeCompare(t.placement)), 0 === n && e.position && t.position && (n = e.position - t.position), 0 === n && (n = e.title.localeCompare(t.title)), n
			}

			function r(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: n
					} of e) t.push(Object(s.e)(n));
				return t
			}
		},
		"./src/reddit/helpers/hasModFlairPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.flair
		},
		"./src/reddit/helpers/hasModFullPermissions/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e && !!e.all
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts");
			const r = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.H.NO_STRIPE_SUBSCRIPTION:
							case s.H.USER_DOESNT_EXIST:
							case s.H.USER_REQUIRED_ERROR:
							case s.H.VALIDATION_ERROR:
								return e;
							case s.H.NO_USER:
							case s.H.NO_TEXT:
							case s.H.NO_URL:
								return s.H.VALIDATION_ERROR;
							case s.H.CREDIT_CARD_FAILURE:
							case s.H.CREDIT_CARD_FAILURE_GENERIC:
								return s.H.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.H.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.H.VALIDATION_ERROR
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
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "a", (function() {
				return _
			})), n.d(t, "d", (function() {
				return h
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				o = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				a = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				i = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
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
				b = e => Object(s.k)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				_ = e => e.isActive ? l.a.mIsActive : void 0,
				h = e => {
					const t = Object(o.a)(Object(r.a)(e), a.a.actionIcon, a.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/communityAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "d", (function() {
				return b
			})), n.d(t, "h", (function() {
				return _
			})), n.d(t, "i", (function() {
				return h
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/reddit/helpers/correlationIdTracker.ts"),
				a = n("./src/reddit/helpers/trackers/gild.ts");
			const i = e => ({
					...r.defaults(e),
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				c = e => ({
					awardId: e.id,
					awardName: e.name,
					isModAward: e.awardType === s.f.Moderator,
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
				u = (e, t, n) => s => ({
					...i(s),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n
				}),
				m = (e, t, n, s) => r => ({
					...i(r),
					source: "create_award",
					action: "upload",
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: "image",
					actionInfo: s ? {
						reason: s
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
						uploadDuration: n,
						url: e,
						width: t.width
					} : null
				}),
				p = (e, t, n) => s => ({
					...i(s),
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
					goldPurchase: n ? c(n) : null
				}),
				b = (e, t, n) => s => ({
					...i(s),
					source: "create_award",
					action: e,
					correlationId: Object(o.c)(o.a.AwardCreationFlow),
					noun: t,
					goldPurchase: n ? c(n) : null
				}),
				f = (e, t, n) => s => ({
					...i(s),
					source: "awards",
					action: "click",
					noun: n,
					goldPurchase: c(e),
					profile: r.profileById(s, t),
					subreddit: r.subredditById(s, t)
				}),
				_ = (e, t) => f(e, t, "disable_in_community"),
				h = (e, t) => f(e, t, "enable_in_community")
		},
		"./src/reddit/helpers/trackers/gild.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "getAwardTypeFromAward", (function() {
				return d
			})), n.d(t, "clickGildEvent", (function() {
				return m
			})), n.d(t, "clickRpanGiveAward", (function() {
				return p
			})), n.d(t, "clickAddAward", (function() {
				return b
			})), n.d(t, "clickHideAward", (function() {
				return f
			})), n.d(t, "clickConfirmHideAward", (function() {
				return _
			})), n.d(t, "clickCancelHideAward", (function() {
				return h
			})), n.d(t, "clickAwardReportFlow", (function() {
				return v
			})), n.d(t, "clickCancelAwardReportFlow", (function() {
				return O
			})), n.d(t, "clickFlagAwardUsage", (function() {
				return x
			})), n.d(t, "clickCancelFlagAwardUsage", (function() {
				return S
			})), n.d(t, "clickConfirmFlagAwardUsage", (function() {
				return g
			})), n.d(t, "clickReportAward", (function() {
				return y
			})), n.d(t, "clickCancelReportAward", (function() {
				return C
			})), n.d(t, "clickConfirmReportAward", (function() {
				return j
			})), n.d(t, "viewGildModalEvent", (function() {
				return T
			})), n.d(t, "clickSelectAwardEvent", (function() {
				return I
			})), n.d(t, "triggerAnonymousEvent", (function() {
				return w
			})), n.d(t, "clickMessageInputEvent", (function() {
				return k
			})), n.d(t, "typeMessageInputEvent", (function() {
				return A
			})), n.d(t, "clickLearnMoreLinkEvent", (function() {
				return P
			})), n.d(t, "clickQuestionMarkEvent", (function() {
				return N
			})), n.d(t, "clickConfirmAwardEvent", (function() {
				return R
			})), n.d(t, "clickGetPremiumEvent", (function() {
				return D
			})), n.d(t, "clickAddCoinsButtonEvent", (function() {
				return L
			})), n.d(t, "clickNextButtonEvent", (function() {
				return F
			})), n.d(t, "clickCloseGildModalEvent", (function() {
				return M
			})), n.d(t, "viewKarmaSuccessEvent", (function() {
				return U
			})), n.d(t, "clickFilterEvent", (function() {
				return B
			})), n.d(t, "clickNextFiltersEvent", (function() {
				return G
			})), n.d(t, "clickPreviousFiltersEvent", (function() {
				return V
			}));
			var s = n("./src/reddit/models/Gold/Award.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				o = n("./src/telemetry/models/GoldPurchase.ts"),
				a = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				c = n("./src/reddit/selectors/gild.ts");
			const d = e => e.awardType === s.f.Global && e.awardSubType === s.d.Appreciation ? o.GoldPurchaseType.GidAppreciation : e.awardType === s.f.Global && e.awardSubType === s.d.Premium ? o.GoldPurchaseType.GidPremium : e.awardSubType === s.d.Group ? o.GoldPurchaseType.GidGroup : e.awardType === s.f.Community ? o.GoldPurchaseType.GidCommunity : e.awardType === s.f.Moderator ? o.GoldPurchaseType.GidMod : e.awardType === s.f.Global && e.awardSubType === s.d.Global ? o.GoldPurchaseType.GidGlobal : o.GoldPurchaseType.GidUnknown,
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
				f = (e, t) => n => ({
					...u(n, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "hide_award",
					goldPurchase: l(e)
				}),
				_ = (e, t) => n => ({
					...u(n, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "confirm_hide_award",
					goldPurchase: l(e)
				}),
				h = (e, t) => n => ({
					...u(n, t),
					source: Object(i.a)(t) ? "comment" : "post",
					action: "click",
					noun: "cancel_hide_award",
					goldPurchase: l(e)
				}),
				E = e => (t, n) => s => ({
					...u(s, n),
					source: Object(i.a)(n) ? "comment" : "post",
					action: "click",
					noun: e,
					goldPurchase: l(t)
				}),
				v = E("award_hovercard_report"),
				O = E("cancel_award_hovercard_report"),
				x = E("flag_award"),
				S = E("cancel_flag_award"),
				g = E("confirm_flag_award"),
				y = E("report_community_award"),
				C = E("cancel_report_community_award"),
				j = E("confirm_report_community_award"),
				T = (e, t, n) => s => ({
					...u(s, n),
					source: "give_gold",
					action: "view",
					noun: "page",
					goldPurchase: {
						defaultOption: e,
						defaultAnonymous: t
					}
				}),
				I = (e, t, n) => s => ({
					...u(s, t),
					source: "give_gold",
					action: "click",
					noun: "award",
					goldPurchase: l(e, n)
				}),
				w = (e, t) => n => ({
					...u(n, t),
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
				A = e => t => ({
					...u(t, e),
					source: "give_gold",
					action: "type",
					noun: "message_input"
				}),
				P = e => t => ({
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
				R = (e, t) => n => ({
					...u(n, e),
					source: "give_gold",
					action: "click",
					noun: "confirm",
					goldPurchase: {
						contentType: Object(i.a)(e) ? "comment" : "post",
						...l(t)
					}
				}),
				D = (e, t) => n => ({
					...u(n, e),
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
					awarderKarmaEarned: n,
					numberCoins: s,
					thingId: r
				}) => o => ({
					...u(o, r),
					source: "give_gold",
					action: "view",
					noun: "karma_success",
					goldPurchase: {
						contentType: Object(i.a)(r) ? "comment" : "post",
						awardeeKarmaEarned: t,
						awarderKarmaEarned: n,
						numberCoins: s,
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
				V = () => e => ({
					...u(e),
					source: "give_gold",
					action: "click",
					noun: "previous_filters"
				})
		},
		"./src/reddit/helpers/trackers/goldPayment.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return f
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "a", (function() {
				return O
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "h", (function() {
				return S
			})), n.d(t, "i", (function() {
				return g
			}));
			var s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/gold/giveAwards.ts"),
				a = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				i = n("./src/reddit/selectors/goldPurchaseModals.ts"),
				c = n("./src/reddit/selectors/telemetry.ts"),
				d = n("./src/telemetry/models/GoldPurchase.ts"),
				l = n("./src/telemetry/models/Payment.ts"),
				u = n("./src/reddit/helpers/trackers/gild.ts"),
				m = n("./src/reddit/helpers/correlationIdTracker.ts"),
				p = n("./src/reddit/helpers/isComment.ts"),
				b = n("./src/reddit/helpers/trackers/communityAwards.ts");
			const f = (e, t) => {
					const {
						thingId: n,
						packageId: l
					} = t, f = !!n, _ = o.b(e), h = _ ? Object(u.getAwardTypeFromAward)(_) : null, E = f ? h : i.o(e) ? d.GoldPurchaseType.Premium : d.GoldPurchaseType.Coins, v = n ? Object(p.a)(n) ? "comment" : "post" : void 0, O = l || i.t(e), x = [...Object(a.d)(e), ...Object(a.f)(e)].filter(e => e.mobileId === O)[0], S = t.offerContext || (_ && 0 === _.coinPrice ? r.a.StorefrontFreeAward : Object(r.d)(x, f)), g = x ? Math.round(1e4 * (x.baselinePennies - x.pennies) / x.baselinePennies) / 100 : 0, y = x ? Math.round(1e4 * (x.coins - x.baselineCoins) / x.coins) / 100 : 0, C = x ? x.baselinePennies !== x.pennies ? `${g}_percent_price` : x.baselineCoins !== x.coins ? `${y}_percent_bonus` : void 0 : void 0, j = E === d.GoldPurchaseType.Premium ? s.wb : x ? x.pennies : void 0;
					return {
						...c.defaults(e),
						comment: n ? c.comment(e, n) : null,
						correlationId: i.r(e) || Object(m.d)(m.a.GoldPayment, !1),
						post: n ? c.post(e, n) : null,
						screen: c.screen(e),
						subreddit: n ? c.subreddit(e) : null,
						goldPurchase: {
							..._ ? Object(b.a)(_) : null,
							type: E,
							gildedContent: f,
							contentType: v,
							numberCoins: x ? x.coins : void 0,
							offerContext: S,
							offerType: C
						},
						payment: {
							currency: "USD",
							amountInSmallestDenom: j
						},
						purchase: {
							priceMicros: j
						}
					}
				},
				_ = (e, t, n) => s => ({
					...f(s, {
						packageId: t,
						thingId: e,
						offerContext: n
					}),
					source: "gold_payment",
					action: "click",
					noun: "close"
				}),
				h = e => t => ({
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
				O = (e, t) => n => ({
					...f(n, {
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
				S = (e, t, n) => s => {
					const r = f(s, {
						packageId: t,
						thingId: e,
						offerContext: n
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
							source: e ? d.GiveGold : i.o(s) ? d.PremiumMarketing : d.CoinsMarketing
						}
					}
				},
				g = e => t => {
					var n;
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
							method: (null === (n = t.platform.currentPage) || void 0 === n ? void 0 : n.queryParams.thanks) ? l.PaymentMethod.Paypal : l.PaymentMethod.CreditCard
						}
					}
				}
		},
		"./src/reddit/helpers/trackers/lightbox.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "e", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/telemetry/index.ts"),
				o = n("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const c = e => ({
					profile: i.profile(e),
					screen: i.screen(e),
					subreddit: i.subreddit(e)
				}),
				d = (e, t, n) => s => ({
					source: Object(a.i)(s) || n ? "post_lightbox" : "post_detail",
					action: "click",
					noun: t,
					...c(s),
					post: i.post(s, e)
				}),
				l = (e, t, n, s) => r => {
					const a = n ? i.comment(r, n) : null,
						{
							sortToUse: c
						} = Object(o.a)(r, e);
					return {
						...d(e, t, s)(r),
						comment: a,
						listing: {
							sort: c
						}
					}
				},
				u = (e, t) => n => {
					const s = i.currentPost(n);
					return s ? d(s.id, e, t)(n) : {
						source: Object(a.i)(n) || t ? "post_lightbox" : "post_detail",
						action: "click",
						noun: e,
						...c(n)
					}
				},
				m = (e, t) => n => Object(r.a)({
					...d(e, t)(n),
					...i.defaults(n)
				}),
				p = e => t => ({
					source: "id_card",
					action: s.c.CLICK,
					noun: e,
					...c(t),
					post: i.currentPost(t),
					userSubreddit: i.userSubreddit(t)
				})
		},
		"./src/reddit/helpers/trackers/modTools.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
			})), n.d(t, "j", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "k", (function() {
				return b
			})), n.d(t, "h", (function() {
				return f
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "l", (function() {
				return h
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
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
				i = (e, t) => n => ({
					source: "post_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					...o(n)
				}),
				c = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					comment: Object(r.comment)(n, t),
					...o(n)
				}),
				d = (e, t) => n => ({
					source: "comment",
					action: s.c.UNDO,
					noun: e,
					post: Object(r.post)(n, t),
					comment: Object(r.comment)(n, t),
					...o(n)
				}),
				l = (e, t) => n => ({
					source: "comment_overflow_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					comment: Object(r.comment)(n, t),
					...o(n)
				}),
				u = (e, t) => n => ({
					source: "mod_distinguish_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					comment: Object(r.comment)(n, t),
					...o(n)
				}),
				m = (e, t) => n => ({
					source: "comment_mod_action_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					comment: Object(r.comment)(n, t),
					...o(n)
				}),
				p = (e, t) => n => ({
					source: "comment_report_menu",
					action: "click",
					noun: e,
					comment: Object(r.comment)(n, t),
					post: Object(r.post)(n, t),
					...o(n)
				}),
				b = (e, t) => n => ({
					source: "post_report_menu",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					...o(n)
				}),
				f = (e, t) => n => ({
					source: "post",
					action: "click",
					noun: e,
					post: Object(r.post)(n, t),
					subreddit: Object(r.subredditByPostOrCommentId)(n, t)
				}),
				_ = (e, t) => n => ({
					source: "comment",
					action: "click",
					noun: e,
					comment: Object(r.comment)(n, t),
					post: Object(r.post)(n, t),
					subreddit: Object(r.subredditByPostOrCommentId)(n, t)
				}),
				h = (e, t, n, s) => o => ({
					source: e ? "comment" : "post",
					action: "click",
					noun: t ? "unsnooze_reporter" : "snooze_reporter",
					post: Object(r.post)(o, n),
					subreddit: Object(r.subredditByPostOrCommentId)(o, n),
					actionInfo: {
						reason: s
					},
					...e && {
						comment: Object(r.comment)(o, n)
					}
				})
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return i
			})), n.d(t, "y", (function() {
				return c
			})), n.d(t, "m", (function() {
				return d
			})), n.d(t, "p", (function() {
				return l
			})), n.d(t, "q", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "o", (function() {
				return b
			})), n.d(t, "r", (function() {
				return f
			})), n.d(t, "k", (function() {
				return _
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "g", (function() {
				return S
			})), n.d(t, "l", (function() {
				return g
			})), n.d(t, "t", (function() {
				return y
			})), n.d(t, "j", (function() {
				return C
			})), n.d(t, "e", (function() {
				return j
			})), n.d(t, "x", (function() {
				return T
			})), n.d(t, "u", (function() {
				return I
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "s", (function() {
				return k
			})), n.d(t, "v", (function() {
				return A
			})), n.d(t, "w", (function() {
				return P
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...r.defaults(e),
					screen: r.screen(e),
					subreddit: r.subreddit(e),
					userSubreddit: r.userSubreddit(e)
				}),
				a = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.p)(e)
				}),
				i = () => e => ({
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
					scheduledPost: a(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...o(t),
					scheduledPost: a(e)
				}),
				_ = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "scheduled_posts",
					...o(e)
				}),
				h = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...o(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...o(e)
				}),
				v = () => e => ({
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
					actionInfo: r.actionInfo(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				x = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				S = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : x[e],
					...o(t)
				}),
				g = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...o(e)
				}),
				y = (e, t, n) => a => ({
					source: "post",
					action: "click",
					noun: Object(s.l)(e),
					...o(a),
					actionInfo: r.actionInfo(a, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
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
				T = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...o(e)
				}),
				I = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...o(e),
					scheduledPost: a(t)
				}),
				w = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...o(e)
				}),
				k = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "delete",
					...o(e),
					scheduledPost: a(t)
				}),
				A = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...o(e)
				}),
				P = () => (e, t) => {
					const n = o(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: a(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return l
			})), n.d(t, "l", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "j", (function() {
				return p
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "b", (function() {
				return _
			})), n.d(t, "g", (function() {
				return h
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "f", (function() {
				return O
			})), n.d(t, "a", (function() {
				return x
			}));
			var s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				r = n("./src/reddit/selectors/avatarMarketing.ts"),
				o = n("./src/reddit/selectors/telemetry.ts"),
				a = n("./src/reddit/selectors/user.ts");
			const i = {
					goldPurchase: {
						offerContext: s.a.AvatarNewGear
					}
				},
				c = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...o.defaults(t)
					};
					return Object(r.a)(t) && Object.assign(n, i), n
				},
				d = (e, t) => n => {
					const {
						id: s
					} = Object(a.ob)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...o.defaults(n),
						snoovatar: {
							userGenerated: s
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
				}),
				b = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...o.defaults(n),
					snoovatar: o.snoovatarActiveForBuilderEvent(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				f = b("view"),
				_ = b("click"),
				h = b("dismiss"),
				E = (e, t, n) => () => s => ({
					source: e,
					action: t,
					noun: n,
					...o.defaults(s),
					snoovatar: o.snoovatarActiveForBuilderEvent(s)
				}),
				v = E("anniversary_achievement", "view", "anniversary_achievement"),
				O = E("anniversary_achievement", "click", "close"),
				x = E("anniversary_achievement", "click", "equip")
		},
		"./src/reddit/helpers/trackers/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/helpers/flair.ts"),
				r = n("./src/reddit/selectors/telemetry.ts");
			const o = () => e => ({
					source: "id_card",
					action: "click",
					noun: "user_flair_picker",
					...r.defaults(e)
				}),
				a = e => t => {
					const {
						userFlair: n,
						achievementFlair: o
					} = e;
					return {
						source: "user_flair_picker",
						action: "click",
						noun: "user_flair",
						...r.defaults(t),
						userFlair: {
							id: null == n ? void 0 : n.id,
							title: n && Object(s.g)(n),
							isActive: n && !!n,
							achievementFlairId: null == o ? void 0 : o.type,
							achievementFlairTitle: null == o ? void 0 : o.name,
							isLocked: null == o ? void 0 : o.isLocked
						}
					}
				},
				i = () => e => ({
					source: "user_flair_picker",
					action: "click",
					noun: "edit_user_flair",
					...r.defaults(e)
				})
		},
		"./src/reddit/hooks/useExperimentVariant.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts");

			function o(e, t = r.a) {
				return Object(s.e)(n => Object(r.c)(n, {
					experimentName: e,
					experimentEligibilitySelector: t
				}))
			}
		},
		"./src/reddit/hooks/useInfoTextTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				r = n("./node_modules/react/index.js"),
				o = n("./src/lib/hooks/useTooltip.ts");
			const a = Object(s.freeze)({
				name: "offset",
				options: {
					offset: [0, 6]
				}
			});

			function i(e) {
				const t = Object(r.useMemo)(() => {
					const t = Object(o.a)(e);
					return Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, a))
				}, [e]);
				return Object(o.b)(t)
			}
		},
		"./src/reddit/hooks/useIsOverlay.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js"),
				r = n("./src/reddit/contexts/InsideOverlay.tsx");

			function o() {
				return Object(s.useContext)(r.a)
			}
		},
		"./src/reddit/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function r(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactDownvote: "_2GCoZTwJW7199HSwNZwlHk",
				compactDownvoteWrapper: "jR747Vd1NbfaLusf5bHre",
				downvote: "ZyxIIl4FP5gHGrJDzNpUC",
				downvoteWrapper: "_1iKd82bq_nqObFvSH1iC_Q"
			}
		},
		"./src/reddit/icons/fonts/Downvote/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Downvote/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
				...n
			}) => e ? r.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.compactDownvoteWrapper, n.className)
			}), r.a.createElement(l, {
				className: c.a.compactDownvote,
				isFilled: t
			})) : r.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.downvoteWrapper, n.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(o.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				i = n.n(a);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				title: e.title,
				className: `${Object(o.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Upvote/index.m.less": function(e, t, n) {
			e.exports = {
				compactUpvote: "_39UOLMgvssWenwbRxz_iEn",
				compactUpvoteWrapper: "_3wVayy5JvIMI67DheMYra2",
				upvote: "_2Jxk822qXs4DaXwsN7yyHA",
				upvoteWrapper: "_2q7IQ0BUOWeEZoeAxN555e"
			}
		},
		"./src/reddit/icons/fonts/Upvote/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Upvote/index.m.less"),
				c = n.n(i);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
				...n
			}) => e ? r.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.compactUpvoteWrapper, n.className)
			}), r.a.createElement(l, {
				className: c.a.compactUpvote,
				isFilled: t
			})) : r.a.createElement("span", d({}, n, {
				className: Object(o.a)(c.a.upvoteWrapper, n.className)
			}), r.a.createElement(l, {
				isFilled: t
			}))
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
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
		"./src/reddit/icons/svgs/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
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
		"./src/reddit/icons/svgs/RadioOff/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_11Rht_b1e-kmk12gkz7Lug"
			}
		},
		"./src/reddit/icons/svgs/RadioOff/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/icons/svgs/RadioOff/index.m.less"),
				i = n.n(a);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
		"./src/reddit/icons/svgs/RadioOn/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
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
		"./src/reddit/icons/svgs/Search/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				r = n.n(s);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
			}))
		},
		"./src/reddit/layout/row/Inline/index.m.less": function(e, t, n) {
			e.exports = {
				inlineRow: "XZK-LTFT5CgGo9MvPQQsy"
			}
		},
		"./src/reddit/layout/row/Inline/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				r = n("./src/reddit/layout/row/Inline/index.m.less"),
				o = n.n(r);
			t.a = s.a.div("inlineRow", o.a)
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "d", (function() {
				return i
			}));
			var s, r, o = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(r || (r = {}));
			const a = {
					[s.Loyalty]: o.a.First,
					[s.Achievement]: o.a.Second,
					[s.Cosmetic]: void 0
				},
				i = e => e === o.a.First ? s.Loyalty : e === o.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/Gold/ProductOffer.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "d", (function() {
				return c
			}));
			var s, r = n("./node_modules/fbt/lib/FbtPublic.js");
			! function(e) {
				e.CoinConversion = "user-coins-in-subreddit", e.Powerups = "powerups", e.Premium = "premium"
			}(s || (s = {}));
			const o = {
				[s.Powerups]: () => r.fbt._("Reddit - Buy Powerups", null, {
					hk: "4sEI31"
				}),
				[s.Premium]: () => r.fbt._("Reddit - Buy Premium", null, {
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
				const n = e && e.dealInfo && e.dealInfo.type,
					s = "low_coin_upsell" === n,
					r = "new_purchaser" === n,
					o = "repeat_purchaser" === n;
				return t ? i.GildFlow : s ? i.LowCoinBalance : r ? i.NewUserTargetedOffer : o ? i.RepeatUserTargetedOffer : void 0
			}
		},
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "r", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "n", (function() {
				return u
			})), n.d(t, "o", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return f
			})), n.d(t, "q", (function() {
				return h
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "j", (function() {
				return v
			})), n.d(t, "h", (function() {
				return O
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "d", (function() {
				return S
			})), n.d(t, "m", (function() {
				return g
			})), n.d(t, "b", (function() {
				return y
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "p", (function() {
				return j
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				r = n("./src/reddit/models/GqlTopLevelField.ts"),
				o = n("./src/reddit/models/User/index.ts");
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
			var p, b, f, _;
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
			}(_ || (_ = {}));
			const h = e => b[_[e]],
				E = e => _[b[e]],
				v = e => f[b[e]],
				O = e => b[f[e]],
				x = e => _[f[e]];
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
				y = "custom",
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
							return Object(s.a)(e)
					}
				},
				j = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, r = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const o = {
				status: s.NotFetched
			};
			t.b = (e = o, t) => {
				switch (t.type) {
					case r.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
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
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
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
							error: t.payload.error, status: s.Failure
						};
					case r.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case r.d:
						return {
							status: s.Pending
						};
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/economics/subredditPremium/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s, r = n("./src/lib/constants/specialMembership.ts"),
				o = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				a = n("./src/reddit/helpers/economics/sortBadges.ts"),
				i = n("./src/reddit/models/Badge/index.ts"),
				c = n("./src/reddit/models/Badge/managementPage.ts");
			! function(e) {
				e[e.NotFetched = 0] = "NotFetched", e[e.Fetched = 1] = "Fetched"
			}(s || (s = {}));
			const d = {};

			function l(e) {
				return "userId" in e
			}

			function u(e, t, n, s) {
				e.forEach(e => {
					e.collections && Object.keys(e.collections).forEach(r => {
						let o;
						(o = e.placement ? e.placement === i.a.First ? s[c.a.Loyalty][r] : s[c.a.Achievement][r] : l(e) ? s[c.a.Cosmetic][c.c.MyBadges][r] : s[c.a.Cosmetic][c.c.Gallery][r]) && (l(e) ? n.has(e.id) && o.unlocked.push(e) : t.has(e.id) || o.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(a.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === r.a).map(m).sort((e, n) => {
					const s = t[e.id],
						r = t[n.id];
					return Object(a.b)(s, r)
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
				Object.keys(e.collections).forEach(n => {
					const s = e.collections[n],
						r = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...r,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...r,
						locked: [],
						unlocked: []
					}
				});
				const n = new Set;
				e.userOwnedBadges.forEach(t => {
					const s = e.badges[t];
					s && n.add(s.type)
				});
				const s = new Set(e.userOwnedBadges);
				return u(Object.keys(e.badges).map(t => e.badges[t]), n, s, t), u(Object.keys(e.products).map(t => e.products[t]), n, s, t), {
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
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === s.Fetched ? {
							...e,
							[n]: {
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
							subredditId: n
						} = t.payload, r = e[n];
						return r && r.status === s.Fetched ? {
							...e,
							[n]: {
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
						const n = t.payload;
						return {
							...e,
							[n.subredditId]: {
								raw: n,
								data: b(n),
								status: s.Fetched
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, n) {
			"use strict";
			var s, r, o = n("./node_modules/redux/es/redux.js"),
				a = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(s || (s = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(r || (r = {}));
			const i = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [s.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var c = (e = i, t) => {
				switch (t.type) {
					case a.a:
						return {
							...t.payload
						};
					default:
						return e
				}
			};
			const d = {
					marketingEvent: {
						active: !1,
						assetUrls: null
					},
					quickCreateV1: {
						active: !1,
						text: "",
						minDaysOnReddit: 0,
						shouldHaveAvatar: !1,
						maxEventViews: 0,
						minDaysSinceLastEventInteraction: 0,
						webAssetUrls: []
					}
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
							const n = e.split(":");
							if (!n.length && n.length < 3) return null;
							try {
								t[n[1]] = JSON.parse(n[2])
							} catch {
								t[n[1]] = n[2]
							}
						}
					}), t
				};
			var p = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				b = n("./src/reddit/actions/modal.ts"),
				f = n("./src/reddit/constants/modals.ts");
			var _ = (e = null, t) => {
				var n;
				switch (t.type) {
					case p.o:
						const {
							avatarMarketingEvents: s
						} = t.payload;
						return s ? function(e) {
							if (!e) return d;
							const t = d;
							return e.forEach(e => {
								const {
									startsAt: n,
									endsAt: s,
									webAssetUrls: r,
									tags: o
								} = e, a = n && new Date(n) <= new Date, i = !!s && new Date(s) < new Date, c = !!a && !i;
								if (o && o.includes(l)) {
									const {
										text: n
									} = e, s = r || null, a = m(o);
									t && (t.quickCreateV1 = {
										...a,
										text: n,
										active: c && !!s,
										webAssetUrls: s
									})
								}
								if (o && o.includes(u)) {
									const e = r || null;
									t && (t.marketingEvent = {
										active: c && !!e,
										assetUrls: e
									})
								}
							}), t
						}(s) : d;
					case b.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === f.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			t.a = Object(o.c)({
				marketing: _,
				avatarUser: c
			})
		},
		"./src/reddit/reducers/features/userFlair/index.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/lodash/omit.js"),
				r = n.n(s),
				o = n("./src/reddit/actions/grantUserFlair/constants.ts"),
				a = n("./src/reddit/actions/modQueue/constants.ts"),
				i = n("./src/reddit/actions/pages/constants.ts"),
				c = n("./src/reddit/actions/pages/postCreation.ts"),
				d = n("./src/reddit/actions/pages/postDraft.ts"),
				l = n("./src/reddit/actions/pages/subreddit.ts"),
				u = n("./src/reddit/actions/userFlair/constants.ts");
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
							response: n
						} = t.payload, {
							userFlair: s
						} = n, r = {
							...e
						};
						return Object.keys(s).forEach(e => {
							r[e] || (r[e] = s[e])
						}), r
					}
					case u.r: {
						const {
							subredditId: n,
							applied: s,
							displaySettings: r
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: s,
								displaySettings: r
							}
						}
					}
					case o.h: {
						const {
							subredditId: n,
							applied: s
						} = t.payload;
						return {
							...e,
							[n]: {
								...e[n],
								applied: s
							}
						}
					}
					case u.j: {
						const {
							subredditId: n,
							isEnabled: s
						} = t.payload, r = {
							...e[n].displaySettings,
							isEnabled: s
						};
						return {
							...e,
							[n]: {
								...e[n],
								displaySettings: r
							}
						}
					}
					case u.d: {
						const {
							subredditId: n,
							canAssignOwn: s
						} = t.payload, r = {
							...e[n].permissions,
							canAssignOwn: s
						};
						return {
							...e,
							[n]: {
								...e[n],
								permissions: r
							}
						}
					}
					case u.q: {
						const n = t.payload,
							s = e[n.subredditId],
							r = e[n.subredditId].templates,
							o = e[n.subredditId].templateIds,
							a = {
								...r,
								[n.template.id]: n.template
							},
							i = [...o];
						return i.includes(n.template.id) || i.push(n.template.id), {
							...e,
							[n.subredditId]: {
								...s,
								templates: a,
								templateIds: i
							}
						}
					}
					case u.g: {
						const n = t.payload,
							s = e[n.subredditId],
							o = e[n.subredditId].templates,
							a = e[n.subredditId].templateIds,
							i = r()(o, n.templateId),
							c = a.filter(e => e !== n.templateId);
						return {
							...e,
							[n.subredditId]: {
								...s,
								templates: {
									...i
								},
								templateIds: c
							}
						}
					}
					case u.m:
					case u.l: {
						const n = t.payload,
							s = e[n.subredditId];
						return {
							...e,
							[n.subredditId]: {
								...s,
								templateIds: n.templateIds
							}
						}
					}
					default:
						return e
				}
			}
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			}));
			const s = (e, {
					post: t
				}) => {
					const n = t.belongsTo.id;
					if (!n) return null;
					const s = e.authorFlair.models[n];
					if (!s) return null;
					const r = t.author;
					return r && s[r] || null
				},
				r = (e, {
					subredditId: t
				}) => {
					const n = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!n) return null;
					if (!t) return null;
					const s = e.authorFlair.models[t];
					return s ? s[n] : null
				},
				o = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return a
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(s.a)({
				features: {
					avatar: r.a
				}
			});
			const o = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				a = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				a = n("./src/reddit/selectors/experiments/econ/index.ts");
			Object(r.a)({
				features: {
					avatar: o.a
				}
			});
			const i = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				c = Object(s.a)(a.c, e => {
					var t, n, s;
					const r = null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.marketingEvent;
					return (null == r ? void 0 : r.active) ? (null == r ? void 0 : r.assetUrls) && (null == r ? void 0 : r.assetUrls[0]) : null
				}, (e, t) => e ? t : null)
		},
		"./src/reddit/selectors/experiments/joinOptimizations.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/experiments/index.ts");
			const i = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.pb,
					experimentEligibilitySelector: a.e
				}), e => e === r.V.Enabled),
				c = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.qb,
					experimentEligibilitySelector: a.e
				}), e => e === r.W.Enabled),
				d = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.rb,
					experimentEligibilitySelector: a.e
				}), e => e === r.X.Enabled),
				l = Object(s.a)(e => Object(o.c)(e, {
					experimentName: r.sb,
					experimentEligibilitySelector: a.e
				}), e => e === r.Y.Enabled)
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "d", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				o = n("./src/reddit/selectors/experiments/index.ts"),
				a = n("./src/reddit/selectors/userPrefs.ts");
			const i = 1e4,
				c = e => {
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.n
					});
					return t === s.t.VoteCountOnly || t === s.t.CommentCountOnly || t === s.t.VoteAndCommentCount
				},
				d = e => {
					if (Object(a.c)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.n
					});
					return t === s.t.VoteCountOnly || t === s.t.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.c)(e)) return !1;
					const t = Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.n
					});
					return t === s.t.CommentCountOnly || t === s.t.VoteAndCommentCount
				},
				u = (e, {
					post: t
				}) => m(e, {
					postId: t.id
				}),
				m = (e, {
					postId: t
				}) => {
					const n = e.posts.models[t];
					if (Object(a.c)(e) || !n || n.isSponsored || n.isScoreHidden || n.score >= i) return !1;
					const r = Object(o.d)(e, {
							experimentName: s.n
						}),
						c = null == r ? void 0 : r.variant;
					return c === s.t.VoteCountOnly || c === s.t.VoteAndCommentCount
				},
				p = (e, {
					postId: t
				}) => {
					const n = e.posts.models[t];
					if (Object(a.c)(e) || !n || n.isSponsored || n.numComments >= i) return !1;
					const r = Object(o.d)(e, {
							experimentName: s.n
						}),
						c = null == r ? void 0 : r.variant;
					return c === s.t.CommentCountOnly || c === s.t.VoteAndCommentCount
				},
				b = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: r.a,
						experimentName: s.ub
					}) === s.Hb.Enabled
				}
		},
		"./src/reddit/selectors/gild.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return s
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return o
			})), n.d(t, "g", (function() {
				return a
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			const s = e => e.gild.gildModalThingId,
				r = e => e.gild.correlationId || void 0,
				o = e => e.gild.isAnonymous,
				a = e => e.gild.isIframed,
				i = e => e.gild.message,
				c = e => e.gild.api.pending,
				d = e => e.gild.api.error
		},
		"./src/reddit/selectors/gold/awardIcon.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "d", (function() {
				return _
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/Gold/Award.ts"),
				o = n("./src/reddit/selectors/commentSelector.ts"),
				a = n("./src/reddit/selectors/gold/giveAwards.ts"),
				i = n("./src/reddit/selectors/posts.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/reddit/selectors/userPrefs.ts");
			const l = [32, 48, 64, 128],
				u = (e, t, n) => {
					const s = t ? e[`staticIcon${n}`] : e[`icon${n}`];
					return (null == s ? void 0 : s.url) ? s.url : t ? e.staticIcon.url : e.icon.url
				},
				m = ({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: s
				}) => e.awardSubType === r.d.Group ? (({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: s
				}) => {
					let r = e;
					if ((null == s ? void 0 : s.awardCountsById) && s.awardCountsById[e.id] && e.tiers) {
						const t = s.awardCountsById[e.id];
						r = e.tiers.reduce((e, n) => t >= n.awardingsRequired ? n : e)
					}
					return u(r, n, t)
				})({
					award: e,
					size: t,
					prefersReducedMotion: n,
					postOrComment: s
				}) : u(e, n, t),
				p = Object(s.a)((e, {
					awards: t,
					minSize: n,
					postOrCommentId: s
				}) => {
					const r = Object(d.c)(e),
						a = l.find(e => e >= n),
						c = s ? Object(i.H)(e, {
							postId: s
						}) || Object(o.b)(e, {
							commentId: s
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
					minSize: n,
					postOrCommentId: s
				}) => t ? p(e, {
					awards: [t],
					minSize: n,
					postOrCommentId: s
				})[t.id] : void 0,
				f = (e, {
					minSize: t,
					userName: n
				}) => {
					const s = Object(c.ob)(e, {
						userName: n
					});
					if (s && s.awardedLastMonth && s.awardedLastMonth.topAward) return b(e, {
						award: s.awardedLastMonth.topAward,
						minSize: t
					})
				},
				_ = e => {
					const t = Object(a.b)(e),
						n = Object(a.a)(e);
					return b(e, {
						award: t,
						postOrCommentId: n || void 0,
						minSize: 512
					})
				}
		},
		"./src/reddit/selectors/gold/giveAwards.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return r
			}));
			const s = e => e.gild.selectedAward,
				r = e => e.gild.gildedThing
		},
		"./src/reddit/selectors/goldPurchaseModals.ts": function(e, t, n) {
			"use strict";
			n.d(t, "q", (function() {
				return a
			})), n.d(t, "s", (function() {
				return i
			})), n.d(t, "r", (function() {
				return c
			})), n.d(t, "u", (function() {
				return d
			})), n.d(t, "t", (function() {
				return l
			})), n.d(t, "b", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "a", (function() {
				return p
			})), n.d(t, "n", (function() {
				return b
			})), n.d(t, "o", (function() {
				return f
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "h", (function() {
				return h
			})), n.d(t, "l", (function() {
				return E
			})), n.d(t, "w", (function() {
				return v
			})), n.d(t, "x", (function() {
				return O
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "y", (function() {
				return S
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "i", (function() {
				return C
			})), n.d(t, "k", (function() {
				return j
			})), n.d(t, "j", (function() {
				return T
			})), n.d(t, "m", (function() {
				return I
			})), n.d(t, "e", (function() {
				return w
			})), n.d(t, "d", (function() {
				return k
			}));
			var s = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				r = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/goldPurchase/index.ts");
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
					const t = Object(s.j)(e),
						n = (e => e.features.goldPurchase.premiumPurchaseModal.packageId)(e);
					return t.length && n && t.find(e => e.mobileId === n) || null
				},
				b = e => e.features.goldPurchase.premiumPurchaseModal.activePage,
				f = e => e.features.goldPurchase.premiumPurchaseModal.showModal,
				_ = e => e.features.goldPurchase.payment.paymentMethod,
				h = e => e.features.goldPurchase.payment.cardName,
				E = e => e.features.goldPurchase.payment.postalCode,
				v = e => e.features.goldPurchase.payment.savedCardsPending,
				O = e => e.features.goldPurchase.payment.savedCards,
				x = e => e.features.goldPurchase.payment.rememberCard,
				S = e => e.features.goldPurchase.payment.useSavedCard,
				g = e => e.features.goldPurchase.payment.cardValidation.cardCvc,
				y = e => e.features.goldPurchase.payment.cardValidation.cardExpiry,
				C = e => e.features.goldPurchase.payment.cardValidation.cardNumber,
				j = e => e.features.goldPurchase.payment.cardValidation.nameOnCard,
				T = e => e.features.goldPurchase.payment.stripeToken.errorMessage,
				I = e => e.features.goldPurchase.payment.stripeToken.pending,
				w = e => e.features.goldPurchase.payment.paypal.passthrough,
				k = e => e.features.goldPurchase.payment.paypal.errorMessage
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/posts.ts");
			const i = e => Object(o.c)(e, {
					experimentName: r.Gd,
					experimentEligibilitySelector: o.a
				}),
				c = (e, t) => t === r.Qd.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored),
				d = Object(s.a)(a.H, i, (e, t) => c(e, t)),
				l = Object(s.a)((e, t) => t, i, (e, t) => c(e, t))
		},
		"./src/reddit/selectors/userFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return d
			})), n.d(t, "a", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			})), n.d(t, "b", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			}));
			var s = n("./src/lib/objectSelector/index.ts"),
				r = n("./src/reddit/models/Flair/index.ts"),
				o = n("./src/reddit/selectors/gold/powerups/index.ts"),
				a = n("./src/reddit/selectors/moderatorPermissions.ts"),
				i = n("./src/lib/initializeClient/installReducer.ts"),
				c = n("./src/reddit/reducers/features/userFlair/index.ts");
			Object(i.a)({
				features: {
					userFlair: c.a
				}
			});
			const d = (e, {
					subredditId: t
				}) => e.features.userFlair[t],
				l = (e, {
					subredditId: t
				}) => !e.features.userFlair[t] || e.features.userFlair[t].displaySettings.isEnabled,
				u = (e, {
					subredditId: t
				}) => e.features.userFlair[t] ? e.features.userFlair[t].displaySettings.position : r.b.Right,
				m = Object(s.a)((e, {
					subredditId: t
				}) => {
					const n = d(e, {
						subredditId: t
					});
					if (n && n.displaySettings && n.permissions) return {
						type: r.d.UserFlair,
						displaySettings: n.displaySettings,
						permissions: n.permissions
					}
				}),
				p = (e, {
					subredditId: t
				}) => {
					const n = l(e, {
							subredditId: t
						}),
						s = m(e, {
							subredditId: t
						}),
						r = d(e, {
							subredditId: t
						});
					if (!n || !s || !r) return !1;
					if (r.applied) return !0;
					const o = Object(a.g)(e, {
							subredditId: t
						}),
						{
							canUserChange: i
						} = s.permissions;
					return !!r.templateIds.find(e => {
						return !r.templates[e].modOnly || o
					}) && i
				},
				b = (e, {
					subredditId: t
				}) => {
					if (!t) return !1;
					const n = p(e, {
							subredditId: t
						}),
						s = Object(o.g)(e, {
							subredditId: t
						});
					return n || s
				}
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return r
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "c", (function() {
				return a
			}));
			var s = n("./src/lib/constants/index.ts");
			const r = e => !o(e) && !!e.user.prefs.subscriptionsPinned,
				o = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Kb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				r = n("./src/lib/fastdom/index.ts"),
				o = n("./src/reddit/actions/jsApi.ts");
			const a = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				i = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
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
						e.detail && (t = e.detail.name, console.warn(a, `${s.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(a, `${s.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(o.b(t || "")), this.fireEventsQueue()
					})
				}
				publish(e, t, n) {
					const s = {
						name: e,
						props: t,
						element: n
					};
					this.queue.push(s), this.queue.length > l && this.queue.shift(), this.active && this.fireEvent(s)
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-CompactPost.e6e23941cd6c237fa6a1.js.map