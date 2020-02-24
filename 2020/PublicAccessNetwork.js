// https://www.redditstatic.com/desktop2x/PublicAccessNetwork.05b928a918c81af8e2e9.js
// Retrieved at 2/24/2020, 1:10:20 PM by Reddit Dataminer v1.0.0
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
					var n, o = s(/(ipod|iphone|ipad)/i).toLowerCase(),
						i = !/like android/i.test(t) && /android/i.test(t),
						a = /nexus\s*[0-6]\s*/i.test(t),
						c = !a && /nexus\s*[0-9]+/i.test(t),
						d = /CrOS/.test(t),
						l = /silk/i.test(t),
						m = /sailfish/i.test(t),
						u = /tizen/i.test(t),
						h = /(web|hpw)os/i.test(t),
						p = /windows phone/i.test(t),
						b = (/SamsungBrowser/i.test(t), !p && /windows/i.test(t)),
						v = !o && !l && /macintosh/i.test(t),
						g = !i && !m && !u && !h && /linux/i.test(t),
						S = r(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
						w = s(/version\/(\d+(\.\d+)?)/i),
						C = /tablet/i.test(t) && !/tablet pc/i.test(t),
						f = !C && /[^-]mobi/i.test(t),
						E = /xbox/i.test(t);
					/opera/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: w || s(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
					} : /opr\/|opios/i.test(t) ? n = {
						name: "Opera",
						opera: e,
						version: s(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || w
					} : /SamsungBrowser/i.test(t) ? n = {
						name: "Samsung Internet for Android",
						samsungBrowser: e,
						version: w || s(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
					} : /coast/i.test(t) ? n = {
						name: "Opera Coast",
						coast: e,
						version: w || s(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
					} : /yabrowser/i.test(t) ? n = {
						name: "Yandex Browser",
						yandexbrowser: e,
						version: w || s(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
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
					} : p ? (n = {
						name: "Windows Phone",
						osname: "Windows Phone",
						windowsphone: e
					}, S ? (n.msedge = e, n.version = S) : (n.msie = e, n.version = s(/iemobile\/(\d+(\.\d+)?)/i))) : /msie|trident/i.test(t) ? n = {
						name: "Internet Explorer",
						msie: e,
						version: s(/(?:msie |rv:)(\d+(\.\d+)?)/i)
					} : d ? n = {
						name: "Chrome",
						osname: "Chrome OS",
						chromeos: e,
						chromeBook: e,
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : /edg([ea]|ios)/i.test(t) ? n = {
						name: "Microsoft Edge",
						msedge: e,
						version: S
					} : /vivaldi/i.test(t) ? n = {
						name: "Vivaldi",
						vivaldi: e,
						version: s(/vivaldi\/(\d+(\.\d+)?)/i) || w
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
						version: w || s(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
					} : h ? (n = {
						name: "WebOS",
						osname: "WebOS",
						webos: e,
						version: w || s(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
					}, /touchpad\//i.test(t) && (n.touchpad = e)) : /bada/i.test(t) ? n = {
						name: "Bada",
						osname: "Bada",
						bada: e,
						version: s(/dolfin\/(\d+(\.\d+)?)/i)
					} : u ? n = {
						name: "Tizen",
						osname: "Tizen",
						tizen: e,
						version: s(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || w
					} : /qupzilla/i.test(t) ? n = {
						name: "QupZilla",
						qupzilla: e,
						version: s(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || w
					} : /chromium/i.test(t) ? n = {
						name: "Chromium",
						chromium: e,
						version: s(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || w
					} : /chrome|crios|crmo/i.test(t) ? n = {
						name: "Chrome",
						chrome: e,
						version: s(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
					} : i ? n = {
						name: "Android",
						version: w
					} : /safari|applewebkit/i.test(t) ? (n = {
						name: "Safari",
						safari: e
					}, w && (n.version = w)) : o ? (n = {
						name: "iphone" == o ? "iPhone" : "ipad" == o ? "iPad" : "iPod"
					}, w && (n.version = w)) : n = /googlebot/i.test(t) ? {
						name: "Googlebot",
						googlebot: e,
						version: s(/googlebot\/(\d+(\.\d+))/i) || w
					} : {
						name: s(/^(.*)\/(.*) /),
						version: r(/^(.*)\/(.*) /)
					}, !n.msedge && /(apple)?webkit/i.test(t) ? (/(apple)?webkit\/537\.36/i.test(t) ? (n.name = n.name || "Blink", n.blink = e) : (n.name = n.name || "Webkit", n.webkit = e), !n.version && w && (n.version = w)) : !n.opera && /gecko\//i.test(t) && (n.name = n.name || "Gecko", n.gecko = e, n.version = n.version || s(/gecko\/(\d+(\.\d+)?)/i)), n.windowsphone || !i && !n.silk ? !n.windowsphone && o ? (n[o] = e, n.ios = e, n.osname = "iOS") : v ? (n.mac = e, n.osname = "macOS") : E ? (n.xbox = e, n.osname = "Xbox") : b ? (n.windows = e, n.osname = "Windows") : g && (n.linux = e, n.osname = "Linux") : (n.android = e, n.osname = "Android");
					var O = "";
					n.windows ? O = function(e) {
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
					}(s(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : n.windowsphone ? O = s(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : n.mac ? O = (O = s(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : o ? O = (O = s(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : i ? O = s(/android[ \/-](\d+(\.\d+)*)/i) : n.webos ? O = s(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : n.blackberry ? O = s(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : n.bada ? O = s(/bada\/(\d+(\.\d+)*)/i) : n.tizen && (O = s(/tizen[\/\s](\d+(\.\d+)*)/i)), O && (n.osversion = O);
					var x = !n.windows && O.split(".")[0];
					return C || c || "ipad" == o || i && (3 == x || x >= 4 && !f) || n.silk ? n.tablet = e : (f || "iphone" == o || "ipod" == o || i || a || n.blackberry || n.webos || n.bada) && (n.mobile = e), n.msedge || n.msie && n.version >= 10 || n.yandexbrowser && n.version >= 15 || n.vivaldi && n.version >= 1 || n.chrome && n.version >= 20 || n.samsungBrowser && n.version >= 4 || n.firefox && n.version >= 20 || n.safari && n.version >= 6 || n.opera && n.version >= 10 || n.ios && n.osversion && n.osversion.split(".")[0] >= 6 || n.blackberry && n.version >= 10.1 || n.chromium && n.version >= 20 ? n.a = e : n.msie && n.version < 10 || n.chrome && n.version < 20 || n.firefox && n.version < 20 || n.safari && n.version < 6 || n.opera && n.version < 10 || n.ios && n.osversion && n.osversion.split(".")[0] < 6 || n.chromium && n.version < 20 ? n.c = e : n.x = e, n
				}
				var s = t("undefined" != typeof navigator && navigator.userAgent || "");

				function r(e) {
					return e.split(".").length
				}

				function n(e, t) {
					var s, r = [];
					if (Array.prototype.map) return Array.prototype.map.call(e, t);
					for (s = 0; s < e.length; s++) r.push(t(e[s]));
					return r
				}

				function o(e) {
					for (var t = Math.max(r(e[0]), r(e[1])), s = n(e, (function(e) {
							var s = t - r(e);
							return n((e += new Array(s + 1).join(".0")).split("."), (function(e) {
								return new Array(20 - e.length).join("0") + e
							})).reverse()
						})); --t >= 0;) {
						if (s[0][t] > s[1][t]) return 1;
						if (s[0][t] !== s[1][t]) return -1;
						if (0 === t) return 0
					}
				}

				function i(e, r, n) {
					var i = s;
					"string" == typeof r && (n = r, r = void 0), void 0 === r && (r = !1), n && (i = t(n));
					var a = "" + i.version;
					for (var c in e)
						if (e.hasOwnProperty(c) && i[c]) {
							if ("string" != typeof e[c]) throw new Error("Browser version in the minVersion map should be a string: " + c + ": " + String(e));
							return o([a, e[c]]) < 0
						} return r
				}
				return s.test = function(e) {
					for (var t = 0; t < e.length; ++t) {
						var r = e[t];
						if ("string" == typeof r && r in s) return !0
					}
					return !1
				}, s.isUnsupportedBrowser = i, s.compareVersions = o, s.check = function(e, t, s) {
					return !i(e, t, s)
				}, s._detect = t, s.detect = t, s
			}, e.exports ? e.exports = r() : s("./node_modules/webpack/buildin/amd-define.js")("bowser", r)
		},
		"./node_modules/lodash/clamp.js": function(e, t, s) {
			var r = s("./node_modules/lodash/_baseClamp.js"),
				n = s("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, s) {
				return void 0 === s && (s = t, t = void 0), void 0 !== s && (s = (s = n(s)) == s ? s : 0), void 0 !== t && (t = (t = n(t)) == t ? t : 0), r(n(e), t, s)
			}
		},
		"./node_modules/webpack/buildin/amd-define.js": function(e, t) {
			e.exports = function() {
				throw new Error("define cannot be used indirect")
			}
		},
		"./src/lib/loginHref/index.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/config.ts"),
				n = s("./node_modules/history/esm/history.js");
			t.a = (e, t, s) => {
				const o = Object(n.e)(e),
					i = encodeURIComponent("".concat(t).concat(o));
				return "".concat(r.a.accountManagerOrigin).concat(s || "/login", "?dest=").concat(i)
			}
		},
		"./src/lib/setInterval/index.ts": function(e, t, s) {
			"use strict";
			t.a = function(e, t) {
				for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), n = 2; n < s; n++) r[n - 2] = arguments[n];
				let o, i = !1;
				const a = async () => {
					r && r.length ? await e.call(window, ...r) : await e.call(window), i || (o = window.setTimeout(a, t))
				};
				return o = window.setTimeout(a, t), () => {
					i = !0, window.clearTimeout(o)
				}
			}
		},
		"./src/reddit/actions/publicAccessNetwork/rpanWorker.ts": function(e, t, s) {
			"use strict";
			var r = s("./src/lib/setInterval/index.ts"),
				n = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				a = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const c = new class {
				constructor() {
					this.isInitialized = !1, this.currentStreamsRateSec = o.c, this.currentConfigRateSec = o.d, this.heartbeatRateSec = o.f, this.statsRefreshRateSec = o.i, this.recommendedViewerSubredditsRefreshRateSec = o.g, this.MIN_RATE_MS = 1e3, this.subscribeConfig = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startConfigWork(e, t, s)), () => this.unsubscribeConfig()), this.subscribeStreams = e => async (t, s) => (this.initializeConfig(e, t, s).then(() => this.startStreamsWork(e, t, s)), () => this.unsubscribeStreams()), this.subscribeRecommendedViewerSubreddits = () => async (e, t) => (this.startRecommendedViewerSubredditsWork(e, t), () => this.unsubscribeRecommendedViewerSubreddits()), this.subscribeStats = e => async (t, s) => (this.currentStreamPostId = e, this.startStatsWork(t, s), () => this.unsubscribeStats()), this.subscribeHeartbeat = e => async (t, s) => (this.currentStreamId = e, this.startHeartbeatWork(t, s), () => this.unsubscribeHeartbeat())
				}
				unsubscribeConfig() {
					window.clearTimeout(this.configTimeout)
				}
				unsubscribeStreams() {
					window.clearTimeout(this.streamsTimeout)
				}
				unsubscribeRecommendedViewerSubreddits() {
					this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval()
				}
				unsubscribeStats() {
					this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.currentStreamPostId = void 0
				}
				unsubscribeHeartbeat() {
					this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.currentStreamId = void 0
				}
				async initializeConfig(e, t, s) {
					if (this.isInitialized) return;
					await t(Object(n.c)(e));
					const r = Object(a.m)(s());
					r.lastUpdated && (this.currentStreamsRateSec = r.viewer_streams_refresh, this.currentConfigRateSec = r.rpan_config_refresh_rate, this.isInitialized = !0)
				}
				async startConfigWork(e, t, s) {
					window.clearTimeout(this.configTimeout), await t(Object(n.c)(e));
					const r = Object(a.m)(s()),
						o = r.rpan_config_refresh_rate;
					this.currentConfigRateSec !== o && (this.currentConfigRateSec = o);
					const i = r.viewer_streams_refresh;
					this.currentStreamsRateSec !== i && (this.currentStreamsRateSec = i, this.startStreamsWork(e, t, s));
					const c = r.viewer_heartbeat_interval;
					c && this.heartbeatRateSec !== c && this.startHeartbeatWork(t, s);
					const d = r.viewer_heartbeat_interval;
					d && this.statsRefreshRateSec !== d && this.startStatsWork(t, s), this.configTimeout = window.setTimeout(() => this.startConfigWork(e, t, s), this.getConfigTimeout())
				}
				async startStreamsWork(e, t, s) {
					window.clearTimeout(this.streamsTimeout), await t(Object(i.j)(e)), this.streamsTimeout = window.setTimeout(() => this.startStreamsWork(e, t, s), this.getStreamsTimeout(s()))
				}
				async startRecommendedViewerSubredditsWork(e, t) {
					await this.initializeConfig(o.O, e, t), this.clearFetchRecommendedViewerSubredditsInterval && this.clearFetchRecommendedViewerSubredditsInterval(), e(Object(n.b)());
					const s = Object(a.m)(t()).recommended_viewer_subreddits_refresh_rate;
					s && (this.recommendedViewerSubredditsRefreshRateSec = s), this.clearFetchRecommendedViewerSubredditsInterval = Object(r.a)(() => e(Object(n.b)()), Math.max(1e3 * this.recommendedViewerSubredditsRefreshRateSec, this.MIN_RATE_MS))
				}
				async startStatsWork(e, t) {
					await this.initializeConfig(o.O, e, t), this.currentStreamPostId && (this.clearFetchCurrentStreamInterval && this.clearFetchCurrentStreamInterval(), this.statsRefreshRateSec = Object(a.m)(t()).viewer_stream_stats_refresh_rate || this.statsRefreshRateSec, this.clearFetchCurrentStreamInterval = Object(r.a)(() => {
						this.currentStreamPostId && e(Object(i.i)(this.currentStreamPostId))
					}, Math.max(1e3 * this.statsRefreshRateSec, this.MIN_RATE_MS)))
				}
				async startHeartbeatWork(e, t) {
					await this.initializeConfig(o.O, e, t), this.currentStreamId && (this.clearSendHeartbeatInterval && this.clearSendHeartbeatInterval(), this.heartbeatRateSec = Object(a.m)(t()).viewer_heartbeat_interval || this.heartbeatRateSec, this.clearSendHeartbeatInterval = Object(r.a)(() => {
						this.currentStreamId && e(Object(n.d)(this.currentStreamId))
					}, Math.max(1e3 * this.heartbeatRateSec, this.MIN_RATE_MS)))
				}
				getStreamsTimeout(e) {
					return Math.max(1e3 * (this.currentStreamsRateSec + this.getRandomFetchStreamsJitterSec(e)), this.MIN_RATE_MS)
				}
				getConfigTimeout() {
					return Math.max(1e3 * this.currentConfigRateSec, this.MIN_RATE_MS)
				}
				getRandomFetchStreamsJitterSec(e) {
					const t = Object(a.m)(e).viewer_streams_refresh_slop,
						s = Math.cos(Math.PI * Math.round(Math.random()));
					return Math.random() * t * s
				}
			};
			t.a = c
		},
		"./src/reddit/actions/publicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			}));
			var r = s("./node_modules/uuid/v4.js"),
				n = s.n(r),
				o = s("./src/lib/makeActionCreator/index.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/constants.ts");
			const a = Object(o.a)(i.z),
				c = e => async t => {
					t(a(e))
				}, d = () => async e => {
					e(a({
						lastChatActivityUtcTs: Date.now()
					}))
				}, l = () => async e => {
					e(a({
						correlationId: n()()
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/isSimpleClick/index.ts"),
				a = s("./src/lib/lessComponent.tsx"),
				c = s("./src/lib/loginHref/index.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Button/index.tsx"),
				m = s("./src/reddit/helpers/trackers/authControls.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.m.less"),
				p = s.n(h);
			const {
				fbt: b
			} = s("./node_modules/fbt/lib/FbtPublic.js"), v = a.a.div("Wrapper", p.a), g = a.a.span("Copy", p.a), S = a.a.wrapped(l.g, "SignupLink", p.a), w = a.a.wrapped(l.j, "LoginLink", p.a);
			t.a = Object(d.b)(e => {
				let {
					className: t,
					isLiveStreaming: s,
					location: r,
					openLoginModal: a,
					openRegisterModal: d,
					origin: l,
					sendEvent: h
				} = e;
				return n.a.createElement(v, {
					className: Object(o.a)(t, {
						[p.a.LiveStreamingWrapper]: s
					})
				}, n.a.createElement(g, {
					className: Object(o.a)({
						[p.a.LiveStreamingCopy]: s
					})
				}, b._("Log in or sign up to leave a comment", null, {
					hk: "1KD7Eh"
				})), n.a.createElement(w, {
					href: Object(c.a)(r, l, "/login"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), a(), h(Object(m.a)("user_convert")))
					},
					"data-redditstyle": !0
				}, n.a.createElement(u.c, null, "log in")), n.a.createElement(S, {
					className: Object(o.a)({
						[p.a.LiveStreamingSignupLink]: s
					}),
					href: Object(c.a)(r, l, "/register"),
					onClick: e => {
						Object(i.a)(e) && (e.preventDefault(), e.stopPropagation(), d(), h(Object(m.c)("user_convert")))
					},
					"data-redditstyle": !0
				}, n.a.createElement(u.c, null, "sign up")))
			})
		},
		"./src/reddit/components/CommentsChat/Loader.ts": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/@loadable/component/dist/loadable.esm.js");
			const n = Object(r.a)({
				resolved: {},
				chunkName: () => "ChatPost",
				isReady(e) {
					const t = this.resolve(e);
					return !1 !== this.resolved[t] && !!s.m[t]
				},
				importAsync: () => Promise.all([s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("ChatPost~CollectionCommentsPage~CommentsPage~ModQueuePages~ModerationPages~Poll~ProfileComments~Prof~8c7a65fc"), s.e("ChatPost~ModQueuePages"), s.e("ChatPost")]).then(s.bind(null, "./src/reddit/components/CommentsChat/index.tsx")),
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
				gradientAnimation: "_3kGJh7EpOUlhrvN051jlhD",
				Byline: "eI85Q_-1x9VERN15oDr3X",
				byline: "eI85Q_-1x9VERN15oDr3X"
			}
		},
		"./src/reddit/components/CommentsChat/MessageInput/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/higherOrderComponents/makeAsync.tsx"),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/lib/loadWithRetries/index.ts"),
				c = s("./src/reddit/components/CommentsChat/MessageInput/Loader.m.less"),
				d = s.n(c);
			const l = i.a.div("LoaderWrapper", d.a),
				m = i.a.div("Icon", d.a),
				u = i.a.div("Byline", d.a),
				h = Object(o.a)({
					ErrorComponent: () => n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null)),
					getComponent: () => Object(a.a)(() => Promise.all([s.e("vendors~Chat~ChatMessageInput~CollectionCommentsPage~CommentsPage~MembershipPaywallPage~ModerationPa~e7ce6754"), s.e("vendors~ChatMessageInput~FlairEdit~MembershipPaywallPage~PostCreation~RichTextEditor"), s.e("ChatMessageInput~ChatPost~CollectionCommentsPage~CommentsPage~GovernanceReleaseNotesModal~InFeedChai~d183dc71"), s.e("ChatMessageInput~MembershipPaywallPage~RichTextEditor"), s.e("ChatMessageInput")]).then(s.bind(null, "./src/reddit/components/CommentsChat/MessageInput/index.tsx")).then(e => e.default)),
					LoadingComponent: e => {
						let {
							isLivestreaming: t
						} = e;
						return t ? null : n.a.createElement(l, null, n.a.createElement(m, null), n.a.createElement(u, null))
					}
				});
			t.a = e => n.a.createElement(h, e)
		},
		"./src/reddit/components/GildModal/Loader.tsx": function(e, t, s) {
			"use strict";
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const o = Object(r.a)({
				getComponent: () => Object(n.a)(() => Promise.all([s.e("FramedGild~GildModal"), s.e("GildModal")]).then(s.bind(null, "./src/reddit/components/GildModal/index.tsx"))).then(e => e.default),
				ErrorComponent: () => null,
				LoadingComponent: () => null
			});
			t.a = o
		},
		"./src/reddit/components/HlsVideo/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/hls.js/dist/hls.js"),
				i = s.n(o),
				a = s("./src/lib/env/index.ts");
			const c = 3,
				d = 5e3,
				l = 1e3;
			class m extends r.Component {
				constructor(e) {
					super(e), this.mediaRecoveryAttemptsCount = 0, this.mediaRecoveryLastAttemptUtc = 0, this.fragmentRecoveryLastAttemptUtc = 0, this.fragmentRecoveryAttemptsCount = 0, this.videoElement = n.a.createRef(), this.onPlayError = e => t => {
						if ("AbortError" === t.name) return;
						const {
							onAutoPlayPrevented: s,
							playMutedOnPrevented: r
						} = this.props;
						if ("NotAllowedError" === t.name) return s && s(), void(r && this.setState(Object.assign({}, this.state, {
							isMuteForced: !0
						})));
						Object(a.a)() && console.error(t), e && this.onIrrecoverableError(e)
					}, this.state = {
						isInitialized: !1,
						isMuteForced: !1
					}, this.hls = void 0, this.onVideoPause = this.onVideoPause.bind(this), this.onVideoPlay = this.onVideoPlay.bind(this), this.onTimeUpdated = this.onTimeUpdated.bind(this)
				}
				componentDidUpdate(e, t) {
					if (e.url !== this.props.url) return void this.initialize();
					const {
						isPaused: s
					} = this.props, r = this.videoElement.current;
					r && this.state.isInitialized && s !== r.paused && (s ? r.pause() : r.play().catch(this.onPlayError(this.hls))), !t.isMuteForced && this.state.isMuteForced && this.state.isInitialized && this.videoElement.current && this.videoElement.current.play().catch(this.onPlayError(this.hls))
				}
				componentDidMount() {
					this.initialize()
				}
				componentWillUnmount() {
					const e = this.videoElement.current;
					e && !e.paused && this.onVideoPause(), this.hls && this.hls.destroy()
				}
				render() {
					const {
						controls: e,
						muted: t,
						onEnded: s,
						onLoadedData: r
					} = this.props;
					return n.a.createElement("video", {
						controls: e,
						muted: t || this.state.isMuteForced,
						onEnded: s,
						onLoadedData: r,
						onPlay: this.onVideoPlay,
						onPause: this.onVideoPause,
						onTimeUpdate: this.onTimeUpdated,
						ref: this.videoElement
					})
				}
				initialize() {
					const {
						autoplay: e,
						startTime: t,
						isPaused: s,
						onLevelLoaded: r,
						onLoadingData: n,
						url: o
					} = this.props;
					if (!o || !this.videoElement.current) return;
					this.hls && this.hls.destroy();
					const a = new i.a({
						enableWorker: !1,
						fragLoadingMaxRetry: 2,
						levelLoadingMaxRetry: 4,
						manifestLoadingMaxRetry: 1,
						startFragPrefetch: !0,
						liveSyncDurationCount: 2,
						maxMaxBufferLength: 10
					});
					this.subscribeErrorHandlers(a), a.on(i.a.Events.MANIFEST_LOADING, () => {
						n && n()
					}), a.on(i.a.Events.MANIFEST_PARSED, (r, n) => {
						e && !s && this.videoElement.current && (this.videoElement.current.currentTime = t, this.videoElement.current.play().catch(this.onPlayError(a))), this.setState(Object.assign({}, this.state, {
							isInitialized: !0
						}))
					}), a.on(i.a.Events.LEVEL_LOADED, (e, t) => {
						r && r(t.details)
					}), a.loadSource(o), a.attachMedia(this.videoElement.current), this.hls = a
				}
				subscribeErrorHandlers(e) {
					e.on(i.a.Events.ERROR, (t, s) => {
						if (s.type === i.a.ErrorTypes.NETWORK_ERROR && s.response && 410 === s.response.code) this.onResourceRemoved(e);
						else if (s.fatal) switch (s.type) {
							case i.a.ErrorTypes.MEDIA_ERROR:
								return void this.handleFatalMediaError(e);
							case i.a.ErrorTypes.NETWORK_ERROR:
								return void this.handleFatalNetworkError(e, s);
							default:
								return void this.onIrrecoverableError(e)
						}
					})
				}
				onResourceRemoved(e) {
					e.stopLoad(), this.props.onResourceRemoved && this.props.onResourceRemoved()
				}
				onIrrecoverableError(e) {
					e.destroy(), this.props.onError && this.props.onError()
				}
				handleFatalMediaError(e) {
					return Date.now() - this.mediaRecoveryLastAttemptUtc > l && (this.mediaRecoveryAttemptsCount = 0), 0 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), void e.recoverMediaError()) : 1 === this.mediaRecoveryAttemptsCount ? (this.mediaRecoveryAttemptsCount++, this.mediaRecoveryLastAttemptUtc = Date.now(), e.swapAudioCodec(), void e.recoverMediaError()) : void this.onIrrecoverableError(e)
				}
				handleFatalNetworkError(e, t) {
					t.details !== i.a.ErrorDetails.FRAG_LOAD_ERROR && t.details !== i.a.ErrorDetails.FRAG_LOAD_TIMEOUT ? this.onIrrecoverableError(e) : this.handleBadFragment(e, t.frag)
				}
				handleBadFragment(e, t) {
					this.resetBadFragmentsCountIfCooldownPassed(), this.fragmentRecoveryAttemptsCount > c || !t ? this.onIrrecoverableError(e) : (this.fragmentRecoveryAttemptsCount++, this.fragmentRecoveryLastAttemptUtc = Date.now(), e.startLoad())
				}
				resetBadFragmentsCountIfCooldownPassed() {
					this.fragmentRecoveryLastAttemptUtc + d < Date.now() && (this.fragmentRecoveryAttemptsCount = 0)
				}
				onTimeUpdated() {
					this.videoElement.current && this.props.onTimeUpdate && this.props.onTimeUpdate(this.videoElement.current.currentTime)
				}
				onVideoPause() {
					const {
						onPause: e
					} = this.props;
					e && e()
				}
				onVideoPlay() {
					const {
						onPlay: e
					} = this.props;
					e && e(), this.state.isMuteForced && this.setState(Object.assign({}, this.state, {
						isMuteForced: !1
					}))
				}
				setCurrentTime(e) {
					const t = this.videoElement.current;
					t && (t.currentTime = e)
				}
				setVolume(e) {
					const t = this.videoElement.current;
					t && t.volume !== e && (t.volume = e)
				}
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
				return E
			}));
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/lessComponent.tsx"),
				d = s("./src/reddit/actions/tooltip.ts"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				u = s("./src/reddit/controls/Dropdown/index.tsx"),
				h = s("./src/reddit/controls/Dropdown/Row.tsx"),
				p = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				b = s("./src/reddit/selectors/tooltip.ts"),
				v = s("./src/reddit/components/OverflowMenu/index.m.less"),
				g = s.n(v);
			const S = c.a.wrapped(u.a, "_Dropdown", g.a),
				w = Object(m.a)(S),
				C = c.a.button("MenuButton", g.a),
				f = c.a.wrapped(p.a, "MenuIcon", g.a),
				E = c.a.wrapped(h.b, "DropdownRow", g.a),
				O = Object(i.c)({
					dropdownIsOpen: (e, t) => {
						let {
							dropdownId: s
						} = t;
						return Object(b.b)(s)(e)
					}
				}),
				x = Object(o.b)(O, (e, t) => {
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
			t.b = x(e => n.a.createElement(C, {
				"aria-expanded": e.dropdownIsOpen,
				"aria-haspopup": !0,
				"aria-label": Object(l.c)("more options"),
				className: Object(a.a)(e.className, {
					[g.a.mIsEnabled]: !e.disabled && !e.defaultButtonOutline
				}),
				disabled: e.disabled,
				onClick: y(e),
				onMouseDown: e.handleMouseDown,
				id: e.dropdownId
			}, e.icon ? e.icon : n.a.createElement(f, null), n.a.createElement(w, {
				className: e.dropdownClassName,
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId,
				isFixed: e.isFixed,
				targetPosition: e.targetPosition,
				tooltipPosition: e.tooltipPosition
			}, e.children)))
		},
		"./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less": function(e, t, s) {
			e.exports = {
				overlay: "_3w_dLAoZ36_fPFvFr73Twc",
				visible: "_3xefvVa9iQxtBKfDrIQHK5",
				overlayTop: "t59TT9rQbiEQkmrsaaYfs",
				overlayTitle: "_1NnuLtMElnw61J8beBBk1b",
				overlayCenter: "_38XOKvg5Aum-pHj1zsk3Gh",
				muteButton: "_1loeDj0ZNN1lkR8TbCnX5L",
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
				promptButton: "_2k4XxsTat5YM_3MLe7Qvlr"
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
				panesWrapper: "_8aA-2ZrheEy6k2e1iShKQ",
				initialized: "_2QagxVHOpd1MZxMCUI8-aC",
				pane: "_1J9WuBbLemYVOo8ibJDljN",
				leftPane: "_1YLn-G2I6GbQpuf-DZ4fOX",
				videoContainer: "_1LWq4WiRex5umy4-L1eStm",
				rightPane: "p02A8ZUESZF7fQy6pu1WF",
				closeButton: "_34dJmQNu3gi0aCIS1PD5uw",
				closeIcon: "UP3tR535P7cIknrcrCxQ3"
			}
		},
		"./src/reddit/components/ReportFlow/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return o
			}));
			var r = s("./src/higherOrderComponents/makeAsync.tsx"),
				n = s("./src/lib/loadWithRetries/index.ts");
			const o = {
					backgroundColor: s("./src/reddit/constants/colors.ts").a.overlayReportFlow
				},
				i = () => null;
			t.a = Object(r.a)({
				ErrorComponent: i,
				getComponent: () => Object(n.a)(() => Promise.all([s.e("ReportFlow~ReportPage"), s.e("ReportFlow")]).then(s.bind(null, "./src/reddit/components/ReportFlow/_ReportFlow.tsx"))).then(e => e.default),
				LoadingComponent: i
			})
		},
		"./src/reddit/controls/Dropdown/Row.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return g
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var r = s("./node_modules/lodash/throttle.js"),
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/controls/UnstyledInternalLink/index.tsx"),
				d = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				l = s("./src/reddit/layout/row/InlineButton/index.tsx"),
				m = s("./src/reddit/controls/Dropdown/index.m.less"),
				u = s.n(m),
				h = s("./src/reddit/controls/Dropdown/row.m.less"),
				p = s.n(h);

			function b() {
				return (b = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
					}
					return e
				}).apply(this, arguments)
			}
			var v = function(e, t) {
				var s = {};
				for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (s[r] = e[r]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (s[r[n]] = e[r[n]])
				}
				return s
			};
			class g extends i.a.Component {
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
					}, s = Object(a.a)(p.a.iconWrapper, e.iconWrapperClassName);
					return e.href ? i.a.createElement(c.a, b({}, t, {
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
						className: Object(a.a)(p.a.text, e.textClassName)
					}, e.displayText)) : i.a.createElement(l.a, b({}, t, {
						id: e.id,
						className: e.className,
						onBlur: e.onBlur,
						onClick: e.onClick,
						onKeyDown: e.onKeydown,
						onMouseDown: e.onMouseDown,
						onMouseMove: n()(this.handleMouseMove, 500)
					}), e.children && (e.noIcon ? i.a.createElement("div", null, e.children) : i.a.createElement("span", {
						className: s
					}, e.children)), e.displayText && i.a.createElement("span", {
						className: Object(a.a)(p.a.text, e.textClassName)
					}, e.displayText), e.showDropdownTriangle && i.a.createElement(d.a, {
						className: u.a.dropdownTriangle
					}))
				}
			}
			t.b = e => {
				var {
					className: t
				} = e, s = v(e, ["className"]);
				const r = Object(a.a)(p.a.row, t, {
					[p.a.mIsInteractive]: !s.noHover,
					[p.a.mIsSelected]: s.isSelected
				});
				return i.a.createElement(g, b({
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
				n = s("./src/reddit/controls/InternalLink/index.tsx"),
				o = s("./src/reddit/controls/UnstyledInternalLink/index.m.less"),
				i = s.n(o);
			t.a = r.a.wrapped(n.a, "unstyledInternalLink", i.a)
		},
		"./src/reddit/helpers/trackers/rpan.ts": function(e, t, s) {
			"use strict";
			s.d(t, "m", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			})), s.d(t, "b", (function() {
				return l
			})), s.d(t, "k", (function() {
				return m
			})), s.d(t, "l", (function() {
				return u
			})), s.d(t, "j", (function() {
				return h
			})), s.d(t, "f", (function() {
				return p
			})), s.d(t, "g", (function() {
				return b
			})), s.d(t, "d", (function() {
				return v
			})), s.d(t, "e", (function() {
				return g
			})), s.d(t, "c", (function() {
				return S
			})), s.d(t, "i", (function() {
				return w
			})), s.d(t, "h", (function() {
				return C
			}));
			var r = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				n = s("./src/reddit/selectors/telemetry.ts");
			const o = e => {
					switch (e) {
						case r.a.LIVE:
							return "stream_live";
						case r.a.VOD:
							return "stream_vod";
						case r.a.UNAVAILABLE:
							return "stream_unavailable";
						default:
							return
					}
				},
				i = (e, t) => {
					if (t) {
						const s = Object(r.h)(e, {
							streamIdFromPath: t.post.id
						});
						return {
							post: n.post(e, t.post.id),
							media: Object.assign({}, n.media(e, t.post.id, void 0, t), {
								type: o(s)
							})
						}
					}
				},
				a = e => ({
					correlationId: e.publicAccessNetwork.theaterSettings.correlationId
				}),
				c = () => e => ({
					source: "stream_du",
					action: "view",
					noun: "stream_du"
				}),
				d = () => e => ({
					source: "stream_du",
					action: "click",
					noun: "show_less"
				}),
				l = (e, t) => s => Object.assign({
					source: "stream_du",
					action: "click",
					noun: "enlarge",
					actionInfo: {
						position: t || 0
					}
				}, i(s, e)),
				m = e => t => Object.assign({
					source: "stream_player",
					action: "fail",
					noun: "stream"
				}, a(t), e && Object.assign({}, i(t, e))),
				u = e => t => Object.assign({
					source: "stream_player",
					action: "play",
					noun: "stream"
				}, a(t), i(t, e)),
				h = e => t => Object.assign({
					source: "stream_player",
					action: "complete",
					noun: "stream"
				}, a(t), i(t, e)),
				p = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "share"
				}, a(t), i(t, e)),
				b = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "upvote"
				}, a(t), i(t, e)),
				v = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "downvote"
				}, a(t), i(t, e)),
				g = e => t => Object.assign({
					source: "stream_player",
					action: "click",
					noun: "report"
				}, a(t), i(t, e)),
				S = e => t => {
					const s = Object(r.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "chat"
					}, i(t, s))
				},
				w = e => t => {
					const s = Object(r.k)(t, e);
					return Object.assign({
						source: "stream_player",
						action: "click",
						noun: "send_chat"
					}, i(t, s))
				},
				C = e => t => ({
					source: "stream_player",
					action: "click",
					noun: "confirm_subreddit",
					targetSubreddit: {
						name: e.name.toLowerCase()
					}
				})
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
				n = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/DropdownTriangle/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(o.b)("dropdownTriangle"), " ").concat(e.className)
			}), "DropdownTriangle", a.a);
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
				n = s.n(r),
				o = s("./src/reddit/icons/fonts/helpers.tsx"),
				i = s("./src/reddit/icons/fonts/Menu/index.m.less"),
				a = s.n(i);
			const c = s("./src/lib/lessComponent.tsx").a.wrapped(e => n.a.createElement("i", {
				className: "".concat(Object(o.b)("menu"), " ").concat(e.className)
			}), "MenuIcon", a.a);
			t.a = c
		},
		"./src/reddit/icons/fonts/Share/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r),
				o = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/fonts/helpers.tsx"),
				a = s("./src/reddit/icons/fonts/commonStyles.m.less"),
				c = s.n(a);
			t.a = e => n.a.createElement("i", {
				className: Object(o.a)(Object(i.b)("share"), c.a.shareIcon, e.className)
			})
		},
		"./src/reddit/icons/fonts/commonStyles.m.less": function(e, t, s) {
			e.exports = {
				iconFont: "WxKparxaBCy4-EWML7xc3",
				approveIcon: "MAe2tslj1FAD6GliiZ3it",
				commentIcon: "_3ch9jJ0painNf41PmU4F9i",
				lockIcon: "XHMWG1CPWX8RXeNg-o5-R",
				modActions: "_3phKxmomoio9ulzAoL4XhZ",
				moderateIcon: "_2Xt7ltq8LezAkf8ZF8x9dv",
				removeIcon: "_2IVG3b9-lczna8tonL9FWB",
				reportIcon: "_1MDjRAzxk1RSTB12748O1v",
				shareIcon: "xwmljjCrovDE5C9MasZja",
				spamIcon: "_1Gn6JH0U8GJtJXSIc54IMU",
				stickyIcon: "hMF1wBi2Z6Lh9zHskfhX1",
				calendarIcon: "_2YXLfgRGcJoCJROcTAGqir",
				adminIcon: "_3ACtZ0jvC5KDN8RNxR0lXX",
				archivedIcon: "_2trXhUAJMhIhxp8a2zvOVP",
				liveIcon: "_3cdJ6BHH65ws78AzuO0KLw"
			}
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Report/index.tsx": function(e, t, s) {
			"use strict";
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
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
			var r = s("./node_modules/react/index.js"),
				n = s.n(r);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 30 30",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M20.7094669,9.4275 L9.29053307,9.4275 C8.86319398,9.4275 8.51636806,9.0915 8.51636806,8.6775 C8.51636806,8.2635 8.86319398,7.9275 9.29053307,7.9275 L20.7094669,7.9275 C21.136806,7.9275 21.4836319,8.2635 21.4836319,8.6775 C21.4836319,9.0915 21.136806,9.4275 20.7094669,9.4275 M20.7094669,14.142 L9.29053307,14.142 C8.86319398,14.142 8.51636806,13.806 8.51636806,13.392 C8.51636806,12.978 8.86319398,12.642 9.29053307,12.642 L20.7094669,12.642 C21.136806,12.642 21.4836319,12.978 21.4836319,13.392 C21.4836319,13.806 21.136806,14.142 20.7094669,14.142 M20.7094669,18.858 L9.29053307,18.858 C8.86319398,18.858 8.51636806,18.522 8.51636806,18.108 C8.51636806,17.6925 8.86319398,17.358 9.29053307,17.358 L20.7094669,17.358 C21.136806,17.358 21.4836319,17.6925 21.4836319,18.108 C21.4836319,18.522 21.136806,18.858 20.7094669,18.858 M20.7094669,23.5725 L9.29053307,23.5725 C8.86319398,23.5725 8.51636806,23.2365 8.51636806,22.8225 C8.51636806,22.407 8.86319398,22.0725 9.29053307,22.0725 L20.7094669,22.0725 C21.136806,22.0725 21.4836319,22.407 21.4836319,22.8225 C21.4836319,23.2365 21.136806,23.5725 20.7094669,23.5725 M23.95167,4.5 L20.4570891,4.5 C19.9198186,3.6075 18.9335324,3 17.7893165,3 L12.2106835,3 C11.0664676,3 10.0801814,3.6075 9.54291086,4.5 L6.04833002,4.5 C5.19365185,4.5 4.5,5.172 4.5,6 L4.5,25.5 C4.5,26.328 5.19365185,27 6.04833002,27 L23.95167,27 C24.8063482,27 25.5,26.328 25.5,25.5 L25.5,6 C25.5,5.172 24.8063482,4.5 23.95167,4.5"
			})))
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
				n = s.n(r),
				o = s("./node_modules/react/index.js"),
				i = s.n(o),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/react-router-redux/es/index.js"),
				d = s("./node_modules/reselect/es/index.js"),
				l = s("./src/lib/classNames/index.ts"),
				m = s("./src/lib/extractQueryParams/index.ts"),
				u = s("./src/reddit/actions/login.ts"),
				h = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				p = s("./src/higherOrderComponents/makeAsync.tsx"),
				b = s("./src/lib/loadWithRetries/index.ts");
			var v = Object(p.a)({
					getComponent: () => Object(b.a)(() => s.e("RpanOnboardingModal").then(s.bind(null, "./src/reddit/components/PublicAccessNetwork/Modals/Onboarding/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				g = s("./node_modules/fbt/lib/FbtPublic.js"),
				S = s("./node_modules/lodash/throttle.js"),
				w = s.n(S),
				C = s("./src/reddit/actions/media.ts"),
				f = s("./src/reddit/actions/publicAccessNetwork/api.ts"),
				E = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				O = s("./src/lib/makeActionCreator/index.ts");
			const x = Object(O.a)(E.C),
				y = Object(O.a)(E.V),
				I = e => async t => {
					t(x(e))
				}, P = Object(O.a)(E.M), j = Object(O.a)(E.R);
			var N = s("./src/reddit/actions/publicAccessNetwork/rpanWorker.ts"),
				k = s("./src/reddit/actions/publicAccessNetwork/theaterSettings.ts"),
				_ = s("./src/reddit/actions/publicAccessNetwork/userSettings.ts"),
				L = s("./src/reddit/actions/reportFlow.ts"),
				V = s("./src/reddit/components/HlsVideo/index.tsx"),
				M = s("./src/reddit/components/ReportFlow/index.tsx"),
				T = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/reddit/constants/history.ts"),
				A = s("./src/reddit/constants/keycodes.ts"),
				D = s("./src/reddit/helpers/dom/index.ts"),
				B = s("./src/reddit/helpers/trackers/rpan.ts"),
				F = s("./src/reddit/helpers/trackers/screenview.ts"),
				U = s("./src/reddit/icons/svgs/Close/index.tsx"),
				W = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				H = s("./src/reddit/selectors/media.ts"),
				z = s("./src/reddit/selectors/PublicAccessNetwork/streams.ts"),
				G = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts"),
				J = s("./src/config.ts"),
				K = s("./src/reddit/actions/post.ts"),
				Y = s("./src/reddit/components/HTML5StreamPlayer/index.tsx"),
				X = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				q = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				Z = s("./src/reddit/components/OverflowMenu/index.tsx"),
				Q = s("./src/reddit/controls/Dropdown/Row.tsx"),
				$ = s("./src/reddit/icons/fonts/DropdownTriangle/index.tsx"),
				ee = s("./src/reddit/components/PublicAccessNetwork/Theater/RecommendedViewerSubredditsMenu/index.m.less"),
				te = s.n(ee);
			const {
				fbt: se
			} = s("./node_modules/fbt/lib/FbtPublic.js");
			var re = e => {
					let {
						label: t,
						onSelect: s,
						onToggle: r,
						subreddits: n
					} = e;
					return i.a.createElement(Z.b, {
						className: te.a.overflowMenu,
						dropdownClassName: te.a.dropdown,
						defaultButtonOutline: !0,
						disabled: n.length < 1,
						dropdownId: "rpan-recommended-viewer-subreddits-dropdown",
						icon: i.a.createElement("div", {
							className: te.a.overflowMenuIcon
						}, t, i.a.createElement($.a, {
							className: te.a.dropdownTriangle
						})),
						onClick: r
					}, i.a.createElement("div", {
						className: te.a.dropdownLabel
					}, se._("Pick a Community", null, {
						hk: "8MoVj"
					})), n.map(e => i.a.createElement(Q.b, {
						className: te.a.dropdownRow,
						displayText: e.prefixedName,
						iconWrapperClassName: te.a.overflowItemIconWrapper,
						key: "".concat("rpan-recommended-viewer-subreddits-dropdown", "-").concat(e.prefixedName),
						onClick: () => s(e)
					})))
				},
				ne = s("./src/reddit/components/HTML5StreamPlayer/ControlBar/index.tsx"),
				oe = s("./src/reddit/components/PublicAccessNetwork/Theater/ScrubberPanel/index.m.less"),
				ie = s.n(oe);
			class ae extends o.Component {
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
						isLive: t,
						isMuted: s,
						isPaused: r,
						isVisible: n,
						onPlayPauseToggle: o,
						onVideoPositionUpdate: a,
						seekBarRef: c,
						settingChange: d,
						setVolume: m,
						videoCurrentTime: u,
						videoTotalTime: h,
						volume: p,
						volumeRef: b
					} = this.props;
					return i.a.createElement(ne.a, {
						className: Object(l.a)(e, ie.a.scrubberBar, {
							[ie.a.visible]: n
						}),
						currentTime: u || 0,
						hasAudio: !0,
						hideControlBar: !1,
						hideFullScreenButton: !0,
						hideGradient: !0,
						isFullScreen: !1,
						isListing: !1,
						isLive: t,
						isMuted: s,
						isPaused: r,
						playPauseVideo: o,
						ref: this.setControlBarRef,
						seekBarRef: c,
						settingChange: d,
						setVideoPosition: a,
						setVolume: m,
						showSettingsIcon: !1,
						showVolumeIcon: !0,
						toggleMute: this.onToggleMute,
						totalTime: h || 0,
						volume: p,
						volumeRef: b
					})
				}
			}
			var ce = ae,
				de = s("./node_modules/lodash/debounce.js"),
				le = s.n(de),
				me = s("./src/lib/prettyPrintNumber/index.ts"),
				ue = s("./src/reddit/endpoints/publicAccessNetwork/index.ts"),
				he = s("./src/reddit/models/Vote/index.ts"),
				pe = s("./src/reddit/selectors/user.ts");
			Object(O.a)(E.B);
			var be = s("./src/reddit/i18n/components.tsx"),
				ve = s("./src/reddit/i18n/utils.ts"),
				ge = s("./src/reddit/icons/fonts/Downvote/index.tsx"),
				Se = s("./src/reddit/icons/fonts/Upvote/index.tsx"),
				we = s("./src/reddit/components/PublicAccessNetwork/Theater/VotePanel/index.m.less"),
				Ce = s.n(we);
			const fe = Object(d.c)({
				currentStream: (e, t) => {
					let {
						currentStreamId: s
					} = t;
					return Object(z.k)(e, s)
				}
			});
			class Ee extends i.a.Component {
				constructor(e) {
					super(e), this.isVoteActive = e => this.state.displayedVoteState === e, this.upVotes = () => this.calculateVotes(he.a.upvoted), this.downVotes = () => this.calculateVotes(he.a.downvoted), this.calculateVotes = e => {
						const t = this.props.currentStream;
						if (!t) return 0;
						const s = e === he.a.upvoted ? t.upvotes : t.downvotes;
						return null === t.post.voteState && this.state.displayedVoteState === e || this.state.displayedVoteState === e && null !== t.post.voteState && Object(he.e)(t.post.voteState) !== e ? s + 1 : s
					}, this.onVoteUp = le()(() => this.vote(he.a.upvoted), E.W, {
						leading: !0,
						trailing: !1
					}), this.onVoteDown = le()(() => this.vote(he.a.downvoted), E.W, {
						leading: !0,
						trailing: !1
					}), this.state = {
						displayedVoteState: he.a.notVoted
					}, this.onVoteDown = this.onVoteDown.bind(this), this.onVoteUp = this.onVoteUp.bind(this)
				}
				componentDidMount() {
					const e = this.props.currentStream;
					e && e.post.voteState && this.setState(Object.assign({}, this.state, {
						displayedVoteState: Object(he.e)(e.post.voteState)
					}))
				}
				componentDidUpdate(e) {
					const t = this.props.currentStream,
						s = e.currentStream;
					t && (s && s.post.id === t.post.id || this.setState(Object.assign({}, this.state, {
						displayedVoteState: null !== t.post.voteState ? Object(he.e)(t.post.voteState) : he.a.notVoted
					})))
				}
				render() {
					const e = this.props.currentStream;
					if (!e) return null;
					const t = this.props.isLive ? e.continuous_watchers : e.unique_watchers;
					return i.a.createElement("div", {
						className: Ce.a.statsPanel
					}, i.a.createElement("div", {
						className: Ce.a.voteContainer
					}, i.a.createElement("button", {
						className: Object(l.a)(Ce.a.upButton, {
							[Ce.a.activeVote]: this.isVoteActive(he.a.upvoted)
						}),
						onClick: this.onVoteUp,
						value: "upvote",
						"aria-label": Object(ve.c)("upvote")
					}, i.a.createElement(Se.a, {
						className: Ce.a.voteIcon
					})), i.a.createElement("p", {
						className: Ce.a.votesCounter
					}, Object(me.b)(this.upVotes()))), i.a.createElement("div", {
						className: Ce.a.watchingContainer
					}, i.a.createElement("div", {
						className: Ce.a.watchingCounter
					}, Object(me.b)(t)), i.a.createElement("p", {
						className: Ce.a.watchingCaption
					}, this.props.isLive ? i.a.createElement(be.c, null, "Watching") : i.a.createElement(be.c, null, "Views"))), i.a.createElement("div", {
						className: Ce.a.voteContainer
					}, i.a.createElement("button", {
						className: Object(l.a)(Ce.a.downButton, {
							[Ce.a.activeVote]: this.isVoteActive(he.a.downvoted)
						}),
						onClick: this.onVoteDown,
						value: "downvote",
						"aria-label": Object(ve.c)("downvote")
					}, i.a.createElement(ge.a, {
						className: Ce.a.voteIcon
					})), i.a.createElement("p", {
						className: Ce.a.votesCounter
					}, Object(me.b)(this.downVotes()))))
				}
				vote(e) {
					const t = this.props.currentStream;
					if (t) {
						if (e === this.state.displayedVoteState) return this.props.vote(t.post.id, he.a.notVoted), void this.setState(Object.assign({}, this.state, {
							displayedVoteState: he.a.notVoted
						}));
						this.props.vote(t.post.id, e), this.setState(Object.assign({}, this.state, {
							displayedVoteState: e
						})), e === he.a.upvoted ? this.props.sendEvent(Object(B.g)(t)) : this.props.sendEvent(Object(B.d)(t))
					}
				}
			}
			var Oe = Object(a.b)(fe, (e, t) => ({
					vote: (t, s) => e(((e, t) => async (s, r, n) => {
						let {
							apiContext: o
						} = n;
						if (!Object(pe.G)(r())) return void s(Object(u.e)());
						await Object(h.i)(e);
						const i = Object(z.k)(r(), e);
						null !== i.post.voteState && Object(he.e)(i.post.voteState) === t || await Object(ue.g)(o(), e, t)
					})(t, s))
				}))(Ee),
				xe = s("./src/lib/lessComponent.tsx"),
				ye = s("./src/lib/opener/index.ts"),
				Ie = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				Pe = s("./src/reddit/icons/fonts/Share/index.tsx"),
				je = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				Ne = s("./src/reddit/icons/svgs/PublicAccessNetwork/index.tsx"),
				ke = s("./src/reddit/icons/svgs/Report/index.tsx"),
				_e = s("./src/reddit/icons/svgs/Rules/index.tsx"),
				Le = s("./src/reddit/icons/svgs/VideoMute/index.tsx"),
				Ve = s("./src/reddit/icons/svgs/VideoReplay/index.tsx"),
				Me = s("./src/reddit/icons/svgs/VideoShare/index.m.less"),
				Te = s.n(Me);
			var Re = e => i.a.createElement("svg", {
					className: Object(l.a)(Te.a.icon, e.className),
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
				Ae = s("./src/reddit/icons/svgs/VideoVolume/index.tsx"),
				De = s("./src/reddit/components/PublicAccessNetwork/Theater/Overlay/index.m.less"),
				Be = s.n(De);
			const Fe = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: Be.a.shareButton,
						onClick: t,
						"aria-label": Object(ve.c)("share video"),
						value: "share"
					}, i.a.createElement(Pe.a, {
						className: Be.a.menuIcon
					}))
				},
				Ue = e => {
					let {
						isMuted: t,
						onToggle: s
					} = e;
					return i.a.createElement("button", {
						className: Be.a.muteButton,
						onClick: s,
						"aria-label": Object(ve.c)("mute video"),
						value: "mute"
					}, t ? i.a.createElement(Le.a, {
						className: Be.a.volumeIcon
					}) : i.a.createElement(Ae.a, {
						className: Be.a.volumeIcon
					}))
				},
				We = xe.a.wrapped(Ie.a, "menuIcon", Be.a),
				He = e => {
					let {
						onClick: t,
						onHideClick: s,
						onReportClick: r
					} = e;
					return i.a.createElement(Z.b, {
						className: Be.a.menuButton,
						defaultButtonOutline: !0,
						dropdownId: "rpan-overlay-menu",
						icon: i.a.createElement(We, null),
						onClick: t
					}, i.a.createElement(Q.b, {
						className: Be.a.overflowItem,
						displayText: Object(ve.c)("View rules"),
						iconWrapperClassName: Be.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-rules"),
						onClick: () => Object(ye.d)(E.P, ye.c.BLANK)
					}, i.a.createElement(_e.a, {
						className: Be.a.overflowItemIcon
					})), i.a.createElement(Q.b, {
						className: Be.a.overflowItem,
						displayText: Object(ve.c)("Visit RPAN community"),
						iconWrapperClassName: Be.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-community"),
						onClick: () => Object(ye.d)(E.N, ye.c.BLANK)
					}, i.a.createElement(Ne.a, {
						className: Be.a.overflowItemIcon
					})), i.a.createElement(Q.b, {
						className: Be.a.overflowItem,
						displayText: Object(ve.c)("Report"),
						iconWrapperClassName: Be.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-report"),
						onClick: r
					}, i.a.createElement(ke.a, {
						className: Be.a.overflowItemIcon
					})), i.a.createElement(Q.b, {
						className: Be.a.overflowItem,
						displayText: Object(ve.c)("Hide"),
						iconWrapperClassName: Be.a.overflowItemIconWrapper,
						key: "".concat("rpan-overlay-menu", "-hide"),
						onClick: s
					}, i.a.createElement(je.a, {
						className: Be.a.overflowItemIcon
					})))
				},
				ze = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: Be.a.promptButton,
						onClick: t
					}, i.a.createElement(Ve.a, null), i.a.createElement("span", null, i.a.createElement(be.c, null, "Replay Video")))
				},
				Ge = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: Be.a.promptButton,
						onClick: t
					}, i.a.createElement(Re, null), i.a.createElement("span", null, i.a.createElement(be.c, null, "Share Video")))
				},
				{
					fbt: Je
				} = s("./node_modules/fbt/lib/FbtPublic.js"),
				Ke = Object(d.c)({
					currentStream: (e, t) => {
						let {
							currentStreamId: s
						} = t;
						return s ? Object(z.k)(e, s) : void 0
					},
					inStreamingSubredditIntegration: W.b,
					isApiError: (e, t) => {
						let {
							currentStreamId: s
						} = t;
						return Object(q.d)(e, s)
					},
					isBatchApiError: q.f,
					isBatchPending: q.g,
					isConfigError: q.h,
					isIntroInProgress: G.b,
					isMenuOpened: e => "rpan-overlay-menu" === e.tooltipId || "rpan-recommended-viewer-subreddits-dropdown" === e.tooltipId,
					lastBatchApiRequestTs: q.j,
					recommendedViewerSubredditOptions: q.k
				});
			class Ye extends o.Component {
				constructor(e) {
					super(e), this.onMouseEnter = () => {
						this.hoverTimeout = window.setTimeout(() => this.setState({
							isHovered: !0
						}), E.n)
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
							settingChange: Y.a.Volume
						}), s.handleMouseDown(e)), t && t.parentRect && t.parentRect.contains(e.target) && (this.setState({
							settingChange: Y.a.SeekBar
						}), t.handleMouseDown(e))
					}, this.onMouseMove = e => {
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === Y.a.SeekBar && t && t.handleMouseMove(e), this.state.settingChange === Y.a.Volume && s && s.handleMouseMove(e)
					}, this.onMouseUp = e => {
						e.stopPropagation();
						const {
							seekBar: t,
							volumeControl: s
						} = this;
						this.state.settingChange === Y.a.SeekBar && t && (t.handleMouseUp(e), this.props.onScrubbing()), this.state.settingChange === Y.a.Volume && s && s.handleMouseUp(e), this.setState({
							settingChange: void 0
						})
					}, this.isVisible = () => this.state.isHovered || this.props.isVisible || this.props.isMenuOpened, this.onCopyLink = () => {
						const {
							copyLink: e,
							currentStream: t,
							onShareVideo: s,
							sendEvent: r
						} = this.props;
						t && (e("".concat(J.a.redditUrl).concat(t.share_link)), s(), r(Object(B.f)(t)))
					}, this.state = {
						isHovered: !1,
						settingChange: void 0
					}
				}
				componentWillUnmount() {
					window.clearTimeout(this.hoverTimeout)
				}
				render() {
					const {
						currentStream: e,
						inStreamingSubredditIntegration: t,
						isIntroInProgress: s,
						isLive: r,
						isMuted: n,
						isPaused: o,
						isUnavailable: a,
						onHide: c,
						onReport: d,
						onPlayPauseToggle: m,
						onToggleMenu: u,
						onVideoPositionUpdate: h,
						sendEvent: p,
						setVolume: b,
						toggleMute: v,
						videoCurrentTime: g,
						videoTotalTime: S,
						volume: w
					} = this.props;
					return i.a.createElement("div", {
						className: Object(l.a)(Be.a.overlay, {
							[Be.a.visible]: this.isVisible()
						}),
						onMouseDown: this.onMouseDown,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseMove,
						onMouseUp: this.onMouseUp
					}, !s && i.a.createElement("div", {
						className: Be.a.overlayTop
					}, t && this.renderRecommendedViewerSubreddit(), e && !a && i.a.createElement(i.a.Fragment, null, !t && this.renderTitleContainer(), i.a.createElement(Fe, {
						onClick: this.onCopyLink
					}), i.a.createElement(He, {
						onClick: u,
						onHideClick: c,
						onReportClick: d
					}))), t && e && !s && !a && i.a.createElement("div", {
						className: Be.a.overlayTitle
					}, this.renderTitleContainer()), i.a.createElement("div", {
						className: Be.a.overlayCenter
					}, this.getContent()), e && !s && !a && i.a.createElement("div", {
						className: Be.a.overlayBottom
					}, i.a.createElement(Oe, {
						currentStreamId: e.post.id,
						isLive: r,
						sendEvent: p
					}), i.a.createElement(ce, {
						isLive: r,
						isMuted: n,
						isPaused: o,
						isVisible: this.isVisible(),
						onPlayPauseToggle: m,
						onVideoPositionUpdate: h,
						seekBarRef: e => this.seekBar = e,
						settingChange: this.state.settingChange,
						setVolume: b,
						toggleMute: v,
						videoCurrentTime: g,
						videoTotalTime: S,
						volume: w,
						volumeRef: e => this.volumeControl = e
					})))
				}
				renderRecommendedViewerSubreddit() {
					const {
						onSelectSubreddit: e,
						recommendedViewerSubredditOptions: t,
						related: s,
						subreddit: r
					} = this.props;
					let n = "",
						o = "";
					"home" === s ? (n = "All", o = "All") : "r/popular" === s ? (n = "Popular", o = "r/popular") : r ? (n = r.replace(/^r\//, ""), o = r) : (n = "All", o = "All");
					const a = t.filter(e => e.prefixedName !== o);
					return i.a.createElement("div", {
						className: Be.a.menuContainer
					}, i.a.createElement(re, {
						label: n,
						onSelect: e,
						subreddits: a
					}))
				}
				renderTitleContainer() {
					const {
						currentStream: e,
						isLive: t
					} = this.props;
					if (e) return i.a.createElement("div", {
						className: Be.a.titleContainer
					}, i.a.createElement("h1", {
						className: Be.a.videoTitle
					}, e.post.title), !t && i.a.createElement("div", {
						className: Be.a.RecordedLabel
					}, Je._("Recorded Live", null, {
						hk: "3NZqt4"
					})))
				}
				getContent() {
					const {
						currentStream: e,
						currentStreamId: t,
						isApiError: s,
						isBatchApiError: r,
						isBatchPending: n,
						isConfigError: o,
						isIntroInProgress: a,
						isLoading: c,
						isMuted: d,
						isUnavailable: l,
						lastBatchApiRequestTs: m,
						onReplayVideo: u,
						showErrorPrompt: h,
						showStreamEndedPrompt: p,
						toggleMute: b
					} = this.props;
					return h || a && o || t && s || !t && r ? i.a.createElement("div", {
						className: Be.a.prompt
					}, Je._("Connection issues", null, {
						hk: "24LpRV"
					})) : a ? i.a.createElement("div", {
						className: Be.a.intro
					}, i.a.createElement(Ue, {
						isMuted: d,
						onToggle: b
					})) : l || !t && !r && !n && m ? null : c ? i.a.createElement("div", {
						className: Be.a.prompt
					}, Je._("Tuning...", null, {
						hk: "dhDpR"
					})) : e && e.stream.state === X.b.DISCONNECTED ? i.a.createElement("div", {
						className: Be.a.prompt
					}, Je._("Broadcast paused", null, {
						hk: "1dtsGI"
					})) : p ? i.a.createElement("div", {
						className: Be.a.prompt
					}, i.a.createElement("div", {
						className: Be.a.promptButtonSet
					}, i.a.createElement(ze, {
						onClick: u
					}), i.a.createElement(Ge, {
						onClick: this.onCopyLink
					}))) : null
				}
			}
			var Xe = Object(a.b)(Ke, (e, t) => ({
				copyLink: t => e(Object(K.w)(t)),
				onHide: () => {
					t.currentStreamId && (e(Object(K.N)(t.currentStreamId, !0, !0, !0)), e(I(t.currentStreamId)))
				}
			}))(Ye);
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			Object(O.a)(E.q);
			const qe = Object(O.a)(E.y),
				Ze = (e, t) => async (s, r) => {
					const n = r(),
						o = Date.now(),
						i = e.map(e => Object(z.k)(n, e)).filter(Boolean).map(e => ({
							imageUrl: "".concat(e.stream.thumbnail, "?").concat(o),
							postId: e.post.id
						})).filter(e => !!e.imageUrl);
					return await Qe(i, t)
				}, Qe = (e, t) => Promise.all(e.map(e => $e(e.imageUrl).then(s => s ? {
					postId: e.postId,
					imageUrl: e.imageUrl
				} : t ? {
					postId: e.postId,
					imageUrl: t
				} : void 0))).then(e => e.filter(e => !!e)), $e = e => new Promise((t, s) => {
					const r = new Image;
					r.onload = () => t(), r.onerror = () => s(), r.src = e
				}).then(() => !0, () => !1);
			var et = s("./src/reddit/components/PublicAccessNetwork/Theater/StaticScreen/index.m.less"),
				tt = s.n(et);
			const {
				fbt: st
			} = s("./node_modules/fbt/lib/FbtPublic.js"), rt = Object(d.c)({
				isIntroInProgress: G.b,
				previewUrl: (e, t) => {
					let {
						currentStream: s
					} = t;
					return s ? Object(z.i)(e, {
						streamId: s.post.id
					}) : void 0
				}
			});
			class nt extends o.Component {
				constructor(e) {
					super(e)
				}
				componentDidMount() {
					const {
						currentStream: e,
						preloadImages: t,
						previousStream: s,
						nextStream: r
					} = this.props, n = [];
					e && n.push(e.post.id), s && n.push(s.post.id), r && n.push(r.post.id), n.length > 0 && t(n)
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						nextStream: s,
						preloadImages: r,
						previousStream: n
					} = this.props, o = [];
					t && this.isStreamChanged(t, e.currentStream) && o.push(t.post.id), n && this.isStreamChanged(n, e.previousStream) && o.push(n.post.id), s && this.isStreamChanged(s, e.nextStream) && o.push(s.post.id), o.length > 0 && r(o)
				}
				render() {
					const {
						isIntroInProgress: e,
						previewUrl: t
					} = this.props;
					return i.a.createElement("div", {
						className: tt.a.staticContainer
					}, i.a.createElement("div", {
						className: t ? "" : tt.a.tvNoise,
						"aria-label": st._("video static", null, {
							hk: "3FA8fk"
						})
					}), t && !e && i.a.createElement("div", {
						className: tt.a.previewContainer,
						"aria-label": st._("preview of video", null, {
							hk: "4piisq"
						}),
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}))
				}
				isStreamChanged(e, t) {
					return !!e && (t && e.post.id !== t.post.id || !t)
				}
			}
			var ot = Object(a.b)(rt, (e, t) => ({
					preloadImages: t => e(((e, t) => async (s, r) => {
						const n = await s(Ze(e, t));
						s(qe(n))
					})(t))
				}))(nt),
				it = s("./src/lib/constants/index.ts"),
				at = s("./src/lib/makeCommentsPageKey/index.ts"),
				ct = s("./src/lib/makeDraftKey/index.ts"),
				dt = s("./src/reddit/actions/page.ts"),
				lt = s("./src/reddit/components/CommentCreation/LoggedOutCommentForm/index.tsx"),
				mt = s("./src/reddit/components/CommentsChat/Loader.ts"),
				ut = s("./src/reddit/components/CommentsChat/MessageInput/Loader.tsx"),
				ht = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				pt = s("./src/reddit/components/GildModal/Loader.tsx"),
				bt = s("./src/reddit/models/PostDraft/index.ts"),
				vt = s("./src/reddit/selectors/gild.ts"),
				gt = s("./src/reddit/selectors/posts.ts"),
				St = s("./src/reddit/components/PublicAccessNetwork/Theater/StreamingChat/index.m.less"),
				wt = s.n(St);
			const Ct = Object(d.c)({
				gildModalIsOpen: (e, t) => {
					let {
						postId: s
					} = t;
					const r = Object(ht.b)(s);
					return Object(vt.c)(e, r)
				},
				isDisabled: (e, t) => Object(z.e)(e, {
					streamIdFromPath: t.postId
				}),
				isLoggedIn: pe.G,
				isPostDataLoaded: (e, t) => {
					let {
						postId: s
					} = t;
					return !!Object(gt.I)(e, {
						postId: s
					})
				},
				language: pe.P
			});
			class ft extends o.Component {
				constructor(e) {
					super(e), this.onChatClick = () => {
						this.props.sendEvent(Object(B.c)(this.props.postId))
					}
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
						isPostDataLoaded: n,
						language: o,
						location: a,
						openLoginModal: c,
						openRegisterModal: d,
						sendEvent: m,
						subredditId: u
					} = this.props, h = Object(at.a)(e), p = Object(ct.a)(bt.c.replyToPost, e);
					return s ? i.a.createElement("div", {
						className: Object(l.a)(wt.a.streamingChat, wt.a.prompt)
					}, i.a.createElement(be.c, null, "Chat has been disabled")) : n ? i.a.createElement("div", {
						"aria-label": Object(ve.c)("chat window"),
						className: wt.a.streamingChat,
						onClick: this.onChatClick
					}, i.a.createElement(mt.a, {
						className: wt.a.chatScroller,
						emptyStateClassName: wt.a.emptyState,
						isLivestreaming: !0,
						isLoading: !1,
						key: "commentsChat",
						postId: e,
						subredditId: u,
						commentsPageKey: h
					}), r ? i.a.createElement(ut.a, {
						key: "chatCommentsForm",
						language: o,
						postId: e,
						draftKey: p,
						commentsPageKey: h,
						isEditing: !1,
						sendEvent: m,
						isLivestreaming: !0
					}) : i.a.createElement(lt.a, {
						isLiveStreaming: !0,
						key: "chatLoggedOutForm",
						language: o,
						location: a,
						openLoginModal: c,
						openRegisterModal: d,
						origin
					}), t && i.a.createElement(pt.a, null)) : i.a.createElement("div", {
						className: Object(l.a)(wt.a.streamingChat, wt.a.prompt)
					}, i.a.createElement(be.c, null, "Loading..."))
				}
			}
			var Et = Object(a.b)(Ct, (e, t) => {
					let {
						postId: s
					} = t;
					return {
						loadComments: () => e(Object(dt.q)(s, void 0, {
							sort: it.r.CHAT
						}, it.r.CHAT)),
						openLoginModal: () => e(Object(u.e)()),
						openRegisterModal: () => e(Object(u.f)())
					}
				})(ft),
				Ot = e => i.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M16,9H6.41l4.29-4.29A1,1,0,0,0,9.29,3.29l-6,6a1,1,0,0,0,0,1.41l6,6a1,1,0,0,0,1.41-1.41L6.41,11H16a1,1,0,0,0,0-2Z"
				})),
				xt = e => i.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, i.a.createElement("path", {
					d: "M16.92,9.62a1,1,0,0,0-.22-.33l-6-6A1,1,0,0,0,9.29,4.71L13.59,9H4a1,1,0,0,0,0,2h9.59L9.29,15.29a1,1,0,1,0,1.41,1.41l6-6a1,1,0,0,0,.22-1.09Z"
				})),
				yt = s("./src/reddit/components/PublicAccessNetwork/Theater/SwitchButtons/index.m.less"),
				It = s.n(yt);
			const Pt = e => {
				let {
					isNext: t,
					onClick: s,
					stream: r
				} = e;
				return i.a.createElement("div", {
					className: Object(l.a)(It.a.switchContainer, t ? It.a.switchContainerNext : It.a.switchContainerPrevious)
				}, i.a.createElement("button", {
					className: It.a.switchButton,
					disabled: !r,
					onClick: s,
					"aria-label": t ? Object(ve.c)("forward arrow") : Object(ve.c)("back arrow"),
					value: t ? "forward" : "back"
				}, i.a.createElement("div", {
					className: It.a.streamThumbnail,
					style: r ? {
						backgroundImage: "url(".concat(r.stream.thumbnail, ")")
					} : {}
				}), t ? i.a.createElement(xt, {
					className: It.a.arrowIcon
				}) : i.a.createElement(Ot, {
					className: It.a.arrowIcon
				})))
			};
			var jt = e => i.a.createElement(i.a.Fragment, null, i.a.createElement(Pt, {
					isNext: !1,
					onClick: e.onPrevious,
					stream: e.previousStream
				}), i.a.createElement(Pt, {
					isNext: !0,
					onClick: e.onNext,
					stream: e.nextStream
				})),
				Nt = s("./src/reddit/components/PublicAccessNetwork/Theater/index.m.less"),
				kt = s.n(Nt);
			const _t = Object(d.c)({
					currentStream: z.c,
					currentStreamStartTime: z.d,
					currentHlsUrl: z.b,
					inStreamingSubredditIntegration: W.b,
					isIntroInProgress: G.b,
					isMuted: e => e.publicAccessNetwork.userSettings.isMuted,
					isReportFlowOpen: (e, t) => {
						let {
							streamIdFromPath: s
						} = t;
						return e.reportFlow.postOrCommentId === Object(h.k)(s || "")
					},
					lastChatActivityUtcTs: G.c,
					nextStream: z.f,
					nextTopStream: z.g,
					playbackState: z.h,
					previousStream: z.j,
					volume: H.b
				}),
				Lt = Object(a.b)(_t, (e, t) => ({
					closeLocation: () => e(Object(c.b)(t.location.state[R.a.CloseLocation])),
					fetchPostForStream: t => e(Object(f.a)(t)),
					subscribeConfig: () => e(N.a.subscribeConfig(t.related || t.subreddit)),
					subscribeStreams: () => e(N.a.subscribeStreams(t.related || t.subreddit)),
					onRecommendedViewerSubredditsSubscribe: () => e(N.a.subscribeRecommendedViewerSubreddits()),
					onReportModalRequested: t => e(Object(L.j)(t, void 0, !0)),
					onStatsSubscribe: t => e(N.a.subscribeStats(t)),
					onHeartbeatSubscribe: t => e(N.a.subscribeHeartbeat(t)),
					receiveHlsStreamEnded: t => e(Object(h.b)(t)),
					receiveHlsStreamRemoved: t => e(Object(h.c)(t)),
					removeStreamFromHistory: t => e(I(t)),
					setNewCorrelationId: () => e(Object(k.b)()),
					setIntroFinishedStatus: t => e(Object(k.c)({
						isIntroFinished: t
					})),
					setMuteSettings: t => e(Object(_.b)({
						isMuted: t
					})),
					setVideoVolume: t => e(C.e(t)),
					updateVideoTimestamp: (t, s) => e(j({
						streamId: t,
						timestamp: s
					})),
					visitStream: t => e((e => async t => {
						t(y(e))
					})(t)),
					resetHistory: () => e(P())
				}));
			class Vt extends o.Component {
				constructor(e) {
					super(e), this.unsubscribeConfig = () => {}, this.unsubscribeStreams = () => {}, this.onCurrentTimeChanged = e => {
						this.onCurrentTimeChangedThrottled(e), this.state.videoCurrentTime !== e && this.setState({
							videoCurrentTime: e
						})
					}, this.onCurrentTimeChangedThrottled = w()(e => {
						const {
							currentStream: t,
							isIntroInProgress: s,
							updateVideoTimestamp: r
						} = this.props;
						!s && t && this.isCurrentStreamWatchable() && r(t.post.id, e)
					}, E.o), this.onVideoPlayerPositionUpdate = e => {
						this.state.videoCurrentTime !== e && (this.setState({
							videoCurrentTime: e
						}), this.hlsVideoApi && this.hlsVideoApi.setCurrentTime(e))
					}, this.onNextStream = w()(() => {
						const {
							nextStream: e
						} = this.props;
						e && this.goToStream(e)
					}, E.p, {
						leading: !0,
						trailing: !1
					}), this.onPreviousStream = w()(() => {
						const {
							previousStream: e
						} = this.props;
						e && this.goToStream(e)
					}, E.p, {
						leading: !0,
						trailing: !1
					}), this.onNextStreamKeyHandler = e => {
						Object(D.g)(e.target) ? e.stopPropagation() : e.keyCode === A.a.ArrowRight ? this.onNextStream() : e.keyCode === A.a.ArrowLeft && this.onPreviousStream()
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
						this.cancelSwitchingOnStreamEnded()
					}, this.onToggleMenu = () => {
						this.cancelSwitchingOnStreamEnded()
					}, this.setVideoMute = e => {
						this.props.setMuteSettings(e);
						const t = this.hlsVideoApi;
						t && (e || t.setVolume(this.props.volume))
					}, this.goToSubreddit = e => {
						this.props.sendEvent(Object(B.h)(e)), this.props.onNavigation(e.path)
					}, this.isCurrentStreamWatchable = () => this.props.playbackState === z.a.LIVE || this.props.playbackState === z.a.VOD, this.state = {
						isUnavailableVideoJustFinished: !1,
						isVodStreamJustFinished: !1,
						isError: !1,
						isLoading: !0,
						isOverlayVisible: !1,
						isSwitchingOnStreamEndedScheduled: !1,
						isVideoPaused: !1,
						showStreamEndedPrompt: !1,
						videoCurrentTime: 0,
						videoTotalTime: 0
					}, this.onAutoPlayPrevented = this.onAutoPlayPrevented.bind(this), this.onClose = this.onClose.bind(this), this.onEnded = this.onEnded.bind(this), this.onNextStream = this.onNextStream.bind(this), this.onPlayerError = this.onPlayerError.bind(this), this.onPreviousStream = this.onPreviousStream.bind(this), this.onReport = this.onReport.bind(this), this.onVideoPlayerLevelLoaded = this.onVideoPlayerLevelLoaded.bind(this), this.onVideoPlayerLoadedData = this.onVideoPlayerLoadedData.bind(this), this.onVideoPlayerLoadingData = this.onVideoPlayerLoadingData.bind(this), this.onVideoPlayerResourceRemoved = this.onVideoPlayerResourceRemoved.bind(this), this.scheduleSwitchingOnStreamEnded = this.scheduleSwitchingOnStreamEnded.bind(this)
				}
				componentDidMount() {
					this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), this.props.inStreamingSubredditIntegration && this.props.onRecommendedViewerSubredditsSubscribe().then(e => this.unsubscribeRecommendedViewerSubreddits = e), this.props.setNewCorrelationId(), this.props.sendEvent(Object(F.n)()), document.addEventListener("keydown", this.onNextStreamKeyHandler), this.props.isIntroInProgress || this.handleNewStream()
				}
				componentDidUpdate(e) {
					const {
						currentStream: t,
						isIntroInProgress: s,
						isReportFlowOpen: r,
						playbackState: n,
						related: o,
						subreddit: i
					} = this.props;
					if ((o || i) !== (e.related || e.subreddit)) return this.props.resetHistory(), this.handleNewStream(), this.props.subscribeStreams().then(e => this.unsubscribeStreams = e), this.props.subscribeConfig().then(e => this.unsubscribeConfig = e), void(t || this.setState({
						isLoading: !0
					}));
					!s && e.isIntroInProgress && this.handleNewStream(), s || e.isIntroInProgress || !Tt(t, e.currentStream) || this.handleNewStream(), this.state.isSwitchingOnStreamEndedScheduled || s || !(!t && !this.state.isLoading || n === z.a.VOD && this.state.isVodStreamJustFinished || !this.isCurrentStreamWatchable() && this.state.isUnavailableVideoJustFinished) || (this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.scheduleSwitchingOnStreamEnded()), this.state.isVodStreamJustFinished && (this.setState({
						isVodStreamJustFinished: !1
					}), this.showStreamEndedPrompt()), this.state.isUnavailableVideoJustFinished && this.setState({
						isUnavailableVideoJustFinished: !1
					}), s || t || this.state.isLoading || this.state.isError || this.setState(Object.assign({}, this.state, {
						isError: !0
					})), r && this.state.isVideoPaused && this.setState({
						isVideoPaused: !0
					})
				}
				componentWillUnmount() {
					window.clearTimeout(this.overlayVisibilityTimeout), window.clearTimeout(this.switchingOnStreamEndedTimeout), this.onCurrentTimeChangedThrottled.cancel(), document.removeEventListener("keydown", this.onNextStreamKeyHandler), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.unsubscribeRecommendedViewerSubreddits && this.unsubscribeRecommendedViewerSubreddits(), this.unsubscribeConfig(), this.unsubscribeStreams()
				}
				render() {
					const {
						currentStream: e,
						currentStreamStartTime: t,
						currentHlsUrl: s,
						isIntroInProgress: r,
						isMuted: n,
						isOverlay: o,
						isReportFlowOpen: a,
						location: c,
						nextStream: d,
						playbackState: m,
						previousStream: u,
						related: h,
						sendEvent: p,
						subreddit: b,
						volume: v
					} = this.props, {
						videoCurrentTime: g,
						videoTotalTime: S
					} = this.state, w = e && !e.post.subreddit;
					return i.a.createElement("div", {
						className: Object(l.a)(kt.a.theaterContainer, {
							[kt.a.overlay]: o
						})
					}, i.a.createElement("div", {
						className: Object(l.a)(kt.a.panesWrapper, {
							[kt.a.initialized]: !r
						})
					}, i.a.createElement("div", {
						className: Object(l.a)(kt.a.pane, kt.a.leftPane)
					}, i.a.createElement("div", {
						className: kt.a.videoContainer
					}, (this.state.isLoading || this.state.isError) && i.a.createElement(ot, {
						previousStream: u,
						currentStream: e,
						nextStream: d
					}), s && i.a.createElement(V.a, {
						autoplay: !0,
						controls: !1,
						startTime: t,
						isPaused: this.state.isVideoPaused,
						muted: n,
						onAutoPlayPrevented: this.onAutoPlayPrevented,
						onEnded: this.onEnded,
						onError: this.onPlayerError,
						onLevelLoaded: this.onVideoPlayerLevelLoaded,
						onLoadedData: this.onVideoPlayerLoadedData,
						onLoadingData: this.onVideoPlayerLoadingData,
						onResourceRemoved: this.onVideoPlayerResourceRemoved,
						onTimeUpdate: this.onCurrentTimeChanged,
						playMutedOnPrevented: !0,
						ref: e => this.hlsVideoApi = e,
						url: s
					}), i.a.createElement(Xe, {
						currentStreamId: e && e.post.id,
						isLoading: this.state.isLoading,
						isLive: m === z.a.LIVE,
						isMuted: n,
						isPaused: this.state.isVideoPaused,
						isUnavailable: m === z.a.UNAVAILABLE,
						isVisible: this.state.isOverlayVisible,
						onReplayVideo: this.onReplayVideo,
						onShareVideo: this.onShareVideo,
						onPlayPauseToggle: this.onPlayPauseToggle,
						onReport: this.onReport,
						onScrubbing: this.onScrubbing,
						onSelectSubreddit: this.goToSubreddit,
						onToggleMenu: this.onToggleMenu,
						onVideoPositionUpdate: this.onVideoPlayerPositionUpdate,
						related: h,
						sendEvent: this.props.sendEvent,
						setVolume: this.onSetVolume,
						showErrorPrompt: this.state.isError,
						showStreamEndedPrompt: this.state.showStreamEndedPrompt,
						subreddit: b,
						toggleMute: this.onToggleMuteVideo,
						videoCurrentTime: g,
						videoTotalTime: S,
						volume: v
					}))), !r && i.a.createElement("div", {
						className: Object(l.a)(kt.a.pane, kt.a.rightPane)
					}, e && !w && i.a.createElement(Et, {
						location: c,
						postId: e.post.id,
						sendEvent: p,
						subredditId: e.post.subreddit.id
					}))), e && !r && i.a.createElement(jt, {
						nextStream: d,
						onNext: this.onNextStream,
						onPrevious: this.onPreviousStream,
						previousStream: u
					}), e && !r && o && i.a.createElement(Mt, {
						onClick: this.onClose
					}), e && !r && a && i.a.createElement(M.a, {
						useLiveStreamingFlow: !0,
						overlayCustomStyles: M.b,
						postId: e.post.id,
						timestamp: Math.trunc(g),
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
					}), t && !e.live && 0 !== e.endSN && s === z.a.LIVE && r(t.post.id)
				}
				onVideoPlayerLoadingData() {
					this.setState(Object.assign({}, this.state, {
						isLoading: !0,
						isError: !1
					}))
				}
				onVideoPlayerLoadedData() {
					this.setState(Object.assign({}, this.state, {
						isLoading: !1,
						isError: !1
					}))
				}
				onVideoPlayerResourceRemoved() {
					const {
						currentStream: e,
						receiveHlsStreamRemoved: t
					} = this.props;
					e && this.isCurrentStreamWatchable() && t(e.post.id)
				}
				onEnded() {
					const {
						currentStream: e,
						isIntroInProgress: t,
						playbackState: s,
						sendEvent: r,
						setIntroFinishedStatus: n
					} = this.props;
					if (this.setState({
							isVideoPaused: !0
						}), t) return n(!0), void this.setState(Object.assign({}, this.state, {
						isLoading: !!e
					}));
					e && r(Object(B.j)(e)), s !== z.a.VOD || this.state.isVodStreamJustFinished || this.setState({
						isVodStreamJustFinished: !0
					}), this.isCurrentStreamWatchable() || this.state.isUnavailableVideoJustFinished || this.setState({
						isUnavailableVideoJustFinished: !0
					})
				}
				onPlayerError() {
					this.props.sendEvent(Object(B.k)(this.props.currentStream)), this.setState(Object.assign({}, this.state, {
						isError: !0
					}))
				}
				onAutoPlayPrevented() {
					this.props.setMuteSettings(!0)
				}
				onClose() {
					this.props.isOverlay && this.props.closeLocation()
				}
				onReport() {
					this.props.currentStream && (this.props.onReportModalRequested(this.props.currentStream.post.id), this.props.sendEvent(Object(B.e)(this.props.currentStream)))
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
					this.state.isVideoPaused || this.setState({
						isVideoPaused: !0
					})
				}
				playVideo() {
					this.state.isVideoPaused && (this.hideStreamEndedPrompt(), this.setState({
						isVideoPaused: !1
					}))
				}
				replayVideo() {
					this.onVideoPlayerPositionUpdate(0), this.playVideo()
				}
				scheduleSwitchingOnStreamEnded() {
					this.cancelSwitchingOnStreamEnded(), this.switchingOnStreamEndedTimeout = window.setTimeout(() => {
						const {
							isReportFlowOpen: e,
							lastChatActivityUtcTs: t,
							nextTopStream: s
						} = this.props;
						s && !e && !Object(G.a)(t) && this.state.isSwitchingOnStreamEndedScheduled ? this.goToStream(s) : this.cancelSwitchingOnStreamEnded()
					}, E.j), this.setState(Object.assign({}, this.state, {
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
						const t = Object(h.e)(e),
							r = s ? "?related=".concat(s) : "";
						return "".concat(t).concat(r)
					}
					return Object(h.g)(e.post.id)
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
				async handleNewStream() {
					const {
						currentStream: e,
						fetchPostForStream: t,
						sendEvent: s,
						visitStream: r
					} = this.props;
					e && (this.setState({
						videoCurrentTime: 0,
						videoTotalTime: 0
					}), r(e.post.id), this.unsubscribeStats && this.unsubscribeStats(), this.unsubscribeHeartbeat && this.unsubscribeHeartbeat(), this.startJobIfLiveOrPaused(), t(e.post.id), this.syncLocationWithCurrentStreamId(), s(Object(B.l)(e)), this.showOverlayAfterStreamSwitching())
				}
				showOverlayAfterStreamSwitching() {
					window.clearTimeout(this.overlayVisibilityTimeout), this.overlayVisibilityTimeout = window.setTimeout(() => this.setState({
						isOverlayVisible: !1
					}), E.m), this.setState({
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
					const n = !r || Object(h.a)(e.post.id) === r;
					s(this.getStreamLocation(e), n)
				}
				startJobIfLiveOrPaused() {
					const {
						currentStream: e,
						onStatsSubscribe: t,
						onHeartbeatSubscribe: s
					} = this.props;
					e && this.isCurrentStreamWatchable() && (t(e.post.id).then(e => this.unsubscribeStats = e), s(e.stream.stream_id).then(e => this.unsubscribeHeartbeat = e))
				}
			}
			const Mt = e => {
					let {
						onClick: t
					} = e;
					return i.a.createElement("button", {
						className: kt.a.closeButton,
						onClick: t,
						"aria-label": g.fbt._("close button", null, {
							hk: "2l5YIS"
						})
					}, i.a.createElement(U.a, {
						className: kt.a.closeIcon
					}))
				},
				Tt = (e, t) => (e && e.post.id) !== (t && t.post.id);
			var Rt = Lt(Object(T.b)(Vt)),
				At = s("./src/reddit/contexts/InsideOverlay.tsx"),
				Dt = s("./src/reddit/helpers/overlay/index.ts"),
				Bt = s("./src/reddit/pages/PublicAccessNetwork/index.m.less"),
				Ft = s.n(Bt);
			const Ut = Object(d.c)({
					isEnabled: W.a,
					isIntroInProgress: G.b,
					isOnboardingModal: e => e.publicAccessNetwork.userSettings.shouldShowOnboardingModal && !0,
					related: (e, t) => {
						let {
							location: s,
							match: r
						} = t;
						const o = n()([...Object(m.a)(s.search)]).related,
							i = r.params.subreddit;
						return "home" === o || "r/popular" === o ? o : "popular" === i ? "r/popular" : i ? void 0 : "home"
					}
				}),
				Wt = Object(a.b)(Ut, (e, t) => ({
					onOpenLoginModal: () => e(Object(u.e)()),
					onStreamByIdRequested: t => e(Object(h.i)(t)),
					updateLocation: (t, s) => {
						let {
							isOverlay: r,
							useReplace: n
						} = s;
						const o = n ? c.c : c.b,
							i = r ? Object(Dt.b)(t) : t;
						e(o(i))
					}
				}));
			class Ht extends i.a.Component {
				constructor(e) {
					super(e), this.onNavigation = this.onNavigation.bind(this)
				}
				componentDidMount() {
					const {
						match: e,
						onStreamByIdRequested: t,
						isEnabled: s
					} = this.props;
					s && e.params.streamId && t(e.params.streamId)
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
						location: n,
						match: o,
						related: a
					} = this.props, {
						subreddit: c,
						streamId: d
					} = o.params;
					return e ? i.a.createElement("div", {
						className: Object(l.a)(Ft.a.rpanContainer, {
							[Ft.a.overlay]: r
						})
					}, i.a.createElement(Rt, {
						isOverlay: !!r,
						location: n,
						onNavigation: this.onNavigation,
						related: a,
						streamIdFromPath: d,
						subreddit: c && "r/".concat(c)
					}), s && !t && i.a.createElement(v, null)) : i.a.createElement(zt, null)
				}
			}
			const zt = () => i.a.createElement("div", {
				className: Object(l.a)(Ft.a.rpanContainer, Ft.a.forbiddenScreen)
			}, i.a.createElement("h2", null, i.a.createElement(be.c, null, "Not Found")));
			t.default = Wt(Object(T.b)(Object(At.b)(Ht)))
		},
		"./src/reddit/selectors/PublicAccessNetwork/streams.ts": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/lib/objectSelector/index.ts"),
				o = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				i = s("./src/reddit/actions/publicAccessNetwork/streams.ts"),
				a = s("./src/reddit/models/PublicAccessNetwork/index.ts"),
				c = s("./src/reddit/selectors/posts.ts"),
				d = s("./src/reddit/selectors/experiments/publicAccessNetwork.ts"),
				l = s("./src/reddit/selectors/PublicAccessNetwork/api.ts"),
				m = s("./node_modules/lodash/memoize.js");
			const u = e => e.publicAccessNetwork.listings,
				h = s.n(m)()(e => Object(n.a)(Object(r.a)(u, t => e && t.hasOwnProperty(e) ? t[e] : [])));
			var p = s("./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts");
			s.d(t, "k", (function() {
				return O
			})), s.d(t, "l", (function() {
				return I
			})), s.d(t, "m", (function() {
				return P
			})), s.d(t, "g", (function() {
				return k
			})), s.d(t, "c", (function() {
				return M
			})), s.d(t, "f", (function() {
				return T
			})), s.d(t, "j", (function() {
				return R
			})), s.d(t, "i", (function() {
				return A
			})), s.d(t, "e", (function() {
				return D
			})), s.d(t, "a", (function() {
				return U
			})), s.d(t, "h", (function() {
				return W
			})), s.d(t, "b", (function() {
				return H
			})), s.d(t, "d", (function() {
				return z
			}));
			const b = e => e.publicAccessNetwork.reports.reported,
				v = e => e.publicAccessNetwork.history,
				g = e => e.publicAccessNetwork.history.cursor,
				S = e => e.publicAccessNetwork.history.visitOrder,
				w = e => e.publicAccessNetwork.hlsStreams,
				C = Object(r.a)(w, e => e.ended),
				f = Object(r.a)(w, e => e.removed),
				E = Object(r.a)(e => e.publicAccessNetwork.models, C, f, (e, t, s) => {
					const r = t.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = B(r, a.b.ENDED) ? a.b.ENDED : r,
							o = s.stream.vod_accessible;
						return n === r && !0 === o ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !0
								})
							})
						})
					}, e);
					return s.reduce((e, t) => {
						const s = e[t];
						if (!s) return e;
						const r = s.stream.state,
							n = B(r, a.b.ENDED) ? a.b.ENDED : r,
							o = s.stream.vod_accessible;
						return n === r && !1 === o ? e : Object.assign({}, e, {
							[t]: Object.assign({}, s, {
								stream: Object.assign({}, s.stream, {
									state: n,
									vod_accessible: !1
								})
							})
						})
					}, r)
				}),
				O = (e, t) => {
					return E(e)[Object(i.k)(t)]
				},
				x = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, (e, t) => h(t.listingName)(e, t), E, b, c.f, d.b, (e, t, s, r, n, c) => {
					if (c) {
						const o = [];
						if (e) {
							const t = Object(i.k)(e);
							s[t] && o.push(t)
						}
						const c = o.concat(t),
							d = [...new Set(c)],
							l = new Set([...r, ...n]);
						return d.filter(e => {
							const t = s[e];
							return !l.has(e) && !t.post.isHidden && t.stream.state !== a.b.KILLED && t.stream.state !== a.b.PURGED
						})
					}
					const d = new Set([...r, ...n]);
					return Object.keys(s).filter(e => !d.has(e)).map(e => s[e]).filter(e => e.rank !== o.l).filter(e => !e.post.isHidden).filter(e => e.stream.state !== a.b.KILLED && e.stream.state !== a.b.PURGED).map(e => e.post.id)
				}),
				y = Object(r.a)((e, t) => {
					let {
						count: s
					} = t;
					return s
				}, E, (e, t) => {
					let {
						listingName: s,
						streamIdFromPath: r
					} = t;
					return x(e, {
						listingName: s,
						streamIdFromPath: r
					})
				}, (e, t, s) => {
					const r = s.map(e => t[e]).sort((e, t) => t.rank - e.rank).map(e => e.post.id);
					return e ? r.slice(0, e) : r
				}),
				I = Object(r.a)(E, y, (e, t) => {
					const s = t.find(t => {
						const s = e[t];
						return !!s && s.stream.state === a.b.IS_LIVE
					});
					if (s) return e[s]
				}),
				P = Object(r.a)(E, y, (e, t) => t.map(t => e[t]).filter(e => !!e && e.stream.state === a.b.IS_LIVE).reduce((e, t) => e + t.continuous_watchers, 0)),
				j = Object(r.a)(S, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return y(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t) => {
					const s = new Set(e),
						r = t.filter(e => !s.has(e));
					if (r.length) return r[0]
				}),
				N = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s
				}, E, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return y(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, v, (e, t, s, r) => {
					if (!s.length) return;
					const n = s.map(e => t[e]).filter(t => t && t.post.id !== e),
						o = n.find(e => e.stream.state === a.b.IS_LIVE);
					if (o) return o.post.id;
					const i = n.find(e => {
						if (!e.stream.vod_accessible) return !1;
						return (r.timestamps[e.post.id] || 0) < e.broadcast_time
					});
					return i ? i.post.id : void 0
				}),
				k = Object(n.a)(Object(r.a)(N, E, (e, t) => e ? t[e] : void 0)),
				_ = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? Object(i.k)(s) : void 0
				}, N, b, c.f, (e, t) => {
					let {
						related: s,
						streamIdFromPath: r,
						subreddit: n
					} = t;
					return y(e, {
						listingName: s || n,
						streamIdFromPath: r
					})
				}, (e, t, s, r, n) => !e || s.includes(e) || r.includes(e) ? t || n[0] : e),
				L = Object(r.a)(g, S, j, (e, t, s) => e < t.length - 1 ? t[e + 1] : s),
				V = Object(r.a)(g, S, (e, t) => {
					if (e > 0) return t[e - 1]
				}),
				M = Object(n.a)(Object(r.a)(_, E, (e, t) => e ? t[e] : void 0)),
				T = Object(n.a)(Object(r.a)(L, E, (e, t) => e ? t[e] : void 0)),
				R = Object(n.a)(Object(r.a)(V, E, (e, t) => e ? t[e] : void 0)),
				A = (Object(n.a)(Object(r.a)(e => e.publicAccessNetwork.preloads.discoveryUnitThumbnails, E, (e, t) => Object.keys(e).filter(e => !!t[e]).map(s => Object.assign({}, t[s], {
					preloadedPreviewUrl: e[s]
				})))), Object(r.a)((e, t) => {
					let {
						streamId: s
					} = t;
					return s
				}, e => e.publicAccessNetwork.preloads.streamPreviews, (e, t) => t[e])),
				D = Object(r.a)((e, t) => {
					let {
						streamIdFromPath: s
					} = t;
					return s ? O(e, s) : void 0
				}, e => !e || e.chat_disabled);

			function B(e, t) {
				const s = {
					[a.b.NOT_STARTED]: 0,
					[a.b.PUBLISHED]: 1,
					[a.b.IS_LIVE]: 2,
					[a.b.DISCONNECTED]: 2,
					[a.b.ENDED]: 3,
					[a.b.KILLED]: 4,
					[a.b.PURGED]: 4
				};
				return s[t] >= s[e]
			}
			const F = Object(r.a)(_, v, (e, t) => e && t.timestamps[e] || 0);
			var U;
			! function(e) {
				e[e.LIVE = 0] = "LIVE", e[e.VOD = 1] = "VOD", e[e.UNAVAILABLE = 2] = "UNAVAILABLE", e[e.INTRO = 3] = "INTRO"
			}(U || (U = {}));
			const W = Object(r.a)(_, E, p.b, (e, t, s) => {
					if (s) return U.INTRO;
					const r = e && t[e];
					if (!r) return U.UNAVAILABLE;
					const n = r.stream.state;
					return n === a.b.IS_LIVE || n === a.b.DISCONNECTED ? U.LIVE : n === a.b.ENDED && r.stream.vod_accessible ? U.VOD : U.UNAVAILABLE
				}),
				H = Object(r.a)(M, W, p.b, l.c, l.p, (e, t, s, r, n) => s ? r : e ? t === U.LIVE || t === U.VOD ? e.stream.hls_url : n : void 0),
				z = Object(r.a)(M, W, F, (e, t, s) => e ? t === U.LIVE ? e.broadcast_time : t === U.VOD && s < e.broadcast_time ? s : 0 : 0)
		},
		"./src/reddit/selectors/PublicAccessNetwork/theaterSettings.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return a
			})), s.d(t, "c", (function() {
				return c
			})), s.d(t, "a", (function() {
				return d
			}));
			var r = s("./node_modules/reselect/es/index.js"),
				n = s("./src/reddit/actions/publicAccessNetwork/constants.ts"),
				o = s("./src/reddit/selectors/PublicAccessNetwork/api.ts");
			const i = e => e.publicAccessNetwork.theaterSettings,
				a = Object(r.a)(i, o.o, (e, t) => t && !e.isIntroFinished),
				c = Object(r.a)(i, e => e.lastChatActivityUtcTs),
				d = e => !!e && e + n.a > Date.now()
		}
	}
]);
//# sourceMappingURL=PublicAccessNetwork.05b928a918c81af8e2e9.js.map