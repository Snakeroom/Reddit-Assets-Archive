// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.309309f7e05f342a350c.js
// Retrieved at 10/13/2020, 4:10:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PublicAccessNetwork", "removalReasonActions"], {
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
					var n, o = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						r = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						c = !i && /nexus\s*[0-9]+/i.test(t),
						l = /CrOS/.test(t),
						d = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						v = !o && !d && /macintosh/i.test(t),
						g = !r && !m && !u && !p && /linux/i.test(t),
						w = a(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						f = s(/version\/(\d+(\.\d+)?)/i),
						C = /tablet/i.test(t) && !/tablet pc/i.test(t),
						_ = !C && /[^-]mobi/i.test(t),
						S = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: f || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || f
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: f || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: f || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: f || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /ucbrowser/i.test(t) ? n = {
						name: "UC Browser",
						ucbrowser: e,
						version: s(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
					} : /mxios/i.test(t) ? n = {
						name: "Maxthon",
						maxthon: e,
						version: s(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
					} : /epiphany/i.test(t) ? n = {
						name: "Epiphany",
						epiphany: e,
						version: s(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
					} : /puffin/i.test(t) ? n = {
						name: "Puffin",
						puffin: e,
						version: s(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
					} : /sleipnir/i.test(t) ? n = {
						name: "Sleipnir",
						sleipnir: e,
						version: s(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
					} : /k-meleon/i.test(t) ? n = {
						name: "K-Meleon",
						kMeleon: e,
						version: s(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
					} : h ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, w ? (n.msedge = e, n.version = w) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : l ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: w
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || f
					} : m ? n = {
						name: "Sailfish",
						osname: "Sailfish OS",
						sailfish: e,
						version: s(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
					} : /seamonkey\//i.test(t) ? n = {
						name: "SeaMonkey",
						seamonkey: e,
						version: s(/seamonkey\/(\d+(\.\d+)?)/i)
					} : /firefox|iceweasel|fxios/i.test(t) ? (n = {
						name: "Firefox",
						firefox: e,
						version: s(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e, n.osname = "Firefox OS")) : d ? n = {
						name: "Amazon Silk",
						silk: e,
						version: s(/silk\/(\d+(\.\d+)?)/i)
					} : /phantom/i.test(t) ? n = {
						name: "PhantomJS",
						phantom: e,
						version: s(/phantomjs\/(\d+(\.\d+)?)/i)
					} : /slimerjs/i.test(t) ? n = {
						name: "SlimerJS",
						slimer: e,
						version: s(/slimerjs\/(\d+(\.\d+)?)/i)
					} : /blackberry|\bbb\d+/i.test(t) || /rim\stablet/i.test(t) ? n = {
						name: "BlackBerry",
						osname: "BlackBerry OS",
						blackberry: e,
						version: f || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: f || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || f
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || f
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || f
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : r ? n = {
						name: "Android",
						version: f
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, f && (n.version = f)) : o ? (n = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, f && (n.version = f)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || f
					} : {
						name: s(/^(.*)\/(.*) /),
						version: a(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && f && (n.version = f)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !r && !n.silk ? !n.windowsphone && o ? (n[o] = e, n.ios = e, n.osname = "iOS") : v ? (n.mac = e, n.osname = "macOS") : S ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : g && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var x = "";
					n.windows ? x = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? x = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? x = (x = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? x = (x = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : r ? x = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? x = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? x = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? x = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (x = s(/tizen[\/\s](\d+(\.\d+)*)/i)), x && (n.osversion = x);
					var E = !n.windows && x.split(".")[0];
					return C || c || "ipad" == o || r && (3 == E || E >= 4 && !_) || n.silk ? n.tablet = e : (_ || "iphone" == o || "ipod" == o || r || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function a(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, a = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) a.push(t(e[s]));
					return a
				}

				function o(e) {
					for (var t = Math.max(a(e[0]), a(e[1])), s = n(e, (function(e) {
							var s = t - a(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function r(e, a, n) {
					var r = s;
					"string" == typeof a && (n = a, a = void 0), void 0 === a && (a = !1), n && (r = t(n));
					var i = "" + r.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && r[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([i, e[c]]) < 0
						} return a
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var a = e[t];
						if ("string" == typeof a && a in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = r, s.compareVersions = o, s.check = function(e, t, s) {
					return !r(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = a() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", a)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var a = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), a(n(e), t, s)
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
				n = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/cache/localStorage/index.ts"),
				c = s("./src/lib/combineRefs/index.tsx"),
				l = s("./src/lib/loadWithRetries/index.ts"),
				d = () => Object(l.a)(() => s.e("vendors~MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(r.a)(e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.xb
				});
				return Object(m.Cc)(t) ? void 0 : t
			}, e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.yb
				});
				return Object(m.Cc)(t) ? void 0 : t
			}, (e, t) => e === m.zb.Enabled && t === m.zb.Enabled);
			var h = s("./src/config.ts");
			var b = s("./src/reddit/selectors/user.ts");
			s("./node_modules/core-js/modules/es6.regexp.to-string.js"), s("./node_modules/core-js/modules/es6.regexp.replace.js");
			const v = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						a = new Uint32Array(e);
					return crypto.getRandomValues(a), Array.from(a).map(e => t.charAt(e % s)).join("")
				},
				g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				w = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var f;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(f || (f = {}));
			const C = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					a = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(a)).map(w).join("")
			})(f.SHA1, e);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var S = function(e, t) {
				var s = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (s[a[n]] = e[a[n]])
				}
				return s
			};
			const x = (e => t => ((e, t) => "".concat(e, "(").concat((e => e.displayName || e.name || "Component")(t), ")"))(e, t))("WithMux"),
				E = Object({
					SENTRY_RELEASE_VERSION: "fce30ec-production"
				}),
				y = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: h.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: "Reddit/Version Build ".concat(E.SENTRY_RELEASE_VERSION, " ").concat(h.a.appName),
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: l,
					disableCookies: m,
					envKey: u,
					localStorageSaltKey: h,
					localStorageViewerUserIdKey: w,
					playerName: f,
					playerVersion: E,
					respectDoNotTrack: O,
					saltLength: k,
					saltTimeToLive: I,
					viewerUserIdLength: R
				} = Object.assign(Object.assign({}, y), t);
				class T extends a.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(a.createRef)(), this.handleDashCreate = e => {
							this.setDashInstance(e)
						}, this.handleDashDestroy = () => {
							this.setDashInstance(null)
						}, this.handleHlsCreate = e => {
							this.setHlsInstance(e)
						}, this.handleHlsDestroy = () => {
							this.setHlsInstance(null)
						}, this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
						this.props.muxVideoId !== e.muxVideoId && this.doMuxThings(), this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef))
					}
					combineExternalVideoRef(e) {
						return e ? Object(c.a)(this.videoRef, e) : this.videoRef
					}
					render() {
						const t = this.props,
							{
								forwardedRef: s
							} = t,
							a = S(t, ["forwardedRef"]);
						return n.a.createElement(e, _({}, a, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: s,
							videoRef: this.combinedVideoRefs
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const e = await d();
							e.removeDashJS(this.video), this.dashInstance && e.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const e = await d();
							e.removeHLSJS(this.video), this.hlsInstance && e.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await d();
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
						const e = this.props.redditUserId || T.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = g(),
							a = "".concat(s).concat(e).concat(t);
						return (await C(a)).substr(0, T.VIEWER_USER_ID_LENGTH)
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
						return Object.assign(Object.assign({
							debug: T.DEBUG,
							disableCookies: T.DISABLE_COOKIES,
							respectDoNotTrack: T.RESPECT_DO_NOT_TRACK
						}, s), {
							data: Object.assign(Object.assign({
								env_key: T.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: T.PLAYER_NAME,
								player_version: T.PLAYER_VERSION
							}, t), {
								viewer_user_id: e
							})
						})
					}
					getOrCreateSalt() {
						const e = T.LOCAL_STORAGE_SALT_KEY;
						let t = Object(i.a)(e);
						return t || (t = v(T.SALT_LENGTH), Object(i.b)(e, t, T.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return Object.assign(Object.assign({}, this.getDashInstanceData()), this.getHlsInstanceData())
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: a
						} = this.props;
						return {
							video_duration: s ? T.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? T.STREAM_TYPE_LIVE : T.STREAM_TYPE_ON_DEMAND,
							video_title: a
						}
					}
				}
				T.displayName = x(e), T.ANONYMOUS_USER_ID = s, T.DEBUG = l, T.DISABLE_COOKIES = m, T.DURATION_LIVE = 1 / 0, T.ENV_KEY = u, T.LOCAL_STORAGE_SALT_KEY = h, T.LOCAL_STORAGE_VIEWER_USER_ID_KEY = w, T.PLAYER_NAME = f, T.PLAYER_VERSION = E, T.RESPECT_DO_NOT_TRACK = O, T.SALT_LENGTH = k, T.SALT_TIME_TO_LIVE = I, T.STREAM_TYPE_LIVE = "live", T.STREAM_TYPE_ON_DEMAND = "on-demand", T.VIEWER_USER_ID_LENGTH = R;
				const M = Object(a.forwardRef)((e, t) => n.a.createElement(T, _({}, e, {
						forwardedRef: t
					}))),
					N = Object(r.c)({
						redditUserId: b.g,
						isMuxEnabled: p
					});
				return Object(o.b)(N, null, null, {
					forwardRef: !0
				})(M)
			}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var a = s("./src/config.ts"),
				n = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(n.e)(e),
					r = encodeURIComponent("".concat(t).concat(o));
				return "".concat(a.a.accountManagerOrigin).concat(s || "/login", "?dest=").concat(r)
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var a = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/bulkActions/constants.ts");
			const o = Object(a.a)(n.c),
				r = Object(a.a)(n.b),
				i = Object(a.a)(n.a)
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
				n = s.n(a),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(o.a)(r.B),
				c = e => async t => {
					t(i(e))
				}, l = () => async e => {
					e(i({
						lastChatActivityUtcTs: Date.now()
					}))
				}, d = () => async e => {
					e(i({
						correlationId: n()()
					}))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return T
			})), s.d(t, "removalReasonsLoaded", (function() {
				return M
			})), s.d(t, "removalReasonsFailed", (function() {
				return N
			})), s.d(t, "removalReasonsRequested", (function() {
				return j
			})), s.d(t, "removalReasonAddedPending", (function() {
				return P
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return L
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return A
			})), s.d(t, "addRemovalReason", (function() {
				return D
			})), s.d(t, "editRemovalReasonPending", (function() {
				return V
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return B
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return F
			})), s.d(t, "editRemovalReason", (function() {
				return H
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return U
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return W
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return K
			})), s.d(t, "deleteRemovalReason", (function() {
				return G
			})), s.d(t, "removedItemsSelected", (function() {
				return Y
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return X
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return J
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return z
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return q
			})), s.d(t, "removalReasonMessagePending", (function() {
				return Z
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Q
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return $
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return ee
			})), s.d(t, "submitRemovalReason", (function() {
				return te
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return se
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeCommentsPageKey/index.ts"),
				i = s("./src/lib/makeDraftKey/index.ts"),
				c = s("./src/reddit/actions/bulkActions/index.ts"),
				l = s("./src/reddit/actions/comment/index.ts"),
				d = s("./src/reddit/actions/modal.ts"),
				m = s("./src/reddit/actions/post.ts"),
				u = s("./src/reddit/actions/toaster.ts"),
				p = s("./src/reddit/constants/modals.ts"),
				h = s("./src/lib/makeApiRequest/index.ts"),
				b = s("./src/lib/omitHeaders/index.ts"),
				v = s("./src/reddit/constants/headers.ts"),
				g = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const w = (e, t) => Object(h.a)(Object(b.a)(e, [v.a]), {
					endpoint: "".concat(e.apiUrl, "/api/v1/modactions/removal_reasons/"),
					method: n.db.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				f = (e, t, s) => Object(h.a)(Object(b.a)(e, [v.a]), {
					endpoint: Object(g.a)("".concat(e.apiUrl, "/api/v1/modactions/removal_").concat(s, "_message/")),
					method: n.db.POST,
					type: "json",
					data: t
				});
			var C = s("./src/reddit/helpers/isPost.ts"),
				_ = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				S = s("./src/reddit/helpers/routeKey/index.ts"),
				x = s("./src/reddit/models/ModQueue/index.ts"),
				E = s("./src/reddit/models/PostDraft/index.ts"),
				y = s("./src/reddit/models/RemovalReason/index.ts"),
				O = s("./src/reddit/models/Toast/index.ts"),
				k = s("./src/reddit/selectors/comments.ts"),
				I = s("./src/reddit/selectors/platform.ts"),
				R = s("./src/reddit/actions/removalReasons/constants.ts");
			const T = Object(o.a)(R.k),
				M = Object(o.a)(R.l),
				N = Object(o.a)(R.j),
				j = e => async (t, s, a) => {
					let {
						apiContext: o
					} = a;
					const r = s().subreddits.models[e].name;
					t(T());
					const i = await ((e, t) => Object(h.a)(Object(b.a)(e, [v.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons.json"),
						method: n.db.GET
					}))(o(), r);
					i.ok ? t(M({
						subredditId: e,
						response: i.body
					})) : t(N(i.error))
				}, P = Object(o.a)(R.b), L = Object(o.a)(R.c), A = Object(o.a)(R.a), D = (e, t) => async (s, o, r) => {
					let {
						apiContext: i
					} = r;
					const c = o().subreddits.models[e].name;
					s(P());
					const l = await ((e, t, s) => Object(h.a)(Object(b.a)(e, [v.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons"),
						method: n.db.POST,
						data: s
					}))(i(), c, t);
					if (l.ok) {
						const {
							id: n
						} = l.body, o = Object.assign(Object.assign({}, t), {
							id: n
						});
						s(L({
							subredditId: e,
							reason: o
						})), s(Object(u.e)({
							kind: O.b.SuccessMod,
							text: a.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(A(l.error))
				}, V = Object(o.a)(R.h), B = Object(o.a)(R.i), F = Object(o.a)(R.g), H = (e, t) => async (s, o, r) => {
					let {
						apiContext: i
					} = r;
					const c = o().subreddits.models[e].name;
					s(V());
					const l = await ((e, t, s) => Object(h.a)(Object(b.a)(e, [v.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(s.id),
						method: n.db.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(i(), c, t);
					l.ok ? (s(B({
						subredditId: e,
						reason: t
					})), s(Object(u.e)({
						kind: O.b.SuccessMod,
						text: a.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(F(l.error))
				}, U = Object(o.a)(R.e), W = Object(o.a)(R.f), K = Object(o.a)(R.d), G = (e, t) => async (s, o, r) => {
					let {
						apiContext: i
					} = r;
					const c = o().subreddits.models[e].name;
					s(U());
					const l = await ((e, t, s) => Object(h.a)(Object(b.a)(e, [v.a]), {
						endpoint: "".concat(e.apiUrl, "/api/v1/").concat(t, "/removal_reasons/").concat(s),
						method: n.db.DELETE
					}))(i(), c, t);
					l.ok ? (s(W({
						subredditId: e,
						reasonId: t
					})), s(Object(u.e)({
						kind: O.b.SuccessMod,
						text: a.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(K(l.error))
				}, Y = Object(o.a)(R.t), X = (e, t) => async (s, a, n) => {
					let {
						apiContext: o
					} = n;
					const r = a();
					r.removalReasons.reasonOrder[e] && r.removalReasons.reasonOrder[e].length > 0 || s(j(e)), s(Y({
						subredditId: e,
						itemIds: t
					})), s(Object(d.i)(p.a.ADD_REMOVAL_REASON))
				}, J = Object(o.a)(R.r), z = Object(o.a)(R.s), q = Object(o.a)(R.q), Z = Object(o.a)(R.n), Q = Object(o.a)(R.o), $ = Object(o.a)(R.p), ee = Object(o.a)(R.m), te = (e, t, s, a, o) => async (c, d, u) => {
					let {
						apiContext: p
					} = u;
					const h = d(),
						b = h.user.account && h.user.account.displayText,
						v = e[0],
						g = Object(C.a)(v) ? y.e.Post : y.e.Comment,
						x = g === y.e.Post ? h.posts.models[v] : h.comments.models[v],
						O = g === y.e.Post ? m.J : l.R;
					if (!x || !b) return !1;
					c(J()), c(O({
						[v]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: b
						}
					}));
					const R = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						T = await w(p(), R);
					if (T.ok) {
						if (c(z()), t) {
							c(Z());
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: a
								},
								d = await f(p(), Object(y.h)(o, g), g);
							if (d.ok) {
								if (a === y.f.Public) {
									if (c($()), d.body) {
										const e = Object(_.a)(d.body, b),
											t = {
												comment: e,
												parentId: v
											},
											s = Object(I.g)(h),
											a = h.platform.currentPage && h.platform.currentPage.routeMatch;
										let o = s && a && Object(S.a)(a, h, h.posts.models[e.postId]);
										if (o || (o = Object(r.a)(e.postId, null, {
												sort: n.s,
												hasSortParam: !0
											})), g === y.e.Post) {
											const s = Object(i.a)(E.c.replyToPost, v);
											c(Object(l.mb)(Object.assign(Object.assign({}, t), {
												headCommentId: Object(k.x)(h, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: s
											})));
											const a = h.postStickiedComments.data[v];
											c(Object(l.ib)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), a && a !== e.id && c(Object(l.R)({
												[a]: {
													isStickied: !1
												}
											}))
										} else if (g === y.e.Comment) {
											const e = Object(i.a)(E.c.replyToComment, x.id),
												s = Object(k.j)(h, {
													commentId: v,
													commentsPageKey: o
												});
											c(Object(l.kb)(Object.assign(Object.assign({}, t), {
												parentCommentId: v,
												commentsPageKey: o,
												draftKey: e,
												depth: s + 1
											})))
										}
									}
								} else c(Q());
								return !0
							}
							return c(ee(d.error)), !1
						}
					} else c(q(T.error)), c(O({
						[v]: {
							modNote: x.modNote,
							modRemovalReason: x.modRemovalReason,
							modReasonBy: x.modReasonBy
						}
					}));
					return !1
				}, se = (e, t, s, n, o) => async (r, i, l) => {
					let {
						apiContext: d
					} = l;
					const m = i(),
						p = m.user.account && m.user.account.displayText;
					if (!p) return;
					r(J());
					const h = Object(u.e)({
							kind: O.b.SuccessMod,
							text: a.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [a.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						b = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						v = await w(d(), b);
					if (v.ok) {
						const a = {
							ids: e,
							operation: x.a.RemovalReason,
							username: p,
							options: {
								modNote: o,
								removalReason: t && t.title
							}
						};
						if (r(Object(c.b)(a)), t) {
							const a = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								o = await f(d(), Object(y.h)(a, y.e.Bulk), y.e.Bulk);
							o.ok ? (r(Q()), r(h)) : r(ee(o.error))
						} else r(h)
					} else r(q(v.error))
				}
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, s) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				c = s.n(i);
			const {
				fbt: l
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => n.a.createElement(r.b, {
				className: Object(o.a)(e.className, c.a.container, e.text.length >= e.maxChars ? c.a.mOverflow : null)
			}, l._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [l._plural(e.maxChars - e.text.length, "characters")], {
				hk: "V22sW"
			}))
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
				n = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/isSimpleClick/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/loginHref/index.ts"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				u = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				p = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = i.a.div("Wrapper", p.a), v = i.a.span("Copy", p.a), g = i.a.wrapped(d.j, "SignupLink", p.a), w = i.a.wrapped(d.m, "LoginLink", p.a);
			t.a = Object(l.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: a,
					openLoginModal: i,
					openRegisterModal: l,
					origin: d,
					sendEvent: u
				} = e;
				return n.a.createElement(b, {
					className: Object(o.a)(t, {
						[p.a.LiveStreamingWrapper]: s
					})
				}, n.a.createElement(v, {
					className: Object(o.a)({
						[p.a.LiveStreamingCopy]: s
					})
				}, h._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), n.a.createElement(w, {
					href: Object(c.a)(a, d, "/login"),
					onClick: e => {
						Object(r.a)(e) && (e.preventDefault(), e.stopPropagation(), i(), u(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, h._("log in", null, {
					hk: "37jFXB"
				})), n.a.createElement(g, {
					className: Object(o.a)({
						[p.a.LiveStreamingSignupLink]: s
					}),
					href: Object(c.a)(a, d, "/register"),
					onClick: e => {
						Object(r.a)(e) && (e.preventDefault(), e.stopPropagation(), l(), u(Object(m.c)("user_convert")))
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
				n = s("./node_modules/lodash/memoize.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				c = s("./src/lib/constants/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				d = ["FF4500", "0DD3BB", "24A0ED", "FFB000", "FF8717", "46D160", "25B79F", "0079D3", "4856A3", "C18D42", "A06A42", "46A508", "008985", "7193FF", "7E53C1", "FFD635", "DDBD37", "D4E815", "94E044", "FF66AC", "DB0064", "FF585B", "EA0027", "A5A4A4", "545452"],
				m = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				u = s.n(m);
			const p = l.a.div("Userpic", u.a);
			t.a = o()(e => {
				const {
					userId: t
				} = e, {
					processingAvatarImageUrl: s
				} = a.a, n = (e => e.replace(c.yb.Account + "_", ""))(t), {
					avatar: o,
					color: r
				} = (e => {
					const t = d.length,
						s = parseInt(e, 36),
						a = s % 20 + 1,
						n = Math.floor(s / 20) % t;
					return {
						avatar: ("0" + a).slice(-2),
						color: d[n]
					}
				})(n), l = "".concat(s, "/avatar_default_").concat(o, "_").concat(r, ".png");
				return i.a.createElement(p, {
					style: {
						backgroundImage: "url(".concat(l, ")"),
						backgroundColor: "#".concat(r)
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
				n = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				l = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				d = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				m = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				u = s.n(m);
			const p = i.a.img("Userpic", u.a),
				h = Object(r.c)({
					account: e => e.user.account
				}),
				b = Object(o.b)(h);
			t.a = i.a.wrapped(b(e => {
				let {
					account: t,
					className: s,
					height: a,
					isLivestreaming: o,
					trash: r,
					userId: i,
					width: m
				} = e;
				const h = o ? 36 : 20,
					b = {
						height: a || h,
						width: m || h,
						minWidth: m || h
					};
				return r ? n.a.createElement("div", {
					className: s,
					style: b
				}, n.a.createElement(d.a, {
					className: u.a.TrashIcon
				})) : i ? n.a.createElement("div", {
					className: s,
					style: b
				}, t && t.accountIcon && t.id === i ? n.a.createElement(p, {
					src: t.accountIcon,
					alt: "user icon"
				}) : n.a.createElement(c.a, {
					userId: i
				})) : n.a.createElement("div", {
					className: s,
					style: b
				}, t && t.accountIcon && !o ? n.a.createElement(p, {
					src: t.accountIcon,
					alt: "user icon"
				}) : n.a.createElement(l.a, {
					className: u.a.ProfileIcon
				}))
			}), "ChatIcon", u.a)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(a.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Prof~d6dc9580"), s.e("ChatPost~ModQueuePages"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
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
			t.a = n
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
				n = s.n(a),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				l = s.n(c);
			const d = r.a.div("LoaderWrapper", l.a),
				m = r.a.div("Icon", l.a),
				u = r.a.div("Byline", l.a),
				p = Object(o.a)({
					ErrorComponent: () => n.a.createElement(d, null, n.a.createElement(m, null), n.a.createElement(u, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~FramedGild~GildModal~GovernanceRelease~05e09478"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : n.a.createElement(d, null, n.a.createElement(m, null), n.a.createElement(u, null))
					}
				});
			t.a = e => n.a.createElement(p, e)
		},
		"./src/reddit/components/CommentsChat/MessageInput/MutedMessageInput.m.less": function(e, t, s) {
			e.exports = {
				FormBackground: "RC1x6aHRffvqf7VGCFZE7",
				formBackground: "RC1x6aHRffvqf7VGCFZE7",
				FormLine: "_3ztIZ_soV1oB0_2V4tAqYp",
				formLine: "_3ztIZ_soV1oB0_2V4tAqYp",
				InputLine: "JBVpqv0w-wIwNxXH9PO84",
				inputLine: "JBVpqv0w-wIwNxXH9PO84",
				Text: "_1LfRcWtoPCF5ugZjBaiuQW",
				text: "_1LfRcWtoPCF5ugZjBaiuQW",
				SendIcon: "_3igLQFt0eRxuWHQWHLPosF",
				sendIcon: "_3igLQFt0eRxuWHQWHLPosF",
				InfoIcon: "_2pRpE5oJOQrNwAS5OipItc",
				infoIcon: "_2pRpE5oJOQrNwAS5OipItc"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.m.less": function(e, t, s) {
			e.exports = {
				buttonWidth: "ogOEj4x-0BpDZWeccJwxx",
				ModalText: "_2YxEi97B6Nm7NCgLG6pCud",
				modalText: "_2YxEi97B6Nm7NCgLG6pCud"
			}
		},
		"./src/reddit/components/ConfirmUserActionModal/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				c = s("./src/reddit/controls/TextButton/index.tsx"),
				l = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				d = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(d);
			const u = e => e.preventDefault();
			t.a = Object(r.a)(e => o.a.createElement(i.d, null, o.a.createElement(i.h, null, o.a.createElement(l.a, null, o.a.createElement(i.p, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), o.a.createElement(c.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, o.a.createElement(i.b, null)))), o.a.createElement(i.k, null, o.a.createElement(i.o, {
				className: m.a.ModalText
			}, e.modalText)), o.a.createElement(i.f, null, !e.hideCancelButton && o.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), o.a.createElement(i.t, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.actionText))))
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
				return S
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
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
				f = Object(m.a)(w),
				C = l.a.button("MenuButton", g.a),
				_ = l.a.wrapped(h.a, "MenuIcon", g.a),
				S = l.a.wrapped(p.b, "DropdownRow", g.a),
				x = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(b.b)(s)(e)
					}
				}),
				E = Object(r.b)(x, (e, t) => {
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
			t.b = E(e => o.a.createElement(C, {
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
			}, e.icon ? e.icon : o.a.createElement(_, null), o.a.createElement(f, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/ChatMute/index.m.less": function(e, t, s) {
			e.exports = {
				Button: "_2N03en-1hKSWiv1t19ZKG",
				button: "_2N03en-1hKSWiv1t19ZKG",
				ModalHeader: "vQpCIRoCQpqZZMhzV5pxK",
				modalHeader: "vQpCIRoCQpqZZMhzV5pxK",
				Link: "_2dGXy-vdP4qZ4_rM8YoxQa",
				link: "_2dGXy-vdP4qZ4_rM8YoxQa",
				ModalFooter: "_1SA_yROMzBC2xZ8UwIiw7o",
				modalFooter: "_1SA_yROMzBC2xZ8UwIiw7o",
				Title: "qTLc9SM-wTQjYOjoSg0pW",
				title: "qTLc9SM-wTQjYOjoSg0pW",
				SubTitle: "_3ScWa1YMrvOJHK_Bke7iLV",
				subTitle: "_3ScWa1YMrvOJHK_Bke7iLV",
				ModalMain: "yp1VmGmZtd7oHY8_6S-4s",
				modalMain: "yp1VmGmZtd7oHY8_6S-4s",
				Image: "_16op4npNx1KkLNRDSSRwEB",
				image: "_16op4npNx1KkLNRDSSRwEB",
				ModalText: "SKC5dOFw80sCsJdP5n0_d",
				modalText: "SKC5dOFw80sCsJdP5n0_d"
			}
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/EndBroadcast/EndBroadcastStyles.m.less": function(e, t, s) {
			e.exports = {
				EndBroadcastMessageInput: "_2m1DI8ycgdiC8NTu3V708K",
				endBroadcastMessageInput: "_2m1DI8ycgdiC8NTu3V708K",
				EndBroadcastModalFooter: "_1RM2TFGQZBN3MqD3VKMngq",
				endBroadcastModalFooter: "_1RM2TFGQZBN3MqD3VKMngq",
				MessageHeader: "_7i88xKOTFWbNBxGnzvD9c",
				messageHeader: "_7i88xKOTFWbNBxGnzvD9c"
			}
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
				endBroadcastItem: "_1ZSrZdjsokjz4UfFGhHFJK",
				endBroadcastIcon: "Nqg4E3olZnnFBq1hDMd1l",
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
				headerItem: "_1pvWMzMb_uz-A-2Si3SoIl",
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
		"./src/reddit/components/PublicAccessNetwork/Theater/VisualEffectScreen/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1aOgdrnO2MSBAtzoOxpxZq",
				static: "_1ZIY7mYqRj_y6DMJbX5ytS",
				noise: "wNd3BfljscNJtL1turBKy",
				preview: "_1L9jXHNc52Qlp__ktgAXjd",
				loading: "HZckkZbcn3F04tqSALljv"
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
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less": function(e, t, s) {
			e.exports = {
				DisplayContainer: "_3B7pbtNVM5jh1ozdZuJTfI",
				displayContainer: "_3B7pbtNVM5jh1ozdZuJTfI",
				DropdownLabel: "_3MKcNYjenRkpopz-m6f8hM",
				dropdownLabel: "_3MKcNYjenRkpopz-m6f8hM",
				ReasonTitle: "_1Ecdul4Q_dxU9eOJXmoQuK",
				reasonTitle: "_1Ecdul4Q_dxU9eOJXmoQuK",
				Dropdown: "_3z_HE15Esmqgf6bBaj3Epi",
				dropdown: "_3z_HE15Esmqgf6bBaj3Epi",
				DropdownTriangle: "_2BZTmZOOcbQzMo7VdN3KB-",
				dropdownTriangle: "_2BZTmZOOcbQzMo7VdN3KB-",
				DropdownRow: "_3AVzUedTbFNFyaVtzLzahr",
				dropdownRow: "_3AVzUedTbFNFyaVtzLzahr",
				DropdownContainer: "_33sg6HoBYll4rCDqRzRUdu",
				dropdownContainer: "_33sg6HoBYll4rCDqRzRUdu"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/index.tsx"),
				c = s("./src/reddit/controls/Dropdown/Row.tsx"),
				l = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				d = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less"),
				u = s.n(m);
			const p = r.a.wrapped(d.a, "DisplayContainer", u.a),
				h = r.a.div("DropdownLabel", u.a),
				b = r.a.div("ReasonTitle", u.a),
				v = e => o.a.createElement(p, null, o.a.createElement(h, null, e.dropdownLabel), e.selectedReason && o.a.createElement(b, null, e.selectedReason)),
				g = r.a.wrapped(i.a, "Dropdown", u.a),
				w = r.a.wrapped(l.b, "DropdownTriangle", u.a),
				f = r.a.wrapped(c.b, "DropdownRow", u.a),
				C = r.a.button("DropdownContainer", u.a);
			t.a = e => o.a.createElement(C, {
				onClick: e.onToggleDropdown
			}, o.a.createElement(v, {
				dropdownLabel: e.isLoading ? a.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : a.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), o.a.createElement(w, null), e.isDropdownOpen && o.a.createElement(g, {
				isOverlay: !0
			}, o.a.createElement(f, {
				displayText: a.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, s) => o.a.createElement(f, {
				displayText: "".concat(s + 1, ". ").concat(t.title),
				key: t.title,
				onClick: () => e.onSelectReason(t)
			}))))
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less": function(e, t, s) {
			e.exports = {
				CharacterCountdown: "_3QAHANdA13oJnYRmkNk6sb",
				characterCountdown: "_3QAHANdA13oJnYRmkNk6sb",
				EmptyState: "_1Wu9eKXKrc5e52itaXM9ny",
				emptyState: "_1Wu9eKXKrc5e52itaXM9ny",
				ModNoteDescription: "_2yxydSiZfhd3wo7e1VeMg3",
				modNoteDescription: "_2yxydSiZfhd3wo7e1VeMg3",
				PrimaryButton: "_3ECRi_xQqKANiwqaFL6bmr",
				primaryButton: "_3ECRi_xQqKANiwqaFL6bmr",
				RadioOption: "_30JuaHooKBU-I9UQwxEwhL",
				radioOption: "_30JuaHooKBU-I9UQwxEwhL",
				BoldText: "_22_ggqyuhsjDD3F2auyNjc",
				boldText: "_22_ggqyuhsjDD3F2auyNjc",
				ModNoteInput: "_1hTAtA-9TFnHvYJWXuSFsv",
				modNoteInput: "_1hTAtA-9TFnHvYJWXuSFsv",
				MessageInput: "_1PK5NQ4vO_RKB4KvIDUONs",
				messageInput: "_1PK5NQ4vO_RKB4KvIDUONs",
				Info: "_3Bf1PCbZnJJBM391IWRv8D",
				info: "_3Bf1PCbZnJJBM391IWRv8D",
				SmallInfoText: "ozxLnphBA3LqIKZJwfCoD",
				smallInfoText: "ozxLnphBA3LqIKZJwfCoD",
				FormOptionsContainer: "_3fRFatQ34rHHRS3sO1Pacm",
				formOptionsContainer: "_3fRFatQ34rHHRS3sO1Pacm",
				ModalFooter: "_3dFILDoNznUDwdP1jfpTz-",
				modalFooter: "_3dFILDoNznUDwdP1jfpTz-",
				FooterRow: "_1vxr-V4SeBtsrkFSGJB0O8",
				footerRow: "_1vxr-V4SeBtsrkFSGJB0O8",
				ButtonRow: "_3zZmX0EjloIkzwt2-sRI2_",
				buttonRow: "_3zZmX0EjloIkzwt2-sRI2_"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "dispatcher", (function() {
				return R
			})), s.d(t, "selector", (function() {
				return T
			})), s.d(t, "connector", (function() {
				return M
			})), s.d(t, "CharacterCountdown", (function() {
				return N
			})), s.d(t, "EmptyState", (function() {
				return j
			})), s.d(t, "MessageInput", (function() {
				return B
			})), s.d(t, "FormOptionsContainer", (function() {
				return U
			})), s.d(t, "ModalFooter", (function() {
				return W
			})), s.d(t, "ButtonRow", (function() {
				return G
			})), s.d(t, "AddRemovalReasonModal", (function() {
				return Y
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/removalReasons/index.ts"),
				d = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/index.tsx"),
				b = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				v = s("./src/reddit/controls/TextButton/index.tsx"),
				g = s("./src/reddit/icons/fonts/Info/index.tsx"),
				w = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				f = s("./src/reddit/models/RemovalReason/index.ts"),
				C = s("./src/reddit/selectors/removalReasons.ts"),
				_ = s("./src/reddit/selectors/subreddit.ts"),
				S = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				E = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				y = s.n(E);
			const {
				fbt: O
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = e => {
				switch (e) {
					case f.f.Private:
						return "private_subreddit";
					case f.f.PrivateExposed:
						return "private_personal";
					default:
						return e
				}
			}, I = {
				isDropdownOpen: !1,
				message: "",
				modNote: "",
				removalType: f.f.Public,
				selectedReason: null
			}, R = e => ({
				submitBulkRemovalReason: (t, s, a, n, o) => e(Object(l.submitBulkRemovalReason)(t, s, a, n, o)),
				submitRemovalReason: (t, s, a, n, o) => e(Object(l.submitRemovalReason)(t, s, a, n, o))
			}), T = Object(r.c)({
				currentUserName: e => {
					const t = Object(S.i)(e);
					if (t) return t.displayText
				},
				isLoading: C.a,
				removalReasons: C.c,
				subredditName: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(_.S)(e, {
						subredditId: s
					}).name
				}
			}), M = Object(o.b)(T, R), N = c.a.wrapped(d.a, "CharacterCountdown", y.a), j = c.a.div("EmptyState", y.a), P = c.a.wrapped(m.n, "ModNoteDescription", y.a), L = c.a.wrapped(u.i, "PrimaryButton", y.a), A = c.a.wrapped(b.a, "RadioOption", y.a), D = c.a.span("BoldText", y.a), V = c.a.wrapped(m.s, "ModNoteInput", y.a), B = c.a.wrapped(m.s, "MessageInput", y.a), F = c.a.wrapped(g.a, "Info", y.a), H = c.a.div("SmallInfoText", y.a), U = c.a.div("FormOptionsContainer", y.a), W = c.a.wrapped(m.f, "ModalFooter", y.a), K = c.a.div("FooterRow", y.a), G = c.a.wrapped(K, "ButtonRow", y.a);
			class Y extends n.a.Component {
				constructor(e) {
					super(e), this.onSelectRemovalType = e => {
						this.setState({
							removalType: e
						}), this.props.trackClick("type_".concat(k(e)))()
					}, this.onMessageInputChange = e => {
						this.setState({
							message: e.currentTarget.value
						})
					}, this.onUpdateModNote = e => {
						this.setState({
							modNote: e.currentTarget.value
						})
					}, this.handleToggleDropdown = () => this.setState({
						isDropdownOpen: !this.state.isDropdownOpen
					}), this.closeDropdown = () => {
						this.state.isDropdownOpen && this.setState({
							isDropdownOpen: !1
						})
					}, this.onSelectReason = e => {
						this.setState({
							selectedReason: e
						}), this.props.trackClick("reason")(), e && this.setState({
							message: e.message
						}), this.closeDropdown()
					}, this.canSave = () => !(this.state.message.length > f.a || this.state.modNote.length > f.b) && (this.state.selectedReason ? this.state.message.trim().length > 0 : this.state.modNote.trim().length > 0), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.canSave()) {
							(t.removalContextType === f.e.Bulk ? e.submitBulkRemovalReason : e.submitRemovalReason)(e.itemIds, t.selectedReason, t.message.trim(), t.removalType, t.modNote.trim()), e.trackClick("sent")(), t.selectedReason && e.trackClick("sent_".concat(k(t.removalType)))(), t.modNote && e.trackClick("sent_modnote")(), e.toggleModal()
						}
					}, this.onCancel = () => {
						this.props.toggleModal(), this.props.trackClick("cancel")()
					}, this.renderRemovalTypeOptions = () => {
						const {
							props: e,
							state: t
						} = this, s = [];
						return t.removalContextType !== f.e.Bulk && s.push(n.a.createElement(A, {
							key: f.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: f.f.Public
						}, n.a.createElement("div", null, t.removalContextType === f.e.Post ? O._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : O._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), s.push(n.a.createElement(A, {
							key: f.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: f.f.Private
						}, n.a.createElement("div", null, O._("Private: send a Modmail from {subredditName} to the user", [O._param("subredditName", n.a.createElement(D, null, "r/".concat(e.subredditName)))], {
							hk: "1wUxMe"
						})))), e.currentUserName && s.push(n.a.createElement(A, {
							key: f.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: f.f.PrivateExposed
						}, n.a.createElement("div", null, O._("Private: send a Modmail from {currentUserName} to the user", [O._param("currentUserName", n.a.createElement(D, null, "u/".concat(e.currentUserName)))], {
							hk: "wFSJr"
						})))), s
					}, this.state = Object.assign(Object.assign({}, I), {
						removalContextType: Object(f.g)(e.itemIds)
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return n.a.createElement(m.d, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && n.a.createElement(m.h, null, n.a.createElement(w.a, null, n.a.createElement(m.p, null, O._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && O._("({number of items} posts/comments)", [O._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), n.a.createElement(v.a, {
						onClick: this.onCancel
					}, n.a.createElement(m.b, null)))), n.a.createElement(m.k, null, e.isLoading || e.removalReasons.length > 0 ? n.a.createElement(x.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : n.a.createElement(j, null, O._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), n.a.createElement(p.a, {
						to: "/r/".concat(e.subredditName, "/about/removal"),
						target: "_blank"
					}, n.a.createElement(u.o, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, O._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && n.a.createElement(U, null, n.a.createElement(m.g, null, n.a.createElement(h.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), n.a.createElement(B, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), n.a.createElement(N, {
						maxChars: f.a,
						text: t.message.trim()
					}), n.a.createElement(H, null, t.removalType !== f.f.Public && n.a.createElement(n.a.Fragment, null, n.a.createElement(F, null), O._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), n.a.createElement(W, null, n.a.createElement(K, null, n.a.createElement(P, null, O._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), n.a.createElement(K, null, n.a.createElement(V, {
						placeholder: O._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), n.a.createElement(K, null, n.a.createElement(N, {
						maxChars: f.b,
						text: t.modNote.trim()
					})), n.a.createElement(G, null, n.a.createElement(u.l, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, O._("Cancel", null, {
						hk: "2TSLl5"
					})), n.a.createElement(L, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, O._("Submit", null, {
						hk: "42zLFy"
					})))))
				}
			}
			t.default = Object(i.a)(M(Y))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			var a = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const o = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				r = () => null;
			t.a = Object(a.a)({
				ErrorComponent: r,
				getComponent: () => Object(n.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: r
			})
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, s) {
			"use strict";
			s.d(t, "k", (function() {
				return r
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return c
			})), s.d(t, "o", (function() {
				return l
			})), s.d(t, "m", (function() {
				return d
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return w
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return C
			})), s.d(t, "j", (function() {
				return _
			}));
			var a = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				o = s.n(n);
			const r = a.a.section("FormPage", o.a),
				i = a.a.h1("HomePageTitle", o.a),
				c = a.a.button("HomePageBreadcrumb", o.a),
				l = a.a.div("HomePageGroup", o.a),
				d = a.a.h1("FormPageTitle", o.a),
				m = a.a.div("FormPageSection", o.a),
				u = a.a.div("FormGroup", o.a),
				p = a.a.h2("FormGroupTitle", o.a),
				h = a.a.div("FormElement", o.a),
				b = a.a.div("FormGroupDescription", o.a),
				v = a.a.div("FormItem", o.a),
				g = a.a.h3("FormElementTitle", o.a),
				w = a.a.div("FormElementDescription", o.a),
				f = a.a.div("FormElementError", o.a),
				C = a.a.div("FormElementSubGroup", o.a),
				_ = a.a.li("FormListItem", o.a)
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return w
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var a = s("./node_modules/lodash/throttle.js"),
				n = s.n(a),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/classNames/index.ts"),
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
					var n = 0;
					for (a = Object.getOwnPropertySymbols(e); n < a.length; n++) t.indexOf(a[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[n]) && (s[a[n]] = e[a[n]])
				}
				return s
			};
			class w extends r.a.Component {
				constructor() {
					super(...arguments), this.handleMouseMove = n()(() => {
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
					}, s = Object(i.a)(b.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? r.a.createElement(c.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onMouseDown: e.onMouseDown,
						onMouseMove: this.handleMouseMove,
						onKeyDown: e.onKeydown,
						rel: e.rel,
						to: e.href
					}), e.children && r.a.createElement("span", {
						className: s
					}, e.children), r.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText)) : r.a.createElement(m.a, v({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? r.a.createElement("div", null, e.children) : r.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && r.a.createElement("span", {
						className: Object(i.a)(b.a.text, e.textClassName)
					}, e.displayText), e.showSelectedCheckmark && e.isSelected && r.a.createElement(d.a, {
						className: b.a.checkmark
					}), e.showDropdownTriangle && r.a.createElement(l.a, {
						className: p.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = g(e, ["className"]);
				const a = Object(i.a)(b.a.row, t, {
					[b.a.mIsInteractive]: !s.noHover,
					[b.a.mIsSelected]: s.isSelected,
					[b.a.topics]: s.isTopicsStyle
				});
				return r.a.createElement(w, v({
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
				n = s("./src/reddit/controls/InternalLink/index.tsx"),
				o = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				r = s.n(o);
			t.a = a.a.wrapped(n.a, "unstyledInternalLink", r.a)
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
				n = s.n(a),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				i = s.n(r);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(o.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Info/index.m.less": function(e, t, s) {
			e.exports = {
				InfoIcon: "_3nKAYOml-oSgh4pKL20-sC",
				infoIcon: "_3nKAYOml-oSgh4pKL20-sC"
			}
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Info/index.m.less"),
				i = s.n(r);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(o.b)("info"), " ").concat(e.className)
			}), "InfoIcon", i.a);
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
				n = s.n(a),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				i = s.n(r);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(o.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", i.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(o.a)(Object(r.b)("share"), c.a.shareIcon, e.className)
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
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				style: e.style,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,8.5 C10.553,8.5 11,8.948 11,9.5 L11,13.5 C11,14.052 10.553,14.5 10,14.5 C9.447,14.5 9,14.052 9,13.5 L9,9.5 C9,8.948 9.447,8.5 10,8.5 Z M10.7002,5.79 C10.8012,5.89 10.8702,6 10.9212,6.12 C10.9712,6.24 11.0002,6.37 11.0002,6.5 C11.0002,6.57 10.9902,6.63 10.9802,6.7 C10.9712,6.76 10.9502,6.82 10.9212,6.88 C10.9002,6.94 10.8702,7 10.8302,7.05 C10.7902,7.11 10.7502,7.16 10.7002,7.21 C10.6602,7.25 10.6102,7.29 10.5512,7.33 C10.5002,7.37 10.4402,7.4 10.3812,7.42 C10.3202,7.45 10.2612,7.47 10.1902,7.48 C10.1312,7.49 10.0602,7.5 10.0002,7.5 C9.7402,7.5 9.4802,7.39 9.2902,7.21 C9.1102,7.02 9.0002,6.77 9.0002,6.5 C9.0002,6.37 9.0302,6.24 9.0802,6.12 C9.1312,5.99 9.2002,5.89 9.2902,5.79 C9.5202,5.56 9.8702,5.46 10.1902,5.52 C10.2612,5.53 10.3202,5.55 10.3812,5.58 C10.4402,5.6 10.5002,5.63 10.5512,5.67 C10.6102,5.71 10.6602,5.75 10.7002,5.79 Z M10,16 C6.691,16 4,13.309 4,10 C4,6.691 6.691,4 10,4 C13.309,4 16,6.691 16,10 C16,13.309 13.309,16 10,16 M10,2 C5.589,2 2,5.589 2,10 C2,14.411 5.589,18 10,18 C14.411,18 18,14.411 18,10 C18,5.589 14.411,2 10,2"
			})))
		},
		"./src/reddit/icons/svgs/Pagination/back.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M14.7861,8.4019 L16.8831,4.4709 C17.0481,4.1609 17.0381,3.7869 16.8571,3.4849 C16.6771,3.1839 16.3511,2.9999 16.0001,2.9999 L4.0001,2.9999 C3.4471,2.9999 3.0001,3.4479 3.0001,3.9999 L3.0001,8.5869 L3.0001,12.8039 L3.0001,16.8039 C3.0001,17.3569 3.4471,17.8039 4.0001,17.8039 C4.5531,17.8039 5.0001,17.3569 5.0001,16.8039 L5.0001,13.8039 L16.0001,13.8039 C16.3511,13.8039 16.6771,13.6199 16.8571,13.3189 C17.0381,13.0179 17.0481,12.6439 16.8831,12.3339 L14.7861,8.4019 Z"
			})))
		},
		"./src/reddit/icons/svgs/Rules/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", {
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function o(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M10 0L11.4142 8.58579L20 10L11.4142 11.4142L10 20L8.58579 11.4142L0 10L8.58579 8.58579L10 0Z",
					fill: "inherit"
				}))
			}
		},
		"./src/reddit/icons/svgs/Star/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function o(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
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
				return o
			}));
			var a = s("./node_modules/react/index.js"),
				n = s.n(a);

			function o(e) {
				return n.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
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
		"./src/reddit/icons/svgs/VideoShare/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				i = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: Object(o.a)(i.a.icon, e.className),
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
			})))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return c
			})), s.d(t, "e", (function() {
				return l
			})), s.d(t, "g", (function() {
				return d
			})), s.d(t, "h", (function() {
				return m
			}));
			var a = s("./src/reddit/helpers/isPost.ts");
			const n = 20,
				o = 50,
				r = 1e4,
				i = 100;
			var c, l;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(c || (c = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(l || (l = {}));
			const d = e => 1 === e.length ? Object(a.a)(e[0]) ? l.Post : l.Comment : l.Bulk,
				m = (e, t) => {
					return {
						[t === l.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type
					}
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
			s("./node_modules/core-js/modules/es6.regexp.replace.js"), s("./node_modules/core-js/modules/es6.regexp.match.js");
			var a = s("./node_modules/react/index.js"),
				n = s.n(a),
				o = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/extractQueryParams/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				m = s("./src/reddit/actions/login.ts"),
				u = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				p = s("./src/higherOrderComponents/makeAsync.tsx"),
				h = s("./src/lib/loadWithRetries/index.ts");
			var b = Object(p.a)({
					getComponent: () => Object(h.a)(() => s.e("RpanOnboardingModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/Onboarding/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				v = s("./src/config.ts"),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				w = s("./node_modules/lodash/throttle.js"),
				f = s.n(w),
				C = s("./src/telemetry/index.ts"),
				_ = s("./node_modules/uuid/v4.js"),
				S = s.n(_),
				x = s("./src/higherOrderComponents/withMux/index.tsx"),
				E = s("./src/lib/addQueryParams/index.ts");
			var y = e => {
					if (!e || !e.isConnected) return;
					const t = e.hasAttribute("tabindex");
					t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
				},
				O = s("./src/lib/focusVisible/index.js"),
				k = s("./src/reddit/actions/media.ts"),
				I = s("./src/reddit/actions/modal.ts"),
				R = s("./src/reddit/actions/profile/index.ts"),
				T = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				M = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				N = s("./src/lib/makeActionCreator/index.ts");
			const j = Object(N.a)(M.E),
				P = Object(N.a)(M.X),
				L = e => async t => {
					t(j(e))
				}, A = Object(N.a)(M.P), D = Object(N.a)(M.V);
			var V = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				B = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				F = s("./src/reddit/actions/publicAccessNetwork/userSettings.ts"),
				H = s("./src/reddit/actions/reportFlow.ts"),
				U = s("./src/reddit/actions/video.ts"),
				W = s("./src/reddit/components/HlsVideo/index.tsx"),
				K = s("./src/higherOrderComponents/asModal/index.tsx"),
				G = s("./src/lib/lessComponent.tsx"),
				Y = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				X = s("./src/reddit/controls/Button/index.tsx"),
				J = s("./src/reddit/controls/TextButton/index.tsx"),
				z = s("./src/reddit/helpers/localStorage/index.ts"),
				q = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				Z = s("./src/reddit/components/PublicAccessNetwork/Modals/ChatMute/index.m.less"),
				Q = s.n(Z);
			const $ = G.a.div("Image", Q.a),
				ee = G.a.wrapped(Y.f, "ModalFooter", Q.a),
				te = G.a.wrapped(Y.h, "ModalHeader", Q.a),
				se = G.a.wrapped(Y.k, "ModalMain", Q.a);
			var ae = Object(K.a)(e => {
					let {
						toggleModal: t
					} = e;
					const s = () => {
						z.jb(), t()
					};
					return n.a.createElement(Y.d, null, n.a.createElement(te, null, n.a.createElement(q.a, null, n.a.createElement("div", null, n.a.createElement("div", {
						className: Q.a.Title
					}, g.fbt._("Get ready to chat!", null, {
						hk: "1lebCx"
					})), n.a.createElement(Y.o, null, g.fbt._("Before jumping in, keep these tips in mind.", null, {
						hk: "3evsT7"
					}))), n.a.createElement(J.a, {
						onClick: s
					}, n.a.createElement(Y.b, null)))), n.a.createElement(se, null, n.a.createElement("span", null, n.a.createElement("span", null, n.a.createElement("div", {
						className: Q.a.SubTitle
					}, g.fbt._("Remember the human", null, {
						hk: "3oHyEM"
					})), n.a.createElement(Y.n, null, g.fbt._("We're all (internet) friends here, so enjoy chatting and remember that rules still apply.", null, {
						hk: "3df1qF"
					}))), n.a.createElement($, {
						style: {
							backgroundImage: 'url("'.concat(v.a.assetPath, '/img/heart-rainbow.png")')
						}
					})), n.a.createElement("span", null, n.a.createElement("span", null, n.a.createElement("div", {
						className: Q.a.SubTitle
					}, g.fbt._("Look out for each other", null, {
						hk: "hrE04"
					})), n.a.createElement(Y.n, null, g.fbt._("If you see any harrassment or abuse, report it by pressing and holding on the message.", null, {
						hk: "12gD31"
					}))), n.a.createElement($, {
						style: {
							backgroundImage: 'url("'.concat(v.a.assetPath, '/img/award_beagle.png")')
						}
					})), n.a.createElement("span", null, n.a.createElement("span", null, n.a.createElement("div", {
						className: Q.a.SubTitle
					}, g.fbt._("Have fun!", null, {
						hk: "20HtGT"
					})), n.a.createElement(Y.n, null, g.fbt._("Chat, lol, debate, discuss human nature or quantum physics... it's all up to you.", null, {
						hk: "3Aj4Z7"
					}))), n.a.createElement($, {
						style: {
							backgroundImage: 'url("'.concat(v.a.assetPath, '/img/award_celebrate.png")')
						}
					}))), n.a.createElement(ee, {
						className: Q.a.ModalFooter
					}, n.a.createElement(X.i, {
						onClick: s,
						className: Q.a.Button,
						"data-redditstyle": !0
					}, g.fbt._("Start Chatting", null, {
						hk: "3n2GtA"
					}))))
				}),
				ne = s("./src/reddit/actions/post.ts"),
				oe = s("./src/reddit/actions/removalReasons/index.ts"),
				re = s("./src/reddit/actions/toaster.ts"),
				ie = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				ce = s("./src/reddit/components/TrackingHelper/index.tsx"),
				le = s("./src/reddit/models/RemovalReason/index.ts"),
				de = s("./src/reddit/models/Toast/index.ts"),
				me = s("./src/reddit/selectors/activeModalId.ts"),
				ue = s("./src/reddit/selectors/telemetry.ts"),
				pe = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"),
				he = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				be = s("./src/reddit/controls/InternalLink/index.tsx"),
				ve = s("./src/reddit/components/PublicAccessNetwork/Modals/EndBroadcast/EndBroadcastStyles.m.less"),
				ge = s.n(ve);
			const {
				fbt: we
			} = s("./node_modules/fbt/lib/FbtPublic.js"), fe = Object(o.b)(pe.selector, pe.dispatcher), Ce = G.a.wrapped(Y.f, "EndBroadcastModalFooter", ge.a), _e = G.a.wrapped(Y.s, "EndBroadcastMessageInput", ge.a);
			class Se extends pe.AddRemovalReasonModal {
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.isLoading || e.removalReasons.length > 0;
					return n.a.createElement(Y.d, {
						onClick: this.closeDropdown
					}, s && n.a.createElement(Y.h, null, n.a.createElement(q.a, null, n.a.createElement(Y.p, null, we._("Remove broadcast", null, {
						hk: "1JfCvD"
					})), n.a.createElement(J.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, n.a.createElement(Y.b, null)))), n.a.createElement(Y.k, null, s ? n.a.createElement(he.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : n.a.createElement(pe.EmptyState, null, we._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), n.a.createElement(be.a, {
						to: "/r/".concat(e.subredditName, "/about/removal"),
						target: "_blank"
					}, n.a.createElement(X.o, {
						onClick: e.toggleRemovalReasonModal,
						"data-redditstyle": !0
					}, we._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: ge.a.MessageHeader
					}, we._("Message to the broadcaster", null, {
						hk: "bGz26"
					})), n.a.createElement(pe.FormOptionsContainer, null, n.a.createElement(_e, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), n.a.createElement(pe.CharacterCountdown, {
						maxChars: le.a,
						text: t.message.trim()
					})))), n.a.createElement(Ce, null, n.a.createElement(pe.ButtonRow, null, n.a.createElement(Y.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, we._("Cancel", null, {
						hk: "2TSLl5"
					})), n.a.createElement(Y.t, {
						onClick: () => {
							t.selectedReason && this.props.submitRemoval(t.selectedReason, t.message)
						},
						disabled: !this.canSave()
					}, we._("Remove", null, {
						hk: "MMAdc"
					})))))
				}
			}
			var xe = Object(K.a)(fe(Se));
			const {
				fbt: Ee
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ye = Object(i.c)({
				isConfirmationModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(me.a)(e),
				isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(me.a)(e)
			}), Oe = Object(o.b)(ye, (e, t) => {
				let {
					subredditId: s,
					postId: a
				} = t;
				return {
					submitRemovalReason: async (t, s, a) => {
						await e(Object(oe.submitRemovalReason)([t], s, a, le.f.Private, "")) ? e(Object(re.e)({
							kind: de.b.SuccessEndBroadcast,
							text: Ee._("Broadcast ended", null, {
								hk: "313j6x"
							})
						})) : (void 0).props.errorToast("Failed to add removal reasons.")
					},
					fetchRemovalReasons: () => e(Object(oe.removalReasonsRequested)(s)),
					errorToast: t => e(Object(re.e)({
						text: t,
						duration: 1e4,
						kind: de.b.Error
					})),
					toggleRemovalReasonModal: () => e(Object(I.i)("rpan-add-removal-reason-id")),
					toggleConfirmationModal: () => e(Object(I.i)("rpan-end-broadcast-confirmation-id")),
					onRemovePost: () => e(Object(ne.K)(a, !1))
				}
			});
			class ke extends n.a.Component {
				constructor(e) {
					super(e), this.onEndBroadcast = async () => {
						await this.props.onRemovePost() ? (this.props.submitRemovalReason(this.props.postId, this.state.selectedReason, this.state.message.trim()), this.props.toggleConfirmationModal()) : this.props.errorToast("Failed to end broadcast.")
					}, this.onSubmitRemovalReasons = (e, t) => {
						this.setState({
							selectedReason: e,
							message: t
						}), this.props.toggleConfirmationModal()
					}, this.props.fetchRemovalReasons()
				}
				renderConfirmationModal() {
					return n.a.createElement(ie.a, {
						headerText: Ee._("Are you sure you want to remove this broadcast?", null, {
							hk: "1Wcei3"
						}),
						modalText: Ee._("This can't be undone.", null, {
							hk: "2HfakZ"
						}),
						actionText: Ee._("Yes, remove", null, {
							hk: "4uQjqM"
						}),
						onConfirm: this.onEndBroadcast,
						onClose: this.props.toggleConfirmationModal,
						onCancel: this.props.toggleConfirmationModal,
						disableRedditStyle: !0,
						withOverlay: !0
					})
				}
				renderRemovalReasonModal() {
					return n.a.createElement(xe, {
						submitRemoval: this.onSubmitRemovalReasons,
						toggleRemovalReasonModal: this.props.toggleRemovalReasonModal,
						toggleConfirmationModal: this.props.toggleConfirmationModal,
						itemIds: [this.props.postId],
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleRemovalReasonModal,
						trackClick: ((e, t, s) => a => () => this.props.sendEvent(n => ({
							source: e,
							action: "click",
							noun: a,
							post: s && Object(ue.post)(n, s),
							screen: Object(ue.screen)(n),
							subreddit: Object(ue.subredditById)(n, t)
						})))("removal_reasons", this.props.subredditId, this.props.postId)
					})
				}
				render() {
					return this.props.isRemovalReasonModalOpen ? this.renderRemovalReasonModal() : this.props.isConfirmationModalOpen ? this.renderConfirmationModal() : n.a.createElement("div", null)
				}
			}
			var Ie, Re = Object(K.a)(Oe(Object(ce.c)(ke))),
				Te = s("./src/reddit/components/ReportFlow/index.tsx"),
				Me = s("./src/reddit/constants/history.ts"),
				Ne = s("./src/reddit/constants/keycodes.ts"),
				je = s("./src/reddit/constants/parameters.ts"),
				Pe = s("./src/reddit/helpers/dom/index.ts"),
				Le = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				Ae = s("./src/reddit/helpers/trackers/rpan.ts"),
				De = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ve = s("./src/reddit/icons/svgs/Close/index.tsx"),
				Be = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Fe = s("./src/reddit/selectors/experiments/video.ts"),
				He = s("./src/reddit/selectors/media.ts"),
				Ue = s("./src/reddit/selectors/platform.ts"),
				We = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				Ke = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				Ge = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			! function(e) {
				e[e.CRITICAL = 0] = "CRITICAL", e[e.LOW = 1] = "LOW", e[e.NORMAL = 2] = "NORMAL", e[e.EXTENDED = 3] = "EXTENDED"
			}(Ie || (Ie = {}));
			const Ye = 60,
				Xe = 30,
				Je = 3 * Ye,
				ze = 5 * Ye,
				qe = 5,
				Ze = 5 * Ye,
				Qe = 10,
				$e = 5;
			s("./node_modules/core-js/modules/es6.regexp.split.js");
			var et = s("./src/lib/makeCommentsPageKey/index.ts"),
				tt = s("./src/reddit/actions/gold/modals.ts"),
				st = s("./src/reddit/actions/moderatingSubreddits.ts"),
				at = s("./src/reddit/endpoints/publicAccessNetwork/index.ts");
			const nt = e => async (t, s, a) => {
				let {
					apiContext: n
				} = a;
				const o = await Object(at.k)(n(), e, !0);
				o && o.ok ? t(Object(re.e)({
					kind: de.b.SuccessLockComment,
					text: g.fbt._("Comments locked", null, {
						hk: "3WAk9Y"
					}),
					buttonText: g.fbt._("UNDO", null, {
						hk: "3Kk8Xw"
					}),
					buttonAction: ot(e)
				})) : t(Object(re.e)(Object(re.d)(g.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), de.b.Error)))
			}, ot = e => async (t, s, a) => {
				let {
					apiContext: n
				} = a;
				const o = await Object(at.k)(n(), e, !1);
				o && o.ok ? t(Object(re.e)({
					kind: de.b.SuccessUnlockComment,
					text: g.fbt._("Comments unlocked", null, {
						hk: "rEYa1"
					}),
					buttonText: g.fbt._("UNDO", null, {
						hk: "OXk5v"
					}),
					buttonAction: nt(e)
				})) : t(Object(re.e)(Object(re.d)(g.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), de.b.Error)))
			};
			var rt = s("./src/reddit/actions/subscription/index.ts"),
				it = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				ct = s("./src/reddit/constants/posts.ts"),
				lt = s("./src/reddit/helpers/correlationIdTracker.ts"),
				dt = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				mt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				ut = s("./src/reddit/selectors/subreddit.ts"),
				pt = s("./src/reddit/selectors/comments.ts"),
				ht = s("./src/reddit/selectors/communityAwards.ts"),
				bt = s("./src/reddit/models/Gold/Award.ts");
			var vt = e => e < 500 || !e ? bt.e.Silver : e < 1800 ? bt.e.Gold : bt.e.Platinum,
				gt = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				wt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less"),
				ft = s.n(wt);
			const {
				fbt: Ct
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function _t(e) {
				const {
					awardName: t,
					giverName: s,
					giverId: a,
					tier: o,
					className: r
				} = e, i = o === bt.e.Silver ? ft.a.silverTierAttribution : o === bt.e.Gold ? ft.a.goldTierAttribution : ft.a.platinumTierAttribution;
				return n.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(c.a)(r, ft.a.tierAttribution, i)
				}, o !== bt.e.Silver && n.a.createElement(gt.a, {
					className: ft.a.giverIcon,
					userId: a,
					width: 16,
					height: 16
				}), n.a.createElement("span", null, o !== bt.e.Silver && Ct._("{giverName} gave {space}", [Ct._param("giverName", s), Ct._param("space", " ")], {
					hk: "SzDdi"
				}), n.a.createElement("strong", {
					className: ft.a.awardName
				}, t)))
			}
			var St = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				xt = s("./src/reddit/icons/svgs/Star/index.tsx"),
				Et = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				yt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less"),
				Ot = s.n(yt);

			function kt(e) {
				const {
					iconUrl: t,
					tier: s,
					className: a
				} = e, o = s === bt.e.Silver ? Ot.a.silverTierAwardIcon : s === bt.e.Gold ? Ot.a.goldTierAwardIcon : Ot.a.platinumTierAwardIcon, r = s !== bt.e.Silver, i = s === bt.e.Platinum;
				return n.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(c.a)(a, Ot.a.tierAwardIcon)
				}, n.a.createElement("div", {
					className: Ot.a.awardIconContainer
				}, r && n.a.createElement(n.a.Fragment, null, n.a.createElement(xt.a, {
					className: Object(c.a)(Ot.a.backgroundAnimation, Ot.a.backgroundStar)
				}), n.a.createElement(Et.a, {
					className: Object(c.a)(Ot.a.backgroundAnimation, Ot.a.backgroundStar, Ot.a.backgroundStar2)
				})), n.a.createElement("img", {
					src: t,
					className: o
				}), i && n.a.createElement(n.a.Fragment, null, n.a.createElement(St.a, {
					className: Object(c.a)(Ot.a.backgroundAnimation, Ot.a.backgroundSparkle, Ot.a.sparkleBottomLeft)
				}), n.a.createElement(St.a, {
					className: Object(c.a)(Ot.a.backgroundAnimation, Ot.a.backgroundSparkle, Ot.a.sparkleTopRight)
				}), n.a.createElement(St.a, {
					className: Object(c.a)(Ot.a.backgroundAnimation, Ot.a.backgroundSparkle, Ot.a.sparkleBottomRight)
				}))))
			}
			var It = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less"),
				Rt = s.n(It);

			function Tt(e) {
				const {
					award: t,
					className: s,
					giverId: a,
					giverName: o
				} = e, r = vt(t.coinPrice), i = t.icon128 ? t.icon128.url : t.icon.url;
				return n.a.createElement("div", {
					"aria-role": "presentation",
					className: Object(c.a)(s, Rt.a.container)
				}, n.a.createElement(kt, {
					iconUrl: i,
					tier: r,
					className: Rt.a.awardIconAnimation
				}), n.a.createElement(_t, {
					awardName: t.name,
					className: Rt.a.attributionAnimation,
					giverId: a,
					giverName: o,
					tier: r
				}))
			}
			var Mt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less"),
				Nt = s.n(Mt);
			class jt extends a.Component {
				render() {
					const {
						award: e,
						className: t,
						giverName: s,
						giverId: a
					} = this.props;
					return e && a && s ? n.a.createElement("div", {
						"aria-role": "presentation",
						className: Object(c.a)(t, Nt.a.awardOverlay)
					}, n.a.createElement(Tt, {
						award: e,
						giverId: a,
						giverName: s
					})) : null
				}
			}
			var Pt = Object(o.b)(() => Object(i.a)(e => e, pt.n, (e, t) => {
					if (!t) return {};
					const {
						associatedAwardId: s,
						author: a,
						authorId: n
					} = t;
					return {
						award: s ? Object(ht.a)(e, s) : void 0,
						giverId: n,
						giverName: a
					}
				}))(jt),
				Lt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less"),
				At = s.n(Lt);
			const Dt = Object(o.b)(() => Object(i.c)({
					awardedCommentLinks: (e, t) => {
						let {
							commentsPageKey: s
						} = t;
						return Object(pt.g)(e, {
							commentsPageKey: s
						}).filter(t => {
							const s = Object(pt.n)(e, {
								commentId: t.id
							});
							return !!s && !!s.associatedAwardId
						})
					},
					isFullyLoaded: pt.v
				})),
				Vt = e => ({
					prevAwardedCommentLinks: e.isFullyLoaded ? [...e.awardedCommentLinks] : void 0,
					prevAwardedCommentLinksTopIndex: e.isFullyLoaded ? e.awardedCommentLinks.length : 0,
					prevCommentsPageKey: e.commentsPageKey
				});
			class Bt extends a.Component {
				constructor(e) {
					super(e), this.state = Vt(e)
				}
				shouldComponentUpdate(e) {
					const {
						awardedCommentLinks: t,
						commentsPageKey: s
					} = this.props;
					return e.commentsPageKey !== s || e.awardedCommentLinks.length !== t.length
				}
				static getDerivedStateFromProps(e, t) {
					if (e.commentsPageKey !== t.prevCommentsPageKey) return Vt(e);
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
					const o = e.slice(a);
					return o.length ? n.a.createElement("div", {
						"aria-role": "presentation",
						className: Object(c.a)(t, At.a.awardOverlaySpectacle)
					}, o.map(e => n.a.createElement(Pt, {
						className: At.a.awardOverlay,
						commentId: e.id,
						key: e.id
					}))) : null
				}
			}
			var Ft = Dt(Bt);
			const Ht = (e, t) => e > t ? Ie.EXTENDED : e < Je ? Ie.CRITICAL : e < ze ? Ie.LOW : Ie.NORMAL,
				Ut = e => e / Ye,
				Wt = e => Kt(e) % Ze == 0,
				Kt = e => Math.round(e / qe) * qe;
			var Gt = s("./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less"),
				Yt = s.n(Gt);
			const Xt = (() => {
					const e = [];
					for (let t = 1; t < 11; t++) e.push("Delay".concat(t));
					return e
				})(),
				Jt = (() => {
					const e = [];
					for (let t = 0; t < 21; t++) e.push("X".concat(5 * t));
					return e
				})(),
				zt = ["15Deg", "45Deg", "75Deg"],
				qt = e => e[Math.floor(Math.random() * e.length)],
				Zt = () => {
					const e = [qt(Jt), qt(zt), qt(Xt)].map(e => Yt.a["particle".concat(e)]).join(" ");
					return "".concat(Yt.a.particle, " ").concat(e, " ").concat(Math.round(Math.random()) ? Yt.a.particleReverse : "")
				},
				Qt = 40,
				$t = 20;
			class es extends n.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < Qt; t++) e.push(this.createParticle(t, "particleSm"));
					for (let t = 0; t < $t; t++) e.push(this.createParticle(t, "particleLg"));
					return n.a.createElement("div", {
						className: Yt.a.particleWrapper
					}, e)
				}
				createParticle(e, t) {
					return n.a.createElement("div", {
						key: "".concat(t).concat(innerHeight),
						className: "".concat(Zt(), " ").concat(Yt.a[t])
					})
				}
			}
			var ts = es;
			const ss = () => ({
				estimatedTimeRemaining: null,
				previouslyVisible: !1,
				visible: !1,
				streamId: null,
				timerPausedAt: null,
				timerDiff: 0,
				timer: null,
				pillLabel: null
			});
			class as extends a.Component {
				constructor() {
					super(...arguments), this.state = ss(), this.timerId = 0
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
					return t || s > 0 || Wt(e) || e < ze
				}
				static getPillLabel(e, t) {
					const {
						currentStream: s,
						overlayOpen: a
					} = e, {
						timerDiff: n,
						timer: o
					} = t;
					if (!s || !s.meter || null === o) return null;
					if (n > 0) {
						if (n < Ye) {
							const e = Kt(n);
							return g.fbt._({
								"*": "+{seconds time added} seconds airtime given",
								_1: "+1 second airtime given"
							}, [g.fbt._plural(e, "seconds time added")], {
								hk: "4zE2Hn"
							})
						} {
							const e = Math.round(Ut(n));
							return g.fbt._({
								"*": "+{minutes time added} minutes airtime given",
								_1: "+1 minute airtime given"
							}, [g.fbt._plural(e, "minutes time added")], {
								hk: "17ep0a"
							})
						}
					}
					if (o > s.meter.full_meter_duration) {
						const e = Math.round(Ut(s.meter.full_meter_duration)).toLocaleString();
						return g.fbt._("{number of minutes}+ minutes airtime left", [g.fbt._param("number of minutes", e)], {
							hk: "2Tjt0F"
						})
					}
					if (Wt(o) && !a && o > ze) {
						const e = Math.round(Ut(o)).toLocaleString();
						return g.fbt._("{number of minutes} minutes airtime left", [g.fbt._param("number of minutes", e)], {
							hk: "3DZxvE"
						})
					}
					const r = Math.round(o),
						i = Math.floor(Ut(r)),
						c = r % Ye,
						l = "".concat(i, ":").concat(c < 10 ? "0" : "").concat(c);
					return g.fbt._("{mm:ss timestamp of remaining time} airtime left", [g.fbt._param("mm:ss timestamp of remaining time", l)], {
						hk: "1J5pOH"
					})
				}
				static getDerivedStateFromProps(e, t) {
					if (!e.currentStream || !e.currentStream.meter) return ss();
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
						return t.pillLabel = as.getPillLabel(e, t), t
					}
					const n = {
						timer: t.timer,
						timerDiff: t.timerDiff,
						timerPausedAt: t.timerPausedAt
					};
					if (a > t.estimatedTimeRemaining) {
						const e = t.estimatedTimeRemaining - t.timer,
							s = a - t.estimatedTimeRemaining + e;
						s > qe && (n.timer = a, n.timerDiff = s, n.timerPausedAt = a)
					}
					a !== t.estimatedTimeRemaining && Math.abs(n.timer - a) > Qe && (n.timer = a, n.timerDiff = a - t.timer, n.timerPausedAt = null), null !== n.timerPausedAt && n.timerPausedAt - n.timer > $e && (n.timerDiff = 0, n.timerPausedAt = null);
					const o = as.getPillLabel(e, n),
						r = as.isPillVisible(n.timer, e.overlayOpen, n.timerDiff);
					return Object.assign(Object.assign({
						estimatedTimeRemaining: a
					}, n), {
						streamId: s,
						pillLabel: o,
						previouslyVisible: t.visible,
						visible: r
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
						timer: o,
						pillLabel: r
					} = this.state;
					if (!(s && e && e.meter && o)) return null;
					const i = Ht(o, e.meter.full_meter_duration),
						l = !a,
						d = o < ze || t,
						m = this.state.timerDiff > 0;
					return n.a.createElement("div", {
						className: Yt.a.meterOverlay
					}, n.a.createElement("div", {
						className: Yt.a.meterPillWrapper
					}, m && n.a.createElement(ts, null), n.a.createElement("div", {
						className: Object(c.a)(Yt.a.meterPillContainer, {
							[Yt.a.animateMeterInAndOut]: l && !d,
							[Yt.a.animateMeterInOnly]: l && d,
							[Yt.a.fillMeterCritical]: i === Ie.CRITICAL,
							[Yt.a.fillMeterLow]: i === Ie.LOW,
							[Yt.a.fillMeterNormal]: i === Ie.NORMAL || i === Ie.EXTENDED,
							[Yt.a.fillMeterFed]: m
						}),
						onClick: () => this.props.openGildModal()
					}, n.a.createElement("div", {
						className: Yt.a.meterLabel
					}, r))))
				}
			}
			var ns = as,
				os = s("./src/reddit/components/OverflowMenu/index.tsx"),
				rs = s("./src/reddit/controls/Dropdown/Row.tsx"),
				is = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				cs = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				ls = s.n(cs);
			const {
				fbt: ds
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ms = e => {
					let {
						label: t,
						onSelect: s,
						onToggle: a,
						subreddits: o
					} = e;
					return n.a.createElement(os.b, {
						className: ls.a.overflowMenu,
						dropdownClassName: ls.a.dropdown,
						defaultButtonOutline: !0,
						disabled: o.length < 1,
						dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
						icon: n.a.createElement("div", {
							className: ls.a.overflowMenuIcon
						}, t, n.a.createElement(is.a, {
							className: ls.a.dropdownTriangle
						})),
						onClick: a
					}, n.a.createElement("div", {
						className: ls.a.dropdownLabel
					}, ds._("Pick a Community", null, {
						hk: "8MoVj"
					})), o.map(e => n.a.createElement(rs.b, {
						className: ls.a.dropdownRow,
						displayText: e.prefixedName,
						iconWrapperClassName: ls.a.overflowItemIconWrapper,
						key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
						onClick: () => s(e)
					})))
				},
				us = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				ps = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				hs = s.n(ps);
			class bs extends a.Component {
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
						isPaused: o,
						isVisible: r,
						onPlayPauseToggle: i,
						onVideoPositionUpdate: l,
						seekBarRef: d,
						settingChange: m,
						setVolume: u,
						hideLiveLabel: p,
						videoCurrentTime: h,
						videoTotalTime: b,
						volume: v,
						volumeRef: g
					} = this.props;
					return n.a.createElement(us.a, {
						className: Object(c.a)(e, hs.a.scrubberBar, {
							[hs.a.visible]: r
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
						isPaused: o,
						playPauseVideo: i,
						ref: this.setControlBarRef,
						seekBarRef: d,
						settingChange: m,
						setVideoPosition: l,
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
			var vs = bs,
				gs = s("./node_modules/lodash/debounce.js"),
				ws = s.n(gs),
				fs = s("./src/lib/prettyPrintNumber/index.ts"),
				Cs = s("./src/reddit/models/Vote/index.ts"),
				_s = s("./src/reddit/selectors/user.ts");
			Object(N.a)(M.D);
			const Ss = (e, t) => async (s, a, n) => {
				let {
					apiContext: o
				} = n;
				const r = a();
				if (Object(_s.I)(r))
					if (Object(Be.e)(r)) await Object(at.h)(o(), e, t);
					else {
						await Object(u.d)(e);
						const s = Object(Ke.l)(a(), e);
						null !== s.post.voteState && Object(Cs.e)(s.post.voteState) === t || await Object(at.h)(o(), e, t)
					}
				else s(Object(m.h)())
			};
			var xs = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				Es = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				ys = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				Os = s.n(ys);
			const ks = Object(i.c)({
				currentStream: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(Ke.l)(e, s)
				}
			});
			class Is extends n.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(Cs.a.upvoted), this.downVotes = () => this.calculateVotes(Cs.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === Cs.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(Cs.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = ws()(() => this.vote(Cs.a.upvoted), M.Y, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = ws()(() => this.vote(Cs.a.downvoted), M.Y, {
						leading: !0,
						trailing: !1
					}), this.state = {
						displayedVoteState: Cs.a.notVoted
					}, this.onVoteDown = this.onVoteDown.bind(this), this.onVoteUp = this.onVoteUp.bind(this)
				}
				componentDidMount() {
					const e = this.props.currentStream;
					e && e.post.voteState && this.setState(Object.assign(Object.assign({}, this.state), {
						displayedVoteState: Object(Cs.e)(e.post.voteState)
					}))
				}
				componentDidUpdate(e) {
					const t = this.props.currentStream,
						s = e.currentStream;
					t && (s && s.post.id === t.post.id || this.setState(Object.assign(Object.assign({}, this.state), {
						displayedVoteState: null !== t.post.voteState ? Object(Cs.e)(t.post.voteState) : Cs.a.notVoted
					})))
				}
				render() {
					const e = this.props.currentStream;
					if (!e) return null;
					const t = this.props.isLive ? e.continuous_watchers : e.unique_watchers;
					return n.a.createElement("div", {
						className: Os.a.statsPanel
					}, n.a.createElement("div", {
						className: Os.a.voteContainer
					}, n.a.createElement("button", {
						className: Object(c.a)(Os.a.upButton, {
							[Os.a.activeVote]: this.isVoteActive(Cs.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": g.fbt._("Upvote", null, {
							hk: "4ijw7j"
						})
					}, n.a.createElement(Es.b, {
						className: Os.a.voteIcon
					})), n.a.createElement("p", {
						className: Os.a.votesCounter
					}, Object(fs.b)(this.upVotes()))), n.a.createElement("div", {
						className: Os.a.watchingContainer
					}, n.a.createElement("div", {
						className: Os.a.watchingCounter
					}, Object(fs.b)(t)), n.a.createElement("p", {
						className: Os.a.watchingCaption
					}, this.props.isLive ? g.fbt._("Watching", null, {
						hk: "2Fql0m"
					}) : g.fbt._("Views", null, {
						hk: "ixhZU"
					}))), n.a.createElement("div", {
						className: Os.a.voteContainer
					}, n.a.createElement("button", {
						className: Object(c.a)(Os.a.downButton, {
							[Os.a.activeVote]: this.isVoteActive(Cs.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": g.fbt._("Dpvote", null, {
							hk: "1PcDeu"
						})
					}, n.a.createElement(xs.b, {
						className: Os.a.voteIcon
					})), n.a.createElement("p", {
						className: Os.a.votesCounter
					}, Object(fs.b)(this.downVotes()))))
				}
				vote(e) {
					const t = this.props.currentStream;
					if (t) {
						if (e === this.state.displayedVoteState) return this.props.vote(t.post.id, Cs.a.notVoted), void this.setState(Object.assign(Object.assign({}, this.state), {
							displayedVoteState: Cs.a.notVoted
						}));
						this.props.vote(t.post.id, e), this.setState(Object.assign(Object.assign({}, this.state), {
							displayedVoteState: e
						})), e === Cs.a.upvoted ? this.props.onUpvote() : this.props.onDownvote()
					}
				}
			}
			var Rs = Object(o.b)(ks, (e, t) => ({
					vote: (t, s) => e(Ss(t, s))
				}))(Is),
				Ts = s("./src/lib/opener/index.ts"),
				Ms = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				Ns = s("./src/reddit/icons/fonts/Share/index.tsx"),
				js = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				Ps = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				Ls = s("./src/reddit/icons/svgs/Report/index.tsx"),
				As = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				Ds = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				Vs = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				Bs = s("./src/reddit/icons/svgs/VideoShare/index.tsx"),
				Fs = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				Hs = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				Us = s.n(Hs);
			const Ws = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: Us.a.shareButton,
						onClick: t,
						"aria-label": g.fbt._("share video", null, {
							hk: "2e71ai"
						}),
						value: "share"
					}, n.a.createElement(Ns.a, {
						className: Us.a.menuIcon
					}))
				},
				Ks = e => {
					let {
						isMuted: t,
						onToggle: s
					} = e;
					return n.a.createElement("button", {
						className: Us.a.muteButton,
						onClick: s,
						"aria-label": g.fbt._("mute video", null, {
							hk: "Enspe"
						}),
						value: "mute"
					}, t ? n.a.createElement(Ds.a, {
						className: Us.a.volumeIcon
					}) : n.a.createElement(Fs.a, {
						className: Us.a.volumeIcon
					}))
				},
				Gs = G.a.wrapped(Ms.a, "menuIcon", Us.a),
				Ys = e => {
					let {
						onClick: t,
						onHideClick: s,
						onReportClick: a
					} = e;
					return n.a.createElement(os.b, {
						className: Us.a.menuButton,
						defaultButtonOutline: !0,
						dropdownId: "rpan-overlay-menu",
						icon: n.a.createElement(Gs, null),
						onClick: t
					}, n.a.createElement(rs.b, {
						className: Us.a.overflowItem,
						displayText: g.fbt._("View rules", null, {
							hk: "4lTvzy"
						}),
						iconWrapperClassName: Us.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-rules"),
						onClick: () => Object(Ts.d)(M.S, Ts.c.BLANK)
					}, n.a.createElement(As.a, {
						className: Us.a.overflowItemIcon
					})), n.a.createElement(rs.b, {
						className: Us.a.overflowItem,
						displayText: g.fbt._("Visit RPAN community", null, {
							hk: "3KZliI"
						}),
						iconWrapperClassName: Us.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-community"),
						onClick: () => Object(Ts.d)(M.Q, Ts.c.BLANK)
					}, n.a.createElement(Ps.a, {
						className: Us.a.overflowItemIcon
					})), n.a.createElement(rs.b, {
						className: Us.a.overflowItem,
						displayText: g.fbt._("Report", null, {
							hk: "4oVcnd"
						}),
						iconWrapperClassName: Us.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-report"),
						onClick: a
					}, n.a.createElement(Ls.a, {
						className: Us.a.overflowItemIcon
					})), n.a.createElement(rs.b, {
						className: Us.a.overflowItem,
						displayText: g.fbt._("Hide", null, {
							hk: "1qXTIB"
						}),
						iconWrapperClassName: Us.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-hide"),
						onClick: s
					}, n.a.createElement(js.a, {
						className: Us.a.overflowItemIcon
					})))
				},
				Xs = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: Us.a.promptButton,
						onClick: t
					}, n.a.createElement(Vs.a, null), n.a.createElement("span", null, g.fbt._("Replay Video", null, {
						hk: "1iD2Wj"
					})))
				},
				Js = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: Us.a.promptButton,
						onClick: t
					}, n.a.createElement(Bs.a, null), n.a.createElement("span", null, g.fbt._("Share Video", null, {
						hk: "FYgQy"
					})))
				},
				zs = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: "".concat(Us.a.promptButton, " ").concat(Us.a.awardButton),
						onClick: t
					}, n.a.createElement("span", null, g.fbt._("Award Now", null, {
						hk: "STk0L"
					})))
				};
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var qs = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				Zs = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				Qs = s("./src/reddit/icons/svgs/Lock/index.tsx"),
				$s = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				ea = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				ta = s("./src/reddit/icons/svgs/Unlock/index.tsx"),
				sa = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				aa = s.n(sa);
			const {
				fbt: na
			} = s("./node_modules/fbt/lib/FbtPublic.js"), oa = e => {
				let {
					live: t
				} = e;
				return n.a.createElement("div", {
					className: aa.a.broadcastStatus
				}, t ? n.a.createElement(ra, null) : n.a.createElement(ia, null))
			}, ra = () => na._("{=Live}", [na._param("=Live", n.a.createElement("span", {
				className: aa.a.live
			}, na._("Live", null, {
				hk: "8x90I"
			})))], {
				hk: "3ZBbO0"
			}), ia = () => na._("Recorded live", null, {
				hk: "2seH5c"
			}), ca = e => {
				let {
					onSubscribe: t,
					isSubscribed: s
				} = e;
				const [o, r] = Object(a.useState)(!1);
				return Object(a.useEffect)(() => {
					const e = setTimeout(() => {
						r(!1)
					}, 3e3);
					return () => clearTimeout(e)
				}, [o]), s ? o ? n.a.createElement(Zs.a, {
					className: aa.a.checkmarkIcon
				}) : null : n.a.createElement("button", {
					onClick: () => {
						r(!0), t()
					},
					className: aa.a.joinButton
				}, n.a.createElement($s.a, {
					className: aa.a.plusIcon
				}), n.a.createElement("span", {
					className: aa.a.joinText
				}, na._("Join", null, {
					hk: "3n0zBz"
				})))
			}, la = e => {
				let {
					onSelect: t,
					related: s,
					subreddit: a,
					subreddits: o
				} = e, r = "";
				r = "home" === s ? "All" : "r/popular" === s ? "r/popular" : a || "All";
				const i = o.filter(e => e.prefixedName !== r);
				return n.a.createElement(os.b, {
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: n.a.createElement("span", {
						className: aa.a.subreddit
					}, a || "RPAN"),
					isFixed: !0
				}, n.a.createElement("div", {
					className: aa.a.dropdownLabel
				}, na._("Pick a Community", null, {
					hk: "4AfDwd"
				})), i.map(e => n.a.createElement(rs.b, {
					className: aa.a.dropdownRow,
					displayText: e.prefixedName,
					key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
					onClick: () => t(e)
				})))
			}, da = e => {
				let {
					text: t
				} = e;
				return n.a.createElement("h1", {
					className: aa.a.title
				}, t)
			}, ma = e => {
				let {
					broadcast: t,
					live: s
				} = e;
				return n.a.createElement("div", {
					className: aa.a.watchersCount
				}, s ? n.a.createElement(ua, {
					count: Math.max(1, t.continuous_watchers)
				}) : n.a.createElement(pa, {
					count: Math.max(1, t.unique_watchers)
				}))
			}, ua = e => {
				let {
					count: t
				} = e;
				return na._({
					"*": "{number of watchers} watchers",
					_1: "1 watcher"
				}, [na._plural(t, "number of watchers", Object(fs.b)(t, {
					displayFull: !0
				}))], {
					hk: "3F0Nj0"
				})
			}, pa = e => {
				let {
					count: t
				} = e;
				return na._({
					"*": "{number of views} views",
					_1: "1 view"
				}, [na._plural(t, "number of views", Object(fs.b)(t, {
					displayFull: !0
				}))], {
					hk: "tSTjT"
				})
			}, ha = e => {
				let {
					onClick: t
				} = e;
				return n.a.createElement("button", {
					className: aa.a.shareButton,
					onClick: t,
					"aria-label": na._("Share video", null, {
						hk: "I91IP"
					}),
					value: "share"
				}, n.a.createElement(Ns.a, {
					className: aa.a.shareIcon
				}))
			}, ba = G.a.wrapped(Ms.a, "menuIcon", aa.a), va = e => {
				let {
					onClick: t,
					onHideClick: s,
					onReportClick: a,
					onToggleLockClick: o,
					isCommentsLocked: r,
					hasModeratorPermissions: i,
					onEndBroadcastClick: c
				} = e;
				return n.a.createElement(os.b, {
					className: aa.a.menuButton,
					defaultButtonOutline: !0,
					dropdownId: "rpan-overlay-menu",
					icon: n.a.createElement(ba, null),
					onClick: t
				}, n.a.createElement(rs.b, {
					className: aa.a.overflowItem,
					displayText: na._("View rules", null, {
						hk: "haY6r"
					}),
					iconWrapperClassName: aa.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-rules"),
					onClick: () => Object(Ts.d)(M.S, Ts.c.BLANK)
				}, n.a.createElement(As.a, {
					className: aa.a.overflowItemIcon
				})), n.a.createElement(rs.b, {
					className: aa.a.overflowItem,
					displayText: na._("Visit RPAN community", null, {
						hk: "1vVY6o"
					}),
					iconWrapperClassName: aa.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-community"),
					onClick: () => Object(Ts.d)(M.Q, Ts.c.BLANK)
				}, n.a.createElement(Ps.a, {
					className: aa.a.overflowItemIcon
				})), n.a.createElement(rs.b, {
					className: aa.a.overflowItem,
					displayText: na._("Report", null, {
						hk: "4oVcnd"
					}),
					iconWrapperClassName: aa.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-report"),
					onClick: a
				}, n.a.createElement(Ls.a, {
					className: aa.a.overflowItemIcon
				})), n.a.createElement(rs.b, {
					className: aa.a.overflowItem,
					displayText: na._("Hide", null, {
						hk: "15vs9C"
					}),
					iconWrapperClassName: aa.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-hide"),
					onClick: s
				}, n.a.createElement(js.a, {
					className: aa.a.overflowItemIcon
				})), i && n.a.createElement(n.a.Fragment, null, n.a.createElement(rs.b, {
					className: aa.a.headerItem,
					displayText: na._("Mod Actions", null, {
						hk: "19zCiw"
					}),
					key: "".concat("rpan-overlay-menu", "-modaction"),
					onClick: () => {}
				}), n.a.createElement(rs.b, {
					className: aa.a.overflowItem,
					displayText: r ? na._("Unlock comments", null, {
						hk: "Btg6R"
					}) : na._("Lock comments", null, {
						hk: "3Ew6q9"
					}),
					iconWrapperClassName: aa.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-lock"),
					onClick: o
				}, r ? n.a.createElement(ta.a, {
					className: aa.a.overflowItemIcon
				}) : n.a.createElement(Qs.a, {
					className: aa.a.overflowItemIcon
				})), n.a.createElement(rs.b, {
					className: aa.a.endBroadcastItem,
					displayText: na._("Remove broadcast", null, {
						hk: "3GaDuI"
					}),
					iconWrapperClassName: aa.a.overflowItemIconWrapper,
					key: "".concat("rpan-overlay-menu", "-end"),
					onClick: c
				}, n.a.createElement(ea.a, {
					className: aa.a.endBroadcastIcon
				}))))
			}, ga = Object(o.b)(null, e => ({
				vote: (t, s) => e(Ss(t, s))
			}))(class extends a.Component {
				constructor(e) {
					super(e), this.handleUpVote = () => {
						const e = this.toggleVoteState(Cs.a.upvoted);
						this.vote(e)
					}, this.handleDownVote = () => {
						const e = this.toggleVoteState(Cs.a.downvoted);
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
					return null == e ? null : t && void 0 !== this.voteState ? e - Object(Cs.e)(t) + this.voteState : e
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
					const e = this.voteState === Cs.a.upvoted,
						t = this.voteState === Cs.a.downvoted;
					return n.a.createElement("div", {
						className: aa.a.votePanel
					}, n.a.createElement(wa, {
						onClick: this.handleUpVote,
						voted: e
					}), null !== this.score ? n.a.createElement(Ca, {
						score: this.score
					}) : null, n.a.createElement(fa, {
						onClick: this.handleDownVote,
						voted: t
					}))
				}
				setVoteStateFromBroadcastProp() {
					const {
						id: e,
						voteState: t
					} = this.props.broadcast.post;
					this.setVoteState(e, Object(Cs.e)(t))
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
					return e === this.voteState ? Cs.a.notVoted : e
				}
				vote(e) {
					const {
						broadcast: t,
						onUpvote: s,
						onDownvote: a
					} = this.props, {
						id: n
					} = t.post;
					this.setVoteState(n, e), this.props.vote(n, e), e === Cs.a.upvoted ? s() : e === Cs.a.downvoted && a()
				}
			}), wa = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return n.a.createElement("button", {
					className: Object(c.a)(aa.a.voteButton, aa.a.upVoteButton, {
						[aa.a.voted]: s
					}),
					onClick: t,
					value: "upvote",
					"aria-label": na._("Upvote", null, {
						hk: "Ufd6r"
					})
				}, n.a.createElement(Es.b, {
					className: aa.a.voteIcon
				}))
			}, fa = e => {
				let {
					onClick: t,
					voted: s
				} = e;
				return n.a.createElement("button", {
					className: Object(c.a)(aa.a.voteButton, aa.a.downVoteButton, {
						[aa.a.voted]: s
					}),
					onClick: t,
					value: "downvote",
					"aria-label": na._("Downvote", null, {
						hk: "ZDRA3"
					})
				}, n.a.createElement(xs.b, {
					className: aa.a.voteIcon
				}))
			}, Ca = e => {
				let {
					score: t
				} = e;
				return n.a.createElement("div", {
					className: aa.a.score
				}, Object(fs.b)(t))
			}, _a = e => {
				let {
					children: t
				} = e;
				return n.a.createElement("div", {
					className: aa.a.prompt
				}, t)
			}, Sa = () => n.a.createElement(_a, null, na._("Connection issues", null, {
				hk: "hIrnJ"
			})), xa = () => n.a.createElement(_a, null, na._("Tuning...", null, {
				hk: "3dG7Ks"
			})), Ea = () => n.a.createElement(_a, null, na._("Broadcast paused", null, {
				hk: "jxvku"
			})), ya = e => {
				let {
					onClickReplay: t,
					onClickShare: s
				} = e;
				return n.a.createElement(_a, null, n.a.createElement("div", {
					className: aa.a.promptButtonSet
				}, n.a.createElement(Xs, {
					onClick: t
				}), n.a.createElement(Js, {
					onClick: s
				})))
			}, Oa = e => {
				let {
					onClickAward: t
				} = e;
				return n.a.createElement(_a, null, n.a.createElement("div", {
					className: aa.a.awardPromptWrapper
				}, n.a.createElement("div", {
					className: aa.a.awardPromptLabel
				}, na._("Award this broadcast to give it more airtime", null, {
					hk: "20jmEz"
				})), n.a.createElement(zs, {
					onClick: t
				})))
			}, ka = e => {
				if (!e) return !1;
				const {
					id: t,
					name: s
				} = e;
				return !(!t || !s || "string" != typeof t || "string" != typeof s)
			}, Ia = e => {
				let {
					profile: t
				} = e;
				const {
					name: s
				} = t, a = Pa(s), o = La(s, !a), r = a ? na._("Unfollow u/{name}", [na._param("name", s)], {
					hk: "2n0wqa"
				}) : na._("Follow u/{name}", [na._param("name", s)], {
					hk: "20X8Bw"
				});
				return n.a.createElement("button", {
					className: aa.a.subscribeToProfileButton,
					onClick: o,
					title: r
				}, n.a.createElement(Ra, {
					profile: t
				}), n.a.createElement(Ta, {
					isSubscribed: a
				}))
			}, Ra = e => {
				let {
					profile: t
				} = e;
				const {
					id: s,
					name: a
				} = t, r = Object(o.d)(e => Object(_s.hb)(e, {
					userName: a
				})), i = ja(r);
				return n.a.createElement("div", {
					className: aa.a.subscribeToProfileAvatar
				}, r ? i ? n.a.createElement("img", {
					src: r.accountIcon
				}) : n.a.createElement(qs.a, {
					userId: s
				}) : null)
			}, Ta = e => {
				let {
					isSubscribed: t
				} = e;
				return n.a.createElement("div", {
					className: Object(c.a)(aa.a.subscribeToProfileStatus, {
						[aa.a.isSubscribed]: t
					})
				}, t ? n.a.createElement(Ma, null) : n.a.createElement(Na, null))
			}, Ma = () => n.a.createElement("svg", {
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M17.7072 5.69337L16.3083 4.29337C16.1203 4.10537 15.8662 4.00037 15.6012 4.00037C15.3352 4.00037 15.0812 4.10537 14.8942 4.29337L7.90025 11.2864L5.10725 8.49337C4.71725 8.10237 4.08425 8.10237 3.69325 8.49337L2.29325 9.89337C1.90225 10.2844 1.90225 10.9174 2.29325 11.3074L7.19325 16.2074C7.38925 16.4024 7.64425 16.5004 7.90025 16.5004C8.15625 16.5004 8.41225 16.4024 8.60725 16.2074L17.7072 7.10737C18.0982 6.71637 18.0982 6.08437 17.7072 5.69337"
			})), Na = () => n.a.createElement("svg", {
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M12.8,6.4 L9.6,6.4 L9.6,3.2 C9.6,2.7576 9.2424,2.4 8.8,2.4 L7.2,2.4 C6.7576,2.4 6.4,2.7576 6.4,3.2 L6.4,6.4 L3.2,6.4 C2.7584,6.4 2.4,6.7576 2.4,7.2 L2.4,8.8 C2.4,9.2424 2.7584,9.6 3.2,9.6 L6.4,9.6 L6.4,12.8 C6.4,13.2424 6.7576,13.6 7.2,13.6 L8.8,13.6 C9.2424,13.6 9.6,13.2424 9.6,12.8 L9.6,9.6 L12.8,9.6 C13.2424,9.6 13.6,9.2424 13.6,8.8 L13.6,7.2 C13.6,6.7576 13.2424,6.4 12.8,6.4"
			})), ja = e => {
				const t = Object(o.d)(_s.i),
					s = Object(o.d)(_s.A),
					a = Object(o.d)(_s.Y);
				return !!e && (!!e.accountIcon && (!!t && (t.id === e.id || (!e.isNSFW || !!a && !s))))
			}, Pa = e => Object(o.d)(t => Object(ut.fb)(t, {
				identifier: {
					name: e,
					type: ct.a.PROFILE
				}
			})), La = (e, t) => {
				const s = Object(o.c)();
				return Object(a.useCallback)(() => s(Object(rt.d)([{
					name: e,
					type: ct.a.PROFILE
				}], t)), [s, e, t])
			};
			var Aa = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				Da = s.n(Aa);
			const {
				fbt: Va
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ba = (e, t) => {
				let {
					currentStreamId: s
				} = t;
				return s ? Object(Ke.l)(e, s) : void 0
			}, Fa = Object(i.c)({
				currentStream: Ba,
				inStreamingSubredditIntegration: Be.d,
				inStreamingUiRefreshViewer: Be.e,
				inViewerFeedTheMeter: (e, t) => Object(Be.f)(e, t, Ba),
				isApiError: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(We.c)(e, s)
				},
				isBatchApiError: We.e,
				isBatchPending: We.f,
				isCommentsLocked: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return !!s && Object(Ke.g)(e, s)
				},
				isConfigError: We.g,
				isIntroInProgress: Ge.b,
				isMenuOpened: e => "rpan-overlay-menu" === e.tooltipId || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltipId,
				lastBatchApiRequestTs: We.i,
				recommendedViewerSubredditOptions: We.j,
				isModWithPostPermissions: (e, t) => {
					let {
						subreddit: s
					} = t;
					const a = s && s.replace(/^r\//, "");
					return !!a && Object(mt.e)(e, {
						subredditId: Object(ut.G)(e, a)
					})
				},
				isUserSubscriber: (e, t) => {
					let {
						subreddit: s
					} = t;
					const a = s && s.replace(/^r\//, "");
					return !!a && Object(ut.fb)(e, {
						identifier: {
							name: a,
							type: ct.a.SUBREDDIT
						}
					}, !0)
				}
			});
			class Ha extends a.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.hoverTimeout = window.setTimeout(() => this.setState({
							isHovered: !0
						}), M.o)
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
							settingChange: it.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: it.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === it.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === it.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === it.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === it.a.Volume && s && s.handleMouseUp(e), this.setState({
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
						if (!t) return;
						const a = Object(Le.a)(t.post.id),
							n = S()(),
							o = {
								[je.q]: n,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							};
						e(Object(E.a)(a, o)), s({
							referralId: n
						})
					}, this.onToggleLock = () => {
						this.props.isCommentsLocked ? this.props.onUnlockComments() : this.props.onLockComments()
					}, this.state = {
						isHovered: !1,
						isHoveringVolumeControl: !1,
						settingChange: void 0
					}
				}
				componentDidMount() {
					this.props.getModeratedSubreddits()
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
						inStreamingSubredditIntegration: t,
						isIntroInProgress: s,
						isLive: a,
						isUnavailable: o,
						onHide: r,
						onReport: i,
						onToggleMenu: l,
						onUpvote: d,
						onDownvote: m
					} = this.props, u = e && e.post.id;
					return n.a.createElement("div", {
						className: Object(c.a)(Us.a.overlay, {
							[Us.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !s && n.a.createElement("div", {
						className: Us.a.overlayTop
					}, t && this.renderRecommendedViewerSubreddit(), e && !o && n.a.createElement(n.a.Fragment, null, !t && this.renderTitleContainer(), n.a.createElement(Ws, {
						onClick: this.onCopyLink
					}), n.a.createElement(Ys, {
						onClick: l,
						onHideClick: r,
						onReportClick: i
					}))), e && !s && !o && !!u && n.a.createElement(Ft, {
						className: Us.a.awardOverlaySpectacle,
						commentsPageKey: Object(et.a)(u)
					}), t && e && !s && !o && n.a.createElement("div", {
						className: Us.a.overlayTitle
					}, this.renderTitleContainer()), n.a.createElement("div", {
						className: Us.a.overlayCenter
					}, this.getContent()), e && !s && !o && n.a.createElement("div", {
						className: Us.a.overlayBottom
					}, n.a.createElement(Rs, {
						currentStreamId: e.post.id,
						isLive: a,
						onUpvote: d,
						onDownvote: m
					}), this.renderScrubber()))
				}
				renderUiRefresh() {
					const {
						currentStream: e,
						inViewerFeedTheMeter: t,
						isIntroInProgress: s,
						isCommentsLocked: a,
						isLive: o,
						isModWithPostPermissions: r,
						isUnavailable: i,
						onHide: l,
						onReport: d,
						onSelectSubreddit: m,
						onSubscribeSubreddit: u,
						onToggleMenu: p,
						recommendedViewerSubredditOptions: h,
						related: b,
						subreddit: v,
						isUserSubscriber: g,
						onEndBroadcast: w
					} = this.props;
					if (s || !e || i) return null;
					const f = e && e.post.id,
						{
							authorInfo: C
						} = e.post;
					return n.a.createElement("div", {
						className: Object(c.a)(aa.a.overlay, {
							[aa.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, e && !s && !i && !!f && n.a.createElement(Ft, {
						className: Us.a.awardOverlaySpectacle,
						commentsPageKey: Object(et.a)(f)
					}), t && n.a.createElement(ns, {
						currentStream: e,
						overlayOpen: this.isVisible(),
						openGildModal: () => this.props.handleGiveAward()
					}), this.renderPrompt(), n.a.createElement("div", {
						className: aa.a.overlayTop
					}, n.a.createElement("div", {
						className: aa.a.overlayTopLeft
					}, n.a.createElement("div", {
						className: aa.a.meta
					}, n.a.createElement(oa, {
						live: o
					}), n.a.createElement(da, {
						text: e.post.title
					}), n.a.createElement("div", {
						className: aa.a.subredditInfo
					}, n.a.createElement(la, {
						onSelect: m,
						related: b,
						subreddit: v,
						subreddits: h
					}), n.a.createElement(ca, {
						onSubscribe: u,
						isSubscribed: g
					})), n.a.createElement(ma, {
						broadcast: e,
						live: o
					}))), n.a.createElement("div", {
						className: aa.a.overlayTopRight
					}, ka(C) ? n.a.createElement(Ia, {
						profile: C
					}) : null, n.a.createElement(va, {
						onClick: p,
						onHideClick: l,
						onReportClick: d,
						onToggleLockClick: this.onToggleLock,
						isCommentsLocked: a,
						hasModeratorPermissions: r,
						onEndBroadcastClick: w
					}), n.a.createElement(ha, {
						onClick: this.onCopyLink
					}), n.a.createElement("div", {
						className: Object(c.a)({
							[aa.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, n.a.createElement(ga, {
						broadcast: e,
						onUpvote: this.props.onUpvote,
						onDownvote: this.props.onDownvote
					})))), n.a.createElement("div", {
						className: aa.a.overlayBottom,
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
						onPlayPauseToggle: o,
						onVideoPositionUpdate: r,
						setVolume: i,
						toggleMute: c,
						videoCurrentTime: l,
						videoTotalTime: d,
						volume: m
					} = this.props, u = e ? aa.a.controls : "", p = e || this.isVisible();
					return n.a.createElement("div", {
						className: u
					}, n.a.createElement(vs, {
						isLive: t,
						isMuted: s,
						isPaused: a,
						isVisible: p,
						onPlayPauseToggle: o,
						onVideoPositionUpdate: r,
						seekBarRef: e => this.seekBar = e,
						settingChange: this.state.settingChange,
						setVolume: i,
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
						isBatchApiError: o,
						isBatchPending: r,
						isConfigError: i,
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
					if (b || c && i || t && a || !t && o) return n.a.createElement(Sa, null);
					if (c) return n.a.createElement("div", {
						className: Us.a.intro
					}, n.a.createElement(Ks, {
						isMuted: d,
						onToggle: g
					}));
					if (m || !t && !o && !r && p) return null;
					if (l) return n.a.createElement(xa, null);
					if (e && e.stream.state === dt.a.DISCONNECTED) return n.a.createElement(Ea, null);
					if (v) return n.a.createElement(ya, {
						onClickReplay: h,
						onClickShare: this.onCopyLink
					});
					const w = e && e.meter && e.estimated_remaining_time < Xe;
					return u && w ? n.a.createElement(Oa, {
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
					let o = "",
						r = "";
					"home" === s ? (o = "All", r = "All") : "r/popular" === s ? (o = "Popular", r = "r/popular") : a ? (o = a.replace(/^r\//, ""), r = a) : (o = "All", r = "All");
					const i = t.filter(e => e.prefixedName !== r);
					return n.a.createElement("div", {
						className: Us.a.menuContainer
					}, n.a.createElement(ms, {
						label: o,
						onSelect: e,
						subreddits: i
					}))
				}
				renderTitleContainer() {
					const {
						currentStream: e,
						isLive: t
					} = this.props;
					if (e) return n.a.createElement("div", {
						className: Us.a.titleContainer
					}, n.a.createElement("h1", {
						className: Us.a.videoTitle
					}, e.post.title), !t && n.a.createElement("div", {
						className: Us.a.RecordedLabel
					}, Va._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(Da.a.ControlVolume)) return !0;
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
						isBatchPending: o,
						isConfigError: r,
						isIntroInProgress: i,
						isLoading: c,
						isMuted: l,
						isUnavailable: d,
						lastBatchApiRequestTs: m,
						onReplayVideo: u,
						showErrorPrompt: p,
						showStreamEndedPrompt: h,
						toggleMute: b
					} = this.props;
					return p || i && r || t && s || !t && a ? n.a.createElement("div", {
						className: Us.a.prompt
					}, Va._("Connection issues", null, {
						hk: "24LpRV"
					})) : i ? n.a.createElement("div", {
						className: Us.a.intro
					}, n.a.createElement(Ks, {
						isMuted: l,
						onToggle: b
					})) : d || !t && !a && !o && m ? null : c ? n.a.createElement("div", {
						className: Us.a.prompt
					}, Va._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === dt.a.DISCONNECTED ? n.a.createElement("div", {
						className: Us.a.prompt
					}, Va._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : h ? n.a.createElement("div", {
						className: Us.a.prompt
					}, n.a.createElement("div", {
						className: Us.a.promptButtonSet
					}, n.a.createElement(Xs, {
						onClick: u
					}), n.a.createElement(Js, {
						onClick: this.onCopyLink
					}))) : null
				}
			}
			var Ua = Object(o.b)(Fa, (e, t) => ({
					copyLink: t => e(Object(ne.v)(t)),
					onHide: () => {
						t.currentStreamId && (e(Object(ne.P)(t.currentStreamId, !0, !0, !0)), e(L(t.currentStreamId)))
					},
					onLockComments: () => {
						t.currentStreamId && e(nt(t.currentStreamId))
					},
					onUnlockComments: () => {
						t.currentStreamId && e(ot(t.currentStreamId))
					},
					handleGiveAward: () => {
						if (t.currentStreamId) {
							const s = Object(lt.d)(lt.a.GildingFlow, !0);
							e(Object(tt.d)({
								correlationId: s,
								thingId: t.currentStreamId
							}))
						}
					},
					onSubscribeSubreddit: () => {
						const s = t.subreddit && t.subreddit.split("/").pop();
						s && e(Object(rt.d)([{
							name: s,
							type: ct.a.SUBREDDIT
						}], !0))
					},
					getModeratedSubreddits: () => e(Object(st.b)())
				}))(Ha),
				Wa = s("./src/lib/constants/index.ts"),
				Ka = s("./src/lib/makeDraftKey/index.ts"),
				Ga = s("./src/reddit/actions/page.ts"),
				Ya = s("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				Xa = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Ja = s("./src/reddit/components/CommentsChat/Loader.ts"),
				za = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx");
			const {
				fbt: qa
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Za = G.a.wrapped(Y.f, "ModalFooter", Q.a), Qa = G.a.wrapped(Y.h, "ModalHeader", Q.a);
			var $a = e => {
				let {
					toggleModal: t,
					bodyText: s,
					title: a
				} = e;
				return n.a.createElement(Y.d, null, n.a.createElement(Qa, null, n.a.createElement(q.a, null, n.a.createElement("div", null, n.a.createElement("div", {
					className: Q.a.Title
				}, a)), n.a.createElement(J.a, {
					onClick: t
				}, n.a.createElement(Y.b, null)))), n.a.createElement("div", {
					className: Q.a.ModalText
				}, s), n.a.createElement(Za, {
					className: Q.a.ModalFooter
				}, n.a.createElement(X.i, {
					onClick: t,
					className: Q.a.Button,
					"data-redditstyle": !0
				}, qa._("I Understand", null, {
					hk: "1f4y1d"
				}))))
			};
			const {
				fbt: en
			} = s("./node_modules/fbt/lib/FbtPublic.js"), tn = () => en._("Because you’ve been flagged multiple times for violating Reddit’s {=Content Policy,} the system has removed your ability to participate in this chat. This can’t be undone (not even by a mod), but after 24 hours you’ll be able to chat again.", [en._param("=Content Policy,", n.a.createElement("a", {
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, en._("{=Content Policy},", [en._param("=Content Policy", n.a.createElement("span", {
				className: Q.a.Link
			}, en._("Content Policy", null, {
				hk: "47cyc2"
			})))], {
				hk: "3BF41m"
			})))], {
				hk: "ITZAq"
			});
			var sn = Object(K.a)(e => {
					let {
						toggleModal: t
					} = e;
					return n.a.createElement($a, {
						bodyText: tn(),
						title: en._("Sit back and watch for a bit", null, {
							hk: "nd6D"
						}),
						toggleModal: t
					})
				}),
				an = s("./src/reddit/icons/svgs/Info/index.tsx"),
				nn = s("./src/reddit/icons/svgs/Send/index.tsx"),
				on = s("./src/reddit/components/CommentsChat/MessageInput/MutedMessageInput.m.less"),
				rn = s.n(on);
			const {
				fbt: cn
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ln = Object(i.c)({
				isMuteModalOpen: e => "rpan-mute-chat-modal-id" === Object(me.a)(e)
			});
			class dn extends n.a.Component {
				constructor() {
					super(...arguments), this.onClickInfo = () => {
						this.props.onToggleMuteModal()
					}
				}
				render() {
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
						className: rn.a.InputLine
					}, n.a.createElement("span", {
						className: rn.a.FormBackground
					}, n.a.createElement("span", {
						className: rn.a.FormLine
					}, n.a.createElement(an.a, {
						className: rn.a.InfoIcon,
						onClick: this.onClickInfo
					}), n.a.createElement("div", {
						className: rn.a.Text
					}, cn._("Chat is unavailable", null, {
						hk: "12EjN3"
					}))), n.a.createElement(nn.a, {
						className: rn.a.SendIcon
					}))), this.props.isMuteModalOpen && n.a.createElement(sn, {
						toggleModal: this.props.onToggleMuteModal
					}))
				}
			}
			var mn = Object(o.b)(ln, e => ({
				onToggleMuteModal: () => e(Object(I.i)("rpan-mute-chat-modal-id"))
			}))(dn);
			const {
				fbt: un
			} = s("./node_modules/fbt/lib/FbtPublic.js"), pn = () => un._("Your messages have been flagged for violating Reddit’s {=Content Policy.} Have fun chatting, but if you’re flagged multiple times, you may lose the ability to participate in RPAN chats.", [un._param("=Content Policy.", n.a.createElement("a", {
				className: Q.a.Link,
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, un._("{=Content Policy}.", [un._param("=Content Policy", n.a.createElement("span", {
				className: Q.a.Link
			}, un._("Content Policy", null, {
				hk: "36gq1Y"
			})))], {
				hk: "2SSN6t"
			})))], {
				hk: "4aZsnf"
			});
			var hn = Object(K.a)(e => {
					let {
						toggleModal: t
					} = e;
					return n.a.createElement($a, {
						bodyText: pn(),
						title: un._("Be mindful of what you say", null, {
							hk: "3CDXHh"
						}),
						toggleModal: t
					})
				}),
				bn = (s("./node_modules/core-js/modules/es6.array.sort.js"), s("./src/reddit/selectors/posts.ts")),
				vn = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less"),
				gn = s.n(vn);
			const wn = Object(o.b)(() => Object(i.c)({
					allAwards: e => e.awards.models,
					post: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(bn.N)(e, {
							postId: s
						})
					}
				})),
				fn = ["Center", "Left", "Right"],
				Cn = ["Low", "Mid", "High"],
				_n = () => Math.floor(800 * Math.random()),
				Sn = e => e[Math.floor(Math.random() * e.length)],
				xn = e => {
					const t = Sn(fn),
						s = Sn(Cn),
						a = vt(e);
					return gn.a["award_".concat(a, "Tier_").concat(s).concat(t)]
				};
			class En extends a.Component {
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
								icon: n,
								coinPrice: o
							} = e[s];
							return {
								coinPrice: o,
								count: a,
								iconUrl: n.url,
								id: s
							}
						}).sort((e, t) => t.coinPrice - e.coinPrice),
						a = [];
					return s.forEach(e => {
						const {
							coinPrice: t,
							count: s,
							iconUrl: o
						} = e;
						for (let r = 0; r < s; r++) {
							const s = "".concat(_n(), "ms"),
								i = xn(t),
								l = n.a.createElement("img", {
									key: "".concat(e.id, "-").concat(r),
									className: Object(c.a)(gn.a.award, i),
									src: o,
									style: {
										animationDelay: s
									}
								});
							a.push(l)
						}
					}), n.a.createElement("div", {
						"aria-role": "presentation",
						className: gn.a.awardBubbler
					}, a)
				}
			}
			var yn = wn(En),
				On = s("./src/reddit/models/PostDraft/index.ts");
			const kn = Object(i.a)((e, t) => t, e => e.publicAccessNetwork.automuteLevels, (e, t) => {
				var s;
				return (null === (s = null == t ? void 0 : t[e]) || void 0 === s ? void 0 : s.level) || 0
			});
			var In = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				Rn = s.n(In);
			const Tn = Object(i.c)({
				isDisabled: (e, t) => Object(Ke.f)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: _s.I,
				isPostDataLoaded: (e, t) => {
					let {
						postId: s
					} = t;
					return !!Object(bn.N)(e, {
						postId: s
					})
				},
				replyComment: (e, t) => {
					let {
						postId: s
					} = t;
					return Object(pt.t)(e, {
						commentsPageKey: Object(et.a)(s)
					})
				},
				automuteViolationLevel: (e, t) => {
					let {
						postId: s
					} = t;
					return kn(e, s)
				},
				shouldSendAutoMuteRulesAndWarnings: e => Object(Be.g)(e),
				shouldSendAutoMuteWarningsOnly: e => Object(Be.h)(e)
			});
			var Mn;
			! function(e) {
				e.Warning = "warning", e.Mute = "mute"
			}(Mn || (Mn = {}));
			class Nn extends a.Component {
				constructor(e) {
					super(e), this.onDismissModal = () => {
						this.setState({
							automuteModal: null
						})
					}, this.state = {
						automuteModal: null
					}, this.props.postId && this.props.fetchAutomuteStatus()
				}
				componentDidMount() {
					this.props.postId && this.props.loadComments()
				}
				componentDidUpdate(e) {
					this.props.postId !== e.postId && (this.props.loadComments(), this.props.fetchAutomuteStatus()), this.props.automuteViolationLevel > e.automuteViolationLevel && (this.props.shouldSendAutoMuteRulesAndWarnings || this.props.shouldSendAutoMuteWarningsOnly) && (1 === this.props.automuteViolationLevel ? this.setState({
						automuteModal: Mn.Warning
					}) : this.props.automuteViolationLevel > 1 && this.setState({
						automuteModal: Mn.Mute
					}))
				}
				get shouldMuteChat() {
					return this.props.automuteViolationLevel > 1
				}
				render() {
					const {
						postId: e,
						isDisabled: t,
						isLoggedIn: s,
						isPostDataLoaded: a,
						location: o,
						openLoginModal: r,
						openRegisterModal: i,
						sendEvent: l,
						subredditId: d,
						replyComment: m,
						onFocusMessageInput: u
					} = this.props, p = Object(et.a)(e), h = m ? Object(Ka.a)(On.c.replyToComment, m.id) : Object(Ka.a)(On.c.replyToPost, e);
					return t ? n.a.createElement("div", {
						className: Object(c.a)(Rn.a.streamingChat, Rn.a.prompt)
					}, g.fbt._("Chat has been disabled", null, {
						hk: "3139v6"
					})) : a ? n.a.createElement("div", {
						"aria-label": g.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: Rn.a.streamingChat,
						onClick: this.props.onChatClick
					}, n.a.createElement(Ja.a, {
						className: Rn.a.chatScroller,
						emptyStateClassName: Rn.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: d,
						commentsPageKey: p
					}), s && (this.shouldMuteChat ? n.a.createElement(mn, null) : n.a.createElement(za.a, {
						key: "chatCommentsForm",
						postId: e,
						replyComment: m,
						draftKey: h,
						commentsPageKey: p,
						isEditing: !1,
						sendEvent: l,
						onFocusMessageInput: u,
						isLivestreaming: !0
					})), n.a.createElement(yn, {
						postId: e
					}), !s && n.a.createElement(Xa.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						location: o,
						openLoginModal: r,
						openRegisterModal: i,
						origin
					}), this.state.automuteModal === Mn.Warning && n.a.createElement(hn, {
						toggleModal: this.onDismissModal
					}), this.state.automuteModal === Mn.Mute && n.a.createElement(sn, {
						toggleModal: this.onDismissModal
					})) : n.a.createElement("div", {
						className: Object(c.a)(Rn.a.streamingChat, Rn.a.prompt)
					}, g.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var jn = Object(o.b)(Tn, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						loadComments: () => e(Object(Ga.q)(s, void 0, {
							sort: Wa.r.CHAT
						}, Wa.r.CHAT)),
						openLoginModal: () => e(Object(m.h)()),
						openRegisterModal: () => e(Object(m.i)()),
						fetchAutomuteStatus: () => e(Object(Ya.b)(s))
					}
				})(Nn),
				Pn = s("./src/reddit/icons/svgs/Pagination/back.tsx");
			var Ln = e => n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				An = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				Dn = s.n(An);
			const Vn = e => {
				let {
					isNext: t,
					onClick: s,
					stream: a
				} = e;
				return n.a.createElement("div", {
					className: Object(c.a)(Dn.a.switchContainer, t ? Dn.a.switchContainerNext : Dn.a.switchContainerPrevious)
				}, n.a.createElement("button", {
					className: Dn.a.switchButton,
					disabled: !a,
					onClick: s,
					"aria-label": t ? g.fbt._("Forward arrow", null, {
						hk: "3b7sZa"
					}) : g.fbt._("Back arrow", null, {
						hk: "1upGBK"
					}),
					value: t ? "forward" : "back"
				}, n.a.createElement("div", {
					className: Dn.a.streamThumbnail,
					style: a ? {
						backgroundImage: "url(".concat(a.stream.thumbnail, ")")
					} : {}
				}), t ? n.a.createElement(Ln, {
					className: Dn.a.arrowIcon
				}) : n.a.createElement(Pn.a, {
					className: Dn.a.arrowIcon
				})))
			};
			var Bn = e => n.a.createElement(n.a.Fragment, null, n.a.createElement(Vn, {
				isNext: !1,
				onClick: e.onPrevious,
				stream: e.previousStream
			}), n.a.createElement(Vn, {
				isNext: !0,
				onClick: e.onNext,
				stream: e.nextStream
			}));
			Object(N.a)(M.s);
			const Fn = Object(N.a)(M.A),
				Hn = (e, t) => async (s, a) => {
					const n = a(),
						o = Date.now(),
						r = e.map(e => Object(Ke.l)(n, e)).filter(Boolean).map(e => ({
							imageUrl: "".concat(e.stream.thumbnail, "?").concat(o),
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await Un(r, t)
				}, Un = (e, t) => Promise.all(e.map(e => Wn(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), Wn = e => new Promise((t, s) => {
					const a = new Image;
					a.onload = () => t(), a.onerror = () => s(), a.src = e
				}).then(() => !0, () => !1);
			var Kn, Gn = s("./src/reddit/components/PublicAccessNetwork/Theater/VisualEffectScreen/index.m.less"),
				Yn = s.n(Gn);
			! function(e) {
				e.Loading = "Loading", e.Preview = "Preview", e.Static = "Static"
			}(Kn || (Kn = {}));
			class Xn extends a.Component {
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: a
					} = this.props, n = [];
					e && n.push(e.post.id), s && n.push(s.post.id), a && n.push(a.post.id), n.length > 0 && t(n)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: a,
						previousStream: n
					} = this.props, o = [];
					t && this.isStreamChanged(t, e.currentStream) && o.push(t.post.id), n && this.isStreamChanged(n, e.previousStream) && o.push(n.post.id), s && this.isStreamChanged(s, e.nextStream) && o.push(s.post.id), o.length > 0 && a(o)
				}
				render() {
					const {
						previewUrl: e,
						visualEffect: t,
						visualEffectLabel: s
					} = this.props;
					let a, o;
					if (t === Kn.Loading) a = Yn.a.loading;
					else if (t === Kn.Preview) a = Yn.a.preview, o = {
						backgroundImage: "url(".concat(e, ")")
					};
					else {
						if (t !== Kn.Static) return null;
						a = Yn.a.static
					}
					return n.a.createElement("div", {
						className: Yn.a.container
					}, n.a.createElement("div", {
						className: a,
						"aria-label": s,
						style: o
					}))
				}
				isStreamChanged(e, t) {
					return !!e && (t && e.post.id !== t.post.id || !t)
				}
			}
			var Jn = Object(o.b)(null, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, a) => {
						const n = await s(Hn(e, t));
						s(Fn(n))
					})(t))
				}))(Xn),
				zn = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				qn = s.n(zn);
			const Zn = Object(x.a)(W.a, {
					playerName: "RPAN Video Player"
				}),
				Qn = Object(i.c)({
					currentStream: Ke.d,
					currentStreamStartTime: Ke.e,
					currentHlsUrl: Ke.b,
					inRpanLoadingAnimation: Be.b,
					inRpanNewVolumePolicy: Be.c,
					inStreamingSubredditIntegration: Be.d,
					inVideoNewVolumePolicyFeed: Fe.a,
					inViewerFeedTheMeter: (e, t) => Object(Be.f)(e, t, Ke.d),
					isIntroInProgress: Ge.b,
					isMuted: e => e.publicAccessNetwork.userSettings.isMuted,
					isOverlayOpen: Ue.i,
					isReportFlowOpen: (e, t) => {
						let {
							streamIdFromPath: s
						} = t;
						return e.reportFlow.postOrCommentId === Object(Le.h)(s || "")
					},
					lastChatActivityUtcTs: Ge.c,
					nextStream: Ke.h,
					nextTopStream: Ke.i,
					playbackState: Ke.j,
					previousStream: Ke.k,
					unavailableVideoUrl: We.o,
					volume: He.d,
					isEndBroadcastModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(me.a)(e),
					isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(me.a)(e),
					isIntroChatModalOpen: e => "rpan-intro-chat-modal-id" === Object(me.a)(e),
					shouldSendAutoMuteRulesAndWarnings: e => Object(Be.g)(e),
					previewUrl: Ke.c
				}),
				$n = Object(o.b)(Qn, (e, t) => ({
					closeLocation: () => e(Object(r.b)(t.location.state[Me.a.CloseLocation])),
					fetchBroadcasterProfileInfo: t => e(Object(R.d)(t, !0)),
					fetchPostForStream: t => e(Object(T.a)(t)),
					subscribeConfig: () => e(V.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(V.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(V.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: (t, s) => e(Object(H.j)(t, s)),
					onStatsSubscribe: t => e(V.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(V.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(u.a)(t)),
					receiveHlsStreamRemoved: t => e(Object(u.b)(t)),
					removeStreamFromHistory: t => e(L(t)),
					setNewCorrelationId: () => e(Object(B.b)()),
					setIntroFinishedStatus: t => e(Object(B.c)({
						isIntroFinished: t
					})),
					setMuteSettings: t => e(Object(F.b)({
						isMuted: t
					})),
					setMutedInFeed: t => e(U.H(t)),
					setVideoVolume: t => e(k.h(t)),
					updateVideoTimestamp: (t, s) => e(D({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(P(e))
					})(t)),
					resetHistory: () => e(A()),
					toggleIntroChatModal: () => e(Object(I.i)("rpan-intro-chat-modal-id")),
					toggleEndBroadcastModal: () => e(Object(I.i)("rpan-end-broadcast-confirmation-id")),
					toggleRemovalReasonModal: () => e(Object(I.i)("rpan-add-removal-reason-id"))
				}));
			class eo extends a.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = n.a.createRef(), this.onHlsRefChange = e => {
						this.hlsVideoApi = e
					}, this.onCurrentTimeChanged = e => {
						this.onCurrentTimeChangedThrottled(e), this.state.videoCurrentTime !== e && this.setState({
							videoCurrentTime: e
						})
					}, this.onCurrentTimeChangedThrottled = f()(e => {
						const {
							currentStream: t,
							isIntroInProgress: s,
							updateVideoTimestamp: a
						} = this.props;
						!s && t && this.isCurrentStreamWatchable() && a(t.post.id, e)
					}, M.p), this.onVideoPlayerPositionUpdate = e => {
						this.state.videoCurrentTime !== e && (this.props.sendEvent(Object(Ae.r)(this.props.currentStream, Object.assign(Object.assign({}, this.getPlaybackStats()), {
							scrubbingStartMs: this.convertToMs(this.state.videoCurrentTime),
							scrubbingEndMs: this.convertToMs(e)
						}))), this.setState({
							videoCurrentTime: e
						}), this.hlsVideoApi && this.hlsVideoApi.setCurrentTime(e))
					}, this.onNextStream = f()(() => {
						const {
							nextStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(Ae.h)(e, this.getPlaybackStats())), this.goToStream(e))
					}, M.q, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = f()(() => {
						const {
							previousStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(Ae.i)(e, this.getPlaybackStats())), this.goToStream(e))
					}, M.q, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(Pe.g)(e.target) ? e.stopPropagation() : e.keyCode === Ne.a.ArrowRight ? this.onNextStream() : e.keyCode === Ne.a.ArrowLeft && this.onPreviousStream()
					}, this.onPlayPauseToggle = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.isVideoPaused ? this.playVideo() : this.pauseVideo()
					}, this.onToggleMuteVideo = () => {
						const e = !this.isMuted;
						this.setVideoMute(e), this.props.inVideoNewVolumePolicyFeed && this.props.setMutedInFeed(e)
					}, this.onSetVolume = (e, t) => {
						const s = this.hlsVideoApi;
						s && (t ? 0 !== e ? (this.props.setVideoVolume(e), this.props.inVideoNewVolumePolicyFeed && this.props.setMutedInFeed(!1)) : (this.props.inRpanNewVolumePolicy ? this.setState({
							isMuted: !0
						}) : this.props.setMuteSettings(!0), this.props.inVideoNewVolumePolicyFeed && this.props.setMutedInFeed(!0)) : (s.setVolume(e), e || this.isMuted ? e && this.isMuted && this.setVideoMute(!1) : this.setVideoMute(!0)))
					}, this.onReplayVideo = () => {
						this.cancelSwitchingOnStreamEnded(), this.replayVideo()
					}, this.onScrubbing = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.showStreamEndedPrompt && this.playVideo()
					}, this.onEndBroadcast = () => {
						this.props.toggleRemovalReasonModal()
					}, this.onShareVideo = e => {
						this.props.currentStream && this.props.sendEvent(Object(Ae.m)(this.props.currentStream, this.getPlaybackStats(), null == e ? void 0 : e.referralId)), this.cancelSwitchingOnStreamEnded()
					}, this.onToggleMenu = () => {
						this.cancelSwitchingOnStreamEnded()
					}, this.getSessionDurationTimer = e => "session-duration-".concat(e), this.getWatchDurationTimer = e => "watch-duration-".concat(e), this.setVideoMute = e => {
						this.props.inRpanNewVolumePolicy ? this.setState(() => ({
							isMuted: e
						})) : this.props.setMuteSettings(e);
						const t = this.hlsVideoApi;
						if (!t) return;
						const s = e ? Ae.q : Ae.x;
						e || t.setVolume(this.props.volume), this.props.sendEvent(s(this.props.currentStream, this.getPlaybackStats()))
					}, this.goToSubreddit = e => {
						this.props.sendEvent(Object(Ae.o)(e, this.props.currentStream)), this.props.onNavigation(e.path)
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === Ke.a.LIVE || this.props.playbackState === Ke.a.VOD, this.state = {
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
					}, this.previouslyActiveElement = null, this.onAutoPlayPrevented = this.onAutoPlayPrevented.bind(this), this.onClose = this.onClose.bind(this), this.onEnded = this.onEnded.bind(this), this.onNextStream = this.onNextStream.bind(this), this.onPlayerError = this.onPlayerError.bind(this), this.onPreviousStream = this.onPreviousStream.bind(this), this.onReport = this.onReport.bind(this), this.onVideoPlayerLevelLoaded = this.onVideoPlayerLevelLoaded.bind(this), this.onVideoPlayerLoadedData = this.onVideoPlayerLoadedData.bind(this), this.onSendHeartbeat = this.onSendHeartbeat.bind(this), this.onVideoPlayerLoadingData = this.onVideoPlayerLoadingData.bind(this), this.onChatClick = this.onChatClick.bind(this), this.handleFocusMessageInput = this.handleFocusMessageInput.bind(this), this.onUpvote = this.onUpvote.bind(this), this.onDownvote = this.onDownvote.bind(this), this.onVideoPlayerResourceRemoved = this.onVideoPlayerResourceRemoved.bind(this), this.scheduleSwitchingOnStreamEnded = this.scheduleSwitchingOnStreamEnded.bind(this)
				}
				get isMuted() {
					const {
						isMuted: e
					} = this.props.inRpanNewVolumePolicy ? this.state : this.props;
					return e
				}
				componentDidMount() {
					const e = this.focusRef.current;
					e.classList.add(qn.a.focusVisible), Object(O.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, y(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.inStreamingSubredditIntegration && this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(De.p)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream()
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						isIntroInProgress: s,
						isOverlay: a,
						isOverlayOpen: n,
						isReportFlowOpen: o,
						onHeartbeatSubscribe: r,
						onRecommendedViewerSubredditsSubscribe: i,
						onStatsSubscribe: c,
						playbackState: l,
						related: d,
						subreddit: m,
						subscribeConfig: u,
						subscribeStreams: p
					} = this.props;
					a || n === e.isOverlayOpen || (n ? (this.setState(e => {
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
					}), u().then(e => this.unsubscribeConfig = e), p().then(e => this.unsubscribeStreams = e), t && this.isCurrentStreamWatchable() && (r(t.post.id).then(e => this.unsubscribeHeartbeat = e), c(t.post.id).then(e => this.unsubscribeStats = e)), i().then(e => this.unsubscribeRecommendedViewerSubreddits = e)));
					const h = e.related || e.subreddit,
						b = d || m;
					if (e.currentStream && this.props.currentStream && e.currentStream.post.id !== this.props.currentStream.post.id && this.handleOldStream(), b !== h) return this.props.resetHistory(), this.handleNewStream(), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), void(t || this.setState({
						isLoading: !0
					}));
					!s && e.isIntroInProgress && this.handleNewStream(), s || e.isIntroInProgress || !so(t, e.currentStream) || this.handleNewStream(), this.state.isSwitchingOnStreamEndedScheduled || s || !(!t && !this.state.isLoading || l === Ke.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), s || t || this.state.isLoading || this.state.isError || this.setState(Object.assign(Object.assign({}, this.state), {
						isError: !0
					})), o && this.state.isVideoPaused && this.setState({
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
						inRpanLoadingAnimation: a,
						inViewerFeedTheMeter: o,
						isIntroInProgress: r,
						isOverlay: i,
						isReportFlowOpen: l,
						location: d,
						nextStream: m,
						playbackState: u,
						previewUrl: p,
						previousStream: h,
						related: b,
						sendEvent: v,
						subreddit: w,
						timestamp: f,
						unavailableVideoUrl: C,
						volume: _,
						isRemovalReasonModalOpen: S,
						isEndBroadcastModalOpen: x,
						isIntroChatModalOpen: E
					} = this.props, {
						isError: y,
						isLoading: O,
						isOverlayVisible: k,
						isVideoPaused: I,
						showStreamEndedPrompt: R,
						videoCurrentTime: T,
						videoTotalTime: M
					} = this.state, N = e && e.post.id, j = s !== C, P = e && !e.post.subreddit, L = u === Ke.a.LIVE, A = "number" == typeof f ? f : t;
					let D, V, B, F;
					e && j ? (D = 1e3 * e.broadcast_time, V = N, B = L, F = e.post.title) : (D = void 0, V = void 0, B = !1, F = "RPAN Unavailable Video");
					const H = e && e.meter && 10 * Math.round(e.estimated_remaining_time / 10),
						U = o && e && e.estimated_remaining_time < Je && !r,
						W = void 0 !== H && H >= 0 && U ? qn.a["meterCritical".concat(H)] : void 0;
					let K, G;
					return O || y ? K = p ? Kn.Preview : a ? Kn.Loading : Kn.Static : U && (K = Kn.Static), O ? G = g.fbt._("video is loading", null, {
						hk: "jUJdy"
					}) : y ? G = g.fbt._("unable to load video", null, {
						hk: "1Eh3Rt"
					}) : U && (G = g.fbt._("this broadcast will expire soon. give an award to add more time.", null, {
						hk: "3dUpDV"
					})), n.a.createElement("div", {
						className: Object(c.a)(qn.a.theaterContainer, {
							[qn.a.overlay]: i
						}),
						ref: this.focusRef,
						tabIndex: -1
					}, n.a.createElement("div", {
						className: Object(c.a)(qn.a.panesWrapper, {
							[qn.a.initialized]: !r
						})
					}, n.a.createElement("div", {
						className: Object(c.a)(qn.a.pane, qn.a.leftPane)
					}, n.a.createElement("div", {
						className: qn.a.videoContainer
					}, K && G && n.a.createElement(Jn, {
						previousStream: h,
						currentStream: e,
						nextStream: m,
						previewUrl: p,
						visualEffect: K,
						visualEffectLabel: G
					}), s && n.a.createElement("div", {
						className: W
					}, n.a.createElement(Zn, {
						autoplay: !0,
						controls: !1,
						startTime: A,
						isPaused: I,
						muted: this.isMuted,
						muxVideoDuration: D,
						muxVideoId: V,
						muxVideoIsLive: B,
						muxVideoTitle: F,
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
					})), n.a.createElement(Ua, {
						currentStreamId: N,
						isLoading: O,
						isLive: L,
						isMuted: this.isMuted,
						isPaused: I,
						isUnavailable: u === Ke.a.UNAVAILABLE,
						isVisible: k,
						onReplayVideo: this.onReplayVideo,
						onShareVideo: this.onShareVideo,
						onPlayPauseToggle: this.onPlayPauseToggle,
						onReport: this.onReport,
						onScrubbing: this.onScrubbing,
						onEndBroadcast: this.onEndBroadcast,
						onSelectSubreddit: this.goToSubreddit,
						onToggleMenu: this.onToggleMenu,
						onUpvote: this.onUpvote,
						onDownvote: this.onDownvote,
						onVideoPositionUpdate: this.onVideoPlayerPositionUpdate,
						related: b,
						sendEvent: v,
						setVolume: this.onSetVolume,
						showErrorPrompt: y,
						showStreamEndedPrompt: R,
						subreddit: w,
						toggleMute: this.onToggleMuteVideo,
						videoCurrentTime: T,
						videoTotalTime: M,
						volume: _
					}), (S || x) && e && n.a.createElement(Re, {
						subredditId: e.post.subreddit.id,
						subredditName: e.post.subreddit.name,
						postId: e.post.id,
						toggleModal: this.onEndBroadcast
					}), E && this.props.shouldSendAutoMuteRulesAndWarnings && n.a.createElement(ae, {
						toggleModal: this.props.toggleIntroChatModal
					}))), !r && n.a.createElement("div", {
						className: Object(c.a)(qn.a.pane, qn.a.rightPane)
					}, e && !P && n.a.createElement(jn, {
						location: d,
						onChatClick: this.onChatClick,
						onFocusMessageInput: this.handleFocusMessageInput,
						postId: e.post.id,
						sendEvent: v,
						subredditId: e.post.subreddit.id
					}))), e && !r && n.a.createElement(Bn, {
						nextStream: m,
						onNext: this.onNextStream,
						onPrevious: this.onPreviousStream,
						previousStream: h
					}), e && !r && i && n.a.createElement(to, {
						onClick: this.onClose
					}), e && !r && l && n.a.createElement(Te.a, {
						overlayCustomStyles: Te.b,
						postId: e.post.id,
						timestamp: Math.trunc(T),
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
					}), t && !e.live && 0 !== e.endSN && s === Ke.a.LIVE && a(t.post.id)
				}
				onVideoPlayerLoadingData() {
					this.setState({
						isLoading: !0,
						isError: !1
					})
				}
				onSendHeartbeat() {
					this.props.sendEvent(Object(Ae.t)(this.props.currentStream, this.getPlaybackStats())), this.setState({
						heartbeatDurationOffset: this.getWatchDuration()
					})
				}
				startTimers() {
					this.startWatch(), C.c.start(this.getSessionDurationTimer(this.state.id)), this.fiveSecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 5e3), this.fifteenSecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 15e3), this.thirtySecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 3e4), this.fortyfiveSecondSessionTimer = window.setTimeout(this.onSendHeartbeat, 45e3), this.minuteSessionTimer = window.setInterval(this.onSendHeartbeat, 6e4)
				}
				onVideoPlayerLoadedData() {
					this.setState({
						isLoading: !1,
						isError: !1,
						startTime: Date.now(),
						watchDuration: 0,
						heartbeatDurationOffset: 0,
						sessionDuration: 0,
						id: S()()
					}, () => {
						this.props.currentStream && (this.props.sendEvent(Object(Ae.w)(this.props.currentStream, this.getPlaybackStats())), this.startTimers())
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
					this.props.currentStream && this.props.sendEvent(Object(Ae.j)(this.props.currentStream, this.getPlaybackStats()))
				}
				handleFocusMessageInput() {
					z.G() || this.props.toggleIntroChatModal()
				}
				onUpvote() {
					this.props.currentStream && this.props.sendEvent(Object(Ae.n)(this.props.currentStream, this.getPlaybackStats()))
				}
				onDownvote() {
					this.props.currentStream && this.props.sendEvent(Object(Ae.k)(this.props.currentStream, this.getPlaybackStats()))
				}
				onEnded() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						playbackState: s,
						sendEvent: a,
						setIntroFinishedStatus: n
					} = this.props;
					if (this.pauseWatch(), this.setState({
							isVideoPaused: !0
						}), t) return n(!0), void this.setState(Object.assign(Object.assign({}, this.state), {
						isLoading: !!e
					}));
					e && a(Object(Ae.u)(e, this.getPlaybackStats())), s !== Ke.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(Ae.v)(this.props.currentStream, this.getPlaybackStats())), this.setState(Object.assign(Object.assign({}, this.state), {
						isError: !0
					}))
				}
				onAutoPlayPrevented() {
					this.props.inRpanNewVolumePolicy ? this.setState({
						isMuted: !0
					}) : this.props.setMuteSettings(!0)
				}
				onClose() {
					this.props.sendEvent(Object(Ae.b)(this.props.currentStream, this.getPlaybackStats())), this.props.isOverlay && this.props.closeLocation()
				}
				onReport() {
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id, this.props.isOverlay), this.props.sendEvent(Object(Ae.l)(this.props.currentStream)))
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
					return C.c.has(e) ? C.c.getTime(e) : 0
				}
				endTimers() {
					const e = this.getWatchDurationTimer(this.state.id),
						t = this.getSessionDurationTimer(this.state.id);
					C.c.has(e) && C.c.end(e), C.c.has(t) && C.c.end(t), clearTimeout(this.fiveSecondSessionTimer), clearTimeout(this.fifteenSecondSessionTimer), clearTimeout(this.thirtySecondSessionTimer), clearTimeout(this.fortyfiveSecondSessionTimer), clearInterval(this.minuteSessionTimer)
				}
				getWatchDuration() {
					let e = 0;
					const t = this.getWatchDurationTimer(this.state.id);
					return C.c.has(t) && (e = C.c.getTime(t)), e + this.state.watchDuration
				}
				pauseWatch() {
					const e = this.getWatchDuration(),
						t = this.getWatchDurationTimer(this.state.id);
					return C.c.has(t) && C.c.end(t), this.setState({
						watchDuration: e
					}), e
				}
				startWatch() {
					C.c.start(this.getWatchDurationTimer(this.state.id))
				}
				convertToMs(e) {
					return Math.round(1e3 * e)
				}
				getVolume() {
					if (this.isMuted) return 0;
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
						playerType: Ae.a.Theater,
						heartbeatDurationMs: this.getWatchDuration() - this.state.heartbeatDurationOffset
					}
				}
				pauseVideo() {
					if (this.state.isVideoPaused) return;
					const e = this.pauseWatch();
					this.setState({
						watchDuration: e
					}, () => {
						this.props.sendEvent(Object(Ae.c)(this.props.currentStream, this.getPlaybackStats()))
					}), this.setState({
						isVideoPaused: !0
					})
				}
				playVideo() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
						sendEvent: !0
					};
					this.state.isVideoPaused && (this.startWatch(), e.sendEvent && this.props.sendEvent(Object(Ae.d)(this.props.currentStream, this.getPlaybackStats())), this.hideStreamEndedPrompt(), this.setState({
						isVideoPaused: !1
					}))
				}
				replayVideo() {
					this.props.sendEvent(Object(Ae.e)(this.props.currentStream, this.getPlaybackStats())), this.onVideoPlayerPositionUpdate(0), this.playVideo({
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
						s && !e && !Object(Ge.a)(t) && this.state.isSwitchingOnStreamEndedScheduled ? this.goToStream(s) : this.cancelSwitchingOnStreamEnded()
					}, M.k), this.setState(Object.assign(Object.assign({}, this.state), {
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
						related: s,
						timestamp: a
					} = this.props;
					if (t) {
						const t = Object(Le.d)(e);
						return Object(E.a)(t, {
							[je.r]: s,
							[je.w]: a
						})
					}
					return Object(Le.f)(e.post.id)
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
					this.state.id && (this.props.sendEvent(Object(Ae.t)(this.props.currentStream, this.getPlaybackStats())), this.endTimers())
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
						watchDuration: 0,
						heartbeatDurationOffset: 0,
						id: "",
						sessionDuration: 0,
						startTime: 0
					}), a(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), s(e.post.id), e.post.authorInfo && e.post.authorInfo.name && t(e.post.authorInfo.name), this.syncLocationWithCurrentStreamId(), this.props.sendEvent(Object(Ae.y)(e)), this.setConsumePostTimeout(), this.showOverlayAfterStreamSwitching())
				}
				setConsumePostTimeout() {
					window.clearTimeout(this.consumePostTimeout), this.consumePostTimeout = window.setTimeout(() => this.props.sendEvent(Object(Ae.p)(this.props.currentStream)), v.a.telemetry.postConsumedThreshold)
				}
				showOverlayAfterStreamSwitching() {
					window.clearTimeout(this.overlayVisibilityTimeout), this.overlayVisibilityTimeout = window.setTimeout(() => this.setState({
						isOverlayVisible: !1
					}), M.n), this.setState({
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
					const n = !a || Object(Le.b)(e.post.id) === a;
					s(this.getStreamLocation(e), n)
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
			const to = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: qn.a.closeButton,
						onClick: t,
						"aria-label": g.fbt._("close button", null, {
							hk: "2l5YIS"
						})
					}, n.a.createElement(Ve.a, {
						className: qn.a.closeIcon
					}))
				},
				so = (e, t) => (e && e.post.id) !== (t && t.post.id);
			var ao = $n(Object(ce.c)(eo)),
				no = s("./src/reddit/contexts/InsideOverlay.tsx"),
				oo = s("./src/reddit/helpers/overlay/index.ts"),
				ro = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				io = s.n(ro);
			const {
				fbt: co
			} = s("./node_modules/fbt/lib/FbtPublic.js"), lo = Object(d.a)((e, t) => {
				let {
					match: {
						params: s
					}
				} = t;
				return s
			}), mo = Object(d.a)((e, t) => {
				let {
					location: {
						search: s
					}
				} = t;
				return Object(l.a)(s)
			}), uo = Object(i.a)(lo, mo, (e, t) => {
				const s = t.get(je.r),
					{
						subredditName: a
					} = e;
				return "home" === s || "r/popular" === s ? s : "popular" === a ? "r/popular" : a ? void 0 : "home"
			}), po = Object(i.a)(mo, e => {
				const t = e.get(je.w);
				if (!t) return;
				const s = parseInt(t, 10);
				return isNaN(s) ? void 0 : s
			}), ho = Object(i.c)({
				isEnabled: Be.a,
				isIntroInProgress: Ge.b,
				isOnboardingModal: e => e.publicAccessNetwork.userSettings.shouldShowOnboardingModal && !0,
				related: uo,
				timestamp: po
			}), bo = Object(o.b)(ho, (e, t) => ({
				onOpenLoginModal: () => e(Object(m.h)()),
				onStreamByIdRequested: t => e(Object(u.d)(t)),
				updateLocation: (t, s) => {
					let {
						isOverlay: a,
						useReplace: n
					} = s;
					const o = n ? r.c : r.b,
						i = a ? Object(oo.b)(t) : t;
					e(o(i))
				}
			}));
			class vo extends n.a.Component {
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
						location: o,
						match: r,
						related: i,
						timestamp: l
					} = this.props, {
						subredditName: d,
						partialPostId: m
					} = r.params;
					return e ? n.a.createElement("div", {
						className: Object(c.a)(io.a.rpanContainer, {
							[io.a.overlay]: a
						})
					}, n.a.createElement(ao, {
						isOverlay: !!a,
						location: o,
						onNavigation: this.onNavigation,
						related: i,
						streamIdFromPath: m,
						subreddit: d && "r/".concat(d),
						timestamp: m ? l : void 0
					}), s && !t && n.a.createElement(b, null)) : n.a.createElement(go, null)
				}
			}
			const go = () => n.a.createElement("div", {
				className: Object(c.a)(io.a.rpanContainer, io.a.forbiddenScreen)
			}, n.a.createElement("h2", null, co._("Not Found", null, {
				hk: "2ijDv5"
			})));
			t.default = bo(Object(ce.c)(Object(no.b)(vo)))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PublicAccessNetwork.309309f7e05f342a350c.js.map