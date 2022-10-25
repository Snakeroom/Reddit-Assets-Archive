// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.442898d82d4d7749ea13.js
// Retrieved at 10/25/2022, 6:00:05 PM by Reddit Dataminer v1.0.0
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
					var o, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						h = !r && !l && /macintosh/i.test(t),
						O = !i && !u && !m && !p && /linux/i.test(t),
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
						version: x
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : u ? o = {
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
					} : m ? o = {
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
					} : i ? o = {
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
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && v && (o.version = v)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : E ? (o.xbox = e, o.osname = "Xbox") : f ? (o.windows = e, o.osname = "Windows") : O && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var C = "";
					o.windows ? C = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? C = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? C = (C = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? C = (C = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? C = s(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? C = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? C = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? C = s(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (C = s(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (o.osversion = C);
					var j = !o.windows && C.split(".")[0];
					return _ || c || "ipad" == r || i && (3 == j || j >= 4 && !g) || o.silk ? o.tablet = e : (g || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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

				function i(e, n, o) {
					var i = s;
					"string" == typeof n && (o = n, n = void 0), void 0 === n && (n = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([a, e[c]]) < 0
						} return n
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var n = e[t];
						if ("string" == typeof n && n in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = r, s.check = function(e, t, s) {
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
				i = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? n : r)(e, o(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_arrayReduce.js"),
				o = s("./node_modules/lodash/_baseEach.js"),
				r = s("./node_modules/lodash/_baseIteratee.js"),
				i = s("./node_modules/lodash/_baseReduce.js"),
				a = s("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, s) {
				var c = a(e) ? n : i,
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
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, s) => ({
				...i.o(e),
				source: "post",
				action: "click",
				noun: "ad",
				adClick: {
					location: t
				},
				actionInfo: i.d(e),
				adblock: i.e(e),
				app: i.f(e),
				feed: i.r(e),
				geo: i.t(e),
				platform: i.I(e),
				referrer: i.Y(e),
				request: i.Z(e),
				screen: i.bb(e),
				session: i.fb(e),
				user: i.rb(e),
				media: s ? i.C(e, s) : null,
				post: s ? i.K(e, s) : null
			});
			var c = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = s("./src/telemetry/index.ts");
			const l = new Set;

			function u(e) {
				function t(t) {
					const s = Object(r.f)().getState(),
						{
							post: n
						} = {
							...t
						};
					return n && n.isSponsored ? o.a.createElement("div", {
						onClickCapture: function(e, n) {
							var o, r;
							if (l.has(e.timeStamp)) return;
							l.add(e.timeStamp);
							const i = function(e) {
								if (e.dataset.adclicklocation) return e.dataset.adclicklocation;
								const t = e.closest(".PostContainer, [data-adclicklocation]");
								return t ? t.dataset.adclicklocation : c.a.UNKNOWN
							}(e.target);
							i && (! function(e, t) {
								return Object.values(t).some(t => t === e)
							}(i, c.b) ? Object(d.a)(a(n)(s, i, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(d.a)(a(n)(s, c.a.UNKNOWN, null === (o = t.post) || void 0 === o ? void 0 : o.postId)))
						}
					}, o.a.createElement(e, t)) : o.a.createElement(e, t)
				}
				const s = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${s})`, t
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
				return o => {
					const r = m(o.target, o.currentTarget),
						a = p(o.target, o.currentTarget);
					r && s && t && (u(o.target, o.currentTarget, l.anchors) ? s(t(e, r, a)) : s(s => {
						const n = t(e, r, a)(s);
						let o;
						if (n && n.actionInfo) {
							const {
								pageType: e,
								...t
							} = n.actionInfo;
							o = t
						}
						return {
							...n,
							actionInfo: Object(i.S)(s, o)
						}
					})), u(o.target, o.currentTarget, l.anchorsAndButtons) && n(o)
				}
			});

			function d(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: r,
						clickTrackingId: i,
						...d
					} = t, l = Object(n.useCallback)(c(i, r, s), [i, r, s]);
					return o.a.createElement(e, a({}, d, {
						afterClickTracking: l
					}))
				};
				return t.displayName = `WithClickTracking(${e.displayName||e.name})`, Object(r.c)(t)
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
				o = s("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = s.n(o);
			t.a = function(e) {
				var t;
				const {
					source: s,
					isSponsored: o,
					domainOverride: i,
					callToAction: a
				} = e;
				let c = "";
				if (o) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					c = i || Object(n.D)(e)
				} else c = Object(n.D)(e);
				const d = r.a.parse(c),
					l = d.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o(e) {
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
				o = s("./node_modules/react/index.js"),
				r = s("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(n.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(n.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, s] = Object(o.useState)(null), [i, c] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), b = Object(o.useCallback)(() => m(!1), []), f = Object(o.useCallback)(() => m(!u), [u]), h = Object(o.useMemo)(() => {
					const t = a(e);
					return d ? Object(n.updateIn)(t, ["modifiers"], e => Object(n.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: O,
					styles: x,
					update: v
				} = Object(r.a)(t, i, h);
				return Object(o.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: x.arrow,
						...O.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: x.popper,
						...O.popper
					},
					show: p,
					target: {
						element: t,
						ref: s
					},
					toggle: f,
					visible: u,
					update: v
				}), [l, O, c, b, p, x, t, s, f, u, v])
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/lib/domUtils/index.ts"),
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./src/reddit/components/CommentSort/index.tsx"),
				i = s("./src/reddit/constants/elementIds.ts");
			const a = () => {
					o.a.write(() => {
						const e = document.getElementById(i.e);
						e ? Object(n.c)(e, 0) : Object(n.c)(document, 0)
					})
				},
				c = e => {
					o.a.read(() => {
						const t = e ? document.getElementById(i.e) : window,
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
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts");
			const r = [o.yc, o.ub, o.E, o.U, o.pb, o.Xb],
				i = {
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
				a = {
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

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.yc]: "",
						[o.ub]: "",
						[o.E]: "",
						[o.U]: "",
						[o.pb]: "",
						[o.Xb]: ""
					};
				let u = d - c;
				if (u <= 0) return n.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const n of r) {
					const e = Math.floor(u / n);
					e && (l[n] = (t ? a : i)[n](e).toString()), u -= e * n
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || s ? m : n.fbt._("{amount of time left} left", [n.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(n.a)(o.c),
				i = Object(n.a)(o.b),
				a = Object(n.a)(o.a)
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return he
			})), s.d(t, "r", (function() {
				return ve
			})), s.d(t, "p", (function() {
				return _e
			})), s.d(t, "t", (function() {
				return Ce
			})), s.d(t, "w", (function() {
				return je
			})), s.d(t, "q", (function() {
				return Se
			})), s.d(t, "v", (function() {
				return we
			})), s.d(t, "o", (function() {
				return Ne
			})), s.d(t, "m", (function() {
				return Ie
			})), s.d(t, "b", (function() {
				return Pe
			})), s.d(t, "c", (function() {
				return Le
			})), s.d(t, "s", (function() {
				return De
			})), s.d(t, "g", (function() {
				return Fe
			})), s.d(t, "h", (function() {
				return Be
			})), s.d(t, "k", (function() {
				return Ue
			})), s.d(t, "e", (function() {
				return We
			})), s.d(t, "d", (function() {
				return Ge
			})), s.d(t, "a", (function() {
				return ze
			})), s.d(t, "j", (function() {
				return Ye
			})), s.d(t, "i", (function() {
				return Xe
			})), s.d(t, "l", (function() {
				return $e
			})), s.d(t, "u", (function() {
				return et
			})), s.d(t, "n", (function() {
				return tt
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeDraftKey/index.ts"),
				i = s("./src/lib/scroll/index.ts"),
				a = s("./src/reddit/actions/changeUsername.ts"),
				c = s("./src/reddit/actions/login.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				l = s("./src/reddit/actions/onboarding/index.ts"),
				u = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postCreation/editorContent.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = s("./src/reddit/actions/shortcuts/utils.ts"),
				f = s("./src/reddit/actions/toaster.ts"),
				h = s("./src/reddit/constants/adEvents.ts"),
				O = s("./src/reddit/constants/localStorage.ts"),
				x = s("./src/redditGQL/operations/CommentToxicity.json"),
				v = s("./src/lib/constants/index.ts"),
				_ = s("./src/lib/makeApiRequest/index.ts"),
				g = s("./src/lib/makeGqlRequest/index.ts"),
				E = s("./src/lib/omitHeaders/index.ts"),
				C = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				j = s("./src/reddit/constants/headers.ts"),
				S = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				k = s("./src/reddit/helpers/genericServerError/index.ts"),
				y = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				w = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				N = s("./src/reddit/models/PostCreationForm/index.ts"),
				T = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				I = s("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				R = s("./src/reddit/helpers/graphql/helpers.ts"),
				P = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				A = s("./src/redditGQL/operations/CreateComment.json");
			const M = (e, t, s, n) => {
					let o, r;
					if (n === N.i.MARKDOWN) o = s.text, r = null;
					else {
						o = null;
						let e = null;
						s.rteState && (e = C.a.toRichTextJSON(s.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(g.a)(e, {
						...x,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				L = async (e, t, s, n) => {
					const o = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return s.commentMode === N.i.MARKDOWN ? o.text = s.text : (o.text = null, o.richtext_json = n), Object(_.a)(Object(E.a)(e, [j.a]), {
						method: v.ob.POST,
						endpoint: Object(S.a)(Object(T.a)(Object(I.a)(`${e.apiUrl}/api/comment.json`))),
						data: o
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
					} : {
						...e,
						body: {
							comment: Object(y.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(y.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(k.a)()
					})
				}, D = async (e, t, s, n, o) => {
					const r = n.commentMode === N.i.MARKDOWN,
						i = {
							postId: t || null,
							parentId: s || null,
							content: {
								markdown: r ? n.text : null,
								richText: r ? null : o
							}
						};
					return Object(g.a)(e, {
						...A,
						variables: {
							input: i
						}
					}).then(e => {
						if (e.ok) {
							const t = e.body.data.createComment;
							if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
								...e,
								ok: !1,
								error: Object(R.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(R.f)(t.errors)
							};
							if (t.ok) return {
								...e,
								body: {
									comment: Object(P.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(k.a)()
						}
					})
				};
			var F = s("./src/redditGQL/operations/UpdateComment.json");
			var B = s("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var U = s("./src/reddit/endpoints/post/index.tsx"),
				V = s("./src/reddit/endpoints/post/convert.ts"),
				W = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				H = s("./src/reddit/featureFlags/index.ts"),
				q = s("./src/reddit/helpers/comment/index.ts"),
				K = s("./src/reddit/helpers/correlationIdTracker.ts"),
				G = s("./src/reddit/helpers/dom/index.ts"),
				z = s("./src/reddit/helpers/localStorage/index.ts"),
				Y = s("./src/reddit/helpers/sessionStorage/index.ts"),
				Q = s("./src/reddit/helpers/trackers/commentsPage.ts"),
				J = s("./src/reddit/models/Comment/index.ts"),
				Z = s("./src/reddit/models/PostDraft/index.ts"),
				X = s("./src/reddit/models/RichTextJson/index.ts"),
				$ = s("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				ee = s("./src/reddit/models/Toast/index.ts"),
				te = s("./src/reddit/selectors/chatPost.ts"),
				se = s("./src/reddit/selectors/comments.ts"),
				ne = s("./src/reddit/selectors/commentSelector.ts"),
				oe = s("./src/reddit/selectors/experiments/chat.ts"),
				re = s("./src/reddit/constants/experiments.ts"),
				ie = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ae = s("./node_modules/reselect/es/index.js");
			const ce = Object(ae.a)(e => Object(ie.c)(e, {
				experimentEligibilitySelector: ie.a,
				experimentName: re.Jb
			}), e => e === re.Rd);
			var de = s("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				le = s("./src/reddit/selectors/platform.ts"),
				ue = s("./src/reddit/selectors/posts.ts"),
				me = s("./src/reddit/selectors/user.ts"),
				pe = s("./src/reddit/actions/comment/index.ts"),
				be = s("./src/reddit/actions/comment/constants.ts");
			const fe = Object(o.a)(be.m),
				he = e => {
					let {
						hasFocus: t,
						draftKey: s
					} = e;
					return async (e, n) => {
						const o = n();
						if (!!o.features.comments.drafts[s])
							if (Object(me.T)(o) && t) {
								const n = fe({
									hasFocus: t,
									draftKey: s
								});
								e(Object(a.startChangeUsernameFlow)(n))
							} else e(fe({
								hasFocus: t,
								draftKey: s
							}))
					}
				},
				Oe = Object(o.a)(be.L),
				xe = Object(o.a)(be.H),
				ve = Object(o.a)(be.N),
				_e = Object(o.a)(be.M),
				ge = Object(o.a)(be.K),
				Ee = async (e, t, s, n, o) => {
					const r = n.ok && n.body,
						i = r && r.comment && r.comment.id;
					await Q.g(e, s, t, o, i)
				}, Ce = "Toxicity_Warning__Modal", je = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					const r = s(),
						i = Object(le.e)(r);
					let a = "";
					i && (a = i.name);
					const {
						formData: c,
						editorMode: l
					} = e;
					if (H.d.enableToxicityWarning(r)) {
						if (!(await M(o(), a, c, l))) return void t(Object(d.i)(Ce))
					}
					t(Se(e))
				}, Se = e => async (t, s) => {
					t(Object(d.g)(Ce));
					const n = s(),
						o = Object(de.a)(n),
						r = Object(de.c)(n);
					if (!n.user.account && o) {
						const s = Object(q.e)(e.formData, n.uploads),
							o = Object(q.c)(e.formData, n.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(c.openRegisterModal)()), Object(Y.d)({
							comment: {
								...e,
								richTextJSONData: s,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(ye(e, !1))
				};

			function ke(e, t) {
				return e === N.i.MARKDOWN && ce(t)
			}
			const ye = (e, t, s, o) => {
					let {
						postId: r,
						commentsPageKey: a,
						draftKey: c,
						formData: d,
						editorMode: l,
						disableAutofocus: m,
						isLiveStreaming: O
					} = e;
					return async (e, x, v) => {
						let {
							apiContext: _,
							gqlContext: g
						} = v;
						var E;
						const C = x(),
							j = Object(te.d)(C, {
								postId: r
							}) && Object(oe.i)(C),
							S = j ? Object(q.a)() : c,
							k = Object(ne.e)(C, {
								commentId: S
							}),
							y = Object(me.l)(C);
						if (!y) return;
						if (k && !j) return;
						t || e(Oe({
							draftKey: S,
							draft: d,
							commentsPageKey: a,
							optimisticComment: j ? Object(q.b)({
								temporalId: S,
								draft: d,
								post: Object(ue.G)(C, {
									postId: r
								}),
								author: y,
								subredditId: (null === (E = Object(le.e)(C)) || void 0 === E ? void 0 : E.id) || ""
							}) : void 0
						}));
						const w = y.displayText,
							T = d.commentMode;
						let I;
						const R = O ? "" : t && s ? s : Object(q.e)(d, C.uploads),
							P = Object(q.f)(R, C.uploads);
						if (O ? (I = await Object(W.i)(_(), r, d, w), e(Object(p.a)({
								streamId: r,
								level: I.body.automuteLevel
							}))) : I = ke(T, C) ? await D(g(), r, null, d, R) : await L(_(), r, d, R), I.ok) {
							let s;
							if (s = I.body, e(ve({
									...s,
									headCommentId: Object(se.w)(C, {
										commentsPageKey: a
									}),
									commentsPageKey: a,
									draftKey: S,
									upload: P
								})), t) {
								const e = Object(le.i)(C);
								Object(i.a)(!!e)
							}
							const n = Object(ue.G)(x(), {
								postId: r
							});
							e(Object(u.y)(n, h.a.CommentSubmitted))
						} else {
							if (I.error) {
								const e = t && o ? o : Object(q.c)(d, C.uploads);
								Q.f({
									state: C,
									bodyText: e,
									postId: r,
									error: I.error,
									uploadMetadata: null == P ? void 0 : P.metadata
								})
							}
							const s = I.error && I.error.fields && I.error.fields[0] ? I.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(ge({
								draftKey: S,
								error: I.error
							})), j || e(Object(f.f)({
								duration: f.a,
								kind: ee.b.Error,
								text: s
							}))
						}
						Ee(x(), a, l, I, null == P ? void 0 : P.metadata).then(() => I.ok && l === N.i.RICH_TEXT ? Object(K.b)(K.a.CommentComposer) : void 0), m || Object(b.d)(), t && Object(Y.a)()
					}
				},
				we = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: a,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e, m = s(), p = Object(le.e)(m);
					let b = "";
					if (p && (b = p.name), H.d.enableToxicityWarning(m)) {
						if (!(await M(o(), b, l, u))) return void t(Object(d.i)(Ce))
					}
					t(Ne({
						commentsPageKey: i,
						draftKey: c,
						parentCommentDepth: a,
						parentCommentId: r,
						formData: l,
						editorMode: u
					}))
				}, Ne = e => async (t, s) => {
					t(Object(d.g)(Ce));
					const n = s(),
						o = Object(de.a)(n),
						r = Object(de.c)(n);
					if (!n.user.account && o) {
						const s = Object(q.e)(e.formData, n.uploads),
							o = Object(q.c)(e.formData, n.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(c.openRegisterModal)()), Object(Y.d)({
							comment: {
								...e,
								richTextJSONData: s,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(Te(e, !1))
				}, Te = (e, t, s, n) => async (o, r, a) => {
					let {
						apiContext: c,
						gqlContext: d
					} = a;
					var l;
					const {
						parentCommentId: u,
						commentsPageKey: m,
						parentCommentDepth: p,
						draftKey: f,
						formData: h,
						editorMode: O
					} = e, x = r(), v = Object(ne.b)(x, {
						commentId: u
					}), _ = v && Object(te.d)(x, {
						postId: v.postId
					}) && Object(oe.i)(x), g = _ ? Object(q.a)() : f, E = Object(ne.e)(x, {
						commentId: g
					}), C = Object(me.l)(x);
					if (!C) return;
					if (E && !_) return;
					t || o(Oe({
						draftKey: g,
						draft: h,
						commentsPageKey: m,
						optimisticComment: _ && v ? Object(q.b)({
							temporalId: g,
							draft: h,
							post: Object(ue.G)(x, {
								postId: v.postId
							}),
							author: C,
							subredditId: (null === (l = Object(le.e)(x)) || void 0 === l ? void 0 : l.id) || "",
							parentId: v.id
						}) : void 0
					})), o(Pe({
						parentCommentId: u,
						commentsPageKey: m
					}));
					const j = h.commentMode,
						S = t && s ? s : Object(q.e)(h, x.uploads),
						k = Object(q.f)(S, x.uploads);
					let y;
					if ((y = ke(j, x) ? await D(d(), null, u, h, S) : await L(c(), u, h, S)).ok) {
						if (o(_e({
								...y.body,
								parentCommentId: u,
								commentsPageKey: m,
								draftKey: g,
								depth: p + 1,
								upload: k
							})), t) {
							const e = Object(le.i)(x);
							Object(i.a)(!!e)
						}
					} else {
						if (y.error) {
							if (!v) return;
							const e = t && n ? n : Object(q.c)(h, x.uploads);
							Q.f({
								state: x,
								bodyText: e,
								postId: v.postId,
								parentId: u,
								error: y.error,
								uploadMetadata: null == k ? void 0 : k.metadata
							})
						}
						o(ge({
							draftKey: g,
							error: y.error
						}))
					}
					Ee(r(), m, O, y, null == k ? void 0 : k.metadata), Object(b.d)(), t && Object(Y.a)()
				}, Ie = () => async e => {
					const t = Object(Y.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: s,
								parentCommentId: n,
								postId: o,
								richTextJSONData: r,
								commentBodyText: i
							},
							isSkipOnboarding: a
						} = t;
						a && e(Object(l.skipOnboardingModal)()), o ? await e(ye({
							...t.comment,
							postId: o
						}, !0, r, i)) : n && void 0 !== s && await e(Te({
							...t.comment,
							parentCommentId: n,
							parentCommentDepth: s
						}, !0, r, i))
					}
				}, Re = Object(o.a)(be.s), Pe = Object(o.a)(be.r), Ae = Object(o.a)(be.n), Me = (Object(o.a)(be.i), Object(o.a)(be.o)), Le = (Object(o.a)(be.v), (e, t, s) => async (o, r, i) => {
					let {
						apiContext: a
					} = i;
					const c = e === N.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(X.H)(t)) o(Me({
						editorMode: e,
						draftKey: s,
						content: c ? X.i : ""
					})), o(Object(m.c)(e));
					else {
						o(Object(m.b)(s));
						const r = await Object(V.a)(a(), e, c ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(m.a)(s)), o(Me({
								editorMode: e,
								draftKey: s,
								content: t
							})), o(Object(m.c)(e))
						} else o(Object(m.a)(s)), o(Object(f.f)({
							duration: f.a,
							kind: ee.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), De = e => {
					let {
						commentsPageKey: t,
						parentCommentId: s,
						singleOpen: n
					} = e;
					return async (e, o) => {
						const i = o(),
							l = Object(r.a)(Z.c.replyToComment, s);
						if (!Object(me.R)(o()) && !Object(de.a)(i)) return e(Object(c.openRegisterModal)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(se.m)(o(), {
								commentId: s
							})
						}));
						const u = i.features.comments.replyFormOpen[t],
							m = u && u[s];
						if ((m || u && n) && (Object.keys(u).forEach(s => u[s] && e(Pe({
								parentCommentId: s,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const f = i.user.prefs.commentMode,
							h = Object(G.d)();
						if (h) {
							const e = h.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (f === N.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => $.s(e, null)).map(e => $.l([e])),
									s = $.s("", null),
									n = $.l([s]);
								b = {
									document: [$.c(t), n]
								}
							}
						}
						const O = i.features.comments.drafts[l];
						let x;
						if (x = h ? {
								commentMode: f,
								draftType: Z.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : O || {
								commentMode: f,
								draftType: Z.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(me.T)(i)) {
							const n = Re({
								parentCommentId: s,
								commentsPageKey: t,
								draftKey: l,
								formData: x
							});
							e(Object(a.startChangeUsernameFlow)(n))
						} else e(Re({
							parentCommentId: s,
							commentsPageKey: t,
							draftKey: l,
							formData: x
						}))
					}
				}, Fe = e => async t => {
					t(Object(pe.r)(e)), t(We(e))
				}, Be = e => {
					let {
						parentCommentId: t,
						commentsPageKey: s
					} = e;
					return async e => {
						e(Pe({
							parentCommentId: t,
							commentsPageKey: s
						})), e(De({
							parentCommentId: t,
							commentsPageKey: s
						})), e(Object(pe.r)({
							commentId: t,
							commentsPageKey: s
						}))
					}
				}, Ue = (e, t) => s => s(Ae({
					draftKey: e,
					formData: t
				})), Ve = Object(o.a)(be.u), We = e => {
					let {
						commentId: t,
						commentMode: s,
						commentsPageKey: n,
						draftKey: o,
						text: r
					} = e;
					return async (e, i) => {
						const a = i();
						a.user.account && (Q.c(a), e(Ve({
							commentId: t,
							commentsPageKey: n,
							draftKey: o,
							formData: {
								text: r,
								commentMode: s,
								rteState: null,
								draftType: Z.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, He = Object(o.a)(be.F), qe = Object(o.a)(be.E), Ke = Object(o.a)(be.G), Ge = Object(o.a)(be.j), ze = Object(o.a)(be.f), Ye = e => {
					let {
						id: t,
						commentsPageKey: s,
						draftKey: n,
						formData: o
					} = e;
					return async (e, r, i) => {
						let {
							apiContext: a,
							gqlContext: c
						} = i;
						const d = r();
						if (!d.user.account) return;
						e(He({
							draftKey: n
						})), Q.d(d);
						const l = Object(q.e)(o, d.uploads),
							u = o.commentMode;
						let m;
						if ((m = ke(u, d) ? await (async (e, t, s, n, o) => {
								const r = o === N.i.MARKDOWN,
									i = {
										commentId: t,
										content: {
											markdown: r ? s.text : null,
											richText: r ? null : n
										}
									};
								return Object(g.a)(e, {
									...F,
									variables: {
										input: i
									}
								}).then(e => {
									if (e.ok) {
										const t = e.body.data.updateComment;
										if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
											...e,
											ok: !1,
											error: Object(R.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(R.f)(t.errors)
										};
										if (t.ok) return {
											...e,
											body: {
												comment: {
													...Object(P.c)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(k.a)()
									}
								})
							})(c(), t, o, l, u) : await (async (e, t, s, n, o) => {
								const r = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return o === N.i.MARKDOWN ? r.text = s.text : (r.text = null, r.richtext_json = n), Object(_.a)(Object(E.a)(e, [j.a]), {
									endpoint: Object(S.a)(Object(I.a)(Object(T.a)(`${e.apiUrl}/api/editusertext`))),
									method: v.ob.POST,
									data: r
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(w.a)(e)
								} : {
									...e,
									body: {
										comment: Object(y.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(y.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(k.a)()
								})
							})(a(), t, o, l, u)).ok) {
							const o = m.body;
							e(Ke({
								commentId: t,
								commentsPageKey: s,
								draftKey: n
							})), e(Object(pe.j)({
								[t]: {
									...o.comment
								}
							}))
						} else e(qe({
							draftKey: n,
							error: m.error
						}))
					}
				}, Qe = Object(o.a)(be.C), Je = Object(o.a)(be.B), Ze = Object(o.a)(be.D), Xe = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n();
					s(Qe({
						id: e
					})), Q.a(e, i);
					const a = await ((e, t) => Object(_.a)(Object(E.a)(e, [j.a]), {
						endpoint: Object(S.a)(`${e.apiUrl}/api/del`),
						method: v.ob.POST,
						data: {
							id: t
						}
					}).then(e => e.ok ? e.body.json && e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
					} : {
						...e,
						body: {}
					} : {
						...e,
						error: e.error || Object(k.a)()
					}))(r(), e);
					a.ok ? s(Ze({
						id: e,
						postId: t
					})) : s(Je({
						id: e,
						error: a.error
					}))
				}, $e = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const r = !s().features.comments.models[e].sendReplies;
					t(Object(pe.j)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(U.q)(o(), e, r)).ok || t(Object(pe.j)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, et = (e, t) => async (s, o, r) => {
					let {
						gqlContext: i
					} = r;
					var a, c, d, l, u, m;
					s(Object(pe.c)());
					const p = e => Object(f.f)(Object(f.e)(e, ee.b.Error));
					if (((null === (c = null === (a = o().pages) || void 0 === a ? void 0 : a.comments) || void 0 === c ? void 0 : c.followed) || []).length === O.a) s(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === J.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (s(Object(pe.p)(a)), (await ((e, t) => Object(g.a)(e, {
								...B,
								variables: {
									input: t
								}
							}))(i(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(z.yb)(null !== (u = null === (l = null === (d = o().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== u ? u : [], null === (m = o().user.account) || void 0 === m ? void 0 : m.id);
							const e = r ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							s(Object(f.f)({
								kind: ee.b.SuccessCommunityGreen,
								text: e
							}))
						} else s(Object(pe.p)(a)), s(p(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function tt(e) {
				let {
					commentId: t,
					commentsPageKey: s,
					isLivestreaming: n = !1
				} = e;
				return async (e, o) => {
					const r = o(),
						i = Object(ne.b)(r, {
							commentId: t
						});
					if (!i) return;
					e(xe({
						commentId: t,
						commentsPageKey: s
					}));
					const a = {
						commentMode: i.media.rteMode,
						draftType: i.parentId ? Z.c.replyToComment : Z.c.replyToPost,
						rtJson: i.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (i.parentId) {
						const t = Object(ne.b)(r, {
								commentId: i.parentId
							}),
							n = Object(se.j)(r, {
								commentId: i.parentId,
								commentLink: void 0,
								commentsPageKey: s
							});
						if (!t || null === n) return;
						await e(Ne({
							commentsPageKey: s,
							draftKey: i.id,
							parentCommentDepth: n,
							parentCommentId: t.id,
							formData: a,
							editorMode: i.media.rteMode
						}))
					} else await e(Se({
						postId: i.postId,
						commentsPageKey: s,
						draftKey: i.id,
						formData: a,
						editorMode: i.media.rteMode,
						disableAutofocus: !0,
						isLiveStreaming: n
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
				return C
			})), s.d(t, "e", (function() {
				return j
			})), s.d(t, "g", (function() {
				return S
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "b", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/lib/makeCommentsPageKey/index.ts"),
				a = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/shortcuts/utils.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				u = s("./src/reddit/endpoints/comment/index.tsx"),
				m = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
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
					s().features.comments.models[e] && (await Object(u.j)(o(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, g = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					if (!Object(h.R)(s())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const i = s().features.comments.models[e];
					if (!i) return;
					const c = i.isLocked ? u.l : u.f;
					t(Object(O.j)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await c(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? n.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : n.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(O.j)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, E = Object(r.a)(x.J), C = e => async (t, s, o) => {
					let {
						apiContext: r,
						gqlContext: i
					} = o;
					const a = s(),
						l = a.features.comments.models[e],
						m = a.user.account ? a.user.account.displayText : null;
					l && m && (t(Object(O.j)({
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
					})), (await Object(u.a)(i(), e)).ok ? t(Object(d.f)({
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
					})), Object(c.d)())
				}, j = (e, t) => async (s, o, r) => {
					let {
						apiContext: i,
						gqlContext: a
					} = r;
					const l = o(),
						m = l.features.comments.models[e],
						p = l.user.account ? l.user.account.displayText : null;
					m && p && (s(Object(O.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(u.h)(a(), e, t)).ok ? s(Object(d.f)({
						kind: b.b.SuccessMod,
						text: t ? n.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : n.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(O.j)({
						[e]: {
							approvedBy: m.approvedBy,
							bannedBy: m.bannedBy,
							isApproved: m.isApproved,
							isRemoved: m.isRemoved,
							isSpam: m.isSpam
						}
					})), Object(c.d)())
				}, S = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = s().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? u.k : u.e;
					t(Object(O.j)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await a(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? n.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : n.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(O.j)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, k = (e, t, s) => async (r, i, a) => {
					let {
						gqlContext: c
					} = a;
					const l = Object(f.b)(i(), {
						commentId: e
					});
					if (!l) return;
					const u = s === o.kc.Snoozed,
						h = {
							itemId: e,
							reportText: t,
							isSnoozed: u
						};
					if ((await Object(m.a)(c(), {
							input: h
						})).ok) r(Object(O.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, u)
						}
					}));
					else {
						const e = Object(d.e)(n.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(d.f)(e))
					}
				}, y = (e, t, s) => async (n, r, a) => {
					let {
						apiContext: c,
						gqlContext: d
					} = a;
					const l = r(),
						m = l.features.comments.models[e];
					if (!m) return;
					const p = m.postId,
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
					const f = Object(u.c)(d(), e, t),
						h = Object(u.d)(d(), e, !!s),
						x = [f];
					(s || !s && e === b) && x.push(h), (await Promise.all(x)).every(e => e.ok) ? s && n(E({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: o.w.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (n(Object(O.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
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
				return i
			})), s.d(t, "d", (function() {
				return a
			}));
			const n = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
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
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
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
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "f", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
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
				i = s("./src/reddit/endpoints/post/convert.ts"),
				a = s("./src/reddit/helpers/localStorage/index.ts"),
				c = s("./src/reddit/helpers/trackers/postComposer.ts"),
				d = s("./src/reddit/models/PostCreationForm/index.ts"),
				l = s("./src/reddit/models/RichTextJson/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.G),
				b = Object(o.a)(m.p),
				f = Object(o.a)(m.Q),
				h = (e, t, s) => async (o, a, h) => {
					let {
						apiContext: x
					} = h;
					c.m(a(), t);
					const v = t === d.i.MARKDOWN,
						_ = t === d.i.RICH_TEXT,
						g = m.k;
					if (v && Object(l.H)(s)) return o(f({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void o(O(t));
					if (_ && !s) return o(f({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void o(O(t));
					o(p(g));
					const E = await Object(i.a)(x(), t, v ? JSON.stringify(s) : s);
					E.ok ? (o(b(g)), o(f({
						editorKey: e,
						editorMode: t,
						content: E.body.output
					})), o(O(t))) : (o(b(g)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, O = e => async (t, s) => {
					const o = Object(a.l)();
					if (o >= 3) return;
					const i = s().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === i) return;
					const c = e === d.i.MARKDOWN ? n.fbt._("You can set Markdown as the default editor mode in the settings", null, {
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
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(a.vb)(o + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(n.a)(r.r),
				a = Object(n.a)(r.F),
				c = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const c = await Object(o.a)(r(), e);
					c && c.ok ? t(i({
						streamId: e,
						level: c.body.data.auto_mute_status.level
					})) : t(a(e))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return X
			})), s.d(t, "removalReasonsLoaded", (function() {
				return $
			})), s.d(t, "removalReasonsFailed", (function() {
				return ee
			})), s.d(t, "removalReasonsRequested", (function() {
				return te
			})), s.d(t, "removalReasonAddedPending", (function() {
				return se
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return ne
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return oe
			})), s.d(t, "addRemovalReason", (function() {
				return re
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), s.d(t, "editRemovalReason", (function() {
				return de
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return ue
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), s.d(t, "deleteRemovalReason", (function() {
				return pe
			})), s.d(t, "removedItemsSelected", (function() {
				return be
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return fe
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return Oe
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return xe
			})), s.d(t, "removalReasonMessagePending", (function() {
				return ve
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return _e
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ge
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return Ee
			})), s.d(t, "submitRemovalReason", (function() {
				return Ce
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return je
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./node_modules/redux/es/redux.js");
			const i = "REMOVALREASONS__LOAD_SUCCESS",
				a = "REMOVALREASONS__ADD_PENDING",
				c = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				u = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				f = "REMOVALREASONS__DELETE_FAILED";
			var h = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case i:
					case a:
					case c:
					case l:
					case u:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
					case m:
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
						case a:
						case l:
						case p:
							return !0;
						case i:
						case "REMOVALREASONS__LOAD_FAILED":
						case c:
						case d:
						case u:
						case m:
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
					case c:
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
					case i: {
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
					case c: {
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
			var C = function() {
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
					removedItemIds: C
				}),
				S = s("./src/lib/constants/index.ts"),
				k = s("./src/lib/makeActionCreator/index.ts"),
				y = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				N = s("./src/reddit/actions/bulkActions/index.ts"),
				T = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				R = s("./src/reddit/actions/comment/moderation.ts"),
				P = s("./src/reddit/actions/modal.ts"),
				A = s("./src/reddit/actions/post.ts"),
				M = s("./src/reddit/actions/toaster.ts"),
				L = s("./src/reddit/constants/modals.ts"),
				D = s("./src/lib/makeApiRequest/index.ts"),
				F = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: S.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: S.ob.POST,
					type: "json",
					data: t
				});
			var H = s("./src/reddit/helpers/isPost.ts"),
				q = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				K = s("./src/reddit/helpers/routeKey/index.ts"),
				G = s("./src/reddit/models/ModQueue/index.ts"),
				z = s("./src/reddit/models/PostDraft/index.ts"),
				Y = s("./src/reddit/models/RemovalReason/index.ts"),
				Q = s("./src/reddit/models/Toast/index.ts"),
				J = s("./src/reddit/selectors/comments.ts"),
				Z = s("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: j
				}
			});
			const X = Object(k.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(k.a)(i),
				ee = Object(k.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const r = s().subreddits.models[e].name;
					t(X());
					const i = await ((e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: S.ob.GET
					}))(o(), r);
					i.ok ? t($({
						subredditId: e,
						response: i.body
					})) : t(ee(i.error))
				}, se = Object(k.a)(a), ne = Object(k.a)(c), oe = Object(k.a)(d), re = (e, t) => async (s, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					s(se());
					const c = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: S.ob.POST,
						data: s
					}))(i(), a, t);
					if (c.ok) {
						const {
							id: o
						} = c.body, r = {
							...t,
							id: o
						};
						s(ne({
							subredditId: e,
							reason: r
						})), s(Object(M.f)({
							kind: Q.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(oe(c.error))
				}, ie = Object(k.a)(l), ae = Object(k.a)(u), ce = Object(k.a)(m), de = (e, t) => async (s, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					s(ie());
					const c = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: S.ob.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(i(), a, t);
					c.ok ? (s(ae({
						subredditId: e,
						reason: t
					})), s(Object(M.f)({
						kind: Q.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ce(c.error))
				}, le = Object(k.a)(p), ue = Object(k.a)(b), me = Object(k.a)(f), pe = (e, t) => async (s, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					s(le());
					const c = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: S.ob.DELETE
					}))(i(), a, t);
					c.ok ? (s(ue({
						subredditId: e,
						reasonId: t
					})), s(Object(M.f)({
						kind: Q.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(me(c.error))
				}, be = Object(k.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), fe = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || s(te(e)), s(be({
						subredditId: e,
						itemIds: t
					})), s(Object(P.i)(L.a.ADD_REMOVAL_REASON))
				}, he = Object(k.a)("REMOVALREASONS__SUBMIT_PENDING"), Oe = Object(k.a)("REMOVALREASONS__SUBMIT_SUCCESS"), xe = Object(k.a)("REMOVALREASONS__SUBMIT_FAILED"), ve = Object(k.a)("REMOVALREASONS__MESSAGE_PENDING"), _e = Object(k.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ge = Object(k.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), Ee = Object(k.a)("REMOVALREASONS__MESSAGE_FAILED"), Ce = (e, t, s, n, o, r) => async (i, a, c) => {
					let {
						apiContext: d
					} = c;
					const l = a(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						p = Object(H.a)(m) ? Y.e.Post : Y.e.Comment,
						b = p === Y.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						f = p === Y.e.Post ? A.R : T.j;
					if (!b || !u) return !1;
					i(he()), i(f({
						[m]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const h = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						O = await V(d(), h);
					if (O.ok) {
						if (i(Oe()), t) {
							i(ve());
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: r,
									type: n
								},
								a = await W(d(), Object(Y.h)(o, p), p);
							if (a.ok) {
								if ([Y.f.Public, Y.f.PublicAsSubreddit].includes(n)) {
									if (i(ge()), a.body) {
										const e = Object(q.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(Z.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = s && n && Object(K.a)(n, l, l.posts.models[e.postId]);
										if (o || (o = Object(y.a)(e.postId, null, {
												sort: S.x,
												hasSortParam: !0
											})), p === Y.e.Post) {
											const s = Object(w.a)(z.c.replyToPost, m);
											i(Object(I.r)({
												...t,
												headCommentId: Object(J.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: s
											}));
											const n = l.postStickiedComments.data[m];
											i(Object(R.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), n && n !== e.id && i(Object(T.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === Y.e.Comment) {
											const e = Object(w.a)(z.c.replyToComment, b.id),
												s = Object(J.j)(l, {
													commentId: m,
													commentsPageKey: o
												});
											i(Object(I.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: o,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else i(_e());
								return !0
							}
							return i(Ee(a.error)), !1
						}
					} else i(xe(O.error)), i(f({
						[m]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, je = (e, t, s, o, r) => async (i, a, c) => {
					let {
						apiContext: d
					} = c;
					const l = a(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					i(he());
					const m = Object(M.f)({
							kind: Q.b.SuccessMod,
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
						b = await V(d(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: G.a.RemovalReason,
							username: u,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (i(Object(N.b)(n)), t) {
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								r = await W(d(), Object(Y.h)(n, Y.e.Bulk), Y.e.Bulk);
							r.ok ? (i(_e()), i(m)) : i(Ee(r.error))
						} else i(m)
					} else i(xe(b.error))
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return b
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "c", (function() {
				return v
			})), s.d(t, "d", (function() {
				return _
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/sentry/index.ts"),
				i = s("./src/config.ts"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/makeApiRequest/index.ts"),
				d = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts");
			var u = s("./src/reddit/reducers/features/avatar/index.ts"),
				m = s("./src/reddit/selectors/avatar.ts"),
				p = s("./src/reddit/actions/users.ts");
			Object(n.a)({
				features: {
					avatar: u.a
				}
			});
			const b = "SET_AVATAR_USER",
				f = Object(o.a)(b),
				h = "RANDOM_AVATAR_LOADED",
				O = Object(o.a)(h),
				x = (e, t, s) => async (n, o, r) => {
					let {
						apiContext: u
					} = r;
					var b, f, h, O;
					const x = Object(m.b)(o()),
						v = await (async (e, t, s, n, o) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: a.ob.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: s,
								...n
							}
						}))(u(), e, t, s, x);
					if (!v.ok) throw new Error("User avatar failed to save");
					return n(Object(p.y)(v.body)), {
						accountIcon: null === (f = null === (b = v.body) || void 0 === b ? void 0 : b.avatar) || void 0 === f ? void 0 : f.headshot_image_url,
						fullBodySnoovatar: null === (O = null === (h = v.body) || void 0 === h ? void 0 : h.avatar) || void 0 === O ? void 0 : O.image_url
					}
				}, v = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/account`,
							method: a.ob.GET
						}))(n());
						t.ok && e(f(t.body))
					} catch (o) {
						r.c.captureException(o)
					}
				}, _ = () => async (e, t, s) => {
					let {
						apiContext: n
					} = s;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: a.ob.GET
						}))(n());
						t.ok && e(O(t.body))
					} catch (o) {
						r.c.captureException(o)
					}
				}
		},
		"./src/reddit/actions/snoovatarModal.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			var n = s("./src/reddit/actions/login.ts"),
				o = s("./src/reddit/actions/modal.ts"),
				r = s("./src/reddit/actions/users.ts"),
				i = s("./src/reddit/constants/modals.ts"),
				a = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = s("./src/reddit/selectors/user.ts"),
				d = s("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const s = t();
				Object(d.a)(Object(a.l)(s)), e(Object(r.s)({
					forceFetch: !0
				})), await e(Object(o.g)(i.a.SNOOVATAR_MODAL))
			};

			function u() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, s) => {
					const {
						clickSource: r,
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: f
					} = e, h = s();
					r && Object(d.a)(Object(a.g)(r)(h)), Object(c.R)(h) ? await t(Object(o.h)(i.a.SNOOVATAR_MODAL, {
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: f
					})) : await t(Object(n.openLoginModal)())
				}
			}
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
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				a = s("./src/reddit/components/AdLinkWrapper/index.m.less"),
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
			t.a = function(e) {
				const {
					className: t,
					ctaExperimentDesign: s,
					children: n,
					...a
				} = e, l = Object(r.a)(c.a.adLinkWrapper, t, {
					[c.a.ctaExperiment]: !!s,
					[c.a.borders]: "classic" === s,
					[c.a.borderTop]: "compact" === s || "conversation" === s,
					[c.a.borderBottom]: "card" === s
				});
				return o.a.createElement("div", d({
					className: l,
					"data-adclicklocation": i.a.CTA_WHITESPACE
				}, a), n)
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/CallToActionButton/index.tsx"),
				c = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				u = s("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				m = s.n(u);
			t.a = e => {
				const {
					adLinkContent: t,
					post: s,
					isCompact: o
				} = e, {
					source: u,
					callToAction: p,
					caption: b
				} = t;
				if (!u || !u.url) return null;
				let f = u.displayText;
				u.displayText.length >= 40 && (f = u.displayText.slice(0, 40 - "...".length) + "...");
				const h = Object(d.t)(s, u.displayText),
					O = Object(d.u)(s) ? f : b,
					x = Object(d.u)(s) ? s.subcaption : u.displayText,
					v = Object(i.a)(m.a.leftSideContent, {
						[m.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[m.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					_ = Object(i.a)(m.a.displayUrl, {
						[m.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: v
				}, b && !o && !h && r.a.createElement("span", {
					className: m.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !h && r.a.createElement(c.a, {
					href: u.url.replace(n.a.redditUrl, ""),
					isSponsored: s.isSponsored,
					postId: s.id,
					source: u,
					className: _,
					"data-adclicklocation": l.a.CTA_URL
				}, f), h && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: m.a.productTitle
				}, O), r.a.createElement("span", {
					className: m.a.subcaption
				}, x))), p && r.a.createElement(a.a, {
					className: m.a.callToAction,
					href: u.url,
					isSponsored: s.isSponsored,
					postId: s.id,
					source: u,
					showCTAExperiment: !!e.ctaExperimentDesign,
					"data-adclicklocation": l.a.CTA_BUTTON
				}, p))
			}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, s) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/OutboundLink/index.tsx"),
				a = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				c = s("./src/reddit/components/CallToActionButton/index.m.less"),
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
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: s,
					...n
				} = e;
				return o.a.createElement(i.b, l({
					className: Object(r.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: n.isNotCardView,
						[d.a.ctaExperiment]: !!s
					}),
					"data-adclicklocation": a.a.CTA_BUTTON
				}, n))
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
				viewFullLinkOrOverlayLink: "_3P3T6fdpdL6GGPyCM7zs9q"
			}
		},
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return Q
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/actions/comment/index.ts"),
				m = s("./src/reddit/actions/modal.ts"),
				p = s("./src/reddit/actions/post.ts"),
				b = s("./src/reddit/actions/toaster.ts"),
				f = s("./src/lib/makeApiRequest/index.ts"),
				h = s("./src/lib/omitHeaders/index.ts"),
				O = s("./src/reddit/constants/headers.ts"),
				x = s("./src/reddit/models/Toast/index.ts");
			const v = (e, t) => async (s, o, r) => {
				let {
					apiContext: i
				} = r;
				const a = await (async (e, t, s) => Object(f.a)(Object(h.a)(e, [O.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: d.ob.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(i(), e, t),
					c = `error-block-${t}`,
					l = `success-block-${t}`;
				if (a.ok) {
					s(Object(p.R)({
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
					id: c,
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
				C = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = s("./src/reddit/components/TrackingHelper/index.tsx"),
				S = s("./src/reddit/controls/Dropdown/index.tsx"),
				k = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				w = s("./src/reddit/helpers/path/index.ts"),
				N = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const T = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(N.z)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(N.tb)(r)
				}),
				I = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				R = e => ({
					subreddit: Object(N.jb)(e),
					userSubreddit: Object(N.tb)(e)
				}),
				P = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...R
				});
			var A = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				M = s("./src/reddit/icons/svgs/Info/index.tsx"),
				L = s("./src/reddit/selectors/activeModalId.ts"),
				D = s("./src/reddit/selectors/comments.ts"),
				F = s("./src/reddit/selectors/moderatorPermissions.ts"),
				B = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/selectors/tooltip.ts"),
				V = s("./src/reddit/selectors/user.ts"),
				W = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				H = s.n(W),
				q = s("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const K = Object(C.a)(S.a),
				G = e => e === q.a.First ? n.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === q.a.Last ? n.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : n.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class z extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== q.a.None) {
							e(t === q.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", q.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", q.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", q.a.None)
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
						className: H.a.HighlightWrapper
					}, r.a.createElement(k.b, {
						className: Object(c.a)(H.a.HighlightPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${G(o)}`,
						id: t,
						noHover: !0,
						onClick: s
					}), r.a.createElement(A.b, {
						className: H.a.DropdownTriangle,
						onClick: s
					}), r.a.createElement(K, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(k.b, {
						displayText: G(q.a.First),
						isSelected: o === q.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(k.b, {
						displayText: G(q.a.Last),
						isSelected: o === q.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(k.b, {
						displayText: G(q.a.None),
						isSelected: o === q.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var Y = z;
			const Q = "CommentSort--SortPicker",
				J = "CommentSort--HighlightPicker",
				Z = "CommentSort--Tooltip",
				X = Object(C.a)(S.a),
				$ = Object(a.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: s
						} = t;
						return s && Object(D.m)(e, {
							commentId: s
						})
					},
					contestModeModalIsOpen: Object(L.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(U.b)(Q),
					highlightIsOpen: Object(U.b)(J),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(F.m)(e, {
							postId: s
						});
						return !!n && n.posts
					},
					post: B.G,
					postPermalink: B.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(V.w)(e),
							o = !!Object(F.m)(e, {
								postId: s
							}),
							r = Object(B.G)(e, {
								postId: s
							});
						return (o || n) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: D.p
				}),
				ee = Object(i.b)($, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						changeHighlightSort: t => e(Object(u.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: Q
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: J
							})), t()
						},
						onSetSuggestedSort: t => e(v(s, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.W)(t, s)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: Z
						})),
						toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class te extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, s, n) => this.props.sendEvent(T(e, this.props.isOverlay, t, s, n)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(I("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(P(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
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
						commentPermalink: s,
						contestModeModalIsOpen: o,
						dropdownIsOpen: i,
						elementRef: a,
						hideTooltip: l,
						highlightIsOpen: u,
						hasModeratorPostPermissions: m,
						isOverlay: p,
						location: b,
						post: f,
						postPermalink: h,
						selectedHighlightSort: O,
						showCommentHighlighter: x,
						sort: v,
						suggestedSort: C,
						showTooltip: j,
						toggleContestModeModal: S
					} = this.props, N = f.contestMode, T = !b.search.includes(d.w.CONFIDENCE), R = v === d.w.CONFIDENCE && T, P = m && !R, L = d.y[v], D = L ? L() : "", F = C && v === C && !R ? this.addSuggestedLabel(D) : D, B = N ? n.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : n.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), U = N ? n.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : n.fbt._("Start", null, {
						hk: "Mjvpj"
					}), V = N ? n.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : n.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), W = N && !m;
					return r.a.createElement("div", {
						className: Object(c.a)(t, H.a.container, {
							[H.a.hideCommentSort]: !x && W
						}),
						ref: a
					}, r.a.createElement("div", {
						className: H.a.containerRow
					}, !W && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: H.a.DropdownContainer
					}, r.a.createElement(k.b, {
						className: Object(c.a)(H.a.SortPicker, H.a.Row),
						textClassName: H.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${F}`,
						id: Q,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(A.b, {
						className: H.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(X, {
						isOpen: i,
						tooltipId: Q
					}, [d.w.CONFIDENCE, d.w.TOP, d.w.NEW, d.w.CONTROVERSIAL, d.w.OLD, d.w.QA].map(e => {
						const t = s || h,
							n = Object(w.b)(t),
							o = d.y[e],
							i = o ? o() : "";
						return r.a.createElement(E.a, {
							className: H.a.ViewFullLinkOrOverlayLink,
							isOverlay: p,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(k.b, {
							displayText: i,
							isSelected: v === e,
							skipRoleAttr: !0
						}))
					}))), P && !W && (C ? r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: v !== C ? this.setSortOnClick : this.clearSortOnClick
					}, v !== C ? n.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : n.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: H.a.SetSort
					}, r.a.createElement("button", {
						className: H.a.SortLink,
						onClick: this.setSortOnClick
					}, n.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: Z,
						onMouseEnter: j,
						onMouseLeave: l
					}, r.a.createElement(g.c, {
						className: H.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: Z
					}), r.a.createElement(M.a, {
						className: H.a.Info
					})))), m && r.a.createElement("button", {
						className: H.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(y.a, {
						className: H.a.ToggleSwitch,
						on: N
					}))), x && r.a.createElement("div", {
						className: H.a.containerRow
					}, r.a.createElement(Y, {
						changeHighlightSort: e,
						highlightIsOpen: u,
						id: J,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: O,
						trackHighlight: I
					})), o && r.a.createElement(_.a, {
						actionText: U,
						headerText: B,
						modalText: V,
						onConfirm: this.setContestMode,
						toggleModal: S,
						withOverlay: !0
					}))
				}
			}
			t.b = ee(Object(j.c)(te))
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: s,
					subredditId: n
				} = e, c = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!s) return null;
				const l = s.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = s[o],
						t = d[e].belongsTo.id;
					p(e) && o - r >= a && !u.has(t) && (r = o, u.add(t), o === l && (m = !0))
				}
				return m ? o.a.createElement(i.a, {
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
				return o.a.createElement(a.a, l({}, s, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(d.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(a.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!s
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: n
				}), !m && f && o.a.createElement(d.a, {
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
				o = s.n(n),
				r = s("./src/lib/eventTools/index.ts"),
				i = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = s("./src/reddit/icons/fonts/Calendar/index.tsx"),
				c = s("./src/reddit/icons/fonts/Live/index.tsx"),
				d = s("./src/reddit/components/HumanDate/index.tsx"),
				l = s("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = s.n(l),
				m = s("./src/lib/lessComponent.tsx");
			const p = m.a.span("PostEventFutureText", u.a),
				b = m.a.span("PostEventPastText", u.a),
				f = m.a.span("PostEventNowText", u.a),
				h = m.a.span("Container", u.a),
				O = m.a.wrapped(a.a, "CalendarIcon", u.a),
				x = m.a.wrapped(c.a, "LiveIcon", u.a),
				v = m.a.div("LoadingState", u.a);
			class _ extends n.Component {
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
					} = s, l = Object(r.e)(c, n);
					let u, m;
					if (this.state.mounted || l === r.a.Live) u = o.a.createElement(d.c, {
						startTime: c,
						endTime: n,
						isLive: a
					});
					else {
						const e = Object(i.a)({
							isLoading: !0
						});
						u = o.a.createElement(v, {
							className: e
						})
					}
					if (a) m = o.a.createElement(f, null, o.a.createElement(x, null), u);
					else if (l === r.a.Future) m = o.a.createElement(p, null, o.a.createElement(O, null), u);
					else {
						if (l !== r.a.Past) return null;
						m = o.a.createElement(b, null, o.a.createElement(O, null), u)
					}
					return o.a.createElement(h, {
						className: e
					}, m)
				}
			}
			t.a = _
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
				i = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				a = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				c = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = s("./src/reddit/models/Post/index.ts"),
				l = s("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				u = s.n(l);
			const {
				fbt: m
			} = s("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
				let t;
				switch (e) {
					case d.g.AntiEvilOps:
					case d.g.AutomodFiltered:
					case d.g.CommunityOps:
					case d.g.ContentTakedown:
					case d.g.CopyrightTakedown:
					case d.g.Reddit:
						t = i.a;
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = c.b;
						break;
					case d.g.Moderator:
						t = a.a;
						break;
					default:
						t = i.a
				}
				return r.a.createElement(t, {
					className: u.a.icon
				})
			}, b = e => {
				let t;
				switch (e) {
					case d.g.AntiEvilOps:
					case d.g.AutomodFiltered:
					case d.g.CommunityOps:
					case d.g.ContentTakedown:
					case d.g.CopyrightTakedown:
					case d.g.Reddit:
						t = "clear_fill";
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = "delete_fill";
						break;
					case d.g.Moderator:
						t = "mod_fill";
						break;
					default:
						t = "clear_fill"
				}
				return t
			}, f = () => m._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", r.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "3MHgRl"
			}))), m._param("=Content Policy", r.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content Policy", null, {
				hk: "3UZthQ"
			})))], {
				hk: "4g3zuW"
			}), h = () => m._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", r.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/user-agreement"
			}, m._("User Agreement", null, {
				hk: "yMHtU"
			}))), m._param("=Content Policy", r.a.createElement("a", {
				className: u.a.link,
				href: "https://www.redditinc.com/policies/content-policy"
			}, m._("Content Policy", null, {
				hk: "2dCXGu"
			})))], {
				hk: "2DLuNP"
			}), O = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return m._("Sorry, this post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "2ZqyRT"
						});
					case d.g.Author:
						return m._("Sorry, this post was removed by the person who originally posted it.", null, {
							hk: "4IRCN"
						});
					case d.g.AuthorDeleted:
						return m._("Sorry, this post was deleted by the person who originally posted it.", null, {
							hk: "4emmIp"
						});
					case d.g.AutomodFiltered:
						return m._("Post is awaiting moderator approval.", null, {
							hk: "wdGOr"
						});
					case d.g.CommunityOps:
						return m._("Sorry, this post was removed by Reddit's Community team.", null, {
							hk: "3fs5lF"
						});
					case d.g.ContentTakedown:
						return m._("Sorry, this post was removed by Reddit.", null, {
							hk: "3XSuKc"
						});
					case d.g.CopyrightTakedown:
						return m._("Sorry, this post was removed by Reddit's Legal Operations team.", null, {
							hk: "1TbEDT"
						});
					case d.g.Moderator:
						return m._("Sorry, this post has been removed by the moderators of r/{subredditName}.", [m._param("subredditName", t)], {
							hk: "12NWKq"
						});
					case d.g.Reddit:
						return m._("Sorry, this post was removed by Reddit's spam filters.", null, {
							hk: "10ItEu"
						});
					default:
						return m._("Sorry, this post has been removed", null, {
							hk: "11sG9V"
						})
				}
			}, x = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return r.a.createElement(f, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return m._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case d.g.AutomodFiltered:
						return m._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [m._param("=[subreddit name]", r.a.createElement("a", {
							className: u.a.link,
							href: `${n.a.redditUrl}/r/${t}`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, m._("{subreddit name}", [m._param("subreddit name", `r/${t}`)], {
							hk: "2o22vl"
						})))], {
							hk: "3dxuEW"
						});
					case d.g.CommunityOps:
						return m._("It's rare, but Reddit's Community Team will occasionally remove posts from feeds to keep communities safe and civil.", null, {
							hk: "uPiHS"
						});
					case d.g.ContentTakedown:
						return r.a.createElement(h, null);
					case d.g.CopyrightTakedown:
						return m._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "2e8fhi"
						});
					case d.g.Moderator:
						return m._("Moderators remove posts from feeds for a variety of reasons, including keeping communities safe, civil, and true to their purpose.", null, {
							hk: "QXZPk"
						});
					case d.g.Reddit:
					default:
						return m._("Reddit's automated bots frequently filter posts it thinks might be spam.", null, {
							hk: "3vUmEz"
						})
				}
			}, v = (e, t, s) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return m._("This post was removed by Reddit's Anti-Evil Operations team.", null, {
							hk: "3a8CyR"
						});
					case d.g.Author:
						return m._("This post was removed by the person who originally posted it.", null, {
							hk: "2lyUgL"
						});
					case d.g.AuthorDeleted:
						return m._("This post was deleted by the person who originally posted it.", null, {
							hk: "16LeiH"
						});
					case d.g.AutomodFiltered:
						return m._("This post was reported by automod, and is waiting for your review.", null, {
							hk: "2E46dR"
						});
					case d.g.CommunityOps:
						return m._("This post was removed by Reddit admin, u/{username}.", [m._param("username", t)], {
							hk: "34nHWu"
						});
					case d.g.ContentTakedown:
						return m._("This post was removed by Reddit.", null, {
							hk: "3uR3iw"
						});
					case d.g.CopyrightTakedown:
						return m._("This post was removed by Reddit's Legal Operations team.", null, {
							hk: "Ukfj"
						});
					case d.g.Moderator:
						return m._("This post was removed by r/{subredditName} moderator, u/{username}.", [m._param("subredditName", s), m._param("username", t)], {
							hk: "270bcn"
						});
					case d.g.Reddit:
						return m._("This post was removed by Reddit's spam filters.", null, {
							hk: "1k3lsh"
						});
					default:
						return m._("This post was removed by Reddit's spam filters.", null, {
							hk: "3oxS8r"
						})
				}
			}, _ = e => {
				switch (e) {
					case d.g.AntiEvilOps:
						return r.a.createElement(f, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return m._("It won't show up in your community feed, and anyone with a direct link to it will see a message similar to this one.", null, {
							hk: "2KZLgT"
						});
					case d.g.AutomodFiltered:
						return m._("It won’t show up in your community feed until you or another moderator approve it.", null, {
							hk: "2X5ECb"
						});
					case d.g.CommunityOps:
						return m._("To keep Reddit and its communities safe, the Community team occasionally removes posts from feeds. To learn more, {=just ask} .", [m._param("=just ask", r.a.createElement("a", {
							className: u.a.link,
							href: `${n.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, m._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case d.g.ContentTakedown:
						return r.a.createElement(h, null);
					case d.g.CopyrightTakedown:
						return m._("This content was removed in response to a copyright claim by a third party.", null, {
							hk: "7jiV"
						});
					case d.g.Moderator:
						return m._("It won't show up in your community feed, and moderators will see a message similar to this one.", null, {
							hk: "22qJOB"
						});
					case d.g.Reddit:
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
				o = s.n(n),
				r = s("./src/reddit/components/IntuitivePostTypes/OptionalText.m.less"),
				i = s.n(r),
				a = s("./src/reddit/components/RichTextJson/index.tsx");
			t.a = e => {
				let {
					content: t,
					rtJsonElementProps: s
				} = e;
				return o.a.createElement("div", {
					className: i.a.optionalText
				}, o.a.createElement(a.a, {
					content: t,
					rtJsonElementProps: s
				}))
			}
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = s("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: s,
					to: n,
					...r
				} = e, d = Object(a.b)(n);
				return o.a.createElement(i.a, c({
					className: s,
					to: d
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
				} = e, n = t ? d : r.a;
				return o.a.createElement(n, l({}, s, {
					children: s.children,
					className: s.className,
					onClick: s.onClick,
					to: s.to
				}))
			}
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/fbt/lib/FbtPublic.js"),
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
					subredditOrProfile: O,
					templatePlaceholderImage: x,
					shouldShowFollowButton: v,
					isFollowed: _,
					isCommentsPage: g,
					onFollowPostClick: E
				} = e;
				return Object(m.a)() ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(i.a)(f.a.thumbnailContainer, {
						[f.a.mShowingButtonOrOverflow]: v || h
					})
				}, o.a.createElement("div", {
					className: f.a.thumbnailContainerRow
				}, v && o.a.createElement(a.a, {
					isFilled: !!_,
					onClick: E,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), h && O && o.a.createElement(c.a, {
					className: f.a.subscribeButton,
					getEventFactory: e => Object(u.k)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: O.name,
						type: Object(p.i)(O) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: s.id,
					small: !0
				})), o.a.createElement(d.b, {
					crosspost: t,
					isCommentsPage: g,
					post: s,
					redditStyle: b,
					forceShowNSFW: n,
					templatePlaceholderImage: x
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
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
				O = s("./src/reddit/components/Flatlist/index.tsx"),
				x = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				v = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				_ = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				g = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				E = s("./src/reddit/components/ModModeReports/index.tsx"),
				C = s("./src/reddit/components/ModModeReports/helpers.ts"),
				j = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				S = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				k = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				y = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				w = s("./src/reddit/components/PostContainer/index.tsx"),
				N = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				T = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				I = s("./src/reddit/components/PostTitle/index.tsx"),
				R = s("./src/reddit/components/PostTopLine/index.tsx"),
				P = s("./src/reddit/components/PostTopMeta/index.tsx"),
				A = s("./src/reddit/components/SourceLink/index.tsx"),
				M = s("./src/reddit/constants/postLayout.ts"),
				L = s("./src/reddit/contexts/PageLayer/index.tsx"),
				D = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				F = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				B = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				U = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				V = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				H = s.n(W),
				q = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				K = s("./src/reddit/hooks/useIsOverlay.ts"),
				G = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				z = s("./src/reddit/hooks/useUserContext.ts"),
				Y = s("./src/reddit/models/Media/index.ts"),
				Q = s("./src/reddit/models/Vote/index.ts"),
				J = s("./src/reddit/contexts/Post/index.tsx"),
				Z = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				X = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				$ = s("./src/reddit/selectors/i18n/index.ts"),
				ee = s("./src/reddit/selectors/moderatorPermissions.ts"),
				te = s("./src/reddit/selectors/modQueue.ts"),
				se = s("./src/reddit/selectors/postFlair.ts"),
				ne = s("./src/reddit/selectors/posts.ts"),
				oe = s("./src/reddit/selectors/showPromotedCTA.ts"),
				re = s("./src/reddit/selectors/user.ts"),
				ie = s("./src/reddit/components/MediumPost/index.m.less"),
				ae = s.n(ie),
				ce = s("./src/reddit/components/MediumPost/MediumThumbnail.tsx");

			function de() {
				return (de = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const le = () => Object(i.c)({
					isModQueueDisplayEnabled: te.b,
					crosspost: ne.d,
					flairStyleTemplate: L.W,
					isActive: ne.j,
					isBlurredPreview: X.b,
					isCurrentUserProfilePost: ne.l,
					isRecommendationPost: (e, t) => !!t.post.recommendationContext && Object(re.R)(e),
					showPromotedCTA: oe.a,
					moderatorPermissions: ee.m,
					shouldShowNsfwListingBelow: $.b,
					showEditFlair: se.a,
					showMedia: L.s,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(ee.i)(e, s.id)
					},
					isOptionalTextEnabled: Z.a
				}),
				ue = e => {
					const {
						className: t,
						crosspost: s,
						currentUser: i,
						eventFactory: L,
						flairStyleTemplate: W,
						hideNSFWPref: q,
						hostPostData: K,
						inSubredditOrProfile: z = !1,
						isBlurredPreview: J,
						isCheckboxSelected: Z,
						isCommentsPage: X,
						isCurrentUserProfilePost: $,
						isFrontpage: ee,
						isModWithUserNotesPermissions: te,
						isOverlay: se,
						isRecommendationPost: ne,
						isTopicPage: oe,
						isCommentCountAnimationEnabled: re,
						isVoteCountAnimationEnabled: ie,
						isCountAnimShadowTestEnabled: de,
						imageGalleryCurrentItem: le,
						listingKey: ue,
						moderatorPermissions: me,
						modModeEnabled: pe,
						onClickPost: be,
						post: fe,
						postId: he,
						postIds: Oe,
						redditStyle: xe,
						shouldHideFlair: ve,
						shouldShowNsfwListingBelow: _e,
						showBulkActionCheckbox: ge,
						showEditFlair: Ee,
						showMedia: Ce,
						showPromotedCTA: je,
						sendEvent: Se,
						subredditOrProfile: ke,
						toggleCheckbox: ye,
						isAvatarPostEnabled: we,
						isOptionalTextEnabled: Ne,
						isModQueueDisplayEnabled: Te
					} = e, Ie = Object(r.d)(), Re = e => e === Q.a.upvoted ? Ie(Object(d.jb)(he)) : Ie(Object(d.v)(he)), Pe = () => Ie(Object(d.fb)(he)), Ae = xe ? void 0 : W, Me = Object(U.a)(me), Le = pe && Me, De = Object(F.a)(me), Fe = Object(B.a)(me), Be = Object(g.a)(fe), Ue = Object(C.c)(fe), Ve = !!(null == K ? void 0 : K.shouldShowLinkedPosts), We = _e, He = !Object(G.a)() && Object(D.a)(fe), qe = z && !Ce && !Ve && !We || we, Ke = qe && !!fe.source && !s, Ge = !(ee && !!i || oe) && !$ && (!z || Ve || We) || ne, ze = (!z || Ve || We) && !fe.isSponsored, Ye = Object(a.t)(fe, le), {
						source: Qe
					} = Ye, Je = !!(J && (null == ke ? void 0 : ke.isNSFW)), Ze = Object(n.useRef)({
						renderingObjectInfo: fe
					});
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(w.b, {
						className: Object(c.a)(ae.a.container, t, H.a.largeAndMediumPostStyles, H.a.largeAndMediumActiveStyles, Object(V.a)(e), {
							[H.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: se,
						style: Object(V.b)(e.flairStyleTemplate),
						post: fe,
						onClick: be,
						eventFactory: L
					}, o.a.createElement(T.a, {
						model: fe,
						handleVote: Re,
						showBulkActionCheckbox: ge,
						isCheckboxSelected: Z,
						toggleCheckbox: ye,
						flairStyleTemplate: Ae,
						redditStyle: xe,
						isVoteCountAnimation: ie,
						isCountAnimShadowTestEnabled: de,
						postId: he
					}), o.a.createElement(y.a, {
						className: ae.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: Ae,
						post: fe,
						redditStyle: xe
					}, o.a.createElement(f.a, {
						post: fe
					}), o.a.createElement("article", {
						className: ae.a.mainBody
					}, o.a.createElement("div", {
						className: ae.a.content,
						"data-click-id": "body"
					}, !!fe.recommendationContext && o.a.createElement(k.a, {
						content: fe.recommendationContext.content,
						layout: M.g.Large,
						post: fe
					}), o.a.createElement(R.a, {
						className: ae.a.postTopLine,
						hideNSFWPref: q,
						hostPostData: K,
						iconClassName: ae.a.postTopLineIcon,
						inSubredditOrProfile: z,
						isCommentsPage: X,
						isCurrentUserProfilePost: $,
						isModWithUserNotesPermissions: te,
						isOverlay: !!se,
						isTopicPage: !!oe,
						listingKey: ue,
						post: fe,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Ke,
						showSubreddit: ze,
						showSubredditIcon: !0,
						subredditOrProfile: ke
					}), o.a.createElement(I.c, {
						className: ae.a.postTitle,
						post: fe,
						redditStyle: xe,
						size: I.b.Large,
						titleColor: Ae && Ae.postTitleColor,
						isOverlay: se
					}), X && !ve && fe.flair && fe.flair.length > 0 && o.a.createElement(h.a, {
						className: Object(c.a)(X && ae.a.leftPadding),
						disableFlair: !X,
						post: fe,
						sendEvent: Se
					}), fe.source && !fe.isSponsored && !s && !Je && o.a.createElement(o.a.Fragment, null, o.a.createElement(A.a, {
						className: ae.a.sourceLink,
						isCommentsPage: X,
						post: fe
					}), Ne && fe.media && fe.media.type !== Y.o.TEXT && fe.media.type !== Y.o.IMAGE && fe.media.richtextContent && o.a.createElement(x.a, {
						content: fe.media.richtextContent,
						rtJsonElementProps: Ze.current
					}))), !qe && He && o.a.createElement(ce.a, {
						crosspost: s ? fe : void 0,
						hasModPostPerms: Me,
						isCommentsPage: X,
						isOverlay: se,
						modModeEnabled: pe,
						post: s || fe,
						redditStyle: xe,
						shouldShowSubscribeButton: Ge,
						subredditOrProfile: ke,
						templatePlaceholderImage: Ae && Ae.postPlaceholderImage
					})), je && Qe && Qe.url && !fe.isSurveyAd && o.a.createElement(u.a, {
						className: ae.a.adLinkWrapper
					}, o.a.createElement(m.a, {
						post: fe,
						adLinkContent: Ye
					})), pe && Me && Be && !Te && o.a.createElement("div", {
						className: ae.a.modModeBannerWrapper
					}, o.a.createElement(_.a, {
						thing: fe
					})), pe && Me && Ue && !Te && o.a.createElement("div", {
						className: ae.a.modModeBannerWrapper
					}, o.a.createElement(E.a, {
						onIgnoreReports: Pe,
						reportable: fe
					})), o.a.createElement(v.d, null), Te && o.a.createElement(S.a, {
						post: fe
					}), o.a.createElement("div", {
						className: ae.a.flatlistContainer
					}, o.a.createElement(b.a, {
						className: ae.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Ae,
						redditStyle: xe,
						model: fe,
						onVoteClick: Re
					}), !fe.isSurveyAd && (Te ? o.a.createElement(j.a, {
						content: fe,
						listingKey: ue,
						hostPostData: K
					}) : o.a.createElement(O.c, {
						currentUser: i,
						hasModFlairPerms: De,
						hasModFullPerms: Fe,
						hasModPostPerms: Me,
						hostPostData: K,
						isCommentCountAnimation: re,
						isCountAnimShadowTestEnabled: de,
						isOverlay: !!se,
						listingKey: ue,
						modModeEnabled: pe,
						onIgnoreReports: Pe,
						onOpenReportsDropdown: e => Ie(Object(l.h)({
							tooltipId: e
						})),
						post: fe,
						showEditFlair: Ee,
						tooltipType: se ? P.f.Lightbox : void 0,
						useFlatlistBreakpoints: Object(N.b)({
							editPost: !Le,
							save: !Le,
							hide: !1,
							report: !1,
							mute: !1
						})
					})))), ee && o.a.createElement(p.a, {
						post: fe,
						postIds: null != Oe ? Oe : [],
						subredditId: null == ke ? void 0 : ke.id
					})))
				};
			t.default = Object(J.b)(o.a.memo((function(e) {
				const t = Object(n.useMemo)(() => le(), []),
					s = Object(r.e)(s => t(s, e), r.c),
					i = Object(q.a)(e.post),
					a = Object(z.a)();
				return o.a.createElement(ue, de({}, e, s, {
					modModeEnabled: a.modModeEnabled,
					hideNSFWPref: a.prefs.hideNSFW,
					isOverlay: Object(K.a)(),
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
				return o
			}));
			var n = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const o = e => (e => !e.isApproved && !!Object(n.b)(e, n.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(n.b)(e, n.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
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
				o = s("./src/lib/classNames/index.ts"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./src/reddit/components/ModModeBanners/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
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
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less": function(e, t, s) {
			e.exports = {
				postStats: "_1jp_fxyDvcILOETMxKs9aZ"
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				a = s.n(i);
			const c = e => {
				let {
					post: t
				} = e;
				var s;
				return r.a.createElement("p", {
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
				snoozeIcon: "BUoPqJh1q6Pv_Vf5bsKyT"
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
				return be
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				l = s("./src/reddit/components/OverflowMenu/index.tsx"),
				u = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				m = s("./src/reddit/components/ReportFlow/new.tsx"),
				p = s("./src/reddit/constants/modals.ts"),
				b = s("./src/reddit/controls/Button/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/helpers/correlationIdTracker.ts"),
				O = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				x = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = s("./src/reddit/helpers/isPost.ts"),
				_ = s("./src/reddit/helpers/trackers/gild.ts"),
				g = s("./src/reddit/helpers/trackers/modTools.ts"),
				E = s("./src/reddit/helpers/trackers/post.ts"),
				C = s("./src/reddit/hooks/useTracking.ts"),
				j = s("./src/reddit/icons/fonts/index.tsx"),
				S = s("./src/reddit/actions/comment/moderation.ts"),
				k = s("./src/reddit/actions/gold/modals.ts"),
				y = s("./src/reddit/actions/modal.ts"),
				w = s("./src/reddit/actions/post.ts"),
				N = s("./src/reddit/actions/postFlair.ts"),
				T = s("./src/reddit/actions/removalReasons/index.ts"),
				I = s("./src/reddit/actions/reportFlow/index.ts"),
				R = s("./src/reddit/selectors/activeModal.ts"),
				P = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				A = s("./src/reddit/selectors/moderatorPermissions.ts"),
				M = s("./src/reddit/models/Post/index.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {}));
			const L = e => {
				var t;
				return e.isRemoved && e.bannedBy !== c.m || Object(v.b)(e) && [M.g.AntiEvilOps, M.g.CommunityOps, M.g.ContentTakedown, M.g.CopyrightTakedown, M.g.Reddit].indexOf(e.removedByCategory) > -1 ? n.REMOVED : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : e.isSpam ? n.SPAM : (null === (t = e.modQueueTriggers) || void 0 === t ? void 0 : t.length) || e.bannedBy === c.m ? n.FILTERED : n.UNMODERATED
			};
			var D = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				F = s.n(D),
				B = s("./src/lib/classNames/index.ts"),
				U = s("./src/reddit/components/HumanDate/index.tsx"),
				V = s("./src/reddit/components/UserIcon/index.tsx"),
				W = s("./src/reddit/helpers/name/index.ts"),
				H = s("./src/reddit/selectors/user.ts"),
				q = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				K = s.n(q);
			const G = e => {
				let {
					content: t
				} = e;
				var s;
				const n = Object(a.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(H.Bb)(e, {
					userName: null == t ? void 0 : t.approvedBy
				}) : null);
				if (!n) return null;
				const r = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: K.a.userIconWrapper
				}, i.a.createElement(V.a, {
					className: Object(B.a)(K.a.userIcon),
					iconUrl: null == n ? void 0 : n.accountIcon,
					userName: null == n ? void 0 : n.username,
					isNSFW: null == n ? void 0 : n.isNSFW
				})), i.a.createElement("div", {
					className: K.a.statusText
				}, i.a.createElement("p", {
					className: K.a.status
				}, o.fbt._("Approved", null, {
					hk: "4d15LY"
				})), i.a.createElement("p", null, Object(W.e)(null == n ? void 0 : n.username), r && i.a.createElement(i.a.Fragment, null, " ", i.a.createElement(U.d, {
					seconds: r
				})))))
			};
			var z = s("./src/reddit/models/ModQueueTrigger/index.ts");
			const Y = e => {
				let {
					content: t
				} = e;
				const s = Object(r.useMemo)(() => {
					var e;
					const s = [];
					(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== c.m || s.push({
						icon: "bot_fill",
						heading: o.fbt._("Blocked by AutoMod", null, {
							hk: "XZuzM"
						})
					});
					for (const n of t.modQueueTriggers || []) switch (n.type) {
						case z.a.AUTOMOD:
							s.push({
								icon: "bot_fill",
								heading: o.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								}),
								reason: n.message
							});
							break;
						case z.a.SHADOWBANNED_SUBMITTER:
							s.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "47ub6E"
								}),
								reason: n.message
							});
							break;
						case z.a.HATEFUL_CONTENT:
							s.push({
								icon: "mod_mode_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "42FKya"
								}),
								reason: n.message
							});
							break;
						case z.a.CROWD_CONTROL:
							s.push({
								icon: "crowd_control",
								heading: o.fbt._("Blocked by crowd control", null, {
									hk: "iFsfG"
								}),
								reason: n.message
							});
							break;
						case z.a.BAN_EVASION:
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
				return i.a.createElement("div", {
					className: K.a.filteredWrapper
				}, s.map((e, t) => {
					let {
						heading: s,
						reason: n,
						icon: o
					} = e;
					return i.a.createElement("div", {
						key: `${s}-${n}-${t}`,
						className: K.a.filteredRow
					}, i.a.createElement(j.a, {
						isFilled: !0,
						name: o,
						className: Object(B.a)(K.a.coloredIcon, K.a.icon)
					}), i.a.createElement("div", {
						className: K.a.statusText
					}, i.a.createElement("p", {
						className: K.a.status
					}, s), n && i.a.createElement("p", null, n)))
				}))
			};
			var Q = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				J = s("./src/reddit/selectors/subreddit.ts");
			const Z = e => {
				let {
					content: t
				} = e;
				var s;
				const n = Object(a.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(H.Bb)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					r = Object(v.b)(t),
					c = Object(a.e)(e => Object(J.Y)(e, {
						subredditId: r ? t.belongsTo.id : t.subredditId
					})),
					d = r && t.removedByCategory ? t.removedByCategory : null,
					l = d ? Object(Q.b)(d) : "clear_fill",
					u = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null;
				return i.a.createElement(i.a.Fragment, null, n ? i.a.createElement("div", {
					className: K.a.userIconWrapper
				}, i.a.createElement(V.a, {
					className: Object(B.a)(K.a.userIcon),
					iconUrl: null == n ? void 0 : n.accountIcon,
					userName: null == n ? void 0 : n.username,
					isNSFW: null == n ? void 0 : n.isNSFW
				})) : i.a.createElement(j.a, {
					isFilled: !0,
					name: l,
					className: Object(B.a)(K.a.coloredIcon, K.a.icon)
				}), i.a.createElement("div", {
					className: K.a.statusText
				}, i.a.createElement("p", {
					className: K.a.status
				}, o.fbt._("Removed{spam}{reason}", [o.fbt._param("spam", t.isSpam ? " as spam" : ""), o.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), i.a.createElement("p", null, (null == n ? void 0 : n.username) ? i.a.createElement(i.a.Fragment, null, Object(W.e)(null == n ? void 0 : n.username), u && i.a.createElement(i.a.Fragment, null, " ", i.a.createElement(U.d, {
					seconds: u
				}))) : d && Object(Q.f)(d, c.name))))
			};
			var X = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				$ = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				te = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var se = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				ne = (s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx"), s("./src/reddit/icons/fonts/Menu/index.tsx"), s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx"), s("./src/reddit/icons/fonts/Op/index.m.less")),
				oe = s.n(ne),
				re = s("./src/lib/lessComponent.tsx");
			re.a.wrapped(e => i.a.createElement("i", {
				className: `${Object(te.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, i.a.createElement(te.a, null, e.desc)), "OpIcon", oe.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var ie = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				ae = s.n(ie);
			re.a.wrapped(e => i.a.createElement("i", {
				className: `${Object(te.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", ae.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var ce = s("./src/reddit/icons/fonts/Report/index.tsx"),
				de = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				le = s.n(de);
			re.a.wrapped(e => i.a.createElement("i", {
				className: `${Object(te.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", le.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const ue = e => {
					let {
						content: t
					} = e;
					const s = Object(ee.b)(),
						n = Object(a.d)(),
						c = Object(r.useCallback)(() => {
							const e = Object(v.a)(t.id),
								o = e ? w.fb : S.g,
								r = t.ignoreReports ? "restore_reports" : "ignore_reports",
								i = e ? Object(g.j)(r, t.id) : Object(g.i)(r, t.id);
							n(o(t.id)), s(i)
						}, [t.id, t.ignoreReports, s, n]),
						d = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(j.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(B.a)(K.a.coloredIcon, K.a.icon)
					}), i.a.createElement("div", {
						className: K.a.reportedWrapper
					}, !!t.modReports.length && i.a.createElement("div", {
						className: K.a.statusText
					}, i.a.createElement("p", {
						className: K.a.status
					}, o.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [o.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return i.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object(W.e)(n), ": ", s)
					})), !!t.userReports.length && i.a.createElement("div", {
						className: K.a.statusText
					}, i.a.createElement("div", {
						className: K.a.reportMeta
					}, i.a.createElement("p", {
						className: K.a.status
					}, o.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [o.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !d && i.a.createElement($.c, {
						className: K.a.ignoreButton,
						onClick: c,
						text: t.ignoreReports ? o.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : o.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? i.a.createElement(ce.a, {
						className: K.a.ignoreButtonIcon
					}) : i.a.createElement(se.a, {
						className: K.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, o, r, a] = e;
						return n ? void 0 !== r && a ? i.a.createElement(X.a, {
							key: `user-${n}`,
							reason: n,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: r,
							useNewFormat: !0,
							className: K.a.snoozabledButton,
							dropdownClassName: K.a.snoozableDropdown,
							iconClassName: K.a.snoozeIcon
						}) : i.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", o, ")") : null
					}))))
				},
				me = e => {
					let {
						content: t
					} = e;
					const s = L(t),
						o = Object(r.useMemo)(() => {
							switch (s) {
								case n.APPROVED:
									return i.a.createElement(G, {
										content: t
									});
								case n.REMOVED:
								case n.SPAM:
									return i.a.createElement(Z, {
										content: t
									});
								case n.FILTERED:
									return i.a.createElement(Y, {
										content: t
									});
								case n.REPORTED:
									return i.a.createElement(ue, {
										content: t
									});
								default:
									return i.a.createElement(r.Fragment, null)
							}
						}, [s, t]);
					return s === n.UNMODERATED ? null : i.a.createElement("div", {
						className: Object(B.a)(K.a.wrapper, {
							[K.a.approved]: s === n.APPROVED,
							[K.a.reported]: s === n.REPORTED
						})
					}, o)
				},
				pe = (e, t) => Object(g.b)(t, e),
				be = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: M
					} = e;
					const D = Object(C.a)(),
						B = Object(a.d)(),
						U = L(t),
						V = Object(a.e)(P.b),
						W = Object(a.e)(R.b),
						H = Object(v.b)(t),
						q = Object(a.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						K = Object(a.e)(e => Object(A.m)(e, {
							postId: t.id
						})),
						G = Object(x.a)(K),
						z = Object(O.a)(K),
						Y = [n.REPORTED, n.FILTERED, n.UNMODERATED].includes(U),
						Q = [n.APPROVED, n.UNMODERATED, n.REPORTED].includes(U),
						J = H && z,
						Z = U === n.REMOVED && !t.modRemovalReason,
						X = U === n.FILTERED,
						$ = !H,
						ee = [n.REMOVED, n.SPAM].indexOf(U) > -1,
						te = Object(r.useCallback)(e => {
							D(Object(E.k)(t.id, e, "post", s, M, void 0))
						}, [D, s, M, t]),
						se = H ? E.k : pe,
						ne = Object(r.useCallback)(() => {
							const e = H ? w.r : S.a;
							B(e(t.id)), D(se(t.id, "approve"))
						}, [D, B, t, H, se]),
						oe = Object(r.useCallback)(() => {
							const e = H ? w.T : S.e;
							B(e(t.id, !1)), t.isRemoved && t.bannedBy === c.m ? D(se(t.id, "confirm_remove")) : D(se(t.id, "remove"))
						}, [D, B, t, H, se]),
						re = Object(r.useCallback)(() => {
							B(Object(T.fetchReasonsAndOpenModal)(H ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, H, B]),
						ie = Object(r.useCallback)(() => {
							const e = H ? w.D : S.c;
							B(e(t.id)), D(se(t.id, t.isLocked ? "unlock" : "lock"))
						}, [se, D, B, t, H]),
						ae = Object(r.useCallback)(() => {
							B(Object(y.i)(Object(u.b)(t.id, !1))), D(Object(E.k)(t.id, "post_flair_picker"))
						}, [D, B, t]),
						ce = Object(r.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							H && B(Object(N.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [B, H, t]),
						de = Object(r.useCallback)(() => {
							H && (B(Object(w.hb)(t.id)), D(Object(g.l)(t.isStickied ? "unsticky" : "sticky", t.id)))
						}, [D, B, t, H]),
						le = Object(r.useCallback)(() => {
							H && (B(Object(w.I)(t.id)), D(Object(g.l)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [D, B, t, H]),
						ue = Object(r.useCallback)(() => {
							H && (B(Object(w.F)(t.id)), Object(g.l)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [B, t, H]),
						be = Object(r.useCallback)(() => {
							H && (B(Object(y.i)(p.a.CROWD_CONTROL)), B(Object(w.t)(t.id)))
						}, [B, t, H]),
						fe = Object(r.useCallback)(() => {
							H && (B(Object(w.C)(t.permalink)), te("copy"))
						}, [te, B, t, H]),
						he = Object(r.useCallback)(async () => {
							if (!H) return;
							const e = Object(h.d)(h.a.GildingFlow, !0);
							B(Object(k.d)({
								awardId: null == V ? void 0 : V.id,
								correlationId: e,
								thingId: t.id
							})), D(Object(_.clickGildEvent)(t.id))
						}, [D, B, t, V, H]),
						Oe = Object(r.useCallback)(() => {
							B(Object(I.c)(t.id)), te("report")
						}, [te, B, t]),
						xe = Object(r.useCallback)(() => {
							var e;
							H && (B(Object(w.eb)(t.id, !t.hidden, !1, !0)), te((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [te, B, t, H]),
						ve = Object(r.useCallback)(() => {
							H && (B(Object(w.T)(t.id, !1)), D(Object(g.l)("spam", t.id)))
						}, [D, B, t, H]);
					return i.a.createElement("div", {
						className: F.a.wrapper,
						"data-testid": "modqueue-action-bar"
					}, i.a.createElement(me, {
						content: t
					}), i.a.createElement("div", {
						className: F.a.actionBar
					}, Y && i.a.createElement(b.t, {
						className: [F.a.button, F.a.approve].join(" "),
						Icon: Object(j.b)("checkmark"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: ne,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), Q && i.a.createElement(b.t, {
						className: F.a.button,
						Icon: Object(j.b)("close"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: oe,
						text: o.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), Z && i.a.createElement(b.t, {
						className: F.a.button,
						onClick: re,
						text: o.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), X && i.a.createElement(b.t, {
						className: F.a.button,
						Icon: Object(j.b)("close"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: oe,
						text: o.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), ee && i.a.createElement(b.t, {
						className: F.a.button,
						Icon: Object(j.b)("checkmark"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: ne,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), $ && i.a.createElement(b.t, {
						className: F.a.button,
						priority: t.isLocked ? b.c.Primary : b.c.Plain,
						Icon: Object(j.b)("lock"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: ie,
						text: t.isLocked ? o.fbt._("Unlock", null, {
							hk: "sdpF2"
						}) : o.fbt._("Lock", null, {
							hk: "1HN654"
						})
					}), J && i.a.createElement(b.t, {
						className: F.a.button,
						Icon: Object(j.b)("tag"),
						priority: b.c.Plain,
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: ae,
						text: o.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), H && W === Object(u.b)(t.id, !1) && i.a.createElement(u.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(u.b)(t.id, !1),
						onFlairChanged: ce
					}), H && i.a.createElement(l.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: F.a.overflowButton,
						icon: i.a.createElement(j.a, {
							name: "overflow_horizontal",
							isFilled: !0
						})
					}, i.a.createElement("h6", {
						className: F.a.overflowHeading
					}, o.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && i.a.createElement(i.a.Fragment, null, i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						displayText: o.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ve
					}, i.a.createElement(j.a, {
						name: "spam"
					})), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : o.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: de
					}, i.a.createElement(j.a, {
						name: t.isStickied ? "unpin" : "pin"
					}))), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						onClick: ie,
						displayText: (null == t ? void 0 : t.isLocked) ? o.fbt._("Unlock Comments", null, {
							hk: "zGuti"
						}) : o.fbt._("Lock Comments", null, {
							hk: "1QO9cp"
						})
					}, i.a.createElement(j.a, {
						name: "lock",
						isFilled: null == t ? void 0 : t.isLocked
					})), !t.crosspostParentId && i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						onClick: le,
						displayText: t.isOriginalContent ? o.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : o.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, i.a.createElement(j.a, {
						name: "original"
					})), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						onClick: ue,
						displayText: t.isNSFW ? o.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : o.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, i.a.createElement(j.a, {
						name: "nsfw"
					})), G && "subreddit" === t.belongsTo.type && i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						displayText: o.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: be
					}, i.a.createElement(j.a, {
						name: "crowd_control"
					})), i.a.createElement("h6", {
						className: F.a.overflowHeading
					}, o.fbt._("Other", null, {
						hk: "2543kN"
					})), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						displayText: o.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: fe
					}, i.a.createElement(j.a, {
						name: "share"
					})), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						onClick: he,
						displayText: o.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, i.a.createElement(j.a, {
						name: "award"
					}), i.a.createElement(d.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						displayText: o.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: Oe
					}, i.a.createElement(j.a, {
						name: "report"
					})), i.a.createElement(f.b, {
						className: F.a.dropdownRow,
						onClick: xe,
						displayText: t.hidden ? o.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : o.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, i.a.createElement(j.a, {
						name: "hide"
					}))), q && i.a.createElement(m.a, {
						withOverlay: !0,
						postId: t.id
					})))
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
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: n
				}, o.a.createElement(c.a, {
					name: "notification",
					isFilled: s,
					className: l.a.icon,
					"aria-label": u
				})), d && o.a.createElement(i.a, {
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(a.b, {
					className: Object(r.a)(u.a.RecommendationContextStyles, {
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
				o = s("./src/reddit/components/HumanDate/index.tsx"),
				r = s("./src/lib/timeUntil/index.ts"),
				i = s("./node_modules/react/index.js"),
				a = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(o.d, {
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
				i = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
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
			t.a = Object(c.a)(Object(i.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: i,
					post: c,
					redditStyle: l,
					theme: p,
					...b
				} = e;
				return o.a.createElement("div", m({
					className: Object(r.a)(u.a.backgroundWrapper, s),
					style: Object(a.c)(n, e),
					onClick: i,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
			}))
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, s) {
			e.exports = {
				adminIcon: "_1cje4rrmwL0yZgCOlGyBJ-",
				approveIcon: "_1knR9NIIXdSFC9IeFN11JL",
				automoderator: "_2etEb_0bRB9axAqF3uX28S",
				icon: "_3vju76MdF2FaGmELBeiJ_r",
				lockIcon: "_3wTfn3Meg1rXJ-qd2jUWMt",
				modIcon: "_SMl46gACTEszA_4A0Qfs",
				removeIcon: "_3yuF1RnBRJL4OS_STsoXcC",
				reportIcon: "_3guZWUAROueft8TPPGDZ-R",
				spamIcon: "_2BWw37nLL0rX6n7xcXciyD",
				stickyIcon: "NI8uZ-19oHf9gPO8jOvFu",
				addRemovalReason: "COGitU-ItwLZG_fP5rsdE",
				isRemoved: "_27iLVqax1FuPWTymkSkKAq",
				archivedIcon: "_2WSiH2JwZq4bXuvrDn-cgU",
				removalReason: "_16Ih3bzeELRlI6AWeW-nFy"
			}
		},
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/constants/index.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				b = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/helpers/isRemoved.ts"),
				h = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				O = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				x = s("./src/reddit/icons/fonts/index.tsx"),
				v = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				_ = s("./src/reddit/icons/fonts/Archived/index.tsx"),
				g = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				E = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				C = s("./src/reddit/icons/fonts/Report/index.tsx"),
				j = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				S = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				k = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/selectors/modQueue.ts"),
				w = s("./src/reddit/selectors/posts.ts"),
				N = s("./src/reddit/components/PostBadges/index.m.less"),
				T = s.n(N);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const R = e => r.a.createElement("span", I({
					className: T.a.removalReason
				}, e), e.children),
				P = () => n.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				A = () => n.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				M = e => n.fbt._("Moderator of {community name}", [n.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				L = () => n.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				D = () => n.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				F = (e, t, s) => {
					const n = `PostBadges--${e}--${t}`;
					return s ? `${n}--${s}` : n
				},
				B = Object(b.u)({
					isProfilePostListing: b.L,
					isSubreddit: b.O
				}),
				U = Object(a.c)({
					isModQueueDisplayEnabled: y.b,
					isPinned: (e, t) => {
						let {
							post: s
						} = t;
						return Object(w.q)(e, {
							postId: s.id
						})
					},
					modModeEnabled: b.U
				}),
				V = Object(i.b)(U, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = B(V(e => {
				let {
					className: t,
					displayText: s,
					isSubreddit: i,
					inSubredditOrProfile: a,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: y,
					modModeEnabled: w,
					onHideTooltip: N,
					onOpenRemovalReasonModal: B,
					onShowTooltip: U,
					post: V,
					tooltipType: W,
					isModQueueDisplayEnabled: H
				} = e;
				const q = {
						caretOnTop: !1
					},
					K = V.isRemoved && !V.modRemovalReason && !V.modNote && V.belongsTo.type === p.a.SUBREDDIT,
					G = F("Approve", V.id, W),
					z = F("Archived", V.id, W),
					Y = F("Lock", V.id, W),
					Q = F("Mod", V.id, W),
					J = F("Remove", V.id, W),
					Z = F("Report", V.id, W),
					X = F("Spam", V.id, W),
					$ = F("Sticky", V.id, W),
					ee = F("Pinned", V.id, W);
				return r.a.createElement("div", {
					className: t
				}, a && s && V.distinguishType === d.J.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(x.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.modIcon)
				}), r.a.createElement(u.c, I({
					tooltipId: Q,
					text: M(s)
				}, q))), V.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.archivedIcon),
					desc: P(),
					id: z,
					onMouseEnter: U(z),
					onMouseLeave: N
				}), r.a.createElement(u.c, I({
					tooltipId: z,
					text: P()
				}, q))), V.isLocked && !V.isSponsored && r.a.createElement(o.Fragment, null, r.a.createElement(g.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.lockIcon),
					desc: A(),
					id: Y,
					onMouseEnter: U(Y),
					onMouseLeave: N
				}), r.a.createElement(u.c, I({
					tooltipId: Y,
					text: A()
				}, q))), i && Object(k.v)(V) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(S.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.stickyIcon),
					desc: L(),
					id: $,
					onMouseEnter: U($),
					onMouseLeave: N
				}), r.a.createElement(u.c, I({
					tooltipId: $,
					text: L()
				}, q))), y && b && r.a.createElement(o.Fragment, null, r.a.createElement(S.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.stickyIcon),
					desc: D(),
					id: ee,
					onMouseEnter: U(ee),
					onMouseLeave: N
				}), r.a.createElement(u.c, I({
					tooltipId: ee,
					text: D()
				}, q))), !H && r.a.createElement(r.a.Fragment, null, (V.isApproved || V.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(v.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.approveIcon),
					desc: Object(h.a)(V),
					id: G,
					onMouseEnter: U(G),
					onMouseLeave: N
				}), r.a.createElement(u.c, I({
					tooltipId: G,
					text: Object(h.a)(V)
				}, q))), Object(f.a)(V) && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.removeIcon),
					desc: Object(h.b)(V),
					id: J,
					onMouseEnter: U(J),
					onMouseLeave: N
				}), K && r.a.createElement(m.a, {
					className: T.a.addRemovalReason,
					onClick: B,
					text: n.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (V.modRemovalReason || V.modNote) && r.a.createElement(R, {
					onMouseEnter: U(J),
					onMouseLeave: N
				}, n.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(u.c, I({
					tooltipId: J,
					text: Object(h.b)(V)
				}, q))), V.bannedBy && V.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.spamIcon),
					desc: Object(h.d)(V),
					id: X,
					onMouseEnter: U(X),
					onMouseLeave: N
				}), r.a.createElement(u.c, I({
					tooltipId: X,
					text: Object(h.d)(V)
				}, q)))), Object(O.a)(V) && !w && !H && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					isFilled: !0,
					className: Object(c.a)(T.a.icon, T.a.reportIcon),
					desc: Object(h.c)(V.numReports),
					id: Z,
					onMouseEnter: U(Z),
					onMouseLeave: N
				}), r.a.createElement(u.c, I({
					tooltipId: Z,
					text: Object(h.c)(V.numReports)
				}, q))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, s) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				a = s("./src/reddit/components/AdViewability/index.tsx"),
				c = s("./src/reddit/helpers/trackers/gallery.ts"),
				d = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = s("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(n.useRef)(null),
						s = Object(l.a)(),
						r = Object(n.useCallback)(t => {
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
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/connectors/PostViewable/index.ts"),
				b = s("./src/reddit/models/Media/index.ts"),
				f = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/telemetry.ts"),
				O = s("./src/lib/classNames/index.ts"),
				x = s("./src/lib/objectSelector/index.ts"),
				v = s("./src/higherOrderComponents/withClickTracking/index.tsx"),
				_ = s("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				g = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				E = s("./src/reddit/components/PostContainer/index.m.less"),
				C = s.n(E);
			const j = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(x.a)((e, t) => {
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
				S = "post-container";
			class k extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: s,
						className: n,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: f,
						style: h,
						ref: x,
						shouldAddGalleryViewability: v = !0
					} = this.props, _ = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: h,
						ref: x,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: s => {
							if (!this.cancelClick && s.button < 2 && e(() => m && m(s, l, t, r, p))(s), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && f(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(O.a)(C.a.WrappedPost, n, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": S,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": g.a.BACKGROUND
					}, s), E = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.E)(l.media) && v ? o.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || E ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(_))
				}
			}
			t.b = j(Object(_.a)(Object(v.a)(Object(m.c)(k))))
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/helpers/trackers/postCollection.ts"),
				m = s("./src/reddit/components/PostFollow/index.m.less"),
				p = s.n(m);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: s,
								isFollowed: n
							},
							sendEvent: o
						} = this.props, r = !!n;
						o(e ? Object(u.o)({
							postId: s,
							isFollowed: r
						}) : Object(u.g)({
							postId: s,
							isFollowed: r
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
					} = this.props, o = this.state.isHovered, i = s.isFollowed;
					let a = i ? n.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : n.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = n.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
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
					onFollow: () => e(Object(d.z)(s.isSponsored ? s.postId : s.id))
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
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
					isOverlay: O,
					isVoteCountAnimation: x,
					postId: v,
					shouldShowUpvoteRatioOnHover: _
				} = e, g = `upvote-button-${t.id}${O?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, n && o.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(a.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: g,
					isVoteCountAnimation: x,
					isCountAnimShadowTestEnabled: p,
					postId: v,
					scoreClassName: Object(r.a)(m.a.score, {
						[m.a.allowPointerEvents]: _
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
				return D
			})), s.d(t, "a", (function() {
				return Q
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				O = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/helpers/path/index.ts"),
				v = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				_ = s("./src/reddit/hooks/useClickSourceData.ts"),
				g = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				E = s("./src/reddit/hooks/usePostContext.ts"),
				C = s("./src/reddit/hooks/useTheme.ts"),
				j = s("./src/reddit/icons/fonts/index.tsx"),
				S = s("./src/reddit/models/Flair/index.ts"),
				k = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				w = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				N = s("./src/lib/getShortenedLink.ts"),
				T = s("./src/reddit/components/FlairWrapper/index.tsx"),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				R = s("./src/lib/prettyPrintNumber/index.ts"),
				P = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				A = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				M = s.n(A);
			const L = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var D, F = Object(a.b)(L)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(g.a)() ? null : i.a.createElement("div", {
						className: Object(u.a)(e.className, M.a.proposalMetaData)
					}, i.a.createElement("span", null, I.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [I.fbt._param("count", Object(R.a)(n)), I.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(P.a, {
						className: M.a.proposalExpiry,
						poll: t
					}))
				})),
				B = s("./src/reddit/components/SEOTitle/index.tsx"),
				U = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				V = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				H = s("./src/telemetry/models/Outbound.ts"),
				q = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				K = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				G = s("./src/reddit/components/PostTitle/index.m.less"),
				z = s.n(G);

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
			}(D || (D = {}));
			const Q = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: o,
						children: r,
						className: a,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(C.a)();
					let m = "";
					switch (t) {
						case D.ExtraLarge:
							m = z.a.ExtraLarge;
							break;
						case D.Large:
							m = z.a.Large;
							break;
						case D.Medium:
							m = z.a.Medium;
							break;
						case D.Small:
							m = z.a.Small;
							break;
						case D.ExtraSmall:
							m = z.a.ExtraSmall;
							break;
						case D.Metadata:
							m = z.a.Metadata
					}
					return i.a.createElement("div", {
						className: Object(u.a)(z.a.Title, a, m, {
							[z.a.isNoWrap]: o,
							[z.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": s || Object(w.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, n ? i.a.createElement(B.b, {
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
					return i.a.createElement(c.a, Y({}, r, {
						className: Object(u.a)(t, z.a.styledLink, {
							[z.a.isVisitedEnabled]: !s
						})
					}), o)
				},
				Z = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: o
					} = e;
					return i.a.createElement("div", {
						className: Object(u.a)(z.a.titleContainer, n, {
							[z.a.isNoWrap]: s,
							[z.a.isVisitedEnabled]: !t
						})
					}, o)
				},
				X = Object(d.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: s
						} = t;
						return Object(p.q)(e, {
							pageLayer: s
						})
					},
					isNsfwBlurSubreddit: V.e,
					shouldOpenPostInNewTab: W.kb
				}),
				$ = e => {
					const {
						post: t,
						subreddit: s
					} = e, {
						isSponsored: n
					} = t, o = Object(a.d)(), r = Object(_.a)(), c = Object(a.e)(U.b), d = Object(a.e)(U.c), u = e => {
						!c && !d || t.media && Object(k.H)(t.media) || (e.preventDefault(), o(Object(O.ab)(Object(x.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(Z, {
						nowrap: e.nowrap
					}, i.a.createElement(ee, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: n,
						postId: t.id,
						source: t.source
					}, i.a.createElement(ee, e)); {
						const o = t.media && Object(k.H)(t.media) ? Object(v.c)(t.id, s.name) : t.permalink,
							a = e.isCommentPermalink ? Object(x.b)(o) : Object(h.a)(o, void 0, r);
						return i.a.createElement(Z, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, n ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? i.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, i.a.createElement(ee, t)) : i.a.createElement(ee, t)
						})(t, e) : i.a.createElement(J, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: a,
							onClick: u
						}, i.a.createElement(ee, e)))
					}
				},
				ee = e => {
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
						a = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return i.a.createElement(Q, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: a,
						size: e.size,
						titleColor: e.titleColor,
						titleType: r
					}, t && i.a.createElement(T.a, {
						titleFlair: t,
						nowrap: !0,
						post: n,
						sendEvent: e.sendEvent
					}), o)
				},
				te = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: s,
						post: n
					} = e, {
						isSponsored: o
					} = n, r = e.isCommentsPage ? H.SourceElement.PostLink : H.SourceElement.ListingPostLink;
					if (Object(g.a)()) return null;
					if (s && n.isNSFW) return null;
					const a = !t && !e.isCrosspost && e.size !== D.Large && !n.isSponsored && !(n.media && Object(k.H)(n.media)) && (n.source || n.media && (n.media.type === k.o.GIFVIDEO || n.media.type === k.o.IMAGE || n.media.type === k.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return i.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(k.D)(n),
							isSponsored: o,
							postId: n.id,
							source: n.source,
							sourceElement: r
						}, Object(N.a)(n), !n.isSponsored && i.a.createElement(j.a, {
							name: "external_link",
							className: z.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== D.Large && e.size !== D.ExtraLarge) return i.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: o,
						postId: n.id,
						source: n.source,
						sourceElement: r
					}, Object(N.a)(n), !n.isSponsored && i.a.createElement(j.a, {
						name: "external_link",
						className: z.a.outboundLinkIcon
					}));
					return null
				};
			class se extends i.a.Component {
				getDynamicStyleTags() {
					return i.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${z.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(o.c)(.45,Object(w.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(o.c)(.45,this.props.titleColor||Object(w.a)(this.props).titleText,Object(w.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(o.c)(.45,Object(w.a)(this.props).bodyText,Object(w.a)(this.props).body)};\n        }\n      `
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
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = s === S.b.Left, b = Object(T.b)(c), {
						leftFlair: f,
						rightFlair: h
					} = Object(q.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), O = !r && !o && !t, x = O && f && f.length > 0, v = O && h && h.length > 0;
					return i.a.createElement("div", {
						className: Object(u.a)(z.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": K.a.TITLE,
						onClick: m
					}, !d && x && i.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(y.b)(c) && i.a.createElement($, Y({}, this.props, {
						leftFlair: d ? f : void 0
					})), a && i.a.createElement(F, {
						className: z.a.pollMeta,
						pollId: a.id
					}), i.a.createElement(te, this.props), v && i.a.createElement(T.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), i.a.createElement("div", {
						className: z.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = i.a.memo((function(e) {
				const t = Object(p.eb)(),
					s = Object(p.w)(t),
					n = Object(E.a)(),
					o = Object(a.e)(o => X(o, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					r = Object(C.a)(),
					c = Object(m.b)();
				return n ? i.a.createElement(se, Y({
					pageLayer: t,
					isCommentPermalink: s
				}, n, o, e, {
					theme: r,
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
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				O = s("./src/reddit/controls/Button/index.tsx"),
				x = s("./src/reddit/controls/OutboundLink/index.tsx"),
				v = s("./src/reddit/helpers/trackers/post.ts"),
				_ = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/PostTopLine/index.m.less"),
				S = s.n(j);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: o,
					hideNSFWPref: j,
					hostPostData: k,
					iconClassName: y,
					inSubredditOrProfile: w,
					isCommentsPage: N,
					isCompactPinnedPost: T,
					isCurrentUserProfilePost: I,
					isModWithUserNotesPermissions: R,
					isOverlay: P,
					isTopicPage: A,
					listingKey: M,
					post: L,
					shouldShowSubscribeButton: D,
					showCornerOutboundLink: F,
					showSubreddit: B,
					showSubredditIcon: U,
					subredditOrProfile: V,
					isFollowed: W,
					shouldShowFollowButton: H,
					onFollowPostClick: q
				} = e;
				const K = A,
					G = V && Object(E.i)(V),
					z = Object(i.e)(e => {
						if (!G) return !0;
						const t = Object(C.Hb)(e, L.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(S.a.container, t)
				}, B && V && r.a.createElement("div", {
					className: S.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: V.url
				}, U && r.a.createElement(p.b, {
					className: Object(a.a)(S.a.subredditIcon, y),
					shouldHideNsfwIcon: j,
					subredditOrProfile: V
				}))), r.a.createElement("div", {
					className: S.a.everythingElseWrapper
				}, B && r.a.createElement(d.h, {
					type: L.belongsTo.type,
					id: L.belongsTo.id
				}), r.a.createElement(m.g, {
					className: S.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: R,
					tooltipType: P ? m.f.Lightbox : void 0,
					post: L,
					showSub: B,
					subredditOrProfile: V
				}), r.a.createElement(u.a, {
					className: S.a.postBadges,
					displayText: V ? V.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: T,
					post: L,
					tooltipType: P ? m.f.Lightbox : void 0
				}), !K && r.a.createElement(c.a, {
					isPostDetail: N,
					thing: L,
					tooltipType: P ? m.f.Lightbox : void 0
				})), V && z && B && D && !I && r.a.createElement(f.a, {
					className: S.a.SubscribeButton,
					getEventFactory: e => Object(v.k)(L.id, e ? "unsubscribe" : "subscribe", "post", M, k),
					identifier: {
						name: V.name,
						type: G ? h.a.PROFILE : h.a.SUBREDDIT
					},
					postId: L.id,
					size: O.d.XS
				}), F && r.a.createElement(x.b, {
					isSponsored: L.isSponsored,
					postId: L.id,
					href: Object(g.D)(L),
					source: L.source
				}, r.a.createElement(_.a, {
					className: S.a.outboundLinkIcon
				})), H && z && r.a.createElement(l.a, {
					isFilled: !!W,
					onClick: q,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router/esm/react-router.js"),
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/actions/snoovatarModal.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = s("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = s("./src/reddit/models/Vote/index.ts"),
				f = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				h = s.n(f);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: s,
					isAvatarPost: a,
					post: f,
					share: x
				} = e;
				const v = Object(l.b)(),
					_ = Object(i.d)(),
					g = f && f.id,
					E = f && f.voteState;
				let C = null;
				g || (C = t ? "user_hovercard" : "profile_overview");
				const j = Object(o.useCallback)(() => v(Object(m.h)(t ? "user_hovercard" : "profile_overview", s)), [t, v, s]);
				return r.a.createElement(u.t, {
					onClick: () => {
						a ? (v(m.i), g && E === b.a.notVoted && _(Object(c.jb)(g))) : j();
						const e = a ? "postify" : "copy";
						_(Object(d.b)({
							clickSource: C,
							share: x,
							source: e
						}))
					},
					className: Object(n.a)(h.a.snoovatarButton, h.a.snoovatarExtraPadding, h.a.compactButtonLayout, {
						[h.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, r.a.createElement(p.a, {
					className: Object(n.a)({
						[h.a.shirtIcon]: !a,
						[h.a.avatarPostButtonShirtIcon]: a
					})
				}), O._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: h.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, s) {
			e.exports = {
				snoovatarButton: "_3F1tNW0P4Ff182mO_CefIg",
				avatarPostifyButton: "_2Viile0fcrruho_hQqpnUx",
				snoovatarExtraPadding: "_3DnDqV66Np6rVEiI8QK7kl",
				shirtIcon: "_3gYTHRBO1S_S5AOddgqD6Z",
				avatarPostButtonShirtIcon: "ARFP2bx6U967JwMoJ2Xr5",
				compactButtonLayout: "VFbNvXfZXUhRFiCTDHO6f",
				chevronIcon: "_12pWM-aURvVUuSrUyqfNZh"
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
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
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
				C = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				j = s.n(C);
			const {
				fbt: S
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = (e, t) => `SnoozableReport--${t}--${e}`, y = Object(r.b)(() => Object(i.c)({
				isDropdownOpen: (e, t) => Object(E.b)(k(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(u.h)({
					tooltipId: k(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(h.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, s)) : e(Object(l.gb)(t.reportedThingId, t.reason, s))
				}
			})), w = Object(m.a)(b.a);
			class N extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.kc.None : c.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(O.n)(Object(h.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
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
						isSnoozed: i,
						useNewFormat: c,
						className: d,
						dropdownClassName: l,
						iconClassName: u
					} = this.props, m = k(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(f.b, {
						id: m,
						className: Object(a.a)(j.a.DropdownLabelContainer, d),
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: m,
						className: j.a.DropdownLabel
					}, i ? S._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : c ? `${e} (${t})` : `${t}: ${e}`, r ? o.a.createElement(v.a, null) : o.a.createElement(x.a, null))), o.a.createElement(w, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: Object(a.a)(j.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: j.a.SnoozeButtonContent
					}, i ? o.a.createElement(o.a.Fragment, null, o.a.createElement(g.a, {
						className: u
					}), S._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(_.a, {
						className: u
					}), S._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = y(Object(p.c)(N))
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, s) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return y
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/ads/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/getShortenedLink.ts"),
				c = s("./node_modules/fbt/lib/FbtPublic.js");
			const d = 16765092,
				l = "https://i.redd.it/snoovatar",
				u = "snoovatars",
				m = "avatars";
			var p = s("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				b = s("./src/reddit/components/AvatarPost/index.m.less"),
				f = s.n(b);
			var h = e => {
					let {
						sourceUrl: t,
						username: s,
						post: n
					} = e;
					const [r, i] = new URL(t).pathname.split("/").slice(2), a = function(e) {
						return `${l}/${+e>=d?m:u}/shared/${e}.png`
					}(i);
					return o.a.createElement("div", {
						className: f.a.avatarPostContainer
					}, o.a.createElement("img", {
						className: f.a.avatarPostImage,
						src: a,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), o.a.createElement(p.a, {
						isHovercard: !1,
						username: s,
						isAvatarPost: !0,
						post: n,
						share: {
							username: r,
							avatarId: i
						}
					}))
				},
				O = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				x = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				v = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				_ = s("./src/reddit/components/SourceLink/index.m.less"),
				g = s.n(_),
				E = s("./src/lib/lessComponent.tsx"),
				C = s("./src/telemetry/models/Outbound.ts"),
				j = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const S = E.a.wrapped(v.a, "OutboundLinkIcon", g.a),
				k = E.a.div("SourceLinkWrapper", g.a);

			function y(e) {
				const {
					className: t,
					post: s,
					isCommentsPage: n,
					pageLayer: c
				} = e, d = n ? C.SourceElement.PostLink : C.SourceElement.ListingPostLink, {
					source: l
				} = s, u = s.isSponsored || Object(r.u)(c), m = Object(x.a)(s), p = Object(j.a)();
				return !l || p ? null : m ? o.a.createElement(h, {
					sourceUrl: l.url,
					username: s.author,
					post: s
				}) : o.a.createElement(k, {
					className: Object(i.a)({
						[g.a["m-comment"]]: n
					}, t)
				}, o.a.createElement(O.a, {
					href: l.url,
					isSponsored: u,
					postId: s.id,
					source: l,
					sourceElement: d
				}, Object(a.a)({
					...s,
					isSponsored: u
				}), o.a.createElement(S, {
					isFilled: !0
				})))
			}
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, s) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = s("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = s.n(o);
			const i = s("./src/lib/lessComponent.tsx").a.wrapped(n.a, "SubredditName", r.a);
			t.a = i
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, s) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
				i = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = s("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = s.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const m = s("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
			class p extends o.a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.setState({
							isHovered: !0
						})
					}, this.onMouseLeave = () => {
						this.setState({
							isHovered: !1
						})
					}, this.onClick = e => {
						const {
							props: t
						} = this;
						if (t.userIsSubscriber ? t.onUnsubscribe() : (this.setState({
								hasJustSubscribed: !0
							}), t.onSubscribe()), t.onClick && t.onClick(e), t.getEventFactory) {
							const e = t.getEventFactory(t.userIsSubscriber);
							e && t.sendEvent(e)
						}
					}, this.renderUnsubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...f
						} = this.props, h = this.state.isHovered, O = Object(c.a)({
							type: t.type,
							key: h ? "unsubscribe" : "subscribed"
						});
						return o.a.createElement(a.t, u({
							className: e,
							priority: f.shouldReverseColor ? a.c.Primary : a.c.Secondary,
							text: O,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: a.d.XSP
						}, f))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: s,
							onUnsubscribe: n,
							postId: r,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...f
						} = this.props, h = Object(c.a)({
							type: t.type,
							key: "subscribe"
						});
						return o.a.createElement(a.t, u({
							className: e,
							priority: f.shouldReverseColor ? a.c.Secondary : a.c.Primary,
							size: a.d.XSP,
							text: h,
							onClick: this.onClick
						}, f, {
							id: `subscribe-button-${r}`,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave
						}))
					}, this.state = {
						hasJustSubscribed: !1,
						isHovered: !1
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						small: e = !1,
						userIsSubscriber: t,
						doNotHideOtherSubscribeButtons: s
					} = this.props;
					return t ? this.state.hasJustSubscribed || s ? this.renderUnsubscribeButton() : e ? null : o.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(r.c)(p))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
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
					return r[o({
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
				return C
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
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
				O = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				x = s("./src/reddit/components/VerticalVotes/index.m.less"),
				v = s.n(x);
			const _ = Object(a.c)({
					isNightMode: h.eb,
					isAnimatingUpvotePostId: f.k
				}),
				g = Object(i.b)(_),
				E = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				C = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class j extends r.a.Component {
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
							isNightMode: o,
							isAnimatingUpvotePostId: i,
							shouldShowUpvoteRatioOnHover: a,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: f,
							containerRef: h,
							model: x,
							postId: _
						} = e,
						g = E(e),
						j = C(e),
						S = x.voteState,
						k = i === _;
					return r.a.createElement("div", {
						className: Object(c.a)(v.a.votesContainer, e.className),
						id: `vote-arrows-${x.id}`,
						ref: h
					}, g ? r.a.createElement(m.b, {
						"aria-label": n.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": S === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": O.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: S
					}) : r.a.createElement("button", {
						"aria-label": n.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": S === b.a.upvoted,
						className: Object(c.a)(l.n, f, {
							[v.a.bounceUp]: k
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": O.b.UPVOTE,
						id: e.upvoteTooltipId
					}, r.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: S
					})), !e.compact && p && r.a.createElement(u.a, {
						className: Object(c.a)(v.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: S,
						shouldShowUpvoteRatioOnHover: a,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!s,
						postId: _
					}), j ? r.a.createElement(m.a, {
						"aria-label": n.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": S === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": O.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: S
					}) : r.a.createElement("button", {
						"aria-label": n.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": S === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": O.b.DOWNVOTE
					}, r.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: S
					})))
				}
			}
			const S = Object(d.a)(g(j));
			t.a = S
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/subscription/index.ts"),
				i = s("./src/reddit/selectors/subreddit.ts");
			t.a = Object(n.b)(() => Object(o.c)({
				userIsSubscriber: i.kb
			}), (e, t) => {
				let {
					identifier: s
				} = t;
				return {
					onSubscribe: () => e(r.d([s], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([s], !1))
				}
			})
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			}));
			const n = "reddit",
				o = "reddit.ready",
				r = "reddit.urlChanged"
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/index.tsx"),
				a = s("./src/reddit/controls/Checkbox/index.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, o.a.createElement(i.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[c.a.redditStyle]: e.redditStyle,
					[c.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
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
				i = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = s.n(a);
			t.a = Object(n.memo)(Object(n.forwardRef)((e, t) => {
				const s = e.size || i.d.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, c.a[s], {
						[c.a.mActive]: e.on && !e.disabled || e.forceOn && e.on,
						[c.a.mDisabled]: e.disabled,
						[c.a.redditStyle]: e.redditStyle
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
					className: c.a.toggleDisplay
				}))
			}))
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/featureFlags/index.ts");

			function c(e, t, s) {
				const n = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n,
						...r
					} = e, i = r;
					return n ? o.a.createElement(t, i) : void 0 !== s ? o.a.createElement(s, i) : null
				})
			}
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/thumbnails.ts"),
				o = s("./src/reddit/models/Media/index.ts");

			function r(e, t) {
				return !(e.removedByCategory || !e.thumbnail || !e.thumbnail.url || e.thumbnail.url === n.a.SELF || e.thumbnail.url === n.a.NSFW || e.media && Object(o.E)(e.media) || t)
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, s) {
			"use strict";

			function n(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: s,
					memo: n,
					cta: o
				} = e;
				return t && s && n && o ? {
					subreddit: t,
					amount: s,
					memo: n,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			s.d(t, "b", (function() {
				return n
			})), s.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "h", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			})), s.d(t, "e", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			}));
			var n = s("./node_modules/lodash/map.js"),
				o = s.n(n),
				r = s("./src/lib/FocusTrap/index.ts");
			const i = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				a = e => {
					let t = e;
					do {
						if (i(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				c = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				d = () => c() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return o()(t, e => e.textContent || "")
				})() : null,
				l = (e, t) => {
					const s = document.createRange();
					return s.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, s) < 0 && e.compareBoundaryPoints(Range.START_TO_END, s) > 0
				},
				u = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const s = t.getRangeAt(0);
					if (!l(s, e)) return;
					const {
						startContainer: n,
						startOffset: o,
						endContainer: r,
						endOffset: i
					} = s, a = document.createRange();
					a.selectNode(e);
					let c = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, s) && (a.setStart(n, o), c = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, s) && (a.setEnd(r, i), c = !1), c) return [e];
					const d = document.createElement("div");
					return d.appendChild(a.cloneContents()), [...d.childNodes]
				},
				m = (e, t, s) => {
					let n = e;
					for (; n && (!s || !s(n));) {
						if (n && t(n)) return n;
						n = n.parentElement
					}
				},
				p = e => e && e.parentElement && m(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
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
				return i
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
				i = e => {
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
					return i
				})), s.d(t, "a", (function() {
					return a
				})), s.d(t, "c", (function() {
					return c
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
				i = () => o(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => {
					return !!o(n.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
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
				return O
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
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
				O = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
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
				return C
			})), s.d(t, "l", (function() {
				return j
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/helpers/correlationIdTracker.ts"),
				i = s("./src/reddit/models/PostDraft/index.ts"),
				a = s("./src/reddit/selectors/comments.ts"),
				c = s("./src/reddit/selectors/platform.ts"),
				d = s("./src/reddit/selectors/telemetry.ts"),
				l = s("./src/telemetry/index.ts"),
				u = s("./src/reddit/constants/richTextJson.ts");
			const m = e => {
					const t = Object(c.o)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(d.o)(e),
						screen: Object(d.bb)(e),
						subreddit: Object(d.jb)(e),
						post: t ? Object(d.K)(e, t) : null,
						profile: Object(d.T)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				p = async (e, t, n, o, r) => {
					const i = {
							commentId: r,
							commentsPageKey: n
						},
						c = r && Object(a.j)(e, i) || 0,
						{
							getFlairData: u
						} = await s.e("getFlairData").then(s.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts")),
						p = o ? "image" : void 0;
					return Object(l.a)({
						noun: "comment",
						...m(e),
						comment: r ? Object(d.h)({
							state: e,
							commentId: r,
							contentType: p
						}) : null,
						listing: Object(d.z)(e, void 0, {
							depth: c
						}),
						commentComposer: {
							editorMode: t
						},
						userFlair: u(e),
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
						parentId: i,
						uploadMetadata: a
					} = e;
					const c = m(t),
						d = r.type === n.Pb ? "karma_rate_limit" : r.fields && r.fields.length > 0 ? r.fields[0].msg : void 0,
						p = a ? "image" : function(e) {
							return e.includes(`"id":"${u.c}`)
						}("string" == typeof s ? s : JSON.stringify(s)) ? "giphy" : void 0;
					return Object(l.a)({
						...c,
						source: r.type === n.Pb ? "backend" : "comment_composer",
						actionInfo: {
							...c.actionInfo,
							reason: d
						},
						action: "error",
						noun: "comment",
						comment: {
							bodyText: s,
							parentId: i,
							postId: o,
							contentType: p
						},
						media: {
							mimetype: null == a ? void 0 : a.mimetype,
							size: null == a ? void 0 : a.size
						}
					})
				}, f = e => Object(l.a)({
					noun: "cancel",
					...m(e)
				}), h = (e, t) => {
					t === i.c.replyToPost && Object(l.a)({
						noun: "input",
						...m(e)
					})
				}, O = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.o)(t),
					screen: Object(d.bb)(t),
					subreddit: Object(d.jb)(t),
					post: Object(d.K)(t, e)
				}), x = e => Object(l.a)({
					noun: "edit",
					...m(e)
				}), v = e => Object(l.a)({
					noun: "save_edit",
					...m(e)
				}), _ = (e, t) => s => {
					const n = "image_upload" === e || "video_upload" === e;
					return {
						...m(s),
						noun: n ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, g = () => e => ({
					...m(e),
					action: "open",
					noun: "gif_tooltip"
				}), E = e => t => ({
					...m(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), C = () => e => ({
					...m(e),
					action: "select",
					noun: "gif_tooltip_result"
				}), j = () => e => ({
					...m(e),
					source: "comment_composer",
					action: "open",
					noun: "images_tooltip"
				})
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
				o = s("./src/reddit/helpers/parseUrl.ts"),
				r = s("./src/reddit/selectors/media.ts"),
				i = s("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, s) => ({
					gallery: i.s(e, t, s),
					post: i.K(e, t),
					...i.o(e)
				}),
				c = (e, t) => s => ({
					...a(s, e, t),
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.C(s, e)
				}),
				d = (e, t) => s => {
					const c = Object(o.a)(t),
						d = Object(r.d)(s, e) + 1;
					return {
						...a(s, e, d),
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.C(s, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						}
					}
				},
				l = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, s) => o => ({
					...a(o, e, s),
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
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
				return C
			})), s.d(t, "t", (function() {
				return j
			})), s.d(t, "j", (function() {
				return S
			})), s.d(t, "e", (function() {
				return k
			})), s.d(t, "x", (function() {
				return y
			})), s.d(t, "u", (function() {
				return w
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "s", (function() {
				return T
			})), s.d(t, "v", (function() {
				return I
			})), s.d(t, "w", (function() {
				return R
			}));
			var n = s("./src/reddit/models/ScheduledPost/index.ts"),
				o = s("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.o(e),
					screen: o.bb(e),
					subreddit: o.jb(e),
					userSubreddit: o.tb(e)
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
					scheduledPost: i(e)
				}),
				f = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: i(e)
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
				C = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				j = (e, t, s) => i => ({
					source: "post",
					action: "click",
					noun: Object(n.m)(e),
					...r(i),
					actionInfo: o.d(i, {
						settingValue: t ? "true" : "false",
						pageType: s ? "recurring_posts" : "scheduled_posts"
					})
				}),
				S = () => e => ({
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
				y = () => e => ({
					source: "recurring_post_composer",
					action: "view",
					noun: "recurring_post_composer",
					...r(e)
				}),
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: i(t)
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
					scheduledPost: i(t)
				}),
				I = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				R = () => (e, t) => {
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
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "g", (function() {
				return c
			})), s.d(t, "h", (function() {
				return d
			})), s.d(t, "i", (function() {
				return l
			})), s.d(t, "r", (function() {
				return u
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "n", (function() {
				return p
			})), s.d(t, "c", (function() {
				return b
			})), s.d(t, "f", (function() {
				return f
			})), s.d(t, "q", (function() {
				return O
			})), s.d(t, "e", (function() {
				return x
			})), s.d(t, "k", (function() {
				return v
			})), s.d(t, "m", (function() {
				return g
			})), s.d(t, "j", (function() {
				return E
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "p", (function() {
				return S
			})), s.d(t, "d", (function() {
				return k
			})), s.d(t, "a", (function() {
				return w
			})), s.d(t, "o", (function() {
				return N
			}));
			var n = s("./src/reddit/models/Gold/ProductOffer.ts"),
				o = s("./src/reddit/selectors/avatarMarketing.ts"),
				r = s("./src/reddit/selectors/telemetry.ts"),
				i = s("./src/reddit/selectors/user.ts");
			const a = {
					goldPurchase: {
						offerContext: n.a.AvatarNewGear
					}
				},
				c = e => t => {
					const s = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...r.o(t)
					};
					return Object(o.a)(t) && Object.assign(s, a), s
				},
				d = (e, t) => s => {
					const {
						id: n
					} = Object(i.Bb)(s, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...r.o(s),
						snoovatar: {
							userGenerated: n
						}
					}
				},
				l = e => ({
					...r.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: r.hb(e)
				}),
				u = e => ({
					...r.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: r.hb(e)
				}),
				m = e => ({
					...r.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: r.hb(e)
				}),
				p = e => ({
					source: "nav",
					action: "view",
					noun: "avatar_marketing",
					...r.o(e),
					...a
				}),
				b = e => ({
					source: "nav",
					action: "click",
					noun: "avatar_marketing",
					...r.o(e),
					...a
				}),
				f = e => t => ({
					...r.o(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				h = e => t => s => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...r.o(s),
					snoovatar: r.hb(s),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				O = h("view"),
				x = h("click"),
				v = h("dismiss"),
				_ = (e, t, s) => () => n => ({
					source: e,
					action: t,
					noun: s,
					...r.o(n),
					snoovatar: r.hb(n)
				}),
				g = _("anniversary_achievement", "view", "anniversary_achievement"),
				E = _("anniversary_achievement", "click", "close"),
				C = _("anniversary_achievement", "click", "equip"),
				j = e => () => t => ({
					...r.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				S = j("view"),
				k = j("click"),
				y = (e, t, s) => n => ({
					source: e,
					action: t,
					noun: s,
					...r.o(n),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: r.hb(n)
				}),
				w = e => y("onboarding", "click", e),
				N = () => y("avatar", "view", "onboarding")
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react-redux/es/index.js");
			const o = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				i = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var a = s("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(n.e)(t => {
				return !!(e => {
					let {
						adminId: t,
						subredditId: s,
						avatarShareUrl: n
					} = e;
					const a = i.test(n.trim()),
						c = o.includes(t),
						d = r.includes(s);
					return a && c && d
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(a.b)(t)
			})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
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
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("history", e.isFilled), e.className)
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
				i = s("./src/reddit/constants/colors.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				c = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = s.n(c);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || i.a.gold
				}
			}), "CoinIcon", d.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
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
				i = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("expand", e.isFilled), e.className)
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
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", a.a);
			t.a = c
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
				i = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = c
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
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live", e.isFilled), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
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
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				c = s.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(c.a.ModSettings, Object(i.b)("mod", e.isFilled), e.className)
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
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, s) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(r.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a)
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, s) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 12 12",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("g", null, o.a.createElement("polygon", {
				fill: "inherit",
				points: "11.0584 4.0602 6.0292 9.0894 1 4.0602 2.0608 3 6.0292 6.9684 9.9982 3"
			})))
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
				i = s("./src/reddit/icons/svgs/Clock/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.clock, e.className),
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
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Dropdown/index.m.less"),
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
			const d = e => {
				let {
					className: t,
					isSubreddit: s,
					...n
				} = e;
				return o.a.createElement("svg", c({
					className: Object(r.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !s
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n), o.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
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
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = function(e) {
				let {
					className: t
				} = e;
				return o.a.createElement("svg", {
					className: t,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("g", {
					fill: "inherit"
				}, o.a.createElement("path", {
					d: "M7 1.75a.486.486 0 01.487.4 2.574 2.574 0 005.085 0 .488.488 0 01.488-.4h1.583A.5.5 0 0115 1.9l3.951 4.09a.5.5 0 01-.006.7l-1.931 1.938a.5.5 0 01-.649.05l-1.482-1.084.007 10.156a.5.5 0 01-.5.5H5.385a.5.5 0 01-.5-.5l.007-10.156L3.7 8.626a.5.5 0 01-.677-.026L1.115 6.694a.5.5 0 01-.006-.7L5.06 1.9a.5.5 0 01.359-.153z"
				})))
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = s.n(i);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, o.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), o.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
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
				i = s("./src/reddit/icons/svgs/Undo/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.undo, e.className),
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
				return i
			})), s.d(t, "d", (function() {
				return a
			}));
			var n, o, r = s("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(n || (n = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[n.Loyalty]: r.a.First,
					[n.Achievement]: r.a.Second,
					[n.Cosmetic]: void 0
				},
				a = e => e === r.a.First ? n.Loyalty : e === r.a.Second ? n.Achievement : n.Cosmetic
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, s) {
			"use strict";
			var n;

			function o(e, t) {
				var s;
				return null === (s = e.modQueueTriggers) || void 0 === s ? void 0 : s.find(e => e.type === t)
			}
			s.d(t, "a", (function() {
					return n
				})), s.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(n || (n = {}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return d
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return u
			}));
			var n = s("./src/reddit/helpers/isPost.ts");
			const o = 50,
				r = 50,
				i = 1e4,
				a = 100;
			var c, d;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(c || (c = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(d || (d = {}));
			const l = e => 1 === e.length ? Object(n.a)(e[0]) ? d.Post : d.Comment : d.Bulk,
				u = (e, t) => {
					return {
						[t === d.Bulk ? "item_ids" : "item_id"]: e.itemId,
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
				return C
			})), s.d(t, "b", (function() {
				return j
			})), s.d(t, "m", (function() {
				return S
			})), s.d(t, "q", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				o = s("./src/reddit/models/GqlTopLevelField.ts"),
				r = s("./src/reddit/models/User/index.ts");
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
				u = e => e.__typename === r.c.AvailableRedditor,
				m = e => e.__typename === o.a.Subreddit;
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
			const C = e => {
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
				S = e => {
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
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === a.a.First ? n[c.a.Loyalty][o] : n[c.a.Achievement][o] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][o] : n[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? s.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
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
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, s) => {
					const n = t[e.id],
						o = t[s.id];
					return Object(i.b)(n, o)
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
		"./src/reddit/reducers/features/avatar/index.ts": function(e, t, s) {
			"use strict";
			var n, o, r = s("./node_modules/redux/es/redux.js"),
				i = s("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(n || (n = {})),
			function(e) {
				e[e.BACKGROUND = 0] = "BACKGROUND", e[e.ACCESSORY_BACK = 1] = "ACCESSORY_BACK", e[e.HAIR_BACK = 2] = "HAIR_BACK", e[e.BODY_BOTTOM = 3] = "BODY_BOTTOM", e[e.BODY = 4] = "BODY", e[e.ACCESSORY = 5] = "ACCESSORY", e[e.FACE_LOWER = 6] = "FACE_LOWER", e[e.FACE_UPPER = 7] = "FACE_UPPER", e[e.HAIR = 8] = "HAIR", e[e.HEAD_ACCESSORY = 9] = "HEAD_ACCESSORY"
			}(o || (o = {}));
			const a = {
				id: "",
				csrf_token: "",
				snoovatar: null,
				websocketsUrls: {
					renderer: "",
					download: ""
				},
				capabilities: [n.PREMIUM],
				hasActiveClosetSubscription: !1
			};
			var c = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.b:
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
						assetUrls: null,
						experimentRequired: null
					},
					quickCreateV1: {
						id: "-1",
						active: !1,
						text: "",
						min_days_on_reddit: 0,
						should_have_avatar: !1,
						max_event_views: 0,
						min_days_since_last_event_interaction: 0,
						webAssetUrls: []
					}
				},
				l = "avatar_quick_create_event",
				u = "avatar_marketing_event",
				m = "avatar_promo_archived",
				p = e => {
					const t = {};
					return e.forEach(e => {
						if (e.startsWith("targeting:")) {
							const s = e.split(":");
							if (!s.length && s.length < 3) return null;
							try {
								t[s[1]] = JSON.parse(s[2])
							} catch {
								t[s[1]] = s[2]
							}
						}
					}), t
				};

			function b(e) {
				if (!e) return d;
				const t = d;
				return e.forEach(e => {
					var s;
					const {
						startsAt: n,
						endsAt: o,
						webAssetUrls: r,
						tags: i
					} = e, a = n && new Date(n) <= new Date, c = !!o && new Date(o) < new Date, d = !!a && !c, b = (i || []).includes(m);
					if (i && i.includes(l) && !b) {
						const {
							text: s,
							id: n
						} = e, o = r || null, a = p(i);
						t && (t.quickCreateV1 = {
							...a,
							id: n,
							text: s,
							active: d && !!o,
							webAssetUrls: o
						})
					}
					if (i && i.includes(u) && !b) {
						const e = r || null,
							n = (null === (s = i.find(e => e.startsWith("feature:") && e.includes("web"))) || void 0 === s ? void 0 : s.split("feature:")[1]) || null;
						t && (t.marketingEvent = {
							active: d && !!e,
							assetUrls: e,
							experimentRequired: n
						})
					}
				}), t
			}
			var f = s("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				h = s("./src/reddit/actions/modal.ts"),
				O = s("./src/reddit/constants/modals.ts");
			var x = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var s;
				switch (t.type) {
					case f.s:
						const {
							avatarMarketingEvents: n
						} = t.payload;
						return n ? b(n) : d;
					case h.c:
						return (null === (s = t.payload) || void 0 === s ? void 0 : s.id) === O.a.SNOOVATAR_MODAL ? d : e;
					default:
						return e
				}
			};
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i.a: {
						const {
							image: e,
							accessory_ids: s
						} = t.payload;
						return {
							image: e,
							accessoryIds: s
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				marketing: x,
				avatarUser: c,
				randomAvatar: v
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return o
			})), s.d(t, "c", (function() {
				return r
			}));
			const n = (e, t) => {
					let {
						post: s
					} = t;
					const n = s.belongsTo.id;
					if (!n) return null;
					const o = e.authorFlair.models[n];
					if (!o) return null;
					const r = s.author;
					return r && o[r] || null
				},
				o = (e, t) => {
					let {
						subredditId: s
					} = t;
					const n = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!n) return null;
					if (!s) return null;
					const o = e.authorFlair.models[s];
					return o ? o[n] : null
				},
				r = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return a
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/avatar/index.ts");
			Object(n.a)({
				features: {
					avatar: o.a
				}
			});
			const r = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser
				},
				i = e => {
					var t, s;
					return null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.avatarUser.csrf_token
				},
				a = e => {
					var t, s;
					return (null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return a
			}));
			var n = s("./src/lib/initializeClient/installReducer.ts"),
				o = s("./src/reddit/reducers/features/avatar/index.ts"),
				r = s("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(n.a)({
				features: {
					avatar: o.a
				}
			});
			const i = e => {
					var t, s;
					return !!(null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.marketing)
				},
				a = e => {
					var t, s, n, o;
					const i = null === (n = null === (s = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === s ? void 0 : s.marketing) || void 0 === n ? void 0 : n.marketingEvent;
					if (!(null == i ? void 0 : i.active) || !(null === (o = null == i ? void 0 : i.assetUrls) || void 0 === o ? void 0 : o.length)) return null;
					const a = i.assetUrls[0];
					return !i.experimentRequired || Object(r.a)(i.experimentRequired)(e) ? a : null
				}
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			})), s.d(t, "c", (function() {
				return u
			})), s.d(t, "b", (function() {
				return m
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/selectors/experiments/utils.ts");
			const a = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				c = Object(n.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), i.a),
				d = e => a.find(t => !!Object(i.a)(c(e, t))),
				l = Object(n.a)(d, e => !!e),
				u = e => {
					const t = d(e);
					return !!t && c(e, t) === o.db.SkipOnboarding
				},
				m = e => {
					const t = d(e);
					return !!t && c(e, t) === o.db.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/helpers/isCrosspost.ts"),
				i = s("./src/reddit/selectors/modQueue.ts"),
				a = s("./src/reddit/selectors/platform.ts");
			const c = (e, t) => {
				let {
					post: s
				} = t;
				if (Object(i.c)(e)) return !0;
				const c = Object(a.f)(e),
					d = Object(r.a)(s);
				return !(!c || d) && (e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.Wb
					}) === n.Rd
				})(e)
			}
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
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				i = s("./src/reddit/selectors/experiments/presence.ts"),
				a = s("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.r
					});
					return t === n.v.VoteCountOnly || t === n.v.CommentCountOnly || t === n.v.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.r
					});
					return t === n.v.VoteCountOnly || t === n.v.VoteAndCommentCount
				},
				u = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.r
					});
					return t === n.v.CommentCountOnly || t === n.v.VoteAndCommentCount
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
					const o = e.posts.models[s];
					if (Object(a.d)(e) || !o || o.isSponsored || o.isScoreHidden || o.score >= c || Object(i.a)(e)) return !1;
					const d = Object(r.d)(e, {
							experimentName: n.r
						}),
						l = null == d ? void 0 : d.variant;
					return l === n.v.VoteCountOnly || l === n.v.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: s
					} = t;
					const o = e.posts.models[s];
					if (Object(a.d)(e) || !o || o.isSponsored || o.numComments >= c || Object(i.a)(e)) return !1;
					const d = Object(r.d)(e, {
							experimentName: n.r
						}),
						l = null == d ? void 0 : d.variant;
					return l === n.v.CommentCountOnly || l === n.v.VoteAndCommentCount
				},
				f = e => {
					if (Object(i.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.Dc
					}) === n.ed.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.hf
				}) === n.Rd
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
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				i = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.yg)(t)
				},
				c = Object(n.a)(a, r.d, (e, t) => e && !t)
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
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				a = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const l = new Set([c.g.AntiEvilOps, c.g.AutomodFiltered, c.g.CommunityOps, c.g.ContentTakedown, c.g.CopyrightTakedown, c.g.Moderator, c.g.Reddit]),
				u = new Set([c.g.Author, c.g.AuthorDeleted]),
				m = Object(o.a)(r.a, e => {
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
					let o = Object(i.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				p = Object(o.a)(r.a, e => {
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
					let o = Object(i.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				b = Object(o.a)(r.a, e => {
					if (!e) return !1;
					if (e && e.isSpam) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					return !(e.created > Date.UTC(2019, 0))
				}),
				f = Object(o.a)(d.l, r.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				h = Object(o.a)(r.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return l
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				a = s("./src/reddit/selectors/posts.ts");
			const c = e => Object(r.c)(e, {
					experimentName: o.kf,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => (t === o.sf.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored)) && !Object(i.A)(e),
				l = Object(n.a)(a.G, c, (e, t) => d(e, t));
			Object(n.a)((e, t) => t, c, (e, t) => d(e, t))
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const r = e => {
					if (i(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(o.c)(e)) || !!t
				},
				i = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== n.Sb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./src/lib/fastdom/index.ts"),
				r = s("./src/reddit/actions/jsApi.ts");
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
						this.store.then(e => e.dispatch(r.b(t)))
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
						e.dispatch(r.b(t || "")), this.fireEventsQueue()
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
					o.a.read(() => {
						for (let e = 0; e < this.queue.length; e++) {
							const t = this.queue[e];
							this.fireEvent(t)
						}
					})
				}
			};
			t.a = u
		},
		"./src/redditGQL/operations/CommentToxicity.json": function(e) {
			e.exports = JSON.parse('{"id":"445164f0825f"}')
		},
		"./src/redditGQL/operations/CreateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"b282a5b92ecf"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.442898d82d4d7749ea13.js.map