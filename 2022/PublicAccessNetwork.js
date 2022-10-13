// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.afe52885c1b43a1d4f35.js
// Retrieved at 10/13/2022, 9:40:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["PublicAccessNetwork"], {
		"./node_modules/bowser/src/bowser.js": function(e, t, s) {
			var o;
			o = function() {
				var e = !0;

				function t(t) {
					function s(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[1] || ""
					}

					function o(e) {
						var s = t.match(e);
						return s && s.length > 1 && s[2] || ""
					}
					var n, r = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						a = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						d = !i && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						b = /windows phone/i.test(t),
						h = (/SamsungBrowser/i.test(t), !b && /windows/i.test(t)),
						v = !r && !l && /macintosh/i.test(t),
						g = !a && !m && !u && !p && /linux/i.test(t),
						f = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						S = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						w = !O && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: S || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || S
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: S || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: S || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: S || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : b ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, f ? (n.msedge = e, n.version = f) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: f
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || S
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
					}, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t) && (n.firefoxos = e, n.osname = "Firefox OS")) : l ? n = {
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
						version: S || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: S || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || S
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || S
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || S
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? n = {
						name: "Android",
						version: S
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, S && (n.version = S)) : r ? (n = {
						name: "iphone" == r ? "iPhone" : "ipad" == r ? "iPad" : "iPod"
					}, S && (n.version = S)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || S
					} : {
						name: s(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && S && (n.version = S)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !a && !n.silk ? !n.windowsphone && r ? (n[r] = e, n.ios = e, n.osname = "iOS") : v ? (n.mac = e, n.osname = "macOS") : _ ? (n.xbox = e, n.osname = "Xbox") : h ? (n.windows = e, n.osname = "Windows") : g && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var C = "";
					n.windows ? C = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? C = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? C = (C = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : r ? C = (C = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? C = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? C = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? C = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? C = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (C = s(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (n.osversion = C);
					var y = !n.windows && C.split(".")[0];
					return O || d || "ipad" == r || a && (3 == y || y >= 4 && !w) || n.silk ? n.tablet = e : (w || "iphone" == r || "ipod" == r || a || i || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) o.push(t(e[s]));
					return o
				}

				function r(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), s = n(e, (function(e) {
							var s = t - o(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, o, n) {
					var a = s;
					"string" == typeof o && (n = o, o = void 0), void 0 === o && (o = !1), n && (a = t(n));
					var i = "" + a.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && a[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return r([i, e[d]]) < 0
						} return o
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = r, s.check = function(e, t, s) {
					return !a(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = o() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", o)
		},
		"./node_modules/lodash/_baseClamp.js": function(e, t) {
			e.exports = function(e, t, s) {
				return e == e && (void 0 !== s && (e = e <= s ? e : s), void 0 !== t && (e = e >= t ? e : t)), e
			}
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var o = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), o(n(e), t, s)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/combineRefs/index.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(c.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(a.a)(e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.Le
				});
				return Object(m.yg)(t) ? void 0 : t
			}, e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.Me
				});
				return Object(m.yg)(t) ? void 0 : t
			}, (e, t) => e === m.Ne.Enabled && t === m.Ne.Enabled);
			var b = s("./src/config.ts");
			var h = s("./src/reddit/selectors/user.ts");
			const v = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						o = new Uint32Array(e);
					return crypto.getRandomValues(o), Array.from(o).map(e => t.charAt(e % s)).join("")
				},
				g = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
					return new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3")
				},
				f = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
					return Math.trunc(e).toString(16).padStart(t, "0")
				};
			var S;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(S || (S = {}));
			const O = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					o = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(o)).map(f).join("")
			})(S.SHA1, e);

			function w() {
				return (w = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			const _ = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				C = {
					anonymousUserId: "t2_anonymous",
					debug: !1,
					disableCookies: !0,
					envKey: b.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${b.a.buildNumber} ${b.a.appName}`,
					respectDoNotTrack: !0,
					saltLength: 20,
					saltTimeToLive: 2592e3,
					viewerUserIdLength: 20
				};
			t.a = function(e, t) {
				const {
					anonymousUserId: s,
					debug: c,
					disableCookies: m,
					envKey: u,
					localStorageSaltKey: f,
					localStorageViewerUserIdKey: S,
					playerName: y,
					playerVersion: E,
					respectDoNotTrack: x,
					saltLength: k,
					saltTimeToLive: j,
					viewerUserIdLength: I
				} = {
					...C,
					...t
				};
				class R extends o.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(o.createRef)(), this.handleDashCreate = e => this.setDashInstance(e), this.handleDashDestroy = () => this.setDashInstance(null), this.handleHlsCreate = e => this.setHlsInstance(e), this.handleHlsDestroy = () => this.setHlsInstance(null), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
						this.props.sessionId !== e.sessionId && this.doMuxThings(), this.props.videoRef !== e.videoRef && (this.combinedVideoRefs = this.combineExternalVideoRef(this.props.videoRef))
					}
					componentWillUnmount() {
						this.handleDashDestroy(), this.handleHlsDestroy()
					}
					combineExternalVideoRef(e) {
						return e ? Object(d.a)(this.videoRef, e) : this.videoRef
					}
					render() {
						const {
							forwardedRef: t,
							...s
						} = this.props, o = s;
						return n.a.createElement(e, w({}, o, {
							onDashCreate: this.handleDashCreate,
							onDashDestroy: this.handleDashDestroy,
							onHlsCreate: this.handleHlsCreate,
							onHlsDestroy: this.handleHlsDestroy,
							ref: t,
							videoRef: this.combinedVideoRefs
						}))
					}
					async setDashInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.dashInstance && (this.dashInstance = t, this.isMonitoring)) try {
							const {
								video: e
							} = this, t = await l();
							e && t.removeDashJS(e), this.video && this.dashInstance && t.addDashJS(this.video, this.getDashInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async setHlsInstance(e) {
						if (!this.props.isMuxEnabled) return;
						const t = e || null;
						if (t !== this.hlsInstance && (this.hlsInstance = t, this.isMonitoring)) try {
							const {
								video: e
							} = this, t = await l();
							e && t.removeHLSJS(e), this.video && this.hlsInstance && t.addHLSJS(this.video, this.getHlsInstanceData())
						} catch (s) {
							console.error(s)
						}
					}
					async doMuxThings() {
						if (this.props.isMuxEnabled) try {
							const e = await l();
							if (this.isMonitoring) {
								if (this.video) {
									const t = this.getVideoData();
									e.emit(this.video, "videochange", t)
								}
							} else {
								const t = await this.getMuxData();
								this.video && (e.monitor(this.video, t), this.isMonitoring = !0)
							}
						} catch (e) {
							console.error(e)
						}
					}
					async encryptViewerUserId() {
						const e = this.props.redditUserId || R.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${g()}${e}${t}`;
						return (await O(s)).substr(0, R.VIEWER_USER_ID_LENGTH)
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
						return {
							debug: R.DEBUG,
							disableCookies: R.DISABLE_COOKIES,
							respectDoNotTrack: R.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: R.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: R.PLAYER_NAME,
								player_version: R.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = R.LOCAL_STORAGE_SALT_KEY;
						let t = Object(i.a)(e);
						return t || (t = v(R.SALT_LENGTH), Object(i.b)(e, t, R.SALT_TIME_TO_LIVE)), t
					}
					getThirdPartyLibData() {
						return {
							...this.getDashInstanceData(),
							...this.getHlsInstanceData()
						}
					}
					getVideoData() {
						const {
							muxVideoDuration: e,
							muxVideoId: t,
							muxVideoIsLive: s,
							muxVideoTitle: o
						} = this.props;
						return {
							video_duration: s ? R.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? R.STREAM_TYPE_LIVE : R.STREAM_TYPE_ON_DEMAND,
							video_title: o,
							view_session_id: this.props.sessionId,
							player_software_version: this.getDashInstanceData() ? b.a.dashVersion : this.getHlsInstanceData() ? b.a.hlsVersion : null
						}
					}
				}
				R.displayName = _(e), R.ANONYMOUS_USER_ID = s, R.DEBUG = c, R.DISABLE_COOKIES = m, R.DURATION_LIVE = 1 / 0, R.ENV_KEY = u, R.LOCAL_STORAGE_SALT_KEY = f, R.LOCAL_STORAGE_VIEWER_USER_ID_KEY = S, R.PLAYER_NAME = y, R.PLAYER_VERSION = E, R.RESPECT_DO_NOT_TRACK = x, R.SALT_LENGTH = k, R.SALT_TIME_TO_LIVE = j, R.STREAM_TYPE_LIVE = "live", R.STREAM_TYPE_ON_DEMAND = "on-demand", R.VIEWER_USER_ID_LENGTH = I;
				const P = Object(o.forwardRef)((e, t) => n.a.createElement(R, w({}, e, {
						forwardedRef: t
					}))),
					L = Object(a.c)({
						redditUserId: h.i,
						isMuxEnabled: p
					});
				return Object(r.b)(L, null, null, {
					forwardRef: !0
				})(P)
			}
		},
		"./src/lib/focusVisible/index.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = !0,
					s = !1,
					o = null,
					n = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function r(e) {
					return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList)
				}

				function a(e) {
					e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
				}

				function i(e) {
					t = !1
				}

				function d() {
					document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c)
				}

				function c(e) {
					e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c))
				}
				document.addEventListener("keydown", (function(s) {
					s.metaKey || s.altKey || s.ctrlKey || (r(e.activeElement) && a(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerdown", i, !0), document.addEventListener("touchstart", i, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), d())
				}), !0), d(), e.addEventListener("focus", (function(e) {
					var s, o, i;
					r(e.target) && (t || (s = e.target, o = s.type, "INPUT" === (i = s.tagName) && n[o] && !s.readOnly || "TEXTAREA" === i && !s.readOnly || s.isContentEditable)) && a(e.target)
				}), !0), e.addEventListener("blur", (function(e) {
					var t;
					r(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(o), o = window.setTimeout((function() {
						s = !1
					}), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
				}), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
			}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				n = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const r = Object(n.e)(e),
					a = encodeURIComponent(`${t}${r}`);
				return `${o.a.accountManagerOrigin}${s||"/login"}?dest=${a}`
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `linkedPosts--[post:'${e}']`
			}
		},
		"./src/lib/makeNsfwLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = e => {
				return `nsfwLinkedPosts--[post:'${e}']`
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
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/bulkActions/constants.ts");
			const r = Object(o.a)(n.c),
				a = Object(o.a)(n.b),
				i = Object(o.a)(n.a)
		},
		"./src/reddit/actions/category/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return O
			}));
			var o = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./src/reddit/reducers/features/categories/index.ts"),
				r = (s("./node_modules/lodash/isEmpty.js"), s("./node_modules/react-router-redux/es/index.js"), s("./src/lib/makeActionCreator/index.ts")),
				a = s("./src/reddit/constants/categories.tsx"),
				i = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/makeApiRequest/index.ts"),
				c = s("./src/lib/omitHeaders/index.ts"),
				l = s("./src/reddit/constants/headers.ts"),
				m = s("./src/reddit/constants/experiments.ts");
			s("./src/reddit/helpers/r2/normalizeSubredditFromR2/index.ts"), s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			var u = s("./src/reddit/helpers/localStorage/index.ts"),
				p = s("./src/reddit/selectors/category.ts"),
				b = s("./src/reddit/actions/category/constants.ts");
			Object(o.a)({
				features: {
					categories: n.a
				}
			});
			const h = Object(r.a)(b.c),
				v = Object(r.a)(b.b),
				g = Object(r.a)(b.a),
				f = () => async (e, t, s) => {
					let {
						apiContext: o
					} = s;
					const n = t(),
						r = Object(p.h)(n),
						u = Object(p.g)(n);
					if (r || u) return;
					e(h());
					const b = await (e => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: i.ob.GET
					}))(o());
					if (b.ok) {
						const {
							categories: t,
							categoryIds: s
						} = (e => {
							const t = {},
								s = [];
							return e.forEach((e, o) => {
								const n = {
									attr: e.category_attr,
									color: e.category_color || a.a[o % a.a.length],
									icon: e.category_icon,
									id: e.category_id,
									name: e.category_name,
									displayText: Object(m.xg)(e.category_name)
								};
								s.push(n.id), t[n.id] = n
							}), {
								categories: t,
								categoryIds: s
							}
						})(b.body);
						e(v({
							categories: t,
							categoryIds: s
						}))
					} else e(g(b.error))
				}, S = (Object(r.a)(b.g), Object(r.a)(b.f), Object(r.a)(b.e), Object(r.a)(b.d)), O = e => async (t, s) => {
					const o = Object(p.j)(s(), {
						id: e
					});
					t(S({
						categoryId: e,
						rank: o + 1
					})), Object(u.kb)(Object(p.d)(s()))
				}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return w
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "a", (function() {
				return y
			})), s.d(t, "e", (function() {
				return E
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "b", (function() {
				return j
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/constants/index.ts"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/lib/makeCommentsPageKey/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/shortcuts/utils.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				u = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				b = s("./src/reddit/models/Toast/index.ts"),
				h = s("./src/reddit/selectors/commentSelector.ts"),
				v = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				f = s("./src/reddit/actions/comment/index.ts"),
				S = s("./src/reddit/actions/comment/constants.ts");
			const O = Object(r.a)(S.p),
				w = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					s().features.comments.models[e] && (await Object(m.l)(n(), e)).ok && t((e => async t => {
						t(O({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					if (!Object(g.Q)(s())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const a = s().features.comments.models[e];
					if (!a) return;
					const d = a.isLocked ? m.n : m.g;
					t(Object(f.j)({
						[e]: {
							isLocked: !a.isLocked
						}
					})), (await d(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: a.isLocked ? o.fbt._("comment has been unlocked", null, {
							hk: "BYjts"
						}) : o.fbt._("comment has been locked", null, {
							hk: "1pBDQl"
						})
					})) : t(Object(f.j)({
						[e]: {
							isLocked: a.isLocked
						}
					}))
				}, C = Object(r.a)(S.J), y = e => async (t, s, n) => {
					let {
						apiContext: r,
						gqlContext: a
					} = n;
					const i = s(),
						l = i.features.comments.models[e],
						u = i.user.account ? i.user.account.displayText : null;
					l && u && (t(Object(f.j)({
						[e]: {
							isApproved: !0,
							approvedBy: u,
							approvedAtUTC: Date.now(),
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (Object(v.a)(i) ? await Object(m.a)(a(), e) : await Object(m.b)(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: o.fbt._("comment has been approved", null, {
							hk: "4GfKQi"
						})
					})) : t(Object(f.j)({
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
					})), Object(d.d)())
				}, E = (e, t) => async (s, n, r) => {
					let {
						apiContext: a,
						gqlContext: i
					} = r;
					const l = n(),
						u = l.features.comments.models[e],
						p = l.user.account ? l.user.account.displayText : null;
					u && p && (s(Object(f.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							bannedAtUTC: Date.now(),
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (Object(v.a)(l) ? await Object(m.i)(i(), e, t) : await Object(m.j)(a(), e, t)).ok ? s(Object(c.f)({
						kind: b.b.SuccessMod,
						text: t ? o.fbt._("comment has been marked as spam", null, {
							hk: "4fQaFM"
						}) : o.fbt._("comment has been removed", null, {
							hk: "1qNTrD"
						})
					})) : s(Object(f.j)({
						[e]: {
							approvedBy: u.approvedBy,
							bannedBy: u.bannedBy,
							isApproved: u.isApproved,
							isRemoved: u.isRemoved,
							isSpam: u.isSpam
						}
					})), Object(d.d)())
				}, x = e => async (t, s, n) => {
					let {
						apiContext: r
					} = n;
					const a = s().features.comments.models[e];
					if (!a) return;
					const i = a.ignoreReports ? m.m : m.f;
					t(Object(f.j)({
						[e]: {
							ignoreReports: !a.ignoreReports
						}
					})), (await i(r(), e)).ok ? t(Object(c.f)({
						kind: b.b.SuccessMod,
						text: a.ignoreReports ? o.fbt._("comment has had its reports un-ignored", null, {
							hk: "HcpVV"
						}) : o.fbt._("comment has had its reports ignored", null, {
							hk: "2q4sCp"
						})
					})) : t(Object(f.j)({
						[e]: {
							ignoreReports: a.ignoreReports
						}
					}))
				}, k = (e, t, s) => async (r, a, i) => {
					let {
						gqlContext: d
					} = i;
					const l = Object(h.b)(a(), {
						commentId: e
					});
					if (!l) return;
					const m = s === n.kc.Snoozed,
						v = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(d(), {
							input: v
						})).ok) r(Object(f.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, m)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						r(Object(c.f)(e))
					}
				}, j = (e, t, s) => async (o, r, i) => {
					let {
						apiContext: d,
						gqlContext: c
					} = i;
					const l = r(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					o(Object(f.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === n.J.ADMIN,
							isMod: t === n.J.MODERATOR,
							isStickied: !!s
						}
					})), s && b && b !== e && o(Object(f.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const h = Object(m.d)(c(), e, t),
						v = Object(m.e)(c(), e, !!s),
						g = [h];
					(s || !s && e === b) && g.push(v), (await Promise.all(g)).every(e => e.ok) ? s && o(C({
						id: e,
						postId: p,
						commentsPageKey: Object(a.a)(p, null, {
							sort: n.w.CONFIDENCE,
							...l.platform.currentPage.queryParams
						})
					})) : (o(Object(f.j)({
						[e]: {
							distinguishType: u.distinguishType,
							isAdmin: u.isAdmin,
							isMod: u.isMod,
							isStickied: u.isStickied
						}
					})), o(Object(f.j)({
						[b]: {
							isStickied: l.features.comments.models[b].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/linkedPosts/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/linkedPosts/constants.ts");
			const r = Object(o.a)(n.c),
				a = Object(o.a)(n.b),
				i = Object(o.a)(n.a)
		},
		"./src/reddit/actions/otherDiscussions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return c
			})), s.d(t, "c", (function() {
				return l
			})), s.d(t, "d", (function() {
				return m
			})), s.d(t, "a", (function() {
				return u
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/lib/makeListingKey/index.ts"),
				r = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/redditGQL/operations/OtherDiscussions.json"),
				d = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts");
			const c = Object(o.a)(r.a),
				l = Object(o.a)(r.b),
				m = Object(o.a)(r.c),
				u = (e, t) => async (s, o, r) => {
					let {
						gqlContext: u
					} = r;
					const p = o(),
						b = Object(n.a)(e, null, {
							isOtherDiscussions: !0
						}),
						h = p.listings.postOrder.ids[b],
						v = !!p.listings.postOrder.api.error[b];
					if (h && !v) return;
					s(m({
						key: b
					}));
					const g = await ((e, t) => Object(a.a)(e, {
						...i,
						variables: t
					}))(u(), t);
					Object(d.a)({
						getState: o,
						onFailure: e => s(c(e)),
						onSuccess: e => s(l(e)),
						postId: e,
						response: g
					})
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return at
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return it
			})), s.d(t, "commentsPagePending", (function() {
				return dt
			})), s.d(t, "commentsPageLoaded", (function() {
				return ct
			})), s.d(t, "commentsPageFailed", (function() {
				return lt
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return mt
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return pt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return bt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return ht
			})), s.d(t, "commentsPageRequested", (function() {
				return vt
			})), s.d(t, "commentsPageDataRequested", (function() {
				return ft
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return St
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return Ot
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react-router-redux/es/index.js"),
				n = s("./src/reddit/actions/category/index.ts"),
				r = s("./src/reddit/actions/discoveryUnit.ts"),
				a = s("./src/reddit/actions/pages/subreddit.ts"),
				i = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				c = s("./src/reddit/actions/subredditSettings.ts"),
				l = s("./src/reddit/endpoints/governance/posts.ts"),
				m = s("./src/reddit/endpoints/page/commentsPage.ts"),
				u = s("./src/lib/makeGqlRequest/index.ts"),
				p = s("./src/redditGQL/operations/CommentsPageExtra.json");
			async function b(e, t) {
				return Object(u.a)(e, {
					...p,
					variables: t
				})
			}
			var h = s("./src/reddit/endpoints/page/subredditPage.ts"),
				v = s("./src/reddit/endpoints/profile/info.ts"),
				g = s("./src/reddit/models/Post/index.ts"),
				f = s("./src/lib/constants/index.ts"),
				S = s("./src/lib/pageTitle/index.ts"),
				O = s("./src/reddit/actions/economics/helpers/async.ts"),
				w = s("./src/reddit/actions/externalAccount.ts"),
				_ = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				C = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				y = s("./src/reddit/actions/platform.ts"),
				E = s("./src/reddit/actions/post.ts"),
				x = s("./src/reddit/actions/profile/index.ts"),
				k = s("./src/reddit/actions/subreddit.ts"),
				j = s("./src/reddit/actions/subreddit/notifications.ts"),
				I = s("./src/reddit/actions/subreddit/questions.ts"),
				R = s("./src/reddit/actions/toaster.ts"),
				P = s("./src/reddit/constants/adEvents.ts"),
				L = s("./src/reddit/constants/graphql.ts"),
				T = s("./src/reddit/constants/parameters.ts"),
				N = s("./src/reddit/constants/posts.ts"),
				M = s("./src/reddit/helpers/commentList/index.ts"),
				A = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				D = s("./src/reddit/models/Comment/index.ts"),
				F = s("./src/reddit/models/Media/index.ts"),
				B = s("./src/reddit/models/Subreddit/index.ts"),
				V = s("./src/reddit/models/User/index.ts"),
				U = s("./src/reddit/selectors/adsSignals.ts"),
				H = s("./src/reddit/selectors/category.ts"),
				G = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				q = s("./src/reddit/selectors/experiments/postSeo.ts"),
				K = s("./node_modules/reselect/es/index.js"),
				W = s("./src/reddit/constants/experiments.ts"),
				J = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Q = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				z = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				X = s("./src/reddit/selectors/platform.ts"),
				Y = s("./src/reddit/selectors/removedPosts.ts");
			const Z = Object(K.a)(X.f, Q.a, Y.a, Y.c, z.a, Y.e, z.b, (e, t, s, o, n, r, a) => {
				if (!e || !t || n) return !1;
				if (o) return !0;
				const i = r || a,
					d = t.score >= 2 || t.numComments >= 2;
				return !(!s || i || d)
			});
			var $ = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ee = s("./src/reddit/selectors/moderatorPermissions.ts"),
				te = s("./src/reddit/selectors/posts.ts"),
				se = s("./src/reddit/selectors/subreddit.ts"),
				oe = s("./src/reddit/selectors/user.ts"),
				ne = s("./src/lib/makeActionCreator/index.ts"),
				re = s("./src/lib/makeCommentsPageKey/index.ts"),
				ae = s("./src/reddit/actions/ads/index.ts"),
				ie = s("./src/reddit/helpers/canonicalUrls.ts"),
				de = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ce = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				le = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				me = s("./src/lib/performanceTimings/index.tsx"),
				ue = s("./src/reddit/actions/gold/achievementFlairs.ts"),
				pe = s("./src/reddit/actions/gold/customEmojis.ts"),
				be = s("./src/reddit/actions/gold/powerups.ts"),
				he = s("./src/lib/makeListingKey/index.ts"),
				ve = s("./src/reddit/actions/googleQASchema/constants.ts");
			const ge = Object(ne.a)(ve.b),
				fe = Object(ne.a)(ve.a);
			var Se = s("./src/reddit/actions/linkedPosts/index.ts"),
				Oe = s("./src/reddit/actions/otherDiscussions/index.ts"),
				we = s("./src/reddit/actions/subreddit/constants.ts"),
				_e = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Ce = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: o,
						postId: n,
						post: r
					} = e;
					try {
						s({
							altText: r && r.media && (r.media.still && r.media.still.altText || r.media.obfuscated && r.media.obfuscated.altText) || null,
							postId: n
						})
					} catch (a) {
						o(a)
					}
				},
				ye = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				Ee = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				xe = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var ke = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: o,
						postId: n,
						post: r
					} = e;
					try {
						const e = [],
							o = {},
							a = {};
						if (!r || !r.linked) return;
						const i = t(),
							d = i.posts && i.posts.models,
							c = Object(ye.a)(n),
							l = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Ee.a)(t);
								o[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (o[e.crosspost.id] = e.crosspost)
							}
							if (Object(g.n)(t)) {
								const {
									subreddit: e
								} = t;
								a[e.id] = Object(xe.a)(e)
							}
						}
						s({
							dist: r.linked.posts && r.linked.posts.dist || null,
							key: c,
							meta: i.meta,
							posts: o,
							postIds: e,
							subreddits: a
						})
					} catch (a) {
						o(a)
					}
				},
				je = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Ie = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Re = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Pe = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: o,
						options: n,
						postId: r,
						subreddit: a
					} = e;
					try {
						if (!a) return;
						const e = a.elements || a.posts,
							o = t(),
							i = ((e, t) => {
								const {
									edges: s
								} = e, o = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: o
								}
							})(e, o.posts && o.posts.models),
							d = Object(Ie.a)(i),
							c = Re(d),
							l = e.edges.reduce((e, t) => (t.node.id && t.node.id !== r && e.push(t.node.id), e), []),
							{
								range: m,
								sort: u,
								subredditName: p
							} = n,
							b = Object(he.a)(p, f.bb[u], {
								t: m
							});
						s({
							dist: e.dist,
							key: b,
							meta: o.meta,
							postIds: l,
							posts: c
						})
					} catch (i) {
						o(i)
					}
				},
				Le = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Te = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Ne = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: o,
						postId: n,
						post: r
					} = e;
					try {
						const e = [],
							o = {},
							a = {};
						if (!r || !r.nsfwLinked) return;
						const i = t(),
							d = i.posts && i.posts.models,
							c = Object(Te.a)(n),
							l = r.nsfwLinked.posts && r.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(Ee.a)(t);
								o[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (o[e.crosspost.id] = e.crosspost)
							}
							if (Object(g.n)(t)) {
								const {
									subreddit: e
								} = t;
								a[e.id] = Object(xe.a)(e)
							}
						}
						s({
							dist: r.nsfwLinked.posts && r.nsfwLinked.posts.dist || null,
							key: c,
							meta: i.meta,
							posts: o,
							postIds: e,
							subreddits: a
						})
					} catch (a) {
						o(a)
					}
				},
				Me = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Ae = Object(ne.a)(Me.b),
				De = Object(ne.a)(Me.a);
			var Fe = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Be = Object(ne.a)(Fe.b),
				Ve = Object(ne.a)(Fe.a),
				Ue = Object(ne.a)(we.k),
				He = Object(ne.a)(we.j),
				Ge = (Object(ne.a)(we.s), Object(ne.a)(we.r), e => async (t, s, o) => {
					let {
						gqlContext: n
					} = o;
					var r;
					const {
						includeNSFWListingBelowExperiment: a,
						includeListingBelowExperiment: i,
						includeOtherDiscussions: d,
						includePostFeed: c,
						includePostQASchemaEligibilityFlag: l,
						listingBelowExperimentVariant: m,
						postId: p,
						range: b,
						sort: h,
						subredditName: v
					} = e, g = Object(he.a)(p, null, {
						isOtherDiscussions: !0
					}), S = s(), O = Object(te.z)(S, {
						listingKey: g
					}), w = d && (!O || 0 === O.length), _ = Object(he.a)(v, f.bb[h], {
						t: b
					}), C = Object(te.z)(S, {
						listingKey: _
					}), y = c && (i || !C || 0 === C.length), E = i, x = a, k = Object(te.G)(S, {
						postId: p
					}), j = !!k && !!k.media && (Object(F.K)(k.media) || Object(F.F)(k.media)) && !k.media.altText;
					if (!(w || y || E || x || j || l)) return;
					w && t(Object(Oe.d)({
						key: g
					}));
					const I = await ((e, t) => Object(u.a)(e, {
							..._e,
							variables: t
						}))(n(), e),
						R = I.body,
						P = Object(Le.a)(m);
					l && (I.ok ? R.data && R.data.post && t(ge({
						postId: p,
						isEligibleForQASchema: null !== (r = R.data.post.isEligibleForQASchema) && void 0 !== r && r
					})) : t(fe())), w && Object(je.a)({
						getState: s,
						onFailure: e => t(Object(Oe.b)(e)),
						onSuccess: e => t(Object(Oe.c)(e)),
						postId: p,
						response: I
					}), y && !E && (I.ok ? R.data && Pe({
						getState: s,
						onFailure: e => t(He(e)),
						onSuccess: e => t(Ue(e)),
						options: e,
						postId: p,
						subreddit: R.data.subreddit
					}) : t(He(I.error))), E && !P && I.ok && R.data && ke({
						getState: s,
						onFailure: e => t(Object(Se.a)(e)),
						onSuccess: e => t(Object(Se.b)(e)),
						postId: p,
						post: R.data.post
					}), x && I.ok && Ne({
						getState: s,
						onFailure: e => t(Ve(e)),
						onSuccess: e => t(Be(e)),
						postId: p,
						post: R.data.post
					}), j && I.ok && R.data && Ce({
						getState: s,
						onFailure: e => t(De(e)),
						onSuccess: e => t(Ae(e)),
						postId: p,
						post: R.data.post
					})
				}),
				qe = e => {
					var t, s;
					const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						n = o && Object(g.x)(o),
						{
							sortToUse: r
						} = Object(A.a)(e, n);
					return (!r || r === f.w.CONFIDENCE) && Object(J.c)(e, {
						experimentEligibilitySelector: () => Object(oe.P)(e),
						experimentName: W.C
					}) === W.E.Enabled
				};
			var Ke = s("./src/reddit/selectors/chatPost.ts"),
				We = s("./src/reddit/selectors/seo/index.ts"),
				Je = s("./src/reddit/actions/pages/constants.ts"),
				Qe = s("./src/lib/initializeClient/installReducer.ts"),
				ze = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				Xe = s("./src/reddit/reducers/pages/comments/index.ts"),
				Ye = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				Ze = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				$e = s("./src/reddit/selectors/i18n/index.ts"),
				et = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				tt = s("./src/reddit/helpers/locales.ts"),
				st = s("./src/reddit/selectors/experiments/communityDirectoryBacklinks/index.ts"),
				ot = s("./src/reddit/selectors/experiments/countrySites.ts"),
				nt = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				rt = s("./src/reddit/selectors/meta.ts");
			Object(Qe.a)({
				pages: {
					comments: Xe.a
				}
			}), Object(Qe.a)({
				features: {
					modUserNotes: ze.a
				}
			});
			const at = 25,
				it = 100,
				dt = Object(ne.a)(Je.h),
				ct = Object(ne.a)(Je.f),
				lt = Object(ne.a)(Je.e),
				mt = Object(ne.a)(Je.i);

			function ut(e) {
				return e && e.ok
			}
			const pt = (e, t, s) => {
					const o = !e,
						n = Object(te.G)(t, {
							postId: s
						}).belongsTo,
						r = Object(se.P)(t, {
							identifier: n
						}),
						a = Object(We.c)(t, {
							identifier: n
						}),
						i = !!Object(Le.c)(t),
						d = Object($e.a)(t),
						c = Object(nt.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return i ? (l.listingBelow = a || o, l.postFeed = l.listingBelow) : d ? l.nsfwListingBelow = !0 : l.postFeed = (a || o) && (!Object(B.h)(r) && !Object(Ke.d)(t, {
						postId: s
					}) && !!r || !Object(X.i)(t) && Object(q.e)(t)), e && (l.postQASchema = Object(q.d)(t)), c && (l.listingBelow = !0), l
				},
				bt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				ht = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				vt = e => async (t, s) => {
					var r, a;
					const {
						partialPostId: c,
						partialCommentId: l
					} = e.params, {
						subredditName: m
					} = e.params || "", u = c ? Object(g.x)(c) : "", p = l && Object(D.h)(l), {
						path: b,
						queryParams: h
					} = e, v = Object(C.d)(b), {
						instanceId: O
					} = h, {
						hasSortParam: _,
						sortToUse: j
					} = Object(A.a)(s(), u), R = null === (a = null === (r = Object(X.b)(s())) || void 0 === r ? void 0 : r.routeMatch) || void 0 === a ? void 0 : a.route.chunk, P = ["context", "depth", "limit", T.d].reduce((e, t) => {
						const s = parseInt(h[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: m,
						hasSortParam: _,
						instanceId: O,
						include_categories: !0
					});
					_ && (P.sort = j), P.onOtherDiscussions = v, P.comment_awardings_by_current_user = !0, t(E.r(u)), await t(ft(u, p, P, j));
					const M = s().posts.models[u],
						B = Object(oe.Q)(s());
					if (M && "subreddit" === M.belongsTo.type) {
						const e = M.belongsTo.id;
						await Promise.all([Object(me.i)(() => t(Object(be.j)(e, {
							fullData: !0,
							includeIdentity: B
						})), {
							name: "subredditPowerupsRequested",
							page: R,
							isLoggedIn: B
						}), Object(me.i)(() => t(Object(ue.c)(e)), {
							name: "subredditAchievementFlairsRequested",
							page: R,
							isLoggedIn: B
						}), Object(me.i)(() => t(Object(pe.c)(e)), {
							name: "subredditCustomEmojisRequested",
							page: R,
							isLoggedIn: B
						})]);
						const o = s();
						if (!Object(X.i)(o)) {
							Object(Ye.a)(o) && t(Object(I.b)(e))
						}
						Object(ee.i)(o, e) && await t(Object(d.c)(u))
					}
					if (M) {
						const r = ((e, t) => {
								const s = Object(te.V)(e, {
										postId: t
									}),
									o = Object(te.G)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), u),
							a = Object(se.P)(s(), {
								identifier: M.belongsTo
							});
						if (a && (e => W.Ef.Redirect === Object(J.b)(e, {
								experimentEligibilitySelector: Z,
								experimentName: W.xf
							}))(s())) return void t(Object(o.c)(a.url));
						if ((M.media && M.media.type) === F.o.LIVEVIDEO) {
							const e = `/rpan${M.belongsTo.type===N.a.SUBREDDIT?a.url:"/"}${Object(g.z)(M.id)}`;
							return void t(Object(o.c)(e))
						}
						if (M.belongsTo.type !== N.a.SUBREDDIT || M.isSponsored) {
							if (M.belongsTo.type === N.a.PROFILE) {
								const e = Object(me.i)(() => t(x.d(a.name)), {
									name: "getProfileInfo",
									page: R,
									isLoggedIn: B
								});
								await e
							}
						} else {
							if (!!!Object(se.W)(s(), {
									subredditId: M.belongsTo.id
								})) {
								const e = Object(me.i)(() => t(k.o(a.name)), {
									name: "getSubredditRules",
									page: R,
									isLoggedIn: B
								});
								await e
							}
						}
						const d = pt(!1, s(), u),
							c = v;
						if (bt(c, d)) {
							Object(de.d)(de.a.LinkedPosts);
							const e = Object(de.c)(de.a.LinkedPosts);
							Object(de.d)(de.a.NsfwLinkedPosts);
							const o = Object(de.c)(de.a.NsfwLinkedPosts),
								{
									adsSeenCount: n,
									totalPostsSeenCount: r,
									sessionStartTime: i
								} = Object(U.a)(s()),
								l = {
									adContext: {
										layout: L.a.Card,
										sourcePostId: u,
										clientSignalSessionData: {
											adsSeenCount: n,
											totalPostsSeenCount: r,
											sessionStartTime: i
										}
									},
									range: f.oc.WEEK.toUpperCase(),
									sort: f.S.TOP,
									subredditName: a.name
								},
								m = {
									postId: u
								},
								p = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Le.c)(s())
								};
							Object(nt.b)(s()) && (p.listingBelowVersion = "LINKED_POSTS_VERSION_SIDE_RAIL");
							const b = {
									nsfwListingBelowCorrelationId: o,
									nsfwListingBelowExperimentVariant: Object(Ze.a)(s())
								},
								h = ht(d);
							Object(me.i)(() => t(Ge({
								...m,
								...l,
								...p,
								...b,
								...h,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: B,
								page: R
							});
							0
						}
						t(Object(w.p)()), t(y.m({
							title: r
						}));
						const l = s().posts.instances[u] ? e.queryParams.instanceId : M.postId;
						t(Object(i.b)(l)); {
							const e = Object(H.c)(s(), {
								subredditName: a.name
							});
							await Promise.all(e.map(e => t(n.b(e))))
						}
					} else t(y.m({
						title: S.f()
					}));
					const {
						routePrefix: V
					} = e.params;
					N.b[V] === N.a.PROFILE ? Object(ie.f)(s(), t, e) : Object(ie.d)(s(), t, e)
				}, gt = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], ft = (e, t, s, o) => async (n, i, d) => {
					var c, u, p, g;
					const S = i(),
						w = Object(re.a)(e, t, s),
						{
							subredditName: C
						} = s,
						x = S.pages.comments.keyToHeadCommentId.hasOwnProperty(w),
						k = S.pages.comments.api.fullyLoaded[w],
						I = S.pages.comments.api.error[w],
						L = S.pages.comments.api.pending[w],
						T = !Object(oe.P)(S),
						N = Object(oe.k)(S),
						A = o === f.w.CHAT,
						D = !!S.platform.lastPage;
					if ((L || x && !I) && !(A && D)) {
						if (x && !S.sidebarPromotedPosts.firstFetch) {
							const e = Object(X.i)(S) ? le.a.COMMENTS_OVERLAY : le.a.COMMENTS;
							window.addEventListener("load", () => {
								n(Object(ae.b)(e))
							})
						}
						return void(k || n(Ot(e, t, s)))
					}
					n(r.g());
					const F = S.user.prefs.commentMode;
					n(dt({
						key: w,
						postId: e,
						commentMode: F
					}));
					const B = {
						...s,
						...A ? {
							sort: f.w.LIVE
						} : T ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(te.G)(i(), {
							postId: e
						});
						t && t.numComments && t.numComments > it && (B.truncate = at)
					}
					const U = null === (u = null === (c = Object(X.b)(S)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === u ? void 0 : u.route.chunk,
						H = Object(me.i)(() => Object(m.a)(d.apiContext(), e, t, B, Object(G.a)(i()), qe(i())), {
							name: "fetchCommentsPage",
							isLoggedIn: !T,
							page: U
						}),
						q = !T && N && Object(me.i)(() => Object(v.d)(d.gqlContext(), Object(V.e)(N)), {
							name: "fetchProfileKarma",
							isLoggedIn: !T,
							page: U
						}) || null,
						K = Object(st.c)(S),
						W = Object(me.i)(() => b(d.gqlContext(), {
							postId: e,
							includeSubredditRankings: K
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: !T,
							page: U
						});
					let J, Q, z, Y;
					if ([J, Q, z] = await Promise.all([H, q, W]), n(Object(y.n)(J.status)), ut(z) && "SubredditPost" === (null === (p = z.body.data.postInfoById) || void 0 === p ? void 0 : p.__typename)) {
						const e = z.body.data.postInfoById.subreddit.name;
						Object(ie.c)(i(), n, e)
					}
					if (J.ok) {
						const t = Object.keys(J.body.posts).filter(e => !!J.body.posts[e].isMeta),
							s = J.body.posts[e];
						if (Object(ie.b)(i(), n, s.belongsTo.type), t.length) {
							const e = Object(me.i)(() => Object(l.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: U,
									isLoggedIn: !T
								}),
								o = await e;
							o.ok && (Y = o.body)
						}
						if (ut(Q)) {
							const {
								data: e
							} = Q.body, t = {
								karma: {
									...v.a
								}
							};
							if (Object(v.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							J.body && J.body.account && Object.assign(J.body.account, t)
						}
						if (ut(z)) {
							const {
								data: t
							} = z.body;
							if (t.postInfoById && gt.includes(t.postInfoById.__typename) && (J.body.posts[e] = {
									...J.body.posts[e],
									...t.postInfoById,
									mediaStatus: "SubredditPost" === t.postInfoById.__typename || "ProfilePost" === t.postInfoById.__typename ? null === (g = t.postInfoById.mediaStatus) || void 0 === g ? void 0 : g.status : null
								}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const e = t.postInfoById.subreddit.detectedLanguage;
								Object(rt.d)(S) && e && Object(ot.f)(S) && await Object(tt.a)(e, n);
								const {
									id: s,
									isEligibleForContentBlocking: o,
									allowedMediaInComments: r,
									directoryRankings: a
								} = t.postInfoById.subreddit;
								n(Object(j.c)({
									subredditAboutInfo: {
										[s]: {
											isEligibleForContentBlocking: o,
											allowedMediaInComments: r,
											directoryRankings: a
										}
									}
								}))
							}
						}
						const o = Object(M.a)(J.body, e, S),
							{
								postMeta: r
							} = J.body;
						J.body.posts[e] = {
							...J.body.posts[e],
							isRobotIndexable: Object(et.a)(r, e)
						}, n(ct({
							key: w,
							postId: e,
							meta: S.meta,
							governance: Y,
							shouldCollapse: o,
							...J.body
						}))
					} {
						const o = Object(te.G)(i(), {
							postId: e
						});
						o && J.body.comments && Object.keys(J.body.comments).length < o.numComments ? n(Ot(e, t, s)) : J.ok && n(St({
							key: w
						}));
						const r = Object(X.i)(S) ? le.a.COMMENTS_OVERLAY : le.a.COMMENTS;
						n(Object(ae.b)(r))
					}
					if (J.ok) {
						n(R.g(w));
						const t = Object(te.G)(i(), {
								postId: e
							}),
							s = Object.keys(J.body.comments);
						if (n(E.z(t, P.a.CommentsView)), Object(ee.h)(i(), {
								subredditId: t.belongsTo.id
							}) && n(Object(_.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && J.body.comments) {
							const e = Object(me.i)(() => n(Object(O.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: U,
								isLoggedIn: !T
							});
							await e
						}
					} else {
						let e;
						C && (n(Object(a.subredditPending)({
							key: w
						})), e = await Object(ce.a)("subreddit", () => Object(h.a)(d.apiContext(), C, {})), n(Object(y.n)(e.status)), n(Object(a.handleSubredditPageApiError)(e, C))), n(lt({
							error: J.error,
							key: w,
							...e ? e.body : J.body
						}))
					}
				}, St = Object(ne.a)(Je.g), Ot = (e, t, s) => async (o, n, r) => {
					var a, i;
					const d = Object(re.a)(e, t, s),
						l = n(),
						u = Object(oe.Q)(l),
						p = Object(oe.k)(l),
						h = null === (i = null === (a = Object(X.b)(n())) || void 0 === a ? void 0 : a.routeMatch) || void 0 === i ? void 0 : i.route.chunk,
						g = Object(m.a)(r.apiContext(), e, t, s, Object(G.a)(l), qe(l)),
						f = u && p && Object(v.d)(r.gqlContext(), Object(V.e)(p)) || null,
						S = Object(me.i)(() => b(r.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: u,
							page: h
						}),
						[w, _, C] = await Promise.all([g, f, S]);
					if (w.ok) {
						if (ut(_)) {
							const {
								data: e
							} = _.body, t = {
								karma: {
									...v.a
								}
							};
							if (Object(v.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							w.body && w.body.account && Object.assign(w.body.account, t)
						}
						if (ut(C)) {
							const {
								data: t
							} = C.body;
							w.body.posts[e] = {
								...w.body.posts[e],
								...t.postInfoById
							}
						}
						const t = Object(M.a)(w.body, e, l);
						o(ct({
							key: d,
							postId: e,
							meta: l.meta,
							shouldCollapse: t,
							...w.body
						})), o(St({
							key: d
						}));
						const s = n().posts.models[e],
							r = s && Object(te.V)(n(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && r && Object($.a)(l, {
							subredditId: r.id
						}) && o(Object(c.h)(r.name, r.id)), s && "subreddit" === s.belongsTo.type && w.body.comments && await o(Object(O.a)({
							commentIds: Object.keys(w.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(lt({
						error: w.error,
						key: d,
						...w.body
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/page.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "publicAccessNetworkRequested", (function() {
				return i
			}));
			var o = s("./src/lib/pageTitle/index.ts"),
				n = (s("./src/reddit/actions/pages/subreddit.ts"), s("./src/reddit/actions/platform.ts")),
				r = (s("./src/reddit/actions/publicAccessNetwork/streams.ts"), s("./src/reddit/actions/users.ts")),
				a = s("./src/reddit/selectors/user.ts");
			const i = e => async (e, t) => {
				const s = t(),
					i = o.n();
				e(n.m({
					title: i
				})), Object(a.Q)(s) || await e(r.s())
			}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return S
			})), s.d(t, "b", (function() {
				return O
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "f", (function() {
				return y
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/query-string/index.js"),
				n = s.n(o),
				r = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const m = new Set(["home", "r/popular"]),
				u = e => {
					const t = location && location.search || "",
						s = n.a.parse(t);
					m.has(e) && (s.related = e);
					const o = n.a.stringify(s);
					return o ? `?${o}` : ""
				},
				p = Object(r.a)(a.N),
				b = Object(r.a)(a.y),
				h = Object(r.a)(a.O),
				v = Object(r.a)(a.z),
				g = Object(r.a)(a.M),
				f = Object(r.a)(a.L),
				S = Object(r.a)(a.t),
				O = Object(r.a)(a.u),
				w = e => async (t, s, o) => {
					let {
						gqlContext: n
					} = o;
					const r = Object(d.g)(e),
						a = s();
					if (Object(c.d)(a, r)) return;
					t(p(r));
					const l = await Object(i.e)(n(), r),
						m = Date.now();
					if (l.ok && l.body && l.body.data) {
						const e = l.body.data;
						t(b({
							model: e,
							utcTimeStamp: m
						}))
					} else t(x({
						streamId: r,
						error: l.error,
						utcTimeStamp: m
					}))
				}, _ = (e, t) => async (s, o) => s(C(e, t)), C = (e, t) => async (s, o, n) => {
					let {
						gqlContext: r
					} = n;
					const a = o();
					if (Object(c.f)(a)) return;
					s(h());
					const d = await Object(i.f)(r(), e, t),
						l = Date.now();
					if (d.ok && d.body && d.body.data) {
						const t = d.body.data;
						s(v({
							listingName: e,
							models: t,
							utcTimeStamp: l
						}))
					} else s(k({
						error: d.error,
						utcTimeStamp: l
					}))
				}, y = (e, t) => async (s, o) => s(E(e, t)), E = (e, t) => async (s, o, n) => {
					let {
						gqlContext: r
					} = n;
					const a = o();
					if (Object(c.f)(a)) return;
					s(h());
					const d = Date.now(),
						m = e.replace("r/", ""),
						u = Object(l.H)(a, m),
						p = await Object(i.b)(r(), {
							subredditId: u,
							options: t
						}),
						b = p.body;
					p.ok && b && b.data || s(k({
						error: p.error,
						utcTimeStamp: d
					}));
					const g = b.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(i.e)(e, t),
								o = Date.now(),
								n = s.body;
							return n && n.data ? n.data : void x({
								streamId: t,
								error: s.error,
								utcTimeStamp: o
							})
						})(r(), e.node.id)),
						f = (await Promise.all(g)).filter(e => void 0 !== typeof e);
					s(v({
						listingName: e,
						models: f,
						utcTimeStamp: d
					}))
				}, x = e => async t => {
					t(g(e))
				}, k = e => async t => {
					t(f(e))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return i
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return c
			}));
			var o = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(n.a)(r.B),
				i = e => async t => {
					t(a(e))
				}, d = () => async e => {
					e(a({
						lastChatActivityUtcTs: Date.now()
					}))
				}, c = () => async e => {
					e(a({
						correlationId: Object(o.a)()
					}))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Z
			})), s.d(t, "removalReasonsLoaded", (function() {
				return $
			})), s.d(t, "removalReasonsFailed", (function() {
				return ee
			})), s.d(t, "removalReasonsRequested", (function() {
				return te
			})), s.d(t, "removalReasonAddedPending", (function() {
				return se
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return oe
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return ne
			})), s.d(t, "addRemovalReason", (function() {
				return re
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ae
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ie
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return de
			})), s.d(t, "editRemovalReason", (function() {
				return ce
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return me
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return ue
			})), s.d(t, "deleteRemovalReason", (function() {
				return pe
			})), s.d(t, "removedItemsSelected", (function() {
				return be
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return ve
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return ge
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return fe
			})), s.d(t, "removalReasonMessagePending", (function() {
				return Se
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Oe
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return we
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return _e
			})), s.d(t, "submitRemovalReason", (function() {
				return Ce
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return ye
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__LOAD_SUCCESS",
				i = "REMOVALREASONS__ADD_PENDING",
				d = "REMOVALREASONS__ADD_SUCCESS",
				c = "REMOVALREASONS__ADD_FAILED",
				l = "REMOVALREASONS__EDIT_PENDING",
				m = "REMOVALREASONS__EDIT_SUCCESS",
				u = "REMOVALREASONS__EDIT_FAILED",
				p = "REMOVALREASONS__DELETE_PENDING",
				b = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var v = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case a:
					case i:
					case d:
					case l:
					case m:
					case p:
					case b:
						return null;
					case "REMOVALREASONS__LOAD_FAILED":
					case c:
					case u:
					case h:
						return t.payload;
					default:
						return e
				}
			};
			var g = function() {
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
						case d:
						case c:
						case m:
						case u:
						case b:
						case h:
							return !1;
						default:
							return e
					}
				},
				f = Object(r.c)({
					error: v,
					pending: g
				});
			const S = {};
			var O = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							response: s
						} = t.payload, {
							data: o
						} = s;
						return {
							...e,
							...o
						}
					}
					case d:
					case m: {
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
							[s]: o,
							...n
						} = e;
						return n
					}
					default:
						return e
				}
			};
			const w = {};
			var _ = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : w,
					t = arguments.length > 1 ? arguments[1] : void 0;
				switch (t.type) {
					case a: {
						const {
							subredditId: s,
							response: o
						} = t.payload, {
							order: n
						} = o;
						return {
							...e,
							[s]: n
						}
					}
					case d: {
						const {
							subredditId: s,
							reason: o
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], o.id]
						}
					}
					case b: {
						const {
							subredditId: s,
							reasonId: o
						} = t.payload, n = [...e[s]].filter(e => e !== o);
						return {
							...e,
							[s]: n
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
				y = Object(r.c)({
					api: f,
					models: O,
					reasonOrder: _,
					removedItemIds: C
				}),
				E = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/makeActionCreator/index.ts"),
				k = s("./src/lib/makeCommentsPageKey/index.ts"),
				j = s("./src/lib/makeDraftKey/index.ts"),
				I = s("./src/reddit/actions/bulkActions/index.ts"),
				R = s("./src/reddit/actions/comment/index.ts"),
				P = s("./src/reddit/actions/comment/authoring.ts"),
				L = s("./src/reddit/actions/comment/moderation.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				N = s("./src/reddit/actions/post.ts"),
				M = s("./src/reddit/actions/toaster.ts"),
				A = s("./src/reddit/constants/modals.ts"),
				D = s("./src/lib/makeApiRequest/index.ts"),
				F = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				V = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const U = (e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: E.ob.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				H = (e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(V.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: E.ob.POST,
					type: "json",
					data: t
				});
			var G = s("./src/reddit/helpers/isPost.ts"),
				q = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				K = s("./src/reddit/helpers/routeKey/index.ts"),
				W = s("./src/reddit/models/ModQueue/index.ts"),
				J = s("./src/reddit/models/PostDraft/index.ts"),
				Q = s("./src/reddit/models/RemovalReason/index.ts"),
				z = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/platform.ts");
			Object(n.a)({
				features: {
					removalReasons: y
				}
			});
			const Z = Object(x.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(x.a)(a),
				ee = Object(x.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, s, o) => {
					let {
						apiContext: n
					} = o;
					const r = s().subreddits.models[e].name;
					t(Z());
					const a = await ((e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: E.ob.GET
					}))(n(), r);
					a.ok ? t($({
						subredditId: e,
						response: a.body
					})) : t(ee(a.error))
				}, se = Object(x.a)(i), oe = Object(x.a)(d), ne = Object(x.a)(c), re = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const i = n().subreddits.models[e].name;
					s(se());
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: E.ob.POST,
						data: s
					}))(a(), i, t);
					if (d.ok) {
						const {
							id: n
						} = d.body, r = {
							...t,
							id: n
						};
						s(oe({
							subredditId: e,
							reason: r
						})), s(Object(M.f)({
							kind: z.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(ne(d.error))
				}, ae = Object(x.a)(l), ie = Object(x.a)(m), de = Object(x.a)(u), ce = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const i = n().subreddits.models[e].name;
					s(ae());
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: E.ob.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(a(), i, t);
					d.ok ? (s(ie({
						subredditId: e,
						reason: t
					})), s(Object(M.f)({
						kind: z.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(de(d.error))
				}, le = Object(x.a)(p), me = Object(x.a)(b), ue = Object(x.a)(h), pe = (e, t) => async (s, n, r) => {
					let {
						apiContext: a
					} = r;
					const i = n().subreddits.models[e].name;
					s(le());
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: E.ob.DELETE
					}))(a(), i, t);
					d.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(M.f)({
						kind: z.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(ue(d.error))
				}, be = Object(x.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, o, n) => {
					let {
						apiContext: r
					} = n;
					const a = o();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(te(e)), s(be({
						subredditId: e,
						itemIds: t
					})), s(Object(T.i)(A.a.ADD_REMOVAL_REASON))
				}, ve = Object(x.a)("REMOVALREASONS__SUBMIT_PENDING"), ge = Object(x.a)("REMOVALREASONS__SUBMIT_SUCCESS"), fe = Object(x.a)("REMOVALREASONS__SUBMIT_FAILED"), Se = Object(x.a)("REMOVALREASONS__MESSAGE_PENDING"), Oe = Object(x.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), we = Object(x.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), _e = Object(x.a)("REMOVALREASONS__MESSAGE_FAILED"), Ce = (e, t, s, o, n, r) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText,
						u = e[0],
						p = Object(G.a)(u) ? Q.e.Post : Q.e.Comment,
						b = p === Q.e.Post ? l.posts.models[u] : l.features.comments.models[u],
						h = p === Q.e.Post ? N.S : R.j;
					if (!b || !m) return !1;
					a(ve()), a(h({
						[u]: {
							modNote: n,
							modRemovalReason: t && t.title,
							modReasonBy: m
						}
					}));
					const v = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						g = await U(c(), v);
					if (g.ok) {
						if (a(ge()), t) {
							a(Se());
							const n = {
									itemId: e,
									message: s,
									title: t.title,
									isLocked: r,
									type: o
								},
								i = await H(c(), Object(Q.h)(n, p), p);
							if (i.ok) {
								if ([Q.f.Public, Q.f.PublicAsSubreddit].includes(o)) {
									if (a(we()), i.body) {
										const e = Object(q.a)(i.body),
											t = {
												comment: e,
												parentId: u
											},
											s = Object(Y.f)(l),
											o = l.platform.currentPage && l.platform.currentPage.routeMatch;
										let n = s && o && Object(K.a)(o, l, l.posts.models[e.postId]);
										if (n || (n = Object(k.a)(e.postId, null, {
												sort: E.x,
												hasSortParam: !0
											})), p === Q.e.Post) {
											const s = Object(j.a)(J.c.replyToPost, u);
											a(Object(P.r)({
												...t,
												headCommentId: Object(X.w)(l, {
													commentsPageKey: n
												}),
												commentsPageKey: n,
												draftKey: s
											}));
											const o = l.postStickiedComments.data[u];
											a(Object(L.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: n
											})), o && o !== e.id && a(Object(R.j)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (p === Q.e.Comment) {
											const e = Object(j.a)(J.c.replyToComment, b.id),
												s = Object(X.j)(l, {
													commentId: u,
													commentsPageKey: n
												});
											a(Object(P.p)({
												...t,
												parentCommentId: u,
												commentsPageKey: n,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else a(Oe());
								return !0
							}
							return a(_e(i.error)), !1
						}
					} else a(fe(g.error)), a(h({
						[u]: {
							modNote: b.modNote,
							modRemovalReason: b.modRemovalReason,
							modReasonBy: b.modReasonBy
						}
					}));
					return !1
				}, ye = (e, t, s, n, r) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					a(ve());
					const u = Object(M.f)({
							kind: z.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await U(c(), p);
					if (b.ok) {
						const o = {
							ids: e,
							operation: W.a.RemovalReason,
							username: m,
							options: {
								modNote: r,
								removalReason: t && t.title
							}
						};
						if (a(Object(I.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: n
								},
								r = await H(c(), Object(Q.h)(o, Q.e.Bulk), Q.e.Bulk);
							r.ok ? (a(Oe()), a(u)) : a(_e(r.error))
						} else a(u)
					} else a(fe(b.error))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "c", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/loadableAction/index.ts");
			const n = Object(o.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				r = Object(o.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				a = Object(o.a)(() => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/shortcuts/constants.ts");
			const r = Object(o.a)(n.a),
				a = Object(o.a)(n.b)
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return h
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "d", (function() {
				return g
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = s("./src/reddit/actions/notificationsInbox/index.ts"),
				i = s("./src/reddit/actions/subreddit/constants.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts");
			const u = Object(n.a)(i.v),
				p = Object(n.a)(i.u),
				b = Object(n.a)(i.t),
				h = e => {
					switch (e) {
						case l.b.FREQUENT:
							return {
								isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
							};
						case l.b.LOW:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
							};
						case l.b.OFF:
						default:
							return {
								isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
							}
					}
				},
				v = e => {
					switch (e) {
						case l.b.OFF:
							return o.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.b.FREQUENT:
							return o.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.b.LOW:
							return o.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const g = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: n,
					undoCallback: i
				} = e;
				return async (e, l, g) => {
					let {
						gqlContext: f
					} = g;
					var S, O, w;
					e(p());
					const _ = h(s),
						C = await Object(c.b)(f(), t, _);
					if ((null === (O = null === (S = C.error) || void 0 === S ? void 0 : S.fields) || void 0 === O ? void 0 : O.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(C.body) && (null === (w = C.body.data.updateSubredditNotificationSettings.errors) || void 0 === w ? void 0 : w.length)) return e(b()), e(Object(d.f)({
						kind: m.b.Error,
						text: o.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					C.ok && (e(Object(r.c)({
						subredditId: t,
						notificationLevel: s
					})), e(u({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: s
							}
						}
					})), n && n(), e(i ? Object(d.f)(Object(d.e)(v(s), m.b.Undo, o.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(a.i)(t, i))) : Object(d.f)(Object(d.e)(v(s), m.b.SuccessCommunityGreen))))
				}
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => n.a.createElement(a.b, {
				className: Object(r.a)(e.className, d.a.container, e.text.length >= e.maxChars ? d.a.mOverflow : null)
			}, c._({
				"*": "{characters} Characters remaining",
				_1: "1 Character remaining"
			}, [c._plural(e.maxChars - e.text.length, "characters")], {
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
				CTAButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				ctaButtons: "_3xkBSA_W2UZqPF31GQZ9K",
				LoginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				loginLink: "_3fM1M9rFBqKwfG-KJLnxPY",
				SignupLink: "_1k97Y32qzGNtuVGyt73TpR",
				signupLink: "_1k97Y32qzGNtuVGyt73TpR",
				LiveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ",
				liveStreamingSignupLink: "_2aWoCIxf0NRE4nRAy6aFDQ"
			}
		},
		"./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/isSimpleClick/index.ts"),
				i = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/helpers/trackers/authControls.ts"),
				m = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				u = s.n(m);
			const {
				fbt: p
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = Object(d.c)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: o,
					openLoginModal: d,
					openRegisterModal: m,
					origin: b,
					sendEvent: h
				} = e;
				return n.a.createElement("div", {
					className: Object(r.a)(t, u.a.Wrapper, {
						[u.a.LiveStreamingWrapper]: s
					})
				}, n.a.createElement("span", {
					className: Object(r.a)(u.a.Copy, {
						[u.a.LiveStreamingCopy]: s
					})
				}, p._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), n.a.createElement("div", {
					className: u.a.CTAButtons
				}, n.a.createElement(c.t, {
					className: u.a.LoginLink,
					kind: c.b.ExternalLink,
					priority: c.c.Secondary,
					href: Object(i.a)(o, b, "/login"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(l.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, p._("Log In", null, {
					hk: "ZR3pC"
				})), n.a.createElement(c.t, {
					className: Object(r.a)(u.a.SignupLink, {
						[u.a.LiveStreamingSignupLink]: s
					}),
					kind: c.b.ExternalLink,
					priority: c.c.Primary,
					href: Object(i.a)(o, b, "/register"),
					onClick: e => {
						Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), m(), h(Object(l.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, p._("Sign Up", null, {
					hk: "48wH4o"
				}))))
			})
		},
		"./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2SvhnxZBM2RoeILBCJaD5n",
				isAnimated: "VI293JaWpM6E2N7qA18GU",
				gildIcon: "_3rbcaT8iS8Ep2_0IS9bNaC",
				hide: "D6DLiE3WESXxUZt-3w5rF",
				show: "_2sw_2-66SMwc0my0qCmuFJ",
				awardingIcon: "_1ZO1lfp292pRk_NeA_KGVk",
				count: "_1v25u3hsWeYJihslYeyZ33"
			}
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				c = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				l = s("./src/reddit/components/UserIcon/UserIcon.tsx"),
				m = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				u = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				b = s.n(p);
			const h = Object(a.c)({
					account: e => e.user.account
				}),
				v = Object(r.b)(h);
			t.a = i.a.wrapped(v(e => {
				let {
					account: t,
					className: s,
					height: o,
					icon: r,
					isLivestreaming: a,
					isNSFW: i,
					trash: p,
					userId: h,
					width: v
				} = e;
				const g = a ? 36 : 20,
					f = h || `${null==t?void 0:t.id}`,
					S = {
						height: o || g,
						width: v || g,
						minWidth: v || g
					};
				if (p) return n.a.createElement("div", {
					className: s,
					style: S
				}, n.a.createElement(u.a, {
					className: b.a.TrashIcon
				}));
				const O = t && t.id === h ? t.accountIcon : i ? l.a : null != r ? r : void 0;
				return Object(m.a)(O) ? n.a.createElement("div", {
					className: s,
					style: S
				}, n.a.createElement(c.a, {
					headshot: O
				})) : n.a.createElement("div", {
					className: s,
					style: S
				}, n.a.createElement(d.a, {
					userId: f,
					defaultImage: O
				}))
			}), "ChatIcon", b.a)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(o.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("vendors~Avatar~ChatPost~MarketplaceClaimModal~MarketplaceInFeedUnit~NftProfileUnit~RealtimeGQLSubscr~bfab320d"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("ChatMessageInput~ChatPost"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
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
		"./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/helpers/correlationIdTracker.ts"),
				c = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				l = s("./node_modules/reselect/es/index.js"),
				m = s("./src/lib/makeCommentsPageKey/index.ts"),
				u = s("./src/reddit/selectors/comments.ts"),
				p = s("./src/reddit/selectors/commentSelector.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				h = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/gold/awardIcon.ts"),
				g = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				f = s("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				S = s.n(f);
			class O extends n.Component {
				render() {
					const {
						className: e,
						count: t,
						iconUrl: s,
						isAnimated: o
					} = this.props;
					return r.a.createElement("div", {
						className: Object(a.a)(S.a.container, e, {
							[S.a.isAnimated]: o
						})
					}, r.a.createElement(g.a, {
						className: S.a.gildIcon
					}), o && s && r.a.createElement("div", {
						className: S.a.awardingIcon,
						style: {
							backgroundImage: `url("${s}")`
						}
					}), t ? r.a.createElement("div", {
						className: S.a.count
					}, t) : null)
				}
			}
			var w = Object(c.b)(() => Object(l.c)({
				iconUrl: (e, t) => {
					let {
						awardId: s
					} = t;
					if (!s) return;
					const o = Object(h.a)(e, s);
					return Object(v.a)(e, {
						award: o,
						minSize: 64
					})
				}
			}))(O);
			const _ = Object(c.b)(() => Object(l.a)(e => e, (e, t) => {
					let {
						postId: s
					} = t;
					return Object(u.g)(e, {
						commentsPageKey: Object(m.a)(s)
					})
				}, b.G, (e, t) => {
					let {
						postId: s
					} = t;
					return Object(u.u)(e, {
						commentsPageKey: Object(m.a)(s)
					})
				}, (e, t, s, o) => {
					return {
						commentAwardIds: t.length ? t.reduce((t, s) => {
							const o = Object(p.b)(e, {
								commentId: s.id
							});
							if (o) {
								const {
									associatedAwardId: e
								} = o;
								if (e) return [...t, e]
							}
							return t
						}, []) : [],
						isFullyLoaded: o,
						postAwardCount: s.awardCountsById ? Object.values(s.awardCountsById).reduce((e, t) => e + t, 0) : s.allAwardings ? s.allAwardings.reduce((e, t) => e + t.count, 0) : 0
					}
				})),
				C = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class y extends n.Component {
				constructor(e) {
					super(e), this.state = C(e)
				}
				static getDerivedStateFromProps(e, t) {
					return t.prevPostId !== e.postId || !t.prevIsFullyLoaded && e.isFullyLoaded ? C(e) : null
				}
				render() {
					const {
						initialPostAwardCount: e,
						initialCommentAwardIds: t
					} = this.state, {
						postAwardCount: s,
						commentAwardIds: o,
						className: n,
						isFullyLoaded: a
					} = this.props;
					if (!a) return r.a.createElement(w, {
						className: n,
						count: 0
					});
					const i = Math.max(s, e + o.length - t.length),
						d = o.length - 1,
						c = o[d],
						l = o.length !== t.length;
					return r.a.createElement(w, {
						awardId: c,
						className: n,
						count: i,
						isAnimated: l,
						key: d
					})
				}
			}
			var E = _(y),
				x = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				k = s.n(x);
			t.a = e => {
				let {
					postId: t,
					showSubmitInsideTextArea: n,
					isLivestreaming: c,
					handleGiveAward: l,
					sendEvent: m
				} = e;
				return r.a.createElement(i.e, {
					className: Object(a.a)(k.a.ChatButton, {
						[k.a.LivestreamingChatButton]: c,
						[k.a.leftPad]: !n
					}),
					"aria-label": o.fbt._("give award", null, {
						hk: "1nXRWY"
					}),
					onClick: async e => {
						e.stopPropagation();
						const o = Object(d.d)(d.a.GildingFlow, !0);
						l(o);
						const {
							clickGildEvent: n,
							clickRpanGiveAward: r
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						m((c ? r : n)(t))
					}
				}, r.a.createElement(E, {
					postId: t
				}))
			}
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = a.a.div("LoaderWrapper", c.a),
				m = a.a.div("Icon", c.a),
				u = a.a.div("Byline", c.a),
				p = Object(r.a)({
					ErrorComponent: () => n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null))
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
		"./src/reddit/components/CommentsChat/MessageInput/index.m.less": function(e, t, s) {
			e.exports = {
				v2: "_1wX7EkMv0Avw75sEfz3Qyx",
				FormWrapper: "mfKS0B5uqUX6PXcuSjTop",
				formWrapper: "mfKS0B5uqUX6PXcuSjTop",
				V2ChatPost: "_2gIG6JZYU1cqtNUDcj9p1x",
				v2ChatPost: "_2gIG6JZYU1cqtNUDcj9p1x",
				Form: "_76oPIY5CZD4GaQnn-06zO",
				form: "_76oPIY5CZD4GaQnn-06zO",
				RichTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				richTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				LivestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				livestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				inputLine: "_2rpcmnaHqKJnQeHI6-RZU8",
				submitButton: "_1CLqZSQ6jz0CFFB9he7ZtW",
				spamTimeout: "_3IH6D8ThGGGzPY0gTh7ctb",
				Editing: "CA5bQ-3lhJvw_xfOAOs4K",
				editing: "CA5bQ-3lhJvw_xfOAOs4K",
				SmallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				smallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				ChatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				chatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				LivestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				livestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				leftPad: "_2nnsSXE8H28qTe0cmiHlbb",
				v2ChatPostButton: "_23u5-3OLMKFq7xMrqNY9Wk",
				Livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				LivestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				livestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				insetSubmitButton: "_2-jlFgTYFKmNDKFKaq5x8Z",
				isV2ChatPost: "_1Hzb3asSDcxQPD8y3wsKaY",
				V2ChatPostFocusableContent: "_1s9IEAwL1pv1FFcX8Qtbzd",
				v2ChatPostFocusableContent: "_1s9IEAwL1pv1FFcX8Qtbzd",
				RichTextJson: "_2i9z4_kONlAq_kaKny5o8A",
				richTextJson: "_2i9z4_kONlAq_kaKny5o8A",
				isEmbeddedLiveChat: "_2oPecgenjFelRYg0_W7b9R"
			}
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/actions/tooltip.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				p = s("./src/reddit/controls/Dropdown/Row.tsx"),
				b = s("./src/reddit/icons/fonts/index.tsx"),
				h = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/higherOrderComponents/withAdClickLocation/Locations.ts"),
				g = s("./src/reddit/components/OverflowMenu/index.m.less"),
				f = s.n(g);
			const S = c.a.wrapped(u.a, "_Dropdown", f.a),
				O = Object(m.a)(S),
				w = c.a.button("MenuButton", f.a),
				_ = c.a.wrapped(p.b, "DropdownRow", f.a),
				C = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				y = Object(a.b)(C, (e, t) => {
					let {
						dropdownId: s
					} = t;
					return {
						toggleDropdown: () => e(Object(l.h)({
							tooltipId: s
						}))
					}
				}),
				E = e => t => {
					e.onClick && e.onClick(), e.toggleDropdown(), t.stopPropagation()
				};
			t.b = y(e => r.a.createElement(w, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": o.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[f.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId,
				"data-adclicklocation": v.b.OVERFLOW_MENU
			}, e.icon ? e.icon : r.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: f.a.MenuIcon
			}), r.a.createElement(O, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition,
				style: e.style
			}, e.children)))
		},
		"./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			const r = Object(o.createContext)({
					currentTime: 0,
					setCurrentTime: () => {},
					isLive: !1,
					setIsLive: () => {},
					totalTime: 0,
					setTotalTime: () => {}
				}),
				a = e => {
					let {
						children: t
					} = e;
					const [s, a] = Object(o.useState)(0), [i, d] = Object(o.useState)(!1), [c, l] = Object(o.useState)(0), m = {
						currentTime: s,
						setCurrentTime: a,
						isLive: i,
						setIsLive: d,
						totalTime: c,
						setTotalTime: l
					};
					return n.a.createElement(r.Provider, {
						value: m
					}, t)
				}
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
		"./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = "rpan-download-obs-modal",
				r = Object(o.a)({
					resolved: {},
					chunkName: () => "Download OBS Modal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("Download OBS Modal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/DownloadOBSModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/DownloadOBSModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = r
		},
		"./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/index.m.less": function(e, t, s) {
			e.exports = {
				banner: "_2ZtF0KY8miGcAKH2bKpeFg",
				dark: "_9sKwZVralM5Amb07ax7Fr",
				bannerButton: "_1Txx6iEKtaOXFI0jWxe33u",
				Link: "NmW-4eoDKF7qwN1eOHIZX",
				link: "NmW-4eoDKF7qwN1eOHIZX",
				bannerCloseIcon: "_-1__4J5NGL7qL728qj4wC",
				Button: "vTaaqwnZmB5nDIVGQg46i",
				button: "vTaaqwnZmB5nDIVGQg46i",
				ModalBody: "_20P3_5OAGOA17qtM8WWosJ",
				modalBody: "_20P3_5OAGOA17qtM8WWosJ",
				ModalHeader: "_2JQJnav6BN15ouwndMS8v0",
				modalHeader: "_2JQJnav6BN15ouwndMS8v0",
				OBSImage: "_3BxgYaImNWnO-5EL124Uu",
				obsImage: "_3BxgYaImNWnO-5EL124Uu",
				ModalFooter: "_1FA99wDnuK6JYf6UZ8uvZv",
				modalFooter: "_1FA99wDnuK6JYf6UZ8uvZv",
				Title: "_3kw4Ocwkq_BMLQkOI8PNuL",
				title: "_3kw4Ocwkq_BMLQkOI8PNuL",
				SubTitle: "_3_k2jbZuNUdBs1uQB7ixME",
				subTitle: "_3_k2jbZuNUdBs1uQB7ixME",
				ModalMain: "_2-uMAk5f5ZEVHA7qRbTppQ",
				modalMain: "_2-uMAk5f5ZEVHA7qRbTppQ",
				Image: "_3Jd4_nAegc-VBQkl9fkRsc",
				image: "_3Jd4_nAegc-VBQkl9fkRsc",
				VideoLive: "_1Ug68guQT4FRvLm9KrPVS9",
				videoLive: "_1Ug68guQT4FRvLm9KrPVS9",
				ModalText: "_1JEPfF0ge4CHSOolR6mn4I",
				modalText: "_1JEPfF0ge4CHSOolR6mn4I",
				TextButton: "_2WvJWRo5J-lgzhXhcgArFK",
				textButton: "_2WvJWRo5J-lgzhXhcgArFK",
				TitleContainer: "_2i4zKcmHUk7mzsX7IQ6M2M",
				titleContainer: "_2i4zKcmHUk7mzsX7IQ6M2M",
				closeIcon: "_jhhdqQ8u6h6iv51Ae-DA"
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
		"./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				r = Object(o.a)({
					resolved: {},
					chunkName: () => "VideoShareModal",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("VideoShareModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/VideoShareModal.tsx"
					}
				}, {
					ssr: !1
				});
			t.b = r
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
		"./src/reddit/components/PublicAccessNetwork/Theater/index.m.less": function(e, t, s) {
			e.exports = {
				theaterContainer: "_2GRKD-vc7V1Y_N8mf81C73",
				wrap: "_2SKXIKsN82sEYj0P-t3_pm",
				overlay: "_3EBqsnw89Qx3UEoELcarMR",
				focusVisible: "RrzcV0hyA0BISr1eXgG9M",
				panesWrapper: "_8aA-2ZrheEy6k2e1iShKQ",
				initialized: "_2QagxVHOpd1MZxMCUI8-aC",
				pane: "_1J9WuBbLemYVOo8ibJDljN",
				leftPane: "_1YLn-G2I6GbQpuf-DZ4fOX",
				videoContainer: "_1LWq4WiRex5umy4-L1eStm",
				rightPane: "p02A8ZUESZF7fQy6pu1WF",
				isObsBannerDisplayed: "_1a3gZpNuPZFbry905f5P0q",
				theaterContainerExp: "-Sc48lylosr0lQX5S-N44",
				downloadOBSModal: "_1AP8IywWNirPJeB3GKpgz_",
				downloadObsModal: "_1AP8IywWNirPJeB3GKpgz_",
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				n = s("./node_modules/react/index.js"),
				r = s.n(n),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				l = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less"),
				u = s.n(m);
			const p = a.a.wrapped(l.a, "DisplayContainer", u.a),
				b = a.a.div("DropdownLabel", u.a),
				h = a.a.div("ReasonTitle", u.a),
				v = e => r.a.createElement(p, null, r.a.createElement(b, null, e.dropdownLabel), e.selectedReason && r.a.createElement(h, null, e.selectedReason)),
				g = a.a.wrapped(i.a, "Dropdown", u.a),
				f = a.a.wrapped(c.b, "DropdownTriangle", u.a),
				S = a.a.wrapped(d.b, "DropdownRow", u.a),
				O = a.a.button("DropdownContainer", u.a);
			t.a = e => r.a.createElement(O, {
				onClick: e.onToggleDropdown
			}, r.a.createElement(v, {
				dropdownLabel: e.isLoading ? o.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : o.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), r.a.createElement(f, null), e.isDropdownOpen && r.a.createElement(g, {
				isOverlay: !0
			}, r.a.createElement(S, {
				displayText: o.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, s) => r.a.createElement(S, {
				displayText: `${s+1}. ${t.title}`,
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
				buttonRow: "_3zZmX0EjloIkzwt2-sRI2_",
				toggleLabel: "_3J1Bs_5dR0qoQB1_kO03HR",
				toggleLabelText: "jGFen5TvAvfaFKwfUboOg",
				toggle: "_1W9ZWSmEnnxTPwKV-PJWCP"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "dispatcher", (function() {
				return T
			})), s.d(t, "selector", (function() {
				return N
			})), s.d(t, "connector", (function() {
				return M
			})), s.d(t, "CharacterCountdown", (function() {
				return A
			})), s.d(t, "EmptyState", (function() {
				return D
			})), s.d(t, "MessageInput", (function() {
				return G
			})), s.d(t, "FormOptionsContainer", (function() {
				return W
			})), s.d(t, "ModalFooter", (function() {
				return J
			})), s.d(t, "ButtonRow", (function() {
				return z
			})), s.d(t, "AddRemovalReasonModal", (function() {
				return X
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/removalReasons/index.ts"),
				l = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				b = s("./src/reddit/controls/Checkbox/index.tsx"),
				h = s("./src/reddit/controls/InternalLink/index.tsx"),
				v = s("./src/reddit/controls/RadioInput/index.tsx"),
				g = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				f = s("./src/reddit/controls/TextButton/index.tsx"),
				S = s("./src/reddit/icons/fonts/Info/index.tsx"),
				O = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				w = s("./src/reddit/models/RemovalReason/index.ts"),
				_ = s("./src/reddit/selectors/removalReasons.ts"),
				C = s("./src/reddit/selectors/subreddit.ts"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/selectors/experiments/cnc/index.ts"),
				k = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				j = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				I = s.n(j);
			const {
				fbt: R
			} = s("./node_modules/fbt/lib/FbtPublic.js"), P = e => {
				switch (e) {
					case w.f.Private:
						return "private_subreddit";
					case w.f.PrivateExposed:
						return "private_personal";
					default:
						return e
				}
			}, L = {
				isDropdownOpen: !1,
				message: "",
				modNote: "",
				removalType: w.f.Public,
				selectedReason: null
			}, T = e => ({
				submitBulkRemovalReason: (t, s, o, n, r) => e(Object(c.submitBulkRemovalReason)(t, s, o, n, r)),
				submitRemovalReason: (t, s, o, n, r, a) => e(Object(c.submitRemovalReason)(t, s, o, n, r, a))
			}), N = Object(a.c)({
				currentUserName: e => {
					const t = Object(E.k)(e);
					if (t) return t.displayText
				},
				isLoading: _.a,
				isPostCommentAsSubredditEnabled: x.f,
				removalReasons: _.c,
				isRemovalReasonLockCommentEnabled: x.g,
				subredditName: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(C.X)(e, {
						subredditId: s
					}).name
				}
			}), M = Object(r.b)(N, T), A = d.a.wrapped(l.a, "CharacterCountdown", I.a), D = d.a.div("EmptyState", I.a), F = d.a.wrapped(m.o, "ModNoteDescription", I.a), B = d.a.wrapped(p.l, "PrimaryButton", I.a), V = d.a.wrapped(g.a, "RadioOption", I.a), U = d.a.span("BoldText", I.a), H = d.a.wrapped(m.t, "ModNoteInput", I.a), G = d.a.wrapped(m.t, "MessageInput", I.a), q = d.a.wrapped(S.a, "Info", I.a), K = d.a.div("SmallInfoText", I.a), W = d.a.div("FormOptionsContainer", I.a), J = d.a.wrapped(m.g, "ModalFooter", I.a), Q = d.a.div("FooterRow", I.a), z = d.a.wrapped(Q, "ButtonRow", I.a);
			class X extends n.a.Component {
				constructor(e) {
					super(e), this.trackClick = e => t => {
						const s = 1 === this.props.itemIds.length ? this.props.itemIds[0] : void 0;
						this.props.sendEvent(o => ({
							source: "removal_reasons",
							action: "click",
							noun: e,
							comment: s && Object(y.h)(o, s) || null,
							post: s && Object(y.K)(o, s) || null,
							screen: Object(y.bb)(o),
							subreddit: Object(y.kb)(o, this.props.subredditId),
							...t || {}
						}))
					}, this.onSelectRemovalType = e => {
						this.setState({
							removalType: e
						}), this.trackClick(`type_${P(e)}`)()
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
						}), this.trackClick("reason")(), e && this.setState({
							message: e.message
						}), this.closeDropdown()
					}, this.canSave = () => !(this.state.message.length > w.a || this.state.modNote.length > w.b) && (this.state.selectedReason ? this.state.message.trim().length > 0 : this.state.modNote.trim().length > 0), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.canSave()) {
							(t.removalContextType === w.e.Bulk ? e.submitBulkRemovalReason : e.submitRemovalReason)(e.itemIds, t.selectedReason, t.message.trim(), t.removalType, t.modNote.trim(), [w.f.Public, w.f.PublicAsSubreddit].includes(t.removalType) && t.removalContextType !== w.e.Bulk && this.props.isRemovalReasonLockCommentEnabled ? t.isLocked : void 0);
							const s = this.props.isRemovalReasonLockCommentEnabled ? {
								modAction: {
									removalreason: {
										notify: [w.f.Public, w.f.PublicAsSubreddit].includes(t.removalType) ? "comment" : "modmail",
										send_as: [w.f.Private, w.f.PublicAsSubreddit].includes(t.removalType) ? "subreddit" : "self",
										is_locked: t.isLocked
									}
								}
							} : void 0;
							this.trackClick("sent")(s), t.selectedReason && this.trackClick(`sent_${P(t.removalType)}`)(s), t.modNote && this.trackClick("sent_modnote")(), e.toggleModal()
						}
					}, this.toggleIsLocked = () => {
						this.setState({
							isLocked: !this.state.isLocked
						})
					}, this.onCancel = () => {
						this.props.toggleModal(), this.trackClick("cancel")()
					}, this.renderRemovalTypeOptions = () => {
						const {
							props: e,
							state: t
						} = this, s = [];
						return t.removalContextType !== w.e.Bulk && (e.isPostCommentAsSubredditEnabled ? (s.push(n.a.createElement(V, {
							key: w.f.PublicAsSubreddit,
							showButton: !0,
							tabIndex: 0,
							value: w.f.PublicAsSubreddit
						}, n.a.createElement("div", null, t.removalContextType === w.e.Post ? R._("Public: Write a sticky comment on the post as Mod Team", null, {
							hk: "er8wA"
						}) : R._("Public: Write a reply to the comment as Mod Team", null, {
							hk: "1WMyjM"
						})))), s.push(n.a.createElement(V, {
							key: w.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: w.f.Public
						}, n.a.createElement("div", null, t.removalContextType === w.e.Post ? R._("Public: Write a sticky comment on the post as {currentUserName}", [R._param("currentUserName", n.a.createElement(U, null, `u/${e.currentUserName}`))], {
							hk: "2jsvEB"
						}) : R._("Public: Write a reply to the comment as {currentUserName}", [R._param("currentUserName", n.a.createElement(U, null, `u/${e.currentUserName}`))], {
							hk: "LZfBm"
						}))))) : s.push(n.a.createElement(V, {
							key: w.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: w.f.Public
						}, n.a.createElement("div", null, t.removalContextType === w.e.Post ? R._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : R._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						}))))), s.push(n.a.createElement(V, {
							key: w.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: w.f.Private
						}, n.a.createElement("div", null, R._("Private: send a Modmail from {subredditName} to the user", [R._param("subredditName", n.a.createElement(U, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && s.push(n.a.createElement(V, {
							key: w.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: w.f.PrivateExposed
						}, n.a.createElement("div", null, R._("Private: send a Modmail from {currentUserName} to the user", [R._param("currentUserName", n.a.createElement(U, null, `u/${e.currentUserName}`))], {
							hk: "wFSJr"
						})))), s
					}, this.state = {
						...L,
						removalType: e.isPostCommentAsSubredditEnabled ? w.f.PublicAsSubreddit : w.f.Public,
						removalContextType: Object(w.g)(e.itemIds),
						isLocked: !0
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return n.a.createElement(m.e, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && n.a.createElement(m.i, null, n.a.createElement(O.a, null, n.a.createElement(m.q, null, R._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && R._("({number of items} posts/comments)", [R._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), n.a.createElement(f.a, {
						onClick: this.onCancel
					}, n.a.createElement(m.b, null)))), n.a.createElement(m.l, null, e.isLoading || e.removalReasons.length > 0 ? n.a.createElement(k.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : n.a.createElement(D, null, R._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), n.a.createElement(h.default, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, n.a.createElement(p.r, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, R._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && n.a.createElement(W, null, n.a.createElement(m.h, null, n.a.createElement(v.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), n.a.createElement(G, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), n.a.createElement(A, {
						maxChars: w.a,
						text: t.message.trim()
					}), n.a.createElement(K, null, t.removalType !== w.f.Public && t.removalType !== w.f.PublicAsSubreddit && n.a.createElement(n.a.Fragment, null, n.a.createElement(q, null), R._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))), (t.removalType === w.f.Public || t.removalType === w.f.PublicAsSubreddit) && this.props.isRemovalReasonLockCommentEnabled && t.removalContextType !== w.e.Bulk && n.a.createElement("label", {
						className: I.a.toggleLabel
					}, n.a.createElement(b.a, {
						className: I.a.toggle,
						isCheckboxSelected: !!t.isLocked,
						toggleCheckbox: this.toggleIsLocked
					}), n.a.createElement("span", {
						className: I.a.toggleLabelText
					}, R._("Lock removal reason comment thread", null, {
						hk: "1p3zeG"
					}))))), n.a.createElement(J, null, n.a.createElement(Q, null, n.a.createElement(F, null, R._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), n.a.createElement(Q, null, n.a.createElement(H, {
						placeholder: R._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), n.a.createElement(Q, null, n.a.createElement(A, {
						maxChars: w.b,
						text: t.modNote.trim()
					})), n.a.createElement(z, null, n.a.createElement(p.o, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, R._("Cancel", null, {
						hk: "2TSLl5"
					})), n.a.createElement(B, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, R._("Submit", null, {
						hk: "4aU3dh"
					})))))
				}
			}
			t.default = Object(i.a)(M(Object(u.c)(X)))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return r
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/constants/colors.ts");
			const r = {
				backgroundColor: n.a.overlayReportFlow
			};
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
				requireAsync(e) {
					const t = this.resolve(e);
					return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
				},
				requireSync(e) {
					const t = this.resolve(e);
					return s(t)
				},
				resolve() {
					return "./src/reddit/components/ReportFlow/_ReportFlow.tsx"
				}
			})
		},
		"./src/reddit/components/ReportFlow/new.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return a
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				n = s("./src/reddit/constants/colors.ts");
			const r = {
					backgroundColor: n.a.overlayReportFlow
				},
				a = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("CommentsPage~Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-Cl~5351df81"), s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx"
					}
				}),
				i = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlowNew",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReportFlowNew").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx")),
					requireAsync(e) {
						const t = this.resolve(e);
						return this.resolved[t] = !1, this.importAsync(e).then(e => (this.resolved[t] = !0, e))
					},
					requireSync(e) {
						const t = this.resolve(e);
						return s(t)
					},
					resolve() {
						return "./src/reddit/components/ReportFlow/_ReportFlowNew.tsx"
					}
				});
			t.b = i
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, s) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				breadcrumbTitle: "_24r4TaTKqNLBGA3VgswFrN",
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
				return a
			})), s.d(t, "p", (function() {
				return i
			})), s.d(t, "n", (function() {
				return d
			})), s.d(t, "o", (function() {
				return c
			})), s.d(t, "m", (function() {
				return l
			})), s.d(t, "l", (function() {
				return m
			})), s.d(t, "f", (function() {
				return u
			})), s.d(t, "h", (function() {
				return p
			})), s.d(t, "a", (function() {
				return b
			})), s.d(t, "g", (function() {
				return h
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "d", (function() {
				return O
			})), s.d(t, "j", (function() {
				return w
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				n = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				r = s.n(n);
			const a = o.a.section("FormPage", r.a),
				i = o.a.h1("HomePageTitle", r.a),
				d = o.a.button("HomePageBreadcrumb", r.a),
				c = o.a.div("HomePageGroup", r.a),
				l = o.a.h1("FormPageTitle", r.a),
				m = o.a.div("FormPageSection", r.a),
				u = o.a.div("FormGroup", r.a),
				p = o.a.h2("FormGroupTitle", r.a),
				b = o.a.div("FormElement", r.a),
				h = o.a.div("FormGroupDescription", r.a),
				v = o.a.div("FormItem", r.a),
				g = o.a.h3("FormElementTitle", r.a),
				f = o.a.div("FormElementDescription", r.a),
				S = o.a.div("FormElementError", r.a),
				O = o.a.div("FormElementSubGroup", r.a),
				w = o.a.li("FormListItem", r.a)
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
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/index.tsx"),
				i = s("./src/reddit/controls/Checkbox/index.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("button", {
				"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
				className: e.className,
				onClick: t => {
					e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
				},
				disabled: e.disabled
			}, n.a.createElement(a.a, {
				name: e.isHalfCheckboxSelected ? "checkbox_dismiss_fill" : e.isCheckboxSelected ? "checkbox_fill" : "checkbox",
				className: Object(r.a)({
					[d.a.redditStyle]: e.redditStyle,
					[d.a.disabled]: e.disabled
				}),
				style: e.checkBoxStyle
			}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const n = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: n
					} of t) s.push(Object(o.f)(n));
				return s
			}
		},
		"./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/makeListingKey/index.ts"),
				n = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				r = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				a = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				i = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts"),
				d = s("./src/reddit/models/Post/index.ts");
			t.a = e => {
				let {
					getState: t,
					onFailure: s,
					onSuccess: c,
					postId: l,
					response: m
				} = e;
				if (!m.ok) return void s(m.error);
				const u = m.body,
					{
						post: p
					} = u && u.data,
					b = t(),
					h = Object(o.a)(l, null, {
						isOtherDiscussions: !0
					});
				if (p) {
					if (p.otherDiscussions && p.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = p, {
							postFlair: s,
							postIds: o,
							posts: m,
							profiles: u,
							subreddits: v
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(r.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: o
									} = e;
									if (o && o.type === d.a.Post && o.postInfo) {
										const e = Object(r.f)(o.postInfo);
										t.posts[e.id] = e
									}
									return Object(d.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(a.a)(e.profile)) : Object(d.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(i.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(n.a)(e.subreddit))), s.id
								};
							if (e && e.edges)
								for (const {
										node: o
									} of e.edges) {
									const e = s(o);
									e && t.postIds.push(e)
								}
							return t
						})(e);
						c({
							count: t,
							key: h,
							meta: b.meta,
							postFlair: s,
							postId: l,
							postIds: o,
							posts: m,
							profiles: u,
							subreddits: v
						})
					}
				} else c({
					count: 0,
					key: h,
					meta: b.meta,
					postFlair: {},
					postId: l,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			}
		},
		"./src/reddit/helpers/styles/mixins/fonts.m.less": function(e, t, s) {
			e.exports = {
				titleFontH1: "_3gUeTKT4XlFEby1H6_TC19",
				titleFontH2: "_1-mMPLU2Nlffx0JT-3revU",
				titleFontH3: "_2bunchGAjv3PLvvdL2MjZ-",
				titleFontH4: "_3gwUix9UH34NUpcjvZLXbF",
				titleFontH5: "_3fOSv3R7EbBH_IjX9NcJ6k",
				titleFontH6: "_2idh376GSaloUfQixQHScs",
				metadataFont: "yxMvMTKJ8A1hhaAmVojky",
				flairFont: "_2Ms4g8FLmBRDWAbfRO4bG6",
				labelsFont: "_2WK3LdQ4kR2aJFQqnTsu0A",
				actionFont: "_3d3pCI-qoO6psmyxodxokk",
				smallButtonFont: "_1LVr35fM7ddtvg2g2I4qJ7",
				largeButtonFont: "_1jVGMlwau5yaN1vqhiSwEo",
				strongTextFont: "_2oA70eNUJxOQ-eRN8TPT9s",
				tabFont: "_1leSu44tZ3i4KBsjGW_F9c",
				buttonFontXS: "_2hx9_-C2FZtpmqHzmEIAYR",
				buttonFontXs: "_2hx9_-C2FZtpmqHzmEIAYR",
				buttonFontS: "_87bVuwY1B7OXO-iDEwMpj",
				buttonFontM: "Cgr8csu8rgZnaC3z01hBx",
				buttonFontL: "_2pRU1zvDiQbrvBARchkUCF",
				buttonFontXL: "_3J7-ymNaQyuo5TRybj5q_h",
				buttonFontXl: "_3J7-ymNaQyuo5TRybj5q_h",
				bodyFontH1: "_2CvYC5Dor5C7bRy9T_5TQX",
				bodyFontH2: "_6n_lhbrgbPv9CUoOwND7J",
				bodyFontH3: "l6V3xHeCqsPn028sXl7VN",
				bodyFontH4: "_1XCZr-qft4wCNMbV9Ss_Ou",
				bodyFontH5: "_1d5gYDAvszTFAiNg31iR56",
				bodyFontH6: "_2aeJbvpJvTsRzIwwJHzssX",
				bodyFontH6Small: "_4oYGhpkb08j0kg-V_ZOR4",
				bodyFont: "_2pkKgwPGa4i4WMPJpHXzBM",
				bodyFontSmall: "_11mUbPPL96Bo13O8gTB7ik",
				bodyFontMono: "_386ITOzsDX5wQo_sJfUExR",
				landingPageTitleFontH1: "_2-4JQtks9XipKrsm1HMWyQ",
				landingPageTitleFontH2: "_2R5R6mT0qeaWhYltumJ9E-",
				landingPageTitleFontH3: "_3SeaS6fMoL_cAKWPlYlH_t"
			}
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "H", (function() {
				return l
			})), s.d(t, "i", (function() {
				return m
			})), s.d(t, "j", (function() {
				return u
			})), s.d(t, "D", (function() {
				return p
			})), s.d(t, "A", (function() {
				return b
			})), s.d(t, "E", (function() {
				return h
			})), s.d(t, "C", (function() {
				return v
			})), s.d(t, "B", (function() {
				return g
			})), s.d(t, "u", (function() {
				return f
			})), s.d(t, "v", (function() {
				return S
			})), s.d(t, "x", (function() {
				return O
			})), s.d(t, "r", (function() {
				return w
			})), s.d(t, "p", (function() {
				return _
			})), s.d(t, "q", (function() {
				return C
			})), s.d(t, "o", (function() {
				return y
			})), s.d(t, "z", (function() {
				return E
			})), s.d(t, "s", (function() {
				return x
			})), s.d(t, "y", (function() {
				return k
			})), s.d(t, "G", (function() {
				return j
			})), s.d(t, "t", (function() {
				return I
			})), s.d(t, "c", (function() {
				return R
			})), s.d(t, "n", (function() {
				return P
			})), s.d(t, "k", (function() {
				return L
			})), s.d(t, "b", (function() {
				return T
			})), s.d(t, "d", (function() {
				return N
			})), s.d(t, "e", (function() {
				return M
			})), s.d(t, "w", (function() {
				return A
			})), s.d(t, "F", (function() {
				return D
			})), s.d(t, "f", (function() {
				return F
			})), s.d(t, "l", (function() {
				return B
			})), s.d(t, "m", (function() {
				return V
			})), s.d(t, "g", (function() {
				return U
			})), s.d(t, "h", (function() {
				return H
			}));
			var o, n = s("./src/reddit/constants/chat.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(o || (o = {}));
			const i = (e, t) => {
					if (t) {
						const s = a.C(e, t.post.id),
							o = a.K(e, t.post.id),
							n = a.jb(e);
						if (t.post.authorInfo && o && (o.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const o = Object(r.j)(e, {
								streamIdFromPath: t.post.id
							});
							o === r.a.LIVE ? s.type = "stream_live" : o === r.a.VOD ? s.type = "stream_vod" : o === r.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: o,
							media: s,
							subreddit: n
						}
					}
					return {
						subreddit: a.jb(e)
					}
				},
				d = (e, t, s) => {
					if (!t || !s) return;
					const o = Object(r.j)(e, {
							streamIdFromPath: t.post.id
						}),
						a = t.chat_disabled || s.chatState === n.c.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: o === r.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: a ? n.c.None : n.c.Compact,
						scrubbingStartMs: s.scrubbingStartMs,
						scrubbingEndMs: s.scrubbingEndMs,
						playerType: s.playerType
					}
				},
				c = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				l = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du",
					...i(e)
				}),
				m = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less",
					...i(e)
				}),
				u = (e, t) => s => ({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					...i(s, e),
					actionInfo: a.d(s, {
						position: t || 0
					})
				}),
				p = (e, t) => s => ({
					source: "stream_player",
					action: "fail",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...e && {
						...i(s, e)
					}
				}),
				b = (e, t) => s => ({
					source: "stream_player",
					action: "heartbeat",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				h = (e, t) => s => ({
					source: "stream_player",
					action: "play",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				v = (e, t) => s => ({
					source: "stream_player",
					action: "complete",
					noun: "stream",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				g = (e, t, s) => o => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(o, t, s),
					...c(o),
					...i(o, t)
				}),
				f = (e, t, s, o) => n => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(n, t, s),
					...c(n),
					...i(n, t),
					actionInfo: a.d(n, {
						referralId: o
					})
				}),
				S = (e, t, s) => o => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(o, t, s),
					...c(o),
					...i(o, t)
				}),
				O = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "stream_from_desktop",
					...c(t),
					...i(t, e)
				}),
				w = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "upvote",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				_ = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "downvote",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				C = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				y = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: d(s, e, t),
					...i(s, e)
				}),
				E = e => t => {
					const s = Object(r.l)(t, e);
					return {
						source: "stream_chat",
						action: "click",
						noun: "send_chat",
						...i(t, s)
					}
				},
				x = (e, t, s) => o => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					},
					playback: d(o, t, s),
					...i(o, t)
				}),
				k = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: d(s, e, t),
					...c(s)
				}),
				j = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: a.T(t),
					screen: a.bb(t),
					...i(t, e)
				}),
				I = e => t => {
					const s = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: a.T(t),
						screen: a.bb(t),
						...s
					}
				},
				R = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...i(t, e)
				}),
				L = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: a.jb(t)
				}),
				T = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "close",
					playback: d(s, e, t),
					...i(s, e)
				}),
				N = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "pause",
					playback: d(s, e, t),
					...i(s, e)
				}),
				M = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "play",
					playback: d(s, e, t),
					...i(s, e)
				}),
				A = (e, t) => s => ({
					source: "stream_player",
					action: "mute",
					noun: "volume",
					playback: d(s, e, t),
					...i(s, e)
				}),
				D = (e, t) => s => ({
					source: "stream_player",
					action: "unmute",
					noun: "volume",
					playback: d(s, e, t),
					...i(s, e)
				}),
				F = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "replay_video",
					playback: d(s, e, t),
					...i(s, e)
				}),
				B = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "next",
					playback: d(s, e, t),
					...i(s, e),
					...c(s)
				}),
				V = (e, t) => s => ({
					source: "stream_player",
					action: "swipe",
					noun: "previous",
					playback: d(s, e, t),
					...i(s, e),
					...c(s)
				}),
				U = (e, t) => s => ({
					source: "rpanstudio_banner",
					action: "click",
					noun: e,
					...i(s, t),
					...c(s)
				}),
				H = (e, t) => s => ({
					source: "rpanstudio_modal",
					action: "click",
					noun: e,
					...i(s, t),
					...c(s)
				})
		},
		"./src/reddit/helpers/trackers/shareToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/constants/tracking.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const r = () => e => ({
				...Object(n.o)(e),
				source: "post",
				action: o.c.CLICK,
				noun: "share_chat",
				subreddit: Object(n.jb)(e)
			})
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => n.a.createElement(r.a, a({
				name: "award"
			}, e))
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => n.a.createElement("i", {
				className: `${Object(r.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => n.a.createElement("i", {
				className: Object(r.a)(Object(a.b)("share", e.isFilled), d.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/svgs/Pagination/back.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, n.a.createElement("g", {
				stroke: "none"
			}, n.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, n.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);
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
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r(e) {
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
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r(e) {
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
				return r
			}));
			var o = s("./node_modules/react/index.js"),
				n = s.n(o);

			function r(e) {
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
		"./src/reddit/models/PublicAccessNetwork/index.ts": function(e, t, s) {
			"use strict";
			var o;
			s.d(t, "a", (function() {
					return o
				})),
				function(e) {
					e.NOT_STARTED = "NOT_STARTED", e.PUBLISHED = "PUBLISHED", e.IS_LIVE = "IS_LIVE", e.DISCONNECTED = "DISCONNECTED", e.KILLED = "KILLED", e.PURGED = "PURGED", e.ENDED = "ENDED"
				}(o || (o = {}))
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return r
			})), s.d(t, "a", (function() {
				return a
			})), s.d(t, "b", (function() {
				return i
			})), s.d(t, "f", (function() {
				return d
			})), s.d(t, "e", (function() {
				return c
			})), s.d(t, "g", (function() {
				return l
			})), s.d(t, "h", (function() {
				return m
			}));
			var o = s("./src/reddit/helpers/isPost.ts");
			const n = 50,
				r = 50,
				a = 1e4,
				i = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public", e.PublicAsSubreddit = "public_as_subreddit"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(o.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
				m = (e, t) => {
					return {
						[t === c.Bulk ? "item_ids" : "item_id"]: e.itemId,
						message: e.message,
						title: e.title,
						type: e.type,
						lock_comment: e.isLocked
					}
				}
		},
		"./src/reddit/pages/PublicAccessNetwork/index.m.less": function(e, t, s) {
			e.exports = {
				rpanContainer: "e00nEFei4dIvTqPPuw5rE",
				overlay: "KiogDzsSRwmKjlSPDsTQv",
				forbiddenScreen: "_1Ew8OVeA6sJ108GaDUqjQf",
				rpanContainerExp: "_32FuOYQF3BU7Vd3f-Mm_-6"
			}
		},
		"./src/reddit/pages/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/objectSelector/index.ts"),
				m = s("./src/reddit/actions/login.ts"),
				u = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				p = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				b = s("./src/config.ts"),
				h = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./node_modules/lodash/throttle.js"),
				g = s.n(v),
				f = s("./src/reddit/contexts/NavbarExp.ts"),
				S = s("./src/higherOrderComponents/withMux/index.tsx"),
				O = s("./src/lib/addQueryParams/index.ts");
			var w = e => {
					if (!e || !e.isConnected) return;
					const t = e.hasAttribute("tabindex");
					t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
				},
				_ = s("./src/lib/focusVisible/index.js"),
				C = s("./src/lib/VideoSession/util.ts"),
				y = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				E = s("./src/reddit/actions/chat/toggle.ts"),
				x = s("./src/reddit/actions/media.ts"),
				k = s("./src/reddit/actions/modal.ts"),
				j = s("./src/reddit/actions/profile/index.ts"),
				I = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				R = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				P = s("./src/lib/makeActionCreator/index.ts");
			const L = Object(P.a)(R.E),
				T = Object(P.a)(R.X),
				N = e => async t => {
					t(L(e))
				}, M = Object(P.a)(R.P), A = Object(P.a)(R.V);
			var D = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				F = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				B = s("./src/reddit/actions/reportFlow/index.ts"),
				V = s("./src/reddit/actions/video.ts"),
				U = s("./src/reddit/components/HlsVideo/index.tsx"),
				H = s("./src/higherOrderComponents/asModal/index.tsx"),
				G = s("./src/lib/lessComponent.tsx"),
				q = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				K = s("./src/reddit/controls/Button/index.tsx"),
				W = s("./src/reddit/controls/TextButton/index.tsx"),
				J = s("./src/reddit/helpers/localStorage/index.ts"),
				Q = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				z = s("./src/reddit/components/PublicAccessNetwork/Modals/ChatMute/index.m.less"),
				X = s.n(z);
			const Y = G.a.div("Image", X.a),
				Z = G.a.wrapped(q.g, "ModalFooter", X.a),
				$ = G.a.wrapped(q.i, "ModalHeader", X.a),
				ee = G.a.wrapped(q.l, "ModalMain", X.a);
			var te = Object(H.a)(e => {
					let {
						toggleModal: t
					} = e;
					const s = () => {
						J.Sb(), t()
					};
					return n.a.createElement(q.e, null, n.a.createElement($, null, n.a.createElement(Q.a, null, n.a.createElement("div", null, n.a.createElement("div", {
						className: X.a.Title
					}, h.fbt._("Get ready to chat!", null, {
						hk: "1lebCx"
					})), n.a.createElement(q.p, null, h.fbt._("Before jumping in, keep these tips in mind.", null, {
						hk: "3evsT7"
					}))), n.a.createElement(W.a, {
						onClick: s
					}, n.a.createElement(q.b, null)))), n.a.createElement(ee, null, n.a.createElement("span", null, n.a.createElement("span", null, n.a.createElement("div", {
						className: X.a.SubTitle
					}, h.fbt._("Remember the human", null, {
						hk: "3oHyEM"
					})), n.a.createElement(q.o, null, h.fbt._("We're all (internet) friends here, so enjoy chatting and remember that rules still apply.", null, {
						hk: "3df1qF"
					}))), n.a.createElement(Y, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/heart-rainbow.png")`
						}
					})), n.a.createElement("span", null, n.a.createElement("span", null, n.a.createElement("div", {
						className: X.a.SubTitle
					}, h.fbt._("Look out for each other", null, {
						hk: "hrE04"
					})), n.a.createElement(q.o, null, h.fbt._("If you see any harrassment or abuse, report it by pressing and holding on the message.", null, {
						hk: "12gD31"
					}))), n.a.createElement(Y, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/award_beagle.png")`
						}
					})), n.a.createElement("span", null, n.a.createElement("span", null, n.a.createElement("div", {
						className: X.a.SubTitle
					}, h.fbt._("Have fun!", null, {
						hk: "20HtGT"
					})), n.a.createElement(q.o, null, h.fbt._("Chat, lol, debate, discuss human nature or quantum physics... it's all up to you.", null, {
						hk: "3Aj4Z7"
					}))), n.a.createElement(Y, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/award_celebrate.png")`
						}
					}))), n.a.createElement(Z, {
						className: X.a.ModalFooter
					}, n.a.createElement(K.l, {
						onClick: s,
						className: X.a.Button,
						"data-redditstyle": !0
					}, h.fbt._("Start Chatting", null, {
						hk: "3n2GtA"
					}))))
				}),
				se = s("./src/reddit/helpers/styles/mixins/fonts.m.less"),
				oe = s.n(se),
				ne = s("./src/reddit/icons/svgs/Close/index.tsx"),
				re = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/index.m.less"),
				ae = s.n(re);
			var ie = e => {
					let {
						onClickLearnMore: t,
						onClickDismiss: s,
						isDark: o = !1
					} = e;
					return n.a.createElement("div", {
						className: Object(d.a)(ae.a.banner, {
							[ae.a.dark]: o
						})
					}, n.a.createElement("div", null, h.fbt._("{=Download the RPAN studio} desktop application to broadcast live from your computer.", [h.fbt._param("=Download the RPAN studio", n.a.createElement("span", {
						className: oe.a.strongTextFont
					}, h.fbt._("Download the RPAN studio", null, {
						hk: "1rcEDr"
					})))], {
						hk: "ODJOz"
					})), n.a.createElement(K.t, {
						className: ae.a.bannerButton,
						kind: K.b.Button,
						priority: K.c.Primary,
						onClick: t,
						"data-redditstyle": !0
					}, h.fbt._("Learn more", null, {
						hk: "1Ri9Pi"
					})), n.a.createElement(ne.a, {
						"data-testid": "bannerCloseIcon",
						onClick: s,
						className: Object(d.a)(ae.a.bannerCloseIcon, {
							[ae.a.dark]: o
						})
					}))
				},
				de = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/Loader.tsx"),
				ce = s("./src/reddit/actions/post.ts"),
				le = s("./src/reddit/actions/removalReasons/index.ts"),
				me = s("./src/reddit/actions/toaster.ts"),
				ue = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				pe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				be = s("./src/reddit/models/RemovalReason/index.ts"),
				he = s("./src/reddit/models/Toast/index.ts"),
				ve = s("./src/reddit/selectors/activeModalId.ts"),
				ge = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"),
				fe = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				Se = s("./src/reddit/controls/InternalLink/index.tsx"),
				Oe = s("./src/reddit/components/PublicAccessNetwork/Modals/EndBroadcast/EndBroadcastStyles.m.less"),
				we = s.n(Oe);
			const {
				fbt: _e
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ce = Object(r.b)(ge.selector, ge.dispatcher), ye = G.a.wrapped(q.g, "EndBroadcastModalFooter", we.a), Ee = G.a.wrapped(q.t, "EndBroadcastMessageInput", we.a);
			class xe extends ge.AddRemovalReasonModal {
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.isLoading || e.removalReasons.length > 0;
					return n.a.createElement(q.e, {
						onClick: this.closeDropdown
					}, s && n.a.createElement(q.i, null, n.a.createElement(Q.a, null, n.a.createElement(q.q, null, _e._("Remove broadcast", null, {
						hk: "1JfCvD"
					})), n.a.createElement(W.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, n.a.createElement(q.b, null)))), n.a.createElement(q.l, null, s ? n.a.createElement(fe.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : n.a.createElement(ge.EmptyState, null, _e._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), n.a.createElement(Se.default, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, n.a.createElement(K.r, {
						onClick: e.toggleRemovalReasonModal,
						"data-redditstyle": !0
					}, _e._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && n.a.createElement(n.a.Fragment, null, n.a.createElement("div", {
						className: we.a.MessageHeader
					}, _e._("Message to the broadcaster", null, {
						hk: "bGz26"
					})), n.a.createElement(ge.FormOptionsContainer, null, n.a.createElement(Ee, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), n.a.createElement(ge.CharacterCountdown, {
						maxChars: be.a,
						text: t.message.trim()
					})))), n.a.createElement(ye, null, n.a.createElement(ge.ButtonRow, null, n.a.createElement(q.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, _e._("Cancel", null, {
						hk: "2TSLl5"
					})), n.a.createElement(q.u, {
						onClick: () => {
							t.selectedReason && this.props.submitRemoval(t.selectedReason, t.message)
						},
						disabled: !this.canSave()
					}, _e._("Remove", null, {
						hk: "3tYl0U"
					})))))
				}
			}
			var ke = Object(H.a)(Ce(Object(pe.c)(xe)));
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = Object(i.c)({
				isConfirmationModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(ve.a)(e),
				isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(ve.a)(e)
			}), Re = Object(r.b)(Ie, (e, t) => {
				let {
					subredditId: s,
					postId: o
				} = t;
				return {
					submitRemovalReason: async (t, s, o) => {
						const n = await e(Object(le.submitRemovalReason)([t], s, o, be.f.Private, ""));
						e(n ? Object(me.f)({
							kind: he.b.SuccessEndBroadcast,
							text: je._("Broadcast ended", null, {
								hk: "313j6x"
							})
						}) : Object(me.f)({
							text: je._("Toast:", null, {
								hk: "2dCWf"
							}),
							duration: 1e4,
							kind: he.b.Error
						}))
					},
					fetchRemovalReasons: () => e(Object(le.removalReasonsRequested)(s)),
					errorToast: t => e(Object(me.f)({
						text: t,
						duration: 1e4,
						kind: he.b.Error
					})),
					toggleRemovalReasonModal: () => e(Object(k.i)("rpan-add-removal-reason-id")),
					toggleConfirmationModal: () => e(Object(k.i)("rpan-end-broadcast-confirmation-id")),
					onRemovePost: () => e(Object(ce.U)(o, !1))
				}
			});
			class Pe extends n.a.Component {
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
					return n.a.createElement(ue.a, {
						headerText: je._("Are you sure you want to remove this broadcast?", null, {
							hk: "1Wcei3"
						}),
						modalText: je._("This can't be undone.", null, {
							hk: "2HfakZ"
						}),
						actionText: je._("Yes, remove", null, {
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
					return n.a.createElement(ke, {
						submitRemoval: this.onSubmitRemovalReasons,
						toggleRemovalReasonModal: this.props.toggleRemovalReasonModal,
						toggleConfirmationModal: this.props.toggleConfirmationModal,
						itemIds: [this.props.postId],
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleRemovalReasonModal
					})
				}
				render() {
					return this.props.isRemovalReasonModalOpen ? this.renderRemovalReasonModal() : this.props.isConfirmationModalOpen ? this.renderConfirmationModal() : n.a.createElement("div", null)
				}
			}
			var Le, Te = Object(H.a)(Re(Object(pe.c)(Pe))),
				Ne = s("./src/reddit/components/ReportFlow/index.tsx"),
				Me = s("./src/reddit/components/ReportFlow/new.tsx"),
				Ae = s("./src/reddit/constants/history.ts"),
				De = s("./src/reddit/constants/keycodes.ts"),
				Fe = s("./src/reddit/constants/parameters.ts"),
				Be = s("./src/reddit/helpers/dom/index.ts"),
				Ve = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				Ue = s("./src/reddit/helpers/trackers/rpan.ts"),
				He = s("./src/reddit/helpers/trackers/screenview.ts"),
				Ge = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				qe = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				Ke = s("./src/reddit/selectors/media.ts"),
				We = s("./src/reddit/selectors/platform.ts"),
				Je = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				Qe = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				ze = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts"),
				Xe = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e[e.CRITICAL = 0] = "CRITICAL", e[e.LOW = 1] = "LOW", e[e.NORMAL = 2] = "NORMAL", e[e.EXTENDED = 3] = "EXTENDED"
			}(Le || (Le = {}));
			const Ye = 60,
				Ze = 30,
				$e = 3 * Ye,
				et = 5 * Ye,
				tt = 5,
				st = 5 * Ye,
				ot = 10,
				nt = 5;
			var rt = s("./node_modules/uuid/dist/esm-browser/v4.js"),
				at = s("./src/lib/makeCommentsPageKey/index.ts"),
				it = s("./src/reddit/actions/gold/modals.ts"),
				dt = s("./src/reddit/actions/moderatingSubreddits.ts"),
				ct = s("./src/reddit/endpoints/publicAccessNetwork/index.ts");
			const lt = e => async (t, s, o) => {
				let {
					apiContext: n
				} = o;
				const r = await Object(ct.j)(n(), e, !0);
				r && r.ok ? t(Object(me.f)({
					kind: he.b.SuccessLockComment,
					text: h.fbt._("Comments locked", null, {
						hk: "3WAk9Y"
					}),
					buttonText: h.fbt._("UNDO", null, {
						hk: "3Kk8Xw"
					}),
					buttonAction: mt(e)
				})) : t(Object(me.f)(Object(me.e)(h.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), he.b.Error)))
			}, mt = e => async (t, s, o) => {
				let {
					apiContext: n
				} = o;
				const r = await Object(ct.j)(n(), e, !1);
				r && r.ok ? t(Object(me.f)({
					kind: he.b.SuccessUnlockComment,
					text: h.fbt._("Comments unlocked", null, {
						hk: "rEYa1"
					}),
					buttonText: h.fbt._("UNDO", null, {
						hk: "OXk5v"
					}),
					buttonAction: lt(e)
				})) : t(Object(me.f)(Object(me.e)(h.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), he.b.Error)))
			};
			var ut = s("./src/reddit/actions/subscription/index.ts"),
				pt = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				bt = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				ht = s("./src/reddit/constants/posts.ts"),
				vt = s("./src/reddit/helpers/correlationIdTracker.ts"),
				gt = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				ft = s("./src/reddit/routes/postCreation/constants.ts"),
				St = s("./src/reddit/selectors/moderatorPermissions.ts"),
				Ot = s("./src/reddit/selectors/subreddit.ts"),
				wt = s("./src/reddit/selectors/comments.ts"),
				_t = s("./src/reddit/selectors/commentSelector.ts"),
				Ct = s("./src/reddit/selectors/communityAwards.ts"),
				yt = s("./src/reddit/models/Gold/Award.ts");
			var Et = e => e < 500 || !e ? yt.e.Silver : e < 1800 ? yt.e.Gold : yt.e.Platinum,
				xt = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				kt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less"),
				jt = s.n(kt);
			const {
				fbt: It
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Rt(e) {
				const {
					awardName: t,
					giverName: s,
					giverId: o,
					tier: r,
					className: a
				} = e, i = r === yt.e.Silver ? jt.a.silverTierAttribution : r === yt.e.Gold ? jt.a.goldTierAttribution : jt.a.platinumTierAttribution;
				return n.a.createElement("div", {
					className: Object(d.a)(a, jt.a.tierAttribution, i),
					role: "presentation"
				}, r !== yt.e.Silver && n.a.createElement(xt.a, {
					className: jt.a.giverIcon,
					userId: o,
					width: 16,
					height: 16
				}), n.a.createElement("span", null, r !== yt.e.Silver && It._("{giverName} gave {space}", [It._param("giverName", s), It._param("space", " ")], {
					hk: "SzDdi"
				}), n.a.createElement("strong", {
					className: jt.a.awardName
				}, t)))
			}
			var Pt = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Lt = s("./src/reddit/icons/svgs/Star/index.tsx"),
				Tt = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				Nt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less"),
				Mt = s.n(Nt);

			function At(e) {
				const {
					iconUrl: t,
					tier: s,
					className: o
				} = e, r = s === yt.e.Silver ? Mt.a.silverTierAwardIcon : s === yt.e.Gold ? Mt.a.goldTierAwardIcon : Mt.a.platinumTierAwardIcon, a = s !== yt.e.Silver, i = s === yt.e.Platinum;
				return n.a.createElement("div", {
					className: Object(d.a)(o, Mt.a.tierAwardIcon),
					role: "presentation"
				}, n.a.createElement("div", {
					className: Mt.a.awardIconContainer
				}, a && n.a.createElement(n.a.Fragment, null, n.a.createElement(Lt.a, {
					className: Object(d.a)(Mt.a.backgroundAnimation, Mt.a.backgroundStar)
				}), n.a.createElement(Tt.a, {
					className: Object(d.a)(Mt.a.backgroundAnimation, Mt.a.backgroundStar, Mt.a.backgroundStar2)
				})), n.a.createElement("img", {
					src: t,
					className: r
				}), i && n.a.createElement(n.a.Fragment, null, n.a.createElement(Pt.a, {
					className: Object(d.a)(Mt.a.backgroundAnimation, Mt.a.backgroundSparkle, Mt.a.sparkleBottomLeft)
				}), n.a.createElement(Pt.a, {
					className: Object(d.a)(Mt.a.backgroundAnimation, Mt.a.backgroundSparkle, Mt.a.sparkleTopRight)
				}), n.a.createElement(Pt.a, {
					className: Object(d.a)(Mt.a.backgroundAnimation, Mt.a.backgroundSparkle, Mt.a.sparkleBottomRight)
				}))))
			}
			var Dt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less"),
				Ft = s.n(Dt);

			function Bt(e) {
				const {
					award: t,
					className: s,
					giverId: o,
					giverName: r
				} = e, a = Et(t.coinPrice), i = t.icon128 ? t.icon128.url : t.icon.url;
				return n.a.createElement("div", {
					className: Object(d.a)(s, Ft.a.container),
					role: "presentation"
				}, n.a.createElement(At, {
					iconUrl: i,
					tier: a,
					className: Ft.a.awardIconAnimation
				}), n.a.createElement(Rt, {
					awardName: t.name,
					className: Ft.a.attributionAnimation,
					giverId: o,
					giverName: r,
					tier: a
				}))
			}
			var Vt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less"),
				Ut = s.n(Vt);
			class Ht extends o.Component {
				render() {
					const {
						award: e,
						className: t,
						giverName: s,
						giverId: o
					} = this.props;
					return e && o && s ? n.a.createElement("div", {
						className: Object(d.a)(t, Ut.a.awardOverlay),
						role: "presentation"
					}, n.a.createElement(Bt, {
						award: e,
						giverId: o,
						giverName: s
					})) : null
				}
			}
			var Gt = Object(r.b)(() => Object(i.a)(e => e, _t.b, (e, t) => {
					if (!t) return {};
					const {
						associatedAwardId: s,
						author: o,
						authorId: n
					} = t;
					return {
						award: s ? Object(Ct.a)(e, s) : void 0,
						giverId: n,
						giverName: o
					}
				}))(Ht),
				qt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less"),
				Kt = s.n(qt);
			const Wt = Object(r.b)(() => Object(i.c)({
					awardedCommentLinks: (e, t) => {
						let {
							commentsPageKey: s
						} = t;
						return Object(wt.g)(e, {
							commentsPageKey: s
						}).filter(t => {
							const s = Object(_t.b)(e, {
								commentId: t.id
							});
							return !!s && !!s.associatedAwardId
						})
					},
					isFullyLoaded: wt.u
				})),
				Jt = e => ({
					prevAwardedCommentLinks: e.isFullyLoaded ? [...e.awardedCommentLinks] : void 0,
					prevAwardedCommentLinksTopIndex: e.isFullyLoaded ? e.awardedCommentLinks.length : 0,
					prevCommentsPageKey: e.commentsPageKey
				});
			class Qt extends o.Component {
				constructor(e) {
					super(e), this.state = Jt(e)
				}
				shouldComponentUpdate(e) {
					const {
						awardedCommentLinks: t,
						commentsPageKey: s
					} = this.props;
					return e.commentsPageKey !== s || e.awardedCommentLinks.length !== t.length
				}
				static getDerivedStateFromProps(e, t) {
					if (e.commentsPageKey !== t.prevCommentsPageKey) return Jt(e);
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
						prevAwardedCommentLinksTopIndex: o
					} = this.state;
					if (!s) return null;
					const r = e.slice(o);
					return r.length ? n.a.createElement("div", {
						className: Object(d.a)(t, Kt.a.awardOverlaySpectacle),
						role: "presentation"
					}, r.map(e => n.a.createElement(Gt, {
						className: Kt.a.awardOverlay,
						commentId: e.id,
						key: e.id
					}))) : null
				}
			}
			var zt = Wt(Qt);
			const Xt = (e, t) => e > t ? Le.EXTENDED : e < $e ? Le.CRITICAL : e < et ? Le.LOW : Le.NORMAL,
				Yt = e => e / Ye,
				Zt = e => $t(e) % st == 0,
				$t = e => Math.round(e / tt) * tt;
			var es = s("./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less"),
				ts = s.n(es);
			const ss = (() => {
					const e = [];
					for (let t = 1; t < 11; t++) e.push(`Delay${t}`);
					return e
				})(),
				os = (() => {
					const e = [];
					for (let t = 0; t < 21; t++) e.push(`X${5*t}`);
					return e
				})(),
				ns = ["15Deg", "45Deg", "75Deg"],
				rs = e => e[Math.floor(Math.random() * e.length)],
				as = () => {
					const e = [rs(os), rs(ns), rs(ss)].map(e => ts.a[`particle${e}`]).join(" ");
					return `${ts.a.particle} ${e} ${Math.round(Math.random())?ts.a.particleReverse:""}`
				},
				is = 40,
				ds = 20;
			class cs extends n.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < is; t++) e.push(this.createParticle(t, "particleSm"));
					for (let t = 0; t < ds; t++) e.push(this.createParticle(t, "particleLg"));
					return n.a.createElement("div", {
						className: ts.a.particleWrapper
					}, e)
				}
				createParticle(e, t) {
					return n.a.createElement("div", {
						key: `${t}-${e}`,
						className: `${as()} ${ts.a[t]}`
					})
				}
			}
			var ls = cs;
			const ms = () => ({
				estimatedTimeRemaining: null,
				previouslyVisible: !1,
				visible: !1,
				streamId: null,
				timerPausedAt: null,
				timerDiff: 0,
				timer: null,
				pillLabel: null
			});
			class us extends o.Component {
				constructor() {
					super(...arguments), this.state = ms(), this.timerId = 0
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
					return t || s > 0 || Zt(e) || e < et
				}
				static getPillLabel(e, t) {
					const {
						currentStream: s,
						overlayOpen: o
					} = e, {
						timerDiff: n,
						timer: r
					} = t;
					if (!s || !s.meter || null === r) return null;
					if (n > 0) {
						if (n < Ye) {
							const e = $t(n);
							return h.fbt._({
								"*": "+{seconds time added} seconds airtime given",
								_1: "+1 second airtime given"
							}, [h.fbt._plural(e, "seconds time added")], {
								hk: "4zE2Hn"
							})
						} {
							const e = Math.round(Yt(n));
							return h.fbt._({
								"*": "+{minutes time added} minutes airtime given",
								_1: "+1 minute airtime given"
							}, [h.fbt._plural(e, "minutes time added")], {
								hk: "17ep0a"
							})
						}
					}
					if (r > s.meter.full_meter_duration) {
						const e = Math.round(Yt(s.meter.full_meter_duration)).toLocaleString();
						return h.fbt._("{number of minutes}+ minutes airtime left", [h.fbt._param("number of minutes", e)], {
							hk: "2Tjt0F"
						})
					}
					if (Zt(r) && !o && r > et) {
						const e = Math.round(Yt(r)).toLocaleString();
						return h.fbt._("{number of minutes} minutes airtime left", [h.fbt._param("number of minutes", e)], {
							hk: "3DZxvE"
						})
					}
					const a = Math.round(r),
						i = Math.floor(Yt(a)),
						d = a % Ye,
						c = `${i}:${d<10?"0":""}${d}`;
					return h.fbt._("{mm:ss timestamp of remaining time} airtime left", [h.fbt._param("mm:ss timestamp of remaining time", c)], {
						hk: "1J5pOH"
					})
				}
				static getDerivedStateFromProps(e, t) {
					if (!e.currentStream || !e.currentStream.meter) return ms();
					const s = e.currentStream.post.id,
						o = e.currentStream.estimated_remaining_time;
					if (t.streamId !== s) {
						const t = {
							estimatedTimeRemaining: o,
							previouslyVisible: !1,
							visible: !0,
							streamId: s,
							timerPausedAt: null,
							timerDiff: 0,
							timer: o,
							pillLabel: null
						};
						return t.pillLabel = us.getPillLabel(e, t), t
					}
					const n = {
						timer: t.timer,
						timerDiff: t.timerDiff,
						timerPausedAt: t.timerPausedAt
					};
					if (o > t.estimatedTimeRemaining) {
						const e = t.estimatedTimeRemaining - t.timer,
							s = o - t.estimatedTimeRemaining + e;
						s > tt && (n.timer = o, n.timerDiff = s, n.timerPausedAt = o)
					}
					o !== t.estimatedTimeRemaining && Math.abs(n.timer - o) > ot && (n.timer = o, n.timerDiff = o - t.timer, n.timerPausedAt = null), null !== n.timerPausedAt && n.timerPausedAt - n.timer > nt && (n.timerDiff = 0, n.timerPausedAt = null);
					const r = us.getPillLabel(e, n),
						a = us.isPillVisible(n.timer, e.overlayOpen, n.timerDiff);
					return {
						estimatedTimeRemaining: o,
						...n,
						streamId: s,
						pillLabel: r,
						previouslyVisible: t.visible,
						visible: a
					}
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
						previouslyVisible: o,
						timer: r,
						pillLabel: a
					} = this.state;
					if (!(s && e && e.meter && r)) return null;
					const i = Xt(r, e.meter.full_meter_duration),
						c = !o,
						l = r < et || t,
						m = this.state.timerDiff > 0;
					return n.a.createElement("div", {
						className: ts.a.meterOverlay
					}, n.a.createElement("div", {
						className: ts.a.meterPillWrapper
					}, m && n.a.createElement(ls, null), n.a.createElement("div", {
						className: Object(d.a)(ts.a.meterPillContainer, {
							[ts.a.animateMeterInAndOut]: c && !l,
							[ts.a.animateMeterInOnly]: c && l,
							[ts.a.fillMeterCritical]: i === Le.CRITICAL,
							[ts.a.fillMeterLow]: i === Le.LOW,
							[ts.a.fillMeterNormal]: i === Le.NORMAL || i === Le.EXTENDED,
							[ts.a.fillMeterFed]: m
						}),
						onClick: () => this.props.openGildModal()
					}, n.a.createElement("div", {
						className: ts.a.meterLabel
					}, a))))
				}
			}
			var ps = us,
				bs = s("./src/reddit/components/OverflowMenu/index.tsx"),
				hs = s("./src/reddit/controls/Dropdown/Row.tsx"),
				vs = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				gs = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				fs = s.n(gs);
			const {
				fbt: Ss
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Os = e => {
					let {
						label: t,
						onSelect: s,
						onToggle: o,
						subreddits: r
					} = e;
					return n.a.createElement(bs.b, {
						className: fs.a.overflowMenu,
						dropdownClassName: fs.a.dropdown,
						defaultButtonOutline: !0,
						disabled: r.length < 1,
						dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
						icon: n.a.createElement("div", {
							className: fs.a.overflowMenuIcon
						}, t, n.a.createElement(vs.a, {
							className: fs.a.dropdownTriangle
						})),
						onClick: o
					}, n.a.createElement("div", {
						className: fs.a.dropdownLabel
					}, Ss._("Pick a Community", null, {
						hk: "8MoVj"
					})), r.map(e => n.a.createElement(hs.b, {
						className: fs.a.dropdownRow,
						displayText: e.prefixedName,
						iconWrapperClassName: fs.a.overflowItemIconWrapper,
						key: `rpan-recommended-viewer-subreddits-dropdown-${e.prefixedName}`,
						onClick: () => s(e)
					})))
				},
				ws = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				_s = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				Cs = s.n(_s);
			class ys extends o.Component {
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
						isMuted: o,
						isPaused: r,
						isVisible: a,
						onPlayPauseToggle: i,
						onVideoPositionUpdate: c,
						seekBarRef: l,
						settingChange: m,
						setVolume: u,
						hideLiveLabel: p,
						videoCurrentTime: b,
						videoTotalTime: h,
						volume: v,
						volumeRef: g
					} = this.props;
					return n.a.createElement(ws.b, {
						className: Object(d.a)(e, Cs.a.scrubberBar, {
							[Cs.a.visible]: a
						}),
						currentTime: b || 0,
						hasAudio: !0,
						hideControlBar: !!t,
						hideFullScreenButton: !0,
						hideGradient: !0,
						isFullScreen: !1,
						isListing: !1,
						isLive: s,
						isMuted: o,
						isPaused: r,
						playPauseVideo: i,
						ref: this.setControlBarRef,
						seekBarRef: l,
						settingChange: m,
						setVideoPosition: c,
						setVolume: u,
						hideLiveLabel: p,
						showSettingsIcon: !1,
						showVolumeIcon: !0,
						toggleMute: this.onToggleMute,
						totalTime: h || 0,
						volume: v,
						volumeRef: g
					})
				}
			}
			var Es = ys,
				xs = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				ks = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				js = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				Is = s.n(js),
				Rs = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				Ps = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				Ls = s.n(Ps),
				Ts = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				Ns = s.n(Ts);
			const {
				fbt: Ms
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var As;
			! function(e) {
				e.EndScreen = "END_SCREEN", e.Panel = "PANEL"
			}(As || (As = {}));
			const Ds = (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return s ? Object(Qe.l)(e, s) : void 0
				},
				Fs = Object(i.c)({
					currentStream: Ds,
					inViewerFeedTheMeter: (e, t) => Object(Ge.f)(e, t, Ds),
					isApiError: (e, t) => {
						let {
							currentStreamId: s
						} = t;
						return Object(Je.c)(e, s)
					},
					isBatchApiError: Je.e,
					isBatchPending: Je.f,
					isCommentsLocked: (e, t) => {
						let {
							currentStreamId: s
						} = t;
						return !!s && Object(Qe.g)(e, s)
					},
					isConfigError: Je.g,
					isIntroInProgress: ze.b,
					isMenuOpened: e => e.tooltip.tooltipId === xs.c || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltip.tooltipId || e.tooltip.tooltipId === ks.j,
					lastBatchApiRequestTs: Je.i,
					recommendedViewerSubredditOptions: Je.j,
					isModWithPostPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						const o = s && s.replace(/^r\//, "");
						return !!o && Object(St.h)(e, {
							subredditId: Object(Ot.H)(e, o)
						})
					},
					isUserSubscriber: (e, t) => {
						let {
							subreddit: s
						} = t;
						const o = s && s.replace(/^r\//, "");
						return !!o && Object(Ot.jb)(e, {
							identifier: {
								name: o,
								type: ht.a.SUBREDDIT
							}
						}, !0)
					},
					videoShareModalOpen: (e, t) => {
						let {
							currentStreamId: s
						} = t;
						return !!s && Object(ve.a)(e) === Object(bt.a)(s)
					},
					subredditByName: (e, t) => {
						let {
							subreddit: s
						} = t;
						const o = s && s.replace(/^r\//, "");
						return o ? Object(Ot.B)(e, {
							subredditName: o
						}) : null
					}
				});
			class Bs extends o.Component {
				constructor(e) {
					super(e), this.onSubscribeToSubreddit = () => {
						this.props.sendEvent(Object(Ue.k)(this.props.currentStream)), this.props.onSubscribeSubreddit()
					}, this.onProfileSubscriptionChange = e => {
						e ? this.props.sendEvent(Object(Ue.c)(this.props.currentStream)) : this.props.sendEvent(Object(Ue.n)(this.props.currentStream))
					}, this.onCrosspost = e => {
						this.props.currentStreamId && window.open(`${ft.b}?source_id=${this.props.currentStreamId}`, "_blank"), this.props.onCrosspost(e)
					}, this.onShareLink = e => {
						e.source && (this.source = e.source), this.props.onToggleVideoShareModal(), this.props.onShareLink(e)
					}, this.onCloseShareModal = e => {
						e && (this.props.onCopyLink({
							referralId: this.referralId,
							source: this.source
						}), this.props.copyLink(e)), this.props.onToggleVideoShareModal()
					}, this.onMouseEnter = () => {
						this.hoverTimeout = window.setTimeout(() => this.setState({
							isHovered: !0
						}), R.o)
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
							settingChange: pt.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: pt.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === pt.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === pt.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === pt.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === pt.a.Volume && s && s.handleMouseUp(e), this.setState({
							settingChange: void 0
						})
					}, this.onMouseHoverScrubber = e => {
						const {
							target: t,
							currentTarget: s
						} = e;
						if (!(t instanceof Element && s instanceof Element)) return;
						const o = this.isHoveringVolumeControl(t, s);
						o !== this.state.isHoveringVolumeControl && this.setState({
							isHoveringVolumeControl: o
						})
					}, this.onMouseLeaveScrubber = () => {
						this.setState({
							isHoveringVolumeControl: !1
						})
					}, this.handleClickLiveBroadcastStatus = () => {
						this.props.onVideoPositionUpdate(this.props.videoTotalTime)
					}, this.isVisible = () => this.state.isHovered || this.props.isVisible || this.props.isMenuOpened, this.onToggleLock = () => {
						this.props.isCommentsLocked ? this.props.onUnlockComments() : this.props.onLockComments()
					}, this.onCopyLink = () => {
						const {
							copyLink: e,
							currentStream: t,
							onShareLink: s
						} = this.props;
						if (!t) return;
						const o = Object(Ve.a)(t.post.id),
							n = Object(rt.a)(),
							r = {
								[Fe.q]: n,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							};
						e(Object(O.a)(o, r)), s({
							referralId: n
						})
					}, this.referralId = Object(rt.a)(), this.source = As.Panel, this.state = {
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
					const {
						currentStream: e,
						inViewerFeedTheMeter: t,
						isIntroInProgress: s,
						isCommentsLocked: o,
						isLive: r,
						isModWithPostPermissions: a,
						isUnavailable: i,
						onHide: c,
						onReport: l,
						onSelectSubreddit: m,
						onToggleMenu: u,
						recommendedViewerSubredditOptions: p,
						related: b,
						subreddit: h,
						isUserSubscriber: v,
						onEndBroadcast: g,
						subredditByName: f,
						onShareToChat: S
					} = this.props;
					if (s || !e || i) return null;
					const w = e && e.post.id,
						{
							authorInfo: _
						} = e.post;
					return n.a.createElement("div", {
						className: Object(d.a)(Ns.a.overlay, {
							[Ns.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, e && !s && !i && !!w && n.a.createElement(zt, {
						className: Ls.a.awardOverlaySpectacle,
						commentsPageKey: Object(at.a)(w)
					}), t && n.a.createElement(ps, {
						currentStream: e,
						overlayOpen: this.isVisible(),
						openGildModal: () => this.props.handleGiveAward()
					}), this.renderPrompt(), n.a.createElement("div", {
						className: Ns.a.overlayTop
					}, n.a.createElement("div", {
						className: Ns.a.overlayTopLeft
					}, n.a.createElement("div", {
						className: Ns.a.meta
					}, n.a.createElement(ks.c, null, r ? n.a.createElement(ks.h, {
						onClick: this.handleClickLiveBroadcastStatus
					}) : n.a.createElement(ks.p, null)), n.a.createElement(ks.n, {
						text: e.post.title
					}), n.a.createElement("div", {
						className: Ns.a.subredditInfo
					}, n.a.createElement(ks.l, {
						onSelect: m,
						related: b,
						subreddit: h,
						subreddits: p
					}), n.a.createElement(ks.f, {
						onSubscribe: this.onSubscribeToSubreddit,
						isSubscribed: v
					})), n.a.createElement(ks.r, {
						broadcast: e,
						live: r
					}))), n.a.createElement("div", {
						className: Ns.a.overlayTopRight
					}, Object(ks.s)(_) ? n.a.createElement(ks.m, {
						profile: _,
						currentStream: e,
						onSubscriptionChange: this.onProfileSubscriptionChange
					}) : null, n.a.createElement(ks.i, {
						onClick: u,
						onHideClick: c,
						onReportClick: l,
						onToggleLockClick: this.onToggleLock,
						isCommentsLocked: o,
						hasModeratorPermissions: a,
						onEndBroadcastClick: g,
						onRpanStudioClick: this.props.onRpanStudioClick,
						subreddit: f
					}), n.a.createElement(ks.k, {
						onClickShare: this.props.onShare,
						onClickCrosspost: () => {
							this.onCrosspost({
								source: As.Panel
							})
						},
						onClickVideoShare: () => {
							this.onShareLink({
								source: As.Panel
							})
						},
						onClickShareToChat: () => {
							const e = Object(O.a)(Object(Ve.a)(w), {
								[Fe.q]: this.referralId,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							});
							S(e), this.props.sendEvent(Object(Rs.a)())
						}
					}), n.a.createElement("div", {
						className: Object(d.a)({
							[Ns.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, n.a.createElement(ks.q, {
						broadcast: e,
						onUpvote: this.props.onUpvote,
						onDownvote: this.props.onDownvote
					})))), n.a.createElement("div", {
						className: Ns.a.overlayBottom,
						onMouseEnter: this.onMouseHoverScrubber,
						onMouseLeave: this.onMouseLeaveScrubber,
						onMouseMove: this.onMouseHoverScrubber
					}, this.renderScrubber()), this.props.videoShareModalOpen && n.a.createElement(bt.b, {
						className: Ls.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !0,
						url: Object(O.a)(Object(Ve.a)(w), {
							[Fe.q]: this.referralId,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				}
				renderScrubber() {
					const {
						isLive: e,
						isMuted: t,
						isPaused: s,
						onPlayPauseToggle: o,
						onVideoPositionUpdate: r,
						setVolume: a,
						toggleMute: i,
						videoCurrentTime: d,
						videoTotalTime: c,
						volume: l
					} = this.props, m = Ns.a.controls;
					return n.a.createElement("div", {
						className: m
					}, n.a.createElement(Es, {
						isLive: e,
						isMuted: t,
						isPaused: s,
						isVisible: !0,
						onPlayPauseToggle: o,
						onVideoPositionUpdate: r,
						seekBarRef: e => this.seekBar = e,
						settingChange: this.state.settingChange,
						setVolume: a,
						hideLiveLabel: !0,
						toggleMute: i,
						videoCurrentTime: d,
						videoTotalTime: c,
						volume: l,
						volumeRef: e => this.volumeControl = e
					}))
				}
				renderPrompt() {
					const {
						currentStream: e,
						currentStreamId: t,
						handleGiveAward: s,
						isApiError: o,
						isBatchApiError: r,
						isBatchPending: a,
						isConfigError: i,
						isIntroInProgress: d,
						isLoading: c,
						isMuted: l,
						isUnavailable: m,
						inViewerFeedTheMeter: u,
						lastBatchApiRequestTs: p,
						onReplayVideo: b,
						showErrorPrompt: h,
						showStreamEndedPrompt: v,
						toggleMute: g
					} = this.props;
					if (h || d && i || t && o || !t && r) return n.a.createElement(ks.d, null);
					if (d) return n.a.createElement("div", {
						className: Ls.a.intro
					}, n.a.createElement(xs.b, {
						isMuted: l,
						onToggle: g
					}));
					if (m || !t && !r && !a && p) return null;
					if (c) return n.a.createElement(ks.o, null);
					if (e && e.stream.state === gt.a.DISCONNECTED) return n.a.createElement(ks.b, null);
					if (v) return n.a.createElement(ks.a, {
						onClickReplay: b,
						onClickShare: () => {
							this.onShareLink({
								source: As.EndScreen
							}), this.source = As.EndScreen
						},
						onClickCrosspost: () => {
							this.onCrosspost({
								source: As.EndScreen
							})
						}
					});
					const f = e && e.meter && e.estimated_remaining_time < Ze;
					return u && f ? n.a.createElement(ks.e, {
						onClickAward: s
					}) : null
				}
				renderRecommendedViewerSubreddit() {
					const {
						onSelectSubreddit: e,
						recommendedViewerSubredditOptions: t,
						related: s,
						subreddit: o
					} = this.props;
					let r = "",
						a = "";
					"home" === s ? (r = "All", a = "All") : "r/popular" === s ? (r = "Popular", a = "r/popular") : o ? (r = o.replace(/^r\//, ""), a = o) : (r = "All", a = "All");
					const i = t.filter(e => e.prefixedName !== a);
					return n.a.createElement("div", {
						className: Ls.a.menuContainer
					}, n.a.createElement(Os, {
						label: r,
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
						className: Ls.a.titleContainer
					}, n.a.createElement("h1", {
						className: Ls.a.videoTitle
					}, e.post.title), !t && n.a.createElement("div", {
						className: Ls.a.RecordedLabel
					}, Ms._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(Is.a.ControlVolume)) return !0;
						e = e.parentElement
					}
					return !1
				}
				getContent() {
					const {
						currentStream: e,
						currentStreamId: t,
						isApiError: s,
						isBatchApiError: o,
						isBatchPending: r,
						isConfigError: a,
						isIntroInProgress: i,
						isLoading: d,
						isMuted: c,
						isUnavailable: l,
						lastBatchApiRequestTs: m,
						onReplayVideo: u,
						showErrorPrompt: p,
						showStreamEndedPrompt: b,
						toggleMute: h
					} = this.props;
					return p || i && a || t && s || !t && o ? n.a.createElement("div", {
						className: Ls.a.prompt
					}, Ms._("Connection issues", null, {
						hk: "24LpRV"
					})) : i ? n.a.createElement("div", {
						className: Ls.a.intro
					}, n.a.createElement(xs.b, {
						isMuted: c,
						onToggle: h
					})) : l || !t && !o && !r && m ? null : d ? n.a.createElement("div", {
						className: Ls.a.prompt
					}, Ms._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === gt.a.DISCONNECTED ? n.a.createElement("div", {
						className: Ls.a.prompt
					}, Ms._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : b ? n.a.createElement("div", {
						className: Ls.a.prompt
					}, n.a.createElement("div", {
						className: Ls.a.promptButtonSet
					}, n.a.createElement(xs.e, {
						onClick: u
					}), n.a.createElement(xs.f, {
						onClick: this.props.onToggleVideoShareModal
					}))) : null
				}
			}
			var Vs = Object(r.b)(Fs, (e, t) => ({
					copyLink: t => e(Object(ce.D)(t)),
					onToggleVideoShareModal: () => {
						t.currentStreamId && e(Object(k.i)(Object(bt.a)(t.currentStreamId)))
					},
					onHide: () => {
						t.currentStreamId && (e(Object(ce.fb)(t.currentStreamId, !0, !0, !0)), e(N(t.currentStreamId)))
					},
					onLockComments: () => {
						t.currentStreamId && e(lt(t.currentStreamId))
					},
					onUnlockComments: () => {
						t.currentStreamId && e(mt(t.currentStreamId))
					},
					handleGiveAward: () => {
						if (t.currentStreamId) {
							const s = Object(vt.d)(vt.a.GildingFlow, !0);
							e(Object(it.d)({
								correlationId: s,
								thingId: t.currentStreamId
							}))
						}
					},
					onSubscribeSubreddit: () => {
						const s = t.subreddit && t.subreddit.split("/").pop();
						s && e(Object(ut.d)([{
							name: s,
							type: ht.a.SUBREDDIT
						}], !0))
					},
					getModeratedSubreddits: () => e(Object(dt.b)())
				}))(Bs),
				Us = s("./src/lib/constants/index.ts"),
				Hs = s("./src/lib/makeDraftKey/index.ts"),
				Gs = s("./src/reddit/actions/pages/comments.ts"),
				qs = s("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				Ks = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Ws = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Js = s("./src/reddit/selectors/posts.ts"),
				Qs = s("./src/reddit/icons/svgs/Send/index.tsx"),
				zs = s("./src/reddit/components/CommentsChat/MessageInput/MutedMessageInput.m.less"),
				Xs = s.n(zs),
				Ys = s("./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx");
			const {
				fbt: Zs
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var $s = e => {
					let {
						postId: t
					} = e;
					const s = Object(r.e)(e => Object(Js.G)(e, {
							postId: t
						})),
						o = Object(r.d)(),
						a = Object(pe.b)(),
						i = s.isGildable;
					return n.a.createElement("span", {
						className: Xs.a.InputLine
					}, n.a.createElement("span", {
						className: Xs.a.FormBackground
					}, n.a.createElement("span", {
						className: Xs.a.FormLine
					}, n.a.createElement("div", {
						className: Xs.a.Text
					}, Zs._("Chat is disabled", null, {
						hk: "gQrh3"
					}))), n.a.createElement(Qs.a, {
						className: Xs.a.SendIcon
					})), i && n.a.createElement(Ys.a, {
						showSubmitInsideTextArea: !0,
						isLivestreaming: !0,
						sendEvent: a,
						postId: t,
						handleGiveAward: e => {
							o(Object(it.d)({
								correlationId: e,
								thingId: t
							}))
						}
					}))
				},
				eo = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx");
			const {
				fbt: to
			} = s("./node_modules/fbt/lib/FbtPublic.js"), so = G.a.wrapped(q.g, "ModalFooter", X.a), oo = G.a.wrapped(q.i, "ModalHeader", X.a);
			var no = e => {
				let {
					toggleModal: t,
					bodyText: s,
					title: o
				} = e;
				return n.a.createElement(q.e, null, n.a.createElement(oo, null, n.a.createElement(Q.a, null, n.a.createElement("div", null, n.a.createElement("div", {
					className: X.a.Title
				}, o)), n.a.createElement(W.a, {
					onClick: t
				}, n.a.createElement(q.b, null)))), n.a.createElement("div", {
					className: X.a.ModalText
				}, s), n.a.createElement(so, {
					className: X.a.ModalFooter
				}, n.a.createElement(K.l, {
					onClick: t,
					className: X.a.Button,
					"data-redditstyle": !0
				}, to._("I Understand", null, {
					hk: "1f4y1d"
				}))))
			};
			const {
				fbt: ro
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ao = () => ro._("Because you’ve been flagged multiple times for violating Reddit’s {=Content Policy,} the system has removed your ability to participate in this chat. This can’t be undone (not even by a mod), but after 24 hours you’ll be able to chat again.", [ro._param("=Content Policy,", n.a.createElement("a", {
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, ro._("{=Content Policy},", [ro._param("=Content Policy", n.a.createElement("span", {
				className: X.a.Link
			}, ro._("Content Policy", null, {
				hk: "47cyc2"
			})))], {
				hk: "3BF41m"
			})))], {
				hk: "ITZAq"
			});
			var io = Object(H.a)(e => {
					let {
						toggleModal: t
					} = e;
					return n.a.createElement(no, {
						bodyText: ao(),
						title: ro._("Sit back and watch for a bit", null, {
							hk: "nd6D"
						}),
						toggleModal: t
					})
				}),
				co = s("./src/reddit/icons/svgs/Info/index.tsx");
			const {
				fbt: lo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), mo = Object(i.c)({
				isMuteModalOpen: e => "rpan-mute-chat-modal-id" === Object(ve.a)(e)
			});
			class uo extends n.a.Component {
				constructor() {
					super(...arguments), this.onClickInfo = () => {
						this.props.onToggleMuteModal()
					}
				}
				render() {
					return n.a.createElement(n.a.Fragment, null, n.a.createElement("span", {
						className: Xs.a.InputLine
					}, n.a.createElement("span", {
						className: Xs.a.FormBackground
					}, n.a.createElement("span", {
						className: Xs.a.FormLine
					}, n.a.createElement(co.a, {
						className: Xs.a.InfoIcon,
						onClick: this.onClickInfo
					}), n.a.createElement("div", {
						className: Xs.a.Text
					}, lo._("Chat is unavailable", null, {
						hk: "12EjN3"
					}))), n.a.createElement(Qs.a, {
						className: Xs.a.SendIcon
					}))), this.props.isMuteModalOpen && n.a.createElement(io, {
						toggleModal: this.props.onToggleMuteModal
					}))
				}
			}
			var po = Object(r.b)(mo, e => ({
				onToggleMuteModal: () => e(Object(k.i)("rpan-mute-chat-modal-id"))
			}))(uo);
			const {
				fbt: bo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ho = () => bo._("Your messages have been flagged for violating Reddit’s {=Content Policy.} Have fun chatting, but if you’re flagged multiple times, you may lose the ability to participate in RPAN chats.", [bo._param("=Content Policy.", n.a.createElement("a", {
				className: X.a.Link,
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, bo._("{=Content Policy}.", [bo._param("=Content Policy", n.a.createElement("span", {
				className: X.a.Link
			}, bo._("Content Policy", null, {
				hk: "36gq1Y"
			})))], {
				hk: "2SSN6t"
			})))], {
				hk: "4aZsnf"
			});
			var vo = Object(H.a)(e => {
					let {
						toggleModal: t
					} = e;
					return n.a.createElement(no, {
						bodyText: ho(),
						title: bo._("Be mindful of what you say", null, {
							hk: "3CDXHh"
						}),
						toggleModal: t
					})
				}),
				go = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less")),
				fo = s.n(go);
			const So = Object(r.b)(() => Object(i.c)({
					allAwards: e => e.awards.models,
					post: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(Js.G)(e, {
							postId: s
						})
					}
				})),
				Oo = ["Center", "Left", "Right"],
				wo = ["Low", "Mid", "High"],
				_o = () => Math.floor(800 * Math.random()),
				Co = e => e[Math.floor(Math.random() * e.length)],
				yo = e => {
					const t = Co(Oo),
						s = Co(wo),
						o = Et(e);
					return fo.a[`award_${o}Tier_${s}${t}`]
				};
			class Eo extends o.Component {
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
							let [s, o] = t;
							const {
								icon: n,
								coinPrice: r
							} = e[s];
							return {
								coinPrice: r,
								count: o,
								iconUrl: n.url,
								id: s
							}
						}).sort((e, t) => t.coinPrice - e.coinPrice),
						o = [];
					return s.forEach(e => {
						const {
							coinPrice: t,
							count: s,
							iconUrl: r
						} = e;
						for (let a = 0; a < s; a++) {
							const s = `${_o()}ms`,
								i = yo(t),
								c = n.a.createElement("img", {
									key: `${e.id}-${a}`,
									className: Object(d.a)(fo.a.award, i),
									src: r,
									style: {
										animationDelay: s
									}
								});
							o.push(c)
						}
					}), n.a.createElement("div", {
						className: fo.a.awardBubbler,
						role: "presentation"
					}, o)
				}
			}
			var xo = So(Eo),
				ko = s("./src/reddit/contexts/Post/index.tsx"),
				jo = s("./src/reddit/models/PostDraft/index.ts");
			const Io = Object(i.a)((e, t) => t, e => e.publicAccessNetwork.automuteLevels, (e, t) => {
				var s;
				return (null === (s = null == t ? void 0 : t[e]) || void 0 === s ? void 0 : s.level) || 0
			});
			var Ro = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				Po = s.n(Ro);
			const Lo = Object(i.c)({
				isDisabled: (e, t) => Object(Qe.f)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: Xe.Q,
				isPostDataLoaded: (e, t) => {
					let {
						postId: s
					} = t;
					return !!Object(Js.G)(e, {
						postId: s
					})
				},
				replyComment: (e, t) => {
					let {
						postId: s
					} = t;
					return Object(wt.s)(e, {
						commentsPageKey: Object(at.a)(s)
					})
				},
				automuteViolationLevel: (e, t) => {
					let {
						postId: s
					} = t;
					return Io(e, s)
				}
			});
			var To;
			! function(e) {
				e.Warning = "warning", e.Mute = "mute"
			}(To || (To = {}));
			class No extends o.Component {
				constructor(e) {
					super(e), this.onDismissModal = () => {
						this.setState({
							automuteModal: null
						})
					}, this.state = {
						automuteModal: null
					}, this.props.postId && this.props.isLoggedIn && this.props.fetchAutomuteStatus()
				}
				componentDidMount() {
					this.props.postId && this.props.loadComments()
				}
				componentDidUpdate(e) {
					this.props.postId !== e.postId && (this.props.loadComments(), this.props.isLoggedIn && this.props.fetchAutomuteStatus()), this.props.automuteViolationLevel > e.automuteViolationLevel && (1 === this.props.automuteViolationLevel ? this.setState({
						automuteModal: To.Warning
					}) : this.props.automuteViolationLevel > 1 && this.setState({
						automuteModal: To.Mute
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
						isPostDataLoaded: o,
						location: r,
						openLoginModal: a,
						openRegisterModal: i,
						sendEvent: c,
						subredditId: l,
						replyComment: m,
						onFocusMessageInput: u
					} = this.props, p = Object(at.a)(e), b = m ? Object(Hs.a)(jo.c.replyToComment, m.id) : Object(Hs.a)(jo.c.replyToPost, e);
					return o ? n.a.createElement("div", {
						"aria-label": h.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: Po.a.streamingChat,
						onClick: this.props.onChatClick
					}, n.a.createElement(ko.a, {
						postId: e
					}, n.a.createElement(Ws.a, {
						className: Po.a.chatScroller,
						emptyStateClassName: Po.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: l,
						commentsPageKey: p
					}), s && (this.shouldMuteChat ? n.a.createElement(po, null) : t ? n.a.createElement($s, {
						postId: e
					}) : n.a.createElement(eo.a, {
						key: "chatCommentsForm",
						postId: e,
						replyComment: m,
						draftKey: b,
						commentsPageKey: p,
						isEditing: !1,
						sendEvent: c,
						onFocusMessageInput: u,
						isLivestreaming: !0
					})), n.a.createElement(xo, {
						postId: e
					}), !s && n.a.createElement(Ks.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						location: r,
						openLoginModal: a,
						openRegisterModal: i,
						origin
					}), this.state.automuteModal === To.Warning && n.a.createElement(vo, {
						toggleModal: this.onDismissModal
					}), this.state.automuteModal === To.Mute && n.a.createElement(io, {
						toggleModal: this.onDismissModal
					}))) : n.a.createElement("div", {
						className: Object(d.a)(Po.a.streamingChat, Po.a.prompt)
					}, h.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var Mo = Object(r.b)(Lo, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						loadComments: () => e(Object(Gs.commentsPageDataRequested)(s, void 0, {
							sort: Us.w.CHAT
						}, Us.w.CHAT)),
						openLoginModal: () => e(Object(m.openLoginModal)()),
						openRegisterModal: () => e(Object(m.openRegisterModal)()),
						fetchAutomuteStatus: () => e(Object(qs.b)(s))
					}
				})(No),
				Ao = s("./src/reddit/icons/svgs/Pagination/back.tsx");
			var Do = e => n.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, n.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				Fo = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				Bo = s.n(Fo);
			const Vo = e => {
				let {
					isNext: t,
					onClick: s,
					stream: o
				} = e;
				return n.a.createElement("div", {
					className: Object(d.a)(Bo.a.switchContainer, t ? Bo.a.switchContainerNext : Bo.a.switchContainerPrevious)
				}, n.a.createElement("button", {
					className: Bo.a.switchButton,
					disabled: !o,
					onClick: s,
					"aria-label": t ? h.fbt._("Forward arrow", null, {
						hk: "3b7sZa"
					}) : h.fbt._("Back arrow", null, {
						hk: "1upGBK"
					}),
					value: t ? "forward" : "back"
				}, n.a.createElement("div", {
					className: Bo.a.streamThumbnail,
					style: o ? {
						backgroundImage: `url(${o.stream.thumbnail})`
					} : {}
				}), t ? n.a.createElement(Do, {
					className: Bo.a.arrowIcon
				}) : n.a.createElement(Ao.a, {
					className: Bo.a.arrowIcon
				})))
			};
			var Uo = e => n.a.createElement(n.a.Fragment, null, n.a.createElement(Vo, {
				isNext: !1,
				onClick: e.onPrevious,
				stream: e.previousStream
			}), n.a.createElement(Vo, {
				isNext: !0,
				onClick: e.onNext,
				stream: e.nextStream
			}));
			Object(P.a)(R.s);
			const Ho = Object(P.a)(R.A),
				Go = (e, t) => async (s, o) => {
					const n = o(),
						r = Date.now(),
						a = e.map(e => Object(Qe.l)(n, e)).filter(Boolean).map(e => ({
							imageUrl: `${e.stream.thumbnail}?${r}`,
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await qo(a, t)
				}, qo = (e, t) => Promise.all(e.map(e => Ko(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), Ko = e => new Promise((t, s) => {
					const o = new Image;
					o.onload = () => t(), o.onerror = () => s(), o.src = e
				}).then(() => !0, () => !1);
			var Wo, Jo = s("./src/reddit/components/PublicAccessNetwork/Theater/VisualEffectScreen/index.m.less"),
				Qo = s.n(Jo);
			! function(e) {
				e.Loading = "Loading", e.Preview = "Preview", e.Static = "Static"
			}(Wo || (Wo = {}));
			class zo extends o.Component {
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: o
					} = this.props, n = [];
					e && n.push(e.post.id), s && n.push(s.post.id), o && n.push(o.post.id), n.length > 0 && t(n)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: o,
						previousStream: n
					} = this.props, r = [];
					t && this.isStreamChanged(t, e.currentStream) && r.push(t.post.id), n && this.isStreamChanged(n, e.previousStream) && r.push(n.post.id), s && this.isStreamChanged(s, e.nextStream) && r.push(s.post.id), r.length > 0 && o(r)
				}
				render() {
					const {
						previewUrl: e,
						visualEffect: t,
						visualEffectLabel: s
					} = this.props;
					let o, r;
					if (t === Wo.Loading) o = Qo.a.loading;
					else if (t === Wo.Preview) o = Qo.a.preview, r = {
						backgroundImage: `url(${e})`
					};
					else {
						if (t !== Wo.Static) return null;
						o = Qo.a.static
					}
					return n.a.createElement("div", {
						className: Qo.a.container
					}, n.a.createElement("div", {
						className: o,
						"aria-label": s,
						style: r
					}))
				}
				isStreamChanged(e, t) {
					return !!e && (t && e.post.id !== t.post.id || !t)
				}
			}
			var Xo = Object(r.b)(null, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, o) => {
						const n = await s(Go(e, t));
						s(Ho(n))
					})(t))
				}))(zo),
				Yo = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				Zo = s.n(Yo);
			const $o = Object(S.a)(U.a, {
					playerName: "RPAN Video Player"
				}),
				en = Object(i.c)({
					currentStream: Qe.d,
					currentStreamStartTime: Qe.e,
					currentHlsUrl: Qe.b,
					inViewerFeedTheMeter: (e, t) => Object(Ge.f)(e, t, Qe.d),
					isIntroInProgress: ze.b,
					isOverlayOpen: We.i,
					isReportFlowOpen: (e, t) => {
						let {
							streamIdFromPath: s
						} = t;
						var o, n;
						return (null === (n = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === n ? void 0 : n.postOrCommentId) === Object(Ve.g)(s || "")
					},
					lastChatActivityUtcTs: ze.c,
					nextStream: Qe.h,
					nextTopStream: Qe.i,
					playbackState: Qe.j,
					previousStream: Qe.k,
					streamById: e => t => Object(Qe.l)(e, t),
					unavailableVideoUrl: Je.o,
					volume: Ke.f,
					isEndBroadcastModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(ve.a)(e),
					isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(ve.a)(e),
					isIntroChatModalOpen: e => "rpan-intro-chat-modal-id" === Object(ve.a)(e),
					isDownloadOBSModalOpen: e => Object(ve.a)(e) === de.a,
					previewUrl: Qe.c,
					reportingRevampEnabled: qe.a,
					isNightMode: Xe.db
				}),
				tn = Object(r.b)(en, (e, t) => ({
					closeLocation: () => e(Object(a.b)(t.location.state[Ae.b.CloseLocation])),
					fetchBroadcasterProfileInfo: t => e(Object(j.d)(t, !0)),
					fetchPostForStream: t => e(Object(I.a)(t)),
					subscribeConfig: () => e(D.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(D.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(D.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: (t, s) => e(Object(B.c)(t, s)),
					onStatsSubscribe: t => e(D.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(D.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(u.a)(t)),
					receiveHlsStreamRemoved: t => e(Object(u.b)(t)),
					removeStreamFromHistory: t => e(N(t)),
					setNewCorrelationId: () => e(Object(F.b)()),
					setIntroFinishedStatus: t => e(Object(F.c)({
						isIntroFinished: t
					})),
					setMutedInFeed: t => e(V.G(t)),
					setVideoVolume: t => e(x.h(t)),
					updateVideoTimestamp: (t, s) => e(A({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(T(e))
					})(t)),
					resetHistory: () => e(M()),
					toggleIntroChatModal: () => e(Object(k.i)("rpan-intro-chat-modal-id")),
					toggleEndBroadcastModal: () => e(Object(k.i)("rpan-end-broadcast-confirmation-id")),
					toggleRemovalReasonModal: () => e(Object(k.i)("rpan-add-removal-reason-id")),
					toggleOBSDownloadModal: () => e(Object(k.i)(de.a)),
					onShareToChat: t => e(Object(E.e)(t))
				}));
			class sn extends o.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = n.a.createRef(), this.videoRef = n.a.createRef(), this.videoSessionManager = null, this.renderReportFlow = (e, t) => this.props.reportingRevampEnabled ? n.a.createElement(Me.a, {
						withOverlay: !0,
						overlayCustomStyles: Ne.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}) : n.a.createElement(Ne.a, {
						withOverlay: !0,
						overlayCustomStyles: Ne.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}), this.renderTheater = e => {
						const {
							currentStream: t,
							currentStreamStartTime: s,
							currentHlsUrl: o,
							inViewerFeedTheMeter: r,
							isIntroInProgress: a,
							isOverlay: i,
							isReportFlowOpen: c,
							location: l,
							nextStream: m,
							playbackState: u,
							previewUrl: p,
							previousStream: b,
							related: v,
							sendEvent: g,
							subreddit: f,
							timestamp: S,
							unavailableVideoUrl: O,
							volume: w,
							isRemovalReasonModalOpen: _,
							isEndBroadcastModalOpen: C,
							isIntroChatModalOpen: y,
							isDownloadOBSModalOpen: E,
							isNightMode: x,
							onShareToChat: k
						} = this.props, {
							hasLiveIntent: j,
							isError: I,
							isLoading: R,
							isMuted: P,
							isOverlayVisible: L,
							isVideoPaused: T,
							showStreamEndedPrompt: N,
							videoCurrentTime: M,
							videoTotalTime: A,
							shouldShowOBSBanner: D
						} = this.state, F = t && t.post.id, B = o !== O, V = t && !t.post.subreddit, U = u === Qe.a.LIVE, H = t && 1e3 * t.broadcast_time;
						let G, q, K, W, J = "number" == typeof S ? S : s;
						H && J >= H && (J = 0), t && B ? (G = 1e3 * t.broadcast_time, q = F, K = U, W = t.post.title) : (G = void 0, q = void 0, K = !1, W = "RPAN Unavailable Video");
						const Q = t && t.meter && 10 * Math.round(t.estimated_remaining_time / 10),
							z = r && t && t.estimated_remaining_time < $e && !a,
							X = void 0 !== Q && Q >= 0 && z ? Zo.a[`meterCritical${Q}`] : void 0;
						let Y, Z;
						return R || I ? Y = p ? Wo.Preview : Wo.Loading : z && (Y = Wo.Static), R ? Z = h.fbt._("video is loading", null, {
							hk: "jUJdy"
						}) : I ? Z = h.fbt._("unable to load video", null, {
							hk: "1Eh3Rt"
						}) : z && (Z = h.fbt._("this broadcast will expire soon. give an award to add more time.", null, {
							hk: "3dUpDV"
						})), n.a.createElement(n.a.Fragment, null, D && n.a.createElement(ie, {
							isDark: x,
							onClickLearnMore: this.onOBSBannerLearnMoreClick,
							onClickDismiss: this.onOBSBannerDismissClick
						}), n.a.createElement("div", {
							className: Object(d.a)(Zo.a.theaterContainer, {
								[Zo.a.overlay]: i,
								[Zo.a.theaterContainerExp]: e,
								[Zo.a.isObsBannerDisplayed]: D
							}),
							ref: this.focusRef,
							tabIndex: -1
						}, n.a.createElement("div", {
							className: Zo.a.wrap
						}, n.a.createElement("div", {
							className: Object(d.a)(Zo.a.panesWrapper, {
								[Zo.a.initialized]: !a
							})
						}, n.a.createElement("div", {
							className: Object(d.a)(Zo.a.pane, Zo.a.leftPane)
						}, n.a.createElement("div", {
							className: Zo.a.videoContainer
						}, Y && Z && n.a.createElement(Xo, {
							previousStream: b,
							currentStream: t,
							nextStream: m,
							previewUrl: p,
							visualEffect: Y,
							visualEffectLabel: Z
						}), o && n.a.createElement("div", {
							className: X
						}, n.a.createElement($o, {
							autoplay: !0,
							controls: !1,
							startTime: J,
							isPaused: T,
							muted: P,
							muxVideoDuration: G,
							muxVideoId: q,
							muxVideoIsLive: K,
							muxVideoTitle: W,
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
							url: o,
							videoRef: this.videoRef,
							sessionId: this.state.sessionId
						})), n.a.createElement(Vs, {
							currentStreamId: F,
							isLoading: R,
							isLive: U,
							isMuted: P,
							isPaused: T,
							isUnavailable: u === Qe.a.UNAVAILABLE,
							isVisible: L,
							onCopyLink: this.onCopyLink,
							onCrosspost: this.onCrosspost,
							onShareToChat: k,
							onReplayVideo: this.onReplayVideo,
							onShareLink: this.onShareLink,
							onShare: this.onShare,
							onPlayPauseToggle: this.onPlayPauseToggle,
							onReport: this.onReport,
							onScrubbing: this.onScrubbing,
							onEndBroadcast: this.onEndBroadcast,
							onSelectSubreddit: this.goToSubreddit,
							onToggleMenu: this.onToggleMenu,
							onUpvote: this.onUpvote,
							onDownvote: this.onDownvote,
							onRpanStudioClick: this.onRpanStudioClick,
							onVideoPositionUpdate: this.onVideoPlayerPositionUpdate,
							related: v,
							sendEvent: g,
							setVolume: this.onSetVolume,
							showErrorPrompt: I,
							showStreamEndedPrompt: N,
							subreddit: f,
							toggleMute: this.onToggleMuteVideo,
							videoCurrentTime: U && j ? A : M,
							videoTotalTime: A,
							volume: w
						}), (_ || C) && t && n.a.createElement(Te, {
							subredditId: t.post.subreddit.id,
							subredditName: t.post.subreddit.name,
							postId: t.post.id,
							toggleModal: this.onEndBroadcast
						}), y && n.a.createElement(te, {
							toggleModal: this.props.toggleIntroChatModal
						}), E && n.a.createElement(de.b, {
							onClickDownload: this.onOBSModalDownloadClick,
							onClickDismiss: this.onOBSModalDismissClick,
							onClickGuidebook: this.onOBSModalGuidebookClick,
							className: Zo.a.downloadOBSModal
						}))), !a && n.a.createElement("div", {
							className: Object(d.a)(Zo.a.pane, Zo.a.rightPane)
						}, t && !V && n.a.createElement(Mo, {
							location: l,
							onChatClick: this.onChatClick,
							onFocusMessageInput: this.handleFocusMessageInput,
							postId: t.post.id,
							sendEvent: g,
							subredditId: t.post.subreddit.id
						}))), t && !a && n.a.createElement(Uo, {
							nextStream: m,
							onNext: this.onNextStream,
							onPrevious: this.onPreviousStream,
							previousStream: b
						}), t && !a && n.a.createElement(on, {
							onClick: this.onClose
						}), t && !a && c && this.renderReportFlow(t, M))))
					}, this.onHlsRefChange = e => {
						var t;
						this.hlsVideoApi = e, null === (t = this.hlsVideoApi) || void 0 === t || t.setVolume(this.props.volume)
					}, this.onCurrentTimeChanged = e => {
						this.onCurrentTimeChangedThrottled(e), this.state.videoCurrentTime !== e && this.setState({
							videoCurrentTime: e
						})
					}, this.onCurrentTimeChangedThrottled = g()(e => {
						const {
							currentStream: t,
							isIntroInProgress: s,
							updateVideoTimestamp: o
						} = this.props;
						!s && t && this.isCurrentStreamWatchable() && o(t.post.id, e)
					}, R.p), this.onVideoPlayerPositionUpdate = e => {
						if (e === this.state.videoCurrentTime) return;
						let t = !1;
						if (this.props.playbackState === Qe.a.LIVE && e > this.state.videoCurrentTime) {
							const s = .95;
							t = e / this.state.videoTotalTime >= s
						}
						const s = t ? this.state.videoTotalTime : e;
						this.hlsVideoApi && this.hlsVideoApi.setCurrentTime(s), this.setState({
							hasLiveIntent: t,
							videoCurrentTime: s
						}), this.props.sendEvent(Object(Ue.y)(this.props.currentStream, {
							...this.playbackStats,
							scrubbingStartMs: Object(C.a)(this.state.videoCurrentTime),
							scrubbingEndMs: Object(C.a)(s)
						}))
					}, this.onNextStream = g()(() => {
						const {
							nextStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(Ue.l)(e, this.playbackStats)), this.goToStream(e))
					}, R.q, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = g()(() => {
						const {
							previousStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(Ue.m)(e, this.playbackStats)), this.goToStream(e))
					}, R.q, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(Be.g)(e.target) ? e.stopPropagation() : e.keyCode === De.a.ArrowRight ? this.onNextStream() : e.keyCode === De.a.ArrowLeft && this.onPreviousStream()
					}, this.onPlayPauseToggle = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.isVideoPaused ? this.playVideo() : this.pauseVideo()
					}, this.onToggleMuteVideo = () => {
						const e = !this.state.isMuted;
						this.setVideoMute(e), this.props.setMutedInFeed(e)
					}, this.onSetVolume = (e, t) => {
						const s = this.hlsVideoApi;
						s && (t ? 0 !== e ? (this.props.setVideoVolume(e), this.props.setMutedInFeed(!1)) : (this.setState({
							isMuted: !0
						}), this.props.setMutedInFeed(!0)) : (s.setVolume(e), e || this.state.isMuted ? e && this.state.isMuted && this.setVideoMute(!1) : this.setVideoMute(!0)))
					}, this.onReplayVideo = () => {
						this.cancelSwitchingOnStreamEnded(), this.replayVideo()
					}, this.onScrubbing = () => {
						this.cancelSwitchingOnStreamEnded(), this.state.showStreamEndedPrompt && this.playVideo()
					}, this.onEndBroadcast = () => {
						this.props.toggleRemovalReasonModal()
					}, this.onCopyLink = e => {
						if (this.props.currentStream) {
							const t = e.source === As.EndScreen ? "copy_link_video" : "copy_link";
							this.props.sendEvent(Object(Ue.u)(t, this.props.currentStream, this.playbackStats, null == e ? void 0 : e.referralId))
						}
						this.cancelSwitchingOnStreamEnded()
					}, this.onShare = () => {
						this.props.currentStream && this.props.sendEvent(Object(Ue.B)("share", this.props.currentStream, this.playbackStats))
					}, this.onShareLink = e => {
						if (this.props.currentStream) {
							const t = e.source === As.EndScreen ? "share_video" : "share_copy";
							this.props.sendEvent(Object(Ue.B)(t, this.props.currentStream, this.playbackStats))
						}
					}, this.onCrosspost = e => {
						if (this.props.currentStream) {
							const t = e.source === As.EndScreen ? "crosspost_video" : "share_crosspost";
							this.props.sendEvent(Object(Ue.v)(t, this.props.currentStream, this.playbackStats))
						}
					}, this.onToggleMenu = () => {
						this.cancelSwitchingOnStreamEnded()
					}, this.setVideoMute = e => {
						this.setState(() => ({
							isMuted: e
						}));
						const t = this.hlsVideoApi;
						if (!t) return;
						const s = e ? Ue.w : Ue.F;
						e || t.setVolume(this.props.volume), this.props.sendEvent(s(this.props.currentStream, this.playbackStats))
					}, this.goToSubreddit = e => {
						this.props.sendEvent(Object(Ue.s)(e, this.props.currentStream)), this.props.onNavigation(e.path)
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === Qe.a.LIVE || this.props.playbackState === Qe.a.VOD, this.handleHeartbeat = e => {
						let {
							meta: t,
							stats: s
						} = e;
						const {
							currentStream: o,
							streamById: n
						} = this.props, r = o && o.post.id === t.id ? o : n(t.id);
						if (!r) return;
						const a = !s.sessionDurationMs ? Ue.E : Ue.A,
							i = {
								...s,
								playerType: Ue.a.Theater
							};
						this.props.sendEvent(a(r, i))
					}, this.state = {
						hasLiveIntent: e.playbackState === Qe.a.LIVE,
						isUnavailableVideoJustFinished: !1,
						isVodStreamJustFinished: !1,
						isError: !1,
						isLoading: !0,
						isReady: !1,
						isMuted: !1,
						isOverlayVisible: !1,
						isSwitchingOnStreamEndedScheduled: !1,
						isVideoPaused: !1,
						showStreamEndedPrompt: !1,
						videoCurrentTime: 0,
						videoTotalTime: 0,
						wasVideoPausedWhenOverlayOpened: !1,
						shouldShowOBSBanner: !1,
						sessionId: ""
					}, this.previouslyActiveElement = null, this.onAutoPlayPrevented = this.onAutoPlayPrevented.bind(this), this.onClose = this.onClose.bind(this), this.onEnded = this.onEnded.bind(this), this.onNextStream = this.onNextStream.bind(this), this.onPlayerError = this.onPlayerError.bind(this), this.onPreviousStream = this.onPreviousStream.bind(this), this.onReport = this.onReport.bind(this), this.onVideoPlayerLevelLoaded = this.onVideoPlayerLevelLoaded.bind(this), this.onVideoPlayerLoadedData = this.onVideoPlayerLoadedData.bind(this), this.onVideoPlayerLoadingData = this.onVideoPlayerLoadingData.bind(this), this.onChatClick = this.onChatClick.bind(this), this.handleFocusMessageInput = this.handleFocusMessageInput.bind(this), this.onUpvote = this.onUpvote.bind(this), this.onDownvote = this.onDownvote.bind(this), this.onOBSModalDownloadClick = this.onOBSModalDownloadClick.bind(this), this.onOBSModalGuidebookClick = this.onOBSModalGuidebookClick.bind(this), this.onOBSBannerDismissClick = this.onOBSBannerDismissClick.bind(this), this.onOBSBannerLearnMoreClick = this.onOBSBannerLearnMoreClick.bind(this), this.onOBSModalDismissClick = this.onOBSModalDismissClick.bind(this), this.onRpanStudioClick = this.onRpanStudioClick.bind(this), this.onVideoPlayerResourceRemoved = this.onVideoPlayerResourceRemoved.bind(this), this.scheduleSwitchingOnStreamEnded = this.scheduleSwitchingOnStreamEnded.bind(this)
				}
				get playbackStats() {
					var e;
					return {
						...null === (e = this.videoSessionManager) || void 0 === e ? void 0 : e.stats,
						playerType: Ue.a.Theater
					}
				}
				get video() {
					return this.videoRef.current
				}
				componentDidMount() {
					const e = this.focusRef.current;
					e.classList.add(Zo.a.focusVisible), Object(_.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, w(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(He.t)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream(), window.localStorage && this.setState({
						shouldShowOBSBanner: !J.j()
					})
				}
				componentDidUpdate(e, t) {
					const {
						currentStream: s,
						isIntroInProgress: o,
						isOverlay: n,
						isOverlayOpen: r,
						isReportFlowOpen: a,
						onHeartbeatSubscribe: i,
						onRecommendedViewerSubredditsSubscribe: d,
						onStatsSubscribe: c,
						playbackState: l,
						related: m,
						subreddit: u,
						subscribeConfig: p,
						subscribeStreams: b
					} = this.props;
					if (n || r === e.isOverlayOpen || (r ? (this.setState(e => {
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
						}), p().then(e => this.unsubscribeConfig = e), b().then(e => this.unsubscribeStreams = e), s && this.isCurrentStreamWatchable() && (i(s.post.id).then(e => this.unsubscribeHeartbeat = e), c(s.post.id).then(e => this.unsubscribeStats = e)), d().then(e => this.unsubscribeRecommendedViewerSubreddits = e))), (m || u) !== (e.related || e.subreddit)) return this.props.resetHistory(), this.handleNewStream(), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), void(s || this.setState({
						isLoading: !0
					}));
					!o && e.isIntroInProgress && this.handleNewStream(), o || e.isIntroInProgress || !nn(s, e.currentStream) || this.handleNewStream(), this.updateVideoSession(e, t), this.state.isSwitchingOnStreamEndedScheduled || o || !(!s && !this.state.isLoading || l === Qe.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), o || s || this.state.isLoading || this.state.isError || this.setState({
						...this.state,
						isError: !0
					}), a && this.state.isVideoPaused && this.setState({
						isVideoPaused: !0
					}), this.context.setIsLive(l === Qe.a.LIVE), this.context.setCurrentTime(this.state.videoCurrentTime), this.context.setTotalTime(this.state.videoTotalTime)
				}
				componentWillUnmount() {
					window.clearTimeout(this.overlayVisibilityTimeout), window.clearTimeout(this.consumePostTimeout), window.clearTimeout(this.switchingOnStreamEndedTimeout), this.onCurrentTimeChangedThrottled.cancel(), document.removeEventListener("keydown", this.onNextStreamKeyHandler), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits(), this.unsubscribeConfig(), this.unsubscribeStreams(), this.props.resetHistory(), this.props.isOverlay && setTimeout(() => w(this.previouslyActiveElement)), this.destroyVideoSessionManager()
				}
				render() {
					return n.a.createElement(f.a.Consumer, null, this.renderTheater)
				}
				onVideoPlayerLevelLoaded(e) {
					const {
						currentStream: t,
						playbackState: s,
						receiveHlsStreamEnded: o
					} = this.props;
					this.state.videoTotalTime !== e.totalduration && this.setState({
						videoTotalTime: e.totalduration
					}), t && !e.live && 0 !== e.endSN && s === Qe.a.LIVE && o(t.post.id)
				}
				onVideoPlayerLoadingData() {
					this.setState({
						isLoading: !0,
						isError: !1
					})
				}
				onVideoPlayerLoadedData() {
					this.setState({
						isError: !1,
						isLoading: !1,
						isReady: !0
					})
				}
				onVideoPlayerResourceRemoved() {
					const {
						currentStream: e,
						receiveHlsStreamRemoved: t
					} = this.props;
					e && this.isCurrentStreamWatchable() && t(e.post.id)
				}
				onRpanStudioClick() {
					this.props.sendEvent(Object(Ue.x)(this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onOBSModalDismissClick() {
					this.props.sendEvent(Object(Ue.h)("dismiss", this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onOBSModalDownloadClick() {
					this.props.sendEvent(Object(Ue.h)("download", this.props.currentStream))
				}
				onOBSModalGuidebookClick() {
					this.props.sendEvent(Object(Ue.h)("guidebook", this.props.currentStream))
				}
				onOBSBannerDismissClick() {
					J.qb(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(Ue.g)("not_now", this.props.currentStream))
				}
				onOBSBannerLearnMoreClick() {
					J.qb(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(Ue.g)("learn_more", this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onChatClick() {
					this.props.currentStream && this.props.sendEvent(Object(Ue.o)(this.props.currentStream, this.playbackStats))
				}
				handleFocusMessageInput() {
					J.W() || this.props.toggleIntroChatModal()
				}
				onUpvote() {
					this.props.currentStream && this.props.sendEvent(Object(Ue.r)(this.props.currentStream, this.playbackStats))
				}
				onDownvote() {
					this.props.currentStream && this.props.sendEvent(Object(Ue.p)(this.props.currentStream, this.playbackStats))
				}
				onEnded() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						playbackState: s,
						sendEvent: o,
						setIntroFinishedStatus: n
					} = this.props;
					if (this.setState({
							isVideoPaused: !0
						}), t) return n(!0), void this.setState({
						...this.state,
						isLoading: !!e
					});
					e && o(Object(Ue.C)(e, this.playbackStats)), s !== Qe.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(Ue.D)(this.props.currentStream, this.playbackStats)), this.setState({
						...this.state,
						isError: !0
					})
				}
				onAutoPlayPrevented() {
					this.setState({
						isMuted: !0
					})
				}
				onClose() {
					this.props.sendEvent(Object(Ue.b)(this.props.currentStream, this.playbackStats)), this.props.isOverlay ? this.props.closeLocation() : window.location.replace(window.location.origin)
				}
				onReport() {
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id, this.props.isOverlay), this.props.sendEvent(Object(Ue.q)(this.props.currentStream)))
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
				pauseVideo() {
					this.state.isVideoPaused || (this.props.sendEvent(Object(Ue.d)(this.props.currentStream, this.playbackStats)), this.setState({
						isVideoPaused: !0
					}))
				}
				playVideo() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
						sendEvent: !0
					};
					this.state.isVideoPaused && (e.sendEvent && this.props.sendEvent(Object(Ue.e)(this.props.currentStream, this.playbackStats)), this.hideStreamEndedPrompt(), this.setState({
						isVideoPaused: !1
					}))
				}
				replayVideo() {
					this.props.sendEvent(Object(Ue.f)(this.props.currentStream, this.playbackStats)), this.onVideoPlayerPositionUpdate(0), this.playVideo({
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
						s && !e && !Object(ze.a)(t) && this.state.isSwitchingOnStreamEndedScheduled ? this.goToStream(s) : this.cancelSwitchingOnStreamEnded()
					}, R.k), this.setState({
						...this.state,
						isSwitchingOnStreamEndedScheduled: !0
					})
				}
				cancelSwitchingOnStreamEnded() {
					window.clearTimeout(this.switchingOnStreamEndedTimeout), this.state.isSwitchingOnStreamEndedScheduled && this.setState({
						isSwitchingOnStreamEndedScheduled: !1
					})
				}
				getStreamLocation(e) {
					const t = Object(Ve.d)(e);
					return Object(O.a)(t, {
						[Fe.r]: this.props.related,
						[Fe.B]: this.props.timestamp
					})
				}
				goToStream(e) {
					const {
						onNavigation: t,
						visitStream: s
					} = this.props, o = e.post.id;
					this.cancelSwitchingOnStreamEnded(), this.hideStreamEndedPrompt(), s(o), this.setState({
						isLoading: !0,
						isVideoPaused: !1
					}), t(this.getStreamLocation(e))
				}
				async handleNewStream() {
					const {
						currentStream: e,
						fetchBroadcasterProfileInfo: t,
						fetchPostForStream: s,
						playbackState: o,
						visitStream: n
					} = this.props;
					e && (this.setState({
						hasLiveIntent: o === Qe.a.LIVE,
						videoCurrentTime: 0,
						videoTotalTime: 0
					}), n(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), s(e.post.id), e.post.authorInfo && e.post.authorInfo.name && t(e.post.authorInfo.name), this.syncLocationWithCurrentStreamId(), this.props.sendEvent(Object(Ue.G)(e)), this.setConsumePostTimeout(), this.showOverlayAfterStreamSwitching())
				}
				setConsumePostTimeout() {
					window.clearTimeout(this.consumePostTimeout), this.consumePostTimeout = window.setTimeout(() => this.props.sendEvent(Object(Ue.t)(this.props.currentStream)), b.a.telemetry.postConsumedThreshold)
				}
				showOverlayAfterStreamSwitching() {
					window.clearTimeout(this.overlayVisibilityTimeout), this.overlayVisibilityTimeout = window.setTimeout(() => this.setState({
						isOverlayVisible: !1
					}), R.n), this.setState({
						isOverlayVisible: !0
					})
				}
				syncLocationWithCurrentStreamId() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						onNavigation: s,
						streamIdFromPath: o
					} = this.props;
					if (!e || t) return;
					const n = !o || Object(Ve.b)(e.post.id) === o;
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
				updateVideoSession(e, t) {
					var s, o;
					const {
						video: n
					} = this;
					if (!n) return;
					const r = this.getOrCreateVideoSessionManager(n),
						{
							currentStream: a
						} = this.props,
						i = null == a ? void 0 : a.post.id,
						d = i !== (null === (s = e.currentStream) || void 0 === s ? void 0 : s.post.id);
					d && this.setState({
						isReady: !1
					}), d && r.endSession();
					const {
						isReady: c
					} = this.state, {
						isReady: l
					} = t;
					!!i && (!l && c) && (r.startSession({
						id: i
					}), this.setState({
						sessionId: (null === (o = null == r ? void 0 : r.sessionStats) || void 0 === o ? void 0 : o.id) || ""
					}))
				}
				getOrCreateVideoSessionManager(e) {
					return this.videoSessionManager || (this.videoSessionManager = new y.a(e, {
						onHeartbeat: this.handleHeartbeat
					})), this.videoSessionManager
				}
				destroyVideoSessionManager() {
					var e;
					null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
			}
			const on = e => {
					let {
						onClick: t
					} = e;
					return n.a.createElement("button", {
						className: Zo.a.closeButton,
						onClick: t,
						"aria-label": h.fbt._("close button", null, {
							hk: "2l5YIS"
						})
					}, n.a.createElement(ne.a, {
						className: Zo.a.closeIcon
					}))
				},
				nn = (e, t) => (e && e.post.id) !== (t && t.post.id);
			sn.contextType = p.a;
			var rn = tn(Object(pe.c)(sn)),
				an = s("./src/reddit/contexts/InsideOverlay.tsx"),
				dn = s("./src/reddit/helpers/overlay/index.ts"),
				cn = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				ln = s.n(cn);
			const {
				fbt: mn
			} = s("./node_modules/fbt/lib/FbtPublic.js"), un = Object(l.a)((e, t) => {
				let {
					match: {
						params: s
					}
				} = t;
				return s
			}), pn = Object(l.a)((e, t) => {
				let {
					location: {
						search: s
					}
				} = t;
				return Object(c.a)(s)
			}), bn = Object(i.a)(un, pn, (e, t) => {
				const s = t.get(Fe.r),
					{
						subredditName: o
					} = e;
				return "home" === s || "r/popular" === s ? s : "popular" === o ? "r/popular" : o ? void 0 : "home"
			}), hn = Object(i.a)(pn, e => {
				const t = e.get(Fe.B);
				if (!t) return;
				const s = parseInt(t, 10);
				return isNaN(s) ? void 0 : s
			}), vn = Object(i.c)({
				isEnabled: Ge.a,
				isIntroInProgress: ze.b,
				related: bn,
				timestamp: hn
			}), gn = Object(r.b)(vn, (e, t) => ({
				onOpenLoginModal: () => e(Object(m.openLoginModal)()),
				onStreamByIdRequested: t => e(Object(u.d)(t)),
				updateLocation: (t, s) => {
					let {
						isOverlay: o,
						useReplace: n
					} = s;
					const r = n ? a.c : a.b,
						i = o ? Object(dn.b)(t) : t;
					e(r(i))
				}
			}));
			class fn extends n.a.Component {
				constructor(e) {
					super(e), this.renderPublicAccessNetwork = e => {
						const {
							isOverlay: t,
							location: s,
							match: o,
							related: r,
							timestamp: a
						} = this.props, {
							subredditName: i,
							partialPostId: c
						} = o.params;
						return n.a.createElement("div", {
							className: Object(d.a)(ln.a.rpanContainer, {
								[ln.a.overlay]: t,
								[ln.a.rpanContainerExp]: e
							})
						}, n.a.createElement(p.b, null, n.a.createElement(rn, {
							isOverlay: !!t,
							location: s,
							onNavigation: this.onNavigation,
							related: r,
							streamIdFromPath: c,
							subreddit: i && `r/${i}`,
							timestamp: c ? a : void 0
						})))
					}, this.onNavigation = this.onNavigation.bind(this)
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
						updateLocation: o
					} = this.props;
					o(e, {
						isOverlay: s,
						useReplace: t
					})
				}
				render() {
					const {
						isEnabled: e
					} = this.props;
					return e ? n.a.createElement(f.a.Consumer, null, this.renderPublicAccessNetwork) : n.a.createElement(Sn, null)
				}
			}
			const Sn = () => {
				const e = Object(o.useContext)(f.a);
				return n.a.createElement("div", {
					className: Object(d.a)(ln.a.rpanContainer, ln.a.forbiddenScreen, {
						[ln.a.rpanContainerExp]: e
					})
				}, n.a.createElement("h2", null, mn._("Not Found", null, {
					hk: "2ijDv5"
				})))
			};
			t.default = gn(Object(pe.c)(Object(an.b)(fn)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return _
			})), s.d(t, "m", (function() {
				return E
			})), s.d(t, "i", (function() {
				return j
			})), s.d(t, "d", (function() {
				return L
			})), s.d(t, "h", (function() {
				return T
			})), s.d(t, "k", (function() {
				return N
			})), s.d(t, "c", (function() {
				return M
			})), s.d(t, "f", (function() {
				return A
			})), s.d(t, "a", (function() {
				return B
			})), s.d(t, "j", (function() {
				return V
			})), s.d(t, "b", (function() {
				return U
			})), s.d(t, "e", (function() {
				return H
			})), s.d(t, "g", (function() {
				return G
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				r = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				a = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				c = s("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				m = s.n(c)()(e => Object(n.a)(Object(o.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var u = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				v = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				f = e => e.publicAccessNetwork.hlsStreams,
				S = Object(o.a)(f, e => e.ended),
				O = Object(o.a)(f, e => e.removed),
				w = Object(o.a)(p, S, O, (e, t, s) => {
					const o = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const o = s.stream.state,
							n = D(o, a.a.ENDED) ? a.a.ENDED : o,
							r = s.stream.vod_accessible;
						return n === o && !0 === r ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const o = s.stream.state,
							n = D(o, a.a.ENDED) ? a.a.ENDED : o,
							r = s.stream.vod_accessible;
						return n === o && !1 === r ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: n,
									vod_accessible: !1
								}
							}
						}
					}, o)
				}),
				_ = (e, t) => {
					return w(e)[Object(r.g)(t)]
				},
				C = Object(o.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => m(t.listingName)(e, t), w, b, i.h, (e, t, s, o, n) => {
					const i = [];
					if (e) {
						const t = Object(r.g)(e);
						s[t] && i.push(t)
					}
					const d = i.concat(t),
						c = [...new Set(d)],
						l = new Set([...o, ...n]);
					return c.filter(e => {
						const t = s[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== a.a.KILLED && t.stream.state !== a.a.PURGED
					})
				}),
				y = Object(o.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, w, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: o
					} = t;
					return C(e, {
						listingName: s,
						streamIdFromPath: o
					})
				}, (e, t, s) => {
					const o = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? o.slice(0, e) : o
				}),
				E = Object(o.a)(w, y, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				x = Object(o.a)(g, (e, t) => {
					let {
						related: s,
						streamIdFromPath: o,
						subreddit: n
					} = t;
					return y(e, {
						listingName: s || n,
						streamIdFromPath: o
					})
				}, (e, t) => {
					const s = new Set(e),
						o = t.filter(e => !s.has(e));
					if (o.length) return o[0]
				}),
				k = Object(o.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, w, (e, t) => {
					let {
						related: s,
						streamIdFromPath: o,
						subreddit: n
					} = t;
					return y(e, {
						listingName: s || n,
						streamIdFromPath: o
					})
				}, h, (e, t, s, o) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						r = n.find(e => e.stream.state === a.a.IS_LIVE);
					if (r) return r.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (o.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				j = Object(n.a)(Object(o.a)(k, w, (e, t) => e ? t[e] : void 0)),
				I = Object(o.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(r.g)(s) : void 0
				}, k, b, i.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: o,
						subreddit: n
					} = t;
					return y(e, {
						listingName: s || n,
						streamIdFromPath: o
					})
				}, (e, t, s, o, n) => !e || s.includes(e) || o.includes(e) ? t || n[0] : e),
				R = Object(o.a)(v, g, x, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				P = Object(o.a)(v, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				L = Object(n.a)(Object(o.a)(I, w, (e, t) => e ? t[e] : void 0)),
				T = Object(n.a)(Object(o.a)(R, w, (e, t) => e ? t[e] : void 0)),
				N = Object(n.a)(Object(o.a)(P, w, (e, t) => e ? t[e] : void 0)),
				M = (Object(n.a)(Object(o.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, w, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
					...t[s],
					preloadedPreviewUrl: e[s]
				})))), Object(o.a)(I, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => e && t[e])),
				A = Object(o.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? _(e, s) : void 0
				}, e => !e || e.chat_disabled || e.post.isArchived || e.post.isLocked);

			function D(e, t) {
				const s = {
					[a.a.NOT_STARTED]: 0,
					[a.a.PUBLISHED]: 1,
					[a.a.IS_LIVE]: 2,
					[a.a.DISCONNECTED]: 2,
					[a.a.ENDED]: 3,
					[a.a.KILLED]: 4,
					[a.a.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const F = Object(o.a)(I, h, (e, t) => e && t.timestamps[e] || 0);
			var B;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(B || (B = {}));
			const V = Object(o.a)(I, w, u.b, (e, t, s) => {
					if (s) return B.INTRO;
					const o = e && t[e];
					if (!o) return B.UNAVAILABLE;
					const n = o.stream.state;
					return n === a.a.IS_LIVE || n === a.a.DISCONNECTED ? B.LIVE : n === a.a.ENDED && o.stream.vod_accessible ? B.VOD : B.UNAVAILABLE
				}),
				U = Object(o.a)(L, V, u.b, d.b, d.o, (e, t, s, o, n) => s ? o : e ? t === B.LIVE || t === B.VOD ? e.stream.hls_url : n : void 0),
				H = Object(o.a)(L, V, F, (e, t, s) => e ? t === B.LIVE ? e.broadcast_time : t === B.VOD && s < e.broadcast_time ? s : 0 : 0),
				G = (e, t) => {
					const s = p(e);
					return !!s && s[t] && s[t].chat_disabled
				}
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return i
			})), s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				r = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(o.a)(a, r.n, (e, t) => t && !e.isIntroFinished),
				d = Object(o.a)(a, e => e.lastChatActivityUtcTs),
				c = e => !!e && e + n.a > Date.now()
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/experiments/index.ts"),
				a = s("./src/reddit/selectors/experiments/utils.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				d = s("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => Object(i.h)(e) && Object(r.f)(e),
					experimentName: o.vc
				}), a.a),
				l = Object(d.a)(e => Object(n.c)(e, {
					experimentEligibilitySelector: e => !Object(i.h)(e) && Object(r.f)(e),
					experimentName: o.uc
				}), a.a),
				m = Object(d.a)(c, l, (e, t) => e || t),
				u = Object(d.a)(c, l, (e, t) => !(!e && !t))
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = e => !!Object(r.b)(e) || Object(n.c)(e, {
				experimentEligibilitySelector: a.Q,
				experimentName: o.n
			}) === o.g.Enabled
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/selectors/chatPost.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(n.yg)(t)
				},
				d = Object(o.a)(i, r.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"72926b3be83c"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"30a3b435fd58"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"4c520d366579"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"3951163cb13e"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"1cd94875841b"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PublicAccessNetwork.afe52885c1b43a1d4f35.js.map