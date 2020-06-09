// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.99f491a91c69e1c16c01.js
// Retrieved at 6/9/2020, 1:10:11 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PublicAccessNetwork"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var a;
			a = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function a(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var r, n = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						o = /nexus\s*[0-6]\s*/i.test(t),
						c = !o && /nexus\s*[0-9]+/i.test(t),
						l = /CrOS/.test(t),
						d = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						v = !n && !d && /macintosh/i.test(t),
						g = !i && !m && !u && !p && /linux/i.test(t),
						w = a(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						C = s(/version\/(\d+(\.\d+)?)/i),
						S = /tablet/i.test(t) && !/tablet pc/i.test(t),
						f = !S && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: C || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || C
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: C || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: C || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: C || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : h ? (r = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, w ? (r.msedge = e, r.version = w) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : l ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: w
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || C
					} : m ? r = {
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
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (r.firefoxos = e, r.osname = "Firefox OS")) : d ? r = {
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
						version: C || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: C || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || C
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || C
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || C
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? r = {
						name: "Android",
						version: C
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, C && (r.version = C)) : n ? (r = {
						name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
					}, C && (r.version = C)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || C
					} : {
						name: s(/^(.*)\/(.*) /),
						version: a(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && C && (r.version = C)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !i && !r.silk ? !r.windowsphone && n ? (r[n] = e, r.ios = e, r.osname = "iOS") : v ? (r.mac = e, r.osname = "macOS") : _ ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : g && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var E = "";
					r.windows ? E = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? E = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? E = (E = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : n ? E = (E = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? E = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? E = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? E = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? E = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (E = s(/tizen[\/\s](\d+(\.\d+)*)/i)), E && (r.osversion = E);
					var x = !r.windows && E.split(".")[0];
					return S || c || "ipad" == n || i && (3 == x || x >= 4 && !f) || r.silk ? r.tablet = e : (f || "iphone" == n || "ipod" == n || i || o || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function a(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var s, a = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) a.push(t(e[s]));
					return a
				}

				function n(e) {
					for (var t = Math.max(a(e[0]), a(e[1])), s = r(e, (function(e) {
							var s = t - a(e);
							return r((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, a, r) {
					var i = s;
					"string" == typeof a && (r = a, a = void 0), void 0 === a && (a = !1), r && (i = t(r));
					var o = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return n([o, e[c]]) < 0
						} return a
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var a = e[t];
						if ("string" == typeof a && a in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = n, s.check = function(e, t, s) {
					return !i(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = a() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", a)
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseClamp.js"),
				r = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = r(s)) == s ? s : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), a(r(e), t, s)
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
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/cache/localStorage/index.ts"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(c.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				d = s("./src/reddit/constants/experiments.ts"),
				m = s("./src/reddit/helpers/chooseVariant/index.ts");
			const u = Object(i.a)(e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: d.Bb
				});
				return Object(d.xc)(t) ? void 0 : t
			}, e => {
				const t = Object(m.c)(e, {
					experimentEligibilitySelector: m.a,
					experimentName: d.Cb
				});
				return Object(d.xc)(t) ? void 0 : t
			}, (e, t) => e === d.Db.Enabled && t === d.Db.Enabled);
			var p = s("./src/config.ts");
			var h = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const b = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						a = new Uint32Array(e);
					return crypto.getRandomValues(a), Array.from(a).map(e => t.charAt(e % s)).join("")
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
			const C = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					a = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(a)).map(g).join("")
			})(w.SHA1, e);

			function S() {
				return (S = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var f = function(e, t) {
				var s = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (s[a[r]] = e[a[r]])
				}
				return s
			};
			const _ = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				E = Object({
					SENTRY_RELEASE_VERSION: "8bdb63b-production"
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
					viewerUserIdLength: I
				} = Object.assign({}, x, t);
				class L extends a.Component {
					constructor() {
						super(...arguments), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(a.createRef)(), this.handleDashCreate = e => {
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
							a = f(t, ["forwardedRef"]);
						return r.a.createElement(e, S({}, a, {
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
						const e = this.props.redditUserId || L.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = v(),
							a = "".concat(s).concat(e).concat(t);
						return (await C(a)).substr(0, L.VIEWER_USER_ID_LENGTH)
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
							debug: L.DEBUG,
							disableCookies: L.DISABLE_COOKIES,
							respectDoNotTrack: L.RESPECT_DO_NOT_TRACK
						}, s, {
							data: Object.assign({
								env_key: L.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: L.PLAYER_NAME,
								player_version: L.PLAYER_VERSION
							}, t, {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = L.LOCAL_STORAGE_SALT_KEY;
						let t = Object(o.a)(e);
						return t || (t = b(L.SALT_LENGTH), Object(o.b)(e, t, L.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return Object.assign({}, this.getDashInstanceData(), this.getHlsInstanceData())
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: a
						} = this.props;
						return {
							video_duration: s ? L.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? L.STREAM_TYPE_LIVE : L.STREAM_TYPE_ON_DEMAND,
							video_title: a
						}
					}
				}
				L.displayName = _(e), L.ANONYMOUS_USER_ID = s, L.DEBUG = c, L.DISABLE_COOKIES = d, L.DURATION_LIVE = 1 / 0, L.ENV_KEY = m, L.LOCAL_STORAGE_SALT_KEY = p, L.LOCAL_STORAGE_VIEWER_USER_ID_KEY = g, L.PLAYER_NAME = w, L.PLAYER_VERSION = E, L.RESPECT_DO_NOT_TRACK = y, L.SALT_LENGTH = O, L.SALT_TIME_TO_LIVE = T, L.STREAM_TYPE_LIVE = "live", L.STREAM_TYPE_ON_DEMAND = "on-demand", L.VIEWER_USER_ID_LENGTH = I;
				const P = Object(a.forwardRef)((e, t) => r.a.createElement(L, S({}, e, {
						forwardedRef: t
					}))),
					k = Object(i.c)({
						redditUserId: h.g,
						isMuxEnabled: u
					});
				return Object(n.b)(k, null, null, {
					forwardRef: !0
				})(P)
			}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var a = s("./src/config.ts"),
				r = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const n = Object(r.e)(e),
					i = encodeURIComponent("".concat(t).concat(n));
				return "".concat(a.a.accountManagerOrigin).concat(s || "/login", "?dest=").concat(i)
			}
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return l
			})), s.d(t, "b", (function() {
				return d
			}));
			var a = s("./node_modules/uuid/v4.js"),
				r = s.n(a),
				n = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const o = Object(n.a)(i.A),
				c = e => async t => {
					t(o(e))
				}, l = () => async e => {
					e(o({
						lastChatActivityUtcTs: Date.now()
					}))
				}, d = () => async e => {
					e(o({
						correlationId: r()()
					}))
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
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/isSimpleClick/index.ts"),
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
					location: a,
					openLoginModal: o,
					openRegisterModal: l,
					origin: d,
					sendEvent: u
				} = e;
				return r.a.createElement(b, {
					className: Object(n.a)(t, {
						[p.a.LiveStreamingWrapper]: s
					})
				}, r.a.createElement(v, {
					className: Object(n.a)({
						[p.a.LiveStreamingCopy]: s
					})
				}, h._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), r.a.createElement(w, {
					href: Object(c.a)(a, d, "/login"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), o(), u(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("log in", null, {
					hk: "37jFXB"
				})), r.a.createElement(g, {
					className: Object(n.a)({
						[p.a.LiveStreamingSignupLink]: s
					}),
					href: Object(c.a)(a, d, "/register"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), l(), u(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("sign up", null, {
					hk: "2GqETx"
				})))
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.replace.js");
			var a = s("./src/config.ts"),
				r = s("./node_modules/lodash/memoize.js"),
				n = s.n(r),
				i = s("./node_modules/react/index.js"),
				o = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				d = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				u = s.n(m);
			const p = l.a.div("Userpic", u.a);
			t.a = n()(e => {
				const {
					userId: t
				} = e, {
					processingAvatarImageUrl: s
				} = a.a, r = (e => e.replace(c.wb.Account + "_", ""))(t), {
					avatar: n,
					color: i
				} = (e => {
					const t = d.length,
						s = parseInt(e, 36),
						a = s % 20 + 1,
						r = Math.floor(s / 20) % t;
					return {
						avatar: ("0" + a).slice(-2),
						color: d[r]
					}
				})(r), l = "".concat(s, "/avatar_default_").concat(n, "_").concat(i, ".png");
				return o.a.createElement(p, {
					style: {
						backgroundImage: "url(".concat(l, ")"),
						backgroundColor: "#".concat(i)
					}
				})
			})
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3SwKz63oDhqTWK_aG-xnXF",
				Userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				userpic: "_1c_u99Y2cLg7hhjeq50Op6",
				TrashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				trashIcon: "_2xUH_6ZFDwVzDXthdBMEyN",
				ProfileIcon: "_2OVsvDCTt2OzgIct4dAykk",
				profileIcon: "_2OVsvDCTt2OzgIct4dAykk"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				o = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				l = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				d = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				m = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				u = s.n(m);
			const p = o.a.img("Userpic", u.a),
				h = Object(i.c)({
					account: e => e.user.account
				}),
				b = Object(n.b)(h);
			t.a = o.a.wrapped(b(e => {
				let {
					account: t,
					className: s,
					height: a,
					isLivestreaming: n,
					trash: i,
					userId: o,
					width: m
				} = e;
				const h = n ? 36 : 20,
					b = {
						height: a || h,
						width: m || h,
						minWidth: m || h
					};
				return i ? r.a.createElement("div", {
					className: s,
					style: b
				}, r.a.createElement(d.a, {
					className: u.a.TrashIcon
				})) : o ? r.a.createElement("div", {
					className: s,
					style: b
				}, t && t.accountIcon && t.id === o ? r.a.createElement(p, {
					src: t.accountIcon,
					alt: "user icon"
				}) : r.a.createElement(c.a, {
					userId: o
				})) : r.a.createElement("div", {
					className: s,
					style: b
				}, t && t.accountIcon ? r.a.createElement(p, {
					src: t.accountIcon,
					alt: "user icon"
				}) : r.a.createElement(l.a, {
					className: u.a.ProfileIcon
				}))
			}), "ChatIcon", u.a)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(a.a)({
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
			t.a = r
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
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				o = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				l = s.n(c);
			const d = i.a.div("LoaderWrapper", l.a),
				m = i.a.div("Icon", l.a),
				u = i.a.div("Byline", l.a),
				p = Object(n.a)({
					ErrorComponent: () => r.a.createElement(d, null, r.a.createElement(m, null), r.a.createElement(u, null)),
					getComponent: () => Object(o.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : r.a.createElement(d, null, r.a.createElement(m, null), r.a.createElement(u, null))
					}
				});
			t.a = e => r.a.createElement(p, e)
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const n = Object(a.a)({
				getComponent: () => Object(r.a)(() => Promise.all([s.e("CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceReleaseNotesModal~InFeedChaining~~9f4422c2"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~be557eac"), s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = n
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
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				i = s("./node_modules/react-redux/es/index.js"),
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
				C = Object(m.a)(w),
				S = l.a.button("MenuButton", g.a),
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
				x = Object(i.b)(E, (e, t) => {
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
			t.b = x(e => n.a.createElement(S, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": a.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(c.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: y(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : n.a.createElement(f, null), n.a.createElement(C, {
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
				return n
			}));
			var a = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/loadWithRetries/index.ts");
			const n = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				i = () => null;
			t.a = Object(a.a)({
				ErrorComponent: i,
				getComponent: () => Object(r.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var a = s("./node_modules/lodash/throttle.js"),
				r = s.n(a),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
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
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var g = function(e, t) {
				var s = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (s[a[r]] = e[a[r]])
				}
				return s
			};
			class w extends i.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = r()(() => {
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
					return e.href ? i.a.createElement(c.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && i.a.createElement("span", {
						className: s
					}, e.children), i.a.createElement("span", {
						className: Object(o.a)(b.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(m.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: r()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(o.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && i.a.createElement(d.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && i.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = g(e, ["className"]);
				const a = Object(o.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !s.noHover,
					[b.a.mIsSelected]: s.isSelected,
					[b.a.topics]: s.isTopicsStyle
				});
				return i.a.createElement(w, v({
					className: a
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
			var a = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/controls/InternalLink/index.tsx"),
				n = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = s.n(n);
			t.a = a.a.wrapped(r.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp",
				dropdownTriangle: "_28O0gzb6GMS8lbDeySdpwp"
			}
		},
		"./src/reddit/icons/fonts/DropdownTriangle/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				o = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(n.b)("dropdownTriangle"), " ").concat(e.className)
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
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				o = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => r.a.createElement("i", {
				className: "".concat(Object(n.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", o.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				o = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(o);
			t.a = e => r.a.createElement("i", {
				className: Object(n.a)(Object(i.b)("share"), c.a.shareIcon, e.className)
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
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement("g", null, r.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		},
		"./src/reddit/icons/svgs/Rules/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

			function n(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M10 0L11.4142 8.58579L20 10L11.4142 11.4142L10 20L8.58579 11.4142L0 10L8.58579 8.58579L10 0Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

			function n(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
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
				return n
			}));
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);

			function n(e) {
				return r.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
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
			var a = s("./node_modules/lodash/fromPairs.js"),
				r = s.n(a),
				n = s("./node_modules/react/index.js"),
				i = s.n(n),
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
				C = s("./node_modules/lodash/throttle.js"),
				S = s.n(C),
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
				I = s("./src/reddit/actions/profile/index.ts"),
				L = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				P = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				k = s("./src/lib/makeActionCreator/index.ts");
			const N = Object(k.a)(P.D),
				j = Object(k.a)(P.X),
				M = e => async t => {
					t(N(e))
				}, A = Object(k.a)(P.N), V = Object(k.a)(P.T);
			var D, R = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				B = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				F = s("./src/reddit/actions/reportFlow.ts"),
				H = s("./src/reddit/components/HlsVideo/index.tsx"),
				U = s("./src/reddit/components/ReportFlow/index.tsx"),
				W = s("./src/reddit/components/TrackingHelper/index.tsx"),
				K = s("./src/reddit/constants/history.ts"),
				G = s("./src/reddit/constants/keycodes.ts"),
				Y = s("./src/reddit/helpers/dom/index.ts"),
				X = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				J = s("./src/reddit/helpers/trackers/rpan.ts"),
				q = s("./src/reddit/helpers/trackers/screenview.ts"),
				z = s("./src/reddit/icons/svgs/Close/index.tsx"),
				Z = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Q = s("./src/reddit/selectors/media.ts"),
				$ = s("./src/reddit/selectors/platform.ts"),
				ee = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				te = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				se = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			! function(e) {
				e[e.CRITICAL = 0] = "CRITICAL", e[e.LOW = 1] = "LOW", e[e.NORMAL = 2] = "NORMAL", e[e.EXTENDED = 3] = "EXTENDED"
			}(D || (D = {}));
			const ae = 60,
				re = 30,
				ne = 3 * ae,
				ie = 5 * ae,
				oe = 5,
				ce = 5 * ae,
				le = 10,
				de = 5;
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var me = s("./src/lib/makeCommentsPageKey/index.ts"),
				ue = s("./src/reddit/actions/gold/modals.ts"),
				pe = s("./src/reddit/actions/post.ts"),
				he = s("./src/reddit/actions/subscription/index.ts"),
				be = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				ve = s("./src/reddit/constants/posts.ts"),
				ge = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				we = s("./src/reddit/selectors/experiments/goldRpanLivePreview.ts"),
				Ce = s("./src/reddit/selectors/subreddit.ts"),
				Se = s("./src/reddit/selectors/comments.ts"),
				fe = s("./src/reddit/selectors/communityAwards.ts"),
				_e = s("./src/reddit/models/Gold/Award.ts");
			var Ee = e => e < 500 || !e ? _e.e.Silver : e < 1800 ? _e.e.Gold : _e.e.Platinum,
				xe = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				ye = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less"),
				Oe = s.n(ye);
			const {
				fbt: Te
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Ie(e) {
				const {
					awardName: t,
					giverName: s,
					giverId: a,
					tier: r,
					className: n
				} = e, o = r === _e.e.Silver ? Oe.a.silverTierAttribution : r === _e.e.Gold ? Oe.a.goldTierAttribution : Oe.a.platinumTierAttribution;
				return i.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(d.a)(n, Oe.a.tierAttribution, o)
				}, r !== _e.e.Silver && i.a.createElement(xe.a, {
					className: Oe.a.giverIcon,
					userId: a,
					width: 16,
					height: 16
				}), i.a.createElement("span", null, r !== _e.e.Silver && Te._("{giverName} gave {space}", [Te._param("giverName", s), Te._param("space", " ")], {
					hk: "SzDdi"
				}), i.a.createElement("strong", {
					className: Oe.a.awardName
				}, t)))
			}
			var Le = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Pe = s("./src/reddit/icons/svgs/Star/index.tsx"),
				ke = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				Ne = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less"),
				je = s.n(Ne);

			function Me(e) {
				const {
					iconUrl: t,
					tier: s,
					className: a
				} = e, r = s === _e.e.Silver ? je.a.silverTierAwardIcon : s === _e.e.Gold ? je.a.goldTierAwardIcon : je.a.platinumTierAwardIcon, n = s !== _e.e.Silver, o = s === _e.e.Platinum;
				return i.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(d.a)(a, je.a.tierAwardIcon)
				}, i.a.createElement("div", {
					className: je.a.awardIconContainer
				}, n && i.a.createElement(i.a.Fragment, null, i.a.createElement(Pe.a, {
					className: Object(d.a)(je.a.backgroundAnimation, je.a.backgroundStar)
				}), i.a.createElement(ke.a, {
					className: Object(d.a)(je.a.backgroundAnimation, je.a.backgroundStar, je.a.backgroundStar2)
				})), i.a.createElement("img", {
					src: t,
					className: r
				}), o && i.a.createElement(i.a.Fragment, null, i.a.createElement(Le.a, {
					className: Object(d.a)(je.a.backgroundAnimation, je.a.backgroundSparkle, je.a.sparkleBottomLeft)
				}), i.a.createElement(Le.a, {
					className: Object(d.a)(je.a.backgroundAnimation, je.a.backgroundSparkle, je.a.sparkleTopRight)
				}), i.a.createElement(Le.a, {
					className: Object(d.a)(je.a.backgroundAnimation, je.a.backgroundSparkle, je.a.sparkleBottomRight)
				}))))
			}
			var Ae = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less"),
				Ve = s.n(Ae);

			function De(e) {
				const {
					award: t,
					className: s,
					giverId: a,
					giverName: r
				} = e, n = Ee(t.coinPrice), o = t.icon128 ? t.icon128.url : t.icon.url;
				return i.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(d.a)(s, Ve.a.container)
				}, i.a.createElement(Me, {
					iconUrl: o,
					tier: n,
					className: Ve.a.awardIconAnimation
				}), i.a.createElement(Ie, {
					awardName: t.name,
					className: Ve.a.attributionAnimation,
					giverId: a,
					giverName: r,
					tier: n
				}))
			}
			var Re = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less"),
				Be = s.n(Re);
			class Fe extends n.Component {
				render() {
					const {
						award: e,
						className: t,
						giverName: s,
						giverId: a
					} = this.props;
					return e && a && s ? i.a.createElement("div", {
						"aria-role": "presentation",
						className: Object(d.a)(t, Be.a.awardOverlay)
					}, i.a.createElement(De, {
						award: e,
						giverId: a,
						giverName: s
					})) : null
				}
			}
			var He = Object(o.b)(() => Object(l.a)(e => e, Se.n, (e, t) => {
					if (!t) return {};
					const {
						associatedAwardId: s,
						author: a,
						authorId: r
					} = t;
					return {
						award: s ? Object(fe.a)(e, s) : void 0,
						giverId: r,
						giverName: a
					}
				}))(Fe),
				Ue = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less"),
				We = s.n(Ue);
			const Ke = Object(o.b)(() => Object(l.c)({
					awardedCommentLinks: (e, t) => {
						let {
							commentsPageKey: s
						} = t;
						return Object(Se.g)(e, {
							commentsPageKey: s
						}).filter(t => {
							const s = Object(Se.n)(e, {
								commentId: t.id
							});
							return !!s && !!s.associatedAwardId
						})
					},
					isFullyLoaded: Se.v
				})),
				Ge = e => ({
					prevAwardedCommentLinks: e.isFullyLoaded ? [...e.awardedCommentLinks] : void 0,
					prevAwardedCommentLinksTopIndex: e.isFullyLoaded ? e.awardedCommentLinks.length : 0,
					prevCommentsPageKey: e.commentsPageKey
				});
			class Ye extends n.Component {
				constructor(e) {
					super(e), this.state = Ge(e)
				}
				shouldComponentUpdate(e) {
					const {
						awardedCommentLinks: t,
						commentsPageKey: s
					} = this.props;
					return e.commentsPageKey !== s || e.awardedCommentLinks.length !== t.length
				}
				static getDerivedStateFromProps(e, t) {
					if (e.commentsPageKey !== t.prevCommentsPageKey) return Ge(e);
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
						prevAwardedCommentLinksTopIndex: a
					} = this.state;
					if (!s) return null;
					const r = e.slice(a);
					return r.length ? i.a.createElement("div", {
						"aria-role": "presentation",
						className: Object(d.a)(t, We.a.awardOverlaySpectacle)
					}, r.map(e => i.a.createElement(He, {
						className: We.a.awardOverlay,
						commentId: e.id,
						key: e.id
					}))) : null
				}
			}
			var Xe = Ke(Ye);
			const Je = (e, t) => e > t ? D.EXTENDED : e < ne ? D.CRITICAL : e < ie ? D.LOW : D.NORMAL,
				qe = e => e / ae,
				ze = e => Ze(e) % ce == 0,
				Ze = e => Math.round(e / oe) * oe;
			var Qe = s("./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less"),
				$e = s.n(Qe);
			const et = (() => {
					const e = [];
					for (let t = 1; t < 11; t++) e.push("Delay".concat(t));
					return e
				})(),
				tt = (() => {
					const e = [];
					for (let t = 0; t < 21; t++) e.push("X".concat(5 * t));
					return e
				})(),
				st = ["15Deg", "45Deg", "75Deg"],
				at = e => e[Math.floor(Math.random() * e.length)],
				rt = () => {
					const e = [at(tt), at(st), at(et)].map(e => $e.a["particle".concat(e)]).join(" ");
					return "".concat($e.a.particle, " ").concat(e, " ").concat(Math.round(Math.random()) ? $e.a.particleReverse : "")
				},
				nt = 40,
				it = 20;
			class ot extends i.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < nt; t++) e.push(this.createParticle(t, "particleSm"));
					for (let t = 0; t < it; t++) e.push(this.createParticle(t, "particleLg"));
					return i.a.createElement("div", {
						className: $e.a.particleWrapper
					}, e)
				}
				createParticle(e, t) {
					return i.a.createElement("div", {
						key: "".concat(t).concat(innerHeight),
						className: "".concat(rt(), " ").concat($e.a[t])
					})
				}
			}
			var ct = ot;
			const lt = () => ({
				estimatedTimeRemaining: null,
				previouslyVisible: !1,
				visible: !1,
				streamId: null,
				timerPausedAt: null,
				timerDiff: 0,
				timer: null,
				pillLabel: null
			});
			class dt extends n.Component {
				constructor() {
					super(...arguments), this.state = lt(), this.timerId = 0
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
					return t || s > 0 || ze(e) || e < ie
				}
				static getPillLabel(e, t) {
					const {
						currentStream: s,
						overlayOpen: a
					} = e, {
						timerDiff: r,
						timer: n
					} = t;
					if (!s || !s.meter || null === n) return null;
					if (r > 0) {
						if (r < ae) {
							const e = Ze(r);
							return w.fbt._({
								"*": "+{seconds time added} seconds airtime given",
								_1: "+1 second airtime given"
							}, [w.fbt._plural(e, "seconds time added")], {
								hk: "4zE2Hn"
							})
						} {
							const e = Math.round(qe(r));
							return w.fbt._({
								"*": "+{minutes time added} minutes airtime given",
								_1: "+1 minute airtime given"
							}, [w.fbt._plural(e, "minutes time added")], {
								hk: "17ep0a"
							})
						}
					}
					if (n > s.meter.full_meter_duration) {
						const e = Math.round(qe(s.meter.full_meter_duration)).toLocaleString();
						return w.fbt._("{number of minutes}+ minutes airtime left", [w.fbt._param("number of minutes", e)], {
							hk: "2Tjt0F"
						})
					}
					if (ze(n) && !a && n > ie) {
						const e = Math.round(qe(n)).toLocaleString();
						return w.fbt._("{number of minutes} minutes airtime left", [w.fbt._param("number of minutes", e)], {
							hk: "3DZxvE"
						})
					}
					const i = Math.round(n),
						o = Math.floor(qe(i)),
						c = i % ae,
						l = "".concat(o, ":").concat(c < 10 ? "0" : "").concat(c);
					return w.fbt._("{mm:ss timestamp of remaining time} airtime left", [w.fbt._param("mm:ss timestamp of remaining time", l)], {
						hk: "1J5pOH"
					})
				}
				static getDerivedStateFromProps(e, t) {
					if (!e.currentStream || !e.currentStream.meter) return lt();
					const s = e.currentStream.post.id,
						a = e.currentStream.estimated_remaining_time;
					if (t.streamId !== s) {
						const t = {
							estimatedTimeRemaining: a,
							previouslyVisible: !1,
							visible: !0,
							streamId: s,
							timerPausedAt: null,
							timerDiff: 0,
							timer: a,
							pillLabel: null
						};
						return t.pillLabel = dt.getPillLabel(e, t), t
					}
					const r = {
						timer: t.timer,
						timerDiff: t.timerDiff,
						timerPausedAt: t.timerPausedAt
					};
					if (a > t.estimatedTimeRemaining) {
						const e = t.estimatedTimeRemaining - t.timer,
							s = a - t.estimatedTimeRemaining + e;
						s > oe && (r.timer = a, r.timerDiff = s, r.timerPausedAt = a)
					}
					a !== t.estimatedTimeRemaining && Math.abs(r.timer - a) > le && (r.timer = a, r.timerDiff = a - t.timer, r.timerPausedAt = null), null !== r.timerPausedAt && r.timerPausedAt - r.timer > de && (r.timerDiff = 0, r.timerPausedAt = null);
					const n = dt.getPillLabel(e, r),
						i = dt.isPillVisible(r.timer, e.overlayOpen, r.timerDiff);
					return Object.assign({
						estimatedTimeRemaining: a
					}, r, {
						streamId: s,
						pillLabel: n,
						previouslyVisible: t.visible,
						visible: i
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
						previouslyVisible: a,
						timer: r,
						pillLabel: n
					} = this.state;
					if (!(s && e && e.meter && r)) return null;
					const o = Je(r, e.meter.full_meter_duration),
						c = !a,
						l = r < ie || t,
						m = this.state.timerDiff > 0;
					return i.a.createElement("div", {
						className: $e.a.meterOverlay
					}, i.a.createElement("div", {
						className: $e.a.meterPillWrapper
					}, m && i.a.createElement(ct, null), i.a.createElement("div", {
						className: Object(d.a)($e.a.meterPillContainer, {
							[$e.a.animateMeterInAndOut]: c && !l,
							[$e.a.animateMeterInOnly]: c && l,
							[$e.a.fillMeterCritical]: o === D.CRITICAL,
							[$e.a.fillMeterLow]: o === D.LOW,
							[$e.a.fillMeterNormal]: o === D.NORMAL || o === D.EXTENDED,
							[$e.a.fillMeterFed]: m
						}),
						onClick: () => this.props.openGildModal()
					}, i.a.createElement("div", {
						className: $e.a.meterLabel
					}, n))))
				}
			}
			var mt = dt,
				ut = s("./src/reddit/components/OverflowMenu/index.tsx"),
				pt = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ht = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				bt = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				vt = s.n(bt);
			const {
				fbt: gt
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var wt = e => {
					let {
						label: t,
						onSelect: s,
						onToggle: a,
						subreddits: r
					} = e;
					return i.a.createElement(ut.b, {
						className: vt.a.overflowMenu,
						dropdownClassName: vt.a.dropdown,
						defaultButtonOutline: !0,
						disabled: r.length < 1,
						dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
						icon: i.a.createElement("div", {
							className: vt.a.overflowMenuIcon
						}, t, i.a.createElement(ht.a, {
							className: vt.a.dropdownTriangle
						})),
						onClick: a
					}, i.a.createElement("div", {
						className: vt.a.dropdownLabel
					}, gt._("Pick a Community", null, {
						hk: "8MoVj"
					})), r.map(e => i.a.createElement(pt.b, {
						className: vt.a.dropdownRow,
						displayText: e.prefixedName,
						iconWrapperClassName: vt.a.overflowItemIconWrapper,
						key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
						onClick: () => s(e)
					})))
				},
				Ct = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				St = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				ft = s.n(St);
			class _t extends n.Component {
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
						isMuted: a,
						isPaused: r,
						isVisible: n,
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
					return i.a.createElement(Ct.a, {
						className: Object(d.a)(e, ft.a.scrubberBar, {
							[ft.a.visible]: n
						}),
						currentTime: h || 0,
						hasAudio: !0,
						hideControlBar: !!t,
						hideFullScreenButton: !0,
						hideGradient: !0,
						isFullScreen: !1,
						isListing: !1,
						isLive: s,
						isMuted: a,
						isPaused: r,
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
			var Et = _t,
				xt = s("./node_modules/lodash/debounce.js"),
				yt = s.n(xt),
				Ot = s("./src/lib/prettyPrintNumber/index.ts"),
				Tt = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				It = s("./src/reddit/models/Vote/index.ts"),
				Lt = s("./src/reddit/selectors/user.ts");
			Object(k.a)(P.C);
			const Pt = (e, t) => async (s, a, r) => {
				let {
					apiContext: n
				} = r;
				const i = a();
				if (Object(Lt.H)(i))
					if (Object(Z.c)(i)) await Object(Tt.g)(n(), e, t);
					else {
						await Object(p.d)(e);
						const s = Object(te.k)(a(), e);
						null !== s.post.voteState && Object(It.e)(s.post.voteState) === t || await Object(Tt.g)(n(), e, t)
					}
				else s(Object(u.g)())
			};
			var kt = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				Nt = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				jt = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				Mt = s.n(jt);
			const At = Object(l.c)({
				currentStream: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(te.k)(e, s)
				}
			});
			class Vt extends i.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(It.a.upvoted), this.downVotes = () => this.calculateVotes(It.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === It.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(It.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = yt()(() => this.vote(It.a.upvoted), P.Y, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = yt()(() => this.vote(It.a.downvoted), P.Y, {
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
					return i.a.createElement("div", {
						className: Mt.a.statsPanel
					}, i.a.createElement("div", {
						className: Mt.a.voteContainer
					}, i.a.createElement("button", {
						className: Object(d.a)(Mt.a.upButton, {
							[Mt.a.activeVote]: this.isVoteActive(It.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": w.fbt._("Upvote", null, {
							hk: "4ijw7j"
						})
					}, i.a.createElement(Nt.a, {
						className: Mt.a.voteIcon
					})), i.a.createElement("p", {
						className: Mt.a.votesCounter
					}, Object(Ot.b)(this.upVotes()))), i.a.createElement("div", {
						className: Mt.a.watchingContainer
					}, i.a.createElement("div", {
						className: Mt.a.watchingCounter
					}, Object(Ot.b)(t)), i.a.createElement("p", {
						className: Mt.a.watchingCaption
					}, this.props.isLive ? w.fbt._("Watching", null, {
						hk: "2Fql0m"
					}) : w.fbt._("Views", null, {
						hk: "ixhZU"
					}))), i.a.createElement("div", {
						className: Mt.a.voteContainer
					}, i.a.createElement("button", {
						className: Object(d.a)(Mt.a.downButton, {
							[Mt.a.activeVote]: this.isVoteActive(It.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": w.fbt._("Dpvote", null, {
							hk: "1PcDeu"
						})
					}, i.a.createElement(kt.a, {
						className: Mt.a.voteIcon
					})), i.a.createElement("p", {
						className: Mt.a.votesCounter
					}, Object(Ot.b)(this.downVotes()))))
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
			var Dt = Object(o.b)(At, (e, t) => ({
					vote: (t, s) => e(Pt(t, s))
				}))(Vt),
				Rt = s("./src/lib/lessComponent.tsx"),
				Bt = s("./src/lib/opener/index.ts"),
				Ft = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				Ht = s("./src/reddit/icons/fonts/Share/index.tsx"),
				Ut = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				Wt = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				Kt = s("./src/reddit/icons/svgs/Report/index.tsx"),
				Gt = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				Yt = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				Xt = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				Jt = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				qt = s.n(Jt);
			var zt = e => i.a.createElement("svg", {
					className: Object(d.a)(qt.a.icon, e.className),
					viewBox: "0 0 64 64",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("g", null, i.a.createElement("circle", {
					cx: "32",
					cy: "32",
					r: "30.72",
					fill: "none",
					stroke: "#fff",
					strokeWidth: "2.4576"
				}), i.a.createElement("path", {
					fill: "#fff",
					d: "M42.59 27.9447L35.18 21.5931C34.8212 21.2847 34.3292 21.2175 33.8984 21.4143C33.4676 21.6123 33.2 22.0299 33.2 22.5039V24.7995C29.5004 24.7995 26.5472 26.0031 24.4232 28.3755C21.6128 31.5159 20.4992 36.5271 21.2036 42.8667C21.2372 43.1715 21.4952 43.3995 21.7988 43.3995C21.8108 43.3995 21.8216 43.3995 21.8336 43.3983C22.1504 43.3815 22.4 43.1187 22.4 42.7995C22.4 39.3039 23.5508 36.4155 25.7276 34.4451C27.7148 32.6475 30.4868 31.7307 33.14 31.9971C33.1604 31.9983 33.1796 31.9911 33.2 31.9911V34.2951C33.2 34.7691 33.4676 35.1879 33.8984 35.3859C34.0616 35.4603 34.2332 35.4975 34.4036 35.4975C34.682 35.4975 34.9568 35.3979 35.18 35.2071L42.59 28.8555C42.7232 28.7415 42.8 28.5747 42.8 28.3995C42.8 28.2243 42.7232 28.0587 42.59 27.9447Z"
				}))),
				Zt = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				Qt = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				$t = s.n(Qt);
			const es = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: $t.a.shareButton,
						onClick: t,
						"aria-label": w.fbt._("share video", null, {
							hk: "2e71ai"
						}),
						value: "share"
					}, i.a.createElement(Ht.a, {
						className: $t.a.menuIcon
					}))
				},
				ts = e => {
					let {
						isMuted: t,
						onToggle: s
					} = e;
					return i.a.createElement("button", {
						className: $t.a.muteButton,
						onClick: s,
						"aria-label": w.fbt._("mute video", null, {
							hk: "Enspe"
						}),
						value: "mute"
					}, t ? i.a.createElement(Yt.a, {
						className: $t.a.volumeIcon
					}) : i.a.createElement(Zt.a, {
						className: $t.a.volumeIcon
					}))
				},
				ss = Rt.a.wrapped(Ft.a, "menuIcon", $t.a),
				as = e => {
					let {
						onClick: t,
						onHideClick: s,
						onReportClick: a
					} = e;
					return i.a.createElement(ut.b, {
						className: $t.a.menuButton,
						defaultButtonOutline: !0,
						dropdownId: "rpan-overlay-menu",
						icon: i.a.createElement(ss, null),
						onClick: t
					}, i.a.createElement(pt.b, {
						className: $t.a.overflowItem,
						displayText: w.fbt._("View rules", null, {
							hk: "4lTvzy"
						}),
						iconWrapperClassName: $t.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-rules"),
						onClick: () => Object(Bt.d)(P.Q, Bt.c.BLANK)
					}, i.a.createElement(Gt.a, {
						className: $t.a.overflowItemIcon
					})), i.a.createElement(pt.b, {
						className: $t.a.overflowItem,
						displayText: w.fbt._("Visit RPAN community", null, {
							hk: "3KZliI"
						}),
						iconWrapperClassName: $t.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-community"),
						onClick: () => Object(Bt.d)(P.O, Bt.c.BLANK)
					}, i.a.createElement(Wt.a, {
						className: $t.a.overflowItemIcon
					})), i.a.createElement(pt.b, {
						className: $t.a.overflowItem,
						displayText: w.fbt._("Report", null, {
							hk: "1TxhL9"
						}),
						iconWrapperClassName: $t.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-report"),
						onClick: a
					}, i.a.createElement(Kt.a, {
						className: $t.a.overflowItemIcon
					})), i.a.createElement(pt.b, {
						className: $t.a.overflowItem,
						displayText: w.fbt._("Hide", null, {
							hk: "1qXTIB"
						}),
						iconWrapperClassName: $t.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-hide"),
						onClick: s
					}, i.a.createElement(Ut.a, {
						className: $t.a.overflowItemIcon
					})))
				},
				rs = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: $t.a.promptButton,
						onClick: t
					}, i.a.createElement(Xt.a, null), i.a.createElement("span", null, w.fbt._("Replay Video", null, {
						hk: "1iD2Wj"
					})))
				},
				ns = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: $t.a.promptButton,
						onClick: t
					}, i.a.createElement(zt, null), i.a.createElement("span", null, w.fbt._("Share Video", null, {
						hk: "FYgQy"
					})))
				},
				is = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: "".concat($t.a.promptButton, " ").concat($t.a.awardButton),
						onClick: t
					}, i.a.createElement("span", null, w.fbt._("Award Now", null, {
						hk: "STk0L"
					})))
				};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var os = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				cs = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				ls = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				ds = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				ms = s.n(ds);
			const {
				fbt: us
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ps = e => {
				let {
					live: t
				} = e;
				return i.a.createElement("div", {
					className: ms.a.broadcastStatus
				}, t ? i.a.createElement(hs, null) : i.a.createElement(bs, null))
			}, hs = () => us._("{=Live}", [us._param("=Live", i.a.createElement("span", {
				className: ms.a.live
			}, us._("Live", null, {
				hk: "8x90I"
			})))], {
				hk: "3ZBbO0"
			}), bs = () => us._("Recorded live", null, {
				hk: "2seH5c"
			}), vs = e => {
				let {
					onSubscribe: t,
					isSubscribed: s
				} = e;
				const [a, r] = Object(n.useState)(!1);
				return Object(n.useEffect)(() => {
					const e = setTimeout(() => {
						r(!1)
					}, 3e3);
					return () => clearTimeout(e)
				}, [a]), s ? a ? i.a.createElement(cs.a, {
					className: ms.a.checkmarkIcon
				}) : null : i.a.createElement("button", {
					onClick: () => {
						r(!0), t()
					},
					className: ms.a.joinButton
				}, i.a.createElement(ls.a, {
					className: ms.a.plusIcon
				}), i.a.createElement("span", {
					className: ms.a.joinText
				}, us._("Join", null, {
					hk: "3n0zBz"
				})))
			}, gs = e => {
				let {
					onSelect: t,
					related: s,
					subreddit: a,
					subreddits: r
				} = e, n = "";
				n = "home" === s ? "All" : "r/popular" === s ? "r/popular" : a || "All";
				const o = r.filter(e => e.prefixedName !== n);
				return i.a.createElement(ut.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: i.a.createElement("span", {
						className: ms.a.subreddit
					}, a || "RPAN"),
					isFixed: !0
				}, i.a.createElement("div", {
					className: ms.a.dropdownLabel
				}, us._("Pick a Community", null, {
					hk: "4AfDwd"
				})), o.map(e => i.a.createElement(pt.b, {
					className: ms.a.dropdownRow,
					displayText: e.prefixedName,
					key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
					onClick: () => t(e)
				})))
			}, ws = e => {
				let {
					text: t
				} = e;
				return i.a.createElement("h1", {
					className: ms.a.title
				}, t)
			}, Cs = e => {
				let {
					broadcast: t,
					live: s
				} = e;
				return i.a.createElement("div", {
					className: ms.a.watchersCount
				}, s ? i.a.createElement(Ss, {
					count: Math.max(1, t.continuous_watchers)
				}) : i.a.createElement(fs, {
					count: Math.max(1, t.unique_watchers)
				}))
			}, Ss = e => {
				let {
					count: t
				} = e;
				return us._({
					"*": "{number of watchers} watchers",
					_1: "1 watcher"
				}, [us._plural(t, "number of watchers", Object(Ot.b)(t, !0))], {
					hk: "3F0Nj0"
				})
			}, fs = e => {
				let {
					count: t
				} = e;
				return us._({
					"*": "{number of views} views",
					_1: "1 view"
				}, [us._plural(t, "number of views", Object(Ot.b)(t, !0))], {
					hk: "tSTjT"
				})
			}, _s = e => {
				let {
					onClick: t
				} = e;
				return i.a.createElement("button", {
					className: ms.a.shareButton,
					onClick: t,
					"aria-label": us._("Share video", null, {
						hk: "I91IP"
					}),
					value: "share"
				}, i.a.createElement(Ht.a, {
					className: ms.a.shareIcon
				}))
			}, Es = Rt.a.wrapped(Ft.a, "menuIcon", ms.a), xs = e => {
				let {
					onClick: t,
					onHideClick: s,
					onReportClick: a
				} = e;
				return i.a.createElement(ut.b, {
					className: ms.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: "rpan-overlay-menu",
					icon: i.a.createElement(Es, null),
					onClick: t
				}, i.a.createElement(pt.b, {
					className: ms.a.overflowItem,
					displayText: us._("View rules", null, {
						hk: "haY6r"
					}),
					iconWrapperClassName: ms.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-rules"),
					onClick: () => Object(Bt.d)(P.Q, Bt.c.BLANK)
				}, i.a.createElement(Gt.a, {
					className: ms.a.overflowItemIcon
				})), i.a.createElement(pt.b, {
					className: ms.a.overflowItem,
					displayText: us._("Visit RPAN community", null, {
						hk: "1vVY6o"
					}),
					iconWrapperClassName: ms.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-community"),
					onClick: () => Object(Bt.d)(P.O, Bt.c.BLANK)
				}, i.a.createElement(Wt.a, {
					className: ms.a.overflowItemIcon
				})), i.a.createElement(pt.b, {
					className: ms.a.overflowItem,
					displayText: us._("Report", null, {
						hk: "3ZxBjz"
					}),
					iconWrapperClassName: ms.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-report"),
					onClick: a
				}, i.a.createElement(Kt.a, {
					className: ms.a.overflowItemIcon
				})), i.a.createElement(pt.b, {
					className: ms.a.overflowItem,
					displayText: us._("Hide", null, {
						hk: "15vs9C"
					}),
					iconWrapperClassName: ms.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-hide"),
					onClick: s
				}, i.a.createElement(Ut.a, {
					className: ms.a.overflowItemIcon
				})))
			}, ys = Object(o.b)(null, e => ({
				vote: (t, s) => e(Pt(t, s))
			}))(class extends n.Component {
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
					} = this.props.broadcast.post, s = t !== e.broadcast.post.id, a = this.state.voteStates.has(t);
					s && !a && this.setVoteStateFromBroadcastProp()
				}
				render() {
					const e = this.voteState === It.a.upvoted,
						t = this.voteState === It.a.downvoted;
					return i.a.createElement("div", {
						className: ms.a.votePanel
					}, i.a.createElement(Os, {
						onClick: this.handleUpVote,
						voted: e
					}), null !== this.score ? i.a.createElement(Is, {
						score: this.score
					}) : null, i.a.createElement(Ts, {
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
						const a = new Map(s);
						a.set(e, t), this.setState({
							voteStates: a
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
						onDownvote: a
					} = this.props, {
						id: r
					} = t.post;
					this.setVoteState(r, e), this.props.vote(r, e), e === It.a.upvoted ? s() : e === It.a.downvoted && a()
				}
			}), Os = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return i.a.createElement("button", {
					className: Object(d.a)(ms.a.voteButton, ms.a.upVoteButton, {
						[ms.a.voted]: s
					}),
					onClick: t,
					value: "upvote",
					"aria-label": us._("Upvote", null, {
						hk: "Ufd6r"
					})
				}, i.a.createElement(Nt.a, {
					className: ms.a.voteIcon
				}))
			}, Ts = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return i.a.createElement("button", {
					className: Object(d.a)(ms.a.voteButton, ms.a.downVoteButton, {
						[ms.a.voted]: s
					}),
					onClick: t,
					value: "downvote",
					"aria-label": us._("Downvote", null, {
						hk: "ZDRA3"
					})
				}, i.a.createElement(kt.a, {
					className: ms.a.voteIcon
				}))
			}, Is = e => {
				let {
					score: t
				} = e;
				return i.a.createElement("div", {
					className: ms.a.score
				}, Object(Ot.b)(t))
			}, Ls = e => {
				let {
					children: t
				} = e;
				return i.a.createElement("div", {
					className: ms.a.prompt
				}, t)
			}, Ps = () => i.a.createElement(Ls, null, us._("Connection issues", null, {
				hk: "hIrnJ"
			})), ks = () => i.a.createElement(Ls, null, us._("Tuning...", null, {
				hk: "3dG7Ks"
			})), Ns = () => i.a.createElement(Ls, null, us._("Broadcast paused", null, {
				hk: "jxvku"
			})), js = e => {
				let {
					onClickReplay: t,
					onClickShare: s
				} = e;
				return i.a.createElement(Ls, null, i.a.createElement("div", {
					className: ms.a.promptButtonSet
				}, i.a.createElement(rs, {
					onClick: t
				}), i.a.createElement(ns, {
					onClick: s
				})))
			}, Ms = e => {
				let {
					onClickAward: t
				} = e;
				return i.a.createElement(Ls, null, i.a.createElement("div", {
					className: ms.a.awardPromptWrapper
				}, i.a.createElement("div", {
					className: ms.a.awardPromptLabel
				}, us._("Award this broadcast to give it more airtime", null, {
					hk: "20jmEz"
				})), i.a.createElement(is, {
					onClick: t
				})))
			}, As = e => {
				if (!e) return !1;
				const {
					id: t,
					name: s
				} = e;
				return !(!t || !s || "string" != typeof t || "string" != typeof s)
			}, Vs = e => {
				let {
					profile: t
				} = e;
				const {
					name: s
				} = t, a = Us(s), r = Ws(s, !a), n = a ? us._("Unfollow u/{name}", [us._param("name", s)], {
					hk: "2n0wqa"
				}) : us._("Follow u/{name}", [us._param("name", s)], {
					hk: "20X8Bw"
				});
				return i.a.createElement("button", {
					className: ms.a.subscribeToProfileButton,
					onClick: r,
					title: n
				}, i.a.createElement(Ds, {
					profile: t
				}), i.a.createElement(Rs, {
					isSubscribed: a
				}))
			}, Ds = e => {
				let {
					profile: t
				} = e;
				const {
					id: s,
					name: a
				} = t, r = Object(o.d)(e => Object(Lt.eb)(e, {
					userName: a
				})), n = Hs(r);
				return i.a.createElement("div", {
					className: ms.a.subscribeToProfileAvatar
				}, r ? n ? i.a.createElement("img", {
					src: r.accountIcon
				}) : i.a.createElement(os.a, {
					userId: s
				}) : null)
			}, Rs = e => {
				let {
					isSubscribed: t
				} = e;
				return i.a.createElement("div", {
					className: Object(d.a)(ms.a.subscribeToProfileStatus, {
						[ms.a.isSubscribed]: t
					})
				}, t ? i.a.createElement(Bs, null) : i.a.createElement(Fs, null))
			}, Bs = () => i.a.createElement("svg", {
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M17.7072 5.69337L16.3083 4.29337C16.1203 4.10537 15.8662 4.00037 15.6012 4.00037C15.3352 4.00037 15.0812 4.10537 14.8942 4.29337L7.90025 11.2864L5.10725 8.49337C4.71725 8.10237 4.08425 8.10237 3.69325 8.49337L2.29325 9.89337C1.90225 10.2844 1.90225 10.9174 2.29325 11.3074L7.19325 16.2074C7.38925 16.4024 7.64425 16.5004 7.90025 16.5004C8.15625 16.5004 8.41225 16.4024 8.60725 16.2074L17.7072 7.10737C18.0982 6.71637 18.0982 6.08437 17.7072 5.69337"
			})), Fs = () => i.a.createElement("svg", {
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				d: "M12.8,6.4 L9.6,6.4 L9.6,3.2 C9.6,2.7576 9.2424,2.4 8.8,2.4 L7.2,2.4 C6.7576,2.4 6.4,2.7576 6.4,3.2 L6.4,6.4 L3.2,6.4 C2.7584,6.4 2.4,6.7576 2.4,7.2 L2.4,8.8 C2.4,9.2424 2.7584,9.6 3.2,9.6 L6.4,9.6 L6.4,12.8 C6.4,13.2424 6.7576,13.6 7.2,13.6 L8.8,13.6 C9.2424,13.6 9.6,13.2424 9.6,12.8 L9.6,9.6 L12.8,9.6 C13.2424,9.6 13.6,9.2424 13.6,8.8 L13.6,7.2 C13.6,6.7576 13.2424,6.4 12.8,6.4"
			})), Hs = e => {
				const t = Object(o.d)(Lt.i),
					s = Object(o.d)(Lt.z),
					a = Object(o.d)(Lt.V);
				return !!e && (!!e.accountIcon && (!!t && (t.id === e.id || (!e.isNSFW || !!a && !s))))
			}, Us = e => Object(o.d)(t => Object(Ce.bb)(t, {
				identifier: {
					name: e,
					type: ve.a.PROFILE
				}
			})), Ws = (e, t) => {
				const s = Object(o.c)();
				return Object(n.useCallback)(() => s(Object(he.d)([{
					name: e,
					type: ve.a.PROFILE
				}], t)), [s, e, t])
			};
			var Ks = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				Gs = s.n(Ks);
			const {
				fbt: Ys
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Xs = (e, t) => {
				let {
					currentStreamId: s
				} = t;
				return s ? Object(te.k)(e, s) : void 0
			}, Js = Object(l.c)({
				currentStream: Xs,
				inGoldRpanLivePreview: we.a,
				inStreamingSubredditIntegration: Z.b,
				inStreamingUiRefreshViewer: Z.c,
				inViewerFeedTheMeter: (e, t) => Object(Z.d)(e, t, Xs),
				isApiError: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(ee.c)(e, s)
				},
				isBatchApiError: ee.e,
				isBatchPending: ee.f,
				isConfigError: ee.g,
				isIntroInProgress: se.b,
				isMenuOpened: e => "rpan-overlay-menu" === e.tooltipId || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltipId,
				lastBatchApiRequestTs: ee.i,
				recommendedViewerSubredditOptions: ee.j,
				isUserSubscriber: (e, t) => {
					let {
						subreddit: s
					} = t;
					const a = s && s.split("/").pop();
					return !!a && Object(Ce.bb)(e, {
						identifier: {
							name: a,
							type: ve.a.SUBREDDIT
						}
					}, !0)
				}
			});
			class qs extends n.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.hoverTimeout = window.setTimeout(() => this.setState({
							isHovered: !0
						}), P.o)
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
							settingChange: be.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: be.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === be.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === be.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === be.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === be.a.Volume && s && s.handleMouseUp(e), this.setState({
							settingChange: void 0
						})
					}, this.onMouseHoverScrubber = e => {
						const {
							target: t,
							currentTarget: s
						} = e;
						if (!(t instanceof Element && s instanceof Element)) return;
						const a = this.isHoveringVolumeControl(t, s);
						a !== this.state.isHoveringVolumeControl && this.setState({
							isHoveringVolumeControl: a
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
						isIntroInProgress: a,
						isLive: r,
						isUnavailable: n,
						onHide: o,
						onReport: c,
						onToggleMenu: l,
						onUpvote: m,
						onDownvote: u
					} = this.props, p = e && e.post.id;
					return i.a.createElement("div", {
						className: Object(d.a)($t.a.overlay, {
							[$t.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !a && i.a.createElement("div", {
						className: $t.a.overlayTop
					}, s && this.renderRecommendedViewerSubreddit(), e && !n && i.a.createElement(i.a.Fragment, null, !s && this.renderTitleContainer(), i.a.createElement(es, {
						onClick: this.onCopyLink
					}), i.a.createElement(as, {
						onClick: l,
						onHideClick: o,
						onReportClick: c
					}))), t && e && !a && !n && !!p && i.a.createElement(Xe, {
						className: $t.a.awardOverlaySpectacle,
						commentsPageKey: Object(me.a)(p)
					}), s && e && !a && !n && i.a.createElement("div", {
						className: $t.a.overlayTitle
					}, this.renderTitleContainer()), i.a.createElement("div", {
						className: $t.a.overlayCenter
					}, this.getContent()), e && !a && !n && i.a.createElement("div", {
						className: $t.a.overlayBottom
					}, i.a.createElement(Dt, {
						currentStreamId: e.post.id,
						isLive: r,
						onUpvote: m,
						onDownvote: u
					}), this.renderScrubber()))
				}
				renderUiRefresh() {
					const {
						currentStream: e,
						inGoldRpanLivePreview: t,
						inViewerFeedTheMeter: s,
						isIntroInProgress: a,
						isLive: r,
						isUnavailable: n,
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
					if (a || !e || n) return null;
					const g = e && e.post.id,
						{
							authorInfo: w
						} = e.post;
					return i.a.createElement("div", {
						className: Object(d.a)(ms.a.overlay, {
							[ms.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, t && e && !a && !n && !!g && i.a.createElement(Xe, {
						className: $t.a.awardOverlaySpectacle,
						commentsPageKey: Object(me.a)(g)
					}), s && i.a.createElement(mt, {
						currentStream: e,
						overlayOpen: this.isVisible(),
						openGildModal: () => this.props.handleGiveAward()
					}), this.renderPrompt(), i.a.createElement("div", {
						className: ms.a.overlayTop
					}, i.a.createElement("div", {
						className: ms.a.overlayTopLeft
					}, i.a.createElement("div", {
						className: ms.a.meta
					}, i.a.createElement(ps, {
						live: r
					}), i.a.createElement(ws, {
						text: e.post.title
					}), i.a.createElement("div", {
						className: ms.a.subredditInfo
					}, i.a.createElement(gs, {
						onSelect: l,
						related: h,
						subreddit: b,
						subreddits: p
					}), i.a.createElement(vs, {
						onSubscribe: m,
						isSubscribed: v
					})), i.a.createElement(Cs, {
						broadcast: e,
						live: r
					}))), i.a.createElement("div", {
						className: ms.a.overlayTopRight
					}, As(w) ? i.a.createElement(Vs, {
						profile: w
					}) : null, i.a.createElement(xs, {
						onClick: u,
						onHideClick: o,
						onReportClick: c
					}), i.a.createElement(_s, {
						onClick: this.onCopyLink
					}), i.a.createElement("div", {
						className: Object(d.a)({
							[ms.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, i.a.createElement(ys, {
						broadcast: e,
						onUpvote: this.props.onUpvote,
						onDownvote: this.props.onDownvote
					})))), i.a.createElement("div", {
						className: ms.a.overlayBottom,
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
						isPaused: a,
						onPlayPauseToggle: r,
						onVideoPositionUpdate: n,
						setVolume: o,
						toggleMute: c,
						videoCurrentTime: l,
						videoTotalTime: d,
						volume: m
					} = this.props, u = e ? ms.a.controls : "", p = e || this.isVisible();
					return i.a.createElement("div", {
						className: u
					}, i.a.createElement(Et, {
						isLive: t,
						isMuted: s,
						isPaused: a,
						isVisible: p,
						onPlayPauseToggle: r,
						onVideoPositionUpdate: n,
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
						isApiError: a,
						isBatchApiError: r,
						isBatchPending: n,
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
					if (b || c && o || t && a || !t && r) return i.a.createElement(Ps, null);
					if (c) return i.a.createElement("div", {
						className: $t.a.intro
					}, i.a.createElement(ts, {
						isMuted: d,
						onToggle: g
					}));
					if (m || !t && !r && !n && p) return null;
					if (l) return i.a.createElement(ks, null);
					if (e && e.stream.state === ge.b.DISCONNECTED) return i.a.createElement(Ns, null);
					if (v) return i.a.createElement(js, {
						onClickReplay: h,
						onClickShare: this.onCopyLink
					});
					const w = e && e.meter && e.estimated_remaining_time < re;
					return u && w ? i.a.createElement(Ms, {
						onClickAward: s
					}) : null
				}
				renderRecommendedViewerSubreddit() {
					const {
						onSelectSubreddit: e,
						recommendedViewerSubredditOptions: t,
						related: s,
						subreddit: a
					} = this.props;
					let r = "",
						n = "";
					"home" === s ? (r = "All", n = "All") : "r/popular" === s ? (r = "Popular", n = "r/popular") : a ? (r = a.replace(/^r\//, ""), n = a) : (r = "All", n = "All");
					const o = t.filter(e => e.prefixedName !== n);
					return i.a.createElement("div", {
						className: $t.a.menuContainer
					}, i.a.createElement(wt, {
						label: r,
						onSelect: e,
						subreddits: o
					}))
				}
				renderTitleContainer() {
					const {
						currentStream: e,
						isLive: t
					} = this.props;
					if (e) return i.a.createElement("div", {
						className: $t.a.titleContainer
					}, i.a.createElement("h1", {
						className: $t.a.videoTitle
					}, e.post.title), !t && i.a.createElement("div", {
						className: $t.a.RecordedLabel
					}, Ys._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(Gs.a.ControlVolume)) return !0;
						e = e.parentElement
					}
					return !1
				}
				getContent() {
					const {
						currentStream: e,
						currentStreamId: t,
						isApiError: s,
						isBatchApiError: a,
						isBatchPending: r,
						isConfigError: n,
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
					return p || o && n || t && s || !t && a ? i.a.createElement("div", {
						className: $t.a.prompt
					}, Ys._("Connection issues", null, {
						hk: "24LpRV"
					})) : o ? i.a.createElement("div", {
						className: $t.a.intro
					}, i.a.createElement(ts, {
						isMuted: l,
						onToggle: b
					})) : d || !t && !a && !r && m ? null : c ? i.a.createElement("div", {
						className: $t.a.prompt
					}, Ys._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === ge.b.DISCONNECTED ? i.a.createElement("div", {
						className: $t.a.prompt
					}, Ys._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : h ? i.a.createElement("div", {
						className: $t.a.prompt
					}, i.a.createElement("div", {
						className: $t.a.promptButtonSet
					}, i.a.createElement(rs, {
						onClick: u
					}), i.a.createElement(ns, {
						onClick: this.onCopyLink
					}))) : null
				}
			}
			var zs = Object(o.b)(Js, (e, t) => ({
				copyLink: t => e(Object(pe.F)(t)),
				onHide: () => {
					t.currentStreamId && (e(Object(pe.Z)(t.currentStreamId, !0, !0, !0)), e(M(t.currentStreamId)))
				},
				handleGiveAward: () => {
					t.currentStreamId && e(Object(ue.d)({
						thingId: t.currentStreamId
					}))
				},
				onSubscribeSubreddit: () => {
					const s = t.subreddit && t.subreddit.split("/").pop();
					s && e(Object(he.d)([{
						name: s,
						type: ve.a.SUBREDDIT
					}], !0))
				}
			}))(qs);
			Object(k.a)(P.r);
			const Zs = Object(k.a)(P.z),
				Qs = (e, t) => async (s, a) => {
					const r = a(),
						n = Date.now(),
						i = e.map(e => Object(te.k)(r, e)).filter(Boolean).map(e => ({
							imageUrl: "".concat(e.stream.thumbnail, "?").concat(n),
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await $s(i, t)
				}, $s = (e, t) => Promise.all(e.map(e => ea(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), ea = e => new Promise((t, s) => {
					const a = new Image;
					a.onload = () => t(), a.onerror = () => s(), a.src = e
				}).then(() => !0, () => !1);
			var ta = s("./src/reddit/components/PublicAccessNetwork/Theater/StaticScreen/index.m.less"),
				sa = s.n(ta);
			const aa = Object(l.c)({
				isIntroInProgress: se.b,
				previewUrl: (e, t) => {
					let {
						currentStream: s
					} = t;
					return s ? Object(te.i)(e, {
						streamId: s.post.id
					}) : void 0
				}
			});
			class ra extends n.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: a
					} = this.props, r = [];
					e && r.push(e.post.id), s && r.push(s.post.id), a && r.push(a.post.id), r.length > 0 && t(r)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: a,
						previousStream: r
					} = this.props, n = [];
					t && this.isStreamChanged(t, e.currentStream) && n.push(t.post.id), r && this.isStreamChanged(r, e.previousStream) && n.push(r.post.id), s && this.isStreamChanged(s, e.nextStream) && n.push(s.post.id), n.length > 0 && a(n)
				}
				render() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						previewUrl: s
					} = this.props, a = e && e.meter && e.estimated_remaining_time < ie || !s, r = !a && !t && s;
					return i.a.createElement("div", {
						className: sa.a.staticContainer
					}, a && i.a.createElement("div", {
						className: sa.a.tvNoise,
						"aria-label": w.fbt._("video static", null, {
							hk: "3FA8fk"
						})
					}), r && i.a.createElement("div", {
						className: sa.a.previewContainer,
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
			var na = Object(o.b)(aa, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, a) => {
						const r = await s(Qs(e, t));
						s(Zs(r))
					})(t))
				}))(ra),
				ia = s("./src/lib/constants/index.ts"),
				oa = s("./src/lib/makeDraftKey/index.ts"),
				ca = s("./src/reddit/actions/page.ts"),
				la = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				da = s("./src/reddit/components/CommentsChat/Loader.ts"),
				ma = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				ua = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				pa = s("./src/reddit/components/GildModal/Loader.tsx"),
				ha = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/selectors/posts.ts")),
				ba = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less"),
				va = s.n(ba);
			const ga = Object(o.b)(() => Object(l.c)({
					allAwards: e => e.awards.models,
					post: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(ha.O)(e, {
							postId: s
						})
					}
				})),
				wa = ["Center", "Left", "Right"],
				Ca = ["Low", "Mid", "High"],
				Sa = () => Math.floor(800 * Math.random()),
				fa = e => e[Math.floor(Math.random() * e.length)],
				_a = e => {
					const t = fa(wa),
						s = fa(Ca),
						a = Ee(e);
					return va.a["award_".concat(a, "Tier_").concat(s).concat(t)]
				};
			class Ea extends n.Component {
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
							let [s, a] = t;
							const {
								icon: r,
								coinPrice: n
							} = e[s];
							return {
								coinPrice: n,
								count: a,
								iconUrl: r.url,
								id: s
							}
						}).sort((e, t) => t.coinPrice - e.coinPrice),
						a = [];
					return s.forEach(e => {
						const {
							coinPrice: t,
							count: s,
							iconUrl: r
						} = e;
						for (let n = 0; n < s; n++) {
							const s = "".concat(Sa(), "ms"),
								o = _a(t),
								c = i.a.createElement("img", {
									key: "".concat(e.id, "-").concat(n),
									className: Object(d.a)(va.a.award, o),
									src: r,
									style: {
										animationDelay: s
									}
								});
							a.push(c)
						}
					}), i.a.createElement("div", {
						"aria-role": "presentation",
						className: va.a.awardBubbler
					}, a)
				}
			}
			var xa = ga(Ea),
				ya = s("./src/reddit/models/PostDraft/index.ts"),
				Oa = s("./src/reddit/selectors/gild.ts"),
				Ta = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				Ia = s.n(Ta);
			const La = Object(l.c)({
				gildModalIsOpen: (e, t) => {
					let {
						postId: s
					} = t;
					const a = Object(ua.b)(s);
					return Object(Oa.c)(e, a)
				},
				isDisabled: (e, t) => Object(te.e)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: Lt.H,
				isPostDataLoaded: (e, t) => {
					let {
						postId: s
					} = t;
					return !!Object(ha.O)(e, {
						postId: s
					})
				},
				replyComment: (e, t) => {
					let {
						postId: s
					} = t;
					return Object(Se.t)(e, {
						commentsPageKey: Object(me.a)(s)
					})
				}
			});
			class Pa extends n.Component {
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
						isLoggedIn: a,
						isPostDataLoaded: r,
						location: n,
						openLoginModal: o,
						openRegisterModal: c,
						sendEvent: l,
						subredditId: m,
						replyComment: u
					} = this.props, p = Object(me.a)(e), h = u ? Object(oa.a)(ya.c.replyToComment, u.id) : Object(oa.a)(ya.c.replyToPost, e);
					return s ? i.a.createElement("div", {
						className: Object(d.a)(Ia.a.streamingChat, Ia.a.prompt)
					}, w.fbt._("Chat has been disabled", null, {
						hk: "3139v6"
					})) : r ? i.a.createElement("div", {
						"aria-label": w.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: Ia.a.streamingChat,
						onClick: this.props.onChatClick
					}, i.a.createElement(da.a, {
						className: Ia.a.chatScroller,
						emptyStateClassName: Ia.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: m,
						commentsPageKey: p
					}), a && i.a.createElement(ma.a, {
						key: "chatCommentsForm",
						postId: e,
						replyComment: u,
						draftKey: h,
						commentsPageKey: p,
						isEditing: !1,
						sendEvent: l,
						isLivestreaming: !0
					}), i.a.createElement(xa, {
						postId: e
					}), !a && i.a.createElement(la.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						location: n,
						openLoginModal: o,
						openRegisterModal: c,
						origin
					}), t && i.a.createElement(pa.a, null)) : i.a.createElement("div", {
						className: Object(d.a)(Ia.a.streamingChat, Ia.a.prompt)
					}, w.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var ka = Object(o.b)(La, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						loadComments: () => e(Object(ca.q)(s, void 0, {
							sort: ia.r.CHAT
						}, ia.r.CHAT)),
						openLoginModal: () => e(Object(u.g)()),
						openRegisterModal: () => e(Object(u.h)())
					}
				})(Pa),
				Na = e => i.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
				})),
				ja = e => i.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				Ma = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				Aa = s.n(Ma);
			const Va = e => {
				let {
					isNext: t,
					onClick: s,
					stream: a
				} = e;
				return i.a.createElement("div", {
					className: Object(d.a)(Aa.a.switchContainer, t ? Aa.a.switchContainerNext : Aa.a.switchContainerPrevious)
				}, i.a.createElement("button", {
					className: Aa.a.switchButton,
					disabled: !a,
					onClick: s,
					"aria-label": t ? w.fbt._("Forward arrow", null, {
						hk: "3b7sZa"
					}) : w.fbt._("Back arrow", null, {
						hk: "1upGBK"
					}),
					value: t ? "forward" : "back"
				}, i.a.createElement("div", {
					className: Aa.a.streamThumbnail,
					style: a ? {
						backgroundImage: "url(".concat(a.stream.thumbnail, ")")
					} : {}
				}), t ? i.a.createElement(ja, {
					className: Aa.a.arrowIcon
				}) : i.a.createElement(Na, {
					className: Aa.a.arrowIcon
				})))
			};
			var Da = e => i.a.createElement(i.a.Fragment, null, i.a.createElement(Va, {
					isNext: !1,
					onClick: e.onPrevious,
					stream: e.previousStream
				}), i.a.createElement(Va, {
					isNext: !0,
					onClick: e.onNext,
					stream: e.nextStream
				})),
				Ra = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				Ba = s.n(Ra);
			const Fa = Object(x.a)(H.a, {
					playerName: "RPAN Video Player"
				}),
				Ha = Object(l.c)({
					currentStream: te.c,
					currentStreamStartTime: te.d,
					currentHlsUrl: te.b,
					inStreamingSubredditIntegration: Z.b,
					inViewerFeedTheMeter: (e, t) => Object(Z.d)(e, t, te.c),
					isIntroInProgress: se.b,
					isOverlayOpen: $.h,
					isReportFlowOpen: (e, t) => {
						let {
							streamIdFromPath: s
						} = t;
						return e.reportFlow.postOrCommentId === Object(X.g)(s || "")
					},
					lastChatActivityUtcTs: se.c,
					nextStream: te.f,
					nextTopStream: te.g,
					playbackState: te.h,
					previousStream: te.j,
					unavailableVideoUrl: ee.o,
					volume: Q.b
				}),
				Ua = Object(o.b)(Ha, (e, t) => ({
					closeLocation: () => e(Object(c.b)(t.location.state[K.a.CloseLocation])),
					fetchBroadcasterProfileInfo: t => e(Object(I.d)(t, !0)),
					fetchPostForStream: t => e(Object(L.a)(t)),
					subscribeConfig: () => e(R.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(R.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(R.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: t => e(Object(F.j)(t, void 0, !0)),
					onStatsSubscribe: t => e(R.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(R.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(p.a)(t)),
					receiveHlsStreamRemoved: t => e(Object(p.b)(t)),
					removeStreamFromHistory: t => e(M(t)),
					setNewCorrelationId: () => e(Object(B.b)()),
					setIntroFinishedStatus: t => e(Object(B.c)({
						isIntroFinished: t
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
			class Wa extends n.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = i.a.createRef(), this.onHlsRefChange = e => {
						this.hlsVideoApi = e
					}, this.onCurrentTimeChanged = e => {
						this.onCurrentTimeChangedThrottled(e), this.state.videoCurrentTime !== e && this.setState({
							videoCurrentTime: e
						})
					}, this.onCurrentTimeChangedThrottled = S()(e => {
						const {
							currentStream: t,
							isIntroInProgress: s,
							updateVideoTimestamp: a
						} = this.props;
						!s && t && this.isCurrentStreamWatchable() && a(t.post.id, e)
					}, P.p), this.onVideoPlayerPositionUpdate = e => {
						this.state.videoCurrentTime !== e && (this.props.sendEvent(Object(J.p)(this.props.currentStream, Object.assign({}, this.getPlaybackStats(), {
							scrubbingStartMs: this.convertToMs(this.state.videoCurrentTime),
							scrubbingEndMs: this.convertToMs(e)
						}))), this.setState({
							videoCurrentTime: e
						}), this.hlsVideoApi && this.hlsVideoApi.setCurrentTime(e))
					}, this.onNextStream = S()(() => {
						const {
							nextStream: e
						} = this.props;
						e && this.goToStream(e)
					}, P.q, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = S()(() => {
						const {
							previousStream: e
						} = this.props;
						e && this.goToStream(e)
					}, P.q, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(Y.g)(e.target) ? e.stopPropagation() : e.keyCode === G.a.ArrowRight ? this.onNextStream() : e.keyCode === G.a.ArrowLeft && this.onPreviousStream()
					}, this.onPlayPauseToggle = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.isVideoPaused ? this.playVideo() : this.pauseVideo()
					}, this.onToggleMuteVideo = () => {
						this.setVideoMute(!this.state.isMuted)
					}, this.onSetVolume = (e, t) => {
						const s = this.hlsVideoApi;
						s && (t ? 0 !== e ? this.props.setVideoVolume(e) : this.setVideoMute(!0) : (s.setVolume(e), e || this.state.isMuted ? e && this.state.isMuted && this.setVideoMute(!1) : this.setVideoMute(!0)))
					}, this.onReplayVideo = () => {
						this.cancelSwitchingOnStreamEnded(), this.replayVideo()
					}, this.onScrubbing = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.showStreamEndedPrompt && this.playVideo()
					}, this.onShareVideo = () => {
						this.props.currentStream && this.props.sendEvent(Object(J.k)(this.props.currentStream, this.getPlaybackStats())), this.cancelSwitchingOnStreamEnded()
					}, this.onToggleMenu = () => {
						this.cancelSwitchingOnStreamEnded()
					}, this.getSessionDurationTimer = e => "session-duration-".concat(e), this.getWatchDurationTimer = e => "watch-duration-".concat(e), this.setVideoMute = e => {
						this.setState(() => ({
							isMuted: e
						}));
						const t = this.hlsVideoApi;
						if (!t) return;
						const s = e ? J.o : J.v;
						e || t.setVolume(this.props.volume), this.props.sendEvent(s(this.props.currentStream, this.getPlaybackStats()))
					}, this.goToSubreddit = e => {
						this.props.sendEvent(Object(J.m)(e, this.props.currentStream)), this.props.onNavigation(e.path)
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === te.a.LIVE || this.props.playbackState === te.a.VOD, this.state = {
						isUnavailableVideoJustFinished: !1,
						isVodStreamJustFinished: !1,
						isError: !1,
						isLoading: !0,
						isMuted: !1,
						isOverlayVisible: !1,
						isSwitchingOnStreamEndedScheduled: !1,
						isVideoPaused: !1,
						showStreamEndedPrompt: !1,
						videoCurrentTime: 0,
						videoTotalTime: 0,
						wasVideoPausedWhenOverlayOpened: !1,
						id: "",
						sessionDuration: 0,
						watchDuration: 0,
						heartbeatDurationOffset: 0,
						startTime: 0
					}, this.previouslyActiveElement = null, this.onAutoPlayPrevented = this.onAutoPlayPrevented.bind(this), this.onClose = this.onClose.bind(this), this.onEnded = this.onEnded.bind(this), this.onNextStream = this.onNextStream.bind(this), this.onPlayerError = this.onPlayerError.bind(this), this.onPreviousStream = this.onPreviousStream.bind(this), this.onReport = this.onReport.bind(this), this.onVideoPlayerLevelLoaded = this.onVideoPlayerLevelLoaded.bind(this), this.onVideoPlayerLoadedData = this.onVideoPlayerLoadedData.bind(this), this.onSendHeartbeat = this.onSendHeartbeat.bind(this), this.onVideoPlayerLoadingData = this.onVideoPlayerLoadingData.bind(this), this.onChatClick = this.onChatClick.bind(this), this.onUpvote = this.onUpvote.bind(this), this.onDownvote = this.onDownvote.bind(this), this.onVideoPlayerResourceRemoved = this.onVideoPlayerResourceRemoved.bind(this), this.scheduleSwitchingOnStreamEnded = this.scheduleSwitchingOnStreamEnded.bind(this)
				}
				componentDidMount() {
					const e = this.focusRef.current;
					e.classList.add(Ba.a.focusVisible), Object(O.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, y(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.inStreamingSubredditIntegration && this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(q.o)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream()
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						isIntroInProgress: s,
						isOverlay: a,
						isOverlayOpen: r,
						isReportFlowOpen: n,
						onHeartbeatSubscribe: i,
						onRecommendedViewerSubredditsSubscribe: o,
						onStatsSubscribe: c,
						playbackState: l,
						related: d,
						subreddit: m,
						subscribeConfig: u,
						subscribeStreams: p
					} = this.props;
					a || r === e.isOverlayOpen || (r ? (this.setState(e => {
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
					}), u().then(e => this.unsubscribeConfig = e), p().then(e => this.unsubscribeStreams = e), t && this.isCurrentStreamWatchable() && (i(t.post.id).then(e => this.unsubscribeHeartbeat = e), c(t.post.id).then(e => this.unsubscribeStats = e)), o().then(e => this.unsubscribeRecommendedViewerSubreddits = e)));
					const h = e.related || e.subreddit,
						b = d || m;
					if (e.currentStream && this.props.currentStream && e.currentStream.post.id !== this.props.currentStream.post.id && this.handleOldStream(), b !== h) return this.props.resetHistory(), this.handleNewStream(), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), void(t || this.setState({
						isLoading: !0
					}));
					!s && e.isIntroInProgress && this.handleNewStream(), s || e.isIntroInProgress || !Ga(t, e.currentStream) || this.handleNewStream(), this.state.isSwitchingOnStreamEndedScheduled || s || !(!t && !this.state.isLoading || l === te.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), s || t || this.state.isLoading || this.state.isError || this.setState(Object.assign({}, this.state, {
						isError: !0
					})), n && this.state.isVideoPaused && this.setState({
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
						inViewerFeedTheMeter: a,
						isIntroInProgress: r,
						isOverlay: n,
						isReportFlowOpen: o,
						location: c,
						nextStream: l,
						playbackState: m,
						previousStream: u,
						related: p,
						sendEvent: h,
						subreddit: b,
						unavailableVideoUrl: v,
						volume: g
					} = this.props, {
						isMuted: w,
						videoCurrentTime: C,
						videoTotalTime: S
					} = this.state, f = e && e.post.id, _ = s !== v, E = e && !e.post.subreddit, x = m === te.a.LIVE;
					let y, O, T, I;
					e && _ ? (y = 1e3 * e.broadcast_time, O = f, T = x, I = e.post.title) : (y = void 0, O = void 0, T = !1, I = "RPAN Unavailable Video");
					const L = e && e.meter && 10 * Math.round(e.estimated_remaining_time / 10),
						P = a && e && e.estimated_remaining_time < ne && !r,
						k = void 0 !== L && L >= 0 && P ? Ba.a["meterCritical".concat(L)] : void 0;
					return i.a.createElement("div", {
						className: Object(d.a)(Ba.a.theaterContainer, {
							[Ba.a.overlay]: n
						}),
						ref: this.focusRef,
						tabIndex: -1
					}, i.a.createElement("div", {
						className: Object(d.a)(Ba.a.panesWrapper, {
							[Ba.a.initialized]: !r
						})
					}, i.a.createElement("div", {
						className: Object(d.a)(Ba.a.pane, Ba.a.leftPane)
					}, i.a.createElement("div", {
						className: Ba.a.videoContainer
					}, (this.state.isLoading || this.state.isError || P) && i.a.createElement(na, {
						previousStream: u,
						currentStream: e,
						nextStream: l
					}), s && i.a.createElement("div", {
						className: k
					}, i.a.createElement(Fa, {
						autoplay: !0,
						controls: !1,
						startTime: t,
						isPaused: this.state.isVideoPaused,
						muted: w,
						muxVideoDuration: y,
						muxVideoId: O,
						muxVideoIsLive: T,
						muxVideoTitle: I,
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
					})), i.a.createElement(zs, {
						currentStreamId: f,
						isLoading: this.state.isLoading,
						isLive: x,
						isMuted: w,
						isPaused: this.state.isVideoPaused,
						isUnavailable: m === te.a.UNAVAILABLE,
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
						related: p,
						sendEvent: h,
						setVolume: this.onSetVolume,
						showErrorPrompt: this.state.isError,
						showStreamEndedPrompt: this.state.showStreamEndedPrompt,
						subreddit: b,
						toggleMute: this.onToggleMuteVideo,
						videoCurrentTime: C,
						videoTotalTime: S,
						volume: g
					}))), !r && i.a.createElement("div", {
						className: Object(d.a)(Ba.a.pane, Ba.a.rightPane)
					}, e && !E && i.a.createElement(ka, {
						location: c,
						onChatClick: this.onChatClick,
						postId: e.post.id,
						sendEvent: h,
						subredditId: e.post.subreddit.id
					}))), e && !r && i.a.createElement(Da, {
						nextStream: l,
						onNext: this.onNextStream,
						onPrevious: this.onPreviousStream,
						previousStream: u
					}), e && !r && n && i.a.createElement(Ka, {
						onClick: this.onClose
					}), e && !r && o && i.a.createElement(U.a, {
						useLiveStreamingFlow: !0,
						overlayCustomStyles: U.b,
						postId: e.post.id,
						timestamp: Math.trunc(C),
						withOverlay: !0
					}))
				}
				onVideoPlayerLevelLoaded(e) {
					const {
						currentStream: t,
						playbackState: s,
						receiveHlsStreamEnded: a
					} = this.props;
					this.state.videoTotalTime !== e.totalduration && this.setState({
						videoTotalTime: e.totalduration
					}), t && !e.live && 0 !== e.endSN && s === te.a.LIVE && a(t.post.id)
				}
				onVideoPlayerLoadingData() {
					this.setState({
						isLoading: !0,
						isError: !1
					})
				}
				onSendHeartbeat() {
					this.props.sendEvent(Object(J.r)(this.props.currentStream, this.getPlaybackStats())), this.setState({
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
						this.props.currentStream && (this.props.sendEvent(Object(J.u)(this.props.currentStream, this.getPlaybackStats())), this.startTimers())
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
					this.props.currentStream && this.props.sendEvent(Object(J.h)(this.props.currentStream, this.getPlaybackStats()))
				}
				onUpvote() {
					this.props.currentStream && this.props.sendEvent(Object(J.l)(this.props.currentStream, this.getPlaybackStats()))
				}
				onDownvote() {
					this.props.currentStream && this.props.sendEvent(Object(J.i)(this.props.currentStream, this.getPlaybackStats()))
				}
				onEnded() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						playbackState: s,
						sendEvent: a,
						setIntroFinishedStatus: r
					} = this.props;
					if (this.pauseWatch(), this.setState({
							isVideoPaused: !0
						}), t) return r(!0), void this.setState(Object.assign({}, this.state, {
						isLoading: !!e
					}));
					e && a(Object(J.s)(e, this.getPlaybackStats())), s !== te.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(J.t)(this.props.currentStream, this.getPlaybackStats())), this.setState(Object.assign({}, this.state, {
						isError: !0
					}))
				}
				onAutoPlayPrevented() {
					this.setState({
						isMuted: !0
					})
				}
				onClose() {
					this.props.sendEvent(Object(J.b)(this.props.currentStream, this.getPlaybackStats())), this.props.isOverlay && this.props.closeLocation()
				}
				onReport() {
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id), this.props.sendEvent(Object(J.j)(this.props.currentStream)))
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
					if (this.state.isMuted) return 0;
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
						playerType: J.a.Theater,
						heartbeatDurationMs: this.getWatchDuration() - this.state.heartbeatDurationOffset
					}
				}
				pauseVideo() {
					if (this.state.isVideoPaused) return;
					const e = this.pauseWatch();
					this.setState({
						watchDuration: e
					}, () => {
						this.props.sendEvent(Object(J.c)(this.props.currentStream, this.getPlaybackStats()))
					}), this.setState({
						isVideoPaused: !0
					})
				}
				playVideo() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
						sendEvent: !0
					};
					this.state.isVideoPaused && (this.startWatch(), e.sendEvent && this.props.sendEvent(Object(J.d)(this.props.currentStream, this.getPlaybackStats())), this.hideStreamEndedPrompt(), this.setState({
						isVideoPaused: !1
					}))
				}
				replayVideo() {
					this.props.sendEvent(Object(J.e)(this.props.currentStream, this.getPlaybackStats())), this.onVideoPlayerPositionUpdate(0), this.playVideo({
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
						s && !e && !Object(se.a)(t) && this.state.isSwitchingOnStreamEndedScheduled ? this.goToStream(s) : this.cancelSwitchingOnStreamEnded()
					}, P.k), this.setState(Object.assign({}, this.state, {
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
						const t = Object(X.c)(e),
							a = s ? "?related=".concat(s) : "";
						return "".concat(t).concat(a)
					}
					return Object(X.e)(e.post.id)
				}
				goToStream(e) {
					const {
						onNavigation: t,
						visitStream: s
					} = this.props, a = e.post.id;
					this.cancelSwitchingOnStreamEnded(), this.hideStreamEndedPrompt(), s(a), this.setState({
						isLoading: !0,
						isVideoPaused: !1
					}), t(this.getStreamLocation(e))
				}
				handleOldStream() {
					this.props.sendEvent(Object(J.r)(this.props.currentStream, this.getPlaybackStats())), this.endTimers()
				}
				async handleNewStream() {
					const {
						currentStream: e,
						fetchBroadcasterProfileInfo: t,
						fetchPostForStream: s,
						visitStream: a
					} = this.props;
					e && (this.setState({
						videoCurrentTime: 0,
						videoTotalTime: 0,
						watchDuration: 0
					}), a(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), s(e.post.id), e.post.authorInfo && e.post.authorInfo.name && t(e.post.authorInfo.name), this.syncLocationWithCurrentStreamId(), this.props.sendEvent(Object(J.w)(e)), this.setConsumePostTimeout(), this.showOverlayAfterStreamSwitching())
				}
				setConsumePostTimeout() {
					window.clearTimeout(this.consumePostTimeout), this.consumePostTimeout = window.setTimeout(() => this.props.sendEvent(Object(J.n)(this.props.currentStream)), g.a.telemetry.postConsumedThreshold)
				}
				showOverlayAfterStreamSwitching() {
					window.clearTimeout(this.overlayVisibilityTimeout), this.overlayVisibilityTimeout = window.setTimeout(() => this.setState({
						isOverlayVisible: !1
					}), P.n), this.setState({
						isOverlayVisible: !0
					})
				}
				syncLocationWithCurrentStreamId() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						onNavigation: s,
						streamIdFromPath: a
					} = this.props;
					if (!e || t) return;
					const r = !a || Object(X.a)(e.post.id) === a;
					s(this.getStreamLocation(e), r)
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
			const Ka = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: Ba.a.closeButton,
						onClick: t,
						"aria-label": w.fbt._("close button", null, {
							hk: "2l5YIS"
						})
					}, i.a.createElement(z.a, {
						className: Ba.a.closeIcon
					}))
				},
				Ga = (e, t) => (e && e.post.id) !== (t && t.post.id);
			var Ya = Ua(Object(W.c)(Wa)),
				Xa = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Ja = s("./src/reddit/helpers/overlay/index.ts"),
				qa = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				za = s.n(qa);
			const {
				fbt: Za
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Qa = Object(l.c)({
				isEnabled: Z.a,
				isIntroInProgress: se.b,
				isOnboardingModal: e => e.publicAccessNetwork.userSettings.shouldShowOnboardingModal && !0,
				related: (e, t) => {
					let {
						location: s,
						match: a
					} = t;
					const n = r()([...Object(m.a)(s.search)]).related,
						{
							subredditName: i
						} = a.params;
					return "home" === n || "r/popular" === n ? n : "popular" === i ? "r/popular" : i ? void 0 : "home"
				}
			}), $a = Object(o.b)(Qa, (e, t) => ({
				onOpenLoginModal: () => e(Object(u.g)()),
				onStreamByIdRequested: t => e(Object(p.d)(t)),
				updateLocation: (t, s) => {
					let {
						isOverlay: a,
						useReplace: r
					} = s;
					const n = r ? c.c : c.b,
						i = a ? Object(Ja.b)(t) : t;
					e(n(i))
				}
			}));
			class er extends i.a.Component {
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
						updateLocation: a
					} = this.props;
					a(e, {
						isOverlay: s,
						useReplace: t
					})
				}
				render() {
					const {
						isEnabled: e,
						isIntroInProgress: t,
						isOnboardingModal: s,
						isOverlay: a,
						location: r,
						match: n,
						related: o
					} = this.props, {
						subredditName: c,
						partialPostId: l
					} = n.params;
					return e ? i.a.createElement("div", {
						className: Object(d.a)(za.a.rpanContainer, {
							[za.a.overlay]: a
						})
					}, i.a.createElement(Ya, {
						isOverlay: !!a,
						location: r,
						onNavigation: this.onNavigation,
						related: o,
						streamIdFromPath: l,
						subreddit: c && "r/".concat(c)
					}), s && !t && i.a.createElement(v, null)) : i.a.createElement(tr, null)
				}
			}
			const tr = () => i.a.createElement("div", {
				className: Object(d.a)(za.a.rpanContainer, za.a.forbiddenScreen)
			}, i.a.createElement("h2", null, Za._("Not Found", null, {
				hk: "2ijDv5"
			})));
			t.default = $a(Object(W.c)(Object(Xa.b)(er)))
		},
		"./src/reddit/selectors/experiments/goldRpanLivePreview.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts");
			const n = e => {
				return Object(r.c)(e, {
					experimentEligibilitySelector: r.a,
					experimentName: a.ib
				}) === a.rb.Enabled
			}
		}
	}
]);
//# sourceMappingURL=PublicAccessNetwork.99f491a91c69e1c16c01.js.map