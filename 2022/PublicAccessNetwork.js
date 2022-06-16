// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.d8d6379a3c49b130f455.js
// Retrieved at 6/16/2022, 9:40:06 AM by Reddit Dataminer v1.0.0
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
					var r, n = s(/(ipod|iphone|ipad)/i).toLowerCase(),
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
						v = !n && !l && /macintosh/i.test(t),
						g = !a && !m && !u && !p && /linux/i.test(t),
						f = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						O = s(/version\/(\d+(\.\d+)?)/i),
						S = /tablet/i.test(t) && !/tablet pc/i.test(t),
						w = !S && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: O || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || O
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: O || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: O || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: O || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, f ? (r.msedge = e, r.version = f) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? r = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? r = {
						name: "Microsoft Edge",
						msedge: e,
						version: f
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || O
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
						version: O || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: O || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || O
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || O
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || O
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? r = {
						name: "Android",
						version: O
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, O && (r.version = O)) : n ? (r = {
						name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
					}, O && (r.version = O)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || O
					} : {
						name: s(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && O && (r.version = O)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && n ? (r[n] = e, r.ios = e, r.osname = "iOS") : v ? (r.mac = e, r.osname = "macOS") : _ ? (r.xbox = e, r.osname = "Xbox") : h ? (r.windows = e, r.osname = "Windows") : g && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var y = "";
					r.windows ? y = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? y = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? y = (y = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : n ? y = (y = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? y = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? y = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? y = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? y = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (y = s(/tizen[\/\s](\d+(\.\d+)*)/i)), y && (r.osversion = y);
					var E = !r.windows && y.split(".")[0];
					return S || d || "ipad" == n || a && (3 == E || E >= 4 && !w) || r.silk ? r.tablet = e : (w || "iphone" == n || "ipod" == n || a || i || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function o(e) {
					return e.split(".").length
				}

				function r(e, t) {
					var s, o = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) o.push(t(e[s]));
					return o
				}

				function n(e) {
					for (var t = Math.max(o(e[0]), o(e[1])), s = r(e, (function(e) {
							var s = t - o(e);
							return r((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function a(e, o, r) {
					var a = s;
					"string" == typeof o && (r = o, o = void 0), void 0 === o && (o = !1), r && (a = t(r));
					var i = "" + a.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && a[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return n([i, e[d]]) < 0
						} return o
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var o = e[t];
						if ("string" == typeof o && o in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = a, s.compareVersions = n, s.check = function(e, t, s) {
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
				r = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = r(s)) == s ? s : 0), void 0 !== t && (t = (t = r(t)) == t ? t : 0), o(r(e), t, s)
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
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
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
					experimentName: m.ie
				});
				return Object(m.Wf)(t) ? void 0 : t
			}, e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.je
				});
				return Object(m.Wf)(t) ? void 0 : t
			}, (e, t) => e === m.ne.Enabled && t === m.ne.Enabled);
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
			var O;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(O || (O = {}));
			const S = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					o = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(o)).map(f).join("")
			})(O.SHA1, e);

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
				y = {
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
					localStorageViewerUserIdKey: O,
					playerName: E,
					playerVersion: C,
					respectDoNotTrack: x,
					saltLength: j,
					saltTimeToLive: k,
					viewerUserIdLength: I
				} = {
					...y,
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
						return r.a.createElement(e, w({}, o, {
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
						return (await S(s)).substr(0, R.VIEWER_USER_ID_LENGTH)
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
				R.displayName = _(e), R.ANONYMOUS_USER_ID = s, R.DEBUG = c, R.DISABLE_COOKIES = m, R.DURATION_LIVE = 1 / 0, R.ENV_KEY = u, R.LOCAL_STORAGE_SALT_KEY = f, R.LOCAL_STORAGE_VIEWER_USER_ID_KEY = O, R.PLAYER_NAME = E, R.PLAYER_VERSION = C, R.RESPECT_DO_NOT_TRACK = x, R.SALT_LENGTH = j, R.SALT_TIME_TO_LIVE = k, R.STREAM_TYPE_LIVE = "live", R.STREAM_TYPE_ON_DEMAND = "on-demand", R.VIEWER_USER_ID_LENGTH = I;
				const L = Object(o.forwardRef)((e, t) => r.a.createElement(R, w({}, e, {
						forwardedRef: t
					}))),
					P = Object(a.c)({
						redditUserId: h.i,
						isMuxEnabled: p
					});
				return Object(n.b)(P, null, null, {
					forwardRef: !0
				})(L)
			}
		},
		"./src/lib/focusVisible/index.js": function(e, t, s) {
			"use strict";
			t.a = function(e) {
				var t = !0,
					s = !1,
					o = null,
					r = {
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

				function n(e) {
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
					s.metaKey || s.altKey || s.ctrlKey || (n(e.activeElement) && a(e.activeElement), t = !0)
				}), !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerdown", i, !0), document.addEventListener("touchstart", i, !0), document.addEventListener("visibilitychange", (function(e) {
					"hidden" === document.visibilityState && (s && (t = !0), d())
				}), !0), d(), e.addEventListener("focus", (function(e) {
					var s, o, i;
					n(e.target) && (t || (s = e.target, o = s.type, "INPUT" === (i = s.tagName) && r[o] && !s.readOnly || "TEXTAREA" === i && !s.readOnly || s.isContentEditable)) && a(e.target)
				}), !0), e.addEventListener("blur", (function(e) {
					var t;
					n(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (s = !0, window.clearTimeout(o), o = window.setTimeout((function() {
						s = !1
					}), 100), (t = e.target).hasAttribute("data-focus-visible-added") && (t.classList.remove("focus-visible"), t.removeAttribute("data-focus-visible-added")))
				}), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
			}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/config.ts"),
				r = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const n = Object(r.e)(e),
					a = encodeURIComponent(`${t}${n}`);
				return `${o.a.accountManagerOrigin}${s||"/login"}?dest=${a}`
			}
		},
		"./src/lib/makeLinkedPostsListingKey/index.ts": function(e, t, s) {
			"use strict";
			t.a = (e, t) => {
				let s = `linkedPosts--[post:'${e}']`;
				return t && (s += "--fallback"), s
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
				return n
			})), s.d(t, "b", (function() {
				return a
			})), s.d(t, "a", (function() {
				return i
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/bulkActions/constants.ts");
			const n = Object(o.a)(r.c),
				a = Object(o.a)(r.b),
				i = Object(o.a)(r.a)
		},
		"./src/reddit/actions/category/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return S
			}));
			var o = s("./src/lib/initializeClient/installReducer.ts"),
				r = s("./src/reddit/reducers/features/categories/index.ts"),
				n = (s("./node_modules/lodash/isEmpty.js"), s("./node_modules/react-router-redux/es/index.js"), s("./src/lib/makeActionCreator/index.ts")),
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
					categories: r.a
				}
			});
			const h = Object(n.a)(b.c),
				v = Object(n.a)(b.b),
				g = Object(n.a)(b.a),
				f = () => async (e, t, s) => {
					let {
						apiContext: o
					} = s;
					const r = t(),
						n = Object(p.h)(r),
						u = Object(p.g)(r);
					if (n || u) return;
					e(h());
					const b = await (e => Object(d.a)(Object(c.a)(e, [l.a]), {
						endpoint: `${e.apiUrl}/api/available_subreddit_categories.json?use_extended_categories=true`,
						method: i.jb.GET
					}))(o());
					if (b.ok) {
						const {
							categories: t,
							categoryIds: s
						} = (e => {
							const t = {},
								s = [];
							return e.forEach((e, o) => {
								const r = {
									attr: e.category_attr,
									color: e.category_color || a.a[o % a.a.length],
									icon: e.category_icon,
									id: e.category_id,
									name: e.category_name,
									displayText: Object(m.Vf)(e.category_name)
								};
								s.push(r.id), t[r.id] = r
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
				}, O = (Object(n.a)(b.g), Object(n.a)(b.f), Object(n.a)(b.e), Object(n.a)(b.d)), S = e => async (t, s) => {
					const o = Object(p.j)(s(), {
						id: e
					});
					t(O({
						categoryId: e,
						rank: o + 1
					})), Object(u.lb)(Object(p.d)(s()))
				}
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return w
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "f", (function() {
				return y
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "h", (function() {
				return j
			})), s.d(t, "b", (function() {
				return k
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
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
				O = s("./src/reddit/actions/comment/constants.ts");
			const S = Object(n.a)(O.p),
				w = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					s().features.comments.models[e] && (await Object(m.k)(r(), e)).ok && t((e => async t => {
						t(S({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					if (!Object(g.Q)(s())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const a = s().features.comments.models[e];
					if (!a) return;
					const d = a.isLocked ? m.m : m.f;
					t(Object(f.j)({
						[e]: {
							isLocked: !a.isLocked
						}
					})), (await d(n(), e)).ok ? t(Object(c.f)({
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
				}, y = Object(n.a)(O.I), E = e => async (t, s, r) => {
					let {
						apiContext: n,
						gqlContext: a
					} = r;
					const i = s(),
						l = i.features.comments.models[e],
						u = i.user.account ? i.user.account.displayText : null;
					l && u && (t(Object(f.j)({
						[e]: {
							isApproved: !0,
							approvedBy: u,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (Object(v.a)(i) ? await Object(m.a)(a(), e) : await Object(m.b)(n(), e)).ok ? t(Object(c.f)({
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
				}, C = (e, t) => async (s, r, n) => {
					let {
						apiContext: a,
						gqlContext: i
					} = n;
					const l = r(),
						u = l.features.comments.models[e],
						p = l.user.account ? l.user.account.displayText : null;
					u && p && (s(Object(f.j)({
						[e]: {
							approvedBy: null,
							bannedBy: p,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (Object(v.a)(l) ? await Object(m.h)(i(), e, t) : await Object(m.i)(a(), e, t)).ok ? s(Object(c.f)({
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
				}, x = e => async (t, s, r) => {
					let {
						apiContext: n
					} = r;
					const a = s().features.comments.models[e];
					if (!a) return;
					const i = a.ignoreReports ? m.l : m.e;
					t(Object(f.j)({
						[e]: {
							ignoreReports: !a.ignoreReports
						}
					})), (await i(n(), e)).ok ? t(Object(c.f)({
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
				}, j = (e, t, s) => async (n, a, i) => {
					let {
						gqlContext: d
					} = i;
					const l = Object(h.b)(a(), {
						commentId: e
					});
					if (!l) return;
					const m = s === r.ec.Snoozed,
						v = {
							itemId: e,
							reportText: t,
							isSnoozed: m
						};
					if ((await Object(u.a)(d(), {
							input: v
						})).ok) n(Object(f.j)({
						[e]: {
							userReports: Object(p.a)(l.userReports, t, m)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), b.b.Error);
						n(Object(c.f)(e))
					}
				}, k = (e, t, s) => async (o, n, i) => {
					let {
						apiContext: d,
						gqlContext: c
					} = i;
					const l = n(),
						u = l.features.comments.models[e];
					if (!u) return;
					const p = u.postId,
						b = l.postStickiedComments.data[p];
					o(Object(f.j)({
						[e]: {
							distinguishType: t,
							isAdmin: t === r.G.ADMIN,
							isMod: t === r.G.MODERATOR,
							isStickied: !!s
						}
					})), s && b && b !== e && o(Object(f.j)({
						[b]: {
							isStickied: !1
						}
					}));
					const h = Object(m.c)(c(), e, t),
						v = Object(m.d)(c(), e, !!s),
						g = [h];
					(s || !s && e === b) && g.push(v), (await Promise.all(g)).every(e => e.ok) ? s && o(y({
						id: e,
						postId: p,
						commentsPageKey: Object(a.a)(p, null, {
							sort: r.t.CONFIDENCE,
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
				r = s("./src/lib/makeListingKey/index.ts"),
				n = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				a = s("./src/lib/makeGqlRequest/index.ts"),
				i = s("./src/redditGQL/operations/OtherDiscussions.json"),
				d = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts");
			const c = Object(o.a)(n.a),
				l = Object(o.a)(n.b),
				m = Object(o.a)(n.c),
				u = (e, t) => async (s, o, n) => {
					let {
						gqlContext: u
					} = n;
					const p = o(),
						b = Object(r.a)(e, null, {
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
				return it
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return dt
			})), s.d(t, "commentsPagePending", (function() {
				return ct
			})), s.d(t, "commentsPageLoaded", (function() {
				return lt
			})), s.d(t, "commentsPageFailed", (function() {
				return mt
			})), s.d(t, "commentsPageRemoveLoadedFull", (function() {
				return ut
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
				return Ot
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return St
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/lib/autosubscribeLinks/index.tsx"),
				n = s("./src/reddit/actions/category/index.ts"),
				a = s("./src/reddit/actions/discoveryUnit.ts"),
				i = s("./src/reddit/actions/pages/subreddit.ts"),
				d = s("./src/reddit/actions/shortcuts/active.ts"),
				c = s("./src/reddit/actions/subredditModeration/modUserNotes.ts"),
				l = s("./src/reddit/actions/subredditSettings.ts"),
				m = s("./src/reddit/endpoints/governance/posts.ts"),
				u = s("./src/reddit/endpoints/page/commentsPage.ts"),
				p = s("./src/lib/makeGqlRequest/index.ts"),
				b = s("./src/redditGQL/operations/CommentsPageExtra.json");
			async function h(e, t) {
				return Object(p.a)(e, {
					...b,
					variables: t
				})
			}
			var v = s("./src/reddit/endpoints/page/subredditPage.ts"),
				g = s("./src/reddit/endpoints/profile/info.ts"),
				f = s("./src/reddit/models/Post/index.ts"),
				O = s("./src/lib/constants/index.ts"),
				S = s("./src/lib/pageTitle/index.ts"),
				w = s("./src/reddit/actions/economics/helpers/async.ts"),
				_ = s("./src/reddit/actions/externalAccount.ts"),
				y = s("./src/reddit/actions/modQueueTriggers/index.ts"),
				E = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				C = s("./src/reddit/actions/platform.ts"),
				x = s("./src/reddit/actions/post.ts"),
				j = s("./src/reddit/actions/profile/index.ts"),
				k = s("./src/reddit/actions/subreddit.ts"),
				I = s("./src/reddit/actions/subreddit/notifications.ts"),
				R = s("./src/reddit/actions/subreddit/questions.ts"),
				L = s("./src/reddit/actions/toaster.ts"),
				P = s("./src/reddit/constants/adEvents.ts"),
				T = s("./src/reddit/constants/graphql.ts"),
				N = s("./src/reddit/constants/parameters.ts"),
				M = s("./src/reddit/constants/posts.ts"),
				A = s("./src/reddit/helpers/commentList/index.ts"),
				D = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				F = s("./src/reddit/models/Comment/index.ts"),
				B = s("./src/reddit/models/Media/index.ts"),
				V = s("./src/reddit/models/Subreddit/index.ts"),
				U = s("./src/reddit/models/User/index.ts"),
				H = s("./src/reddit/selectors/category.ts"),
				G = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				q = s("./src/reddit/selectors/experiments/postSeo.ts"),
				K = s("./node_modules/reselect/es/index.js"),
				W = s("./src/reddit/constants/experiments.ts"),
				Q = s("./src/reddit/helpers/chooseVariant/index.ts"),
				J = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				X = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				z = s("./src/reddit/selectors/platform.ts"),
				Y = s("./src/reddit/selectors/removedPosts.ts");
			const Z = Object(K.a)(z.f, J.a, Y.a, Y.c, X.a, Y.e, X.b, (e, t, s, o, r, n, a) => {
				if (!e || !t || r) return !1;
				if (o) return !0;
				const i = n || a,
					d = t.score >= 2 || t.numComments >= 2;
				return !(!s || i || d)
			});
			var $ = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				ee = s("./src/reddit/selectors/moderatorPermissions.ts"),
				te = s("./src/reddit/selectors/posts.ts"),
				se = s("./src/reddit/selectors/subreddit.ts"),
				oe = s("./src/reddit/selectors/user.ts"),
				re = s("./src/lib/makeActionCreator/index.ts"),
				ne = s("./src/lib/makeCommentsPageKey/index.ts"),
				ae = s("./src/reddit/actions/ads/index.ts"),
				ie = s("./src/reddit/helpers/canonicalUrls.ts"),
				de = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ce = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				le = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				me = s("./src/lib/performanceTimings/index.tsx"),
				ue = s("./src/reddit/actions/gold/powerups.ts"),
				pe = s("./src/lib/makeListingKey/index.ts"),
				be = s("./src/reddit/actions/googleQASchema/constants.ts");
			const he = Object(re.a)(be.b),
				ve = Object(re.a)(be.a);
			var ge = s("./src/reddit/actions/linkedPosts/constants.ts");
			const fe = Object(re.a)(ge.a),
				Oe = Object(re.a)(ge.c),
				Se = Object(re.a)(ge.b);
			var we = s("./src/reddit/actions/otherDiscussions/index.ts"),
				_e = s("./src/reddit/actions/subreddit/constants.ts"),
				ye = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Ee = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: o,
						postId: r,
						post: n
					} = e;
					try {
						s({
							altText: n && n.media && (n.media.still && n.media.still.altText || n.media.obfuscated && n.media.obfuscated.altText) || null,
							postId: r
						})
					} catch (a) {
						o(a)
					}
				},
				Ce = s("./src/lib/makeLinkedPostsListingKey/index.ts"),
				xe = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				je = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var ke = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: o,
						postId: r,
						post: n
					} = e;
					try {
						const e = [],
							o = {},
							a = {};
						if (!n || !n.linked) return;
						const i = t(),
							d = i.posts && i.posts.models,
							c = Object(Ce.a)(r),
							l = n.linked.posts && n.linked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(xe.a)(t);
								o[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (o[e.crosspost.id] = e.crosspost)
							}
							if (Object(f.n)(t)) {
								const {
									subreddit: e
								} = t;
								a[e.id] = Object(je.a)(e)
							}
						}
						s({
							dist: n.linked.posts && n.linked.posts.dist || null,
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
				Ie = s("./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts"),
				Re = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Le = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var Pe = e => {
					let {
						isLinkedPostsFallback: t,
						getState: s,
						onSuccess: o,
						onFailure: r,
						options: n,
						postId: a,
						subreddit: i
					} = e;
					try {
						if (!i) return;
						const e = i.elements || i.posts,
							r = s(),
							d = ((e, t) => {
								const {
									edges: s
								} = e, o = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: o
								}
							})(e, r.posts && r.posts.models),
							c = Object(Re.a)(d),
							l = Le(c),
							m = e.edges.reduce((e, t) => (t.node.id && t.node.id !== a && e.push(t.node.id), e), []),
							{
								range: u,
								sort: p,
								subredditName: b
							} = n,
							h = t && a ? Object(Ce.a)(a, !0) : Object(pe.a)(b, O.W[p], {
								t: u
							});
						o({
							dist: e.dist,
							key: h,
							meta: r.meta,
							postIds: m,
							posts: l
						})
					} catch (d) {
						r(d)
					}
				},
				Te = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Ne = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Me = e => {
					let {
						getState: t,
						onSuccess: s,
						onFailure: o,
						postId: r,
						post: n
					} = e;
					try {
						const e = [],
							o = {},
							a = {};
						if (!n || !n.nsfwLinked) return;
						const i = t(),
							d = i.posts && i.posts.models,
							c = Object(Ne.a)(r),
							l = n.nsfwLinked.posts && n.nsfwLinked.posts.edges || [];
						for (const {
								node: t
							} of l) {
							if (!t || !t.id) break;
							if (e.push(t.id), !d.hasOwnProperty(t.id)) {
								const e = Object(xe.a)(t);
								o[t.id] = e.post, e.crosspost && !d.hasOwnProperty(e.crosspost.id) && (o[e.crosspost.id] = e.crosspost)
							}
							if (Object(f.n)(t)) {
								const {
									subreddit: e
								} = t;
								a[e.id] = Object(je.a)(e)
							}
						}
						s({
							dist: n.nsfwLinked.posts && n.nsfwLinked.posts.dist || null,
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
				Ae = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const De = Object(re.a)(Ae.b),
				Fe = Object(re.a)(Ae.a);
			var Be = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Ve = Object(re.a)(Be.b),
				Ue = Object(re.a)(Be.a),
				He = Object(re.a)(_e.j),
				Ge = Object(re.a)(_e.i),
				qe = (Object(re.a)(_e.r), Object(re.a)(_e.q), e => async (t, s, o) => {
					let {
						gqlContext: r
					} = o;
					var n, a, i, d;
					const {
						includeNSFWListingBelowExperiment: c,
						includeListingBelowExperiment: l,
						includeOtherDiscussions: m,
						includePostFeed: u,
						includePostQASchemaEligibilityFlag: b,
						listingBelowExperimentVariant: h,
						postId: v,
						range: g,
						sort: f,
						subredditName: S
					} = e, w = Object(pe.a)(v, null, {
						isOtherDiscussions: !0
					}), _ = s(), y = Object(te.z)(_, {
						listingKey: w
					}), E = m && (!y || 0 === y.length), C = Object(pe.a)(S, O.W[f], {
						t: g
					}), x = Object(te.z)(_, {
						listingKey: C
					}), j = u && (l || !x || 0 === x.length), k = l, I = c, R = Object(te.G)(_, {
						postId: v
					}), L = !!R && !!R.media && (Object(B.K)(R.media) || Object(B.F)(R.media)) && !R.media.altText;
					if (!(E || j || k || I || L || b)) return;
					E && t(Object(we.d)({
						key: w
					}));
					const P = await ((e, t) => Object(p.a)(e, {
							...ye,
							variables: t
						}))(r(), e),
						T = P.body,
						N = Object(Te.a)(h),
						M = k && !!(null === (i = null === (a = null === (n = T.data) || void 0 === n ? void 0 : n.post) || void 0 === a ? void 0 : a.linked) || void 0 === i ? void 0 : i.isEligible),
						A = k && (N || !M);
					b && (P.ok ? T.data && T.data.post && t(he({
						postId: v,
						isEligibleForQASchema: null !== (d = T.data.post.isEligibleForQASchema) && void 0 !== d && d
					})) : t(ve())), E && Object(Ie.a)({
						getState: s,
						onFailure: e => t(Object(we.b)(e)),
						onSuccess: e => t(Object(we.c)(e)),
						postId: v,
						response: P
					}), (j && !k || A) && (P.ok ? T.data && Pe({
						getState: s,
						isLinkedPostsFallback: A,
						onFailure: e => t(Ge(e)),
						onSuccess: e => t(He(e)),
						options: e,
						postId: v,
						subreddit: T.data.subreddit
					}) : t(Ge(P.error))), k && M && !N && P.ok && T.data && ke({
						getState: s,
						onFailure: e => t(Se(e)),
						onSuccess: e => t(Oe(e)),
						postId: v,
						post: T.data.post
					}), I && P.ok && Me({
						getState: s,
						onFailure: e => t(Ue(e)),
						onSuccess: e => t(Ve(e)),
						postId: v,
						post: T.data.post
					}), L && P.ok && T.data && Ee({
						getState: s,
						onFailure: e => t(Fe(e)),
						onSuccess: e => t(De(e)),
						postId: v,
						post: T.data.post
					}), k && t(fe({
						postId: v,
						isEligibleForLinkedPosts: M
					}))
				}),
				Ke = e => {
					var t, s;
					const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						r = o && Object(f.u)(o),
						{
							sortToUse: n
						} = Object(D.a)(e, r);
					return (!n || n === O.t.CONFIDENCE) && Object(Q.c)(e, {
						experimentEligibilitySelector: () => Object(oe.P)(e),
						experimentName: W.D
					}) === W.F.Enabled
				};
			var We = s("./src/reddit/selectors/chatPost.ts"),
				Qe = s("./src/reddit/selectors/seo/index.ts"),
				Je = s("./src/reddit/actions/pages/constants.ts"),
				Xe = s("./src/lib/initializeClient/installReducer.ts"),
				ze = s("./src/reddit/reducers/features/modUserNotes/index.ts"),
				Ye = s("./src/reddit/reducers/pages/comments/index.ts"),
				Ze = s("./src/reddit/selectors/experiments/autosubscribeLinks.ts"),
				$e = s("./src/reddit/selectors/experiments/newCommunityProgressV3.ts"),
				et = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				tt = s("./src/reddit/selectors/i18n/index.ts"),
				st = s("./src/reddit/helpers/isRobotIndexableMeta.ts"),
				ot = s("./src/reddit/helpers/locales.ts"),
				rt = s("./src/reddit/selectors/experiments/countrySites.ts"),
				nt = s("./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts"),
				at = s("./src/reddit/selectors/meta.ts");
			Object(Xe.a)({
				pages: {
					comments: Ye.a
				}
			}), Object(Xe.a)({
				features: {
					modUserNotes: ze.a
				}
			});
			const it = 25,
				dt = 100,
				ct = Object(re.a)(Je.h),
				lt = Object(re.a)(Je.f),
				mt = Object(re.a)(Je.e),
				ut = Object(re.a)(Je.i),
				pt = (e, t, s) => {
					const o = !e,
						r = Object(te.G)(t, {
							postId: s
						}).belongsTo,
						n = Object(se.M)(t, {
							identifier: r
						}),
						a = Object(Qe.c)(t, {
							identifier: r
						}),
						i = !!Object(Te.c)(t),
						d = Object(tt.a)(t),
						c = Object(nt.b)(t),
						l = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return i ? (l.listingBelow = a || o, l.postFeed = l.listingBelow) : d ? l.nsfwListingBelow = !0 : l.postFeed = (a || o) && (!Object(V.i)(n) && !Object(We.d)(t, {
						postId: s
					}) && !!n || !Object(z.i)(t) && Object(q.e)(t)), e && (l.postQASchema = Object(q.d)(t)), c && (l.listingBelow = !0), l
				},
				bt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				ht = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				vt = e => async (t, s) => {
					var a, i;
					const {
						partialPostId: l,
						partialCommentId: m
					} = e.params, {
						subredditName: u
					} = e.params || "", p = l ? Object(f.u)(l) : "", b = m && Object(F.h)(m), {
						path: h,
						queryParams: v
					} = e, g = Object(E.d)(h), {
						instanceId: w
					} = v, {
						hasSortParam: y,
						sortToUse: I
					} = Object(D.a)(s(), p), L = null === (i = null === (a = Object(z.b)(s())) || void 0 === a ? void 0 : a.routeMatch) || void 0 === i ? void 0 : i.route.chunk, P = ["context", "depth", "limit", N.e].reduce((e, t) => {
						const s = parseInt(v[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: u,
						hasSortParam: y,
						instanceId: w,
						include_categories: !0
					});
					y && (P.sort = I), P.onOtherDiscussions = g, t(x.r(p)), Object(Ze.a)(s()) && t(Object(r.a)(e.queryParams, u)), await t(ft(p, b, P, I));
					const A = s().posts.models[p],
						V = Object(oe.Q)(s());
					if (A && "subreddit" === A.belongsTo.type) {
						const e = A.belongsTo.id,
							o = Object(me.i)(() => t(Object(ue.m)(e, {
								fullData: !0,
								includeIdentity: V
							})), {
								name: "subredditPowerupsRequested",
								page: L,
								isLoggedIn: V
							});
						await o;
						const r = s();
						if (!Object(z.i)(r)) {
							Object($e.a)(r) && t(Object(R.b)(e))
						}
						Object(ee.j)(r, e) && await t(Object(c.c)(p))
					}
					if (A) {
						const r = ((e, t) => {
								const s = Object(te.U)(e, {
										postId: t
									}),
									o = Object(te.G)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), p),
							a = Object(se.M)(s(), {
								identifier: A.belongsTo
							});
						if (a && (e => W.ff.Redirect === Object(Q.b)(e, {
								experimentEligibilitySelector: Z,
								experimentName: W.Ye
							}))(s())) return void t(Object(o.c)(a.url));
						if ((A.media && A.media.type) === B.o.LIVEVIDEO) {
							const e = `/rpan${A.belongsTo.type===M.a.SUBREDDIT?a.url:"/"}${Object(f.v)(A.id)}`;
							return void t(Object(o.c)(e))
						}
						if (A.belongsTo.type !== M.a.SUBREDDIT || A.isSponsored) {
							if (A.belongsTo.type === M.a.PROFILE) {
								const e = Object(me.i)(() => t(j.d(a.name)), {
									name: "getProfileInfo",
									page: L,
									isLoggedIn: V
								});
								await e
							}
						} else {
							if (!!!Object(se.T)(s(), {
									subredditId: A.belongsTo.id
								})) {
								const e = Object(me.i)(() => t(k.o(a.name)), {
									name: "getSubredditRules",
									page: L,
									isLoggedIn: V
								});
								await e
							}
						}
						const i = pt(!1, s(), p),
							c = g;
						if (bt(c, i)) {
							Object(de.d)(de.a.LinkedPosts);
							const e = Object(de.c)(de.a.LinkedPosts);
							Object(de.d)(de.a.NsfwLinkedPosts);
							const o = Object(de.c)(de.a.NsfwLinkedPosts),
								r = {
									adContext: {
										layout: T.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: p
									},
									range: O.ic.WEEK.toUpperCase(),
									sort: O.P.TOP,
									subredditName: a.name
								},
								n = {
									postId: p
								},
								d = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(Te.c)(s())
								};
							Object(nt.b)(s()) && (d.listingBelowVersion = "LINKED_POSTS_VERSION_SIDE_RAIL");
							const l = {
									nsfwListingBelowCorrelationId: o,
									nsfwListingBelowExperimentVariant: Object(et.a)(s())
								},
								m = ht(i);
							Object(me.i)(() => t(qe({
								...n,
								...r,
								...d,
								...l,
								...m,
								includeOtherDiscussions: c
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: V,
								page: L
							});
							0
						}
						t(Object(_.p)()), t(C.m({
							title: r
						}));
						const l = s().posts.instances[p] ? e.queryParams.instanceId : A.postId;
						t(Object(d.b)(l)); {
							const e = Object(H.c)(s(), {
								subredditName: a.name
							});
							await Promise.all(e.map(e => t(n.b(e))))
						}
					} else t(C.m({
						title: S.e()
					}));
					const {
						routePrefix: U
					} = e.params;
					M.b[U] === M.a.PROFILE ? Object(ie.d)(s(), t, e) : Object(ie.b)(s(), t, e)
				}, gt = ["SubredditPost", "ProfilePost", "DeletedSubredditPost"], ft = (e, t, s, o) => async (r, n, d) => {
					var c, l;
					const p = n(),
						b = Object(ne.a)(e, t, s),
						{
							subredditName: f
						} = s,
						S = p.pages.comments.keyToHeadCommentId.hasOwnProperty(b),
						_ = p.pages.comments.api.fullyLoaded[b],
						E = p.pages.comments.api.error[b],
						j = p.pages.comments.api.pending[b],
						k = !Object(oe.P)(p),
						R = Object(oe.k)(p),
						T = o === O.t.CHAT,
						N = !!p.platform.lastPage;
					if ((j || S && !E) && !(T && N)) {
						if (S && !p.sidebarPromotedPosts.firstFetch) {
							const e = Object(z.i)(p) ? le.a.COMMENTS_OVERLAY : le.a.COMMENTS;
							window.addEventListener("load", () => {
								r(Object(ae.b)(e))
							})
						}
						return void(_ || r(St(e, t, s)))
					}
					r(a.g());
					const M = p.user.prefs.commentMode;
					r(ct({
						key: b,
						postId: e,
						commentMode: M
					}));
					const D = {
						...s,
						...T ? {
							sort: O.t.LIVE
						} : k ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(te.G)(n(), {
							postId: e
						});
						t && t.numComments && t.numComments > dt && (D.truncate = it)
					}
					const F = null === (l = null === (c = Object(z.b)(p)) || void 0 === c ? void 0 : c.routeMatch) || void 0 === l ? void 0 : l.route.chunk,
						B = Object(me.i)(() => Object(u.a)(d.apiContext(), e, t, D, Object(G.a)(n()), Ke(n())), {
							name: "fetchCommentsPage",
							isLoggedIn: !k,
							page: F
						}),
						V = !k && R && Object(me.i)(() => Object(g.d)(d.gqlContext(), Object(U.e)(R)), {
							name: "fetchProfileKarma",
							isLoggedIn: !k,
							page: F
						}) || null,
						H = Object(me.i)(() => h(d.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: !k,
							page: F
						});
					let q, K, W, Q;
					if ([q, K, W] = await Promise.all([B, V, H]), r(Object(C.n)(q.status)), q.ok) {
						const t = Object.keys(q.body.posts).filter(e => !!q.body.posts[e].isMeta),
							s = q.body.posts[e];
						if (t.length) {
							const e = Object(me.i)(() => Object(m.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: F,
									isLoggedIn: !k
								}),
								o = await e;
							o.ok && (Q = o.body)
						}
						if (K && K.ok) {
							const {
								data: e
							} = K.body, t = {
								karma: {
									...g.a
								}
							};
							if (Object(g.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							q.body && q.body.account && Object.assign(q.body.account, t)
						}
						if (W && W.ok) {
							const {
								data: t
							} = W.body;
							if (t.postInfoById && gt.includes(t.postInfoById.__typename) && (q.body.posts[e] = {
									...q.body.posts[e],
									...t.postInfoById
								}), t.postInfoById && "SubredditPost" === t.postInfoById.__typename) {
								const e = t.postInfoById.subreddit.detectedLanguage;
								Object(at.d)(p) && e && Object(rt.f)(p) && await Object(ot.a)(e, r);
								const {
									id: s,
									isEligibleForContentBlocking: o
								} = t.postInfoById.subreddit;
								r(Object(I.a)({
									subredditAboutInfo: {
										[s]: {
											isEligibleForContentBlocking: o
										}
									}
								}))
							}
						}
						const o = Object(A.a)(q.body, e, p),
							{
								postMeta: n
							} = q.body;
						q.body.posts[e] = {
							...q.body.posts[e],
							isRobotIndexable: Object(st.a)(n, e)
						}, r(lt({
							key: b,
							postId: e,
							meta: p.meta,
							governance: Q,
							shouldCollapse: o,
							...q.body
						}))
					} {
						const o = Object(te.G)(n(), {
							postId: e
						});
						o && q.body.comments && Object.keys(q.body.comments).length < o.numComments ? r(St(e, t, s)) : q.ok && r(Ot({
							key: b
						}));
						const a = Object(z.i)(p) ? le.a.COMMENTS_OVERLAY : le.a.COMMENTS;
						r(Object(ae.b)(a))
					}
					if (q.ok) {
						r(L.g(b));
						const t = Object(te.G)(n(), {
								postId: e
							}),
							s = Object.keys(q.body.comments);
						if (r(x.z(t, P.a.CommentsView)), Object(ee.i)(n(), {
								subredditId: t.belongsTo.id
							}) && r(Object(y.a)({
								commentIds: s,
								postIds: [e]
							})), t && "subreddit" === t.belongsTo.type && q.body.comments) {
							const e = Object(me.i)(() => r(Object(w.a)({
								commentIds: s,
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: F,
								isLoggedIn: !k
							});
							await e
						}
					} else {
						let e;
						f && (r(Object(i.subredditPending)({
							key: b
						})), e = await Object(ce.a)("subreddit", () => Object(v.a)(d.apiContext(), f, {})), r(Object(C.n)(e.status)), r(Object(i.handleSubredditPageApiError)(e, f))), r(mt({
							error: q.error,
							key: b,
							...e ? e.body : q.body
						}))
					}
				}, Ot = Object(re.a)(Je.g), St = (e, t, s) => async (o, r, n) => {
					var a, i;
					const d = Object(ne.a)(e, t, s),
						c = r(),
						m = Object(oe.Q)(c),
						p = Object(oe.k)(c),
						b = null === (i = null === (a = Object(z.b)(r())) || void 0 === a ? void 0 : a.routeMatch) || void 0 === i ? void 0 : i.route.chunk,
						v = Object(u.a)(n.apiContext(), e, t, s, Object(G.a)(c), Ke(c)),
						f = m && p && Object(g.d)(n.gqlContext(), Object(U.e)(p)) || null,
						O = Object(me.i)(() => h(n.gqlContext(), {
							postId: e
						}), {
							name: "fetchCommentsPageExtra",
							isLoggedIn: m,
							page: b
						}),
						[S, _, y] = await Promise.all([v, f, O]);
					if (S.ok) {
						if (_ && _.ok) {
							const {
								data: e
							} = _.body, t = {
								karma: {
									...g.a
								}
							};
							if (Object(g.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							S.body && S.body.account && Object.assign(S.body.account, t)
						}
						if (y && y.ok) {
							const {
								data: t
							} = y.body;
							S.body.posts[e] = {
								...S.body.posts[e],
								...t.postInfoById
							}
						}
						const t = Object(A.a)(S.body, e, c);
						o(lt({
							key: d,
							postId: e,
							meta: c.meta,
							shouldCollapse: t,
							...S.body
						})), o(Ot({
							key: d
						}));
						const s = r().posts.models[e],
							n = s && Object(te.U)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && n && Object($.a)(c, {
							subredditId: n.id
						}) && o(Object(l.h)(n.name, n.id)), s && "subreddit" === s.belongsTo.type && S.body.comments && await o(Object(w.a)({
							commentIds: Object.keys(S.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(mt({
						error: S.error,
						key: d,
						...S.body
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/page.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "publicAccessNetworkRequested", (function() {
				return i
			}));
			var o = s("./src/lib/pageTitle/index.ts"),
				r = (s("./src/reddit/actions/pages/subreddit.ts"), s("./src/reddit/actions/platform.ts")),
				n = (s("./src/reddit/actions/publicAccessNetwork/streams.ts"), s("./src/reddit/actions/users.ts")),
				a = s("./src/reddit/selectors/user.ts");
			const i = e => async (e, t) => {
				const s = t(),
					i = o.l();
				e(r.m({
					title: i
				})), Object(a.Q)(s) || await e(n.t())
			}
		},
		"./src/reddit/actions/publicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return u
			})), s.d(t, "a", (function() {
				return O
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "d", (function() {
				return w
			})), s.d(t, "e", (function() {
				return _
			})), s.d(t, "f", (function() {
				return E
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/query-string/index.js"),
				r = s.n(o),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				d = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				l = s("./src/reddit/selectors/subreddit.ts");
			const m = new Set(["home", "r/popular"]),
				u = e => {
					const t = location && location.search || "",
						s = r.a.parse(t);
					m.has(e) && (s.related = e);
					const o = r.a.stringify(s);
					return o ? `?${o}` : ""
				},
				p = Object(n.a)(a.N),
				b = Object(n.a)(a.y),
				h = Object(n.a)(a.O),
				v = Object(n.a)(a.z),
				g = Object(n.a)(a.M),
				f = Object(n.a)(a.L),
				O = Object(n.a)(a.t),
				S = Object(n.a)(a.u),
				w = e => async (t, s, o) => {
					let {
						gqlContext: r
					} = o;
					const n = Object(d.g)(e),
						a = s();
					if (Object(c.d)(a, n)) return;
					t(p(n));
					const l = await Object(i.e)(r(), n),
						m = Date.now();
					if (l.ok && l.body && l.body.data) {
						const e = l.body.data;
						t(b({
							model: e,
							utcTimeStamp: m
						}))
					} else t(x({
						streamId: n,
						error: l.error,
						utcTimeStamp: m
					}))
				}, _ = (e, t) => async (s, o) => s(y(e, t)), y = (e, t) => async (s, o, r) => {
					let {
						gqlContext: n
					} = r;
					const a = o();
					if (Object(c.f)(a)) return;
					s(h());
					const d = await Object(i.f)(n(), e, t),
						l = Date.now();
					if (d.ok && d.body && d.body.data) {
						const t = d.body.data;
						s(v({
							listingName: e,
							models: t,
							utcTimeStamp: l
						}))
					} else s(j({
						error: d.error,
						utcTimeStamp: l
					}))
				}, E = (e, t) => async (s, o) => s(C(e, t)), C = (e, t) => async (s, o, r) => {
					let {
						gqlContext: n
					} = r;
					const a = o();
					if (Object(c.f)(a)) return;
					s(h());
					const d = Date.now(),
						m = e.replace("r/", ""),
						u = Object(l.F)(a, m),
						p = await Object(i.b)(n(), {
							subredditId: u,
							options: t
						}),
						b = p.body;
					p.ok && b && b.data || s(j({
						error: p.error,
						utcTimeStamp: d
					}));
					const g = b.data.liveVideoFeed.posts.edges.map(e => (async (e, t) => {
							const s = await Object(i.e)(e, t),
								o = Date.now(),
								r = s.body;
							return r && r.data ? r.data : void x({
								streamId: t,
								error: s.error,
								utcTimeStamp: o
							})
						})(n(), e.node.id)),
						f = (await Promise.all(g)).filter(e => void 0 !== typeof e);
					s(v({
						listingName: e,
						models: f,
						utcTimeStamp: d
					}))
				}, x = e => async t => {
					t(g(e))
				}, j = e => async t => {
					t(f(e))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return d
			})), s.d(t, "a", (function() {
				return c
			})), s.d(t, "b", (function() {
				return l
			}));
			var o = s("./node_modules/uuid/v4.js"),
				r = s.n(o),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(n.a)(a.B),
				d = e => async t => {
					t(i(e))
				}, c = () => async e => {
					e(i({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(i({
						correlationId: r()()
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
				return re
			})), s.d(t, "addRemovalReason", (function() {
				return ne
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
				return Oe
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return Se
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return we
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return _e
			})), s.d(t, "submitRemovalReason", (function() {
				return ye
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Ee
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./node_modules/redux/es/redux.js");
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
				f = Object(n.c)({
					error: v,
					pending: g
				});
			const O = {};
			var S = function() {
				let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
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
							...r
						} = e;
						return r
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
							order: r
						} = o;
						return {
							...e,
							[s]: r
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
						} = t.payload, r = [...e[s]].filter(e => e !== o);
						return {
							...e,
							[s]: r
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
				E = Object(n.c)({
					api: f,
					models: S,
					reasonOrder: _,
					removedItemIds: y
				}),
				C = s("./src/lib/constants/index.ts"),
				x = s("./src/lib/makeActionCreator/index.ts"),
				j = s("./src/lib/makeCommentsPageKey/index.ts"),
				k = s("./src/lib/makeDraftKey/index.ts"),
				I = s("./src/reddit/actions/bulkActions/index.ts"),
				R = s("./src/reddit/actions/comment/index.ts"),
				L = s("./src/reddit/actions/comment/authoring.ts"),
				P = s("./src/reddit/actions/comment/moderation.ts"),
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
					method: C.jb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				H = (e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
					endpoint: Object(V.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: C.jb.POST,
					type: "json",
					data: t
				});
			var G = s("./src/reddit/helpers/isPost.ts"),
				q = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				K = s("./src/reddit/helpers/routeKey/index.ts"),
				W = s("./src/reddit/models/ModQueue/index.ts"),
				Q = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/RemovalReason/index.ts"),
				X = s("./src/reddit/models/Toast/index.ts"),
				z = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: E
				}
			});
			const Z = Object(x.a)("REMOVALREASONS__LOAD_PENDING"),
				$ = Object(x.a)(a),
				ee = Object(x.a)("REMOVALREASONS__LOAD_FAILED"),
				te = e => async (t, s, o) => {
					let {
						apiContext: r
					} = o;
					const n = s().subreddits.models[e].name;
					t(Z());
					const a = await ((e, t) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: C.jb.GET
					}))(r(), n);
					a.ok ? t($({
						subredditId: e,
						response: a.body
					})) : t(ee(a.error))
				}, se = Object(x.a)(i), oe = Object(x.a)(d), re = Object(x.a)(c), ne = (e, t) => async (s, r, n) => {
					let {
						apiContext: a
					} = n;
					const i = r().subreddits.models[e].name;
					s(se());
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: C.jb.POST,
						data: s
					}))(a(), i, t);
					if (d.ok) {
						const {
							id: r
						} = d.body, n = {
							...t,
							id: r
						};
						s(oe({
							subredditId: e,
							reason: n
						})), s(Object(M.f)({
							kind: X.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(re(d.error))
				}, ae = Object(x.a)(l), ie = Object(x.a)(m), de = Object(x.a)(u), ce = (e, t) => async (s, r, n) => {
					let {
						apiContext: a
					} = n;
					const i = r().subreddits.models[e].name;
					s(ae());
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: C.jb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(a(), i, t);
					d.ok ? (s(ie({
						subredditId: e,
						reason: t
					})), s(Object(M.f)({
						kind: X.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(de(d.error))
				}, le = Object(x.a)(p), me = Object(x.a)(b), ue = Object(x.a)(h), pe = (e, t) => async (s, r, n) => {
					let {
						apiContext: a
					} = n;
					const i = r().subreddits.models[e].name;
					s(le());
					const d = await ((e, t, s) => Object(D.a)(Object(F.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: C.jb.DELETE
					}))(a(), i, t);
					d.ok ? (s(me({
						subredditId: e,
						reasonId: t
					})), s(Object(M.f)({
						kind: X.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(ue(d.error))
				}, be = Object(x.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, o, r) => {
					let {
						apiContext: n
					} = r;
					const a = o();
					a.features.removalReasons.reasonOrder[e] && a.features.removalReasons.reasonOrder[e].length > 0 || s(te(e)), s(be({
						subredditId: e,
						itemIds: t
					})), s(Object(T.i)(A.a.ADD_REMOVAL_REASON))
				}, ve = Object(x.a)("REMOVALREASONS__SUBMIT_PENDING"), ge = Object(x.a)("REMOVALREASONS__SUBMIT_SUCCESS"), fe = Object(x.a)("REMOVALREASONS__SUBMIT_FAILED"), Oe = Object(x.a)("REMOVALREASONS__MESSAGE_PENDING"), Se = Object(x.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), we = Object(x.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), _e = Object(x.a)("REMOVALREASONS__MESSAGE_FAILED"), ye = (e, t, s, o, r) => async (n, a, i) => {
					let {
						apiContext: d
					} = i;
					const c = a(),
						l = c.user.account && c.user.account.displayText,
						m = e[0],
						u = Object(G.a)(m) ? J.e.Post : J.e.Comment,
						p = u === J.e.Post ? c.posts.models[m] : c.features.comments.models[m],
						b = u === J.e.Post ? N.S : R.j;
					if (!p || !l) return !1;
					n(ve()), n(b({
						[m]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: l
						}
					}));
					const h = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						v = await U(d(), h);
					if (v.ok) {
						if (n(ge()), t) {
							n(Oe());
							const r = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								a = await H(d(), Object(J.h)(r, u), u);
							if (a.ok) {
								if (o === J.f.Public) {
									if (n(we()), a.body) {
										const e = Object(q.a)(a.body),
											t = {
												comment: e,
												parentId: m
											},
											s = Object(Y.f)(c),
											o = c.platform.currentPage && c.platform.currentPage.routeMatch;
										let r = s && o && Object(K.a)(o, c, c.posts.models[e.postId]);
										if (r || (r = Object(j.a)(e.postId, null, {
												sort: C.u,
												hasSortParam: !0
											})), u === J.e.Post) {
											const s = Object(k.a)(Q.c.replyToPost, m);
											n(Object(L.r)({
												...t,
												headCommentId: Object(z.w)(c, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: s
											}));
											const o = c.postStickiedComments.data[m];
											n(Object(P.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), o && o !== e.id && n(Object(R.j)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (u === J.e.Comment) {
											const e = Object(k.a)(Q.c.replyToComment, p.id),
												s = Object(z.j)(c, {
													commentId: m,
													commentsPageKey: r
												});
											n(Object(L.p)({
												...t,
												parentCommentId: m,
												commentsPageKey: r,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else n(Se());
								return !0
							}
							return n(_e(a.error)), !1
						}
					} else n(fe(v.error)), n(b({
						[m]: {
							modNote: p.modNote,
							modRemovalReason: p.modRemovalReason,
							modReasonBy: p.modReasonBy
						}
					}));
					return !1
				}, Ee = (e, t, s, r, n) => async (a, i, d) => {
					let {
						apiContext: c
					} = d;
					const l = i(),
						m = l.user.account && l.user.account.displayText;
					if (!m) return;
					a(ve());
					const u = Object(M.f)({
							kind: X.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						p = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						b = await U(c(), p);
					if (b.ok) {
						const o = {
							ids: e,
							operation: W.a.RemovalReason,
							username: m,
							options: {
								modNote: n,
								removalReason: t && t.title
							}
						};
						if (a(Object(I.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: r
								},
								n = await H(c(), Object(J.h)(o, J.e.Bulk), J.e.Bulk);
							n.ok ? (a(Se()), a(u)) : a(_e(n.error))
						} else a(u)
					} else a(fe(b.error))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/loadableAction/index.ts");
			const r = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				a = Object(o.a)(() => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/shortcuts/constants.ts");
			const n = Object(o.a)(r.a),
				a = Object(o.a)(r.b)
		},
		"./src/reddit/actions/subreddit/notifications.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "b", (function() {
				return v
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/makeActionCreator/index.ts"),
				n = s("./src/reddit/actions/notificationSettingsLayout/index.ts"),
				a = s("./src/reddit/actions/notificationsInbox/index.ts"),
				i = s("./src/reddit/actions/subreddit/constants.ts"),
				d = s("./src/reddit/actions/toaster.ts"),
				c = s("./src/reddit/endpoints/subreddit/notificationSettings.ts"),
				l = s("./src/reddit/models/Subreddit/index.ts"),
				m = s("./src/reddit/models/Toast/index.ts");
			const u = Object(r.a)(i.u),
				p = Object(r.a)(i.t),
				b = Object(r.a)(i.s),
				h = e => {
					switch (e) {
						case l.c.OFF:
							return o.fbt._("Unfollowed. You won’t get updates on new activity anymore.", null, {
								hk: "3e1CJR"
							});
						case l.c.FREQUENT:
							return o.fbt._("Followed! Now you’ll get updates on new activity.", null, {
								hk: "3JzOOa"
							});
						case l.c.LOW:
							return o.fbt._("Success! You will see fewer notifications from this community in the future.", null, {
								hk: "4x3TS8"
							});
						default:
							return null
					}
				};
			const v = e => {
				let {
					subredditId: t,
					notificationLevel: s,
					successCallback: r,
					undoCallback: i
				} = e;
				return async (e, v, g) => {
					let {
						gqlContext: f
					} = g;
					var O, S, w;
					e(p());
					const _ = (e => {
							switch (e) {
								case l.c.FREQUENT:
									return {
										isSubredditUpdatesInterestingPostEnabled: !0, isUpdateFromSubredditEnabled: !0
									};
								case l.c.LOW:
									return {
										isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !0
									};
								case l.c.OFF:
								default:
									return {
										isSubredditUpdatesInterestingPostEnabled: !1, isUpdateFromSubredditEnabled: !1
									}
							}
						})(s),
						y = await Object(c.b)(f(), t, _);
					if ((null === (S = null === (O = y.error) || void 0 === O ? void 0 : O.fields) || void 0 === S ? void 0 : S.length) || function(e) {
							return Boolean(e && e.data && e.data.updateSubredditNotificationSettings)
						}(y.body) && (null === (w = y.body.data.updateSubredditNotificationSettings.errors) || void 0 === w ? void 0 : w.length)) return e(b()), e(Object(d.f)({
						kind: m.b.Error,
						text: o.fbt._("Failed to change the frequency of notifications from this community, please try again.", null, {
							hk: "4avFFV"
						})
					}));
					y.ok && (e(Object(n.c)({
						subredditId: t,
						notificationLevel: s
					})), e(u({
						subredditAboutInfo: {
							[t]: {
								notificationLevel: s
							}
						}
					})), r && r(), e(i ? Object(d.f)(Object(d.e)(h(s), m.b.Undo, o.fbt._("Undo", null, {
						hk: "46OwLP"
					}), Object(a.i)(t, i))) : Object(d.f)(Object(d.e)(h(s), m.b.SuccessCommunityGreen))))
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => r.a.createElement(a.b, {
				className: Object(n.a)(e.className, d.a.container, e.text.length >= e.maxChars ? d.a.mOverflow : null)
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
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
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
				return r.a.createElement("div", {
					className: Object(n.a)(t, u.a.Wrapper, {
						[u.a.LiveStreamingWrapper]: s
					})
				}, r.a.createElement("span", {
					className: Object(n.a)(u.a.Copy, {
						[u.a.LiveStreamingCopy]: s
					})
				}, p._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), r.a.createElement("div", {
					className: u.a.CTAButtons
				}, r.a.createElement(c.t, {
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
				})), r.a.createElement(c.t, {
					className: Object(n.a)(u.a.SignupLink, {
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
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
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
				v = Object(n.b)(h);
			t.a = i.a.wrapped(v(e => {
				let {
					account: t,
					className: s,
					height: o,
					icon: n,
					isLivestreaming: a,
					isNSFW: i,
					trash: p,
					userId: h,
					width: v
				} = e;
				const g = a ? 36 : 20,
					f = h || `${null==t?void 0:t.id}`,
					O = {
						height: o || g,
						width: v || g,
						minWidth: v || g
					};
				if (p) return r.a.createElement("div", {
					className: s,
					style: O
				}, r.a.createElement(u.a, {
					className: b.a.TrashIcon
				}));
				const S = t && t.id === h ? t.accountIcon : i ? l.a : null != n ? n : void 0;
				return Object(m.a)(S) ? r.a.createElement("div", {
					className: s,
					style: O
				}, r.a.createElement(c.a, {
					headshot: S
				})) : r.a.createElement("div", {
					className: s,
					style: O
				}, r.a.createElement(d.a, {
					userId: f,
					defaultImage: S
				}))
			}), "ChatIcon", b.a)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = Object(o.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatPost~CollectionCommentsPage~CommentsPage~EconTopAwardersModal~ModQueuePages~ModerationPages~Post~38f39fb8"), s.e("ChatMessageInput~ChatPost"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
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
		"./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				O = s.n(f);
			class S extends r.Component {
				render() {
					const {
						className: e,
						count: t,
						iconUrl: s,
						isAnimated: o
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(O.a.container, e, {
							[O.a.isAnimated]: o
						})
					}, n.a.createElement(g.a, {
						className: O.a.gildIcon
					}), o && s && n.a.createElement("div", {
						className: O.a.awardingIcon,
						style: {
							backgroundImage: `url("${s}")`
						}
					}), t ? n.a.createElement("div", {
						className: O.a.count
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
			}))(S);
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
				y = e => ({
					initialCommentAwardIds: e.isFullyLoaded ? [...e.commentAwardIds] : [],
					initialPostAwardCount: e.isFullyLoaded ? e.postAwardCount : 0,
					prevIsFullyLoaded: e.isFullyLoaded,
					prevPostId: e.postId
				});
			class E extends r.Component {
				constructor(e) {
					super(e), this.state = y(e)
				}
				static getDerivedStateFromProps(e, t) {
					return t.prevPostId !== e.postId || !t.prevIsFullyLoaded && e.isFullyLoaded ? y(e) : null
				}
				render() {
					const {
						initialPostAwardCount: e,
						initialCommentAwardIds: t
					} = this.state, {
						postAwardCount: s,
						commentAwardIds: o,
						className: r,
						isFullyLoaded: a
					} = this.props;
					if (!a) return n.a.createElement(w, {
						className: r,
						count: 0
					});
					const i = Math.max(s, e + o.length - t.length),
						d = o.length - 1,
						c = o[d],
						l = o.length !== t.length;
					return n.a.createElement(w, {
						awardId: c,
						className: r,
						count: i,
						isAnimated: l,
						key: d
					})
				}
			}
			var C = _(E),
				x = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				j = s.n(x);
			t.a = e => {
				let {
					postId: t,
					showSubmitInsideTextArea: r,
					isLivestreaming: c,
					handleGiveAward: l,
					sendEvent: m
				} = e;
				return n.a.createElement(i.e, {
					className: Object(a.a)(j.a.ChatButton, {
						[j.a.LivestreamingChatButton]: c,
						[j.a.leftPad]: !r
					}),
					"aria-label": o.fbt._("give award", null, {
						hk: "1nXRWY"
					}),
					onClick: async e => {
						e.stopPropagation();
						const o = Object(d.d)(d.a.GildingFlow, !0);
						l(o);
						const {
							clickGildEvent: r,
							clickRpanGiveAward: n
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						m((c ? n : r)(t))
					}
				}, n.a.createElement(C, {
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
				r = s.n(o),
				n = s("./src/higherOrderComponents/makeAsync.tsx"),
				a = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = a.a.div("LoaderWrapper", c.a),
				m = a.a.div("Icon", c.a),
				u = a.a.div("Byline", c.a),
				p = Object(n.a)({
					ErrorComponent: () => r.a.createElement(l, null, r.a.createElement(m, null), r.a.createElement(u, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~ChatMessageInput~CommentRichUnit~FlairEdit~MembershipPaywallPage~PostCreation~PostRichUnit~R~9deab1a0"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : r.a.createElement(l, null, r.a.createElement(m, null), r.a.createElement(u, null))
					}
				});
			t.a = e => r.a.createElement(p, e)
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
				Reply: "_1VGxfswi7Ejb0tozdhOhnJ",
				reply: "_1VGxfswi7Ejb0tozdhOhnJ",
				isLivestreaming: "_1pHXu-8skDLlMxqw7GXg9W",
				ReplyComment: "_3vHha2uHlOOSaJHExNUTkt",
				replyComment: "_3vHha2uHlOOSaJHExNUTkt",
				CloseIconWrap: "_3SwwKU0q7pRO0pohludkXl",
				closeIconWrap: "_3SwwKU0q7pRO0pohludkXl",
				ReplyAuthor: "_11cxPUL8P03UB2QLjnVQA1",
				replyAuthor: "_11cxPUL8P03UB2QLjnVQA1",
				isLivePostCommentV2: "_2XKKoOyCjVl8x5yDW_X0jG",
				ReplyAvatar: "YyoT3oARMLSlanYs7VFpr",
				replyAvatar: "YyoT3oARMLSlanYs7VFpr",
				icon: "PcmnI5P64G9FEvzKigvkP"
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
				return w
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				v = s("./src/reddit/components/OverflowMenu/index.m.less"),
				g = s.n(v);
			const f = c.a.wrapped(u.a, "_Dropdown", g.a),
				O = Object(m.a)(f),
				S = c.a.button("MenuButton", g.a),
				w = c.a.wrapped(p.b, "DropdownRow", g.a),
				_ = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(h.b)(s)(e)
					}
				}),
				y = Object(a.b)(_, (e, t) => {
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
			t.b = y(e => n.a.createElement(S, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": o.fbt._("more options", null, {
					hk: "2EnY1x"
				}),
				className: Object(d.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: E(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : n.a.createElement(b.a, {
				name: "overflow_horizontal",
				className: g.a.MenuIcon
			}), n.a.createElement(O, {
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
				return n
			})), s.d(t, "b", (function() {
				return a
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			const n = Object(o.createContext)({
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
					return r.a.createElement(n.Provider, {
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
				return r
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = "rpan-download-obs-modal",
				n = Object(o.a)({
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
			t.b = n
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
				return r
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const r = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				n = Object(o.a)({
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
			t.b = n
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
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
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
				v = e => n.a.createElement(p, null, n.a.createElement(b, null, e.dropdownLabel), e.selectedReason && n.a.createElement(h, null, e.selectedReason)),
				g = a.a.wrapped(i.a, "Dropdown", u.a),
				f = a.a.wrapped(c.b, "DropdownTriangle", u.a),
				O = a.a.wrapped(d.b, "DropdownRow", u.a),
				S = a.a.button("DropdownContainer", u.a);
			t.a = e => n.a.createElement(S, {
				onClick: e.onToggleDropdown
			}, n.a.createElement(v, {
				dropdownLabel: e.isLoading ? o.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : o.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), n.a.createElement(f, null), e.isDropdownOpen && n.a.createElement(g, {
				isOverlay: !0
			}, n.a.createElement(O, {
				displayText: o.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, s) => n.a.createElement(O, {
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
				buttonRow: "_3zZmX0EjloIkzwt2-sRI2_"
			}
		},
		"./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "dispatcher", (function() {
				return I
			})), s.d(t, "selector", (function() {
				return R
			})), s.d(t, "connector", (function() {
				return L
			})), s.d(t, "CharacterCountdown", (function() {
				return P
			})), s.d(t, "EmptyState", (function() {
				return T
			})), s.d(t, "MessageInput", (function() {
				return B
			})), s.d(t, "FormOptionsContainer", (function() {
				return H
			})), s.d(t, "ModalFooter", (function() {
				return G
			})), s.d(t, "ButtonRow", (function() {
				return K
			})), s.d(t, "AddRemovalReasonModal", (function() {
				return W
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/removalReasons/index.ts"),
				l = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				b = s("./src/reddit/controls/RadioInput/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				v = s("./src/reddit/controls/TextButton/index.tsx"),
				g = s("./src/reddit/icons/fonts/Info/index.tsx"),
				f = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				O = s("./src/reddit/models/RemovalReason/index.ts"),
				S = s("./src/reddit/selectors/removalReasons.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				y = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				E = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				C = s.n(E);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), j = e => {
				switch (e) {
					case O.f.Private:
						return "private_subreddit";
					case O.f.PrivateExposed:
						return "private_personal";
					default:
						return e
				}
			}, k = {
				isDropdownOpen: !1,
				message: "",
				modNote: "",
				removalType: O.f.Public,
				selectedReason: null
			}, I = e => ({
				submitBulkRemovalReason: (t, s, o, r, n) => e(Object(c.submitBulkRemovalReason)(t, s, o, r, n)),
				submitRemovalReason: (t, s, o, r, n) => e(Object(c.submitRemovalReason)(t, s, o, r, n))
			}), R = Object(a.c)({
				currentUserName: e => {
					const t = Object(_.k)(e);
					if (t) return t.displayText
				},
				isLoading: S.a,
				removalReasons: S.c,
				subredditName: (e, t) => {
					let {
						subredditId: s
					} = t;
					return Object(w.U)(e, {
						subredditId: s
					}).name
				}
			}), L = Object(n.b)(R, I), P = d.a.wrapped(l.a, "CharacterCountdown", C.a), T = d.a.div("EmptyState", C.a), N = d.a.wrapped(m.o, "ModNoteDescription", C.a), M = d.a.wrapped(u.l, "PrimaryButton", C.a), A = d.a.wrapped(h.a, "RadioOption", C.a), D = d.a.span("BoldText", C.a), F = d.a.wrapped(m.t, "ModNoteInput", C.a), B = d.a.wrapped(m.t, "MessageInput", C.a), V = d.a.wrapped(g.a, "Info", C.a), U = d.a.div("SmallInfoText", C.a), H = d.a.div("FormOptionsContainer", C.a), G = d.a.wrapped(m.g, "ModalFooter", C.a), q = d.a.div("FooterRow", C.a), K = d.a.wrapped(q, "ButtonRow", C.a);
			class W extends r.a.Component {
				constructor(e) {
					super(e), this.onSelectRemovalType = e => {
						this.setState({
							removalType: e
						}), this.props.trackClick(`type_${j(e)}`)()
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
					}, this.canSave = () => !(this.state.message.length > O.a || this.state.modNote.length > O.b) && (this.state.selectedReason ? this.state.message.trim().length > 0 : this.state.modNote.trim().length > 0), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.canSave()) {
							(t.removalContextType === O.e.Bulk ? e.submitBulkRemovalReason : e.submitRemovalReason)(e.itemIds, t.selectedReason, t.message.trim(), t.removalType, t.modNote.trim()), e.trackClick("sent")(), t.selectedReason && e.trackClick(`sent_${j(t.removalType)}`)(), t.modNote && e.trackClick("sent_modnote")(), e.toggleModal()
						}
					}, this.onCancel = () => {
						this.props.toggleModal(), this.props.trackClick("cancel")()
					}, this.renderRemovalTypeOptions = () => {
						const {
							props: e,
							state: t
						} = this, s = [];
						return t.removalContextType !== O.e.Bulk && s.push(r.a.createElement(A, {
							key: O.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: O.f.Public
						}, r.a.createElement("div", null, t.removalContextType === O.e.Post ? x._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : x._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), s.push(r.a.createElement(A, {
							key: O.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: O.f.Private
						}, r.a.createElement("div", null, x._("Private: send a Modmail from {subredditName} to the user", [x._param("subredditName", r.a.createElement(D, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && s.push(r.a.createElement(A, {
							key: O.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: O.f.PrivateExposed
						}, r.a.createElement("div", null, x._("Private: send a Modmail from {currentUserName} to the user", [x._param("currentUserName", r.a.createElement(D, null, `u/${e.currentUserName}`))], {
							hk: "wFSJr"
						})))), s
					}, this.state = {
						...k,
						removalContextType: Object(O.g)(e.itemIds)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(m.e, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && r.a.createElement(m.i, null, r.a.createElement(f.a, null, r.a.createElement(m.q, null, x._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && x._("({number of items} posts/comments)", [x._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), r.a.createElement(v.a, {
						onClick: this.onCancel
					}, r.a.createElement(m.b, null)))), r.a.createElement(m.l, null, e.isLoading || e.removalReasons.length > 0 ? r.a.createElement(y.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : r.a.createElement(T, null, x._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), r.a.createElement(p.default, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, r.a.createElement(u.r, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, x._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && r.a.createElement(H, null, r.a.createElement(m.h, null, r.a.createElement(b.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), r.a.createElement(B, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), r.a.createElement(P, {
						maxChars: O.a,
						text: t.message.trim()
					}), r.a.createElement(U, null, t.removalType !== O.f.Public && r.a.createElement(r.a.Fragment, null, r.a.createElement(V, null), x._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), r.a.createElement(G, null, r.a.createElement(q, null, r.a.createElement(N, null, x._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), r.a.createElement(q, null, r.a.createElement(F, {
						placeholder: x._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), r.a.createElement(q, null, r.a.createElement(P, {
						maxChars: O.b,
						text: t.modNote.trim()
					})), r.a.createElement(K, null, r.a.createElement(u.o, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, x._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(M, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, x._("Submit", null, {
						hk: "4aU3dh"
					})))))
				}
			}
			t.default = Object(i.a)(L(W))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/constants/colors.ts");
			const n = {
				backgroundColor: r.a.overlayReportFlow
			};
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
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
				r = s("./src/reddit/constants/colors.ts");
			const n = {
					backgroundColor: r.a.overlayReportFlow
				},
				a = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Governance~ModListing~Reddit~ReportFlow~Subreddit"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
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
				return O
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "j", (function() {
				return w
			}));
			var o = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				n = s.n(r);
			const a = o.a.section("FormPage", n.a),
				i = o.a.h1("HomePageTitle", n.a),
				d = o.a.button("HomePageBreadcrumb", n.a),
				c = o.a.div("HomePageGroup", n.a),
				l = o.a.h1("FormPageTitle", n.a),
				m = o.a.div("FormPageSection", n.a),
				u = o.a.div("FormGroup", n.a),
				p = o.a.h2("FormGroupTitle", n.a),
				b = o.a.div("FormElement", n.a),
				h = o.a.div("FormGroupDescription", n.a),
				v = o.a.div("FormItem", n.a),
				g = o.a.h3("FormElementTitle", n.a),
				f = o.a.div("FormElementDescription", n.a),
				O = o.a.div("FormElementError", n.a),
				S = o.a.div("FormElementSubGroup", n.a),
				w = o.a.li("FormListItem", n.a)
		},
		"./src/reddit/constants/chat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var o;
			! function(e) {
				e.None = "none", e.Compact = "compact", e.Full = "full_screen"
			}(o || (o = {}));
			var r;
			! function(e) {
				e.SubredditChatNotifcationFtux = "chat_subreddit_notification_ftux"
			}(r || (r = {}))
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = e => {
				let {
					edges: t
				} = e;
				const s = [];
				for (const {
						node: r
					} of t) s.push(Object(o.f)(r));
				return s
			}
		},
		"./src/reddit/helpers/handleOtherDiscussionsResponse/index.ts": function(e, t, s) {
			"use strict";
			var o = s("./src/lib/makeListingKey/index.ts"),
				r = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				n = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
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
									const s = Object(n.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: o
									} = e;
									if (o && o.type === d.a.Post && o.postInfo) {
										const e = Object(n.f)(o.postInfo);
										t.posts[e.id] = e
									}
									return Object(d.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(a.a)(e.profile)) : Object(d.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(i.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(r.a)(e.subreddit))), s.id
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
				bodyFontMono: "_386ITOzsDX5wQo_sJfUExR"
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
				return O
			})), s.d(t, "x", (function() {
				return S
			})), s.d(t, "r", (function() {
				return w
			})), s.d(t, "p", (function() {
				return _
			})), s.d(t, "q", (function() {
				return y
			})), s.d(t, "o", (function() {
				return E
			})), s.d(t, "z", (function() {
				return C
			})), s.d(t, "s", (function() {
				return x
			})), s.d(t, "y", (function() {
				return j
			})), s.d(t, "G", (function() {
				return k
			})), s.d(t, "t", (function() {
				return I
			})), s.d(t, "c", (function() {
				return R
			})), s.d(t, "n", (function() {
				return L
			})), s.d(t, "k", (function() {
				return P
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
			var o, r = s("./src/reddit/constants/chat.ts"),
				n = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				a = s("./src/reddit/selectors/telemetry.ts");
			! function(e) {
				e.Theater = "theater", e.DU = "discovery_unit", e.Feed = "feed_post"
			}(o || (o = {}));
			const i = (e, t) => {
					if (t) {
						const s = a.A(e, t.post.id),
							o = a.H(e, t.post.id),
							r = a.gb(e);
						if (t.post.authorInfo && o && (o.authorId = t.post.authorInfo.id), s) {
							s.streamPublicId = t.stream.stream_id, s.id = t.stream.stream_id;
							const o = Object(n.j)(e, {
								streamIdFromPath: t.post.id
							});
							o === n.a.LIVE ? s.type = "stream_live" : o === n.a.VOD ? s.type = "stream_vod" : o === n.a.UNAVAILABLE && (s.type = "stream_unavailable")
						}
						return {
							post: o,
							media: s,
							subreddit: r
						}
					}
					return {
						subreddit: a.gb(e)
					}
				},
				d = (e, t, s) => {
					if (!t || !s) return;
					const o = Object(n.j)(e, {
							streamIdFromPath: t.post.id
						}),
						a = t.chat_disabled || s.chatState === r.a.None;
					return {
						id: s.id,
						sessionDurationMs: s.sessionDurationMs,
						watchDurationMs: s.watchDurationMs,
						heartbeatDurationMs: s.heartbeatDurationMs,
						isLive: o === n.a.LIVE,
						playheadOffsetMs: s.playheadOffsetMs,
						timestampMs: s.timestampMs,
						startTimeMs: s.startTimeMs,
						volume: s.volume,
						chatState: a ? r.a.None : r.a.Compact,
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
				f = (e, t, s, o) => r => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(r, t, s),
					...c(r),
					...i(r, t),
					actionInfo: a.d(r, {
						referralId: o
					})
				}),
				O = (e, t, s) => o => ({
					source: "stream_player",
					action: "click",
					noun: e,
					playback: d(o, t, s),
					...c(o),
					...i(o, t)
				}),
				S = e => t => ({
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
				y = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "report",
					playback: d(s, e, t),
					...c(s),
					...i(s, e)
				}),
				E = (e, t) => s => ({
					source: "stream_player",
					action: "click",
					noun: "chat",
					playback: d(s, e, t),
					...i(s, e)
				}),
				C = e => t => {
					const s = Object(n.l)(t, e);
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
				j = (e, t) => s => ({
					source: "stream_player",
					action: "scrub",
					noun: "video",
					playback: d(s, e, t),
					...c(s)
				}),
				k = e => t => ({
					source: "post",
					action: "view",
					noun: "post",
					profile: a.Q(t),
					screen: a.Y(t),
					...i(t, e)
				}),
				I = e => t => {
					const s = i(t, e);
					return {
						source: "post",
						action: "consume",
						noun: "post",
						profile: a.Q(t),
						screen: a.Y(t),
						...s
					}
				},
				R = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "follow",
					...i(t, e)
				}),
				L = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "unfollow",
					...i(t, e)
				}),
				P = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "subscribe",
					...i(t, e),
					targetSubreddit: a.gb(t)
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
				return n
			}));
			var o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const n = () => e => ({
				...Object(r.n)(e),
				source: "post",
				action: o.c.CLICK,
				noun: "share_chat",
				subreddit: Object(r.gb)(e)
			})
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/icons/fonts/index.tsx");

			function a() {
				return (a = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var o in s) Object.prototype.hasOwnProperty.call(s, o) && (e[o] = s[o])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => r.a.createElement(n.a, a({
				name: "award"
			}, e))
		},
		"./src/reddit/icons/fonts/Info/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(n.b)("info",e.isFilled)} ${e.className}`
			})
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				d = s.n(i);
			t.a = e => r.a.createElement("i", {
				className: Object(n.a)(Object(a.b)("share", e.isFilled), d.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/svgs/Pagination/back.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("path", {
				d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, r.a.createElement("g", {
				stroke: "none"
			}, r.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", {
				fill: "inherit"
			}, r.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);

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
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);

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
			var o = s("./node_modules/react/index.js"),
				r = s.n(o);

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
				return r
			})), s.d(t, "d", (function() {
				return n
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
			const r = 50,
				n = 50,
				a = 1e4,
				i = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
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
						type: e.type
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
				r = s.n(o),
				n = s("./node_modules/react-redux/es/index.js"),
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
				O = s("./src/higherOrderComponents/withMux/index.tsx"),
				S = s("./src/lib/addQueryParams/index.ts");
			var w = e => {
					if (!e || !e.isConnected) return;
					const t = e.hasAttribute("tabindex");
					t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
				},
				_ = s("./src/lib/focusVisible/index.js"),
				y = s("./src/lib/VideoSession/util.ts"),
				E = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				C = s("./src/reddit/actions/chat/toggle.ts"),
				x = s("./src/reddit/actions/media.ts"),
				j = s("./src/reddit/actions/modal.ts"),
				k = s("./src/reddit/actions/profile/index.ts"),
				I = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				R = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				L = s("./src/lib/makeActionCreator/index.ts");
			const P = Object(L.a)(R.E),
				T = Object(L.a)(R.X),
				N = e => async t => {
					t(P(e))
				}, M = Object(L.a)(R.P), A = Object(L.a)(R.V);
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
				Q = s("./src/reddit/helpers/localStorage/index.ts"),
				J = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				X = s("./src/reddit/components/PublicAccessNetwork/Modals/ChatMute/index.m.less"),
				z = s.n(X);
			const Y = G.a.div("Image", z.a),
				Z = G.a.wrapped(q.g, "ModalFooter", z.a),
				$ = G.a.wrapped(q.i, "ModalHeader", z.a),
				ee = G.a.wrapped(q.l, "ModalMain", z.a);
			var te = Object(H.a)(e => {
					let {
						toggleModal: t
					} = e;
					const s = () => {
						Q.Sb(), t()
					};
					return r.a.createElement(q.e, null, r.a.createElement($, null, r.a.createElement(J.a, null, r.a.createElement("div", null, r.a.createElement("div", {
						className: z.a.Title
					}, h.fbt._("Get ready to chat!", null, {
						hk: "1lebCx"
					})), r.a.createElement(q.p, null, h.fbt._("Before jumping in, keep these tips in mind.", null, {
						hk: "3evsT7"
					}))), r.a.createElement(W.a, {
						onClick: s
					}, r.a.createElement(q.b, null)))), r.a.createElement(ee, null, r.a.createElement("span", null, r.a.createElement("span", null, r.a.createElement("div", {
						className: z.a.SubTitle
					}, h.fbt._("Remember the human", null, {
						hk: "3oHyEM"
					})), r.a.createElement(q.o, null, h.fbt._("We're all (internet) friends here, so enjoy chatting and remember that rules still apply.", null, {
						hk: "3df1qF"
					}))), r.a.createElement(Y, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/heart-rainbow.png")`
						}
					})), r.a.createElement("span", null, r.a.createElement("span", null, r.a.createElement("div", {
						className: z.a.SubTitle
					}, h.fbt._("Look out for each other", null, {
						hk: "hrE04"
					})), r.a.createElement(q.o, null, h.fbt._("If you see any harrassment or abuse, report it by pressing and holding on the message.", null, {
						hk: "12gD31"
					}))), r.a.createElement(Y, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/award_beagle.png")`
						}
					})), r.a.createElement("span", null, r.a.createElement("span", null, r.a.createElement("div", {
						className: z.a.SubTitle
					}, h.fbt._("Have fun!", null, {
						hk: "20HtGT"
					})), r.a.createElement(q.o, null, h.fbt._("Chat, lol, debate, discuss human nature or quantum physics... it's all up to you.", null, {
						hk: "3Aj4Z7"
					}))), r.a.createElement(Y, {
						style: {
							backgroundImage: `url("${b.a.assetPath}/img/award_celebrate.png")`
						}
					}))), r.a.createElement(Z, {
						className: z.a.ModalFooter
					}, r.a.createElement(K.l, {
						onClick: s,
						className: z.a.Button,
						"data-redditstyle": !0
					}, h.fbt._("Start Chatting", null, {
						hk: "3n2GtA"
					}))))
				}),
				se = s("./src/reddit/helpers/styles/mixins/fonts.m.less"),
				oe = s.n(se),
				re = s("./src/reddit/icons/svgs/Close/index.tsx"),
				ne = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/index.m.less"),
				ae = s.n(ne);
			var ie = e => {
					let {
						onClickLearnMore: t,
						onClickDismiss: s,
						isDark: o = !1
					} = e;
					return r.a.createElement("div", {
						className: Object(d.a)(ae.a.banner, {
							[ae.a.dark]: o
						})
					}, r.a.createElement("div", null, h.fbt._("{=Download the RPAN studio} desktop application to broadcast live from your computer.", [h.fbt._param("=Download the RPAN studio", r.a.createElement("span", {
						className: oe.a.strongTextFont
					}, h.fbt._("Download the RPAN studio", null, {
						hk: "1rcEDr"
					})))], {
						hk: "ODJOz"
					})), r.a.createElement(K.t, {
						className: ae.a.bannerButton,
						kind: K.b.Button,
						priority: K.c.Primary,
						onClick: t,
						"data-redditstyle": !0
					}, h.fbt._("Learn more", null, {
						hk: "1Ri9Pi"
					})), r.a.createElement(re.a, {
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
				ge = s("./src/reddit/selectors/telemetry.ts"),
				fe = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"),
				Oe = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				Se = s("./src/reddit/controls/InternalLink/index.tsx"),
				we = s("./src/reddit/components/PublicAccessNetwork/Modals/EndBroadcast/EndBroadcastStyles.m.less"),
				_e = s.n(we);
			const {
				fbt: ye
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ee = Object(n.b)(fe.selector, fe.dispatcher), Ce = G.a.wrapped(q.g, "EndBroadcastModalFooter", _e.a), xe = G.a.wrapped(q.t, "EndBroadcastMessageInput", _e.a);
			class je extends fe.AddRemovalReasonModal {
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.isLoading || e.removalReasons.length > 0;
					return r.a.createElement(q.e, {
						onClick: this.closeDropdown
					}, s && r.a.createElement(q.i, null, r.a.createElement(J.a, null, r.a.createElement(q.q, null, ye._("Remove broadcast", null, {
						hk: "1JfCvD"
					})), r.a.createElement(W.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, r.a.createElement(q.b, null)))), r.a.createElement(q.l, null, s ? r.a.createElement(Oe.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : r.a.createElement(fe.EmptyState, null, ye._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), r.a.createElement(Se.default, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, r.a.createElement(K.r, {
						onClick: e.toggleRemovalReasonModal,
						"data-redditstyle": !0
					}, ye._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: _e.a.MessageHeader
					}, ye._("Message to the broadcaster", null, {
						hk: "bGz26"
					})), r.a.createElement(fe.FormOptionsContainer, null, r.a.createElement(xe, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), r.a.createElement(fe.CharacterCountdown, {
						maxChars: be.a,
						text: t.message.trim()
					})))), r.a.createElement(Ce, null, r.a.createElement(fe.ButtonRow, null, r.a.createElement(q.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, ye._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(q.u, {
						onClick: () => {
							t.selectedReason && this.props.submitRemoval(t.selectedReason, t.message)
						},
						disabled: !this.canSave()
					}, ye._("Remove", null, {
						hk: "3tYl0U"
					})))))
				}
			}
			var ke = Object(H.a)(Ee(je));
			const {
				fbt: Ie
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Re = Object(i.c)({
				isConfirmationModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(ve.a)(e),
				isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(ve.a)(e)
			}), Le = Object(n.b)(Re, (e, t) => {
				let {
					subredditId: s,
					postId: o
				} = t;
				return {
					submitRemovalReason: async (t, s, o) => {
						const r = await e(Object(le.submitRemovalReason)([t], s, o, be.f.Private, ""));
						e(r ? Object(me.f)({
							kind: he.b.SuccessEndBroadcast,
							text: Ie._("Broadcast ended", null, {
								hk: "313j6x"
							})
						}) : Object(me.f)({
							text: Ie._("Toast:", null, {
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
					toggleRemovalReasonModal: () => e(Object(j.i)("rpan-add-removal-reason-id")),
					toggleConfirmationModal: () => e(Object(j.i)("rpan-end-broadcast-confirmation-id")),
					onRemovePost: () => e(Object(ce.U)(o, !1))
				}
			});
			class Pe extends r.a.Component {
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
					return r.a.createElement(ue.a, {
						headerText: Ie._("Are you sure you want to remove this broadcast?", null, {
							hk: "1Wcei3"
						}),
						modalText: Ie._("This can't be undone.", null, {
							hk: "2HfakZ"
						}),
						actionText: Ie._("Yes, remove", null, {
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
					return r.a.createElement(ke, {
						submitRemoval: this.onSubmitRemovalReasons,
						toggleRemovalReasonModal: this.props.toggleRemovalReasonModal,
						toggleConfirmationModal: this.props.toggleConfirmationModal,
						itemIds: [this.props.postId],
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleRemovalReasonModal,
						trackClick: ((e, t, s) => o => () => this.props.sendEvent(r => ({
							source: e,
							action: "click",
							noun: o,
							post: s && Object(ge.H)(r, s),
							screen: Object(ge.Y)(r),
							subreddit: Object(ge.hb)(r, t)
						})))("removal_reasons", this.props.subredditId, this.props.postId)
					})
				}
				render() {
					return this.props.isRemovalReasonModalOpen ? this.renderRemovalReasonModal() : this.props.isConfirmationModalOpen ? this.renderConfirmationModal() : r.a.createElement("div", null)
				}
			}
			var Te, Ne = Object(H.a)(Le(Object(pe.c)(Pe))),
				Me = s("./src/reddit/components/ReportFlow/index.tsx"),
				Ae = s("./src/reddit/components/ReportFlow/new.tsx"),
				De = s("./src/reddit/constants/history.ts"),
				Fe = s("./src/reddit/constants/keycodes.ts"),
				Be = s("./src/reddit/constants/parameters.ts"),
				Ve = s("./src/reddit/helpers/dom/index.ts"),
				Ue = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				He = s("./src/reddit/helpers/trackers/rpan.ts"),
				Ge = s("./src/reddit/helpers/trackers/screenview.ts"),
				qe = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ke = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				We = s("./src/reddit/selectors/media.ts"),
				Qe = s("./src/reddit/selectors/platform.ts"),
				Je = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				Xe = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				ze = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts"),
				Ye = s("./src/reddit/selectors/user.ts");
			! function(e) {
				e[e.CRITICAL = 0] = "CRITICAL", e[e.LOW = 1] = "LOW", e[e.NORMAL = 2] = "NORMAL", e[e.EXTENDED = 3] = "EXTENDED"
			}(Te || (Te = {}));
			const Ze = 60,
				$e = 30,
				et = 3 * Ze,
				tt = 5 * Ze,
				st = 5,
				ot = 5 * Ze,
				rt = 10,
				nt = 5;
			var at = s("./node_modules/uuid/v4.js"),
				it = s.n(at),
				dt = s("./src/lib/makeCommentsPageKey/index.ts"),
				ct = s("./src/reddit/actions/gold/modals.ts"),
				lt = s("./src/reddit/actions/moderatingSubreddits.ts"),
				mt = s("./src/reddit/endpoints/publicAccessNetwork/index.ts");
			const ut = e => async (t, s, o) => {
				let {
					apiContext: r
				} = o;
				const n = await Object(mt.j)(r(), e, !0);
				n && n.ok ? t(Object(me.f)({
					kind: he.b.SuccessLockComment,
					text: h.fbt._("Comments locked", null, {
						hk: "3WAk9Y"
					}),
					buttonText: h.fbt._("UNDO", null, {
						hk: "3Kk8Xw"
					}),
					buttonAction: pt(e)
				})) : t(Object(me.f)(Object(me.e)(h.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), he.b.Error)))
			}, pt = e => async (t, s, o) => {
				let {
					apiContext: r
				} = o;
				const n = await Object(mt.j)(r(), e, !1);
				n && n.ok ? t(Object(me.f)({
					kind: he.b.SuccessUnlockComment,
					text: h.fbt._("Comments unlocked", null, {
						hk: "rEYa1"
					}),
					buttonText: h.fbt._("UNDO", null, {
						hk: "OXk5v"
					}),
					buttonAction: ut(e)
				})) : t(Object(me.f)(Object(me.e)(h.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), he.b.Error)))
			};
			var bt = s("./src/reddit/actions/subscription/index.ts"),
				ht = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				vt = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				gt = s("./src/reddit/constants/posts.ts"),
				ft = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Ot = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				St = s("./src/reddit/routes/postCreation/constants.ts"),
				wt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_t = s("./src/reddit/selectors/subreddit.ts"),
				yt = s("./src/reddit/selectors/comments.ts"),
				Et = s("./src/reddit/selectors/commentSelector.ts"),
				Ct = s("./src/reddit/selectors/communityAwards.ts"),
				xt = s("./src/reddit/models/Gold/Award.ts");
			var jt = e => e < 500 || !e ? xt.e.Silver : e < 1800 ? xt.e.Gold : xt.e.Platinum,
				kt = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				It = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less"),
				Rt = s.n(It);
			const {
				fbt: Lt
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Pt(e) {
				const {
					awardName: t,
					giverName: s,
					giverId: o,
					tier: n,
					className: a
				} = e, i = n === xt.e.Silver ? Rt.a.silverTierAttribution : n === xt.e.Gold ? Rt.a.goldTierAttribution : Rt.a.platinumTierAttribution;
				return r.a.createElement("div", {
					className: Object(d.a)(a, Rt.a.tierAttribution, i),
					role: "presentation"
				}, n !== xt.e.Silver && r.a.createElement(kt.a, {
					className: Rt.a.giverIcon,
					userId: o,
					width: 16,
					height: 16
				}), r.a.createElement("span", null, n !== xt.e.Silver && Lt._("{giverName} gave {space}", [Lt._param("giverName", s), Lt._param("space", " ")], {
					hk: "SzDdi"
				}), r.a.createElement("strong", {
					className: Rt.a.awardName
				}, t)))
			}
			var Tt = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Nt = s("./src/reddit/icons/svgs/Star/index.tsx"),
				Mt = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				At = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less"),
				Dt = s.n(At);

			function Ft(e) {
				const {
					iconUrl: t,
					tier: s,
					className: o
				} = e, n = s === xt.e.Silver ? Dt.a.silverTierAwardIcon : s === xt.e.Gold ? Dt.a.goldTierAwardIcon : Dt.a.platinumTierAwardIcon, a = s !== xt.e.Silver, i = s === xt.e.Platinum;
				return r.a.createElement("div", {
					className: Object(d.a)(o, Dt.a.tierAwardIcon),
					role: "presentation"
				}, r.a.createElement("div", {
					className: Dt.a.awardIconContainer
				}, a && r.a.createElement(r.a.Fragment, null, r.a.createElement(Nt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundStar)
				}), r.a.createElement(Mt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundStar, Dt.a.backgroundStar2)
				})), r.a.createElement("img", {
					src: t,
					className: n
				}), i && r.a.createElement(r.a.Fragment, null, r.a.createElement(Tt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundSparkle, Dt.a.sparkleBottomLeft)
				}), r.a.createElement(Tt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundSparkle, Dt.a.sparkleTopRight)
				}), r.a.createElement(Tt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundSparkle, Dt.a.sparkleBottomRight)
				}))))
			}
			var Bt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less"),
				Vt = s.n(Bt);

			function Ut(e) {
				const {
					award: t,
					className: s,
					giverId: o,
					giverName: n
				} = e, a = jt(t.coinPrice), i = t.icon128 ? t.icon128.url : t.icon.url;
				return r.a.createElement("div", {
					className: Object(d.a)(s, Vt.a.container),
					role: "presentation"
				}, r.a.createElement(Ft, {
					iconUrl: i,
					tier: a,
					className: Vt.a.awardIconAnimation
				}), r.a.createElement(Pt, {
					awardName: t.name,
					className: Vt.a.attributionAnimation,
					giverId: o,
					giverName: n,
					tier: a
				}))
			}
			var Ht = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less"),
				Gt = s.n(Ht);
			class qt extends o.Component {
				render() {
					const {
						award: e,
						className: t,
						giverName: s,
						giverId: o
					} = this.props;
					return e && o && s ? r.a.createElement("div", {
						className: Object(d.a)(t, Gt.a.awardOverlay),
						role: "presentation"
					}, r.a.createElement(Ut, {
						award: e,
						giverId: o,
						giverName: s
					})) : null
				}
			}
			var Kt = Object(n.b)(() => Object(i.a)(e => e, Et.b, (e, t) => {
					if (!t) return {};
					const {
						associatedAwardId: s,
						author: o,
						authorId: r
					} = t;
					return {
						award: s ? Object(Ct.a)(e, s) : void 0,
						giverId: r,
						giverName: o
					}
				}))(qt),
				Wt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less"),
				Qt = s.n(Wt);
			const Jt = Object(n.b)(() => Object(i.c)({
					awardedCommentLinks: (e, t) => {
						let {
							commentsPageKey: s
						} = t;
						return Object(yt.g)(e, {
							commentsPageKey: s
						}).filter(t => {
							const s = Object(Et.b)(e, {
								commentId: t.id
							});
							return !!s && !!s.associatedAwardId
						})
					},
					isFullyLoaded: yt.u
				})),
				Xt = e => ({
					prevAwardedCommentLinks: e.isFullyLoaded ? [...e.awardedCommentLinks] : void 0,
					prevAwardedCommentLinksTopIndex: e.isFullyLoaded ? e.awardedCommentLinks.length : 0,
					prevCommentsPageKey: e.commentsPageKey
				});
			class zt extends o.Component {
				constructor(e) {
					super(e), this.state = Xt(e)
				}
				shouldComponentUpdate(e) {
					const {
						awardedCommentLinks: t,
						commentsPageKey: s
					} = this.props;
					return e.commentsPageKey !== s || e.awardedCommentLinks.length !== t.length
				}
				static getDerivedStateFromProps(e, t) {
					if (e.commentsPageKey !== t.prevCommentsPageKey) return Xt(e);
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
					const n = e.slice(o);
					return n.length ? r.a.createElement("div", {
						className: Object(d.a)(t, Qt.a.awardOverlaySpectacle),
						role: "presentation"
					}, n.map(e => r.a.createElement(Kt, {
						className: Qt.a.awardOverlay,
						commentId: e.id,
						key: e.id
					}))) : null
				}
			}
			var Yt = Jt(zt);
			const Zt = (e, t) => e > t ? Te.EXTENDED : e < et ? Te.CRITICAL : e < tt ? Te.LOW : Te.NORMAL,
				$t = e => e / Ze,
				es = e => ts(e) % ot == 0,
				ts = e => Math.round(e / st) * st;
			var ss = s("./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less"),
				os = s.n(ss);
			const rs = (() => {
					const e = [];
					for (let t = 1; t < 11; t++) e.push(`Delay${t}`);
					return e
				})(),
				ns = (() => {
					const e = [];
					for (let t = 0; t < 21; t++) e.push(`X${5*t}`);
					return e
				})(),
				as = ["15Deg", "45Deg", "75Deg"],
				is = e => e[Math.floor(Math.random() * e.length)],
				ds = () => {
					const e = [is(ns), is(as), is(rs)].map(e => os.a[`particle${e}`]).join(" ");
					return `${os.a.particle} ${e} ${Math.round(Math.random())?os.a.particleReverse:""}`
				},
				cs = 40,
				ls = 20;
			class ms extends r.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < cs; t++) e.push(this.createParticle(t, "particleSm"));
					for (let t = 0; t < ls; t++) e.push(this.createParticle(t, "particleLg"));
					return r.a.createElement("div", {
						className: os.a.particleWrapper
					}, e)
				}
				createParticle(e, t) {
					return r.a.createElement("div", {
						key: `${t}-${e}`,
						className: `${ds()} ${os.a[t]}`
					})
				}
			}
			var us = ms;
			const ps = () => ({
				estimatedTimeRemaining: null,
				previouslyVisible: !1,
				visible: !1,
				streamId: null,
				timerPausedAt: null,
				timerDiff: 0,
				timer: null,
				pillLabel: null
			});
			class bs extends o.Component {
				constructor() {
					super(...arguments), this.state = ps(), this.timerId = 0
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
					return t || s > 0 || es(e) || e < tt
				}
				static getPillLabel(e, t) {
					const {
						currentStream: s,
						overlayOpen: o
					} = e, {
						timerDiff: r,
						timer: n
					} = t;
					if (!s || !s.meter || null === n) return null;
					if (r > 0) {
						if (r < Ze) {
							const e = ts(r);
							return h.fbt._({
								"*": "+{seconds time added} seconds airtime given",
								_1: "+1 second airtime given"
							}, [h.fbt._plural(e, "seconds time added")], {
								hk: "4zE2Hn"
							})
						} {
							const e = Math.round($t(r));
							return h.fbt._({
								"*": "+{minutes time added} minutes airtime given",
								_1: "+1 minute airtime given"
							}, [h.fbt._plural(e, "minutes time added")], {
								hk: "17ep0a"
							})
						}
					}
					if (n > s.meter.full_meter_duration) {
						const e = Math.round($t(s.meter.full_meter_duration)).toLocaleString();
						return h.fbt._("{number of minutes}+ minutes airtime left", [h.fbt._param("number of minutes", e)], {
							hk: "2Tjt0F"
						})
					}
					if (es(n) && !o && n > tt) {
						const e = Math.round($t(n)).toLocaleString();
						return h.fbt._("{number of minutes} minutes airtime left", [h.fbt._param("number of minutes", e)], {
							hk: "3DZxvE"
						})
					}
					const a = Math.round(n),
						i = Math.floor($t(a)),
						d = a % Ze,
						c = `${i}:${d<10?"0":""}${d}`;
					return h.fbt._("{mm:ss timestamp of remaining time} airtime left", [h.fbt._param("mm:ss timestamp of remaining time", c)], {
						hk: "1J5pOH"
					})
				}
				static getDerivedStateFromProps(e, t) {
					if (!e.currentStream || !e.currentStream.meter) return ps();
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
						return t.pillLabel = bs.getPillLabel(e, t), t
					}
					const r = {
						timer: t.timer,
						timerDiff: t.timerDiff,
						timerPausedAt: t.timerPausedAt
					};
					if (o > t.estimatedTimeRemaining) {
						const e = t.estimatedTimeRemaining - t.timer,
							s = o - t.estimatedTimeRemaining + e;
						s > st && (r.timer = o, r.timerDiff = s, r.timerPausedAt = o)
					}
					o !== t.estimatedTimeRemaining && Math.abs(r.timer - o) > rt && (r.timer = o, r.timerDiff = o - t.timer, r.timerPausedAt = null), null !== r.timerPausedAt && r.timerPausedAt - r.timer > nt && (r.timerDiff = 0, r.timerPausedAt = null);
					const n = bs.getPillLabel(e, r),
						a = bs.isPillVisible(r.timer, e.overlayOpen, r.timerDiff);
					return {
						estimatedTimeRemaining: o,
						...r,
						streamId: s,
						pillLabel: n,
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
						timer: n,
						pillLabel: a
					} = this.state;
					if (!(s && e && e.meter && n)) return null;
					const i = Zt(n, e.meter.full_meter_duration),
						c = !o,
						l = n < tt || t,
						m = this.state.timerDiff > 0;
					return r.a.createElement("div", {
						className: os.a.meterOverlay
					}, r.a.createElement("div", {
						className: os.a.meterPillWrapper
					}, m && r.a.createElement(us, null), r.a.createElement("div", {
						className: Object(d.a)(os.a.meterPillContainer, {
							[os.a.animateMeterInAndOut]: c && !l,
							[os.a.animateMeterInOnly]: c && l,
							[os.a.fillMeterCritical]: i === Te.CRITICAL,
							[os.a.fillMeterLow]: i === Te.LOW,
							[os.a.fillMeterNormal]: i === Te.NORMAL || i === Te.EXTENDED,
							[os.a.fillMeterFed]: m
						}),
						onClick: () => this.props.openGildModal()
					}, r.a.createElement("div", {
						className: os.a.meterLabel
					}, a))))
				}
			}
			var hs = bs,
				vs = s("./src/reddit/components/OverflowMenu/index.tsx"),
				gs = s("./src/reddit/controls/Dropdown/Row.tsx"),
				fs = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				Os = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				Ss = s.n(Os);
			const {
				fbt: ws
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _s = e => {
					let {
						label: t,
						onSelect: s,
						onToggle: o,
						subreddits: n
					} = e;
					return r.a.createElement(vs.b, {
						className: Ss.a.overflowMenu,
						dropdownClassName: Ss.a.dropdown,
						defaultButtonOutline: !0,
						disabled: n.length < 1,
						dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
						icon: r.a.createElement("div", {
							className: Ss.a.overflowMenuIcon
						}, t, r.a.createElement(fs.a, {
							className: Ss.a.dropdownTriangle
						})),
						onClick: o
					}, r.a.createElement("div", {
						className: Ss.a.dropdownLabel
					}, ws._("Pick a Community", null, {
						hk: "8MoVj"
					})), n.map(e => r.a.createElement(gs.b, {
						className: Ss.a.dropdownRow,
						displayText: e.prefixedName,
						iconWrapperClassName: Ss.a.overflowItemIconWrapper,
						key: `rpan-recommended-viewer-subreddits-dropdown-${e.prefixedName}`,
						onClick: () => s(e)
					})))
				},
				ys = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				Es = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				Cs = s.n(Es);
			class xs extends o.Component {
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
						isPaused: n,
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
					return r.a.createElement(ys.b, {
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
						isPaused: n,
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
			var js = xs,
				ks = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				Is = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				Rs = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				Ls = s.n(Rs),
				Ps = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				Ts = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				Ns = s.n(Ts),
				Ms = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				As = s.n(Ms);
			const {
				fbt: Ds
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Fs;
			! function(e) {
				e.EndScreen = "END_SCREEN", e.Panel = "PANEL"
			}(Fs || (Fs = {}));
			const Bs = (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return s ? Object(Xe.l)(e, s) : void 0
				},
				Vs = Object(i.c)({
					currentStream: Bs,
					inViewerFeedTheMeter: (e, t) => Object(qe.f)(e, t, Bs),
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
						return !!s && Object(Xe.g)(e, s)
					},
					isConfigError: Je.g,
					isIntroInProgress: ze.b,
					isMenuOpened: e => e.tooltip.tooltipId === ks.c || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltip.tooltipId || e.tooltip.tooltipId === Is.j,
					lastBatchApiRequestTs: Je.i,
					recommendedViewerSubredditOptions: Je.j,
					isModWithPostPermissions: (e, t) => {
						let {
							subreddit: s
						} = t;
						const o = s && s.replace(/^r\//, "");
						return !!o && Object(wt.i)(e, {
							subredditId: Object(_t.F)(e, o)
						})
					},
					isUserSubscriber: (e, t) => {
						let {
							subreddit: s
						} = t;
						const o = s && s.replace(/^r\//, "");
						return !!o && Object(_t.gb)(e, {
							identifier: {
								name: o,
								type: gt.a.SUBREDDIT
							}
						}, !0)
					},
					videoShareModalOpen: (e, t) => {
						let {
							currentStreamId: s
						} = t;
						return !!s && Object(ve.a)(e) === Object(vt.a)(s)
					},
					subredditByName: (e, t) => {
						let {
							subreddit: s
						} = t;
						const o = s && s.replace(/^r\//, "");
						return o ? Object(_t.z)(e, {
							subredditName: o
						}) : null
					}
				});
			class Us extends o.Component {
				constructor(e) {
					super(e), this.onSubscribeToSubreddit = () => {
						this.props.sendEvent(Object(He.k)(this.props.currentStream)), this.props.onSubscribeSubreddit()
					}, this.onProfileSubscriptionChange = e => {
						e ? this.props.sendEvent(Object(He.c)(this.props.currentStream)) : this.props.sendEvent(Object(He.n)(this.props.currentStream))
					}, this.onCrosspost = e => {
						this.props.currentStreamId && window.open(`${St.b}?source_id=${this.props.currentStreamId}`, "_blank"), this.props.onCrosspost(e)
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
							settingChange: ht.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: ht.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === ht.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === ht.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === ht.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === ht.a.Volume && s && s.handleMouseUp(e), this.setState({
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
						const o = Object(Ue.a)(t.post.id),
							r = it()(),
							n = {
								[Be.q]: r,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							};
						e(Object(S.a)(o, n)), s({
							referralId: r
						})
					}, this.referralId = it()(), this.source = Fs.Panel, this.state = {
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
						isLive: n,
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
						onShareToChat: O
					} = this.props;
					if (s || !e || i) return null;
					const w = e && e.post.id,
						{
							authorInfo: _
						} = e.post;
					return r.a.createElement("div", {
						className: Object(d.a)(As.a.overlay, {
							[As.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, e && !s && !i && !!w && r.a.createElement(Yt, {
						className: Ns.a.awardOverlaySpectacle,
						commentsPageKey: Object(dt.a)(w)
					}), t && r.a.createElement(hs, {
						currentStream: e,
						overlayOpen: this.isVisible(),
						openGildModal: () => this.props.handleGiveAward()
					}), this.renderPrompt(), r.a.createElement("div", {
						className: As.a.overlayTop
					}, r.a.createElement("div", {
						className: As.a.overlayTopLeft
					}, r.a.createElement("div", {
						className: As.a.meta
					}, r.a.createElement(Is.c, null, n ? r.a.createElement(Is.h, {
						onClick: this.handleClickLiveBroadcastStatus
					}) : r.a.createElement(Is.p, null)), r.a.createElement(Is.n, {
						text: e.post.title
					}), r.a.createElement("div", {
						className: As.a.subredditInfo
					}, r.a.createElement(Is.l, {
						onSelect: m,
						related: b,
						subreddit: h,
						subreddits: p
					}), r.a.createElement(Is.f, {
						onSubscribe: this.onSubscribeToSubreddit,
						isSubscribed: v
					})), r.a.createElement(Is.r, {
						broadcast: e,
						live: n
					}))), r.a.createElement("div", {
						className: As.a.overlayTopRight
					}, Object(Is.s)(_) ? r.a.createElement(Is.m, {
						profile: _,
						currentStream: e,
						onSubscriptionChange: this.onProfileSubscriptionChange
					}) : null, r.a.createElement(Is.i, {
						onClick: u,
						onHideClick: c,
						onReportClick: l,
						onToggleLockClick: this.onToggleLock,
						isCommentsLocked: o,
						hasModeratorPermissions: a,
						onEndBroadcastClick: g,
						onRpanStudioClick: this.props.onRpanStudioClick,
						subreddit: f
					}), r.a.createElement(Is.k, {
						onClickShare: this.props.onShare,
						onClickCrosspost: () => {
							this.onCrosspost({
								source: Fs.Panel
							})
						},
						onClickVideoShare: () => {
							this.onShareLink({
								source: Fs.Panel
							})
						},
						onClickShareToChat: () => {
							const e = Object(S.a)(Object(Ue.a)(w), {
								[Be.q]: this.referralId,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							});
							O(e), this.props.sendEvent(Object(Ps.a)())
						}
					}), r.a.createElement("div", {
						className: Object(d.a)({
							[As.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, r.a.createElement(Is.q, {
						broadcast: e,
						onUpvote: this.props.onUpvote,
						onDownvote: this.props.onDownvote
					})))), r.a.createElement("div", {
						className: As.a.overlayBottom,
						onMouseEnter: this.onMouseHoverScrubber,
						onMouseLeave: this.onMouseLeaveScrubber,
						onMouseMove: this.onMouseHoverScrubber
					}, this.renderScrubber()), this.props.videoShareModalOpen && r.a.createElement(vt.b, {
						className: Ns.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !0,
						url: Object(S.a)(Object(Ue.a)(w), {
							[Be.q]: this.referralId,
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
						onVideoPositionUpdate: n,
						setVolume: a,
						toggleMute: i,
						videoCurrentTime: d,
						videoTotalTime: c,
						volume: l
					} = this.props, m = As.a.controls;
					return r.a.createElement("div", {
						className: m
					}, r.a.createElement(js, {
						isLive: e,
						isMuted: t,
						isPaused: s,
						isVisible: !0,
						onPlayPauseToggle: o,
						onVideoPositionUpdate: n,
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
						isBatchApiError: n,
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
					if (h || d && i || t && o || !t && n) return r.a.createElement(Is.d, null);
					if (d) return r.a.createElement("div", {
						className: Ns.a.intro
					}, r.a.createElement(ks.b, {
						isMuted: l,
						onToggle: g
					}));
					if (m || !t && !n && !a && p) return null;
					if (c) return r.a.createElement(Is.o, null);
					if (e && e.stream.state === Ot.a.DISCONNECTED) return r.a.createElement(Is.b, null);
					if (v) return r.a.createElement(Is.a, {
						onClickReplay: b,
						onClickShare: () => {
							this.onShareLink({
								source: Fs.EndScreen
							}), this.source = Fs.EndScreen
						},
						onClickCrosspost: () => {
							this.onCrosspost({
								source: Fs.EndScreen
							})
						}
					});
					const f = e && e.meter && e.estimated_remaining_time < $e;
					return u && f ? r.a.createElement(Is.e, {
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
					let n = "",
						a = "";
					"home" === s ? (n = "All", a = "All") : "r/popular" === s ? (n = "Popular", a = "r/popular") : o ? (n = o.replace(/^r\//, ""), a = o) : (n = "All", a = "All");
					const i = t.filter(e => e.prefixedName !== a);
					return r.a.createElement("div", {
						className: Ns.a.menuContainer
					}, r.a.createElement(_s, {
						label: n,
						onSelect: e,
						subreddits: i
					}))
				}
				renderTitleContainer() {
					const {
						currentStream: e,
						isLive: t
					} = this.props;
					if (e) return r.a.createElement("div", {
						className: Ns.a.titleContainer
					}, r.a.createElement("h1", {
						className: Ns.a.videoTitle
					}, e.post.title), !t && r.a.createElement("div", {
						className: Ns.a.RecordedLabel
					}, Ds._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(Ls.a.ControlVolume)) return !0;
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
						isBatchPending: n,
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
					return p || i && a || t && s || !t && o ? r.a.createElement("div", {
						className: Ns.a.prompt
					}, Ds._("Connection issues", null, {
						hk: "24LpRV"
					})) : i ? r.a.createElement("div", {
						className: Ns.a.intro
					}, r.a.createElement(ks.b, {
						isMuted: c,
						onToggle: h
					})) : l || !t && !o && !n && m ? null : d ? r.a.createElement("div", {
						className: Ns.a.prompt
					}, Ds._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === Ot.a.DISCONNECTED ? r.a.createElement("div", {
						className: Ns.a.prompt
					}, Ds._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : b ? r.a.createElement("div", {
						className: Ns.a.prompt
					}, r.a.createElement("div", {
						className: Ns.a.promptButtonSet
					}, r.a.createElement(ks.e, {
						onClick: u
					}), r.a.createElement(ks.f, {
						onClick: this.props.onToggleVideoShareModal
					}))) : null
				}
			}
			var Hs = Object(n.b)(Vs, (e, t) => ({
					copyLink: t => e(Object(ce.D)(t)),
					onToggleVideoShareModal: () => {
						t.currentStreamId && e(Object(j.i)(Object(vt.a)(t.currentStreamId)))
					},
					onHide: () => {
						t.currentStreamId && (e(Object(ce.fb)(t.currentStreamId, !0, !0, !0)), e(N(t.currentStreamId)))
					},
					onLockComments: () => {
						t.currentStreamId && e(ut(t.currentStreamId))
					},
					onUnlockComments: () => {
						t.currentStreamId && e(pt(t.currentStreamId))
					},
					handleGiveAward: () => {
						if (t.currentStreamId) {
							const s = Object(ft.d)(ft.a.GildingFlow, !0);
							e(Object(ct.d)({
								correlationId: s,
								thingId: t.currentStreamId
							}))
						}
					},
					onSubscribeSubreddit: () => {
						const s = t.subreddit && t.subreddit.split("/").pop();
						s && e(Object(bt.d)([{
							name: s,
							type: gt.a.SUBREDDIT
						}], !0))
					},
					getModeratedSubreddits: () => e(Object(lt.b)())
				}))(Us),
				Gs = s("./src/lib/constants/index.ts"),
				qs = s("./src/lib/makeDraftKey/index.ts"),
				Ks = s("./src/reddit/actions/pages/comments.ts"),
				Ws = s("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				Qs = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				Js = s("./src/reddit/components/CommentsChat/Loader.ts"),
				Xs = s("./src/reddit/selectors/posts.ts"),
				zs = s("./src/reddit/icons/svgs/Send/index.tsx"),
				Ys = s("./src/reddit/components/CommentsChat/MessageInput/MutedMessageInput.m.less"),
				Zs = s.n(Ys),
				$s = s("./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx");
			const {
				fbt: eo
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var to = e => {
					let {
						postId: t
					} = e;
					const s = Object(n.e)(e => Object(Xs.G)(e, {
							postId: t
						})),
						o = Object(n.d)(),
						a = Object(pe.b)(),
						i = s.isGildable;
					return r.a.createElement("span", {
						className: Zs.a.InputLine
					}, r.a.createElement("span", {
						className: Zs.a.FormBackground
					}, r.a.createElement("span", {
						className: Zs.a.FormLine
					}, r.a.createElement("div", {
						className: Zs.a.Text
					}, eo._("Chat is disabled", null, {
						hk: "gQrh3"
					}))), r.a.createElement(zs.a, {
						className: Zs.a.SendIcon
					})), i && r.a.createElement($s.a, {
						showSubmitInsideTextArea: !0,
						isLivestreaming: !0,
						sendEvent: a,
						postId: t,
						handleGiveAward: e => {
							o(Object(ct.d)({
								correlationId: e,
								thingId: t
							}))
						}
					}))
				},
				so = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx");
			const {
				fbt: oo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ro = G.a.wrapped(q.g, "ModalFooter", z.a), no = G.a.wrapped(q.i, "ModalHeader", z.a);
			var ao = e => {
				let {
					toggleModal: t,
					bodyText: s,
					title: o
				} = e;
				return r.a.createElement(q.e, null, r.a.createElement(no, null, r.a.createElement(J.a, null, r.a.createElement("div", null, r.a.createElement("div", {
					className: z.a.Title
				}, o)), r.a.createElement(W.a, {
					onClick: t
				}, r.a.createElement(q.b, null)))), r.a.createElement("div", {
					className: z.a.ModalText
				}, s), r.a.createElement(ro, {
					className: z.a.ModalFooter
				}, r.a.createElement(K.l, {
					onClick: t,
					className: z.a.Button,
					"data-redditstyle": !0
				}, oo._("I Understand", null, {
					hk: "1f4y1d"
				}))))
			};
			const {
				fbt: io
			} = s("./node_modules/fbt/lib/FbtPublic.js"), co = () => io._("Because you’ve been flagged multiple times for violating Reddit’s {=Content Policy,} the system has removed your ability to participate in this chat. This can’t be undone (not even by a mod), but after 24 hours you’ll be able to chat again.", [io._param("=Content Policy,", r.a.createElement("a", {
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, io._("{=Content Policy},", [io._param("=Content Policy", r.a.createElement("span", {
				className: z.a.Link
			}, io._("Content Policy", null, {
				hk: "47cyc2"
			})))], {
				hk: "3BF41m"
			})))], {
				hk: "ITZAq"
			});
			var lo = Object(H.a)(e => {
					let {
						toggleModal: t
					} = e;
					return r.a.createElement(ao, {
						bodyText: co(),
						title: io._("Sit back and watch for a bit", null, {
							hk: "nd6D"
						}),
						toggleModal: t
					})
				}),
				mo = s("./src/reddit/icons/svgs/Info/index.tsx");
			const {
				fbt: uo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), po = Object(i.c)({
				isMuteModalOpen: e => "rpan-mute-chat-modal-id" === Object(ve.a)(e)
			});
			class bo extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickInfo = () => {
						this.props.onToggleMuteModal()
					}
				}
				render() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: Zs.a.InputLine
					}, r.a.createElement("span", {
						className: Zs.a.FormBackground
					}, r.a.createElement("span", {
						className: Zs.a.FormLine
					}, r.a.createElement(mo.a, {
						className: Zs.a.InfoIcon,
						onClick: this.onClickInfo
					}), r.a.createElement("div", {
						className: Zs.a.Text
					}, uo._("Chat is unavailable", null, {
						hk: "12EjN3"
					}))), r.a.createElement(zs.a, {
						className: Zs.a.SendIcon
					}))), this.props.isMuteModalOpen && r.a.createElement(lo, {
						toggleModal: this.props.onToggleMuteModal
					}))
				}
			}
			var ho = Object(n.b)(po, e => ({
				onToggleMuteModal: () => e(Object(j.i)("rpan-mute-chat-modal-id"))
			}))(bo);
			const {
				fbt: vo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), go = () => vo._("Your messages have been flagged for violating Reddit’s {=Content Policy.} Have fun chatting, but if you’re flagged multiple times, you may lose the ability to participate in RPAN chats.", [vo._param("=Content Policy.", r.a.createElement("a", {
				className: z.a.Link,
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, vo._("{=Content Policy}.", [vo._param("=Content Policy", r.a.createElement("span", {
				className: z.a.Link
			}, vo._("Content Policy", null, {
				hk: "36gq1Y"
			})))], {
				hk: "2SSN6t"
			})))], {
				hk: "4aZsnf"
			});
			var fo = Object(H.a)(e => {
					let {
						toggleModal: t
					} = e;
					return r.a.createElement(ao, {
						bodyText: go(),
						title: vo._("Be mindful of what you say", null, {
							hk: "3CDXHh"
						}),
						toggleModal: t
					})
				}),
				Oo = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less")),
				So = s.n(Oo);
			const wo = Object(n.b)(() => Object(i.c)({
					allAwards: e => e.awards.models,
					post: (e, t) => {
						let {
							postId: s
						} = t;
						return Object(Xs.G)(e, {
							postId: s
						})
					}
				})),
				_o = ["Center", "Left", "Right"],
				yo = ["Low", "Mid", "High"],
				Eo = () => Math.floor(800 * Math.random()),
				Co = e => e[Math.floor(Math.random() * e.length)],
				xo = e => {
					const t = Co(_o),
						s = Co(yo),
						o = jt(e);
					return So.a[`award_${o}Tier_${s}${t}`]
				};
			class jo extends o.Component {
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
								icon: r,
								coinPrice: n
							} = e[s];
							return {
								coinPrice: n,
								count: o,
								iconUrl: r.url,
								id: s
							}
						}).sort((e, t) => t.coinPrice - e.coinPrice),
						o = [];
					return s.forEach(e => {
						const {
							coinPrice: t,
							count: s,
							iconUrl: n
						} = e;
						for (let a = 0; a < s; a++) {
							const s = `${Eo()}ms`,
								i = xo(t),
								c = r.a.createElement("img", {
									key: `${e.id}-${a}`,
									className: Object(d.a)(So.a.award, i),
									src: n,
									style: {
										animationDelay: s
									}
								});
							o.push(c)
						}
					}), r.a.createElement("div", {
						className: So.a.awardBubbler,
						role: "presentation"
					}, o)
				}
			}
			var ko = wo(jo),
				Io = s("./src/reddit/contexts/Post/index.tsx"),
				Ro = s("./src/reddit/models/PostDraft/index.ts");
			const Lo = Object(i.a)((e, t) => t, e => e.publicAccessNetwork.automuteLevels, (e, t) => {
				var s;
				return (null === (s = null == t ? void 0 : t[e]) || void 0 === s ? void 0 : s.level) || 0
			});
			var Po = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				To = s.n(Po);
			const No = Object(i.c)({
				isDisabled: (e, t) => Object(Xe.f)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: Ye.Q,
				isPostDataLoaded: (e, t) => {
					let {
						postId: s
					} = t;
					return !!Object(Xs.G)(e, {
						postId: s
					})
				},
				replyComment: (e, t) => {
					let {
						postId: s
					} = t;
					return Object(yt.s)(e, {
						commentsPageKey: Object(dt.a)(s)
					})
				},
				automuteViolationLevel: (e, t) => {
					let {
						postId: s
					} = t;
					return Lo(e, s)
				}
			});
			var Mo;
			! function(e) {
				e.Warning = "warning", e.Mute = "mute"
			}(Mo || (Mo = {}));
			class Ao extends o.Component {
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
						automuteModal: Mo.Warning
					}) : this.props.automuteViolationLevel > 1 && this.setState({
						automuteModal: Mo.Mute
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
						location: n,
						openLoginModal: a,
						openRegisterModal: i,
						sendEvent: c,
						subredditId: l,
						replyComment: m,
						onFocusMessageInput: u
					} = this.props, p = Object(dt.a)(e), b = m ? Object(qs.a)(Ro.c.replyToComment, m.id) : Object(qs.a)(Ro.c.replyToPost, e);
					return o ? r.a.createElement("div", {
						"aria-label": h.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: To.a.streamingChat,
						onClick: this.props.onChatClick
					}, r.a.createElement(Io.a, {
						postId: e
					}, r.a.createElement(Js.a, {
						className: To.a.chatScroller,
						emptyStateClassName: To.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: l,
						commentsPageKey: p
					}), s && (this.shouldMuteChat ? r.a.createElement(ho, null) : t ? r.a.createElement(to, {
						postId: e
					}) : r.a.createElement(so.a, {
						key: "chatCommentsForm",
						postId: e,
						replyComment: m,
						draftKey: b,
						commentsPageKey: p,
						isEditing: !1,
						sendEvent: c,
						onFocusMessageInput: u,
						isLivestreaming: !0
					})), r.a.createElement(ko, {
						postId: e
					}), !s && r.a.createElement(Qs.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						location: n,
						openLoginModal: a,
						openRegisterModal: i,
						origin
					}), this.state.automuteModal === Mo.Warning && r.a.createElement(fo, {
						toggleModal: this.onDismissModal
					}), this.state.automuteModal === Mo.Mute && r.a.createElement(lo, {
						toggleModal: this.onDismissModal
					}))) : r.a.createElement("div", {
						className: Object(d.a)(To.a.streamingChat, To.a.prompt)
					}, h.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var Do = Object(n.b)(No, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						loadComments: () => e(Object(Ks.commentsPageDataRequested)(s, void 0, {
							sort: Gs.t.CHAT
						}, Gs.t.CHAT)),
						openLoginModal: () => e(Object(m.i)()),
						openRegisterModal: () => e(Object(m.j)()),
						fetchAutomuteStatus: () => e(Object(Ws.b)(s))
					}
				})(Ao),
				Fo = s("./src/reddit/icons/svgs/Pagination/back.tsx");
			var Bo = e => r.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				Vo = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				Uo = s.n(Vo);
			const Ho = e => {
				let {
					isNext: t,
					onClick: s,
					stream: o
				} = e;
				return r.a.createElement("div", {
					className: Object(d.a)(Uo.a.switchContainer, t ? Uo.a.switchContainerNext : Uo.a.switchContainerPrevious)
				}, r.a.createElement("button", {
					className: Uo.a.switchButton,
					disabled: !o,
					onClick: s,
					"aria-label": t ? h.fbt._("Forward arrow", null, {
						hk: "3b7sZa"
					}) : h.fbt._("Back arrow", null, {
						hk: "1upGBK"
					}),
					value: t ? "forward" : "back"
				}, r.a.createElement("div", {
					className: Uo.a.streamThumbnail,
					style: o ? {
						backgroundImage: `url(${o.stream.thumbnail})`
					} : {}
				}), t ? r.a.createElement(Bo, {
					className: Uo.a.arrowIcon
				}) : r.a.createElement(Fo.a, {
					className: Uo.a.arrowIcon
				})))
			};
			var Go = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(Ho, {
				isNext: !1,
				onClick: e.onPrevious,
				stream: e.previousStream
			}), r.a.createElement(Ho, {
				isNext: !0,
				onClick: e.onNext,
				stream: e.nextStream
			}));
			Object(L.a)(R.s);
			const qo = Object(L.a)(R.A),
				Ko = (e, t) => async (s, o) => {
					const r = o(),
						n = Date.now(),
						a = e.map(e => Object(Xe.l)(r, e)).filter(Boolean).map(e => ({
							imageUrl: `${e.stream.thumbnail}?${n}`,
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await Wo(a, t)
				}, Wo = (e, t) => Promise.all(e.map(e => Qo(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), Qo = e => new Promise((t, s) => {
					const o = new Image;
					o.onload = () => t(), o.onerror = () => s(), o.src = e
				}).then(() => !0, () => !1);
			var Jo, Xo = s("./src/reddit/components/PublicAccessNetwork/Theater/VisualEffectScreen/index.m.less"),
				zo = s.n(Xo);
			! function(e) {
				e.Loading = "Loading", e.Preview = "Preview", e.Static = "Static"
			}(Jo || (Jo = {}));
			class Yo extends o.Component {
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: o
					} = this.props, r = [];
					e && r.push(e.post.id), s && r.push(s.post.id), o && r.push(o.post.id), r.length > 0 && t(r)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: o,
						previousStream: r
					} = this.props, n = [];
					t && this.isStreamChanged(t, e.currentStream) && n.push(t.post.id), r && this.isStreamChanged(r, e.previousStream) && n.push(r.post.id), s && this.isStreamChanged(s, e.nextStream) && n.push(s.post.id), n.length > 0 && o(n)
				}
				render() {
					const {
						previewUrl: e,
						visualEffect: t,
						visualEffectLabel: s
					} = this.props;
					let o, n;
					if (t === Jo.Loading) o = zo.a.loading;
					else if (t === Jo.Preview) o = zo.a.preview, n = {
						backgroundImage: `url(${e})`
					};
					else {
						if (t !== Jo.Static) return null;
						o = zo.a.static
					}
					return r.a.createElement("div", {
						className: zo.a.container
					}, r.a.createElement("div", {
						className: o,
						"aria-label": s,
						style: n
					}))
				}
				isStreamChanged(e, t) {
					return !!e && (t && e.post.id !== t.post.id || !t)
				}
			}
			var Zo = Object(n.b)(null, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, o) => {
						const r = await s(Ko(e, t));
						s(qo(r))
					})(t))
				}))(Yo),
				$o = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				er = s.n($o);
			const tr = Object(O.a)(U.a, {
					playerName: "RPAN Video Player"
				}),
				sr = Object(i.c)({
					currentStream: Xe.d,
					currentStreamStartTime: Xe.e,
					currentHlsUrl: Xe.b,
					inViewerFeedTheMeter: (e, t) => Object(qe.f)(e, t, Xe.d),
					isIntroInProgress: ze.b,
					isOverlayOpen: Qe.i,
					isReportFlowOpen: (e, t) => {
						let {
							streamIdFromPath: s
						} = t;
						var o, r;
						return (null === (r = null === (o = e.features) || void 0 === o ? void 0 : o.reportFlow) || void 0 === r ? void 0 : r.postOrCommentId) === Object(Ue.g)(s || "")
					},
					lastChatActivityUtcTs: ze.c,
					nextStream: Xe.h,
					nextTopStream: Xe.i,
					playbackState: Xe.j,
					previousStream: Xe.k,
					streamById: e => t => Object(Xe.l)(e, t),
					unavailableVideoUrl: Je.o,
					volume: We.f,
					isEndBroadcastModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(ve.a)(e),
					isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(ve.a)(e),
					isIntroChatModalOpen: e => "rpan-intro-chat-modal-id" === Object(ve.a)(e),
					isDownloadOBSModalOpen: e => Object(ve.a)(e) === de.a,
					previewUrl: Xe.c,
					reportingRevampEnabled: Ke.a,
					isNightMode: Ye.db
				}),
				or = Object(n.b)(sr, (e, t) => ({
					closeLocation: () => e(Object(a.b)(t.location.state[De.b.CloseLocation])),
					fetchBroadcasterProfileInfo: t => e(Object(k.d)(t, !0)),
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
					toggleIntroChatModal: () => e(Object(j.i)("rpan-intro-chat-modal-id")),
					toggleEndBroadcastModal: () => e(Object(j.i)("rpan-end-broadcast-confirmation-id")),
					toggleRemovalReasonModal: () => e(Object(j.i)("rpan-add-removal-reason-id")),
					toggleOBSDownloadModal: () => e(Object(j.i)(de.a)),
					onShareToChat: t => e(Object(C.e)(t))
				}));
			class rr extends o.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = r.a.createRef(), this.videoRef = r.a.createRef(), this.videoSessionManager = null, this.renderReportFlow = (e, t) => this.props.reportingRevampEnabled ? r.a.createElement(Ae.a, {
						withOverlay: !0,
						overlayCustomStyles: Me.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}) : r.a.createElement(Me.a, {
						withOverlay: !0,
						overlayCustomStyles: Me.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}), this.renderTheater = e => {
						const {
							currentStream: t,
							currentStreamStartTime: s,
							currentHlsUrl: o,
							inViewerFeedTheMeter: n,
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
							timestamp: O,
							unavailableVideoUrl: S,
							volume: w,
							isRemovalReasonModalOpen: _,
							isEndBroadcastModalOpen: y,
							isIntroChatModalOpen: E,
							isDownloadOBSModalOpen: C,
							isNightMode: x,
							onShareToChat: j
						} = this.props, {
							hasLiveIntent: k,
							isError: I,
							isLoading: R,
							isMuted: L,
							isOverlayVisible: P,
							isVideoPaused: T,
							showStreamEndedPrompt: N,
							videoCurrentTime: M,
							videoTotalTime: A,
							shouldShowOBSBanner: D
						} = this.state, F = t && t.post.id, B = o !== S, V = t && !t.post.subreddit, U = u === Xe.a.LIVE, H = t && 1e3 * t.broadcast_time;
						let G, q, K, W, Q = "number" == typeof O ? O : s;
						H && Q >= H && (Q = 0), t && B ? (G = 1e3 * t.broadcast_time, q = F, K = U, W = t.post.title) : (G = void 0, q = void 0, K = !1, W = "RPAN Unavailable Video");
						const J = t && t.meter && 10 * Math.round(t.estimated_remaining_time / 10),
							X = n && t && t.estimated_remaining_time < et && !a,
							z = void 0 !== J && J >= 0 && X ? er.a[`meterCritical${J}`] : void 0;
						let Y, Z;
						return R || I ? Y = p ? Jo.Preview : Jo.Loading : X && (Y = Jo.Static), R ? Z = h.fbt._("video is loading", null, {
							hk: "jUJdy"
						}) : I ? Z = h.fbt._("unable to load video", null, {
							hk: "1Eh3Rt"
						}) : X && (Z = h.fbt._("this broadcast will expire soon. give an award to add more time.", null, {
							hk: "3dUpDV"
						})), r.a.createElement(r.a.Fragment, null, D && r.a.createElement(ie, {
							isDark: x,
							onClickLearnMore: this.onOBSBannerLearnMoreClick,
							onClickDismiss: this.onOBSBannerDismissClick
						}), r.a.createElement("div", {
							className: Object(d.a)(er.a.theaterContainer, {
								[er.a.overlay]: i,
								[er.a.theaterContainerExp]: e,
								[er.a.isObsBannerDisplayed]: D
							}),
							ref: this.focusRef,
							tabIndex: -1
						}, r.a.createElement("div", {
							className: er.a.wrap
						}, r.a.createElement("div", {
							className: Object(d.a)(er.a.panesWrapper, {
								[er.a.initialized]: !a
							})
						}, r.a.createElement("div", {
							className: Object(d.a)(er.a.pane, er.a.leftPane)
						}, r.a.createElement("div", {
							className: er.a.videoContainer
						}, Y && Z && r.a.createElement(Zo, {
							previousStream: b,
							currentStream: t,
							nextStream: m,
							previewUrl: p,
							visualEffect: Y,
							visualEffectLabel: Z
						}), o && r.a.createElement("div", {
							className: z
						}, r.a.createElement(tr, {
							autoplay: !0,
							controls: !1,
							startTime: Q,
							isPaused: T,
							muted: L,
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
						})), r.a.createElement(Hs, {
							currentStreamId: F,
							isLoading: R,
							isLive: U,
							isMuted: L,
							isPaused: T,
							isUnavailable: u === Xe.a.UNAVAILABLE,
							isVisible: P,
							onCopyLink: this.onCopyLink,
							onCrosspost: this.onCrosspost,
							onShareToChat: j,
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
							videoCurrentTime: U && k ? A : M,
							videoTotalTime: A,
							volume: w
						}), (_ || y) && t && r.a.createElement(Ne, {
							subredditId: t.post.subreddit.id,
							subredditName: t.post.subreddit.name,
							postId: t.post.id,
							toggleModal: this.onEndBroadcast
						}), E && r.a.createElement(te, {
							toggleModal: this.props.toggleIntroChatModal
						}), C && r.a.createElement(de.b, {
							onClickDownload: this.onOBSModalDownloadClick,
							onClickDismiss: this.onOBSModalDismissClick,
							onClickGuidebook: this.onOBSModalGuidebookClick,
							className: er.a.downloadOBSModal
						}))), !a && r.a.createElement("div", {
							className: Object(d.a)(er.a.pane, er.a.rightPane)
						}, t && !V && r.a.createElement(Do, {
							location: l,
							onChatClick: this.onChatClick,
							onFocusMessageInput: this.handleFocusMessageInput,
							postId: t.post.id,
							sendEvent: g,
							subredditId: t.post.subreddit.id
						}))), t && !a && r.a.createElement(Go, {
							nextStream: m,
							onNext: this.onNextStream,
							onPrevious: this.onPreviousStream,
							previousStream: b
						}), t && !a && r.a.createElement(nr, {
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
						if (this.props.playbackState === Xe.a.LIVE && e > this.state.videoCurrentTime) {
							const s = .95;
							t = e / this.state.videoTotalTime >= s
						}
						const s = t ? this.state.videoTotalTime : e;
						this.hlsVideoApi && this.hlsVideoApi.setCurrentTime(s), this.setState({
							hasLiveIntent: t,
							videoCurrentTime: s
						}), this.props.sendEvent(Object(He.y)(this.props.currentStream, {
							...this.playbackStats,
							scrubbingStartMs: Object(y.a)(this.state.videoCurrentTime),
							scrubbingEndMs: Object(y.a)(s)
						}))
					}, this.onNextStream = g()(() => {
						const {
							nextStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(He.l)(e, this.playbackStats)), this.goToStream(e))
					}, R.q, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = g()(() => {
						const {
							previousStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(He.m)(e, this.playbackStats)), this.goToStream(e))
					}, R.q, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(Ve.g)(e.target) ? e.stopPropagation() : e.keyCode === Fe.a.ArrowRight ? this.onNextStream() : e.keyCode === Fe.a.ArrowLeft && this.onPreviousStream()
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
							const t = e.source === Fs.EndScreen ? "copy_link_video" : "copy_link";
							this.props.sendEvent(Object(He.u)(t, this.props.currentStream, this.playbackStats, null == e ? void 0 : e.referralId))
						}
						this.cancelSwitchingOnStreamEnded()
					}, this.onShare = () => {
						this.props.currentStream && this.props.sendEvent(Object(He.B)("share", this.props.currentStream, this.playbackStats))
					}, this.onShareLink = e => {
						if (this.props.currentStream) {
							const t = e.source === Fs.EndScreen ? "share_video" : "share_copy";
							this.props.sendEvent(Object(He.B)(t, this.props.currentStream, this.playbackStats))
						}
					}, this.onCrosspost = e => {
						if (this.props.currentStream) {
							const t = e.source === Fs.EndScreen ? "crosspost_video" : "share_crosspost";
							this.props.sendEvent(Object(He.v)(t, this.props.currentStream, this.playbackStats))
						}
					}, this.onToggleMenu = () => {
						this.cancelSwitchingOnStreamEnded()
					}, this.setVideoMute = e => {
						this.setState(() => ({
							isMuted: e
						}));
						const t = this.hlsVideoApi;
						if (!t) return;
						const s = e ? He.w : He.F;
						e || t.setVolume(this.props.volume), this.props.sendEvent(s(this.props.currentStream, this.playbackStats))
					}, this.goToSubreddit = e => {
						this.props.sendEvent(Object(He.s)(e, this.props.currentStream)), this.props.onNavigation(e.path)
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === Xe.a.LIVE || this.props.playbackState === Xe.a.VOD, this.handleHeartbeat = e => {
						let {
							meta: t,
							stats: s
						} = e;
						const {
							currentStream: o,
							streamById: r
						} = this.props, n = o && o.post.id === t.id ? o : r(t.id);
						if (!n) return;
						const a = !s.sessionDurationMs ? He.E : He.A,
							i = {
								...s,
								playerType: He.a.Theater
							};
						this.props.sendEvent(a(n, i))
					}, this.state = {
						hasLiveIntent: e.playbackState === Xe.a.LIVE,
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
						playerType: He.a.Theater
					}
				}
				get video() {
					return this.videoRef.current
				}
				componentDidMount() {
					const e = this.focusRef.current;
					e.classList.add(er.a.focusVisible), Object(_.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, w(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(Ge.t)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream(), window.localStorage && this.setState({
						shouldShowOBSBanner: !Q.k()
					})
				}
				componentDidUpdate(e, t) {
					const {
						currentStream: s,
						isIntroInProgress: o,
						isOverlay: r,
						isOverlayOpen: n,
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
					if (r || n === e.isOverlayOpen || (n ? (this.setState(e => {
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
					!o && e.isIntroInProgress && this.handleNewStream(), o || e.isIntroInProgress || !ar(s, e.currentStream) || this.handleNewStream(), this.updateVideoSession(e, t), this.state.isSwitchingOnStreamEndedScheduled || o || !(!s && !this.state.isLoading || l === Xe.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), o || s || this.state.isLoading || this.state.isError || this.setState({
						...this.state,
						isError: !0
					}), a && this.state.isVideoPaused && this.setState({
						isVideoPaused: !0
					}), this.context.setIsLive(l === Xe.a.LIVE), this.context.setCurrentTime(this.state.videoCurrentTime), this.context.setTotalTime(this.state.videoTotalTime)
				}
				componentWillUnmount() {
					window.clearTimeout(this.overlayVisibilityTimeout), window.clearTimeout(this.consumePostTimeout), window.clearTimeout(this.switchingOnStreamEndedTimeout), this.onCurrentTimeChangedThrottled.cancel(), document.removeEventListener("keydown", this.onNextStreamKeyHandler), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits(), this.unsubscribeConfig(), this.unsubscribeStreams(), this.props.resetHistory(), this.props.isOverlay && setTimeout(() => w(this.previouslyActiveElement)), this.destroyVideoSessionManager()
				}
				render() {
					return r.a.createElement(f.a.Consumer, null, this.renderTheater)
				}
				onVideoPlayerLevelLoaded(e) {
					const {
						currentStream: t,
						playbackState: s,
						receiveHlsStreamEnded: o
					} = this.props;
					this.state.videoTotalTime !== e.totalduration && this.setState({
						videoTotalTime: e.totalduration
					}), t && !e.live && 0 !== e.endSN && s === Xe.a.LIVE && o(t.post.id)
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
					this.props.sendEvent(Object(He.x)(this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onOBSModalDismissClick() {
					this.props.sendEvent(Object(He.h)("dismiss", this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onOBSModalDownloadClick() {
					this.props.sendEvent(Object(He.h)("download", this.props.currentStream))
				}
				onOBSModalGuidebookClick() {
					this.props.sendEvent(Object(He.h)("guidebook", this.props.currentStream))
				}
				onOBSBannerDismissClick() {
					Q.rb(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(He.g)("not_now", this.props.currentStream))
				}
				onOBSBannerLearnMoreClick() {
					Q.rb(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(He.g)("learn_more", this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onChatClick() {
					this.props.currentStream && this.props.sendEvent(Object(He.o)(this.props.currentStream, this.playbackStats))
				}
				handleFocusMessageInput() {
					Q.X() || this.props.toggleIntroChatModal()
				}
				onUpvote() {
					this.props.currentStream && this.props.sendEvent(Object(He.r)(this.props.currentStream, this.playbackStats))
				}
				onDownvote() {
					this.props.currentStream && this.props.sendEvent(Object(He.p)(this.props.currentStream, this.playbackStats))
				}
				onEnded() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						playbackState: s,
						sendEvent: o,
						setIntroFinishedStatus: r
					} = this.props;
					if (this.setState({
							isVideoPaused: !0
						}), t) return r(!0), void this.setState({
						...this.state,
						isLoading: !!e
					});
					e && o(Object(He.C)(e, this.playbackStats)), s !== Xe.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(He.D)(this.props.currentStream, this.playbackStats)), this.setState({
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
					this.props.sendEvent(Object(He.b)(this.props.currentStream, this.playbackStats)), this.props.isOverlay ? this.props.closeLocation() : window.location.replace(window.location.origin)
				}
				onReport() {
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id, this.props.isOverlay), this.props.sendEvent(Object(He.q)(this.props.currentStream)))
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
					this.state.isVideoPaused || (this.props.sendEvent(Object(He.d)(this.props.currentStream, this.playbackStats)), this.setState({
						isVideoPaused: !0
					}))
				}
				playVideo() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
						sendEvent: !0
					};
					this.state.isVideoPaused && (e.sendEvent && this.props.sendEvent(Object(He.e)(this.props.currentStream, this.playbackStats)), this.hideStreamEndedPrompt(), this.setState({
						isVideoPaused: !1
					}))
				}
				replayVideo() {
					this.props.sendEvent(Object(He.f)(this.props.currentStream, this.playbackStats)), this.onVideoPlayerPositionUpdate(0), this.playVideo({
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
					const t = Object(Ue.d)(e);
					return Object(S.a)(t, {
						[Be.r]: this.props.related,
						[Be.B]: this.props.timestamp
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
						visitStream: r
					} = this.props;
					e && (this.setState({
						hasLiveIntent: o === Xe.a.LIVE,
						videoCurrentTime: 0,
						videoTotalTime: 0
					}), r(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), s(e.post.id), e.post.authorInfo && e.post.authorInfo.name && t(e.post.authorInfo.name), this.syncLocationWithCurrentStreamId(), this.props.sendEvent(Object(He.G)(e)), this.setConsumePostTimeout(), this.showOverlayAfterStreamSwitching())
				}
				setConsumePostTimeout() {
					window.clearTimeout(this.consumePostTimeout), this.consumePostTimeout = window.setTimeout(() => this.props.sendEvent(Object(He.t)(this.props.currentStream)), b.a.telemetry.postConsumedThreshold)
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
					const r = !o || Object(Ue.b)(e.post.id) === o;
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
				updateVideoSession(e, t) {
					var s, o;
					const {
						video: r
					} = this;
					if (!r) return;
					const n = this.getOrCreateVideoSessionManager(r),
						{
							currentStream: a
						} = this.props,
						i = null == a ? void 0 : a.post.id,
						d = i !== (null === (s = e.currentStream) || void 0 === s ? void 0 : s.post.id);
					d && this.setState({
						isReady: !1
					}), d && n.endSession();
					const {
						isReady: c
					} = this.state, {
						isReady: l
					} = t;
					!!i && (!l && c) && (n.startSession({
						id: i
					}), this.setState({
						sessionId: (null === (o = null == n ? void 0 : n.sessionStats) || void 0 === o ? void 0 : o.id) || ""
					}))
				}
				getOrCreateVideoSessionManager(e) {
					return this.videoSessionManager || (this.videoSessionManager = new E.a(e, {
						onHeartbeat: this.handleHeartbeat
					})), this.videoSessionManager
				}
				destroyVideoSessionManager() {
					var e;
					null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
			}
			const nr = e => {
					let {
						onClick: t
					} = e;
					return r.a.createElement("button", {
						className: er.a.closeButton,
						onClick: t,
						"aria-label": h.fbt._("close button", null, {
							hk: "2l5YIS"
						})
					}, r.a.createElement(re.a, {
						className: er.a.closeIcon
					}))
				},
				ar = (e, t) => (e && e.post.id) !== (t && t.post.id);
			rr.contextType = p.a;
			var ir = or(Object(pe.c)(rr)),
				dr = s("./src/reddit/contexts/InsideOverlay.tsx"),
				cr = s("./src/reddit/helpers/overlay/index.ts"),
				lr = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				mr = s.n(lr);
			const {
				fbt: ur
			} = s("./node_modules/fbt/lib/FbtPublic.js"), pr = Object(l.a)((e, t) => {
				let {
					match: {
						params: s
					}
				} = t;
				return s
			}), br = Object(l.a)((e, t) => {
				let {
					location: {
						search: s
					}
				} = t;
				return Object(c.a)(s)
			}), hr = Object(i.a)(pr, br, (e, t) => {
				const s = t.get(Be.r),
					{
						subredditName: o
					} = e;
				return "home" === s || "r/popular" === s ? s : "popular" === o ? "r/popular" : o ? void 0 : "home"
			}), vr = Object(i.a)(br, e => {
				const t = e.get(Be.B);
				if (!t) return;
				const s = parseInt(t, 10);
				return isNaN(s) ? void 0 : s
			}), gr = Object(i.c)({
				isEnabled: qe.a,
				isIntroInProgress: ze.b,
				related: hr,
				timestamp: vr
			}), fr = Object(n.b)(gr, (e, t) => ({
				onOpenLoginModal: () => e(Object(m.i)()),
				onStreamByIdRequested: t => e(Object(u.d)(t)),
				updateLocation: (t, s) => {
					let {
						isOverlay: o,
						useReplace: r
					} = s;
					const n = r ? a.c : a.b,
						i = o ? Object(cr.b)(t) : t;
					e(n(i))
				}
			}));
			class Or extends r.a.Component {
				constructor(e) {
					super(e), this.renderPublicAccessNetwork = e => {
						const {
							isOverlay: t,
							location: s,
							match: o,
							related: n,
							timestamp: a
						} = this.props, {
							subredditName: i,
							partialPostId: c
						} = o.params;
						return r.a.createElement("div", {
							className: Object(d.a)(mr.a.rpanContainer, {
								[mr.a.overlay]: t,
								[mr.a.rpanContainerExp]: e
							})
						}, r.a.createElement(p.b, null, r.a.createElement(ir, {
							isOverlay: !!t,
							location: s,
							onNavigation: this.onNavigation,
							related: n,
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
					return e ? r.a.createElement(f.a.Consumer, null, this.renderPublicAccessNetwork) : r.a.createElement(Sr, null)
				}
			}
			const Sr = () => {
				const e = Object(o.useContext)(f.a);
				return r.a.createElement("div", {
					className: Object(d.a)(mr.a.rpanContainer, mr.a.forbiddenScreen, {
						[mr.a.rpanContainerExp]: e
					})
				}, r.a.createElement("h2", null, ur._("Not Found", null, {
					hk: "2ijDv5"
				})))
			};
			t.default = fr(Object(pe.c)(Object(dr.b)(Or)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s.d(t, "l", (function() {
				return _
			})), s.d(t, "m", (function() {
				return C
			})), s.d(t, "i", (function() {
				return k
			})), s.d(t, "d", (function() {
				return P
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
				r = s("./src/lib/objectSelector/index.ts"),
				n = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				a = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				i = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				c = s("./node_modules/lodash/memoize.js");
			const l = e => e.publicAccessNetwork.listings,
				m = s.n(c)()(e => Object(r.a)(Object(o.a)(l, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var u = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			const p = e => e.publicAccessNetwork.models,
				b = e => e.publicAccessNetwork.reports.reported,
				h = e => e.publicAccessNetwork.history,
				v = e => e.publicAccessNetwork.history.cursor,
				g = e => e.publicAccessNetwork.history.visitOrder,
				f = e => e.publicAccessNetwork.hlsStreams,
				O = Object(o.a)(f, e => e.ended),
				S = Object(o.a)(f, e => e.removed),
				w = Object(o.a)(p, O, S, (e, t, s) => {
					const o = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const o = s.stream.state,
							r = D(o, a.a.ENDED) ? a.a.ENDED : o,
							n = s.stream.vod_accessible;
						return r === o && !0 === n ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: r,
									vod_accessible: !0
								}
							}
						}
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const o = s.stream.state,
							r = D(o, a.a.ENDED) ? a.a.ENDED : o,
							n = s.stream.vod_accessible;
						return r === o && !1 === n ? e : {
							...e,
							[t]: {
								...s,
								stream: {
									...s.stream,
									state: r,
									vod_accessible: !1
								}
							}
						}
					}, o)
				}),
				_ = (e, t) => {
					return w(e)[Object(n.g)(t)]
				},
				y = Object(o.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => m(t.listingName)(e, t), w, b, i.h, (e, t, s, o, r) => {
					const i = [];
					if (e) {
						const t = Object(n.g)(e);
						s[t] && i.push(t)
					}
					const d = i.concat(t),
						c = [...new Set(d)],
						l = new Set([...o, ...r]);
					return c.filter(e => {
						const t = s[e];
						return !l.has(e) && !t.post.isHidden && t.stream.state !== a.a.KILLED && t.stream.state !== a.a.PURGED
					})
				}),
				E = Object(o.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, w, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: o
					} = t;
					return y(e, {
						listingName: s,
						streamIdFromPath: o
					})
				}, (e, t, s) => {
					const o = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? o.slice(0, e) : o
				}),
				C = Object(o.a)(w, E, (e, t) => {
					const s = t[0];
					if (s) return e[s]
				}),
				x = Object(o.a)(g, (e, t) => {
					let {
						related: s,
						streamIdFromPath: o,
						subreddit: r
					} = t;
					return E(e, {
						listingName: s || r,
						streamIdFromPath: o
					})
				}, (e, t) => {
					const s = new Set(e),
						o = t.filter(e => !s.has(e));
					if (o.length) return o[0]
				}),
				j = Object(o.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, w, (e, t) => {
					let {
						related: s,
						streamIdFromPath: o,
						subreddit: r
					} = t;
					return E(e, {
						listingName: s || r,
						streamIdFromPath: o
					})
				}, h, (e, t, s, o) => {
					if (!s.length) return;
					const r = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						n = r.find(e => e.stream.state === a.a.IS_LIVE);
					if (n) return n.post.id;
					const i = r.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (o.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				k = Object(r.a)(Object(o.a)(j, w, (e, t) => e ? t[e] : void 0)),
				I = Object(o.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(n.g)(s) : void 0
				}, j, b, i.h, (e, t) => {
					let {
						related: s,
						streamIdFromPath: o,
						subreddit: r
					} = t;
					return E(e, {
						listingName: s || r,
						streamIdFromPath: o
					})
				}, (e, t, s, o, r) => !e || s.includes(e) || o.includes(e) ? t || r[0] : e),
				R = Object(o.a)(v, g, x, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				L = Object(o.a)(v, g, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				P = Object(r.a)(Object(o.a)(I, w, (e, t) => e ? t[e] : void 0)),
				T = Object(r.a)(Object(o.a)(R, w, (e, t) => e ? t[e] : void 0)),
				N = Object(r.a)(Object(o.a)(L, w, (e, t) => e ? t[e] : void 0)),
				M = (Object(r.a)(Object(o.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, w, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => ({
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
					const r = o.stream.state;
					return r === a.a.IS_LIVE || r === a.a.DISCONNECTED ? B.LIVE : r === a.a.ENDED && o.stream.vod_accessible ? B.VOD : B.UNAVAILABLE
				}),
				U = Object(o.a)(P, V, u.b, d.b, d.o, (e, t, s, o, r) => s ? o : e ? t === B.LIVE || t === B.VOD ? e.stream.hls_url : r : void 0),
				H = Object(o.a)(P, V, F, (e, t, s) => e ? t === B.LIVE ? e.broadcast_time : t === B.VOD && s < e.broadcast_time ? s : 0 : 0),
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
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				n = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const a = e => e.publicAccessNetwork.theaterSettings,
				i = Object(o.a)(a, n.n, (e, t) => t && !e.isIntroFinished),
				d = Object(o.a)(a, e => e.lastChatActivityUtcTs),
				c = e => !!e && e + r.a > Date.now()
		},
		"./src/reddit/selectors/experiments/d2xPdpSideRailRecs.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			})), s.d(t, "b", (function() {
				return u
			}));
			var o = s("./src/reddit/constants/experiments.ts"),
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				n = s("./src/reddit/selectors/experiments/index.ts"),
				a = s("./src/reddit/selectors/experiments/utils.ts"),
				i = s("./src/reddit/selectors/meta.ts"),
				d = s("./node_modules/reselect/es/index.js");
			const c = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => Object(i.g)(e) && Object(n.f)(e),
					experimentName: o.lc
				}), a.a),
				l = Object(d.a)(e => Object(r.c)(e, {
					experimentEligibilitySelector: e => !Object(i.g)(e) && Object(n.f)(e),
					experimentName: o.kc
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
				r = s("./src/reddit/helpers/chooseVariant/index.ts"),
				n = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = e => !!Object(n.b)(e) || Object(r.c)(e, {
				experimentEligibilitySelector: a.Q,
				experimentName: o.n
			}) === o.g.Enabled
		},
		"./src/reddit/selectors/experiments/shareToChatButton.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/helpers/chooseVariant/index.ts"),
				a = s("./src/reddit/selectors/user.ts");
			const i = Object(o.a)(e => Object(n.c)(e, {
				experimentEligibilitySelector: a.Q,
				experimentName: r.tc
			}), e => e === r.td)
		},
		"./src/reddit/selectors/i18n/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			})), s.d(t, "b", (function() {
				return d
			}));
			var o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/constants/experiments.ts"),
				n = s("./src/reddit/selectors/chatPost.ts"),
				a = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts");
			const i = e => {
					const t = Object(a.a)(e);
					return Boolean(t) && !Object(r.Wf)(t)
				},
				d = Object(o.a)(i, n.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/CommentsPageExtra.json": function(e) {
			e.exports = JSON.parse('{"id":"56a80c083eca"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"0a569f10c6e4"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"b7a04b87619f"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"10c7c14211a7"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"ecec7ad28cab"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PublicAccessNetwork.d8d6379a3c49b130f455.js.map