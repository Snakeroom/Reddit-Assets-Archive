// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.981b5cfbc499a15c8127.js
// Retrieved at 5/28/2020, 8:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PublicAccessNetwork"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var r;
			r = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function r(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var a, i = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						n = !/like android/i.test(t) && /android/i.test(t),
						o = /nexus\s*[0-6]\s*/i.test(t),
						c = !o && /nexus\s*[0-9]+/i.test(t),
						l = /CrOS/.test(t),
						d = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						v = !i && !d && /macintosh/i.test(t),
						g = !n && !m && !u && !p && /linux/i.test(t),
						w = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						S = s(/version\/(\d+(\.\d+)?)/i),
						C = /tablet/i.test(t) && !/tablet pc/i.test(t),
						f = !C && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? a = {
						name: "Opera",
						opera: e,
						version: S || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? a = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || S
					} : /SamsungBrowser/i.test(t) ? a = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: S || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? a = {
						name: "Opera Coast",
						coast: e,
						version: S || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? a = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: S || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? a = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? a = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? a = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? a = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? a = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? a = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (a = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, w ? (a.msedge = e, a.version = w) : (a.msie = e, a.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? a = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : l ? a = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? a = {
						name: "Microsoft Edge",
						msedge: e,
						version: w
					} : /vivaldi/i.test(t) ? a = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || S
					} : m ? a = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? a = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (a = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (a.firefoxos = e, a.osname = "Firefox OS")) : d ? a = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? a = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? a = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? a = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: S || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (a = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: S || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (a.touchpad = e)) : /bada/i.test(t) ? a = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? a = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || S
					} : /qupzilla/i.test(t) ? a = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || S
					} : /chromium/i.test(t) ? a = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || S
					} : /chrome|crios|crmo/i.test(t) ? a = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : n ? a = {
						name: "Android",
						version: S
					} : /safari|applewebkit/i.test(t) ? (a = {
						name: "Safari",
						safari: e
					}, S && (a.version = S)) : i ? (a = {
						name: "iphone" == i ? "iPhone" : "ipad" == i ? "iPad" : "iPod"
					}, S && (a.version = S)) : a = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || S
					} : {
						name: s(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !a.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (a.name = a.name || "Blink", a.blink = e) : (a.name = a.name || "Webkit", a.webkit = e), !a.version && S && (a.version = S)) : !a.opera && /gecko\//i.test(t) && (a.name = a.name || "Gecko", a.gecko = e, a.version = a.version || s(/gecko\/(\d+(\.\d+)?)/i)), a.windowsphone || !n && !a.silk ? !a.windowsphone && i ? (a[i] = e, a.ios = e, a.osname = "iOS") : v ? (a.mac = e, a.osname = "macOS") : _ ? (a.xbox = e, a.osname = "Xbox") : b ? (a.windows = e, a.osname = "Windows") : g && (a.linux = e, a.osname = "Linux") : (a.android = e, a.osname = "Android");
					var E = "";
					a.windows ? E = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : a.windowsphone ? E = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : a.mac ? E = (E = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : i ? E = (E = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : n ? E = s(/android[ \/-](\d+(\.\d+)*)/i) : a.webos ? E = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : a.blackberry ? E = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : a.bada ? E = s(/bada\/(\d+(\.\d+)*)/i) : a.tizen && (E = s(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (a.osversion = E);
					var x = !a.windows && E.split(".")[0];
					return C || c || "ipad" == i || n && (3 == x || x >= 4 && !f) || a.silk ? a.tablet = e : (f || "iphone" == i || "ipod" == i || n || o || a.blackberry || a.webos || a.bada) && (a.mobile = e), a.msedge || a.msie && a.version >= 10 || a.yandexbrowser && a.version >= 15 || a.vivaldi && a.version >= 1 || a.chrome && a.version >= 20 || a.samsungBrowser && a.version >= 4 || a.firefox && a.version >= 20 || a.safari && a.version >= 6 || a.opera && a.version >= 10 || a.ios && a.osversion && a.osversion.split(".")[0] >= 6 || a.blackberry && a.version >= 10.1 || a.chromium && a.version >= 20 ? a.a = e : a.msie && a.version < 10 || a.chrome && a.version < 20 || a.firefox && a.version < 20 || a.safari && a.version < 6 || a.opera && a.version < 10 || a.ios && a.osversion && a.osversion.split(".")[0] < 6 || a.chromium && a.version < 20 ? a.c = e : a.x = e, a
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function a(e, t) {
					var s, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) r.push(t(e[s]));
					return r
				}

				function i(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), s = a(e, (function(e) {
							var s = t - r(e);
							return a((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function n(e, r, a) {
					var n = s;
					"string" == typeof r && (a = r, r = void 0), void 0 === r && (r = !1), a && (n = t(a));
					var o = "" + n.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && n[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return i([o, e[c]]) < 0
						} return r
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = n, s.compareVersions = i, s.check = function(e, t, s) {
					return !n(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = r() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseClamp.js"),
				a = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = a(s)) == s ? s : 0), void 0 !== t && (t = (t = a(t)) == t ? t : 0), r(a(e), t, s)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
				n = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/cache/localStorage/index.ts"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(c.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				d = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const u = Object(n.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: d.Eb
				});
				return Object(d.zc)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: d.Fb
				});
				return Object(d.zc)(t) ? void 0 : t
			}, (e, t) => e === d.Gb.Enabled && t === d.Gb.Enabled);
			var p = s("./src/config.ts");
			var h = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const b = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						r = new Uint32Array(e);
					return crypto.getRandomValues(r), Array.from(r).map(e => t.charAt(e % s)).join("")
				},
				v = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				g = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var w;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(w || (w = {}));
			const S = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					r = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(r)).map(g).join("")
			})(w.SHA1, e);

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (s[r[a]] = e[r[a]])
				}
				return s
			};
			const _ = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				E = Object({
					SENTRY_RELEASE_VERSION: "94a4e1b-production"
				}),
				x = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: p.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: "Reddit/Version Build ".concat(E.SENTRY_RELEASE_VERSION, " ").concat(p.a.appName),
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: c,
					disableCookies: d,
					envKey: m,
					localStorageSaltKey: p,
					localStorageViewerUserIdKey: g,
					playerName: w,
					playerVersion: E,
					respectDoNotTrack: y,
					saltLength: O,
					saltTimeToLive: T,
					viewerUserIdLength: P
				} = Object.assign({}, x, t);
				class I extends r.Component {
					constructor() {
						super(...arguments), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(r.createRef)(), this.handleDashCreate = e => {
							this.setDashInstance(e)
						}, this.handleDashDestroy = () => {
							this.setDashInstance(null)
						}, this.handleHlsCreate = e => {
							this.setHlsInstance(e)
						}, this.handleHlsDestroy = () => {
							this.setHlsInstance(null)
						}
					}
					get experimentName() {
						return ""
					}
					get video() {
						return this.videoRef.current
					}
					componentDidMount() {
						this.doMuxThings()
					}
					componentDidUpdate(e) {
						this.props.muxVideoId !== e.muxVideoId && this.doMuxThings()
					}
					render() {
						const t = this.props,
							{
								forwardedRef: s
							} = t,
							r = f(t, ["forwardedRef"]);
						return a.a.createElement(e, C({}, r, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: s,
							videoRef: this.videoRef
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const e = await l();
							e.removeDashJS(this.video), this.dashInstance && e.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const e = await l();
							e.removeHLSJS(this.video), this.hlsInstance && e.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await l();
							if (this.isMonitoring) {
								const t = this.getVideoData();
								e.emit(this.video, "videochange", t)
							} else {
								const t = await this.getMuxData();
								e.monitor(this.video, t), this.isMonitoring = !0
							}
						} catch (e) {
							console.error(e)
						}
					}
					async encryptViewerUserId() {
						const e = this.props.redditUserId || I.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = v(),
							r = "".concat(s).concat(e).concat(t);
						return (await S(r)).substr(0, I.VIEWER_USER_ID_LENGTH)
					}
					getDashInstanceData() {
						const {
							dashInstance: e
						} = this;
						return e ? {
							dashjs: e
						} : null
					}
					getHlsInstanceData() {
						const {
							hlsInstance: e
						} = this;
						return e ? {
							hlsjs: e,
							Hls: e.constructor
						} : null
					}
					async getMuxData() {
						const e = await this.encryptViewerUserId(),
							t = this.getVideoData(),
							s = this.getThirdPartyLibData();
						return Object.assign({
							debug: I.DEBUG,
							disableCookies: I.DISABLE_COOKIES,
							respectDoNotTrack: I.RESPECT_DO_NOT_TRACK
						}, s, {
							data: Object.assign({
								env_key: I.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: I.PLAYER_NAME,
								player_version: I.PLAYER_VERSION
							}, t, {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = I.LOCAL_STORAGE_SALT_KEY;
						let t = Object(o.a)(e);
						return t || (t = b(I.SALT_LENGTH), Object(o.b)(e, t, I.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return Object.assign({}, this.getDashInstanceData(), this.getHlsInstanceData())
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: r
						} = this.props;
						return {
							video_duration: s ? I.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? I.STREAM_TYPE_LIVE : I.STREAM_TYPE_ON_DEMAND,
							video_title: r
						}
					}
				}
				I.displayName = _(e), I.ANONYMOUS_USER_ID = s, I.DEBUG = c, I.DISABLE_COOKIES = d, I.DURATION_LIVE = 1 / 0, I.ENV_KEY = m, I.LOCAL_STORAGE_SALT_KEY = p, I.LOCAL_STORAGE_VIEWER_USER_ID_KEY = g, I.PLAYER_NAME = w, I.PLAYER_VERSION = E, I.RESPECT_DO_NOT_TRACK = y, I.SALT_LENGTH = O, I.SALT_TIME_TO_LIVE = T, I.STREAM_TYPE_LIVE = "live", I.STREAM_TYPE_ON_DEMAND = "on-demand", I.VIEWER_USER_ID_LENGTH = P;
				const L = Object(r.forwardRef)((e, t) => a.a.createElement(I, C({}, e, {
						forwardedRef: t
					}))),
					k = Object(n.c)({
						redditUserId: h.g,
						isMuxEnabled: u
					});
				return Object(i.b)(k, null, null, {
					forwardRef: !0
				})(L)
			}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				a = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const i = Object(a.e)(e),
					n = encodeURIComponent("".concat(t).concat(i));
				return "".concat(r.a.accountManagerOrigin).concat(s || "/login", "?dest=").concat(n)
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less": function(e, t, s) {
			e.exports = {
				Wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				wrapper: "_2GTMVdV2t3ka_zfkVHHo95",
				LiveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				liveStreamingWrapper: "_2PreAn-l2nVweCX4t-mfuy",
				Copy: "_3xhJYY30L68x0pxk-8uTYD",
				copy: "_3xhJYY30L68x0pxk-8uTYD",
				LiveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				liveStreamingCopy: "_11HjWCkxXrGJ_6388VQT0L",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/lib/isSimpleClick/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/loginHref/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				u = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				p = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.div("Wrapper", p.a), v = o.a.span("Copy", p.a), g = o.a.wrapped(d.g, "SignupLink", p.a), w = o.a.wrapped(d.j, "LoginLink", p.a);
			t.a = Object(l.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: r,
					openLoginModal: o,
					openRegisterModal: l,
					origin: d,
					sendEvent: u
				} = e;
				return a.a.createElement(b, {
					className: Object(i.a)(t, {
						[p.a.LiveStreamingWrapper]: s
					})
				}, a.a.createElement(v, {
					className: Object(i.a)({
						[p.a.LiveStreamingCopy]: s
					})
				}, h._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), a.a.createElement(w, {
					href: Object(c.a)(r, d, "/login"),
					onClick: e => {
						Object(n.a)(e) && (e.preventDefault(), e.stopPropagation(), o(), u(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("log in", null, {
					hk: "37jFXB"
				})), a.a.createElement(g, {
					className: Object(i.a)({
						[p.a.LiveStreamingSignupLink]: s
					}),
					href: Object(c.a)(r, d, "/register"),
					onClick: e => {
						Object(n.a)(e) && (e.preventDefault(), e.stopPropagation(), l(), u(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("sign up", null, {
					hk: "2GqETx"
				})))
			})
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const a = Object(r.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("ChatPost~ModQueuePages"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/CommentsChat/index.tsx"
				}
			}, {
				ssr: !1
			});
			t.a = a
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.m.less": function(e, t, s) {
			e.exports = {
				LoaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				loaderWrapper: "_3k8JPc9w-DJrYLoer3GicH",
				Icon: "_1nrdmuhkCLXh8N_46gKAyn",
				icon: "_1nrdmuhkCLXh8N_46gKAyn",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X",
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				l = s.n(c);
			const d = n.a.div("LoaderWrapper", l.a),
				m = n.a.div("Icon", l.a),
				u = n.a.div("Byline", l.a),
				p = Object(i.a)({
					ErrorComponent: () => a.a.createElement(d, null, a.a.createElement(m, null), a.a.createElement(u, null)),
					getComponent: () => Object(o.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput~PublicAccessNetwork"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : a.a.createElement(d, null, a.a.createElement(m, null), a.a.createElement(u, null))
					}
				});
			t.a = e => a.a.createElement(p, e)
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const i = Object(r.a)({
				getComponent: () => Object(a.a)(() => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = i
		},
		"./src/reddit/components/OverflowMenu/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				dropdown: "ehsOqYO6dxn_Pf9Dzwu37",
				MenuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				menuButton: "_2pFdCpgBihIaYh9DSMWBIu",
				mIsEnabled: "uMPgOFYlCc5uvpa2Lbteu",
				MenuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				menuIcon: "_38GxRFSqSC-Z2VLi5Xzkjy",
				DropdownRow: "_2DO72U0b_6CUw3msKGrnnT",
				dropdownRow: "_2DO72U0b_6CUw3msKGrnnT"
			}
		},
		"./src/reddit/components/OverflowMenu/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return _
			}));
			var r = s("./node_modules/fbt/lib/FbtPublic.js"),
				a = s("./node_modules/react/index.js"),
				i = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				h = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				b = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/components/OverflowMenu/index.m.less"),
				g = s.n(v);
			const w = l.a.wrapped(u.a, "_Dropdown", g.a),
				S = Object(m.a)(w),
				C = l.a.button("MenuButton", g.a),
				f = l.a.wrapped(h.a, "MenuIcon", g.a),
				_ = l.a.wrapped(p.b, "DropdownRow", g.a),
				E = Object(o.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(b.b)(s)(e)
					}
				}),
				x = Object(n.b)(E, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(d.h)({
							tooltipId: s
						}))
					}
				}),
				y = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = x(e => i.a.createElement(C, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": r.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: y(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : i.a.createElement(f, null), i.a.createElement(S, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less": function(e, t, s) {
			e.exports = {
				awardBubbler: "FnKrJdIHMgaZCe4KmJpIs",
				award: "_2f1uito___1hy1e_wOG0cC",
				award_silverTier_LowCenter: "_216UpJYpySln3pOtiOy225",
				awardSilverTierLowCenter: "_216UpJYpySln3pOtiOy225",
				float75Center: "_3A9o1PdPiDWiJfITCo2qEC",
				fade: "_3FoNOebBs_9TJFnLFtbUjL",
				award_silverTier_MidCenter: "_297woX02AtKIxuMY1txb5c",
				awardSilverTierMidCenter: "_297woX02AtKIxuMY1txb5c",
				float100Center: "_3LPS-agAJGcsfANT15rYl8",
				award_silverTier_HighCenter: "_1qlxY17qEij8PWBrervj9w",
				awardSilverTierHighCenter: "_1qlxY17qEij8PWBrervj9w",
				float125Center: "_1wJt2jUSqBE-n2umgQUdln",
				award_goldTier_LowCenter: "_3aPtHCBNS901iYzOQUDPEh",
				awardGoldTierLowCenter: "_3aPtHCBNS901iYzOQUDPEh",
				scaleMd: "_15xyt6jmFtTLWmSNa5nrGQ",
				award_goldTier_MidCenter: "_2YitZz-a9SZGtnVGbRXjtq",
				awardGoldTierMidCenter: "_2YitZz-a9SZGtnVGbRXjtq",
				award_goldTier_HighCenter: "_2I3Lfdw0TvtN1xaLIij4ut",
				awardGoldTierHighCenter: "_2I3Lfdw0TvtN1xaLIij4ut",
				float150Center: "_3R1nNQWRQsoT9l6ZifsG47",
				award_platinumTier_LowCenter: "CxCnoSR3_qVd4TYKNs0Ah",
				awardPlatinumTierLowCenter: "CxCnoSR3_qVd4TYKNs0Ah",
				scaleLg: "YLRJkPNcn3c5whQvOeUXS",
				float200Center: "_2r3LWQOuuFBw-6MlgY1pQt",
				award_platinumTier_MidCenter: "kCUDFUEpYYDCRHscei3bX",
				awardPlatinumTierMidCenter: "kCUDFUEpYYDCRHscei3bX",
				float225Center: "_1Vihk7D4lCPLkj0wO_iW3u",
				award_platinumTier_HighCenter: "_30NplgVbUHf4fq3Ank601l",
				awardPlatinumTierHighCenter: "_30NplgVbUHf4fq3Ank601l",
				float250Center: "_1LhoeEsykXNuFDpKWZz889",
				award_silverTier_LowLeft: "Pqj6pwKC50iZWAA1Y7XaM",
				awardSilverTierLowLeft: "Pqj6pwKC50iZWAA1Y7XaM",
				float75Left: "_3IOoxSli9QpfsmexOXMcIK",
				award_silverTier_MidLeft: "_3ey7bKqS2YdC6084OjA798",
				awardSilverTierMidLeft: "_3ey7bKqS2YdC6084OjA798",
				float100Left: "_2q2rgJ-8FR6uz9yR7VeiLH",
				award_silverTier_HighLeft: "Mpn0Z0nB_OY_NWgpDdTWX",
				awardSilverTierHighLeft: "Mpn0Z0nB_OY_NWgpDdTWX",
				float125Left: "QIM2ONU8x6sFjUembrsJO",
				award_goldTier_LowLeft: "_1637g-O1CS-DkhdsIL-2td",
				awardGoldTierLowLeft: "_1637g-O1CS-DkhdsIL-2td",
				award_goldTier_MidLeft: "_3E2Xtm_D7XkbSSmDBOHA4x",
				awardGoldTierMidLeft: "_3E2Xtm_D7XkbSSmDBOHA4x",
				award_goldTier_HighLeft: "_1XnCilCgxYezH9XdRITdoa",
				awardGoldTierHighLeft: "_1XnCilCgxYezH9XdRITdoa",
				float150Left: "_1WhjlhiC8s6dkAybvRxr5b",
				award_platinumTier_LowLeft: "_1sM1uVxjjB_Xx6Rc7HjYNy",
				awardPlatinumTierLowLeft: "_1sM1uVxjjB_Xx6Rc7HjYNy",
				float200Left: "_2QGTN4l7AoTcovIc8t4NEQ",
				award_platinumTier_MidLeft: "_1GojdHGBcjXMuTH3CDTyN7",
				awardPlatinumTierMidLeft: "_1GojdHGBcjXMuTH3CDTyN7",
				float225Left: "ZauEx-KgYrY_KOCrJMPeW",
				award_platinumTier_HighLeft: "_3IvFxb_eSs0D9eRF1J8wE_",
				awardPlatinumTierHighLeft: "_3IvFxb_eSs0D9eRF1J8wE_",
				float250Left: "WXB-UF50Acfu-LbeVpqjw",
				award_silverTier_LowRight: "_2BonddcIYAZM0-8IgAyPi5",
				awardSilverTierLowRight: "_2BonddcIYAZM0-8IgAyPi5",
				float75Right: "YnOZON_jcjlOmnKQ42gC6",
				award_silverTier_MidRight: "a1weN6qnWYBr7MaYYKfei",
				awardSilverTierMidRight: "a1weN6qnWYBr7MaYYKfei",
				float100Right: "_3USBLUGyjBTpJNXEAbla8r",
				award_silverTier_HighRight: "_3IwP-T0K8JRA_WqpGsSFlc",
				awardSilverTierHighRight: "_3IwP-T0K8JRA_WqpGsSFlc",
				float125Right: "_2p90_prlzVa-hsep-G4nCk",
				award_goldTier_LowRight: "_2p941C7-2vs0TKRdNgQWCf",
				awardGoldTierLowRight: "_2p941C7-2vs0TKRdNgQWCf",
				award_goldTier_MidRight: "_2E4IlN2Kf4y3umZR-Vf7hx",
				awardGoldTierMidRight: "_2E4IlN2Kf4y3umZR-Vf7hx",
				award_goldTier_HighRight: "_257dp4PQnZma-9Vpc-yRgA",
				awardGoldTierHighRight: "_257dp4PQnZma-9Vpc-yRgA",
				float150Right: "_2fPS0Ooe2JD4L8rGSIVx0L",
				award_platinumTier_LowRight: "_3HqKNMDPQnu-eDjduf4_m_",
				awardPlatinumTierLowRight: "_3HqKNMDPQnu-eDjduf4_m_",
				float200Right: "_1N8AaOtkRWFat_OLw8Br3t",
				award_platinumTier_MidRight: "_4_He2TDlPCWbmBuepldJC",
				awardPlatinumTierMidRight: "_4_He2TDlPCWbmBuepldJC",
				float225Right: "_2bdGMSPwywxuBeEZkqhXpo",
				award_platinumTier_HighRight: "_25D-Z-z9HV1nYxFAKLB12",
				awardPlatinumTierHighRight: "_25D-Z-z9HV1nYxFAKLB12",
				float250Right: "oPK1nepC5Dg_KXmmXVMMV",
				float175Center: "_3QialJDN2lgx_qYSBi311Y",
				float175Left: "_2q4HlG1Po75dNuZjxSWFyz",
				float175Right: "_1MmsAgQwzi4ALilKygWHQy"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less": function(e, t, s) {
			e.exports = {
				tierAttribution: "PpfDNRwC6RdrWGjAujgud",
				platinumTierAttribution: "_2S3Arge8GOct3TsHb7Y1TU",
				awardName: "_1aJk-1fL4qyN2dcb8TKrSV",
				giverIcon: "_3v2Yx8oKFIMtM2_pvzvEzp"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less": function(e, t, s) {
			e.exports = {
				awardIconContainer: "aKtOzhWxIEjw6t4uxHXUZ",
				silverTierAwardIcon: "_1oruXtexEyPHDKeT9IX3O-",
				goldTierAwardIcon: "_25hWQnELKx76mS_3mNPBt",
				platinumTierAwardIcon: "_2mmdUsGGMugAWYqqH47Xfp",
				backgroundAnimation: "_1dalm40CELvVY0j6qOMgfD",
				backgroundStar: "_2h56XJi8B0XG4DsP74pB6s",
				spinCW: "_3WGa2d8ljXV2td2T-mMnx9",
				spinCw: "_3WGa2d8ljXV2td2T-mMnx9",
				backgroundStar2: "GPuTVexvh-6qpNAa6ZJQ5",
				backgroundSparkle: "FicKwF51rs_CK1wq09YYx",
				twinkle: "_2LKv65V9VKTKwmXJ5nEEUC",
				sparkleBottomLeft: "_2x6YhyAf4idFsw5vadFRpr",
				sparkleTopRight: "msgZtr0NMoakp8qx3-ET-",
				sparkleBottomRight: "_12bP3nOeUYSYRvSfKaUvsS"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_14ChzZxF_M44B1kvKYdn8H",
				awardIconAnimation: "_17OeWiA9f23WIagDo_qTCF",
				awardIconShow: "_2UYc6-AlDF8KgBo4iOaECW",
				awardHide: "_3NR_91K1cJK00cWs6hrEJC",
				attributionAnimation: "_19eb_9gLouu0vruXat7_Wk",
				attributionShow: "_3wbaxkPcmrPQUki8s7Gtdd",
				attributionHide: "_2u5VFqL4VPOy6GeTLryeSx"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less": function(e, t, s) {
			e.exports = {
				awardOverlay: "_3OFD4N6xzH7U_xJUgGCIJB"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less": function(e, t, s) {
			e.exports = {
				awardOverlaySpectacle: "_3POkDmO2vbDMOp12f4hNNM",
				awardOverlay: "_3N0A_QUgUzdXavU0d1w1lb"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less": function(e, t, s) {
			e.exports = {
				meterOverlay: "_1SwzjHTHbv5YOLDvhibz5f",
				meterPillWrapper: "_3Xpkpmj5-5TdrrUuqkbZEZ",
				meterPillContainer: "_5YBmJjZoc7vk-v08UWh1_",
				animateMeterInAndOut: "_2xq4pchu_eN3EWm5Jkx8QL",
				fadeInAndOut: "_3tQLJ-0XHd06LMBHpAaDD3",
				animateMeterInOnly: "_2-Fx4dYZn7ajYBLgMsCnxR",
				fadeIn: "_1eqT8ivBAWB0KPCt3tGvXt",
				fillMeterCritical: "_2y0uwouvZZzHtFXZSFuG7v",
				fillMeterLow: "_25Roektb1FL-TmyMwZRUEj",
				fillMeterNormal: "_3lQlVfIax8Me0nElY86hqX",
				fillMeterFed: "_2RJl1rp1YpLK_nECLKCl-e",
				meterLabel: "H5LQSL1OKVFrH4OzWtyFQ",
				particleWrapper: "_2JOlLJCTrII4HoAgjtUM28",
				particle: "TaJQXtUpzE9j6EeF2-FsE",
				particleSm: "_3K_epEfsOOOz3haspxn1yl",
				particleLg: "_3VHhuIv7jyPfTrKS1DgYd_",
				particleX0: "_2R-qPB5_JN4JbWFEn92ukc",
				particleX5: "_24S8klFnG4XOuvf-wuW5Mw",
				particleX10: "WHPZQrCmX-0D9rnpRs03R",
				particleX15: "_2c_GUDPeqPxosT-hFxwRYK",
				particleX20: "_3S680Y12xGT937OmODtTPP",
				particleX25: "_18lYzj0Al47z9ldVbRo7WL",
				particleX30: "_3-q5AYulX2ayc3Yom5jsmA",
				particleX35: "_3KMc9BG-Q0M6Xx4fGtyKvb",
				particleX40: "lXS_bqfbcHQJ-thnl-iF1",
				particleX45: "_2ep8T7ZeHLwVn6ZFGryz5d",
				particleX50: "_-5ko9R0ZBqe3Abz9JTaRT",
				particleX55: "_2dEcIcsiAyNbq8tRt1qe8m",
				particleX60: "_33N6ZPtAFBvR3kRrwLPkXp",
				particleX65: "_35xMB1jaLJunn7iFOvxctL",
				particleX70: "E4fvX5v0P7X5TRP2TIOIg",
				particleX75: "_1QUbiZQfb02e-5xgqdHmZl",
				particleX80: "UWHORsCQY0RD7JCSgWVbr",
				particleX85: "LT-jI6K3OlG_LIgfflAt5",
				particleX90: "_52Egx9RRo0D81S-fzaI71",
				particleX95: "_1vPkkgjPYWQ4-WF9I9S_Mr",
				particleX100: "_3G6Z2N9uXRs7s5mX6G7MR3",
				particle15Deg: "_3Jc2Wreg1kHTnDfs4-PV1w",
				move15Deg: "_3vwXcQ5OoI-Fqa8sF0bK9t",
				particle45Deg: "_1O5a1O4kMCQeYm6C59J_27",
				move45Deg: "_3DOBoVurEAJumT9Q1F_4SP",
				particle75Deg: "_34xifRAFcUFVtG7UIFbMnT",
				move75Deg: "_2xQtzdy0QLlyFmz7swubOk",
				particleDelay1: "_1ZpamcHb1_M9iHl_0api1G",
				particleDelay2: "_19QCRq04-fkp5mzf9KnQ5y",
				particleDelay3: "x1nsj5GvoOIhGg5HqapgN",
				particleDelay4: "_3XJaocXfxz-7_2ynqm3HUa",
				particleDelay5: "_2sFWfZrl3XhLj6lYCCCFpw",
				particleDelay6: "_1Wfp9G8gCkp8j-7tdKgaO9",
				particleDelay7: "_1MrBp8anZ2zF8Szl6Pr0h9",
				particleDelay8: "_2H0ACN8-9zZjFWvSL22yeB",
				particleDelay9: "_3UtZVRTbQfgJOEHRyEM8D4",
				particleDelay10: "PKfpa3Dzjl9tthpMoU3pV",
				particleReverse: "bxj_DvGI3u5PeAbe7QtU2"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_3w_dLAoZ36_fPFvFr73Twc",
				visible: "_3xefvVa9iQxtBKfDrIQHK5",
				overlayCenter: "_38XOKvg5Aum-pHj1zsk3Gh",
				muteButton: "_1loeDj0ZNN1lkR8TbCnX5L",
				overlayTitle: "_1NnuLtMElnw61J8beBBk1b",
				overlayTop: "t59TT9rQbiEQkmrsaaYfs",
				menuContainer: "_27178MBeTCoso3gtVeQoIp",
				titleContainer: "S05_Ivx6gzKZmSRXiZa2g",
				menuButton: "s36uqi4axSXHQMgaoux_n",
				shareButton: "_5sKR5rHQgiTK5_-gvLzJ9",
				reportIcon: "_3xY0AQnECn_6gvYN_s0gcK",
				menuIcon: "_1xrQmhCkwYzatHLEBV1tG-",
				videoTitle: "_17PXlsAvhmFm8yKmnpboBI",
				RecordedLabel: "_1YoUYS0LQtaRkt6Je2wbSW",
				recordedLabel: "_1YoUYS0LQtaRkt6Je2wbSW",
				volumeIcon: "_39-jgt3SIm_nk5n7j3QEfp",
				overlayBottom: "_1ZAJ7W6IsblPMAseqf_W_1",
				scrubberBar: "_3i-PRgw3NW9Db-1qAmdcMh",
				intro: "_1CsY8N-fPRu-iQN8ocPZCD",
				prompt: "_1KVVoPIOqNFBVgfKKhI6IJ",
				overflowItemIconWrapper: "_1B5cn8nAxfnEGrx_5yO_Pn",
				overflowItemIcon: "_2rs0m2DYBYodAJnsjGNR1r",
				promptButtonSet: "_1Iw3svNrJVGVZG8lv_0RkZ",
				promptButton: "_2k4XxsTat5YM_3MLe7Qvlr",
				awardButton: "xXntZktZERg_h5_1RbTAJ",
				awardOverlaySpectacle: "_2KvsuLKnVtlqMTrKCouaF8"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_1EF49Psgos8vYl_v7Tflby",
				prompt: "_3q-CHmWq_WQdcLlNanmTlw",
				overlayTopLeft: "_3_ut3gTYu6aZliMETvG4qO",
				overlayTopRight: "_2adYh4QIiecMkKiax2nLBy",
				overlayTop: "-sfg01vEb_tZ17EEtV_1n",
				overlayBottom: "_2Pa8FxBcwFuR-eB88yFeb5",
				meta: "_37KNxMPFQ_aTyagqFCGM8f",
				visible: "MyDXLhLhWFWpDWQxwob4n",
				broadcastStatus: "RkAyxHZcfmYratKiIe6F1",
				subredditInfo: "hWK-1DjIzUQro_Jl7EuW7",
				live: "_2MrLGchkK1FzIihZNcSErL",
				subreddit: "_2HJ6_jH0Qxso0BklDa4MY8",
				dropdownLabel: "_2EdFq4jwAX3s-k2ywmNUdA",
				dropdownRow: "_2TUKPRdgdRLBjd4A65bAv8",
				title: "_2BOjTR_ZfK356j4GUU_uP0",
				watchersCount: "_3qmsTjPgq3yEn2MRAvyKWV",
				controls: "_3Ve6YrAPjNqahWzatg2r-G",
				actionButton: "_3ljeo8vtq9QnPE3mBHJzLA",
				checkmarkIcon: "_1AD2nB9gj2sFeuP9eqLTJm",
				joinButton: "M1wl6M6YPUIzVkVKZ7RMx",
				plusIcon: "vnhfQ_Oj9V7tGTplUaavs",
				joinText: "lNpXHxQlf6Kotiochq5Bn",
				actionIcon: "_1m2Qj2Gr-_ZW8QCWjX1c_-",
				shareButton: "_3aLywHN9oVLU-kDGYrO_9Y",
				shareIcon: "_1FiOf9-VyeRBZ03fpzjZzd",
				menuButton: "_2Da-2PvZbZEChxL9motRgr",
				menuIcon: "_1cP74uG4uBeJE6MSnql_Vl",
				votePanel: "_3ARoHXimg9SEIdTS36iYA7",
				voteButton: "_3zRF3x1PVktfO77yiL70dM",
				voteIcon: "zV_29gkXZ2wlev53b5UKw",
				upVoteButton: "_3JZvxzBdRrDL22bOmPikWG",
				voted: "_2mS9j06DUO6bQJiPNNWTYq",
				downVoteButton: "LCSHLUW784jIQ0h3m1oAH",
				score: "_31PjwlFA4843J48jMG4YzK",
				hidden: "_3SFmtJd2uzRfmIgPvi-Yid",
				promptButtonSet: "_2-JNYG0bcwDm13ZkpVuW99",
				awardPromptWrapper: "_1J2SNfou9P_BKlDY42rZgE",
				awardPromptLabel: "_3EmfXMw_zUNf46UsW8EyGZ",
				overflowItem: "_3fblWdGk58C7B4Z-xzpJvc",
				subscribeToProfileButton: "DkFs_kVT8lE3xhsCfwKM_",
				subscribeToProfileAvatar: "_zREeeCx3pI1sg-PeDRDV",
				subscribeToProfileStatus: "ya7YWsKVy6B_6Yq6fJcgc",
				isSubscribed: "FJ0cySrU3DrwLTyKRy-Rk"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less": function(e, t, s) {
			e.exports = {
				overflowMenu: "UL0EgTWUyCb0-qMWcY18N",
				dropdownTriangle: "zPDKvoROAg3PV05zDWnZP",
				overflowMenuIcon: "_7cxCI8JUyH-7A10o0Z8oa",
				dropdown: "ztqKv9F6h9Bk8Oq28W8_n",
				dropdownLabel: "GDGRC-eiS72xPHwbJuudS",
				dropdownRow: "PD3ktNCcalJOk3caRXS4-"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less": function(e, t, s) {
			e.exports = {
				scrubberBar: "_1qNcdQne5zCPqYhbbuj8dy",
				visible: "_2xzC2ncShLK6L1PpLtMNsg"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/StaticScreen/index.m.less": function(e, t, s) {
			e.exports = {
				staticContainer: "_1BdKib9dGcRah76SjYaMWn",
				tvNoise: "_3WT4xZSU6Wk4iRsCuHBExL",
				noise: "_3YjFa-j3NP6SmWvtbFZf__",
				previewContainer: "_1TRPx0NrRAAzDhUNaG6uLe"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less": function(e, t, s) {
			e.exports = {
				streamingChat: "_3ZcCOjXXSQTxyjfVz91MYT",
				prompt: "_72hwd-RmhciQJPjpTun-m",
				chatScroller: "_1VA8Leq8VgzE0tcCf0nnmc",
				emptyState: "_13PmNeNdYYYFh3BVc79an"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less": function(e, t, s) {
			e.exports = {
				meterCritical0: "_1T7F7j3sbgWiyiqRRnet3p",
				meterCritical10: "_1DtSizPrgyuKf8w6idU9cz",
				meterCritical20: "_2WMEtQrqSX1GMTuAZi7BJF",
				meterCritical30: "_1EKoCygRtkeseJ016Cc2jZ",
				meterCritical40: "_11HpV5Yq5Z1B9-dIDlpT1U",
				meterCritical50: "_1tSw--7teh0GyWwcao4gdV",
				meterCritical60: "_2CKRwggQNVsKzp5kGaH5La",
				meterCritical70: "_3BDNCyLtPA5f-jumOd9ajl",
				meterCritical80: "_2TVEvSg6EvnDe3mdZRW4fk",
				meterCritical90: "EMOGPpN-w266AIH_esqnz",
				meterCritical100: "_3dChP9_PA_HHpIh-MIOkBS",
				meterCritical110: "_14lOkdk4IyPRbADMNL9QE7",
				meterCritical120: "_3KXRmja9d_BCTVxIMKBBoU",
				meterCritical130: "_3QRH7HveukgBW4ssNnAND5",
				meterCritical140: "_3lgkwJQwL5HDVSqaKJDJtx",
				meterCritical150: "_1nnHb4m3b8B0Jn8-vGvC8i",
				meterCritical160: "_3bRU8dEZlwGBZ_hpdFz2N3",
				meterCritical170: "T6gcTLzF6xZMkuDKZkl30",
				meterCritical180: "_1JPtfjGQd_XVLO8kEi6K2L",
				switchContainer: "CWoSjbtB167AZNKroCaZ_",
				switchButton: "mT9ZmVLUVuh9vAJ7zwJTF",
				streamThumbnail: "_2dFEpiLjl4l_V34KjcBiPT",
				arrowIcon: "_2rr0-UWx_dcJs5qJxx7zb6",
				switchContainerNext: "_1madTdUxB7YHTPcikPseyX",
				switchContainerPrevious: "_1uaoOY-tle0b_MqSTJ5byL"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less": function(e, t, s) {
			e.exports = {
				statsPanel: "mZiwRB3IyMA2ciE9VYmM5",
				watchingContainer: "_1S1XpTfxiVE_qLOIr_7Q4T",
				watchingCounter: "_1oJlp6NNid7Mc4MQyILB-s",
				watchingCaption: "_2STAcvaW1vo-sELvkodWFV",
				voteContainer: "_1kPiN_EqJH2A8zcFqmXTsV",
				voteIcon: "mCEKjumIA4fAYzXycHXp7",
				upButton: "_1-ZeaCDlEjCCKHOO_UhElo",
				activeVote: "zgEolbsvkXlLlrgJSpWkL",
				downButton: "_3txlAk8zXSeqIrpIHIsZtK",
				votesCounter: "_1Hc9ts_bYKSv1OZS0zBGOo"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/index.m.less": function(e, t, s) {
			e.exports = {
				theaterContainer: "_2GRKD-vc7V1Y_N8mf81C73",
				overlay: "_3EBqsnw89Qx3UEoELcarMR",
				focusVisible: "RrzcV0hyA0BISr1eXgG9M",
				panesWrapper: "_8aA-2ZrheEy6k2e1iShKQ",
				initialized: "_2QagxVHOpd1MZxMCUI8-aC",
				pane: "_1J9WuBbLemYVOo8ibJDljN",
				leftPane: "_1YLn-G2I6GbQpuf-DZ4fOX",
				videoContainer: "_1LWq4WiRex5umy4-L1eStm",
				rightPane: "p02A8ZUESZF7fQy6pu1WF",
				closeButton: "_34dJmQNu3gi0aCIS1PD5uw",
				closeIcon: "UP3tR535P7cIknrcrCxQ3",
				meterCritical0: "_2T-7of-8vqAynZw1Oz4-NX",
				meterCritical10: "_3itUJfgWxcRexhqqqxQinF",
				meterCritical20: "_1Aq5PPETX3z41ibCky1_aX",
				meterCritical30: "_1RBpmHmfXPUxQgUC4uXobt",
				meterCritical40: "_2J1QDym-1XELon2WR1V4mS",
				meterCritical50: "_1fE4XQjE9zujsUme82ofuC",
				meterCritical60: "_3ONFJJcZUvYtAWF50vNx1i",
				meterCritical70: "_2cvv2EfIg0IBur6NC0WIgy",
				meterCritical80: "bvawpTY_mou8hbpn194Be",
				meterCritical90: "_3p7CDC8cj_SqaJG8P613nW",
				meterCritical100: "_3i3MCLsKesWpvlmdRPLB9P",
				meterCritical110: "_1SDfw3x3VyPkqvjELcNppA",
				meterCritical120: "_1SGt6vairhxvrHTF8afSxA",
				meterCritical130: "_2tYLpubORLk9kaT6zbJbff",
				meterCritical140: "hcs1BiyQl055s3-vqlAwD",
				meterCritical150: "_2EoBLEyd5oLeTAWhnaG7gr",
				meterCritical160: "LpClsXdrjAViEdXqQqWxn",
				meterCritical170: "tRB7qSJRizC3oDAmc20At",
				meterCritical180: "rPfp0FIXGWvZw6BpvAbid"
			}
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			}));
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts");
			const i = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				n = () => null;
			t.a = Object(r.a)({
				ErrorComponent: n,
				getComponent: () => Object(a.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: n
			})
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/lodash/throttle.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				l = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				m = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.m.less"),
				p = s.n(u),
				h = s("./src/reddit/controls/Dropdown/row.m.less"),
				b = s.n(h);

			function v() {
				return (v = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var a = 0;
					for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (s[r[a]] = e[r[a]])
				}
				return s
			};
			class w extends n.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = a()(() => {
						const {
							props: e
						} = this;
						e.handleActivateRow && e.handleActivateRow(e.index)
					}, 500)
				}
				render() {
					const {
						props: e
					} = this, t = e.skipRoleAttr ? null : {
						role: "menuitem"
					}, s = Object(o.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? n.a.createElement(c.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && n.a.createElement("span", {
						className: s
					}, e.children), n.a.createElement("span", {
						className: Object(o.a)(b.a.text, e.textClassName)
					}, e.displayText)) : n.a.createElement(m.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: a()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? n.a.createElement("div", null, e.children) : n.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && n.a.createElement("span", {
						className: Object(o.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && n.a.createElement(d.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && n.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = g(e, ["className"]);
				const r = Object(o.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !s.noHover,
					[b.a.mIsSelected]: s.isSelected,
					[b.a.topics]: s.isTopicsStyle
				});
				return n.a.createElement(w, v({
					className: r
				}, s))
			}
		},
		"./src/reddit/controls/Dropdown/row.m.less": function(e, t, s) {
			e.exports = {
				iconWrapper: "pthKOcceozMuXLYrLlbL1",
				iconStyles: "_2XOVBjNLHjJIznEsn35vs2",
				text: "_2-cXnP74241WI7fpcpfPmg",
				row: "_3LwUIE7yX7CZQKmD2L87vf",
				topics: "kR_ljR-F8vtc-ORj1uipB",
				checkmark: "_3Iua3qlR9JiTwjjk6NKye1",
				mIsSelected: "_1IKtbRloF_LV1hPqMzP3MC",
				mIsInteractive: "_1oYEKCssGFjqxQ9jJMNj5G"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.m.less": function(e, t, s) {
			e.exports = {
				unstyledInternalLink: "_39Glgtoolpdt4PIzcnjPSW"
			}
		},
		"./src/reddit/controls/UnstyledInternalLink/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/controls/InternalLink/index.tsx"),
				i = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				n = s.n(i);
			t.a = r.a.wrapped(a.a, "unstyledInternalLink", n.a)
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				n = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				o = s.n(n);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(i.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", o.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Menu/index.m.less": function(e, t, s) {
			e.exports = {
				MenuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg",
				menuIcon: "_2L8b_l8zFzAkWuMyZJ1_vg"
			}
		},
		"./src/reddit/icons/fonts/Menu/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				n = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				o = s.n(n);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => a.a.createElement("i", {
				className: "".concat(Object(i.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r),
				i = s("./src/lib/classNames/index.ts"),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => a.a.createElement("i", {
				className: Object(i.a)(Object(n.b)("share"), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		},
		"./src/reddit/icons/svgs/Rules/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);
			t.a = e => a.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, a.a.createElement("g", null, a.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);

			function i(e) {
				return a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "M10 0L11.4142 8.58579L20 10L11.4142 11.4142L10 20L8.58579 11.4142L0 10L8.58579 8.58579L10 0Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);

			function i(e) {
				return a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					d: "m81.4458 35.074-29.1976 11.7753 26.9134 16.3348-28.9722-12.3194 7.4803 30.5811-11.7754-29.1976-16.3347 26.9135 12.3193-28.9723-30.581 7.4803 29.1975-11.7754-26.9134-16.3347 28.9722 12.3193-7.4802-30.581 11.7753 29.1975 16.3348-26.9134-12.3194 28.9722z",
					clipRule: "evenodd",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star2/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var r = s("./node_modules/react/index.js"),
				a = s.n(r);

			function i(e) {
				return a.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, a.a.createElement("path", {
					clipRule: "evenodd",
					d: "m27.3003.299194 2.4798 21.013306 16.6121-13.10519-13.1052 16.61209 21.0133 2.4798-21.0133 2.4798 13.1052 16.6121-16.6121-13.1052-2.4798 21.0133-2.4798-21.0133-16.61209 13.1052 13.10519-16.6121-21.013307-2.4798 21.013307-2.4798-13.10519-16.61209 16.61209 13.10519z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/icons/svgs/VideoShare/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "fpaVW-I8iox1soX0hTuwb"
			}
		},
		"./src/reddit/pages/PublicAccessNetwork/index.m.less": function(e, t, s) {
			e.exports = {
				rpanContainer: "e00nEFei4dIvTqPPuw5rE",
				overlay: "KiogDzsSRwmKjlSPDsTQv",
				forbiddenScreen: "_1Ew8OVeA6sJ108GaDUqjQf"
			}
		},
		"./src/reddit/pages/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var r = s("./node_modules/lodash/fromPairs.js"),
				a = s.n(r),
				i = s("./node_modules/react/index.js"),
				n = s.n(i),
				o = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/extractQueryParams/index.ts"),
				u = s("./src/reddit/actions/login.ts"),
				p = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				h = s("./src/higherOrderComponents/makeAsync.tsx"),
				b = s("./src/lib/loadWithRetries/index.ts");
			var v = Object(h.a)({
					getComponent: () => Object(b.a)(() => s.e("RpanOnboardingModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/Onboarding/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				g = s("./src/config.ts"),
				w = s("./node_modules/fbt/lib/FbtPublic.js"),
				S = s("./node_modules/lodash/throttle.js"),
				C = s.n(S),
				f = s("./src/telemetry/index.ts"),
				_ = s("./node_modules/uuid/v4.js"),
				E = s.n(_),
				x = s("./src/higherOrderComponents/withMux/index.tsx");
			var y = e => {
					if (!e || !e.isConnected) return;
					const t = e.hasAttribute("tabindex");
					t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
				},
				O = s("./src/lib/focusVisible/index.js"),
				T = s("./src/reddit/actions/media.ts"),
				P = s("./src/reddit/actions/profile/index.ts"),
				I = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				L = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				k = s("./src/lib/makeActionCreator/index.ts");
			const N = Object(k.a)(L.D),
				j = Object(k.a)(L.X),
				M = e => async t => {
					t(N(e))
				}, A = Object(k.a)(L.N), V = Object(k.a)(L.T);
			var R, D = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				B = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				H = s("./src/reddit/actions/publicAccessNetwork/userSettings.ts"),
				W = s("./src/reddit/actions/reportFlow.ts"),
				U = s("./src/reddit/components/HlsVideo/index.tsx"),
				F = s("./src/reddit/components/ReportFlow/index.tsx"),
				K = s("./src/reddit/components/TrackingHelper/index.tsx"),
				G = s("./src/reddit/constants/history.ts"),
				Y = s("./src/reddit/constants/keycodes.ts"),
				X = s("./src/reddit/helpers/dom/index.ts"),
				J = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				q = s("./src/reddit/helpers/trackers/rpan.ts"),
				z = s("./src/reddit/helpers/trackers/screenview.ts"),
				Z = s("./src/reddit/icons/svgs/Close/index.tsx"),
				Q = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				$ = s("./src/reddit/selectors/media.ts"),
				ee = s("./src/reddit/selectors/platform.ts"),
				te = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				se = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				re = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			! function(e) {
				e[e.CRITICAL = 0] = "CRITICAL", e[e.LOW = 1] = "LOW", e[e.NORMAL = 2] = "NORMAL", e[e.EXTENDED = 3] = "EXTENDED"
			}(R || (R = {}));
			const ae = 60,
				ie = 30,
				ne = 3 * ae,
				oe = 5 * ae,
				ce = 5,
				le = 5 * ae,
				de = 10,
				me = 5;
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var ue = s("./src/lib/makeCommentsPageKey/index.ts"),
				pe = s("./src/reddit/actions/gold/modals.ts"),
				he = s("./src/reddit/actions/post.ts"),
				be = s("./src/reddit/actions/subscription/index.ts"),
				ve = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				ge = s("./src/reddit/constants/posts.ts"),
				we = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				Se = s("./src/reddit/selectors/experiments/goldRpanLivePreview.ts"),
				Ce = s("./src/reddit/selectors/subreddit.ts"),
				fe = s("./src/reddit/selectors/comments.ts"),
				_e = s("./src/reddit/selectors/communityAwards.ts"),
				Ee = s("./src/reddit/models/Gold/Award.ts");
			var xe = e => e < 500 || !e ? Ee.e.Silver : e < 1800 ? Ee.e.Gold : Ee.e.Platinum,
				ye = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				Oe = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less"),
				Te = s.n(Oe);
			const {
				fbt: Pe
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Ie(e) {
				const {
					awardName: t,
					giverName: s,
					giverId: r,
					tier: a,
					className: i
				} = e, o = a === Ee.e.Silver ? Te.a.silverTierAttribution : a === Ee.e.Gold ? Te.a.goldTierAttribution : Te.a.platinumTierAttribution;
				return n.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(d.a)(i, Te.a.tierAttribution, o)
				}, a !== Ee.e.Silver && n.a.createElement(ye.a, {
					className: Te.a.giverIcon,
					userId: r,
					width: 16,
					height: 16
				}), n.a.createElement("span", null, a !== Ee.e.Silver && Pe._("{giverName} gave {space}", [Pe._param("giverName", s), Pe._param("space", " ")], {
					hk: "SzDdi"
				}), n.a.createElement("strong", {
					className: Te.a.awardName
				}, t)))
			}
			var Le = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				ke = s("./src/reddit/icons/svgs/Star/index.tsx"),
				Ne = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				je = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less"),
				Me = s.n(je);

			function Ae(e) {
				const {
					iconUrl: t,
					tier: s,
					className: r
				} = e, a = s === Ee.e.Silver ? Me.a.silverTierAwardIcon : s === Ee.e.Gold ? Me.a.goldTierAwardIcon : Me.a.platinumTierAwardIcon, i = s !== Ee.e.Silver, o = s === Ee.e.Platinum;
				return n.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(d.a)(r, Me.a.tierAwardIcon)
				}, n.a.createElement("div", {
					className: Me.a.awardIconContainer
				}, i && n.a.createElement(n.a.Fragment, null, n.a.createElement(ke.a, {
					className: Object(d.a)(Me.a.backgroundAnimation, Me.a.backgroundStar)
				}), n.a.createElement(Ne.a, {
					className: Object(d.a)(Me.a.backgroundAnimation, Me.a.backgroundStar, Me.a.backgroundStar2)
				})), n.a.createElement("img", {
					src: t,
					className: a
				}), o && n.a.createElement(n.a.Fragment, null, n.a.createElement(Le.a, {
					className: Object(d.a)(Me.a.backgroundAnimation, Me.a.backgroundSparkle, Me.a.sparkleBottomLeft)
				}), n.a.createElement(Le.a, {
					className: Object(d.a)(Me.a.backgroundAnimation, Me.a.backgroundSparkle, Me.a.sparkleTopRight)
				}), n.a.createElement(Le.a, {
					className: Object(d.a)(Me.a.backgroundAnimation, Me.a.backgroundSparkle, Me.a.sparkleBottomRight)
				}))))
			}
			var Ve = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less"),
				Re = s.n(Ve);

			function De(e) {
				const {
					award: t,
					className: s,
					giverId: r,
					giverName: a
				} = e, i = xe(t.coinPrice), o = t.icon128 ? t.icon128.url : t.icon.url;
				return n.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(d.a)(s, Re.a.container)
				}, n.a.createElement(Ae, {
					iconUrl: o,
					tier: i,
					className: Re.a.awardIconAnimation
				}), n.a.createElement(Ie, {
					awardName: t.name,
					className: Re.a.attributionAnimation,
					giverId: r,
					giverName: a,
					tier: i
				}))
			}
			var Be = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less"),
				He = s.n(Be);
			class We extends i.Component {
				render() {
					const {
						award: e,
						className: t,
						giverName: s,
						giverId: r
					} = this.props;
					return e && r && s ? n.a.createElement("div", {
						"aria-role": "presentation",
						className: Object(d.a)(t, He.a.awardOverlay)
					}, n.a.createElement(De, {
						award: e,
						giverId: r,
						giverName: s
					})) : null
				}
			}
			var Ue = Object(o.b)(() => Object(l.a)(e => e, fe.n, (e, t) => {
					if (!t) return {};
					const {
						associatedAwardId: s,
						author: r,
						authorId: a
					} = t;
					return {
						award: s ? Object(_e.a)(e, s) : void 0,
						giverId: a,
						giverName: r
					}
				}))(We),
				Fe = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less"),
				Ke = s.n(Fe);
			const Ge = Object(o.b)(() => Object(l.c)({
					awardedCommentLinks: (e, t) => {
						let {
							commentsPageKey: s
						} = t;
						return Object(fe.g)(e, {
							commentsPageKey: s
						}).filter(t => {
							const s = Object(fe.n)(e, {
								commentId: t.id
							});
							return !!s && !!s.associatedAwardId
						})
					},
					isFullyLoaded: fe.v
				})),
				Ye = e => ({
					prevAwardedCommentLinks: e.isFullyLoaded ? [...e.awardedCommentLinks] : void 0,
					prevAwardedCommentLinksTopIndex: e.isFullyLoaded ? e.awardedCommentLinks.length : 0,
					prevCommentsPageKey: e.commentsPageKey
				});
			class Xe extends i.Component {
				constructor(e) {
					super(e), this.state = Ye(e)
				}
				shouldComponentUpdate(e) {
					const {
						awardedCommentLinks: t,
						commentsPageKey: s
					} = this.props;
					return e.commentsPageKey !== s || e.awardedCommentLinks.length !== t.length
				}
				static getDerivedStateFromProps(e, t) {
					if (e.commentsPageKey !== t.prevCommentsPageKey) return Ye(e);
					return {
						prevAwardedCommentLinks: e.isFullyLoaded ? [...e.awardedCommentLinks] : void 0,
						prevAwardedCommentLinksTopIndex: e.isFullyLoaded ? t.prevAwardedCommentLinks ? t.prevAwardedCommentLinks.length : e.awardedCommentLinks.length : 0
					}
				}
				render() {
					const {
						awardedCommentLinks: e,
						className: t,
						isFullyLoaded: s
					} = this.props, {
						prevAwardedCommentLinksTopIndex: r
					} = this.state;
					if (!s) return null;
					const a = e.slice(r);
					return a.length ? n.a.createElement("div", {
						"aria-role": "presentation",
						className: Object(d.a)(t, Ke.a.awardOverlaySpectacle)
					}, a.map(e => n.a.createElement(Ue, {
						className: Ke.a.awardOverlay,
						commentId: e.id,
						key: e.id
					}))) : null
				}
			}
			var Je = Ge(Xe);
			const qe = (e, t) => e > t ? R.EXTENDED : e < ne ? R.CRITICAL : e < oe ? R.LOW : R.NORMAL,
				ze = e => e / ae,
				Ze = e => Qe(e) % le == 0,
				Qe = e => Math.round(e / ce) * ce;
			var $e = s("./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less"),
				et = s.n($e);
			const tt = (() => {
					const e = [];
					for (let t = 1; t < 11; t++) e.push("Delay".concat(t));
					return e
				})(),
				st = (() => {
					const e = [];
					for (let t = 0; t < 21; t++) e.push("X".concat(5 * t));
					return e
				})(),
				rt = ["15Deg", "45Deg", "75Deg"],
				at = e => e[Math.floor(Math.random() * e.length)],
				it = () => {
					const e = [at(st), at(rt), at(tt)].map(e => et.a["particle".concat(e)]).join(" ");
					return "".concat(et.a.particle, " ").concat(e, " ").concat(Math.round(Math.random()) ? et.a.particleReverse : "")
				},
				nt = 40,
				ot = 20;
			class ct extends n.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < nt; t++) e.push(this.createParticle(t, "particleSm"));
					for (let t = 0; t < ot; t++) e.push(this.createParticle(t, "particleLg"));
					return n.a.createElement("div", {
						className: et.a.particleWrapper
					}, e)
				}
				createParticle(e, t) {
					return n.a.createElement("div", {
						key: "".concat(t).concat(innerHeight),
						className: "".concat(it(), " ").concat(et.a[t])
					})
				}
			}
			var lt = ct;
			const dt = () => ({
				estimatedTimeRemaining: null,
				previouslyVisible: !1,
				visible: !1,
				streamId: null,
				timerPausedAt: null,
				timerDiff: 0,
				timer: null,
				pillLabel: null
			});
			class mt extends i.Component {
				constructor() {
					super(...arguments), this.state = dt(), this.timerId = 0
				}
				componentDidMount() {
					this.timerId = setInterval(() => this.updateTimer(), 1e3)
				}
				componentWillUnmount() {
					clearInterval(this.timerId)
				}
				updateTimer() {
					this.setState(e => null === e.timer || e.timer < 1 ? null : {
						timer: e.timer - 1,
						timerDiff: null !== e.timerPausedAt ? e.timerDiff : -1
					})
				}
				static isPillVisible(e, t, s) {
					return t || s > 0 || Ze(e) || e < oe
				}
				static getPillLabel(e, t) {
					const {
						currentStream: s,
						overlayOpen: r
					} = e, {
						timerDiff: a,
						timer: i
					} = t;
					if (!s || !s.meter || null === i) return null;
					if (a > 0) {
						if (a < ae) {
							const e = Qe(a);
							return w.fbt._({
								"*": "+{seconds time added} seconds airtime given",
								_1: "+1 second airtime given"
							}, [w.fbt._plural(e, "seconds time added")], {
								hk: "4zE2Hn"
							})
						} {
							const e = Math.round(ze(a));
							return w.fbt._({
								"*": "+{minutes time added} minutes airtime given",
								_1: "+1 minute airtime given"
							}, [w.fbt._plural(e, "minutes time added")], {
								hk: "17ep0a"
							})
						}
					}
					if (i > s.meter.full_meter_duration) {
						const e = Math.round(ze(s.meter.full_meter_duration)).toLocaleString();
						return w.fbt._("{number of minutes}+ minutes airtime left", [w.fbt._param("number of minutes", e)], {
							hk: "2Tjt0F"
						})
					}
					if (Ze(i) && !r && i > oe) {
						const e = Math.round(ze(i)).toLocaleString();
						return w.fbt._("{number of minutes} minutes airtime left", [w.fbt._param("number of minutes", e)], {
							hk: "3DZxvE"
						})
					}
					const n = Math.round(i),
						o = Math.floor(ze(n)),
						c = n % ae,
						l = "".concat(o, ":").concat(c < 10 ? "0" : "").concat(c);
					return w.fbt._("{mm:ss timestamp of remaining time} airtime left", [w.fbt._param("mm:ss timestamp of remaining time", l)], {
						hk: "1J5pOH"
					})
				}
				static getDerivedStateFromProps(e, t) {
					if (!e.currentStream || !e.currentStream.meter) return dt();
					const s = e.currentStream.post.id,
						r = e.currentStream.estimated_remaining_time;
					if (t.streamId !== s) {
						const t = {
							estimatedTimeRemaining: r,
							previouslyVisible: !1,
							visible: !0,
							streamId: s,
							timerPausedAt: null,
							timerDiff: 0,
							timer: r,
							pillLabel: null
						};
						return t.pillLabel = mt.getPillLabel(e, t), t
					}
					const a = {
						timer: t.timer,
						timerDiff: t.timerDiff,
						timerPausedAt: t.timerPausedAt
					};
					if (r > t.estimatedTimeRemaining) {
						const e = t.estimatedTimeRemaining - t.timer,
							s = r - t.estimatedTimeRemaining + e;
						s > ce && (a.timer = r, a.timerDiff = s, a.timerPausedAt = r)
					}
					r !== t.estimatedTimeRemaining && Math.abs(a.timer - r) > de && (a.timer = r, a.timerDiff = r - t.timer, a.timerPausedAt = null), null !== a.timerPausedAt && a.timerPausedAt - a.timer > me && (a.timerDiff = 0, a.timerPausedAt = null);
					const i = mt.getPillLabel(e, a),
						n = mt.isPillVisible(a.timer, e.overlayOpen, a.timerDiff);
					return Object.assign({
						estimatedTimeRemaining: r
					}, a, {
						streamId: s,
						pillLabel: i,
						previouslyVisible: t.visible,
						visible: n
					})
				}
				shouldComponentUpdate(e, t) {
					return !(!t.visible && !this.state.visible) && (t.streamId !== this.state.streamId || (t.visible !== this.state.visible || t.pillLabel !== this.state.pillLabel))
				}
				render() {
					const {
						currentStream: e,
						overlayOpen: t
					} = this.props, {
						visible: s,
						previouslyVisible: r,
						timer: a,
						pillLabel: i
					} = this.state;
					if (!(s && e && e.meter && a)) return null;
					const o = qe(a, e.meter.full_meter_duration),
						c = !r,
						l = a < oe || t,
						m = this.state.timerDiff > 0;
					return n.a.createElement("div", {
						className: et.a.meterOverlay
					}, n.a.createElement("div", {
						className: et.a.meterPillWrapper
					}, m && n.a.createElement(lt, null), n.a.createElement("div", {
						className: Object(d.a)(et.a.meterPillContainer, {
							[et.a.animateMeterInAndOut]: c && !l,
							[et.a.animateMeterInOnly]: c && l,
							[et.a.fillMeterCritical]: o === R.CRITICAL,
							[et.a.fillMeterLow]: o === R.LOW,
							[et.a.fillMeterNormal]: o === R.NORMAL || o === R.EXTENDED,
							[et.a.fillMeterFed]: m
						}),
						onClick: () => this.props.openGildModal()
					}, n.a.createElement("div", {
						className: et.a.meterLabel
					}, i))))
				}
			}
			var ut = mt,
				pt = s("./src/reddit/components/OverflowMenu/index.tsx"),
				ht = s("./src/reddit/controls/Dropdown/Row.tsx"),
				bt = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				vt = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				gt = s.n(vt);
			const {
				fbt: wt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var St = e => {
					let {
						label: t,
						onSelect: s,
						onToggle: r,
						subreddits: a
					} = e;
					return n.a.createElement(pt.b, {
						className: gt.a.overflowMenu,
						dropdownClassName: gt.a.dropdown,
						defaultButtonOutline: !0,
						disabled: a.length < 1,
						dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
						icon: n.a.createElement("div", {
							className: gt.a.overflowMenuIcon
						}, t, n.a.createElement(bt.a, {
							className: gt.a.dropdownTriangle
						})),
						onClick: r
					}, n.a.createElement("div", {
						className: gt.a.dropdownLabel
					}, wt._("Pick a Community", null, {
						hk: "8MoVj"
					})), a.map(e => n.a.createElement(ht.b, {
						className: gt.a.dropdownRow,
						displayText: e.prefixedName,
						iconWrapperClassName: gt.a.overflowItemIconWrapper,
						key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
						onClick: () => s(e)
					})))
				},
				Ct = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				ft = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				_t = s.n(ft);
			class Et extends i.Component {
				constructor(e) {
					super(e), this.setControlBarRef = e => {
						this.controlBarApi = e
					}, this.onToggleMute = e => {
						e.stopPropagation(), this.props.toggleMute()
					}, this.state = {
						settingChange: void 0
					}
				}
				componentDidUpdate(e) {
					const {
						videoCurrentTime: t,
						videoTotalTime: s
					} = this.props;
					this.controlBarApi && (t !== e.videoCurrentTime && this.controlBarApi.setCurrentTime(t), s !== e.videoTotalTime && this.controlBarApi.setTotalTime(s))
				}
				render() {
					const {
						className: e,
						hideControlBar: t,
						isLive: s,
						isMuted: r,
						isPaused: a,
						isVisible: i,
						onPlayPauseToggle: o,
						onVideoPositionUpdate: c,
						seekBarRef: l,
						settingChange: m,
						setVolume: u,
						hideLiveLabel: p,
						videoCurrentTime: h,
						videoTotalTime: b,
						volume: v,
						volumeRef: g
					} = this.props;
					return n.a.createElement(Ct.a, {
						className: Object(d.a)(e, _t.a.scrubberBar, {
							[_t.a.visible]: i
						}),
						currentTime: h || 0,
						hasAudio: !0,
						hideControlBar: !!t,
						hideFullScreenButton: !0,
						hideGradient: !0,
						isFullScreen: !1,
						isListing: !1,
						isLive: s,
						isMuted: r,
						isPaused: a,
						playPauseVideo: o,
						ref: this.setControlBarRef,
						seekBarRef: l,
						settingChange: m,
						setVideoPosition: c,
						setVolume: u,
						hideLiveLabel: p,
						showSettingsIcon: !1,
						showVolumeIcon: !0,
						toggleMute: this.onToggleMute,
						totalTime: b || 0,
						volume: v,
						volumeRef: g
					})
				}
			}
			var xt = Et,
				yt = s("./node_modules/lodash/debounce.js"),
				Ot = s.n(yt),
				Tt = s("./src/lib/prettyPrintNumber/index.ts"),
				Pt = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				It = s("./src/reddit/models/Vote/index.ts"),
				Lt = s("./src/reddit/selectors/user.ts");
			Object(k.a)(L.C);
			const kt = (e, t) => async (s, r, a) => {
				let {
					apiContext: i
				} = a;
				const n = r();
				if (Object(Lt.H)(n))
					if (Object(Q.c)(n)) await Object(Pt.g)(i(), e, t);
					else {
						await Object(p.d)(e);
						const s = Object(se.k)(r(), e);
						null !== s.post.voteState && Object(It.e)(s.post.voteState) === t || await Object(Pt.g)(i(), e, t)
					}
				else s(Object(u.g)())
			};
			var Nt = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				jt = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				Mt = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				At = s.n(Mt);
			const Vt = Object(l.c)({
				currentStream: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(se.k)(e, s)
				}
			});
			class Rt extends n.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(It.a.upvoted), this.downVotes = () => this.calculateVotes(It.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === It.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(It.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = Ot()(() => this.vote(It.a.upvoted), L.Y, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = Ot()(() => this.vote(It.a.downvoted), L.Y, {
						leading: !0,
						trailing: !1
					}), this.state = {
						displayedVoteState: It.a.notVoted
					}, this.onVoteDown = this.onVoteDown.bind(this), this.onVoteUp = this.onVoteUp.bind(this)
				}
				componentDidMount() {
					const e = this.props.currentStream;
					e && e.post.voteState && this.setState(Object.assign({}, this.state, {
						displayedVoteState: Object(It.e)(e.post.voteState)
					}))
				}
				componentDidUpdate(e) {
					const t = this.props.currentStream,
						s = e.currentStream;
					t && (s && s.post.id === t.post.id || this.setState(Object.assign({}, this.state, {
						displayedVoteState: null !== t.post.voteState ? Object(It.e)(t.post.voteState) : It.a.notVoted
					})))
				}
				render() {
					const e = this.props.currentStream;
					if (!e) return null;
					const t = this.props.isLive ? e.continuous_watchers : e.unique_watchers;
					return n.a.createElement("div", {
						className: At.a.statsPanel
					}, n.a.createElement("div", {
						className: At.a.voteContainer
					}, n.a.createElement("button", {
						className: Object(d.a)(At.a.upButton, {
							[At.a.activeVote]: this.isVoteActive(It.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": w.fbt._("Upvote", null, {
							hk: "4ijw7j"
						})
					}, n.a.createElement(jt.a, {
						className: At.a.voteIcon
					})), n.a.createElement("p", {
						className: At.a.votesCounter
					}, Object(Tt.b)(this.upVotes()))), n.a.createElement("div", {
						className: At.a.watchingContainer
					}, n.a.createElement("div", {
						className: At.a.watchingCounter
					}, Object(Tt.b)(t)), n.a.createElement("p", {
						className: At.a.watchingCaption
					}, this.props.isLive ? w.fbt._("Watching", null, {
						hk: "2Fql0m"
					}) : w.fbt._("Views", null, {
						hk: "ixhZU"
					}))), n.a.createElement("div", {
						className: At.a.voteContainer
					}, n.a.createElement("button", {
						className: Object(d.a)(At.a.downButton, {
							[At.a.activeVote]: this.isVoteActive(It.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": w.fbt._("Dpvote", null, {
							hk: "1PcDeu"
						})
					}, n.a.createElement(Nt.a, {
						className: At.a.voteIcon
					})), n.a.createElement("p", {
						className: At.a.votesCounter
					}, Object(Tt.b)(this.downVotes()))))
				}
				vote(e) {
					const t = this.props.currentStream;
					if (t) {
						if (e === this.state.displayedVoteState) return this.props.vote(t.post.id, It.a.notVoted), void this.setState(Object.assign({}, this.state, {
							displayedVoteState: It.a.notVoted
						}));
						this.props.vote(t.post.id, e), this.setState(Object.assign({}, this.state, {
							displayedVoteState: e
						})), e === It.a.upvoted ? this.props.onUpvote() : this.props.onDownvote()
					}
				}
			}
			var Dt = Object(o.b)(Vt, (e, t) => ({
					vote: (t, s) => e(kt(t, s))
				}))(Rt),
				Bt = s("./src/lib/lessComponent.tsx"),
				Ht = s("./src/lib/opener/index.ts"),
				Wt = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				Ut = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Ft = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				Kt = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				Gt = s("./src/reddit/icons/svgs/Report/index.tsx"),
				Yt = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				Xt = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				Jt = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				qt = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				zt = s.n(qt);
			var Zt = e => n.a.createElement("svg", {
					className: Object(d.a)(zt.a.icon, e.className),
					viewBox: "0 0 64 64",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("g", null, n.a.createElement("circle", {
					cx: "32",
					cy: "32",
					r: "30.72",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "2.4576"
				}), n.a.createElement("path", {
					fill: "#fff",
					d: "M42.59 27.9447L35.18 21.5931C34.8212 21.2847 34.3292 21.2175 33.8984 21.4143C33.4676 21.6123 33.2 22.0299 33.2 22.5039V24.7995C29.5004 24.7995 26.5472 26.0031 24.4232 28.3755C21.6128 31.5159 20.4992 36.5271 21.2036 42.8667C21.2372 43.1715 21.4952 43.3995 21.7988 43.3995C21.8108 43.3995 21.8216 43.3995 21.8336 43.3983C22.1504 43.3815 22.4 43.1187 22.4 42.7995C22.4 39.3039 23.5508 36.4155 25.7276 34.4451C27.7148 32.6475 30.4868 31.7307 33.14 31.9971C33.1604 31.9983 33.1796 31.9911 33.2 31.9911V34.2951C33.2 34.7691 33.4676 35.1879 33.8984 35.3859C34.0616 35.4603 34.2332 35.4975 34.4036 35.4975C34.682 35.4975 34.9568 35.3979 35.18 35.2071L42.59 28.8555C42.7232 28.7415 42.8 28.5747 42.8 28.3995C42.8 28.2243 42.7232 28.0587 42.59 27.9447Z"
				}))),
				Qt = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				$t = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				es = s.n($t);
			const ts = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: es.a.shareButton,
						onClick: t,
						"aria-label": w.fbt._("share video", null, {
							hk: "2e71ai"
						}),
						value: "share"
					}, n.a.createElement(Ut.a, {
						className: es.a.menuIcon
					}))
				},
				ss = e => {
					let {
						isMuted: t,
						onToggle: s
					} = e;
					return n.a.createElement("button", {
						className: es.a.muteButton,
						onClick: s,
						"aria-label": w.fbt._("mute video", null, {
							hk: "Enspe"
						}),
						value: "mute"
					}, t ? n.a.createElement(Xt.a, {
						className: es.a.volumeIcon
					}) : n.a.createElement(Qt.a, {
						className: es.a.volumeIcon
					}))
				},
				rs = Bt.a.wrapped(Wt.a, "menuIcon", es.a),
				as = e => {
					let {
						onClick: t,
						onHideClick: s,
						onReportClick: r
					} = e;
					return n.a.createElement(pt.b, {
						className: es.a.menuButton,
						defaultButtonOutline: !0,
						dropdownId: "rpan-overlay-menu",
						icon: n.a.createElement(rs, null),
						onClick: t
					}, n.a.createElement(ht.b, {
						className: es.a.overflowItem,
						displayText: w.fbt._("View rules", null, {
							hk: "4lTvzy"
						}),
						iconWrapperClassName: es.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-rules"),
						onClick: () => Object(Ht.d)(L.Q, Ht.c.BLANK)
					}, n.a.createElement(Yt.a, {
						className: es.a.overflowItemIcon
					})), n.a.createElement(ht.b, {
						className: es.a.overflowItem,
						displayText: w.fbt._("Visit RPAN community", null, {
							hk: "3KZliI"
						}),
						iconWrapperClassName: es.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-community"),
						onClick: () => Object(Ht.d)(L.O, Ht.c.BLANK)
					}, n.a.createElement(Kt.a, {
						className: es.a.overflowItemIcon
					})), n.a.createElement(ht.b, {
						className: es.a.overflowItem,
						displayText: w.fbt._("Report", null, {
							hk: "1TxhL9"
						}),
						iconWrapperClassName: es.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-report"),
						onClick: r
					}, n.a.createElement(Gt.a, {
						className: es.a.overflowItemIcon
					})), n.a.createElement(ht.b, {
						className: es.a.overflowItem,
						displayText: w.fbt._("Hide", null, {
							hk: "1qXTIB"
						}),
						iconWrapperClassName: es.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-hide"),
						onClick: s
					}, n.a.createElement(Ft.a, {
						className: es.a.overflowItemIcon
					})))
				},
				is = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: es.a.promptButton,
						onClick: t
					}, n.a.createElement(Jt.a, null), n.a.createElement("span", null, w.fbt._("Replay Video", null, {
						hk: "1iD2Wj"
					})))
				},
				ns = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: es.a.promptButton,
						onClick: t
					}, n.a.createElement(Zt, null), n.a.createElement("span", null, w.fbt._("Share Video", null, {
						hk: "FYgQy"
					})))
				},
				os = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: "".concat(es.a.promptButton, " ").concat(es.a.awardButton),
						onClick: t
					}, n.a.createElement("span", null, w.fbt._("Award Now", null, {
						hk: "STk0L"
					})))
				};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var cs = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				ls = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				ds = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				ms = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				us = s.n(ms);
			const {
				fbt: ps
			} = s("./node_modules/fbt/lib/FbtPublic.js"), hs = e => {
				let {
					live: t
				} = e;
				return n.a.createElement("div", {
					className: us.a.broadcastStatus
				}, t ? n.a.createElement(bs, null) : n.a.createElement(vs, null))
			}, bs = () => ps._("{=Live}", [ps._param("=Live", n.a.createElement("span", {
				className: us.a.live
			}, ps._("Live", null, {
				hk: "8x90I"
			})))], {
				hk: "3ZBbO0"
			}), vs = () => ps._("Recorded live", null, {
				hk: "2seH5c"
			}), gs = e => {
				let {
					onSubscribe: t,
					isSubscribed: s
				} = e;
				const [r, a] = Object(i.useState)(!1);
				return Object(i.useEffect)(() => {
					const e = setTimeout(() => {
						a(!1)
					}, 3e3);
					return () => clearTimeout(e)
				}, [r]), s ? r ? n.a.createElement(ls.a, {
					className: us.a.checkmarkIcon
				}) : null : n.a.createElement("button", {
					onClick: () => {
						a(!0), t()
					},
					className: us.a.joinButton
				}, n.a.createElement(ds.a, {
					className: us.a.plusIcon
				}), n.a.createElement("span", {
					className: us.a.joinText
				}, ps._("Join", null, {
					hk: "3n0zBz"
				})))
			}, ws = e => {
				let {
					onSelect: t,
					related: s,
					subreddit: r,
					subreddits: a
				} = e, i = "";
				i = "home" === s ? "All" : "r/popular" === s ? "r/popular" : r || "All";
				const o = a.filter(e => e.prefixedName !== i);
				return n.a.createElement(pt.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: n.a.createElement("span", {
						className: us.a.subreddit
					}, r || "RPAN"),
					isFixed: !0
				}, n.a.createElement("div", {
					className: us.a.dropdownLabel
				}, ps._("Pick a Community", null, {
					hk: "4AfDwd"
				})), o.map(e => n.a.createElement(ht.b, {
					className: us.a.dropdownRow,
					displayText: e.prefixedName,
					key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
					onClick: () => t(e)
				})))
			}, Ss = e => {
				let {
					text: t
				} = e;
				return n.a.createElement("h1", {
					className: us.a.title
				}, t)
			}, Cs = e => {
				let {
					broadcast: t,
					live: s
				} = e;
				return n.a.createElement("div", {
					className: us.a.watchersCount
				}, s ? n.a.createElement(fs, {
					count: Math.max(1, t.continuous_watchers)
				}) : n.a.createElement(_s, {
					count: Math.max(1, t.unique_watchers)
				}))
			}, fs = e => {
				let {
					count: t
				} = e;
				return ps._({
					"*": "{number of watchers} watchers",
					_1: "1 watcher"
				}, [ps._plural(t, "number of watchers", Object(Tt.b)(t, !0))], {
					hk: "3F0Nj0"
				})
			}, _s = e => {
				let {
					count: t
				} = e;
				return ps._({
					"*": "{number of views} views",
					_1: "1 view"
				}, [ps._plural(t, "number of views", Object(Tt.b)(t, !0))], {
					hk: "tSTjT"
				})
			}, Es = e => {
				let {
					onClick: t
				} = e;
				return n.a.createElement("button", {
					className: us.a.shareButton,
					onClick: t,
					"aria-label": ps._("Share video", null, {
						hk: "I91IP"
					}),
					value: "share"
				}, n.a.createElement(Ut.a, {
					className: us.a.shareIcon
				}))
			}, xs = Bt.a.wrapped(Wt.a, "menuIcon", us.a), ys = e => {
				let {
					onClick: t,
					onHideClick: s,
					onReportClick: r
				} = e;
				return n.a.createElement(pt.b, {
					className: us.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: "rpan-overlay-menu",
					icon: n.a.createElement(xs, null),
					onClick: t
				}, n.a.createElement(ht.b, {
					className: us.a.overflowItem,
					displayText: ps._("View rules", null, {
						hk: "haY6r"
					}),
					iconWrapperClassName: us.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-rules"),
					onClick: () => Object(Ht.d)(L.Q, Ht.c.BLANK)
				}, n.a.createElement(Yt.a, {
					className: us.a.overflowItemIcon
				})), n.a.createElement(ht.b, {
					className: us.a.overflowItem,
					displayText: ps._("Visit RPAN community", null, {
						hk: "1vVY6o"
					}),
					iconWrapperClassName: us.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-community"),
					onClick: () => Object(Ht.d)(L.O, Ht.c.BLANK)
				}, n.a.createElement(Kt.a, {
					className: us.a.overflowItemIcon
				})), n.a.createElement(ht.b, {
					className: us.a.overflowItem,
					displayText: ps._("Report", null, {
						hk: "3ZxBjz"
					}),
					iconWrapperClassName: us.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-report"),
					onClick: r
				}, n.a.createElement(Gt.a, {
					className: us.a.overflowItemIcon
				})), n.a.createElement(ht.b, {
					className: us.a.overflowItem,
					displayText: ps._("Hide", null, {
						hk: "15vs9C"
					}),
					iconWrapperClassName: us.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-hide"),
					onClick: s
				}, n.a.createElement(Ft.a, {
					className: us.a.overflowItemIcon
				})))
			}, Os = Object(o.b)(null, e => ({
				vote: (t, s) => e(kt(t, s))
			}))(class extends i.Component {
				constructor(e) {
					super(e), this.handleUpVote = () => {
						const e = this.toggleVoteState(It.a.upvoted);
						this.vote(e)
					}, this.handleDownVote = () => {
						const e = this.toggleVoteState(It.a.downvoted);
						this.vote(e)
					}, this.state = {
						voteStates: new Map
					}
				}
				get voteState() {
					return this.state.voteStates.get(this.props.broadcast.post.id)
				}
				get score() {
					const {
						score: e,
						voteState: t
					} = this.props.broadcast.post;
					return null == e ? null : e - Object(It.e)(t) + this.voteState
				}
				componentDidMount() {
					this.setVoteStateFromBroadcastProp()
				}
				componentDidUpdate(e) {
					const {
						id: t
					} = this.props.broadcast.post, s = t !== e.broadcast.post.id, r = this.state.voteStates.has(t);
					s && !r && this.setVoteStateFromBroadcastProp()
				}
				render() {
					const e = this.voteState === It.a.upvoted,
						t = this.voteState === It.a.downvoted;
					return n.a.createElement("div", {
						className: us.a.votePanel
					}, n.a.createElement(Ts, {
						onClick: this.handleUpVote,
						voted: e
					}), null !== this.score ? n.a.createElement(Is, {
						score: this.score
					}) : null, n.a.createElement(Ps, {
						onClick: this.handleDownVote,
						voted: t
					}))
				}
				setVoteStateFromBroadcastProp() {
					const {
						id: e,
						voteState: t
					} = this.props.broadcast.post;
					this.setVoteState(e, Object(It.e)(t))
				}
				setVoteState(e, t) {
					const {
						voteStates: s
					} = this.state;
					if (!s.has(e) || s.get(e) !== t) {
						const r = new Map(s);
						r.set(e, t), this.setState({
							voteStates: r
						})
					}
				}
				toggleVoteState(e) {
					return e === this.voteState ? It.a.notVoted : e
				}
				vote(e) {
					const {
						broadcast: t,
						onUpvote: s,
						onDownvote: r
					} = this.props, {
						id: a
					} = t.post;
					this.setVoteState(a, e), this.props.vote(a, e), e === It.a.upvoted ? s() : e === It.a.downvoted && r()
				}
			}), Ts = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return n.a.createElement("button", {
					className: Object(d.a)(us.a.voteButton, us.a.upVoteButton, {
						[us.a.voted]: s
					}),
					onClick: t,
					value: "upvote",
					"aria-label": ps._("Upvote", null, {
						hk: "Ufd6r"
					})
				}, n.a.createElement(jt.a, {
					className: us.a.voteIcon
				}))
			}, Ps = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return n.a.createElement("button", {
					className: Object(d.a)(us.a.voteButton, us.a.downVoteButton, {
						[us.a.voted]: s
					}),
					onClick: t,
					value: "downvote",
					"aria-label": ps._("Downvote", null, {
						hk: "ZDRA3"
					})
				}, n.a.createElement(Nt.a, {
					className: us.a.voteIcon
				}))
			}, Is = e => {
				let {
					score: t
				} = e;
				return n.a.createElement("div", {
					className: us.a.score
				}, Object(Tt.b)(t))
			}, Ls = e => {
				let {
					children: t
				} = e;
				return n.a.createElement("div", {
					className: us.a.prompt
				}, t)
			}, ks = () => n.a.createElement(Ls, null, ps._("Connection issues", null, {
				hk: "hIrnJ"
			})), Ns = () => n.a.createElement(Ls, null, ps._("Tuning...", null, {
				hk: "3dG7Ks"
			})), js = () => n.a.createElement(Ls, null, ps._("Broadcast paused", null, {
				hk: "jxvku"
			})), Ms = e => {
				let {
					onClickReplay: t,
					onClickShare: s
				} = e;
				return n.a.createElement(Ls, null, n.a.createElement("div", {
					className: us.a.promptButtonSet
				}, n.a.createElement(is, {
					onClick: t
				}), n.a.createElement(ns, {
					onClick: s
				})))
			}, As = e => {
				let {
					onClickAward: t
				} = e;
				return n.a.createElement(Ls, null, n.a.createElement("div", {
					className: us.a.awardPromptWrapper
				}, n.a.createElement("div", {
					className: us.a.awardPromptLabel
				}, ps._("Award this broadcast to give it more airtime", null, {
					hk: "20jmEz"
				})), n.a.createElement(os, {
					onClick: t
				})))
			}, Vs = e => {
				if (!e) return !1;
				const {
					id: t,
					name: s
				} = e;
				return !(!t || !s || "string" != typeof t || "string" != typeof s)
			}, Rs = e => {
				let {
					profile: t
				} = e;
				const {
					name: s
				} = t, r = Fs(s), a = Ks(s, !r), i = r ? ps._("Unfollow u/{name}", [ps._param("name", s)], {
					hk: "2n0wqa"
				}) : ps._("Follow u/{name}", [ps._param("name", s)], {
					hk: "20X8Bw"
				});
				return n.a.createElement("button", {
					className: us.a.subscribeToProfileButton,
					onClick: a,
					title: i
				}, n.a.createElement(Ds, {
					profile: t
				}), n.a.createElement(Bs, {
					isSubscribed: r
				}))
			}, Ds = e => {
				let {
					profile: t
				} = e;
				const {
					id: s,
					name: r
				} = t, a = Object(o.d)(e => Object(Lt.eb)(e, {
					userName: r
				})), i = Us(a);
				return n.a.createElement("div", {
					className: us.a.subscribeToProfileAvatar
				}, a ? i ? n.a.createElement("img", {
					src: a.accountIcon
				}) : n.a.createElement(cs.a, {
					userId: s
				}) : null)
			}, Bs = e => {
				let {
					isSubscribed: t
				} = e;
				return n.a.createElement("div", {
					className: Object(d.a)(us.a.subscribeToProfileStatus, {
						[us.a.isSubscribed]: t
					})
				}, t ? n.a.createElement(Hs, null) : n.a.createElement(Ws, null))
			}, Hs = () => n.a.createElement("svg", {
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17.7072 5.69337L16.3083 4.29337C16.1203 4.10537 15.8662 4.00037 15.6012 4.00037C15.3352 4.00037 15.0812 4.10537 14.8942 4.29337L7.90025 11.2864L5.10725 8.49337C4.71725 8.10237 4.08425 8.10237 3.69325 8.49337L2.29325 9.89337C1.90225 10.2844 1.90225 10.9174 2.29325 11.3074L7.19325 16.2074C7.38925 16.4024 7.64425 16.5004 7.90025 16.5004C8.15625 16.5004 8.41225 16.4024 8.60725 16.2074L17.7072 7.10737C18.0982 6.71637 18.0982 6.08437 17.7072 5.69337"
			})), Ws = () => n.a.createElement("svg", {
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M12.8,6.4 L9.6,6.4 L9.6,3.2 C9.6,2.7576 9.2424,2.4 8.8,2.4 L7.2,2.4 C6.7576,2.4 6.4,2.7576 6.4,3.2 L6.4,6.4 L3.2,6.4 C2.7584,6.4 2.4,6.7576 2.4,7.2 L2.4,8.8 C2.4,9.2424 2.7584,9.6 3.2,9.6 L6.4,9.6 L6.4,12.8 C6.4,13.2424 6.7576,13.6 7.2,13.6 L8.8,13.6 C9.2424,13.6 9.6,13.2424 9.6,12.8 L9.6,9.6 L12.8,9.6 C13.2424,9.6 13.6,9.2424 13.6,8.8 L13.6,7.2 C13.6,6.7576 13.2424,6.4 12.8,6.4"
			})), Us = e => {
				const t = Object(o.d)(Lt.i),
					s = Object(o.d)(Lt.z),
					r = Object(o.d)(Lt.V);
				return !!e && (!!e.accountIcon && (!!t && (t.id === e.id || (!e.isNSFW || !!r && !s))))
			}, Fs = e => Object(o.d)(t => Object(Ce.bb)(t, {
				identifier: {
					name: e,
					type: ge.a.PROFILE
				}
			})), Ks = (e, t) => {
				const s = Object(o.c)();
				return Object(i.useCallback)(() => s(Object(be.d)([{
					name: e,
					type: ge.a.PROFILE
				}], t)), [s, e, t])
			};
			var Gs = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				Ys = s.n(Gs);
			const {
				fbt: Xs
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Js = (e, t) => {
				let {
					currentStreamId: s
				} = t;
				return s ? Object(se.k)(e, s) : void 0
			}, qs = Object(l.c)({
				currentStream: Js,
				inGoldRpanLivePreview: Se.a,
				inStreamingSubredditIntegration: Q.b,
				inStreamingUiRefreshViewer: Q.c,
				inViewerFeedTheMeter: (e, t) => Object(Q.d)(e, t, Js),
				isApiError: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(te.c)(e, s)
				},
				isBatchApiError: te.e,
				isBatchPending: te.f,
				isConfigError: te.g,
				isIntroInProgress: re.b,
				isMenuOpened: e => "rpan-overlay-menu" === e.tooltipId || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltipId,
				lastBatchApiRequestTs: te.i,
				recommendedViewerSubredditOptions: te.j,
				isUserSubscriber: (e, t) => {
					let {
						subreddit: s
					} = t;
					const r = s && s.split("/").pop();
					return !!r && Object(Ce.bb)(e, {
						identifier: {
							name: r,
							type: ge.a.SUBREDDIT
						}
					}, !0)
				}
			});
			class zs extends i.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.hoverTimeout = window.setTimeout(() => this.setState({
							isHovered: !0
						}), L.o)
					}, this.onMouseLeave = () => {
						window.clearTimeout(this.hoverTimeout), this.setState({
							isHovered: !1,
							settingChange: void 0
						})
					}, this.onMouseDown = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						s && s.container && s.container.contains(e.target) && (this.setState({
							settingChange: ve.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: ve.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === ve.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === ve.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === ve.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === ve.a.Volume && s && s.handleMouseUp(e), this.setState({
							settingChange: void 0
						})
					}, this.onMouseHoverScrubber = e => {
						const {
							target: t,
							currentTarget: s
						} = e;
						if (!(t instanceof Element && s instanceof Element)) return;
						const r = this.isHoveringVolumeControl(t, s);
						r !== this.state.isHoveringVolumeControl && this.setState({
							isHoveringVolumeControl: r
						})
					}, this.onMouseLeaveScrubber = () => {
						this.setState({
							isHoveringVolumeControl: !1
						})
					}, this.isVisible = () => this.state.isHovered || this.props.isVisible || this.props.isMenuOpened, this.onCopyLink = () => {
						const {
							copyLink: e,
							currentStream: t,
							onShareVideo: s
						} = this.props;
						t && (e("".concat(g.a.redditUrl).concat(t.share_link)), s())
					}, this.state = {
						isHovered: !1,
						isHoveringVolumeControl: !1,
						settingChange: void 0
					}
				}
				componentWillUnmount() {
					window.clearTimeout(this.hoverTimeout)
				}
				render() {
					return this.props.inStreamingUiRefreshViewer ? this.renderUiRefresh() : this.renderUiLegacy()
				}
				renderUiLegacy() {
					const {
						currentStream: e,
						inGoldRpanLivePreview: t,
						inStreamingSubredditIntegration: s,
						isIntroInProgress: r,
						isLive: a,
						isUnavailable: i,
						onHide: o,
						onReport: c,
						onToggleMenu: l,
						onUpvote: m,
						onDownvote: u
					} = this.props, p = e && e.post.id;
					return n.a.createElement("div", {
						className: Object(d.a)(es.a.overlay, {
							[es.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !r && n.a.createElement("div", {
						className: es.a.overlayTop
					}, s && this.renderRecommendedViewerSubreddit(), e && !i && n.a.createElement(n.a.Fragment, null, !s && this.renderTitleContainer(), n.a.createElement(ts, {
						onClick: this.onCopyLink
					}), n.a.createElement(as, {
						onClick: l,
						onHideClick: o,
						onReportClick: c
					}))), t && e && !r && !i && !!p && n.a.createElement(Je, {
						className: es.a.awardOverlaySpectacle,
						commentsPageKey: Object(ue.a)(p)
					}), s && e && !r && !i && n.a.createElement("div", {
						className: es.a.overlayTitle
					}, this.renderTitleContainer()), n.a.createElement("div", {
						className: es.a.overlayCenter
					}, this.getContent()), e && !r && !i && n.a.createElement("div", {
						className: es.a.overlayBottom
					}, n.a.createElement(Dt, {
						currentStreamId: e.post.id,
						isLive: a,
						onUpvote: m,
						onDownvote: u
					}), this.renderScrubber()))
				}
				renderUiRefresh() {
					const {
						currentStream: e,
						inGoldRpanLivePreview: t,
						inViewerFeedTheMeter: s,
						isIntroInProgress: r,
						isLive: a,
						isUnavailable: i,
						onHide: o,
						onReport: c,
						onSelectSubreddit: l,
						onSubscribeSubreddit: m,
						onToggleMenu: u,
						recommendedViewerSubredditOptions: p,
						related: h,
						subreddit: b,
						isUserSubscriber: v
					} = this.props;
					if (r || !e || i) return null;
					const g = e && e.post.id,
						{
							authorInfo: w
						} = e.post;
					return n.a.createElement("div", {
						className: Object(d.a)(us.a.overlay, {
							[us.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, t && e && !r && !i && !!g && n.a.createElement(Je, {
						className: es.a.awardOverlaySpectacle,
						commentsPageKey: Object(ue.a)(g)
					}), s && n.a.createElement(ut, {
						currentStream: e,
						overlayOpen: this.isVisible(),
						openGildModal: () => this.props.handleGiveAward()
					}), this.renderPrompt(), n.a.createElement("div", {
						className: us.a.overlayTop
					}, n.a.createElement("div", {
						className: us.a.overlayTopLeft
					}, n.a.createElement("div", {
						className: us.a.meta
					}, n.a.createElement(hs, {
						live: a
					}), n.a.createElement(Ss, {
						text: e.post.title
					}), n.a.createElement("div", {
						className: us.a.subredditInfo
					}, n.a.createElement(ws, {
						onSelect: l,
						related: h,
						subreddit: b,
						subreddits: p
					}), n.a.createElement(gs, {
						onSubscribe: m,
						isSubscribed: v
					})), n.a.createElement(Cs, {
						broadcast: e,
						live: a
					}))), n.a.createElement("div", {
						className: us.a.overlayTopRight
					}, Vs(w) ? n.a.createElement(Rs, {
						profile: w
					}) : null, n.a.createElement(ys, {
						onClick: u,
						onHideClick: o,
						onReportClick: c
					}), n.a.createElement(Es, {
						onClick: this.onCopyLink
					}), n.a.createElement("div", {
						className: Object(d.a)({
							[us.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, n.a.createElement(Os, {
						broadcast: e,
						onUpvote: this.props.onUpvote,
						onDownvote: this.props.onDownvote
					})))), n.a.createElement("div", {
						className: us.a.overlayBottom,
						onMouseEnter: this.onMouseHoverScrubber,
						onMouseLeave: this.onMouseLeaveScrubber,
						onMouseMove: this.onMouseHoverScrubber
					}, this.renderScrubber()))
				}
				renderScrubber() {
					const {
						inStreamingUiRefreshViewer: e,
						isLive: t,
						isMuted: s,
						isPaused: r,
						onPlayPauseToggle: a,
						onVideoPositionUpdate: i,
						setVolume: o,
						toggleMute: c,
						videoCurrentTime: l,
						videoTotalTime: d,
						volume: m
					} = this.props, u = e ? us.a.controls : "", p = e || this.isVisible();
					return n.a.createElement("div", {
						className: u
					}, n.a.createElement(xt, {
						isLive: t,
						isMuted: s,
						isPaused: r,
						isVisible: p,
						onPlayPauseToggle: a,
						onVideoPositionUpdate: i,
						seekBarRef: e => this.seekBar = e,
						settingChange: this.state.settingChange,
						setVolume: o,
						hideLiveLabel: e,
						toggleMute: c,
						videoCurrentTime: l,
						videoTotalTime: d,
						volume: m,
						volumeRef: e => this.volumeControl = e
					}))
				}
				renderPrompt() {
					const {
						currentStream: e,
						currentStreamId: t,
						handleGiveAward: s,
						isApiError: r,
						isBatchApiError: a,
						isBatchPending: i,
						isConfigError: o,
						isIntroInProgress: c,
						isLoading: l,
						isMuted: d,
						isUnavailable: m,
						inViewerFeedTheMeter: u,
						lastBatchApiRequestTs: p,
						onReplayVideo: h,
						showErrorPrompt: b,
						showStreamEndedPrompt: v,
						toggleMute: g
					} = this.props;
					if (b || c && o || t && r || !t && a) return n.a.createElement(ks, null);
					if (c) return n.a.createElement("div", {
						className: es.a.intro
					}, n.a.createElement(ss, {
						isMuted: d,
						onToggle: g
					}));
					if (m || !t && !a && !i && p) return null;
					if (l) return n.a.createElement(Ns, null);
					if (e && e.stream.state === we.b.DISCONNECTED) return n.a.createElement(js, null);
					if (v) return n.a.createElement(Ms, {
						onClickReplay: h,
						onClickShare: this.onCopyLink
					});
					const w = e && e.meter && e.estimated_remaining_time < ie;
					return u && w ? n.a.createElement(As, {
						onClickAward: s
					}) : null
				}
				renderRecommendedViewerSubreddit() {
					const {
						onSelectSubreddit: e,
						recommendedViewerSubredditOptions: t,
						related: s,
						subreddit: r
					} = this.props;
					let a = "",
						i = "";
					"home" === s ? (a = "All", i = "All") : "r/popular" === s ? (a = "Popular", i = "r/popular") : r ? (a = r.replace(/^r\//, ""), i = r) : (a = "All", i = "All");
					const o = t.filter(e => e.prefixedName !== i);
					return n.a.createElement("div", {
						className: es.a.menuContainer
					}, n.a.createElement(St, {
						label: a,
						onSelect: e,
						subreddits: o
					}))
				}
				renderTitleContainer() {
					const {
						currentStream: e,
						isLive: t
					} = this.props;
					if (e) return n.a.createElement("div", {
						className: es.a.titleContainer
					}, n.a.createElement("h1", {
						className: es.a.videoTitle
					}, e.post.title), !t && n.a.createElement("div", {
						className: es.a.RecordedLabel
					}, Xs._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(Ys.a.ControlVolume)) return !0;
						e = e.parentElement
					}
					return !1
				}
				getContent() {
					const {
						currentStream: e,
						currentStreamId: t,
						isApiError: s,
						isBatchApiError: r,
						isBatchPending: a,
						isConfigError: i,
						isIntroInProgress: o,
						isLoading: c,
						isMuted: l,
						isUnavailable: d,
						lastBatchApiRequestTs: m,
						onReplayVideo: u,
						showErrorPrompt: p,
						showStreamEndedPrompt: h,
						toggleMute: b
					} = this.props;
					return p || o && i || t && s || !t && r ? n.a.createElement("div", {
						className: es.a.prompt
					}, Xs._("Connection issues", null, {
						hk: "24LpRV"
					})) : o ? n.a.createElement("div", {
						className: es.a.intro
					}, n.a.createElement(ss, {
						isMuted: l,
						onToggle: b
					})) : d || !t && !r && !a && m ? null : c ? n.a.createElement("div", {
						className: es.a.prompt
					}, Xs._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === we.b.DISCONNECTED ? n.a.createElement("div", {
						className: es.a.prompt
					}, Xs._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : h ? n.a.createElement("div", {
						className: es.a.prompt
					}, n.a.createElement("div", {
						className: es.a.promptButtonSet
					}, n.a.createElement(is, {
						onClick: u
					}), n.a.createElement(ns, {
						onClick: this.onCopyLink
					}))) : null
				}
			}
			var Zs = Object(o.b)(qs, (e, t) => ({
				copyLink: t => e(Object(he.F)(t)),
				onHide: () => {
					t.currentStreamId && (e(Object(he.Z)(t.currentStreamId, !0, !0, !0)), e(M(t.currentStreamId)))
				},
				handleGiveAward: () => {
					t.currentStreamId && e(Object(pe.d)({
						thingId: t.currentStreamId
					}))
				},
				onSubscribeSubreddit: () => {
					const s = t.subreddit && t.subreddit.split("/").pop();
					s && e(Object(be.d)([{
						name: s,
						type: ge.a.SUBREDDIT
					}], !0))
				}
			}))(zs);
			Object(k.a)(L.r);
			const Qs = Object(k.a)(L.z),
				$s = (e, t) => async (s, r) => {
					const a = r(),
						i = Date.now(),
						n = e.map(e => Object(se.k)(a, e)).filter(Boolean).map(e => ({
							imageUrl: "".concat(e.stream.thumbnail, "?").concat(i),
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await er(n, t)
				}, er = (e, t) => Promise.all(e.map(e => tr(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), tr = e => new Promise((t, s) => {
					const r = new Image;
					r.onload = () => t(), r.onerror = () => s(), r.src = e
				}).then(() => !0, () => !1);
			var sr = s("./src/reddit/components/PublicAccessNetwork/Theater/StaticScreen/index.m.less"),
				rr = s.n(sr);
			const ar = Object(l.c)({
				isIntroInProgress: re.b,
				previewUrl: (e, t) => {
					let {
						currentStream: s
					} = t;
					return s ? Object(se.i)(e, {
						streamId: s.post.id
					}) : void 0
				}
			});
			class ir extends i.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: r
					} = this.props, a = [];
					e && a.push(e.post.id), s && a.push(s.post.id), r && a.push(r.post.id), a.length > 0 && t(a)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: r,
						previousStream: a
					} = this.props, i = [];
					t && this.isStreamChanged(t, e.currentStream) && i.push(t.post.id), a && this.isStreamChanged(a, e.previousStream) && i.push(a.post.id), s && this.isStreamChanged(s, e.nextStream) && i.push(s.post.id), i.length > 0 && r(i)
				}
				render() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						previewUrl: s
					} = this.props, r = e && e.meter && e.estimated_remaining_time < oe || !s, a = !r && !t && s;
					return n.a.createElement("div", {
						className: rr.a.staticContainer
					}, r && n.a.createElement("div", {
						className: rr.a.tvNoise,
						"aria-label": w.fbt._("video static", null, {
							hk: "3FA8fk"
						})
					}), a && n.a.createElement("div", {
						className: rr.a.previewContainer,
						"aria-label": w.fbt._("preview of video", null, {
							hk: "4piisq"
						}),
						style: {
							backgroundImage: "url(".concat(s, ")")
						}
					}))
				}
				isStreamChanged(e, t) {
					return !!e && (t && e.post.id !== t.post.id || !t)
				}
			}
			var nr = Object(o.b)(ar, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, r) => {
						const a = await s($s(e, t));
						s(Qs(a))
					})(t))
				}))(ir),
				or = s("./src/lib/constants/index.ts"),
				cr = s("./src/lib/makeDraftKey/index.ts"),
				lr = s("./src/reddit/actions/page.ts"),
				dr = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				mr = s("./src/reddit/components/CommentsChat/Loader.ts"),
				ur = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				pr = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				hr = s("./src/reddit/components/GildModal/Loader.tsx"),
				br = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/selectors/posts.ts")),
				vr = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less"),
				gr = s.n(vr);
			const wr = Object(o.b)(() => Object(l.c)({
					allAwards: e => e.awards.models,
					post: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(br.O)(e, {
							postId: s
						})
					}
				})),
				Sr = ["Center", "Left", "Right"],
				Cr = ["Low", "Mid", "High"],
				fr = () => Math.floor(800 * Math.random()),
				_r = e => e[Math.floor(Math.random() * e.length)],
				Er = e => {
					const t = _r(Sr),
						s = _r(Cr),
						r = xe(e);
					return gr.a["award_".concat(r, "Tier_").concat(s).concat(t)]
				};
			class xr extends i.Component {
				shouldComponentUpdate(e) {
					return !(!e.post || !e.post.awardCountsById) && (!(this.props.post && this.props.post.awardCountsById) || this.props.post.id !== e.post.id)
				}
				render() {
					const {
						allAwards: e,
						post: t
					} = this.props;
					if (!t || !t.awardCountsById) return null;
					const s = Object.entries(t.awardCountsById).map(t => {
							let [s, r] = t;
							const {
								icon: a,
								coinPrice: i
							} = e[s];
							return {
								coinPrice: i,
								count: r,
								iconUrl: a.url,
								id: s
							}
						}).sort((e, t) => t.coinPrice - e.coinPrice),
						r = [];
					return s.forEach(e => {
						const {
							coinPrice: t,
							count: s,
							iconUrl: a
						} = e;
						for (let i = 0; i < s; i++) {
							const s = "".concat(fr(), "ms"),
								o = Er(t),
								c = n.a.createElement("img", {
									key: "".concat(e.id, "-").concat(i),
									className: Object(d.a)(gr.a.award, o),
									src: a,
									style: {
										animationDelay: s
									}
								});
							r.push(c)
						}
					}), n.a.createElement("div", {
						"aria-role": "presentation",
						className: gr.a.awardBubbler
					}, r)
				}
			}
			var yr = wr(xr),
				Or = s("./src/reddit/models/PostDraft/index.ts"),
				Tr = s("./src/reddit/selectors/gild.ts"),
				Pr = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				Ir = s.n(Pr);
			const Lr = Object(l.c)({
				gildModalIsOpen: (e, t) => {
					let {
						postId: s
					} = t;
					const r = Object(pr.b)(s);
					return Object(Tr.c)(e, r)
				},
				isDisabled: (e, t) => Object(se.e)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: Lt.H,
				isPostDataLoaded: (e, t) => {
					let {
						postId: s
					} = t;
					return !!Object(br.O)(e, {
						postId: s
					})
				},
				language: Lt.Q,
				replyComment: (e, t) => {
					let {
						postId: s
					} = t;
					return Object(fe.t)(e, {
						commentsPageKey: Object(ue.a)(s)
					})
				}
			});
			class kr extends i.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					this.props.postId && this.props.loadComments()
				}
				componentDidUpdate(e) {
					this.props.postId !== e.postId && this.props.loadComments()
				}
				render() {
					const {
						postId: e,
						gildModalIsOpen: t,
						isDisabled: s,
						isLoggedIn: r,
						isPostDataLoaded: a,
						language: i,
						location: o,
						openLoginModal: c,
						openRegisterModal: l,
						sendEvent: m,
						subredditId: u,
						replyComment: p
					} = this.props, h = Object(ue.a)(e), b = p ? Object(cr.a)(Or.c.replyToComment, p.id) : Object(cr.a)(Or.c.replyToPost, e);
					return s ? n.a.createElement("div", {
						className: Object(d.a)(Ir.a.streamingChat, Ir.a.prompt)
					}, w.fbt._("Chat has been disabled", null, {
						hk: "3139v6"
					})) : a ? n.a.createElement("div", {
						"aria-label": w.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: Ir.a.streamingChat,
						onClick: this.props.onChatClick
					}, n.a.createElement(mr.a, {
						className: Ir.a.chatScroller,
						emptyStateClassName: Ir.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: u,
						commentsPageKey: h
					}), r && n.a.createElement(ur.a, {
						key: "chatCommentsForm",
						language: i,
						postId: e,
						replyComment: p,
						draftKey: b,
						commentsPageKey: h,
						isEditing: !1,
						sendEvent: m,
						isLivestreaming: !0
					}), n.a.createElement(yr, {
						postId: e
					}), !r && n.a.createElement(dr.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						language: i,
						location: o,
						openLoginModal: c,
						openRegisterModal: l,
						origin
					}), t && n.a.createElement(hr.a, null)) : n.a.createElement("div", {
						className: Object(d.a)(Ir.a.streamingChat, Ir.a.prompt)
					}, w.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var Nr = Object(o.b)(Lr, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						loadComments: () => e(Object(lr.q)(s, void 0, {
							sort: or.q.CHAT
						}, or.q.CHAT)),
						openLoginModal: () => e(Object(u.g)()),
						openRegisterModal: () => e(Object(u.h)())
					}
				})(kr),
				jr = e => n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
				})),
				Mr = e => n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				Ar = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				Vr = s.n(Ar);
			const Rr = e => {
				let {
					isNext: t,
					onClick: s,
					stream: r
				} = e;
				return n.a.createElement("div", {
					className: Object(d.a)(Vr.a.switchContainer, t ? Vr.a.switchContainerNext : Vr.a.switchContainerPrevious)
				}, n.a.createElement("button", {
					className: Vr.a.switchButton,
					disabled: !r,
					onClick: s,
					"aria-label": t ? w.fbt._("Forward arrow", null, {
						hk: "3b7sZa"
					}) : w.fbt._("Back arrow", null, {
						hk: "1upGBK"
					}),
					value: t ? "forward" : "back"
				}, n.a.createElement("div", {
					className: Vr.a.streamThumbnail,
					style: r ? {
						backgroundImage: "url(".concat(r.stream.thumbnail, ")")
					} : {}
				}), t ? n.a.createElement(Mr, {
					className: Vr.a.arrowIcon
				}) : n.a.createElement(jr, {
					className: Vr.a.arrowIcon
				})))
			};
			var Dr = e => n.a.createElement(n.a.Fragment, null, n.a.createElement(Rr, {
					isNext: !1,
					onClick: e.onPrevious,
					stream: e.previousStream
				}), n.a.createElement(Rr, {
					isNext: !0,
					onClick: e.onNext,
					stream: e.nextStream
				})),
				Br = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				Hr = s.n(Br);
			const Wr = Object(x.a)(U.a, {
					playerName: "RPAN Video Player"
				}),
				Ur = Object(l.c)({
					currentStream: se.c,
					currentStreamStartTime: se.d,
					currentHlsUrl: se.b,
					inStreamingSubredditIntegration: Q.b,
					inViewerFeedTheMeter: (e, t) => Object(Q.d)(e, t, se.c),
					isIntroInProgress: re.b,
					isMuted: e => e.publicAccessNetwork.userSettings.isMuted,
					isOverlayOpen: ee.h,
					isReportFlowOpen: (e, t) => {
						let {
							streamIdFromPath: s
						} = t;
						return e.reportFlow.postOrCommentId === Object(J.g)(s || "")
					},
					lastChatActivityUtcTs: re.c,
					nextStream: se.f,
					nextTopStream: se.g,
					playbackState: se.h,
					previousStream: se.j,
					unavailableVideoUrl: te.o,
					volume: $.b
				}),
				Fr = Object(o.b)(Ur, (e, t) => ({
					closeLocation: () => e(Object(c.b)(t.location.state[G.a.CloseLocation])),
					fetchBroadcasterProfileInfo: t => e(Object(P.d)(t, !0)),
					fetchPostForStream: t => e(Object(I.a)(t)),
					subscribeConfig: () => e(D.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(D.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(D.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: t => e(Object(W.j)(t, void 0, !0)),
					onStatsSubscribe: t => e(D.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(D.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(p.a)(t)),
					receiveHlsStreamRemoved: t => e(Object(p.b)(t)),
					removeStreamFromHistory: t => e(M(t)),
					setNewCorrelationId: () => e(Object(B.b)()),
					setIntroFinishedStatus: t => e(Object(B.c)({
						isIntroFinished: t
					})),
					setMuteSettings: t => e(Object(H.b)({
						isMuted: t
					})),
					setVideoVolume: t => e(T.e(t)),
					updateVideoTimestamp: (t, s) => e(V({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(j(e))
					})(t)),
					resetHistory: () => e(A())
				}));
			class Kr extends i.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = n.a.createRef(), this.onHlsRefChange = e => {
						this.hlsVideoApi = e
					}, this.onCurrentTimeChanged = e => {
						this.onCurrentTimeChangedThrottled(e), this.state.videoCurrentTime !== e && this.setState({
							videoCurrentTime: e
						})
					}, this.onCurrentTimeChangedThrottled = C()(e => {
						const {
							currentStream: t,
							isIntroInProgress: s,
							updateVideoTimestamp: r
						} = this.props;
						!s && t && this.isCurrentStreamWatchable() && r(t.post.id, e)
					}, L.p), this.onVideoPlayerPositionUpdate = e => {
						this.state.videoCurrentTime !== e && (this.props.sendEvent(Object(q.o)(this.props.currentStream, Object.assign({}, this.getPlaybackStats(), {
							scrubbingStartMs: this.convertToMs(this.state.videoCurrentTime),
							scrubbingEndMs: this.convertToMs(e)
						}))), this.setState({
							videoCurrentTime: e
						}), this.hlsVideoApi && this.hlsVideoApi.setCurrentTime(e))
					}, this.onNextStream = C()(() => {
						const {
							nextStream: e
						} = this.props;
						e && this.goToStream(e)
					}, L.q, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = C()(() => {
						const {
							previousStream: e
						} = this.props;
						e && this.goToStream(e)
					}, L.q, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(X.g)(e.target) ? e.stopPropagation() : e.keyCode === Y.a.ArrowRight ? this.onNextStream() : e.keyCode === Y.a.ArrowLeft && this.onPreviousStream()
					}, this.onPlayPauseToggle = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.isVideoPaused ? this.playVideo() : this.pauseVideo()
					}, this.onToggleMuteVideo = () => {
						this.setVideoMute(!this.props.isMuted)
					}, this.onSetVolume = (e, t) => {
						const s = this.hlsVideoApi;
						s && (t ? 0 !== e ? this.props.setVideoVolume(e) : this.props.setMuteSettings(!0) : (s.setVolume(e), e || this.props.isMuted ? e && this.props.isMuted && this.setVideoMute(!1) : this.setVideoMute(!0)))
					}, this.onReplayVideo = () => {
						this.cancelSwitchingOnStreamEnded(), this.replayVideo()
					}, this.onScrubbing = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.showStreamEndedPrompt && this.playVideo()
					}, this.onShareVideo = () => {
						this.props.currentStream && this.props.sendEvent(Object(q.j)(this.props.currentStream, this.getPlaybackStats())), this.cancelSwitchingOnStreamEnded()
					}, this.onToggleMenu = () => {
						this.cancelSwitchingOnStreamEnded()
					}, this.getSessionDurationTimer = e => "session-duration-".concat(e), this.getWatchDurationTimer = e => "watch-duration-".concat(e), this.setVideoMute = e => {
						this.props.setMuteSettings(e);
						const t = this.hlsVideoApi;
						if (!t) return;
						const s = e ? q.n : q.u;
						e || t.setVolume(this.props.volume), this.props.sendEvent(s(this.props.currentStream, this.getPlaybackStats()))
					}, this.goToSubreddit = e => {
						this.props.sendEvent(Object(q.l)(e, this.props.currentStream)), this.props.onNavigation(e.path)
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === se.a.LIVE || this.props.playbackState === se.a.VOD, this.state = {
						isUnavailableVideoJustFinished: !1,
						isVodStreamJustFinished: !1,
						isError: !1,
						isLoading: !0,
						isOverlayVisible: !1,
						isSwitchingOnStreamEndedScheduled: !1,
						isVideoPaused: !1,
						showStreamEndedPrompt: !1,
						videoCurrentTime: 0,
						videoTotalTime: 0,
						wasVideoPausedWhenOverlayOpened: !1,
						id: 0,
						sessionDuration: 0,
						watchDuration: 0,
						heartbeatDurationOffset: 0,
						startTime: 0
					}, this.previouslyActiveElement = null, this.onAutoPlayPrevented = this.onAutoPlayPrevented.bind(this), this.onClose = this.onClose.bind(this), this.onEnded = this.onEnded.bind(this), this.onNextStream = this.onNextStream.bind(this), this.onPlayerError = this.onPlayerError.bind(this), this.onPreviousStream = this.onPreviousStream.bind(this), this.onReport = this.onReport.bind(this), this.onVideoPlayerLevelLoaded = this.onVideoPlayerLevelLoaded.bind(this), this.onVideoPlayerLoadedData = this.onVideoPlayerLoadedData.bind(this), this.onSendHeartbeat = this.onSendHeartbeat.bind(this), this.onVideoPlayerLoadingData = this.onVideoPlayerLoadingData.bind(this), this.onChatClick = this.onChatClick.bind(this), this.onUpvote = this.onUpvote.bind(this), this.onDownvote = this.onDownvote.bind(this), this.onVideoPlayerResourceRemoved = this.onVideoPlayerResourceRemoved.bind(this), this.scheduleSwitchingOnStreamEnded = this.scheduleSwitchingOnStreamEnded.bind(this)
				}
				componentDidMount() {
					const e = this.focusRef.current;
					e.classList.add(Hr.a.focusVisible), Object(O.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, y(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.inStreamingSubredditIntegration && this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(z.o)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream()
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						isIntroInProgress: s,
						isOverlay: r,
						isOverlayOpen: a,
						isReportFlowOpen: i,
						onHeartbeatSubscribe: n,
						onRecommendedViewerSubredditsSubscribe: o,
						onStatsSubscribe: c,
						playbackState: l,
						related: d,
						subreddit: m,
						subscribeConfig: u,
						subscribeStreams: p
					} = this.props;
					r || a === e.isOverlayOpen || (a ? (this.setState(e => {
						let {
							isVideoPaused: t
						} = e;
						return {
							wasVideoPausedWhenOverlayOpened: t,
							isVideoPaused: !0
						}
					}), this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits()) : (this.setState(e => {
						let {
							wasVideoPausedWhenOverlayOpened: t
						} = e;
						return {
							isVideoPaused: t
						}
					}), u().then(e => this.unsubscribeConfig = e), p().then(e => this.unsubscribeStreams = e), t && this.isCurrentStreamWatchable() && (n(t.post.id).then(e => this.unsubscribeHeartbeat = e), c(t.post.id).then(e => this.unsubscribeStats = e)), o().then(e => this.unsubscribeRecommendedViewerSubreddits = e)));
					const h = e.related || e.subreddit,
						b = d || m;
					if (e.currentStream && this.props.currentStream && e.currentStream.post.id !== this.props.currentStream.post.id && this.handleOldStream(), b !== h) return this.props.resetHistory(), this.handleNewStream(), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), void(t || this.setState({
						isLoading: !0
					}));
					!s && e.isIntroInProgress && this.handleNewStream(), s || e.isIntroInProgress || !Yr(t, e.currentStream) || this.handleNewStream(), this.state.isSwitchingOnStreamEndedScheduled || s || !(!t && !this.state.isLoading || l === se.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), s || t || this.state.isLoading || this.state.isError || this.setState(Object.assign({}, this.state, {
						isError: !0
					})), i && this.state.isVideoPaused && this.setState({
						isVideoPaused: !0
					})
				}
				componentWillUnmount() {
					window.clearTimeout(this.overlayVisibilityTimeout), window.clearTimeout(this.consumePostTimeout), window.clearTimeout(this.switchingOnStreamEndedTimeout), this.handleOldStream(), this.onCurrentTimeChangedThrottled.cancel(), document.removeEventListener("keydown", this.onNextStreamKeyHandler), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits(), this.unsubscribeConfig(), this.unsubscribeStreams(), this.props.resetHistory(), this.props.isOverlay && setTimeout(() => y(this.previouslyActiveElement))
				}
				render() {
					const {
						currentStream: e,
						currentStreamStartTime: t,
						currentHlsUrl: s,
						inViewerFeedTheMeter: r,
						isIntroInProgress: a,
						isMuted: i,
						isOverlay: o,
						isReportFlowOpen: c,
						location: l,
						nextStream: m,
						playbackState: u,
						previousStream: p,
						related: h,
						sendEvent: b,
						subreddit: v,
						unavailableVideoUrl: g,
						volume: w
					} = this.props, {
						videoCurrentTime: S,
						videoTotalTime: C
					} = this.state, f = e && e.post.id, _ = s !== g, E = e && !e.post.subreddit, x = u === se.a.LIVE;
					let y, O, T, P;
					e && _ ? (y = 1e3 * e.broadcast_time, O = f, T = x, P = e.post.title) : (y = void 0, O = void 0, T = !1, P = "RPAN Unavailable Video");
					const I = e && e.meter && 10 * Math.round(e.estimated_remaining_time / 10),
						L = r && e && e.estimated_remaining_time < ne && !a,
						k = void 0 !== I && I >= 0 && L ? Hr.a["meterCritical".concat(I)] : void 0;
					return n.a.createElement("div", {
						className: Object(d.a)(Hr.a.theaterContainer, {
							[Hr.a.overlay]: o
						}),
						ref: this.focusRef,
						tabIndex: -1
					}, n.a.createElement("div", {
						className: Object(d.a)(Hr.a.panesWrapper, {
							[Hr.a.initialized]: !a
						})
					}, n.a.createElement("div", {
						className: Object(d.a)(Hr.a.pane, Hr.a.leftPane)
					}, n.a.createElement("div", {
						className: Hr.a.videoContainer
					}, (this.state.isLoading || this.state.isError || L) && n.a.createElement(nr, {
						previousStream: p,
						currentStream: e,
						nextStream: m
					}), s && n.a.createElement("div", {
						className: k
					}, n.a.createElement(Wr, {
						autoplay: !0,
						controls: !1,
						startTime: t,
						isPaused: this.state.isVideoPaused,
						muted: i,
						muxVideoDuration: y,
						muxVideoId: O,
						muxVideoIsLive: T,
						muxVideoTitle: P,
						onAutoPlayPrevented: this.onAutoPlayPrevented,
						onEnded: this.onEnded,
						onError: this.onPlayerError,
						onLevelLoaded: this.onVideoPlayerLevelLoaded,
						onLoadedData: this.onVideoPlayerLoadedData,
						onLoadingData: this.onVideoPlayerLoadingData,
						onResourceRemoved: this.onVideoPlayerResourceRemoved,
						onTimeUpdate: this.onCurrentTimeChanged,
						playMutedOnPrevented: !0,
						ref: this.onHlsRefChange,
						url: s
					})), n.a.createElement(Zs, {
						currentStreamId: f,
						isLoading: this.state.isLoading,
						isLive: x,
						isMuted: i,
						isPaused: this.state.isVideoPaused,
						isUnavailable: u === se.a.UNAVAILABLE,
						isVisible: this.state.isOverlayVisible,
						onReplayVideo: this.onReplayVideo,
						onShareVideo: this.onShareVideo,
						onPlayPauseToggle: this.onPlayPauseToggle,
						onReport: this.onReport,
						onScrubbing: this.onScrubbing,
						onSelectSubreddit: this.goToSubreddit,
						onToggleMenu: this.onToggleMenu,
						onUpvote: this.onUpvote,
						onDownvote: this.onDownvote,
						onVideoPositionUpdate: this.onVideoPlayerPositionUpdate,
						related: h,
						sendEvent: b,
						setVolume: this.onSetVolume,
						showErrorPrompt: this.state.isError,
						showStreamEndedPrompt: this.state.showStreamEndedPrompt,
						subreddit: v,
						toggleMute: this.onToggleMuteVideo,
						videoCurrentTime: S,
						videoTotalTime: C,
						volume: w
					}))), !a && n.a.createElement("div", {
						className: Object(d.a)(Hr.a.pane, Hr.a.rightPane)
					}, e && !E && n.a.createElement(Nr, {
						location: l,
						onChatClick: this.onChatClick,
						postId: e.post.id,
						sendEvent: b,
						subredditId: e.post.subreddit.id
					}))), e && !a && n.a.createElement(Dr, {
						nextStream: m,
						onNext: this.onNextStream,
						onPrevious: this.onPreviousStream,
						previousStream: p
					}), e && !a && o && n.a.createElement(Gr, {
						onClick: this.onClose
					}), e && !a && c && n.a.createElement(F.a, {
						useLiveStreamingFlow: !0,
						overlayCustomStyles: F.b,
						postId: e.post.id,
						timestamp: Math.trunc(S),
						withOverlay: !0
					}))
				}
				onVideoPlayerLevelLoaded(e) {
					const {
						currentStream: t,
						playbackState: s,
						receiveHlsStreamEnded: r
					} = this.props;
					this.state.videoTotalTime !== e.totalduration && this.setState({
						videoTotalTime: e.totalduration
					}), t && !e.live && 0 !== e.endSN && s === se.a.LIVE && r(t.post.id)
				}
				onVideoPlayerLoadingData() {
					this.setState({
						isLoading: !0,
						isError: !1
					})
				}
				onSendHeartbeat() {
					this.props.sendEvent(Object(q.q)(this.props.currentStream, this.getPlaybackStats())), this.setState({
						heartbeatDurationOffset: this.getWatchDuration()
					})
				}
				startTimers() {
					this.startWatch(), f.c.start(this.getSessionDurationTimer(this.state.id)), this.fiveSecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 5e3), this.fifteenSecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 15e3), this.thirtySecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 3e4), this.fortyfiveSecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 45e3), this.minuteSessionTimer = window.setInterval(this.onSendHeartbeat, 6e4)
				}
				onVideoPlayerLoadedData() {
					this.setState({
						isLoading: !1,
						isError: !1,
						startTime: Date.now(),
						watchDuration: 0,
						heartbeatDurationOffset: 0,
						sessionDuration: 0,
						id: E()()
					}, () => {
						this.props.currentStream && (this.props.sendEvent(Object(q.t)(this.props.currentStream, this.getPlaybackStats())), this.startTimers())
					})
				}
				onVideoPlayerResourceRemoved() {
					const {
						currentStream: e,
						receiveHlsStreamRemoved: t
					} = this.props;
					e && this.isCurrentStreamWatchable() && t(e.post.id)
				}
				onChatClick() {
					this.props.currentStream && this.props.sendEvent(Object(q.g)(this.props.currentStream, this.getPlaybackStats()))
				}
				onUpvote() {
					this.props.currentStream && this.props.sendEvent(Object(q.k)(this.props.currentStream, this.getPlaybackStats()))
				}
				onDownvote() {
					this.props.currentStream && this.props.sendEvent(Object(q.h)(this.props.currentStream, this.getPlaybackStats()))
				}
				onEnded() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						playbackState: s,
						sendEvent: r,
						setIntroFinishedStatus: a
					} = this.props;
					if (this.pauseWatch(), this.setState({
							isVideoPaused: !0
						}), t) return a(!0), void this.setState(Object.assign({}, this.state, {
						isLoading: !!e
					}));
					e && r(Object(q.r)(e, this.getPlaybackStats())), s !== se.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(q.s)(this.props.currentStream, this.getPlaybackStats())), this.setState(Object.assign({}, this.state, {
						isError: !0
					}))
				}
				onAutoPlayPrevented() {
					this.props.setMuteSettings(!0)
				}
				onClose() {
					this.props.sendEvent(Object(q.a)(this.props.currentStream, this.getPlaybackStats())), this.props.isOverlay && this.props.closeLocation()
				}
				onReport() {
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id), this.props.sendEvent(Object(q.i)(this.props.currentStream)))
				}
				hideStreamEndedPrompt() {
					this.state.showStreamEndedPrompt && this.setState({
						isOverlayVisible: !1,
						showStreamEndedPrompt: !1
					})
				}
				showStreamEndedPrompt() {
					this.state.showStreamEndedPrompt || this.setState({
						isOverlayVisible: !0,
						showStreamEndedPrompt: !0
					})
				}
				getSessionDuration() {
					const e = this.getSessionDurationTimer(this.state.id);
					return f.c.has(e) ? f.c.getTime(e) : 0
				}
				endTimers() {
					f.c.end(this.getWatchDurationTimer(this.state.id)), f.c.end(this.getSessionDurationTimer(this.state.id)), clearTimeout(this.fiveSecondSessionTimer), clearTimeout(this.fifteenSecondSessionTimer), clearTimeout(this.thirtySecondSessionTimer), clearTimeout(this.fortyfiveSecondSessionTimer), clearTimeout(this.minuteSessionTimer), this.fiveSecondSessionTimer = 0, this.fifteenSecondSessionTimer = 0, this.thirtySecondSessionTimer = 0, this.fortyfiveSecondSessionTimer = 0, this.minuteSessionTimer = 0
				}
				getWatchDuration() {
					let e = 0;
					const t = this.getWatchDurationTimer(this.state.id);
					return f.c.has(t) && (e = f.c.getTime(t)), e + this.state.watchDuration
				}
				pauseWatch() {
					const e = this.getWatchDuration(),
						t = this.getWatchDurationTimer(this.state.id);
					return f.c.end(t), this.setState({
						watchDuration: e
					}), e
				}
				startWatch() {
					f.c.start(this.getWatchDurationTimer(this.state.id))
				}
				convertToMs(e) {
					return Math.round(1e3 * e)
				}
				getVolume() {
					if (this.props.isMuted) return 0;
					const e = Math.log10(this.props.volume) / 2 + 1;
					return Math.round(100 * e)
				}
				getPlaybackStats() {
					return {
						id: this.state.id,
						volume: this.getVolume(),
						timestampMs: this.convertToMs(this.state.videoCurrentTime),
						watchDurationMs: this.getWatchDuration(),
						sessionDurationMs: this.getSessionDuration(),
						startTimeMs: this.state.startTime,
						playheadOffsetMs: this.convertToMs(this.state.videoTotalTime - this.state.videoCurrentTime),
						heartbeatDurationMs: this.getWatchDuration() - this.state.heartbeatDurationOffset
					}
				}
				pauseVideo() {
					if (this.state.isVideoPaused) return;
					const e = this.pauseWatch();
					this.setState({
						watchDuration: e
					}, () => {
						this.props.sendEvent(Object(q.b)(this.props.currentStream, this.getPlaybackStats()))
					}), this.setState({
						isVideoPaused: !0
					})
				}
				playVideo() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
						sendEvent: !0
					};
					this.state.isVideoPaused && (this.startWatch(), e.sendEvent && this.props.sendEvent(Object(q.c)(this.props.currentStream, this.getPlaybackStats())), this.hideStreamEndedPrompt(), this.setState({
						isVideoPaused: !1
					}))
				}
				replayVideo() {
					this.props.sendEvent(Object(q.d)(this.props.currentStream, this.getPlaybackStats())), this.onVideoPlayerPositionUpdate(0), this.playVideo({
						sendEvent: !1
					})
				}
				scheduleSwitchingOnStreamEnded() {
					this.cancelSwitchingOnStreamEnded(), this.switchingOnStreamEndedTimeout = window.setTimeout(() => {
						const {
							isReportFlowOpen: e,
							lastChatActivityUtcTs: t,
							nextTopStream: s
						} = this.props;
						s && !e && !Object(re.a)(t) && this.state.isSwitchingOnStreamEndedScheduled ? this.goToStream(s) : this.cancelSwitchingOnStreamEnded()
					}, L.k), this.setState(Object.assign({}, this.state, {
						isSwitchingOnStreamEndedScheduled: !0
					}))
				}
				cancelSwitchingOnStreamEnded() {
					window.clearTimeout(this.switchingOnStreamEndedTimeout), this.state.isSwitchingOnStreamEndedScheduled && this.setState({
						isSwitchingOnStreamEndedScheduled: !1
					})
				}
				getStreamLocation(e) {
					const {
						inStreamingSubredditIntegration: t,
						related: s
					} = this.props;
					if (t) {
						const t = Object(J.c)(e),
							r = s ? "?related=".concat(s) : "";
						return "".concat(t).concat(r)
					}
					return Object(J.e)(e.post.id)
				}
				goToStream(e) {
					const {
						onNavigation: t,
						visitStream: s
					} = this.props, r = e.post.id;
					this.cancelSwitchingOnStreamEnded(), this.hideStreamEndedPrompt(), s(r), this.setState({
						isLoading: !0,
						isVideoPaused: !1
					}), t(this.getStreamLocation(e))
				}
				handleOldStream() {
					this.props.sendEvent(Object(q.q)(this.props.currentStream, this.getPlaybackStats())), this.endTimers()
				}
				async handleNewStream() {
					const {
						currentStream: e,
						fetchBroadcasterProfileInfo: t,
						fetchPostForStream: s,
						visitStream: r
					} = this.props;
					e && (this.setState({
						videoCurrentTime: 0,
						videoTotalTime: 0,
						watchDuration: 0
					}), r(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), s(e.post.id), e.post.authorInfo && e.post.authorInfo.name && t(e.post.authorInfo.name), this.syncLocationWithCurrentStreamId(), this.props.sendEvent(Object(q.v)(e)), this.setConsumePostTimeout(), this.showOverlayAfterStreamSwitching())
				}
				setConsumePostTimeout() {
					window.clearTimeout(this.consumePostTimeout), this.consumePostTimeout = window.setTimeout(() => this.props.sendEvent(Object(q.m)(this.props.currentStream)), g.a.telemetry.postConsumedThreshold)
				}
				showOverlayAfterStreamSwitching() {
					window.clearTimeout(this.overlayVisibilityTimeout), this.overlayVisibilityTimeout = window.setTimeout(() => this.setState({
						isOverlayVisible: !1
					}), L.n), this.setState({
						isOverlayVisible: !0
					})
				}
				syncLocationWithCurrentStreamId() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						onNavigation: s,
						streamIdFromPath: r
					} = this.props;
					if (!e || t) return;
					const a = !r || Object(J.a)(e.post.id) === r;
					s(this.getStreamLocation(e), a)
				}
				startJobIfLiveOrPaused() {
					const {
						currentStream: e,
						onStatsSubscribe: t,
						onHeartbeatSubscribe: s
					} = this.props;
					e && this.isCurrentStreamWatchable() && (t(e.post.id).then(e => this.unsubscribeStats = e), s(e.post.id).then(e => this.unsubscribeHeartbeat = e))
				}
			}
			const Gr = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: Hr.a.closeButton,
						onClick: t,
						"aria-label": w.fbt._("close button", null, {
							hk: "2l5YIS"
						})
					}, n.a.createElement(Z.a, {
						className: Hr.a.closeIcon
					}))
				},
				Yr = (e, t) => (e && e.post.id) !== (t && t.post.id);
			var Xr = Fr(Object(K.c)(Kr)),
				Jr = s("./src/reddit/contexts/InsideOverlay.tsx"),
				qr = s("./src/reddit/helpers/overlay/index.ts"),
				zr = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				Zr = s.n(zr);
			const {
				fbt: Qr
			} = s("./node_modules/fbt/lib/FbtPublic.js"), $r = Object(l.c)({
				isEnabled: Q.a,
				isIntroInProgress: re.b,
				isOnboardingModal: e => e.publicAccessNetwork.userSettings.shouldShowOnboardingModal && !0,
				related: (e, t) => {
					let {
						location: s,
						match: r
					} = t;
					const i = a()([...Object(m.a)(s.search)]).related,
						{
							subredditName: n
						} = r.params;
					return "home" === i || "r/popular" === i ? i : "popular" === n ? "r/popular" : n ? void 0 : "home"
				}
			}), ea = Object(o.b)($r, (e, t) => ({
				onOpenLoginModal: () => e(Object(u.g)()),
				onStreamByIdRequested: t => e(Object(p.d)(t)),
				updateLocation: (t, s) => {
					let {
						isOverlay: r,
						useReplace: a
					} = s;
					const i = a ? c.c : c.b,
						n = r ? Object(qr.b)(t) : t;
					e(i(n))
				}
			}));
			class ta extends n.a.Component {
				constructor(e) {
					super(e), this.onNavigation = this.onNavigation.bind(this)
				}
				componentDidMount() {
					const {
						match: e,
						onStreamByIdRequested: t,
						isEnabled: s
					} = this.props;
					s && e.params.partialPostId && t(e.params.partialPostId)
				}
				shouldUpdateLocation(e) {
					return e.replace(/[?].*/, "") !== this.props.match.url
				}
				onNavigation(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					if (!this.shouldUpdateLocation(e)) return;
					const {
						isOverlay: s,
						updateLocation: r
					} = this.props;
					r(e, {
						isOverlay: s,
						useReplace: t
					})
				}
				render() {
					const {
						isEnabled: e,
						isIntroInProgress: t,
						isOnboardingModal: s,
						isOverlay: r,
						location: a,
						match: i,
						related: o
					} = this.props, {
						subredditName: c,
						partialPostId: l
					} = i.params;
					return e ? n.a.createElement("div", {
						className: Object(d.a)(Zr.a.rpanContainer, {
							[Zr.a.overlay]: r
						})
					}, n.a.createElement(Xr, {
						isOverlay: !!r,
						location: a,
						onNavigation: this.onNavigation,
						related: o,
						streamIdFromPath: l,
						subreddit: c && "r/".concat(c)
					}), s && !t && n.a.createElement(v, null)) : n.a.createElement(sa, null)
				}
			}
			const sa = () => n.a.createElement("div", {
				className: Object(d.a)(Zr.a.rpanContainer, Zr.a.forbiddenScreen)
			}, n.a.createElement("h2", null, Qr._("Not Found", null, {
				hk: "2ijDv5"
			})));
			t.default = ea(Object(K.c)(Object(Jr.b)(ta)))
		}
	}
]);
//# sourceMappingURL=PublicAccessNetwork.981b5cfbc499a15c8127.js.map