// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.d9a1b1fbad2271f48ebe.js
// Retrieved at 11/7/2022, 4:30:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-MediumPost"], {
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
					var o, r = n(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						f = !r && !l && /macintosh/i.test(t),
						x = !i && !u && !m && !p && /linux/i.test(t),
						O = s(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						v = n(/version\/(\d+(\.\d+)?)/i),
						g = /tablet/i.test(t) && !/tablet pc/i.test(t),
						E = !g && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: v || n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: v || n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: v || n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: v || n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? o = {
						name: "UC Browser",
						ucbrowser: e,
						version: n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? o = {
						name: "Maxthon",
						maxthon: e,
						version: n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? o = {
						name: "Epiphany",
						epiphany: e,
						version: n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? o = {
						name: "Puffin",
						puffin: e,
						version: n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? o = {
						name: "Sleipnir",
						sleipnir: e,
						version: n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? o = {
						name: "K-Meleon",
						kMeleon: e,
						version: n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : b ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, O ? (o.msedge = e, o.version = O) : (o.msie = e, o.version = n(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: n(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: O
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: n(/vivaldi\/(\d+(\.\d+)?)/i) || v
					} : u ? o = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? o = {
						name: "SeaMonkey",
						seamonkey: e,
						version: n(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (o = {
						name: "Firefox",
						firefox: e,
						version: n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (o.firefoxos = e, o.osname = "Firefox OS")) : l ? o = {
						name: "Amazon Silk",
						silk: e,
						version: n(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? o = {
						name: "PhantomJS",
						phantom: e,
						version: n(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? o = {
						name: "SlimerJS",
						slimer: e,
						version: n(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? o = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: v || n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: v || n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: n(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
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
						version: n(/googlebot\/(\d+(\.\d+))/i) || v
					} : {
						name: n(/^(.*)\/(.*) /),
						version: s(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && v && (o.version = v)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || n(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !i && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : f ? (o.mac = e, o.osname = "macOS") : _ ? (o.xbox = e, o.osname = "Xbox") : h ? (o.windows = e, o.osname = "Windows") : x && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
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
					}(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? j = n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? j = (j = n(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? j = (j = n(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? j = n(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? j = n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? j = n(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? j = n(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (j = n(/tizen[\/\s](\d+(\.\d+)*)/i)), j && (o.osversion = j);
					var C = !o.windows && j.split(".")[0];
					return g || c || "ipad" == r || i && (3 == C || C >= 4 && !E) || o.silk ? o.tablet = e : (E || "iphone" == r || "ipod" == r || i || a || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var n = t("undefined" != typeof navigator && navigator.userAgent || "");

				function s(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var n, s = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (n = 0; n < e.length; n++) s.push(t(e[n]));
					return s
				}

				function r(e) {
					for (var t = Math.max(s(e[0]), s(e[1])), n = o(e, (function(e) {
							var n = t - s(e);
							return o((e += new Array(n + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (n[0][t] > n[1][t]) return 1;
						if (n[0][t] !== n[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, s, o) {
					var i = n;
					"string" == typeof s && (o = s, s = void 0), void 0 === s && (s = !1), o && (i = t(o));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([a, e[c]]) < 0
						} return s
				}
				return n.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var s = e[t];
						if ("string" == typeof s && s in n) return !0
					}
					return !1
				}, n.isUnsupportedBrowser = i, n.compareVersions = r, n.check = function(e, t, n) {
					return !i(e, t, n)
				}, n._detect = t, n.detect = t, n
			}, e.exports ? e.exports = s() : n("./node_modules/webpack/buildin/amd-define.js")("bowser", s)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, n) {
				return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/_baseReduce.js": function(e, t) {
			e.exports = function(e, t, n, s, o) {
				return o(e, (function(e, o, r) {
					n = s ? (s = !1, e) : t(n, e, o, r)
				})), n
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_baseClamp.js"),
				o = n("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, n) {
				return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = o(n)) == n ? n : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), s(o(e), t, n)
			}
		},
		"./node_modules/lodash/map.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayMap.js"),
				o = n("./node_modules/lodash/_baseIteratee.js"),
				r = n("./node_modules/lodash/_baseMap.js"),
				i = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (i(e) ? s : r)(e, o(t, 3))
			}
		},
		"./node_modules/lodash/reduce.js": function(e, t, n) {
			var s = n("./node_modules/lodash/_arrayReduce.js"),
				o = n("./node_modules/lodash/_baseEach.js"),
				r = n("./node_modules/lodash/_baseIteratee.js"),
				i = n("./node_modules/lodash/_baseReduce.js"),
				a = n("./node_modules/lodash/isArray.js");
			e.exports = function(e, t, n) {
				var c = a(e) ? s : i,
					d = arguments.length < 3;
				return c(e, r(t, 4), n, d, o)
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, n) {
			var s = n("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return s(e) + t
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withAdClickLocation/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = e => (e, t, n) => ({
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
				referrer: i.Z(e),
				request: i.ab(e),
				screen: i.cb(e),
				session: i.gb(e),
				user: i.sb(e),
				media: n ? i.C(e, n) : null,
				post: n ? i.K(e, n) : null
			});
			var c = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				d = n("./src/telemetry/index.ts");
			const l = new Set;

			function u(e) {
				function t(t) {
					const n = Object(r.f)().getState(),
						{
							post: s
						} = {
							...t
						};
					return s && s.isSponsored ? o.a.createElement("div", {
						onClickCapture: function(e, s) {
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
							}(i, c.b) ? Object(d.a)(a(s)(n, i, null === (r = t.post) || void 0 === r ? void 0 : r.postId)) : Object(d.a)(a(s)(n, c.a.UNKNOWN, null === (o = t.post) || void 0 === o ? void 0 : o.postId)))
						}
					}, o.a.createElement(e, t)) : o.a.createElement(e, t)
				}
				const n = e.name || e.displayName;
				return t.displayName = `WithAdClickLocation(${n})`, t
			}
		},
		"./src/higherOrderComponents/withClickTracking/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/selectors/telemetry.ts");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const c = (e, t, n) => (function() {
				let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = m(o.target, o.currentTarget),
						a = p(o.target, o.currentTarget);
					r && n && t && (u(o.target, o.currentTarget, l.anchors) ? n(t(e, r, a)) : n(n => {
						const s = t(e, r, a)(n);
						let o;
						if (s && s.actionInfo) {
							const {
								pageType: e,
								...t
							} = s.actionInfo;
							o = t
						}
						return {
							...s,
							actionInfo: Object(i.S)(n, o)
						}
					})), u(o.target, o.currentTarget, l.anchorsAndButtons) && s(o)
				}
			});

			function d(e) {
				const t = t => {
					const {
						sendEvent: n,
						eventFactory: r,
						clickTrackingId: i,
						...d
					} = t, l = Object(s.useCallback)(c(i, r, n), [i, r, n]);
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
				u = (e, t, n) => !n.includes(e.tagName) && (e === t || !!e.parentElement && u(e.parentElement, t, n)),
				m = (e, t) => {
					const n = e.dataset.clickId;
					return n || (e === t ? null : !!e.parentElement && m(e.parentElement, t))
				},
				p = (e, t) => "true" === e.dataset.ignoreClick || e !== t && (!!e.parentElement && p(e.parentElement, t))
		},
		"./src/lib/combineRefs/index.tsx": function(e, t, n) {
			"use strict";
			t.a = function() {
				for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
				return e => {
					t.forEach(t => {
						if (t) return "function" == typeof t ? t(e) : void(t.current = e)
					})
				}
			}
		},
		"./src/lib/constants/specialMembership.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			const s = "custom"
		},
		"./src/lib/getShortenedLink.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/reddit/models/Media/index.ts"),
				o = n("./node_modules/node-libs-browser/node_modules/url/url.js"),
				r = n.n(o);
			t.a = function(e) {
				var t;
				const {
					source: n,
					isSponsored: o,
					domainOverride: i,
					callToAction: a
				} = e;
				let c = "";
				if (o) {
					if (n && n.displayText) {
						const e = 36 - (null !== (t = null == a ? void 0 : a.length) && void 0 !== t ? t : 0);
						return n.displayText.length > e ? n.displayText.substring(0, e - 3) + "..." : n.displayText
					}
					c = i || Object(s.D)(e)
				} else c = Object(s.D)(e);
				const d = r.a.parse(c),
					l = d.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/hooks/usePrevious.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o(e) {
				const t = Object(s.useRef)();
				return Object(s.useEffect)(() => {
					t.current = e
				}), t.current
			}
		},
		"./src/lib/hooks/useTooltip.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/icepick/icepick.js"),
				o = n("./node_modules/react/index.js"),
				r = n("./node_modules/react-popper/lib/esm/usePopper.js");
			const i = Object(s.freeze)({
				modifiers: []
			});

			function a(e) {
				let t = "object" == typeof e ? e : i;
				return Array.isArray(t.modifiers) || (t = Object(s.assoc)(t, "modifiers", i.modifiers)), t
			}

			function c(e) {
				const [t, n] = Object(o.useState)(null), [i, c] = Object(o.useState)(null), [d, l] = Object(o.useState)(null), [u, m] = Object(o.useState)(!1), p = Object(o.useCallback)(async () => m(!0), []), b = Object(o.useCallback)(() => m(!1), []), h = Object(o.useCallback)(() => m(!u), [u]), f = Object(o.useMemo)(() => {
					const t = a(e);
					return d ? Object(s.updateIn)(t, ["modifiers"], e => Object(s.push)(e, {
						name: "arrow",
						options: {
							element: d
						}
					})) : t
				}, [d, e]), {
					attributes: x,
					styles: O,
					update: v
				} = Object(r.a)(t, i, f);
				return Object(o.useMemo)(() => ({
					arrowProps: {
						ref: l,
						style: O.arrow,
						...x.arrow
					},
					hide: b,
					popperProps: {
						ref: c,
						style: O.popper,
						...x.popper
					},
					show: p,
					target: {
						element: t,
						ref: n
					},
					toggle: h,
					visible: u,
					update: v
				}), [l, x, c, b, p, O, t, n, h, u, v])
			}
		},
		"./src/lib/scroll/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/lib/domUtils/index.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/components/CommentSort/index.tsx"),
				i = n("./src/reddit/constants/elementIds.ts");
			const a = () => {
					o.a.write(() => {
						const e = document.getElementById(i.e);
						e ? Object(s.c)(e, 0) : Object(s.c)(document, 0)
					})
				},
				c = e => {
					o.a.read(() => {
						const t = e ? document.getElementById(i.e) : window,
							n = document.getElementById(r.a);
						if (t && n) {
							const s = e ? n.offsetTop : n.offsetTop - 50;
							o.a.write(() => t.scrollTo({
								top: s,
								behavior: "smooth"
							}))
						}
					})
				}
		},
		"./src/lib/timeUntil/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			const r = [o.yc, o.ub, o.E, o.U, o.pb, o.Xb],
				i = {
					[o.Xb]: e => s.fbt._({
						"*": "{number} seconds",
						_1: "1 second"
					}, [s.fbt._plural(e, "number")], {
						hk: "3pTp9Z"
					}),
					[o.pb]: e => s.fbt._({
						"*": "{number} minutes",
						_1: "1 minute"
					}, [s.fbt._plural(e, "number")], {
						hk: "2gB3sf"
					}),
					[o.U]: e => s.fbt._({
						"*": "{number} hours",
						_1: "1 hour"
					}, [s.fbt._plural(e, "number")], {
						hk: "2w4n8B"
					}),
					[o.E]: e => s.fbt._({
						"*": "{number} days",
						_1: "1 day"
					}, [s.fbt._plural(e, "number")], {
						hk: "3zIGRH"
					}),
					[o.ub]: e => s.fbt._({
						"*": "{number} months",
						_1: "1 month"
					}, [s.fbt._plural(e, "number")], {
						hk: "28DQqD"
					}),
					[o.yc]: e => s.fbt._({
						"*": "{number} years",
						_1: "1 year"
					}, [s.fbt._plural(e, "number")], {
						hk: "Gqzh3"
					})
				},
				a = {
					[o.Xb]: e => s.fbt._("{amount}s", [s.fbt._param("amount", String(e))], {
						hk: "F4qog"
					}),
					[o.pb]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "43tM5H"
					}),
					[o.U]: e => s.fbt._("{amount}h", [s.fbt._param("amount", String(e))], {
						hk: "19NsxU"
					}),
					[o.E]: e => s.fbt._("{amount}d", [s.fbt._param("amount", String(e))], {
						hk: "39MDc9"
					}),
					[o.ub]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.yc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					}),
					[o.ub]: e => s.fbt._("{amount}m", [s.fbt._param("amount", String(e))], {
						hk: "28feBj"
					}),
					[o.yc]: e => s.fbt._("{amount}y", [s.fbt._param("amount", String(e))], {
						hk: "10bv8G"
					})
				};

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
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
				if (u <= 0) return s.fbt._("a moment", null, {
					hk: "3QLaye"
				}).toString();
				for (const s of r) {
					const e = Math.floor(u / s);
					e && (l[s] = (t ? a : i)[s](e).toString()), u -= e * s
				}
				const m = r.map(e => l[e]).filter(Boolean).slice(0, 2).join(" ");
				return t || n ? m : s.fbt._("{amount of time left} left", [s.fbt._param("amount of time left", m)], {
					hk: "7VjAI"
				}).toString()
			}
		},
		"./src/lib/unicodeUtils/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			}));
			const s = e => {
					let t = 0,
						n = 0;
					const s = [0];
					for (const o of e) t++, n += o.length, s[t] = n;
					return s
				},
				o = e => {
					let t = 0,
						n = 0;
					const s = [];
					for (const o of e) {
						for (let e = 0; e < o.length; e++) s[n] = t, n++;
						t++
					}
					return s[n] = t, s
				}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(s.a)(o.c),
				i = Object(s.a)(o.b),
				a = Object(s.a)(o.a)
		},
		"./src/reddit/actions/comment/authoring.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return he
			})), n.d(t, "r", (function() {
				return Oe
			})), n.d(t, "p", (function() {
				return ve
			})), n.d(t, "t", (function() {
				return _e
			})), n.d(t, "w", (function() {
				return je
			})), n.d(t, "q", (function() {
				return Ce
			})), n.d(t, "v", (function() {
				return Se
			})), n.d(t, "o", (function() {
				return we
			})), n.d(t, "m", (function() {
				return Ne
			})), n.d(t, "b", (function() {
				return Re
			})), n.d(t, "c", (function() {
				return Ae
			})), n.d(t, "s", (function() {
				return Le
			})), n.d(t, "g", (function() {
				return De
			})), n.d(t, "h", (function() {
				return Fe
			})), n.d(t, "k", (function() {
				return Be
			})), n.d(t, "e", (function() {
				return He
			})), n.d(t, "d", (function() {
				return Ke
			})), n.d(t, "a", (function() {
				return qe
			})), n.d(t, "j", (function() {
				return ze
			})), n.d(t, "i", (function() {
				return Xe
			})), n.d(t, "l", (function() {
				return Ze
			})), n.d(t, "u", (function() {
				return $e
			})), n.d(t, "n", (function() {
				return et
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/makeDraftKey/index.ts"),
				i = n("./src/lib/scroll/index.ts"),
				a = n("./src/reddit/actions/changeUsername.ts"),
				c = n("./src/reddit/actions/login.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/actions/onboarding/index.ts"),
				u = n("./src/reddit/actions/post.ts"),
				m = n("./src/reddit/actions/postCreation/editorContent.ts"),
				p = n("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				b = n("./src/reddit/actions/shortcuts/utils.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				f = n("./src/reddit/constants/adEvents.ts"),
				x = n("./src/reddit/constants/localStorage.ts"),
				O = n("./src/redditGQL/operations/CommentToxicity.json"),
				v = n("./src/lib/constants/index.ts"),
				g = n("./src/lib/makeApiRequest/index.ts"),
				E = n("./src/lib/makeGqlRequest/index.ts"),
				_ = n("./src/lib/omitHeaders/index.ts"),
				j = n("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				C = n("./src/reddit/constants/headers.ts"),
				y = n("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				k = n("./src/reddit/helpers/genericServerError/index.ts"),
				S = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				w = n("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				T = n("./src/reddit/models/PostCreationForm/index.ts"),
				N = n("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				I = n("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				R = n("./src/reddit/helpers/graphql/helpers.ts"),
				P = n("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				M = n("./src/redditGQL/operations/CreateComment.json");
			const A = (e, t, n, s) => {
					let o, r;
					if (s === T.i.MARKDOWN) o = n.text, r = null;
					else {
						o = null;
						let e = null;
						n.rteState && (e = j.a.toRichTextJSON(n.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(E.a)(e, {
						...O,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				L = async (e, t, n, s) => {
					const o = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t
					};
					return n.commentMode === T.i.MARKDOWN ? o.text = n.text : (o.text = null, o.richtext_json = s), Object(g.a)(Object(_.a)(e, [C.a]), {
						method: v.ob.POST,
						endpoint: Object(y.a)(Object(N.a)(Object(I.a)(`${e.apiUrl}/api/comment.json`))),
						data: o
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
					} : {
						...e,
						body: {
							comment: Object(S.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(S.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(k.a)()
					})
				}, D = async (e, t, n, s, o) => {
					const r = s.commentMode === T.i.MARKDOWN,
						i = {
							postId: t || null,
							parentId: n || null,
							content: {
								markdown: r ? s.text : null,
								richText: r ? null : o
							}
						};
					return Object(E.a)(e, {
						...M,
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
			var F = n("./src/redditGQL/operations/UpdateComment.json");
			var B = n("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var U = n("./src/reddit/endpoints/post/index.tsx"),
				H = n("./src/reddit/endpoints/post/convert.ts"),
				V = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				W = n("./src/reddit/featureFlags/index.ts"),
				G = n("./src/reddit/helpers/comment/index.ts"),
				K = n("./src/reddit/helpers/correlationIdTracker.ts"),
				q = n("./src/reddit/helpers/dom/index.ts"),
				z = n("./src/reddit/helpers/localStorage/index.ts"),
				J = n("./src/reddit/helpers/sessionStorage/index.ts"),
				Y = n("./src/reddit/helpers/trackers/commentsPage.ts"),
				Q = n("./src/reddit/models/Comment/index.ts"),
				X = n("./src/reddit/models/PostDraft/index.ts"),
				Z = n("./src/reddit/models/RichTextJson/index.ts"),
				$ = n("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				ee = n("./src/reddit/models/Toast/index.ts"),
				te = n("./src/reddit/selectors/chatPost.ts"),
				ne = n("./src/reddit/selectors/comments.ts"),
				se = n("./src/reddit/selectors/commentSelector.ts"),
				oe = n("./src/reddit/constants/experiments.ts"),
				re = n("./src/reddit/helpers/chooseVariant/index.ts"),
				ie = n("./node_modules/reselect/es/index.js");
			const ae = Object(ie.a)(e => Object(re.c)(e, {
				experimentEligibilitySelector: re.a,
				experimentName: oe.Db
			}), e => e === oe.Md);
			var ce = n("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				de = n("./src/reddit/selectors/platform.ts"),
				le = n("./src/reddit/selectors/posts.ts"),
				ue = n("./src/reddit/selectors/user.ts"),
				me = n("./src/reddit/actions/comment/index.ts"),
				pe = n("./src/reddit/actions/comment/constants.ts");
			const be = Object(o.a)(pe.m),
				he = e => {
					let {
						hasFocus: t,
						draftKey: n
					} = e;
					return async (e, s) => {
						const o = s();
						if (!!o.features.comments.drafts[n])
							if (Object(ue.T)(o) && t) {
								const s = be({
									hasFocus: t,
									draftKey: n
								});
								e(Object(a.startChangeUsernameFlow)(s))
							} else e(be({
								hasFocus: t,
								draftKey: n
							}))
					}
				},
				fe = Object(o.a)(pe.L),
				xe = Object(o.a)(pe.H),
				Oe = Object(o.a)(pe.N),
				ve = Object(o.a)(pe.M),
				ge = Object(o.a)(pe.K),
				Ee = async (e, t, n, s, o) => {
					const r = s.ok && s.body,
						i = r && r.comment && r.comment.id;
					await Y.g(e, n, t, o, i)
				}, _e = "Toxicity_Warning__Modal", je = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const r = n(),
						i = Object(de.e)(r);
					let a = "";
					i && (a = i.name);
					const {
						formData: c,
						editorMode: l
					} = e;
					if (W.d.enableToxicityWarning(r)) {
						if (!(await A(o(), a, c, l))) return void t(Object(d.i)(_e))
					}
					t(Ce(e))
				}, Ce = e => async (t, n) => {
					t(Object(d.g)(_e));
					const s = n(),
						o = Object(ce.a)(s),
						r = Object(ce.c)(s);
					if (!s.user.account && o) {
						const n = Object(G.e)(e.formData, s.uploads),
							o = Object(G.c)(e.formData, s.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(c.openRegisterModal)()), Object(J.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(ke(e, !1))
				};

			function ye(e, t) {
				return e === T.i.MARKDOWN && ae(t)
			}
			const ke = (e, t, n, o) => {
					let {
						postId: r,
						commentsPageKey: a,
						draftKey: c,
						formData: d,
						editorMode: l,
						disableAutofocus: m,
						isLiveStreaming: x
					} = e;
					return async (e, O, v) => {
						let {
							apiContext: g,
							gqlContext: E
						} = v;
						var _;
						const j = O(),
							C = Object(te.d)(j, {
								postId: r
							}),
							y = C ? Object(G.a)() : c,
							k = Object(se.e)(j, {
								commentId: y
							}),
							S = Object(ue.l)(j);
						if (!S) return;
						if (k && !C) return;
						t || e(fe({
							draftKey: y,
							draft: d,
							commentsPageKey: a,
							optimisticComment: C ? Object(G.b)({
								temporalId: y,
								draft: d,
								post: Object(le.G)(j, {
									postId: r
								}),
								author: S,
								subredditId: (null === (_ = Object(de.e)(j)) || void 0 === _ ? void 0 : _.id) || ""
							}) : void 0
						}));
						const w = S.displayText,
							N = d.commentMode;
						let I;
						const R = x ? "" : t && n ? n : Object(G.e)(d, j.uploads),
							P = Object(G.f)(R, j.uploads);
						if (x ? (I = await Object(V.i)(g(), r, d, w), e(Object(p.a)({
								streamId: r,
								level: I.body.automuteLevel
							}))) : I = ye(N, j) ? await D(E(), r, null, d, R) : await L(g(), r, d, R), I.ok) {
							let n;
							if (n = I.body, e(Oe({
									...n,
									headCommentId: Object(ne.w)(j, {
										commentsPageKey: a
									}),
									commentsPageKey: a,
									draftKey: y,
									upload: P
								})), t) {
								const e = Object(de.j)(j);
								Object(i.a)(!!e)
							}
							const s = Object(le.G)(O(), {
								postId: r
							});
							e(Object(u.y)(s, f.a.CommentSubmitted))
						} else {
							if (I.error) {
								const e = t && o ? o : Object(G.c)(d, j.uploads);
								Y.f({
									state: j,
									bodyText: e,
									postId: r,
									error: I.error,
									uploadMetadata: null == P ? void 0 : P.metadata
								})
							}
							const n = I.error && I.error.fields && I.error.fields[0] ? I.error.fields[0].msg : s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(ge({
								draftKey: y,
								error: I.error
							})), C || e(Object(h.f)({
								duration: h.a,
								kind: ee.b.Error,
								text: n
							}))
						}
						Ee(O(), a, l, I, null == P ? void 0 : P.metadata).then(() => I.ok && l === T.i.RICH_TEXT ? Object(K.b)(K.a.CommentComposer) : void 0), m || Object(b.d)(), t && Object(J.a)()
					}
				},
				Se = e => async (t, n, s) => {
					let {
						gqlContext: o
					} = s;
					const {
						parentCommentId: r,
						commentsPageKey: i,
						parentCommentDepth: a,
						draftKey: c,
						formData: l,
						editorMode: u
					} = e, m = n(), p = Object(de.e)(m);
					let b = "";
					if (p && (b = p.name), W.d.enableToxicityWarning(m)) {
						if (!(await A(o(), b, l, u))) return void t(Object(d.i)(_e))
					}
					t(we({
						commentsPageKey: i,
						draftKey: c,
						parentCommentDepth: a,
						parentCommentId: r,
						formData: l,
						editorMode: u
					}))
				}, we = e => async (t, n) => {
					t(Object(d.g)(_e));
					const s = n(),
						o = Object(ce.a)(s),
						r = Object(ce.c)(s);
					if (!s.user.account && o) {
						const n = Object(G.e)(e.formData, s.uploads),
							o = Object(G.c)(e.formData, s.uploads);
						t(Object(d.k)({
							actionSource: d.a.Reply
						})), t(Object(c.openRegisterModal)()), Object(J.d)({
							comment: {
								...e,
								richTextJSONData: n,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(Te(e, !1))
				}, Te = (e, t, n, s) => async (o, r, a) => {
					let {
						apiContext: c,
						gqlContext: d
					} = a;
					var l;
					const {
						parentCommentId: u,
						commentsPageKey: m,
						parentCommentDepth: p,
						draftKey: h,
						formData: f,
						editorMode: x
					} = e, O = r(), v = Object(se.b)(O, {
						commentId: u
					}), g = v && Object(te.d)(O, {
						postId: v.postId
					}), E = g ? Object(G.a)() : h, _ = Object(se.e)(O, {
						commentId: E
					}), j = Object(ue.l)(O);
					if (!j) return;
					if (_ && !g) return;
					t || o(fe({
						draftKey: E,
						draft: f,
						commentsPageKey: m,
						optimisticComment: g && v ? Object(G.b)({
							temporalId: E,
							draft: f,
							post: Object(le.G)(O, {
								postId: v.postId
							}),
							author: j,
							subredditId: (null === (l = Object(de.e)(O)) || void 0 === l ? void 0 : l.id) || "",
							parentId: v.id
						}) : void 0
					})), o(Re({
						parentCommentId: u,
						commentsPageKey: m
					}));
					const C = f.commentMode,
						y = t && n ? n : Object(G.e)(f, O.uploads),
						k = Object(G.f)(y, O.uploads);
					let S;
					if ((S = ye(C, O) ? await D(d(), null, u, f, y) : await L(c(), u, f, y)).ok) {
						if (o(ve({
								...S.body,
								parentCommentId: u,
								commentsPageKey: m,
								draftKey: E,
								depth: p + 1,
								upload: k
							})), t) {
							const e = Object(de.j)(O);
							Object(i.a)(!!e)
						}
					} else {
						if (S.error) {
							if (!v) return;
							const e = t && s ? s : Object(G.c)(f, O.uploads);
							Y.f({
								state: O,
								bodyText: e,
								postId: v.postId,
								parentId: u,
								error: S.error,
								uploadMetadata: null == k ? void 0 : k.metadata
							})
						}
						o(ge({
							draftKey: E,
							error: S.error
						}))
					}
					Ee(r(), m, x, S, null == k ? void 0 : k.metadata), Object(b.d)(), t && Object(J.a)()
				}, Ne = () => async e => {
					const t = Object(J.b)();
					if (t) {
						const {
							comment: {
								parentCommentDepth: n,
								parentCommentId: s,
								postId: o,
								richTextJSONData: r,
								commentBodyText: i
							},
							isSkipOnboarding: a
						} = t;
						a && e(Object(l.skipOnboardingModal)()), o ? await e(ke({
							...t.comment,
							postId: o
						}, !0, r, i)) : s && void 0 !== n && await e(Te({
							...t.comment,
							parentCommentId: s,
							parentCommentDepth: n
						}, !0, r, i))
					}
				}, Ie = Object(o.a)(pe.s), Re = Object(o.a)(pe.r), Pe = Object(o.a)(pe.n), Me = (Object(o.a)(pe.i), Object(o.a)(pe.o)), Ae = (Object(o.a)(pe.v), (e, t, n) => async (o, r, i) => {
					let {
						apiContext: a
					} = i;
					const c = e === T.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object(Z.H)(t)) o(Me({
						editorMode: e,
						draftKey: n,
						content: c ? Z.i : ""
					})), o(Object(m.c)(e));
					else {
						o(Object(m.b)(n));
						const r = await Object(H.a)(a(), e, c ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(m.a)(n)), o(Me({
								editorMode: e,
								draftKey: n,
								content: t
							})), o(Object(m.c)(e))
						} else o(Object(m.a)(n)), o(Object(h.f)({
							duration: h.a,
							kind: ee.b.Error,
							text: s.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Le = e => {
					let {
						commentsPageKey: t,
						parentCommentId: n,
						singleOpen: s
					} = e;
					return async (e, o) => {
						const i = o(),
							l = Object(r.a)(X.c.replyToComment, n);
						if (!Object(ue.R)(o()) && !Object(ce.a)(i)) return e(Object(c.openRegisterModal)()), void e(Object(d.k)({
							actionSource: d.a.Reply,
							redirectUrl: Object(ne.m)(o(), {
								commentId: n
							})
						}));
						const u = i.features.comments.replyFormOpen[t],
							m = u && u[n];
						if ((m || u && s) && (Object.keys(u).forEach(n => u[n] && e(Re({
								parentCommentId: n,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const h = i.user.prefs.commentMode,
							f = Object(q.d)();
						if (f) {
							const e = f.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (h === T.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => $.s(e, null)).map(e => $.l([e])),
									n = $.s("", null),
									s = $.l([n]);
								b = {
									document: [$.c(t), s]
								}
							}
						}
						const x = i.features.comments.drafts[l];
						let O;
						if (O = f ? {
								commentMode: h,
								draftType: X.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : x || {
								commentMode: h,
								draftType: X.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(ue.T)(i)) {
							const s = Ie({
								parentCommentId: n,
								commentsPageKey: t,
								draftKey: l,
								formData: O
							});
							e(Object(a.startChangeUsernameFlow)(s))
						} else e(Ie({
							parentCommentId: n,
							commentsPageKey: t,
							draftKey: l,
							formData: O
						}))
					}
				}, De = e => async t => {
					t(Object(me.r)(e)), t(He(e))
				}, Fe = e => {
					let {
						parentCommentId: t,
						commentsPageKey: n
					} = e;
					return async e => {
						e(Re({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Le({
							parentCommentId: t,
							commentsPageKey: n
						})), e(Object(me.r)({
							commentId: t,
							commentsPageKey: n
						}))
					}
				}, Be = (e, t) => n => n(Pe({
					draftKey: e,
					formData: t
				})), Ue = Object(o.a)(pe.u), He = e => {
					let {
						commentId: t,
						commentMode: n,
						commentsPageKey: s,
						draftKey: o,
						text: r
					} = e;
					return async (e, i) => {
						const a = i();
						a.user.account && (Y.c(a), e(Ue({
							commentId: t,
							commentsPageKey: s,
							draftKey: o,
							formData: {
								text: r,
								commentMode: n,
								rteState: null,
								draftType: X.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, Ve = Object(o.a)(pe.F), We = Object(o.a)(pe.E), Ge = Object(o.a)(pe.G), Ke = Object(o.a)(pe.j), qe = Object(o.a)(pe.f), ze = e => {
					let {
						id: t,
						commentsPageKey: n,
						draftKey: s,
						formData: o
					} = e;
					return async (e, r, i) => {
						let {
							apiContext: a,
							gqlContext: c
						} = i;
						const d = r();
						if (!d.user.account) return;
						e(Ve({
							draftKey: s
						})), Y.d(d);
						const l = Object(G.e)(o, d.uploads),
							u = o.commentMode;
						let m;
						if ((m = ye(u, d) ? await (async (e, t, n, s, o) => {
								const r = o === T.i.MARKDOWN,
									i = {
										commentId: t,
										content: {
											markdown: r ? n.text : null,
											richText: r ? null : s
										}
									};
								return Object(E.a)(e, {
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
							})(c(), t, o, l, u) : await (async (e, t, n, s, o) => {
								const r = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return o === T.i.MARKDOWN ? r.text = n.text : (r.text = null, r.richtext_json = s), Object(g.a)(Object(_.a)(e, [C.a]), {
									endpoint: Object(y.a)(Object(I.a)(Object(N.a)(`${e.apiUrl}/api/editusertext`))),
									method: v.ob.POST,
									data: r
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(w.a)(e)
								} : {
									...e,
									body: {
										comment: Object(S.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(S.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(k.a)()
								})
							})(a(), t, o, l, u)).ok) {
							const o = m.body;
							e(Ge({
								commentId: t,
								commentsPageKey: n,
								draftKey: s
							})), e(Object(me.j)({
								[t]: {
									...o.comment
								}
							}))
						} else e(We({
							draftKey: s,
							error: m.error
						}))
					}
				}, Je = Object(o.a)(pe.C), Ye = Object(o.a)(pe.B), Qe = Object(o.a)(pe.D), Xe = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = s();
					n(Je({
						id: e
					})), Y.a(e, i);
					const a = await ((e, t) => Object(g.a)(Object(_.a)(e, [C.a]), {
						endpoint: Object(y.a)(`${e.apiUrl}/api/del`),
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
					a.ok ? n(Qe({
						id: e,
						postId: t
					})) : n(Ye({
						id: e,
						error: a.error
					}))
				}, Ze = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = !n().features.comments.models[e].sendReplies;
					t(Object(me.j)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(U.q)(o(), e, r)).ok || t(Object(me.j)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, $e = (e, t) => async (n, o, r) => {
					let {
						gqlContext: i
					} = r;
					var a, c, d, l, u, m;
					n(Object(me.c)());
					const p = e => Object(h.f)(Object(h.e)(e, ee.b.Error));
					if (((null === (c = null === (a = o().pages) || void 0 === a ? void 0 : a.comments) || void 0 === c ? void 0 : c.followed) || []).length === x.a) n(p(s.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === Q.a.FOLLOWED,
							a = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (n(Object(me.p)(a)), (await ((e, t) => Object(E.a)(e, {
								...B,
								variables: {
									input: t
								}
							}))(i(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(z.yb)(null !== (u = null === (l = null === (d = o().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== u ? u : [], null === (m = o().user.account) || void 0 === m ? void 0 : m.id);
							const e = r ? s.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : s.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							n(Object(h.f)({
								kind: ee.b.SuccessCommunityGreen,
								text: e
							}))
						} else n(Object(me.p)(a)), n(p(s.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function et(e) {
				let {
					commentId: t,
					commentsPageKey: n,
					isLivestreaming: s = !1
				} = e;
				return async (e, o) => {
					const r = o(),
						i = Object(se.b)(r, {
							commentId: t
						});
					if (!i) return;
					e(xe({
						commentId: t,
						commentsPageKey: n
					}));
					const a = {
						commentMode: i.media.rteMode,
						draftType: i.parentId ? X.c.replyToComment : X.c.replyToPost,
						rtJson: i.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (i.parentId) {
						const t = Object(se.b)(r, {
								commentId: i.parentId
							}),
							s = Object(ne.j)(r, {
								commentId: i.parentId,
								commentLink: void 0,
								commentsPageKey: n
							});
						if (!t || null === s) return;
						await e(we({
							commentsPageKey: n,
							draftKey: i.id,
							parentCommentDepth: s,
							parentCommentId: t.id,
							formData: a,
							editorMode: i.media.rteMode
						}))
					} else await e(Ce({
						postId: i.postId,
						commentsPageKey: n,
						draftKey: i.id,
						formData: a,
						editorMode: i.media.rteMode,
						disableAutofocus: !0,
						isLiveStreaming: s
					}))
				}
			}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return g
			})), n.d(t, "c", (function() {
				return E
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "e", (function() {
				return C
			})), n.d(t, "g", (function() {
				return y
			})), n.d(t, "h", (function() {
				return k
			})), n.d(t, "b", (function() {
				return S
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeActionCreator/index.ts"),
				i = n("./src/lib/makeCommentsPageKey/index.ts"),
				a = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/shortcuts/utils.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				l = n("./src/reddit/constants/modals.ts"),
				u = n("./src/reddit/endpoints/comment/index.tsx"),
				m = n("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = n("./src/reddit/models/Reportable/index.ts"),
				b = n("./src/reddit/models/Toast/index.ts"),
				h = n("./src/reddit/selectors/commentSelector.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/reddit/actions/comment/index.ts"),
				O = n("./src/reddit/actions/comment/constants.ts");
			const v = Object(r.a)(O.p),
				g = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					n().features.comments.models[e] && (await Object(u.j)(o(), e)).ok && t((e => async t => {
						t(v({
							commentId: e
						}))
					})(e))
				}, E = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					if (!Object(f.R)(n())) return void t(Object(a.i)(l.a.LOGIN_MODAL_ID));
					const i = n().features.comments.models[e];
					if (!i) return;
					const c = i.isLocked ? u.l : u.f;
					t(Object(x.j)({
						[e]: {
							isLocked: !i.isLocked
						}
					})), (await c(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.isLocked ? s.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : s.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(x.j)({
						[e]: {
							isLocked: i.isLocked
						}
					}))
				}, _ = Object(r.a)(O.J), j = e => async (t, n, o) => {
					let {
						apiContext: r,
						gqlContext: i
					} = o;
					const a = n(),
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
					})), (await Object(u.a)(i(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: s.fbt._("comment has been approved", null, {
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
					})), Object(c.d)())
				}, C = (e, t) => async (n, o, r) => {
					let {
						apiContext: i,
						gqlContext: a
					} = r;
					const l = o(),
						m = l.features.comments.models[e],
						p = l.user.account ? l.user.account.displayText : null;
					m && p && (n(Object(x.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(u.h)(a(), e, t)).ok ? n(Object(d.f)({
						kind: b.b.SuccessMod,
						text: t ? s.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : s.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : n(Object(x.j)({
						[e]: {
							approvedBy: m.approvedBy,
							bannedBy: m.bannedBy,
							isApproved: m.isApproved,
							isRemoved: m.isRemoved,
							isSpam: m.isSpam
						}
					})), Object(c.d)())
				}, y = e => async (t, n, o) => {
					let {
						apiContext: r
					} = o;
					const i = n().features.comments.models[e];
					if (!i) return;
					const a = i.ignoreReports ? u.k : u.e;
					t(Object(x.j)({
						[e]: {
							ignoreReports: !i.ignoreReports
						}
					})), (await a(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: i.ignoreReports ? s.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : s.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(x.j)({
						[e]: {
							ignoreReports: i.ignoreReports
						}
					}))
				}, k = (e, t, n) => async (r, i, a) => {
					let {
						gqlContext: c
					} = a;
					const l = Object(h.b)(i(), {
						commentId: e
					});
					if (!l) return;
					const u = n === o.kc.Snoozed,
						f = {
							itemId: e,
							reportText: t,
							isSnoozed: u
						};
					if ((await Object(m.a)(c(), {
							input: f
						})).ok) r(Object(x.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, u)
						}
					}));
					else {
						const e = Object(d.e)(s.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(d.f)(e))
					}
				}, S = (e, t, n) => async (s, r, a) => {
					let {
						apiContext: c,
						gqlContext: d
					} = a;
					const l = r(),
						m = l.features.comments.models[e];
					if (!m) return;
					const p = m.postId,
						b = l.postStickiedComments.data[p];
					s(Object(x.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.J.ADMIN,
							isMod: t === o.J.MODERATOR,
							isStickied: !!n
						}
					})), n && b && b !== e && s(Object(x.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const h = Object(u.c)(d(), e, t),
						f = Object(u.d)(d(), e, !!n),
						O = [h];
					(n || !n && e === b) && O.push(f), (await Promise.all(O)).every(e => e.ok) ? n && s(_({
						id: e,
						postId: p,
						commentsPageKey: Object(i.a)(p, null, {
							sort: o.w.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (s(Object(x.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), s(Object(x.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/economics/paymentSystems/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "c", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			const s = "ECONOMICS__PAYMENT_SYSTEM__CARD_DELETE_SUCCESS",
				o = "ECONOMICS__PAYMENT_SYSTEM__PAYPAL_DELETE_SUCCESS",
				r = "ECONOMICS__PAYMENT_SYSTEM__INFO_FAILURE",
				i = "ECONOMICS__PAYMENT_SYSTEM__INFO_FETCHED",
				a = "ECONOMICS__PAYMENT_SYSTEM__INFO_PENDING"
		},
		"./src/reddit/actions/economics/subredditPremium/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
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
				o = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_BADGE_TYPE_CHANGED",
				r = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_MODAL_OPENED",
				i = "ECONOMICS__SUBREDDIT_PREMIUM__BADGE_MANAGEMENT_VIEW_CHANGED",
				a = "ECONOMICS__SUBREDDIT_PREMIUM__EDITOR_PRODUCTS_FETCH_SUCCESS",
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
				return o
			})), n.d(t, "e", (function() {
				return r
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			const s = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				i = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				a = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/postCollection/constants.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return s
			})), n.d(t, "d", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			})), n.d(t, "f", (function() {
				return i
			})), n.d(t, "g", (function() {
				return a
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
				return h
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "i", (function() {
				return x
			})), n.d(t, "j", (function() {
				return O
			})), n.d(t, "h", (function() {
				return v
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "o", (function() {
				return _
			}));
			const s = "CREATE_COLLECTION_PENDING",
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
				h = "UPDATE_COLLECTION_DESCRIPTION_SUCCESS",
				f = "UPDATE_COLLECTION_DESCRIPTION_FAILED",
				x = "REORDER_COLLECTION_PENDING",
				O = "REORDER_COLLECTION_SUCCESS",
				v = "REORDER_COLLECTION_FAILED",
				g = "UPDATE_COLLECTION_LAYOUT_PENDING",
				E = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				_ = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/postCreation/editorContent.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			})), n.d(t, "d", (function() {
				return f
			})), n.d(t, "c", (function() {
				return x
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/reddit/endpoints/post/convert.ts"),
				a = n("./src/reddit/helpers/localStorage/index.ts"),
				c = n("./src/reddit/helpers/trackers/postComposer.ts"),
				d = n("./src/reddit/models/PostCreationForm/index.ts"),
				l = n("./src/reddit/models/RichTextJson/index.ts"),
				u = n("./src/reddit/models/Toast/index.ts"),
				m = n("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.G),
				b = Object(o.a)(m.p),
				h = Object(o.a)(m.Q),
				f = (e, t, n) => async (o, a, f) => {
					let {
						apiContext: O
					} = f;
					c.m(a(), t);
					const v = t === d.i.MARKDOWN,
						g = t === d.i.RICH_TEXT,
						E = m.k;
					if (v && Object(l.H)(n)) return o(h({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void o(x(t));
					if (g && !n) return o(h({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.i
					})), void o(x(t));
					o(p(E));
					const _ = await Object(i.a)(O(), t, v ? JSON.stringify(n) : n);
					_.ok ? (o(b(E)), o(h({
						editorKey: e,
						editorMode: t,
						content: _.body.output
					})), o(x(t))) : (o(b(E)), o(Object(r.f)({
						duration: r.a,
						kind: u.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "3UtpxU"
						})
					})))
				}, x = e => async (t, n) => {
					const o = Object(a.l)();
					if (o >= 3) return;
					const i = n().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === i) return;
					const c = e === d.i.MARKDOWN ? s.fbt._("You can set Markdown as the default editor mode in the settings", null, {
						hk: "yvN18"
					}) : s.fbt._("You can set Fancy Pants as the default editor mode in the settings", null, {
						hk: "4kQi5k"
					});
					t(Object(r.f)({
						buttonAction: async () => {
							window.open("/settings/feed")
						},
						buttonText: s.fbt._("Open Settings", null, {
							hk: "1CKz9o"
						}),
						kind: u.b.SuccessCommunity,
						text: c
					})), Object(a.wb)(o + 1)
				}
		},
		"./src/reddit/actions/publicAccessNetwork/automute.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./src/lib/makeActionCreator/index.ts"),
				o = n("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				r = n("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(s.a)(r.r),
				a = Object(s.a)(r.F),
				c = e => async (t, n, s) => {
					let {
						apiContext: r
					} = s;
					const c = await Object(o.a)(r(), e);
					c && c.ok ? t(i({
						streamId: e,
						level: c.body.data.auto_mute_status.level
					})) : t(a(e))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "removalReasonsPending", (function() {
				return Z
			})), n.d(t, "removalReasonsLoaded", (function() {
				return $
			})), n.d(t, "removalReasonsFailed", (function() {
				return ee
			})), n.d(t, "removalReasonsRequested", (function() {
				return te
			})), n.d(t, "removalReasonAddedPending", (function() {
				return ne
			})), n.d(t, "removalReasonAddedSuccess", (function() {
				return se
			})), n.d(t, "removalReasonAddedFailed", (function() {
				return oe
			})), n.d(t, "addRemovalReason", (function() {
				return re
			})), n.d(t, "editRemovalReasonPending", (function() {
				return ie
			})), n.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), n.d(t, "editRemovalReasonFailed", (function() {
				return ce
			})), n.d(t, "editRemovalReason", (function() {
				return de
			})), n.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), n.d(t, "deleteRemovalReasonSuccess", (function() {
				return ue
			})), n.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), n.d(t, "deleteRemovalReason", (function() {
				return pe
			})), n.d(t, "removedItemsSelected", (function() {
				return be
			})), n.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), n.d(t, "removalReasonSubmittedPending", (function() {
				return fe
			})), n.d(t, "removalReasonSubmittedSuccess", (function() {
				return xe
			})), n.d(t, "removalReasonSubmittedFailed", (function() {
				return Oe
			})), n.d(t, "removalReasonMessagePending", (function() {
				return ve
			})), n.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return ge
			})), n.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Ee
			})), n.d(t, "removalReasonMessageFailed", (function() {
				return _e
			})), n.d(t, "submitRemovalReason", (function() {
				return je
			})), n.d(t, "submitBulkRemovalReason", (function() {
				return Ce
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/initializeClient/installReducer.ts"),
				r = n("./node_modules/redux/es/redux.js");
			const i = "REMOVALREASONS__LOAD_SUCCESS",
				a = "REMOVALREASONS__ADD_PENDING",
				c = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
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
					case c:
					case l:
					case u:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case d:
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
						case c:
						case d:
						case u:
						case m:
						case b:
						case h:
							return !1;
						default:
							return e
					}
				},
				O = Object(r.c)({
					error: f,
					pending: x
				});
			const v = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
						const {
							response: n
						} = t.payload, {
							data: s
						} = n;
						return {
							...e,
							...s
						}
					}
					case c:
					case u: {
						const {
							reason: n
						} = t.payload;
						return {
							...e,
							[n.id]: n
						}
					}
					case b: {
						const {
							reasonId: n
						} = t.payload, {
							[n]: s,
							...o
						} = e;
						return o
					}
					default:
						return e
				}
			};
			const E = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case i: {
						const {
							subredditId: n,
							response: s
						} = t.payload, {
							order: o
						} = s;
						return {
							...e,
							[n]: o
						}
					}
					case c: {
						const {
							subredditId: n,
							reason: s
						} = t.payload;
						return {
							...e,
							[n]: [...e[n], s.id]
						}
					}
					case b: {
						const {
							subredditId: n,
							reasonId: s
						} = t.payload, o = [...e[n]].filter(e => e !== s);
						return {
							...e,
							[n]: o
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
								itemIds: n
							} = t.payload;
							return {
								itemIds: n,
								subredditId: e
							}
						}
						default:
							return e
					}
				},
				C = Object(r.c)({
					api: O,
					models: g,
					reasonOrder: _,
					removedItemIds: j
				}),
				y = n("./src/lib/constants/index.ts"),
				k = n("./src/lib/makeActionCreator/index.ts"),
				S = n("./src/lib/makeCommentsPageKey/index.ts"),
				w = n("./src/lib/makeDraftKey/index.ts"),
				T = n("./src/reddit/actions/bulkActions/index.ts"),
				N = n("./src/reddit/actions/comment/index.ts"),
				I = n("./src/reddit/actions/comment/authoring.ts"),
				R = n("./src/reddit/actions/comment/moderation.ts"),
				P = n("./src/reddit/actions/modal.ts"),
				M = n("./src/reddit/actions/post.ts"),
				A = n("./src/reddit/actions/toaster.ts"),
				L = n("./src/reddit/constants/modals.ts"),
				D = n("./src/lib/makeApiRequest/index.ts"),
				F = n("./src/lib/omitHeaders/index.ts"),
				B = n("./src/reddit/constants/headers.ts"),
				U = n("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const H = (e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: y.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				V = (e, t, n) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_${n}_message/`),
					method: y.ob.POST,
					type: "json",
					data: t
				});
			var W = n("./src/reddit/helpers/isPost.ts"),
				G = n("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				K = n("./src/reddit/helpers/routeKey/index.ts"),
				q = n("./src/reddit/models/ModQueue/index.ts"),
				z = n("./src/reddit/models/PostDraft/index.ts"),
				J = n("./src/reddit/models/RemovalReason/index.ts"),
				Y = n("./src/reddit/models/Toast/index.ts"),
				Q = n("./src/reddit/selectors/comments.ts"),
				X = n("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: C
				}
			});
			const Z = Object(k.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(k.a)(i),
				ee = Object(k.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, n, s) => {
					let {
						apiContext: o
					} = s;
					const r = n().subreddits.models[e].name;
					t(Z());
					const i = await ((e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: y.ob.GET
					}))(o(), r);
					i.ok ? t($({
						subredditId: e,
						response: i.body
					})) : t(ee(i.error))
				}, ne = Object(k.a)(a), se = Object(k.a)(c), oe = Object(k.a)(d), re = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					n(ne());
					const c = await ((e, t, n) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: y.ob.POST,
						data: n
					}))(i(), a, t);
					if (c.ok) {
						const {
							id: o
						} = c.body, r = {
							...t,
							id: o
						};
						n(se({
							subredditId: e,
							reason: r
						})), n(Object(A.f)({
							kind: Y.b.SuccessMod,
							text: s.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else n(oe(c.error))
				}, ie = Object(k.a)(l), ae = Object(k.a)(u), ce = Object(k.a)(m), de = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					n(ie());
					const c = await ((e, t, n) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n.id}`,
						method: y.ob.PUT,
						data: {
							message: n.message,
							title: n.title
						}
					}))(i(), a, t);
					c.ok ? (n(ae({
						subredditId: e,
						reason: t
					})), n(Object(A.f)({
						kind: Y.b.SuccessMod,
						text: s.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : n(ce(c.error))
				}, le = Object(k.a)(p), ue = Object(k.a)(b), me = Object(k.a)(h), pe = (e, t) => async (n, o, r) => {
					let {
						apiContext: i
					} = r;
					const a = o().subreddits.models[e].name;
					n(le());
					const c = await ((e, t, n) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${n}`,
						method: y.ob.DELETE
					}))(i(), a, t);
					c.ok ? (n(ue({
						subredditId: e,
						reasonId: t
					})), n(Object(A.f)({
						kind: Y.b.SuccessMod,
						text: s.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : n(me(c.error))
				}, be = Object(k.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (n, s, o) => {
					let {
						apiContext: r
					} = o;
					const i = s();
					i.features.removalReasons.reasonOrder[e] && i.features.removalReasons.reasonOrder[e].length > 0 || n(te(e)), n(be({
						subredditId: e,
						itemIds: t
					})), n(Object(P.i)(L.a.ADD_REMOVAL_REASON))
				}, fe = Object(k.a)("REMOVALREASONS__SUBMIT_PENDING"), xe = Object(k.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Oe = Object(k.a)("REMOVALREASONS__SUBMIT_FAILED"), ve = Object(k.a)("REMOVALREASONS__MESSAGE_PENDING"), ge = Object(k.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Ee = Object(k.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), _e = Object(k.a)("REMOVALREASONS__MESSAGE_FAILED"), je = (e, t, n, s, o, r) => async (i, a, c) => {
					let {
						apiContext: d
					} = c;
					const l = a(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						p = Object(W.a)(m) ? J.e.Post : J.e.Comment,
						b = p === J.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						h = p === J.e.Post ? M.R : N.j;
					if (!b || !u) return !1;
					i(fe()), i(h({
						[m]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: u
						}
					}));
					const f = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						x = await H(d(), f);
					if (x.ok) {
						if (i(xe()), t) {
							i(ve());
							const o = {
									itemId: e,
									message: n,
									title: t.title,
									isLocked: r,
									type: s
								},
								a = await V(d(), Object(J.h)(o, p), p);
							if (a.ok) {
								if ([J.f.Public, J.f.PublicAsSubreddit].includes(s)) {
									if (i(Ee()), a.body) {
										const e = Object(G.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											n = Object(X.f)(l),
											s = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = n && s && Object(K.a)(s, l, l.posts.models[e.postId]);
										if (o || (o = Object(S.a)(e.postId, null, {
												sort: y.x,
												hasSortParam: !0
											})), p === J.e.Post) {
											const n = Object(w.a)(z.c.replyToPost, m);
											i(Object(I.r)({
												...t,
												headCommentId: Object(Q.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: n
											}));
											const s = l.postStickiedComments.data[m];
											i(Object(R.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), s && s !== e.id && i(Object(N.j)({
												[s]: {
													isStickied: !1
												}
											}))
										} else if (p === J.e.Comment) {
											const e = Object(w.a)(z.c.replyToComment, b.id),
												n = Object(Q.j)(l, {
													commentId: m,
													commentsPageKey: o
												});
											i(Object(I.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: o,
												draftKey: e,
												depth: n + 1
											}))
										}
									}
								} else i(ge());
								return !0
							}
							return i(_e(a.error)), !1
						}
					} else i(Oe(x.error)), i(h({
						[m]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, n, o, r) => async (i, a, c) => {
					let {
						apiContext: d
					} = c;
					const l = a(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					i(fe());
					const m = Object(A.f)({
							kind: Y.b.SuccessMod,
							text: s.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [s.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await H(d(), p);
					if (b.ok) {
						const s = {
							ids: e,
							operation: q.a.RemovalReason,
							username: u,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (i(Object(T.b)(s)), t) {
							const s = {
									itemId: e,
									message: n,
									title: t.title,
									type: o
								},
								r = await V(d(), Object(J.h)(s, J.e.Bulk), J.e.Bulk);
							r.ok ? (i(ge()), i(m)) : i(_e(r.error))
						} else i(m)
					} else i(Oe(b.error))
				}
		},
		"./src/reddit/actions/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return b
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "c", (function() {
				return v
			})), n.d(t, "d", (function() {
				return g
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/lib/makeActionCreator/index.ts"),
				r = n("./src/lib/sentry/index.ts"),
				i = n("./src/config.ts"),
				a = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/makeApiRequest/index.ts"),
				d = n("./src/lib/omitHeaders/index.ts"),
				l = n("./src/reddit/constants/headers.ts");
			var u = n("./src/reddit/reducers/features/avatar/index.ts"),
				m = n("./src/reddit/selectors/avatar.ts"),
				p = n("./src/reddit/actions/users.ts");
			Object(s.a)({
				features: {
					avatar: u.a
				}
			});
			const b = "SET_AVATAR_USER",
				h = Object(o.a)(b),
				f = "RANDOM_AVATAR_LOADED",
				x = Object(o.a)(f),
				O = (e, t, n) => async (s, o, r) => {
					let {
						apiContext: u
					} = r;
					var b, h, f, x;
					const O = Object(m.b)(o()),
						v = await (async (e, t, n, s, o) => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatar?skip_telemetry=true`,
							method: a.ob.POST,
							headers: {
								"Content-Type": "application/json ",
								"X-CSRF-Token": o || ""
							},
							data: {
								accessory_ids: t,
								styles: n,
								...s
							}
						}))(u(), e, t, n, O);
					if (!v.ok) throw new Error("User avatar failed to save");
					return s(Object(p.y)(v.body)), {
						accountIcon: null === (h = null === (b = v.body) || void 0 === b ? void 0 : b.avatar) || void 0 === h ? void 0 : h.headshot_image_url,
						fullBodySnoovatar: null === (x = null === (f = v.body) || void 0 === f ? void 0 : f.avatar) || void 0 === x ? void 0 : x.image_url
					}
				}, v = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/account`,
							method: a.ob.GET
						}))(s());
						t.ok && e(h(t.body))
					} catch (o) {
						r.c.captureException(o)
					}
				}, g = () => async (e, t, n) => {
					let {
						apiContext: s
					} = n;
					try {
						const t = await (async e => Object(c.a)(Object(d.a)(e, [l.a]), {
							endpoint: `${i.a.snoovatarUrl}/api/snoovatars/random:byId`,
							method: a.ob.GET
						}))(s());
						t.ok && e(x(t.body))
					} catch (o) {
						r.c.captureException(o)
					}
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
				o = n("./src/reddit/actions/modal.ts"),
				r = n("./src/reddit/actions/users.ts"),
				i = n("./src/reddit/constants/modals.ts"),
				a = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				c = n("./src/reddit/selectors/user.ts"),
				d = n("./src/telemetry/index.ts");
			const l = () => async (e, t) => {
				const n = t();
				Object(d.a)(Object(a.l)(n)), e(Object(r.s)({
					forceFetch: !0
				})), await e(Object(o.g)(i.a.SNOOVATAR_MODAL))
			};

			function u() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
				return async (t, n) => {
					const {
						clickSource: r,
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: h
					} = e, f = n();
					r && Object(d.a)(Object(a.g)(r)(f)), Object(c.R)(f) ? await t(Object(o.h)(i.a.SNOOVATAR_MODAL, {
						share: l,
						source: u,
						activeTab: m,
						activeMeSubpage: p,
						activeDetails: b,
						shopTabState: h
					})) : await t(Object(s.openLoginModal)())
				}
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.m.less": function(e, t, n) {
			e.exports = {
				AdLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				adLinkWrapper: "LniF5nGHFXZ6i7_mQiEaT",
				ctaExperiment: "_3JgLF82C_0NM3uN8pOyJTu",
				borders: "_3LUqJuEsn44ivYFDMegLQG",
				borderTop: "_2n1stnecLcYB2e1RjBwSq_",
				borderBottom: "_2EVJbBkxJortsXpkuVWaPA"
			}
		},
		"./src/reddit/components/AdLinkWrapper/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				a = n("./src/reddit/components/AdLinkWrapper/index.m.less"),
				c = n.n(a);

			function d() {
				return (d = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = function(e) {
				const {
					className: t,
					ctaExperimentDesign: n,
					children: s,
					...a
				} = e, l = Object(r.a)(c.a.adLinkWrapper, t, {
					[c.a.ctaExperiment]: !!n,
					[c.a.borders]: "classic" === n,
					[c.a.borderTop]: "compact" === n || "conversation" === n,
					[c.a.borderBottom]: "card" === n
				});
				return o.a.createElement("div", d({
					className: l,
					"data-adclicklocation": i.a.CTA_WHITESPACE
				}, a), s)
			}
		},
		"./src/reddit/components/AdLinkWrapperContent/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/AdLinkWrapperContent/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/CallToActionButton/index.tsx"),
				c = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				d = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				u = n("./src/reddit/components/AdLinkWrapperContent/index.m.less"),
				m = n.n(u);
			t.a = e => {
				const {
					adLinkContent: t,
					post: n,
					isCompact: o
				} = e, {
					source: u,
					callToAction: p,
					caption: b
				} = t;
				if (!u || !u.url) return null;
				let h = u.displayText;
				u.displayText.length >= 40 && (h = u.displayText.slice(0, 40 - "...".length) + "...");
				const f = Object(d.t)(n, u.displayText),
					x = Object(d.u)(n) ? h : b,
					O = Object(d.u)(n) ? n.subcaption : u.displayText,
					v = Object(i.a)(m.a.leftSideContent, {
						[m.a.ctaExperimentNoPadding]: e.ctaExperimentDesign && "card" !== e.ctaExperimentDesign,
						[m.a.ctaExperimentPadded]: "card" === e.ctaExperimentDesign
					}),
					g = Object(i.a)(m.a.displayUrl, {
						[m.a.ctaExperimentLink]: !!e.ctaExperimentDesign
					});
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: v
				}, b && !o && !f && r.a.createElement("span", {
					className: m.a.caption,
					title: b,
					"data-adclicklocation": l.a.CTA_CAPTION
				}, b), !f && r.a.createElement(c.a, {
					href: u.url.replace(s.a.redditUrl, ""),
					isSponsored: n.isSponsored,
					postId: n.id,
					source: u,
					className: g,
					"data-adclicklocation": l.a.CTA_URL
				}, h), f && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
					className: m.a.productTitle
				}, x), r.a.createElement("span", {
					className: m.a.subcaption
				}, O))), p && r.a.createElement(a.a, {
					className: m.a.callToAction,
					href: u.url,
					isSponsored: n.isSponsored,
					postId: n.id,
					source: u,
					showCTAExperiment: !!e.ctaExperimentDesign,
					"data-adclicklocation": l.a.CTA_BUTTON
				}, p))
			}
		},
		"./src/reddit/components/AvatarPost/index.m.less": function(e, t, n) {
			e.exports = {
				avatarPostContainer: "_2nck8non0VYnkIkyUpuvpw",
				avatarPostImage: "_2yQLdTnHA0y3hZ3I588oUM"
			}
		},
		"./src/reddit/components/CallToActionButton/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/CallToActionButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/OutboundLink/index.tsx"),
				a = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				c = n("./src/reddit/components/CallToActionButton/index.m.less"),
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
			t.a = e => {
				let {
					className: t,
					showCTAExperiment: n,
					...s
				} = e;
				return o.a.createElement(i.b, l({
					className: Object(r.a)(d.a.CallToActionButton, t, {
						[d.a.mNotCardView]: s.isNotCardView,
						[d.a.ctaExperiment]: !!n
					}),
					"data-adclicklocation": a.a.CTA_BUTTON
				}, s))
			}
		},
		"./src/reddit/components/CommentSort/CommentSort.m.less": function(e, t, n) {
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
		"./src/reddit/components/CommentSort/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return me
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/actions/comment/index.ts"),
				m = n("./src/reddit/actions/modal.ts"),
				p = n("./src/reddit/actions/post.ts"),
				b = n("./src/reddit/actions/toaster.ts"),
				h = n("./src/lib/makeApiRequest/index.ts"),
				f = n("./src/lib/omitHeaders/index.ts"),
				x = n("./src/reddit/constants/headers.ts"),
				O = n("./src/reddit/models/Toast/index.ts");
			const v = (e, t) => async (n, o, r) => {
				let {
					apiContext: i
				} = r;
				const a = await (async (e, t, n) => Object(h.a)(Object(f.a)(e, [x.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: d.ob.POST,
						data: {
							api_type: "json",
							id: t,
							sort: n
						}
					}))(i(), e, t),
					c = `error-block-${t}`,
					l = `success-block-${t}`;
				if (a.ok) {
					n(Object(p.R)({
						[e]: {
							suggestedSort: t
						}
					}));
					const o = t ? s.fbt._("Suggested sort is on.", null, {
						hk: "tW1Rb"
					}) : s.fbt._("Suggested sort is off.", null, {
						hk: "4fwvgj"
					});
					n(b.f({
						id: l,
						kind: O.b.SuccessCommunityGreen,
						text: o
					}))
				} else n(b.f({
					id: c,
					kind: O.b.Error,
					text: s.fbt._("Try again later", null, {
						hk: "1Lqlj2"
					}),
					buttonText: s.fbt._("Retry", null, {
						hk: "44HF9e"
					}),
					buttonAction: v(e, t)
				}))
			};
			var g = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				E = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				_ = n("./src/reddit/components/LinkOrOverlayLink/index.tsx"),
				j = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				C = n("./src/reddit/components/TrackingHelper/index.tsx"),
				y = n("./src/reddit/controls/Dropdown/index.tsx"),
				k = n("./src/reddit/controls/Dropdown/Row.tsx"),
				S = n("./node_modules/react-router-redux/es/index.js"),
				w = n("./src/lib/addQueryParams/index.ts"),
				T = n("./src/lib/makeSearchKey/index.ts"),
				N = n("./src/lib/search/index.ts"),
				I = n("./src/reddit/actions/pages/search/index.ts"),
				R = n("./src/reddit/constants/keycodes.ts"),
				P = n("./src/reddit/constants/parameters.ts"),
				M = n("./src/reddit/contexts/PageLayer/index.tsx"),
				A = n("./src/reddit/controls/SearchBar/index.tsx"),
				L = n("./src/reddit/helpers/clickSourceData/index.ts"),
				D = n("./src/reddit/hooks/usePageLayer.ts"),
				F = n("./src/reddit/selectors/platform.ts");
			const B = "comment-search-bar",
				U = "comment-search-button",
				H = "search/";

			function V(e) {
				const {
					expanded: t,
					bucketed: n
				} = e.experiment, a = Object(D.a)(), c = (null == a ? void 0 : a.queryParams.q) || "", [l, u] = Object(o.useState)(c), [m, p] = Object(o.useState)(t), b = Object(i.d)(), h = Object(i.e)(e => Object(M.h)(e, {
					pageLayer: a
				})), f = Object(i.e)(e => Object(M.s)(e, {
					pageLayer: a
				})), x = Object(i.e)(e => Object(F.j)(e));

				function O() {
					if (!l.trim() || !h) return;
					const e = Object(N.b)(l),
						t = `${new URL(h.permalink).pathname}${H}`,
						n = {
							[P.z]: e,
							[P.P]: [d.ic.Comments],
							[P.C]: "1",
							...(null == f ? void 0 : f.isNSFW) ? {
								[P.L]: "1"
							} : {},
							...(null == h ? void 0 : h.isNSFW) ? {
								[P.m]: "1"
							} : {}
						},
						s = Object(L.b)(a),
						o = Object(T.b)(h.id, void 0, n);
					b(Object(I.d)({
						key: o,
						options: n,
						subredditName: null == f ? void 0 : f.name,
						postId: h.id
					}));
					const r = Object(w.a)(t, n);
					b(Object(S.b)(r, {
						...s,
						isOverlay: x
					}))
				}
				return n ? r.a.createElement("div", null, l || m ? r.a.createElement("div", {
					"data-testid": B
				}, r.a.createElement(A.a, {
					onSearch: O,
					onKeyPress: function(e) {
						e.key === R.b.Enter && O()
					},
					onTextChange: e => {
						u(e.target.value)
					},
					value: l
				})) : r.a.createElement("button", {
					"data-testid": U,
					onClick: () => p(!0)
				}, s.fbt._("Search comments", null, {
					hk: "2ObH7B"
				}))) : null
			}
			var W = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				G = n("./src/reddit/helpers/path/index.ts"),
				K = n("./src/reddit/selectors/telemetry.ts");
			n("./src/telemetry/models/Event.ts");
			const q = (e, t, n, s, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(K.z)(r, void 0, {
						oldSort: n,
						sort: s,
						source: o
					}),
					userSubreddit: Object(K.ub)(r)
				}),
				z = (e, t) => n => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				J = e => ({
					subreddit: Object(K.kb)(e),
					userSubreddit: Object(K.ub)(e)
				}),
				Y = e => t => ({
					source: "contest_mode",
					action: "click",
					noun: e ? "enable" : "disable",
					...J
				});
			var Q = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				X = n("./src/reddit/icons/svgs/Info/index.tsx"),
				Z = n("./src/reddit/selectors/activeModalId.ts"),
				$ = n("./src/reddit/selectors/comments.ts"),
				ee = n("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				te = n("./src/reddit/selectors/moderatorPermissions.ts"),
				ne = n("./src/reddit/selectors/posts.ts"),
				se = n("./src/reddit/selectors/tooltip.ts"),
				oe = n("./src/reddit/selectors/user.ts"),
				re = n("./src/reddit/components/CommentSort/CommentSort.m.less"),
				ie = n.n(re),
				ae = n("./src/reddit/reducers/features/comments/visitHighlightingFilter/index.ts");
			const ce = Object(j.a)(y.a),
				de = e => e === ae.a.First ? s.fbt._("First Visit", null, {
					hk: "HdDSr"
				}) : e === ae.a.Last ? s.fbt._("Last Visit", null, {
					hk: "3ubIq3"
				}) : s.fbt._("None", null, {
					hk: "4jwXNg"
				});
			class le extends r.a.Component {
				constructor() {
					super(...arguments), this.track = () => {
						const {
							trackHighlight: e,
							selectedSort: t
						} = this.props;
						if (t !== ae.a.None) {
							e(t === ae.a.Last ? "since_last_visit" : "since_first_visit", "view")
						}
					}, this.onDropdownClick = (e, t) => {
						this.props.trackHighlight(e, "click"), this.props.changeHighlightSort(t)
					}, this.onDropdownClickFirst = () => {
						this.onDropdownClick("since_first_visit", ae.a.First)
					}, this.onDropdownClickLast = () => {
						this.onDropdownClick("since_last_visit", ae.a.Last)
					}, this.onDropdownClickNone = () => {
						this.onDropdownClick("do_not_highlight", ae.a.None)
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
						onOpen: n,
						selectedSort: o
					} = this.props;
					return r.a.createElement("div", {
						className: ie.a.HighlightWrapper
					}, r.a.createElement(k.b, {
						className: Object(c.a)(ie.a.HighlightPicker, ie.a.Row),
						textClassName: ie.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Highlight",null,{hk:"2ZiUE8"})}: ${de(o)}`,
						id: t,
						noHover: !0,
						onClick: n
					}), r.a.createElement(Q.b, {
						className: ie.a.DropdownTriangle,
						onClick: n
					}), r.a.createElement(ce, {
						isOpen: e,
						renderContentsHidden: !0,
						tooltipId: t
					}, r.a.createElement(k.b, {
						displayText: de(ae.a.First),
						isSelected: o === ae.a.First,
						onClick: this.onDropdownClickFirst
					}), r.a.createElement(k.b, {
						displayText: de(ae.a.Last),
						isSelected: o === ae.a.Last,
						onClick: this.onDropdownClickLast
					}), r.a.createElement(k.b, {
						displayText: de(ae.a.None),
						isSelected: o === ae.a.None,
						onClick: this.onDropdownClickNone
					})))
				}
			}
			var ue = le;
			const me = "CommentSort--SortPicker",
				pe = "CommentSort--HighlightPicker",
				be = "CommentSort--Tooltip",
				he = Object(j.a)(y.a),
				fe = Object(a.c)({
					commentPermalink: (e, t) => {
						let {
							commentId: n
						} = t;
						return n && Object($.m)(e, {
							commentId: n
						})
					},
					commentSearchPdp: e => Object(ee.a)(e),
					contestModeModalIsOpen: Object(Z.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(se.b)(me),
					highlightIsOpen: Object(se.b)(pe),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(te.m)(e, {
							postId: n
						});
						return !!s && s.posts
					},
					post: ne.G,
					postPermalink: ne.F,
					showCommentHighlighter: (e, t) => {
						let {
							postId: n
						} = t;
						const s = Object(oe.w)(e),
							o = !!Object(te.m)(e, {
								postId: n
							}),
							r = Object(ne.G)(e, {
								postId: n
							});
						return (o || s) && !!r && !!r.previousVisits && r.previousVisits.length > 0
					},
					selectedHighlightSort: $.p
				}),
				xe = Object(i.b)(fe, (e, t) => {
					let {
						postId: n
					} = t;
					return {
						changeHighlightSort: t => e(Object(u.b)({
							sort: t
						})),
						onOpenDropdown: () => e(Object(l.h)({
							tooltipId: me
						})),
						onOpenHighlightDropdown: t => {
							e(Object(l.h)({
								tooltipId: pe
							})), t()
						},
						onSetSuggestedSort: t => e(v(n, t)),
						hideTooltip: () => e(Object(l.i)()),
						setContestMode: t => e(Object(p.W)(t, n)),
						showTooltip: () => e(Object(l.h)({
							tooltipId: be
						})),
						toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
					}
				});
			class Oe extends r.a.Component {
				constructor() {
					super(...arguments), this.tooltipTargetElement = null, this.sendCommentSortEvent = (e, t, n, s) => this.props.sendEvent(q(e, this.props.isOverlay, t, n, s)), this.onOpenDropdownClick = () => {
						this.props.onOpenDropdown(), this.sendCommentSortEvent("sorting", void 0, this.props.sort, "post_detail")
					}, this.onSortOptionClick = e => this.sendCommentSortEvent("sort_by", this.props.sort, e, "post_detail"), this.clearSortOnClick = () => {
						this.props.onSetSuggestedSort(null), this.sendCommentSortEvent("clear_suggested_sort", this.props.sort)
					}, this.setSortOnClick = () => {
						const e = this.props.suggestedSort || void 0;
						this.props.onSetSuggestedSort(this.props.sort), this.sendCommentSortEvent("set_suggested_sort", e, this.props.sort)
					}, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onOpenHighlightSelector = () => {
						this.props.onOpenHighlightDropdown(z("dropdown", "click"))
					}, this.setContestMode = () => {
						this.props.sendEvent(Y(!this.props.post.contestMode)), this.props.setContestMode(!this.props.post.contestMode)
					}
				}
				addSuggestedLabel(e) {
					return s.fbt._("{sort name} (suggested)", [s.fbt._param("sort name", e)], {
						hk: "3pDfQ9"
					})
				}
				render() {
					const {
						changeHighlightSort: e,
						className: t,
						commentId: n,
						commentPermalink: o,
						commentSearchPdp: i,
						contestModeModalIsOpen: a,
						dropdownIsOpen: l,
						elementRef: u,
						hideTooltip: m,
						highlightIsOpen: p,
						hasModeratorPostPermissions: b,
						isOverlay: h,
						location: f,
						post: x,
						postPermalink: O,
						selectedHighlightSort: v,
						showCommentHighlighter: j,
						sort: C,
						suggestedSort: y,
						showTooltip: S,
						toggleContestModeModal: w
					} = this.props, T = x.contestMode, N = !f.search.includes(d.w.CONFIDENCE), I = C === d.w.CONFIDENCE && N, R = b && !I, P = d.y[C], M = P ? P() : "", A = y && C === y && !I ? this.addSuggestedLabel(M) : M, L = T ? s.fbt._("End contest mode?", null, {
						hk: "2AkJRZ"
					}) : s.fbt._("Start contest?", null, {
						hk: "2PQPOu"
					}), D = T ? s.fbt._("End", null, {
						hk: "1Q8KqM"
					}) : s.fbt._("Start", null, {
						hk: "Mjvpj"
					}), F = T ? s.fbt._("Ending contest mode will make comment vote scores visible and disable random comment ordering.", null, {
						hk: "3PXrGq"
					}) : s.fbt._("Starting a contest will hide comment vote scores and randomize the order of the comments for non-mods.", null, {
						hk: "EDqlf"
					}), B = T && !b;
					return r.a.createElement("div", {
						className: Object(c.a)(t, ie.a.container, {
							[ie.a.hideCommentSort]: !j && B
						}),
						ref: u
					}, r.a.createElement("div", {
						className: ie.a.containerRow
					}, !B && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: ie.a.DropdownContainer
					}, r.a.createElement(k.b, {
						className: Object(c.a)(ie.a.SortPicker, ie.a.Row),
						textClassName: ie.a.SortOptionDropdownText,
						displayText: `${s.fbt._("Sort by",null,{hk:"E6T9r"})}: ${A}`,
						id: me,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(Q.b, {
						className: ie.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), i.bucketed && r.a.createElement("div", null, r.a.createElement(V, {
						experiment: i,
						commentId: n,
						postId: this.props.postId
					})), r.a.createElement(he, {
						isOpen: l,
						tooltipId: me
					}, [d.w.CONFIDENCE, d.w.TOP, d.w.NEW, d.w.CONTROVERSIAL, d.w.OLD, d.w.QA].map(e => {
						const t = o || O,
							n = Object(G.b)(t),
							s = d.y[e],
							i = s ? s() : "";
						return r.a.createElement(_.a, {
							className: ie.a.ViewFullLinkOrOverlayLink,
							isOverlay: h,
							key: e,
							onClick: () => this.onSortOptionClick(e),
							role: "menuitem",
							tabIndex: -1,
							to: `${n}?sort=${e}`
						}, r.a.createElement(k.b, {
							displayText: i,
							isSelected: C === e,
							skipRoleAttr: !0
						}))
					}))), R && !B && (y ? r.a.createElement("button", {
						className: ie.a.SortLink,
						onClick: C !== y ? this.setSortOnClick : this.clearSortOnClick
					}, C !== y ? s.fbt._("Set new suggested sort", null, {
						hk: "13BpoB"
					}) : s.fbt._("Clear suggested sort", null, {
						hk: "3WWQBy"
					})) : r.a.createElement("button", {
						className: ie.a.SetSort
					}, r.a.createElement("button", {
						className: ie.a.SortLink,
						onClick: this.setSortOnClick
					}, s.fbt._("Set as suggested sort", null, {
						hk: "3qLzxp"
					})), r.a.createElement("span", {
						id: be,
						onMouseEnter: S,
						onMouseLeave: m
					}, r.a.createElement(E.c, {
						className: ie.a.Tooltip,
						text: s.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: be
					}), r.a.createElement(X.a, {
						className: ie.a.Info
					})))), b && r.a.createElement("button", {
						className: ie.a.ContestMode,
						onClick: this.props.toggleContestModeModal
					}, s.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(W.a, {
						className: ie.a.ToggleSwitch,
						on: T
					}))), j && r.a.createElement("div", {
						className: ie.a.containerRow
					}, r.a.createElement(ue, {
						changeHighlightSort: e,
						highlightIsOpen: p,
						id: pe,
						onOpen: this.onOpenHighlightSelector,
						selectedSort: v,
						trackHighlight: z
					})), a && r.a.createElement(g.a, {
						actionText: D,
						headerText: L,
						modalText: F,
						onConfirm: this.setContestMode,
						toggleModal: w,
						withOverlay: !0
					}))
				}
			}
			t.b = xe(Object(C.c)(Oe))
		},
		"./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const a = 5;

			function c(e) {
				const {
					post: t,
					postIds: n,
					subredditId: s
				} = e, c = Object(r.e)(e => e.subreddits.questions), d = Object(r.e)(e => e.posts.models);
				if (!n) return null;
				const l = n.indexOf(t.id);
				if (l < 0) return null;
				if (!p(t.id)) return null;
				const u = new Set;
				let m = !1;
				for (let o = 0, r = -999; o <= l; o += 1) {
					const e = n[o],
						t = d[e].belongsTo.id;
					p(e) && o - r >= a && !u.has(t) && (r = o, u.add(t), o === l && (m = !0))
				}
				return m ? o.a.createElement(i.a, {
					subredditId: s,
					inFeed: !0
				}) : null;

				function p(e) {
					var t;
					return (null === (t = c[d[e].belongsTo.id]) || void 0 === t ? void 0 : t.length) > 0
				}
			}
		},
		"./src/reddit/components/CommunityTopicSurvey/async.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(s.a)({
				resolved: {},
				chunkName: () => "CommunityTopicSurvey",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: async () => n.e("CommunityTopicSurvey").then(n.bind(null, "./src/reddit/components/CommunityTopicSurvey/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
				},
				resolve() {
					return "./src/reddit/components/CommunityTopicSurvey/index.tsx"
				}
			});
			t.a = o
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
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
			const u = Object(i.a)(e => {
				let {
					className: t,
					...n
				} = e;
				return o.a.createElement(a.a, l({}, n, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(d.a.customScoreStyles, n.scoreClassName),
					downvoteClassName: Object(a.b)(n) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/eventTools/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				c = n("./src/reddit/components/EventPost/PostEventMeta/index.tsx"),
				d = n("./src/reddit/components/PostFollow/index.tsx"),
				l = n("./src/reddit/helpers/postCollection.ts"),
				u = n("./src/reddit/helpers/postEvent.ts"),
				m = n("./src/reddit/components/EventPost/EventMetaHeader/index.m.less"),
				p = n.n(m);
			const b = a.a.div("EventMetaWrapper", p.a);
			t.a = e => {
				let {
					className: t,
					isCompactMode: n,
					post: s
				} = e;
				if (!Object(u.a)(s)) return null;
				const a = s && s.eventInfo,
					m = Object(l.a)(s),
					h = a && Object(i.c)(a.eventStart, a.eventEnd);
				return o.a.createElement("div", {
					className: Object(r.a)(p.a.container, t, {
						[p.a.isCompact]: !!n
					})
				}, o.a.createElement(b, {
					className: p.a.eventMetaWrapper
				}, o.a.createElement(c.a, {
					post: s
				}), !m && h && o.a.createElement(d.a, {
					className: p.a.eventFollowButton,
					post: s,
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
				o = n.n(s),
				r = n("./src/lib/eventTools/index.ts"),
				i = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				a = n("./src/reddit/icons/fonts/Calendar/index.tsx"),
				c = n("./src/reddit/icons/fonts/Live/index.tsx"),
				d = n("./src/reddit/components/HumanDate/index.tsx"),
				l = n("./src/reddit/components/EventPost/PostEventMeta/index.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");
			const p = m.a.span("PostEventFutureText", u.a),
				b = m.a.span("PostEventPastText", u.a),
				h = m.a.span("PostEventNowText", u.a),
				f = m.a.span("Container", u.a),
				x = m.a.wrapped(a.a, "CalendarIcon", u.a),
				O = m.a.wrapped(c.a, "LiveIcon", u.a),
				v = m.a.div("LoadingState", u.a);
			class g extends s.Component {
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
						eventIsLive: a,
						eventStart: c
					} = n, l = Object(r.e)(c, s);
					let u, m;
					if (this.state.mounted || l === r.a.Live) u = o.a.createElement(d.c, {
						startTime: c,
						endTime: s,
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
					if (a) m = o.a.createElement(h, null, o.a.createElement(O, null), u);
					else if (l === r.a.Future) m = o.a.createElement(p, null, o.a.createElement(x, null), u);
					else {
						if (l !== r.a.Past) return null;
						m = o.a.createElement(b, null, o.a.createElement(x, null), u)
					}
					return o.a.createElement(f, {
						className: e
					}, m)
				}
			}
			t.a = g
		},
		"./src/reddit/components/Governance/VaultActionLink/async.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			}));
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/reddit/featureFlags/component.tsx");
			const r = Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/index.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/index.tsx"
					}
				}, {
					ssr: !1
				}),
				i = Object(o.a)("spBurnLinks", Object(s.a)({
					resolved: {},
					chunkName: () => "CryptoVault",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!n.m[t]
					},
					importAsync: () => n.e("CryptoVault").then(n.bind(null, "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return n(t)
					},
					resolve() {
						return "./src/reddit/components/Governance/VaultActionLink/VaultActionPills.tsx"
					}
				}, {
					ssr: !1
				}))
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "e", (function() {
				return v
			})), n.d(t, "c", (function() {
				return g
			}));
			var s = n("./src/config.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				a = n("./src/reddit/icons/svgs/ModRemove/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				d = n("./src/reddit/models/Post/index.ts"),
				l = n("./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less"),
				u = n.n(l);
			const {
				fbt: m
			} = n("./node_modules/fbt/lib/FbtPublic.js"), p = e => {
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
			}, h = () => m._("To keep Reddit and its communities safe, the Anti-Evil Operations team removes posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", r.a.createElement("a", {
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
			}), f = () => m._("Reddit administrators occasionally remove posts that violate Reddit's {=User Agreement} and {=Content Policy} .", [m._param("=User Agreement", r.a.createElement("a", {
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
			}), x = (e, t) => {
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
			}, O = (e, t) => {
				switch (e) {
					case d.g.AntiEvilOps:
						return r.a.createElement(h, null);
					case d.g.AuthorDeleted:
					case d.g.Author:
						return m._("It doesn't appear in any feeds, and anyone with a direct link to it will see a message like this one.", null, {
							hk: "2OBDBc"
						});
					case d.g.AutomodFiltered:
						return m._("This post is currently awaiting approval by the moderators of {=[subreddit name]} before it can appear in the subreddit.", [m._param("=[subreddit name]", r.a.createElement("a", {
							className: u.a.link,
							href: `${s.a.redditUrl}/r/${t}`,
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
						return r.a.createElement(f, null);
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
			}, v = (e, t, n) => {
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
						return m._("This post was removed by r/{subredditName} moderator, u/{username}.", [m._param("subredditName", n), m._param("username", t)], {
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
			}, g = e => {
				switch (e) {
					case d.g.AntiEvilOps:
						return r.a.createElement(h, null);
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
							href: `${s.a.redditUrl}/message/compose/?to=r/reddit.com`,
							target: "_blank",
							rel: "noopener noreferrer"
						}, m._("just ask", null, {
							hk: "jn9ip"
						})))], {
							hk: "3hMocZ"
						});
					case d.g.ContentTakedown:
						return r.a.createElement(f, null);
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
		"./src/reddit/components/InfoBanners/PostRemovalBanner/index.m.less": function(e, t, n) {
			e.exports = {
				BannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				bannerBase: "_2bSWRKmIOj8SKw_5EOrpVb",
				icon: "S7CavmS-v3qdubhT9asIc",
				link: "FmwbWt4ZwkxbQbR-0vj1G"
			}
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.m.less": function(e, t, n) {
			e.exports = {
				optionalText: "_1Bdk-WLPvP2xHwSSQ3qsHq"
			}
		},
		"./src/reddit/components/IntuitivePostTypes/OptionalText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/IntuitivePostTypes/OptionalText.m.less"),
				i = n.n(r),
				a = n("./src/reddit/components/RichTextJson/index.tsx");
			t.a = e => {
				let {
					content: t,
					rtJsonElementProps: n
				} = e;
				return o.a.createElement("div", {
					className: i.a.optionalText
				}, o.a.createElement(a.a, {
					content: t,
					rtJsonElementProps: n
				}))
			}
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				i = n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				a = n("./src/reddit/helpers/overlay/index.ts");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function d(e) {
				const {
					children: t,
					className: n,
					to: s,
					...r
				} = e, d = Object(a.b)(s);
				return o.a.createElement(i.a, c({
					className: n,
					to: d
				}, r), t)
			}

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => {
				const {
					isOverlay: t,
					...n
				} = e, s = t ? d : r.a;
				return o.a.createElement(s, l({}, n, {
					children: n.children,
					className: n.className,
					onClick: n.onClick,
					to: n.to
				}))
			}
		},
		"./src/reddit/components/Media/BlurredContent.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return c
			})), n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/Media/index.m.less"),
				a = n.n(i);
			const c = (e, t) => e && t ? s.fbt._("Click to see nsfw spoiler", null, {
					hk: "4EdPWu"
				}) : e ? s.fbt._("Click to see nsfw", null, {
					hk: "4CErse"
				}) : t ? s.fbt._("Click to see spoiler", null, {
					hk: "1x3iUE"
				}) : void 0,
				d = e => {
					let {
						isNSFW: t,
						isSpoiler: n
					} = e;
					return r.a.createElement("div", {
						className: a.a.unblurButtonContainer
					}, r.a.createElement("button", {
						className: a.a.unblurButton
					}, c(t, n)))
				}
		},
		"./src/reddit/components/Media/EmbedBox/index.m.less": function(e, t, n) {
			e.exports = {
				embedBox: "_3K6DCjWs2dQ93YYZDOHjib"
			}
		},
		"./src/reddit/components/Media/EmbedBox/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/addQueryParams/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/forceHttps/index.ts"),
				l = n("./src/reddit/constants/tracking.ts"),
				u = n("./src/reddit/models/Media/index.ts"),
				m = n("./src/reddit/selectors/user.ts"),
				p = n("./src/reddit/components/Media/EmbedBox/index.m.less"),
				b = n.n(p);
			const h = ["allow-forms", "allow-orientation-lock", "allow-popups", "allow-popups-to-escape-sandbox", "allow-presentation", "allow-same-origin", "allow-scripts", "allow-top-navigation-by-user-activation"].join(" "),
				f = Object(r.b)(() => Object(i.c)({
					isNightmodeOn: m.eb
				}));
			t.a = f(e => {
				const t = {
						responsive: "true",
						is_nightmode: e.isNightmodeOn
					},
					n = e.isResponsive ? Object(a.a)(Object(d.a)(e.source), t) : Object(d.a)(e.source),
					s = {
						overflow: "hidden"
					};
				return s.width = e.width && !e.fullWidth ? `${e.width}px` : "100%", e.showCentered && (s.margin = "0 auto"), e.isListing || (s.maxHeight = `${u.e}px`), void 0 !== e.maxHeight && (s.maxHeight = e.maxHeight || void 0), e.isTweet || (s.height = "100%"), o.a.createElement("iframe", {
					className: Object(c.a)(l.a, b.a.embedBox, e.className),
					height: e.height,
					width: e.width && !e.fullWidth ? e.width : "100%",
					onLoad: e.onLoad,
					ref: e.childRef,
					title: e.title,
					sandbox: h,
					scrolling: "no",
					src: n,
					style: s,
					allowFullScreen: !0
				})
			})
		},
		"./src/reddit/components/Media/ImageBox/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Media/ImageBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return N
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/forceHttps/index.ts"),
				u = n("./src/lib/opener/index.ts"),
				m = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				p = n("./src/reddit/components/Media/BlurredContent.tsx"),
				b = n("./src/reddit/components/PlayButton/index.tsx"),
				h = n("./src/reddit/constants/adEvents.ts"),
				f = n("./src/reddit/constants/elementClassNames.ts"),
				x = n("./src/reddit/controls/OutboundLink/index.tsx"),
				O = n("./src/reddit/helpers/trackers/ads.ts"),
				v = n("./src/reddit/hooks/useClickSourceData.ts"),
				g = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				E = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/selectors/posts.ts"),
				j = n("./src/reddit/selectors/telemetry.ts"),
				C = n("./src/reddit/selectors/user.ts"),
				y = n("./src/reddit/constants/tracking.ts"),
				k = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				S = n("./src/reddit/components/Media/ImageBox/index.m.less"),
				w = n.n(S);

			function T() {
				return (T = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const N = e => e > 2 * E.e,
				I = e => r.a.createElement("img", {
					alt: e.altText || s.fbt._("Comment image", null, {
						hk: "1DiDxV"
					}),
					className: Object(d.a)(e.className, {
						[w.a.renderSmallMedia]: e.renderSmallMedia
					}),
					src: e.src
				}),
				R = e => {
					const t = Object(d.a)(w.a.image, f.g, e.className, {
							[w.a.mShowCentered]: e.showCentered,
							[w.a.mShowBlurred]: e.shouldBlur
						}),
						n = {};
					e.showFull || e.isTall || (n.maxHeight = `${E.j}px`), e.isListing || e.isTall && N(e.height) || (n.maxHeight = `${E.e}px`), e.isExpando && e.maxHeight && (n.maxHeight = `${e.maxHeight}px`), e.isExpando && e.maxWidth && (n.maxWidth = `${e.maxWidth}px`);
					const i = Object(o.useRef)(null),
						[a, c] = Object(o.useState)(!1),
						l = Object(o.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t
								} = e;
								!a && t && c(!0)
							})
						}, [a]),
						u = Object(o.useRef)({
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
					const h = Object(o.useRef)({
						height: b
					});
					return e.renderSmallMedia ? r.a.createElement("div", {
						ref: i,
						style: h.current
					}, a && r.a.createElement(I, T({}, e, {
						className: t
					}))) : r.a.createElement("img", {
						alt: e.altText || s.fbt._("Post image", null, {
							hk: "3KfCgs"
						}),
						className: t,
						src: e.src,
						style: n
					})
				},
				P = e => {
					const t = {};
					return (!e.showFull && Object(E.L)(e.height, e.width) || e.shouldBlur) && (t.overflow = "hidden"), e.showFull || (t.maxHeight = `${E.j}px`, e.shouldBlur && (t.maxWidth = Object(E.L)(e.height, e.width) ? `${E.z}px` : `${e.width}px`)), e.showCentered && (t.margin = "0 auto"), e.isExpando && e.maxHeight && (t.maxHeight = `${e.maxHeight}px`), r.a.createElement("div", {
						className: Object(d.a)(w.a.container, e.className, {
							[w.a.alignLeft]: e.alignLeft
						}),
						style: t
					}, e.children)
				},
				M = Object(i.b)(() => Object(c.a)(_.F, C.kb, (e, t) => {
					let {
						isSponsored: n,
						postId: s
					} = t;
					return n && s ? Object(_.b)(e, s) : null
				}, j.d, _.G, (e, t, n, s, o) => ({
					postPermalink: e,
					shouldOpenPostInNewTab: t,
					basePixelMetadata: n,
					pageType: s.pageType,
					post: o
				})));
			t.a = M(e => {
				const t = Object(v.a)();
				return e.outboundUrl && !e.shouldBlur ? r.a.createElement("a", {
					"data-testid": "imagebox-outboundurl",
					"data-adclicklocation": k.a.MEDIA,
					href: e.outboundUrl,
					target: "_blank",
					rel: u.a,
					onMouseDown: t => {
						e.source && e.outboundUrl && e.isSponsored && e.basePixelMetadata && Object(x.c)(t.currentTarget, e.postId, e.basePixelMetadata)
					},
					onClick: () => {
						e.isSponsored && e.post.postId && (e.fireAdPixelsOfType && e.fireAdPixelsOfType(e.post, h.a.Click), Object(O.a)(e.post, e.pageType))
					}
				}, L(e)) : e.isListing && e.postPermalink ? r.a.createElement(a.a, {
					target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
					to: Object(m.a)(e.postPermalink, void 0, t),
					onClick: e.onPostMediaClick
				}, L(e)) : L(e)
			});
			const A = (e, t) => r.a.createElement(R, {
					altText: t.altText,
					className: Object(d.a)(t.imageClassName, {
						[y.a]: !e
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
						...n
					} = e;
					const o = Object(E.L)(n.height, n.width),
						i = N(n.height) && o;
					return r.a.createElement(P, T({}, n, {
						className: `${o?`${y.a} `:""}${n.className||""}`
					}), n.isListing ? r.a.createElement("div", {
						className: n.contentImageClassName
					}, A(o, n)) : r.a.createElement("a", {
						href: n.originalSource,
						onClick: t,
						style: i ? {
							maxWidth: "50%"
						} : {},
						target: "_blank",
						rel: u.c,
						className: w.a.imageLink
					}, A(o, n), n.shouldBlur && !n.isVideoThumbnail && !n.isNsfwBlockingModalEligible && r.a.createElement(p.a, {
						isNSFW: !!n.isNSFW,
						isSpoiler: !!n.isSpoiler
					})), n.isListing && !n.showFull && n.height > E.j && Object(E.L)(n.height, n.width) && r.a.createElement("div", {
						className: w.a.seeMore
					}, s.fbt._("see full image", null, {
						hk: "1Qygw5"
					})), n.isVideoThumbnail && r.a.createElement(b.a, {
						onClick: t
					}))
				}
		},
		"./src/reddit/components/Media/MediaContainer/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Media/MediaContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/forceHttps/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/components/Media/MediaContainer/index.m.less"),
				d = n.n(c);
			const l = e => {
				let t = null;
				(e.showFull || e.height < a.j) && (t = e.height), e.maxGalleryHeight && (t = e.maxGalleryHeight);
				const n = {
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
					s = e.blurSrc ? o.a.createElement("img", {
						className: d.a.blur,
						src: Object(i.a)(e.blurSrc)
					}) : null,
					c = Object(a.B)(e.height, e.width, e.forceAspectRatio);
				return o.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className, {
						[d.a.video]: e.isVideo,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					}),
					"data-click-id": "media",
					style: e.isGalleryTileLayout ? void 0 : n
				}, s, !e.isGalleryTileLayout && o.a.createElement("div", {
					className: d.a.spacer,
					style: {
						paddingBottom: `${c}%`
					}
				}), o.a.createElement("div", {
					className: Object(r.a)(d.a.wrapper, {
						[d.a.mColoredBackground]: !e.blurSrc,
						[d.a.isGalleryTileLayout]: !!e.isGalleryTileLayout
					})
				}, e.children))
			};
			class u extends o.a.Component {
				render() {
					if (!this.props.isListing && !this.props.alwaysWrapMedia || this.props.isExpando) {
						return o.a.Children.only(this.props.children) || o.a.createElement("div", null)
					}
					return o.a.createElement(l, this.props)
				}
			}
		},
		"./src/reddit/components/Media/VideoBox/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3spkFGVnKMHZ83pDAhW3Mx",
				renderSmallMedia: "_2WxICCKdnGu7x2n4CBv6zE",
				centered: "_2b68Lt6xHaLir5082LDDA9",
				styledVideo: "tErWI93xEKrI2OkozPs7J"
			}
		},
		"./src/reddit/components/Media/VideoBox/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/lodash/throttle.js"),
				o = n.n(s),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/reselect/es/index.js"),
				d = n("./node_modules/@reddit/adblock-detection/browser.js"),
				l = n("./src/lib/classNames/index.ts"),
				u = n("./src/reddit/actions/video.ts"),
				m = n("./src/reddit/constants/tracking.ts"),
				p = n("./src/reddit/models/Media/index.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				h = n("./src/reddit/selectors/video.ts");
			const f = 100,
				x = f / 2 / 1e3;
			var O = n("./src/lib/forceHttps/index.ts"),
				v = n("./src/lib/hooks/usePrevious.ts");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}

			function E(e) {
				let {
					autoplay: t,
					isListing: n,
					isNotCardView: s,
					onBufferingChange: o,
					shouldLoad: a,
					shouldPause: c,
					showCentered: d,
					showFull: l,
					source: u,
					onClick: m,
					...p
				} = e;
				const b = Object(r.useRef)(),
					h = Object(r.useRef)(),
					E = Object(v.a)(c);

				function _(e) {
					if (e) {
						const e = null === (t = null == h ? void 0 : h.current) || void 0 === t ? void 0 : t.play();
						e && e.catch && e.catch(() => {})
					} else ! function() {
						var e;
						null === (e = null == h ? void 0 : h.current) || void 0 === e || e.pause()
					}();
					var t
				}
				return Object(r.useEffect)(() => {
					if (_(!c && (t || s)), h.current && o) return b.current = function(e, t) {
						let n = !1,
							s = !1;
						const o = () => n = !0,
							r = () => s = !0;
						e.addEventListener("loadeddata", o), e.addEventListener("play", r), e.addEventListener("playing", r);
						let i = !1,
							a = 0,
							c = 0;
						const d = window.setInterval(() => {
							if (c = e.currentTime, s) return s = !1, void(a = c);
							if (e.paused || e.seeking || !n) return void(a = c);
							const o = i;
							4 === e.readyState ? i = !1 : !i && c >= a && c < a + x ? i = !0 : i && c >= a && c > a + x && (i = !1), a = c, o !== i && t(i)
						}, f);
						return () => {
							clearInterval(d), e.removeEventListener("playing", r), e.removeEventListener("play", r), e.removeEventListener("loadeddata", o)
						}
					}(h.current, o), () => {
						b.current && b.current()
					}
				}, []), Object(r.useEffect)(() => {
					E !== c && _(!c && (t || s))
				}, [E, c, t, s]), i.a.createElement("video", g({}, p, {
					ref: e => h.current = e,
					muted: !0,
					onClick: m
				}), i.a.createElement("source", {
					src: Object(O.a)(u || "")
				}))
			}
			var _ = n("./src/reddit/components/Media/VideoBox/index.m.less"),
				j = n.n(_);
			const C = Object(c.c)({
				autoplayPref: b.c,
				consumed: h.a,
				loadTimes: h.f,
				metadata: h.h,
				started: h.k
			});

			function y(e) {
				const {
					autoplayPref: t,
					consumed: n,
					loadTimes: s,
					metadata: r,
					started: c
				} = Object(a.e)(t => C(t, e)), {
					postId: b,
					shouldLoad: h,
					source: f,
					height: x,
					isNotCardView: O,
					showFull: v,
					shouldPause: g,
					width: _,
					isListing: y,
					className: k,
					showCentered: S,
					originalSource: w,
					isPromoted: T,
					renderSmallMedia: N,
					onClick: I
				} = e, R = t && !(T && Object(d.hasAcceptableAds)()), P = Object(a.d)();

				function M(e) {
					P(e ? Object(u.r)(b) : Object(u.E)(b))
				}

				function A() {
					return P(Object(u.z)({
						postId: b
					}))
				}
				const L = o()(e => {
					if (n) return;
					const {
						target: t
					} = e;
					t && t.played && 1 === t.played.length && 0 === t.played.start(0) && t.played.end(0) === t.duration && P(Object(u.s)(b))
				}, 200);

				function D(e) {
					e.persist(), L(e)
				}

				function F(e) {
					var t;
					(r || U(e), c) || (t = e.timeStamp, P(Object(u.A)(b, t)))
				}

				function B(e) {
					P(Object(u.q)(b, e.timeStamp))
				}

				function U(e) {
					! function(e) {
						P(Object(u.D)({
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
					s || F(e), r || U(e), P(Object(u.C)(b))
				}

				function V() {
					const e = {};
					return S && (e.margin = "0 auto"), y || (e.maxHeight = `${p.e}px`), i.a.createElement(E, {
						autoplay: R,
						className: Object(l.a)(m.a, j.a.styledVideo, {
							[j.a.renderSmallMedia]: N
						}),
						height: N ? void 0 : x,
						isListing: y,
						isNotCardView: O,
						key: b,
						loop: !0,
						onBufferingChange: M,
						onClick: I,
						onLoadStart: B,
						onLoadedData: F,
						onLoadedMetadata: U,
						onPause: A,
						onPlaying: H,
						onTimeUpdate: D,
						shouldLoad: h,
						shouldPause: g,
						showCentered: S,
						showFull: v,
						source: f,
						style: N ? void 0 : e,
						width: N ? void 0 : _
					})
				}
				return y ? V() : i.a.createElement("div", {
					className: Object(l.a)(j.a.container, k, {
						[j.a.centered]: S
					})
				}, i.a.createElement("a", {
					href: w,
					target: "_blank",
					rel: "noopener noreferrer"
				}, V()))
			}
		},
		"./src/reddit/components/Media/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/fbt/lib/FbtPublic.js"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/components/NotificationButton/index.tsx"),
				c = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				d = n("./src/reddit/components/Thumbnail/index.tsx"),
				l = n("./src/reddit/constants/posts.ts"),
				u = n("./src/reddit/helpers/trackers/post.ts"),
				m = n("./src/reddit/hooks/useIsClient.ts"),
				p = n("./src/reddit/models/Subreddit/index.ts"),
				b = n("./src/reddit/components/MediumPost/index.m.less"),
				h = n.n(b);
			t.a = e => {
				let {
					crosspost: t,
					post: n,
					forceShowNSFW: s,
					redditStyle: b,
					shouldShowSubscribeButton: f,
					subredditOrProfile: x,
					templatePlaceholderImage: O,
					shouldShowFollowButton: v,
					isFollowed: g,
					isCommentsPage: E,
					onFollowPostClick: _
				} = e;
				return Object(m.a)() ? o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
					className: Object(i.a)(h.a.thumbnailContainer, {
						[h.a.mShowingButtonOrOverflow]: v || f
					})
				}, o.a.createElement("div", {
					className: h.a.thumbnailContainerRow
				}, v && o.a.createElement(a.a, {
					isFilled: !!g,
					onClick: _,
					hasTooltip: !0,
					tooltipText: r.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), f && x && o.a.createElement(c.a, {
					className: h.a.subscribeButton,
					getEventFactory: e => Object(u.k)(n.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: x.name,
						type: Object(p.i)(x) ? l.a.PROFILE : l.a.SUBREDDIT
					},
					postId: n.id,
					small: !0
				})), o.a.createElement(d.b, {
					crosspost: t,
					isCommentsPage: E,
					post: n,
					redditStyle: b,
					forceShowNSFW: s,
					templatePlaceholderImage: O
				}))) : null
			}
		},
		"./src/reddit/components/MediumPost/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/MediumPost/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/ads/index.ts"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = n("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = n("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				b = n("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				h = n("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				f = n("./src/reddit/components/FlairWrapper/index.tsx"),
				x = n("./src/reddit/components/Flatlist/index.tsx"),
				O = n("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				v = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				g = n("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				E = n("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				_ = n("./src/reddit/components/ModModeReports/index.tsx"),
				j = n("./src/reddit/components/ModModeReports/helpers.ts"),
				C = n("./src/reddit/components/ModQueueActionBar/index.tsx"),
				y = n("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				k = n("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				S = n("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				w = n("./src/reddit/components/PostContainer/index.tsx"),
				T = n("./src/reddit/components/PostOverflowMenu/index.tsx"),
				N = n("./src/reddit/components/PostRailAndVotes/index.tsx"),
				I = n("./src/reddit/components/PostTitle/index.tsx"),
				R = n("./src/reddit/components/PostTopLine/index.tsx"),
				P = n("./src/reddit/components/PostTopMeta/index.tsx"),
				M = n("./src/reddit/components/SourceLink/index.tsx"),
				A = n("./src/reddit/constants/postLayout.ts"),
				L = n("./src/reddit/contexts/PageLayer/index.tsx"),
				D = n("./src/reddit/helpers/canRenderThumbnail.ts"),
				F = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				B = n("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				U = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				H = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				V = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				W = n.n(V),
				G = n("./src/reddit/hooks/useIsAvatarPost.ts"),
				K = n("./src/reddit/hooks/useIsOverlay.ts"),
				q = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				z = n("./src/reddit/hooks/useUserContext.ts"),
				J = n("./src/reddit/models/Media/index.ts"),
				Y = n("./src/reddit/models/Vote/index.ts"),
				Q = n("./src/reddit/contexts/Post/index.tsx"),
				X = n("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				Z = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				$ = n("./src/reddit/selectors/i18n/index.ts"),
				ee = n("./src/reddit/selectors/moderatorPermissions.ts"),
				te = n("./src/reddit/selectors/modQueue.ts"),
				ne = n("./src/reddit/selectors/postFlair.ts"),
				se = n("./src/reddit/selectors/posts.ts"),
				oe = n("./src/reddit/selectors/showPromotedCTA.ts"),
				re = n("./src/reddit/selectors/user.ts"),
				ie = n("./src/reddit/components/MediumPost/index.m.less"),
				ae = n.n(ie),
				ce = n("./src/reddit/components/MediumPost/MediumThumbnail.tsx");

			function de() {
				return (de = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const le = () => Object(i.c)({
					isModQueueDisplayEnabled: te.b,
					crosspost: se.d,
					flairStyleTemplate: L.Y,
					isActive: se.j,
					isBlurredPreview: Z.b,
					isCurrentUserProfilePost: se.l,
					isRecommendationPost: (e, t) => !!t.post.recommendationContext && Object(re.R)(e),
					showPromotedCTA: oe.a,
					moderatorPermissions: ee.m,
					shouldShowNsfwListingBelow: $.b,
					showEditFlair: ne.a,
					showMedia: L.t,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: n
						} = t;
						return !!n && Object(ee.i)(e, n.id)
					},
					isOptionalTextEnabled: X.a
				}),
				ue = e => {
					const {
						className: t,
						crosspost: n,
						currentUser: i,
						eventFactory: L,
						flairStyleTemplate: V,
						hideNSFWPref: G,
						hostPostData: K,
						inSubredditOrProfile: z = !1,
						isBlurredPreview: Q,
						isCheckboxSelected: X,
						isCommentsPage: Z,
						isCurrentUserProfilePost: $,
						isFrontpage: ee,
						isModWithUserNotesPermissions: te,
						isOverlay: ne,
						isRecommendationPost: se,
						isTopicPage: oe,
						isCommentCountAnimationEnabled: re,
						isVoteCountAnimationEnabled: ie,
						isCountAnimShadowTestEnabled: de,
						imageGalleryCurrentItem: le,
						listingKey: ue,
						moderatorPermissions: me,
						modModeEnabled: pe,
						onClickPost: be,
						post: he,
						postId: fe,
						postIds: xe,
						redditStyle: Oe,
						shouldHideFlair: ve,
						shouldShowNsfwListingBelow: ge,
						showBulkActionCheckbox: Ee,
						showEditFlair: _e,
						showMedia: je,
						showPromotedCTA: Ce,
						sendEvent: ye,
						subredditOrProfile: ke,
						toggleCheckbox: Se,
						isAvatarPostEnabled: we,
						isOptionalTextEnabled: Te,
						isModQueueDisplayEnabled: Ne
					} = e, Ie = Object(r.d)(), Re = e => e === Y.a.upvoted ? Ie(Object(d.jb)(fe)) : Ie(Object(d.v)(fe)), Pe = () => Ie(Object(d.fb)(fe)), Me = Oe ? void 0 : V, Ae = Object(U.a)(me), Le = pe && Ae, De = Object(F.a)(me), Fe = Object(B.a)(me), Be = Object(E.a)(he), Ue = Object(j.c)(he), He = !!(null == K ? void 0 : K.shouldShowLinkedPosts), Ve = ge, We = !Object(q.a)() && Object(D.a)(he), Ge = z && !je && !He && !Ve || we, Ke = Ge && !!he.source && !n, qe = !(ee && !!i || oe) && !$ && (!z || He || Ve) || se, ze = (!z || He || Ve) && !he.isSponsored, Je = Object(a.t)(he, le), {
						source: Ye
					} = Je, Qe = !!(Q && (null == ke ? void 0 : ke.isNSFW)), Xe = Object(s.useRef)({
						renderingObjectInfo: he
					});
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(w.b, {
						className: Object(c.a)(ae.a.container, t, W.a.largeAndMediumPostStyles, W.a.largeAndMediumActiveStyles, Object(H.a)(e), {
							[W.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"]
						}),
						isOverlay: ne,
						style: Object(H.b)(e.flairStyleTemplate),
						post: he,
						onClick: be,
						eventFactory: L
					}, o.a.createElement(N.a, {
						model: he,
						handleVote: Re,
						showBulkActionCheckbox: Ee,
						isCheckboxSelected: X,
						toggleCheckbox: Se,
						flairStyleTemplate: Me,
						redditStyle: Oe,
						isVoteCountAnimation: ie,
						isCountAnimShadowTestEnabled: de,
						postId: fe
					}), o.a.createElement(S.a, {
						className: ae.a.backgroundWrapper,
						"data-click-id": "background",
						flairStyleTemplate: Me,
						post: he,
						redditStyle: Oe
					}, o.a.createElement(h.a, {
						post: he
					}), o.a.createElement("article", {
						className: ae.a.mainBody
					}, o.a.createElement("div", {
						className: ae.a.content,
						"data-click-id": "body"
					}, !!he.recommendationContext && o.a.createElement(k.a, {
						content: he.recommendationContext.content,
						layout: A.g.Large,
						post: he
					}), o.a.createElement(R.a, {
						className: ae.a.postTopLine,
						hideNSFWPref: G,
						hostPostData: K,
						iconClassName: ae.a.postTopLineIcon,
						inSubredditOrProfile: z,
						isCommentsPage: Z,
						isCurrentUserProfilePost: $,
						isModWithUserNotesPermissions: te,
						isOverlay: !!ne,
						isTopicPage: !!oe,
						listingKey: ue,
						post: he,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Ke,
						showSubreddit: ze,
						showSubredditIcon: !0,
						subredditOrProfile: ke
					}), o.a.createElement(I.c, {
						className: ae.a.postTitle,
						post: he,
						redditStyle: Oe,
						size: I.b.Large,
						titleColor: Me && Me.postTitleColor,
						isOverlay: ne
					}), Z && !ve && he.flair && he.flair.length > 0 && o.a.createElement(f.a, {
						className: Object(c.a)(Z && ae.a.leftPadding),
						disableFlair: !Z,
						post: he,
						sendEvent: ye
					}), he.source && !he.isSponsored && !n && !Qe && o.a.createElement(o.a.Fragment, null, o.a.createElement(M.a, {
						className: ae.a.sourceLink,
						isCommentsPage: Z,
						post: he
					}), Te && he.media && he.media.type !== J.o.TEXT && he.media.type !== J.o.IMAGE && he.media.richtextContent && o.a.createElement(O.a, {
						content: he.media.richtextContent,
						rtJsonElementProps: Xe.current
					}))), !Ge && We && o.a.createElement(ce.a, {
						crosspost: n ? he : void 0,
						hasModPostPerms: Ae,
						isCommentsPage: Z,
						isOverlay: ne,
						modModeEnabled: pe,
						post: n || he,
						redditStyle: Oe,
						shouldShowSubscribeButton: qe,
						subredditOrProfile: ke,
						templatePlaceholderImage: Me && Me.postPlaceholderImage
					})), Ce && Ye && Ye.url && !he.isSurveyAd && o.a.createElement(u.a, {
						className: ae.a.adLinkWrapper
					}, o.a.createElement(m.a, {
						post: he,
						adLinkContent: Je
					})), pe && Ae && Be && !Ne && o.a.createElement("div", {
						className: ae.a.modModeBannerWrapper
					}, o.a.createElement(g.a, {
						thing: he
					})), pe && Ae && Ue && !Ne && o.a.createElement("div", {
						className: ae.a.modModeBannerWrapper
					}, o.a.createElement(_.a, {
						onIgnoreReports: Pe,
						reportable: he
					})), o.a.createElement(v.d, null), Ne && o.a.createElement(y.a, {
						post: he
					}), o.a.createElement("div", {
						className: ae.a.flatlistContainer
					}, o.a.createElement(b.a, {
						className: ae.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Me,
						redditStyle: Oe,
						model: he,
						onVoteClick: Re
					}), !he.isSurveyAd && (Ne ? o.a.createElement(C.a, {
						content: he,
						listingKey: ue,
						hostPostData: K
					}) : o.a.createElement(x.c, {
						currentUser: i,
						hasModFlairPerms: De,
						hasModFullPerms: Fe,
						hasModPostPerms: Ae,
						hostPostData: K,
						isCommentCountAnimation: re,
						isCountAnimShadowTestEnabled: de,
						isOverlay: !!ne,
						listingKey: ue,
						modModeEnabled: pe,
						onIgnoreReports: Pe,
						onOpenReportsDropdown: e => Ie(Object(l.h)({
							tooltipId: e
						})),
						post: he,
						showEditFlair: _e,
						tooltipType: ne ? P.f.Lightbox : void 0,
						useFlatlistBreakpoints: Object(T.b)({
							editPost: !Le,
							save: !Le,
							hide: !1,
							report: !1,
							mute: !1
						})
					})))), ee && o.a.createElement(p.a, {
						post: he,
						postIds: null != xe ? xe : [],
						subredditId: null == ke ? void 0 : ke.id
					})))
				};
			t.default = Object(Q.b)(o.a.memo((function(e) {
				const t = Object(s.useMemo)(() => le(), []),
					n = Object(r.e)(n => t(n, e), r.c),
					i = Object(G.a)(e.post),
					a = Object(z.a)();
				return o.a.createElement(ue, de({}, e, n, {
					modModeEnabled: a.modModeEnabled,
					hideNSFWPref: a.prefs.hideNSFW,
					isOverlay: Object(K.a)(),
					isAvatarPostEnabled: i
				}))
			})))
		},
		"./src/reddit/components/ModModeBanners/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "_3FJq-cq7boH_EAWZsUPWY0",
				icon: "_1QOFlf2Sv2RU3pPqUKD6UD",
				staticBanner: "_14wV0QXuPq6IJL_pdl8sQs"
			}
		},
		"./src/reddit/components/ModModeFilteredReason/helpers.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const o = e => (e => !e.isApproved && !!Object(s.b)(e, s.a.AUTOMOD))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.BAN_EVASION))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.CROWD_CONTROL))(e) || (e => !e.isApproved && !!Object(s.b)(e, s.a.HATEFUL_CONTENT))(e)
		},
		"./src/reddit/components/ModModeFilteredReason/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading filter reason…", null, {
				hk: "K3Ipd"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeFilteredReason/_ModModeFilteredReason.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return n(t)
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
		"./src/reddit/components/ModModeReports/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = n("./src/lib/classNames/index.ts"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./src/reddit/components/ModModeBanners/index.m.less"),
				c = n.n(a);
			const {
				fbt: d
			} = n("./node_modules/fbt/lib/FbtPublic.js"), l = () => i.a.createElement("div", {
				className: Object(o.a)(c.a.banner, c.a.staticBanner)
			}, d._("Loading reports…", null, {
				hk: "4gwdQw"
			})), u = Object(s.a)({
				resolved: {},
				chunkName: () => "ModModeBanners",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!n.m[t]
				},
				importAsync: () => n.e("ModModeBanners").then(n.bind(null, "./src/reddit/components/ModModeReports/_ModModeReports.tsx")),
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
				fallback: i.a.createElement(l, null),
				ssr: !1
			});
			t.a = u
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less": function(e, t, n) {
			e.exports = {
				postStats: "_1jp_fxyDvcILOETMxKs9aZ"
			}
		},
		"./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				a = n.n(i);
			const c = e => {
				let {
					post: t
				} = e;
				var n;
				return r.a.createElement("p", {
					className: a.a.postStats
				}, s.fbt._({
					"*": "{number} comments",
					_1: "1 comment"
				}, [s.fbt._plural(t.numComments, "number")], {
					hk: "wt9T0"
				}), " • ", s.fbt._({
					"*": "{number} awards",
					_1: "1 award"
				}, [s.fbt._plural((null === (n = t.allAwardings) || void 0 === n ? void 0 : n.length) || 0, "number")], {
					hk: "1ldRJO"
				}))
			}
		},
		"./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModQueueActionBar/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ModQueueActionBar/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return be
			}));
			var s, o = n("./node_modules/fbt/lib/FbtPublic.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				l = n("./src/reddit/components/OverflowMenu/index.tsx"),
				u = n("./src/reddit/components/PostFlairPicker/index.tsx"),
				m = n("./src/reddit/components/ReportFlow/new.tsx"),
				p = n("./src/reddit/constants/modals.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/Row.tsx"),
				f = n("./src/reddit/helpers/correlationIdTracker.ts"),
				x = n("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				O = n("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				v = n("./src/reddit/helpers/isPost.ts"),
				g = n("./src/reddit/helpers/trackers/gild.ts"),
				E = n("./src/reddit/helpers/trackers/modTools.ts"),
				_ = n("./src/reddit/helpers/trackers/post.ts"),
				j = n("./src/reddit/hooks/useTracking.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/actions/comment/moderation.ts"),
				k = n("./src/reddit/actions/gold/modals.ts"),
				S = n("./src/reddit/actions/modal.ts"),
				w = n("./src/reddit/actions/post.ts"),
				T = n("./src/reddit/actions/postFlair.ts"),
				N = n("./src/reddit/actions/removalReasons/index.ts"),
				I = n("./src/reddit/actions/reportFlow/index.ts"),
				R = n("./src/reddit/selectors/activeModal.ts"),
				P = n("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				M = n("./src/reddit/selectors/moderatorPermissions.ts"),
				A = n("./src/reddit/models/Post/index.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(s || (s = {}));
			const L = e => {
				var t;
				return e.isRemoved && e.bannedBy !== c.m || Object(v.b)(e) && [A.g.AntiEvilOps, A.g.CommunityOps, A.g.ContentTakedown, A.g.CopyrightTakedown, A.g.Reddit].indexOf(e.removedByCategory) > -1 ? s.REMOVED : (e.numReports || 0) > 0 ? s.REPORTED : e.isApproved ? s.APPROVED : e.isSpam ? s.SPAM : (null === (t = e.modQueueTriggers) || void 0 === t ? void 0 : t.length) || e.bannedBy === c.m ? s.FILTERED : s.UNMODERATED
			};
			var D = n("./src/reddit/components/ModQueueActionBar/index.m.less"),
				F = n.n(D),
				B = n("./src/lib/classNames/index.ts"),
				U = n("./src/reddit/components/HumanDate/index.tsx"),
				H = n("./src/reddit/components/UserIcon/index.tsx"),
				V = n("./src/reddit/helpers/name/index.ts"),
				W = n("./src/reddit/selectors/user.ts"),
				G = n("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				K = n.n(G);
			const q = e => {
				let {
					content: t
				} = e;
				var n;
				const s = Object(a.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(W.Bb)(e, {
					userName: null == t ? void 0 : t.approvedBy
				}) : null);
				if (!s) return null;
				const r = t.approvedAtUTC ? (null === (n = t.approvedAtUTC) || void 0 === n ? void 0 : n.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
					className: K.a.userIconWrapper
				}, i.a.createElement(H.a, {
					className: Object(B.a)(K.a.userIcon),
					iconUrl: null == s ? void 0 : s.accountIcon,
					userName: null == s ? void 0 : s.username,
					isNSFW: null == s ? void 0 : s.isNSFW
				})), i.a.createElement("div", {
					className: K.a.statusText
				}, i.a.createElement("p", {
					className: K.a.status
				}, o.fbt._("Approved", null, {
					hk: "4d15LY"
				})), i.a.createElement("p", null, Object(V.e)(null == s ? void 0 : s.username), r && i.a.createElement(i.a.Fragment, null, " ", i.a.createElement(U.d, {
					seconds: r
				})))))
			};
			var z = n("./src/reddit/models/ModQueueTrigger/index.ts");
			const J = e => {
				let {
					content: t
				} = e;
				const n = Object(r.useMemo)(() => {
					var e;
					const n = [];
					(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== c.m || n.push({
						icon: "bot_fill",
						heading: o.fbt._("Blocked by AutoMod", null, {
							hk: "XZuzM"
						})
					});
					for (const s of t.modQueueTriggers || []) switch (s.type) {
						case z.a.AUTOMOD:
							n.push({
								icon: "bot_fill",
								heading: o.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								}),
								reason: s.message
							});
							break;
						case z.a.SHADOWBANNED_SUBMITTER:
							n.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "47ub6E"
								}),
								reason: s.message
							});
							break;
						case z.a.HATEFUL_CONTENT:
							n.push({
								icon: "mod_mode_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "42FKya"
								}),
								reason: s.message
							});
							break;
						case z.a.CROWD_CONTROL:
							n.push({
								icon: "crowd_control",
								heading: o.fbt._("Blocked by crowd control", null, {
									hk: "iFsfG"
								}),
								reason: s.message
							});
							break;
						case z.a.BAN_EVASION:
							n.push({
								icon: "ban_fill",
								heading: o.fbt._("Blocked by automatic filter", null, {
									hk: "1Olxtp"
								}),
								reason: s.message
							})
					}
					return n
				}, [t.modQueueTriggers, t.bannedBy]);
				return i.a.createElement("div", {
					className: K.a.filteredWrapper
				}, n.map((e, t) => {
					let {
						heading: n,
						reason: s,
						icon: o
					} = e;
					return i.a.createElement("div", {
						key: `${n}-${s}-${t}`,
						className: K.a.filteredRow
					}, i.a.createElement(C.a, {
						isFilled: !0,
						name: o,
						className: Object(B.a)(K.a.coloredIcon, K.a.icon)
					}), i.a.createElement("div", {
						className: K.a.statusText
					}, i.a.createElement("p", {
						className: K.a.status
					}, n), s && i.a.createElement("p", null, s)))
				}))
			};
			var Y = n("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				Q = n("./src/reddit/selectors/subreddit.ts");
			const X = e => {
				let {
					content: t
				} = e;
				var n;
				const s = Object(a.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(W.Bb)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					r = Object(v.b)(t),
					c = Object(a.e)(e => Object(Q.Y)(e, {
						subredditId: r ? t.belongsTo.id : t.subredditId
					})),
					d = r && t.removedByCategory ? t.removedByCategory : null,
					l = d ? Object(Y.b)(d) : "clear_fill",
					u = t.bannedAtUTC ? (null === (n = t.bannedAtUTC) || void 0 === n ? void 0 : n.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null;
				return i.a.createElement(i.a.Fragment, null, s ? i.a.createElement("div", {
					className: K.a.userIconWrapper
				}, i.a.createElement(H.a, {
					className: Object(B.a)(K.a.userIcon),
					iconUrl: null == s ? void 0 : s.accountIcon,
					userName: null == s ? void 0 : s.username,
					isNSFW: null == s ? void 0 : s.isNSFW
				})) : i.a.createElement(C.a, {
					isFilled: !0,
					name: l,
					className: Object(B.a)(K.a.coloredIcon, K.a.icon)
				}), i.a.createElement("div", {
					className: K.a.statusText
				}, i.a.createElement("p", {
					className: K.a.status
				}, o.fbt._("Removed{spam}{reason}", [o.fbt._param("spam", t.isSpam ? " as spam" : ""), o.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), i.a.createElement("p", null, (null == s ? void 0 : s.username) ? i.a.createElement(i.a.Fragment, null, Object(V.e)(null == s ? void 0 : s.username), u && i.a.createElement(i.a.Fragment, null, " ", i.a.createElement(U.d, {
					seconds: u
				}))) : d && Object(Y.f)(d, c.name))))
			};
			var Z = n("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				$ = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				ee = n("./src/reddit/components/TrackingHelper/index.tsx"),
				te = n("./src/reddit/icons/fonts/helpers.tsx");
			n("./src/reddit/icons/fonts/Admin/index.tsx"), n("./src/reddit/icons/fonts/Approve/index.tsx"), n("./src/reddit/icons/fonts/Archived/index.tsx"), n("./src/reddit/icons/fonts/Calendar/index.tsx"), n("./src/reddit/icons/fonts/Clock/index.tsx"), n("./src/reddit/icons/fonts/Clear/index.tsx"), n("./src/reddit/icons/fonts/Coin/index.tsx"), n("./src/reddit/icons/fonts/Comment/index.tsx"), n("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), n("./src/reddit/icons/fonts/Downvote/index.tsx"), n("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), n("./src/reddit/icons/fonts/Envelope/index.tsx"), n("./src/reddit/icons/fonts/Expand/index.tsx"), n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), n("./src/reddit/icons/fonts/Gift/index.tsx");
			var ne = n("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				se = (n("./src/reddit/icons/fonts/Info/index.tsx"), n("./src/reddit/icons/fonts/Live/index.tsx"), n("./src/reddit/icons/fonts/Lock/index.tsx"), n("./src/reddit/icons/fonts/Menu/index.tsx"), n("./src/reddit/icons/fonts/ModActions/index.tsx"), n("./src/reddit/icons/fonts/ModSettings/index.tsx"), n("./src/reddit/icons/fonts/Op/index.m.less")),
				oe = n.n(se),
				re = n("./src/lib/lessComponent.tsx");
			re.a.wrapped(e => i.a.createElement("i", {
				className: `${Object(te.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, i.a.createElement(te.a, null, e.desc)), "OpIcon", oe.a), n("./src/reddit/icons/fonts/OutboundLink/index.tsx"), n("./src/reddit/icons/fonts/Pencil/index.tsx");
			var ie = n("./src/reddit/icons/fonts/Photos/index.m.less"),
				ae = n.n(ie);
			re.a.wrapped(e => i.a.createElement("i", {
				className: `${Object(te.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", ae.a), n("./src/reddit/icons/fonts/Premium/index.tsx"), n("./src/reddit/icons/fonts/Remove/index.tsx");
			var ce = n("./src/reddit/icons/fonts/Report/index.tsx"),
				de = (n("./src/reddit/icons/fonts/Share/index.tsx"), n("./src/reddit/icons/fonts/Spam/index.tsx"), n("./src/reddit/icons/fonts/Sticky/index.tsx"), n("./src/reddit/icons/fonts/Tag/index.tsx"), n("./src/reddit/icons/fonts/Text/index.m.less")),
				le = n.n(de);
			re.a.wrapped(e => i.a.createElement("i", {
				className: `${Object(te.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", le.a), n("./src/reddit/icons/fonts/Upvote/index.tsx");
			const ue = e => {
					let {
						content: t
					} = e;
					const n = Object(ee.b)(),
						s = Object(a.d)(),
						c = Object(r.useCallback)(() => {
							const e = Object(v.a)(t.id),
								o = e ? w.fb : y.g,
								r = t.ignoreReports ? "restore_reports" : "ignore_reports",
								i = e ? Object(E.j)(r, t.id) : Object(E.i)(r, t.id);
							s(o(t.id)), n(i)
						}, [t.id, t.ignoreReports, n, s]),
						d = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return i.a.createElement(i.a.Fragment, null, i.a.createElement(C.a, {
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
						let [n, s] = e;
						return i.a.createElement("p", {
							key: `${n}-${s}-${t}`
						}, Object(V.e)(s), ": ", n)
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
						let [, n] = t;
						return n + e
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
					}) : i.a.createElement(ne.a, {
						className: K.a.ignoreButtonIcon
					}))), t.userReports.map((e, n) => {
						let [s, o, r, a] = e;
						return s ? void 0 !== r && a ? i.a.createElement(Z.a, {
							key: `user-${s}`,
							reason: s,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: r,
							useNewFormat: !0,
							className: K.a.snoozabledButton,
							dropdownClassName: K.a.snoozableDropdown,
							iconClassName: K.a.snoozeIcon
						}) : i.a.createElement("p", {
							key: `user-${s}`
						}, s, " (", o, ")") : null
					}))))
				},
				me = e => {
					let {
						content: t
					} = e;
					const n = L(t),
						o = Object(r.useMemo)(() => {
							switch (n) {
								case s.APPROVED:
									return i.a.createElement(q, {
										content: t
									});
								case s.REMOVED:
								case s.SPAM:
									return i.a.createElement(X, {
										content: t
									});
								case s.FILTERED:
									return i.a.createElement(J, {
										content: t
									});
								case s.REPORTED:
									return i.a.createElement(ue, {
										content: t
									});
								default:
									return i.a.createElement(r.Fragment, null)
							}
						}, [n, t]);
					return n === s.UNMODERATED ? null : i.a.createElement("div", {
						className: Object(B.a)(K.a.wrapper, {
							[K.a.approved]: n === s.APPROVED,
							[K.a.reported]: n === s.REPORTED
						})
					}, o)
				},
				pe = (e, t) => Object(E.b)(t, e),
				be = e => {
					let {
						content: t,
						listingKey: n,
						hostPostData: A
					} = e;
					const D = Object(j.a)(),
						B = Object(a.d)(),
						U = L(t),
						H = Object(a.e)(P.b),
						V = Object(a.e)(R.b),
						W = Object(v.b)(t),
						G = Object(a.e)(e => {
							var n, s;
							return (null === (s = null === (n = e.features) || void 0 === n ? void 0 : n.reportFlow) || void 0 === s ? void 0 : s.postOrCommentId) === t.id
						}),
						K = Object(a.e)(e => Object(M.m)(e, {
							postId: t.id
						})),
						q = Object(O.a)(K),
						z = Object(x.a)(K),
						J = [s.REPORTED, s.FILTERED, s.UNMODERATED].includes(U),
						Y = [s.APPROVED, s.UNMODERATED, s.REPORTED].includes(U),
						Q = W && z,
						X = U === s.REMOVED && !t.modRemovalReason,
						Z = U === s.FILTERED,
						$ = !W,
						ee = [s.REMOVED, s.SPAM].indexOf(U) > -1,
						te = Object(r.useCallback)(e => {
							D(Object(_.k)(t.id, e, "post", n, A, void 0))
						}, [D, n, A, t]),
						ne = W ? _.k : pe,
						se = Object(r.useCallback)(() => {
							const e = W ? w.r : y.a;
							B(e(t.id)), D(ne(t.id, "approve"))
						}, [D, B, t, W, ne]),
						oe = Object(r.useCallback)(() => {
							const e = W ? w.T : y.e;
							B(e(t.id, !1)), t.isRemoved && t.bannedBy === c.m ? D(ne(t.id, "confirm_remove")) : D(ne(t.id, "remove"))
						}, [D, B, t, W, ne]),
						re = Object(r.useCallback)(() => {
							B(Object(N.fetchReasonsAndOpenModal)(W ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, W, B]),
						ie = Object(r.useCallback)(() => {
							const e = W ? w.D : y.c;
							B(e(t.id)), D(ne(t.id, t.isLocked ? "unlock" : "lock"))
						}, [ne, D, B, t, W]),
						ae = Object(r.useCallback)(() => {
							B(Object(S.i)(Object(u.b)(t.id, !1))), D(Object(_.k)(t.id, "post_flair_picker"))
						}, [D, B, t]),
						ce = Object(r.useCallback)(e => {
							let {
								previewFlair: n,
								selectedTemplateId: s
							} = e;
							W && B(Object(T.h)({
								post: t,
								previewFlair: n,
								selectedTemplateId: s
							}))
						}, [B, W, t]),
						de = Object(r.useCallback)(() => {
							W && (B(Object(w.hb)(t.id)), D(Object(E.l)(t.isStickied ? "unsticky" : "sticky", t.id)))
						}, [D, B, t, W]),
						le = Object(r.useCallback)(() => {
							W && (B(Object(w.I)(t.id)), D(Object(E.l)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [D, B, t, W]),
						ue = Object(r.useCallback)(() => {
							W && (B(Object(w.F)(t.id)), Object(E.l)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [B, t, W]),
						be = Object(r.useCallback)(() => {
							W && (B(Object(S.i)(p.a.CROWD_CONTROL)), B(Object(w.t)(t.id)))
						}, [B, t, W]),
						he = Object(r.useCallback)(() => {
							W && (B(Object(w.C)(t.permalink)), te("copy"))
						}, [te, B, t, W]),
						fe = Object(r.useCallback)(async () => {
							if (!W) return;
							const e = Object(f.d)(f.a.GildingFlow, !0);
							B(Object(k.d)({
								awardId: null == H ? void 0 : H.id,
								correlationId: e,
								thingId: t.id
							})), D(Object(g.clickGildEvent)(t.id))
						}, [D, B, t, H, W]),
						xe = Object(r.useCallback)(() => {
							B(Object(I.c)(t.id)), te("report")
						}, [te, B, t]),
						Oe = Object(r.useCallback)(() => {
							var e;
							W && (B(Object(w.eb)(t.id, !t.hidden, !1, !0)), te((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [te, B, t, W]),
						ve = Object(r.useCallback)(() => {
							W && (B(Object(w.T)(t.id, !1)), D(Object(E.l)("spam", t.id)))
						}, [D, B, t, W]);
					return i.a.createElement("div", {
						className: F.a.wrapper,
						"data-testid": "modqueue-action-bar"
					}, i.a.createElement(me, {
						content: t
					}), i.a.createElement("div", {
						className: F.a.actionBar
					}, J && i.a.createElement(b.t, {
						className: [F.a.button, F.a.approve].join(" "),
						Icon: Object(C.b)("checkmark"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: se,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), Y && i.a.createElement(b.t, {
						className: F.a.button,
						Icon: Object(C.b)("close"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: oe,
						text: o.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), X && i.a.createElement(b.t, {
						className: F.a.button,
						onClick: re,
						text: o.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), Z && i.a.createElement(b.t, {
						className: F.a.button,
						Icon: Object(C.b)("close"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: oe,
						text: o.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), ee && i.a.createElement(b.t, {
						className: F.a.button,
						Icon: Object(C.b)("checkmark"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: se,
						text: o.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), $ && i.a.createElement(b.t, {
						className: F.a.button,
						priority: t.isLocked ? b.c.Primary : b.c.Plain,
						Icon: Object(C.b)("lock"),
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: ie,
						text: t.isLocked ? o.fbt._("Unlock", null, {
							hk: "sdpF2"
						}) : o.fbt._("Lock", null, {
							hk: "1HN654"
						})
					}), Q && i.a.createElement(b.t, {
						className: F.a.button,
						Icon: Object(C.b)("tag"),
						priority: b.c.Plain,
						iconPosition: b.h.L,
						iconClassName: F.a.icon,
						onClick: ae,
						text: o.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), W && V === Object(u.b)(t.id, !1) && i.a.createElement(u.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(u.b)(t.id, !1),
						onFlairChanged: ce
					}), W && i.a.createElement(l.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: F.a.overflowButton,
						icon: i.a.createElement(C.a, {
							name: "overflow_horizontal",
							isFilled: !0
						})
					}, i.a.createElement("h6", {
						className: F.a.overflowHeading
					}, o.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && i.a.createElement(i.a.Fragment, null, i.a.createElement(h.b, {
						className: F.a.dropdownRow,
						displayText: o.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ve
					}, i.a.createElement(C.a, {
						name: "spam"
					})), i.a.createElement(h.b, {
						className: F.a.dropdownRow,
						displayText: t.isStickied ? o.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : o.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: de
					}, i.a.createElement(C.a, {
						name: t.isStickied ? "unpin" : "pin"
					}))), i.a.createElement(h.b, {
						className: F.a.dropdownRow,
						onClick: ie,
						displayText: (null == t ? void 0 : t.isLocked) ? o.fbt._("Unlock Comments", null, {
							hk: "zGuti"
						}) : o.fbt._("Lock Comments", null, {
							hk: "1QO9cp"
						})
					}, i.a.createElement(C.a, {
						name: "lock",
						isFilled: null == t ? void 0 : t.isLocked
					})), !t.crosspostParentId && i.a.createElement(h.b, {
						className: F.a.dropdownRow,
						onClick: le,
						displayText: t.isOriginalContent ? o.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : o.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, i.a.createElement(C.a, {
						name: "original"
					})), i.a.createElement(h.b, {
						className: F.a.dropdownRow,
						onClick: ue,
						displayText: t.isNSFW ? o.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : o.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, i.a.createElement(C.a, {
						name: "nsfw"
					})), q && "subreddit" === t.belongsTo.type && i.a.createElement(h.b, {
						className: F.a.dropdownRow,
						displayText: o.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: be
					}, i.a.createElement(C.a, {
						name: "crowd_control"
					})), i.a.createElement("h6", {
						className: F.a.overflowHeading
					}, o.fbt._("Other", null, {
						hk: "2543kN"
					})), i.a.createElement(h.b, {
						className: F.a.dropdownRow,
						displayText: o.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: he
					}, i.a.createElement(C.a, {
						name: "share"
					})), i.a.createElement(h.b, {
						className: F.a.dropdownRow,
						onClick: fe,
						displayText: o.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, i.a.createElement(C.a, {
						name: "award"
					}), i.a.createElement(d.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), i.a.createElement(h.b, {
						className: F.a.dropdownRow,
						displayText: o.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: xe
					}, i.a.createElement(C.a, {
						name: "report"
					})), i.a.createElement(h.b, {
						className: F.a.dropdownRow,
						onClick: Oe,
						displayText: t.hidden ? o.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : o.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, i.a.createElement(C.a, {
						name: "hide"
					}))), G && i.a.createElement(m.a, {
						withOverlay: !0,
						postId: t.id
					})))
				}
		},
		"./src/reddit/components/NotificationButton/index.m.less": function(e, t, n) {
			e.exports = {
				notificationButton: "_3KTYozwt91D81Yub-OQ4S3",
				icon: "SDzveG4fJf98RLE5vll2w",
				NotificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				notificationIcon: "H8V0P3uvgDxt7ZbIFf_Tv",
				NotificationIconFilled: "_13arOxnT-uyZ238frHLRM2",
				notificationIconFilled: "_13arOxnT-uyZ238frHLRM2"
			}
		},
		"./src/reddit/components/NotificationButton/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				a = n("./src/reddit/hooks/useInfoTextTooltip.ts"),
				c = n("./src/reddit/icons/fonts/index.tsx"),
				d = n("./src/reddit/components/NotificationButton/index.m.less"),
				l = n.n(d);
			t.a = e => {
				const t = Object(a.a)(),
					{
						isFilled: n,
						onClick: s,
						hasTooltip: d,
						tooltipText: u,
						className: m
					} = e;
				return o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					className: Object(r.a)(l.a.notificationButton, m),
					ref: t.target.ref,
					onMouseEnter: t.show,
					onMouseLeave: t.hide,
					onClick: s
				}, o.a.createElement(c.a, {
					name: "notification",
					isFilled: n,
					className: l.a.icon,
					"aria-label": u
				})), d && o.a.createElement(i.a, {
					popperProps: t.popperProps,
					arrowProps: t.arrowProps,
					visible: t.visible
				}, u))
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.m.less": function(e, t, n) {
			e.exports = {
				RecommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				recommendationContextStyles: "nAL34ZVf4KfyEoZIzUgmN",
				classicLayout: "_3gsfwiq-rM6zSz9YoMlnJ0",
				compactLayout: "_9huHAs0mdMzeF-pUhJbwX",
				largeLayout: "_3hWVRt6y8PqOoC2VuZETZI"
			}
		},
		"./src/reddit/components/OneFeed/PostRecommendationContext.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/objectSelector/index.ts"),
				a = n("./src/reddit/components/RichTextJson/index.tsx"),
				c = n("./src/reddit/constants/postLayout.ts"),
				d = n("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = n("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				u = n.n(l);
			const m = Object(i.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: n,
					post: s
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(a.b, {
					className: Object(r.a)(u.a.RecommendationContextStyles, {
						[u.a.classicLayout]: n === c.g.Classic,
						[u.a.compactLayout]: n === c.g.Compact,
						[u.a.largeLayout]: n === c.g.Large
					}),
					content: t,
					rtJsonElementProps: m(s),
					useExplicitTextColor: !0
				})
			}
		},
		"./src/reddit/components/Poll/PollExpiry/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/components/HumanDate/index.tsx"),
				r = n("./src/lib/timeUntil/index.ts"),
				i = n("./node_modules/react/index.js"),
				a = n.n(i);
			const {
				fbt: c
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return a.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", a.a.createElement(o.d, {
					seconds: e.poll.endsAt / s.Xb
				}))], {
					hk: "3OERID"
				}) : Object(r.a)(new Date(e.poll.endsAt)))
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				a = n("./src/reddit/helpers/styles/mixins/index.tsx"),
				c = n("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				d = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				l = n("./src/reddit/components/PostBackgroundWrapper/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = Object(c.a)(Object(i.a)(e => {
				const {
					children: t,
					className: n,
					flairStyleTemplate: s,
					onClick: i,
					post: c,
					redditStyle: l,
					theme: p,
					...b
				} = e;
				return o.a.createElement("div", m({
					className: Object(r.a)(u.a.backgroundWrapper, n),
					style: Object(a.c)(s, e),
					onClick: i,
					"data-adclicklocation": d.a.BACKGROUND
				}, b), t)
			}))
		},
		"./src/reddit/components/PostBadges/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostBadges/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/constants/index.ts"),
				l = n("./src/reddit/actions/tooltip.ts"),
				u = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				m = n("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				p = n("./src/reddit/constants/posts.ts"),
				b = n("./src/reddit/contexts/PageLayer/index.tsx"),
				h = n("./src/reddit/helpers/isRemoved.ts"),
				f = n("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				x = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				O = n("./src/reddit/icons/fonts/index.tsx"),
				v = n("./src/reddit/icons/fonts/Approve/index.tsx"),
				g = n("./src/reddit/icons/fonts/Archived/index.tsx"),
				E = n("./src/reddit/icons/fonts/Lock/index.tsx"),
				_ = n("./src/reddit/icons/fonts/Remove/index.tsx"),
				j = n("./src/reddit/icons/fonts/Report/index.tsx"),
				C = n("./src/reddit/icons/fonts/Spam/index.tsx"),
				y = n("./src/reddit/icons/fonts/Sticky/index.tsx"),
				k = n("./src/reddit/models/Post/index.ts"),
				S = n("./src/reddit/selectors/modQueue.ts"),
				w = n("./src/reddit/selectors/posts.ts"),
				T = n("./src/reddit/components/PostBadges/index.m.less"),
				N = n.n(T);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const R = e => r.a.createElement("span", I({
					className: N.a.removalReason
				}, e), e.children),
				P = () => s.fbt._("Archived", null, {
					hk: "zv3q3"
				}),
				M = () => s.fbt._("Comments are locked", null, {
					hk: "8HjJ9"
				}),
				A = e => s.fbt._("Moderator of {community name}", [s.fbt._param("community name", e)], {
					hk: "nJqIB"
				}),
				L = () => s.fbt._("Stickied post", null, {
					hk: "3qSaBs"
				}),
				D = () => s.fbt._("Pinned post", null, {
					hk: "2oxErI"
				}),
				F = (e, t, n) => {
					const s = `PostBadges--${e}--${t}`;
					return n ? `${s}--${n}` : s
				},
				B = Object(b.v)({
					isProfilePostListing: b.N,
					isSubreddit: b.Q
				}),
				U = Object(a.c)({
					isModQueueDisplayEnabled: S.b,
					isPinned: (e, t) => {
						let {
							post: n
						} = t;
						return Object(w.q)(e, {
							postId: n.id
						})
					},
					modModeEnabled: b.W
				}),
				H = Object(i.b)(U, (e, t) => ({
					onHideTooltip: () => e(Object(l.i)()),
					onOpenRemovalReasonModal: () => {
						n.e("removalReasonActions").then(n.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(n => e(n.fetchReasonsAndOpenModal(t.post.belongsTo.id, [t.post.id])))
					},
					onShowTooltip: t => () => e(Object(l.f)({
						tooltipId: t
					}))
				}));
			t.a = B(H(e => {
				let {
					className: t,
					displayText: n,
					isSubreddit: i,
					inSubredditOrProfile: a,
					isCompactPinnedPost: l,
					isPinned: b,
					isProfilePostListing: S,
					modModeEnabled: w,
					onHideTooltip: T,
					onOpenRemovalReasonModal: B,
					onShowTooltip: U,
					post: H,
					tooltipType: V,
					isModQueueDisplayEnabled: W
				} = e;
				const G = {
						caretOnTop: !1
					},
					K = H.isRemoved && !H.modRemovalReason && !H.modNote && H.belongsTo.type === p.a.SUBREDDIT,
					q = F("Approve", H.id, V),
					z = F("Archived", H.id, V),
					J = F("Lock", H.id, V),
					Y = F("Mod", H.id, V),
					Q = F("Remove", H.id, V),
					X = F("Report", H.id, V),
					Z = F("Spam", H.id, V),
					$ = F("Sticky", H.id, V),
					ee = F("Pinned", H.id, V);
				return r.a.createElement("div", {
					className: t
				}, a && n && H.distinguishType === d.J.MODERATOR && r.a.createElement(o.Fragment, null, r.a.createElement(O.a, {
					name: "mod",
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.modIcon)
				}), r.a.createElement(u.c, I({
					tooltipId: Y,
					text: A(n)
				}, G))), H.isArchived && r.a.createElement(o.Fragment, null, r.a.createElement(g.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.archivedIcon),
					desc: P(),
					id: z,
					onMouseEnter: U(z),
					onMouseLeave: T
				}), r.a.createElement(u.c, I({
					tooltipId: z,
					text: P()
				}, G))), H.isLocked && !H.isSponsored && r.a.createElement(o.Fragment, null, r.a.createElement(E.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.lockIcon),
					desc: M(),
					id: J,
					onMouseEnter: U(J),
					onMouseLeave: T
				}), r.a.createElement(u.c, I({
					tooltipId: J,
					text: M()
				}, G))), i && Object(k.v)(H) && !l && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.stickyIcon),
					desc: L(),
					id: $,
					onMouseEnter: U($),
					onMouseLeave: T
				}), r.a.createElement(u.c, I({
					tooltipId: $,
					text: L()
				}, G))), S && b && r.a.createElement(o.Fragment, null, r.a.createElement(y.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.stickyIcon),
					desc: D(),
					id: ee,
					onMouseEnter: U(ee),
					onMouseLeave: T
				}), r.a.createElement(u.c, I({
					tooltipId: ee,
					text: D()
				}, G))), !W && r.a.createElement(r.a.Fragment, null, (H.isApproved || H.approvedBy) && r.a.createElement(o.Fragment, null, r.a.createElement(v.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.approveIcon),
					desc: Object(f.a)(H),
					id: q,
					onMouseEnter: U(q),
					onMouseLeave: T
				}), r.a.createElement(u.c, I({
					tooltipId: q,
					text: Object(f.a)(H)
				}, G))), Object(h.a)(H) && r.a.createElement(o.Fragment, null, r.a.createElement(_.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.removeIcon),
					desc: Object(f.b)(H),
					id: Q,
					onMouseEnter: U(Q),
					onMouseLeave: T
				}), K && r.a.createElement(m.a, {
					className: N.a.addRemovalReason,
					onClick: B,
					text: s.fbt._("Add a removal reason", null, {
						hk: "1YDo3"
					})
				}), (H.modRemovalReason || H.modNote) && r.a.createElement(R, {
					onMouseEnter: U(Q),
					onMouseLeave: T
				}, s.fbt._("Removal reason", null, {
					hk: "2DhKVZ"
				})), r.a.createElement(u.c, I({
					tooltipId: Q,
					text: Object(f.b)(H)
				}, G))), H.bannedBy && H.isSpam && r.a.createElement(o.Fragment, null, r.a.createElement(C.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.spamIcon),
					desc: Object(f.d)(H),
					id: Z,
					onMouseEnter: U(Z),
					onMouseLeave: T
				}), r.a.createElement(u.c, I({
					tooltipId: Z,
					text: Object(f.d)(H)
				}, G)))), Object(x.a)(H) && !w && !W && r.a.createElement(o.Fragment, null, r.a.createElement(j.a, {
					isFilled: !0,
					className: Object(c.a)(N.a.icon, N.a.reportIcon),
					desc: Object(f.c)(H.numReports),
					id: X,
					onMouseEnter: U(X),
					onMouseLeave: T
				}), r.a.createElement(u.c, I({
					tooltipId: X,
					text: Object(f.c)(H.numReports)
				}, G))))
			}))
		},
		"./src/reddit/components/PostContainer/index.m.less": function(e, t, n) {
			e.exports = {
				WrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz",
				wrappedPost: "_1oQyIsiPHYt6nx7VOmd1sz"
			}
		},
		"./src/reddit/components/PostContainer/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return y
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/reselect/es/index.js"),
				i = n("./src/lib/ads/index.ts"),
				a = n("./src/reddit/components/AdViewability/index.tsx"),
				c = n("./src/reddit/helpers/trackers/gallery.ts"),
				d = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				l = n("./src/reddit/hooks/useTracking.ts");
			var u = o.a.memo(e => {
					const t = Object(s.useRef)(null),
						n = Object(l.a)(),
						r = Object(s.useCallback)(t => {
							t.forEach(t => {
								const {
									intersectionRatio: s
								} = t;
								s >= .5 && n(c.d(e.postId))
							})
						}, [n, e.postId]),
						i = Object(s.useMemo)(() => ({
							threshold: [.5]
						}), []);
					return Object(d.a)(t, r, i), o.a.createElement("div", {
						role: "presentation"
					}, o.a.createElement("div", {
						ref: t
					}, e.children))
				}),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/connectors/PostViewable/index.ts"),
				b = n("./src/reddit/models/Media/index.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/telemetry.ts"),
				x = n("./src/lib/classNames/index.ts"),
				O = n("./src/lib/objectSelector/index.ts"),
				v = n("./src/higherOrderComponents/withClickTracking/index.tsx"),
				g = n("./src/higherOrderComponents/withAdClickLocation/index.tsx"),
				E = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				_ = n("./src/reddit/components/PostContainer/index.m.less"),
				j = n.n(_);
			const C = Object(p.a)(() => Object(r.c)({
					basePixelMetadata: Object(O.a)((e, t) => {
						let {
							post: n
						} = t;
						return Object(h.b)(e, n.id)
					}),
					clickTrackingId: (e, t) => {
						let {
							post: n
						} = t;
						return n.id
					},
					imageGalleryCurrentItem: (e, t) => {
						let {
							post: n
						} = t;
						return Object(h.i)(e, {
							postId: n.id
						})
					},
					pageType: e => Object(f.d)(e).pageType
				})),
				y = "post-container";
			class k extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						basePixelMetadata: t,
						children: n,
						className: s,
						imageGalleryCurrentItem: r,
						makePostContainerId: d,
						post: l,
						onClick: m,
						pageType: p,
						sendEvent: h,
						style: f,
						ref: O,
						shouldAddGalleryViewability: v = !0
					} = this.props, g = o.a.createElement("div", {
						"data-click-id": this.props["data-click-id"],
						style: f,
						ref: O,
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: n => {
							if (!this.cancelClick && n.button < 2 && e(() => m && m(n, l, t, r, p))(n), l.id && r) {
								const {
									source: e
								} = Object(i.t)(l, r);
								e && e.outboundUrl && h(Object(c.c)(l.id, e.outboundUrl))
							}
						},
						className: Object(x.a)(j.a.WrappedPost, s, `Post ${l.id}`, {
							promotedlink: l.isSponsored
						}),
						"data-testid": y,
						id: d ? d(l.id) : l.id,
						tabIndex: -1,
						"data-adclicklocation": E.a.BACKGROUND
					}, n), _ = !!l.media && l.media.type === b.o.VIDEO;
					return (e => l.media && Object(b.E)(l.media) && v ? o.a.createElement(u, {
						postId: l.id
					}, e) : e)((e => l.isSponsored || _ ? o.a.createElement(a.a, {
						post: l,
						trackDisplay: !0
					}, e) : e)(g))
				}
			}
			t.b = C(Object(g.a)(Object(v.a)(Object(m.c)(k))))
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
				return h
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/post.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/helpers/trackers/postCollection.ts"),
				m = n("./src/reddit/components/PostFollow/index.m.less"),
				p = n.n(m);
			class b extends r.a.Component {
				constructor(e) {
					super(e), this.onFollowClick = () => {
						const {
							isEventFollow: e,
							onFollow: t,
							post: {
								id: n,
								isFollowed: s
							},
							sendEvent: o
						} = this.props, r = !!s;
						o(e ? Object(u.o)({
							postId: n,
							isFollowed: r
						}) : Object(u.g)({
							postId: n,
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
						post: n
					} = this.props, o = this.state.isHovered, i = n.isFollowed;
					let a = i ? s.fbt._("Followed", null, {
						hk: "2oc9IH"
					}) : s.fbt._("Follow", null, {
						hk: "NkunG"
					});
					return i && o && (a = s.fbt._("Unfollow", null, {
						hk: "2sJ8xn"
					})), r.a.createElement("button", {
						className: Object(c.a)(p.a.collectionFollow, {
							[p.a.isFollowed]: !!n.isFollowed,
							[p.a.isEventFollow]: t
						}, e),
						onClick: this.onFollowClick,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave
					}, a)
				}
			}
			const h = Object(i.b)(() => Object(a.c)({}), (e, t) => {
				let {
					post: n
				} = t;
				return {
					onFollow: () => e(Object(d.z)(n.isSponsored ? n.postId : n.id))
				}
			})(Object(l.c)(b))
		},
		"./src/reddit/components/PostRailAndVotes/index.m.less": function(e, t, n) {
			e.exports = {
				score: "_3a2ZHWaih05DgAOtvu6cIo",
				allowPointerEvents: "_2iiIcja5xIjg-5sI4ECvcV",
				checkbox: "_25sIJZLIxTa3eolXDWieo5"
			}
		},
		"./src/reddit/components/PostRailAndVotes/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/PostLeftRail/index.tsx"),
				a = n("./src/reddit/components/VerticalVotes/index.tsx"),
				c = n("./src/reddit/controls/Checkbox/index.tsx"),
				d = n("./src/reddit/helpers/isPost.ts"),
				l = n("./src/reddit/helpers/showReportIndicator/index.ts"),
				u = n("./src/reddit/components/PostRailAndVotes/index.m.less"),
				m = n.n(u);
			t.a = e => {
				const {
					model: t,
					handleVote: n,
					showBulkActionCheckbox: s = !1,
					isCheckboxSelected: u = !1,
					isCountAnimShadowTestEnabled: p,
					toggleCheckbox: b = (() => {}),
					flairStyleTemplate: h,
					redditStyle: f,
					isOverlay: x,
					isVoteCountAnimation: O,
					postId: v,
					shouldShowUpvoteRatioOnHover: g
				} = e, E = `upvote-button-${t.id}${x?"-overlay":""}`;
				return o.a.createElement(i.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: f
				}, s && o.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(a.a, {
					flairStyleTemplate: h,
					model: t,
					onVoteClick: n,
					redditStyle: f,
					upvoteTooltipId: E,
					isVoteCountAnimation: O,
					isCountAnimShadowTestEnabled: p,
					postId: v,
					scoreClassName: Object(r.a)(m.a.score, {
						[m.a.allowPointerEvents]: g
					}),
					shouldShowUpvoteRatioOnHover: g
				}))
			}
		},
		"./src/reddit/components/PostTitle/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return D
			})), n.d(t, "a", (function() {
				return Y
			}));
			var s = n("./src/config.ts"),
				o = n("./node_modules/polished/dist/polished.es.js"),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				c = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/ads/index.ts"),
				u = n("./src/lib/classNames/index.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/controls/OutboundLink/index.tsx"),
				h = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				f = n("./src/lib/permalinkToOverlayLocation/index.ts"),
				x = n("./src/reddit/actions/post.ts"),
				O = n("./src/reddit/helpers/path/index.ts"),
				v = n("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				g = n("./src/reddit/hooks/useClickSourceData.ts"),
				E = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				_ = n("./src/reddit/hooks/usePostContext.ts"),
				j = n("./src/reddit/hooks/useTheme.ts"),
				C = n("./src/reddit/icons/fonts/index.tsx"),
				y = n("./src/reddit/models/Flair/index.ts"),
				k = n("./src/reddit/models/Media/index.ts"),
				S = n("./src/reddit/models/Prediction/Tournament/index.ts"),
				w = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				T = n("./src/lib/getShortenedLink.ts"),
				N = n("./src/reddit/components/FlairWrapper/index.tsx"),
				I = n("./node_modules/fbt/lib/FbtPublic.js"),
				R = n("./src/lib/prettyPrintNumber/index.ts"),
				P = n("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				M = n("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				A = n.n(M);
			const L = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var D, F = Object(a.b)(L)((function(e) {
					const {
						poll: t,
						resultsByVoters: n
					} = e, s = n ? n.totalVotes : "0";
					return Object(E.a)() ? null : i.a.createElement("div", {
						className: Object(u.a)(e.className, A.a.proposalMetaData)
					}, i.a.createElement("span", null, I.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [I.fbt._param("count", Object(R.a)(s)), I.fbt._plural(parseInt(s))], {
						hk: "4rP1VK"
					})), t && i.a.createElement(P.a, {
						className: A.a.proposalExpiry,
						poll: t
					}))
				})),
				B = n("./src/reddit/components/SEOTitle/index.tsx"),
				U = n("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				H = n("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				V = n("./src/reddit/selectors/user.ts"),
				W = n("./src/telemetry/models/Outbound.ts"),
				G = n("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				K = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				q = n("./src/reddit/components/PostTitle/index.m.less"),
				z = n.n(q);

			function J() {
				return (J = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}! function(e) {
				e[e.ExtraLarge = 0] = "ExtraLarge", e[e.Large = 1] = "Large", e[e.Medium = 2] = "Medium", e[e.Small = 3] = "Small", e[e.ExtraSmall = 4] = "ExtraSmall", e[e.Metadata = 5] = "Metadata"
			}(D || (D = {}));
			const Y = e => {
					let {
						size: t,
						titleColor: n,
						titleType: s,
						nowrap: o,
						children: r,
						className: a,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(j.a)();
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
							"--posttitletextcolor": n || Object(w.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, s ? i.a.createElement(B.b, {
						type: s
					}, r) : r)
				},
				Q = e => {
					let {
						className: t,
						disableVisited: n,
						titleColor: s,
						children: o,
						...r
					} = e;
					return i.a.createElement(c.a, J({}, r, {
						className: Object(u.a)(t, z.a.styledLink, {
							[z.a.isVisitedEnabled]: !n
						})
					}), o)
				},
				X = e => {
					let {
						disableVisited: t,
						nowrap: n,
						className: s,
						children: o
					} = e;
					return i.a.createElement("div", {
						className: Object(u.a)(z.a.titleContainer, s, {
							[z.a.isNoWrap]: n,
							[z.a.isVisitedEnabled]: !t
						})
					}, o)
				},
				Z = Object(d.c)({
					flairPosition: (e, t) => {
						let {
							pageLayer: n
						} = t;
						return Object(p.r)(e, {
							pageLayer: n
						})
					},
					isNsfwBlurSubreddit: H.e,
					shouldOpenPostInNewTab: V.kb
				}),
				$ = e => {
					const {
						post: t,
						subreddit: n
					} = e, {
						isSponsored: s
					} = t, o = Object(a.d)(), r = Object(g.a)(), c = Object(a.e)(U.b), d = Object(a.e)(U.c), u = e => {
						!c && !d || t.media && Object(k.H)(t.media) || (e.preventDefault(), o(Object(x.ab)(Object(O.b)(t.permalink), t.id)))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return i.a.createElement(X, {
						nowrap: e.nowrap
					}, i.a.createElement(ee, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return i.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, i.a.createElement(ee, e)); {
						const o = t.media && Object(k.H)(t.media) ? Object(v.c)(t.id, n.name) : t.permalink,
							a = e.isCommentPermalink ? Object(O.b)(o) : Object(f.a)(o, void 0, r);
						return i.a.createElement(X, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s ? ((e, t) => {
							const {
								source: n
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return n ? i.a.createElement(b.b, {
								href: n.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: n
							}, i.a.createElement(ee, t)) : i.a.createElement(ee, t)
						})(t, e) : i.a.createElement(Q, {
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
						isCommentsPageAd: n,
						post: s
					} = e;
					let o = e.format ? e.format(s) : s.title;
					n && "string" == typeof o && (o = (e => {
						return e.length >= 250 ? e.slice(0, 250 - "...".length) + "..." : e
					})(o));
					const r = e.isCommentsPage ? B.a.PostComments : B.a.PostItem,
						a = !(!e.isNsfwBlurSubreddit || !e.post.isNSFW);
					return i.a.createElement(Y, {
						className: e.titleClassName,
						nowrap: e.nowrap,
						redditStyle: e.redditStyle || e.isCommentsPage || e.isCommentsPageAd,
						shouldBlurTitle: a,
						size: e.size,
						titleColor: e.titleColor,
						titleType: r
					}, t && i.a.createElement(N.a, {
						titleFlair: t,
						nowrap: !0,
						post: s,
						sendEvent: e.sendEvent
					}), o)
				},
				te = e => {
					const {
						hideSourceLink: t,
						isNsfwBlurSubreddit: n,
						post: s
					} = e, {
						isSponsored: o
					} = s, r = e.isCommentsPage ? W.SourceElement.PostLink : W.SourceElement.ListingPostLink;
					if (Object(E.a)()) return null;
					if (n && s.isNSFW) return null;
					const a = !t && !e.isCrosspost && e.size !== D.Large && !s.isSponsored && !(s.media && Object(k.H)(s.media)) && (s.source || s.media && (s.media.type === k.o.GIFVIDEO || s.media.type === k.o.IMAGE || s.media.type === k.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (a) return i.a.createElement(h.a, {
							className: e.outboundLinkClassName,
							href: Object(k.D)(s),
							isSponsored: o,
							postId: s.id,
							source: s.source,
							sourceElement: r
						}, Object(T.a)(s), !s.isSponsored && i.a.createElement(C.a, {
							name: "external_link",
							className: z.a.outboundLinkIcon
						}))
					} else if (s.source && !e.isCrosspost && e.size !== D.Large && e.size !== D.ExtraLarge) return i.a.createElement(h.a, {
						className: e.outboundLinkClassName,
						href: s.source.url,
						isSponsored: o,
						postId: s.id,
						source: s.source,
						sourceElement: r
					}, Object(T.a)(s), !s.isSponsored && i.a.createElement(C.a, {
						name: "external_link",
						className: z.a.outboundLinkIcon
					}));
					return null
				};
			class ne extends i.a.Component {
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
						flairPosition: n,
						isCommentsPage: o,
						isOverlay: r,
						poll: a,
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = n === y.b.Left, b = Object(N.b)(c), {
						leftFlair: h,
						rightFlair: f
					} = Object(G.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), x = !r && !o && !t, O = x && h && h.length > 0, v = x && f && f.length > 0;
					return i.a.createElement("div", {
						className: Object(u.a)(z.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": K.a.TITLE,
						onClick: m
					}, !d && O && i.a.createElement(N.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(S.b)(c) && i.a.createElement($, J({}, this.props, {
						leftFlair: d ? h : void 0
					})), a && i.a.createElement(F, {
						className: z.a.pollMeta,
						pollId: a.id
					}), i.a.createElement(te, this.props), v && i.a.createElement(N.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), i.a.createElement("div", {
						className: z.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${s.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = i.a.memo((function(e) {
				const t = Object(p.gb)(),
					n = Object(p.x)(t),
					s = Object(_.a)(),
					o = Object(a.e)(o => Z(o, {
						...s,
						...e,
						isCommentPermalink: n,
						pageLayer: t
					})),
					r = Object(j.a)(),
					c = Object(m.b)();
				return s ? i.a.createElement(ne, J({
					pageLayer: t,
					isCommentPermalink: n
				}, s, o, e, {
					theme: r,
					sendEvent: c
				})) : null
			}))
		},
		"./src/reddit/components/PostTopLine/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/PostTopLine/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/components/AwardBadges/index.tsx"),
				d = n("./src/reddit/components/JSAPIContainers/index.tsx"),
				l = n("./src/reddit/components/NotificationButton/index.tsx"),
				u = n("./src/reddit/components/PostBadges/index.tsx"),
				m = n("./src/reddit/components/PostTopMeta/index.tsx"),
				p = n("./src/reddit/components/SubredditIcon/index.tsx"),
				b = n("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = n("./src/reddit/components/SubscribeButton/Inline.tsx"),
				f = n("./src/reddit/constants/posts.ts"),
				x = n("./src/reddit/controls/Button/index.tsx"),
				O = n("./src/reddit/controls/OutboundLink/index.tsx"),
				v = n("./src/reddit/helpers/trackers/post.ts"),
				g = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				E = n("./src/reddit/models/Media/index.ts"),
				_ = n("./src/reddit/models/Subreddit/index.ts"),
				j = n("./src/reddit/selectors/user.ts"),
				C = n("./src/reddit/components/PostTopLine/index.m.less"),
				y = n.n(C);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: n,
					forceOpenInNewTab: o,
					hideNSFWPref: C,
					hostPostData: k,
					iconClassName: S,
					inSubredditOrProfile: w,
					isCommentsPage: T,
					isCompactPinnedPost: N,
					isCurrentUserProfilePost: I,
					isModWithUserNotesPermissions: R,
					isOverlay: P,
					isTopicPage: M,
					listingKey: A,
					post: L,
					shouldShowSubscribeButton: D,
					showCornerOutboundLink: F,
					showSubreddit: B,
					showSubredditIcon: U,
					subredditOrProfile: H,
					isFollowed: V,
					shouldShowFollowButton: W,
					onFollowPostClick: G
				} = e;
				const K = M,
					q = H && Object(_.i)(H),
					z = Object(i.e)(e => {
						if (!q) return !0;
						const t = Object(j.Hb)(e, L.author || "");
						return !t || t.enableFollowers
					});
				return r.a.createElement("div", {
					className: Object(a.a)(y.a.container, t)
				}, B && H && r.a.createElement("div", {
					className: y.a.subredditIconWrapper
				}, r.a.createElement(b.a, {
					"data-click-id": "subreddit",
					to: H.url
				}, U && r.a.createElement(p.b, {
					className: Object(a.a)(y.a.subredditIcon, S),
					shouldHideNsfwIcon: C,
					subredditOrProfile: H
				}))), r.a.createElement("div", {
					className: y.a.everythingElseWrapper
				}, B && r.a.createElement(d.h, {
					type: L.belongsTo.type,
					id: L.belongsTo.id
				}), r.a.createElement(m.g, {
					className: y.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: n,
					isModWithUserNotesPermissions: R,
					tooltipType: P ? m.f.Lightbox : void 0,
					post: L,
					showSub: B,
					subredditOrProfile: H
				}), r.a.createElement(u.a, {
					className: y.a.postBadges,
					displayText: H ? H.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: N,
					post: L,
					tooltipType: P ? m.f.Lightbox : void 0
				}), !K && r.a.createElement(c.a, {
					isPostDetail: T,
					thing: L,
					tooltipType: P ? m.f.Lightbox : void 0
				})), H && z && B && D && !I && r.a.createElement(h.a, {
					className: y.a.SubscribeButton,
					getEventFactory: e => Object(v.k)(L.id, e ? "unsubscribe" : "subscribe", "post", A, k),
					identifier: {
						name: H.name,
						type: q ? f.a.PROFILE : f.a.SUBREDDIT
					},
					postId: L.id,
					size: x.d.XS
				}), F && r.a.createElement(O.b, {
					isSponsored: L.isSponsored,
					postId: L.id,
					href: Object(E.D)(L),
					source: L.source
				}, r.a.createElement(g.a, {
					className: y.a.outboundLinkIcon
				})), W && z && r.a.createElement(l.a, {
					isFilled: !!V,
					onClick: G,
					hasTooltip: !0,
					tooltipText: s.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}))
			}
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/classNames/index.ts"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/react-router/esm/react-router.js"),
				c = n("./src/reddit/actions/post.ts"),
				d = n("./src/reddit/actions/snoovatarModal.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/controls/Button/index.tsx"),
				m = n("./src/reddit/helpers/trackers/snoovatar.ts"),
				p = n("./src/reddit/icons/svgs/Shirt/index.tsx"),
				b = n("./src/reddit/models/Vote/index.ts"),
				h = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less"),
				f = n.n(h);
			const {
				fbt: x
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(a.i)(e => {
				let {
					isHovercard: t,
					username: n,
					isAvatarPost: a,
					post: h,
					share: O
				} = e;
				const v = Object(l.b)(),
					g = Object(i.d)(),
					E = h && h.id,
					_ = h && h.voteState;
				let j = null;
				E || (j = t ? "user_hovercard" : "profile_overview");
				const C = Object(o.useCallback)(() => v(Object(m.h)(t ? "user_hovercard" : "profile_overview", n)), [t, v, n]);
				return r.a.createElement(u.t, {
					onClick: () => {
						a ? (v(m.i), E && _ === b.a.notVoted && g(Object(c.jb)(E))) : C();
						const e = a ? "postify" : "copy";
						g(Object(d.b)({
							clickSource: j,
							share: O,
							source: e
						}))
					},
					className: Object(s.a)(f.a.snoovatarButton, f.a.snoovatarExtraPadding, f.a.compactButtonLayout, {
						[f.a.avatarPostifyButton]: a
					}),
					isFullWidth: !0
				}, r.a.createElement(p.a, {
					className: Object(s.a)({
						[f.a.shirtIcon]: !a,
						[f.a.avatarPostButtonShirtIcon]: a
					})
				}), x._("Try this Look", null, {
					hk: "dOuPb"
				}), r.a.createElement("div", {
					className: f.a.chevronIcon
				}))
			})
		},
		"./src/reddit/components/ProfileIdCard/SnoovatarButton/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Reports/SnoozableReport/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Reports/SnoozableReport/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/constants/index.ts"),
				d = n("./src/reddit/actions/comment/moderation.ts"),
				l = n("./src/reddit/actions/post.ts"),
				u = n("./src/reddit/actions/tooltip.ts"),
				m = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = n("./src/reddit/components/TrackingHelper/index.tsx"),
				b = n("./src/reddit/controls/Dropdown/index.tsx"),
				h = n("./src/reddit/controls/Dropdown/Row.tsx"),
				f = n("./src/reddit/helpers/isComment.ts"),
				x = n("./src/reddit/helpers/trackers/modTools.ts"),
				O = n("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				v = n("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				g = n("./src/reddit/icons/svgs/Clock/index.tsx"),
				E = n("./src/reddit/icons/svgs/Undo/index.tsx"),
				_ = n("./src/reddit/selectors/tooltip.ts"),
				j = n("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				C = n.n(j);
			const {
				fbt: y
			} = n("./node_modules/fbt/lib/FbtPublic.js"), k = (e, t) => `SnoozableReport--${t}--${e}`, S = Object(r.b)(() => Object(i.c)({
				isDropdownOpen: (e, t) => Object(_.b)(k(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(u.h)({
					tooltipId: k(t.reason, t.reportedThingId)
				})),
				toggleSnooze: n => {
					Object(f.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, n)) : e(Object(l.gb)(t.reportedThingId, t.reason, n))
				}
			})), w = Object(m.a)(b.a);
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.kc.None : c.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(x.n)(Object(f.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
						this.props.sendEvent(t)
					}
				}
				render() {
					const {
						reason: e,
						amount: t,
						reportedThingId: n,
						openDropdown: s,
						isDropdownOpen: r,
						isSnoozed: i,
						useNewFormat: c,
						className: d,
						dropdownClassName: l,
						iconClassName: u
					} = this.props, m = k(e, n);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(h.b, {
						id: m,
						className: Object(a.a)(C.a.DropdownLabelContainer, d),
						onClick: s
					}, o.a.createElement("label", {
						htmlFor: m,
						className: C.a.DropdownLabel
					}, i ? y._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : c ? `${e} (${t})` : `${t}: ${e}`, r ? o.a.createElement(v.a, null) : o.a.createElement(O.a, null))), o.a.createElement(w, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: Object(a.a)(C.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: C.a.SnoozeButtonContent
					}, i ? o.a.createElement(o.a.Fragment, null, o.a.createElement(E.a, {
						className: u
					}), y._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(g.a, {
						className: u
					}), y._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = S(Object(p.c)(T))
		},
		"./src/reddit/components/RichTextJson/Emote/index.m.less": function(e, t, n) {
			e.exports = {
				container: "JnJcJlA7hHeajn8Um_Bh5"
			}
		},
		"./src/reddit/components/RichTextJson/Giphy.m.less": function(e, t, n) {
			e.exports = {
				anchor: "voEElhHVrm-yKZcIbBmik",
				giphy: "_1gg1MfJZaNkaPmqHpGQHni",
				attributionRow: "U76N5pdhVpwLUkKv0jpDZ",
				giphyLogo: "lhXj5Lw1-62CSn58uodEt",
				attributionText: "WZIEUuvYX30GAtLJofhDk"
			}
		},
		"./src/reddit/components/RichTextJson/SpoilerText.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/SpoilerText.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				d = n("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = n("./src/reddit/components/RichTextJson/SpoilerText.m.less"),
				u = n.n(l),
				m = n("./src/lib/lessComponent.tsx");

			function p() {
				return (p = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const b = ["left", "top"],
				h = ["left", "bottom"],
				f = m.a.span("InnerSpan", u.a),
				x = m.a.span("TooltipTarget", u.a),
				O = m.a.span("SpoilerWrapper", u.a),
				v = m.a.wrapped(e => {
					let {
						className: t,
						isOpen: n,
						...s
					} = e;
					return r.a.createElement(O, p({}, s, {
						className: Object(i.a)(t, {
							[u.a.isOpen]: n
						})
					}))
				}, "SpoilerWrapper", u.a),
				g = Object(d.a)(m.a.wrapped(c.b, "Component", u.a), [a.a.Click, a.a.Keydown]);
			class E extends r.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.onClick = e => {
						const {
							isOpen: t
						} = this.state, {
							onClickReveal: n
						} = this.props;
						t || (e.preventDefault(), e.stopPropagation(), this.setState({
							isOpen: !0
						}), null == n || n(e))
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
					return r.a.createElement(v, {
						isOpen: e,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						onClick: this.onClick
					}, r.a.createElement(f, null, r.a.createElement(x, {
						innerRef: this.setTooltipTargetRef
					}), r.a.createElement(g, {
						isOpen: t,
						tooltipTarget: this.tooltipTargetElement,
						text: s.fbt._("Reveal spoiler", null, {
							hk: "271xYi"
						}),
						targetPosition: b,
						tooltipPosition: h
					}), this.props.children))
				}
			}
			t.a = E
		},
		"./src/reddit/components/RichTextJson/elements.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/elements.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "x", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "k", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "j", (function() {
				return h
			})), n.d(t, "g", (function() {
				return f
			})), n.d(t, "v", (function() {
				return x
			})), n.d(t, "i", (function() {
				return O
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "f", (function() {
				return g
			})), n.d(t, "u", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "m", (function() {
				return C
			})), n.d(t, "n", (function() {
				return y
			})), n.d(t, "t", (function() {
				return k
			})), n.d(t, "p", (function() {
				return S
			})), n.d(t, "o", (function() {
				return w
			})), n.d(t, "q", (function() {
				return T
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "r", (function() {
				return I
			})), n.d(t, "a", (function() {
				return R
			})), n.d(t, "w", (function() {
				return P
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/controls/OutboundLink/index.tsx"),
				i = n("./src/reddit/components/RichTextJson/elements.m.less"),
				a = n.n(i),
				c = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/Governance/VaultActionLink/async.ts");
			const l = [c.a.div("H1", a.a), c.a.div("H2", a.a), c.a.div("H3", a.a), c.a.div("H4", a.a), c.a.div("H5", a.a), c.a.div("H6", a.a)],
				u = c.a.hr("Hr", a.a),
				m = c.a.code("M", a.a),
				p = c.a.pre("Pre", a.a),
				b = c.a.blockquote("Blockquote", a.a),
				h = c.a.p("P", a.a),
				f = c.a.li("Li", a.a),
				x = c.a.ul("Ul", a.a),
				O = c.a.ol("Ol", a.a),
				v = c.a.strong("B", a.a),
				g = c.a.em("I", a.a),
				E = c.a.span("U", a.a),
				_ = e => o.a.createElement("del", e),
				j = c.a.sub("Sub", a.a),
				C = c.a.sup("Sup", a.a),
				y = c.a.table("Table", a.a),
				k = c.a.tr("Tr", a.a),
				S = c.a.td("Tdl", a.a),
				w = c.a.td("Tdc", a.a),
				T = c.a.td("Tdr", a.a),
				N = c.a.th("Thl", a.a),
				I = c.a.th("Thc", a.a),
				R = (c.a.th("Thr", a.a), c.a.wrapped(e => o.a.createElement(r.b, e), "A", a.a)),
				P = c.a.wrapped(d.a, "A", a.a)
		},
		"./src/reddit/components/RichTextJson/index.m.less": function(e, t, n) {
			e.exports = {
				Container: "_292iotee39Lmt0MkQZ2hPV",
				container: "_292iotee39Lmt0MkQZ2hPV",
				unblurButtonContainer: "YCBAlwtFjC7cDSMdBeA2W",
				unblurButton: "gCpM4Pkvf_Xth42z4uIrQ",
				Component: "_1GPL7pYOAn5YHfoARxZ8-F",
				component: "_1GPL7pYOAn5YHfoARxZ8-F"
			}
		},
		"./src/reddit/components/RichTextJson/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return E
			})), n.d(t, "c", (function() {
				return _
			})), n.d(t, "a", (function() {
				return j
			})), n.d(t, "b", (function() {
				return C
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/lodash/findLastIndex.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/lib/sentry/index.ts"),
				u = n("./src/reddit/components/Media/BlurredContent.tsx"),
				m = n("./src/reddit/constants/elementClassNames.ts"),
				p = n("./src/reddit/models/RichTextJson/index.ts"),
				b = n("./src/reddit/components/RichTextJson/media.tsx"),
				h = n("./src/reddit/components/RichTextJson/renderers.tsx"),
				f = n("./src/reddit/components/RichTextJson/index.m.less"),
				x = n.n(f);
			const O = n("./src/lib/lessComponent.tsx").a.div("Container", x.a),
				v = Object(d.a)(e => {
					let {
						flairStyleTemplate: t,
						theme: n,
						...s
					} = e;
					return a.a.createElement(O, s)
				}),
				g = e => e.e === p.k ? !!e.c && !e.c.every(e => !e.t) : e.e !== p.v || !!e.c && !e.c.every(e => e.e === p.B && !e.t),
				E = e => r()(e, g),
				_ = e => e.findIndex(g),
				j = e => {
					const {
						altText: t,
						className: n,
						content: s,
						isListing: o,
						isNSFW: r,
						isNsfwBlockingModalEligible: i,
						isSpoiler: d,
						onClickRevealBlurred: l,
						postId: f,
						renderMediaAsLinks: g,
						rtJsonElementProps: j,
						useExplicitTextColor: C,
						shouldBlur: y,
						onClickRevealSpoilerText: k,
						mediaProps: S
					} = e, w = s.document, T = [], N = e.mediaMetadata || null, I = _(w), R = E(w);
					if (y && !o && !i) return a.a.createElement(O, {
						className: Object(c.a)(m.j, n)
					}, a.a.createElement("div", {
						className: x.a.unblurButtonContainer
					}, a.a.createElement("button", {
						className: x.a.unblurButton,
						onClick: l
					}, Object(u.b)(!!r, !!d))));
					if (-1 !== I)
						for (let a = I; a <= R; a++) {
							const e = w[a];
							switch (e.e) {
								case p.k:
									T.push(h.c(e, j, a));
									break;
								case p.l:
									T.push(h.d(a));
									break;
								case p.b:
									T.push(h.a(e, N, j, a));
									break;
								case p.c:
									T.push(h.b(e, a));
									break;
								case p.p:
									T.push(h.f(e, N, j, a, k));
									break;
								case p.A:
									T.push(h.h(e, N, j, a, k));
									break;
								case p.v:
									T.push(h.g(e, N, j, a, k, S));
									break;
								case p.h:
									T.push(Object(b.a)(e, a));
									break;
								case p.m:
								case p.a:
								case p.E:
									T.push(...Object(b.b)({
										node: e,
										key: a,
										rtJsonElementProps: j,
										mediaMetadata: N,
										renderMediaAsLinks: g,
										postId: f,
										altText: t,
										mediaProps: S
									}))
							}
						}
					return C ? a.a.createElement(O, {
						className: Object(c.a)(m.j, n)
					}, T) : a.a.createElement(v, {
						className: Object(c.a)(m.j, n),
						flairStyleTemplate: e.flairStyleTemplate,
						redditStyle: e.redditStyle
					}, T)
				};
			class C extends a.a.Component {
				constructor() {
					super(...arguments), this.hasError = !1, this.state = {
						hasError: !1
					}, this.renderDefaultFallback = () => s.fbt._("Something went wrong while trying to render this", null, {
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
						return j(t)
					} catch (n) {
						return this.hasError = !0, this.logError(n), e()
					}
				}
			}
		},
		"./src/reddit/components/RichTextJson/media.m.less": function(e, t, n) {
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
		"./src/reddit/components/RichTextJson/media.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return D
			})), n.d(t, "b", (function() {
				return B
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/config.ts"),
				c = n("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				d = n("./src/reddit/components/Media/EmbedBox/index.tsx"),
				l = n("./src/reddit/components/Media/ImageBox/index.tsx"),
				u = n("./src/reddit/components/Media/MediaContainer/index.tsx"),
				m = n("./src/reddit/components/Media/VideoBox/index.tsx"),
				p = n("./src/reddit/controls/Button/index.tsx"),
				b = n("./src/reddit/helpers/richTextJson/index.ts"),
				h = n("./src/reddit/icons/fonts/index.tsx"),
				f = n("./src/reddit/models/RichTextJson/index.ts"),
				x = n("./src/reddit/components/RichTextJson/elements.tsx"),
				O = n("./src/reddit/endpoints/giphy/index.ts"),
				v = n("./src/reddit/hooks/useIntersectionObserver.ts"),
				g = n("./src/reddit/hooks/useMounted.ts");
			var E = e => r.a.createElement("svg", {
					width: "20",
					height: "20",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					className: e.className
				}, r.a.createElement("path", {
					d: "M2 1.714h2.286v16.571H2V1.714z",
					fill: "#04FF8E"
				}), r.a.createElement("path", {
					d: "M15.715 6.286H18v12h-2.285v-12z",
					fill: "#8E2EFF"
				}), r.a.createElement("path", {
					d: "M2 17.714h16V20H2v-2.286z",
					fill: "#00C5FF"
				}), r.a.createElement("path", {
					d: "M2 0h9.143v2.286H2V0z",
					fill: "#FFF152"
				}), r.a.createElement("path", {
					d: "M15.714 4.571V2.286h-2.286V0h-2.285v6.857H18V4.571",
					fill: "#FF5B5B"
				}), r.a.createElement("path", {
					d: "M15.715 9.143V6.857H18",
					fill: "#551C99"
				}), r.a.createElement("path", {
					fillRule: "evenodd",
					clipRule: "evenodd",
					d: "M11.143 0v2.286H8.857",
					fill: "#999131"
				})),
				_ = n("./src/reddit/components/RichTextJson/Giphy.m.less"),
				j = n.n(_);
			const {
				fbt: C
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			var y = e => {
					let {
						id: t,
						mp4Url: n,
						className: s,
						externalLink: i,
						onClick: a
					} = e;
					const c = i || Object(b.h)(t),
						d = Object(o.useRef)(null),
						[l, u] = Object(o.useState)(!1),
						[m, p] = Object(o.useState)(null),
						h = Object(g.b)(),
						f = Object(o.useCallback)((async function(e) {
							e.forEach(e => {
								const {
									isIntersecting: n
								} = e;
								!l && n && (u(!0), async function(e, t) {
									const n = Object(b.g)(e);
									t((await Object(O.a)(n)).data.user)
								}(t, e => {
									h.current && p(e)
								}))
							})
						}), [u, t, l, h]);
					Object(v.a)(d, f);
					const _ = (null == m ? void 0 : m.display_name) || (null == m ? void 0 : m.username);
					return r.a.createElement("div", {
						className: s
					}, r.a.createElement(x.a, {
						href: c,
						target: "_blank",
						className: j.a.anchor
					}, n ? r.a.createElement("video", {
						className: j.a.giphy,
						loop: !0,
						autoPlay: !0,
						muted: !0,
						onClick: a,
						ref: d
					}, r.a.createElement("source", {
						src: n
					})) : c), r.a.createElement("div", {
						className: j.a.attributionRow
					}, r.a.createElement(E, {
						className: j.a.giphyLogo
					}), r.a.createElement("span", {
						className: j.a.attributionText
					}, (null == m ? void 0 : m.profile_url) && _ && r.a.createElement(r.a.Fragment, null, C._("by {=[name]}", [C._param("=[name]", r.a.createElement(x.a, {
						href: m.profile_url,
						target: "_blank"
					}, C._("{name}", [C._param("name", _)], {
						hk: "1jl6v3"
					})))], {
						hk: "3hNtmj"
					})), C._("via GIPHY", null, {
						hk: "4BJhbY"
					}))))
				},
				k = n("./src/reddit/components/RichTextJson/media.m.less"),
				S = n.n(k),
				w = n("./src/lib/lessComponent.tsx"),
				T = n("./src/reddit/helpers/media/index.ts");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const I = /\/(\w+)\/asset\/(\w+)\//,
				R = w.a.wrapped(x.a, "A", S.a),
				P = w.a.wrapped(l.a, "ImageBox", S.a),
				M = w.a.wrapped(e => r.a.createElement("p", e), "Caption", S.a),
				A = w.a.div("Placeholder", S.a),
				L = w.a.wrapped(e => {
					let {
						className: t,
						e: n,
						renderSmallMedia: a,
						onReload: c,
						...d
					} = e;
					const l = n === f.E ? s.fbt._("Processing video...", null, {
							hk: "3SXDRi"
						}) : s.fbt._("Processing image...", null, {
							hk: "1qwmbc"
						}),
						[u, m] = Object(o.useState)(!1);
					return Object(o.useEffect)(() => {
						c && setTimeout(() => {
							m(!0)
						}, 1500)
					}), r.a.createElement(A, N({
						className: Object(i.a)(t, {
							[S.a.renderSmallMedia]: a,
							[S.a.reload]: !!c
						}),
						style: {
							"--placeholder-content-text": `'${l}'`
						}
					}, d), !!c && u && r.a.createElement(p.t, {
						priority: p.c.Plain,
						className: S.a.ModalTopicsErrorButton,
						Icon: Object(h.b)("refresh"),
						text: s.fbt._("Reload", null, {
							hk: "3Yt2Hl"
						}),
						onClick: c
					}))
				}, "Placeholder", S.a),
				D = (e, t) => {
					let {
						c: n,
						x: s,
						y: o
					} = e;
					return r.a.createElement("div", {
						className: S.a.MediaWrapper
					}, r.a.createElement(u.a, {
						height: o,
						isListing: !1,
						key: t,
						showCentered: !0,
						showFull: !0,
						width: s
					}, r.a.createElement(d.a, {
						isListing: !1,
						source: n,
						height: o,
						width: s,
						showCentered: !0,
						showFull: !0
					})))
				},
				F = (e, t, n) => {
					const s = e.c;
					let o = "";
					return n && (n.e === f.s ? o = n.s.u : n.e === f.r ? o = n.s.gif : n.e === f.t && (o = (e => {
						const t = I.exec(e);
						return t ? `${a.a.redditUrl}/link/${t[1]}/video/${t[2]}/player` : ""
					})(n.dashUrl))), o ? r.a.createElement(R, {
						href: o,
						key: t,
						title: s
					}, s || o) : null
				},
				B = e => {
					let {
						node: t,
						key: n,
						rtJsonElementProps: s,
						mediaMetadata: o,
						renderMediaAsLinks: a,
						postId: d,
						altText: l,
						mediaProps: p
					} = e;
					const h = f.F(o, t.id);
					if (a) return [F(t, n, h)];
					const x = [];
					return !h || h.e === f.s && null === h.s.x && null === h.s.y ? x.push(((e, t, n, s) => r.a.createElement(L, {
						e,
						key: t,
						renderSmallMedia: n,
						onReload: s
					}))(t.e, n, null == p ? void 0 : p.renderSmallMedia, null == p ? void 0 : p.onReload)) : h.e === f.s ? x.push(((e, t, n, s, o) => {
						let {
							id: a,
							s: c,
							p: d
						} = e;
						const {
							alignLeft: l,
							renderSmallMedia: m,
							onClick: p
						} = o || {};
						let b = c;
						return m && (b = Object(T.i)(240, 20, c, d)), r.a.createElement("div", {
							className: Object(i.a)(S.a.MediaWrapper, {
								[S.a.mHasCaption]: n,
								[S.a.hasSmallMedia]: m
							})
						}, r.a.createElement(u.a, {
							height: b.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: b.x
						}, r.a.createElement(P, {
							altText: s,
							originalSource: c.u,
							postId: a,
							source: b.u,
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
					})(h, n, !!t.c, l, p)) : h.e === f.r ? x.push(((e, t, n, s, o) => {
						let {
							id: a,
							ext: c,
							s: d
						} = e;
						return Object(b.i)(a) ? r.a.createElement(y, {
							key: t,
							id: a,
							mp4Url: d.mp4,
							className: S.a.CommentGiphyWrapper,
							externalLink: c,
							onClick: null == o ? void 0 : o.onClick
						}) : r.a.createElement("div", {
							className: Object(i.a)(S.a.MediaWrapper, {
								[S.a.mHasCaption]: n,
								[S.a.hasSmallMedia]: null == o ? void 0 : o.renderSmallMedia
							})
						}, r.a.createElement(u.a, {
							height: d.y,
							isListing: !1,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d.x
						}, r.a.createElement(m.a, {
							height: d.y,
							isListing: !1,
							isNotCardView: !0,
							originalSource: d.mp4,
							width: d.x,
							postId: a,
							source: d.mp4,
							shouldPause: !1,
							showCentered: !(null == o ? void 0 : o.renderSmallMedia),
							shouldLoad: !0,
							showFull: !0,
							renderSmallMedia: null == o ? void 0 : o.renderSmallMedia,
							onClick: null == o ? void 0 : o.onClick
						})))
					})(h, n, !!t.c, 0, p)) : h.e === f.t && x.push(((e, t, n, s) => {
						let {
							hlsUrl: o,
							dashUrl: a,
							x: d,
							y: l,
							isGif: m
						} = e;
						return r.a.createElement("div", {
							className: Object(i.a)(S.a.MediaWrapper, {
								[S.a.mHasCaption]: n
							})
						}, r.a.createElement(u.a, {
							height: l,
							isListing: !1,
							isVideo: !0,
							key: t,
							showCentered: !0,
							showFull: !0,
							width: d
						}, r.a.createElement(c.b, {
							shouldLoad: !0,
							shouldPause: !0,
							shouldCreateFakeThumbnail: !0,
							autoPlay: m,
							hlsSource: o,
							mpegDashSource: a,
							postId: s,
							isGif: m
						})))
					})(h, n, !!t.c, d)), t.c && x.push(((e, t) => r.a.createElement(M, {
						key: t
					}, e))(t.c, `caption${n}`)), x
				}
		},
		"./src/reddit/components/RichTextJson/renderers.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return I
			})), n.d(t, "d", (function() {
				return R
			})), n.d(t, "a", (function() {
				return P
			})), n.d(t, "b", (function() {
				return M
			})), n.d(t, "f", (function() {
				return A
			})), n.d(t, "h", (function() {
				return D
			})), n.d(t, "g", (function() {
				return F
			})), n.d(t, "i", (function() {
				return B
			})), n.d(t, "e", (function() {
				return U
			}));
			var s = n("./src/lib/unicodeUtils/index.ts"),
				o = n("./node_modules/lodash/reduce.js"),
				r = n.n(o),
				i = n("./node_modules/react/index.js"),
				a = n.n(i),
				c = n("./src/reddit/components/RichTextJson/elements.tsx"),
				d = n("./node_modules/uuid/dist/esm-browser/v4.js"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				u = n("./src/reddit/models/Product/index.ts"),
				m = n("./src/reddit/models/RichTextJson/index.ts"),
				p = n("./src/reddit/selectors/telemetry.ts"),
				b = n("./src/higherOrderComponents/makeAsync.tsx");
			var h = Object(b.a)({
					ErrorComponent: () => null,
					LoadingComponent: () => null,
					getComponent: () => n.e("RichTextJsonEmoteTooltip").then(n.bind(null, "./src/reddit/components/RichTextJson/Emote/Tooltip/index.tsx")).then(e => e.default)
				}),
				f = n("./src/reddit/components/RichTextJson/Emote/index.m.less"),
				x = n.n(f);
			const O = 1e3,
				v = 1e3;
			var g;
			! function(e) {
				e[e.Inside = 0] = "Inside", e[e.Outside = 1] = "Outside"
			}(g || (g = {}));
			class E extends a.a.Component {
				constructor() {
					super(...arguments), this.mouseLocation = g.Outside, this.state = {
						tooltipOpen: !1
					}, this.onClick = () => this.sendEvent("click"), this.onMouseOver = () => {
						this.mouseLocation = g.Inside, setTimeout(() => {
							this.mouseLocation === g.Inside && (this.setState({
								tooltipOpen: !0
							}), this.sendEvent("view"))
						}, O)
					}, this.onMouseOut = () => {
						this.mouseLocation = g.Outside, setTimeout(() => {
							this.mouseLocation !== g.Inside && this.setState({
								tooltipOpen: !1
							})
						}, v)
					}, this.sendEvent = e => {
						this.props.sendEvent(t => {
							const n = p.o(t);
							return {
								source: "meta",
								action: e,
								noun: "emote",
								...n,
								actionInfo: {
									...n.actionInfo,
									reason: this.props.node.id
								},
								subreddit: p.kb(t)
							}
						})
					}
				}
				render() {
					const {
						node: e,
						media: t
					} = this.props;
					let n, s, o;
					t.e === m.s ? (n = t.s.x, s = t.s.y, o = t.s.u) : t.e === m.r && (n = t.s.x, s = t.s.y, o = t.s.gif);
					const r = this.state.tooltipOpen ? Object(d.a)() : void 0;
					return o ? a.a.createElement("div", {
						className: x.a.container,
						onClick: this.onClick,
						onMouseEnter: this.onMouseOver,
						onMouseLeave: this.onMouseOut
					}, a.a.createElement("img", {
						id: r,
						src: o,
						width: n,
						height: s,
						title: `:${Object(u.b)(e.id)}:`
					}), this.state.tooltipOpen && a.a.createElement(h, {
						isOpen: !0,
						emoteId: e.id,
						targetPosition: ["left", "bottom"],
						tooltipId: `${r}`,
						tooltipPosition: ["left", "top"]
					})) : null
				}
			}
			var _ = Object(l.c)(E),
				j = n("./src/reddit/components/RichTextJson/media.tsx"),
				C = n("./src/reddit/components/RichTextJson/SpoilerText.tsx"),
				y = n("./src/reddit/components/SubredditMention/index.tsx"),
				k = n("./src/reddit/helpers/crypto/vaultActionLink.ts"),
				S = n("./src/reddit/helpers/isComment.ts"),
				w = n("./src/reddit/helpers/isPost.ts"),
				T = n("./src/reddit/helpers/richTextJson/index.ts"),
				N = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts");
			const I = (e, t, n) => {
					const s = e.c || [],
						o = e.l,
						r = [],
						i = s.length;
					for (let a = 0; a < i; a++) {
						const e = s[a];
						r.push(e.e === m.x ? e.t : U(e, t, a))
					}
					const d = c.x[o - 1];
					return a.a.createElement(d, {
						key: n
					}, r)
				},
				R = e => a.a.createElement(c.e, {
					key: e
				}),
				P = (e, t, n, s, o) => {
					const r = e.c;
					if (!r) return;
					const i = r.length,
						d = [];
					for (let a = 0; a < i; a++) d.push(L(r[a], t, n, a, o));
					return a.a.createElement(c.c, {
						key: s
					}, d)
				},
				M = (e, t) => {
					const n = e.c;
					return a.a.createElement(c.k, {
						key: t
					}, a.a.createElement(c.h, null, n.reduce((e, t, n, s) => e += t.t + (n < s.length ? "\n" : ""), "")))
				},
				A = (e, t, n, s, o) => {
					const r = e.c,
						i = [],
						d = r.length;
					for (let u = 0; u < d; u++) {
						const e = r[u].c;
						e && e.length && i.push(a.a.createElement(c.g, {
							key: u
						}, e.map((e, s) => L(e, t, n, s, o))))
					}
					const l = e.o ? c.i : c.v;
					return a.a.createElement(l, {
						key: s
					}, i)
				},
				L = (e, t, n, s, o) => {
					switch (e.e) {
						case m.b:
							return P(e, t, n, s, o);
						case m.c:
							return M(e, s);
						case m.k:
							return I(e, n, s);
						case m.l:
							return R(s);
						case m.p:
							return A(e, t, n, s, o);
						case m.v:
							return F(e, t, n, s, o);
						case m.A:
							return D(e, t, n, s, o)
					}
				},
				D = (e, t, n, s, o) => {
					const r = e.c,
						i = e.h,
						d = r.length,
						l = i.length,
						u = [],
						m = [],
						p = [];
					for (let c = 0; c < l; c++) {
						const e = i[c],
							{
								H: s,
								D: r
							} = G(e.a),
							{
								c: d = []
							} = e;
						u.push(a.a.createElement(s, {
							key: c
						}, B(d, t, n, o))), p[c] = r
					}
					for (let b = 0; b < d; b++) {
						const e = r[b],
							s = e.length,
							i = [];
						for (let r = 0; r < s; r++) {
							const s = p[r],
								{
									c = []
								} = e[r];
							i.push(a.a.createElement(s, {
								key: r
							}, B(c, t, n, o)))
						}
						m.push(a.a.createElement(c.t, {
							key: b
						}, i))
					}
					return a.a.createElement(c.n, {
						key: s
					}, a.a.createElement("thead", null, a.a.createElement(c.t, null, u)), a.a.createElement("tbody", null, m))
				},
				F = (e, t, n, s, o, r) => {
					if (!e.c || !e.c.length) return (e => a.a.createElement(c.j, {
						key: e
					}, a.a.createElement("br", null)))(s);
					const i = e.c[0];
					return i.e !== m.m && i.e !== m.a || !Object(T.i)(i.id) ? a.a.createElement(c.j, {
						key: s
					}, B(e.c, t, n, o)) : Object(j.b)({
						node: i,
						key: s,
						rtJsonElementProps: n,
						mediaMetadata: t,
						mediaProps: r
					})
				},
				B = (e, t, n, s) => {
					const o = [],
						r = e.length;
					for (let i = 0; i < r; i++) {
						const r = e[i];
						if (r.e === m.B) o.push(H(r, i));
						else if (r.e === m.y) o.push(a.a.createElement(C.a, {
							key: i,
							onClickReveal: s
						}, B(r.c, t, n, s)));
						else if (r.e === m.n) o.push(a.a.createElement("br", {
							key: i
						}));
						else if (r.e === m.m || r.e === m.a) {
							if (r.id.startsWith("emote|")) {
								const e = m.F(t, r.id);
								e && o.push(a.a.createElement(_, {
									key: i,
									node: r,
									media: e
								}))
							}
						} else o.push(U(r, n, i))
					}
					return o
				},
				U = (e, t, n) => {
					switch (e.e) {
						case m.o:
							const s = H({
								t: e.t,
								f: e.f
							}, 0);
							if (Object(k.b)(e.u)) return a.a.createElement(c.w, {
								to: e.u,
								key: n,
								title: e.a
							}, s);
							let o, r;
							const i = Object(N.a)(t),
								d = t.renderingObjectInfo;
							return d && Object(w.b)(d) && (o = d.postId), d && Object(S.b)(d) && (r = d.id, o = d.postId), a.a.createElement(c.a, {
								href: e.u,
								key: n,
								title: e.a,
								sourceElement: i,
								postId: o,
								commentId: r
							}, s);
						case m.z:
							return a.a.createElement(y.b, {
								key: n,
								rtJsonElementProps: t,
								subredditName: e.t
							});
						case m.C:
						case m.D:
							return a.a.createElement(c.a, {
								href: `/u/${e.t}/`,
								key: n
							}, `${e.l?"/":""}u/${e.t}`);
						case m.g:
						case m.w:
							return a.a.createElement(c.a, {
								href: e.t,
								key: n
							}, e.t)
					}
				},
				H = (e, t) => {
					const {
						f: n,
						t: o
					} = e, r = [];
					if (!n) return W(0, o, t);
					const i = Object(s.a)(o);
					let a = 0,
						c = 0;
					const d = n.length;
					for (; a < d; a++) {
						const [e, t, s] = n[a], d = t + s, l = i[t], u = i[d] - l;
						l > c && r.push(W(0, o.substr(c, l - c), `between${a}`)), r.push(W(e, o.substr(l, u), a)), c = l + u
					}
					return c < o.length && r.push(W(0, o.substr(c), `remaining${a}`)), r
				},
				V = {
					[m.j.monospace]: c.h,
					[m.j.bold]: c.b,
					[m.j.italic]: c.f,
					[m.j.underline]: c.u,
					[m.j.strikethrough]: c.d,
					[m.j.subscript]: c.l,
					[m.j.superscript]: c.m
				},
				W = (e, t, n) => {
					let s = t;
					return s = r()(V, (t, s, o) => e & parseInt(o, 10) ? a.a.createElement(s, {
						key: n
					}, t) : t, s)
				},
				G = e => {
					switch (e) {
						case m.f:
							return {
								H: c.r, D: c.q
							};
						case m.d:
							return {
								H: c.r, D: c.o
							};
						case m.e:
						default:
							return {
								H: c.r, D: c.p
							}
					}
				}
		},
		"./src/reddit/components/SourceLink/index.m.less": function(e, t, n) {
			e.exports = {
				OutboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				outboundLinkIcon: "_2WV2dTLgPlEXLVEmIexAxf",
				SourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				sourceLinkWrapper: "_10wC0aXnrUKfdJ4Ssz-o14",
				"m-comment": "_1-PD0_zreH-KVwpFoCLvQF",
				mComment: "_1-PD0_zreH-KVwpFoCLvQF"
			}
		},
		"./src/reddit/components/SourceLink/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return S
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/ads/index.ts"),
				i = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/getShortenedLink.ts"),
				c = n("./node_modules/fbt/lib/FbtPublic.js");
			const d = 16765092,
				l = "https://i.redd.it/snoovatar",
				u = "snoovatars",
				m = "avatars";
			var p = n("./src/reddit/components/ProfileIdCard/SnoovatarButton/TryItOn.tsx"),
				b = n("./src/reddit/components/AvatarPost/index.m.less"),
				h = n.n(b);
			var f = e => {
					let {
						sourceUrl: t,
						username: n,
						post: s
					} = e;
					const [r, i] = new URL(t).pathname.split("/").slice(2), a = function(e) {
						return `${l}/${+e>=d?m:u}/shared/${e}.png`
					}(i);
					return o.a.createElement("div", {
						className: h.a.avatarPostContainer
					}, o.a.createElement("img", {
						className: h.a.avatarPostImage,
						src: a,
						alt: c.fbt._("User Shared Avatar", null, {
							hk: "FDRaA"
						})
					}), o.a.createElement(p.a, {
						isHovercard: !1,
						username: n,
						isAvatarPost: !0,
						post: s,
						share: {
							username: r,
							avatarId: i
						}
					}))
				},
				x = n("./src/reddit/controls/OutboundLink/styled.tsx"),
				O = n("./src/reddit/hooks/useIsAvatarPost.ts"),
				v = n("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = n("./src/reddit/components/SourceLink/index.m.less"),
				E = n.n(g),
				_ = n("./src/lib/lessComponent.tsx"),
				j = n("./src/telemetry/models/Outbound.ts"),
				C = n("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts");
			const y = _.a.wrapped(v.a, "OutboundLinkIcon", E.a),
				k = _.a.div("SourceLinkWrapper", E.a);

			function S(e) {
				const {
					className: t,
					post: n,
					isCommentsPage: s,
					pageLayer: c
				} = e, d = s ? j.SourceElement.PostLink : j.SourceElement.ListingPostLink, {
					source: l
				} = n, u = n.isSponsored || Object(r.u)(c), m = Object(O.a)(n), p = Object(C.a)();
				return !l || p ? null : m ? o.a.createElement(f, {
					sourceUrl: l.url,
					username: n.author,
					post: n
				}) : o.a.createElement(k, {
					className: Object(i.a)({
						[E.a["m-comment"]]: s
					}, t)
				}, o.a.createElement(x.a, {
					href: l.url,
					isSponsored: u,
					postId: n.id,
					source: l,
					sourceElement: d
				}, Object(a.a)({
					...n,
					isSponsored: u
				}), o.a.createElement(y, {
					isFilled: !0
				})))
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.m.less": function(e, t, n) {
			e.exports = {
				S: "Zwo7CZoszMU6kBYhWyIC7",
				s: "Zwo7CZoszMU6kBYhWyIC7",
				SubredditIcon: "_33bYVIxJlbFcqiiYlexnqp",
				subredditIcon: "_33bYVIxJlbFcqiiYlexnqp"
			}
		},
		"./src/reddit/components/SubredditMention/SubredditIcon/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/components/SubredditIcon/index.tsx"),
				a = n("./src/reddit/controls/OutboundLink/index.tsx"),
				c = n("./src/reddit/components/SubredditMention/SubredditIcon/index.m.less"),
				d = n.n(c);
			const l = r.a.wrapped(i.b, "SubredditIcon", d.a),
				u = r.a.wrapped(e => o.a.createElement(a.b, e), "S", d.a)
		},
		"./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less": function(e, t, n) {
			e.exports = {
				topPostsTitle: "_2Pw8j7a2DYkjTDOFbIdODA",
				hovercardStyle: "_2ktYI4-r7C-HaMk9ulbwog",
				top: "_3rKUrAbYNFvE7-nMDs6lwZ",
				subredditMentionContainer: "_1e2szH8g0XMMM_EuCN8Olk",
				subredditIconContainer: "_3kpwADnYG-SH40aaSdX3ZE"
			}
		},
		"./src/reddit/components/SubredditMention/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return _
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/components/RichTextJson/elements.tsx"),
				c = n("./src/higherOrderComponents/makeAsync.tsx"),
				d = n("./src/lib/loadWithRetries/index.ts"),
				l = n("./src/reddit/components/SubredditMention/SubredditIcon/index.tsx"),
				u = n("./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.m.less"),
				m = n.n(u);
			var p = Object(c.a)({
					ErrorComponent: () => null,
					getComponent: () => Object(d.a)(() => n.e("SubredditMentionWithIcon").then(n.bind(null, "./src/reddit/components/SubredditMention/SubredditIconsWeighting/index.tsx"))).then(e => e.default),
					LoadingComponent(e) {
						let {
							subredditName: t
						} = e;
						return o.a.createElement("span", {
							className: m.a.subredditMentionContainer
						}, o.a.createElement(l.a, {
							href: `/r/${t}/`
						}, o.a.createElement("span", {
							className: m.a.subredditIconContainer
						}, o.a.createElement(l.b, null)), `r/${t}`))
					}
				}),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/constants/experiments.ts"),
				f = n("./src/reddit/helpers/trackers/subredditMentions.ts"),
				x = n("./src/reddit/selectors/subredditMention.ts");
			class O extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleOnClick = () => {
						const {
							rtJsonElementProps: e,
							sendEvent: t,
							subredditName: n
						} = this.props;
						t(Object(f.a)({
							...e,
							subredditName: n
						}))
					}
				}
				render() {
					const {
						subredditName: e
					} = this.props;
					return o.a.createElement(a.a, {
						onClick: this.handleOnClick,
						href: `/r/${e}/`
					}, `r/${e}`)
				}
			}
			const v = Object(b.c)(O),
				g = Object(i.c)({
					isFeatureFlagEnabled: x.b,
					isUserInTreatment: x.e,
					userVariant: x.a
				}),
				E = Object(r.b)(g),
				_ = e => {
					let {
						isFeatureFlagEnabled: t,
						isUserInTreatment: n,
						subredditName: s,
						userVariant: r,
						rtJsonElementProps: i
					} = e;
					if (!n || !t) return o.a.createElement(v, {
						subredditName: s,
						rtJsonElementProps: i
					});
					switch (r) {
						case h.Uf.SmIcon:
							return o.a.createElement(p, {
								subredditName: s,
								rtJsonElementProps: i
							});
						case h.Uf.SmIconHc:
							return o.a.createElement(p, {
								subredditName: s,
								isHoverable: !0,
								rtJsonElementProps: i
							});
						default:
							return o.a.createElement(v, {
								subredditName: s,
								rtJsonElementProps: i
							})
					}
				};
			t.b = E(_)
		},
		"./src/reddit/components/SubredditNameLink/index.m.less": function(e, t, n) {
			e.exports = {
				SubredditName: "_3ryJoIoycVkA88fy40qNJc",
				subredditName: "_3ryJoIoycVkA88fy40qNJc"
			}
		},
		"./src/reddit/components/SubredditNameLink/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				o = n("./src/reddit/components/SubredditNameLink/index.m.less"),
				r = n.n(o);
			const i = n("./src/lib/lessComponent.tsx").a.wrapped(s.a, "SubredditName", r.a);
			t.a = i
		},
		"./src/reddit/components/SubscribeButton/Inline.m.less": function(e, t, n) {
			e.exports = {
				ButtonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				buttonSpacer: "vXXjS_s-Ic4QZpFsPjThV",
				Checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				checkmark: "_2qm48d8K8lTcwSJiHL9KLT",
				Plus: "_2zcGm9WDxG67GYyNNvHzlA",
				plus: "_2zcGm9WDxG67GYyNNvHzlA"
			}
		},
		"./src/reddit/components/SubscribeButton/Inline.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/components/TrackingHelper/index.tsx"),
				i = n("./src/reddit/connectors/SubscribeButton/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				c = n("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				d = n("./src/reddit/components/SubscribeButton/Inline.m.less"),
				l = n.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const m = n("./src/lib/lessComponent.tsx").a.div("ButtonSpacer", l.a);
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
							onSubscribe: n,
							onUnsubscribe: s,
							postId: r,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...h
						} = this.props, f = this.state.isHovered, x = Object(c.a)({
							type: t.type,
							key: f ? "unsubscribe" : "subscribed"
						});
						return o.a.createElement(a.t, u({
							className: e,
							priority: h.shouldReverseColor ? a.c.Primary : a.c.Secondary,
							text: x,
							onClick: this.onClick,
							onMouseEnter: this.onMouseEnter,
							onMouseLeave: this.onMouseLeave,
							size: a.d.XSP
						}, h))
					}, this.renderSubscribeButton = () => {
						const {
							className: e,
							identifier: t,
							onSubscribe: n,
							onUnsubscribe: s,
							postId: r,
							sendEvent: i,
							size: d,
							userIsSubscriber: l,
							doNotHideOtherSubscribeButtons: m,
							getEventFactory: p,
							onSubscriptionsRequested: b,
							...h
						} = this.props, f = Object(c.a)({
							type: t.type,
							key: "subscribe"
						});
						return o.a.createElement(a.t, u({
							className: e,
							priority: h.shouldReverseColor ? a.c.Secondary : a.c.Primary,
							size: a.d.XSP,
							text: f,
							onClick: this.onClick
						}, h, {
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
						doNotHideOtherSubscribeButtons: n
					} = this.props;
					return t ? this.state.hasJustSubscribed || n ? this.renderUnsubscribeButton() : e ? null : o.a.createElement(m, null) : this.renderSubscribeButton()
				}
			}
			t.a = Object(i.a)(Object(r.c)(p))
		},
		"./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js");
			const o = e => {
					let {
						type: t
					} = e;
					return "subreddit" === t ? "subredditActions" : "profileActions"
				},
				r = {
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
				i = e => {
					let {
						type: t,
						key: n
					} = e;
					return r[o({
						type: t
					})][n]()
				}
		},
		"./src/reddit/components/VerticalVotes/index.m.less": function(e, t, n) {
			e.exports = {
				votesContainer: "_1E9mcoVn4MYnuBQSVDt1gC",
				bounceUp: "nmB1I04Z-G4nY3g3s_17F",
				bounceDown: "_1L6r7KisMt3CYUGWSEMGiR",
				disabledScore: "_3WPd5t8B-7mtiGONFotWAM",
				disabledVoteIcon: "mvlZFfW9BWm1bmljE_0Rg"
			}
		},
		"./src/reddit/components/VerticalVotes/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return j
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/react/index.js"),
				r = n.n(o),
				i = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				c = n("./src/lib/classNames/index.ts"),
				d = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = n("./src/reddit/constants/elementClassNames.ts"),
				u = n("./src/reddit/controls/Score/index.tsx"),
				m = n("./src/reddit/components/VerticalVotes/votes.tsx"),
				p = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				b = n("./src/reddit/models/Vote/index.ts"),
				h = n("./src/reddit/selectors/posts.ts"),
				f = n("./src/reddit/selectors/user.ts"),
				x = n("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				O = n("./src/reddit/components/VerticalVotes/index.m.less"),
				v = n.n(O);
			const g = Object(a.c)({
					isNightMode: f.eb,
					isAnimatingUpvotePostId: h.k
				}),
				E = Object(i.b)(g),
				_ = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.upvoteInactive && Object(p.a)(e).voteIcons.upvoteActive,
				j = e => !e.isCustomIconDisabled && !0 !== e.redditStyle && Object(p.a)(e).voteIcons.downvoteInactive && Object(p.a)(e).voteIcons.downvoteActive;
			class C extends r.a.Component {
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
							isCountAnimShadowTestEnabled: n,
							isNightMode: o,
							isAnimatingUpvotePostId: i,
							shouldShowUpvoteRatioOnHover: a,
							isVoteCountAnimation: d,
							shouldShowScore: p = !0,
							upvoteButtonClassName: h,
							containerRef: f,
							model: O,
							postId: g
						} = e,
						E = _(e),
						C = j(e),
						y = O.voteState,
						k = i === g;
					return r.a.createElement("div", {
						className: Object(c.a)(v.a.votesContainer, e.className),
						id: `vote-arrows-${O.id}`,
						ref: f
					}, E ? r.a.createElement(m.b, {
						"aria-label": s.fbt._("upvote", null, {
							hk: "G6dJB"
						}),
						"aria-pressed": y === b.a.upvoted,
						"data-click-id": "upvote",
						"data-adclicklocation": x.b.UPVOTE,
						compact: e.compact,
						className: e.upvoteClassName,
						id: e.upvoteTooltipId,
						isNightMode: o,
						onClick: this.onUpvote,
						voteState: y
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("upvote", null, {
							hk: "RguWS"
						}),
						"aria-pressed": y === b.a.upvoted,
						className: Object(c.a)(l.n, h, {
							[v.a.bounceUp]: k
						}),
						onClick: this.onUpvote,
						"data-click-id": "upvote",
						"data-adclicklocation": x.b.UPVOTE,
						id: e.upvoteTooltipId
					}, r.a.createElement(m.d, {
						compact: e.compact,
						className: e.upvoteClassName,
						voteState: y
					})), !e.compact && p && r.a.createElement(u.a, {
						className: Object(c.a)(v.a.Score, e.scoreClassName),
						flairStyleTemplate: e.flairStyleTemplate,
						light: e.light,
						score: e.model.score,
						voteState: y,
						shouldShowUpvoteRatioOnHover: a,
						isScoreHidden: e.model.isScoreHidden,
						isVoteCountAnimation: !!d,
						isCountAnimShadowTestEnabled: !!n,
						postId: g
					}), C ? r.a.createElement(m.a, {
						"aria-label": s.fbt._("downvote", null, {
							hk: "tNfDV"
						}),
						"aria-pressed": y === b.a.downvoted,
						"data-click-id": "downvote",
						"data-adclicklocation": x.b.DOWNVOTE,
						className: e.downvoteClassName,
						compact: e.compact,
						isNightMode: o,
						onClick: this.onDownvote,
						voteState: y
					}) : r.a.createElement("button", {
						"aria-label": s.fbt._("downvote", null, {
							hk: "1mDjTw"
						}),
						"aria-pressed": y === b.a.downvoted,
						className: Object(c.a)(l.n, t),
						onClick: this.onDownvote,
						"data-click-id": "downvote",
						"data-adclicklocation": x.b.DOWNVOTE
					}, r.a.createElement(m.c, {
						className: e.downvoteClassName,
						compact: e.compact,
						voteState: y
					})))
				}
			}
			const y = Object(d.a)(E(C));
			t.a = y
		},
		"./src/reddit/connectors/SubscribeButton/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/actions/subscription/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			t.a = Object(s.b)(() => Object(o.c)({
				userIsSubscriber: i.kb
			}), (e, t) => {
				let {
					identifier: n
				} = t;
				return {
					onSubscribe: () => e(r.d([n], !0)),
					onSubscriptionsRequested: () => e(r.e()),
					onUnsubscribe: () => e(r.d([n], !1))
				}
			})
		},
		"./src/reddit/constants/jsapiEvents.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = "reddit",
				o = "reddit.ready",
				r = "reddit.urlChanged"
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
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/index.tsx"),
				a = n("./src/reddit/controls/Checkbox/index.m.less"),
				c = n.n(a);
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
		"./src/reddit/controls/SearchBar/index.m.less": function(e, t, n) {
			e.exports = {
				searchContainer: "_13yLxNALfY3_F48PYybgUr",
				search: "RxQA71ktKLBiPThTT7ita",
				mRightAlignedIcon: "_1NR83qzzPFX9KcVm-fxGFg",
				searchIconContainer: "_1IUrembT3LfQzzy388S8eF",
				mClickable: "_1K9n38-jQENV0_njgPIo_x",
				mRightAligned: "_1fLhMe5y6XbNg-lgHQrh5e"
			}
		},
		"./src/reddit/controls/SearchBar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Search/index.tsx"),
				a = n("./src/reddit/controls/SearchBar/index.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("label", {
				className: Object(r.a)(c.a.searchContainer, e.className)
			}, o.a.createElement("input", {
				"data-testid": "SEARCH_BAR_TEST_ID",
				className: Object(r.a)(c.a.search, {
					[c.a.mRightAlignedIcon]: e.rightAlignedIcon
				}),
				autoFocus: e.autoFocus,
				type: "text",
				onChange: e.onTextChange,
				onKeyPress: e.onKeyPress,
				placeholder: e.placeholder,
				ref: e.innerRef,
				value: e.value
			}), o.a.createElement("div", {
				className: Object(r.a)(c.a.searchIconContainer, {
					[c.a.mClickable]: !!e.onSearch,
					[c.a.mRightAligned]: e.rightAlignedIcon
				}),
				role: e.onSearch && "submit",
				onClick: e.onSearch
			}, o.a.createElement(i.a, null)))
		},
		"./src/reddit/controls/ToggleSwitch/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/ToggleSwitch/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/Button/index.tsx"),
				a = n("./src/reddit/controls/ToggleSwitch/index.m.less"),
				c = n.n(a);
			t.a = Object(s.memo)(Object(s.forwardRef)((e, t) => {
				const n = e.size || i.d.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, {
						[c.a.xs]: n === i.d.XS,
						[c.a.s]: n === i.d.S,
						[c.a.m]: n === i.d.M,
						[c.a.l]: n === i.d.L,
						[c.a.xl]: n === i.d.XL,
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
		"./src/reddit/endpoints/giphy/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/config.ts"),
				o = n("./src/lib/addQueryParams/index.ts");
			const r = "pg";
			async function i(e) {
				return d(Object(o.a)("https://api.giphy.com/v1/gifs/search", {
					api_key: s.a.giphyApiKey,
					q: e.query,
					offset: e.offset || 0,
					rating: e.rating || r
				}))
			}
			async function a() {
				return d(Object(o.a)("https://api.giphy.com/v1/gifs/trending", {
					api_key: s.a.giphyApiKey,
					rating: r
				}))
			}
			async function c(e) {
				return d(Object(o.a)(`https://api.giphy.com/v1/gifs/${e}`, {
					api_key: s.a.giphyApiKey
				}))
			}
			async function d(e) {
				const t = await fetch(e),
					n = await t.json();
				if (200 !== n.meta.status) throw new Error(`${n.meta.status} ${n.meta.msg}`);
				return n
			}
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/featureFlags/index.ts");

			function c(e, t, n) {
				const s = Object(i.c)({
					featureEnabled: t => a.d[e](t)
				});
				return Object(r.b)(s)(e => {
					const {
						featureEnabled: s,
						...r
					} = e, i = r;
					return s ? o.a.createElement(t, i) : void 0 !== n ? o.a.createElement(n, i) : null
				})
			}
		},
		"./src/reddit/helpers/canRenderThumbnail.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/thumbnails.ts"),
				o = n("./src/reddit/models/Media/index.ts");

			function r(e, t) {
				return !(e.removedByCategory || !e.thumbnail || !e.thumbnail.url || e.thumbnail.url === s.a.SELF || e.thumbnail.url === s.a.NSFW || e.media && Object(o.E)(e.media) || t)
			}
		},
		"./src/reddit/helpers/crypto/vaultActionLink.ts": function(e, t, n) {
			"use strict";

			function s(e) {
				return e.match(/^https:\/\/www\.reddit\.com\/vault\/burn/)
			}

			function o(e) {
				const {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} = e;
				return t && n && s && o ? {
					subreddit: t,
					amount: n,
					memo: s,
					cta: o
				} : (console.error("subreddit, amount, and memo query params required for vault action"), null)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			})), n.d(t, "e", (function() {
				return p
			})), n.d(t, "a", (function() {
				return b
			}));
			var s = n("./node_modules/lodash/map.js"),
				o = n.n(s),
				r = n("./src/lib/FocusTrap/index.ts");
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
					const n = document.createRange();
					return n.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, n) < 0 && e.compareBoundaryPoints(Range.START_TO_END, n) > 0
				},
				u = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const n = t.getRangeAt(0);
					if (!l(n, e)) return;
					const {
						startContainer: s,
						startOffset: o,
						endContainer: r,
						endOffset: i
					} = n, a = document.createRange();
					a.selectNode(e);
					let c = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, n) && (a.setStart(s, o), c = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, n) && (a.setEnd(r, i), c = !1), c) return [e];
					const d = document.createElement("div");
					return d.appendChild(a.cloneContents()), [...d.childNodes]
				},
				m = (e, t, n) => {
					let s = e;
					for (; s && (!n || !n(s));) {
						if (s && t(s)) return s;
						s = s.parentElement
					}
				},
				p = e => e && e.parentElement && m(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				b = e => {
					e.querySelectorAll(r.a).forEach(e => {
						e.tabIndex = -1
					})
				}
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

			function o(e) {
				return [...e].sort(s)
			}
			n.d(t, "b", (function() {
				return s
			})), n.d(t, "a", (function() {
				return o
			}))
		},
		"./src/reddit/helpers/genericServerError/index.ts": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/constants/index.ts");
			t.a = () => ({
				type: o.L.SERVER_ERROR,
				fields: [{
					field: "",
					msg: s.fbt._("Something went wrong.", null, {
						hk: "RcX5A"
					})
				}]
			})
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const o = e => {
				let {
					edges: t
				} = e;
				const n = [];
				for (const {
						node: o
					} of t) n.push(Object(s.f)(o));
				return n
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
		"./src/reddit/helpers/isRemoved.ts": function(e, t, n) {
			"use strict";
			t.a = e => !!e.bannedBy && !e.isSpam
		},
		"./src/reddit/helpers/modTooltipTemplates/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			})), n.d(t, "d", (function() {
				return c
			}));
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./src/lib/humanizeUTCDate/index.tsx");
			const r = e => e.approvedBy && "string" == typeof e.approvedBy && e.approvedAtUTC ? s.fbt._("Approved by {username} at {time}", [s.fbt._param("username", e.approvedBy), s.fbt._param("time", Object(o.a)(e.approvedAtUTC))], {
					hk: "3G807D"
				}) : s.fbt._("Approved", null, {
					hk: "3CbKag"
				}),
				i = e => {
					let t = e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
						hk: "2Ey569"
					}) : s.fbt._("Removed", null, {
						hk: "238xK9"
					});
					return e.modReasonBy && e.modRemovalReason && (t = t + "\n" + s.fbt._("Reason by {username}:", [s.fbt._param("username", `u/${e.bannedBy}`)], {
						hk: "3qLdNZ"
					}) + e.modRemovalReason), e.modNote && (t = t + "\n" + s.fbt._("Note:", null, {
						hk: "2LD4vO"
					}) + e.modNote), t
				},
				a = e => s.fbt._({
					"*": "{number} Reports",
					_1: "1 Report"
				}, [s.fbt._plural(e, "number")], {
					hk: "3S0yx6"
				}),
				c = e => e.bannedBy && "string" == typeof e.bannedBy && e.bannedAtUTC ? s.fbt._("Removed as spam by {username} at {time}", [s.fbt._param("username", e.bannedBy), s.fbt._param("time", Object(o.a)(e.bannedAtUTC))], {
					hk: "2uutjk"
				}) : s.fbt._("Removed as spam", null, {
					hk: "1hD9G0"
				})
		},
		"./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			}));
			var s = n("./src/lib/constants/index.ts");
			const o = e => {
					for (const t of e) {
						const e = t[0] || "";
						switch (e) {
							case s.L.NO_STRIPE_SUBSCRIPTION:
							case s.L.USER_DOESNT_EXIST:
							case s.L.USER_REQUIRED_ERROR:
							case s.L.VALIDATION_ERROR:
								return e;
							case s.L.NO_USER:
							case s.L.NO_TEXT:
							case s.L.NO_URL:
								return s.L.VALIDATION_ERROR;
							case s.L.CREDIT_CARD_FAILURE:
							case s.L.CREDIT_CARD_FAILURE_GENERIC:
								return s.L.CREDIT_CARD_FAILURE;
							default:
								if (e.startsWith("SUBMIT_VALIDATION")) return s.L.SUBMIT_VALIDATION_ERROR
						}
					}
					return s.L.VALIDATION_ERROR
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
		"./src/reddit/helpers/sessionStorage/index.ts": function(e, t, n) {
			"use strict";
			var s;
			n.d(t, "d", (function() {
					return r
				})), n.d(t, "b", (function() {
					return i
				})), n.d(t, "a", (function() {
					return a
				})), n.d(t, "c", (function() {
					return c
				})),
				function(e) {
					e.COMMENT_BEFORE_SIGNUP_STORAGE = "comment_before_signup_storage"
				}(s || (s = {}));
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
					})(s.COMMENT_BEFORE_SIGNUP_STORAGE, e)
				},
				i = () => o(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				a = () => (e => {
					window.sessionStorage && window.sessionStorage.removeItem(e)
				})(s.COMMENT_BEFORE_SIGNUP_STORAGE),
				c = () => {
					return !!o(s.COMMENT_BEFORE_SIGNUP_STORAGE)
				}
		},
		"./src/reddit/helpers/showReportIndicator/index.ts": function(e, t, n) {
			"use strict";
			t.a = e => !e.ignoreReports && (e.numReports || 0) > 0
		},
		"./src/reddit/helpers/styles/mixins/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "e", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "a", (function() {
				return f
			})), n.d(t, "d", (function() {
				return x
			}));
			var s = n("./node_modules/polished/dist/polished.es.js"),
				o = n("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = n("./src/reddit/helpers/styles/smartTextColor.ts"),
				i = n("./src/reddit/models/NewStructuredStyles/index.ts"),
				a = n("./src/reddit/models/Theme/index.ts"),
				c = n("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				d = n("./src/reddit/helpers/styles/mixins/index.m.less"),
				l = n.n(d);
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
				b = e => Object(s.k)(.2, e),
				h = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				f = e => e.isActive ? l.a.mIsActive : void 0,
				x = e => {
					const t = Object(r.a)(Object(o.a)(e), i.a.actionIcon, i.b.actionIcon);
					return {
						color: t,
						cursor: "pointer",
						fill: t
					}
				}
		},
		"./src/reddit/helpers/trackers/commentsPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return p
			})), n.d(t, "f", (function() {
				return b
			})), n.d(t, "b", (function() {
				return h
			})), n.d(t, "e", (function() {
				return f
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "c", (function() {
				return O
			})), n.d(t, "d", (function() {
				return v
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "k", (function() {
				return E
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "i", (function() {
				return j
			})), n.d(t, "l", (function() {
				return C
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/constants/tracking.ts"),
				r = n("./src/reddit/helpers/correlationIdTracker.ts"),
				i = n("./src/reddit/models/PostDraft/index.ts"),
				a = n("./src/reddit/selectors/comments.ts"),
				c = n("./src/reddit/selectors/platform.ts"),
				d = n("./src/reddit/selectors/telemetry.ts"),
				l = n("./src/telemetry/index.ts"),
				u = n("./src/reddit/constants/richTextJson.ts");
			const m = e => {
					const t = Object(c.p)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(d.o)(e),
						screen: Object(d.cb)(e),
						subreddit: Object(d.kb)(e),
						post: t ? Object(d.K)(e, t) : null,
						profile: Object(d.T)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				p = async (e, t, s, o, r) => {
					const i = {
							commentId: r,
							commentsPageKey: s
						},
						c = r && Object(a.j)(e, i) || 0,
						{
							getFlairData: u
						} = await n.e("getFlairData").then(n.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts")),
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
						bodyText: n,
						postId: o,
						error: r,
						parentId: i,
						uploadMetadata: a
					} = e;
					const c = m(t),
						d = r.type === s.Pb ? "karma_rate_limit" : r.fields && r.fields.length > 0 ? r.fields[0].msg : void 0,
						p = a ? "image" : function(e) {
							return e.includes(`"id":"${u.c}`)
						}("string" == typeof n ? n : JSON.stringify(n)) ? "giphy" : void 0;
					return Object(l.a)({
						...c,
						source: r.type === s.Pb ? "backend" : "comment_composer",
						actionInfo: {
							...c.actionInfo,
							reason: d
						},
						action: "error",
						noun: "comment",
						comment: {
							bodyText: n,
							parentId: i,
							postId: o,
							contentType: p
						},
						media: {
							mimetype: null == a ? void 0 : a.mimetype,
							size: null == a ? void 0 : a.size
						}
					})
				}, h = e => Object(l.a)({
					noun: "cancel",
					...m(e)
				}), f = (e, t) => {
					t === i.c.replyToPost && Object(l.a)({
						noun: "input",
						...m(e)
					})
				}, x = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.o)(t),
					screen: Object(d.cb)(t),
					subreddit: Object(d.kb)(t),
					post: Object(d.K)(t, e)
				}), O = e => Object(l.a)({
					noun: "edit",
					...m(e)
				}), v = e => Object(l.a)({
					noun: "save_edit",
					...m(e)
				}), g = (e, t) => n => {
					const s = "image_upload" === e || "video_upload" === e;
					return {
						...m(n),
						noun: s ? e : "text_option",
						commentComposer: {
							textType: e,
							finalStatus: t ? "on" : "off"
						}
					}
				}, E = () => e => ({
					...m(e),
					action: "open",
					noun: "gif_tooltip"
				}), _ = e => t => ({
					...m(t),
					action: "change",
					noun: "gif_tooltip_search",
					search: {
						query: e
					}
				}), j = () => e => ({
					...m(e),
					action: "select",
					noun: "gif_tooltip_result"
				}), C = () => e => ({
					...m(e),
					source: "comment_composer",
					action: "open",
					noun: "images_tooltip"
				})
		},
		"./src/reddit/helpers/trackers/gallery.ts": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return c
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "b", (function() {
				return l
			})), n.d(t, "a", (function() {
				return u
			}));
			var s = n("./src/reddit/constants/tracking.ts"),
				o = n("./src/reddit/helpers/parseUrl.ts"),
				r = n("./src/reddit/selectors/media.ts"),
				i = n("./src/reddit/selectors/telemetry.ts");
			const a = (e, t, n) => ({
					gallery: i.s(e, t, n),
					post: i.K(e, t),
					...i.o(e)
				}),
				c = (e, t) => n => ({
					...a(n, e, t),
					action: s.c.VIEW,
					noun: "media",
					source: "gallery",
					media: i.C(n, e)
				}),
				d = (e, t) => n => {
					const c = Object(o.a)(t),
						d = Object(r.d)(n, e) + 1;
					return {
						...a(n, e, d),
						action: s.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...i.C(n, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						}
					}
				},
				l = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, n) => o => ({
					...a(o, e, n),
					action: s.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
				})
		},
		"./src/reddit/helpers/trackers/getRichTextSourceElement.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/contexts/PageLayer/index.tsx"),
				o = n("./src/reddit/helpers/isComment.ts"),
				r = n("./src/reddit/helpers/isPost.ts"),
				i = n("./src/telemetry/models/Outbound.ts");
			const a = e => {
				let {
					renderingObjectInfo: t,
					pageLayer: n
				} = e;
				if (t && (Object(o.b)(t) || Object(r.b)(t))) return Object(o.b)(t) ? i.SourceElement.Comment : Object(s.y)(n) ? i.SourceElement.PostDetail : Object(s.J)(n) ? i.SourceElement.ListingPostDetail : void 0
			}
		},
		"./src/reddit/helpers/trackers/scheduledPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "i", (function() {
				return a
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
				return h
			})), n.d(t, "k", (function() {
				return f
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "d", (function() {
				return O
			})), n.d(t, "n", (function() {
				return v
			})), n.d(t, "h", (function() {
				return g
			})), n.d(t, "g", (function() {
				return _
			})), n.d(t, "l", (function() {
				return j
			})), n.d(t, "t", (function() {
				return C
			})), n.d(t, "j", (function() {
				return y
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "x", (function() {
				return S
			})), n.d(t, "u", (function() {
				return w
			})), n.d(t, "a", (function() {
				return T
			})), n.d(t, "s", (function() {
				return N
			})), n.d(t, "v", (function() {
				return I
			})), n.d(t, "w", (function() {
				return R
			}));
			var s = n("./src/reddit/models/ScheduledPost/index.ts"),
				o = n("./src/reddit/selectors/telemetry.ts");
			const r = e => ({
					...o.o(e),
					screen: o.cb(e),
					subreddit: o.kb(e),
					userSubreddit: o.ub(e)
				}),
				i = e => ({
					id: e.id,
					publishAt: e.publishAt,
					clientTimezone: e.clientTimezone,
					isRecurring: Object(s.q)(e)
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
				h = e => t => ({
					source: "post_composer",
					action: "click",
					noun: "schedule_post_update_submit",
					...r(t),
					scheduledPost: i(e)
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
				O = () => e => ({
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
				g = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: o.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				E = {
					[s.d.Hourly]: "hourly_frequency",
					[s.d.Daily]: "daily_frequency",
					[s.d.Weekly]: "weekly_frequency",
					[s.d.Monthly]: "monthly_frequency",
					[s.b]: "custom_frequency"
				},
				_ = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : E[e],
					...r(t)
				}),
				j = () => e => ({
					source: "post",
					action: "click",
					noun: "start_event_now",
					...r(e)
				}),
				C = (e, t, n) => i => ({
					source: "post",
					action: "click",
					noun: Object(s.m)(e),
					...r(i),
					actionInfo: o.d(i, {
						settingValue: t ? "true" : "false",
						pageType: n ? "recurring_posts" : "scheduled_posts"
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
				w = () => (e, t) => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "update",
					...r(e),
					scheduledPost: i(t)
				}),
				T = () => e => ({
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
					scheduledPost: i(t)
				}),
				I = () => e => ({
					source: "scheduled_post_composer",
					action: "view",
					noun: "custom_schedule_post_composer",
					...r(e)
				}),
				R = () => (e, t) => {
					const n = r(e);
					return {
						source: "post",
						action: "view",
						noun: "error",
						...n,
						actionInfo: {
							...n.actionInfo,
							reason: "failed_post"
						},
						scheduledPost: i(t)
					}
				}
		},
		"./src/reddit/helpers/trackers/snoovatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "g", (function() {
				return c
			})), n.d(t, "h", (function() {
				return d
			})), n.d(t, "i", (function() {
				return l
			})), n.d(t, "r", (function() {
				return u
			})), n.d(t, "l", (function() {
				return m
			})), n.d(t, "n", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "f", (function() {
				return h
			})), n.d(t, "q", (function() {
				return x
			})), n.d(t, "e", (function() {
				return O
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "m", (function() {
				return E
			})), n.d(t, "j", (function() {
				return _
			})), n.d(t, "b", (function() {
				return j
			})), n.d(t, "p", (function() {
				return y
			})), n.d(t, "d", (function() {
				return k
			})), n.d(t, "a", (function() {
				return w
			})), n.d(t, "o", (function() {
				return T
			}));
			var s = n("./src/reddit/models/Gold/ProductOffer.ts"),
				o = n("./src/reddit/selectors/avatarMarketing.ts"),
				r = n("./src/reddit/selectors/telemetry.ts"),
				i = n("./src/reddit/selectors/user.ts");
			const a = {
					goldPurchase: {
						offerContext: s.a.AvatarNewGear
					}
				},
				c = e => t => {
					const n = {
						source: e,
						action: "click",
						noun: "edit_snoovatar",
						...r.o(t)
					};
					return Object(o.a)(t) && Object.assign(n, a), n
				},
				d = (e, t) => n => {
					const {
						id: s
					} = Object(i.Bb)(n, {
						userName: t
					});
					return {
						source: e,
						action: "click",
						noun: "copy_avatar",
						...r.o(n),
						snoovatar: {
							userGenerated: s
						}
					}
				},
				l = e => ({
					...r.o(e),
					source: "avatar",
					action: "click",
					noun: "try_this_look_post",
					snoovatar: r.ib(e)
				}),
				u = e => ({
					...r.o(e),
					source: "global",
					action: "view",
					noun: "screen",
					actionInfo: {
						pageType: "snoovatar_builder"
					},
					snoovatar: r.ib(e)
				}),
				m = e => ({
					...r.o(e),
					source: "avatar_builder",
					action: "click",
					noun: "close",
					snoovatar: r.ib(e)
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
				h = e => t => ({
					...r.o(t),
					source: "snoovatar",
					action: "set_to_profile",
					noun: "snoovatar",
					snoovatar: {
						userGeneratedSource: e
					}
				}),
				f = e => t => n => ({
					source: "avatar",
					action: e,
					noun: "community_spaces",
					...r.o(n),
					snoovatar: r.ib(n),
					actionInfo: {
						paneName: "avatar_community_spaces" + (t ? "_control" : "")
					}
				}),
				x = f("view"),
				O = f("click"),
				v = f("dismiss"),
				g = (e, t, n) => () => s => ({
					source: e,
					action: t,
					noun: n,
					...r.o(s),
					snoovatar: r.ib(s)
				}),
				E = g("anniversary_achievement", "view", "anniversary_achievement"),
				_ = g("anniversary_achievement", "click", "close"),
				j = g("anniversary_achievement", "click", "equip"),
				C = e => () => t => ({
					...r.o(t),
					source: "gold_top_nav",
					action: e,
					noun: "quick_create_cta"
				}),
				y = C("view"),
				k = C("click"),
				S = (e, t, n) => s => ({
					source: e,
					action: t,
					noun: n,
					...r.o(s),
					actionInfo: {
						pageType: "onboarding"
					},
					snoovatar: r.ib(s)
				}),
				w = e => S("onboarding", "click", e),
				T = () => S("avatar", "view", "onboarding")
		},
		"./src/reddit/helpers/trackers/subredditMentions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return f
			})), n.d(t, "f", (function() {
				return x
			})), n.d(t, "g", (function() {
				return O
			})), n.d(t, "b", (function() {
				return v
			})), n.d(t, "c", (function() {
				return g
			})), n.d(t, "d", (function() {
				return E
			})), n.d(t, "e", (function() {
				return _
			}));
			var s, o, r = n("./src/reddit/constants/tracking.ts"),
				i = n("./src/reddit/helpers/isComment.ts"),
				a = n("./src/reddit/helpers/isPost.ts"),
				c = n("./src/reddit/helpers/trackers/getRichTextSourceElement.ts"),
				d = n("./src/reddit/models/DiscoveryUnit/index.ts"),
				l = n("./src/reddit/selectors/subreddit.ts"),
				u = n("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.INTERNAL_LINK = "internal_link", e.SUBREDDIT_HOVERCARD = "subreddit_mentions_hovercard", e.HEADER_SUBREDDIT = "header_subreddit", e.HEADER_SUBREDDIT_SUBSCRIBE = "header_subreddit_subscribe", e.HEADER_SUBREDDIT_UNSUBSCRIBE = "header_subreddit_unsubscribe", e.ITEM_POST = "item_post"
			}(s || (s = {})),
			function(e) {
				e.LINK = "link", e.DISCOVERY_UNIT = "discovery_unit"
			}(o || (o = {}));
			const m = e => ({
					...u.o(e),
					source: o.LINK,
					action: r.c.CLICK,
					noun: s.INTERNAL_LINK
				}),
				p = e => ({
					...u.o(e),
					source: o,
					screen: u.cb(e),
					discoveryUnit: {
						id: "xd_100",
						name: s.SUBREDDIT_HOVERCARD,
						type: d.e.Listing,
						title: s.SUBREDDIT_HOVERCARD
					}
				}),
				b = (e, t) => {
					const {
						renderingObjectInfo: n,
						subredditName: s
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {
						outbound: void 0
					};
					const o = Object(a.b)(n) ? "postId" : "commentId",
						r = {
							url: `/r/${s}/`,
							sourceElement: Object(c.a)(t),
							subredditName: s,
							[o]: n.id
						},
						d = Object(l.C)(e, {
							subredditName: s
						});
					return d ? {
						outbound: {
							...r,
							url: d.url,
							subredditId: d.id
						}
					} : {
						outbound: {
							...r
						}
					}
				},
				h = (e, t) => {
					const {
						renderingObjectInfo: n
					} = t;
					if (!n || !Object(a.b)(n) && !Object(i.b)(n)) return {};
					const s = Object(a.b)(n) ? n.belongsTo.id : n.subredditId;
					return {
						post: u.K(e, n.id),
						subreddit: u.lb(e, s),
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
					action: r.c.VIEW,
					noun: s.SUBREDDIT_HOVERCARD,
					subreddit: u.mb(t, e),
					screen: u.cb(t)
				}),
				O = (e, t) => n => ({
					...p(n),
					source: o.DISCOVERY_UNIT,
					action: r.c.VIEW,
					noun: s.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.mb(n, e),
					screen: u.cb(n)
				}),
				v = (e, t) => n => ({
					...p(n),
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.ITEM_POST,
					post: u.K(n, t),
					subreddit: u.mb(n, e),
					screen: u.cb(n)
				}),
				g = e => t => ({
					...p(t),
					subreddit: u.lb(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT
				}),
				E = e => t => ({
					...p(t),
					subreddit: u.lb(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT_SUBSCRIBE
				}),
				_ = e => t => ({
					...p(t),
					subreddit: u.lb(t, e) || null,
					source: o.DISCOVERY_UNIT,
					action: r.c.CLICK,
					noun: s.HEADER_SUBREDDIT_UNSUBSCRIBE
				})
		},
		"./src/reddit/hooks/useIsAvatarPost.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react-redux/es/index.js");
			const o = ["t2_83axfjo9", "t2_5ybo8iyi", "t2_7yef0w0w", "t2_fvlxukt", "t2_16060o", "t2_364me452", "t2_46dwatoq", "t2_86xzqcqi", "t2_97lsdz5t", "t2_8394tzuq ", "t2_b46ms2wj", "t2_btxoz0zb"],
				r = ["t5_q0gj4", "t5_2rjli"],
				i = new RegExp(/https:\/\/(www\.)?reddit.com\/avatar\/.*\/\d+$/);
			var a = n("./src/reddit/selectors/experiments/econ/index.ts");
			const c = e => Object(s.e)(t => {
				return !!(e => {
					let {
						adminId: t,
						subredditId: n,
						avatarShareUrl: s
					} = e;
					const a = i.test(s.trim()),
						c = o.includes(t),
						d = r.includes(n);
					return a && c && d
				})({
					adminId: e.authorId,
					subredditId: e.belongsTo.id,
					avatarShareUrl: e.source ? e.source.url : ""
				}) && Object(a.a)(t)
			})
		},
		"./src/reddit/hooks/useIsClient.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			}));
			var s = n("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => {
					setTimeout(t, 1, !0)
				}, []), e
			}
		},
		"./src/reddit/hooks/useIsRemovedOrDeletedPost.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/reddit/selectors/removedPosts.ts");
			const r = () => Object(s.e)(e => Object(o.d)(e))
		},
		"./src/reddit/hooks/useMounted.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js");

			function o() {
				const [e, t] = Object(s.useState)(!1);
				return Object(s.useEffect)(() => t(!0), []), e
			}

			function r() {
				const e = Object(s.useRef)(!0);
				return Object(s.useEffect)(() => () => {
					e.current = !1
				}, []), e
			}
		},
		"./src/reddit/hooks/useTheme.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./node_modules/react/index.js"),
				o = n("./src/lib/CSSVariableProvider/index.tsx");

			function r() {
				return Object(s.useContext)(o.b)
			}
		},
		"./src/reddit/icons/fonts/Archived/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("archived", e.isFilled), c.a.archivedIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Calendar/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("scheduled", e.isFilled), c.a.calendarIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Clear/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("clear", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("history", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Coin/index.m.less": function(e, t, n) {
			e.exports = {
				CoinIcon: "_12xlue8dQ1odPw1J81FIGQ",
				coinIcon: "_12xlue8dQ1odPw1J81FIGQ"
			}
		},
		"./src/reddit/icons/fonts/Coin/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/constants/colors.ts"),
				a = n("./src/reddit/icons/fonts/helpers.tsx"),
				c = n("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = n.n(c);
			const l = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(a.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || i.a.gold
				}
			}), "CoinIcon", d.a);
			t.a = l
		},
		"./src/reddit/icons/fonts/DistinguishShield/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("distinguish", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Envelope/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("message",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Expand/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("expand", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less": function(e, t, n) {
			e.exports = {
				CollapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI",
				collapseIcon: "_3D7Ev4BX__nKnbqb-KPpvI"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less": function(e, t, n) {
			e.exports = {
				ExpandIcon: "QOwFub52NskNmv0MdMa2_",
				expandIcon: "QOwFub52NskNmv0MdMa2_"
			}
		},
		"./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/IgnoreReport/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("ignore_reports",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Live/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("live", e.isFilled), c.a.liveIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/Lock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("lock", e.isFilled), c.a.lockIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("menu",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/ModSettings/index.m.less": function(e, t, n) {
			e.exports = {
				ModSettings: "_3-SW6hQX6gXK9G4FM74obr",
				modSettings: "_3-SW6hQX6gXK9G4FM74obr"
			}
		},
		"./src/reddit/icons/fonts/ModSettings/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/ModSettings/index.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(c.a.ModSettings, Object(i.b)("mod", e.isFilled), e.className)
			})
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, n) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/fonts/Pencil/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => o.a.createElement("i", {
				className: `${Object(r.b)("edit",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Photos/index.m.less": function(e, t, n) {
			e.exports = {
				PhotoIcon: "_1LWQVKh7NQLbKMIz2io1Di",
				photoIcon: "_1LWQVKh7NQLbKMIz2io1Di"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.m.less": function(e, t, n) {
			e.exports = {
				PremiumIcon: "dLp3R7pmxclGjLS87yr5S",
				premiumIcon: "dLp3R7pmxclGjLS87yr5S"
			}
		},
		"./src/reddit/icons/fonts/Premium/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/reddit/icons/fonts/helpers.tsx"),
				i = n("./src/reddit/icons/fonts/Premium/index.m.less"),
				a = n.n(i);
			const c = n("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				title: e.title,
				className: `${Object(r.b)("premium",e.isFilled)} ${e.className}`
			}), "PremiumIcon", a.a)
		},
		"./src/reddit/icons/fonts/Report/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("report", e.isFilled), c.a.reportIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Sticky/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/fonts/helpers.tsx"),
				a = n("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = n.n(a);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(Object(i.b)("pin", e.isFilled), c.a.stickyIcon, e.className),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, o.a.createElement(i.a, null, e.desc))
		},
		"./src/reddit/icons/fonts/Text/index.m.less": function(e, t, n) {
			e.exports = {
				TextIcon: "_5UHlAh7zBZ6migrBJeld3",
				textIcon: "_5UHlAh7zBZ6migrBJeld3"
			}
		},
		"./src/reddit/icons/svgs/ChevronDown/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/icons/svgs/ChevronUp/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/icons/svgs/ClearFilled/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/icons/svgs/Clock/index.m.less": function(e, t, n) {
			e.exports = {
				clock: "_3dezPhiKJXkVFXj94zLKcs"
			}
		},
		"./src/reddit/icons/svgs/Clock/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Clock/index.m.less"),
				a = n.n(i);
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
		"./src/reddit/icons/svgs/Dropdown/index.m.less": function(e, t, n) {
			e.exports = {
				dropdown: "XHbKeEqnW58ib9mTN6jnS",
				mRedditStyle: "u_kypUXmB-k1A5TcC8MI9"
			}
		},
		"./src/reddit/icons/svgs/Dropdown/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Dropdown/index.m.less"),
				a = n.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			const d = e => {
				let {
					className: t,
					isSubreddit: n,
					...s
				} = e;
				return o.a.createElement("svg", c({
					className: Object(r.a)(a.a.dropdown, {
						[a.a.mRedditStyle]: !n
					}, t),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, s), o.a.createElement("path", {
					d: "M14.17,9.35,10,13.53,5.83,9.35a.5.5,0,0,1,.35-.85h7.64a.5.5,0,0,1,.35.85"
				}))
			};
			t.b = d
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/icons/svgs/ModRemove/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M13.0303,11.4697 C13.3233,11.7627 13.3233,12.2377 13.0303,12.5307 C12.8843,12.6767 12.6923,12.7497 12.5003,12.7497 C12.3083,12.7497 12.1163,12.6767 11.9693,12.5307 L10.0003,10.5607 L8.0303,12.5307 C7.8843,12.6767 7.6923,12.7497 7.5003,12.7497 C7.3083,12.7497 7.1163,12.6767 6.9693,12.5307 C6.6763,12.2377 6.6763,11.7627 6.9693,11.4697 L8.9393,9.4997 L6.9693,7.5307 C6.6763,7.2377 6.6763,6.7627 6.9693,6.4697 C7.2623,6.1767 7.7373,6.1767 8.0303,6.4697 L10.0003,8.4397 L11.9693,6.4697 C12.2623,6.1767 12.7373,6.1767 13.0303,6.4697 C13.3233,6.7627 13.3233,7.2377 13.0303,7.5307 L11.0603,9.4997 L13.0303,11.4697 Z M17.2753,3.0377 L10.2753,1.0377 C10.0953,0.9877 9.9053,0.9877 9.7253,1.0377 L2.7253,3.0377 C2.2963,3.1607 2.0003,3.5537 2.0003,3.9997 L2.0003,10.9997 C2.0003,16.6887 9.4093,18.8707 9.7253,18.9617 C9.8153,18.9877 9.9073,18.9997 10.0003,18.9997 C10.0923,18.9997 10.1853,18.9877 10.2753,18.9617 C10.5903,18.8707 18.0003,16.6887 18.0003,10.9997 L18.0003,3.9997 C18.0003,3.5537 17.7043,3.1607 17.2753,3.0377 L17.2753,3.0377 Z",
				id: "path-1"
			})))
		},
		"./src/reddit/icons/svgs/Shirt/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
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
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				a = n.n(i);
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
		"./src/reddit/icons/svgs/Undo/index.m.less": function(e, t, n) {
			e.exports = {
				undo: "_2sBykNOXv7XBQtHHHAB1JB"
			}
		},
		"./src/reddit/icons/svgs/Undo/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Undo/index.m.less"),
				a = n.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.undo, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,2.375H6.726L8.4.98,7.6.02l-3,2.5a.625.625,0,0,0,0,.96l3,2.5.8-.96L6.726,3.625H10A6.375,6.375,0,1,1,3.625,10H2.375A7.625,7.625,0,1,0,10,2.375ZM5.976,3,6,2.98v.04Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/models/Badge/managementPage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			}));
			var s, o, r = n("./src/reddit/models/Badge/index.ts");
			! function(e) {
				e.Loyalty = "loyalty", e.Achievement = "achievement", e.Cosmetic = "cosmetic"
			}(s || (s = {})),
			function(e) {
				e.Gallery = "gallery", e.MyBadges = "my-badges"
			}(o || (o = {}));
			const i = {
					[s.Loyalty]: r.a.First,
					[s.Achievement]: r.a.Second,
					[s.Cosmetic]: void 0
				},
				a = e => e === r.a.First ? s.Loyalty : e === r.a.Second ? s.Achievement : s.Cosmetic
		},
		"./src/reddit/models/ModQueueTrigger/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function o(e, t) {
				var n;
				return null === (n = e.modQueueTriggers) || void 0 === n ? void 0 : n.find(e => e.type === t)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.USER_REPORTS = "USER_REPORTS", e.AUTOMOD = "AUTOMOD", e.MOD = "MOD", e.ADMIN = "ADMIN", e.SHADOWBANNED_SUBMITTER = "SHADOWBANNED_SUBMITTER", e.HATEFUL_CONTENT = "HATEFUL_CONTENT", e.CROWD_CONTROL = "CROWD_CONTROL", e.BAN_EVASION = "BAN_EVASION"
				}(s || (s = {}))
		},
		"./src/reddit/models/Product/index.ts": function(e, t, n) {
			"use strict";
			var s;

			function o(e) {
				return e.substring(e.lastIndexOf("|") + 1)
			}
			n.d(t, "a", (function() {
					return s
				})), n.d(t, "b", (function() {
					return o
				})),
				function(e) {
					e.Badge = "badge", e.EmotesPack = "emotes_pack", e.Giphy = "giphy", e.Membership = "membership"
				}(s || (s = {}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return r
			})), n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return a
			})), n.d(t, "f", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "h", (function() {
				return u
			}));
			var s = n("./src/reddit/helpers/isPost.ts");
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
			const l = e => 1 === e.length ? Object(s.a)(e[0]) ? d.Post : d.Comment : d.Bulk,
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
		"./src/reddit/models/ScheduledPost/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "s", (function() {
				return i
			})), n.d(t, "e", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "f", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "o", (function() {
				return u
			})), n.d(t, "p", (function() {
				return m
			})), n.d(t, "g", (function() {
				return p
			})), n.d(t, "c", (function() {
				return h
			})), n.d(t, "r", (function() {
				return x
			})), n.d(t, "l", (function() {
				return O
			})), n.d(t, "k", (function() {
				return v
			})), n.d(t, "i", (function() {
				return g
			})), n.d(t, "j", (function() {
				return E
			})), n.d(t, "d", (function() {
				return _
			})), n.d(t, "n", (function() {
				return j
			})), n.d(t, "b", (function() {
				return C
			})), n.d(t, "m", (function() {
				return y
			})), n.d(t, "q", (function() {
				return k
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./src/lib/assertNever.ts"),
				o = n("./src/reddit/models/GqlTopLevelField.ts"),
				r = n("./src/reddit/models/User/index.ts");
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
				O = e => f[b[e]],
				v = e => h[b[e]],
				g = e => b[h[e]],
				E = e => f[h[e]];
			var _;
			! function(e) {
				e.Hourly = "HOURLY", e.Daily = "DAILY", e.Weekly = "WEEKLY", e.Monthly = "MONTHLY"
			}(_ || (_ = {}));
			const j = e => {
					switch (e) {
						case _.Hourly:
						case _.Daily:
						case _.Weekly:
						case _.Monthly:
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
							return Object(s.a)(e)
					}
				},
				k = e => "frequency" in e && !!e.frequency
		},
		"./src/reddit/reducers/economics/paymentSystems/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			}));
			var s, o = n("./src/reddit/actions/economics/paymentSystems/constants.ts");
			! function(e) {
				e[e.Failure = 0] = "Failure", e[e.Fetched = 1] = "Fetched", e[e.NotFetched = 2] = "NotFetched", e[e.Pending = 3] = "Pending"
			}(s || (s = {}));
			const r = {
				status: s.NotFetched
			};
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case o.a:
						if (e.status === s.Fetched && e.data.stripe && e.data.stripe.sources) {
							const n = t.payload.cardId,
								{
									[n]: s,
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
						if (e.status === s.Fetched && e.data.braintree && e.data.braintree.sources) {
							const n = t.payload.sourceId,
								{
									[n]: s,
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
							error: t.payload.error, status: s.Failure
						};
					case o.c:
						return {
							data: t.payload, status: s.Fetched
						};
					case o.d:
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
			var s, o = n("./src/lib/constants/specialMembership.ts"),
				r = n("./src/reddit/actions/economics/subredditPremium/constants.ts"),
				i = n("./src/reddit/helpers/economics/sortBadges.ts"),
				a = n("./src/reddit/models/Badge/index.ts"),
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
					e.collections && Object.keys(e.collections).forEach(o => {
						let r;
						(r = e.placement ? e.placement === a.a.First ? s[c.a.Loyalty][o] : s[c.a.Achievement][o] : l(e) ? s[c.a.Cosmetic][c.c.MyBadges][o] : s[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? n.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
					})
				})
			}

			function m(e) {
				const t = (e, t) => {
					const n = parseInt(e.price || "0"),
						s = parseInt(t.price || "0");
					return n === s ? Object(i.b)(e, t) : n - s
				};
				return e.locked.sort(t), e.unlocked.sort(t), e
			}

			function p(e, t) {
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, n) => {
					const s = t[e.id],
						o = t[n.id];
					return Object(i.b)(s, o)
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
						o = {
							description: s.description,
							highlight: s.extra && s.extra.style && s.extra.style.color,
							id: s.id,
							locked: [],
							title: s.title,
							unlocked: []
						};
					t[c.a.Loyalty][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Achievement][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.Gallery][n] = {
						...o,
						locked: [],
						unlocked: []
					}, t[c.a.Cosmetic][c.c.MyBadges][n] = {
						...o,
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
			t.b = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case r.a: {
						const {
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
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
							subredditId: n
						} = t.payload, o = e[n];
						return o && o.status === s.Fetched ? {
							...e,
							[n]: {
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
			var s, o, r = n("./node_modules/redux/es/redux.js"),
				i = n("./src/reddit/actions/snoovatar.ts");
			! function(e) {
				e.PREMIUM = "PREMIUM"
			}(s || (s = {})),
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
				capabilities: [s.PREMIUM],
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

			function b(e) {
				if (!e) return d;
				const t = d;
				return e.forEach(e => {
					var n;
					const {
						startsAt: s,
						endsAt: o,
						webAssetUrls: r,
						tags: i
					} = e, a = s && new Date(s) <= new Date, c = !!o && new Date(o) < new Date, d = !!a && !c, b = (i || []).includes(m);
					if (i && i.includes(l) && !b) {
						const {
							text: n,
							id: s
						} = e, o = r || null, a = p(i);
						t && (t.quickCreateV1 = {
							...a,
							id: s,
							text: n,
							active: d && !!o,
							webAssetUrls: o
						})
					}
					if (i && i.includes(u) && !b) {
						const e = r || null,
							s = (null === (n = i.find(e => e.startsWith("feature:") && e.includes("web"))) || void 0 === n ? void 0 : n.split("feature:")[1]) || null;
						t && (t.marketingEvent = {
							active: d && !!e,
							assetUrls: e,
							experimentRequired: s
						})
					}
				}), t
			}
			var h = n("./src/reddit/actions/goldPurchaseModals/constants.ts"),
				f = n("./src/reddit/actions/modal.ts"),
				x = n("./src/reddit/constants/modals.ts");
			var O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				var n;
				switch (t.type) {
					case h.s:
						const {
							avatarMarketingEvents: s
						} = t.payload;
						return s ? b(s) : d;
					case f.c:
						return (null === (n = t.payload) || void 0 === n ? void 0 : n.id) === x.a.SNOOVATAR_MODAL ? d : e;
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
							accessory_ids: n
						} = t.payload;
						return {
							image: e,
							accessoryIds: n
						}
					}
					default:
						return e
				}
			};
			t.a = Object(r.c)({
				marketing: O,
				avatarUser: c,
				randomAvatar: v
			})
		},
		"./src/reddit/selectors/authorFlair.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return s
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return r
			}));
			const s = (e, t) => {
					let {
						post: n
					} = t;
					const s = n.belongsTo.id;
					if (!s) return null;
					const o = e.authorFlair.models[s];
					if (!o) return null;
					const r = n.author;
					return r && o[r] || null
				},
				o = (e, t) => {
					let {
						subredditId: n
					} = t;
					const s = e.authorFlair && e.authorFlair.inContext && e.authorFlair.inContext.username;
					if (!s) return null;
					if (!n) return null;
					const o = e.authorFlair.models[n];
					return o ? o[s] : null
				},
				r = e => e.authorFlair.inContext
		},
		"./src/reddit/selectors/avatar.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "c", (function() {
				return a
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const r = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser
				},
				i = e => {
					var t, n;
					return null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.avatarUser.csrf_token
				},
				a = e => {
					var t, n;
					return (null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.randomAvatar) || null
				}
		},
		"./src/reddit/selectors/avatarMarketing.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return i
			})), n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/lib/initializeClient/installReducer.ts"),
				o = n("./src/reddit/reducers/features/avatar/index.ts"),
				r = n("./src/reddit/selectors/experiments/econ/simpleExperiment.ts");
			Object(s.a)({
				features: {
					avatar: o.a
				}
			});
			const i = e => {
					var t, n;
					return !!(null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing)
				},
				a = e => {
					var t, n, s, o;
					const i = null === (s = null === (n = null === (t = e.features) || void 0 === t ? void 0 : t.avatar) || void 0 === n ? void 0 : n.marketing) || void 0 === s ? void 0 : s.marketingEvent;
					if (!(null == i ? void 0 : i.active) || !(null === (o = null == i ? void 0 : i.assetUrls) || void 0 === o ? void 0 : o.length)) return null;
					const a = i.assetUrls[0];
					return !i.experimentRequired || Object(r.a)(i.experimentRequired)(e) ? a : null
				}
		},
		"./src/reddit/selectors/experiments/commentSearchPdp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./node_modules/reselect/es/index.js");
			const i = Object(r.a)(e => Object(o.c)(e, {
				experimentEligibilitySelector: o.a,
				experimentName: s.vb
			}), e => ({
				bucketed: e === s.Sc.ExpandedSearch || e === s.Sc.CollapsedSearch,
				collapsed: e === s.Sc.CollapsedSearch,
				expanded: e === s.Sc.ExpandedSearch
			}))
		},
		"./src/reddit/selectors/experiments/contributeBeforeSignUp.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			})), n.d(t, "c", (function() {
				return u
			})), n.d(t, "b", (function() {
				return m
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/experiments/utils.ts");
			const a = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				c = Object(s.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), i.a),
				d = e => a.find(t => !!Object(i.a)(c(e, t))),
				l = Object(s.a)(d, e => !!e),
				u = e => {
					const t = d(e);
					return !!t && c(e, t) === o.W.SkipOnboarding
				},
				m = e => {
					const t = d(e);
					return !!t && c(e, t) === o.W.RegOnboarding
				}
		},
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/helpers/isCrosspost.ts"),
				i = n("./src/reddit/contexts/PageLayer/index.tsx");
			const a = (e, t) => {
				let {
					post: n,
					pageLayer: a
				} = t;
				if (Object(i.F)(a)) return !0;
				const c = Object(i.y)(a),
					d = Object(r.a)(n);
				return !(!c || d) && (e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.Pb
					}) === s.Md
				})(e)
			}
		},
		"./src/reddit/selectors/experiments/postActionBarAnimation.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "h", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "g", (function() {
				return m
			})), n.d(t, "f", (function() {
				return p
			})), n.d(t, "c", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts"),
				r = n("./src/reddit/selectors/experiments/index.ts"),
				i = n("./src/reddit/selectors/experiments/presence.ts"),
				a = n("./src/reddit/selectors/userPrefs.ts");
			const c = 1e4,
				d = e => {
					if (Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.l
					});
					return t === s.p.VoteCountOnly || t === s.p.CommentCountOnly || t === s.p.VoteAndCommentCount
				},
				l = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.l
					});
					return t === s.p.VoteCountOnly || t === s.p.VoteAndCommentCount
				},
				u = e => {
					if (Object(a.d)(e) || Object(i.a)(e)) return !1;
					const t = Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.l
					});
					return t === s.p.CommentCountOnly || t === s.p.VoteAndCommentCount
				},
				m = (e, t) => {
					let {
						post: n
					} = t;
					return p(e, {
						postId: n.id
					})
				},
				p = (e, t) => {
					let {
						postId: n
					} = t;
					const o = e.posts.models[n];
					if (Object(a.d)(e) || !o || o.isSponsored || o.isScoreHidden || o.score >= c || Object(i.a)(e)) return !1;
					const d = Object(r.d)(e, {
							experimentName: s.l
						}),
						l = null == d ? void 0 : d.variant;
					return l === s.p.VoteCountOnly || l === s.p.VoteAndCommentCount
				},
				b = (e, t) => {
					let {
						postId: n
					} = t;
					const o = e.posts.models[n];
					if (Object(a.d)(e) || !o || o.isSponsored || o.numComments >= c || Object(i.a)(e)) return !1;
					const d = Object(r.d)(e, {
							experimentName: s.l
						}),
						l = null == d ? void 0 : d.variant;
					return l === s.p.CommentCountOnly || l === s.p.VoteAndCommentCount
				},
				h = e => {
					if (Object(i.a)(e)) return !1;
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: s.zc
					}) === s.cd.Enabled
				}
		},
		"./src/reddit/selectors/experiments/presence.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				return Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: s.bf
				}) === s.Md
			}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			})), n.d(t, "b", (function() {
				return c
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/selectors/chatPost.ts"),
				i = n("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const a = e => {
					const t = Object(i.a)(e);
					return Boolean(t) && !Object(o.vg)(t)
				},
				c = Object(s.a)(a, r.d, (e, t) => e && !t)
		},
		"./src/reddit/selectors/removedPosts.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return m
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "b", (function() {
				return b
			})), n.d(t, "e", (function() {
				return h
			})), n.d(t, "d", (function() {
				return f
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = n("./node_modules/fbt/lib/FbtPublic.js"),
				o = n("./node_modules/reselect/es/index.js"),
				r = n("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				i = n("./src/reddit/helpers/getRichTextContent/index.ts"),
				a = n("./src/reddit/models/Media/index.ts"),
				c = n("./src/reddit/models/Post/index.ts"),
				d = n("./src/reddit/selectors/user.ts");
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
					const n = s.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let o = Object(i.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (o = e.media.markdownContent), o === n
				}),
				p = Object(o.a)(r.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return u.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const n = s.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let o = Object(i.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== a.o.TEXT || (o = e.media.markdownContent), o === n
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
				h = Object(o.a)(d.l, r.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				f = Object(o.a)(r.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/reddit/selectors/showPromotedCTA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var s = n("./node_modules/reselect/es/index.js"),
				o = n("./src/reddit/constants/experiments.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/models/Post/index.ts"),
				a = n("./src/reddit/selectors/posts.ts");
			const c = e => Object(r.c)(e, {
					experimentName: o.ef,
					experimentEligibilitySelector: r.a
				}),
				d = (e, t) => (t === o.mf.Enabled && (null == e ? void 0 : e.isCreatedFromAdsUi) || (null == e ? void 0 : e.isSponsored)) && !Object(i.A)(e),
				l = Object(s.a)(a.G, c, (e, t) => d(e, t));
			Object(s.a)((e, t) => t, c, (e, t) => d(e, t))
		},
		"./src/reddit/selectors/subredditMention.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			})), n.d(t, "e", (function() {
				return d
			})), n.d(t, "c", (function() {
				return l
			})), n.d(t, "d", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var s = n("./src/reddit/constants/experiments.ts"),
				o = n("./src/reddit/featureFlags/index.ts"),
				r = n("./src/reddit/helpers/chooseVariant/index.ts"),
				i = n("./src/reddit/selectors/subreddit.ts");
			const a = e => o.d.subredditMentionD2xExperiment(e),
				c = e => {
					return Object(r.c)(e, {
						experimentEligibilitySelector: a,
						experimentName: s.Of
					}) || ""
				},
				d = e => {
					const t = c(e);
					return t === s.Uf.SmIcon || t === s.Uf.SmIconHc
				},
				l = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.pending[n]
				},
				u = (e, t) => {
					let {
						subredditName: n
					} = t;
					return !!e.subreddits.api.models.error[n]
				},
				m = (e, t) => {
					let {
						subredditName: n
					} = t;
					const s = Object(i.cb)(e, {
						subredditName: n
					});
					return (s && s.postIds || []).slice(0, 2)
				}
		},
		"./src/reddit/selectors/userPrefs.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "b", (function() {
				return i
			})), n.d(t, "d", (function() {
				return a
			})), n.d(t, "a", (function() {
				return c
			}));
			var s = n("./src/lib/constants/index.ts"),
				o = n("./src/reddit/selectors/experiments/loggedOutOneFeed.ts");
			const r = e => {
					if (i(e)) return !1;
					const {
						subscriptionsPinned: t
					} = e.user.prefs;
					return !(void 0 !== t || !Object(o.c)(e)) || !!t
				},
				i = e => !(!e.platform.currentPage || !e.platform.currentPage.meta || e.platform.currentPage.meta.name !== s.Sb.MODERATION_PAGES),
				a = e => e.user.prefs.reduceAnimationsFromAwards,
				c = e => !!e.user.prefs.over18
		},
		"./src/reddit/singleton/EventSystem.ts": function(e, t, n) {
			"use strict";
			var s = n("./src/config.ts"),
				o = n("./src/lib/fastdom/index.ts"),
				r = n("./src/reddit/actions/jsApi.ts");
			const i = "JSAPI customEvent.detail.name is deprecated. Please upgrade to <meta>",
				a = "jsapi.consumer",
				c = "/r/redesign/wiki/jsapi";
			var d = n("./src/reddit/constants/jsapiEvents.ts");
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
						e.detail && (t = e.detail.name, console.warn(i, `${s.a.redditUrl}${c}`, e))
					} catch (n) {
						return void console.error(i, `${s.a.redditUrl}${c}`, n)
					}
					this.store.then(e => {
						e.dispatch(r.b(t || "")), this.fireEventsQueue()
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
			e.exports = JSON.parse('{"id":"eced54f14226"}')
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.d9a1b1fbad2271f48ebe.js.map