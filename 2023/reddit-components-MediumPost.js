// https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.22a35a55e5f6af5fce1b.js
// Retrieved at 7/28/2023, 1:00:06 PM by Reddit Dataminer v1.0.0
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
						h = !r && !l && /macintosh/i.test(t),
						v = !a && !u && !m && !p && /linux/i.test(t),
						_ = n(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						E = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						x = !O && /[^-]mobi/i.test(t),
						g = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: E || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || E
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: E || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: E || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: E || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, _ ? (o.msedge = e, o.version = _) : (o.msie = e, o.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
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
						version: _
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || E
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
						version: E || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: E || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : m ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || E
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || E
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || E
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? o = {
						name: "Android",
						version: E
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, E && (o.version = E)) : r ? (o = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, E && (o.version = E)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || E
					} : {
						name: s(/^(.*)\/(.*) /),
						version: n(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && E && (o.version = E)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !a && !o.silk ? !o.windowsphone && r ? (o[r] = e, o.ios = e, o.osname = "iOS") : h ? (o.mac = e, o.osname = "macOS") : g ? (o.xbox = e, o.osname = "Xbox") : f ? (o.windows = e, o.osname = "Windows") : v && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
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
					var C = !o.windows && y.split(".")[0];
					return O || c || "ipad" == r || a && (3 == C || C >= 4 && !x) || o.silk ? o.tablet = e : (x || "iphone" == r || "ipod" == r || a || i || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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
					for (var c in e)
						if (e.hasOwnProperty(c) && a[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return r([i, e[c]]) < 0
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
				var c = i(e) ? n : a,
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
		"./node_modules/ts-error/lib/cjs.js": function(e, t, s) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var n = s("./node_modules/ts-error/lib/helpers.js"),
				o = n.setPrototypeOf,
				r = n.getPrototypeOf,
				a = n.defineProperty,
				i = n.objectCreate,
				c = "[object Error]" === (new Error).toString(),
				d = "";

			function l(e) {
				var t, s = this.constructor,
					n = s.name || (null === (t = s.toString().match(/^function\s*([^\s(]+)/)) ? d || "Error" : t[1]),
					i = "Error" === n,
					u = i ? d : n,
					m = Error.apply(this, arguments);
				if (o(m, r(this)), !(m instanceof s && m instanceof l)) {
					m = this;
					Error.apply(this, arguments), a(m, "message", {
						configurable: !0,
						enumerable: !1,
						value: e,
						writable: !0
					})
				}
				if (a(m, "name", {
						configurable: !0,
						enumerable: !1,
						value: u,
						writable: !0
					}), Error.captureStackTrace && Error.captureStackTrace(m, i ? l : s), void 0 === m.stack) {
					var p = new Error(e);
					p.name = m.name, m.stack = p.stack
				}
				return c && a(m, "toString", {
					configurable: !0,
					enumerable: !1,
					value: function() {
						return (this.name || "Error") + (void 0 === this.message ? "" : ": " + this.message)
					},
					writable: !0
				}), m
			}
			d = l.name || "ExtendableError", l.prototype = i(Error.prototype, {
				constructor: {
					value: Error,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t.ExtendableError = l, t.default = t.ExtendableError
		},
		"./node_modules/ts-error/lib/helpers.js": function(e, t, s) {
			"use strict";
			t.__esModule = void 0, t.__esModule = !0;
			var n = "function" == typeof Object.setPrototypeOf,
				o = "function" == typeof Object.getPrototypeOf,
				r = "function" == typeof Object.defineProperty,
				a = "function" == typeof Object.create,
				i = "function" == typeof Object.prototype.hasOwnProperty;
			t.setPrototypeOf = function(e, t) {
				n ? Object.setPrototypeOf(e, t) : e.__proto__ = t
			};
			t.getPrototypeOf = function(e) {
				return o ? Object.getPrototypeOf(e) : e.__proto__ || e.prototype
			};
			var c = !1;
			t.defineProperty = function e(t, s, n) {
				if (r && !c) try {
					Object.defineProperty(t, s, n)
				} catch (o) {
					c = !0, e(t, s, n)
				} else t[s] = n.value
			};
			var d = function(e, t) {
				return i ? e.hasOwnProperty(e, t) : void 0 === e[t]
			};
			t.hasOwnProperty = d;
			t.objectCreate = function(e, t) {
				if (a) return Object.create(e, t);
				var s = function() {};
				s.prototype = e;
				var n = new s;
				if (void 0 === t) return n;
				if ("null" == typeof t) throw new Error("PropertyDescriptors must not be null.");
				if ("object" == typeof t)
					for (var o in t) d(t, o) && (n[o] = t[o].value);
				return n
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
				o = s.n(n),
				r = s("./src/reddit/components/TrackingHelper/index.tsx"),
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
			const c = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : () => {};
				return o => {
					const r = m(o.target, o.currentTarget),
						i = p(o.target, o.currentTarget);
					r && s && t && (u(o.target, o.currentTarget, l.anchors) ? s(t(e, r, i)) : s(s => {
						const n = t(e, r, i)(s);
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
							actionInfo: Object(a.T)(s, o)
						}
					})), u(o.target, o.currentTarget, l.anchorsAndButtons) && n(o)
				}
			});

			function d(e) {
				const t = t => {
					const {
						sendEvent: s,
						eventFactory: r,
						clickTrackingId: a,
						...d
					} = t, l = Object(n.useCallback)(c(a, r, s), [a, r, s]);
					return o.a.createElement(e, i({}, d, {
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
		"./src/lib/asyncActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var n = s("./src/lib/makeActionCreator/index.ts");
			const o = e => `${e}_REQUESTED`,
				r = e => `${e}_SUCCEEDED`,
				a = e => `${e}_FAILED`;

			function i(e) {
				const t = o(e),
					s = r(e),
					i = a(e);
				return {
					requestedActionType: t,
					requested: Object(n.a)(t),
					succeededActionType: s,
					succeeded: Object(n.a)(s),
					failedActionType: i,
					failed: Object(n.a)(i)
				}
			}
			var c;
			! function(e) {
				e[e.New = 0] = "New", e[e.Pending = 1] = "Pending", e[e.Succeeded = 2] = "Succeeded", e[e.Failed = 3] = "Failed"
			}(c || (c = {}));
			const d = (e, t, s) => (function() {
				let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c.New,
					o = arguments.length > 1 ? arguments[1] : void 0;
				switch (o.type) {
					case e:
						return n === c.New ? c.Pending : n;
					case t:
						return n === c.Pending ? c.Succeeded : n;
					case s:
						return n === c.Pending ? c.Failed : n;
					default:
						return n
				}
			})
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
				let c = "";
				if (o) {
					if (s && s.displayText) {
						const e = 36 - (null !== (t = null == i ? void 0 : i.length) && void 0 !== t ? t : 0);
						return s.displayText.length > e ? s.displayText.substring(0, e - 3) + "..." : s.displayText
					}
					c = a || Object(n.E)(e)
				} else c = Object(n.E)(e);
				const d = r.a.parse(c),
					l = d.path || "",
					u = l.length > 7 ? l.substring(0, 7) + "..." : l;
				return (d.hostname ? d.hostname.replace("www.", "") : "") + u
			}
		},
		"./src/lib/reCaptchaEnterprise/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return b
			}));
			s("./src/lib/reCaptchaEnterprise/reCaptcha.css");
			var n = s("./src/config.ts"),
				o = s("./src/reddit/helpers/loadThirdPartyScript.ts");
			const r = e => "object" == typeof e && null !== e,
				a = () => "undefined" != typeof window && r(window) && r(window.grecaptcha) && r(window.grecaptcha.enterprise),
				i = () => a() ? window.grecaptcha.enterprise : void 0,
				c = e => `https://www.google.com/recaptcha/enterprise.js?render=${e}`,
				d = e => Object(o.a)(c(e), a),
				l = e => new Promise(t => e.ready(t));
			var u, m = s("./node_modules/ts-error/lib/cjs.js"),
				p = s.n(m);
			class MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError extends p.a {
				constructor() {
					super("reCaptcha Enterprise site key is not set")
				}
			}
			class ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError extends p.a {
				constructor() {
					super("reCaptcha Enterprise client is not ready")
				}
			}
			class ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError extends p.a {
				constructor() {
					super("reCaptcha Enterprise client is not available")
				}
			}! function(e) {
				e.PageLoad = "PAGE_LOAD", e.PostSubmit = "post_submit", e.CommentSubmit = "comment_submit"
			}(u || (u = {}));
			var b = u;
			const f = new class {
				constructor() {
					var e = this;
					let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n.a.reCaptchaEnterprise.siteKey,
						s = arguments.length > 1 ? arguments[1] : void 0;
					this.siteKey = t, this.isReady = !1, this.hasSiteKey = () => !!this.siteKey, this.hasClient = () => !!this.instance, this.setInstance = e => {
						e && (this.instance = e, this.isReady = !1)
					}, this.scriptUrl = () => c(this.siteKey), this.ensureSiteKey = () => {
						if (!this.hasSiteKey) throw new MissingReCaptchaEnterpriseSiteKeyError_MissingReCaptchaEnterpriseSiteKeyError
					}, this.ensureClient = () => {
						const e = this.instance;
						if (!e) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
						return e
					}, this.waitUntilClientIsReady = async () => {
						const e = this.ensureClient();
						return await l(e), this.isReady = !0, e
					}, this.ensureClientIsReady = () => {
						const e = this.ensureClient();
						if (!this.isReady) throw new ReCaptchaEnterpriseClientIsNotReadyError_ReCaptchaEnterpriseClientIsNotReadyError;
						return e
					}, this.loadScript = async function() {
						let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						if (!e.instance || t) {
							e.ensureSiteKey(), await d(e.siteKey);
							const t = i();
							if (!t) throw new ReCaptchaEnterpriseClientNotAvailableError_ReCaptchaEnterpriseClientNotAvailableError;
							e.setInstance(t)
						}
						e.isReady || await e.waitUntilClientIsReady()
					}, this.execute = async e => {
						this.ensureSiteKey();
						const t = this.ensureClientIsReady(),
							s = await t.execute(this.siteKey, e);
						if (e.fast) {
							return JSON.parse(s)[1]
						}
						return s
					}, this.setInstance(s || i())
				}
			};
			t.b = f
		},
		"./src/lib/reCaptchaEnterprise/reCaptcha.css": function(e, t, s) {},
		"./src/lib/timeUntil/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
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

			function c(e) {
				let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
					s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
				const c = Date.now(),
					d = new Date(e).getTime(),
					l = {
						[o.yc]: "",
						[o.ub]: "",
						[o.D]: "",
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
					e && (l[n] = (t ? i : a)[n](e).toString()), u -= e * n
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
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return O
			})), s.d(t, "c", (function() {
				return x
			})), s.d(t, "f", (function() {
				return g
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "g", (function() {
				return k
			})), s.d(t, "h", (function() {
				return S
			})), s.d(t, "b", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makeCommentsPageKey/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/shortcuts/utils.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				u = s("./src/reddit/endpoints/comment/index.tsx"),
				m = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				f = s("./src/reddit/selectors/commentSelector.ts"),
				h = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/actions/comment/index.ts"),
				_ = s("./src/reddit/actions/comment/constants.ts");
			const E = Object(r.a)(_.p),
				O = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					s().features.comments.models[e] && (await Object(u.j)(o(), e)).ok && t((e => async t => {
						t(E({
							commentId: e
						}))
					})(e))
				}, x = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					if (!Object(h.S)(s())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const a = s().features.comments.models[e];
					if (!a) return;
					const c = a.isLocked ? u.l : u.f;
					t(Object(v.j)({
						[e]: {
							isLocked: !a.isLocked
						}
					})), (await c(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: a.isLocked ? n.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : n.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(v.j)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, g = Object(r.a)(_.J), y = e => async (t, s, n) => {
					let {
						apiContext: o,
						gqlContext: r
					} = n;
					const a = s(),
						i = a.features.comments.models[e],
						d = a.user.account ? a.user.account.displayText : null;
					i && d && (t(Object(v.j)({
						[e]: {
							isApproved: !0,
							approvedBy: d,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(u.a)(r(), e)).ok || t(Object(v.j)({
						[e]: {
							isApproved: i.isApproved,
							approvedBy: null,
							bannedBy: i.bannedBy,
							isRemoved: i.isRemoved,
							isSpam: i.isSpam,
							modNote: i.modNote,
							modReasonBy: i.modReasonBy,
							modRemovalReason: i.modRemovalReason,
							numReports: i.numReports || null
						}
					})), Object(c.d)())
				}, C = (e, t) => async (s, n, o) => {
					let {
						apiContext: r,
						gqlContext: a
					} = o;
					const i = n(),
						d = i.features.comments.models[e],
						l = i.user.account ? i.user.account.displayText : null;
					d && l && (s(Object(v.j)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(u.h)(a(), e, t)).ok || s(Object(v.j)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam,
							numReports: d.numReports
						}
					})), Object(c.d)())
				}, k = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const a = s().features.comments.models[e];
					if (!a) return;
					const i = a.ignoreReports ? u.k : u.e;
					a.ignoreReports || t(y(e)), t(Object(v.j)({
						[e]: {
							ignoreReports: !a.ignoreReports
						}
					})), (await i(r(), e)).ok ? t(Object(d.f)({
						kind: b.b.SuccessMod,
						text: a.ignoreReports ? n.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : n.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(v.j)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, S = (e, t, s) => async (r, a, i) => {
					let {
						gqlContext: c
					} = i;
					const l = Object(f.c)(a(), {
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
						})).ok) r(Object(v.j)({
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
				}, j = (e, t, s) => async (n, r, i) => {
					let {
						apiContext: c,
						gqlContext: d
					} = i;
					const l = r(),
						m = l.features.comments.models[e];
					if (!m) return;
					const p = m.postId,
						b = l.postStickiedComments.data[p];
					n(Object(v.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.I.ADMIN,
							isMod: t === o.I.MODERATOR,
							isStickied: !!s
						}
					})), s && b && b !== e && n(Object(v.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const f = Object(u.c)(d(), e, t),
						h = Object(u.d)(d(), e, !!s),
						_ = [f];
					(s || !s && e === b) && _.push(h), (await Promise.all(_)).every(e => e.ok) ? s && n(g({
						id: e,
						postId: p,
						commentsPageKey: Object(a.a)(p, null, {
							sort: o.v.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (n(Object(v.j)({
						[e]: {
							distinguishType: m.distinguishType,
							isAdmin: m.isAdmin,
							isMod: m.isMod,
							isStickied: m.isStickied
						}
					})), n(Object(v.j)({
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
				return o
			})), s.d(t, "e", (function() {
				return r
			})), s.d(t, "d", (function() {
				return a
			})), s.d(t, "f", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
			}));
			const n = "MOD_PAGE_EVENT_POSTS_LOADED",
				o = "MOD_PAGE_EVENT_POSTS_FAILED",
				r = "MOD_PAGE_EVENT_POSTS_PENDING",
				a = "MOD_PAGE_EVENT_POSTS_MORE_LOADED",
				i = "START_EVENT_NOW_SUCCESS",
				c = "EDIT_EVENT_TIME_SUCCESS"
		},
		"./src/reddit/actions/modQueue/realtime.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return j
			})), s.d(t, "c", (function() {
				return P
			})), s.d(t, "b", (function() {
				return T
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				o = (s("./src/redditGQL/operations/LastModActionInSubreddit.json"), s("./src/redditGQL/operations/ModActivitySummaryByID.json")),
				r = s("./src/redditGQL/operations/SingleCommentById.json"),
				a = s("./src/redditGQL/operations/SinglePostInfoById.json");
			var i = s("./src/lib/initializeClient/installReducer.ts"),
				c = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/users.ts"),
				m = s("./src/reddit/endpoints/redditor/index.ts"),
				p = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				b = s("./src/reddit/helpers/graphql/normalizeModActivityFromGql/index.ts"),
				f = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				h = s("./src/reddit/helpers/isPost.ts"),
				v = s("./src/reddit/reducers/features/modActivitySummaries/index.ts"),
				_ = s("./src/reddit/reducers/features/realtimeModqueue/index.ts"),
				E = s("./src/reddit/actions/modQueue/constants.ts");
			var O = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case E.o:
							return t.payload;
						default:
							return e
					}
				},
				x = s("./src/reddit/reducers/pages/modHub/index.ts"),
				g = s("./src/reddit/selectors/modQueue.ts"),
				y = s("./src/reddit/selectors/user.ts"),
				C = s("./src/redditGQL/types.ts");
			Object(i.a)({
				pages: {
					modHub: x.a
				}
			}), Object(i.a)({
				features: {
					modActivitySummaries: v.a
				}
			}), Object(i.a)({
				features: {
					realtimeModqueue: _.a
				}
			}), Object(i.a)({
				features: {
					realtimeUpdateAnimationId: O
				}
			});
			const k = Object(c.a)(E.l),
				S = e => async (t, s, r) => {
					let {
						gqlContext: a
					} = r;
					const i = await ((e, t) => Object(n.a)(e, {
							...o,
							variables: t
						}))(a(), {
							id: e
						}),
						c = Object(b.a)(i.body.data.subredditInfoById);
					t(k(c))
				}, j = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					e && t(S(e))
				}, w = Object(c.a)(E.m), N = (e, t) => {
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
						n = Object(g.d)(e, s);
					return null == n ? void 0 : n.includes(t)
				}, R = [C.z.ApproveComment, C.z.ApproveLink, C.z.RemoveComment, C.z.RemoveLink, C.z.SpamComment, C.z.SpamLink], P = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					var r, a;
					const {
						moderatorID: i,
						targetID: c,
						action: d
					} = null === (r = null == e ? void 0 : e.subscribe) || void 0 === r ? void 0 : r.data, l = s(), p = Object(y.k)(l), b = R.includes(d), f = i === p, h = N(l, c);
					if (!b || f || !h) return;
					const v = await Object(m.b)(o(), {
						id: i
					}) || (null === (a = Object(y.Cb)(l, {
						userId: i
					})) || void 0 === a ? void 0 : a.username);
					v && t(Object(u.z)(v)), t(w({
						targetID: c
					}))
				}, I = Object(c.a)(E.p), A = Object(c.a)(E.o), T = e => async (t, s, o) => {
					let {
						gqlContext: i
					} = o;
					var c, u, m, b, v, _;
					const E = Object(h.a)(e),
						O = s(),
						x = null === (u = null === (c = null == O ? void 0 : O.features) || void 0 === c ? void 0 : c.realtimeModqueue) || void 0 === u ? void 0 : u.toUpdate.includes(e),
						g = N(O, e);
					if (!x || !g) return;
					const y = E ? () => ((e, t) => Object(n.a)(e, {
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
						C = await y();
					if (C.ok) {
						if (E) {
							const s = null === (b = null === (m = null == C ? void 0 : C.body) || void 0 === m ? void 0 : m.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(l.Q)({
								[e]: Object(f.f)(s)
							}))
						} else {
							const s = null === (_ = null === (v = null == C ? void 0 : C.body) || void 0 === v ? void 0 : v.data) || void 0 === _ ? void 0 : _.commentById;
							t(Object(d.j)({
								[e]: Object(p.a)(s)
							}))
						}
						t(A(e)), t(I({
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
				return v
			})), s.d(t, "j", (function() {
				return _
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "p", (function() {
				return O
			})), s.d(t, "q", (function() {
				return x
			})), s.d(t, "o", (function() {
				return g
			}));
			const n = "CREATE_COLLECTION_PENDING",
				o = "CREATE_COLLECTION_SUCCESS",
				r = "CREATE_COLLECTION_FAILED",
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
				v = "REORDER_COLLECTION_PENDING",
				_ = "REORDER_COLLECTION_SUCCESS",
				E = "REORDER_COLLECTION_FAILED",
				O = "UPDATE_COLLECTION_LAYOUT_PENDING",
				x = "UPDATE_COLLECTION_LAYOUT_SUCCESS",
				g = "UPDATE_COLLECTION_LAYOUT_FAILED"
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "a", (function() {
				return v
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "e", (function() {
				return E
			}));
			var n = s("./src/lib/asyncActions/index.ts"),
				o = s("./src/lib/constants/euCookiePolicy.ts"),
				r = s("./src/lib/reCaptchaEnterprise/index.ts"),
				a = s("./src/lib/sentry/index.ts");

			function i(e) {
				return t => async (s, n, o) => {
					const r = n();
					if (e(r)) return t(s, n, o)
				}
			}
			var c = s("./node_modules/lodash/every.js"),
				d = s.n(c),
				l = s("./src/reddit/featureFlags/index.ts"),
				u = s("./src/reddit/featureFlags/utils.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const p = e => l.d.reCaptchaEnterprise(e),
				b = (e, t) => !!Object(m.c)(e, {
					experimentEligibilitySelector: Object(u.d)(Object(u.b)(...o.c)),
					experimentName: t
				}),
				f = Object(n.b)("LOAD_RECAPTCHA_ENTERPRISE"),
				h = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					return i(t => d()([p(t), b(t, e), e => e.tracking.reCaptchaEnterprise.load === n.a.New], Boolean))(async e => {
						e(f.requested());
						try {
							await r.b.loadScript(), e(f.succeeded())
						} catch (s) {
							if (e(f.failed()), !t) throw s;
							a.c.withScope(e => {
								Object(a.a)(e, {
									serverLogging: !1
								}), a.c.captureException(s)
							})
						}
					})
				},
				v = Object(n.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				_ = e => i(t => d()([p(t), b(t, e.experiment), e => e.tracking.reCaptchaEnterprise.load === n.a.Succeeded], Boolean))(async t => {
					t(v.requested());
					try {
						const s = await r.b.execute({
							action: e.action,
							fast: e.fast
						});
						return t(v.succeeded({
							token: s
						})), s
					} catch (s) {
						if (t(v.failed()), e.catchAndLogError) return a.c.withScope(e => {
							Object(a.a)(e, {
								serverLogging: !1
							}), a.c.captureException(s)
						}), "";
						throw s
					}
				}),
				E = Object(n.b)("SEND_RECAPTCHA_TOKEN")
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return J
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
				return ce
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return de
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
				return fe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return ve
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return _e
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return Ee
			})), s.d(t, "removalReasonMessagePending", (function() {
				return Oe
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return xe
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return ge
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return ye
			})), s.d(t, "submitRemovalReason", (function() {
				return Ce
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return ke
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
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
					case a:
					case i:
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
			var v = function() {
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
				_ = Object(r.c)({
					error: h,
					pending: v
				});
			const E = {};
			var O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
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
			const x = {};
			var g = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : x,
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
				C = Object(r.c)({
					api: _,
					models: O,
					reasonOrder: g,
					removedItemIds: y
				}),
				k = s("./src/lib/constants/index.ts"),
				S = s("./src/lib/makeActionCreator/index.ts"),
				j = s("./src/lib/makeCommentsPageKey/index.ts"),
				w = s("./src/lib/makeDraftKey/index.ts"),
				N = s("./src/reddit/actions/bulkActions/index.ts"),
				R = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/comment/moderation.ts"),
				A = s("./src/reddit/actions/modal.ts"),
				T = s("./src/reddit/actions/post.ts"),
				M = s("./src/reddit/actions/toaster.ts"),
				D = s("./src/reddit/constants/modals.ts"),
				L = s("./src/lib/makeApiRequest/index.ts"),
				F = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				z = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const V = (e, t) => Object(L.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: k.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				W = (e, t, s) => Object(L.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(U.a)(Object(z.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: k.ob.POST,
					type: "json",
					data: t
				});
			var q = s("./src/reddit/helpers/isPost.ts"),
				G = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				H = s("./src/reddit/helpers/routeKey/index.ts"),
				Q = s("./src/reddit/models/ModQueue/index.ts"),
				K = s("./src/reddit/models/PostDraft/index.ts"),
				Y = s("./src/reddit/models/RemovalReason/index.ts"),
				Z = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				$ = s("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: C
				}
			});
			const J = Object(S.a)("REMOVALREASONS__LOAD_PENDING"),
				ee = Object(S.a)(a),
				te = Object(S.a)("REMOVALREASONS__LOAD_FAILED"),
				se = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const r = s().subreddits.models[e].name;
					t(J());
					const a = await ((e, t) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: k.ob.GET
					}))(o(), r);
					a.ok ? t(ee({
						subredditId: e,
						response: a.body
					})) : t(te(a.error))
				}, ne = Object(S.a)(i), oe = Object(S.a)(c), re = Object(S.a)(d), ae = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(ne());
					const c = await ((e, t, s) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: k.ob.POST,
						data: s
					}))(a(), i, t);
					if (c.ok) {
						const {
							id: o
						} = c.body, r = {
							...t,
							id: o
						};
						s(oe({
							subredditId: e,
							reason: r
						})), s(Object(M.f)({
							kind: Z.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(c.error))
				}, ie = Object(S.a)(l), ce = Object(S.a)(u), de = Object(S.a)(m), le = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(ie());
					const c = await ((e, t, s) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: k.ob.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(a(), i, t);
					c.ok ? (s(ce({
						subredditId: e,
						reason: t
					})), s(Object(M.f)({
						kind: Z.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(de(c.error))
				}, ue = Object(S.a)(p), me = Object(S.a)(b), pe = Object(S.a)(f), be = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(ue());
					const c = await ((e, t, s) => Object(L.a)(Object(F.a)(e, [B.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: k.ob.DELETE
					}))(a(), i, t);
					c.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(M.f)({
						kind: Z.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(pe(c.error))
				}, fe = Object(S.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = n();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(fe({
						subredditId: e,
						itemIds: t
					})), s(Object(A.i)(D.a.ADD_REMOVAL_REASON))
				}, ve = Object(S.a)("REMOVALREASONS__SUBMIT_PENDING"), _e = Object(S.a)("REMOVALREASONS__SUBMIT_SUCCESS"), Ee = Object(S.a)("REMOVALREASONS__SUBMIT_FAILED"), Oe = Object(S.a)("REMOVALREASONS__MESSAGE_PENDING"), xe = Object(S.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), ge = Object(S.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ye = Object(S.a)("REMOVALREASONS__MESSAGE_FAILED"), Ce = (e, t, s, n, o, r) => async (a, i, c) => {
					let {
						apiContext: d
					} = c;
					const l = i(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						p = Object(q.a)(m) ? Y.e.Post : Y.e.Comment,
						b = p === Y.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						f = p === Y.e.Post ? T.Q : R.j;
					if (!b || !u) return !1;
					a(ve()), a(f({
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
						v = await V(d(), h);
					if (v.ok) {
						if (a(_e()), t) {
							a(Oe());
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: r,
									type: n
								},
								i = await W(d(), Object(Y.h)(o, p), p);
							if (i.ok) {
								if ([Y.f.Public, Y.f.PublicAsSubreddit].includes(n)) {
									if (a(ge()), i.body) {
										const e = Object(G.a)(i.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object($.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = s && n && Object(H.a)(n, l, l.posts.models[e.postId]);
										if (o || (o = Object(j.a)(e.postId, null, {
												sort: k.w,
												hasSortParam: !0
											})), p === Y.e.Post) {
											const s = Object(w.a)(K.c.replyToPost, m);
											a(Object(P.r)({
												...t,
												headCommentId: Object(X.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: s
											}));
											const n = l.postStickiedComments.data[m];
											a(Object(I.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), n && n !== e.id && a(Object(R.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === Y.e.Comment) {
											const e = Object(w.a)(K.c.replyToComment, b.id),
												s = Object(X.j)(l, {
													commentId: m,
													commentsPageKey: o
												});
											a(Object(P.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: o,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else a(xe());
								return !0
							}
							return a(ye(i.error)), !1
						}
					} else a(Ee(v.error)), a(f({
						[m]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, ke = (e, t, s, o, r) => async (a, i, c) => {
					let {
						apiContext: d
					} = c;
					const l = i(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					a(ve());
					const m = Object(M.f)({
							kind: Z.b.SuccessMod,
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
							operation: Q.a.RemovalReason,
							username: u,
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
								r = await W(d(), Object(Y.h)(n, Y.e.Bulk), Y.e.Bulk);
							r.ok ? (a(xe()), a(m)) : a(ye(r.error))
						} else a(m)
					} else a(Ee(b.error))
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
				return c
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/components/CommunityTopicSurvey/async.tsx");
			const i = 5;

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
					p(e) && o - r >= i && !u.has(t) && (r = o, u.add(t), o === l && (m = !0))
				}
				return m ? o.a.createElement(a.a, {
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
			const u = Object(a.a)(e => {
				let {
					className: t,
					...s
				} = e;
				return o.a.createElement(i.a, l({}, s, {
					className: Object(r.a)(d.a.horizontalVotes, t),
					scoreClassName: Object(r.a)(d.a.customScoreStyles, s.scoreClassName),
					downvoteClassName: Object(i.b)(s) ? d.a.customDownvoteStyles : void 0
				}))
			});
			t.a = u
		},
		"./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return p
			})), s.d(t, "b", (function() {
				return b
			})), s.d(t, "f", (function() {
				return v
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "c", (function() {
				return O
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/icons/svgs/ClearFilled/index.tsx"),
				i = s("./src/reddit/icons/svgs/ModRemove/index.tsx"),
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
						t = a.a;
						break;
					case d.g.AuthorDeleted:
					case d.g.Author:
						t = c.b;
						break;
					case d.g.Moderator:
						t = i.a;
						break;
					default:
						t = a.a
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
			}), v = (e, t) => {
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
			}, _ = (e, t) => {
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
			}, E = (e, t, s) => {
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
			}, O = e => {
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
				a = s.n(r),
				i = s("./src/reddit/components/RichTextJson/index.tsx");
			t.a = e => {
				let {
					content: t,
					rtJsonElementProps: s
				} = e;
				return o.a.createElement("div", {
					className: a.a.optionalText
				}, o.a.createElement(i.a, {
					content: t,
					rtJsonElementProps: s
				}))
			}
		},
		"./src/reddit/components/MediumPost/MediumThumbnail.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/components/NotificationButton/index.tsx"),
				d = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				l = s("./src/reddit/components/Thumbnail/index.tsx"),
				u = s("./src/reddit/constants/posts.ts"),
				m = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				b = s("./src/reddit/hooks/useIsClient.ts"),
				f = s("./src/reddit/models/Subreddit/index.ts"),
				h = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				v = s("./src/reddit/components/MediumPost/index.m.less"),
				_ = s.n(v);
			t.a = e => {
				let {
					crosspost: t,
					post: s,
					forceShowNSFW: o,
					redditStyle: v,
					shouldShowSubscribeButton: E,
					subredditOrProfile: O,
					templatePlaceholderImage: x,
					shouldShowFollowButton: g,
					isFollowed: y,
					isCommentsPage: C,
					onFollowPostClick: k
				} = e;
				const S = Object(b.a)(),
					j = Object(a.e)(h.a);
				return S ? r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: Object(i.a)(_.a.thumbnailContainer, {
						[_.a.mShowingButtonOrOverflow]: g || E
					})
				}, r.a.createElement("div", {
					className: _.a.thumbnailContainerRow
				}, g && r.a.createElement(c.a, {
					isFilled: !!y,
					onClick: k,
					hasTooltip: !0,
					tooltipText: n.fbt._("Follow post to stay updated", null, {
						hk: "26UP9Z"
					})
				}), E && O && r.a.createElement(d.a, {
					className: _.a.subscribeButton,
					getEventFactory: e => Object(p.n)(s.id, e ? "unsubscribe" : "subscribe"),
					identifier: {
						name: O.name,
						type: Object(f.i)(O) ? u.a.PROFILE : u.a.SUBREDDIT
					},
					postId: s.id,
					small: !0,
					priority: j ? m.c.Secondary : void 0,
					isShredditParityEnabled: j
				})), r.a.createElement(l.b, {
					crosspost: t,
					isCommentsPage: C,
					post: s,
					redditStyle: v,
					forceShowNSFW: o,
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/ads/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/actions/post.ts"),
				l = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				m = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				p = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				b = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				f = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				h = s("./src/reddit/components/FlairWrapper/index.tsx"),
				v = s("./src/reddit/components/Flatlist/index.tsx"),
				_ = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				E = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				O = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				x = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				g = s("./src/reddit/components/ModModeReports/index.tsx"),
				y = s("./src/reddit/components/ModModeReports/helpers.ts"),
				C = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				k = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				S = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				j = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				w = s("./src/reddit/components/PostContainer/index.tsx"),
				N = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				R = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				P = s("./src/reddit/components/PostTitle/index.tsx"),
				I = s("./src/reddit/components/PostTopLine/index.tsx"),
				A = s("./src/reddit/components/PostTopMeta/index.tsx"),
				T = s("./src/reddit/components/SourceLink/index.tsx"),
				M = s("./src/reddit/constants/postLayout.ts"),
				D = s("./src/reddit/contexts/PageLayer/index.tsx"),
				L = s("./src/reddit/helpers/canRenderThumbnail.ts"),
				F = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				B = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				U = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				z = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				V = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				W = s.n(V),
				q = s("./src/reddit/hooks/useIsAvatarPost.ts"),
				G = s("./src/reddit/hooks/useIsOverlay.ts"),
				H = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				Q = s("./src/reddit/hooks/useUserContext.ts"),
				K = s("./src/reddit/models/Media/index.ts"),
				Y = s("./src/reddit/models/Post/index.ts"),
				Z = s("./src/reddit/models/Vote/index.ts"),
				X = s("./src/reddit/contexts/Post/index.tsx"),
				$ = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				J = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ee = s("./src/reddit/selectors/i18n/index.ts"),
				te = s("./src/reddit/selectors/moderatorPermissions.ts"),
				se = s("./src/reddit/selectors/modQueue.ts"),
				ne = s("./src/reddit/selectors/postFlair.ts"),
				oe = s("./src/reddit/selectors/posts.ts"),
				re = s("./src/reddit/selectors/user.ts"),
				ae = s("./src/reddit/components/MediumPost/index.m.less"),
				ie = s.n(ae),
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
			const le = () => Object(a.c)({
					isModQueueDisplayEnabled: e => Object(se.b)(e, !0),
					crosspost: oe.d,
					flairStyleTemplate: D.Y,
					isActive: oe.j,
					isBlurredPreview: J.b,
					isCurrentUserProfilePost: oe.l,
					isRecommendationPost: (e, t) => !!t.post.recommendationContext && Object(re.S)(e),
					moderatorPermissions: te.m,
					shouldShowNsfwListingBelow: ee.b,
					showEditFlair: ne.a,
					showMedia: D.t,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(te.i)(e, s.id)
					},
					isOptionalTextEnabled: $.a,
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
					isNightMode: re.fb
				}),
				ue = e => {
					const {
						className: t,
						crosspost: s,
						currentUser: a,
						eventFactory: D,
						flairStyleTemplate: V,
						hideNSFWPref: q,
						hostPostData: G,
						inSubredditOrProfile: Q = !1,
						isBlurredPreview: X,
						isCheckboxSelected: $,
						isCommentsPage: J,
						isCurrentUserProfilePost: ee,
						isFrontpage: te,
						isModWithUserNotesPermissions: se,
						isOverlay: ne,
						isRecommendationPost: oe,
						isTopicPage: re,
						isCommentCountAnimationEnabled: ae,
						isVoteCountAnimationEnabled: de,
						isCountAnimShadowTestEnabled: le,
						imageGalleryCurrentItem: ue,
						listingKey: me,
						moderatorPermissions: pe,
						modModeEnabled: be,
						onClickPost: fe,
						post: he,
						postId: ve,
						postIds: _e,
						redditStyle: Ee,
						shouldHideFlair: Oe,
						shouldShowNsfwListingBelow: xe,
						showBulkActionCheckbox: ge,
						showEditFlair: ye,
						showMedia: Ce,
						sendEvent: ke,
						subredditOrProfile: Se,
						toggleCheckbox: je,
						isAvatarPostEnabled: we,
						isOptionalTextEnabled: Ne,
						isModQueueDisplayEnabled: Re,
						showRealtimeUpdateAnimation: Pe,
						isUpdatedContent: Ie,
						isNightMode: Ae
					} = e, Te = Object(r.d)(), Me = e => e === Z.a.upvoted ? Te(Object(d.ib)(ve)) : Te(Object(d.v)(ve)), De = () => Te(Object(d.eb)(ve)), Le = Ee ? void 0 : V, Fe = Object(U.a)(pe), Be = be && Fe, Ue = Object(F.a)(pe), ze = Object(B.a)(pe), Ve = Object(x.a)(he), We = Object(y.c)(he), qe = !!(null == G ? void 0 : G.shouldShowLinkedPosts), Ge = xe, He = !Object(H.a)() && Object(L.a)(he), Qe = Q && !Ce && !qe && !Ge || we, Ke = Qe && !!he.source && !s, Ye = !(te && !!a || re) && !ee && (!Q || qe || Ge) || oe, Ze = (!Q || qe || Ge) && !he.isSponsored, Xe = Object(i.t)(he, ue), $e = !!(X && (null == Se ? void 0 : Se.isNSFW)), Je = Object(n.useRef)({
						renderingObjectInfo: he
					}), et = Object(Y.r)(he);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(w.b, {
						className: Object(c.a)(ie.a.container, t, W.a.largeAndMediumPostStyles, W.a.largeAndMediumActiveStyles, Object(z.a)(e), {
							[W.a.mUseRedditTheme]: e.redditStyle || e["data-redditstyle"],
							[ie.a.realtimeAnimation]: Pe,
							[ie.a.realtimeUpdated]: Ie,
							[ie.a.isNightMode]: Ae
						}),
						isOverlay: ne,
						style: Re && (Pe || Ie) ? Ae ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(z.b)(e.flairStyleTemplate),
						post: he,
						onClick: fe,
						eventFactory: D
					}, o.a.createElement(R.a, {
						model: he,
						handleVote: Me,
						showBulkActionCheckbox: ge,
						isCheckboxSelected: $,
						toggleCheckbox: je,
						flairStyleTemplate: Le,
						redditStyle: Ee,
						isVoteCountAnimation: de,
						isCountAnimShadowTestEnabled: le,
						postId: ve
					}), o.a.createElement(j.a, {
						className: Object(c.a)(ie.a.backgroundWrapper, {
							[ie.a.realtimeAnimation]: Pe,
							[ie.a.realtimeUpdated]: Ie,
							[ie.a.isNightMode]: Ae
						}),
						"data-click-id": "background",
						flairStyleTemplate: Le,
						post: he,
						redditStyle: Ee,
						overrideBackgroundColor: Re && (Pe || Ie) ? Ae ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, o.a.createElement(f.a, {
						post: he
					}), o.a.createElement("article", {
						className: ie.a.mainBody
					}, o.a.createElement("div", {
						className: ie.a.content,
						"data-click-id": "body"
					}, et && o.a.createElement(S.a, {
						content: he.recommendationContext.content,
						layout: M.g.Large,
						post: he
					}), o.a.createElement(I.a, {
						className: ie.a.postTopLine,
						hideNSFWPref: q,
						hostPostData: G,
						iconClassName: ie.a.postTopLineIcon,
						inSubredditOrProfile: Q,
						isCommentsPage: J,
						isCurrentUserProfilePost: ee,
						isModWithUserNotesPermissions: se,
						isOverlay: !!ne,
						isTopicPage: !!re,
						listingKey: me,
						post: he,
						shouldShowSubscribeButton: !1,
						showCornerOutboundLink: Ke,
						showSubreddit: Ze,
						showSubredditIcon: !0,
						subredditOrProfile: Se
					}), o.a.createElement(P.c, {
						className: ie.a.postTitle,
						post: he,
						redditStyle: Ee,
						size: P.b.Large,
						titleColor: Le && Le.postTitleColor,
						isOverlay: ne
					}), J && !Oe && he.flair && he.flair.length > 0 && o.a.createElement(h.a, {
						className: Object(c.a)(J && ie.a.leftPadding),
						disableFlair: !J,
						post: he,
						sendEvent: ke
					}), he.source && !he.isSponsored && !s && !$e && o.a.createElement(o.a.Fragment, null, o.a.createElement(T.a, {
						className: ie.a.sourceLink,
						isCommentsPage: J,
						post: he
					}), Ne && he.media && he.media.type !== K.o.TEXT && he.media.type !== K.o.IMAGE && he.media.richtextContent && o.a.createElement(_.a, {
						content: he.media.richtextContent,
						rtJsonElementProps: Je.current
					}))), !Qe && He && o.a.createElement(ce.a, {
						crosspost: s ? he : void 0,
						hasModPostPerms: Fe,
						isCommentsPage: J,
						isOverlay: ne,
						modModeEnabled: be,
						post: s || he,
						redditStyle: Ee,
						shouldShowSubscribeButton: Ye,
						subredditOrProfile: Se,
						templatePlaceholderImage: Le && Le.postPlaceholderImage
					})), Object(i.v)(he, ue) && o.a.createElement(u.a, {
						className: ie.a.adLinkWrapper
					}, o.a.createElement(m.a, {
						post: he,
						adLinkContent: Xe
					})), be && Fe && Ve && !Re && o.a.createElement("div", {
						className: ie.a.modModeBannerWrapper
					}, o.a.createElement(O.a, {
						thing: he
					})), be && Fe && We && !Re && o.a.createElement("div", {
						className: ie.a.modModeBannerWrapper
					}, o.a.createElement(g.a, {
						onIgnoreReports: De,
						reportable: he
					})), o.a.createElement(E.d, null), Re && o.a.createElement(k.a, {
						post: he
					}), o.a.createElement("div", {
						className: ie.a.flatlistContainer
					}, o.a.createElement(b.a, {
						className: ie.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: Le,
						redditStyle: Ee,
						model: he,
						onVoteClick: Me
					}), !he.isSurveyAd && (Re ? o.a.createElement(C.a, {
						content: he,
						listingKey: me,
						hostPostData: G
					}) : o.a.createElement(v.c, {
						currentUser: a,
						hasModFlairPerms: Ue,
						hasModFullPerms: ze,
						hasModPostPerms: Fe,
						hostPostData: G,
						isCommentCountAnimation: ae,
						isCountAnimShadowTestEnabled: le,
						isOverlay: !!ne,
						listingKey: me,
						modModeEnabled: be,
						onIgnoreReports: De,
						onOpenReportsDropdown: e => Te(Object(l.h)({
							tooltipId: e
						})),
						post: he,
						showEditFlair: ye,
						tooltipType: ne ? A.f.Lightbox : void 0,
						useFlatlistBreakpoints: Object(N.b)({
							editPost: !Be,
							save: !Be,
							hide: !1,
							report: !1,
							mute: !1
						})
					})))), te && o.a.createElement(p.a, {
						post: he,
						postIds: null != _e ? _e : [],
						subredditId: null == Se ? void 0 : Se.id
					})))
				};
			t.default = Object(X.b)(o.a.memo((function(e) {
				const t = Object(n.useMemo)(() => le(), []),
					s = Object(r.e)(s => t(s, e), r.c),
					a = Object(q.a)(e.post),
					i = Object(Q.a)();
				return o.a.createElement(ue, de({}, e, s, {
					modModeEnabled: i.modModeEnabled,
					hideNSFWPref: i.prefs.hideNSFW,
					isOverlay: Object(G.a)(),
					isAvatarPostEnabled: a
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
				return c
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.m.less"),
				i = s.n(a);
			const c = e => {
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
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/models/ModQueueTrigger/index.ts"),
				l = s("./src/reddit/components/RichTextJson/index.tsx"),
				u = s("./src/reddit/constants/things.ts"),
				m = s("./src/reddit/selectors/telemetry.ts");
			const p = e => t => ({
					source: "moderator",
					action: "click",
					noun: e.isCorrect ? "filter_is_correct" : "filter_is_incorrect",
					...b(e, t)
				}),
				b = (e, t) => {
					const s = e.contentId.startsWith(u.a) ? e.contentId : "",
						n = e.contentId.startsWith(u.b) ? e.contentId : "";
					return {
						comment: s ? Object(m.i)({
							state: t,
							commentId: s
						}) : null,
						post: n ? Object(m.L)(t, n) : null,
						filter: {
							reference: {
								name: e.filterName
							}
						},
						subreddit: Object(m.pb)(t, e.contentId),
						...m.p(t)
					}
				};
			var f = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				h = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/constants/localStorage.ts")),
				v = s("./src/reddit/hooks/useLocalStorage.ts"),
				_ = s("./src/reddit/hooks/useUserContext.ts");
			const E = () => {
				var e, t;
				const s = `${null!==(t=null===(e=Object(_.a)().currentUser)||void 0===e?void 0:e.id)&&void 0!==t?t:""}-${h.b.SAFETY_FILTER_FEEDBACK_CONTENT_IDS}`,
					[n, o] = Object(v.a)(s, []);
				return {
					contentIds: new Set(n),
					addContentId: e => {
						const t = [...n, e];
						t.length > 50 && t.shift(), o(t)
					}
				}
			};
			var O = s("./src/reddit/hooks/useTracking.ts");
			const x = {
				threshold: [.5]
			};
			var g = e => {
					const t = Object(n.useRef)(null),
						s = Object(O.a)(),
						{
							contentIds: r
						} = E(),
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
					return Object(f.a)(t, a, x), o.a.createElement("div", {
						ref: t
					}, e.children)
				},
				y = s("./src/reddit/constants/experiments.ts"),
				C = s("./src/reddit/hooks/useExperimentVariant.ts"),
				k = s("./src/reddit/hooks/useMounted.ts"),
				S = s("./src/reddit/components/ModQueueActionBar/helpers.ts"),
				j = s("./node_modules/lodash/debounce.js"),
				w = s.n(j),
				N = s("./src/reddit/components/InfoTextTooltip/Hooked.tsx"),
				R = s("./src/reddit/hooks/useInfoTextTooltip.ts");
			const P = e => {
				let {
					confidence: t,
					children: s
				} = e;
				const n = Object(R.a)({
						placement: "top-end"
					}),
					i = w()(n.hide, 500);
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
						"bg-alert-caution": t === d.a.LOW,
						"bg-success-background": t === d.a.HIGH
					})
				}), function(e) {
					switch (e) {
						case d.a.LOW:
							return r.fbt._("Low Confidence", null, {
								hk: "1woV5A"
							});
						case d.a.HIGH:
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
				}, o.a.createElement(c.a, {
					name: "info_fill"
				}), o.a.createElement("div", null, s))))
			};
			var I = s("./src/reddit/components/TrackingHelper/index.tsx"),
				A = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/SafetyFilterFeedbackPrompt.m.less"),
				T = s.n(A);
			const M = e => {
				let {
					filterName: t,
					contentId: s
				} = e;
				const a = Object(I.b)(),
					{
						addContentId: i
					} = E(),
					[c, d] = Object(n.useState)(!1),
					l = e => t => {
						t.stopPropagation(), i(s), d(!0), a(e)
					};
				return o.a.createElement("div", {
					className: T.a.feedbackPromptContainer
				}, o.a.createElement("p", {
					className: T.a.feedbackPrompt
				}, c ? r.fbt._("Thanks for your feedback!", null, {
					hk: "3ImVsP"
				}) : r.fbt._("Was this accurate?", null, {
					hk: "370juX"
				})), !c && o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
					"aria-label": "feedback response yes",
					className: T.a.feedbackPromptButton,
					onClick: l(p({
						isCorrect: !0,
						filterName: t,
						contentId: s
					}))
				}, r.fbt._("Yes", null, {
					hk: "QULVC"
				})), o.a.createElement("span", {
					className: T.a.feedbackButtonMiddot
				}, "·"), o.a.createElement("button", {
					"aria-label": "feedback response no",
					className: T.a.feedbackPromptButton,
					onClick: l(p({
						isCorrect: !1,
						filterName: t,
						contentId: s
					}))
				}, r.fbt._("No", null, {
					hk: "4zGto5"
				}))))
			};
			var D = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				L = s.n(D);
			const F = e => {
					if (e) try {
						return JSON.parse(e)
					} catch {
						return
					}
				},
				B = e => {
					let {
						reasonRichText: t,
						reason: s,
						feedbackPrompt: n
					} = e;
					const a = Object(k.a)();
					if (n) {
						if (!a) return o.a.createElement("p", {
							className: L.a.reasonText
						}, r.fbt._("Loading filter reason…", null, {
							hk: "K3Ipd"
						}));
						if (!n.feedbackSent) return o.a.createElement(g, n, o.a.createElement(M, n))
					}
					return t ? o.a.createElement(l.b, {
						content: t,
						rtJsonElementProps: {}
					}) : s ? o.a.createElement("p", {
						className: L.a.reasonText
					}, s) : null
				},
				U = e => {
					let {
						content: t
					} = e;
					const s = Object(C.a)(y.ue) === y.Zd,
						{
							contentIds: u
						} = E(),
						m = Object(n.useMemo)(() => {
							var e, n, o, a, c, l;
							const m = [];
							(null === (e = t.modQueueTriggers) || void 0 === e ? void 0 : e.length) || t.bannedBy !== i.l || m.push({
								icon: "bot_fill",
								heading: r.fbt._("Blocked by AutoMod", null, {
									hk: "XZuzM"
								})
							});
							for (const i of t.modQueueTriggers || []) switch (i.type) {
								case d.b.AUTOMOD:
									m.push({
										icon: "bot_fill",
										heading: r.fbt._("Blocked by AutoMod", null, {
											hk: "XZuzM"
										}),
										reason: i.message
									});
									break;
								case d.b.SHADOWBANNED_SUBMITTER:
									m.push({
										icon: "ban_fill",
										heading: r.fbt._("Blocked by Automatic Filter", null, {
											hk: "2iaUCM"
										}),
										reason: i.message
									});
									break;
								case d.b.HATEFUL_CONTENT:
									m.push({
										icon: "mod_mode_fill",
										heading: s ? r.fbt._("Blocked for Harassment", null, {
											hk: "1FQFpi"
										}) : r.fbt._("Blocked by Automatic Filter", null, {
											hk: "4vu7uy"
										}),
										reason: i.message,
										feedbackPrompt: s ? {
											filterName: S.b.HarassingContent,
											feedbackSent: u.has(t.id),
											contentId: t.id
										} : void 0
									});
									break;
								case d.b.CROWD_CONTROL:
									m.push({
										icon: "crowd_control",
										heading: r.fbt._("Blocked by Crowd Control", null, {
											hk: "6LNvT"
										}),
										reason: i.message
									});
									break;
								case d.b.BAN_EVASION:
									m.push({
										icon: "ban_fill",
										heading: r.fbt._("Blocked by Ban Evasion Protection", null, {
											hk: "1unYu9"
										}),
										reason: i.message,
										reasonRichText: F(null === (o = null === (n = i.details) || void 0 === n ? void 0 : n.recencyExplanation) || void 0 === o ? void 0 : o.richtext),
										confidence: null === (a = i.details) || void 0 === a ? void 0 : a.confidence,
										confidenceExplanation: F(null === (l = null === (c = i.details) || void 0 === c ? void 0 : c.confidenceExplanation) || void 0 === l ? void 0 : l.richtext)
									})
							}
							return m
						}, [t.modQueueTriggers, t.bannedBy, t.id, s]);
					return o.a.createElement("div", {
						className: L.a.filteredWrapper
					}, m.map((e, t) => {
						const {
							heading: s,
							reason: n,
							icon: r,
							confidence: i,
							confidenceExplanation: d
						} = e;
						return o.a.createElement("div", {
							key: `${s}-${n}-${t}`,
							className: L.a.filteredRow
						}, o.a.createElement(c.a, {
							isFilled: !0,
							name: r,
							className: Object(a.a)(L.a.coloredIcon, L.a.icon)
						}), o.a.createElement("div", {
							className: L.a.statusText
						}, o.a.createElement("div", {
							className: L.a.statusMeta
						}, o.a.createElement("p", {
							className: L.a.status
						}, s), i && d && o.a.createElement(P, {
							confidence: i
						}, o.a.createElement(l.b, {
							className: L.a.tooltipContent,
							content: d,
							rtJsonElementProps: {}
						}))), o.a.createElement(B, e)))
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
				return d
			}));
			var n, o, r = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/helpers/isPost.ts"),
				i = s("./src/reddit/models/Post/index.ts"),
				c = s("./src/reddit/components/ModModeFilteredReason/helpers.ts");
			! function(e) {
				e.UNMODERATED = "UNMODERATED", e.APPROVED = "APPROVED", e.REMOVED = "REMOVED", e.SPAM = "SPAM", e.REPORTED = "REPORTED", e.FILTERED = "FILTERED"
			}(n || (n = {})),
			function(e) {
				e.HarassingContent = "harassing_content"
			}(o || (o = {}));
			const d = e => e.isRemoved && (!e.bannedBy || e.bannedBy === r.l) || !e.isRemoved && Object(c.a)(e) ? n.FILTERED : e.isRemoved || Object(a.b)(e) && [i.g.AntiEvilOps, i.g.CommunityOps, i.g.ContentTakedown, i.g.CopyrightTakedown, i.g.Reddit].indexOf(e.removedByCategory) > -1 ? n.REMOVED : e.isSpam ? n.SPAM : (e.numReports || 0) > 0 ? n.REPORTED : e.isApproved ? n.APPROVED : n.UNMODERATED
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
				return Te
			}));
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/constants/index.ts"),
				c = s("./src/reddit/actions/modQueue/realtime.ts"),
				d = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				l = s("./src/reddit/components/ReportFlow/new.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				p = s("./src/reddit/helpers/isPost.ts"),
				b = s("./src/reddit/helpers/trackers/modTools.ts"),
				f = s("./src/reddit/helpers/trackers/post.ts"),
				h = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				v = s("./src/reddit/hooks/useTracking.ts"),
				_ = s("./src/reddit/icons/fonts/index.tsx"),
				E = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/reddit/actions/comment/moderation.ts"),
				x = s("./src/reddit/actions/modal.ts"),
				g = s("./src/reddit/actions/post.ts"),
				y = s("./src/reddit/actions/postFlair.ts"),
				C = s("./src/reddit/actions/removalReasons/index.ts"),
				k = s("./src/reddit/selectors/activeModal.ts"),
				S = s("./src/reddit/selectors/moderatorPermissions.ts"),
				j = s("./src/reddit/components/ModQueueActionBar/helpers.ts"),
				w = s("./src/reddit/components/ModQueueActionBar/index.m.less"),
				N = s.n(w),
				R = s("./src/lib/classNames/index.ts"),
				P = s("./src/lib/constants/icons.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				A = s("./src/reddit/actions/reportFlow/index.ts"),
				T = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				M = s("./src/reddit/components/OverflowMenu/index.tsx"),
				D = s("./src/reddit/constants/modals.ts"),
				L = s("./src/reddit/controls/Dropdown/Row.tsx"),
				F = s("./src/reddit/helpers/correlationIdTracker.ts"),
				B = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				U = s("./src/reddit/helpers/trackers/gild.ts"),
				z = s("./src/reddit/selectors/comments.ts"),
				V = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				q = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				G = s("./src/devPlatform/constants.ts");
			const H = (e, t) => Object(b.c)(t, e),
				Q = (e, t) => e ? t ? n.fbt._("Unlock Comments", null, {
					hk: "zGuti"
				}) : n.fbt._("Lock Comments", null, {
					hk: "1QO9cp"
				}) : t ? n.fbt._("Unlock thread", null, {
					hk: "SqzQU"
				}) : n.fbt._("Lock thread", null, {
					hk: "3drB04"
				});
			var K = e => {
					let {
						content: t,
						hostPostData: s,
						listingKey: c,
						moderatorPermissions: d
					} = e;
					var l, u;
					const m = Object(v.a)(),
						h = Object(a.d)(),
						E = Object(p.b)(t),
						y = Object(a.e)(W.k),
						C = Object(a.e)(W.P),
						k = Object(a.e)(V.b),
						S = Object(B.a)(d),
						j = E ? f.n : H,
						w = t.authorId === y,
						K = C && w,
						Y = (null === (l = t.distinguishType) || void 0 === l ? void 0 : l.toLowerCase()) === i.I.ADMIN,
						Z = (null === (u = t.distinguishType) || void 0 === u ? void 0 : u.toLowerCase()) === i.I.MODERATOR,
						X = Object(o.useCallback)(() => {
							const e = E ? g.D : O.c;
							h(e(t.id));
							const s = t.isLocked ? "unlock" : "lock";
							m(E ? j(t.id, s) : Object(b.j)(t.id, s, "mod_menu"))
						}, [j, m, h, t, E]),
						$ = Object(o.useCallback)(e => {
							m(Object(f.n)(t.id, e, "post", c, s, void 0))
						}, [m, c, s, t]),
						J = Object(o.useCallback)(() => {
							var e;
							const s = t.isStickied ? "unsticky" : "sticky";
							E ? (h(Object(g.gb)(t.id)), m(Object(b.n)(s, t.id))) : (h(Object(O.b)(t.id, (null === (e = t.distinguishType) || void 0 === e ? void 0 : e.toLowerCase()) || "", !t.isStickied)), m(Object(b.j)(t.id, s, "mod_menu")))
						}, [m, h, t, E]),
						ee = Object(o.useCallback)(() => {
							E && (h(Object(g.I)(t.id)), m(Object(b.n)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [m, h, t, E]),
						te = Object(o.useCallback)(() => {
							E && (h(Object(g.F)(t.id)), Object(b.n)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [h, t, E]),
						se = Object(o.useCallback)(() => {
							E && (h(Object(x.i)(D.a.CROWD_CONTROL)), h(Object(g.t)(t.id)))
						}, [h, t, E]),
						ne = Object(a.e)(e => Object(z.m)(e, {
							commentId: t.id
						})),
						oe = Object(o.useCallback)(() => {
							const e = E ? t.permalink : ne;
							e && (h(Object(g.C)(e)), E ? $("copy") : m(Object(b.j)(t.id, "share", "mod_menu")))
						}, [$, h, t, E, ne, m]),
						re = Object(o.useCallback)(async () => {
							if (!E) return;
							const e = Object(F.d)(F.a.GildingFlow, !0);
							h(Object(I.d)({
								awardId: null == k ? void 0 : k.id,
								correlationId: e,
								thingId: t.id
							})), m(Object(U.clickGildEvent)(t.id))
						}, [m, h, t, k, E]),
						ae = Object(o.useCallback)(() => {
							h(Object(A.c)(t.id)), E ? $("report") : m(Object(b.j)(t.id, "report", "mod_menu"))
						}, [$, h, t, E, m]),
						ie = Object(o.useCallback)(() => {
							var e;
							E && (h(Object(g.db)(t.id, !t.hidden, !1, !0)), $((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [$, h, t, E]),
						ce = Object(o.useCallback)(() => {
							const e = E ? g.S : O.e;
							h(e(t.id, !0)), m(E ? Object(b.n)("spam", t.id) : Object(b.j)(t.id, "remove_as_spam", "mod_menu"))
						}, [m, h, t, E]),
						de = Object(o.useCallback)(e => {
							const s = E ? g.u : O.b;
							h(s(t.id, e));
							const n = e === i.I.ADMIN ? "distinguish_as_admin" : e === i.I.MODERATOR ? "distinguish_as_mod" : "undistinguish";
							m(Object(b.j)(t.id, n, "mod_menu"))
						}, [h, t, E, m]);
					return r.a.createElement(M.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: N.a.overflowButton,
						icon: r.a.createElement(_.a, {
							name: P.a.overflow_horizontal,
							isFilled: !0
						})
					}, r.a.createElement("h6", {
						className: Object(R.a)("text-neutral-content-weak", N.a.overflowHeading)
					}, n.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ce
					}, r.a.createElement(_.a, {
						name: P.a.spam
					})), E && r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						displayText: t.isStickied ? n.fbt._("Unsticky Post", null, {
							hk: "3Y6DOH"
						}) : n.fbt._("Sticky Post", null, {
							hk: "RNgCH"
						}),
						onClick: J
					}, r.a.createElement(_.a, {
						name: t.isStickied ? P.a.unpin : P.a.pin
					}))), r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						onClick: X,
						displayText: Q(E, !!(null == t ? void 0 : t.isLocked))
					}, r.a.createElement(_.a, {
						name: P.a.lock,
						isFilled: null == t ? void 0 : t.isLocked
					})), w && r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						displayText: Z ? n.fbt._("Undistinguish as a mod", null, {
							hk: "2Nmjxw"
						}) : n.fbt._("Distinguish as a mod", null, {
							hk: "35wmCr"
						}),
						onClick: () => de(Z ? "" : i.I.MODERATOR)
					}, r.a.createElement(_.a, {
						name: Z ? P.a.distinguish_fill : P.a.distinguish
					})), K && r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						displayText: Y ? n.fbt._("Undistinguish as an admin", null, {
							hk: "BHAJd"
						}) : n.fbt._("Distinguish as an admin", null, {
							hk: "3gaPvB"
						}),
						onClick: () => de(Y ? "" : i.I.ADMIN)
					}, r.a.createElement(_.a, {
						name: Y ? P.a.distinguish_fill : P.a.distinguish
					})), !E && (Y || Z) && w && r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						displayText: t.isStickied ? n.fbt._("Unsticky the comment", null, {
							hk: "18TByd"
						}) : n.fbt._("Sticky the comment", null, {
							hk: "3roZIi"
						}),
						onClick: J
					}, r.a.createElement(_.a, {
						name: t.isStickied ? P.a.unpin : P.a.pin
					})), E && !t.crosspostParentId && r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						onClick: ee,
						displayText: t.isOriginalContent ? n.fbt._("Remove OC Mark", null, {
							hk: "1R9sR"
						}) : n.fbt._("Mark as OC", null, {
							hk: "31GUJ2"
						})
					}, r.a.createElement(_.a, {
						name: P.a.original
					})), E && r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						onClick: te,
						displayText: t.isNSFW ? n.fbt._("Mark as SFW", null, {
							hk: "rvDBl"
						}) : n.fbt._("Mark as NSFW", null, {
							hk: "1q4nut"
						})
					}, r.a.createElement(_.a, {
						name: P.a.nsfw
					})), E && S && "subreddit" === t.belongsTo.type && r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Adjust crowd control", null, {
							hk: "4Drg85"
						}),
						onClick: se
					}, r.a.createElement(_.a, {
						name: P.a.crowd_control
					})), r.a.createElement(q.a, {
						contextType: Object(p.a)(t.id) ? G.a.POST : G.a.COMMENT,
						contextData: t,
						moderator: !0,
						isOnModQueueOverflowMenu: !0
					}), r.a.createElement("h6", {
						className: Object(R.a)("text-neutral-content-weak", N.a.overflowHeading)
					}, n.fbt._("Other", null, {
						hk: "2543kN"
					})), r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Share", null, {
							hk: "3L9n7l"
						}),
						onClick: oe
					}, r.a.createElement(_.a, {
						name: P.a.share
					})), E && r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						onClick: re,
						displayText: n.fbt._("Award", null, {
							hk: "4hkt8T"
						})
					}, r.a.createElement(_.a, {
						name: P.a.award
					}), r.a.createElement(T.a, {
						postOrComment: t,
						tooltipId: `modqueue-item-award-${t.id}`
					})), r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Report", null, {
							hk: "1FAnQb"
						}),
						onClick: ae
					}, r.a.createElement(_.a, {
						name: P.a.report
					})), E && r.a.createElement(L.b, {
						className: N.a.dropdownRow,
						onClick: ie,
						displayText: t.hidden ? n.fbt._("Unhide", null, {
							hk: "3L7lXA"
						}) : n.fbt._("Hide", null, {
							hk: "19RA4b"
						})
					}, r.a.createElement(_.a, {
						name: P.a.hide
					})), r.a.createElement(q.a, {
						contextType: Object(p.a)(t.id) ? G.a.POST : G.a.COMMENT,
						contextData: t,
						moderator: !1,
						isOnModQueueOverflowMenu: !0
					}))
				},
				Y = s("./src/reddit/helpers/trackers/modListing.ts"),
				Z = s("./src/config.ts"),
				X = s("./src/reddit/components/UserIcon/index.tsx"),
				$ = s("./src/reddit/helpers/name/index.ts"),
				J = s("./src/reddit/constants/intlSupport.ts"),
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
						c = new Date(a * i.Xb);
					if (!J.a) return r.a.createElement(r.a.Fragment, null, c.toLocaleString());
					const d = new Intl.DateTimeFormat(o, {
							month: "short",
							day: "numeric",
							year: se(c) ? void 0 : "numeric"
						}),
						l = new Intl.DateTimeFormat(o, {
							minute: "numeric",
							hour: "numeric"
						}),
						u = function(e) {
							const t = new Date(Date.now());
							return t.getFullYear() === e.getFullYear() && t.getMonth() === e.getMonth() && t.getDate() === e.getDate()
						}(c) ? n.fbt._("Today", null, {
							hk: "1sZpnp"
						}) : d.format(c),
						m = l.format(c);
					return n.fbt._("{date} at {time}", [n.fbt._param("date", u), n.fbt._param("time", m)], {
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
				var o, a, i, c, d;
				const l = (null === (o = s.moderatorInfo) || void 0 === o ? void 0 : o.displayName) || "",
					u = (null === (i = null === (a = s.moderatorInfo) || void 0 === a ? void 0 : a.icon) || void 0 === i ? void 0 : i.url) || "",
					m = !!(null === (d = null === (c = s.moderatorInfo) || void 0 === c ? void 0 : c.profile) || void 0 === d ? void 0 : d.isNsfw),
					b = Object(p.a)(n);
				return r.a.createElement("div", {
					className: Object(R.a)(t, ae.a.row)
				}, r.a.createElement("div", {
					className: ae.a.userIconWrapper
				}, r.a.createElement(X.a, {
					className: ae.a.userIcon,
					iconUrl: u,
					userName: l,
					isNSFW: m
				})), r.a.createElement("div", {
					className: ae.a.details
				}, r.a.createElement("h3", {
					className: ae.a.title
				}, Object(oe.a)(s.action, b ? "SubredditPost" : "")), r.a.createElement("p", {
					className: ae.a.meta
				}, r.a.createElement("a", {
					className: ae.a.userlink,
					href: `${Z.a.redditUrl}/user/${l}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(l)))), r.a.createElement("span", {
					className: ae.a.time
				}, r.a.createElement(ne, {
					date: s.createdAt
				})))
			};
			var ce = e => {
				let {
					className: t,
					reportAction: s
				} = e;
				return r.a.createElement("div", {
					className: Object(R.a)(t, ae.a.row)
				}, r.a.createElement(_.a, {
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
			var de = e => {
					const t = Object(a.e)(t => {
						var s, n;
						const o = null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[e.postOrCommentId];
						if (o && o.length) return o.map(e => {
							var s, n;
							return null === (n = null === (s = null == t ? void 0 : t.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.models[e]
						})
					});
					return t ? r.a.createElement("div", {
						className: Object(R.a)(e.className, ae.a.wrapper)
					}, r.a.createElement("h2", {
						className: ae.a.wrapperTitle
					}, n.fbt._("Recent actions", null, {
						hk: "PAtYM"
					})), t.map(t => "ModAction" === (null == t ? void 0 : t.__typename) ? r.a.createElement(ie, {
						modAction: t,
						key: t.id,
						postOrCommentId: e.postOrCommentId
					}) : "ReportAction" === (null == t ? void 0 : t.__typename) ? r.a.createElement(ce, {
						reportAction: t,
						key: t.id
					}) : null)) : null
				},
				le = s("./src/reddit/components/HumanDate/index.tsx"),
				ue = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/StatusDisplay.m.less"),
				me = s.n(ue);
			const pe = e => {
				let {
					content: t
				} = e;
				var s;
				const o = (null == t ? void 0 : t.approvedBy) || "",
					i = Object(a.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(W.Db)(e, {
						userName: o
					}) : null),
					c = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: me.a.userIconWrapper
				}, r.a.createElement(X.a, {
					className: Object(R.a)(me.a.userIcon),
					iconUrl: null == i ? void 0 : i.accountIcon,
					userName: o,
					isNSFW: !!(null == i ? void 0 : i.isNSFW)
				})), r.a.createElement("div", {
					className: me.a.statusText
				}, r.a.createElement("p", {
					className: me.a.status
				}, n.fbt._("Approved", null, {
					hk: "4d15LY"
				})), r.a.createElement("p", null, r.a.createElement("a", {
					className: me.a.userlink,
					href: `${Z.a.redditUrl}/user/${o}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(o)), c && r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(le.d, {
					seconds: c
				})))))
			};
			var be = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/FilteredStatusDisplay.tsx"),
				fe = s("./src/reddit/components/InfoBanners/PostRemovalBanner/helpers.tsx"),
				he = s("./src/reddit/selectors/subreddit.ts");
			const ve = e => {
				let {
					content: t
				} = e;
				var s;
				const o = Object(a.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(W.Db)(e, {
						userName: null == t ? void 0 : t.bannedBy
					}) : null),
					i = Object(p.b)(t),
					c = Object(a.e)(e => Object(he.X)(e, {
						subredditId: i ? t.belongsTo.id : t.subredditId
					})),
					d = Object(a.e)(e => {
						var t, s, n, o;
						return (null === (s = null === (t = e.user) || void 0 === t ? void 0 : t.account) || void 0 === s ? void 0 : s.isAdmin) || (null === (o = null === (n = e.user) || void 0 === n ? void 0 : n.account) || void 0 === o ? void 0 : o.isEmployee)
					}),
					l = i && t.removedByCategory ? t.removedByCategory : null,
					u = l ? Object(fe.b)(l) : "clear_fill",
					m = t.bannedAtUTC ? (null === (s = t.bannedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.bannedAtUTC / 1e3 : t.bannedAtUTC : null,
					b = ![E.g.AntiEvilOps, E.g.CommunityOps, E.g.ContentTakedown, E.g.CopyrightTakedown, E.g.Reddit].includes(l) || d;
				return r.a.createElement(r.a.Fragment, null, o && b ? r.a.createElement("div", {
					className: me.a.userIconWrapper
				}, r.a.createElement(X.a, {
					className: Object(R.a)(me.a.userIcon),
					iconUrl: o.accountIcon,
					userName: o.username,
					isNSFW: o.isNSFW
				})) : r.a.createElement(_.a, {
					isFilled: !0,
					name: u,
					className: Object(R.a)(me.a.coloredIcon, me.a.icon)
				}), r.a.createElement("div", {
					className: me.a.statusText
				}, r.a.createElement("p", {
					className: me.a.status
				}, n.fbt._("Removed{spam}{reason}", [n.fbt._param("spam", t.isSpam ? " as spam" : ""), n.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), r.a.createElement("p", null, b && (null == o ? void 0 : o.username) ? r.a.createElement(r.a.Fragment, null, r.a.createElement("a", {
					className: me.a.userlink,
					href: `${Z.a.redditUrl}/user/${o.username}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object($.e)(o.username)), m && r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(le.d, {
					seconds: m
				}))) : l && Object(fe.e)(l, (null == o ? void 0 : o.username) || null, c.name))))
			};
			var _e = s("./src/reddit/components/Reports/SnoozableReport/index.tsx"),
				Ee = s("./src/reddit/components/RestrictedFlatlistButton/index.tsx"),
				Oe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				xe = s("./src/reddit/icons/fonts/helpers.tsx");
			s("./src/reddit/icons/fonts/Admin/index.tsx"), s("./src/reddit/icons/fonts/Approve/index.tsx"), s("./src/reddit/icons/fonts/Archived/index.tsx"), s("./src/reddit/icons/fonts/Calendar/index.tsx"), s("./src/reddit/icons/fonts/Clock/index.tsx"), s("./src/reddit/icons/fonts/Clear/index.tsx"), s("./src/reddit/icons/fonts/Coin/index.tsx"), s("./src/reddit/icons/fonts/Comment/index.tsx"), s("./src/reddit/icons/fonts/DistinguishShield/index.tsx"), s("./src/reddit/icons/fonts/Downvote/index.tsx"), s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"), s("./src/reddit/icons/fonts/Envelope/index.tsx"), s("./src/reddit/icons/fonts/Expand/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Collapse/index.tsx"), s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.tsx"), s("./src/reddit/icons/fonts/Gift/index.tsx");
			var ge = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx");
			s("./src/reddit/icons/fonts/Info/index.tsx"), s("./src/reddit/icons/fonts/Live/index.tsx"), s("./src/reddit/icons/fonts/Lock/index.tsx");
			s("./src/reddit/icons/fonts/ModActions/index.tsx"), s("./src/reddit/icons/fonts/ModSettings/index.tsx");
			var ye = s("./src/reddit/icons/fonts/Op/index.m.less"),
				Ce = s.n(ye),
				ke = s("./src/lib/lessComponent.tsx");
			ke.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(xe.b)("author",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(xe.a, null, e.desc)), "OpIcon", Ce.a), s("./src/reddit/icons/fonts/OutboundLink/index.tsx"), s("./src/reddit/icons/fonts/Pencil/index.tsx");
			var Se = s("./src/reddit/icons/fonts/Photos/index.m.less"),
				je = s.n(Se);
			ke.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(xe.b)("image_post",e.isFilled)} ${e.className}`
			}), "PhotoIcon", je.a), s("./src/reddit/icons/fonts/Premium/index.tsx"), s("./src/reddit/icons/fonts/Remove/index.tsx");
			var we = s("./src/reddit/icons/fonts/Report/index.tsx"),
				Ne = (s("./src/reddit/icons/fonts/Share/index.tsx"), s("./src/reddit/icons/fonts/Spam/index.tsx"), s("./src/reddit/icons/fonts/Sticky/index.tsx"), s("./src/reddit/icons/fonts/Tag/index.tsx"), s("./src/reddit/icons/fonts/Text/index.m.less")),
				Re = s.n(Ne);
			ke.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(xe.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", Re.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const Pe = e => {
					let {
						content: t
					} = e;
					const s = Object(Oe.b)(),
						i = Object(a.d)(),
						c = Object(o.useCallback)(() => {
							const e = Object(p.a)(t.id),
								n = e ? g.eb : O.g,
								o = t.ignoreReports ? "restore_reports" : "ignore_reports",
								r = e ? Object(b.l)(o, t.id) : Object(b.k)(o, t.id);
							i(n(t.id)), s(r)
						}, [t.id, t.ignoreReports, s, i]),
						d = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(_.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(R.a)(me.a.coloredIcon, me.a.icon)
					}), r.a.createElement("div", {
						className: me.a.reportedWrapper
					}, !!t.modReports.length && r.a.createElement("div", {
						className: me.a.statusText
					}, r.a.createElement("p", {
						className: me.a.status
					}, n.fbt._({
						"*": "{number of reports} Mod Reports",
						_1: "1 Mod Report"
					}, [n.fbt._plural(t.modReports.length, "number of reports")], {
						hk: "P5w8P"
					})), t.modReports.map((e, t) => {
						let [s, n] = e;
						return r.a.createElement("p", {
							key: `${s}-${n}-${t}`
						}, Object($.e)(n), ": ", s)
					})), !!t.userReports.length && r.a.createElement("div", {
						className: me.a.statusText
					}, r.a.createElement("div", {
						className: me.a.reportMeta
					}, r.a.createElement("p", {
						className: me.a.status
					}, n.fbt._({
						"*": "{number of reports} Reports",
						_1: "1 Report"
					}, [n.fbt._plural(t.userReports.reduce((e, t) => {
						let [, s] = t;
						return s + e
					}, 0), "number of reports")], {
						hk: "1l1xMH"
					})), !d && r.a.createElement(Ee.c, {
						className: me.a.ignoreButton,
						onClick: c,
						text: t.ignoreReports ? n.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : n.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? r.a.createElement(we.a, {
						className: me.a.ignoreButtonIcon
					}) : r.a.createElement(ge.a, {
						className: me.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, o, a, i] = e;
						return n ? void 0 !== a && i ? r.a.createElement(_e.a, {
							key: `user-${n}`,
							reason: n,
							amount: o,
							reportedThingId: t.id,
							isSnoozed: a,
							useNewFormat: !0,
							className: me.a.snoozabledButton,
							dropdownClassName: me.a.snoozableDropdown,
							iconClassName: me.a.snoozeIcon
						}) : r.a.createElement("p", {
							key: `user-${n}`
						}, n, " (", o, ")") : null
					}))))
				},
				Ie = e => {
					let {
						content: t
					} = e;
					const s = Object(j.c)(t),
						n = Object(o.useMemo)(() => {
							switch (s) {
								case j.a.APPROVED:
									return r.a.createElement(pe, {
										content: t
									});
								case j.a.REMOVED:
								case j.a.SPAM:
									return r.a.createElement(ve, {
										content: t
									});
								case j.a.FILTERED:
									return r.a.createElement(be.a, {
										content: t
									});
								case j.a.REPORTED:
									return r.a.createElement(Pe, {
										content: t
									});
								default:
									return r.a.createElement(o.Fragment, null)
							}
						}, [s, t]),
						[i, c] = Object(o.useState)(!1),
						d = Object(v.a)(),
						l = Object(o.useCallback)(e => {
							var n;
							e.stopPropagation(), c(!i), d(Object(Y.e)((null === (n = t.belongsTo) || void 0 === n ? void 0 : n.id) || t.subredditId, s, Object(p.a)(t.id), !i))
						}, [d, t, i, c, s]),
						u = Object(a.e)(e => {
							var s, n;
							return !!(null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[t.id])
						});
					return s === j.a.UNMODERATED ? null : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(R.a)(me.a.wrapper, {
							[me.a.approved]: s === j.a.APPROVED,
							[me.a.reported]: s === j.a.REPORTED,
							[me.a.opened]: i,
							[me.a.openable]: u
						}),
						onClick: u ? l : void 0
					}, n, u && r.a.createElement("button", {
						className: me.a.caretButton
					}, r.a.createElement(_.a, {
						name: i ? P.a.caret_up : P.a.caret_down,
						className: me.a.caretIcon
					}))), u && i && r.a.createElement(de, {
						className: me.a.previousActions,
						postOrCommentId: t.id
					}))
				},
				Ae = (e, t) => Object(b.c)(t, e),
				Te = e => {
					let {
						content: t,
						listingKey: s,
						hostPostData: b
					} = e;
					const w = Object(v.a)(),
						R = Object(a.d)(),
						P = Object(j.c)(t),
						I = Object(a.e)(k.b),
						A = Object(p.b)(t),
						T = Object(a.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						M = Object(a.e)(e => Object(S.m)(e, {
							postId: t.id
						})),
						D = Object(m.a)(M),
						[L, F] = Object(o.useState)(!1),
						B = Object(a.e)(e => {
							var s, n;
							return null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.realtimeModqueue) || void 0 === n ? void 0 : n.toUpdate.includes(t.id)
						}),
						U = Object(o.useRef)(null),
						z = Object(o.useCallback)(e => {
							e.forEach(e => {
								const {
									isIntersecting: t,
									intersectionRatio: s
								} = e;
								s >= .5 ? F(!0) : t || F(!1)
							})
						}, []);
					L && B && R(Object(c.b)(t.id));
					const V = Object(o.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(h.a)(U, z, V);
					const W = [j.a.REPORTED, j.a.FILTERED, j.a.UNMODERATED].includes(P),
						q = [j.a.APPROVED, j.a.UNMODERATED, j.a.REPORTED].includes(P),
						G = A && D,
						H = P === j.a.REMOVED && Object(p.b)(t) && t.removedByCategory === E.g.Reddit && !t.isRemoved && !t.isApproved,
						Q = P === j.a.FILTERED || H,
						Y = P === j.a.REMOVED && !t.modRemovalReason && !Q,
						Z = [j.a.REMOVED, j.a.SPAM].indexOf(P) > -1,
						X = A ? f.n : Ae,
						$ = Object(o.useCallback)(() => {
							const e = A ? g.r : O.a;
							R(e(t.id)), w(X(t.id, "approve"))
						}, [w, R, t, A, X]),
						J = Object(o.useCallback)(() => {
							const e = A ? g.S : O.e;
							R(e(t.id, !1)), t.isRemoved && t.bannedBy === i.l ? w(X(t.id, "confirm_remove")) : w(X(t.id, "remove"))
						}, [w, R, t, A, X]),
						ee = Object(o.useCallback)(() => {
							R(Object(C.fetchReasonsAndOpenModal)(A ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, A, R]),
						te = Object(o.useCallback)(() => {
							R(Object(x.i)(Object(d.b)(t.id, !1))), w(Object(f.n)(t.id, "post_flair_picker"))
						}, [w, R, t]),
						se = Object(o.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							A && R(Object(y.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [R, A, t]);
					return r.a.createElement("div", {
						className: N.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: U
					}, r.a.createElement(Ie, {
						content: t
					}), r.a.createElement("div", {
						className: N.a.actionBar
					}, W && r.a.createElement(u.t, {
						className: [N.a.button, N.a.approve].join(" "),
						Icon: Object(_.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: $,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), q && r.a.createElement(u.t, {
						className: N.a.button,
						Icon: Object(_.b)("close"),
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: J,
						text: n.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), Y && r.a.createElement(u.t, {
						className: N.a.button,
						onClick: ee,
						text: n.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), Q && r.a.createElement(u.t, {
						className: N.a.button,
						Icon: Object(_.b)("close"),
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: J,
						text: n.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), Z && r.a.createElement(u.t, {
						className: N.a.button,
						Icon: Object(_.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: $,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), G && r.a.createElement(u.t, {
						className: N.a.button,
						Icon: Object(_.b)("tag"),
						priority: u.c.Plain,
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: te,
						text: n.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), A && I === Object(d.b)(t.id, !1) && r.a.createElement(d.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(d.b)(t.id, !1),
						onFlairChanged: se
					}), r.a.createElement(K, {
						content: t,
						hostPostData: b,
						listingKey: s,
						moderatorPermissions: M
					}), T && r.a.createElement(l.a, {
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
				c = s("./src/reddit/icons/fonts/index.tsx"),
				d = s("./src/reddit/components/NotificationButton/index.m.less"),
				l = s.n(d);
			t.a = e => {
				const t = Object(i.a)(),
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
				})), d && o.a.createElement(a.a, {
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
				a = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/components/RichTextJson/index.tsx"),
				c = s("./src/reddit/constants/postLayout.ts"),
				d = s("./src/reddit/hooks/useRecommendationPostContext.ts"),
				l = s("./src/reddit/components/OneFeed/PostRecommendationContext.m.less"),
				u = s.n(l);
			const m = Object(a.b)(e => ({
				renderingObjectInfo: e
			}));
			t.a = e => {
				let {
					content: t,
					layout: s,
					post: n
				} = e;
				return Object(d.a)().hideRecommendationContext ? null : o.a.createElement(i.b, {
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
				a = s("./node_modules/react/index.js"),
				i = s.n(a);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const t = new Date(e.poll.endsAt).getTime() - Date.now() <= 0;
				return i.a.createElement("span", {
					className: e.className
				}, t ? c._("Voting closed {timeAgo}", [c._param("timeAgo", i.a.createElement(o.d, {
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
			t.a = Object(c.a)(Object(a.a)(e => {
				const {
					children: t,
					className: s,
					flairStyleTemplate: n,
					onClick: a,
					post: c,
					redditStyle: l,
					theme: p,
					overrideBackgroundColor: b,
					...f
				} = e;
				return o.a.createElement("div", m({
					className: Object(r.a)(u.a.backgroundWrapper, s),
					style: b || Object(i.c)(n, e),
					onClick: a,
					"data-adclicklocation": d.a.BACKGROUND
				}, f), t)
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
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/PostLeftRail/index.tsx"),
				i = s("./src/reddit/components/VerticalVotes/index.tsx"),
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
					isOverlay: v,
					isVoteCountAnimation: _,
					postId: E,
					shouldShowUpvoteRatioOnHover: O
				} = e, x = `upvote-button-${t.id}${v?"-overlay":""}`;
				return o.a.createElement(a.b, {
					isRemoved: !!t.bannedBy,
					isReported: Object(l.a)(t),
					isSponsored: !!Object(d.b)(t) && t.isSponsored,
					redditStyle: h
				}, n && o.a.createElement(c.a, {
					className: m.a.checkbox,
					isCheckboxSelected: u,
					toggleCheckbox: b
				}), o.a.createElement(i.a, {
					flairStyleTemplate: f,
					model: t,
					onVoteClick: s,
					redditStyle: h,
					upvoteTooltipId: x,
					isVoteCountAnimation: _,
					isCountAnimShadowTestEnabled: p,
					postId: E,
					scoreClassName: Object(r.a)(m.a.score, {
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
				return Z
			}));
			var n = s("./src/config.ts"),
				o = s("./node_modules/polished/dist/polished.es.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/ads/index.ts"),
				u = s("./src/lib/classNames/index.ts"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/controls/OutboundLink/index.tsx"),
				f = s("./src/reddit/controls/OutboundLink/styled.tsx"),
				h = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				v = s("./src/reddit/actions/post.ts"),
				_ = s("./src/reddit/constants/adEvents.ts"),
				E = s("./src/reddit/helpers/path/index.ts"),
				O = s("./src/reddit/hooks/useClickSourceData.ts"),
				x = s("./src/reddit/hooks/useIsRemovedOrDeletedPost.ts"),
				g = s("./src/reddit/hooks/usePostContext.ts"),
				y = s("./src/reddit/hooks/useTheme.ts"),
				C = s("./src/reddit/icons/fonts/index.tsx"),
				k = s("./src/reddit/models/Flair/index.ts"),
				S = s("./src/reddit/models/Media/index.ts"),
				j = s("./src/reddit/models/Post/index.ts"),
				w = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				N = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				R = s("./src/lib/getShortenedLink.ts"),
				P = s("./src/reddit/components/FlairWrapper/index.tsx"),
				I = s("./node_modules/fbt/lib/FbtPublic.js"),
				A = s("./src/lib/prettyPrintNumber/index.ts"),
				T = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				M = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				D = s.n(M);
			const L = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var F, B = Object(i.b)(L)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(x.a)() ? null : a.a.createElement("div", {
						className: Object(u.a)(e.className, D.a.proposalMetaData)
					}, a.a.createElement("span", null, I.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [I.fbt._param("count", Object(A.a)(n)), I.fbt._plural(parseInt(n))], {
						hk: "4rP1VK"
					})), t && a.a.createElement(T.a, {
						className: D.a.proposalExpiry,
						poll: t
					}))
				})),
				U = s("./src/reddit/components/SEOTitle/index.tsx"),
				z = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				V = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				q = s("./src/telemetry/models/Outbound.ts"),
				G = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				H = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				Q = s("./src/reddit/components/PostTitle/index.m.less"),
				K = s.n(Q);

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
			const Z = e => {
					let {
						size: t,
						titleColor: s,
						titleType: n,
						nowrap: o,
						children: r,
						className: i,
						redditStyle: c,
						shouldBlurTitle: d
					} = e;
					const l = Object(y.a)();
					let m = "";
					switch (t) {
						case F.ExtraLarge:
							m = K.a.ExtraLarge;
							break;
						case F.Large:
							m = K.a.Large;
							break;
						case F.Medium:
							m = K.a.Medium;
							break;
						case F.Small:
							m = K.a.Small;
							break;
						case F.ExtraSmall:
							m = K.a.ExtraSmall;
							break;
						case F.Metadata:
							m = K.a.Metadata
					}
					return a.a.createElement("div", {
						className: Object(u.a)(K.a.Title, i, m, {
							[K.a.isNoWrap]: o,
							[K.a.blur]: d
						}),
						style: {
							"--posttitletextcolor": s || Object(N.a)({
								redditStyle: c,
								theme: l
							}).titleText
						}
					}, n ? a.a.createElement(U.b, {
						type: n
					}, r) : r)
				},
				X = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: o,
						...r
					} = e;
					return a.a.createElement(c.a, Y({}, r, {
						className: Object(u.a)(t, K.a.styledLink, {
							[K.a.isVisitedEnabled]: !s
						})
					}), o)
				},
				$ = e => {
					let {
						disableVisited: t,
						nowrap: s,
						className: n,
						children: o
					} = e;
					return a.a.createElement("div", {
						className: Object(u.a)(K.a.titleContainer, n, {
							[K.a.isNoWrap]: s,
							[K.a.isVisitedEnabled]: !t
						})
					}, o)
				},
				J = Object(d.c)({
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
					} = t, n = Object(i.d)(), o = Object(O.a)(), r = Object(i.e)(z.b), c = Object(i.e)(z.c), d = e => {
						(r || c) && (e.preventDefault(), n(Object(v.Z)(Object(E.b)(t.permalink), t.id))), t.isSponsored && Object(j.A)(t) && n(Object(v.y)(t, _.a.Click))
					};
					if (e.isCommentsPage && !e.isCommentPermalink && !e.shouldLinkWrap) return a.a.createElement($, {
						nowrap: e.nowrap
					}, a.a.createElement(te, e));
					if (e.isCommentsPageAd && t.source && t.source.url) return a.a.createElement(b.b, {
						href: t.source.url,
						isSponsored: s,
						postId: t.id,
						source: t.source
					}, a.a.createElement(te, e)); {
						const n = t.permalink,
							r = e.isCommentPermalink ? Object(E.b)(n) : Object(h.a)(n, void 0, o);
						return a.a.createElement($, {
							disableVisited: e.disableVisited,
							nowrap: e.nowrap
						}, s && !Object(j.A)(t) ? ((e, t) => {
							const {
								source: s
							} = Object(l.t)(e, t.imageGalleryCurrentItem);
							return s ? a.a.createElement(b.b, {
								href: s.url,
								isSponsored: e.isSponsored,
								postId: e.id,
								source: s
							}, a.a.createElement(te, t)) : a.a.createElement(te, t)
						})(t, e) : a.a.createElement(X, {
							className: e.titleLinkClassName,
							"data-click-id": "body",
							disableVisited: e.disableVisited,
							target: e.shouldOpenPostInNewTab ? "_blank" : void 0,
							titleColor: e.titleColor,
							to: r,
							onClick: d
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
					return a.a.createElement(Z, {
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
					} = n, r = e.isCommentsPage ? q.SourceElement.PostLink : q.SourceElement.ListingPostLink;
					if (Object(x.a)()) return null;
					if (s && n.isNSFW) return null;
					const i = !t && !e.isCrosspost && e.size !== F.Large && !n.isSponsored && (n.source || n.media && (n.media.type === S.o.GIFVIDEO || n.media.type === S.o.IMAGE || n.media.type === S.o.EMBED));
					if (t || !e.isCommentsPage || e.isCommentPermalink || e.shouldLinkWrap) {
						if (i) return a.a.createElement(f.a, {
							className: e.outboundLinkClassName,
							href: Object(S.E)(n),
							isSponsored: o,
							postId: n.id,
							source: n.source,
							sourceElement: r
						}, Object(R.a)(n), !n.isSponsored && a.a.createElement(C.a, {
							name: "external_link",
							className: K.a.outboundLinkIcon
						}))
					} else if (n.source && !e.isCrosspost && e.size !== F.Large && e.size !== F.ExtraLarge) return a.a.createElement(f.a, {
						className: e.outboundLinkClassName,
						href: n.source.url,
						isSponsored: o,
						postId: n.id,
						source: n.source,
						sourceElement: r
					}, Object(R.a)(n), !n.isSponsored && a.a.createElement(C.a, {
						name: "external_link",
						className: K.a.outboundLinkIcon
					}));
					return null
				};
			class ne extends a.a.Component {
				getDynamicStyleTags() {
					return a.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: `\n        .${this.props.post.id}.${K.a.Component} {\n          --postTitle-VisitedLinkColor: ${Object(o.c)(.45,Object(N.a)(this.props).titleText,"#FFFFFF")};\n          --postTitleLink-VisitedLinkColor: ${Object(o.c)(.45,this.props.titleColor||Object(N.a)(this.props).titleText,Object(N.a)(this.props).body)};\n          --postBodyLink-VisitedLinkColor: ${Object(o.c)(.45,Object(N.a)(this.props).bodyText,Object(N.a)(this.props).body)};\n        }\n      `
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
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = s === k.b.Left, b = Object(P.b)(c), {
						leftFlair: f,
						rightFlair: h
					} = Object(G.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), v = !r && !o && !t, _ = v && f && f.length > 0, E = v && h && h.length > 0;
					return a.a.createElement("div", {
						className: Object(u.a)(K.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": H.a.TITLE,
						onClick: m
					}, !d && _ && a.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(w.b)(c) && a.a.createElement(ee, Y({}, this.props, {
						leftFlair: d ? f : void 0
					})), i && a.a.createElement(B, {
						className: K.a.pollMeta,
						pollId: i.id
					}), a.a.createElement(se, this.props), E && a.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), a.a.createElement("div", {
						className: K.a.postTitleVisibility,
						dangerouslySetInnerHTML: {
							__html: `\n              <img alt="" src="${n.a.assetPath}/img/renderTimingPixel.png" style="width: 1px; height: 1px;" onLoad="(__markFirstPostVisible || function(){})();" />\n            `
						}
					}), this.getDynamicStyleTags())
				}
			}
			t.c = a.a.memo((function(e) {
				const t = Object(p.ib)(),
					s = Object(p.x)(t),
					n = Object(g.a)(),
					o = Object(i.e)(o => J(o, {
						...n,
						...e,
						isCommentPermalink: s,
						pageLayer: t
					})),
					r = Object(y.a)(),
					c = Object(m.b)();
				return n ? a.a.createElement(ne, Y({
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
				c = s("./src/reddit/components/AwardBadges/index.tsx"),
				d = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				u = s("./src/reddit/components/NotificationButton/index.tsx"),
				m = s("./src/reddit/components/PostBadges/index.tsx"),
				p = s("./src/reddit/components/PostTopMeta/index.tsx"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				h = s("./src/reddit/components/SubscribeButton/Inline.tsx"),
				v = s("./src/reddit/constants/posts.ts"),
				_ = s("./src/reddit/controls/Button/index.tsx"),
				E = s("./src/reddit/controls/OutboundLink/index.tsx"),
				O = s("./src/reddit/helpers/trackers/post.ts"),
				x = s("./src/reddit/icons/fonts/OutboundLink/index.tsx"),
				g = s("./src/reddit/models/Media/index.ts"),
				y = s("./src/reddit/models/Subreddit/index.ts"),
				C = s("./src/reddit/selectors/experiments/shredditParity.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/components/PostTopLine/index.m.less"),
				j = s.n(S);
			t.a = e => {
				let {
					className: t,
					flairStyleTemplate: s,
					forceOpenInNewTab: o,
					hideNSFWPref: S,
					hostPostData: w,
					iconClassName: N,
					inSubredditOrProfile: R,
					isCommentsPage: P,
					isCompactPinnedPost: I,
					isCurrentUserProfilePost: A,
					isModQueuePage: T,
					isModWithUserNotesPermissions: M,
					isOverlay: D,
					isTopicPage: L,
					listingKey: F,
					post: B,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: z,
					showSubreddit: V,
					showSubredditIcon: W,
					subredditOrProfile: q,
					isFollowed: G,
					shouldShowFollowButton: H,
					onFollowPostClick: Q,
					onSubscribed: K
				} = e;
				const Y = L,
					Z = !(!q || !Object(y.i)(q)),
					X = Object(a.e)(e => {
						if (!Z) return !0;
						const t = Object(k.Jb)(e, B.author || "");
						return !t || t.enableFollowers
					}),
					$ = Object(a.e)(C.a);
				return r.a.createElement("div", {
					className: Object(i.a)(j.a.container, t)
				}, V && q && r.a.createElement("div", {
					className: j.a.subredditIconWrapper
				}, r.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: q.url
				}, W && r.a.createElement(b.b, {
					className: Object(i.a)(j.a.subredditIcon, N),
					shouldHideNsfwIcon: S,
					subredditOrProfile: q
				}))), r.a.createElement("div", {
					className: j.a.everythingElseWrapper
				}, V && r.a.createElement(l.h, {
					type: B.belongsTo.type,
					id: B.belongsTo.id
				}), r.a.createElement(p.g, {
					className: j.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: M,
					tooltipType: D ? p.f.Lightbox : void 0,
					post: B,
					showSub: V,
					subredditOrProfile: q
				}), r.a.createElement(m.a, {
					className: j.a.postBadges,
					displayText: q ? q.displayText : null,
					inSubredditOrProfile: R,
					isCompactPinnedPost: I,
					post: B,
					tooltipType: D ? p.f.Lightbox : void 0
				}), !Y && r.a.createElement(c.a, {
					isPostDetail: P,
					thing: B,
					tooltipType: D ? p.f.Lightbox : void 0
				}), M && r.a.createElement(d.a, {
					postOrComment: B,
					className: j.a.addModNote
				})), q && X && V && U && !A && r.a.createElement(h.a, {
					className: j.a.SubscribeButton,
					getEventFactory: e => (K && !e && K(), Object(O.n)(B.id, e ? "unsubscribe" : "subscribe", "post", F, w)),
					identifier: {
						name: q.name,
						type: Z ? v.a.PROFILE : v.a.SUBREDDIT
					},
					postId: B.id,
					size: _.d.XS,
					priority: $ ? _.c.Secondary : void 0,
					isShredditParityEnabled: $
				}), z && r.a.createElement(E.b, {
					isSponsored: B.isSponsored,
					postId: B.id,
					href: Object(g.E)(B),
					source: B.source
				}, r.a.createElement(x.a, {
					className: j.a.outboundLinkIcon
				})), H && X && r.a.createElement(u.a, {
					isFilled: !!G,
					onClick: Q,
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
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/actions/comment/moderation.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				b = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/helpers/isComment.ts"),
				v = s("./src/reddit/helpers/trackers/modTools.ts"),
				_ = s("./src/reddit/icons/svgs/ChevronDown/index.tsx"),
				E = s("./src/reddit/icons/svgs/ChevronUp/index.tsx"),
				O = s("./src/reddit/icons/svgs/Clock/index.tsx"),
				x = s("./src/reddit/icons/svgs/Undo/index.tsx"),
				g = s("./src/reddit/selectors/tooltip.ts"),
				y = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				C = s.n(y);
			const {
				fbt: k
			} = s("./node_modules/fbt/lib/FbtPublic.js"), S = (e, t) => `SnoozableReport--${t}--${e}`, j = Object(r.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(g.b)(S(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(u.h)({
					tooltipId: S(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(h.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, s)) : e(Object(l.fb)(t.reportedThingId, t.reason, s))
				}
			})), w = Object(m.a)(b.a);
			class N extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.kc.None : c.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(v.r)(Object(h.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
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
						useNewFormat: c,
						className: d,
						dropdownClassName: l,
						iconClassName: u
					} = this.props, m = S(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(f.b, {
						id: m,
						className: Object(i.a)(C.a.DropdownLabelContainer, d),
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: m,
						className: C.a.DropdownLabel
					}, a ? k._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : c ? `${e} (${t})` : `${t}: ${e}`, r ? o.a.createElement(E.a, null) : o.a.createElement(_.a, null))), o.a.createElement(w, {
						isOpen: r,
						tooltipTarget: this.tooltipTarget,
						renderContentsHidden: !0,
						isOverlay: !1
					}, o.a.createElement("button", {
						className: Object(i.a)(C.a.SnoozeButton, l),
						onClick: this.onSnoozeButtonClick
					}, o.a.createElement("div", {
						className: C.a.SnoozeButtonContent
					}, a ? o.a.createElement(o.a.Fragment, null, o.a.createElement(x.a, {
						className: u
					}), k._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(O.a, {
						className: u
					}), k._("Snooze reports from this user for 7 days", null, {
						hk: "1i0sOW"
					}))))))
				}
			}
			t.a = j(Object(p.c)(N))
		},
		"./src/reddit/endpoints/redditor/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/lib/makeGqlRequest/index.ts"),
				o = s("./src/lib/makeRequest/index.ts"),
				r = s("./src/redditGQL/operations/RedditorIdByName.json"),
				a = s("./src/redditGQL/operations/RedditorNameById.json");
			const i = async (e, t) => {
				var s;
				const a = await Object(n.a)(e, {
					...r,
					variables: t
				});
				return Object(o.c)(a) && (null === (s = a.body.data.redditorInfoByName) || void 0 === s ? void 0 : s.id) || null
			}, c = async (e, t) => {
				const s = await Object(n.a)(e, {
					...a,
					variables: t
				});
				return Object(o.c)(s) && s.body.data.redditorInfoById.name || null
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
				return !(e.removedByCategory || !e.thumbnail || !e.thumbnail.url || e.thumbnail.url === n.a.SELF || e.thumbnail.url === n.a.NSFW || e.media && Object(o.H)(e.media) || t)
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
				const c = {
					lastModAction: o,
					activeMods: a
				};
				return {
					subreddit: Object(n.a)(s),
					summary: {
						sub: c,
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
		"./src/reddit/helpers/loadThirdPartyScript.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			})), s.d(t, "d", (function() {
				return d
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "b", (function() {
				return u
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/config.ts"),
				o = s("./src/lib/fastdom/index.ts");
			const r = "https://js.stripe.com/v3/",
				a = "https://www.paypalobjects.com/api/checkout.js",
				i = {
					checkout: "https://js.braintreegateway.com/web/3.44.2/js/paypal-checkout.min.js",
					client: "https://js.braintreegateway.com/web/3.44.2/js/client.min.js",
					paypal: `https://www.paypal.com/sdk/js?client-id=${n.a.paypal.braintreeApiKey}` + "&currency=USD&vault=true"
				};

			function c(e, t) {
				return t() ? Promise.resolve() : new Promise((s, n) => o.a.write(() => {
					t() && s();
					const o = document.head;
					let r = o.querySelector(`script[src='${e}']`);

					function a() {
						this.removeEventListener("load", a), this.removeEventListener("error", i), s()
					}

					function i() {
						this.removeEventListener("load", a), this.removeEventListener("error", i), r && o.removeChild(r), n()
					}
					r || ((r = document.createElement("script")).src = e, o.appendChild(r)), r.addEventListener("load", a), r.addEventListener("error", i)
				}))
			}

			function d() {
				return c(r, () => "undefined" != typeof Stripe)
			}

			function l() {
				return c(a, () => "undefined" != typeof paypalCheckout).then(() => {
					"undefined" == typeof paypalCheckout && "undefined" != typeof window && (window.paypalCheckout = paypal), paypal = void 0
				})
			}

			function u() {
				return Promise.all(Object.keys(i).map(e => {
					const t = "__" + e;
					return c(i[e], () => void 0 !== window[t]).then(() => {
						window[t] = !0
					})
				}))
			}
		},
		"./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return d
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/helpers/isComment.ts"),
				r = s("./src/reddit/helpers/r2/normalizeAwardingsFromR2.ts"),
				a = s("./src/reddit/models/Vote/index.ts"),
				i = e => !0 === e ? a.a.upvoted : !1 === e ? a.a.downvoted : a.a.notVoted,
				c = s("./src/reddit/models/Comment/index.ts");
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
						richtextContent: d(e.rtjson),
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
			const d = e => "string" == typeof e ? JSON.parse(e) : e,
				l = e => e.author !== n.G ? null : e.body === n.H ? c.c.User : e.body === n.Rb ? c.c.Moderator : null
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
				return v
			}));
			var n = s("./node_modules/polished/dist/polished.es.js"),
				o = s("./src/reddit/helpers/styles/postBackgroundColor.ts"),
				r = s("./src/reddit/helpers/styles/smartTextColor.ts"),
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
				b = e => Object(n.k)(.2, e),
				f = e => e && e.postBackgroundColor ? {
					backgroundColor: b(e.postBackgroundColor)
				} : u,
				h = e => e.isActive ? l.a.mIsActive : void 0,
				v = e => {
					const t = Object(r.a)(Object(o.a)(e), a.a.actionIcon, a.b.actionIcon);
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
				o = s("./src/reddit/helpers/parseUrl.ts"),
				r = s("./src/reddit/selectors/media.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			const i = (e, t, s) => ({
					gallery: a.t(e, t, s),
					post: a.L(e, t),
					...a.p(e)
				}),
				c = (e, t) => s => ({
					...i(s, e, t),
					action: n.c.VIEW,
					noun: "media",
					source: "gallery",
					media: a.D(s, e)
				}),
				d = (e, t) => s => {
					const c = Object(o.a)(t),
						d = Object(r.d)(s, e) + 1;
					return {
						...i(s, e, d),
						action: n.c.CLICK,
						noun: "outbound_url",
						source: "gallery",
						media: {
							...a.D(s, e),
							outboundUrl: t,
							outboundDomain: c ? c.hostname : void 0
						}
					}
				},
				l = (e, t) => m(e, !0, t),
				u = (e, t) => m(e, !1, t),
				m = (e, t, s) => o => ({
					...i(o, e, s),
					action: n.c.CLICK,
					noun: t ? "forward" : "backward",
					source: "gallery"
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
				return c
			})), s.d(t, "e", (function() {
				return d
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
				c = (e, t, s) => o => ({
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
				d = (e, t, s, o) => r => ({
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
				return v
			})), s.d(t, "d", (function() {
				return _
			})), s.d(t, "n", (function() {
				return E
			})), s.d(t, "h", (function() {
				return O
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "l", (function() {
				return y
			})), s.d(t, "t", (function() {
				return C
			})), s.d(t, "j", (function() {
				return k
			})), s.d(t, "e", (function() {
				return S
			})), s.d(t, "x", (function() {
				return j
			})), s.d(t, "u", (function() {
				return w
			})), s.d(t, "a", (function() {
				return N
			})), s.d(t, "s", (function() {
				return R
			})), s.d(t, "v", (function() {
				return P
			})), s.d(t, "w", (function() {
				return I
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
				v = () => e => ({
					source: "mod_hub_nav",
					action: "click",
					noun: "event_posts",
					...r(e)
				}),
				_ = () => e => ({
					source: "post",
					action: "click",
					noun: "edit_post",
					...r(e)
				}),
				E = () => e => ({
					source: "post",
					action: "click",
					noun: "submit_post_now",
					...r(e)
				}),
				O = e => t => ({
					source: "post",
					action: "click",
					noun: "overflow_menu",
					...r(t),
					actionInfo: o.d(t, {
						pageType: e ? "recurring_posts" : "scheduled_posts"
					})
				}),
				x = {
					[n.d.Hourly]: "hourly_frequency",
					[n.d.Daily]: "daily_frequency",
					[n.d.Weekly]: "weekly_frequency",
					[n.d.Monthly]: "monthly_frequency",
					[n.b]: "custom_frequency"
				},
				g = e => t => ({
					source: "scheduled_post_composer_submit_frequency",
					action: "click",
					noun: null === e ? "one_time_frequency" : x[e],
					...r(t)
				}),
				y = () => e => ({
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
				k = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "schedule_post_cta",
					...r(e)
				}),
				S = () => e => ({
					source: "recurring_post_module",
					action: "click",
					noun: "edit_recurring_post",
					...r(e)
				}),
				j = () => e => ({
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
					scheduledPost: a(t)
				}),
				N = () => e => ({
					source: "recurring_post_composer",
					action: "click",
					noun: "cancel",
					...r(e)
				}),
				R = () => (e, t) => ({
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
				const [i, c] = Object(n.useState)(null != r ? r : t);
				return Object(n.useEffect)(() => (s.current = a(e, c, t), () => {
					var e;
					return null === (e = s.current) || void 0 === e ? void 0 : e.deregister()
				}), [e, t]), Object(n.useEffect)(() => {
					var e;
					null === (e = s.current) || void 0 === e || e.emit(i)
				}, [i]), [i, function(t) {
					Object(o.Lb)(e, t), c(t)
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
				c = s("./src/reddit/icons/fonts/Coin/index.m.less"),
				d = s.n(c);
			const l = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: Object(r.a)(e.className, Object(i.b)("coins", e.isFilled)),
				style: {
					color: e.fillColor || a.a.gold
				}
			}), "CoinIcon", d.a);
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
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("collapse",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "CollapseIcon", i.a);
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
				a = s("./src/reddit/icons/fonts/Expandos/Arrows/Expand/index.m.less"),
				i = s.n(a);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(r.b)("expand",e.isFilled)} ${e.className}`,
				onClick: e.onClick,
				title: e.title
			}), "ExpandIcon", i.a);
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
				c = s.n(i);
			t.a = e => o.a.createElement("i", {
				className: Object(r.a)(c.a.ModSettings, Object(a.b)("mod", e.isFilled), e.className)
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
				return c
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = s.n(a);
			const c = e => o.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
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
				a = 1e4,
				i = 100;
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
				return a
			})), s.d(t, "e", (function() {
				return i
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
				return v
			})), s.d(t, "l", (function() {
				return _
			})), s.d(t, "k", (function() {
				return E
			})), s.d(t, "i", (function() {
				return O
			})), s.d(t, "j", (function() {
				return x
			})), s.d(t, "d", (function() {
				return g
			})), s.d(t, "n", (function() {
				return y
			})), s.d(t, "b", (function() {
				return C
			})), s.d(t, "m", (function() {
				return k
			})), s.d(t, "q", (function() {
				return S
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./src/lib/assertNever.ts"),
				o = s("./src/reddit/models/GqlTopLevelField.ts"),
				r = s("./src/reddit/models/User/index.ts");
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
			const v = e => b[h[e]],
				_ = e => h[b[e]],
				E = e => f[b[e]],
				O = e => b[f[e]],
				x = e => h[f[e]];
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
				C = "custom",
				k = e => {
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
						(r = e.placement ? e.placement === i.a.First ? n[c.a.Loyalty][o] : n[c.a.Achievement][o] : l(e) ? n[c.a.Cosmetic][c.c.MyBadges][o] : n[c.a.Cosmetic][c.c.Gallery][o]) && (l(e) ? s.has(e.id) && r.unlocked.push(e) : t.has(e.id) || r.locked.push(e))
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
				return Object.keys(e).map(t => e[t]).filter(e => !!e.locked.length || !!e.unlocked.length || e.id === o.a).map(m).sort((e, s) => {
					const n = t[e.id],
						o = t[s.id];
					return Object(a.b)(n, o)
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
				c = s("./src/reddit/actions/post.ts");
			const d = ["isApproved", "isRemoved", "isSpam"];
			var l = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a.q:
					case c.k: {
						const s = t.payload;
						return Object.keys(s).map(t => {
							const n = Object.keys(s[t]);
							let o = !1;
							n.map(e => {
								d.includes(e) && (o = !0)
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
				experimentName: n.Bb
			}), e => ({
				bucketed: e === n.hd.ExpandedSearch || e === n.hd.CollapsedSearch,
				collapsed: e === n.hd.CollapsedSearch,
				expanded: e === n.hd.ExpandedSearch
			}))
		},
		"./src/reddit/selectors/experiments/intuitivePostTypes.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/helpers/isCrosspost.ts"),
				a = s("./src/reddit/contexts/PageLayer/index.tsx");
			const i = (e, t) => {
				let {
					post: s,
					pageLayer: i
				} = t;
				if (Object(a.F)(i)) return !0;
				const c = Object(a.y)(i),
					d = Object(r.a)(s);
				return !(!c || d) && (e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: o.a,
						experimentName: n.Vb
					}) === n.Zd
				})(e)
			}
		},
		"./src/reddit/selectors/experiments/shredditMigration.ts": function(e, t, s) {
			"use strict";
			s.d(t, "e", (function() {
				return b
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "f", (function() {
				return _
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "h", (function() {
				return g
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts");
			const a = /^\/?(new|top|hot|controversial|rising|best)?\/?$/,
				i = /^\/r\/all\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				c = /^\/r\/popular\/?((new|top|hot|controversial|rising|best)\/?)?$/,
				d = /^\/r\/[^/]+\/?((controversial|new|about|top)\/?)?$/,
				l = /^\/r\/[^/]+\/w(iki)?\/?([^/]+\/?)?$/,
				u = /^\/u(?:ser)?\/[^/]+(\/[^/]+)?\/?$/,
				m = e => !!e.match(a) || !!e.match(c),
				p = e => !e.match(c) && (!e.match(i) && (!!e.match(d) || !!e.match(l))),
				b = (e, t) => !!m(t) && [n.hg.Enabled, n.hg.HardReload].includes(Object(o.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: n.Qf
				})),
				f = (e, t) => !!t.match(i) && [n.hg.Enabled, n.hg.HardReload].includes(Object(o.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: n.Of
				})),
				h = (e, t) => !!p(t) && [n.hg.Enabled, n.hg.HardReload].includes(Object(o.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: n.Pf
				})),
				v = (e, t) => !(!p(t) && !m(t)) && Object(o.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: n.xe
				}) === n.Zd,
				_ = (e, t) => (e => {
					return /^(?:\/r\/[^\/]+)?\/search\/?$/i.test(e) || /^\/u(?:ser)?\/[^\/]+\/m\/[^\/]+\/search\/?$/i.test(e)
				})(t) && Object(r.f)(e),
				E = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.f,
						experimentName: n.Rf
					})
				},
				O = (e, t) => !!(e => !!e.match(u))(t) && (E(e) === n.hg.Enabled || E(e) === n.hg.HardReload),
				x = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.Uf
					})
				},
				g = (e, t) => !!(e => !!e.match(u))(t) && x(e) === n.hg.Enabled
		},
		"./src/reddit/selectors/experiments/shredditParity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./src/reddit/helpers/installGoodVisitFeedSearchTracker/index.ts"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/selectors/user.ts"),
				a = s("./src/reddit/selectors/experiments/shredditMigration.ts");
			const i = Object(o.a)(r.S, e => !e),
				c = (e, t) => {
					const s = t();
					e.block(e => {
						let t = !1;
						if (Object(r.S)(s)) {
							Object(a.h)(s, e.pathname) && (t = !0)
						} else {
							const n = (e => !!e.match(/^\/(?:r\/[^\/]+\/)?comments\/([a-z0-9]*)/i) || !!e.match(/^\/u(?:ser)?\/[^/]+\/comments\/[a-z0-9]+/i))(e.pathname),
								o = Object(a.b)(s, e.pathname),
								r = Object(a.e)(s, e.pathname),
								i = Object(a.c)(s, e.pathname),
								c = Object(a.d)(s, e.pathname),
								d = Object(a.f)(s, e.pathname),
								l = Object(a.g)(s, e.pathname);
							(o || n || r || i || c || d || l) && (t = !0)
						}
						if (t) {
							const t = e.pathname + e.search;
							return Object(n.f)(s), window.location.href = t, !1
						}
					})
				}
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(o.Lg)(t)
				},
				c = Object(n.a)(i, r.d, (e, t) => e && !t)
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
				a = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				i = s("./src/reddit/models/Media/index.ts"),
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
					let o = Object(a.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (o = e.media.markdownContent), o === s
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
					let o = Object(a.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== i.o.TEXT || (o = e.media.markdownContent), o === s
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
				f = Object(o.a)(d.m, r.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				h = Object(o.a)(r.a, e => !(!e || !1 !== e.isRobotIndexable))
		},
		"./src/redditGQL/operations/LastModActionInSubreddit.json": function(e) {
			e.exports = JSON.parse('{"id":"7888d2d30843"}')
		},
		"./src/redditGQL/operations/ModActivitySummaryByID.json": function(e) {
			e.exports = JSON.parse('{"id":"d968e053a7b8"}')
		},
		"./src/redditGQL/operations/RedditorIdByName.json": function(e) {
			e.exports = JSON.parse('{"id":"a24cf5c8adf7"}')
		},
		"./src/redditGQL/operations/RedditorNameById.json": function(e) {
			e.exports = JSON.parse('{"id":"7206aafc3965"}')
		},
		"./src/redditGQL/operations/SingleCommentById.json": function(e) {
			e.exports = JSON.parse('{"id":"7e1a2a69e2d6"}')
		},
		"./src/redditGQL/operations/SinglePostInfoById.json": function(e) {
			e.exports = JSON.parse('{"id":"7226f3bb6e27"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-MediumPost.22a35a55e5f6af5fce1b.js.map