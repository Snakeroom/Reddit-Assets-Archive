// https://www.redditstatic.com/desktop2x/reddit-components-LargePost.7c97f8bf1ff0802802c1.js
// Retrieved at 7/28/2023, 1:00:06 PM by Reddit Dataminer v1.0.0
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
						c = !i && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						u = /sailfish/i.test(t),
						m = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						f = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						h = !r && !l && /macintosh/i.test(t),
						O = !a && !u && !m && !p && /linux/i.test(t),
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
					return _ || c || "ipad" == r || a && (3 == j || j >= 4 && !g) || o.silk ? o.tablet = e : (g || "iphone" == r || "ipod" == r || a || i || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
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
		"./src/lib/scroll/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "a", (function() {
				return c
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
				c = e => {
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
		"./src/reddit/actions/comment/authoring.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return Oe
			})), s.d(t, "r", (function() {
				return _e
			})), s.d(t, "p", (function() {
				return ge
			})), s.d(t, "t", (function() {
				return je
			})), s.d(t, "w", (function() {
				return Ce
			})), s.d(t, "q", (function() {
				return ke
			})), s.d(t, "v", (function() {
				return Ne
			})), s.d(t, "o", (function() {
				return we
			})), s.d(t, "m", (function() {
				return Te
			})), s.d(t, "b", (function() {
				return Ae
			})), s.d(t, "c", (function() {
				return De
			})), s.d(t, "s", (function() {
				return Be
			})), s.d(t, "g", (function() {
				return Fe
			})), s.d(t, "h", (function() {
				return Ue
			})), s.d(t, "k", (function() {
				return ze
			})), s.d(t, "e", (function() {
				return Ke
			})), s.d(t, "d", (function() {
				return qe
			})), s.d(t, "a", (function() {
				return Qe
			})), s.d(t, "j", (function() {
				return Ye
			})), s.d(t, "i", (function() {
				return $e
			})), s.d(t, "l", (function() {
				return et
			})), s.d(t, "u", (function() {
				return tt
			})), s.d(t, "n", (function() {
				return st
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeDraftKey/index.ts"),
				a = s("./src/lib/reCaptchaEnterprise/index.ts"),
				i = s("./src/lib/scroll/index.ts"),
				c = s("./src/reddit/actions/changeUsername.ts"),
				d = s("./src/reddit/actions/login.ts"),
				l = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/onboarding/index.ts"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/postCreation/editorContent.ts"),
				b = s("./src/reddit/actions/reCaptchaEnterprise.ts"),
				f = s("./src/reddit/actions/shortcuts/utils.ts"),
				h = s("./src/reddit/actions/toaster.ts"),
				O = s("./src/reddit/constants/adEvents.ts"),
				x = s("./src/reddit/constants/experiments.ts"),
				v = s("./src/reddit/constants/localStorage.ts"),
				_ = s("./src/redditGQL/operations/CommentToxicity.json"),
				g = s("./src/lib/constants/index.ts"),
				E = s("./src/lib/makeApiRequest/index.ts"),
				y = s("./src/lib/makeGqlRequest/index.ts"),
				j = s("./src/lib/omitHeaders/index.ts"),
				C = s("./src/reddit/components/RichTextEditor/RTEState/index.tsx"),
				k = s("./src/reddit/constants/headers.ts"),
				S = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				I = s("./src/reddit/helpers/genericServerError/index.ts"),
				N = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				w = s("./src/reddit/helpers/r2/normalizeR2APIErrors/index.ts"),
				P = s("./src/reddit/models/PostCreationForm/index.ts"),
				T = s("./src/reddit/models/RichTextJson/addEmotesAsImagesParam.ts"),
				R = s("./src/reddit/models/RichTextJson/addRTJParam.ts"),
				A = s("./src/reddit/helpers/graphql/helpers.ts"),
				M = s("./src/reddit/helpers/graphql/normalizeCommentFromGql/index.ts"),
				L = s("./src/redditGQL/operations/CreateComment.json");
			const D = (e, t, s, n) => {
					let o, r;
					if (n === P.i.MARKDOWN) o = s.text, r = null;
					else {
						o = null;
						let e = null;
						s.rteState && (e = C.a.toRichTextJSON(s.rteState).document), r = JSON.stringify({
							document: e
						})
					}
					return Object(y.a)(e, {
						..._,
						variables: {
							subredditName: t,
							markdown: o,
							richText: r
						}
					}).then(e => !e.ok || e.body.data.isValidComment)
				},
				B = async (e, t, s, n, o) => {
					const r = {
						api_type: "json",
						return_rtjson: !0,
						thing_id: t,
						recaptcha_token: o
					};
					return s.commentMode === P.i.MARKDOWN ? r.text = s.text : (r.text = null, r.richtext_json = n), Object(E.a)(Object(j.a)(e, [k.a]), {
						method: g.ob.POST,
						endpoint: Object(S.a)(Object(T.a)(Object(R.a)(`${e.apiUrl}/api/comment.json`))),
						data: r
					}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
						...e,
						ok: !1,
						error: Object(w.a)(e)
					} : {
						...e,
						body: {
							comment: Object(N.a)(e.body.json.data.things[0].data)
						}
					} : {
						...e,
						body: {
							comment: Object(N.a)(e.body)
						}
					} : {
						...e,
						error: e.error || Object(I.a)()
					})
				}, F = async (e, t, s, n, o) => {
					const r = n.commentMode === P.i.MARKDOWN,
						a = {
							postId: t || null,
							parentId: s || null,
							content: {
								markdown: r ? n.text : null,
								richText: r ? null : o
							}
						};
					return Object(y.a)(e, {
						...L,
						variables: {
							input: a
						}
					}).then(e => {
						if (e.ok) {
							const t = e.body.data.createComment;
							if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
								...e,
								ok: !1,
								error: Object(A.e)(t.fieldErrors)
							};
							if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
								...e,
								ok: !1,
								error: Object(A.f)(t.errors)
							};
							if (t.ok) return {
								...e,
								body: {
									comment: Object(M.a)(t.commentInfo)
								}
							}
						}
						return {
							...e,
							ok: !1,
							error: e.error || Object(I.a)()
						}
					})
				};
			var U = s("./src/redditGQL/operations/UpdateComment.json");
			var z = s("./src/redditGQL/operations/UpdateCommentFollowState.json");
			var W = s("./src/reddit/endpoints/post/index.tsx"),
				K = s("./src/reddit/endpoints/post/convert.ts"),
				H = s("./src/reddit/featureFlags/index.ts"),
				G = s("./src/reddit/helpers/comment/index.ts"),
				V = s("./src/reddit/helpers/correlationIdTracker.ts"),
				q = s("./src/reddit/helpers/dom/index.ts"),
				Q = s("./src/reddit/helpers/localStorage/index.ts"),
				Y = s("./src/reddit/helpers/sessionStorage/index.ts"),
				J = s("./src/reddit/helpers/trackers/commentsPage.ts"),
				Z = s("./src/reddit/models/Comment/index.ts"),
				X = s("./src/reddit/models/PostDraft/index.ts"),
				$ = s("./src/reddit/models/RichTextJson/index.ts"),
				ee = s("./src/reddit/models/RichTextJson/nodeMakers.ts"),
				te = s("./src/reddit/models/Toast/index.ts"),
				se = s("./src/reddit/selectors/chatPost.ts"),
				ne = s("./src/reddit/selectors/comments.ts"),
				oe = s("./src/reddit/selectors/commentSelector.ts"),
				re = s("./src/reddit/selectors/experiments/chat.ts"),
				ae = s("./src/reddit/helpers/chooseVariant/index.ts"),
				ie = s("./node_modules/reselect/es/index.js");
			const ce = Object(ie.a)(e => Object(ae.c)(e, {
				experimentEligibilitySelector: ae.a,
				experimentName: x.Mb
			}), e => e === x.Zd);
			var de = s("./src/reddit/selectors/experiments/contributeBeforeSignUp.ts"),
				le = s("./src/reddit/selectors/platform.ts"),
				ue = s("./src/reddit/selectors/posts.ts"),
				me = s("./src/reddit/selectors/tracking.ts"),
				pe = s("./src/reddit/selectors/user.ts"),
				be = s("./src/reddit/actions/comment/index.ts"),
				fe = s("./src/reddit/actions/comment/constants.ts");
			const he = Object(o.a)(fe.m),
				Oe = e => {
					let {
						hasFocus: t,
						draftKey: s
					} = e;
					return async (e, n) => {
						const o = n();
						if (!!o.features.comments.drafts[s])
							if (Object(pe.U)(o) && t) {
								const n = he({
									hasFocus: t,
									draftKey: s
								});
								e(Object(c.startChangeUsernameFlow)(n))
							} else e(he({
								hasFocus: t,
								draftKey: s
							}))
					}
				},
				xe = Object(o.a)(fe.L),
				ve = Object(o.a)(fe.H),
				_e = Object(o.a)(fe.N),
				ge = Object(o.a)(fe.M),
				Ee = Object(o.a)(fe.K),
				ye = async (e, t, s, n, o) => {
					const r = n.ok && n.body,
						a = r && r.comment && r.comment.id;
					await J.g(e, s, t, o, a)
				}, je = "Toxicity_Warning__Modal", Ce = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					const r = s(),
						a = Object(le.e)(r);
					let i = "";
					a && (i = a.name);
					const {
						formData: c,
						editorMode: d
					} = e;
					if (H.d.enableToxicityWarning(r)) {
						if (!(await D(o(), i, c, d))) return void t(Object(l.i)(je))
					}
					t(ke(e))
				}, ke = e => async (t, s) => {
					t(Object(l.g)(je));
					const n = s(),
						o = Object(de.a)(n),
						r = Object(de.c)(n);
					if (!n.user.account && o) {
						const s = Object(G.e)(e.formData, n.uploads),
							o = Object(G.d)(e.formData, n.uploads);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(Y.d)({
							comment: {
								...e,
								richTextJSONData: s,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(Ie(e, !1))
				};

			function Se(e, t) {
				return e === P.i.MARKDOWN && ce(t)
			}
			const Ie = (e, t, s, o) => {
					let {
						postId: r,
						commentsPageKey: c,
						draftKey: d,
						formData: l,
						editorMode: u,
						disableAutofocus: p
					} = e;
					return async (e, v, _) => {
						let {
							apiContext: g,
							gqlContext: E
						} = _;
						var y;
						await e(Object(b.b)({
							action: a.a.CommentSubmit,
							catchAndLogError: !0,
							experiment: x.K
						}));
						const j = v(),
							C = Object(se.d)(j, {
								postId: r
							}),
							k = C ? Object(G.b)() : d,
							S = Object(oe.f)(j, {
								commentId: k
							}),
							I = Object(pe.m)(j);
						if (!I) return;
						if (S && !C) return;
						t || e(xe({
							draftKey: k,
							draft: l,
							commentsPageKey: c,
							optimisticComment: C ? Object(G.c)({
								temporalId: k,
								draft: l,
								post: Object(ue.F)(j, {
									postId: r
								}),
								author: I,
								subredditId: (null === (y = Object(le.e)(j)) || void 0 === y ? void 0 : y.id) || ""
							}) : void 0
						}));
						const N = l.commentMode;
						let w;
						const T = t && s ? s : Object(G.e)(l, j.uploads),
							R = Object(G.f)(T, j.uploads);
						if ((w = Se(N, j) ? await F(E(), r, null, l, T) : await B(g(), r, l, T, Object(me.a)(j))).ok) {
							const s = w.body;
							if (e(_e({
									...s,
									headCommentId: Object(ne.w)(j, {
										commentsPageKey: c
									}),
									commentsPageKey: c,
									draftKey: k,
									upload: R
								})), t) {
								const e = Object(le.i)(j);
								Object(i.a)(!!e)
							}
							const n = Object(ue.F)(v(), {
								postId: r
							});
							e(Object(m.y)(n, O.a.CommentSubmitted))
						} else {
							if (w.error) {
								const e = t && o ? o : Object(G.d)(l, j.uploads);
								J.f({
									state: j,
									bodyText: e,
									postId: r,
									error: w.error,
									uploadMetadata: null == R ? void 0 : R.metadata
								})
							}
							const s = w.error && w.error.fields && w.error.fields[0] ? w.error.fields[0].msg : n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							});
							e(Ee({
								draftKey: k,
								error: w.error
							})), C || e(Object(h.f)({
								duration: h.a,
								kind: te.b.Error,
								text: s
							}))
						}
						ye(v(), c, u, w, null == R ? void 0 : R.metadata).then(() => w.ok && u === P.i.RICH_TEXT ? Object(V.b)(V.a.CommentComposer) : void 0), p || Object(f.d)(), t && Object(Y.a)()
					}
				},
				Ne = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					const {
						parentCommentId: r,
						commentsPageKey: a,
						parentCommentDepth: i,
						draftKey: c,
						formData: d,
						editorMode: u
					} = e, m = s(), p = Object(le.e)(m);
					let b = "";
					if (p && (b = p.name), H.d.enableToxicityWarning(m)) {
						if (!(await D(o(), b, d, u))) return void t(Object(l.i)(je))
					}
					t(we({
						commentsPageKey: a,
						draftKey: c,
						parentCommentDepth: i,
						parentCommentId: r,
						formData: d,
						editorMode: u
					}))
				}, we = e => async (t, s) => {
					t(Object(l.g)(je));
					const n = s(),
						o = Object(de.a)(n),
						r = Object(de.c)(n);
					if (!n.user.account && o) {
						const s = Object(G.e)(e.formData, n.uploads),
							o = Object(G.d)(e.formData, n.uploads);
						t(Object(l.k)({
							actionSource: l.a.Reply
						})), t(Object(d.openRegisterModal)()), Object(Y.d)({
							comment: {
								...e,
								richTextJSONData: s,
								commentBodyText: o
							},
							isSkipOnboarding: r
						})
					} else t(Pe(e, !1))
				}, Pe = (e, t, s, n) => async (o, r, c) => {
					let {
						apiContext: d,
						gqlContext: l
					} = c;
					var u;
					const {
						parentCommentId: m,
						commentsPageKey: p,
						parentCommentDepth: h,
						draftKey: O,
						formData: v,
						editorMode: _
					} = e;
					await o(Object(b.b)({
						action: a.a.CommentSubmit,
						catchAndLogError: !0,
						experiment: x.K
					}));
					const g = r(),
						E = Object(oe.c)(g, {
							commentId: m
						}),
						y = E && Object(se.d)(g, {
							postId: E.postId
						}) && Object(re.e)(g),
						j = E && Object(se.d)(g, {
							postId: E.postId
						}),
						C = j ? Object(G.b)() : O,
						k = Object(oe.f)(g, {
							commentId: C
						}),
						S = Object(pe.m)(g);
					if (!S) return;
					if (k && !j) return;
					t || o(xe({
						draftKey: C,
						draft: v,
						commentsPageKey: p,
						optimisticComment: j && E ? Object(G.c)({
							temporalId: C,
							draft: v,
							post: Object(ue.F)(g, {
								postId: E.postId
							}),
							author: S,
							subredditId: (null === (u = Object(le.e)(g)) || void 0 === u ? void 0 : u.id) || "",
							parentId: E.id
						}) : void 0
					})), y || o(Ae({
						parentCommentId: m,
						commentsPageKey: p
					}));
					const I = v.commentMode,
						N = t && s ? s : Object(G.e)(v, g.uploads),
						w = Object(G.f)(N, g.uploads);
					let P;
					if ((P = Se(I, g) ? await F(l(), null, m, v, N) : await B(d(), m, v, N, Object(me.a)(g))).ok) {
						if (o(ge({
								...P.body,
								parentCommentId: m,
								commentsPageKey: p,
								draftKey: C,
								depth: h + 1,
								upload: w
							})), t) {
							const e = Object(le.i)(g);
							Object(i.a)(!!e)
						}
					} else {
						if (P.error) {
							if (!E) return;
							const e = t && n ? n : Object(G.d)(v, g.uploads);
							J.f({
								state: g,
								bodyText: e,
								postId: E.postId,
								parentId: m,
								error: P.error,
								uploadMetadata: null == w ? void 0 : w.metadata
							})
						}
						o(Ee({
							draftKey: C,
							error: P.error
						}))
					}
					ye(r(), p, _, P, null == w ? void 0 : w.metadata), y || Object(f.d)(), t && Object(Y.a)()
				}, Te = () => async e => {
					const t = Object(Y.b)();
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
						i && e(Object(u.skipOnboardingModal)()), o ? await e(Ie({
							...t.comment,
							postId: o
						}, !0, r, a)) : n && void 0 !== s && await e(Pe({
							...t.comment,
							parentCommentId: n,
							parentCommentDepth: s
						}, !0, r, a))
					}
				}, Re = Object(o.a)(fe.s), Ae = Object(o.a)(fe.r), Me = Object(o.a)(fe.n), Le = (Object(o.a)(fe.i), Object(o.a)(fe.o)), De = (Object(o.a)(fe.v), (e, t, s) => async (o, r, a) => {
					let {
						apiContext: i
					} = a;
					const c = e === P.i.RICH_TEXT;
					if (!t || "object" == typeof t && Object($.I)(t)) o(Le({
						editorMode: e,
						draftKey: s,
						content: c ? $.j : ""
					})), o(Object(p.c)(e));
					else {
						o(Object(p.b)(s));
						const r = await Object(K.a)(i(), e, c ? t : JSON.stringify(t));
						if (r.ok) {
							const t = r.body.output;
							o(Object(p.a)(s)), o(Le({
								editorMode: e,
								draftKey: s,
								content: t
							})), o(Object(p.c)(e))
						} else o(Object(p.a)(s)), o(Object(h.f)({
							duration: h.a,
							kind: te.b.Error,
							text: n.fbt._("Something went wrong", null, {
								hk: "LWFS0"
							})
						}))
					}
				}), Be = e => {
					let {
						commentsPageKey: t,
						parentCommentId: s,
						singleOpen: n
					} = e;
					return async (e, o) => {
						const a = o(),
							i = Object(r.a)(X.c.replyToComment, s);
						if (!Object(pe.S)(o()) && !Object(de.a)(a)) return e(Object(d.openRegisterModal)()), void e(Object(l.k)({
							actionSource: l.a.Reply,
							redirectUrl: Object(ne.m)(o(), {
								commentId: s
							})
						}));
						const u = a.features.comments.replyFormOpen[t],
							m = u && u[s];
						if ((m || u && n) && (Object.keys(u).forEach(s => u[s] && e(Ae({
								parentCommentId: s,
								commentsPageKey: t
							}))), m)) return;
						let p = "",
							b = null;
						const f = a.user.prefs.commentMode,
							h = Object(q.d)();
						if (h) {
							const e = h.filter(e => !!e && 10 !== e.charCodeAt(0));
							if (f === P.i.MARKDOWN) p = e.map(e => `> ${e}\n`).join("");
							else {
								const t = e.map(e => ee.s(e, null)).map(e => ee.l([e])),
									s = ee.s("", null),
									n = ee.l([s]);
								b = {
									document: [ee.c(t), n]
								}
							}
						}
						const O = a.features.comments.drafts[i];
						let x;
						if (x = h ? {
								commentMode: f,
								draftType: X.c.replyToComment,
								rtJson: b,
								text: `${p}\n`
							} : O || {
								commentMode: f,
								draftType: X.c.replyToComment,
								rtJson: b,
								text: ""
							}, Object(pe.U)(a)) {
							const n = Re({
								parentCommentId: s,
								commentsPageKey: t,
								draftKey: i,
								formData: x
							});
							e(Object(c.startChangeUsernameFlow)(n))
						} else e(Re({
							parentCommentId: s,
							commentsPageKey: t,
							draftKey: i,
							formData: x
						}))
					}
				}, Fe = e => async t => {
					t(Object(be.r)(e)), t(Ke(e))
				}, Ue = e => {
					let {
						parentCommentId: t,
						commentsPageKey: s
					} = e;
					return async e => {
						e(Ae({
							parentCommentId: t,
							commentsPageKey: s
						})), e(Be({
							parentCommentId: t,
							commentsPageKey: s
						})), e(Object(be.r)({
							commentId: t,
							commentsPageKey: s
						}))
					}
				}, ze = (e, t) => s => s(Me({
					draftKey: e,
					formData: t
				})), We = Object(o.a)(fe.u), Ke = e => {
					let {
						commentId: t,
						commentMode: s,
						commentsPageKey: n,
						draftKey: o,
						text: r
					} = e;
					return async (e, a) => {
						const i = a();
						i.user.account && (J.c(i), e(We({
							commentId: t,
							commentsPageKey: n,
							draftKey: o,
							formData: {
								text: r,
								commentMode: s,
								rteState: null,
								draftType: X.c.edit,
								hasFocus: !0
							}
						})))
					}
				}, He = Object(o.a)(fe.F), Ge = Object(o.a)(fe.E), Ve = Object(o.a)(fe.G), qe = Object(o.a)(fe.j), Qe = Object(o.a)(fe.f), Ye = e => {
					let {
						id: t,
						commentsPageKey: s,
						draftKey: n,
						formData: o
					} = e;
					return async (e, r, a) => {
						let {
							apiContext: i,
							gqlContext: c
						} = a;
						const d = r();
						if (!d.user.account) return;
						e(He({
							draftKey: n
						})), J.d(d);
						const l = Object(G.e)(o, d.uploads),
							u = o.commentMode;
						let m;
						if ((m = Se(u, d) ? await (async (e, t, s, n, o) => {
								const r = o === P.i.MARKDOWN,
									a = {
										commentId: t,
										content: {
											markdown: r ? s.text : null,
											richText: r ? null : n
										}
									};
								return Object(y.a)(e, {
									...U,
									variables: {
										input: a
									}
								}).then(e => {
									if (e.ok) {
										const t = e.body.data.updateComment;
										if ((null == t ? void 0 : t.fieldErrors) && t.fieldErrors.length > 0) return {
											...e,
											ok: !1,
											error: Object(A.e)(t.fieldErrors)
										};
										if ((null == t ? void 0 : t.errors) && t.errors.length > 0) return {
											...e,
											ok: !1,
											error: Object(A.f)(t.errors)
										};
										if (t.ok) return {
											...e,
											body: {
												comment: {
													...Object(M.c)(t.content)
												}
											}
										}
									}
									return {
										...e,
										ok: !1,
										error: e.error || Object(I.a)()
									}
								})
							})(c(), t, o, l, u) : await (async (e, t, s, n, o) => {
								const r = {
									api_type: "json",
									return_rtjson: !0,
									thing_id: t
								};
								return o === P.i.MARKDOWN ? r.text = s.text : (r.text = null, r.richtext_json = n), Object(E.a)(Object(j.a)(e, [k.a]), {
									endpoint: Object(S.a)(Object(R.a)(Object(T.a)(`${e.apiUrl}/api/editusertext`))),
									method: g.ob.POST,
									data: r
								}).then(e => e.ok ? e.body.json ? e.body.json.errors.length ? {
									...e,
									ok: !1,
									error: Object(w.a)(e)
								} : {
									...e,
									body: {
										comment: Object(N.a)(e.body.json.data.things[0].data)
									}
								} : {
									...e,
									body: {
										comment: Object(N.a)(e.body)
									}
								} : {
									...e,
									error: e.error || Object(I.a)()
								})
							})(i(), t, o, l, u)).ok) {
							const o = m.body;
							e(Ve({
								commentId: t,
								commentsPageKey: s,
								draftKey: n
							})), e(Object(be.j)({
								[t]: {
									...o.comment
								}
							}))
						} else e(Ge({
							draftKey: n,
							error: m.error
						}))
					}
				}, Je = Object(o.a)(fe.C), Ze = Object(o.a)(fe.B), Xe = Object(o.a)(fe.D), $e = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = n();
					s(Je({
						id: e
					})), J.a(e, a);
					const i = await ((e, t) => Object(E.a)(Object(j.a)(e, [k.a]), {
						endpoint: Object(S.a)(`${e.apiUrl}/api/del`),
						method: g.ob.POST,
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
						error: e.error || Object(I.a)()
					}))(r(), e);
					i.ok ? s(Xe({
						id: e,
						postId: t
					})) : s(Ze({
						id: e,
						error: i.error
					}))
				}, et = e => async (t, s, n) => {
					let {
						apiContext: o
					} = n;
					const r = !s().features.comments.models[e].sendReplies;
					t(Object(be.j)({
						[e]: {
							sendReplies: r
						}
					})), (await Object(W.p)(o(), e, r)).ok || t(Object(be.j)({
						[e]: {
							sendReplies: !r
						}
					}))
				}, tt = (e, t) => async (s, o, r) => {
					let {
						gqlContext: a
					} = r;
					var i, c, d, l, u, m;
					s(Object(be.c)());
					const p = e => Object(h.f)(Object(h.e)(e, te.b.Error));
					if (((null === (c = null === (i = o().pages) || void 0 === i ? void 0 : i.comments) || void 0 === c ? void 0 : c.followed) || []).length === v.a) s(p(n.fbt._("You've reached your post follow limit", null, {
						hk: "3ebRql"
					})));
					else {
						const r = t === Z.a.FOLLOWED,
							i = {
								id: e,
								expiresAt: Date.now() + 6048e5
							};
						if (s(Object(be.p)(i)), (await ((e, t) => Object(y.a)(e, {
								...z,
								variables: {
									input: t
								}
							}))(a(), {
								commentId: e,
								followState: t
							})).ok) {
							Object(Q.yb)(null !== (u = null === (l = null === (d = o().pages) || void 0 === d ? void 0 : d.comments) || void 0 === l ? void 0 : l.followed) && void 0 !== u ? u : [], null === (m = o().user.account) || void 0 === m ? void 0 : m.id);
							const e = r ? n.fbt._("Followed! You’ll get updates when there’s new activity.", null, {
								hk: "2O1Ou3"
							}) : n.fbt._("Unfollowed. You won’t get updates on this comment anymore.", null, {
								hk: "4EAz6O"
							});
							s(Object(h.f)({
								kind: te.b.SuccessCommunityGreen,
								text: e
							}))
						} else s(Object(be.p)(i)), s(p(n.fbt._("Sorry, we had trouble doing that. Please try again.", null, {
							hk: "2N0vVk"
						})))
					}
				};

			function st(e) {
				let {
					commentId: t,
					commentsPageKey: s
				} = e;
				return async (e, n) => {
					const o = n(),
						r = Object(oe.c)(o, {
							commentId: t
						});
					if (!r) return;
					e(ve({
						commentId: t,
						commentsPageKey: s
					}));
					const a = {
						commentMode: r.media.rteMode,
						draftType: r.parentId ? X.c.replyToComment : X.c.replyToPost,
						rtJson: r.media.richtextContent,
						hasFocus: !0,
						text: ""
					};
					if (r.parentId) {
						const t = Object(oe.c)(o, {
								commentId: r.parentId
							}),
							n = Object(ne.j)(o, {
								commentId: r.parentId,
								commentLink: void 0,
								commentsPageKey: s
							});
						if (!t || null === n) return;
						await e(we({
							commentsPageKey: s,
							draftKey: r.id,
							parentCommentDepth: n,
							parentCommentId: t.id,
							formData: a,
							editorMode: r.media.rteMode
						}))
					} else await e(ke({
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
					if (!Object(h.S)(s())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const a = s().features.comments.models[e];
					if (!a) return;
					const c = a.isLocked ? u.l : u.f;
					t(Object(O.j)({
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
					})) : t(Object(O.j)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, E = Object(r.a)(x.J), y = e => async (t, s, n) => {
					let {
						apiContext: o,
						gqlContext: r
					} = n;
					const a = s(),
						i = a.features.comments.models[e],
						d = a.user.account ? a.user.account.displayText : null;
					i && d && (t(Object(O.j)({
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
					})), (await Object(u.a)(r(), e)).ok || t(Object(O.j)({
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
				}, j = (e, t) => async (s, n, o) => {
					let {
						apiContext: r,
						gqlContext: a
					} = o;
					const i = n(),
						d = i.features.comments.models[e],
						l = i.user.account ? i.user.account.displayText : null;
					d && l && (s(Object(O.j)({
						[e]: {
							approvedBy: null,
							bannedBy: l,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t,
							numReports: 0
						}
					})), (await Object(u.h)(a(), e, t)).ok || s(Object(O.j)({
						[e]: {
							approvedBy: d.approvedBy,
							bannedBy: d.bannedBy,
							isApproved: d.isApproved,
							isRemoved: d.isRemoved,
							isSpam: d.isSpam,
							numReports: d.numReports
						}
					})), Object(c.d)())
				}, C = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const a = s().features.comments.models[e];
					if (!a) return;
					const i = a.ignoreReports ? u.k : u.e;
					a.ignoreReports || t(y(e)), t(Object(O.j)({
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
					})) : t(Object(O.j)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, k = (e, t, s) => async (r, a, i) => {
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
				}, S = (e, t, s) => async (n, r, i) => {
					let {
						apiContext: c,
						gqlContext: d
					} = i;
					const l = r(),
						m = l.features.comments.models[e];
					if (!m) return;
					const p = m.postId,
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
					const f = Object(u.c)(d(), e, t),
						h = Object(u.d)(d(), e, !!s),
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
				c = s("./src/lib/makeActionCreator/index.ts"),
				d = s("./src/reddit/actions/comment/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/users.ts"),
				m = s("./src/reddit/endpoints/redditor/index.ts"),
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
			const C = Object(c.a)(v.l),
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
						c = Object(b.a)(i.body.data.subredditInfoById);
					t(C(c))
				}, S = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					e && t(k(e))
				}, I = Object(c.a)(v.m), N = (e, t) => {
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
				}, w = [j.z.ApproveComment, j.z.ApproveLink, j.z.RemoveComment, j.z.RemoveLink, j.z.SpamComment, j.z.SpamLink], P = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					var r, a;
					const {
						moderatorID: i,
						targetID: c,
						action: d
					} = null === (r = null == e ? void 0 : e.subscribe) || void 0 === r ? void 0 : r.data, l = s(), p = Object(y.k)(l), b = w.includes(d), f = i === p, h = N(l, c);
					if (!b || f || !h) return;
					const O = await Object(m.b)(o(), {
						id: i
					}) || (null === (a = Object(y.Cb)(l, {
						userId: i
					})) || void 0 === a ? void 0 : a.username);
					O && t(Object(u.z)(O)), t(I({
						targetID: c
					}))
				}, T = Object(c.a)(v.p), R = Object(c.a)(v.o), A = e => async (t, s, o) => {
					let {
						gqlContext: i
					} = o;
					var c, u, m, b, O, x;
					const v = Object(h.a)(e),
						_ = s(),
						g = null === (u = null === (c = null == _ ? void 0 : _.features) || void 0 === c ? void 0 : c.realtimeModqueue) || void 0 === u ? void 0 : u.toUpdate.includes(e),
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
							const s = null === (b = null === (m = null == j ? void 0 : j.body) || void 0 === m ? void 0 : m.data) || void 0 === b ? void 0 : b.postInfoById;
							t(Object(l.Q)({
								[e]: Object(f.f)(s)
							}))
						} else {
							const s = null === (x = null === (O = null == j ? void 0 : j.body) || void 0 === O ? void 0 : O.data) || void 0 === x ? void 0 : x.commentById;
							t(Object(d.j)({
								[e]: Object(p.a)(s)
							}))
						}
						t(R(e)), t(T({
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
				a = s("./src/reddit/endpoints/post/convert.ts"),
				i = s("./src/reddit/helpers/localStorage/index.ts"),
				c = s("./src/reddit/helpers/trackers/postComposer.ts"),
				d = s("./src/reddit/models/PostCreationForm/index.ts"),
				l = s("./src/reddit/models/RichTextJson/index.ts"),
				u = s("./src/reddit/models/Toast/index.ts"),
				m = s("./src/reddit/actions/postCreation/constants.ts");
			const p = Object(o.a)(m.H),
				b = Object(o.a)(m.p),
				f = Object(o.a)(m.R),
				h = (e, t, s) => async (o, i, h) => {
					let {
						apiContext: x
					} = h;
					c.m(i(), t);
					const v = t === d.i.MARKDOWN,
						_ = t === d.i.RICH_TEXT,
						g = m.k;
					if (v && Object(l.I)(s)) return o(f({
						editorKey: e,
						editorMode: d.i.MARKDOWN,
						content: ""
					})), void o(O(t));
					if (_ && !s) return o(f({
						editorKey: e,
						editorMode: d.i.RICH_TEXT,
						content: l.j
					})), void o(O(t));
					o(p(g));
					const E = await Object(a.a)(x(), t, v ? JSON.stringify(s) : s);
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
					const o = Object(i.l)();
					if (o >= 3) return;
					const a = s().user.prefs.useMarkdown ? d.i.MARKDOWN : d.i.RICH_TEXT;
					if (e === a) return;
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
					})), Object(i.wb)(o + 1)
				}
		},
		"./src/reddit/actions/reCaptchaEnterprise.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return h
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return x
			})), s.d(t, "e", (function() {
				return v
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
				O = Object(n.b)("EXECUTE_RECAPTCHA_ENTERPRISE"),
				x = e => i(t => d()([p(t), b(t, e.experiment), e => e.tracking.reCaptchaEnterprise.load === n.a.Succeeded], Boolean))(async t => {
					t(O.requested());
					try {
						const s = await r.b.execute({
							action: e.action,
							fast: e.fast
						});
						return t(O.succeeded({
							token: s
						})), s
					} catch (s) {
						if (t(O.failed()), e.catchAndLogError) return a.c.withScope(e => {
							Object(a.a)(e, {
								serverLogging: !1
							}), a.c.captureException(s)
						}), "";
						throw s
					}
				}),
				v = Object(n.b)("SEND_RECAPTCHA_TOKEN")
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
				w = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				T = s("./src/reddit/actions/comment/moderation.ts"),
				R = s("./src/reddit/actions/modal.ts"),
				A = s("./src/reddit/actions/post.ts"),
				M = s("./src/reddit/actions/toaster.ts"),
				L = s("./src/reddit/constants/modals.ts"),
				D = s("./src/lib/makeApiRequest/index.ts"),
				B = s("./src/lib/omitHeaders/index.ts"),
				F = s("./src/reddit/constants/headers.ts"),
				U = s("./src/reddit/helpers/addRedesignIdentifier/index.ts"),
				z = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const W = (e, t) => Object(D.a)(Object(B.a)(e, [F.a]), {
					endpoint: Object(U.a)(`${e.apiUrl}/api/v1/modactions/removal_reasons/`),
					method: C.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				K = (e, t, s) => Object(D.a)(Object(B.a)(e, [F.a]), {
					endpoint: Object(U.a)(Object(z.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`)),
					method: C.ob.POST,
					type: "json",
					data: t
				});
			var H = s("./src/reddit/helpers/isPost.ts"),
				G = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				V = s("./src/reddit/helpers/routeKey/index.ts"),
				q = s("./src/reddit/models/ModQueue/index.ts"),
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
				}, ne = Object(k.a)(i), oe = Object(k.a)(c), re = Object(k.a)(d), ae = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(ne());
					const c = await ((e, t, s) => Object(D.a)(Object(B.a)(e, [F.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons`),
						method: C.ob.POST,
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
							kind: J.b.SuccessMod,
							text: n.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(c.error))
				}, ie = Object(k.a)(l), ce = Object(k.a)(u), de = Object(k.a)(m), le = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(ie());
					const c = await ((e, t, s) => Object(D.a)(Object(B.a)(e, [F.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`),
						method: C.ob.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(a(), i, t);
					c.ok ? (s(ce({
						subredditId: e,
						reason: t
					})), s(Object(M.f)({
						kind: J.b.SuccessMod,
						text: n.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(de(c.error))
				}, ue = Object(k.a)(p), me = Object(k.a)(b), pe = Object(k.a)(f), be = (e, t) => async (s, o, r) => {
					let {
						apiContext: a
					} = r;
					const i = o().subreddits.models[e].name;
					s(ue());
					const c = await ((e, t, s) => Object(D.a)(Object(B.a)(e, [F.a]), {
						endpoint: Object(U.a)(`${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`),
						method: C.ob.DELETE
					}))(a(), i, t);
					c.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(M.f)({
						kind: J.b.SuccessMod,
						text: n.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(pe(c.error))
				}, fe = Object(k.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, n, o) => {
					let {
						apiContext: r
					} = o;
					const a = n();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(se(e)), s(fe({
						subredditId: e,
						itemIds: t
					})), s(Object(R.i)(L.a.ADD_REMOVAL_REASON))
				}, Oe = Object(k.a)("REMOVALREASONS__SUBMIT_PENDING"), xe = Object(k.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ve = Object(k.a)("REMOVALREASONS__SUBMIT_FAILED"), _e = Object(k.a)("REMOVALREASONS__MESSAGE_PENDING"), ge = Object(k.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Ee = Object(k.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ye = Object(k.a)("REMOVALREASONS__MESSAGE_FAILED"), je = (e, t, s, n, o, r) => async (a, i, c) => {
					let {
						apiContext: d
					} = c;
					const l = i(),
						u = l.user.account && l.user.account.displayText,
						m = e[0],
						p = Object(H.a)(m) ? Y.e.Post : Y.e.Comment,
						b = p === Y.e.Post ? l.posts.models[m] : l.features.comments.models[m],
						f = p === Y.e.Post ? A.Q : w.j;
					if (!b || !u) return !1;
					a(Oe()), a(f({
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
						O = await W(d(), h);
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
								i = await K(d(), Object(Y.h)(o, p), p);
							if (i.ok) {
								if ([Y.f.Public, Y.f.PublicAsSubreddit].includes(n)) {
									if (a(Ee()), i.body) {
										const e = Object(G.a)(i.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(X.f)(l),
											n = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let o = s && n && Object(V.a)(n, l, l.posts.models[e.postId]);
										if (o || (o = Object(S.a)(e.postId, null, {
												sort: C.w,
												hasSortParam: !0
											})), p === Y.e.Post) {
											const s = Object(I.a)(Q.c.replyToPost, m);
											a(Object(P.r)({
												...t,
												headCommentId: Object(Z.w)(l, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: s
											}));
											const n = l.postStickiedComments.data[m];
											a(Object(T.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), n && n !== e.id && a(Object(w.j)({
												[n]: {
													isStickied: !1
												}
											}))
										} else if (p === Y.e.Comment) {
											const e = Object(I.a)(Q.c.replyToComment, b.id),
												s = Object(Z.j)(l, {
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
								} else a(ge());
								return !0
							}
							return a(ye(i.error)), !1
						}
					} else a(ve(O.error)), a(f({
						[m]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, s, o, r) => async (a, i, c) => {
					let {
						apiContext: d
					} = c;
					const l = i(),
						u = l.user.account && l.user.account.displayText;
					if (!u) return;
					a(Oe());
					const m = Object(M.f)({
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
						b = await W(d(), p);
					if (b.ok) {
						const n = {
							ids: e,
							operation: q.a.RemovalReason,
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
								r = await K(d(), Object(Y.h)(n, Y.e.Bulk), Y.e.Bulk);
							r.ok ? (a(ge()), a(m)) : a(ye(r.error))
						} else a(m)
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
						routes: c
					} = i;
					const d = a();
					Object(n.a)(e, c, d) ? s(Object(r.b)(e)) : t ? Object(o.e)(e, "_blank") : window.location.assign(e)
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
				c = s("./src/reddit/actions/post.ts"),
				d = s("./src/reddit/components/RichTextJson/index.tsx"),
				l = s("./src/reddit/constants/adEvents.ts"),
				u = s("./src/reddit/selectors/experiments/supportingLinkAds.ts"),
				m = s("./src/reddit/components/PostTitle/index.tsx"),
				p = s("./src/reddit/components/AdSupplementaryText/index.m.less"),
				b = s.n(p);
			const f = e => {
				let t;
				switch (e) {
					case m.b.ExtraLarge:
						t = b.a.ExtraLarge;
						break;
					case m.b.Large:
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
				const m = Object(r.d)();
				if (!Object(r.e)(u.a) || !Object(i.B)(t) || !t.adSupplementaryText || "string" == typeof t.adSupplementaryText) return null;
				if (0 === t.adSupplementaryText.document.length) return null;
				return o.a.createElement("div", {
					className: Object(a.a)(n, b.a.AdSupplementaryText),
					"data-testid": `${t.id}-ad-supplementary-text`,
					onClick: e => {
						e.target instanceof HTMLAnchorElement && m(Object(c.y)(t, l.a.Click))
					}
				}, o.a.createElement(d.b, {
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
					apiContext: a
				} = r;
				const i = await (async (e, t, s) => Object(f.a)(Object(h.a)(e, [O.a]), {
						endpoint: `${e.apiUrl}/api/set_suggested_sort/`,
						method: d.ob.POST,
						data: {
							api_type: "json",
							id: t,
							sort: s
						}
					}))(a(), e, t),
					c = `error-block-${t}`,
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
				y = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				j = s("./src/reddit/components/SearchResultsContent/helpers/isCommentSearchRoute.ts"),
				C = s("./src/reddit/components/TrackingHelper/index.tsx"),
				k = s("./src/reddit/contexts/PageLayer/index.tsx"),
				S = s("./src/reddit/controls/Dropdown/index.tsx"),
				I = s("./src/reddit/controls/Dropdown/Row.tsx"),
				N = s("./src/reddit/controls/Search/CommentSearch/index.tsx"),
				w = s("./src/reddit/controls/ToggleSwitch/index.tsx"),
				P = s("./src/reddit/helpers/path/index.ts"),
				T = s("./src/reddit/selectors/telemetry.ts");
			s("./src/telemetry/models/Event.ts");
			const R = (e, t, s, n, o) => r => ({
					source: "comment_sort",
					action: "click",
					noun: e,
					actionInfo: {
						pageType: t ? "post_detail" : "home"
					},
					listing: Object(T.A)(r, void 0, {
						oldSort: s,
						sort: n,
						source: o
					}),
					userSubreddit: Object(T.vb)(r)
				}),
				A = (e, t) => s => ({
					source: "comment_highlighting",
					action: t,
					noun: e
				}),
				M = e => ({
					subreddit: Object(T.mb)(e),
					userSubreddit: Object(T.vb)(e)
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
				z = s("./src/reddit/selectors/experiments/commentSearchPdp.ts"),
				W = s("./src/reddit/selectors/moderatorPermissions.ts"),
				K = s("./src/reddit/selectors/posts.ts"),
				H = s("./src/reddit/selectors/tooltip.ts"),
				G = s("./src/reddit/selectors/user.ts"),
				V = s("./src/reddit/components/CommentSort/CommentSort.m.less"),
				q = s.n(V),
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
						className: q.a.HighlightWrapper
					}, r.a.createElement(I.b, {
						className: Object(c.a)(q.a.HighlightPicker, q.a.Row),
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
					commentSearchPdp: e => Object(z.a)(e),
					contestModeModalIsOpen: Object(F.b)("CommentSort--ContestMode--Modal"),
					dropdownIsOpen: Object(H.b)($),
					highlightIsOpen: Object(H.b)(ee),
					hasModeratorPostPermissions: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(W.m)(e, {
							postId: s
						});
						return !!n && n.posts
					},
					post: K.F,
					postPermalink: K.E,
					showCommentHighlighter: (e, t) => {
						let {
							postId: s
						} = t;
						const n = Object(G.x)(e),
							o = !!Object(W.m)(e, {
								postId: s
							}),
							r = Object(K.F)(e, {
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
						changeHighlightSort: t => e(Object(u.b)({
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
						toggleContestModeModal: () => e(Object(m.i)("CommentSort--ContestMode--Modal"))
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
						dropdownIsOpen: u,
						elementRef: m,
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
						suggestedSort: T,
						showTooltip: R,
						toggleContestModeModal: M
					} = this.props, L = v.contestMode, F = null == o, U = i.bucketed && Object(j.a)(x) && Object(j.b)(v), z = i.bucketed && Object(j.b)(v) && F, W = !(null === (e = O.search) || void 0 === e ? void 0 : e.includes(d.v.CONFIDENCE)), K = S === d.v.CONFIDENCE && W, H = f && !K, G = d.x[S], V = G ? G() : "", Q = T && S === T && !K ? this.addSuggestedLabel(V) : V, Y = L ? n.fbt._("End contest mode?", null, {
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
						className: q.a.DropdownContainer
					}, r.a.createElement(I.b, {
						className: Object(c.a)(q.a.SortPicker, q.a.Row),
						textClassName: q.a.SortOptionDropdownText,
						displayText: `${n.fbt._("Sort by",null,{hk:"E6T9r"})}: ${Q}`,
						id: $,
						noHover: !0,
						skipRoleAttr: !0,
						onClick: this.onOpenDropdownClick
					}), r.a.createElement(D.b, {
						className: q.a.DropdownTriangle,
						onClick: this.onOpenDropdownClick
					})), r.a.createElement(se, {
						isOpen: u,
						tooltipId: $
					}, [d.v.CONFIDENCE, d.v.TOP, d.v.NEW, d.v.CONTROVERSIAL, d.v.OLD, d.v.QA].map(e => {
						const t = a || y,
							s = Object(P.b)(t),
							n = d.x[e],
							o = n ? n() : "";
						return r.a.createElement(E.a, {
							className: q.a.ViewFullLinkOrOverlayLink,
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
						className: Object(c.a)(s, q.a.container, {
							[q.a.hideCommentSort]: !k && ne,
							[q.a.paddingBottom]: U
						}),
						ref: m
					}, r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: q.a.containerRow
					}, !ne && !U && oe, H && !ne && !U && (T ? r.a.createElement("button", {
						className: q.a.SortLink,
						onClick: S !== T ? this.setSortOnClick : this.clearSortOnClick
					}, S !== T ? n.fbt._("Set new suggested sort", null, {
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
						onMouseEnter: R,
						onMouseLeave: p
					}, r.a.createElement(g.c, {
						className: q.a.Tooltip,
						text: n.fbt._("Suggested sort defaults Redditors to a specific way of sorting comments within this post", null, {
							hk: "3KM0ma"
						}),
						tooltipId: te
					}), r.a.createElement(B.a, {
						className: q.a.Info
					})))), f && r.a.createElement("button", {
						className: Object(c.a)(q.a.ContestMode, U && q.a.commentSearchMargin),
						onClick: this.props.toggleContestModeModal
					}, n.fbt._("Contest", null, {
						hk: "1KrhdJ"
					}), r.a.createElement(w.a, {
						className: q.a.ToggleSwitch,
						on: L
					})), U || z ? r.a.createElement("div", {
						className: q.a.containerRow
					}, !U && r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: q.a.verticalDivider
					}, "|")), r.a.createElement("div", null, r.a.createElement(N.c, {
						experiment: i,
						commentId: o,
						prevLocation: O,
						postId: this.props.postId
					}))) : null), k && r.a.createElement("div", {
						className: q.a.containerRow
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
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				u = s("./src/reddit/components/Media/index.tsx"),
				m = s("./src/reddit/components/PostMeta/index.tsx"),
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
				w = E.a.div("FlatItem", g.a),
				P = E.a.span("FlatListDotSpacer", g.a),
				T = E.a.wrapped(k, "LinkContainer", g.a),
				R = E.a.div("Content", g.a),
				A = E.a.div("ThumbnailContainer", g.a),
				M = Object(c.c)({
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
				const c = {
						post: a,
						hideGildCta: !0,
						inSubredditOrProfile: !1,
						isCurrentUserProfilePost: s,
						isTopicPage: n,
						shouldShowSubscribeButton: !1,
						subredditOrProfile: i,
						tooltipType: `CrosspostBox--${o.isListing}`
					},
					d = t;
				return a && !a.media ? r.a.createElement(T, {
					className: d
				}, r.a.createElement(R, null, r.a.createElement(S, null, r.a.createElement(m.a, c)), D(a), a.source && r.a.createElement(b.a, {
					post: a
				}), F(e)), z(e)) : r.a.createElement(k, {
					className: d
				}, r.a.createElement(S, null, r.a.createElement(m.a, c)), D(a), B(e), F(e))
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
					return r.a.createElement("div", null, r.a.createElement(u.a, y({}, n, {
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
					return r.a.createElement(N, null, r.a.createElement(w, null, n.fbt._({
						"*": "{point count} points",
						_1: "1 point"
					}, [n.fbt._plural(s, "point count", Object(l.b)(s))], {
						hk: "PNZhd"
					})), r.a.createElement(P, null), r.a.createElement(w, null, U(e)))
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
						to: Object(d.a)(t.permalink, !0),
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
		"./src/reddit/components/DevvitCustomPost/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/controls/Button/index.tsx"),
				a = s("./src/reddit/models/Media/index.ts"),
				i = s("./src/reddit/icons/fonts/OutboundLink/index.tsx");
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function d(e) {
				const {
					post: t
				} = e, s = t.permalink.replace("/comments/", "/post-viewer/");
				return Object(a.G)(t) ? o.a.createElement("div", {
					className: "flex items-center justify-center m-xs bg-neutral-background-weak border-sm border-neutral-border border-solid rounded-[0.5rem] w-[490px]"
				}, o.a.createElement("div", {
					className: "flex flex-col text-center py-[48px]"
				}, o.a.createElement("div", {
					className: "max-w-[294px] my-md leading-5 text-neutral-content"
				}, o.a.createElement("p", {
					className: "text-[14px]"
				}, c._("We're launching a new type of custom post. For now, it must be opened in a new window.", null, {
					hk: "v8S8Z"
				})), o.a.createElement("p", {
					className: "text-[14px]"
				}, c._("It's us, not you.", null, {
					hk: "4wyEYD"
				}))), o.a.createElement(r.a, {
					className: "m-auto mt-sm",
					kind: r.b.ExternalLink,
					href: s,
					target: "_blank",
					priority: r.c.Primary,
					rplStyle: !0
				}, o.a.createElement(o.a.Fragment, null, o.a.createElement(i.a, {
					className: "ml-0 m-xs"
				}), c._("Open", null, {
					hk: "1yvDSH"
				}))))) : null
			}
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
				c = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				d = s("./src/reddit/selectors/posts.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts");
			const {
				fbt: u
			} = s("./node_modules/fbt/lib/FbtPublic.js"), m = e => {
				let {
					participantsCount: t
				} = e;
				return u._({
					"*": "· {total participated users} players",
					_1: "· {total participated users} player"
				}, [u._param("total participated users", Object(l.b)(t)), u._plural(t)], {
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
					o = s.status === c.a.Live,
					l = s.status === c.a.Closed,
					u = Object(a.e)(e => Object(d.U)(e, {
						postId: t.id
					}));
				return r.a.createElement("div", {
					className: b.a.container
				}, r.a.createElement("div", {
					className: b.a.label
				}, r.a.createElement("span", null, null == u ? void 0 : u.displayText), o && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.live)
				}, f._("Live", null, {
					hk: "1G2P1W"
				})), l && r.a.createElement("span", {
					className: Object(n.a)(b.a.badge, b.a.ended)
				}, f._("Ended", null, {
					hk: "4s3hco"
				})), void 0 !== s.totalParticipantsCount && r.a.createElement(m, {
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
				return Ge
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./src/reddit/models/Prediction/Tournament/index.ts"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				d = s("./src/reddit/helpers/hasModFullPermissions/index.ts"),
				l = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				m = s("./src/reddit/actions/post.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/DevvitCustomPost/index.tsx"),
				f = s("./src/reddit/components/Econ/Audio/async.ts"),
				h = s("./src/reddit/components/Econ/Prediction/TournamentPostBody/async.ts"),
				O = s("./src/reddit/components/Econ/Prediction/TournamentPostTitle/index.tsx"),
				x = s("./src/reddit/components/IntuitivePostTypes/OptionalText.tsx"),
				v = s("./src/reddit/hooks/useIntersectionObserver.ts"),
				_ = s("./src/reddit/hooks/useTracking.ts"),
				g = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Post/index.ts"),
				y = s("./src/reddit/models/Vote/index.ts"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				C = s("./src/reddit/selectors/experiments/web2x_cta.ts"),
				k = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/selectors/posts.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				N = s("./src/lib/ads/index.ts"),
				w = s("./src/lib/classNames/index.ts"),
				P = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				T = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				R = s("./src/reddit/components/AdLinkWrapper/index.tsx"),
				A = s("./src/reddit/components/AdLinkWrapperContent/index.tsx"),
				M = s("./src/reddit/components/AdSupplementaryText/index.tsx"),
				L = s("./src/reddit/components/BoostPost/index.ts"),
				D = s("./src/reddit/components/CommunityTopicSurvey/AggregateSurvey.tsx"),
				B = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				F = s("./src/reddit/components/CreatorStats/loader.tsx"),
				U = s("./src/reddit/components/EventPost/EventMetaHeader/index.tsx"),
				z = s("./src/reddit/components/Flatlist/index.tsx"),
				W = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				K = s("./src/reddit/components/ModModeFilteredReason/index.tsx"),
				H = s("./src/reddit/components/ModModeFilteredReason/helpers.ts"),
				G = s("./src/reddit/components/ModModeReports/index.tsx"),
				V = s("./src/reddit/components/ModModeReports/helpers.ts"),
				q = s("./src/reddit/components/ModQueueActionBar/index.tsx"),
				Q = s("./src/reddit/components/ModQueueActionBar/ModQueuePostStats.tsx"),
				Y = s("./src/reddit/components/OneFeed/PostRecommendationContext.tsx"),
				J = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				Z = s("./src/reddit/components/PostContainer/index.tsx"),
				X = s("./src/reddit/components/PostLeftRail/index.tsx"),
				$ = s("./src/reddit/components/PostMedia/index.tsx"),
				ee = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				te = s("./src/reddit/icons/fonts/Sticky/index.tsx"),
				se = s("./src/reddit/components/PostPinnedHeader/index.m.less"),
				ne = s.n(se);
			const {
				fbt: oe
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var re = () => o.a.createElement("div", {
					className: ne.a.container
				}, o.a.createElement(te.a, {
					className: ne.a.pinnedIcon,
					isFilled: !0
				}), o.a.createElement("span", {
					className: ne.a.metaText
				}, oe._("pinned by moderators", null, {
					hk: "1qU8t4"
				}))),
				ae = s("./src/reddit/components/PostRailAndVotes/index.tsx"),
				ie = s("./src/reddit/components/PostTitle/index.tsx"),
				ce = s("./src/reddit/components/PostTopLine/index.tsx"),
				de = s("./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx"),
				le = s("./src/reddit/components/SourceLink/index.tsx"),
				ue = s("./src/reddit/constants/postLayout.ts"),
				me = s("./src/reddit/contexts/InsideOverlay.tsx"),
				pe = s("./src/reddit/contexts/PageLayer/index.tsx"),
				be = s("./src/reddit/contexts/Post/index.tsx"),
				fe = s("./src/reddit/helpers/isCrosspost.ts"),
				he = s("./src/reddit/helpers/path/index.ts"),
				Oe = s("./src/reddit/helpers/postEvent.ts"),
				xe = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ve = s.n(xe),
				_e = s("./src/reddit/helpers/trackers/creatorStats.ts"),
				ge = s("./src/reddit/hooks/useClickSourceData.ts"),
				Ee = s("./src/reddit/models/Audio/index.ts"),
				ye = s("./src/reddit/selectors/experiments/intuitivePostTypes.ts"),
				je = s("./src/reddit/selectors/experiments/loggedOutBlockingInterstitial.ts"),
				Ce = s("./src/reddit/selectors/experiments/nsfwBlockingExperiment.ts"),
				ke = s("./src/reddit/constants/experiments.ts"),
				Se = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Ie = s("./src/reddit/helpers/getRichTextContent/index.ts");
			const Ne = Object(i.a)(S.M, e => e.some(Ie.c)),
				we = Object(i.a)(Ne, e => e),
				Pe = (e, t) => Object(Se.c)(e, {
					experimentName: ke.yd,
					experimentEligibilitySelector: e => {
						const {
							listingKey: s
						} = t;
						return !!s && we(e, {
							listingKey: s
						})
					}
				});
			var Te = s("./src/reddit/selectors/experiments/index.ts");

			function Re(e) {
				return e === ke.Gf.Minimalist || e === ke.Gf.Description || e === ke.Gf.HotnessSignals
			}
			var Ae = s("./src/reddit/selectors/modQueue.ts"),
				Me = s("./src/reddit/selectors/postFlair.ts"),
				Le = s("./src/reddit/selectors/i18n/index.ts"),
				De = s("./src/reddit/components/LiveChatActiveUserCountWrapper/index.tsx"),
				Be = s("./src/reddit/components/LargePost/index.m.less"),
				Fe = s.n(Be);

			function Ue() {
				return (Ue = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ze = e => {
					let {
						className: t,
						disableVisited: s,
						children: n,
						...r
					} = e;
					return o.a.createElement(T.a, Ue({}, r, {
						className: Object(w.a)(t, Fe.a.styledLink, {
							[Fe.a.isVisitedEnabled]: !s
						})
					}), n)
				},
				We = (e, t) => {
					const {
						listingKey: s
					} = t;
					return s ? Object(S.M)(e, {
						listingKey: s
					}) : void 0
				},
				Ke = Object(r.b)(() => Object(i.c)({
					autoplayPref: I.d,
					isModQueueDisplayEnabled: e => Object(Ae.b)(e, !0),
					activeModalId: j.a,
					hideNSFWPref: I.H,
					flairStyleTemplate: pe.Y,
					isBlurredPreview: Ce.b,
					isCurrentUserProfilePost: S.l,
					isLoggedIn: I.S,
					isActive: S.j,
					moderatorPermissions: k.m,
					modModeEnabled: pe.W,
					posts: We,
					postHeightVariant: Pe,
					shouldShowNsfwListingBelow: Le.b,
					showEditFlair: Me.a,
					isModWithUserNotesPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						return !!s && Object(k.i)(e, s.id)
					},
					isOptionalTextEnabled: ye.a,
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
					isNightMode: I.fb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						handleVote: t => {
							const n = t === y.a.upvoted ? Object(m.ib)(s) : Object(m.v)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(m.eb)(s)),
						onOpenReportsDropdown: t => e(Object(p.h)({
							tooltipId: t
						}))
					}
				}),
				He = o.a.memo(e => {
					const {
						handlePostLinkClick: t,
						postPermalink: s,
						disableVisited: n,
						shouldOpenPostInNewTab: r,
						shouldStylePostAfterVisitLink: a,
						children: i
					} = e;
					return a ? o.a.createElement(ze, {
						"data-click-id": "body",
						target: r ? "_blank" : void 0,
						disableVisited: n,
						to: s,
						onClick: t
					}, e.children) : o.a.createElement(o.a.Fragment, null, i)
				}),
				Ge = e => {
					const {
						isEnabled: t,
						variant: s
					} = Object(r.e)(e => (e => {
						const t = Object(Se.c)(e, {
							experimentEligibilitySelector: Te.e,
							experimentName: ke.Mc
						}) || ke.W.Control1;
						return {
							isEnabled: Re(t),
							variant: t
						}
					})(e), r.c);
					return t ? o.a.createElement(de.b, Ue({}, e, {
						variant: s,
						pageType: de.a.Home
					})) : null
				},
				Ve = o.a.memo(e => {
					const {
						autoplayPref: t,
						availableWidth: s,
						className: i,
						currentUser: p,
						eventFactory: y,
						flairStyleTemplate: j,
						forceLoadMedia: C,
						hideNSFWPref: k,
						hostPostData: S,
						imageGalleryCurrentItem: T,
						inSubredditOrProfile: te = !1,
						isBlurredPreview: se,
						isCommentsPage: ne,
						isCurrentUserProfilePost: oe,
						isFrontpage: de,
						isGalleryTileLayoutDefault: me,
						isModWithUserNotesPermissions: be,
						isLoggedIn: xe,
						isOverlay: ye,
						isTopicPage: Ce,
						isCommentCountAnimationEnabled: Se,
						isVoteCountAnimationEnabled: Ie,
						isCountAnimShadowTestEnabled: Ne,
						listingIndex: we,
						listingKey: Pe,
						moderatorPermissions: Te,
						modModeEnabled: Re,
						onClickPost: Ae,
						onIgnoreReports: Me,
						onOpenReportsDropdown: Le,
						post: Be,
						postHeightVariant: Ue,
						scrollerItemRef: ze,
						shouldShowGalleryTileOption: We,
						shouldShowInsightsButton: Ke,
						shouldShowNsfwListingBelow: Ve,
						showEditFlair: qe,
						subredditOrProfile: Qe,
						userIsOp: Ye,
						postId: Je,
						postIds: Ze,
						onceInViewport: Xe,
						isOptionalTextEnabled: $e,
						showCTAExperimentDesign: et,
						isModQueueDisplayEnabled: tt,
						showRealtimeUpdateAnimation: st,
						isUpdatedContent: nt,
						isNightMode: ot,
						onSubscribe: rt = (() => {})
					} = e, at = Object(_.a)(), it = Object(pe.ib)(), ct = Object(r.e)(e => Object(pe.G)(e, {
						pageLayer: it
					})), dt = !!e.redditStyle || !!e["data-redditstyle"], lt = dt ? void 0 : j, ut = Object(l.a)(Te), mt = Re && ut, pt = Object(c.a)(Te), bt = Object(d.a)(Te), ft = Object(V.c)(Be), ht = Object(H.a)(Be), Ot = !!Be.media && Be.media.type === g.o.RTJSON, xt = Ye && Ot, vt = s ? s - X.a : void 0, _t = !!Be.recommendationContext, gt = !(de && xe || Ce) || _t && xe, Et = (e => e === ke.wf.OnlyTitles)(Ue) && !Object(fe.a)(Be), yt = (e => e === ke.wf.MediumHeight)(Ue) && !Object(fe.a)(Be), jt = (e => {
						var t;
						const {
							post: s,
							postIds: n,
							posts: o
						} = e;
						if (!Object(E.v)(s) || (null === (t = s.pollData) || void 0 === t ? void 0 : t.isPrediction)) return;
						const r = n && 0 === n.indexOf(s.id),
							a = n && 1 === n.indexOf(s.id),
							i = o && o[1] && Object(E.v)(o[1]);
						return {
							hasTopCompactPostStyles: r && i,
							hasBottomCompactPostStyles: a,
							showPinnnedHeader: r
						}
					})(e), Ct = Object(r.d)(), kt = Object(r.e)(je.b), St = Object(r.e)(je.c), It = Object(r.e)(I.lb), Nt = Object(ge.a)(), wt = Be.permalink, Pt = e.isCommentPermalink ? Object(he.b)(wt) : Object(P.a)(wt, void 0, Nt), Tt = !!(null == S ? void 0 : S.shouldShowLinkedPosts), Rt = (!te || Tt || Ve) && !Be.isSponsored, At = Object(N.t)(Be, T), Mt = Object(n.useRef)(null), Lt = Object(n.useCallback)(e => {
						e.forEach(e => {
							const {
								isIntersecting: t
							} = e;
							t && (null == Xe || Xe(we))
						})
					}, [Xe, we]);
					Object(v.a)(Mt, Lt);
					const [Dt, Bt] = Object(n.useState)(!1), Ft = Object(n.useCallback)(() => {
						Bt(!Dt), at(Object(_e.d)(Je))
					}, [Dt, at, Je]), Ut = !!(se && (null == Qe ? void 0 : Qe.isNSFW)), zt = Object(n.useRef)({
						renderingObjectInfo: Be
					}), Wt = Object(n.useCallback)(e => {
						(kt || St) && (e.preventDefault(), Ct(Object(m.Z)(Object(he.b)(Be.permalink), Be.id)))
					}, [Ct, kt, St, Be.id, Be.permalink]), Kt = Be && Be.media && (Be.media.type === g.o.TEXT || Be.media.type === g.o.RTJSON), Ht = Object(E.r)(Be), [Gt, Vt] = Object(n.useState)(!1);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(Z.b, {
						className: Object(w.a)(Fe.a.container, i, ve.a.largeAndMediumPostStyles, ve.a.largeAndMediumActiveStyles, Object(u.a)(e), {
							[ve.a.mUseRedditTheme]: dt,
							[Fe.a.topCompactPost]: jt && jt.hasTopCompactPostStyles,
							[Fe.a.bottomCompactPost]: jt && jt.hasBottomCompactPostStyles,
							[Fe.a.shouldShowOverflow]: Ke,
							[Fe.a.realtimeAnimation]: st,
							[Fe.a.realtimeUpdated]: nt,
							[Fe.a.isNightMode]: ot
						}),
						isOverlay: ye,
						style: tt && (st || nt) ? ot ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : Object(u.b)(e.flairStyleTemplate),
						post: Be,
						onClick: Ae,
						eventFactory: y
					}, o.a.createElement("div", {
						ref: Mt
					}), o.a.createElement(ae.a, {
						model: Be,
						handleVote: e.handleVote,
						showBulkActionCheckbox: e.showBulkActionCheckbox,
						isCheckboxSelected: e.isCheckboxSelected,
						isCountAnimShadowTestEnabled: Ne,
						isVoteCountAnimation: Ie,
						toggleCheckbox: e.toggleCheckbox,
						flairStyleTemplate: lt,
						redditStyle: dt,
						postId: Je
					}), o.a.createElement(J.a, {
						className: Object(w.a)(Fe.a.backgroundWrapper, {
							[Fe.a.isEvent]: Object(Oe.a)(Be),
							[Fe.a.shouldUseRoundedBorder]: Ke,
							[Fe.a.realtimeAnimation]: st,
							[Fe.a.realtimeUpdated]: nt,
							[Fe.a.isNightMode]: ot
						}),
						"data-click-id": "background",
						flairStyleTemplate: lt,
						post: Be,
						redditStyle: dt,
						overrideBackgroundColor: tt && (st || nt) ? ot ? {
							backgroundColor: "#030303"
						} : {
							backgroundColor: "#F0F5F9"
						} : void 0
					}, o.a.createElement(U.a, {
						post: Be
					}), jt && jt.showPinnnedHeader && o.a.createElement(re, null), Object(a.c)(Be) && o.a.createElement(o.a.Fragment, null, o.a.createElement(O.a, {
						post: Be
					}), o.a.createElement(h.a, {
						post: Be
					})), !Object(a.c)(Be) && o.a.createElement(o.a.Fragment, null, Ht && o.a.createElement(Y.a, {
						content: Be.recommendationContext.content,
						layout: ue.g.Large,
						post: Be
					}), o.a.createElement(ce.a, {
						className: Fe.a.postTopLine,
						hideNSFWPref: k,
						hostPostData: S,
						iconClassName: Fe.a.postTopLineIcon,
						inSubredditOrProfile: te,
						isCommentsPage: !!ne,
						isCompactPinnedPost: !!jt,
						isCurrentUserProfilePost: oe,
						isModWithUserNotesPermissions: be,
						isOverlay: !!ye,
						isTopicPage: !!Ce,
						listingKey: Pe,
						post: Be,
						shouldShowSubscribeButton: gt,
						showSubreddit: Rt,
						showSubredditIcon: !0,
						subredditOrProfile: Qe,
						onSubscribed: () => {
							Vt(!0), rt()
						}
					}), o.a.createElement(ie.c, {
						className: Fe.a.postTitle,
						post: Be,
						redditStyle: dt,
						size: ie.b.Large,
						titleColor: lt && lt.postTitleColor,
						isOverlay: ye
					}), o.a.createElement(M.a, {
						className: Fe.a.adSupplementaryText,
						post: Be,
						size: ie.b.Large
					}), Be.source && !Be.isSponsored && !Ut && o.a.createElement(o.a.Fragment, null, o.a.createElement(le.a, {
						className: Fe.a.sourceLink,
						post: Be
					}), $e && Be.media && Be.media.type !== g.o.TEXT && Be.media.type !== g.o.IMAGE && Be.media.richtextContent && o.a.createElement(x.a, {
						content: Be.media.richtextContent,
						rtJsonElementProps: zt.current
					}))), o.a.createElement("div", {
						className: Fe.a.postMediaWrapper
					}, !jt && !Object(g.G)(Be) && o.a.createElement(He, {
						handlePostLinkClick: Wt,
						postPermalink: Pt,
						disableVisited: e.disableVisited,
						shouldOpenPostInNewTab: It,
						shouldStylePostAfterVisitLink: Kt
					}, o.a.createElement($.a, {
						isGalleryTileLayoutDefault: me,
						isListing: !0,
						isMediumHeight: yt,
						isNotCardView: !!ye,
						isTitleOnly: Et,
						showCentered: !0,
						flairStyleTemplate: lt,
						post: Be,
						availableWidth: vt,
						shouldLoad: C,
						scrollerItemRef: ze,
						autoplayPref: t,
						shouldShowGalleryTileOption: We
					})), Object(g.G)(Be) && o.a.createElement(b.a, {
						post: Be
					})), Object(N.v)(Be, T) && o.a.createElement(R.a, {
						className: Fe.a.adLinkWrapper,
						ctaExperimentDesign: et && "card"
					}, o.a.createElement(A.a, {
						post: Be,
						adLinkContent: At,
						ctaExperimentDesign: et && "card"
					})), Re && ut && ht && !tt && o.a.createElement("div", {
						className: Fe.a.modModeBannerWrapper
					}, o.a.createElement(K.a, {
						thing: Be
					})), Re && ut && ft && !tt && o.a.createElement("div", {
						className: Fe.a.modModeBannerWrapper
					}, o.a.createElement(G.a, {
						onIgnoreReports: Me,
						reportable: Be
					})), Object(Ee.b)(Be) && o.a.createElement(f.a, null), o.a.createElement(W.d, null), tt && o.a.createElement(Q.a, {
						post: Be
					}), Be.discussionType === E.b.Chat && o.a.createElement(De.a, {
						postId: Be.id,
						className: Fe.a.liveLabel
					}), o.a.createElement("div", {
						className: Fe.a.flatListContainer
					}, o.a.createElement(B.a, {
						className: Fe.a.horizontalVotes,
						compact: !1,
						flairStyleTemplate: lt,
						model: Be,
						onVoteClick: e.handleVote
					}), !Be.isSurveyAd && (tt ? o.a.createElement(q.a, {
						content: Be,
						listingKey: Pe,
						hostPostData: S
					}) : o.a.createElement(z.c, {
						currentUser: p,
						hasModFlairPerms: pt,
						hasModFullPerms: bt,
						hasModPostPerms: ut,
						hostPostData: S,
						isCommentCountAnimation: Se,
						isCountAnimShadowTestEnabled: Ne,
						isLargePost: !0,
						isOverlay: !!ye,
						listingKey: Pe,
						modModeEnabled: Re,
						onClickInsightsButton: Ft,
						onIgnoreReports: Me,
						onOpenReportsDropdown: Le,
						post: Be,
						shouldShowInsightsButton: Ke,
						showEditPost: xt,
						showEditFlair: qe,
						useFlatlistBreakpoints: Object(ee.b)({
							editPost: !1,
							save: !mt,
							hide: !1,
							report: !1,
							mute: !1
						})
					}))), Qe && Dt && o.a.createElement(F.a, {
						className: Fe.a.creatorStatsContainer,
						post: Be,
						subreddit: Qe,
						isOwnProfileStats: !0
					})), (Object(E.s)(Be) || ct) && Object(L.e)(Be, p) && o.a.createElement(L.a, {
						postId: Je,
						user: p
					}), de && o.a.createElement(D.a, {
						post: Be,
						postIds: null != Ze ? Ze : [],
						subredditId: null == Qe ? void 0 : Qe.id
					})), de && Ht && Gt && Qe && o.a.createElement(Ge, {
						postId: Be.id,
						subredditId: Qe.id,
						subredditDisplayText: Qe.displayText,
						onDismiss: () => {
							Vt(!1)
						}
					}))
				});
			Ve.displayName = "LargePostMemoized";
			t.default = Object(be.b)(Ke(Object(me.b)(Ve)))
		},
		"./src/reddit/components/LinkOrOverlayLink/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				i = s("./src/reddit/helpers/overlay/index.ts");

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
				} = e, d = Object(i.b)(n);
				return o.a.createElement(a.a, c({
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
				c = s.n(i);
			const d = e => {
				let {
					userCount: t
				} = e;
				return a.a.createElement("span", {
					className: c.a.liveChatActiveUsers
				}, t > 1 ? o.fbt._("{userCount} here now", [o.fbt._param("userCount", `${t}`)], {
					hk: "4pUoKA"
				}) : o.fbt._("join now", null, {
					hk: "3JGiBG"
				}))
			};
			var l = s("./src/lib/LiveLabel/index.m.less"),
				u = s.n(l);
			const m = () => a.a.createElement("span", {
				className: u.a.LiveLabel
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
				}, a.a.createElement(m, null), a.a.createElement(d, {
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
				w = s("./src/reddit/hooks/useInfoTextTooltip.ts");
			const P = e => {
				let {
					confidence: t,
					children: s
				} = e;
				const n = Object(w.a)({
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
			var T = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/reddit/components/ModQueueActionBar/StatusDisplays/SafetyFilterFeedbackPrompt.m.less"),
				A = s.n(R);
			const M = e => {
				let {
					filterName: t,
					contentId: s
				} = e;
				const a = Object(T.b)(),
					{
						addContentId: i
					} = v(),
					[c, d] = Object(n.useState)(!1),
					l = e => t => {
						t.stopPropagation(), i(s), d(!0), a(e)
					};
				return o.a.createElement("div", {
					className: A.a.feedbackPromptContainer
				}, o.a.createElement("p", {
					className: A.a.feedbackPrompt
				}, c ? r.fbt._("Thanks for your feedback!", null, {
					hk: "3ImVsP"
				}) : r.fbt._("Was this accurate?", null, {
					hk: "370juX"
				})), !c && o.a.createElement(o.a.Fragment, null, o.a.createElement("button", {
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
					const s = Object(j.a)(y.ue) === y.Zd,
						{
							contentIds: u
						} = v(),
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
											filterName: k.b.HarassingContent,
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
										reasonRichText: B(null === (o = null === (n = i.details) || void 0 === n ? void 0 : n.recencyExplanation) || void 0 === o ? void 0 : o.richtext),
										confidence: null === (a = i.details) || void 0 === a ? void 0 : a.confidence,
										confidenceExplanation: B(null === (l = null === (c = i.details) || void 0 === c ? void 0 : c.confidenceExplanation) || void 0 === l ? void 0 : l.richtext)
									})
							}
							return m
						}, [t.modQueueTriggers, t.bannedBy, t.id, s]);
					return o.a.createElement("div", {
						className: D.a.filteredWrapper
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
							className: D.a.filteredRow
						}, o.a.createElement(c.a, {
							isFilled: !0,
							name: r,
							className: Object(a.a)(D.a.coloredIcon, D.a.icon)
						}), o.a.createElement("div", {
							className: D.a.statusText
						}, o.a.createElement("div", {
							className: D.a.statusMeta
						}, o.a.createElement("p", {
							className: D.a.status
						}, s), i && d && o.a.createElement(P, {
							confidence: i
						}, o.a.createElement(l.b, {
							className: D.a.tooltipContent,
							content: d,
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
				return Ae
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
				w = s("./src/lib/classNames/index.ts"),
				P = s("./src/lib/constants/icons.ts"),
				T = s("./src/reddit/actions/gold/modals.ts"),
				R = s("./src/reddit/actions/reportFlow/index.ts"),
				A = s("./src/reddit/components/GiveAwardTooltip/index.tsx"),
				M = s("./src/reddit/components/OverflowMenu/index.tsx"),
				L = s("./src/reddit/constants/modals.ts"),
				D = s("./src/reddit/controls/Dropdown/Row.tsx"),
				B = s("./src/reddit/helpers/correlationIdTracker.ts"),
				F = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				U = s("./src/reddit/helpers/trackers/gild.ts"),
				z = s("./src/reddit/selectors/comments.ts"),
				W = s("./src/reddit/selectors/gold/purchaseCatalog.ts"),
				K = s("./src/reddit/selectors/user.ts"),
				H = s("./src/devPlatform/components/ContextActions/ContextActionsLoader.tsx"),
				G = s("./src/devPlatform/constants.ts");
			const V = (e, t) => Object(b.c)(t, e),
				q = (e, t) => e ? t ? n.fbt._("Unlock Comments", null, {
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
						listingKey: c,
						moderatorPermissions: d
					} = e;
					var l, u;
					const m = Object(O.a)(),
						h = Object(a.d)(),
						v = Object(p.b)(t),
						y = Object(a.e)(K.k),
						j = Object(a.e)(K.P),
						C = Object(a.e)(W.b),
						k = Object(F.a)(d),
						S = v ? f.n : V,
						I = t.authorId === y,
						Q = j && I,
						Y = (null === (l = t.distinguishType) || void 0 === l ? void 0 : l.toLowerCase()) === i.I.ADMIN,
						J = (null === (u = t.distinguishType) || void 0 === u ? void 0 : u.toLowerCase()) === i.I.MODERATOR,
						Z = Object(o.useCallback)(() => {
							const e = v ? E.D : _.c;
							h(e(t.id));
							const s = t.isLocked ? "unlock" : "lock";
							m(v ? S(t.id, s) : Object(b.j)(t.id, s, "mod_menu"))
						}, [S, m, h, t, v]),
						X = Object(o.useCallback)(e => {
							m(Object(f.n)(t.id, e, "post", c, s, void 0))
						}, [m, c, s, t]),
						$ = Object(o.useCallback)(() => {
							var e;
							const s = t.isStickied ? "unsticky" : "sticky";
							v ? (h(Object(E.gb)(t.id)), m(Object(b.n)(s, t.id))) : (h(Object(_.b)(t.id, (null === (e = t.distinguishType) || void 0 === e ? void 0 : e.toLowerCase()) || "", !t.isStickied)), m(Object(b.j)(t.id, s, "mod_menu")))
						}, [m, h, t, v]),
						ee = Object(o.useCallback)(() => {
							v && (h(Object(E.I)(t.id)), m(Object(b.n)(t.isOriginalContent ? "unmark_original_content" : "mark_original_content", t.id)))
						}, [m, h, t, v]),
						te = Object(o.useCallback)(() => {
							v && (h(Object(E.F)(t.id)), Object(b.n)(t.isNSFW ? "unmark_nsfw" : "mark_nsfw", t.id))
						}, [h, t, v]),
						se = Object(o.useCallback)(() => {
							v && (h(Object(g.i)(L.a.CROWD_CONTROL)), h(Object(E.t)(t.id)))
						}, [h, t, v]),
						ne = Object(a.e)(e => Object(z.m)(e, {
							commentId: t.id
						})),
						oe = Object(o.useCallback)(() => {
							const e = v ? t.permalink : ne;
							e && (h(Object(E.C)(e)), v ? X("copy") : m(Object(b.j)(t.id, "share", "mod_menu")))
						}, [X, h, t, v, ne, m]),
						re = Object(o.useCallback)(async () => {
							if (!v) return;
							const e = Object(B.d)(B.a.GildingFlow, !0);
							h(Object(T.d)({
								awardId: null == C ? void 0 : C.id,
								correlationId: e,
								thingId: t.id
							})), m(Object(U.clickGildEvent)(t.id))
						}, [m, h, t, C, v]),
						ae = Object(o.useCallback)(() => {
							h(Object(R.c)(t.id)), v ? X("report") : m(Object(b.j)(t.id, "report", "mod_menu"))
						}, [X, h, t, v, m]),
						ie = Object(o.useCallback)(() => {
							var e;
							v && (h(Object(E.db)(t.id, !t.hidden, !1, !0)), X((null === (e = t) || void 0 === e ? void 0 : e.hidden) ? "unhide" : "hide"))
						}, [X, h, t, v]),
						ce = Object(o.useCallback)(() => {
							const e = v ? E.S : _.e;
							h(e(t.id, !0)), m(v ? Object(b.n)("spam", t.id) : Object(b.j)(t.id, "remove_as_spam", "mod_menu"))
						}, [m, h, t, v]),
						de = Object(o.useCallback)(e => {
							const s = v ? E.u : _.b;
							h(s(t.id, e));
							const n = e === i.I.ADMIN ? "distinguish_as_admin" : e === i.I.MODERATOR ? "distinguish_as_mod" : "undistinguish";
							m(Object(b.j)(t.id, n, "mod_menu"))
						}, [h, t, v, m]);
					return r.a.createElement(M.b, {
						dropdownId: `modqueue-item-overflow-${t.id}`,
						className: N.a.overflowButton,
						icon: r.a.createElement(x.a, {
							name: P.a.overflow_horizontal,
							isFilled: !0
						})
					}, r.a.createElement("h6", {
						className: Object(w.a)("text-neutral-content-weak", N.a.overflowHeading)
					}, n.fbt._("Moderation", null, {
						hk: "2NlyQQ"
					})), !t.isRemoved && !t.isSpam && r.a.createElement(r.a.Fragment, null, r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						displayText: n.fbt._("Remove as spam", null, {
							hk: "3jqLzv"
						}),
						onClick: ce
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
						displayText: q(v, !!(null == t ? void 0 : t.isLocked))
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
						onClick: () => de(J ? "" : i.I.MODERATOR)
					}, r.a.createElement(x.a, {
						name: J ? P.a.distinguish_fill : P.a.distinguish
					})), Q && r.a.createElement(D.b, {
						className: N.a.dropdownRow,
						displayText: Y ? n.fbt._("Undistinguish as an admin", null, {
							hk: "BHAJd"
						}) : n.fbt._("Distinguish as an admin", null, {
							hk: "3gaPvB"
						}),
						onClick: () => de(Y ? "" : i.I.ADMIN)
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
					})), r.a.createElement(H.a, {
						contextType: Object(p.a)(t.id) ? G.a.POST : G.a.COMMENT,
						contextData: t,
						moderator: !0,
						isOnModQueueOverflowMenu: !0
					}), r.a.createElement("h6", {
						className: Object(w.a)("text-neutral-content-weak", N.a.overflowHeading)
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
					})), r.a.createElement(H.a, {
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
						c = new Date(a * i.Xb);
					if (!$.a) return r.a.createElement(r.a.Fragment, null, c.toLocaleString());
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
					className: Object(w.a)(t, ae.a.row)
				}, r.a.createElement("div", {
					className: ae.a.userIconWrapper
				}, r.a.createElement(Z.a, {
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
			var ce = e => {
				let {
					className: t,
					reportAction: s
				} = e;
				return r.a.createElement("div", {
					className: Object(w.a)(t, ae.a.row)
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
						className: Object(w.a)(e.className, ae.a.wrapper)
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
					i = Object(a.e)(e => (null == t ? void 0 : t.approvedBy) ? Object(K.Db)(e, {
						userName: o
					}) : null),
					c = t.approvedAtUTC ? (null === (s = t.approvedAtUTC) || void 0 === s ? void 0 : s.toString().length) > 10 ? t.approvedAtUTC / 1e3 : t.approvedAtUTC : null;
				return r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
					className: me.a.userIconWrapper
				}, r.a.createElement(Z.a, {
					className: Object(w.a)(me.a.userIcon),
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
					href: `${J.a.redditUrl}/user/${o}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(X.e)(o)), c && r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(le.d, {
					seconds: c
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
				const o = Object(a.e)(e => (null == t ? void 0 : t.bannedBy) && "string" == typeof(null == t ? void 0 : t.bannedBy) ? Object(K.Db)(e, {
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
					b = ![v.g.AntiEvilOps, v.g.CommunityOps, v.g.ContentTakedown, v.g.CopyrightTakedown, v.g.Reddit].includes(l) || d;
				return r.a.createElement(r.a.Fragment, null, o && b ? r.a.createElement("div", {
					className: me.a.userIconWrapper
				}, r.a.createElement(Z.a, {
					className: Object(w.a)(me.a.userIcon),
					iconUrl: o.accountIcon,
					userName: o.username,
					isNSFW: o.isNSFW
				})) : r.a.createElement(x.a, {
					isFilled: !0,
					name: u,
					className: Object(w.a)(me.a.coloredIcon, me.a.icon)
				}), r.a.createElement("div", {
					className: me.a.statusText
				}, r.a.createElement("p", {
					className: me.a.status
				}, n.fbt._("Removed{spam}{reason}", [n.fbt._param("spam", t.isSpam ? " as spam" : ""), n.fbt._param("reason", t.modRemovalReason ? `: ${t.modRemovalReason}` : "")], {
					hk: "3BGtSz"
				})), r.a.createElement("p", null, b && (null == o ? void 0 : o.username) ? r.a.createElement(r.a.Fragment, null, r.a.createElement("a", {
					className: me.a.userlink,
					href: `${J.a.redditUrl}/user/${o.username}`,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: e => e.stopPropagation()
				}, Object(X.e)(o.username)), m && r.a.createElement(r.a.Fragment, null, " ", r.a.createElement(le.d, {
					seconds: m
				}))) : l && Object(fe.e)(l, (null == o ? void 0 : o.username) || null, c.name))))
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
				we = s.n(Ne);
			Ce.a.wrapped(e => r.a.createElement("i", {
				className: `${Object(ge.b)("text_post",e.isFilled)} ${e.className}`
			}), "TextIcon", we.a), s("./src/reddit/icons/fonts/Upvote/index.tsx");
			const Pe = e => {
					let {
						content: t
					} = e;
					const s = Object(_e.b)(),
						i = Object(a.d)(),
						c = Object(o.useCallback)(() => {
							const e = Object(p.a)(t.id),
								n = e ? E.eb : _.g,
								o = t.ignoreReports ? "restore_reports" : "ignore_reports",
								r = e ? Object(b.l)(o, t.id) : Object(b.k)(o, t.id);
							i(n(t.id)), s(r)
						}, [t.id, t.ignoreReports, s, i]),
						d = (t.modReportsDismissed && t.modReportsDismissed.length || 0) + (t.userReportsDismissed && t.userReportsDismissed.length || 0);
					return r.a.createElement(r.a.Fragment, null, r.a.createElement(x.a, {
						isFilled: !0,
						name: "report_fill",
						className: Object(w.a)(me.a.coloredIcon, me.a.icon)
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
						}, Object(X.e)(n), ": ", s)
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
					})), !d && r.a.createElement(ve.c, {
						className: me.a.ignoreButton,
						onClick: c,
						text: t.ignoreReports ? n.fbt._("Restore Reports", null, {
							hk: "2O219R"
						}) : n.fbt._("ignore reports", null, {
							hk: "48jlNW"
						})
					}, t.ignoreReports ? r.a.createElement(Ie.a, {
						className: me.a.ignoreButtonIcon
					}) : r.a.createElement(Ee.a, {
						className: me.a.ignoreButtonIcon
					}))), t.userReports.map((e, s) => {
						let [n, o, a, i] = e;
						return n ? void 0 !== a && i ? r.a.createElement(xe.a, {
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
				Te = e => {
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
						[i, c] = Object(o.useState)(!1),
						d = Object(O.a)(),
						l = Object(o.useCallback)(e => {
							var n;
							e.stopPropagation(), c(!i), d(Object(Y.e)((null === (n = t.belongsTo) || void 0 === n ? void 0 : n.id) || t.subredditId, s, Object(p.a)(t.id), !i))
						}, [d, t, i, c, s]),
						u = Object(a.e)(e => {
							var s, n;
							return !!(null === (n = null === (s = null == e ? void 0 : e.features) || void 0 === s ? void 0 : s.modPreviousActions) || void 0 === n ? void 0 : n.order[t.id])
						});
					return s === S.a.UNMODERATED ? null : r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: Object(w.a)(me.a.wrapper, {
							[me.a.approved]: s === S.a.APPROVED,
							[me.a.reported]: s === S.a.REPORTED,
							[me.a.opened]: i,
							[me.a.openable]: u
						}),
						onClick: u ? l : void 0
					}, n, u && r.a.createElement("button", {
						className: me.a.caretButton
					}, r.a.createElement(x.a, {
						name: i ? P.a.caret_up : P.a.caret_down,
						className: me.a.caretIcon
					}))), u && i && r.a.createElement(de, {
						className: me.a.previousActions,
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
						w = Object(a.d)(),
						P = Object(S.c)(t),
						T = Object(a.e)(C.b),
						R = Object(p.b)(t),
						A = Object(a.e)(e => {
							var s, n;
							return (null === (n = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === t.id
						}),
						M = Object(a.e)(e => Object(k.m)(e, {
							postId: t.id
						})),
						L = Object(m.a)(M),
						[D, B] = Object(o.useState)(!1),
						F = Object(a.e)(e => {
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
								s >= .5 ? B(!0) : t || B(!1)
							})
						}, []);
					D && F && w(Object(c.b)(t.id));
					const W = Object(o.useMemo)(() => ({
						threshold: [.5]
					}), []);
					Object(h.a)(U, z, W);
					const K = [S.a.REPORTED, S.a.FILTERED, S.a.UNMODERATED].includes(P),
						H = [S.a.APPROVED, S.a.UNMODERATED, S.a.REPORTED].includes(P),
						G = R && L,
						V = P === S.a.REMOVED && Object(p.b)(t) && t.removedByCategory === v.g.Reddit && !t.isRemoved && !t.isApproved,
						q = P === S.a.FILTERED || V,
						Y = P === S.a.REMOVED && !t.modRemovalReason && !q,
						J = [S.a.REMOVED, S.a.SPAM].indexOf(P) > -1,
						Z = R ? f.n : Re,
						X = Object(o.useCallback)(() => {
							const e = R ? E.r : _.a;
							w(e(t.id)), I(Z(t.id, "approve"))
						}, [I, w, t, R, Z]),
						$ = Object(o.useCallback)(() => {
							const e = R ? E.S : _.e;
							w(e(t.id, !1)), t.isRemoved && t.bannedBy === i.l ? I(Z(t.id, "confirm_remove")) : I(Z(t.id, "remove"))
						}, [I, w, t, R, Z]),
						ee = Object(o.useCallback)(() => {
							w(Object(j.fetchReasonsAndOpenModal)(R ? t.belongsTo.id : t.subredditId, [t.id]))
						}, [t, R, w]),
						te = Object(o.useCallback)(() => {
							w(Object(g.i)(Object(d.b)(t.id, !1))), I(Object(f.n)(t.id, "post_flair_picker"))
						}, [I, w, t]),
						se = Object(o.useCallback)(e => {
							let {
								previewFlair: s,
								selectedTemplateId: n
							} = e;
							R && w(Object(y.h)({
								post: t,
								previewFlair: s,
								selectedTemplateId: n
							}))
						}, [w, R, t]);
					return r.a.createElement("div", {
						className: N.a.wrapper,
						"data-testid": "modqueue-action-bar",
						ref: U
					}, r.a.createElement(Te, {
						content: t
					}), r.a.createElement("div", {
						className: N.a.actionBar
					}, K && r.a.createElement(u.t, {
						className: [N.a.button, N.a.approve].join(" "),
						Icon: Object(x.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: X,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), H && r.a.createElement(u.t, {
						className: N.a.button,
						Icon: Object(x.b)("close"),
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: $,
						text: n.fbt._("Remove", null, {
							hk: "2IDWyI"
						})
					}), Y && r.a.createElement(u.t, {
						className: N.a.button,
						onClick: ee,
						text: n.fbt._("Add Removal Reason", null, {
							hk: "2htsXM"
						})
					}), q && r.a.createElement(u.t, {
						className: N.a.button,
						Icon: Object(x.b)("close"),
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: $,
						text: n.fbt._("Confirm Removal", null, {
							hk: "1v0rxC"
						})
					}), J && r.a.createElement(u.t, {
						className: N.a.button,
						Icon: Object(x.b)("checkmark"),
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: X,
						text: n.fbt._("Approve", null, {
							hk: "23KvZI"
						})
					}), G && r.a.createElement(u.t, {
						className: N.a.button,
						Icon: Object(x.b)("tag"),
						priority: u.c.Plain,
						iconPosition: u.h.L,
						iconClassName: N.a.icon,
						onClick: te,
						text: n.fbt._("Flair", null, {
							hk: "4968fn"
						})
					}), R && T === Object(d.b)(t.id, !1) && r.a.createElement(d.a, {
						flairs: t.flair,
						subredditId: t.belongsTo.id,
						modalId: Object(d.b)(t.id, !1),
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
		"./src/reddit/components/PostMedia/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return oe
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/CrosspostBox/index.tsx"),
				a = s("./src/reddit/components/Media/index.tsx"),
				i = s("./src/reddit/models/Media/index.ts"),
				c = s("./src/reddit/models/Post/index.ts"),
				d = s("./src/reddit/components/DevvitCustomPost/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/constants/adEvents.ts"),
				p = s("./src/reddit/constants/experiments.ts"),
				b = s("./src/reddit/helpers/chooseVariant/index.ts"),
				f = s("./node_modules/reselect/es/index.js");
			const h = Object(f.a)(e => Object(b.c)(e, {
				experimentEligibilitySelector: b.a,
				experimentName: p.Fc
			}), e => e === p.Zd);
			var O = s("./node_modules/fbt/lib/FbtPublic.js"),
				x = s("./src/lib/classNames/index.ts"),
				v = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				_ = s("./src/reddit/components/SubredditIcon/index.tsx"),
				g = s("./src/reddit/selectors/posts.ts"),
				E = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostCommunityLink/index.m.less"),
				j = s.n(y);
			const C = e => {
				let {
					postId: t,
					className: s
				} = e;
				const n = Object(l.e)(e => Object(g.F)(e, {
						postId: t
					})),
					r = Object(l.e)(e => "subreddit" === (null == n ? void 0 : n.belongsTo.type) ? Object(E.X)(e, {
						subredditId: n.belongsTo.id
					}) : null);
				return r ? o.a.createElement(v.a, {
					className: Object(x.a)(j.a.link, s),
					to: r.url
				}, O.fbt._("Posts via", null, {
					hk: "23e8m8"
				}), o.a.createElement(_.b, {
					className: j.a.subredditIcon,
					shouldHideNsfwIcon: !0,
					subredditOrProfile: r
				}), o.a.createElement("span", {
					className: j.a.subredditName
				}, r.displayText)) : null
			};
			var k = s("./src/lib/permalinkToOverlayLocation/index.ts"),
				S = s("./src/reddit/connectors/PostViewable/index.ts"),
				I = s("./src/reddit/contexts/PageLayer/index.tsx"),
				N = s("./src/reddit/contexts/Post/index.tsx"),
				w = s("./src/reddit/helpers/path/index.ts"),
				P = s("./src/reddit/hooks/useClickSourceData.ts"),
				T = s("./src/reddit/hooks/useIsOverlay.ts"),
				R = s("./src/reddit/hooks/usePageLayer.ts"),
				A = s("./src/lib/prettyPrintNumber/index.ts"),
				M = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostInformation/index.m.less"),
				L = s.n(M);
			const D = e => {
				let {
					post: t
				} = e;
				const s = `${Object(A.b)(t.score)} ${O.fbt._("upvotes",null,{hk:"wJqPp"})}`,
					n = `${Object(A.b)(t.numComments)} ${O.fbt._("comments",null,{hk:"30aUyh"})}`;
				return o.a.createElement("div", {
					className: L.a.postInformation
				}, o.a.createElement("h5", {
					className: L.a.title
				}, t.title), o.a.createElement("div", {
					className: L.a.interactions
				}, o.a.createElement("p", null, s), o.a.createElement("p", null, n)))
			};
			var B = s("./src/lib/isUrl/index.ts"),
				F = s("./src/reddit/actions/profile/index.ts"),
				U = s("./src/reddit/components/Thumbnail/index.tsx"),
				z = s("./src/reddit/components/UserIcon/index.tsx"),
				W = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				K = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				H = s("./src/reddit/selectors/profile.ts"),
				G = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPostMedia/index.m.less"),
				V = s.n(G);
			const q = e => {
				let {
					post: t
				} = e;
				var s, r, a, i;
				const c = Object(l.d)(),
					d = Object(l.e)(Object(H.l)(t.author)),
					u = Object(n.useMemo)(() => Object(U.c)({
						post: t
					}), [t]),
					m = Object(n.useMemo)(() => Object(B.a)(u), [u]);
				Object(n.useEffect)(() => {
					m || c(Object(F.d)(t.author))
				}, [c, t.author, m]);
				const p = !m && Object(K.a)(null === (s = null == d ? void 0 : d.icon) || void 0 === s ? void 0 : s.url),
					b = Object(W.c)(null === (r = null == d ? void 0 : d.icon) || void 0 === r ? void 0 : r.url);
				return o.a.createElement("div", {
					className: V.a.media
				}, m ? o.a.createElement(U.b, {
					post: t,
					url: u,
					className: V.a.mediaThumbnail,
					removeLink: !0,
					containerClassName: V.a.mediaThumbnailContainer
				}) : null, !m && (null === (a = null == d ? void 0 : d.icon) || void 0 === a ? void 0 : a.url) && o.a.createElement("div", {
					className: V.a.userIconContainer
				}, o.a.createElement(z.a, {
					className: Object(x.a)({
						[V.a.snoovatarUserIcon]: p,
						[V.a.defaultUserIcon]: b
					}, V.a.userIcon),
					iconUrl: null === (i = null == d ? void 0 : d.icon) || void 0 === i ? void 0 : i.url,
					userName: d.name,
					wrapperClassName: V.a.userIconWrapper,
					isNSFW: !1
				})))
			};
			var Q = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPost/index.m.less"),
				Y = s.n(Q);
			const J = Object(S.a)(null);
			var Z = Object(N.b)(J(e => {
					let {
						post: t
					} = e;
					const s = Object(R.a)(),
						n = Object(T.a)(),
						r = Object(P.a)(),
						a = Object(I.x)(s) && !n;
					return o.a.createElement(v.a, {
						"data-testid": `promoted-user-post-${t.id}`,
						to: a ? Object(w.b)(t.permalink) : Object(k.a)(t.permalink, !1, r)
					}, o.a.createElement("div", {
						className: Y.a.container
					}, o.a.createElement(D, {
						post: t
					}), o.a.createElement(q, {
						post: t
					})))
				})),
				X = s("./src/reddit/components/PromotedUserPostsAd/PromotedUserPosts/index.m.less"),
				$ = s.n(X);
			const ee = e => {
				let {
					postIds: t
				} = e;
				const s = t.map(e => o.a.createElement(Z, {
					postId: e,
					key: e
				}));
				return o.a.createElement("div", {
					className: $.a.container
				}, s)
			};
			var te = s("./src/reddit/components/PromotedUserPostsAd/index.m.less"),
				se = s.n(te);
			const ne = e => {
				let {
					post: t
				} = e;
				const s = Object(l.d)();
				if (!Object(l.e)(h) || !t.adPromotedUserPostIds || 0 === t.adPromotedUserPostIds.length) return null;
				const [n] = t.adPromotedUserPostIds;
				return o.a.createElement("div", {
					className: se.a.container,
					onClick: () => s(Object(u.y)(t, m.a.Click))
				}, o.a.createElement(ee, {
					postIds: t.adPromotedUserPostIds
				}), o.a.createElement(C, {
					postId: n,
					className: se.a.communityLink
				}))
			};

			function oe(e) {
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
				}) : Object(c.B)(t) && Object(c.A)(t) ? o.a.createElement(ne, {
					post: t
				}) : Object(i.G)(t) ? o.a.createElement(d.a, {
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
				c = s("./src/reddit/components/CCM/AddModNoteCTA/index.tsx"),
				d = s("./src/reddit/components/Hovercards/SubredditHovercard/index.tsx"),
				l = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				u = s("./src/reddit/components/PostBadges/index.tsx"),
				m = s("./src/reddit/components/PostTopMeta/index.tsx"),
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
				} = e, w = !!C, P = Object(_.a)(), T = Object(r.e)(e => !!I && Object(a.i)(e, I.id)), R = !(!I || !Object(g.i)(I));
				return o.a.createElement("div", {
					className: y.a.metaContainer
				}, !n && !k.isSponsored && I && o.a.createElement(d.a, {
					postId: k.id,
					subredditName: I.name,
					isProfile: R
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
				}), o.a.createElement(m.g, {
					className: y.a.postTopMeta,
					flairStyleTemplate: t,
					post: k,
					tooltipType: N,
					isModWithUserNotesPermissions: T
				}), o.a.createElement(u.a, {
					displayText: I ? I.displayText : null,
					inSubredditOrProfile: !!n,
					post: k,
					tooltipType: N
				}), !w && o.a.createElement(i.a, {
					hideCta: s,
					thing: k,
					tooltipType: j ? m.f.Lightbox : void 0
				}), T && o.a.createElement(c.a, {
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
				return B
			})), s.d(t, "a", (function() {
				return J
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
				w = s("./src/lib/getShortenedLink.ts"),
				P = s("./src/reddit/components/FlairWrapper/index.tsx"),
				T = s("./node_modules/fbt/lib/FbtPublic.js"),
				R = s("./src/lib/prettyPrintNumber/index.ts"),
				A = s("./src/reddit/components/Poll/PollExpiry/index.tsx"),
				M = s("./src/reddit/components/Poll/PostTitleMetaData/index.m.less"),
				L = s.n(M);
			const D = Object(d.c)({
				poll: (e, t) => e.polls.models[t.pollId],
				resultsByVoters: (e, t) => e.polls.results.byVoters[t.pollId]
			});
			var B, F = Object(i.b)(D)((function(e) {
					const {
						poll: t,
						resultsByVoters: s
					} = e, n = s ? s.totalVotes : "0";
					return Object(g.a)() ? null : a.a.createElement("div", {
						className: Object(u.a)(e.className, L.a.proposalMetaData)
					}, a.a.createElement("span", null, T.fbt._({
						"*": "{count} votes",
						_1: "{count} vote"
					}, [T.fbt._param("count", Object(R.a)(n)), T.fbt._plural(parseInt(n))], {
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
				H = s("./src/telemetry/models/Outbound.ts"),
				G = s("./src/reddit/components/PostTitle/getLeftAndRightFlair.ts"),
				V = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
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
			}(B || (B = {}));
			const J = e => {
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
						case B.ExtraLarge:
							m = Q.a.ExtraLarge;
							break;
						case B.Large:
							m = Q.a.Large;
							break;
						case B.Medium:
							m = Q.a.Medium;
							break;
						case B.Small:
							m = Q.a.Small;
							break;
						case B.ExtraSmall:
							m = Q.a.ExtraSmall;
							break;
						case B.Metadata:
							m = Q.a.Metadata
					}
					return a.a.createElement("div", {
						className: Object(u.a)(Q.a.Title, i, m, {
							[Q.a.isNoWrap]: o,
							[Q.a.blur]: d
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
				Z = e => {
					let {
						className: t,
						disableVisited: s,
						titleColor: n,
						children: o,
						...r
					} = e;
					return a.a.createElement(c.a, Y({}, r, {
						className: Object(u.a)(t, Q.a.styledLink, {
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
						className: Object(u.a)(Q.a.titleContainer, n, {
							[Q.a.isNoWrap]: s,
							[Q.a.isVisitedEnabled]: !t
						})
					}, o)
				},
				$ = Object(d.c)({
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
					} = t, n = Object(i.d)(), o = Object(_.a)(), r = Object(i.e)(z.b), c = Object(i.e)(z.c), d = e => {
						(r || c) && (e.preventDefault(), n(Object(O.Z)(Object(v.b)(t.permalink), t.id))), t.isSponsored && Object(S.A)(t) && n(Object(O.y)(t, x.a.Click))
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
					} = n, r = e.isCommentsPage ? H.SourceElement.PostLink : H.SourceElement.ListingPostLink;
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
						}, Object(w.a)(n), !n.isSponsored && a.a.createElement(j.a, {
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
					}, Object(w.a)(n), !n.isSponsored && a.a.createElement(j.a, {
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
						post: c,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l,
						onClick: m
					} = this.props, p = s === C.b.Left, b = Object(P.b)(c), {
						leftFlair: f,
						rightFlair: h
					} = Object(G.a)({
						flair: b,
						isFlairPositionedLeft: p,
						showNSFWSpoilerFlairsOnly: d,
						hideNSFWSpoilerFlair: l
					}), O = !r && !o && !t, x = O && f && f.length > 0, v = O && h && h.length > 0;
					return a.a.createElement("div", {
						className: Object(u.a)(Q.a.Component, e, c.id),
						ref: this.props.innerRef,
						"data-adclicklocation": V.a.TITLE,
						onClick: m
					}, !d && x && a.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: f,
						nowrap: !0,
						post: c,
						sendEvent: this.props.sendEvent
					}), !Object(I.b)(c) && a.a.createElement(ee, Y({}, this.props, {
						leftFlair: d ? f : void 0
					})), i && a.a.createElement(F, {
						className: Q.a.pollMeta,
						pollId: i.id
					}), a.a.createElement(se, this.props), v && a.a.createElement(P.a, {
						isFlairFilter: !0,
						titleFlair: h,
						nowrap: !0,
						post: c,
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
					inSubredditOrProfile: w,
					isCommentsPage: P,
					isCompactPinnedPost: T,
					isCurrentUserProfilePost: R,
					isModQueuePage: A,
					isModWithUserNotesPermissions: M,
					isOverlay: L,
					isTopicPage: D,
					listingKey: B,
					post: F,
					shouldShowSubscribeButton: U,
					showCornerOutboundLink: z,
					showSubreddit: W,
					showSubredditIcon: K,
					subredditOrProfile: H,
					isFollowed: G,
					shouldShowFollowButton: V,
					onFollowPostClick: q,
					onSubscribed: Q
				} = e;
				const Y = D,
					J = !(!H || !Object(y.i)(H)),
					Z = Object(a.e)(e => {
						if (!J) return !0;
						const t = Object(C.Jb)(e, F.author || "");
						return !t || t.enableFollowers
					}),
					X = Object(a.e)(j.a);
				return r.a.createElement("div", {
					className: Object(i.a)(S.a.container, t)
				}, W && H && r.a.createElement("div", {
					className: S.a.subredditIconWrapper
				}, r.a.createElement(f.a, {
					"data-click-id": "subreddit",
					to: H.url
				}, K && r.a.createElement(b.b, {
					className: Object(i.a)(S.a.subredditIcon, N),
					shouldHideNsfwIcon: k,
					subredditOrProfile: H
				}))), r.a.createElement("div", {
					className: S.a.everythingElseWrapper
				}, W && r.a.createElement(l.h, {
					type: F.belongsTo.type,
					id: F.belongsTo.id
				}), r.a.createElement(p.g, {
					className: S.a.postTopMeta,
					forceOpenInNewTab: o,
					flairStyleTemplate: s,
					isModWithUserNotesPermissions: M,
					tooltipType: L ? p.f.Lightbox : void 0,
					post: F,
					showSub: W,
					subredditOrProfile: H
				}), r.a.createElement(m.a, {
					className: S.a.postBadges,
					displayText: H ? H.displayText : null,
					inSubredditOrProfile: w,
					isCompactPinnedPost: T,
					post: F,
					tooltipType: L ? p.f.Lightbox : void 0
				}), !Y && r.a.createElement(c.a, {
					isPostDetail: P,
					thing: F,
					tooltipType: L ? p.f.Lightbox : void 0
				}), M && r.a.createElement(d.a, {
					postOrComment: F,
					className: S.a.addModNote
				})), H && Z && W && U && !R && r.a.createElement(h.a, {
					className: S.a.SubscribeButton,
					getEventFactory: e => (Q && !e && Q(), Object(_.n)(F.id, e ? "unsubscribe" : "subscribe", "post", B, I)),
					identifier: {
						name: H.name,
						type: J ? O.a.PROFILE : O.a.SUBREDDIT
					},
					postId: F.id,
					size: x.d.XS,
					priority: X ? x.c.Secondary : void 0,
					isShredditParityEnabled: X
				}), z && r.a.createElement(v.b, {
					isSponsored: F.isSponsored,
					postId: F.id,
					href: Object(E.E)(F),
					source: F.source
				}, r.a.createElement(g.a, {
					className: S.a.outboundLinkIcon
				})), V && Z && r.a.createElement(u.a, {
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
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/urlRequested.ts"),
				l = s("./src/reddit/hooks/useOutboundClickTracking.ts"),
				u = s("./src/reddit/models/Theme/NewColorSystem/index.ts"),
				m = s("./src/reddit/components/RawHTMLDisplay/index.m.less"),
				p = s.n(m);
			const b = Object(a.b)(null, e => ({
					onNavigate: t => e(Object(d.a)(t))
				})),
				f = c.a.wrapped(e => {
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
							"--RawHTMLDisplay-tr-even": Object(n.f)(Object(u.a)(e).body, .8),
							"--RawHTMLDisplay-tr-odd": Object(n.f)(Object(u.a)(e).line, .8)
						}
					})
				}, "StyledRawHTMLDisplay", p.a);
			t.a = b(Object(i.a)(f))
		},
		"./src/reddit/components/RelatedCommunitiesRecommendations/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return q
			})), s.d(t, "b", (function() {
				return Q
			}));
			var n, o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/hooks/useTracking.ts"),
				d = s("./src/reddit/icons/svgs/Close/index.tsx"),
				l = s("./node_modules/react-redux/es/index.js"),
				u = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/SubredditIcon/index.tsx"),
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
						modelVersion: c = O,
						pageType: d
					} = e;
					return {
						...h.p(t),
						post: s ? h.L(t, s) : void 0,
						source: "cdd_discovery_unit",
						actionInfo: {
							pageType: d,
							reason: n
						},
						discoveryUnit: {
							id: "related_communities_recommendations",
							name: c,
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
			var w = s("./src/config.ts");
			const {
				fbt: P
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var T, R = e => {
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
					src: `${w.a.assetPath}/img/talk/avatars/${e}.png`,
					alt: P._("Online members", null, {
						hk: "3uJPWb"
					})
				})))
			};

			function A(e) {
				switch (e) {
					case v.Gf.Minimalist:
					case v.Ef.Minimalist:
					case v.Ff.Minimalist:
						return T.MINIMALIST;
					case v.Gf.HotnessSignals:
					case v.Ef.SocialSignals:
					case v.Ff.SocialSignals:
						return T.SIGNALS;
					case v.Gf.Description:
					case v.Ef.Description:
					case v.Ff.Description:
						return T.DESCRIPTION
				}
				return T.MINIMALIST
			}! function(e) {
				e[e.MINIMALIST = 0] = "MINIMALIST", e[e.SIGNALS = 1] = "SIGNALS", e[e.DESCRIPTION = 2] = "DESCRIPTION"
			}(T || (T = {}));
			const M = e => {
				let {
					recommendedCommunities: t,
					numberOfVisibleItems: s,
					variant: r,
					postId: d,
					originalSubredditId: O,
					pageType: v,
					columnLayout: g = "single",
					dismissCallback: E
				} = e;
				const y = Object(c.a)(),
					j = Object(l.e)(e => N(e, {
						subredditIds: t
					})),
					C = {
						postId: d,
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
						subscribers: c,
						accountsActive: d,
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
						}, [o.fbt._param("Number of subscribers", Object(u.b)(c)), o.fbt._plural(c)], {
							hk: "3fAm5T"
						}),
						w = d ? `• ${o.fbt._("{Number of subscribers online} Online",[o.fbt._param("Number of subscribers online",Object(u.b)(d))],{hk:"4s9dx5"})}` : "",
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
					}, a.a.createElement(m.b, {
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
					}, k === T.MINIMALIST && N, (k === T.SIGNALS || k === T.DESCRIPTION) && a.a.createElement("div", {
						className: "flex gap-x-xs justify-start items-center"
					}, a.a.createElement(R, {
						seed: t
					}), a.a.createElement("div", null, `${N} ${w}`))))), a.a.createElement(p.a, {
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
					})), k === T.DESCRIPTION && a.a.createElement("div", {
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
				z = s("./src/redditGQL/operations/GetRelatedCommunityRecommendations.json");
			const W = async (e, t) => {
				const s = await Object(D.a)(e, {
					...z,
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
			const K = Object(L.a)(E.b),
				H = Object(L.a)(E.c),
				G = Object(L.a)(E.a),
				V = e => async (t, s, n) => {
					let {
						gqlContext: o
					} = n;
					t(K({
						subredditId: e
					}));
					try {
						const s = await W(o(), {
							subredditId: e
						});
						t(H({
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
			var q;
			! function(e) {
				e.Home = "home", e.Profile = "profile", e.Community = "community"
			}(q || (q = {}));
			const Q = e => {
				let {
					subredditDisplayText: t,
					variant: s,
					postId: u,
					subredditId: m,
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
							case q.Profile:
							case q.Community:
								return s === T.MINIMALIST ? "double" : "single";
							case q.Home:
							default:
								return "single"
						}
					}({
						pageType: b,
						activeUIVariant: h
					}),
					v = function(e, t) {
						return "double" === t ? e === T.DESCRIPTION ? 2 : 4 : 3
					}(h, O),
					[_, g] = Object(r.useState)(v),
					E = Object(c.a)(),
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
								modelVersion: c
							} = Object(l.e)(e => S(e, t)),
							d = !a && !o;
						return Object(r.useEffect)(() => {
							d && s(V(t))
						}, [s, t, d]), {
							recommendations: n,
							fetchPending: o,
							recommendationsLoaded: a,
							fetchError: i,
							modelVersion: c
						}
					}({
						subredditId: m
					}),
					w = _ < (y.length || 0),
					P = Object(r.useMemo)(() => !C || j ? null : k || y.length <= 0 ? {
						modelVersion: N,
						seen: !1,
						postId: u,
						subredditId: m,
						variant: s,
						numberItems: 0,
						seenItems: [],
						pageType: b
					} : {
						modelVersion: N,
						seen: !0,
						postId: u,
						subredditId: m,
						variant: s,
						numberItems: y.length,
						seenItems: y.slice(0, v),
						pageType: b
					}, [C, j, k, y, N, u, m, s, v, b]);
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
				}, a.a.createElement(d.a, {
					className: "block w-full h-full text-neutral-content-weak",
					fill: "currentColor"
				}))), a.a.createElement(a.a.Fragment, null, a.a.createElement(M, {
					recommendedCommunities: y,
					numberOfVisibleItems: _,
					postId: u,
					originalSubredditId: m,
					variant: s,
					pageType: b,
					columnLayout: O,
					dismissCallback: p
				}), w && a.a.createElement("div", {
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
				y = s("./src/reddit/components/Reports/SnoozableReport/index.m.less"),
				j = s.n(y);
			const {
				fbt: C
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = (e, t) => `SnoozableReport--${t}--${e}`, S = Object(r.b)(() => Object(a.c)({
				isDropdownOpen: (e, t) => Object(E.b)(k(t.reason, t.reportedThingId))(e)
			}), (e, t) => ({
				openDropdown: () => e(Object(u.h)({
					tooltipId: k(t.reason, t.reportedThingId)
				})),
				toggleSnooze: s => {
					Object(h.a)(t.reportedThingId) ? e(Object(d.h)(t.reportedThingId, t.reason, s)) : e(Object(l.fb)(t.reportedThingId, t.reason, s))
				}
			})), I = Object(m.a)(b.a);
			class N extends o.a.Component {
				constructor() {
					super(...arguments), this.tooltipTarget = null, this.setTooltipTargetRef = e => this.tooltipTarget = e, this.onSnoozeButtonClick = () => {
						const e = this.props.isSnoozed ? c.kc.None : c.kc.Snoozed;
						this.props.toggleSnooze(e);
						const t = Object(O.r)(Object(h.a)(this.props.reportedThingId), this.props.isSnoozed, this.props.reportedThingId, this.props.reason);
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
					} = this.props, m = k(e, s);
					return o.a.createElement("div", {
						ref: this.setTooltipTargetRef
					}, o.a.createElement(f.b, {
						id: m,
						className: Object(i.a)(j.a.DropdownLabelContainer, d),
						onClick: n
					}, o.a.createElement("label", {
						htmlFor: m,
						className: j.a.DropdownLabel
					}, a ? C._("Reporter snoozed", null, {
						hk: "1rCWql"
					}) : c ? `${e} (${t})` : `${t}: ${e}`, r ? o.a.createElement(v.a, null) : o.a.createElement(x.a, null))), o.a.createElement(I, {
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
						className: u
					}), C._("Undo snoozing reports from this user", null, {
						hk: "1CloXT"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(_.a, {
						className: u
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
				return w
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
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				u = s("./src/lib/makeSearchKey/index.ts"),
				m = s("./src/reddit/actions/pages/search/index.ts"),
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
				w = "comment-search-button",
				P = "search-bar-dismiss-button",
				T = "COMMENT_SEARCH_BAR_TEST_ID";

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
				} = e.experiment, b = Object(g.a)(), S = Object(E.a)(), A = (null == b ? void 0 : b.queryParams.q) || "", [M, L] = Object(o.useState)(A), [D, B] = Object(o.useState)(t), F = Object(a.d)(), U = Object(o.useRef)(null), z = Object(a.e)(e => Object(f.h)(e, {
					pageLayer: b
				})), W = Object(a.e)(e => Object(f.s)(e, {
					pageLayer: b
				})), K = Object(a.e)(e => Object(k.mb)(e)), H = Object(a.e)(e => Object(k.rb)(e)), G = Object(a.e)(e => Object(j.i)(e));
				var V, q, Q;

				function Y() {
					var t;
					if (!M.trim() || !z) return;
					const s = new URL(z.permalink).pathname,
						n = R({
							searchValue: M,
							post: z,
							subreddit: W
						});
					O.a.set(C.a.CommentSearchBar), S(Object(_.o)(_.a.FULL_SEARCH_BUTTON, n, v.a.PdpCommentSearchBar, b || void 0));
					const o = Object(u.b)(z.id, void 0, n, K && H);
					F(Object(m.d)({
						key: o,
						options: n,
						subredditName: null == W ? void 0 : W.name,
						postId: z.id
					}));
					const r = Object(c.a)(s, n);
					F(Object(i.b)(Object(h.b)(r), {
						...null === (t = e.prevLocation) || void 0 === t ? void 0 : t.state,
						isOverlay: G,
						scrollOnLoad: !0
					}))
				}
				return V = U, q = B, Q = l, Object(o.useEffect)(() => {
					if (Q) return document.addEventListener("mousedown", e), () => {
						document.removeEventListener("mousedown", e)
					};

					function e(e) {
						V.current && !V.current.contains(e.target) && q(!1)
					}
				}, [V]), s ? r.a.createElement("div", {
					className: I.a.flex
				}, M || D ? r.a.createElement("div", {
					"data-testid": N
				}, r.a.createElement("label", {
					className: Object(d.a)(I.a.flex, I.a.relative)
				}, r.a.createElement("div", {
					className: I.a.absolute,
					role: "submit",
					onClick: Y
				}, r.a.createElement(y.a, {
					className: Object(d.a)(I.a.postIcon, I.a.paddingIcon),
					name: "search"
				})), r.a.createElement("input", {
					className: Object(d.a)(I.a.metadataFont, I.a.input),
					"data-testid": T,
					id: N,
					type: "search",
					onChange: e => {
						x.a.update(v.a.PdpCommentSearchBar), L(e.target.value)
					},
					onFocus: function() {
						x.a.update(v.a.PdpCommentSearchBar), O.a.set(C.a.CommentSearchBar), S(Object(_.o)(_.a.SEARCH_BAR, R({
							searchValue: M,
							post: z,
							subreddit: W
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
					"data-testid": w,
					id: w,
					onClick: () => {
						Promise.resolve(B(!0)).then(() => {
							var e;
							return null === (e = U.current) || void 0 === e ? void 0 : e.focus()
						})
					}
				}, r.a.createElement(y.a, {
					className: Object(d.a)(I.a.searchIcon, I.a.paddingIcon),
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
				c = s.n(i);
			t.a = Object(n.memo)(Object(n.forwardRef)((e, t) => {
				const s = e.size || a.d.XS;
				return o.a.createElement("button", {
					"aria-checked": e.on,
					className: Object(r.a)(c.a.toggleSwitch, e.className, {
						[c.a.xs]: s === a.d.XS,
						[c.a.s]: s === a.d.S,
						[c.a.m]: s === a.d.M,
						[c.a.l]: s === a.d.L,
						[c.a.xl]: s === a.d.XL,
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
		"./src/reddit/helpers/dom/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return a
			})), s.d(t, "d", (function() {
				return i
			})), s.d(t, "g", (function() {
				return c
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
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
				c = (e, t) => {
					const s = document.createRange();
					return s.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, s) < 0 && e.compareBoundaryPoints(Range.START_TO_END, s) > 0
				},
				d = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const s = t.getRangeAt(0);
					if (!c(s, e)) return;
					const {
						startContainer: n,
						startOffset: o,
						endContainer: r,
						endOffset: a
					} = s, i = document.createRange();
					i.selectNode(e);
					let d = !0;
					if (-1 === i.compareBoundaryPoints(Range.START_TO_START, s) && (i.setStart(n, o), d = !1), 1 === i.compareBoundaryPoints(Range.END_TO_END, s) && (i.setEnd(r, a), d = !1), d) return [e];
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
				u = e => e && e.parentElement && l(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				m = e => {
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
				a = () => o(n.COMMENT_BEFORE_SIGNUP_STORAGE),
				i = () => (e => {
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
				c = s("./src/reddit/selectors/platform.ts"),
				d = s("./src/reddit/selectors/telemetry.ts"),
				l = s("./src/telemetry/index.ts"),
				u = s("./src/reddit/constants/richTextJson.ts");
			const m = e => {
					const t = Object(c.o)(e);
					return {
						source: "comment_composer",
						action: o.c.CLICK,
						...Object(d.p)(e),
						screen: Object(d.db)(e),
						subreddit: Object(d.mb)(e),
						post: t ? Object(d.L)(e, t) : null,
						profile: Object(d.U)(e),
						correlationId: Object(r.c)(r.a.CommentComposer)
					}
				},
				p = async (e, t, n, o, r) => {
					const a = {
							commentId: r,
							commentsPageKey: n
						},
						c = r && Object(i.j)(e, a) || 0,
						{
							getFlairData: u
						} = await s.e("getFlairData").then(s.bind(null, "./src/reddit/helpers/trackers/features/getFlairData.ts")),
						p = o ? "image" : void 0;
					return Object(l.a)({
						noun: "comment",
						...m(e),
						comment: r ? Object(d.i)({
							state: e,
							commentId: r,
							contentType: p
						}) : null,
						listing: Object(d.A)(e, void 0, {
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
						parentId: a,
						uploadMetadata: i
					} = e;
					const c = m(t),
						d = r.type === n.Qb ? "karma_rate_limit" : r.fields && r.fields.length > 0 ? r.fields[0].msg : void 0,
						p = i ? "image" : function(e) {
							return e.includes(`"id":"${u.d}`)
						}("string" == typeof s ? s : JSON.stringify(s)) ? "giphy" : void 0;
					return Object(l.a)({
						...c,
						source: r.type === n.Qb ? "backend" : "comment_composer",
						actionInfo: {
							...c.actionInfo,
							reason: d
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
					...m(e)
				}), h = (e, t) => {
					t === a.c.replyToPost && Object(l.a)({
						noun: "input",
						...m(e)
					})
				}, O = (e, t) => Object(l.a)({
					source: "comment",
					noun: "delete",
					action: "click",
					...Object(d.p)(t),
					screen: Object(d.db)(t),
					subreddit: Object(d.mb)(t),
					post: Object(d.L)(t, e)
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
				}), y = () => e => ({
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
		"./src/reddit/helpers/trackers/creatorStats.ts": function(e, t, s) {
			"use strict";
			s.d(t, "f", (function() {
				return i
			})), s.d(t, "b", (function() {
				return c
			})), s.d(t, "d", (function() {
				return l
			})), s.d(t, "e", (function() {
				return u
			})), s.d(t, "a", (function() {
				return m
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
				c = (e, t) => s => ({
					...Object(r.p)(s),
					action: o.c.CLICK,
					noun: e,
					source: "creator_stats",
					post: Object(r.L)(s, t),
					subreddit: Object(r.mb)(s),
					userSubreddit: Object(r.vb)(s)
				}),
				d = e => {
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
				u = (e, t, s) => n => ({
					...Object(r.p)(n),
					action: o.c.LOAD,
					noun: "insights",
					source: "post_stats",
					actionInfo: Object(r.d)(n, {
						reason: d(t)
					}),
					post: Object(r.L)(n, e, void 0, s)
				}),
				m = (e, t, s, n, a, i) => c => ({
					...Object(r.p)(c),
					action: o.c.CLICK,
					noun: "community",
					source: "post_stats",
					actionInfo: Object(r.d)(c, {
						pageType: "post_stats",
						reason: "stats"
					}),
					post: Object(r.L)(c, e, void 0, i),
					subreddit: Object(r.mb)(c),
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
						reason: d(t)
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
				return w
			})), s.d(t, "v", (function() {
				return P
			})), s.d(t, "w", (function() {
				return T
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
				w = () => (e, t) => ({
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
				T = () => (e, t) => {
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
				a = s("./src/reddit/icons/svgs/Dropdown/index.m.less"),
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
			const d = e => {
				let {
					className: t,
					isSubreddit: s,
					...n
				} = e;
				return o.a.createElement("svg", c({
					className: Object(r.a)(i.a.dropdown, {
						[i.a.mRedditStyle]: !s
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
				a = s("./src/reddit/selectors/experiments/utils.ts");
			const i = ["au", "br", "ca", "de", "fr", "gb", "in", "mx", "us", "row"],
				c = Object(n.a)((e, t) => Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: `d2x_start_comment_before_sign_up_${t}`
				}), a.a),
				d = e => i.find(t => !!Object(a.a)(c(e, t))),
				l = Object(n.a)(d, e => !!e),
				u = e => {
					const t = d(e);
					return !!t && c(e, t) === o.Z.SkipOnboarding
				},
				m = e => {
					const t = d(e);
					return !!t && c(e, t) === o.Z.RegOnboarding
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
				return O
			})), s.d(t, "f", (function() {
				return x
			})), s.d(t, "g", (function() {
				return _
			})), s.d(t, "a", (function() {
				return g
			})), s.d(t, "h", (function() {
				return E
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
				O = (e, t) => !(!p(t) && !m(t)) && Object(o.c)(e, {
					experimentEligibilitySelector: r.f,
					experimentName: n.xe
				}) === n.Zd,
				x = (e, t) => (e => {
					return /^(?:\/r\/[^\/]+)?\/search\/?$/i.test(e) || /^\/u(?:ser)?\/[^\/]+\/m\/[^\/]+\/search\/?$/i.test(e)
				})(t) && Object(r.f)(e),
				v = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.f,
						experimentName: n.Rf
					})
				},
				_ = (e, t) => !!(e => !!e.match(u))(t) && (v(e) === n.hg.Enabled || v(e) === n.hg.HardReload),
				g = e => {
					return Object(o.c)(e, {
						experimentEligibilitySelector: r.e,
						experimentName: n.Uf
					})
				},
				E = (e, t) => !!(e => !!e.match(u))(t) && g(e) === n.hg.Enabled
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
		"./src/reddit/selectors/experiments/web2x_cta.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const a = Object(n.a)(e => Object(r.c)(e, {
					experimentName: o.vg,
					experimentEligibilitySelector: r.a
				}), e => e),
				i = Object(n.a)(a, e => e === o.pg)
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
		},
		"./src/redditGQL/operations/UpdateComment.json": function(e) {
			e.exports = JSON.parse('{"id":"3d83ef4f0375"}')
		},
		"./src/redditGQL/operations/UpdateCommentFollowState.json": function(e) {
			e.exports = JSON.parse('{"id":"0a2ed51664c5"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-LargePost.7c97f8bf1ff0802802c1.js.map