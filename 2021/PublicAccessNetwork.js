// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.8bb9c89cb53367bcdddb.js
// Retrieved at 11/10/2021, 9:20:07 AM by Reddit Dataminer v1.0.0
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
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						v = !n && !l && /macintosh/i.test(t),
						g = !a && !m && !u && !p && /linux/i.test(t),
						S = o(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						f = s(/version\/(\d+(\.\d+)?)/i),
						O = /tablet/i.test(t) && !/tablet pc/i.test(t),
						w = !O && /[^-]mobi/i.test(t),
						_ = /xbox/i.test(t);
					/opera/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: f || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? r = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || f
					} : /SamsungBrowser/i.test(t) ? r = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: f || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? r = {
						name: "Opera Coast",
						coast: e,
						version: f || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? r = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: f || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					}, S ? (r.msedge = e, r.version = S) : (r.msie = e, r.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? r = {
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
						version: S
					} : /vivaldi/i.test(t) ? r = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || f
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
						version: f || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (r = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: f || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (r.touchpad = e)) : /bada/i.test(t) ? r = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? r = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || f
					} : /qupzilla/i.test(t) ? r = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || f
					} : /chromium/i.test(t) ? r = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || f
					} : /chrome|crios|crmo/i.test(t) ? r = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : a ? r = {
						name: "Android",
						version: f
					} : /safari|applewebkit/i.test(t) ? (r = {
						name: "Safari",
						safari: e
					}, f && (r.version = f)) : n ? (r = {
						name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
					}, f && (r.version = f)) : r = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || f
					} : {
						name: s(/^(.*)\/(.*) /),
						version: o(/^(.*)\/(.*) /)
					}, !r.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (r.name = r.name || "Blink", r.blink = e) : (r.name = r.name || "Webkit", r.webkit = e), !r.version && f && (r.version = f)) : !r.opera && /gecko\//i.test(t) && (r.name = r.name || "Gecko", r.gecko = e, r.version = r.version || s(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !a && !r.silk ? !r.windowsphone && n ? (r[n] = e, r.ios = e, r.osname = "iOS") : v ? (r.mac = e, r.osname = "macOS") : _ ? (r.xbox = e, r.osname = "Xbox") : b ? (r.windows = e, r.osname = "Windows") : g && (r.linux = e, r.osname = "Linux") : (r.android = e, r.osname = "Android");
					var C = "";
					r.windows ? C = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? C = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? C = (C = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : n ? C = (C = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : a ? C = s(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? C = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? C = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? C = s(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (C = s(/tizen[\/\s](\d+(\.\d+)*)/i)), C && (r.osversion = C);
					var E = !r.windows && C.split(".")[0];
					return O || d || "ipad" == n || a && (3 == E || E >= 4 && !w) || r.silk ? r.tablet = e : (w || "iphone" == n || "ipod" == n || a || i || r.blackberry || r.webos || r.bada) && (r.mobile = e), r.msedge || r.msie && r.version >= 10 || r.yandexbrowser && r.version >= 15 || r.vivaldi && r.version >= 1 || r.chrome && r.version >= 20 || r.samsungBrowser && r.version >= 4 || r.firefox && r.version >= 20 || r.safari && r.version >= 6 || r.opera && r.version >= 10 || r.ios && r.osversion && r.osversion.split(".")[0] >= 6 || r.blackberry && r.version >= 10.1 || r.chromium && r.version >= 20 ? r.a = e : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = e : r.x = e, r
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
					experimentName: m.Md
				});
				return Object(m.sf)(t) ? void 0 : t
			}, e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.Nd
				});
				return Object(m.sf)(t) ? void 0 : t
			}, (e, t) => e === m.Rd.Enabled && t === m.Rd.Enabled);
			var h = s("./src/config.ts");
			var b = s("./src/reddit/selectors/user.ts");
			const v = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						o = new Uint32Array(e);
					return crypto.getRandomValues(o), Array.from(o).map(e => t.charAt(e % s)).join("")
				},
				g = (e = new Date) => new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3"),
				S = (e, t = 0) => Math.trunc(e).toString(16).padStart(t, "0");
			var f;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(f || (f = {}));
			const O = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					o = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(o)).map(S).join("")
			})(f.SHA1, e);

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
					envKey: h.a.muxApiKey,
					localStorageSaltKey: "muxSalt",
					localStorageViewerUserIdKey: "muxViewerUserId",
					playerVersion: `Reddit/Version Build ${h.a.buildNumber} ${h.a.appName}`,
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
					localStorageSaltKey: S,
					localStorageViewerUserIdKey: f,
					playerName: E,
					playerVersion: y,
					respectDoNotTrack: x,
					saltLength: k,
					saltTimeToLive: R,
					viewerUserIdLength: j
				} = {
					...C,
					...t
				};
				class I extends o.Component {
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
						const e = this.props.redditUserId || I.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${g()}${e}${t}`;
						return (await O(s)).substr(0, I.VIEWER_USER_ID_LENGTH)
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
							debug: I.DEBUG,
							disableCookies: I.DISABLE_COOKIES,
							respectDoNotTrack: I.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: I.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: I.PLAYER_NAME,
								player_version: I.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = I.LOCAL_STORAGE_SALT_KEY;
						let t = Object(i.a)(e);
						return t || (t = v(I.SALT_LENGTH), Object(i.b)(e, t, I.SALT_TIME_TO_LIVE)), t
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
							video_duration: s ? I.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? I.STREAM_TYPE_LIVE : I.STREAM_TYPE_ON_DEMAND,
							video_title: o,
							view_session_id: this.props.sessionId,
							player_software_version: this.getDashInstanceData() ? h.a.dashVersion : this.getHlsInstanceData() ? h.a.hlsVersion : null
						}
					}
				}
				I.displayName = _(e), I.ANONYMOUS_USER_ID = s, I.DEBUG = c, I.DISABLE_COOKIES = m, I.DURATION_LIVE = 1 / 0, I.ENV_KEY = u, I.LOCAL_STORAGE_SALT_KEY = S, I.LOCAL_STORAGE_VIEWER_USER_ID_KEY = f, I.PLAYER_NAME = E, I.PLAYER_VERSION = y, I.RESPECT_DO_NOT_TRACK = x, I.SALT_LENGTH = k, I.SALT_TIME_TO_LIVE = R, I.STREAM_TYPE_LIVE = "live", I.STREAM_TYPE_ON_DEMAND = "on-demand", I.VIEWER_USER_ID_LENGTH = j;
				const P = Object(o.forwardRef)((e, t) => r.a.createElement(I, w({}, e, {
						forwardedRef: t
					}))),
					M = Object(a.c)({
						redditUserId: b.i,
						isMuxEnabled: p
					});
				return Object(n.b)(M, null, null, {
					forwardRef: !0
				})(P)
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
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return w
			})), s.d(t, "c", (function() {
				return _
			})), s.d(t, "f", (function() {
				return C
			})), s.d(t, "a", (function() {
				return E
			})), s.d(t, "e", (function() {
				return y
			})), s.d(t, "g", (function() {
				return x
			})), s.d(t, "h", (function() {
				return k
			})), s.d(t, "b", (function() {
				return R
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
				h = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				v = s("./src/reddit/selectors/experiments/d2xGqlDistinguish.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/actions/comment/index.ts"),
				f = s("./src/reddit/actions/comment/constants.ts");
			const O = Object(n.a)(f.n),
				w = e => async (t, s, {
					apiContext: o
				}) => {
					s().features.comments.models[e] && (await Object(m.j)(o(), e)).ok && t((e => async t => {
						t(O({
							commentId: e
						}))
					})(e))
				}, _ = e => async (t, s, {
					apiContext: o
				}) => {
					if (!Object(g.K)(s())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const r = s().features.comments.models[e];
					if (!r) return;
					const n = r.isLocked ? m.l : m.e;
					t(Object(S.i)({
						[e]: {
							isLocked: !r.isLocked
						}
					})), (await n(o(), e)).ok || t(Object(S.i)({
						[e]: {
							isLocked: r.isLocked
						}
					}))
				}, C = Object(n.a)(f.F), E = e => async (t, s, {
					apiContext: o
				}) => {
					const r = s(),
						n = r.features.comments.models[e],
						a = r.user.account ? r.user.account.displayText : null;
					n && a && (t(Object(S.i)({
						[e]: {
							isApproved: !0,
							approvedBy: a,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(o(), e)).ok || t(Object(S.i)({
						[e]: {
							isApproved: n.isApproved,
							approvedBy: null,
							bannedBy: n.bannedBy,
							isRemoved: n.isRemoved,
							isSpam: n.isSpam,
							modNote: n.modNote,
							modReasonBy: n.modReasonBy,
							modRemovalReason: n.modRemovalReason,
							numReports: n.numReports || null
						}
					})), Object(d.d)())
				}, y = (e, t) => async (s, o, {
					apiContext: r
				}) => {
					const n = o(),
						a = n.features.comments.models[e],
						i = n.user.account ? n.user.account.displayText : null;
					a && i && (s(Object(S.i)({
						[e]: {
							approvedBy: null,
							bannedBy: i,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.h)(r(), e, t)).ok || s(Object(S.i)({
						[e]: {
							approvedBy: a.approvedBy,
							bannedBy: a.bannedBy,
							isApproved: a.isApproved,
							isRemoved: a.isRemoved,
							isSpam: a.isSpam
						}
					})), Object(d.d)())
				}, x = e => async (t, s, {
					apiContext: o
				}) => {
					const r = s().features.comments.models[e];
					if (!r) return;
					const n = r.ignoreReports ? m.k : m.d;
					t(Object(S.i)({
						[e]: {
							ignoreReports: !r.ignoreReports
						}
					})), (await n(o(), e)).ok || t(Object(S.i)({
						[e]: {
							ignoreReports: r.ignoreReports
						}
					}))
				}, k = (e, t, s) => async (n, a, {
					gqlContext: i
				}) => {
					const d = Object(b.b)(a(), {
						commentId: e
					});
					if (!d) return;
					const l = s === r.ac.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(i(), {
							input: m
						})).ok) n(Object(S.i)({
						[e]: {
							userReports: Object(p.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(o.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), h.b.Error);
						n(Object(c.f)(e))
					}
				}, R = (e, t, s) => async (o, n, {
					apiContext: i,
					gqlContext: d
				}) => {
					const c = n(),
						l = c.features.comments.models[e];
					if (!l) return;
					const u = l.postId,
						p = c.postStickiedComments.data[u],
						h = r.g[t];
					let b;
					if (o(Object(S.i)({
							[e]: {
								distinguishType: t,
								isAdmin: t === r.F.ADMIN,
								isMod: t === r.F.MODERATOR,
								isStickied: !!s
							}
						})), s && p && p !== e && o(Object(S.i)({
							[p]: {
								isStickied: !1
							}
						})), Object(v.a)(n())) {
						const o = Object(m.b)(d(), e, t),
							r = Object(m.c)(d(), e, !!s),
							n = [o];
						(s || !s && e === p) && n.push(r), b = {
							ok: (await Promise.all(n)).every(e => e.ok)
						}
					} else b = await Object(m.g)(i(), e, h, s || null);
					b.ok ? s && o(C({
						id: e,
						postId: u,
						commentsPageKey: Object(a.a)(u, null, {
							sort: r.t.CONFIDENCE,
							...c.platform.currentPage.queryParams
						})
					})) : (o(Object(S.i)({
						[e]: {
							distinguishType: l.distinguishType,
							isAdmin: l.isAdmin,
							isMod: l.isMod,
							isStickied: l.isStickied
						}
					})), o(Object(S.i)({
						[p]: {
							isStickied: c.features.comments.models[p].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return lt
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return mt
			})), s.d(t, "commentsPagePending", (function() {
				return ut
			})), s.d(t, "commentsPageLoaded", (function() {
				return pt
			})), s.d(t, "commentsPageFailed", (function() {
				return ht
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return bt
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return vt
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return gt
			})), s.d(t, "commentsPageRequested", (function() {
				return St
			})), s.d(t, "commentsPageDataRequested", (function() {
				return ft
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return Ot
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return wt
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var o = s("./node_modules/react-router-redux/es/index.js"),
				r = s("./src/reddit/actions/category/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				a = s("./src/reddit/components/CreatorStats/helpers.ts"),
				i = s("./src/lib/makeGqlRequest/index.ts"),
				d = s("./src/redditGQL/operations/CreatorStats.json");
			var c = s("./src/reddit/selectors/creatorStats.ts"),
				l = s("./src/reddit/selectors/experiments/creatorStats.ts"),
				m = s("./src/reddit/actions/creatorStats/constants.ts"),
				u = s("./src/lib/initializeClient/installReducer.ts"),
				p = s("./src/reddit/reducers/features/creatorStats/index.ts");
			Object(u.a)({
				features: {
					creatorStats: p.a
				}
			});
			const h = Object(n.a)(m.b),
				b = Object(n.a)(m.a),
				v = ({
					postId: e,
					subredditId: t
				}) => async (s, o, {
					gqlContext: r
				}) => {
					var n, m;
					const u = o();
					if (!Object(l.a)(u, e)) return;
					if (!Object(c.a)(u, e)) return;
					const p = u.posts.models[e];
					if (!(p && Object(a.d)(p.created))) return;
					if (null === (m = null === (n = o().features) || void 0 === n ? void 0 : n.creatorStats) || void 0 === m ? void 0 : m.postStats[e]) return;
					s(h());
					const v = await (async (e, t) => {
						return await Object(i.a)(e, {
							...d,
							variables: t
						})
					})(r(), {
						postId: e,
						subredditId: t
					});
					if (v.ok && v.body) {
						const {
							data: e
						} = v.body, t = (e => {
							const t = {},
								s = {},
								{
									postStatsById: o,
									subredditInfoById: r
								} = e;
							if (!o) return;
							const {
								id: n
							} = o;
							return t[n] = o, r && "id" in r && (s[r.id] = r), {
								postStats: t,
								subredditKarma: s
							}
						})(e);
						t && s(b(t))
					}
				};
			var g = s("./src/reddit/actions/discoveryUnit.ts"),
				S = s("./src/reddit/actions/pages/subreddit.ts"),
				f = s("./src/reddit/actions/shortcuts/active.ts"),
				O = s("./src/reddit/actions/subredditSettings.ts"),
				w = s("./src/reddit/endpoints/governance/posts.ts"),
				_ = s("./src/reddit/endpoints/page/commentsPage.ts"),
				C = s("./src/reddit/endpoints/page/subredditPage.ts"),
				E = s("./src/reddit/endpoints/profile/info.ts"),
				y = s("./src/reddit/models/Post/index.ts"),
				x = s("./src/lib/constants/index.ts"),
				k = s("./src/lib/pageTitle.ts"),
				R = s("./src/reddit/actions/economics/helpers/async.ts"),
				j = s("./src/reddit/actions/externalAccount.ts"),
				I = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				P = s("./src/reddit/actions/platform.ts"),
				M = s("./src/reddit/actions/post.ts"),
				T = s("./src/reddit/actions/profile/index.ts"),
				L = s("./src/reddit/actions/subreddit.ts"),
				N = s("./src/reddit/actions/toaster.ts"),
				A = s("./src/reddit/constants/adEvents.ts"),
				D = s("./src/reddit/constants/graphql.ts"),
				B = s("./src/reddit/constants/parameters.ts"),
				V = s("./src/reddit/constants/posts.ts"),
				F = s("./src/reddit/helpers/commentList/index.ts"),
				U = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				H = s("./src/reddit/models/Comment/index.ts"),
				K = s("./src/reddit/models/Media/index.ts"),
				q = s("./src/reddit/models/Subreddit/index.ts"),
				W = s("./src/reddit/models/User/index.ts"),
				G = s("./src/reddit/selectors/category.ts"),
				J = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				Q = s("./src/reddit/selectors/experiments/postSeo.ts"),
				X = s("./node_modules/reselect/es/index.js"),
				z = s("./src/reddit/constants/experiments.ts"),
				Y = s("./src/reddit/helpers/chooseVariant/index.ts"),
				Z = s("./src/reddit/helpers/getPostFromRouteMatch/index.ts"),
				$ = s("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				ee = s("./src/reddit/selectors/platform.ts"),
				te = s("./node_modules/fbt/lib/FbtPublic.js"),
				se = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				oe = s("./src/reddit/selectors/user.ts");
			const re = new Set([y.g.AntiEvilOps, y.g.AutomodFiltered, y.g.CommunityOps, y.g.ContentTakedown, y.g.CopyrightTakedown, y.g.Moderator, y.g.Reddit]),
				ne = new Set([y.g.Author, y.g.AuthorDeleted]),
				ae = Object(X.a)(Z.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return re.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = te.fbt._("[removed]", null, {
						hk: "2CBRa4"
					}).toString();
					let o = Object(se.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== K.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				ie = Object(X.a)(Z.a, e => {
					var t;
					if (!e) return !1;
					if (e.removedByCategory) {
						const t = e.removedByCategory;
						return ne.has(t)
					}
					if (e.created > Date.UTC(2019, 0)) return !1;
					const s = te.fbt._("[deleted]", null, {
						hk: "12mOne"
					}).toString();
					let o = Object(se.b)(e);
					return o || (null === (t = e.media) || void 0 === t ? void 0 : t.type) !== K.o.TEXT || (o = e.media.markdownContent), o === s
				}),
				de = Object(X.a)(oe.k, Z.a, (e, t) => !!((null == e ? void 0 : e.id) && (null == t ? void 0 : t.authorId)) && e.id === t.authorId),
				ce = Object(X.a)(ee.f, Z.a, ae, ie, $.a, de, $.b, (e, t, s, o, r, n, a) => {
					if (!e || !t || r) return !1;
					if (o) return !0;
					const i = n || a,
						d = t.score >= 2 || t.numComments >= 2;
					return !(!s || i || d)
				});
			var le = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				me = s("./src/reddit/selectors/posts.ts"),
				ue = s("./src/reddit/selectors/subreddit.ts"),
				pe = s("./src/lib/makeCommentsPageKey/index.ts"),
				he = s("./src/reddit/actions/ads/index.ts"),
				be = s("./src/reddit/helpers/canonicalUrls.ts"),
				ve = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ge = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				Se = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				fe = s("./src/lib/performanceTimings/index.tsx"),
				Oe = s("./src/reddit/actions/gold/powerups.ts"),
				we = s("./src/lib/makeListingKey/index.ts"),
				_e = s("./src/reddit/actions/googleQASchema/constants.ts");
			const Ce = Object(n.a)(_e.b),
				Ee = Object(n.a)(_e.a);
			var ye = s("./src/reddit/actions/linkedPosts/constants.ts");
			const xe = Object(n.a)(ye.a),
				ke = Object(n.a)(ye.c),
				Re = Object(n.a)(ye.b);
			s("./src/redditGQL/operations/OtherDiscussions.json");
			var je = s("./src/reddit/helpers/graphql/normalizePostFlairFromGql/index.ts"),
				Ie = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts"),
				Pe = s("./src/reddit/helpers/graphql/normalizeProfileFromGql/index.ts"),
				Me = s("./src/reddit/helpers/graphql/normalizeSubredditFromGql/index.ts");
			var Te = ({
				getState: e,
				onFailure: t,
				onSuccess: s,
				postId: o,
				response: r
			}) => {
				if (!r.ok) return void t(r.error);
				const n = r.body,
					{
						post: a
					} = n && n.data,
					i = e(),
					d = Object(we.a)(o, null, {
						isOtherDiscussions: !0
					});
				if (a) {
					if (a.otherDiscussions && a.otherDiscussionsCount) {
						const {
							otherDiscussions: e,
							otherDiscussionsCount: t
						} = a, {
							postFlair: r,
							postIds: n,
							posts: c,
							profiles: l,
							subreddits: m
						} = (e => {
							const t = {
									postFlair: {},
									postIds: [],
									posts: {},
									profiles: {},
									subreddits: {}
								},
								s = e => {
									const s = Object(Ie.f)(e);
									t.posts[s.id] = s;
									const {
										crosspostRoot: o
									} = e;
									if (o && o.type === y.a.Post && o.postInfo) {
										const e = Object(Ie.f)(o.postInfo);
										t.posts[e.id] = e
									}
									return Object(y.l)(e) ? t.profiles[e.profile.id] || (t.profiles[e.profile.id] = Object(Pe.a)(e.profile)) : Object(y.n)(e) && (t.subreddits[e.subreddit.id] || (t.subreddits[e.subreddit.id] = Object(Me.a)(e.subreddit)), t.postFlair[e.subreddit.id] || (t.postFlair[e.subreddit.id] = Object(je.a)(e.subreddit))), s.id
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
						s({
							count: t,
							key: d,
							meta: i.meta,
							postFlair: r,
							postId: o,
							postIds: n,
							posts: c,
							profiles: l,
							subreddits: m
						})
					}
				} else s({
					count: 0,
					key: d,
					meta: i.meta,
					postFlair: {},
					postId: o,
					postIds: [],
					posts: {},
					profiles: {},
					subreddits: {}
				})
			};
			const Le = Object(n.a)(I.a),
				Ne = Object(n.a)(I.b),
				Ae = Object(n.a)(I.c);
			var De = s("./src/reddit/actions/subreddit/constants.ts"),
				Be = s("./src/redditGQL/operations/PostFeedAndOtherDiscussions.json");
			s("./src/redditGQL/operations/SubredditPosts.json"), s("./src/redditGQL/operations/SubredditsPosts.json");
			var Ve = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: r
				}) => {
					try {
						t({
							altText: r && r.media && (r.media.still && r.media.still.altText || r.media.obfuscated && r.media.obfuscated.altText) || null,
							postId: o
						})
					} catch (n) {
						s(n)
					}
				},
				Fe = s("./src/lib/makeLinkedPostsListingKey/index.ts");
			var Ue = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: r
				}) => {
					try {
						const s = [],
							n = {},
							a = {};
						if (!r || !r.linked) return;
						const i = e(),
							d = i.posts && i.posts.models,
							c = Object(Fe.a)(o),
							l = r.linked.posts && r.linked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Ie.a)(e);
								n[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (n[t.crosspost.id] = t.crosspost)
							}
							if (Object(y.n)(e)) {
								const {
									subreddit: t
								} = e;
								a[t.id] = Object(Me.a)(t)
							}
						}
						t({
							dist: r.linked.posts && r.linked.posts.dist || null,
							key: c,
							meta: i.meta,
							posts: n,
							postIds: s,
							subreddits: a
						})
					} catch (n) {
						s(n)
					}
				},
				He = s("./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts");
			var Ke = e => e.reduce((e, t) => (e[t.id] = t, e), {});
			var qe = ({
					isLinkedPostsFallback: e,
					getState: t,
					onSuccess: s,
					onFailure: o,
					options: r,
					postId: n,
					subreddit: a
				}) => {
					try {
						if (!a) return;
						const o = a.elements || a.posts,
							i = t(),
							d = ((e, t) => {
								const {
									edges: s
								} = e, o = s.filter(e => (e => !e.node.crosspostRoot)(e) && ((e, t) => !t.hasOwnProperty(e.node.id))(e, t));
								return {
									...e,
									edges: o
								}
							})(o, i.posts && i.posts.models),
							c = Object(He.a)(d),
							l = Ke(c),
							m = o.edges.reduce((e, t) => (t.node.id && t.node.id !== n && e.push(t.node.id), e), []),
							{
								range: u,
								sort: p,
								subredditName: h
							} = r,
							b = e && n ? Object(Fe.a)(n, !0) : Object(we.a)(h, x.V[p], {
								t: u
							});
						s({
							dist: o.dist,
							key: b,
							meta: i.meta,
							postIds: m,
							posts: l
						})
					} catch (i) {
						o(i)
					}
				},
				We = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				Ge = s("./src/lib/makeNsfwLinkedPostsListingKey/index.ts");
			var Je = ({
					getState: e,
					onSuccess: t,
					onFailure: s,
					postId: o,
					post: r
				}) => {
					try {
						const s = [],
							n = {},
							a = {};
						if (!r || !r.nsfwLinked) return;
						const i = e(),
							d = i.posts && i.posts.models,
							c = Object(Ge.a)(o),
							l = r.nsfwLinked.posts && r.nsfwLinked.posts.edges || [];
						for (const {
								node: e
							} of l) {
							if (!e || !e.id) break;
							if (s.push(e.id), !d.hasOwnProperty(e.id)) {
								const t = Object(Ie.a)(e);
								n[e.id] = t.post, t.crosspost && !d.hasOwnProperty(t.crosspost.id) && (n[t.crosspost.id] = t.crosspost)
							}
							if (Object(y.n)(e)) {
								const {
									subreddit: t
								} = e;
								a[t.id] = Object(Me.a)(t)
							}
						}
						t({
							dist: r.nsfwLinked.posts && r.nsfwLinked.posts.dist || null,
							key: c,
							meta: i.meta,
							posts: n,
							postIds: s,
							subreddits: a
						})
					} catch (n) {
						s(n)
					}
				},
				Qe = s("./src/reddit/actions/imageOCRAltText/constants.ts");
			const Xe = Object(n.a)(Qe.b),
				ze = Object(n.a)(Qe.a);
			var Ye = s("./src/reddit/actions/nsfwLinkedPosts/constants.ts");
			const Ze = Object(n.a)(Ye.b),
				$e = Object(n.a)(Ye.a),
				et = Object(n.a)(De.j),
				tt = Object(n.a)(De.i),
				st = (Object(n.a)(De.r), Object(n.a)(De.q), e => async (t, s, {
					gqlContext: o
				}) => {
					var r, n, a, d;
					const {
						includeNSFWListingBelowExperiment: c,
						includeListingBelowExperiment: l,
						includeOtherDiscussions: m,
						includePostFeed: u,
						includePostQASchemaEligibilityFlag: p,
						listingBelowExperimentVariant: h,
						postId: b,
						range: v,
						sort: g,
						subredditName: S
					} = e, f = Object(we.a)(b, null, {
						isOtherDiscussions: !0
					}), O = s(), w = Object(me.A)(O, {
						listingKey: f
					}), _ = m && (!w || 0 === w.length), C = Object(we.a)(S, x.V[g], {
						t: v
					}), E = Object(me.A)(O, {
						listingKey: C
					}), y = u && (l || !E || 0 === E.length), k = l, R = c, j = Object(me.H)(O, {
						postId: b
					}), I = !!j && !!j.media && (Object(K.J)(j.media) || Object(K.F)(j.media)) && !j.media.altText;
					if (!(_ || y || k || R || I || p)) return;
					_ && t(Ae({
						key: f
					}));
					const P = await ((e, t) => Object(i.a)(e, {
							...Be,
							variables: t
						}))(o(), e),
						M = P.body,
						T = Object(We.a)(h),
						L = k && !!(null === (a = null === (n = null === (r = M.data) || void 0 === r ? void 0 : r.post) || void 0 === n ? void 0 : n.linked) || void 0 === a ? void 0 : a.isEligible),
						N = k && (T || !L);
					p && (P.ok ? M.data && M.data.post && t(Ce({
						postId: b,
						isEligibleForQASchema: null !== (d = M.data.post.isEligibleForQASchema) && void 0 !== d && d
					})) : t(Ee())), _ && Te({
						getState: s,
						onFailure: e => t(Le(e)),
						onSuccess: e => t(Ne(e)),
						postId: b,
						response: P
					}), (y && !k || N) && (P.ok ? M.data && qe({
						getState: s,
						isLinkedPostsFallback: N,
						onFailure: e => t(tt(e)),
						onSuccess: e => t(et(e)),
						options: e,
						postId: b,
						subreddit: M.data.subreddit
					}) : t(tt(P.error))), k && L && !T && P.ok && M.data && Ue({
						getState: s,
						onFailure: e => t(Re(e)),
						onSuccess: e => t(ke(e)),
						postId: b,
						post: M.data.post
					}), R && P.ok && Je({
						getState: s,
						onFailure: e => t($e(e)),
						onSuccess: e => t(Ze(e)),
						postId: b,
						post: M.data.post
					}), I && P.ok && M.data && Ve({
						getState: s,
						onFailure: e => t(ze(e)),
						onSuccess: e => t(Xe(e)),
						postId: b,
						post: M.data.post
					}), k && t(xe({
						postId: b,
						isEligibleForLinkedPosts: L
					}))
				}),
				ot = e => {
					var t, s;
					const o = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
						r = o && Object(y.t)(o),
						{
							sortToUse: n
						} = Object(U.a)(e, r);
					return (!n || n === x.t.CONFIDENCE) && Object(Y.c)(e, {
						experimentEligibilitySelector: () => Object(oe.J)(e),
						experimentName: z.z
					}) === z.B.Enabled
				};
			var rt = s("./src/reddit/selectors/chatPost.ts"),
				nt = s("./src/reddit/selectors/seo/index.ts"),
				at = s("./src/reddit/actions/pages/constants.ts"),
				it = s("./src/reddit/reducers/pages/comments/index.ts"),
				dt = s("./src/reddit/selectors/experiments/nsfwListingBelow.ts"),
				ct = s("./src/reddit/selectors/i18n/index.ts");
			Object(u.a)({
				pages: {
					comments: it.a
				}
			});
			const lt = 25,
				mt = 100,
				ut = Object(n.a)(at.h),
				pt = Object(n.a)(at.f),
				ht = Object(n.a)(at.e),
				bt = (e, t, s) => {
					const o = !e,
						r = Object(me.H)(t, {
							postId: s
						}).belongsTo,
						n = Object(ue.I)(t, {
							identifier: r
						}),
						a = Object(nt.c)(t, {
							identifier: r
						}),
						i = !!Object(We.c)(t),
						d = Object(ct.a)(t),
						c = {
							listingBelow: !1,
							nsfwListingBelow: !1,
							postFeed: !1,
							postQASchema: !1
						};
					return i ? (c.listingBelow = a || o, c.postFeed = c.listingBelow) : d ? c.nsfwListingBelow = !0 : c.postFeed = (a || o) && (!Object(q.h)(n) && !Object(rt.d)(t, {
						postId: s
					}) && !!n || !Object(ee.i)(t) && Object(Q.e)(t)), e && (c.postQASchema = Object(Q.d)(t)), c
				},
				vt = (e, t) => e || t.postFeed || t.listingBelow || t.nsfwListingBelow || t.postQASchema,
				gt = e => ({
					includePostFeed: e.postFeed,
					includeNSFWListingBelowExperiment: e.nsfwListingBelow,
					includeListingBelowExperiment: e.listingBelow,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				St = e => async (t, s) => {
					var n, a;
					const {
						partialPostId: i,
						partialCommentId: d
					} = e.params, {
						subredditName: c
					} = e.params || "", l = i ? Object(y.t)(i) : "", m = d && Object(H.h)(d), {
						path: u,
						queryParams: p
					} = e, h = Object(I.d)(u), {
						instanceId: b
					} = p, {
						hasSortParam: v,
						sortToUse: g
					} = Object(U.a)(s(), l), S = null === (a = null === (n = Object(ee.b)(s())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === a ? void 0 : a.route.chunk, O = ["context", "depth", "limit", B.f].reduce((e, t) => {
						const s = parseInt(p[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: c,
						hasSortParam: v,
						instanceId: b,
						include_categories: !0
					});
					v && (O.sort = g), O.onOtherDiscussions = h, t(M.r(l)), await t(ft(l, m, O, g));
					const w = s().posts.models[l],
						_ = Object(oe.K)(s());
					if (w && "subreddit" === w.belongsTo.type) {
						const e = w.belongsTo.id,
							s = Object(fe.i)(() => t(Object(Oe.m)(e, {
								fullData: !0,
								includeIdentity: _
							})), {
								name: "subredditPowerupsRequested",
								page: S,
								isLoggedIn: _
							});
						await s
					}
					if (w) {
						const n = ((e, t) => {
								const s = Object(me.U)(e, {
										postId: t
									}),
									o = Object(me.H)(e, {
										postId: t
									});
								return s && o ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), l),
							a = Object(ue.I)(s(), {
								identifier: w.belongsTo
							});
						if (a && (e => z.Ge.Redirect === Object(Y.b)(e, {
								experimentEligibilitySelector: ce,
								experimentName: z.ye
							}))(s())) return void t(Object(o.c)(a.url));
						if ((w.media && w.media.type) === K.o.LIVEVIDEO) {
							const e = `/rpan${w.belongsTo.type===V.a.SUBREDDIT?a.url:"/"}${Object(y.u)(w.id)}`;
							return void t(Object(o.c)(e))
						}
						if (w.belongsTo.type !== V.a.SUBREDDIT || w.isSponsored) {
							if (w.belongsTo.type === V.a.PROFILE) {
								const e = Object(fe.i)(() => t(T.d(a.name)), {
									name: "getProfileInfo",
									page: S,
									isLoggedIn: _
								});
								await e
							}
						} else {
							if (!!!Object(ue.P)(s(), {
									subredditId: w.belongsTo.id
								})) {
								const e = Object(fe.i)(() => t(L.o(a.name)), {
									name: "getSubredditRules",
									page: S,
									isLoggedIn: _
								});
								await e
							}
						}
						const i = bt(!1, s(), l),
							d = h;
						if (vt(d, i)) {
							Object(ve.d)(ve.a.LinkedPosts);
							const e = Object(ve.c)(ve.a.LinkedPosts);
							Object(ve.d)(ve.a.NsfwLinkedPosts);
							const o = Object(ve.c)(ve.a.NsfwLinkedPosts),
								r = {
									adContext: {
										layout: D.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: l
									},
									range: x.ec.WEEK.toUpperCase(),
									sort: x.O.TOP,
									subredditName: a.name
								},
								n = {
									postId: l
								},
								c = {
									listingBelowCorrelationId: e,
									listingBelowExperimentVariant: Object(We.c)(s())
								},
								m = {
									nsfwListingBelowCorrelationId: o,
									nsfwListingBelowExperimentVariant: Object(dt.a)(s())
								},
								u = gt(i);
							Object(fe.i)(() => t(st({
								...n,
								...r,
								...c,
								...m,
								...u,
								includeOtherDiscussions: d
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: _,
								page: S
							});
							0
						}
						t(Object(j.p)()), t(P.m({
							title: n
						}));
						const c = s().posts.instances[l] ? e.queryParams.instanceId : w.postId;
						t(Object(f.b)(c)); {
							const e = Object(G.d)(s(), {
								subredditName: a.name
							});
							await Promise.all(e.map(e => t(r.c(e))))
						}
					} else t(P.m({
						title: k.d()
					}));
					const {
						routePrefix: C
					} = e.params;
					V.b[C] === V.a.PROFILE ? Object(be.d)(s(), t, e) : Object(be.b)(s(), t, e)
				}, ft = (e, t, s, o) => async (r, n, a) => {
					var i, d;
					const c = n(),
						l = Object(pe.a)(e, t, s),
						{
							subredditName: m
						} = s,
						u = c.pages.comments.keyToHeadCommentId.hasOwnProperty(l),
						p = c.pages.comments.api.fullyLoaded[l],
						h = c.pages.comments.api.error[l],
						b = c.pages.comments.api.pending[l],
						f = !Object(oe.J)(c),
						O = Object(oe.k)(c),
						y = o === x.t.CHAT,
						k = !!c.platform.lastPage;
					if ((b || u && !h) && !(y && k)) {
						if (u && !c.sidebarPromotedPosts.firstFetch) {
							const e = Object(ee.i)(c) ? Se.a.COMMENTS_OVERLAY : Se.a.COMMENTS;
							window.addEventListener("load", () => {
								r(Object(he.b)(e))
							})
						}
						return void(p || r(wt(e, t, s)))
					}
					r(g.g());
					const j = c.user.prefs.commentMode;
					r(ut({
						key: l,
						postId: e,
						commentMode: j
					}));
					const I = {
						...s,
						...y ? {
							sort: x.t.LIVE
						} : f ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(me.H)(n(), {
							postId: e
						});
						t && t.numComments && t.numComments > mt && (I.truncate = lt)
					}
					const T = null === (d = null === (i = Object(ee.b)(c)) || void 0 === i ? void 0 : i.routeMatch) || void 0 === d ? void 0 : d.route.chunk,
						L = Object(fe.i)(() => Object(_.a)(a.apiContext(), e, t, I, Object(J.a)(n()), ot(n())), {
							name: "fetchCommentsPage",
							isLoggedIn: !f,
							page: T
						}),
						D = !f && O && Object(fe.i)(() => Object(E.d)(a.gqlContext(), Object(W.e)(O)), {
							name: "fetchProfileKarma",
							isLoggedIn: !f,
							page: T
						}) || null,
						[B, V] = await Promise.all([L, D]);
					let U;
					if (r(Object(P.n)(B.status)), B.ok) {
						const t = Object.keys(B.body.posts).filter(e => !!B.body.posts[e].isMeta),
							s = B.body.posts[e];
						if (t.length) {
							const e = Object(fe.i)(() => Object(w.a)(a.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: T,
									isLoggedIn: !f
								}),
								o = await e;
							o.ok && (U = o.body)
						}
						if (V && V.ok) {
							const {
								data: e
							} = V.body, t = {
								karma: {
									...E.a
								}
							};
							if (Object(E.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							B.body && B.body.account && Object.assign(B.body.account, t)
						}
						const o = Object(F.a)(B.body, e, c);
						r(pt({
							key: l,
							postId: e,
							meta: c.meta,
							governance: U,
							shouldCollapse: o,
							...B.body
						}));
						const n = s && "subreddit" === s.belongsTo.type ? s.belongsTo.id : null;
						await r(v({
							postId: e,
							subredditId: n
						}))
					} {
						const o = Object(me.H)(n(), {
							postId: e
						});
						o && B.body.comments && Object.keys(B.body.comments).length < o.numComments ? r(wt(e, t, s)) : B.ok && r(Ot({
							key: l
						}));
						const a = Object(ee.i)(c) ? Se.a.COMMENTS_OVERLAY : Se.a.COMMENTS;
						r(Object(he.b)(a))
					}
					if (B.ok) {
						r(N.g(l));
						const t = Object(me.H)(n(), {
							postId: e
						});
						if (r(M.z(t, A.a.CommentsView)), t && "subreddit" === t.belongsTo.type && B.body.comments) {
							const e = Object(fe.i)(() => r(Object(R.a)({
								commentIds: Object.keys(B.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: T,
								isLoggedIn: !f
							});
							await e
						}
					} else {
						let e;
						m && (r(Object(S.subredditPending)({
							key: l
						})), e = await Object(ge.a)("subreddit", () => Object(C.a)(a.apiContext(), m, {})), r(Object(P.n)(e.status)), r(Object(S.handleSubredditPageApiError)(e, m))), r(ht({
							error: B.error,
							key: l,
							...e ? e.body : B.body
						}))
					}
				}, Ot = Object(n.a)(at.g), wt = (e, t, s) => async (o, r, n) => {
					const a = Object(pe.a)(e, t, s),
						i = r(),
						d = Object(oe.K)(i),
						c = Object(oe.k)(i),
						l = Object(_.a)(n.apiContext(), e, t, s, Object(J.a)(i), ot(i)),
						m = d && c && Object(E.d)(n.gqlContext(), Object(W.e)(c)) || null,
						[u, p] = await Promise.all([l, m]);
					if (o(Object(P.n)(u.status)), u.ok) {
						if (p && p.ok) {
							const {
								data: e
							} = p.body, t = {
								karma: {
									...E.a
								}
							};
							if (Object(E.e)(e.redditorInfoByName)) {
								const s = e.redditorInfoByName.karma;
								t.karma = {
									...t.karma,
									...s
								}
							}
							u.body && u.body.account && Object.assign(u.body.account, t)
						}
						const t = Object(F.a)(u.body, e, i);
						o(pt({
							key: a,
							postId: e,
							meta: i.meta,
							shouldCollapse: t,
							...u.body
						})), o(Ot({
							key: a
						}));
						const s = r().posts.models[e],
							n = s && Object(me.U)(r(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && n && Object(le.a)(i, {
							subredditId: n.id
						}) && o(Object(O.h)(n.name, n.id)), s && "subreddit" === s.belongsTo.type && u.body.comments && await o(Object(R.a)({
							commentIds: Object.keys(u.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else o(ht({
						error: u.error,
						key: a,
						...u.body
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/page.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "publicAccessNetworkRequested", (function() {
				return i
			}));
			var o = s("./src/lib/pageTitle.ts"),
				r = (s("./src/reddit/actions/pages/subreddit.ts"), s("./src/reddit/actions/platform.ts")),
				n = (s("./src/reddit/actions/publicAccessNetwork/streams.ts"), s("./src/reddit/actions/users.ts")),
				a = s("./src/reddit/selectors/user.ts");
			const i = e => async (e, t) => {
				const s = t(),
					i = o.j();
				e(r.m({
					title: i
				})), Object(a.K)(s) || await e(n.t())
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
				return Y
			})), s.d(t, "removalReasonsLoaded", (function() {
				return Z
			})), s.d(t, "removalReasonsFailed", (function() {
				return $
			})), s.d(t, "removalReasonsRequested", (function() {
				return ee
			})), s.d(t, "removalReasonAddedPending", (function() {
				return te
			})), s.d(t, "removalReasonAddedSuccess", (function() {
				return se
			})), s.d(t, "removalReasonAddedFailed", (function() {
				return oe
			})), s.d(t, "addRemovalReason", (function() {
				return re
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ne
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return ae
			})), s.d(t, "editRemovalReasonFailed", (function() {
				return ie
			})), s.d(t, "editRemovalReason", (function() {
				return de
			})), s.d(t, "deleteRemovalReasonPending", (function() {
				return ce
			})), s.d(t, "deleteRemovalReasonSuccess", (function() {
				return le
			})), s.d(t, "deleteRemovalReasonFailed", (function() {
				return me
			})), s.d(t, "deleteRemovalReason", (function() {
				return ue
			})), s.d(t, "removedItemsSelected", (function() {
				return pe
			})), s.d(t, "fetchReasonsAndOpenModal", (function() {
				return he
			})), s.d(t, "removalReasonSubmittedPending", (function() {
				return be
			})), s.d(t, "removalReasonSubmittedSuccess", (function() {
				return ve
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return ge
			})), s.d(t, "removalReasonMessagePending", (function() {
				return Se
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return fe
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Oe
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return we
			})), s.d(t, "submitRemovalReason", (function() {
				return _e
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return Ce
			}));
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./node_modules/redux/es/redux.js");
			const a = "REMOVALREASONS__ADD_PENDING",
				i = "REMOVALREASONS__ADD_SUCCESS",
				d = "REMOVALREASONS__ADD_FAILED",
				c = "REMOVALREASONS__EDIT_PENDING",
				l = "REMOVALREASONS__EDIT_SUCCESS",
				m = "REMOVALREASONS__EDIT_FAILED",
				u = "REMOVALREASONS__DELETE_PENDING",
				p = "REMOVALREASONS__DELETE_SUCCESS",
				h = "REMOVALREASONS__DELETE_FAILED";
			var b = (e = null, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_PENDING":
					case "REMOVALREASONS__LOAD_SUCCESS":
					case a:
					case i:
					case c:
					case l:
					case u:
					case p:
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
			var v = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case a:
						case c:
						case u:
							return !0;
						case "REMOVALREASONS__LOAD_SUCCESS":
						case "REMOVALREASONS__LOAD_FAILED":
						case i:
						case d:
						case l:
						case m:
						case p:
						case h:
							return !1;
						default:
							return e
					}
				},
				g = Object(n.c)({
					error: b,
					pending: v
				});
			const S = {};
			var f = (e = S, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
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
					case i:
					case l: {
						const {
							reason: s
						} = t.payload;
						return {
							...e,
							[s.id]: s
						}
					}
					case p: {
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
			const O = {};
			var w = (e = O, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
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
					case i: {
						const {
							subredditId: s,
							reason: o
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], o.id]
						}
					}
					case p: {
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
			var _ = (e = null, t) => {
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
				C = Object(n.c)({
					api: g,
					models: f,
					reasonOrder: w,
					removedItemIds: _
				}),
				E = s("./src/lib/constants/index.ts"),
				y = s("./src/lib/makeActionCreator/index.ts"),
				x = s("./src/lib/makeCommentsPageKey/index.ts"),
				k = s("./src/lib/makeDraftKey/index.ts"),
				R = s("./src/reddit/actions/bulkActions/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/comment/authoring.ts"),
				P = s("./src/reddit/actions/comment/moderation.ts"),
				M = s("./src/reddit/actions/modal.ts"),
				T = s("./src/reddit/actions/post.ts"),
				L = s("./src/reddit/actions/toaster.ts"),
				N = s("./src/reddit/constants/modals.ts"),
				A = s("./src/lib/makeApiRequest/index.ts"),
				D = s("./src/lib/omitHeaders/index.ts"),
				B = s("./src/reddit/constants/headers.ts"),
				V = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(A.a)(Object(D.a)(e, [B.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: E.ib.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				U = (e, t, s) => Object(A.a)(Object(D.a)(e, [B.a]), {
					endpoint: Object(V.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: E.ib.POST,
					type: "json",
					data: t
				});
			var H = s("./src/reddit/helpers/isPost.ts"),
				K = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				q = s("./src/reddit/helpers/routeKey/index.ts"),
				W = s("./src/reddit/models/ModQueue/index.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				J = s("./src/reddit/models/RemovalReason/index.ts"),
				Q = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				z = s("./src/reddit/selectors/platform.ts");
			Object(r.a)({
				features: {
					removalReasons: C
				}
			});
			const Y = Object(y.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(y.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(y.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, s, {
					apiContext: o
				}) => {
					const r = s().subreddits.models[e].name;
					t(Y());
					const n = await ((e, t) => Object(A.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: E.ib.GET
					}))(o(), r);
					n.ok ? t(Z({
						subredditId: e,
						response: n.body
					})) : t($(n.error))
				}, te = Object(y.a)(a), se = Object(y.a)(i), oe = Object(y.a)(d), re = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					const a = r().subreddits.models[e].name;
					s(te());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: E.ib.POST,
						data: s
					}))(n(), a, t);
					if (i.ok) {
						const {
							id: r
						} = i.body, n = {
							...t,
							id: r
						};
						s(se({
							subredditId: e,
							reason: n
						})), s(Object(L.f)({
							kind: Q.b.SuccessMod,
							text: o.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(oe(i.error))
				}, ne = Object(y.a)(c), ae = Object(y.a)(l), ie = Object(y.a)(m), de = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					const a = r().subreddits.models[e].name;
					s(ne());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: E.ib.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(n(), a, t);
					i.ok ? (s(ae({
						subredditId: e,
						reason: t
					})), s(Object(L.f)({
						kind: Q.b.SuccessMod,
						text: o.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ie(i.error))
				}, ce = Object(y.a)(u), le = Object(y.a)(p), me = Object(y.a)(h), ue = (e, t) => async (s, r, {
					apiContext: n
				}) => {
					const a = r().subreddits.models[e].name;
					s(ce());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [B.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: E.ib.DELETE
					}))(n(), a, t);
					i.ok ? (s(le({
						subredditId: e,
						reasonId: t
					})), s(Object(L.f)({
						kind: Q.b.SuccessMod,
						text: o.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(me(i.error))
				}, pe = Object(y.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, o, {
					apiContext: r
				}) => {
					const n = o();
					n.features.removalReasons.reasonOrder[e] && n.features.removalReasons.reasonOrder[e].length > 0 || s(ee(e)), s(pe({
						subredditId: e,
						itemIds: t
					})), s(Object(M.i)(N.a.ADD_REMOVAL_REASON))
				}, be = Object(y.a)("REMOVALREASONS__SUBMIT_PENDING"), ve = Object(y.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ge = Object(y.a)("REMOVALREASONS__SUBMIT_FAILED"), Se = Object(y.a)("REMOVALREASONS__MESSAGE_PENDING"), fe = Object(y.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Oe = Object(y.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), we = Object(y.a)("REMOVALREASONS__MESSAGE_FAILED"), _e = (e, t, s, o, r) => async (n, a, {
					apiContext: i
				}) => {
					const d = a(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						m = Object(H.a)(l) ? J.e.Post : J.e.Comment,
						u = m === J.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						p = m === J.e.Post ? T.R : j.i;
					if (!u || !c) return !1;
					n(be()), n(p({
						[l]: {
							modNote: r,
							modRemovalReason: t && t.title,
							modReasonBy: c
						}
					}));
					const h = {
							itemIds: e,
							modNote: r,
							reasonId: t ? t.id : null
						},
						b = await F(i(), h);
					if (b.ok) {
						if (n(ve()), t) {
							n(Se());
							const r = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								a = await U(i(), Object(J.h)(r, m), m);
							if (a.ok) {
								if (o === J.f.Public) {
									if (n(Oe()), a.body) {
										const e = Object(K.a)(a.body, c),
											t = {
												comment: e,
												parentId: l
											},
											s = Object(z.f)(d),
											o = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let r = s && o && Object(q.a)(o, d, d.posts.models[e.postId]);
										if (r || (r = Object(x.a)(e.postId, null, {
												sort: E.u,
												hasSortParam: !0
											})), m === J.e.Post) {
											const s = Object(k.a)(G.c.replyToPost, l);
											n(Object(I.o)({
												...t,
												headCommentId: Object(X.w)(d, {
													commentsPageKey: r
												}),
												commentsPageKey: r,
												draftKey: s
											}));
											const o = d.postStickiedComments.data[l];
											n(Object(P.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: r
											})), o && o !== e.id && n(Object(j.i)({
												[o]: {
													isStickied: !1
												}
											}))
										} else if (m === J.e.Comment) {
											const e = Object(k.a)(G.c.replyToComment, u.id),
												s = Object(X.j)(d, {
													commentId: l,
													commentsPageKey: r
												});
											n(Object(I.m)({
												...t,
												parentCommentId: l,
												commentsPageKey: r,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else n(fe());
								return !0
							}
							return n(we(a.error)), !1
						}
					} else n(ge(b.error)), n(p({
						[l]: {
							modNote: u.modNote,
							modRemovalReason: u.modRemovalReason,
							modReasonBy: u.modReasonBy
						}
					}));
					return !1
				}, Ce = (e, t, s, r, n) => async (a, i, {
					apiContext: d
				}) => {
					const c = i(),
						l = c.user.account && c.user.account.displayText;
					if (!l) return;
					a(be());
					const m = Object(L.f)({
							kind: Q.b.SuccessMod,
							text: o.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [o.fbt._plural(e.length, "number")], {
								hk: "3Gipsf"
							})
						}),
						u = {
							itemIds: e,
							modNote: n,
							reasonId: t ? t.id : null
						},
						p = await F(d(), u);
					if (p.ok) {
						const o = {
							ids: e,
							operation: W.a.RemovalReason,
							username: l,
							options: {
								modNote: n,
								removalReason: t && t.title
							}
						};
						if (a(Object(R.b)(o)), t) {
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: r
								},
								n = await U(d(), Object(J.h)(o, J.e.Bulk), J.e.Bulk);
							n.ok ? (a(fe()), a(m)) : a(we(n.error))
						} else a(m)
					} else a(ge(p.error))
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
			const r = Object(o.a)(() => Promise.all([s.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(o.a)(() => Promise.all([s.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				a = Object(o.a)(() => Promise.all([s.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
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
			t.a = Object(d.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: o,
				openRegisterModal: d,
				origin: m,
				sendEvent: h
			}) => r.a.createElement("div", {
				className: Object(n.a)(e, u.a.Wrapper, {
					[u.a.LiveStreamingWrapper]: t
				})
			}, r.a.createElement("span", {
				className: Object(n.a)(u.a.Copy, {
					[u.a.LiveStreamingCopy]: t
				})
			}, p._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), r.a.createElement("div", {
				className: u.a.CTAButtons
			}, r.a.createElement(c.t, {
				className: u.a.LoginLink,
				kind: c.b.ExternalLink,
				priority: c.c.Secondary,
				href: Object(i.a)(s, m, "/login"),
				onClick: e => {
					Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), o(), h(Object(l.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, p._("Log In", null, {
				hk: "ZR3pC"
			})), r.a.createElement(c.t, {
				className: Object(n.a)(u.a.SignupLink, {
					[u.a.LiveStreamingSignupLink]: t
				}),
				kind: c.b.ExternalLink,
				priority: c.c.Primary,
				href: Object(i.a)(s, m, "/register"),
				onClick: e => {
					Object(a.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(l.c)("user_convert")))
				},
				"data-redditstyle": !0
			}, p._("Sign Up", null, {
				hk: "48wH4o"
			})))))
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
				h = s.n(p);
			const b = Object(a.c)({
					account: e => e.user.account
				}),
				v = Object(n.b)(b);
			t.a = i.a.wrapped(v(({
				account: e,
				className: t,
				height: s,
				icon: o,
				isLivestreaming: n,
				isNSFW: a,
				trash: i,
				userId: p,
				width: b
			}) => {
				const v = n ? 36 : 20,
					g = p || `${null==e?void 0:e.id}`,
					S = {
						height: s || v,
						width: b || v,
						minWidth: b || v
					};
				if (i) return r.a.createElement("div", {
					className: t,
					style: S
				}, r.a.createElement(u.a, {
					className: h.a.TrashIcon
				}));
				const f = e && e.id === p ? e.accountIcon : a ? l.a : null != o ? o : void 0;
				return Object(m.a)(f) ? r.a.createElement("div", {
					className: t,
					style: S
				}, r.a.createElement(c.a, {
					headshot: f
				})) : r.a.createElement("div", {
					className: t,
					style: S
				}, r.a.createElement(d.a, {
					userId: g,
					defaultImage: f
				}))
			}), "ChatIcon", h.a)
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
				h = s("./src/reddit/selectors/posts.ts"),
				b = s("./src/reddit/selectors/communityAwards.ts"),
				v = s("./src/reddit/selectors/gold/awardIcon.ts"),
				g = s("./src/reddit/icons/fonts/Gift/index.tsx"),
				S = s("./src/reddit/components/CommentsChat/Comment/AwardCountSpectacle/AwardCountAnimation/index.m.less"),
				f = s.n(S);
			class O extends r.Component {
				render() {
					const {
						className: e,
						count: t,
						iconUrl: s,
						isAnimated: o
					} = this.props;
					return n.a.createElement("div", {
						className: Object(a.a)(f.a.container, e, {
							[f.a.isAnimated]: o
						})
					}, n.a.createElement(g.a, {
						className: f.a.gildIcon
					}), o && s && n.a.createElement("div", {
						className: f.a.awardingIcon,
						style: {
							backgroundImage: `url("${s}")`
						}
					}), t ? n.a.createElement("div", {
						className: f.a.count
					}, t) : null)
				}
			}
			var w = Object(c.b)(() => Object(l.c)({
				iconUrl: (e, {
					awardId: t
				}) => {
					if (!t) return;
					const s = Object(b.a)(e, t);
					return Object(v.a)(e, {
						award: s,
						minSize: 64
					})
				}
			}))(O);
			const _ = Object(c.b)(() => Object(l.a)(e => e, (e, {
					postId: t
				}) => Object(u.g)(e, {
					commentsPageKey: Object(m.a)(t)
				}), h.H, (e, {
					postId: t
				}) => Object(u.u)(e, {
					commentsPageKey: Object(m.a)(t)
				}), (e, t, s, o) => {
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
			class E extends r.Component {
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
			var y = _(E),
				x = s("./src/reddit/components/CommentsChat/MessageInput/index.m.less"),
				k = s.n(x);
			t.a = ({
				postId: e,
				showSubmitInsideTextArea: t,
				isLivestreaming: r,
				handleGiveAward: c,
				sendEvent: l
			}) => {
				return n.a.createElement(i.e, {
					className: Object(a.a)(k.a.ChatButton, {
						[k.a.LivestreamingChatButton]: r,
						[k.a.leftPad]: !t
					}),
					"aria-label": o.fbt._("give award", null, {
						hk: "1nXRWY"
					}),
					onClick: async t => {
						t.stopPropagation();
						const o = Object(d.d)(d.a.GildingFlow, !0);
						c(o);
						const {
							clickGildEvent: n,
							clickRpanGiveAward: a
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						l((r ? a : n)(e))
					}
				}, n.a.createElement(y, {
					postId: e
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
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : r.a.createElement(l, null, r.a.createElement(m, null), r.a.createElement(u, null))
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
				FormWrapper: "mfKS0B5uqUX6PXcuSjTop",
				formWrapper: "mfKS0B5uqUX6PXcuSjTop",
				LivestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				livestreamingWrapper: "_1xV0i2uW_2xdNlBcbSEjpS",
				inputLine: "_2rpcmnaHqKJnQeHI6-RZU8",
				submitButton: "_1CLqZSQ6jz0CFFB9he7ZtW",
				Form: "_76oPIY5CZD4GaQnn-06zO",
				form: "_76oPIY5CZD4GaQnn-06zO",
				Editing: "CA5bQ-3lhJvw_xfOAOs4K",
				editing: "CA5bQ-3lhJvw_xfOAOs4K",
				SmallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				smallChatUserIcon: "_1qnAOkiRLjELVt-lGR1N2O",
				ChatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				chatButton: "BtTZ62LYQAh6Ezp2xw_4R",
				LivestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				livestreamingChatButton: "_1pWwFWQOxI4UHucSbgy7Yr",
				leftPad: "_2nnsSXE8H28qTe0cmiHlbb",
				RichTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				richTextEditor: "_2Zrjn5GTHiDwHULWCseamI",
				Livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				livestreaming: "_37GIMhyXqgW50qXsV8kJtg",
				LivestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				livestreamingFocusableContent: "_3ICFMFY3nzpQ8TcBKQA6Cq",
				insetSubmitButton: "_2-jlFgTYFKmNDKFKaq5x8Z",
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
				replyAuthor: "_11cxPUL8P03UB2QLjnVQA1"
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
			var o = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./node_modules/react/index.js"),
				n = s.n(r),
				a = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(a.a)(e => n.a.createElement(i.e, null, n.a.createElement(i.i, null, n.a.createElement(c.a, null, n.a.createElement(i.q, null, e.headerText || o.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), n.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, n.a.createElement(i.b, null)))), n.a.createElement(i.l, null, n.a.createElement(i.p, {
				className: m.a.ModalText
			}, e.modalText)), n.a.createElement(i.g, null, !e.hideCancelButton && n.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || o.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), n.a.createElement(i.u, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle,
				disabled: e.isDisabled
			}, e.actionText))))
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
				h = a.a.div("DropdownLabel", u.a),
				b = a.a.div("ReasonTitle", u.a),
				v = e => n.a.createElement(p, null, n.a.createElement(h, null, e.dropdownLabel), e.selectedReason && n.a.createElement(b, null, e.selectedReason)),
				g = a.a.wrapped(i.a, "Dropdown", u.a),
				S = a.a.wrapped(c.b, "DropdownTriangle", u.a),
				f = a.a.wrapped(d.b, "DropdownRow", u.a),
				O = a.a.button("DropdownContainer", u.a);
			t.a = e => n.a.createElement(O, {
				onClick: e.onToggleDropdown
			}, n.a.createElement(v, {
				dropdownLabel: e.isLoading ? o.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : o.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), n.a.createElement(S, null), e.isDropdownOpen && n.a.createElement(g, {
				isOverlay: !0
			}, n.a.createElement(f, {
				displayText: o.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, s) => n.a.createElement(f, {
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
				return j
			})), s.d(t, "selector", (function() {
				return I
			})), s.d(t, "connector", (function() {
				return P
			})), s.d(t, "CharacterCountdown", (function() {
				return M
			})), s.d(t, "EmptyState", (function() {
				return T
			})), s.d(t, "MessageInput", (function() {
				return V
			})), s.d(t, "FormOptionsContainer", (function() {
				return H
			})), s.d(t, "ModalFooter", (function() {
				return K
			})), s.d(t, "ButtonRow", (function() {
				return W
			})), s.d(t, "AddRemovalReasonModal", (function() {
				return G
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
				h = s("./src/reddit/controls/RadioInput/index.tsx"),
				b = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				v = s("./src/reddit/controls/TextButton/index.tsx"),
				g = s("./src/reddit/icons/fonts/Info/index.tsx"),
				S = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				f = s("./src/reddit/models/RemovalReason/index.ts"),
				O = s("./src/reddit/selectors/removalReasons.ts"),
				w = s("./src/reddit/selectors/subreddit.ts"),
				_ = s("./src/reddit/selectors/user.ts"),
				C = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				E = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				y = s.n(E);
			const {
				fbt: x
			} = s("./node_modules/fbt/lib/FbtPublic.js"), k = e => {
				switch (e) {
					case f.f.Private:
						return "private_subreddit";
					case f.f.PrivateExposed:
						return "private_personal";
					default:
						return e
				}
			}, R = {
				isDropdownOpen: !1,
				message: "",
				modNote: "",
				removalType: f.f.Public,
				selectedReason: null
			}, j = e => ({
				submitBulkRemovalReason: (t, s, o, r, n) => e(Object(c.submitBulkRemovalReason)(t, s, o, r, n)),
				submitRemovalReason: (t, s, o, r, n) => e(Object(c.submitRemovalReason)(t, s, o, r, n))
			}), I = Object(a.c)({
				currentUserName: e => {
					const t = Object(_.k)(e);
					if (t) return t.displayText
				},
				isLoading: O.a,
				removalReasons: O.c,
				subredditName: (e, {
					subredditId: t
				}) => Object(w.Q)(e, {
					subredditId: t
				}).name
			}), P = Object(n.b)(I, j), M = d.a.wrapped(l.a, "CharacterCountdown", y.a), T = d.a.div("EmptyState", y.a), L = d.a.wrapped(m.o, "ModNoteDescription", y.a), N = d.a.wrapped(u.l, "PrimaryButton", y.a), A = d.a.wrapped(b.a, "RadioOption", y.a), D = d.a.span("BoldText", y.a), B = d.a.wrapped(m.t, "ModNoteInput", y.a), V = d.a.wrapped(m.t, "MessageInput", y.a), F = d.a.wrapped(g.a, "Info", y.a), U = d.a.div("SmallInfoText", y.a), H = d.a.div("FormOptionsContainer", y.a), K = d.a.wrapped(m.g, "ModalFooter", y.a), q = d.a.div("FooterRow", y.a), W = d.a.wrapped(q, "ButtonRow", y.a);
			class G extends r.a.Component {
				constructor(e) {
					super(e), this.onSelectRemovalType = e => {
						this.setState({
							removalType: e
						}), this.props.trackClick(`type_${k(e)}`)()
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
							(t.removalContextType === f.e.Bulk ? e.submitBulkRemovalReason : e.submitRemovalReason)(e.itemIds, t.selectedReason, t.message.trim(), t.removalType, t.modNote.trim()), e.trackClick("sent")(), t.selectedReason && e.trackClick(`sent_${k(t.removalType)}`)(), t.modNote && e.trackClick("sent_modnote")(), e.toggleModal()
						}
					}, this.onCancel = () => {
						this.props.toggleModal(), this.props.trackClick("cancel")()
					}, this.renderRemovalTypeOptions = () => {
						const {
							props: e,
							state: t
						} = this, s = [];
						return t.removalContextType !== f.e.Bulk && s.push(r.a.createElement(A, {
							key: f.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: f.f.Public
						}, r.a.createElement("div", null, t.removalContextType === f.e.Post ? x._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : x._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), s.push(r.a.createElement(A, {
							key: f.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: f.f.Private
						}, r.a.createElement("div", null, x._("Private: send a Modmail from {subredditName} to the user", [x._param("subredditName", r.a.createElement(D, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && s.push(r.a.createElement(A, {
							key: f.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: f.f.PrivateExposed
						}, r.a.createElement("div", null, x._("Private: send a Modmail from {currentUserName} to the user", [x._param("currentUserName", r.a.createElement(D, null, `u/${e.currentUserName}`))], {
							hk: "wFSJr"
						})))), s
					}, this.state = {
						...R,
						removalContextType: Object(f.g)(e.itemIds)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return r.a.createElement(m.e, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && r.a.createElement(m.i, null, r.a.createElement(S.a, null, r.a.createElement(m.q, null, x._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && x._("({number of items} posts/comments)", [x._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), r.a.createElement(v.a, {
						onClick: this.onCancel
					}, r.a.createElement(m.b, null)))), r.a.createElement(m.l, null, e.isLoading || e.removalReasons.length > 0 ? r.a.createElement(C.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : r.a.createElement(T, null, x._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), r.a.createElement(p.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, r.a.createElement(u.r, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, x._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && r.a.createElement(H, null, r.a.createElement(m.h, null, r.a.createElement(h.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), r.a.createElement(V, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), r.a.createElement(M, {
						maxChars: f.a,
						text: t.message.trim()
					}), r.a.createElement(U, null, t.removalType !== f.f.Public && r.a.createElement(r.a.Fragment, null, r.a.createElement(F, null), x._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), r.a.createElement(K, null, r.a.createElement(q, null, r.a.createElement(L, null, x._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), r.a.createElement(q, null, r.a.createElement(B, {
						placeholder: x._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), r.a.createElement(q, null, r.a.createElement(M, {
						maxChars: f.b,
						text: t.modNote.trim()
					})), r.a.createElement(W, null, r.a.createElement(u.o, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, x._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(N, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, x._("Submit", null, {
						hk: "4aU3dh"
					})))))
				}
			}
			t.default = Object(i.a)(P(G))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			}));
			var o = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				r = s("./src/reddit/constants/colors.ts");
			const n = {
				backgroundColor: r.b.overlayReportFlow
			};
			t.a = Object(o.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
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
					backgroundColor: r.b.overlayReportFlow
				},
				a = Object(o.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => Promise.all([s.e("Governance~Reddit~ReportFlow~Subreddit~reddit-components-BlankPost~reddit-components-ClassicPost~red~f3a55241"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
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
				return h
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "i", (function() {
				return v
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "b", (function() {
				return S
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return O
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
				h = o.a.div("FormElement", n.a),
				b = o.a.div("FormGroupDescription", n.a),
				v = o.a.div("FormItem", n.a),
				g = o.a.h3("FormElementTitle", n.a),
				S = o.a.div("FormElementDescription", n.a),
				f = o.a.div("FormElementError", n.a),
				O = o.a.div("FormElementSubGroup", n.a),
				w = o.a.li("FormListItem", n.a)
		},
		"./src/reddit/helpers/graphql/normalizePostsFromGql/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var o = s("./src/reddit/helpers/graphql/normalizePostFromGql/index.ts");
			const r = ({
				edges: e
			}) => {
				const t = [];
				for (const {
						node: s
					} of e) t.push(Object(o.f)(s));
				return t
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
				bodyFont: "_2pkKgwPGa4i4WMPJpHXzBM",
				bodyFontSmall: "_11mUbPPL96Bo13O8gTB7ik",
				bodyFontMono: "_386ITOzsDX5wQo_sJfUExR"
			}
		},
		"./src/reddit/helpers/trackers/shareToChat.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var o = s("./src/reddit/constants/tracking.ts"),
				r = s("./src/reddit/selectors/telemetry.ts");
			const n = () => e => ({
				...Object(r.defaults)(e),
				source: "post",
				action: o.c.CLICK,
				noun: "share_chat",
				subreddit: Object(r.subreddit)(e)
			})
		},
		"./src/reddit/icons/fonts/Gift/index.tsx": function(e, t, s) {
			"use strict";
			var o = s("./node_modules/react/index.js"),
				r = s.n(o),
				n = s("./src/reddit/icons/fonts/helpers.tsx");
			t.a = e => r.a.createElement("i", {
				className: `${Object(n.b)("award",e.isFilled)} ${e.className}`,
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, r.a.createElement(n.a, null, e.desc))
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
			const r = 20,
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
				h = s("./src/config.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				v = s("./node_modules/lodash/throttle.js"),
				g = s.n(v),
				S = s("./src/reddit/contexts/NavbarExp.ts"),
				f = s("./src/higherOrderComponents/withMux/index.tsx"),
				O = s("./src/lib/addQueryParams/index.ts");
			var w = e => {
					if (!e || !e.isConnected) return;
					const t = e.hasAttribute("tabindex");
					t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
				},
				_ = s("./src/lib/focusVisible/index.js"),
				C = s("./src/lib/VideoSession/util.ts"),
				E = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				y = s("./src/reddit/actions/chat/toggle.ts"),
				x = s("./src/reddit/actions/media.ts"),
				k = s("./src/reddit/actions/modal.ts"),
				R = s("./src/reddit/actions/profile/index.ts"),
				j = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				I = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				P = s("./src/lib/makeActionCreator/index.ts");
			const M = Object(P.a)(I.E),
				T = Object(P.a)(I.X),
				L = e => async t => {
					t(M(e))
				}, N = Object(P.a)(I.P), A = Object(P.a)(I.V);
			var D = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				B = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				V = s("./src/reddit/actions/reportFlow/index.ts"),
				F = s("./src/reddit/actions/video.ts"),
				U = s("./src/reddit/components/HlsVideo/index.tsx"),
				H = s("./src/higherOrderComponents/asModal/index.tsx"),
				K = s("./src/lib/lessComponent.tsx"),
				q = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				W = s("./src/reddit/controls/Button/index.tsx"),
				G = s("./src/reddit/controls/TextButton/index.tsx"),
				J = s("./src/reddit/helpers/localStorage/index.ts"),
				Q = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				X = s("./src/reddit/components/PublicAccessNetwork/Modals/ChatMute/index.m.less"),
				z = s.n(X);
			const Y = K.a.div("Image", z.a),
				Z = K.a.wrapped(q.g, "ModalFooter", z.a),
				$ = K.a.wrapped(q.i, "ModalHeader", z.a),
				ee = K.a.wrapped(q.l, "ModalMain", z.a);
			var te = Object(H.a)(({
					toggleModal: e
				}) => {
					const t = () => {
						J.Nb(), e()
					};
					return r.a.createElement(q.e, null, r.a.createElement($, null, r.a.createElement(Q.a, null, r.a.createElement("div", null, r.a.createElement("div", {
						className: z.a.Title
					}, b.fbt._("Get ready to chat!", null, {
						hk: "1lebCx"
					})), r.a.createElement(q.p, null, b.fbt._("Before jumping in, keep these tips in mind.", null, {
						hk: "3evsT7"
					}))), r.a.createElement(G.a, {
						onClick: t
					}, r.a.createElement(q.b, null)))), r.a.createElement(ee, null, r.a.createElement("span", null, r.a.createElement("span", null, r.a.createElement("div", {
						className: z.a.SubTitle
					}, b.fbt._("Remember the human", null, {
						hk: "3oHyEM"
					})), r.a.createElement(q.o, null, b.fbt._("We're all (internet) friends here, so enjoy chatting and remember that rules still apply.", null, {
						hk: "3df1qF"
					}))), r.a.createElement(Y, {
						style: {
							backgroundImage: `url("${h.a.assetPath}/img/heart-rainbow.png")`
						}
					})), r.a.createElement("span", null, r.a.createElement("span", null, r.a.createElement("div", {
						className: z.a.SubTitle
					}, b.fbt._("Look out for each other", null, {
						hk: "hrE04"
					})), r.a.createElement(q.o, null, b.fbt._("If you see any harrassment or abuse, report it by pressing and holding on the message.", null, {
						hk: "12gD31"
					}))), r.a.createElement(Y, {
						style: {
							backgroundImage: `url("${h.a.assetPath}/img/award_beagle.png")`
						}
					})), r.a.createElement("span", null, r.a.createElement("span", null, r.a.createElement("div", {
						className: z.a.SubTitle
					}, b.fbt._("Have fun!", null, {
						hk: "20HtGT"
					})), r.a.createElement(q.o, null, b.fbt._("Chat, lol, debate, discuss human nature or quantum physics... it's all up to you.", null, {
						hk: "3Aj4Z7"
					}))), r.a.createElement(Y, {
						style: {
							backgroundImage: `url("${h.a.assetPath}/img/award_celebrate.png")`
						}
					}))), r.a.createElement(Z, {
						className: z.a.ModalFooter
					}, r.a.createElement(W.l, {
						onClick: t,
						className: z.a.Button,
						"data-redditstyle": !0
					}, b.fbt._("Start Chatting", null, {
						hk: "3n2GtA"
					}))))
				}),
				se = s("./src/reddit/helpers/styles/mixins/fonts.m.less"),
				oe = s.n(se),
				re = s("./src/reddit/icons/svgs/Close/index.tsx"),
				ne = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/index.m.less"),
				ae = s.n(ne);
			var ie = ({
					onClickLearnMore: e,
					onClickDismiss: t,
					isDark: s = !1
				}) => r.a.createElement("div", {
					className: Object(d.a)(ae.a.banner, {
						[ae.a.dark]: s
					})
				}, r.a.createElement("div", null, b.fbt._("{=Download the RPAN studio} desktop application to broadcast live from your computer.", [b.fbt._param("=Download the RPAN studio", r.a.createElement("span", {
					className: oe.a.strongTextFont
				}, b.fbt._("Download the RPAN studio", null, {
					hk: "1rcEDr"
				})))], {
					hk: "ODJOz"
				})), r.a.createElement(W.t, {
					className: ae.a.bannerButton,
					kind: W.b.Button,
					priority: W.c.Primary,
					onClick: e,
					"data-redditstyle": !0
				}, b.fbt._("Learn more", null, {
					hk: "1Ri9Pi"
				})), r.a.createElement(re.a, {
					"data-testid": "bannerCloseIcon",
					onClick: t,
					className: Object(d.a)(ae.a.bannerCloseIcon, {
						[ae.a.dark]: s
					})
				})),
				de = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/Loader.tsx"),
				ce = s("./src/reddit/actions/post.ts"),
				le = s("./src/reddit/actions/removalReasons/index.ts"),
				me = s("./src/reddit/actions/toaster.ts"),
				ue = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				pe = s("./src/reddit/components/TrackingHelper/index.tsx"),
				he = s("./src/reddit/models/RemovalReason/index.ts"),
				be = s("./src/reddit/models/Toast/index.ts"),
				ve = s("./src/reddit/selectors/activeModalId.ts"),
				ge = s("./src/reddit/selectors/telemetry.ts"),
				Se = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"),
				fe = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				Oe = s("./src/reddit/controls/InternalLink/index.tsx"),
				we = s("./src/reddit/components/PublicAccessNetwork/Modals/EndBroadcast/EndBroadcastStyles.m.less"),
				_e = s.n(we);
			const {
				fbt: Ce
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ee = Object(n.b)(Se.selector, Se.dispatcher), ye = K.a.wrapped(q.g, "EndBroadcastModalFooter", _e.a), xe = K.a.wrapped(q.t, "EndBroadcastMessageInput", _e.a);
			class ke extends Se.AddRemovalReasonModal {
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.isLoading || e.removalReasons.length > 0;
					return r.a.createElement(q.e, {
						onClick: this.closeDropdown
					}, s && r.a.createElement(q.i, null, r.a.createElement(Q.a, null, r.a.createElement(q.q, null, Ce._("Remove broadcast", null, {
						hk: "1JfCvD"
					})), r.a.createElement(G.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, r.a.createElement(q.b, null)))), r.a.createElement(q.l, null, s ? r.a.createElement(fe.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : r.a.createElement(Se.EmptyState, null, Ce._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), r.a.createElement(Oe.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, r.a.createElement(W.r, {
						onClick: e.toggleRemovalReasonModal,
						"data-redditstyle": !0
					}, Ce._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && r.a.createElement(r.a.Fragment, null, r.a.createElement("div", {
						className: _e.a.MessageHeader
					}, Ce._("Message to the broadcaster", null, {
						hk: "bGz26"
					})), r.a.createElement(Se.FormOptionsContainer, null, r.a.createElement(xe, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), r.a.createElement(Se.CharacterCountdown, {
						maxChars: he.a,
						text: t.message.trim()
					})))), r.a.createElement(ye, null, r.a.createElement(Se.ButtonRow, null, r.a.createElement(q.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, Ce._("Cancel", null, {
						hk: "2TSLl5"
					})), r.a.createElement(q.u, {
						onClick: () => {
							t.selectedReason && this.props.submitRemoval(t.selectedReason, t.message)
						},
						disabled: !this.canSave()
					}, Ce._("Remove", null, {
						hk: "3tYl0U"
					})))))
				}
			}
			var Re = Object(H.a)(Ee(ke));
			const {
				fbt: je
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Ie = Object(i.c)({
				isConfirmationModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(ve.a)(e),
				isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(ve.a)(e)
			}), Pe = Object(n.b)(Ie, (e, {
				subredditId: t,
				postId: s
			}) => ({
				submitRemovalReason: async (t, s, o) => {
					const r = await e(Object(le.submitRemovalReason)([t], s, o, he.f.Private, ""));
					e(r ? Object(me.f)({
						kind: be.b.SuccessEndBroadcast,
						text: je._("Broadcast ended", null, {
							hk: "313j6x"
						})
					}) : Object(me.f)({
						text: je._("Toast:", null, {
							hk: "2dCWf"
						}),
						duration: 1e4,
						kind: be.b.Error
					}))
				},
				fetchRemovalReasons: () => e(Object(le.removalReasonsRequested)(t)),
				errorToast: t => e(Object(me.f)({
					text: t,
					duration: 1e4,
					kind: be.b.Error
				})),
				toggleRemovalReasonModal: () => e(Object(k.i)("rpan-add-removal-reason-id")),
				toggleConfirmationModal: () => e(Object(k.i)("rpan-end-broadcast-confirmation-id")),
				onRemovePost: () => e(Object(ce.S)(s, !1))
			}));
			class Me extends r.a.Component {
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
					return r.a.createElement(Re, {
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
							post: s && Object(ge.post)(r, s),
							screen: Object(ge.screen)(r),
							subreddit: Object(ge.subredditById)(r, t)
						})))("removal_reasons", this.props.subredditId, this.props.postId)
					})
				}
				render() {
					return this.props.isRemovalReasonModalOpen ? this.renderRemovalReasonModal() : this.props.isConfirmationModalOpen ? this.renderConfirmationModal() : r.a.createElement("div", null)
				}
			}
			var Te, Le = Object(H.a)(Pe(Object(pe.c)(Me))),
				Ne = s("./src/reddit/components/ReportFlow/index.tsx"),
				Ae = s("./src/reddit/components/ReportFlow/new.tsx"),
				De = s("./src/reddit/constants/history.ts"),
				Be = s("./src/reddit/constants/keycodes.ts"),
				Ve = s("./src/reddit/constants/parameters.ts"),
				Fe = s("./src/reddit/helpers/dom/index.ts"),
				Ue = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				He = s("./src/reddit/helpers/trackers/rpan.ts"),
				Ke = s("./src/reddit/helpers/trackers/screenview.ts"),
				qe = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				We = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				Ge = s("./src/reddit/selectors/media.ts"),
				Je = s("./src/reddit/selectors/platform.ts"),
				Qe = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
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
			const ut = e => async (t, s, {
				apiContext: o
			}) => {
				const r = await Object(mt.j)(o(), e, !0);
				r && r.ok ? t(Object(me.f)({
					kind: be.b.SuccessLockComment,
					text: b.fbt._("Comments locked", null, {
						hk: "3WAk9Y"
					}),
					buttonText: b.fbt._("UNDO", null, {
						hk: "3Kk8Xw"
					}),
					buttonAction: pt(e)
				})) : t(Object(me.f)(Object(me.e)(b.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), be.b.Error)))
			}, pt = e => async (t, s, {
				apiContext: o
			}) => {
				const r = await Object(mt.j)(o(), e, !1);
				r && r.ok ? t(Object(me.f)({
					kind: be.b.SuccessUnlockComment,
					text: b.fbt._("Comments unlocked", null, {
						hk: "rEYa1"
					}),
					buttonText: b.fbt._("UNDO", null, {
						hk: "OXk5v"
					}),
					buttonAction: ut(e)
				})) : t(Object(me.f)(Object(me.e)(b.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), be.b.Error)))
			};
			var ht = s("./src/reddit/actions/subscription/index.ts"),
				bt = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				vt = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				gt = s("./src/reddit/constants/posts.ts"),
				St = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ft = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				Ot = s("./src/reddit/routes/postCreation/constants.ts"),
				wt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				_t = s("./src/reddit/selectors/subreddit.ts"),
				Ct = s("./src/reddit/selectors/comments.ts"),
				Et = s("./src/reddit/selectors/commentSelector.ts"),
				yt = s("./src/reddit/selectors/communityAwards.ts"),
				xt = s("./src/reddit/models/Gold/Award.ts");
			var kt = e => e < 500 || !e ? xt.e.Silver : e < 1800 ? xt.e.Gold : xt.e.Platinum,
				Rt = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				jt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less"),
				It = s.n(jt);
			const {
				fbt: Pt
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function Mt(e) {
				const {
					awardName: t,
					giverName: s,
					giverId: o,
					tier: n,
					className: a
				} = e, i = n === xt.e.Silver ? It.a.silverTierAttribution : n === xt.e.Gold ? It.a.goldTierAttribution : It.a.platinumTierAttribution;
				return r.a.createElement("div", {
					className: Object(d.a)(a, It.a.tierAttribution, i),
					role: "presentation"
				}, n !== xt.e.Silver && r.a.createElement(Rt.a, {
					className: It.a.giverIcon,
					userId: o,
					width: 16,
					height: 16
				}), r.a.createElement("span", null, n !== xt.e.Silver && Pt._("{giverName} gave {space}", [Pt._param("giverName", s), Pt._param("space", " ")], {
					hk: "SzDdi"
				}), r.a.createElement("strong", {
					className: It.a.awardName
				}, t)))
			}
			var Tt = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				Lt = s("./src/reddit/icons/svgs/Star/index.tsx"),
				Nt = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				At = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less"),
				Dt = s.n(At);

			function Bt(e) {
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
				}, a && r.a.createElement(r.a.Fragment, null, r.a.createElement(Lt.a, {
					className: Object(d.a)(Dt.a.backgroundAnimation, Dt.a.backgroundStar)
				}), r.a.createElement(Nt.a, {
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
			var Vt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less"),
				Ft = s.n(Vt);

			function Ut(e) {
				const {
					award: t,
					className: s,
					giverId: o,
					giverName: n
				} = e, a = kt(t.coinPrice), i = t.icon128 ? t.icon128.url : t.icon.url;
				return r.a.createElement("div", {
					className: Object(d.a)(s, Ft.a.container),
					role: "presentation"
				}, r.a.createElement(Bt, {
					iconUrl: i,
					tier: a,
					className: Ft.a.awardIconAnimation
				}), r.a.createElement(Mt, {
					awardName: t.name,
					className: Ft.a.attributionAnimation,
					giverId: o,
					giverName: n,
					tier: a
				}))
			}
			var Ht = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less"),
				Kt = s.n(Ht);
			class qt extends o.Component {
				render() {
					const {
						award: e,
						className: t,
						giverName: s,
						giverId: o
					} = this.props;
					return e && o && s ? r.a.createElement("div", {
						className: Object(d.a)(t, Kt.a.awardOverlay),
						role: "presentation"
					}, r.a.createElement(Ut, {
						award: e,
						giverId: o,
						giverName: s
					})) : null
				}
			}
			var Wt = Object(n.b)(() => Object(i.a)(e => e, Et.b, (e, t) => {
					if (!t) return {};
					const {
						associatedAwardId: s,
						author: o,
						authorId: r
					} = t;
					return {
						award: s ? Object(yt.a)(e, s) : void 0,
						giverId: r,
						giverName: o
					}
				}))(qt),
				Gt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less"),
				Jt = s.n(Gt);
			const Qt = Object(n.b)(() => Object(i.c)({
					awardedCommentLinks: (e, {
						commentsPageKey: t
					}) => {
						return Object(Ct.g)(e, {
							commentsPageKey: t
						}).filter(t => {
							const s = Object(Et.b)(e, {
								commentId: t.id
							});
							return !!s && !!s.associatedAwardId
						})
					},
					isFullyLoaded: Ct.u
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
						className: Object(d.a)(t, Jt.a.awardOverlaySpectacle),
						role: "presentation"
					}, n.map(e => r.a.createElement(Wt, {
						className: Jt.a.awardOverlay,
						commentId: e.id,
						key: e.id
					}))) : null
				}
			}
			var Yt = Qt(zt);
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
			class hs extends o.Component {
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
							return b.fbt._({
								"*": "+{seconds time added} seconds airtime given",
								_1: "+1 second airtime given"
							}, [b.fbt._plural(e, "seconds time added")], {
								hk: "4zE2Hn"
							})
						} {
							const e = Math.round($t(r));
							return b.fbt._({
								"*": "+{minutes time added} minutes airtime given",
								_1: "+1 minute airtime given"
							}, [b.fbt._plural(e, "minutes time added")], {
								hk: "17ep0a"
							})
						}
					}
					if (n > s.meter.full_meter_duration) {
						const e = Math.round($t(s.meter.full_meter_duration)).toLocaleString();
						return b.fbt._("{number of minutes}+ minutes airtime left", [b.fbt._param("number of minutes", e)], {
							hk: "2Tjt0F"
						})
					}
					if (es(n) && !o && n > tt) {
						const e = Math.round($t(n)).toLocaleString();
						return b.fbt._("{number of minutes} minutes airtime left", [b.fbt._param("number of minutes", e)], {
							hk: "3DZxvE"
						})
					}
					const a = Math.round(n),
						i = Math.floor($t(a)),
						d = a % Ze,
						c = `${i}:${d<10?"0":""}${d}`;
					return b.fbt._("{mm:ss timestamp of remaining time} airtime left", [b.fbt._param("mm:ss timestamp of remaining time", c)], {
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
						return t.pillLabel = hs.getPillLabel(e, t), t
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
					const n = hs.getPillLabel(e, r),
						a = hs.isPillVisible(r.timer, e.overlayOpen, r.timerDiff);
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
			var bs = hs,
				vs = s("./src/reddit/components/OverflowMenu/index.tsx"),
				gs = s("./src/reddit/controls/Dropdown/Row.tsx"),
				Ss = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				fs = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				Os = s.n(fs);
			const {
				fbt: ws
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var _s = ({
					label: e,
					onSelect: t,
					onToggle: s,
					subreddits: o
				}) => r.a.createElement(vs.b, {
					className: Os.a.overflowMenu,
					dropdownClassName: Os.a.dropdown,
					defaultButtonOutline: !0,
					disabled: o.length < 1,
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: r.a.createElement("div", {
						className: Os.a.overflowMenuIcon
					}, e, r.a.createElement(Ss.a, {
						className: Os.a.dropdownTriangle
					})),
					onClick: s
				}, r.a.createElement("div", {
					className: Os.a.dropdownLabel
				}, ws._("Pick a Community", null, {
					hk: "8MoVj"
				})), o.map(e => r.a.createElement(gs.b, {
					className: Os.a.dropdownRow,
					displayText: e.prefixedName,
					iconWrapperClassName: Os.a.overflowItemIconWrapper,
					key: `rpan-recommended-viewer-subreddits-dropdown-${e.prefixedName}`,
					onClick: () => t(e)
				}))),
				Cs = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				Es = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				ys = s.n(Es);
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
						videoCurrentTime: h,
						videoTotalTime: b,
						volume: v,
						volumeRef: g
					} = this.props;
					return r.a.createElement(Cs.b, {
						className: Object(d.a)(e, ys.a.scrubberBar, {
							[ys.a.visible]: a
						}),
						currentTime: h || 0,
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
						totalTime: b || 0,
						volume: v,
						volumeRef: g
					})
				}
			}
			var ks = xs,
				Rs = s("./node_modules/lodash/debounce.js"),
				js = s.n(Rs),
				Is = s("./src/lib/prettyPrintNumber/index.ts"),
				Ps = s("./src/reddit/actions/publicAccessNetwork/votes.ts"),
				Ms = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				Ts = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				Ls = s("./src/reddit/models/Vote/index.ts"),
				Ns = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				As = s.n(Ns);
			const Ds = Object(i.c)({
				currentStream: (e, {
					currentStreamId: t
				}) => Object(Xe.l)(e, t)
			});
			class Bs extends r.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(Ls.a.upvoted), this.downVotes = () => this.calculateVotes(Ls.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === Ls.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(Ls.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = js()(() => this.vote(Ls.a.upvoted), I.Y, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = js()(() => this.vote(Ls.a.downvoted), I.Y, {
						leading: !0,
						trailing: !1
					}), this.state = {
						displayedVoteState: Ls.a.notVoted
					}, this.onVoteDown = this.onVoteDown.bind(this), this.onVoteUp = this.onVoteUp.bind(this)
				}
				componentDidMount() {
					const e = this.props.currentStream;
					e && e.post.voteState && this.setState({
						...this.state,
						displayedVoteState: Object(Ls.e)(e.post.voteState)
					})
				}
				componentDidUpdate(e) {
					const t = this.props.currentStream,
						s = e.currentStream;
					t && (s && s.post.id === t.post.id || this.setState({
						...this.state,
						displayedVoteState: null !== t.post.voteState ? Object(Ls.e)(t.post.voteState) : Ls.a.notVoted
					}))
				}
				render() {
					const e = this.props.currentStream;
					if (!e) return null;
					const t = this.props.isLive ? e.continuous_watchers : e.unique_watchers;
					return r.a.createElement("div", {
						className: As.a.statsPanel
					}, r.a.createElement("div", {
						className: As.a.voteContainer
					}, r.a.createElement("button", {
						className: Object(d.a)(As.a.upButton, {
							[As.a.activeVote]: this.isVoteActive(Ls.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": b.fbt._("Upvote", null, {
							hk: "4ijw7j"
						})
					}, r.a.createElement(Ts.a, {
						className: As.a.voteIcon
					})), r.a.createElement("p", {
						className: As.a.votesCounter
					}, Object(Is.b)(this.upVotes()))), r.a.createElement("div", {
						className: As.a.watchingContainer
					}, r.a.createElement("div", {
						className: As.a.watchingCounter
					}, Object(Is.b)(t)), r.a.createElement("p", {
						className: As.a.watchingCaption
					}, this.props.isLive ? b.fbt._("Watching", null, {
						hk: "2Fql0m"
					}) : b.fbt._("Views", null, {
						hk: "ixhZU"
					}))), r.a.createElement("div", {
						className: As.a.voteContainer
					}, r.a.createElement("button", {
						className: Object(d.a)(As.a.downButton, {
							[As.a.activeVote]: this.isVoteActive(Ls.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": b.fbt._("Dpvote", null, {
							hk: "1PcDeu"
						})
					}, r.a.createElement(Ms.a, {
						className: As.a.voteIcon
					})), r.a.createElement("p", {
						className: As.a.votesCounter
					}, Object(Is.b)(this.downVotes()))))
				}
				vote(e) {
					const t = this.props.currentStream;
					if (t) {
						if (e === this.state.displayedVoteState) return this.props.vote(t.post.id, Ls.a.notVoted), void this.setState({
							...this.state,
							displayedVoteState: Ls.a.notVoted
						});
						this.props.vote(t.post.id, e), this.setState({
							...this.state,
							displayedVoteState: e
						}), e === Ls.a.upvoted ? this.props.onUpvote() : this.props.onDownvote()
					}
				}
			}
			var Vs = Object(n.b)(Ds, (e, t) => ({
					vote: (t, s) => e(Object(Ps.a)(t, s))
				}))(Bs),
				Fs = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				Us = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				Hs = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				Ks = s.n(Hs),
				qs = s("./src/reddit/helpers/trackers/shareToChat.ts"),
				Ws = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				Gs = s.n(Ws),
				Js = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				Qs = s.n(Js);
			const {
				fbt: Xs
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var zs;
			! function(e) {
				e.EndScreen = "END_SCREEN", e.Panel = "PANEL"
			}(zs || (zs = {}));
			const Ys = (e, {
					currentStreamId: t
				}) => t ? Object(Xe.l)(e, t) : void 0,
				Zs = Object(i.c)({
					currentStream: Ys,
					inStreamingUiRefreshViewer: qe.f,
					inViewerFeedTheMeter: (e, t) => Object(qe.g)(e, t, Ys),
					isApiError: (e, {
						currentStreamId: t
					}) => Object(Qe.c)(e, t),
					isBatchApiError: Qe.e,
					isBatchPending: Qe.f,
					isCommentsLocked: (e, {
						currentStreamId: t
					}) => !!t && Object(Xe.g)(e, t),
					isConfigError: Qe.g,
					isIntroInProgress: ze.b,
					isMenuOpened: e => e.tooltipId === Fs.d || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltipId || e.tooltipId === Us.j,
					lastBatchApiRequestTs: Qe.i,
					recommendedViewerSubredditOptions: Qe.j,
					isModWithPostPermissions: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return !!s && Object(wt.h)(e, {
							subredditId: Object(_t.B)(e, s)
						})
					},
					isUserSubscriber: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return !!s && Object(_t.cb)(e, {
							identifier: {
								name: s,
								type: gt.a.SUBREDDIT
							}
						}, !0)
					},
					videoShareModalOpen: (e, {
						currentStreamId: t
					}) => !!t && Object(ve.a)(e) === Object(vt.a)(t),
					subredditByName: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return s ? Object(_t.w)(e, {
							subredditName: s
						}) : null
					}
				});
			class $s extends o.Component {
				constructor(e) {
					super(e), this.onSubscribeToSubreddit = () => {
						this.props.sendEvent(Object(He.k)(this.props.currentStream)), this.props.onSubscribeSubreddit()
					}, this.onProfileSubscriptionChange = e => {
						e ? this.props.sendEvent(Object(He.c)(this.props.currentStream)) : this.props.sendEvent(Object(He.n)(this.props.currentStream))
					}, this.onCrosspost = e => {
						this.props.currentStreamId && window.open(`${Ot.b}?source_id=${this.props.currentStreamId}`, "_blank"), this.props.onCrosspost(e)
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
						}), I.o)
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
							settingChange: bt.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: bt.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === bt.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === bt.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === bt.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === bt.a.Volume && s && s.handleMouseUp(e), this.setState({
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
								[Ve.q]: r,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							};
						e(Object(O.a)(o, n)), s({
							referralId: r
						})
					}, this.referralId = it()(), this.source = zs.Panel, this.state = {
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
						isIntroInProgress: t,
						isLive: s,
						isUnavailable: o,
						onHide: n,
						onReport: a,
						onToggleMenu: i,
						onUpvote: c,
						onDownvote: l
					} = this.props, m = e && e.post.id;
					return r.a.createElement("div", {
						className: Object(d.a)(Gs.a.overlay, {
							[Gs.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !t && r.a.createElement("div", {
						className: Gs.a.overlayTop
					}, this.renderRecommendedViewerSubreddit(), e && !o && r.a.createElement(r.a.Fragment, null, r.a.createElement(Fs.e, {
						onClick: this.props.onToggleVideoShareModal
					}), r.a.createElement(Fs.b, {
						onClick: i,
						onHideClick: n,
						onReportClick: a
					}))), e && !t && !o && !!m && r.a.createElement(Yt, {
						className: Gs.a.awardOverlaySpectacle,
						commentsPageKey: Object(dt.a)(m)
					}), e && !t && !o && r.a.createElement("div", {
						className: Gs.a.overlayTitle
					}, this.renderTitleContainer()), r.a.createElement("div", {
						className: Gs.a.overlayCenter
					}, this.getContent()), e && !t && !o && r.a.createElement("div", {
						className: Gs.a.overlayBottom
					}, r.a.createElement(Vs, {
						currentStreamId: e.post.id,
						isLive: s,
						onUpvote: c,
						onDownvote: l
					}), this.renderScrubber()))
				}
				renderUiRefresh() {
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
						related: h,
						subreddit: b,
						isUserSubscriber: v,
						onEndBroadcast: g,
						subredditByName: S,
						onShareToChat: f
					} = this.props;
					if (s || !e || i) return null;
					const w = e && e.post.id,
						{
							authorInfo: _
						} = e.post;
					return r.a.createElement("div", {
						className: Object(d.a)(Qs.a.overlay, {
							[Qs.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, e && !s && !i && !!w && r.a.createElement(Yt, {
						className: Gs.a.awardOverlaySpectacle,
						commentsPageKey: Object(dt.a)(w)
					}), t && r.a.createElement(bs, {
						currentStream: e,
						overlayOpen: this.isVisible(),
						openGildModal: () => this.props.handleGiveAward()
					}), this.renderPrompt(), r.a.createElement("div", {
						className: Qs.a.overlayTop
					}, r.a.createElement("div", {
						className: Qs.a.overlayTopLeft
					}, r.a.createElement("div", {
						className: Qs.a.meta
					}, r.a.createElement(Us.c, null, n ? r.a.createElement(Us.h, {
						onClick: this.handleClickLiveBroadcastStatus
					}) : r.a.createElement(Us.p, null)), r.a.createElement(Us.n, {
						text: e.post.title
					}), r.a.createElement("div", {
						className: Qs.a.subredditInfo
					}, r.a.createElement(Us.l, {
						onSelect: m,
						related: h,
						subreddit: b,
						subreddits: p
					}), r.a.createElement(Us.f, {
						onSubscribe: this.onSubscribeToSubreddit,
						isSubscribed: v
					})), r.a.createElement(Us.r, {
						broadcast: e,
						live: n
					}))), r.a.createElement("div", {
						className: Qs.a.overlayTopRight
					}, Object(Us.s)(_) ? r.a.createElement(Us.m, {
						profile: _,
						currentStream: e,
						onSubscriptionChange: this.onProfileSubscriptionChange
					}) : null, r.a.createElement(Us.i, {
						onClick: u,
						onHideClick: c,
						onReportClick: l,
						onToggleLockClick: this.onToggleLock,
						isCommentsLocked: o,
						hasModeratorPermissions: a,
						onEndBroadcastClick: g,
						onRpanStudioClick: this.props.onRpanStudioClick,
						subreddit: S
					}), r.a.createElement(Us.k, {
						onClickShare: this.props.onShare,
						onClickCrosspost: () => {
							this.onCrosspost({
								source: zs.Panel
							})
						},
						onClickVideoShare: () => {
							this.onShareLink({
								source: zs.Panel
							})
						},
						onClickShareToChat: () => {
							const e = Object(O.a)(Object(Ue.a)(w), {
								[Ve.q]: this.referralId,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							});
							f(e), this.props.sendEvent(Object(qs.a)())
						}
					}), r.a.createElement("div", {
						className: Object(d.a)({
							[Qs.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, r.a.createElement(Us.q, {
						broadcast: e,
						onUpvote: this.props.onUpvote,
						onDownvote: this.props.onDownvote
					})))), r.a.createElement("div", {
						className: Qs.a.overlayBottom,
						onMouseEnter: this.onMouseHoverScrubber,
						onMouseLeave: this.onMouseLeaveScrubber,
						onMouseMove: this.onMouseHoverScrubber
					}, this.renderScrubber()), this.props.videoShareModalOpen && r.a.createElement(vt.b, {
						className: Gs.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !0,
						url: Object(O.a)(Object(Ue.a)(w), {
							[Ve.q]: this.referralId,
							utm_source: "share",
							utm_medium: "web2x",
							utm_content: "rpan_stream"
						})
					}))
				}
				renderScrubber() {
					const {
						inStreamingUiRefreshViewer: e,
						isLive: t,
						isMuted: s,
						isPaused: o,
						onPlayPauseToggle: n,
						onVideoPositionUpdate: a,
						setVolume: i,
						toggleMute: d,
						videoCurrentTime: c,
						videoTotalTime: l,
						volume: m
					} = this.props, u = e ? Qs.a.controls : "", p = e || this.isVisible();
					return r.a.createElement("div", {
						className: u
					}, r.a.createElement(ks, {
						isLive: t,
						isMuted: s,
						isPaused: o,
						isVisible: p,
						onPlayPauseToggle: n,
						onVideoPositionUpdate: a,
						seekBarRef: e => this.seekBar = e,
						settingChange: this.state.settingChange,
						setVolume: i,
						hideLiveLabel: e,
						toggleMute: d,
						videoCurrentTime: c,
						videoTotalTime: l,
						volume: m,
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
						onReplayVideo: h,
						showErrorPrompt: b,
						showStreamEndedPrompt: v,
						toggleMute: g
					} = this.props;
					if (b || d && i || t && o || !t && n) return r.a.createElement(Us.d, null);
					if (d) return r.a.createElement("div", {
						className: Gs.a.intro
					}, r.a.createElement(Fs.c, {
						isMuted: l,
						onToggle: g
					}));
					if (m || !t && !n && !a && p) return null;
					if (c) return r.a.createElement(Us.o, null);
					if (e && e.stream.state === ft.a.DISCONNECTED) return r.a.createElement(Us.b, null);
					if (v) return r.a.createElement(Us.a, {
						onClickReplay: h,
						onClickShare: () => {
							this.onShareLink({
								source: zs.EndScreen
							}), this.source = zs.EndScreen
						},
						onClickCrosspost: () => {
							this.onCrosspost({
								source: zs.EndScreen
							})
						}
					});
					const S = e && e.meter && e.estimated_remaining_time < $e;
					return u && S ? r.a.createElement(Us.e, {
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
						className: Gs.a.menuContainer
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
						className: Gs.a.titleContainer
					}, r.a.createElement("h1", {
						className: Gs.a.videoTitle
					}, e.post.title), !t && r.a.createElement("div", {
						className: Gs.a.RecordedLabel
					}, Xs._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(Ks.a.ControlVolume)) return !0;
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
						showStreamEndedPrompt: h,
						toggleMute: b
					} = this.props;
					return p || i && a || t && s || !t && o ? r.a.createElement("div", {
						className: Gs.a.prompt
					}, Xs._("Connection issues", null, {
						hk: "24LpRV"
					})) : i ? r.a.createElement("div", {
						className: Gs.a.intro
					}, r.a.createElement(Fs.c, {
						isMuted: c,
						onToggle: b
					})) : l || !t && !o && !n && m ? null : d ? r.a.createElement("div", {
						className: Gs.a.prompt
					}, Xs._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === ft.a.DISCONNECTED ? r.a.createElement("div", {
						className: Gs.a.prompt
					}, Xs._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : h ? r.a.createElement("div", {
						className: Gs.a.prompt
					}, r.a.createElement("div", {
						className: Gs.a.promptButtonSet
					}, r.a.createElement(Fs.g, {
						onClick: u
					}), r.a.createElement(Fs.h, {
						onClick: this.props.onToggleVideoShareModal
					}))) : null
				}
			}
			var eo = Object(n.b)(Zs, (e, t) => ({
					copyLink: t => e(Object(ce.D)(t)),
					onToggleVideoShareModal: () => {
						t.currentStreamId && e(Object(k.i)(Object(vt.a)(t.currentStreamId)))
					},
					onHide: () => {
						t.currentStreamId && (e(Object(ce.Y)(t.currentStreamId, !0, !0, !0)), e(L(t.currentStreamId)))
					},
					onLockComments: () => {
						t.currentStreamId && e(ut(t.currentStreamId))
					},
					onUnlockComments: () => {
						t.currentStreamId && e(pt(t.currentStreamId))
					},
					handleGiveAward: () => {
						if (t.currentStreamId) {
							const s = Object(St.d)(St.a.GildingFlow, !0);
							e(Object(ct.d)({
								correlationId: s,
								thingId: t.currentStreamId
							}))
						}
					},
					onSubscribeSubreddit: () => {
						const s = t.subreddit && t.subreddit.split("/").pop();
						s && e(Object(ht.d)([{
							name: s,
							type: gt.a.SUBREDDIT
						}], !0))
					},
					getModeratedSubreddits: () => e(Object(lt.b)())
				}))($s),
				to = s("./src/lib/constants/index.ts"),
				so = s("./src/lib/makeDraftKey/index.ts"),
				oo = s("./src/reddit/actions/pages/comments.ts"),
				ro = s("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				no = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				ao = s("./src/reddit/components/CommentsChat/Loader.ts"),
				io = s("./src/reddit/selectors/posts.ts"),
				co = s("./src/reddit/icons/svgs/Send/index.tsx"),
				lo = s("./src/reddit/components/CommentsChat/MessageInput/MutedMessageInput.m.less"),
				mo = s.n(lo),
				uo = s("./src/reddit/components/CommentsChat/MessageInput/AwardButton.tsx");
			const {
				fbt: po
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var ho = ({
					postId: e
				}) => {
					const t = Object(n.e)(t => Object(io.H)(t, {
							postId: e
						})),
						s = Object(n.d)(),
						o = Object(pe.b)(),
						a = t.isGildable;
					return r.a.createElement("span", {
						className: mo.a.InputLine
					}, r.a.createElement("span", {
						className: mo.a.FormBackground
					}, r.a.createElement("span", {
						className: mo.a.FormLine
					}, r.a.createElement("div", {
						className: mo.a.Text
					}, po._("Chat is disabled", null, {
						hk: "gQrh3"
					}))), r.a.createElement(co.a, {
						className: mo.a.SendIcon
					})), a && r.a.createElement(uo.a, {
						showSubmitInsideTextArea: !0,
						isLivestreaming: !0,
						sendEvent: o,
						postId: e,
						handleGiveAward: t => {
							s(Object(ct.d)({
								correlationId: t,
								thingId: e
							}))
						}
					}))
				},
				bo = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx");
			const {
				fbt: vo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), go = K.a.wrapped(q.g, "ModalFooter", z.a), So = K.a.wrapped(q.i, "ModalHeader", z.a);
			var fo = ({
				toggleModal: e,
				bodyText: t,
				title: s
			}) => r.a.createElement(q.e, null, r.a.createElement(So, null, r.a.createElement(Q.a, null, r.a.createElement("div", null, r.a.createElement("div", {
				className: z.a.Title
			}, s)), r.a.createElement(G.a, {
				onClick: e
			}, r.a.createElement(q.b, null)))), r.a.createElement("div", {
				className: z.a.ModalText
			}, t), r.a.createElement(go, {
				className: z.a.ModalFooter
			}, r.a.createElement(W.l, {
				onClick: e,
				className: z.a.Button,
				"data-redditstyle": !0
			}, vo._("I Understand", null, {
				hk: "1f4y1d"
			}))));
			const {
				fbt: Oo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), wo = () => Oo._("Because you’ve been flagged multiple times for violating Reddit’s {=Content Policy,} the system has removed your ability to participate in this chat. This can’t be undone (not even by a mod), but after 24 hours you’ll be able to chat again.", [Oo._param("=Content Policy,", r.a.createElement("a", {
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, Oo._("{=Content Policy},", [Oo._param("=Content Policy", r.a.createElement("span", {
				className: z.a.Link
			}, Oo._("Content Policy", null, {
				hk: "47cyc2"
			})))], {
				hk: "3BF41m"
			})))], {
				hk: "ITZAq"
			});
			var _o = Object(H.a)(({
					toggleModal: e
				}) => r.a.createElement(fo, {
					bodyText: wo(),
					title: Oo._("Sit back and watch for a bit", null, {
						hk: "nd6D"
					}),
					toggleModal: e
				})),
				Co = s("./src/reddit/icons/svgs/Info/index.tsx");
			const {
				fbt: Eo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yo = Object(i.c)({
				isMuteModalOpen: e => "rpan-mute-chat-modal-id" === Object(ve.a)(e)
			});
			class xo extends r.a.Component {
				constructor() {
					super(...arguments), this.onClickInfo = () => {
						this.props.onToggleMuteModal()
					}
				}
				render() {
					return r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
						className: mo.a.InputLine
					}, r.a.createElement("span", {
						className: mo.a.FormBackground
					}, r.a.createElement("span", {
						className: mo.a.FormLine
					}, r.a.createElement(Co.a, {
						className: mo.a.InfoIcon,
						onClick: this.onClickInfo
					}), r.a.createElement("div", {
						className: mo.a.Text
					}, Eo._("Chat is unavailable", null, {
						hk: "12EjN3"
					}))), r.a.createElement(co.a, {
						className: mo.a.SendIcon
					}))), this.props.isMuteModalOpen && r.a.createElement(_o, {
						toggleModal: this.props.onToggleMuteModal
					}))
				}
			}
			var ko = Object(n.b)(yo, e => ({
				onToggleMuteModal: () => e(Object(k.i)("rpan-mute-chat-modal-id"))
			}))(xo);
			const {
				fbt: Ro
			} = s("./node_modules/fbt/lib/FbtPublic.js"), jo = () => Ro._("Your messages have been flagged for violating Reddit’s {=Content Policy.} Have fun chatting, but if you’re flagged multiple times, you may lose the ability to participate in RPAN chats.", [Ro._param("=Content Policy.", r.a.createElement("a", {
				className: z.a.Link,
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, Ro._("{=Content Policy}.", [Ro._param("=Content Policy", r.a.createElement("span", {
				className: z.a.Link
			}, Ro._("Content Policy", null, {
				hk: "36gq1Y"
			})))], {
				hk: "2SSN6t"
			})))], {
				hk: "4aZsnf"
			});
			var Io = Object(H.a)(({
					toggleModal: e
				}) => r.a.createElement(fo, {
					bodyText: jo(),
					title: Ro._("Be mindful of what you say", null, {
						hk: "3CDXHh"
					}),
					toggleModal: e
				})),
				Po = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less")),
				Mo = s.n(Po);
			const To = Object(n.b)(() => Object(i.c)({
					allAwards: e => e.awards.models,
					post: (e, {
						postId: t
					}) => Object(io.H)(e, {
						postId: t
					})
				})),
				Lo = ["Center", "Left", "Right"],
				No = ["Low", "Mid", "High"],
				Ao = () => Math.floor(800 * Math.random()),
				Do = e => e[Math.floor(Math.random() * e.length)],
				Bo = e => {
					const t = Do(Lo),
						s = Do(No),
						o = kt(e);
					return Mo.a[`award_${o}Tier_${s}${t}`]
				};
			class Vo extends o.Component {
				shouldComponentUpdate(e) {
					return !(!e.post || !e.post.awardCountsById) && (!(this.props.post && this.props.post.awardCountsById) || this.props.post.id !== e.post.id)
				}
				render() {
					const {
						allAwards: e,
						post: t
					} = this.props;
					if (!t || !t.awardCountsById) return null;
					const s = Object.entries(t.awardCountsById).map(([t, s]) => {
							const {
								icon: o,
								coinPrice: r
							} = e[t];
							return {
								coinPrice: r,
								count: s,
								iconUrl: o.url,
								id: t
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
							const s = `${Ao()}ms`,
								i = Bo(t),
								c = r.a.createElement("img", {
									key: `${e.id}-${a}`,
									className: Object(d.a)(Mo.a.award, i),
									src: n,
									style: {
										animationDelay: s
									}
								});
							o.push(c)
						}
					}), r.a.createElement("div", {
						className: Mo.a.awardBubbler,
						role: "presentation"
					}, o)
				}
			}
			var Fo = To(Vo),
				Uo = s("./src/reddit/contexts/Post/index.tsx"),
				Ho = s("./src/reddit/models/PostDraft/index.ts");
			const Ko = Object(i.a)((e, t) => t, e => e.publicAccessNetwork.automuteLevels, (e, t) => {
				var s;
				return (null === (s = null == t ? void 0 : t[e]) || void 0 === s ? void 0 : s.level) || 0
			});
			var qo = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				Wo = s.n(qo);
			const Go = Object(i.c)({
				isDisabled: (e, t) => Object(Xe.f)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: Ye.K,
				isPostDataLoaded: (e, {
					postId: t
				}) => !!Object(io.H)(e, {
					postId: t
				}),
				replyComment: (e, {
					postId: t
				}) => Object(Ct.s)(e, {
					commentsPageKey: Object(dt.a)(t)
				}),
				automuteViolationLevel: (e, {
					postId: t
				}) => Ko(e, t)
			});
			var Jo;
			! function(e) {
				e.Warning = "warning", e.Mute = "mute"
			}(Jo || (Jo = {}));
			class Qo extends o.Component {
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
						automuteModal: Jo.Warning
					}) : this.props.automuteViolationLevel > 1 && this.setState({
						automuteModal: Jo.Mute
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
					} = this.props, p = Object(dt.a)(e), h = m ? Object(so.a)(Ho.c.replyToComment, m.id) : Object(so.a)(Ho.c.replyToPost, e);
					return o ? r.a.createElement("div", {
						"aria-label": b.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: Wo.a.streamingChat,
						onClick: this.props.onChatClick
					}, r.a.createElement(Uo.a, {
						postId: e
					}, r.a.createElement(ao.a, {
						className: Wo.a.chatScroller,
						emptyStateClassName: Wo.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: l,
						commentsPageKey: p
					}), s && (this.shouldMuteChat ? r.a.createElement(ko, null) : t ? r.a.createElement(ho, {
						postId: e
					}) : r.a.createElement(bo.a, {
						key: "chatCommentsForm",
						postId: e,
						replyComment: m,
						draftKey: h,
						commentsPageKey: p,
						isEditing: !1,
						sendEvent: c,
						onFocusMessageInput: u,
						isLivestreaming: !0
					})), r.a.createElement(Fo, {
						postId: e
					}), !s && r.a.createElement(no.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						location: n,
						openLoginModal: a,
						openRegisterModal: i,
						origin
					}), this.state.automuteModal === Jo.Warning && r.a.createElement(Io, {
						toggleModal: this.onDismissModal
					}), this.state.automuteModal === Jo.Mute && r.a.createElement(_o, {
						toggleModal: this.onDismissModal
					}))) : r.a.createElement("div", {
						className: Object(d.a)(Wo.a.streamingChat, Wo.a.prompt)
					}, b.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var Xo = Object(n.b)(Go, (e, {
					postId: t
				}) => ({
					loadComments: () => e(Object(oo.commentsPageDataRequested)(t, void 0, {
						sort: to.t.CHAT
					}, to.t.CHAT)),
					openLoginModal: () => e(Object(m.i)()),
					openRegisterModal: () => e(Object(m.k)()),
					fetchAutomuteStatus: () => e(Object(ro.b)(t))
				}))(Qo),
				zo = s("./src/reddit/icons/svgs/Pagination/back.tsx");
			var Yo = e => r.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, r.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				Zo = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				$o = s.n(Zo);
			const er = ({
				isNext: e,
				onClick: t,
				stream: s
			}) => r.a.createElement("div", {
				className: Object(d.a)($o.a.switchContainer, e ? $o.a.switchContainerNext : $o.a.switchContainerPrevious)
			}, r.a.createElement("button", {
				className: $o.a.switchButton,
				disabled: !s,
				onClick: t,
				"aria-label": e ? b.fbt._("Forward arrow", null, {
					hk: "3b7sZa"
				}) : b.fbt._("Back arrow", null, {
					hk: "1upGBK"
				}),
				value: e ? "forward" : "back"
			}, r.a.createElement("div", {
				className: $o.a.streamThumbnail,
				style: s ? {
					backgroundImage: `url(${s.stream.thumbnail})`
				} : {}
			}), e ? r.a.createElement(Yo, {
				className: $o.a.arrowIcon
			}) : r.a.createElement(zo.a, {
				className: $o.a.arrowIcon
			})));
			var tr = e => r.a.createElement(r.a.Fragment, null, r.a.createElement(er, {
				isNext: !1,
				onClick: e.onPrevious,
				stream: e.previousStream
			}), r.a.createElement(er, {
				isNext: !0,
				onClick: e.onNext,
				stream: e.nextStream
			}));
			Object(P.a)(I.s);
			const sr = Object(P.a)(I.A),
				or = (e, t) => async (s, o) => {
					const r = o(),
						n = Date.now(),
						a = e.map(e => Object(Xe.l)(r, e)).filter(Boolean).map(e => ({
							imageUrl: `${e.stream.thumbnail}?${n}`,
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await rr(a, t)
				}, rr = (e, t) => Promise.all(e.map(e => nr(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), nr = e => new Promise((t, s) => {
					const o = new Image;
					o.onload = () => t(), o.onerror = () => s(), o.src = e
				}).then(() => !0, () => !1);
			var ar, ir = s("./src/reddit/components/PublicAccessNetwork/Theater/VisualEffectScreen/index.m.less"),
				dr = s.n(ir);
			! function(e) {
				e.Loading = "Loading", e.Preview = "Preview", e.Static = "Static"
			}(ar || (ar = {}));
			class cr extends o.Component {
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
					if (t === ar.Loading) o = dr.a.loading;
					else if (t === ar.Preview) o = dr.a.preview, n = {
						backgroundImage: `url(${e})`
					};
					else {
						if (t !== ar.Static) return null;
						o = dr.a.static
					}
					return r.a.createElement("div", {
						className: dr.a.container
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
			var lr = Object(n.b)(null, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, o) => {
						const r = await s(or(e, t));
						s(sr(r))
					})(t))
				}))(cr),
				mr = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				ur = s.n(mr);
			const pr = Object(f.a)(U.a, {
					playerName: "RPAN Video Player"
				}),
				hr = Object(i.c)({
					currentStream: Xe.d,
					currentStreamStartTime: Xe.e,
					currentHlsUrl: Xe.b,
					inViewerFeedTheMeter: (e, t) => Object(qe.g)(e, t, Xe.d),
					isIntroInProgress: ze.b,
					isOverlayOpen: Je.i,
					isReportFlowOpen: (e, {
						streamIdFromPath: t
					}) => {
						var s, o;
						return (null === (o = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === o ? void 0 : o.postOrCommentId) === Object(Ue.g)(t || "")
					},
					lastChatActivityUtcTs: ze.c,
					nextStream: Xe.h,
					nextTopStream: Xe.i,
					playbackState: Xe.j,
					previousStream: Xe.k,
					streamById: e => t => Object(Xe.l)(e, t),
					unavailableVideoUrl: Qe.o,
					volume: Ge.d,
					isEndBroadcastModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(ve.a)(e),
					isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(ve.a)(e),
					isIntroChatModalOpen: e => "rpan-intro-chat-modal-id" === Object(ve.a)(e),
					isDownloadOBSModalOpen: e => Object(ve.a)(e) === de.a,
					previewUrl: Xe.c,
					reportingRevampEnabled: We.a,
					isNightMode: Ye.X
				}),
				br = Object(n.b)(hr, (e, t) => ({
					closeLocation: () => e(Object(a.b)(t.location.state[De.b.CloseLocation])),
					fetchBroadcasterProfileInfo: t => e(Object(R.d)(t, !0)),
					fetchPostForStream: t => e(Object(j.a)(t)),
					subscribeConfig: () => e(D.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(D.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(D.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: (t, s) => e(Object(V.c)(t, s)),
					onStatsSubscribe: t => e(D.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(D.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(u.a)(t)),
					receiveHlsStreamRemoved: t => e(Object(u.b)(t)),
					removeStreamFromHistory: t => e(L(t)),
					setNewCorrelationId: () => e(Object(B.b)()),
					setIntroFinishedStatus: t => e(Object(B.c)({
						isIntroFinished: t
					})),
					setMutedInFeed: t => e(F.G(t)),
					setVideoVolume: t => e(x.h(t)),
					updateVideoTimestamp: (t, s) => e(A({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(T(e))
					})(t)),
					resetHistory: () => e(N()),
					toggleIntroChatModal: () => e(Object(k.i)("rpan-intro-chat-modal-id")),
					toggleEndBroadcastModal: () => e(Object(k.i)("rpan-end-broadcast-confirmation-id")),
					toggleRemovalReasonModal: () => e(Object(k.i)("rpan-add-removal-reason-id")),
					toggleOBSDownloadModal: () => e(Object(k.i)(de.a)),
					onShareToChat: t => e(Object(y.f)(t))
				}));
			class vr extends o.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = r.a.createRef(), this.videoRef = r.a.createRef(), this.videoSessionManager = null, this.renderReportFlow = (e, t) => this.props.reportingRevampEnabled ? r.a.createElement(Ae.a, {
						withOverlay: !0,
						overlayCustomStyles: Ne.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}) : r.a.createElement(Ne.a, {
						withOverlay: !0,
						overlayCustomStyles: Ne.b,
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
							previousStream: h,
							related: v,
							sendEvent: g,
							subreddit: S,
							timestamp: f,
							unavailableVideoUrl: O,
							volume: w,
							isRemovalReasonModalOpen: _,
							isEndBroadcastModalOpen: C,
							isIntroChatModalOpen: E,
							isDownloadOBSModalOpen: y,
							isNightMode: x,
							onShareToChat: k
						} = this.props, {
							hasLiveIntent: R,
							isError: j,
							isLoading: I,
							isMuted: P,
							isOverlayVisible: M,
							isVideoPaused: T,
							showStreamEndedPrompt: L,
							videoCurrentTime: N,
							videoTotalTime: A,
							shouldShowOBSBanner: D
						} = this.state, B = t && t.post.id, V = o !== O, F = t && !t.post.subreddit, U = u === Xe.a.LIVE, H = t && 1e3 * t.broadcast_time;
						let K, q, W, G, J = "number" == typeof f ? f : s;
						H && J >= H && (J = 0), t && V ? (K = 1e3 * t.broadcast_time, q = B, W = U, G = t.post.title) : (K = void 0, q = void 0, W = !1, G = "RPAN Unavailable Video");
						const Q = t && t.meter && 10 * Math.round(t.estimated_remaining_time / 10),
							X = n && t && t.estimated_remaining_time < et && !a,
							z = void 0 !== Q && Q >= 0 && X ? ur.a[`meterCritical${Q}`] : void 0;
						let Y, Z;
						return I || j ? Y = p ? ar.Preview : ar.Loading : X && (Y = ar.Static), I ? Z = b.fbt._("video is loading", null, {
							hk: "jUJdy"
						}) : j ? Z = b.fbt._("unable to load video", null, {
							hk: "1Eh3Rt"
						}) : X && (Z = b.fbt._("this broadcast will expire soon. give an award to add more time.", null, {
							hk: "3dUpDV"
						})), r.a.createElement(r.a.Fragment, null, D && r.a.createElement(ie, {
							isDark: x,
							onClickLearnMore: this.onOBSBannerLearnMoreClick,
							onClickDismiss: this.onOBSBannerDismissClick
						}), r.a.createElement("div", {
							className: Object(d.a)(ur.a.theaterContainer, {
								[ur.a.overlay]: i,
								[ur.a.theaterContainerExp]: e,
								[ur.a.isObsBannerDisplayed]: D
							}),
							ref: this.focusRef,
							tabIndex: -1
						}, r.a.createElement("div", {
							className: ur.a.wrap
						}, r.a.createElement("div", {
							className: Object(d.a)(ur.a.panesWrapper, {
								[ur.a.initialized]: !a
							})
						}, r.a.createElement("div", {
							className: Object(d.a)(ur.a.pane, ur.a.leftPane)
						}, r.a.createElement("div", {
							className: ur.a.videoContainer
						}, Y && Z && r.a.createElement(lr, {
							previousStream: h,
							currentStream: t,
							nextStream: m,
							previewUrl: p,
							visualEffect: Y,
							visualEffectLabel: Z
						}), o && r.a.createElement("div", {
							className: z
						}, r.a.createElement(pr, {
							autoplay: !0,
							controls: !1,
							startTime: J,
							isPaused: T,
							muted: P,
							muxVideoDuration: K,
							muxVideoId: q,
							muxVideoIsLive: W,
							muxVideoTitle: G,
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
						})), r.a.createElement(eo, {
							currentStreamId: B,
							isLoading: I,
							isLive: U,
							isMuted: P,
							isPaused: T,
							isUnavailable: u === Xe.a.UNAVAILABLE,
							isVisible: M,
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
							showErrorPrompt: j,
							showStreamEndedPrompt: L,
							subreddit: S,
							toggleMute: this.onToggleMuteVideo,
							videoCurrentTime: U && R ? A : N,
							videoTotalTime: A,
							volume: w
						}), (_ || C) && t && r.a.createElement(Le, {
							subredditId: t.post.subreddit.id,
							subredditName: t.post.subreddit.name,
							postId: t.post.id,
							toggleModal: this.onEndBroadcast
						}), E && r.a.createElement(te, {
							toggleModal: this.props.toggleIntroChatModal
						}), y && r.a.createElement(de.b, {
							onClickDownload: this.onOBSModalDownloadClick,
							onClickDismiss: this.onOBSModalDismissClick,
							onClickGuidebook: this.onOBSModalGuidebookClick,
							className: ur.a.downloadOBSModal
						}))), !a && r.a.createElement("div", {
							className: Object(d.a)(ur.a.pane, ur.a.rightPane)
						}, t && !F && r.a.createElement(Xo, {
							location: l,
							onChatClick: this.onChatClick,
							onFocusMessageInput: this.handleFocusMessageInput,
							postId: t.post.id,
							sendEvent: g,
							subredditId: t.post.subreddit.id
						}))), t && !a && r.a.createElement(tr, {
							nextStream: m,
							onNext: this.onNextStream,
							onPrevious: this.onPreviousStream,
							previousStream: h
						}), t && !a && r.a.createElement(gr, {
							onClick: this.onClose
						}), t && !a && c && this.renderReportFlow(t, N))))
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
					}, I.p), this.onVideoPlayerPositionUpdate = e => {
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
							scrubbingStartMs: Object(C.a)(this.state.videoCurrentTime),
							scrubbingEndMs: Object(C.a)(s)
						}))
					}, this.onNextStream = g()(() => {
						const {
							nextStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(He.l)(e, this.playbackStats)), this.goToStream(e))
					}, I.q, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = g()(() => {
						const {
							previousStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(He.m)(e, this.playbackStats)), this.goToStream(e))
					}, I.q, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(Fe.g)(e.target) ? e.stopPropagation() : e.keyCode === Be.a.ArrowRight ? this.onNextStream() : e.keyCode === Be.a.ArrowLeft && this.onPreviousStream()
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
							const t = e.source === zs.EndScreen ? "copy_link_video" : "copy_link";
							this.props.sendEvent(Object(He.u)(t, this.props.currentStream, this.playbackStats, null == e ? void 0 : e.referralId))
						}
						this.cancelSwitchingOnStreamEnded()
					}, this.onShare = () => {
						this.props.currentStream && this.props.sendEvent(Object(He.B)("share", this.props.currentStream, this.playbackStats))
					}, this.onShareLink = e => {
						if (this.props.currentStream) {
							const t = e.source === zs.EndScreen ? "share_video" : "share_copy";
							this.props.sendEvent(Object(He.B)(t, this.props.currentStream, this.playbackStats))
						}
					}, this.onCrosspost = e => {
						if (this.props.currentStream) {
							const t = e.source === zs.EndScreen ? "crosspost_video" : "share_crosspost";
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
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === Xe.a.LIVE || this.props.playbackState === Xe.a.VOD, this.handleHeartbeat = ({
						meta: e,
						stats: t
					}) => {
						const {
							currentStream: s,
							streamById: o
						} = this.props, r = s && s.post.id === e.id ? s : o(e.id);
						if (!r) return;
						const n = !t.sessionDurationMs ? He.E : He.A,
							a = {
								...t,
								playerType: He.a.Theater
							};
						this.props.sendEvent(n(r, a))
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
					e.classList.add(ur.a.focusVisible), Object(_.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, w(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(Ke.t)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream(), window.localStorage && this.setState({
						shouldShowOBSBanner: !J.k()
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
						subscribeStreams: h
					} = this.props;
					if (r || n === e.isOverlayOpen || (n ? (this.setState(({
							isVideoPaused: e
						}) => ({
							wasVideoPausedWhenOverlayOpened: e,
							isVideoPaused: !0
						})), this.unsubscribeConfig(), this.unsubscribeStreams(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits()) : (this.setState(({
							wasVideoPausedWhenOverlayOpened: e
						}) => ({
							isVideoPaused: e
						})), p().then(e => this.unsubscribeConfig = e), h().then(e => this.unsubscribeStreams = e), s && this.isCurrentStreamWatchable() && (i(s.post.id).then(e => this.unsubscribeHeartbeat = e), c(s.post.id).then(e => this.unsubscribeStats = e)), d().then(e => this.unsubscribeRecommendedViewerSubreddits = e))), (m || u) !== (e.related || e.subreddit)) return this.props.resetHistory(), this.handleNewStream(), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), void(s || this.setState({
						isLoading: !0
					}));
					!o && e.isIntroInProgress && this.handleNewStream(), o || e.isIntroInProgress || !Sr(s, e.currentStream) || this.handleNewStream(), this.updateVideoSession(e, t), this.state.isSwitchingOnStreamEndedScheduled || o || !(!s && !this.state.isLoading || l === Xe.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
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
					return r.a.createElement(S.a.Consumer, null, this.renderTheater)
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
					J.ob(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(He.g)("not_now", this.props.currentStream))
				}
				onOBSBannerLearnMoreClick() {
					J.ob(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(He.g)("learn_more", this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onChatClick() {
					this.props.currentStream && this.props.sendEvent(Object(He.o)(this.props.currentStream, this.playbackStats))
				}
				handleFocusMessageInput() {
					J.U() || this.props.toggleIntroChatModal()
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
				playVideo(e = {
					sendEvent: !0
				}) {
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
					}, I.k), this.setState({
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
					return Object(O.a)(t, {
						[Ve.r]: this.props.related,
						[Ve.z]: this.props.timestamp
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
					window.clearTimeout(this.consumePostTimeout), this.consumePostTimeout = window.setTimeout(() => this.props.sendEvent(Object(He.t)(this.props.currentStream)), h.a.telemetry.postConsumedThreshold)
				}
				showOverlayAfterStreamSwitching() {
					window.clearTimeout(this.overlayVisibilityTimeout), this.overlayVisibilityTimeout = window.setTimeout(() => this.setState({
						isOverlayVisible: !1
					}), I.n), this.setState({
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
			const gr = ({
					onClick: e
				}) => r.a.createElement("button", {
					className: ur.a.closeButton,
					onClick: e,
					"aria-label": b.fbt._("close button", null, {
						hk: "2l5YIS"
					})
				}, r.a.createElement(re.a, {
					className: ur.a.closeIcon
				})),
				Sr = (e, t) => (e && e.post.id) !== (t && t.post.id);
			vr.contextType = p.a;
			var fr = br(Object(pe.c)(vr)),
				Or = s("./src/reddit/contexts/InsideOverlay.tsx"),
				wr = s("./src/reddit/helpers/overlay/index.ts"),
				_r = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				Cr = s.n(_r);
			const {
				fbt: Er
			} = s("./node_modules/fbt/lib/FbtPublic.js"), yr = Object(l.a)((e, {
				match: {
					params: t
				}
			}) => t), xr = Object(l.a)((e, {
				location: {
					search: t
				}
			}) => Object(c.a)(t)), kr = Object(i.a)(yr, xr, (e, t) => {
				const s = t.get(Ve.r),
					{
						subredditName: o
					} = e;
				return "home" === s || "r/popular" === s ? s : "popular" === o ? "r/popular" : o ? void 0 : "home"
			}), Rr = Object(i.a)(xr, e => {
				const t = e.get(Ve.z);
				if (!t) return;
				const s = parseInt(t, 10);
				return isNaN(s) ? void 0 : s
			}), jr = Object(i.c)({
				isEnabled: qe.a,
				isIntroInProgress: ze.b,
				related: kr,
				timestamp: Rr
			}), Ir = Object(n.b)(jr, (e, t) => ({
				onOpenLoginModal: () => e(Object(m.i)()),
				onStreamByIdRequested: t => e(Object(u.d)(t)),
				updateLocation: (t, {
					isOverlay: s,
					useReplace: o
				}) => {
					const r = o ? a.c : a.b,
						n = s ? Object(wr.b)(t) : t;
					e(r(n))
				}
			}));
			class Pr extends r.a.Component {
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
							className: Object(d.a)(Cr.a.rpanContainer, {
								[Cr.a.overlay]: t,
								[Cr.a.rpanContainerExp]: e
							})
						}, r.a.createElement(p.b, null, r.a.createElement(fr, {
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
				onNavigation(e, t = !1) {
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
					return e ? r.a.createElement(S.a.Consumer, null, this.renderPublicAccessNetwork) : r.a.createElement(Mr, null)
				}
			}
			const Mr = () => {
				const e = Object(o.useContext)(S.a);
				return r.a.createElement("div", {
					className: Object(d.a)(Cr.a.rpanContainer, Cr.a.forbiddenScreen, {
						[Cr.a.rpanContainerExp]: e
					})
				}, r.a.createElement("h2", null, Er._("Not Found", null, {
					hk: "2ijDv5"
				})))
			};
			t.default = Ir(Object(pe.c)(Object(Or.b)(Pr)))
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
				experimentEligibilitySelector: a.K,
				experimentName: o.k
			}) === o.f.Enabled
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
					return Boolean(t) && !Object(r.sf)(t)
				},
				d = Object(o.a)(i, n.d, (e, t) => e && !t)
		},
		"./src/redditGQL/operations/CreatorStats.json": function(e) {
			e.exports = JSON.parse('{"id":"b3a25d285bff"}')
		},
		"./src/redditGQL/operations/OtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"32c146056719"}')
		},
		"./src/redditGQL/operations/PostFeedAndOtherDiscussions.json": function(e) {
			e.exports = JSON.parse('{"id":"43cac632d2bc"}')
		},
		"./src/redditGQL/operations/SubredditPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"b44a0d546b6d"}')
		},
		"./src/redditGQL/operations/SubredditsPosts.json": function(e) {
			e.exports = JSON.parse('{"id":"535d07e302e3"}')
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PublicAccessNetwork.8bb9c89cb53367bcdddb.js.map