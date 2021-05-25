// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.dc3256e6ac3210c69af2.js
// Retrieved at 5/25/2021, 11:10:04 AM by Reddit Dataminer v1.0.0
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
					var o, n = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						r = !/like android/i.test(t) && /android/i.test(t),
						i = /nexus\s*[0-6]\s*/i.test(t),
						d = !i && /nexus\s*[0-9]+/i.test(t),
						c = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						p = /(web|hpw)os/i.test(t),
						h = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !h && /windows/i.test(t)),
						g = !n && !l && /macintosh/i.test(t),
						v = !r && !m && !u && !p && /linux/i.test(t),
						f = a(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						w = s(/version\/(\d+(\.\d+)?)/i),
						S = /tablet/i.test(t) && !/tablet pc/i.test(t),
						y = !S && /[^-]mobi/i.test(t),
						k = /xbox/i.test(t);
					/opera/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: w || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? o = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || w
					} : /SamsungBrowser/i.test(t) ? o = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: w || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? o = {
						name: "Opera Coast",
						coast: e,
						version: w || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? o = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: w || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : h ? (o = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, f ? (o.msedge = e, o.version = f) : (o.msie = e, o.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? o = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : c ? o = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? o = {
						name: "Microsoft Edge",
						msedge: e,
						version: f
					} : /vivaldi/i.test(t) ? o = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || w
					} : m ? o = {
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
						version: w || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : p ? (o = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: w || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (o.touchpad = e)) : /bada/i.test(t) ? o = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? o = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || w
					} : /qupzilla/i.test(t) ? o = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || w
					} : /chromium/i.test(t) ? o = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || w
					} : /chrome|crios|crmo/i.test(t) ? o = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : r ? o = {
						name: "Android",
						version: w
					} : /safari|applewebkit/i.test(t) ? (o = {
						name: "Safari",
						safari: e
					}, w && (o.version = w)) : n ? (o = {
						name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
					}, w && (o.version = w)) : o = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || w
					} : {
						name: s(/^(.*)\/(.*) /),
						version: a(/^(.*)\/(.*) /)
					}, !o.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (o.name = o.name || "Blink", o.blink = e) : (o.name = o.name || "Webkit", o.webkit = e), !o.version && w && (o.version = w)) : !o.opera && /gecko\//i.test(t) && (o.name = o.name || "Gecko", o.gecko = e, o.version = o.version || s(/gecko\/(\d+(\.\d+)?)/i)), o.windowsphone || !r && !o.silk ? !o.windowsphone && n ? (o[n] = e, o.ios = e, o.osname = "iOS") : g ? (o.mac = e, o.osname = "macOS") : k ? (o.xbox = e, o.osname = "Xbox") : b ? (o.windows = e, o.osname = "Windows") : v && (o.linux = e, o.osname = "Linux") : (o.android = e, o.osname = "Android");
					var _ = "";
					o.windows ? _ = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : o.windowsphone ? _ = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : o.mac ? _ = (_ = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : n ? _ = (_ = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : r ? _ = s(/android[ \/-](\d+(\.\d+)*)/i) : o.webos ? _ = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : o.blackberry ? _ = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : o.bada ? _ = s(/bada\/(\d+(\.\d+)*)/i) : o.tizen && (_ = s(/tizen[\/\s](\d+(\.\d+)*)/i)), _ && (o.osversion = _);
					var C = !o.windows && _.split(".")[0];
					return S || d || "ipad" == n || r && (3 == C || C >= 4 && !y) || o.silk ? o.tablet = e : (y || "iphone" == n || "ipod" == n || r || i || o.blackberry || o.webos || o.bada) && (o.mobile = e), o.msedge || o.msie && o.version >= 10 || o.yandexbrowser && o.version >= 15 || o.vivaldi && o.version >= 1 || o.chrome && o.version >= 20 || o.samsungBrowser && o.version >= 4 || o.firefox && o.version >= 20 || o.safari && o.version >= 6 || o.opera && o.version >= 10 || o.ios && o.osversion && o.osversion.split(".")[0] >= 6 || o.blackberry && o.version >= 10.1 || o.chromium && o.version >= 20 ? o.a = e : o.msie && o.version < 10 || o.chrome && o.version < 20 || o.firefox && o.version < 20 || o.safari && o.version < 6 || o.opera && o.version < 10 || o.ios && o.osversion && o.osversion.split(".")[0] < 6 || o.chromium && o.version < 20 ? o.c = e : o.x = e, o
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function a(e) {
					return e.split(".").length
				}

				function o(e, t) {
					var s, a = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) a.push(t(e[s]));
					return a
				}

				function n(e) {
					for (var t = Math.max(a(e[0]), a(e[1])), s = o(e, (function(e) {
							var s = t - a(e);
							return o((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function r(e, a, o) {
					var r = s;
					"string" == typeof a && (o = a, a = void 0), void 0 === a && (a = !1), o && (r = t(o));
					var i = "" + r.version;
					for (var d in e)
						if (e.hasOwnProperty(d) && r[d]) {
							if ("string" != typeof e[d]) throw new Error("Browser version in the minVersion map should be a string: " + d + ": " + String(e));
							return n([i, e[d]]) < 0
						} return a
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var a = e[t];
						if ("string" == typeof a && a in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = r, s.compareVersions = n, s.check = function(e, t, s) {
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
				o = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = o(s)) == s ? s : 0), void 0 !== t && (t = (t = o(t)) == t ? t : 0), a(o(e), t, s)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/higherOrderComponents/withMux/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				o = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/cache/localStorage/index.ts"),
				d = s("./src/lib/combineRefs/index.tsx"),
				c = s("./src/lib/loadWithRetries/index.ts"),
				l = () => Object(c.a)(() => s.e("MuxEmbed").then(s.t.bind(null, "./node_modules/mux-embed/dist/mux.js", 7))),
				m = s("./src/reddit/constants/experiments.ts"),
				u = s("./src/reddit/helpers/chooseVariant/index.ts");
			const p = Object(r.a)(e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.pc
				});
				return Object(m.Gd)(t) ? void 0 : t
			}, e => {
				const t = Object(u.c)(e, {
					experimentEligibilitySelector: u.a,
					experimentName: m.qc
				});
				return Object(m.Gd)(t) ? void 0 : t
			}, (e, t) => e === m.rc.Enabled && t === m.rc.Enabled);
			var h = s("./src/config.ts");
			var b = s("./src/reddit/selectors/user.ts");
			const g = e => {
					const t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
						s = t.length,
						a = new Uint32Array(e);
					return crypto.getRandomValues(a), Array.from(a).map(e => t.charAt(e % s)).join("")
				},
				v = (e = new Date) => new Date(e).toISOString().replace(/^(\d{4})-(\d{2})-(\d{2}).*/, "$1$2$3"),
				f = (e, t = 0) => Math.trunc(e).toString(16).padStart(t, "0");
			var w;
			! function(e) {
				e.SHA1 = "SHA-1", e.SHA256 = "SHA-256", e.SHA384 = "SHA-384", e.SHA512 = "SHA-512"
			}(w || (w = {}));
			const S = async e => (async (e, t) => {
				const s = (new TextEncoder).encode(t),
					a = await crypto.subtle.digest(e, s);
				return Array.from(new Uint8Array(a)).map(f).join("")
			})(w.SHA1, e);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			const k = (e => t => ((e, t) => `${e}(${(e=>e.displayName||e.name||"Component")(t)})`)(e, t))("WithMux"),
				_ = {
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
					localStorageSaltKey: h,
					localStorageViewerUserIdKey: f,
					playerName: w,
					playerVersion: C,
					respectDoNotTrack: O,
					saltLength: E,
					saltTimeToLive: x,
					viewerUserIdLength: R
				} = {
					..._,
					...t
				};
				class j extends a.Component {
					constructor(e) {
						super(e), this.dashInstance = null, this.hlsInstance = null, this.isMonitoring = !1, this.playerInitTime = Date.now(), this.videoRef = Object(a.createRef)(), this.handleDashCreate = e => this.setDashInstance(e), this.handleDashDestroy = () => this.setDashInstance(null), this.handleHlsCreate = e => this.setHlsInstance(e), this.handleHlsDestroy = () => this.setHlsInstance(null), this.combinedVideoRefs = this.combineExternalVideoRef(e.videoRef)
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
						} = this.props, a = s;
						return o.a.createElement(e, y({}, a, {
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
						const e = this.props.redditUserId || j.ANONYMOUS_USER_ID,
							t = this.getOrCreateSalt(),
							s = `${v()}${e}${t}`;
						return (await S(s)).substr(0, j.VIEWER_USER_ID_LENGTH)
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
							debug: j.DEBUG,
							disableCookies: j.DISABLE_COOKIES,
							respectDoNotTrack: j.RESPECT_DO_NOT_TRACK,
							...s,
							data: {
								env_key: j.ENV_KEY,
								experiment_name: this.experimentName,
								player_init_time: this.playerInitTime,
								player_name: j.PLAYER_NAME,
								player_version: j.PLAYER_VERSION,
								...t,
								viewer_user_id: e
							}
						}
					}
					getOrCreateSalt() {
						const e = j.LOCAL_STORAGE_SALT_KEY;
						let t = Object(i.a)(e);
						return t || (t = g(j.SALT_LENGTH), Object(i.b)(e, t, j.SALT_TIME_TO_LIVE)), t
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
							muxVideoTitle: a
						} = this.props;
						return {
							video_duration: s ? j.DURATION_LIVE : e,
							video_id: t,
							video_stream_type: s ? j.STREAM_TYPE_LIVE : j.STREAM_TYPE_ON_DEMAND,
							video_title: a
						}
					}
				}
				j.displayName = k(e), j.ANONYMOUS_USER_ID = s, j.DEBUG = c, j.DISABLE_COOKIES = m, j.DURATION_LIVE = 1 / 0, j.ENV_KEY = u, j.LOCAL_STORAGE_SALT_KEY = h, j.LOCAL_STORAGE_VIEWER_USER_ID_KEY = f, j.PLAYER_NAME = w, j.PLAYER_VERSION = C, j.RESPECT_DO_NOT_TRACK = O, j.SALT_LENGTH = E, j.SALT_TIME_TO_LIVE = x, j.STREAM_TYPE_LIVE = "live", j.STREAM_TYPE_ON_DEMAND = "on-demand", j.VIEWER_USER_ID_LENGTH = R;
				const M = Object(a.forwardRef)((e, t) => o.a.createElement(j, y({}, e, {
						forwardedRef: t
					}))),
					I = Object(r.c)({
						redditUserId: b.g,
						isMuxEnabled: p
					});
				return Object(n.b)(I, null, null, {
					forwardRef: !0
				})(M)
			}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var a = s("./src/config.ts"),
				o = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const n = Object(o.e)(e),
					r = encodeURIComponent(`${t}${n}`);
				return `${a.a.accountManagerOrigin}${s||"/login"}?dest=${r}`
			}
		},
		"./src/reddit/actions/bulkActions/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "a", (function() {
				return i
			}));
			var a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/bulkActions/constants.ts");
			const n = Object(a.a)(o.c),
				r = Object(a.a)(o.b),
				i = Object(a.a)(o.a)
		},
		"./src/reddit/actions/comment/moderation.ts": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return S
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "f", (function() {
				return k
			})), s.d(t, "a", (function() {
				return _
			})), s.d(t, "e", (function() {
				return C
			})), s.d(t, "g", (function() {
				return O
			})), s.d(t, "h", (function() {
				return E
			})), s.d(t, "b", (function() {
				return x
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/constants/index.ts"),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/lib/makeCommentsPageKey/index.ts"),
				i = s("./src/reddit/actions/modal.ts"),
				d = s("./src/reddit/actions/shortcuts/utils.ts"),
				c = s("./src/reddit/actions/toaster.ts"),
				l = s("./src/reddit/constants/modals.ts"),
				m = s("./src/reddit/endpoints/comment/index.tsx"),
				u = s("./src/reddit/endpoints/moderator/snoozableReport.ts"),
				p = s("./src/reddit/models/Reportable/index.ts"),
				h = s("./src/reddit/models/Toast/index.ts"),
				b = s("./src/reddit/selectors/commentSelector.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/actions/comment/index.ts"),
				f = s("./src/reddit/actions/comment/constants.ts");
			const w = Object(n.a)(f.n),
				S = e => async (t, s, {
					apiContext: a
				}) => {
					s().features.comments.models[e] && (await Object(m.h)(a(), e)).ok && t((e => async t => {
						t(w({
							commentId: e
						}))
					})(e))
				}, y = e => async (t, s, {
					apiContext: a
				}) => {
					if (!Object(g.J)(s())) return void t(Object(i.i)(l.a.LOGIN_MODAL_ID));
					const o = s().features.comments.models[e];
					if (!o) return;
					const n = o.isLocked ? m.j : m.d;
					t(Object(v.i)({
						[e]: {
							isLocked: !o.isLocked
						}
					})), (await n(a(), e)).ok || t(Object(v.i)({
						[e]: {
							isLocked: o.isLocked
						}
					}))
				}, k = Object(n.a)(f.F), _ = e => async (t, s, {
					apiContext: a
				}) => {
					const o = s(),
						n = o.features.comments.models[e],
						r = o.user.account ? o.user.account.displayText : null;
					n && r && (t(Object(v.i)({
						[e]: {
							isApproved: !0,
							approvedBy: r,
							bannedBy: null,
							isRemoved: !1,
							isSpam: !1,
							modNote: null,
							modReasonBy: null,
							modRemovalReason: null,
							numReports: 0
						}
					})), (await Object(m.a)(a(), e)).ok || t(Object(v.i)({
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
				}, C = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const n = a(),
						r = n.features.comments.models[e],
						i = n.user.account ? n.user.account.displayText : null;
					r && i && (s(Object(v.i)({
						[e]: {
							approvedBy: null,
							bannedBy: i,
							isApproved: !1,
							isRemoved: !t,
							isSpam: t
						}
					})), (await Object(m.f)(o(), e, t)).ok || s(Object(v.i)({
						[e]: {
							approvedBy: r.approvedBy,
							bannedBy: r.bannedBy,
							isApproved: r.isApproved,
							isRemoved: r.isRemoved,
							isSpam: r.isSpam
						}
					})), Object(d.d)())
				}, O = e => async (t, s, {
					apiContext: a
				}) => {
					const o = s().features.comments.models[e];
					if (!o) return;
					const n = o.ignoreReports ? m.i : m.c;
					t(Object(v.i)({
						[e]: {
							ignoreReports: !o.ignoreReports
						}
					})), (await n(a(), e)).ok || t(Object(v.i)({
						[e]: {
							ignoreReports: o.ignoreReports
						}
					}))
				}, E = (e, t, s) => async (n, r, {
					gqlContext: i
				}) => {
					const d = Object(b.a)(r(), {
						commentId: e
					});
					if (!d) return;
					const l = s === o.Ub.Snoozed,
						m = {
							itemId: e,
							reportText: t,
							isSnoozed: l
						};
					if ((await Object(u.a)(i(), {
							input: m
						})).ok) n(Object(v.i)({
						[e]: {
							userReports: Object(p.a)(d.userReports, t, l)
						}
					}));
					else {
						const e = Object(c.e)(a.fbt._("Sorry, that snooze failed. Try that again", null, {
							hk: "7ToJC"
						}), h.b.Error);
						n(Object(c.f)(e))
					}
				}, x = (e, t, s) => async (a, n, {
					apiContext: i
				}) => {
					const d = n(),
						c = d.features.comments.models[e];
					if (!c) return;
					const l = c.postId,
						u = d.postStickiedComments.data[l],
						p = o.g[t];
					a(Object(v.i)({
						[e]: {
							distinguishType: t,
							isAdmin: t === o.C.ADMIN,
							isMod: t === o.C.MODERATOR,
							isStickied: !!s
						}
					})), s && u && u !== e && a(Object(v.i)({
						[u]: {
							isStickied: !1
						}
					})), (await Object(m.b)(i(), e, p, s || null)).ok ? s && a(k({
						id: e,
						postId: l,
						commentsPageKey: Object(r.a)(l, null, {
							sort: o.r.CONFIDENCE,
							...d.platform.currentPage.queryParams
						})
					})) : (a(Object(v.i)({
						[e]: {
							distinguishType: c.distinguishType,
							isAdmin: c.isAdmin,
							isMod: c.isMod,
							isStickied: c.isStickied
						}
					})), a(Object(v.i)({
						[u]: {
							isStickied: d.features.comments.models[u].isStickied
						}
					})))
				}
		},
		"./src/reddit/actions/pages/comments.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "NUM_COMMENTS_TRUNCATE", (function() {
				return me
			})), s.d(t, "MIN_NUM_COMMENTS_TO_TRUNCATE", (function() {
				return ue
			})), s.d(t, "commentsPagePending", (function() {
				return pe
			})), s.d(t, "commentsPageLoaded", (function() {
				return he
			})), s.d(t, "commentsPageFailed", (function() {
				return be
			})), s.d(t, "getGuestExperimentIncludes", (function() {
				return ge
			})), s.d(t, "shouldFetchPostFeedAndOtherDiscussions", (function() {
				return ve
			})), s.d(t, "guestExperimentIncludesToOptions", (function() {
				return fe
			})), s.d(t, "commentsPageRequested", (function() {
				return we
			})), s.d(t, "commentsPageDataRequested", (function() {
				return Se
			})), s.d(t, "commentsPageLoadedFull", (function() {
				return ye
			})), s.d(t, "fullCommentsPageDataRequested", (function() {
				return ke
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = s("./node_modules/react-router-redux/es/index.js"),
				o = s("./src/reddit/actions/category/index.ts"),
				n = s("./src/reddit/actions/discoveryUnit.ts"),
				r = s("./src/reddit/actions/pages/subreddit.ts"),
				i = s("./src/reddit/actions/shortcuts/active.ts"),
				d = s("./src/reddit/actions/subredditSettings.ts"),
				c = s("./src/reddit/endpoints/governance/posts.ts"),
				l = s("./src/reddit/endpoints/page/commentsPage.ts"),
				m = s("./src/reddit/endpoints/page/subredditPage.ts"),
				u = s("./src/reddit/endpoints/profile/info.ts"),
				p = s("./src/reddit/models/Post/index.ts"),
				h = s("./src/lib/constants/index.ts"),
				b = s("./src/lib/pageTitle.ts"),
				g = s("./src/reddit/actions/economics/helpers/async.ts"),
				v = s("./src/reddit/actions/economics/powerups/achievements.ts"),
				f = s("./src/reddit/actions/externalAccount.ts"),
				w = s("./src/reddit/actions/otherDiscussions/constants.ts"),
				S = s("./src/reddit/actions/platform.ts"),
				y = s("./src/reddit/actions/post.ts"),
				k = s("./src/reddit/actions/presence.ts"),
				_ = s("./src/reddit/actions/profile/index.ts"),
				C = s("./src/reddit/actions/subreddit.ts"),
				O = s("./src/reddit/actions/toaster.ts"),
				E = s("./src/reddit/constants/adEvents.ts"),
				x = s("./src/reddit/constants/graphql.ts"),
				R = s("./src/reddit/constants/parameters.ts"),
				j = s("./src/reddit/constants/posts.ts"),
				M = s("./src/reddit/helpers/commentList/index.ts"),
				I = s("./src/reddit/helpers/getCommentsPageSort/index.ts"),
				T = s("./src/reddit/models/Comment/index.ts"),
				P = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/models/Subreddit/index.ts"),
				L = s("./src/reddit/models/User/index.ts"),
				A = s("./src/reddit/selectors/category.ts"),
				D = s("./src/reddit/selectors/experiments/avatarsInComments.ts"),
				V = s("./src/reddit/selectors/experiments/postSeo.ts"),
				B = s("./src/reddit/selectors/experiments/removedPosts.ts"),
				F = s("./src/reddit/selectors/inlineSubredditEditing.ts"),
				U = s("./src/reddit/selectors/platform.ts"),
				H = s("./src/reddit/selectors/posts.ts"),
				K = s("./src/reddit/selectors/subreddit.ts"),
				W = s("./src/reddit/selectors/user.ts"),
				q = s("./src/lib/makeActionCreator/index.ts"),
				G = s("./src/lib/makeCommentsPageKey/index.ts"),
				z = s("./src/reddit/actions/ads/index.ts"),
				J = s("./src/reddit/helpers/canonicalUrls.ts"),
				X = s("./src/reddit/helpers/correlationIdTracker.ts"),
				Y = s("./src/reddit/helpers/timeApiRoute/index.ts"),
				Q = s("./src/reddit/reducers/sidebarPromotedPosts/models/index.ts"),
				Z = s("./src/reddit/actions/gold/powerups.ts"),
				$ = s("./src/reddit/actions/subreddit/subredditPosts.ts"),
				ee = s("./src/lib/performanceTimings/index.tsx"),
				te = s("./src/reddit/constants/experiments.ts"),
				se = s("./src/reddit/helpers/chooseVariant/index.ts");
			const ae = e => {
				var t, s;
				const a = null === (s = null === (t = e.platform.currentPage) || void 0 === t ? void 0 : t.urlParams) || void 0 === s ? void 0 : s.partialPostId,
					o = a && Object(p.s)(a),
					{
						sortToUse: n
					} = Object(I.a)(e, o);
				return (!n || n === h.r.CONFIDENCE) && Object(se.c)(e, {
					experimentEligibilitySelector: () => Object(W.I)(e),
					experimentName: te.s
				}) === te.u.Enabled
			};
			var oe = s("./src/reddit/selectors/chatPost.ts"),
				ne = s("./src/reddit/selectors/experiments/listingBelow.ts"),
				re = s("./src/reddit/selectors/realtimeComments.ts"),
				ie = s("./src/reddit/selectors/seo/index.ts"),
				de = s("./src/reddit/actions/pages/constants.ts"),
				ce = s("./src/lib/initializeClient/installReducer.ts"),
				le = s("./src/reddit/reducers/pages/comments/index.ts");
			Object(ce.a)({
				pages: {
					comments: le.a
				}
			});
			const me = 25,
				ue = 100,
				pe = Object(q.a)(de.h),
				he = Object(q.a)(de.f),
				be = Object(q.a)(de.e),
				ge = (e, t, s) => {
					const a = !e,
						o = Object(H.F)(t, {
							postId: s
						}),
						n = o.belongsTo,
						r = Object(K.M)(t, {
							identifier: n
						}),
						i = Object(ie.d)(t, {
							identifier: n
						}),
						d = {
							listingBelow: !1,
							postFeed: !1,
							postImageOCRAltText: !1,
							postQASchema: !1
						};
					return Object(ie.b)(t) && !Object(ne.a)(t) ? d.listingBelow = i || a : d.postFeed = (i || a) && (!Object(N.h)(r) && !Object(oe.d)(t, {
						postId: s
					}) && !!r || !Object(U.h)(t) && Object(V.f)(t)), e && (d.postImageOCRAltText = Object(V.c)(o) && !!Object(V.b)(t, o, !1), d.postQASchema = Object(V.e)(t, s, !1)), d
				},
				ve = (e, t) => e || t.postFeed || t.listingBelow || t.postImageOCRAltText || t.postQASchema,
				fe = e => ({
					includePostFeed: e.postFeed,
					includeListingBelowExperiment: e.listingBelow,
					includePostImageOCRAltText: e.postImageOCRAltText,
					includePostQASchemaEligibilityFlag: e.postQASchema
				}),
				we = e => async (t, s) => {
					var n, r;
					const {
						partialPostId: d,
						partialCommentId: c
					} = e.params, {
						subredditName: l
					} = e.params || "", m = d ? Object(p.s)(d) : "", u = c && Object(T.g)(c), {
						path: g,
						queryParams: v
					} = e, k = Object(w.d)(g), {
						instanceId: O
					} = v, {
						hasSortParam: E,
						sortToUse: M
					} = Object(I.a)(s(), m), N = null === (r = null === (n = Object(U.b)(s())) || void 0 === n ? void 0 : n.routeMatch) || void 0 === r ? void 0 : r.route.chunk, L = ["context", "depth", "limit", R.f].reduce((e, t) => {
						const s = parseInt(v[t]);
						return isNaN(s) || (e[t] = s), e
					}, {
						subredditName: l,
						hasSortParam: E,
						instanceId: O,
						include_categories: !0
					});
					E && (L.sort = M), L.onOtherDiscussions = k, t(y.p(m)), await t(Se(m, u, L, M));
					const D = s().posts.models[m],
						V = Object(W.J)(s());
					if (D && "subreddit" === D.belongsTo.type) {
						const e = D.belongsTo.id,
							s = Object(ee.i)(() => t(Object(Z.i)(e, {
								fullData: !0,
								includeIdentity: V
							})), {
								name: "subredditPowerupsRequested",
								page: N,
								isLoggedIn: V
							});
						await s
					}
					if (D) {
						const n = ((e, t) => {
								const s = Object(H.R)(e, {
										postId: t
									}),
									a = Object(H.F)(e, {
										postId: t
									});
								return s && a ? `${e.posts.models[t].title} : ${s.name}` : ""
							})(s(), m),
							r = Object(K.M)(s(), {
								identifier: D.belongsTo
							});
						if (r && Object(B.a)(s())) return void t(Object(a.c)(r.url));
						if ((D.media && D.media.type) === P.o.LIVEVIDEO) {
							const e = `/rpan${D.belongsTo.type===j.a.SUBREDDIT?r.url:"/"}${Object(p.t)(D.id)}`;
							return void t(Object(a.c)(e))
						}
						if (D.belongsTo.type !== j.a.SUBREDDIT || D.isSponsored) {
							if (D.belongsTo.type === j.a.PROFILE) {
								const e = Object(ee.i)(() => t(_.d(r.name)), {
									name: "getProfileInfo",
									page: N,
									isLoggedIn: V
								});
								await e
							}
						} else {
							if (!!!Object(K.T)(s(), {
									subredditId: D.belongsTo.id
								})) {
								const e = Object(ee.i)(() => t(C.o(r.name)), {
									name: "getSubredditRules",
									page: N,
									isLoggedIn: V
								});
								await e
							}
						}
						const d = ge(!1, s(), m),
							c = Object(ne.c)(s()),
							l = k;
						if (ve(l, d)) {
							Object(X.d)(X.a.LinkedPosts);
							const e = Object(X.c)(X.a.LinkedPosts),
								a = {
									adContext: {
										layout: x.a.Card,
										reddaid: s().user.reddaid,
										sourcePostId: m
									},
									range: h.Yb.WEEK.toUpperCase(),
									sort: h.K.TOP,
									subredditName: r.name
								},
								o = {
									postId: m
								},
								n = {
									correlationId: e,
									experimentVariant: c
								},
								i = fe(d);
							Object(ee.i)(() => t(Object($.a)({
								...o,
								...a,
								...n,
								...i,
								includeOtherDiscussions: l
							})), {
								name: "fetchPostFeedAndOtherDiscussions",
								isLoggedIn: V,
								page: N
							});
							0
						}
						t(Object(f.p)()), t(S.l({
							title: n
						}));
						const u = s().posts.instances[m] ? e.queryParams.instanceId : D.postId;
						t(Object(i.b)(u)); {
							const e = Object(A.d)(s(), {
								subredditName: r.name
							});
							await Promise.all(e.map(e => t(o.c(e))))
						}
					} else t(S.l({
						title: b.c()
					}));
					const {
						routePrefix: F
					} = e.params;
					j.b[F] === j.a.PROFILE ? Object(J.d)(s(), t, e) : Object(J.b)(s(), t, e)
				}, Se = (e, t, s, a) => async (o, i, d) => {
					var p, b, f;
					const w = i(),
						_ = Object(G.a)(e, t, s),
						{
							subredditName: C
						} = s,
						x = w.pages.comments.keyToHeadCommentId.hasOwnProperty(_),
						R = w.pages.comments.api.fullyLoaded[_],
						j = w.pages.comments.api.error[_],
						I = w.pages.comments.api.pending[_],
						T = !Object(W.I)(w),
						P = Object(W.i)(w),
						N = a === h.r.CHAT,
						A = !!w.platform.lastPage;
					if ((I || x && !j) && !(N && A)) {
						if (x && !w.sidebarPromotedPosts.firstFetch) {
							const e = Object(U.h)(w) ? Q.a.COMMENTS_OVERLAY : Q.a.COMMENTS;
							window.addEventListener("load", () => {
								o(Object(z.b)(e))
							})
						}
						return void(R || o(ke(e, t, s)))
					}
					o(n.g());
					const V = w.user.prefs.commentMode;
					o(pe({
						key: _,
						postId: e,
						commentMode: V
					}));
					const B = {
						...s,
						...N ? {
							sort: h.r.LIVE
						} : T ? {
							sort: s.sort,
							depth: 2
						} : {
							sort: s.sort
						}
					}; {
						const t = Object(H.F)(i(), {
							postId: e
						});
						t && t.numComments && t.numComments > ue && (B.truncate = me)
					}
					const F = null === (b = null === (p = Object(U.b)(w)) || void 0 === p ? void 0 : p.routeMatch) || void 0 === b ? void 0 : b.route.chunk,
						K = Object(ee.i)(() => Object(l.a)(d.apiContext(), e, t, B, Object(D.a)(i()), Object(re.a)(i()), ae(i())), {
							name: "fetchCommentsPage",
							isLoggedIn: !T,
							page: F
						}),
						q = !T && P && Object(ee.i)(() => Object(u.d)(d.gqlContext(), Object(L.e)(P)), {
							name: "fetchProfileKarma",
							isLoggedIn: !T,
							page: F
						}) || null,
						[J, X] = await Promise.all([K, q]);
					let Z;
					if (o(Object(S.m)(J.status)), J.ok) {
						const t = Object.keys(J.body.posts).filter(e => !!J.body.posts[e].isMeta),
							s = J.body.posts[e];
						if (t.length) {
							const e = Object(ee.i)(() => Object(c.a)(d.apiContext(), s.belongsTo.id, t), {
									name: "getGovernanceData",
									page: F,
									isLoggedIn: !T
								}),
								a = await e;
							a.ok && (Z = a.body)
						}
						if (X && X.ok) {
							const e = null === (f = X.body.data.redditorInfoByName) || void 0 === f ? void 0 : f.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : u.a;
							J.body && J.body.account && Object.assign(J.body.account, t)
						}
						const a = Object(M.a)(J.body, e, w);
						o(he({
							key: _,
							postId: e,
							meta: w.meta,
							governance: Z,
							shouldCollapse: a,
							...J.body
						}));
						const n = s && "subreddit" === s.belongsTo.type ? s.belongsTo.id : null,
							r = J.body.comments,
							i = J.body.posts;
						await o(Object(k.b)(i, r, n)), await o(Object(v.a)(n, r))
					} {
						const a = Object(H.F)(i(), {
							postId: e
						});
						a && J.body.comments && Object.keys(J.body.comments).length < a.numComments ? o(ke(e, t, s)) : J.ok && o(ye({
							key: _
						}));
						const n = Object(U.h)(w) ? Q.a.COMMENTS_OVERLAY : Q.a.COMMENTS;
						o(Object(z.b)(n))
					}
					if (J.ok) {
						o(O.g(_));
						const t = Object(H.F)(i(), {
							postId: e
						});
						if (o(y.x(t, E.a.CommentsView)), t && "subreddit" === t.belongsTo.type && J.body.comments) {
							const e = Object(ee.i)(() => o(Object(g.a)({
								commentIds: Object.keys(J.body.comments),
								postIds: [t.id],
								subredditId: t.belongsTo.id
							})), {
								name: "fetchAllEconomicsData",
								page: F,
								isLoggedIn: !T
							});
							await e
						}
					} else {
						let e;
						C && (o(Object(r.subredditPending)({
							key: _
						})), e = await Object(Y.a)("subreddit", () => Object(m.a)(d.apiContext(), C, {})), o(Object(S.m)(e.status)), o(Object(r.handleSubredditPageApiError)(e, C))), o(be({
							error: J.error,
							key: _,
							...e ? e.body : J.body
						}))
					}
				}, ye = Object(q.a)(de.g), ke = (e, t, s) => async (a, o, n) => {
					var r;
					const i = Object(G.a)(e, t, s),
						c = o(),
						m = Object(W.J)(c),
						p = Object(W.i)(c),
						h = Object(l.a)(n.apiContext(), e, t, s, Object(D.a)(c), Object(re.a)(c), ae(c)),
						b = m && p && Object(u.d)(n.gqlContext(), Object(L.e)(p)) || null,
						[v, f] = await Promise.all([h, b]);
					if (a(Object(S.m)(v.status)), v.ok) {
						if (f && f.ok) {
							const e = null === (r = f.body.data.redditorInfoByName) || void 0 === r ? void 0 : r.karma,
								t = e ? {
									awardeeKarma: e.fromAwardsReceived,
									awarderKarma: e.fromAwardsGiven,
									commentKarma: e.fromComments,
									postKarma: e.fromPosts,
									totalKarma: e.total
								} : u.a;
							v.body && v.body.account && Object.assign(v.body.account, t)
						}
						const t = Object(M.a)(v.body, e, c);
						a(he({
							key: i,
							postId: e,
							meta: c.meta,
							shouldCollapse: t,
							...v.body
						})), a(ye({
							key: i
						}));
						const s = o().posts.models[e],
							n = s && Object(H.R)(o(), {
								postId: s.id
							});
						s && "subreddit" === s.belongsTo.type && n && Object(F.a)(c, {
							subredditId: n.id
						}) && a(Object(d.h)(n.name, n.id)), s && "subreddit" === s.belongsTo.type && v.body.comments && await a(Object(g.a)({
							commentIds: Object.keys(v.body.comments),
							postIds: [s.id],
							subredditId: s.belongsTo.id
						}))
					} else a(be({
						error: v.error,
						key: i,
						...v.body
					}))
				}
		},
		"./src/reddit/actions/publicAccessNetwork/page.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "publicAccessNetworkRequested", (function() {
				return i
			}));
			var a = s("./src/lib/pageTitle.ts"),
				o = (s("./src/reddit/actions/pages/subreddit.ts"), s("./src/reddit/actions/platform.ts")),
				n = (s("./src/reddit/actions/publicAccessNetwork/streams.ts"), s("./src/reddit/actions/users.ts")),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => async (e, t) => {
				const s = t(),
					i = a.g();
				e(o.l({
					title: i
				})), Object(r.J)(s) || await e(n.r())
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
			var a = s("./node_modules/uuid/v4.js"),
				o = s.n(a),
				n = s("./src/lib/makeActionCreator/index.ts"),
				r = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const i = Object(n.a)(r.B),
				d = e => async t => {
					t(i(e))
				}, c = () => async e => {
					e(i({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(i({
						correlationId: o()()
					}))
				}
		},
		"./src/reddit/actions/removalReasons/index.ts": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "removalReasonsPending", (function() {
				return Q
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
				return ae
			})), s.d(t, "addRemovalReason", (function() {
				return oe
			})), s.d(t, "editRemovalReasonPending", (function() {
				return ne
			})), s.d(t, "editRemovalReasonSuccess", (function() {
				return re
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
				return ge
			})), s.d(t, "removalReasonSubmittedFailed", (function() {
				return ve
			})), s.d(t, "removalReasonMessagePending", (function() {
				return fe
			})), s.d(t, "removalReasonPrivateMessageSuccess", (function() {
				return we
			})), s.d(t, "removalReasonPublicMessageSuccess", (function() {
				return Se
			})), s.d(t, "removalReasonMessageFailed", (function() {
				return ye
			})), s.d(t, "submitRemovalReason", (function() {
				return ke
			})), s.d(t, "submitBulkRemovalReason", (function() {
				return _e
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./src/lib/initializeClient/installReducer.ts"),
				n = s("./node_modules/redux/es/redux.js");
			const r = "REMOVALREASONS__ADD_PENDING",
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
					case r:
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
			var g = (e = !1, t) => {
					switch (t.type) {
						case "REMOVALREASONS__LOAD_PENDING":
						case r:
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
				v = Object(n.c)({
					error: b,
					pending: g
				});
			const f = {};
			var w = (e = f, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							response: s
						} = t.payload, {
							data: a
						} = s;
						return {
							...e,
							...a
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
							[s]: a,
							...o
						} = e;
						return o
					}
					default:
						return e
				}
			};
			const S = {};
			var y = (e = S, t) => {
				switch (t.type) {
					case "REMOVALREASONS__LOAD_SUCCESS": {
						const {
							subredditId: s,
							response: a
						} = t.payload, {
							order: o
						} = a;
						return {
							...e,
							[s]: o
						}
					}
					case i: {
						const {
							subredditId: s,
							reason: a
						} = t.payload;
						return {
							...e,
							[s]: [...e[s], a.id]
						}
					}
					case p: {
						const {
							subredditId: s,
							reasonId: a
						} = t.payload, o = [...e[s]].filter(e => e !== a);
						return {
							...e,
							[s]: o
						}
					}
					default:
						return e
				}
			};
			var k = (e = null, t) => {
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
				_ = Object(n.c)({
					api: v,
					models: w,
					reasonOrder: y,
					removedItemIds: k
				}),
				C = s("./src/lib/constants/index.ts"),
				O = s("./src/lib/makeActionCreator/index.ts"),
				E = s("./src/lib/makeCommentsPageKey/index.ts"),
				x = s("./src/lib/makeDraftKey/index.ts"),
				R = s("./src/reddit/actions/bulkActions/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				M = s("./src/reddit/actions/comment/authoring.ts"),
				I = s("./src/reddit/actions/comment/moderation.ts"),
				T = s("./src/reddit/actions/modal.ts"),
				P = s("./src/reddit/actions/post.ts"),
				N = s("./src/reddit/actions/toaster.ts"),
				L = s("./src/reddit/constants/modals.ts"),
				A = s("./src/lib/makeApiRequest/index.ts"),
				D = s("./src/lib/omitHeaders/index.ts"),
				V = s("./src/reddit/constants/headers.ts"),
				B = s("./src/reddit/models/RichTextJson/addRTJParam.ts");
			const F = (e, t) => Object(A.a)(Object(D.a)(e, [V.a]), {
					endpoint: `${e.apiUrl}/api/v1/modactions/removal_reasons/`,
					method: C.eb.POST,
					type: "json",
					data: {
						item_ids: t.itemIds,
						reason_id: t.reasonId,
						mod_note: t.modNote
					}
				}),
				U = (e, t, s) => Object(A.a)(Object(D.a)(e, [V.a]), {
					endpoint: Object(B.a)(`${e.apiUrl}/api/v1/modactions/removal_${s}_message/`),
					method: C.eb.POST,
					type: "json",
					data: t
				});
			var H = s("./src/reddit/helpers/isPost.ts"),
				K = s("./src/reddit/helpers/r2/normalizeCommentFromR2/index.ts"),
				W = s("./src/reddit/helpers/routeKey/index.ts"),
				q = s("./src/reddit/models/ModQueue/index.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/models/RemovalReason/index.ts"),
				J = s("./src/reddit/models/Toast/index.ts"),
				X = s("./src/reddit/selectors/comments.ts"),
				Y = s("./src/reddit/selectors/platform.ts");
			Object(o.a)({
				features: {
					removalReasons: _
				}
			});
			const Q = Object(O.a)("REMOVALREASONS__LOAD_PENDING"),
				Z = Object(O.a)("REMOVALREASONS__LOAD_SUCCESS"),
				$ = Object(O.a)("REMOVALREASONS__LOAD_FAILED"),
				ee = e => async (t, s, {
					apiContext: a
				}) => {
					const o = s().subreddits.models[e].name;
					t(Q());
					const n = await ((e, t) => Object(A.a)(Object(D.a)(e, [V.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons.json`,
						method: C.eb.GET
					}))(a(), o);
					n.ok ? t(Z({
						subredditId: e,
						response: n.body
					})) : t($(n.error))
				}, te = Object(O.a)(r), se = Object(O.a)(i), ae = Object(O.a)(d), oe = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o().subreddits.models[e].name;
					s(te());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [V.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons`,
						method: C.eb.POST,
						data: s
					}))(n(), r, t);
					if (i.ok) {
						const {
							id: o
						} = i.body, n = {
							...t,
							id: o
						};
						s(se({
							subredditId: e,
							reason: n
						})), s(Object(N.f)({
							kind: J.b.SuccessMod,
							text: a.fbt._("Removal reason added!", null, {
								hk: "2WSh8N"
							})
						}))
					} else s(ae(i.error))
				}, ne = Object(O.a)(c), re = Object(O.a)(l), ie = Object(O.a)(m), de = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o().subreddits.models[e].name;
					s(ne());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [V.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s.id}`,
						method: C.eb.PUT,
						data: {
							message: s.message,
							title: s.title
						}
					}))(n(), r, t);
					i.ok ? (s(re({
						subredditId: e,
						reason: t
					})), s(Object(N.f)({
						kind: J.b.SuccessMod,
						text: a.fbt._("Removal reason saved", null, {
							hk: "28ScuL"
						})
					}))) : s(ie(i.error))
				}, ce = Object(O.a)(u), le = Object(O.a)(p), me = Object(O.a)(h), ue = (e, t) => async (s, o, {
					apiContext: n
				}) => {
					const r = o().subreddits.models[e].name;
					s(ce());
					const i = await ((e, t, s) => Object(A.a)(Object(D.a)(e, [V.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/removal_reasons/${s}`,
						method: C.eb.DELETE
					}))(n(), r, t);
					i.ok ? (s(le({
						subredditId: e,
						reasonId: t
					})), s(Object(N.f)({
						kind: J.b.SuccessMod,
						text: a.fbt._("Removal reason deleted", null, {
							hk: "4xzgsa"
						})
					}))) : s(me(i.error))
				}, pe = Object(O.a)("REMOVALREASONS__REMOVEDITEMS_SELECTED"), he = (e, t) => async (s, a, {
					apiContext: o
				}) => {
					const n = a();
					n.features.removalReasons.reasonOrder[e] && n.features.removalReasons.reasonOrder[e].length > 0 || s(ee(e)), s(pe({
						subredditId: e,
						itemIds: t
					})), s(Object(T.i)(L.a.ADD_REMOVAL_REASON))
				}, be = Object(O.a)("REMOVALREASONS__SUBMIT_PENDING"), ge = Object(O.a)("REMOVALREASONS__SUBMIT_SUCCESS"), ve = Object(O.a)("REMOVALREASONS__SUBMIT_FAILED"), fe = Object(O.a)("REMOVALREASONS__MESSAGE_PENDING"), we = Object(O.a)("REMOVALREASONS__MESSAGE_PRIVATE_SUCCESS"), Se = Object(O.a)("REMOVALREASONS__MESSAGE_PUBLIC_SUCCESS"), ye = Object(O.a)("REMOVALREASONS__MESSAGE_FAILED"), ke = (e, t, s, a, o) => async (n, r, {
					apiContext: i
				}) => {
					const d = r(),
						c = d.user.account && d.user.account.displayText,
						l = e[0],
						m = Object(H.a)(l) ? z.e.Post : z.e.Comment,
						u = m === z.e.Post ? d.posts.models[l] : d.features.comments.models[l],
						p = m === z.e.Post ? P.P : j.i;
					if (!u || !c) return !1;
					n(be()), n(p({
						[l]: {
							modNote: o,
							modRemovalReason: t && t.title,
							modReasonBy: c
						}
					}));
					const h = {
							itemIds: e,
							modNote: o,
							reasonId: t ? t.id : null
						},
						b = await F(i(), h);
					if (b.ok) {
						if (n(ge()), t) {
							n(fe());
							const o = {
									itemId: e,
									message: s,
									title: t.title,
									type: a
								},
								r = await U(i(), Object(z.h)(o, m), m);
							if (r.ok) {
								if (a === z.f.Public) {
									if (n(Se()), r.body) {
										const e = Object(K.a)(r.body, c),
											t = {
												comment: e,
												parentId: l
											},
											s = Object(Y.f)(d),
											a = d.platform.currentPage && d.platform.currentPage.routeMatch;
										let o = s && a && Object(W.a)(a, d, d.posts.models[e.postId]);
										if (o || (o = Object(E.a)(e.postId, null, {
												sort: C.s,
												hasSortParam: !0
											})), m === z.e.Post) {
											const s = Object(x.a)(G.c.replyToPost, l);
											n(Object(M.o)({
												...t,
												headCommentId: Object(X.w)(d, {
													commentsPageKey: o
												}),
												commentsPageKey: o,
												draftKey: s
											}));
											const a = d.postStickiedComments.data[l];
											n(Object(I.f)({
												id: e.id,
												postId: e.postId,
												commentsPageKey: o
											})), a && a !== e.id && n(Object(j.i)({
												[a]: {
													isStickied: !1
												}
											}))
										} else if (m === z.e.Comment) {
											const e = Object(x.a)(G.c.replyToComment, u.id),
												s = Object(X.j)(d, {
													commentId: l,
													commentsPageKey: o
												});
											n(Object(M.m)({
												...t,
												parentCommentId: l,
												commentsPageKey: o,
												draftKey: e,
												depth: s + 1
											}))
										}
									}
								} else n(we());
								return !0
							}
							return n(ye(r.error)), !1
						}
					} else n(ve(b.error)), n(p({
						[l]: {
							modNote: u.modNote,
							modRemovalReason: u.modRemovalReason,
							modReasonBy: u.modReasonBy
						}
					}));
					return !1
				}, _e = (e, t, s, o, n) => async (r, i, {
					apiContext: d
				}) => {
					const c = i(),
						l = c.user.account && c.user.account.displayText;
					if (!l) return;
					r(be());
					const m = Object(N.f)({
							kind: J.b.SuccessMod,
							text: a.fbt._({
								"*": "Added removal reason for {number} posts/comments",
								_1: "Added removal reason for 1 post/comment"
							}, [a.fbt._plural(e.length, "number")], {
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
						const a = {
							ids: e,
							operation: q.a.RemovalReason,
							username: l,
							options: {
								modNote: n,
								removalReason: t && t.title
							}
						};
						if (r(Object(R.b)(a)), t) {
							const a = {
									itemId: e,
									message: s,
									title: t.title,
									type: o
								},
								n = await U(d(), Object(z.h)(a, z.e.Bulk), z.e.Bulk);
							n.ok ? (r(we()), r(m)) : r(ye(n.error))
						} else r(m)
					} else r(ve(p.error))
				}
		},
		"./src/reddit/actions/reportFlow/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "c", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			var a = s("./src/lib/loadableAction/index.ts");
			const o = Object(a.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.postOrCommentReported)),
				n = Object(a.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowOpened)),
				r = Object(a.a)(() => s.e("ReportFlow").then(s.bind(null, "./src/reddit/actions/reportFlow/reportFlow.ts")).then(e => e.reportFlowClosed))
		},
		"./src/reddit/actions/shortcuts/active.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			})), s.d(t, "b", (function() {
				return r
			}));
			var a = s("./src/lib/makeActionCreator/index.ts"),
				o = s("./src/reddit/actions/shortcuts/constants.ts");
			const n = Object(a.a)(o.a),
				r = Object(a.a)(o.b)
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
				o = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				r = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				i = s("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = s.n(i);
			const {
				fbt: c
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => o.a.createElement(r.b, {
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
				o = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				r = s("./src/lib/isSimpleClick/index.ts"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/lib/loginHref/index.ts"),
				c = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				u = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				p = s.n(u);
			const {
				fbt: h
			} = s("./node_modules/fbt/lib/FbtPublic.js"), b = i.a.div("Wrapper", p.a), g = i.a.span("Copy", p.a), v = i.a.wrapped(l.j, "SignupLink", p.a), f = i.a.wrapped(l.m, "LoginLink", p.a);
			t.a = Object(c.c)(({
				className: e,
				isLiveStreaming: t,
				location: s,
				openLoginModal: a,
				openRegisterModal: i,
				origin: c,
				sendEvent: l
			}) => o.a.createElement(b, {
				className: Object(n.a)(e, {
					[p.a.LiveStreamingWrapper]: t
				})
			}, o.a.createElement(g, {
				className: Object(n.a)({
					[p.a.LiveStreamingCopy]: t
				})
			}, h._("Log in or sign up to leave a comment", null, {
				hk: "1KD7Eh"
			})), o.a.createElement(f, {
				href: Object(d.a)(s, c, "/login"),
				onClick: e => {
					Object(r.a)(e) && (e.preventDefault(), e.stopPropagation(), a(), l(Object(m.a)("user_convert")))
				},
				"data-redditstyle": !0
			}, h._("Log In", null, {
				hk: "ZR3pC"
			})), o.a.createElement(v, {
				className: Object(n.a)({
					[p.a.LiveStreamingSignupLink]: t
				}),
				href: Object(d.a)(s, c, "/register"),
				onClick: e => {
					Object(r.a)(e) && (e.preventDefault(), e.stopPropagation(), i(), l(Object(m.c)("user_convert")))
				},
				"data-redditstyle": !0
			}, h._("Sign Up", null, {
				hk: "48wH4o"
			}))))
		},
		"./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				o = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/default.tsx"),
				c = s("./src/reddit/components/UserIcon/SnoovatarHeadshot.tsx"),
				l = s("./src/reddit/helpers/userSnoovatar/index.ts"),
				m = s("./src/reddit/icons/svgs/Redditor/index.tsx"),
				u = s("./src/reddit/icons/svgs/Remove/index.tsx"),
				p = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.m.less"),
				h = s.n(p);
			const b = i.a.img("Userpic", h.a),
				g = Object(r.c)({
					account: e => e.user.account
				}),
				v = Object(n.b)(g);
			t.a = i.a.wrapped(v(({
				account: e,
				className: t,
				height: s,
				icon: a,
				isLivestreaming: n,
				trash: r,
				userId: i,
				width: p
			}) => {
				const g = n ? 36 : 20,
					v = {
						height: s || g,
						width: p || g,
						minWidth: p || g
					};
				if (r) return o.a.createElement("div", {
					className: t,
					style: v
				}, o.a.createElement(u.a, {
					className: h.a.TrashIcon
				}));
				const f = e && e.id === i,
					w = f ? e.accountIcon : a;
				return Object(l.a)(w) ? o.a.createElement("div", {
					className: t,
					style: v
				}, o.a.createElement(c.a, {
					headshot: w
				})) : i ? o.a.createElement("div", {
					className: t,
					style: v
				}, f && e.accountIcon ? o.a.createElement(b, {
					src: e.accountIcon,
					alt: "user icon"
				}) : o.a.createElement(d.a, {
					userId: i
				})) : o.a.createElement("div", {
					className: t,
					style: v
				}, e && e.accountIcon && !n ? o.a.createElement(b, {
					src: e.accountIcon,
					alt: "user icon"
				}) : o.a.createElement(m.a, {
					className: h.a.ProfileIcon
				}))
			}), "ChatIcon", h.a)
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = Object(a.a)({
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
			t.a = o
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
				o = s.n(a),
				n = s("./src/higherOrderComponents/makeAsync.tsx"),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/lib/loadWithRetries/index.ts"),
				d = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				c = s.n(d);
			const l = r.a.div("LoaderWrapper", c.a),
				m = r.a.div("Icon", c.a),
				u = r.a.div("Byline", c.a),
				p = Object(n.a)({
					ErrorComponent: () => o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(u, null)),
					getComponent: () => Object(i.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RedesignChat~RichTextEditor"), s.e("ChatMessageInput~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: ({
						isLivestreaming: e
					}) => e ? null : o.a.createElement(l, null, o.a.createElement(m, null), o.a.createElement(u, null))
				});
			t.a = e => o.a.createElement(p, e)
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
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/higherOrderComponents/asModal/index.tsx"),
				i = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = s("./src/reddit/controls/TextButton/index.tsx"),
				c = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				l = s("./src/reddit/components/ConfirmUserActionModal/index.m.less"),
				m = s.n(l);
			const u = e => e.preventDefault();
			t.a = Object(r.a)(e => n.a.createElement(i.d, null, n.a.createElement(i.h, null, n.a.createElement(c.a, null, n.a.createElement(i.p, null, e.headerText || a.fbt._("Confirm", null, {
				hk: "2zlvKa"
			})), n.a.createElement(d.a, {
				onClick: () => {
					e.onClose && e.onClose(), e.toggleModal && e.toggleModal()
				}
			}, n.a.createElement(i.b, null)))), n.a.createElement(i.k, null, n.a.createElement(i.o, {
				className: m.a.ModalText
			}, e.modalText)), n.a.createElement(i.f, null, !e.hideCancelButton && n.a.createElement(i.a, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: () => {
					e.onCancel && e.onCancel(), e.toggleModal && e.toggleModal()
				},
				"data-redditstyle": !e.disableRedditStyle
			}, e.cancelActionText || a.fbt._("Cancel", null, {
				hk: "2TSLl5"
			})), n.a.createElement(i.t, {
				className: m.a.buttonWidth,
				onMouseDown: u,
				onClick: t => {
					e.onConfirm(), e.toggleModal && e.toggleModal(), e.trackClick && e.trackClick()
				},
				"data-redditstyle": !e.disableRedditStyle
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
				return o
			}));
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = "rpan-download-obs-modal",
				n = Object(a.a)({
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
				bannerButton: "_1Txx6iEKtaOXFI0jWxe33u",
				Link: "NmW-4eoDKF7qwN1eOHIZX",
				link: "NmW-4eoDKF7qwN1eOHIZX",
				buttonGroup: "_2ZPRFL81TGLv8_I3sNuTPX",
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
				return o
			}));
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const o = e => `PublicAccessNetwork--VideoShare--Modal-${e}`,
				n = Object(a.a)({
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
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				n = s.n(o),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Dropdown/index.tsx"),
				d = s("./src/reddit/controls/Dropdown/Row.tsx"),
				c = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				l = s("./src/reddit/layout/row/Inline/index.tsx"),
				m = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.m.less"),
				u = s.n(m);
			const p = r.a.wrapped(l.a, "DisplayContainer", u.a),
				h = r.a.div("DropdownLabel", u.a),
				b = r.a.div("ReasonTitle", u.a),
				g = e => n.a.createElement(p, null, n.a.createElement(h, null, e.dropdownLabel), e.selectedReason && n.a.createElement(b, null, e.selectedReason)),
				v = r.a.wrapped(i.a, "Dropdown", u.a),
				f = r.a.wrapped(c.b, "DropdownTriangle", u.a),
				w = r.a.wrapped(d.b, "DropdownRow", u.a),
				S = r.a.button("DropdownContainer", u.a);
			t.a = e => n.a.createElement(S, {
				onClick: e.onToggleDropdown
			}, n.a.createElement(g, {
				dropdownLabel: e.isLoading ? a.fbt._("Loading...", null, {
					hk: "1bT6op"
				}) : a.fbt._("Reason for removal", null, {
					hk: "3C9ecg"
				}),
				selectedReason: e.selectedReason ? e.selectedReason.title : null
			}), n.a.createElement(f, null), e.isDropdownOpen && n.a.createElement(v, {
				isOverlay: !0
			}, n.a.createElement(w, {
				displayText: a.fbt._("None", null, {
					hk: "2443EZ"
				}),
				onClick: () => e.onSelectReason(null)
			}), e.subredditRemovalReasons.map((t, s) => n.a.createElement(w, {
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
				return M
			})), s.d(t, "connector", (function() {
				return I
			})), s.d(t, "CharacterCountdown", (function() {
				return T
			})), s.d(t, "EmptyState", (function() {
				return P
			})), s.d(t, "MessageInput", (function() {
				return B
			})), s.d(t, "FormOptionsContainer", (function() {
				return H
			})), s.d(t, "ModalFooter", (function() {
				return K
			})), s.d(t, "ButtonRow", (function() {
				return q
			})), s.d(t, "AddRemovalReasonModal", (function() {
				return G
			}));
			var a = s("./node_modules/react/index.js"),
				o = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/reselect/es/index.js"),
				i = s("./src/higherOrderComponents/asModal/index.tsx"),
				d = s("./src/lib/lessComponent.tsx"),
				c = s("./src/reddit/actions/removalReasons/index.ts"),
				l = s("./src/reddit/components/CharacterCountdown/index.tsx"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				h = s("./src/reddit/controls/RadioInput/index.tsx"),
				b = s("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				g = s("./src/reddit/controls/TextButton/index.tsx"),
				v = s("./src/reddit/icons/fonts/Info/index.tsx"),
				f = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				w = s("./src/reddit/models/RemovalReason/index.ts"),
				S = s("./src/reddit/selectors/removalReasons.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				k = s("./src/reddit/selectors/user.ts"),
				_ = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				C = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.m.less"),
				O = s.n(C);
			const {
				fbt: E
			} = s("./node_modules/fbt/lib/FbtPublic.js"), x = e => {
				switch (e) {
					case w.f.Private:
						return "private_subreddit";
					case w.f.PrivateExposed:
						return "private_personal";
					default:
						return e
				}
			}, R = {
				isDropdownOpen: !1,
				message: "",
				modNote: "",
				removalType: w.f.Public,
				selectedReason: null
			}, j = e => ({
				submitBulkRemovalReason: (t, s, a, o, n) => e(Object(c.submitBulkRemovalReason)(t, s, a, o, n)),
				submitRemovalReason: (t, s, a, o, n) => e(Object(c.submitRemovalReason)(t, s, a, o, n))
			}), M = Object(r.c)({
				currentUserName: e => {
					const t = Object(k.i)(e);
					if (t) return t.displayText
				},
				isLoading: S.a,
				removalReasons: S.c,
				subredditName: (e, {
					subredditId: t
				}) => Object(y.U)(e, {
					subredditId: t
				}).name
			}), I = Object(n.b)(M, j), T = d.a.wrapped(l.a, "CharacterCountdown", O.a), P = d.a.div("EmptyState", O.a), N = d.a.wrapped(m.n, "ModNoteDescription", O.a), L = d.a.wrapped(u.i, "PrimaryButton", O.a), A = d.a.wrapped(b.a, "RadioOption", O.a), D = d.a.span("BoldText", O.a), V = d.a.wrapped(m.s, "ModNoteInput", O.a), B = d.a.wrapped(m.s, "MessageInput", O.a), F = d.a.wrapped(v.a, "Info", O.a), U = d.a.div("SmallInfoText", O.a), H = d.a.div("FormOptionsContainer", O.a), K = d.a.wrapped(m.f, "ModalFooter", O.a), W = d.a.div("FooterRow", O.a), q = d.a.wrapped(W, "ButtonRow", O.a);
			class G extends o.a.Component {
				constructor(e) {
					super(e), this.onSelectRemovalType = e => {
						this.setState({
							removalType: e
						}), this.props.trackClick(`type_${x(e)}`)()
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
					}, this.canSave = () => !(this.state.message.length > w.a || this.state.modNote.length > w.b) && (this.state.selectedReason ? this.state.message.trim().length > 0 : this.state.modNote.trim().length > 0), this.onSubmit = () => {
						const {
							props: e,
							state: t
						} = this;
						if (this.canSave()) {
							(t.removalContextType === w.e.Bulk ? e.submitBulkRemovalReason : e.submitRemovalReason)(e.itemIds, t.selectedReason, t.message.trim(), t.removalType, t.modNote.trim()), e.trackClick("sent")(), t.selectedReason && e.trackClick(`sent_${x(t.removalType)}`)(), t.modNote && e.trackClick("sent_modnote")(), e.toggleModal()
						}
					}, this.onCancel = () => {
						this.props.toggleModal(), this.props.trackClick("cancel")()
					}, this.renderRemovalTypeOptions = () => {
						const {
							props: e,
							state: t
						} = this, s = [];
						return t.removalContextType !== w.e.Bulk && s.push(o.a.createElement(A, {
							key: w.f.Public,
							showButton: !0,
							tabIndex: 0,
							value: w.f.Public
						}, o.a.createElement("div", null, t.removalContextType === w.e.Post ? E._("Public: Write a sticky comment on the post", null, {
							hk: "1UIQkF"
						}) : E._("Public: Write a reply to the comment", null, {
							hk: "1iZ1RC"
						})))), s.push(o.a.createElement(A, {
							key: w.f.Private,
							showButton: !0,
							tabIndex: 0,
							value: w.f.Private
						}, o.a.createElement("div", null, E._("Private: send a Modmail from {subredditName} to the user", [E._param("subredditName", o.a.createElement(D, null, `r/${e.subredditName}`))], {
							hk: "1wUxMe"
						})))), e.currentUserName && s.push(o.a.createElement(A, {
							key: w.f.PrivateExposed,
							showButton: !0,
							tabIndex: 0,
							value: w.f.PrivateExposed
						}, o.a.createElement("div", null, E._("Private: send a Modmail from {currentUserName} to the user", [E._param("currentUserName", o.a.createElement(D, null, `u/${e.currentUserName}`))], {
							hk: "wFSJr"
						})))), s
					}, this.state = {
						...R,
						removalContextType: Object(w.g)(e.itemIds)
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(m.d, {
						onClick: this.closeDropdown
					}, e.isLoading || e.removalReasons.length > 0 && o.a.createElement(m.h, null, o.a.createElement(f.a, null, o.a.createElement(m.p, null, E._("Add a removal reason", null, {
						hk: "4odEgX"
					}), e.itemIds.length > 1 && E._("({number of items} posts/comments)", [E._param("number of items", e.itemIds.length)], {
						hk: "4u7ZzL"
					})), o.a.createElement(g.a, {
						onClick: this.onCancel
					}, o.a.createElement(m.b, null)))), o.a.createElement(m.k, null, e.isLoading || e.removalReasons.length > 0 ? o.a.createElement(_.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : o.a.createElement(P, null, E._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), o.a.createElement(p.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, o.a.createElement(u.o, {
						onClick: e.toggleModal,
						"data-redditstyle": !0
					}, E._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && o.a.createElement(H, null, o.a.createElement(m.g, null, o.a.createElement(h.a, {
						name: "REMOVAL_REASON_INPUT",
						onChange: this.onSelectRemovalType,
						value: t.removalType
					}, this.renderRemovalTypeOptions())), o.a.createElement(B, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), o.a.createElement(T, {
						maxChars: w.a,
						text: t.message.trim()
					}), o.a.createElement(U, null, t.removalType !== w.f.Public && o.a.createElement(o.a.Fragment, null, o.a.createElement(F, null), E._("A link to the removed content will be appended to your message", null, {
						hk: "1DbEGF"
					}))))), o.a.createElement(K, null, o.a.createElement(W, null, o.a.createElement(N, null, E._("Mod note (Only mods will see this note)", null, {
						hk: "3InAsy"
					}))), o.a.createElement(W, null, o.a.createElement(V, {
						placeholder: E._("This is a short note to your mod team on why the content was removed.", null, {
							hk: "4goqsC"
						}),
						value: t.modNote,
						onChange: this.onUpdateModNote
					})), o.a.createElement(W, null, o.a.createElement(T, {
						maxChars: w.b,
						text: t.modNote.trim()
					})), o.a.createElement(q, null, o.a.createElement(u.l, {
						onClick: this.onCancel,
						"data-redditstyle": !0
					}, E._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(L, {
						onClick: this.onSubmit,
						disabled: !this.canSave(),
						"data-redditstyle": !0
					}, E._("Submit", null, {
						hk: "42zLFy"
					})))))
				}
			}
			t.default = Object(i.a)(I(G))
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return n
			}));
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/reddit/constants/colors.ts");
			const n = {
				backgroundColor: o.b.overlayReportFlow
			};
			t.a = Object(a.a)({
				resolved: {},
				chunkName: () => "ReportFlow",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => s.e("ReportFlow").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx")),
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
				return r
			}));
			var a = s("./node_modules/@loadable/component/dist/loadable.esm.js"),
				o = s("./src/reddit/constants/colors.ts");
			const n = {
					backgroundColor: o.b.overlayReportFlow
				},
				r = Object(a.a)({
					resolved: {},
					chunkName: () => "ReportFlow",
					isReady(e) {
						const t = this.resolve(e);
						return !1 !== this.resolved[t] && !!s.m[t]
					},
					importAsync: () => s.e("ReportFlow").then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlowNewModal.tsx")),
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
				i = Object(a.a)({
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
				return r
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
				return g
			})), s.d(t, "e", (function() {
				return v
			})), s.d(t, "b", (function() {
				return f
			})), s.d(t, "c", (function() {
				return w
			})), s.d(t, "d", (function() {
				return S
			})), s.d(t, "j", (function() {
				return y
			}));
			var a = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				n = s.n(o);
			const r = a.a.section("FormPage", n.a),
				i = a.a.h1("HomePageTitle", n.a),
				d = a.a.button("HomePageBreadcrumb", n.a),
				c = a.a.div("HomePageGroup", n.a),
				l = a.a.h1("FormPageTitle", n.a),
				m = a.a.div("FormPageSection", n.a),
				u = a.a.div("FormGroup", n.a),
				p = a.a.h2("FormGroupTitle", n.a),
				h = a.a.div("FormElement", n.a),
				b = a.a.div("FormGroupDescription", n.a),
				g = a.a.div("FormItem", n.a),
				v = a.a.h3("FormElementTitle", n.a),
				f = a.a.div("FormElementDescription", n.a),
				w = a.a.div("FormElementError", n.a),
				S = a.a.div("FormElementSubGroup", n.a),
				y = a.a.li("FormListItem", n.a)
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
				o = s.n(a),
				n = s("./src/reddit/icons/fonts/helpers.tsx"),
				r = s("./src/reddit/icons/fonts/Info/index.m.less"),
				i = s.n(r);
			const d = s("./src/lib/lessComponent.tsx").a.wrapped(e => o.a.createElement("i", {
				className: `${Object(n.b)("info",e.isFilled)} ${e.className}`
			}), "InfoIcon", i.a);
			t.a = d
		},
		"./src/reddit/icons/svgs/Info/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				o = s.n(a);
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
		"./src/reddit/icons/svgs/Pagination/back.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				o = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				onClick: e.onClick,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("path", {
				d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
			}))
		},
		"./src/reddit/icons/svgs/Send/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				o = s.n(a);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				id: e.id,
				viewBox: "0 0 18 18",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", {
				fill: "inherit"
			}, o.a.createElement("path", {
				d: "M17.98 8.87c-.012-.093-.03-.182-.062-.27-.017-.043-.034-.085-.055-.126-.013-.026-.02-.057-.034-.082l-.07-.1c-.018-.02-.04-.03-.055-.046-.073-.083-.158-.145-.252-.204-.032-.02-.053-.055-.088-.072L3.88 1.12c-.35-.176-.764-.158-1.096.05-.332.208-.534.576-.534.973V5c0 .507.33.954.81 1.097L9 7.857H3.375c-.175 0-.347.04-.503.12L.622 9.12c-.48.243-.724.8-.582 1.325.135.5.582.84 1.085.84.027 0 .054 0 .08-.003l1.045-.075v4.65c0 .396.202.764.534.972.18.112.386.17.59.17.173 0 .346-.04.505-.12l13.483-6.85c.08-.044.134-.075.184-.113.05-.038.092-.085.136-.13.012-.013.026-.022.037-.036.092-.107.147-.21.19-.32.013-.03.02-.06.03-.09.013-.045.033-.086.042-.132.008-.046.013-.09.017-.138 0-.023-.008-.043-.008-.063 0-.017.008-.03.008-.048 0-.032-.017-.058-.02-.09z"
			})))
		},
		"./src/reddit/icons/svgs/Sparkle/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			var a = s("./node_modules/react/index.js"),
				o = s.n(a);

			function n(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
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
				o = s.n(a);

			function n(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 93 93",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
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
				o = s.n(a);

			function n(e) {
				return o.a.createElement("svg", {
					className: e.className,
					style: e.style,
					viewBox: "0 0 55 55",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					clipRule: "evenodd",
					d: "m27.3003.299194 2.4798 21.013306 16.6121-13.10519-13.1052 16.61209 21.0133 2.4798-21.0133 2.4798 13.1052 16.6121-16.6121-13.1052-2.4798 21.0133-2.4798-21.0133-16.61209 13.1052 13.10519-16.6121-21.013307-2.4798 21.013307-2.4798-13.10519-16.61209 16.61209 13.10519z",
					fill: "inherit",
					fillRule: "evenodd"
				}))
			}
		},
		"./src/reddit/models/RemovalReason/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return o
			})), s.d(t, "d", (function() {
				return n
			})), s.d(t, "a", (function() {
				return r
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
			var a = s("./src/reddit/helpers/isPost.ts");
			const o = 20,
				n = 50,
				r = 1e4,
				i = 100;
			var d, c;
			! function(e) {
				e.Private = "private", e.PrivateExposed = "private_exposed", e.Public = "public"
			}(d || (d = {})),
			function(e) {
				e.Bulk = "bulk", e.Comment = "comment", e.Post = "link"
			}(c || (c = {}));
			const l = e => 1 === e.length ? Object(a.a)(e[0]) ? c.Post : c.Comment : c.Bulk,
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
				forbiddenScreen: "_1Ew8OVeA6sJ108GaDUqjQf"
			}
		},
		"./src/reddit/pages/PublicAccessNetwork/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			var a = s("./node_modules/react/index.js"),
				o = s.n(a),
				n = s("./node_modules/react-redux/es/index.js"),
				r = s("./node_modules/react-router-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/objectSelector/index.ts"),
				m = s("./src/reddit/actions/login.ts"),
				u = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				p = s("./src/reddit/components/PublicAccessNetwork/LiveVideoPlayer/videoContext.tsx"),
				h = s("./src/config.ts"),
				b = s("./node_modules/fbt/lib/FbtPublic.js"),
				g = s("./node_modules/lodash/throttle.js"),
				v = s.n(g),
				f = s("./src/higherOrderComponents/withMux/index.tsx"),
				w = s("./src/lib/addQueryParams/index.ts");
			var S = e => {
					if (!e || !e.isConnected) return;
					const t = e.hasAttribute("tabindex");
					t || e.setAttribute("tabindex", "-1"), e.focus(), t || e.removeAttribute("tabindex")
				},
				y = s("./src/lib/focusVisible/index.js"),
				k = s("./src/lib/VideoSession/util.ts"),
				_ = s("./src/lib/VideoSession/VideoSessionManager.ts"),
				C = s("./src/reddit/actions/media.ts"),
				O = s("./src/reddit/actions/modal.ts"),
				E = s("./src/reddit/actions/profile/index.ts"),
				x = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				R = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				j = s("./src/lib/makeActionCreator/index.ts");
			const M = Object(j.a)(R.E),
				I = Object(j.a)(R.X),
				T = e => async t => {
					t(M(e))
				}, P = Object(j.a)(R.P), N = Object(j.a)(R.V);
			var L = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				A = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				D = s("./src/reddit/actions/reportFlow/index.ts"),
				V = s("./src/reddit/actions/video.ts"),
				B = s("./src/reddit/components/HlsVideo/index.tsx"),
				F = s("./src/higherOrderComponents/asModal/index.tsx"),
				U = s("./src/lib/lessComponent.tsx"),
				H = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				K = s("./src/reddit/controls/Button/index.tsx"),
				W = s("./src/reddit/controls/TextButton/index.tsx"),
				q = s("./src/reddit/helpers/localStorage/index.ts"),
				G = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				z = s("./src/reddit/components/PublicAccessNetwork/Modals/ChatMute/index.m.less"),
				J = s.n(z);
			const X = U.a.div("Image", J.a),
				Y = U.a.wrapped(H.f, "ModalFooter", J.a),
				Q = U.a.wrapped(H.h, "ModalHeader", J.a),
				Z = U.a.wrapped(H.k, "ModalMain", J.a);
			var $ = Object(F.a)(({
					toggleModal: e
				}) => {
					const t = () => {
						q.Gb(), e()
					};
					return o.a.createElement(H.d, null, o.a.createElement(Q, null, o.a.createElement(G.a, null, o.a.createElement("div", null, o.a.createElement("div", {
						className: J.a.Title
					}, b.fbt._("Get ready to chat!", null, {
						hk: "1lebCx"
					})), o.a.createElement(H.o, null, b.fbt._("Before jumping in, keep these tips in mind.", null, {
						hk: "3evsT7"
					}))), o.a.createElement(W.a, {
						onClick: t
					}, o.a.createElement(H.b, null)))), o.a.createElement(Z, null, o.a.createElement("span", null, o.a.createElement("span", null, o.a.createElement("div", {
						className: J.a.SubTitle
					}, b.fbt._("Remember the human", null, {
						hk: "3oHyEM"
					})), o.a.createElement(H.n, null, b.fbt._("We're all (internet) friends here, so enjoy chatting and remember that rules still apply.", null, {
						hk: "3df1qF"
					}))), o.a.createElement(X, {
						style: {
							backgroundImage: `url("${h.a.assetPath}/img/heart-rainbow.png")`
						}
					})), o.a.createElement("span", null, o.a.createElement("span", null, o.a.createElement("div", {
						className: J.a.SubTitle
					}, b.fbt._("Look out for each other", null, {
						hk: "hrE04"
					})), o.a.createElement(H.n, null, b.fbt._("If you see any harrassment or abuse, report it by pressing and holding on the message.", null, {
						hk: "12gD31"
					}))), o.a.createElement(X, {
						style: {
							backgroundImage: `url("${h.a.assetPath}/img/award_beagle.png")`
						}
					})), o.a.createElement("span", null, o.a.createElement("span", null, o.a.createElement("div", {
						className: J.a.SubTitle
					}, b.fbt._("Have fun!", null, {
						hk: "20HtGT"
					})), o.a.createElement(H.n, null, b.fbt._("Chat, lol, debate, discuss human nature or quantum physics... it's all up to you.", null, {
						hk: "3Aj4Z7"
					}))), o.a.createElement(X, {
						style: {
							backgroundImage: `url("${h.a.assetPath}/img/award_celebrate.png")`
						}
					}))), o.a.createElement(Y, {
						className: J.a.ModalFooter
					}, o.a.createElement(K.i, {
						onClick: t,
						className: J.a.Button,
						"data-redditstyle": !0
					}, b.fbt._("Start Chatting", null, {
						hk: "3n2GtA"
					}))))
				}),
				ee = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/index.m.less"),
				te = s.n(ee);
			var se = ({
					onClickLearnMore: e,
					onClickDismiss: t
				}) => o.a.createElement("div", {
					className: te.a.banner
				}, o.a.createElement("div", null, b.fbt._("Download the RPAN studio desktop application to broadcast live from your computer.", null, {
					hk: "2eiXwc"
				})), o.a.createElement("div", {
					className: te.a.buttonGroup
				}, o.a.createElement(K.i, {
					className: te.a.bannerButton,
					"data-redditstyle": !0,
					onClick: e
				}, b.fbt._("Learn more", null, {
					hk: "1Ri9Pi"
				})), o.a.createElement(K.l, {
					className: te.a.bannerButton,
					"data-redditstyle": !0,
					onClick: t
				}, b.fbt._("Not now", null, {
					hk: "1rOQeo"
				})))),
				ae = s("./src/reddit/components/PublicAccessNetwork/Modals/DownloadOBS/Loader.tsx"),
				oe = s("./src/reddit/actions/post.ts"),
				ne = s("./src/reddit/actions/removalReasons/index.ts"),
				re = s("./src/reddit/actions/toaster.ts"),
				ie = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				de = s("./src/reddit/components/TrackingHelper/index.tsx"),
				ce = s("./src/reddit/models/RemovalReason/index.ts"),
				le = s("./src/reddit/models/Toast/index.ts"),
				me = s("./src/reddit/selectors/activeModalId.ts"),
				ue = s("./src/reddit/selectors/telemetry.ts"),
				pe = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/_AddRemovalReasonModal.tsx"),
				he = s("./src/reddit/components/RemovalReasons/AddRemovalReasonModal/RemovalReasonsDropdown.tsx"),
				be = s("./src/reddit/controls/InternalLink/index.tsx"),
				ge = s("./src/reddit/components/PublicAccessNetwork/Modals/EndBroadcast/EndBroadcastStyles.m.less"),
				ve = s.n(ge);
			const {
				fbt: fe
			} = s("./node_modules/fbt/lib/FbtPublic.js"), we = Object(n.b)(pe.selector, pe.dispatcher), Se = U.a.wrapped(H.f, "EndBroadcastModalFooter", ve.a), ye = U.a.wrapped(H.s, "EndBroadcastMessageInput", ve.a);
			class ke extends pe.AddRemovalReasonModal {
				render() {
					const {
						props: e,
						state: t
					} = this, s = e.isLoading || e.removalReasons.length > 0;
					return o.a.createElement(H.d, {
						onClick: this.closeDropdown
					}, s && o.a.createElement(H.h, null, o.a.createElement(G.a, null, o.a.createElement(H.p, null, fe._("Remove broadcast", null, {
						hk: "1JfCvD"
					})), o.a.createElement(W.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, o.a.createElement(H.b, null)))), o.a.createElement(H.k, null, s ? o.a.createElement(he.a, {
						isDropdownOpen: t.isDropdownOpen,
						isLoading: e.isLoading,
						onSelectReason: this.onSelectReason,
						onToggleDropdown: this.handleToggleDropdown,
						selectedReason: t.selectedReason,
						subredditRemovalReasons: e.removalReasons
					}) : o.a.createElement(pe.EmptyState, null, fe._("You don't have any removal reasons yet", null, {
						hk: "2cPgPy"
					}), o.a.createElement(be.a, {
						to: `/r/${e.subredditName}/about/removal`,
						target: "_blank"
					}, o.a.createElement(K.o, {
						onClick: e.toggleRemovalReasonModal,
						"data-redditstyle": !0
					}, fe._("Add a removal reason", null, {
						hk: "3MHM7e"
					})))), t.selectedReason && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: ve.a.MessageHeader
					}, fe._("Message to the broadcaster", null, {
						hk: "bGz26"
					})), o.a.createElement(pe.FormOptionsContainer, null, o.a.createElement(ye, {
						value: t.message,
						onChange: this.onMessageInputChange
					}), o.a.createElement(pe.CharacterCountdown, {
						maxChars: ce.a,
						text: t.message.trim()
					})))), o.a.createElement(Se, null, o.a.createElement(pe.ButtonRow, null, o.a.createElement(H.a, {
						onClick: this.props.toggleRemovalReasonModal
					}, fe._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(H.t, {
						onClick: () => {
							t.selectedReason && this.props.submitRemoval(t.selectedReason, t.message)
						},
						disabled: !this.canSave()
					}, fe._("Remove", null, {
						hk: "MMAdc"
					})))))
				}
			}
			var _e = Object(F.a)(we(ke));
			const {
				fbt: Ce
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Oe = Object(i.c)({
				isConfirmationModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(me.a)(e),
				isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(me.a)(e)
			}), Ee = Object(n.b)(Oe, (e, {
				subredditId: t,
				postId: s
			}) => ({
				submitRemovalReason: async (t, s, a) => {
					const o = await e(Object(ne.submitRemovalReason)([t], s, a, ce.f.Private, ""));
					e(o ? Object(re.f)({
						kind: le.b.SuccessEndBroadcast,
						text: Ce._("Broadcast ended", null, {
							hk: "313j6x"
						})
					}) : Object(re.f)({
						text: Ce._("Toast:", null, {
							hk: "2dCWf"
						}),
						duration: 1e4,
						kind: le.b.Error
					}))
				},
				fetchRemovalReasons: () => e(Object(ne.removalReasonsRequested)(t)),
				errorToast: t => e(Object(re.f)({
					text: t,
					duration: 1e4,
					kind: le.b.Error
				})),
				toggleRemovalReasonModal: () => e(Object(O.i)("rpan-add-removal-reason-id")),
				toggleConfirmationModal: () => e(Object(O.i)("rpan-end-broadcast-confirmation-id")),
				onRemovePost: () => e(Object(oe.Q)(s, !1))
			}));
			class xe extends o.a.Component {
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
					return o.a.createElement(ie.a, {
						headerText: Ce._("Are you sure you want to remove this broadcast?", null, {
							hk: "1Wcei3"
						}),
						modalText: Ce._("This can't be undone.", null, {
							hk: "2HfakZ"
						}),
						actionText: Ce._("Yes, remove", null, {
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
					return o.a.createElement(_e, {
						submitRemoval: this.onSubmitRemovalReasons,
						toggleRemovalReasonModal: this.props.toggleRemovalReasonModal,
						toggleConfirmationModal: this.props.toggleConfirmationModal,
						itemIds: [this.props.postId],
						subredditId: this.props.subredditId,
						toggleModal: this.props.toggleRemovalReasonModal,
						trackClick: ((e, t, s) => a => () => this.props.sendEvent(o => ({
							source: e,
							action: "click",
							noun: a,
							post: s && Object(ue.post)(o, s),
							screen: Object(ue.screen)(o),
							subreddit: Object(ue.subredditById)(o, t)
						})))("removal_reasons", this.props.subredditId, this.props.postId)
					})
				}
				render() {
					return this.props.isRemovalReasonModalOpen ? this.renderRemovalReasonModal() : this.props.isConfirmationModalOpen ? this.renderConfirmationModal() : o.a.createElement("div", null)
				}
			}
			var Re, je = Object(F.a)(Ee(Object(de.c)(xe))),
				Me = s("./src/reddit/components/ReportFlow/index.tsx"),
				Ie = s("./src/reddit/components/ReportFlow/new.tsx"),
				Te = s("./src/reddit/constants/history.ts"),
				Pe = s("./src/reddit/constants/keycodes.ts"),
				Ne = s("./src/reddit/constants/parameters.ts"),
				Le = s("./src/reddit/helpers/dom/index.ts"),
				Ae = s("./src/reddit/helpers/publicAccessNetwork/index.ts"),
				De = s("./src/reddit/helpers/trackers/rpan.ts"),
				Ve = s("./src/reddit/helpers/trackers/screenview.ts"),
				Be = s("./src/reddit/icons/svgs/Close/index.tsx"),
				Fe = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				Ue = s("./src/reddit/selectors/experiments/reportingRevampDesktop.ts"),
				He = s("./src/reddit/selectors/media.ts"),
				Ke = s("./src/reddit/selectors/platform.ts"),
				We = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				qe = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				Ge = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			! function(e) {
				e[e.CRITICAL = 0] = "CRITICAL", e[e.LOW = 1] = "LOW", e[e.NORMAL = 2] = "NORMAL", e[e.EXTENDED = 3] = "EXTENDED"
			}(Re || (Re = {}));
			const ze = 60,
				Je = 30,
				Xe = 3 * ze,
				Ye = 5 * ze,
				Qe = 5,
				Ze = 5 * ze,
				$e = 10,
				et = 5;
			var tt = s("./node_modules/uuid/v4.js"),
				st = s.n(tt),
				at = s("./src/lib/makeCommentsPageKey/index.ts"),
				ot = s("./src/reddit/actions/gold/modals.ts"),
				nt = s("./src/reddit/actions/moderatingSubreddits.ts"),
				rt = s("./src/reddit/endpoints/publicAccessNetwork/index.ts");
			const it = e => async (t, s, {
				apiContext: a
			}) => {
				const o = await Object(rt.j)(a(), e, !0);
				o && o.ok ? t(Object(re.f)({
					kind: le.b.SuccessLockComment,
					text: b.fbt._("Comments locked", null, {
						hk: "3WAk9Y"
					}),
					buttonText: b.fbt._("UNDO", null, {
						hk: "3Kk8Xw"
					}),
					buttonAction: dt(e)
				})) : t(Object(re.f)(Object(re.e)(b.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), le.b.Error)))
			}, dt = e => async (t, s, {
				apiContext: a
			}) => {
				const o = await Object(rt.j)(a(), e, !1);
				o && o.ok ? t(Object(re.f)({
					kind: le.b.SuccessUnlockComment,
					text: b.fbt._("Comments unlocked", null, {
						hk: "rEYa1"
					}),
					buttonText: b.fbt._("UNDO", null, {
						hk: "OXk5v"
					}),
					buttonAction: it(e)
				})) : t(Object(re.f)(Object(re.e)(b.fbt._("Something went wrong", null, {
					hk: "6SSVl"
				}), le.b.Error)))
			};
			var ct = s("./src/reddit/actions/subscription/index.ts"),
				lt = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				mt = s("./src/reddit/components/PublicAccessNetwork/Modals/VideoShare/Loader.tsx"),
				ut = s("./src/reddit/constants/posts.ts"),
				pt = s("./src/reddit/helpers/correlationIdTracker.ts"),
				ht = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				bt = s("./src/reddit/routes/postCreation/constants.ts"),
				gt = s("./src/reddit/selectors/moderatorPermissions.ts"),
				vt = s("./src/reddit/selectors/subreddit.ts"),
				ft = s("./src/reddit/selectors/comments.ts"),
				wt = s("./src/reddit/selectors/commentSelector.ts"),
				St = s("./src/reddit/selectors/communityAwards.ts"),
				yt = s("./src/reddit/models/Gold/Award.ts");
			var kt = e => e < 500 || !e ? yt.e.Silver : e < 1800 ? yt.e.Gold : yt.e.Platinum,
				_t = s("./src/reddit/components/CommentsChat/Comment/ChatIcon/index.tsx"),
				Ct = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAttribution/index.m.less"),
				Ot = s.n(Ct);
			const {
				fbt: Et
			} = s("./node_modules/fbt/lib/FbtPublic.js");

			function xt(e) {
				const {
					awardName: t,
					giverName: s,
					giverId: a,
					tier: n,
					className: r
				} = e, i = n === yt.e.Silver ? Ot.a.silverTierAttribution : n === yt.e.Gold ? Ot.a.goldTierAttribution : Ot.a.platinumTierAttribution;
				return o.a.createElement("div", {
					className: Object(d.a)(r, Ot.a.tierAttribution, i),
					role: "presentation"
				}, n !== yt.e.Silver && o.a.createElement(_t.a, {
					className: Ot.a.giverIcon,
					userId: a,
					width: 16,
					height: 16
				}), o.a.createElement("span", null, n !== yt.e.Silver && Et._("{giverName} gave {space}", [Et._param("giverName", s), Et._param("space", " ")], {
					hk: "SzDdi"
				}), o.a.createElement("strong", {
					className: Ot.a.awardName
				}, t)))
			}
			var Rt = s("./src/reddit/icons/svgs/Sparkle/index.tsx"),
				jt = s("./src/reddit/icons/svgs/Star/index.tsx"),
				Mt = s("./src/reddit/icons/svgs/Star2/index.tsx"),
				It = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/TierAwardIcon/index.m.less"),
				Tt = s.n(It);

			function Pt(e) {
				const {
					iconUrl: t,
					tier: s,
					className: a
				} = e, n = s === yt.e.Silver ? Tt.a.silverTierAwardIcon : s === yt.e.Gold ? Tt.a.goldTierAwardIcon : Tt.a.platinumTierAwardIcon, r = s !== yt.e.Silver, i = s === yt.e.Platinum;
				return o.a.createElement("div", {
					className: Object(d.a)(a, Tt.a.tierAwardIcon),
					role: "presentation"
				}, o.a.createElement("div", {
					className: Tt.a.awardIconContainer
				}, r && o.a.createElement(o.a.Fragment, null, o.a.createElement(jt.a, {
					className: Object(d.a)(Tt.a.backgroundAnimation, Tt.a.backgroundStar)
				}), o.a.createElement(Mt.a, {
					className: Object(d.a)(Tt.a.backgroundAnimation, Tt.a.backgroundStar, Tt.a.backgroundStar2)
				})), o.a.createElement("img", {
					src: t,
					className: n
				}), i && o.a.createElement(o.a.Fragment, null, o.a.createElement(Rt.a, {
					className: Object(d.a)(Tt.a.backgroundAnimation, Tt.a.backgroundSparkle, Tt.a.sparkleBottomLeft)
				}), o.a.createElement(Rt.a, {
					className: Object(d.a)(Tt.a.backgroundAnimation, Tt.a.backgroundSparkle, Tt.a.sparkleTopRight)
				}), o.a.createElement(Rt.a, {
					className: Object(d.a)(Tt.a.backgroundAnimation, Tt.a.backgroundSparkle, Tt.a.sparkleBottomRight)
				}))))
			}
			var Nt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/AwardIconWithAttributionAnimation/index.m.less"),
				Lt = s.n(Nt);

			function At(e) {
				const {
					award: t,
					className: s,
					giverId: a,
					giverName: n
				} = e, r = kt(t.coinPrice), i = t.icon128 ? t.icon128.url : t.icon.url;
				return o.a.createElement("div", {
					className: Object(d.a)(s, Lt.a.container),
					role: "presentation"
				}, o.a.createElement(Pt, {
					iconUrl: i,
					tier: r,
					className: Lt.a.awardIconAnimation
				}), o.a.createElement(xt, {
					awardName: t.name,
					className: Lt.a.attributionAnimation,
					giverId: a,
					giverName: n,
					tier: r
				}))
			}
			var Dt = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlay/index.m.less"),
				Vt = s.n(Dt);
			class Bt extends a.Component {
				render() {
					const {
						award: e,
						className: t,
						giverName: s,
						giverId: a
					} = this.props;
					return e && a && s ? o.a.createElement("div", {
						className: Object(d.a)(t, Vt.a.awardOverlay),
						role: "presentation"
					}, o.a.createElement(At, {
						award: e,
						giverId: a,
						giverName: s
					})) : null
				}
			}
			var Ft = Object(n.b)(() => Object(i.a)(e => e, wt.a, (e, t) => {
					if (!t) return {};
					const {
						associatedAwardId: s,
						author: a,
						authorId: o
					} = t;
					return {
						award: s ? Object(St.a)(e, s) : void 0,
						giverId: o,
						giverName: a
					}
				}))(Bt),
				Ut = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardOverlaySpectacle/index.m.less"),
				Ht = s.n(Ut);
			const Kt = Object(n.b)(() => Object(i.c)({
					awardedCommentLinks: (e, {
						commentsPageKey: t
					}) => {
						return Object(ft.g)(e, {
							commentsPageKey: t
						}).filter(t => {
							const s = Object(wt.a)(e, {
								commentId: t.id
							});
							return !!s && !!s.associatedAwardId
						})
					},
					isFullyLoaded: ft.u
				})),
				Wt = e => ({
					prevAwardedCommentLinks: e.isFullyLoaded ? [...e.awardedCommentLinks] : void 0,
					prevAwardedCommentLinksTopIndex: e.isFullyLoaded ? e.awardedCommentLinks.length : 0,
					prevCommentsPageKey: e.commentsPageKey
				});
			class qt extends a.Component {
				constructor(e) {
					super(e), this.state = Wt(e)
				}
				shouldComponentUpdate(e) {
					const {
						awardedCommentLinks: t,
						commentsPageKey: s
					} = this.props;
					return e.commentsPageKey !== s || e.awardedCommentLinks.length !== t.length
				}
				static getDerivedStateFromProps(e, t) {
					if (e.commentsPageKey !== t.prevCommentsPageKey) return Wt(e);
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
					const n = e.slice(a);
					return n.length ? o.a.createElement("div", {
						className: Object(d.a)(t, Ht.a.awardOverlaySpectacle),
						role: "presentation"
					}, n.map(e => o.a.createElement(Ft, {
						className: Ht.a.awardOverlay,
						commentId: e.id,
						key: e.id
					}))) : null
				}
			}
			var Gt = Kt(qt);
			const zt = (e, t) => e > t ? Re.EXTENDED : e < Xe ? Re.CRITICAL : e < Ye ? Re.LOW : Re.NORMAL,
				Jt = e => e / ze,
				Xt = e => Yt(e) % Ze == 0,
				Yt = e => Math.round(e / Qe) * Qe;
			var Qt = s("./src/reddit/components/PublicAccessNetwork/Theater/MeterBar/index.m.less"),
				Zt = s.n(Qt);
			const $t = (() => {
					const e = [];
					for (let t = 1; t < 11; t++) e.push(`Delay${t}`);
					return e
				})(),
				es = (() => {
					const e = [];
					for (let t = 0; t < 21; t++) e.push(`X${5*t}`);
					return e
				})(),
				ts = ["15Deg", "45Deg", "75Deg"],
				ss = e => e[Math.floor(Math.random() * e.length)],
				as = () => {
					const e = [ss(es), ss(ts), ss($t)].map(e => Zt.a[`particle${e}`]).join(" ");
					return `${Zt.a.particle} ${e} ${Math.round(Math.random())?Zt.a.particleReverse:""}`
				},
				os = 40,
				ns = 20;
			class rs extends o.a.Component {
				shouldComponentUpdate() {
					return !1
				}
				render() {
					const e = [];
					for (let t = 0; t < os; t++) e.push(this.createParticle(t, "particleSm"));
					for (let t = 0; t < ns; t++) e.push(this.createParticle(t, "particleLg"));
					return o.a.createElement("div", {
						className: Zt.a.particleWrapper
					}, e)
				}
				createParticle(e, t) {
					return o.a.createElement("div", {
						key: `${t}-${e}`,
						className: `${as()} ${Zt.a[t]}`
					})
				}
			}
			var is = rs;
			const ds = () => ({
				estimatedTimeRemaining: null,
				previouslyVisible: !1,
				visible: !1,
				streamId: null,
				timerPausedAt: null,
				timerDiff: 0,
				timer: null,
				pillLabel: null
			});
			class cs extends a.Component {
				constructor() {
					super(...arguments), this.state = ds(), this.timerId = 0
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
					return t || s > 0 || Xt(e) || e < Ye
				}
				static getPillLabel(e, t) {
					const {
						currentStream: s,
						overlayOpen: a
					} = e, {
						timerDiff: o,
						timer: n
					} = t;
					if (!s || !s.meter || null === n) return null;
					if (o > 0) {
						if (o < ze) {
							const e = Yt(o);
							return b.fbt._({
								"*": "+{seconds time added} seconds airtime given",
								_1: "+1 second airtime given"
							}, [b.fbt._plural(e, "seconds time added")], {
								hk: "4zE2Hn"
							})
						} {
							const e = Math.round(Jt(o));
							return b.fbt._({
								"*": "+{minutes time added} minutes airtime given",
								_1: "+1 minute airtime given"
							}, [b.fbt._plural(e, "minutes time added")], {
								hk: "17ep0a"
							})
						}
					}
					if (n > s.meter.full_meter_duration) {
						const e = Math.round(Jt(s.meter.full_meter_duration)).toLocaleString();
						return b.fbt._("{number of minutes}+ minutes airtime left", [b.fbt._param("number of minutes", e)], {
							hk: "2Tjt0F"
						})
					}
					if (Xt(n) && !a && n > Ye) {
						const e = Math.round(Jt(n)).toLocaleString();
						return b.fbt._("{number of minutes} minutes airtime left", [b.fbt._param("number of minutes", e)], {
							hk: "3DZxvE"
						})
					}
					const r = Math.round(n),
						i = Math.floor(Jt(r)),
						d = r % ze,
						c = `${i}:${d<10?"0":""}${d}`;
					return b.fbt._("{mm:ss timestamp of remaining time} airtime left", [b.fbt._param("mm:ss timestamp of remaining time", c)], {
						hk: "1J5pOH"
					})
				}
				static getDerivedStateFromProps(e, t) {
					if (!e.currentStream || !e.currentStream.meter) return ds();
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
						return t.pillLabel = cs.getPillLabel(e, t), t
					}
					const o = {
						timer: t.timer,
						timerDiff: t.timerDiff,
						timerPausedAt: t.timerPausedAt
					};
					if (a > t.estimatedTimeRemaining) {
						const e = t.estimatedTimeRemaining - t.timer,
							s = a - t.estimatedTimeRemaining + e;
						s > Qe && (o.timer = a, o.timerDiff = s, o.timerPausedAt = a)
					}
					a !== t.estimatedTimeRemaining && Math.abs(o.timer - a) > $e && (o.timer = a, o.timerDiff = a - t.timer, o.timerPausedAt = null), null !== o.timerPausedAt && o.timerPausedAt - o.timer > et && (o.timerDiff = 0, o.timerPausedAt = null);
					const n = cs.getPillLabel(e, o),
						r = cs.isPillVisible(o.timer, e.overlayOpen, o.timerDiff);
					return {
						estimatedTimeRemaining: a,
						...o,
						streamId: s,
						pillLabel: n,
						previouslyVisible: t.visible,
						visible: r
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
						previouslyVisible: a,
						timer: n,
						pillLabel: r
					} = this.state;
					if (!(s && e && e.meter && n)) return null;
					const i = zt(n, e.meter.full_meter_duration),
						c = !a,
						l = n < Ye || t,
						m = this.state.timerDiff > 0;
					return o.a.createElement("div", {
						className: Zt.a.meterOverlay
					}, o.a.createElement("div", {
						className: Zt.a.meterPillWrapper
					}, m && o.a.createElement(is, null), o.a.createElement("div", {
						className: Object(d.a)(Zt.a.meterPillContainer, {
							[Zt.a.animateMeterInAndOut]: c && !l,
							[Zt.a.animateMeterInOnly]: c && l,
							[Zt.a.fillMeterCritical]: i === Re.CRITICAL,
							[Zt.a.fillMeterLow]: i === Re.LOW,
							[Zt.a.fillMeterNormal]: i === Re.NORMAL || i === Re.EXTENDED,
							[Zt.a.fillMeterFed]: m
						}),
						onClick: () => this.props.openGildModal()
					}, o.a.createElement("div", {
						className: Zt.a.meterLabel
					}, r))))
				}
			}
			var ls = cs,
				ms = s("./src/reddit/components/OverflowMenu/index.tsx"),
				us = s("./src/reddit/controls/Dropdown/Row.tsx"),
				ps = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				hs = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				bs = s.n(hs);
			const {
				fbt: gs
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var vs = ({
					label: e,
					onSelect: t,
					onToggle: s,
					subreddits: a
				}) => o.a.createElement(ms.b, {
					className: bs.a.overflowMenu,
					dropdownClassName: bs.a.dropdown,
					defaultButtonOutline: !0,
					disabled: a.length < 1,
					dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
					icon: o.a.createElement("div", {
						className: bs.a.overflowMenuIcon
					}, e, o.a.createElement(ps.a, {
						className: bs.a.dropdownTriangle
					})),
					onClick: s
				}, o.a.createElement("div", {
					className: bs.a.dropdownLabel
				}, gs._("Pick a Community", null, {
					hk: "8MoVj"
				})), a.map(e => o.a.createElement(us.b, {
					className: bs.a.dropdownRow,
					displayText: e.prefixedName,
					iconWrapperClassName: bs.a.overflowItemIconWrapper,
					key: `rpan-recommended-viewer-subreddits-dropdown-${e.prefixedName}`,
					onClick: () => t(e)
				}))),
				fs = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				ws = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				Ss = s.n(ws);
			class ys extends a.Component {
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
						isPaused: n,
						isVisible: r,
						onPlayPauseToggle: i,
						onVideoPositionUpdate: c,
						seekBarRef: l,
						settingChange: m,
						setVolume: u,
						hideLiveLabel: p,
						videoCurrentTime: h,
						videoTotalTime: b,
						volume: g,
						volumeRef: v
					} = this.props;
					return o.a.createElement(fs.b, {
						className: Object(d.a)(e, Ss.a.scrubberBar, {
							[Ss.a.visible]: r
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
						volume: g,
						volumeRef: v
					})
				}
			}
			var ks = ys,
				_s = s("./node_modules/lodash/debounce.js"),
				Cs = s.n(_s),
				Os = s("./src/lib/prettyPrintNumber/index.ts"),
				Es = s("./src/reddit/actions/publicAccessNetwork/votes.ts"),
				xs = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				Rs = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				js = s("./src/reddit/models/Vote/index.ts"),
				Ms = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				Is = s.n(Ms);
			const Ts = Object(i.c)({
				currentStream: (e, {
					currentStreamId: t
				}) => Object(qe.l)(e, t)
			});
			class Ps extends o.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(js.a.upvoted), this.downVotes = () => this.calculateVotes(js.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === js.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(js.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = Cs()(() => this.vote(js.a.upvoted), R.Y, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = Cs()(() => this.vote(js.a.downvoted), R.Y, {
						leading: !0,
						trailing: !1
					}), this.state = {
						displayedVoteState: js.a.notVoted
					}, this.onVoteDown = this.onVoteDown.bind(this), this.onVoteUp = this.onVoteUp.bind(this)
				}
				componentDidMount() {
					const e = this.props.currentStream;
					e && e.post.voteState && this.setState({
						...this.state,
						displayedVoteState: Object(js.e)(e.post.voteState)
					})
				}
				componentDidUpdate(e) {
					const t = this.props.currentStream,
						s = e.currentStream;
					t && (s && s.post.id === t.post.id || this.setState({
						...this.state,
						displayedVoteState: null !== t.post.voteState ? Object(js.e)(t.post.voteState) : js.a.notVoted
					}))
				}
				render() {
					const e = this.props.currentStream;
					if (!e) return null;
					const t = this.props.isLive ? e.continuous_watchers : e.unique_watchers;
					return o.a.createElement("div", {
						className: Is.a.statsPanel
					}, o.a.createElement("div", {
						className: Is.a.voteContainer
					}, o.a.createElement("button", {
						className: Object(d.a)(Is.a.upButton, {
							[Is.a.activeVote]: this.isVoteActive(js.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": b.fbt._("Upvote", null, {
							hk: "4ijw7j"
						})
					}, o.a.createElement(Rs.a, {
						className: Is.a.voteIcon
					})), o.a.createElement("p", {
						className: Is.a.votesCounter
					}, Object(Os.b)(this.upVotes()))), o.a.createElement("div", {
						className: Is.a.watchingContainer
					}, o.a.createElement("div", {
						className: Is.a.watchingCounter
					}, Object(Os.b)(t)), o.a.createElement("p", {
						className: Is.a.watchingCaption
					}, this.props.isLive ? b.fbt._("Watching", null, {
						hk: "2Fql0m"
					}) : b.fbt._("Views", null, {
						hk: "ixhZU"
					}))), o.a.createElement("div", {
						className: Is.a.voteContainer
					}, o.a.createElement("button", {
						className: Object(d.a)(Is.a.downButton, {
							[Is.a.activeVote]: this.isVoteActive(js.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": b.fbt._("Dpvote", null, {
							hk: "1PcDeu"
						})
					}, o.a.createElement(xs.a, {
						className: Is.a.voteIcon
					})), o.a.createElement("p", {
						className: Is.a.votesCounter
					}, Object(Os.b)(this.downVotes()))))
				}
				vote(e) {
					const t = this.props.currentStream;
					if (t) {
						if (e === this.state.displayedVoteState) return this.props.vote(t.post.id, js.a.notVoted), void this.setState({
							...this.state,
							displayedVoteState: js.a.notVoted
						});
						this.props.vote(t.post.id, e), this.setState({
							...this.state,
							displayedVoteState: e
						}), e === js.a.upvoted ? this.props.onUpvote() : this.props.onDownvote()
					}
				}
			}
			var Ns = Object(n.b)(Ts, (e, t) => ({
					vote: (t, s) => e(Object(Es.a)(t, s))
				}))(Ps),
				Ls = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/Buttons.tsx"),
				As = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.tsx"),
				Ds = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.m.less"),
				Vs = s.n(Ds),
				Bs = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				Fs = s.n(Bs),
				Us = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/refresh.m.less"),
				Hs = s.n(Us);
			const {
				fbt: Ks
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var Ws;
			! function(e) {
				e.EndScreen = "END_SCREEN", e.Panel = "PANEL"
			}(Ws || (Ws = {}));
			const qs = (e, {
					currentStreamId: t
				}) => t ? Object(qe.l)(e, t) : void 0,
				Gs = Object(i.c)({
					currentStream: qs,
					inStreamingUiRefreshViewer: Fe.f,
					inViewerFeedTheMeter: (e, t) => Object(Fe.g)(e, t, qs),
					isApiError: (e, {
						currentStreamId: t
					}) => Object(We.c)(e, t),
					isBatchApiError: We.e,
					isBatchPending: We.f,
					isCommentsLocked: (e, {
						currentStreamId: t
					}) => !!t && Object(qe.g)(e, t),
					isConfigError: We.g,
					isIntroInProgress: Ge.b,
					isMenuOpened: e => e.tooltipId === Ls.d || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltipId || e.tooltipId === As.j,
					lastBatchApiRequestTs: We.i,
					recommendedViewerSubredditOptions: We.j,
					isModWithPostPermissions: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return !!s && Object(gt.g)(e, {
							subredditId: Object(vt.F)(e, s)
						})
					},
					isUserSubscriber: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return !!s && Object(vt.hb)(e, {
							identifier: {
								name: s,
								type: ut.a.SUBREDDIT
							}
						}, !0)
					},
					videoShareModalOpen: (e, {
						currentStreamId: t
					}) => !!t && Object(me.a)(e) === Object(mt.a)(t),
					subredditByName: (e, {
						subreddit: t
					}) => {
						const s = t && t.replace(/^r\//, "");
						return s ? Object(vt.A)(e, {
							subredditName: s
						}) : null
					}
				});
			class zs extends a.Component {
				constructor(e) {
					super(e), this.onSubscribeToSubreddit = () => {
						this.props.sendEvent(Object(De.k)(this.props.currentStream)), this.props.onSubscribeSubreddit()
					}, this.onProfileSubscriptionChange = e => {
						e && this.props.sendEvent(Object(De.c)(this.props.currentStream))
					}, this.onCrosspost = e => {
						this.props.currentStreamId && window.open(`${bt.b}?source_id=${this.props.currentStreamId}`, "_blank"), this.props.onCrosspost(e)
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
							settingChange: lt.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: lt.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === lt.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === lt.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === lt.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === lt.a.Volume && s && s.handleMouseUp(e), this.setState({
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
						const a = Object(Ae.a)(t.post.id),
							o = st()(),
							n = {
								[Ne.q]: o,
								utm_source: "share",
								utm_medium: "web2x",
								utm_content: "rpan_stream"
							};
						e(Object(w.a)(a, n)), s({
							referralId: o
						})
					}, this.referralId = st()(), this.source = Ws.Panel, this.state = {
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
						isUnavailable: a,
						onHide: n,
						onReport: r,
						onToggleMenu: i,
						onUpvote: c,
						onDownvote: l
					} = this.props, m = e && e.post.id;
					return o.a.createElement("div", {
						className: Object(d.a)(Fs.a.overlay, {
							[Fs.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !t && o.a.createElement("div", {
						className: Fs.a.overlayTop
					}, this.renderRecommendedViewerSubreddit(), e && !a && o.a.createElement(o.a.Fragment, null, o.a.createElement(Ls.e, {
						onClick: this.props.onToggleVideoShareModal
					}), o.a.createElement(Ls.b, {
						onClick: i,
						onHideClick: n,
						onReportClick: r
					}))), e && !t && !a && !!m && o.a.createElement(Gt, {
						className: Fs.a.awardOverlaySpectacle,
						commentsPageKey: Object(at.a)(m)
					}), e && !t && !a && o.a.createElement("div", {
						className: Fs.a.overlayTitle
					}, this.renderTitleContainer()), o.a.createElement("div", {
						className: Fs.a.overlayCenter
					}, this.getContent()), e && !t && !a && o.a.createElement("div", {
						className: Fs.a.overlayBottom
					}, o.a.createElement(Ns, {
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
						isCommentsLocked: a,
						isLive: n,
						isModWithPostPermissions: r,
						isUnavailable: i,
						onHide: c,
						onReport: l,
						onSelectSubreddit: m,
						onToggleMenu: u,
						recommendedViewerSubredditOptions: p,
						related: h,
						subreddit: b,
						isUserSubscriber: g,
						onEndBroadcast: v,
						subredditByName: f
					} = this.props;
					if (s || !e || i) return null;
					const S = e && e.post.id,
						{
							authorInfo: y
						} = e.post;
					return o.a.createElement("div", {
						className: Object(d.a)(Hs.a.overlay, {
							[Hs.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, e && !s && !i && !!S && o.a.createElement(Gt, {
						className: Fs.a.awardOverlaySpectacle,
						commentsPageKey: Object(at.a)(S)
					}), t && o.a.createElement(ls, {
						currentStream: e,
						overlayOpen: this.isVisible(),
						openGildModal: () => this.props.handleGiveAward()
					}), this.renderPrompt(), o.a.createElement("div", {
						className: Hs.a.overlayTop
					}, o.a.createElement("div", {
						className: Hs.a.overlayTopLeft
					}, o.a.createElement("div", {
						className: Hs.a.meta
					}, o.a.createElement(As.c, null, n ? o.a.createElement(As.h, {
						onClick: this.handleClickLiveBroadcastStatus
					}) : o.a.createElement(As.p, null)), o.a.createElement(As.n, {
						text: e.post.title
					}), o.a.createElement("div", {
						className: Hs.a.subredditInfo
					}, o.a.createElement(As.l, {
						onSelect: m,
						related: h,
						subreddit: b,
						subreddits: p
					}), o.a.createElement(As.f, {
						onSubscribe: this.onSubscribeToSubreddit,
						isSubscribed: g
					})), o.a.createElement(As.r, {
						broadcast: e,
						live: n
					}))), o.a.createElement("div", {
						className: Hs.a.overlayTopRight
					}, Object(As.s)(y) ? o.a.createElement(As.m, {
						profile: y,
						currentStream: e,
						onSubscriptionChange: this.onProfileSubscriptionChange
					}) : null, o.a.createElement(As.i, {
						onClick: u,
						onHideClick: c,
						onReportClick: l,
						onToggleLockClick: this.onToggleLock,
						isCommentsLocked: a,
						hasModeratorPermissions: r,
						onEndBroadcastClick: v,
						onRpanStudioClick: this.props.onRpanStudioClick,
						subreddit: f
					}), o.a.createElement(As.k, {
						onClickShare: this.props.onShare,
						onClickCrosspost: () => {
							this.onCrosspost({
								source: Ws.Panel
							})
						},
						onClickVideoShare: () => {
							this.onShareLink({
								source: Ws.Panel
							})
						}
					}), o.a.createElement("div", {
						className: Object(d.a)({
							[Hs.a.hidden]: this.state.isHoveringVolumeControl
						})
					}, o.a.createElement(As.q, {
						broadcast: e,
						onUpvote: this.props.onUpvote,
						onDownvote: this.props.onDownvote
					})))), o.a.createElement("div", {
						className: Hs.a.overlayBottom,
						onMouseEnter: this.onMouseHoverScrubber,
						onMouseLeave: this.onMouseLeaveScrubber,
						onMouseMove: this.onMouseHoverScrubber
					}, this.renderScrubber()), this.props.videoShareModalOpen && o.a.createElement(mt.b, {
						className: Fs.a.modalBody,
						onClose: this.onCloseShareModal,
						withOverlay: !0,
						url: Object(w.a)(Object(Ae.a)(S), {
							[Ne.q]: this.referralId,
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
						isPaused: a,
						onPlayPauseToggle: n,
						onVideoPositionUpdate: r,
						setVolume: i,
						toggleMute: d,
						videoCurrentTime: c,
						videoTotalTime: l,
						volume: m
					} = this.props, u = e ? Hs.a.controls : "", p = e || this.isVisible();
					return o.a.createElement("div", {
						className: u
					}, o.a.createElement(ks, {
						isLive: t,
						isMuted: s,
						isPaused: a,
						isVisible: p,
						onPlayPauseToggle: n,
						onVideoPositionUpdate: r,
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
						isApiError: a,
						isBatchApiError: n,
						isBatchPending: r,
						isConfigError: i,
						isIntroInProgress: d,
						isLoading: c,
						isMuted: l,
						isUnavailable: m,
						inViewerFeedTheMeter: u,
						lastBatchApiRequestTs: p,
						onReplayVideo: h,
						showErrorPrompt: b,
						showStreamEndedPrompt: g,
						toggleMute: v
					} = this.props;
					if (b || d && i || t && a || !t && n) return o.a.createElement(As.d, null);
					if (d) return o.a.createElement("div", {
						className: Fs.a.intro
					}, o.a.createElement(Ls.c, {
						isMuted: l,
						onToggle: v
					}));
					if (m || !t && !n && !r && p) return null;
					if (c) return o.a.createElement(As.o, null);
					if (e && e.stream.state === ht.a.DISCONNECTED) return o.a.createElement(As.b, null);
					if (g) return o.a.createElement(As.a, {
						onClickReplay: h,
						onClickShare: () => {
							this.onShareLink({
								source: Ws.EndScreen
							}), this.source = Ws.EndScreen
						},
						onClickCrosspost: () => {
							this.onCrosspost({
								source: Ws.EndScreen
							})
						}
					});
					const f = e && e.meter && e.estimated_remaining_time < Je;
					return u && f ? o.a.createElement(As.e, {
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
					let n = "",
						r = "";
					"home" === s ? (n = "All", r = "All") : "r/popular" === s ? (n = "Popular", r = "r/popular") : a ? (n = a.replace(/^r\//, ""), r = a) : (n = "All", r = "All");
					const i = t.filter(e => e.prefixedName !== r);
					return o.a.createElement("div", {
						className: Fs.a.menuContainer
					}, o.a.createElement(vs, {
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
					if (e) return o.a.createElement("div", {
						className: Fs.a.titleContainer
					}, o.a.createElement("h1", {
						className: Fs.a.videoTitle
					}, e.post.title), !t && o.a.createElement("div", {
						className: Fs.a.RecordedLabel
					}, Ks._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				isHoveringVolumeControl(e, t) {
					for (; e && e !== t;) {
						if (e.classList.contains(Vs.a.ControlVolume)) return !0;
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
						isBatchPending: n,
						isConfigError: r,
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
					return p || i && r || t && s || !t && a ? o.a.createElement("div", {
						className: Fs.a.prompt
					}, Ks._("Connection issues", null, {
						hk: "24LpRV"
					})) : i ? o.a.createElement("div", {
						className: Fs.a.intro
					}, o.a.createElement(Ls.c, {
						isMuted: c,
						onToggle: b
					})) : l || !t && !a && !n && m ? null : d ? o.a.createElement("div", {
						className: Fs.a.prompt
					}, Ks._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === ht.a.DISCONNECTED ? o.a.createElement("div", {
						className: Fs.a.prompt
					}, Ks._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : h ? o.a.createElement("div", {
						className: Fs.a.prompt
					}, o.a.createElement("div", {
						className: Fs.a.promptButtonSet
					}, o.a.createElement(Ls.g, {
						onClick: u
					}), o.a.createElement(Ls.h, {
						onClick: this.props.onToggleVideoShareModal
					}))) : null
				}
			}
			var Js = Object(n.b)(Gs, (e, t) => ({
					copyLink: t => e(Object(oe.B)(t)),
					onToggleVideoShareModal: () => {
						t.currentStreamId && e(Object(O.i)(Object(mt.a)(t.currentStreamId)))
					},
					onHide: () => {
						t.currentStreamId && (e(Object(oe.W)(t.currentStreamId, !0, !0, !0)), e(T(t.currentStreamId)))
					},
					onLockComments: () => {
						t.currentStreamId && e(it(t.currentStreamId))
					},
					onUnlockComments: () => {
						t.currentStreamId && e(dt(t.currentStreamId))
					},
					handleGiveAward: () => {
						if (t.currentStreamId) {
							const s = Object(pt.d)(pt.a.GildingFlow, !0);
							e(Object(ot.d)({
								correlationId: s,
								thingId: t.currentStreamId
							}))
						}
					},
					onSubscribeSubreddit: () => {
						const s = t.subreddit && t.subreddit.split("/").pop();
						s && e(Object(ct.d)([{
							name: s,
							type: ut.a.SUBREDDIT
						}], !0))
					},
					getModeratedSubreddits: () => e(Object(nt.b)())
				}))(zs),
				Xs = s("./src/lib/constants/index.ts"),
				Ys = s("./src/lib/makeDraftKey/index.ts"),
				Qs = s("./src/reddit/actions/pages/comments.ts"),
				Zs = s("./src/reddit/actions/publicAccessNetwork/automute.ts"),
				$s = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				ea = s("./src/reddit/components/CommentsChat/Loader.ts"),
				ta = s("./src/reddit/icons/svgs/Send/index.tsx"),
				sa = s("./src/reddit/components/CommentsChat/MessageInput/MutedMessageInput.m.less"),
				aa = s.n(sa);
			const {
				fbt: oa
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var na = () => o.a.createElement("span", {
					className: aa.a.InputLine
				}, o.a.createElement("span", {
					className: aa.a.FormBackground
				}, o.a.createElement("span", {
					className: aa.a.FormLine
				}, o.a.createElement("div", {
					className: aa.a.Text
				}, oa._("Chat is disabled", null, {
					hk: "gQrh3"
				}))), o.a.createElement(ta.a, {
					className: aa.a.SendIcon
				}))),
				ra = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx");
			const {
				fbt: ia
			} = s("./node_modules/fbt/lib/FbtPublic.js"), da = U.a.wrapped(H.f, "ModalFooter", J.a), ca = U.a.wrapped(H.h, "ModalHeader", J.a);
			var la = ({
				toggleModal: e,
				bodyText: t,
				title: s
			}) => o.a.createElement(H.d, null, o.a.createElement(ca, null, o.a.createElement(G.a, null, o.a.createElement("div", null, o.a.createElement("div", {
				className: J.a.Title
			}, s)), o.a.createElement(W.a, {
				onClick: e
			}, o.a.createElement(H.b, null)))), o.a.createElement("div", {
				className: J.a.ModalText
			}, t), o.a.createElement(da, {
				className: J.a.ModalFooter
			}, o.a.createElement(K.i, {
				onClick: e,
				className: J.a.Button,
				"data-redditstyle": !0
			}, ia._("I Understand", null, {
				hk: "1f4y1d"
			}))));
			const {
				fbt: ma
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ua = () => ma._("Because you’ve been flagged multiple times for violating Reddit’s {=Content Policy,} the system has removed your ability to participate in this chat. This can’t be undone (not even by a mod), but after 24 hours you’ll be able to chat again.", [ma._param("=Content Policy,", o.a.createElement("a", {
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, ma._("{=Content Policy},", [ma._param("=Content Policy", o.a.createElement("span", {
				className: J.a.Link
			}, ma._("Content Policy", null, {
				hk: "47cyc2"
			})))], {
				hk: "3BF41m"
			})))], {
				hk: "ITZAq"
			});
			var pa = Object(F.a)(({
					toggleModal: e
				}) => o.a.createElement(la, {
					bodyText: ua(),
					title: ma._("Sit back and watch for a bit", null, {
						hk: "nd6D"
					}),
					toggleModal: e
				})),
				ha = s("./src/reddit/icons/svgs/Info/index.tsx");
			const {
				fbt: ba
			} = s("./node_modules/fbt/lib/FbtPublic.js"), ga = Object(i.c)({
				isMuteModalOpen: e => "rpan-mute-chat-modal-id" === Object(me.a)(e)
			});
			class va extends o.a.Component {
				constructor() {
					super(...arguments), this.onClickInfo = () => {
						this.props.onToggleMuteModal()
					}
				}
				render() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
						className: aa.a.InputLine
					}, o.a.createElement("span", {
						className: aa.a.FormBackground
					}, o.a.createElement("span", {
						className: aa.a.FormLine
					}, o.a.createElement(ha.a, {
						className: aa.a.InfoIcon,
						onClick: this.onClickInfo
					}), o.a.createElement("div", {
						className: aa.a.Text
					}, ba._("Chat is unavailable", null, {
						hk: "12EjN3"
					}))), o.a.createElement(ta.a, {
						className: aa.a.SendIcon
					}))), this.props.isMuteModalOpen && o.a.createElement(pa, {
						toggleModal: this.props.onToggleMuteModal
					}))
				}
			}
			var fa = Object(n.b)(ga, e => ({
				onToggleMuteModal: () => e(Object(O.i)("rpan-mute-chat-modal-id"))
			}))(va);
			const {
				fbt: wa
			} = s("./node_modules/fbt/lib/FbtPublic.js"), Sa = () => wa._("Your messages have been flagged for violating Reddit’s {=Content Policy.} Have fun chatting, but if you’re flagged multiple times, you may lose the ability to participate in RPAN chats.", [wa._param("=Content Policy.", o.a.createElement("a", {
				className: J.a.Link,
				href: "https://www.redditinc.com/policies/content-policy",
				target: "_blank",
				rel: "noopener noreferrer"
			}, wa._("{=Content Policy}.", [wa._param("=Content Policy", o.a.createElement("span", {
				className: J.a.Link
			}, wa._("Content Policy", null, {
				hk: "36gq1Y"
			})))], {
				hk: "2SSN6t"
			})))], {
				hk: "4aZsnf"
			});
			var ya = Object(F.a)(({
					toggleModal: e
				}) => o.a.createElement(la, {
					bodyText: Sa(),
					title: wa._("Be mindful of what you say", null, {
						hk: "3CDXHh"
					}),
					toggleModal: e
				})),
				ka = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/selectors/posts.ts")),
				_a = s("./src/reddit/components/PublicAccessNetwork/Theater/AwardBubbler/index.m.less"),
				Ca = s.n(_a);
			const Oa = Object(n.b)(() => Object(i.c)({
					allAwards: e => e.awards.models,
					post: (e, {
						postId: t
					}) => Object(ka.F)(e, {
						postId: t
					})
				})),
				Ea = ["Center", "Left", "Right"],
				xa = ["Low", "Mid", "High"],
				Ra = () => Math.floor(800 * Math.random()),
				ja = e => e[Math.floor(Math.random() * e.length)],
				Ma = e => {
					const t = ja(Ea),
						s = ja(xa),
						a = kt(e);
					return Ca.a[`award_${a}Tier_${s}${t}`]
				};
			class Ia extends a.Component {
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
								icon: a,
								coinPrice: o
							} = e[t];
							return {
								coinPrice: o,
								count: s,
								iconUrl: a.url,
								id: t
							}
						}).sort((e, t) => t.coinPrice - e.coinPrice),
						a = [];
					return s.forEach(e => {
						const {
							coinPrice: t,
							count: s,
							iconUrl: n
						} = e;
						for (let r = 0; r < s; r++) {
							const s = `${Ra()}ms`,
								i = Ma(t),
								c = o.a.createElement("img", {
									key: `${e.id}-${r}`,
									className: Object(d.a)(Ca.a.award, i),
									src: n,
									style: {
										animationDelay: s
									}
								});
							a.push(c)
						}
					}), o.a.createElement("div", {
						className: Ca.a.awardBubbler,
						role: "presentation"
					}, a)
				}
			}
			var Ta = Oa(Ia),
				Pa = s("./src/reddit/contexts/Post/index.tsx"),
				Na = s("./src/reddit/models/PostDraft/index.ts");
			const La = Object(i.a)((e, t) => t, e => e.publicAccessNetwork.automuteLevels, (e, t) => {
				var s;
				return (null === (s = null == t ? void 0 : t[e]) || void 0 === s ? void 0 : s.level) || 0
			});
			var Aa = s("./src/reddit/selectors/user.ts"),
				Da = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				Va = s.n(Da);
			const Ba = Object(i.c)({
				isDisabled: (e, t) => Object(qe.f)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: Aa.J,
				isPostDataLoaded: (e, {
					postId: t
				}) => !!Object(ka.F)(e, {
					postId: t
				}),
				replyComment: (e, {
					postId: t
				}) => Object(ft.s)(e, {
					commentsPageKey: Object(at.a)(t)
				}),
				automuteViolationLevel: (e, {
					postId: t
				}) => La(e, t)
			});
			var Fa;
			! function(e) {
				e.Warning = "warning", e.Mute = "mute"
			}(Fa || (Fa = {}));
			class Ua extends a.Component {
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
						automuteModal: Fa.Warning
					}) : this.props.automuteViolationLevel > 1 && this.setState({
						automuteModal: Fa.Mute
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
						location: n,
						openLoginModal: r,
						openRegisterModal: i,
						sendEvent: c,
						subredditId: l,
						replyComment: m,
						onFocusMessageInput: u
					} = this.props, p = Object(at.a)(e), h = m ? Object(Ys.a)(Na.c.replyToComment, m.id) : Object(Ys.a)(Na.c.replyToPost, e);
					return a ? o.a.createElement("div", {
						"aria-label": b.fbt._("chat window", null, {
							hk: "4y4XwS"
						}),
						className: Va.a.streamingChat,
						onClick: this.props.onChatClick
					}, o.a.createElement(Pa.a, {
						postId: e
					}, o.a.createElement(ea.a, {
						className: Va.a.chatScroller,
						emptyStateClassName: Va.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: l,
						commentsPageKey: p
					}), s && (this.shouldMuteChat ? o.a.createElement(fa, null) : t ? o.a.createElement(na, null) : o.a.createElement(ra.a, {
						key: "chatCommentsForm",
						postId: e,
						replyComment: m,
						draftKey: h,
						commentsPageKey: p,
						isEditing: !1,
						sendEvent: c,
						onFocusMessageInput: u,
						isLivestreaming: !0
					})), o.a.createElement(Ta, {
						postId: e
					}), !s && o.a.createElement($s.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						location: n,
						openLoginModal: r,
						openRegisterModal: i,
						origin
					}), this.state.automuteModal === Fa.Warning && o.a.createElement(ya, {
						toggleModal: this.onDismissModal
					}), this.state.automuteModal === Fa.Mute && o.a.createElement(pa, {
						toggleModal: this.onDismissModal
					}))) : o.a.createElement("div", {
						className: Object(d.a)(Va.a.streamingChat, Va.a.prompt)
					}, b.fbt._("Loading...", null, {
						hk: "xbxKA"
					}))
				}
			}
			var Ha = Object(n.b)(Ba, (e, {
					postId: t
				}) => ({
					loadComments: () => e(Object(Qs.commentsPageDataRequested)(t, void 0, {
						sort: Xs.r.CHAT
					}, Xs.r.CHAT)),
					openLoginModal: () => e(Object(m.h)()),
					openRegisterModal: () => e(Object(m.j)()),
					fetchAutomuteStatus: () => e(Object(Zs.b)(t))
				}))(Ua),
				Ka = s("./src/reddit/icons/svgs/Pagination/back.tsx");
			var Wa = e => o.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				qa = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				Ga = s.n(qa);
			const za = ({
				isNext: e,
				onClick: t,
				stream: s
			}) => o.a.createElement("div", {
				className: Object(d.a)(Ga.a.switchContainer, e ? Ga.a.switchContainerNext : Ga.a.switchContainerPrevious)
			}, o.a.createElement("button", {
				className: Ga.a.switchButton,
				disabled: !s,
				onClick: t,
				"aria-label": e ? b.fbt._("Forward arrow", null, {
					hk: "3b7sZa"
				}) : b.fbt._("Back arrow", null, {
					hk: "1upGBK"
				}),
				value: e ? "forward" : "back"
			}, o.a.createElement("div", {
				className: Ga.a.streamThumbnail,
				style: s ? {
					backgroundImage: `url(${s.stream.thumbnail})`
				} : {}
			}), e ? o.a.createElement(Wa, {
				className: Ga.a.arrowIcon
			}) : o.a.createElement(Ka.a, {
				className: Ga.a.arrowIcon
			})));
			var Ja = e => o.a.createElement(o.a.Fragment, null, o.a.createElement(za, {
				isNext: !1,
				onClick: e.onPrevious,
				stream: e.previousStream
			}), o.a.createElement(za, {
				isNext: !0,
				onClick: e.onNext,
				stream: e.nextStream
			}));
			Object(j.a)(R.s);
			const Xa = Object(j.a)(R.A),
				Ya = (e, t) => async (s, a) => {
					const o = a(),
						n = Date.now(),
						r = e.map(e => Object(qe.l)(o, e)).filter(Boolean).map(e => ({
							imageUrl: `${e.stream.thumbnail}?${n}`,
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await Qa(r, t)
				}, Qa = (e, t) => Promise.all(e.map(e => Za(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), Za = e => new Promise((t, s) => {
					const a = new Image;
					a.onload = () => t(), a.onerror = () => s(), a.src = e
				}).then(() => !0, () => !1);
			var $a, eo = s("./src/reddit/components/PublicAccessNetwork/Theater/VisualEffectScreen/index.m.less"),
				to = s.n(eo);
			! function(e) {
				e.Loading = "Loading", e.Preview = "Preview", e.Static = "Static"
			}($a || ($a = {}));
			class so extends a.Component {
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: a
					} = this.props, o = [];
					e && o.push(e.post.id), s && o.push(s.post.id), a && o.push(a.post.id), o.length > 0 && t(o)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: a,
						previousStream: o
					} = this.props, n = [];
					t && this.isStreamChanged(t, e.currentStream) && n.push(t.post.id), o && this.isStreamChanged(o, e.previousStream) && n.push(o.post.id), s && this.isStreamChanged(s, e.nextStream) && n.push(s.post.id), n.length > 0 && a(n)
				}
				render() {
					const {
						previewUrl: e,
						visualEffect: t,
						visualEffectLabel: s
					} = this.props;
					let a, n;
					if (t === $a.Loading) a = to.a.loading;
					else if (t === $a.Preview) a = to.a.preview, n = {
						backgroundImage: `url(${e})`
					};
					else {
						if (t !== $a.Static) return null;
						a = to.a.static
					}
					return o.a.createElement("div", {
						className: to.a.container
					}, o.a.createElement("div", {
						className: a,
						"aria-label": s,
						style: n
					}))
				}
				isStreamChanged(e, t) {
					return !!e && (t && e.post.id !== t.post.id || !t)
				}
			}
			var ao = Object(n.b)(null, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, a) => {
						const o = await s(Ya(e, t));
						s(Xa(o))
					})(t))
				}))(so),
				oo = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				no = s.n(oo);
			const ro = Object(f.a)(B.a, {
					playerName: "RPAN Video Player"
				}),
				io = Object(i.c)({
					currentStream: qe.d,
					currentStreamStartTime: qe.e,
					currentHlsUrl: qe.b,
					inViewerFeedTheMeter: (e, t) => Object(Fe.g)(e, t, qe.d),
					isIntroInProgress: Ge.b,
					isOverlayOpen: Ke.h,
					isReportFlowOpen: (e, {
						streamIdFromPath: t
					}) => {
						var s, a;
						return (null === (a = null === (s = e.features) || void 0 === s ? void 0 : s.reportFlow) || void 0 === a ? void 0 : a.postOrCommentId) === Object(Ae.g)(t || "")
					},
					lastChatActivityUtcTs: Ge.c,
					nextStream: qe.h,
					nextTopStream: qe.i,
					playbackState: qe.j,
					previousStream: qe.k,
					streamById: e => t => Object(qe.l)(e, t),
					unavailableVideoUrl: We.o,
					volume: He.d,
					isEndBroadcastModalOpen: e => "rpan-end-broadcast-confirmation-id" === Object(me.a)(e),
					isRemovalReasonModalOpen: e => "rpan-add-removal-reason-id" === Object(me.a)(e),
					isIntroChatModalOpen: e => "rpan-intro-chat-modal-id" === Object(me.a)(e),
					isDownloadOBSModalOpen: e => Object(me.a)(e) === ae.a,
					previewUrl: qe.c,
					reportingRevampEnabled: Ue.a
				}),
				co = Object(n.b)(io, (e, t) => ({
					closeLocation: () => e(Object(r.b)(t.location.state[Te.a.CloseLocation])),
					fetchBroadcasterProfileInfo: t => e(Object(E.d)(t, !0)),
					fetchPostForStream: t => e(Object(x.a)(t)),
					subscribeConfig: () => e(L.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(L.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(L.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: (t, s) => e(Object(D.c)(t, s)),
					onStatsSubscribe: t => e(L.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(L.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(u.a)(t)),
					receiveHlsStreamRemoved: t => e(Object(u.b)(t)),
					removeStreamFromHistory: t => e(T(t)),
					setNewCorrelationId: () => e(Object(A.b)()),
					setIntroFinishedStatus: t => e(Object(A.c)({
						isIntroFinished: t
					})),
					setMutedInFeed: t => e(V.G(t)),
					setVideoVolume: t => e(C.h(t)),
					updateVideoTimestamp: (t, s) => e(N({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(I(e))
					})(t)),
					resetHistory: () => e(P()),
					toggleIntroChatModal: () => e(Object(O.i)("rpan-intro-chat-modal-id")),
					toggleEndBroadcastModal: () => e(Object(O.i)("rpan-end-broadcast-confirmation-id")),
					toggleRemovalReasonModal: () => e(Object(O.i)("rpan-add-removal-reason-id")),
					toggleOBSDownloadModal: () => e(Object(O.i)(ae.a))
				}));
			class lo extends a.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.focusRef = o.a.createRef(), this.videoRef = o.a.createRef(), this.videoSessionManager = null, this.renderReportFlow = (e, t) => this.props.reportingRevampEnabled ? o.a.createElement(Ie.a, {
						withOverlay: !0,
						overlayCustomStyles: Me.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}) : o.a.createElement(Me.a, {
						withOverlay: !0,
						overlayCustomStyles: Me.b,
						postId: e.post.id,
						timestamp: Math.trunc(t)
					}), this.onHlsRefChange = e => {
						var t;
						this.hlsVideoApi = e, null === (t = this.hlsVideoApi) || void 0 === t || t.setVolume(this.props.volume)
					}, this.onCurrentTimeChanged = e => {
						this.onCurrentTimeChangedThrottled(e), this.state.videoCurrentTime !== e && this.setState({
							videoCurrentTime: e
						})
					}, this.onCurrentTimeChangedThrottled = v()(e => {
						const {
							currentStream: t,
							isIntroInProgress: s,
							updateVideoTimestamp: a
						} = this.props;
						!s && t && this.isCurrentStreamWatchable() && a(t.post.id, e)
					}, R.p), this.onVideoPlayerPositionUpdate = e => {
						if (e === this.state.videoCurrentTime) return;
						let t = !1;
						if (this.props.playbackState === qe.a.LIVE && e > this.state.videoCurrentTime) {
							const s = .95;
							t = e / this.state.videoTotalTime >= s
						}
						const s = t ? this.state.videoTotalTime : e;
						this.hlsVideoApi && this.hlsVideoApi.setCurrentTime(s), this.setState({
							hasLiveIntent: t,
							videoCurrentTime: s
						}), this.props.sendEvent(Object(De.x)(this.props.currentStream, {
							...this.playbackStats,
							scrubbingStartMs: Object(k.a)(this.state.videoCurrentTime),
							scrubbingEndMs: Object(k.a)(s)
						}))
					}, this.onNextStream = v()(() => {
						const {
							nextStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(De.l)(e, this.playbackStats)), this.goToStream(e))
					}, R.q, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = v()(() => {
						const {
							previousStream: e
						} = this.props;
						e && (this.props.sendEvent(Object(De.m)(e, this.playbackStats)), this.goToStream(e))
					}, R.q, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(Le.g)(e.target) ? e.stopPropagation() : e.keyCode === Pe.a.ArrowRight ? this.onNextStream() : e.keyCode === Pe.a.ArrowLeft && this.onPreviousStream()
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
							const t = e.source === Ws.EndScreen ? "copy_link_video" : "copy_link";
							this.props.sendEvent(Object(De.t)(t, this.props.currentStream, this.playbackStats, null == e ? void 0 : e.referralId))
						}
						this.cancelSwitchingOnStreamEnded()
					}, this.onShare = () => {
						this.props.currentStream && this.props.sendEvent(Object(De.A)("share", this.props.currentStream, this.playbackStats))
					}, this.onShareLink = e => {
						if (this.props.currentStream) {
							const t = e.source === Ws.EndScreen ? "share_video" : "share_copy";
							this.props.sendEvent(Object(De.A)(t, this.props.currentStream, this.playbackStats))
						}
					}, this.onCrosspost = e => {
						if (this.props.currentStream) {
							const t = e.source === Ws.EndScreen ? "crosspost_video" : "share_crosspost";
							this.props.sendEvent(Object(De.u)(t, this.props.currentStream, this.playbackStats))
						}
					}, this.onToggleMenu = () => {
						this.cancelSwitchingOnStreamEnded()
					}, this.setVideoMute = e => {
						this.setState(() => ({
							isMuted: e
						}));
						const t = this.hlsVideoApi;
						if (!t) return;
						const s = e ? De.v : De.E;
						e || t.setVolume(this.props.volume), this.props.sendEvent(s(this.props.currentStream, this.playbackStats))
					}, this.goToSubreddit = e => {
						this.props.sendEvent(Object(De.r)(e, this.props.currentStream)), this.props.onNavigation(e.path)
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === qe.a.LIVE || this.props.playbackState === qe.a.VOD, this.handleHeartbeat = ({
						meta: e,
						stats: t
					}) => {
						const {
							currentStream: s,
							streamById: a
						} = this.props, o = s && s.post.id === e.id ? s : a(e.id);
						if (!o) return;
						const n = !t.sessionDurationMs ? De.D : De.z,
							r = {
								...t,
								playerType: De.a.Theater
							};
						this.props.sendEvent(n(o, r))
					}, this.state = {
						hasLiveIntent: e.playbackState === qe.a.LIVE,
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
						shouldShowOBSBanner: !1
					}, this.previouslyActiveElement = null, this.onAutoPlayPrevented = this.onAutoPlayPrevented.bind(this), this.onClose = this.onClose.bind(this), this.onEnded = this.onEnded.bind(this), this.onNextStream = this.onNextStream.bind(this), this.onPlayerError = this.onPlayerError.bind(this), this.onPreviousStream = this.onPreviousStream.bind(this), this.onReport = this.onReport.bind(this), this.onVideoPlayerLevelLoaded = this.onVideoPlayerLevelLoaded.bind(this), this.onVideoPlayerLoadedData = this.onVideoPlayerLoadedData.bind(this), this.onVideoPlayerLoadingData = this.onVideoPlayerLoadingData.bind(this), this.onChatClick = this.onChatClick.bind(this), this.handleFocusMessageInput = this.handleFocusMessageInput.bind(this), this.onUpvote = this.onUpvote.bind(this), this.onDownvote = this.onDownvote.bind(this), this.onOBSModalDownloadClick = this.onOBSModalDownloadClick.bind(this), this.onOBSModalGuidebookClick = this.onOBSModalGuidebookClick.bind(this), this.onOBSBannerDismissClick = this.onOBSBannerDismissClick.bind(this), this.onOBSBannerLearnMoreClick = this.onOBSBannerLearnMoreClick.bind(this), this.onOBSModalDismissClick = this.onOBSModalDismissClick.bind(this), this.onRpanStudioClick = this.onRpanStudioClick.bind(this), this.onVideoPlayerResourceRemoved = this.onVideoPlayerResourceRemoved.bind(this), this.scheduleSwitchingOnStreamEnded = this.scheduleSwitchingOnStreamEnded.bind(this)
				}
				get playbackStats() {
					var e;
					return {
						...null === (e = this.videoSessionManager) || void 0 === e ? void 0 : e.stats,
						playerType: De.a.Theater
					}
				}
				get video() {
					return this.videoRef.current
				}
				componentDidMount() {
					const e = this.focusRef.current;
					e.classList.add(no.a.focusVisible), Object(y.a)(e), this.props.isOverlay && (this.previouslyActiveElement = document.activeElement, S(e)), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(Ve.t)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream(), window.localStorage && this.setState({
						shouldShowOBSBanner: !q.l()
					})
				}
				componentDidUpdate(e, t) {
					const {
						currentStream: s,
						isIntroInProgress: a,
						isOverlay: o,
						isOverlayOpen: n,
						isReportFlowOpen: r,
						onHeartbeatSubscribe: i,
						onRecommendedViewerSubredditsSubscribe: d,
						onStatsSubscribe: c,
						playbackState: l,
						related: m,
						subreddit: u,
						subscribeConfig: p,
						subscribeStreams: h
					} = this.props;
					if (o || n === e.isOverlayOpen || (n ? (this.setState(({
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
					!a && e.isIntroInProgress && this.handleNewStream(), a || e.isIntroInProgress || !uo(s, e.currentStream) || this.handleNewStream(), this.updateVideoSession(e, t), this.state.isSwitchingOnStreamEndedScheduled || a || !(!s && !this.state.isLoading || l === qe.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), a || s || this.state.isLoading || this.state.isError || this.setState({
						...this.state,
						isError: !0
					}), r && this.state.isVideoPaused && this.setState({
						isVideoPaused: !0
					}), this.context.setIsLive(l === qe.a.LIVE), this.context.setCurrentTime(this.state.videoCurrentTime), this.context.setTotalTime(this.state.videoTotalTime)
				}
				componentWillUnmount() {
					window.clearTimeout(this.overlayVisibilityTimeout), window.clearTimeout(this.consumePostTimeout), window.clearTimeout(this.switchingOnStreamEndedTimeout), this.onCurrentTimeChangedThrottled.cancel(), document.removeEventListener("keydown", this.onNextStreamKeyHandler), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits(), this.unsubscribeConfig(), this.unsubscribeStreams(), this.props.resetHistory(), this.props.isOverlay && setTimeout(() => S(this.previouslyActiveElement)), this.destroyVideoSessionManager()
				}
				render() {
					const {
						currentStream: e,
						currentStreamStartTime: t,
						currentHlsUrl: s,
						inViewerFeedTheMeter: a,
						isIntroInProgress: n,
						isOverlay: r,
						isReportFlowOpen: i,
						location: c,
						nextStream: l,
						playbackState: m,
						previewUrl: u,
						previousStream: p,
						related: h,
						sendEvent: g,
						subreddit: v,
						timestamp: f,
						unavailableVideoUrl: w,
						volume: S,
						isRemovalReasonModalOpen: y,
						isEndBroadcastModalOpen: k,
						isIntroChatModalOpen: _,
						isDownloadOBSModalOpen: C
					} = this.props, {
						hasLiveIntent: O,
						isError: E,
						isLoading: x,
						isMuted: R,
						isOverlayVisible: j,
						isVideoPaused: M,
						showStreamEndedPrompt: I,
						videoCurrentTime: T,
						videoTotalTime: P,
						shouldShowOBSBanner: N
					} = this.state, L = e && e.post.id, A = s !== w, D = e && !e.post.subreddit, V = m === qe.a.LIVE, B = e && 1e3 * e.broadcast_time;
					let F, U, H, K, W = "number" == typeof f ? f : t;
					B && W >= B && (W = 0), e && A ? (F = 1e3 * e.broadcast_time, U = L, H = V, K = e.post.title) : (F = void 0, U = void 0, H = !1, K = "RPAN Unavailable Video");
					const q = e && e.meter && 10 * Math.round(e.estimated_remaining_time / 10),
						G = a && e && e.estimated_remaining_time < Xe && !n,
						z = void 0 !== q && q >= 0 && G ? no.a[`meterCritical${q}`] : void 0;
					let J, X;
					return x || E ? J = u ? $a.Preview : $a.Loading : G && (J = $a.Static), x ? X = b.fbt._("video is loading", null, {
						hk: "jUJdy"
					}) : E ? X = b.fbt._("unable to load video", null, {
						hk: "1Eh3Rt"
					}) : G && (X = b.fbt._("this broadcast will expire soon. give an award to add more time.", null, {
						hk: "3dUpDV"
					})), o.a.createElement("div", {
						className: Object(d.a)(no.a.theaterContainer, {
							[no.a.overlay]: r
						}),
						ref: this.focusRef,
						tabIndex: -1
					}, N && o.a.createElement(se, {
						onClickLearnMore: this.onOBSBannerLearnMoreClick,
						onClickDismiss: this.onOBSBannerDismissClick
					}), o.a.createElement("div", {
						className: no.a.wrap
					}, o.a.createElement("div", {
						className: Object(d.a)(no.a.panesWrapper, {
							[no.a.initialized]: !n
						})
					}, o.a.createElement("div", {
						className: Object(d.a)(no.a.pane, no.a.leftPane)
					}, o.a.createElement("div", {
						className: no.a.videoContainer
					}, J && X && o.a.createElement(ao, {
						previousStream: p,
						currentStream: e,
						nextStream: l,
						previewUrl: u,
						visualEffect: J,
						visualEffectLabel: X
					}), s && o.a.createElement("div", {
						className: z
					}, o.a.createElement(ro, {
						autoplay: !0,
						controls: !1,
						startTime: W,
						isPaused: M,
						muted: R,
						muxVideoDuration: F,
						muxVideoId: U,
						muxVideoIsLive: H,
						muxVideoTitle: K,
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
						url: s,
						videoRef: this.videoRef
					})), o.a.createElement(Js, {
						currentStreamId: L,
						isLoading: x,
						isLive: V,
						isMuted: R,
						isPaused: M,
						isUnavailable: m === qe.a.UNAVAILABLE,
						isVisible: j,
						onCopyLink: this.onCopyLink,
						onCrosspost: this.onCrosspost,
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
						related: h,
						sendEvent: g,
						setVolume: this.onSetVolume,
						showErrorPrompt: E,
						showStreamEndedPrompt: I,
						subreddit: v,
						toggleMute: this.onToggleMuteVideo,
						videoCurrentTime: V && O ? P : T,
						videoTotalTime: P,
						volume: S
					}), (y || k) && e && o.a.createElement(je, {
						subredditId: e.post.subreddit.id,
						subredditName: e.post.subreddit.name,
						postId: e.post.id,
						toggleModal: this.onEndBroadcast
					}), _ && o.a.createElement($, {
						toggleModal: this.props.toggleIntroChatModal
					}), C && o.a.createElement(ae.b, {
						onClickDownload: this.onOBSModalDownloadClick,
						onClickDismiss: this.onOBSModalDismissClick,
						onClickGuidebook: this.onOBSModalGuidebookClick,
						className: no.a.downloadOBSModal
					}))), !n && o.a.createElement("div", {
						className: Object(d.a)(no.a.pane, no.a.rightPane)
					}, e && !D && o.a.createElement(Ha, {
						location: c,
						onChatClick: this.onChatClick,
						onFocusMessageInput: this.handleFocusMessageInput,
						postId: e.post.id,
						sendEvent: g,
						subredditId: e.post.subreddit.id
					}))), e && !n && o.a.createElement(Ja, {
						nextStream: l,
						onNext: this.onNextStream,
						onPrevious: this.onPreviousStream,
						previousStream: p
					}), e && !n && o.a.createElement(mo, {
						onClick: this.onClose
					}), e && !n && i && this.renderReportFlow(e, T)))
				}
				onVideoPlayerLevelLoaded(e) {
					const {
						currentStream: t,
						playbackState: s,
						receiveHlsStreamEnded: a
					} = this.props;
					this.state.videoTotalTime !== e.totalduration && this.setState({
						videoTotalTime: e.totalduration
					}), t && !e.live && 0 !== e.endSN && s === qe.a.LIVE && a(t.post.id)
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
					this.props.sendEvent(Object(De.w)(this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onOBSModalDismissClick() {
					this.props.sendEvent(Object(De.h)("dismiss", this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onOBSModalDownloadClick() {
					this.props.sendEvent(Object(De.h)("download", this.props.currentStream))
				}
				onOBSModalGuidebookClick() {
					this.props.sendEvent(Object(De.h)("guidebook", this.props.currentStream))
				}
				onOBSBannerDismissClick() {
					q.jb(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(De.g)("not_now", this.props.currentStream))
				}
				onOBSBannerLearnMoreClick() {
					q.jb(), this.setState({
						shouldShowOBSBanner: !1
					}), this.props.sendEvent(Object(De.g)("learn_more", this.props.currentStream)), this.props.toggleOBSDownloadModal()
				}
				onChatClick() {
					this.props.currentStream && this.props.sendEvent(Object(De.n)(this.props.currentStream, this.playbackStats))
				}
				handleFocusMessageInput() {
					q.S() || this.props.toggleIntroChatModal()
				}
				onUpvote() {
					this.props.currentStream && this.props.sendEvent(Object(De.q)(this.props.currentStream, this.playbackStats))
				}
				onDownvote() {
					this.props.currentStream && this.props.sendEvent(Object(De.o)(this.props.currentStream, this.playbackStats))
				}
				onEnded() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						playbackState: s,
						sendEvent: a,
						setIntroFinishedStatus: o
					} = this.props;
					if (this.setState({
							isVideoPaused: !0
						}), t) return o(!0), void this.setState({
						...this.state,
						isLoading: !!e
					});
					e && a(Object(De.B)(e, this.playbackStats)), s !== qe.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(De.C)(this.props.currentStream, this.playbackStats)), this.setState({
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
					this.props.sendEvent(Object(De.b)(this.props.currentStream, this.playbackStats)), this.props.isOverlay ? this.props.closeLocation() : window.location.replace(window.location.origin)
				}
				onReport() {
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id, this.props.isOverlay), this.props.sendEvent(Object(De.p)(this.props.currentStream)))
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
					this.state.isVideoPaused || (this.props.sendEvent(Object(De.d)(this.props.currentStream, this.playbackStats)), this.setState({
						isVideoPaused: !0
					}))
				}
				playVideo(e = {
					sendEvent: !0
				}) {
					this.state.isVideoPaused && (e.sendEvent && this.props.sendEvent(Object(De.e)(this.props.currentStream, this.playbackStats)), this.hideStreamEndedPrompt(), this.setState({
						isVideoPaused: !1
					}))
				}
				replayVideo() {
					this.props.sendEvent(Object(De.f)(this.props.currentStream, this.playbackStats)), this.onVideoPlayerPositionUpdate(0), this.playVideo({
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
					const t = Object(Ae.d)(e);
					return Object(w.a)(t, {
						[Ne.r]: this.props.related,
						[Ne.w]: this.props.timestamp
					})
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
				async handleNewStream() {
					const {
						currentStream: e,
						fetchBroadcasterProfileInfo: t,
						fetchPostForStream: s,
						playbackState: a,
						visitStream: o
					} = this.props;
					e && (this.setState({
						hasLiveIntent: a === qe.a.LIVE,
						videoCurrentTime: 0,
						videoTotalTime: 0
					}), o(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), s(e.post.id), e.post.authorInfo && e.post.authorInfo.name && t(e.post.authorInfo.name), this.syncLocationWithCurrentStreamId(), this.props.sendEvent(Object(De.F)(e)), this.setConsumePostTimeout(), this.showOverlayAfterStreamSwitching())
				}
				setConsumePostTimeout() {
					window.clearTimeout(this.consumePostTimeout), this.consumePostTimeout = window.setTimeout(() => this.props.sendEvent(Object(De.s)(this.props.currentStream)), h.a.telemetry.postConsumedThreshold)
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
						streamIdFromPath: a
					} = this.props;
					if (!e || t) return;
					const o = !a || Object(Ae.b)(e.post.id) === a;
					s(this.getStreamLocation(e), o)
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
					var s;
					const {
						video: a
					} = this;
					if (!a) return;
					const o = this.getOrCreateVideoSessionManager(a),
						{
							currentStream: n
						} = this.props,
						r = null == n ? void 0 : n.post.id,
						i = r !== (null === (s = e.currentStream) || void 0 === s ? void 0 : s.post.id);
					i && this.setState({
						isReady: !1
					}), i && o.endSession();
					const {
						isReady: d
					} = this.state, {
						isReady: c
					} = t;
					!!r && (!c && d) && o.startSession({
						id: r
					})
				}
				getOrCreateVideoSessionManager(e) {
					return this.videoSessionManager || (this.videoSessionManager = new _.a(e, {
						onHeartbeat: this.handleHeartbeat
					})), this.videoSessionManager
				}
				destroyVideoSessionManager() {
					var e;
					null === (e = this.videoSessionManager) || void 0 === e || e.destroy()
				}
			}
			const mo = ({
					onClick: e
				}) => o.a.createElement("button", {
					className: no.a.closeButton,
					onClick: e,
					"aria-label": b.fbt._("close button", null, {
						hk: "2l5YIS"
					})
				}, o.a.createElement(Be.a, {
					className: no.a.closeIcon
				})),
				uo = (e, t) => (e && e.post.id) !== (t && t.post.id);
			lo.contextType = p.a;
			var po = co(Object(de.c)(lo)),
				ho = s("./src/reddit/contexts/InsideOverlay.tsx"),
				bo = s("./src/reddit/helpers/overlay/index.ts"),
				go = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				vo = s.n(go);
			const {
				fbt: fo
			} = s("./node_modules/fbt/lib/FbtPublic.js"), wo = Object(l.a)((e, {
				match: {
					params: t
				}
			}) => t), So = Object(l.a)((e, {
				location: {
					search: t
				}
			}) => Object(c.a)(t)), yo = Object(i.a)(wo, So, (e, t) => {
				const s = t.get(Ne.r),
					{
						subredditName: a
					} = e;
				return "home" === s || "r/popular" === s ? s : "popular" === a ? "r/popular" : a ? void 0 : "home"
			}), ko = Object(i.a)(So, e => {
				const t = e.get(Ne.w);
				if (!t) return;
				const s = parseInt(t, 10);
				return isNaN(s) ? void 0 : s
			}), _o = Object(i.c)({
				isEnabled: Fe.a,
				isIntroInProgress: Ge.b,
				related: yo,
				timestamp: ko
			}), Co = Object(n.b)(_o, (e, t) => ({
				onOpenLoginModal: () => e(Object(m.h)()),
				onStreamByIdRequested: t => e(Object(u.d)(t)),
				updateLocation: (t, {
					isOverlay: s,
					useReplace: a
				}) => {
					const o = a ? r.c : r.b,
						n = s ? Object(bo.b)(t) : t;
					e(o(n))
				}
			}));
			class Oo extends o.a.Component {
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
				onNavigation(e, t = !1) {
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
						isOverlay: t,
						location: s,
						match: a,
						related: n,
						timestamp: r
					} = this.props, {
						subredditName: i,
						partialPostId: c
					} = a.params;
					return e ? o.a.createElement("div", {
						className: Object(d.a)(vo.a.rpanContainer, {
							[vo.a.overlay]: t
						})
					}, o.a.createElement(p.b, null, o.a.createElement(po, {
						isOverlay: !!t,
						location: s,
						onNavigation: this.onNavigation,
						related: n,
						streamIdFromPath: c,
						subreddit: i && `r/${i}`,
						timestamp: c ? r : void 0
					}))) : o.a.createElement(Eo, null)
				}
			}
			const Eo = () => o.a.createElement("div", {
				className: Object(d.a)(vo.a.rpanContainer, vo.a.forbiddenScreen)
			}, o.a.createElement("h2", null, fo._("Not Found", null, {
				hk: "2ijDv5"
			})));
			t.default = Co(Object(de.c)(Object(ho.b)(Oo)))
		},
		"./src/reddit/selectors/experiments/reportingRevampDesktop.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var a = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				n = s("./src/reddit/selectors/runTimeEnvVars.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => !!Object(n.b)(e) || Object(o.c)(e, {
				experimentEligibilitySelector: r.J,
				experimentName: a.i
			}) === a.e.Enabled
		},
		"./src/reddit/selectors/realtimeComments.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return c
			}));
			var a = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/featureFlags/index.ts"),
				n = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./src/reddit/selectors/platform.ts"));
			const r = new Set(["relationship_advice", "sex", "repsneakers", "fashionreps", "tinder", "food", "dating_advice", "skincareaddiction", "sneakers", "justnomil", "childfree", "vegan", "insaneparents", "3dprinting", "woodworking", "homegym", "cooking", "homeimprovement", "raisedbynarcissists", "femaledatingstrategy", "beautyguruchatter", "shittyfoodporn", "loseit", "fitness", "watches", "fundiesnark", "mechanicadvice", "entitledparents", "running", "intermittentfasting", "dating", "parenting", "namenerds", "progresspics", "foodporn", "babybumps", "getmotivated", "crochet", "deadbedrooms", "bjj", "repladies", "keto", "baking", "watchexchange", "curlyhair", "streetwear", "pregnant", "starbucks", "bodybuilding", "malefashionadvice", "breakups", "makeupaddiction", "tattoos", "weddingplanning", "sewing", "reptime", "edc", "piercing", "fashionrepsbst", "diy", "minipainting", "thriftstorehauls", "coffee", "smoking", "beyondthebump", "verifiedfeet", "muslimmarriage", "popping", "fragrance", "kitchenconfidential", "tools", "sneakermarket", "crossstitch", "tryingforababy", "bodyweightfitness", "survivinginfidelity", "theeroticsalon", "diwhy", "flashlight", "knitting", "fasting", "ultralight", "1200isplenty", "homebrewing", "seduction", "camping", "femalefashionadvice", "lego_raffles", "infertility", "askculinary", "polyamory", "malelivingspace", "espresso", "sourdough", "vegetablegardening", "embroidery", "medical", "breakingmom", "vegancirclejerk", "recipes", "breadit", "kibbe", "tacobell", "nattyorjuice", "modelmakers", "eatcheapandhealthy", "xxfitness", "hotpeppers", "bumble", "drunk", "watchuraffle", "weightlossadvice", "indiemakeupandmore", "frugalmalefashion", "forbiddensnacks", "crafts", "hiking", "divorce", "tretinoin", "asianbeauty", "footfetish", "zerowaste", "plasticsurgery", "whiskey", "brogress", "haircarescience", "beautyboxes", "painting", "castiron", "streetwearstartup", "hair", "stepparents", "longdistance", "vegetarian", "nutrition", "beauty", "badmuas", "nootropics", "ttc30", "testosterone", "welding", "showerbeer", "homestead", "muaonthecheap", "kniferaffle", "designerreps", "bourbon", "cocktails", "chefknives", "pizza", "poshmark", "thegirlsurvivalguide", "quittingkratom", "redditlaqueristas", "ipsy", "justnofamily", "tea", "malehairadvice", "beards", "prettyaltgirls", "mercari", "rolex", "traderjoes", "yeezys", "decidingtobebetter", "toddlers", "beer", "makeup", "dhgate", "quilting", "moissanite", "omad", "tfablineporn", "bathandbodyworks", "migraine", "fermentation", "isitbullshit", "breastfeeding", "diabetes", "somethingimade", "wine", "outdoors", "crohnsdisease", "watchescirclejerk", "martialarts", "bbq", "findfashion", "abrathatfits", "accutane", "gainit", "muacjdiscussion", "lushcosmetics", "tattoo", "campinggear", "wetshaving", "ibs", "foreveralonedating", "nails", "chronicpain", "panporn", "raisedbyborderlines", "reduction", "mealprepsunday", "stopsmoking", "wicked_edge", "femalehairadvice", "shitmomgroupssay", "learnart", "engagementrings", "yoga", "cico", "exnocontact", "stretched", "kombucha", "goodyearwelt", "kayaking", "asianparentstories", "healthyfood", "internetparents", "daddit", "crossfit", "gifrecipes", "wewantplates", "acne", "askgirls", "ketorecipes", "justnoso", "bulkorcut", "beautytalkph", "animation", "mead", "orangetheory", "momforaminute", "advancedrunning", "chinatime", "scotch", "powerlifting", "grilling", "cookingforbeginners", "nanny", "family", "opiatesrecovery", "makeupexchange", "kettlebell", "repladiesbst", "bigboobproblems", "love", "adderall", "craftbeer", "mommit", "feetish", "amateur_boxing", "whiskeytribe", "fixit", "celiac", "pelletgrills", "weightlifting", "askparents", "wedding", "breakingdad", "aldi", "narcissisticparents", "veganfitness", "trollingforababy", "starbucksbaristas", "newparents", "steak", "youniqueamua", "ehlersdanlos", "eczema", "hotsauce", "veganrecipes", "howto", "beerporn", "abusiverelationships", "bicycletouring", "snowboarding", "30plusskincare", "fondanthate", "boostedboards", "infertilitybabies", "traeger", "sousvide", "leathercraft", "canberra", "interiordesign", "ivf", "muaythai", "rawdenim", "shoebots", "chipotle", "rowing", "indianskincareaddicts", "dominos", "stupidfood", "blacksmith", "qualityreps", "electronics", "bartenders", "makeuprehab", "stilltrying", "clothdiaps", "plantbaseddiet", "skookum", "plussize", "gettingshredded", "glossier", "supremeclothing", "seiko", "reptimebst", "weddingsunder10k", "swimming", "skincareaddicts", "muacirclejerk", "weightwatchers", "snarkfriends", "workout", "highheels", "veganfoodporn", "gshock", "zerocarb", "spicy", "nonmonogamy", "fitbit", "truechildfree", "womenshealth", "climbharder", "rosacea", "malefashion", "tattoodesigns", "triathlon", "eatsandwiches", "skincareaddictionuk", "trailrunning", "fancyfollicles", "knifemaking", "slowcooking", "wildernessbackpacking", "declutter", "vettech", "jewelry", "tiki", "1500isplenty", "blackhair", "awfuleyebrows", "stockx", "glutenfree", "decaf", "homeschool", "redwingshoes", "subway", "skincare_addiction", "scacirclejerk", "stackadvice", "alcohol", "codependency", "ttcafterloss", "cheese", "malegrooming", "gastricsleeve", "nationalpark", "chefit", "nespresso", "fierceflow", "hydroponics", "longhair", "instantpot", "foodhacks", "ramen", "australianmakeup", "tmj", "toxicparents", "dunksnotdead", "supreme", "scientificnutrition", "handwriting", "carnivore", "weddingdress", "tfabchartstalkers", "adoption", "xxketo4u2", "pregnancyafterloss", "workingmoms", "fitness30plus", "old_recipes", "jeffreestarcosmetics", "womensstreetwear", "techwearclothing", "metalworking", "naturalhair", "fastfood", "seriouseats", "ausskincare", "rum", "caloriecount", "waiting_to_try", "uabat", "miscarriage", "fragranceswap", "flexicas", "random_acts_of_pizza", "sushi", "sneakerscanada", "makeupflatlays", "burgers", "askbaking", "nike", "piercedcock", "gestationaldiabetes", "parentsofmultiples", "makeuplounge", "winemaking", "mclounge", "anorexianervosa", "swatchitforme", "sneakerreps", "tequila", "kennyvsspenny", "makeupaddictioncanada", "indianfood", "tattooedgirls", "iamveryculinary", "flexibility", "52weeksofcooking", "mildlynomil", "sneakerfits", "safe_food", "prisonhooch", "fitnesscirclejerk", "palemua", "fashionadvice", "exvegans", "cookingvideos", "stronglifts5x5", "strength_training", "tallgirls", "dadswhodidnotwantpets", "warts", "ultrarunning", "barber", "strongcurves", "naturalbodybuilding", "february2019bumpers", "biggreenegg", "glasses", "dhgatereps", "keto_food", "overlyspecificedmemes", "frugalfemalefashion", "macarons", "amipregnant", "grilledcheese", "smallbooblove", "palaceclothing", "xxketo", "uglyduckling", "talesfromthepizzaguy", "salsasnobs", "trekbikes", "singleparents", "paralegal", "sharpening", "soylent", "foodscience", "louisvuitton", "nerfmods", "sephora", "adidas", "diet", "moustache", "roasting", "ffacj", "whiskyporn", "hidradenitis", "booty_lovers", "bridezillas", "sebderm", "exercise", "menopause", "eceprofessionals", "custody", "traditionaltattoos", "360waves", "veganuk", "nopoo", "sfr4r", "vintagefashion", "adultchildren", "dessertporn", "budgetfood", "ifseniorclass", "firewater", "drmartens", "legitcheck", "mountaineering", "seikomods", "scacjdiscussion", "whitewater", "nikerunclub", "indieexchange", "reptronics", "footfetishworld", "bodypositive", "deliciouscompliance", "chickfila", "konmari", "diyuk", "bonappetit", "abusiveparents", "wavyhair", "predaddit", "drugstoremua", "ttc_pcos", "supermorbidlyobese", "aerogarden", "drunkencookery", "attachmentparenting", "ketogains", "omegawatches", "skincareexchange", "goruck", "greenhouses", "soda", "dyshidrosis", "gonenatural", "paleo", "diynz", "japanesefood", "sneakerdeals", "weddingphotography", "femalelivingspace", "artisanvideos", "whisky", "ketoaustralia", "ketouk", "covidcookery", "formulafeeders", "estrangedadultchild", "behindtheclosetdoor", "nicuparents", "ketobeginners", "ulta", "myfitnesspal", "tipofmyfork", "koreanbeauty", "artfundamentals", "lesbianfashionadvice", "fitpregnancy", "watchexchangefeedback", "frugalmalefashioncdn", "jumprope", "shave_bazaar", "secondaryinfertility", "cheesemaking", "mexicanfood", "cider", "curlyhairuk", "dadforaminute", "shoes", "christmas", "petitefashionadvice", "singleteenagers", "charcuterie", "ketoscience", "euroskincare", "sugarfreemua", "cowboyboots", "vegande", "happycryingdads", "upcycling", "showerbeergonewild", "moresneakers", "strongman", "fearofgod", "weightgain", "selflove", "water_fasting", "yarnaddicts", "compulsiveskinpicking", "skin", "papajohns", "culinaryplating", "dunkindonuts", "wolfvsgoat", "cautiousbb", "standingdesk", "glitch_art", "austinfood", "whiskago", "repsneakerbst", "personaltraining", "shittygifrecipes", "nootropicsdepot", "bariatricsurgery", "ratemyplate", "babies", "furniturerestoration", "veganism", "choosemyalignment", "hotness", "ladybonersgonemild", "52weeksofbaking", "sexyoutfits", "barista", "makeuporganization", "fosterparents", "blackstonegriddle", "bollywoodfashion", "newborns", "navyblazer", "weighttraining", "crappycontouring", "bravotopchef", "bgccirclejerk", "bromance", "eood", "colourpop", "revengecommunity", "fitmeals", "vegan_food", "theordinaryskincare", "irezumi", "houseplantsuk", "osdd", "edanonymousadults", "bapeheads", "chinesewatches", "bakingnoobs", "cursedfoods", "parents", "breakfastfood", "drpepper", "noses", "march2019bumpers", "emotionalneglect", "japanesestreetwear", "hgtv", "ketodrunk", "smallboobproblems", "toolporn", "askvegans", "veganbeauty", "ethicalfashion", "gyodating", "sushiabomination", "dryfasting", "chinesefood", "benchmade", "dewalt", "njbeer", "makeupfetish", "fragsplits", "divorce_men", "airfryer", "whataburger", "edfood", "fryup", "aimeleondore", "veganbaking", "bluecollarwomen", "snakediet", "flooring", "boostmasterlin", "beardporn", "cake", "putaneggonit", "badparents", "japanesewatches", "vegetarianrecipes", "applewatchfitness", "innout", "mealprep", "jerky", "diybeauty", "skincareflatlays", "myweddingdress", "ifparents", "teespring", "dietandhealth", "repph", "makeupaddicts", "wgtow", "trollmua", "healthy_recipes", "queerception", "fitnessonline", "fashionplus", "monsterenergy", "ifbumpers2019", "todayiwore", "gastricbypass", "hearingaids", "coffeestations", "anycubic", "eloping", "legsgw", "neongenesisevangelion", "twins", "loseweight", "dairyqueen", "mancave", "powerbuilding", "sexybrownwomen", "wings", "couturereps", "cafe", "shoppingaddiction", "puer", "pizzadrivers", "veganchill", "childrenofdeadparents", "bigmenfashionadvice", "fitnessmotivation", "eyebrows", "tshirts", "chocolate", "parkrangers", "maleinfertility", "homeimprovementideas", "legitpiercing", "familyissues", "ifparenting", "kefir", "dcwhisky", "entirebodyexercise", "eustachiantubeclick", "pyrex_love", "breastfeedingsupport", "workouts", "rheumatoidarthritis", "tacos", "customsneakers", "dessert", "pizzahutemployees", "printondemand", "zerowastevegans", "foodievideos", "calmhands", "4hourbodyslowcarb", "eatcheapandvegan", "dyson", "lowcarb", "15minutefood", "swoleacceptance", "justengaged", "vintagesewing", "androgyny", "lactoseintolerant", "stonerfood", "coffeeswap", "wardrobepurge", "glutenfreerecipes", "hotdogs", "repvouch", "wendys", "charcoal", "adamragusea", "veganketo", "friend", "makeuptips", "blacksmithing", "onepotmeals", "bodyacceptance", "unconventionalmakeup", "euphorbiaceae", "whitehousedinners", "lingerieaddiction", "agingparents", "muaconspiracy", "lacqueristas", "monogamy", "randomactsofmakeup", "waiting_to_wed", "preppy", "vegrecipes", "foodscam", "sunflowers", "australianmfa", "badfoodporn", "moderatelygranolamoms", "raisingkids", "offwhitefactory", "vintagefashions", "sandwiches", "sca", "asianbeautyexchange", "rothys", "homefitness", "blendedfamilies", "cosplayers", "vostok", "taylorstitch", "septemberbumpers2017", "milk", "olivemua", "soup", "talesfromthekitchen", "breakfast", "revengexstorm", "vegansnacks", "cleanmakeup", "gucci", "fashion_design", "beginnerfitness", "pinkplants", "rbnchildcare", "narcabuseanddivorce", "perfumes", "fashionwomens35", "desiweddings", "smoothies", "sahp", "justnofil", "agegaprelationship", "vitamix", "baby", "adenium", "best_tattoos", "pandaexpress", "healthyeatingnow", "walstad", "oney", "advancedfitness", "figs", "organicgardening", "fashionporn", "fitnessgirls", "askguys", "kimchi", "dysfunctionalfamily", "veryexpensive", "sausagetalk", "ratemytea", "peeling", "topsecretrecipes", "ketotrees", "biltong", "foodie", "weightlossafterbaby", "makeupeducation", "wewantcups", "thingsmykidsaid", "fatherhood", "todayiate", "ts_withdrawal", "stopdrinkingfitness", "modestdress", "pie", "ketoprogress", "ocdmemes", "posturetipsguide", "fruit", "justnicefits", "cancerfamilysupport", "juicing", "makeupaddictionuk", "cheap_meals", "redhair", "glaucoma", "capsulewardrobe", "mezcal", "mua", "kpopfashion", "getoutofbed", "rawvegan", "foodsafety", "sneakermarketrefs", "glutenfreevegan", "prison", "straightedge", "berries", "buyingforbaby", "wemetonline", "melts", "wallets", "halfevil333", "tanning", "im5andthisismacaroni", "veganfood", "bakeoff", "famnnfp", "uksucculents", "chicagobeer", "dairyfree", "pizzahut", "greeneyed", "childrensbooks", "aj1s", "apartmenthacks", "ketocirclejerk", "braswap", "zpaletteporn", "beautyblogs", "nicotine", "dryagedbeef", "thehighchef", "weddinghashtag", "barbattlestations", "dads", "ketochow", "smokingmeat", "asexualdating", "anorexiarecovery", "budgetcooking", "weddingswap", "coldbrew", "foodhaikus", "restaurant", "shittyfertilityadvice", "kawaii", "cardmaking", "coparenting", "burgerking", "sodastream", "streetwearfits", "wegmans", "shaving", "theketodiet", "jerseymikes", "bpdpartners", "hats", "hot_dog", "veggieshake", "subscriptionboxes", "familiesyouchoose", "food_pantry", "clothingstartups", "avocado", "thehopyard", "topchef", "beerwithaview", "polyfamilies", "adventures", "searchandrescue", "kfc", "cookingcollaboration", "fabrics", "drinking", "trollxweddings", "gingerguys", "lichensclerosus", "planetfitnessmembers", "diplomacy", "wedditnyc", "backpackingdogs", "tegu", "airjordans", "minimal_setups", "koji", "sexeducation", "ketomealseatingnow", "sketchup", "sneakerwatch", "latteart", "cupcakes", "listeningspaces", "hands", "shittingadvice", "canadawhisky", "boba", "cookingtonight", "scandinavianinterior", "dehydrating", "crueltyfree", "makeupartists", "jewelrylove", "lookoftheday", "vegetarianketo", "fiveguys", "handbalancing", "distilling", "sustainablefashion", "repwatch", "bape", "asianeats", "aussiemakeuptrade", "foxbrain", "craftytrolls", "chefknifeswap", "teepublic", "majesticmanes", "ausproperty", "freeletics", "ectopicsupportgroup", "sfx", "mtbtrailbuilding", "crafting", "carhartt", "femalefashion", "80sfastfood", "plcb", "recipeinspiration", "badmakeup", "vedc", "liftingmusic", "beautyinfluencers", "wafflehouse", "crushadvice", "pho", "babyloss", "beautyaddiction", "ketomealprep", "beardtalk", "engaged", "vegetarianism", "glutenfreecooking", "octopus", "liquor", "streeteats", "icecream", "mushroom_cultivation", "satisficing", "mensfashion", "allenedmonds", "underworldmbti", "lesmills", "egg", "bbexchange", "healthyeating", "nailpolish", "mcdonalds", "cosplaybeauties", "rootedporn", "canyoneering", "cocacola", "byuidaho", "datsmiledoe", "meatlessmealprep", "midwives", "veganforbeginners", "makeup101", "psmf", "cosmeticsurgery", "prohealth", "vegetarianfoodporn", "fashionnews", "foodtrucks", "foodphotography", "crocs", "mre", "mimicrecipes", "vegangifrecipes", "tinyhouse", "handbags", "parentinginbulk", "ketodiet", "dinner", "rawring20s", "pins", "caving", "alternativehealth", "singlemothersbychoice", "adopted", "stepmom", "cutekids", "clocks", "jordans", "foodnyc", "naturalbeauty", "chickennuggets", "mom", "accuratelyrateme", "vancouvercraftbeer", "bb30", "trailguides", "canadabeautyexchange", "apartmentdesign", "ketobabies", "smokefire", "btfc", "fruitarian", "customshoes", "caffeine", "bacon", "singledads", "culinary", "filmfashion", "veganity", "foodblog", "shittywoodworking", "peptalkswithpops", "beercirclejerk", "businessfashion", "snacking", "gymshark", "neworleansbeer", "coffee_shop", "perfumeexchange", "tryingforanother", "ketomeals", "easyrecipes", "vodka", "crystalhealing", "fermentedhotsauce", "makeupselfies", "beautydiagrams", "nordicskincare", "shroom", "handtoolrescue", "weightlossfoods", "malefashionmarket", "teenmfa", "tfhcooking", "xxketoover50", "cajunfood", "amazingfitness", "sciencebasedparenting", "myopia", "asiangirlsbeingsexy", "diyweddings", "keto_diet", "fitmama", "breadmachines", "motivationvideos", "henna", "cutyourownhair", "ibsresearch", "florists", "weddingring", "foggypics", "ayurveda", "fastfoodhorrorstories", "helicopterparents", "coffee_roasters", "veganmealprep", "desiketo", "copornot", "foodwishes", "watchhorology", "filipinofood", "ttchealthy", "redditlaqueristaswap", "luxury", "weddingvideography", "allergy", "gainitmeals", "picturesofchina", "mixology", "tdcs", "brownbeauty", "doener", "bmorebourbonsociety", "marfans", "europeanmalefashion", "hypoglycemia", "muscleconfusion", "jewelers", "streetwearsales", "askdad", "landscapingtips", "gaybrosfitness", "hooters", "modulars", "mealplanyourmacros", "repfashion", "ketodessert", "bedding", "socks", "runninglifestyle", "frozendinners", "orthopaedics", "potato", "daddycringe", "accessibility", "veganzerowaste", "xxy", "menswear", "deltaco", "novemberbumpers2017", "haircare", "wholesometeenboys", "stressfreeseason", "askacobbler", "redbull", "worldwhisky", "brownreclusebites", "veganparenting", "trainerroad", "climbingpartners", "ketomealsandrecipes", "fiestaware", "neurofibromatosis", "streetfoodartists", "eggs", "kickwho", "mfacirclejerk", "lymedisease", "deondergrondse", "vegan_travel", "toolsales", "fuckcilantro", "chiropractorzone", "powerwashinggore", "dermatology", "malelifestyle", "projectpan", "neurofeedback", "dysphagia", "grainfather", "wedditgetsfit", "kinobody", "weightlossnews", "ketodietapp", "memantinehcl", "organichealthproducts", "weightlossdiets", "finedining", "fuckingmanly", "antidiet", "condiments", "audiprocdisorder", "popeyes", "exercisepostures", "pez", "onlinefriends", "bys", "wintercycling", "salsa", "outlandishalcoholics", "crossedlegs", "oklahomajoe", "pittsburghbeers", "fastfeeling", "askredditfood", "lioneltrains", "foodnerds", "toolboxmods", "sdam", "irinasabetskaya", "labeer", "yegvegan", "fattylivernafld", "fitlifevideos", "diary", "reebok", "outbreakworld", "modernfashionporn", "davidstea", "ketoconnect", "stepschallenge", "mustard", "pcosandpregnant", "portugalvegan", "xrays", "beercanada", "houstonbeer", "fastfoodreview", "tacticalmedicine", "kidsmeal", "hangovereffect", "misophoniasupport", "deepfried", "fastbuds_family", "adenomyosis", "dnp", "morganeisenberg", "ufyh", "kidsafevideos", "drycleaning", "sobrietyandrecovery", "raptors40k", "eczemabs", "femininenotfeminist", "prosopagnosia", "marriageisbliss", "costumeporn", "motherinlawsfromhell", "32dollars", "sexyness", "breakingeggs", "rabbitreddit", "spinalfusion", "amaro", "freefood", "pistollake", "9round", "purplecoco", "ect", "fmd", "csectioncentral", "dad", "raocdeletes", "olivesplace", "weightlosstechniques", "lgbtweddings", "avascularnecrosis", "naturalnutrition", "bpdrecovery", "marylandeats", "rainbow_babies", "persuasionexperts", "brandy", "nutritionsupport", "stretchedclassifieds", "sanfranciscosecrets", "cmt", "washingtonstategarden", "penpalsover40", "marriedlife", "snowblowers", "queerfamilies", "inlaws", "fragdecants", "fashion", "cordwaining", "treeparents", "autismuk", "bitters", "chd", "sportsmedicine", "stlouisbeer", "bjj_gear", "alopecia_areata", "rbnspouses", "qdoba", "weird_dreams", "psc", "trying2conceive", "asianscuckingpinkies", "blackladiesfitness", "recipegifs", "tfabgrads", "fantasyimages", "gymmotivation", "olivegarden", "girlfriendproblems", "atozplasticsurgery", "foodsandiego", "sneakersreps", "trulieve", "xxweightroom", "floridagardening", "longislandeats", "ghostkitchens", "bento", "lunch", "texasbeer", "sexdolling", "teethdrumming", "mdbeer", "bi4bi", "retinitispigmentosa", "braintumor", "dankrecoverymeme", "shinyfashion", "cozy", "gestationaldiabetics", "randomactsofpetfood", "asianbeautyrehab", "toyreviews", "thoracicoutlet", "canskincare", "hotguysworkingout", "paleolithicketogenic", "paruresis", "supersoil", "bikinisonshow", "makeupfreebies", "astrorelationships", "agricultureporn", "twackedup", "fried", "crueltyfreemua", "carlsjr", "guacmemes", "youtubebeauty", "powerliftingmemes", "budgetweddings", "skincarerehab", "beautifullyenhanced", "thericegoddess", "pottytraining", "finsubteamwork", "hardees", "diamond", "pregnancyproblems", "casualtfab", "condimentpackets", "teenstyle", "ownit", "carpets", "askfastfoodemployees", "erectiledysfunctioned", "selfcare", "snowshoeing", "thingsmadeofchocolate", "paperflowers", "weddingphotographer", "socialworkerstories", "entitledoldpeople", "hownotto", "weddingsolutions", "fitnessguides", "ketogenicdiet", "womensbodybuilding", "foodhack", "kentuckyfriedchicken", "muaeurope", "coffeeoutside", "grease", "freeforallfashion", "vegkc", "closetswap", "onlineclothing", "rhubarbhomies", "grooms", "frugalbeauty", "upliftingvegan", "mito", "lodestone_testing"]);
			var i = s("./src/reddit/helpers/chooseVariant/index.ts"),
				d = s("./src/reddit/selectors/user.ts");
			const c = e => (e => {
				return Object(i.c)(e, {
					experimentEligibilitySelector: () => Object(d.I)(e),
					experimentName: a.Rc
				}) === a.bd.Enabled
			})(e) && (e => {
				const t = Object(n.d)(e);
				return !!t && r.has(t.toLowerCase())
			})(e) && o.d.realtimeCommentsExperiment(e)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/PublicAccessNetwork.dc3256e6ac3210c69af2.js.map